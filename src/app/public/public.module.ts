import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { PublicRoutingModule } from './public-routing.module';
import { PubLayoutComponent } from './pub-layout/pub-layout.component';
import { PubHeaderComponent } from './pub-header/pub-header.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    CocktailComponent,
    PubLayoutComponent,
    PubHeaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
