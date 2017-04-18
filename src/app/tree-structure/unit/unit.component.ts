import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sn-unit',
	templateUrl: './unit.component.html',
	styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {

	@Input() unit: any;
	activities: any;
	showChildren: boolean = false;
	id: string;

	ngOnInit() {
		this.activities = Array.prototype.slice.call(this.unit.children);
		this.id = this.unit.getAttribute('id');
	}

	toggleChildren() {
		this.showChildren = !this.showChildren;
	}

}
