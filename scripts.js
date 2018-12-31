
function resizeFunction ()
{
	var height = document.body.clientHeight;
	document.getElementById ("content").style.height = (height - 96).toString () + "px";
	document.getElementById ("content").style.top = "96px";
}

function load ()
{
	resizeFunction ();
}
