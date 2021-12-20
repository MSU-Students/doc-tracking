
export interface DoctypeInfo {
  idNumber: string,
  category:string,

  
}

export interface DoctypeStateInterface {
doctypes: DoctypeInfo[];
activeDoctype?: DoctypeInfo;
}

function state(): DoctypeStateInterface {
return {
  doctypes: [
    {
      idNumber: '000',
      category: 'Communication Letter',
     
    },
    {
      idNumber: '100',
      category: 'Leave',
     
    },
  ]
}
};

export default state;
