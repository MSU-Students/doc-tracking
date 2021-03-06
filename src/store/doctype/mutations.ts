import { MutationTree } from 'vuex';
import { DoctypeStateInterface, DoctypeInfo } from './state';

const mutation: MutationTree<DoctypeStateInterface> = {
  viewAllDocType(state) {
    console.log(state.doctypes)
  },
  addDoctype(state, newDoctype: DoctypeInfo) {
    state.doctypes.push(newDoctype);
    console.log(state.doctypes);
  },
  updateDoctype(state, updatedDoctype: DoctypeInfo) {
    const index = state.doctypes.findIndex((s) => {
      return s.idNumber == updatedDoctype.idNumber;
    });
    if (index >= 0) {
      state.doctypes.splice(index, 1, updatedDoctype);
    }
  },
  removeDoctype(state, targetDoctype: DoctypeInfo) {
    const index = state.doctypes.findIndex((s) => {
      return s.idNumber == targetDoctype.idNumber;
    });
    if (index >= 0) {
      state.doctypes.splice(index, 1);
    }
  },
};

export default mutation;
