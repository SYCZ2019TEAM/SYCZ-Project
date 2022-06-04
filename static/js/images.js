import { page } from "./function.js";
const _net = new page.Net();
const _init = new page.Init();
let _tag = "";
if(_init.getUrlValue("tag") != false){
    _tag = `&tag=${_init.getUrlValue("tag")}`;
}
let _r18 = "0";
if(_init.getUrlValue("r18") != false){
    _r18 = `${_init.getUrlValue("r18")}`;
}
const _result = _net.getJson(`https://api.lolicon.app/setu/v2?proxy=p.luoli.icu&r18=${_r18}${_tag}`);
const _data = _result["data"];
if(_data != []){
    window.open(_data[0]["urls"]["original"], "_self"):
}
