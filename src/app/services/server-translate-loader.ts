import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import * as fs from 'node:fs';
import * as path from 'node:path';

/**
 * Durante o build (prerender/SSG) e no SSR não existe um servidor HTTP
 * "de verdade" respondendo por /assets/i18n/*.json, então o TranslateHttpLoader
 * padrão falha com NetworkError e o HTML gerado fica sem os textos
 * traduzidos até o Angular hidratar no navegador (ruim para SEO).
 *
 * Este loader lê os arquivos de tradução diretamente do disco nesses casos.
 */
@Injectable()
export class ServerTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    try {
      const filePath = path.join(process.cwd(), 'dist/exercicio2/browser/assets/i18n', `${lang}.json`);
      const fallbackPath = path.join(process.cwd(), 'public/assets/i18n', `${lang}.json`);
      const resolvedPath = fs.existsSync(filePath) ? filePath : fallbackPath;
      const content = fs.readFileSync(resolvedPath, 'utf-8');
      return of(JSON.parse(content));
    } catch (e) {
      return of({});
    }
  }
}
