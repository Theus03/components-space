import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  imports: [],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {
  topComponent = { 
    template: `
      <style>
        .navbar {
          background-color: #F9F9F9;
          width: 800px;
          height: 100px;
          border-radius: 12px;
        }

        nav {
          height: 100px;
        }

        ul {
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4rem;
        }

        li {
          display: flex;
          align-items: center;
          gap: 1rem;
          justify-content: center;
          transition: 0.4s ease-in-out;
          cursor: pointer;
        }

        li.active {
          background-color: black;
          padding: 1rem;
          border-radius: 8px;
        }

        li.active > span {
          color: white;
        }

        li:not(.active):hover {
          background-color: rgb(226, 226, 226);
          padding: 1rem;
          border-radius: 8px;
        }

        img {
          width: 1.6rem;
        }
      </style>
      <div class="navbar">
    <nav>
        <ul>
            <li class="active"><img src="assets/images/home-2-line.png" alt="Home"><span>Home</span></li>
            <li><img src="assets/images/archive-stack-line.png" alt="Stack"><span>Components</span></li>
            <li><img src="assets/images/folder-info-line.png" alt="Folder"><span>Sobre</span></li>
        </ul>
    </nav>
</div>
    `

  }

  copyTop = () => {
    navigator.clipboard.writeText(this.topComponent.template);
    alert("✅ Código copiado com sucesso!");
  }
}
