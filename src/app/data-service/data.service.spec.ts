import { async, TestBed, inject } from '@angular/core/testing';
import {
    BaseRequestOptions,
    Http,
    Response,
    ResponseOptions,
    XHRBackend,
    Headers
} from '@angular/http';
import {
    MockBackend,
    MockConnection,
} from '@angular/http/testing';

import {
    assertThat,
    is,
    truthy,
    contains,
} from 'hamjest';

import {
    SinonStub,
    stub
} from 'sinon'

import {
    wasCalled
} from '../test/matcher/wasCalled';

import {
    returnXMLdoc
} from '../test/data-functions/mockXML';

import { WindowService } from '../window-service/window.service';

import { DataService } from './data.service';

fdescribe('DataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                DataService,
                MockBackend,
                BaseRequestOptions,
                WindowService, // ToDo: Mock this,
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory: (backendInstance: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backendInstance, defaultOptions);
                    }
                }
            ]
        });
    });

    let sut: DataService;
    let backend: MockBackend;

    // ToDo: Determine why returnXMLdoc is not parsing...
    const options = new ResponseOptions({
        body: `<?xml version="1.0" encoding="UTF-8"?>
		<package>
		  <level id="l1">
			<unit id="u1">
			  <activity id="a1"></activity>
			  <activity id="a2"></activity>
			</unit>
			<unit id="u2">
			  <activity id="a3"></activity>
			</unit>
		  </level>
		  <level id="l2">
			<unit id="u3">
			  <activity id="a4"></activity>
			</unit>
		  </level>
		</package>`,
        status: 200,
        headers: new Headers({
            'content-type': 'application/xml'
        })
    });

    beforeEach(inject([
        DataService, MockBackend
    ], (dataService: DataService, mockBackend: MockBackend) => {
        sut = dataService;
        backend = mockBackend;
    }));

    it('should create an instance', () => {

        assertThat(sut, is(truthy()));
    });

    describe('getXML()', () => {

        it('should call backend with headers', async(() => {
            const assertionCall: SinonStub = stub();
            backend.connections.subscribe((connection: MockConnection) => {

                assertThat(connection.request.headers.toJSON().Accept, contains('application/xml')
                );
                assertionCall();
            });
            sut.getXML();

            assertThat(assertionCall, wasCalled());
        }));

        it('should return XML data', async(() => {

            const assertionCall: SinonStub = stub();
            backend.connections.subscribe((connection: MockConnection) => {
                connection.mockRespond(new Response(options));
            });

            sut.getXML().subscribe((response) => {
                // ToDo: put test here...
                assertThat(response, is(truthy()));
                assertionCall();
            });

            assertThat(assertionCall, wasCalled());
        }));

    });
});
