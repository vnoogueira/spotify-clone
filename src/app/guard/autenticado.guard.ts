import { CanActivateFn, Router } from '@angular/router';

export const autenticadoGuard: CanActivateFn = (route, state) => {

  return true;
};

