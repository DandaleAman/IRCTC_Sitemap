! function(n) {
    var o = {};

    function i(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    i.m = n, i.c = o, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 20)
}([function(e, t, n) {
    "use strict";
    var a = this && this.__assign || function() {
            return (a = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        o = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        s = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Helper = void 0;
    var c = n(1),
        l = n(2),
        u = n(3),
        r = n(4),
        d = n(5),
        i = n(14),
        p = n(15),
        f = n(9),
        n = (g.checkBrowser = function() {
            navigator.appVersion;
            var e, t = navigator.userAgent.toLowerCase(),
                n = navigator.appName,
                o = "" + parseFloat(navigator.appVersion),
                i = parseInt(navigator.appVersion, 10),
                r = 0,
                r = -1 != (e = t.indexOf("opr/")) ? (n = l.KeyMapper.BROWSER_OPERA, o = t.substring(e + 4), 4) : -1 != (e = t.indexOf("opera")) ? (n = l.KeyMapper.BROWSER_OPERA, o = t.substring(e + 6), -1 != (e = t.indexOf("version")) && (o = t.substring(e + 8)), 4) : -1 != (e = t.indexOf("edge/")) || -1 != (e = t.indexOf("edga/")) ? (n = l.KeyMapper.BROWSER_EDGE, o = t.substring(e + 5), 7) : -1 != (e = t.indexOf("edgios/")) ? (n = "Edge", o = t.substring(e + 7), 7) : -1 != (e = t.indexOf("edg/")) ? (n = "Edge", o = t.substring(e + 4), 7) : -1 != (e = t.indexOf("ucbrowser")) ? (n = l.KeyMapper.BROWSER_UCB, o = t.substring(e + 10), 6) : -1 != (e = t.indexOf("msie")) ? (n = l.KeyMapper.BROWSER_IE, o = t.substring(e + 5), 5) : -1 != (e = t.indexOf("crios")) ? (n = l.KeyMapper.BROWSER_CHROME, o = t.substring(e + 6), 1) : -1 != (e = t.indexOf("chrome")) ? (n = l.KeyMapper.BROWSER_CHROME, o = t.substring(e + 7), 1) : -1 != (e = t.indexOf("firefox")) ? (n = l.KeyMapper.BROWSER_FIREFOX, o = t.substring(e + 8), 3) : -1 != (e = t.indexOf("fxios")) ? (n = l.KeyMapper.BROWSER_FIREFOX, o = t.substring(e + 6, e + 11), 3) : -1 != (e = t.indexOf("safari")) && (/mac/.test(t) || /ipad|iphone|ipod/.test(t)) ? (n = l.KeyMapper.BROWSER_SAFARI, o = t.substring(e + 7), -1 != (e = t.indexOf("version")) && (o = t.substring(e + 8)), 2) : (n = l.KeyMapper.BROWSER_OTHER, o = "1", 5);
            return -1 != (e = (o = -1 != (e = o.indexOf(";")) ? o.substring(0, e) : o).indexOf(" ")) && (o = o.substring(0, e)), i = parseInt("" + o, 10), isNaN(i) && (o = "" + parseFloat(navigator.appVersion), i = parseInt(navigator.appVersion, 10)), [n, i, o, r]
        }, g.getBrowserName = function() {
            return this.checkBrowser()[0]
        }, g.getBrowserVersion = function() {
            return this.checkBrowser()[2]
        }, g.getBrowserMajorVersion = function() {
            return this.checkBrowser()[1]
        }, g.getBrowserType = function() {
            return this.checkBrowser()[3]
        }, g.isTablet = function(e) {
            if (/android/.test(e)) {
                if (!1 === /mobile/.test(e)) return !0
            } else if (!0 === /ipad/.test(e)) return !0;
            return !1
        }, g.isMobile = function() {
            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))
        }, g.isIos = function() {
            return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
        }, g.getDeviceType = function() {
            var e = (e = navigator.userAgent).toLowerCase();
            return this.isTablet(e) ? l.KeyMapper.DEVICE_TYPE_TABLET : this.isMobile() ? l.KeyMapper.DEVICE_TYPE_MOBILE : l.KeyMapper.DEVICE_TYPE_DESKTOP
        }, g.getOS = function() {
            var e = navigator.userAgent.toLowerCase();
            return /windows phone/i.test(e) ? 6 : /android/i.test(e) ? 4 : /ipad|iphone|ipod/.test(e) && !window.MSStream ? 5 : /linux/i.test(e) ? 2 : /macintosh|mac os x/i.test(e) ? 3 : /windows|win32/i.test(e) ? 1 : 7
        }, g.getOSName = function() {
            return [l.KeyMapper.OS_WINDOWS, l.KeyMapper.OS_LINUX, l.KeyMapper.OS_MAC, l.KeyMapper.OS_ANDROID, l.KeyMapper.OS_IOS, l.KeyMapper.OS_WP, l.KeyMapper.OS_OTHER][g.getOS() - 1]
        }, g.getPlatform = function() {
            var e = "";
            return 1 == window.is_wp ? e = "wordpress" : 1 == c.Config.notification.isShopify ? e = "shopify" : null != window._izootoModule && 1 == window._izootoModule.isMagento ? e = "magento" : null != window._izootoModule && 1 == window._izootoModule.isOpencart && (e = "opencart"), e
        }, g.getMetaValue = function(e) {
            try {
                for (var t = document.getElementsByTagName("meta"), n = 0; n < t.length; n++)
                    if (t[n].getAttribute("name") === e || t[n].getAttribute("property") === e) return t[n].getAttribute("content")
            } catch (e) {}
            return ""
        }, g.endPointParamExtract = function(e) {
            var t = "";
            try {
                t = JSON.parse(e).endpoint
            } catch (e) {}
            return {
                ep: t = c.Config.global.browserName == l.KeyMapper.BROWSER_EDGE ? encodeURIComponent(t) : t
            }
        }, g.getEndpoint = function(e) {
            var t = {
                SoftUnsubscribe: ["usub", "sunsub"],
                SoftSubscribe: ["usub", "sunsub"],
                NotImplemented: ["ni", "nimp"],
                SegmentEvents: ["et", "evt"],
                SegmentProperties: ["prp", "prp"],
                TriggerEvent: ["trg", "trg"],
                PersonalProperties: ["pp", "pprp"],
                CustomerIDSynch: ["pp", "idsyn"],
                CustomerIDLogout: ["pp", "clout"],
                last_visit: ["lvi", "lvi"],
                Visitor: ["viz", "viz"],
                ShopifyMapper: ["oth", "spm"],
                GDPRConsent: ["prv", "gdp"],
                FCMMigration: ["enu", "enu"],
                syncAdNetwork: ["cs", "cs"],
                syncNotificationView: ["imp", "wimp"],
                syncAllSubscribersVisit: ["viz", "viz"],
                syncMessenger: ["msngenr", "msngenr"],
                getUUIDFromEp: ["uuid", "uuid"],
                gdprLocationUrl: ["rapi", ""],
                gdprStatusUrl: ["prv", "gdp"],
                shopifyAPI: ["events", "shopifywh1.php"],
                subscriptionValidator: ["ss", "ss.php"],
                supUrl: ["evt", "sup.php"],
                notificationClick: ["clk", "clk"],
                messengerPrompted: ["msngp", "msngp"],
                notificationSent: ["snt", "snt"],
                syncOnsiteClick: ["osclk", "osclk"],
                syncOnsiteView: ["osimp", "osimp"],
                syncOnsiteDismissed: ["osdis", "osdis"],
                syncNewshubView: ["nhwimp", "nhwimp"],
                syncNewshubOpen: ["nhwopn", "nhwopn"],
                syncClientSideChurn: ["csc", "csc"],
                syncEmailSubscription: ["eenp", "eenp"]
            };
            return t[l.KeyMapper.PROMPT_ALLOWED] = ["enp", "enp"], t[l.KeyMapper.ALREADY_GRANTED] = ["enp", "enp"], t[l.KeyMapper.PROMPT_CLOSED] = ["sbp", "ncls"], t[l.KeyMapper.OPTIN_ALLOWED] = ["sbp", "salw"], t[l.KeyMapper.PROMPT_DENIED] = ["sbp", "nblk"], t[l.KeyMapper.ALREADY_DENIED] = ["sbp", "nblk"], t[l.KeyMapper.OPTIN_CLOSED] = ["sbp", "sblk"], t[l.KeyMapper.POPUP_CLOSED] = ["sbp", "swc"], t[l.KeyMapper.PROMPTED] = ["sbpd", "npd"], t[l.KeyMapper.OPTIN_SHOWN] = ["sbpd", "spd"], t[l.KeyMapper.BROWSER_UNSUPPORTED] = ["na", "nsp"], t.hasOwnProperty(e) ? "https://".concat(t[e][0], ".izooto.com/").concat(t[e][1]) : "https://err.izooto.com/err"
        }, g.getTimeDiff = function(e, t) {
            if (!e) return 0;
            e = (e - (new Date).getTime()) / 1e3;
            return null != t && 0 != t || (e /= 60), Math.abs(Math.round(e))
        }, g.urlB64ToUint8Array = function(e) {
            for (var e = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), t = window.atob(e), n = new Uint8Array(t.length), o = 0; o < t.length; ++o) n[o] = t.charCodeAt(o);
            return n
        }, g.getLanguage = function() {
            var e = document.documentElement.lang;
            if ("" == e) try {
                for (var t = document.getElementsByTagName("meta"), n = 0; n < t.length; n++) "content-language" == t[n].getAttribute("http-equiv") && (e = t[n].getAttribute("content"))
            } catch (e) {}
            return e
        }, g.displayLog = function(e, t) {
            e = (window.top != window.self ? "".concat(c.Config.brandingPartner, " Iframe: => ") : "".concat(c.Config.brandingPartner, " => ")).concat(e), 1 === c.Config.debug && (void 0 !== t ? console.warn(e, t) : console.warn(e))
        }, g.throwError = function(e) {
            throw new Error(e)
        }, g.getParamFromUrl = function(e, t) {
            return new URL(e).searchParams.get(t)
        }, g.izParseQuery = function(e) {
            for (var t = {}, n = ("?" === e[0] ? e.substr(1) : e).split("&"), o = 0; o < n.length; o++) {
                var i = n[o].split("=");
                t[decodeURIComponent(i[0])] = decodeURIComponent(i[1] || "")
            }
            return t
        }, g.replaceQueryParam = function(e, t, n) {
            var o = new RegExp("([?|&])" + t + "=.*?(&|$)", "i"),
                i = -1 !== e.indexOf("?") ? "&" : "?";
            return e.match(o) ? e.replace(o, "$1" + t + "=" + n + "$2") : e + i + t + "=" + n
        }, g.getUTMParamsOfUrl = function(e) {
            try {
                var t = (e = void 0 === e ? window.location.href : e).indexOf("?");
                if (0 < t) {
                    var n = e.substring(t + 1),
                        o = g.izParseQuery(n),
                        i = {};
                    return 2 < c.Config.notification.utmKeys.map(function(e, t) {
                        var n = o.hasOwnProperty(e);
                        return n && ("" == e && null == e || (i[c.Config.notification.shortutmKeys[t]] = o[e])), n
                    }).reduce(function(e, t, n) {
                        return t ? e + 1 : e
                    }) ? i : {}
                }
                return {}
            } catch (e) {
                return {}
            }
        }, g.getQuerySting = function(e) {
            try {
                var t, n = [];
                for (t in e) e.hasOwnProperty(t) && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                return n.join("&")
            } catch (e) {}
        }, g.objToParam = function(t) {
            var e = "";
            try {
                e = Object.keys(t).map(function(e) {
                    return e + "=" + t[e]
                }).join("&")
            } catch (e) {}
            return e
        }, g.addMsgReciever = function(t, e) {
            if (void 0 === e && (e = !1), 1 != c.Config.global.msgReceiverExist || e) {
                e || (c.Config.global.msgReceiverExist = 1);
                try {
                    window.addEventListener("message", function(e) {
                        (-1 < e.origin.indexOf(window.location.host) || "https://cdn.izooto.com" == e.origin || -1 < e.origin.indexOf(c.Config.notification.sourceOrigin) || g.isSourceOriginAltInOrigin(e) || -1 < e.origin.indexOf(c.Config.notification.siteUrl) || -1 < c.Config.notification.masterDomain.indexOf(e.origin) || 3 == c.Config.notification.windowType || 7 == c.Config.notification.windowType || 8 == c.Config.notification.windowType) && e.data && t(e)
                    })
                } catch (e) {}
            }
        }, g.isSourceOriginAltInOrigin = function(e) {
            return c.Config.notification.sourceOriginAlt.includes(e.origin)
        }, g.postMessage = function(e, t, n, o) {
            try {
                var i, r;
                null != typeof e && null != t && ((i = {})[t] = void 0 !== n ? n : 1, i.serviceWorkerVersion = o, !d.NotificationHelper.subscriptionSyncedFromSW || t != l.KeyMapper.ALREADY_GRANTED && t != l.KeyMapper.PROMPT_ALLOWED || (i.httpSuccess = !0), (r = {})[l.KeyMapper.MESSAGE] = i, g.postToTargetedWindow(e, r), g.postToTargetedWindow(e, {
                    izootoMsg: {
                        k: t,
                        v: void 0 !== n ? n : 1
                    }
                }))
            } catch (e) {}
        }, g.postToTargetedWindow = function(e, t) {
            "Posting message to ".concat(e, " window : ");
            try {
                "parent" === e ? window.parent.postMessage(JSON.stringify(t), "*") : "opener" === e ? window.opener && window.opener.postMessage(JSON.stringify(t), "*") : e.contentWindow.postMessage(JSON.stringify(t), "*")
            } catch (e) {}
        }, g.addHTML = function(e, t, n) {
            try {
                var o = document.body,
                    i = document.createElement(e);
                return i.setAttribute("id", n || ""), i.innerHTML = t, o.appendChild(i), i
            } catch (e) {
                g.displayLog("Could't add HTML : ", e)
            }
        }, g.removeHTML = function(e) {
            try {
                e.remove()
            } catch (e) {
                g.displayLog("Error while removing HTML", e)
            }
        }, g.addExternalJS = function(o, i, r, e) {
            return new Promise(function(e, t) {
                var n = document.createElement("script");
                n.onload = e, n.onerror = t, n.async = r || !1, n.id = i || "", n.src = o, (document.body || document.head).appendChild(n)
            })
        }, g.checkForFcm = function() {
            var e = g.getBrowserMajorVersion(),
                t = g.getBrowserName();
            return t == l.KeyMapper.BROWSER_UCB && 12 <= e || t == l.KeyMapper.BROWSER_OPERA && 42 <= e || t == l.KeyMapper.BROWSER_EDGE && 17 <= e ? 1 : 0
        }, g.isJSONString = function(e) {
            try {
                JSON.parse(e)
            } catch (e) {
                return !1
            }
            return !0
        }, g.parseToJSON = function(e) {
            try {
                return JSON.parse(e)
            } catch (e) {
                return !1
            }
        }, g.removeHtmlTagsFromString = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.textContent || t.innerText || ""
        }, g.stringToRegex = function(e, t) {
            var n = "";
            return n = "object" == typeof e && 0 < Object.keys(e).length && "" != e[0] ? 1 < Object.keys(e).length ? new RegExp(e[0], e[1]) : new RegExp(e[0]) : n
        }, g.getParsedMethod = function(e) {
            try {
                return new Function("return " + atob(e))()
            } catch (e) {
                g.displayLog("Error while parsing custom module")
            }
        }, g.getDateDiffrenceFromPresent = function(e) {
            try {
                var t = new Date(e),
                    n = new Date,
                    o = Math.abs(t - n) / 1e3;
                return Math.floor(o / 86400)
            } catch (e) {}
        }, g.sleep = function(t) {
            return new Promise(function(e) {
                return setTimeout(e, t)
            })
        }, g.getUUID = function() {
            return o(this, void 0, void 0, function() {
                var t, n;
                return s(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, g.getUUIDFromStorage()];
                        case 1:
                            return "" == (t = e.sent()) && (n = (new Date).getTime(), t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                                var t = (n + 16 * Math.random()) % 16 | 0;
                                return n = Math.floor(n / 16), ("x" == e ? t : 3 & t | 8).toString(16)
                            })), [2, t]
                    }
                })
            })
        }, g.getUUIDFromStorage = function() {
            return o(this, void 0, void 0, function() {
                return s(this, function(e) {
                    return [2, new Promise(function(t, e) {
                        var n = u.StorageManager.getStorage(l.KeyMapper.UUID) || "";
                        p.IndexedDB.getValueFromiDbOptions("uid").then(function(e) {
                            t(e || n), g.syncUUIDMigration(n, e)
                        })
                    })]
                })
            })
        }, g.syncUUIDMigration = function(e, t) {
            e != t && (e && t && (g.UUIDMapper(e, t), u.StorageManager.setStorage(l.KeyMapper.UUID, t)), e || u.StorageManager.setStorage(l.KeyMapper.UUID, t), t || g.setUUIDiDb(e))
        }, g.isUUID = function() {
            return o(this, void 0, void 0, function() {
                return s(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, g.getUUIDFromStorage()];
                        case 1:
                            return "" != e.sent() ? [2, !0] : [2, !1]
                    }
                })
            })
        }, g.setUUID = function() {
            return o(this, void 0, void 0, function() {
                var t;
                return s(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = c.Config.UUID, [4, g.isUUID()];
                        case 1:
                            return e.sent() || (u.StorageManager.setStorage(l.KeyMapper.UUID, t), g.setUUIDiDb(t), i.CookieStorage.setWpCookie("izooto_uid", t)), [2]
                    }
                })
            })
        }, g.setUUIDiDb = function(e) {
            p.IndexedDB.addUpdate("uid", e).then(function(e) {}).catch(function(e) {
                g.displayLog(e)
            })
        }, g.UUIDMapper = function(t, n) {
            var o = g.getEndpoint("FCMMigration");
            t && n && g.getFlagBasedParameter({
                subscriptionMeta: !0,
                subcription: !0
            }).then(function(e) {
                e = a(a({}, e), {
                    oBkey: t,
                    bKey: n
                });
                r.HttpRequest.postForm(o, e).then(function() {}).catch(function(e) {})
            })
        }, g.getUUIDFromEndpoint = function(i) {
            return new Promise(function(t, e) {
                var n = g.getEndpoint("getUUIDFromEp"),
                    o = d.NotificationHelper.subcriptionToObject(i);
                2 == c.Config.notification.subscriptionType && (o = o.endpoint), n = "".concat(n, "?pid=").concat(c.Config.client, "&ep=").concat(o, "&btype=").concat(c.Config.global.browserType), r.HttpRequest.get(n).then(function(e) {
                    e = g.parseToJSON(e);
                    e.hasOwnProperty("id") && "NULL" != e.id && "string" == typeof e.id && t(e.id), t("")
                }).catch(function() {
                    t("")
                })
            })
        }, g.isScreenScrollable = function() {
            try {
                var e = document.body,
                    t = e.parentNode,
                    n = e.scrollHeight - e.clientHeight;
                if (2 <= (n = "CSS1Compat" == document.compatMode ? t.scrollHeight - t.clientHeight : n) / window.screen.availHeight) return !0
            } catch (e) {}
            return g.displayLog("This page is not scrollable!"), !1
        }, g.izootoBrandingHandler = function(e) {
            if (0 == c.Config.branding) try {
                var t, n = e ? e.document.querySelectorAll(".izbranding") : document.getElementsByClassName("izbranding");
                for (t in n) n[t].style.display = "none", g.displayLog("Branding Disabled")
            } catch (e) {}
        }, g.addIFrame = function(o, i, e) {
            return new Promise(function(e, t) {
                try {
                    var n = document.createElement("IFRAME");
                    return n.setAttribute("src", o), n.setAttribute("id", i), n.style.width = "0px", n.style.height = "0px", n.style.border = "0px", n.setAttribute("visibility", "hidden"), n.style.display = "none", n.onload = function() {
                        return e(!0)
                    }, (null != document.body ? document.body : document.head).appendChild(n), n
                } catch (e) {
                    g.displayLog("Unable to subFrame : ", e)
                }
            })
        }, g.setHref = function(e, t) {
            document.querySelector(e).href = t
        }, g.getTimeAgoStringByTimestamp = function(e) {
            var t, n = new Date,
                e = new Date(e),
                e = n.getTime() - e.getTime(),
                e = parseInt(e / 1e3);
            if (!isNaN(e)) {
                if (e <= 60) return "1 min ago ";
                if (60 < e && e < 3600) {
                    var o = Math.round(e / 60);
                    return 1 < o ? o + " mins ago" : o + " min ago"
                }
                if (3600 <= e && e < 86400) {
                    o = Math.round(e / 3600);
                    return 1 < o ? o + " hrs ago" : o + " hr ago"
                }
                return 86400 <= e && e < 2592e3 ? 1 < (t = Math.round(e / 86400)) ? t + " days ago" : "yesterday" : 2592e3 <= e ? 1 < (t = Math.round(e / 2592e3)) ? t + " months ago" : t + " month ago" : void 0
            }
        }, g.hideElement = function(e, t) {
            void 0 === t && (t = window.document);
            try {
                var n = t.querySelector(e);
                n && (n.style.display = "none")
            } catch (e) {
                g.displayLog("Error : While hide element", e)
            }
        }, g.showElement = function(e, t, n) {
            void 0 === t && (t = !0), void 0 === n && (n = window.document);
            try {
                var o = n.querySelector(e);
                o && (o.style.display = t ? "block" : "flex")
            } catch (e) {
                g.displayLog("Error : While show element", e)
            }
        }, g.setCssPropperty = function(e, t, n, o) {
            void 0 === o && (o = window.document);
            try {
                var i = o.querySelector(e);
                i && (i.style[t] = n)
            } catch (e) {
                g.displayLog("Error : While set css property", e)
            }
        }, g.addClass = function(e, t) {
            try {
                (!(e instanceof HTMLElement) && g.getDomElement(e)).classList.add(t)
            } catch (e) {}
        }, g.removeClass = function(e, t) {
            try {
                (!(e instanceof HTMLElement) && g.getDomElement(e)).classList.remove(t)
            } catch (e) {}
        }, g.getFlagBasedParameter = function(i, r) {
            return o(this, void 0, void 0, function() {
                return s(this, function(e) {
                    return [2, new Promise(function(t) {
                        var e, n, o = {};
                        o = {
                            pid: c.Config.client,
                            btype: c.Config.global.browserType,
                            dtype: c.Config.global.deviceType,
                            bver: c.Config.global.browserVer,
                            os: c.Config.global.os
                        };
                        try {
                            null != i && i.subscriptionMeta && (e = {
                                izcid: u.StorageManager.getConfigLocal(l.KeyMapper.IZCID),
                                ht: "https:" == c.Config.global.locationProtocol ? 1 : 0,
                                sw: c.Config.notification.serviceWorkerVersion,
                                pt: c.Config.notification.promptType,
                                pte: c.Config.notification.subscriptionType,
                                ge: c.Config.notification.gdprPrompt.status,
                                tz: (new Date).getTimezoneOffset() + 330,
                                optin: d.NotificationHelper.getOptinDesignType(),
                                ndc: u.StorageManager.getConfigLocal(l.KeyMapper.PROMPT_COUNT, l.KeyMapper.STATS),
                                sdc: u.StorageManager.getConfigLocal(l.KeyMapper.OPTIN_SHOWN_COUNT, l.KeyMapper.STATS)
                            }, o = a(a({}, o), e)), void 0 === r && (r = u.StorageManager.getStorage(l.KeyMapper.PUSH_TOKEN)), null != i && i.subcription && r && (n = d.NotificationHelper.getSubscriptionParameters(r), o = a(a({}, o), n)), t(o)
                        } catch (e) {
                            t(o)
                        }
                    })]
                })
            })
        }, g.removeUndefinedValuesFromObj = function(t) {
            var n = {};
            return Object.keys(t).forEach(function(e) {
                void 0 !== t[e] && "undefined" !== t[e] && "" !== t[e] && (n[e] = t[e])
            }), n
        }, g.getDomElement = function(e, t) {
            return (t = void 0 === t ? window.document : t).querySelector(e)
        }, g.onAnimationOnEnd = function(n, o, i) {
            return void 0 === i && (i = !1), new Promise(function(t) {
                f.NewsHub.isCrios ? t(!0) : (n.addEventListener("animationend", function(e) {
                    i && n.classList.remove(o), t(e)
                }, {
                    once: !0
                }), n.classList.add(o))
            })
        }, g.throttle = function(n, o) {
            void 0 === o && (o = 1500);
            var i = !1;
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                i || (n.apply(void 0, e), i = !0, setTimeout(function() {
                    i = !1
                }, o))
            }
        }, g.setRepeatPromptDelay = function(e, t) {
            var n;
            0 !== e && (n = (n = new Date).setTime(n.getTime() + 60 * e * 1e3), "Setting ".concat(t, " for ").concat(e, " minutes"), u.StorageManager.setConfigLocal(t, n))
        }, g.isRepeatDelayActive = function(e) {
            var t = !1,
                n = new Date,
                o = u.StorageManager.getConfigLocal(e);
            return "" != o && o > n.getTime() && (t = !0, g.displayLog("Wait until ".concat(e, " expire!"))), t
        }, g.syncClick = function(e, t) {
            e = {
                pid: c.Config.client,
                bkey: c.Config.UUID,
                rid: e.id,
                cid: e.cid,
                op: "click"
            };
            t && (e.cs = 1), r.HttpRequest.postForm(g.getEndpoint("notificationClick"), e, !0).then(function() {
                "News hub click sync successfully with ".concat(c.Config.brandingPartner)
            }).catch(function(e) {})
        }, g);

    function g() {}
    t.Helper = n
}, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        a = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Config = void 0;
    var o, l = n(0),
        s = n(5),
        c = n(2),
        i = n(14),
        u = n(19),
        d = izConfig.izootoStatus,
        p = izConfig.promptDesign,
        f = izConfig.gdprPrompt,
        g = izConfig.newsHub,
        y = izConfig.exitIntent,
        m = izConfig.stickyBar,
        h = izConfig.articleShare,
        S = izConfig.CRPSPlaybook,
        b = izConfig.welcomeNotification,
        v = izConfig.recommendArticle,
        w = izConfig.videoPlaybook,
        C = izConfig.welcomePlaybook,
        E = izConfig.tabAbandonment,
        _ = izConfig.hash,
        T = izConfig.convertBlockedUsers,
        M = izConfig.autoSegment,
        P = izConfig.email,
        H = izConfig.adBR,
        n = izConfig.hideOSNOnAds;
    t.Config = (O.setupPath = function() {
        var e, t;
        1 != O.global.deviceType && "" != O.notification.serviceWorkerNameMob && (O.notification.serviceWorkerName = O.notification.serviceWorkerNameMob), O.notification.serviceWorkerPath = O.notification.domainRoot + O.notification.serviceWorkerName, O.notification.manifest = O.notification.domainRoot + O.notification.manifestName, 1 == O.notification.isSdkHttps && ("http:" == O.global.locationProtocol ? O.notification.sourceOrigin = O.notification.sourceOrigin + O.notification.domainRoot + O.notification.htmlName : "" != O.notification.domainRoot && (O.notification.sourceOrigin = O.notification.domainRoot + O.notification.htmlName));
        try {
            !window._izootoModule && 1 != window.is_wp || (O.notification.pluginStatus = null !== (e = izConfig.pluginStatus) && void 0 !== e ? e : 1, 1 == O.notification.pluginStatus && (i.CookieStorage.setWpCookie("b_type", O.global.browserType), i.CookieStorage.setWpCookie("d_type", O.global.deviceType), window._izootoModule && 1 == window._izootoModule.isMagento ? (t = window._izootoModule).isSdkHttps && 1 == t.isSdkHttps && (O.notification.serviceWorkerPath = "/izooto/assets/sw", O.notification.manifest = "/izooto/assets/manifest", O.notification.serviceWorkerScope = "/", i.CookieStorage.setWpCookie("evt_trk", O.notification.evtTracking)) : window._izootoModule && 1 == window._izootoModule.isPrestashop || window._izootoModule && 1 == window._izootoModule.isOpencart || 1 == window.is_wp && (i.CookieStorage.setWpCookie("evt_trk", O.notification.evtTracking), window._izootoModule && window._izootoModule.swPath ? (O.notification.serviceWorkerPath = window._izootoModule.swPath, O.notification.serviceWorkerScope = O.notification.serviceWorkerScope || "/") : O.notification.serviceWorkerPath = O.notification.domainRoot + "/?izooto=sw", O.notification.manifest = O.notification.domainRoot + "/?izooto=manifest")))
        } catch (e) {}
    }, O.onsiteMultiRSSFeedConfigHandler = function(e) {
        var t = 1 == e ? "exitIntent" : "stickyBar",
            n = izConfig[t];
        if (n && n.rfiId && 0 < Object.keys(n.rfiId).length) {
            var o, i = n.rfiId,
                r = O[t].status = 0;
            for (o in i) {
                var a = i[o],
                    s = l.Helper.stringToRegex(a.regex),
                    c = a.hash || o.toString(),
                    a = document.location.pathname;
                if ((0 == r && "" == s || s.test(a) && 0 == r) && (O[t].feedHash = c, O[t].status = n.status, "" != s)) return void(r = 1)
            }
        }
    }, O.multiMessengerConfigHandler = function() {
        if (izConfig.messenger && 0 < Object.keys(izConfig.messenger).length) {
            var e, t = 0;
            for (e in izConfig.messenger) {
                var n = izConfig.messenger[e],
                    o = l.Helper.stringToRegex(n.regex),
                    i = document.location.pathname;
                if ((0 == t && "" == o || o.test(i) && 0 == t) && (O.messenger.status = null !== (i = n.status) && void 0 !== i ? i : 0, O.messenger.pageId = e.toString(), O.messenger.prompt = n.promptDesign || {}, O.messenger.repeatDelay = null !== (i = n.repeatDelay) && void 0 !== i ? i : 0, O.messenger.color = n.color || "blue", O.messenger.size = n.size || "large", O.messenger.buttonTextType = null !== (n = n.btnTextType) && void 0 !== n ? n : 0, "" != o)) return void(t = 1)
            }
        }
    }, O.applyPromptDesign = function() {
        var e;
        O.notification.promptDesign.poweredbysrc = "https://www.izooto.com/campaign/getting-started-with-web-push-notifications-izooto?utm_source=referral&utm_medium=PoweredBy&utm_campaign=" + encodeURIComponent(O.notification.siteUrl), O.brandingPartner != O.defaultBrandingPartner && (O.notification.promptDesign.poweredbysrc = "javascript:void(0);"), (e = O.notification.promptDesign).message || (e.message = "Click on allow to subscribe to notifications"), (e = O.notification.promptDesign).subMessage || (e.subMessage = "Stay updated with the latest happenings on our site"), (e = O.notification.promptDesign).icon || (e.icon = "https://cdnimg.izooto.com/icons/7/bell-icon.png"), (e = O.notification.promptDesign).btn1Txt || (e.btn1Txt = "Later"), (e = O.notification.promptDesign).btn2Txt || (e.btn2Txt = "Allow"), (e = O.notification.promptDesign).position || (e.position = "right"), (e = O.notification.promptDesign).bgColor || (e.bgColor = "#fff"), (e = O.notification.promptDesign).titleForeColor || (e.titleForeColor = "#000000"), (e = O.notification.promptDesign).messageForeColor || (e.messageForeColor = "#999999"), (e = O.notification.promptDesign).btn1bgColor || (e.btn1bgColor = "#e4e4e4"), (e = O.notification.promptDesign).btn1ForeColor || (e.btn1ForeColor = "#686868"), (e = O.notification.promptDesign).btn2bgColor || (e.btn2bgColor = "#1194ff"), (e = O.notification.promptDesign).btn2ForeColor || (e.btn2ForeColor = "#ffffff")
    }, O.gaMigration = function() {
        var e = izConfig.gaId || "",
            t = izConfig.ga || {},
            n = t.id || "",
            o = null !== (i = t.syncWebPush) && void 0 !== i ? i : 0,
            i = null !== (i = t.syncNewsHub) && void 0 !== i ? i : 0;
        O.ga.id = n || e, O.ga.syncWebPush = e ? 1 : o, O.ga.syncNewsHub = O.newsHub.gaId ? 1 : i, O.ga.syncMessenger = null !== (i = t.syncMessenger) && void 0 !== i ? i : 0, O.ga.newsHubEvents = null !== (t = t.newsHubEvents) && void 0 !== t ? t : []
    }, O.init = function() {
        var n, o, i;
        return r(this, void 0, void 0, function() {
            var t;
            return a(this, function(e) {
                switch (e.label) {
                    case 0:
                        return O.brandingPartner = null !== (n = izConfig.brandingPartner) && void 0 !== n ? n : O.defaultBrandingPartner, O.client = null !== (n = izConfig.client) && void 0 !== n ? n : l.Helper.throwError("".concat(O.brandingPartner, ":: Configuration parameter not found (client)")), O.notification.sourceOrigin = null !== (n = izConfig.sourceOrigin) && void 0 !== n ? n : l.Helper.throwError("".concat(O.brandingPartner, ":: Configuration parameter not found (sourceOrigin)")), O.notification.domainRoot = null !== (n = izConfig.domainRoot) && void 0 !== n ? n : l.Helper.throwError("".concat(O.brandingPartner, ":: Configuration parameter not found (domainRoot)")), O.notification.isSdkHttps = null !== (n = izConfig.isSdkHttps) && void 0 !== n ? n : l.Helper.throwError("".concat(O.brandingPartner, ":: Configuration parameter not found (isSdkHttps)")), O.notification.serviceWorkerName = null !== (n = izConfig.serviceWorkerName) && void 0 !== n ? n : l.Helper.throwError("".concat(O.brandingPartner, ":: Configuration parameter not found (serviceWorkerName)")), O.notification.manifestName = null !== (n = izConfig.manifestName) && void 0 !== n ? n : l.Helper.throwError("".concat(O.brandingPartner, ":: Configuration parameter not found (manifestName)")), O.notification.vapidKey || (console.warn("".concat(O.brandingPartner, ":: vapid public key not found")), O.izootoStatus = 0), O.global.browserName = l.Helper.getBrowserName(), O.global.browserType = l.Helper.getBrowserType(), O.global.deviceType = l.Helper.getDeviceType(), O.global.browserVer = l.Helper.getBrowserVersion(), O.global.browserMajorVersion = l.Helper.getBrowserMajorVersion(), O.global.os = l.Helper.getOS(), O.global.platform = l.Helper.getPlatform(), O.notification.windowType = s.NotificationHelper.getWindowType(), O.notification.isAddFcm = l.Helper.checkForFcm(), !O.notification.fcmEnable && 1 != O.notification.isAddFcm || (O.notification.subscriptionType = 1), O.notification.vapidKey && (O.notification.fcmEnable = 0, O.notification.subscriptionType = 2), O.global.browserName == c.KeyMapper.BROWSER_SAFARI && O.global.browserVer < "16" && (O.notification.subscriptionType = 3), O.global.deviceType != c.KeyMapper.DEVICE_TYPE_DESKTOP && (O.notification.promptDesign = null !== (o = izConfig.mobPromptDesign) && void 0 !== o ? o : O.notification.promptDesign, O.notification.promptType = null !== (o = izConfig.mobPromptFlow) && void 0 !== o ? o : O.notification.promptType, O.notification.optInDesignType = null !== (o = izConfig.mobOptInDesignType) && void 0 !== o ? o : O.notification.optInDesignType, O.notification.promptDelay = null !== (o = izConfig.mobPromptDelay) && void 0 !== o ? o : O.notification.promptDelay, O.notification.repeatPromptDelay = null !== (o = izConfig.mobRepeatPromptDelay) && void 0 !== o ? o : O.notification.repeatPromptDelay, O.notification.optInCloseDelay = null !== (o = izConfig.mobOptInCloseDelay) && void 0 !== o ? o : O.notification.optInCloseDelay, O.notification.promptOnScroll = null !== (o = izConfig.mobPromptOnScroll) && void 0 !== o ? o : 0, O.notification.isTriggeredOnScoll = 0), O.applyPromptDesign(), O.setupPath(), O.gaMigration(), O.notification.httpsOverlay = "<style>.iz-branding{color:white;font-size:25px;position:absolute;top:40%;left:28%;z-index:999999!important;width:50%!important}.iz-arrow img{transform:rotate(180deg)}@media screen and (max-width:600px){#izooto_desktop_overlay{display:none;.iz-arrow{width:100%;position:fixed;top:auto;bottom:35%;left:65%;border-radius:0px}.moz-transfer{width:100%;position:fixed;top:auto;bottom:30%;left:65% !important;border-radius:0px}.moz-transfer img{transform:rotate(180deg) !important}.iz-arrow img{transform:rotate(0deg)}.iz-branding{color:white;font-size:larger;position:fixed;top:40%;left:17%;width:100%}}</style><div id='izooto_desktop_overlay' onclick='_izooto.closeHttpsBranding();' style='z-index: 999999999;position: fixed;height: 100%;top: 0px;left: 0px;width: 100%;background: rgba(0, 0, 0, 0.89);'><div class='izoverlay-container'><div class='iz-branding'><div class='iz-text' style='padding-bottom:5px; font-family:Arial; display: -webkit-box; -webkit-line-clamp: 2; text-overflow: ellipsis; overflow: hidden; word-wrap: break-word; -webkit-box-orient: vertical;'>" + O.notification.overlayMessage + "</div><div class='iz-powered-text'><a class='izbranding' href='" + O.notification.promptDesign.poweredbysrc + "' target='_blank' style='cursor: pointer !important;color:#fff!important;font-size: 12px;font-family: Arial;letter-spacing: 0.4px;text-decoration: none;'><span style='color: #9c9c9c;'>Powered by</span> <span>" + O.brandingPartner + "</span></a></div></div></div>", O.notification.httpsBranding = "<style>.iz-branding {z-index: 2147483646;background: #000;opacity: .65;box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.27);border-radius: 2px 0px 0px 2px;letter-spacing: 0.04em;padding: 6px 15px;display: flex;flex-direction: row;align-items: center;justify-content: center;max-width: fit-content;position: fixed;top: 0;right: 0;}.iz-branding .iz-text {font-size: 12px;font-family: Arial;letter-spacing: 0.04em;color: rgb(255 255 255 / 90%);display: flex;flex-direction: row;align-items: center;justify-content: center;}.iz-branding a .iz-brand {font-size: 12px;font-family: Arial;letter-spacing: 0.04em;color: #fff;font-weight:bold;}</style><div class='iz-branding'><div class='iz-text'>Notifications Powered by&nbsp;<a href='" + O.notification.promptDesign.poweredbysrc + "' target='_blank' style='text-decoration: none;color: unset;'><span class='iz-brand'>" + O.brandingPartner + "</span></a></div></div>", t = "desktop", O.global.deviceType == c.KeyMapper.DEVICE_TYPE_DESKTOP ? (u.Notification.isWebPushEnabled = !!O.notification.desktopAllowed, O.newsHub.status = null !== (o = null == g ? void 0 : g.desktopAllowed) && void 0 !== o ? o : O.newsHub.status) : (t = "mobile", u.Notification.isWebPushEnabled = !!O.notification.mobileAllowed, O.newsHub.status = null !== (i = null == g ? void 0 : g.mobileAllowed) && void 0 !== i ? i : O.newsHub.status), O.email.status = null !== (i = null === (i = null == P ? void 0 : P[t]) || void 0 === i ? void 0 : i.status) && void 0 !== i ? i : 0, O.email.type = null !== (i = null === (i = null == P ? void 0 : P[t]) || void 0 === i ? void 0 : i.type) && void 0 !== i ? i : 1, O.email.repeatPromptDelay = null !== (i = null === (i = null == P ? void 0 : P[t]) || void 0 === i ? void 0 : i.repeatPromptDelay) && void 0 !== i ? i : 60, O.exitIntent.titleColor = 4 == O.exitIntent.templateType ? "#fff" : O.exitIntent.titleColor, O.onsiteMultiRSSFeedConfigHandler(1), O.onsiteMultiRSSFeedConfigHandler(2), O.multiMessengerConfigHandler(), s.NotificationHelper.canSupportIOSPush() && s.NotificationHelper.IOSManifestHandler(), t = O.notification, [4, s.NotificationHelper.isSupported()];
                    case 1:
                        return t.isSupported = e.sent(), [2]
                }
            })
        })
    }, O.SDKVersion = "8.13.8", O.izootoStatus = null != d ? d : 1, O.autoSegmentStatus = null != M ? M : 0, O.hashFileName = _ || "", O.defaultBrandingPartner = "iZooto", O.debug = null !== (_ = izConfig.debug) && void 0 !== _ ? _ : 0, O.branding = null !== (_ = izConfig.branding) && void 0 !== _ ? _ : 1, O.promptSequencing = null !== (_ = izConfig.promptSequencing) && void 0 !== _ ? _ : 1, O.hideOSNOnAds = null != n ? n : 1, O.global = {
        isSetCidLoaded: !1,
        isIncoginito: !1,
        isSessionHandled: !1,
        locationProtocol: document.location.protocol,
        msgReceiverExist: 0,
        cookieDomain: null !== (_ = izConfig.cDomain) && void 0 !== _ ? _ : "",
        cookieExpiryDays: 1500,
        cookieSameSite: "SameSite=Lax;",
        browserName: "",
        browserType: 0,
        deviceType: 0,
        browserVer: "",
        browserMajorVersion: 0,
        os: 0,
        platform: "",
        isFrame: window.top != window.self
    }, O.debugger = {
        status: 0,
        err: 0,
        successCode: "color: #228B22",
        errCode: "color: #FF0000",
        infoCode: "background: #ffffcc, color: #222",
        host: document.location.protocol + "//" + document.location.hostname
    }, O.store = {
        subscriberId: !1,
        lastClick: !1,
        lastView: !1,
        syncedEventList: [],
        isNotificationDisabledManually: !1,
        isSoftSubscribeTriggered: !1,
        isTriggerPromptWithDelay: !1,
        isNotificationCalledManually: !1,
        isMDSyncingRequired: !1,
        isSubscriptionLost: !1,
        subscriptionBasedEventNameList: ["event", "trigger", "userProfile", "personalizationProperty", "add_property"]
    }, O.notification = {
        tokenExpire: null !== (_ = izConfig.tokenExpire) && void 0 !== _ ? _ : 86400,
        repeatPromptDelay: null !== (_ = izConfig.repeatPromptDelay) && void 0 !== _ ? _ : 0,
        optInCloseDelay: null !== (_ = izConfig.optInCloseDelay) && void 0 !== _ ? _ : 60,
        sourceOrigin: "",
        domainRoot: "",
        isSdkHttps: 0,
        serviceWorkerName: "",
        htmlName: izConfig.htmlName || "/izooto.html",
        manifestName: "",
        manifest: "",
        subscriptionType: 0,
        fcmToken: "",
        autoPrompt: !0,
        httpsBranding: "",
        swSubscribe: null !== (_ = izConfig.swSubscribe) && void 0 !== _ ? _ : 1,
        overlay: null !== (_ = izConfig.overlay) && void 0 !== _ ? _ : 0,
        overlayMessage: izConfig.overlayMessage || "Click on 'allow' to subscribe to notifications",
        httpsOverlay: "",
        clickOnAllowMsg: izConfig.clickOnAllowMsg || "Click On allow to subscribe to notifications",
        subscribedMsg: izConfig.subscribedMsg || "Subscribed",
        alreadySubscribedMsg: izConfig.alreadySubscribedMsg || "You've already subscribed to notifications.",
        blockedMsg: izConfig.blockedMsg || "Blocked",
        alreadyDeniedMsg: izConfig.alreadyDeniedMsg || "You've blocked notifications from this site.",
        httpsNoRoot: null !== (_ = izConfig.httpsNoRoot) && void 0 !== _ ? _ : 0,
        windowType: 0,
        mobileAllowed: null !== (_ = izConfig.mobileAllowed) && void 0 !== _ ? _ : 1,
        desktopAllowed: null !== (_ = izConfig.desktopAllowed) && void 0 !== _ ? _ : 1,
        allowedKeys: ["bookingurl", "landingurl"],
        webPushId: izConfig.webPushId || "",
        webServiceUrl: izConfig.webServiceUrl || "",
        processPriority: null !== (_ = izConfig.processPriority) && void 0 !== _ ? _ : 0,
        masterDomain: izConfig.masterDomain || "",
        masterDomainPath: izConfig.masterDomainPath || "",
        cdnHost: "cdn.izooto.com",
        siteUrl: izConfig.siteUrl || "",
        promptDelay: null !== (_ = izConfig.promptDelay) && void 0 !== _ ? _ : 0,
        promptType: null !== (_ = izConfig.promptFlow) && void 0 !== _ ? _ : 0,
        defaultOptinDesign: "",
        hidePopup: null === (_ = izConfig.hidePopup) || void 0 === _ || _,
        fullPopUp: null !== (_ = izConfig.fullPopUp) && void 0 !== _ ? _ : 0,
        promptDesign: p || {
            message: "",
            subMessage: "",
            icon: "",
            btn1Txt: "",
            btn2Txt: "",
            position: "",
            bgColor: "",
            titleForeColor: "",
            messageForeColor: "",
            btn1bgColor: "",
            btn1ForeColor: "",
            btn2bgColor: "",
            btn2ForeColor: "",
            poweredbysrc: ""
        },
        optInDesign: izConfig.optInDesign || "",
        dialogDesign: "",
        gdprDialogDesign: "",
        optInSrc: "https://cdn.izooto.com/optin/",
        optInDesignType: null !== (_ = izConfig.optInDesignType) && void 0 !== _ ? _ : "1",
        optinModule: {
            optinType: 1,
            data: ""
        },
        gdprModule: {
            gdprType: 1,
            data: ""
        },
        sourceOriginAlt: izConfig.sourceOriginAlt || "",
        fcmEnable: null !== (_ = izConfig.fcmEnable) && void 0 !== _ ? _ : 0,
        isAddFcm: 0,
        allowedDomain: izConfig.allowedDomain || "",
        serviceWorkerPath: "",
        serviceWorkerScope: izConfig.swScope || "",
        serviceWorkerNameMob: izConfig.serviceWorkerNameMob || "",
        vapidKey: izConfig.vapidPublicKey || "",
        subscriptionObj: {},
        pluginStatus: 0,
        isShopify: null !== (_ = izConfig.isShopify) && void 0 !== _ ? _ : 0,
        sysEvents: null !== (_ = izConfig.sysEvents) && void 0 !== _ ? _ : 1,
        sysEventsFlag: void 0 !== izConfig.sysEvents ? 1 : 0,
        propsTracking: null !== (_ = izConfig.propsTracking) && void 0 !== _ ? _ : 1,
        evtTracking: null !== (_ = izConfig.evtTracking) && void 0 !== _ ? _ : 1,
        userEvents: null !== (_ = izConfig.userEvents) && void 0 !== _ ? _ : 0,
        isTagsEnabled: null !== (_ = izConfig.tagsEnabled) && void 0 !== _ ? _ : 0,
        utmKeys: ["utm_content", "utm_medium", "utm_source", "utm_campaign", "utm_term"],
        shortutmKeys: ["uco", "ume", "uso", "uca", "ute"],
        serviceWorkerVersion: void 0,
        promptOnScroll: null !== (_ = izConfig.promptOnScroll) && void 0 !== _ ? _ : 0,
        isTriggeredOnScoll: 0,
        eventAsTrigger: null !== (_ = izConfig.eventAsTrigger) && void 0 !== _ ? _ : 0,
        eventsToSync: (null === (_ = null === izConfig || void 0 === izConfig ? void 0 : izConfig.webPush) || void 0 === _ ? void 0 : _.syncEvent) || [],
        syncNotificationView: null !== (_ = izConfig.syncNotificationView) && void 0 !== _ ? _ : "",
        syncNotificationClick: null !== (_ = izConfig.syncNotificationClick) && void 0 !== _ ? _ : "",
        syncVisitType: null !== (_ = izConfig.syncVisitType) && void 0 !== _ ? _ : 0,
        isSupported: !0,
        gdprNotAllowed: ["userProfile", "personalizationProperty", "trigger", "event"],
        isGdprAllowed: 1,
        gdprPrompt: {
            status: null !== (_ = null == f ? void 0 : f.status) && void 0 !== _ ? _ : 0,
            type: (null == f ? void 0 : f.type) || 1,
            title: null == f ? void 0 : f.title,
            btn1Txt: null == f ? void 0 : f.btn1Txt,
            btn2Txt: null == f ? void 0 : f.btn2Txt
        },
        syncLimit: {
            evtPerDay: null !== (_ = izConfig.evtPerDay) && void 0 !== _ ? _ : 1e4,
            propsPerDay: null !== (_ = izConfig.propsPerDay) && void 0 !== _ ? _ : 1e4,
            evtPerMonth: null !== (_ = izConfig.evtPerMonth) && void 0 !== _ ? _ : 1e4,
            propsPerMonth: null !== (_ = izConfig.propsPerMonth) && void 0 !== _ ? _ : 1e4
        },
        welcomeNotification: {
            status: null !== (_ = null == b ? void 0 : b.status) && void 0 !== _ ? _ : 0,
            title: (null == b ? void 0 : b.title) || "",
            body: (null == b ? void 0 : b.body) || "",
            icon: (null == b ? void 0 : b.icon) || "",
            url: (null == b ? void 0 : b.url) || "",
            showAfter: null !== (_ = null == b ? void 0 : b.showAfter) && void 0 !== _ ? _ : 0,
            timeout: null !== (_ = null == b ? void 0 : b.clickTimeout) && void 0 !== _ ? _ : 0
        }
    }, O.ga = {
        id: "",
        syncCid: null !== (_ = null === izConfig || void 0 === izConfig ? void 0 : izConfig.syncGACid) && void 0 !== _ ? _ : 0,
        swEvents: null !== (_ = null === izConfig || void 0 === izConfig ? void 0 : izConfig.gaSwEvents) && void 0 !== _ ? _ : 0,
        syncWebPush: 0,
        syncNewsHub: 0,
        newsHubEvents: [],
        syncMessenger: 0,
        subscriptionCallback: [],
        promptDisplayCallback: [],
        oldId: ""
    }, O.messenger = {
        syncPrompt: null !== (_ = null === (_ = izConfig.messengerConf) || void 0 === _ ? void 0 : _.syncPrompt) && void 0 !== _ ? _ : 1,
        status: null !== (_ = izConfig.messengerPromptStatus) && void 0 !== _ ? _ : 0,
        pageId: izConfig.messengerPageId || "",
        repeatDelay: null !== (_ = izConfig.messengerRepeatDelay) && void 0 !== _ ? _ : 0,
        prompt: izConfig.messengerPrompt || {},
        size: "large",
        color: "blue",
        buttonTextType: 0,
        autoPrompt: !0
    }, O.tabAbandonment = {
        status: null !== (_ = null == E ? void 0 : E.status) && void 0 !== _ ? _ : 0,
        timeout: null !== (_ = null == E ? void 0 : E.timeout) && void 0 !== _ ? _ : 6e3,
        pushTimeout: null !== (_ = null == E ? void 0 : E.pushTimeout) && void 0 !== _ ? _ : 3600,
        data: (null == E ? void 0 : E.data) || {},
        counter: 0
    }, O.welcomePlaybook = {
        status: null !== (_ = null == C ? void 0 : C.status) && void 0 !== _ ? _ : 0,
        data: (null == C ? void 0 : C.data) || {}
    }, O.newsHub = {
        title: (null == g ? void 0 : g.title) || "",
        designType: null !== (_ = null == g ? void 0 : g.designType) && void 0 !== _ ? _ : 1,
        mainColor: (null == g ? void 0 : g.mainColor) || "",
        iconType: null !== (_ = null == g ? void 0 : g.iconType) && void 0 !== _ ? _ : 1,
        placement: (null == g ? void 0 : g.placement) || [1, 1],
        allVisitors: null !== (_ = null == g ? void 0 : g.allVisitors) && void 0 !== _ ? _ : 1,
        gaId: (null == g ? void 0 : g.gaId) || "",
        autoWidget: null === (_ = null == g ? void 0 : g.autoWidget) || void 0 === _ || _,
        callOut: null !== (_ = null == g ? void 0 : g.callOut) && void 0 !== _ ? _ : 1,
        callOutTimeout: null != g && g.callOutTimeout && 2 <= g.callOutTimeout && g.callOutTimeout <= 10 ? g.callOutTimeout : 10,
        allowFeed: null !== (_ = null == g ? void 0 : g.allowFeed) && void 0 !== _ ? _ : 0,
        nudgeStatus: null !== (_ = null == g ? void 0 : g.nudgeStatus) && void 0 !== _ ? _ : 1,
        ads: null !== (_ = null == g ? void 0 : g.ads) && void 0 !== _ ? _ : 0,
        adUnit: (null == g ? void 0 : g.adUnit) || "",
        callOutAds: null !== (_ = null == g ? void 0 : g.callOutAds) && void 0 !== _ ? _ : 0,
        callOutAdUnit: (null == g ? void 0 : g.callOutAdUnit) || "",
        triggered: !1,
        status: null !== (_ = null == g ? void 0 : g.status) && void 0 !== _ ? _ : 0,
        templateType: null !== (_ = null == g ? void 0 : g.templateType) && void 0 !== _ ? _ : 2,
        isRSS: null !== (_ = null == g ? void 0 : g.isRSS) && void 0 !== _ ? _ : 0,
        rid: (null == g ? void 0 : g.rid) || "",
        cid: null !== (_ = null == g ? void 0 : g.cid) && void 0 !== _ ? _ : 0,
        rfiId: null !== (_ = null == g ? void 0 : g.rfiId) && void 0 !== _ ? _ : "",
        htmlVersion: {
            1: "3.1",
            2: "1.1"
        }
    }, O.videoDropoff = {
        status: null !== (_ = null == w ? void 0 : w.status) && void 0 !== _ ? _ : 0,
        allowedUrls: (null == w ? void 0 : w.allowedUrls) || []
    }, O.CRPSPlaybook = {
        status: null !== (_ = null == S ? void 0 : S.status) && void 0 !== _ ? _ : 0,
        data: (null == S ? void 0 : S.data) || {},
        isPaidSubscriber: !1
    }, O.exitIntent = {
        status: null !== (_ = null == y ? void 0 : y.status) && void 0 !== _ ? _ : 0,
        mobileAllowed: null !== (_ = null == y ? void 0 : y.mobileAllowed) && void 0 !== _ ? _ : 1,
        desktopAllowed: null !== (_ = null == y ? void 0 : y.desktopAllowed) && void 0 !== _ ? _ : 1,
        title: (null == y ? void 0 : y.title) || " ",
        titleColor: (null == y ? void 0 : y.titleColor) || "#000000",
        bgColor: (null == y ? void 0 : y.bgColor) || "#1194FF",
        onExit: null !== (_ = null == y ? void 0 : y.onExit) && void 0 !== _ ? _ : 0,
        onScrollPercent: null !== (_ = null == y ? void 0 : y.onScrollPercent) && void 0 !== _ ? _ : 0,
        onScroll: null !== (_ = null == y ? void 0 : y.onScroll) && void 0 !== _ ? _ : null !== (o = null == y ? void 0 : y.onScrollPercent) && void 0 !== o ? o : 0,
        onDelay: null !== (o = null == y ? void 0 : y.onDelay) && void 0 !== o ? o : 0,
        onBack: null !== (o = null == y ? void 0 : y.onBack) && void 0 !== o ? o : 1,
        repeatDelay: null !== (o = null == y ? void 0 : y.repeatDelay) && void 0 !== o ? o : 0,
        closeDelay: null !== (o = null == y ? void 0 : y.closeDelay) && void 0 !== o ? o : 60,
        cid: (null == y ? void 0 : y.cid) || 0,
        rid: (null == y ? void 0 : y.rid) || "0",
        featureAdUnit: (null == y ? void 0 : y.featureAdUnit) || "",
        ads: null !== (o = null == y ? void 0 : y.ads) && void 0 !== o ? o : 0,
        adUnit: (null == y ? void 0 : y.adUnit) || "",
        logoURL: (null == y ? void 0 : y.logoURL) || "",
        feedHash: "",
        osnType: 1,
        autoPopup: !0,
        multiAds: (null == y ? void 0 : y.multiAds) || 0,
        adfc: null !== (o = null == y ? void 0 : y.adfc) && void 0 !== o ? o : 1,
        templateType: null !== (o = null == y ? void 0 : y.templateType) && void 0 !== o ? o : 2,
        htmlVersion: {
            1: "3.0",
            2: "1.0",
            3: "1.0",
            4: "1.0"
        },
        adsenceAdClient: "ca-pub-1416813385720292",
        adsenceAdSlot: "7591505742"
    }, O.stickyBar = {
        status: null !== (o = null == m ? void 0 : m.status) && void 0 !== o ? o : 0,
        title: (null == m ? void 0 : m.title) || "You might also like",
        titleColor: (null == m ? void 0 : m.titleColor) || "#FFFFFF",
        mobileAllowed: null !== (o = null == m ? void 0 : m.mobileAllowed) && void 0 !== o ? o : 1,
        desktopAllowed: null !== (o = null == m ? void 0 : m.desktopAllowed) && void 0 !== o ? o : 1,
        bgColor: (null == m ? void 0 : m.bgColor) || "#1194FF",
        repeatDelay: null !== (o = null == m ? void 0 : m.repeatDelay) && void 0 !== o ? o : 0,
        closeDelay: null !== (o = null == m ? void 0 : m.closeDelay) && void 0 !== o ? o : 60,
        cid: (null == m ? void 0 : m.cid) || 0,
        rid: (null == m ? void 0 : m.rid) || "0",
        ads: null !== (o = null == m ? void 0 : m.ads) && void 0 !== o ? o : 0,
        adUnit: (null == m ? void 0 : m.adUnit) || "",
        autoPopup: !0,
        feedHash: "",
        osnType: 2,
        adsenceAdClient: "ca-pub-1416813385720292",
        adsenceAdSlot: "7591505742"
    }, O.articleShare = {
        status: null !== (o = null == h ? void 0 : h.status) && void 0 !== o ? o : 0,
        repeatDelay: null !== (o = null == h ? void 0 : h.repeatDelay) && void 0 !== o ? o : 0,
        closeDelay: null !== (o = null == h ? void 0 : h.closeDelay) && void 0 !== o ? o : 60,
        cid: (null == h ? void 0 : h.cid) || 0,
        rid: (null == h ? void 0 : h.rid) || "0",
        ads: null !== (o = null == h ? void 0 : h.ads) && void 0 !== o ? o : 0,
        adUnit: (null == h ? void 0 : h.adUnit) || "",
        type: 3
    }, O.convertBlockedUsers = {
        status: null !== (o = null == T ? void 0 : T.status) && void 0 !== o ? o : 0,
        triggerType: null !== (o = null == T ? void 0 : T.triggerType) && void 0 !== o ? o : 0,
        promptDelay: null !== (o = null == T ? void 0 : T.promptDelay) && void 0 !== o ? o : 5,
        title: (null == T ? void 0 : T.title) || "",
        message: (null == T ? void 0 : T.message) || "",
        btnText: (null == T ? void 0 : T.btnText) || ""
    }, O.recommendArticle = {
        status: null !== (o = null == v ? void 0 : v.status) && void 0 !== o ? o : 0
    }, O.email = {
        status: 0,
        type: 1,
        repeatPromptDelay: 60,
        dataClientId: (null == P ? void 0 : P.dataClientId) || ""
    }, O.adBR = {
        status: null !== (o = null == H ? void 0 : H.status) && void 0 !== o ? o : 0,
        adUnit: (null == H ? void 0 : H.adUnit) || "",
        logoSrc: (null == H ? void 0 : H.logoSrc) || "",
        rid: (null == H ? void 0 : H.rid) || "",
        cid: (null == H ? void 0 : H.cid) || 0,
        templateId: 1,
        htmlVersion: {
            1: "1.0"
        }
    }, O);

    function O() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.KeyMapper = void 0, t.KeyMapper = {
        OPTIN_SHOWN: "optInShown",
        OPTIN_CLOSED: "optInClosed",
        OPTIN_ALLOWED: "optInAllowed",
        PROMPTED: "prompted",
        PROMPT_CLOSED: "promptclose",
        PROMPT_DENIED: "denied",
        PROMPT_ALLOWED: "allowed",
        SUBSCRIBED: "subscribed",
        ALREADY_GRANTED: "already_granted",
        OLD_SUBSCRIPTION: "old_subscription",
        SUBSCRIBER_REGISTRED: "subscriber_registred",
        ALREADY_DENIED: "already_denied",
        ALREADY_UNSUBSCRIBED: "already_unsubscribed",
        UNSUBSCRIBED: "unsubscribed",
        POPUP_OPEN: "popupOpened",
        POPUP_CLOSED: "popClosed",
        BROWSER_UNSUPPORTED: "browserUnsupported",
        NOTIFICATION_DISABLED: "notificationDisabled",
        REPEAT_DELAY: "repeatDelay",
        MESSENGER_PROMPTED: "messengerPrompted",
        MESSENGER_READY_SHOW: "messengerReadyToLoad",
        MESSENGER_READY: "messengerReady",
        MESSENGER_SUBSCRIBED: "messengerSubscribed",
        ONETAP: "izootoEmail",
        EMAIL_READY: "emailReady",
        EMAIL_INPROGRESS: "emailDisplay",
        EMAIL_CLOSED: "emailClosed",
        EMAIL_DISABLED: "emailDisabled",
        NEWSHUB_READY: "readyToShowNewsHub",
        NEWSHUB_FAILED: "newsHubFailed",
        NEWSHUB_OPEN: "newsHubOpen",
        NEWSHUB_CLOSED: "newsHubClosed",
        NEWSHUB_ANIMATIONEND: "newsHubAnimationEnd",
        EXITINTENT_SHOWN: "exitIntentShown",
        EXITINTENT_CLOSED: "exitIntentClosed",
        STICKYBAR_READY_SHOW: "stickyBarReadyToShow",
        STICKYBAR_SHOWN: "stickyBarShown",
        STICKYBAR_CLOSED: "stickyBarClosed",
        STICKYBAR_VISIBLE: "stickyBarVisible",
        STICKYBAR_HIDDEN: "stickyBarHidden",
        ARTICLESHARE_READY_SHOW: "articleShareReadyToShow",
        ARTICLESHARE_SHOWN: "articleShareShown",
        ARTICLESHARE_CLOSED: "articleShareClosed",
        ONSITE_ADS_ALLOWED: "onsAdsAllowed",
        ONSITE_ADS_REFRESH_COUNT: "onsAdsRefreshCount",
        ADBLOCK_READY_SHOW: "adblockReadyToShow",
        ADBLOCK_CLOSED: "adblockClosed",
        ONETAP_REPEAT_PROMPT_DELAY: "oneTapPromptDelay",
        EMAIL_NOT_SYNCED: "emailNotSynced",
        UUID: "izootoUID",
        PUSH_TOKEN: "izootoPushToken",
        STATS: "izootoStats",
        SYNC: "izootoSync",
        CONFIG: "izootoConfig",
        USER_PROPERTY: "izootoUserProp",
        MASTER_DOMAIN: "izootoMDConfig",
        SESSION: "izootoSession",
        RECOMMEND_ARTICLE: "izootoRecommendArticle",
        MESSENGER: "izootoMessenger",
        ACTIVE_PROMPT: "izootoActivePrompt",
        WP_COOKIE: "izootoWpConfig",
        PROMPT_COUNT: "promptCount",
        OPTIN_SHOWN_COUNT: "optInShownCount",
        DM_SYNC_COUNT: "dmSyncCount",
        EVENT_DAILY: "eventDaily",
        EVENT_MONTHLY: "eventMonthly",
        PROPERTY_DAILY: "propDaily",
        PROPERTY_MONTHLY: "propMonthly",
        PUSH_TOKEN_NOT_SYNCED: "pushTokenNotSynced",
        PERMISSION_STATUS: "permissionStatus",
        REPEAT_PROMPT_DELAY: "notificationPromptDelay",
        GDPR_CONSENT: "gdprStatus",
        TAB_ABANDONMENT: "tabAbandonment",
        IZCID: "IZCID",
        ALT_DOMAIN_STATUS: "altDomainStatus",
        IDB_VERSION: "idbVersion",
        CALLOUT_SHOWN: "calloutShown",
        TAB_ABANDONMENT_PUSH: "tabAbandonmentPush",
        LAST_EVENT_SYNC: "lastEventSync",
        LAST_PROPERTY_SYNC: "lastPropSync",
        FIRST_SESSION: "firstSession",
        CRPS_PLAYBOOK: "crpsPlaybook",
        NH_MARK_ALL_AS_READ: "newsHubMarkAllAsRead",
        SUBSCRIBED_ON: "subscribedOn",
        SESSION_EXPIRY: "expiry",
        SESSION_COUNT: "count",
        MSNGR_REPEAT_PROMPT_DELAY: "promptDelay",
        MSNGR_IS_SUBSCRIBED: "isSubscribed",
        EXITINTENT_DELAY: "exitIntentDelay",
        STICKYBAR_DELAY: "stickyBarDelay",
        SHAREARTICLE_DELAY: "shareArticleDelay",
        NEWSHUB_LASTEST_NOTIFICATION: "nhLatest",
        NEWSHUB_LATEST_OPEN_NOTIFICATION: "nhLastOpened",
        LAST_SYNC_OF_RECOMMEND_ARTICLE: "recommendArticle",
        RECOMMEND_ARTICLE_SYNCED_PATH: "syncedPath",
        MESSAGE: "izootoMsg",
        BROWSER_CHROME: "Chrome",
        BROWSER_SAFARI: "Safari",
        BROWSER_FIREFOX: "Firefox",
        BROWSER_OPERA: "Opera",
        BROWSER_IE: "Microsoft Internet Explorer",
        BROWSER_OTHER: "Other",
        BROWSER_UCB: "Ucb",
        BROWSER_EDGE: "Edge",
        DEVICE_TYPE_DESKTOP: 1,
        DEVICE_TYPE_TABLET: 2,
        DEVICE_TYPE_MOBILE: 3,
        OS_WINDOWS: "windows",
        OS_LINUX: "linux",
        OS_MAC: "mac",
        OS_ANDROID: "android",
        OS_IOS: "ios",
        OS_WP: "wp",
        OS_OTHER: "other_os",
        MASTER_TO_CHILD: "izMasterToChild",
        CHILD_TO_MASTER: "izChildToMaster",
        MASTER_AS_FRAME: "izMasterAsFrame",
        DAILY: "daily",
        MONTHLY: "monthly",
        REQUEST_QUEUE: "requestQueue",
        POST_FORM: "postForm",
        POST_JSON: "postJson",
        INVALID_PAYLOAD: "Invalid Payload",
        SOMETHING_WRONG: "Something wrong",
        IZCIDDOM: "izsetcgid",
        USER_PROP: "userProp",
        SCROLL_DOWN: "downScroll",
        SCROLL_UP: "upScroll",
        SUBSCRIPTION_SYNCED: "synced",
        NUDGEUSER_DELAY: "nudgeuserDelay"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.StorageManager = void 0;
    var C = n(0),
        E = n(1),
        o = n(14),
        a = n(38),
        _ = n(2),
        T = n(21),
        n = (M.updateLastSync = function(e) {
            M.setConfigLocal(e, Date.now(), _.KeyMapper.SYNC)
        }, M.setStorage = function(e, t) {
            var n;
            a.LocalStorage.isLocalStorageSupport() ? (e == _.KeyMapper.PUSH_TOKEN && (n = decodeURIComponent(t), C.Helper.isJSONString(n) && (n = JSON.parse(n)), o.CookieStorage.setWpCookie("push_token", n)), localStorage.setItem(e, t)) : o.CookieStorage.setCookie(e, t)
        }, M.getStorage = function(e) {
            var t = "";
            return null != (t = a.LocalStorage.getLocalStorage(e)) ? e === _.KeyMapper.PUSH_TOKEN ? decodeURIComponent(t) : t : o.CookieStorage.getCookie(e)
        }, M.removeStorage = function(e) {
            o.CookieStorage.removeCookie(e), a.LocalStorage.removeLocalStorage(e)
        }, M.removeConfigLocal = function(e, t) {
            void 0 === t && (t = _.KeyMapper.CONFIG);
            var n = {},
                o = a.LocalStorage.getLocalStorage(t);
            null != (n = "" != o && null != o ? C.Helper.parseToJSON(o) : n).hasOwnProperty(e) && delete n[e], a.LocalStorage.isLocalStorageSupport() && a.LocalStorage.setLocalStorage(t, JSON.stringify(n))
        }, M.setConfigLocal = function(e, t, n) {
            void 0 === n && (n = _.KeyMapper.CONFIG);
            var o = Math.round((new Date).getTime() / 1e3),
                i = {},
                r = a.LocalStorage.getLocalStorage(n);
            (i = "" != r && null != r ? (i = C.Helper.parseToJSON(r)) || {} : i)[e] = null != t && "" !== t ? t : o, a.LocalStorage.isLocalStorageSupport() && a.LocalStorage.setLocalStorage(n, JSON.stringify(i))
        }, M.getConfigLocal = function(e, t) {
            void 0 === t && (t = _.KeyMapper.CONFIG);
            var n = a.LocalStorage.getLocalStorage(t),
                o = {},
                t = "";
            return t = null != (o = "" != n ? (o = C.Helper.parseToJSON(n)) || {} : o) && null != o[e] ? o[e] : t
        }, M.legacyStorageMigration = function() {
            try {
                if (M.getStorage(_.KeyMapper.UUID) || (E.Config.store.isMDSyncingRequired = !0), 1 == M.getConfigLocal("isLegacyStorageMigrated")) return;
                var e = M.getStorage("iztoken");
                e && (M.setStorage(_.KeyMapper.PUSH_TOKEN, e), M.updateLastSync(_.KeyMapper.PUSH_TOKEN));
                var t = M.getConfigLocal("id", "izConf");
                t && M.setStorage(_.KeyMapper.UUID, t);
                var n, o = M.getStorage("izooto");
                o && (E.Config.store.isMDSyncingRequired = !0, o = decodeURIComponent(o), C.Helper.isJSONString(o) && (o = C.Helper.parseToJSON(o), n = {
                    token: JSON.stringify(o["iz_".concat(E.Config.client)].bkey),
                    subscribed_on: o["iz_".concat(E.Config.client)].subscribed_on,
                    uuid: M.getStorage(_.KeyMapper.UUID)
                }, T.MasterDomain.setMasterStorage(n)));
                var i = M.getStorage("izstatus");
                i && (i = decodeURIComponent(i), C.Helper.isJSONString(i) && (i = C.Helper.parseToJSON(i), M.setConfigLocal(_.KeyMapper.PERMISSION_STATUS, i.v)));
                var r = M.getConfigLocal("pmtcount", "izConf");
                r && M.setConfigLocal(_.KeyMapper.PROMPT_COUNT, r, _.KeyMapper.STATS);
                var a = M.getConfigLocal("dscount", "izConf");
                a && M.setConfigLocal(_.KeyMapper.OPTIN_SHOWN_COUNT, a, _.KeyMapper.STATS);
                var s = M.getConfigLocal("IZCID", "izConf");
                s && (M.setConfigLocal(_.KeyMapper.IZCID, s), M.updateLastSync(_.KeyMapper.IZCID));
                var c = M.getStorage("izDl");
                c && (c = decodeURIComponent(c), C.Helper.isJSONString(c) && (c = C.Helper.parseToJSON(c), M.setConfigLocal(_.KeyMapper.REPEAT_PROMPT_DELAY, c.t)));
                var l = M.getConfigLocal("msngrSubscribed", "izConf");
                l && M.setConfigLocal(_.KeyMapper.MSNGR_IS_SUBSCRIBED, l);
                var u, d = M.getConfigLocal("msngrDl", "izSync");
                d && (d *= 1e3, u = (d = new Date(d)).setTime(d.getTime() + 60 * E.Config.messenger.repeatDelay * 1e3), M.setConfigLocal(_.KeyMapper.MSNGR_REPEAT_PROMPT_DELAY, u.getTime()));
                var p = M.getStorage("izup");
                p && M.setStorage(_.KeyMapper.USER_PROPERTY, decodeURIComponent(p));
                var f = M.getStorage("izmd");
                f && M.setConfigLocal(_.KeyMapper.ALT_DOMAIN_STATUS, decodeURIComponent(f));
                var g = M.getStorage("izgdpr");
                g && M.setConfigLocal(_.KeyMapper.GDPR_CONSENT, g);
                var y, m, h, S, b, v, w = M.getConfigLocal("iz_apihc", "izConf");
                w && C.Helper.isJSONString(w) && (w = C.Helper.parseToJSON(w), y = {}, m = new Date, !w.hasOwnProperty("evt_pd") || (h = w.evt_pd) && (h = h.split("#"), y[_.KeyMapper.EVENT_DAILY] = h[1], m.setDate(h[0])), w.hasOwnProperty("evt_pm") && ((S = w.evt_pm) && (S = S.split("#"), y[_.KeyMapper.EVENT_MONTHLY] = S[1], m.setMonth(S[0] - 1)), M.setConfigLocal(_.KeyMapper.LAST_EVENT_SYNC, m.getTime(), _.KeyMapper.SYNC)), !w.hasOwnProperty("prop_pd") || (b = w.prop_pd) && (b = b.split("#"), y[_.KeyMapper.PROPERTY_DAILY] = b[1], m.setDate(b[0])), w.hasOwnProperty("prop_pm") && ((v = w.prop_pm) && (v = v.split("#"), y[_.KeyMapper.PROPERTY_MONTHLY] = v[1], m.setMonth(v[0] - 1)), M.setConfigLocal(_.KeyMapper.LAST_PROPERTY_SYNC, m.getTime(), _.KeyMapper.SYNC)), M.setConfigLocal(_.KeyMapper.DM_SYNC_COUNT, y, _.KeyMapper.STATS)), M.setConfigLocal("isLegacyStorageMigrated", 1)
            } catch (e) {
                M.setConfigLocal("isLegacyStorageMigrated", 1)
            }
        }, M.isSessionStorageSupport = function() {
            return "sessionStorage" in window && null !== window.sessionStorage
        }, M.setSessionStorage = function(e, t) {
            sessionStorage.setItem(e, t)
        }, M.getSessionStorage = function(e) {
            return sessionStorage.getItem(e)
        }, M.removeSessionStorage = function(e) {
            sessionStorage.removeItem(e)
        }, M);

    function M() {}
    t.StorageManager = n
}, function(e, t, n) {
    "use strict";
    var s = this && this.__assign || function() {
            return (s = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        l = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        u = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HttpRequest = void 0;
    var d = n(0),
        i = n(15),
        p = n(2);
    t.HttpRequest = (f.init = function() {
        f.processor(), window.addEventListener("online", f.processor)
    }, f.get = function(o, i, r) {
        return l(this, void 0, void 0, function() {
            return u(this, function(e) {
                return [2, new Promise(function(t, n) {
                    f.create(o, "GET", i, r).then(function(e) {
                        t(e.response)
                    }).catch(function(e) {
                        n(e.status)
                    })
                })]
            })
        })
    }, f.postForm = function(o, i, r) {
        return void 0 === r && (r = !1), l(this, void 0, void 0, function() {
            return u(this, function(e) {
                return [2, new Promise(function(t, n) {
                    f.postRequestHandler(o, i, p.KeyMapper.POST_FORM, r).then(function(e) {
                        t(e.response)
                    }).catch(function(e) {
                        n(e)
                    })
                })]
            })
        })
    }, f.postJSON = function(o, i, r) {
        return void 0 === r && (r = !1), l(this, void 0, void 0, function() {
            return u(this, function(e) {
                return [2, new Promise(function(t, n) {
                    f.postRequestHandler(o, i, p.KeyMapper.POST_JSON, r).then(function(e) {
                        t(e.response)
                    }).catch(function(e) {
                        n(e)
                    })
                })]
            })
        })
    }, f.postRequestHandler = function(i, r, a, s) {
        void 0 === a && (a = p.KeyMapper.POST_FORM), void 0 === s && (s = !1);
        var c = Date.now();
        return new Promise(function(t, n) {
            var e, o = "";
            r = d.Helper.removeUndefinedValuesFromObj(r), 1 == s && f.saveFailedRequest(i, r, a, c), o = a == p.KeyMapper.POST_JSON ? (e = {
                "Content-Type": "application/json"
            }, JSON.stringify(r)) : (e = {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            }, d.Helper.objToParam(r)), f.recursivePostUntilSuccess(i, o, e, f.retryNo).then(function(e) {
                t(e), 1 == s && f.deleteSyncedRequestsFromDb(c)
            }).catch(function(e) {
                n(e)
            })
        })
    }, f.recursivePostUntilSuccess = function(r, a, s, c) {
        return l(this, void 0, void 0, function() {
            var i = this;
            return u(this, function(e) {
                return [2, new Promise(function(n, o) {
                    --c, f.create(r, "POST", a, s).then(function(e) {
                        n(e)
                    }).catch(function(t) {
                        return l(i, void 0, void 0, function() {
                            return u(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return 0 < c ? [4, d.Helper.sleep(f.retrieDelayMs)] : [3, 2];
                                    case 1:
                                        return e.sent(), n(f.recursivePostUntilSuccess(r, a, s, c)), [3, 3];
                                    case 2:
                                        o(t), e.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    })
                })]
            })
        })
    }, f.saveFailedRequest = function(e, t, n, o) {
        i.IndexedDB.addUpdateToTable(p.KeyMapper.REQUEST_QUEUE, {
            url: e,
            data: t,
            type: n,
            key: o,
            retryNo: 0
        }).then(function(e) {
            d.Helper.displayLog(e)
        }).catch(function(e) {
            d.Helper.displayLog(e)
        })
    }, f.processor = function() {
        var e = this;
        i.IndexedDB.getIndexDBData(p.KeyMapper.REQUEST_QUEUE, "all").then(function(a) {
            return l(e, void 0, void 0, function() {
                var n, t, o, i, r;
                return u(this, function(e) {
                    switch (e.label) {
                        case 0:
                            t = function() {
                                var t;
                                return u(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return (t = s({}, n), -1 < (null === (r = t.url) || void 0 === r ? void 0 : r.indexOf("enp.izooto.com"))) ? (f.deleteSyncedRequestsFromDb(t.key), [3, 3]) : [3, 1];
                                        case 1:
                                            return t.hasOwnProperty("type") && !t.hasOwnProperty("isSynced") && (t.type == p.KeyMapper.POST_JSON ? f.postJSON : f.postForm)(t.url, t.data, !1).then(function() {
                                                d.Helper.displayLog("Http Request Re-synced successfully!", t), f.deleteSyncedRequestsFromDb(t.key)
                                            }).catch(function(e) {
                                                f.increaseHttpRetryCount(t.key)
                                            }), [4, d.Helper.sleep(500)];
                                        case 2:
                                            e.sent(), e.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                })
                            }, o = 0, i = a, e.label = 1;
                        case 1:
                            return o < i.length ? (n = i[o], [5, t()]) : [3, 4];
                        case 2:
                            e.sent(), e.label = 3;
                        case 3:
                            return o++, [3, 1];
                        case 4:
                            return [2]
                    }
                })
            })
        }).catch(function(e) {
            d.Helper.displayLog("Error in getting request q", e)
        })
    }, f.increaseHttpRetryCount = function(t) {
        i.IndexedDB.getIndexDBData(p.KeyMapper.REQUEST_QUEUE, t).then(function(e) {
            !e || (e = e).retryNo && (e.retryNo < 10 ? (e.retryNo += 1, i.IndexedDB.addUpdateToTable(p.KeyMapper.REQUEST_QUEUE, e)) : f.deleteSyncedRequestsFromDb(t))
        }).catch(function(e) {})
    }, f.deleteSyncedRequestsFromDb = function(t) {
        return l(this, void 0, void 0, function() {
            return u(this, function(e) {
                return i.IndexedDB.removeKeyFromTable(p.KeyMapper.REQUEST_QUEUE, t), [2]
            })
        })
    }, f.create = function(i, r, a, s) {
        return l(this, void 0, void 0, function() {
            return u(this, function(e) {
                return [2, new Promise(function(e, t) {
                    var n = new XMLHttpRequest;
                    if (n.onreadystatechange = function() {
                            4 == this.readyState && (200 == this.status ? e : t)({
                                status: this.status,
                                response: this.responseText
                            })
                        }, n.open(r, i, !0), s && s.hasOwnProperty("Content-Type") || n.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8"), "object" == typeof s && 0 < Object.keys(s).length)
                        for (var o in s) n.setRequestHeader(o, s[o]);
                    "" != a ? n.send(a) : n.send()
                })]
            })
        })
    }, f.retrieDelayMs = 1e3, f.retryNo = 10, f);

    function f() {}
}, function(e, t, n) {
    "use strict";
    var l = this && this.__assign || function() {
            return (l = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        c = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        g = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        u = this && this.__spreadArray || function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var o, i = 0, r = t.length; i < r; i++) !o && i in t || ((o = o || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
            return e.concat(o || Array.prototype.slice.call(t))
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NotificationHelper = void 0;
    var d = n(0),
        y = n(1),
        p = n(3),
        f = n(4),
        o = n(11),
        m = n(19),
        h = n(15),
        i = n(30),
        S = n(31),
        r = n(32),
        a = n(12),
        s = n(33),
        b = n(2),
        v = n(17),
        w = n(34),
        C = n(21),
        E = n(35),
        _ = n(36),
        T = n(37),
        M = n(9),
        P = n(6);
    t.NotificationHelper = (H.nativeHandler = function() {
        return c(this, void 0, void 0, function() {
            return g(this, function(e) {
                return H.setManifest(), "default" == window.Notification.permission ? (H.brandingOverlayHandler(), H.syncSendChurn(), H.sendEvent(b.KeyMapper.PROMPTED), window.Notification.requestPermission().then(function(e) {
                    H.closeHttpsOverlay(), d.Helper.displayLog("Permission Status : ", e), "granted" == e ? H.permissionGrantedCallback() : e == b.KeyMapper.PROMPT_DENIED ? H.permissionDeniedCallback() : "default" == e && H.sendEvent(b.KeyMapper.PROMPT_CLOSED), p.StorageManager.removeStorage(b.KeyMapper.ACTIVE_PROMPT)
                })) : "granted" == window.Notification.permission ? (H.subscriptionOnAllow = !1, H.permissionAlreadyGrantedCallback()) : window.Notification.permission == b.KeyMapper.PROMPT_DENIED && H.sendEvent(b.KeyMapper.ALREADY_DENIED), [2]
            })
        })
    }, H.permissionAlreadyGrantedCallback = function() {
        return c(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, H.setSubscriberDetailsToIdb(b.KeyMapper.ALREADY_GRANTED)];
                    case 1:
                        return e.sent(), H.permissionStatus = b.KeyMapper.ALREADY_GRANTED, H.subscriptionHandler().then(function(e) {
                            H.sendEvent(b.KeyMapper.ALREADY_GRANTED, JSON.stringify(e)), C.MasterDomain.masterDomainCallback(!0, e)
                        }).catch(function(e) {
                            H.sendEvent(b.KeyMapper.BROWSER_UNSUPPORTED)
                        }), 1 == y.Config.notification.isShopify && i.Shopify.init(), [2]
                }
            })
        })
    }, H.setSubscribeOnActivateFlagIdb = function() {
        return new Promise(function(e, t) {
            var n = {
                status: y.Config.notification.swSubscribe,
                timestamp: Date.now()
            };
            y.Config.notification.swSubscribe ? e(!0) : h.IndexedDB.addUpdate("subscribeOnActivate", n).then(function() {
                e(!0)
            }).catch(function() {
                e(!1)
            })
        })
    }, H.permissionGrantedCallback = function() {
        return c(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, H.setSubscriberDetailsToIdb(b.KeyMapper.PROMPT_ALLOWED)];
                    case 1:
                        return e.sent(), H.permissionStatus = b.KeyMapper.PROMPT_ALLOWED, H.subscriptionHandler().then(function(e) {
                            H.sendEvent(b.KeyMapper.PROMPT_ALLOWED, JSON.stringify(e)), C.MasterDomain.masterDomainCallback(!1, e)
                        }).catch(function(e) {
                            H.sendEvent(b.KeyMapper.BROWSER_UNSUPPORTED)
                        }), [2]
                }
            })
        })
    }, H.setSubscriberDetailsToIdb = function(e) {
        return H.getHTTPSubscriptionParameters(e).then(function(o) {
            return new Promise(function(e, t) {
                var n = {
                    endpoint: d.Helper.getEndpoint(b.KeyMapper.PROMPT_ALLOWED),
                    postData: o
                };
                h.IndexedDB.addUpdate("subscriberDetails", n).then(function() {
                    e(!0)
                }).catch(function() {
                    e(!1)
                })
            })
        })
    }, H.permissionDeniedCallback = function() {
        H.sendEvent(b.KeyMapper.PROMPT_DENIED), d.Helper.displayLog("User denied prompt")
    }, H.promptHandler = function() {
        var n = y.Config.notification.promptType;
        "https:" != y.Config.global.locationProtocol && 1 == y.Config.notification.isSdkHttps && (y.Config.notification.promptType = 1), 3 == y.Config.notification.subscriptionType ? setTimeout(function() {
            H.checkSafariPermission()
        }, 300) : 0 == y.Config.notification.isSdkHttps || y.Config.notification.isSdkHttps && "http:" == y.Config.global.locationProtocol ? (d.Helper.displayLog("Subdomain Process... "), H.getSubDomainPermissionStatus().then(function(e) {
            var t;
            d.Helper.displayLog("Current subdomain status : ", e), 0 == e ? 2 == n ? H.triggerEventHandler(m.Notification.openPopup) : H.promptEventHandler(H.loadOptin) : 1 == e ? (t = p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN), H.sendEvent(b.KeyMapper.ALREADY_GRANTED, t)) : 2 == e && (H.updatePermissionStatus(2), H.sendEvent(b.KeyMapper.ALREADY_DENIED))
        })) : 1 == y.Config.notification.isSdkHttps && ("default" == window.Notification.permission ? (p.StorageManager.removeConfigLocal(b.KeyMapper.PERMISSION_STATUS, b.KeyMapper.SYNC), 0 == n ? H.promptEventHandler(H.nativeHandler) : 1 == n ? H.promptEventHandler(H.loadOptin) : 2 == n && H.triggerEventHandler(H.nativeHandler)) : H.nativeHandler())
    }, H.triggerEventHandler = function(e) {
        y.Config.store.isNotificationCalledManually ? (y.Config.store.isTriggerPromptWithDelay || (y.Config.notification.promptDelay = 0), H.delayHandler(e)) : d.Helper.displayLog("auto prompt false found!")
    }, H.requestSafariPermission = function() {
        H.sendEvent(b.KeyMapper.PROMPTED), H.brandingOverlayHandler();
        try {
            window.safari.pushNotification.requestPermission(y.Config.notification.webServiceUrl, y.Config.notification.webPushId, {
                url: window.location.href
            }, function(e) {
                var t;
                "granted" === e.permission ? (H.closeHttpsOverlay(), t = e.deviceToken, H.sendEvent(b.KeyMapper.PROMPT_ALLOWED, t), d.Helper.displayLog("Granted Key= " + t)) : e.permission === b.KeyMapper.PROMPT_DENIED && (H.closeHttpsOverlay(), H.sendEvent(b.KeyMapper.PROMPT_DENIED))
            })
        } catch (e) {
            H.closeHttpsOverlay()
        }
    }, H.checkSafariPermission = function() {
        var e, t, n;
        "" != y.Config.notification.webPushId && "" != y.Config.notification.webServiceUrl ? (e = "", "safari" in window && "pushNotification" in window.safari && ("default" === (t = window.safari.pushNotification.permission(y.Config.notification.webPushId)).permission ? 0 == (n = y.Config.notification.promptType) ? H.promptEventHandler(H.requestSafariPermission) : 1 == n ? H.promptEventHandler(H.loadOptin) : 2 == n && H.triggerEventHandler(H.requestSafariPermission) : "granted" === t.permission ? (e = t.deviceToken, H.sendEvent(b.KeyMapper.ALREADY_GRANTED, e), d.Helper.displayLog("Already Granted & key= ", e)) : t.permission === b.KeyMapper.PROMPT_DENIED && (H.sendEvent(b.KeyMapper.ALREADY_DENIED), d.Helper.displayLog(b.KeyMapper.PROMPT_DENIED)))) : d.Helper.displayLog("Stopped! Safari certificate not found")
    }, H.delayHandler = function(e) {
        y.Config.notification.promptDelay ? (d.Helper.displayLog("Triggering prompt delay for : ".concat(y.Config.notification.promptDelay, " ms")), setTimeout(e, y.Config.notification.promptDelay)) : e()
    }, H.promptEventHandler = function(e) {
        if (H.isActivePrompt()) d.Helper.displayLog("".concat(y.Config.brandingPartner, " notification off for this device"));
        else {
            if (H.isRepeatPromptDelay()) return H.sendEvent(b.KeyMapper.REPEAT_DELAY);
            var t = function() {
                "complete" == document.readyState ? (d.Helper.displayLog("Calling prompt instantly"), e()) : (d.Helper.displayLog("Wait till web page load completely"), window.addEventListener("load", function() {
                    e()
                }))
            };
            1 == y.Config.notification.promptOnScroll && d.Helper.isScreenScrollable() ? (d.Helper.displayLog("optIn will be shown on page scroll!"), window.addEventListener("scroll", function() {
                H.scrollHandler(t)
            })) : H.delayHandler(t)
        }
    }, H.isRepeatPromptDelay = function() {
        var e, t = !1;
        return y.Config.notification.windowType || (e = new Date, p.StorageManager.getConfigLocal(b.KeyMapper.REPEAT_PROMPT_DELAY) > e.getTime() && (t = !0, d.Helper.displayLog("Wait until repeat prompt delay expire!"))), t
    }, H.triggerPromptHandler = function(e) {
        void 0 === e && (e = !1), y.Config.store.isNotificationCalledManually || (e && (y.Config.store.isTriggerPromptWithDelay = !0), y.Config.store.isNotificationCalledManually = !0, H.promptHandler())
    }, H.getCurrentSubscription = function() {
        return new Promise(function(t, e) {
            try {
                var n = !1;
                H.getSWReadyRegistration().then(function(e) {
                    null !== (e = null == e ? void 0 : e.pushManager) && void 0 !== e && e.getSubscription().then(function(e) {
                        e && (n = JSON.stringify(e)), d.Helper.displayLog("Recovered Subscription : ", n), t(n)
                    })
                }).catch(function(e) {
                    t(n)
                })
            } catch (e) {}
        })
    }, H.getSWRegistration = function() {
        return c(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, navigator.serviceWorker.getRegistration(y.Config.notification.serviceWorkerPath)];
                    case 1:
                        return [2, e.sent()]
                }
            })
        })
    }, H.getSWReadyRegistration = function() {
        return c(this, void 0, void 0, function() {
            var t = this;
            return g(this, function(e) {
                return [2, new Promise(function(a, s) {
                    return c(t, void 0, void 0, function() {
                        var t, n, o, i, r;
                        return g(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t = setTimeout(function() {
                                        s("Cannot get ServiceWorkerRegistration")
                                    }, 2e3), y.Config.notification.httpsNoRoot ? [4, H.getSWRegistration()] : [3, 2];
                                case 1:
                                    return (n = e.sent()) && n instanceof ServiceWorkerRegistration ? "activated" === (null == (o = n.installing || n.waiting || n.active) ? void 0 : o.state) ? a(n) : (i = function() {
                                        "activated" === (null == o ? void 0 : o.state) && (window.clearTimeout(t), o.removeEventListener("statechange", i), a(n))
                                    }, null != o && o.addEventListener("statechange", i)) : s("Cannot get ServiceWorkerRegistration"), [3, 4];
                                case 2:
                                    return r = a, [4, navigator.serviceWorker.ready];
                                case 3:
                                    r.apply(void 0, [e.sent()]), e.label = 4;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                })]
            })
        })
    }, H.getResponseCode = function(e) {
        var t = {};
        t[b.KeyMapper.PROMPT_ALLOWED] = {
            response: "subscribed",
            statuscode: 1
        }, t[b.KeyMapper.SUBSCRIBED] = {
            response: "subscribed",
            statuscode: 1
        }, t[b.KeyMapper.ALREADY_GRANTED] = {
            response: "already subscribed",
            statuscode: 2
        }, t[b.KeyMapper.PROMPT_DENIED] = {
            response: "blocked",
            statuscode: 3
        }, t[b.KeyMapper.ALREADY_DENIED] = {
            response: "already blocked",
            statuscode: 4
        }, t[b.KeyMapper.BROWSER_UNSUPPORTED] = {
            response: "browser not supported",
            statuscode: 5
        }, t[b.KeyMapper.PROMPT_CLOSED] = {
            response: "prompt closed",
            statuscode: 6
        }, t[b.KeyMapper.UNSUBSCRIBED] = {
            response: "soft unsubscribed",
            statuscode: 7
        }, t[b.KeyMapper.ALREADY_UNSUBSCRIBED] = {
            response: "already soft unsubscribed",
            statuscode: 8
        }, t[b.KeyMapper.OPTIN_ALLOWED] = {
            response: "soft subscribed",
            statuscode: 9
        }, t[b.KeyMapper.SUBSCRIBER_REGISTRED] = {
            response: "subscriber reregistered",
            statuscode: 10
        };
        var n = {};
        return n[b.KeyMapper.OPTIN_SHOWN] = {
            response: "soft prompt displayed",
            statuscode: 1
        }, n[b.KeyMapper.OPTIN_CLOSED] = {
            response: "soft prompt closed",
            statuscode: 2
        }, n[b.KeyMapper.PROMPTED] = {
            response: "native prompt displayed",
            statuscode: 3
        }, n[b.KeyMapper.POPUP_OPEN] = {
            response: "prompt window opened",
            statuscode: 4
        }, n[b.KeyMapper.POPUP_CLOSED] = {
            response: "prompt window closed",
            statuscode: 5
        }, void 0 !== t[e] ? t[e] : void 0 !== n[e] ? n[e] : void 0
    }, H.sendEvent = function(n, o) {
        var e = this;
        if (d.Helper.displayLog("Event caught : ", n), P.ChannelEventHandler.event("webPush", n), M.NewsHub.sendEvent(n), H.CBUEvent(n), 1 != y.Config.notification.windowType && 6 != y.Config.notification.windowType) {
            var i = [b.KeyMapper.PROMPT_ALLOWED, b.KeyMapper.SUBSCRIBED, b.KeyMapper.ALREADY_GRANTED, b.KeyMapper.PROMPT_DENIED, b.KeyMapper.ALREADY_DENIED, b.KeyMapper.BROWSER_UNSUPPORTED, b.KeyMapper.PROMPT_CLOSED, b.KeyMapper.UNSUBSCRIBED, b.KeyMapper.ALREADY_UNSUBSCRIBED, b.KeyMapper.OPTIN_ALLOWED],
                r = [b.KeyMapper.OPTIN_SHOWN, b.KeyMapper.OPTIN_CLOSED, b.KeyMapper.PROMPTED, b.KeyMapper.POPUP_OPEN, b.KeyMapper.POPUP_CLOSED],
                a = u([b.KeyMapper.PROMPT_ALLOWED, b.KeyMapper.ALREADY_GRANTED, b.KeyMapper.PROMPT_DENIED], y.Config.notification.eventsToSync, !0);
            n != b.KeyMapper.PROMPT_ALLOWED && n != b.KeyMapper.ALREADY_GRANTED || (H.syncPIDset(), S.GDPR.init(), H.syncHookInDb("syncNotificationView"), H.syncHookInDb("syncNotificationClick")), n == b.KeyMapper.PROMPT_ALLOWED && "" != y.Config.notification.sourceOriginAlt && H.removeSubsriptionFromAlternateDomain(), n != b.KeyMapper.PROMPTED && n != b.KeyMapper.OPTIN_SHOWN || (H.updatePromptCount(n), H.setActivePrompt(5), p.StorageManager.removeStorage(b.KeyMapper.PUSH_TOKEN), 0 != y.Config.notification.repeatPromptDelay && H.setRepeatPromptDelay(y.Config.notification.repeatPromptDelay)), n == b.KeyMapper.OPTIN_CLOSED && 0 != y.Config.notification.optInCloseDelay && H.setRepeatPromptDelay(y.Config.notification.optInCloseDelay), n != b.KeyMapper.PROMPT_DENIED && n != b.KeyMapper.ALREADY_DENIED || (H.syncSendChurn(), H.subscribeOnBlocked()), n == b.KeyMapper.PROMPT_CLOSED && p.StorageManager.removeStorage(b.KeyMapper.ACTIVE_PROMPT), h.IndexedDB.getValueFromiDbOptions("pushToken").then(function(e) {
                var t; - 1 != a.indexOf(n) && (H.isSyncPermissionStatus && H.updatePermissionStatus(n), null != o ? ("object" == typeof o && (o = JSON.stringify(o)), "object" == typeof e && (e = JSON.stringify(e)), t = p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN), e && H.saveSubscritionToStorage(e), o != (e || t) && H.updateSubscriptionTokenForSync(o), n == b.KeyMapper.PROMPT_ALLOWED || n == b.KeyMapper.ALREADY_GRANTED ? H.syncEvent(n, o) : H.syncEvent(n)) : H.syncEvent(n)), -1 != i.indexOf(n) && (t = H.getResponseCode(n), n == b.KeyMapper.ALREADY_GRANTED && (y.Config.store.isSoftSubscribeTriggered && (t = H.getResponseCode(b.KeyMapper.SUBSCRIBED)), y.Config.store.isSubscriptionLost && (t = H.getResponseCode(b.KeyMapper.SUBSCRIBER_REGISTRED))), H.subscriptionEventsCallback(n, t)), -1 != r.indexOf(n) && H.promptDisplayCallback(n, H.getResponseCode(n))
            })
        } else try {
            var t = "parent",
                s = [b.KeyMapper.SUBSCRIBED, b.KeyMapper.ALREADY_GRANTED, b.KeyMapper.PROMPT_DENIED, b.KeyMapper.PROMPT_ALLOWED, b.KeyMapper.PROMPT_CLOSED, b.KeyMapper.ALREADY_DENIED];
            y.Config.global.isFrame || (t = "opener", H.popupNoticeHandler(n)), H.getswVersion().then(function(e) {
                d.Helper.postMessage(t, n, o, e)
            }).catch(function(e) {
                d.Helper.postMessage(t, n, o), d.Helper.displayLog("Error while getting sw version")
            }).then(function() {
                return c(e, void 0, void 0, function() {
                    return g(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return n != b.KeyMapper.PROMPT_ALLOWED ? [3, 2] : [4, H.showWelcomeNotification(!1)];
                            case 1:
                                e.sent() && d.Helper.postMessage(t, "syncWelcomeSent", 1), e.label = 2;
                            case 2:
                                return -1 < s.indexOf(n) && "opener" == t && H.closePopupWindow(), [2]
                        }
                    })
                })
            })
        } catch (e) {}
    }, H.popupNoticeHandler = function(e) {
        switch (e) {
            case b.KeyMapper.PROMPTED:
                H.popupNotice(y.Config.notification.clickOnAllowMsg);
                break;
            case b.KeyMapper.PROMPT_ALLOWED:
                H.popupNotice(y.Config.notification.subscribedMsg);
                break;
            case b.KeyMapper.ALREADY_GRANTED:
                H.popupNotice(y.Config.notification.alreadySubscribedMsg);
                break;
            case b.KeyMapper.PROMPT_DENIED:
                H.popupNotice(y.Config.notification.blockedMsg);
                break;
            case b.KeyMapper.ALREADY_DENIED:
                H.popupNotice(y.Config.notification.alreadyDeniedMsg)
        }
    }, H.subscriptionEventsCallback = function(e, t) {
        try {
            "function" == typeof o.Queue.subscriptionCallback ? o.Queue.subscriptionCallback(t) : "function" == typeof o.Queue.userCallback && (7 != t.statuscode && 8 != t.statuscode || (t = {
                response: "unsubscribed",
                statuscode: 7
            }), o.Queue.userCallback(t)), a.GoogleAnalytics.isCallbackAllowed(y.Config.ga.subscriptionCallback, t.statuscode) && a.GoogleAnalytics.process(t.response)
        } catch (e) {
            console.warn("Error while responding to subscription callback", e)
        }
    }, H.promptDisplayCallback = function(e, t) {
        try {
            "function" == typeof o.Queue.promptDisplayCallback && o.Queue.promptDisplayCallback(t), a.GoogleAnalytics.isCallbackAllowed(y.Config.ga.promptDisplayCallback, t.statuscode) && a.GoogleAnalytics.process(t.response)
        } catch (e) {
            console.warn("Error while responding to prompt display callback", e)
        }
    }, H.callEventOnSubscription = function(e) {
        e == b.KeyMapper.PROMPT_ALLOWED && (2 == y.Config.global.browserType ? H.showWelcomeNotificationOld() : y.Config.notification.isSdkHttps && "https:" == y.Config.global.locationProtocol && H.showWelcomeNotification(!1)), 1 == y.Config.notification.isShopify && i.Shopify.init(!0), o.Queue.sync(), r.TabAbandonments.init(), w.VideoDropOff.init(), E.CRPSPlaybook.init(), _.RecommendArticle.init(), H.syncLastVisit(), 1 == s.AdNetwork.forceSyncAdNetwork && H.syncAdNetwork(s.AdNetwork.getAdNetworkParam(!0)), T.AutoSegment.init(), y.Config.newsHub.allVisitors || M.NewsHub.init()
    }, H.brandingPartnerSyncSusbcription = function(e, t) {
        "momagic" != y.Config.brandingPartner.toLowerCase() || e != b.KeyMapper.PROMPT_ALLOWED && e != b.KeyMapper.ALREADY_GRANTED || f.HttpRequest.postForm("https://irctc.truenotify.in/momagicflow/enp", t).then(function() {
            d.Helper.displayLog("Additional api : ".concat(e, " synced successfully with ").concat(y.Config.brandingPartner))
        }).catch(function(e) {})
    }, H.syncEvent = function(n, o) {
        var e = this,
            i = !0;
        if (0 <= y.Config.store.syncedEventList.indexOf(n)) d.Helper.displayLog("Abort! This event has been synced already");
        else {
            y.Config.store.syncedEventList.push(n);
            var r = {},
                t = d.Helper.getUTMParamsOfUrl();
            if (Object.keys(t).length && Object.keys(t).length && Object.keys(t).length && (r = l(l({}, r), t)), void 0 !== o) {
                if ((n == b.KeyMapper.PROMPT_ALLOWED || n == b.KeyMapper.ALREADY_GRANTED) && (i = !1, H.callEventOnSubscription(n), H.subscriptionSyncedFromSW)) return;
                if ("" != p.StorageManager.getStorage(b.KeyMapper.UUID) && !p.StorageManager.getConfigLocal(b.KeyMapper.PUSH_TOKEN_NOT_SYNCED)) return
            }
            d.Helper.getFlagBasedParameter({
                subscriptionMeta: !0,
                subcription: !0
            }, o).then(function(t) {
                return c(e, void 0, void 0, function() {
                    return g(this, function(e) {
                        switch (e.label) {
                            case 0:
                                switch (r = l(l({}, r), t), n) {
                                    case b.KeyMapper.OPTIN_SHOWN:
                                        r.divShow = 1;
                                        break;
                                    case b.KeyMapper.OPTIN_ALLOWED:
                                        r.divAllowed = 1;
                                        break;
                                    case b.KeyMapper.OPTIN_CLOSED:
                                        r.divClosed = 1;
                                        break;
                                    default:
                                        r[n] = 1
                                }
                                return n != b.KeyMapper.PROMPT_ALLOWED && n != b.KeyMapper.ALREADY_GRANTED ? [3, 2] : [4, H.getHTTPSubscriptionParameters(n)];
                            case 1:
                                r = e.sent(), e.label = 2;
                            case 2:
                                return f.HttpRequest.postForm(d.Helper.getEndpoint(n), r, i).then(function() {
                                    H.eventSynced(n, o), "Event : ".concat(n, " synced successfully with ").concat(y.Config.brandingPartner)
                                }).catch(function(e) {}), H.brandingPartnerSyncSusbcription(n, r), [2]
                        }
                    })
                })
            })
        }
    }, H.eventSynced = function(e, t) {
        e != b.KeyMapper.PROMPT_ALLOWED && e != b.KeyMapper.ALREADY_GRANTED || (p.StorageManager.removeConfigLocal(b.KeyMapper.PUSH_TOKEN_NOT_SYNCED), t = H.subcriptionToObject(t), h.IndexedDB.addUpdate("pushToken", t), Object.keys(s.AdNetwork.adNetworkObj).map(function(e) {
            s.AdNetwork.adNetworkObj[e] && p.StorageManager.setConfigLocal(e, s.AdNetwork.adNetworkObj[e])
        }))
    }, H.updateSubscriptionTokenForSync = function(e) {
        switch (y.Config.notification.subscriptionType) {
            case 1:
            case 2:
            case 3:
                H.saveSubscritionToStorage(e)
        }
        p.StorageManager.setConfigLocal(b.KeyMapper.PUSH_TOKEN_NOT_SYNCED, 1), p.StorageManager.updateLastSync(b.KeyMapper.PUSH_TOKEN);
        var t = p.StorageManager.getStorage(b.KeyMapper.USER_PROPERTY);
        (t = d.Helper.parseToJSON(t)) && H.syncProperties("SegmentProperties", "add", t, function() {
            return d.Helper.displayLog("User property re-synced succesfully")
        })
    }, H.saveSubscritionToStorage = function(e) {
        var t = e,
            n = e;
        2 == y.Config.notification.subscriptionType && ("object" == typeof e && (t = JSON.stringify(e)), t = encodeURIComponent(t), n = d.Helper.parseToJSON(e)), p.StorageManager.setStorage(b.KeyMapper.PUSH_TOKEN, t), h.IndexedDB.addUpdate("pushToken", n)
    }, H.syncAdNetwork = function(t) {
        var e = d.Helper.getEndpoint("syncAdNetwork"),
            n = l({
                pid: y.Config.client,
                bkey: y.Config.UUID
            }, t);
        f.HttpRequest.postForm(e, n, !0).then(function() {
            Object.keys(t).map(function(e) {
                t[e] && p.StorageManager.setConfigLocal(e, t[e])
            })
        }).catch(function(e) {})
    }, H.syncProperties = function(t, n, o, i, e) {
        var r = d.Helper.getEndpoint(t),
            a = {},
            s = !1,
            c = "";
        switch (t) {
            case "SegmentEvents":
                c = "evt";
                break;
            case "SegmentProperties":
                c = "userp";
                break;
            case "PersonalProperties":
                c = "pers";
                break;
            case "TriggerEvent":
                c = "trg"
        }
        "userp" != (a.et = c) && "pers" != c || (s = !0), null != o ? (o = encodeURIComponent(JSON.stringify(o)), a.act = n, a.val = o) : a.act = n, H.isSubscriptionExist(e) ? d.Helper.getFlagBasedParameter({
            subscriptionMeta: !0,
            subcription: !0
        }).then(function(e) {
            (a = l(l({}, a), e)).bKey || (a.bKey = y.Config.UUID), f.HttpRequest.postForm(r, a, s).then(function() {
                "".concat(t, " synced successfully"), H.syncUserEventCallback(t, n, o), null != i && "function" == typeof i && i()
            }).catch(function(e) {}), "momagic" == y.Config.brandingPartner.toLowerCase() && "SegmentProperties" == t && f.HttpRequest.postForm("https://irctc.truenotify.in/momagicflow/up", a, !0).then(function() {
                d.Helper.displayLog("Additional User property synced successfully with ".concat(y.Config.brandingPartner))
            }).catch(function(e) {})
        }) : d.Helper.displayLog("".concat(t, " Aborted! No subscription key or UUID found"))
    }, H.isSubscriptionExist = function(e) {
        var t = p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN);
        return !(!e || !y.Config.UUID) || !(!t || !y.Config.UUID)
    }, H.syncUserEventCallback = function(e, t, n) {
        var o, i, r = "";
        switch (e) {
            case "SegmentEvents":
                r = "User Event";
                break;
            case "SegmentProperties":
                r = "User Property";
                break;
            case "PersonalProperties":
                r = "Personalization Property";
                break;
            case "TriggerEvent":
                r = "Trigger"
        }
        1 == y.Config.debugger.status && (o = v.Debugger.getMsgSet(), i = r + ": " + (n = decodeURIComponent(n)) + " " + o.ev, "SegmentEvents" != e && "TriggerEvent" != e || (i = r + ": " + t + " " + o.ev, n && (i += " with data " + n)), v.Debugger.log(i, y.Config.debugger.successCode))
    }, H.getSyncCount = function(e, t) {
        var n = new Date,
            o = n.getDate(),
            i = n.getMonth() + 1,
            n = p.StorageManager.getConfigLocal(b.KeyMapper.DM_SYNC_COUNT, b.KeyMapper.STATS);
        if ("event" == e) {
            var r = p.StorageManager.getConfigLocal(b.KeyMapper.LAST_EVENT_SYNC, b.KeyMapper.SYNC);
            if ("" == r) return 0;
            var a, s = (a = new Date(r)).getDate(),
                r = a.getMonth() + 1;
            return t == b.KeyMapper.DAILY ? null != n[b.KeyMapper.EVENT_DAILY] && o == s ? n[b.KeyMapper.EVENT_DAILY] : 0 : t == b.KeyMapper.MONTHLY ? null != n[b.KeyMapper.EVENT_MONTHLY] && i == r ? n[b.KeyMapper.EVENT_MONTHLY] : 0 : void 0
        }
        if ("userProperty" == e) {
            e = p.StorageManager.getConfigLocal(b.KeyMapper.LAST_PROPERTY_SYNC, b.KeyMapper.SYNC);
            if ("" == e) return 0;
            s = (a = new Date(e)).getDate(), r = a.getMonth() + 1;
            return t == b.KeyMapper.DAILY ? null != n[b.KeyMapper.PROPERTY_DAILY] && o == s ? n[b.KeyMapper.PROPERTY_DAILY] : 0 : t == b.KeyMapper.MONTHLY ? null != n[b.KeyMapper.PROPERTY_MONTHLY] && i == r ? n[b.KeyMapper.PROPERTY_MONTHLY] : 0 : void 0
        }
    }, H.hasSynclimitReached = function(e) {
        return "event" == e ? !y.Config.notification.evtTracking || (y.Config.notification.syncLimit.evtPerMonth <= H.getSyncCount("event", b.KeyMapper.MONTHLY) || y.Config.notification.syncLimit.evtPerDay <= H.getSyncCount("event", b.KeyMapper.DAILY)) : "userProperty" == e ? !y.Config.notification.propsTracking || (y.Config.notification.syncLimit.propsPerMonth <= H.getSyncCount("userProperty", b.KeyMapper.MONTHLY) || y.Config.notification.syncLimit.propsPerDay <= H.getSyncCount("userProperty", b.KeyMapper.DAILY)) : void 0
    }, H.userEventProcessor = function(e, t) {
        if (!y.Config.notification.userEvents) return d.Helper.displayLog("Sync aborted! : User event disabled");
        var n;
        H.hasSynclimitReached("event") ? d.Helper.displayLog("Sync aborted! : Daily/monthly limit reached!") : (e = H.parseData(e), e = H.filterData(e), H.validateData(e) && (null != t && 1 <= Object.keys(t).length && !(n = H.filterProperties(t, {
            key: 32,
            value: 32,
            object: 16
        }, ["string", "number", "boolean"])) ? d.Helper.displayLog(b.KeyMapper.INVALID_PAYLOAD) : H.syncProperties("SegmentEvents", e, n, function() {
            H.increaseSyncCount("event")
        })))
    }, H.addPropertyProcessorFallback = function(t) {
        var e, n, o;
        "object" != typeof t || "string" != typeof t.name || "string" != typeof t.value && "number" != typeof t.value && "boolean" != typeof t.value || "" === t.value ? d.Helper.displayLog(b.KeyMapper.INVALID_PAYLOAD) : (e = p.StorageManager.getConfigLocal("subscriberId")) != t.value ? ("subscriber_id" == t.name && t.value && h.IndexedDB.addUpdate("subscriberId", t.value).then(function(e) {
            y.Config.store.subscriberId = t.value
        }).catch(function(e) {
            d.Helper.displayLog(e)
        }), n = d.Helper.getEndpoint("CustomerIDSynch"), (o = {}).name = t.name, o.value = t.value, o.operation = "add_property", d.Helper.getFlagBasedParameter({
            subscriptionMeta: !0,
            subcription: !0
        }).then(function(e) {
            o = l(l({}, o), e), f.HttpRequest.postForm(n, o).then(function() {
                p.StorageManager.setConfigLocal("subscriberId", t.value)
            }).catch(function(e) {}), "momagic" == y.Config.brandingPartner.toLowerCase() && f.HttpRequest.postForm("https://irctc.truenotify.in/momagicflow/up", o).then(function() {
                d.Helper.displayLog("Additional User property synced successfully with ".concat(y.Config.brandingPartner))
            }).catch(function(e) {})
        })) : d.Helper.displayLog("This subscriber id already synced:", e)
    }, H.increaseSyncCount = function(e) {
        var t, n, o, i = new Date,
            r = i.getDate(),
            a = i.getMonth() + 1,
            s = p.StorageManager.getConfigLocal(b.KeyMapper.DM_SYNC_COUNT, b.KeyMapper.STATS),
            c = "" != s ? s : {};
        "event" == e ? ("" == (i = p.StorageManager.getConfigLocal(b.KeyMapper.LAST_EVENT_SYNC, b.KeyMapper.SYNC)) ? (c[b.KeyMapper.EVENT_DAILY] = 1, c[b.KeyMapper.EVENT_MONTHLY] = 1) : (n = (t = new Date(i)).getDate(), o = t.getMonth() + 1, null != s[b.KeyMapper.EVENT_DAILY] && r == n ? c[b.KeyMapper.EVENT_DAILY] = s[b.KeyMapper.EVENT_DAILY] + 1 : c[b.KeyMapper.EVENT_DAILY] = 1, null != s[b.KeyMapper.EVENT_MONTHLY] && a == o ? c[b.KeyMapper.EVENT_MONTHLY] = s[b.KeyMapper.EVENT_MONTHLY] + 1 : c[b.KeyMapper.EVENT_MONTHLY] = 1), p.StorageManager.updateLastSync(b.KeyMapper.LAST_EVENT_SYNC)) : "userProperty" == e && ("" == (e = p.StorageManager.getConfigLocal(b.KeyMapper.LAST_PROPERTY_SYNC, b.KeyMapper.SYNC)) ? (c[b.KeyMapper.PROPERTY_DAILY] = 1, c[b.KeyMapper.PROPERTY_MONTHLY] = 1) : (n = (t = new Date(e)).getDate(), o = t.getMonth() + 1, null != s[b.KeyMapper.PROPERTY_DAILY] && r == n ? c[b.KeyMapper.PROPERTY_DAILY] = s[b.KeyMapper.PROPERTY_DAILY] + 1 : c[b.KeyMapper.PROPERTY_DAILY] = 1, null != s[b.KeyMapper.PROPERTY_MONTHLY] && a == o ? c[b.KeyMapper.PROPERTY_MONTHLY] = s[b.KeyMapper.PROPERTY_MONTHLY] + 1 : c[b.KeyMapper.PROPERTY_MONTHLY] = 1), p.StorageManager.updateLastSync(b.KeyMapper.LAST_PROPERTY_SYNC)), p.StorageManager.setConfigLocal(b.KeyMapper.DM_SYNC_COUNT, c, b.KeyMapper.STATS)
    }, H.toTriggerData = function(e, t) {
        var n = {},
            o = {},
            i = {
                collection_viewed: ["collection_viewed", {
                    collection_title: "collection_name",
                    collection_link: "collection_url"
                }],
                product_viewed: ["product_viewed", {
                    product_title: "product_name",
                    product_link: "product_url"
                }],
                added_to_cart: ["added_to_cart", {
                    product_title: "product_name"
                }],
                add_to_cart: ["added_to_cart", {
                    product_title: "product_name"
                }],
                order_placed: ["order_placed", {}],
                purchased: ["order_placed", {}]
            };
        if (i.hasOwnProperty(e) && (n = i[e = i[e][0]][1]), null != t)
            for (var r in t) n.hasOwnProperty(r) ? o[n[r]] = t[r] : o[r] = t[r];
        return [e, o]
    }, H.syncAsTrigger = function(e, t) {
        e = H.parseData(e), e = H.filterData(e);
        var n = {
            product_viewed: ["product_browsed"],
            added_to_cart: ["product_addedtocart", "product_browsed"],
            order_placed: ["product_addedtocart", "product_browsed"]
        };
        if (1 == y.Config.notification.eventAsTrigger && 0 <= ["collection_viewed", "product_viewed", "added_to_cart", "add_to_cart", "order_placed", "purchased"].indexOf(e)) {
            t = H.toTriggerData(e, t);
            if (0 < Object.keys(t[1]).length ? H.triggerProcessor(t[0], t[1]) : H.triggerProcessor(t[0]), n.hasOwnProperty(t[0])) {
                var o, i = n[t[0]];
                for (o in i) H.triggerProcessor(i[o])
            }
        }
    }, H.triggerProcessor = function(e, t, n) {
        e = H.parseData(e), e = H.filterData(e);
        var o;
        H.validateData(e) && (null != t && 1 <= Object.keys(t).length && !(o = H.filterProperties(t, {
            key: 32,
            value: 512,
            object: 16
        }, ["string"])) ? d.Helper.displayLog(b.KeyMapper.INVALID_PAYLOAD) : H.syncProperties("TriggerEvent", e, o))
    }, H.personalizationProcessor = function(e) {
        null != e && 1 <= Object.keys(e).length && ((e = H.filterProperties(e.add, {
            key: 32,
            value: 32,
            object: 1
        }, ["number", "string"])) ? H.syncProperties("PersonalProperties", "", e) : d.Helper.displayLog(b.KeyMapper.INVALID_PAYLOAD))
    }, H.userProfileProcessor = function(e, t) {
        var n, o = "",
            i = {
                key: 32,
                value: 32,
                object: 64
            };
        if (H.hasSynclimitReached("userProperty")) d.Helper.displayLog("Sync aborted! : Daily/monthly limit reached!");
        else if (null != e && 1 <= Object.keys(e).length) {
            if (void 0 !== e.add && 1 <= Object.keys(e.add).length) n = H.filterProperties(e.add, i), o = "add";
            else {
                if (!(void 0 !== e.remove && 1 <= Object.keys(e.remove).length)) return void d.Helper.displayLog(b.KeyMapper.INVALID_PAYLOAD);
                n = H.filterProperties(e.remove, i), o = "remove"
            }
            if (n) {
                if (H.isPropertySynced(n, o)) return d.Helper.displayLog("This property already synced : ", n), void(1 == y.Config.debugger.status && (i = "User Property: Already Sent to ".concat(y.Config.brandingPartner), v.Debugger.log(i + " " + JSON.stringify(n), y.Config.debugger.successCode)));
                H.syncProperties("SegmentProperties", o, n, function() {
                    H.increaseSyncCount("userProperty"), H.propertySynced("userProperty", n, o)
                }, t)
            } else d.Helper.displayLog(b.KeyMapper.INVALID_PAYLOAD)
        }
    }, H.propertySynced = function(e, n, o) {
        var i;
        void 0 === o && (o = "add"), "userProperty" == e && (i = p.StorageManager.getStorage(b.KeyMapper.USER_PROPERTY), (i = d.Helper.parseToJSON(i)) && "object" == typeof i ? Object.keys(n).forEach(function(t) {
            Array.isArray(n[t]) ? "add" == o ? (0 == Array.isArray(i[t]) && (i[t] = []), n[t].forEach(function(e) {
                -1 < i[t].indexOf(e) == 0 && i[t].push(e)
            })) : "remove" == o && Array.isArray(i[t]) && (n[t].forEach(function(e) {
                e = i[t].indexOf(e); - 1 < e && i[t].splice(e, 1)
            }), 0 == i[t].length && delete i[t]) : "remove" == o ? delete i[t] : i[t] = n[t]
        }) : i = n, p.StorageManager.setStorage(b.KeyMapper.USER_PROPERTY, JSON.stringify(i)), H.setUserProperties(i))
    }, H.isPropertySynced = function(e, t) {
        void 0 === t && (t = "add");
        var n = p.StorageManager.getStorage(b.KeyMapper.USER_PROPERTY);
        if (!(n = d.Helper.parseToJSON(n)) || "remove" == t) return !1;
        if (n && "object" == typeof n) {
            var t = Object.keys(e),
                o = Object.keys(n);
            if (0 == t.every(function(e) {
                    return -1 < o.indexOf(e)
                })) return !1;
            for (var i = !1, r = 0, a = t; r < a.length; r++)
                if ("break" === function(t) {
                        if (Array.isArray(e[t])) {
                            if (0 == e[t].every(function(e) {
                                    return -1 < n[t].indexOf(e)
                                })) return i = !0, "break"
                        } else if (n.hasOwnProperty(t) && n[t] != e[t]) return i = !0, "break"
                    }(a[r])) break;
            if (i) return !1
        }
        return !0
    }, H.filterData = function(e) {
        if ("string" == typeof e) return e
    }, H.parseData = function(e) {
        return "string" == typeof e ? e.trim() : "number" == typeof e ? e.toString().trim() : e
    }, H.validateData = function(e) {
        if (e.length <= 32 && e.length) return !0
    }, H.filterProperties = function(u, d, p) {
        void 0 === p && (p = ["number", "string", "boolean", "object"]);
        try {
            var f = {},
                g = 0;
            if ("object" == typeof u) return Object.keys(u).map(function(e) {
                var t = e;
                if (e = e.substring(0, d.key), g < d.object && "" != e.trim() && e.length <= d.key) {
                    var n = (n = e.toLowerCase()).trim();
                    if ("string" == typeof(o = u[t]) && "" != o && -1 < p.indexOf(typeof o)) {
                        var o, e = (o = o.trim()).substring(0, d.value),
                            t = new RegExp("^(https?)://");
                        "" != o && (o.length <= d.value || t.test(o)) ? f[n] = o : f[n] = e, g++
                    } else if ("object" == typeof o && -1 < p.indexOf(typeof o)) {
                        if (o instanceof Array && 1 <= o.length) {
                            var i, r = o,
                                a = [],
                                s = 0;
                            for (i in r) {
                                var c, l = r[i];
                                "number" == typeof(l = l.substring(0, d.value)) && null != l && s <= d.object && l.toString().length <= d.value ? (c = l, a.push(c), s++) : "string" == typeof l && "" != l.trim() && s <= d.object && l.trim().length <= d.value && (c = l.trim(), a.push(c), s++)
                            }
                            1 <= a.length && (f[n] = a, g++)
                        }
                    } else("boolean" == typeof o && -1 < p.indexOf(typeof o) || "number" == typeof o && -1 < p.indexOf(typeof o) && (o.toString().length <= d.value && null != o || -1 < y.Config.notification.allowedKeys.indexOf(n))) && (f[n] = o, g++)
                }
            }), f
        } catch (e) {}
        return !1
    }, H.setUserProperties = function(e) {
        h.IndexedDB.addUpdate(b.KeyMapper.USER_PROP, e).then(function(e) {
            d.Helper.displayLog(e)
        }).catch(function(e) {
            d.Helper.displayLog(e)
        })
    }, H.setIzcidDb = function(e) {
        h.IndexedDB.addUpdate("IZCID", e).then(function(e) {}).catch(function(e) {
            d.Helper.displayLog(e)
        })
    }, H.getIzCidPromise = function() {
        return new Promise(function(e, t) {
            var n, o = p.StorageManager.getConfigLocal(b.KeyMapper.IZCID),
                i = p.StorageManager.getConfigLocal(b.KeyMapper.IZCID, b.KeyMapper.SYNC);
            "" == o || "" == i ? (d.Helper.addMsgReciever(H.msgReciever), H.setCookieGlobalID(), "" != (n = p.StorageManager.getConfigLocal(b.KeyMapper.IZCID)) ? e(n) : setTimeout(function() {
                e(n), n && "undefined" != n && H.setIzcidDb(n)
            }, 2500)) : (e(o), o && "undefined" != o && H.setIzcidDb(o))
        }).catch(function(e) {
            d.Helper.displayLog(e)
        })
    }, H.setSubscriberIdFromDb = function() {
        return new Promise(function(t, e) {
            h.IndexedDB.getIndexDBData("options", "subscriberId").then(function(e) {
                e ? (d.Helper.displayLog("sub id found from db: ", e.val), y.Config.store.subscriberId = e.val, t(y.Config.store.subscriberId)) : (d.Helper.displayLog("sub id not found "), t(!1))
            }).catch(function(e) {
                d.Helper.displayLog("Error in getting sub id", e), t(!1)
            })
        })
    }, H.setCookieGlobalID = function() {
        return new Promise(function(e, t) {
            1 != y.Config.izootoStatus ? e(!1) : document.getElementById(b.KeyMapper.IZCIDDOM) ? y.Config.global.isSetCidLoaded && e(!0) : d.Helper.addIFrame("https://cdn.izooto.com/scripts/sak/iz_setcid.html?v=1", b.KeyMapper.IZCIDDOM).then(function() {
                y.Config.global.isSetCidLoaded = !0, e(!0)
            })
        })
    }, H.isIncognitoMode = function() {
        var t = this;
        return new Promise(function(n, e) {
            return c(t, void 0, void 0, function() {
                var t;
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            switch (y.Config.global.browserType) {
                                case 1:
                                case 6:
                                case 7:
                                    return [3, 1];
                                case 3:
                                    return [3, 3]
                            }
                            return [3, 4];
                        case 1:
                            return [4, H.chromePrivateTest()];
                        case 2:
                            return e.sent() ? n(!0) : n(!1), [3, 5];
                        case 3:
                            try {
                                return (t = indexedDB.open("test")).onsuccess = function() {
                                    return n(!1)
                                }, t.onerror = function() {
                                    return n(!0)
                                }, [3, 5]
                            } catch (e) {}
                            e.label = 4;
                        case 4:
                            n(!1), e.label = 5;
                        case 5:
                            return [2]
                    }
                })
            })
        })
    }, H.getChromiumQuotaLimit = function() {
        try {
            var e = window;
            return void 0 !== e.performance && void 0 !== e.performance.memory && void 0 !== e.performance.memory.jsHeapSizeLimit ? performance.memory.jsHeapSizeLimit : 1073741824
        } catch (e) {
            return 1073741824
        }
    }, H.storageQuotaChromePrivateTest = function() {
        return new Promise(function(n, e) {
            try {
                navigator.webkitTemporaryStorage.queryUsageAndQuota(function(e, t) {
                    n(t < H.getChromiumQuotaLimit())
                }, function(e) {
                    d.Helper.displayLog("detectIncognito somehow failed to query storage quota: " + e.message), n(!1)
                })
            } catch (e) {
                n(!1)
            }
        })
    }, H.oldChromePrivateTest = function() {
        return new Promise(function(e, t) {
            var n = window.RequestFileSystem || window.webkitRequestFileSystem;
            n ? n(0, 1, function() {
                return e(!1)
            }, function() {
                return e(!0)
            }) : e(!1)
        })
    }, H.chromePrivateTest = function() {
        return c(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return void 0 === Promise || void 0 === Promise.allSettled ? [3, 2] : [4, H.storageQuotaChromePrivateTest()];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return [4, H.oldChromePrivateTest()];
                    case 3:
                        return [2, e.sent()]
                }
            })
        })
    }, H.updatePromptCount = function(e) {
        var t = 0;
        e == b.KeyMapper.PROMPTED ? (t = "" != p.StorageManager.getConfigLocal(b.KeyMapper.PROMPT_COUNT, b.KeyMapper.STATS) ? p.StorageManager.getConfigLocal(b.KeyMapper.PROMPT_COUNT, b.KeyMapper.STATS) + 1 : 1, p.StorageManager.setConfigLocal(b.KeyMapper.PROMPT_COUNT, t, b.KeyMapper.STATS)) : e == b.KeyMapper.OPTIN_SHOWN && (t = "" != p.StorageManager.getConfigLocal(b.KeyMapper.OPTIN_SHOWN_COUNT, b.KeyMapper.STATS) ? p.StorageManager.getConfigLocal(b.KeyMapper.OPTIN_SHOWN_COUNT, b.KeyMapper.STATS) + 1 : 1, p.StorageManager.setConfigLocal(b.KeyMapper.OPTIN_SHOWN_COUNT, t, b.KeyMapper.STATS))
    }, H.getSubscriptionKey = function(e) {
        if (!e) return "";
        if ("string" == typeof(e = H.subcriptionToObject(e))) return e;
        var t = e.endpoint,
            e = y.Config.global.browserName;
        return e == b.KeyMapper.BROWSER_FIREFOX ? t.substring(48) : (e == b.KeyMapper.BROWSER_OPERA || e == b.KeyMapper.BROWSER_CHROME) && null != t && 0 <= t.indexOf("fcm.googleapis.com") ? t.substring(36) : e == b.KeyMapper.BROWSER_EDGE ? encodeURIComponent(t.substring(41)) : e == b.KeyMapper.BROWSER_UCB ? t.substring(36) : t.substring(40)
    }, H.getSubscriptionParameters = function(e) {
        try {
            var t = {};
            return 3 == y.Config.notification.subscriptionType ? t = {
                bKey: y.Config.UUID,
                st: e
            } : 2 == y.Config.notification.subscriptionType ? (e = H.subcriptionToObject(e), t = {
                bKey: y.Config.UUID,
                ep: 7 == y.Config.global.browserType ? encodeURIComponent(e.endpoint) : e.endpoint,
                auth: e.keys.auth,
                pk: e.keys.p256dh,
                vpk: y.Config.notification.vapidKey
            }) : 1 == y.Config.notification.subscriptionType && (t = {
                bKey: y.Config.UUID,
                fe: 1,
                ft: e
            }), t
        } catch (e) {
            return d.Helper.displayLog("Error in getSubscriptionParameters", e), {}
        }
    }, H.getOptinDesignType = function() {
        return y.Config.notification.optInDesignType ? 0 == y.Config.notification.promptType ? 0 : y.Config.notification.optInDesignType : ""
    }, H.getswVersion = function() {
        return c(this, void 0, void 0, function() {
            return g(this, function(e) {
                try {
                    return [2, new Promise(function(n, o) {
                        setTimeout(function() {
                            h.IndexedDB.getIndexDBData("options", "swVer").then(function(e) {
                                var t = e.val;
                                e.hasOwnProperty("key") ? n(t) : o(!1)
                            }).catch(function(e) {
                                d.Helper.displayLog(e), o(!1)
                            })
                        }, 50)
                    })]
                } catch (e) {
                    d.Helper.displayLog(e)
                }
                return [2]
            })
        })
    }, H.createWelcomeNotification = function() {
        var e, t;
        1 === (null === (e = y.Config.notification.welcomeNotification) || void 0 === e ? void 0 : e.status) && "" != y.Config.notification.welcomeNotification.icon && "" != y.Config.notification.welcomeNotification.title && "" != y.Config.notification.welcomeNotification.body && ((t = new window.Notification(y.Config.notification.welcomeNotification.title, {
            icon: y.Config.notification.welcomeNotification.icon,
            body: y.Config.notification.welcomeNotification.body,
            tag: "welcome"
        })).addEventListener("click", function() {
            var e;
            "" != (null === (e = y.Config.notification.welcomeNotification) || void 0 === e ? void 0 : e.url) ? (t.close(), window.open(null === (e = y.Config.notification.welcomeNotification) || void 0 === e ? void 0 : e.url, "_blank")) : t.close()
        }), 0 < (null === (e = null === (e = y.Config.notification) || void 0 === e ? void 0 : e.welcomeNotification) || void 0 === e ? void 0 : e.timeout) && setTimeout(function() {
            t.close()
        }, y.Config.notification.welcomeNotification.timeout))
    }, H.showWelcomeNotificationOld = function() {
        var e;
        1 === (null === (e = null === (e = y.Config.notification) || void 0 === e ? void 0 : e.welcomeNotification) || void 0 === e ? void 0 : e.status) && "" != y.Config.notification.welcomeNotification.icon && "" != y.Config.notification.welcomeNotification.title && "" != y.Config.notification.welcomeNotification.body && 1 == y.Config.notification.isSdkHttps && H.createWelcomeNotification()
    }, H.sendLocalNotification = function(a) {
        return H.getSWReadyRegistration().then(function(e) {
            var t = {},
                n = {};
            n.pid = a.key, n.link = a.link, n.cid = a.id, n.rid = a.rid, n.viewFlag = a.viewFlag, n.clickFlag = a.clickFlag, n.sysEvents = a.sysEvents, n.domainNum = a.domainNum;
            var o = {
                body: a.message,
                icon: a.icon,
                requireInteraction: a.reqInt,
                tag: a.tag,
                image: a.banner,
                data: n
            };
            if (0 < a.act_num && a.act1name && a.act1link) {
                var i, r = {
                    action: "action1",
                    title: a.act1name
                };
                return a.hasOwnProperty("act1icon") && "" != a.act1icon && (r.icon = a.act1icon), n.act1link = a.act1link, t = [r], 2 == a.act_num && a.act2name && a.act2link && (i = {
                    action: "action2",
                    title: a.act2name
                }, a.hasOwnProperty("act2icon") && "" != a.act2icon && (i.icon = a.act2icon), n.act2link = a.act2link, t = [r, i]), o.actions = t, e.showNotification(a.title, o)
            }
            return e.showNotification(a.title, o)
        }).catch(console.log)
    }, H.customizeOptInPrompt = function(e) {
        var t = {
            title: 50,
            message: 100,
            allowButton: 10,
            laterButton: 10
        };
        try {
            for (var n in e) "" != e[n] && (e[n] = e[n].trim(), "title" == n ? y.Config.notification.promptDesign.message = e[n].substring(0, t[n]) : "message" == n ? y.Config.notification.promptDesign.subMessage = e[n].substring(0, t[n]) : "icon" != n || !e[n].startsWith("http://") && !e[n].startsWith("https://") || e[n].includes("panel.izooto") ? "allowButton" == n ? y.Config.notification.promptDesign.btn2Txt = e[n].substring(0, t[n]) : "laterButton" == n && (y.Config.notification.promptDesign.btn1Txt = e[n].substring(0, t[n])) : y.Config.notification.promptDesign.icon = e[n])
        } catch (e) {
            d.Helper.displayLog(e)
        }
    }, H.registerServiceWorker = function() {
        return new Promise(function(n, t) {
            var e;
            "serviceWorker" in navigator ? (e = void 0, y.Config.notification.serviceWorkerScope && (e = {
                scope: y.Config.notification.serviceWorkerScope
            }), y.Config.notification.serviceWorkerPath, y.Config.notification.serviceWorkerScope, navigator.serviceWorker.register(y.Config.notification.serviceWorkerPath, e).then(function(t) {
                H.getswVersion().then(function(e) {
                    e && "undefined" != e && (y.Config.notification.serviceWorkerVersion = e, n(t))
                }).catch(function(e) {
                    n(t), d.Helper.displayLog("swVersion undefined", e)
                }), y.Config.notification.windowType || (h.IndexedDB.setIndexedDb("gaId"), h.IndexedDB.setIndexedDb("sysEvents"))
            }).catch(function(e) {
                t(e), d.Helper.displayLog(e)
            })) : (d.Helper.displayLog(e = "Service workers are not supported in this browser."), t(e))
        }).catch(function(e) {
            d.Helper.displayLog(e)
        })
    }, H.sendMsgToSW = function(t, i) {
        return c(this, void 0, void 0, function() {
            return g(this, function(e) {
                return [2, new Promise(function(n, o) {
                    var e = new MessageChannel;
                    e.port1.onmessage = function(e) {
                        var t = e.data,
                            e = (t = d.Helper.parseToJSON(t)).izootoSWToSDKSender;
                        e && e.izootoSWSubscribe && ((t = e.izootoSWSubscribe).error ? o(e.izootoSWSubscribe) : (t.hasOwnProperty(b.KeyMapper.SUBSCRIPTION_SYNCED) && (H.subscriptionSyncedFromSW = t[b.KeyMapper.SUBSCRIPTION_SYNCED]), n(t.subscription)))
                    }, (navigator.serviceWorker.controller || t.watiting || t.installing || t.active).postMessage(JSON.stringify({
                        izootoSDKToSWSender: i
                    }), [e.port2])
                })]
            })
        })
    }, H.getHTTPSubscriptionParameters = function(n) {
        return c(this, void 0, void 0, function() {
            var t;
            return g(this, function(e) {
                return t = {}, [2, d.Helper.getFlagBasedParameter({
                    subscriptionMeta: !0,
                    subcription: !0
                }).then(function(e) {
                    (t = l(l({}, t), e)).bKey = y.Config.UUID, t.vpk = y.Config.notification.vapidKey;
                    e = d.Helper.getUTMParamsOfUrl();
                    Object.keys(e).length && (t = l(l({}, t), e));
                    e = s.AdNetwork.getAdNetworkParam(!0);
                    return null != e && "undefined" != e && (t = l(l({}, t), e)), H.subscriptionSource && (t.ss = H.subscriptionSource), n != b.KeyMapper.ALREADY_GRANTED && n != b.KeyMapper.PROMPT_ALLOWED || (t[n] = 1, t.sv = y.Config.SDKVersion), d.Helper.removeUndefinedValuesFromObj(t)
                })]
            })
        })
    }, H.subscribeFromSW = function(i) {
        return c(this, void 0, void 0, function() {
            return g(this, function(e) {
                return [2, H.getHTTPSubscriptionParameters(H.permissionStatus).then(function(e) {
                    var o = {
                        izootoSWSubscribe: {
                            endpoint: d.Helper.getEndpoint(b.KeyMapper.PROMPT_ALLOWED),
                            postData: e
                        }
                    };
                    return new Promise(function(t, n) {
                        H.getswVersion().then(function(e) {
                            !e || e < H.minSWVersion ? n("sw version condtion not met => " + e) : H.sendMsgToSW(i, JSON.stringify(o)).then(function(e) {
                                t(e)
                            }).catch(function(e) {
                                n(e)
                            })
                        }).catch(function(e) {
                            n("rejecting sw version undefined")
                        })
                    })
                })]
            })
        })
    }, H.subscriptionHandler = function() {
        var e = this;
        return new Promise(function(o, i) {
            return c(e, void 0, void 0, function() {
                var n, t;
                return g(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (n = function(e) {
                                    H.subscribe(e).then(function(e) {
                                        o(e)
                                    }).catch(function(e) {
                                        i(e)
                                    })
                                }, !(t = H.getPushTokenFromLStorage())) return [3, 4];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, h.IndexedDB.addUpdate("pushToken", t)];
                        case 2:
                            return e.sent(), [3, 4];
                        case 3:
                            return e.sent(), [3, 4];
                        case 4:
                            return H.registerServiceWorker().then(function(e) {
                                y.Config.notification.swSubscribe, y.Config.notification.serviceWorkerVersion, H.getSWReadyRegistration().then(function(t) {
                                    y.Config.notification.swSubscribe ? H.subscribeFromSW(t).then(function(e) {
                                        o(e)
                                    }).catch(function() {
                                        n(t)
                                    }) : H.subscriptionOnAllow ? n(t) : null != t && t.pushManager.getSubscription().then(function(e) {
                                        e || (y.Config.store.isSubscriptionLost = !0), n(t)
                                    })
                                }).catch(function(e) {
                                    i({
                                        error: b.KeyMapper.BROWSER_UNSUPPORTED
                                    })
                                })
                            }).catch(function(e) {
                                i({
                                    error: b.KeyMapper.BROWSER_UNSUPPORTED
                                })
                            }), [2]
                    }
                })
            })
        })
    }, H.subscribe = function(i) {
        return c(this, void 0, void 0, function() {
            return g(this, function(e) {
                return y.Config.notification.subscriptionObj = {
                    userVisibleOnly: !0,
                    applicationServerKey: d.Helper.urlB64ToUint8Array(y.Config.notification.vapidKey)
                }, [2, new Promise(function(n, o) {
                    d.Helper.displayLog("Subscription initiated..."), null != i && i.pushManager.subscribe(y.Config.notification.subscriptionObj).then(function(e) {
                        d.Helper.displayLog("Subscrption : ", JSON.stringify(e)), n(e)
                    }).catch(function(t) {
                        d.Helper.displayLog("Unable to subscribe due to error : ", t), null != t.message && (-1 < t.message.indexOf("push service error") || -1 < t.message.indexOf("User denied permission to use the Push API")) ? (d.Helper.displayLog("Browser does not have complete support of vapid"), o({
                            error: b.KeyMapper.BROWSER_UNSUPPORTED
                        })) : null != i && i.pushManager.getSubscription().then(function(e) {
                            if (!e) throw t;
                            d.Helper.displayLog("Unexpected subscription found! Unsubscribing...", JSON.stringify(e)), e.unsubscribe().then(function() {
                                d.Helper.displayLog("Re Subscribing..."), n(H.subscribe(i))
                            })
                        }).catch(function(e) {
                            o({
                                error: e
                            })
                        })
                    })
                })]
            })
        })
    }, H.unsubscribeNotification = function() {
        d.Helper.displayLog("Notification unsubscribe is initiated..."), H.getSWReadyRegistration().then(function(e) {
            null != e && e.pushManager.getSubscription().then(function(e) {
                e && e.unsubscribe().then(function(e) {
                    d.Helper.displayLog("Unsubscribed : ", e)
                }).catch(function(e) {
                    d.Helper.displayLog("Unsubscription failed : ", e)
                })
            }).catch(function(e) {
                d.Helper.displayLog("Get subscription failed : ", e)
            })
        }).catch(function(e) {})
    }, H.closePopupWindow = function() {
        if (self == top && y.Config.notification.windowType) try {
            setTimeout(function() {
                var e = {};
                e[b.KeyMapper.POPUP_CLOSED] = 1;
                var t = {};
                t[b.KeyMapper.MESSAGE] = e, null !== (e = window.opener) && void 0 !== e && e.postMessage(JSON.stringify(t), "*"), window.close()
            }, 1e3)
        } catch (e) {
            d.Helper.displayLog(e)
        }
    }, H.removeSubsriptionFromAlternateDomain = function() {
        var e, t = p.StorageManager.getConfigLocal(b.KeyMapper.ALT_DOMAIN_STATUS);
        if ("" != t) try {
            t = JSON.parse(t), H.alternateDomainJson = t
        } catch (e) {
            t = ""
        }
        "object" == typeof y.Config.notification.sourceOriginAlt && 1 < y.Config.notification.sourceOriginAlt.length ? (e = y.Config.notification.sourceOriginAlt.length, H.alternateDomainPermissionHandler(0, e - 1, H.alternateDomainJson)) : (e = "object" == typeof y.Config.notification.sourceOriginAlt ? y.Config.notification.sourceOriginAlt[0] : y.Config.notification.sourceOriginAlt, 3 == (e = H.getAlternateDomainConfig(H.alternateDomainJson, H.permissionDomain = e)) || 2 == e || (d.Helper.addMsgReciever(H.msgReciever), "https:" == y.Config.global.locationProtocol ? d.Helper.addIFrame(H.permissionDomain + "?action=izrmsubs&izHardUnsub=1", "izAltSubFrame") : d.Helper.addIFrame(H.permissionDomain + "?action=izrmsubs", "izAltSubFrame")))
    }, H.removeSubscriptionReceiver = function(e) {
        3 == e && (H.setAlternateDomainConfig(H.alternateDomainJson, H.permissionDomain, e), "object" == typeof y.Config.notification.sourceOriginAlt && H.alternateDomainIndex < y.Config.notification.sourceOriginAlt.length && H.alternateDomainPermissionHandler(H.sourceOriginIndex, y.Config.notification.sourceOriginAlt.length - 1, H.alternateDomainJson))
    }, H.alternateDomainPermissionHandler = function(e, t, n) {
        for (var o = e; o <= t; o++) {
            H.permissionDomain = y.Config.notification.sourceOriginAlt[o];
            var i = H.getAlternateDomainConfig(n, H.permissionDomain);
            if (H.sourceOriginIndex = o + 1, 3 != i && 2 != i) {
                d.Helper.addMsgReciever(H.msgReciever), "https:" == y.Config.global.locationProtocol ? d.Helper.addIFrame(H.permissionDomain + "?action=izrmsubs&izHardUnsub=1", "izAltSubFrame" + o) : d.Helper.addIFrame(H.permissionDomain + "?action=izrmsubs", "izAltSubFrame" + o);
                break
            }
            if (o == t) return
        }
    }, H.getAlternateDomainConfig = function(e, t) {
        return null != e[t] ? e[t] : ""
    }, H.setAlternateDomainConfig = function(e, t, n) {
        e = "" != e ? e : {};
        e[t] = n, H.alternateDomainJson = e, e = JSON.stringify(e), p.StorageManager.setConfigLocal(b.KeyMapper.ALT_DOMAIN_STATUS, e)
    }, H.getPushTokenFromLStorage = function() {
        var e = "";
        return e = (e = p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN)) && d.Helper.isJSONString(e) ? d.Helper.parseToJSON(e) || {} : e
    }, H.removeSubscriptionInFrame = function() {
        var e = "rmSubToParent",
            t = {
                izrmstatus: 3
            },
            n = document.location.href,
            n = d.Helper.getParamFromUrl(n, "izHardUnsub");
        try {
            var o, i = p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN);
            1 == n ? (H.unsubscribeNotification(), d.Helper.postMessage("parent", e, t)) : "" != i ? (o = y.Config.UUID, H.sendSubscriptionUpdate(o, 2, function() {
                d.Helper.postMessage("parent", e, t)
            })) : d.Helper.postMessage("parent", e, t)
        } catch (e) {}
    }, H.syncLastVisit = function() {
        var e = d.Helper.getLanguage(),
            t = d.Helper.getMetaValue("keywords"),
            n = {
                last_website_visit: !0
            };
        "" != e && (n.lang = e), "" != t && (n.keywords = t);
        var o = new Date,
            e = p.StorageManager.getConfigLocal("lastVisit", b.KeyMapper.SYNC),
            t = !1;
        e && (t = new Date(e).getDate()), H.syncAllSubscribersVisit(), "" != p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN) && o.getDate() !== t ? (t = p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN), t = d.Helper.isJSONString(t) ? d.Helper.parseToJSON(t) : t, n = {
            pid: y.Config.client,
            et: "userp",
            act: "add",
            val: JSON.stringify(n)
        }, n = l(l({}, n), H.getSubscriptionParameters(t)), f.HttpRequest.postForm(d.Helper.getEndpoint("last_visit"), n).then(function() {
            p.StorageManager.updateLastSync("lastVisit")
        }).catch(function(e) {})) : d.Helper.displayLog("Sync last Visit Blocked")
    }, H.syncAllSubscribersVisit = function() {
        var e, t, n, o;
        1 == y.Config.notification.syncVisitType && (e = d.Helper.getEndpoint("syncAllSubscribersVisit"), t = d.Helper.getLanguage(), n = d.Helper.getMetaValue("keywords"), o = encodeURIComponent([window.location.protocol, "//", window.location.host, window.location.pathname].join("")), o = {
            pid: y.Config.client,
            bkey: y.Config.UUID,
            url: o
        }, "" != n && (o.keywords = n), "" != t && (o.lang = t), f.HttpRequest.postForm(e, o).catch(function(e) {}))
    }, H.applyBrowserPatch = function() {
        1 == y.Config.global.browserType && 0 == y.Config.notification.promptType && (61 < parseInt(y.Config.global.browserVer) || 60 < parseInt(y.Config.global.browserVer) && 1 != y.Config.global.deviceType) && (!y.Config.notification.isSdkHttps || y.Config.notification.isSdkHttps && "http:" == y.Config.global.locationProtocol) && (y.Config.notification.promptType = 1, y.Config.notification.optInDesignType || (y.Config.notification.optInDesignType = 1)), 2 == y.Config.global.browserType && 0 == y.Config.notification.promptType && 12.1 <= parseFloat(y.Config.global.browserVer) && (y.Config.notification.promptType = 1, y.Config.notification.optInDesignType || (y.Config.notification.optInDesignType = 1)), 3 == y.Config.global.browserType && 0 == y.Config.notification.promptType && 72 <= y.Config.global.browserMajorVersion && (y.Config.notification.promptType = 1, y.Config.notification.optInDesignType || (y.Config.notification.optInDesignType = 1))
    }, H.isSupported = function() {
        return c(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return y.Config.global.browserName == b.KeyMapper.BROWSER_FIREFOX && "http:" == y.Config.global.locationProtocol ? [2, !1] : [4, H.isIncognitoMode()];
                    case 1:
                        return e.sent() ? (y.Config.global.isIncoginito = !0, d.Helper.displayLog("Incognito mode detected!"), [2, !1]) : [2, H.isPushSupported()]
                }
            })
        })
    }, H.isPushSupported = function() {
        return !!H.isVapidSupported() || "safari" in window && "pushNotification" in window.safari
    }, H.isVapidSupported = function() {
        return !!("https:" == y.Config.global.locationProtocol && (y.Config.notification.isSdkHttps || 1 == y.Config.notification.windowType && 0 == y.Config.notification.isSdkHttps) && "Notification" in window && "serviceWorker" in navigator)
    }, H.loadOptin = function() {
        return c(this, void 0, void 0, function() {
            var t, n, o, i, r, a, s, c, l, u, d, p, f;
            return g(this, function(e) {
                return f = y.Config.notification.promptDesign, t = f.bgColor, n = f.btn1ForeColor, o = f.btn1Txt, p = f.btn1bgColor, i = f.btn2ForeColor, r = f.btn2Txt, d = f.btn2bgColor, a = f.icon, s = f.message, c = f.messageForeColor, l = f.titleForeColor, u = f.position, f = f.subMessage, d = {
                    designType: y.Config.notification.optInDesignType,
                    templateType: "optin",
                    bgColor: t,
                    messageForeColor: c,
                    position: u,
                    icon: a,
                    message: s,
                    subMessage: f,
                    btn1Txt: o,
                    btn2Txt: r,
                    titleForeColor: l,
                    btn1ForeColor: n,
                    btn2ForeColor: i,
                    btn2bgColor: d,
                    btn1bgColor: p,
                    containerId: "iz-optin-main-container",
                    onSuccess: function() {
                        return window._izooto.openPopup()
                    },
                    onFailure: function() {
                        return window._izooto.closeDialog()
                    }
                }, (p = document.createElement("div")).id = "iz-optin-main-container", document.body.appendChild(p), m.Notification.optinCallback(d), [2]
            })
        })
    }, H.showOptin = function(e) {
        var n = this;
        d.Helper.addExternalJS("https://cdn.izooto.com/optin/js/optin.min.js").then(function() {
            var t = new window.izootoOptinComponent;
            t && t.init(e).then(function() {
                return c(n, void 0, void 0, function() {
                    return g(this, function(e) {
                        return t.getHTML().then(function(e) {
                            e && (y.Config.notification.dialogDesign = e, y.Config.notification.dialogDesign = H.dynamicBrandingPartnerHandler(y.Config.notification.dialogDesign), d.Helper.izootoBrandingHandler(), t.show(), H.sendEvent(b.KeyMapper.OPTIN_SHOWN))
                        }), [2]
                    })
                })
            }).catch(function() {})
        }).catch(function() {
            alert("Error in Loading init Component")
        })
    }, H.dynamicBrandingPartnerHandler = function(e) {
        return e = y.Config.brandingPartner != y.Config.defaultBrandingPartner ? y.Config.notification.dialogDesign.replace("iZooto", y.Config.brandingPartner) : e
    }, H.loadDesign = function(e, t) {
        try {
            if ("object" != typeof e) return "";
            for (var n in e) {
                var o;
                e.hasOwnProperty(n) && (o = new RegExp("{{--" + n + "--}}", "g"), t = t.replace(o, e[n]))
            }
        } catch (e) {}
        return t
    }, H.getPermissionStatusFromFrame = function() {
        return new Promise(function(t, e) {
            d.Helper.addMsgReciever(function(e) {
                e = d.Helper.parseToJSON(e.data);
                !e.hasOwnProperty(b.KeyMapper.MESSAGE) || (e = e[b.KeyMapper.MESSAGE]).hasOwnProperty("izPermsStatus") && null != e.izPermsStatus && t(e.izPermsStatus)
            }, !0);
            var n = y.Config.notification.sourceOrigin + "?action=izcheckperms";
            d.Helper.addIFrame(n, "izPermsFrame")
        })
    }, H.getSubDomainPermissionStatus = function() {
        return new Promise(function(t, e) {
            var n = p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN),
                o = p.StorageManager.getStorage(b.KeyMapper.PERMISSION_STATUS),
                i = H.getPermissionStatusFromStorage();
            0 != i || 2 == o ? t(i) : "https:" == y.Config.global.locationProtocol ? H.getPermissionStatusFromFrame().then(function(e) {
                H.updatePermissionStatus(e = 1 == e && "" != n ? 0 : e), t(e)
            }) : "" != n ? H.tokenValidator(function(e) {
                H.updatePermissionStatus(e), t(e)
            }) : t(i)
        }).catch(function(e) {
            d.Helper.displayLog(e)
        })
    }, H.setRepeatPromptDelay = function(e) {
        var t;
        0 !== e && (t = (t = new Date).setTime(t.getTime() + 60 * e * 1e3), "Setting repeat prompt delay for ".concat(e, " minutes"), p.StorageManager.setConfigLocal(b.KeyMapper.REPEAT_PROMPT_DELAY, t))
    }, H.setActivePrompt = function(e) {
        var t;
        ("https:" === y.Config.global.locationProtocol && 0 == y.Config.notification.windowType || "http:" === y.Config.global.locationProtocol) && (window.addEventListener("beforeunload", function() {
            p.StorageManager.removeStorage(b.KeyMapper.ACTIVE_PROMPT)
        }), t = (t = new Date).setTime(t.getTime() + 60 * e * 1e3), p.StorageManager.setStorage(b.KeyMapper.ACTIVE_PROMPT, t))
    }, H.isActivePrompt = function() {
        var e = new Date;
        return p.StorageManager.getStorage(b.KeyMapper.ACTIVE_PROMPT) > e.getTime()
    }, H.updatePermissionStatus = function(e) {
        e === b.KeyMapper.PROMPT_ALLOWED || e === b.KeyMapper.ALREADY_GRANTED || 1 === e ? p.StorageManager.setConfigLocal(b.KeyMapper.PERMISSION_STATUS, 1) : e === b.KeyMapper.PROMPT_DENIED || e === b.KeyMapper.ALREADY_DENIED || 2 == e ? p.StorageManager.setConfigLocal(b.KeyMapper.PERMISSION_STATUS, 2) : p.StorageManager.setConfigLocal(b.KeyMapper.PERMISSION_STATUS, 0), p.StorageManager.updateLastSync(b.KeyMapper.PERMISSION_STATUS)
    }, H.sendPermissionStatusFromFrame = function() {
        var e = 0;
        "Notification" in window && "granted" == window.Notification.permission && (e = 1), d.Helper.postMessage("parent", "izPermsStatus", e)
    }, H.updateSubscriptionProcessor = function(e, t) {
        var n = y.Config.UUID,
            o = p.StorageManager.getConfigLocal(b.KeyMapper.PERMISSION_STATUS);
        t = p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN);
        t = H.getSubscriptionKey(t);
        "subscribe" == e ? y.Config.store.isSoftSubscribeTriggered || ("" != t && "" != n && H.sendSubscriptionUpdate(n, 0, function() {
            d.Helper.displayLog("Re-Subscribing")
        }), y.Config.store.isSoftSubscribeTriggered = !0, 3 == o && p.StorageManager.removeConfigLocal(b.KeyMapper.PERMISSION_STATUS), H.triggerPromptHandler()) : "unsubscribe" == e && "" != t && "" != n && H.sendSubscriptionUpdate(n, 2, function() {
            p.StorageManager.setConfigLocal(b.KeyMapper.PERMISSION_STATUS, 3), H.sendEvent(b.KeyMapper.UNSUBSCRIBED)
        })
    }, H.sendSubscriptionUpdate = function(t, n, o) {
        var i = 0 == n ? d.Helper.getEndpoint("SoftSubscribe") : 2 == n ? d.Helper.getEndpoint("SoftUnsubscribe") : d.Helper.getEndpoint("supUrl");
        d.Helper.getFlagBasedParameter().then(function(e) {
            e.bKey = t, e.action = n, e.izcid = p.StorageManager.getConfigLocal(b.KeyMapper.IZCID), e.ht = "https:" == y.Config.global.locationProtocol ? 1 : 0, f.HttpRequest.postForm(i, e).then(function() {
                o()
            }).catch(function(e) {})
        })
    }, H.scrollHandler = function(e) {
        var t = window.screen.availHeight,
            n = window.scrollY;
        1 != y.Config.notification.isTriggeredOnScoll && (t <= n || document.documentElement.scrollTop >= t) && (y.Config.notification.isTriggeredOnScoll = 1, e())
    }, H.brandingOverlayHandler = function() {
        1 == y.Config.notification.overlay ? H.openHttpsOverlay() : 1 == y.Config.branding && H.openHttpsBranding()
    }, H.openHttpsBranding = function() {
        var e;
        if (!(0 < y.Config.notification.windowType) && 0 != y.Config.branding) {
            if (1 != d.Helper.getDeviceType()) try {
                window.addEventListener("scroll", H.brandingScroll)
            } catch (e) {}
            if (d.Helper.addHTML("div", y.Config.notification.httpsBranding, "izooto-branding")) try {
                y.Config.brandingPartner != y.Config.defaultBrandingPartner && null !== (e = window.document.querySelector("#izooto-branding a")) && void 0 !== e && e.setAttribute("onclick", "return false;")
            } catch (e) {}
            d.Helper.izootoBrandingHandler()
        }
    }, H.openHttpsOverlay = function() {
        var e;
        if (!(0 < y.Config.notification.windowType) && 0 != y.Config.notification.overlay) {
            if (1 != d.Helper.getDeviceType()) try {
                window.addEventListener("scroll", H.brandingScroll)
            } catch (e) {}
            if ((y.Config.global.browserName = b.KeyMapper.BROWSER_CHROME) && 62 < parseInt(d.Helper.getBrowserVersion()) && 3 == d.Helper.getDeviceType() && (y.Config.notification.httpsOverlay = ""), d.Helper.addHTML("div", y.Config.notification.httpsOverlay, "izooto-branding")) try {
                y.Config.brandingPartner != y.Config.defaultBrandingPartner && null !== (e = window.document.querySelector("#izooto-branding a")) && void 0 !== e && e.setAttribute("onclick", "return false;")
            } catch (e) {}
            d.Helper.izootoBrandingHandler()
        }
    }, H.brandingScroll = function() {
        null != document.getElementById("izooto-branding") && (30 < window.pageYOffset || 30 < document.body.scrollTop) && H.closeHttpsOverlay()
    }, H.closeHttpsOverlay = function() {
        var e;
        if (!(0 < y.Config.notification.windowType)) {
            try {
                null !== (e = document.getElementById("izooto-branding")) && void 0 !== e && e.remove()
            } catch (e) {
                d.Helper.displayLog("Error-Removing-Div" + e)
            }
            if (1 != d.Helper.getDeviceType()) try {
                window.removeEventListener("scroll", H.brandingScroll)
            } catch (e) {}
        }
    }, H.popupNotice = function(e) {
        try {
            document.getElementById("dynamic_iz").innerHTML = "<center>" + e + "</center>"
        } catch (e) {}
    }, H.setManifest = function() {
        try {
            if (1 != y.Config.global.browserType || 0 != y.Config.notification.subscriptionType) return;
            var e = document.getElementsByTagName("head")[0],
                t = document.createElement("link");
            t.rel = "manifest", t.href = y.Config.notification.manifest, e.appendChild(t)
        } catch (e) {}
    }, H.tokenValidator = function(n, e) {
        null == e && (e = y.Config.UUID);
        e = "".concat(d.Helper.getEndpoint("subscriptionValidator"), "?s=1&bkey=").concat(e, "&pid=").concat(y.Config.client);
        f.HttpRequest.get(e).then(function(e) {
            var t = 1;
            e = d.Helper.parseToJSON(e), null != n && (e.hasOwnProperty("status") && 0 == e.status && (t = 0), n(t))
        }).catch(function() {})
    }, H.checkAlternates = function() {
        "object" == typeof window._izAlternate ? (null != window._izAlternate.initAlt && "function" == typeof window._izAlternate.initAlt && window._izAlternate.initAlt(), Object.keys(window._izAlternate).map(function(n, e) {
            Object.keys(window._izooto).map(function(e, t) {
                e === n && (window._izooto[e] = window._izAlternate[n])
            })
        })) : d.Helper.displayLog("No alternate implementations found")
    }, H.subcriptionToObject = function(e) {
        return e = "string" == typeof e && d.Helper.isJSONString(e) ? d.Helper.parseToJSON(e) : e
    }, H.isCurrentTokenExpired = function(e, t) {
        var n = p.StorageManager.getConfigLocal(t, b.KeyMapper.SYNC),
            t = new Date;
        return !(t.getTime() < t.setTime(n + 1e3 * e))
    }, H.isPermissionStatusExpired = function(e) {
        return 1 == e && H.isCurrentTokenExpired(y.Config.notification.tokenExpire, b.KeyMapper.PERMISSION_STATUS)
    }, H.getPermissionStatusFromStorage = function() {
        var e = 0,
            t = p.StorageManager.getConfigLocal(b.KeyMapper.PERMISSION_STATUS);
        return e = "" != t && !H.isPermissionStatusExpired(t) ? t : e
    }, H.isHttpsSitePermissionAlreadyGranted = function() {
        return !!(y.Config.notification.isSdkHttps && y.Config.notification.isSupported && "granted" == window.Notification.permission && 2 != y.Config.global.browserType || 2 == y.Config.global.browserType && "16" <= y.Config.global.browserVer)
    }, H.getWindowType = function() {
        var e = window.location.href.toLocaleLowerCase(),
            t = "";
        return -1 !== (t = e.substr(e.lastIndexOf("?") + 1)).indexOf("action=prompt") ? 1 : -1 !== t.indexOf("action=izrmsubs") ? 2 : -1 !== t.indexOf("action=izcheckmaster") ? 3 : "action=izcheckperms" == t ? 4 : -1 !== t.indexOf("action=izvalidator&izobj=") ? 5 : -1 !== t.indexOf("action=noroot") ? 6 : -1 !== t.indexOf("izcmd=initamponetap") ? 7 : -1 !== t.indexOf("izcmd=syncemailsubscription") ? 8 : 0
    }, H.syncPIDset = function() {
        p.StorageManager.getConfigLocal("pidList", b.KeyMapper.SYNC) || H.setCookieGlobalID().then(function() {
            var e = document.getElementById(b.KeyMapper.IZCIDDOM);
            p.StorageManager.updateLastSync("pidList"), d.Helper.postMessage(e, "setAllowedList", y.Config.client)
        })
    }, H.msgReciever = function(e) {
        var t, e = d.Helper.parseToJSON(e.data);
        e.hasOwnProperty(b.KeyMapper.MESSAGE) && (e = e[b.KeyMapper.MESSAGE], d.Helper.displayLog("Received event : ", e), "izCidToParent" == (null == e ? void 0 : e.k) ? (H.setIzcidDb(e.v), p.StorageManager.setConfigLocal(b.KeyMapper.IZCID, e.v), p.StorageManager.updateLastSync("IZCID")) : "izCidWithPidList" == (null == e ? void 0 : e.k) ? "object" != typeof e.v || (t = e.v).hasOwnProperty("pidList") && t.pidList && p.StorageManager.setConfigLocal("pidList", t.pidList) : e.hasOwnProperty("rmSubToParent") && void 0 !== e.rmSubToParent ? H.removeSubscriptionReceiver(e.rmSubToParent.izrmstatus) : e.hasOwnProperty(b.KeyMapper.MASTER_TO_CHILD) && void 0 !== e[b.KeyMapper.MASTER_TO_CHILD] ? C.MasterDomain.masterConfigReciver(e[b.KeyMapper.MASTER_TO_CHILD]) : e.hasOwnProperty(b.KeyMapper.CHILD_TO_MASTER) && void 0 !== e[b.KeyMapper.CHILD_TO_MASTER] ? C.MasterDomain.setMasterStorage(e[b.KeyMapper.CHILD_TO_MASTER]) : e.hasOwnProperty("izPermsStatus") ? (p.StorageManager.setConfigLocal(b.KeyMapper.PERMISSION_STATUS, e.izPermsStatus), p.StorageManager.updateLastSync(b.KeyMapper.PERMISSION_STATUS)) : e.hasOwnProperty("syncWelcomeSent") ? H.showWelcomeNotification(!0) : 0 < (t = Object.keys(e)).length && (e.hasOwnProperty("serviceWorkerVersion") && null != e.serviceWorkerVersion && (y.Config.notification.serviceWorkerVersion = e.serviceWorkerVersion, delete e.serviceWorkerVersion), e.hasOwnProperty(b.KeyMapper.SUBSCRIPTION_SYNCED) && 1 == e[b.KeyMapper.SUBSCRIPTION_SYNCED] && (H.subscriptionSyncedFromSW = !0, delete e[b.KeyMapper.SUBSCRIPTION_SYNCED]), t = Object.keys(e), H.sendEvent(t[0], e[t[0]])))
    }, H.syncHookInDb = function(t) {
        var n;
        "syncNotificationClick" != t && "syncNotificationView" != t || (null != y.Config.notification.syncNotificationClick || null != y.Config.notification.syncNotificationView ? (n = y.Config.notification[t], h.IndexedDB.getIndexDBData("options", t).then(function(e) {
            (e && e.hasOwnProperty("val") ? e.val : "") != n && h.IndexedDB.addUpdate(t, n).then(function(e) {}).catch(function(e) {
                d.Helper.displayLog(e)
            })
        }).catch(function(e) {
            d.Helper.displayLog(e)
        })) : d.Helper.displayLog("Invalid Hook Request"))
    }, H.syncNotificationSent = function(e) {
        e = {
            pid: y.Config.client,
            bkey: y.Config.UUID,
            btype: y.Config.global.browserType,
            dtype: y.Config.global.deviceType,
            rid: e.rid
        };
        f.HttpRequest.postForm(d.Helper.getEndpoint("notificationSent"), e, !0).then(function() {
            "sent Api synced successfully with ".concat(y.Config.brandingPartner)
        }).catch(function(e) {})
    }, H.syncNotificationView = function(e) {
        var t = {
            pid: y.Config.client,
            bkey: y.Config.UUID,
            cid: e.id,
            rid: e.rid,
            op: "view",
            pl: 1
        };
        1 == e.viewFlag && (e = d.Helper.getEndpoint("syncNotificationView"), f.HttpRequest.postForm(e, t, !0).catch(function(e) {}))
    }, H.showWelcomeNotification = function(r) {
        return c(this, void 0, void 0, function() {
            var t, n, o, i;
            return g(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 7, , 8]), t = function(t) {
                            return ["title", "message", "icon", "rid", "key", "id"].every(function(e) {
                                return !!t[e]
                            })
                        }, n = y.Config.welcomePlaybook, o = n.data, 0 != n.status ? [3, 1] : [2, !1];
                    case 1:
                        return (o.viewFlag = 1, o.clickFlag = 1, o.sysEvents = 0, o.domainNum = 0, i = function() {
                            H.syncNotificationSent(o), H.syncNotificationView(o)
                        }, t(o)) ? r ? (i(), [2, !1]) : [3, 2] : [3, 5];
                    case 2:
                        return [4, H.sendLocalNotification(o).then(function() {
                            y.Config.notification.isSdkHttps && i()
                        })];
                    case 3:
                        return e.sent(), [2, !0];
                    case 4:
                        return [3, 6];
                    case 5:
                        return d.Helper.displayLog("Welcome playbook : ".concat(b.KeyMapper.INVALID_PAYLOAD)), [2, !1];
                    case 6:
                        return [3, 8];
                    case 7:
                        return e.sent(), [2, !1];
                    case 8:
                        return [2]
                }
            })
        })
    }, H.syncSendChurn = function() {
        try {
            var e, t, n, o = p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN);
            o && (e = H.getSubscriptionParameters(o), t = l({
                pid: y.Config.client
            }, e), n = d.Helper.getEndpoint("syncClientSideChurn"), f.HttpRequest.postForm(n, t).then(function() {
                var e = p.StorageManager.getStorage(b.KeyMapper.PUSH_TOKEN);
                o == e && p.StorageManager.removeStorage(b.KeyMapper.PUSH_TOKEN)
            }))
        } catch (e) {}
    }, H.CBUEvent = function(e) {
        if (y.Config.convertBlockedUsers.status) switch (e) {
            case b.KeyMapper.PROMPT_ALLOWED:
            case b.KeyMapper.ALREADY_GRANTED:
                d.Helper.hideElement("#iz-wp-cbu-dialog");
                break;
            case b.KeyMapper.PROMPT_DENIED:
            case b.KeyMapper.ALREADY_DENIED:
                H.initCBUDialog()
        }
    }, H.initCBUDialog = function() {
        H.isCbuRepeatDelayed() || H.registerEventForCbuDialog()
    }, H.registerEventForCbuDialog = function() {
        y.Config.convertBlockedUsers.triggerType ? H.cbuDialogOnScroll() : H.cbuDialogWithDelay()
    }, H.cbuDialogWithDelay = function() {
        setTimeout(function() {
            H.isCBURepeatDelayed()
        }, 1e3 * y.Config.convertBlockedUsers.promptDelay)
    }, H.cbuDialogOnScroll = function() {
        try {
            var t;
            d.Helper.isScreenScrollable() && (d.Helper.displayLog("onblock prompt will be shown on page scroll!"), t = 0, window.addEventListener("scroll", function() {
                var e = window.pageYOffset || document.documentElement.scrollTop;
                t < e && 0 < t && H.isCBURepeatDelayed(), t = e <= 0 ? 0 : e
            }, !1))
        } catch (e) {}
    }, H.isCBURepeatDelayed = function() {
        H.isUnBlockPopupInitialize || (H.isUnBlockPopupInitialize = !0, f.HttpRequest.get("https://cdn.izooto.com/webpush/blockedvis/dialog.html").then(function(e) {
            try {
                if (!e) return;
                d.Helper.addHTML("div", e, "iz-wp-cbu-dialog"), H.dynamicTitleMesssageHandling(), H.setCbuDialogRepeatPromptDelay(), d.Helper.izootoBrandingHandler(), d.Helper.setHref(".iz-wp-block-dialog-branding-url", "https://www.izooto.com/campaign/getting-started-with-izooto?utm_source=referral&utm_medium=convert_blocked_users&utm_campaign=" + y.Config.notification.siteUrl), H.registerEventToHideCbuDialog(), H.registerEventToShowUnblockContent()
            } catch (e) {}
        }).catch(function(e) {}))
    }, H.registerEventToHideCbuDialog = function() {
        try {
            document.querySelectorAll(".iz-wp-block-dialog-close").forEach(function(e) {
                e.addEventListener("click", function(e) {
                    d.Helper.hideElement("#iz-wp-cbu-dialog")
                })
            })
        } catch (e) {}
    }, H.registerEventToShowUnblockContent = function() {
        try {
            document.querySelector("#iz-wp-block-dialog-show-btn").addEventListener("click", function(e) {
                H.subscriptionSource = 3, H.changeContentOnDifferentBrowser(), d.Helper.hideElement("#iz-wp-block-dialog-popup"), d.Helper.showElement("#iz-wp-block-dialog-content")
            })
        } catch (e) {}
    }, H.dynamicTitleMesssageHandling = function() {
        try {
            var e, t, n, o = d.Helper.getDomElement(".iz-wp-block-dialog-title"),
                i = d.Helper.getDomElement(".iz-wp-block-dialog-message"),
                r = d.Helper.getDomElement("#iz-wp-block-dialog-show-btn");
            "" != y.Config.convertBlockedUsers.title && (e = (e = y.Config.convertBlockedUsers.title.trim()).slice(0, 100), o.innerHTML = e), "" != y.Config.convertBlockedUsers.message && (t = (t = y.Config.convertBlockedUsers.message.trim()).slice(0, 100), i.innerHTML = t), "" != y.Config.convertBlockedUsers.btnText && (n = (n = y.Config.convertBlockedUsers.btnText.trim()).slice(0, 20), r.innerHTML = n)
        } catch (e) {}
    }, H.changeContentOnDifferentBrowser = function() {
        try {
            for (var e = d.Helper.getDomElement(".iz-wp-block-dialog-browserimage"), t = d.Helper.getDomElement(".iz-wp-block-dialog-browser-content"), n = H.getInstructions(), o = 0; o < n.length; o++) {
                var i = document.createElement("li");
                i.innerHTML = n[o], t.appendChild(i)
            }
            e.src = H.getGIFUrl()
        } catch (e) {}
    }, H.getGIFUrl = function() {
        var e = H.nudgeUserObj();
        if (e.hasOwnProperty("type")) {
            e = e.type;
            return "".concat("https://cdn.izooto.com/webpush/blockedvis/").concat(e, ".gif")
        }
        return !1
    }, H.getInstructions = function() {
        var e = H.nudgeUserObj();
        return !!e.hasOwnProperty("instructions") && e.instructions
    }, H.nudgeUserObj = function() {
        var e = d.Helper.getOSName(),
            t = d.Helper.getBrowserName(),
            t = "".concat(t, "_").concat(e),
            e = {};
        return e["".concat(b.KeyMapper.BROWSER_CHROME, "_").concat(b.KeyMapper.OS_WINDOWS)] = {
            type: 1,
            instructions: ["Click on the <b>lock</b> icon in the website address bar.", "Enable the <b>Notifications</b> toggle", "<b>Reload</b> the page and you’re good to go! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_CHROME, "_").concat(b.KeyMapper.OS_MAC)] = {
            type: 2,
            instructions: ["Click on the <b>lock</b> icon in the website address bar.", "Under notifications, enable the toggle and change it to <b>Allow</b>", "All Set! <b>Reload</b> the page and you’re good to go! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_CHROME, "_").concat(b.KeyMapper.OS_ANDROID)] = {
            type: 8,
            instructions: ["Tap on the lock icon in the website address bar", "Tap on <b>Permissions</b>, and then Reset permissions", "All Set! <b>Reload</b> the page and click on Allow when prompted! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_SAFARI, "_").concat(b.KeyMapper.OS_MAC)] = {
            type: 3,
            instructions: ["Click on Safari -> Preferences", "Under Websites -> Notifications, select “Allow” from the dropdown", "All Set! <b>Reload</b> the page and you’re good to go! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_FIREFOX, "_").concat(b.KeyMapper.OS_WINDOWS)] = {
            type: 4,
            instructions: ["Click on the <b>Notifications</b> icon in the website address bar", "Clear the <b>blocked</b> status and reload the page", "Click on <b>“Allow”</b> when prompted to subscribe", "All Set! <b>Reload</b> the page and you’re good to go! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_FIREFOX, "_").concat(b.KeyMapper.OS_MAC)] = {
            type: 7,
            instructions: ["Click on the <b>Notifications</b> icon in the website address bar", "Clear the <b>blocked</b> status and reload the page", "Click on <b>“Allow”</b> when prompted to subscribe", "All Set! You’re good to go! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_FIREFOX, "_").concat(b.KeyMapper.OS_ANDROID)] = {
            type: 9,
            instructions: ["Tap on the <b>lock</b> icon in the website address bar", "Under notifications, change status to <b>“Allowed”</b>", "All Set! <b>Reload</b> the page and click on Allow when prompted! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_OPERA, "_").concat(b.KeyMapper.OS_WINDOWS)] = {
            type: 5,
            instructions: ["Click on the <b>lock</b> icon in the website address bar", "Enable the <b>Notifications</b> toggle", "All Set! <b>Reload</b> the page and you’re good to go! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_OPERA, "_").concat(b.KeyMapper.OS_MAC)] = {
            type: 6,
            instructions: ["Click on the <b>lock</b> icon in the website address bar", "Enable the <b>Notifications</b> toggle", "All Set! <b>Reload</b> the page and you’re good to go! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_OPERA, "_").concat(b.KeyMapper.OS_ANDROID)] = {
            type: 10,
            instructions: ["Tap on the <b>green tick</b> icon in the website address bar", "Under permissions, set notifications as <b>“Allowed”</b>.", "All Set! <b>Reload</b> the page and click on Allow when prompted! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_EDGE, "_").concat(b.KeyMapper.OS_WINDOWS)] = {
            type: 11,
            instructions: ["Click on the <b>lock</b> icon in the website address bar", "Under <b>‘Permissions</b> for the site’, click on <b>Allow</b> notifications", "All Set! <b>Refresh</b> the page and you’re good to go! 🎉"]
        }, e["".concat(b.KeyMapper.BROWSER_EDGE, "_").concat(b.KeyMapper.OS_MAC)] = {
            type: 12,
            instructions: ["Click on the bell icon in the website address bar", "Click on Allow notifications", "All Set! <b>Refresh</b> the page and you’re good to go! 🎉"]
        }, !!e.hasOwnProperty(t) && e[t]
    }, H.setCbuDialogRepeatPromptDelay = function() {
        var e = (e = new Date).setTime(e.getTime() + 6048e5);
        p.StorageManager.setConfigLocal(b.KeyMapper.NUDGEUSER_DELAY, e)
    }, H.isCbuRepeatDelayed = function() {
        var e = !1,
            t = new Date,
            n = p.StorageManager.getConfigLocal(b.KeyMapper.NUDGEUSER_DELAY);
        return "" != n && n > t.getTime() && (e = !0, d.Helper.displayLog("Wait until convert block user prompt repeat delay expire!")), e
    }, H.subscribeOnBlocked = function() {
        var t;
        H.isOnBlockedRegister || (H.isOnBlockedRegister = !0, t = setInterval(function() {
            var e;
            "granted" == (null === (e = window.Notification) || void 0 === e ? void 0 : e.permission) && (clearInterval(t), d.Helper.displayLog("User granted prompt mannually!"), H.nativeHandler())
        }, 200))
    }, H.canSupportIOSPush = function() {
        return m.Notification.isWebPushEnabled && y.Config.global.browserName == b.KeyMapper.BROWSER_SAFARI && "16.4" <= y.Config.global.browserVer && d.Helper.isIos()
    }, H.IOSManifestHandler = function() {
        return c(this, void 0, void 0, function() {
            var t, n, o, i, r, a;
            return g(this, function(e) {
                try {
                    t = document.querySelector("link[rel='manifest']"), n = H.getManifestData(), o = JSON.stringify(n), i = new Blob([o], {
                        type: "application/json"
                    }), r = URL.createObjectURL(i), t ? d.Helper.displayLog("Manifest file already exist!", t.href) : ((a = document.createElement("link")).rel = "manifest", a.id = "iz-manifest", a.href = r, document.head.appendChild(a), d.Helper.displayLog("Manifest file added by SDK"))
                } catch (e) {
                    d.Helper.displayLog("IOSManifestHandler error", e)
                }
                return [2]
            })
        })
    }, H.getManifestData = function() {
        try {
            var e = {
                    name: H.siteName,
                    display: "standalone",
                    start_url: window.location.origin
                },
                t = document.querySelector('link[rel="shortcut icon"]') || document.querySelector('link[rel="icon"]');
            return t && (e.icons = [{
                src: null == t ? void 0 : t.href,
                sizes: "any"
            }]), e
        } catch (e) {
            return {}
        }
    }, Object.defineProperty(H, "siteName", {
        get: function() {
            var e = window.location.hostname.split(".");
            return "www" === e[0] && e.splice(0, 1), null != e && e.pop(), e.map(function(e) {
                return H.capitalizString(e)
            }).join(" ")
        },
        enumerable: !1,
        configurable: !0
    }), H.capitalizString = function(e) {
        void 0 === e && (e = "");
        try {
            if (e) return e[0].toUpperCase() + e.slice(1)
        } catch (e) {}
    }, H.alternateDomainJson = "", H.alternateDomainIndex = 0, H.permissionDomain = "", H.isSyncPermissionStatus = !0, H.subscriptionOnAllow = !0, H.subscriptionSyncedFromSW = !1, H.minSWVersion = "4.22", H.isUnBlockPopupInitialize = !1, H.isOnBlockedRegister = !1, H.permissionStatus = "", H.subscriptionSource = 0, H.syncableEvents = [, b.KeyMapper.PROMPTED, b.KeyMapper.OPTIN_SHOWN, b.KeyMapper.OPTIN_ALLOWED, b.KeyMapper.OPTIN_CLOSED, b.KeyMapper.ALREADY_DENIED], H);

    function H() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ChannelEventHandler = void 0;
    var r, a = n(2),
        o = n(1),
        i = n(9),
        s = n(22),
        c = n(8),
        l = n(25),
        u = n(26),
        d = n(27),
        p = n(23),
        f = n(13),
        g = n(24);
    (n = r = r || {}).NOT_STARTED = "NOT_STARTED", n.COMPLETED = "COMPLETED", n.INPROGRESS = "INPROGRESS", n.READY_TO_SHOW = "READY_TO_SHOW", n.DISABLED = "DISABLED";
    t.ChannelEventHandler = (y.event = function(e, t) {
        var n = [a.KeyMapper.PROMPTED, a.KeyMapper.POPUP_OPEN, a.KeyMapper.OPTIN_SHOWN, a.KeyMapper.OPTIN_ALLOWED],
            o = [a.KeyMapper.ALREADY_GRANTED, a.KeyMapper.ALREADY_DENIED, a.KeyMapper.PROMPT_DENIED, a.KeyMapper.BROWSER_UNSUPPORTED, a.KeyMapper.PROMPT_ALLOWED, a.KeyMapper.OPTIN_CLOSED, a.KeyMapper.NOTIFICATION_DISABLED, a.KeyMapper.PROMPT_CLOSED, a.KeyMapper.REPEAT_DELAY],
            i = [a.KeyMapper.NEWSHUB_CLOSED, a.KeyMapper.NEWSHUB_FAILED];
        "webPush" == e && (-1 < o.indexOf(t) && (y.channelStatus.webPush = r.COMPLETED), -1 < n.indexOf(t) && (y.channelStatus.webPush = r.INPROGRESS)), "messenger" == e && (t != a.KeyMapper.SUBSCRIBED && t != a.KeyMapper.PROMPT_CLOSED || (y.channelStatus.messenger = r.COMPLETED), t == a.KeyMapper.MESSENGER_READY && (y.channelStatus.messenger = r.READY_TO_SHOW), t == a.KeyMapper.MESSENGER_READY_SHOW && (y.channelStatus.messenger = r.INPROGRESS, this.handleMessengerInterval())), "email" == e && (t == a.KeyMapper.EMAIL_READY && (this.handleEmailInterval(), y.channelStatus.email = r.READY_TO_SHOW), t == a.KeyMapper.EMAIL_INPROGRESS && (y.channelStatus.email = r.INPROGRESS), t == a.KeyMapper.EMAIL_CLOSED && (y.channelStatus.email = r.COMPLETED), t == a.KeyMapper.EMAIL_DISABLED && (y.channelStatus.email = r.DISABLED)), "newsHub" == e && (-1 < i.indexOf(t) && (y.channelStatus.newsHub = r.COMPLETED), t == a.KeyMapper.NEWSHUB_ANIMATIONEND && y.channelStatus.newsHub == r.INPROGRESS && (y.channelStatus.newsHub = r.COMPLETED), t == a.KeyMapper.NEWSHUB_OPEN && (y.channelStatus.newsHub = r.INPROGRESS), t == a.KeyMapper.NEWSHUB_READY && this.handleNewsHubInterval()), "exitIntent" == e && (t == a.KeyMapper.EXITINTENT_SHOWN && (y.channelStatus.exitIntent = r.INPROGRESS), t == a.KeyMapper.EXITINTENT_CLOSED && (y.channelStatus.exitIntent = r.COMPLETED)), "stickyBar" == e && (t == a.KeyMapper.STICKYBAR_READY_SHOW && (y.channelStatus.stickyBar = r.READY_TO_SHOW), t == a.KeyMapper.STICKYBAR_SHOWN && (y.channelStatus.stickyBar = r.INPROGRESS), t == a.KeyMapper.STICKYBAR_CLOSED && (y.channelStatus.stickyBar = r.COMPLETED), t != a.KeyMapper.STICKYBAR_READY_SHOW && t != a.KeyMapper.STICKYBAR_SHOWN || y.handleStickyBarInterval(), this.handleNewsHubVisibiltyOnStickyBarScroll(t)), "articleShare" == e && (t == a.KeyMapper.ARTICLESHARE_READY_SHOW && (y.handlerArticleShareInterval(), y.channelStatus.articleShare = r.READY_TO_SHOW), t == a.KeyMapper.ARTICLESHARE_SHOWN && (y.channelStatus.articleShare = r.INPROGRESS), t == a.KeyMapper.ARTICLESHARE_CLOSED && (y.channelStatus.articleShare = r.COMPLETED)), "adblock" == e && (t == a.KeyMapper.ADBLOCK_READY_SHOW ? this.handleAdblockInterval() : t == a.KeyMapper.ADBLOCK_READY_SHOW && (y.channelStatus.adblock = r.COMPLETED))
    }, y.handleAdblockInterval = function() {
        var e = setInterval(function() {
            y.channelStatus.webPush != r.COMPLETED && y.channelStatus.webPush != r.DISABLED || (clearInterval(e), y.channelStatus.adblock = r.INPROGRESS, d.AdBlockRecovery.showPopup())
        })
    }, y.handleNewsHubInterval = function() {
        var e = setInterval(function() {
            y.channelStatus.messenger, (y.channelStatus.webPush != r.NOT_STARTED && y.channelStatus.webPush != r.INPROGRESS && y.channelStatus.email != r.INPROGRESS || o.Config.global.deviceType != a.KeyMapper.DEVICE_TYPE_MOBILE) && (y.channelStatus.webPush == r.COMPLETED && y.channelStatus.messenger == r.READY_TO_SHOW || y.channelStatus.messenger != r.COMPLETED && y.channelStatus.messenger != r.NOT_STARTED && y.channelStatus.webPush != r.INPROGRESS && y.channelStatus.webPush != r.NOT_STARTED || (y.channelStatus.exitIntent == r.INPROGRESS || o.Config.global.deviceType != a.KeyMapper.DEVICE_TYPE_DESKTOP) && (o.Config.global.deviceType != a.KeyMapper.DEVICE_TYPE_MOBILE || y.channelStatus.exitIntent == r.INPROGRESS || y.channelStatus.email != r.COMPLETED && y.channelStatus.email != r.DISABLED) || (clearInterval(e), y.channelStatus.newsHub !== r.COMPLETED && (y.channelStatus.newsHub = r.INPROGRESS), i.NewsHub.showNewsHubWidget()))
        }, 200)
    }, y.handleEmailInterval = function() {
        var e = setInterval(function() {
            y.channelStatus.messenger, y.channelStatus.webPush == r.COMPLETED && (clearInterval(e), u.Email.showEmailPrompt())
        }, 200)
    }, y.handleMessengerInterval = function() {
        var e = setInterval(function() {
            y.channelStatus.webPush == r.INPROGRESS || y.channelStatus.newsHub == r.INPROGRESS || o.Config.global.deviceType == a.KeyMapper.DEVICE_TYPE_MOBILE && y.channelStatus.email == r.INPROGRESS || y.channelStatus.email == r.READY_TO_SHOW || (o.Config.global.deviceType == a.KeyMapper.DEVICE_TYPE_DESKTOP && y.channelStatus.webPush == r.COMPLETED || o.Config.global.deviceType == a.KeyMapper.DEVICE_TYPE_MOBILE && y.channelStatus.webPush == r.COMPLETED && (y.channelStatus.email == r.COMPLETED || y.channelStatus.email == r.DISABLED)) && (clearInterval(e), y.channelStatus.messenger = r.INPROGRESS, i.NewsHub.hideNewsHubWidget(), s.Messenger.showMessenger(), y.handleNewsHubInterval())
        }, 200)
    }, y.handleStickyBarInterval = function() {
        var e = this,
            t = t || setInterval(function() {
                e.channelStatus.exitIntent != r.NOT_STARTED && e.channelStatus.exitIntent != r.COMPLETED || e.channelStatus.stickyBar != r.READY_TO_SHOW || e.channelStatus.newsHub != r.COMPLETED || c.OSNHelper.isElementinViewport ? e.channelStatus.exitIntent == r.INPROGRESS && e.channelStatus.stickyBar == r.INPROGRESS ? (c.OSNHelper.stickybarHide = !0, c.OSNHelper.hideStickyBar()) : e.channelStatus.exitIntent == r.COMPLETED && e.channelStatus.stickyBar == r.INPROGRESS && (c.OSNHelper.stickybarHide = !1, clearInterval(t), c.OSNHelper.showStickyBar()) : (clearInterval(t), c.OSNHelper.stickybarReadyToShow())
            }, 200)
    }, y.handlerArticleShareInterval = function() {
        var e = setInterval(function() {
            y.channelStatus.exitIntent != r.NOT_STARTED && y.channelStatus.exitIntent != r.COMPLETED || y.channelStatus.articleShare != r.READY_TO_SHOW ? y.channelStatus.exitIntent == r.INPROGRESS && y.channelStatus.articleShare == r.INPROGRESS ? l.ArticleShare.hideArticleShareDialog() : y.channelStatus.exitIntent == r.COMPLETED && y.channelStatus.articleShare == r.INPROGRESS && (clearInterval(e), l.ArticleShare.showArticleShareDialog()) : (clearInterval(e), l.ArticleShare.showArticleShareDialogEventHandling())
        }, 100)
    }, y.handleNewsHubVisibiltyOnStickyBarScroll = function(e) {
        e == a.KeyMapper.STICKYBAR_VISIBLE && (this.channelStatus.newsHub == r.COMPLETED ? (this.isNewshubHideBySticky = !0, i.NewsHub.hideNewsHubWidget()) : this.channelStatus.newsHub == r.INPROGRESS && c.OSNHelper.hideStickyBar()), this.channelStatus.messenger != r.COMPLETED && this.channelStatus.messenger != r.NOT_STARTED || (e == a.KeyMapper.STICKYBAR_HIDDEN && this.channelStatus.newsHub == r.COMPLETED || e == a.KeyMapper.STICKYBAR_CLOSED && this.isNewshubHideBySticky) && i.NewsHub.showNewsHubWidget()
    }, y.showOSNPopup = function() {
        f.Main.widgetData.isHidden && f.Main.initializeDialog(f.Main.widgetData.triggerType), g.StickyBar.readyToShow && g.StickyBar.isHidden && this.channelStatus.stickyBar != r.COMPLETED && (this.channelStatus.exitIntent == r.COMPLETED || this.channelStatus.exitIntent == r.NOT_STARTED) && (y.channelStatus.stickyBar = r.INPROGRESS, c.OSNHelper.showStickyBar())
    }, y.hideOSNPopup = function() {
        g.StickyBar.isHidden = !0, this.channelStatus.exitIntent == r.INPROGRESS && (p.Helper.hideDialog(), y.channelStatus.exitIntent = r.COMPLETED, f.Main.widgetData.isHidden = !0), c.OSNHelper.hideStickyBar()
    }, y.channelStatus = {
        webPush: r.NOT_STARTED,
        messenger: r.NOT_STARTED,
        newsHub: r.NOT_STARTED,
        exitIntent: r.NOT_STARTED,
        stickyBar: r.NOT_STARTED,
        articleShare: r.NOT_STARTED,
        email: r.NOT_STARTED,
        adblock: r.NOT_STARTED
    }, y.isNewshubHideBySticky = !1, y);

    function y() {}
}, function(e, t, n) {
    "use strict";
    var a = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        s = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GAM = void 0;
    var c = n(1),
        l = n(0),
        u = n(2);
    t.GAM = (d.isCallOutAds = function() {
        return !!(d.callOutAds.hasOwnProperty(c.Config.client) || c.Config.newsHub.callOutAds && "" != c.Config.newsHub.callOutAdUnit)
    }, d.createAdContainer = function(e, t) {
        var n = l.Helper.getDomElement(e);
        n.innerHTML = "";
        e = document.createElement("div");
        e.id = t, n.appendChild(e)
    }, d.addNewshubStyleOncustomizeAd = function() {
        21092 == c.Config.client && document.querySelector("#iz-news-hub-posts-main-container").classList.add("large-ad")
    }, d.loadShareArticleAd = function() {
        var e = {};
        try {
            if ("" == c.Config.articleShare.adUnit && !e.hasOwnProperty(c.Config.client)) return;
            var t = e[c.Config.client],
                n = [
                    [320, 50],
                    [300, 100],
                    [320, 100]
                ];
            "" != c.Config.articleShare.adUnit && (t = c.Config.articleShare.adUnit);
            var o = "iz-share-ads";
            d.createAdContainer("#iz-shareAricle-ads", o), l.Helper.addExternalJS(d.GPTScriptSrc).then(function() {
                d.loadAdUnit(o, t, n)
            })
        } catch (e) {}
    }, d.loadAdUnit = function(t, n, o, i) {
        try {
            window.googletag = window.googletag || {
                cmd: []
            }, window.googletag.cmd.push(function() {
                var e = window.googletag.defineSlot(n, o, t).addService(window.googletag.pubads());
                window.googletag.pubads().set("page_url", c.Config.notification.siteUrl), window.googletag.enableServices(), window.googletag.display(t), window.googletag.pubads().isInitialLoadDisabled() && window.googletag.pubads().refresh([e]), window.googletag.pubads().addEventListener("slotRenderEnded", function(e) {
                    i && t == e.slot.getSlotElementId() && (e.isEmpty, i(e.isEmpty))
                })
            })
        } catch (e) {
            i(!0)
        }
    }, d.addGPTScript = function(o, i, r) {
        return a(this, void 0, void 0, function() {
            return s(this, function(e) {
                return [2, new Promise(function(t, n) {
                    d.GPTScriptLoaded ? d.loadAdUnit(o, i, r, function(e) {
                        !0 === e ? n(!1) : t(!0)
                    }) : l.Helper.addExternalJS(d.GPTScriptSrc).then(function() {
                        d.GPTScriptLoaded = !0, d.loadAdUnit(o, i, r, function(e) {
                            !0 === e ? n(!1) : t(!0)
                        })
                    })
                })]
            })
        })
    }, d.setAdSize = function(o, i, r) {
        return new Promise(function(e, t) {
            var n;
            1 == o && (n = 2 != c.Config.exitIntent.templateType ? [
                [320, 50],
                [300, 100],
                [320, 100]
            ] : [
                [300, 250]
            ], e(n = 4 == i || 3 == i && c.Config.global.deviceType == u.KeyMapper.DEVICE_TYPE_MOBILE || 3 == i && null == r ? [
                [300, 250]
            ] : n)), 2 == o && e(n = [
                [320, 50],
                [300, 100],
                [320, 100]
            ])
        })
    }, d.loadGAMAds = function(o, i, r) {
        var e = this;
        return new Promise(function(t, n) {
            return a(e, void 0, void 0, function() {
                return s(this, function(e) {
                    return i && o && r || n(!1), d.addGPTScript(o, i, r).then(function() {
                        t(!0)
                    }).catch(function() {
                        n(!1)
                    }), [2]
                })
            })
        })
    }, d.GPTScriptSrc = "https://securepubads.g.doubleclick.net/tag/js/gpt.js", d.callOutAds = {
        47825: "/22809537726/wtskora/wtskora_newshub_flyout",
        33757: "/22809537726/dimsumdaily/dd_flyout",
        51411: "/22809537726/tamil.abplive.com/ta_flyout",
        27714: "/22809537726/sinarharian/sh_flyout",
        27827: "/22809537726/dailythanthi/dt_flyout",
        18518: "/22809537726/republicworld/rw_flyout",
        51431: "/22809537726/marathi.abplive.com/ma_flyout",
        42051: "/22809537726/siamsport/ss_flyout",
        47481: "/22809537726/tribune.net/tb_flyout",
        43326: "/22809537726/missionmpsc/mm_flyout",
        45716: "/22809537726/insidenova.com/in_flyout",
        42476: "/22809537726/skymetweather/smw_flyout",
        48591: "/22809537726/punjabkesari/pk_flyout",
        51857: "/22809537726/pratibha.eenadu.net_osn/pe_flyout",
        48254: "/22809537726/philstarlife/pl_flyout",
        35515: "/22809537726/vtvgujarati/vg_fo",
        56500: "/22809537726/gujaratijagran/gj_fo",
        53356: "/22809537726/emandirates/er_flyout",
        54032: "/22809537726/talkaaj/ta_fo",
        57761: "/22809537726/lehren/lh_fo",
        41463: "/22809537726/punjabijagran/pj_flyout",
        38225: "/22809537726/krishijagran/kj_flyout",
        40578: "/22809537726/krishijagran/marathikj_flyout",
        40795: "/22809537726/krishijagran/malayalamkj_flyout",
        40798: "/22809537726/krishijagran/tamilkj_flyout",
        49624: "/22809537726/krishijagran/hindikj_flyout",
        40913: "/22809537726/odia.krishijagran/okj_flyout",
        48055: "/22809537726/esakal/es_fo",
        49454: "/22809537726/sarkarnama/sn_fo",
        50861: "/22809537726/ahmednagarlive24/al_fo",
        36419: "/22809537726/haribhoomi/hb_fo",
        50627: "/22809537726/sakshi.com/sk_fo"
    }, d.GPTScriptLoaded = !1, d);

    function d() {}
}, function(e, t, n) {
    "use strict";
    var o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        r = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        c = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.OSNHelper = void 0;
    var d = n(1),
        p = n(0),
        i = n(2),
        l = n(4),
        a = n(6),
        s = n(13),
        u = n(24);
    t.OSNHelper = (f.loadFeed = function(s) {
        return r(this, void 0, void 0, function() {
            var r, a;
            return c(this, function(e) {
                return r = {}, a = [51120], [2, new Promise(function(t, n) {
                    var e = "https://rec.izooto.com/rec/".concat(d.Config.hashFileName, "/0.json"),
                        o = (1 == s ? d.Config.exitIntent : d.Config.stickyBar).feedHash,
                        i = o || d.Config.hashFileName;
                    o && (e = "https://rec.izooto.com/rec/v2/".concat(o, "/0.json")), -1 < a.indexOf(d.Config.client) ? f.loadClientSideRSSFeed().then(t).catch(n) : f.multifeedData.hasOwnProperty(i) ? 0 == f.multifeedData[i] ? n(!1) : t(f.multifeedData[i]) : l.HttpRequest.get(e).then(function(e) {
                        try {
                            (r = p.Helper.parseToJSON(e)) && t(r)
                        } catch (e) {
                            n(r), p.Helper.displayLog("Error to loadfeed:", e)
                        }
                    }).catch(function() {
                        n(r)
                    })
                })]
            })
        })
    }, f.loadClientSideRSSFeed = function() {
        return new Promise(function(e, t) {
            var n = null === (n = p.Helper.getDomElement('link[type="application/rss+xml"]')) || void 0 === n ? void 0 : n.href;
            n || t("Feed url not found on this page!"), l.HttpRequest.get(n).then(f.parseFieldsFromXml).then(e).catch(t)
        })
    }, f.parseFieldsFromXml = function(e) {
        var i = [];
        try {
            var r = new DOMParser;
            r.parseFromString(e, "text/xml").querySelectorAll("item").forEach(function(e) {
                var t = null === (o = null === (t = e.querySelector("title")) || void 0 === t ? void 0 : t.textContent) || void 0 === o ? void 0 : o.trim(),
                    n = null === (o = null === (o = e.querySelector("link")) || void 0 === o ? void 0 : o.textContent) || void 0 === o ? void 0 : o.trim(),
                    e = r.parseFromString((null === (o = e.querySelector("description")) || void 0 === o ? void 0 : o.textContent) || "", "text/html"),
                    o = ((null === (o = null == e ? void 0 : e.body) || void 0 === o ? void 0 : o.innerText) || "").trim(),
                    e = ((null === (e = e.querySelector("img")) || void 0 === e ? void 0 : e.src) || "").trim(); - 1 == i.findIndex(function(e) {
                    return e.itemLink == n
                }) && t && e && n && i.push({
                    t: t,
                    l: n,
                    m: o,
                    mi: e,
                    i: "",
                    pt: ""
                })
            });
            var t = i.splice(0, 5);
            return t
        } catch (e) {}
    }, f.getValidFeed = function(t) {
        return r(this, void 0, void 0, function() {
            return c(this, function(e) {
                return [2, new Promise(function(o, i) {
                    f.loadFeed(t).then(function(e) {
                        var t = [];
                        if (0 != e.length) {
                            for (var n in e) {
                                n = e[n];
                                "" == n.t || "" == n.i && "" == n.mi || t.push(n)
                            }
                            o(t)
                        } else i("Feed is not valid")
                    }).catch(function(e) {
                        i(e)
                    })
                })]
            })
        })
    }, f.onSiteVerifiedFeed = function(e, t) {
        var n = (1 == t ? s.Main.widgetData : u.StickyBar).feedData;
        if (n.length >= e || 4 == d.Config.exitIntent.templateType && 6 <= n.length) {
            t = void 0, t = f.getSortedFeed(n), n = (t = f.getFeaturedFeed(t))[0];
            return t.shift(), t.sort(function(e, t) {
                return .5 - Math.random()
            }), t.unshift(n), t.splice(0, e)
        }
    }, f.getSortedFeed = function(e) {
        if ("" == e[0].m)
            for (var t = 1; t < e.length; t++)
                if ("" != e[t].m) {
                    var n = e[0];
                    e[0] = e[t], e[t] = n;
                    break
                }
        return e
    }, f.getParsedFeed = function(i) {
        return r(this, void 0, void 0, function() {
            var n, o;
            return c(this, function(e) {
                return n = (1 == i ? s.Main.widgetData : u.StickyBar).maxAllowedPost, o = 1 == i ? "Exit_Intent_Recommendations" : "sticky_bar_recommendations", [2, new Promise(function(e, t) {
                    try {
                        e((f.onSiteVerifiedFeed(n, i) || []).map(function(e) {
                            return {
                                title: e.t,
                                message: e.m,
                                image: e.i || e.mi,
                                url: f.addUTMOnUrl(e.l, o),
                                publishTime: e.pt
                            }
                        }))
                    } catch (e) {
                        p.Helper.displayLog("Exit intent unable to load final data ", e), t(e)
                    }
                })]
            })
        })
    }, f.getFeaturedFeed = function(e) {
        if (e[0].hasOwnProperty("f") && 0 == e[0].f)
            for (var t = 1; t < e.length; t++)
                if (e[t].f) {
                    var n = e[0];
                    e[0] = e[t], e[t] = n;
                    break
                }
        return e
    }, f.registerSinglePageScroll = function() {
        var e = !1,
            t = p.Helper.throttle(function() {
                return e ? void(u.StickyBar.isDialogInitialize && f.toggleWidgetOnscroll()) : (f.getScrollDirection() == i.KeyMapper.SCROLL_DOWN && window.scrollY >= window.innerHeight && (e = !0, u.StickyBar.stickyBarInitializeDialog()), !1)
            }, 200);
        document.addEventListener("scroll", function() {
            t()
        }, !1)
    }, f.setExitIntentFeed = function(e) {
        if ((e.length == s.Main.widgetData.maxAllowedPost || 4 == d.Config.exitIntent.templateType && 6 <= e.length) && "object" == typeof e) return 1 == d.Config.exitIntent.templateType || 3 == d.Config.exitIntent.templateType ? (s.Main.widgetData.largePostData = e[0], e.shift(), s.Main.widgetData.smallPostData = e) : s.Main.widgetData.template2PostData = e, !0
    }, f.geStickyBarDialogToDisplay = function(e) {
        return r(this, void 0, void 0, function() {
            return c(this, function(e) {
                return [2, new Promise(function(e, t) {
                    try {
                        f.setStickyBarArticle(), f.stickyBarApplyConfigStyle(), e(f.getTypedDomElement(".iz_osn", d.Config.stickyBar.osnType))
                    } catch (e) {
                        t()
                    }
                })]
            })
        })
    }, f.setStickyBarArticle = function() {
        var e = f.getTypedDomElement(".".concat(f.osnPrefix, "carousel"), d.Config.stickyBar.osnType),
            t = f.getTypedDomElement(".".concat(f.osnPrefix, "notification"), d.Config.stickyBar.osnType);
        u.StickyBar.singlePostHTML = t, f.defaultImage = t.querySelector("img").src, null != t && t.remove();
        for (var n = 0; n < u.StickyBar.maxAllowedPost; n++) {
            var o = u.StickyBar.singlePostHTML.cloneNode(!0);
            o.id = "iz-osn-sticky-article-".concat(n), null != e && e.appendChild(o), f.setSmallPosts(n, u.StickyBar.postData[n], d.Config.stickyBar.osnType)
        }
    }, f.getRandomInt = function(e) {
        return Math.floor(Math.random() * e)
    }, f.getRandomIntInRange = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }, f.setSmallPosts = function(e, t, n) {
        var o = p.Helper.getDomElement("#iz-osn-".concat(1 == n ? "exitIntent" : "sticky", "-article-").concat(e));
        f.setOsnDataIntoElement(o, t, e + 1, n)
    }, f.setOsnDataIntoElement = function(e, t, n, o) {
        try {
            var i, r = 1 == o && d.Config.exitIntent.templateType < 4 ? p.Helper.getDomElement(".iz_osn_icon_1", e) : 4 == o ? p.Helper.getDomElement(".iz_osn_icon_4", e) : p.Helper.getDomElement("img", e),
                a = f.getTypedDomElement(".".concat(f.osnPrefix, "title"), o, e),
                s = f.getTypedDomElement(".".concat(f.osnPrefix, "timestamp"), o, e),
                c = f.getTypedDomElement(".".concat(f.osnPrefix, "message"), o, e),
                l = f.getTrackingObject(o);
            c && (150 <= t.message.length && (t.message += "..."), c.innerHTML = t.message, "" == t.message && c.classList.remove("".concat(f.osnPrefix, "message_").concat(o))), a.innerHTML = t.title, 4 == o && (a.style.lineHeight = "1.35"), 1 == o && d.Config.exitIntent.templateType < 4 || 4 == o ? ((i = new Image).src = t.image, i.onload = function(e) {
                e.target.onload = void 0, r.style.backgroundImage = 'url("'.concat(i.src, '")')
            }, i.onerror = function(e) {
                e.target.src != f.defaultImage && (e.target.onload = void 0, r.style.backgroundImage = 'url("'.concat(i.src, '")'))
            }) : (r.src = t.image, r.onload = function(e) {
                e.target.onload = void 0, e.target.src = t.image
            }, r.onerror = function(e) {
                e.target.src != f.defaultImage && (e.target.onload = void 0, e.target.src = f.defaultImage)
            });
            var u = t.publishTime;
            "" == u ? s.style.display = "none" : t.isAd ? (s.innerHTML = "Sponsored", s.style.display = "block") : s.innerHTML = p.Helper.getTimeAgoStringByTimestamp(1e3 * u), e.onclick = function() {
                window.open(t.url), t.isAd && (l.cid = "ads", l.rid = "ads"), f.syncOnsiteClick(o, t.url, l, n)
            }, f.loaderClose(e, o)
        } catch (e) {
            p.Helper.displayLog("Error to set RightContainer article", e)
        }
    }, f.getTypedDomElement = function(e, t, n) {
        return p.Helper.getDomElement("".concat(e, "_").concat(t), n)
    }, f.loaderClose = function(e, t) {
        try {
            for (var n = e.querySelectorAll(".".concat(f.osnPrefix, "animated_").concat(t)), o = 0; o < n.length; o++) n[o].classList.remove("".concat(f.osnPrefix, "animated_").concat(t))
        } catch (e) {
            p.Helper.displayLog("Error to close loader on article")
        }
    }, f.stickybarReadyToShow = function() {
        f.showStickyBar(), u.StickyBar.readyToShow = !0, a.ChannelEventHandler.event("stickyBar", i.KeyMapper.STICKYBAR_SHOWN), f.syncOnsiteView(d.Config.stickyBar.osnType), p.Helper.setRepeatPromptDelay(d.Config.stickyBar.repeatDelay, i.KeyMapper.STICKYBAR_DELAY), setTimeout(function() {
            u.StickyBar.isDialogInitialize = !0
        }, 3e3), f.stickyBarContentScroll()
    }, f.getHTML = function(o) {
        return r(this, void 0, void 0, function() {
            return c(this, function(e) {
                return [2, new Promise(function(t, n) {
                    l.HttpRequest.get(o).then(function(e) {
                        e || n(), t(e)
                    }).catch(function(e) {
                        n(e)
                    })
                })]
            })
        })
    }, f.stickyBarApplyConfigStyle = function() {
        var e, t = p.Helper.getDomElement(".".concat(f.osnPrefix, "heading_").concat(d.Config.stickyBar.osnType));
        t.style.color = d.Config.stickyBar.titleColor, "" != d.Config.stickyBar.title && (e = (e = d.Config.stickyBar.title.trim()).slice(0, 50), t.innerHTML = e), f.setCSSProperty("--iz-header-bg-color", d.Config.exitIntent.bgColor), f.closeHandler(function() {
            f.closeStickyDialog()
        }, d.Config.stickyBar.osnType)
    }, f.setHeaderColor = function() {
        try {
            var e, t, n;
            d.Config.exitIntent.templateType < 4 ? (e = f.osnPrefix + "card_1", p.Helper.getDomElement("." + e).style.borderTopColor = d.Config.exitIntent.bgColor) : (t = p.Helper.getDomElement(".iz_osn_header_1"), n = p.Helper.getDomElement(".iz_osn_header_arrow"), t.style.backgroundColor = d.Config.exitIntent.bgColor, n.style.fill = d.Config.exitIntent.bgColor)
        } catch (e) {}
    }, f.brandLogoHandler = function() {
        try {
            var e, t = d.Config.exitIntent.logoURL.trim();
            t.startsWith("http") && ((e = p.Helper.getDomElement(".iz_osn_branding_logo")).src = t, e.style.display = "block")
        } catch (e) {
            p.Helper.displayLog("OSN : Cannot find logo element", e)
        }
    }, f.addUTMOnUrl = function(e, t) {
        e = p.Helper.replaceQueryParam(e, "utm_source", "izooto"), e = p.Helper.replaceQueryParam(e, "utm_medium", "on_site_interactions");
        return e = p.Helper.replaceQueryParam(e, "utm_campaign", t)
    }, f.setCSSProperty = function(e, t) {
        document.body.style.setProperty(e, t)
    }, f.closeHandler = function(n, o) {
        (1 == o ? document.querySelectorAll(".".concat(f.osnPrefix, "overlay_1,.").concat(f.osnPrefix, "close_1")) : document.querySelectorAll(".".concat(f.osnPrefix, "close_2"))).forEach(function(t) {
            t.addEventListener("click", function(e) {
                e.stopPropagation(), 1 == o && e.target !== t || n()
            })
        })
    }, f.getEventTime = function() {
        var e = new Date,
            t = new Date(f.startTime),
            t = e.getTime() - t.getTime();
        return parseInt(t / 1e3)
    }, f.syncOnsiteView = function(e) {
        var t = f.getTrackingObject(e = void 0 === e ? 1 : e),
            e = (1 == e ? s.Main.widgetData : u.StickyBar).adNotificationNo;
        e && (t.adp = e);
        e = p.Helper.getEndpoint("syncOnsiteView");
        l.HttpRequest.postForm(e, t, !0).then(function() {
            "exitIntent view Api synced successfully with ".concat(d.Config.brandingPartner)
        }).catch(function(e) {})
    }, f.syncOnsiteDismissed = function(e) {
        var t = f.getTrackingObject(e),
            e = (1 == e ? s.Main.widgetData : u.StickyBar).adNotificationNo;
        e && (t.adp = e);
        e = p.Helper.getEndpoint("syncOnsiteDismissed");
        l.HttpRequest.postForm(e, t, !0).catch(function(e) {})
    }, f.syncOnsiteClick = function(e, t, n, o) {
        t = encodeURIComponent(t);
        n.link = t, n.nc = o, "ads" == n.rid && (n.adp = o);
        o = p.Helper.getEndpoint("syncOnsiteClick");
        l.HttpRequest.postForm(o, n, !0).then(function() {
            "exitIntent click Api synced successfully with ".concat(d.Config.brandingPartner)
        }).catch(function(e) {})
    }, f.toggleWidgetOnscroll = function() {
        u.StickyBar.isClosed || f.stickybarHide || (f.getScrollDirection() == i.KeyMapper.SCROLL_DOWN ? f.hideStickyBar() : f.showStickyBar())
    }, f.showStickyBar = function() {
        try {
            if (f.isElementinViewport) return console.log("Sticky abort : elem is in viewport");
            var e = p.Helper.getDomElement(".iz_osn_slide_down");
            e && e.classList.replace("iz_osn_slide_down", "iz_osn_slide_up"), p.Helper.showElement("#iz_osn_container_stickyBar", !1), a.ChannelEventHandler.event("stickyBar", i.KeyMapper.STICKYBAR_VISIBLE)
        } catch (e) {}
    }, f.hideStickyBar = function() {
        try {
            p.Helper.getDomElement("#iz_osn_container_stickyBar").classList.replace("iz_osn_slide_up", "iz_osn_slide_down"), a.ChannelEventHandler.event("stickyBar", i.KeyMapper.STICKYBAR_HIDDEN)
        } catch (e) {}
    }, f.closeStickyDialog = function() {
        p.Helper.getDomElement("#iz_osn_container_stickyBar").classList.replace("iz_osn_slide_up", "iz_osn_slide_down"), u.StickyBar.isClosed = !0, f.syncOnsiteDismissed(d.Config.stickyBar.osnType), a.ChannelEventHandler.event("stickyBar", i.KeyMapper.STICKYBAR_CLOSED), p.Helper.setRepeatPromptDelay(d.Config.stickyBar.closeDelay, i.KeyMapper.STICKYBAR_DELAY)
    }, f.stickyBarContentScroll = function() {
        var e = f.getTypedDomElement(".iz_osn_right_arrow", 2),
            t = f.getTypedDomElement(".iz_osn_left_arrow", 2);
        3 == d.Config.global.deviceType && f.mobScrollObserver(), e.addEventListener("click", function(e) {
            f.setScroll("right")
        }), t.addEventListener("click", function(e) {
            f.setScroll("left")
        })
    }, f.setScroll = function(e) {
        var t;
        3 == d.Config.global.deviceType ? (t = "right" == e ? u.StickyBar.currentIndex + 1 : u.StickyBar.currentIndex - 1, null != (t = document.querySelector("#iz-osn-sticky-article-".concat(t))) && t.scrollIntoView({
            behavior: "smooth",
            inline: "start"
        })) : (t = document.querySelector(".iz_osn_carousel_2"), e = "right" == e ? t.scrollWidth : 0, t.scrollTo({
            left: e,
            behavior: "smooth"
        }))
    }, f.mobScrollObserver = function() {
        for (var e = document.querySelector(".iz_osn_carousel_2"), t = document.querySelectorAll(".iz_osn_carousel_2 > *"), n = {}, o = new IntersectionObserver(function(e, t) {
                e = e.reduce(function(e, t) {
                    return t.intersectionRatio > e.intersectionRatio ? t : e
                });
                0 < e.intersectionRatio && (u.StickyBar.currentIndex = n[e.target.getAttribute("id")], u.StickyBar.currentIndex)
            }, {
                root: e,
                threshold: .9
            }), i = 0; i < t.length; i++) n[t[i].getAttribute("id")] = i, o.observe(t[i])
    }, f.getScrollDirection = function() {
        if (p.Helper.isScreenScrollable()) {
            var e = !1,
                t = window.pageYOffset || document.documentElement.scrollTop;
            return f.lastScrollTop < t ? e = i.KeyMapper.SCROLL_DOWN : t < f.lastScrollTop && (e = i.KeyMapper.SCROLL_UP), f.lastScrollTop = t, e
        }
    }, f.viewPortDetector = function() {
        if ((-1 < [39837, 22667, 22668, 22669, 29014, 34474, 46972, 47126, 51171, 51241, 51240, 51413, 60772, 9687, 57225, 49454, 47127, 51171, 1764, 2441, 9892, 19662, 4088, 32495, 4093, 30522, 30753, 57263, 62256].indexOf(d.Config.client) || d.Config.hideOSNOnAds) && "IntersectionObserver" in window && !f.isViewportDetectorInitialized) try {
            f.isViewportDetectorInitialized = !0;
            var e = new IntersectionObserver(function(e) {
                e.forEach(function(e) {
                    return f.taboolaElementObj[e.target.id] = e.isIntersecting
                }), f.detectElmentVisibiltyChange()
            });
            f.runtimeObserverHanlder(e)
        } catch (e) {}
    }, f.runtimeObserverHanlder = function(n) {
        function e() {
            try {
                var e = document.querySelectorAll("[id^='taboola-']"),
                    t = Object.values(f.taboolaElementObj).length;
                t != e.length && e.forEach(function(e) {
                    f.taboolaElementObj.hasOwnProperty(e.id) || (f.taboolaElementObj[e.id] = !1, n.observe(e))
                })
            } catch (e) {}
        }
        e(), window.addEventListener("scroll", e)
    }, f.detectElmentVisibiltyChange = function() {
        -1 < Object.values(f.taboolaElementObj).indexOf(!0) ? (f.isElementinViewport = !0, a.ChannelEventHandler.hideOSNPopup()) : (f.isElementinViewport = !1, a.ChannelEventHandler.showOSNPopup())
    }, f.setBannerAd = function(e, t, n, o) {
        var i = 2 == n ? "sticky" : "exitIntent",
            n = "iz-exitintent-feature-ads" == e || ".iz_osn_ads_container_1" == e || ".iz_osn_article_1" == e ? p.Helper.getDomElement(e) : p.Helper.getDomElement("#iz-osn-".concat(i, "-article-").concat(o)),
            e = document.createElement("div");
        e.id = "iz-".concat(i, "-adgebra-ads"), e.style.width = "100%", e.style.height = "100%";
        o = document.createElement("img");
        n.innerHTML = "", n.onclick = null, n.style.cursor = "pointer";
        i = t.image;
        o.src = i, o.style.width = "100%", o.style.height = "100%", o.style.objectFit = "cover", o.setAttribute("alt", "Icon"), e.appendChild(o), n.appendChild(e), n.onclick = function() {
            window.open(t.url)
        }
    }, f.setArticleAd = function(e, t, n, o) {
        var i;
        null == o && 3 == d.Config.exitIntent.templateType ? (i = p.Helper.getDomElement(".iz_osn_article_1"), f.setOsnDataIntoElement(i, t, 0, n)) : null == o && 4 == d.Config.exitIntent.templateType ? (i = p.Helper.getDomElement(".iz_osn_ads_container_1"), f.setOsnDataIntoElement(i, t, 0, n)) : f.setSmallPosts(o, t, n)
    }, f.appendSkeletonLoader = function(e, t) {
        if (null != t) {
            var n = s.Main.widgetData.singlePostHTML.cloneNode(!0);
            return (o = p.Helper.getDomElement("#iz-osn-exitIntent-article-".concat(t))).style.padding = "0px", void(o.innerHTML += n.innerHTML)
        }
        var o;
        null == t && (t = s.Main.widgetData.leftPostHTML.cloneNode(!0), (o = p.Helper.getDomElement(".iz_osn_article_1")).style.padding = "0px", o.innerHTML += t.innerHTML)
    }, f.removeSkeletonLoader = function(e, t) {
        if (null == e && !t && null != t) {
            var n = p.Helper.getDomElement(".iz_osn_article_1"),
                o = p.Helper.getDomElement(".iz_osn_icon_1", n),
                i = p.Helper.getDomElement(".iz_osn_content_1", n);
            return n.removeChild(o), void n.removeChild(i)
        }
        null == e || t || null == t || (n = p.Helper.getDomElement("#iz-osn-exitIntent-article-".concat(e)), o = p.Helper.getDomElement(".iz_osn_icon_1", n), i = p.Helper.getDomElement(".iz_osn_content_1", n), n.removeChild(o), n.removeChild(i))
    }, f.createArticleContainer = function(e, t) {
        if (1 == e) {
            if (4 == d.Config.exitIntent.templateType) return (o = p.Helper.getDomElement(".iz_osn_ads_container_1")).innerHTML = "", o.style.margin = "25px", void o.appendChild(s.Main.widgetData.singlePostHTML);
            if (null != t) {
                var n = s.Main.widgetData.singlePostHTML.cloneNode(!0),
                    o = p.Helper.getDomElement("#iz-osn-exitIntent-article-".concat(t));
                return 3 == d.Config.exitIntent.templateType && (o.style.padding = "0px"), void(o.innerHTML = n.innerHTML)
            }
            if (3 == d.Config.exitIntent.templateType && null == t) {
                var i = s.Main.widgetData.leftPostHTML.cloneNode(!0),
                    o = p.Helper.getDomElement(".iz_osn_article_1");
                return 3 == d.Config.exitIntent.templateType && (o.style.padding = "0px"), void(o.innerHTML = i.innerHTML)
            }
        }
        2 == e && (n = u.StickyBar.singlePostHTML.cloneNode(!0), (o = p.Helper.getDomElement("#iz-osn-sticky-article-".concat(t))).innerHTML = n.innerHTML)
    }, f.getTrackingObject = function(e) {
        var t = {
                1: "exitIntent",
                2: "stickyBar",
                3: "articleShare",
                4: "adBR"
            },
            n = d.Config[t[e]];
        return o(o(o(o({
            pid: d.Config.client,
            bkey: d.Config.UUID,
            cid: n.cid,
            rid: n.rid,
            ot: e
        }, 1 == e || 3 == e ? {
            tt: 1 == e ? s.Main.widgetData.triggerOnEventType : 3
        } : {}), 1 == e ? {
            ed: f.getEventTime()
        } : {}), "exitIntent" == t[e] && s.Main.widgetData.rfid ? {
            fi: s.Main.widgetData.rfid
        } : {}), "stickyBar" == t[e] && u.StickyBar.rfid ? {
            fi: u.StickyBar.rfid
        } : {})
    }, f.getRandomIndex = function(e) {
        return 2 == d.Config.exitIntent.templateType ? 1 != d.Config.global.deviceType ? 2 : 0 == d.Config.exitIntent.multiAds ? f.getRandomInt(s.Main.widgetData.maxAllowedPost) : 0 === e ? f.getRandomIntInRange(0, 1) : f.getRandomIntInRange(2, 3) : f.getRandomInt(s.Main.widgetData.smallPostAllowed)
    }, f.lastScrollTop = 0, f.osnPrefix = "iz_osn_", f.defaultImage = "", f.multifeedData = {}, f.stickybarHide = !1, f.isFeedRejected = !1, f.isElementinViewport = !1, f.taboolaElementObj = {}, f.isViewportDetectorInitialized = !1, f);

    function f() {}
}, function(e, s, t) {
    "use strict";
    var n = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        c = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(s, "__esModule", {
        value: !0
    }), s.ELM_SELECTOR = s.NH_PREFIX = s.NewsHub = void 0;
    var l = t(1),
        u = t(0),
        i = t(4),
        r = t(2),
        a = t(6),
        d = t(12),
        o = t(18),
        p = t(28),
        f = t(5),
        g = t(7),
        y = t(3),
        m = t(19),
        h = t(16),
        S = t(10),
        b = t(39);
    s.NewsHub = (Object.defineProperty(v, "isCrios", {
        get: function() {
            return l.Config.global.browserName == r.KeyMapper.BROWSER_CHROME && u.Helper.isIos()
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(v, "isFxios", {
        get: function() {
            return l.Config.global.browserName == r.KeyMapper.BROWSER_FIREFOX && u.Helper.isIos()
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(v, "topOrBottomPlacement", {
        get: function() {
            return l.Config.newsHub.placement[0] ? "bottom" : "top"
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(v, "leftOrRightPlacement", {
        get: function() {
            return l.Config.newsHub.placement[1] ? "right" : "left"
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(v, "isValidRSS", {
        get: function() {
            return l.Config.newsHub.isRSS && l.Config.newsHub.cid && l.Config.newsHub.rid
        },
        enumerable: !1,
        configurable: !0
    }), v.init = function() {
        return n(this, void 0, void 0, function() {
            return c(this, function(e) {
                if (l.Config.newsHub.status) {
                    if (l.Config.global.isFrame) return [2];
                    if (!l.Config.newsHub.autoWidget && !l.Config.newsHub.triggered) return [2];
                    if (l.Config.newsHub.isRSS) {
                        if (!v.isValidRSS) return u.Helper.displayLog("New Hub through RSS Misconfigured"), [2];
                        v.isFeedSourceRSS = !0
                    }
                    o.Session.isNew && y.StorageManager.setConfigLocal(r.KeyMapper.CALLOUT_SHOWN, !1), u.Helper.displayLog("New Hub initiated..."), v.render().then(function() {
                        (v.nhFeed = new p.FeedHelper(v.minimumNotificationToShow, v.isFeedSourceRSS)).setup(), l.Config.newsHub.autoWidget || (v.showNewsHubWidget(), v.openWidget()), v.showLoader(v.minimumNotificationToShow)
                    })
                } else a.ChannelEventHandler.event("newsHub", r.KeyMapper.NEWSHUB_FAILED);
                return [2]
            })
        })
    }, v.showEmptyNotificationMessage = function() {
        u.Helper.setCssPropperty("#iz-news-hub-notifications-body-container", "height", "100%"), document.querySelector(s.ELM_SELECTOR.noNotification).style.display = "flex", document.querySelector(s.ELM_SELECTOR.notificationWrapperId).style.display = "none"
    }, v.showNotificationContent = function() {
        return n(this, void 0, void 0, function() {
            var t, n;
            return c(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (e.trys.push([0, 2, , 3]), v.isNewsLoading) ? [2] : (v.isNewsLoading = !0, v.showLoader(), [4, v.nhFeed.getNotifications()]);
                    case 1:
                        return (t = e.sent(), v.isNewsLoading = !1, n = t.data, (t = t.status) != v.nhFeed.status.ALREADY_IN_PROGRESS && v.hideLoader(), t == v.nhFeed.status.NO_MORE_NOTIFICATIONS && v.showFooterMessage(), t == v.nhFeed.status.NULL_NOTIFICATION_SENT && v.showEmptyNotificationMessage(), document.querySelector(s.ELM_SELECTOR.notificationWrapperId) || v.isNewsContainerLoaded) ? (n.forEach(function(e, t) {
                            e = v.payloadParser(e);
                            e && v.appendNews(e)
                        }), [3, 3]) : (u.Helper.displayLog("News container not loaded!"), [2]);
                    case 2:
                        return n = e.sent(), u.Helper.displayLog("add news handler error:", n), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }, v.payloadParser = function(e) {
        if (e && (e.hasOwnProperty("payload") || e.hasOwnProperty("p"))) try {
            var t = e.clickedAt,
                n = (e = e.payload || e.p).idx,
                o = u.Helper.getTimeAgoStringByTimestamp(parseInt(e.ct)),
                i = e.ln,
                i = u.Helper.replaceQueryParam(i, "utm_source", "izooto");
            return i = u.Helper.replaceQueryParam(i, "utm_content", "article_click"), {
                id: parseInt(e.r) ? parseInt(e.r) : n,
                title: e.t,
                url: u.Helper.replaceQueryParam(i, "utm_medium", "news_hub"),
                bannerImage: e.bi || e.i,
                createdAt: o,
                createdAtTimeStamp: e.ct,
                clickedAt: t,
                cid: e.id
            }
        } catch (e) {
            u.Helper.displayLog("Payload parser error:", e)
        }
    }, v.getPayloadToSync = function(e) {
        return l.Config.newsHub.isRSS && (e.id = l.Config.newsHub.rid, e.cid = l.Config.newsHub.cid), e
    }, v.appendNews = function(n) {
        var e, i = "".concat(s.NH_PREFIX, "notification-").concat(n.id, "-").concat(n.createdAtTimeStamp),
            r = v.noticationHtmlElement.cloneNode(!0);
        r.id = i;
        var t, o, i = "#".concat(i);
        for (t in n) ! function(t) {
            try {
                var o = r.querySelector(w + t);
                "bannerImage" == t ? (o.style.display = "none", o.src = n[t], o.onerror = function(e) {
                    try {
                        document.querySelector("".concat(i, " img")).style.display = "none", document.querySelector("".concat(i, " svg.no-preview")).style.display = "block", u.Helper.removeHTML(document.querySelector("".concat(i, " .iz-news-hub-post-icon-wrapper-loader.iz-news-hub-animated-background")))
                    } catch (e) {
                        u.Helper.displayLog("Newshub error onError", e)
                    }
                }, o.onload = function(e) {
                    try {
                        var t, n;
                        document.querySelector("".concat(i, " img")).style.display = "block", u.Helper.removeHTML(document.querySelector("".concat(i, " .iz-news-hub-post-icon-wrapper-loader.iz-news-hub-animated-background"))), o.height > o.width && (t = document.querySelector("".concat(i, " .iz-news-hub-customer-icon-container")), (n = v.bluredBackgroudImage.cloneNode(!0)).querySelector("image").setAttribute("href", o.src), t.appendChild(n))
                    } catch (e) {
                        u.Helper.displayLog("Newshub error onLoad", e)
                    }
                }) : "title" == t ? o.innerHTML = u.Helper.removeHtmlTagsFromString(n[t]) : "createdAt" == t && null != n[t] ? o.innerText = n[t] : "createdAt" == t && null == n[t] && (o.style.visibility = "hidden")
            } catch (e) {
                u.Helper.displayLog("Error in append news payload- ".concat(t, ":"), n)
            }
        }(t);
        null !== (e = document.querySelector("#posts-content-cotainer")) && void 0 !== e && e.insertAdjacentHTML("beforeend", r.outerHTML), v.nhFeed.isNoNotification && (v.nhFeed.isNoNotification = !1), v.rtlFlag && (v.rtlFlag = !1, v.detectRTL()), null !== (e = document.querySelector(i)) && void 0 !== e && e.addEventListener("click", function(e) {
            var t;
            v.closeShareTab(), v.isFeedSourceRSS || v.nhFeed.setPayloadData(n.id, {
                clickedAt: Date.now()
            }), d.GoogleAnalytics.processNewsHub("Article Clicked"), u.Helper.syncClick(v.getPayloadToSync(n), "newshub"), null !== (t = window.open(n.url, "_blank")) && void 0 !== t && t.focus()
        }, !1), 1 == l.Config.global.deviceType && ((o = document.querySelector("".concat(i, " ").concat(s.ELM_SELECTOR.sharesheetTrigger))).classList.add("share-before-desktop"), null !== (a = document.querySelector(i)) && void 0 !== a && a.addEventListener("mouseleave", function(e) {
            o.style.visibility = "hidden", v.closeShareTab()
        }, !1), null !== (a = document.querySelector(i)) && void 0 !== a && a.addEventListener("mouseenter", function(e) {
            o.style.visibility = "visible"
        }, !1));
        var a = document.querySelector("".concat(i, " ").concat(s.ELM_SELECTOR.sharesheetTrigger));
        null != a && a.addEventListener("click", function(e) {
            var t = document.querySelector("".concat(i, " ").concat(s.ELM_SELECTOR.shareSheetTab));
            t && ("flex" == t.style.display ? v.closeShareTab() : (v.closeShareTab(), t.style.display = "flex", v.addShareSheetAnimationClass(t), v.setSocialShareLink(i, n), d.GoogleAnalytics.processNewsHub("Clicked Share"))), e.stopPropagation()
        }, !0)
    }, v.addShareSheetAnimationClass = function(e) {
        try {
            var t = 0;
            e.querySelectorAll("svg").forEach(function(e) {
                v.isCrios ? e.style.opacity = "1" : (setTimeout(function() {
                    e.style.opacity = "1", e.classList.add("iz-share-icons-animation")
                }, t), t += 50)
            })
        } catch (e) {
            u.Helper.displayLog("Newshub animation error", e)
        }
    }, v.setSocialShareLink = function(n, e) {
        try {
            var t, o = v.getSharingLink(e.url);
            for (t in o) ! function(t) {
                var e = document.querySelector("".concat(n, " ").concat(s.ELM_SELECTOR.socialSharePrefix).concat(t));
                "link" == t ? e.onclick = function(e) {
                    e.stopPropagation(), v.copyNewsLinkToClipboard(o[t]), d.GoogleAnalytics.processNewsHub("Shared on", "copy link")
                } : (e.onclick = function(e) {
                    e.stopPropagation(), d.GoogleAnalytics.processNewsHub("Shared on", t)
                }, e.href = o[t])
            }(t)
        } catch (e) {
            u.Helper.displayLog("set social share error:", e)
        }
    }, v.closeShareTab = function() {
        try {
            var e = document.querySelectorAll(s.ELM_SELECTOR.shareSheetTab);
            null != e && e.forEach(function(e) {
                e.style.display = "none", e.querySelectorAll("svg").forEach(function(e) {
                    e.style.opacity = "0", e.classList.remove("iz-share-icons-animation")
                })
            })
        } catch (e) {
            u.Helper.displayLog("close action list error:", e)
        }
    }, v.getSharingLink = function(e) {
        return e = u.Helper.replaceQueryParam(e, "utm_campaign", "Share"), {
            link: decodeURIComponent(u.Helper.replaceQueryParam(e, "utm_content", "link_copy")),
            whatsapp: "https://api.whatsapp.com/send?text=".concat(encodeURIComponent(u.Helper.replaceQueryParam(e, "utm_content", "whatsapp"))),
            facebook: "https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(u.Helper.replaceQueryParam(e, "utm_content", "facebook"))),
            twitter: "https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(u.Helper.replaceQueryParam(e, "utm_content", "twitter")), "&text="),
            mail: "mailto:info@example.com?&subject=&cc=&bcc=&body=".concat(encodeURIComponent(u.Helper.replaceQueryParam(e, "utm_content", "mail"))),
            linkedin: "https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(u.Helper.replaceQueryParam(e, "utm_content", "linkedin")))
        }
    }, v.render = function() {
        return n(this, void 0, void 0, function() {
            return c(this, function(e) {
                return [2, new Promise(function(t, e) {
                    var n = l.Config.newsHub.templateType,
                        o = l.Config.newsHub.htmlVersion[n];
                    u.Helper.displayLog("Rendering News Hub");
                    o = "https://cdn.izooto.com/newshub/widgets/".concat(n, "/v").concat(o, ".html");
                    i.HttpRequest.get(o).then(function(e) {
                        try {
                            if (!e) return void a.ChannelEventHandler.event("newsHub", r.KeyMapper.NEWSHUB_FAILED);
                            u.Helper.addHTML("div", e, "iz-newshub-container").style.cssText = "position:absolute;z-index:2147483647;", v.setMinimumNotificationToShow(), v.isNewsContainerLoaded = !0, v.animatedLoaderHtmlElement = document.querySelector(s.ELM_SELECTOR.animatedLoader), u.Helper.removeHTML(v.animatedLoaderHtmlElement), v.bluredBackgroudImage = document.querySelector("." + s.NH_PREFIX + "blur-image-container"), u.Helper.removeHTML(v.bluredBackgroudImage), v.noticationHtmlElement = document.querySelector("." + s.NH_PREFIX + "notification"), u.Helper.removeHTML(v.noticationHtmlElement), v.footerTextElement = document.querySelector("#" + s.NH_PREFIX + "end-text"), u.Helper.removeHTML(v.footerTextElement), v.webPushHandler(), v.applyConfigStyle();
                            try {
                                document.querySelector("." + s.NH_PREFIX + "branding-text").href = "https://www.izooto.com/campaign/getting-started-with-news-hub-izooto?utm_source=referral&utm_medium=news_hub&utm_campaign=" + l.Config.notification.siteUrl
                            } catch (e) {
                                u.Helper.displayLog("newshub branding hide error")
                            }
                            v.attachEventListner(), t(1)
                        } catch (e) {
                            a.ChannelEventHandler.event("newsHub", r.KeyMapper.NEWSHUB_FAILED), u.Helper.displayLog("Error while rendering newshub  : ", e)
                        }
                    })
                })]
            })
        })
    }, v.attachEventListner = function() {
        var e, t;
        try {
            var n = document.querySelector("#" + s.NH_PREFIX + "posts-main-container");
            n.addEventListener("scroll", function() {
                n.scrollHeight - 50 < n.scrollTop + n.clientHeight && v.showNotificationContent()
            }), document.querySelectorAll("".concat(s.ELM_SELECTOR.triggerFloating, " , ").concat(s.ELM_SELECTOR.triggerSticky)).forEach(function(e) {
                e.addEventListener("click", function(e) {
                    v.triggerClickHandler()
                })
            }), null !== (e = document.querySelector(s.ELM_SELECTOR.closeButton)) && void 0 !== e && e.addEventListener("click", v.closeWidget), null !== (t = document.querySelector("." + s.NH_PREFIX + "copyclose-button")) && void 0 !== t && t.addEventListener("click", function() {
                document.querySelector("#" + s.NH_PREFIX + "copied-main").style.display = "none"
            })
        } catch (e) {
            u.Helper.displayLog("Error while attaching event listner", e)
        }
    }, v.triggerClickHandler = function() {
        v.isNewsHubOpened ? v.closeWidget() : l.Config.newsHub.callOut ? (!b.NHCallout.isCallOutStart && o.Session.isNew || b.NHCallout.isCallOutClose) && (v.openWidget(), v.widgetClicked = !0, 1 == l.Config.newsHub.designType && v.stopWiggleAnimation(), v.rippleAnimation.hide()) : v.openWidget()
    }, v.applyConfigStyle = function() {
        try {
            l.Config.newsHub.title && document.querySelectorAll("." + s.NH_PREFIX + "dynamic-title").forEach(function(e) {
                return e.innerHTML = l.Config.newsHub.title.slice(0, 20)
            }), v.triggerButtonVisibiltyHandler(), 1 == l.Config.newsHub.designType && 2 == l.Config.newsHub.templateType ? u.Helper.addClass(s.ELM_SELECTOR.newsHubCotainerId, "".concat(s.NH_PREFIX).concat(v.topOrBottomPlacement, "-").concat(v.leftOrRightPlacement)) : "left" == v.leftOrRightPlacement && u.Helper.addClass(s.ELM_SELECTOR.newsHubCotainerId, s.NH_PREFIX + "notification-container-left"), v.userDefinedPositions && 1 == l.Config.newsHub.designType && v.applyUserDefinedPositions(), document.documentElement.style.setProperty("--ripple-color-floating-bell", l.Config.newsHub.mainColor), a.ChannelEventHandler.event("newsHub", r.KeyMapper.NEWSHUB_READY)
        } catch (e) {
            u.Helper.displayLog("Error while applying config:", e)
        }
    }, v.changeNewsHubPlacement = function(e) {
        for (var t in v.userDefinedPositions = e) 50 < e[t] && (v.userDefinedPositions[t] = 50), e[t] < -50 && (v.userDefinedPositions[t] = -50);
        var n = v.topOrBottomPlacement;
        "right" == v.leftOrRightPlacement && (v.userDefinedPositions.shiftHorizontal = -v.userDefinedPositions.shiftHorizontal), "top" == n && (v.userDefinedPositions.shiftVertical = -v.userDefinedPositions.shiftVertical)
    }, v.getUserDefinedFinalPositions = function() {
        var e = v.userDefinedPositions.shiftVertical,
            t = v.userDefinedPositions.shiftHorizontal,
            n = {},
            o = v.getCurrentPosition();
        return e && (e <= 0 && Math.abs(e) > o.verticalOffset && (e = o.verticalOffset), n.verticalOffset = o.verticalOffset + e), t && (t <= 0 && Math.abs(t) > o.horizontalOffset ? (t = o.horizontalOffset, v.userDefinedPositions.shiftHorizontal = t, n.horizontalOffset = v.userDefinedPositions.shiftHorizontal - o.horizontalOffset) : n.horizontalOffset = o.horizontalOffset + t), n
    }, v.applyUserDefinedPositions = function() {
        try {
            var e = v.getUserDefinedFinalPositions(),
                t = "#iz-news-hub-discovr-outer-wrapper.iz-news-hub-floating-icon-container-".concat(v.topOrBottomPlacement, "-").concat(v.leftOrRightPlacement, " {\n\t\t\t\t").concat(void 0 !== e.verticalOffset && null !== e.verticalOffset ? "".concat(v.topOrBottomPlacement, ": ").concat(e.verticalOffset, "px!important;") : "", "\n\t\t\t\t").concat(void 0 !== e.horizontalOffset && null !== e.horizontalOffset ? "".concat(v.leftOrRightPlacement, ": ").concat(e.horizontalOffset, "px!important;") : "", "\n\t\t\t}"),
                n = document.head || document.getElementsByTagName("head")[0],
                o = document.createElement("style");
            n.appendChild(o), o.type = "text/css", o.appendChild(document.createTextNode(t))
        } catch (e) {}
    }, v.getCurrentPosition = function() {
        var e = v.topOrBottomPlacement,
            t = v.leftOrRightPlacement,
            n = "iz-news-hub-floating-icon-container-".concat(e, "-").concat(t),
            n = document.getElementsByClassName(n)[0];
        if (null != n) {
            n = window.getComputedStyle(n), e = "bottom" === e ? n.getPropertyValue("bottom") : n.getPropertyValue("top"), n = "right" === t ? n.getPropertyValue("right") : n.getPropertyValue("left");
            return {
                verticalOffset: parseInt(e.slice(0, -2)),
                horizontalOffset: parseInt(n.slice(0, -2))
            }
        }
    }, v.triggerButtonVisibiltyHandler = function() {
        try {
            var e, t, n, o, i, r = document.querySelector(s.ELM_SELECTOR.triggerSticky),
                a = document.querySelector(s.ELM_SELECTOR.triggerFloating);
            r.style.display = "none", a.style.display = "none", l.Config.newsHub.autoWidget && (2 == l.Config.newsHub.designType ? (r.style.display = "flex", l.Config.newsHub.placement[1] || r.classList.add(s.NH_PREFIX + "sidebar-container-left")) : (a.style.display = "flex", e = l.Config.newsHub.placement[0] ? "bottom" : "top", t = l.Config.newsHub.placement[1] ? "right" : "left", n = "".concat(s.NH_PREFIX, "floating-icon-container-").concat(e, "-").concat(t), a.classList.contains(n) || a.classList.add(n)), setTimeout(function() {
                var e;
                null !== (e = document.querySelector("".concat(s.ELM_SELECTOR.triggerFloating, " ").concat(s.ELM_SELECTOR.mainIcon))) && void 0 !== e && e.classList.add("izooto-news-hub-swing-animation")
            }, 1e3), 1 == l.Config.newsHub.iconType ? document.querySelectorAll(s.ELM_SELECTOR.mainIcon).forEach(function(e) {
                e.style.display = "none"
            }) : (1 == l.Config.newsHub.designType && (document.querySelector(s.ELM_SELECTOR.bellIcon).style.display = "none"), 2 == l.Config.newsHub.designType && document.querySelectorAll("#iz-newshub-bell-svg").forEach(function(e) {
                e.style.display = "none"
            }), o = "https://cdn.izooto.com/newshub/icons/".concat(l.Config.newsHub.iconType, ".svg"), document.querySelectorAll(s.ELM_SELECTOR.mainIcon).forEach(function(e) {
                e.src = o
            }))), l.Config.newsHub.mainColor && (i = document.querySelector("#".concat(s.NH_PREFIX, "sticky-sidebar-dummy-text")), document.querySelector("#" + s.NH_PREFIX + "title-container").style.backgroundColor = l.Config.newsHub.mainColor, r.style.backgroundColor = l.Config.newsHub.mainColor, i.style.backgroundColor = l.Config.newsHub.mainColor, a.querySelector("#" + s.NH_PREFIX + "icon-container").style.backgroundColor = l.Config.newsHub.mainColor, 1 == l.Config.newsHub.iconType && (document.querySelector("#iz-news-hub-bell-clapper").style.fill = l.Config.newsHub.mainColor, document.querySelector(".iz-newsHub-bell-shell").style.fill = l.Config.newsHub.mainColor)), l.Config.branding || (document.querySelector("." + s.NH_PREFIX + "header-branding-text").style.display = "none")
        } catch (e) {
            u.Helper.displayLog("Error while applying config:", e)
        }
    }, v.getAnimationProperty = function(e) {
        var t = document.querySelector(s.ELM_SELECTOR.newsHubCotainerId),
            n = {
                animationDirection: "open" == e ? "normal" : "reverse"
            };
        return 1 == l.Config.newsHub.templateType || 2 == l.Config.newsHub.designType ? (null != t && t.classList.add("izootoSlideAnimation"), n.animationClassName = "izooto-slide-".concat("open" == e ? "in" : "out", "-").concat(v.leftOrRightPlacement, "-animation")) : n.animationClassName = "".concat(s.NH_PREFIX, "scale-").concat(v.topOrBottomPlacement, "-").concat(v.leftOrRightPlacement), n
    }, v.openWidget = function() {
        var e = (t = v.getAnimationProperty("open")).animationClassName,
            t = t.animationDirection;
        document.documentElement.style.setProperty("--direction", t), v.isNewsContainerLoaded && (v.isDataLoaded || (v.isDataLoaded = !0, v.showNotificationContent().then(function() {
            v.hideNewIndicator()
        })), (t = document.querySelector(s.ELM_SELECTOR.newsHubCotainerId)).style.display = "flex", u.Helper.onAnimationOnEnd(t, e, !0).then(function() {
            return v.isNewsHubOpened = !0
        }), a.ChannelEventHandler.event("newsHub", r.KeyMapper.NEWSHUB_OPEN), v.isGAEventSent.open || (v.isGAEventSent.open = !0, d.GoogleAnalytics.processNewsHub("Widget Click")), v.syncEventsWithAPI("syncNewshubOpen", "wopen"), e = 0, l.Config.newsHub.ads && l.Config.newsHub.adUnit ? 0 == v.adLoaded && (e = 1) : S.ThirdPartyAds.isPIDExcluded() && (e = 2), e && v.adsHandler(e, !1))
    }, v.closeWidget = function() {
        var e = (t = v.getAnimationProperty("close")).animationClassName,
            t = t.animationDirection;
        document.documentElement.style.setProperty("--direction", t), v.closeShareTab();
        var n = document.querySelector(s.ELM_SELECTOR.newsHubCotainerId);
        u.Helper.onAnimationOnEnd(n, e, !0).then(function() {
            v.isNewsHubOpened = !1, n.style.display = "none", a.ChannelEventHandler.event("newsHub", r.KeyMapper.NEWSHUB_CLOSED)
        }), v.isGAEventSent.close || (v.isGAEventSent.close = !0, d.GoogleAnalytics.processNewsHub("Widget Close"))
    }, v.setElmStyles = function() {
        try {
            var e = document.querySelector("#iz-news-hub-sticky-sidebar");
            l.Config.newsHub.placement[1] ? (e.style.left = "unset", e.style.right = "-" + (e.clientWidth / 2 - e.clientHeight / 2) + "px") : (e.clientWidth, e.clientHeight, e.style.right = "unset", e.style.left = "-" + (e.clientWidth / 2 - e.clientHeight / 2) + "px")
        } catch (e) {}
    }, v.copyNewsLinkToClipboard = function(e) {
        try {
            v.closeShareTab();
            var t = document.querySelector("#" + s.NH_PREFIX + "copied-main");
            if (clearTimeout(v.copiedTimeoutInstance), t.style.display = "block", v.copiedTimeoutInstance = setTimeout(function() {
                    t.style.display = "none"
                }, 3e3), !navigator.clipboard) {
                var n = document.createElement("textarea");
                n.value = e, n.style.position = "fixed", n.style.left = "-999999px", n.style.top = "-999999px", document.body.appendChild(n), n.focus(), n.select();
                try {
                    document.execCommand("copy");
                    n.remove()
                } catch (e) {
                    u.Helper.displayLog("Fallback: Oops, unable to copy", e)
                }
                return
            }
            navigator.clipboard.writeText(e).then(function() {}, function(e) {
                u.Helper.displayLog("Async: Could not copy text: ", e)
            })
        } catch (e) {
            u.Helper.displayLog("Error: Could not copy text: ", e)
        }
    }, v.showLoader = function(e) {
        var t;
        void 0 === e && (e = 1);
        for (var n = 1; n <= e; n++) null !== (t = document.querySelector("#posts-content-cotainer")) && void 0 !== t && t.insertAdjacentHTML("beforeend", v.animatedLoaderHtmlElement.outerHTML)
    }, v.hideLoader = function() {
        document.querySelectorAll(s.ELM_SELECTOR.animatedLoader).forEach(function(e) {
            e.parentNode.removeChild(e)
        })
    }, v.showFooterMessage = function() {
        var e, t, n;
        try {
            if (v.nhFeed.isNoNotification) return;
            null !== (e = document.querySelector(s.ELM_SELECTOR.notificationWrapperId)) && void 0 !== e && e.appendChild(v.footerTextElement), 1 == l.Config.newsHub.templateType || (n = u.Helper.getDomElement(s.ELM_SELECTOR.alertContainer), null !== (t = document.querySelector(s.ELM_SELECTOR.notificationWrapperId)) && void 0 !== t && t.appendChild(n)), v.footerTextElement.style.display = "block"
        } catch (e) {}
    }, v.detectRTL = function() {
        var e = document.querySelector("." + s.NH_PREFIX + "customer-icon-container");
        15 < e.offsetLeft && (e.offsetLeft, document.querySelector("#" + s.NH_PREFIX + "main-container").setAttribute("izdirection", "rtl"))
    }, v.showNewsHubWidget = function() {
        try {
            if (v.isNewsHubOpened || !v.isNewsContainerLoaded) return;
            var e = document.querySelector("#iz-news-hub-sticky-sidebar");
            2 != l.Config.newsHub.designType || b.NHCallout.isCalloutShown || (e.style.visibility = "hidden"), u.Helper.showElement("#iz-news-hub-main-container"), v.syncShownEvent(), u.Helper.displayLog("News hub widget shown"), v.setElmStyles(), b.NHCallout.init()
        } catch (e) {}
    }, v.showNewIndicator = function() {
        (1 != l.Config.newsHub.designType || void 0 === v.userDefinedPositions || 0 === v.userDefinedPositions.shiftVertical && 0 === v.userDefinedPositions.shiftHorizontal) && setTimeout(function() {
            var e = y.StorageManager.getConfigLocal(r.KeyMapper.NEWSHUB_LASTEST_NOTIFICATION),
                t = y.StorageManager.getConfigLocal(r.KeyMapper.NEWSHUB_LATEST_OPEN_NOTIFICATION);
            "" == e || "" != t && e == t || v.createIndicatorContainer()
        }, 1e3)
    }, v.createIndicatorContainer = function() {
        try {
            var e = 1 == l.Config.newsHub.designType ? "#iz-news-hub-new-indicator-floating" : "#iz-news-hub-new-indicator-sidebar";
            u.Helper.showElement(e)
        } catch (e) {}
    }, v.hideNewIndicator = function() {
        var e = 1 == l.Config.newsHub.designType ? "#iz-news-hub-new-indicator-floating" : "#iz-news-hub-new-indicator-sidebar";
        u.Helper.hideElement(e)
    }, v.updateLatestNotificationValue = function() {
        var e = y.StorageManager.getConfigLocal(r.KeyMapper.NEWSHUB_LASTEST_NOTIFICATION),
            t = y.StorageManager.getConfigLocal(r.KeyMapper.NEWSHUB_LATEST_OPEN_NOTIFICATION);
        "" != e && "" != t && e != t && y.StorageManager.setConfigLocal(r.KeyMapper.NEWSHUB_LASTEST_NOTIFICATION, t)
    }, v.hideNewsHubWidget = function() {
        try {
            if (v.isNewsHubOpened || !v.isNewsContainerLoaded) return;
            u.Helper.hideElement("#iz-news-hub-main-container"), v.shownTimeoutInstance = clearTimeout(v.shownTimeoutInstance), u.Helper.displayLog("News hub widget hidden")
        } catch (e) {}
    }, v.syncShownEvent = function() {
        v.isGAEventSent.shown || !l.Config.newsHub.autoWidget || v.shownTimeoutInstance || (v.shownTimeoutInstance = setTimeout(function() {
            v.isGAEventSent.shown = !0, d.GoogleAnalytics.processNewsHub("Shown"), v.syncNewsHubImp || v.syncEventsWithAPI("syncNewshubView", "wview")
        }, 5e3))
    }, v.syncEventsWithAPI = function(e, t) {
        t = {
            pid: l.Config.client,
            bkey: l.Config.UUID,
            op: t,
            btype: l.Config.global.browserType,
            dtype: l.Config.global.deviceType,
            os: l.Config.global.os,
            bver: l.Config.global.browserVer
        }, e = u.Helper.getEndpoint(e);
        i.HttpRequest.postForm(e, t, !0).then(function() {
            "Api synced successfully with ".concat(l.Config.brandingPartner)
        }).catch(function(e) {})
    }, v.loadLatestData = function() {
        return new Promise(function(t, n) {
            p.FeedHelper.loadLatestNotificationForCallout().then(function(e) {
                v.latestNotificationData = e, t(!0)
            }).catch(function(e) {
                n(!(v.latestNotificationData = {}))
            })
        })
    }, v.startWiggleAnimation = function() {
        try {
            var e = document.querySelector("#iz-news-hub-bell-group"),
                t = document.querySelector("#iz-news-hub-bell-clapper");
            if (e.classList.add("iz-news-hub-bell-group"), t.classList.add("iz-news-hub-bell-clapper"), v.wiggleIntervalId) return;
            v.wiggleIntervalId = setInterval(function() {
                e.classList.add("iz-news-hub-bell-group"), t.classList.add("iz-news-hub-bell-clapper")
            }, 4e3)
        } catch (e) {
            u.Helper.displayLog("Start wiggle animation error", e)
        }
    }, v.stopWiggleAnimation = function() {
        v.wiggleIntervalId = window.clearInterval(v.wiggleIntervalId)
    }, v.removeImageWhiteSpace = function(e) {
        var t = document.querySelector("#" + s.NH_PREFIX + "icon-discoverability");
        u.Helper.getDomElement(".".concat(s.NH_PREFIX, "icon-discoverability-img-wrapper"), e).style.display = "none", l.Config.newsHub.placement[1] || (t.style.paddingRight = "0px")
    }, v.imagebgBlur = function(n, o) {
        o.onload = function(e) {
            try {
                var t;
                o.style.display = "block", (o.naturalHeight > o.naturalWidth || o.naturalWidth == o.naturalHeight) && ((t = v.bluredBackgroudImage.cloneNode(!0)).querySelector("image").setAttribute("href", o.src), n.appendChild(t), o.style.objectFit = "contain")
            } catch (e) {
                u.Helper.displayLog("Newshub discoverability image error onLoad", e)
            }
        }
    }, v.crossIcon = function() {
        var e = 1 == l.Config.newsHub.iconType ? s.ELM_SELECTOR.bellIcon : s.ELM_SELECTOR.mainIcon;
        return {
            show: function() {
                u.Helper.hideElement(e), u.Helper.showElement(s.ELM_SELECTOR.crossIcon), u.Helper.addClass(s.ELM_SELECTOR.triggerFloating, "iz-news-hub-cross-visible")
            },
            hide: function() {
                u.Helper.showElement(e), u.Helper.hideElement(s.ELM_SELECTOR.crossIcon), u.Helper.removeClass(s.ELM_SELECTOR.triggerFloating, "iz-news-hub-cross-visible")
            }
        }
    }, v.stickyAnimationHandler = function() {
        b.NHCallout.isCallOutClose = !1, document.querySelector("#iz-news-hub-sticky-sidebar").style.visibility = "visible";
        var e = document.querySelector("#".concat(s.NH_PREFIX, "sticky-sidebar")),
            t = l.Config.newsHub.placement[1] ? "iz-news-hub-stickybar-slideIn-right" : "iz-news-hub-stickybar-slideIn-left",
            n = l.Config.newsHub.placement[1] ? "iz-news-hub-stickybar-slideOut-right" : "iz-news-hub-stickybar-slideOut-left";
        e.classList.add(t), e.addEventListener("animationend", function() {
            setTimeout(function() {
                e.classList.replace(t, n), v.widgetClicked ? e.classList.remove(n) : (b.NHCallout.showCallout(), b.NHCallout.calloutCloseHandler())
            }, 3e3)
        }, {
            once: !0
        })
    }, v.bellAnimationHandler = function() {
        try {
            var e, t, n;
            b.NHCallout.isCallOutClose = !1, 1 == l.Config.newsHub.iconType ? (e = document.querySelector(s.ELM_SELECTOR.iconContainer), t = document.querySelector("#iz-news-hub-bell-group"), n = document.querySelector("#iz-news-hub-bell-clapper"), e.addEventListener("animationend", function() {
                setTimeout(function() {
                    t.classList.add("iz-news-hub-bell-group"), n.classList.add("iz-news-hub-bell-clapper"), t.addEventListener("animationend", function() {
                        t.classList.remove("iz-news-hub-bell-group"), n.classList.remove("iz-news-hub-bell-clapper")
                    })
                }, 1500)
            }, {
                once: !0
            }), t.addEventListener("animationend", function() {
                setTimeout(function() {
                    v.widgetClicked || (b.NHCallout.showCallout(), b.NHCallout.calloutCloseHandler())
                }, 1500)
            }, {
                once: !0
            })) : document.querySelector("#izooto-news-hub-swing-animation").addEventListener("animationend", function() {
                setTimeout(function() {
                    v.widgetClicked || (b.NHCallout.showCallout(), b.NHCallout.calloutCloseHandler())
                }, 1500)
            }, {
                once: !0
            })
        } catch (e) {
            u.Helper.displayLog("bell animate handler error", e)
        }
    }, v.sendEvent = function(e) {
        if (l.Config.newsHub.status) switch (e) {
            case r.KeyMapper.PROMPT_ALLOWED:
            case r.KeyMapper.ALREADY_GRANTED:
            case r.KeyMapper.PROMPT_DENIED:
            case r.KeyMapper.ALREADY_DENIED:
                v.webPushHandler();
                break;
            case r.KeyMapper.OPTIN_SHOWN:
                v.isNotificationOptinShowing = !0, v.webPushHandler();
                break;
            case r.KeyMapper.OPTIN_CLOSED:
                v.isNotificationOptinShowing = !1, v.webPushHandler()
        }
    }, v.webPushHandler = function() {
        var e = f.NotificationHelper.getGIFUrl();
        if (m.Notification.isWebPushEnabled && l.Config.notification.isSupported && l.Config.newsHub.nudgeStatus && v.isNewsContainerLoaded && e) switch (null === (e = null === window || void 0 === window ? void 0 : window.Notification) || void 0 === e ? void 0 : e.permission) {
            case "default":
                v.isNotificationOptinShowing ? v.hideNudgeBar() : v.webPushPermissionDefaultHandler();
                break;
            case r.KeyMapper.PROMPT_DENIED:
                v.webPushPermissionDeniedHandler();
                break;
            case "granted":
                v.hideNudgeBar()
        }
    }, v.webPushPermissionDefaultHandler = function() {
        u.Helper.showElement(".".concat(s.NH_PREFIX, "noti-default-wrapper"), !1), u.Helper.hideElement(".".concat(s.NH_PREFIX, "noti-blocked-wrapper"));
        var e = document.querySelector(".".concat(s.NH_PREFIX, "noti-default-wrapper button"));
        null != e && e.addEventListener("click", function() {
            f.NotificationHelper.subscriptionSource = 1, f.NotificationHelper.nativeHandler()
        })
    }, v.webPushPermissionDeniedHandler = function() {
        var e, t;
        try {
            var n = f.NotificationHelper.getGIFUrl();
            0 != n && (u.Helper.hideElement(".".concat(s.NH_PREFIX, "noti-default-wrapper")), u.Helper.showElement(".".concat(s.NH_PREFIX, "noti-blocked-wrapper"), !1), document.querySelector(".iz-news-hub-noti-blocked-wrapper img").src = n, null !== (e = document.querySelector(".".concat(s.NH_PREFIX, "noti-blocked-wrapper .know-more-txt"))) && void 0 !== e && e.addEventListener("mouseenter", function() {
                f.NotificationHelper.subscriptionSource = 2
            })), f.NotificationHelper.subscribeOnBlocked(), null !== (t = u.Helper.getDomElement("#".concat(s.NH_PREFIX, "notifications-body-container"))) && void 0 !== t && t.classList.add("iz-news-hub-unsubscribe")
        } catch (e) {}
    }, v.hideNudgeBar = function() {
        u.Helper.hideElement(".".concat(s.NH_PREFIX, "noti-blocked-wrapper")), u.Helper.hideElement(".".concat(s.NH_PREFIX, "noti-default-wrapper"))
    }, v.setMinimumNotificationToShow = function() {
        var e;
        1 == l.Config.newsHub.templateType && (e = parseInt(window.getComputedStyle(u.Helper.getDomElement(s.ELM_SELECTOR.notificationWrapperId)).height), v.minimumNotificationToShow = Math.ceil(e / 106 + 1) || 12)
    }, v.getAdConfig = function(i) {
        var t = this;
        return new Promise(function(o, e) {
            return n(t, void 0, void 0, function() {
                var t, n;
                return c(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 4, , 5]), i ? [4, b.NHCallout.getCalloutAdConfig()] : [3, 2];
                        case 1:
                            return n = e.sent(), o(n), [3, 3];
                        case 2:
                            t = l.Config.newsHub.adUnit, n = [{
                                adContainerId: "#iz-news-hub-ads-container",
                                adId: "iz-nh-ads",
                                adUnit: t,
                                adFormat: "article",
                                adSize: {
                                    GAM: 21092 == l.Config.client ? [
                                        [300, 250]
                                    ] : [
                                        [320, 50],
                                        [320, 100],
                                        [300, 50],
                                        [300, 100]
                                    ],
                                    adgebra: "200x100",
                                    tpAdSize: "320x100",
                                    Adsence: 21092 == l.Config.client ? [300, 250] : [300, 100]
                                }
                            }], o(n), e.label = 3;
                        case 3:
                            return [3, 5];
                        case 4:
                            return e.sent(), o(!1), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        })
    }, v.adsHandler = function(i, a) {
        return n(this, void 0, void 0, function() {
            var r, t, n, o;
            return c(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]), [4, v.getAdConfig(a)];
                    case 1:
                        if (r = e.sent()) {
                            if (1 == i)
                                for (t = function(e) {
                                        var t, n = (t = r[e]).adContainerId,
                                            o = t.adId,
                                            e = t.adUnit,
                                            i = t.adSize;
                                        g.GAM.createAdContainer(n, o), g.GAM.loadGAMAds(o, e, i.GAM).then(function() {
                                            v.adSuccessHandler(a, o)
                                        }).catch(function() {
                                            h.Adgebra.loadAd(i.adgebra).then(function(e) {
                                                v.setArticleAd(a, e, n, o), v.adSuccessHandler(a, o, !0)
                                            }).catch(function() {
                                                v.adFailureHandler(n, a)
                                            })
                                        })
                                    }, o = 0; o < r.length; o++) t(o);
                            if (2 == i)
                                for (n = function(e) {
                                        var t = (e = r[e]).adContainerId,
                                            n = e.adId,
                                            e = e.adSize;
                                        g.GAM.createAdContainer(t, n), S.ThirdPartyAds.loadAds(e.tpAdSize).then(function(e) {
                                            v.setBannerAd(a, e, t, n), v.adSuccessHandler(a, n)
                                        }).catch(function(e) {
                                            v.adFailureHandler(t, a)
                                        })
                                    }, o = 0; o < r.length; o++) n(o)
                        }
                        return [3, 3];
                    case 2:
                        return e.sent(), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }, v.setBannerAd = function(e, t, n, o) {
        var i = u.Helper.getDomElement("#".concat(o));
        i.innerHTML = "", i.style.display = "none";
        o = document.createElement("img");
        o.src = t.image, o.setAttribute("alt", "Icon"), o.onload = function() {
            i.style.display = "block"
        }, i.style.cursor = "pointer", i.onclick = function() {
            window.open(t.url)
        }, i.appendChild(o)
    }, v.setArticleAd = function(e, t, n, o) {
        var i = (e ? b.NHCallout.calloutHtml : v.noticationHtmlElement).cloneNode(!0),
            r = u.Helper.getDomElement(n);
        if (r.innerHTML = "", i.id = o, r.appendChild(i), e) {
            e = {
                bannerImage: t.image,
                title: t.title,
                url: t.url,
                isAd: 1
            };
            2 == l.Config.newsHub.designType && u.Helper.getDomElement(".iz-news-hub-stickybar-callout-close", i).remove();
            var a = u.Helper.getDomElement(n);
            return b.NHCallout.setCallOutNotification(e, a), void b.NHCallout.calloutEventHandler(e)
        }
        r.style.display = "none";
        var s, c = {
            bannerImage: t.image,
            url: t.url,
            createdAt: "Sponsored",
            title: t.title
        };
        for (s in c)(a = i.querySelector(w + s)) && ("bannerImage" == s && (a.src = c[s]), "title" == s && (a.innerHTML = c[s], a.style.fontWeight = "bold"), "createdAt" == s && (a.innerHTML = c[s]));
        i.addEventListener("click", function() {
            window.open(c.url)
        }), i.querySelector(".iz-news-hub-share-div").style.display = "none", r.style.display = "block"
    }, v.adSuccessHandler = function(e, t, n) {
        e ? (e = 1 == l.Config.newsHub.designType ? document.querySelector("#".concat(s.NH_PREFIX, "main-container #").concat(s.NH_PREFIX, "icon-discoverability")) : document.querySelector(".".concat(s.NH_PREFIX, "stickybar-callout")), b.NHCallout.postCallOutSuccessHandler(e), t = u.Helper.getDomElement("#".concat(t)), n && (t.style.display = "contents")) : (v.adLoaded = !0, 21092 == l.Config.client && document.querySelector("#iz-news-hub-posts-main-container").classList.add("large-ad"))
    }, v.adFailureHandler = function(e, t) {
        t ? b.NHCallout.getLatestData() : ((e = u.Helper.getDomElement(e)).innerHTML = "", e.display = "none")
    }, v.minimumNotificationToShow = 6, v.isNewsLoading = !1, v.isNewsContainerLoaded = !1, v.isNewsHubOpened = !1, v.lastMarkAllAsRead = !1, v.isDataLoaded = !1, v.rtlFlag = !0, v.widgetClicked = !1, v.syncNewsHubImp = !1, v.adLoaded = !1, v.isFeedSourceRSS = !1, v.isNotificationOptinShowing = !1, v.RSSArticleIndex = 1, v.isGAEventSent = {
        shown: !1,
        open: !1,
        close: !1
    }, v.rippleAnimation = {
        show: function() {
            var e;
            return null === (e = u.Helper.getDomElement(s.ELM_SELECTOR.iconContainer)) || void 0 === e ? void 0 : e.classList.add(s.ELM_SELECTOR.rippleBell)
        },
        hide: function() {
            var e;
            return null === (e = u.Helper.getDomElement(s.ELM_SELECTOR.iconContainer)) || void 0 === e ? void 0 : e.classList.remove(s.ELM_SELECTOR.rippleBell)
        }
    }, v);

    function v() {}
    s.NH_PREFIX = "iz-news-hub-";
    var w = "." + s.NH_PREFIX + "notification-";
    s.ELM_SELECTOR = {
        newsHubCotainerId: "#".concat(s.NH_PREFIX, "notification-container"),
        noNotification: "#".concat(s.NH_PREFIX, "no-notifications-container"),
        notificationWrapperId: "#".concat(s.NH_PREFIX, "posts-main-container"),
        triggerSticky: "#".concat(s.NH_PREFIX, "sticky-sidebar"),
        triggerFloating: "#".concat(s.NH_PREFIX, "discovr-outer-wrapper"),
        mainIcon: ".".concat(s.NH_PREFIX, "main-icon"),
        iconContainer: "#".concat(s.NH_PREFIX, "icon-container"),
        floatingIcon: "#".concat(s.NH_PREFIX, "floating-icon"),
        closeButton: ".".concat(s.NH_PREFIX, "close-news-hub-btn"),
        animatedLoader: "".concat(w, "loader"),
        sharesheetTrigger: ".".concat(s.NH_PREFIX, "share-before"),
        shareSheetTab: ".".concat(s.NH_PREFIX, "share-icons"),
        socialSharePrefix: ".".concat(s.NH_PREFIX, "social-share-"),
        notificationCallout: "#".concat(s.NH_PREFIX, "icon-discoverability"),
        crossIcon: "#".concat(s.NH_PREFIX, "cross-icon"),
        bellIcon: ".".concat(s.NH_PREFIX, "bell"),
        rippleBell: "".concat(s.NH_PREFIX, "ripple-bell"),
        alertContainer: ".".concat(s.NH_PREFIX, "alerts-container")
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ThirdPartyAds = void 0;
    var o = n(1);
    n(4), n(0), t.ThirdPartyAds = (i.isPIDExcluded = function() {
        return [1764, 2441, 9892, 19662, 32495, 4093, 30522, 30753, 57263, 57603, 59622, 65272, 9687, 22667, 22668, 22669, 29014, 34474, 39837, 46972, 47126, 47127, 51171, 51240, 51241, 51413, 60772, 51160, 51411, 51431, 51432, 51433, 51434, 51435, 51646, 53134, 62814, 55559, 56463, 21092, 21094, 21095, 21097, 21098, 33265, 35591, 38994, 41463, 56500, 46182, 48299, 52272, 54638, 46184, 48306, 50438, 59265, 59266, 59268, 59302, 59303, 59355, 59356, 59357, 59358, 59359, 59360, 59361, 59362, 59380, 59388, 28029, 35762, 35942, 35943, 48425, 56849, 59634, 59368, 61094, 65071, 55164, 58821, 57996, 57997, 58038, 58039, 58043, 63604, 64029, 64784, 65404, 47606, 47622, 47623, 53136, 27140, 27141, 27142, 27160, 27161, 27407, 34765, 36686, 43841, 45820, 58132, 62684, 62702, 21093, 21100, 33382, 41805, 43310, 54515, 51001, 51857, 51874, 52890, 50648, 50591, 46e3, 52317, 62269, 33985, 34071, 34159, 34161, 34162, 52217, 52241, 27827, 52666, 52667, 23398, 49813, 60595, 51913, 49813, 48055, 49454, 49455, 49456, 49525, 50891, 52041, 54187, 58148, 48591, 48893, 48895, 54443, 55110, 55111, 55112, 55113, 55114, 55115, 55116, 35515, 28815, 28848, 45901, 54874, 57205, 57206, 52552, 26921, 55365, 9459, 60579, 60580, 60581, 60582, 60583, 60584, 60585, 60586, 60587, 6090, 3302, 3352, 23504, 31674, 31676, 31679, 31680, 31705, 31706, 58334, 58335, 58336, 58339, 55483, 9423, 3409, 61066, 28206, 34562, 60456, 64804, 65114, 65081, 59874, 59875, 65260, 53206, 50888, 36419, 65070, 47712, 48377, 48379, 48380, 48381, 61917, 52314, 52396, 24719, 34749, 65107, 65106, 64626, 53370, 24367, 64815, 64586, 19215, 49001, 49004, 45225, 63851, 64290, 35942, 51308, 51507, 51535, 49053, 55900, 30989, 21118, 18518, 50384, 57900, 57908, 61471, 62749, 62750, 64822, 65101, 47088, 60228, 22708, 47455, 61994, 59803, 59810, 59814, 59818, 59828, 59829, 59831, 59832, 59833, 59834, 59835, 59836, 59837, 60461, 60726, 58141, 10563, 58630, 58932, 59991, 59992, 59993, 59994, 59995, 59996, 59998, 59999, 6e4, 60001, 60002, 60003, 60004, 60005, 60006, 60007, 60008, 58141, 35863, 65023, 65024, 65025, 65026, 65028, 64760, 65023, 65024, 65025, 65026, 65028, 35863, 36958, 65546, 65717, 65662, 65687, 65688, 51561, 51527, 51560, 51558, 64765, 62171, 64868, 62860, 62596, 63758, 64692, 64720, 64131, 63672, 61387, 63449, 61345, 61346, 61347, 62314, 61877, 50935, 47466, 48159, 50938, 46921, 67346, 66736].indexOf(o.Config.client) < 0
    }, i.isUserHasSpecificAds = function() {
        return !!i.userSpecificAds.hasOwnProperty(o.Config.client)
    }, i.thirdPartyScriptId = "interactive_js_adcode", i.thirdPartyAds = {}, i.adSize = {
        "300x250": "/300x250.jpg",
        "320x100": "/320x100.jpg",
        "300x50": "/300x50.jpg",
        "300x100": "/300x100.jpg"
    }, i.thirdPartyAd = {
        ln1: "https://4.izooto.thopgames.com/?utm_source=uw&utm_medium=push_notifications&utm_campaign=izooto",
        ln2: "https://9.izooto.thopgames.com/?utm_source=fo&utm_medium=push_notifications&utm_campaign=izooto",
        ln3: "https://5.izooto.thopgames.com/?utm_source=ei&utm_medium=push_notifications&utm_campaign=izooto"
    }, i.userSpecificAds = {
        56705: "https://1.izooto.thopgames.com/?utm_source=lara&utm_medium=push_notifications&utm_campaign=izooto",
        65546: "https://6.izooto.thopgames.com/?utm_source=dis&utm_medium=push_notifications&utm_campaign=izooto",
        65717: "https://7.izooto.thopgames.com/?utm_source=pal&utm_medium=push_notifications&utm_campaign=izooto",
        66735: "https://10.izooto.thopgames.com/?utm_source=prev&utm_medium=push_notifications&utm_campaign=izooto",
        67444: "https://11.izooto.thopgames.com/?utm_source=nara&utm_medium=push_notifications&utm_campaign=izooto"
    }, i.fetchAds = function(e) {
        return new Promise(function(e, t) {
            var n;
            i.isUserHasSpecificAds() ? (n = {
                url: i.userSpecificAds[o.Config.client]
            }, e(n)) : i.thirdPartyAd && i.thirdPartyAd.ln3 && e(i.thirdPartyAd)
        })
    }, i.loadAds = function(o) {
        return new Promise(function(t, n) {
            i.fetchAds(o).then(function(e) {
                i.payloadParser(e, o).then(function(e) {
                    t(e)
                }).catch(function() {
                    n(!1)
                })
            }).catch(function(e) {
                n(!1)
            })
        })
    }, i.payloadParser = function(n, o) {
        return new Promise(function(e, t) {
            try {
                e({
                    image: i.adSize[o].startsWith("http") ? i.adSize[o] : "https://cdn.izooto.com/ads/1/" + i.adSize[o],
                    url: n.url || n.ln3
                })
            } catch (e) {
                t(!1)
            }
        })
    }, i);

    function i() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Queue = void 0;
    var o = n(5),
        i = n(1),
        r = n(0),
        a = n(17),
        s = n(12),
        c = n(3),
        l = n(2),
        u = n(22),
        d = n(9),
        p = n(29),
        f = n(26),
        n = (g.init = function() {
            "[object Array]" == Object.prototype.toString.call(window._izq) ? g.readSavedPreferences() : window._izq = [], window._izq.push = function(e) {
                if (null != e[0]) return g.process(e)
            }
        }, g.sync = function(e) {
            if (void 0 === e && (e = !0), r.Helper.displayLog("Syncing queue.."), !(window._izq.length < 1)) {
                for (var t = [], n = 0; n < window._izq.length; n++) t.push(window._izq[n]);
                if (0 < t.length)
                    if (e)
                        for (n = t.length - 1; 0 <= n; n--) null != t[n] && (t[n][0], this.process(t[n]), window._izq.splice(n, 1));
                    else
                        for (n = t.length - 1; 0 <= n; n--) null != t[n] && -1 == i.Config.store.subscriptionBasedEventNameList.indexOf(t[n][0]) ? (t[n][0], this.process(t[n]), window._izq.splice(n, 1)) : r.Helper.displayLog("Sync later queue item", t[n][0])
            }
        }, g.process = function(e) {
            try {
                if ("debug" === e[0] && 1 == e[1]) return void a.Debugger.init();
                if (1 == i.Config.izootoStatus) {
                    if (1 == i.Config.notification.gdprPrompt.status && 0 == i.Config.notification.isGdprAllowed && this.isValidQueueForGdpr(e[0])) return void r.Helper.displayLog("Blocked due to GDPR is disallowed : ", e[0]);
                    if (3 == o.NotificationHelper.getPermissionStatusFromStorage() && -1 < i.Config.store.subscriptionBasedEventNameList.indexOf(e[0])) return void r.Helper.displayLog("Blocked due to soft unsubscribe : ", e[0]);
                    if (!o.NotificationHelper.isSubscriptionExist(0) && -1 < i.Config.store.subscriptionBasedEventNameList.indexOf(e[0])) return void r.Helper.displayLog("Blocked => Subscription not found: ", e[0]);
                    if ("event" === e[0] && void 0 !== e[1] && "string" == typeof e[1] && "" !== e[1]) o.NotificationHelper.userEventProcessor(e[1], e[2]), o.NotificationHelper.syncAsTrigger(e[1], e[2]);
                    else if ("triggerPromptWithDelay" == e[0]) o.NotificationHelper.triggerPromptHandler(!0);
                    else if ("triggerPrompt" == e[0]) o.NotificationHelper.triggerPromptHandler();
                    else {
                        if ("customizeOptInPrompt" === e[0] && "object" == typeof e[1]) return void o.NotificationHelper.customizeOptInPrompt(e[1]);
                        if ("syncFCMToken" === e[0]) "string" == typeof e[1] && "" != e[1] && (i.Config.notification.subscriptionType = 1, i.Config.notification.fcmToken = e[1], o.NotificationHelper.sendEvent(l.KeyMapper.PROMPT_ALLOWED, e[1]));
                        else if ("updateSubscription" === e[0]) "subscribe" != e[1] && "unsubscribe" != e[1] || o.NotificationHelper.updateSubscriptionProcessor(e[1]);
                        else {
                            if ("getSubscriberId" === e[0]) return i.Config.store.subscriberId || c.StorageManager.getStorage(l.KeyMapper.UUID);
                            if ("getSubscriptionObject" === e[0]) return c.StorageManager.getStorage(l.KeyMapper.PUSH_TOKEN);
                            "userProfile" === e[0] && (void 0 !== e[1] || "" !== e[1]) || "personalizationProperty" === e[0] ? o.NotificationHelper.userProfileProcessor(e[1]) : "trigger" !== e[0] || void 0 === e[1] && "" === e[1] ? "gaId" === e[0] && "string" == typeof e[1] && "object" == typeof e[2] ? s.GoogleAnalytics.init(e) : "registerPromptDisplayCallback" === e[0] && "function" == typeof e[1] ? this.promptDisplayCallback = e[1] : "registerSubscriptionCallback" === e[0] && "function" == typeof e[1] ? this.subscriptionCallback = e[1] : "register_callback" === e[0] && "function" == typeof e[1] ? this.userCallback = e[1] : "syncOneTapResponse" === e[0] && void 0 !== e[1] && "" !== e[1] && void 0 !== e[1].credential && "" !== e[1].credential ? f.Email.processOneTapEncodedResponse(e[1]) : "getNotificationFeed" === e[0] && "function" == typeof e[1] ? p.NotificationFeed.init(e[1]) : "syncUserDetailsEmail" === e[0] && "object" == typeof e[1] ? f.Email.processOneTapPlainTextResponse(e[1], e[2]) : ("newsLetterOptIn" === e[0] && e[1], null != e[2] ? f.Email.subscribeNewsLetter(e[1], e[2]) : "registerOneTapCallback" === e[0] && "function" == typeof e[1] && (g.registerOneTapCallback = e[1])) : o.NotificationHelper.triggerProcessor(e[1], e[2], e[3])
                        }
                    }
                    i.Config.notification.isTagsEnabled && ("add_tag" === e[0] || "remove_tag" === e[0] ? console.warn("".concat(i.Config.brandingPartner, " :: Tags are no longer supported. See https://help.izooto.com/article/segementation/ ")) : "add_property" === e[0] && void 0 !== e[1] && "" !== e[1] && o.NotificationHelper.addPropertyProcessorFallback(e[1]))
                } else r.Helper.displayLog("Sync action aborted! due to notification module disable");
                if ("triggerMessengerPrompt" === e[0]) return i.Config.messenger.autoPrompt = !0, void u.Messenger.init(!0);
                "triggerNewsHub" === e[0] && (i.Config.newsHub.designType = 2, d.NewsHub.isNewsContainerLoaded ? d.NewsHub.openWidget() : (i.Config.newsHub.triggered = !0, d.NewsHub.init()))
            } catch (e) {
                r.Helper.displayLog("Queue error :", e)
            }
        }, g.readSavedPreferences = function() {
            window._izq, window._izq.forEach(function(e) {
                var t;
                "subscriberProfile" == e[0] && null != e[1] && "object" == typeof e[1] && e[1].hasOwnProperty("isPaid") && (i.Config.CRPSPlaybook.isPaidSubscriber = e[1].isPaid, r.Helper.displayLog("Paid subscriber is set to : ", e[1].isPaid)), "init" == e[0] && null != e[1] && "object" == typeof e[1] ? ((e[1].hasOwnProperty("auto_prompt") || e[1].hasOwnProperty("notificationAutoPrompt") || e[1].hasOwnProperty("autoPrompt")) && (i.Config.notification.autoPrompt = null != e[1].auto_prompt ? e[1].auto_prompt : null != e[1].autoPrompt ? e[1].autoPrompt : e[1].notificationAutoPrompt, r.Helper.displayLog("Notification auto prompt set to : ", e[1].auto_prompt), 0 == i.Config.notification.autoPrompt && (i.Config.notification.promptType = 2)), e[1].hasOwnProperty("newsHub") && (e[1].newsHub.hasOwnProperty("shiftHorizontal") && "number" == typeof e[1].newsHub.shiftHorizontal || e[1].newsHub.hasOwnProperty("shiftVertical") && "number" == typeof e[1].newsHub.shiftVertical) && d.NewsHub.changeNewsHubPlacement(e[1].newsHub), e[1].hasOwnProperty("messengerAutoPrompt") && (i.Config.messenger.autoPrompt = e[1].messengerAutoPrompt, r.Helper.displayLog("Messenger auto prompt set to : ", e[1].messengerAutoPrompt)), e[1].hasOwnProperty("showNewsHubWidget") && (i.Config.newsHub.autoWidget = e[1].showNewsHubWidget, r.Helper.displayLog("Newshub auto widget set to : ", e[1].showNewsHubWidget)), e[1].hasOwnProperty("onsi") && (null !== (t = e[1].onsi.exitIntent) && void 0 !== t && t.hasOwnProperty("enable") && (i.Config.exitIntent.autoPopup = e[1].onsi.exitIntent.enable, r.Helper.displayLog("Onsite exitIntent auto popup set to : ", i.Config.exitIntent.autoPopup)), null !== (t = e[1].onsi.stickyBar) && void 0 !== t && t.hasOwnProperty("enable") && (i.Config.stickyBar.autoPopup = e[1].onsi.stickyBar.enable, r.Helper.displayLog("Onsite stickyBar auto popup set to : ", i.Config.stickyBar.autoPopup)))) : "epSyncState" == e[0] && 1 == e[1] && (r.Helper.displayLog("Custom subscription found! waiting for for FCM Token sync command!"), i.Config.store.isNotificationDisabledManually = !0, g.sync())
            })
        }, g.isValidQueueForGdpr = function(e) {
            return -1 < i.Config.notification.gdprNotAllowed.indexOf(e)
        }, g);

    function g() {}
    t.Queue = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GoogleAnalytics = void 0;
    var o = n(0),
        r = n(1);
    t.GoogleAnalytics = (a.init = function(e) {
        r.Config.ga.id = e[1], r.Config.ga.syncWebPush = 1;
        e = e[2];
        e.subscriptionCallback && "object" == typeof e.subscriptionCallback && (r.Config.ga.subscriptionCallback = e.subscriptionCallback), e.promptDisplayCallback && "object" == typeof e.promptDisplayCallback && (r.Config.ga.promptDisplayCallback = e.promptDisplayCallback)
    }, a.addGAScript = function() {
        return new Promise(function(e, t) {
            var n = "https://www.googletagmanager.com/gtag/js?id=".concat(r.Config.ga.id);
            window.gtag ? e(a.gtagDefined = !0) : o.Helper.addExternalJS(n, void 0, !0).then(e).catch(t)
        })
    }, a.process = function(e) {
        r.Config.ga.syncWebPush && "" != r.Config.ga.id && a.addGAScript().then(function() {
            window.dataLayer = window.dataLayer || [], window.gtag = function() {
                window.dataLayer.push(arguments)
            }, window.gtag("js", new Date), window.gtag("config", r.Config.ga.id), a.gtagDefined ? window.gtag("event", e, {
                event_category: "izooto",
                send_to: r.Config.ga.id
            }) : window.gtag("event", e, {
                event_category: "izooto"
            })
        }).catch(function() {})
    }, a.processNewsHub = function(n, o) {
        var i, e = r.Config.ga.newsHubEvents;
        "" != r.Config.ga.id && r.Config.ga.syncNewsHub && (i = {
            Shown: {
                message: "Shown to website visitor",
                responsecode: 1
            },
            "Widget Click": {
                message: "User clicked on News Hub widget",
                responsecode: 2
            },
            "Article Clicked": {
                message: "User clicked on an article",
                responsecode: 3
            },
            "Clicked Share": {
                message: "User clicked on Share Icon inside News Hub",
                responsecode: 4
            },
            "Shared on": {
                message: "User shared article on Social",
                responsecode: 5
            },
            Scroll: {
                message: "User scrolled in News Hub",
                responsecode: 6
            },
            "Widget Close": {
                message: "User closed News Hub",
                responsecode: 7
            }
        }, 0 != e.length && -1 == e.indexOf(i[n].responsecode) || a.addGAScript().then(function() {
            var e = null != o ? "News Hub: ".concat(n, " ").concat(o) : "News Hub: ".concat(n),
                t = {
                    event_category: "News Hub",
                    event_label: i[n].message
                };
            window.gtag("event", e, t)
        }).catch(function() {}))
    }, a.processMessanger = function(t, n) {
        var o;
        r.Config.ga.syncMessenger && "" != r.Config.ga.id && (o = {
            Impression: "Messenger opt-in shown",
            "Repeat Impression": "Messenger opt-in shown to  users 2 or more times",
            "Send to Messenger": "User clicked on Send to Messenger in the opt-in",
            Dismissed: "Messenger opt-in dismissed"
        }, a.addGAScript().then(function() {
            var e = null != n ? "Messenger Push: ".concat(t, " ").concat(n) : "Messenger Push: ".concat(t);
            window.gtag("event", e, {
                event_category: "Messenger Push",
                event_label: o[t]
            })
        }).catch(function() {}))
    }, a.isCallbackAllowed = function(e, t) {
        for (var n in e) {
            n = e[n];
            if ("string" == typeof n && "all" == n.toLowerCase() || n == t) return !0
        }
        return !1
    }, a.initUsingConfig = function() {
        "" != r.Config.ga.id && r.Config.ga.subscriptionCallback.push(1, 2)
    }, a.gtagDefined = !1, a);

    function a() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Main = void 0;
    var i = n(1),
        o = n(2),
        r = n(8),
        a = n(7),
        s = n(0),
        c = n(23),
        l = n(10);
    t.Main = (u.initializeDialog = function(e) {
        try {
            if (r.OSNHelper.isElementinViewport) return u.widgetData.isHidden = !0, u.widgetData.triggerType = e, !1;
            if (u.widgetData.isDialogInitialize) return !1;
            u.widgetData.isDialogInitialize = !0;
            var t = void 0,
                n = 0;
            i.Config.exitIntent.ads && (i.Config.exitIntent.adUnit || i.Config.exitIntent.featureAdUnit) ? (n = 1, t = s.Helper.addExternalJS(a.GAM.GPTScriptSrc, "izootoGPT")) : l.ThirdPartyAds.isPIDExcluded() && (n = 2, t = Promise.resolve()), Promise.all([t, c.Helper.showDialog(e, n)]).then(function(e) {}).catch(function(e) {
                s.Helper.displayLog("Exit intent initializeDialog error", e)
            })
        } catch (e) {}
    }, u.registerEvent = function() {
        var e = (o = i.Config.exitIntent).onExit,
            t = o.onDelay,
            n = o.onScroll,
            o = o.onBack;
        e && u.onExitHandler(function() {
            u.initializeDialog(1)
        }), 0 < t && setTimeout(function() {
            u.initializeDialog(2)
        }, 1e3 * i.Config.exitIntent.onDelay), 0 < n && u.scrollHandler(function() {
            u.initializeDialog(3)
        }), o && c.Helper.backButtonIntentHandler()
    }, u.onExitHandler = function(n) {
        1 == i.Config.global.deviceType && document.addEventListener("mouseout", function(e) {
            var t;
            (!(t = (null != e != e ? e : window.event).relatedTarget || e.toElement) || "HTML" === t.nodeName) && e.clientY < 100 && n()
        }), 1 < i.Config.global.deviceType && document.addEventListener("visibilitychange", function() {
            document.hidden && n()
        })
    }, u.scrollHandler = function(t) {
        var n;
        s.Helper.isScreenScrollable() && (n = 0, document.addEventListener("scroll", function() {
            var e = window.pageYOffset || document.documentElement.scrollTop;
            n < e && window.scrollY >= window.innerHeight && t(), n = e <= 0 ? 0 : e
        }, !1))
    }, u.widgetData = {
        rfid: null,
        feedData: [],
        isDialogInitialize: !1,
        get maxAllowedPost() {
            switch (i.Config.exitIntent.templateType) {
                case 1:
                    return 5;
                case 2:
                case 3:
                    return i.Config.global.deviceType != o.KeyMapper.DEVICE_TYPE_DESKTOP ? 3 : 4;
                case 4:
                    return 15;
                default:
                    return 5
            }
        },
        minimumFullPagePost: 6,
        carsualPost: 4,
        currentPostIndex: 0,
        smallPostAllowed: 4,
        adNotificationNo: void 0,
        dialogBoxID: "iz-osn-exitIntent",
        triggerOnEventType: void 0,
        firstPageStateID: "osn_".concat(Date.now()),
        largePostData: void 0,
        smallPostData: void 0,
        template2PostData: void 0,
        singlePostHTML: void 0,
        singleRowHtml: void 0,
        leftPostHTML: void 0,
        isHidden: !1,
        triggerType: null,
        get htmlSrc() {
            var e = i.Config.exitIntent.templateType,
                t = i.Config.exitIntent.htmlVersion[e];
            return "https://cdn.izooto.com/osn/exitintent/".concat(e, "/v").concat(t, ".html")
        }
    }, u);

    function u() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CookieStorage = void 0;
    var i = n(1),
        r = n(0),
        a = n(2),
        n = (s.setCookie = function(e, t, n) {
            void 0 === n && (n = i.Config.global.cookieExpiryDays);
            var o = new Date;
            o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
            o = "expires=" + o.toUTCString();
            document.cookie = e + "=" + t + ";path=/;" + i.Config.global.cookieDomain + o + ";" + i.Config.global.cookieSameSite
        }, s.getCookie = function(e) {
            try {
                for (var t = e + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                    for (var i = n[o];
                        " " == i.charAt(0);) i = i.substring(1);
                    if (0 == i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length))
                }
            } catch (e) {}
            return ""
        }, s.setWpCookie = function(e, t) {
            var n, o;
            1 == window.is_wp && ("object" == typeof window._izootoModule && window._izootoModule.hasOwnProperty("swPath") ? (o = {}, n = s.getCookie(a.KeyMapper.WP_COOKIE), (o = (o = r.Helper.parseToJSON(n)) || {})[e] = t, o = encodeURI(JSON.stringify(o)), s.setCookie(a.KeyMapper.WP_COOKIE, o)) : s.setLegacyCookie(e, t))
        }, s.removeCookie = function(e) {
            document.cookie = "".concat(e, "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; ").concat(i.Config.global.cookieSameSite)
        }, s.setLegacyCookie = function(e, t) {
            switch (e) {
                case "bType":
                case "dType":
                    var n = JSON.stringify({
                        dtype: i.Config.global.deviceType,
                        btype: i.Config.global.browserType
                    });
                    s.setCookie("bddata", n);
                    break;
                case "evtTrk":
                    s.setCookie("evtrk", i.Config.notification.evtTracking);
                    break;
                case "pushToken":
                    s.setCookie("iztoken", t)
            }
        }, s);

    function s() {}
    t.CookieStorage = n
}, function(e, t, n) {
    "use strict";
    var a = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        s = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.IndexedDB = void 0;
    var c = n(0),
        i = n(1),
        l = n(2),
        r = n(3);
    t.IndexedDB = (u.setup = function() {
        4 == r.StorageManager.getConfigLocal(l.KeyMapper.IDB_VERSION) && (u.currentIdbVersion = 4)
    }, u.init = function() {
        return a(this, void 0, void 0, function() {
            return s(this, function(e) {
                return [2, new Promise(function(t, n) {
                    var o;
                    "undefined" != typeof indexedDB ? u.idbDatabase && 4 == u.currentIdbVersion ? t(u.idbDatabase) : (4.3 <= i.Config.notification.serviceWorkerVersion && -1 == i.Config.notification.serviceWorkerVersion.toString().indexOf("4.22") && (u.currentIdbVersion = 4), (o = indexedDB.open("izooto", u.currentIdbVersion)).onerror = function() {
                        c.Helper.displayLog("DB not load =>", o.error);
                        var e = null === (e = o.error) || void 0 === e ? void 0 : e.name;
                        e && "VersionError" === e ? (u.currentIdbVersion = 4, t(u.init())) : n("DB not load")
                    }, o.onsuccess = function() {
                        r.StorageManager.setConfigLocal(l.KeyMapper.IDB_VERSION, u.currentIdbVersion);
                        var e = o.result;
                        (u.idbDatabase = e).onversionchange = function() {
                            try {
                                c.Helper.displayLog("idb version change detected! => closing current idb instance!"), e.close(), u.idbDatabase = null
                            } catch (e) {}
                        }, c.Helper.displayLog("Success : IndexedDB Instance"), u.detectSWVersionChange(e), t(e)
                    }, o.onblocked = function(e) {
                        n("DB blocked"), c.Helper.displayLog("idb blocked somewhere its still opened ...", e)
                    }, o.onupgradeneeded = function(e) {
                        try {
                            r.StorageManager.setConfigLocal(l.KeyMapper.IDB_VERSION, e.newVersion);
                            var t = o.result,
                                n = e.oldVersion;
                            e.oldVersion, e.newVersion, n < 2 && (t.createObjectStore("swEvents", {
                                keyPath: "eventName"
                            }), t.createObjectStore("options", {
                                keyPath: "key"
                            })), n < 3 && t.createObjectStore("notificationLog", {
                                keyPath: "key"
                            }), n < 4 && (t.createObjectStore(l.KeyMapper.REQUEST_QUEUE, {
                                keyPath: "key"
                            }), t.createObjectStore("log", {
                                keyPath: "key"
                            }))
                        } catch (e) {
                            c.Helper.displayLog("idb upgrade error", e)
                        }
                    }) : n("DB not supported")
                })]
            })
        })
    }, u.addUpdateToTable = function(o, i) {
        return new Promise(function(t, n) {
            u.init().then(function(e) {
                e = e.transaction([o], "readwrite").objectStore(o).put(i);
                e.onsuccess = function() {
                    t(o + " added to db.")
                }, e.onerror = function() {
                    n("Unable to add data in db!")
                }
            }).catch(function(e) {
                c.Helper.displayLog(l.KeyMapper.SOMETHING_WRONG, e)
            })
        })
    }, u.addUpdate = function(o, i) {
        return a(this, void 0, void 0, function() {
            return s(this, function(e) {
                try {
                    return [2, new Promise(function(t, n) {
                        u.init().then(function(e) {
                            e = e.transaction(["options"], "readwrite").objectStore("options").put({
                                key: o,
                                val: i
                            });
                            e.onsuccess = function(e) {
                                t(o + " added to db.")
                            }, e.onerror = function(e) {
                                n("Unable to add data in db!")
                            }
                        }).catch(function(e) {
                            n(e), c.Helper.displayLog(l.KeyMapper.SOMETHING_WRONG, e)
                        })
                    })]
                } catch (e) {
                    c.Helper.displayLog(e)
                }
                return [2]
            })
        })
    }, u.getIndexDBData = function(i, r) {
        return a(this, void 0, void 0, function() {
            return s(this, function(e) {
                try {
                    return [2, new Promise(function(n, o) {
                        u.init().then(function(e) {
                            var e = e.transaction([i]).objectStore(i),
                                t = "all" == r ? e.getAll() : e.get(r);
                            t.onerror = function() {
                                o("Unable to retrieve data from db!")
                            }, t.onsuccess = function() {
                                var e = "";
                                t.result ? e = t.result : c.Helper.displayLog("Not found in db-> ".concat(i, " -> ").concat(r)), n(e)
                            }
                        }).catch(function(e) {
                            c.Helper.displayLog(l.KeyMapper.SOMETHING_WRONG, e)
                        })
                    })]
                } catch (e) {
                    c.Helper.displayLog(e)
                }
                return [2]
            })
        })
    }, u.setIndexedDb = function(t) {
        window._izooto.sysEvents = i.Config.notification.sysEvents, "gaId" == t && 1 != i.Config.ga.swEvents || "sysEvents" == t && 1 != i.Config.notification.sysEventsFlag ? c.Helper.displayLog("Not saved : ", t) : u.getIndexDBData("options", t).then(function(e) {
            (e && !e.hasOwnProperty("val") || e.val != window._izooto[t]) && u.addUpdate(t, window._izooto[t]).then(function(e) {
                c.Helper.displayLog(e)
            }).catch(function(e) {
                c.Helper.displayLog(e)
            })
        }).catch(function(e) {
            c.Helper.displayLog(e)
        })
    }, u.removeKeyFromTable = function(o, i) {
        return a(this, void 0, void 0, function() {
            var t;
            return s(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]), [4, new Promise(function(t, n) {
                            u.init().then(function(e) {
                                e = e.transaction([o], "readwrite").objectStore(o).delete(i);
                                e.onsuccess = function(e) {
                                    t(i + " added to db.")
                                }, e.onerror = function(e) {
                                    n("Unable to add data in db!")
                                }
                            }).catch(function(e) {
                                c.Helper.displayLog(l.KeyMapper.SOMETHING_WRONG, e)
                            })
                        })];
                    case 1:
                        return [2, e.sent()];
                    case 2:
                        return t = e.sent(), c.Helper.displayLog(t), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }, u.detectSWVersionChange = function(e, t, n) {
        var o;
        void 0 === t && (t = "options"), void 0 === n && (n = "swVer"), i.Config.notification.serviceWorkerVersion < 4.21 && (t = e.transaction([t]).objectStore(t), (o = "all" == n ? t.getAll() : t.get(n)).onsuccess = function() {
            o.result && o.result.hasOwnProperty("val") && (i.Config.notification.serviceWorkerVersion = o.result.val)
        })
    }, u.getValueFromiDbOptions = function(n) {
        return a(this, void 0, void 0, function() {
            return s(this, function(e) {
                return [2, new Promise(function(t, e) {
                    u.getIndexDBData("options", n).then(function(e) {
                        if (!e.hasOwnProperty("val")) throw n + " not found in idb options";
                        t(e.val)
                    }).catch(function(e) {
                        c.Helper.displayLog(e), t("")
                    })
                })]
            })
        })
    }, u.currentIdbVersion = 3, u.idbDatabase = null, u);

    function u() {}
}, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        a = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Adgebra = void 0;
    var s, o = n(0),
        c = n(4);
    t.Adgebra = ((s = l).fetchURL = "https://adgebra.co.in/AdServing/PushNativeAds?pid=5826&mkeys=&dcid=9&nads=1&deviceId=1&uid=1231311231&pnToken=ERBqGdwyZH62a3Lrr8Pq&inApp=&slotId=&templateId=&articleTitle=&articleDescp=&chToken=ERBqGdwyZH62a3Lrr8Pq", l.getFetchURL = function() {
        try {
            var e = "prnh-" + document.location.hostname,
                t = o.Helper.replaceQueryParam(l.fetchURL, "url", e);
            return t = o.Helper.replaceQueryParam(t, "refUrl", e)
        } catch (e) {
            return "false"
        }
    }, l.getAdSize = function(e) {
        e = {
            "300x250": "size_65_300x250",
            "200x100": "size_21_200x100"
        }[e];
        return e || "false"
    }, l.loadAd = function(i) {
        return new Promise(function(n, o) {
            return r(void 0, void 0, void 0, function() {
                var t;
                return a(s, function(e) {
                    switch (e.label) {
                        case 0:
                            return "false" == (t = l.getFetchURL()) && o(!1), [4, c.HttpRequest.get(t).then(function(e) {
                                e = JSON.parse(e);
                                !e || e.hasOwnProperty("msgCode") ? o(!1) : l.payloadParser(e, i).then(function(e) {
                                    n(e)
                                }).catch(function() {
                                    o(!1)
                                })
                            }).catch(function() {
                                o(!1)
                            })];
                        case 1:
                            return e.sent(), [2]
                    }
                })
            })
        })
    }, l.payloadParser = function(a, s) {
        return new Promise(function(e, t) {
            var n, o = (r = a[0]).notificationMessage,
                i = r.trackerUrl,
                r = l.getAdSize(s),
                o = (o = decodeURIComponent(o)).split("+").join(" ");
            "false" != r && (n = a[0].imageUrl || a[0][r]) ? e({
                title: o,
                message: "",
                image: n,
                url: i,
                isAd: 1
            }) : t(!1)
        })
    }, l);

    function l() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Debugger = void 0;
    var i = n(1),
        r = n(0);
    t.Debugger = (a.init = function(e) {
        a.msg = a.getMsgSet(), i.Config.debugger.err = 0, console.clear(), a.log(a.dash.repeat(20) + "".concat(i.Config.brandingPartner, " Debug Mode") + a.dash.repeat(20)), i.Config.debugger.status = 1, a.log("Verifying ".concat(i.Config.brandingPartner, " integration on your website"), i.Config.debugger.infoCode);

        function t() {
            1 == i.Config.debugger.err ? a.log(a.msg.integration_f, i.Config.debugger.errCode) : a.log(a.msg.integration, i.Config.debugger.successCode), e && e(a.debuggerObj)
        }
        var n = i.Config.global.platform;
        a.debuggerObj.plugin = n, a.debugger.rcvObj = {};
        var o = document.location.href,
            o = r.Helper.getParamFromUrl(o, "izObj");
        (o = r.Helper.parseToJSON(o)) && null != o.domainRoot && (i.Config.notification.domainRoot = o.domainRoot, i.Config.notification.httpsNoRoot = "" != i.Config.notification.domainRoot ? 1 : 0, i.Config.setupPath()), o && null != o.cdnHost && "" != o.cdnHost && (i.Config.notification.cdnHost = o.cdnHost), "" != n && a.log(a.msg.plugin.replace("{plg}", n), i.Config.debugger.successCode);
        n = a.getScript();
        null != n ? (a.debuggerObj.scriptSrc = n, a.log(a.msg.code_t + a.msg.code_f + "(" + n + ")", i.Config.debugger.successCode), 1 == i.Config.notification.isSdkHttps ? a.validateSw(function() {
            t()
        }) : t()) : (i.Config.debugger.err = 1, a.log(a.msg.code_t + a.msg.code_nf, i.Config.debugger.errCode), t())
    }, a.log = function(e, t) {
        t = t || "", console.info("%c" + e, t)
    }, a.getMsgSet = function() {
        var e = i.Config.brandingPartner,
            t = "support@".concat(e.toLowerCase(), ".com");
        return {
            code_t: "".concat(e, " JS code: "),
            code_f: "found",
            code_nf: "missing. Learn more here: http://bit.ly/2WHcP4a",
            sw_t: "Service Worker JS: ",
            sw_f: "found at {sw}",
            sw_nf: "missing from {sw} , Learn more here: http://bit.ly/2K0yGSs",
            sw_ct: "Service Worker JS: Invalid Content-Type found ",
            html_f: "".concat(e, " Html: found"),
            html_nf: "".concat(e, " Html: not found "),
            html_ct: "".concat(e, " Html: Invalid Content-Type found "),
            mfst_t: "Manifest file: ",
            mfst_f: "found at {m}",
            mfst_nf: "missing form {m} , Learn more here: http://bit.ly/2K0yGSs",
            multi_mfst: "multiple manifest files found. Learn more here: http://bit.ly/2WCd2FC",
            gcm_t: "gcm_sender_id: ",
            gcm_nf: "missing in the manifest file. Learn more here: http://bit.ly/2WCd2FC",
            fallback: "FCM project: issue with your FCM project.",
            integration: "".concat(e, " integration is working fine on your website."),
            integration_f: "".concat(e, " integration is incomplete. Contact ").concat(t, " to get assistance."),
            plugin: "You have integrated ".concat(e, " using the {plg} plugin."),
            ev: "sent to ".concat(e)
        }
    }, a.requestFile = function(e, n, o) {
        var i = new XMLHttpRequest,
            t = Math.random();
        e += e.includes("?") ? "&" : "?", e += t, i.onreadystatechange = function() {
            var e, t;
            4 == this.readyState && (e = i.responseText, t = "", i.getResponseHeader("Content-Type") ? t = i.getResponseHeader("Content-Type") : i.getResponseHeader("content-type") && (t = i.getResponseHeader("content-type")), 200 == this.status ? n(this.status, e, t) : o(this.status, e))
        }, i.open("GET", e, !0), i.send()
    }, a.getFileInfo = function(e, o) {
        var i = {};
        a.requestFile(e, function(e, t, n) {
            i.status = !0, i.contentType = n, i.body = t, o(i)
        }, function(e, t) {
            i.status = !1, o(i)
        })
    }, a.contentTypeValidator = function(e, t) {
        var n = !0;
        return t = t.toLowerCase(), 1 == e ? t.indexOf("application") < 0 && t.indexOf("javascript") < 0 && (n = !1) : 2 == e && t.indexOf("html") < 0 && (n = !1), n
    }, a.validateIzootoHtml = function(t) {
        a.debuggerObj.plugin && t();
        var n = this.getMsgSet();
        i.Config.debugger.host;
        a.getFileInfo(i.Config.notification.sourceOrigin, function(e) {
            1 == (a.debuggerObj.izootoHtml = e).status ? (a.log(n.html_f, i.Config.debugger.successCode), a.contentTypeValidator(2, e.contentType) || (a.log(n.html_ct + e.contentType, i.Config.debugger.errCode), i.Config.debugger.err = 1)) : (a.log(n.html_nf, i.Config.debugger.errCode), i.Config.debugger.err = 1), t()
        })
    }, a.validateSw = function(t) {
        var n = this.getMsgSet(),
            o = i.Config.debugger.host;
        a.getFileInfo(i.Config.notification.serviceWorkerPath, function(e) {
            if (1 == (a.debuggerObj.sw = e).status) {
                if (a.log(n.sw_t + n.sw_f.replace("{sw}", o + i.Config.notification.serviceWorkerPath), i.Config.debugger.successCode), !a.contentTypeValidator(1, e.contentType)) return a.log(n.sw_ct + e.contentType, i.Config.debugger.errCode), i.Config.debugger.err = 1, void t();
                a.validateIzootoHtml(t)
            } else a.log(n.sw_t + n.sw_nf.replace("{sw}", o + i.Config.notification.serviceWorkerPath), i.Config.debugger.errCode), i.Config.debugger.err = 1, t()
        })
    }, a.getScript = function() {
        for (var e = document.getElementsByTagName("script"), t = new RegExp(i.Config.notification.cdnHost + "/scripts/[^/]*.js"), n = 0; n < e.length; n++) {
            var o = e[n];
            if (null != (o = o.getAttribute("src")) && t.test(o)) return o = o.startsWith("//") ? "https:" + o : o
        }
        return null
    }, a.showMsgOverlay = function() {
        var e = '<div class="iz-verification-overlay" style="width: 100%;position: fixed;top: 0;left:0;z-index: 9999999999;text-align: center;background: rgba(0,0,0,0.6);height: 100%;color: #fff;display: flex;justify-content: center;align-items: center;overflow-y: hidden;"><div class="inner-content" style="font-size: 2em;"><span style="line-height: 2;">Please wait while we are verifying '.concat(i.Config.brandingPartner, " integration on your website. <br>This window will close automatically.</span></div></div>");
        r.Helper.addHTML("div", e, "iz-integration-overlay")
    }, a.verifyIzootoIntegration = function() {
        a.showMsgOverlay(), a.init(function(e) {
            r.Helper.postMessage("opener", "integrationObj", e)
        })
    }, a.dash = "-", a.debuggerObj = {
        sw: {},
        izootoHtml: {}
    }, a.debugger = {
        rcvObj: {}
    }, a);

    function a() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Session = void 0;
    var o = n(1),
        i = n(0),
        r = n(3),
        a = n(2);
    t.Session = (s.init = function() {
        o.Config.global.isSessionHandled || (s.sessionHandler(), o.Config.global.isSessionHandled = !0)
    }, s.sessionHandler = function() {
        var e;
        s.isSessionExpired() && (t = r.StorageManager.getConfigLocal(a.KeyMapper.SESSION_COUNT, a.KeyMapper.SESSION), e = r.StorageManager.getConfigLocal(a.KeyMapper.FIRST_SESSION, a.KeyMapper.SYNC), t && e && i.Helper.getDateDiffrenceFromPresent(e) <= s.visitWithinDays ? r.StorageManager.setConfigLocal(a.KeyMapper.SESSION_COUNT, t + 1, a.KeyMapper.SESSION) : (r.StorageManager.setConfigLocal(a.KeyMapper.SESSION_COUNT, 1, a.KeyMapper.SESSION), r.StorageManager.updateLastSync(a.KeyMapper.FIRST_SESSION)));
        var t = (t = new Date).setTime(t.getTime() + 60 * s.sessionExpiryMinute * 1e3);
        new Date(t), r.StorageManager.setConfigLocal(a.KeyMapper.SESSION_EXPIRY, t, a.KeyMapper.SESSION)
    }, s.isSessionExpired = function() {
        var e = r.StorageManager.getConfigLocal(a.KeyMapper.SESSION_EXPIRY, a.KeyMapper.SESSION),
            t = new Date;
        return !("" != e && e > t.getTime()) && (s.isNew = !0)
    }, s.getSessionCount = function() {
        return r.StorageManager.getConfigLocal(a.KeyMapper.SESSION_COUNT, a.KeyMapper.SESSION) || 0
    }, s.isNew = !1, s.sessionExpiryMinute = 30, s.visitWithinDays = 7, s);

    function s() {}
}, function(e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        i = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Notification = void 0;
    var s = n(5),
        c = n(0),
        l = n(1),
        r = n(17),
        a = n(3),
        u = n(11),
        d = n(2),
        p = n(12);
    t.Notification = (f.init = function() {
        return o(this, void 0, void 0, function() {
            var t, n;
            return i(this, function(e) {
                switch (e.label) {
                    case 0:
                        return (l.Config.notification.eventsToSync = l.Config.notification.eventsToSync.map(function(e) {
                            return s.NotificationHelper.syncableEvents[e]
                        }), t = l.Config.notification.windowType, f.isWebPushEnabled && l.Config.notification.isSupported) ? [3, 1] : (l.Config.notification.isSupported ? s.NotificationHelper.sendEvent(d.KeyMapper.NOTIFICATION_DISABLED) : s.NotificationHelper.sendEvent(d.KeyMapper.BROWSER_UNSUPPORTED), c.Helper.displayLog("".concat(l.Config.brandingPartner, " notification disabled!")), [2]);
                    case 1:
                        return [4, s.NotificationHelper.setSubscriberIdFromDb()];
                    case 2:
                        if (e.sent(), 6 == t) c.Helper.displayLog("Error: No root trigger");
                        else {
                            if (5 == t) return r.Debugger.verifyIzootoIntegration(), [2];
                            if (4 == t && self != top) return s.NotificationHelper.sendPermissionStatusFromFrame(), [2];
                            if (2 == t && self != top) return s.NotificationHelper.removeSubscriptionInFrame(), [2];
                            if (1 == t) return s.NotificationHelper.nativeHandler(), [2]
                        }
                        if (!t) {
                            if (window.self != window.top) return u.Queue.sync(), [2];
                            if ("" != l.Config.notification.allowedDomain && (n = l.Config.global.locationProtocol + "//" + document.location.hostname, l.Config.notification.allowedDomain.indexOf(n) < 0 && !t)) return [2];
                            p.GoogleAnalytics.initUsingConfig()
                        }
                        if (l.Config.store.isNotificationDisabledManually) return c.Helper.displayLog("Notfication prompt handled by site developer!"), [2];
                        if (3 == s.NotificationHelper.getPermissionStatusFromStorage()) return s.NotificationHelper.sendEvent(d.KeyMapper.ALREADY_UNSUBSCRIBED), [2];
                        s.NotificationHelper.promptHandler(), e.label = 3;
                    case 3:
                        return [2]
                }
            })
        })
    }, f.optinCallback = function(e) {
        try {
            "object" == typeof e && null != e && s.NotificationHelper.showOptin(e)
        } catch (e) {}
    }, f.closeDialog = function(e) {
        var t;
        try {
            a.StorageManager.removeStorage(d.KeyMapper.ACTIVE_PROMPT), e = 1 === e ? d.KeyMapper.OPTIN_ALLOWED : d.KeyMapper.OPTIN_CLOSED, s.NotificationHelper.sendEvent(e), null !== (t = document.getElementById("iz-optin-main-container")) && void 0 !== t && t.remove()
        } catch (e) {
            c.Helper.displayLog("Error removing div : ", e)
        }
    }, f.openPopup = function(e) {
        var t, n, o, i, r, a;
        (e = void 0 === e ? !1 : e) && f.closeDialog(1), 3 != l.Config.notification.subscriptionType ? l.Config.notification.isSdkHttps && "https:" == l.Config.global.locationProtocol ? s.NotificationHelper.nativeHandler() : (c.Helper.addMsgReciever(s.NotificationHelper.msgReciever), r = null != window.screenLeft ? window.screenLeft : screen.left, a = null != window.screenTop ? window.screenTop : screen.top, t = window.innerWidth || document.documentElement.clientWidth || screen.width, n = window.innerHeight || document.documentElement.clientHeight || screen.height, i = o = 200, e = l.Config.notification.promptType, 1 !== l.Config.notification.promptType && 2 != l.Config.notification.promptType || (e = 1, i = o = 500), r = t / 2 - o / 2 + r, a = n / 2 - i / 2 + a, l.Config.notification.hidePopup && 0 === l.Config.notification.promptType && (i = o = 100, r = a = 1e4), e = l.Config.notification.sourceOrigin + "?action=prompt&izpt=" + e, 1 != l.Config.notification.fullPopUp || 0 == l.Config.notification.promptType ? (window.open(e, "".concat(l.Config.brandingPartner, " Subscription"), "scrollbars=yes, width=" + o + ", height=" + i + ", top=" + a + ", left=" + r), s.NotificationHelper.sendEvent(d.KeyMapper.POPUP_OPEN)) : window.open(e, "".concat(l.Config.brandingPartner, " Subscription"))) : s.NotificationHelper.requestSafariPermission()
    }, f.isWebPushEnabled = !0, f);

    function f() {}
}, function(e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        c = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Main = void 0;
    var l = n(0),
        u = n(1),
        i = n(31),
        r = n(19),
        d = n(5),
        a = n(11),
        p = n(3),
        s = n(17),
        f = n(15),
        g = n(32),
        y = n(34),
        m = n(30),
        h = n(2),
        S = n(22),
        b = n(21),
        v = n(18),
        w = n(35),
        C = n(36),
        E = n(37),
        _ = n(4),
        T = n(9),
        M = n(6),
        P = n(8),
        H = n(12),
        O = n(29),
        D = n(14),
        N = n(7),
        I = n(33),
        L = n(25),
        A = n(26),
        R = n(27),
        k = n(42),
        x = n(16),
        z = n(10),
        K = n(43);

    function U() {}(t.Main = (U.init = function() {
        if (void 0 !== window._izooto) throw new Error("Duplicate Pixel Found !!");
        window._izooto = {}, 1 != u.Config.izootoStatus ? l.Helper.displayLog("".concat(u.Config.brandingPartner, " has been disabled for this site!")) : (f.IndexedDB.setup(), "undefined" == typeof Promise ? (window.Promise = function() {}, U.initIzooto()) : d.NotificationHelper.getIzCidPromise().then(function() {
            U.initIzooto()
        }))
    }, U.initIzooto = function() {
        return o(this, void 0, void 0, function() {
            return c(this, function(e) {
                switch (e.label) {
                    case 0:
                        return U.referenceHolder(), U.izootoFallbackHandler(), [4, u.Config.init()];
                    case 1:
                        return (e.sent(), 7 == u.Config.notification.windowType || 8 == u.Config.notification.windowType) ? (A.Email.init(), [2]) : (v.Session.init(), window._izooto.client = u.Config.client, p.StorageManager.legacyStorageMigration(), a.Queue.init(), _.HttpRequest.init(), "" != u.Config.notification.masterDomain && u.Config.notification.isSupported ? b.MasterDomain.init() : U.moduleInitializer(), [2])
                }
            })
        })
    }, U.referenceHolder = function() {
        window._izooto = u.Config, window._izooto.helperClass = l.Helper, window._izooto.gdprClass = i.GDPR, window._izooto.queueClass = a.Queue, window._izooto.notificationClass = r.Notification, window._izooto.notificationHelperClass = d.NotificationHelper, window._izooto.storageClass = p.StorageManager, window._izooto.debuggerClass = s.Debugger, window._izooto.indexedDBClass = f.IndexedDB, window._izooto.videoDropOffClass = y.VideoDropOff, window._izooto.tabAbandonmentClass = g.TabAbandonments, window._izooto.shopifyClass = m.Shopify, window._izooto.masterDomainClass = b.MasterDomain, window._izooto.messengerClass = S.Messenger, window._izooto.sessionClass = v.Session, window._izooto.crpsPlaybookClass = w.CRPSPlaybook, window._izooto.recommendArticleClass = C.RecommendArticle, window._izooto.autoSegmentClass = E.AutoSegment, window._izooto.newsHubClass = T.NewsHub, window._izooto.channelEventHandlerClass = M.ChannelEventHandler, window._izooto.onSiteClass = P.OSNHelper, window._izooto.gaClass = H.GoogleAnalytics, window._izooto.notificationFeedClass = O.NotificationFeed, window._izooto.cookieClass = D.CookieStorage, window._izooto.httpRequestClass = _.HttpRequest, window._izooto.adManagerClass = {
            GAM: N.GAM,
            Adgebra: x.Adgebra,
            ThirdPartyAds: z.ThirdPartyAds,
            Adsence: K.Adsence
        }, window._izooto.adNetworkClass = I.AdNetwork, window._izooto.articleShareClass = L.ArticleShare, window._izooto.emailClass = A.Email, window._izooto.adBlockRecoveryClass = R.AdBlockRecovery
    }, U.moduleInitializer = function() {
        return o(this, void 0, void 0, function() {
            return c(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, U.UUIDHandler()];
                    case 1:
                        return e.sent(), a.Queue.sync(!1), r.Notification.init(), A.Email.init(), [4, k.Main.init()];
                    case 2:
                        return e.sent(), u.Config.adBR.status && U.isAdBlockDetected || !u.Config.newsHub.allVisitors || T.NewsHub.init(), S.Messenger.init(), [2]
                }
            })
        })
    }, U.UUIDHandler = function() {
        return o(this, void 0, void 0, function() {
            var t, n, o, i, r, a, s;
            return c(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = p.StorageManager.getStorage(h.KeyMapper.PUSH_TOKEN), n = d.NotificationHelper.getSubscriptionKey(t), [4, l.Helper.isUUID()];
                    case 1:
                        return e.sent() ? (o = u.Config, [4, l.Helper.getUUID()]) : [3, 3];
                    case 2:
                        return o.UUID = e.sent(), [3, 9];
                    case 3:
                        return n ? [4, l.Helper.getUUIDFromEndpoint(t)] : [3, 5];
                    case 4:
                        return r = e.sent(), u.Config.UUID = "" == r ? n : r, [3, 9];
                    case 5:
                        return [4, d.NotificationHelper.isHttpsSitePermissionAlreadyGranted()];
                    case 6:
                        return e.sent() ? (i = "", [4, d.NotificationHelper.getCurrentSubscription()]) : [3, 9];
                    case 7:
                        return (i = e.sent()) ? [4, l.Helper.getUUIDFromEndpoint(i)] : [3, 9];
                    case 8:
                        "" == (r = e.sent()) ? (a = d.NotificationHelper.getSubscriptionKey(i), u.Config.UUID = a) : u.Config.UUID = r, e.label = 9;
                    case 9:
                        return u.Config.UUID ? [3, 11] : (s = u.Config, [4, l.Helper.getUUID()]);
                    case 10:
                        s.UUID = e.sent(), e.label = 11;
                    case 11:
                        return [4, l.Helper.setUUID()];
                    case 12:
                        return e.sent(), [2]
                }
            })
        })
    }, U.izootoFallbackHandler = function() {
        window._izooto.optinCallback = function(e) {
            r.Notification.optinCallback(e)
        }, window._izooto.gdprCallback = function(e) {
            i.GDPR.gdprCallback(e)
        }, window._izooto.closeDialog = function(e) {
            r.Notification.closeDialog(e)
        }, window._izooto.openPopup = function(e) {
            r.Notification.openPopup(!0)
        }, window._izooto.closeHttpsBranding = function() {
            d.NotificationHelper.closeHttpsOverlay()
        }, window._izooto.gdprAllow = function() {
            i.GDPR.gdprAllow()
        }, window._izooto.gdprDisallow = function() {
            i.GDPR.gdprDisallow()
        }, window._izooto.syncHookInDb = function() {
            return d.NotificationHelper.syncHookInDb("syncNotificationView")
        }, window._izooto.syncHookInDb = function() {
            return d.NotificationHelper.syncHookInDb("syncNotificationClick")
        }, window._izooto.getStorage = function(e) {
            return "iztoken" == e ? e = h.KeyMapper.PUSH_TOKEN : "uid" == e && (e = h.KeyMapper.UUID), p.StorageManager.getStorage(e)
        }, window._izooto.getBrowserKeyFromToken = function(e) {
            return d.NotificationHelper.getSubscriptionKey(e)
        }, window.izootoEmailSubcriptionCallBack = function(e) {
            A.Email.processOneTapEncodedResponse(e)
        }, window.izootoEmailEventsCallback = function(e) {
            A.Email.eventCallbackHandler(e)
        }
    }, U.isAdBlockDetected = !1, U)).init()
}, function(e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        s = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MasterDomain = void 0;
    var c = n(1),
        l = n(2),
        u = n(3),
        d = n(5),
        p = n(0),
        f = n(11),
        g = n(20),
        n = (y.init = function() {
            return o(this, void 0, void 0, function() {
                var t, n, o, i, r, a;
                return s(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return (t = u.StorageManager.getStorage(l.KeyMapper.UUID), 3 != c.Config.notification.windowType || window.self == window.top) ? [3, 4] : (n = {
                                token: "",
                                subscribed_on: "",
                                uuid: t
                            }, u.StorageManager.getStorage(l.KeyMapper.MASTER_DOMAIN) ? (o = y.getMasterStorage(l.KeyMapper.PUSH_TOKEN), r = y.getMasterStorage(l.KeyMapper.SUBSCRIBED_ON), "" != t || "" == o ? [3, 2] : [4, p.Helper.getUUIDFromEndpoint(o)]) : [3, 3]);
                        case 1:
                            "" != (i = e.sent()) && (t = i, u.StorageManager.setStorage(l.KeyMapper.UUID, t)), e.label = 2;
                        case 2:
                            n = {
                                token: o,
                                subscribed_on: r,
                                uuid: t
                            }, e.label = 3;
                        case 3:
                            return p.Helper.postMessage("parent", l.KeyMapper.MASTER_TO_CHILD, n), p.Helper.addMsgReciever(d.NotificationHelper.msgReciever), [3, 10];
                        case 4:
                            return window.location.origin != c.Config.notification.masterDomain ? [3, 9] : "" == (o = y.getMasterStorage(l.KeyMapper.PUSH_TOKEN)) ? [3, 7] : "" != t ? [3, 6] : [4, p.Helper.getUUIDFromEndpoint(o)];
                        case 5:
                            "" != (i = e.sent()) && (t = i, u.StorageManager.setStorage(l.KeyMapper.UUID, t)), e.label = 6;
                        case 6:
                            return (r = y.getMasterStorage(l.KeyMapper.SUBSCRIBED_ON)) == c.Config.notification.masterDomain ? (g.Main.moduleInitializer(), [2]) : (1 == d.NotificationHelper.getPermissionStatusFromStorage() ? f.Queue.sync() : d.NotificationHelper.tokenValidator(function(e) {
                                1 == e ? (d.NotificationHelper.updatePermissionStatus(1), f.Queue.sync()) : g.Main.moduleInitializer()
                            }), [3, 8]);
                        case 7:
                            g.Main.moduleInitializer(), e.label = 8;
                        case 8:
                            return [3, 10];
                        case 9:
                            c.Config.store.isMDSyncingRequired && (p.Helper.addMsgReciever(d.NotificationHelper.msgReciever), a = c.Config.notification.masterDomain + c.Config.notification.masterDomainPath + "?action=izcheckmaster&domain=" + window.location.origin, p.Helper.addIFrame(a, l.KeyMapper.MASTER_AS_FRAME)), 1 == d.NotificationHelper.getPermissionStatusFromStorage() ? (d.NotificationHelper.sendEvent(l.KeyMapper.ALREADY_GRANTED, y.getMasterStorage(l.KeyMapper.PUSH_TOKEN)), f.Queue.sync()) : c.Config.store.isMDSyncingRequired || (p.Helper.addMsgReciever(d.NotificationHelper.msgReciever), a = c.Config.notification.masterDomain + c.Config.notification.masterDomainPath + "?action=izcheckmaster&domain=" + window.location.origin, p.Helper.addIFrame(a, l.KeyMapper.MASTER_AS_FRAME)), e.label = 10;
                        case 10:
                            return [2]
                    }
                })
            })
        }, y.masterDomainCallback = function(e, t) {
            var n, o, i = !0,
                r = JSON.stringify(t);
            "" != c.Config.notification.masterDomain && (e && (i = !1, e = "" != (n = y.getMasterStorage(l.KeyMapper.MASTER_DOMAIN)) ? d.NotificationHelper.getSubscriptionKey(n) : "", n = d.NotificationHelper.getSubscriptionKey(t), "" != e && e == n || (i = !0)), i && (window.location.origin == c.Config.notification.masterDomain ? (o = '{"iz_'.concat(c.Config.client, '":{"').concat(l.KeyMapper.PUSH_TOKEN, '":').concat(r, ',"').concat(l.KeyMapper.SUBSCRIBED_ON, '":"').concat(c.Config.notification.masterDomain, '","user_properties":{}}}'), u.StorageManager.setStorage(l.KeyMapper.MASTER_DOMAIN, o)) : self == top && (n = {
                token: r,
                subscribed_on: window.location.origin,
                uuid: c.Config.UUID
            }, i = document.getElementById(l.KeyMapper.MASTER_AS_FRAME), p.Helper.postMessage(i, l.KeyMapper.CHILD_TO_MASTER, n), o = '{"iz_'.concat(c.Config.client, '":{"').concat(l.KeyMapper.PUSH_TOKEN, '":').concat(r, ',"').concat(l.KeyMapper.SUBSCRIBED_ON, '":"').concat(window.location.origin, '","user_properties":{}}}'), u.StorageManager.setStorage(l.KeyMapper.MASTER_DOMAIN, o)), window._izq = window._izq || [], window._izq.push(["userProfile", {
                add: {
                    subscribed_on_url: window.location.origin
                }
            }])))
        }, y.setMasterStorage = function(e) {
            var t = "";
            e.hasOwnProperty("uuid") && e.uuid && (t = e.uuid);
            var n = '{"iz_'.concat(c.Config.client, '":{"').concat(l.KeyMapper.PUSH_TOKEN, '":').concat(e.token, ',"').concat(l.KeyMapper.SUBSCRIBED_ON, '":"').concat(e.subscribed_on, '","user_properties":{}}}');
            u.StorageManager.setStorage(l.KeyMapper.MASTER_DOMAIN, n), u.StorageManager.setStorage(l.KeyMapper.PUSH_TOKEN, encodeURIComponent(e.token)), t && u.StorageManager.setStorage(l.KeyMapper.UUID, t)
        }, y.getMasterStorage = function(e) {
            var t = "iz_" + c.Config.client,
                n = "",
                t = (n = p.Helper.parseToJSON(u.StorageManager.getStorage(l.KeyMapper.MASTER_DOMAIN)))[t];
            return "" != n && null != t && null != t[e] ? t[e] : ""
        }, y.masterConfigReciver = function(e) {
            var t = e.token,
                n = e.subscribed_on,
                e = e.uuid,
                o = {
                    token: JSON.stringify(t),
                    subscribed_on: n,
                    uuid: e
                };
            "" != t && e ? d.NotificationHelper.tokenValidator(function(e) {
                1 == e ? (d.NotificationHelper.updatePermissionStatus(l.KeyMapper.PROMPT_ALLOWED), y.setMasterStorage(o), d.NotificationHelper.sendEvent(l.KeyMapper.ALREADY_GRANTED, y.getMasterStorage(l.KeyMapper.PUSH_TOKEN)), f.Queue.sync()) : 0 == e && (u.StorageManager.removeConfigLocal(l.KeyMapper.PERMISSION_STATUS), g.Main.moduleInitializer())
            }, e) : g.Main.moduleInitializer()
        }, y);

    function y() {}
    t.MasterDomain = n
}, function(e, t, n) {
    "use strict";
    var s = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        c = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Messenger = void 0;
    var l = n(1),
        u = n(0),
        d = n(5),
        o = n(3),
        i = n(4),
        p = n(2),
        r = n(6),
        f = n(12);
    t.Messenger = (g.init = function(e) {
        var t, n = this;
        if ("http:" != l.Config.global.locationProtocol && 0 == l.Config.notification.windowType) {
            if (0 != l.Config.messenger.status && "" != l.Config.messenger.pageId) {
                try {
                    null == (g.messengerPrompt = l.Config.messenger.prompt).title && (g.messengerPrompt.title = "Connect with us for exclusive deals and offers!"), g.messengerPrompt.poweredbysrc = l.Config.notification.promptDesign.poweredbysrc
                } catch (e) {}
                g.htmlContainer = d.NotificationHelper.loadDesign(g.messengerPrompt, g.getHtmlContainer());
                var o, i = document.createElement("iframe");
                i.id = "izootoMessengerFrame", i.scrolling = "no";
                var r = document.getElementById(g.anyWhereSelector);
                if (r) {
                    if (g.isAlreadySubscribed()) return;
                    g.promptSequencing(p.KeyMapper.MESSENGER_READY), g.htmlContainer = d.NotificationHelper.loadDesign(g.messengerPrompt, g.getHtmlContainer(!1));
                    try {
                        var a = document.createElement("style");
                        a.innerText = "#".concat(g.anyWhereSelector, "{overflow: hidden;text-align: center;} #izootoMessengerFrame{ height: ").concat(g.heightMap[l.Config.messenger.size.toLocaleLowerCase()], "; border: none; max-width: 256px;width:unset; }"), null != r && r.appendChild(a), null != r && r.appendChild(i), g.isElementFound = !0
                    } catch (e) {
                        u.Helper.displayLog("Error in appending child in izooto-messenger-div")
                    }
                } else {
                    if (1 != e) {
                        if (!l.Config.messenger.autoPrompt) return;
                        if (g.isDelayed()) return
                    }
                    if (g.triggered) return;
                    g.triggered = !0, g.promptSequencing(p.KeyMapper.MESSENGER_READY);
                    try {
                        i.style = "height: 249px; border: none; max-width: unset;width:unset;", (o = document.createElement("div")).id = "izMsngrOptinOuterWrapper", o.innerHTML = ' <div id="izMsngrIframeWrapper"></div><style>#izMsngrOptinOuterWrapper{display:none;position: fixed; width: 306px; height: 249px; z-index: 99999999999; bottom: 10px; right: 10px;}#izMsngrIframeWrapper{position: relative;}@media screen and (max-width: 600px){#izMsngrOptinOuterWrapper{width: 100%!important; height: 100%!important; position: fixed; left: 0!important; top: 0!important; bottom: unset!important; right: unset!important; z-index: 2147483647; background: #00000070;}#izMsngrIframeWrapper{position: absolute; right: 50%; bottom: 50%; transform: translate(50%, 50%);}}</style>', document.body.appendChild(o), null !== (t = document.getElementById("izMsngrIframeWrapper")) && void 0 !== t && t.appendChild(i)
                    } catch (e) {
                        u.Helper.displayLog("Error in appending child in messenger-div")
                    }
                }
                g.frameElement = i, (g.frameContentWindow = i.contentWindow).fbAsyncInit = function() {
                    g.addHtmlContainer(l.Config.messenger.pageId), g.frameContentWindow.FB.init({
                        appId: g.appId,
                        autoLogAppEvents: !0,
                        xfbml: !0,
                        version: "v18.0"
                    }), g.frameContentWindow.FB.Event.subscribe("send_to_messenger", function(e) {
                        "rendered" == e.event && 0 == e.is_after_optin && setTimeout(function() {
                            return s(n, void 0, void 0, function() {
                                var t;
                                return c(this, function(e) {
                                    return g.frameContentWindow.document.querySelector("#izootoFbMessengerMainContainer") && (g.isElementFound ? (t = window.getComputedStyle(g.frameContentWindow.document.querySelector(".fb-send-to-messenger")), 256 < (t = parseInt(t.width)) && (t += 33, i.style = "max-width: ".concat(t, "px;width: ").concat(t, "px;")), g.syncMessengerEvent()) : g.promptSequencing(p.KeyMapper.MESSENGER_READY_SHOW)), [2]
                                })
                            })
                        }, 400), "opt_in" == e.event && (g.setMultiMessengerStorage(p.KeyMapper.MSNGR_IS_SUBSCRIBED, 1), g.sendEvent(p.KeyMapper.MESSENGER_SUBSCRIBED), f.GoogleAnalytics.processMessanger("Send to Messenger"), g.promptSequencing(p.KeyMapper.MESSENGER_SUBSCRIBED), setTimeout(function() {
                            g.htmlContainerClose(!0)
                        }, 1e3))
                    })
                };
                setTimeout(function() {
                    var e = document.createElement("script");
                    e.src = "https://connect.facebook.net/en_US/sdk.js", i.contentDocument.body.appendChild(e)
                }, 200)
            }
        } else u.Helper.displayLog("Messenger is disabled for this device!")
    }, g.syncMessengerEvent = function() {
        g.sendEvent(p.KeyMapper.MESSENGER_PROMPTED), 1 == o.StorageManager.getConfigLocal("messengerRepeated", p.KeyMapper.STATS) ? f.GoogleAnalytics.processMessanger("Repeat Impression") : f.GoogleAnalytics.processMessanger("Impression"), o.StorageManager.setConfigLocal("messengerRepeated", 1, p.KeyMapper.STATS), g.promptSequencing(p.KeyMapper.MESSENGER_PROMPTED), g.setRepeatPromptDelay(l.Config.messenger.repeatDelay)
    }, g.showMessenger = function() {
        document.querySelector("#izMsngrOptinOuterWrapper").style.display = "block", g.syncMessengerEvent()
    }, g.htmlContainerClose = function(e) {
        void 0 === e && (e = !1);
        var t = document.getElementById(g.anyWhereSelector) ? g.frameElement : document.querySelector("#izMsngrOptinOuterWrapper");
        t && (t.style.display = "none"), 0 == e && f.GoogleAnalytics.processMessanger("Dismissed"), g.promptSequencing(p.KeyMapper.PROMPT_CLOSED)
    }, g.getHtmlContainer = function(e) {
        return (e = void 0 === e || e) ? '<style> .fb_iframe_widget { display: -webkit-box; } .izooto-widget-overlay { background: transparent; width: unset; height: unset; position: unset; top: unset; left: unset; z-index: 2147483647; } .izooto-widget-position { position: fixed; right: 10px; bottom: 10px; z-index: 2147483647; } .izooto-fb-widget { background: #fff; box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.01), 0px 1px 18px 0px rgba(0, 0, 0, 0.03); border-radius: 4px; font-family: "sans-serif", Helvetica, Arial, Helvetica Neue; font-size: 15px; letter-spacing: 0.4px; width: 285px; position: relative; } .izooto-fb-close { background: transparent; border: none; font-size: 22px; position: relative; top: 2px; cursor: pointer; color: grey; } #izooto-fb-close-wrapper { display: flex; justify-content: flex-end; background: #dfeeff; padding: 0 5px; margin: 0 -24px;} .izooto-fb-top { padding: 24px; border-radius: 4px 4px 0 0; background: #dfeeff; padding-bottom: 10px; padding-top: 0; margin-top: -4px; } .izooto-fb-title { line-height: 20px; font-weight: 500; color: #000; padding-bottom: 6px; } a.izooto-fb-branding { display: block; padding-top: 6px; font-size: 11px; color: #1f82f7; font-family: "sans-serif", Helvetica, Arial, Helvetica Neue; text-decoration: none; letter-spacing: 0.8px; } a:hover.izooto-fb-branding { display: block; padding-top: 6px; font-size: 11px; color: #1f82f7; font-family: "sans-serif", Helvetica, Arial, Helvetica Neue; text-decoration: none; letter-spacing: 0.8px; } .izooto-fb-bottom { background: white; border-radius: 0 0 4px 4px; padding: 24px; background: #fff; } @media screen and (max-width:600px) { .izmobilemsngr #izooto-fb-close-wrapper { padding: 0; } .izmobilemsngr .izooto-fb-close { background: #195086; border: none; font-size: 22px; position: relative; top: -10px; cursor: pointer; color: white; border-radius: 50px; width: 28px; height: 28px; text-align: center; vertical-align: middle; display: unset; padding: 0 0; line-height: 0; margin: 0 -5px; } }</style><div class="izooto-widget-overlay"> <div class="izooto-widget-position"> <div class="izooto-fb-widget"> <div class="izooto-fb-top" dir="auto"><div id="izooto-fb-close-wrapper"> <button type="button" class="izooto-fb-close" onclick="window.top._izooto.messengerClass.htmlContainerClose();">&times;</button> </div>  <div class="izooto-fb-title">{{--title--}}</div><a target="_blank" href="{{--poweredbysrc--}}" class="izooto-fb-branding izbranding"><span style="color:grey;">Powered by</span> '.concat(l.Config.brandingPartner, '</a></div> <div class="izooto-fb-bottom"> <div id="izFbContainer" style="margin-left:42px;"></div> </div> </div> </div>') : '<style>body{ margin:0px;} #izFbContainer{ margin-left: 33px; position: absolute; } </style><div id="izFbContainer"></div>'
    }, g.addHtmlContainer = function(e) {
        var t = g.htmlContainer,
            n = document.createElement("div");
        n.setAttribute("id", "izootoFbMessengerMainContainer");
        var o = function() {
            window.outerWidth <= 600 ? n.setAttribute("class", "izmobilemsngr") : n.setAttribute("class", "")
        };
        o(), window.addEventListener("resize", o), n.innerHTML = t, (g.frameContentWindow.document.body || g.frameContentWindow.document.head).appendChild(n);
        var o = l.Config.UUID,
            t = l.Config.client + "=/=" + o + "=/=" + l.Config.global.os + "=/=" + l.Config.global.browserVer + "=/=" + l.Config.global.deviceType + "=/=" + l.Config.global.browserType,
            o = document.createElement("div");
        o.setAttribute("class", "fb-send-to-messenger"), o.setAttribute("messenger_app_id", g.appId), o.setAttribute("page_id", e), o.setAttribute("color", g.isElementFound ? l.Config.messenger.color : "blue"), o.setAttribute("size", g.isElementFound ? l.Config.messenger.size : "large"), o.setAttribute("data-ref", t), l.Config.messenger.buttonTextType && g.isElementFound && o.setAttribute("cta_text", g.ctaText[l.Config.messenger.buttonTextType]), null !== (t = g.frameContentWindow.document.querySelector("#izFbContainer")) && void 0 !== t && t.appendChild(o), u.Helper.izootoBrandingHandler(g.frameContentWindow)
    }, g.isDelayed = function() {
        return 1 == g.getMultiMessengerStorage(p.KeyMapper.MSNGR_IS_SUBSCRIBED) || g.getMultiMessengerStorage(p.KeyMapper.MSNGR_REPEAT_PROMPT_DELAY) > Date.now()
    }, g.isAlreadySubscribed = function() {
        return 1 == g.getMultiMessengerStorage(p.KeyMapper.MSNGR_IS_SUBSCRIBED)
    }, g.syncEvent = function(e) {
        var t = "",
            t = e == p.KeyMapper.MESSENGER_SUBSCRIBED ? u.Helper.getEndpoint("syncMessenger") : u.Helper.getEndpoint(e),
            e = g.getParameterToSync(e);
        i.HttpRequest.postForm(t, e, !0).then(function() {}).catch(function(e) {})
    }, g.setRepeatPromptDelay = function(e) {
        var t;
        0 !== e && (t = (t = new Date).setTime(t.getTime() + 60 * e * 1e3), "Messenger: Setting repeat prompt delay for ".concat(e, " minutes"), g.setMultiMessengerStorage(p.KeyMapper.MSNGR_REPEAT_PROMPT_DELAY, t))
    }, g.setMultiMessengerStorage = function(e, t) {
        var n = o.StorageManager.getConfigLocal(l.Config.messenger.pageId, p.KeyMapper.MESSENGER);
        (n = n ? u.Helper.parseToJSON(n) : {})[e] = t;
        n = JSON.stringify(n);
        o.StorageManager.setConfigLocal(l.Config.messenger.pageId, n, p.KeyMapper.MESSENGER)
    }, g.getMultiMessengerStorage = function(e) {
        var t = o.StorageManager.getConfigLocal(l.Config.messenger.pageId, p.KeyMapper.MESSENGER);
        return t && null != (t = u.Helper.parseToJSON(t))[e] ? t[e] : ""
    }, g.promptSequencing = function(e) {
        -1 < [p.KeyMapper.MESSENGER_PROMPTED, p.KeyMapper.MESSENGER_SUBSCRIBED, p.KeyMapper.PROMPT_CLOSED, p.KeyMapper.MESSENGER_READY_SHOW, p.KeyMapper.MESSENGER_READY].indexOf(e) && !g.isElementFound && r.ChannelEventHandler.event("messenger", e)
    }, g.sendEvent = function(e) {
        var t = [p.KeyMapper.MESSENGER_SUBSCRIBED];
        l.Config.messenger.syncPrompt && t.push(p.KeyMapper.MESSENGER_PROMPTED), -1 != t.indexOf(e) && g.syncEvent(e)
    }, g.getParameterToSync = function(e) {
        var t = {
            pid: l.Config.client,
            btype: l.Config.global.browserType,
            dtype: l.Config.global.deviceType,
            os: l.Config.global.os,
            page_id: l.Config.messenger.pageId,
            bKey: l.Config.UUID
        };
        switch (e) {
            case p.KeyMapper.MESSENGER_SUBSCRIBED:
                t.ms = 1;
                break;
            case p.KeyMapper.MESSENGER_PROMPTED:
                t.msp = 1;
                break;
            default:
                t[e] = 1
        }
        return t
    }, g.anyWhereSelector = "izooto-messenger-subscription-button", g.isElementFound = !1, g.frameElement = void 0, g.triggered = !1, g.appId = "1061905150807841", g.ctaText = [, "GET_THIS_IN_MESSENGER", "RECEIVE_THIS_IN_MESSENGER", "SEND_THIS_TO_ME", "GET_CUSTOMER_ASSISTANCE", "GET_CUSTOMER_SERVICE", "GET_SUPPORT", "LET_US_CHAT", "SEND_ME_MESSAGES", "ALERT_ME_IN_MESSENGER", "SEND_ME_UPDATES", "MESSAGE_ME", "LET_ME_KNOW", "KEEP_ME_UPDATED", "TELL_ME_MORE", "SUBSCRIBE_IN_MESSENGER", "SUBSCRIBE_TO_UPDATES", "GET_MESSAGES", "SUBSCRIBE", "GET_STARTED_IN_MESSENGER", "LEARN_MORE_IN_MESSENGER", "GET_STARTED"], g.heightMap = {
        standard: "44px",
        large: "58px",
        xlarge: "71px"
    }, g);

    function g() {}
}, function(e, t, n) {
    "use strict";
    var u = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        f = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Helper = void 0;
    var g = n(1),
        s = n(0),
        o = n(3),
        a = n(2),
        y = n(7),
        r = n(6),
        m = n(8),
        c = n(13),
        d = n(16),
        p = n(10),
        h = n(40),
        S = n(41),
        n = (b.backButtonIntentHandler = function() {
            var e = o.StorageManager.getSessionStorage("izootoOSNDisplayed");
            "" == location.hash && !e && b.isSupportedBackIntent() && (b.isFirstPage() ? (b.onBackButtonTriggerHandler(!0), b.onUrlChangeHandler(), window.addEventListener("beforeunload", b.setHistoryStateIntoStorage), b.setHistoryStateIntoStorage()) : b.isNavigatedBackToFirstPage() && b.attachPopstateListener())
        }, b.showDialog = function(e, o) {
            var i = this;
            try {
                return new Promise(function(n, t) {
                    c.Main.widgetData.triggerOnEventType = e, m.OSNHelper.getParsedFeed(g.Config.exitIntent.osnType).then(function(e) {
                        m.OSNHelper.setExitIntentFeed(e) && m.OSNHelper.getHTML(c.Main.widgetData.htmlSrc).then(function(e) {
                            s.Helper.addHTML("div", e, c.Main.widgetData.dialogBoxID), b.getDialogToDisplay(e).then(function(t) {
                                return u(i, void 0, void 0, function() {
                                    return f(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return r.ChannelEventHandler.event("exitIntent", a.KeyMapper.EXITINTENT_SHOWN), o ? [4, b.adsHandler(o)] : [3, 2];
                                            case 1:
                                                e.sent(), e.label = 2;
                                            case 2:
                                                return t.style.display = "block", m.OSNHelper.syncOnsiteView(g.Config.exitIntent.osnType), s.Helper.setRepeatPromptDelay(g.Config.exitIntent.repeatDelay, a.KeyMapper.EXITINTENT_DELAY), n(!0), [2]
                                        }
                                    })
                                })
                            })
                        })
                    }).catch(function(e) {
                        t(!1), s.Helper.displayLog("showDialog error", e)
                    })
                })
            } catch (e) {}
        }, b.getDialogToDisplay = function(e) {
            return u(this, void 0, void 0, function() {
                return f(this, function(e) {
                    return [2, new Promise(function(e, t) {
                        try {
                            var n = g.Config.exitIntent.templateType,
                                o = {
                                    1: b.setPostsArticle,
                                    2: b.setTemplate2Post,
                                    3: b.setPostsArticle,
                                    4: h.FullPageTemplate.setData
                                }[n];
                            o ? (o(), b.applyConfigStyle(), e(m.OSNHelper.getTypedDomElement(".iz_osn", g.Config.exitIntent.osnType))) : (s.Helper.displayLog(" Exitintent Template type is not set on config "), t(!1))
                        } catch (e) {
                            t(!1)
                        }
                    })]
                })
            })
        }, b.setPostsArticle = function() {
            try {
                b.setLargePostArticle();
                var e = m.OSNHelper.getTypedDomElement(".".concat(m.OSNHelper.osnPrefix, "right"), g.Config.exitIntent.osnType),
                    t = m.OSNHelper.getTypedDomElement(".".concat(m.OSNHelper.osnPrefix, "smContainer"), g.Config.exitIntent.osnType);
                c.Main.widgetData.singlePostHTML = t;
                var n = document.querySelector(".".concat(m.OSNHelper.osnPrefix, "smContainer_1>div")),
                    o = window.getComputedStyle(n).getPropertyValue("background-image");
                m.OSNHelper.defaultImage = o.match(/\((.*?)\)/)[1].replace(/('|")/g, ""), null != t && t.remove(), 1 != g.Config.global.deviceType && (!0 === p.ThirdPartyAds.isPIDExcluded() ? c.Main.widgetData.smallPostAllowed = 3 : c.Main.widgetData.smallPostAllowed = g.Config.exitIntent.ads ? 3 : 2), 3 == g.Config.exitIntent.templateType && (c.Main.widgetData.smallPostAllowed = g.Config.global.deviceType == a.KeyMapper.DEVICE_TYPE_DESKTOP ? 3 : 2), g.Config.global.deviceType !== a.KeyMapper.DEVICE_TYPE_DESKTOP && c.Main.widgetData.smallPostData.unshift(c.Main.widgetData.largePostData);
                for (var i = 0; i < c.Main.widgetData.smallPostAllowed; i++) {
                    var r = c.Main.widgetData.singlePostHTML.cloneNode(!0);
                    r.id = "iz-osn-exitIntent-article-".concat(i), null != e && e.appendChild(r), m.OSNHelper.setSmallPosts(i, c.Main.widgetData.smallPostData[i], g.Config.exitIntent.osnType)
                }
            } catch (e) {}
        }, b.setLargePostArticle = function() {
            var e = m.OSNHelper.getTypedDomElement(".".concat(m.OSNHelper.osnPrefix, "left"), g.Config.exitIntent.osnType),
                t = s.Helper.getDomElement(".iz_osn_article_1");
            c.Main.widgetData.leftPostHTML = t.cloneNode(!0), m.OSNHelper.setOsnDataIntoElement(e, c.Main.widgetData.largePostData, 0, g.Config.exitIntent.osnType)
        }, b.setTemplate2Post = function() {
            var e = m.OSNHelper.getTypedDomElement(".".concat(m.OSNHelper.osnPrefix, "left"), g.Config.exitIntent.osnType),
                t = m.OSNHelper.getTypedDomElement(".".concat(m.OSNHelper.osnPrefix, "right"), g.Config.exitIntent.osnType),
                n = m.OSNHelper.getTypedDomElement(".".concat(m.OSNHelper.osnPrefix, "article"), g.Config.exitIntent.osnType);
            null != (c.Main.widgetData.singlePostHTML = n) && n.remove();
            var o = c.Main.widgetData.maxAllowedPost;
            1 != g.Config.global.deviceType && (o = !0 === p.ThirdPartyAds.isPIDExcluded() || g.Config.exitIntent.ads ? 3 : 2);
            for (var i = 0; i < o; i++) {
                var r = c.Main.widgetData.singlePostHTML.cloneNode(!0);
                r.id = "iz-osn-exitIntent-article-".concat(i), (i < (g.Config.global.deviceType == a.KeyMapper.DEVICE_TYPE_DESKTOP ? 2 : 3) ? e : t).appendChild(r), m.OSNHelper.setSmallPosts(i, c.Main.widgetData.template2PostData[i], g.Config.exitIntent.osnType)
            }
        }, b.applyConfigStyle = function() {
            try {
                var e = m.OSNHelper.osnPrefix + "heading_1";
                m.OSNHelper.setHeaderColor();
                var t = s.Helper.getDomElement("." + e);
                t.style.color = g.Config.exitIntent.titleColor;
                var n = (n = g.Config.exitIntent.title.trim()).slice(0, 50);
                t.innerHTML = n, s.Helper.izootoBrandingHandler(), m.OSNHelper.brandLogoHandler(), m.OSNHelper.closeHandler(function() {
                    b.closeDialog()
                }, g.Config.exitIntent.osnType), s.Helper.setHref(".iz-osn-branding-text-1", "https://www.izooto.com/campaign/getting-started-with-on-site-interactions-izooto?utm_source=referral&utm_medium=on_site_notification")
            } catch (e) {
                s.Helper.displayLog("Error on show OSN dialogbox", e)
            }
        }, b.closeDialog = function() {
            try {
                b.hideDialog(), m.OSNHelper.syncOnsiteDismissed(g.Config.exitIntent.osnType), s.Helper.setRepeatPromptDelay(g.Config.exitIntent.closeDelay, a.KeyMapper.EXITINTENT_DELAY), r.ChannelEventHandler.event("exitIntent", a.KeyMapper.EXITINTENT_CLOSED)
            } catch (e) {}
        }, b.hideDialog = function() {
            s.Helper.hideElement("#".concat(c.Main.widgetData.dialogBoxID))
        }, b.carasualClickHandler = function() {
            var e, t, n = -1,
                o = !1,
                i = !1,
                r = document.querySelectorAll(".iz_osn_carousel_items_1 .iz_osn_article_1"),
                a = document.querySelectorAll(".iz_osn_progress_bar");
            a.forEach(function(e, t) {
                e.addEventListener("transitionend", function() {
                    i = !1, s(), t == a.length - 1 && a.forEach(function(e, t) {
                        e.style.transition = "width 0s", e.style.width = "0%"
                    })
                })
            }), "rtl" == document.dir && (e = document.querySelector(".iz_osn_previous_arrow"), t = document.querySelector(".iz_osn_next_arrow"), e.classList.replace("iz_osn_previous_arrow", "iz_osn_next_arrow"), t.classList.replace("iz_osn_next_arrow", "iz_osn_previous_arrow")), r.forEach(function(e, t) {
                "rtl" == document.dir ? e.style.right = "".concat(100 * t, "%") : e.style.left = "".concat(100 * t, "%")
            });
            var s = function() {
                o || i || (n = (n + 1) % r.length, r.forEach(function(e) {
                    e.style.transition = "transform 1s ease-in-out", e.style.transform = ("rtl" == document.dir ? "translateX(" : "translateX(-").concat(100 * n, "%)")
                }), i = !0, a.forEach(function(e, t) {
                    setTimeout(function() {
                        t <= n ? (e.style.transition = "width 5s ease-in", e.style.width = "100%") : (e.style.width = "0%", e.style.transition = "none")
                    }, 0)
                }))
            };
            setTimeout(function() {
                s()
            }, 100), document.querySelectorAll(".iz_osn_arrow").forEach(function(e) {
                e.addEventListener("mouseenter", function() {
                    o = !0
                }), e.addEventListener("mouseleave", function() {
                    o = !1, s()
                }), e.addEventListener("click", function() {
                    n = e.classList.contains("iz_osn_previous_arrow") ? (n - 1 + r.length) % r.length : (n + 1 + r.length) % r.length, r.forEach(function(e) {
                        e.style.transition = "transform 1s ease-in-out", e.style.transform = ("rtl" == document.dir ? "translateX(" : "translateX(-").concat(100 * n, "%)")
                    }), a.forEach(function(e, t) {
                        e.style.width = "0%", e.style.transition = "none"
                    }), a.forEach(function(e, t) {
                        setTimeout(function() {
                            t == n ? (i = !0, e.style.transition = "width 5s ease-in", e.style.width = "100%") : (e.style.width = t < n ? "100%" : "0%", e.style.transition = "none")
                        }, 0)
                    })
                })
            })
        }, b.isSupportedBackIntent = function() {
            return g.Config.global.deviceType == a.KeyMapper.DEVICE_TYPE_MOBILE && (g.Config.global.browserName == a.KeyMapper.BROWSER_CHROME || g.Config.global.browserName == a.KeyMapper.BROWSER_FIREFOX || g.Config.global.browserName == a.KeyMapper.BROWSER_SAFARI)
        }, b.onUrlChangeHandler = function() {
            var t = location.href;
            new MutationObserver(function(e) {
                location.href !== t && (t = location.href, b.isNavigatedBackToFirstPage() ? b.attachPopstateListener() : b.removePopstateListener())
            }).observe(document, {
                subtree: !0,
                childList: !0
            })
        }, b.onBackButtonTriggerHandler = function(e) {
            (e = void 0 === e ? !1 : e) && window.history.pushState(c.Main.widgetData.firstPageStateID, ""), s.Helper.displayLog("onBackButtonHandler listener added"), b.attachPopstateListener()
        }, b.attachPopstateListener = function() {
            window.addEventListener("popstate", b.popstateListener, {
                once: !0
            })
        }, b.removePopstateListener = function() {
            window.removeEventListener("popstate", b.popstateListener)
        }, b.popstateListener = function(e) {
            -1 < location.href.indexOf("#") ? b.attachPopstateListener() : "" == location.hash && (c.Main.initializeDialog(4), o.StorageManager.setSessionStorage("izootoOSNDisplayed", 1))
        }, b.setHistoryStateIntoStorage = function() {
            var e = window.history.state;
            b.setTabID(e)
        }, b.isNavigatedBackToFirstPage = function() {
            return history.state == b.getTabID()
        }, b.isFirstPage = function() {
            return !b.getTabID()
        }, b.getTabID = function() {
            return o.StorageManager.getSessionStorage("izootoFirstPageStateID")
        }, b.setTabID = function(e) {
            o.StorageManager.setSessionStorage("izootoFirstPageStateID", e)
        }, b.adsHandler = function(a) {
            return u(this, void 0, void 0, function() {
                var t, n, o, c, i, r, l = this;
                return f(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return n = g.Config.exitIntent.templateType, t = {
                                1: b.getSingleAdConfig,
                                2: b.getSingleAdConfig,
                                3: S.NoContentTemplate.getAdConfig,
                                4: h.FullPageTemplate.getAdConfig
                            }, n = t[n], 1 != a ? [3, 4] : n ? [4, n()] : [3, 2];
                        case 1:
                            for (c = e.sent(), o = function(e) {
                                    var t = c[e],
                                        n = t.adFormat,
                                        o = t.adContainerId,
                                        i = t.osnType,
                                        r = t.adIndex,
                                        a = t.adId,
                                        e = t.adUnit,
                                        s = t.adSize;
                                    3 != g.Config.exitIntent.templateType && y.GAM.createAdContainer(o, a), 4 != g.Config.exitIntent.templateType && m.OSNHelper.appendSkeletonLoader(i, r), y.GAM.loadGAMAds(a, e, s.Gam).then(function() {
                                        b.adSuccessHandler(o, r, !1), b.adsObserver(o, r)
                                    }).catch(function() {
                                        return u(l, void 0, void 0, function() {
                                            return f(this, function(e) {
                                                return m.OSNHelper.createArticleContainer(i, r), d.Adgebra.loadAd(s.adgebra).then(function(e) {
                                                    "banner" == n ? m.OSNHelper.setBannerAd(o, e, i, r) : m.OSNHelper.setArticleAd(o, e, i, r), b.adSuccessHandler(o, r)
                                                }).catch(function() {
                                                    b.adFailureHandler(o, r)
                                                }), [2]
                                            })
                                        })
                                    })
                                }, r = 0; r < c.length; r++) o(r);
                            return [3, 3];
                        case 2:
                            s.Helper.displayLog("Exit intent ads handle error"), e.label = 3;
                        case 3:
                            return [3, 6];
                        case 4:
                            return 2 != a ? [3, 6] : n ? [4, n()] : [3, 6];
                        case 5:
                            for (c = e.sent(), i = function(e) {
                                    var t = c[e],
                                        n = t.adContainerId,
                                        o = t.adIndex,
                                        e = t.adSize,
                                        i = t.osnType;
                                    p.ThirdPartyAds.loadAds(e.tpAdSize).then(function(e) {
                                        m.OSNHelper.setBannerAd(n, e, i, o), b.adSuccessHandler(n, o)
                                    }).catch(function() {
                                        b.adFailureHandler(n, o)
                                    })
                                }, r = 0; r < c.length; r++) i(r);
                            e.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, b.getSingleAdConfig = function() {
            var e = this;
            return new Promise(function(d, p) {
                return u(e, void 0, void 0, function() {
                    var t, n, o, i, r, a, s, c, l, u;
                    return f(this, function(e) {
                        switch (e.label) {
                            case 0:
                                e.trys.push([0, 5, , 6]), t = [], n = 1 == g.Config.exitIntent.multiAds && 2 == g.Config.exitIntent.templateType ? 2 : 1, o = 0, e.label = 1;
                            case 1:
                                return o < n ? (i = m.OSNHelper.getRandomIndex(o), r = "#iz-osn-exitIntent-article-".concat(i), l = "iz-exitintent-ads-".concat(i), u = 2 == g.Config.exitIntent.templateType && g.Config.exitIntent.featureAdUnit ? g.Config.exitIntent.featureAdUnit : g.Config.exitIntent.adUnit, a = g.Config.exitIntent.templateType, c = (s = t).push, l = {
                                    adContainerId: r,
                                    adId: l,
                                    adUnit: u,
                                    osnType: g.Config.exitIntent.osnType,
                                    templateType: a,
                                    adIndex: i,
                                    adFormat: "article"
                                }, u = {}, [4, y.GAM.setAdSize(g.Config.exitIntent.osnType, g.Config.exitIntent.templateType, i)]) : [3, 4];
                            case 2:
                                c.apply(s, [(l.adSize = (u.Gam = e.sent(), u.adgebra = 1 == a ? "200x100" : "300x250", u.tpAdSize = 2 == g.Config.exitIntent.templateType ? "300x250" : "320x100", u.Adsence = 1 == a ? [300, 100] : [300, 250], u), l)]), e.label = 3;
                            case 3:
                                return o++, [3, 1];
                            case 4:
                                return d(t), [3, 6];
                            case 5:
                                return e.sent(), p(!1), [3, 6];
                            case 6:
                                return [2]
                        }
                    })
                })
            })
        }, b.exitIntentAdFaliure = function(e) {
            var t = c.Main.widgetData.singlePostHTML.cloneNode(!0);
            s.Helper.getDomElement("#iz-osn-exitIntent-article-".concat(e)).innerHTML = t.innerHTML;
            t = (2 != g.Config.exitIntent.templateType ? c.Main.widgetData.smallPostData : c.Main.widgetData.template2PostData)[e];
            m.OSNHelper.setSmallPosts(e, t, g.Config.exitIntent.osnType)
        }, b.adFallbackfailureHandler = function(e, t) {
            b.exitIntentAdFaliure(e), 1 != g.Config.global.deviceType && (t.style.display = "none")
        }, b.fallBackAdClickHandler = function(e, t, n) {
            g.Config.exitIntent.adfc;
            e.onclick = function() {
                window.open(t)
            }
        }, b.adFailureHandler = function(e, t) {
            var n, o;
            1 != g.Config.exitIntent.templateType && 2 != g.Config.exitIntent.templateType || (o = s.Helper.getDomElement(e), n = s.Helper.getDomElement("#iz-osn-exitIntent-article-".concat(t)), b.adFallbackfailureHandler(t, n), 1 == g.Config.global.deviceType && o.classList.add("iz_osn_article_1")), 3 == g.Config.exitIntent.templateType && ("iz-exitintent-feature-ads" == e || ".iz_osn_article_1" == e ? (S.NoContentTemplate.removePaddingFromAdsContainer(), S.NoContentTemplate.featureAdsFailure()) : (g.Config.global.deviceType == a.KeyMapper.DEVICE_TYPE_MOBILE && 2 == t && ((o = s.Helper.getDomElement("#iz-osn-exitIntent-article-".concat(t))).style.display = "none"), S.NoContentTemplate.removePaddingFromAdsContainer(t), b.exitIntentAdFaliure(t)), s.Helper.getDomElement(".iz_osn_card_1").style.height = "auto"), 4 == g.Config.exitIntent.templateType && ((o = s.Helper.getDomElement(".iz_osn_ads_container_1")).style.display = "none")
        }, b.adSuccessHandler = function(e, t, n) {
            var o;
            4 != g.Config.exitIntent.templateType && m.OSNHelper.removeSkeletonLoader(t, n), 1 != g.Config.exitIntent.templateType && 2 != g.Config.exitIntent.templateType || (o = s.Helper.getDomElement(e), c.Main.widgetData.adNotificationNo = t, o.classList.add("iz_osn_article_1")), 3 == g.Config.exitIntent.templateType && ("iz-exitintent-feature-ads" == e ? S.NoContentTemplate.removePaddingFromAdsContainer() : (S.NoContentTemplate.removePaddingFromAdsContainer(t), c.Main.widgetData.adNotificationNo = t)), 4 == g.Config.exitIntent.templateType && null == n && g.Config.exitIntent.ads && ((t = s.Helper.getDomElement(".iz_osn_ads_container_1")).style.margin = "25px", t.style.cursor = "pointer", n = s.Helper.getDomElement(".iz_osn_icon_1", t), s.Helper.getDomElement("img", n).style.borderRadius = "5px", (n = s.Helper.getDomElement(".iz_osn_title_1", t)).style.marginBottom = "10px", n.style.marginTop = "6px", n.style.fontWeight = "bolder", n.style.fontSize = "medium", s.Helper.getDomElement(".iz_osn_timestamp_1", t).style.color = "gray")
        }, b.adsObserver = function(i, r) {
            var e = s.Helper.getDomElement(i),
                t = new MutationObserver(function(e, t) {
                    for (var n = 0, o = e; n < o.length; n++) "childList" === o[n].type && (b.adFailureHandler(i, r), t.disconnect())
                });
            t.observe(e, {
                childList: !0,
                subtree: !0
            }), setTimeout(function() {
                t.disconnect()
            }, 1e5)
        }, b);

    function b() {}
    t.Helper = n
}, function(e, t, n) {
    "use strict";
    var p = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        f = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.StickyBar = void 0;
    var g = n(16),
        y = n(7),
        r = n(10),
        o = n(6),
        a = n(1),
        i = n(0),
        s = n(2),
        m = n(8);
    t.StickyBar = (h.stickyBarInitializeDialog = function() {
        try {
            var e = void 0;
            a.Config.stickyBar.ads && (e = i.Helper.addExternalJS(y.GAM.GPTScriptSrc, "izootoGPT"));
            var t = 0;
            a.Config.stickyBar.ads ? t = 1 : r.ThirdPartyAds.isPIDExcluded() && (t = 2), Promise.all([e, h.showStickyBarDialog()]).then(function() {
                t && h.stickyBarAdsHandler(t)
            }).catch(function(e) {
                i.Helper.displayLog(" Stickybar initializeDialog error", e)
            })
        } catch (e) {}
    }, h.showStickyBarDialog = function() {
        return p(this, void 0, void 0, function() {
            return f(this, function(e) {
                try {
                    return [2, new Promise(function(n, t) {
                        m.OSNHelper.getParsedFeed(a.Config.stickyBar.osnType).then(function(e) {
                            e.length == h.maxAllowedPost && "object" == typeof e && (h.postData = e, m.OSNHelper.getHTML(h.htmlSrc).then(function(e) {
                                i.Helper.addHTML("div", e, h.dialogBoxID), m.OSNHelper.geStickyBarDialogToDisplay(e).then(function(e) {
                                    o.ChannelEventHandler.event("stickyBar", s.KeyMapper.STICKYBAR_READY_SHOW);
                                    var t = setInterval(function() {
                                        h.readyToShow && (clearInterval(t), n(!0))
                                    }, 50)
                                })
                            }))
                        }).catch(function(e) {
                            t(!1), i.Helper.displayLog("showDialog error", e)
                        })
                    })]
                } catch (e) {}
                return [2]
            })
        })
    }, h.stickyBarAdsHandler = function(i) {
        return p(this, void 0, void 0, function() {
            var t, u, n, o, d = this;
            return f(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 8, , 9]), 1 != i ? [3, 5] : [4, h.getAdConfig()];
                    case 1:
                        if (!(0 < (u = e.sent()).length)) return [3, 5];
                        t = function(t) {
                            var n, o, i, r, a, s, c, l;
                            return f(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return l = u[t], n = l.adFormat, o = l.adContainerId, i = l.osnType, r = l.adIndex, a = l.adId, s = l.adUnit, c = l.adSize, y.GAM.createAdContainer(o, a), [4, y.GAM.loadGAMAds(a, s, c.Gam).then(function() {
                                            h.adSuccessHandler(o, r)
                                        }).catch(function() {
                                            return p(d, void 0, void 0, function() {
                                                return f(this, function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return m.OSNHelper.createArticleContainer(i, r), [4, g.Adgebra.loadAd(c.adgebra).then(function(e) {
                                                                "banner" == n ? m.OSNHelper.setBannerAd(o, e, i, r) : m.OSNHelper.setArticleAd(o, e, i, r)
                                                            }).catch(function() {
                                                                h.adFailureHandler(r)
                                                            })];
                                                        case 1:
                                                            return e.sent(), [2]
                                                    }
                                                })
                                            })
                                        })];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            })
                        }, o = 0, e.label = 2;
                    case 2:
                        return o < u.length ? [5, t(o)] : [3, 5];
                    case 3:
                        e.sent(), e.label = 4;
                    case 4:
                        return o++, [3, 2];
                    case 5:
                        return 2 != i ? [3, 7] : [4, h.getAdConfig()];
                    case 6:
                        if (0 < (u = e.sent()).length)
                            for (n = function(e) {
                                    (e = u[e]).adFormat;
                                    var t = e.adContainerId,
                                        n = e.osnType,
                                        o = e.adIndex,
                                        e = (e.adId, e.adUnit, e.adSize);
                                    r.ThirdPartyAds.loadAds(e.tpAdSize).then(function(e) {
                                        m.OSNHelper.setBannerAd(t, e, n, o), h.adSuccessHandler(t, o, !0)
                                    }).catch(function() {
                                        h.adFailureHandler(o)
                                    })
                                }, o = 0; o < u.length; o++) n(o);
                        e.label = 7;
                    case 7:
                        return [3, 9];
                    case 8:
                        return e.sent(), [3, 9];
                    case 9:
                        return [2]
                }
            })
        })
    }, h.getAdConfig = function() {
        return p(this, void 0, void 0, function() {
            var t, n, o, i;
            return f(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]), t = m.OSNHelper.getRandomInt(h.maxAllowedPost), a.Config.global.deviceType != s.KeyMapper.DEVICE_TYPE_DESKTOP && (t = 1), i = "#iz-osn-sticky-article-".concat(t), n = "article", o = {
                            adContainerId: i,
                            adId: "iz-stickybar-ads",
                            adUnit: a.Config.stickyBar.adUnit,
                            osnType: a.Config.stickyBar.osnType,
                            templateType: void 0,
                            adIndex: t,
                            adFormat: n
                        }, i = {}, [4, y.GAM.setAdSize(a.Config.stickyBar.osnType, void 0, t)];
                    case 1:
                        return [2, [(o.adSize = (i.Gam = e.sent(), i.adgebra = "article" == n ? "200x100" : "300x250", i.tpAdSize = "300x100", i.Adsence = "article" == n ? [300, 100] : [300, 250], i), o)]];
                    case 2:
                        return e.sent(), [2, []];
                    case 3:
                        return [2]
                }
            })
        })
    }, h.adSuccessHandler = function(e, t, n) {
        if (n) {
            n = i.Helper.getDomElement(e);
            return n.style.display = "flex", n.style.justifyContent = "center", void(n.style.alignItems = "center")
        }
        e = i.Helper.getDomElement(e);
        h.adNotificationNo = t;
        t = document.querySelector("#iz-stickybar-ads>div");
        300 < t.clientWidth && (e.style.minWidth = t.clientWidth + 20 + "px")
    }, h.adFailureHandler = function(e) {
        h.stickyBarAdFaliure(e)
    }, h.stickyBarAdFaliure = function(e) {
        var t = h.singlePostHTML.cloneNode(!0);
        i.Helper.getDomElement("#iz-osn-sticky-article-".concat(e)).innerHTML = t.innerHTML, m.OSNHelper.setSmallPosts(e, h.postData[e], a.Config.stickyBar.osnType)
    }, h.rfid = null, h.feedData = [], h.readyToShow = !1, h.currentIndex = 0, h.isClosed = !1, h.isDialogInitialize = !1, h.maxAllowedPost = 6, h.adNotificationNo = void 0, h.dialogBoxID = "iz-osn-stickyBar", h.singlePostHTML = void 0, h.htmlSrc = "https://cdn.izooto.com/osn/stickybar.html", h.postData = void 0, h.isHidden = !1, h);

    function h() {}
}, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        r = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ArticleShare = void 0;
    var o = n(1),
        a = n(0),
        s = n(8),
        c = n(2),
        l = n(7),
        u = n(6),
        d = n(4);
    t.ArticleShare = (p.init = function() {
        0 == o.Config.articleShare.status || o.Config.global.isFrame || 3 != o.Config.global.deviceType || "/" == window.location.pathname ? a.Helper.displayLog("ArticleShare is disabled for this site:") : o.Config.articleShare.rid && o.Config.articleShare.cid && (a.Helper.isRepeatDelayActive(c.KeyMapper.SHAREARTICLE_DELAY) || null != navigator.share && (p.getPageHeight(), p.registerEvent()))
    }, p.registerEvent = function() {
        1 <= o.Config.global.deviceType && p.articleShareScollHandler(function() {
            p.initializeTemplate()
        })
    }, p.articleShareScollHandler = function(t) {
        var n;
        a.Helper.isScreenScrollable() && (n = 0, document.addEventListener("scroll", function() {
            p.onUrlChangeHandler(t);
            var e = window.pageYOffset || document.documentElement.scrollTop;
            n < e && ("" != p.articleUrl ? t() : p.matchScrollPercent(t)), n = e <= 0 ? 0 : e
        }, !1))
    }, p.getPageHeight = function() {
        var e = document.body,
            t = document.documentElement,
            t = Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
        p.pageHeight = t
    }, p.matchScrollPercent = function(e) {
        var t = document.documentElement.scrollTop,
            n = 90 * document.documentElement.clientHeight / 100,
            t = 90 * (p.pageHeight - t) / 100;
        t <= n && e()
    }, p.initializeOnScrollPercent = function(e) {
        var t = document.documentElement,
            n = document.body,
            o = "scrollTop",
            i = "scrollHeight",
            t = (t[o] || n[o]) / ((t[i] || n[i]) - t.clientHeight) * 100;
        90 <= Math.round(t) && e()
    }, p.initializeTemplate = function() {
        p.isDialogInitialize || (p.isDialogInitialize = !0, s.OSNHelper.getHTML(p.htmlSrc).then(function(e) {
            a.Helper.addHTML("div", e, "iz-osn-article-share"), u.ChannelEventHandler.event("articleShare", c.KeyMapper.ARTICLESHARE_READY_SHOW)
        }))
    }, p.clickHandler = function() {
        var e = this,
            t = document.querySelector(".iz_osn_share_button_3");
        "" == p.articleUrl && (p.articleUrl = window.location.href);
        var n, o = {
            url: n = -1 < p.articleUrl.indexOf("utm_source=izooto&utm_medium=onsite_interactions&utm_campaign=article_share") ? p.articleUrl : p.articleUrl + "?utm_source=izooto&utm_medium=onsite_interactions&utm_campaign=article_share",
            title: document.title || ""
        };
        t.addEventListener("click", function() {
            return i(e, void 0, void 0, function() {
                return r(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), [4, navigator.share(o)];
                        case 1:
                            return e.sent(), p.syncArticleShareClick(n), [3, 3];
                        case 2:
                            return e.sent(), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        })
    }, p.closeHandler = function() {
        try {
            var e = document.querySelector(".iz_osn_close_3");
            e.addEventListener("click", function(e) {
                a.Helper.hideElement("#iz-osn-article-share"), p.syncArticleShareDismissed(), u.ChannelEventHandler.event("articleShare", c.KeyMapper.ARTICLESHARE_CLOSED), a.Helper.setRepeatPromptDelay(o.Config.articleShare.closeDelay, c.KeyMapper.SHAREARTICLE_DELAY)
            })
        } catch (e) {}
    }, p.hideArticleShareDialog = function() {
        a.Helper.hideElement("#iz-osn-article-share")
    }, p.onUrlChangeHandler = function(e) {
        try {
            var t = window.location.href,
                n = new MutationObserver(function(e) {
                    window.location.href !== t && (p.articleUrl = t)
                });
            n.observe(document, {
                subtree: !0,
                childList: !0
            })
        } catch (e) {
            a.Helper.displayLog("The page url is not changed")
        }
    }, p.showArticleShareDialogEventHandling = function() {
        p.showArticleShareDialog(), u.ChannelEventHandler.event("articleShare", c.KeyMapper.ARTICLESHARE_SHOWN), p.syncArticleShareView(), a.Helper.setRepeatPromptDelay(o.Config.articleShare.repeatDelay, c.KeyMapper.SHAREARTICLE_DELAY), p.clickHandler(), p.closeHandler()
    }, p.showArticleShareDialog = function() {
        document.querySelector("#iz-osn-article-share").style.display = "block"
    }, p.adsHandler = function() {
        1 != p.adLoaded && (p.adLoaded = !0, l.GAM.loadShareArticleAd())
    }, p.trackingObj = function() {
        return {
            pid: o.Config.client,
            bkey: o.Config.UUID,
            cid: o.Config.articleShare.cid,
            rid: o.Config.articleShare.rid,
            tt: 3,
            ot: o.Config.articleShare.type
        }
    }, p.syncArticleShareView = function() {
        var e = p.trackingObj(),
            t = a.Helper.getEndpoint("syncOnsiteView");
        d.HttpRequest.postForm(t, e, !0).then(function() {
            "ArticleShare view Api synced successfully with ".concat(o.Config.brandingPartner)
        }).catch(function(e) {})
    }, p.syncArticleShareClick = function(e) {
        var t = p.trackingObj(),
            e = encodeURIComponent(e);
        t.link = e;
        e = a.Helper.getEndpoint("syncOnsiteClick");
        d.HttpRequest.postForm(e, t, !0).then(function() {
            "Articleshare click Api synced successfully with ".concat(o.Config.brandingPartner)
        }).catch(function(e) {})
    }, p.syncArticleShareDismissed = function() {
        var e = p.trackingObj(),
            t = a.Helper.getEndpoint("syncOnsiteDismissed");
        d.HttpRequest.postForm(t, e, !0).catch(function(e) {})
    }, p.isDialogInitialize = !1, p.readyToShow = !1, p.articleUrl = "", p.adLoaded = !1, p.htmlSrc = "https://cdn.izooto.com/osn/articleshare/widget.html", p.pageHeight = "", p);

    function p() {}
}, function(e, t, n) {
    "use strict";
    var s = this && this.__assign || function() {
            return (s = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        },
        r = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        a = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Email = void 0;
    var i = n(1),
        c = n(0),
        l = n(4),
        u = n(3),
        d = n(2),
        o = n(6),
        p = n(5),
        f = n(11);
    t.Email = (g.init = function() {
        if (0 == i.Config.email.status || !i.Config.email.dataClientId) return o.ChannelEventHandler.event("email", d.KeyMapper.EMAIL_DISABLED), void c.Helper.displayLog(" iZooto one tap is disable for the site");
        if ("IdentityCredential" in window && (g.fedcmConfig.clientId = i.Config.email.dataClientId, g.isFedCMSupported = !0), 7 != i.Config.notification.windowType) {
            if (8 != i.Config.notification.windowType) return "" != u.StorageManager.getStorage(d.KeyMapper.ONETAP) || "" != u.StorageManager.getConfigLocal(d.KeyMapper.ONETAP_REPEAT_PROMPT_DELAY) && g.isDelayed() ? o.ChannelEventHandler.event("email", d.KeyMapper.EMAIL_CLOSED) : void g.triggerOneTap();
            g.isFedCMSupported && g.initOneTapPrimaryIframe()
        } else g.isFedCMSupported && g.initOneTapCrossDomain(g.fedcmConfig)
    }, g.triggerOneTap = function() {
        g.isPromptShown || (g.isPromptShown = !0, 1 < c.Helper.getDeviceType() ? o.ChannelEventHandler.event("email", d.KeyMapper.EMAIL_READY) : g.showEmailPrompt())
    }, g.signInWithIdP = function(i) {
        var e = this;
        return new Promise(function(n, o) {
            return r(e, void 0, void 0, function() {
                var t;
                return a(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 4, , 5]), "IdentityCredential" in window ? [4, navigator.credentials.get({
                                identity: {
                                    providers: [i]
                                },
                                mediation: "required"
                            })] : [3, 2];
                        case 1:
                            return t = e.sent(), n(t), [3, 3];
                        case 2:
                            o(!1), console.error("IdentityCredential is not supported in this browser."), e.label = 3;
                        case 3:
                            return [3, 5];
                        case 4:
                            return t = e.sent(), o(!1), console.error("Error during authentication:", t), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        })
    }, g.initOneTapCrossDomain = function(t) {
        c.Helper.addMsgReciever(function(e) {
            e = c.Helper.parseToJSON(e.data);
            !e.hasOwnProperty(d.KeyMapper.MESSAGE) || (e = e[d.KeyMapper.MESSAGE]).hasOwnProperty("izootoEmail") && null != e.izootoEmail && ((e = e.izootoEmail).isDelayed || e.email || g.signInWithIdP(t).then(function(e) {
                var t = {
                        credential: e.token
                    },
                    e = document.getElementById("izoneTapIframe");
                c.Helper.postMessage(e, "emailAMPSubscription", t)
            }).catch(function(e) {
                o.ChannelEventHandler.event("email", d.KeyMapper.EMAIL_CLOSED)
            }))
        }, !0);
        var e = i.Config.notification.sourceOrigin + i.Config.notification.htmlName + "?izcmd=syncemailsubscription";
        c.Helper.addIFrame(e, "izoneTapIframe")
    }, g.initOneTapPrimaryIframe = function() {
        try {
            var t;
            c.Helper.addMsgReciever(function(e) {
                e = c.Helper.parseToJSON(e.data);
                !e.hasOwnProperty(d.KeyMapper.MESSAGE) || (e = e[d.KeyMapper.MESSAGE]).hasOwnProperty("emailAMPSubscription") && null != e.emailAMPSubscription && (e = e.emailAMPSubscription, t = e.credential, e && g.processOneTapEncodedResponse({
                    credential: t
                }))
            }, !0);
            var e = {};
            try {
                e = JSON.parse(u.StorageManager.getStorage("izootoEmail"))
            } catch (e) {}
            e.isDelayed = !1, "" != u.StorageManager.getConfigLocal(d.KeyMapper.ONETAP_REPEAT_PROMPT_DELAY) && g.isDelayed() && (e.isDelayed = !0), c.Helper.postMessage("parent", "izootoEmail", e)
        } catch (e) {
            console.error("Error during parsing the credential: ", e)
        }
    }, g.setOnetapContainer = function() {
        var e = document.createElement("div");
        e.id = "g_id_onload", e.setAttribute("data-client_id", i.Config.email.dataClientId), e.setAttribute("data-callback", "izootoEmailSubcriptionCallBack"), e.setAttribute("data-cancel_on_tap_outside", "false"), e.setAttribute("data-moment_callback", "izootoEmailEventsCallback"), e.setAttribute("data-itp_support", "true"), c.Helper.addHTML("div", e.outerHTML);
        e = document.createElement("style");
        e.innerHTML = "\n        #credential_picker_container, #credential_picker_iframe{\n            z-index : 999999999 !important;\n        }\n       ", document.body.appendChild(e)
    }, g.showEmailPrompt = function() {
        g.isFedCMSupported ? g.signInWithIdP(g.fedcmConfig).then(function(e) {
            g.processOneTapEncodedResponse({
                credential: e.token
            })
        }).catch(function(e) {
            o.ChannelEventHandler.event("email", d.KeyMapper.EMAIL_DISABLED)
        }) : (g.setOnetapContainer(), c.Helper.addExternalJS("https://accounts.google.com/gsi/client"))
    }, g.processOneTapEncodedResponse = function(e) {
        var t = (void 0 === e ? {} : e).credential,
            e = (n = g.parseJwt(t)).given_name,
            t = n.family_name,
            n = n.email;
        g.validateOneTapResponse({
            firstName: e,
            lastName: t,
            email: n
        }).catch(console.log)
    }, g.processOneTapPlainTextResponse = function(e, t) {
        var n = void 0 === e ? {} : e,
            o = n.fname,
            e = n.lname,
            n = n.email;

        function i(e) {
            "function" == typeof t && t(e)
        }
        n = n.toString().trim(), g.syncUserEmail = !0, g.validateOneTapResponse({
            firstName: o,
            lastName: e,
            email: n
        }).then(i).catch(i)
    }, g.isSyncNewsLetter = function(e, t) {
        var n = u.StorageManager.getConfigLocal("isSubscribed", d.KeyMapper.ONETAP),
            o = u.StorageManager.getConfigLocal("newsLetterNumber", d.KeyMapper.ONETAP);
        if ("object" == typeof o && !o.hasOwnProperty(e) || t != n) {
            if (null != e && e.toString().length <= 5) return !0;
            c.Helper.displayLog("newsLetterNumber validation failed")
        } else c.Helper.displayLog("newsletter already synced");
        return !1
    }, g.subscribeNewsLetter = function(e, t) {
        var n;
        g.isSyncNewsLetter(e = void 0 === e ? 0 : e, t = void 0 === t ? 1 : t) && (u.StorageManager.getConfigLocal("email", d.KeyMapper.ONETAP) && (n = g.getNewsLetterObject(e), p.NotificationHelper.userProfileProcessor(n, 1)), u.StorageManager.setConfigLocal("isSubscribed", t, d.KeyMapper.ONETAP), (t = !(t = u.StorageManager.getConfigLocal("newsLetterNumber", d.KeyMapper.ONETAP)) || "object" != typeof t ? [] : t).push("".concat(e)), u.StorageManager.setConfigLocal("newsLetterNumber", t, d.KeyMapper.ONETAP))
    }, g.isValidEmail = function(e) {
        return (e = void 0 === e ? "" : e) && g.emailValidatorRegex.test(e) && e.length <= 100
    }, g.isnameValid = function(e) {
        return (e = void 0 === e ? "" : e) ? e.trim().slice(0, 50) : e
    }, g.getNewsLetterObject = function(e) {
        var t;
        return {
            add: ((t = {}).nlo = ["".concat(e)], t)
        }
    }, g.validateOneTapResponse = function(e) {
        var e = void 0 === e ? {} : e,
            i = e.firstName,
            r = e.lastName,
            a = e.email;
        return new Promise(function(n, o) {
            g.isValidEmail(a) ? u.StorageManager.getConfigLocal("email", d.KeyMapper.ONETAP) != a || u.StorageManager.getConfigLocal(d.KeyMapper.EMAIL_NOT_SYNCED) ? (u.StorageManager.removeConfigLocal("isSubscribed", d.KeyMapper.ONETAP), u.StorageManager.removeConfigLocal("newsLetterNumber", d.KeyMapper.ONETAP), u.StorageManager.setConfigLocal("email", a, d.KeyMapper.ONETAP), c.Helper.getFlagBasedParameter().then(function(e) {
                i && (i = g.isnameValid(i), u.StorageManager.setConfigLocal("fn", i, d.KeyMapper.ONETAP)), r && (r = g.isnameValid(r), u.StorageManager.setConfigLocal("ln", r, d.KeyMapper.ONETAP));
                var t = g.getPayload(a, i, r);
                e = s(s({}, e), t), g.syncUserEmail || "function" == typeof f.Queue.registerOneTapCallback && f.Queue.registerOneTapCallback({
                    fname: i,
                    lname: r,
                    email: a
                }), g.syncSubscription(e).then(function() {
                    g.subscribeNewsLetter(0, 1), n(g.responseObj.SYNCED)
                }).catch(function() {
                    return o(g.responseObj.SYNC_FAILED)
                })
            })) : n(g.responseObj.ALREADY_SYNCED) : (o(g.responseObj.INVALID_EMAIL), c.Helper.displayLog("Erorr : Sync Onetap response - ", d.KeyMapper.INVALID_PAYLOAD))
        })
    }, g.getPayload = function(e, t, n) {
        e = {
            bkey: i.Config.UUID,
            izcid: u.StorageManager.getConfigLocal(d.KeyMapper.IZCID),
            ht: "https:" == i.Config.global.locationProtocol ? 1 : 0,
            sv: i.Config.SDKVersion,
            ep: "",
            email: e
        };
        return (t || n) && (e.fn = t, e.ln = n), e
    }, g.parseJwt = function(e) {
        e = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), e = decodeURIComponent(atob(e).split("").map(function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        }).join(""));
        return JSON.parse(e)
    }, g.isDelayed = function() {
        var e = !1,
            t = new Date;
        return u.StorageManager.getConfigLocal(d.KeyMapper.ONETAP_REPEAT_PROMPT_DELAY) > t.getTime() && (e = !0, c.Helper.displayLog("Wait until onetap repeat delay expire!")), e
    }, g.syncSubscription = function(o) {
        return new Promise(function(e, t) {
            var n = c.Helper.getEndpoint("syncEmailSubscription");
            u.StorageManager.setConfigLocal(d.KeyMapper.EMAIL_NOT_SYNCED, 1), l.HttpRequest.postForm(n, o, !0).then(function() {
                u.StorageManager.removeConfigLocal(d.KeyMapper.EMAIL_NOT_SYNCED), "Email payload synced successfully with ".concat(i.Config.brandingPartner), e(!0)
            }).catch(function() {
                return t(!1)
            })
        })
    }, g.eventCallbackHandler = function(e) {
        c.Helper.displayLog("one tap callback responce", e), "display" == e.g && e.h ? (g.setRepeatPromptDelay(i.Config.email.repeatPromptDelay), o.ChannelEventHandler.event("email", d.KeyMapper.EMAIL_INPROGRESS), c.Helper.displayLog("OneTap Prompt is Displayed on ".concat(1 == c.Helper.getDeviceType() ? "Desktop" : "Mobile"))) : o.ChannelEventHandler.event("email", d.KeyMapper.EMAIL_CLOSED), "skipped" != e.g && "dismissed" != e.g || c.Helper.displayLog("OneTap Prompt is Dismissed or skipped")
    }, g.setRepeatPromptDelay = function(e) {
        var t;
        0 !== e && (t = (t = new Date).setTime(t.getTime() + 60 * e * 1e3), "Setting email onetap repeat prompt delay for ".concat(e, " minutes"), u.StorageManager.setConfigLocal(d.KeyMapper.ONETAP_REPEAT_PROMPT_DELAY, t))
    }, g.isPromptShown = !1, g.emailValidatorRegex = new RegExp(/^\S+@\S+\.\S+$/), g.isFedCMSupported = !1, g.responseObj = {
        SYNCED: {
            success: !0,
            response: "Synced"
        },
        ALREADY_SYNCED: {
            success: !0,
            response: "Already Synced"
        },
        INVALID_EMAIL: {
            success: !1,
            response: "Invalid Email",
            errorCode: 1
        },
        SYNC_FAILED: {
            success: !1,
            response: "Sync failed",
            errorCode: 2
        }
    }, g.syncUserEmail = !1, g.fedcmConfig = {
        configURL: "https://accounts.google.com/gsi/fedcm.json",
        clientId: "",
        nonce: "random",
        use_fedcm_for_prompt: !0
    }, g);

    function g() {}
}, function(e, t, n) {
    "use strict";
    var c = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        l = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AdBlockRecovery = void 0;
    var u = n(7),
        o = n(6),
        d = n(1),
        p = n(0),
        i = n(4),
        r = n(2),
        a = n(8),
        s = n(3),
        f = n(16),
        g = n(10);
    t.AdBlockRecovery = (y.insertAdsIntoDom = function() {
        return c(this, void 0, void 0, function() {
            return l(this, function(e) {
                return [2, new Promise(function(e) {
                    function t() {
                        p.Helper.addHTML("div", y.generatesBannersString(), m.adChecker), e(!0)
                    }
                    "complete" === document.readyState || "interactive" === document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
                })]
            })
        })
    }, y.detect = function() {
        var n;
        return c(this, void 0, void 0, function() {
            var t;
            return l(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, y.insertAdsIntoDom()];
                    case 1:
                        return e.sent(), t = !y.bannerIds.every(function(e) {
                            return y.checkVisibility(e)
                        }), null !== (n = p.Helper.getDomElement("#" + m.adChecker)) && void 0 !== n && n.remove(), [2, t]
                }
            })
        })
    }, y.generatesBannersString = function() {
        return y.bannerIds.map(function(e) {
            return '<div id="'.concat(e, '"></div>')
        }).join("")
    }, y.checkVisibility = function(e) {
        return (null === (e = p.Helper.getDomElement("#".concat(e))) || void 0 === e ? void 0 : e.offsetParent) || null
    }, y.initPopup = function(t) {
        var e, n;
        void 0 === t && (t = !1), (s.StorageManager.getConfigLocal(r.KeyMapper.ONSITE_ADS_ALLOWED) || t) && (e = d.Config.adBR.templateId, n = d.Config.adBR.htmlVersion[e], i.HttpRequest.get("https://cdn.izooto.com/osn/adbr/".concat(e, "/v").concat(n, ".html")).then(function(e) {
            p.Helper.addHTML("div", e), y.attachEventListners(), y.setSiteLogo(), y.setScreen(t), 3 <= s.StorageManager.getConfigLocal(r.KeyMapper.ONSITE_ADS_REFRESH_COUNT) && (y.showCloseButton(), s.StorageManager.removeConfigLocal(r.KeyMapper.ONSITE_ADS_REFRESH_COUNT)), o.ChannelEventHandler.event("adblock", r.KeyMapper.ADBLOCK_READY_SHOW)
        }).catch(function(e) {}))
    }, y.setSiteLogo = function() {
        d.Config.adBR.logoSrc ? document.querySelectorAll("." + m.brandImage).forEach(function(e) {
            e.src = d.Config.adBR.logoSrc, e.onerror = function() {
                return y.brandLogoNotAvailable()
            }
        }) : y.brandLogoNotAvailable()
    }, y.setScreen = function(e) {
        s.StorageManager.getConfigLocal(r.KeyMapper.ONSITE_ADS_ALLOWED) && 0 == e ? y.showThankyouSection() : (y.syncImpression(), s.StorageManager.setConfigLocal(r.KeyMapper.ONSITE_ADS_ALLOWED, 1), s.StorageManager.setConfigLocal(r.KeyMapper.ONSITE_ADS_REFRESH_COUNT, (s.StorageManager.getConfigLocal(r.KeyMapper.ONSITE_ADS_REFRESH_COUNT) || 0) + 1))
    }, y.attachEventListners = function() {
        var e = p.Helper.getDomElement("." + m.allowADS),
            t = p.Helper.getDomElement("." + m.refreshButton),
            n = p.Helper.getDomElement("." + m.closeButton);
        e.addEventListener("click", function() {
            p.Helper.hideElement("." + m.section1), p.Helper.hideElement("." + m.section3), p.Helper.showElement("." + m.content)
        }), t.addEventListener("click", function() {
            window.location.reload()
        }), n.addEventListener("click", function() {
            y.hidePopup(), y.syncDismiss()
        });
        var o = document.querySelectorAll("." + m.tabButton);
        o.forEach(function(e, n) {
            e.addEventListener("click", function() {
                document.querySelectorAll("." + m.tabContent + " ol").forEach(function(e, t) {
                    o[t].classList.add(m.activeTab), n == t ? (e.style.display = "block", o[t].classList.add(m.activeTab)) : (e.style.display = "none", o[t].classList.remove(m.activeTab))
                })
            })
        })
    }, y.showThankyouSection = function() {
        s.StorageManager.removeConfigLocal(r.KeyMapper.ONSITE_ADS_ALLOWED), y.syncClick(), y.showCloseButton(), p.Helper.hideElement("." + m.section1), p.Helper.hideElement("." + m.content), p.Helper.showElement("." + m.section3, !1), y.articleAdsHTML = p.Helper.getDomElement("#iz_osn_adblocker_ad_container").cloneNode(!0), p.Helper.getDomElement("#iz_osn_adblocker_ad_container").innerHTML = "";
        var e = 0;
        (e = d.Config.adBR.adUnit ? 1 : e) && y.adsHandler(e)
    }, y.adsHandler = function(s) {
        return c(this, void 0, void 0, function() {
            var t, n, r, o, i, a = this;
            return l(this, function(e) {
                switch (e.label) {
                    case 0:
                        return t = d.Config.adBR.templateId, t = {
                            1: y.getAdConfig
                        }[t], 1 != s ? [3, 4] : t ? [4, t()] : [3, 2];
                    case 1:
                        for (r = e.sent(), n = function(e) {
                                var t, n = (t = r[e]).adContainerId,
                                    o = t.adId,
                                    e = t.adUnit,
                                    i = t.adSize;
                                u.GAM.createAdContainer(n, o), u.GAM.loadGAMAds(o, e, i.Gam).then(function() {}).catch(function() {
                                    return c(a, void 0, void 0, function() {
                                        return l(this, function(e) {
                                            return u.GAM.createAdContainer(n, o), y.createArticleContainer(o), f.Adgebra.loadAd(i.adgebra).then(function(e) {
                                                y.setArticleAd(e, o)
                                            }).catch(function() {
                                                y.adFailureHandler()
                                            }), [2]
                                        })
                                    })
                                })
                            }, i = 0; i < r.length; i++) n(i);
                        return [3, 3];
                    case 2:
                        p.Helper.displayLog("Exit intent ads handle error"), e.label = 3;
                    case 3:
                        return [3, 6];
                    case 4:
                        return 2 != s ? [3, 6] : t ? [4, t()] : [3, 6];
                    case 5:
                        for (r = e.sent(), o = function(e) {
                                var t = (e = r[e]).adContainerId,
                                    n = e.adId,
                                    e = e.adSize;
                                g.ThirdPartyAds.loadAds(e.tpAdSize).then(function(e) {
                                    u.GAM.createAdContainer(t, n), y.setBannerAd(n, e)
                                }).catch(function() {
                                    y.adFailureHandler()
                                })
                            }, i = 0; i < r.length; i++) o(i);
                        e.label = 6;
                    case 6:
                        return [2]
                }
            })
        })
    }, y.getAdConfig = function() {
        var e = this;
        return new Promise(function(o, i) {
            return c(e, void 0, void 0, function() {
                var t, n;
                return l(this, function(e) {
                    try {
                        t = d.Config.adBR.adUnit, n = d.Config.adBR.templateId, o([{
                            adContainerId: "#iz_osn_adblocker_ad_container",
                            adId: "iz-adblocker-ads",
                            adUnit: t,
                            templateType: n,
                            adFormat: "article",
                            adSize: {
                                Gam: [
                                    [320, 50]
                                ],
                                adgebra: "200x100",
                                tpAdSize: "300x50",
                                Adsence: [320, 50]
                            }
                        }])
                    } catch (e) {
                        i(!1)
                    }
                    return [2]
                })
            })
        })
    }, y.syncImpression = function() {
        y.sendToServer(p.Helper.getEndpoint("syncOnsiteView"))
    }, y.syncClick = function() {
        y.sendToServer(p.Helper.getEndpoint("syncOnsiteClick"))
    }, y.syncDismiss = function() {
        y.sendToServer(p.Helper.getEndpoint("syncOnsiteDismissed"))
    }, y.sendToServer = function(e) {
        var t = {
            pid: d.Config.client,
            bkey: d.Config.UUID,
            cid: d.Config.adBR.cid,
            rid: d.Config.adBR.rid,
            ot: 4
        };
        d.Config.adBR.rid && d.Config.adBR.cid && i.HttpRequest.postForm(e, t, !0).then(function() {
            "Onsite Adblocker ".concat(e, " synced successfully with ").concat(d.Config.brandingPartner)
        }).catch(console.log)
    }, y.showCloseButton = function() {
        p.Helper.getDomElement("." + m.closeButton).style.visibility = "visible"
    }, y.hidePopup = function() {
        p.Helper.hideElement("#" + m.mainContainer), o.ChannelEventHandler.event("adblock", r.KeyMapper.ADBLOCK_CLOSED)
    }, y.brandLogoNotAvailable = function() {
        var e = window.location.hostname.split(".");
        "www" === e[0] && e.splice(0, 1);
        var t = e.join(".").toUpperCase();
        document.querySelectorAll("." + m.brandURL).forEach(function(e) {
            e.style.display = "-webkit-box", e.innerHTML = t
        }), document.querySelectorAll("." + m.brandImage).forEach(function(e) {
            e.style.display = "none"
        })
    }, y.showPopup = function() {
        p.Helper.showElement("#" + m.mainContainer)
    }, y.adFailureHandler = function() {
        var e = p.Helper.getDomElement("#iz_osn_adblocker_ad_container");
        e.innerHTML = "", e.style.display = "none"
    }, y.createArticleContainer = function(e) {
        p.Helper.getDomElement("#".concat(e)).innerHTML = y.articleAdsHTML.innerHTML
    }, y.setArticleAd = function(e, t) {
        t = p.Helper.getDomElement("#".concat(t));
        a.OSNHelper.setOsnDataIntoElement(t, e, void 0, 4)
    }, y.setBannerAd = function(e, t) {
        var n = p.Helper.getDomElement("#".concat(e)),
            o = document.createElement("img");
        n.innerHTML = "", n.onclick = null, n.style.cursor = "pointer";
        e = t.image;
        o.src = e, o.setAttribute("alt", "Icon"), n.appendChild(o), n.onclick = function() {
            window.open(t.url)
        }
    }, y.bannerIds = ["AdHeader", "AdContainer", "AD_Top", "homead", "ad-lead"], y.articleAdsHTML = void 0, y);

    function y() {}
    var t = "iz_osn_adblocker_",
        m = {
            mainContainer: "iz_osn_adblocker",
            adChecker: "".concat(t, "detect_container"),
            brandImage: "".concat(t, "logo img"),
            brandURL: "".concat(t, "logo_text"),
            allowADS: "".concat(t, "allowads_button"),
            refreshButton: "".concat(t, "refresh_button"),
            section1: "".concat(t, "content_section_1"),
            content: "".concat(t, "content_section_2"),
            section3: "".concat(t, "content_section_3"),
            activeTab: "".concat(t, "active_tab"),
            tabButton: "".concat(t, "tab_button"),
            tabContent: "".concat(t, "tab_content"),
            closeButton: "".concat(t, "close a")
        }
}, function(e, t, n) {
    "use strict";
    var s = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        c = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FeedHelper = void 0;
    var _ = n(1),
        T = n(0),
        a = n(4),
        o = n(15),
        M = n(2),
        P = n(3),
        l = n(9),
        u = n(6),
        n = (i.prototype.setup = function() {
            return s(this, void 0, void 0, function() {
                var t;
                return c(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return !1 !== this.isFeedSourceRSS ? [3, 3] : [4, this.readLastClickVisitFromDb()];
                        case 1:
                            return e.sent(), [4, (t = this).getAllNotificationsFromDb()];
                        case 2:
                            t.notificationTempQ = e.sent(), e.label = 3;
                        case 3:
                            return [2, Promise.resolve(!0)]
                    }
                })
            })
        }, i.prototype.loadNotifications = function(o) {
            return void 0 === o && (o = this.currentJsonFileIndex), s(this, void 0, void 0, function() {
                var n;
                return c(this, function(e) {
                    return n = this, [2, new Promise(function(t, e) {
                        n.isNewsLoading ? t({
                            data: [],
                            status: n.status.ALREADY_IN_PROGRESS
                        }) : 4 < o ? t({
                            data: [],
                            status: n.status.FAILED
                        }) : (n.isNewsLoading = !0, a.HttpRequest.get(n.cdnCampaignsSrc(o)).then(function(e) {
                            ++n.currentJsonFileIndex, n.isNewsLoading = !1;
                            e = T.Helper.parseToJSON(e);
                            0 == o && (i.saveLastNotificationIntoLocalStorage(e), l.NewsHub.updateLatestNotificationValue()), t({
                                data: e,
                                status: n.status.SUCCESS
                            })
                        }).catch(function() {
                            t({
                                data: [],
                                status: n.status.FAILED
                            })
                        }))
                    })]
                })
            })
        }, i.saveLastNotificationIntoLocalStorage = function(e) {
            e = e[0];
            e.hasOwnProperty("p") && (e = e.p.r, P.StorageManager.setConfigLocal(M.KeyMapper.NEWSHUB_LATEST_OPEN_NOTIFICATION, e))
        }, i.prototype.loadSortedCampaignNotifications = function() {
            return s(this, void 0, void 0, function() {
                var o;
                return c(this, function(e) {
                    return o = this, [2, new Promise(function(n, e) {
                        o.loadNotifications().then(function(e) {
                            var t = e.data,
                                e = e.status;
                            e == o.status.SUCCESS ? (o.storeSegmentIntoIdb(t), t = parseInt(t[t.length - 1].p.ct), o.sortNotificationsFromIdb(t)) : e == o.status.FAILED && o.sortNotificationsFromIdb(0), n(e)
                        })
                    })]
                })
            })
        }, i.prototype.loadSortedRSSNotification = function() {
            return s(this, void 0, void 0, function() {
                var o, i = this;
                return c(this, function(e) {
                    return o = this, [2, new Promise(function(n, e) {
                        o.loadNotifications().then(function(e) {
                            var t = e.data,
                                e = e.status;
                            e == o.status.SUCCESS && t.map(function(e) {
                                var t = "".concat(e.ct, "000"),
                                    t = {
                                        payload: {
                                            t: e.t,
                                            m: e.m,
                                            ln: e.l,
                                            i: e.i,
                                            bi: e.mi,
                                            ct: t,
                                            id: Number(_.Config.newsHub.cid),
                                            idx: l.NewsHub.RSSArticleIndex
                                        },
                                        key: Number(_.Config.newsHub.rid),
                                        clickedAt: !1,
                                        receivedAt: Date.now(),
                                        fetched: 1
                                    },
                                    e = e.t + "~" + e.l; - 1 == i.ridsList.indexOf(e) && (i.ridsList.push(e), i.notificationShowList.push(t)), l.NewsHub.RSSArticleIndex++
                            }), 0 < i.notificationShowList.length && i.notificationShowList.sort(function(e, t) {
                                return t.payload.ct - e.payload.ct
                            }), n(e)
                        })
                    })]
                })
            })
        }, i.prototype.getNotifications = function(a) {
            return void 0 === a && (a = this.minimumNotificationToShow), s(this, void 0, void 0, function() {
                var i, r, t = this;
                return c(this, function(e) {
                    return i = this, r = [], [2, new Promise(function(o, e) {
                        return s(t, void 0, void 0, function() {
                            var t, n;
                            return c(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return i.canLoadMore ? i.notificationShowList.length < a ? i.isFeedSourceRSS ? [4, i.loadSortedRSSNotification()] : [3, 2] : [3, 5] : [3, 5];
                                    case 1:
                                        return t = e.sent(), [3, 4];
                                    case 2:
                                        return [4, i.loadSortedCampaignNotifications()];
                                    case 3:
                                        t = e.sent(), e.label = 4;
                                    case 4:
                                        if ((n = t) == i.status.ALREADY_IN_PROGRESS) return [2, o({
                                            data: [],
                                            status: n
                                        })];
                                        i.canLoadMore = n == i.status.SUCCESS, e.label = 5;
                                    case 5:
                                        return this.notificationShowList.length < a && i.canLoadMore ? [2, o(this.getNotifications())] : (r = this.notificationShowList.splice(0, a), n = i.status.SUCCESS, n = i.ridsList.length ? r.length ? i.status.SUCCESS : i.status.NO_MORE_NOTIFICATIONS : i.status.NULL_NOTIFICATION_SENT, o({
                                            data: r,
                                            status: n
                                        }), [2])
                                }
                            })
                        })
                    })]
                })
            })
        }, i.prototype.cdnCampaignsSrc = function(e) {
            return _.Config.hashFileName ? (this.isFeedSourceRSS ? "https://rec.izooto.com/rec/v2/".concat(_.Config.newsHub.rfiId, "/") : "https://nh.izooto.com/nh/".concat(_.Config.hashFileName, "/")).concat(e, ".json") : ""
        }, i.prototype.getAllNotificationsFromDb = function() {
            return s(this, void 0, void 0, function() {
                var i, r = this;
                return c(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return i = [], [4, o.IndexedDB.getIndexDBData("notificationLog", "all").then(function(e) {
                                if (e) {
                                    e.sort(function(e, t) {
                                        return t.payload.ct - e.payload.ct
                                    }), e.forEach(function(e) {
                                        e.key.toString().length <= 15 && -1 == r.cidsList.indexOf(e.payload.id) && (e.key.toString().startsWith("6") || e.key.toString().startsWith("7") || (i.push(e), r.ridsList.push(e.key), r.cidsList.push(e.payload.id)))
                                    });
                                    for (var t = 0, n = i; t < n.length; t++) {
                                        var o = n[t];
                                        if (!o.payload.hasOwnProperty("vr")) {
                                            r.dbLatestTimeStamp = parseInt(o.payload.ct);
                                            break
                                        }
                                    }
                                    return i
                                }
                                T.Helper.displayLog("Notication Log : data not found in db!")
                            }).catch(function(e) {
                                T.Helper.displayLog(e)
                            })];
                        case 1:
                            return [2, e.sent()]
                    }
                })
            })
        }, i.prototype.segmentParser = function(e) {
            var t, n = ["px", "dev", "lci", "lvi"];
            for (t in e) {
                if (!(-1 < n.indexOf(t))) return !1;
                if ("dev" == t) {
                    if (-1 == e.dev[0].indexOf(_.Config.global.deviceType)) return T.Helper.displayLog("Device segment validation failed"), !1
                } else {
                    if ("px" == t && !this.isUserPropertySegmentValidated(e)) return T.Helper.displayLog("User property segment validation failed"), !1;
                    if (("lci" == t || "lvi" == t) && !this.isDateTimeSegmentValidated(e, t)) return T.Helper.displayLog("Last click segment validation failed"), !1
                }
            }
            return !0
        }, i.prototype.isUserPropertySegmentValidated = function(a) {
            var e, s = {
                    yes: !0,
                    no: !1
                },
                c = a.px,
                l = this;
            for (e in c) {
                var t = function(t) {
                    for (var e = c[t], n = 0, o = e.values; n < o.length; n++) {
                        var i = o[n],
                            r = i.v;
                        if (1 == e.multi) switch (i.op) {
                            case "contains":
                            case "equals":
                                if (r.every(function(e) {
                                        return -1 == P.StorageManager.getConfigLocal(t, M.KeyMapper.USER_PROPERTY).indexOf(e)
                                    })) return {
                                    value: !1
                                };
                                break;
                            case "does not contain":
                            case "not contains":
                            case "not equals":
                                if (r.every(function(e) {
                                        return -1 < P.StorageManager.getConfigLocal(t, M.KeyMapper.USER_PROPERTY).indexOf(e)
                                    })) return {
                                    value: !1
                                }
                        } else {
                            if ("datetime" == e.type) return {
                                value: l.isDateTimeSegmentValidated(a, "px", t)
                            };
                            switch (r = "boolean" == e.type ? s[r] : r, i.op) {
                                case "equals":
                                    if (P.StorageManager.getConfigLocal(t, M.KeyMapper.USER_PROPERTY) != r) return {
                                        value: !1
                                    };
                                    break;
                                case "not equals":
                                    if (P.StorageManager.getConfigLocal(t, M.KeyMapper.USER_PROPERTY) == r) return {
                                        value: !1
                                    };
                                    break;
                                case "greater than":
                                    if (P.StorageManager.getConfigLocal(t, M.KeyMapper.USER_PROPERTY) <= r) return {
                                        value: !1
                                    };
                                    break;
                                case "less than":
                                    if (P.StorageManager.getConfigLocal(t, M.KeyMapper.USER_PROPERTY) >= r) return {
                                        value: !1
                                    }
                            }
                        }
                    }
                }(e);
                if ("object" == typeof t) return t.value
            }
            return !0
        }, i.prototype.isDateTimeSegmentValidated = function(e, t, n) {
            var o, e = e[t],
                i = "lci" == t ? _.Config.store.lastClick : _.Config.store.lastView;
            if ("px" == t) try {
                var r = P.StorageManager.getConfigLocal(n, M.KeyMapper.USER_PROPERTY);
                if (!r) return !1;
                for (var i = new Date(r).getTime(), a = [], s = null === (o = e[n]) || void 0 === o ? void 0 : o.values, c = 0, l = s; c < l.length; c++) {
                    var u = l[c];
                    a.push(u.v)
                }
                e = a
            } catch (e) {}
            if (!i) return T.Helper.displayLog("Last click or visit key not found in db"), !1;
            for (var d = 0, p = e; d < p.length; d++) {
                var f, g = !!(f = p[d]).d1 && new Date(f.d1),
                    y = !!f.d2 && new Date(f.d2),
                    m = f.days || !1,
                    h = f["min-days"] || !1,
                    S = f["max-days"] || !1,
                    b = (b = new Date(i)).toLocaleDateString(),
                    v = new Date,
                    w = new Date;
                switch (T.Helper.displayLog("Last Click Visit Operation: ", f.op), f.op) {
                    case "before":
                        if (i > g.getTime()) return !1;
                        break;
                    case "after":
                        if (i < g.getTime()) return !1;
                        break;
                    case "on":
                        if (b != g.toLocaleDateString()) return !1;
                        break;
                    case "between":
                        if (g.getTime() > i && i < y.getTime()) return !1;
                        break;
                    case "in the past":
                        if (w.setDate(v.getDate() - m), i < w.getTime()) return !1;
                        break;
                    case "was exactly":
                        if (w.setDate(v.getDate() - m), b != w.toLocaleDateString()) return !1;
                        break;
                    case "today":
                        if (b != v.toLocaleDateString()) return !1;
                        break;
                    case "relative between":
                        var C = w.setDate(v.getDate() - h),
                            E = w.setDate(v.getDate() - S);
                        if (i < C && i < E) return !1;
                        break;
                    default:
                        return !1
                }
            }
            return !0
        }, i.prototype.readLastClickVisitFromDb = function() {
            return s(this, void 0, void 0, function() {
                return c(this, function(e) {
                    return [2, new Promise(function(t, e) {
                        o.IndexedDB.getIndexDBData("swEvents", "click").then(function(e) {
                            e ? (T.Helper.displayLog("Last click found from db: ", e), _.Config.store.lastClick = 1e3 * e.timestamp) : T.Helper.displayLog("Last click  not found ")
                        }).catch(function(e) {
                            T.Helper.displayLog(e)
                        }).then(function() {
                            o.IndexedDB.getIndexDBData("swEvents", "view").then(function(e) {
                                e ? (_.Config.store.lastView = 1e3 * e.timestamp, t(_.Config.store.lastView)) : (T.Helper.displayLog("Last view not found"), t(!1))
                            }).catch(function(e) {
                                T.Helper.displayLog(e), t(!1)
                            })
                        })
                    })]
                })
            })
        }, i.prototype.sortNotifications = function(e) {
            var t = {
                payload: e
            };
            if (-1 < this.cidsList.indexOf(e.id)) return e.r, void e.id;
            if (e.o) T.Helper.displayLog("Excluding offline campaign from newshub", e);
            else {
                if (t && e.hasOwnProperty("r")) {
                    if (16 <= e.r.length) return void T.Helper.displayLog("Excluding plalybook & subid notifications");
                    if (e.r.startsWith("6") || e.r.startsWith("7")) return void T.Helper.displayLog("Excluding Notification which startwith 6 or 7");
                    t.key = parseInt(e.r), t.clickedAt = !1, t.receivedAt = Date.now()
                }
                if (!(-1 < this.ridsList.indexOf(parseInt(e.r)))) return this.ridsList.push(parseInt(e.r)), this.cidsList.push(e.id), this.notificationShowList.push(t), this.notificationShowList.sort(function(e, t) {
                    return t.payload.ct - e.payload.ct
                }), t
            }
        }, i.prototype.setDataIntoDB = function(e) {
            e.fetched = 1, o.IndexedDB.addUpdateToTable("notificationLog", e).then(function(e) {
                T.Helper.displayLog(e)
            }).catch(function(e) {
                T.Helper.displayLog(e)
            })
        }, i.prototype.setPayloadData = function(e, n) {
            (e = "number" == typeof e ? [e] : e).forEach(function(t) {
                "Set payload data  to db : ".concat(t), o.IndexedDB.getIndexDBData("notificationLog", t).then(function(e) {
                    e.hasOwnProperty("clickedAt") && !e.clickedAt && n.hasOwnProperty("clickedAt") ? (e.clickedAt = n.clickedAt, o.IndexedDB.addUpdateToTable("notificationLog", e).then(function(e) {
                        "Mark as read : ".concat(t, " successfull")
                    }).catch(function(e) {
                        T.Helper.displayLog("Mark as read Error ".concat(t), e)
                    })) : T.Helper.displayLog("Notication Log : data not found in db!")
                }).catch(function(e) {
                    T.Helper.displayLog(e)
                })
            })
        }, i.prototype.sortNotificationsFromIdb = function(n) {
            var o = this;
            this.notificationTempQ.forEach(function(e, t) {
                -1 == o.notificationShowKeyList.indexOf(e.key) && e.payload.ct >= n && (o.notificationShowKeyList.push(e.key), o.notificationShowList.push(e))
            }), this.notificationShowList.sort(function(e, t) {
                return t.payload.ct - e.payload.ct
            })
        }, i.prototype.storeSegmentIntoIdb = function(e) {
            for (var t = 0, n = e; t < n.length; t++) {
                var o = n[t],
                    i = !1;
                1 != (i = !o.a || this.segmentParser(T.Helper.parseToJSON(o.a)) ? !0 : i) || (o = this.sortNotifications(o.p)) && this.setDataIntoDB(o)
            }
        }, i.loadLatestNotificationForCallout = function() {
            return s(this, void 0, void 0, function() {
                return c(this, function(e) {
                    return [2, new Promise(function(i, r) {
                        var e = "https://nh.izooto.com/nh/".concat(_.Config.hashFileName, "/latest.json");
                        l.NewsHub.isValidRSS && (e = "https://rec.izooto.com/rec/v2/".concat(_.Config.newsHub.rfiId, "/latest.json")), a.HttpRequest.get(e).then(function(e) {
                            var t;
                            try {
                                var n, o = T.Helper.parseToJSON(e);
                                l.NewsHub.isValidRSS ? (o = o[0], o = {
                                    p: {
                                        id: _.Config.newsHub.cid,
                                        r: _.Config.newsHub.rid,
                                        ln: null == o ? void 0 : o.l,
                                        t: null == o ? void 0 : o.t,
                                        m: null == o ? void 0 : o.m,
                                        i: null == o ? void 0 : o.mi,
                                        bi: o.mi,
                                        idx: 0
                                    }
                                }) : (n = null === (t = o.p) || void 0 === t ? void 0 : t.r, P.StorageManager.setConfigLocal(M.KeyMapper.NEWSHUB_LASTEST_NOTIFICATION, n)), o.hasOwnProperty("p") && o.p.t ? i(o) : (u.ChannelEventHandler.event("newsHub", M.KeyMapper.NEWSHUB_ANIMATIONEND), r(!1))
                            } catch (e) {
                                u.ChannelEventHandler.event("newsHub", M.KeyMapper.NEWSHUB_ANIMATIONEND), r(!1)
                            }
                        }).catch(function(e) {
                            r(!1), T.Helper.displayLog("Load latest notification error", e)
                        })
                    })]
                })
            })
        }, i);

    function i(e, t) {
        void 0 === t && (t = !1), this.minimumNotificationToShow = e, this.isFeedSourceRSS = t, this.status = {
            NO_MORE_NOTIFICATIONS: "No more notifications available",
            ALREADY_IN_PROGRESS: "Older request already in progress",
            NULL_NOTIFICATION_SENT: "Null: No notifications sent",
            SUCCESS: "success",
            FAILED: "failed"
        }, this.isNoNotification = !0, this.ridsList = [], this.cidsList = [], this.canLoadMore = !0, this.isNewsLoading = !1, this.dbLatestTimeStamp = 0, this.notificationTempQ = [], this.notificationShowKeyList = [], this.currentJsonFileIndex = 0, this.notificationShowList = []
    }
    t.FeedHelper = n
}, function(e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        i = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NotificationFeed = void 0;
    var r = n(1),
        a = n(28),
        s = n(0);
    t.NotificationFeed = (c.init = function(t) {
        return o(this, void 0, void 0, function() {
            return i(this, function(e) {
                switch (e.label) {
                    case 0:
                        return r.Config.newsHub.allowFeed ? (c.feedCallback = t, c.isInititated ? [3, 2] : (c.isInititated = !0, [4, (c.apiFeed = new a.FeedHelper(c.minimumNotifications)).setup()])) : [2];
                    case 1:
                        e.sent(), e.label = 2;
                    case 2:
                        return c.handler(), [2]
                }
            })
        })
    }, c.handler = function() {
        return o(this, void 0, void 0, function() {
            var t, n, o;
            return i(this, function(e) {
                switch (e.label) {
                    case 0:
                        return [4, c.apiFeed.getNotifications()];
                    case 1:
                        switch (o = e.sent(), n = o.data, o = o.status) {
                            case c.apiFeed.status.NO_MORE_NOTIFICATIONS:
                                t = 1;
                                break;
                            case c.apiFeed.status.NULL_NOTIFICATION_SENT:
                                t = 2;
                                break;
                            case c.apiFeed.status.ALREADY_IN_PROGRESS:
                                t = 3
                        }
                        return n = c.dataParser(n), c.respondToCallback(o == c.apiFeed.status.SUCCESS, n, o, t), [2]
                }
            })
        })
    }, c.respondToCallback = function(e, t, n, o) {
        void 0 === t && (t = []), "function" == typeof c.feedCallback && c.feedCallback(c.getResponseFormate(e, t, n, o)), c.feedCallback = void 0
    }, c.getResponseFormate = function(e, t, n, o) {
        n = {
            success: e = void 0 === e ? !1 : e,
            data: t = void 0 === t ? [] : t,
            response: n
        };
        return o && (n.errorCode = o), n
    }, c.dataParser = function(e) {
        var o = [];
        return e.forEach(function(e) {
            var t = e.payload,
                n = e.receivedAt,
                e = s.Helper.replaceQueryParam(t.ln, "utm_source", "izooto"),
                e = s.Helper.replaceQueryParam(e, "utm_medium", "notification_feed"),
                n = {
                    title: t.t,
                    message: t.m,
                    bannerImage: t.bi || "",
                    icon: t.i,
                    landingUrl: e,
                    createdAt: t.ct || n
                };
            o.push(n)
        }), o
    }, c.statusText = {
        EMPTY: "No more notifications available",
        SUCCESS: "Notification feed fetched successfully",
        FAIL: "Null: No notifications sent"
    }, c.minimumNotifications = 10, c.isInititated = !1, c);

    function c() {}
}, function(e, t, n) {
    "use strict";
    var l = this && this.__assign || function() {
        return (l = Object.assign || function(e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Shopify = void 0;
    var u = n(1),
        d = n(0),
        p = n(3),
        f = n(4),
        g = n(5),
        a = n(14),
        y = n(2);
    t.Shopify = (m.init = function(e) {
        window._izooto[m._izLastVariantCookieName] = "";
        var t, n = null != e ? e : !1;
        if (2 == u.Config.notification.isShopify) return m.shopifyCart(), void d.Helper.displayLog("Old Shopify");
        1 == u.Config.notification.isShopify && (d.Helper.displayLog("New Shopify"), e = 5 * Math.random(), (t = new XMLHttpRequest).addEventListener("load", function(e) {
            m.shopifyCartTracker(t, n)
        }), t.open("GET", "/cart.js?" + e), t.send()), m.resetProductCookie(), m.checkAndSendShopifyEvents(!0)
    }, m.shopifyCartTracker = function(e, t) {
        var n = "iz_sh_cart_v2";
        d.Helper.displayLog(e), d.Helper.displayLog("Purge :" + t), o = d.Helper.parseToJSON(e.responseText), d.Helper.displayLog(o);
        o.items;
        var o, i = o.token,
            r = p.StorageManager.getStorage(n);
        null != i && "" != i && ((e = new Date).setTime(e.getTime() + 864e5), e.toUTCString(), i == r && !t || (o = p.StorageManager.getStorage(y.KeyMapper.PUSH_TOKEN), e = 0, o = d.Helper.parseToJSON(o), 1 < Object.keys(o).length && (e = 1), d.Helper.displayLog("[Mapper hit]"), r = d.Helper.getEndpoint("ShopifyMapper"), t = p.StorageManager.getStorage(y.KeyMapper.PUSH_TOKEN), t = d.Helper.parseToJSON(t), t = {
            bkey: u.Config.UUID,
            btype: d.Helper.getBrowserType(),
            dtype: d.Helper.getDeviceType(),
            pid: u.Config.client,
            shopify_token: i,
            pte: u.Config.notification.subscriptionType,
            custom_topic: "custom-js-mapper"
        }, 1 == e && (t.auth = o.keys.auth, t.pk = o.keys.p256dh), u.Config.global.browserName != y.KeyMapper.BROWSER_SAFARI && (t = l(l({}, t), d.Helper.endPointParamExtract(p.StorageManager.getStorage(y.KeyMapper.PUSH_TOKEN)))), f.HttpRequest.postForm(r, t).catch(function(e) {}), a.CookieStorage.setCookie(n, i, 1)))
    }, m.shopifyFix = function() {
        try {
            var e = document.createElement("img");
            e.style.width = "0px", e.style.height = "0px", e.src = document.location.protocol + "//" + document.location.hostname + u.Config.notification.manifest
        } catch (e) {}
    }, m.shopifyCart = function() {
        var e = p.StorageManager.getStorage("cart");
        void 0 !== e && "" !== e && (e = -1 != e.indexOf("=") ? e.split("=")[1] : e) !== p.StorageManager.getStorage("iz_sh_cart") && "ckout=" != e && (a.CookieStorage.setCookie("iz_sh_cart", e), window._izq.push(["event", "add_to_cart", {
            cart_id: e
        }]))
    }, m.resetProductCookie = function() {
        window._izooto[m._izLastVariantCookieName] = "", a.CookieStorage.setCookie(m._izLastVariantCookieName, "")
    }, m.checkIfVariantChanged = function() {
        var e = "" == window._izooto[m._izLastVariantCookieName] ? a.CookieStorage.getCookie(m._izLastVariantCookieName) : window._izooto[m._izLastVariantCookieName],
            t = window.ShopifyAnalytics.meta.selectedVariantId;
        return 1 != m.sentShopifyProduct && (void 0 === t ? (m.sentShopifyProduct = 1, !0) : t != e && (window._izooto[m._izLastVariantCookieName] = t, a.CookieStorage.setCookie(m._izLastVariantCookieName, t), !0))
    }, m.listenToProductVariant = function(e) {
        m.checkIfVariantChanged() && e(), setTimeout(function() {
            m.listenToProductVariant(e)
        }, m._izProductVariantModifiedCheckInterval)
    }, m.getShopifyModule = function() {
        try {
            if (n = window.ShopifyAnalytics.meta.page.pageType) return n
        } catch (e) {
            u.Config.debug && console.warn("ShopifyAnalytics not available, parsing URL")
        }
        var e = location.hostname,
            t = location.pathname.split("/"),
            n = t[1],
            t = t[2];
        if ("" === n) return m._izShopifyModules.storeSections.home;
        if (n === m._izShopifyModules.storeRoots.cart) return m._izShopifyModules.storeRoots.cart;
        if (n === m._izShopifyModules.storeRoots.account && t === m._izShopifyModules.storeRoots.orders) return m._izShopifyModules.storeRoots.orders;
        if ("account" === n && !n) return m._izShopifyModules.storeSections.orders;
        if ("checkout.shopify.com" === e || "checkouts" === t) return m._izShopifyModules.storeSections.checkout;
        if (void 0 !== window.__st && window.__st.s) {
            t = window.__st.partZero.split("-")[0];
            return "collections" === t ? m._izShopifyModules.storeSections.collection : "products" === t ? m._izShopifyModules.storeSections.product : void 0
        }
    }, m.sendShopifyProductViewEvent = function() {
        var e = location.pathname,
            s = window.ShopifyAnalytics.meta.selectedVariantId,
            e = e.split("/"),
            c = e[e.length - 1],
            e = m._izAjaxApi.products + c;
        f.HttpRequest.get(e += "?izreq=product", void 0, {
            Accept: "application/json"
        }).then(function(e) {
            try {
                var t = JSON.parse(e)
            } catch (e) {
                d.Helper.displayLog("Could not fetch data from product API")
            }
            if ("object" == typeof t && "" != p.StorageManager.getStorage(y.KeyMapper.PUSH_TOKEN)) {
                var n, o = t.product,
                    i = o.variants,
                    e = p.StorageManager.getStorage(y.KeyMapper.PUSH_TOKEN),
                    t = d.Helper.getEndpoint("shopifyAPI") + "?p=p",
                    r = {
                        pid: u.Config.client,
                        btype: d.Helper.getBrowserType(),
                        pte: u.Config.notification.subscriptionType,
                        custom_topic: m._izShopifyTopics.productView,
                        product_id: o.id.toString(),
                        product_title: encodeURIComponent(o.title),
                        product_handle: encodeURIComponent(c),
                        product_page: encodeURIComponent(window.location.href),
                        product_type: o.product_type
                    },
                    r = l(l({}, r), g.NotificationHelper.getSubscriptionParameters(e));
                for (n in d.Helper.displayLog(o), null != o.image && null != o.image.src && (r.product_image = o.image.src), i) {
                    var a = i[n];
                    if (a.id == s) {
                        r.product_price = a.price;
                        break
                    }
                }
                f.HttpRequest.postForm(t, r).catch(function(e) {})
            }
        })
    }, m.sendShopifyCollectionViewEvent = function() {
        var i, e = m._izShopifyModules.storeSections.collection + "s",
            t = location.pathname.split("/"),
            e = t.indexOf(e); - 1 == e ? d.Helper.displayLog("Unable to identify collection") : (i = t[e + 1], m._izEventNames.collectionAll != i ? (e = m._izAjaxApi.collections + i, f.HttpRequest.get(e += "?izreq=collections", void 0, {
            Accept: "application/json"
        }).then(function(e) {
            var t, n, o;
            try {
                o = JSON.parse(e)
            } catch (e) {
                d.Helper.displayLog("Could not fetch data from collection API")
            }
            "object" == typeof o && "" != p.StorageManager.getStorage(y.KeyMapper.PUSH_TOKEN) && (t = o.collection, n = d.Helper.getEndpoint("shopifyAPI") + "?p=p", e = p.StorageManager.getStorage(y.KeyMapper.PUSH_TOKEN), o = {
                pid: u.Config.client,
                btype: d.Helper.getBrowserType(),
                pte: u.Config.notification.subscriptionType,
                custom_topic: m._izShopifyTopics.collectionView,
                collection_id: t.id.toString(),
                collection_handle: encodeURIComponent(i),
                collection_title: encodeURIComponent(t.title),
                collection_page: encodeURIComponent(window.location.href)
            }, o = l(l({}, o), g.NotificationHelper.getSubscriptionParameters(e)), null != t.image && null != t.image.src && (o["collection_image="] = t.image.src), f.HttpRequest.postForm(n, o).catch(function(e) {}))
        })) : d.Helper.displayLog("Ignoring collection view event for:" + m._izEventNames.collectionAll))
    }, m.checkAndSendShopifyEvents = function(e) {
        var t = m.getShopifyModule();
        switch (d.Helper.displayLog("Detected shopify module : ", t), t) {
            case m._izShopifyModules.storeSections.collection:
                m.sendShopifyCollectionViewEvent();
                break;
            case m._izShopifyModules.storeSections.product:
                null != e && e ? m.listenToProductVariant(m.sendShopifyProductViewEvent) : m.sendShopifyProductViewEvent()
        }
    }, m._izShopifyModules = {
        storeSections: {
            home: "home",
            collection: "collection",
            product: "product",
            cart: "cart",
            checkout: "checkout",
            order: "order",
            orders: "orders"
        },
        storeRoots: {
            cart: "cart",
            account: "account",
            orders: "orders"
        }
    }, m._izEventNames = {
        productView: "product_viewed",
        collectionView: "collection_viewed",
        collectionAll: "all"
    }, m._izAjaxApi = {
        products: "/products/",
        collections: "/collections/"
    }, m._izShopifyTopics = {
        productView: "product/view",
        collectionView: "collection/view"
    }, m._izLastVariantCookieName = "iz_last_sh_variant", m._izProductVariantModifiedCheckInterval = 5e3, m.sentShopifyProduct = 0, m);

    function m() {}
}, function(e, t, n) {
    "use strict";
    var o = this && this.__assign || function() {
        return (o = Object.assign || function(e) {
            for (var t, n = 1, o = arguments.length; n < o; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GDPR = void 0;
    var a = n(1),
        i = n(0),
        r = n(4),
        s = n(3),
        c = n(11),
        l = n(2);
    t.GDPR = (u.init = function() {
        try {
            null != a.Config.notification.gdprPrompt && self == top && (a.Config.notification.gdprPrompt.title = null != a.Config.notification.gdprPrompt.title && "" != a.Config.notification.gdprPrompt.title ? a.Config.notification.gdprPrompt.title : "In order to send relevant and personalized notifications to you, we would like to capture your location and website activity.", a.Config.notification.gdprPrompt.btn2Txt = null != a.Config.notification.gdprPrompt.btn2Txt && "" != a.Config.notification.gdprPrompt.btn2Txt ? a.Config.notification.gdprPrompt.btn2Txt : "Agree", a.Config.notification.gdprPrompt.btn1Txt = null != a.Config.notification.gdprPrompt.btn1Txt && "" != a.Config.notification.gdprPrompt.btn1Txt ? a.Config.notification.gdprPrompt.btn1Txt : "Not Now")
        } catch (e) {}
        var e = s.StorageManager.getConfigLocal(l.KeyMapper.GDPR_CONSENT);
        1 != e && 3 != e ? 2 != e ? 1 == a.Config.notification.gdprPrompt.status && u.getGdprLocation() : a.Config.notification.isGdprAllowed = 0 : a.Config.notification.isGdprAllowed = 1
    }, u.closeGdprDialog = function(e) {
        var t;
        try {
            null !== (t = document.getElementById("iz-gdpr-main-container")) && void 0 !== t && t.remove()
        } catch (e) {}
    }, u.gdprAllow = function() {
        u.closeGdprDialog(), s.StorageManager.setConfigLocal(l.KeyMapper.GDPR_CONSENT, 1), a.Config.notification.isGdprAllowed = 1, c.Queue.sync(), u.sendGdprStatus(1)
    }, u.sendGdprStatus = function(t) {
        try {
            var n = i.Helper.getEndpoint("gdprStatusUrl");
            i.Helper.getFlagBasedParameter({
                subscriptionMeta: !0,
                subcription: !0
            }).then(function(e) {
                e = o({
                    gs: t
                }, e);
                r.HttpRequest.postForm(n, e, !0).then(function() {}).catch(function(e) {})
            })
        } catch (e) {}
    }, u.getGdprLocation = function() {
        r.HttpRequest.get(i.Helper.getEndpoint("gdprLocationUrl")).then(function(e) {
            1 == (e = i.Helper.parseToJSON(e)).status ? u.loadGdprOptin() : s.StorageManager.setConfigLocal(l.KeyMapper.GDPR_CONSENT, 3)
        }).catch(function() {})
    }, u.loadGdprOptin = function() {
        var e;
        try {
            var t = (e = a.Config.notification.gdprPrompt).title,
                n = e.btn1Txt,
                o = e.btn2Txt,
                i = {
                    designType: a.Config.notification.gdprPrompt.type,
                    templateType: "gdpr",
                    title: t,
                    btn1Txt: n,
                    btn2Txt: o,
                    containerId: "iz-gdpr-main-container",
                    onSuccess: function() {
                        return window._izooto.gdprAllow()
                    },
                    onFailure: function() {
                        return window._izooto.gdprDisallow()
                    }
                },
                r = document.createElement("div");
            r.id = "iz-gdpr-main-container", document.body.appendChild(r), u.gdprCallback(i)
        } catch (e) {
            alert("error in loading gdpr")
        }
    }, u.gdprCallback = function(e) {
        try {
            "object" == typeof e && u.show(e)
        } catch (e) {}
    }, u.show = function(e) {
        i.Helper.addExternalJS("https://cdn.izooto.com/optin/js/optin.min.js").then(function() {
            var t = new window.izootoOptinComponent;
            t && t.init(e).then(function() {
                var e = document.getElementById("iz-gdpr-main-container");
                e && (a.Config.notification.gdprDialogDesign = e.innerHTML), t.show()
            }).catch(function() {
                alert("error in init component")
            })
        }).catch(function() {
            alert("Error in Loading GDPR Scipt")
        })
    }, u.gdprDisallow = function() {
        u.closeGdprDialog(), s.StorageManager.setConfigLocal(l.KeyMapper.GDPR_CONSENT, 2), u.sendGdprStatus(2)
    }, u);

    function u() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TabAbandonments = void 0;
    var i = n(5),
        a = n(0),
        r = n(1),
        s = n(3),
        c = n(2),
        n = (l.init = function() {
            l.timerInstance = 0, l.focused = !0, 1 == r.Config.tabAbandonment.status && (l.interval = setInterval(function() {
                document.hasFocus() ? l.focused || l.onFocus() : l.focused && l.onBlur()
            }, 1e3))
        }, l.run = function() {
            l.reset(), a.Helper.displayLog("Tab Abandonment : Initialized");
            var e = {
                url: window.location.href
            };
            s.StorageManager.setConfigLocal(c.KeyMapper.TAB_ABANDONMENT, JSON.stringify(e))
        }, l.onBlur = function() {
            l.focused = !1, l.run(), l.timerInstance = setInterval(function() {
                var t = s.StorageManager.getConfigLocal(c.KeyMapper.TAB_ABANDONMENT);
                r.Config.tabAbandonment.counter++;
                try {
                    t = JSON.parse(t)
                } catch (e) {
                    t = {}
                }
                a.Helper.displayLog("TabAbandonment counter : ", r.Config.tabAbandonment.counter), t.url != window.location.href ? l.reset() : r.Config.tabAbandonment.counter == r.Config.tabAbandonment.timeout && (l.pushNotification(), l.reset())
            }, 1e3), a.Helper.displayLog("Ta : blurred")
        }, l.onFocus = function() {
            l.focused = !0, l.reset(), a.Helper.displayLog("Ta : focused")
        }, l.reset = function() {
            a.Helper.displayLog("Tab Abandonment : timer reset"), r.Config.tabAbandonment.counter = 0, clearInterval(l.timerInstance)
        }, l.pushNotification = function() {
            var e, t, n = r.Config.tabAbandonment.pushTimeout,
                o = l.getPayload();
            "" != o.id && "" != o.rid && (e = s.StorageManager.getConfigLocal(c.KeyMapper.TAB_ABANDONMENT_PUSH, c.KeyMapper.SYNC), t = a.Helper.getTimeDiff(e, !0), "" != e && t < n ? l.reset() : (i.NotificationHelper.sendLocalNotification(o), s.StorageManager.updateLastSync(c.KeyMapper.TAB_ABANDONMENT_PUSH), i.NotificationHelper.syncNotificationView(o), i.NotificationHelper.syncNotificationSent(o)))
        }, l.getPayload = function() {
            var e = {};
            e.key = r.Config.client, e.title = "You were reading <~[@article_title]~>", e.message = "Pick up where you left off", e.icon = "https://cdnimg.izooto.com/icons/4/JD-12-128.png", e.banner = "<~[@featured_image]~>", e.link = "<~[@last_visited_url]~>", e.tag = "tabAbandonment", e.reqInt = !0, e.id = "", e.rid = "", e.viewFlag = 1, e.clickFlag = 1, e.sysEvents = 0, e.domainNum = 0;
            var t = window.location.href;
            t.indexOf("utm_campaign=") < 0 && (e.link += t.includes("?") ? "&" : "?", e.link += "utm_source=izooto&utm_medium=push_notifications&utm_campaign=recover_abandoned_tab&utm_term=notification1");
            var n, o = r.Config.tabAbandonment.data;
            for (n in e) o.hasOwnProperty(n) || (o[n] = e[n]);
            return o = l.getFilterData(o)
        }, l.urlUtmHandler = function(e, t) {
            var n, o, i = t.split("&"),
                r = {};
            for (n in i) {
                var a = i[n].split("=");
                r[a[0]] = a[1]
            }
            for (o in e = new URL(e), r) e.searchParams.set(o, r[o]);
            return e.href
        }, l.getFilterData = function(e) {
            var t, n, o, i = {},
                r = window.location.href;
            for (t in i.article_title = "" != a.Helper.getMetaValue("og:title") ? a.Helper.getMetaValue("og:title") : a.Helper.getMetaValue("title"), i.featured_image = a.Helper.getMetaValue("og:image"), i.last_visited_url = r, e) "string" == typeof e[t] && 0 <= e[t].indexOf("<~[@") && (n = e[t].indexOf("<~[@"), o = e[t].indexOf("]~>"), "last_visited_url" == (n = e[t].substring(n + 4, o)) && 0 < e[t].indexOf("utm_campaign") ? (o = e[t].split("?"), e[t] = o[0], o = o[1], e[t] = e[t].replace("<~[@" + n + "]~>", i[n]), e[t] = l.urlUtmHandler(r, o)) : e[t] = e[t].replace("<~[@" + n + "]~>", i[n]));
            return e
        }, l);

    function l() {}
    t.TabAbandonments = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AdNetwork = void 0;
    var u = n(3),
        d = n(1),
        p = n(0);
    t.AdNetwork = (f.getAdNetworkParam = function(e) {
        void 0 === e && (e = !1), f.forceSyncAdNetwork = 0;
        var t = "",
            n = u.StorageManager.getStorage("_ga"),
            o = u.StorageManager.getStorage("taboola global:user-id"),
            i = u.StorageManager.getStorage("OB-USER-TOKEN"),
            r = u.StorageManager.getStorage("mgMuidn"),
            a = u.StorageManager.getConfigLocal("gac"),
            s = u.StorageManager.getConfigLocal("tbc"),
            c = u.StorageManager.getConfigLocal("obc"),
            l = u.StorageManager.getConfigLocal("mgc");
        return o && (f.adNetworkObj.tbc = o), i && (f.adNetworkObj.obc = i), r && (f.adNetworkObj.mgc = r), n && 1 == d.Config.ga.syncCid && (f.adNetworkObj.gac = n), (f.adNetworkObj.gac && a != n || o && s != o || i && c != i || r && l != r) && (f.forceSyncAdNetwork = 1), e ? f.adNetworkObj : (0 < Object.keys(f.adNetworkObj).length && (t += "&" + p.Helper.objToParam(f.adNetworkObj)), t)
    }, f.forceSyncAdNetwork = 0, f.adNetworkObj = {}, f);

    function f() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.VideoDropOff = void 0;
    var o = n(1),
        i = n(0);
    t.VideoDropOff = (r.init = function() {
        o.Config.videoDropoff.status && r.isCurrentUrlMatchingWith(o.Config.videoDropoff.allowedUrls) && r.detectPlayer()
    }, r.syncTrigger = function(e, t) {
        window._izq.push(["trigger", e, t])
    }, r.sendToApi = function(e) {
        var t = 0,
            n = r.playerState;
        if (0 == n.length) n.push(e);
        else {
            for (var o = 0; o < n.length; o++)
                if (n[o].playerId == e.playerId) {
                    if (n[o].status == e.status) return;
                    n[o] = e, t = 1;
                    break
                }
            t || n.push(e)
        }
        var i = {
            player_id: e.playerId,
            title: e.title,
            url: e.url,
            player: e.player_type,
            duration: e.duration.toString()
        };
        e.hasOwnProperty("thumbnail") && (i.thumbnail = e.thumbnail);
        try {
            "started" == e.status ? r.syncTrigger("video_started", i) : "ended" == e.status && r.syncTrigger("video_completed", {
                playerid: e.playerId
            })
        } catch (e) {}
    }, r.html5Payload = function(e, t) {
        var n = [];
        n.status = e = void 0 === e ? "started" : e, n.playerId = t.id, n.title = document.title, n.url = location.href, n.player_type = "html5", n.duration = t.duration, r.sendToApi(n)
    }, r.html5Handler = function() {
        var e = document.querySelectorAll("video");
        e && e.forEach(function(e) {
            var t;
            e.id || (t = r.generateRandomString("iz-video-", 7), e.setAttribute("id", t)), e.addEventListener("playing", function() {
                r.html5Payload("started", e)
            }), e.addEventListener("ended", function() {
                r.html5Payload("ended", e)
            })
        })
    }, r.ytPayload = function(e, t) {
        var n = [];
        n.status = e = void 0 === e ? "started" : e, n.playerId = t.getIframe().id, n.title = t.playerInfo.videoData.title || document.title;
        e = "https://img.youtube.com/vi/" + t.playerInfo.videoData.video_id + "/0.jpg";
        n.thumbnail = e, n.url = location.href, n.player_type = "youtube", n.duration = t.playerInfo.duration, r.sendToApi(n)
    }, r.isValidYtUrl = function(e) {
        return new RegExp("^https://(?:www.)?youtube.com/embed/[A-z0-9]+").test(e)
    }, r.initYtPlayer = function(e) {
        if (window.YT, 0, window.YT.get(e)) {
            var t = window.YT.get(e);
            return t.addEventListener("onStateChange", r.onYtPlayerStateChange), t
        }
        return new window.YT.Player(e, {
            events: {
                onStateChange: r.onYtPlayerStateChange
            }
        })
    }, r.onYtPlayerStateChange = function(e) {
        switch (e.data) {
            case window.YT.PlayerState.PLAYING:
                var t = "started";
                r.ytPayload(t, e.target);
                break;
            case window.YT.PlayerState.ENDED:
                t = "ended";
                r.ytPayload(t, e.target)
        }
    }, r.fixPlayerReference = function(o) {
        setInterval(function() {
            for (var e = 0; e < o.length; e++) {
                var t = o[e].getIframe(),
                    n = r.getClosureKeyName(o[e]);
                o[e][n] !== window.YT.get(t.id)[n] && (o[e] = window.YT.get(t.id), o[e].addEventListener("onStateChange", r.onYtPlayerStateChange))
            }
        }, 1e3)
    }, r.fixYtEnableJsApi = function(e) {
        var t = new URL(e.src);
        "" == i.Helper.getParamFromUrl(e.src, "enablejsapi") ? (t.searchParams.set("enablejsapi", "1"), e.setAttribute("src", t)) : null == i.Helper.getParamFromUrl(e.src, "enablejsapi") && (t.searchParams.append("enablejsapi", "1"), e.setAttribute("src", t))
    }, r.fixYtOrigin = function(e) {
        var t = new URL(e.src);
        "" == i.Helper.getParamFromUrl(e.src, "origin") ? (t.searchParams.set("origin", window.location.origin), e.setAttribute("src", t)) : null == i.Helper.getParamFromUrl(e.src, "origin") && (t.searchParams.append("origin", window.location.origin), e.setAttribute("src", t))
    }, r.isJsApiEnabled = function(e) {
        return null != i.Helper.getParamFromUrl(e, "enablejsapi")
    }, r.addYTApiScirptPromise = function() {
        return new Promise(function(e, t) {
            var n, o, i = setInterval(function() {
                "object" == typeof window.YT && "function" == typeof window.YT.get && (clearInterval(i), e(!0))
            }, 1e3);
            void 0 !== window.YT ? e(!0) : ((n = document.createElement("script")).src = "//www.youtube.com/player_api", (o = document.getElementsByTagName("script")[0]).parentNode.insertBefore(n, o))
        }).catch(function(e) {})
    }, r.ytHandler = function() {
        setInterval(function() {
            for (var e, t, o = document.querySelectorAll("iframe[src*='https://www.youtube.com/embed/']"), n = 0; n < o.length; n++) r.isValidYtUrl(o[n].src) && (o[n].hasAttribute("izplayer") || (o[n].setAttribute("izplayer", "1"), o[n].id || (e = r.generateRandomString("iz-video-", 7), o[n].setAttribute("id", e)), r.fixYtOrigin(o[n]), r.isJsApiEnabled(o[n].src) ? function(t) {
                var n = setInterval(function() {
                    try {
                        var e = window.YT.get(o[t].id);
                        e && (clearInterval(n), e.addEventListener("onStateChange", r.onYtPlayerStateChange), r.ytPlayerReference.push(e))
                    } catch (e) {}
                }, 1e3)
            }(n) : (t = o[n], r.fixYtEnableJsApi(t), r.addYTApiScirptPromise().then(function() {
                var e = r.initYtPlayer(t.id);
                r.ytPlayerReference.push(e)
            }))));
            r.fixPlayerReference(r.ytPlayerReference)
        }, 1e3)
    }, r.detectPlayer = function() {
        "complete" == document.readyState ? r.html5Handler() : window.addEventListener("load", function() {
            r.html5Handler()
        }), r.ytHandler()
    }, r.isCurrentUrlMatchingWith = function(e) {
        if (0 == e.length) return 1;
        for (var t = 0; t < e.length; t++)
            if (-1 != document.location.href.search(e[t])) return e[t], 1;
        return 0
    }, r.ytPlayerReference = [], r.playerState = [], r.generateRandomString = function(e, t) {
        return void 0 === t && (t = 7), (e = void 0 === e ? "" : e) + Math.random().toString(36).substring(t)
    }, r.getClosureKeyName = function(e) {
        try {
            for (var t in e)
                if (-1 != t.search("closure_")) return t.toString()
        } catch (e) {
            throw new Error("Please update keyName of player")
        }
    }, r);

    function r() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CRPSPlaybook = void 0;
    var o = n(1),
        i = n(0),
        r = n(18),
        a = n(3),
        s = n(2),
        c = n(5);
    t.CRPSPlaybook = (l.init = function() {
        o.Config.CRPSPlaybook.isPaidSubscriber, o.Config.CRPSPlaybook.status && l.isSyncAllowed() && l.sendNotification()
    }, l.isSyncAllowed = function() {
        if (3 < r.Session.getSessionCount() && !o.Config.notification.windowType && !o.Config.CRPSPlaybook.isPaidSubscriber) {
            var e = a.StorageManager.getConfigLocal(s.KeyMapper.CRPS_PLAYBOOK, s.KeyMapper.SYNC);
            return e && i.Helper.getDateDiffrenceFromPresent(e) <= l.reSendNotificationDays ? (i.Helper.displayLog("Abort! Reader to paid subscriber last sync not expired!"), !1) : !0
        }
        return !1
    }, l.sendNotification = function() {
        var e = o.Config.CRPSPlaybook.data;
        e.viewFlag = 1, e.clickFlag = 1, e.sysEvents = 0, e.domainNum = 0, e.title && e.message && e.link && e.rid && e.key && e.id ? c.NotificationHelper.sendLocalNotification(e).then(function() {
            a.StorageManager.updateLastSync(s.KeyMapper.CRPS_PLAYBOOK), c.NotificationHelper.syncNotificationView(e), c.NotificationHelper.syncNotificationSent(e)
        }) : i.Helper.displayLog("CRPS Playbook : ".concat(s.KeyMapper.INVALID_PAYLOAD))
    }, l.reSendNotificationDays = 30, l);

    function l() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RecommendArticle = void 0;
    var o = n(3),
        i = n(2),
        r = n(1),
        a = n(0);
    t.RecommendArticle = (s.init = function() {
        r.Config.recommendArticle.status && "/" != s.currentArticlePath && s.isSyncAllowed() && s.sync()
    }, s.isSyncAllowed = function() {
        var e = new Date,
            t = o.StorageManager.getConfigLocal(i.KeyMapper.LAST_SYNC_OF_RECOMMEND_ARTICLE, i.KeyMapper.SYNC);
        if (!t) return !0;
        var n = new Date(t);
        if (e.getDate() != n.getDate()) return o.StorageManager.removeConfigLocal(i.KeyMapper.RECOMMEND_ARTICLE_SYNCED_PATH, i.KeyMapper.RECOMMEND_ARTICLE), !0;
        if (e.getTime() < e.setTime(t + 1e3 * s.recommendArticleExpire)) return !1;
        t = o.StorageManager.getConfigLocal(i.KeyMapper.RECOMMEND_ARTICLE_SYNCED_PATH, i.KeyMapper.RECOMMEND_ARTICLE);
        return (t = a.Helper.parseToJSON(t) || []).length < s.dailyArticleSyncLimit && -1 == t.indexOf(s.currentArticlePath)
    }, s.sync = function() {
        var n = o.StorageManager.getConfigLocal(i.KeyMapper.RECOMMEND_ARTICLE_SYNCED_PATH, i.KeyMapper.RECOMMEND_ARTICLE);
        (n = a.Helper.parseToJSON(n) || []).push(s.currentArticlePath);
        var e = [window.location.protocol, "//", window.location.host, window.location.pathname].join("");
        window._izq.push(["trigger", s.triggerName, {
            article_url: e
        }, function(e, t) {
            200 == t && (o.StorageManager.setConfigLocal(i.KeyMapper.RECOMMEND_ARTICLE_SYNCED_PATH, JSON.stringify(n), i.KeyMapper.RECOMMEND_ARTICLE), o.StorageManager.updateLastSync(i.KeyMapper.LAST_SYNC_OF_RECOMMEND_ARTICLE))
        }])
    }, s.currentArticlePath = window.document.location.pathname, s.dailyArticleSyncLimit = 2, s.triggerName = "_article_read", s.recommendArticleExpire = 7200, s);

    function s() {}
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AutoSegment = void 0;
    var o = n(1),
        i = n(0),
        n = (r.init = function() {
            1 == o.Config.autoSegmentStatus && r.addCustomModuleConfig()
        }, r.addCustomModuleConfig = function() {
            var e = o.Config.hashFileName;
            e ? (e = "https://cdn.izooto.com/scripts/custom/".concat(e, ".js"), i.Helper.addExternalJS(e, "izCustomModule", !0).then(r.customModuleHandler).catch(function(e) {
                i.Helper.displayLog("Failed to add custom module script")
            })) : i.Helper.displayLog("".concat(o.Config.brandingPartner, " hash file name not found!"))
        }, r.customModuleHandler = function() {
            try {
                var e = window._izootoCustomeModuleConfig || void 0;
                if (e) {
                    if (e.hasOwnProperty("autoSegmentMethod") && 1 == o.Config.autoSegmentStatus) try {
                        window._izootoCustomeModuleConfig.autoSegmentMethod = i.Helper.getParsedMethod(e.autoSegmentMethod), r.autoSegmentHandler(e.autoSegmentMethod)
                    } catch (e) {}
                } else i.Helper.displayLog("No any custom module found!")
            } catch (e) {}
        }, r.autoSegmentHandler = function(e) {
            var t, n;
            "function" == typeof e && (t = [], "string" == typeof(e = e()) && "" != e ? t.push(e) : t = e, Array.isArray(t) && t.length ? (n = {}, t.forEach(function(e) {
                n[e] = !0
            }), window._izq.push(["userProfile", {
                add: n
            }])) : i.Helper.displayLog("No segment found to sync!"))
        }, r);

    function r() {}
    t.AutoSegment = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.LocalStorage = void 0;
    var o = (i.isLocalStorageSupport = function() {
        return "localStorage" in window && null !== window.localStorage
    }, i.setLocalStorage = function(e, t) {
        localStorage.setItem(e, t)
    }, i.getLocalStorage = function(e) {
        return localStorage.getItem(e)
    }, i.removeLocalStorage = function(e) {
        e && localStorage.removeItem(e)
    }, i);

    function i() {}
    t.LocalStorage = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NHCallout = void 0;
    var c = n(1),
        s = n(6),
        l = n(2),
        o = n(3),
        u = n(9),
        i = n(18),
        r = n(9),
        d = n(0),
        p = n(9),
        a = n(7),
        f = n(10);
    t.NHCallout = (g.init = function() {
        g.isCalloutShown || g.callOutHandler()
    }, g.callOutHandler = function() {
        g.isCalloutShown = !0;
        var e = c.Config.newsHub.callOut && !u.NewsHub.isCrios,
            t = o.StorageManager.getConfigLocal(l.KeyMapper.CALLOUT_SHOWN);
        i.Session.isNew || !1 === t ? (o.StorageManager.removeConfigLocal(l.KeyMapper.CALLOUT_SHOWN), u.NewsHub.loadLatestData().then(function() {
            e ? (g.triggerCalloutAnimation(), g.bellWigglehandler()) : (u.NewsHub.showNewIndicator(), s.ChannelEventHandler.event("newsHub", l.KeyMapper.NEWSHUB_ANIMATIONEND))
        }).catch(console.log)) : (u.NewsHub.showNewIndicator(), 2 == c.Config.newsHub.designType && (document.querySelector("#iz-news-hub-sticky-sidebar").style.visibility = "visible"), s.ChannelEventHandler.event("newsHub", l.KeyMapper.NEWSHUB_ANIMATIONEND))
    }, g.triggerCalloutAnimation = function() {
        1 == c.Config.newsHub.designType ? (u.NewsHub.bellAnimationHandler(), u.NewsHub.rippleAnimation.show()) : 2 == c.Config.newsHub.designType && u.NewsHub.stickyAnimationHandler()
    }, g.bellWigglehandler = function() {
        try {
            var e, t, n;
            1 != c.Config.newsHub.designType || 1 != c.Config.newsHub.iconType || i.Session.isNew || (e = document.querySelector(r.ELM_SELECTOR.iconContainer), t = document.querySelector("#iz-news-hub-bell-group"), n = document.querySelector("#iz-news-hub-bell-clapper"), e.addEventListener("animationend", function() {
                setTimeout(function() {
                    u.NewsHub.startWiggleAnimation(), t.addEventListener("animationend", function() {
                        t.classList.remove("iz-news-hub-bell-group"), n.classList.remove("iz-news-hub-bell-clapper")
                    })
                }, 1500)
            }, {
                once: !0
            }))
        } catch (e) {
            d.Helper.displayLog("Error bell wiggling on page refresh:", e)
        }
    }, g.calloutCloseHandler = function() {
        setTimeout(function() {
            var e = setInterval(function() {
                g.CalloutHover || (clearInterval(e), 1 == c.Config.newsHub.designType ? g.hideCallout() : g.hideStickyCallout())
            }, 1e3)
        }, 1e3 * c.Config.newsHub.callOutTimeout)
    }, g.hideCallout = function(e) {
        try {
            var t = document.querySelector(r.ELM_SELECTOR.notificationCallout);
            document.querySelector(r.ELM_SELECTOR.triggerFloating).removeEventListener("click", g.hideCallout);
            var n = "iz-news-hub-slideInLeft",
                o = "iz-news-hub-slideOutLeft";
            c.Config.newsHub.placement[1] && (n = "iz-news-hub-slideInRight", o = "iz-news-hub-slideOutRight"), t.classList.replace(n, o), u.NewsHub.crossIcon().hide(), t.addEventListener("animationend", function() {
                t.style.display = "none", s.ChannelEventHandler.event("newsHub", l.KeyMapper.NEWSHUB_ANIMATIONEND), u.NewsHub.rippleAnimation.show()
            }, {
                once: !0
            }), setTimeout(function() {
                u.NewsHub.widgetClicked || u.NewsHub.startWiggleAnimation()
            }, 3e3), g.isCallOutClose = !0, null != e && e.stopPropagation()
        } catch (e) {
            d.Helper.displayLog("Callout hide error", e)
        }
    }, g.hideStickyCallout = function(e) {
        try {
            var t = document.querySelector(".".concat(p.NH_PREFIX, "stickybar-callout")),
                n = document.querySelector("#".concat(p.NH_PREFIX, "sticky-sidebar")),
                o = c.Config.newsHub.placement[1] ? "iz-news-hub-stickybar-slideIn-right" : "iz-news-hub-stickybar-slideIn-left",
                i = c.Config.newsHub.placement[1] ? "iz-news-hub-stickybar-slideOut-right" : "iz-news-hub-stickybar-slideOut-left",
                r = "iz-news-hub-stickybarCallout-slideIn-left",
                a = "iz-news-hub-stickybarCallout-slideOut-left";
            c.Config.newsHub.placement[1] && (r = "iz-news-hub-stickybarCallout-slideIn-right", a = "iz-news-hub-stickybarCallout-slideOut-right"), t.classList.replace(r, a), t.addEventListener("animationend", function() {
                t.style.display = "none", s.ChannelEventHandler.event("newsHub", l.KeyMapper.NEWSHUB_ANIMATIONEND), n.classList.replace(i, o)
            }), g.isCallOutClose = !0, null != e && e.stopPropagation()
        } catch (e) {
            d.Helper.displayLog("Callout hide error", e)
        }
    }, g.showCallout = function() {
        try {
            g.isCallOutStart = !0;
            var e = 1 == c.Config.newsHub.designType ? document.querySelector("#".concat(p.NH_PREFIX, "main-container #").concat(p.NH_PREFIX, "icon-discoverability")) : document.querySelector(".".concat(p.NH_PREFIX, "stickybar-callout"));
            1 == c.Config.newsHub.designType && 3 == c.Config.global.deviceType && (document.querySelector("#".concat(p.NH_PREFIX, "icon-discoverability")).style.width = "300"), g.calloutHtml = e.cloneNode(!0), e.style.visibility = "hidden";
            var t = 0;
            1 == a.GAM.isCallOutAds() ? t = 1 : f.ThirdPartyAds.isPIDExcluded() && (t = 2), t ? u.NewsHub.adsHandler(t, !0) : g.getLatestData(), g.callOutAnimationHandler(e), e.style.display = "flex"
        } catch (e) {
            d.Helper.displayLog("Show callout error", e)
        }
    }, g.postCallOutSuccessHandler = function(e) {
        g.callOutAdSuccess(), e.style.visibility = "visible", 1 == c.Config.newsHub.designType ? u.NewsHub.crossIcon().show() : g.applyConfigStyleOnStickyCallOut()
    }, g.callOutAnimationHandler = function(e) {
        2 == c.Config.newsHub.designType ? e.classList.add(c.Config.newsHub.placement[1] ? "iz-news-hub-stickybarCallout-slideIn-right" : "iz-news-hub-stickybarCallout-slideIn-left") : (u.NewsHub.rippleAnimation.hide(), e.classList.add(c.Config.newsHub.placement[1] ? "iz-news-hub-slideInRight" : "iz-news-hub-slideInLeft"))
    }, g.applyConfigStyleOnStickyCallOut = function() {
        2 == c.Config.newsHub.designType && (document.querySelector(".iz-news-hub-stickybar-callout-close").style.backgroundColor = c.Config.newsHub.mainColor)
    }, g.getLatestData = function() {
        try {
            if (0 == Object.keys(u.NewsHub.latestNotificationData).length) return;
            var e = 1 == c.Config.newsHub.designType ? document.querySelector("#".concat(p.NH_PREFIX, "main-container #").concat(p.NH_PREFIX, "icon-discoverability")) : document.querySelector(".".concat(p.NH_PREFIX, "stickybar-callout"));
            1 == c.Config.newsHub.designType && u.NewsHub.crossIcon().show();
            var t = u.NewsHub.payloadParser(u.NewsHub.latestNotificationData);
            e.innerHTML = g.calloutHtml.innerHTML, g.setCallOutNotification(t, e), g.calloutEventHandler(t), e.style.visibility = "visible"
        } catch (e) {}
    }, g.setCallOutNotification = function(e, t) {
        try {
            g.applyConfigStyleOnStickyCallOut();
            var n, o, i, r = d.Helper.getDomElement(".".concat(p.NH_PREFIX, "icon-discoverability-text"), t),
                a = d.Helper.getDomElement(".".concat(p.NH_PREFIX, "icon-discoverability-img-wrapper img"), t),
                s = d.Helper.getDomElement(".".concat(p.NH_PREFIX, "icon-discoverability-img-wrapper"), t);
            e.bannerImage ? (n = e.bannerImage, a.src = n, u.NewsHub.imagebgBlur(s, a), a.onerror = function(e) {
                u.NewsHub.removeImageWhiteSpace(t)
            }) : u.NewsHub.removeImageWhiteSpace(t), r.innerHTML = e.title, e.isAd && ((o = t.querySelector(".iz-news-hub-icon-discoverability-text")).innerHTML = 44 < e.title.length ? e.title.slice(0, 42) + "..." : e.title, o.style.display = "flex", o.style.flexDirection = "column", (i = document.createElement("div")).innerHTML = "Sponsored", i.style.fontSize = "10px", i.style.fontWeight = "100", i.style.color = "gray", o.appendChild(i)), c.Config.newsHub.placement[1] || "rtl" != document.dir || (r.style.direction = "ltr")
        } catch (e) {
            d.Helper.displayLog("Set callout notification error", e)
        }
    }, g.calloutEventHandler = function(t) {
        try {
            var e = 1 == c.Config.newsHub.designType ? document.querySelector("#".concat(p.NH_PREFIX, "main-container #").concat(p.NH_PREFIX, "icon-discoverability")) : document.querySelector("#".concat(p.NH_PREFIX, "icon-sticky-discoverability"));
            t && e.addEventListener("click", function(e) {
                t.url && window.open(t.url), d.Helper.syncClick(t, "newshub"), g.CalloutHover = !1, g.hideCallout(), e.stopPropagation()
            }, !1), c.Config.global.deviceType == l.KeyMapper.DEVICE_TYPE_DESKTOP && (e.addEventListener("mouseenter", function(e) {
                g.CalloutHover = !0
            }), e.addEventListener("mouseleave", function(e) {
                g.CalloutHover = !1
            })), (1 == c.Config.newsHub.designType ? document.querySelector(r.ELM_SELECTOR.triggerFloating) : document.querySelector(".iz-news-hub-stickybar-callout-close")).addEventListener("click", function() {
                1 == c.Config.newsHub.designType ? g.hideCallout() : g.hideStickyCallout()
            })
        } catch (e) {
            d.Helper.displayLog("callout event handling error", e)
        }
    }, g.callOutAdSuccess = function() {
        var e = document.querySelector("#iz-nhdis-ads"),
            t = (c.Config.newsHub.placement[1], "margin-inline-start: -15px;");
        2 == c.Config.newsHub.designType && (t = c.Config.newsHub.placement[1] ? "margin-inline-start: 0px;" : "margin-inline-start: -9px;"), e.setAttribute("style", "transform: scale(0.91);".concat(t)), g.calloutEventHandler(!1)
    }, g.getCalloutAdConfig = function() {
        return new Promise(function(e, t) {
            try {
                var n = 1 == c.Config.newsHub.designType ? "#iz-news-hub-icon-discoverability" : "#iz-news-hub-icon-sticky-discoverability";
                e([{
                    adContainerId: n,
                    adId: "iz-nhdis-ads",
                    adUnit: a.GAM.callOutAds.hasOwnProperty(c.Config.client) ? a.GAM.callOutAds[c.Config.client] : c.Config.newsHub.callOutAdUnit,
                    adFormat: 1 == a.GAM.isCallOutAds() ? "article" : "banner",
                    adSize: {
                        GAM: [
                            [320, 50]
                        ],
                        adgebra: "200x100",
                        tpAdSize: "300x50",
                        Adsence: [300, 50]
                    }
                }])
            } catch (e) {
                t(e)
            }
        })
    }, g.isCallOutClose = !0, g.CalloutHover = !1, g.isCalloutShown = !1, g.isCallOutStart = !1, g.calloutHtml = "", g);

    function g() {}
}, function(e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        a = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FullPageTemplate = void 0;
    var s, c = n(7),
        l = n(1),
        i = n(2),
        r = n(8),
        u = n(23),
        d = n(0),
        p = n(13);
    t.FullPageTemplate = ((s = f).setPostArticleOnForMobile = function() {
        for (var e = 0; e < 15; e++) f.setDynamicSingleRow(1)
    }, f.getSinglePost = function() {
        var e = p.Main.widgetData.currentPostIndex++,
            t = p.Main.widgetData.singlePostHTML.cloneNode(!0);
        return t.id = "iz-osn-exitintent-article-".concat(e), r.OSNHelper.setOsnDataIntoElement(t, p.Main.widgetData.template2PostData[e], e, l.Config.exitIntent.osnType), t
    }, f.setDynamicSingleRow = function(e) {
        void 0 === e && (e = 2);
        var t = (e = l.Config.global.deviceType == i.KeyMapper.DEVICE_TYPE_MOBILE ? 1 : e) <= 2 ? "md" : "sm",
            n = document.createElement("div");
        if (n.className = "iz_osn_".concat(t, "_row"), n.id = "iz_osn_row", !(p.Main.widgetData.template2PostData.slice(p.Main.widgetData.currentPostIndex, p.Main.widgetData.currentPostIndex + e).length < e)) {
            for (var o = 1; o <= e; o++) n.appendChild(f.getSinglePost());
            d.Helper.getDomElement(".iz_osn_container_1").appendChild(n)
        }
    }, f.setFullPageCarasual = function() {
        var e = d.Helper.getDomElement(".iz_osn_carousel_items_1"),
            t = d.Helper.getDomElement(".iz_osn_article_1");
        p.Main.widgetData.singlePostHTML = t, r.OSNHelper.defaultImage = t.querySelector("img").src, null != t && t.remove();
        t = p.Main.widgetData.carsualPost;
        f.clonedArticle(0, t, e)
    }, f.clonedArticle = function(e, t, n) {
        for (var o = e; o < t; o++) null != n && n.appendChild(f.getSinglePost())
    }, f.setPostArticleOnDesktop = function() {
        for (var e = [2, 3, 2, 2, 2], t = 0; t < e.length; t++) f.setDynamicSingleRow(e[t])
    }, f.setData = function() {
        var e = d.Helper.getDomElement(".iz_osn_article_1");
        p.Main.widgetData.singlePostHTML = e, l.Config.global.deviceType == i.KeyMapper.DEVICE_TYPE_MOBILE ? f.setPostArticleOnForMobile() : (f.setFullPageCarasual(), f.setCarasualClickHandler(), f.setPostArticleOnDesktop())
    }, f.getAdConfig = function() {
        return new Promise(function(i, r) {
            return o(void 0, void 0, void 0, function() {
                var t, n, o;
                return a(s, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), t = l.Config.exitIntent.ads ? "article" : "banner", n = {
                                adContainerId: ".iz_osn_ads_container_1",
                                adId: "iz-exitintent-feature-ads",
                                adUnit: l.Config.exitIntent.featureAdUnit,
                                osnType: l.Config.exitIntent.osnType,
                                templateType: 4,
                                adIndex: void 0,
                                adFormat: t
                            }, o = {}, [4, c.GAM.setAdSize(l.Config.exitIntent.osnType, l.Config.exitIntent.templateType, void 0)];
                        case 1:
                            return t = [(n.adSize = (o.Gam = e.sent(), o.adgebra = "300x250", o.tpAdSize = "300x250", o.Adsence = [300, 250], o), n)], i(t), [3, 3];
                        case 2:
                            return e.sent(), r(!1), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        })
    }, f.setCarasualClickHandler = function() {
        return u.Helper.carasualClickHandler()
    }, f);

    function f() {}
}, function(e, t, n) {
    "use strict";
    var s = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        c = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        },
        r = this && this.__spreadArray || function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var o, i = 0, r = t.length; i < r; i++) !o && i in t || ((o = o || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
            return e.concat(o || Array.prototype.slice.call(t))
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.NoContentTemplate = void 0;
    var l, u = n(7),
        d = n(1),
        p = n(2),
        o = n(8),
        f = n(0),
        a = n(13);
    t.NoContentTemplate = ((l = g).getAdConfig = function(e) {
        return new Promise(function(o, i) {
            return s(void 0, void 0, void 0, function() {
                var t, n;
                return c(l, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 4, , 5]), t = [], d.Config.global.deviceType != p.KeyMapper.DEVICE_TYPE_DESKTOP ? [3, 2] : [4, g.leftAdsHandler()];
                        case 1:
                            n = e.sent(), t.push(n), e.label = 2;
                        case 2:
                            return [4, g.rightAdsHandler()];
                        case 3:
                            return n = e.sent(), t = r(r([], t, !0), n, !0), d.Config.exitIntent.ads || (t = [t[1]]), o(t), [3, 5];
                        case 4:
                            return e.sent(), i(!1), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        })
    }, g.leftAdsHandler = function() {
        return new Promise(function(n, o) {
            return s(void 0, void 0, void 0, function() {
                var t;
                return c(l, function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), [4, g.loadAds()];
                        case 1:
                            return t = e.sent(), n(t), [3, 3];
                        case 2:
                            return e.sent(), o(!1), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })
        })
    }, g.rightAdsHandler = function() {
        return new Promise(function(i, e) {
            return s(void 0, void 0, void 0, function() {
                var t, n, o;
                return c(l, function(e) {
                    switch (e.label) {
                        case 0:
                            t = [], n = 0, e.label = 1;
                        case 1:
                            return n < a.Main.widgetData.smallPostAllowed ? (o = n, [4, g.loadAds(o)]) : [3, 4];
                        case 2:
                            o = e.sent(), t.push(o), e.label = 3;
                        case 3:
                            return n++, [3, 1];
                        case 4:
                            return i(t), [2]
                    }
                })
            })
        })
    }, g.loadAds = function(a) {
        return new Promise(function(r, e) {
            return s(void 0, void 0, void 0, function() {
                var t, n, o, i;
                return c(l, function(e) {
                    switch (e.label) {
                        case 0:
                            return t = null != a ? "#iz-osn-exitIntent-article-".concat(a) : ".iz_osn_article_1", o = null != a ? "iz-exitintent-ads-".concat(a) : "iz-exitintent-feature-ads", i = null != a ? d.Config.exitIntent.adUnit : d.Config.exitIntent.featureAdUnit, 0 == a && d.Config.global.deviceType == p.KeyMapper.DEVICE_TYPE_MOBILE && (o = "iz-exitintent-feature-ads", i = d.Config.exitIntent.featureAdUnit), d.Config.exitIntent.ads && u.GAM.createAdContainer(t, o), n = f.Helper.getDomElement(t), d.Config.exitIntent.ads && (n.style.paddingBottom = null != a ? "70px" : "256px"), o = {
                                adContainerId: t,
                                adId: o,
                                adUnit: i,
                                osnType: d.Config.exitIntent.osnType,
                                templateType: 3,
                                adIndex: a,
                                adFormat: "article"
                            }, i = {}, [4, u.GAM.setAdSize(d.Config.exitIntent.osnType, d.Config.exitIntent.templateType, a)];
                        case 1:
                            return o.adSize = (i.Gam = e.sent(), i.adgebra = null != a ? "200x100" : "300x250", i.tpAdSize = null != a ? "320x100" : "300x250", i.Adsence = null != a ? [300, 100] : [300, 250], i), r(o), [2]
                    }
                })
            })
        })
    }, g.removePaddingFromAdsContainer = function(e) {
        (null != e ? f.Helper.getDomElement("#iz-osn-exitIntent-article-".concat(e)) : f.Helper.getDomElement(".iz_osn_article_1")).style.removeProperty("padding-bottom")
    }, g.featureAdsFailure = function() {
        var e = a.Main.widgetData.leftPostHTML.cloneNode(!0),
            t = f.Helper.getDomElement(".iz_osn_article_1");
        t.innerHTML = e.innerHTML;
        e = a.Main.widgetData.largePostData;
        o.OSNHelper.setOsnDataIntoElement(t, e, 0, d.Config.exitIntent.osnType)
    }, g);

    function g() {}
}, function(e, t, n) {
    "use strict";
    var o = this && this.__awaiter || function(e, a, s, c) {
            return new(s = s || Promise)(function(n, t) {
                function o(e) {
                    try {
                        r(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
                        e(t)
                    })).then(o, i)
                }
                r((c = c.apply(e, a || [])).next())
            })
        },
        l = this && this.__generator || function(n, o) {
            var i, r, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                c = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                };
            return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                return this
            }), c;

            function e(t) {
                return function(e) {
                    return function(t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; c && t[c = 0] && (s = 0), s;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1])).done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return s.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = s.ops.pop(), s.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        s.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && s.label < a[1]) {
                                        s.label = a[1], a = t;
                                        break
                                    }
                                    if (a && s.label < a[2]) {
                                        s.label = a[2], s.ops.push(t);
                                        break
                                    }
                                    a[2] && s.ops.pop(), s.trys.pop();
                                    continue
                            }
                            t = o.call(n, s)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Main = void 0;
    var u = n(1),
        i = n(27),
        r = n(20),
        a = n(25),
        d = n(8),
        p = n(0),
        f = n(2),
        g = n(13),
        y = n(24),
        n = (s.init = function() {
            return o(this, void 0, void 0, function() {
                var t;
                return l(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return !u.Config.adBR.status || u.Config.global.isFrame ? [3, 2] : (t = r.Main, [4, i.AdBlockRecovery.detect()]);
                        case 1:
                            t.isAdBlockDetected = e.sent(), i.AdBlockRecovery.initPopup(r.Main.isAdBlockDetected), e.label = 2;
                        case 2:
                            return u.Config.adBR.status && r.Main.isAdBlockDetected ? [3, 6] : (d.OSNHelper.startTime = (new Date).getTime(), 1 != u.Config.exitIntent.status && 1 != u.Config.stickyBar.status ? [3, 5] : [4, s.initializeOnsite(u.Config.exitIntent)]);
                        case 3:
                            return e.sent(), [4, s.initializeOnsite(u.Config.stickyBar)];
                        case 4:
                            return e.sent(), [3, 6];
                        case 5:
                            p.Helper.displayLog("Onsite is Disabled for this site"), e.label = 6;
                        case 6:
                            return a.ArticleShare.init(), [2]
                    }
                })
            })
        }, s.initializeOnsite = function(s) {
            var c;
            return o(this, void 0, void 0, function() {
                var t, n, o, i, r, a;
                return l(this, function(e) {
                    switch (e.label) {
                        case 0:
                            if (t = s.osnType, 0 == s.status || u.Config.global.isFrame) return p.Helper.displayLog("Onsite is disabled for this site:"), [2];
                            if (!s.mobileAllowed && 1 != u.Config.global.deviceType || !s.desktopAllowed && 1 == u.Config.global.deviceType) return p.Helper.displayLog("Onsite ".concat(t, " is disabled for this device")), [2];
                            if (!s.autoPopup) return "Onsite template type ".concat(t, " is disable for autopopup false"), [2];
                            if (0 == s.rid || 0 == s.cid) return [2];
                            if (p.Helper.isRepeatDelayActive(1 == t ? f.KeyMapper.EXITINTENT_DELAY : f.KeyMapper.STICKYBAR_DELAY)) return [2];
                            if (this.isMetaLocationRestricted()) return [2];
                            n = s.feedHash || u.Config.hashFileName, e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), o = void 0, i = d.OSNHelper.multifeedData, r = n, [4, d.OSNHelper.getValidFeed(t)];
                        case 2:
                            return i[r] = e.sent(), o = d.OSNHelper.multifeedData[n], d.OSNHelper.viewPortDetector(), 1 == t ? (g.Main.widgetData.feedData = o, g.Main.widgetData.rfid = null !== (c = null === (c = o[0]) || void 0 === c ? void 0 : c.fi) && void 0 !== c ? c : null, g.Main.registerEvent()) : (y.StickyBar.feedData = o, y.StickyBar.rfid = null !== (c = null === (c = o[0]) || void 0 === c ? void 0 : c.fi) && void 0 !== c ? c : null, d.OSNHelper.registerSinglePageScroll()), [2, o];
                        case 3:
                            return a = e.sent(), d.OSNHelper.multifeedData[n] = !1, p.Helper.displayLog("initializeOnsite error", a), [2];
                        case 4:
                            return [2]
                    }
                })
            })
        }, s.isMetaLocationRestricted = function() {
            if (-1 < [51001].indexOf(u.Config.client)) {
                var e = p.Helper.getMetaValue("geo.region");
                if (e && "in" == e.toLowerCase()) return !0
            }
            return !1
        }, s);

    function s() {}
    t.Main = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Adsence = void 0;
    var d = n(0);
    t.Adsence = (s.loadAdsenceAds = function(n, o, i, r, a) {
        return new Promise(function(e, t) {
            s.addScriptSrc().then(function() {
                s.fillAds(n, o, i, r, a).then(e).catch(t)
            }).catch(function() {
                t(!1)
            })
        })
    }, s.adSenceScriptSrc = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1416813385720292", s.fillAds = function(a, s, c, l, u) {
        return new Promise(function(n, o) {
            var e = document.createElement("ins");
            e.className = "adsbygoogle", e.id = a, e.setAttribute("data-ad-client", u), e.setAttribute("data-ad-slot", l), e.style.display = "inline-block", e.style.width = "".concat(c[0], "px"), e.style.height = "".concat(c[1], "px");
            var t = document.createElement("script");
            t.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
            var i = d.Helper.getDomElement(s);
            i.innerHTML = "", i.appendChild(e), i.appendChild(t);
            var r = new MutationObserver(function(e) {
                var t = document.getElementById(a);
                t && ("filled" == (t = t.getAttribute("data-ad-status")) && (n(!0), r.disconnect()), "unfilled" == t && (o(!1), r.disconnect()))
            });
            r.observe(document, {
                subtree: !0,
                childList: !0
            }), setTimeout(function() {
                var e = document.getElementById(a);
                e && "filled" == e.getAttribute("data-ad-status") ? (n(!0), r.disconnect()) : o(!1)
            }, 3e3)
        })
    }, s.addScriptSrc = function() {
        return new Promise(function(e, t) {
            d.Helper.addExternalJS(s.adSenceScriptSrc).then(e).catch(t)
        })
    }, s);

    function s() {}
}]);