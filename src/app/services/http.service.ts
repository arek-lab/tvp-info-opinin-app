import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getOpinion(userInput: string) {
    return this.http.post<{ opinion: string }>(
      this.apiUrl + 'search',
      { texts: [userInput] },
      { withCredentials: true }
    );
  }
}
