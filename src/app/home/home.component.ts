import { ScheduleService } from './../services/schedule.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchForm !: FormGroup;
  searchedList:any = []
  constructor(private fb : FormBuilder, private schedule : ScheduleService) { }

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
}
