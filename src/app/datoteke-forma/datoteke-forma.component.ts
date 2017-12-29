import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-datoteke-forma',
  templateUrl: './datoteke-forma.component.html',
  styleUrls: ['./datoteke-forma.component.css']
})
export class DatotekeFormaComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  filesToUpload: Array<File> = [];
  err: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }

  checkFileSizes(filesToUpload): boolean {
  	for(let i = 0; i < filesToUpload.length; i++) {
  		if (filesToUpload[i].size > 100000000) { return false; }
  	}
  	return true;
  }

  uploadDat() {
  	const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    //console.log('form data variable :   '+ formData.toString());

    this._dataService.postDat(formData)
    	.map(files => files.json())
    	.subscribe(
    		(response) => console.log('Datoteka prenesena'),
    		(error) => { this.err = error + ' - ' + 'Greška - prevelika datoteka, previše odabranih datoteka ili nedopušteni format'; setTimeout(() => { this.err = ''; }, 5000); }
    	);
    
    this.fileInput.nativeElement.value = "";
  }
}
