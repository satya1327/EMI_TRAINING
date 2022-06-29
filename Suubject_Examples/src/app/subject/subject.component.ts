import { DesignServiceService } from './../../design-service.service';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private designservice:DesignServiceService) { }

  ngOnInit(): void {
    this.designservice.exclusive.next(true);
    console.log("component loaded");
  }
  ngOnDestroy(): void {
    this.designservice.exclusive.next(false);
    console.log("component destroyed");
  }

}
