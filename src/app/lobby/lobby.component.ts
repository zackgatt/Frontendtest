import { Component, OnInit } from '@angular/core';
import { default as gameData } from 'src/app/data/data.json';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  Users: any = gameData;
  searchName: string;
  order: string = 'name';
  sortedCollection: any[];
  reverse: boolean = false;
  
  constructor(private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.Users, 'name');
    console.log(this.sortedCollection);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  ngOnInit() {
  }

}
