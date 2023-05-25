import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { FoodDirective } from './food.directive';
import { MatButtonHarness } from '@angular/material/button/testing';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  declarations: [AppComponent, ChildComponent, FoodDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
