static var playerIsDead = false;
static var playerIsRunOutLife = false;
var deathHeight : float = -10;


 function Update()
{
if(transform.position.y <= deathHeight)
{
    Dead();
}
}

function Dead()
{
	playerIsDead = true; //VERY IMPORTANT! This line was added in tutorial number 19. If you haven't reached that tutorial yet, go ahead and remove it.
}



function OnGUI ()
{
GUI.contentColor = Color.black;
	if (playerIsDead == true)
	{
	GUI.Label (new Rect (Screen.width*0.5-50, 100, 100, 40), "You Are Dead !");
	Time.timeScale=0;

		if (GUI.RepeatButton(Rect(Screen.width*0.5-50, 240, 100, 40), "Play Again"))
		{
			
			PlayAgain();
		}
	}
	if (playerIsRunOutLife == true)
	{
	
	GUI.Label (new Rect (Screen.width*0.5-75, 100, 200, 40), "You Are Run Out of Life !");
	Time.timeScale=0;

		if (GUI.RepeatButton(Rect(Screen.width*0.5-50, 240, 100, 40), "Reset"))
		{
			
			Reset();
		}
	}
	if (Finish.finish == true)
	{
	
	Time.timeScale=0;


		if (GUI.RepeatButton(Rect(Screen.width*0.5-75, 240, 100, 40), "Restart"))
		{
			
			PlayAgain();
		}
		if (GUI.RepeatButton(Rect(Screen.width*0.5-100, 150, 150, 40), "Next Level"))
		{
			
			Application.LoadLevel (Application.loadedLevel + 1);
			Finish.finish =false;
			Time.timeScale = 1;
		}
	}
	
	if (Timer.timeout == true)
	{
	GUI.Label (new Rect (Screen.width*0.5-50, 100, 100, 40), "TimeOut!");
	Time.timeScale=0;

		if (GUI.RepeatButton(Rect(Screen.width*0.5-50, 240, 100, 40), "Play Again"))
		{
			
			PlayAgain();
		}
	}
	
}


function PlayAgain()
{
	Application.LoadLevel(Application.loadedLevel);
	playerIsDead = false; 
	Timer.timeout = false;
	Finish.finish = false;
	health_control.LIVES -= 1; 
	Time.timeScale=1;
	Debug.Log("Restarted");
}

function Reset()
{
	Application.LoadLevel (1);
	Finish.finish = false;
	playerIsRunOutLife = false;
	health_control.LIVES = 3;
	Time.timeScale =1;
	Debug.Log("Reseted");

}
