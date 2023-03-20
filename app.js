const arr = [1,2,3,4,5];

const filling = arr.fill(-1,2,4)
console.log(filling)

const name =['may',"bob",'ben',"joy"]
const missed  = name.fill('miss',1,3)
console.log(missed)


console.log(new Array(4).fill({})) //[{}, {}, {}, {}]