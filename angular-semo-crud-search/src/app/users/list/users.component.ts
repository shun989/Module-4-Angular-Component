import {Component, OnInit, ViewChild} from '@angular/core';
import {Users} from "../users";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchText: any;
  user: Users = {};
  users: Users[] = [
    {
      id: 1,
      name: 'tuan1',
      email: 'tuan@gmail.com',
      address: 'thuy van viet tri',
      phone: 980228348
    },
    {
      id: 2,
      name: 'tuan2',
      email: 'tuan@gmail.com',
      address: 'thuy van viet tri',
      phone: 980228348
    },
    {
      id: 3,
      name: 'tuan3',
      email: 'tuan@gmail.com',
      address: 'thuy van viet tri',
      phone: 980228348
    },
    {
      id: 4,
      name: 'tuan4',
      email: 'tuan@gmail.com',
      address: 'thuy van viet tri',
      phone: 980228348
    },
    {
      id: 5,
      name: 'tuan5',
      email: 'tuan@gmail.com',
      address: 'thuy van viet tri',
      phone: 980228348
    },
    {
      id: 6,
      name: 'tuan6',
      email: 'tuan@gmail.com',
      address: 'thuy van viet tri',
      phone: 980228348
    },
    {
      id: 7,
      name: 'tuan7',
      email: 'tuan@gmail.com',
      address: 'thuy van viet tri',
      phone: 980228348
    },
    {
      id: 8,
      name: 'tuan8',
      email: 'tuan@gmail.com',
      address: 'thuy van viet tri',
      phone: 980228348
    },
    {
      id: 9,
      name: 'tuan9',
      email: 'tuan@gmail.com',
      address: 'thuy van viet tri',
      phone: 980228348
    },
    {
      id: 10,
      name: 'tuan10',
      email: 'tuan@gmail.com',
      address: 'thuy van viet tri',
      phone: 980228348
    },
  ];
  displayedColumns: any[] = ['id', 'name', 'email', 'address', 'phone'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }


  deleteUser(index: number): void {
    if (confirm('Are you sure?')) {
      this.users.splice(index, 1);
    }
  }



}
