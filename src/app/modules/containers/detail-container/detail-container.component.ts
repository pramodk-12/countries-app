import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/countries.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.css']
})
export class DetailContainerComponent implements OnInit {

  constructor( private countryService: CountryService,
    private route: ActivatedRoute,
    private location: Location ) { }

  country$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('countryid')),
    tap(res => console.log(res)),
    switchMap( (country:string) => this.countryService.getCountry(country)));

  ngOnInit(): void {
  }

  routeBack(value: boolean) {
    this.location.back();
  }

}
