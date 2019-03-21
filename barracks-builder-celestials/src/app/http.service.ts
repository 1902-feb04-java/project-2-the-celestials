import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { World } from '../world';
import {Weapon} from '../weapon';
import {Defense} from '../defense';
import {Faction} from '../faction';
import {Location} from '../location';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  //private worldsUrl = "build/worlds"; // URL to spring project
  private worldsUrl = "http://localhost:8080/build/worlds"; // URL to spring project

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // alert(`HttpService: ${message}`);
    //this.messageService.add(`HeroService: ${message}`);
  }

  /** GET worlds from the server */
  getHeroes(): Observable<World[]> {
    return this.httpClient.get<World[]>(this.worldsUrl)
      .pipe(
        tap(_ => this.log('fetched worlds')),
        catchError(this.handleError<World[]>('getWorlds', []))
      );
  }

  /** GET world from the server by Id */
  getWorldById(id: number): Observable<World> {
    const url = `${this.worldsUrl}/${id}`;
    return this.httpClient.get<World>(url).pipe(
      tap(_ => this.log(`fetched world id=${id}`)),
      catchError(this.handleError<World>(`getHero id=${id}`))
    );
  }
  getWeapons(): Observable<Weapon[]>{
    return this.httpClient.get<Weapon[]>("http://localhost:8080/build/weapons")
    .pipe(
      tap(_ => this.log('fetched weapons')),
      catchError(this.handleError<Weapon[]>('getWeapons', []))
    );
  } 
  getDefenses(): Observable<Defense[]>{
    return this.httpClient.get<Defense[]>("http://localhost:8080/build/defenses")
    .pipe(
      tap(_ => this.log('fetched defenses')),
      catchError(this.handleError<Defense[]>('getDefenses', []))
    );
    }
  getFactions(): Observable<Faction[]>{
      return this.httpClient.get<Faction[]>("http://localhost:8080/build/factions")
      .pipe(
        tap(_ => this.log('fetched factions')),
        catchError(this.handleError<Faction[]>('getFactions', []))
      );
  } 
  getLocations(): Observable<Location[]>{
    return this.httpClient.get<Location[]>("http://localhost:8080/build/locations")
    .pipe(
      tap(_ => this.log('fetched locations')),
      catchError(this.handleError<Location[]>('getLocations', []))
    );
} 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}