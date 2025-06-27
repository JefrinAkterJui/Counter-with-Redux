import { produce } from "immer"

const employee ={
    name:"Jui",
    adress:{
        country:"Bangladesh",
        city:"Dinajpur"
    }
}
const employee2 = produce(employee,(draft)=>{
    draft.name = "Tuku",
    draft.adress.city = "Dhaka"
})

console.log(employee==employee2)
console.log(employee)
console.log(employee2)