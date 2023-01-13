let display_count = document.getElementById("count")
let inc = document.getElementById("inc")
let dec = document.getElementById("dec")
let count = 0

function Increment(){
    count++;
    display_count.innerHTML = count;
}
function Decrement(){
    count--;
    display_count.innerHTML = count;
}
function Reset(){
    count = 0 ;
    display_count.innerHTML = count;
}