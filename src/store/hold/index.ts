import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { HoldStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const holdModule: Module<HoldStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default holdModule;
