/*---------------------------js1 for image enlargement------------------------------------*/

function largeImage(x){
	x.style.width="830px";
	x.style.height="530px";
}
function normalImage(x){
	x.style.width="800px";
	x.style.height="500px";
}

function largeImage2(x){
	x.style.width="370px";
	x.style.height="270px";
}
function normalImage2(x){
	x.style.width="350px";
	x.style.height="250px";
}

/*-------------------------js2 for button display----------------------------------*/

function display(){
	document.getElementById('open1').style.display="block";
	document.getElementById('open2').style.display="none";
	document.getElementById('open3').style.display="none";
	document.getElementById('open4').style.display="none";
}
function display2(){
	document.getElementById('open2').style.display="block";
	document.getElementById('open1').style.display="none";
	document.getElementById('open3').style.display="none";
	document.getElementById('open4').style.display="none";

}
function display3(){
	document.getElementById('open3').style.display="block";
	document.getElementById('open1').style.display="none";
	document.getElementById('open2').style.display="none";
	document.getElementById('open4').style.display="none";
}
function display4(){
	document.getElementById('open4').style.display="block";
	document.getElementById('open1').style.display="none";
	document.getElementById('open3').style.display="none";
	document.getElementById('open2').style.display="none";
}

/*----------------------------------------color chng for guide------------------------------------------*/

function up(name){
	var x=document.getElementById(name).style.textTransform="uppercase";
}
function show(){
	var x;
	var c;
	 x= document.getElementById('email').value;
	 c=x.indexOf("@");
	if(c==-1&&x!=""){
		alert('invalid email address');
		document.getElementById('email').value="";

	}
}

function check(){
	var x;
	var l;
	var c;
	x=document.getElementById('ccnum').value;
	l=String(x);
	c=l.length;
	if(c!=16&&c!=0){
		alert('Enter valid Card Number');
		document.getElementById('ccnum').value="";

	}
}

function year(){
	var d=new Date();
	var y=d.getFullYear();
	var x=document.getElementById('expyear').value;
	if(x<y&&x!=""){
		alert('card is expired');
		document.getElementById('expyear').value="";

	}
}

function cvv(){
	var n;
	var s;
	
	n=document.getElementById('cvv').value;
	s=String(n);
	
	if(s.length()!=3&&s.length()!=0){
		alert('Enter the valid CVV');
		document.getElementById('cvv').value="";
	}
}

function zip(){
	var f=document.getElementById('zip').value;
    var l=String(f);
    var p=l.length;
    if(p!= 6 && p!=0){
		alert('Enter valid PinCode');
		document.getElementById('zip').value="";

	}
}

/*---------------------------------------------cart js---------------------------------------------------*/