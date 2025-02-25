import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsComponent } from './shows/shows.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { ViewDetailsComponent } from './view/view.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';




const routes: Routes = [
    {
        path: '',
        redirectTo: 'shows',
        pathMatch: 'full'
    },
    {
        path: 'shows',
        component: ShowsComponent
    },
    {
        path: 'shows/:showId/:showName',
        component: ViewDetailsComponent
    }
];

@NgModule({
    declarations: [
        ShowsComponent,
        ViewDetailsComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatTabsModule,
        MatCardModule,
        MatTableModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntertainmentModule { }
