export enum Sex {
  Male = 1,
  Female = 2,
}
export declare interface ICharacter {
  name: string;
  nameKanji: string;
  avatar: string;
  type?: 'main' | 'supporting';
  sex?: Sex;
}
