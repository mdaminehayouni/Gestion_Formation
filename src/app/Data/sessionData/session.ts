import { Candidat } from '../candidatData/candidat';
import { Formateur } from '../formateurData/formateur';

export interface Session {
  id: number;
  formationId: number;
  formateur: Formateur;
  dateDebut: string;
  dateFin: string;
  candidat: Candidat[];
}
