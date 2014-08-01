/**
    *快捷的cookie插件 version 0.21
    *
    *
    *创建一个即时cookie:
    *$.cookie(name,"value");
    *
    *
    *创建多个cookie:
    *$.cookie({name1:"value1",name2:"value2"});
    *
    *创建一个持续3600秒的cookie
    *$.cookie("name","value",3600);
    *
    *创建多个持续3600秒的cookie:
    *$.cookie({name1:"value1",name2:"value2"},3600);
    *
    *cookie选项:
    *$.cookie("name","value",0,{
    *    path:"/",
    *    domain:"www.test.cn",
    *    secure:false
    *});
    *
    *$.cookie({name1:"value1",name2:"value2"},0,{
    *    path:"/",
    *    domain:"www.test.cn",
    *    secure:false
    *});
    *
    *读取某个cookie
     $.cookie("name");
    *
    *读取所有cookie
    *$.cookie();
    *
    *删除某个cookie
    *$.unCookie("name");
    *
    *删除所有cookie
    *$.unCookie();
    **/
(function($) {
    $.cookie = function(name, val, sec, options) {



        var setCookie = function(data, sec, options) {
            var opts = {
                domain: "",
                path: "",
                secure: false
            };

            $.extend(opts, options);

            var str = "",
                j = 0;



            if (sec > 0) {
                var exDate = new Date();
                exDate.setTime(exDate.getTime() + sec * 1000);
                str += "; expires=" + exDate.toGMTString();
            }

            if (opts.path) {
                str += "; path=" + opts.path;
            }

            if (opts.domain) {
                str += "; domain=" + opts.domain;
            }



            if (opts.secure) {
                str += "; secure";
            }

            var cookieStr = "";
            for (var i in data) {
                cookieStr = encodeURIComponent(i) + "=" + encodeURIComponent(data[i]) + str;
                document.cookie = cookieStr;
                cookieStr = "";
            }


        };

        var readCookie = function(name) {
            var arrCookies = document.cookie.split(";");
            var reg = /([^=^\s]+)=([^=^\s]+)/;
            var cookies = [];


            for (var i = 0; i < arrCookies.length; i++) {


                var ret = arrCookies[i].match(reg);

                if (ret) {

                    cookies[ret[1]] = decodeURIComponent(ret[2]);
                }
            }
            if (name) {
                if (typeof cookies[name] !== "undefined") {
                    return cookies[name];
                } else {
                    return null;
                }
            } else {
                return cookies;
            }
        }

        if (name && $.isPlainObject(name)) {
            var data = name,
                seconds = val,
                options = sec;
            setCookie(data, seconds, options);
        } else if (name && val) {
            var data = Object;
            data[name] = val;
            setCookie(data, sec, options);
        } else if (name && !val && !sec && !options) {
            return readCookie(name);
        } else if (!name && !val && !sec && !options) {
            return readCookie();
        }

    }

    $.unCookie = function(name) {
        var del = function(name) {
            var date = new Date();
            date.setTime(date.getTime() - 10000);
            document.cookie = name + "=null; expires=" + date.toGMTString();
        }
        if (name) {
            del(name);
        } else {
            var arrCookies = document.cookie.split(";");
            var reg = /([^=^\s]+)=[^=^\s]+/;
            var cookies = [];
            for (var i in arrCookies) {
                var ret = arrCookies[i].match(reg);
                var k = ret[1];
                del(k);
            }
        }

    }
})(jQuery)
