/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from "./api";

export const authService = {
  async login(email: string, password: string) {
    try {
      const { data } = await api.post('/auth/login',
        { email, password },
      );

      return data.access_token;

    } catch (error) {
      throw new Error('Login failed');
    }
  },
};