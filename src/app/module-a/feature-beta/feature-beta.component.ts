import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from '../hello.service';

@Component({
  selector: 'mfe-feature-beta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-beta.component.html',
  styleUrls: ['./feature-beta.component.css']
})
export class FeatureBetaComponent {
  greeting: string;

  constructor(private readonly helloService: HelloService) {
    this.greeting = helloService.hello('Beta');
  }
}
