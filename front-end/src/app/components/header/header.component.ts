import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false
  constructor(private _loginService: LoginServiceService, private _router: Router) {
    this._loginService.authSub.subscribe((data) => {
      this.isLoggedIn = data
    })
  }

  ngOnInit() {
    this.isLoggedIn = this._loginService.getAuthStatus()
  }

  toggleMenuBar() {
    if(document.getElementById("collapsibleNavId").style.display == "block") {
      document.getElementById("collapsibleNavId").style.display = "none";
    } else {
      document.getElementById("collapsibleNavId").style.display = "block";
    }
  }

  logout() {
    this._loginService.logoutUser()
    this._router.navigate(['/login'])
  }
}
