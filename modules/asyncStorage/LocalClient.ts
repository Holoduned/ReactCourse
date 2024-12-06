import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalClient {
  get = async (tableName:string) => {
    const data = await AsyncStorage.getItem(tableName);
    return data ? JSON.parse(data) : null;
  };
  set = async (tableName:string, data:any) => {
    return AsyncStorage.setItem(tableName, JSON.stringify(data));
  };
  removeAllItems = async () => {
    await AsyncStorage.clear();
  };
  removeItem = async (tableName:string) => {
    return AsyncStorage.removeItem(tableName);
  };
  getAllItems = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    return values.map(([key, value]) => ({ key, value }));
  };
}
