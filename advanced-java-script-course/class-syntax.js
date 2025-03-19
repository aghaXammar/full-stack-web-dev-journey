class GroceryItem {
    #name;
    #quantity;
    constructor(name,quantity) {
        this.#name=name;
        this.#quantity=quantity;

        
    }

    display(){
        console.log(`${this.#name} x ${this.#quantity}`);
       
    }
}

class GroceryList{
    #items;
    constructor() {
        this.#items = [];

        
    }

    addItem(name,quantity){

        const item = new GroceryItem(name,quantity);
        this.#items.push(item);

    }


    showItems(){
        this.#items.forEach(element => {

            element.display()
            
        });
    }

}

const groccerylist = new GroceryList();

groccerylist.addItem("apple",24);
groccerylist.addItem("banana",20);
groccerylist.addItem("mango",20);
groccerylist.showItems()


