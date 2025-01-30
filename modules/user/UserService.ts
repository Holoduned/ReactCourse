import {RealmClient} from '../RealmClient.ts';
import User, {UserTable} from './User.ts';
import {assert} from 'realm/dist/assert';

export default class UserService {
  static createUser = (data: Object) => {
    RealmClient.write(() => {
      RealmClient.create(UserTable, data);
    });
  };
  static readUsers = () => {
    return RealmClient.objects(UserTable) as unknown as User[];
  };
  static updateUser = (user: User, values: { first_name?: string; last_name?: string; email?: string }) => {
    RealmClient.write(() => {
      Object.assign(user, values); // Обновляем переданные поля
    });
  };
  static deleteUser = (user: User) => {
    RealmClient.write(() => {
      RealmClient.delete(user);
    });
  };
}
