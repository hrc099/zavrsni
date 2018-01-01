import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-datoteke-forma',
  templateUrl: './datoteke-forma.component.html',
  styleUrls: ['./datoteke-forma.component.css']
})
export class DatotekeFormaComponent implements OnInit {

  // Doc managment
  @ViewChild('fileInput') fileInput;
  filesToUpload: Array<File> = [];
  savedDocs: Array<any> = [];

  // Img managment
  @ViewChild('imgInput') imgInput;
  imgsToUpload: Array<File> = [];
  savedImgs;

  err: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.pullDocs();
    this.pullImgs();
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
  }

  imgChangeEvent(imgInput: any) {
    this.imgsToUpload = <Array<File>>imgInput.target.files;
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

  uploadImgs() {
    const formData: any = new FormData();
    const files: Array<File> = this.imgsToUpload;

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    //console.log('form data variable :   '+ formData.toString());

    this._dataService.postImgs(formData)
    	.map(files => files.json())
    	.subscribe(
    		(response) => console.log('Slike prenesene'),
    		(error) => { this.err = error + ' - ' + 'Greška - prevelika datoteka, previše odabranih datoteka ili nedopušteni format'; setTimeout(() => { this.err = ''; }, 5000); }
    	);
    
    this.imgInput.nativeElement.value = "";
  }

  pullDocs() {
    this._dataService.getDocs().subscribe(
      (res) => {
        this.savedDocs = res.json();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  pullImgs() {
		this._dataService.getImgs()
			.subscribe(res => this.savedImgs = res);
  }
  
  detectExt(filename) {
    return filename.split('.').pop();
  }

  setImgByExt(doc) {
    switch(this.detectExt(doc)) {
      case 'pdf':
        return 'fa fa-file-pdf-o';
      case 'doc' || 'docx':
        return 'fa fa-file-word-o';
      case 'xls' || 'xlsx':
        return 'fa fa-file-excel-o';
      case 'ppt' || 'pptx':
        return 'fa fa-file-powerpoint-o';
      case 'png' || 'jpg' || 'jpeg' || 'svg' || 'gif':
        return 'fa fa-file-image-o';
      default:
        return 'fa fa-file-text-o';
    }
  }
}
