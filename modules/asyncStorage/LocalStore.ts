import { makeAutoObservable} from 'mobx';
import LocalService from './LocalService.ts';

export class LocalStore {
  localService;
  localData;

  isLoaded: boolean;

  constructor() {
    makeAutoObservable(this);
    this.localService = new LocalService();
    this.isLoaded = false;
  }

  getLocalItems = async () => {
    this.setLoadingState(true);
    this.localData = await this.localService.getLocalItems();
    setTimeout(() => this.setLoadingState(false), 1000);
  };

  removeAllItems = () => {
    return this.localService.removeAllItems();
  };
  addLocalData = (tableName:string, data:any) => {
    return this.localService.addLocalData(tableName, data);
  };
  private setLoadingState = (flag: boolean) => this.isLoaded = flag;
}
