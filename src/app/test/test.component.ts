import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `<h2>
            Welcome {{name}}
            </h2>
            
            <h2>{{2+2}}</h2>
            <h2>{{"Welcome" + name}}</h2>
            <h2>{{name.length}}</h2>
            <h2>{{name.toUpperCase()}}</h2>
            <h2>{{greetUser()}}</h2>
            <h2>{{siteUrl}}</h2>

            <input [id]="myId" type="text" value="Anish">
            Without using property binding
            <input disabled="false" id="{{myId}}" type="text" value="Anish">
            Using property binding
            <input [disabled]="false" id="{{myId}}" type="text" value="Anishkaa">
            <input [disabled]="true" id="{{myId}}" type="text" value="Babita">
            <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Raj">
            // not using square brackets
            <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Kirti">


  `,
  styles: []
})
export class TestComponent implements OnInit {

  // declare the variable name
  public name = "Tiger"

  // assigning global variable
  public siteUrl: string;

  public myId = "testId"
  public isDisabled = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.siteUrl = this.document.location.href;
  }

  
  ngOnInit(): void {
    
  }

  // create a new method
  greetUser(){
    return "Hello " + this.name;
  }

}
