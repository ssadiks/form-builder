import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //let towers = [
    //  {_id: '5813869c9450002668c89701', title: 'Tour 1', heroes: [
    //      {_id: '11', name: 'Mr. Nice'},
    //      {_id: '12', name: 'Narcos'},
    //      {_id: '13', name: 'Bombasto'},
    //      {_id: '14', name: 'Celeritas'},
    //    ]
    //  },
    //  {_id: '2', title: 'Tour 2', heroes: [
    //      {_id: '15', name: 'Magneta'},
    //      {_id: '16', name: 'RubberMan'},
    //      {_id: '17', name: 'Dynama'}
    //    ]
    //  },
    //  {_id: '3', title: 'Tour 3', heroes: [
    //      {_id: '18', name: 'Dr IQ'},
    //      {_id: '19', name: 'Magma'},
    //      {_id: '20', name: 'Tornado'}
    //    ]
    //  }
    //];
    let towers = [
      {
        "_id": "5813869c9450002668c89701",
        "title": "tour 78",
        "__v": 0,
        "heroes": [
          {
            "name": "matuidi",
            "_id": "5813869c9450002668c89702"
          },
          {
            "name": "motta",
            "_id": "5813869c9450002668c89703"
          }
        ]
      },
      {
        "_id": "58139c86cf49691868774791",
        "title": "tour 75870",
        "__v": 0,
        "heroes": [
          {
            "name": "motta",
            "_id": "58139c86cf49691868774793"
          }
        ]
      }
    ]
    return {towers};
  }
}
