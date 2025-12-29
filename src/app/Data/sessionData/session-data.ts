import { Session } from './session';
import { FORMATEURS } from '../formateurData/formateur-data';
import { CANDIDATS } from '../candidatData/candidat-data';

export const SESSIONS: Session[] = [
  {
    id: 1,
    formationId: 0,
    formateur: FORMATEURS[3],
    dateDebut: '2025-02-10',
    dateFin: '2025-03-25',
    candidat: [CANDIDATS[0], CANDIDATS[1]],
  },
  {
    id: 2,
    formationId: 0,
    formateur: FORMATEURS[0],
    dateDebut: '2025-04-05',
    dateFin: '2025-05-20',
    candidat: [],
  },
  {
    id: 3,
    formationId: 1,
    formateur: FORMATEURS[2],
    dateDebut: '2025-03-01',
    dateFin: '2025-04-10',
    candidat: [CANDIDATS[2], CANDIDATS[3]],
  },
  {
    id: 4,
    formationId: 1,
    formateur: FORMATEURS[1],
    dateDebut: '2025-05-01',
    dateFin: '2025-06-10',
    candidat: [],
  },
  {
    id: 5,
    formationId: 2,
    formateur: FORMATEURS[0],
    dateDebut: '2025-01-15',
    dateFin: '2025-02-10',
    candidat: [CANDIDATS[4], CANDIDATS[5]],
  },
  {
    id: 6,
    formationId: 3,
    formateur: FORMATEURS[1],
    dateDebut: '2025-02-01',
    dateFin: '2025-02-20',
    candidat: [CANDIDATS[6]],
  },
];
