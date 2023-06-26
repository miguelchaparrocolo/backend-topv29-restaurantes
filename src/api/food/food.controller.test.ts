import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import app from '../../../app';



const request = supertest(app);

describe('Food Controller', () => {
  describe('GET /api/food', () => {
    test('should return 200 OK', async () => {
      //Arrange
      //ACT
      const response = await request.get('/api/food');

      //Assert
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/users/:id', () => {
    test('should return 200 OK', async () => {
      // Arrange
      const foodId = 'clj4ka9650000npqk4umtxbn1';

      // Act
      const response = await request.get(`/api/food/${foodId}`);

      // Assert
      expect(response.status).toBe(200);
    });

    test('should return 404 Not Found', async () => {
      // Arrange
      const foodId = 101;

      // Act
      const response = await request.get(`/api/users/${foodId}`);

      // Assert
      expect(response.status).toBe(404);
    });
  });

  describe('DELETE /api/users/:id', () => {

    test('should return 404 Not Found', async () => {
      // Arrange
      const foodId = 999;
      const expectedResponse = { message: 'User not found' };

      // Act
      const response = await request.delete(`/api/users/${foodId}`);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body).toEqual(expectedResponse);
    });
  });



});
