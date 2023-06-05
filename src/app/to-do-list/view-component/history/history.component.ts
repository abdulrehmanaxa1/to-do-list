import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { History } from '@to-do-list/model/to-do-list.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit{
  
  @Input() history!: History;
  dataSource !: MatTableDataSource<History>

  displayedColumns = ['created', 'updated']
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([this.history])
  }

}
