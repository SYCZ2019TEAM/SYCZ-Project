import { page } from "./functions.js";
const init = page.Init;
const cookie = page.Cookie;
const setting = {
    "s_engine":{
        "baidu":"https://baidu.com/s?wd=",
        "bing":"https://bing.com/search?q=",
        "google":"https://google.com/search?q="
    }
};
const set_se = document.getElementsByName("set-se");
for(let i = 0; i < set_se.length; i++){
    set_se[i].children[0].addEventListener('change', function(){
        for(let i = 0; i < set_se.length; i++){
            if(set_se[i].children[0].checked){
                console.log(set_se[i].children[2].innerText);
            }
        }
    });
}
