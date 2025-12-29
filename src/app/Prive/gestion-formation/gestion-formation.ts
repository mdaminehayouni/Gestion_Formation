import { Component, OnInit } from '@angular/core';
import { ServicePrv } from '../service-prv';
import { RouterLink } from '@angular/router';
import { Formation } from '../../Data/formationData/formation';

@Component({
  selector: 'app-gestion-formation',
  imports: [RouterLink],
  templateUrl: './gestion-formation.html',
  styleUrl: './gestion-formation.css',
})
export class GestionFormations implements OnInit {
  formations!: Formation[];

  constructor(private servicePrv: ServicePrv) {}

  ngOnInit(): void {
    this.formations = this.servicePrv.getFormations();
  }

  supprimer(f: Formation) {
    this.servicePrv.supprimerFormation(f.id);
    this.formations = this.servicePrv.getFormations();
  }
}
