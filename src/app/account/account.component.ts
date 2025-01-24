import { Component, Input } from '@angular/core';
import { Account } from '../home/models/account';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {


  @Input() accountSummoner!: Account;


  
  renovar(){
    
  }
}
