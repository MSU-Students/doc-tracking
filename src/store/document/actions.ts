import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { DocStateInterface, DocInfo } from './state';

const actions: ActionTree<DocStateInterface, StateInterface> = {
  newDoc (context, newDoc:  DocInfo) {
    //call server api
    context.commit('addDoc', newDoc);
  },
  editDoc(context, updatedDoc:  DocInfo) {
    //call server api
    context.commit('updateDoc', updatedDoc);
  },
  deleteDoc(context, targetDoc:  DocInfo) {
    context.commit('removeDoc', targetDoc);
  }
  
};

export default actions;
