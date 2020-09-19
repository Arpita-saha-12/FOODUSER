// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {DatePipe} from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
// routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { EventService } from './shared/event.service';
import { ItemService} from './shared/item.service';
import {OrderService} from './shared/order.service';
// other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './nav/home/home.component';
import { AboutComponent } from './nav/about/about.component';
import { ItemComponent } from './nav/item/item.component';
import { Item1Component } from './user-profile/item1/item1.component';
import { BookitemComponent } from './user-profile/bookitem/bookitem.component';
import { BookeventComponent} from './user-profile/bookevent/bookevent.component';
import { Home1Component } from './user-profile/home1/home1.component';
import { About1Component } from './user-profile/about1/about1.component';
import { BookhistoryComponent } from './user-profile/bookhistory/bookhistory.component';
import { VieweventComponent } from './user-profile/viewevent/viewevent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BookingeventsComponent } from './user-profile/bookingevents/bookingevents.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ItemComponent,
    Item1Component,
    BookitemComponent,
    BookeventComponent,
    Home1Component,
    About1Component,
    BookhistoryComponent,VieweventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,Ng2SearchPipeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, DatePipe, AuthGuard, UserService , EventService , ItemService , OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

