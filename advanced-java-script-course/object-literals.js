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


literal.showMoreInfoAgain()