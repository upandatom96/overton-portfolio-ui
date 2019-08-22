import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SimpleComponentsModule } from "./simple-components/simple-components.module";
import { HomeComponent } from "./components/home/home.component";
import { InfoComponent } from "./components/info/info.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './components/home/header/header.component';
import { ShowsComponent } from './components/home/shows/shows.component';
import { GalleryComponent } from './components/home/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ShowsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    SimpleComponentsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
