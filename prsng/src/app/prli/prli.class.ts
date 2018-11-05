import { Product } from  "../product/product.class";
import { Purchaserequest } from "../purchaserequest/purchaserequest.class";

export class Prli {
    id: number;
    purchaserequest: Purchaserequest;
    product: Product;
    quantity: number;

    constructor() {
        this.id=0;
       }

}




 