import { Component, Input, OnInit } from '@angular/core';
import { ICountries } from '../../shared/countries';

@Component({
  selector: 'app-countries-view',
  templateUrl: './countries-view.component.html',
  styleUrls: ['./countries-view.component.css']
})
export class CountriesViewComponent implements OnInit {

  @Input() countries$: ICountries[];
  constructor() { }

  ngOnInit(): void {
  }

}
