// Instantiates a projectile every 0.1 seconds,
// if the Fire1 button is pressed or held down.
var projectile : Rigidbody;
var fireRate = 0.1;

var Velocity : float = 25;

private var nextFire = 0.0;


function Update () {
	
	//If the player holds down or presses the left mouse button
	if (Input.GetButton ("Fire1") && Time.time > nextFire) {
		Shoot();
	}
	
}

//To make our scripting a little more Object-Oriented-Programming, we will create our custom functions as well
function Shoot() {

	//Add fireRate and current time to nextFire
	nextFire = Time.time + fireRate;
	
	//Instantiate the projectile
	var clone = Instantiate (projectile, transform.position, transform.rotation);
		
	//Name the clone "Shot" ::: this name will appear in the Hierarchy View when you Instantiate the object
	clone.name = "Shot";
	
	//Add speed to the target
	clone.GetComponent.<Rigidbody>().velocity = transform.TransformDirection (Vector3.forward * Velocity);
	
}