export interface OutgoingStateInterface {
  prop: boolean;
}

function state(): OutgoingStateInterface {
  return {
    prop: false,
  };
}

export default state;
