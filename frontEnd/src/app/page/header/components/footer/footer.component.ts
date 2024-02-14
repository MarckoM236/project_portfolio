import { Component } from '@angular/core';
import { UserService } from 'src/app/page/main/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  user_name:String = "";

  constructor(private _user:UserService){}

  ngOnInit(){
    let data = this._user.getUserInfo();
    this.user_name = data.first_name + " " + data.first_lastname;
  }
}
