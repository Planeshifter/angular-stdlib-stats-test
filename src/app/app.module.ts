import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { dists } from '@stdlib/stats/base';
import { kstest } from '@stdlib/stats';
import { AppComponent } from './app.component';

console.log( dists.normal.cdf( 2.0, 0.0, 1.0 ) );
console.log( kstest( [ 2.0, 1.0, 5.0, -5.0, 3.0, 0.5, 6.0 ], 'normal', 0.0, 1.0 ) );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
