import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CenseredSnapshotsComponent } from './home/censered-snapshots/censered-snapshots.component';
import { UncenseredSnapshotsComponent } from './home/uncensered-snapshots/uncensered-snapshots.component';
import { WesternSnapshotsComponent } from './home/western-snapshots/western-snapshots.component';
import { HeaderComponent } from './header/header.component';
import { WesternComponent } from './western/western.component';
import { CensoredComponent } from './censored/censored.component';
import { UncensoredComponent } from './uncensored/uncensored.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CenseredSnapshotsComponent,
    UncenseredSnapshotsComponent,
    WesternSnapshotsComponent,
    HeaderComponent,
    WesternComponent,
    CensoredComponent,
    UncensoredComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
