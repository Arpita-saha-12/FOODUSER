import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ItemService } from '../../shared/item.service';
import { Item } from '../../shared/item.model';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public id = '';
  public items = [];
  public apiurl = 'http://localhost:3000';
  constructor(private route: ActivatedRoute, private router: Router, private iservice: ItemService, private sanitizer: DomSanitizer) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }
   getItemdetails(id) {
    this.iservice.getitemcatid(id).subscribe((res) => {
    this.items = res as Item[];
    console.log(this.items);
    });
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getItemdetails(this.id);
  }
  getSafeUrl(ipic) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.apiurl + '/' + ipic);
}
onBook(id) {
  this.router.navigate([ '/login', {id: id} ]);
}
}
