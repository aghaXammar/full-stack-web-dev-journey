
//value store

let a=10;
let b=a;

console.log(a)
console.log(b)

b=20;


//reference store
let literal_1 = {
    name:"ammar",
    rollNo:241564746
}

a=literal_1;

b=a;

literal_1.name='haider';
a.name='agha';

console.log(b)