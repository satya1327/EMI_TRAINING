import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DesignServiceService } from 'src/design-service.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {
  user2subscription:Subscription|undefined; //check wheather user is subscribe or not
  user1List=["java","csharp"]; //subscribed user
  user2List:any=[];  //subscribing user
  subscribe2user=false;  //for toggle purpose

  constructor(private design:DesignServiceService) {
    // this.design.videoEmit.subscribe(data=>{
    //   this.user1List.push(data);
    // })
  }

  ngOnInit(): void {
    this.design.videoEmit.subscribe(data=>{
      this.user1List.push(data);
    })
  }

  onvideoadd(video:any){
    this.design.videoEmit.next(video);
  }

  user2subscribe(){
    if(this.subscribe2user){
      this.user2subscription?.unsubscribe();


    }
    else{
      this.user2subscription=this.design.videoEmit.subscribe(m=>{
          this.user2List.push(m);
      });
      this.subscribe2user=!this.subscribe2user;
    }
  }

}
