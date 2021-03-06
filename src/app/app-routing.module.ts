import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './services/auth-guard.service';
import { UsersComponent } from './pages/users/users.component';
import { UploadComponent } from './pages/upload/upload.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { MessagesComponent } from './pages/messages/messages.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent, canActivate:[AuthGuard], canActivateChild: [AuthGuard], children: [
    {path: 'users', component: UsersComponent},
    {path: 'users/:id', component: UserDetailsComponent},
    {path: 'upload', component: UploadComponent},
    {path: 'sign-up', component: SignupComponent},
    {path: 'messages', component: MessagesComponent}
  ]},
  {path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
