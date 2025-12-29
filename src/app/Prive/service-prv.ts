import { Injectable } from '@angular/core';
import { GestionService } from '../gestion-service';
import { Formateur } from '../Data/formateurData/formateur';
import { FORMATEURS } from '../Data/formateurData/formateur-data';
import { Candidat } from '../Data/candidatData/candidat';
import { Formation } from '../Data/formationData/formation';
import { FORMATIONS } from '../Data/formationData/formation-data';
import { SESSIONS } from '../Data/sessionData/session-data';
import { Session } from '../Data/sessionData/session';

@Injectable({
  providedIn: 'root',
})
export class ServicePrv {
  private formations!: Formation[];
  private candidats: Candidat[] = [];
  private formateurs: Formateur[];
  private sessions!: Session[];
  private formateurs_formations!: number[];
  constructor(private gestionService: GestionService) {
    this.formations = this.gestionService.getFormations();
    this.formateurs = [...FORMATEURS];
    this.sessions = [...SESSIONS];
  }
  getFormation() {
    return this.formations;
  }
  getCandidats() {
    this.candidats = [];
    this.formations.forEach((element) => {
      element.sessions.forEach((e) => {
        this.candidats.push(...e.candidat);
      });
    });
    this.candidats = this.candidats.filter((e, i) => {
      const cinList = this.candidats.map((c) => c.cin);
      return cinList.indexOf(e.cin) === i;
    });
    return this.candidats;
  }
  getCandidatByid(id: number) {
    return this.candidats.find((c) => c.cin === id);
  }
  editer_candidat(candidat_edit: Candidat) {
    this.formations.forEach((formation) => {
      formation.sessions.forEach((session) => {
        session.candidat = session.candidat.map((c) => {
          return c.cin == candidat_edit.cin ? candidat_edit : c;
        });
      });
    });
  }
  supprimer_candidat(cin: number) {
    this.formations.forEach((formation) => {
      formation.sessions.forEach((session) => {
        session.candidat = session.candidat.filter((e) => {
          return e.cin != cin;
        });
      });
    });
  }
  getFormateur() {
    return this.formateurs;
  }
  getFormateurByCin(cin: number) {
    return this.formateurs.find((f) => f.cin === cin);
  }
  editer_formateur(formateur_edit: Formateur) {
    this.formateurs = this.formateurs.map((formateur) => {
      return formateur.cin === formateur_edit.cin ? formateur_edit : formateur;
    });
  }
  supprimer_formateur(formateur: Formateur) {
    const estAssigné = this.formations.find((f) =>
      f.sessions.find((s) => s.formateur.cin === formateur.cin)
    );

    if (!estAssigné) {
      this.formateurs = this.formateurs.filter((f) => f.cin !== formateur.cin);
    } else {
      alert('Impossible de supprimer un formateur assigné à une session !');
    }
  }
  ajouter_formateur(formateur: Formateur) {
    this.formateurs.push(formateur);
  }

  getFormations(): Formation[] {
    return this.formations;
  }

  getFormationById(id: number): Formation | undefined {
    return this.formations.find((f) => f.id === id);
  }

  ajouterFormation(formation: Formation) {
    formation.id = this.formations.length ? Math.max(...this.formations.map((f) => f.id)) + 1 : 0;
    this.formations.push(formation);
  }

  editerFormation(formation: Formation) {
    this.formations = this.formations.map((f) => (f.id === formation.id ? formation : f));
  }

  supprimerFormation(id: number) {
    this.formations = this.formations.filter((f) => f.id !== id);
  }
  getSessions(): Session[] {
    return this.sessions;
  }

  getSessionById(id: number): Session | undefined {
    return this.sessions.find((s) => s.id === id);
  }

  ajouterSession(session: Session) {
    session.id = this.sessions.length ? Math.max(...this.sessions.map((s) => s.id)) + 1 : 1;
    this.sessions.push(session);
  }

  editerSession(session: Session) {
    this.sessions = this.sessions.map((s) => (s.id === session.id ? session : s));
  }

  supprimerSession(id: number) {
    this.sessions = this.sessions.filter((s) => s.id !== id);
  }
  getFormateursDisponibles(sessionToExclude?: Session): Formateur[] {
    const assignes = this.sessions
      .filter((s) => !sessionToExclude || s.id !== sessionToExclude.id)
      .map((s) => s.formateur.cin);
    return this.formateurs.filter((f) => !assignes.includes(f.cin));
  }
}
