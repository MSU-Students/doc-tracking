export interface EmptrackStateInterface {
  prop: boolean;
}

function state(): EmptrackStateInterface {
  return {
    prop: false,
  };
}

export default state;
