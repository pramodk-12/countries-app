import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { concatMap, elementAt, filter, map, mergeMap, shareReplay, switchMap, tap, toArray } from 'rxjs/operators';
import { from, merge, Observable, of, throwError } from 'rxjs';
import { ICountries } from '../countries/countries';
import { countryRes } from '../responseinterfaces'

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
    private fields = 'fields=name;flag;region;capital;population;languages;nativeName;subregion;currencies;borders;topLevelDomain;alpha3Code;';
    private allcountriesUrl = `https://restcountries.eu/rest/v2/all?${this.fields}`;
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
        return this.http.get<ICountries[]>(`https://restcountries.eu/rest/v2/name/${item}?${this.fields}?fullText=true`).pipe(
            map(elements => elements[0] ))
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

