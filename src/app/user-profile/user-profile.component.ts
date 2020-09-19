import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category.model';
import { EventService } from '../shared/event.service';
import { Event} from '../shared/event.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  public category = [];
  public event = [];
  public id = '';
  constructor(private userService: UserService, private router: Router, private catservice: CategoryService ,
    private route: ActivatedRoute,private http: HttpClient,private eventservice: EventService) { }

  // ngOnInit() {
  //   this.getCategory();
  //   this.userService.getUserProfile().subscribe(
  //     res => {
  //       this.userDetails = res['reguser'];
  //     },
  //     err => {
  //       console.log(err);

  //     }
  //   );
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   console.log(this.id);
  // }
  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
  });
  {
    this.getCategory();
    this.getEvent();
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['reguser'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
  onItem(catname) {
    this.router.navigate ( [ 'userprofile/item1', {id: catname} ] );
  }
  getCategory() {
    this.catservice.getCategory().subscribe((res) => {
    this.category = res as Category[];
    });
  }
  getEvent() {
    this.eventservice.getEvent().subscribe((res) => {
    this.event = res as Event[];
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../shared/user.service';
// import { HttpClient } from '@angular/common/http';
// import * as $ from 'jquery';
// import { Router } from "@angular/router";

// @Component({
//   selector: 'app-user-profile',
//   templateUrl: './user-profile.component.html',
//   styleUrls: ['./user-profile.component.css']
// })
// export class UserProfileComponent implements OnInit {
//   userDetails;
//   constructor(private userService: UserService, private router: Router,private http: HttpClient) { }

  // ngOnInit() {
  //   this.userService.getUserProfile().subscribe(
  //     res => {
  //       this.userDetails = res['user'];
  //     },
  //     err => { 
  //       console.log(err);
        
  //     }
  //   );
  // }









