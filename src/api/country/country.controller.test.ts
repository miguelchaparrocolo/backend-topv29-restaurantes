import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import app from '../../../app';



const request = supertest(app);

describe('country Controller', () => {
  describe('GET /api/country', () => {
    test('should return 200 OK', async () => {
      //Arrange
      //ACT
      const response = await request.get('/api/country');

      //Assert
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/users/:id', () => {
    test('should return 200 OK', async () => {
      // Arrange
      const countryId = 'clj4ka9650000npqk4umtxbn1';

      // Act
      const response = await request.get(`/api/country/${countryId}`);

      // Assert
      expect(response.status).toBe(200);
    });

    test('should return 404 Not Found', async () => {
      // Arrange
      const countryId = 101;

      // Act
      const response = await request.get(`/api/users/${countryId}`);

      // Assert
      expect(response.status).toBe(404);
    });
  });

  describe('DELETE /api/users/:id', () => {

    test('should return 404 Not Found', async () => {
      // Arrange
      const countryId = 999;
      const expectedResponse = { message: 'req not found' };

      // Act
      const response = await request.delete(`/api/users/${countryId}`);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body).toEqual(expectedResponse);
    });
  });



});
