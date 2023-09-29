import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { FruitsComponentComponent } from './fruits-component/fruits-component.component';
import { VegComponentComponent } from './veg-component/veg-component.component';
import { DataserviceService } from './services/dataservice.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FruitsComponentComponent,
    VegComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
