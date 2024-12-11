import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
//import { Com1Component } from './path1/path2/com1/com1.component';
//import { SignupComponent } from './signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
employeesList=[{name:'Mani',salary:'10'},
  {name:'Jai',salary:'20'},
  {name:'Ni',salary:'30'},
  {name:'Ha',salary:'40'},
  {name:'Na',salary:'50'}
]

getEmployeeName(index:number,employee:any):string{
  return employee.name;
}

refresh():void{
  this.employeesList=[{name:'Mani',salary:'10'},
    {name:'Jai',salary:'20'},
    {name:'Ni',salary:'30'},
    {name:'Ha',salary:'40'},
    {name:'Na',salary:'50'},
    {name:'Lak',salary:'60'},
    {name:'Go',salary:'70'},
    {name:'si',salary:'80'}
  ]
}

myValue=9;

show=false;
  rn:number=Math.floor(Math.random()*10); 
  style="color:red;font-size:10px";
  color='Black';
  src="https://images.unsplash.com/photo-1719937206930-84afb0daf141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
  isDisabled=false;
  // Employee Object
  employee = {
    name: 'j',
    salary: '7'
  }
  // button click event

  txtChange(): void {
    const inputBox = document.getElementById('inputBox');
    const button=document.getElementById('btn');
  
  }



  buttonClick(): void {
    alert('hi buddy');
    /*
    const content=document.getElementsByClassName('h2-heading');
    const btnText=document.getElementsByClassName('btnText');
    if(content.style.display === 'none'){
  
      btnText.textContent="Show";
  
    }else{
  
      btnText.textContent="Hide";
    }
      */
  }
}
