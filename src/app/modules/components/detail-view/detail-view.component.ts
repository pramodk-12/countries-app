import { trigger, transition, query, style, stagger, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICountries } from '../../shared/countries';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
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
export class DetailViewComponent implements OnInit {

  @Input() country$: ICountries;
  @Output() routeWord = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  backRoute() {
    this.routeWord.emit(true);
  }

}
