import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private static _counter = 0;

  get counter(): number {
    return HelloService._counter;
  }

  constructor() { 
    HelloService._counter++;
    console.log(`HelloService:constructor ${this.counter}`);
  }

  hello(stranger: string): string {
    return `Hello, ${stranger}! (#${this.counter})`;
  }
}
