import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, ROUTES} from '@angular/router';
import { ArcGaugeModule } from '@progress/kendo-angular-gauges';
//import {FuzzySet} from 'fuzzyset.js';



import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { ChildComponent } from './child/child.component';
import { FdirDirective } from './fdir.directive';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ButtonDirDirective } from './button-dir.directive';
import { HttpModule } from '@angular/http';
import { GraphTestComponent } from './graph-test/graph-test.component';
import { ChartsModule } from 'ng2-charts';
import { KendoTestComponent } from './kendo-test/kendo-test.component';


 const appRoutes : Routes  = [
{path : "app", component : HomeComponent},
{path : "kendo", component : KendoTestComponent},
{path : "test", component : GraphTestComponent},
{path : "signin", component : SigninComponent},
{path : "",redirectTo:"signin", pathMatch : "full"},
{path : "**", component : SigninComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FdirDirective,
    SigninComponent,
    HomeComponent,
    ButtonDirDirective,
    GraphTestComponent,
    KendoTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpModule,
    MatInputModule,
    MatAutocompleteModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule  ,
    HttpClientModule ,
    // GaugesModule,
    ArcGaugeModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
