import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserStateInterface, UserInfo } from './state';

const actions: ActionTree<UserStateInterface, StateInterface> = {
  newUser (context, newUser:  UserInfo) {
    //call server api
    context.commit('addUser', newUser);
  },
  editUser(context, updatedUser:  UserInfo) {
    //call server api
    context.commit('updateUser', updatedUser);
  },
  deleteUser(context, targetUser:  UserInfo) {
    context.commit('removeUser', targetUser);
  }
};

export default actions;
