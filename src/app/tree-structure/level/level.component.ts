import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sn-level',
	templateUrl: './level.component.html',
	styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {

	@Input() level: any;
	units: any;
	showChildren: boolean = false;
	id: string;

	ngOnInit() {
		this.id = this.level.getAttribute('id');
		this.units = Array.prototype.slice.call(this.level.children);
	}

	toggleChildren() {
		this.showChildren = !this.showChildren;
	}
}
