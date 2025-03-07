import { Component } from '@angular/core';
import { SmallComponent } from "./small/small.component";
import { MediumComponent } from "./medium/medium.component";

@Component({
  selector: 'app-card',
  imports: [SmallComponent, MediumComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
