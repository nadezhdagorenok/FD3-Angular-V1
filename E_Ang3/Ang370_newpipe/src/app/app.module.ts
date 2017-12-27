import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HotelComponent } from './hotel.component';
import { HotelTitleComponent } from './hotel-title.component';
import { HotelStarsComponent } from './hotel-stars.component';
import { StarsPipe } from './stars.pipe';

@NgModule({
  declarations: [
    HotelComponent, HotelTitleComponent, HotelStarsComponent, StarsPipe
  ],
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [HotelComponent]
})
export class AppModule { }
