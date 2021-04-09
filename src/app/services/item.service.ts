import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [
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
  ];

  constructor() { }

  getItems(){
    return  this.items ;
    
  }

  addItem(item:Item){

    this.items.unshift(item);
   
  }
  
}
