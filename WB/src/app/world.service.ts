import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { World } from './world';
import { WORLDS } from './mock-worlds';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class WorldService {

  constructor(private messageService: MessageService) { }

  getWorlds(): Observable<World[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('WorldService: fetched Worlds');
    return of(WORLDS);
  }
}