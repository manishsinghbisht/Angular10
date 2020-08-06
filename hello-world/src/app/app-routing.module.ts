import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: MyHomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'departments', component: DepartmentListComponent},
  { path: 'departments/:id', component: DepartmentDetailComponent,
    children:[
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
},
  { path: 'employees', component: EmployeeListComponent },
  { path: 'FormTemplateDriven', component: FormTemplateDrivenComponent },
  { path: 'FormReactive', component: FormReactiveComponent },
  //Wild card route should always be the last route in configuration
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MyHomeComponent, 
  TestComponent, 
  DepartmentListComponent,  
  DepartmentDetailComponent, 
  DepartmentOverviewComponent,
  DepartmentContactComponent,
  EmployeeListComponent, 
  FormTemplateDrivenComponent,
  FormReactiveComponent,
  PageNotFoundComponent];
