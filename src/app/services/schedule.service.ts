import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http : HttpClient) { }

  searchBuses(data:any){
    return this.http.post<any>("http://localhost:1902/api/BusSchedule/search",data);
  }
}
