import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { CardComponent } from "./components/card/card.component";
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components-space';

  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
      this.primeng.ripple.set(true);
  }
}
