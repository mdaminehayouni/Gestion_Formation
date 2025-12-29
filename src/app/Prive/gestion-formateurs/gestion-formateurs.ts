import { Component, OnInit } from '@angular/core';
import { ServicePrv } from '../service-prv';
import { Formateur } from '../../Data/formateurData/formateur';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-formateur',
  imports: [RouterLink],
  templateUrl: './gestion-formateurs.html',
  styleUrl: './gestion-formateurs.css',
})
export class gestion_formateurs implements OnInit {
  constructor(private servicePrv: ServicePrv) {}
  formateurs!: Formateur[];
  ngOnInit(): void {
    this.formateurs = this.servicePrv.getFormateur();
  }
  supprimer(formateur: Formateur) {
    this.servicePrv.supprimer_formateur(formateur);
    this.formateurs = this.servicePrv.getFormateur();
  }
}
