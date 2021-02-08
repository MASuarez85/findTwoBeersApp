import request from 'supertest';
import { expect } from 'chai';
import createServer from '../Presentation/Server';

const app = createServer();

describe("server checks", function () {
    it("server is created without errors", function (done) {
        request(app).get('/').expect(200, done);
    });
});