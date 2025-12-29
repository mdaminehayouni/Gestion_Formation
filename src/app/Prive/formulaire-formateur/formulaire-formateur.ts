import { Component } from '@angular/core';
import { ServicePrv } from '../service-prv';
import { Formateur } from '../../Data/formateurData/formateur';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulaire-formateur',
  imports: [FormsModule],
  templateUrl: './formulaire-formateur.html',
  styleUrl: './formulaire-formateur.css',
})
export class FormulaireFormateur {
  formateur = {
    cin: 0,
    nom: '',
    prenom: '',
    email: '',
    telephone: 0,
    cv: '',
    img: '',
    specialites: [],
  };
  formateurFound: any;
  cin!: number;

  constructor(private servicePrv: ServicePrv, private route: ActivatedRoute, private nav: Router) {
    this.cin = Number(route.snapshot.paramMap.get('cin'));
    this.formateurFound = this.servicePrv.getFormateurByCin(this.cin);
    if (this.formateurFound) {
      this.formateur = { ...this.formateurFound };
    }
  }
  submit(f: NgForm) {
    if (this.cin) {
      this.editer(f);
    } else {
      this.ajouter(f);
    }
  }
  editer(f: NgForm) {
    this.servicePrv.editer_formateur(this.formateur);
    this.nav.navigate(['/gestion_formateurs']);
  }
  ajouter(f: NgForm) {
    this.servicePrv.ajouter_formateur(this.formateur);
    this.nav.navigate(['/gestion_formateurs']);
  }
}
