countHome = document.getElementById("count-home")
countGuest = document.getElementById("count-guest")
let count = 0

function add1(){
    count += 1
    countHome.textContent = count
}

function add2(){
    count += 2
    countHome.textContent = count
}

function add3(){
    count += 3
    countHome.textContent = count
}

let counted = 0

function add1g(){
    counted += 1
    countGuest.textContent = counted
}

function add2g(){
    counted += 2
    countGuest.textContent = counted
}

function add3g(){
    counted += 3
    countGuest.textContent = counted
}