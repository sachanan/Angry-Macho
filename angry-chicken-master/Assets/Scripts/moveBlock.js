#pragma strict

function Start () {

}

function Update () {
 transform.localScale.x = Mathf.Sin(Time.time * 6.0) + 8;
}