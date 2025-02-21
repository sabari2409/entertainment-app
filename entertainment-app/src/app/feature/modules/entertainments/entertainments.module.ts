import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsComponent } from './shows/shows.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'


const routes: Routes = [
    {
        path: '',
        redirectTo: 'shows',
        pathMatch: 'full'
    },
    {
        path: 'shows',
        component: ShowsComponent
    }
];

@NgModule({
    declarations: [
        ShowsComponent,
        
    ],
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntertainmentModule { }
