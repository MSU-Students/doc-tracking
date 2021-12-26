export interface AdtrackStateInterface {
  prop: boolean;
}

function state(): AdtrackStateInterface {
  return {
    prop: false,
  };
}

export default state;
