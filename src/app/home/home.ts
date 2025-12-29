import { Component, OnInit } from '@angular/core';
import { Header } from '../header/header';
import { FormationCard } from '../formation-card/formation-card';
import { GestionService } from '../gestion-service';
import { AfficheCard } from '../affiche-card/affiche-card';

@Component({
  selector: 'app-home',
  imports: [Header, FormationCard, AfficheCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  formations: any;
  nb!: number;
  constructor(private gestionService: GestionService) {}
  ngOnInit(): void {
    this.formations = this.gestionService.getFormations();
    this.nb = 0;
  }
  nbparticipant(): number {
    this.formations.forEach((element: any) => {
      element.sessions.forEach((e: any) => {
        this.nb += e.candidat.length;
      });
    });
    return this.nb;
  }
}
