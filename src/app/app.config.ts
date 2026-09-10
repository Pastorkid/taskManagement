import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';

const snackBarDefaults: MatSnackBarConfig = {
  duration: 4500,
  horizontalPosition: 'end',
  verticalPosition: 'top',
  politeness: 'assertive',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: snackBarDefaults },
  ],
};
