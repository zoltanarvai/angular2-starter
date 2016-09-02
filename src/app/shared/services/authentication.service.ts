import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Observable } from 'rxjs/Observable';
import map from 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    isLoggedIn = new ReplaySubject<boolean>(1);
    redirectUrl;
    username: string;

    constructor(private http: Http) { 
        this.isLoggedIn.next(false);
    }

    login(username: string, password: string): Observable<AuthenticationResult> {
        this.username = username;
        this.isLoggedIn.next(true);
        return this.isLoggedIn.map(p => new AuthenticationResult());
    }

    logout() {
        this.isLoggedIn.next(false);
    }
}

export class AuthenticationResult {
    isSuccessful = true
}