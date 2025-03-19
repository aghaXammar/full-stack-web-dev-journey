
class GroceryItem {
    constructor(name,quantity) {
        this.name=name;
        this.quantity=quantity;
    }

    display(){
        console.log(`${this.name} x ${this.quantity}`);
    }

    static CompareQuantity(item1,item2){
        if (item1.quantity<item2.quantity) {
            console.log(`${item1.name} is less than ${item2.name}`);
            
        } else if (item1.quantity>item2.quantity){
            console.log(`${item1.name} is greater than ${item2.name}`);
            
        } else if (item1.quantity===item2.quantity){
            console.log(`${item1.name} is equal to ${item2.name}`);
            
        }

    }
}


let mango= new GroceryItem('mango',4)
let orange= new GroceryItem('orange',34)

mango.display();

GroceryItem.CompareQuantity(mango,orange)