import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { OfficeStateInterface, OfficeInfo } from './state';

const actions: ActionTree<OfficeStateInterface, StateInterface> = {
  viewAllOffice(context) {
    context.commit('viewAllOffice');
  },
  newOffice (context, newOffice: OfficeInfo) {
    //call server api
    context.commit('addOffice', newOffice);
  },
  editOffice(context, updatedOffice: OfficeInfo) {
    //call server api
    context.commit('updateOffice', updatedOffice);
  },
  deleteOffice(context, targetOffice: OfficeInfo) {
    context.commit('removeOffice', targetOffice);
  }
};

export default actions;
