import React from 'react';
import {storesContext} from './RootStore.ru.ts';

export const useRootStore = () => React.useContext(storesContext);
