
static var playerIsFinish = false;

 
//Getting hit period
function OnControllerColliderHit(hit : ControllerColliderHit)
{
 
//if fall off map
 if(hit.gameObject.tag == "Finish")
	{
		Finish();
		Debug.Log("Finish");
		//subtract life here 
	}
 }
 
function Finish()
{
	playerIsFinish = true; 
	Debug.Log("Finish");
}



function OnGUI ()
{
	if (playerIsFinish == true)
	{
	GUI.Label (new Rect (Screen.width*0.5-50, 100, 100, 40), "Finish");
	Time.timeScale=0;
		if (GUI.RepeatButton(Rect(Screen.width*0.5-50, 240, 100, 40), "Restart"))
		{
			Restart();
		}
	}

}


function Restart()
{
	Application.LoadLevel (0);
	playerIsFinish = false; 
	health_control.LIVES -= 1; 
	Time.timeScale=1;
	Debug.Log("Restarted");
}