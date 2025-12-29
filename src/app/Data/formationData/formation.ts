import { Session } from '../sessionData/session';

export interface Formation {
  id: number;
  titre: string;
  img: string;
  desc: string[];
  difficulte: string;
  duree: number;
  description: string;
  pdf: string;
  sessions: Session[];
}
