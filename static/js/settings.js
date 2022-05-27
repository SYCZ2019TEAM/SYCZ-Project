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
const set_se = document.getElementsByName("s_engine");
console.log(set_se[0].value);
