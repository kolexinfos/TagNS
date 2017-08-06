export interface User {
    id: string;
    firstname: string;
    lastname: string;
}

export interface Group {
    id: string;
    title: string;
    members: Array<User>;
}

