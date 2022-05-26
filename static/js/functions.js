export const page = {
    Init: function(){
        this.loadImage = function(){
            const imgTag = document.getElementsByTagName("img");
            for(var i = 0; i < imgTag.length; i++){
                imgTag[i].setAttribute('draggable', 'false');
            }
        }
        this.getBackground = function(url,imgType = "image/png"){
            var xhr = new XMLHttpRequest();
            xhr.responseType="arraybuffer";
            xhr.open('GET', url, true);
            xhr.onload=function(){
                var result=xhr.response;
                var file = new File([result], "foo."+imgType.match(/\/([A-Za-z]+)/)[1], {
                type: imgType,
                });
                var reader = new FileReader();
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
    Cookie: function(){
        this.setCookie = function(cname,cvalue,exdays){
            var d = new Date();
            d.setTime(d.getTime()+(exdays*24*60*60*1000));
            var expires = "expires="+d.toGMTString();
            document.cookie = cname+"="+cvalue+"; "+expires;
        }
        this.getCookie = function(cname){
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
            }
            return "";
        }
    }
}
