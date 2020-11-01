import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesViewComponent } from './components/countries-view/countries-view.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';
import { CountriesContainerComponent } from './containers/countries-container/countries-container.component';
import { DetailContainerComponent } from './containers/detail-container/detail-container.component';
import { RegionsComponent } from './regions.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './shared/search/search.component';

@NgModule({
  declarations: [
    RegionsComponent,
    CountriesViewComponent,
    DetailViewComponent,
    CountriesContainerComponent,
    DetailContainerComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegionsComponent
      },
      { 
        path: 'countries/:typeid/:id', 
        component: CountriesContainerComponent 
      },
      { 
        path: 'country/:countryid', 
        component: DetailContainerComponent
      }
    ])
  ]
})
export class CountriesModule { }
