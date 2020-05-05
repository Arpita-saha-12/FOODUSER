import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { UserService } from '../../shared/user.service';
import { ItemService } from '../../shared/item.service';
import {OrderService} from '../../shared/order.service';
import { Item } from '../../shared/item.model';
import {DatePipe} from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {
  userDetails;
  public id = '';
  public selectedItem = new Item();
  myDate = new Date();
  public mydate;
  constructor(private route: ActivatedRoute, private iservice: ItemService , private userService: UserService ,
    private orderService: OrderService, private datepipe: DatePipe , private router: Router) {
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
    this.getitem(this.id);
  }
  getitem(id) {
    this.iservice.getitemid(id).subscribe((res) => {
      this.selectedItem= res as Item;
      console.log(this.selectedItem);
    }, (err) => {
      console.log(err);
    });

  }
  onSubmit(form: NgForm) {
    form.value.price = form.value.iprice * form.value.quan;
    form.value.date = this.mydate;
    this.orderService.insertOrder(form.value).subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
    );
      alert('Your Booking is Confirmed');
      this.router.navigateByUrl('userprofile/bookhistory');
  }

}
