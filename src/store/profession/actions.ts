import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ProfStateInterface, ProfInfo } from './state';

const actions: ActionTree<ProfStateInterface, StateInterface> = {
  viewAllProf(context) {
    context.commit('viewAllProf');
  },
  newProf (context, newProf: ProfInfo) {
    //call server api
    context.commit('addProf', newProf);
  },
  editProf(context, updatedProf: ProfInfo) {
    //call server api
    context.commit('updateProf', updatedProf);
  },
  deleteProfe(context, targetProf: ProfInfo) {
    context.commit('removeProf', targetProf);
  }
};

export default actions;
