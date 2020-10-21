import { Component, OnInit } from '@angular/core';
import { CountryService } from  '../service/countries.service' ;
import { ActivatedRoute } from '@angular/router';
import { ICountries } from './countries';
import { map, switchMap, tap } from 'rxjs/operators';

export interface State {
  name: string;
  flag: string;
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent  {
  errorMessage: string;
  _listFilter: string;
  countriesSearch: any ;

get listFilter(): string {
    return this._listFilter;
}

set listFilter(value: string){
    this._listFilter = value;
    this.countriesSearch = this.listFilter ? this.performFilter(this.listFilter) : []; 
}

  constructor(private countryService: CountryService,
              private route: ActivatedRoute  ) { }



countries$ = this.route.paramMap.pipe(
  map(paramMap => {
    const params1 =  {
      id : paramMap.get('id'),
      typeid : paramMap.get('typeid')
    }
    return params1;
  }),
  switchMap(countries => this.countryService.getCountries(countries.id,countries.typeid) )
)

  
  

  performFilter(filterBy: string) {
    if(filterBy.length > 1) {
      filterBy = filterBy.toLocaleLowerCase();
      return this.countryService.getAllCountries(filterBy).subscribe({
      next: data =>{ 
        this.countriesSearch  = data;
        console.log(this.countriesSearch);
        },
        error: err => this.errorMessage = err
      });
    }
    
  }

}
