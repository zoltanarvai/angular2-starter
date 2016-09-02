import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `    
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Initial App State');
  }
}
