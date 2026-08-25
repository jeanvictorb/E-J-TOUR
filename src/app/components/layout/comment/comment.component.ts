import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';
import { FeedbackService } from '../../../services/feedback.service';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  nameComment: string = '';
  text: string = '';
  rating: number = 0;
  hoverRating: number = 0;
  isSubmitting: boolean = false;

  constructor(
    private feedbackService: FeedbackService,
    private translate: TranslateService
  ) { }

  addComment(): void {
    // Validação de campos obrigatórios
    if (!this.nameComment.trim()) {
      Swal.fire({
        icon: 'warning',
        title: this.translate.instant('COMMENT_FORM.NAME_REQUIRED_TITLE'),
        text: this.translate.instant('COMMENT_FORM.NAME_REQUIRED_TEXT'),
        confirmButtonColor: '#6dbf4b'
      });
      return;
    }

    if (!this.text.trim()) {
      Swal.fire({
        icon: 'warning',
        title: this.translate.instant('COMMENT_FORM.FEEDBACK_REQUIRED_TITLE'),
        text: this.translate.instant('COMMENT_FORM.FEEDBACK_REQUIRED_TEXT'),
        confirmButtonColor: '#6dbf4b'
      });
      return;
    }

    if (this.rating === 0) {
      Swal.fire({
        icon: 'warning',
        title: this.translate.instant('COMMENT_FORM.RATING_REQUIRED_TITLE'),
        text: this.translate.instant('COMMENT_FORM.RATING_REQUIRED_TEXT'),
        confirmButtonColor: '#6dbf4b'
      });
      return;
    }

    // Validação de tamanho mínimo
    if (this.text.trim().length < 10) {
      Swal.fire({
        icon: 'warning',
        title: this.translate.instant('COMMENT_FORM.TOO_SHORT_TITLE'),
        text: this.translate.instant('COMMENT_FORM.TOO_SHORT_TEXT'),
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
    const { serviceId, templateId, publicKey } = environment.emailjs;
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        // Sucesso
        Swal.fire({
          icon: 'success',
          title: this.translate.instant('COMMENT_FORM.SUCCESS_TITLE'),
          text: this.translate.instant('COMMENT_FORM.SUCCESS_TEXT'),
          confirmButtonColor: '#6dbf4b',
          timer: 3000,
          timerProgressBar: true
        });

        // Adiciona o feedback à lista exibida no site (nesta sessão)
        this.feedbackService.addFeedback({
          titulo: this.nameComment.trim(),
          descricao: this.text.trim(),
          rating: this.rating
        });

        // Limpa o formulário
        this.resetForm();
      })
      .catch((err) => {
        // Erro
        console.error('Erro ao enviar feedback:', err);
        Swal.fire({
          icon: 'error',
          title: this.translate.instant('COMMENT_FORM.ERROR_TITLE'),
          text: this.translate.instant('COMMENT_FORM.ERROR_TEXT'),
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
    const ratingKeys: { [key: number]: string } = {
      1: 'VERY_UNSATISFIED',
      2: 'UNSATISFIED',
      3: 'NEUTRAL',
      4: 'SATISFIED',
      5: 'VERY_SATISFIED'
    };
    const key = ratingKeys[this.hoverRating || this.rating];
    return key
      ? this.translate.instant('COMMENT_FORM.RATING_TEXTS.' + key)
      : this.translate.instant('COMMENT_FORM.RATING_TEXTS.RATE_EXPERIENCE');
  }
}