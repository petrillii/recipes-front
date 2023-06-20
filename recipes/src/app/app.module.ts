import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeModule } from './modules/home/home.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateRecipeComponent } from './components/create-recipe/create-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryModule } from './modules/category/category.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    CreateRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    HomeModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
