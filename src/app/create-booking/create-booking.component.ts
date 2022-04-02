import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {

  bookingDetails : any;
  bookedSeats : any = [];
  selectedSeat : any = [];
  busSeats:any = [];
  showTable : boolean = false;
  constructor(private router : Router) {

    console.log(history.state);
    this.bookingDetails = history.state.data;
    this.bookedSeats = JSON.parse(localStorage.getItem("bookedSeats")!);
    if(!this.bookedSeats){
      this.bookedSeats = []
    }
   }

  ngOnInit(): void {
    this.busSeats = [
      {seatNumber : 1, isAvailable : true},
      {seatNumber : 2, isAvailable : true},
      {seatNumber : 3, isAvailable : true},
      {seatNumber : 4, isAvailable : true},
      {seatNumber : 5, isAvailable : true},
      {seatNumber : 6, isAvailable : true},
      {seatNumber : 7, isAvailable : true},
      {seatNumber : 8, isAvailable : true},
      {seatNumber : 9, isAvailable : true},
      {seatNumber : 10, isAvailable : true},
      {seatNumber : 11, isAvailable : true},
      {seatNumber : 12, isAvailable : true},
      {seatNumber : 13, isAvailable : true},
      {seatNumber : 14, isAvailable : true},
      {seatNumber : 15, isAvailable : true},
      {seatNumber : 16, isAvailable : true},
      {seatNumber : 17, isAvailable : true},
      {seatNumber : 18, isAvailable : true},
      {seatNumber : 19, isAvailable : true},
      {seatNumber : 20, isAvailable : true},
      {seatNumber : 21, isAvailable : true},
      {seatNumber : 22, isAvailable : true},
      {seatNumber : 23, isAvailable : true},
      {seatNumber : 24, isAvailable : true}
    ]
    this.busSeats.forEach((a:any)=>{
      this.bookedSeats.forEach((b:any)=>{
        if(a.seatNumber == b.seatNumber){
          a.isAvailable = b.isAvailable;
        }
      })
    })
  }
  selectSeat(row:any){
    row.isAvailable = !row.isAvailable;
    this.selectedSeat.push(row);
  }
  BookSeat(){
    this.showTable = true;
    let oldBooking = JSON.parse(localStorage.getItem("bookedSeats")!);
    if(!oldBooking){
      oldBooking = []
    }
    this.bookedSeats =[...this.selectedSeat,...oldBooking];
    alert("You have selected "+this.selectedSeat.length+" seats")
    localStorage.setItem("bookedSeats",JSON.stringify(this.bookedSeats));
  }
  clickBook(){
    this.router.navigate(['confirm'],{state:{data:this.bookingDetails}})
  }
}
