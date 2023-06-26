import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import app from '../../../app';



const request = supertest(app);

describe('Restaurants Controller', () => {
  describe('GET /api/restaurant', () => {
    test('should return 200 OK', async () => {
      //Arrange
      //ACT
      const response = await request.get('/api/restaurant');

      //Assert
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/restaurant/:id', () => {
    test('should return 200 OK', async () => {
      // Arrange
      const restaurantId = 'clj4jsg1z0000npdorv4ms4rb';

      // Act
      const response = await request.get(`/api/restaurant/${restaurantId}`);

      // Assert
      expect(response.status).toBe(200);
    });

    test('should return 404 Not Found', async () => {
      // Arrange
      const restaurantId = 101;

      // Act
      const response = await request.get(`/api/restaurant/${restaurantId}`);

      // Assert
      expect(response.status).toBe(404);
    });
  });

 /* describe('DELETE /api/restaurant/:id', () => {

    test('should return 404 Not Found', async () => {
      // Arrange
      const restaurantId = 999;
      const expectedResponse = { message: 'User not found' };

      // Act
      const response = await request.delete(`/api/restaurant/${restaurantId}`);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body).toEqual(expectedResponse);
    });
  });*/



});
