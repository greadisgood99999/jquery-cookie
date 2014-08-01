jquery-cookie
=============

快捷的cookie插件
  

创建一个即时cookie:
  
$.cookie(name,"value");
 

创建多个cookie:
  
$.cookie({name1:"value1",name2:"value2"});
  

  
创建一个持续3600秒的cookie
  
$.cookie("name","value",3600);
  

  
创建多个持续3600秒的cookie:
  
$.cookie({name1:"value1",name2:"value2"},3600);
  

  
cookie选项:
  
$.cookie("name","value",0,{
  
    path:"/",
  
    domain:"www.test.cn",
  
    secure:false
  
});
  

  
$.cookie({name1:"value1",name2:"value2"},0,{
  
    path:"/",
  
    domain:"www.test.cn",
  
    secure:false
  
});
  

  
读取某个cookie
     $.cookie("name");
  

  
读取所有cookie
  
$.cookie();
  

  
删除某个cookie
  
$.unCookie("name");
  

  
删除所有cookie
  
$.unCookie();