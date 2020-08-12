import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegionsComponent } from './regions/regions.component';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { BordersNamePipe } from './shared/borders.pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountriesComponent,
    CountryDetailComponent,
    BordersNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'regions', component: RegionsComponent },
      { path: 'countries/:typeid/:id', component: CountriesComponent },
      { path: 'country/:countryid',component: CountryDetailComponent },
      { path: '', redirectTo: 'regions', pathMatch: 'full' },
      { path: '**', redirectTo: 'regions', pathMatch: 'full' },
    ],{
      scrollPositionRestoration: 'enabled'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
