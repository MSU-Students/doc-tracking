
export interface IManageInfo {
  idNumber:string
  Fname:string,
  Mname:string,
  Lname:string,
  username:string,
  password:string,
  email:string,
  
}

export interface ManageStateInterface {
manages: IManageInfo[];
activeManage?: IManageInfo;
}

function state(): ManageStateInterface {
return {
  manages: [
    {
      idNumber: '000',
      Fname: 'shidar',
      Mname: 'pangs',
      Lname: 'macs',
      username: 'shy',
      password: '',
      email: 'shy.com@yahoo',
    },
  ]
}
};

export default state;
