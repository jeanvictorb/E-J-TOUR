import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

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
  isSubmitting: boolean = false;

  constructor() { }

  addComment(): void {
    // Validação de campos obrigatórios
    if (!this.nameComment.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Nome obrigatório',
        text: 'Por favor, informe seu nome',
        confirmButtonColor: '#6dbf4b'
      });
      return;
    }

    if (!this.text.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Feedback obrigatório',
        text: 'Por favor, escreva seu feedback',
        confirmButtonColor: '#6dbf4b'
      });
      return;
    }

    if (this.rating === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Avaliação obrigatória',
        text: 'Por favor, avalie sua experiência com as estrelas',
        confirmButtonColor: '#6dbf4b'
      });
      return;
    }

    // Validação de tamanho mínimo
    if (this.text.trim().length < 10) {
      Swal.fire({
        icon: 'warning',
        title: 'Feedback muito curto',
        text: 'Por favor, escreva pelo menos 10 caracteres',
        confirmButtonColor: '#6dbf4b'
      });
      return;
    }

    // Inicia envio
    this.isSubmitting = true;

    const templateParams = {
      name: this.nameComment.trim(),
      message: this.text.trim(),
      rating: this.rating,
      stars: '⭐'.repeat(this.rating),
      date: new Date().toLocaleDateString('pt-BR')
    };

    // Envia via EmailJS
    emailjs.send('service_EJTOUR', 'template_frsbm1l', templateParams, 'yoAuQHMVbz_a_Y1pO')
      .then(() => {
        // Sucesso
        Swal.fire({
          icon: 'success',
          title: 'Feedback enviado!',
          text: 'Muito obrigado pela sua avaliação! 🎉',
          confirmButtonColor: '#6dbf4b',
          timer: 3000,
          timerProgressBar: true
        });

        // Limpa o formulário
        this.resetForm();
      })
      .catch((err) => {
        // Erro
        console.error('Erro ao enviar feedback:', err);
        Swal.fire({
          icon: 'error',
          title: 'Erro ao enviar',
          text: 'Não foi possível enviar seu feedback. Tente novamente.',
          confirmButtonColor: '#6dbf4b'
        });
      })
      .finally(() => {
        this.isSubmitting = false;
      });
  }

  setRating(star: number): void {
    this.rating = star;
    
    // Feedback tátil opcional (vibração no mobile)
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  }

  setHover(star: number): void {
    this.hoverRating = star;
  }

  clearHover(): void {
    this.hoverRating = 0;
  }

  resetForm(): void {
    this.nameComment = '';
    this.text = '';
    this.rating = 0;
    this.hoverRating = 0;
  }

  // Método auxiliar para obter texto da avaliação
  getRatingText(): string {
    const ratingTexts: { [key: number]: string } = {
      1: 'Muito insatisfeito',
      2: 'Insatisfeito',
      3: 'Neutro',
      4: 'Satisfeito',
      5: 'Muito satisfeito'
    };
    return ratingTexts[this.hoverRating || this.rating] || 'Avalie sua experiência';
  }
}