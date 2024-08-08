import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Languages } from './helpers/data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'CarvicE';
  private _languages: any[] = Languages;

  constructor(
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this._setLocalization();
  }

  private _setLocalization() {
    var defaultLanguage = this.translateService.defaultLang || 'en-gb';
    this.translateService.use(defaultLanguage);
    this.translateService.setDefaultLang(defaultLanguage);
  }
}
