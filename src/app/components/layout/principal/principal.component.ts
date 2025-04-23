import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CarrosselComponent } from "../carrossel/carrossel.component";
import { CommentComponent } from "../comment/comment.component";
import { FeedbacksComponent } from "../feedbacks/feedbacks.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MenuComponent, RouterOutlet, FooterComponent, CarrosselComponent, CommentComponent, FeedbacksComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}