import { Component, OnInit } from '@angular/core';

import { AgendaService } from './agenda.service';
import {Rdv} from './rdv';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers: [AgendaService]
})
export class AgendaComponent implements OnInit {

  monday: Rdv[];

  constructor(private agendaService: AgendaService) { }

  getRdvs(): void {
    this.agendaService.getRdvs(1).then(monday => this.monday = monday);
  }

  ngOnInit(): void {
    this.getRdvs();
  }

}
