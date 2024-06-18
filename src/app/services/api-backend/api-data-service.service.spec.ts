import { TestBed } from '@angular/core/testing';

import { ApiDataServiceService } from './api-data-service.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ApiDataServiceService', () => {
  let service: ApiDataServiceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    // httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get data from backend', () =>{

    service.get('brand/', '').subscribe((res)=> {
      console.log(res)
      expect(res).toEqual({id:1, name:'mock'})
    })

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `http://127.0.0.1:8000/brand/`,
    }, 'call get method http://127.0.0.1:8000/brand/');
    req.flush({id:1, name:'mock'});
    httpTestingController.verify();
  })
  it('should form the url correctly', ()=>{
    service.get('brand/', '?text=audi').subscribe((res)=> {
      console.log(res)
      expect(res).toEqual({id:1, name:'mock'})
    })

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `http://127.0.0.1:8000/brand/?text=audi`,
    });

    req.flush({id:1, name:'mock'});
    httpTestingController.verify();

  })
});
