import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { RaceModel } from './models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) {}

  list(): Observable<Array<RaceModel>>{
    const params = { status: "PENDING"};
    return this.http.get<Array<RaceModel>>('https://cośtam.com/api/races',{params});
  }

}