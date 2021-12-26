
export interface ProfInfo {
  idNumber: string,
  position:string,

  
}

export interface ProfStateInterface {
profs: ProfInfo[];
activeProf?: ProfInfo;
}

function state(): ProfStateInterface {
return {
  profs: [
    {
      idNumber: '000',
      position: 'Vice Chancellor',
     
    },
    {
      idNumber: '100',
      position: 'Instructor 1',
     
    },
  ]
}
};

export default state;
