import { Injectable } from '@angular/core';
import { Formation } from './Data/formationData/formation';
import { FORMATIONS } from './Data/formationData/formation-data';
import { Candidat } from './Data/candidatData/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionService {
  private formations: Formation[] = [...FORMATIONS];

  getFormations(): Formation[] {
    return this.formations;
  }

  ajouter_candidat(formationId: number, sessionId: number, candidat: Candidat) {
    const formation = this.formations.find((f) => f.id === formationId);
    if (!formation) {
      return;
    }
    const session = formation.sessions.find((s) => s.id === sessionId);
    if (!session) {
      return;
    }
    if (!session.candidat) {
      session.candidat = [];
    }
    session.candidat.push(candidat);
  }
}
