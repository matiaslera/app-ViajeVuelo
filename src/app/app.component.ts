import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/loginServices/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userLogService: LoginService){}
  title = 'APP-Vuelo'
  isLogged(){
    return this.userLogService.isAuthenticated()
  }
  loggedId(){
    return this.userLogService.getUserLoggedId()
  }
  
}
