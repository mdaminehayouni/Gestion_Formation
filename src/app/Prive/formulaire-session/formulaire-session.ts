import { Component } from '@angular/core';
import { Formateur } from '../../Data/formateurData/formateur';
import { Session } from '../../Data/sessionData/session';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Formation } from '../../Data/formationData/formation';
import { ServicePrv } from '../service-prv';

@Component({
  selector: 'app-formulaire-session',
  imports: [FormsModule, RouterModule],
  templateUrl: './formulaire-session.html',
  styleUrl: './formulaire-session.css',
})
export class FormulaireSession {
  session!: Session;
  sessionFound: Session | undefined;
  id!: number;
  formations!: Formation[];
  formateursDisponibles!: Formateur[];

  constructor(private servicePrv: ServicePrv, private route: ActivatedRoute, private nav: Router) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    this.formations = this.servicePrv.getFormations();

    if (this.id) {
      this.sessionFound = this.servicePrv.getSessionById(this.id);
      if (this.sessionFound) {
        this.session = { ...this.sessionFound };
        this.updateFormateursDisponibles(this.session);
      }
    } else {
      this.session = {
        id: 0,
        formationId: 0,
        formateur: {} as Formateur,
        dateDebut: '',
        dateFin: '',
        candidat: [],
      };
      this.updateFormateursDisponibles();
    }
  }

  updateFormateursDisponibles(sessionToExclude?: Session) {
    this.formateursDisponibles = this.servicePrv.getFormateursDisponibles(sessionToExclude);
  }

  submit(f: NgForm) {
    if (this.id) {
      this.servicePrv.editerSession(this.session);
    } else {
      this.servicePrv.ajouterSession(this.session);
    }
    this.nav.navigate(['/gestion_sessions']);
  }
}
