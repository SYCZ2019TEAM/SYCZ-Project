import { page } from "./functions.js";
const init = new page.Init;
const cookie = new page.Cookie;
const setting = {
    "s_engine":{
        {
            "name":"se_bing",
            "url":"https://bing.com/search?q="
        },
        {
            "name":"se_google",
            "url":"https://google.com/search?q="
        },
        {
            "name":"se_baidu",
            "url":"https://baidu.com/s?wd="
        }
    }
};
const set_se = document.getElementsByName("set-se");
let searchUrl = cookie.get('searchUrl');
if(searchUrl == null){
    searchUrl = "https://bing.com/search?q=";
}
for(let i = 0; i < set_se.length; i++){
    if(setting['s_engine'][i]['url'] == searchUrl){
        set_se[i].children[0].checked = true;
    }
}
for(let i = 0; i < set_se.length; i++){
    set_se[i].children[0].addEventListener('change', function(){
        if(set_se[i].children[0].checked){
            cookie.set('searchUrl',setting['s_engine'][i]['url'],365);
            console.log(setting['s_engine'][i]['url']);
        }
    });
}
