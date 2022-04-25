"use strict";
if (canOpenInReplit()) {
    window.open(renderReplitUrl("https://replit.com/github"));
}
function canOpenInReplit() {
    var metaTags = document.getElementsByTagName("meta");
    for (var i = 0; i < metaTags.length; i++) {
        var metaTag = metaTags[i];
        if (metaTag.content.toLowerCase().includes("gitlab")) {
            return true;
        }
        if (metaTag.name === "hostname" && metaTag.content.includes("github")) {
            return true;
        }
        if (metaTag.name === "application-name" && metaTag.content.toLowerCase().includes("bitbucket")) {
            return true;
        }
    }
    return false;
}
function renderReplitUrl(replitURL) {
    // const baseURL = `${window.location.protocol}//${window.location.host}`;
    return "".concat(replitURL) + window.location.pathname;
}
