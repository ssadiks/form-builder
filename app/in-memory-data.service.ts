import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 1, title: 'Tour 1', heroes: [
          {id: 11, name: 'Mr. Nice', types: 'text', label: 'civilite'},
          {id: 12, name: 'Narcos', types: 'password', label: 'nom'},
          {id: 13, name: 'Bombasto', types: 'text', label: 'prenom'},
          {id: 14, name: 'Celeritas', types: 'password', label: 'date de naissance'},
          {id: 15, name: 'Magneta', types: 'text', label: 'ville'},
          {id: 16, name: 'RubberMan', types: 'password', label: 'postcode'},
          {id: 17, name: 'Dynama', types: 'text', label: 'country'},
          {id: 18, name: 'Dr IQ', types: 'text', label: 'email'},
          {id: 19, name: 'Magma', types: 'text', label: 'number'},
          {id: 20, name: 'Tornado', types: 'password', label: 'company'}
        ]
      },
      {id: 2, title: 'Tour 2', heroes: [
          {id: 11, name: 'Mr. Nice', types: 'text', label: 'civilite'},
          {id: 12, name: 'Narcos', types: 'password', label: 'nom'},
          {id: 13, name: 'Bombasto', types: 'text', label: 'prenom'},
          {id: 14, name: 'Celeritas', types: 'password', label: 'date de naissance'},
          {id: 15, name: 'Magneta', types: 'text', label: 'ville'},
          {id: 16, name: 'RubberMan', types: 'password', label: 'postcode'},
          {id: 17, name: 'Dynama', types: 'text', label: 'country'},
          {id: 18, name: 'Dr IQ', types: 'text', label: 'email'},
          {id: 19, name: 'Magma', types: 'text', label: 'number'},
          {id: 20, name: 'Tornado', types: 'password', label: 'company'}
        ]
      },
      {id: 3, title: 'Tour 3', heroes: [
          {id: 11, name: 'Mr. Nice', types: 'text', label: 'civilite'},
          {id: 12, name: 'Narcos', types: 'password', label: 'nom'},
          {id: 13, name: 'Bombasto', types: 'text', label: 'prenom'},
          {id: 14, name: 'Celeritas', types: 'password', label: 'date de naissance'},
          {id: 15, name: 'Magneta', types: 'text', label: 'ville'},
          {id: 16, name: 'RubberMan', types: 'password', label: 'postcode'},
          {id: 17, name: 'Dynama', types: 'text', label: 'country'},
          {id: 18, name: 'Dr IQ', types: 'text', label: 'email'},
          {id: 19, name: 'Magma', types: 'text', label: 'number'},
          {id: 20, name: 'Tornado', types: 'password', label: 'company'}
        ]
      }
    ];
    return {heroes};
  }
}
