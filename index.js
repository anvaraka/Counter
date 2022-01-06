const span = document.querySelector("#value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const allBtn = document.querySelectorAll(".btn");


let count = 0;

/* 33333 ----------------------------------- This is using forEach() -----------------------------------------------------------  */

allBtn.forEach(function(el){
    el.addEventListener("click", eventFun)
})

function eventFun(event){
    console.log(event.target)
    const classes = event.target.classList;
    console.log(classes)

    if (classes.contains("decrease")) {
        count--
    } else if (classes.contains("increase")) {
        count++
    } else {
        count = 0
    }
    setValueAndColor()
}


function setValueAndColor() {
    if (count < 0) {
        span.style.color = "red"
    } else if (count > 0) {
        span.style.color = "green"
    } else if (count === 0) {
        span.style.color = "black"
    }
    span.innerHTML = count
}


/* 222----------------------------- This is using for loop in which only one function is passed and one event is used --------------

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener("click", eventFun)
}


function eventFun(event){
    console.log(event.target)
    const classes = event.target.classList;
    console.log(classes)

    if (classes.contains("decrease")) {
        count--
    } else if (classes.contains("increase")) {
        count++
    } else {
        count = 0
    }

    setValueAndColor()
}


function setValueAndColor() {
    if (count < 0) {
        span.style.color = "red"
    } else if (count > 0) {
        span.style.color = "green"
    } else if (count === 0) {
        span.style.color = "black"
    }
    span.innerHTML = count

} */






/* 
 1111 -------------------------- This is using one function and passing it to all event listeners ---------------------------------


decrease.addEventListener("click", function () {
    count--
    // if (count < 0) {
    //     span.style.color = "red"
    // } else if (count === 0) {
    //     span.style.color = "black"
    // }
    // span.innerHTML = count 
    setValueAndColor()
    
})

reset.addEventListener("click", function () {
    count = 0;
    // span.style.color = "black";
    // span.innerHTML = count;
    setValueAndColor()
})

increase.addEventListener("click", function () {
    count++
    // if (count > 0) {
    //     span.style.color = "green"
    // } else if (count === 0) {
    //     span.style.color = "black"
    // }
    // span.innerHTML = count
    setValueAndColor()
})

function setValueAndColor() {
    if (count < 0) {
        span.style.color = "red"
    } else if (count > 0) {
        span.style.color = "green"
    } else if (count === 0) {
        span.style.color = "black"
    }
    span.innerHTML = count

}

 */