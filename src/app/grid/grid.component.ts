import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  loginForm: FormGroup |any;
  login : any =[];

  columnDefs = [
    { field: 'name', sortable: true, filter: true },
    { field: 'fname', sortable: true, filter: true },
    { field: 'mname', sortable: true, filter: true },
    { field: 'age', sortable: true, filter: true },
    { field: 'class', sortable: true, filter: true }
];

  rowData = [] ;

  @ViewChild('agGrid') agGrid?: AgGridAngular;
  
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', ],
      fname: ['', ],
      mname: ['', ],
      age: ['', ],
      class: ['', ]
    })
  }
  onAddRow()
   {
  //    this.agGrid?.api.updateRowData({
  // add: [{ name: '', fname: 'S2', mname: '', age: '', class: '' }]
  //    });
    // debugger


  // Adding data to login array   
  this.login.push(this.loginForm.value)
  // console.log(this.loginForm)

  // Adding data to grid row 
  this.rowData = this.login
  this.agGrid?.api.applyTransaction({ add: this.rowData })
  }
}
