// previous literal
let literal = {
    name:"lucy",
    age:23,
    showInfo :function () {
        console.log(`${this.name} is ${this.age} years old`)
        
        
    },

    showMoreInfo(){
        console.log(`${this.name} is ${this.age} years old and a good man`)
        
        

    },

    showMoreInfoAgain: () =>{
        console.log(`${this.name} is ${this.age} years old and a good man with a great family`)
        
        

    }


    

}

// Factory functions
function createLiteral(name, age) {
    return{
        name,
        age,
        showMoreInfo(){
            console.log(`${this.name} is ${this.age} years old and a good man`)
            
            
    
        },
    
        showMoreInfoAgain: () =>{
            console.log(`${this.name} is ${this.age} years old and a good man with a great family`)
            
            
    
        }

    }

    
}

newLiteral_1 = createLiteral('john',22);
newLiteral_1.showMoreInfo();





newLiteral_2 = createLiteral('bava',23);
newLiteral_2.showMoreInfo();



// creating a new factory function that returns a new groccery list item

function grocceryListItem(fruits,items) {

    return{
        fruits,
        items,

        display(){
            console.log(`${fruits} x ${items}`);
        }
    }
    
}


let newItem1 = grocceryListItem('oranges','8');
newItem1.display()


let newItem2 = grocceryListItem('banana','6');
newItem2.display();

