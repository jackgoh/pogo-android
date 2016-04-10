var MoveSpeed : float = 1;
var Helper : GameObject;
var currentVelocity : float =0.0;

function Start()
{
Physics.gravity = Vector3(0, -21, 0);
}

function Update ()
{
	
    if(Input.GetKey("w")||(Input.GetKey(KeyCode.UpArrow)))
    {
       var HelperForward = Helper.transform.TransformDirection (Vector3.forward);
       GetComponent.<Rigidbody>().AddForce (HelperForward * MoveSpeed);   
    }
 
    if(Input.GetKey("s")||(Input.GetKey(KeyCode.DownArrow)))
    {
       var HelperBack = Helper.transform.TransformDirection (Vector3.back);
       GetComponent.<Rigidbody>().AddForce (HelperBack * MoveSpeed);
    }
    
    if(Input.GetKey("a")||(Input.GetKey(KeyCode.LeftArrow)))
    {
       var HelperLeft = Helper.transform.TransformDirection (Vector3.left);
       GetComponent.<Rigidbody>().AddForce (HelperLeft * MoveSpeed);
    }
 
    if(Input.GetKey("d")||(Input.GetKey(KeyCode.RightArrow)))
    {
       var HelperRight = Helper.transform.TransformDirection (Vector3.right);
       GetComponent.<Rigidbody>().AddForce (HelperRight * MoveSpeed);
    }
}
