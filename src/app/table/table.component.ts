import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router'

import { ItemComponent } from '../item/item.component'

export interface Data {
  id: number;
  product: string;
  price: number;
  quantity: number
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'product', 'price', 'quantity'];
  dataSource = new MatTableDataSource([]);
  constructor(private http: HttpClient, private router: Router) { }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.http.get<any>('assets/data.json').subscribe(data => {
      this.dataSource.data = data
      this.dataSource.sort = this.sort;
    })
  }

  logout() {
    localStorage.removeItem('loggedIn')
    this.router.navigate(['login']);
  }

  itemWindow = false;

  add(event) {
    event.id = this.dataSource.data.length + 1
    var data = this.dataSource.data
    data.push(event);
    this.dataSource.data = data
    this.itemWindow =false;

  }
}
