import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { Routes ,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes= [
  {path:'', component: HomeComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    UsersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
