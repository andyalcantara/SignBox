export class Item {
    assortment: number;
    itemNumber: number;
    description: string;
    quantity: number;
    date?: string;
    _id?: string;
    isShown: boolean = false;
    onNewItem: boolean = false
    
    
    constructor( assortment: number,
                 itemNumber: number,
                 description: string,
                 quantity: number,
                 date?: string,
                 _id?: string,
                 isShown: boolean = false,
                 onNewItem: boolean = false) {

                    this.assortment = assortment;
                    this.itemNumber = itemNumber;
                    this.description = description;
                    this.quantity = quantity;
                    this.date = date;
                    this._id = _id;
                    this.isShown = isShown;
                    this.onNewItem = onNewItem;
                }
}