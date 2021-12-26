export interface BackStateInterface {
  prop: boolean;
}

function state(): BackStateInterface {
  return {
    prop: false,
  };
}

export default state;
