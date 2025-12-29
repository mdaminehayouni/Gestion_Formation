import { Formation } from './formation';
import { SESSIONS } from '../sessionData/session-data';

export const FORMATIONS: Formation[] = [
  {
    id: 0,
    titre: 'Cybersecurity',
    img: 'assets/cyber.png',
    desc: ['informatique', 'securite', 'cybersecurity'],
    difficulte: 'Avancé',
    duree: 70,
    description:
      'Explore the exciting field of cybersecurity and understand why it is a future-proof career.',
    pdf: 'assets/cybersecurity.pdf',
    sessions: [SESSIONS[0], SESSIONS[1]],
  },
  {
    id: 1,
    titre: 'Artificial intelligence',
    img: 'assets/AI.png',
    desc: ['AI', 'intelligence artificielle'],
    difficulte: 'Intermediaire',
    duree: 50,
    description:
      'Explore the exciting field of artificial intelligence and discover why AI is shaping the future.',
    pdf: 'assets/ai.pdf',
    sessions: [SESSIONS[2], SESSIONS[3]],
  },
  {
    id: 2,
    titre: 'Networking',
    img: 'assets/networking.png',
    desc: ['networking', 'reseau'],
    difficulte: 'Débutant',
    duree: 20,
    description: 'Explore the exciting field of networking and modern IT infrastructures.',
    pdf: 'assets/networking.pdf',
    sessions: [SESSIONS[4]],
  },
  {
    id: 3,
    titre: 'Computer science',
    img: 'assets/computer_science.png',
    desc: ['computer science', 'informatique'],
    difficulte: 'Débutant',
    duree: 15,
    description: 'Explore the fundamentals of computer science.',
    pdf: 'assets/computer science.pdf',
    sessions: [SESSIONS[5]],
  },
];
