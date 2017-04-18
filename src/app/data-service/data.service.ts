import { Injectable } from '@angular/core';
import {
	Http,
	Response
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { WindowService } from '../window-service/window.service';

@Injectable()
export class DataService {

	private xmlHeaders: any = {
		Accept: 'application/xml',
		'Content-Type': 'application/xml'
	};

	constructor(private windowService: WindowService, private http: Http) {
	}

	getXML(): Observable<any> {

		return this.http.get('/assets/data/data.xml', {
			headers: this.xmlHeaders
		}).map((response) => this.parseXML(response.text()));

	}

	parseXML(rawText): any {

		const window = this.windowService.getWindow();

		if (typeof (<any>window).DOMParser !== 'undefined') {

			return (new (<any>window).DOMParser()).parseFromString(rawText, 'text/xml');

		} else if (typeof (<any>window).ActiveXObject !== 'undefined' && new (<any>window).ActiveXObject('Microsoft.XMLDOM')) {

			const xmlDoc = new (<any>window).ActiveXObject('Microsoft.XMLDOM');
			xmlDoc.async = 'false';
			xmlDoc.loadXML(rawText);
			return xmlDoc;

		} else {
			throw new Error('Yikes! There\'s no XML Parser!!!');
		}
	}
}
