import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface LangOption {
  code: string;
  label: string;
  flag: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MdbCollapseModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  languages: LangOption[] = [
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
  ];

  constructor(public translate: TranslateService) {}

  get currentLang(): string {
    return this.translate.currentLang || 'pt';
  }

  useLanguage(code: string): void {
    this.translate.use(code);
  }
}
