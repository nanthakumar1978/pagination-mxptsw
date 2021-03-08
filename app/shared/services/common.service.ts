import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }


  
  addPaginationParams(page: number, size: number, params: URLSearchParams = null): URLSearchParams {
    if (!params) {
      params = new URLSearchParams();
    }
    params.set('pageSize', String(size));
    params.set('pageNo', String(page));
    return params;
  }

}