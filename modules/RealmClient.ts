import Realm from 'realm';
import User from './user/User.ts';

export const RealmClient = new Realm({schema: [User.schema]});
