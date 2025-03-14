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
    .small {
      width: 20%;
  }
  
  main:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
  
  .header {
      width: 100%;
      margin-top: 2rem;
  }
  
  .header h3 {
      font-size:  1.3rem;
      font-weight: bold;
  }
  
  .header img {
      width: 4rem;
  }
  
  .header a {
      cursor: pointer;
  }
  
  main {
      width: 380px;
      height: 380px;
      background-color: #F9F9F9;
      border-radius: 2rem;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      transition: 0.4s;
  
  }
  
  main > .header {
      padding: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  
  .box-like {
      padding: 0.6rem;
      background-color: #D9D9D9;
      border-radius: 12px;
      text-align: center;
  }
  
  .box-like svg {
      width: 1.4rem;
  }
  
  main > .content {
      padding-left: 1.6rem;
  
  }
  
  .content span {
      font-size: 0.8rem;
  }
  
  .content h3 {
      font-weight: 700;
      font-size: 1.6rem;
  }
  
  .container-badge{
      display: flex;
      margin-top: 0.6rem;
      gap: 0.6rem;
  }
  
  .badge {
      padding: 0.6rem;
      border-radius: 12px;
      width: 35%;
      background-color: #D9D9D9;
      font-size: 0.8rem;
      font-weight: 500;
      text-align: center;
  }
  
  main > .footer {
      margin-top: 1rem;
      padding-left: 1.6rem;
      display: flex;
      flex-direction: column;
  }
  
  .price{
      display: flex;
      justify-content: start;
      flex-direction: column;
      gap: 0.6rem;
      font-size: 0.8rem;
  
  }
  
  .container-btn {
      margin-top: 1rem;
      margin-right: 1.6rem;
  }
  
  
  .btn {
      width: 100%;
      background-color: black;
      border: none;
      border-radius: 12px;
      padding: 0.8rem;
      color: white;
      font-family: "Inter";
      font-weight: 600;
      text-align: center;    
      cursor: pointer;
  }
  </style>

  
<div class="medium">
    <div class="header">
        <h3>Medium</h3>
        <a>Copiar Código</a>
    </div>
    <main>
        <div class="header">
            <img src="assets/images/just-logo.png" alt="Logo" />
            <div class="box-like">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
            </div>
        </div>
        <div class="content">
            <span>SpaceComponents</span>
            <h3>Designer Gráfico</h3>
            <div class="container-badge">
                <div class="badge">Meio Período</div>
                <div class="badge">Remoto</div>
            </div>
        </div>
        <div class="footer">
            <div class="price">
                <b>R$ 2.800,00 - 4.800,00</b>
                <span>São Paulo, SP</span>
            </div>
            <div class="container-btn">
                <button type="button" class="btn">Aplicar Agora</button>
            </div>
        </div>
    </main>
</div>
    `
  }

  copyMedium = () => {
    navigator.clipboard.writeText(this.mediumComponent.template);
    alert("✅ Código Copiado com Sucesso!");
  }
}
