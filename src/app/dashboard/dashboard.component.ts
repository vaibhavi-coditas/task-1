import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input()  List : any = [];

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.List);
  }
  onDelete(user:any){
    const index : number= this.List.indexOf(user);
    if(index >- 1){
      this.List.splice(index, 1)
    }
  }
  onEdit(user:any ){
    this.List.forEach((List : any , i : any) => {
       if (List == user) 
       {this.List[i] = user;
        this.newItemEvent.emit(i);
      
      }

      });
    }
  }

