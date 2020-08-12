import { Pipe, PipeTransform } from '@angular/core' ;
import { CountryService } from '../service/countries.service';


@Pipe({
    name : 'bordersName'
})

export class BordersNamePipe implements PipeTransform {
    constructor(private countryService: CountryService) {}

    transform(value: string): string {
       let codeArray = this.countryService.getAlphacode();
       return codeArray[value];
    }

}