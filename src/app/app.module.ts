import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { DataService } from './data.service';
import { SadrzajFormaComponent } from './sadrzaj-forma/sadrzaj-forma.component';
import { ClanoviFormaComponent } from './clanovi-forma/clanovi-forma.component';
import { SortByPipe } from './sort-by.pipe';
import { DatotekeFormaComponent } from './datoteke-forma/datoteke-forma.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SadrzajFormaComponent,
    ClanoviFormaComponent,
    SortByPipe,
    DatotekeFormaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
