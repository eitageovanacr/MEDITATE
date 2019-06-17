import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {TiposComponent} from './tipos/tipos.component';
import {MeditacaoGuiadaComponent} from './meditacaoguiada/meditacaoguiada.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
  declarations: [AppComponent, TiposComponent, MeditacaoGuiadaComponent, CadastroComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
  AngularFireModule.initializeApp({
    apiKey: "AIzaSyAPr52GUM5QqD61Ph85atUYHF-sTqKwEn8",
    authDomain: "meditate-8dff5.firebaseapp.com",
    databaseURL: "https://meditate-8dff5.firebaseio.com",
    projectId: "meditate-8dff5",
    storageBucket: "",
    messagingSenderId: "925705752862",
    appId: "1:925705752862:web:b6a26ebbf7089d44"
  }), AngularFireDatabaseModule ],
  
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
