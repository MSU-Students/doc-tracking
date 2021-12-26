import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { AlldocStateInterface, AlldocInfo } from './state';

const actions: ActionTree<AlldocStateInterface, StateInterface> = {
  newAlldoc (context, newAlldoc:  AlldocInfo) {
    //call server api
    context.commit('addAlldoc', newAlldoc);
  },
  editAlldoc(context, updatedAlldoc:  AlldocInfo) {
    //call server api
    context.commit('updateAlldoc', updatedAlldoc);
  },
  deleteAlldoc(context, targetAlldoc:  AlldocInfo) {
    context.commit('removeAlldoc', targetAlldoc);
  }
  
};

export default actions;
