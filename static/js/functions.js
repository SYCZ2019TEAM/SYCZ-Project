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
        this.getTime = function(){
            const _date = new Date();
            let _tempTime = '';
            if(date.getHours() + 1 < 10){
                _tempTime += '0';
            }
            _tempTime += date.getHours() + 1 + ':';
            if(date.getMinutes() + 1 < 10){
                _tempTime += '0';
            }
            _tempTime += date.getMinutes() + 1;
            return _tempTime;
        }
    }
}
