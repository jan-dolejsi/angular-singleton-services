import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from '../hello.service';
import { DataTransformService } from 'ngx-my-lib';

@Component({
  selector: 'mfe-feature-alpha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-alpha.component.html',
  styleUrls: ['./feature-alpha.component.css']
})
export class FeatureAlphaComponent implements OnInit {
  greeting: string;
  readonly data = signal(0);

  constructor(private readonly helloService: HelloService,
    private readonly dataTransformService: DataTransformService) {
    this.greeting = helloService.hello('Alpha');
  }

  ngOnInit(): void {
    this.data.set(this.dataTransformService.transform());
  }
}
