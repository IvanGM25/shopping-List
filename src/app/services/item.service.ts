import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3000/items';
  httpOptions = {
    headers:{
      'Content-type':'application/json'

    }
  };
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

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    //return  this.items ;
    return this.http.get<Item[]>(this.url);
  }

  addItem(item:Item):Observable<Item>{

    //this.items.unshift(item);
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }
  toggleItem(item:Item):Observable<Item>{
    
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions); 
  
  }
  deleteItem(item:Item):Observable<Item>{
    
    return this.http.delete<Item>(this.url + item.id); 
  }
}
