import { User, Login } from './interface';

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

export class Employee implements Login {
  #id!: number; //private
  protected name!: string;
  address!: string;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmpCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  login(): User {
    return { name: 'Login', email: '', id: 123 };
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

export class Employee2 {
  #id!: number; //private
  protected name!: string;
  address!: Address;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmpCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }

  login(): User {
    return { name: 'Login', id: 111, email: 'Test Login', age: 123 };
  }
}

export class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}
