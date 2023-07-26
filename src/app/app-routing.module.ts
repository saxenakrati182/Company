import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { GalleryComponent } from './core/gallery/gallery.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard] },
  { path: '**', redirectTo: "home" },
  { path: '', redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
