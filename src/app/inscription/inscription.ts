import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { GestionService } from '../gestion-service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePrv } from '../Prive/service-prv';
import { Candidat } from '../Data/candidatData/candidat';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription implements OnInit {
  constructor(
    private gestionService: GestionService,
    private servicePrv: ServicePrv,
    private route: ActivatedRoute,
    private nav: Router
  ) {}
  candidat: Candidat = {
    nom: '',
    prenom: '',
    email: '',
    cin: 0,
    mdp: '',
    img: '',
  };
  formation!: number;
  session!: number;
  edit = false;
  edit_cin!: number;
  foundCandidat!: any;
  ngOnInit(): void {
    this.formation = Number(this.route.snapshot.paramMap.get('id_formation'));
    this.session = Number(this.route.snapshot.paramMap.get('id_session'));
    this.edit_cin = Number(this.route.snapshot.paramMap.get('cin'));
    if (this.edit_cin) {
      this.edit = true;
      this.foundCandidat = this.servicePrv.getCandidatByid(+this.edit_cin);
      if (this.foundCandidat) {
        this.candidat = { ...this.foundCandidat };
      }
    }
  }
  candidat_edit!: Candidat;
  sauvegarder(f: NgForm) {
    if (this.edit == false) {
      this.ajouter(f);
    } else {
      this.editer(f);
    }
  }
  ajouter(f: NgForm) {
    this.gestionService.ajouter_candidat(this.formation, this.session, this.candidat);
    this.nav.navigate(['/session', this.formation]);
  }
  editer(f: NgForm) {
    this.servicePrv.editer_candidat(this.candidat);
    this.nav.navigate(['/gestion_candidat']);
  }
}
