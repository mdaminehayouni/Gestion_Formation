import { Component, Input, OnInit } from '@angular/core';
import { FormationCard } from '../formation-card/formation-card';
import { GestionService } from '../gestion-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-affiche-card',
  imports: [FormationCard, RouterLink],
  templateUrl: './affiche-card.html',
  styleUrl: './affiche-card.css',
})
export class AfficheCard implements OnInit {
  constructor(private gestionService: GestionService) {}
  formations: any;
  @Input() desc_recherche!: string;
  ngOnInit(): void {
    this.formations = this.gestionService.getFormations();
    this.desc_recherche = '';
  }

  affiche(): any {
    return this.formations.filter((e: any) =>
      e.desc.some((d: string) => d.toLowerCase().includes(this.desc_recherche.toLowerCase()))
    );
  }
}
