import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-permanentlink',
  templateUrl: './permanentlink.component.html',
  styleUrls: ['./permanentlink.component.css']
})
export class PermanentlinkComponent implements OnInit,OnChanges {
  @Input() permanentLink:string;
  displaypermanent:string;
  constructor() { }
  ngOnChanges() {
      if(this.permanentLink=='true'){
        this.displaypermanent='Yes';
      }
      else {
        this.displaypermanent='No';
      }
  }
  ngOnInit(): void {
  }

}
