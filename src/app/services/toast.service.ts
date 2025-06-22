import { Injectable } from '@angular/core';

export interface Toast {
  textOrTpl: string;
  classname: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: Toast[] = [];

  show(textOrTpl: string, options: Partial<Toast> = {}) {
    this.toasts.push({
      textOrTpl,
      classname: 'bg-dark text-white',
      delay: 3000,
      ...options,
    });
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  clear() {
    this.toasts = [];
  }
}
