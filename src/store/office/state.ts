
export interface OfficeInfo {
  idNumber: string,
  office:string,

  
}

export interface OfficeStateInterface {
offices: OfficeInfo[];
activeOffice?: OfficeInfo;
}

function state(): OfficeStateInterface {
return {
  offices: [
    {
      idNumber: '000',
      office: 'CICS ',
     
    },
    {
      idNumber: '100',
      office: 'HRDO',
     
    },
  ]
}
};

export default state;
