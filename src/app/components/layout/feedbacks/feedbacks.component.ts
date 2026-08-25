import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Feedback, FeedbackService } from '../../../services/feedback.service';

@Component({
  selector: 'app-feedbacks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './feedbacks.component.html',
  styleUrl: './feedbacks.component.scss'
})
export class FeedbacksComponent implements OnInit {

  comments: Feedback[] = [];

  constructor(private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.feedbackService.feedbacks$.subscribe(feedbacks => {
      this.comments = feedbacks;
    });
  }

  // Gera um array [1..5] marcando quais estrelas devem aparecer preenchidas
  starsArray(rating: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < rating);
  }
}
