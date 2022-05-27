import { page } from "./functions.js";
const init = page.Init;
const cookie = page.Cookie;
const setting = {
    "s_engine":{
        "se_baidu":"https://baidu.com/s?wd=",
        "se_bing":"https://bing.com/search?q=",
        "se_google":"https://google.com/search?q="
    }
};
const set_se = document.getElementsByName("set-se");
for(let i = 0; i < set_se.length; i++){
    set_se[i].children[0].addEventListener('change', function(){
        for(let i = 0; i < set_se.length; i++){
            if(set_se[i].children[0].checked){
                cookie.set('searchUrl',setting['s_engine'][set_se[i].children[0].id],365);
                console.log(setting['s_engine'][set_se[i].children[0].id]);
            }
        }
    });
}
