import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../Userdata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;
  
  registerForm: FormGroup;
  user : any = {};
   

  constructor( private fb:FormBuilder, private UserDataservice : UserDataService
    ) { 
      this.registerForm = fb.group({

        firstName: [null, Validators.required],      
        lastName: [null, Validators.required],
    })

    ngOnInit(): void {
      console.log('ON INIT Register')
    }
  
}
  
