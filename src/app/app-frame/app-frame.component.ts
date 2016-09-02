import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MyLogoutComponent } from '../logout';
import { AuthenticationService } from '../shared/services/authentication.service';

/**
 * The Role of this component is to serve as a container for the main page after log in.
 */
@Component({
    selector: 'app-frame',
    templateUrl: './app-frame.template.html',
    directives: [ MyLogoutComponent ]
})
export class AppFrameComponent implements OnInit { 
    
    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    ngOnInit(){
        console.log('Master page for authenticated users initialised');
    }

    logout(username: string){
        console.log(username);
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}