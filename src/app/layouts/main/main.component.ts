import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, NavBarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resized();
  }

  public changeSideView(): void {
    const sidebar = document.getElementById("sidebar-view");
    if(sidebar) {
      sidebar.classList.toggle("close");
    }
  }

  resized(): void {
    var width = window.innerWidth;
    const sidebar = document.getElementById("sidebar-view");
    if(sidebar) {
      if(width < 992) {
        sidebar.classList.add("close");
      } else {
        sidebar.classList.remove("close");
      }
    }
  }
}
