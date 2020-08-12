import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ICountries } from '../countries/countries';

export interface State {
    name: string;
    flag: string;
  }


@Injectable({
    providedIn: 'root'
})

export class CountryService {
    region: string;
    country: any;
    alphacode = {};
    temp: any;
    private siteUrl = 'https://restcountries.eu/rest/v2';
    private fields = 'fields=name;flag;region;capital;population;languages';

    constructor(private http: HttpClient) {}

    getCountry(item) {
        let url = `${this.siteUrl}/name/${item}?fullText=true`;
        return this.http.get(url);
    }

    getRegion(item): Observable<ICountries[]> {
        let url = `${this.siteUrl}/region/${item}?${this.fields}`;
        return this.http.get<ICountries[]>(url) ;
    }

    getCurrency(item): Observable<ICountries[]> {
        let url = `${this.siteUrl}/currency/${item}?${this.fields}`;
        return this.http.get<ICountries[]>(url);
    }

    getLanguage(item): Observable<ICountries[]> {
        let url = `${this.siteUrl}/lang/${item}?${this.fields}`;
        return this.http.get<ICountries[]>(url);
    }

    getAllCountries(item): Observable<State[]> {
        let url = `${this.siteUrl}/name/${item}?fields=name;flag`;
        return this.http.get<State[]>(url).pipe(
            map(x => x.slice(0, 4)));
    }

    getAlphacode() {
        let url = `${this.siteUrl}/all?fields=name;alpha3Code`;
        this.http.get(url).subscribe({
            next: data =>{ 
                this.temp = data;
                var i;
                for (i of this.temp) {
                    this.alphacode[i.alpha3Code] = i.name;
                }
                
                }
        });
        return this.alphacode;        
    }

    
    





}

