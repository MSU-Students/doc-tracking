import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { EmptrackStateInterface } from './state';

const actions: ActionTree<EmptrackStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
