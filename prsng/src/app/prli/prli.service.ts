import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Prli} from './prli.class';
import { JsonResponse } from '../util/json-response.class';

const url='http://localhost:8080/Prlis/';



@Injectable({
  providedIn: 'root'
})
export class PrliService {
 
list(): Observable<JsonResponse> {
  return this.http.get(url + 'List') as Observable<JsonResponse>;
}

get(id): Observable<JsonResponse> {
  return this.http.get(url + 'Get/' + id) as Observable<JsonResponse>;
}

add(prli: Prli): Observable<JsonResponse> {
  return this.http.post(url + "Add",prli) as Observable<JsonResponse>;
}

change(prli: Prli): Observable<JsonResponse> {
  return this.http.post(url + "Change",prli) as Observable<JsonResponse>;
}

remove(prli: Prli): Observable<JsonResponse> {
  return this.http.post(url + "Remove",prli) as Observable<JsonResponse>;
}

  constructor(private http: HttpClient) { }
}