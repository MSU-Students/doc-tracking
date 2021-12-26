export interface IncomingStateInterface {
  prop: boolean;
}

function state(): IncomingStateInterface {
  return {
    prop: false,
  };
}

export default state;
