export interface HoldStateInterface {
  prop: boolean;
}

function state(): HoldStateInterface {
  return {
    prop: false,
  };
}

export default state;
