import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proficiencyFilter'
})
export class ProficiencyFilterPipe implements PipeTransform {

  transform(angularproficiency:number): any {
   if(angularproficiency>=3 && angularproficiency<4){
     return 'Good';
   }
   else if(angularproficiency>=4 && angularproficiency<5){
    return 'Very Good';
  }
  else if(angularproficiency==5){
    return 'Excellent';
  }
  else if(angularproficiency<3){
    return 'Below accuracy';
  }
  else{
    return 'Not record found';
  }

}
}
