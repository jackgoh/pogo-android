private var initialTime : float;
private var restSeconds : int;
private var roundedRestSeconds : int;
private var seconds : int;
private var minutes : int;
private var textTime : String;
var CountSeconds : int;
var CountMinutes : int;
static var timeout = false;

function Awake() {
initialTime = Time.time;
CountSeconds = CountSeconds + (CountMinutes * 60);
}
function OnGUI () {
var guiTime = Time.time - initialTime;
restSeconds = CountSeconds - (guiTime);
roundedRestSeconds = Mathf.CeilToInt(restSeconds);
seconds = roundedRestSeconds % 60;
minutes = roundedRestSeconds / 60;
GetComponent.<GUIText>().material.color = Color.red;
textTime = String.Format ("{0:00}:{1:00}", minutes, seconds);
GetComponent(GUIText).text = textTime;
if(minutes <= 0 && seconds <= 0)
{
Debug.Log("Time is over");
timeout = true;
}
}