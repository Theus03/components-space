import { Component } from '@angular/core';
import { SmallComponent } from './small/small.component';
import { MediumComponent } from './medium/medium.component';
import { LargeComponent } from "./large/large.component";

@Component({
  selector: 'app-buttons',
  imports: [SmallComponent, MediumComponent, LargeComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

}
