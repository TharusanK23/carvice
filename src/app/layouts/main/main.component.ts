import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  public changeSideView(): void {
    const sidebar = document.getElementById("sidebar-view");
    if(sidebar) {
      sidebar.classList.toggle("close");
    }
  }
}
