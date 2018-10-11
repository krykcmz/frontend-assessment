import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContactComponent } from '../contact/list.component';
import { AddContactComponent } from '../contact/add.component';

const routes: Routes = [
    { path: 'list', component: ListContactComponent },
    { path: 'add', component: AddContactComponent },
    { path: '**', component: ListContactComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }