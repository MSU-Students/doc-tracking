import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { AlldocStateInterface } from './state';

const getters: GetterTree<AlldocStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
