import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event, EventPostRequest } from '../models/event.model';
import { environment } from 'src/environments/environment';
import { CommentPostRequest } from '../models/comment.model';
import { SubmissionPostRequest } from '../models/submission.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.springApi}/event`);
  }

  postEvent(model: EventPostRequest): Observable<any> {
    return this.http.post<any>(`${environment.springApi}/event`, model);
  }

  getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(`${environment.springApi}/event/${id}`);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete<Event>(`${environment.springApi}/event/${id}`);
  }

  postComment(eventId: string, model: CommentPostRequest): Observable<any> {
    return this.http.post<any>(`${environment.springApi}/event/${eventId}/comment`, model);
  }

  deleteComment(commentId: string): Observable<any> {
    return this.http.delete<any>(`${environment.springApi}/comment/${commentId}`);
  } 

  postSubmission(eventId: string, submission: SubmissionPostRequest): Observable<any> {
    return this.http.post<any>(`${environment.springApi}/event/${eventId}/submission`, submission);
  }
}

