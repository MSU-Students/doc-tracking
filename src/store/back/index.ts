import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { BackStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const ireturnModule: Module<BackStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default ireturnModule;
