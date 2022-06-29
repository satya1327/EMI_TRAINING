import { DesignServiceService } from './../../design-service.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent  {

  constructor(private pp:DesignServiceService) { }

  // ngOnInit(): void {
  //   this.pp.exclusive.next(true);
  // }

}
