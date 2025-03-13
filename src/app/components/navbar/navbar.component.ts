import { Component } from '@angular/core';
import { SideComponent } from "./side/side.component";
import { TopComponent } from "./top/top.component";

@Component({
  selector: 'app-navbars',
  imports: [SideComponent, TopComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
