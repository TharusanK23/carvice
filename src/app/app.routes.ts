import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
          { path: '', redirectTo: '', pathMatch: 'full' },
          { path: '', loadChildren: () => import ("./screens/home/home.module").then(m => m.HomeModule) },
          { path: 'setup', loadChildren: () => import ("./screens/setup/setup.module").then(m => m.SetupModule) },
        ],
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutes { }

