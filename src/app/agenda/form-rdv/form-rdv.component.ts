import {Component, Input, OnInit} from '@angular/core';

import { Rdv } from '../rdv';

@Component({
  selector: 'app-form-rdv',
  templateUrl: './form-rdv.component.html',
  styleUrls: ['./form-rdv.component.css']
})
export class FormRdvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() rdv: Rdv;

  onSubmit() {
    if(this.rdv.user !== '') {
      this.rdv.isFree = false;
    }
  }

}
