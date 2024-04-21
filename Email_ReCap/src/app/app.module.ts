import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VScomponentComponent } from './vscomponent/vscomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    VScomponentComponent
  ],
  imports: [
    BrowserModule,FormsModule // Aggiungi FormsModule qui per risolvere gli errori di ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
