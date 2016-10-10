window.onload=function () {
	var show=document.getElementById("show");
	var clear=document.getElementById("clear");
	var equal=document.getElementById("equal");
	var minus=document.getElementById("minus");
	var back=document.getElementById("back");
	var fff=document.getElementById("fff");
	var inputString;
	var temp="";
	show.innerHTML="0";

	function bind(target,type,handler){
		if(target.addEventListener){
			target.addEventListener(type,handler,false);
		}
		else{
			target.attachEvent("on"+type,handler);
		}
	}
	
	function cal(e){
		var target=e.target || e.srcElement;
		inputString=target.textContent.toString();

		if(target===clear){
			show.innerHTML="0";
			temp="";
		}
		else if(target===equal){
			var result=temp.split("=");
			console.log(result[0]);
			temp=show.innerHTML=eval(result[0]);
			
		}
		else if(target===minus || target===fff){
			
		}
		else if(target===back){
			if(show.innerHTML!=="0"){
			temp=temp.slice(0,-1);
			show.innerHTML=temp;
			}
		}
		else{
			if(show.innerHTML==="0"){
				show.innerHTML="";
			}
			temp+=inputString;
			show.innerHTML+=target.textContent;
		}
	}
	
	(function init(){
		var btn=document.getElementsByTagName("button");
		for(var i=0;i<btn.length;i++){
			bind(btn[i],"click",cal);
		}
	})();
	
};
