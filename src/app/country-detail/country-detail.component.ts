import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/countries.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent  {
  country: any;
  errorMessage: string;
  countryCode = {};
  constructor( private countryService: CountryService,
               private route: ActivatedRoute ,
               private location: Location ) { }

  country$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('countryid')),
    switchMap( (country:string) => this.countryService.getCountry(country)));
  

  onBack() {
    this.location.back();
  }
  

}
