#pragma strict
    //Script by Will Goldstone at Unity3dstudent.com
 
    //set GUI bar width and height in the Inspector
    var barWidth : float = 560;
 
    var barHeight : float = 20;
 
    //drag a texture as the icon to move on the progress bar
    var progIcon : Texture;
 
    //where to set the GUI element to
    private var barProgress : float;
 
    //empty objects represent the start and end of a level
    var startPoint : Transform;
 
    var endPoint : Transform;
 
    //current Player position
    var playerPos : Transform;
 
    function Update()
    {
    // get level distance by subtracting start and end
    var totalDist : float = Vector3.Distance(startPoint.position, endPoint.position);
    //get player distance from start in X axis only so slopes/ height doesn't  affect result
    var playerDist : float = Vector3.Distance(startPoint.position,playerPos.position);
    //get players progress as a percentage of the whole distance
    var playerProgress : float = playerDist / totalDist * 100;
 
    //turn the playerProgress percentage back into the scale of barWidth
    barProgress = playerProgress / 100 * barWidth; 
    }
    function OnGUI()
    {
    //create a GUI group with width of the bar and twice its height
    //in order to leave room for 'Start' and 'End' text under the bar
    GUI.BeginGroup (new Rect (10, 400, barWidth, barHeight*2)); 
 
    //draw a box as the backing for the progress bar, blank text inside
    GUI.Box(Rect (0, 0, barWidth, barHeight), "");
 
    //create a label to draw the progress icon texture, use barProgress var
    //to set its X position, 0 as the Y position and width and height of the texture used
    GUI.Label (Rect(barProgress, 0, progIcon.width, progIcon.height),progIcon);
 
    //add start and end labels
    GUI.Label(Rect(progIcon.width/2, 25, 50, barHeight), "Start"); 
    GUI.Label(Rect(barWidth-30, 25, 100,barHeight), "End"); 
 
    GUI.EndGroup();
    }