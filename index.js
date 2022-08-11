// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mooc1.sdns.wljy.sdu.edu.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(document).ready(()=>{


        var realDocument = null
        var windowDocument = null

         if(window.domain==null) {

             windowDocument = window.document

        }


        let iconDom = document.querySelector('.ans-job-icon')
        if(iconDom !=null) {

            realDocument = document

            setInterval(()=>{
              document.querySelector("iframe").contentWindow.document.querySelector('button[title="播放视频"]').click()
              let iconDomNew = realDocument.querySelector('.ans-job-icon')
              let targetDom = iconDomNew.parentNode
              if(targetDom.classList.contains('ans-job-finished')) {
                let rightDom = parent.document.querySelector('#right1')
                rightDom.click()
              }

            },1000)

        }else {
        }
    })

})();
