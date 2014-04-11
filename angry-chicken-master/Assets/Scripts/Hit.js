#pragma strict
var limit : float = 4.0f;
var oldValue : float = 0.0f;

var fx : GameObject;

function OnCollisionStay( collisionInfo : Collision )
{
	var diff : float = Mathf.Abs(oldValue - collisionInfo.relativeVelocity.magnitude);
	
	if ( diff > limit ){
	Instantiate(fx,
				this.transform.position,
				this.transform.rotation);	
				Destroy( this.gameObject );
	}
	oldValue = collisionInfo.relativeVelocity.magnitude;
	
}