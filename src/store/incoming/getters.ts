import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { IncomingStateInterface } from './state';

const getters: GetterTree<IncomingStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
