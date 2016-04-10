 var customStyle: GUIStyle;
   private var progress : int;
   var mySpeed: int;
   var pos : Vector2;
   var size : Vector2; 
 
   function OnGUI () {
        // Constrain all drawing to be within a pixel area .
        GUI.BeginGroup (new Rect (pos.x, pos.y, progress, size.y));
 
        // Define progress bar texture within customStyle under Normal > Background
        GUI.Box (Rect (0,0, size.x, size.y),"", customStyle);
 
        // Always match BeginGroup calls with an EndGroup call
        GUI.EndGroup ();
    } 
 
    function Update (){
        progress = size.x - Mathf.Floor(Time.time * mySpeed);
 
    }