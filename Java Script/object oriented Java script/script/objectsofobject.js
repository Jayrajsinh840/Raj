function porg1()
{
	var cars={
		honda:{color:"white",doors:2},
		bmw:{color:"grey",doors:4},
		toyota:{color:"pink",doors:2}

	}
	alert (cars.honda.color);
	alert (cars.bmw.doors);
	alert (cars.toyota.color);
}

function porg2()
{
	var cars=
	{
		honda:{color:"white",doors:2},
		bmw:{color:"grey",doors:4},
		toyota:{color:"pink",doors:2},

		addcar:function (name,color,doors)
		{
			this[name]={color:color,doors:doors};
		}

	};
	cars.addcar("audi","black",2);
	console.log(cars);
}

function porg3()
{
	var vehicles=
	{
		cars:{name:"bmw",color:"black",doors:2},
		bike:{name:"ducati",color:"white",seat:2},

		addcar:function(name,color,doors)
		{
			this[name]={color:color,doors:doors};
		},
		addbike:function(name,color,seat)
		{
			this[name]={color:color,seat:seat};
		}

	};
	vehicles.addcar("lexus","pink",4);
	console.log(vehicles);
	vehicles.addbike("ducati","white",2);
	console.log(vehicles);
}