import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, concat, debounceTime, distinctUntilChanged, filter, map, Observable, of, Subject, switchMap, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DropdownList';


  Fruits$: Observable<any> ;
  fruitLoading = false;
  fruitsInput$ = new Subject<string>();
  selectedFruit: any;
  minLengthTerm = 3;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadFruits();
  }

  trackByFn(item: any) {
    return item.id;
  }

  loadFruits() {

    this.Fruits$ = concat(
      of([]),
      this.fruitsInput$.pipe(
        filter(res => {
          return res !== null && res.length >= this.minLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(500),
        tap(() => this.fruitLoading = true),
        switchMap(term => {

          return this.getFruits(term).pipe(
            catchError(() => of([])),
            tap(() => this.fruitLoading = false)
          )
        })
      )
    );

  }

  getFruits(term: any): Observable<any> {
    return this.http
      .get<any>('http://localhost:3000/DropDownItems'+term)
      .pipe(map(resp => {
        if (resp.Error) {
          throwError(resp.Error);
        } else {
          return resp.Search;
        }
      })
      );
}
}
