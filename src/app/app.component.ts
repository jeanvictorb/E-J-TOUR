// Conteúdo final para o src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

// 1. Declara a função gtag
declare let gtag: Function;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit { 
  title = 'EJTOUR';

  // 2. Injeta o Router
  constructor(private router: Router) {}

  ngOnInit(): void {
    // 3. Escuta os eventos de navegação
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        
        // 4. Envia o evento de page_view para o GA4
        if (typeof gtag === 'function') {
          gtag('event', 'page_view', {
            page_title: document.title, 
            page_path: event.urlAfterRedirects,
            // Seu ID de Medição GA4
            send_to: 'G-2QDTDSPGB4' 
          });
        }
      });
  }
}