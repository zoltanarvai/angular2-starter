import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home', 
  templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {
  localState;
  
  ngOnInit() {
    this.localState = { value: ''}
    console.log('hello `Home` component');
  }

  submitState(value) {
    console.log('submitState', value);
  }
}
