import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCacheService {

  private static _counter = 0;

  get counter(): number {
    return DataCacheService._counter;
  }

  constructor() {
    DataCacheService._counter++;
    console.log(`DataCacheService:constructor ${this.counter}`);
  }

  getData(): number {
    return 3.14;
  }
}
