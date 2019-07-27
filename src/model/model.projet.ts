import {User} from './model.user';
import {UndesirableEvent} from './model.undesirableEvent';
import {ImpactScale} from './model.impactScale';
import {ProbabilityScale} from './model.probabilityScale';
import {EventProjet} from './EventProjet';

export class Projet {

  idProjet: Number;
  nameProject: String;
  description: String;
  departement: String;
  type: String;

  userCreation : User;
  eventProjets : EventProjet[];
  impactScale: ImpactScale;
  probabilityScale: ProbabilityScale;


}
