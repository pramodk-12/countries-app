import { Component, OnInit } from '@angular/core';
import { CountryService } from  '../service/countries.service' ;
import { ActivatedRoute } from '@angular/router';
import { ICountries } from './countries';

export interface State {
  name: string;
  flag: string;
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: ICountries[] = [];
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

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');
        const type = params.get('typeid');
        if( type == 'region') {
          this.countryService.getRegion(id).subscribe({ 
            next: data =>{ 
            this.countries  = data;
            },
            error: err => this.errorMessage = err
          });
        } 
        
        if(type == 'currency') {
          this.countryService.getCurrency(id).subscribe({
            next: data =>{ 
              this.countries  = data;
              },
              error: err => this.errorMessage = err
          });
        }

        if(type == 'lang') {
          this.countryService.getLanguage(id).subscribe({
            next: data =>{ 
              this.countries  = data;
              },
              error: err => this.errorMessage = err
          });
        }
      }
    ); 
  }


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
