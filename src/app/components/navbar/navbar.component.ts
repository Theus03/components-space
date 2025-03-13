import { Component } from '@angular/core';
import { SideComponent } from "./side/side.component";

@Component({
  selector: 'app-navbars',
  imports: [SideComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
