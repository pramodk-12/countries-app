import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/countries.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  typesOfRegions = ['africa','americas','asia','europe','oceania']
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  
}
