import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { ScoreManagerComponent } from './components/score-manager/score-manager.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		EmptyPageComponent,
		ScoreManagerComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		ButtonModule,
		InputTextModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
