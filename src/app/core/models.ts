export interface IPost {
    userId: number;
    id: number;
    body: string;
    title: string;
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

interface IGeo {
    lat: string;
    lng: string;
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}
  