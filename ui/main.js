/*console.log('Loaded!');
//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
   var interval=setInterval(moveRight,100);
   
};*/
var button = document.getElementById('counter');
var counter=0;
button.onclick = function(){
    request.onreadystatechange=function(){
    if(request.readyState == XMLHttpRequest.DONE){
    if(request.status==200){
   counter=counter+1;
   var span=document.getElementById('count');
   span.innerHTML=counter.toString();
    }
    }
    };  
};