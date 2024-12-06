import LocalClient from './LocalClient.ts';

export default class LocalRepository {
  localClient;
  tableName;
  constructor(tableName:string) {
    this.localClient = new LocalClient();
    this.tableName = tableName;
  }
  getItem = () => {
    return this.localClient.get(this.tableName);
  };
  addLocalItem = (tableName:string, data:any) => {
    return this.localClient.set(tableName, data);
  };
  removeItem = () => {
    return this.localClient.removeItem(this.tableName);
  };
  removeAllItems = () => {
    return this.localClient.removeAllItems();
  };
  getLocalItems = async () => {
    return this.localClient.getAllItems();
  };
}
