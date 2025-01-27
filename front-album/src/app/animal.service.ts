import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './animal.model';


@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private apiUrl = 'https://3000-riccardolot-verificapug-gxoj5jgzb6b.ws-eu117.gitpod.io/api/album-animali';

  constructor(private http: HttpClient) {}

  getAnimals(): Observable<{ animals: Animal[] }> {
    return this.http.get<{ animals: Animal[] }>(this.apiUrl);
  }
}
