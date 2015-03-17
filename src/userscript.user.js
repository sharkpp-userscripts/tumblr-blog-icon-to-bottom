// ==UserScript==
// @name        Tumblr. blog icon to bottom
// @namespace   http://www.sharkpp.net/
// @version     0.2
// @description Tumblr. blog icon to bottom in reblog form
// @author      sharkpp
// @copyright   2015, sharkpp
// @license     MIT License
// @include     https://www.tumblr.com/dashboard*
// @include     https://www.tumblr.com/reblog/*
// @include     https://www.tumblr.com/blog/*
// @include     https://www.tumblr.com/tagged/*
// @include     https://www.tumblr.com/search/*
// ==/UserScript==
(function ()
{
    var blogs = [];
    var evaluate = function (xpath, resultOnce) {
        resultOnce = undefined == typeof resultOnce ? false : resultOnce;
        var items = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
        return resultOnce ? (items.snapshotLength ? items.snapshotItem(0) : null)
                          : items;
    };
    var fn = function () {
            var postContainer = evaluate('//*[@class="post-container"]', true);
            if (postContainer &&
                !postContainer.getAttribute('data-sharkpp-icon-bottom'))
            {
                postContainer.setAttribute('data-sharkpp-icon-bottom', true);
                setTimeout(function(){
                   var elm = evaluate('//*[@class="post-margin"]', true);
                        elm.style.cssText = 'bottom:0; top:initial;';
                    var elm = evaluate('//*[contains(@class,\'post-content\')]', true);
                        elm.style.cssText = 'top: 5px;';
                    var elm = evaluate('//*[contains(@class,\'post-header\')]', true);
                        elm.style.cssText = 'position:absolute; bottom:5px; width:340px;';
                    var elm = evaluate('//*[@class="post-form--controls"]/*[@class="controls-container"]', true);
                        elm.style.cssText = 'width:200px; margin-left:340px;';
                }, 250);
             }
            setTimeout(fn, 1000);
        };
    setTimeout(fn, 1000);
})();
