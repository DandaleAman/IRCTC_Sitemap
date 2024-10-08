'use strict';
var izVersion = "4.8",
    izooto = {
        client: "50238",
        gaId: "",
        vapidkey: "BOgcAqTXxChH8Z4nJ9FP4saJ_E1sDvOaLRnYSbQkhvnAzraAgIBBRF-vKNFjVOPNNIj0ryDUJW00Lvi99q3FjEU",
        brandingPartner: "MoMagic",
        url_redirect: "https://erd.izooto.com/erd?pid=",
        fetchData: "https://fetch.izooto.com/getCachedCampaignTemplate.php",
        campData: null,
        debug: !1,
        permissionStatus: self.Notification.permission,
        log: function(e, t) {
            !0 === izooto.debug && (t ? console.log(e, t) : console.log(e))
        },
        uid: "",
        payloadQueue: {},
        CKID: "",
        endpointObj: {
            subscription: ["enp", "enp"],
            unsubscription: ["usub", "nunsub"],
            view: ["imp", "wimp"],
            click: ["clk", "clk"],
            version: ["vr", "vr"],
            error: ["err", "err"],
            sysevtview: ["lim", "lim"],
            sysevtclick: ["lci", "lci"],
            mediationview: ["med", "medi"],
            mediationclick: ["med", "medc"],
            fetchFallback: ["flbk", "default.json"]
        }
    };
izooto.url_redirect += izooto.client + "&ver=" + "4.8", izooto.viewFlag = 0, izooto.clickFlag = 0, izooto.domainNum = 0, izooto.subDomain = "", izooto.domainPath = "", izooto.lastView = 0, izooto.lastClick = 0, izooto.lastViewFreq = 0, izooto.lastClickFreq = 0, izooto.viewSent = 0, izooto.clickSent = 0, izooto.domain = ".izooto.com", izooto.syncViewUrl = "view", izooto.syncClickUrl = "click", izooto.syncErrUrl = "error", izooto.syncUnsub = "unsubscription", izooto.syncVersion = "version", izooto.syncFetchFallback = "fetchFallback", izooto.syncMediatorView = "mediationview", izooto.syncMediatorClick = "mediationclick", izooto.syncAmpVersion = "subscription", izooto.savedSubscription = {}, izooto.subscribeOnActivate = 1, izooto.log("SW 4.8 : Debug mode on");
var izSwFetch = function(e, t, i) {
    return new Promise(function(a, n) {
        var o;
        return e && "string" == typeof e && e.startsWith("http") ? void(i != null && 0 < i && (o = setTimeout(function() {
            n({
                requestTimeout: !0
            })
        }, 1e3 * i)), fetch(e, t).then(function(e) {
            clearTimeout(o), a(e)
        }).catch(function(e) {
            clearTimeout(o), n(e)
        })) : void n("Invalid URL")
    })
};
izooto.syncMediatorUrls = function(e) {
    if (Array.isArray(e) && Array.isArray(e[0]))
        for (var t in e) {
            var i = {},
                a = e[t],
                n = a[0];
            i = a[1], izSwFetch(n, i)
        } else {
            var i = {},
                a = e,
                n = a[0];
            i = a[1], izSwFetch(n, i)
        }
}, izooto.jsonpResToTxt = function(e) {
    try {
        e = e.substring(6), e = e.substring(0, e.length - 1), e = e.replace(";", "")
    } catch (t) {}
    return e
};
var izMediationLogger = {
    sendErrorLog: function(e, t) {
        !0 == izooto.debug && console.log("Error: " + e + ": " + t.message + "\nStackTrace: [" + t.stack + "]\n")
    },
    sendSuccessResponse: function(e) {
        !0 == izooto.debug && console.log("Response: " + e + "\n")
    },
    consoleLog: function(e) {
        !0 == izooto.debug && console.log("Logger: " + e + "\n")
    }
};
izooto.swUpdate = function(e) {
    null != e && "" != e && e != izVersion && (self.registration.update(), izooto.log("updating sw to version:: " + e))
}, izooto.filterHeaderOptions = function(e) {
    var t = {};
    if (0 <= e.indexOf("~>")) {
        var i = e.split("~>");
        e = i[0];
        try {
            t = JSON.parse(i[1])
        } catch (t) {}
        try {
            if (t != null && "object" == typeof t) {
                var a = [e];
                a.push(t), e = a
            }
        } catch (t) {}
    }
    return e
}, izooto.macroHandler = function(e) {
    var t = ["UUID", "PID", "CKID"];
    for (var a in t) {
        var i = "{~" + t[a] + "~}",
            n = new RegExp(i, "g");
        0 < e.indexOf(i) && ("UUID" == t[a] && (e = e.replace(n, izooto.uid)), "PID" == t[a] && (e = e.replace(n, izooto.client)), "CKID" == t[a] && (e = e.replace(n, izooto.CKID)))
    }
    return e
}, izooto.checkHeaderOptions = function(e) {
    e = izooto.filterHeaderOptions(e);
    var t = [],
        a = {},
        n = {},
        o = ["method", "headers", "body", "mode", "credentials", "cache", "redirect", "referrer", "referrerPolicy", "integrity", "keepalive", "signal"];
    if ("object" != typeof e) t.push(e);
    else if (t.push(e[0]), null != e[1]) {
        var r = e[1];
        for (var d in r)
            if ("object" == typeof r[d]) {
                for (var i in r[d])
                    if ("pstf" == i) {
                        var s = r[d][i];
                        a.method = "POST", a.body = Object.keys(s).map(e => e + "=" + s[e]).join("&"), n["Content-Type"] = "application/x-www-form-urlencoded"
                    } else if ("pstj" == i) {
                    var s = r[d][i];
                    a.method = "POST";
                    try {
                        s = JSON.parse(s)
                    } catch (t) {}
                    a.body = JSON.stringify(s)
                } else 0 <= o.indexOf(i) ? a[i] = r[d][i] : n[i] = r[d][i];
            } else "ci" == r[d] ? a.credentials = "include" : "mnc" == r[d] && (a.mode = "no-cors")
    }
    return 0 < Object.keys(n).length && (a.headers = n), t.push(a), t
};

function IZMediationPayloadClass(e) {
    try {
        var t = JSON.parse(e);
        this.fetchType = t.g.tp, this.createdOn = t.g.ct, this.cid = t.g.id, this.pid = t.g.k, this.rid = t.g.r, this.message = t.g.m, this.icon = t.g.i, this.bannerImage = t.g.bi, this.buttonCount = t.g.b, this.button1Text = t.g.b1, this.button1Icon = t.g.ib1, this.button1Link = t.g.l1, this.button2Text = t.g.b2, this.button2Icon = t.g.ib2, this.button2Link = t.g.l2, this.badge = t.g.ba, this.passiveFlag = t.g.pf, this.requireInteraction = t.g.ri, this.tag = t.g.tg, this.ttl = t.g.tl, this.cfg = t.g.cfg, this.callbackFunction = null, this.fallbackSubDomain = t.g.fsd, this.fallbackDomain = t.g.fbd, this.fallbackPath = t.g.fbu, this.subDomain = t.g.sdm, this.domain = t.g.dm, this.domainPath = t.g.ph, this.swVersion = t.g.sw, this.evaluate = t.g.ev, this.maxNotification = t.g.mn, this.timeout = t.g.to, this.adNetworkArray = [];
        var i = this;
        t.an.forEach(function(e) {
            var t = {};
            t.fetchUrl = e.fu, t.fetchUrl = izooto.macroHandler(t.fetchUrl), t.fetchUrl != null && (t.fetchUrl = izooto.checkHeaderOptions(t.fetchUrl)), t.credentialsInclude = e.ci, t.title = e.t, t.landingUrl = e.ln, t.id = e.id, t.reportViewed = e.rv, t.reportClicked = e.rc, t.postBidAdFetchURL = e.pb, t.floorPrice = "string" == typeof e.fp ? e.fp.trim() : e.fp, t.reportViewed != null && (Array.isArray(t.reportViewed) ? t.reportViewed.forEach(function(e, i) {
                t.reportViewed[i] = izooto.checkHeaderOptions(t.reportViewed[i])
            }) : t.reportViewed = izooto.checkHeaderOptions(t.reportViewed)), t.reportClicked != null && (Array.isArray(t.reportClicked) ? t.reportClicked.forEach(function(e, i) {
                t.reportClicked[i] = izooto.checkHeaderOptions(t.reportClicked[i])
            }) : t.reportClicked = izooto.checkHeaderOptions(t.reportClicked)), t.postBidAdFetchURL != null && (t.postBidAdFetchURL = izooto.checkHeaderOptions(t.postBidAdFetchURL)), t.message = e.m, t.icon = e.i, t.bannerImage = e.bi, t.buttonCount = e.b, t.button1Text = e.b1, t.button1Icon = e.ib1, t.button1Link = e.l1, t.button2Text = e.b2, t.button2Icon = e.ib2, t.button2Link = e.l2, t.requireInteraction = e.ri, t.tag = e.tag, t.ttl = e.tl, t.cfg = e.cfg, t.passiveFlag = e.pf, t.badge = e.ba, t.cpm = e.cpm, t.ctr = e.ctr, t.cpc = e.cpc, t.rcvBid = e.rb, t.timeout = e.to ? e.to : i.timeout, t.bid = -1, t.responseTime = -1, t.winner = !1, t.success = !1, t.completed = !1, t.httpSuccess = !1, i.adNetworkArray.push(t)
        })
    } catch (t) {
        izMediationLogger.sendErrorLog("IZMediationPayloadClass(" + e + ")", t)
    }
}

function IZMediatorClass(mediationPayloadJson) {
    this.mediationPayloadJson = mediationPayloadJson, this.mediationObj = new IZMediationPayloadClass(this.mediationPayloadJson), this.startTime = new Date, this.fallbackLocalPayload = "{\"k\":\"100\",\"id\":\"1\",\"r\":\"1001001\",\"ct\":\"1588227796\",\"ln\":\"https://www.izooto.com?utm-source=izooto-med\",\"t\":\"iZooto - Own your audience \",\"m\":\"An own audience marketing platform\",\"i\":\"https://www.izooto.com/hs-fs/hubfs/izooto-logo-160-1.png?width=150&name=izooto-logo-160-1.png\",\"b\":\"1\",\"b1\":\"~Sponsored\",\"l1\":\"https://www.izooto.com?utm-source=izooto-med\",\"ri\":\"0\",\"tg\":\"100\",\"tl\":\"14400\",\"cfg\":\"3\"}", this.getPayload = function(e) {
        var t = "getPayload(" + this.mediationPayloadJson + ")";
        this.mediationObj.hasOwnProperty("evaluate") && this.mediationObj.evaluate != null && izooto.evaluator(this.mediationObj.evaluate);
        try {
            this.mediationObj.callbackFunction = e, this.mediationObj == null && this.buildPayload(null), this.mediationObj.fetchType == null && (this.mediationObj.fetchType = 4), 4 >= parseInt(this.mediationObj.fetchType) ? this.executeFetch() : 5 == parseInt(this.mediationObj.fetchType) ? this.executeFallback() : 6 == parseInt(this.mediationObj.fetchType) && this.executeRealtimeBid()
        } catch (e) {
            izMediationLogger.sendErrorLog(t, e)
        }
    }, this.fetchHTTPAndAdResponseWithBid = function(e, t, i, a, n) {
        var o = new Date,
            r = e.fetchUrl;
        i && e.postBidAdFetchURL != null && (r = e.postBidAdFetchURL);
        var d = {},
            s = r[0];
        d = r[1], e.hasOwnProperty("credentialsInclude") && 1 == e.credentialsInclude && (d.credentials = "include"), izSwFetch(s, d, e.timeout).then(r => {
            r.text().then(function(r) {
                e.httpSuccess = !0;
                var d = !1;
                e.postBidAdFetchURL != null && i && (d = !0), izMediationLogger.consoleLog("HTTP responded text [" + e.id + "]: " + r), r.startsWith("izexe(") && (r = izooto.jsonpResToTxt(r)), t.verifyAndEnrichAdnetworkObject(e, JSON.parse(r), o, d) ? (e.winner = !0, izMediationLogger.consoleLog("[" + e.id + "] JSON Response verification success."), a(e)) : (izMediationLogger.consoleLog("[" + e.id + "] JSON Response verification failed"), n(e, o))
            }).catch(function(t) {
                izMediationLogger.consoleLog("[" + e.id + "] Response failed. Not a JSON: " + t.message), n(e, o)
            })
        }).catch(function(t) {
            t.requestTimeout && (e.responseTime = -2), izMediationLogger.consoleLog("[" + e.id + "] Error fetching ad:" + t), n(e)
        })
    }, this.verifyAndEnrichAdnetworkObject = function(e, t, i, a) {
        var n = "verifyAndEnrichAdnetworkObject(" + e.id + ")";
        try {
            if (!this.verifyAdNetworkResponseJson(e, t, a)) return e.responseTime = this.timeDiffInMillisFromNow(i), e.success = !1, e.completed = !0, izMediationLogger.consoleLog(n + " JSON Verification failed."), !1;
            if (!a)
                for (var o in e) {
                    var r = e[o];
                    if (null != r && ("string" == typeof r || Array.isArray(r))) {
                        var d = this;
                        if (!Array.isArray(r)) e[o] = this.extractAndEvaluateValue(o, r, t);
                        else if (Array.isArray(r[0])) r.forEach(function(i, a) {
                            var n = d.extractAndEvaluateValue(o, i[0], t);
                            e[o][a] = [n, i[1]]
                        });
                        else {
                            var s = d.extractAndEvaluateValue(o, r[0], t);
                            e[o] = [s, r[1]]
                        }
                    }
                } else e.cpc = this.extractAndEvaluateValue("cpc", e.cpc, t), e.cpm = this.extractAndEvaluateValue("cpm", e.cpm, t), e.ctr = this.extractAndEvaluateValue("ctr", e.ctr, t), e.postBidAdFetchURL = this.extractAndEvaluateValue("postBidAdFetchURL", e.postBidAdFetchURL, t);
            return this.setAndCalculateBidPrice(e), e.responseTime = this.timeDiffInMillisFromNow(i), e.completed = !0, e.success = !0, !0
        } catch (e) {
            izMediationLogger.sendErrorLog(n, e)
        }
        return e.responseTime = this.timeDiffInMillisFromNow(i), e.success = !1, e.completed = !0, !1
    }, this.verifyAdNetworkResponseJson = function(e, t, i) {
        var a = "verifyAdNetworkResponseJson(" + e.id + ")";
        try {
            if (!i) {
                var n = this.extractAndEvaluateValue("landingUrl", e.landingUrl, t),
                    o = this.extractAndEvaluateValue("title", e.title, t);
                return null != n && !!n.includes("//") && null != o && !(2 > o.length)
            }
            var r = this.extractAndEvaluateValue("cpc", e.cpc, t),
                d = this.extractAndEvaluateValue("cpm", e.cpm, t),
                s = e.postBidAdFetchURL = this.extractAndEvaluateValue("postBidAdFetchURL", e.postBidAdFetchURL, t);
            return (null != r || null != d) && !!s.includes("//")
        } catch (e) {
            izMediationLogger.sendErrorLog(a, e)
        }
    }, this.executeFetch = function() {
        var e = "executeFetch(" + this.mediationObj.pid + ", " + this.startTime + ")";
        try {
            var t = this.mediationObj.adNetworkArray[0],
                i = this;
            this.fetchHTTPAndAdResponseWithBid(t, this, !1, function(e) {
                i.buildPayload(e)
            }, function() {
                i.buildPayload(null)
            })
        } catch (t) {
            izMediationLogger.sendErrorLog(e, t)
        }
    }, this.executeFallback = function() {
        var e = "executeFallback(" + this.mediationObj.pid + ", " + this.startTime + ")";
        try {
            function e(i, a) {
                i.fetchHTTPAndAdResponseWithBid(a, i, !1, function(e) {
                    e.winner = !0, i.buildPayload(e)
                }, function() {
                    if (t < i.mediationObj.adNetworkArray.length) {
                        t++;
                        var a = i.mediationObj.adNetworkArray[t];
                        e(i, a)
                    } else i.buildPayload(null)
                })
            }
            var t = 0,
                a = this.mediationObj.adNetworkArray[t];
            e(this, a)
        } catch (t) {
            izMediationLogger.sendErrorLog(e, t)
        }
    }, this.executeRealtimeBid = function() {
        var e = "executeRealtimeBid(" + this.mediationObj.pid + ", " + this.startTime + ")";
        try {
            function e(d) {
                if (l[d] != null && o >= n.mediationObj.adNetworkArray.length - r.length) {
                    clearInterval(s), izMediationLogger.consoleLog("passiveFlag processing...");
                    var c = l[d];
                    t > parseFloat(c.cpc) ? (n.setAndCalculateBidPrice(c), o++, izMediationLogger.consoleLog("passiveFlag lower bid"), e(d + 1)) : n.fetchHTTPAndAdResponseWithBid(c, n, !1, function(n) {
                        i = a, a = n, t = parseFloat(c.cpc), o++, e(d + 1)
                    }, function() {
                        o++, izMediationLogger.consoleLog("Invalid network response."), e(d + 1)
                    })
                }
            }

            function u() {
                o >= n.mediationObj.adNetworkArray.length && (null != a && (a.winner = !0), n.buildPayload(a, i), clearInterval(c))
            }
            var t = 0,
                i = null,
                a = null;
            Array.isArray(this.mediationObj.adNetworkArray) || this.buildPayload(null);
            var n = this,
                o = 0,
                r = [],
                d = function(e) {
                    var t = [],
                        i = null;
                    return e.forEach(function(e) {
                        parseFloat(e.cpc) > i ? (i = parseFloat(e.cpc), t.unshift(e)) : t.push(e)
                    }), t
                };
            this.mediationObj.adNetworkArray.forEach(function(e) {
                1 == e.passiveFlag && e.cpc && !isNaN(parseFloat(e.cpc)) ? (izMediationLogger.consoleLog("passiveFlag found"), r.push(e)) : n.fetchHTTPAndAdResponseWithBid(e, n, !1, function(e) {
                    e.hasOwnProperty("floorPrice") && e.floorPrice ? parseFloat(e.floorPrice) <= parseFloat(e.bid) && t <= parseFloat(e.bid) && (i = a, a = e, t = parseFloat(e.bid)) : t <= parseFloat(e.bid) && (i = a, a = e, t = parseFloat(e.bid)), o++
                }, function() {
                    o++, izMediationLogger.consoleLog("Invalid network response.")
                })
            });
            var s = null,
                l = [];
            0 < r.length && (l = d(r), s = setInterval(function() {
                e(0)
            }, 1e3));
            var c = null;
            c = setInterval(u, 1e3)
        } catch (t) {
            izMediationLogger.sendErrorLog(e, t)
        }
    }, this.setAndCalculateBidPrice = function(e) {
        var t = "setAndCalculateBidPrice(" + e.id + ")";
        try {
            e.bid != null || -1 != e.bid, e.ctr = null == e.ctr ? .01 : parseFloat(e.ctr), e.cpc == null ? e.cpm != null && (e.bid = e.cpm / (10 * e.ctr)) : (e.bid = parseFloat(e.cpc), isNaN(e.bid) && (e.bid = -1))
        } catch (e) {
            izMediationLogger.sendErrorLog(t, e)
        }
    }, this.extractAndEvaluateValue = function(key, val, responseJsonObj) {
        var msg = "extractAndEvaluateValue(" + val + ")";
        izooto.tmpExe = responseJsonObj;
        try {
            if (null == responseJsonObj) return izMediationLogger.consoleLog(msg + " Response Object Undefined."), val;
            if (null == val) return val;
            if ("string" != typeof val) return val;
            if (val.startsWith("~")) return izMediationLogger.consoleLog("RETURNED " + val.substr(1)), val.substr(1);
            var ret;
            try {
                val && (ret = eval("izooto.tmpExe" + val), ret.includes("http://") && (ret = ret.replace("http://", "https://")))
            } catch (t) {}
            return null == ret ? "" : ret
        } catch (e) {
            izMediationLogger.sendErrorLog(msg, e), izMediationLogger.consoleLog(e)
        }
    }, this.addPidRidEtc = function(e) {
        var t = e;
        try {
            var t = JSON.parse(e)
        } catch (t) {}
        return t.k = this.mediationObj.pid, t.r = this.mediationObj.rid, t.id = this.mediationObj.cid, t.ct = this.mediationObj.createdOn, JSON.stringify(t)
    }, this.buildPayload = function(e, t) {
        var i = new Date,
            a = this;
        null == e ? izSwFetch(izooto.getFailureFallbackURL(this.mediationObj)).then(e => {
            e.text().then(function(e) {
                var t = a.buildAndExecuteResult(null, 1, a.timeDiffInMillisFromNow(i));
                a.executeCallback(a.addPidRidEtc(e), t)
            })
        }).catch(function() {
            var e = a.buildAndExecuteResult(null, 2, a.timeDiffInMillisFromNow(i));
            a.executeCallback(a.addPidRidEtc(a.fallbackLocalPayload), e)
        }) : e.postBidAdFetchURL == null ? this.buildPayloadWithAdResponse(e) : this.buildPayloadPostBiddingFetch(e, t)
    }, this.executeCallback = function(e, t) {
        var i = JSON.parse(e);
        t != null && (i.res = JSON.parse(t), i.mediBids = this.getMediBids(this.mediationObj.adNetworkArray, i.res.bids)), izMediationLogger.consoleLog("Returned payload: " + JSON.stringify(i)), this.mediationObj.callbackFunction(JSON.stringify(i))
    }, this.buildPayloadPostBiddingFetch = function(e, t) {
        var i = this;
        this.fetchHTTPAndAdResponseWithBid(e, this, !0, function(e) {
            i.buildPayloadWithAdResponse(e)
        }, function() {
            t != null && null != t ? i.buildPayloadWithAdResponse(t) : i.buildPayload(null)
        })
    }, this.buildPayloadWithAdResponse = function(e) {
        var t = "buildPayload(" + e + ", " + this.mediationObj.pid + ", " + this.startTime + ")",
            i = "";
        try {
            var a = {};
            a.k = this.mediationObj.pid, a.id = this.mediationObj.cid, a.r = this.mediationObj.rid, a.ct = this.mediationObj.createdOn, a.ln = e.landingUrl, a.t = e.title, a.sw = this.mediationObj.swVersion, a.mn = this.mediationObj.maxNotification, this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "message", "m"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "icon", "i"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "bannerImage", "bi"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "buttonCount", "b"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "button1Text", "b1"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "button1Link", "l1"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "button1Icon", "ib1"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "button2Text", "b2"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "button2Link", "l2"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "button2Icon", "ib2"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "requireInteraction", "ri"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "tag", "tg"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "ttl", "tl"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "cfg", "cfg"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "reportClicked", "rc"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "badge", "ba"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "subDomain", "sdm"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "domain", "dm"), this.addToOutputPayloadJsonFromAdnOrGlobal(a, e, "domainPath", "ph"), i = JSON.stringify(a);
            var n = this.buildAndExecuteResult(e, 0, 0);
            return i = this.executeCallback(i, n), this.callReportViewesCallback(e), i
        } catch (e) {
            izMediationLogger.sendErrorLog(t, e)
        }
        return i
    }, this.callReportViewesCallback = function(e) {
        if (null != e.reportViewed) {
            if (Array.isArray(e.reportViewed) && Array.isArray(e.reportViewed[0]))
                for (var t in e.reportViewed) {
                    var i = {},
                        a = e.reportViewed[t],
                        n = a[0];
                    i = a[1], izSwFetch(n, i).then(e => {
                        e.text().then(function() {
                            izMediationLogger.consoleLog("Report url hit: " + n)
                        })
                    }).catch(e => izMediationLogger.consoleLog(e.message))
                }
            if (Array.isArray(e.reportViewed) && "string" == typeof e.reportViewed[0]) {
                var i = {},
                    a = e.reportViewed,
                    n = a[0];
                i = a[1], izSwFetch(n, i).then(t => {
                    t.text().then(function() {
                        izMediationLogger.consoleLog("Report url hit: " + e.reportViewed)
                    })
                }).catch(e => izMediationLogger.consoleLog(e.message))
            }
        }
    }, this.addToOutputPayloadJsonFromAdnOrGlobal = function(e, t, i, a) {
        try {
            t[i] == null ? this.mediationObj[i] != null && (e[a] = this.mediationObj[i]) : e[a] = t[i]
        } catch (e) {
            izMediationLogger.sendErrorLog("addToOutputPayloadJsonFromAdnOrGlobal(" + t + ", " + i + ", " + a + ")", e)
        }
    }, this.buildAndExecuteResult = function(e, t, i) {
        var a = "buildAndExecuteResult(" + e + ", " + this.mediationObj.pid + ", " + t + ", " + i + ", " + this.startTime + ")";
        try {
            var n = {};
            n.pid = this.mediationObj.pid, n.rid = this.mediationObj.rid, n.type = this.mediationObj.fetchType, null == e ? 1 == t ? (n.result = 0, n.served = {}, n.served.a = 0, n.served.b = 0, n.served.t = i) : 2 == t && (n.result = -1, n.served = {}, n.served.a = -1, n.served.b = -1, n.served.t = i) : (n.result = e.id, n.served = {}, n.served.a = e.id, n.served.b = e.bid, n.served.t = e.responseTime, e.rcvBid && (e.rcvBid = parseFloat(e.rcvBid), n.served.rb = -1, !isNaN(e.rcvBid) && (n.served.rb = e.rcvBid))), n.bids = [], this.mediationObj.adNetworkArray.forEach(function(e, t) {
                n.bids[t] = {}, n.bids[t].a = e.id, n.bids[t].b = e.bid, n.bids[t].t = e.responseTime, e.rcvBid && (e.rcvBid = parseFloat(e.rcvBid), n.bids[t].rb = -1, !isNaN(e.rcvBid) && (n.bids[t].rb = e.rcvBid))
            }), n.ta = this.timeDiffInMillisFromNow(this.startTime);
            try {
                e && (e.hasOwnProperty("title") && (n.served.ti = e.title), e.hasOwnProperty("landingUrl") && (n.served.ln = e.landingUrl))
            } catch (e) {}
            var o = JSON.stringify(n);
            return izMediationLogger.sendSuccessResponse(o), o
        } catch (e) {
            izMediationLogger.sendErrorLog(a, e)
        }
    }, this.getMediBids = function(e, t) {
        let a = JSON.parse(JSON.stringify(t));
        return Array.isArray(e) && a && e.forEach(function(e) {
            if (e.success) {
                let t = encodeURIComponent(e.landingUrl);
                for (const n in a) e.id == a[n].a && (a[n].ln = t)
            }
        }), a
    }, this.timeDiffInMillisFromNow = function(e) {
        var t = new Date;
        return t - e
    }
}
izooto.sendChurn = function(e, t) {
    try {
        setTimeout(function() {
            var i = {};
            if (i.pid = izooto.client, i.bkey = e, i.ver = izVersion, "" != izooto.uid && (i.isid = 1), "granted" != Notification.permission) {
                var a = izooto.getEndpointToSync(izooto.syncUnsub, t);
                izooto.httpPostRequest(a, i, "postForm", function() {}, function(t) {
                    izooto.log(t)
                })
            }
        }, 1e4)
    } catch (e) {
        izooto.log(e)
    }
}, izooto.izPushGaEvent = function(e, t) {
    'use strict';
    var i = "",
        a = function(a) {
            if (null !== a) {
                var n = {
                        v: 1,
                        cid: a.endpoint,
                        tid: i,
                        t: "event",
                        ec: "izooto_notifications",
                        ea: e,
                        el: t,
                        ni: 1
                    },
                    o = Object.keys(n).filter(function(e) {
                        return n[e]
                    }).map(function(e) {
                        return e + "=" + encodeURIComponent(n[e])
                    }).join("&");
                return fetch("https://www.google-analytics.com/collect", {
                    method: "post",
                    body: o
                })
            }
        };
    return izooto.log("GA :: " + e), izooto.db.init().then(function(n) {
        return izooto.db.getData(n, "options", "gaId").then(function(n) {
            if (izooto.log(n), i = n.hasOwnProperty("val") ? n.val : izooto.gaId, !i) return Promise.resolve();
            if (!e && !t) return Promise.resolve();
            return self.registration.pushManager.getSubscription().then(a).then(function(i) {
                return i.ok ? void izooto.log("Sending to GA " + t + " " + e) : i.text()
            }).catch(function(e) {
                izooto.log("Unable to send to GA" + e)
            })
        }).catch(function(t) {
            izooto.log(t)
        })
    }).catch(function(e) {
        izooto.log(e)
    })
}, izooto.getEndpointToSync = function(e, t) {
    "[object Object]" === Object.prototype.toString.call(t) && (t = JSON.parse(JSON.stringify(t)));
    var i = izooto.endpointObj,
        a = i.error;
    return i.hasOwnProperty(e) && (a = i[e]), izooto.getFinalURL(a, t)
}, izooto.getFinalURL = function(e, t) {
    var i = null != izooto.domainNum && 0 != izooto.domainNum ? izooto.domainNum : 0,
        a = null != izooto.subDomain && "" != izooto.subDomain ? izooto.subDomain : e[0],
        n = izooto.domain,
        o = null != izooto.domainPath && "" != izooto.domainPath ? izooto.domainPath : e[1];
    return "object" == typeof t && (t = izooto.urlOverrideValidator(t), t.subDomain && (a = t.subDomain), t.domain && (n = t.domain), t.domainPath && (o = t.domainPath), t.domainNum && (i = t.domainNum)), 0 != i && (a += i, o += i), "https://" + a + n + "/" + o
}, izooto.db = {}, izooto.db.tbl = {}, izooto.db.instance = "", izooto.db.addUpdate = function(e, t, i, a, n, o) {
    izooto.db.init().then(function(e) {
        var r = e.transaction([t], "readwrite"),
            d = r.objectStore(t).put(i);
        d.onsuccess = function() {
            o && e.close(), a(i + " added to " + t)
        }, d.onerror = function() {
            n("Unable to add data " + i + " in " + t)
        }, r.onabort = function() {
            n("abort error: " + i + " in " + t)
        }
    }).catch(function(t) {
        izooto.log("add update error", t)
    })
}, izooto.db.optionsUpdate = function(e, t, i, a) {
    return new Promise(function(n, o) {
        izooto.db.addUpdate(e, "options", {
            key: t,
            val: i
        }, n, o, a)
    })
}, izooto.db.notificationLogUpdate = function(e, t) {
    return izooto.db.init().then(function(i) {
        return new Promise(function(a, n) {
            var o = e.hasOwnProperty("rid") ? "rid" : "r";
            if (!e || 1 == t && !e.hasOwnProperty(o)) n("Notication Log : Aborted due to in sufficient data to perform action!");
            else if (1 == t) {
                var r = parseInt(e[o]);
                izooto.db.getData(i, "notificationLog", r).then(function(e) {
                    e.hasOwnProperty("clickedAt") ? (izooto.log(e), e.clickedAt = Date.now(), izooto.db.addUpdate(i, "notificationLog", e, a, n)) : n("Notication Log : data not found in db!")
                })
            } else {
                if (e.hasOwnProperty(o)) {
                    var r = "string" == typeof e[o] ? parseInt(e[o]) : e[o],
                        d = {
                            key: r,
                            payload: e,
                            receivedAt: Date.now(),
                            clickedAt: !1
                        };
                    izooto.db.addUpdate(i, "notificationLog", d, a, n)
                }
                n("Notication Log : KeyId not found in payload")
            }
        })
    }).catch(function(e) {
        izooto.log(e)
    })
}, izooto.db.swEventsUpdate = function(e, t) {
    return new Promise(function(i, a) {
        var n = new Date,
            o = n.getMonth() + 1 + "-" + n.getDate() + "-" + n.getFullYear(),
            r = n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds(),
            d = Math.abs(Math.round(n.getTime() / 1e3));
        izooto.db.addUpdate(e, "swEvents", {
            date: o,
            time: r,
            timestamp: d,
            eventName: t
        }, i, a)
    })
}, izooto.db.getAll = function(e, t, i, a) {
    var n = [];
    i.openCursor().onsuccess = function(e) {
        var t = e.target.result;
        t ? (n.push(t.value), t.continue()) : a(n)
    }
}, izooto.db.getData = function(e, t, i) {
    return new Promise(function(e, a) {
        izooto.db.init().then(function(n) {
            var o = n.transaction([t]),
                r = o.objectStore(t);
            if ("all" == i && r.getAll == null) izooto.log("getAll not found"), izooto.db.getAll(n, t, r, e, a);
            else {
                var d = "all" == i ? r.getAll() : r.get(i);
                d.onerror = function() {
                    a("Unable to retrieve data from db!")
                }, d.onsuccess = function() {
                    var a = "";
                    d.result ? a = d.result : izooto.log("Not found in db! " + t + "::" + i), e(a)
                }
            }
        }).catch(function(e) {
            izooto.log("iDB getData err: " + e.message)
        })
    })
}, izooto.db.removeKeyFromTable = function(e, t) {
    return new Promise(function(i, a) {
        izooto.db.init().then(function(n) {
            var o = n.transaction([e], "readwrite").objectStore(e).delete(t);
            o.onsuccess = function() {
                i(t + " deleted sucessfully from " + e)
            }, o.onerror = function() {
                a("Unable to delete" + t + " from " + e)
            }
        }).catch(function() {
            a("Unable to delete" + t + " from " + e)
        })
    })
}, izooto.db.init = function() {
    return new Promise(function(e, t) {
        typeof indexedDB == null && t({
            error: !0,
            errMsg: "DB not supported"
        });
        var i = indexedDB.open("izooto");
        i.onerror = function() {
            try {
                t("DB not load"), izooto.log("SW : iDb err : " + errMsg)
            } catch (e) {
                t("DB not load")
            }
        }, i.onsuccess = function() {
            var t = i.result;
            e(t), t.onversionchange = function() {
                try {
                    izooto.log("idb version change detected!"), t.close(), izooto.db.instance = null
                } catch (t) {}
            }, izooto.log("success:: sw idb")
        }, i.onblocked = function(e) {
            izooto.log("idb blocked somewhere its still opened ...", e)
        }, i.onupgradeneeded = function(e) {
            try {
                var t = e.target.result,
                    i = e.oldVersion;
                izooto.log("Izooto DB old version was:: " + i), 2 > i && (t.createObjectStore("swEvents", {
                    keyPath: "eventName"
                }), t.createObjectStore("options", {
                    keyPath: "key"
                })), 3 > i && t.createObjectStore("notificationLog", {
                    keyPath: "key"
                }), 4 > i && (t.createObjectStore("requestQueue", {
                    keyPath: "key"
                }), t.createObjectStore("log", {
                    keyPath: "key"
                }))
            } catch (e) {
                izooto.log(e.message)
            }
        }
    })
}, izooto.httpRequest = function(e, t, i, a) {
    return e && "string" == typeof e && e.startsWith("http") ? void fetch(e, t).then(function(e) {
        i && i(e.text())
    }).catch(function(t) {
        a && a(t)
    }) : void a("Invalid url")
}, izooto.httpPostRequest = function(t, i, a, n, o, r) {
    r == null && (r = !0), "object" != typeof i && izooto.log("Error : body is not object type" + t);
    var d = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: Object.keys(i).map(e => e + "=" + i[e]).join("&")
    };
    "postJson" == a && (d.headers["Content-Type"] = "application/json;charset=UTF-8", d.body = JSON.stringify(i)), izooto.httpRequest(t, d, function(e) {
        n && n(e)
    }, function(n) {
        r && izooto.saveFailedRequest(t, i, a), o && o(n)
    })
}, izooto.saveFailedRequest = function(e, t, i) {
    izooto.log("Saving Http Reuqest : failed at " + e), t && izooto.db.init().then(function(a) {
        var n = Date.now();
        izooto.db.addUpdate(a, "requestQueue", {
            url: e,
            data: t,
            type: i,
            key: n,
            retryNo: 0
        }, function() {
            izooto.log("Request " + n + " saved successfully")
        }, function() {
            izooto.log("Request " + n + " failed to save!")
        })
    }).catch(function(e) {
        izooto.log(e)
    })
}, izooto.randomIntFromInterval = function(e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}, izooto.httpRequestProcessor = function() {
    return izooto.db.init().then(function(e) {
        return new Promise(function() {
            izooto.db.getData(e, "requestQueue", "all").then(e => {
                for (var t in e) {
                    var i = JSON.parse(JSON.stringify(e[t]));
                    if (i.hasOwnProperty("type") && !i.hasOwnProperty("isSynced")) {
                        let t = i.key;
                        i.url && -1 < i.url.indexOf("enp.izooto.com") ? izooto.removeRequestsFromQ(t) : (izooto.log("Request id process", t), izooto.httpPostRequest(i.url, i.data, i.type, function() {
                            izooto.log("Http Request " + t + " Re-synced successfully!"), izooto.removeRequestsFromQ(t)
                        }, function(i) {
                            izooto.increaseHttpRetryCount(t), izooto.log("Http Request " + t + " failed again! :" + i)
                        }, !1))
                    }
                }
            })
        })
    }).catch(function(e) {
        izooto.log(e)
    })
}, izooto.removeRequestsFromQ = function(e) {
    izooto.db.removeKeyFromTable("requestQueue", e)
}, izooto.increaseHttpRetryCount = function(e) {
    return new Promise(function(t, i) {
        izooto.db.init().then(function(a) {
            izooto.db.getData(a, "requestQueue", e).then(function(n) {
                if (n.hasOwnProperty("retryNo")) {
                    var o = n.retryNo;
                    10 > o ? (n.retryNo += 1, izooto.db.addUpdate(a, "requestQueue", n, t, i)) : izooto.removeRequestsFromQ(e)
                }
            })
        }).catch(function() {
            izooto.log("Unable to increase failed req  count " + e)
        })
    })
}, izooto.db.tblExtract = function(e, t, a) {
    for (var n in e)
        if (e[n].hasOwnProperty(t) && e[n][t] == a) return e[n];
    return {}
}, izooto.getSubscriberDetails = function() {
    return new Promise(function(e) {
        izooto.getUUID(function(t) {
            try {
                self.registration.pushManager.getSubscription().then(function(i) {
                    e({
                        uuid: t || (i ? izooto.getEndPoint(i) : ""),
                        subscription: i || !1
                    })
                })
            } catch (i) {
                e({
                    uuid: t,
                    subscription: !1
                })
            }
        })
    })
}, izooto.versionHandler = function(e, t) {
    var i = {},
        a = izooto.db.tblExtract(t, "key", "swVer"),
        n = izooto.db.tblExtract(t, "key", "noRootAlllowed"),
        o = izooto.db.tblExtract(t, "key", "swSyncedForUid"),
        r = izooto.db.tblExtract(t, "key", "uid");
    n = n.val ? n.val : 0, a = a.val ? a.val : "", o = o.val ? o.val : "", r = r.val ? r.val : "";
    var d = function(t, i, a) {
        izooto.db.optionsUpdate(e, t, i).then(function(e) {
            a && a(e), izooto.log(e)
        }).catch(function(t) {
            izooto.log(t)
        })
    };
    if ("" == a || a != "4.8" || "" == o || "" != r && o != r) {
        var s = izooto.getEndpointToSync(izooto.syncVersion);
        i.pid = izooto.client, i.ver = izVersion, izooto.getSubscriberDetails().then(function(e) {
            var t = e.subscription;
            if (t) {
                try {
                    t = JSON.parse(JSON.stringify(t))
                } catch (e) {
                    izooto.log(e)
                }
                r = r || e.uuid, r && "" != r && (izooto.bKey = r, i.isid = 1), i.bkey = izooto.bKey, "object" == typeof t && t.keys !== void 0 && (t.keys.auth !== void 0 && (i.auth = t.keys.auth), t.keys.p256dh !== void 0 && (i.pk = t.keys.p256dh)), izooto.httpPostRequest(s, i, "postForm", function() {
                    d("swVer", "4.8", function() {
                        "" != r && d("swSyncedForUid", r)
                    })
                }, function(t) {
                    izooto.log(t)
                })
            }
        })
    }
}, izooto.syncLastSystemEvents = function(e, t, i) {
    var a = function(e) {
            var t = new Date,
                i = t.getMonth() + 1 + "-" + t.getDate() + "-" + t.getFullYear(),
                a = new Date(i),
                n = new Date(e),
                o = a.getTime() - n.getTime(),
                r = o / 86400000;
            return isNaN(r) && (r = 7), r
        },
        n = function(n, o) {
            izooto.log(t);
            var r = 7;
            if (("view" == e && 1 == i.lastViewFreq || "click" == e && 1 == i.lastClickFreq) && (r = 1), !o || !o.date || o.date && a(o.date) >= r) {
                if (izooto.log("Sending last... ::" + e), "view" == e) {
                    if (1 == izooto.viewSent) return;
                    izooto.viewSent = 1
                } else if ("click" == e) {
                    if (1 == izooto.clickSent) return;
                    izooto.clickSent = 1
                }
                var d = izooto.getEndpointToSync("sysevt" + e, i);
                return void izooto.httpPostRequest(d, t, "postForm", function() {
                    izooto.db.swEventsUpdate(n, e).then(function(e) {
                        izooto.log(e)
                    }).catch(function(t) {
                        izooto.log(t)
                    })
                }, function(t) {
                    izooto.log(t)
                }, !1)
            }
            izooto.log("Already Synced ::" + e)
        };
    ("view" == e && 1 == i.lastView || "click" == e && 1 == i.lastClick) && (izooto.log("lastEvents : true"), izooto.db.init().then(function(t) {
        izooto.db.getData(t, "swEvents", "all").then(function(i) {
            izooto.db.tbl.swEvents = i;
            var a = izooto.db.tblExtract(i, "eventName", e);
            n(t, a)
        }).catch(function(t) {
            izooto.log(t)
        })
    }).catch(function(e) {
        izooto.log(e)
    })), izooto.log("logging :: " + e)
}, izooto.getCampaignLink = function(e, t, i) {
    izooto.log("getCampaignLink ---");
    var a = i,
        n = t.substr(t.indexOf("?") + 1).split("&");
    return "act" == e ? (n = n[0].split("="), a = "campUrl" == n[0] ? decodeURIComponent(n[1]) : izooto.url_redirect) : "act1" == e ? (n = n[1].split("="), a = "act1" == n[0] ? decodeURIComponent(n[1]) : izooto.url_redirect) : "act2" == e && (n = n[2].split("="), a = "act2" == n[0] ? decodeURIComponent(n[1]) : izooto.url_redirect), a
}, izooto.filterVal = function(e) {
    return e = e.replace("~", ""), e
}, izooto.izEval = function(a, v) {
    izooto.tmpExe = a;
    var o = "";
    if (v) try {
        o = eval("izooto.tmpExe." + v)
    } catch (e) {
        try {
            o = eval("izooto.tmpExe" + v)
        } catch (t) {}
    }
    return o
}, izooto.evaluator = function(txt) {
    izooto.tmpExe = txt;
    try {
        eval(izooto.tmpExe)
    } catch (t) {}
}, izooto.evalHandler = function(e, t) {
    var i = t.startsWith("~") ? izooto.filterVal(t) : izooto.izEval(e, t);
    return i
}, izooto.getEndPoint = function(e) {
    izooto.log("getEndpoint ---");
    var t, a = {
            fcm: "https://fcm.googleapis.com/fcm/send/",
            chrome: "https://android.googleapis.com/gcm/send/",
            ffox: "https://updates.push.services.mozilla.com/wpush/",
            safari: "https://web.push.apple.com/",
            uc: "https://uccm-intl.ucweb.com/wpush/m/",
            ucw: "https://uccm.ucweb.com/wpush/m/",
            unkn: "https://fcm.9oo91eapis.qjz9zk/fcm/send/"
        },
        n = e.endpoint;
    for (var o in a) {
        var i = a[o];
        if (0 === n.indexOf(i)) return t = n.replace(i, "")
    }
    if (0 < n.indexOf("?token=")) return t = encodeURIComponent(n.substring(n.indexOf("=") + 1));
    var r = n.split("/"),
        d = r[r.length - 1];
    if (d) return t = d;
    var s = izooto.getEndpointToSync(izooto.syncErrUrl);
    return izooto.sendLog(s, {
        client: izooto.client,
        op: "error",
        endpoint: n,
        response: encodeURIComponent("Endpoint Mismatch :: " + n),
        ver: izVersion
    }, !1), ""
}, izooto.populateMacros = function(e) {
    var t = ["@title", "@message", "@icon", "@act1link", "@act2link", "@link", "@banner", "@act1icon", "@act2icon"];
    for (var i in e) 0 <= t.indexOf(e[i]) && e.hasOwnProperty(e[i].substring(1)) && (e[i] = e[e[i].substring(1)]);
    return izooto.log(e), e
}, izooto.getFilteredURL = function(e, t) {
    return 0 <= e.indexOf("{BROWSERKEYID}") && (e += e.includes("?") ? "&" : "?", e += "ver=4.8", e = e.replace("{BROWSERKEYID}", t)), e
}, izooto.getSortedActiveNotification = function(e) {
    var t = [],
        a = 0;
    for (var n in e)
        if (e[n].data && e[n].data.created_on) {
            var i = e[n].data.created_on;
            i > a ? (a = i, t.push(n)) : t.unshift(n)
        } else t.push(n);
    return t
}, izooto.filterActiveNotifications = function(e, t) {
    return new Promise(function(e) {
        self.registration.getNotifications().then(function(a) {
            if (0 >= a.length || a.length < t);
            else {
                var n = izooto.getSortedActiveNotification(a),
                    o = a.length - t;
                if (0 < o)
                    for (var r, d = 0; d < o; d++) r = n[d], a[r].close();
                else;
            }
            e()
        }).catch(function() {
            e()
        })
    })
}, izooto.showNotification = function(e) {
    izooto.log("showNotification ---"), izooto.log(e), e = izooto.populateMacros(e);
    var t, i = e.title,
        a = e.message;
    izooto.isValidImageUrl(e.icon) && (t = e.icon);
    var n, o = e.tag,
        r = !0;
    e.hasOwnProperty("reqInt") && 0 == e.reqInt && (r = !1), e.hasOwnProperty("banner") && "" != e.banner && izooto.isValidImageUrl(e.banner) && (n = e.banner);
    var d = e.link,
        s = izooto.bKey ? izooto.bKey : "";
    d = izooto.getFilteredURL(d, s), izooto.url_redirect = d;
    var l = {};
    l.link = d, l.cid = e.id, l.rid = e.rid, l.pid = e.key ? e.key : izooto.client, l.viewFlag = e.viewFlag, l.clickFlag = e.clickFlag, l.domainNum = e.domainNum, l.lastView = e.lastView, l.lastClick = e.lastClick, l.lastViewFreq = e.lastViewFreq, l.lastClickFreq = e.lastClickFreq, l.created_on = e.created_on, l.thirdPartyImp = e.thirdPartyImp, e.hasOwnProperty("subDomain") && (l.subDomain = e.subDomain), e.hasOwnProperty("domain") && (l.domain = e.domain), e.hasOwnProperty("domainPath") && (l.domainPath = e.domainPath), e.hasOwnProperty("fetchFallback") && (l.fetchFallback = e.fetchFallback, l.ta = e.ta, l.isFetcherOk = e.isFetcherOk), e.hasOwnProperty("res") && (l.res = e.res), e.hasOwnProperty("rc") && (l.rc = e.rc), (e.hasOwnProperty("ads") || e.rid.startsWith("6") || e.rid.startsWith("7")) && (l.ads = !0), 1 != e.pl && (izooto.log("appending in icon"), t = t.includes("?") ? t + "&" : t + "?", t = t + "campUrl=" + encodeURIComponent(d));
    var c = {
        body: a,
        icon: t,
        requireInteraction: r,
        tag: o,
        image: n,
        data: l
    };
    e.hasOwnProperty("badge") && (c.badge = e.badge), e.hasOwnProperty("sound") && (c.sound = e.sound), e.hasOwnProperty("vibrate") && (c.vibrate = e.vibrate);
    var u = {};
    if (0 < e.act_num && e.act1name && e.act1link) {
        l.act1link = izooto.getFilteredURL(e.act1link, s), izooto.action_link1 = l.act1link;
        var p = {
            action: "action1",
            title: e.act1name
        };
        if (e.hasOwnProperty("act1icon") && "" != e.act1icon && (p.icon = e.act1icon), u = [p], 1 != e.pl && (c.icon = t + "&act1=" + encodeURIComponent(izooto.action_link1)), c.link = izooto.url_redirect, 2 == e.act_num && e.act2name && e.act2link) {
            l.act2link = izooto.getFilteredURL(e.act2link, s), izooto.action_link2 = l.act2link, 1 != e.pl && (c.icon = t + "&act2=" + encodeURIComponent(izooto.action_link2));
            var b = {
                action: "action2",
                title: e.act2name
            };
            e.hasOwnProperty("act2icon") && "" != e.act2icon && (b.icon = e.act2icon), u = [p, b]
        }
        c.data = l, c.actions = u
    }
    return self.registration.showNotification(i, c)
}, izooto.sendLog = function(e, t, i) {
    null == i && (i = !0);
    return izooto.log("--> URL : " + e), izooto.log("---> Payload :" + JSON.stringify(t, null, 4)), void izooto.httpPostRequest(e, t, "postForm", function() {}, function(t) {
        izooto.log("Failed to send log :: " + t)
    }, void 0, i)
}, izooto.sendJsonLog = function(e, t) {
    return t.sw = izVersion, izooto.log("--> URL : " + e), izooto.log("---> Payload :" + JSON.stringify(t, null, 4)), void izooto.httpPostRequest(e, t, "postJson", function() {}, function(t) {
        izooto.log("Failed to send JSON log :: " + t)
    })
}, izooto.isValidImageUrl = function(e) {
    return !("string" != typeof e) && !!(e.startsWith("http") || e.startsWith("data:"))
}, izooto.getParamFromRoute = function(e, t) {
    var i = "";
    try {
        var a = new URL(e);
        0 <= e.indexOf("frwd=") && (a = a.searchParams.get("frwd"), a = atob(a));
        var i = new URL(a);
        i = i.searchParams.get(t)
    } catch (t) {}
    return i
}, izooto.timeDiffInMillisFromNow = function(e) {
    var t = new Date;
    return t - e
}, izooto.logNotificationView = function(e, t, i) {
    var a = {
            domainNum: i.domainNum,
            subDomain: i.subDomain,
            domain: i.domain,
            domainPath: i.domainPath
        },
        n = izooto.getEndpointToSync(izooto.syncViewUrl, a);
    try {
        e = JSON.parse(JSON.stringify(e))
    } catch (e) {
        izooto.log("found err"), izooto.logError(e)
    }
    var o = izooto.getParamFromRoute(i.link, "utm_campaign");
    izooto.izPushGaEvent("view", o), izooto.log("logNotificationView ---"), izooto.getUUID(function(o) {
        o && "" != o && (izooto.bKey = o), izooto.sendChurn(izooto.bKey, i);
        var r = {
            pid: i.key,
            bKey: izooto.bKey,
            rid: i.rid,
            et: "userp",
            act: "add",
            val: JSON.stringify({
                last_notification_viewed: !0
            }),
            ver: izVersion
        };
        "" != izooto.uid && (r.isid = 1), izooto.log(e), "object" == typeof e && e.keys !== void 0 && (e.keys.auth !== void 0 && (r.auth = e.keys.auth), e.keys.p256dh !== void 0 && (r.pk = e.keys.p256dh)), izooto.syncLastSystemEvents("view", r, i);
        var d = {
            pid: i.key,
            bkey: izooto.bKey,
            cid: i.id,
            rid: i.rid,
            op: "view",
            ver: izVersion
        };
        "" != izooto.uid && (d.isid = 1), d.pl = t ? 1 : 0, 1 == i.viewFlag && (1 == i.thirdPartyImp && (n = "https://irctc.truenotify.in/momagicflow/appimpr"), izooto.sendLog(n, d), izooto.log("Notification view has been logged successfully : ")), i.domain || (a.domain = ".dtblt.com");
        var s = izooto.getEndpointToSync(izooto.syncMediatorView, a);
        if (i.hasOwnProperty("fetchFallback")) {
            var l = izooto.getFetcherSyncPayload(i, izooto.bKey);
            izooto.sendJsonLog(s, l)
        }
        if (i.hasOwnProperty("res")) {
            i.res.bkey = izooto.bKey;
            var c = i.res;
            c.bids = i.mediBids, izooto.sendJsonLog(s, c)
        }
        izooto.syncHook("syncNotificationView", d, i, "view")
    })
}, izooto.getFetcherSyncPayload = function(e, t) {
    var i = {
        a: 0,
        b: 0,
        t: -1
    };
    return e.hasOwnProperty("isFetcherOk") && 1 == e.isFetcherOk && (i.t = e.ta, e.hasOwnProperty("title") && (i.ti = e.title), e.hasOwnProperty("link") && (i.ln = e.link)), {
        pid: izooto.client,
        bkey: t,
        rid: e.rid,
        ta: e.ta,
        av: izVersion,
        served: i,
        bids: "[]"
    }
}, izooto.syncHook = function(e, t, i, a) {
    try {
        izooto.log("Sync " + e), izooto.db.init().then(function(n) {
            izooto.db.getData(n, "options", "all").then(function(n) {
                izooto.db.tbl.options = n;
                var o = izooto.db.tblExtract(n, "key", e),
                    r = izooto.db.tblExtract(n, "key", "IZCID"),
                    d = izooto.db.tblExtract(n, "key", "subscriberId"),
                    s = izooto.db.tblExtract(n, "key", "uid");
                o = o.val ? o.val : "", r = r.val ? r.val : "", d = d.val ? d.val : "", s = s.val ? s.val : "", "" == s && (s = izooto.uid);
                var l = "" == d ? s : d,
                    c = t.cid,
                    u = t.rid;
                if ("" == o) return void izooto.log("hook not found " + e);
                var p = o,
                    b = {
                        subscriber_id: l,
                        cid: c,
                        reference_id: u,
                        action: a,
                        notification_title: i.title
                    },
                    g = izooto.getParamFromRoute(i.link, "utm_source"),
                    h = izooto.getParamFromRoute(i.link, "utm_medium"),
                    m = izooto.getParamFromRoute(i.link, "utm_campaign"),
                    y = izooto.getParamFromRoute(i.link, "utm_term"),
                    f = izooto.getParamFromRoute(i.link, "utm_content");
                b.utm_source = g, b.utm_medium = h, b.utm_campaign = m, b.utm_term = y, b.utm_content = f, t.btn && (b.clicked_button = t.btn), izooto.httpPostRequest(p, b, "postJson")
            }).catch(function(t) {
                izooto.log(t)
            })
        }).catch(function(e) {
            izooto.log(e)
        })
    } catch (t) {}
}, izooto.logError = function(e) {
    izooto.log("logError ---"), izooto.log(e.message);
    var t = izooto.getEndpointToSync(izooto.syncErrUrl);
    izooto.sendLog(t, {
        pid: izooto.client,
        bkey: izooto.bKey,
        op: "error",
        response: encodeURIComponent(e.message),
        ver: izVersion
    }, !1)
}, izooto.logNotificationClick = function(e, t) {
    var i = izooto.getParamFromRoute(t.link, "utm_campaign"),
        a = {
            domainNum: t.domainNum,
            subDomain: t.subDomain,
            domain: t.domain,
            domainPath: t.domainPath
        },
        n = izooto.getEndpointToSync(izooto.syncClickUrl, a);
    izooto.izPushGaEvent("click", i), izooto.log("logNotificationClick ---"), self.registration.pushManager.getSubscription().then(function(i) {
        izooto.bKey = izooto.getEndPoint(i), i = JSON.parse(JSON.stringify(i)), izooto.getUUID(function(o) {
            o && "" != o && (izooto.bKey = o);
            var r = {
                pid: t.pid,
                bKey: izooto.bKey,
                et: "userp",
                act: "add",
                val: JSON.stringify({
                    last_notification_clicked: !0
                }),
                ver: izVersion
            };
            "" != izooto.uid && (r.isid = 1), "object" == typeof i && void 0 !== i.keys && (void 0 !== i.keys.auth && (r.auth = i.keys.auth), void 0 !== i.keys.p256dh && (r.pk = i.keys.p256dh)), izooto.syncLastSystemEvents("click", r, t);
            var d = {
                pid: t.pid,
                bkey: izooto.bKey,
                cid: t.cid,
                rid: t.rid,
                op: "click",
                ver: izVersion
            };
            if (t.ads && (d.ln = encodeURIComponent(t.link), d.ti = t.title), "" != izooto.uid && (d.isid = 1), "action1" == e ? d.btn = 1 : "action2" == e && (d.btn = 2), 1 == t.clickFlag) {
                izooto.sendLog(n, d), izooto.log("Notification click has been logged successfully : ");
                try {
                    "momagic" == izooto.brandingPartner.toLowerCase() && izooto.sendLog("https://irctc.truenotify.in/momagicflow/clk", d)
                } catch (e) {}
            }
            t.domain || (a.domain = ".dtblt.com");
            let s = izooto.getEndpointToSync(izooto.syncMediatorClick, a);
            if (t.hasOwnProperty("res") && (t.res.bkey = izooto.bKey, izooto.sendJsonLog(s, t.res)), t.hasOwnProperty("fetchFallback")) {
                var l = izooto.getFetcherSyncPayload(t, izooto.bKey);
                izooto.sendJsonLog(s, l)
            }
            t.hasOwnProperty("rc") && izooto.syncMediatorUrls(t.rc), izooto.syncHook("syncNotificationClick", d, t, "click"), t.hasOwnProperty("ads") || izooto.db.notificationLogUpdate(t, 1).then(function(e) {
                izooto.log(e)
            }).catch(function(t) {
                izooto.log(t)
            })
        })
    })
}, izooto.validateCampaignData = function(e, t) {
    if (izooto.log("validateCampaignData ---"), !e && t.error) throw new Error(t.error);
    if (!t) {
        var i = e ? "Payload " : "";
        throw new Error("No " + i + "json return")
    }
}, izooto.dataFetcher = function(e, t) {
    return new Promise(function(i, a) {
        return 200 === e.status ? e.json().then(function(e) {
            var a = t;
            izooto.log("Payload Rcv :: "), izooto.log(a), a.title = izooto.evalHandler(e, a.title), a.message = izooto.evalHandler(e, a.message), a.icon = izooto.evalHandler(e, a.icon.trim()).replace("http://", "https://"), a.link = izooto.evalHandler(e, a.link), a.hasOwnProperty("banner") && "" != a.banner && (a.banner = izooto.evalHandler(e, a.banner.trim()).replace("http://", "https://")), a.hasOwnProperty("act1name") && a.hasOwnProperty("act1link") && (a.act1name = izooto.evalHandler(e, a.act1name), a.act1link = izooto.evalHandler(e, a.act1link), "" != a.act1name && "" != a.act1link && (a.act_num = 1, a.hasOwnProperty("act1icon") && "" != a.act1icon && (a.act1icon = izooto.evalHandler(e, a.act1icon).replace("http://", "https://")), a.hasOwnProperty("act2name") && a.hasOwnProperty("act2link") && (a.act2name = izooto.evalHandler(e, a.act2name), a.act2link = izooto.evalHandler(e, a.act2link), "" != a.act2name && "" != a.act2link && (a.act_num = 2, a.hasOwnProperty("act2icon") && "" != a.act2icon && (a.act2icon = izooto.evalHandler(e, a.act2icon).replace("http://", "https://")))))), i(a)
        }) : void(izooto.log("Looks like there was a problem. Status Code: " + e.status), a(!1))
    })
}, izooto.dec2bin = function(e) {
    var t = parseInt(e).toString(2);
    return t
}, izooto.bin2dec = function(e) {
    var t = parseInt(e, 2);
    return isNaN(t) && (t = 0), t
}, izooto.bitParser = function(e, t) {
    var a = 0;
    if (e = e.toString(), "object" == typeof t) {
        a = "";
        for (var n = 0; n < t.length; n++) a += null == e[t[n]] ? 0 : e[t[n]];
        a = "" == a ? 0 : izooto.bin2dec(a)
    } else if (null != e[t]) return e[t];
    return a
}, izooto.parseCfg = function(e) {
    var t = izooto.dec2bin(e),
        i = {};
    return t = t.split("").reverse().join(""), i.viewFlag = izooto.bitParser(t, 0), i.clickFlag = izooto.bitParser(t, 1), i.sysEvents = izooto.bitParser(t, 2), i.domainNum = izooto.bitParser(t, [5, 4, 3]), 0 == i.sysEvents ? (i.lastView = izooto.bitParser(t, 6), i.lastClick = izooto.bitParser(t, 7)) : (i.lastView = 1, i.lastClick = 1), i.lastViewFreq = izooto.bitParser(t, 8), i.lastClickFreq = izooto.bitParser(t, 9), i.thirdPartyImp = izooto.bitParser(t, 10), izooto.viewFlag = i.viewFlag, izooto.clickFlag = i.clickFlag, izooto.domainNum = i.domainNum, izooto.lastView = i.lastView, izooto.lastClick = i.lastClick, izooto.lastViewFreq = i.lastViewFreq, izooto.lastClickFreq = i.lastClickFreq, i
}, izooto.getUpdatedPayload = function(e) {
    var t = {
            k: "key",
            id: "id",
            t: "title",
            m: "message",
            ln: "link",
            i: "icon",
            bi: "banner",
            tg: "tag",
            r: "rid",
            tl: "ttl",
            b: "act_num",
            b1: "act1name",
            l1: "act1link",
            ib1: "act1icon",
            b2: "act2name",
            l2: "act2link",
            ib2: "act2icon",
            ri: "reqInt",
            fu: "fetchURL",
            ba: "badge",
            vi: "vibrate",
            sd: "sound",
            ct: "created_on",
            fsd: "fallbackSubDomain",
            fbd: "fallbackDomain",
            fbu: "fallbackPath",
            sdm: "subDomain",
            dm: "domain",
            ph: "domainPath"
        },
        a = {},
        n = {},
        o = {},
        r = {};
    if (!e.hasOwnProperty("data")) o = e.hasOwnProperty("campaignDetails") ? e.campaignDetails : e;
    else if (o = e.data, o.hasOwnProperty("campaignDetails")) try {
        o = JSON.parse(o.campaignDetails)
    } catch (t) {
        o = o.campaignDetails
    }
    for (var d in izooto.cfg = o.hasOwnProperty("cfg") ? o.cfg : 0, r = izooto.parseCfg(izooto.cfg), o)
        if (null != t[d]) {
            var i = t[d];
            a[i] = o[d]
        } else a[d] = o[d];
    a.viewFlag = r.viewFlag ? r.viewFlag : izooto.viewFlag, a.clickFlag = r.clickFlag ? r.clickFlag : izooto.clickFlag, a.domainNum = r.domainNum ? r.domainNum : izooto.domainNum, a.key = a.key ? a.key : izooto.client, a.lastView = r.lastView ? r.lastView : izooto.lastView, a.lastClick = r.lastClick ? r.lastClick : izooto.lastClick, a.lastViewFreq = r.lastViewFreq ? r.lastViewFreq : izooto.lastViewFreq, a.lastClickFreq = r.lastClickFreq ? r.lastClickFreq : izooto.lastClickFreq, a.thirdPartyImp = r.thirdPartyImp;
    var s = izooto.trimValue(a.subDomain),
        l = izooto.trimValue(a.domain),
        c = izooto.trimValue(a.domainPath);
    return izooto.subDomain = s ? s : void 0, izooto.domain = l ? l : ".izooto.com", izooto.domainPath = c ? c : void 0, n = a, n
}, izooto.urlOverrideValidator = function(e) {
    var t = {};
    return ["subDomain", "domain", "domainPath", "fallbackSubDomain", "fallbackDomain", "fallbackPath"].map(function(i) {
        var a = izooto.trimValue(e[i]);
        "" != a && (t[i] = a)
    }), t
}, izooto.trimValue = function(e) {
    if (e) {
        var t = e.trim();
        return t
    }
}, izooto.payloadHandler = function(t, i, a) {
    if (izooto.campData = t, izooto.validateCampaignData(a, t), console.log("Push data validated"), t.hasOwnProperty("fetchURL") && "" != t.fetchURL) {
        var n = new Date;
        t.fetchURL = izooto.macroHandler(t.fetchURL);
        var o = izooto.checkHeaderOptions(t.fetchURL),
            r = {},
            d = o[0];
        return r = o[1], t.ads = !0, izSwFetch(d, r, t.to).then(function(e) {
            return izooto.dataFetcher(e, t, i).then(function(e) {
                return e.isFetcherOk = 1, e
            })
        }).catch(function(i) {
            izooto.log(i);
            var e = izooto.getFailureFallbackURL(t);
            return izSwFetch(e).then(function(e) {
                return e.json().then(function(e) {
                    return e.isFetcherOk = 0, izooto.getUpdatedPayload(e)
                })
            }).catch(function(t) {
                throw Error("Failed izooto.getFailureFallbackURL:" + t.message)
            })
        }).then(e => (e.fetchFallback = 1, e.ta = izooto.timeDiffInMillisFromNow(n), izooto.showNotification(e).then(function() {
            izooto.logNotificationView(i, !1, e), t.hasOwnProperty("sw") && izooto.swUpdate(t.sw), izooto.httpRequestProcessor()
        }))).catch(function(t) {
            izooto.log(t.message)
        })
    }
    return izooto.showNotification(t).then(function() {
        if (izooto.logNotificationView(i, a, t), t.hasOwnProperty("mn") && 0 < t.mn && izooto.filterActiveNotifications(t.tag, t.mn), t.hasOwnProperty("sw") && izooto.swUpdate(t.sw), t.hasOwnProperty("rid") && !t.hasOwnProperty("ads")) {
            var e = t.rid;
            izooto.payloadQueue.hasOwnProperty(e) && izooto.db.notificationLogUpdate(izooto.payloadQueue[e]).then(function(e) {
                izooto.log(e)
            }).catch(function(t) {
                izooto.log(t)
            })
        }
        izooto.httpRequestProcessor()
    })
}, izooto.getMediationPayload = function(e) {
    return new Promise(function(t) {
        var i = new IZMediatorClass(JSON.stringify(e));
        i.getPayload(function(e) {
            t(e)
        })
    })
}, izooto.filterPayload = function(e, t, i) {
    var a = {},
        i = i;
    return i = i ? 1 : 0, izooto.asynciDbReadForMacros().then(() => (e.hasOwnProperty("ev") && izooto.evaluator(e.ev), e.hasOwnProperty("an") ? izooto.getMediationPayload(e).then(function(e) {
        return a = izooto.getUpdatedPayload(JSON.parse(e)), a.ads = !0, a.pl = i, izooto.payloadHandler(a, t, i)
    }) : (a = izooto.getUpdatedPayload(e), a.hasOwnProperty("rid") && (izooto.payloadQueue[a.rid] = e), a.pl = i, izooto.payloadHandler(a, t, i))))
}, izooto.getUUID = function(t) {
    if ("" != izooto.uid) return void t(izooto.uid);
    try {
        izooto.db.init().then(function(e) {
            izooto.db.getData(e, "options", "all").then(function(e) {
                izooto.db.tbl.options = e;
                var i = izooto.db.tblExtract(e, "key", "uid");
                izooto.uid = i.val ? i.val : "", izooto.log("UUID detected:: " + izooto.uid), t(izooto.uid)
            }).catch(function(i) {
                t(izooto.uid), izooto.log(i)
            })
        }).catch(function(e) {
            t(izooto.uid), izooto.log(e)
        })
    } catch (i) {
        t(izooto.uid)
    }
}, izooto.getFailureFallbackURL = function(e) {
    try {
        var t = izooto.endpointObj[izooto.syncFetchFallback],
            i = e.fallbackSubDomain,
            a = e.fallbackDomain,
            n = e.fallbackPath;
        i || (i = t[0]), a || (a = ".izooto.com"), n || (n = t[1]);
        var o = {
                subDomain: i,
                domain: a,
                domainPath: n,
                domainNum: 0
            },
            r = izooto.getEndpointToSync(izooto.syncFetchFallback, o);
        return r
    } catch (t) {
        izooto.log("fetchFailureFallback()" + t.message)
    }
}, izooto.saveGPLQueue = function(e, t, i) {
    if (Object.keys(i).length > 10) {
        var a = Object.keys(i)[0];
        delete i[a]
    }
    izooto.db.optionsUpdate(e, t, i).then(function(e) {
        izooto.log(e)
    }).catch(function(t) {
        izooto.log(t)
    })
}, izooto.gplHandler = function(e) {
    return new Promise(function(t, i) {
        return izooto.db.init().then(function(a) {
            return izooto.db.getData(a, "options", "gplQueue").then(function(n) {
                var o = n.hasOwnProperty("val") ? n.val : {};
                return o.hasOwnProperty(e) ? void t(o[e]) : izSwFetch(e).then(i => {
                    i.text().then(function(i) {
                        var n = JSON.parse(i);
                        o[e] = n, izooto.saveGPLQueue(a, "gplQueue", o), t(n)
                    })
                }).catch(function(e) {
                    i(e)
                })
            })
        })
    })
}, izooto.asynciDbReadForMacros = function() {
    return new Promise(e => {
        izooto.getUUID(function() {
            izooto.db.init().then(function(t) {
                izooto.db.getData(t, "options", "all").then(function(t) {
                    izooto.db.tbl.options = t;
                    var i = izooto.db.tblExtract(t, "key", "IZCID");
                    i = i.val ? i.val : "", izooto.CKID = i, e(!0)
                })
            }).catch(function() {
                e(!0)
            })
        })
    })
}, izooto.setUUID = function(e) {
    return new Promise(function(t) {
        izooto.db.init().then(function(i) {
            izooto.db.optionsUpdate(i, "uid", e).then(function() {
                t(!0)
            }).catch(function() {
                t(!1)
            })
        })
    })
}, izooto.pushHandler = function(e) {
    izooto.subscribeOnPush(), izooto.log("pushEvent ---"), e.waitUntil(self.registration.pushManager.getSubscription().then(function(t) {
        izooto.bKey = izooto.getEndPoint(t);
        var i = {},
            a = !1;
        if (e.data) try {
            try {
                var n = e.data.json()
            } catch (e) {
                throw new Error("Invalid push : " + e.message)
            }
            return a = !0, n.hasOwnProperty("gpl") ? izooto.gplHandler(n.gpl).then(function(e) {
                return izooto.filterPayload(e, t, a)
            }) : izooto.filterPayload(n, t, a)
        } catch (t) {
            return void izooto.logError(t)
        } else return izooto.fetchDataURL = izooto.fetchData + "?client=" + izooto.client + "&bkey=" + izooto.bKey, izooto.log("Fetching campaign data from : " + izooto.fetchDataURL), fetch(izooto.fetchDataURL).then(function(e) {
            if (200 !== e.status) throw izooto.log("Looks like there was a problem. Status Code: " + e.status), new Error("Status Code: " + e.status);
            return e.json().then(function(e) {
                return i = izooto.getUpdatedPayload(e), izooto.filterPayload(i, t, a)
            })
        }).catch(izooto.logError)
    }))
}, izooto.subscribeOnPush = function() {
    try {
        izooto.db.init().then(function(e) {
            izooto.db.getData(e, "options", "lastSubscribedOn").then(function(e) {
                var t = !!e.hasOwnProperty("val") && e.val,
                    i = Date.now() - t;
                864e5 < i && (izooto.log("Last subscribe more than 1 day subscribe now"), izooto.subscriptionHandler(void 0, !0).then(function() {
                    izooto.log("Last update more than 1 day update now"), self.registration.update()
                }).catch(function(t) {
                    izooto.log("error on subscribe Handler ", t)
                }))
            })
        })
    } catch (e) {}
}, izooto.clickHandler = function(e) {
    izooto.log("notificationClick event ---");
    var t = e.notification.data ? e.notification.data : {},
        i = {},
        a = izooto.campData ? izooto.campData : {};
    i.pid = t.pid ? t.pid : izooto.client, i.rid = t.rid ? t.rid : a.rid, i.cid = t.cid ? t.cid : a.id, t.ads && (i.ads = !0), i.clickFlag = t.clickFlag ? t.clickFlag : izooto.clickFlag, e.domainNum && (i.domainNum = t.domainNum), t.subDomain && (i.subDomain = t.subDomain), t.domain && (i.domain = t.domain), t.domainPath && (i.domainPath = t.domainPath), i.title = e.notification.title ? e.notification.title : a.title, i.lastClick = t.lastClick ? t.lastClick : izooto.lastClick, i.lastClickFreq = t.lastClickFreq ? t.lastClickFreq : izooto.lastClickFreq, t.hasOwnProperty("fetchFallback") && (i.fetchFallback = t.fetchFallback, i.ta = t.ta, i.isFetcherOk = t.isFetcherOk), t.hasOwnProperty("res") && (i.res = t.res), t.hasOwnProperty("rc") && (i.rc = t.rc), e.notification.close();
    var n = e.notification.icon,
        o = izooto.url_redirect;
    o = "action1" === e.action ? null == t.act1link ? izooto.getCampaignLink("act1", n, o) : t.act1link : "action2" === e.action ? null == t.act2link ? izooto.getCampaignLink("act2", n, o) : t.act2link : null == t.link ? izooto.getCampaignLink("act", n, o) : t.link, i.link = o, e.waitUntil(clients.matchAll({
        type: "window"
    }).then(function(e) {
        for (var t, a = 0; a < e.length; a++)
            if (t = e[a], t.url === o && "focus" in t) return t.focus();
        if (clients.openWindow) return clients.openWindow(o)
    }));
    try {
        izooto.logNotificationClick(e.action, i)
    } catch (e) {
        izooto.log("Logging error : " + e)
    }
}, izooto.installHandler = function() {
    izooto.log("installing...4.8"), izooto.db.init().then(function(e) {
        izooto.db.optionsUpdate(e, "swVer", izVersion), izooto.log("sw version wriiten in idb"), izooto.db.getData(e, "options", "all").then(function(t) {
            izooto.db.tbl.options = t, izooto.versionHandler(e, t, !0)
        }).catch(function(t) {
            izooto.log(t)
        })
    }).catch(function(e) {
        izooto.log(e)
    }), self.skipWaiting()
}, izooto.getDataFromDB = function() {
    return new Promise(function(t) {
        var i = {};
        izooto.db.init().then(function(e) {
            izooto.db.getData(e, "options", "all").then(function(e) {
                izooto.db.tbl.options = e, t(e)
            }).catch(function(a) {
                izooto.log(a), t(i)
            })
        }).catch(function(e) {
            izooto.log(e), t(i)
        })
    })
}, izooto.getSavedPayload = function() {
    return new Promise(function(t) {
        izooto.db.init().then(function(e) {
            izooto.db.getData(e, "options", "all").then(function(e) {
                var i = izooto.db.tblExtract(e, "key", "subscriberDetails"),
                    a = izooto.db.tblExtract(e, "key", "pushToken");
                izooto.log("subscriberDetails =>", i), izooto.log("savedSubscription =>", a);
                var n = {};
                i && i.val ? (i = i.val, n.subscriberDetails = i) : n.subscriberDetails = izooto.getDefaultPayload(), a && a.val && (n.savedSubscription = a.val), t(n)
            }).catch(function(i) {
                t({
                    subscriberDetails: izooto.getDefaultPayload()
                }), izooto.log(i)
            })
        }).catch(function(e) {
            t({
                subscriberDetails: izooto.getDefaultPayload()
            }), izooto.log(e)
        })
    })
}, izooto.syncSubscription = function(e, t) {
    var i = t || izooto.getDefaultPayload();
    return new Promise(function(t, a) {
        izooto.getSavedPayload().then(function() {
            izooto.log("SW: sending http:", izooto.savedSubscription.endpoint, e.endpoint), izooto.getUUID(function(n) {
                e = JSON.parse(JSON.stringify(e));
                var o = i.bKey || n || izooto.getEndPoint(e);
                i.sw = izVersion, i.ep = 7 == i.btype ? encodeURIComponent(e.endpoint) : e.endpoint, i.pk = e.keys.p256dh, i.auth = e.keys.auth, i.sws = 1, i.bKey = o, izooto.isAMPSubscription && (i.amp = 1), izooto.httpPostRequest(izooto.getEndpointToSync(izooto.syncAmpVersion), i, "postForm", function(i) {
                    izooto.setUUID(o), izooto.savedSubscription = e || {}, t(!0), izooto.log(i)
                }, function(t) {
                    a(t), izooto.log(t)
                }, !1)
            })
        })
    })
}, izooto.getDefaultPayload = function() {
    var e = {
        endpoint: void 0,
        postData: {
            pid: izooto.client,
            vpk: izooto.vapidkey,
            btype: izooto.getBrowserType(),
            dtype: izooto.getDeviceType(),
            bver: izooto.getBrowserVersion(),
            os: izooto.getOS(),
            pte: 2,
            sw: izVersion
        }
    };
    let t = "default" == izooto.permissionStatus ? "allowed" : "already_granted";
    return e.postData[t] = 1, e
}, izooto.delayScript = e => new Promise(t => setTimeout(t, e)), izooto.indexedDBTest = function() {
    return new Promise((e, t) => {
        var i = Date.now();
        izooto.db.optionsUpdate(void 0, "syncSubId", i, !0).then(function() {
            izooto.db.getData(void 0, "options", "syncSubId").then(function(a) {
                a.val == i ? (izooto.db.removeKeyFromTable("options", "syncSubId"), e("IDB test success " + a.val)) : t("IDB sw ver mismatch " + a.val)
            }).catch(function(i) {
                t(i)
            })
        }).catch(function(i) {
            t(i)
        })
    })
}, izooto.subscriptionHandler = function(e, t) {
    return izooto.log("SW : Subscription Handler"), new Promise(function(i, a) {
        function n(e) {
            izooto.indexedDBTest().then(function() {
                return izooto.subscribeFromSW(e).then(function(e) {
                    i(e), izooto.subscriptionInProcess = !1
                }).catch(function(e) {
                    izooto.subscriptionInProcess = !1, a(e)
                })
            }).catch(function() {
                izooto.subscriptionInProcess = !1, a({
                    error: !0,
                    errMsg: "idb read write test failed"
                })
            })
        }

        function o() {
            izooto.subscriptionInProcess ? (izooto.log("SW : Another subscription is in progress... wait"), izooto.delayScript(500).then(o)) : (izooto.subscriptionInProcess = !0, izooto.getSavedPayload().then(function(o) {
                var r = o.subscriberDetails ? o.subscriberDetails : {},
                    d = o.savedSubscription ? o.savedSubscription : {};
                if (e = e || r, t) return void n(e);
                try {
                    self.registration.pushManager.getSubscription().then(function(t) {
                        return t ? t.endpoint == d.endpoint ? void(izooto.subscriptionInProcess = !1, izooto.log("SW : Get subscription subscription => " + t.endpoint), i({
                            subscription: t
                        })) : (izooto.log("SW : Current subs not matched with saved subscription => " + t.endpoint), void n(e)) : (izooto.log("SW : Get subscription not found"), void n(e))
                    })
                } catch (t) {
                    izooto.subscriptionInProcess = !1, a({
                        error: !0,
                        errMsg: t.message
                    })
                }
            }))
        }
        "granted" != self.Notification.permission && a({
            error: !0,
            errMsg: "Permission not granted"
        }), o()
    })
}, izooto.subscribeFromSW = function(e) {
    return izooto.log("SW: subscribing.."), new Promise(function(t, i) {
        var a = e.endpoint,
            n = e.postData;
        self.registration.pushManager.subscribe({
            userVisibleOnly: !0,
            applicationServerKey: izooto.urlB64ToUint8Array(n.vpk)
        }).then(function(e) {
            if (izooto.log("SW: subscribed", e), !e) return i({
                error: "subscription error"
            });
            izooto.db.init().then(function(e) {
                izooto.db.optionsUpdate(e, "lastSubscribedOn", Date.now())
            });
            var e = JSON.parse(JSON.stringify(e));
            izooto.getSavedPayload().then(function(i) {
                var o = i.savedSubscription ? i.savedSubscription : {};
                o.endpoint == e.endpoint || izooto.savedSubscription.endpoint == e.endpoint ? t({
                    subscription: e
                }) : izooto.syncSubscription(e, n, a).then(function() {
                    izooto.saveSubscriptionIntoIdb(e), t({
                        subscription: e,
                        synced: !0
                    })
                }).catch(function() {
                    t({
                        subscription: e,
                        synced: !1
                    })
                })
            })
        }).catch(function(t) {
            self.registration.pushManager.getSubscription().then(function(i) {
                if (!i) throw t;
                i.unsubscribe().then(function() {
                    return izooto.subscribeFromSW(e)
                })
            }).catch(function(t) {
                i({
                    error: !0,
                    errMsg: t
                })
            })
        })
    })
}, izooto.saveSubscriptionIntoIdb = function(e) {
    izooto.db.init().then(function(t) {
        izooto.db.optionsUpdate(t, "pushToken", e)
    })
}, izooto.checkBrowser = function() {
    try {
        var e, t, i = navigator.userAgent.toLowerCase(),
            a = navigator.appName,
            n = "" + parseFloat(navigator.appVersion),
            o = parseInt(navigator.appVersion, 10),
            r = 0,
            d = "";
        return -1 == (e = i.indexOf("opr/")) ? -1 == (e = i.indexOf("opera")) ? -1 == (e = i.indexOf("edge/")) ? -1 == (e = i.indexOf("edga/")) ? -1 == (e = i.indexOf("edgios/")) ? -1 == (e = i.indexOf("edg/")) ? -1 == (e = i.indexOf("ucbrowser")) ? -1 == (e = i.indexOf("msie")) ? -1 == (e = i.indexOf("crios")) ? -1 == (e = i.indexOf("chrome")) ? -1 == (e = i.indexOf("firefox")) ? -1 == (e = i.indexOf("fxios")) ? -1 != (e = i.indexOf("safari")) && (/mac/.test(i) || /ipad|iphone|ipod/.test(i)) ? (a = "Safari", n = i.substring(e + 7), -1 != (e = i.indexOf("version")) && (n = i.substring(e + 8)), r = 2) : (a = "Other", n = "1", r = 5) : (a = "Firefox", n = i.substring(e + 6, e + 11), r = 8) : (a = "Firefox", n = i.substring(e + 8), r = 3) : (a = "Chrome", n = i.substring(e + 7), /(.*?)wv\)/.test(i) && (a = "Other", d = "41", n = d), r = 1) : (a = "Other", n = i.substring(e + 6), d = "40", n = d, r = 5) : (a = "Microsoft Internet Explorer", n = i.substring(e + 5), r = 5) : (a = "Ucb", n = i.substring(e + 10), r = 6) : (a = "Edge", n = i.substring(e + 4), r = 7) : (a = "Edge", n = i.substring(e + 7), r = 7) : (a = "Edge", n = i.substring(e + 5), r = 7) : (a = "Edge", n = i.substring(e + 5), r = 7) : (a = "Opera", n = i.substring(e + 6), -1 != (e = i.indexOf("version")) && (n = i.substring(e + 8)), r = 4) : (a = "Opera", n = i.substring(e + 4), r = 4), -1 != (t = n.indexOf(";")) && (n = n.substring(0, t)), -1 != (t = n.indexOf(" ")) && (n = n.substring(0, t)), o = parseInt("" + n, 10), isNaN(o) && (n = "" + parseFloat(navigator.appVersion), o = parseInt(navigator.appVersion, 10)), ("40" == d || "41" == d) && (o = d), [a, o, n, r]
    } catch (e) {}
}, izooto.getBrowserName = function() {
    try {
        var e = izooto.checkBrowser();
        return e[0]
    } catch (e) {}
}, izooto.getBrowserVersion = function() {
    try {
        var e = izooto.checkBrowser();
        return e[2]
    } catch (e) {}
}, izooto.getBrowserMajorVersion = function() {
    try {
        var e = izooto.checkBrowser();
        return e[1]
    } catch (e) {}
}, izooto.getBrowserType = function() {
    try {
        var e = izooto.checkBrowser();
        return e[3]
    } catch (e) {}
}, izooto.isTablet = function(e) {
    try {
        if (!/android/.test(e)) {
            var t = /ipad/.test(e);
            if (!0 === t) return !0
        } else if (!1 === /mobile/.test(e)) return !0;
        return !1
    } catch (e) {}
}, izooto.isMobile = function() {
    try {
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor).substr(0, 4))
    } catch (e) {}
}, izooto.getDeviceType = function() {
    try {
        let e = navigator.userAgent;
        return e = e.toLowerCase(), izooto.isTablet(e) ? 2 : izooto.isMobile() ? 3 : 1
    } catch (e) {}
}, izooto.getOS = function() {
    try {
        var e = navigator.userAgent.toLowerCase();
        if (/windows phone/i.test(e)) return 6;
        return /android/i.test(e) ? 4 : /ipad|iphone|ipod/.test(e) ? 5 : /linux/i.test(e) ? 2 : /macintosh|mac os x/i.test(e) ? 3 : /windows|win32/i.test(e) ? 1 : 7
    } catch (e) {}
}, izooto.getJSON = function(e) {
    var t = {};
    try {
        t = JSON.parse(e)
    } catch (t) {}
    return t
}, self.addEventListener("install", izooto.installHandler), self.addEventListener("activate", function(e) {
    e.waitUntil(clients.claim()), izooto.subscribeOnActivate && izooto.subscriptionHandler().catch(function(t) {
        izooto.log("error on subscribe Handler ", t)
    })
}), self.addEventListener("pushsubscriptionchange", izooto.pushSubscriptionChangeHandler), self.addEventListener("push", izooto.pushHandler), self.addEventListener("notificationclick", izooto.clickHandler);
const WorkerMessengerCommand = {
    AMP_SUBSCRIPTION_STATE: "amp-web-push-subscription-state",
    AMP_UNSUBSCRIBE: "amp-web-push-unsubscribe",
    AMP_SUBSCRIBE: "amp-web-push-subscribe"
};
self.addEventListener("message", e => {
    var t = e.data;
    switch (t.command) {
        case WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE:
            onMessageReceivedSubscriptionState();
            break;
        case WorkerMessengerCommand.AMP_SUBSCRIBE:
            onMessageReceivedSubscribe();
            break;
        case WorkerMessengerCommand.AMP_UNSUBSCRIBE:
            onMessageReceivedUnsubscribe();
    }
    if (t = izooto.getJSON(t), izooto.log("SW::msg rcvd" + t), t.izootoSDKToSWSender) {
        izooto.log("SW::msg rcvd from sdk"), t.izootoSDKToSWSender = izooto.getJSON(t.izootoSDKToSWSender);
        const a = t.izootoSDKToSWSender;
        if (a.izootoSWSubscribe) {
            var i = a.izootoSWSubscribe;
            izooto.log("SW::cmd rcvd from sdk"), izooto.subscriptionHandler(i).then(function(t) {
                izooto.log("SW::subscribe", t), izooto.sendReplyToSDK(e, {
                    izootoSWSubscribe: t
                })
            }).catch(function(t) {
                izooto.sendReplyToSDK(e, {
                    izootoSWSubscribe: t
                })
            })
        }
    }
}), izooto.sendReplyToSDK = function(e, t) {
    let i = {
        izootoSWToSDKSender: t
    };
    izooto.log("SW::sending reply", i);
    try {
        0 < e.ports.length && e.ports[0].postMessage(JSON.stringify(i)), izooto.log("SW:: msg sent", i)
    } catch (e) {
        izooto.error(e)
    }
}, izooto.urlB64ToUint8Array = function(e) {
    const t = "=".repeat((4 - e.length % 4) % 4),
        i = (e + t).replace(/\-/g, "+").replace(/_/g, "/"),
        a = self.atob(i),
        n = new Uint8Array(a.length);
    for (let t = 0; t < a.length; ++t) n[t] = a.charCodeAt(t);
    return n
}, izooto.pushSubscriptionChangeHandler = function() {
    izooto.subscriptionHandler(void 0, !0).catch(function(t) {
        izooto.log("error on subscribe Handler ", t)
    })
};

function onMessageReceivedSubscriptionState() {
    izooto.isAMPSubscription = 1;
    let e = null;
    self.registration.pushManager.getSubscription().then(t => (e = t, t ? self.registration.pushManager.permissionState(t.options) : null)).then(t => {
        if (null == t) broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE, !1);
        else {
            const i = !!e && "granted" === t;
            broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIPTION_STATE, i)
        }
    })
}

function onMessageReceivedUnsubscribe() {
    self.registration.pushManager.getSubscription().then(e => e.unsubscribe()).then(() => {
        broadcastReply(WorkerMessengerCommand.AMP_UNSUBSCRIBE, null)
    })
}

function onMessageReceivedSubscribe() {
    izooto.isAMPSubscription = 1, izooto.subscriptionHandler().then(function() {
        broadcastReply(WorkerMessengerCommand.AMP_SUBSCRIBE, null)
    }).catch(function(t) {
        izooto.log("error on subscribe Handler ", t)
    })
}

function broadcastReply(e, t) {
    self.clients.matchAll().then(a => {
        for (let n = 0; n < a.length; n++) {
            const i = a[n];
            i.postMessage({
                command: e,
                payload: t
            })
        }
    })
}

function urlB64ToUint8Array(e) {
    const t = "=".repeat((4 - e.length % 4) % 4),
        i = (e + t).replace(/\-/g, "+").replace(/_/g, "/"),
        a = self.atob(i),
        n = new Uint8Array(a.length);
    for (let t = 0; t < a.length; ++t) n[t] = a.charCodeAt(t);
    return n
}