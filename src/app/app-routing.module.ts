import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { ClanoviFormaComponent }   from './clanovi-forma/clanovi-forma.component';
import { SadrzajFormaComponent }     from './sadrzaj-forma/sadrzaj-forma.component';
import { DatotekeFormaComponent }     from './datoteke-forma/datoteke-forma.component';
 
const appRoutes: Routes = [
  { path: 'clanovi', component: ClanoviFormaComponent },
  { path: 'sadrzaj', component: SadrzajFormaComponent },
  { path: 'datoteke', component: DatotekeFormaComponent },
  { path: '',   redirectTo: 'clanovi', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}