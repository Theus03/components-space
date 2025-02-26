import { Component } from '@angular/core';
import { SmallComponent } from "./small/small.component";

@Component({
  selector: 'app-card',
  imports: [SmallComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
