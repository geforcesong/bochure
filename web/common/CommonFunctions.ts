import * as express from "express";
import * as MobileDetect from "mobile-detect";

class CommonFunctions {
    public static checkIsBrowser(req: express.Request): boolean {
        const userAgent = CommonFunctions.getUserAgent(req);
        var isBot = (userAgent.indexOf("bot") != -1 || userAgent.indexOf("slurp") != -1 || userAgent.indexOf("ia_archiver") != -1 || userAgent.indexOf("teoma") != -1 || userAgent.indexOf("curl") != -1 || userAgent.indexOf("gamespy") != -1 || userAgent.indexOf("grub") != -1 || userAgent.indexOf("scooter") != -1 || userAgent.indexOf("wget") != -1 || userAgent.indexOf("yahoo") != -1 || userAgent.indexOf("baiduspider") != -1 || userAgent.indexOf("healthchecker") != -1 || userAgent.indexOf("jikespider") != -1);
        var isBrowser = (userAgent.indexOf("msie") != -1 || userAgent.indexOf("firefox") != -1 || userAgent.indexOf("safari") != -1 || userAgent.indexOf("netscape") != -1 || userAgent.indexOf("pie") != -1 || userAgent.indexOf("konqueror") != -1 || userAgent.indexOf("gecko") != -1 || userAgent.indexOf("mozilla") != -1 || userAgent.indexOf("palmos") != -1 || userAgent.indexOf("applewebkit") != -1 || userAgent.indexOf("opera") != -1 || userAgent.indexOf("psp") != -1 || userAgent.indexOf("links") != -1 || userAgent.indexOf("w3m") != -1 || userAgent.indexOf("lynx") != -1);
        return !isBot && isBrowser;
    }

    public static getUserAgent(req: express.Request): string {
        let ua: string = req && req.headers ? req.headers['user-agent'][0] : '';
        if (req && req.headers) {
            if (req.headers['user-agent'].length) {
                ua = req.headers['user-agent'][0];
            } else {
                ua = <string>req.headers['user-agent'];
            }
        }
        return ua.toLowerCase();
    }

    public static getClientIPAddress(req: express.Request): string {
        var ip = (<string>(req.headers['x-forwarded-for'] || '')).split(',')[0] || (req.connection ? req.connection.remoteAddress : '');
        if (ip) ip = ip.replace("::ffff:", "");
        return ip;
    }

    public static getRandomIntInclusive(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public static getBrowserInfo(req: express.Request): Object {
        const ua = CommonFunctions.getUserAgent(req);
        const md = new MobileDetect(ua);
        const browser = {
            isMobile: md ? !!md.mobile() : false,
            isTablet: md ? !!md.tablet() : false,
            isPhone: md ? !!md.phone() : false,
            userAgent: ua,
            isUserBrowser: CommonFunctions.checkIsBrowser(req),
            refererUrl: (req && req.headers && req.headers.referer) ? req.headers.referer : '',
            ip: CommonFunctions.getClientIPAddress(req)
        }
        return browser;
    }
}

export default CommonFunctions;