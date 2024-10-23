import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAlphaComponent } from '../feature-alpha/feature-alpha.component';
import { FeatureBetaComponent } from '../feature-beta/feature-beta.component';

@Component({
  selector: 'mfe-home',
  standalone: true,
  imports: [
    CommonModule,

    FeatureAlphaComponent,
    FeatureBetaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
