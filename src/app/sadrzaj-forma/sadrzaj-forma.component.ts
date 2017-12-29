import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { Sadrzaj } from '../sadrzaj';
import { ViewChildren } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-sadrzaj-forma',
  templateUrl: './sadrzaj-forma.component.html',
  styleUrls: ['./sadrzaj-forma.component.css']
})
export class SadrzajFormaComponent implements OnInit {

	// Varijable za formu za uređivanje postojećeg članka
	private sadrzaj: Array<any>;
	@ViewChild('sadrzajForm') form: any;
	trenutniSadrzaj;
	activeTabTrenutni: number = 1;
	@ViewChild('imgInputTrenutni') imgInputTrenutni: any;

	// Varijable za formu za dodavanje novog članka
	clanakSlika: boolean = false;
	@ViewChild('addSadrzajForm') addSadrzajForm: any;
	newSadrzaj: Sadrzaj = {
		pic: false,
		name: '',
		text: ''
	};
	activeTab: number = 1;
	@ViewChild('imgInput') imgInput;
	imgToUpload: File;
	savedImgs;

	constructor(private _dataService: DataService) { }

	ngOnInit() {
		this.pullSadrzaj();
		this.pullImgs();
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
				pic: clanak.pic,
				name: clanak.name,
				text: clanak.text,
				img: clanak.img?clanak.img:null
			};

			this._dataService.updateSadrzaj(updClanak)
				.subscribe();
		}
	}

	delSadrzaj(br) {
		this._dataService.deleteSadrzaj(this.sadrzaj[br]._id)
			.subscribe(data => {
				this.pullSadrzaj();
				this.setNoviClanak(0);
			});
	}

	setTip(bool) {
		this.clanakSlika = !this.clanakSlika;
		this.newSadrzaj.pic = this.clanakSlika;
	}

	selectImgFromSrv(tip, img) {
		tip === 'trenutni' ? this.trenutniSadrzaj.img = `uploads/img/${img}` : this.newSadrzaj.img = `uploads/img/${img}`;
	}

	imgChangeEvent(tip, fileInput: any) {
		this.imgToUpload = <File>fileInput.target.files[0];
		this.uploadImg(tip);
	}

	setExtLink(tip, imgInput) {
		tip === 'trenutni' ? this.trenutniSadrzaj.img = imgInput.target.value : this.newSadrzaj.img = imgInput.target.value;
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

	toggleActiveTab(tip, n) {
		tip === 'trenutni' ? this.activeTabTrenutni = n : this.activeTab = n;
	}

	pullImgs() {
		this._dataService.getImgs()
			.subscribe(res => this.savedImgs = res);
	}

	uploadImg(tip) {
		const formData: any = new FormData();
		formData.append("uploadImg", this.imgToUpload);
		this._dataService.postImg(formData)
			.subscribe(
				(response) => { tip === 'novi' ? this.newSadrzaj.img = `uploads/img/${response.filename}` : this.trenutniSadrzaj.img = `uploads/img/${response.filename}` },
				(error) => { console.log(error) }
			);
		
		this.imgToUpload = null;
		this.pullImgs();
	}

	validateImg(tip) {
		if(tip === 'novi') {
			if(this.newSadrzaj.pic) {
				return this.newSadrzaj.img?false:true;
			} else {
				return false;
			}
		} else {
			if(this.trenutniSadrzaj.pic) {
				return this.trenutniSadrzaj.img?false:true;
			} else {
				return false;
			}
		}
	}

}
