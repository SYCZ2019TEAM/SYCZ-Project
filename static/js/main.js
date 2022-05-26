import { page } from "./functions.js";
const init = new page.Init;
const time = new page.Time;
init.loadImage();
init.getBackground('./static/img/1920.jpg','image/JPEG');
const clock = setInterval(function(){
    document.getElementsByClassName('time')[0].innerHTML = time.getTime();
}, 50);
var s-button = document.getElementById('search');
var s-box = document.getElementById('box');
s-button.addEventListener('click',function(){
    window.open('https://baidu.com/s?wd=' + s-box.value,'_blank');
});
s-box.addEventListener('onkeypress',function(event){
    if(event.KeyCode = 13){
        window.open('https://baidu.com/s?wd=' + s-box.value,'_blank');
    }
});
