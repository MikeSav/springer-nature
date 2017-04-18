import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'sn-activity',
	templateUrl: './activity.component.html',
	styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

	@Input() activity: any;
	id: string;

	ngOnInit() {
		this.id = this.activity.getAttribute('id');
	}
}