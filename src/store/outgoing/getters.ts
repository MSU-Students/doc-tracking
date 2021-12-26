import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { OutgoingStateInterface } from './state';

const getters: GetterTree<OutgoingStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
