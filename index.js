var width = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
		width= width -100;
var height = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

var isIfElse = 0;
window.onload = function() {
	data=  getURLParameters("string_input");
	ActivitiesArray = data.split(",");
	height = (ActivitiesArray.length/5)*height;
	
	

    var paper = new Raphael(document.getElementById('canvas_container'), width, height);
	//DrawActivity(paper,0);

	//DrawActivities(paper,0);
	DrawElipse(paper,0);
		//Loop for activities
	for (j = 0; j < ActivitiesArray.length; j++) { 
		
		if(ActivitiesArray[j].split("+").length>1){
			DrawActivities(paper,3,ActivitiesArray[j]);
		}else{
			
			DrawActivity(paper,j+1,ActivitiesArray[j]);
		}
		
	
	}
	

}
function DrawElipse(paper,y){
	if(isIfElse == 0){
	var d = "M "+(width/2)+","+(-40+100*y)+" L "+(width/2)+","+(10+100*y);
	paper.path(d);
	}
	paper.ellipse(50, 25, 50, 25).translate(width/2-50,10+100*y).attr({fill: '#D4FF5F'});
	paper.text(width/2, 35+100*y, ReformatText("START")).attr({fill: '#000000',"font-size": 14, "font-family": "Arial, Helvetica, sans-serif"});
	
}
function DrawLoopActivities(paper,y)
{
	paper.text(width/2+ 110*2, 100*y+40, ReformatText("Repeat (10) times")).attr({fill: '#000000',"font-size": 12, "font-family": "Arial, Helvetica, sans-serif"});
	paper.rect(0, 0, 110*3, 60,8).translate(width/2-55*3,5+100*y).attr({fill: '#D4FF5F'});
	DrawSubActivity(paper,y,-1);
	DrawSubActivity(paper,y,0);
	DrawSubActivity(paper,y,1);
}


function DrawIfElseCondition(paper,y){
	DrawCondition(paper,y);
	DrawCondActivities(paper,y+1,-2);
	DrawCondActivities(paper,y+1,2);
	isIfElse = 1;
}
function DrawCondActivities(paper,y,offset)
{
	if(offset>0){
			paper.text((width+offset*110)/2, 100*y-30, ReformatText("IF NOT")).attr({fill: '#000000',"font-size": 12, "font-family": "Arial, Helvetica, sans-serif"});

	}else{
			paper.text((width+offset*110)/2, 100*y-30, ReformatText(" IF YES")).attr({fill: '#000000',"font-size": 12, "font-family": "Arial, Helvetica, sans-serif"});

	}
	var d = "M "+(width/2)+","+(-40+100*y)+" L "+(width/2+offset*110)+","+(10+100*y);
	paper.path(d);
	paper.rect(0, 0, 110*3, 60).translate(width/2-55*3+offset*110,5+100*y).attr({fill: '#c0c0c0'});
	DrawCondSubActivity(paper,y,-1+offset);
	DrawCondSubActivity(paper,y,0+offset);
	DrawCondSubActivity(paper,y,1+offset);
	var d = "M "+(width/2)+","+(100*y+50+55)+" L "+(width/2+offset*110)+","+(10+100*y+55);
	paper.path(d);
}
function DrawCondSubActivity(paper,y,number)
{

	paper.rect(0, 0, 100, 50).translate(width/2-50 + 110*number,10+100*y).attr({fill: '#9cf'});
	paper.text(width/2 + 110*number, 35+100*y, ReformatText("This should be inside it and This should be inside itshould be inside it")).attr({fill: '#000000'});
}


function DrawIfCondition(paper,y){
	DrawCondition(paper,y);

	paper.text(width/2+20, 100*y+80, ReformatText(" IF YES")).attr({fill: '#000000',"font-size": 12, "font-family": "Arial, Helvetica, sans-serif"});
	DrawActivities(paper,y+1);
}

function DrawCondition(paper,y)
{
	if(isIfElse == 0){
	var LengthLine = "M "+(width/2)+","+(-40+100*y)+" L "+(width/2)+","+(10+100*y);
	paper.path(LengthLine);
	}
	var d = "M "+(width/2-75)+","+(35+100*y)+" L "+(width/2)+","+(10+100*y)+" L "+(width/2+75)+","+(35+100*y)+" L "+(width/2)+","+(60+100*y)+" L "+(width/2-75)+","+(35+100*y)+"";
	 var condition = paper.path(d);
	 condition.attr("fill", "#E8E053");
	 paper.text(width/2, 35+100*y, ReformatText("If(Say 'I am cool')")).attr({fill: '#000000',"font-size": 9, "font-family": "Arial, Helvetica, sans-serif"});
}

function DrawActivity(paper,y,ActText)
{
	if(isIfElse == 0){
	var d = "M "+(width/2)+","+(-40+100*y)+" L "+(width/2)+","+(10+100*y);
	paper.path(d);
	}
	paper.rect(0, 0, 100, 50).translate(width/2-50,10+100*y).attr({fill: '#9cf'});
	paper.text(width/2, 35+100*y, ReformatText(ActText)).attr({fill: '#000000'});
}
function DrawSubActivity(paper,y,number,ActText)
{
	if(isIfElse == 0){
	var d = "M "+(width/2)+","+(-40+100*y)+" L "+(width/2)+","+(10+100*y);
	paper.path(d);
	}
	paper.rect(0, 0, 100, 50).translate(width/2-50 + 110*number,10+100*y).attr({fill: '#9cf'});
	paper.text(width/2 + 110*number, 35+100*y, ReformatText(ActText)).attr({fill: '#000000'});
}


function DrawActivities(paper,y,ActivitiesText)
{
	SubActivitiesArray = ActivitiesText.split("+");
	paper.rect(0, 0, 110*SubActivitiesArray.length, 60).translate(width/2-55*SubActivitiesArray.length,5+100*y).attr({fill: '#c0c0c0'});
	
	if(SubActivitiesArray.length%2 == 0){
		for(iTemp = Math.ceil(-SubActivitiesArray.length/2) ; iTemp < Math.floor(SubActivitiesArray.length/2);iTemp++){
			DrawSubActivity(paper,y,iTemp+.5,SubActivitiesArray[iTemp+Math.floor(SubActivitiesArray.length/2)]);
		}
	}else{
		for(iTemp = Math.ceil(-SubActivitiesArray.length/2) ; iTemp <= Math.floor(SubActivitiesArray.length/2);iTemp++){
			DrawSubActivity(paper,y,iTemp,SubActivitiesArray[iTemp+Math.floor(SubActivitiesArray.length/2)]);
		}
	}
	
	
}


function ReformatText(input){
	output = "";
	if(input.length>20){
		i = 0;
		for (; i < input.length; i = i+20) {
			output = output+input.substr(i,20)+"\n";
		}
		if(input.length%20>0){
			output = output+input.substr(i,(input.length%20));
		}
	}else{

		output = input;
	}
	return output;
}

function getURLParameters(paramName) 
  {
   var sURL = window.document.URL.toString();
   
   if (sURL.indexOf("?") > 0)
   {
    var arrParams = sURL.split("?"); 
     
    var arrURLParams = arrParams[1].split("&");
    
    var arrParamNames = new Array(arrURLParams.length);
    var arrParamValues = new Array(arrURLParams.length);
    
    var i = 0;
    for (i=0;i<arrURLParams.length;i++)
    {
     var sParam =  arrURLParams[i].split("=");
     arrParamNames[i] = sParam[0];
     if (sParam[1] != "")
      arrParamValues[i] = unescape(sParam[1]);
     else
      arrParamValues[i] = "No Value";
    }
    
    for (i=0;i<arrURLParams.length;i++)
    {
        if(arrParamNames[i] == paramName){
      //alert("Param from activity:"+arrParamValues[i]);
      return arrParamValues[i];
      }
    }
    return "No Parameters Found";
   }
   
 }	
