import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'student-system-react-form',component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
