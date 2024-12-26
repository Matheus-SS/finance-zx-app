import { create } from "zustand";

interface AuthState {
  token: string | null;
  saveToken: (token: string) => void;
  removeToken: () => void;
}

const useAuthStore = create<AuthState>()((set) => ({
  token: localStorage.getItem('token'),
  saveToken: (token) => {
    localStorage.setItem('token', token);
    set({ token: token });
  },
  removeToken: () => {
    localStorage.clear();
    set({ token: null })
  }
}));

export default useAuthStore;