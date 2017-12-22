import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { Sadrzaj } from '../sadrzaj';

@Component({
  selector: 'app-sadrzaj-forma',
  templateUrl: './sadrzaj-forma.component.html',
  styleUrls: ['./sadrzaj-forma.component.css']
})
export class SadrzajFormaComponent implements OnInit {

	private sadrzaj: Array<any>;
	@ViewChild('sadrzajForm') form: any;
	trenutniSadrzaj;

	clanakSlika: boolean = false;
	@ViewChild('addSadrzajForm') addSadrzajForm: any;
	newSadrzaj: Sadrzaj = {
		pic: false,
		name: '',
		text: ''
	};

	constructor(private _dataService: DataService) { }

	ngOnInit() {
		this.pullSadrzaj();
	}

	pullSadrzaj() {
		this._dataService.getSadrzaj()
			.subscribe(res => this.sadrzaj = res);
	}

	setNoviClanak(index) {
		this.trenutniSadrzaj = this.sadrzaj[index];
	}

	updSadrzaj(clanak) {
		var updClanak = {};
		if (this.form.valid) {
			updClanak = {
				_id: clanak._id,
				name: clanak.name,
				text: clanak.text,
				img: clanak.img?clanak.img:null
			};

			this._dataService.updateSadrzaj(updClanak)
				.subscribe();
		}
	}

	setTip(bool) {
		this.clanakSlika = !this.clanakSlika;
		this.newSadrzaj.pic = this.clanakSlika;
	}

	addSadrzaj() {
		if(this.addSadrzajForm.valid) {
			this._dataService.addSadrzaj(this.newSadrzaj)
				.subscribe(data => {
					this.pullSadrzaj();
				});
			this.newSadrzaj = new Sadrzaj(false, '', '');
		}
	}

	delSadrzaj(br) {
		console.log(this.sadrzaj[br]);
		this._dataService.deleteSadrzaj(this.sadrzaj[br]._id)
			.subscribe(data => {
				this.pullSadrzaj();
			});
	}

}
