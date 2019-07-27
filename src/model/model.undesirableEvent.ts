import {Impact} from './model.impact';
import {Factor} from './model.factor';

export class UndesirableEvent {

  idUndesirableEvent: Number;
  code: String;
  description: String;
  impacts: Impact[];
  factors: Factor[];

}
