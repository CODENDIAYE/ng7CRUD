import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CrudService {
	public url = 'http://localhost/web_api/';
  	constructor(private http: HttpClient) { }
}
