function porg1()
{
	var str="helllllllllllllo";
	function count(letter)
	{
		var lettercount=0;
		for (var i=0; i<str.length; i++)
		{
			if(str.charAt(i).toUpperCase()==letter.toUpperCase())
			{
				lettercount++;
			}
		}
		alert(lettercount);
	}
	count("l");
}

function porg2()
{
	String.prototype.count=function (letter)
	{
		var lettercount=0;
		for (var i=0; i<this.length; i++)
		{
			if(this.charAt(i).toUpperCase()==letter.toUpperCase())
			{
				lettercount++;
			}
		}
		alert(lettercount);
	};
	var first="hello i am here";
		first.count("e");
	var second="i want to travel the world";
		second.count("a");


}