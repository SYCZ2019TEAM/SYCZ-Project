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
        "id":"gk",
        "title":"高考倒计时",
        "type":"countdown",
        "value":["gk"]
    }
];
const syczPlugin = [
    {
        "id":"zk",
        "title":"中考倒计时",
        "type":"countdown",
        "value":["zk"]
    },
    {
        "id":"sy",
        "title":"关于实验初中",
        "type":"text",
        "value":["<p>常州市实验初级中学是常州市教育局直属学校，是由具有八十余年悠久历史、优良传统、卓著声誉的原常州市第二十一中学和第二十七中学在1997年8月合并组建而成。</p><p>常州市实验初级中学官网: <a href=\"http://www.sycz.czedu.cn/\">点击进入</a></p>"]
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
if(document.URL.match(/#sycz$/g)){
    pluginData = JSON.stringify(syczPlugin);
}
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