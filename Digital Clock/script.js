function showtime()
{
    let date = new Date();
    let d = date.getDate();
    let y = date.getFullYear();
    let mo = 1 + date.getMonth();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let time = h + ":" + m + ":" + s
    let showdate = d + "//" + mo + "//" + y
    document.getElementById("myclock").innerHTML = time;
    document.getElementById("date").innerHTML = showdate;



    setTimeout(showtime,1000)
}
showtime()