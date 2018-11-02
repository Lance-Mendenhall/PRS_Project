import {Vendor } from  "../vendor/vendor.class";

export class Product {
    id: number;
    partNumber:string;
    name: string;
    price: number;
    Unit: string;
    photoPath: string;
    vendor: Vendor; 

    constructor() {
        this.id=0;
       }

}

 

