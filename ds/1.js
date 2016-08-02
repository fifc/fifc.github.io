 var hitNumber=0;
 var timer=null;
 var flag=null;
 function start(){
 
     if(timer==null){
         timer=setInterval(function create(){//开始创建每一个地鼠,
             flag=true;//这里设置flag的原因是用来防止onclick的多次点击累加
             var newButton = document.createElement("input");
             newButton.type="button";
             newButton.value="DS";
             newButton.style.height="40px";
             newButton.style.width="40px";
             newButton.style.backgroundImage="url(1.jpg)";//给每一个button添加背景图片
             var box = document.getElementById("bgDiv");
             box.appendChild(newButton);
             newButton.onclick=hit;
 
             newButton.style.marginLeft=randomX();
             newButton.style.marginTop=randomX();
 
             setTimeout(function(){
                 box.removeChild(newButton);
             },1000);
         },2000);
     }
 
 }
 function stop(){//停止打地鼠,但是这里我在下边进行了一个结束时弹出一个结语框
     clearInterval(timer);
     var tip=document.createElement("div");
     tip.style.height="100px";
     tip.style.width="200px";
     tip.style.background="red";
     var box = document.getElementById("bgDiv");
     box.appendChild(tip);
     tip.style.margin="0 auto";
     tip.style.color="white";
     tip.style.fontSize="20px";
     tip.style.textAlign="center";
     tip.style.lineHeight="100px";
     tip.innerHTML="Score: "+hitNumber
 }
 function randomX(){
     var leftLength=Math.floor(Math.random()*360)+"px";
     return leftLength;
 }
 function randomY(){
     var topLength=Math.floor(Math.random()*360)+"px";
     return topLength;
 }
 function hit(){//当点击地鼠时,进行打击次数的累加
     if(flag){
         flag=false;
         hitNumber++;
         //var hit1=document.getElementById("event.target.id");
         var text1=document.getElementById("number");
         text1.innerHTML=hitNumber;
     }
 
 }
