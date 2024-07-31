import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  gameModes: any[] = [];
  errorMessage: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getGameModes().subscribe({
      next: (data) => {
        if (data.error) {
          this.errorMessage = data.message;
        } else {
          this.gameModes = data;
        }
      },
      error: (error) => {
        this.errorMessage =
          'Failed to load game modes. Please try again later.';
      },
    });
  }
}
