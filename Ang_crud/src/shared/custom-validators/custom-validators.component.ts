import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class CustomValidatorService {
  Lessthan(createdDate:string) {
    return (formGroup: FormGroup) => {
      const createddate = formGroup.controls[createdDate];


      if (createddate.value >= Date.now()) {
        createddate.setErrors(null);
      } else {
        createddate.setErrors({ createddateMisMatch: true });
      }
    };
  }

  constructor() {}
}
