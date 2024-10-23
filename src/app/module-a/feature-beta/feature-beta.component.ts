import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from '../hello.service';
import { DataCacheService } from 'ngx-my-lib';

@Component({
  selector: 'mfe-feature-beta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-beta.component.html',
  styleUrls: ['./feature-beta.component.css']
})
export class FeatureBetaComponent implements OnInit {
  greeting: string;
  readonly data = signal(0);

  constructor(private readonly helloService: HelloService,
    private readonly dataCacheService: DataCacheService) {
    this.greeting = helloService.hello('Beta');
  }

  ngOnInit(): void {
    this.data.set(this.dataCacheService.getData());
  }
}
