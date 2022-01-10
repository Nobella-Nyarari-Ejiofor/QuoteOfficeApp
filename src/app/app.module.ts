import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { QuoteFormComponent } from './component/quote-form/quote-form.component';
import { QuoteItemComponent } from './component/quote-item/quote-item.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { TimepipePipe } from './timepipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuoteFormComponent,
    QuoteItemComponent,
    FooterComponent,
    TimepipePipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    
    
  ],
  // not sure whether to place the class in providers
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
