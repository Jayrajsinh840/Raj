$(document).ready(function()
{
	$("#raj2").click(function()
	{
		$("#raj1").hide();
	});

	$("#raj4").click(function()
	{
		$("#raj3").hide();
	});

	$("#raj5").dblclick(function()
	{
		$(this).hide();
	});

	$("#para").mouseenter(function()
	{
		alert("You are in entering this rubbis para");
	});

	$("#para1").mouseleave(function()
	{
		alert("I am leaving para");
	});


	$("#para2").hover(function()
	{
		alert("Entering in my world ");
	},
	function()
	{
		alert("leaving my world");
	});

	$("#para4").click(function()
	{
		$("#para3").toggle();
	});

	$("#bt1").click(function()
	{
		$("#css").fadeIn(6000);
	});

	$("#bt2").click(function()
	{
		$("#css1").animate({left:"250px"});
	});



	$("#bt3").click(function(){


		$("#pp").hide("slow",function ()
		{
		
			alert("para is hideing");
		});
	
  });

                                                           //This DOM in the jquery



$("#bt4").click(function()
{
	alert($("#ppone").text())

});


$("#bt5").click(function()
{
	alert($("#pptwo").html())

});


$("#bt6").click(function()
{
	alert($("#ppthree").val())

});



$("#bt7").click(function()
{
	alert($("#mylink").attr("href"));
});


$("#bt8").click(function()
{
	$("#para9").text("hello nnksncksn");
});


$("#t").click(function()
{
	$("#one").val("hello nnksncksn");
});


$("#abc").click(function()
{
	$("#kaka").prepend("hello world");
});


$("#bt77").click(function()
{
	$("#ram").remove();    /*here we can also we the .remove to remove the div*/
});


$("#bt78").click(function()
{

	$("#bt88").toggleClass("c2");

});

});





