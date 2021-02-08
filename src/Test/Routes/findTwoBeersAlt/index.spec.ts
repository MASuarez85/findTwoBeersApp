import request from 'supertest';
import { expect } from 'chai';
import createServer from '../../../Presentation/Server';

const app = createServer();

describe("findTwoBeersAlt route", function () {
    it('/findTwoBeersAlt responded OK', function (done) {
        request(app).get('/findTwoBeersAlt').expect(200, done);
    });
});