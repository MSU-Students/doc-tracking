import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ManageStateInterface } from './state';

const getters: GetterTree<ManageStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
