import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { DoctypeStateInterface } from './state';

const getters: GetterTree<DoctypeStateInterface, StateInterface> = {
  getDocsType(context) {
    return context.doctypes.map((t) => t.category);
  },
};

export default getters;
