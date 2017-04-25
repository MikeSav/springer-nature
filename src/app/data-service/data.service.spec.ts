import { async, TestBed, inject } from '@angular/core/testing';
import {
    ResponseOptions,
    BaseRequestOptions,
    Http,
    Response,
    XHRBackend
} from '@angular/http';
import {
    MockBackend,
    MockConnection,
} from '@angular/http/testing';

import {
    assertThat,
    is,
    truthy,
    hasProperties,
    contains
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

describe('DataService', () => {
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

        xit('should return XML data', async(() => {

            const assertionCall: SinonStub = stub();
            backend.connections.subscribe((connection: MockConnection) => {
                connection.mockRespond(new Response(returnXMLdoc(null)));
            });

            sut.getXML().subscribe((data) => {
                // toTo: put test here...
                assertionCall();
            });

            assertThat(assertionCall, wasCalled());
        }));

    });
});
