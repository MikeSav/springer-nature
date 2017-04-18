import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {
	assertThat,
	is,
	truthy,
} from 'hamjest';

import {
	returnXMLdoc
} from '../../test/data-functions/mockXML';

import { ActivityComponent } from './activity.component';

describe('ActivityComponent', () => {
	let cut: ActivityComponent;
	let fixture: ComponentFixture<ActivityComponent>;
	let element: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ActivityComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ActivityComponent);
		cut = fixture.componentInstance;
		element = fixture.debugElement;
		cut.activity = returnXMLdoc('activity')[0];
		fixture.detectChanges();
	});

	it('should create an instance', () => {

		assertThat(cut, is(truthy()));
	});
});
