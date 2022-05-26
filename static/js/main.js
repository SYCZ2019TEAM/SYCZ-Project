import { page } from "./functions.js";
const init = new page.Init;
const time = new page.Time;
const cookie = new page.Cookie;
init.loadImage();
init.getBackground('./static/img/1920.jpg','image/JPEG');
const clock = setInterval(function(){
    document.getElementsByClassName('time')[0].innerHTML = time.getTime();
}, 50);
const s_button = document.getElementById('search');
const s_box = document.getElementById('box');
s_button.addEventListener('click',function(){
    const content = s_box.value;
    console.log(content);
    if(content != ''){
        window.open('https://bing.com/search?q=' + content,'_self');
    }
});
s_box.addEventListener('keypress',function(e){
    const content = s_box.value;
    let keyCode = null;
    if(e.which) keyCode = e.which;
    else if(e.keyCode) keyCode = e.keyCode;
    if(keyCode == 13) {
        if(content != ''){
            window.open('https://bing.com/search?q=' + s_box.value,'_self');
        }
    };
});
