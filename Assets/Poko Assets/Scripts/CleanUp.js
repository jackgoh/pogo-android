private var timer : float = 0.0;
var secondsLeft : float = 5.0;
var particle : GameObject;

//the Update() function will serve as a timer
function Update () {

	//Start the timer
	timer += Time.deltaTime;
	
	//If the prefab has lived longer than secondsLeft:
	if(timer > secondsLeft) {
		
		//Destroy the object :
		
		//NOTE!!:: If you dont have the object as a prefab, 
		//this code will destroy the original object including clones of it!!!
		//to prevent that you need to change the following line to:
		
		//Destroy(gameObject.Find("theNameOfTheClonedObject");
		
		Destroy(this.gameObject);
		
		//Reset the timer
		timer = 0.0;
	}	
}


//Make sure your walls have the tag "Wall" to make the following function work
function OnCollisionEnter(hit : Collision) {
	
	//With this if statement, we can make sure our scene is not cluttered with prefabs
	if(hit.gameObject.tag == "Wall") {
		Destroy(this.gameObject);
		
		//Create a particle effect against the wall
		var sparks = Instantiate (particle, transform.position, transform.rotation);
		
		//autodestruct will give our particle effect a short life
		sparks.GetComponent(ParticleAnimator).autodestruct = true;
	}
}