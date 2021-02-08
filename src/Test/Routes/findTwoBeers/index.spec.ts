import request from 'supertest';
import { expect } from 'chai';
import createServer from '../../../Presentation/Server';

const app = createServer();

describe("findTwoBeers route", function () {
    it('/findTwoBeers responded OK', function (done) {
        request(app).get('/findTwoBeers').expect(200, done);
    });
});