import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component, Input } from '@angular/core';
import {
	assertThat,
	is,
	truthy,
	hasSize,
	containsString
} from 'hamjest';

import {
	returnXMLdoc
} from '../../test/data-functions/mockXML';

@Component({
	selector: 'sn-unit',
	template: '<div> Unit {{ unit | json}}</div>'
})
class TestUnitComponent {
	@Input() unit: any;
}

import { LevelComponent } from './level.component';

describe('LevelComponent', () => {
	let cut: LevelComponent;
	let fixture: ComponentFixture<LevelComponent>;
	let element: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				LevelComponent,
				TestUnitComponent
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LevelComponent);
		cut = fixture.componentInstance;
		element = fixture.debugElement;
		cut.level = returnXMLdoc('level')[0];
		fixture.detectChanges();
	});

	it('should create an instance', () => {

		assertThat(cut, is(truthy()));
	});

	it('should contain the appropriate ID', () => {

		// ToDo: Issue with hasProperty? Check hamjest issues...
		assertThat(element.nativeElement.querySelector('.tooltip').innerHTML,
			containsString('l1'));

	});

	describe('as children is false by default', () => {

		it('should have no children', () => {

			assertThat(element.nativeElement.querySelectorAll('sn-unit'),
				hasSize(0));
		});
	});

	describe('when .tree__node__name is clicked', () => {

		beforeEach(() => {
			element.nativeElement.querySelector('.tree__node__name').click();
			fixture.detectChanges();
		});

		it('should toggle showChildren to true', () => {

			assertThat(cut.showChildren, is(true));
		});

		it('should render two sn-unit components', () => {

			assertThat(element.nativeElement.querySelectorAll('sn-unit'),
				hasSize(2));
		});
	});
});
