export interface User {
  id: number;
  name: string;
  hobbies: Hobbie[];
}

export interface Hobbie {
  id: number;
  name: string;
  year: number;
  passionLevel: HobbiePassionLevel;
}

export enum HobbiePassionLevel {
  MEDIUM = 'Medium',
  HIGH = 'High',
  LOW = 'Low',
  VERY_LOW = 'Very-Low',
  VERY_HIGH = 'Very-High'
}
