
//previous factory function
// function grocceryListItem(fruits,items) {

//     return{
//         fruits,
//         items,

//         display(){
//             console.log(`${fruits} x ${items}`);
//         }
//     }
    
// }


// let newItem1 = grocceryListItem('oranges','8');
// newItem1.display()


// let newItem2 = grocceryListItem('banana','6');
// newItem2.display();


//constructor function

function groceryListItem(fruit,item) {
    this.fruit=fruit;
    this.item=item;

    this.display=function () {
        console.log(`${this.fruit} x ${this.item}`);


        
    };
    
}

const newItem1 = new groceryListItem('banana','8');
newItem1.display()
