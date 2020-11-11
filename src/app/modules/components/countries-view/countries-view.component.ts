import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ICountries } from '../../shared/countries';

@Component({
  selector: 'app-countries-view',
  templateUrl: './countries-view.component.html',
  styleUrls: ['./countries-view.component.css'],
  animations: [
    trigger('header', [
      transition(':enter', [
        query('*', style({ opacity: 0, transform: 'translateY(-15%)' })),
        query('*', stagger('50ms', [
          animate('.3s ease-in', style({ opacity: 1, transform: 'translateY(0)'}))
          ]))
        ])
      ])
  ]
})
export class CountriesViewComponent implements OnInit {

  @Input() countries$: ICountries[];
  constructor() { }

  ngOnInit(): void {
  }

}
