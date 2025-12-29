import { Component } from '@angular/core';
import { Session } from '../../Data/sessionData/session';
import { Formation } from '../../Data/formationData/formation';
import { Router, RouterModule } from '@angular/router';
import { ServicePrv } from '../service-prv';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-session',
  imports: [FormsModule, RouterModule],
  templateUrl: './gestion-session.html',
  styleUrl: './gestion-session.css',
})
export class GestionSession {
  sessions: Session[] = [];
  formations!: Formation[];

  constructor(private servicePrv: ServicePrv, private nav: Router) {}

  ngOnInit(): void {
    this.formations = this.servicePrv.getFormations();
    this.loadSessions();
  }

  loadSessions() {
    this.sessions = this.servicePrv.getSessions().map((s) => {
      const formation = this.formations.find((f) => f.id === s.formationId);
      return { ...s, formationTitre: formation?.titre || '' };
    });
  }

  supprimer(session: Session) {
    this.servicePrv.supprimerSession(session.id);
    this.loadSessions();
  }
}
