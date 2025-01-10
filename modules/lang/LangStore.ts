import { LangType } from './LangType';
import LangService from './LangService';
import { makeAutoObservable } from 'mobx';

class LangStore {
  lang: LangType | undefined;
  private langService: LangService;

  constructor() {
    this.langService = new LangService();
    makeAutoObservable(this);
  }

  changeLang = async (newLang: LangType) => {
    this.lang = newLang;
    await this.langService.changeLang(newLang);
  };

  getLang = async () => {
    if (!this.lang) {
      this.lang = await this.langService.getLang();
    }
    return this.lang;
  };
}

export default LangStore;
