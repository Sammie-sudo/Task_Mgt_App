import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'o',
        pathMatch: 'full'
    },
    {
        path: 'o',
        loadComponent: () => import('./board/board').then(m => m.Board)
    }
];
