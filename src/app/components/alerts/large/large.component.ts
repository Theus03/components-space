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
        
        .alert {
          background-color: #F9F9F9;
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1.4rem;
          border-radius: 12px;
          width: 800px;
          border-left: 0.8rem solid black;
          transition: 0.4s ease-in-out;
        }

        .alert:hover {
          transform: translateX(2%);
        }

        .alert img {
          width: 2.4rem;
        }

        .alert span {
          font-size: 1.4rem;
        }

      </style>

    `
  }

  copyLarge = () => {
    navigator.clipboard.writeText(this.largeComponent.template);
    alert("✅ Código copiado com sucesso!");
  }
}
