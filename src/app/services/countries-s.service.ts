import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountriesSService {

  constructor( private _http: HttpClient ) { }


  getCountries(){
    return this._http.get("https://restcountries.eu/rest/v2/lang/es");
  }

}
