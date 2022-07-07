import { EditIdService } from './../../../shared/services/datasharebridge/edit-id.service';
import { EditBookComponent } from './../edit-book/edit-book.component';
import { AddBookComponent } from '../add-book/add-book.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification/notification.service';
import { BookDataService } from 'src/app/shared/services/BookApiServices/book-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  bookByName: any;
  allBookList: any;
  adminName: any;
  id: any;

  constructor(
    private datashare: EditIdService,
    private services: BookDataService,
    private toaster: NotificationService,
    private router: Router,
    private matdialog: MatDialog
  ) {}

  displayedColumns: string[] = [
    'image',
    'Bookname',
    'category',
    'Author',
    'quantity',
    'Action',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: MatTableDataSource<any>;

  ngOnInit(): void {
    this.services.getAllBooks().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);

        this.dataSource.paginator = this.paginator;
      },
    });

    this.adminName = localStorage.getItem('adminName');
    this.id = localStorage.getItem('adminId');
  }
  openAddDialog() {
    this.matdialog.open(AddBookComponent, {
      width: '400px',
    });
  }
  openEditDialog() {
    this.matdialog.open(EditBookComponent, {
      width: '400px',
    });
  }

  public deleteBook(id: any) {
    this.services.deleteBook(id).subscribe((response) => {
      {
        this.toaster.showSuccess('congratulations', 'Successfully deleted');
        window.location.reload();
      }
    });
  }
  editBook(id: number) {
    this.matdialog.open(EditBookComponent, {
      width: '400px',
    });
    this.datashare.editId(id);
  }
}
