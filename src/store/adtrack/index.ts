import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { AdtrackStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const adtrackModule: Module<AdtrackStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default adtrackModule;
