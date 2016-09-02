import {
  addProviders,
  inject
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from './app.component';

describe('App', () => {
  
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => addProviders([
    AppComponent
  ]));

  it('should log ngOnInit', inject([ AppComponent ], (app) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    app.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
