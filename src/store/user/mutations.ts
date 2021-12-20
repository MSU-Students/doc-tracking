import { MutationTree } from 'vuex';
import { UserStateInterface, UserInfo } from './state';

const mutation: MutationTree<UserStateInterface> = {
  addUser (state, newUser:UserInfo) {
    state.users.push(newUser);
  },
  updateUser (state, updatedUser:UserInfo) {
    const index = state.users.findIndex((s) => {
      return s.username == updatedUser.username;
    })
    if (index >= 0) {
      state.users.splice(index, 1, updatedUser);
    }
  },
  removeUser (state, targetUser:UserInfo) {
    const index = state.users.findIndex((s) => {
      return s.username == targetUser.username;
    })
    if (index >= 0) {
      state.users.splice(index, 1);
    }
  }
};

export default mutation;
