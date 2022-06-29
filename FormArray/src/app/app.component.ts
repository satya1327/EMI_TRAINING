import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FormArray';
  formgroup: FormGroup ;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formgroup = this.fb.group({
      EmployeeName: ['', [Validators.required]],
      Location: ['', [Validators.required]],
      TrainingConducted: this.fb.array([]),
    });
  }
  get Details(): FormArray {
    return this.formgroup?.get('TrainingConducted') as FormArray;
  }

  trainingDetails():FormGroup{
   return this.fb.group({
      technology:"",
      experiance:""
    });
  }
  addskills(){
      this.Details.push(this.trainingDetails());
  }
  removeSkills(i:number){
    this.Details.removeAt(i);
  }

  onSubmit(){
    console.table(this.formgroup?.value);
  }


}
