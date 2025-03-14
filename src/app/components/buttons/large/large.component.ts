import { Component } from '@angular/core';

@Component({
  selector: 'app-large',
  imports: [],
  templateUrl: './large.component.html',
  styleUrl: './large.component.css'
})
export class LargeComponent {
  largeComponent = {
    template: `
      <style>
        button {
          width: 400px;
          background-color: black;
          border: none;
          border-radius: 8px;
          padding: 1.3rem;
          color: white;
          font-family: "Inter";
          font-size: 2.4rem;
          font-weight: 400;
          text-align: center;    
          cursor: pointer;
          transition: 0.4s ease-in-out;
        }

        button:hover {
          transform: translateX(5%);
        }
      </style>
      <button type="button">Large</button>
    `
  }

  copyLarge = () => {
    navigator.clipboard.writeText(this.largeComponent.template);
    alert("✅ Código copiado com sucesso!");
  }
}
