import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { DoctypeStateInterface, DoctypeInfo } from './state';

const actions: ActionTree<DoctypeStateInterface, StateInterface> = {
  newDoctype (context, newDoctype: DoctypeInfo) {
    //call server api
    context.commit('addDoctype', newDoctype);
  },
  editDoctype(context, updatedDoctype: DoctypeInfo) {
    //call server api
    context.commit('updateDoctype', updatedDoctype);
  },
  deleteDoctype(context, targetDoctype: DoctypeInfo) {
    context.commit('removeDoctype', targetDoctype);
  }
};

export default actions;
