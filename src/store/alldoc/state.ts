export interface AlldocInfo {
  code: string;
  type: string;
  date: string;
  file: string;
}

export interface AlldocStateInterface {
  alldocs: AlldocInfo[];
  activeAlldoc?: AlldocInfo;
}

function state(): AlldocStateInterface {
  return {
    alldocs: [
      {
        file: '',
        code: '23244500',
        type: 'Communication Letter',
        date: '12/21/2021',
      },
      {
        file: '',
        code: '5476800',
        type: 'Leave',
        date: '11/11/2021',
      },
    ],
  };
}

export default state;
