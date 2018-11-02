export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    preApproved: boolean;
    phone: string;
    email: string;
    active: boolean;

    constructor() {
        this.id=0;
        this.preApproved=false;
    }

}

