import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { FormsModule } from '@angular/forms';
import { TempCompComponent } from './temp-comp/temp-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
  
    TempCompComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
