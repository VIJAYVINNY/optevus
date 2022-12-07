import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { TrainersComponent } from './trainers/trainers.component';
import { DepartmentsComponent } from './departments/departments.component';
=======
import { TempCompComponent } from './temp-comp/temp-comp.component';
>>>>>>> 3c748f35c8396b65d4bd1f39cb7d3d71a08e4cf0
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
<<<<<<< HEAD
    TrainersComponent,
    DepartmentsComponent,
=======
  
    TempCompComponent,
>>>>>>> 3c748f35c8396b65d4bd1f39cb7d3d71a08e4cf0
    
   
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
