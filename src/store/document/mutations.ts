import { MutationTree } from 'vuex';
import { DocStateInterface, DocInfo } from './state';

const mutation: MutationTree<DocStateInterface> = {
  addDoc (state, newDoc:DocInfo) {
    state.docs.push(newDoc);
  },
  updateDoc (state, updatedDoc:DocInfo) {
    const index = state.docs.findIndex((s) => {
      return s.date == updatedDoc.date;
    })
    if (index >= 0) {
      state.docs.splice(index, 1, updatedDoc);
    }
  },
  removeDoc (state, targetDoc:DocInfo) {
    const index = state.docs.findIndex((s) => {
      return s.date == targetDoc.date;
    })
    if (index >= 0) {
      state.docs.splice(index, 1);
    }
  }
};

export default mutation;
