import {Factor} from './model.factor';
import {SourceDanger} from './model.sourceDanger';
import {UndesirableEvent} from './model.undesirableEvent';
import {Impact} from './model.impact';
import {FactorProjet} from './FactorProjet';

export class  EventProjet {

  idEventProjet: Number;
  undesirableEvent :  UndesirableEvent;
  impacts : Impact[];
  factorProjets :FactorProjet[];



}
