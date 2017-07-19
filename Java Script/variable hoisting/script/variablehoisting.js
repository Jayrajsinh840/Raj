function porg1()            /*here output will be the 12 because functio name same */
{
	function show()
	{
		function get ()
		{
			return 7;
		}
		return get;
		function get()
		{
			return 12;
		}

	}
	console.log(show());
}

function porg2()     /*here the outcome its 7 because we store variable with res*/
{
	function show()
	{
		var res=function get ()
		{
			return 7;
		}
		return res;
		var res=function get()
		{
			return 12;
		}

	}
	console.log(show());
}

function porg3()    // here it will undefine because return res will be the left since both the function is undefine
{
	function show()
	{
		return res;
		var res=function get ()
		{
			return 7;
		}
		
		var res=function get()
		{
			return 12;
		}

	}
	console.log(show());
}

function porg4()
{
	
}