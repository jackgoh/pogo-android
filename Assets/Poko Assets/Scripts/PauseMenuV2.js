var pauseMenuFont : Font;
private var pauseEnabled = false;			

function Start(){
	pauseEnabled = false;
	Time.timeScale = 1;
	AudioListener.volume = 1;
	Cursor.visible = true;
}

function Update(){

	if(Input.GetKeyDown(KeyCode.Escape)||Input.GetKeyDown("p")){	
		if(pauseEnabled == true){
			//unpause the game
			pauseEnabled = false;
			Time.timeScale = 1;
			AudioListener.volume = 1;
			Cursor.visible = true;			
		}
		else if(pauseEnabled == false){
			pauseEnabled = true;
			AudioListener.volume = 0;
			Time.timeScale = 0;
			Cursor.visible = true;
		}
	}
}

private var showGraphicsDropDown = false;

function OnGUI(){

GUI.skin.box.font = pauseMenuFont;
GUI.skin.button.font = pauseMenuFont;

	if(pauseEnabled == true){
		
			if (GUI.Button (Rect (Screen.width /2 - 100,Screen.height /2 -100,250,50), "Resume")){
		pauseEnabled = false;
	Time.timeScale = 1;
	AudioListener.volume = 1;
	Cursor.visible = true;
		}
		if(GUI.Button(Rect(Screen.width /2 - 100,Screen.height /2 -50,250,50), "Main Menu")){
	
	Application.LoadLevel(0);
		}
		
			if(GUI.Button(Rect(Screen.width /2 - 100,Screen.height /2 ,250,50), "Change Graphics Quality")){
			
			if(showGraphicsDropDown == false){
				showGraphicsDropDown = true;
			}
			else{
				showGraphicsDropDown = false;
			}
		}
	
		if(showGraphicsDropDown == true){
			var names = QualitySettings.names;
		GUILayout.BeginVertical ();
		for (var i = 0; i < names.Length; i++)
		{
			if (GUILayout.Button (names[i]))
				QualitySettings.SetQualityLevel (i, true);
		}
		GUILayout.EndVertical ();
			
			if(Input.GetKeyDown("escape")){
				showGraphicsDropDown = false;
			}
		}
		
	
		if (GUI.Button (Rect (Screen.width /2 - 100,Screen.height /2 + 50,250,50), "Quit Game")){
			Application.LoadLevel(0);
		}
		
	}
}