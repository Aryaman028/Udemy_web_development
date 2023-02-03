
function del(){
    document.getElementById("data").innerHTML = ""
}
function display(a){
    document.getElementById("data").innerHTML =  document.getElementById("data").innerHTML + a

}
function calc(){
    let x = document.getElementById("data").innerHTML
    let y = eval(x)
    document.getElementById("data").innerHTML = y

    
}



