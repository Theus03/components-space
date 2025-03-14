import { Component } from '@angular/core';

@Component({
  selector: 'app-medium',
  imports: [],
  templateUrl: './medium.component.html',
  styleUrl: './medium.component.css'
})
export class MediumComponent {
  mediumComponent = {
    template: `
      <style>
        
        button {
          width: 100%;
          background-color: black;
          border: none;
          border-radius: 8px;
          padding: 1.3rem;
          color: white;
          font-family: "Inter";
          font-size: 1.8rem;
          font-weight: 400;
          text-align: center;    
          cursor: pointer;
          transition: 0.4s ease-in-out;
        }

        button:hover {
          transform: translateX(5%);
        }
      </style>
      <button type="button">Medium</button>
    `
  }

  copyMedium = () => {
    navigator.clipboard.writeText(this.mediumComponent.template);
    alert("✅ Código copiado com sucesso!");
  }
}
