import { makeAutoObservable } from "mobx";
import UserService from './UserService.ts';
import User, {UserTable} from './User.ts';
import uuid from 'react-native-uuid';
import {RealmClient} from '../RealmClient.ts';

class UserStore {
  users: User[] = [];
  userServive:UserService = new UserService();

  constructor() {
    makeAutoObservable(this);
    this.getUsers();
  }

  getUsers() {
    const users = UserService.readUsers();
    this.users = Array.from(users);
  }
  createUser(first_name: string, last_name: string, email: string) {
    UserService.createUser({
      id: uuid.v4().toString(),
      first_name: first_name,
      last_name: last_name,
      email: email,
    });
  }
  updateUser = (user : User, values: { first_name?: string; last_name?: string; email?: string }) =>{
    UserService.updateUser(user, values);
  };
  deleteUser = (user : User) =>{
    UserService.deleteUser(user);
  };
}
const userStore = new UserStore();
export default UserStore;
