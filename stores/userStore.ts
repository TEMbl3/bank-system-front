import { defineStore } from 'pinia';

// Тип для пользователя
import type { IUser } from '../interfaces';

interface IUserState {
  user: IUser | null;
}

export const useUserStore = defineStore('user', {
  state: (): IUserState => ({
    user: null,
  }),
  getters: {
    getUserName(state): string {
      return state.user ? state.user.fullName : '';
    },
    getUser(state) {
      return state.user ? state.user : '';
    },
  },
  actions: {
    setUser(data: IUser) {
      this.user = data;
    },
    clearUser() {
      this.user = null;
    },
  },
});