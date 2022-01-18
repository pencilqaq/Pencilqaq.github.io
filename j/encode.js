var str = Base64.decode(parent.location.href.split("?")[1]); //解码URL中的信息

function name1() {
    var a1 = str.split("&")[0];
    var a2 = a1.split("=")[1];
    document.getElementById("1name").innerHTML = a2;
}

function sclass() {
    var a1 = str.split("&")[1];
    var a2 = a1.split("=")[1];
    document.getElementById("1class").innerHTML = a2;
}

function studentnumber() {
    var a1 = str.split("&")[2];
    var a2 = a1.split("=")[1];
    document.getElementById("1studentnumber").innerHTML = a2;
}

function phonenumber() {
    var a1 = str.split("&")[3];
    var a2 = a1.split("=")[1];
    document.getElementById("1phonenumber").innerHTML = a2;
}

function requesttime() {
    var a1 = str.split("&")[4];
    var a2 = a1.split("=")[1];
    var aa = a2.replace("T", " ");
    document.getElementById("1requesttime").innerHTML = a2;
    console.log(a2);
}

function stime() {
    var a1 = str.split("&")[5];
    var a2 = a1.split("=")[1];
    document.getElementById("1stime").innerHTML = a2;
    console.log(a2);
}

function edtime() {
    var a1 = str.split("&")[6];
    var a2 = a1.split("=")[1];
    document.getElementById("1edtime").innerHTML = a2;
    console.log(a2);
}

function reason() {
    var a1 = str.split("&")[7];
    var a2 = a1.split("=")[1];
    document.getElementById("1reason").innerHTML = a2;
    console.log(a2);
}

function details() {
    var a1 = str.split("&")[8];
    var a2 = a1.split("=")[1];
    document.getElementById("1details").innerHTML = a2;
    console.log(a2);
}

function passtime() {
    var a1 = str.split("&")[9];
    var a2 = a1.split("=")[1];
    document.getElementById("1passtime").innerHTML = a2;
}

function day() {
    var a1 = str.split("&")[10];
    var a2 = a1.split("=")[1];
    document.getElementById("1day").innerHTML = a2;
}

function duration() {
    var a1 = str.split("&")[11];
    var a2 = a1.split("=")[1];
    document.getElementById("1duration").innerHTML = a2;
}



///////////////////////////////////////////////////////


window.onload = function name1() {
    var a1 = str.split("&")[0];
    var a2 = a1.split("=")[1];
    document.getElementById("name1").innerHTML = a2;
    document.getElementById("name2").innerHTML = a2;
}

function sclass() {
    var a1 = str.split("&")[1];
    var a2 = a1.split("=")[1];
    document.getElementById("class").innerHTML = a2;
}

function studentnumber() {
    var a1 = str.split("&")[2];
    var a2 = a1.split("=")[1];
    document.getElementById("studentnumber").innerHTML = a2;
}

function phonenumber() {
    var a1 = str.split("&")[3];
    var a2 = a1.split("=")[1];
    document.getElementById("phonenumber").innerHTML = a2;
}

function requesttime() {
    var a1 = str.split("&")[4];
    var a2 = a1.split("=")[1];
    var aa = a2.replace("T", " ");
    document.getElementById("requesttime").innerHTML = a2;
}

function stime() {
    var a1 = str.split("&")[5];
    var a2 = a1.split("=")[1];
    document.getElementById("stime").innerHTML = a2;
}

function edtime() {
    var a1 = str.split("&")[6];
    var a2 = a1.split("=")[1];
    document.getElementById("edtime").innerHTML = a2;
}

function reason() {
    var a1 = str.split("&")[7];
    var a2 = a1.split("=")[1];
    document.getElementById("reason").innerHTML = a2;
}

function details() {
    var a1 = str.split("&")[8];
    var a2 = a1.split("=")[1];
    document.getElementById("details").innerHTML = a2;
}

function passtime() {
    var a1 = str.split("&")[9];
    var a2 = a1.split("=")[1];
    document.getElementById("passtime").innerHTML = a2;
}

function day() {
    var a1 = str.split("&")[10];
    var a2 = a1.split("=")[1];
    document.getElementById("day").innerHTML = a2;
}

function duration() {
    var a1 = str.split("&")[11];
    var a2 = a1.split("=")[1];
    document.getElementById("duration").innerHTML = a2;
}
name1();
//name2();
sclass();
studentnumber();
phonenumber();
requesttime();
stime();
edtime();
reason();
details();
passtime();
day();
duration();