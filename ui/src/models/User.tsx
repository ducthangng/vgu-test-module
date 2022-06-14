interface User {
  id: number;
  entityCode: number;
  fullname: string;
  username: string;
  password: string;
  gender: 'male' | 'female' | 'others';
}

export type { User };
