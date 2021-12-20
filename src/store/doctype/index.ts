import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { DoctypeStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const doctypeModule: Module<DoctypeStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default doctypeModule;
