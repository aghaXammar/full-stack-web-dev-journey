function groceryItem() {
    const quantityItems = [];

    this.addItem = function(item,quantity){
        quantityItems.push([item,quantity]);

    }

    this.displayItems =function(){
        
            for (const element of quantityItems) {
                console.log(`${element[0]} x ${element[1]}`);
                
            };
            
      

        


    }


    //private method
    const calculateTotalQuantity = function() {
        let total = 0;
        for (const element of quantityItems) {
            total += element[1];
            
        }
        return total;

    
    }


    this.getTotalQuantity = function(){
        let quantity = calculateTotalQuantity()
        console.log(`Total quantity is ${quantity}`);
    }

}

let groceryitem = new groceryItem();
groceryitem.displayItems()
groceryitem.addItem('mango',12)
groceryitem.addItem('apple',12)
groceryitem.displayItems()
groceryitem.getTotalQuantity()
