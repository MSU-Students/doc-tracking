import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { DocStateInterface } from './state';

const getters: GetterTree<DocStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
