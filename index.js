const span = document.querySelector("#value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");


let count = 0;

decrease.addEventListener("click", function () {
    count--
    if (count < 0) {
        span.style.color = "red"
    } else if (count === 0) {
        span.style.color = "black"
    }
    span.innerHTML = count
    
})

reset.addEventListener("click", function () {
    count = 0;
    span.style.color = "black";
    span.innerHTML = count;
})

increase.addEventListener("click", function () {
    count++
    if (count > 0) {
        span.style.color = "green"
    } else if (count === 0) {
        span.style.color = "black"
    }
    span.innerHTML = count
})