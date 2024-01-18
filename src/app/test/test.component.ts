import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>
            Welcome {{name}}
            </h2>
            
            <h2 class="text-success">Codevolution</h2>
            // Using class binding
            <h2 [class]="successClass">Codevolution</h2>

            <h2 class="text-special" [class]="successClass">Codevolution</h2>

            <h2 [class.text-danger]="hasError">Codevolution</h2>
            // using ngClass Directive
            <h2 [ngClass]="messageClasses">Codevolution</h2>

            // Using Style binding
            <h2 [style.color]="'orange'">Style Binding</h2>
            <h2 [style.color]="hasError ? 'red': 'green'">Style Binding</h2>
            <h2 [style.color]="highlightColor">Style Binding 2</h2>
            // using[ngStyle] directive
            <h2 [ngStyle]="titleStyles">Style Binding 3</h2>

            // Using event binding
            
            // Use interpolation and bind to greeting property
            {{greeting}}
            <button (click)="onClick($event)">Greeting</button>

            <button (click)="greeting='Welcome Mahabir'">Greet</button>
            

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
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {

  // declare the variable name
  public name = "Tiger";

  public successClass="text-success";
  public hasError = true;

  public isSpecial = true;

  // Create an object
  public messageClasses = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial

  }

  public highlightColor = "blue"
  // create an object
  public titleStyles = {
    color:"blue",
    fontStyle:"italic" //cannot use hypen so must use camelcase
  }

  //  onClick(){
  //     console.log('Welcome to Codevolution!')
  //     this.greeting = 'Welcome to Codevolution!'
  // }

  onClick(event: any){
    console.log(event)
    // this.greeting = 'Welcome to Codevolution!'
    this.greeting = event.type
}


  public greeting ="";
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
