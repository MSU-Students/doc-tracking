import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ProfStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const profModule: Module<ProfStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default profModule;
