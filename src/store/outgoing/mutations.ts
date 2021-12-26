import { MutationTree } from 'vuex';
import { OutgoingStateInterface } from './state';

const mutation: MutationTree<OutgoingStateInterface> = {
  someMutation (/* state: ExampleStateInterface */) {
    // your code
  }
};

export default mutation;
