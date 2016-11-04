export class Hero {
    _id: number;
    type_field: string;
    name: string;    
    label: string;
    help_text: string;
    required: boolean;
    placeholder: string;
    options_list: string;
}

export interface Tower {
  _id: number;
  title: string;
  name: string;
  display_label: boolean;
  heroes: Hero[];
}