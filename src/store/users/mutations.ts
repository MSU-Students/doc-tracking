import { MutationTree } from 'vuex';
import { ManageStateInterface, IManageInfo} from './state';

const mutation: MutationTree<ManageStateInterface> = {
  addManage (state, newManage:IManageInfo) {
    state.manages.push(newManage);
  },
  updateManage (state, updatedManage:IManageInfo) {
    const index = state.manages.findIndex((m) => {
      return m.idNumber == updatedManage.idNumber;
    })
    if (index >= 0) {
      state.manages.splice(index, 1, updatedManage);
    }
  },
  removeManage (state, targetManage:IManageInfo) {
    const index = state.manages.findIndex((m) => {
      return m.idNumber == targetManage.idNumber;
    })
    if (index >= 0) {
      state.manages.splice(index, 1);
    }
  }
};

export default mutation;
