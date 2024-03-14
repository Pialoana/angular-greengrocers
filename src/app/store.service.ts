// store.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private apiUrl = 'https://boolean-api-server.fly.dev/groceries';

  constructor(private http: HttpClient) {}

  getStoreItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
