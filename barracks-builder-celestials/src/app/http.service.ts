import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { World } from '../world';
import { Weapon } from '../weapon';
import { Defense } from '../defense';
import { Faction } from '../faction';
import { Location } from '../location';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/build";
  //private worldsUrl = "build/worlds"; // URL to spring project
  private worldsUrl = this.baseUrl + "/worlds"; // URL to spring project

  /** Log a HttpService message */
  private log(message: string) {
    //alert(message);
  }

  /** GET world from the server by Id */
  getUserById(id: number): Observable<User> {
    const url = `${this.baseUrl}/users/${id}`;
    return this.httpClient.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUserById id=${id}`))
    );
  }

  /** GET worlds from the server */
  getWorlds(): Observable<World[]> {
    return this.httpClient.get<World[]>(this.worldsUrl)
      .pipe(
        tap(_ => this.log('fetched worlds')),
        catchError(this.handleError<World[]>('getWorlds', []))
      );
  }

  /** GET worlds from a specified user from the server */
  getUserWorlds(id): Observable<World[]> {
    const url = `${this.baseUrl}/userWorlds/${id}`;
    return this.httpClient.get<World[]>(url)
      .pipe(
        tap(_ => this.log('fetched user worlds')),
        catchError(this.handleError<World[]>('getUserWorlds', []))
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

  getWeapons(): Observable<Weapon[]> {
    return this.httpClient.get<Weapon[]>(this.baseUrl + "/weapons")
      .pipe(
        tap(_ => this.log('fetched weapons')),
        catchError(this.handleError<Weapon[]>('getWeapons', []))
      );
  }
  getWeaponById(id: number): Observable<Weapon>{
    const url = this.baseUrl + '/weapons/'+id;
    return this.httpClient.get<Weapon>(url).pipe(
      tap(_ => this.log(`fetched weapon id=${id}`)),
      catchError(this.handleError<Weapon>(`getWeaponById id=${id}`))
    );
  }
  getDefenses(): Observable<Defense[]> {
    return this.httpClient.get<Defense[]>(this.baseUrl + "/defenses")
      .pipe(
        tap(_ => this.log('fetched defenses')),
        catchError(this.handleError<Defense[]>('getDefenses', []))
      );
  }
  getDefenseById(id: number): Observable<Defense>{
    const url = this.baseUrl + '/defenses/'+id;
    return this.httpClient.get<Defense>(url).pipe(
      tap(_ => this.log(`fetched defense id=${id}`)),
      catchError(this.handleError<Defense>(`getDefenseById id=${id}`))
    );
  }
  getFactions(): Observable<Faction[]> {
    return this.httpClient.get<Faction[]>(this.baseUrl + "/factions")
      .pipe(
        tap(_ => this.log('fetched factions')),
        catchError(this.handleError<Faction[]>('getFactions', []))
      );
  }
  getLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.baseUrl + "/locations")
      .pipe(
        tap(_ => this.log('fetched locations')),
        catchError(this.handleError<Location[]>('getLocations', []))
      );
  }
  getRanges(): Observable<Range[]> {
    return this.httpClient.get<Range[]>(this.baseUrl + '/ranges')
      .pipe(
        tap(_ => this.log('fetched ranges')),
        catchError(this.handleError<Range[]>('getRanges', []))
      )
  }
  getBodySlots(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl + "/bodyslots")
    .pipe(
      tap(_ => this.log('fetched bodyslots')),
      catchError(this.handleError<any[]>('getBodySlots', []))
    )
  }
  getWorldFactionsById(id: number): Observable<Faction[]> {
    const url = `http://localhost:8080/build/worldFactions/${id}`;
    return this.httpClient.get<Faction[]>(url).pipe(
      tap(_ => this.log(`fetched world id=${id}`)),
      catchError(this.handleError<Faction[]>(`getWorldFactionsById id=${id}`))
    );
  }
  getFactionById(id: number): Observable<Faction>{
    const url = this.baseUrl + '/factions/'+id;
    return this.httpClient.get<Faction>(url).pipe(
      tap(_ => this.log(`fetched faction id=${id}`)),
      catchError(this.handleError<Faction>(`getFactionById id=${id}`))
    );
  }

  getWorldLocationsById(id: number): Observable<Location[]> {
    const url = `http://localhost:8080/build/worldLocations/${id}`;
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

  createWorld(name: string, description: string, userId: string) {
    const url = `http://localhost:8080/build/createWorld`;
    const body = new HttpParams()
    .set('name', name)
    .set('descriptor', description)
    .set('user_id', userId);

    this.httpClient.post(url, 
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe();
  }

  createTagForWorld(name: string, worldId: string) {
    const url = `http://localhost:8080/build/addTagToWorld`;
    const body = new HttpParams()
    .set('name', name)
    .set('world_id', worldId);

    this.httpClient.post(url,
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe();
  }

  createTagForFaction(name: string, factionId: string) {
    const url = `http://localhost:8080/build/addTagToFaction`;
    const body = new HttpParams()
    .set('name', name)
    .set('faction_id', factionId);

    this.httpClient.post(url,
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe();
  }

  createTagForWeapon(name: string, weaponId: string) {
    const url = 'http://localhost:8080/build/addTagToWeapon';
    const body = new HttpParams()
    .set('name', name)
    .set('weapon_id', weaponId);

    this.httpClient.post(url,
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe();
  }

  createTagForDefense(name: string, defenseId: string) {
    const url = 'http://localhost:8080/build/addTagToDefense';
    const body = new HttpParams()
    .set('name', name)
    .set('defense_id', defenseId);

    this.httpClient.post(url,
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe();
  }

  createLocation(name: string, description: string, worldId: string) {
    const url = `http://localhost:8080/build/createLocation`;
    const body = new HttpParams()
    .set('name', name)
    .set('descriptor', description)
    .set('world_id', worldId);

    this.httpClient.post(url,
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe();
  }

  createFaction(name: string, description: string, population: string, worldId: string) {
    const url = `http://localhost:8080/build/createFaction`;
    const body = new HttpParams()
    .set('name', name)
    .set('descriptor', description)
    .set('population', population)
    .set('world_id', worldId);

    this.httpClient.post(url,
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe();
  }

  createWeapon(name: string, description: string, rangeId: string, factionId: string) {
    const url = `http://localhost:8080/build/createWeapon`;
    const body = new HttpParams()
    .set('name', name)
    .set('descriptor', description)
    .set('range_id', rangeId)
    .set('faction_id', factionId);

    this.httpClient.post(url,
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe();
  }

  createDefense(name: string, description: string, bodyslotId: string, factionId: string) {
    const url = `http://localhost:8080/build/createDefense`;
    const body = new HttpParams()
    .set('name', name)
    .set('descriptor', description)
    .set('bodyslot_id', bodyslotId)
    .set('faction_id', factionId);

    this.httpClient.post(url,
      body.toString(),
      {
        headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
      }).subscribe();
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