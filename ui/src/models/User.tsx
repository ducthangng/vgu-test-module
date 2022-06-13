interface User {
  id: number;
  entityCode: number;
  fullname: string;
  username: string;
  password: string;
  mail: string;
  phone: string;
  address: string;
  dob: string;
  gender: 'male' | 'female' | 'others';
  qualification: string;
}

export type { User };
