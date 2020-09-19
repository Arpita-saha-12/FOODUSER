import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../shared/category.service';
import { EventService } from '../shared/event.service';
import { Category } from '../shared/category.model';
import { Event } from '../shared/event.model';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public category = [];
  public event = [];
  constructor(private router: Router, private catservice: CategoryService,private eventservice:EventService,private http: HttpClient) { }

  // ngOnInit() {
  //   this.getCategory();
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
  }
  }
  onclick() {
    this.router.navigateByUrl('/userprofile');
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
  onItem(catname) {
    this.router.navigate ( [ 'nav/item', {id: catname} ] );
  }
  
}
