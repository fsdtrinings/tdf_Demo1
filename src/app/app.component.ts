import { Account } from './Account';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TDF-App';

  accountObj:Account = new Account('',0,'');


  onSubmit(accountForm:NgForm)
  {
    console.log("form submitted..."+accountForm.value.name);

    this.accountObj.name = accountForm.value.name;
    this.accountObj.balance = accountForm.value.balance;
    this.accountObj.email = accountForm.value.email;

    console.log(this.accountObj);
    
  }
}
