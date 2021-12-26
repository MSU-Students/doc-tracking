import { store } from 'quasar/wrappers';
import { InjectionKey } from 'vue';
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from 'vuex';

import office from './office';
import { OfficeStateInterface } from './office/state';

import doctype from './doctype';
import {DoctypeStateInterface } from './doctype/state';

import user from './user';
import {UserStateInterface } from './user/state';

import profession from './profession';
import {ProfStateInterface } from './profession/state';

import alldoc from './alldoc';
import {AlldocStateInterface } from './alldoc/state';

import document from './document';
import {DocStateInterface } from './document/state';

import hold from './hold';
import {HoldStateInterface } from './hold/state';

import incoming from './incoming';
import {IncomingStateInterface } from './incoming/state';

import receive from './receive';
import {ReceiveStateInterface } from './receive/state';

import adtrack from './adtrack';
import {AdtrackStateInterface } from './adtrack/state';

import emptrack from './emptrack';
import {EmptrackStateInterface } from './emptrack/state';

import back from './back';
import {BackStateInterface } from './back/state';

import outgoing from './outgoing';
import {OutgoingStateInterface } from './outgoing/state';



/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  office: OfficeStateInterface;
  doctype: DoctypeStateInterface;
  user: UserStateInterface;
  profession: ProfStateInterface;
  alldoc: AlldocStateInterface;
  document: DocStateInterface;
  hold: HoldStateInterface;
  incoming: IncomingStateInterface;
  receive: ReceiveStateInterface;
  adtrack: AdtrackStateInterface;
  emptrack: EmptrackStateInterface;
  back: BackStateInterface;
  outgoung: OutgoingStateInterface;
}


// provide typings for `this.$store`
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> =
  Symbol('vuex-key');

export default store(function (/* { ssrContext } */) {
  const Store = createStore<StateInterface>({
    modules: {
      // example
      office,
      doctype,
      user,
      profession,
      alldoc,
      document,
      hold,
      incoming,
      receive,
      adtrack,
      emptrack,
      back,
      outgoing,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useStore() {
  return vuexUseStore(storeKey);
}
