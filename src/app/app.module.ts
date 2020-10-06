import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import firebase module
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFirestoreModule} from "@angular/fire/firestore";

import {environment} from "../environments/environment"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import {CrudService} from "./services/crud.service";
import { AddTaskComponent } from './pages/home/add-task/add-task.component';
import { TaskListComponent } from './pages/home/task-list/task-list.component'
//import toastr

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddTaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 500,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }), // ToastrModule added

  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
