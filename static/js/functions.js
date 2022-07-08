function countdown(_date){
    const nowDate = new Date();
    const tillDate = new Date(_date);
    const _temp = tillDate.getTime() - nowDate.getTime();
    let _left = Math.floor(_temp / (1000*60*60*24));
    console.log(_left);
    if(_left <= 0){
        return 0;
    }
    else{
        return _left;
    }
}
export const page = {
    Init: function(){
        this.loadImage = function(){
            const imgTag = document.getElementsByTagName("img");
            for(let i = 0; i < imgTag.length; i++){
                imgTag[i].setAttribute('draggable', 'false');
            }
        }
        this.getUrlValue = function(variable){
            let query = window.location.search.substring(1);
            let vars = query.split("&");
            for (let i=0;i<vars.length;i++) {
               let pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
            }
            return(false);
        }
        this.getBackground = async function(url,imgType = "image/png"){
            let xhr = new XMLHttpRequest();
            xhr.responseType="arraybuffer";
            xhr.open('GET', url, true);
            xhr.onload=function(){
                let result=xhr.response;
                let file = new File([result], "foo."+imgType.match(/\/([A-Za-z]+)/)[1], {
                type: imgType,
                });
                let reader = new FileReader();
                reader.onload = function(evt) {
                    document.getElementsByTagName('body')[0].setAttribute('style','background-image: url(' + evt.target.result + ')');
                };
                reader.readAsDataURL(file)
            }
            xhr.send(null);
        }
    },
    Time: function(){
        this.getTime = function(_displaySecound = false){
            const _date = new Date();
            let _tempTime = '';
            if(_date.getHours() < 10){
                _tempTime += '0';
            }
            _tempTime += _date.getHours() + ':';
            if(_date.getMinutes() < 10){
                _tempTime += '0';
            }
            _tempTime += _date.getMinutes();
            if(_displaySecound == true){
                _tempTime += ':';
                if(_date.getSeconds() < 10){
                    _tempTime += '0';
                }
                _tempTime += _date.getSeconds();
            }
            return _tempTime;
        }
    },
    Net: function(){
        this.getJson = function(_url){
            let xhr = new XMLHttpRequest();
            xhr.open('GET', _url, false);
            xhr.send();
            return JSON.parse(xhr.responseText);
        }
    },
    Cookie: function(){
        this.set = function(_name,_value,_exdays){
            let d = new Date();
            d.setTime(d.getTime()+(_exdays*24*60*60*1000));
            let expires = "expires="+d.toGMTString();
            document.cookie = _name+"="+_value+"; "+expires;
        }
        this.get = function(_name){
            let name = _name + "=";
            let ca = document.cookie.split(';');
            for(let i=0; i<ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
            }
            return null;
        }
    }
}
const _net = new page.Net();
export const plugin = {
    Parse: function(){
        this.set = function(_json){
            if(typeof(_json) == 'string' && _json != ''){
                _json = JSON.parse(_json);
            }
            this._data = _json;
        }
        this.get = function(_type, _value){
            if(_type == "countdown"){
                console.log(_value);
                if(_value == null){
                    return "Undefined Value!";
                }
                if(_value == 'zk'){
                    const nowDate = new Date();
                    let _year = nowDate.getFullYear();
                    if(nowDate.getMonth() + 1 == 6){
                        if(nowDate.getDate() >= 18){
                            _year += 1;
                        }
                    }
                    else if(nowDate.getMonth() + 1 > 6){
                        _year += 1;
                    }
                    return `<div class="p-box p-countdown"><small>距离 ${_year} 年常州市中考</small><p>还有 ${countdown(_year + "/6/17")} 天</p></div>`;
                }
                if(_value == 'gk'){
                    const nowDate = new Date();
                    let _year = nowDate.getFullYear();
                    if(nowDate.getMonth() + 1 == 6){
                        if(nowDate.getDate() >= 7){
                            _year += 1;
                        }
                    }
                    else if(nowDate.getMonth() + 1 > 6){
                        _year += 1;
                    }
                    return `<div class="p-box p-countdown"><small>距离 ${_year} 年普通高等学校招生全国统一考试</small><p>还有 ${countdown(_year + "/6/7")} 天</p></div>`;
                }
                else{
                    return `<div class="p-box p-countdown"><small>距离 ${_value[0]}</small><p>还有 ${countdown(_value[1])} 天</p></div>`;
                }
            }
            else if(_type == "text"){
                if(_value == null){
                    return "Undefined Value!";
                }
                else{
                    return "<div style=\"word-break: break-all;\">" + _value[0] + "</div>";
                }
            }
            else if(_type == "usd"){
                const _result = _net.getJson("https://www.mxnzp.com/api/exchange_rate/aim?from=USD&to=CNY&app_id=cnk8fosimfgcpccm&app_secret=c3doWTdnZmtnbVg3eGJ1ekNmL1BrUT09")["data"]["price"];
                return `<div class="p-card p-usd"><p>USD</p><h1>1.0000</h1><p>CNY</p><h1>${_result}</h1></div>`;
            }
            else if(_type == "img"){
                if(_value == null){
                    return "Undefined Value!";
                }
                return `<img class="p-img" src="${_value[0]}">`;
            }
            else if(_type == "aword"){
                if(_value == null){
                    _value = "i";
                }
                const _result = _net.getJson(`https://v1.hitokoto.cn/?c=${_value[0]}&encode=json&charset=utf-8`);
                let _fromWho = _result["from_who"] + " - ";
                if(_result["from_who"] == null){
                    _fromWho = "";
                }
                return `<div class="p-box"><h2>${_result["hitokoto"]}</h2><small>来自 ${_fromWho}《${_result["from"]}》</small></div>`;
            }
            else if(_type == "aword-grass"){
                if(_value == null){
                    _value = "i";
                }
                const _result = _net.getJson(`https://192.168.9.110:9000/api/v1/aword?type=${_value}`);
                let _fromWho = _result["data"]["author"];
                if(["data"]["author"] == null){
                    _fromWho = "";
                }
                return `<div class="p-box"><h2>${_result["data"]["hitokoto"]}</h2><small>来自 ${_fromWho}</small></div>`;
            }
            else{
                return "Undefined Type!";
            }
        }
        this.write = function(_selector){
            let _tempData = "";
            if(this._data == null){
                return;
            }
            const pluginBox = document.querySelectorAll(_selector);
            for(let i = 0; i < this._data.length; i++){
                _tempData += '<div class="card" id="' + this._data[i]['id'] + '">\n<div class="title">' + this._data[i]['title'] + '</div>\n<div class="content">\n' + this.get(this._data[i]['type'], this._data[i]['value']) + '\n</div>\n</div>';
            }
            for(let i = 0; i < pluginBox.length; i++){
                pluginBox[i].innerHTML = _tempData;
            }
        }
    }
}
