if (canOpenInReplit())
{
    window.open(renderReplitUrl("https://replit.com/github"));
}

function canOpenInReplit(): boolean {
    const metaTags = document.getElementsByTagName("meta");
    for (let i = 0; i < metaTags.length; i++) {
        const metaTag = metaTags[i];
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

function renderReplitUrl(replitURL: string): string {
    // const baseURL = `${window.location.protocol}//${window.location.host}`;
    return `${replitURL}` + window.location.pathname;
}