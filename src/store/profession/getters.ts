import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import {ProfStateInterface } from './state';

const getters: GetterTree<ProfStateInterface, StateInterface> = {
  getProf(context) {
    return context.profs.map((t) => t.position);
  },
};

export default getters;
