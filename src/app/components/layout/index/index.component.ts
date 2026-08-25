import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit {

  @ViewChild('whatsappFloat') whatsappFloat!: ElementRef;

  ngAfterViewInit(): void {
    if (this.whatsappFloat) {
      this.whatsappFloat.nativeElement.addEventListener('click', () => {
        const phoneNumber = environment.whatsappNumber;
        const message = encodeURIComponent('Olá! Quero mais informações.');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
      });
    }
  }
}
