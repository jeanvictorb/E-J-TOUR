import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  nameComment: string = '';
  text: string = '';
  rating: number = 0;
  hoverRating: number = 0;

  constructor() { }

  addComment(): void {
    if (!this.nameComment || !this.text) {
      Swal.fire('Preencha todos os campos', '', 'warning');
      return;
    }

    const templateParams = {
      name: this.nameComment,
      message: this.text,
      rating: this.rating,
    };

    emailjs.send('service_EJTOUR', 'template_frsbm1l', templateParams, 'yoAuQHMVbz_a_Y1pO')
      .then(() => {
        Swal.fire('Comentário enviado por e-mail!', '', 'success');
        this.nameComment = '';
        this.text = '';
        this.rating = 0;
      })
      .catch((err) => {
        Swal.fire('Erro ao enviar comentário', '', 'error');
        console.error('Erro ao enviar:', err);
      });
  }

  setRating(star: number): void {
    this.rating = star;
  }

  setHover(star: number): void {
    this.hoverRating = star;
  }

  clearHover(): void {
    this.hoverRating = 0;
  }

}
