import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import app from '../../../app';



const request = supertest(app);

describe('City Controller', () => {
  describe('GET /api/city', () => {
    test('should return 200 OK', async () => {
      const response = await request.get('/api/city');

      //Assert
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/users/:id', () => {
    test('should return 200 OK', async () => {
      // Arrange
      const cityId = 'clj4ka9650000npqk4umtxbn1';

      // Act
      const response = await request.get(`/api/city/${cityId}`);

      // Assert
      expect(response.status).toBe(200);
    });

    test('should return 404 Not Found', async () => {
      // Arrange
      const CityId = 102;

      // Act
      const response = await request.get(`/api/users/${CityId}`);

      // Assert
      expect(response.status).toBe(404);
    });
  });

  describe('DELETE /api/users/:id', () => {

    test('should return 404 Not Found', async () => {
      // Arrange
      const City_tId = 999;
      const expectedResponse = { message: 'Req not found' };

      // Act
      const response = await request.delete(`/api/users/${City_tId}`);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body).toEqual(expectedResponse);
    });
  });



});
