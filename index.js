 // 判斷裝置
 window.onload= isMobileDevice();
        
 console.log(navigator.userAgent)

 // 宣告
 const hexColor=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
 let hex = document.querySelector('.hex');
 let click = document.querySelector('.click');
 let body = document.querySelector('body');
 let createColor = '';
 let random = '';

 // click在手機裝置文字更改
 if(isMobileDevice()){
     click.innerText='click'
 }
 
 // 監聽事件
 click.addEventListener('click',color);
 
 if(!isMobileDevice()){
     window.addEventListener('keydown',function(e){
    if(e.keyCode===32){color()}
     });
 }      
 
 // function

 function isMobileDevice() {
 const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
 let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
 return isMobileDevice
 }

 function color() {
     createColor='#';
     for(i=0;i<6;i++){
       random = Math.floor(Math.random()*15)
       createColor  += hexColor[random]          
     }
     hex.innerText=createColor;
     body.style.backgroundColor=createColor;
 }
