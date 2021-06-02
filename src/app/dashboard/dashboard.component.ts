import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input()  List : any = [];
  
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
    var index = this.List.indexOf(3452);
    if(index !== -1){
      this.List[index]=1010;
    }
  }
}
