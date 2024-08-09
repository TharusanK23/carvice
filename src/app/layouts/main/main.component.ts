import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { Languages } from '../../helpers/data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink, NavBarComponent, TranslateModule],
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
    this._setLocalization();
  }

  private _setLocalization() {
    var local = localStorage.getItem('local');
    var defaultLanguage = local ? local : (this.translateService.defaultLang || 'en-gb');
    console.log(defaultLanguage);
    
    this.translateService.use(defaultLanguage);
    this.translateService.setDefaultLang(defaultLanguage);
    var language = Languages.find(local => local.code === defaultLanguage);
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
    var languageCode = this.translateService.defaultLang || 'en-gb';
    if(languageCode === 'en-gb') {
      languageCode = 'nb-no';
    } else {
      languageCode = 'en-gb';
    }
    var language = Languages.find(local => local.code === languageCode);
      if(language) {
        this.selectedLanguage = language;
      }
    this.translateService.use(languageCode);
    this.translateService.setDefaultLang(languageCode);
    localStorage.setItem('local', languageCode);
  }
}
