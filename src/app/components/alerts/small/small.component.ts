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
        .alert {
          background-color: #F9F9F9;
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          border-radius: 12px;
          border-left: 0.8rem solid black;
          transition: 0.4s ease-in-out;
        }

        .alert:hover {
          transform: translateX(2%);
        }
      </style>
      
    `
  }

  copySmall = () => {
    navigator.clipboard.writeText(this.smallComponent.template);
    alert("✅ Código copiado com sucesso!");
  }
}
