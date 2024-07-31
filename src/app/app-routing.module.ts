import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { GamesComponent } from './pages/games/games.component';
import { VocabularyComponent } from './pages/vocabulary/vocabulary.component';
import { SentenceComponent } from './pages/sentence/sentence.component';

const routes: Routes = [
  { path: '', component: StartComponent, pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'vocabulary', component: VocabularyComponent },
  { path: 'sentence', component: SentenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
