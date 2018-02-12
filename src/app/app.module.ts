import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { FooterComponent } from './components/footer/footer.component';
import { DiscriminationComponent } from './components/discrimination/discrimination.component';
import { JusticeComponent } from './components/justice/justice.component';
import { ProcheComponent } from './components/proche/proche.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    FooterComponent,
    DiscriminationComponent,
    JusticeComponent,
    ProcheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
