import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoComponent } from './producto/producto.component';
import { RouterModule, Routes } from '@angular/router';
import { TextoPipe } from './pipes/texto.pipe';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DontFoundComponent } from './dont-found/dont-found.component';
import { SettingsComponent } from './user/settings/settings.component';
import { SettingsService } from './service/settings.service'

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/languages', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductoComponent,
    TextoPipe,
    LoginComponent,
    DashboardComponent,
    DontFoundComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'productos', component: ProductoComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component : DashboardComponent },
      { path: "**", component: DontFoundComponent}
    ]),
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [
    Title,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
