import { MutationTree } from 'vuex';
import { AlldocStateInterface, AlldocInfo } from './state';

const mutation: MutationTree<AlldocStateInterface> = {
  addAlldoc (state, newAlldoc:AlldocInfo) {
    state.alldocs.push(newAlldoc);
  },
  updateAlldoc (state, updatedAlldoc:AlldocInfo) {
    const index = state.alldocs.findIndex((s) => {
      return s.date == updatedAlldoc.date;
    })
    if (index >= 0) {
      state.alldocs.splice(index, 1, updatedAlldoc);
    }
  },
  removeAlldoc (state, targetAlldoc:AlldocInfo) {
    const index = state.alldocs.findIndex((s) => {
      return s.date == targetAlldoc.date;
    })
    if (index >= 0) {
      state.alldocs.splice(index, 1);
    }
  }
};

export default mutation;
