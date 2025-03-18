

// example

function groceryListItem(fruit,item) {
    this.fruit=fruit;
    this.item=item;

    this.display=function () {
        console.log(`${this.fruit} x ${this.item} x `);


        
    };
    
}

const newItem1 = new groceryListItem('banana','8');
newItem1.groceryAile='produce';

console.log(newItem1);