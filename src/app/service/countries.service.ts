import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, shareReplay, tap } from 'rxjs/operators';
import { ICountries } from '../modules/shared/countries';

export interface State {
    name: string;
    flag: string;
  }


@Injectable({
    providedIn: 'root'
})

export class CountryService {
    private siteUrl = 'https://restcountries.eu/rest/v2';
    private allcountriesUrl = `https://restcountries.eu/rest/v2/all`;


    constructor(private http: HttpClient) {}

    countries$ = this.http.get<ICountries[]>(this.allcountriesUrl)
    .pipe(
        tap(data => console.log(data)),
        shareReplay(1)
    );

    getCountries(type: string ,typeid : string ) {
        if (typeid == 'region') {
            return this.countries$.pipe(
                map(items => items.filter(
                    itemm => itemm.region === type ) ), 
                tap(data => console.log(data))    
            )
        }

        if (typeid == 'currency') {
            return this.countries$.pipe(
                map(items => items.filter(
                    itemm => itemm.currencies.find(element => element.name === type) ) ), 
                    tap(data => console.log(data)) 
            )
        }
        if(typeid == 'lang') {
            return this.countries$.pipe(
                map(items => items.filter(
                    itemm => itemm.languages.find( element => element.name === type ) ) ), 
                    tap(data => console.log(type)) 
            )
        }
    }
    
    

    getCountry(item: string) {
        return this.http.get<ICountries[]>(`https://restcountries.eu/rest/v2/name/${item}?fullText=true`).pipe(
            map(elements => elements[0] ))
    }
  
  
    

    

    
    





}

