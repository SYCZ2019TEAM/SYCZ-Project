import { page } from "./functions.js";
const init = new page.Init;
const time = new page.Time;
init.loadImage();
init.getBackground('./static/img/1920.jpg','image/JPEG');
const clock = setInterval(function(){
    document.getElementsByClassName('time')[0].innerHTML = time.getTime();
}, 50);
const searchbox = document.getElementsByClassName('searchbox')[0];
const s_button = document.getElementById('search');
const s_box = searchbox.getElementById('box');
s_button.addEventListener('click',function(){
    window.open('https://baidu.com/s?wd=' + s_box.value,'_blank');
});
s_box.addEventListener('onkeypress',function(event){
    if(event.KeyCode = 13){
        window.open('https://baidu.com/s?wd=' + s_box.value,'_blank');
    }
});
