import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICountries } from '../../shared/countries';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
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
