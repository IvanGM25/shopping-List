import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[] = [];
  total:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'apple',
        price: 20,
        quantity: 5,
        completed: false
      },
      {
        id: 1,
        title: 'bread',
        price: 30.5,
        quantity: 2,
        completed: true
      },
      {
        id: 2,
        title: 'fernet',
        price: 260,
        quantity: 1,
        completed: false
      }
    ]
    this.getTotal();
  }

  deleteItem(item:Item){
    this.items = this.items.filter(x => x.id !== item.id )
    this.getTotal();
  }
  
  toggleItem(item:Item){
    this.getTotal();
  }
  getTotal(){
    this.total = this.items
                     .filter(x => !x.completed)
                     .map(x => x.quantity * x.price)
                     .reduce( (acc,x) => acc += x,0);
  }
}
