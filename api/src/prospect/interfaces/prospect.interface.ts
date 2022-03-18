import { GenderEnum } from './gender.enum';

export interface Prospect {
  name: string;
  mail: string;
  gender: GenderEnum;
  birthdate: string;
  age: number;
}
