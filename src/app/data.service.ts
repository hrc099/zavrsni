import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Sadrzaj } from './sadrzaj'

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  logoutUser() {
    return this._http.get("/logout")
    .map(result => this.result = result);
  }

  getUsers() {
    return this._http.get("/api/clanovi")
      .map(result => this.result = result.json().data);
  }

  addClan(newUser) {
  	return this._http.post("/api/clan", newUser)
  		.map(res => res.json().data);
  }

  updateClan(updUser) {
  	return this._http.put("/api/clanovi/"+updUser._id, updUser)
  		.map(res => res.json().data);
  }

  deleteClan(_id) {
  	return this._http.delete("/api/clanovi/"+_id);
  }

  getSadrzaj(): Observable<Sadrzaj[]> {
  	return this._http.get("/api/sadrzaj")
  		.map(res => res.json().data);
  }

  updateSadrzaj(updClanak) {
  	return this._http.put("/api/sadrzaj/"+updClanak._id, updClanak)
  		.map(res => res.json().data);
  }

  addSadrzaj(noviClanak) {
    return this._http.post("/api/addsadrzaj", noviClanak)
      .map(res => res.json().data);
  }

  deleteSadrzaj(_id) {
    return this._http.delete("/api/sadrzaj/"+_id);
  }

  postDat(formData) {
    return this._http.post("/api/uploadDoc", formData);
  }

  postImgs(formData) {
    return this._http.post("/api/uploadImgs", formData);
  }

  getDocs() {
    return this._http.get("/api/uploads/doc")
      .map(res => res.json().data);
  }

  getImgs() {
    return this._http.get("/api/uploads/img")
      .map(res => res.json().data);
  }

  postImg(formData) {
    return this._http.post("/api/uploadImg", formData)
      .map(res => res.json().data);
  }

  delDat(path) {
    return this._http.post("/api/deleteDat", {path: path})
      .map(res => res.json().data);
  }

  downloadDat(arr) {
    let headers = new Headers();
    headers.append('responseType', 'arraybuffer');
    return this._http.post("/api/downloadDat", arr)
      .map(res => res.json().data);
      //.map(res => new Blob([res], {type: 'application/zip'}));
  }

  delDats(arr) {
    return this._http.post("/api/deleteDats", arr)
      .map(res => res.json().data);
  }

}