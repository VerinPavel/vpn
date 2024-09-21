export type Typography = string;

export interface User {
  name: {
    last: string;
    first: string;
    title: string;
  };
  id: {
    name: string;
    value: number;
  };
}

export interface TogglerState {
  [key: number]: boolean;
}
