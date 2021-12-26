import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { BackStateInterface } from './state';

const getters: GetterTree<BackStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
