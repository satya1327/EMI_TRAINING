import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges,OnDestroy,AfterViewInit,AfterViewChecked,AfterContentChecked,AfterContentInit,DoCheck {
  details:any=[{
    name:'satya',
    age:25,
    height:5.6
  }];
  timer:any | undefined;

  counter:any = 0;

  constructor() {
    console.log("constructor executed");
   }
   ngOnChanges(): void {
    console.log("from onchanges");
  }


  ngOnInit(): void {
  console.log("form onchanges");
  }
  ngAfterContentChecked(): void {
    console.log("after content invocked");
  }
  ngAfterViewChecked(): void {
    console.log("after view checked invocked");
  }
  ngAfterViewInit(): void {
    console.log("after view init invocked");
  }
  ngAfterContentInit(): void {
    console.log("after content init invocked");
  }
  ngDoCheck(): void {
    console.log("docheck invocked");
  }
  onupdtae(){
    this.details=[{
      name:'sumit',
      age:27,
      height:6
    }];
  }

  increment(){


   this.timer=setInterval(() => {
      this.counter++;
    }, 100);

}
  stop(){
    clearInterval(this.timer);


  }
  reset(){
    this.counter=0;
  }
  decrement(){
    this.counter--;
    if(this.counter<0){
      alert("can't proceed");
      this.counter=0;
    }

  }
  ngOnDestroy(): void {
    console.log("Destroy invocked");
  }




}
