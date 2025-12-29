import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formation-card',
  imports: [RouterLink],
  templateUrl: './formation-card.html',
  styleUrl: './formation-card.css',
})
export class FormationCard {
  @Input() formation!: {
    id: number;
    titre: string;
    img: string;
    description: string;
    difficulte: string;
    duree: string;
  };
  img() {
    return this.formation.img == '' ? 'assets/no-images-02.png' : this.formation.img;
  }
  difficultyClass(difficulte: string): string {
    if (difficulte === 'Débutant') return 'debutant';
    if (difficulte === 'Intermediaire') return 'intermediaire';
    if (difficulte === 'Avancé') return 'avance';
    return '';
  }
}
