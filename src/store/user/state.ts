
export interface UserInfo {
  FName: string;
  MName: string;
  LName: string;
  username: string;
  password: string;
  email: string;
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
        email: 'shy@gmail.com',
        role: 'Admin',
        status: 'Active',
      },
      {
        FName: 'Alfaraby',
        MName: 'P',
        LName: 'Panganting',
        username: 'Aly',
        password: 'Alyee',
        email: 'al@gmail.com',
        role: 'Employee',
        status: 'Active',
      },
  ]
}
};

export default state;
