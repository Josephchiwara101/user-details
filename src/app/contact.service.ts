import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
//import { Http, Headers } from '@angular/http';
import { Contact } from './contact';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }

  getContacts(): Observable<any>
  {
    return this.httpClient.get('http://localhost:3000/api/contacts')
     
  }

  addContact(conta:Contact): Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/contact', conta)
  }
}
