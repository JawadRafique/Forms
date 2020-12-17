import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
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
