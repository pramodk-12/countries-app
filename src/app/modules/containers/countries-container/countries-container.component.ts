import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ICountries } from '../../shared/countries';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.css']
})
export class CountriesContainerComponent implements OnInit {

  errorMessage:any;

  private searchSubject =  new BehaviorSubject<string>('');
  searchAction$ = this.searchSubject.asObservable();

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
  );

  countriesFilter$ = combineLatest([
    this.countries$,
    this.searchAction$
  ]).pipe(
    map( ([countries, searchWord]) =>
    countries.filter( (country:ICountries) => 
      searchWord ? country.name.includes(searchWord) : true
      )
  ),
  catchError(err => {
    this.errorMessage = err;
    return EMPTY;
  })) ;

  ngOnInit(): void {
  }


  searchParent(event:string) {
    this.searchSubject.next(event);
  }

}
