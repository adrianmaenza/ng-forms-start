import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrdersService } from './shared/orders.service';
import { AddStationServiceService } from './add-station-service.service';
import { ReactiveFormsModule } from '@angular/forms'; // on this line
import { AddStationComponent } from './add-station/add-station.component';

@NgModule({
  declarations: [

    AppComponent,
    OrdersComponent,
    OrderListComponent,
    AddStationComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [OrdersService, AddStationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
