import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getGameModes(): Observable<any> {
    return this.http.get(`${this.url}/gameModes`).pipe(
      catchError((error) => {
        console.error('getGameModes failed: ', error);
        return of({
          error: true,
          message: 'Failed to load game modes. Please try again later.',
        });
      })
    );
  }

  getVocabularyQuiz(): Observable<any> {
    return this.http.get(`${this.url}/vocabulary`).pipe(
      catchError((error) => {
        console.error('getVocabularyQuiz failed: ', error);
        return of({
          error: true,
          message: 'Failed to load vocabulary quiz. Please try again later.',
        });
      })
    );
  }

  getSentenceQuiz(): Observable<any> {
    return this.http.get(`${this.url}/sentence`).pipe(
      catchError((error) => {
        console.error('getSentenceQuiz failed: ', error);
        return of({
          error: true,
          message: 'Failed to load sentence quiz. Please try again later.',
        });
      })
    );
  }

  getDialoguesQuiz(): Observable<any> {
    return this.http.get(`${this.url}/dialogue`).pipe(
      catchError((error) => {
        console.error('getDialoguesQuiz failed: ', error);
        return of({
          error: true,
          message: 'Failed to load dialogues quiz. Please try again later.',
        });
      })
    );
  }
}
