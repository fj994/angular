import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthServiceService) { }

  ngOnInit() {
  }

  navigateToServerEdit(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'loading'});
  }

  onLogin() {
    this.authService.loggIn();
  }

  onLogout() {
    this.authService.logOut();
  }
}
