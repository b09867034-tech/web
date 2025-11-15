// let a = 5
// let b = 10


// let sum = a + b
// let inc = sum * 20 / 2

// console.log(sum)
// console.log(inc)

let name = "orazbek"
let age = 19
let isHungry = true

let btn = document.querySelector(".ctabtn")
let clickDisplay = document.querySelector(".clicks")
let clicks = 0





function checkAge(){
    if(age >= 18){
        console.log("Добро пожаловать")
    }
    else{
        console.log("Вход запрещен")
    }
}


btn.addEventListener("click", ()=> {
    clickDisplay.innerHTML = clicks += 1
})
