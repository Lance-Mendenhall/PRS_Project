import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Purchaserequest} from '../purchaserequest/purchaserequest.class';
import { JsonResponse } from '../util/json-response.class';

const url='http://localhost:8080/PurchaseRequests/';

@Injectable({
  providedIn: 'root'
})
export class PurchaserequestService {

  list(): Observable<JsonResponse> {
    return this.http.get(url + 'List') as Observable<JsonResponse>;
  }

get(id): Observable<JsonResponse> {
  return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
}

add(purchaserequest: Purchaserequest): Observable<JsonResponse> {
  return this.http.post(url + "Add",purchaserequest) as Observable<JsonResponse>;
}

change(purchaserequest: Purchaserequest): Observable<JsonResponse> {
  return this.http.post(url + "Change",purchaserequest) as Observable<JsonResponse>;
}
  
remove(purchaserequest: Purchaserequest): Observable<JsonResponse> {
  return this.http.post(url + "Remove",purchaserequest) as Observable<JsonResponse>;
}

  constructor(private http: HttpClient) { }
}