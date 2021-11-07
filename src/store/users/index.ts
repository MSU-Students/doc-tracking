import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { ManageStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const manageModule: Module<ManageStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default manageModule;
