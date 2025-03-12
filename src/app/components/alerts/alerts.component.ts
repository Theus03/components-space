import { Component } from '@angular/core';
import { SmallComponent } from './small/small.component';
import { LargeComponent } from "./large/large.component";

@Component({
  selector: 'app-alerts',
  imports: [SmallComponent, LargeComponent],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {

}
