import LocalRepository from './LocalRepository.ts';

export default class LocalService {

  localRepository: LocalRepository;
  constructor() {
    this.localRepository = new LocalRepository('Current-weather');
  }
  getLocalItems = async () => {
    return await this.localRepository.getLocalItems();
  };
  removeAllItems = () => {
    return this.localRepository.removeAllItems();
  };
  addLocalData = (tableName:string, data:any) => {
    return this.localRepository.addLocalItem(tableName, data);
  };
}
