import React from 'react';
import UserStore from '../modules/user/UserStore.ts';

class RootStore {
  userStore;
  constructor() {
    this.userStore = new UserStore();
  }
}
export const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
