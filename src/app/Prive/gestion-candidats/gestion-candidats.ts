import { Component, OnInit } from '@angular/core';
import { GestionService } from '../../gestion-service';
import { ServicePrv } from '../service-prv';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-candidats',
  imports: [RouterLink],
  templateUrl: './gestion-candidats.html',
  styleUrl: './gestion-candidats.css',
})
export class GestionCandidats implements OnInit {
  constructor(private servicePrv: ServicePrv) {}
  candidats: any;
  ngOnInit(): void {
    this.candidats = this.servicePrv.getCandidats();
  }
  supprimer(cin: number) {
    this.servicePrv.supprimer_candidat(cin);
    this.candidats = this.servicePrv.getCandidats();
  }
}
