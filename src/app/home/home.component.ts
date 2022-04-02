import { ScheduleService } from './../services/schedule.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm !: FormGroup;
  searchedList:any = []
  constructor(private fb : FormBuilder, private schedule : ScheduleService, private router : Router) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      from : [''],
      to:[''],
      dateOfJourney:[''],
      dateOfreturn:['']
    })
  }
  searchBus(){
    this.schedule.searchBuses(this.searchForm.value)
    .subscribe(res=>{
      this.searchedList = res;
      this.searchForm.reset();
    })
  }
  gotoBooking(obj : any){
    localStorage.clear();
    this.router.navigate(['book',],{state:{data : obj}})
  }
}
