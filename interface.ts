export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

export interface Employees extends User {
  salary: number;
}

export interface Login {
  login(): User;
}
