import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  URL:String = "http://localhost:8082/email/"

  constructor(private http: HttpClient) { }

  sendEmail(data:any){
    const URL= this.URL + "email.php";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(URL,data,{ headers: headers }); 
  }
}
