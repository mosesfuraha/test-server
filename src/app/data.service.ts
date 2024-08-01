import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = './games.json';

  constructor(private http: HttpClient) {}

  getGameModes(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      map((data) => data.gameModes),
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
    return this.http.get<any>(this.url).pipe(
      map((data) => data.vocabulary),
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
    return this.http.get<any>(this.url).pipe(
      map((data) => data.sentence),
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
    return this.http.get<any>(this.url).pipe(
      map((data) => data.dialogue),
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
