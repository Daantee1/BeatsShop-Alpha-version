import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BeatsPlayerComponent } from './components/beats-player/beats-player.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/RegisterPageComponent';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from './services/auth.service';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { MyMusicComponent } from './components/my-music/my-music.component';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { BeatsPlayerProfileComponent } from './components/beats-player-profile/beats-player-profile.component';


const appRoute : Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'AboutMe', component: AboutMeComponent},
  {path: 'LoginPage', component: LoginPageComponent},
  {path: 'RegisterPage', component: RegisterPageComponent},
  {path: 'ProfilePage', component: ProfilePageComponent},
  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    FooterComponent,
    NavbarComponent,
    BeatsPlayerComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    MyMusicComponent,
    AddMusicComponent,
    BeatsPlayerProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
