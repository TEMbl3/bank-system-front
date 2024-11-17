import { defineStore } from "pinia";

//Типы для user
import type { IUser } from "../interfaces";

interface IUserState {
  user: IUser | null;
}

export const useUserStore = defineStore<'user', IUserState>({
  id: 'user',
  state: (): IUserState => ({
    user: null
  }),
  getters: {
    getUserName (state): string {
      return state.user ? state.user.fullName : '';
    }
  },
  actions: {
    setUser(user: IUser) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    }
  }
})


