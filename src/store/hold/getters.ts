import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { HoldStateInterface } from './state';

const getters: GetterTree<HoldStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
