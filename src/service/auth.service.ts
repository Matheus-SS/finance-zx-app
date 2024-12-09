/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "./api";

export const authService = {
  async login(email: string, password: string) {
    try {
      const response = await api.post('/auth/login', 
        { email, password }, 
      );
      return response.data;

    } catch (error) {
      throw new Error('Login failed');
    }
  },

  async checkAuth() {
    try {
      await api.get('/auth/status');
      return true
    } catch {
      return false;
    }
  }
};