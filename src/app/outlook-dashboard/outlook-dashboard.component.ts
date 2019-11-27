import { Component, OnInit } from '@angular/core';
import { GraphService } from '../services/graph.service';
import { Event, DateTimeTimeZone, STATUS_DECLINED } from '../event';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-outlook-dashboard',
  templateUrl: './outlook-dashboard.component.html',
  styleUrls: ['./outlook-dashboard.component.css']
})
export class OutlookDashboardComponent implements OnInit {
  events: Event[];
  meetingRoomEmail:string = `meetingroom2@thumbstack.onmicrosoft.com`;
  
  constructor(private graphService: GraphService) { }

  ngOnInit() {
    this.graphService.getEvents(moment().format(), moment().add(7, 'days').format())
    .then((events) => {
      this.events = events
      .filter(e=>e.attendees.some(a=>a.emailAddress.address==this.meetingRoomEmail))
      .filter(e=>e.attendees.every(a=>a.status.response!=STATUS_DECLINED));
    });
  }

  formatDateTimeTimeZone(dateTime: DateTimeTimeZone): string {
    try {
      return moment.tz(dateTime.dateTime, dateTime.timeZone).format();
    }
    catch(error) {
      alert('DateTimeTimeZone conversion error'+ JSON.stringify(error));
    }
  }
}
