export interface User {
  id: number;
  name: string;
  hobbies: Hobby[];
}

export interface Hobby {
  id: number;
  name: string;
  year: number;
  passionLevel: HobbyPassionLevel;
}

export enum HobbyPassionLevel {
  MEDIUM = 'Medium',
  HIGH = 'High',
  LOW = 'Low',
  VERY_LOW = 'Very-Low',
  VERY_HIGH = 'Very-High'
}
