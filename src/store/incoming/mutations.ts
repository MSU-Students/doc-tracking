import { MutationTree } from 'vuex';
import { IncomingStateInterface } from './state';

const mutation: MutationTree<IncomingStateInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  }
};

export default mutation;
