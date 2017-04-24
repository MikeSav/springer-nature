import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { DataService } from './data-service/data.service';
import { WindowService } from './window-service/window.service';
import { AppComponent } from './app.component';
import { LevelComponent } from './tree-structure/level/level.component';
import { UnitComponent } from './tree-structure/unit/unit.component';
import { ActivityComponent } from './tree-structure/activity/activity.component';

@NgModule({
	declarations: [
		AppComponent,
		LevelComponent,
		UnitComponent,
		ActivityComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		DragulaModule
	],
	providers: [
		DataService,
		WindowService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
