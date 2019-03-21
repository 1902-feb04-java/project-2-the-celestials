import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { World } from '../world';
import { Faction } from  '../faction'
import { Location } from '../location';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  //private worldsUrl = "build/worlds"; // URL to spring project
  private worldsUrl = "http://localhost:8080/build/worlds"; // URL to spring project

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
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

  getWorldFactionsById(id: number): Observable<Faction[]> {
    const url = `http://localhost:8080/build/worldFactions/${id}`;
    return this.httpClient.get<Faction[]>(url).pipe(
      tap(_ => this.log(`fetched world id=${id}`)),
      catchError(this.handleError<Faction[]>(`getHero id=${id}`))
    );
  }

  getWorldLocationsById(id: number): Observable<Location[]> {
    const url =  `http://localhost:8080/build/worldLocations/${id}`;
    return this.httpClient.get<Location[]>(url).pipe(
      tap(_ => this.log(`fetched world id=${id}`)),
      catchError(this.handleError<Location[]>(`getHero id=${id}`))
    );
  }

  getUser(username: string, password: string): Observable<User> {
    const url = `http://localhost:8080/build/user/${username}/${password}`
    return this.httpClient.get<User>(url).pipe(
      tap(_ => this.log(`fetched user username=${username} password=${password}`)),
      catchError(this.handleError<User>(`getHero username=${username} password=${password}`))
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