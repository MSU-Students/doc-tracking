import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { OutgoingStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const outgoingModule: Module<OutgoingStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default outgoingModule;
