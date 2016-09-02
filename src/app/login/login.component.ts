import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthenticationService } from '../shared/services/authentication.service';

import { Observable }  from 'rxjs/Observable';

@Component({
    selector: 'login',
    templateUrl: './login.template.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent { 
    isLoggedIn: Observable<boolean>;
    username: string = 'ss';
    password: string = 'ss';

    constructor(private authenticationService: AuthenticationService, private router: Router) { 
        this.isLoggedIn = authenticationService.isLoggedIn;
    }

    login() {
        this.authenticationService.login(this.username, this.password).subscribe(result => {
            console.log('redirectUrl: ', this.authenticationService.redirectUrl || '/app');
            if(result.isSuccessful){
                this.router.navigate([this.authenticationService.redirectUrl || '/app']);
            }
        });
    }
}