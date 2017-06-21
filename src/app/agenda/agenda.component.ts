import { Component, OnInit } from '@angular/core';

import { AgendaService } from './agenda.service';
import { Day } from './day';
import { Rdv } from './rdv';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  providers: [AgendaService]
})
export class AgendaComponent implements OnInit {

  week: Day[];

  selectedRdv: Rdv;

  constructor(private agendaService: AgendaService) { }

  getRdvs(): void {
    this.agendaService.getRdvs().then(week => this.week = week);
  }

  onSelect(rdv: Rdv): void {
    this.selectedRdv = rdv;
  }

  ngOnInit(): void {
    this.getRdvs();
  }

}
