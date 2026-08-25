import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() titulo: string = '';
  @Input() descricao: string = '';
  @Input() imagem: string = '';
  @Input() atividades: string = '';
  @Input() whatsNumero: string = environment.whatsappNumber;

  get whatsappUrl(): string {
    const mensagem = `Olá, gostaria de saber mais sobre ${this.titulo}`;
    return `https://api.whatsapp.com/send?phone=${this.whatsNumero}&text=${encodeURIComponent(mensagem)}`;
  }

}
