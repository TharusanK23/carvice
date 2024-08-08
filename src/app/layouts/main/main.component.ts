import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { Languages } from '../../helpers/data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, NavBarComponent, TranslateModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resized();
  }

  public selectedLanguage: any = Languages[0];

  constructor(
    private translateService: TranslateService,
  ) {}

  ngOnInit(): void {
    var defaultLng = this.translateService.defaultLang || 'en-gb';
    var language = Languages.find(local => local.code === defaultLng);
    if(language) {
      this.selectedLanguage = language;
    }
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

  public changeLang() {
    var languageCode = 'en-gb';
    if(this.selectedLanguage.code === 'en-gb') {
      languageCode = 'nb-no';
    } else {
      languageCode = 'en-gb';
    }
    console.log(languageCode);
    
    this.translateService.use(languageCode);
    this.translateService.setDefaultLang(languageCode);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
