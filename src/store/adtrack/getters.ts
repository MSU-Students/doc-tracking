import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AdtrackStateInterface } from './state';

const getters: GetterTree<AdtrackStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
