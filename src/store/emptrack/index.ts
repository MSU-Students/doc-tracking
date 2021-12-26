import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { EmptrackStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const emptrackModule: Module<EmptrackStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default emptrackModule;
