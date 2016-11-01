export interface Hero {
    _id: number;
    name: string;
    power: string;
    isChampion: boolean;    
}

export interface Tower {
  _id: number;
  title: string;
  heroes: Hero[];
}