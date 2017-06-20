import { Injectable } from '@angular/core';

import { Rdv } from './rdv';
import { MONDAY } from './mock-monday';

@Injectable()
export class AgendaService {

  constructor() { }

  getRdvs(day): Promise<Rdv[]> {
    switch (day) {
      case 1: {
        return Promise.resolve(MONDAY);
      }
    }
  }

}
