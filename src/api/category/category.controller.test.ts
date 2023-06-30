import supertest from 'supertest';
import { faker } from '@faker-js/faker';
import app from '../../../app';



const request = supertest(app);

describe('categoty Controller', () => {
  describe('GET /api/category', () => {
    test('should return 200 OK', async () => {
      //Arrange
      //ACT
      const response = await request.get('/api/category');

      //Assert
      expect(response.status).toBe(200);
    });
  });

  describe('GET /api/users/:id', () => {
    test('should return 200 OK', async () => {
      // Arrange
      const categotyId = 'clj4ituma0000npvcbnuhndq2';

      // Act
      const response = await request.get(`/api/category/${categotyId}`);

      // Assert
      expect(response.status).toBe(200);
    });

    test('should return 404 Not Found', async () => {
      // Arrange
      const categoryId = 101;

      // Act
      const response = await request.get(`/api/users/${categoryId}`);

      // Assert
      expect(response.status).toBe(404);
    });
  });

  describe('DELETE /api/users/:id', () => {

    test('should return 404 Not Found', async () => {
      // Arrange
      const categoryId = 999;
      const expectedResponse = { message: 'Req not found' };

      // Act
      const response = await request.delete(`/api/users/${categoryId}`);

      // Assert
      expect(response.status).toBe(404);
      expect(response.body).toEqual(expectedResponse);
    });
  });



});
