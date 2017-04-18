import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component, Input } from '@angular/core';
import {
	assertThat,
	is,
	truthy,
	hasSize,
	hasProperty,
	containsString
} from 'hamjest';

import {
	returnXMLdoc
} from '../../test/data-functions/mockXML';

@Component({
	selector: 'sn-activity',
	template: '<div> Activity {{ activity | json}} {{dragula | json}} {{dragulaModel | json}}</div>'
})
class TestActivityComponent {
	@Input() activity: any;
	@Input() dragula: any;
	@Input() dragulaModel: any;
}

import { UnitComponent } from './unit.component';

describe('UnitComponent', () => {
	let cut: UnitComponent;
	let fixture: ComponentFixture<UnitComponent>;
	let element: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				UnitComponent,
				TestActivityComponent
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UnitComponent);
		cut = fixture.componentInstance;
		element = fixture.debugElement;
		cut.unit = returnXMLdoc('unit')[0];
		fixture.detectChanges();
	});

	it('should create an instance', () => {

		assertThat(cut, is(truthy()));
	});

	describe('as children is false by default', () => {

		it('should have no children', () => {

			assertThat(element.nativeElement.querySelectorAll('sn-activity'),
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

			assertThat(element.nativeElement.querySelectorAll('sn-activity'),
				hasSize(2));
		});
	});

});
