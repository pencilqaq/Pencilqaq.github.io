function sname(){
	var str=location.href;
	var n1=str.split("?")[1];
	var n2=n1.split("&")[0];
	var n3=n2.split("=")[1];
	document.getElementById("name").innerHTML=n3;
}
function sclass(){
	var str=location.href;
	var a1=str.split("&")[1];
	var a2=a1.split("=")[1];
	document.getElementById("class").innerHTML=a2;
}
sname();
sclass();