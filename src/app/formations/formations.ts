import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { GestionService } from '../gestion-service';
import { FormationCard } from '../formation-card/formation-card';
import { AfficheCard } from '../affiche-card/affiche-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formations',
  imports: [Header, FormationCard, AfficheCard, FormsModule],
  templateUrl: './formations.html',
  styleUrl: './formations.css',
})
export class Formations implements OnInit {
  formations: any;
  input_recherche!: string;
  constructor(private gestionservice: GestionService) {}
  ngOnInit(): void {
    this.formations = this.gestionservice.getFormations();
  }
  recherche() {
    return this.input_recherche;
  }
}
