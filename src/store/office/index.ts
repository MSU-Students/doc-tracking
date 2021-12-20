import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { OfficeStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const officeModule: Module<OfficeStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default officeModule;
