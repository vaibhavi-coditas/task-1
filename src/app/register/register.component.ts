import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
    userList : any= [] ;
  registerForm: FormGroup;
  Index : any ;
  
  
    
   
  constructor(fb :FormBuilder ) { 
     this.registerForm = fb.group({
      firstName : [null, Validators.required],
      lastName : [null, Validators.required],
      Address : [null, Validators.required], 
     })
  }

  ngOnInit() {
    
  }

  onRegister(value: any) {
    if(this.Index != undefined ){
      this.userList[this.Index]=value;
      this.Index=undefined;
      alert('Your Data is Updated');
    }else{
      this.userList.push(value);
      alert('Heyyyyyy  you got Registered ;)!');
    }
    console.log(value);
    
    
  }
 
  addItem(value : any){
    this.Index=value;
    this.registerForm.setValue({  
      firstName : this.userList[value].firstName, 
      lastName : this.userList[value].lastName,
      Address : this.userList[value].Address, 
  });
  }
}

