export class Hero {
    _id: number;
    name: string;
}

export class Tower {
  _id: number;
  title: string;
  heroes: Hero[];
}