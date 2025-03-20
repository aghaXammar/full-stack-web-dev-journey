
//previous constructor functions
function groceryListItem(fruit,item) {
    this.fruit=fruit;
    this.item=item;

    this.display=function () {
        console.log(`${this.fruit} x ${this.item}`);


        
    };
    
}

const newItem1 = new groceryListItem('banana',8);
newItem1.display()

//Exercise : calculating the price

function calculatePrice(GroceryItem, price) {
    return GroceryItem.item*price
    
}

priceOfItem = calculatePrice(newItem1,60)
console.log(priceOfItem);
//Done
 

//functions are objects


// const  grocceryItem= new Function ('fruit',`

//     this.fruit = fruit;
//     this.display = function() {
//     console.log('helllo bava');
    
    
//     }`
// );

// const newItem2 = new grocceryItem('banana');
// newItem2.display()
