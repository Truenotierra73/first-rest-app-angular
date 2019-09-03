import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor( private http: HttpClient) { }

  makeGetRequest(request: string) {
    const PATH = 'https://reqres.in/api/';

    return this.http.get(`${PATH}${request}`);
  }

  getUsers(page?: number) {
    if (page) {
      return this.makeGetRequest(`users?page=${page}`);
    } else {
      return this.makeGetRequest('users');
    }
  }

  getUser(userId: number) {
    return this.makeGetRequest(`users/${userId}`);
  }
}
