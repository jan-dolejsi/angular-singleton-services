import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from '../hello.service';

@Component({
  selector: 'mfe-feature-alpha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-alpha.component.html',
  styleUrls: ['./feature-alpha.component.css']
})
export class FeatureAlphaComponent {
  greeting: string;

  constructor(private readonly helloService: HelloService) {
    this.greeting = helloService.hello('Alpha');
  }
}
