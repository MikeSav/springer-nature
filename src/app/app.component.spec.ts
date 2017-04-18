import { async, inject, TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement, Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {
	assertThat,
	is,
	truthy,
	hasSize,
} from 'hamjest';

import {
	MockServiceProvider,
	MockService,
} from './test/mock.service';
import {
	wasCalled
} from './test/matcher/wasCalled';
import {
	returnXMLdoc
} from './test/data-functions/mockXML';

@Component({
	selector: 'sn-level',
	template: '<div> LEVEL {{ any | json}}</div>'
})
class TestLevelComponent {
	@Input() level: any;
}

import { DataService } from './data-service/data.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

	let cut: AppComponent;
	let element: DebugElement;
	let fixture: ComponentFixture<AppComponent>;
	let dataServiceMock: MockService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				TestLevelComponent
			],
			providers: [
				{provide: DataService, useValue: MockServiceProvider.with('getXML')}
			]
		}).compileComponents();
	}));

	beforeEach(inject([
		DataService,
	], (dataService: MockService) => {
		dataServiceMock = dataService;
		fixture = TestBed.createComponent(AppComponent);
		cut = fixture.componentInstance;
		element = fixture.debugElement;
		dataServiceMock['getXML'].returns(Observable.of(returnXMLdoc(null)));
		fixture.detectChanges();
	}));

	it('should create an instance', () => {

		assertThat(cut, is(truthy()));
	});

	describe('when clicking the button', () => {

		beforeEach(() => {
			element.nativeElement.querySelector('button').click();
			fixture.detectChanges();
		});

		it('should call the DataService getXML method', () => {

			assertThat(dataServiceMock['getXML'], wasCalled());
		});
	});

	describe('when XML is loaded', () => {

		beforeEach(() => {
			cut.levels = returnXMLdoc('level');
			fixture.detectChanges();
		});

		it('two sn-level components should be rendered', () => {

			assertThat(element.nativeElement.querySelectorAll('sn-level'),
				hasSize(2));
		});
	});
});
