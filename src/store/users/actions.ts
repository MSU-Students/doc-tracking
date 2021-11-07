import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ManageStateInterface, IManageInfo } from './state';

const actions: ActionTree<ManageStateInterface, StateInterface> = {
  newManage (context, newManage: IManageInfo) {
    //call server api
    context.commit('addManage', newManage);
  },
  editManage(context, updatedManage: IManageInfo) {
    //call server api
    context.commit('updateManage', updatedManage);
  },
  deleteManage(context, targetManage: IManageInfo) {
    context.commit('removeManage', targetManage);
  }
};

export default actions;
