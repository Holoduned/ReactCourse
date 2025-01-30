import Realm, {ObjectSchema} from 'realm';

export const UserTable = 'User';

export default class User extends Realm.Object<User> {
  id!: string;
  first_name!: string;
  last_name?: string;
  email?: string;

  static schema: ObjectSchema = {
    name: UserTable,
    properties: {
      id: 'string',
      first_name: 'string',
      last_name: {type:'string', optional: true},
      email: {type:'string', optional: true},
    },
  };
}
