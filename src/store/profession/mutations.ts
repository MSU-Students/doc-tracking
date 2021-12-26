import { MutationTree } from 'vuex';
import { ProfStateInterface, ProfInfo } from './state';

const mutation: MutationTree<ProfStateInterface> = {
  viewAllProf(state) {
    console.log(state.profs)
  },
  addProf (state, newProf:ProfInfo) {
    state.profs.push(newProf);
  },
  updateProf (state, updatedProf:ProfInfo) {
    const index = state.profs.findIndex((s) => {
      return s.idNumber == updatedProf.idNumber;
    })
    if (index >= 0) {
      state.profs.splice(index, 1, updatedProf);
    }
  },
  removeProf (state, targetProf:ProfInfo) {
    const index = state.profs.findIndex((s) => {
      return s.idNumber == targetProf.idNumber;
    })
    if (index >= 0) {
      state.profs.splice(index, 1);
    }
  }
};

export default mutation;
