import { Component } from '@angular/core';
import { ServicePrv } from '../service-prv';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';
import { Formation } from '../../Data/formationData/formation';

@Component({
  selector: 'app-formulaire-formation',
  imports: [FormsModule],
  templateUrl: './formulaire-formation.html',
  styleUrl: './formulaire-formation.css',
})
export class FormulaireFormation {
  formation!: Formation;
  formationFound: Formation | undefined;
  id!: number;

  constructor(private servicePrv: ServicePrv, private route: ActivatedRoute, private nav: Router) {
    this.id = Number(route.snapshot.paramMap.get('id'));
    this.formationFound = this.servicePrv.getFormationById(this.id);
    if (this.formationFound) {
      this.formation = { ...this.formationFound };
    } else {
      this.formation = {
        id: 0,
        titre: '',
        img: '',
        desc: [],
        difficulte: '',
        duree: 0,
        description: '',
        pdf: '',
        sessions: [],
      };
    }
  }

  submit(f: NgForm) {
    if (this.id) this.editer(f);
    else this.ajouter(f);
  }

  editer(f: NgForm) {
    this.servicePrv.editerFormation(this.formation);
    this.nav.navigate(['/gestion_formations']);
  }

  ajouter(f: NgForm) {
    this.servicePrv.ajouterFormation(this.formation);
    this.nav.navigate(['/gestion_formations']);
  }
}
