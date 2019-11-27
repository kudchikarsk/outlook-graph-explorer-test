import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roomCode:string;

  constructor(
    private eventService: EventService,
    private router: Router,

  ) { }

  ngOnInit() {
  }
  submit() {
    this.eventService.getByRoomCode(this.roomCode)
       .subscribe(data => {
         console.log(data);
         this.router.navigateByUrl(`dashboard/${data.Id}`)
 
       },
         error => {
           console.log(error);
           
       });
   }
}


