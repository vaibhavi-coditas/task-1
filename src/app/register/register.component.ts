import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
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
      email : [null, Validators.compose([Validators.required, Validators.email])],
      number : ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],  
     })
  }

  ngOnInit() {
    
  }

  onRegister(value: any) {
    if(this.Index != undefined ){
      this.userList[this.Index]=value;
      this.Index=undefined;
      alert('Your Data is Updated!');
    }else{
      this.userList.push(value);
      alert('Entered Data is Registered!');
    }

    console.log(value);
    
    
  }
 
  addItem(value : any){
    this.Index=value;
    this.registerForm.setValue({  
      firstName : this.userList[value].firstName, 
      lastName : this.userList[value].lastName,
      email: this.userList[value].email,
      number: this.userList[value].number,

  });
  }
}

