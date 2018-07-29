;(function ($window, $document){
    'use strict';

    var ANDROID_DEVICE  = "ANDROID_DEVICE";
    var IOS_DEVICE      = "IOS_DEVICE";
    var UNKNOWN_DEVICE  = "UNKNOWN_DEVICE";

    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || $window.opera;
        if (/android/i.test(userAgent)) {
            return ANDROID_DEVICE;
        }
        if (/iPad|iPhone|iPod/.test(userAgent) && !$window.MSStream) {
            return IOS_DEVICE;
        }
        return UNKNOWN_DEVICE;
    }

    var target = {};
    target[ANDROID_DEVICE]  = $document.getElementsByClassName("store-google-play");
    target[IOS_DEVICE]      = $document.getElementsByClassName("store-app-store");
    target[UNKNOWN_DEVICE]  = $document.getElementsByClassName("store-unknown");

    var OPERATING_SYSTEM = getMobileOperatingSystem();
    var footerElements = target[OPERATING_SYSTEM];

    Object.keys(footerElements).forEach(function(element, value) {
        footerElements[element].style.display="block";
    });

})(window, document);
