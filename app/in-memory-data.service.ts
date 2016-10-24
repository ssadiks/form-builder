import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryyDataService implements InMemoryDbService {
  createDb() {
      let heroes = [
        {id: 11, name: 'Mr. Nice'},
        {id: 12, name: 'Narcos'},
        {id: 13, name: 'Bombasto'},
        {id: 14, name: 'Celeritas'}
      ];
      return {heroes};
  }
}
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let towers = [
      {id: 1, title: 'Tour 1', heroes: [
          {id: 11, name: 'Mr. Nice'},
          {id: 12, name: 'Narcos'},
          {id: 13, name: 'Bombasto'},
          {id: 14, name: 'Celeritas'},
        ]
      },
      {id: 2, title: 'Tour 2', heroes: [
          {id: 15, name: 'Magneta'},
          {id: 16, name: 'RubberMan'},
          {id: 17, name: 'Dynama'}
        ]
      },
      {id: 3, title: 'Tour 3', heroes: [
          {id: 18, name: 'Dr IQ'},
          {id: 19, name: 'Magma'},
          {id: 20, name: 'Tornado'}
        ]
      }
    ];
    return {towers};
  }
}
