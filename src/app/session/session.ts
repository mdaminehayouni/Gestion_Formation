import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../Data/formateurData/formateur';
import { Formation } from '../Data/formationData/formation';
import { Formations } from '../formations/formations';

@Component({
  selector: 'app-session',
  imports: [],
  templateUrl: './session.html',
  styleUrl: './session.css',
})
export class Session implements OnInit {
  formateur: any;
  constructor(
    private gestionService: GestionService,
    private route: ActivatedRoute,
    private nav: Router
  ) {}
  formations!: Formation[];
  formation_session!: Formation;
  id!: number;
  ngOnInit(): void {
    this.formations = this.gestionService.getFormations();
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.formation_session = this.formations[this.id];
  }
  verif(session: any) {
    this.nav.navigate(['/inscription', this.formation_session.id, session.id]);
  }
}
