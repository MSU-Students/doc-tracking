import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ReceiveStateInterface } from './state';

const getters: GetterTree<ReceiveStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
