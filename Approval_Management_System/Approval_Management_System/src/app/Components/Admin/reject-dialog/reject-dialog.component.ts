import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reject-dialog',
  templateUrl: './reject-dialog.component.html',
  styleUrls: ['./reject-dialog.component.css']
})
export class RejectDialogComponent implements OnInit {
  RejectForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.RejectForm=this.fb.group({
      comments:['',[Validators.required]]
    });
  }

}
