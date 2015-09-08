var width = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;
		width= width -100;

var isIfElse = 0;
window.onload = function() {

    var paper = new Raphael(document.getElementById('canvas_container'), width, 1500);
	//DrawActivity(paper,0);

	//DrawActivities(paper,0);
	DrawActivity(paper,0);
	DrawActivity(paper,1);
	DrawActivity(paper,2);
	DrawActivities(paper,3);
	DrawIfCondition(paper,4);

	DrawIfElseCondition(paper,6);


	DrawLoopActivities(paper,8);
	if(isIfElse == 1){
		isIfElse = 0;
	}

}
function DrawLoopActivities(paper,y)
{
	paper.rect(0, 0, 110*3, 60,8).translate(width/2-55*3,5+100*y).attr({fill: '#ffff00'});
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

	paper.text(width/2+20, 100*y+80, ReformatText("then")).attr({fill: '#000000',"font-size": 12, "font-family": "Arial, Helvetica, sans-serif"});
	DrawActivities(paper,y+1);
}

function DrawCondition(paper,y)
{
	if(isIfElse == 0){
	var LengthLine = "M "+(width/2)+","+(-40+100*y)+" L "+(width/2)+","+(10+100*y);
	paper.path(LengthLine);
	}
	var d = "M "+(width/2-50)+","+(35+100*y)+" L "+(width/2)+","+(10+100*y)+" L "+(width/2+50)+","+(35+100*y)+" L "+(width/2)+","+(60+100*y)+" L "+(width/2-50)+","+(35+100*y)+"";
	 var condition = paper.path(d);
	 condition.attr("fill", "#F4A460");
	 paper.text(width/2, 35+100*y, ReformatText("If(Say 'I am cool')")).attr({fill: '#000000',"font-size": 9, "font-family": "Arial, Helvetica, sans-serif"});
}

function DrawActivity(paper,y)
{
	if(isIfElse == 0){
	var d = "M "+(width/2)+","+(-40+100*y)+" L "+(width/2)+","+(10+100*y);
	paper.path(d);
	}
	paper.rect(0, 0, 100, 50).translate(width/2-50,10+100*y).attr({fill: '#9cf'});
	paper.text(width/2, 35+100*y, ReformatText("This should be inside it and This should be inside itshould be inside it")).attr({fill: '#000000'});
}
function DrawSubActivity(paper,y,number)
{
	if(isIfElse == 0){
	var d = "M "+(width/2)+","+(-40+100*y)+" L "+(width/2)+","+(10+100*y);
	paper.path(d);
	}
	paper.rect(0, 0, 100, 50).translate(width/2-50 + 110*number,10+100*y).attr({fill: '#9cf'});
	paper.text(width/2 + 110*number, 35+100*y, ReformatText("This should be inside it and This should be inside itshould be inside it")).attr({fill: '#000000'});
}


function DrawActivities(paper,y)
{

	paper.rect(0, 0, 110*3, 60).translate(width/2-55*3,5+100*y).attr({fill: '#c0c0c0'});
	DrawSubActivity(paper,y,-1);
	DrawSubActivity(paper,y,0);
	DrawSubActivity(paper,y,1);
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
