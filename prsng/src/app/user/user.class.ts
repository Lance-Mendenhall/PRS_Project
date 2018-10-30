export class User {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    password: string;
    phoneNumber : string;
    email: string;
    reviewer: boolean;
    admin: boolean;



    constructor() {
        this.id=0;
        this.password="password";
        this.reviewer=false;
        this.admin=false;
    }
}