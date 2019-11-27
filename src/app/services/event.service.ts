import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from '../models/room';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  
  getByRoomCode(roomCode: string): Observable<Room> {
    return this.http.get<Room>(`${environment.apiUrl}/api/GetRoom?roomCode=${roomCode}`);
}

getByRoomId( roomId: number):Observable<Event> {
return this.http.get<Event>(`${environment.apiUrl}/api/GetTodaysEvents?roomId=${roomId}`);    
}

getCurrentEvent(roomId:number):Observable<Event>{
  return this.http.get<Event>(`${environment.apiUrl}/api/GetCurrentEvent?roomId=${roomId}`)
}


roomDetailById(roomId:number):Observable<Room>{
  return this.http.get<Room>(`${environment.apiUrl}/api/Room?id=${roomId}`);

}

}
