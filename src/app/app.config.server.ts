import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideTranslateLoader } from '@ngx-translate/core';
import { appConfig } from './app.config';
import { ServerTranslateLoader } from './services/server-translate-loader';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // No servidor (SSR/prerender) lemos os JSONs de tradução direto do
    // disco em vez de via HTTP, evitando NetworkError durante o build
    // e garantindo que o HTML pré-renderizado já saia traduzido.
    provideTranslateLoader(ServerTranslateLoader),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
