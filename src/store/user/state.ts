
export interface UserInfo {
  FName: string;
  MName: string;
  LName: string;
  username: string;
  password: string;
  office: string;
  position: string;
  role: string;
  status: 'Active' | 'Inactive';
}

export interface UserStateInterface {
users: UserInfo[];
activeUser?: UserInfo;
}

function state(): UserStateInterface {
return {
  users: [
    {
        FName: 'Inshidar',
        MName: 'P',
        LName: 'Panganting',
        username: 'Shy',
        password: 'shyee',
        office: 'CICS',
        position: 'Chairperson',
        role: 'Admin',
        status: 'Active',
      },
      {
        FName: 'Alfaraby',
        MName: 'P',
        LName: 'Panganting',
        username: 'Aly',
        password: 'Alyee',
        office: 'HRDO',
        position: 'Secretary',
        role: 'Employee',
        status: 'Active',
      },
  ]
}
};

export default state;
