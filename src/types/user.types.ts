// Geo type
export type Geo = {
  lat: string;
  lng: string;
};

// Address type
export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

// Company type
export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

// User type
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};
