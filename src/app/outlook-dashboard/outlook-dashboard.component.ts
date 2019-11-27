import { Component, OnInit } from '@angular/core';
import { GraphService } from '../services/graph.service';
import { Event, DateTimeTimeZone, STATUS_DECLINED } from '../event';
import * as moment from 'moment-timezone';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlook-dashboard',
  templateUrl: './outlook-dashboard.component.html',
  styleUrls: ['./outlook-dashboard.component.css']
})
export class OutlookDashboardComponent implements OnInit {
  events: Event[];
  meetingRoomEmail:string = `meetingroom2@thumbstack.onmicrosoft.com`;
  
  constructor(private graphService: GraphService,private auth:AuthService, private route:Router) { }

  ngOnInit() {
    if(!this.auth.authenticated)
    {
      this.route.navigateByUrl(`outlook/login`);
    }
    this.graphService.getEvents(moment().format(), moment().add(7, 'days').format())
    .then((events:Event[]) => {
      this.events = events
      .filter(e=>e.attendees.some(a=>a.emailAddress.address==this.meetingRoomEmail))
      .filter(e=>e.attendees.find(a=>a.emailAddress.address==this.meetingRoomEmail).status.response!=STATUS_DECLINED);
    })
    .catch(err=>console.log(err.message));
  }

  formatDateTimeTimeZone(dateTime: DateTimeTimeZone): string {
    try {
      return moment.tz(dateTime.dateTime, dateTime.timeZone).format();
    }
    catch(error) {
      console.log('DateTimeTimeZone conversion error'+ JSON.stringify(error));
    }
  }
}
