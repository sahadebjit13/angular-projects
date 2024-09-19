import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { TestObservableComponent } from './test-observable/test-observable.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchComponent } from './fetch/fetch.component';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    CreateComponent,
    ReactiveComponent,
    FormbuilderComponent,
    TestObservableComponent,
    FetchComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,RouterOutlet,RouterModule],
  providers: [provideRouter(routes)],
  
})
export class AppModule {}
