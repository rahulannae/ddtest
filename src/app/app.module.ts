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
//import {FuzzySet} from 'fuzzyset.js';import { AngularReactBrowserModule } from '@angular-react/core';
import {
  FabBreadcrumbModule,
  FabButtonModule,
  FabCalendarModule,
  FabCalloutModule,
  FabCheckboxModule,
  FabChoiceGroupModule,
  FabComboBoxModule,
  FabCommandBarModule,
  FabDatePickerModule,
  FabDetailsListModule,
  FabDialogModule,
  FabDividerModule,
  FabFabricModule,
  FabDropdownModule,
  FabGroupModule,
  FabGroupedListModule,
  FabHoverCardModule,
  FabIconModule,
  FabImageModule,
  FabLinkModule,
  FabMarqueeSelectionModule,
  FabMessageBarModule,
  FabModalModule,
  FabPanelModule,
  FabPersonaModule,
  FabPivotModule,
  FabSearchBoxModule,
  FabShimmerModule,
  FabSliderModule,
  FabSpinnerModule,
  FabToggleModule,
  FabTooltipModule,
  FabSpinButtonModule,
  FabTextFieldModule,
  FabPeoplePickerModule,
  FabTagPickerModule,
  FabProgressIndicatorModule
} from '@angular-react/fabric';



import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { ChildComponent } from './child/child.component';
import { FdirDirective } from './fdir.directive';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ButtonDirDirective } from './button-dir.directive';
import { GraphTestComponent } from './graph-test/graph-test.component';
import { HelperComponent } from './helper/helper.component';
import { ChartsModule } from 'ng2-charts';
import { KendoTestComponent } from './kendo-test/kendo-test.component';
import { HighchartsChartComponent } from 'highcharts-angular';


 const appRoutes : Routes  = [
{path : "app", component : HomeComponent},
{path : "kendo", component : KendoTestComponent},
{path : "test", component : GraphTestComponent},
{path : "signin", component : SigninComponent},
{path : "help", component : HelperComponent},
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
    KendoTestComponent,
    HighchartsChartComponent,
    HelperComponent
  ],
  imports: [
    BrowserModule,
    FabFabricModule,
    FabIconModule,
    FabButtonModule,
    FabDialogModule,
    FabImageModule,
    FabDropdownModule,
    FabPanelModule,
    FabCommandBarModule,
    FabBreadcrumbModule,
    FabCalloutModule,
    FabCheckboxModule,
    FabChoiceGroupModule,
    FabComboBoxModule,
    FabGroupedListModule,
    FabDatePickerModule,
    FabDividerModule,
    FabSpinnerModule,
    FabToggleModule,
    FabPersonaModule,
    FabPivotModule,
    FabLinkModule,
    FabMessageBarModule,
    FabHoverCardModule,
    FabModalModule,
    FabTooltipModule,
    FabShimmerModule,
    FabSliderModule,
    FabSearchBoxModule,
    FabCalendarModule,
    FabDetailsListModule,
    FabGroupModule,
    FabMarqueeSelectionModule,
    FabSpinButtonModule,
    FabTextFieldModule,
    FabPeoplePickerModule,
    FabTagPickerModule,
    FabProgressIndicatorModule,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
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
