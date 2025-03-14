import { Component } from '@angular/core';

@Component({
  selector: 'app-small',
  imports: [],
  templateUrl: './small.component.html',
  styleUrl: './small.component.css'
})
export class SmallComponent {
  smallComponent = {
    template: `
      <style>

button {
  width: 100%;
  background-color: black;
  border: none;
  border-radius: 8px;
  padding: 0.8rem;
  color: white;
  font-family: "Inter";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;    
  cursor: pointer;
  transition: 0.4s ease-in-out;
}

button:hover {
  transform: translateX(5%);
}
      </style>
      <button type="button">Small</button>
    `
  }

  copySmall = () => {
    navigator.clipboard.writeText(this.smallComponent.template);
    alert("✅ Código copiado com sucesso!");
  }
}
