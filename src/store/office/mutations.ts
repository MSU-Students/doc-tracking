import { MutationTree } from 'vuex';
import { OfficeStateInterface, OfficeInfo } from './state';

const mutation: MutationTree<OfficeStateInterface> = {
  viewAllOffice(state) {
    console.log(state.offices)
  },
  addOffice (state, newOffice:OfficeInfo) {
    state.offices.push(newOffice);
  },
  updateOffice (state, updatedOffice:OfficeInfo) {
    const index = state.offices.findIndex((s) => {
      return s.idNumber == updatedOffice.idNumber;
    })
    if (index >= 0) {
      state.offices.splice(index, 1, updatedOffice);
    }
  },
  removeOffice (state, targetOffice:OfficeInfo) {
    const index = state.offices.findIndex((s) => {
      return s.idNumber == targetOffice.idNumber;
    })
    if (index >= 0) {
      state.offices.splice(index, 1);
    }
  }
};

export default mutation;
