var waspressed = false;
var lockCursor:int;
var pauseSound : AudioClip;


function Start () {
 Cursor.visible = true;
 Time.timeScale = 1.0;
}

function Update () {
 if(Input.GetKeyDown(KeyCode.Escape)){
  Cursor.visible = false;
  waspressed = true;
  Time.timeScale =0;
  
   }
  }

function OnGUI (){ 
 if(!Cursor.visible && waspressed == true){
  if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2 + 62, 200, 75), "Resume"))
         {
          Cursor.visible = true;
          waspressed = false;
          Time.timeScale = 1.0;
         }
         
     if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2 - 110, 200, 75), "Exit"))
         {
          Application.Quit();
         }
         
          if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2 -200, 200, 75), "Back To Menu"))
         {
           Application.LoadLevel (0);
         }
             if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2 - 290, 200, 75), "Restart"))
         {
          Application.LoadLevel (1);
         }
         
         if(GUI.Button(Rect(Screen.width/2 - 100, Screen.height/2 -20 ,200 ,75), "Sound"))
         {
      AudioListener.volume = 0;
         }
         else{
         AudioListener.volume=1;
 
  

   }
}


}