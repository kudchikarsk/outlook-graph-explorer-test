import { Component, OnInit } from '@angular/core';
import { GraphService } from '../services/graph.service';
import { Event, DateTimeTimeZone } from '../event';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-outlook-dashboard',
  templateUrl: './outlook-dashboard.component.html',
  styleUrls: ['./outlook-dashboard.component.css']
})
export class OutlookDashboardComponent implements OnInit {
  events: Event[];

  constructor(private graphService: GraphService) { }

  ngOnInit() {
    this.graphService.getEvents()
    .then((events) => {
      this.events = events;
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
