import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../../../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  user_contact : any;
  result!:String;
  submitted:boolean = false;
  error:boolean = false;

  constructor(private _user:UserService, private translate:TranslateService, private _mail:MailService){}

  ngOnInit(){
    let data = this._user.getUserInfo();

    this.user_contact = {
      "phone" : data.phone,
      "city" : data.city,
      "country" : data.country,
      "email" : data.email
    }
  }

  //validate form fields.
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  //send form data to service.
  submitForm() {
    this.submitted = true;
    if (this.contactForm.valid){
      this._mail.sendEmail(this.contactForm.value).subscribe((response:any)=>{
        this.result = response.message;
        this.submitted=false;  
        this.contactForm.reset();
      })
    }
  }

  

}
