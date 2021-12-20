import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { OfficeStateInterface } from './state';

const getters: GetterTree<OfficeStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
