import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { OfficeStateInterface } from './state';

const getters: GetterTree<OfficeStateInterface, StateInterface> = {
  getOffice(context) {
    return context.offices.map((t) => t.office);
  },
};

export default getters;
