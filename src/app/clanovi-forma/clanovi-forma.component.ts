import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService } from '../data.service';
import { Clan } from '../clan';

@Component({
  selector: 'app-clanovi-forma',
  templateUrl: './clanovi-forma.component.html',
  styleUrls: ['./clanovi-forma.component.css']
})
export class ClanoviFormaComponent implements OnInit {

  // Define a users property to hold our user data
  clanovi: Array<any>;
  backupClan = {};
  msgHidden: boolean = true;
  error: string = '';
  newClan: Clan = {
  	name: '',
  	surname: '',
  	status: 'redovno',
  	isActive: true
  };
  @ViewChild('formAddClan') formClan: any;
  searchText: string = '';
  nameBackup: string = '';
  surnameBackup: string = '';
  statusBackup: string = '';
  isActiveBackup: boolean;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
  	// Access the Data Service's getUsers() method we defined
    this._dataService.getUsers()
        .subscribe(res => this.clanovi = res);
  }

  addClan() {
  	var result;
  	if(this.formClan.valid) {
  		this.newClan.name = this.capitalizeFirstLetter(this.newClan.name);
  		this.newClan.surname = this.capitalizeFirstLetter(this.newClan.surname);
  		result = this._dataService.addClan(this.newClan);
  		result.subscribe(x => {
  			this._dataService.getUsers()
        		.subscribe(res => this.clanovi = res);
  			this.newClan = {
			  	name: '',
			  	surname: '',
			  	status: 'redovno',
			  	isActive: true
			  };
  		});
  	}
  }

  setEditState(user, state) {
  	if(state) {
  		user.isEditMode = state;
  		this.nameBackup = user.name;
  		this.surnameBackup = user.surname;
  		this.statusBackup = user.status;
  		this.isActiveBackup = user.isActive;
  	} else {
  		delete user.isEditMode;
  	}
  }

  setStatusClan(user, value) {
  	user.status = value;
  }

  setIsActive(user, bool) {
  	if(bool) {
  		user.isActive = bool;
  	} else {
  		delete user.isActive;
  	}
  }

  updClan(user) {
  	if(!user._id) {
  		this.error = "Član nema ID - ako je bio obrisan, nije povukao novi ID iz baze - osvježi stranicu";
  		return;
  	}
  	var updUser = {};
  	if(!user.name || !user.surname || !user.status) {
  		this.error = "Ime, prezime i status člana moraju biti popunjeni!";
  		return;
  	} else {
  		user.name = this.capitalizeFirstLetter(user.name);
  		user.surname = this.capitalizeFirstLetter(user.surname);
  		//console.log(user.name + " " + user.surname);
  		updUser = {
  			_id: user._id,
  			name: user.name,
  			surname: user.surname,
  			status: user.status,
  			isActive: user.isActive
  		};
  		this._dataService.updateClan(updUser)
  			.subscribe();
  	}
  }

  cancelChanges(user) {
  	user.name = this.nameBackup;
  	user.surname = this.surnameBackup;
  	user.status = this.statusBackup;
  	user.isActive = this.isActiveBackup;
  }

  updOnEnter(user) {
  	if(!user.name || !user.surname) {
  		user.name = this.nameBackup;
  		user.surname = this.surnameBackup;
  		this.error = "Ime i prezime člana moraju biti ispunjeni";
  		this.nameBackup = '';
  		this.surnameBackup = '';
  	} else {
  		this.updClan(user);
  	}
  }

  delClan(clan) {
  	if(!clan._id) {
  		this.error = "Član nema ID - ako je bio obrisan, nije povukao novi ID iz baze - osvježi stranicu";
  		return;
  	}
  	this.backupClan = {
  		name: clan.name,
  		surname: clan.surname,
  		status: clan.status,
  		isActive: clan.isActive
  	};
  	var clanovi = this.clanovi;
  	this._dataService.deleteClan(clan._id)
  		.subscribe(data => {
  			this._dataService.getUsers()
        		.subscribe(res => this.clanovi = res);
  		});
	this.msgHidden=false;
  }

  reviveClan() {
  	var result;
  	result = this._dataService.addClan(this.backupClan);
  	result.subscribe(x => {
		this._dataService.getUsers()
        	.subscribe(res => this.clanovi = res);
		this.backupClan = {};
	});
  }

  capitalizeFirstLetter(string):string {
    return string && string.charAt(0).toUpperCase() + string.slice(1);
}

}
