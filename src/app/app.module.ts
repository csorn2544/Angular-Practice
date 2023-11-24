import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
