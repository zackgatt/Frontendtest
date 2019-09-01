import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LobbyComponent } from './lobby/lobby.component';
import { UserfilterPipe } from './lobby/pipes/userfilter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImagePreloadDirective } from './lobby/image-preload.directive';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    UserfilterPipe,
    ImagePreloadDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
