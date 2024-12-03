import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpapiService {

  host = "http://localhost:8000";

  constructor(private http: HttpClient) { }

  getEmployes() {
    let url = this.host + '/employes';
    return this.http.get(url)
  }
}
