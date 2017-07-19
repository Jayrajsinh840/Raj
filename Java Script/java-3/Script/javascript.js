function changeStyle() 
{
	var text = document.getElementById("para1").style.backgroundColor="#00FFFF";

}
function IndianHistory()
{
	var paragraph= document.getElementsByTagName ("p");


for ( var i=0; i < paragraph.length; i++ )
{

paragraph[i].style.fontStyle ="italic";
}

/*	var ChangeParaText = paragraph[0].style.backgroundColor = "green";
	var ChangeParaText = paragraph[1].style.backgroundColor = "yellow";
	var ChangeParaText = paragraph[2].style.backgroundColor = "red";
	var ChangeParaText = paragraph[3].style.backgroundColor = "	#B0C4DE";
*/
}
function Religions()
{
	var paragraph = document.getElementsByClassName("Culture");

	var ChangeText = paragraph[0].style.color=" #cc00cc";
}
function inner()
{
	var paragraph = document.getElementsByClassName("change");

	var ChangeText = paragraph[0].innerHTML="But I also like USA";
}
function Population()
{
	var paragraph = document.getElementsByClassName("join");

	var firstParaText = paragraph[0].innerHTML;
	var secondParaText = paragraph[1].innerHTML;
	var addThem = paragraph[2].innerHTML = firstParaText + secondParaText ;

	var firstParaText = paragraph[0].innerHTML="";
	var secondParaText = paragraph[1].innerHTML=""; 
}
function changeImage()
{
	document.getElementById("image").src="Images/mahal.jpg";
}
function newParagraph()
{
	var elementH = document.createElement("h4");
	var main = document.getElementById("main");

	main.appendChild(elementH);

	var textH = document.creatTextNode("sfsafsavsvvvsd");
	elementH.appendChild(textH);
}

function removeheader()
{
	var elementH = document.getElementsByTagName("h4")[1];
	var parent = elementH.parent.Node;
	parent.removeChild(elementH);

	var elementP = document.getElementsByTagName("p")[2];
	parent.removeChild(elementP);
}



function validateTextbox()
{
	var box = document.getElementById("name");
	var box2 = document.getElementById("UserName");


	if  (box.value == "" || box2.value == "")
	{
		alert("The field mark in red cannot be blank");
		return false;
	}
}