import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptor } from './components/auth/authInterceptor';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure router with routes
  ],
  providers: [
    // provideHttpClient(
    //   withInterceptors([authInterceptor]) // Register the interceptor globally
    // ),
  ],
  exports: [RouterModule],

  // providers: [provideHttpClient()], // add it here
  bootstrap: [],
})
export class AppModule {}
