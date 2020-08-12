import { Component, OnInit } from '@angular/core';
import { CountryService } from './service/countries.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface State {
  name: string;
  flag: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-countries';
  errorMessage: string;
  country: any;
  countries:any;
  _listFilter: string;

  constructor( private countryService: CountryService ) {
    
  }

  ngOnInit(): void {

  }
    

  
    
}



