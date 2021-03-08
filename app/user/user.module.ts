import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// user defined module imports 
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

// component imports 
import {UserListingComponent} from './user-listing/user-listing.component';
import { UserListingService } from './services/user-listing.service';


@NgModule({
  declarations: [
    UserListingComponent
  ],
  imports:[
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports:[],
  providers:[UserListingService]
})
export class UserModule {

}