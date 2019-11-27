import { Injectable } from '@angular/core';
import { Client } from '@microsoft/microsoft-graph-client';

import { Event } from '../event';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private graphClient: Client;
  constructor(
    private authService: AuthService) {

    // Initialize the Graph client
    this.graphClient = Client.init({
      authProvider: async (done) => {
        // Get the token from the auth service
        let token = await this.authService.getAccessToken()
          .catch((reason) => {
            done(reason, null);
          });

        if (token)
        {
          done(null, token);
        } else {
          done("Could not get an access token", null);
        }
      }
    });
  }

  async getEvents(startDate:string, endDate:string): Promise<Event[]> {    
    console.log(startDate);
    console.log(endDate);
    try {
      let result =  await this.graphClient
        .api(`/me/events?startdatetime=${startDate}&enddatetime=${endDate}`)
        .select('subject,organizer,start,end,attendees,location')
        .orderby('createdDateTime DESC')
        .get();

      return result.value;
    } catch (error) {
       alert('Could not get events'+ JSON.stringify(error, null, 2));
    }
  }
}