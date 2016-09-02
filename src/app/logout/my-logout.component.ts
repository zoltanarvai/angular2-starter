import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from "../shared/services/authentication.service";

@Component({
    selector: 'my-logout',
    templateUrl: './my-logout.template.html'
})
export class MyLogoutComponent implements OnInit { 
    username: string = 'Joe';

    constructor(private authenticationService: AuthenticationService){  }

    @Output() onLogout = new EventEmitter<string>();

    ngOnInit(){
        this.username = this.authenticationService.username;
    }

    logout(){
        this.onLogout.emit(this.username);
    }
}