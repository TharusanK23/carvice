import { Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            redirectTo: '',
            pathMatch: 'full',
          },
          {
            path: "",
            loadChildren: () => import ("./screens/home/home.module").then(m => m.HomeModule)
          },
        ],
      },
];
