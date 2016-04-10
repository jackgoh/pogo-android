Screen.sleepTimeout = SleepTimeout.NeverSleep;

function Update () {
		if(Finish.finish == true || DeathZone.playerIsDead == true || DeathZone.playerIsRunOutLife == true){
		GetComponent.<Rigidbody>().constraints = RigidbodyConstraints.FreezeRotationX | RigidbodyConstraints.FreezeRotationZ;
		}
		else{
		transform.Translate(Input.acceleration.x, 0, -Input.acceleration.z);
		}
	}

