import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { DoctypeStateInterface } from './state';

const getters: GetterTree<DoctypeStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
