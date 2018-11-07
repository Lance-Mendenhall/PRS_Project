
import { User } from "../user/user.class";

export class Purchaserequest {
    id: number;
    user: User;
    deliverymode: string;
    total: number;
    reasonforrejection: string;
    status: string;
    datesubmitted: string;
    dateneeded: string;
   // userid?


constructor() {
    this.id=0;
    this.total=0;
    this.deliverymode="Pickup";
    this.datesubmitted=(new Date()).toLocaleDateString();
    this.status="New";
    this.reasonforrejection = " ";
    this.datesubmitted=(new Date()).toLocaleDateString();
    }
}





