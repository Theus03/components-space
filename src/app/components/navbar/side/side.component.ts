import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  imports: [],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {
  sideComponent = {
    template: `
      <style>
      .navbar {
        background-color: #F9F9F9;
        height: 450px;
        width: 100px;
        border-radius: 12px;
    }
    
    nav {
        height: 450px;
    }
    
    ul {
        height: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4rem;
    }
    
    li {
        transition: 0.4s ease-in-out;
        cursor: pointer;
    }
    
    li.active {
        background-color: black;
        padding: 0.6rem;
        border-radius: 8px;
    }
    
    li:not(.active):hover {
        background-color: rgb(226, 226, 226);
        padding: 1rem;
        border-radius: 8px;
    }
    
    
    img {
        width: 2rem;
    }
      </style>
      <div class="navbar">
        <nav>
            <ul>
                <li class="active"><img src="assets/images/home-2-line.png" alt="Home"></li>
                <li><img src="assets/images/archive-stack-line.png" alt="Stack"></li>
                <li><img src="assets/images/folder-info-line.png" alt="Folder"></li>
            </ul>
        </nav>
    </div>
    `
  }

  copySide = () => {
    navigator.clipboard.writeText(this.sideComponent.template);
    alert("✅ Código copiado com sucesso!");
  }
}
