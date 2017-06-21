import { Injectable } from '@angular/core';

import { Day } from './day';
import { WEEK } from './mock-agenda';

@Injectable()
export class AgendaService {

  constructor() { }

  getRdvs(): Promise<Day[]> {
    return Promise.resolve(WEEK);
  }

}
