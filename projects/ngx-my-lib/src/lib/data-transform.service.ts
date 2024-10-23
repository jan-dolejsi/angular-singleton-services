import { Injectable } from '@angular/core';
import { DataCacheService } from './data-cache.service';

@Injectable({
  providedIn: 'root'
})
export class DataTransformService {
  private static _counter = 0;

  get counter(): number {
    return DataTransformService._counter;
  }

  constructor(private readonly dataCacheService: DataCacheService) { 
    DataTransformService._counter++;
    console.log(`DataTransformService:constructor ${this.counter}`);
  }

  transform(): number {
    return this.dataCacheService.getData() * 2;
  }
}
