import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListingComponent} from './user-listing/user-listing.component';

const userRoutes: Routes = [
{
  path: '',
  component: UserListingComponent
}
];

@NgModule({
  imports:[RouterModule.forChild(userRoutes)],
  exports:[RouterModule],
})
export class UserRoutingModule {
  
}