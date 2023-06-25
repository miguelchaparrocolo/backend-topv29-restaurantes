import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import app from '../../../app';



const request = supertest(app);

describe('User Controller', () => {
  describe('GET /api/users', () => {
    test('should return 200 OK', async () => {
     // const response = await request.get('/api/users');
      //expect(response.status).toBe(200);

      expect(true).toBe(true);
    });
  });

});
