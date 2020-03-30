gdjs.NewSceneCode = {};
gdjs.NewSceneCode.forEachIndex2 = 0;

gdjs.NewSceneCode.forEachObjects2 = [];

gdjs.NewSceneCode.forEachTemporary2 = null;

gdjs.NewSceneCode.forEachTotalCount2 = 0;

gdjs.NewSceneCode.GDBackground2Objects1= [];
gdjs.NewSceneCode.GDBackground2Objects2= [];
gdjs.NewSceneCode.GDBackground2Objects3= [];
gdjs.NewSceneCode.GDBackgroundObjects1= [];
gdjs.NewSceneCode.GDBackgroundObjects2= [];
gdjs.NewSceneCode.GDBackgroundObjects3= [];
gdjs.NewSceneCode.GDPlayerObjects1= [];
gdjs.NewSceneCode.GDPlayerObjects2= [];
gdjs.NewSceneCode.GDPlayerObjects3= [];
gdjs.NewSceneCode.GDPlatformsObjects1= [];
gdjs.NewSceneCode.GDPlatformsObjects2= [];
gdjs.NewSceneCode.GDPlatformsObjects3= [];
gdjs.NewSceneCode.GDcoinObjects1= [];
gdjs.NewSceneCode.GDcoinObjects2= [];
gdjs.NewSceneCode.GDcoinObjects3= [];
gdjs.NewSceneCode.GDJumpsObjects1= [];
gdjs.NewSceneCode.GDJumpsObjects2= [];
gdjs.NewSceneCode.GDJumpsObjects3= [];
gdjs.NewSceneCode.GDjumpPowerObjects1= [];
gdjs.NewSceneCode.GDjumpPowerObjects2= [];
gdjs.NewSceneCode.GDjumpPowerObjects3= [];
gdjs.NewSceneCode.GDMonster1Objects1= [];
gdjs.NewSceneCode.GDMonster1Objects2= [];
gdjs.NewSceneCode.GDMonster1Objects3= [];
gdjs.NewSceneCode.GDbossBulletObjects1= [];
gdjs.NewSceneCode.GDbossBulletObjects2= [];
gdjs.NewSceneCode.GDbossBulletObjects3= [];
gdjs.NewSceneCode.GDplayerBulletObjects1= [];
gdjs.NewSceneCode.GDplayerBulletObjects2= [];
gdjs.NewSceneCode.GDplayerBulletObjects3= [];
gdjs.NewSceneCode.GDBossObjects1= [];
gdjs.NewSceneCode.GDBossObjects2= [];
gdjs.NewSceneCode.GDBossObjects3= [];
gdjs.NewSceneCode.GDBossHealthObjects1= [];
gdjs.NewSceneCode.GDBossHealthObjects2= [];
gdjs.NewSceneCode.GDBossHealthObjects3= [];
gdjs.NewSceneCode.GDplayerHealthObjects1= [];
gdjs.NewSceneCode.GDplayerHealthObjects2= [];
gdjs.NewSceneCode.GDplayerHealthObjects3= [];
gdjs.NewSceneCode.GDplayerHealthUpdateObjects1= [];
gdjs.NewSceneCode.GDplayerHealthUpdateObjects2= [];
gdjs.NewSceneCode.GDplayerHealthUpdateObjects3= [];
gdjs.NewSceneCode.GDGameOverObjects1= [];
gdjs.NewSceneCode.GDGameOverObjects2= [];
gdjs.NewSceneCode.GDGameOverObjects3= [];
gdjs.NewSceneCode.GDNewObjectObjects1= [];
gdjs.NewSceneCode.GDNewObjectObjects2= [];
gdjs.NewSceneCode.GDNewObjectObjects3= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_0 = {val:false};
gdjs.NewSceneCode.conditionTrue_1 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_1 = {val:false};
gdjs.NewSceneCode.condition2IsTrue_1 = {val:false};


gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerBulletObjects1Objects = Hashtable.newFrom({"playerBullet": gdjs.NewSceneCode.GDplayerBulletObjects1});gdjs.NewSceneCode.eventsList0x784084 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "firerate");
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
gdjs.NewSceneCode.GDplayerBulletObjects1.length = 0;

{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].playAnimation();
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerBulletObjects1Objects, (( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointX("")), (( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerBulletObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerBulletObjects1[i].addPolarForce((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getAngle()), 400, 1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerBulletObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerBulletObjects1[i].rotateTowardAngle((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getAngle()), 0, runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "firerate");
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x784084
gdjs.NewSceneCode.eventsList0x6a388c = function(runtimeScene) {

{

gdjs.NewSceneCode.GDPlayerObjects2.createFrom(gdjs.NewSceneCode.GDPlayerObjects1);


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects2[k] = gdjs.NewSceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects2.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].setAnimationName("Walk");
}
}}

}


{

/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x6a388c
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlatformsObjects1Objects = Hashtable.newFrom({"Platforms": gdjs.NewSceneCode.GDPlatformsObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerBulletObjects1Objects = Hashtable.newFrom({"playerBullet": gdjs.NewSceneCode.GDplayerBulletObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBossObjects1Objects = Hashtable.newFrom({"Boss": gdjs.NewSceneCode.GDBossObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDbossBulletObjects1Objects = Hashtable.newFrom({"bossBullet": gdjs.NewSceneCode.GDbossBulletObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.NewSceneCode.GDPlayerObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.NewSceneCode.GDcoinObjects1});gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcoinObjects2Objects = Hashtable.newFrom({"coin": gdjs.NewSceneCode.GDcoinObjects2});gdjs.NewSceneCode.eventsList0x75840c = function(runtimeScene) {

}; //End of gdjs.NewSceneCode.eventsList0x75840c
gdjs.NewSceneCode.eventsList0x75aec4 = function(runtimeScene) {

{

/* Reuse gdjs.NewSceneCode.GDcoinObjects1 */

for(gdjs.NewSceneCode.forEachIndex2 = 0;gdjs.NewSceneCode.forEachIndex2 < gdjs.NewSceneCode.GDcoinObjects1.length;++gdjs.NewSceneCode.forEachIndex2) {
gdjs.NewSceneCode.GDJumpsObjects2.createFrom(runtimeScene.getObjects("Jumps"));
gdjs.NewSceneCode.GDPlayerObjects2.createFrom(gdjs.NewSceneCode.GDPlayerObjects1);

gdjs.NewSceneCode.GDcoinObjects2.length = 0;


gdjs.NewSceneCode.forEachTemporary2 = gdjs.NewSceneCode.GDcoinObjects1[gdjs.NewSceneCode.forEachIndex2];
gdjs.NewSceneCode.GDcoinObjects2.push(gdjs.NewSceneCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.NewSceneCode.GDcoinObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcoinObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects2[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)).add(100);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDJumpsObjects2.length ;i < len;++i) {
    gdjs.NewSceneCode.GDJumpsObjects2[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects2[0].getVariables()).getFromIndex(0))));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcoinObjects2Objects, 1200, gdjs.randomInRange(0, 600), "");
}}
}

}


}; //End of gdjs.NewSceneCode.eventsList0x75aec4
gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDbossBulletObjects1Objects = Hashtable.newFrom({"bossBullet": gdjs.NewSceneCode.GDbossBulletObjects1});gdjs.NewSceneCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));
gdjs.NewSceneCode.GDBossHealthObjects1.createFrom(runtimeScene.getObjects("BossHealth"));
gdjs.NewSceneCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.NewSceneCode.GDJumpsObjects1.createFrom(runtimeScene.getObjects("Jumps"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.createFrom(runtimeScene.getObjects("playerHealthUpdate"));
{runtimeScene.getVariables().get("state").setNumber(0);
}{runtimeScene.getGame().getVariables().get("jumps").setNumber(0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDJumpsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDJumpsObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBossHealthObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossHealthObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDBossObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDBossObjects1[0].getVariables()).get("Health"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerHealthUpdateObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGameOverObjects1[i].hide();
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) > 0 ) {
        gdjs.NewSceneCode.condition1IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDJumpsObjects1.createFrom(runtimeScene.getObjects("Jumps"));
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDJumpsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDJumpsObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(0))));
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(10000000000000000000000000000000);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("scene").setNumber(1);
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getY() < 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, -(300), "", 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x784084(runtimeScene);} //End of subevents
}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getY() > 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, 300, "", 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAngle(0);
}
}}

}


{



}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
gdjs.NewSceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scene")) == 1;
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].addPolarForce(0, 0, 0);
}
}
{ //Subevents
gdjs.NewSceneCode.eventsList0x6a388c(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("scene")) == 1;
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlatformsObjects1.createFrom(runtimeScene.getObjects("Platforms"));
gdjs.NewSceneCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlatformsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlatformsObjects1[i].addPolarForce(180, 150, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcoinObjects1[i].addPolarForce(180, 150, 0);
}
}}

}


{

gdjs.NewSceneCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDcoinObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDcoinObjects1[i].getX() <= -(100) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDcoinObjects1[k] = gdjs.NewSceneCode.GDcoinObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDcoinObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDcoinObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcoinObjects1[i].setX(850);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDcoinObjects1[i].setY(gdjs.randomInRange(0, 600));
}
}}

}


{

gdjs.NewSceneCode.GDPlatformsObjects1.createFrom(runtimeScene.getObjects("Platforms"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlatformsObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlatformsObjects1[i].getX() <= -(100) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlatformsObjects1[k] = gdjs.NewSceneCode.GDPlatformsObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlatformsObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlatformsObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlatformsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlatformsObjects1[i].setX(1200);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlatformsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlatformsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlatformsObjects1Objects, 1200, gdjs.randomInRange(0, 600), "");
}}

}


{



}


{


{
gdjs.NewSceneCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
gdjs.NewSceneCode.GDBackground2Objects1.createFrom(runtimeScene.getObjects("Background2"));
{for(var i = 0, len = gdjs.NewSceneCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBackgroundObjects1[i].addPolarForce(180, 50, 0);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBackground2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBackground2Objects1[i].addPolarForce(180, 50, 0);
}
}}

}


{

gdjs.NewSceneCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBackgroundObjects1[i].getX() <= -(1600) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBackgroundObjects1[k] = gdjs.NewSceneCode.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBackgroundObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBackgroundObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBackgroundObjects1[i].setX(1600);
}
}}

}


{

gdjs.NewSceneCode.GDBackground2Objects1.createFrom(runtimeScene.getObjects("Background2"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBackground2Objects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBackground2Objects1[i].getX() <= -(1600) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBackground2Objects1[k] = gdjs.NewSceneCode.GDBackground2Objects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBackground2Objects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBackground2Objects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBackground2Objects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBackground2Objects1[i].setX(1600);
}
}}

}


{



}


{

gdjs.NewSceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));
gdjs.NewSceneCode.GDplayerBulletObjects1.createFrom(runtimeScene.getObjects("playerBullet"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDplayerBulletObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDBossObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8089420);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDBossObjects1 */
gdjs.NewSceneCode.GDBossHealthObjects1.createFrom(runtimeScene.getObjects("BossHealth"));
/* Reuse gdjs.NewSceneCode.GDplayerBulletObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossObjects1[i].returnVariable(gdjs.NewSceneCode.GDBossObjects1[i].getVariables().get("Health")).sub(500);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBossHealthObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossHealthObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDBossObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDBossObjects1[0].getVariables()).get("Health"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerBulletObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDbossBulletObjects1.createFrom(runtimeScene.getObjects("bossBullet"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDbossBulletObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8151828);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
/* Reuse gdjs.NewSceneCode.GDbossBulletObjects1 */
gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.createFrom(runtimeScene.getObjects("playerHealthUpdate"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].returnVariable(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)).sub(10);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDplayerHealthUpdateObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDPlayerObjects1[0].getVariables()).getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDbossBulletObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbossBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDPlayerObjects1Objects, gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDcoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NewSceneCode.eventsList0x75aec4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{



}


{


{
gdjs.NewSceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));
gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.NewSceneCode.GDbossBulletObjects1.createFrom(runtimeScene.getObjects("bossBullet"));
{for(var i = 0, len = gdjs.NewSceneCode.GDBossObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossObjects1[i].getBehavior("FireBullet").Fire((gdjs.NewSceneCode.GDBossObjects1[i].getPointX("")), (gdjs.NewSceneCode.GDBossObjects1[i].getPointY("")), gdjs.NewSceneCode.mapOfGDgdjs_46NewSceneCode_46GDbossBulletObjects1Objects, ((( gdjs.NewSceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.NewSceneCode.GDPlayerObjects1[0].getAngle())) + 180, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
}

}


{

gdjs.NewSceneCode.GDBossObjects1.createFrom(runtimeScene.getObjects("Boss"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
gdjs.NewSceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDBossObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDBossObjects1[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDBossObjects1[k] = gdjs.NewSceneCode.GDBossObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDBossObjects1.length = k;}if ( gdjs.NewSceneCode.condition0IsTrue_0.val ) {
{
{gdjs.NewSceneCode.conditionTrue_1 = gdjs.NewSceneCode.condition1IsTrue_0;
gdjs.NewSceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7602404);
}
}}
if (gdjs.NewSceneCode.condition1IsTrue_0.val) {
gdjs.NewSceneCode.GDbossBulletObjects1.createFrom(runtimeScene.getObjects("bossBullet"));
{for(var i = 0, len = gdjs.NewSceneCode.GDbossBulletObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDbossBulletObjects1[i].setAngle((gdjs.NewSceneCode.GDbossBulletObjects1[i].getAngle()));
}
}}

}


{



}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.NewSceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(1)) <= 0 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBossHealthObjects1.createFrom(runtimeScene.getObjects("BossHealth"));
gdjs.NewSceneCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
/* Reuse gdjs.NewSceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].setAnimationName("Death");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDPlayerObjects1[i].playAnimation();
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGameOverObjects1[i].resetTimer("GameOver");
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDBossHealthObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossHealthObjects1[i].hide();
}
}}

}


{

gdjs.NewSceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NewSceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.NewSceneCode.GDPlayerObjects1[i].getY() > 650 ) {
        gdjs.NewSceneCode.condition0IsTrue_0.val = true;
        gdjs.NewSceneCode.GDPlayerObjects1[k] = gdjs.NewSceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.NewSceneCode.GDPlayerObjects1.length = k;}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
gdjs.NewSceneCode.GDBossHealthObjects1.createFrom(runtimeScene.getObjects("BossHealth"));
gdjs.NewSceneCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGameOverObjects1[i].hide(false);
}
}{gdjs.evtTools.camera.setCameraY(runtimeScene, -(300), "", 0);
}{for(var i = 0, len = gdjs.NewSceneCode.GDBossHealthObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDBossHealthObjects1[i].hide();
}
}}

}


{


{
}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b6e18


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDBackground2Objects1.length = 0;
gdjs.NewSceneCode.GDBackground2Objects2.length = 0;
gdjs.NewSceneCode.GDBackground2Objects3.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects1.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects2.length = 0;
gdjs.NewSceneCode.GDBackgroundObjects3.length = 0;
gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects3.length = 0;
gdjs.NewSceneCode.GDPlatformsObjects1.length = 0;
gdjs.NewSceneCode.GDPlatformsObjects2.length = 0;
gdjs.NewSceneCode.GDPlatformsObjects3.length = 0;
gdjs.NewSceneCode.GDcoinObjects1.length = 0;
gdjs.NewSceneCode.GDcoinObjects2.length = 0;
gdjs.NewSceneCode.GDcoinObjects3.length = 0;
gdjs.NewSceneCode.GDJumpsObjects1.length = 0;
gdjs.NewSceneCode.GDJumpsObjects2.length = 0;
gdjs.NewSceneCode.GDJumpsObjects3.length = 0;
gdjs.NewSceneCode.GDjumpPowerObjects1.length = 0;
gdjs.NewSceneCode.GDjumpPowerObjects2.length = 0;
gdjs.NewSceneCode.GDjumpPowerObjects3.length = 0;
gdjs.NewSceneCode.GDMonster1Objects1.length = 0;
gdjs.NewSceneCode.GDMonster1Objects2.length = 0;
gdjs.NewSceneCode.GDMonster1Objects3.length = 0;
gdjs.NewSceneCode.GDbossBulletObjects1.length = 0;
gdjs.NewSceneCode.GDbossBulletObjects2.length = 0;
gdjs.NewSceneCode.GDbossBulletObjects3.length = 0;
gdjs.NewSceneCode.GDplayerBulletObjects1.length = 0;
gdjs.NewSceneCode.GDplayerBulletObjects2.length = 0;
gdjs.NewSceneCode.GDplayerBulletObjects3.length = 0;
gdjs.NewSceneCode.GDBossObjects1.length = 0;
gdjs.NewSceneCode.GDBossObjects2.length = 0;
gdjs.NewSceneCode.GDBossObjects3.length = 0;
gdjs.NewSceneCode.GDBossHealthObjects1.length = 0;
gdjs.NewSceneCode.GDBossHealthObjects2.length = 0;
gdjs.NewSceneCode.GDBossHealthObjects3.length = 0;
gdjs.NewSceneCode.GDplayerHealthObjects1.length = 0;
gdjs.NewSceneCode.GDplayerHealthObjects2.length = 0;
gdjs.NewSceneCode.GDplayerHealthObjects3.length = 0;
gdjs.NewSceneCode.GDplayerHealthUpdateObjects1.length = 0;
gdjs.NewSceneCode.GDplayerHealthUpdateObjects2.length = 0;
gdjs.NewSceneCode.GDplayerHealthUpdateObjects3.length = 0;
gdjs.NewSceneCode.GDGameOverObjects1.length = 0;
gdjs.NewSceneCode.GDGameOverObjects2.length = 0;
gdjs.NewSceneCode.GDGameOverObjects3.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects1.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects2.length = 0;
gdjs.NewSceneCode.GDNewObjectObjects3.length = 0;

gdjs.NewSceneCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
