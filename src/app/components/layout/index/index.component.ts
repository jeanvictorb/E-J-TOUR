import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit {

  @ViewChild('whatsappFloat') whatsappFloat!: ElementRef;

  ngAfterViewInit(): void {
    if (this.whatsappFloat) {
      this.whatsappFloat.nativeElement.addEventListener('click', () => {
        console.log("Botão clicado!");  
        const phoneNumber = '5545999492697'; 
        const message = encodeURIComponent('Olá! Quero mais informações.');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
      });
    }
  }
}
