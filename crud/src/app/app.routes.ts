import { provideRouter, Route, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { FetchComponent } from "./fetch/fetch.component";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

export const routes: Routes = [
    {path: 'add-new-product', component: CreateComponent},
    {path: 'all-products', component: FetchComponent}
]
bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(routes)
    ]
  });