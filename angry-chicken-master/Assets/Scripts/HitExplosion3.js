#pragma strict

var limitVel : float = 2.0f;
var vanishFx : GameObject;
var gameClear : GameObject;
var oldValue : float = 0.0f;
var i : int = 1;
	
function OnCollisionStay(collisionInfo : Collision)
{
	var diff: float = Mathf.Abs(oldValue - collisionInfo.relativeVelocity.magnitude);
//    if ( diff > limitVel ) {
    	if ( vanishFx ) {
			Instantiate(vanishFx, this.transform.position, this.transform.rotation);
		}
		Destroy(this.gameObject);
//	}
	oldValue = collisionInfo.relativeVelocity.magnitude;
	Instantiate(gameClear,new Vector3(-50+i*50,0,0),Quaternion.identity);  // こちらを使います
	// iTween.ColorTo(gameClear, iTween.Hash("gameClear", 0.0f, "time", 1.0f));
//	iTween.ScaleTo(gameClear, iTween.Hash("scale", new Vector3(2.0f, 2.0f, 2.0f), "time", 1.0f));
//    iTween.ColorTo(gameClear, iTween.Hash("a", 0.0f, "time", 1.0f));
}

function Update () {
//if (gameClear) gameClear.transform.localScale.x = Mathf.Sin(Time.time * 6.0) + 8;

//var go = GameObject.Find("ImageClear(Clone)");
//go.transform.Translate(0, 1, 0);

//GameObject cube = GameObject.Find("Cube");
//if (cube) cube.renderer.material.color = Color.blue;
}
