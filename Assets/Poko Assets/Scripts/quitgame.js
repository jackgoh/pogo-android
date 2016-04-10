GetComponent.<Renderer>().material.color = Color.black;

function OnMouseEnter () 
{
	GetComponent.<Renderer>().material.color = Color.red;
}
function OnMouseExit()
{
	GetComponent.<Renderer>().material.color = Color.black;
}


function OnMouseDown()
{
	Application.Quit();
}