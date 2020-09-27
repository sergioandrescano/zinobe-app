import { Component, Input, OnInit } from '@angular/core';
import { Bank } from 'src/app/core/models/bank.model';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent {

  @Input() bank: Bank;

}
