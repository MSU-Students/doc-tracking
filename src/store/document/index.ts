import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { DocStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const docModule: Module<DocStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default docModule;
