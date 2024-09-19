import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FetchComponent } from './fetch/fetch.component';

export const routes: Routes = [
    {path:'add-new-product', component: CreateComponent},
    {path:'all-products', component: FetchComponent},
    // {path: '', redirectTo: '/all-products', pathMatch: 'full' }
];
