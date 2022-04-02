import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.scss']
})
export class ConfirmBookingComponent implements OnInit {

  bookingData : any;
  constructor() {
    this.bookingData = history.state.data;
   }

  ngOnInit(): void {
  }

}
