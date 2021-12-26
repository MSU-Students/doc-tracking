import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { EmptrackStateInterface } from './state';

const getters: GetterTree<EmptrackStateInterface, StateInterface> = {
  someGetter (/* context */) {
    // your code
  }
};

export default getters;
