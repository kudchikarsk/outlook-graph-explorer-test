import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outlook-login',
  templateUrl: './outlook-login.component.html',
  styleUrls: ['./outlook-login.component.css']
})
export class OutlookLoginComponent implements OnInit {

  constructor(private authService: AuthService, private route:Router) { }

  ngOnInit() {
    if(this.authService.authenticated)
    {
      this.route.navigateByUrl(`outlook/dashboard`);
    }
  }

  async signIn(): Promise<void> {
    await this.authService.signIn();
    this.route.navigateByUrl(`outlook/dashboard`);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
