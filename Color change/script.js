const body = document.querySelector("body");
const bg_color = ["red", "green", "blue", "yellow","pink","purple"];
function ChangeColor()
{
    let num = Math.random();
    console.log("Random Number",num);
    
    let len = bg_color.length;
    console.log("Colors List Length",len);

    let index =  num * len;
    console.log("Multiply Random Number and Colors Length",index);

    let int_index = parseInt(index);
    console.log("Integer Round",int_index);

    body.style.backgroundColor = bg_color[int_index];
}
const text_color =  ["red", "green", "blue", "yellow","pink","purple"];
function ChangeTextColor()
{
    const text = document.getElementById("text")
    const color_index = parseInt(Math.random() * text_color.length);
    // let num = Math.random();
    // console.log("Random Number",num);
    
    // let len = text_color.length;
    // console.log("Colors List Length",len);

    // let index =  num * len;
    // console.log("Multiply Random Number and Colors Length",index);

    // let int_index = parseInt(index);
    // console.log("Integer Round",int_index);

    text.style.color = text_color[color_index];
}

