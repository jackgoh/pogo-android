static var playerIsDead = false;
static var playerIsRunOutLife = false;
var deathHeight : float = -10;
var btnTexture : Texture;
var style : GUIStyle = new GUIStyle();
style.fontSize = 50;
    

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
	GUI.Label( Rect ( Screen.width/2-(320/2) , (Screen.height/2)-40, 320, 80), "You're Dead!", style);
	Time.timeScale=0;

		if (GUI.RepeatButton(Rect(Screen.width/2-(640/2) ,(Screen.height/2)+40, 640, 160), "Play Again"))
		{
			
			PlayAgain();
		}
		
		
	}
	if (playerIsRunOutLife == true)
	{
	
	GUI.Label (new Rect (Screen.width/2-(320/2) , (Screen.height/2)-40, 320, 80), "You Are Run Out of Life !");
	Time.timeScale=0;

		if (GUI.RepeatButton(Rect(Screen.width/2-(640/2) ,(Screen.height/2)+40, 640, 160), "Reset"))
		{
			
			Reset();
		}
	}
	if (Finish.finish == true)
	{
	
	Time.timeScale=0;


		if (GUI.RepeatButton(Rect(Screen.width/2-(640/2) ,(Screen.height/2)-160, 640, 160), "Restart"))
		{
			
			PlayAgain();
		}
		if (GUI.RepeatButton(Rect(Screen.width/2-(640/2) ,(Screen.height/2)+40, 640, 160), "Next Level"))
		{
			
			Application.LoadLevel (Application.loadedLevel + 1);
			Finish.finish =false;
			Time.timeScale = 1;
		}
	}
	
	if (Timer.timeout == true)
	{
	GUI.Label (new Rect (Screen.width/2-(320/2) , (Screen.height/2)-40, 320, 80), "TimeOut!");
	Time.timeScale=0;

		if (GUI.RepeatButton(Rect(Screen.width/2-(640/2) ,(Screen.height/2)+40, 640, 160), "Play Again"))
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
