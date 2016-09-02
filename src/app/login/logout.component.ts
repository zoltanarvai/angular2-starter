import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'logout',
    templateUrl: './logout.template.html'
})
export class LogoutComponent {
    @Output() onLogout = new EventEmitter();

    logout(){
        this.onLogout.emit();
    }
}
