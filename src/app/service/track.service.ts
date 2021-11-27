import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from '../models/track.model';

const baseUrl = 'http://localhost:8081/track';

@Injectable()
export class TrackService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Track[]> {
    return this.http.get<Track[]>(baseUrl);
  }

  get(id: any): Observable<Track> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  findByName(name: any): Observable<Track[]> {
    return this.http.get<Track[]>(`${baseUrl}?name=${name}`);
  }

  downloadTrack(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}/download`)
  }
 }
