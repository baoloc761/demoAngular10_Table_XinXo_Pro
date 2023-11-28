import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MyTableComponent } from './mytable/mytable.component';

const routes: Routes = [
    {
      path: 'Home',
      component: HomeComponent
    },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    {
      path: 'details/:id',
      component: DetailsComponent
    },
    {
      path: 'TableDemo',
      component: MyTableComponent
    }
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}