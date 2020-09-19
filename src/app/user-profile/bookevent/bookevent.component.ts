import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { UserService } from '../../shared/user.service';
import { EventService } from '../../shared/event.service';
import {OrderEventService} from '../../shared/orderevent.service';
import { Event } from '../../shared/event.model';
import {DatePipe} from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookevent',
  templateUrl: './bookevent.component.html',
  styleUrls: ['./bookevent.component.css']
})
export class BookeventComponent implements OnInit {
  userDetails;
  public id = '';
  public selectedEvent = new Event();
  myDate = new Date();
  public mydate;
  constructor(private route: ActivatedRoute, private eventservice: EventService , private userService: UserService ,
    private orderService: OrderEventService, private datepipe: DatePipe , private router: Router) {
      this.mydate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
        console.log(this.userDetails);
      },
      err => {
        console.log(err);

      }
    );
    this.id = this.route.snapshot.paramMap.get('id');
    this.getevent(this.id);
  }
  getevent(id) {
    this.eventservice.geteventid(id).subscribe((res) => {
      this.selectedEvent= res as Event;
      console.log(this.selectedEvent);
    }, (err) => {
      console.log(err);
    });

  }
  onSubmit(form: NgForm) {
    // form.value.price = form.value.iprice * form.value.quan;
    form.value.date = this.mydate;
    this.orderService.insertOrder(form.value).subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    );
      alert('Your Booking is Confirmed');
      this.router.navigateByUrl('userprofile/bookingevents');
  }

}
