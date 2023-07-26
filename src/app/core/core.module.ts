import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatMenuModule} from '@angular/material/menu'; 
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { MentionModule } from 'angular-mentions';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    FormsModule ,
    MatAutocompleteModule,
    MentionModule
  ],
  exports: [
    HeaderComponent, HomeComponent, LoginComponent, GalleryComponent
  ]
})
export class CoreModule { }
