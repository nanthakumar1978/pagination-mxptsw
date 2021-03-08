import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  offset: number = 10;
  limit: number = 10;
  size: number = 100;

  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  onPageChange(offset: number) {
    this.offset = offset;
  }

  getUserList() {
    let params = this.commonService.addPaginationParams(this.offset / this.limit, this.limit);
  }

}