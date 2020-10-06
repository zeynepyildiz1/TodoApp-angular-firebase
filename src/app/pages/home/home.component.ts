import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authservice: AuthService, private router: Router) { }
  
  ngOnInit(): void {
     ("user" in localStorage) ?this.router.navigate(['/home']):this.router.navigate(['/login']);
  }
  }
