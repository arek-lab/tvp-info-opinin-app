import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toast-component',
  standalone: true,
  imports: [NgbToastModule],
  templateUrl: './toast-component.component.html',
  styleUrl: './toast-component.component.css',
})
export class ToastComponentComponent {
  toastService = inject(ToastService);
}
