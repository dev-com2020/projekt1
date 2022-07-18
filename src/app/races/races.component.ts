import { Component, OnInit } from '@angular/core';
import { RaceModel } from '../models/race.model';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

races: Array<RaceModel> = [];

  ngOnInit(): void {
    this.races = [
      {
      id: 12,
      name: 'Abu Dabi',
      cars: [      
        {id: 1, name: 'BMW', color: 'YELLOW'}, 
        {id: 2, name: 'BMW', color: 'ORANGE'}, 
        {id: 3, name: 'BMW', color: 'GREEN'}, 
        {id: 4, name: 'BMW', color: 'BLACK'}, 
        {id: 5, name: 'BMW', color: 'BLUE'} 
      ],
      startInstant: '2022-07-18T11:36:00Z'
  },
  {
    id: 11,
    name: 'Tokyo',
    cars: [      
      {id: 6, name: 'BMW', color: 'YELLOW'}, 
      {id: 7, name: 'BMW', color: 'ORANGE'}, 
      {id: 8, name: 'BMW', color: 'GREEN'}, 
      {id: 9, name: 'BMW', color: 'BLACK'}, 
      {id: 10, name: 'BMW', color: 'BLUE'} 
    ],
    startInstant: '2022-07-18T12:36:00Z'
  }
];
  }
}
