import { Component } from '@angular/core';
import { SmallComponent } from "./small/small.component";
import { MediumComponent } from "./medium/medium.component";
import { LargeComponent } from "./large/large.component";

@Component({
  selector: 'app-card',
  imports: [SmallComponent, MediumComponent, LargeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
