// ==UserScript==
// @name         bilibili小助手
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  去广告 + 自动分享视频获取5经验
// @author       Yuuuuu
// @match        *://bilibili.com/*
// @include      *://www.bilibili.com/video/av*
// @require      https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js
// @grant        none
// ==/UserScript==

//自动分享视频获取5经验
(function() {

    //获取当前av号
    var avId = document.URL;
    avId = avId.match(/\d+/)[0];
    console.log('当前视频AV号：'+avId);
  //获取bili_jct
   var bili_jct = Cookies.get('bili_jct');
  //判断当前时间
  var TimeShare = localStorage.getItem("TimeShare");
  console.log('当前TimeShare的时间为：'+TimeShare);
  var myDate = new Date();
  myDate = myDate.getDate();

  //第一次使用
  if(TimeShare === '' || TimeShare === null  ){
    localStorage.setItem('TimeShare',myDate);
    $.ajax("https://api.bilibili.com/x/web-interface/share/add",{
          data:{'aid':avId,'jsonp':'jsonp','csrf':bili_jct},
          xhrFields: {withCredentials: true},
          type:"POST",
          success:function(res){console.log(res)}
      })
  }else if (TimeShare != myDate){
    localStorage.setItem('TimeShare',myDate);
    $.ajax("https://api.bilibili.com/x/web-interface/share/add",{
          data:{'aid':avId,'jsonp':'jsonp','csrf':bili_jct},
          xhrFields: {withCredentials: true},
          type:"POST",
          success:function(res){console.log(res)}
      })
 }
})()
