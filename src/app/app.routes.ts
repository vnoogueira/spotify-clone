import { Routes } from "@angular/router";
import { autenticadoGuard } from "./guard/autenticado.guard";


export const AppRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then(x => x.PlayerModule),
   // canMatch: [autenticadoGuard]
  }
];
