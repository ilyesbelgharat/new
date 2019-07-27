import {EventsComponent} from './conteneur-projet/events/events.component';
import {UrlPermission} from '../urlPermission/url.permission';


interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
  routerLink ?:string;
}

export const navItems: NavData[] = [
  {
    name: 'Users Management',
    icon: 'icon-speedometer',

  },

  {
    name: 'User lists',
    url: '/dashboard/users',
    icon: 'icon-puzzle'
  },
  {
    name: 'Add user',
    url: '/dashboard/ajoutUser',
    icon: 'icon-cursor',

  },

];
export const navItems2: NavData[] = [

  {
    name: 'DATA',
    icon: 'icon-speedometer',

  },
  {
    name: 'Factors',
    url: '/conteneur2/factor',
    icon: 'icon-drop',

  },
  {
    name: 'Events',
    url: '/conteneur2/evenement',
    icon: 'icon-pencil'
  },

  {
    name: 'Impacts',
    url: '/conteneur2/impact',
    icon: 'icon-pencil'
  },

];


export const navItems3: NavData[] = [

  {
    title: true,
    name: 'Data'
  },
  {
    name: 'New Event',
    routerLink:'/projets/{{id}}/events/{{id}}',

    url: '/projets/${id}/events/${id}',
    icon: 'icon-drop',

  },
  {
    name: 'Events Projets',
    url: '/projets/?id=${id}/eventsProjet//?id=${id}',
    icon: 'icon-drop',

  },



];
