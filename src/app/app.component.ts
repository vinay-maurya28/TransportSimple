import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisualRouteComponent } from './visual-route/visual-route.component';

@Component({
  selector: 'app-root',
  imports: [VisualRouteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
  title = 'TransportSimple';
}
