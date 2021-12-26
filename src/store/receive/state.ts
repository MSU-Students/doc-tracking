export interface ReceiveStateInterface {
  prop: boolean;
}

function state(): ReceiveStateInterface {
  return {
    prop: false,
  };
}

export default state;
