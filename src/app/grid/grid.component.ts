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
  rowData = [] ;
  loginchange : any ;


  columnDefs = [
    { field: 'name', sortable: true, filter: true },
    { field: 'fname', sortable: true, filter: true },
    { field: 'mname', sortable: true, filter: true },
    { field: 'age', sortable: true, filter: true },
    { field: 'class', sortable: true, filter: true }
];

  

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
  
  // Adding data to login array   
  this.login.push(this.loginForm.value)
  

  // Cleaning Grid before passing data from array
  this.agGrid?.api.setRowData([]);
  
  // Adding data to grid row 
  this.rowData = this.login
  this.agGrid?.api.applyTransaction({ add: this.rowData })
  
  // Clear Form
  this.loginForm.reset();
}

getSelectedRows() {

  // Getting data of selected node in ag grid
  const selectedNodes = this.agGrid?.api.getSelectedNodes();
  const selectedData = selectedNodes?.map(node => node.data );

  // Storing data on variable 
  const namee = String(selectedData?.map(node => node.name))
  const fnamee = String(selectedData?.map(node => node.fname))
  const mnamee = String(selectedData?.map(node => node.mname))
  const agee = Number(selectedData?.map(node => node.age))
  const classs = String(selectedData?.map(node => node.class))

  // Adding variable data to form 
  this.loginForm = this.fb.group({
    name: namee,
    fname: fnamee,
    mname: mnamee,
    age: agee,
    class: classs
  })

}

onDeleteRow()
   {
	var selectedData = this.agGrid?.api.getSelectedRows();
	this.agGrid?.api.updateRowData({ remove: selectedData });
}

onEditRow() {

  // Getting data of selected node in ag grid
  const selectedNodes = this.agGrid?.api.getSelectedNodes();
  const selectedData = selectedNodes?.map(node => node.data );
  const namee = String(selectedData?.map(node => node.name));
  console.log(selectedData)
  console.log(namee)
  
  this.getSelectedRows = this.loginForm.value
  this.loginchange = this.getSelectedRows
  console.log(this.loginchange)

  for (var i = 0; i < this.loginForm.length; i++) {
    if (this.loginForm[i].name === namee) {
      this.loginForm[i]=this.loginchange;
      this.agGrid?.api.setRowData(this.loginForm)
    }
  }



  // this.agGrid?.api.setRowData(this.loginchange)
  // const rowNode = this.agGrid?.api.getRowNode()
  // console.log(rowNode)

  
}


}