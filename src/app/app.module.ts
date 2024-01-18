import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
    // Add other components if any
  ],
  imports: [
    BrowserModule,
    FormsModule
    // Add other modules if any
  ],
  providers:[],
  bootstrap: [AppComponent],
})
export class AppModule { }
