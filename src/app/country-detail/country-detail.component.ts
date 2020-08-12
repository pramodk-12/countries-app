import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/countries.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: any;
  errorMessage: string;
  countryCode = {};
  constructor( private countryService: CountryService,
               private route: ActivatedRoute ,
               private location: Location ) { }

  ngOnInit(): void {
      const id  = this.route.snapshot.paramMap.get('countryid');
      this.country = this.countryService.getCountry(id).subscribe({ 
        next: data =>{ 
        this.country  = data[0];
        },
        error: err => this.errorMessage = err
      });
      this.countryCode = this.countryService.getAlphacode();
      console.log(this.countryCode);
      
  }

  onBack() {
    this.location.back();
  }
  

}
