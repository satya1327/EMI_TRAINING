import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DateValidator {

  constructor() { }

  static LessThanToday(control: FormControl): { [key: string]: any } {
    let today : Date = new Date();

   if (new Date(control.value) > today)
       return { "LessThanToday": true };

   return null;
}

}
