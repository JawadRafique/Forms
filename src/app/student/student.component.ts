import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  loginForm: FormGroup |any;
  login : any =[];
  
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', ],
      fname: ['', ],
      mname: ['', ],
      age: ['', ],
      class: ['', ]
    })
  
    }
    submit(){
      this.login.push(this.loginForm.value)
      console.log(this.loginForm)
    }
}
