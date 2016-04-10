//Probably the easiest thing to do.
var playerObj : GameObject;

//Because there is no Update() function, you can see that this script has to be called from another script.

//Custom function named "SpawnPlayer".
function SpawnPlayer () {

	//Create a new Player
	//NOTE ::: the camera must be inside of our Player GameObject for this to work!!!!
	Instantiate(playerObj, transform.position, transform.rotation);
	
}