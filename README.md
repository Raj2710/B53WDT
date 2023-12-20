//Object Destructure
let data = {
    firstName:"Mangala",
    lastName:"Parameshwaran"
}

console.log(data.firstName,data.lastName)

const {firstName,lastName} = data

console.log(firstName,lastName)

//Array Destructure
let [a,b,c] = [10,20,30,40,50,60,70,80]
console.log(a,b,c)