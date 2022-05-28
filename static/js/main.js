import { page, plugin } from "./functions.js";
const init = new page.Init;
const time = new page.Time;
const cookie = new page.Cookie;
const p = new plugin.Parse;
const defaultPlugin = [
    {
        "id":"zk",
        "title":"中考倒计时",
        "type":"countdown",
        "value":["zk"]
    },
    {
        "id":"zk",
        "title":"高考倒计时",
        "type":"countdown",
        "value":["zk"]
    }
];
let searchUrl = cookie.get("searchUrl");
if(searchUrl == null){
    searchUrl = "https://bing.com/search?q=";
}
cookie.set('searchUrl',searchUrl,365);
let pluginData = cookie.get("pluginData");
if(pluginData == null){
    pluginData = JSON.stringify(defaultPlugin);
}
cookie.set('pluginData',pluginData.replace(/\n/,""),365);
p.set(pluginData);
p.write(".plugin-box");
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
        window.open(searchUrl + content,'_self');
    }
});
s_box.addEventListener('keypress',function(e){
    const content = s_box.value;
    let keyCode = null;
    if(e.which) keyCode = e.which;
    else if(e.keyCode) keyCode = e.keyCode;
    if(keyCode == 13) {
        if(content != ''){
            window.open(searchUrl + s_box.value,'_self');
        }
    };
});
console.log(searchUrl);