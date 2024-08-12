(() => {
    var e = {
            669: (e, t, n) => {
                e.exports = n(609)
            },
            448: (e, t, n) => {
                "use strict";
                var r = n(867),
                    a = n(26),
                    i = n(372),
                    o = n(327),
                    d = n(97),
                    s = n(109),
                    c = n(985),
                    l = n(61);
                e.exports = function(e) {
                    return new Promise((function(t, n) {
                        var u = e.data,
                            _ = e.headers,
                            f = e.responseType;
                        r.isFormData(u) && delete _["Content-Type"];
                        var x = new XMLHttpRequest;
                        if (e.auth) {
                            var v = e.auth.username || "",
                                p = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                            _.Authorization = "Basic " + btoa(v + ":" + p)
                        }
                        var b = d(e.baseURL, e.url);

                        function m() {
                            if (x) {
                                var r = "getAllResponseHeaders" in x ? s(x.getAllResponseHeaders()) : null,
                                    i = {
                                        data: f && "text" !== f && "json" !== f ? x.response : x.responseText,
                                        status: x.status,
                                        statusText: x.statusText,
                                        headers: r,
                                        config: e,
                                        request: x
                                    };
                                a(t, n, i), x = null
                            }
                        }
                        if (x.open(e.method.toUpperCase(), o(b, e.params, e.paramsSerializer), !0), x.timeout = e.timeout, "onloadend" in x ? x.onloadend = m : x.onreadystatechange = function() {
                                x && 4 === x.readyState && (0 !== x.status || x.responseURL && 0 === x.responseURL.indexOf("file:")) && setTimeout(m)
                            }, x.onabort = function() {
                                x && (n(l("Request aborted", e, "ECONNABORTED", x)), x = null)
                            }, x.onerror = function() {
                                n(l("Network Error", e, null, x)), x = null
                            }, x.ontimeout = function() {
                                var t = "timeout of " + e.timeout + "ms exceeded";
                                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(l(t, e, e.transitional && e.transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", x)), x = null
                            }, r.isStandardBrowserEnv()) {
                            var h = (e.withCredentials || c(b)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                            h && (_[e.xsrfHeaderName] = h)
                        }
                        "setRequestHeader" in x && r.forEach(_, (function(e, t) {
                            void 0 === u && "content-type" === t.toLowerCase() ? delete _[t] : x.setRequestHeader(t, e)
                        })), r.isUndefined(e.withCredentials) || (x.withCredentials = !!e.withCredentials), f && "json" !== f && (x.responseType = e.responseType), "function" == typeof e.onDownloadProgress && x.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && x.upload && x.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
                            x && (x.abort(), n(e), x = null)
                        })), u || (u = null), x.send(u)
                    }))
                }
            },
            609: (e, t, n) => {
                "use strict";
                var r = n(867),
                    a = n(849),
                    i = n(321),
                    o = n(185);

                function d(e) {
                    var t = new i(e),
                        n = a(i.prototype.request, t);
                    return r.extend(n, i.prototype, t), r.extend(n, t), n
                }
                var s = d(n(655));
                s.Axios = i, s.create = function(e) {
                    return d(o(s.defaults, e))
                }, s.Cancel = n(263), s.CancelToken = n(972), s.isCancel = n(502), s.all = function(e) {
                    return Promise.all(e)
                }, s.spread = n(713), s.isAxiosError = n(268), e.exports = s, e.exports.default = s
            },
            263: e => {
                "use strict";

                function t(e) {
                    this.message = e
                }
                t.prototype.toString = function() {
                    return "Cancel" + (this.message ? ": " + this.message : "")
                }, t.prototype.__CANCEL__ = !0, e.exports = t
            },
            972: (e, t, n) => {
                "use strict";
                var r = n(263);

                function a(e) {
                    if ("function" != typeof e) throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise((function(e) {
                        t = e
                    }));
                    var n = this;
                    e((function(e) {
                        n.reason || (n.reason = new r(e), t(n.reason))
                    }))
                }
                a.prototype.throwIfRequested = function() {
                    if (this.reason) throw this.reason
                }, a.source = function() {
                    var e;
                    return {
                        token: new a((function(t) {
                            e = t
                        })),
                        cancel: e
                    }
                }, e.exports = a
            },
            502: e => {
                "use strict";
                e.exports = function(e) {
                    return !(!e || !e.__CANCEL__)
                }
            },
            321: (e, t, n) => {
                "use strict";
                var r = n(867),
                    a = n(327),
                    i = n(782),
                    o = n(572),
                    d = n(185),
                    s = n(875),
                    c = s.validators;

                function l(e) {
                    this.defaults = e, this.interceptors = {
                        request: new i,
                        response: new i
                    }
                }
                l.prototype.request = function(e) {
                    "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = d(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                    var t = e.transitional;
                    void 0 !== t && s.assertOptions(t, {
                        silentJSONParsing: c.transitional(c.boolean, "1.0.0"),
                        forcedJSONParsing: c.transitional(c.boolean, "1.0.0"),
                        clarifyTimeoutError: c.transitional(c.boolean, "1.0.0")
                    }, !1);
                    var n = [],
                        r = !0;
                    this.interceptors.request.forEach((function(t) {
                        "function" == typeof t.runWhen && !1 === t.runWhen(e) || (r = r && t.synchronous, n.unshift(t.fulfilled, t.rejected))
                    }));
                    var a, i = [];
                    if (this.interceptors.response.forEach((function(e) {
                            i.push(e.fulfilled, e.rejected)
                        })), !r) {
                        var l = [o, void 0];
                        for (Array.prototype.unshift.apply(l, n), l = l.concat(i), a = Promise.resolve(e); l.length;) a = a.then(l.shift(), l.shift());
                        return a
                    }
                    for (var u = e; n.length;) {
                        var _ = n.shift(),
                            f = n.shift();
                        try {
                            u = _(u)
                        } catch (e) {
                            f(e);
                            break
                        }
                    }
                    try {
                        a = o(u)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    for (; i.length;) a = a.then(i.shift(), i.shift());
                    return a
                }, l.prototype.getUri = function(e) {
                    return e = d(this.defaults, e), a(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
                }, r.forEach(["delete", "get", "head", "options"], (function(e) {
                    l.prototype[e] = function(t, n) {
                        return this.request(d(n || {}, {
                            method: e,
                            url: t,
                            data: (n || {}).data
                        }))
                    }
                })), r.forEach(["post", "put", "patch"], (function(e) {
                    l.prototype[e] = function(t, n, r) {
                        return this.request(d(r || {}, {
                            method: e,
                            url: t,
                            data: n
                        }))
                    }
                })), e.exports = l
            },
            782: (e, t, n) => {
                "use strict";
                var r = n(867);

                function a() {
                    this.handlers = []
                }
                a.prototype.use = function(e, t, n) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t,
                        synchronous: !!n && n.synchronous,
                        runWhen: n ? n.runWhen : null
                    }), this.handlers.length - 1
                }, a.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, a.prototype.forEach = function(e) {
                    r.forEach(this.handlers, (function(t) {
                        null !== t && e(t)
                    }))
                }, e.exports = a
            },
            97: (e, t, n) => {
                "use strict";
                var r = n(793),
                    a = n(303);
                e.exports = function(e, t) {
                    return e && !r(t) ? a(e, t) : t
                }
            },
            61: (e, t, n) => {
                "use strict";
                var r = n(481);
                e.exports = function(e, t, n, a, i) {
                    var o = new Error(e);
                    return r(o, t, n, a, i)
                }
            },
            572: (e, t, n) => {
                "use strict";
                var r = n(867),
                    a = n(527),
                    i = n(502),
                    o = n(655);

                function d(e) {
                    e.cancelToken && e.cancelToken.throwIfRequested()
                }
                e.exports = function(e) {
                    return d(e), e.headers = e.headers || {}, e.data = a.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                        delete e.headers[t]
                    })), (e.adapter || o.adapter)(e).then((function(t) {
                        return d(e), t.data = a.call(e, t.data, t.headers, e.transformResponse), t
                    }), (function(t) {
                        return i(t) || (d(e), t && t.response && (t.response.data = a.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                    }))
                }
            },
            481: e => {
                "use strict";
                e.exports = function(e, t, n, r, a) {
                    return e.config = t, n && (e.code = n), e.request = r, e.response = a, e.isAxiosError = !0, e.toJSON = function() {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: this.config,
                            code: this.code
                        }
                    }, e
                }
            },
            185: (e, t, n) => {
                "use strict";
                var r = n(867);
                e.exports = function(e, t) {
                    t = t || {};
                    var n = {},
                        a = ["url", "method", "data"],
                        i = ["headers", "auth", "proxy", "params"],
                        o = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
                        d = ["validateStatus"];

                    function s(e, t) {
                        return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                    }

                    function c(a) {
                        r.isUndefined(t[a]) ? r.isUndefined(e[a]) || (n[a] = s(void 0, e[a])) : n[a] = s(e[a], t[a])
                    }
                    r.forEach(a, (function(e) {
                        r.isUndefined(t[e]) || (n[e] = s(void 0, t[e]))
                    })), r.forEach(i, c), r.forEach(o, (function(a) {
                        r.isUndefined(t[a]) ? r.isUndefined(e[a]) || (n[a] = s(void 0, e[a])) : n[a] = s(void 0, t[a])
                    })), r.forEach(d, (function(r) {
                        r in t ? n[r] = s(e[r], t[r]) : r in e && (n[r] = s(void 0, e[r]))
                    }));
                    var l = a.concat(i).concat(o).concat(d),
                        u = Object.keys(e).concat(Object.keys(t)).filter((function(e) {
                            return -1 === l.indexOf(e)
                        }));
                    return r.forEach(u, c), n
                }
            },
            26: (e, t, n) => {
                "use strict";
                var r = n(61);
                e.exports = function(e, t, n) {
                    var a = n.config.validateStatus;
                    n.status && a && !a(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
                }
            },
            527: (e, t, n) => {
                "use strict";
                var r = n(867),
                    a = n(655);
                e.exports = function(e, t, n) {
                    var i = this || a;
                    return r.forEach(n, (function(n) {
                        e = n.call(i, e, t)
                    })), e
                }
            },
            655: (e, t, n) => {
                "use strict";
                var r = n(867),
                    a = n(16),
                    i = n(481),
                    o = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function d(e, t) {
                    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var s, c = {
                    transitional: {
                        silentJSONParsing: !0,
                        forcedJSONParsing: !0,
                        clarifyTimeoutError: !1
                    },
                    adapter: (("undefined" != typeof XMLHttpRequest || "[object process]" === Object.prototype.toString.call({
                        env: {
                            CURRENT_CLIENT: "theuploadhub",
                            LOCAL_URL: "http://localhost:8080",
                            MODE: "production"
                        }
                    })) && (s = n(448)), s),
                    transformRequest: [function(e, t) {
                        return a(t, "Accept"), a(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (d(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) || t && "application/json" === t["Content-Type"] ? (d(t, "application/json"), function(e, t, n) {
                            if (r.isString(e)) try {
                                return (0, JSON.parse)(e), r.trim(e)
                            } catch (e) {
                                if ("SyntaxError" !== e.name) throw e
                            }
                            return (0, JSON.stringify)(e)
                        }(e)) : e
                    }],
                    transformResponse: [function(e) {
                        var t = this.transitional,
                            n = t && t.silentJSONParsing,
                            a = t && t.forcedJSONParsing,
                            o = !n && "json" === this.responseType;
                        if (o || a && r.isString(e) && e.length) try {
                            return JSON.parse(e)
                        } catch (e) {
                            if (o) {
                                if ("SyntaxError" === e.name) throw i(e, this, "E_JSON_PARSE");
                                throw e
                            }
                        }
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                r.forEach(["delete", "get", "head"], (function(e) {
                    c.headers[e] = {}
                })), r.forEach(["post", "put", "patch"], (function(e) {
                    c.headers[e] = r.merge(o)
                })), e.exports = c
            },
            849: e => {
                "use strict";
                e.exports = function(e, t) {
                    return function() {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                        return e.apply(t, n)
                    }
                }
            },
            327: (e, t, n) => {
                "use strict";
                var r = n(867);

                function a(e) {
                    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                e.exports = function(e, t, n) {
                    if (!t) return e;
                    var i;
                    if (n) i = n(t);
                    else if (r.isURLSearchParams(t)) i = t.toString();
                    else {
                        var o = [];
                        r.forEach(t, (function(e, t) {
                            null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                                r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), o.push(a(t) + "=" + a(e))
                            })))
                        })), i = o.join("&")
                    }
                    if (i) {
                        var d = e.indexOf("#"); - 1 !== d && (e = e.slice(0, d)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
                    }
                    return e
                }
            },
            303: e => {
                "use strict";
                e.exports = function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            },
            372: (e, t, n) => {
                "use strict";
                var r = n(867);
                e.exports = r.isStandardBrowserEnv() ? {
                    write: function(e, t, n, a, i, o) {
                        var d = [];
                        d.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && d.push("expires=" + new Date(n).toGMTString()), r.isString(a) && d.push("path=" + a), r.isString(i) && d.push("domain=" + i), !0 === o && d.push("secure"), document.cookie = d.join("; ")
                    },
                    read: function(e) {
                        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                }
            },
            793: e => {
                "use strict";
                e.exports = function(e) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
                }
            },
            268: e => {
                "use strict";
                e.exports = function(e) {
                    return "object" == typeof e && !0 === e.isAxiosError
                }
            },
            985: (e, t, n) => {
                "use strict";
                var r = n(867);
                e.exports = r.isStandardBrowserEnv() ? function() {
                    var e, t = /(msie|trident)/i.test(navigator.userAgent),
                        n = document.createElement("a");

                    function a(e) {
                        var r = e;
                        return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                            href: n.href,
                            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                            host: n.host,
                            search: n.search ? n.search.replace(/^\?/, "") : "",
                            hash: n.hash ? n.hash.replace(/^#/, "") : "",
                            hostname: n.hostname,
                            port: n.port,
                            pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                        }
                    }
                    return e = a(window.location.href),
                        function(t) {
                            var n = r.isString(t) ? a(t) : t;
                            return n.protocol === e.protocol && n.host === e.host
                        }
                }() : function() {
                    return !0
                }
            },
            16: (e, t, n) => {
                "use strict";
                var r = n(867);
                e.exports = function(e, t) {
                    r.forEach(e, (function(n, r) {
                        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                    }))
                }
            },
            109: (e, t, n) => {
                "use strict";
                var r = n(867),
                    a = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function(e) {
                    var t, n, i, o = {};
                    return e ? (r.forEach(e.split("\n"), (function(e) {
                        if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                            if (o[t] && a.indexOf(t) >= 0) return;
                            o[t] = "set-cookie" === t ? (o[t] ? o[t] : []).concat([n]) : o[t] ? o[t] + ", " + n : n
                        }
                    })), o) : o
                }
            },
            713: e => {
                "use strict";
                e.exports = function(e) {
                    return function(t) {
                        return e.apply(null, t)
                    }
                }
            },
            875: (e, t, n) => {
                "use strict";
                var r = n(593),
                    a = {};
                ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                    a[e] = function(n) {
                        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                    }
                }));
                var i = {},
                    o = r.version.split(".");

                function d(e, t) {
                    for (var n = t ? t.split(".") : o, r = e.split("."), a = 0; a < 3; a++) {
                        if (n[a] > r[a]) return !0;
                        if (n[a] < r[a]) return !1
                    }
                    return !1
                }
                a.transitional = function(e, t, n) {
                    var a = t && d(t);

                    function o(e, t) {
                        return "[Axios v" + r.version + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                    }
                    return function(n, r, d) {
                        if (!1 === e) throw new Error(o(r, " has been removed in " + t));
                        return a && !i[r] && (i[r] = !0, console.warn(o(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, d)
                    }
                }, e.exports = {
                    isOlderVersion: d,
                    assertOptions: function(e, t, n) {
                        if ("object" != typeof e) throw new TypeError("options must be an object");
                        for (var r = Object.keys(e), a = r.length; a-- > 0;) {
                            var i = r[a],
                                o = t[i];
                            if (o) {
                                var d = e[i],
                                    s = void 0 === d || o(d, i, e);
                                if (!0 !== s) throw new TypeError("option " + i + " must be " + s)
                            } else if (!0 !== n) throw Error("Unknown option " + i)
                        }
                    },
                    validators: a
                }
            },
            867: (e, t, n) => {
                "use strict";
                var r = n(849),
                    a = Object.prototype.toString;

                function i(e) {
                    return "[object Array]" === a.call(e)
                }

                function o(e) {
                    return void 0 === e
                }

                function d(e) {
                    return null !== e && "object" == typeof e
                }

                function s(e) {
                    if ("[object Object]" !== a.call(e)) return !1;
                    var t = Object.getPrototypeOf(e);
                    return null === t || t === Object.prototype
                }

                function c(e) {
                    return "[object Function]" === a.call(e)
                }

                function l(e, t) {
                    if (null != e)
                        if ("object" != typeof e && (e = [e]), i(e))
                            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                        else
                            for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.call(null, e[a], a, e)
                }
                e.exports = {
                    isArray: i,
                    isArrayBuffer: function(e) {
                        return "[object ArrayBuffer]" === a.call(e)
                    },
                    isBuffer: function(e) {
                        return null !== e && !o(e) && null !== e.constructor && !o(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                    },
                    isFormData: function(e) {
                        return "undefined" != typeof FormData && e instanceof FormData
                    },
                    isArrayBufferView: function(e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isObject: d,
                    isPlainObject: s,
                    isUndefined: o,
                    isDate: function(e) {
                        return "[object Date]" === a.call(e)
                    },
                    isFile: function(e) {
                        return "[object File]" === a.call(e)
                    },
                    isBlob: function(e) {
                        return "[object Blob]" === a.call(e)
                    },
                    isFunction: c,
                    isStream: function(e) {
                        return d(e) && c(e.pipe)
                    },
                    isURLSearchParams: function(e) {
                        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                    },
                    isStandardBrowserEnv: function() {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                    },
                    forEach: l,
                    merge: function e() {
                        var t = {};

                        function n(n, r) {
                            s(t[r]) && s(n) ? t[r] = e(t[r], n) : s(n) ? t[r] = e({}, n) : i(n) ? t[r] = n.slice() : t[r] = n
                        }
                        for (var r = 0, a = arguments.length; r < a; r++) l(arguments[r], n);
                        return t
                    },
                    extend: function(e, t, n) {
                        return l(t, (function(t, a) {
                            e[a] = n && "function" == typeof t ? r(t, n) : t
                        })), e
                    },
                    trim: function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    },
                    stripBOM: function(e) {
                        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                    }
                }
            },
            666: e => {
                var t = function(e) {
                    "use strict";
                    var t, n = Object.prototype,
                        r = n.hasOwnProperty,
                        a = "function" == typeof Symbol ? Symbol : {},
                        i = a.iterator || "@@iterator",
                        o = a.asyncIterator || "@@asyncIterator",
                        d = a.toStringTag || "@@toStringTag";

                    function s(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        s({}, "")
                    } catch (e) {
                        s = function(e, t, n) {
                            return e[t] = n
                        }
                    }

                    function c(e, t, n, r) {
                        var a = t && t.prototype instanceof p ? t : p,
                            i = Object.create(a.prototype),
                            o = new I(r || []);
                        return i._invoke = function(e, t, n) {
                            var r = u;
                            return function(a, i) {
                                if (r === f) throw new Error("Generator is already running");
                                if (r === x) {
                                    if ("throw" === a) throw i;
                                    return k()
                                }
                                for (n.method = a, n.arg = i;;) {
                                    var o = n.delegate;
                                    if (o) {
                                        var d = C(o, n);
                                        if (d) {
                                            if (d === v) continue;
                                            return d
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if (r === u) throw r = x, n.arg;
                                        n.dispatchException(n.arg)
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = f;
                                    var s = l(e, t, n);
                                    if ("normal" === s.type) {
                                        if (r = n.done ? x : _, s.arg === v) continue;
                                        return {
                                            value: s.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === s.type && (r = x, n.method = "throw", n.arg = s.arg)
                                }
                            }
                        }(e, n, o), i
                    }

                    function l(e, t, n) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, n)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    e.wrap = c;
                    var u = "suspendedStart",
                        _ = "suspendedYield",
                        f = "executing",
                        x = "completed",
                        v = {};

                    function p() {}

                    function b() {}

                    function m() {}
                    var h = {};
                    s(h, i, (function() {
                        return this
                    }));
                    var g = Object.getPrototypeOf,
                        y = g && g(g(R([])));
                    y && y !== n && r.call(y, i) && (h = y);
                    var w = m.prototype = p.prototype = Object.create(h);

                    function A(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            s(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function E(e, t) {
                        function n(a, i, o, d) {
                            var s = l(e[a], e, i);
                            if ("throw" !== s.type) {
                                var c = s.arg,
                                    u = c.value;
                                return u && "object" == typeof u && r.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                    n("next", e, o, d)
                                }), (function(e) {
                                    n("throw", e, o, d)
                                })) : t.resolve(u).then((function(e) {
                                    c.value = e, o(c)
                                }), (function(e) {
                                    return n("throw", e, o, d)
                                }))
                            }
                            d(s.arg)
                        }
                        var a;
                        this._invoke = function(e, r) {
                            function i() {
                                return new t((function(t, a) {
                                    n(e, r, t, a)
                                }))
                            }
                            return a = a ? a.then(i, i) : i()
                        }
                    }

                    function C(e, n) {
                        var r = e.iterator[n.method];
                        if (r === t) {
                            if (n.delegate = null, "throw" === n.method) {
                                if (e.iterator.return && (n.method = "return", n.arg = t, C(e, n), "throw" === n.method)) return v;
                                n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return v
                        }
                        var a = l(r, e.iterator, n.arg);
                        if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, v;
                        var i = a.arg;
                        return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, v) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
                    }

                    function P(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function S(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function I(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(P, this), this.reset(!0)
                    }

                    function R(e) {
                        if (e) {
                            var n = e[i];
                            if (n) return n.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var a = -1,
                                    o = function n() {
                                        for (; ++a < e.length;)
                                            if (r.call(e, a)) return n.value = e[a], n.done = !1, n;
                                        return n.value = t, n.done = !0, n
                                    };
                                return o.next = o
                            }
                        }
                        return {
                            next: k
                        }
                    }

                    function k() {
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    return b.prototype = m, s(w, "constructor", m), s(m, "constructor", b), b.displayName = s(m, d, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, s(e, d, "GeneratorFunction")), e.prototype = Object.create(w), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, A(E.prototype), s(E.prototype, o, (function() {
                        return this
                    })), e.AsyncIterator = E, e.async = function(t, n, r, a, i) {
                        void 0 === i && (i = Promise);
                        var o = new E(c(t, n, r, a), i);
                        return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                            return e.done ? e.value : o.next()
                        }))
                    }, A(w), s(w, d, "Generator"), s(w, i, (function() {
                        return this
                    })), s(w, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = [];
                        for (var n in e) t.push(n);
                        return t.reverse(),
                            function n() {
                                for (; t.length;) {
                                    var r = t.pop();
                                    if (r in e) return n.value = r, n.done = !1, n
                                }
                                return n.done = !0, n
                            }
                    }, e.values = R, I.prototype = {
                        constructor: I,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(S), !e)
                                for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var n = this;

                            function a(r, a) {
                                return d.type = "throw", d.arg = e, n.next = r, a && (n.method = "next", n.arg = t), !!a
                            }
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var o = this.tryEntries[i],
                                    d = o.completion;
                                if ("root" === o.tryLoc) return a("end");
                                if (o.tryLoc <= this.prev) {
                                    var s = r.call(o, "catchLoc"),
                                        c = r.call(o, "finallyLoc");
                                    if (s && c) {
                                        if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                    } else if (s) {
                                        if (this.prev < o.catchLoc) return a(o.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var a = this.tryEntries[n];
                                if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                    var i = a;
                                    break
                                }
                            }
                            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                            var o = i ? i.completion : {};
                            return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(o)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), v
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), v
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var a = r.arg;
                                        S(n)
                                    }
                                    return a
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, n, r) {
                            return this.delegate = {
                                iterator: R(e),
                                resultName: n,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = t), v
                        }
                    }, e
                }(e.exports);
                try {
                    regeneratorRuntime = t
                } catch (e) {
                    "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
                }
            },
            218: (e, t, n) => {
                var r = u;

                function a(e) {
                    var t = u;
                    return (a = typeof Symbol === t(270) && typeof Symbol[t(133)] === t(117) ? function(e) {
                        return typeof e
                    } : function(e) {
                        var n = t;
                        return e && typeof Symbol === n(270) && e[n(277)] === Symbol && e !== Symbol[n(221)] ? n(117) : typeof e
                    })(e)
                }

                function i(e, t, n, r, a, i, o) {
                    var d = u;
                    try {
                        var s = e[i](o),
                            c = s[d(169)]
                    } catch (e) {
                        if ("woGuK" === d(195)) return void n(e);
                        _0x62e9cf.resolve(_0x4375e1).then(_0x371d36, _0x47da9d)
                    }
                    if (s[d(242)]) {
                        if (d(136) != d(136)) return typeof _0x496a22;
                        t(c)
                    } else Promise[d(158)](c).then(r, a)
                }

                function o(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, a) {
                            var o = u,
                                d = e[o(176)](t, n);

                            function s(e) {
                                i(d, r, a, s, c, o(118), e)
                            }

                            function c(e) {
                                var t = o;
                                if ("QFZBI" !== t(231)) {
                                    if (_0xff6223 && (_0x25cd94(_0x4eba92) === t(160) || "function" == typeof _0x36738)) return _0x34fd43;
                                    if (void 0 !== _0xa68091) throw new _0x4b964c(t(149));
                                    return _0x30660b(_0x3e739d)
                                }
                                i(d, r, a, s, c, t(108), e)
                            }
                            s(void 0)
                        }))
                    }
                }

                function d(e, t) {
                    return (d = Object.setPrototypeOf || function(e, t) {
                        return e[u(211)] = t, e
                    })(e, t)
                }

                function s(e, t) {
                    var n = u;
                    if (t && (a(t) === n(160) || typeof t === n(270))) return t;
                    if (void 0 !== t) throw new TypeError(n(149));
                    return l(e)
                }

                function c() {
                    var e = ["XXpLT", "PLAYER_CONTROLS", "adUnit", "muted", "filter", "ignorePolicyChangeEnableTime", "prototype", "country", "UBP_DEBUG", "isDirectEnabled", "end", "adArray", "push", "log", "buildGoogleTag", "prev", "QFZBI", "volumePanel", "getPrototypeOf", "setPrototypeOf", "QRZGb", "ntNao", "XyqyJ", "FAyjI", "158868aHmMGy", "stop", "https://ads.brightcove.com/ads?vc=1&dur=10", "done", "audio_video", "PLAYER_WIDTH_MB", "Message sent", "dEoeQ", "fullscreenToggle", "PLAYER_FLUID", "visitCount", "DATA", "wrap", "getTimezoneOffset", "ignorePolicyChanges", "BezFn", "mark", "max_ad_duration", "DIRECT_CAMPAIGN", "zcFzE", "GGmke", "google", "hcScR", "417332fELUrf", "GZlZM", "getItem", "PLAYER_HEIGHT", "paramFounder", "test", "DIRECT", "pictureInPictureToggle", "function", "googleAdTagData", "mobileCheck", "includes", "unibots-video", "ignorepolicyCheck", "pdBXb", "constructor", "274694hAGowy", "instream", "&vad_type=linear", "AUTOPLAY_OFF", "forEach", "wUZYs", "3SNshKH", "PLAYER_HEIGHT_MB", "1x1%7C320x180%7C320x240%7C400x225%7C400x300%7C640x360%7C640x480", "useCustomParams", "mode", "&tfcd=0&npa=0&gdfp_req=1&unviewed_position_start=1&impl=s&vpos=preroll&output=xml_vast4&adsafe=medium", "ADS_CALL_TYPE", "UkQYo", "vjsOptions", "2120eCcrNP", "adCodes", "href", "USE_CUSTOM_PARAMS", "GOOGLE", "vad_type=linear", "ignorePolicyChangeEnabled", "suffix", "MHJxX", "hBeuv", "addDescURL", "CqVbQ", "Super expression must either be null or a function", "IGNORE_POLICY_CHNAGE", "map", "isDirect", "throw", "adTag", "40fyxKtZ", "AD_MODE", "sent", "bunCQ", "buildAdCodes", "AD_TAG_NAME", "defRegEx", "symbol", "next", "cpm", "addSampleAdCodes", "construct", "szxnA", "dnHpH", "20ADIDpT", "bhkRf", "xml_vast4", "setVJS", "concat", "call", "keys", "CEnwJ", "126cvTkrc", "iterator", "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=", "parent", "yDJuS", "valueOf", "isFluid", "%%CACHEBUSTER%%", "PLAY_AD_UNMUTED", "content_video", "this hasn't been initialised - super() hasn't been called", "abrupt", "gVySC", "nLIfb", "YBteS", "firstVisit", "location", "Derived constructors may only return object or undefined", "length", "countUserFrequency", "listenerElement", "isDevMode", "https://pubads.g.doubleclick.net/gampad/ads?", "getTime", "googleAdCodes", "prefix", "resolve", "UsYJM", "object", "MODE", "ignorePolicyChangeUserPercent", "deleteProperty", "adTagName", "miwMA", "108HeXUyD", "ignorePolicyChangeUserFrequency", "Cannot call a class as a function", "value", "ENABLE_TIME", "hasOwnProperty", "ceil", "KzoDJ", "([\\s\\S]*?)", "vblVF", "apply", "YUPZg", "directAdTagData", "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear%26city%3Dgpt&correlator=", "AD_TAGS", "yGSSX", "plControls", "247500fUlOVk", "VIbBo", "setAdTags", "mJFxU", "direct", "success", "googleAdTags", "sham", "return", "random", "checkUbAdx", "CPM", "woGuK", "BpyMU", "match", "setItem", "xfHuA", "checkAndReplaceCachebuster", "88451MddUxs", "isRepeatedStructure", "defineProperty", "26935aGsrPh", "clientData", "Helper", "IS_ACTIVE", "directVastTags", "PERCENT_USERS_TO_RUN", "split", "__proto__", "rTGcD", "PLAYER_WIDTH", "adsArray"];
                    return (c = function() {
                        return e
                    })()
                }

                function l(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function u(e, t) {
                    var n = c();
                    return (u = function(e, t) {
                        return n[e -= 101]
                    })(e, t)
                }

                function _(e) {
                    var t = u;
                    return (_ = Object[t(234)] ? Object[t(233)] : function(e) {
                        var n = t;
                        if (n(237) == n(237)) return e[n(211)] || Object.getPrototypeOf(e);
                        _0x54b578[n(299)] = !1, _0x326036 >= _0xa619e8[_0x216c1f] && _0x2cbb95 <= _0x1d1ca3[_0x32f8a1 + 1] && (_0x492af1[n(299)] = !0, _0xbdfd86 = _0x5f0590[n(150)])
                    })(e)
                }

                function f(e, t, n) {
                    var r = u;
                    if (t in e) {
                        if (r(113) === r(196)) {
                            if (void 0 === _0x786c68) throw new _0x498d68(r(142));
                            return _0x2205eb
                        }
                        Object[r(203)](e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        })
                    } else e[t] = n;
                    return e
                }! function(e, t) {
                    for (var n = u, r = e();;) try {
                        if (111035 == parseInt(n(204)) / 1 + -parseInt(n(262)) / 2 * (parseInt(n(284)) / 3) + -parseInt(n(239)) / 4 + -parseInt(n(293)) / 5 * (-parseInt(n(132)) / 6) + -parseInt(n(278)) / 7 * (-parseInt(n(110)) / 8) + -parseInt(n(183)) / 9 * (-parseInt(n(124)) / 10) + parseInt(n(201)) / 11 * (parseInt(n(166)) / 12)) break;
                        r.push(r.shift())
                    } catch (e) {
                        r.push(r.shift())
                    }
                }(c);
                var x = function(e) {
                    ! function(e, t) {
                        var n = u;
                        if (typeof t !== n(270) && null !== t) throw new TypeError(n(104));
                        e[n(221)] = Object.create(t && t[n(221)], {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && d(e, t)
                    }(a, e);
                    var t, n, r = (t = a, n = function() {
                        var e = u;
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct[e(190)]) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return e(254) === e(145) ? (_0x5680e6 = _0xe7a9e2.setPrototypeOf ? _0x14561a[e(233)] : function(t) {
                                var n = e;
                                return t.__proto__ || _0x2c0607[n(233)](t)
                            }, _0x5428a3(_0x216820)) : (Boolean[e(221)][e(137)].call(Reflect.construct(Boolean, [], (function() {}))), !0)
                        } catch (e) {
                            return !1
                        }
                    }(), function() {
                        var e, r = u,
                            a = _(t);
                        if (n) {
                            var i = _(this)[r(277)];
                            e = Reflect[r(121)](a, arguments, i)
                        } else e = a.apply(this, arguments);
                        return s(this, e)
                    });

                    function a(e) {
                        var t, n, i, d, s, c, _, x, v, p, b, m, h, g, y = u;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError(u(168))
                        }(this, a), f(l(h = r[y(129)](this)), "desc_url", "about:srcdoc" != window[y(148)][y(295)] ? encodeURIComponent(window[y(148)][y(295)]) : encodeURIComponent(window[y(135)][y(148)][y(295)])), f(l(h), "videoSrc", ""), f(l(h), y(214), adArray = []), f(l(h), y(294), []), f(l(h), "videoElement", y(141)), f(l(h), y(208), []), f(l(h), y(217), {
                            google: {
                                prefix: y(154),
                                sz: y(286),
                                output: y(126),
                                ad_type: y(243),
                                env: y(279),
                                suffix: y(289)
                            },
                            defRegEx: function(e, t) {
                                var n = y;
                                return new RegExp("" [n(128)](e, n(174))[n(128)](t))
                            },
                            buildGoogleTag: function(e) {
                                var t = y;
                                if (t(283) == t(283)) {
                                    var n = arguments[t(150)] > 1 && void 0 !== arguments[1] && arguments[1],
                                        r = "iu",
                                        a = "&",
                                        i = "&cust_params=KV1%3D",
                                        o = e[t(197)](this[t(116)](r, a)),
                                        d = o[0].replace("&", "");
                                    this[t(260)][t(300)].includes(t(298)) || (this[t(260)][t(300)] = t(280) + this[t(260)].suffix);
                                    var s = this[t(260)][t(157)] + d + this.paramFounder("sz", e, !0) + this[t(260)][t(300)] + this[t(266)](t(256), e),
                                        c = n ? s + i : s;
                                    return c
                                }
                                _0x1b8a78[t(106)]((function(e) {
                                    var n, r, a, i = t;
                                    e[i(180)][i(273)](_0x13f6bf.adUnit[i(260)].iu) ? _0x1c3dba[i(189)].push(e) : _0x13bf86[i(208)][i(227)]((a = {
                                        adTag: _0x10da1d[i(200)](e[i(180)])
                                    }, _0x31df88(a, i(109), _0x2a97ab[i(200)](e[i(180)])), _0x46c3b0(a, i(119), null !== (n = null == e ? void 0 : e[i(194)]) && void 0 !== n ? n : 0), _0x219015(a, "adTagName", e[i(115)]), _0x1abb65(a, i(107), null !== (r = null == e ? void 0 : e[i(257)]) && void 0 !== r && r), a))
                                }))
                            },
                            getTimeStamp: function() {
                                var e = y;
                                if ("CbSNW" !== e(236)) return +new Date;
                                switch (_0x314181[e(230)] = _0x405362[e(118)]) {
                                    case 0:
                                        return _0x5bcf30.next = 2, _0x294b93.ignorePolicyChanges();
                                    case 2:
                                        _0x5ae960[e(275)] = _0x4dc199[e(112)], _0x3a3445[e(292)] = {
                                            autoplay: !1,
                                            fluid: _0x966f1[e(138)],
                                            muted: !1,
                                            controls: _0x929727[e(182)],
                                            loadingSpinner: !0,
                                            width: _0x3dd7d5[e(272)] ? _0xae630b[e(205)][e(244)] : _0x5e0ea9[e(205)][e(213)],
                                            height: _0x3cfd7b[e(272)] ? _0x21434d[e(205)][e(285)] : _0x51725d[e(205)][e(265)],
                                            controlBar: (_0x487d5a = {
                                                volumePanel: !1
                                            }, _0x198d31(_0x47e1f5, e(232), {
                                                inline: !1,
                                                vertical: !1
                                            }), _0x32914d(_0x29fe93, e(269), !1), _0x5d1b54(_0x671ce9, e(247), !1), _0x757e0f)
                                        }, _0x5a08bd[e(275)] || _0x190ab1.deleteProperty(_0x255a04[e(292)], e(218));
                                    case 5:
                                    case e(225):
                                        return _0x223de6.stop()
                                }
                            },
                            adxChecker: function(e) {
                                var t = y;
                                if ("FoESW" === t(125)) return _0xa83a4[t(211)] = _0x248a64, _0x484547;
                                var n = t(187);
                                if (e)
                                    if (t(123) === t(186)) {
                                        var r = _0x11bd8f(this)[t(277)];
                                        _0x8949e = _0x376ad0[t(121)](_0x5bb752, arguments, r)
                                    } else {
                                        var a = {
                                            main: 21928950349,
                                            new_main: 22082859479,
                                            cr_ads: 23027927350,
                                            affinity: 21930596546
                                        };
                                        Object[t(130)](a).forEach((function(t) {
                                            e.includes(a[t]) && (n = t)
                                        }))
                                    }
                                return n
                            },
                            paramFounder: function(e, t) {
                                var n = y;
                                if (n(215) !== n(173)) {
                                    var r, a = arguments[n(150)] > 2 && void 0 !== arguments[2] && arguments[2],
                                        i = e + "=",
                                        o = "&",
                                        d = t[n(197)](this.defRegEx(i, o));
                                    if (d) r = "&".concat(i) + d[1];
                                    else if ("miwMA" === n(165)) {
                                        var s = t.split("&" + i);
                                        r = s.length > 1 && "" != s[1] ? "&" [n(128)](i + s[1]) : null
                                    } else _0x503cb1[n(156)](), _0x3cc498.setAdTags(), _0x11d6e1({
                                        status: n(188),
                                        msg: "Message sent"
                                    });
                                    return !this.checkUbAdx(t) && r ? r : a && this.checkUbAdx(t) && this[n(260)][n(171)](e) ? "&".concat(i + this[n(260)][e]) : ""
                                }
                                for (;;) switch (_0x44bb37[n(230)] = _0x53beb9[n(118)]) {
                                    case 0:
                                        return _0x4ac2e7.next = 2, _0x1dac3a.ignorePolicyChanges();
                                    case 2:
                                        _0x2b83ea.ignorepolicyCheck = _0xf5a0fd.sent, _0x51734d.vjsOptions = {
                                            autoplay: !1,
                                            fluid: _0x3ac7b8[n(138)],
                                            muted: !1,
                                            controls: _0x2ff608[n(182)],
                                            loadingSpinner: !0,
                                            width: _0x25a721[n(272)] ? _0x35d0e9[n(205)][n(244)] : _0x194664[n(205)][n(213)],
                                            height: _0x3a6c2c[n(272)] ? _0x303808[n(205)][n(285)] : _0x57dfe2.clientData.PLAYER_HEIGHT,
                                            controlBar: (_0x355317 = {
                                                volumePanel: !1
                                            }, _0x2e5ee5(_0x227a27, n(232), {
                                                inline: !1,
                                                vertical: !1
                                            }), _0x26200c(_0x5b167f, n(269), !1), _0x1820aa(_0xf97c58, n(247), !1), _0x248210)
                                        }, _0x10d979.ignorepolicyCheck || _0x45cc2d[n(163)](_0x1fb720[n(292)], n(218));
                                    case 5:
                                    case n(225):
                                        return _0x1d0b74[n(240)]()
                                }
                            },
                            checkUbAdx: function(e) {
                                var t = y,
                                    n = !1,
                                    r = {
                                        main: 21928950349,
                                        new_main: 22082859479,
                                        cr_ads: 23027927350,
                                        affinity: 21930596546
                                    };
                                return Object[t(130)](r)[t(282)]((function(a) {
                                    e[t(273)](r[a]) && (n = !0)
                                })), n
                            }
                        }), f(l(h), y(114), o(regeneratorRuntime[y(255)]((function e() {
                            var t = y;
                            return "PLrZx" !== t(175) ? regeneratorRuntime[t(251)]((function(e) {
                                for (var n = t;;) {
                                    var r, a, i;
                                    if ("VIbBo" !== n(184)) _0x216c17[n(180)][n(273)](_0x580490[n(217)].google.iu) ? _0x1fd93a[n(189)][n(227)](_0x1b12dd) : _0x3e5c7e[n(208)].push((i = {
                                        adTag: _0x43c10f[n(200)](_0x5c3cd1[n(180)])
                                    }, _0x981f2e(i, n(109), _0x4aa450[n(200)](_0x24b275.AD_TAGS)), _0x325bbd(i, n(119), null !== (r = null === _0x13c2cd || void 0 === _0x32367b ? void 0 : _0x5b11d1[n(194)]) && void 0 !== r ? r : 0), _0x367cfd(i, n(164), _0x2ee759[n(115)]), _0x34db6e(i, n(107), null !== (a = null === _0x21b839 || void 0 === _0x39c55a ? void 0 : _0x133e1a[n(257)]) && void 0 !== a && a), i));
                                    else switch (e[n(230)] = e[n(118)]) {
                                        case 0:
                                            return e[n(143)](n(191), new Promise((function(e) {
                                                var t = n;
                                                if (t(212) != t(212)) {
                                                    if (typeof _0x372e9 !== t(270) && null !== _0x1ef9a3) throw new _0x2f78bf(t(104));
                                                    _0x1ab30f[t(221)] = _0x10df59.create(_0x2965e9 && _0x5ea3d4[t(221)], {
                                                        constructor: {
                                                            value: _0x157ef4,
                                                            writable: !0,
                                                            configurable: !0
                                                        }
                                                    }), _0x152c1f && _0xf3f865(_0x4ff0d4, _0x3d9465)
                                                } else if (h[t(224)])
                                                    if (t(131) === t(276)) _0x267fe5 = _0x1560db[t(176)](this, arguments);
                                                    else {
                                                        var r = h[t(178)][t(250)][t(219)]((function(e) {
                                                                var n = t;
                                                                return e.IS_ACTIVE && e[n(257)] && null == e[n(194)]
                                                            })),
                                                            a = h[t(178)][t(250)][t(219)]((function(e) {
                                                                var n = t;
                                                                return e[n(207)] && null != e[n(194)]
                                                            }));
                                                        if (r.length > 0) {
                                                            if ("Nnagv" === t(144)) return _0x59c5c8.IS_ACTIVE && _0x3ab7ec[t(257)] && _0xa78e82[t(194)] == _0x3dfba4;
                                                            r[t(282)]((function(e) {
                                                                var n, r, a, i, o = t;
                                                                if (o(238) != o(238)) {
                                                                    var d = _0xb30ed1();
                                                                    return function() {
                                                                        var e, t = o,
                                                                            n = _0x80e7a3(_0x3e7d7e);
                                                                        if (d) {
                                                                            var r = _0x5ab36f(this)[t(277)];
                                                                            e = _0x2b6ab2[t(121)](n, arguments, r)
                                                                        } else e = n.apply(this, arguments);
                                                                        return _0x541d7f(this, e)
                                                                    }
                                                                }
                                                                e.AD_TAGS[o(273)](h[o(217)][o(260)].iu) ? h.adCodes.push({
                                                                    adTag: h[o(217)][o(229)](e.AD_TAGS, h[o(287)]),
                                                                    cpm: null !== (n = null == e ? void 0 : e[o(194)]) && void 0 !== n ? n : 0,
                                                                    adTagName: e[o(115)]
                                                                }) : o(146) == o(146) ? h[o(208)][o(227)]((f(i = {
                                                                    adTag: h[o(200)](e[o(180)])
                                                                }, o(109), h[o(200)](e.AD_TAGS)), f(i, o(119), null !== (r = null == e ? void 0 : e.CPM) && void 0 !== r ? r : 0), f(i, o(164), e[o(115)]), f(i, o(107), null !== (a = null == e ? void 0 : e[o(257)]) && void 0 !== a && a), i)) : _0x186ee3[o(282)]((function(e) {
                                                                    var t, n, r, a, i = o;
                                                                    e[i(180)][i(273)](_0x299775[i(217)].google.iu) ? _0x38fbce.adCodes[i(227)]({
                                                                        adTag: _0x39ba95[i(217)][i(229)](e[i(180)], _0x167ac3[i(287)]),
                                                                        cpm: null !== (t = null == e ? void 0 : e[i(194)]) && void 0 !== t ? t : 0,
                                                                        adTagName: e.AD_TAG_NAME
                                                                    }) : _0x42a2da[i(208)][i(227)]((a = {
                                                                        adTag: _0x38f57a.checkAndReplaceCachebuster(e[i(180)])
                                                                    }, _0x5ade66(a, i(109), _0x5a2a79.checkAndReplaceCachebuster(e[i(180)])), _0x50467c(a, i(119), null !== (n = null == e ? void 0 : e[i(194)]) && void 0 !== n ? n : 0), _0x144b6f(a, i(164), e[i(115)]), _0x41a44d(a, i(107), null !== (r = null == e ? void 0 : e[i(257)]) && void 0 !== r && r), a))
                                                                }))
                                                            }))
                                                        }
                                                        if (a[t(150)] > 0)
                                                            if (t(159) == t(159)) a[t(106)]((function(e) {
                                                                var n, r, a, i = t;
                                                                e[i(180)][i(273)](h[i(217)][i(260)].iu) ? h[i(189)][i(227)](e) : h.directVastTags[i(227)]((f(a = {
                                                                    adTag: h[i(200)](e.AD_TAGS)
                                                                }, "adTag", h[i(200)](e[i(180)])), f(a, i(119), null !== (n = null == e ? void 0 : e[i(194)]) && void 0 !== n ? n : 0), f(a, "adTagName", e[i(115)]), f(a, i(107), null !== (r = null == e ? void 0 : e.DIRECT_CAMPAIGN) && void 0 !== r && r), a))
                                                            }));
                                                            else {
                                                                var i = (new _0x345084).getTime();
                                                                _0xb030d1.getItem(t(249)) && (new _0x53af6e)[t(155)]() - _0x12d82b(_0x156954.getItem(t(147))) < 864e5 ? _0x29c68b[t(198)]("visitCount", _0x660e6(_0x14ce8f[t(264)](t(249))) + 1) : (_0x248d8e.setItem(t(249), 1), _0x52551f[t(198)](t(147), i))
                                                            }
                                                        h[t(156)](), h.setAdTags(), e({
                                                            status: "success",
                                                            msg: "Message sent"
                                                        })
                                                    }
                                                else h[t(156)](), h[t(185)](), e({
                                                    status: t(188),
                                                    msg: t(245)
                                                })
                                            })));
                                        case 1:
                                        case n(225):
                                            return e[n(240)]()
                                    }
                                }
                            }), e) : _0x1f32ba
                        })))), f(l(h), "checkAndReplaceCachebuster", (function(e) {
                            var t = y;
                            if (e[t(273)](t(139))) {
                                if ("szxnA" === t(122)) return e.replace(t(139), +new Date);
                                _0x463df3[_0x143747](_0x414ef1)[t(169)]
                            }
                            return e
                        })), f(l(h), "googleAdCodes", (function() {
                            var e, t, n = y;
                            "YUPZg" === n(177) ? null !== (e = h[n(271)]) && void 0 !== e && e[n(207)] && null !== (t = h[n(271)]) && void 0 !== t && t[n(250)] && h[n(271)][n(250)][n(150)] > 0 && (n(263) == n(263) ? (h[n(271)][n(250)][n(106)]((function(e) {
                                var t = n;
                                return h[t(189)][t(227)](e)
                            })), h[n(189)].sort((function(e, t) {
                                var r = n;
                                return t[r(194)] - e[r(194)]
                            }))[n(282)]((function(e) {
                                var t = n;
                                if (t(199) === t(259)) return new _0x38ccec("".concat(_0x4f58cd, "([\\s\\S]*?)")[t(128)](_0x445677));
                                e[t(207)] && h[t(294)][t(227)]({
                                    adTag: h[t(217)][t(193)](e[t(180)]) ? h[t(217)].buildGoogleTag(e.AD_TAGS, h[t(287)]) : h.checkAndReplaceCachebuster(e[t(180)]),
                                    cpm: e[t(194)],
                                    adTagName: e[t(115)]
                                })
                            }))) : _0x5234cf(_0x3d6bdf, _0x5d615d, _0x225ac7, _0x5eca5a, _0x4dae94, "next", _0x4f526b)) : _0x386cfe = "&".concat(_0x5a9689) + _0xc6d467[1]
                        })), f(l(h), y(151), (function() {
                            var e = y,
                                t = (new Date).getTime();
                            localStorage[e(264)](e(249)) && (new Date)[e(155)]() - Number(localStorage[e(264)](e(147))) < 864e5 ? e(291) === e(246) ? _0x2fbe3d = function(e) {
                                return typeof e
                            } : localStorage[e(198)](e(249), Number(localStorage[e(264)]("visitCount")) + 1) : (localStorage[e(198)](e(249), 1), localStorage.setItem(e(147), t))
                        })), f(l(h), y(155), (g = o(regeneratorRuntime.mark((function e(t, n) {
                            var r, a, i, o = u;
                            if ("cMjWK" !== o(301)) return regeneratorRuntime[o(251)]((function(e) {
                                for (var d = o;;) switch (e[d(230)] = e[d(118)]) {
                                    case 0:
                                        return r = new Date, a = r[d(252)](), i = 60 * Number(t) + Number(n) + Number(a), e[d(143)](d(191), i);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e);
                            _0x5bfb43[o(198)](o(249), 1), _0x59e9c0[o(198)](o(147), _0x344f63)
                        }))), function(e, t) {
                            var n = u;
                            return g[n(176)](this, arguments)
                        })), f(l(h), y(253), o(regeneratorRuntime[y(255)]((function e() {
                            var t, n, r, a, i, o, d, s, c, l, _, f, x, v, p, b, m, g, y, w;
                            return regeneratorRuntime.wrap((function(e) {
                                for (var A = u;;) switch (e[A(230)] = e[A(118)]) {
                                    case 0:
                                        if (p = !1, h.ignorePolicyChangeEnabled = null !== (t = null === (n = h[A(205)]) || void 0 === n || null === (r = n[A(105)]) || void 0 === r ? void 0 : r.IS_ENABLE) && void 0 !== t && t, h[A(162)] = null !== (a = null === (i = h[A(205)]) || void 0 === i || null === (o = i.IGNORE_POLICY_CHNAGE) || void 0 === o ? void 0 : o[A(209)]) && void 0 !== a ? a : 0, h[A(220)] = null !== (d = null === (s = h[A(205)]) || void 0 === s || null === (c = s.IGNORE_POLICY_CHNAGE) || void 0 === c ? void 0 : c[A(170)]) && void 0 !== d ? d : "", h[A(167)] = null !== (l = null === (_ = h[A(205)]) || void 0 === _ || null === (f = _[A(105)]) || void 0 === f ? void 0 : f.USER_FREQUENCY_CAP) && void 0 !== l && l, null !== (x = h[A(205)]) && void 0 !== x && x[A(140)] && (h[A(299)] = !0), !h[A(299)]) {
                                            e[A(118)] = 14;
                                            break
                                        }
                                        return h[A(151)](), v = new Date, window.geoData[A(222)], e[A(118)] = 12, h[A(155)](v.getHours(), v.getMinutes());
                                    case 12:
                                        b = e[A(112)], 0 != h[A(162)] && (h[A(299)] = Math[A(172)](100 * Math[A(192)]()) < h.ignorePolicyChangeUserPercent);
                                    case 14:
                                        if (h[A(299)] && h[A(167)] && Number(localStorage[A(264)](A(249))) > h[A(167)] && (h[A(299)] = !1), window[A(223)] && console[A(228)](A(299), h[A(299)]), !h.ignorePolicyChangeEnabled || p) {
                                            e.next = 30;
                                            break
                                        }
                                        if (m = [], !h[A(220)] || !h[A(220)][A(150)]) {
                                            e[A(118)] = 28;
                                            break
                                        }
                                        g = 0;
                                    case 20:
                                        if (!(g < h[A(220)][A(150)])) {
                                            if ("QRZGb" === A(235)) {
                                                e.next = 28;
                                                break
                                            }
                                            _0x2636b5(_0x2f796b)
                                        }
                                        return e.next = 23, h[A(155)](h[A(220)][g][A(210)](":")[0], h.ignorePolicyChangeEnableTime[g].split(":")[1]);
                                    case 23:
                                        y = e[A(112)], m[A(227)](y);
                                    case 25:
                                        g++, e[A(118)] = 20;
                                        break;
                                    case 28:
                                        for (w = 0; w < m[A(150)]; w += 2) h[A(299)] = !1, b >= m[w] && b <= m[w + 1] && (h[A(299)] = !0, w = m[A(150)]);
                                        window.UBP_DEBUG && console[A(228)](h[A(299)], b, m);
                                    case 30:
                                        return window.vpmute = h.ignorePolicyChangeEnabled, e.abrupt("return", h[A(299)]);
                                    case 32:
                                    case A(225):
                                        return e[A(240)]()
                                }
                            }), e)
                        })))), f(l(h), "setVJS", o(regeneratorRuntime[y(255)]((function e() {
                            var t, n = y;
                            return n(261) != n(261) ? +new _0x2f5a16 : regeneratorRuntime.wrap((function(e) {
                                var r = n;
                                if ("nDhMl" === r(181)) return _0x550e2e.__proto__ || _0xbace09[r(233)](_0x4beded);
                                for (;;)
                                    if ("akfut" !== r(101)) switch (e.prev = e[r(118)]) {
                                        case 0:
                                            return e[r(118)] = 2, h[r(253)]();
                                        case 2:
                                            h.ignorepolicyCheck = e[r(112)], h[r(292)] = {
                                                autoplay: !1,
                                                fluid: h.isFluid,
                                                muted: !1,
                                                controls: h[r(182)],
                                                loadingSpinner: !0,
                                                width: window.mobileCheck ? h[r(205)][r(244)] : h[r(205)][r(213)],
                                                height: window[r(272)] ? h.clientData.PLAYER_HEIGHT_MB : h[r(205)][r(265)],
                                                controlBar: (t = {
                                                    volumePanel: !1
                                                }, f(t, r(232), {
                                                    inline: !1,
                                                    vertical: !1
                                                }), f(t, r(269), !1), f(t, r(247), !1), t)
                                            }, h[r(275)] || Reflect[r(163)](h[r(292)], r(218));
                                        case 5:
                                        case r(225):
                                            return e[r(240)]()
                                    } else _0x2971f3[_0x4ca4ca] = _0x328764
                            }), e)
                        })))), f(l(h), y(102), (function() {
                            var e = y;
                            return h[e(294)][e(106)]((function(t) {
                                var n, r, a = e;
                                return null !== (n = null === (r = h[a(271)]) || void 0 === r ? void 0 : r[a(207)]) && void 0 !== n && n ? t : t[a(109)]
                            }))
                        })), f(l(h), y(120), (function() {
                            var e = y;
                            return [e(241), e(179), e(134), "https://ads.brightcove.com/ads?vc=1&dur=5"]
                        })), f(l(h), y(185), o(regeneratorRuntime[y(255)]((function e() {
                            var t = y;
                            return t(258) == t(258) ? regeneratorRuntime.wrap((function(e) {
                                for (var n = t;;) {
                                    var r, a;
                                    if ("badZP" === n(103)) return null !== (r = null === (a = _0x1a64eb[n(271)]) || void 0 === a ? void 0 : a[n(207)]) && void 0 !== r && r ? _0x4a2190 : _0xca7cca[n(109)];
                                    switch (e[n(230)] = e[n(118)]) {
                                        case 0:
                                            sessionStorage[n(264)]("AD_MODE") == n(267) && (h[n(288)] = !1), h[n(226)] = h.mode && h[n(294)][n(150)] > 0 ? h[n(102)]() : h.addSampleAdCodes();
                                        case 2:
                                        case n(225):
                                            return e.stop()
                                    }
                                }
                            }), e) : void(_0x5b2587.includes(_0x2caad8[_0x17bc34]) && (_0x3019de = _0x55efb9))
                        })))), h[y(205)] = e, h[y(202)] = 1 == ("ADS_CALL_TYPE" in h[y(205)] && h[y(205)][y(290)]), h.mode = (y(111) in h[y(205)] && h[y(205)][y(111)]) != y(267), h[y(153)] = "development" == {
                            CURRENT_CLIENT: "theuploadhub",
                            LOCAL_URL: "http://localhost:8080",
                            MODE: "production"
                        }[y(161)], h[y(182)] = !(y(216) in h[y(205)]) || 0 != h[y(205)][y(216)], h[y(138)] = y(248) in h[y(205)] && 1 == h[y(205)].PLAYER_CONTROLS, h[y(152)] = y(274), h.autoplayOff = y(281) in h[y(205)] && 1 == h[y(205)][y(281)], h[y(287)] = null !== (t = null === (n = h[y(205)]) || void 0 === n || null === (i = n.AD_SOURCES) || void 0 === i || null === (d = i.GOOGLE) || void 0 === d ? void 0 : d[y(296)]) && void 0 !== t && t, h.ignorepolicyCheck, h[y(127)](), h[y(271)] = null !== (s = null === (c = h[y(205)]) || void 0 === c || null === (_ = c.AD_SOURCES) || void 0 === _ ? void 0 : _[y(297)]) && void 0 !== s ? s : [], h[y(178)] = null !== (x = null === (v = h[y(205)]) || void 0 === v || null === (p = v.AD_SOURCES) || void 0 === p ? void 0 : p[y(268)]) && void 0 !== x ? x : [], h[y(224)] = null !== (b = null === (m = h.directAdTagData) || void 0 === m ? void 0 : m[y(207)]) && void 0 !== b && b, h.googleAdTags = [], h
                    }
                    return a
                }(n(221)[r(206)]);
                t.Client = x
            },
            989: (e, t, n) => {
                var r = a;

                function a(e, t) {
                    var n = o();
                    return (a = function(e, t) {
                        return n[e -= 358]
                    })(e, t)
                }

                function i(e) {
                    return function(e) {
                        if (Array.isArray(e)) return c(e)
                    }(e) || function(e) {
                        var t = a;
                        if (typeof Symbol !== t(1162) && null != e[Symbol[t(1487)]] || null != e["@@iterator"]) return Array[t(1499)](e)
                    }(e) || s(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o() {
                    var e = ["pbjsRequstBids", "custParams", "ZegEc", "playOnDomClick", "lnBMg", "Ad Pod Working...", "HlrmN", "IuNas", "jGmTU", "Xenkk", "MxqdS", "getConfig", "MNAAB", "userAgent", "zXwtj", "AQdtR", "qAblH", "getPreviousAdIndex", "Arguments", "rzJzr", "plcmt", "target", "table", "tRtMO", "Second Pod index is : ", "registerComponent", "repeat", "<?xml", "KEEP_WATCHING", "addBasicUprFlag", "XfDZz", "llueH", "ogUaD", "inReadPlayerLogo", "tWJGq", "MANAGE_DEALY_FOR_UNFILL_REQUESTS", "removePlcmtForVpmute1", "PYRZP", "sESMm", "floatingonMobile", "DXqDd", "yDVzO", "NjTom", "visibility", "player can autoplay -", "Ad successfully moved.", "delayForUnfillRequests", "push", "Prebid Ad will be request next in ", "ObPLt", "VOLUME_SPECIFIC_KV", "IMG_ALT", "34865920UdUsDe", "closeButton", "vQhxb", "vlpPE", "GEO_COUNTRY", "KWNvf", "removeEventListener", "<vast", "call", "vjs-icon-next-item", "zirsu", "YeuxE", "mobAdWidth", "VZmsx", "endLinearAdMode", "ubsticky", "VmlnX", "enableContentCategorywise", "annsu", "%c 🗣️ :  ", "ueNkR", "7965fb7f-7867-49d3-8ff9-4ce0340d38a8", "this hasn't been initialised - super() hasn't been called", "Set", "YcHQw", "LpLFO", "addService", "runAdWithoutView", "done", "string", "INSECURE", "videoSrc", "GVWwx", "getDuration", "insertBefore", "UByOU", "destroyAdAfter7Sec", "USE_CUSTOM_PARAMS", "scroll", ".ubp-close", "floatPlayerOnceViewed", "JpLgA", "video", "hideClosebuttonInread", "HDmLf", "player clicked", "lSSxJ", "textContent", "location", "checkPlayerViewedOnce", "----------//----------", "IOMKl", "onFkT", "UBP not loaded yet", "desc_url", "viewTrackerArray", "floatPlayer", "xmlFlags", "paused", "prebidLog", "wRcKt", "removeStickyPlayer", "opacity", "registerInternalEvent", "&cust_params=", "UEBXq", "shift", "adCount", "MDMby", "dispose", "started", "FLOAT_ONCE_PER_USER", "isVpaidModified", "MwnAs", "reInitializePlayer", "AFTER", "setPlcmt", "ad_request", "HZyVj", "oHjfs", "next", "kpFpf", "IS_PERMANENT_STICKY", "btWHR", "constructor", "accessGlobals", "HLS_ENABLED", "ima-controls-div-showing", "sendFirstAdPaused", "ENABLE_PLAYER_IN_VIEW_PERCENT", "EJXNu", "runCompanionAd", "vjsOptionsVdoSrc", "getAdServedCountPB", "FLOATING_POSITION_MB", "videoSrcManagerForPlaylist", "exc", "JryPl", "hostname", "ftdex", "transparent", "_blank", "skipTime", "runKeepWatching, Keep Watching clicked. Timer disabled for all instances.", "contribAdsSettings", "DEFAULT_LOGO_URL", "Changing in ", "SHOW_AD_ONCE_VIEWED", "mediaType", "specialObj", "MAIN", "sans-serif", "wTcdX", "stickyBottom", "el_", " Seconds", "first time load only", "env", "eindw", "moneycontrol", "setVolume", "addCloseButton", "return", "YcrKO", "includes", "iosAutoplayIssue", "sendAdWhenPaused", "trigger", "diTNm", "// Muted autoplay is allowed.", "ubp_logo", "Common", "Play", "bool", "nonCompliancePlayerEnabled", "zMBOs", "RhDED", "ubp-close", "BNHhC", "lastServedIndex", "rZxae", "autoplayOff", "getPlayers", "currentAdIndex", "disableSendAdWhenPaused", " index", "xJNAV", "jyPxA", "ENABLE_LOGO", "No GAM Tags added or Goolge Ads Not Enabled from Dashboard ", "isOutOfViewport", "%26ctry%3D", "qkHgx", "prebid", "aLQgY", "requestAds", "dHOYM", "ScHXJ", "wOvoH", "wrap", "makePrerollRequest_test", "EwIqa", "hOakF", "mark", "google", "adIndex", "tXpHA", "resetPlayerOnAdsLengthExceeded", "parent", "lqozJ", "playerRun", "keepFloating", "TFTmx", "AD_SOURCES", "AVFfV", "vqCVt", "video/mp4", "REjtV", "HIDE_CLOSE_BTN_INREAD", "pp_debug", "PL_CUSTOM_BTN_LINK_WITH_VIDEO_API", "Initializing companion ad...", "trying to mute player then pause after play for sending ad when paused", "spEqM", "isManuallyPaused", "absolute", "m3u8", "warn", "getItem", "LOWER_LIMIT_", "QyoBr", "UgSWh", "jMfCA", "ALyyN", "listenerElement", "script", "visibilityState", "createAdsArray", "disableNextSnapshotRestore", "object", "shuffleAdsarray", "resetAdArrayCount", "RYtMm", "&cust_params=b_upr%3Doff%26", "ubp_pbjs_debug", "vrzrG", "xhXJQ", "prebidAdRequested", "123973sjZllF", "sent", "waitToAutoplay", "saSsM", "NuIlp", "href", "className", "viewportfirstFlag", "kvRepeatVarCrAds", "SPECIAL_LOGO", "ubVideo", "Zdwgt", "CUSTOM_CDN_LINK", "Player Reset : ", "FFRBn", "jGHgZ", "Super expression must either be null or a function", "starting player play with ad", "floatingPlayerLogo_mob", "isInViewport", "vsZnT", "custParam", "clear", "defineSlot", "COMPLETE", "zfsqQ", "alternateVideoSources", "KfzvK", "totalServedAdDuration", "checkElementInViewport", "bCjzF", "adapterCode", "YkEBF", "BlNKk", "VIsyY", "live", "LOGO_REDIRECT_LINK", "checkAndApplyKv", "left", "TyrRe", "inAdBreak", "unobserve", "SEND_AD_WITHOUT_DELAY", "COMPANION DEBUG MODE ON...!", "UB: compAd in View.. with value of ", "playlist", " sec => ", "jBkQm", "Prebid ad completed - completed", "isIntersecting", "VSprC", "visible", "adArrayResetCounter", "New ubplayer will run after 2 sec...!", "applyPassback", "COUNTRY", "PLAY_ON_DOM_CLICK", "yZCFd", "tagName", "]]>\n                            </vmap:AdTagURI>\n                        </vmap:AdSource>\n                        </vmap:AdBreak>", "JCqLg", "jXFyd", " Triggered !", "now", "v1.1 => getCategoryVideos setting video for certain category", "processPlayerPlay", "startAdsonHalfPlayerViewed", "Reloading Source..", "AD REFRESH => Next Ad will be refreshed after 30 seconds.", "IS_PERMANENT_STICKY_POSITION", "Ad refresh interval cleared due to scrolling out of range.", "apply", "flagParser2", "reset4CFlag", "REMOVE_PLCMT_FOR_VPMUTE1", "AQmHu", "addMaxAdDuration", "autoPlayAds", "text", "PbVvN", "ServedAds", "closeBtnDisposePlayer", "ciKWF", "googletag", "kGkZu", "countFloatTime", "YZNyI", "addCountryWiseKv", "#ubp_logo", "Cannot call a class as a function", "loadDynamicStyles", "isFirstIndexRequested", "MIOuK", "autoplay", "PP_CHECKER", "player_run", "slice", "urnoZ", "mxLvH", "previousAdDuration", "innerWidth", "PL_BUTTON_ENABLE", "30px", "stickyConfig", "https://stream.unibotscdn.com/e1cf85d6-ec86-40f5-a5e5-ea01c5919f8c/playlist.m3u8", "join", "DISABLE_BASIC_UPR", "LUdDk", "wXDVJ", "VIDEO", "defalutCDNUrl", "PREBID", "Player Should Reset Now...If not then Convey to Tech.", "floatingPlayerLogo", "destroyAdManger", "RyiHt", "xmlData", "prebid xml should run here brow!", "muted", "keepFloatAfterPlay", "noBidReceivedCounter", "Invalid / Undefined Referance for the ubpsocket!", "AD_PLAY_DURATION_VERSION", " sec Duration.", "ubpButton", "sendAdRequestForPrebid", "Prebid ad completed - Skipped", "iLHaF", "buildAdCodes", "HqZgq", "DIV_ID", "then", "&ad_type=audio_video&env=instream", "sham", "isFirstAdLoaded", "LOGO_URL", "&plcmt=1", "inReadPlayerLogo_mob", "none", "UBP_DEBUG", "ub-unloaded", "ubMainVideos", "&plcmt=2", "ads error", "WbQXK", "AD_DELAY_ENABLED", "Bubuj", "LBdtz", "ZAeIb", "eubeT", "adId", "Ltznz", "vjsOptions", "COMP_DEBUG", "controller", "setPlayerAutoplay", "divId", "afterend", "UCDxq", "PB : Last Ad duration was ", "excludedClients", "img", "runAdOnly", "NKZUP", "CR_ADS", "TDKZI", " Ads served of ", "%26", "HEAD", "playerFirstPlay", "nonServedCountCrAds", "recordImpression", "autoadvance", "checkPlayerStillPlaying", "createModal", '<vmap:AdBreak timeOffset="start" breakType="linear" breakId="preroll">\n                    <vmap:AdSource id="preroll-ad-1" allowMultipleAds="true" followRedirects="true">\n                        <vmap:AdTagURI templateType="vast4">\n                        <![CDATA[', "kScEb", "YWzRp", "link", "GpHaQ", "GTgqx", " Resetting ads array index here.......", "Wxomf", "removing current ad and requesting next ad", "remaining , Current remaining time:", "getMediaType", "TrHyw", "createElement", "videoElement", "fShuR", "lqKgV", "contentended", "DTZMg", "scrollTop", "playerInViewPercentage", "Next Ad Request Info : ", "HckRR", "iWYrX", "resetAdServedCountPB", "DIV_ID_CLASS", "add", "floatingTimer", "processNonServedCount", "videoDynamic", "XLCHN", "clientData", "setPrototypeOf", "SHORT_TIME_FLOATING", "poster", "adsready", "mJfoQ", "OkLTy", "innerHeight", "AdTimeout", "vastXml", "lWCKm", "checkClicktoPlay", "sIoUd", "ubprebid", "BLOCKED_CLIENTS", "pbjsStoreBidResponse", "playlsitRepeatTime", "irctc.co.in_1712646358600", "parentNode", "error :", "min-height:", "clickToPlay", "oXpYU", "CLOSE_BUTTON_ENABLE", "mutePlayer", "change_ad_request_macro", "classList", "vgRSg", "Requesting Ad When : ", "AdError", "runKeepWatching, Content changed. Resetting and starting timer.", "getBoundingClientRect", "ibLRg", "Failed to load or initialize ad:", "XNVie", "timerBox", "google_error", "nonServedCountPB", "46px", "BbKyQ", "center", "btnLink", "DEFAULT", "type", "TTKAA", "checkApiDataFormat", "checkIsPlayerSticky", "Zxfyp", "isArray", "WTdyn", "hideCloseBtn", "mouseout", "92OeVHRs", "7iNPLjD", "pbsticky", "zCRAC", "#ubVideo", " & Player Content Length :", "vertical-align:middle;height:11px;", "totalAdsDuration", "ZMnQU", "CLOSE_BUTTON_ENABLE_MB", "aJbGv", "ads-ad-started", "ZwuJC", "ALL_ADS_COMPLETED", "cGEfk", "FJiVq", "gQjyP", "PLAY_FLOATING_MUTE_UNMUTE", "coTzO", "KiZNE", "ads", "kvRepeatVarNewMain", "0.8", "musSd", "playlistFeature", "CLICK_TO_PLAY", "MOB_FLOATING_LOGO", "IS_FLOATING_BLOCK_ON_SOME_URLS", "BLbKQ", "Pause Ad Request is called...", "makePrerollRequest", "videoModule", "Init Player triggerd", "qFhPm", "isClientActive", "GyLWt", "playerShouldFloatOnce", "LXOCV", "ubCompAd", "fFCLv", "initPlayer", "xVPZs", "specialVideoEnable", "stickyTop", "right", "timeupdate", "contains", "nXAUM", "UwMCX", "DELAY", "setAdBreakReadyListener", "ADD_CUST_PARAMS", "onStickyKeepParentDivHeight", "XaZxV", ".muted-play", "ZPUmE", "BAdSz", "MUTE_PLAYER", "AD_POD_REQUEST", "nDJkz", "Vdmvc", "No ad Tag data found Requesting bids again...", "isFloatingBlockChecked", "ubp-cbutton", "xmlTags", "ZPnCm", "nDyrE", "initNextAdRequest", "nWXOn", "uNcxL", "served_ads", "nonServedCountMain", "SWIck", "Client", "96px", "documentElement", "ViewMode", "querySelector", "*/*", "mainAdRequest", "rmBTV", "disableBasicUpr", "adsIndex", "wiVHD", "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "isPrebidEnabled", "getNextUnservedPbArray", "YmAQW", "otherAdConfig", "NRnDz", "clientname", "IS_IOS", "FJcQR", "HuerF", "splice", "otherPlayerInView", "%c Critical Warning - No GAM Tags added or Goolge Ads Not Enabled from Dashboard - UB Player", "defaultKv", "uxKHE", "wCiqD", "disableLogo", "shouldServe", "PLAY_AD_UNMUTED", "isAdRunning", "sendAdWithoutDelay", "lastRequestedIndex", "IS_ENABLE", "CloseButton", "lHSrg", "content_video", "0px", "contentComplete", "Subscribe", "&plcmt=", "hhoWG", "prev", "multiplePod", "bottom", "icnIU", "hidePlayer", "registerPlayerEvents", "adInterval", "player is ready to play ads", "TCKab", "YXnMD", "removeParamFromAdtag", "Ad Event : Completed", "getAd", "autoplayRequiresMute", "pbPlayer", "enableMaxAdDuration", "InitPlayerNearViewport", "log", '<vmap:AdBreak timeOffset="start" breakType="linear" breakId="preroll">\n                        <vmap:AdSource id="preroll-ad-2" allowMultipleAds="true" followRedirects="true">\n                            <vmap:AdTagURI templateType="vast3">\n                            <![CDATA[', "POSTER", "aoNZe", "Client Active Status : ", "stop", "adArray", "ZGrGS", "BcLQS", "concat", "URUdX", "YnBAd", "TPSqc", "FhrrV", "impression", "pbClass", "main", "width", "SLOT_ID", "SLOT_SIZE", "GOOGLE", "Ad Event : All Ads Completed ", "Map", "AZmXS", "lastMaxAdDurationIndex", "resetNonAdServedCount", "height", "WatUy", "pbjsAdDataStatus", "REQUEST_SINGLE_AD", "isDisposed", "retryAd", "cjqMl", "XbDSP", "background", "enablePlayer", "Ad Event : Skipped", "WAITING", "imaSetting", "irctc", "PGLfC", "MJKNP", "EMIT_LOGS", "RJdLH", "611512txCAYi", "ZgeZz", "5531034xBURTP", "dnQky", "valueOf", "append", "window", "Epemn", "pixelLoad", "SHWyA", "VIDEO_SRC_DEFAULT", "playsinline", "offsetHeight", "remove", "BZYfQ", "runKeepWatching", "showAdControls", "crAdsAdRequest", "onlysingleAdRequest", "#29303a", "KWlwc", "play", "SKIP_VIDEO_CONTENT_ON_START", "clientWidth", "isFloatAllowed", "LLNct", "retrying to run the previous prebid response, as it contains vastXML", "akLgu", "checkFocus", "Prebid ad completed - all ads completed successfully", "waittimeForClick", "createDocumentFragment", "prerollTimeout", "isInViewport_percent", "Thdsg", "checkUnmutedAutoplaySupport", "value", "cpm", "ORIGIN_COUNTRY", "slotSize", "Derived constructors may only return object or undefined", "smZrF", "nextSibling", "px 0px", "SPECIAL_OBJ", "resetAdArray", "button", "display:none", "style", "LOGO_ENABLE", "playerViewed50", "country", "unibots", "newIma Called", "fjkaB", "PVjBm", "noha", "LoPYv", "unibots-video", "oHsYR", "ENABLE_AUDIO_ADS", "isEnable", "showUbPlayer", "izSOp", "ChSEF", "AXDfV", "flagChecker", "adServedCount", "clearAllAds", "pushState", "arr", '<vmap:AdBreak timeOffset="start" breakType="linear" breakId="preroll">\n                        <vmap:AdSource id="preroll-ad-1" allowMultipleAds="true" followRedirects="true">\n                            <vmap:AdTagURI templateType="vast3">\n                            <![CDATA[', "dgGix", "Unable to run the prebid ad of ", "VIDEO_DYNAMIC_API", "ub-loaded", "links", "abrupt", "// Muted autoplay is not allowed.", "floatAboveView", "OMEpN", "CxUvs", "loOQv", "DxmPN", "UNKNOWN", "adserror", "sHmwI", "runKeepWatching, Ad ended (adend event), resuming timer with remaining time:", "Unable to fetch vast response from vastUrl, Or Url Expired", "AD_WIDTH_MOB", "GZQxK", "4C_COMPAITABLE", "fhPNk", "PLAYER_FLOATING", "duration", "COMPANION_AD", "JQrgb", "plcmt flag removed", "mWdhE", "fjqrk", "NWLoU", "keepWatchingBtn", "disposePlayer", "SEND_AD_WHEN_PAUSED", "FLOATING_BLOCKED_URL", "toLowerCase", "AD_MODE", "load", "ADfki", "getElementsByClassName", "setStickyFlag", "vpmute", "onload", "playAdBreak", "document", "CQcmI", "setCustomButton", "&cust_params=max_ad_duration%3D", "isHLS_Enabled", "src", "ad param was exist in bidResponse and updated", "playAfterClick", "getMessage", "google~", "adTagUrls", "pEgYH", "AD_REQUEST_DURATION", "div-ub-", "kvRepeatVarMain", "AxxWY", "alignSelf", "ENABLE_MAX_AD_DURATION", "retryAdCounter", "auto", "closeBtnClicked", "touchend", "ENABLE_AD_TRACKING", "btvjP", "nILaC", "BMUgW", "nextIndexDuration", "mYVjN", "display", "ZXuDy", "adsError", "stylesheet", "FZsjf", "qtTDM", "Bid requested again", "ypGnB", ".ubsticky_left", "PKgsf", "requestSingleAdOnly", "xmlEnable", "mobileCheck", "hidden", "geoData", "https://securepubads.g.doubleclick.net/tag/js/gpt.js", "WxCkr", "NEW_MAIN", "XoQeG", "localLogs", "isContentAboutToFinish", "serveCount", "top", "EjWBb", "ynYNM", "autoPlayAdBreaks", "companionAds", "enableAudioAds", "slotID", "PREROLL_TIMEOUT", "alternateVideoSrc", "cust_params", "XMLDATA", "ad_request_duration", "removeAttribute", "content_video_ima-ad-container", "klhwf", "all", "code", "getRandomInt", "lzgNa", "YLcOC", "unset", "paddingTop", "KEEP_FLOAT_AFTER_AUTOPLAY", "currentTime", "34gwUxXo", "showAdOnceViewed", "lFuaM", "getAdsManager", "&ad_type=video&env=vp", "vastUrl", "SzOnh", "keys", "hCSXx", "WlZso", "qNJNR", "Woovd", "ZzNcS", "pbFlags", "any", "getDescriptionUrl", "OARKu", "CLOSE_BUTTON_DISPOSE_PLAYER", "config", "]]>\n                        </vmap:AdTagURI>\n                    </vmap:AdSource>\n                    </vmap:AdBreak>", "specialLogoVideo", "removeStickyPlayAfterClickPlayer", "bsdbX", "pubads", "rOfSR", "&cust_params=KV1%3D", "reset4C", "VIDEO_DYNAMIC", "env=vp", "googleCpm", "tsVDA", "SEND_DATA_TO_DB", "nearViewportFlag", "uCCcf", "fqiwo", "STICKY_TOP", "skipLinearAdMode", "loopCheckerMain", "open", "status", "find", "groupEnd", "keepWatching", "google_test_ads_", "kxLqM", "yUncG", "eApIa", "xUPhF", "10362600rgvJmj", "GNgKy", "priorityPlay", "runKeepWatching, Ad started, remaining time:", "firstAdDuration", "one", "applyBasicUPR", "Path matched| URL path: ", "RUN_CONTENT_ON_CATEGORIES FEATURE RANS..!", "adsResponse", "loopCheckerNewMain", "InKqV", " ad served of ", "companionAd", "emit", "MpVCH", "resize", "loadVideoTimeout", "true", "IAnNx", "Ovbjz", "AD_DELAY_DURATIONS", "isParmanentSticky", "unsticky", "ltDFA", "nwzJu", " Ads Served of ", "ubsticky_", "nonServedCountNewMain", "NYXxM", "getElementById", "backgroundColor", "addEventListener", "Total Ads Served ", "qqYDa", "inc", "Ad script loaded.", "fetchVastReponse", "RFxhL", "PASSBACK_URL", "retrunAdCounterLimit", "specialLogoEnable", "sort", "resetNonAdServedCountPB", "pcAdWidth", "runContentonCategory_src", "toggleSticky", "enableServices", "nonServeCount", "irRnp", "https://stream.unibotscdn.com/7a2a0f0d-2cd4-4976-8cde-cc201e3032db/playlist.m3u8", "COUNTRY_ORIGIN", "showPlayerWithAdOnly", "JVcMY", "floatingPlayer", "getPrototypeOf", "MNmyp", "getCategoryVideos", "newIMA", "hkVEZ", "prATn", "isPlaylistCardKeepWacthingClicked", "fetchExclusionJsonData", "history", "hasOwnProperty", "shortFloating", "undefined", "debugFlag", "DURATION", "adxChecker", "ImaSdkSettings", "Existing Player Disposed", "jhiSv", "ZFvNL", "dmVpE", ".unsticky", "addClass", "some", "moveDiv", "runPrebidAds", "JWXYw", "isPrebidAdStarted", "DQNFo", "runVideo", "hidepbPlayer", "controlText", "close", "pCzaE", "lKNHu", "playerFloatOnce_aubtu", "Initial AD LOAD => Ad will be refreshed after 30 seconds.", "block", "sdkImpl", "OCVtC", "playAdUnmuted", "pauseAdRequest", "prototype", "zhJev", "observe", "modifyNextAdsDealy", "HHWoU", "PL_BUTTON_LINK", "symbol", "https://stream.unibotscdn.com/22c2a886-111a-4cb2-8260-26edc5b7496c/playlist.m3u8", "getErrorCode", "wFtdA", "newMainAdRequest", "background: #1ba9e1;color:#fff;font-size:12px; padding:4px 0px;border-radius:3px;", "skipVideoContent", "max_ad_duration%3D", "px, Ad refresh stopped.", "json", "development", "playOnClick", "margin", "xMYrR", "checkPlayerIsInView", "Object", "IMA_COMPACT", "adsArray", "COUNTRY_KV", "cr_ads", "checkMutedAutoplaySupport", "akilanews", "AD_TAGS_SHUFFLING", "CURRENT_CLIENT", "clientHeight", "KBRci", "NOBPX", "appendChild", "changeAdTag", "vesKf", "isPlayerViewedOnce", "non_served_ads", "async", "Ad Info : ", "STICKY_ONCE_VIEWED", "MOB_INREAD_LOGO", "resetAdsarrayindex", "isPaused", "__proto__", "delay", "servedStatus", "s left", "contentchanged", "click=0%26", "ucCZa", "vpmute=1%26", "umCMr", "cmd", "GcQXm", "YuYYs", "RUN_AD_ONLY", "XwZGe", "Rlyfi", "player will play on user interaction", "ZJZOl", "hasAttribute", "catch", "RUN_CONTENT_ON_CATEGORIES", "HgrKT", "vXGjW", "volume", "adServedCountPB", "LyZPY", "92343HdkYrM", "Hey i touched trying to play the player", " ad will be request next, after ", "nonServedAdChecker", "head", "gEEdK", "getPoster", "Keep Watching", "function", "REQUIRED_PX_FOR_NEARBY_VIEWPORT", "floor", "split", "markCurrentIndexAsServed", "DvvhB", "text/css", "pathname", "PtxAj", "checkPlayerViewed50Percent", "imaRequestQueue", "str", "div", "pHIAB", "irctc_chatbot1", "timeout", "SHOW_PLAYER_WITH_AD_ONLY", "shuffleAdsTags", "addChild", "fbnpP", "ScWRT", "end", "fIVxi", "setLogo", "CBTN_DynamicLink", "EwVAI", "BzLJM", "MRMFX", "stickyFlag", "isFullPlayerViewedOnce", "LOADED", "isNearViewport", "gSpPQ", "DEFAULT_LOGO_REDIRECT_LINK", "kWBgi", "create", "ubPlayer", "autoplayAllowed", "SoPHS", "Ad loaded and initialized.", "STICKY_POSITION", "sendAdRequest", "checkUbAdx", "adResizer", "ubClose-", "send5AdsPolicyViolation", "forEach", "DEFAULT_LOGO_ENABLE", "checkIdClass", "luVci", "UaPag", "GET", "setupPlaylist", "Within ", "playFloatingMuteUnmuteBtn", "contentresumed", "PLAYLIST_RERUN", "pause", "SphwP", "test", "error", "googleAdTagData", "ready", "aIugz", "Kgagw", "MUTED", "reactUrlChangeFunction", "exclusionClientsList", "PB_ERROR : ", "runContentonCategory", "XML", "gWepn", "okDCs", "Unibots.com", "prebidAds", "toUpperCase", "adBPK", "SEND_FIRST_AD_PAUSED", "firstFlag", "getElementsByTagName", "Cwyhd", "nRwDA", "rvnLj", "adRequestCount", "floatingAvoidUrl", "VpaidMode", "adUnit", "YbtZW", "RECREATE_PLAYER", "NON_SERVED_ADS", "Manage unfill ads working and next ad delay is :", "QDcvk", "setAttribute", "pageYOffset", "logo", "eaytk", "body", "https://cdn.unibotscdn.com/ubplayer/video/thumbnail_mapping.json", "refresh", "oaRtG", "Total Ads Duration: ", ".ubsticky_right", "checkDivInView", "makeEntirePlayerClickable", "UNMUTED", "ISeMo", "result", "application/x-mpegURL", "lelZH", "NKjCk", "xlCqt", "position", "showPlayerButton", "TpPUa", "runKeepWatching, Timer stopped. Remaining time:", "juqok", "prebid adsError", "floating", "message", "customAdDelay", "fpqjM", "prebid ad Request Sent", "UB: CompAd out of view with value of ", "PLAY_CONTENT_ON_CATEGORIES_SRC", "px, Load ad: Scrolling Down", "hjOoz", "AUTOPLAY_OFF", "adsLoader", "EIDGa", "HvlnP", "qsSlY", "&env=vp", "reCreatePlayer", "audioAdsFlag", "https://stream.unibotscdn.com/25acc3a8-9b3c-41a6-92f3-216becb358f6/playlist.m3u8", "https://stream.unibotscdn.com/0c9f2baa-850b-4fb0-8abd-aa66108621cf/playlist.m3u8", "Reseting 4C", "customCdnLink", "SCROLL DOWN! Next Ad will be refreshed after 30 seconds.", "olPXf", "sources", "floatAfterPlay", "Dlthu", "ZjMuF", "random", "setVpaidMode", "ttSjN", "&description_url=", "alt", "name", "enableXml", "isAnyUnservedBidLeft", "https://stream.unibotscdn.com/8ccf0523-12c5-4082-8d37-bdaa0f353975/playlist.m3u8", "ima", "runPrebidAds called for ", "https://cdn.unibotscdn.com/ubplayer/thumbnails/home%20decor-min.jpg%22", "ubpSocket", "zFXfw", "https://cdn.unibotscdn.com", "started player without click to play and with sound as user interacted before", "waiting for click", "UOOfs", "adTag", "TSOFa", "get", "entries", "adsData", "MODE", "IS_ACTIVE", "ugMVk", "adChecker", "retryLock", "54795xwWFgx", "Vast response updated!", "getComponent", "getServedAdMaxDuration", "toFixed", "length", "construct", "Type", "data", "nonServedCount", "ibONm", "&cust_params=b_upr%3Don%26", "hSKiZ", "adDealyEnabled", "isFlaotingBlockONSomeUrls", "stickyCloseButtonPosition", "tSsls", "vgfPi", "EjMYb", "AdEvent", "JdkkO", "tSxNf", "JHdlj", "yxlwC", "px 0px ", "clients", "click", "YGBGD", "isInAdMode", "getDefaultVideoSource", "prebidIma", "blockedClientsForSpecialObj", "browser", "Ad should not fire now", "dcMmG", "settings", "Prebid ads Data for Marked :", "Ad script is already loaded.", "ONqzL", "DEVICE_SPECIFIC_KV", "Close Player", "xpOJD", "ihNmk", "</vmap:VMAP>", "setPrerollTimeout", "adTagName", "iterator", "match", "fmZab", "initializeAdDisplayContainer", "loopCheckerCrAds", "KwprA", "options", "https://stream.unibotscdn.com/4bdf9a76-147f-48fd-a079-ed26cc0c3303/playlist.m3u8", "insertAdjacentElement", "STARTED", '<vmap:VMAP xmlns:vmap="http://www.iab.net/videosuite/vmap" version="1.0">', "group", "from", "replace", "eSpYt", "toString", "vAiYY", "kbvzC", "adend", "HTHkh"];
                    return (o = function() {
                        return e
                    })()
                }

                function d(e) {
                    var t = a;
                    return (d = typeof Symbol === t(1269) && typeof Symbol[t(1487)] === t(1198) ? function(e) {
                        return typeof e
                    } : function(e) {
                        var n = t;
                        if (n(952) !== n(1509)) return e && "function" == typeof Symbol && e[n(1643)] === Symbol && e !== Symbol.prototype ? n(1198) : typeof e;
                        _0x4479e1[n(1128)]("scroll", (function() {
                            return _0x446704.toggleSticky()
                        }))
                    })(e)
                }

                function s(e, t) {
                    var n = a;
                    if (e) {
                        if (typeof e === n(1588)) return c(e, t);
                        var r = Object.prototype[n(1502)][n(1567)](e)[n(523)](8, -1);
                        return r === n(1213) && e[n(1643)] && (r = e[n(1643)][n(1418)]), r === n(838) || r === n(1582) ? Array[n(1499)](e) : r === n(1525) || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/ [n(1328)](r) ? c(e, t) : void 0
                    }
                }

                function c(e, t) {
                    var n = a;
                    (null == t || t > e[n(1446)]) && (t = e[n(1446)]);
                    for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
                    return i
                }

                function l(e, t, n, r, i, o, d) {
                    var s = a;
                    try {
                        var c = e[o](d),
                            l = c[s(896)]
                    } catch (e) {
                        return void n(e)
                    }
                    c[s(1587)] ? s(1492) === s(1463) ? _0x4357ce[s(566)] && _0xd6b757[s(816)](s(651)[s(825)](_0x479e32)) : t(l) : Promise.resolve(l)[s(558)](r, i)
                }

                function u(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var o = a,
                                d = e[o(498)](t, n);

                            function s(e) {
                                l(d, r, i, s, c, o(1639), e)
                            }

                            function c(e) {
                                l(d, r, i, s, c, "throw", e)
                            }
                            s(void 0)
                        }))
                    }
                }

                function _(e, t) {
                    var n = a;
                    if (!(e instanceof t)) {
                        if ("fMgET" !== n(1121)) throw new TypeError(n(516));
                        _0x1b4e9c[n(1306)] = !0, _0x4158ec[n(812)] = !0
                    }
                }

                function f(e, t) {
                    var n = a;
                    if (typeof t !== n(1269) && null !== t) throw new TypeError(n(443));
                    e[n(1192)] = Object[n(1304)](t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && x(e, t)
                }

                function x(e, t) {
                    var n = a;
                    return (x = Object[n(633)] || function(e, t) {
                        return e[n(1236)] = t, e
                    })(e, t)
                }

                function v(e) {
                    var t = function() {
                        var e = a;
                        if (typeof Reflect === e(1162) || !Reflect[e(1447)]) return !1;
                        if (Reflect[e(1447)][e(560)]) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            if (e(616) !== e(623)) return Boolean.prototype[e(864)][e(1567)](Reflect.construct(Boolean, [], (function() {}))), !0;
                            var t = _0x4f56d7[e(1272)](e(1623)),
                                n = t[1],
                                r = _0x19a0aa(n)[e(532)](""),
                                i = e(1205)[e(825)](_0x4065fa, e(594));
                            _0x370f17 = t[0] + e(1623) + _0xbe7699 + i + r + _0x47b425.getDescriptionUrl()
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = a,
                            i = m(e);
                        if (t) {
                            var o = m(this).constructor;
                            n = Reflect[r(1447)](i, arguments, o)
                        } else if ("nFgZn" === r(698)) {
                            var d = _0x13a575[r(1305)][r(842)]() + 30;
                            _0x5bb9ed[r(1361)]("style", r(652) + d + "px")
                        } else n = i.apply(this, arguments);
                        return p(this, n)
                    }
                }

                function p(e, t) {
                    var n = a;
                    if (t && (d(t) === n(418) || typeof t === n(1269))) return t;
                    if (void 0 !== t) {
                        if ("IOXYS" !== n(376)) throw new TypeError(n(900));
                        _0x3a2930 = !0, _0x5349d7 = _0x14ee65
                    }
                    return b(e)
                }

                function b(e) {
                    var t = a;
                    if (void 0 === e) {
                        if ("qjTdi" !== t(1247)) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        _0xd66440[t(1422)][t(1476)][t(1414)](_0x5efed6[t(1422)][t(1166)].VpaidMode[t(1589)]), _0x1a05b6[t(1471)][t(1631)] = !0
                    }
                    return e
                }

                function m(e) {
                    var t = a;
                    return (m = Object.setPrototypeOf ? Object[t(1151)] : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function h(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }! function(e, t) {
                    for (var n = a, r = e();;) try {
                        if (685553 == parseInt(n(427)) / 1 + -parseInt(n(1048)) / 2 * (parseInt(n(1261)) / 3) + -parseInt(n(684)) / 4 * (parseInt(n(1441)) / 5) + parseInt(n(862)) / 6 * (-parseInt(n(685)) / 7) + -parseInt(n(860)) / 8 + -parseInt(n(1096)) / 9 + parseInt(n(1559)) / 10) break;
                        r.push(r.shift())
                    } catch (e) {
                        r.push(r.shift())
                    }
                }(o), n(666)[r(1230)];
                var g = n(218)[r(757)],
                    y = (n(669), function(e) {
                        f(n, e);
                        var t = v(n);

                        function n(e) {
                            var r, o, c, l, x, p, m, g, y, w, A, E, C, P, S, I, R, k, T, L, O, D, N, U, B, M, F, j, V, G, q, Y, Q, H, W, K, z, J, Z, X, $, ee, te, ne, re, ae, ie, oe, de, se, ce, le, ue, _e, fe, xe, ve, pe, be, me, he, ge, ye, we, Ae, Ee, Ce, Pe, Se, Ie, Re, ke, Te, Le, Oe, De, Ne, Ue, Be, Me, Fe, je, Ve, Ge, qe, Ye, Qe, He, We, Ke, ze, Je, Ze, Xe, $e, et, tt, nt, rt, at, it, ot, dt, st, ct, lt, ut, _t, ft, xt, vt, pt, bt, mt, ht, gt, yt, wt, At, Et, Ct, Pt, St, It, Rt, kt, Tt, Lt, Ot, Dt, Nt, Ut, Bt, Mt, Ft, jt, Vt, Gt, qt, Yt, Qt, Ht, Wt, Kt, zt, Jt, Zt, Xt, $t, en, tn, nn, rn, an, on, dn, sn, cn, ln, un, _n, fn, xn, vn, pn = a;
                            return _(this, n), h(b(sn = t[pn(1567)](this, e)), pn(1616), {
                                config: {
                                    xmlEnable: null !== (r = null === (o = sn[pn(632)]) || void 0 === o || null === (c = o[pn(392)]) || void 0 === c || null === (l = c[pn(1339)]) || void 0 === l ? void 0 : l.IS_ACTIVE) && void 0 !== r && r,
                                    xmlData: null !== (x = null === (p = sn[pn(632)]) || void 0 === p || null === (m = p[pn(392)]) || void 0 === m || null === (g = m.XML) || void 0 === g ? void 0 : g[pn(1034)]) && void 0 !== x ? x : []
                                },
                                get getConfig() {
                                    var e = pn;
                                    if (e(431) == e(431)) return this[e(1066)];
                                    _0x4fe79a[e(766)] = 0, _0xf84345[e(1215)][e(1446)] = 0, _0x4df8e1[e(416)]()
                                }
                            }), h(b(sn), pn(653), {
                                config: {
                                    isEnable: null !== (y = null === (w = sn.clientData) || void 0 === w || null === (A = w[pn(709)]) || void 0 === A ? void 0 : A[pn(790)]) && void 0 !== y && y,
                                    waitToAutoplay: null !== (E = null === (C = sn[pn(632)]) || void 0 === C || null === (P = C[pn(709)]) || void 0 === P ? void 0 : P[pn(853)]) && void 0 !== E ? E : 3,
                                    keepFloating: null !== (S = null === (I = sn[pn(632)]) || void 0 === I || null === (R = I.CLICK_TO_PLAY) || void 0 === R ? void 0 : R[pn(1046)]) && void 0 !== S && S,
                                    floatBeforeView: null !== (k = null === (T = sn[pn(632)]) || void 0 === T || null === (L = T[pn(709)]) || void 0 === L ? void 0 : L.FLOAT_BEFORE_INVIEW) && void 0 !== k && k
                                },
                                get getConfig() {
                                    return this[pn(1066)]
                                }
                            }), h(b(sn), pn(1109), {
                                config: {
                                    isEnable: null !== (O = null === (D = sn[pn(632)]) || void 0 === D || null === (N = D.COMPANION_AD) || void 0 === N ? void 0 : N[pn(790)]) && void 0 !== O && O,
                                    pixelLoad: null !== (U = null === (B = sn[pn(632)]) || void 0 === B || null === (M = B[pn(955)]) || void 0 === M ? void 0 : M.PIXEL_LOAD) && void 0 !== U ? U : 50,
                                    slotID: null !== (F = null === (j = sn[pn(632)]) || void 0 === j || null === (V = j.COMPANION_AD) || void 0 === V ? void 0 : V[pn(834)]) && void 0 !== F ? F : "",
                                    slotSize: null !== (G = null === (q = sn[pn(632)]) || void 0 === q || null === (Y = q[pn(955)]) || void 0 === Y ? void 0 : Y[pn(835)]) && void 0 !== G ? G : [],
                                    divId: null !== (Q = null === (H = sn.clientData) || void 0 === H || null === (W = H[pn(955)]) || void 0 === W ? void 0 : W[pn(557)]) && void 0 !== Q ? Q : pn(722),
                                    mobAdWidth: null !== (K = null === (z = sn[pn(632)]) || void 0 === z || null === (J = z[pn(955)]) || void 0 === J ? void 0 : J[pn(949)]) && void 0 !== K ? K : 320,
                                    pcAdWidth: null !== (Z = null === (X = sn[pn(632)]) || void 0 === X || null === ($ = X[pn(955)]) || void 0 === $ ? void 0 : $.AD_WIDTH_PC) && void 0 !== Z ? Z : 320
                                },
                                get getConfig() {
                                    return this.config
                                }
                            }), h(b(sn), "runContentonCategory", {
                                config: {
                                    isEnable: null !== (ee = null === (te = sn[pn(632)]) || void 0 === te || null === (ne = te[pn(1255)]) || void 0 === ne ? void 0 : ne[pn(790)]) && void 0 !== ee && ee,
                                    runContentonCategory_src: null !== (re = null === (ae = sn[pn(632)]) || void 0 === ae || null === (ie = ae[pn(1255)]) || void 0 === ie ? void 0 : ie[pn(1392)]) && void 0 !== re ? re : []
                                },
                                get getConfig() {
                                    return this[pn(1066)]
                                }
                            }), h(b(sn), pn(1090), {
                                config: {
                                    isEnable: null !== (oe = null === (de = sn[pn(632)]) || void 0 === de || null === (se = de[pn(1535)]) || void 0 === se ? void 0 : se[pn(790)]) && void 0 !== oe && oe,
                                    duration: null !== (ce = null === (le = sn[pn(632)]) || void 0 === le || null === (ue = le[pn(1535)]) || void 0 === ue ? void 0 : ue[pn(1164)]) && void 0 !== ce ? ce : 5,
                                    floating: null !== (_e = null === (fe = sn[pn(632)]) || void 0 === fe || null === (xe = fe[pn(1535)]) || void 0 === xe ? void 0 : xe.FLOAT) && void 0 !== _e ? _e : pn(465)
                                },
                                get getConfig() {
                                    return this[pn(1066)]
                                }
                            }), h(b(sn), pn(1524), (function(e) {
                                var t = pn;
                                if (t(1545) !== t(1257)) {
                                    var n, r, a = null !== (n = (null === (r = sn[t(1215)]) || void 0 === r ? void 0 : r[t(1446)]) - 1) && void 0 !== n ? n : 0;
                                    return e > 0 && (a = e - 1), a
                                }
                                _0x394870 = _0x268561[t(490)](), _0x2457fa[t(1e3)] = _0x435f57((_0x4ad7ff - _0x4083a7) / 1e3 + 2)[t(1445)](0), _0x3c530d = _0x1d66e4[t(1444)](_0x2abd81, _0x1f3bd3[t(1e3)]), _0x5f5038[t(927)] > 1 && !_0xd15300[t(1450)] && (_0xdd58c2 = _0x15dc0c)
                            })), h(b(sn), "processNonServedCount", (function(e) {
                                var t = pn,
                                    n = sn.getPreviousAdIndex(e),
                                    r = sn[t(1165)](sn[t(822)][n].adTag);
                                if ("main" == r && (sn[t(755)]++, 0 == sn[t(1450)] && (sn[t(755)] = 0)), "new_main" == r && (sn[t(1124)]++, 0 == sn[t(1450)] && (sn[t(1124)] = 0)), r == t(1217))
                                    if ("ZGGCQ" === t(1020)) {
                                        var a = _0x4dbed1[t(614)](t(414));
                                        a[t(1230)] = !0, a.src = t(1017), a[t(972)] = function() {
                                            var e = t;
                                            _0x1a6535[e(580)] && _0x2039e3[e(816)](e(1132)), _0x36f8df()[e(558)](_0x303b1a)[e(1254)](_0x12eee3)
                                        }, _0x5d94b8[t(1348)](t(1265))[0][t(1225)](a)
                                    } else sn[t(597)]++, 0 == sn[t(1450)] && (sn[t(597)] = 0)
                            })), h(b(sn), pn(1069), (function() {
                                var e = pn;
                                sn[e(546)] = !1, sn.stickyFlag = !0, sn[e(1620)]()
                            })), h(b(sn), pn(981), u(regeneratorRuntime.mark((function e() {
                                var t, n, r, a, i, o = pn;
                                if (o(723) == o(723)) return regeneratorRuntime[o(378)]((function(e) {
                                    for (var d = o;;)
                                        if ("wvxGe" === d(1282)) {
                                            var s = _0x4de7ea[d(1126)](d(437)),
                                                c = _0x10e363[d(1014)] ? _0x43e1ce[d(632)][d(1653)] : _0x2a13ae[d(632)].STICKY_POSITION;
                                            s && _0x2013e6[d(805)](s, c, _0x4cad72)
                                        } else switch (e.prev = e[d(1639)]) {
                                            case 0:
                                                if ((t = sn[d(653)][d(1518)])[d(921)])
                                                    if ("PZiFK" === d(943)) _0x456c7b[d(658)][d(627)](d(1119));
                                                    else if (sn[d(1305)].ads.settings[d(892)] = 2e3, sn.keepFloatAfterPlay = !0, n = window[d(974)][d(1126)]("div-ub-" + sn[d(774)]), r = window[d(1014)] ? d(995) : d(1467), a = function() {
                                                        var e = d,
                                                            i = u(regeneratorRuntime[e(382)]((function i() {
                                                                var o = e;
                                                                if (o(740) == o(740)) return regeneratorRuntime[o(378)]((function(e) {
                                                                    for (var i = o;;)
                                                                        if (i(1201) != i(1201)) _0xfee8b8[i(1498)](i(622)), _0x325c77[i(816)](_0x190390[i(927)] + 1 + i(1263) + _0x49491c[i(1215)][_0x2c2121][i(1237)] + i(473) + _0x53ecff), _0x26f44d[i(406)](i(1609)), _0x2090c5.groupEnd();
                                                                        else switch (e[i(799)] = e[i(1639)]) {
                                                                            case 0:
                                                                                if (sn[i(994)]) {
                                                                                    if ("WxCkr" === i(1018)) {
                                                                                        e.next = 15;
                                                                                        break
                                                                                    }
                                                                                    var d = _0x513da4[i(1014)] ? i(995) : i(1467);
                                                                                    _0x6ac14[i(1305)].on(d, (function(e) {
                                                                                        var t = i;
                                                                                        e[t(1528)].tagName === t(536) && _0x379caa[t(1086)](_0x5dbc9f, t(1660))
                                                                                    }))
                                                                                }
                                                                                if (n[i(1565)](r, a), window[i(566)] && console[i(406)](i(1604)), sn[i(890)] = -2, sn[i(596)] = !0, sn[i(1305)].muted(!1), sn[i(1305)][i(1258)](.001), sn[i(1685)] = !1, !t.keepFloating && sn[i(1069)](), !sn[i(1305)][i(1617)]()) {
                                                                                    e[i(1639)] = 12;
                                                                                    break
                                                                                }
                                                                                return e.next = 12, sn[i(1305)][i(881)]();
                                                                            case 12:
                                                                                sn.initNextAdRequest(i(981)), e[i(1639)] = 18;
                                                                                break;
                                                                            case 15:
                                                                                sn[i(546)] = !1, sn[i(1297)] = !0, sn[i(1620)]();
                                                                            case 18:
                                                                            case i(1290):
                                                                                return e.stop()
                                                                        }
                                                                }), i);
                                                                _0x1c1489[o(1128)]("scroll", (function e() {
                                                                    var t = o,
                                                                        n = _0x5a9ed3[t(974)][t(1126)](_0x1f7e7c[t(413)]);
                                                                    _0x290789[t(456)](n, 50) && _0x4e4bac[t(1298)] && (_0x223fab[t(910)] = !0, _0xd96f97.removeEventListener(t(1597), e, !0))
                                                                }), !0)
                                                            })));
                                                        return function() {
                                                            var t = e;
                                                            return i[t(498)](this, arguments)
                                                        }
                                                    }(), n[d(1128)](r, a), sn.sendAdWhenPaused) {
                                                    if ("jfCht" === d(676)) return _0x219af5 = 0, _0x3c6917(_0x1860d9), _0x50abec[d(566)] && _0x355a2d[d(406)](d(610)), _0x1880f7 && _0x4874ca[d(658)].contains(d(1123) + _0x5b2ae9) && (_0x435fd2.classList.remove(d(1123) + _0x2ab9b5), _0x383dbe[d(658)][d(627)](d(1119))), _0x25bf31[d(1422)][d(581)][d(1188)].adsLoader[d(795)](), _0x12b0b4;
                                                    window[d(566)] && console.log(d(401)), sn[d(1305)][d(545)](!0), sn[d(1305)][d(704)][d(1476)][d(892)] = 10, sn.ubPlayer[d(881)](), sn[d(1305)][d(1326)]()
                                                } else sn[d(890)] > 0 && (d(613) != d(613) ? _0x270f1c.removeStickyPlayAfterClickPlayer() : i = setInterval(u(regeneratorRuntime[d(382)]((function e() {
                                                    var o = d;
                                                    return regeneratorRuntime[o(378)]((function(e) {
                                                        var d = o;
                                                        if ("oHjfs" === d(1638))
                                                            for (;;) switch (e[d(799)] = e[d(1639)]) {
                                                                case 0:
                                                                    if (!(n && sn[d(890)] >= 0 && !sn[d(596)] && !sn[d(787)]() && sn.ubPlayer && sn[d(1305)][d(1617)]())) {
                                                                        if (d(867) !== d(1415)) {
                                                                            e[d(1639)] = 16;
                                                                            break
                                                                        }
                                                                        return this[d(1066)]
                                                                    }
                                                                    if (sn[d(1209)] = !1, n[d(1565)](r, a), t[d(390)] || sn[d(1069)](), !sn[d(1305)] || !sn[d(1305)][d(1617)]()) {
                                                                        e.next = 13;
                                                                        break
                                                                    }
                                                                    return window.UBP_DEBUG && console[d(406)]("after", sn.waittimeForClick, "sec player started playing as user didn't interacted with the player"), sn[d(1305)][d(545)]() || sn[d(1305)][d(545)](!0), sn.isPaused = !1, sn[d(596)] = !0, sn.waittimeForClick = -1, e[d(1639)] = 12, sn[d(1305)].play();
                                                                case 12:
                                                                    sn[d(751)]("Play");
                                                                case 13:
                                                                    clearInterval(i), e.next = 17;
                                                                    break;
                                                                case 16:
                                                                    sn[d(890)] < 0 && clearInterval(i);
                                                                case 17:
                                                                case d(1290):
                                                                    return e[d(821)]()
                                                            } else _0xfcc4e7[d(1191)]()
                                                    }), e)
                                                }))), 1e3 * sn[d(890)]));
                                            case 2:
                                            case d(1290):
                                                return e[d(821)]()
                                        }
                                }), e);
                                if (!(_0x26faee instanceof _0x258169)) throw new _0x13dddf(o(516))
                            })))), h(b(sn), "adCount", {
                                nonServedCount: 0,
                                adServedCount: 0,
                                adServedCountPB: 0,
                                nonServedCountPB: 0,
                                serveCount: function() {
                                    var e = pn;
                                    this[e(1259)]++, this[e(927)]++
                                },
                                nonServeCount: function() {
                                    var e = pn;
                                    "TcEiR" === e(1009) ? (_0x173114.InitPlayerNearViewport = !0, _0x2a670b[e(504)] = !0) : (this[e(669)]++, this[e(1450)]++)
                                },
                                resetNonAdServedCount: function() {
                                    this.nonServedCount = 0
                                },
                                resetAdServedCountPB: function() {
                                    this[pn(1259)] = 0
                                },
                                resetNonAdServedCountPB: function() {
                                    var e = pn;
                                    "OhdGK" !== e(371) ? this[e(669)] = 0 : (_0x3c6c7a((function() {
                                        _0x153244()
                                    }), 1e3), _0x3c9ff2[e(908)][e(1002)] = e(1187), _0xa0a919[e(908)].display = "block")
                                },
                                get getAdServedCount() {
                                    return this.adServedCount
                                },
                                get getAdServedCountPB() {
                                    return this[pn(1259)]
                                },
                                get getNonServedCount() {
                                    return this.nonServedCount
                                },
                                get getNonServedCountPB() {
                                    return this[pn(669)]
                                }
                            }), h(b(sn), pn(1158), function() {
                                var e = pn;
                                if (e(1223) !== e(1360)) {
                                    var t = u(regeneratorRuntime[e(382)]((function t(n, r) {
                                        var a, i, o = e;
                                        return regeneratorRuntime[o(378)]((function(e) {
                                            for (var t = o;;) switch (e[t(799)] = e[t(1639)]) {
                                                case 0:
                                                    return e.abrupt(t(1681), !1);
                                                case 4:
                                                    return a = e[t(428)], e[t(1639)] = 7, a.json();
                                                case 7:
                                                    return i = (i = e.sent)[t(1466)], e.abrupt(t(1681), i[t(1683)](r));
                                                case 10:
                                                case t(1290):
                                                    return e[t(821)]()
                                            }
                                        }), t)
                                    })));
                                    return function(n, r) {
                                        var a = e;
                                        return a(1624) === a(1506) ? new _0x2fd5a5((function(e, t) {
                                            var n = a;
                                            _0x1a9fcb[n(580)] && _0x161097[n(816)](n(400)), _0x89f652[n(510)] = _0x5e3b46[n(510)] || {
                                                cmd: []
                                            }, _0x311254[n(1245)][n(1554)]((function() {
                                                var t = n;
                                                _0x298b10 = _0x12dd25[t(450)](_0x1c997f.slotID, _0x30de70[t(899)], _0x41617c.divId)[t(1585)](_0x3cac3f[t(1028)]())[t(1585)](_0x29069a[t(1071)]()), _0x2dc21a.enableServices(), _0x1430e7[t(1002)](_0x41361[t(583)]), _0x430b6f(), e()
                                            }))
                                        })) : t[a(498)](this, arguments)
                                    }
                                }
                                var n = "" == _0x125d37[e(632)][e(1197)] ? null : _0x373a18[e(632)][e(1197)];
                                if (null != n) {
                                    var r = _0x42ef11[e(1014)] ? e(995) : "click";
                                    _0x48e961.ubPlayer.on(r, (function(t) {
                                        var r = e;
                                        t[r(1528)][r(485)] === r(536) && _0x1b2cd0.open(n, "_blank")
                                    }))
                                }
                            }()), h(b(sn), pn(1335), (function() {
                                var e = pn;
                                if ("LLNct" === e(885)) {
                                    if (window.reactSite) {
                                        var t = window[e(1159)][e(929)];
                                        window[e(1159)][e(929)] = function(n) {
                                            var r = e;
                                            this[r(1305)] && this.destroyAdManger(), null != videojs[r(361)]()[r(793)] && videojs[r(361)]()[r(793)][r(1628)](), this.ubPlayer = null, t[r(498)](window[r(1159)], arguments)
                                        }
                                    }
                                } else {
                                    var n = e(1270) in _0x5768fd[e(632)] && 0 != _0x1531d0[e(632)].REQUIRED_PX_FOR_NEARBY_VIEWPORT ? _0x5c8638[e(632)][e(1270)] : 150;
                                    _0xd6b558[e(1300)](_0x2bae4c[e(387)][e(974)][e(1126)](_0x4e4b40[e(413)]), n)
                                }
                            })), h(b(sn), pn(499), (function(e, t) {
                                var n = pn;
                                if ("PGLfC" === n(856)) {
                                    var r, a = arguments[n(1446)] > 2 && void 0 !== arguments[2] && arguments[2],
                                        i = arguments[n(1446)] > 3 && void 0 !== arguments[3] && arguments[3];
                                    switch (e) {
                                        case "bool":
                                            i = !1, r = a ? t in sn[n(632)] && sn.clientData[t][a] ? sn.clientData[t][a] : i : t in sn.clientData && sn.clientData[t] ? sn[n(632)][t] : i;
                                            break;
                                        case "str":
                                            i = i || "", r = a ? t in sn[n(632)] && "" != sn[n(632)][t][a] ? sn[n(632)][t][a] : i : t in sn[n(632)] && "" != sn.clientData[t] ? sn[n(632)][t] : i;
                                            break;
                                        case "num":
                                            i = i || 0, r = a ? t in sn[n(632)] && sn[n(632)][t][a] ? sn.clientData[t][a] : i : t in sn[n(632)] && sn.clientData[t] ? sn[n(632)][t] : i;
                                            break;
                                        case n(930):
                                            i = i || [], r = a ? t in sn.clientData && sn[n(632)][t][a] ? sn[n(632)][t][a] : i : t in sn[n(632)] && sn[n(632)][t] ? sn[n(632)][t] : i;
                                        default:
                                            r = !1
                                    }
                                    return r
                                }
                                _0x3f2ac5[n(1022)] = !1
                            })), h(b(sn), pn(926), (function(e) {
                                var t = pn;
                                return void 0 !== e && (typeof e === t(1588) ? e === t(1114) : e)
                            })), h(b(sn), "autoplayAllowed", !1), h(b(sn), "autoplayRequiresMute", !1), h(b(sn), pn(1305), void 0), h(b(sn), pn(813), void 0), h(b(sn), pn(831), void 0), h(b(sn), "wrapperDiv", void 0), h(b(sn), pn(1297), !1), h(b(sn), pn(1228), !1), h(b(sn), pn(1080), !1), h(b(sn), "viewportfirstFlag", !1), h(b(sn), pn(766), 0), h(b(sn), pn(596), !1), h(b(sn), "firstFlag", !0), h(b(sn), pn(1235), !0), h(b(sn), pn(846), !1), h(b(sn), pn(691), 0), h(b(sn), pn(518), !0), h(b(sn), "isFullPlayerViewedOnce", !1), h(b(sn), pn(561), !1), h(b(sn), "isfloatingPLAllowed", ""), h(b(sn), pn(746), !1), h(b(sn), pn(927), 0), h(b(sn), "nonServedCount", 0), h(b(sn), pn(1352), 0), h(b(sn), pn(455), 0), h(b(sn), pn(840), 0), h(b(sn), pn(479), 0), h(b(sn), pn(1e3), 0), h(b(sn), pn(526), 0), h(b(sn), "firstAdDuration", 0), h(b(sn), pn(978), !1), h(b(sn), "mediaType", void 0), h(b(sn), "mobileCheck", window[pn(1014)]), h(b(sn), "tstCheck", !1), h(b(sn), pn(1185), !1), h(b(sn), pn(1163), !1), h(b(sn), "isManuallyPaused", !1), h(b(sn), pn(1279), !1), h(b(sn), pn(1022), !1), h(b(sn), pn(1021), {
                                env: {
                                    CURRENT_CLIENT: "theuploadhub",
                                    LOCAL_URL: "http://localhost:8080",
                                    MODE: "production"
                                }
                            }[pn(1676)][pn(1436)] == pn(1208)), h(b(sn), pn(500), !1), h(b(sn), pn(1336), []), h(b(sn), pn(779), !1), h(b(sn), pn(718), !0), h(b(sn), "videoName", ""), h(b(sn), pn(1614), []), h(b(sn), "ubpSocket", void 0), h(b(sn), pn(645), void 0), h(b(sn), "lastRequestedIndex", 0), h(b(sn), pn(420), 0), h(b(sn), pn(755), 0), h(b(sn), pn(1124), 0), h(b(sn), pn(597), 0), h(b(sn), pn(763), 0), h(b(sn), pn(1202), 0), h(b(sn), "crAdsAdRequest", 0), h(b(sn), "loopCheckerMain", 0), h(b(sn), pn(1106), 0), h(b(sn), "loopCheckerCrAds", 0), h(b(sn), "kvRepeatVarMain", 1), h(b(sn), pn(705), 1), h(b(sn), "kvRepeatVarCrAds", 1), h(b(sn), pn(994), !1), h(b(sn), "floatingTimer", 0), h(b(sn), "floatInterval", void 0), h(b(sn), pn(1077), void 0), h(b(sn), pn(910), !1), h(b(sn), pn(1157), !1), h(b(sn), pn(787), (function() {
                                var e = pn;
                                return !(!sn[e(1305)][e(704)].inAdBreak() && !sn.ubPlayer[e(704)].isInAdMode())
                            })), h(b(sn), "getMediaType", (function(e) {
                                var t = pn,
                                    n = "application/x-mpegURL";
                                return e && (n = e.includes(t(405)) ? t(1376) : t(395)), n
                            })), h(b(sn), pn(715), {
                                getPoster: function() {
                                    var e = pn;
                                    if ("Kgagw" === e(1333)) {
                                        var t = u(regeneratorRuntime.mark((function e(t) {
                                            return regeneratorRuntime.wrap((function(e) {
                                                var n = a;
                                                if (n(771) == n(771))
                                                    for (;;)
                                                        if (n(506) !== n(1687)) switch (e[n(799)] = e[n(1639)]) {
                                                            case 0:
                                                                return e.abrupt(n(1681), new Promise((function(e, r) {
                                                                    var a = n,
                                                                        i = a(1366);
                                                                    fetch(i)[a(558)]((function(e) {
                                                                        return e[a(1207)]()
                                                                    }))[a(558)]((function(n) {
                                                                        var r = a;
                                                                        Object.keys(n)[r(1315)]((function(a) {
                                                                            var i = r;
                                                                            i(719) == i(719) ? a[i(1683)](t) && (i(1397) !== i(1503) ? e(n[a]) : (_0x5739d5.playOnDomClick && _0x4ed4a3.checkClicktoPlay(), _0xf5ffb6.UBP_DEBUG && _0x1dcc9a.log("player will play muted -", _0x1e1785[i(812)], "player can autoplay -", _0x320ab1[i(1306)]), _0x3e30e9[i(492)]())) : this[i(669)] = 0
                                                                        }))
                                                                    }))[a(1254)]((function() {
                                                                        var e = a;
                                                                        if (e(1059) === e(1116)) {
                                                                            var t = _0x431352[e(621)];
                                                                            t /= 100;
                                                                            var n = _0x58a219[e(663)]();
                                                                            return (n[e(1024)] > 0 || n[e(801)] > _0x4218a4[e(872)] * t) && (n[e(801)] < _0xce7fc7[e(387)][e(639)] || n[e(1024)] < _0x24a343[e(387)].innerHeight - _0x1a3c3a.offsetHeight * t) && n[e(728)] > 0 && n[e(465)] < (_0x1cda6c[e(387)].innerWidth || _0x2ab7e1[e(387)][e(974)][e(759)][e(883)])
                                                                        }
                                                                        r(e(1424))
                                                                    }))
                                                                })));
                                                            case 1:
                                                            case n(1290):
                                                                return e[n(821)]()
                                                        } else _0x394552(), _0x5ae103[n(566)] && _0x3f7f1a[n(406)]("runKeepWatching, Ad started, remaining time:", _0x5c04f4);
                                                        else _0x21fe6a[n(1498)](n(1231)), _0x102e60[n(816)](n(1129) + _0xb51185[n(927)])
                                            }), e)
                                        })));
                                        return function(n) {
                                            var r = e;
                                            return t[r(498)](this, arguments)
                                        }
                                    }
                                    _0x59724c((function() {
                                        var t = e;
                                        _0x1a336f[t(500)] && (_0x583289[t(500)] = !1)
                                    }), 1500)
                                }(),
                                check: function() {},
                                ubMainVideos: [pn(1403), pn(1494), pn(1199), "https://stream.unibotscdn.com/7848a69c-28d8-42bd-bb2d-42d2b6ec5e56/playlist.m3u8", "https://stream.unibotscdn.com/822c2a0f-69c7-4188-a592-20a2df54d72b/playlist.m3u8"],
                                alternateVideoSources: [pn(531), pn(1146), "https://stream.unibotscdn.com/e53120aa-75de-4ab1-94c6-b8074bca7fae/playlist.m3u8", pn(1404), pn(1421)],
                                getDefaultVideoSource: function() {
                                    var e = pn;
                                    if ("TvVQA" !== e(412)) {
                                        var t;
                                        if ("" != sn.clientData[e(870)])
                                            if (sn[e(632)][e(870)].includes(e(1580))) {
                                                var n = sn[e(715)][e(568)];
                                                t = n[sn[e(1041)](n.length)]
                                            } else "pkDxk" === e(1627) ? _0x5b3954 = _0x2a4659 - 1 : t = sn[e(632)][e(870)];
                                        else e(366) != e(366) ? _0x4dba9b[e(1160)](_0x5b9461) ? _0x42b91a = _0x4196b3[_0x4534ca] : _0x331246[e(1160)](_0x1c4b00) && _0x1f09d8[_0x1bc793][_0x2bdcfd] : sn[e(589)] || (t = sn.videoModule[e(453)]);
                                        return t
                                    }
                                    if (_0x3282a1[e(1607)].href == _0xbd3f99) return !0
                                },
                                getCategoryVideos: function() {
                                    var e = pn;
                                    window[e(566)] && console[e(406)](e(1104));
                                    var t, n = sn[e(1338)][e(1066)],
                                        r = window[e(1607)][e(1276)];
                                    return new Promise((function(i, o) {
                                        var d = e;
                                        if (n.isEnable)
                                            if (d(671) === d(1482)) _0x5a9a05(_0x1992b4), _0x3de9e7[d(566)] && _0x1df0a7.log(d(1383), _0x19c215);
                                            else {
                                                var c = n[d(1141)];
                                                Object[d(1434)](c)[d(1315)]((function(e) {
                                                    var n, i, o = d,
                                                        c = (i = 2, function(e) {
                                                            if (Array[a(680)](e)) return e
                                                        }(n = e) || function(e, t) {
                                                            var n = a,
                                                                r = null == e ? null : typeof Symbol !== n(1162) && e[Symbol[n(1487)]] || e["@@iterator"];
                                                            if (null != r) {
                                                                var i, o, d = [],
                                                                    s = !0,
                                                                    c = !1;
                                                                try {
                                                                    for (r = r.call(e); !(s = (i = r.next())[n(1587)]) && (d[n(1554)](i[n(896)]), !t || d[n(1446)] !== t); s = !0);
                                                                } catch (e) {
                                                                    n(1682) !== n(1038) ? (c = !0, o = e) : 0 == _0x344df1[n(561)] && (_0xd972d3[n(561)] = !0)
                                                                } finally {
                                                                    if (n(642) === n(1564)) return _0x583e87 - _0x3bce01;
                                                                    try {
                                                                        if ("aUsFj" === n(1468)) return _0x178b50(_0x4feea8) || _0x2800e5(_0x553957, _0xc2b98e) || _0x4f8d0(_0x3aaa74, _0x560521) || _0x2f5e28();
                                                                        s || null == r[n(1681)] || r[n(1681)]()
                                                                    } finally {
                                                                        if (n(1695) === n(373)) return _0x213e33[n(1173)]((function(e) {
                                                                            return !1 === e[n(1238)] && !0 === e.shouldServe
                                                                        }));
                                                                        if (c) throw o
                                                                    }
                                                                }
                                                                return d
                                                            }
                                                        }(n, i) || s(n, i) || function() {
                                                            throw new TypeError(a(768))
                                                        }()),
                                                        l = c[0],
                                                        u = c[1];
                                                    r === l && (o(1176) !== o(1577) ? (t = u, window[o(566)] && console[o(816)](o(1103)[o(825)](l, ", Video Value: ").concat(u))) : (_0x4a2c58 = _0x7a7d3[o(1215)][_0x86aef5][o(704)][0], _0x249344[o(1355)].checkUbAdx(_0xf9e53a[o(1215)][_0x279590][o(704)][0]) && (_0x4c4275 = _0x214b54[o(1215)][_0x38887d][o(704)][0] + _0x49cccb[o(1063)]())))
                                                })), t && (sn.videoSrc = t, i(t))
                                            }
                                    }))
                                },
                                getVideos: function() {
                                    var e, t, n = pn,
                                        r = sn[n(1068)](n(1601));
                                    return new Promise((e = n, t = u(regeneratorRuntime[e(382)]((function t(n, a) {
                                        var i, o, d, s, c, l = e;
                                        return regeneratorRuntime[l(378)]((function(e) {
                                            var t = l;
                                            if (t(424) != t(424)) _0x24df07.UBP_DEBUG && _0x5d20c6[t(816)](t(401)), _0x5de317.ubPlayer.muted(!0), _0x2234a5[t(1305)][t(704)][t(1476)][t(892)] = 10, _0xced77[t(1305)][t(881)](), _0x189272[t(1305)][t(1326)]();
                                            else
                                                for (;;) switch (e[t(799)] = e[t(1639)]) {
                                                    case 0:
                                                        if (sn[t(630)] = 1 == sn[t(632)][t(1075)], i = sn[t(632)][t(934)], 0 == r) {
                                                            e[t(1639)] = 7;
                                                            break
                                                        }
                                                        sn[t(1590)] = r, n([r]), e[t(1639)] = 38;
                                                        break;
                                                    case 7:
                                                        if (!sn[t(630)]) {
                                                            e[t(1639)] = 35;
                                                            break
                                                        }
                                                        return e.next = 10, fetch(i);
                                                    case 10:
                                                        return d = e[t(428)], e[t(1639)] = 13, d[t(1207)]();
                                                    case 13:
                                                        return s = e.sent, e.prev = 14, s[t(1449)][0] = sn[t(677)](s), e.next = 18, sn[t(1158)](t(587), sn[t(774)]);
                                                    case 18:
                                                        e[t(428)] && s.data[0].links[t(1625)](), c = sn.getRandomInt(s[t(1449)][0][t(936)][t(1446)]), sn[t(1293)] && (sn[t(673)] = s[t(1449)][0].articles[c]), o = sn[t(708)] ? s.data[0][t(936)] : o = s[t(1449)][0].links[c], sn.videoSrc = o, n(o), e[t(1639)] = 33;
                                                        break;
                                                    case 27:
                                                        e[t(799)] = 27, e.t0 = e[t(1254)](14), console[t(406)](e.t0), o = sn[t(715)][t(1470)](), sn[t(1590)] = o, n(o);
                                                    case 33:
                                                        e[t(1639)] = 38;
                                                        break;
                                                    case 35:
                                                        o = sn[t(715)][t(1470)](!0), sn[t(1590)] = o, n(o);
                                                    case 38:
                                                        sn[t(1576)] && sn[t(715)][t(1153)]()[t(558)]((function(e) {
                                                            var r = t;
                                                            window[r(566)] && console.warn(r(491)), n(e)
                                                        }));
                                                    case 39:
                                                    case t(1290):
                                                        return e[t(821)]()
                                                }
                                        }), t, null, [
                                            [14, 27]
                                        ])
                                    }))), function(n, r) {
                                        var a = e;
                                        if (a(1408) == a(1408)) return t[a(498)](this, arguments);
                                        _0x240fc7 = _0x4dd881[a(632)][a(870)]
                                    }))
                                },
                                vjsOptionsVdoSrc: function() {
                                    var e = pn;
                                    sn[e(708)] || (sn.vjsOptions[e(1409)] = {
                                        type: sn[e(1667)],
                                        src: sn[e(1590)]
                                    })
                                },
                                videoSrcManagerForPlaylist: function(e) {
                                    var t = pn;
                                    if (t(1274) == t(1274)) {
                                        var n = [];
                                        return (e = d(e = sn[t(419)](e)) == t(418) ? [][t(825)](i(e), i(e)) : [e, e])[t(1315)]((function(e) {
                                            var r = t;
                                            if ("cHdST" === r(1081)) return _0x29679c[r(1236)] = _0x281a08, _0x55f0b7;
                                            n[r(1554)]({
                                                sources: [{
                                                    type: sn[r(612)](e),
                                                    src: e
                                                }]
                                            })
                                        })), n
                                    }
                                    for (;;) switch (_0x96ce0b[t(799)] = _0x1b601f[t(1639)]) {
                                        case 0:
                                            return _0x41ca94[t(1639)] = 2, _0x21e74c[t(1305)][t(1686)](t(1240));
                                        case 2:
                                            return _0x54f250[t(937)](t(1681), _0x2a5053[t(428)]);
                                        case 3:
                                        case "end":
                                            return _0x1b5009[t(821)]()
                                    }
                                },
                                setupPlaylist: (xn = pn, vn = u(regeneratorRuntime[xn(382)]((function e() {
                                    var t, n, r = xn;
                                    if (r(941) !== r(744)) return regeneratorRuntime[r(378)]((function(e) {
                                        var a = r;
                                        if (a(1224) != a(1224)) {
                                            if (typeof _0x58636e !== a(1269) && null !== _0x249456) throw new _0x1ee765(a(443));
                                            _0x482f34[a(1192)] = _0x49e397[a(1304)](_0x35caa1 && _0x2d9d0b[a(1192)], {
                                                constructor: {
                                                    value: _0x22b375,
                                                    writable: !0,
                                                    configurable: !0
                                                }
                                            }), _0x4ae563 && _0xd062ac(_0x3f1859, _0x4c594a)
                                        } else
                                            for (;;) {
                                                if (a(1451) != a(1451)) return _0x1ad4d1 - _0x523ce3;
                                                switch (e.prev = e[a(1639)]) {
                                                    case 0:
                                                        if (!sn.playlistFeature) {
                                                            if ("Dlthu" !== a(1411)) return void _0x1b83ad[a(1565)](_0xdaff67, _0x54173a);
                                                            e[a(1639)] = 15;
                                                            break
                                                        }
                                                        if (t = sn[a(715)][a(1654)](sn[a(1590)]), sn[a(1305)][a(472)](t), sn[a(1305)][a(472)][a(599)](1), sn[a(1305)][a(472)][a(1533)](!0), !(sn[a(653)][a(1066)][a(921)] || (sn[a(727)] || sn[a(1672)]) && screen[a(833)] >= 340)) {
                                                            e[a(1639)] = 15;
                                                            break
                                                        }
                                                        return n = sn[a(1590)].length && 80 != sn[a(1590)].length ? sn[a(1590)][0] : sn.videoSrc, e[a(799)] = 7, e.next = 10, sn[a(715)][a(1267)](n).then((function(e) {
                                                            var t = a;
                                                            t(824) == t(824) ? (sn.clickToPlay[t(1066)][t(921)] && sn.ubPlayer[t(635)](e[t(818)]), (sn[t(727)] || sn[t(1672)]) && screen[t(833)] >= 340 && (sn.videoName = e.NAME)) : _0x30797c.push({
                                                                sources: [{
                                                                    type: _0x3bdb87.getMediaType(_0x2e94d8),
                                                                    src: _0xd9662e
                                                                }]
                                                            })
                                                        }));
                                                    case 10:
                                                        e[a(1639)] = 15;
                                                        break;
                                                    case 12:
                                                        e.prev = 12, e.t0 = e[a(1254)](7), console.log(e.t0);
                                                    case 15:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }
                                    }), e, null, [
                                        [7, 12]
                                    ]);
                                    _0x2333e7((function() {
                                        var e, t, n = r;
                                        _0x27b276[n(1425)][n(1110)](n(830), {
                                            website: _0x26b3a2[n(387)].location.hostname,
                                            bidder: _0x4f4f94[n(458)],
                                            cpm: _0x525764.cpm,
                                            adTagName: _0x30ed40[n(458)]
                                        }), null !== (e = null === (t = _0x3423ea[n(632)]) || void 0 === t ? void 0 : t[n(858)]) && void 0 !== e && e && _0x5728e1[n(1425)][n(1110)](n(372), {
                                            data: {
                                                playerName: _0x493c73.parent.location[n(1657)],
                                                country: _0x4a5c9d[n(911)],
                                                type: "started",
                                                bidder: _0x287ed4.ubprebid[n(1343)][n(984)][_0x5027db[n(1471)][n(358)]][n(458)],
                                                adId: _0x20a9f0.ubprebid[n(1343)][n(984)][_0x4dbceb.prebidIma.lastServedIndex].adId,
                                                device: _0x2faf3a[n(1014)] ? "mb" : "pc"
                                            }
                                        })
                                    }), 2100)
                                }))), function() {
                                    var e = xn;
                                    if (e(388) == e(388)) return vn.apply(this, arguments);
                                    _0x195361[e(1446)] > 0 && _0x564c35[e(1371)](_0x401625), _0x2289e4(_0x4cc7d1)
                                })
                            }), h(b(sn), pn(677), (function(e) {
                                var t = pn;
                                return e.data[0] ? e[t(1449)][0] : e[t(1449)]
                            })), h(b(sn), "checkPlayerViewedOnce", (function(e) {
                                var t = pn;
                                if (t(1569) != t(1569)) _0x5fef0e[t(658)][t(730)](t(1123) + _0x5a8044) && (_0x57d7ea[t(658)][t(873)](t(1123) + _0x32ac02), _0x4554f4[t(658)][t(627)](t(1119))), _0x2d5ced[t(736)](!0), _0x4ae6f6[t(1602)](!0);
                                else {
                                    var n = new IntersectionObserver((function(e) {
                                        var r = t;
                                        if ("zDEca" === r(1537)) return this[r(1066)];
                                        sn.isFullPlayerViewedOnce = !1, e[r(1315)]((function(e) {
                                            var t = r;
                                            if (e.isIntersecting) sn[t(1298)] = !0, sn[t(1142)](), n[t(468)](e.target);
                                            else if (!sn[t(1298)] && !sn[t(1049)])
                                                if (t(1544) === t(743)) _0x6ff887[t(1190)] = !1, _0x2b3cff[t(632)][t(786)] = !1;
                                                else {
                                                    var a = window[t(974)][t(1126)](sn.listenerElement);
                                                    a && sn[t(369)](a).top && (sn.isFullPlayerViewedOnce = !0)
                                                }
                                        }))
                                    }), {
                                        threshold: [0],
                                        rootMargin: "" [t(825)](5, t(1465)).concat(5, "px 0px")
                                    });
                                    e[t(1315)]((function(e) {
                                        n[t(1194)](e)
                                    }))
                                }
                            })), h(b(sn), "pauseAdRequest", u(regeneratorRuntime[pn(382)]((function e() {
                                var t, n = pn,
                                    r = arguments;
                                return regeneratorRuntime[n(378)]((function(e) {
                                    var a = n;
                                    if ("vbgTq" === a(887)) _0x4badb9 && (_0xe6085(_0x53bd2e), _0x1ad6f2 = null, _0x3dd520[a(580)] && _0x51cc05[a(816)](a(497)));
                                    else
                                        for (;;) switch (e[a(799)] = e.next) {
                                            case 0:
                                                if (t = r[a(1446)] > 0 && void 0 !== r[0] ? r[0] : a(916), window.UBP_DEBUG && console.warn(a(713) + t), sn[a(1305)][a(704)][a(1469)]() && sn.ubPlayer.on(a(1505), function() {
                                                        var e = a,
                                                            t = u(regeneratorRuntime[e(382)]((function t(n) {
                                                                var r = e;
                                                                return regeneratorRuntime[r(378)]((function(e) {
                                                                    var t = r;
                                                                    if (t(687) === t(1501)) _0x421b41[t(1074)]();
                                                                    else
                                                                        for (;;) switch (e[t(799)] = e[t(1639)]) {
                                                                            case 0:
                                                                                if (sn[t(1305)][t(1617)]()) {
                                                                                    e.next = 3;
                                                                                    break
                                                                                }
                                                                                return e[t(1639)] = 3, sn[t(1305)].pause();
                                                                            case 3:
                                                                            case "end":
                                                                                return e[t(821)]()
                                                                        }
                                                                }), t)
                                                            })));
                                                        return function(n) {
                                                            var r = e;
                                                            if (r(764) != r(764)) {
                                                                var a = _0x420632[r(503)](_0x3541f3);
                                                                _0x42aace = !_0x8cd7ce.multiplePod && _0x56bce8;
                                                                var i = r(1497),
                                                                    o = r(931).concat(a, r(486)),
                                                                    d = r(1484);
                                                                if (_0x1d1bd5) {
                                                                    var s = i + o + d;
                                                                    return s
                                                                }
                                                                _0x474b9d[r(566)] && _0x217838[r(816)](r(1512));
                                                                var c = typeof _0x54094d[r(1215)][++_0x17c39f[r(766)]] !== r(1162) ? _0x55d399.adsIndex : 0;
                                                                0 == c && _0x11e400[r(905)](), _0x28bf2a[r(566)] && _0x5a4cae.log(r(1531) + c);
                                                                var l = _0x2643fb[r(503)](c),
                                                                    u = '<vmap:AdBreak timeOffset="start" breakType="linear" breakId="preroll">\n                        <vmap:AdSource id="preroll-ad-2" allowMultipleAds="true" followRedirects="true">\n                            <vmap:AdTagURI templateType="vast3">\n                            <![CDATA[' [r(825)](l, r(486)),
                                                                    _ = i + o + u + d;
                                                                return _
                                                            }
                                                            return t.apply(this, arguments)
                                                        }
                                                    }()), sn[a(1305)][a(1617)]()) {
                                                    if ("jMfCA" !== a(411)) return _0x25cee2[a(1142)]();
                                                    e.next = 6;
                                                    break
                                                }
                                                return e[a(1639)] = 6, sn[a(1305)][a(1326)]();
                                            case 6:
                                            case a(1290):
                                                return e[a(821)]()
                                        }
                                }), e)
                            })))), h(b(sn), pn(1371), (function(e) {
                                var t = pn,
                                    n = new IntersectionObserver((function(e) {
                                        var t = a;
                                        sn[t(779)] = !1, e[t(1315)]((function(e) {
                                            var n = t;
                                            if (n(488) != n(488)) return _0x19fc15(_0x707420) || _0x58eb8b(_0x5bbe42) || _0x4f5c79(_0x1f01b1) || _0x164fe4();
                                            !sn.otherPlayerInView && e[n(476)] && (sn.otherPlayerInView = !0)
                                        })), sn.toggleSticky()
                                    }), {
                                        threshold: [0],
                                        rootMargin: "" [t(825)](10, "px 0px ")[t(825)](10, t(903))
                                    }),
                                    r = new MutationObserver((function(r) {
                                        var a = t;
                                        r[a(1315)]((function(t) {
                                            var r = a;
                                            e[r(1315)]((function(e) {
                                                n[r(468)](e)
                                            })), e.forEach((function(e) {
                                                var t = r;
                                                t(1291) !== t(659) ? n[t(1194)](e) : _0x19bea8.defineProperty(_0x3f8d9b, _0x46b4d4, {
                                                    value: _0x15f4a6,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                            }))
                                        }))
                                    }));
                                e[t(1315)]((function(e) {
                                    n.observe(e)
                                })), e[t(1315)]((function(e) {
                                    r[t(1194)](e, {
                                        attributes: !0,
                                        attributeFilter: ["style"]
                                    })
                                }))
                            })), h(b(sn), pn(1317), (function(e) {
                                var t = 0,
                                    n = [],
                                    r = setInterval((function() {
                                        var i = a,
                                            o = i(987) + sn.clientname;
                                        if (window[i(974)][i(1126)](o))
                                            if (t < e.length) {
                                                var d = window.document[i(1126)](e[t]) ? window[i(974)][i(1126)](e[t]) : window[i(974)].getElementsByClassName(e[t])[0];
                                                d && n[i(1554)](d), t += 1
                                            } else n.length > 0 && sn[i(1371)](n), clearInterval(r)
                                    }), 1e3)
                            })), h(b(sn), pn(888), (function() {
                                var e = pn;
                                document[e(1128)]("visibilitychange", function() {
                                    var t = e;
                                    if ("epSWW" === t(721)) return _0x2da859;
                                    var n = u(regeneratorRuntime[t(382)]((function e(n) {
                                        var r = t;
                                        if ("tWJGq" === r(1541)) return regeneratorRuntime[r(378)]((function(e) {
                                            var t = r;
                                            if (t(1611) !== t(802))
                                                for (;;) switch (e.prev = e[t(1639)]) {
                                                    case 0:
                                                        if (window[t(566)] && console[t(816)](document.visibilityState), document[t(415)] != t(478)) {
                                                            e[t(1639)] = 9;
                                                            break
                                                        }
                                                        if (sn.isClientActive = !0, !sn[t(1305)] || !sn[t(1305)][t(1617)]() || sn[t(1305)][t(704)][t(1469)]()) {
                                                            if ("ucCZa" === t(1242)) {
                                                                e[t(1639)] = 7;
                                                                break
                                                            }
                                                            if (void 0 === _0x1a9261) throw new _0x539b02("this hasn't been initialised - super() hasn't been called");
                                                            return _0x1fc47e
                                                        }
                                                        return e[t(1639)] = 6, sn[t(1305)][t(881)]();
                                                    case 6:
                                                        sn.newIMA(++sn[t(766)]);
                                                    case 7:
                                                        e[t(1639)] = 13;
                                                        break;
                                                    case 9:
                                                        if (sn[t(718)] = !1, sn.ubPlayer.paused()) {
                                                            if (t(1459) == t(1459)) {
                                                                e[t(1639)] = 13;
                                                                break
                                                            }
                                                            return _0x290f3c[t(498)](this, arguments)
                                                        }
                                                        return e.next = 13, sn.ubPlayer[t(1326)]();
                                                    case 13:
                                                    case t(1290):
                                                        return e[t(821)]()
                                                } else _0x52c00c.COMP_DEBUG && _0x31715d[t(816)](t(400)), _0x7802ff[t(510)] = _0x55f5a8[t(510)] || {
                                                    cmd: []
                                                }, _0x4a87c1.cmd[t(1554)]((function() {
                                                    var e = t;
                                                    _0x525697 = _0x2375ae[e(450)](_0xf3f1d[e(1030)], _0x33e310[e(899)], _0xaa5f7b[e(583)]).addService(_0x941e44.companionAds())[e(1585)](_0x5c7f88.pubads()), _0x4d812f[e(1143)](), _0x43ab29.display(_0x5434e4[e(583)]), _0x1b571e(), _0x4b2166()
                                                }))
                                        }), e);
                                        var a = [];
                                        return _0x42111e = _0x3fe68e[r(419)](_0x6c2ed5), _0x50d155(_0x5b4748) == r(418) ? _0x3caf32 = [][r(825)](_0x3b755c(_0x46af07), _0x37c74b(_0x542922)) : _0x2c58e5 = [_0x3aa89c, _0x15980a], _0x25ff96[r(1315)]((function(e) {
                                            a[r(1554)]({
                                                sources: [{
                                                    type: _0x24c2f4.getMediaType(e),
                                                    src: e
                                                }]
                                            })
                                        })), a
                                    })));
                                    return function(e) {
                                        var r = t;
                                        if (r(1319) !== r(391)) return n[r(498)](this, arguments);
                                        _0x1ab0dc = _0x4702de[r(498)](this, arguments)
                                    }
                                }())
                            })), h(b(sn), pn(517), (function(e) {
                                var t = pn;
                                e[t(1315)]((function(e) {
                                    var n = t,
                                        r = document[n(614)](n(605));
                                    r.rel = n(1005), r[n(675)] = n(1275), r[n(432)] = e, document.getElementsByTagName(n(595))[0][n(1225)](r)
                                }))
                            })), h(b(sn), "loadDynamicScripts", (function(e, t) {
                                return new Promise((function(n, r) {
                                    var i = a;
                                    if ("ezRsi" !== i(452)) {
                                        var o = 0,
                                            d = [];
                                        try {
                                            t ? i(1340) === i(1246) ? (901 == _0x431595.data[i(661)].getErrorCode() && _0x41061b[i(1422)][i(1476)].setVpaidMode(_0x5ab6f1[i(1422)][i(1166)][i(1354)].DISABLED), _0x2a4763[i(1471)].isVpaidModified = !0, 403 == _0x67a87d[i(1449)].AdError.getErrorCode() && _0x461960.ima[i(1476)][i(1414)](_0x47980a[i(1422)][i(1166)][i(1354)][i(1589)]), _0xc4148a[i(1471)].isVpaidModified = !0, _0x214c99.prebidIma[i(992)]++, _0x52c82d[i(1471)][i(1136)] >= _0x5931cb[i(1471)].retryAdCounter && (_0x2b5351[i(1471)].retryAd = !0, _0x203257[i(1471)].retryAdCounter = 0), _0xbb6368.sendAdRequestForPrebid(_0x5eb7ca[i(645)][i(1343)].ad, !0, .4), _0x4a8b01[i(1618)]("retrying to run the previous prebid response, as it contains vastXML")) : n({
                                                scriptsLoaded: d[i(1554)](e),
                                                counter: e[i(1446)]
                                            }) : e[i(1315)]((function(t) {
                                                var r = i,
                                                    a = document[r(614)](r(414));
                                                a.setAttribute(r(979), t), document[r(1348)](r(1365))[0][r(1225)](a), a[r(972)] = function() {
                                                    var a = r;
                                                    if (a(1289) == a(1289)) o++, d[a(1554)](t), o == e[a(1446)] && n({
                                                        scriptsLoaded: d,
                                                        counter: o
                                                    });
                                                    else {
                                                        var i = _0xa54665[a(715)].ubMainVideos;
                                                        _0xa66f0c = i[_0x2d432f[a(1041)](i[a(1446)])]
                                                    }
                                                }
                                            }))
                                        } catch (e) {
                                            r({
                                                error: e
                                            })
                                        }
                                    } else _0x4bc600[i(566)] && _0x14369b[i(816)](i(820) + _0x4fd8b5[i(718)], _0x3b0270.ubPlayer[i(1617)]()), _0x516ab3[i(751)](i(1691))
                                }))
                            })), h(b(sn), pn(884), (function() {
                                var e = pn;
                                if (e(1111) == e(1111)) {
                                    if (sn[e(1455)] && !sn[e(746)])
                                        if (e(603) === e(1483)) {
                                            if (!_0x5de291.inReadPlayerLogo || !_0x265b3f.floatingPlayerLogo) {
                                                var t = _0x5d106f[e(761)]("#ubp_logo");
                                                _0x3bc124.inReadPlayerLogo || _0x5ce1db[e(540)] || !t ? !_0x273a51[e(1540)] && t ? ((_0x55af29[e(761)](e(1370)) || _0xf60e85[e(761)](e(1010))) && (t.style[e(1002)] = e(1187)), _0x4bf1cb.querySelector(".unsticky") && (t[e(908)][e(1002)] = "none")) : !_0x2afd19[e(540)] && t && (_0x1f1ad8[e(761)](e(1171)) && (t[e(908)][e(1002)] = "block"), (_0x4e1d90[e(761)](e(1370)) || _0x3309db[e(761)](e(1010))) && (t[e(908)][e(1002)] = e(565))) : t[e(908)][e(1002)] = e(565)
                                            }
                                        } else {
                                            var n = [];
                                            n = sn.floatingAvoidUrl.split(","), verifyURL = function(t) {
                                                var n, r, a = e;
                                                return "mxLvH" !== a(525) ? _0x459ff4[a(378)]((function(e) {
                                                    for (var t = a;;) switch (e[t(799)] = e[t(1639)]) {
                                                        case 0:
                                                            return n = {
                                                                Accept: t(762)
                                                            }, e[t(1639)] = 3, _0x38077a(_0x1e3a59, {
                                                                method: t(1320),
                                                                headers: n
                                                            });
                                                        case 3:
                                                            return r = e[t(428)], e.abrupt(t(1681), r[t(505)]());
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), _0x2db515) : window.location[a(432)] == t || void 0
                                            }, n[e(1173)](verifyURL) && (sn.floatingPlayer = !1, sn[e(1546)] = !1), sn.isFloatingBlockChecked = !0
                                        }
                                    return !!(sn[e(1150)] && !sn[e(1014)] || sn[e(1014)] && sn.floatingonMobile)
                                }
                                _0x5db770(_0x2f4529), _0x38c3c3 = null, _0x2b6532[e(580)] && _0x302cba[e(816)](e(497))
                            })), h(b(sn), "checkPlayerIsInView", (function() {
                                var e = pn;
                                if (e(1446), sn[e(815)]) {
                                    if (!sn[e(1228)]) {
                                        var t = "REQUIRED_PX_FOR_NEARBY_VIEWPORT" in sn[e(632)] && 0 != sn[e(632)][e(1270)] ? sn.clientData[e(1270)] : 150;
                                        sn.isNearViewport(window[e(387)].document[e(1126)](sn[e(413)]), t)
                                    }
                                } else sn[e(724)]()
                            })), h(b(sn), pn(1300), (function(e) {
                                var t = pn,
                                    n = arguments[t(1446)] > 1 && void 0 !== arguments[1] ? arguments[1] : 150;
                                if (e)
                                    if (t(1479) != t(1479)) _0x7d82f4[t(1194)](_0x9fa66d);
                                    else {
                                        var r = new IntersectionObserver((function(n) {
                                            var a = t;
                                            if (n[0].isIntersecting)
                                                if (a(1461) === a(750)) switch (_0x27d410[a(799)] = _0x29b9bd[a(1639)]) {
                                                    case 0:
                                                        _0x421eef[a(1685)] && _0x1ebf76[a(363)](), _0x31c251[a(566)] && _0x3b3f4d[a(816)](a(852)), _0x14cf68[a(1148)] && _0x13295b[a(803)](), _0x2d59cb[a(1471)][a(1177)] && (_0x287f4c[a(1618)](a(553)), _0x4c4a9f[a(1471)].isPrebidAdStarted = !1, _0x20b8f3[a(1471)][a(426)] = !1, _0x52e8c0[a(1626)][a(625)](), _0x51a885[a(1273)]()), _0x261633 = _0x283093[a(490)](), _0x40e1c9[a(1e3)] = _0x355237((_0x466cae - _0x56a48e) / 1e3 + 1).toFixed(0), _0x3ac9b4 = _0x148eb8[a(1444)](_0x38c82d, _0x3c4cf1[a(1e3)]), _0x154300 = _0x5aa6ce, _0x2653bf[a(455)] = _0x55d419[a(455)] + _0x4cf18d(_0x4f00e2), _0x13e017[a(1195)](_0x21ff19), _0x3c7e36[a(691)] += _0x210f0e(_0x230291), _0x5f41c2 = 0, _0x535728[a(884)]() && (_0x1f66f9[a(1297)] = !1, _0x2b36f9[a(1142)]()), _0x28f8fa[a(1323)] && (_0x5042fd = _0x19f2c2.querySelector(a(738)), _0x4f740c[a(908)][a(1550)] = a(478));
                                                    case 14:
                                                    case "end":
                                                        return _0x29d35b[a(821)]()
                                                } else !sn[a(434)] && (sn[a(724)](), sn[a(434)] = !0), sn[a(1080)] = !0, r.unobserve(e)
                                        }), {
                                            threshold: [0],
                                            rootMargin: "" [t(825)](n, t(1465))[t(825)](n, t(903))
                                        });
                                        r[t(1194)](e)
                                    }
                            })), h(b(sn), pn(893), (function(e) {
                                var t = pn;
                                if (e) {
                                    var n = sn[t(621)];
                                    n /= 100;
                                    var r = e.getBoundingClientRect();
                                    return (r[t(1024)] > 0 || r[t(801)] > e[t(872)] * n) && (r.bottom < window.parent[t(639)] || r[t(1024)] < window.parent.innerHeight - e[t(872)] * n) && r[t(728)] > 0 && r[t(465)] < (window[t(387)][t(527)] || window[t(387)][t(974)][t(759)][t(883)])
                                }
                            })), h(b(sn), pn(446), (function(e) {
                                var t = pn;
                                if (e) {
                                    if (t(1515) != t(1515)) return this[t(754)] += this[t(754)];
                                    var n = e[t(663)]();
                                    return n[t(801)] > 0 && n[t(728)] > 0 && n[t(465)] < (window.parent[t(527)] || window[t(387)][t(974)][t(759)].clientWidth) && n[t(1024)] < (window[t(387)][t(639)] || window[t(387)][t(974)][t(759)][t(1222)])
                                }
                            })), h(b(sn), pn(456), (function(e, t) {
                                var n = pn;
                                if (e) {
                                    var r = e[n(663)](),
                                        a = window[n(866)][n(639)] || window[n(974)].documentElement[n(1222)];
                                    return !(Math.floor(100 - (r.top >= 0 ? 0 : r[n(1024)]) / + -r[n(842)] * 100) < t || Math.floor(100 - (r[n(801)] - a) / r[n(842)] * 100) < t)
                                }
                            })), h(b(sn), pn(369), (function(e) {
                                var t = pn;
                                if (t(717) === t(894)) !_0x67c982[t(846)] && _0x4cbf45[t(1305)] && (_0x25d85a.isPlayerViewedOnce ? _0x1c6f25[t(1297)] = !0 : _0x20b31f[t(1128)](t(1597), (function e() {
                                    var n = t,
                                        r = _0x1cf202[n(974)].getElementById(_0x46d43c[n(413)]);
                                    (!_0x15ce8a[n(369)](r).any || _0x41dc5e[n(369)].top) && (_0xbe21e8.isPlayerViewedOnce = !0, _0x51cf58[n(1297)] = !0, _0x2ce61a[n(1565)](n(1597), e))
                                })), _0x37bc0d[t(1142)]());
                                else if (e) {
                                    var n = e[t(663)](),
                                        r = {};
                                    return r[t(1024)] = n[t(1024)] < 0, r.left = n[t(465)] < 0, r.bottom = n[t(801)] > (window[t(387)][t(639)] || window.parent[t(974)][t(759)][t(1222)]), r.right = n[t(728)] > (window[t(387)].innerWidth || window[t(387)][t(974)][t(759)].clientWidth), r[t(1062)] = r[t(1024)] || r[t(465)] || r.bottom || r.right, r[t(1039)] = r[t(1024)] && r.left && r.bottom && r[t(728)], r
                                }
                            })), h(b(sn), pn(1174), (function(e) {
                                var t = pn;
                                if (document.getElementById(t(918))) {
                                    if ("OuiIW" === t(1341)) return _0xf62e83[t(498)](this, arguments);
                                    var n = document[t(891)]();
                                    n[t(1225)](document[t(1126)]("unibots-video")), e[t(650)].insertBefore(n, e)
                                } else console[t(816)](t(1612))
                            })), h(b(sn), pn(895), (function(e) {
                                var t = pn;
                                if ("qxloj" === t(707)) {
                                    if (_0x330b05)
                                        for (var n = _0x579454[t(1446)] - 1; n > 0; n--) {
                                            var r = _0x26bd55[t(1271)](_0x3882c8[t(1413)]() * (n + 1)),
                                                a = [_0x5e6a27[r], _0x4f5232[n]];
                                            _0x1e8bfd[n] = a[0], _0x157e42[r] = a[1]
                                        }
                                    return _0x4cf87a
                                }
                                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                                if (null == e) throw new Error("Invalid / Undefined Referance for the ubpsocket!");
                                sn[t(1425)] = e, null != i && (sn[t(645)] = i), canAutoplay[t(1601)]({
                                    timeout: 100,
                                    muted: !1,
                                    inline: !0
                                })[t(558)]((function(e) {
                                    var n = t;
                                    if ("NYXxM" === n(1125)) !1 === e[n(1375)] ? sn[n(1218)]() : (sn.autoplayAllowed = !0, sn.autoplayRequiresMute = !1, sn[n(1212)](!0));
                                    else {
                                        var r = _0xf7a21e.createElement(n(1281));
                                        r.id = _0x988cb[n(583)], r[n(908)][n(833)] = _0x1f2405[n(1014)] ? "".concat(_0x2c944f[n(1571)], "px") : "" [n(825)](_0x472238[n(1140)], "px"), r.style[n(842)] = n(993), r.style[n(1210)] = n(993), r.style[n(990)] = n(672), _0x2a2b0d[n(1365)][n(1225)](r), _0x52463a()[n(558)]((function() {
                                            var e = n;
                                            _0x101eb0[e(580)] && _0x21f40c.log(e(1308)), _0x1a1e86()
                                        }))[n(1254)]((function(e) {
                                            var t = n;
                                            _0x10ccf2.COMP_DEBUG && _0x172ca0.error(t(665), e)
                                        }))
                                    }
                                }))
                            })), h(b(sn), pn(1218), (function() {
                                var e = pn;
                                canAutoplay.video({
                                    timeout: 100,
                                    muted: !0,
                                    inline: !0
                                })[e(558)]((function(t) {
                                    var n = e;
                                    if (!1 === t[n(1375)])
                                        if ("WlVln" !== n(1605)) window.UBP_DEBUG && console[n(816)](n(938)), sn[n(1306)] = !1, sn.autoplayRequiresMute = !1;
                                        else {
                                            var r, a, i;
                                            15 == _0x5bef2c ? _0x4490ea = 5 : 27 == _0x49d6cd ? _0x42c605 = 3 : 38 == _0x1a0252 ? _0x83932e = 4 : 50 == _0x2a29b7 ? _0x4633fb = 5 : 58 == _0x3fb277 ? _0x5b2a81 = 5 : _0x57b9a3 >= 69 ? _0x3a8e08 = 2 : _0x51e51a = _0x54974a, _0x240a28++;
                                            var o = null !== (r = null === _0x58ff01 || void 0 === _0x5bf908 ? void 0 : _0x5dc197[n(1431)]) && void 0 !== r ? r : _0x2950c2;
                                            _0x10e4fc[n(1215)][n(1554)]({
                                                ads: [o],
                                                cpm: null !== (a = null === _0x558345 || void 0 === _0x59e276 ? void 0 : _0x500de1[n(897)]) && void 0 !== a ? a : .1,
                                                adTagName: null !== (i = null === _0x493013 || void 0 === _0x20c89a ? void 0 : _0x3b70c8.adTagName) && void 0 !== i ? i : n(1091) + _0x181bcf,
                                                delay: _0xf68814,
                                                custParam: _0x5a58c2
                                            })
                                        }
                                    else window.UBP_DEBUG && console[n(816)]("// Muted autoplay is allowed."), sn[n(1306)] = !0, sn[n(812)] = !0;
                                    sn[n(815)] ? sn[n(1212)]() : sn[n(724)]()
                                }))
                            })), h(b(sn), pn(1560), (function() {
                                var e = pn;
                                return window[e(1014)] && e(693) in sn[e(632)] ? e(693) in sn.clientData && 1 == sn[e(632)][e(693)] : "CLOSE_BUTTON_ENABLE" in sn[e(632)] && 1 == sn[e(632)][e(655)]
                            })), h(b(sn), "shuffleAdsarray", (function(e) {
                                if (e)
                                    for (var t = e.length - 1; t > 0; t--) {
                                        var n = Math.floor(Math.random() * (t + 1)),
                                            r = [e[n], e[t]];
                                        e[t] = r[0], e[n] = r[1]
                                    }
                                return e
                            })), h(b(sn), pn(1435), []), h(b(sn), "enableAudioAds", (function() {
                                var e = pn;
                                return !(!sn[e(1402)] && e(920) in sn[e(632)])
                            })), h(b(sn), pn(657), (function(e, t, n) {
                                for (var r = pn, a = 0; a < t.length;) {
                                    var i = !0;
                                    if (t[a][r(1683)](r(1076)) && (i = sn.enableAudioAds()), i) {
                                        var o = e.split(t[a]);
                                        o[r(1446)] > 1 && ("SHTDY" !== r(1579) ? e = o[0] + n[a] + o[1] : this[r(1279)] && this.ubPlayer && (this.ubPlayer[r(1628)](), this[r(846)] = !0, this.destroyAdManger(), _0x4c300f(_0x55f6b1)))
                                    }
                                    a++
                                }
                                return e
                            })), h(b(sn), pn(416), (function() {
                                var e = pn;
                                if (e(739) == e(739)) {
                                    var t, n, r, a, i, o, d, s = 0,
                                        c = 0,
                                        l = 0 == sn[e(1035)] ? .7 : sn[e(1035)];
                                    sn[e(1435)] = sn[e(1286)] ? sn.shuffleAdsarray(sn[e(822)]) : sn[e(822)];
                                    var u = null !== (t = null !== (n = null === (r = sn[e(632)]) || void 0 === r || null === (a = r.AD_SOURCES) || void 0 === a || null === (i = a[e(836)]) || void 0 === i ? void 0 : i[e(1596)]) && void 0 !== n ? n : null === (o = sn[e(772)]) || void 0 === o || null === (d = o[e(1596)]) || void 0 === d ? void 0 : d[e(790)]) && void 0 !== t && t;
                                    sn[e(1435)][e(1315)]((function(t) {
                                        var n, r, a, i = e;
                                        c = 15 == s ? 5 : 27 == s ? 3 : 38 == s ? 4 : 50 == s || 58 == s ? 5 : s >= 69 ? 2 : l, s++;
                                        var o = null !== (n = null == t ? void 0 : t[i(1431)]) && void 0 !== n ? n : t;
                                        sn[i(1215)][i(1554)]({
                                            ads: [o],
                                            cpm: null !== (r = null == t ? void 0 : t.cpm) && void 0 !== r ? r : .1,
                                            adTagName: null !== (a = null == t ? void 0 : t[i(1486)]) && void 0 !== a ? a : i(1091) + s,
                                            delay: c,
                                            custParam: u
                                        })
                                    })), window.UBP_DEBUG && console[e(1529)](sn[e(1215)])
                                } else _0x11d9db.reInitializePlayer(), _0x337b9b[e(1305)][e(1101)]("play", _0x41659a(_0x3f2547.mark((function t() {
                                    var n = e;
                                    return _0xaac97b[n(378)]((function(e) {
                                        for (var t = n;;) switch (e[t(799)] = e.next) {
                                            case 0:
                                                return e[t(1639)] = 2, _0x47dbd2.ubPlayer.trigger(t(1240));
                                            case 2:
                                                return e[t(937)](t(1681), e[t(428)]);
                                            case 3:
                                            case t(1290):
                                                return e[t(821)]()
                                        }
                                    }), t)
                                }))))
                            })), h(b(sn), pn(1165), (function(e) {
                                var t = pn,
                                    n = "direct";
                                if (e)
                                    if (t(442) != t(442)) _0x4e80d8[t(1305)][t(1422)][t(581)][t(1476)][t(1105)] = _0x252d2b[t(641)];
                                    else {
                                        var r = {
                                            main: 21928950349,
                                            new_main: 22082859479,
                                            cr_ads: 23027927350,
                                            affinity: 21930596546
                                        };
                                        Object[t(1055)](r)[t(1315)]((function(a) {
                                            var i = t;
                                            i(409) != i(409) ? _0x207f9f.reset4CFlag && (_0x251070.reset4CFlag = !1) : e[i(1683)](r[a]) && (n = a)
                                        }))
                                    }
                                return n
                            })), h(b(sn), pn(1650), (function() {
                                var e, t, n, r, i, o = pn,
                                    d = sn.companionAd[o(1518)],
                                    s = document[o(1126)](o(987)[o(825)](sn[o(632)][o(1221)])),
                                    c = d[o(868)],
                                    l = !1,
                                    u = 0;

                                function _() {
                                    return new Promise((function(n, r) {
                                        var i = a;
                                        window[i(580)] && console[i(816)](i(400)), window[i(510)] = window[i(510)] || {
                                            cmd: []
                                        }, googletag[i(1245)][i(1554)]((function() {
                                            var r, u, _, f, x = i;
                                            t = googletag[x(450)](d[x(1030)], d[x(899)], d[x(583)]).addService(googletag[x(1028)]())[x(1585)](googletag[x(1071)]()), googletag[x(1143)](), googletag[x(1002)](d[x(583)]), u = {
                                                root: null,
                                                rootMargin: (r = o)(794),
                                                threshold: .1
                                            }, _ = new IntersectionObserver((function(n) {
                                                n.forEach((function(n) {
                                                    var r = a;
                                                    if (n[r(476)] && !l)
                                                        if (r(1430) != r(1430)) {
                                                            var i, o, d, s, u, _, f = r(909) in _0x29455f[r(632)] && 1 == _0x26ff8f[r(632)][r(909)] || r(1316) in _0x57cd91.clientData && 1 == _0x4812a4[r(632)].DEFAULT_LOGO_ENABLE,
                                                                x = null !== (i = null === (o = _0x320846[r(632)]) || void 0 === o ? void 0 : o[r(562)]) && void 0 !== i ? i : "",
                                                                v = null !== (d = null === (s = _0x14e46e[r(632)]) || void 0 === s ? void 0 : s[r(1558)]) && void 0 !== d ? d : "",
                                                                p = null !== (u = null === (_ = _0x2192df.clientData) || void 0 === _ ? void 0 : _.LOGO_REDIRECT_LINK) && void 0 !== u ? u : "";
                                                            if (r(1316) in _0x526a0e.clientData && _0x4e5205.clientData[r(1316)]) {
                                                                var b, m, h, g, y = _0x305e23[r(1068)](r(1363));
                                                                x = 0 != y ? y : null !== (b = null === (m = _0x2865d9[r(632)]) || void 0 === m ? void 0 : m[r(1664)]) && void 0 !== b ? b : "", p = null !== (h = null === (g = _0x42831e[r(632)]) || void 0 === g ? void 0 : g[r(1302)]) && void 0 !== h ? h : ""
                                                            }
                                                            if (f && "" != x) {
                                                                var w = _0x5885cf.createElement("a");
                                                                w[r(432)] = p, w[r(1528)] = r(1660), w.id = r(1689), w.classList[r(627)] = r(1689);
                                                                var A = _0x2f34ce[r(614)](r(588));
                                                                A[r(979)] = x, A.alt = v || "Unibots.com", A[r(908)] = r(690), A[r(908)][r(1127)] = "transparent", w[r(865)](A), _0x167231[r(1305)][r(1673)][r(1225)](w)
                                                            }
                                                        } else window[r(580)] && console[r(816)](r(471).concat(c, "px ")), googletag[r(1071)]().refresh([t]), window[r(580)] && console[r(816)](r(1186)), !e && (e = setInterval((function() {
                                                            var e = r;
                                                            googletag.pubads().refresh([t]), window[e(580)] && console[e(816)](e(495))
                                                        }), 3e4)), l = !0
                                                }))
                                            }), u), f = new IntersectionObserver((function(t) {
                                                t.forEach((function(t) {
                                                    var n = a;
                                                    t[n(476)] || (n(534) == n(534) ? (clearInterval(e), e = null, l = !1, window.COMP_DEBUG && console[n(816)](n(1391)[n(825)](c, n(1206)))) : (_0x5bbe10[n(1298)] = !1, _0x5254cb[n(1315)]((function(e) {
                                                        var t = n;
                                                        if (e.isIntersecting) _0x318f13.isFullPlayerViewedOnce = !0, _0xc6bcd9[t(1142)](), _0x39f068[t(468)](e[t(1528)]);
                                                        else if (!_0x506740[t(1298)] && !_0x1d5a7e[t(1049)]) {
                                                            var r = _0x15e7f[t(974)][t(1126)](_0x2d0455[t(413)]);
                                                            r && _0x53cc83[t(369)](r)[t(1024)] && (_0x2456e7[t(1298)] = !0)
                                                        }
                                                    }))))
                                                }))
                                            }), u), _[r(1194)](s), f[r(1194)](s), n()
                                        }))
                                    }))
                                }
                                "true" == sessionStorage[o(407)](o(580)) && (window[o(580)] = !0, console[o(406)]("COMPANION DEBUG MODE ON...!")), window[o(1128)]("scroll", (function() {
                                    var n = o,
                                        r = window[n(1362)] || document[n(759)][n(620)];
                                    if (r > u)
                                        if (n(1054) !== n(1521))
                                            if (s[n(663)]()[n(1024)] - window.innerHeight < c && s[n(663)]().bottom > 0) n(377) != n(377) ? _0x320722[n(962)]() : (window[n(580)] && console[n(816)](n(1322)[n(825)](c, "px, Load ad: Scrolling Down")), !e && (e = setInterval((function() {
                                                var e = n;
                                                if ("qNJNR" === e(1058)) googletag[e(1071)]()[e(1367)]([t]), window[e(580)] && console.log(e(1407));
                                                else {
                                                    var r, a, i, o, d = _0x175efa[e(1068)](e(1363));
                                                    0 != d ? _0xda5949 = d : _0x237d35 = null !== (r = null === (a = _0x501e30[e(632)]) || void 0 === a ? void 0 : a.DEFAULT_LOGO_URL) && void 0 !== r ? r : "", _0x3f9614 = null !== (i = null === (o = _0x5c0f5c[e(632)]) || void 0 === o ? void 0 : o[e(1302)]) && void 0 !== i ? i : ""
                                                }
                                            }), 3e4)));
                                            else if ("dowpQ" !== n(1426)) e && (clearInterval(e), e = null, window[n(580)] && console[n(816)](n(497)));
                                    else {
                                        var a = _0x542389 == n(1131) ? _0xcd4801[n(1683)](_0x583430[n(1016)].country) : "exc" == _0x49e7a6 ? !_0x402ec2[n(1683)](_0xb2b5a7[n(1016)][n(911)]) : _0x58e44f == n(1039),
                                            i = _0x151b41 == n(1131) ? _0x1573f6[n(1683)](_0x3e9d26[n(632)].COUNTRY_ORIGIN) : _0x4d71bb == n(1655) ? !_0x4cc366[n(1683)](_0x2aece2.clientData[n(1147)]) : _0x14a335 == n(1039);
                                        if ("logo" == _0x384dfd) return !(!a || !i || "" === _0x3433f7) && _0x1adda4;
                                        if (_0x34677f == n(1601)) return !(!a || !i || "" === _0x26ad3f) && _0x10e551
                                    } else _0x3d62f1[n(580)] && _0x1c0050[n(816)]("Within " [n(825)](_0x50f3a0, n(1393))), !_0x28ebcb && (_0x265638 = _0x4cdf97((function() {
                                        var e = n;
                                        _0x35aa4a[e(1071)]()[e(1367)]([_0x5b8e21]), _0x6e37a1.COMP_DEBUG && _0x518377[e(816)](e(1407))
                                    }), 3e4));
                                    u = r <= 0 ? 0 : r
                                }), !1), r = o, (i = document.createElement(r(1281))).id = d[r(583)], i[r(908)].width = window[r(1014)] ? "" [r(825)](d[r(1571)], "px") : "" [r(825)](d.pcAdWidth, "px"), i[r(908)].height = r(993), i[r(908)][r(1210)] = "auto", i[r(908)].alignSelf = "center", document.body[r(1225)](i), (n = o, n(968) == n(968) ? new Promise((function(e, t) {
                                    var r, a, i = n;
                                    if (r = i(1017), a = o, Array[a(1499)](document.getElementsByTagName("script"))[a(1173)]((function(e) {
                                            var t = a;
                                            if ("zMBOs" === t(1694)) return e[t(979)] === r;
                                            _0x112d0c[t(1618)](t(1337) + _0x3f2fe8[t(1387)])
                                        }))) {
                                        if ("eApIa" !== i(1094)) return i(1497) + i(602)[i(825)](_0x50cb16, i(1067)) + "</vmap:VMAP>";
                                        window.COMP_DEBUG && console[i(816)](i(1478)), _().then(e).catch(t)
                                    } else {
                                        var d = document[i(614)](i(414));
                                        d[i(1230)] = !0, d[i(979)] = i(1017), d[i(972)] = function() {
                                            var n = i;
                                            n(1504) !== n(1364) ? (window.COMP_DEBUG && console[n(816)](n(1132)), _()[n(558)](e)[n(1254)](t)) : _0xe08d19[n(751)](n(1429))
                                        }, document[i(1348)](i(1265))[0][i(1225)](d)
                                    }
                                })) : _0x197ae4 > _0x85ddc3 ? _0x30b218 : _0x1427a9).then((function() {
                                    var e, t, n = r;
                                    if ("BMUgW" !== n(999)) return n(693) in _0x489557[n(632)] && 1 == _0x27598d.clientData.CLOSE_BUTTON_ENABLE_MB;
                                    window[n(580)] && console[n(816)](n(1308)), e = 10, t = setInterval((function() {
                                        var n = a;
                                        if (n(1115) === n(749)) !_0x14a080[n(658)][n(730)](n(1123) + _0x5094e8) && (_0x5119ed[n(658)].add(n(1123) + _0x52af6a), _0x1976a3.classList[n(873)]("unsticky")), _0x83c971[n(736)](!0), _0xb19d68[n(1602)](!0);
                                        else {
                                            if (e--) {
                                                var r = document[n(1126)]("ubVideo"),
                                                    i = document.getElementById(d[n(583)]);
                                                r && r[n(902)] !== i && (n(457) == n(457) ? (r[n(1495)](n(584), i), window.COMP_DEBUG && console[n(816)](n(1552)), clearInterval(t)) : (_0x559b00[n(658)].contains(n(1123) + _0x13c4aa) && (_0x380d94[n(658)][n(873)](n(1123) + _0x593d3c), _0x35fff5[n(658)][n(627)](n(1119))), _0x10a8b6[n(1305)][n(1422)][n(581)][n(1188)].autoPlayAdBreaks = !0, _0x1e9675[n(1456)](_0x4e100f, 0), _0x35ae7d[n(736)](!1), _0x4620cb.hideClosebuttonInread(!1)))
                                            }
                                            e < 0 && clearInterval(t)
                                        }
                                    }), 500)
                                }))[r(1254)]((function(e) {
                                    var t = r;
                                    window[t(580)] && console.error(t(665), e)
                                }))
                            })), h(b(sn), pn(1234), (function() {
                                var e = pn;
                                if (!sn[e(600)]() && sn[e(766)] == sn.adsArray[e(1446)] - 1)
                                    if (e(410) !== e(1458)) window.UBP_DEBUG && console[e(816)](e(608)), sn[e(766)] = -1, sn[e(479)] += 1, sn[e(1215)].forEach((function(t) {
                                        var n = e;
                                        Number(t[n(1237)]) < 1 && (t[n(1237)] = .5)
                                    }));
                                    else if (_0x2f181c(e(1017))) _0x18135b[e(580)] && _0x583d03.log("Ad script is already loaded."), _0x3d0cb5()[e(558)](_0x1e06d1)[e(1254)](_0x364125);
                                else {
                                    var t = _0x1436e3.createElement("script");
                                    t.async = !0, t[e(979)] = e(1017), t[e(972)] = function() {
                                        var t = e;
                                        _0x158f22[t(580)] && _0xfa0912[t(816)](t(1132)), _0x4fa9d9()[t(558)](_0x5bd3b9)[t(1254)](_0x2dcc0b)
                                    }, _0x4f713c[e(1348)](e(1265))[0][e(1225)](t)
                                }
                            })), h(b(sn), pn(905), (function() {
                                var e = pn;
                                if (e(874) == e(874)) {
                                    var t = arguments[e(1446)] > 0 && void 0 !== arguments[0] && arguments[0];
                                    if (t) sn[e(766)] = 0;
                                    else if (e(753) !== e(1575)) sn[e(766)] = 0, sn[e(1215)][e(1446)] = 0, sn[e(416)]();
                                    else {
                                        if (_0x24a696--) {
                                            var n = _0x244a36[e(1126)](e(437)),
                                                r = _0x38d606[e(1126)](_0x618bc6[e(583)]);
                                            n && n[e(902)] !== r && (n.insertAdjacentElement("afterend", r), _0x37d288[e(580)] && _0x3d9fd1[e(816)](e(1552)), _0x494798(_0x19bbbe))
                                        }
                                        _0x225fcd < 0 && _0xa2d1e1(_0xebaeb9)
                                    }
                                } else _0x327c20.adsArray[_0x26f742][e(1237)] = _0x14038c(_0x22fee2[e(1388)])
                            })), h(b(sn), "checkAndApplyKv", (function(e, t) {
                                var n = pn,
                                    r = {},
                                    a = window.mobileCheck ? "MB" : "PC",
                                    i = sn.ubPlayer && sn[n(1305)].muted() && !window[n(971)] ? "MUTED" : n(1373);
                                if (e[t]) {
                                    if ("wYeQv" === n(1523)) throw new _0x116996(n(516));
                                    if (e[n(1480)])
                                        if (n(573) === n(402)) {
                                            if (_0x347c65[n(632)][n(1316)]) {
                                                var o, d, s, c, l = _0x285d7e.specialLogoVideo(n(1363));
                                                0 != l ? _0x53338a = l : _0x515d7b = null !== (o = null === (d = _0x1e5a0b.clientData) || void 0 === d ? void 0 : d.DEFAULT_LOGO_URL) && void 0 !== o ? o : "", _0x360b51 = null !== (s = null === (c = _0x2e7565.clientData) || void 0 === c ? void 0 : c[n(1302)]) && void 0 !== s ? s : ""
                                            }
                                        } else e[n(1557)] && e[t][a] ? r[t] = e[t][a][i] : r[t] = e[t][a];
                                    else e[n(1557)] && (r[t] = e[t][i])
                                }
                                return 0 == Object[n(1055)](r).length && (r = null), r
                            })), h(b(sn), pn(1102), (function(e) {
                                var t = pn,
                                    n = [],
                                    r = window.mobileCheck ? "MB" : "PC",
                                    a = sn[t(1305)] && sn.ubPlayer[t(545)]() && !window.vpmute ? t(1334) : "UNMUTED";
                                return "object" !== d(e) || Array[t(680)](e) ? Array[t(680)](e) && (n = e) : e[t(1160)](a) ? n = e[a] : e[t(1160)](r) && e[r][a], n
                            })), h(b(sn), pn(514), (function(e) {
                                var t, n, r, a, i = pn,
                                    o = 3,
                                    d = sn[i(1215)][e].ads[0],
                                    s = [i(1669), i(1019), i(591)],
                                    c = sn[i(1165)](sn[i(822)][e][i(1431)])[i(1344)](),
                                    l = i(408) + c,
                                    u = window[i(1016)] && window[i(1016)].country != i(944) ? i(370) + window[i(1016)].country : "",
                                    _ = c == i(1669) ? sn[i(988)] : c == i(1019) ? sn[i(705)] : sn[i(435)],
                                    f = c == i(1669) ? sn[i(755)] : c == i(1019) ? sn[i(1124)] : sn[i(597)],
                                    x = c == i(1669) ? sn[i(1085)] : c == i(1019) ? sn[i(1106)] : sn.loopCheckerCrAds,
                                    v = "MAIN" == c ? sn.mainAdRequest : "NEW_MAIN" == c ? sn[i(1202)] : sn[i(877)],
                                    p = sn[i(1330)][i(1216)][i(1173)]((function(e) {
                                        var t = i;
                                        return "UJWuZ" !== t(609) ? e[t(482)][t(965)]() === window[t(1016)][t(911)][t(965)]() : _0x1be012[t(680)](_0x2ffa99) ? _0x2e574f(_0x492ac2) : void 0
                                    }));
                                if (n = window[i(781)], s[i(1683)](c))
                                    if (i(1517) == i(1517)) {
                                        if (r = {}, sn[i(1330)][i(1216)] && sn[i(1330)][i(1216)][i(1446)] && p) {
                                            n = sn[i(1330)][i(1216)][i(1088)]((function(e) {
                                                var t = i;
                                                if (t(1070) == t(1070)) return e[t(482)][t(965)]() === window[t(1016)].country[t(965)]();
                                                _0x1d1d26[t(566)] && _0x1bf3c2[t(816)](t(1251)), _0x19346b.isPaused = !0
                                            }));
                                            var b = sn.checkAndApplyKv(n, c);
                                            if (r = null != b ? b : n, window.defaultKv && window[i(781)][window[i(1016)][i(911)]])
                                                if ("pHgUj" !== i(1007)) {
                                                    if (!r[c] || r[c] && 0 == r[c][i(1446)])
                                                        if (i(396) === i(1556)) _0x55a4e3((function() {
                                                            var e = i;
                                                            _0x502808.googleCpm || (_0x3eb000[e(1077)] = _0x3fa7c7[e(1215)][_0x102c67][e(897)]), _0x458975[e(1305)].ads.isInAdMode() && _0x3da87e[e(632)][e(966)] == e(462) && _0xd893d7[e(1425)][e(1110)]("impression", {
                                                                website: _0x1163fe[e(387)][e(1607)].hostname,
                                                                bidder: e(383),
                                                                cpm: _0x5769d2[e(1077)],
                                                                adTagName: e(983) + _0x2ebf5c[e(1215)][_0xfb2563][e(1486)]
                                                            })
                                                        }), 2100);
                                                        else {
                                                            var m = window[i(781)][window.geoData[i(911)]][c];
                                                            r[c] = sn[i(1102)](m)
                                                        }
                                                } else _0xa27b2f[i(546)] = !1, _0x48944b[i(1297)] = !0, _0x2f3c0e[i(1620)]()
                                        } else n && window.geoData && n[window.geoData[i(911)]] && ("bHXes" === i(394) ? ((_0x493623[i(761)](i(1370)) || _0x2983b4[i(761)](i(1010))) && (_0x450675.style[i(1002)] = i(565)), _0x302e0b[i(761)](i(1171)) && (_0x2d5b71[i(908)][i(1002)] = i(1187))) : ((n = n[window.geoData[i(911)]])[c] && (r[c] = sn[i(1102)](n[c])), r[i(911)] = window[i(1016)][i(911)]));
                                        if (r && window[i(1016)]) {
                                            if ("fqiwo" !== i(1082)) return _0x1fa92a[i(498)](this, arguments);
                                            if (r[c] && r[c].length)
                                                if (i(940) == i(940)) {
                                                    if (r[c][i(1138)]((function(e, t) {
                                                            return t - e
                                                        })), a = r[c][i(1446)], v && v % (3 * a) == 0 && (x += 1), x >= 6)
                                                        if ("RJdLH" === i(859)) {
                                                            var h = sn.checkAndApplyKv(n, l);
                                                            if (h && h[l] && h[l][i(1446)]) {
                                                                if ("Xenkk" !== i(1516)) {
                                                                    if (_0x142fdd[i(1455)] && !_0x221df[i(746)]) {
                                                                        var g = [];
                                                                        g = _0x317049[i(1353)][i(1272)](","), _0x18bea4 = function(e) {
                                                                            var t = i;
                                                                            if (_0x278ae9[t(1607)][t(432)] == e) return !0
                                                                        }, g[i(1173)](_0xf2862) && (_0x59c345[i(1150)] = !1, _0x3f6785[i(1546)] = !1), _0x2ebdc1[i(746)] = !0
                                                                    }
                                                                    return !!(_0x4a271a.floatingPlayer && !_0x19bee0.mobileCheck || _0x340361[i(1014)] && _0x18265c[i(1546)])
                                                                }
                                                                a = h[l][i(1446)], Array[i(680)](h[l]) ? "WbQQf" === i(1572) ? (_0x413702[i(546)] = !1, _0x1788c3[i(1297)] = !0, _0x49362c[i(1620)]()) : (h[l][i(1138)]((function(e, t) {
                                                                    var n = i;
                                                                    if ("LBdtz" === n(574)) return t - e;
                                                                    _0x3ebfaa(_0x2b2254), _0x2d330a.playlist[n(1639)](), _0xce5c2d[n(908)][n(1550)] = "hidden"
                                                                })), r[c] = h[l]) : r[c] = [h[l]]
                                                            } else x = 0
                                                        } else _0x26a203[i(500)] ? _0x36b80a((function() {
                                                            var e = i;
                                                            _0x16540a[e(500)] && (_0x5e0f94[e(500)] = !1)
                                                        }), 1500) : (_0x50560d[i(566)] && _0xb97f3a.log("Client Active Status : " + _0x19df1b[i(718)], _0x1f3cb9[i(1305)][i(1617)]()), _0x4cf709[i(751)](i(1691)));
                                                    x < 6 && sn.adServedCount && 0 == f && (x = 0, v = 0), (_ = Math[i(1271)](v / o)) >= a && (i(1249) === i(1107) ? (this.nonServedCountPB++, this[i(1450)]++) : _ %= a), v += 1
                                                } else {
                                                    var y = arguments.length > 0 && arguments[0] !== _0x5f1c62 && arguments[0];
                                                    y ? _0x476fd0[i(766)] = 0 : (_0x5839b9.adsIndex = 0, _0x1a2485[i(1215)][i(1446)] = 0, _0x1eea0a[i(416)]())
                                                }
                                        }
                                        if ("MAIN" == c ? sn.loopCheckerMain = x : c == i(1019) ? sn[i(1106)] = x : sn[i(1491)] = x, c == i(1669) ? sn[i(763)] = v : c == i(1019) ? sn[i(1202)] = v : sn[i(877)] = v, c && n && r && r[c]) {
                                            sn[i(1330)].COUNTRY_KV && !sn[i(1330)][i(1216)][i(1446)] && 1 == Object.keys(n).length && (u = u + "%26KV0%3D" + r[c][_]);
                                            var w = d[i(1272)](i(1073));
                                            t = w[0] + i(1073) + r[c][_] + u, sn[i(1077)] = r[c][_]
                                        }
                                    } else _0x4367d1({
                                        scriptsLoaded: _0xd3b122[i(1554)](_0x47952d),
                                        counter: _0x4d5163[i(1446)]
                                    });
                                return t && (d = t), window[i(1016)] && window[i(1016)][i(911)] == i(944) && (window[i(1016)] = ""), t
                            })), h(b(sn), pn(1536), (function(e) {
                                var t = pn;
                                if (t(421) !== t(1295)) {
                                    if (vastSplit = e[t(1272)](t(1623)), vastSplit[1]) {
                                        var n = sn[t(765)] ? "&cust_params=b_upr%3Doff%26" : t(1452);
                                        e = vastSplit[0] + n + vastSplit[1]
                                    }
                                    return e
                                }
                                _0x579a2c[t(1618)](t(933) + _0x2d5981[t(1471)][t(358)] + t(364)), _0x9f618f[t(1425)][t(1110)](t(372), {
                                    data: {
                                        playerName: _0x39cb9f[t(387)].location.hostname,
                                        country: _0x14bc43[t(911)],
                                        type: t(1329),
                                        errorCode: _0x5b7543[t(1449)].AdError[t(1200)](),
                                        errorMessage: _0x21f467[t(1449)][t(661)].getMessage(),
                                        bidsResponse: _0x3f0227[t(645)][t(1343)][t(984)][_0x169ae0.prebidIma[t(358)]],
                                        retryData: {
                                            wasRetried: _0x3eec22[t(1471)].retryAd,
                                            retriedCount: _0x10033e[t(1471)][t(992)]
                                        },
                                        device: _0x168ad5[t(1014)] ? "mb" : "pc"
                                    }
                                })
                            })), h(b(sn), pn(809), (function(e, t) {
                                var n = pn;
                                if (t && t[n(1446)])
                                    for (var r = 0; r < t.length; r++)
                                        if (n(1671) !== n(1250)) {
                                            var a = e.split("&" + t[r]);
                                            if (a[n(1446)] > 1)
                                                if ("vQhxb" === n(1561)) {
                                                    var i = a[1][n(1272)]("&");
                                                    if (i && i[n(1446)] > 1) {
                                                        if (n(1619) === n(696)) throw new _0x1127b5(n(1581));
                                                        a[1][n(1500)](i[0], ""), e = a[0] + a[1]
                                                    } else i && i[0][n(1446)] && (e = a[0])
                                                } else _0x12112f.adInterval(_0x22459e, _0x4b7f2c, _0x1d33f0)
                                        } else {
                                            var o = _0x160d1d[n(1126)](n(437)),
                                                d = _0x129558[n(1126)](_0x3a76fe[n(583)]);
                                            o && o.nextSibling !== d && (o[n(1495)](n(584), d), _0x6d5845.COMP_DEBUG && _0x4cebe5.log(n(1552)), _0x515759(_0x483d01))
                                        }
                                return e
                            })), h(b(sn), pn(1635), (function(e) {
                                var t = pn;
                                if (-2 == sn[t(1527)]) e = sn.ubPlayer && !sn.ubPlayer[t(545)]() ? e + t(563) : e + t(569);
                                else if (-1 == sn[t(1527)]) e = -2 == sn[t(890)] ? e + t(563) : e + t(569);
                                else if (sn[t(1527)]) e = e + t(797) + Number(sn[t(1527)]);
                                else {
                                    if ("mPnsB" === t(1252)) return _0x55ef87.open(_0x48c41b, t(1660));
                                    window[t(566)] && console[t(816)]("plcmt flag removed")
                                }
                                return e
                            })), h(b(sn), pn(503), (function(e) {
                                var t = pn;
                                if (t(924) !== t(712)) {
                                    if (sn[t(1215)][e] && sn.adUnit.checkUbAdx(sn.adsArray[e][t(704)][0]) && sn[t(1215)][e][t(448)] && sn[t(1454)] && "AD_DELAY_DURATIONS" in sn.clientData || sn[t(814)]) {
                                        var n = sn[t(632)][t(966)] == t(462),
                                            r = sn.clientData[t(1117)],
                                            a = 0;
                                        switch (sn.adPlayDurationVersion) {
                                            case 1:
                                                a = sn.adServedCount > 1 ? r[0] : r[1];
                                                break;
                                            case 2:
                                                a = 0 == sn.adServedCount ? r[0] : 1 == sn.adServedCount ? r[1] : r[2];
                                                break;
                                            case 3:
                                                a = 0 == sn[t(927)] ? r[0] : r[1];
                                                break;
                                            default:
                                                console[t(816)]("Ad Play Duration Version is out of bounds")
                                        }
                                        var o = sn.adsArray[e][t(704)][0],
                                            d = "",
                                            s = "";
                                        if ((d = sn[t(514)](e)) && (o = d), o.includes(t(1033)) && n) {
                                            var c = o[t(1272)](t(1073)),
                                                l = t(1205)[t(825)](a),
                                                u = c[1];
                                            if ("" !== u)
                                                if ("LpLFO" === t(1584)) {
                                                    var _ = i(u),
                                                        f = _.indexOf("&");
                                                    s = _[t(778)](0, f)[t(532)]("");
                                                    var x = _.join("");
                                                    d = c[0] + "&cust_params=KV1%3D" + s + x + "%26" + l
                                                } else {
                                                    var v = _0x18ed16[1].split("&");
                                                    v && v.length > 1 ? (_0x275191[1][t(1500)](v[0], ""), _0x9ca884 = _0x421a93[0] + _0x68d31e[1]) : v && v[0].length && (_0x26b41b = _0x31a54d[0])
                                                }
                                            else d = c[0] + t(1623) + l;
                                            d += sn[t(1063)]()
                                        } else if (o[t(1683)](t(1033)) && !n) {
                                            var p = o[t(1272)](t(1623)),
                                                b = p[1],
                                                m = i(b),
                                                h = m.join(""),
                                                g = t(1205)[t(825)](a, t(594));
                                            d = p[0] + t(1623) + s + g + h + sn[t(1063)]()
                                        } else if (o.includes(t(1071))) {
                                            if (t(1351) != t(1351)) return _0x15795a.apply(this, arguments);
                                            d = o + t(977)[t(825)](a) + sn.getDescriptionUrl()
                                        } else t(915) != t(915) ? _0x5eda5e[t(1601)]({
                                            timeout: 100,
                                            muted: !0,
                                            inline: !0
                                        })[t(558)]((function(e) {
                                            var n = t;
                                            !1 === e[n(1375)] ? (_0x3b8426[n(566)] && _0x3742cb.log(n(938)), _0x52a4e8[n(1306)] = !1, _0x3a7afc[n(812)] = !1) : (_0x385a29[n(566)] && _0x2a47d2.log(n(1688)), _0x55ce9b[n(1306)] = !0, _0x3fe80a.autoplayRequiresMute = !0), _0x2f087b.InitPlayerNearViewport ? _0x3dbda0[n(1212)]() : _0x5d17f2[n(724)]()
                                        })) : d = o;
                                        d = sn.addBasicUprFlag(d)
                                    } else if (t(1547) == t(1547)) d = sn[t(1215)][e][t(704)][0], sn[t(1355)][t(1311)](sn[t(1215)][e][t(704)][0]) && (d = sn[t(1215)][e][t(704)][0] + sn[t(1063)]());
                                    else if (_0x1ca452) {
                                        var y = _0x222b13[t(663)](),
                                            w = {};
                                        return w[t(1024)] = y[t(1024)] < 0, w.left = y[t(465)] < 0, w[t(801)] = y[t(801)] > (_0x471f36[t(387)][t(639)] || _0x162246.parent[t(974)][t(759)][t(1222)]), w.right = y[t(728)] > (_0x7e0dfe.parent.innerWidth || _0x510d32[t(387)][t(974)][t(759)][t(883)]), w[t(1062)] = w[t(1024)] || w.left || w[t(801)] || w.right, w.all = w.top && w[t(465)] && w.bottom && w[t(728)], w
                                    }
                                    var A;
                                    if (d[t(1683)](t(1400)) && (d = d[t(1272)](t(1400))[0] + d[t(1272)](t(1400))[1]), d = sn[t(1305)] && sn[t(1305)][t(545)]() ? d + t(1052) : d + t(559), d = sn[t(1635)](d)) {
                                        A = !sn.ignorePolicyChangeEnabled && !(!sn.ubPlayer || !sn[t(1305)][t(545)]());
                                        var E = d[t(1272)](t(1623)),
                                            C = A ? t(1243) : "vpmute=0%26";
                                        C = -2 == sn.waittimeForClick ? C + "click=1%26" : C + t(1241), d = E[0] + t(1623) + C + E[1]
                                    }
                                    return sn.removePlcmtForVpmute1 && A && (d = sn[t(809)](d, [t(1527)])), d
                                }
                                _0x567cd2[t(1124)]++, 0 == _0x56cc5d.nonServedCount && (_0x4f9a87[t(1124)] = 0)
                            })), h(b(sn), pn(1063), (function() {
                                var e = pn,
                                    t = sn[e(632)][e(1221)] == e(855) || sn[e(632)][e(1221)] == e(1283) ? encodeURIComponent("https://www.irctc.co.in") : sn[e(1613)];
                                return e(1416) + t
                            })), h(b(sn), pn(379), (function(e) {
                                var t = pn;
                                return t(1497) + t(602)[t(825)](e, "]]>\n                        </vmap:AdTagURI>\n                    </vmap:AdSource>\n                    </vmap:AdBreak>") + t(1484)
                            })), h(b(sn), "makePrerollRequest", (function(e) {
                                var t = pn,
                                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                if (sn[t(1215)].length > 0) {
                                    var r = sn[t(503)](e);
                                    n = !sn[t(800)] && n;
                                    var a = t(1497),
                                        i = '<vmap:AdBreak timeOffset="start" breakType="linear" breakId="preroll">\n                        <vmap:AdSource id="preroll-ad-1" allowMultipleAds="true" followRedirects="true">\n                            <vmap:AdTagURI templateType="vast3">\n                            <![CDATA[' [t(825)](r, "]]>\n                            </vmap:AdTagURI>\n                        </vmap:AdSource>\n                        </vmap:AdBreak>"),
                                        o = t(1484);
                                    if (n) {
                                        var d = a + i + o;
                                        return d
                                    }
                                    window[t(566)] && console[t(816)]("Ad Pod Working...");
                                    var s = void 0 !== sn.adsArray[++sn[t(766)]] ? sn[t(766)] : 0;
                                    0 == s && sn[t(905)](), window[t(566)] && console[t(816)](t(1531) + s);
                                    var c = sn[t(503)](s),
                                        l = t(817)[t(825)](c, t(486)),
                                        u = a + i + l + o;
                                    return u
                                }
                                console[t(406)](t(368))
                            })), h(b(sn), pn(1284), (function(e) {
                                var t, n, r = pn;
                                if (r(776) !== r(1453)) return new Promise((t = r, n = u(regeneratorRuntime[t(382)]((function t(n) {
                                    return regeneratorRuntime.wrap((function(t) {
                                        var r = a;
                                        if ("mVRQG" === r(843))
                                            for (;;) switch (_0x24b895.prev = _0x1da04a[r(1639)]) {
                                                case 0:
                                                    return _0x1bcb27[r(1639)] = 2, _0x38889c(_0x94c392, _0x45e768);
                                                case 2:
                                                    return _0x3613a4.abrupt(r(1681), _0x454dd2[r(428)]);
                                                case 3:
                                                case r(1290):
                                                    return _0x101baa.stop()
                                            } else
                                                for (;;) switch (t[r(799)] = t[r(1639)]) {
                                                    case 0:
                                                        return t[r(1639)] = 2, setTimeout(n, e);
                                                    case 2:
                                                        return t.abrupt(r(1681), t[r(428)]);
                                                    case 3:
                                                    case r(1290):
                                                        return t[r(821)]()
                                                }
                                    }), t)
                                }))), function(e) {
                                    var r = t;
                                    if (r(381) == r(381)) return n[r(498)](this, arguments);
                                    var a = _0xc108c3[r(614)](r(414));
                                    a[r(1361)](r(979), _0x1c2cb7), _0x593e58[r(1348)](r(1365))[0][r(1225)](a), a[r(972)] = function() {
                                        _0x39d0de++, _0x1b09eb[r(1554)](_0x233058), _0x2ca6aa == _0x6506d.length && _0x53ce22({
                                            scriptsLoaded: _0x5372b4,
                                            counter: _0x5de419
                                        })
                                    }
                                }));
                                for (var i = 0; i < _0x48f284[r(1446)];) {
                                    var o = !0;
                                    if (_0x509410[i][r(1683)](r(1076)) && (o = _0x1b4ba0[r(1029)]()), o) {
                                        var d = _0x3c7b82[r(1272)](_0x5cc5d5[i]);
                                        d[r(1446)] > 1 && (_0x456d9e = d[0] + _0x19590f[i] + d[1])
                                    }
                                    i++
                                }
                                return _0x597e6f
                            })), h(b(sn), pn(541), (function() {
                                var e = pn;
                                if (null != sn.ubPlayer[e(1422)].getAdsManager()) {
                                    if (e(425) != e(425)) return _0x2a9f16[e(498)](this, arguments);
                                    sn.ubPlayer[e(1422)][e(1051)]().destroy()
                                }
                                sn[e(1305)][e(1422)][e(581)][e(1188)].adsLoader[e(795)]()
                            })), h(b(sn), pn(751), (function() {
                                var e = pn;
                                if (e(798) == e(798)) {
                                    var t = arguments[e(1446)] > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                        n = arguments.length > 1 ? arguments[1] : void 0,
                                        r = !(arguments[e(1446)] > 2 && void 0 !== arguments[2]) || arguments[2];
                                    r && sn.destroyAdManger(), window[e(566)] && console[e(816)](e(660) + t + e(489));
                                    var a = sn[e(632)].AD_SOURCES[e(836)].IS_ACTIVE;
                                    sn[e(769)] && (!a || sn[e(1471)].servedAdChecker() || sn[e(1471)].nonServedAdChecker()) ? (null != n && sn[e(1618)](e(544)), sn[e(1175)](n, sn[e(1471)][e(1264)]())) : "WTdyn" === e(681) ? (sn[e(766)] >= sn.adsArray.length && (sn[e(766)] = sn[e(766)] % sn[e(1215)][e(1446)]), sn.adsIndex < sn[e(1215)][e(1446)] && !sn[e(403)] && sn[e(1154)](++sn[e(766)], n)) : _0x510c38[e(1425)][e(1110)]("prebid", {
                                        data: {
                                            playerName: _0x6a5653[e(387)].location[e(1657)],
                                            country: _0x2b7d97[e(911)],
                                            type: e(1629),
                                            bidder: _0x4d35d7[e(645)][e(1343)].adTagUrls[_0x20c59c[e(1471)][e(358)]].adapterCode,
                                            adId: _0x57a4e9.ubprebid[e(1343)][e(984)][_0x118fbe[e(1471)].lastServedIndex][e(577)],
                                            device: _0x403ac0.mobileCheck ? "mb" : "pc"
                                        }
                                    })
                                } else _0xd789e0.checkIdClass(_0x1c3abd)
                            })), h(b(sn), pn(769), (function() {
                                var e = pn;
                                if (e(631) !== e(365)) return sn.prebidIma[e(1493)].isEnable && null != sn[e(645)];
                                1 == _0x29da59[e(927)] && (0 == _0xbe77eb[e(1553)][e(951)] || _0x5c38e0[e(1035)] < .7) && (_0x5b8454.adsArray[_0x1b3580][e(1237)] = .4)
                            })), h(b(sn), pn(1133), (_n = pn, fn = u(regeneratorRuntime[_n(382)]((function e(t) {
                                var n, r, a = _n;
                                return regeneratorRuntime[a(378)]((function(e) {
                                    for (var i = a;;) switch (e.prev = e[i(1639)]) {
                                        case 0:
                                            return n = {
                                                Accept: "*/*"
                                            }, e[i(1639)] = 3, fetch(t, {
                                                method: i(1320),
                                                headers: n
                                            });
                                        case 3:
                                            return r = e.sent, e[i(937)](i(1681), r.text());
                                        case 5:
                                        case i(1290):
                                            return e[i(821)]()
                                    }
                                }), e)
                            }))), function(e) {
                                var t = _n;
                                if (t(1637) == t(1637)) return fn[t(498)](this, arguments);
                                switch (_0x227d76.prev = _0x42e897.next) {
                                    case 0:
                                        return _0x58728a[t(1639)] = 2, _0x2c8640[t(1305)][t(1686)]("contentchanged");
                                    case 2:
                                        return _0x32d2de[t(937)](t(1681), _0x1459eb[t(428)]);
                                    case 3:
                                    case t(1290):
                                        return _0x4c333f[t(821)]()
                                }
                            })), h(b(sn), pn(1310), function() {
                                var e = pn;
                                if (e(1394) == e(1394)) {
                                    var t = u(regeneratorRuntime[e(382)]((function t(n) {
                                        var r = e,
                                            a = arguments;
                                        return regeneratorRuntime[r(378)]((function(e) {
                                            var t = r;
                                            if (t(989) === t(585)) return _0x309a1a.prebidIma[t(1493)][t(921)] && _0x5e8183[t(645)] != _0x2bc35a;
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (a[t(1446)] > 1 && void 0 !== a[1] && a[1], sn[t(846)] || sn[t(1022)]) {
                                                        e.next = 23;
                                                        break
                                                    }
                                                    if (sn[t(789)] = n, google[t(1422)][t(1476)][t(1414)](google[t(1422)].ImaSdkSettings.VpaidMode.ENABLED), sn[t(1305)][t(1422)][t(1226)](), sn[t(1305)][t(1422)][t(581)][t(1476)][t(1105)] = sn[t(714)](n, !0), sn[t(1305)][t(1422)][t(374)](), sn[t(598)](!1, n), sn[t(629)](n), sn.nonServedCount++, sn[t(1626)][t(1144)](), sn[t(1279)] = !1, !sn[t(1685)]) {
                                                        if (t(1025) !== t(1196)) {
                                                            e.next = 18;
                                                            break
                                                        }
                                                        if (_0x1a45bf[t(632)][t(870)][t(1683)](t(1580))) {
                                                            var i = _0x586ab8[t(715)][t(568)];
                                                            _0x400ee4 = i[_0x1829ff.getRandomInt(i[t(1446)])]
                                                        } else _0x5c0a3d = _0x4ec0b1.clientData[t(870)]
                                                    }
                                                    return sn.ubPlayer[t(545)](!0), e.next = 16, sn[t(1305)].pause();
                                                case 16:
                                                    e.next = 21;
                                                    break;
                                                case 18:
                                                    if (!sn.ubPlayer[t(1617)]() || !sn[t(718)]) {
                                                        if (t(702) !== t(777)) {
                                                            e[t(1639)] = 21;
                                                            break
                                                        }
                                                        _0x528001[t(1157)] = !0, _0x386c01 = !0, _0x930f2b(), _0x1a61ac[t(545)](!1), _0x53e362[t(1258)](.001);
                                                        var o = _0xc7848b.getElementById("keepWatchingBtn"),
                                                            d = _0x11e0ba[t(1126)](t(667));
                                                        o[t(908)][t(1002)] = t(565), d[t(908)][t(1002)] = t(565), _0x9191c7.UBP_DEBUG && _0x4c73a8[t(406)]("runKeepWatching, Keep Watching clicked. Timer disabled for all instances.")
                                                    }
                                                    return e.next = 21, sn[t(1305)][t(881)]();
                                                case 21:
                                                    return e[t(1639)] = 23, sn[t(1284)](1e3).then((function() {
                                                        var e = t;
                                                        "DVCWS" === e(590) ? (this[e(1259)]++, this[e(927)]++) : sn[e(1305)][e(1617)]() && !sn[e(1305)].ads.isInAdMode() && sn.sendAdWhenPaused && !sn[e(596)] && sn[e(751)](e(1429))
                                                    })).catch((function(e) {
                                                        var n = t;
                                                        window[n(566)] && console[n(816)](n(651)[n(825)](e))
                                                    }));
                                                case 23:
                                                case t(1290):
                                                    return e[t(821)]()
                                            }
                                        }), t)
                                    })));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }
                                _0x1c3dad[e(1297)] = !1, _0x3fc581[e(1142)]()
                            }()), h(b(sn), pn(875), (function() {
                                var e, t = pn,
                                    n = sn[t(1090)].config,
                                    r = document[t(761)]("#content_video > button.vjs-big-play-button"),
                                    a = sn[t(1305)],
                                    i = n.duration,
                                    o = i,
                                    d = !1,
                                    s = document[t(614)](t(906));
                                s.id = t(961), s[t(433)] = t(1568), s.style[t(1002)] = t(565), s[t(908)][t(465)] = n[t(1386)][t(1683)]("left") ? "0" : t(565), s.style[t(728)] = n.floating[t(1683)](t(728)) ? "0" : "none", s[t(1606)] = t(1268), r[t(650)].insertBefore(s, r[t(902)]);
                                var c = document[t(614)](t(1281));
                                c.id = t(667), c.style[t(1380)] = t(404), c[t(908)].width = t(758), c[t(908)].height = "48px", c[t(908)].left = n.floating.includes(t(465)) ? "0" : t(565), c[t(908)].right = n.floating[t(1683)](t(728)) ? "0" : t(565), c[t(908)][t(801)] = t(670), c[t(908)].backgroundColor = t(879), c[t(908)][t(1621)] = t(706), c.style.display = t(565), c[t(908)].textAlign = t(672), c[t(908)][t(1045)] = t(529), c[t(1606)] = "" [t(825)](i, t(1239)), r[t(650)][t(1593)](c, r[t(902)]);
                                var l = function() {
                                        var n = t;
                                        if (!d) {
                                            var r = document.getElementById(n(961)),
                                                i = document[n(1126)](n(667));
                                            r.style[n(1002)] = "block", i[n(908)].display = "block", i[n(908)].fontFamily = n(1670), i[n(908)][n(1127)] = n(1044), i.style[n(850)] = "linear-gradient(to top, rgb(255 255 255), rgb(119 111 111), rgb(66 67 68 / 32%), rgba(66, 66, 73, 0), rgba(255, 255, 255, 0))", clearInterval(e), e = setInterval((function() {
                                                var t = n;
                                                o--, i[t(1606)] = t(1665) + o + "s", window[t(566)] && console.log("remaining , Current remaining time:", o), o <= 0 && (clearInterval(e), a[t(472)][t(1639)](), i[t(908)][t(1550)] = "hidden")
                                            }), 1e3)
                                        }
                                    },
                                    u = function() {
                                        var n = t;
                                        clearInterval(e), window[n(566)] && console[n(816)](n(1383), o)
                                    },
                                    _ = function() {
                                        var e = t;
                                        if ("fmZab" !== e(1489)) throw new _0x27df71(e(768));
                                        sn[e(1157)] = !0, d = !0, u(), a[e(545)](!1), a[e(1258)](.001);
                                        var n = document[e(1126)](e(961)),
                                            r = document[e(1126)](e(667));
                                        n.style.display = e(565), r[e(908)][e(1002)] = e(565), window[e(566)] && console[e(406)](e(1662))
                                    },
                                    f = document[t(1126)]("keepWatchingBtn");
                                f[t(1565)](t(1467), _), f.addEventListener(t(1467), _), a.on(t(1240), (function() {
                                    var e = t;
                                    window.UBP_DEBUG && console.warn("runKeepWatching, Content changed. Resetting and starting timer."), d = !1, o = i, l(), f[e(908)][e(1002)] = e(1187), c.style.display = e(1187), c.style[e(1550)] = e(478)
                                })), a[t(1331)]((function() {
                                    var e = t;
                                    !d && (setTimeout((function() {
                                        l()
                                    }), 1e3), f.style.display = e(1187), c.style[e(1002)] = "block")
                                })), a.on(t(695), (function() {
                                    var e = t;
                                    d || (u(), window[e(566)] && console.warn(e(1099), o))
                                })), a.on("adend", (function() {
                                    var e = t;
                                    d || (window[e(566)] && console[e(406)](e(947), o), l())
                                }))
                            })), h(b(sn), "prebidIma", {
                                adIndex: 0,
                                prebidAdRequested: !1,
                                isPrebidAdStarted: !1,
                                noBidReceivedCounter: 0,
                                lastServedIndex: 0,
                                isVpaidModified: !1,
                                retryAd: !1,
                                retryAdCounter: 0,
                                retrunAdCounterLimit: 2,
                                forNonServed: !1,
                                options: {
                                    isEnable: sn[pn(769)],
                                    imaSetting: {
                                        served_ads: null !== (ve = null === (pe = sn[pn(632)]) || void 0 === pe || null === (be = pe[pn(538)]) || void 0 === be || null === (me = be.IMA_COMPACT) || void 0 === me ? void 0 : me.SERVED_ADS) && void 0 !== ve ? ve : 1,
                                        non_served_ads: null !== (he = null === (ge = sn[pn(632)]) || void 0 === ge || null === (ye = ge.PREBID) || void 0 === ye || null === (we = ye[pn(1214)]) || void 0 === we ? void 0 : we[pn(1358)]) && void 0 !== he ? he : 3,
                                        increaseServedAdsTime: function() {
                                            return this[pn(754)] += this.served_ads
                                        },
                                        increaseNonServedAdsTime: function() {
                                            var e = pn;
                                            return this[e(1229)] += this[e(1229)]
                                        }
                                    }
                                },
                                servedAdChecker: function() {
                                    var e = pn;
                                    return sn[e(1626)][e(1652)] >= sn[e(1471)].options[e(854)][e(754)]
                                },
                                nonServedAdChecker: function() {
                                    var e = pn;
                                    return sn[e(1626)].getNonServedCountPB >= sn[e(1471)][e(1493)][e(854)][e(1229)]
                                }
                            }), h(b(sn), "updateVastReponseForPrebid", function() {
                                var e = pn;
                                if (e(960) !== e(1432)) {
                                    var t = u(regeneratorRuntime.mark((function t(n) {
                                        var r, a = e;
                                        return regeneratorRuntime[a(378)]((function(e) {
                                            var t = a;
                                            if (t(1301) != t(1301)) return t(655) in _0x789258[t(632)] && 1 == _0x44150d[t(632)][t(655)];
                                            for (;;)
                                                if (t(459) !== t(679)) switch (e[t(799)] = e.next) {
                                                    case 0:
                                                        if (n[t(641)] || "" == n[t(1053)] && 0 == n[t(1053)]) {
                                                            e[t(1639)] = 10;
                                                            break
                                                        }
                                                        if (!n.ad || "" == n.ad) {
                                                            e[t(1639)] = 6;
                                                            break
                                                        }
                                                        sn.ubprebid.prebidAds[t(984)][sn.prebidIma[t(358)]].vastXml = n.ad, sn.prebidLog(t(980)), e[t(1639)] = 10;
                                                        break;
                                                    case 6:
                                                        return e[t(1639)] = 8, sn.fetchVastReponse(n[t(1053)]);
                                                    case 8:
                                                        (r = e[t(428)])[t(1683)](t(1566)) || r[t(1683)](t(1534)) ? (sn[t(645)][t(1343)][t(984)][sn[t(1471)][t(384)]].vastXml = r, sn.prebidLog(t(1442))) : (sn[t(645)][t(1343)][t(984)][sn[t(1471)][t(358)]][t(1238)] = !1, sn[t(645)][t(1343)][t(984)][sn[t(1471)][t(358)]].shouldServe = !1, sn[t(1618)]("Unable to fetch vast response from vastUrl, Or Url Expired"));
                                                    case 10:
                                                    case t(1290):
                                                        return e[t(821)]()
                                                } else _0x215fa7[t(755)]++, 0 == _0x59e655[t(1450)] && (_0x4474a4[t(755)] = 0)
                                        }), t)
                                    })));
                                    return function(n) {
                                        var r = e;
                                        if (r(869) == r(869)) return t[r(498)](this, arguments);
                                        _0x367156[r(1425)][r(1110)](r(1636), {
                                            website: _0x1b72a2[r(387)][r(1607)][r(1657)],
                                            bidder: "google",
                                            adTagName: r(983) + _0x58d154.adsArray[_0x344c12][r(1486)]
                                        })
                                    }
                                }
                                _0x4f6c4e = _0x4453b3 + e(797) + _0x312302(_0x2b0f6a[e(1527)])
                            }()), h(b(sn), pn(1175), (ln = pn, un = u(regeneratorRuntime[ln(382)]((function e(t, n) {
                                var r, a, i, o = ln;
                                return regeneratorRuntime[o(378)]((function(e) {
                                    for (var d = o;;)
                                        if (d(1374) !== d(923)) switch (e[d(799)] = e[d(1639)]) {
                                            case 0:
                                                if (sn[d(1618)](d(1423) + (n ? "nonServed" : d(507))), sn[d(846)] || sn.isContentAboutToFinish) {
                                                    if ("JVcMY" === d(1149)) {
                                                        e[d(1639)] = 14;
                                                        break
                                                    }
                                                    _0x1c2487.adsIndex < _0x2dc5ab[d(1215)][d(1446)] && !_0x368a7a[d(1471)][d(426)] && (_0x9d57a0.ubPlayer && _0x35aa89.ubPlayer[d(704)][d(1469)]() && (_0x45efb0.ubPlayer.ads[d(1573)](), _0x25ca9f[d(1305)].ads[d(1084)]()), _0xa43f54((function() {
                                                        var e = d;
                                                        _0x474518.ubPlayer && _0x9e1da[e(1305)][e(704)][e(1469)]() && _0x30dbf3[e(1305)][e(704)][e(1573)](), _0x346f1a[e(1305)][e(1686)]("contentresumed"), _0x335145[e(751)](e(1004))
                                                    }), 1e3))
                                                }
                                                if (void 0 === (r = sn[d(645)][d(1343)].ad)) {
                                                    e.next = 7;
                                                    break
                                                }
                                                sn.sendAdRequestForPrebid(r, n, t), e[d(1639)] = 14;
                                                break;
                                            case 7:
                                                return sn[d(1618)](d(745)), sn[d(645)][d(1343)][d(928)](), sn[d(1471)][d(358)] = 0, a = sn[d(1471)].options[d(854)][d(754)], i = sn[d(1471)].options.imaSetting[d(1229)], e[d(1639)] = 14, sn[d(645)][d(1507)]({
                                                    debug: !1,
                                                    queue: !1,
                                                    imaServedAd: a,
                                                    imaNonServedAd: i
                                                })[d(558)]((function(e) {
                                                    var r = d;
                                                    sn.ubprebid[r(647)](e), sn[r(1618)](r(1008)), sn.sendAdRequestForPrebid(sn.ubprebid[r(1343)].ad, n, t), sn[r(1471)][r(384)] = 0
                                                }))[d(1254)]((function(e) {
                                                    var t = d;
                                                    e[t(1087)] || sn[t(1471)][t(547)]++;
                                                    var r = sn.clientData[t(392)][t(836)][t(1437)];
                                                    sn.isPrebidEnabled && !r && sn[t(751)](t(570)), sn[t(766)] < sn[t(1215)][t(1446)] && !sn[t(403)] && ("Sxcaf" === t(1640) ? _0x3ba2e3.removeAttribute("style") : (sn[t(1618)]("Ima Turn now!"), n ? sn.adCount.resetNonAdServedCountPB() : sn[t(1626)][t(625)](), sn.newIMA(++sn[t(766)])))
                                                }));
                                            case 14:
                                            case d(1290):
                                                return e[d(821)]()
                                        } else {
                                            _0x5746c4 = _0x591898.googleAdTagData.COUNTRY_KV[d(1088)]((function(e) {
                                                var t = d;
                                                return e[t(482)][t(965)]() === _0x1cd7a6[t(1016)][t(911)][t(965)]()
                                            }));
                                            var s = _0x5889a9[d(464)](_0x637b41, _0x265e86);
                                            if (_0x53e59c = null != s ? s : _0xd17f5f, _0x432f35[d(781)] && _0x382568[d(781)][_0x1efdf2[d(1016)][d(911)]] && (!_0xf4abb2[_0x3a62af] || _0x2b4577[_0x4abe35] && 0 == _0x25afae[_0xc59927].length)) {
                                                var c = _0x5f1e14[d(781)][_0x5c72fa.geoData[d(911)]][_0x2aac6c];
                                                _0x58c95a[_0x599b0c] = _0x26cc98[d(1102)](c)
                                            }
                                        }
                                }), e)
                            }))), function(e, t) {
                                var n = ln;
                                if ("tsVDA" !== n(1078)) {
                                    var r = arguments[n(1446)] > 0 && arguments[0] !== _0x1db20f && arguments[0],
                                        a = r ? "pbsticky" : n(1574),
                                        i = n(437),
                                        o = _0x1f6cb9.parent[n(974)][n(1126)](i),
                                        d = _0x5df666.mobileCheck ? _0x4bae1b[n(632)][n(1653)] : _0x4efb82.clientData[n(1309)];
                                    return !!o.classList[n(730)](a + "_" + d)
                                }
                                return un[n(498)](this, arguments)
                            })), h(b(sn), pn(552), (cn = u(regeneratorRuntime.mark((function e(t, n) {
                                var r = a;
                                if (r(1610) !== r(1378)) {
                                    var i, o = arguments;
                                    return regeneratorRuntime[r(378)]((function(e) {
                                        for (var a = r;;)
                                            if (a(385) !== a(1256)) switch (e[a(799)] = e[a(1639)]) {
                                                case 0:
                                                    if (i = o[a(1446)] > 2 && void 0 !== o[2] ? o[2] : 0, null != t) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e.abrupt(a(1681), !1);
                                                case 3:
                                                    return 3 == sn[a(927)] && (i = parseInt(i) + sn[a(1100)]), e.next = 6, sn.updateVastReponseForPrebid(t);
                                                case 6:
                                                    return sn[a(1618)](a(1555) + i + a(1674)), sn[a(541)](), sn[a(1279)] = !0, sn[a(1305)][a(704)].isInAdMode() && sn[a(1305)][a(704)][a(1573)](), t[a(641)] && t[a(641)][a(1683)]('<VAST version="2.0">') && (google[a(1422)][a(1476)][a(1414)](google[a(1422)][a(1166)][a(1354)][a(1589)]), sn.prebidIma.isVpaidModified = !0), e[a(1639)] = 13, sn[a(1284)](1e3 * i)[a(558)]((function() {
                                                        var e = a;
                                                        sn[e(1022)] || (sn.ubPlayer.ima[e(1226)](), sn[e(1305)][e(1422)][e(581)][e(1476)][e(1105)] = "", sn[e(927)] > 0 && t.vastXml && sn[e(1471)][e(847)] ? sn.ubPlayer.ima[e(581)].settings[e(1105)] = t.vastXml : sn[e(1305)][e(1422)].controller[e(1476)].adsResponse = sn.makePrerollRequest_test(t[e(1053)]), sn[e(1305)].ima.requestAds(), sn[e(1471)].prebidAdRequested = !0, sn[e(1471)][e(384)]++, sn[e(1626)][e(1144)](), sn[e(1279)] = !1, sn[e(1305)][e(1617)]() && sn[e(718)] && sn[e(1305)][e(1686)](e(881)), n ? sn[e(1626)][e(1139)]() : e(664) !== e(1227) ? sn.adCount[e(625)]() : _0x36352a[e(1615)](), sn[e(1618)](e(1390)))
                                                    }))[a(1254)]((function(e) {
                                                        var t = a;
                                                        t(1519) != t(1519) ? _0x1faf2d[t(715)][t(1153)]().then((function(e) {
                                                            var n = t;
                                                            _0x4e803e[n(566)] && _0x3df02a[n(406)]("v1.1 => getCategoryVideos setting video for certain category"), _0x5359d1(e)
                                                        })) : sn[t(1618)]("PB_ERROR : " + e[t(1387)])
                                                    }));
                                                case 13:
                                                case a(1290):
                                                    return e[a(821)]()
                                            } else _0x15d857 = _0x3c03d7[a(1305)][a(954)]() - 4
                                    }), e)
                                }
                                _0x327bb5[r(1498)]("Ad Info : "), _0x41b4f7.log(r(1129) + _0x19c546.adServedCount), _0x15883c.log(_0x544bad[r(927)] + " ad served of " + _0x7a693c + r(550)), _0x2e3ff5[r(1089)]()
                            }))), function(e, t) {
                                return cn.apply(this, arguments)
                            })), h(b(sn), pn(770), (function(e) {
                                var t = pn;
                                if (t(511) !== t(1042)) return e[t(1088)]((function(e) {
                                    return !1 === e.servedStatus
                                }));
                                _0x4f722a.ima[t(1490)](), _0x2a2f89[t(1565)](_0x372dcd, _0xe8a533)
                            })), h(b(sn), pn(1420), (function(e) {
                                var t = pn;
                                return e[t(1173)]((function(e) {
                                    var n = t;
                                    return !1 === e[n(1238)] && !0 === e[n(785)]
                                }))
                            })), h(b(sn), "markCurrentIndexAsServed", (function() {
                                var e = pn,
                                    t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                                t ? e(956) === e(792) ? _0x3b8306[e(541)]() : (sn[e(1471)][e(358)] = 0, sn[e(645)][e(1343)].clearAllAds()) : (sn.prebidLog(e(1477) + sn.prebidIma[e(358)]), sn[e(1471)][e(384)] > 0 && (sn[e(645)][e(1343)][e(984)][sn[e(1471)][e(358)]].servedStatus = !0), sn[e(1471)][e(358)]++)
                            })), h(b(sn), pn(1154), function() {
                                var e, t, n = pn;
                                if (n(1377) !== n(1649)) {
                                    var r = u(regeneratorRuntime[n(382)]((function e(t, r) {
                                        var a = n;
                                        if (a(460) == a(460)) return regeneratorRuntime[a(378)]((function(e) {
                                            var n = a;
                                            if (n(1513) == n(1513))
                                                for (;;) switch (e[n(799)] = e[n(1639)]) {
                                                    case 0:
                                                        sn[n(878)](), prepareAdRequest = function() {
                                                            var e = n,
                                                                t = u(regeneratorRuntime[e(382)]((function t(n) {
                                                                    var a = e;
                                                                    if ("SoPHS" === a(1307)) return regeneratorRuntime[a(378)]((function(e) {
                                                                        var t = a;
                                                                        if ("cLAHM" !== t(1170))
                                                                            for (;;)
                                                                                if ("ETSHY" === t(1332)) _0x4c960b[t(1557)] && _0x1f0904[_0x2fdc5b][_0x1a3dd1] ? _0x1f81b7[_0x2ff584] = _0x3c1f51[_0x15763c][_0x53e478][_0x112202] : _0x4eb04a[_0x443644] = _0x479c53[_0x435b0d][_0x36adcc];
                                                                                else switch (e[t(799)] = e[t(1639)]) {
                                                                                    case 0:
                                                                                        if (sn[t(1022)] || !(sn[t(1215)].length > 0)) {
                                                                                            if (t(644) !== t(1095)) {
                                                                                                e.next = 25;
                                                                                                break
                                                                                            }
                                                                                            var i = _0x30f4f5[t(761)](t(515));
                                                                                            _0x26a3f3[t(564)] || _0x294967.floatingPlayerLogo_mob || !i ? !_0x197205[t(564)] && i ? (_0xaa11e2[t(761)](t(1171)) && (i[t(908)][t(1002)] = t(565)), (_0x151b4a[t(761)](t(1370)) || _0x446f7f[t(761)](".ubsticky_left")) && (i.style[t(1002)] = t(1187))) : !_0x3b354f.floatingPlayerLogo_mob && i && ((_0x3753a9[t(761)](".ubsticky_right") || _0x244884[t(761)](t(1010))) && (i.style[t(1002)] = "none"), _0x6252cb[t(761)](t(1171)) && (i[t(908)][t(1002)] = "block")) : i[t(908)].display = t(565)
                                                                                        }
                                                                                        if (sn[t(846)] || !sn[t(1305)] || sn[t(1305)][t(1617)]() && !sn[t(1685)] || !sn[t(718)]) {
                                                                                            e.next = 23;
                                                                                            break
                                                                                        }
                                                                                        if (window[t(566)] ? console.warn(t(913)) : sn[t(1352)]++, !(sn[t(1314)] && sn[t(1352)] > 5)) {
                                                                                            e[t(1639)] = 5;
                                                                                            break
                                                                                        }
                                                                                        return e[t(937)](t(1681), 0);
                                                                                    case 5:
                                                                                        if (typeof sn.adsArray[n] === t(1162)) {
                                                                                            e[t(1639)] = 18;
                                                                                            break
                                                                                        }
                                                                                        if (sn[t(1454)] && sn[t(927)] <= 0 && !sn.delayForUnfillRequests[t(951)] && sn[t(1035)] <= .7 && (sn[t(1215)][n].delay = .7), sn[t(1454)] && sn.adServedCount > 0)
                                                                                            if (t(857) == t(857)) 1 == sn[t(927)] && (0 == sn[t(1553)][t(951)] || sn.ad_request_duration < .7) && (sn[t(1215)][n].delay = .4);
                                                                                            else {
                                                                                                var o = _0x473342.document.getElementById(_0x46ba20[t(413)]);
                                                                                                _0x2007bb[t(456)](o, 50) && _0x268630.isFullPlayerViewedOnce && (_0x32e995[t(910)] = !0, _0x2f90f7[t(1565)](t(1597), _0x281ffa, !0))
                                                                                            }
                                                                                        return !sn[t(1693)] && "" != sn[t(1388)] && sn[t(1215)][n][t(1237)] < 1 && ("pcxTx" === t(477) ? _0x18dab0[0].isIntersecting && (!_0x3a4108[t(434)] && (_0x36409b[t(724)](), _0x7e4454[t(434)] = !0), _0x30b09b[t(1080)] = !0, _0x12f8ae[t(468)](_0x3f501b)) : sn.adsArray[n][t(1237)] = Number(sn.customAdDelay)), sn[t(1595)] && (sn[t(1215)][n][t(1237)] = r), sn[t(1314)] && (sn[t(1215)][sn[t(766)]][t(1237)] = 5), sn[t(788)] && (sn.adsArray[sn[t(766)]][t(1237)] = sn.customAdDelay && sn[t(1388)].length ? Number(sn[t(1388)]) : .7), window[t(566)] && (console[t(1498)](t(622)), console[t(816)](sn[t(927)] + 1 + t(1263) + sn[t(1215)][n].delay + " sec => " + n), console.warn(t(1609)), console[t(1089)]()), sn[t(1279)] = !0, e[t(1639)] = 16, sn.timeout(1e3 * sn[t(1215)][n][t(1237)])[t(558)]((function() {
                                                                                            var e = t;
                                                                                            if (sn.adsArray[n].delay = .7, sn[e(1305)][e(704)][e(1469)]()) e(839) != e(839) ? _0x7e5e44[_0x56b463] = _0x4100e6 : (sn[e(1305)][e(704)].disableNextSnapshotRestore = !0, sn.ubPlayer[e(704)][e(1573)](), sn[e(1305)][e(1686)](e(1324)), sn.isContentAboutToFinish || sn[e(1310)](n));
                                                                                            else {
                                                                                                if (e(1244) === e(997)) throw new _0x766432("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                                                                sn.isContentAboutToFinish || sn[e(1310)](n)
                                                                                            }
                                                                                        }))[t(1254)]((function(e) {
                                                                                            var n = t;
                                                                                            window[n(566)] && console[n(816)](e[n(1387)])
                                                                                        }));
                                                                                    case 16:
                                                                                        e[t(1639)] = 23;
                                                                                        break;
                                                                                    case 18:
                                                                                        sn[t(766)] = 0, sn[t(1305)][t(1422)][t(581)][t(1476)][t(1105)] = sn[t(714)](sn[t(766)], !0), !sn[t(1693)] && "" != sn[t(1388)] && sn[t(1215)][sn[t(766)]][t(1237)] < 1 && (sn[t(1215)][sn[t(766)]][t(1237)] = Number(sn[t(1388)])), sn[t(788)] && (sn[t(1215)][sn[t(766)]][t(1237)] = sn[t(1388)] && sn[t(1388)][t(1446)] ? Number(sn.customAdDelay) : .7), sn[t(1310)](sn[t(766)]);
                                                                                    case 23:
                                                                                        e[t(1639)] = 26;
                                                                                        break;
                                                                                    case 25:
                                                                                        sn[t(1215)][t(1446)] <= 0 && console.warn(t(780), "font-size:17px;font-weight:bold;font-family:Helvetica");
                                                                                    case 26:
                                                                                    case "end":
                                                                                        return e.stop()
                                                                                } else {
                                                                                    var d = _0x358c6d[t(1272)](_0x5d33d6[_0x130c47]);
                                                                                    d.length > 1 && (_0x494976 = d[0] + _0x653306[_0xe3f2d3] + d[1])
                                                                                }
                                                                    }), t);
                                                                    _0x45af9e[a(566)] && _0xe48768[a(816)](_0x1c63c1[a(1387)])
                                                                })));
                                                            return function(n) {
                                                                var r = e;
                                                                if (r(624) == r(624)) return t[r(498)](this, arguments);
                                                                _0x4e61e8[r(1305)] && _0x375b74[r(1305)][r(704)].isInAdMode() && _0x12a0f8[r(1305)][r(704)][r(1573)](), _0x4f56cc[r(1305)][r(1686)]("contentresumed"), _0x175d0c.initNextAdRequest(r(1004))
                                                            }
                                                        }(), sn[n(1279)] ? sn[n(766)]-- : prepareAdRequest(t);
                                                    case 3:
                                                    case "end":
                                                        return e[n(821)]()
                                                } else _0xae3574[n(1215)][_0x3786f4][n(1237)] = .7, _0x5c7ba0.ubPlayer[n(704)][n(1469)]() ? (_0x374073.ubPlayer[n(704)][n(417)] = !0, _0xf3e48e[n(1305)][n(704)][n(1573)](), _0x437705[n(1305)][n(1686)](n(1324)), _0x51afb7[n(1022)] || _0x3c52f7[n(1310)](_0x3a28f2)) : _0x311a4e.isContentAboutToFinish || _0x5925b1.sendAdRequest(_0x246dbb)
                                        }), e);
                                        _0x4ce89e.UBP_DEBUG && _0xa1a5c4.warn(a(491)), _0x2d9816(_0x7e9a3)
                                    })));
                                    return function(e, t) {
                                        var a = n;
                                        if (a(1266) == a(1266)) return r.apply(this, arguments);
                                        this[a(1305)][a(1628)](), this[a(846)] = !0, this[a(541)](), _0x3a1911(_0x308222)
                                    }
                                }
                                _0x4fe434.UBP_DEBUG && _0x1d240e[n(816)](n(806)), !_0x642443[n(596)] && _0x4dd24d[n(1647)] && (_0x54b491.UBP_DEBUG && _0xe6e9c0[n(406)](n(444)), _0x92bd84[n(1305)][n(545)](_0x519a30[n(812)] || !_0x57b2da[n(1306)]), _0x538461.ubPlayer.play(), null !== (e = _0x53dbf0.clientData) && void 0 !== e && null !== (t = e[n(709)]) && void 0 !== t && t[n(1046)] || _0x91117[n(1069)]())
                            }()), h(b(sn), pn(878), (function() {
                                var e = pn;
                                e(430) == e(430) ? sn.requestSingleAdOnly && 1 == sn.adsIndex && (sn.adsArray = sn.adsArray.slice(0, 1)) : (_0x510d34[e(1298)] && (_0x10670d[e(1297)] = !0), _0x254f95[e(1161)] ? _0x26d9da((function() {
                                    var t = e;
                                    _0x5d7a2a[t(1297)] = !1, _0x44fa44[t(1142)]()
                                }), 7e3) : _0x41a525.toggleSticky())
                            })), h(b(sn), pn(804), (function() {
                                var e, t, n, r = pn;
                                r(554) === r(1412) ? (_0x2e0a9c++, _0x76e247.push(_0x34a4e1), _0x3d91b6 == _0x3832f7[r(1446)] && _0x485508({
                                    scriptsLoaded: _0x235b26,
                                    counter: _0x11f29b
                                })) : (sn.ubPlayer.on(r(1329), (function(e) {
                                    var t = r,
                                        n = sn[t(1305)][t(601)](t(494));
                                    4 === sn[t(1305)].error().code && (t(393) == t(393) ? sn[t(1305)].retryLock = setTimeout((function() {
                                        var e = t;
                                        "aYIUr" !== e(819) ? (sn[e(1305)][e(979)]({
                                            type: e(1376),
                                            src: sn[e(1032)]
                                        }), sn[e(1305)].load(), n[e(1182)]()) : _0x1116b6[e(678)]() && (_0x14b2e3[e(1185)] = !0, _0x2a0a99.removeStickyPlayer())
                                    }), 200) : _0x223adc[t(974)][t(1126)](_0x5c2a3e[t(413)]) && !_0x1cb4fa[t(846)] && _0x34c546[t(1128)](t(1597), (function() {
                                        return _0x286779[t(1142)]()
                                    })))
                                })), sn.ubPlayer.on(r(945), (t = r, n = u(regeneratorRuntime[t(382)]((function e(t) {
                                    var n, r, i;
                                    return regeneratorRuntime.wrap((function(e) {
                                        var o = a;
                                        if (o(1642) == o(1642))
                                            for (;;) switch (e[o(799)] = e[o(1639)]) {
                                                case 0:
                                                    if (document[o(1126)](o(1037)).style[o(1002)] = o(565), (1009 == t.data.AdError[o(1200)]() || 1005 == t[o(1449)].AdError[o(1200)]()) && sn[o(766)] < sn.adsArray[o(1446)] && !sn[o(1471)][o(426)]) {
                                                        if (o(1156) === o(607)) return _0x381e85[o(1626)][o(1652)] >= _0xdd2c18[o(1471)].options[o(854)][o(754)];
                                                        sn[o(1305)] && sn[o(1305)].ads[o(1469)]() && (sn[o(1305)][o(704)][o(1573)](), sn[o(1305)].ads.skipLinearAdMode()), setTimeout((function() {
                                                            var e = o;
                                                            sn[e(1305)] && sn[e(1305)][e(704)][e(1469)]() && sn[e(1305)].ads[e(1573)](), sn[e(1305)][e(1686)](e(1324)), sn.initNextAdRequest(e(1004))
                                                        }), 1e3)
                                                    }
                                                    if (sn[o(1471)][o(426)]) {
                                                        if (o(942) != o(942)) return _0x366118 + _0x17e23d + _0x5e01f2;
                                                        if (sn[o(1471)].prebidAdRequested = !1, n = [301, 400, 402, 901, 1009, 1005][o(1173)]((function(e) {
                                                                var n = o;
                                                                if (n(509) !== n(1538)) return e == t.data[n(661)].getErrorCode();
                                                                _0x329287.isPlayerViewedOnce ? _0x248cb1.stickyFlag = !0 : _0x173313[n(1128)]("scroll", (function e() {
                                                                    var t = n,
                                                                        r = _0x3188e4[t(974)][t(1126)](_0x244ebe[t(413)]);
                                                                    (!_0x1700e2[t(369)](r)[t(1062)] || _0x217530[t(369)][t(1024)]) && (_0x3b695c[t(1228)] = !0, _0x46ed5e[t(1297)] = !0, _0x412aed[t(1565)](t(1597), e))
                                                                })), _0x4d18f1[n(1142)]()
                                                            })), sn[o(645)][o(1343)].ad[o(641)] && n && !sn[o(1471)][o(847)]) "RyiHt" !== o(542) ? (_0x44b6f4.playerFloatOnce_aubtu = !0, _0x4486d4[o(1620)]()) : (901 == t[o(1449)][o(661)][o(1200)]() && google[o(1422)][o(1476)][o(1414)](google[o(1422)][o(1166)][o(1354)].DISABLED), sn[o(1471)][o(1631)] = !0, 403 == t[o(1449)][o(661)][o(1200)]() && google[o(1422)].settings[o(1414)](google.ima[o(1166)][o(1354)][o(1589)]), sn[o(1471)][o(1631)] = !0, sn.prebidIma.retryAdCounter++, sn[o(1471)][o(1136)] >= sn[o(1471)][o(992)] && (sn[o(1471)][o(847)] = !0, sn.prebidIma[o(992)] = 0), sn[o(552)](sn.ubprebid.prebidAds.ad, !0, .4), sn[o(1618)](o(886)));
                                                        else {
                                                            if (o(1092) === o(808)) return this[o(927)];
                                                            ({
                                                                env: {
                                                                    CURRENT_CLIENT: "theuploadhub",
                                                                    LOCAL_URL: "http://localhost:8080",
                                                                    MODE: "production"
                                                                }
                                                            })[o(1676)][o(1436)] !== o(1208) && null !== (r = null === (i = sn[o(632)]) || void 0 === i ? void 0 : i.EMIT_LOGS) && void 0 !== r && r && (sn[o(1618)](o(933) + sn[o(1471)].lastServedIndex + o(364)), sn.ubpSocket[o(1110)](o(372), {
                                                                data: {
                                                                    playerName: window.parent[o(1607)][o(1657)],
                                                                    country: sn[o(911)],
                                                                    type: o(1329),
                                                                    errorCode: t[o(1449)][o(661)][o(1200)](),
                                                                    errorMessage: t.data[o(661)][o(982)](),
                                                                    bidsResponse: sn[o(645)][o(1343)][o(984)][sn.prebidIma[o(358)]],
                                                                    retryData: {
                                                                        wasRetried: sn[o(1471)][o(847)],
                                                                        retriedCount: sn[o(1471)][o(992)]
                                                                    },
                                                                    device: window[o(1014)] ? "mb" : "pc"
                                                                }
                                                            })), sn.prebidLog(o(933) + sn[o(1471)].lastServedIndex + o(364)), sn[o(1471)][o(847)] = !1, sn[o(1273)](), sn.initNextAdRequest(o(1385))
                                                        }
                                                    } else(sn[o(774)][o(1683)](o(1219)) || sn[o(774)][o(1683)](o(1678))) && sn[o(1425)][o(1110)]("prebid", {
                                                        data: {
                                                            playerName: window[o(387)][o(1607)][o(1657)],
                                                            country: sn[o(911)],
                                                            type: o(668),
                                                            errorCode: t[o(1449)][o(661)][o(1200)](),
                                                            errorMessage: t.data[o(661)][o(982)](),
                                                            error: t,
                                                            device: window[o(1014)] ? "mb" : "pc"
                                                        }
                                                    });
                                                    window[o(566)] && videojs.log[o(406)](t[o(1449)].AdError.getMessage()), sn[o(1179)]();
                                                case 5:
                                                case o(1290):
                                                    return e[o(821)]()
                                            } else _0x597c99.DEVICE_SPECIFIC_KV ? _0x209a45.VOLUME_SPECIFIC_KV && _0x4d9dcd[_0x179ae0][_0x199669] ? _0x484edc[_0x3310b5] = _0x5b579c[_0x471571][_0x49a60d][_0x354432] : _0x59f5fb[_0x8efd9c] = _0x41477b[_0x50d2ac][_0x32d883] : _0x40ece2[o(1557)] && (_0x47d645[_0x41a44e] = _0x4d38b5[_0x5508e4][_0x18bca4])
                                    }), e)
                                }))), function(e) {
                                    var r = t;
                                    return n[r(498)](this, arguments)
                                })), sn[r(1305)].on(r(636), (function() {
                                    var e, t, n = r;
                                    "tSxNf" !== n(1462) ? (_0x2a6636.clear(), _0xa32067[n(912)] = _0x4e4cce[n(912)] || {
                                        cmd: []
                                    }, _0x5adda4.cmd.push((function() {
                                        _0x5757bc(_0x28531f.clientname)
                                    })), _0x510b4e()) : (window[n(566)] && console[n(816)]("player is ready to play ads"), !sn[n(596)] && sn.sendFirstAdPaused && (window[n(566)] && console[n(406)]("starting player play with ad"), sn[n(1305)][n(545)](sn[n(812)] || !sn[n(1306)]), sn[n(1305)][n(881)](), null !== (e = sn.clientData) && void 0 !== e && null !== (t = e[n(709)]) && void 0 !== t && t[n(1046)] || sn.removeStickyPlayAfterClickPlayer()))
                                })), sn.ubPlayer.on(r(1326), (function() {
                                    sn.pauseAdRequest()
                                })), sn[r(1305)].on("seeked", u(regeneratorRuntime.mark((function e() {
                                    var t = r;
                                    if ("WlZso" === t(1057)) return regeneratorRuntime[t(378)]((function(e) {
                                        for (var n = t;;)
                                            if ("iKCFT" === n(975)) {
                                                var r = _0x4e8c17[n(761)](n(1598));
                                                !0 === _0x3790c8 ? r[n(1253)](n(908)) && r[n(1036)](n(908)) : r.hasAttribute(n(908)) || r[n(1361)](n(908), n(907))
                                            } else switch (e[n(799)] = e[n(1639)]) {
                                                case 0:
                                                    if (!sn[n(1305)].paused()) {
                                                        e.next = 3;
                                                        break
                                                    }
                                                    return e[n(1639)] = 3, sn.ubPlayer[n(881)]();
                                                case 3:
                                                case "end":
                                                    return e[n(821)]()
                                            }
                                    }), e);
                                    _0x487d4c[t(1498)](t(440)), _0x4c92f8[t(816)]("Total Ads Duration: " + _0x5e3f61[t(691)], t(689) + _0x5866a2[t(1305)].duration()), _0x2159d8[t(816)]("Player Should Reset Now...If not then Convey to Tech."), _0x43c125[t(1089)]()
                                })))), sn[r(1305)].on(r(729), (function() {
                                    var t = r;
                                    !e && (e = sn[t(1305)].duration() - 4), sn[t(1305)].currentTime() > e ? (sn[t(1305)] && !sn[t(1305)][t(704)][t(1469)]() && sn[t(541)](), window.UBP_DEBUG && console[t(816)]("Ad should not fire now"), sn.isContentAboutToFinish = !0) : sn.isContentAboutToFinish = !1, sn[t(1305)].currentTime() == sn[t(1305)].duration() && (t(535) != t(535) ? _0x5d650e() : (sn[t(1633)](), sn[t(1305)][t(1101)](t(881), u(regeneratorRuntime[t(382)]((function e() {
                                        var n = t;
                                        return regeneratorRuntime[n(378)]((function(e) {
                                            var t = n;
                                            if (t(654) === t(946)) {
                                                var r = _0x11f34a[t(1305)].createModal(t(494));
                                                4 === _0x401bd1.ubPlayer.error()[t(1040)] && (_0x5634fd[t(1305)].retryLock = _0x416e55((function() {
                                                    var e = t;
                                                    _0x353e1b[e(1305)].src({
                                                        type: "application/x-mpegURL",
                                                        src: _0x2b618f.alternateVideoSrc
                                                    }), _0x5477b7[e(1305)][e(967)](), r[e(1182)]()
                                                }), 200))
                                            } else
                                                for (;;) {
                                                    if (t(592) === t(454)) return _0x5da45b[t(1305)].currentTime() == _0x31b6e3.ubPlayer[t(954)]();
                                                    switch (e[t(799)] = e[t(1639)]) {
                                                        case 0:
                                                            return e[t(1639)] = 2, sn[t(1305)][t(1686)](t(1240));
                                                        case 2:
                                                            return e[t(937)](t(1681), e[t(428)]);
                                                        case 3:
                                                        case "end":
                                                            return e[t(821)]()
                                                    }
                                                }
                                        }), e)
                                    }))))))
                                })), sn.ubPlayer.on(r(881), u(regeneratorRuntime.mark((function e() {
                                    var t = r;
                                    if ("xlCqt" === t(1379)) return regeneratorRuntime[t(378)]((function(e) {
                                        var n = t;
                                        if ("CviTc" === n(767)) {
                                            (null == _0x3e9a17 || _0x5087cd > _0xaee5e8[n(1446)]) && (_0x5c1cec = _0x3b8209[n(1446)]);
                                            for (var r = 0, a = new _0x3a36fa(_0x4e9f01); r < _0x3766d6; r++) a[r] = _0x584856[r];
                                            return a
                                        }
                                        for (;;) switch (e[n(799)] = e[n(1639)]) {
                                            case 0:
                                                ({
                                                    env: {
                                                        CURRENT_CLIENT: "theuploadhub",
                                                        LOCAL_URL: "http://localhost:8080",
                                                        MODE: "production"
                                                    }
                                                })[n(1676)][n(1436)] !== n(1208) && sn[n(1425)][n(1110)](n(522), {
                                                    website: window[n(387)].location[n(1657)]
                                                }), void 0 !== sn[n(813)] && sn[n(813)].pbFlags.imaPlayerTrun && (sn[n(831)][n(1180)](), sn.pbClass.showubPlayer(), window.UBP_DEBUG && console[n(816)](n(586) + sn[n(813)][n(1061)].previousAdDuration)), !sn[n(596)] && (sn.playerFirstPlay = !0), sn.ubPlayer.volume(.001), sn[n(1235)] = !1, sn[n(718)] = !0, sn[n(1209)] ? n(524) === n(1060) ? _0x352d40[n(1012)] && 1 == _0x348f13[n(766)] && (_0x4b4864[n(1215)] = _0x5ef2a8[n(1215)][n(523)](0, 1)) : (window.UBP_DEBUG && console[n(816)](n(1251)), sn[n(1235)] = !0) : sn[n(1215)][n(1446)] > 0 && !sn[n(518)] && (sn.reset4CFlag ? setTimeout((function() {
                                                    var e = n;
                                                    sn.reset4CFlag && (sn[e(500)] = !1)
                                                }), 1500) : (window[n(566)] && console[n(816)](n(820) + sn.isClientActive, sn[n(1305)][n(1617)]()), sn[n(751)](n(1691)))), sn[n(1372)]();
                                            case 8:
                                            case n(1290):
                                                return e[n(821)]()
                                        }
                                    }), e);
                                    var n = _0x2affc0.defaultKv[_0x184185[t(1016)][t(911)]][_0x583d96];
                                    _0x545001[_0x1f42de] = _0x2d60e8.applyBasicUPR(n)
                                })))), sn.ubPlayer.on("adtimeout", (function() {
                                    var e = r;
                                    window.UBP_DEBUG && console[e(816)]("Ad Timeout Fired!"), sn[e(751)](e(640))
                                })))
                            })), h(b(sn), pn(970), (function() {
                                var e = pn;
                                e(692) == e(692) ? !sn.isDisposed && sn[e(1305)] && (sn.isPlayerViewedOnce ? sn[e(1297)] = !0 : window.addEventListener(e(1597), (function t() {
                                    var n = e,
                                        r = window[n(974)][n(1126)](sn[n(413)]);
                                    (!sn[n(369)](r)[n(1062)] || sn.isOutOfViewport[n(1024)]) && (sn[n(1228)] = !0, sn[n(1297)] = !0, window[n(1565)](n(1597), t))
                                })), sn[e(1142)]()) : _0x3ad88d[e(1315)]((function(t) {
                                    var n = e,
                                        r = _0x42c245[n(614)](n(414));
                                    r[n(1361)](n(979), t), _0x5b8088[n(1348)](n(1365))[0][n(1225)](r), r[n(972)] = function() {
                                        var e = n;
                                        _0x498050++, _0x37a75b.push(t), _0x201bfe == _0x2df0cf[e(1446)] && _0x414914({
                                            scriptsLoaded: _0x3e93ae,
                                            counter: _0x4d1ba3
                                        })
                                    }
                                }))
                            })), h(b(sn), pn(1439), (function(e) {
                                var t = pn;
                                return null != d(e) && e[t(811)]()[t(1592)]() > 0
                            })), h(b(sn), pn(1444), (function(e) {
                                var t = pn,
                                    n = arguments[t(1446)] > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                    r = null != d(e) ? e[t(811)]()[t(1592)]() : 0;
                                return null !== n ? n > r ? r : n : "YnQYv" !== t(502) ? r : void(_0x1344bc = _0x2fcca0.adsArray[_0x1b04f2][t(704)][0] + _0x430e42[t(1063)]())
                            })), h(b(sn), pn(598), (function() {
                                var e = pn,
                                    t = !(arguments[e(1446)] > 0 && void 0 !== arguments[0]) || arguments[0],
                                    n = arguments[e(1446)] > 1 ? arguments[1] : void 0;
                                if (void 0 === sn[e(1425)]) throw new Error("Invalid / Undefined Referance for the ubpsocket!");
                                if (e(959) === e(1001)) {
                                    var r = _0x334d81[e(1524)](_0x4c7119),
                                        a = _0x3f8d0c[e(1165)](_0x3810c8[e(822)][r].adTag);
                                    a == e(832) && (_0x34a993[e(755)]++, 0 == _0x266b37[e(1450)] && (_0x8f26ad[e(755)] = 0)), "new_main" == a && (_0x4a16f9.nonServedCountNewMain++, 0 == _0x3c93e4.nonServedCount && (_0x2f0df2[e(1124)] = 0)), a == e(1217) && (_0x2f33c1.nonServedCountCrAds++, 0 == _0x2e2e13[e(1450)] && (_0x1af4af.nonServedCountCrAds = 0))
                                } else if (t) {
                                    if (e(484) === e(513)) return this.config;
                                    setTimeout((function() {
                                        var t = e;
                                        sn[t(1077)] || (sn[t(1077)] = sn[t(1215)][n][t(897)]), sn[t(1305)][t(704)][t(1469)]() && sn.clientData[t(966)] == t(462) && sn.ubpSocket[t(1110)](t(830), {
                                            website: window[t(387)].location[t(1657)],
                                            bidder: t(383),
                                            cpm: sn[t(1077)],
                                            adTagName: t(983) + sn[t(1215)][n][t(1486)]
                                        })
                                    }), 2100)
                                } else {
                                    if ("AQdtR" !== e(1522)) return this.config;
                                    sn[e(1425)][e(1110)]("ad_request", {
                                        website: window.parent[e(1607)][e(1657)],
                                        bidder: e(383),
                                        adTagName: "google~" + sn[e(1215)][n][e(1486)]
                                    })
                                }
                            })), h(b(sn), pn(363), u(regeneratorRuntime[pn(382)]((function e() {
                                var t = pn;
                                return regeneratorRuntime[t(378)]((function(e) {
                                    var n = t;
                                    if ("esDIz" !== n(1145))
                                        for (;;) switch (e[n(799)] = e.next) {
                                            case 0:
                                                if (!sn[n(1685)]) {
                                                    if ("nRwDA" === n(1350)) {
                                                        e[n(1639)] = 8;
                                                        break
                                                    }
                                                    _0x456fc3 = _0x2102f2 + n(977).concat(_0x5d9afb) + _0x35151d[n(1063)]()
                                                }
                                                return sn[n(1305)][n(545)](!sn.sendAdWhenPaused), e.next = 4, sn[n(1305)].play();
                                            case 4:
                                                sn[n(1685)] = !1, sn.keepFloatAfterPlay = !1, sn[n(890)] = -1, sn[n(788)] = !1;
                                            case 8:
                                            case n(1290):
                                                return e[n(821)]()
                                        } else {
                                            var r = _0x103933[n(974)][n(1126)](_0x58f16.listenerElement);
                                            (!_0x326980[n(369)](r).any || _0x5b6651[n(369)][n(1024)]) && (_0x2c534f[n(1228)] = !0, _0x4fbbd8[n(1297)] = !0, _0x15c758.removeEventListener(n(1597), _0x42f5a1))
                                        }
                                }), e)
                            })))), h(b(sn), pn(805), (function(e, t, n) {
                                var r = 0;
                                floatInterval = setInterval((function() {
                                    var i = a;
                                    return "FhXqY" === i(1389) ? _0x4632ad[i(1499)](_0x2415ce[i(1348)](i(414))).some((function(e) {
                                        return e.src === _0x163d7a
                                    })) : r >= 7 ? (r = 0, clearInterval(floatInterval), window[i(566)] && console.warn("removing current ad and requesting next ad"), e && e[i(658)][i(730)](i(1123) + t) && (e.classList[i(873)]("ubsticky_" + t), e[i(658)][i(627)](i(1119))), n[i(1422)][i(581)][i(1188)][i(1396)][i(795)](), r) : (r += .5, void(window[i(566)] && console[i(816)](i(628), r)))
                                }), 500)
                            })), h(b(sn), pn(512), (function(e) {
                                var t = pn;
                                if (t(1457) != t(1457)) _0x3a5208.COMP_DEBUG = !0, _0x5ba8d2[t(406)](t(470));
                                else {
                                    var n = document[t(1126)](t(437)),
                                        r = window.mobileCheck ? sn[t(632)].FLOATING_POSITION_MB : sn[t(632)][t(1309)];
                                    n && sn[t(805)](n, r, e)
                                }
                            })), h(b(sn), pn(1622), (function() {
                                var e = pn;
                                if (e(700) == e(700)) {
                                    var t = 0,
                                        n = 0,
                                        r = 0,
                                        a = 0,
                                        i = window[e(974)][e(1126)](e(987) + sn[e(774)]);
                                    sn[e(1305)][e(1422)].addEventListener(google[e(1422)][e(1460)].Type[e(1496)], (function(n) {
                                        var r, a, o = e;
                                        if (sn[o(1685)] ? sn.ubPlayer[o(545)](sn[o(1685)]) : sn[o(1454)] = null !== (r = null === (a = sn[o(632)]) || void 0 === a ? void 0 : a[o(572)]) && void 0 !== r && r, !sn[o(812)] && sn[o(1306)] && sn[o(1190)] && sn[o(1305)][o(545)]() && sn[o(1305)][o(1422)][o(1051)]()[o(1679)](.005), sn[o(1595)] && sn[o(512)](sn[o(1305)], sn.initNextAdRequest), sn[o(1148)] && sn[o(922)](), sn[o(1471)][o(426)])
                                            if ("Mruiq" === o(438)) _0x5d2208[o(566)] && _0x4655bc[o(816)](o(957));
                                            else {
                                                sn[o(1618)]("prebidAdRequest Status - Started "), sn[o(1471)][o(1177)] = !0;
                                                var d = sn.ubprebid[o(1343)][o(984)][sn.prebidIma[o(358)]];
                                                d && {
                                                    env: {
                                                        CURRENT_CLIENT: "theuploadhub",
                                                        LOCAL_URL: "http://localhost:8080",
                                                        MODE: "production"
                                                    }
                                                }[o(1676)][o(1436)] !== o(1208) && setTimeout((function() {
                                                    var e, t, n = o;
                                                    "Cwyhd" !== n(1349) ? _0xd2927c = n(995) : (sn[n(1425)][n(1110)]("impression", {
                                                        website: window[n(387)][n(1607)][n(1657)],
                                                        bidder: d[n(458)],
                                                        cpm: d[n(897)],
                                                        adTagName: d[n(458)]
                                                    }), null !== (e = null === (t = sn.clientData) || void 0 === t ? void 0 : t.EMIT_LOGS) && void 0 !== e && e && sn[n(1425)][n(1110)]("prebid", {
                                                        data: {
                                                            playerName: window[n(387)][n(1607)][n(1657)],
                                                            country: sn[n(911)],
                                                            type: n(1629),
                                                            bidder: sn[n(645)][n(1343)][n(984)][sn[n(1471)].lastServedIndex][n(458)],
                                                            adId: sn[n(645)][n(1343)][n(984)][sn.prebidIma[n(358)]][n(577)],
                                                            device: window[n(1014)] ? "mb" : "pc"
                                                        }
                                                    }))
                                                }), 2100)
                                            }
                                        else sn[o(598)](!0, sn[o(766)]);
                                        t = performance[o(490)](), sn[o(884)]() && (sn[o(1298)] && (sn[o(1297)] = !0), sn.shortFloating ? setTimeout((function() {
                                            sn[o(1297)] = !1, sn.toggleSticky()
                                        }), 7e3) : sn[o(1142)]()), document[o(1126)](o(1037))[o(908)][o(1550)] = "unset", sn[o(1450)] = 0, sn.adCount[o(841)](), sn[o(1626)][o(1139)](), sn.adServedCount += 1, sn.adCount[o(1023)](), sn[o(518)] && (sn[o(518)] = !1), sn[o(788)] && -1 == sn[o(890)] && !sn.ubPlayer.muted() && sn[o(386)](), sn[o(876)](), i && i[o(1128)]("mouseout", (function() {
                                            return sn[o(876)]()
                                        }), !0)
                                    })), sn[e(1305)][e(1422)][e(1128)](google[e(1422)][e(1460)][e(1448)][e(451)], (function(i) {
                                        var o = e;
                                        window[o(566)] && console.log(o(810)), sn[o(1148)] && sn[o(803)](), sn[o(1471)].isPrebidAdStarted && (sn[o(1618)]("Prebid ad completed - completed"), sn[o(1471)][o(1177)] = !1, sn[o(1471)].prebidAdRequested = !1, sn.adCount.resetAdServedCountPB(), sn.markCurrentIndexAsServed()), n = performance[o(490)](), sn[o(1e3)] = parseInt((n - t) / 1e3 + 1)[o(1445)](0), r = sn[o(1444)](i, sn[o(1e3)]), a = r, sn.totalServedAdDuration = sn.totalServedAdDuration + Number(r), sn[o(1195)](r), sn[o(691)] += parseInt(r), r = 0, sn[o(884)]() && (sn.stickyFlag = !1, sn[o(1142)]()), document[o(1126)](o(1037))[o(908)][o(1550)] = "hidden"
                                    })), sn[e(1305)][e(1422)][e(1128)](google[e(1422)][e(1460)].Type.SKIPPED, function() {
                                        var i = e;
                                        if ("KWlwc" === i(880)) {
                                            var o = u(regeneratorRuntime[i(382)]((function e(o) {
                                                var d = i;
                                                if ("ESzqx" !== d(849)) return regeneratorRuntime[d(378)]((function(e) {
                                                    for (var i = d;;)
                                                        if (i(1043) !== i(1368)) switch (e[i(799)] = e[i(1639)]) {
                                                            case 0:
                                                                if (sn.sendAdWhenPaused && sn.disableSendAdWhenPaused(), window[i(566)] && console.log(i(852)), sn[i(1148)] && sn.hidePlayer(), sn[i(1471)][i(1177)] && (sn[i(1618)](i(553)), sn[i(1471)].isPrebidAdStarted = !1, sn.prebidIma.prebidAdRequested = !1, sn[i(1626)].resetAdServedCountPB(), sn[i(1273)]()), n = performance[i(490)](), sn[i(1e3)] = parseInt((n - t) / 1e3 + 1)[i(1445)](0), r = sn[i(1444)](o, sn.nextIndexDuration), a = r, sn.totalServedAdDuration = sn[i(455)] + Number(r), sn[i(1195)](r), sn[i(691)] += parseInt(r), r = 0, sn[i(884)]()) {
                                                                    if (i(380) != i(380)) {
                                                                        var s = _0x210300();
                                                                        return function() {
                                                                            var e, t = i,
                                                                                n = _0x4e6680(_0x16d7ca);
                                                                            if (s) {
                                                                                var r = _0x55bc1d(this)[t(1643)];
                                                                                e = _0x4ac5c2.construct(n, arguments, r)
                                                                            } else e = n.apply(this, arguments);
                                                                            return _0x5192b3(this, e)
                                                                        }
                                                                    }
                                                                    sn[i(1297)] = !1, sn[i(1142)]()
                                                                }
                                                                sn[i(1323)] && ("iqzMA" === i(519) ? (_0x5adc27[i(566)] && (_0x5a190e[i(1498)](i(1231)), _0x7ac00c[i(816)](_0x507eb5[i(927)] + i(1108) + _0x45e977 + i(550)), _0x529198[i(1089)]()), _0x35cebc[i(1100)] = _0x5545df) : document[i(761)](".muted-play")[i(908)][i(1550)] = "visible");
                                                            case 14:
                                                            case i(1290):
                                                                return e[i(821)]()
                                                        } else _0x1bad35[i(476)] || (_0x2fc0c2(_0x268ef6), _0x1da316 = null, _0x1bbaa6 = !1, _0x28db37[i(580)] && _0x2f924a[i(816)](i(1391)[i(825)](_0x485f18, i(1206))))
                                                }), e);
                                                if (_0x28afd2 < _0xe0977d[d(1446)]) {
                                                    var s = _0x24b95b[d(974)][d(1126)](_0x34c5ef[_0x568a26]) ? _0x416f59.document[d(1126)](_0x548e56[_0xf73053]) : _0x4f10be[d(974)][d(969)](_0x4a4f41[_0x405343])[0];
                                                    s && _0x5bdbfa[d(1554)](s), _0x2af48c = _0x54d7ab + 1
                                                } else _0xd8be8b[d(1446)] > 0 && _0x19c376[d(1371)](_0x28bf2c), _0x32d4df(_0x2250b1)
                                            })));
                                            return function(e) {
                                                var t = i;
                                                if ("JryPl" === t(1656)) return o.apply(this, arguments);
                                                _0x5a4a37[t(1305)] && !_0x4f008f[t(1305)][t(704)][t(1469)]() && _0x1431ad.destroyAdManger(), _0x4fe344[t(566)] && _0x3eefc2[t(816)](t(1474)), _0x20ae37[t(1022)] = !0
                                            }
                                        }
                                        _0x378ebd[i(530)]()
                                    }()), sn.ubPlayer[e(1422)].addEventListener(google[e(1422)][e(1460)][e(1448)][e(697)], function() {
                                        var o = e;
                                        if (o(1632) !== o(725)) {
                                            var d = u(regeneratorRuntime[o(382)]((function e(d) {
                                                var s = o;
                                                if (s(461) !== s(1168)) return regeneratorRuntime[s(378)]((function(e) {
                                                    for (var o = s;;) switch (e[o(799)] = e.next) {
                                                        case 0:
                                                            if (sn[o(1471)][o(1177)] && (sn[o(1618)](o(889)), sn[o(1471)][o(1177)] = !1, sn[o(1471)][o(426)] = !1, sn.adCount[o(625)](), sn[o(1273)]()), window.UBP_DEBUG && console[o(816)](o(837) + sn[o(766)]), sn[o(561)] && (sn.ubPlayer[o(704)][o(1476)][o(892)] = 2500), sn[o(1305)][o(704)][o(1469)]() && sn.ubPlayer.ads[o(1573)](), !sn[o(1685)]) {
                                                                e[o(1639)] = 9;
                                                                break
                                                            }
                                                            return e[o(1639)] = 7, sn[o(1305)].pause();
                                                        case 7:
                                                            e[o(1639)] = 12;
                                                            break;
                                                        case 9:
                                                            if (!(sn.ubPlayer && sn[o(1305)].paused() && sn[o(718)])) {
                                                                e[o(1639)] = 12;
                                                                break
                                                            }
                                                            return e[o(1639)] = 12, sn[o(1305)][o(881)]();
                                                        case 12:
                                                            document[o(1126)](o(1037)) && (document.getElementById(o(1037))[o(908)][o(1550)] = o(1015)), sn.resetAdsarrayindex(), sn[o(518)] && (sn.isFirstIndexRequested = !1), sn[o(1595)] && (n = performance[o(490)](), sn[o(1e3)] = parseInt((n - t) / 1e3 + 2).toFixed(0), r = sn[o(1444)](d, sn[o(1e3)]), sn.adServedCount > 1 && !sn[o(1450)] && (a = r)), sn.initNextAdRequest("All Ads Complete", a), i && i[o(1565)](o(683), (function() {
                                                                return sn.showAdControls()
                                                            }), !0);
                                                        case 18:
                                                        case "end":
                                                            return e[o(821)]()
                                                    }
                                                }), e);
                                                _0x330cd0 = _0x2c423e[_0x487ef4[s(1016)][s(911)]], _0x1777b7[_0x407dbf] && (_0x18ff51[_0x54bb93] = _0x2212e9[s(1102)](_0x5c02fd[_0x1fd4b2])), _0x2e9100.country = _0x531a3b.geoData[s(911)]
                                            })));
                                            return function(e) {
                                                return d.apply(this, arguments)
                                            }
                                        }
                                        _0x3bbf98[o(766)]--
                                    }()), sn[e(1305)][e(1422)][e(734)]((function(t) {
                                        var n = e;
                                        if (!sn[n(1305)][n(1422)].controller.sdkImpl[n(1027)] && sn[n(927)] < 1) {
                                            if (n(375) != n(375)) return void _0x517c04(_0x531aa8);
                                            sn[n(518)] = !1;
                                            var r = 0,
                                                a = setInterval((function() {
                                                    var e = n;
                                                    sn.ubPlayer && sn.ubPlayer.paused() && clearInterval(a), sn[e(1305)][e(1326)](), (r >= 10 || sn[e(1305)] && sn[e(1305)][e(1617)]()) && clearInterval(a), r++
                                                }), 100);
                                            sn[n(493)]()
                                        }
                                    })), sn[e(1305)][e(1422)].addEventListener(google.ima.AdEvent[e(1448)][e(1299)], (function(t) {
                                        var n = e;
                                        "HSCvA" === n(932) ? (_0x4f8ec3[n(1297)] = !1, _0x2e0d58[n(1142)]()) : 0 == sn[n(561)] && (sn[n(561)] = !0)
                                    }))
                                } else _0x136a8b[e(766)] = 0
                            })), h(b(sn), "manageUnfillAds", {
                                isEnable: sn.flagParser2(pn(1692), "MANAGE_DEALY_FOR_UNFILL_REQUESTS", pn(790)),
                                accessGlobals: b(sn),
                                applyPassback: sn[pn(499)](pn(1280), pn(1542), pn(1135)),
                                whenAdNotServed: function() {
                                    var e, t, n = pn,
                                        r = this.accessGlobals[n(1553)][n(1634)];
                                    0 == (t = this.accessGlobals[n(766)] >= this[n(1644)][n(1215)][n(1446)] - 1 ? 0 : this[n(1644)].adsIndex + 1) && this[n(1644)].resetAdArray(), this.isEnable && this.accessGlobals[n(1450)] > r && ("aJbGv" !== n(694) ? (_0x2e206a[n(658)][n(873)]("ubsticky_" + _0x4b7c4e), _0x1e4ef9[n(658)][n(627)]("unsticky")) : (e = this[n(1644)][n(1450)] > this.accessGlobals[n(1553)][n(1634)] ? this[n(1644)][n(1553)].DELAY : this[n(1644)][n(1553)].DEFAULT, window.UBP_DEBUG && console[n(816)](n(1359) + e), this.accessGlobals[n(1215)][t][n(1237)] = e)), this[n(921)] && "" != this[n(481)] && this[n(1644)].nonServedCount > r && (this.accessGlobals.adsArray[t][n(704)][0] = this[n(481)], this.accessGlobals[n(1450)] = 0)
                                },
                                whenAdServed: function() {
                                    var e, t, n = pn;
                                    n(699) !== n(958) ? (0 == (t = this.accessGlobals.adsIndex >= this.accessGlobals[n(1215)][n(1446)] - 1 ? 0 : this[n(1644)][n(766)] + 1) && this[n(1644)][n(905)](), e = this[n(1644)].delayForUnfillRequests[n(674)], this[n(1644)][n(1215)][t].delay = e) : (_0x1e48df[n(1676)][n(1436)] !== n(1208) && null !== (_0x5826a0 = null === (_0x267883 = _0x3cb80d[n(632)]) || void 0 === _0x790986 ? void 0 : _0x3472b8.EMIT_LOGS) && void 0 !== _0x5451c6 && _0x508500 && (_0xda2239[n(1618)](n(933) + _0x140643[n(1471)].lastServedIndex + n(364)), _0x532a13[n(1425)][n(1110)]("prebid", {
                                        data: {
                                            playerName: _0x510218.parent[n(1607)][n(1657)],
                                            country: _0x3ec737.country,
                                            type: n(1329),
                                            errorCode: _0x4fe8c5[n(1449)][n(661)][n(1200)](),
                                            errorMessage: _0x41030a.data.AdError[n(982)](),
                                            bidsResponse: _0x32b14f.ubprebid[n(1343)].adTagUrls[_0x201148[n(1471)][n(358)]],
                                            retryData: {
                                                wasRetried: _0x42736b.prebidIma[n(847)],
                                                retriedCount: _0xc865dc[n(1471)][n(992)]
                                            },
                                            device: _0x4c3ce1[n(1014)] ? "mb" : "pc"
                                        }
                                    })), _0x556cba[n(1618)](n(933) + _0x117cef[n(1471)][n(358)] + " index"), _0x4a4580.prebidIma[n(847)] = !1, _0x3a5c24[n(1273)](), _0x365ab1[n(751)]("prebid adsError"))
                                }
                            }), h(b(sn), pn(362), (function() {
                                var e = pn;
                                return sn[e(766)] > 0 ? sn[e(766)] - 1 : sn[e(766)]
                            })), h(b(sn), "modifyNextAdsDealy", (function(e) {
                                var t = pn;
                                if (sn.adDealyEnabled && !sn[t(846)]) {
                                    if (t(1356) === t(1464)) {
                                        var n = arguments[t(1446)] > 1 && arguments[1] !== _0x2c1ba8 ? arguments[1] : null,
                                            r = _0xb5c2c5(_0x42554b) != _0x21b954 ? _0x54273a[t(811)]().getDuration() : 0;
                                        return null !== n ? n > r ? r : n : r
                                    }
                                    var a = [2],
                                        i = parseInt(e),
                                        o = sn[t(766)] >= sn[t(1215)][t(1446)] - 1 ? 0 : sn[t(766)] + 1;
                                    if (!sn[t(1450)] && (sn[t(787)]() || sn[t(1305)] && sn.ubPlayer.paused()))
                                        if (1 == sn.adServedCount && (window[t(566)] && (console.group(t(1231)), console[t(816)](sn[t(927)] + t(1108) + i + t(550)), console.groupEnd()), sn[t(1100)] = i), a[0] == sn.adServedCount) window[t(566)] && (console[t(1498)]("Ad Info : "), console.log("Total Ads Served " + sn.adServedCount), console[t(816)](sn[t(927)] + t(1108) + i + " sec Duration."), console.groupEnd()), sn.adsArray[o][t(1237)] = i;
                                        else if (sn.adServedCount > a[0]) {
                                        if (window[t(566)] && (console[t(1498)](t(1231)), console[t(816)]("Total Ads Served " + sn[t(927)])), 3 == sn.adServedCount) {
                                            var d = parseInt(i) + parseInt(sn.firstAdDuration);
                                            window.UBP_DEBUG && console[t(816)](sn.adServedCount + t(593) + i + t(550)), sn[t(1215)][o][t(1237)] = d
                                        } else sn[t(1215)][o][t(1237)] = i, window[t(566)] && console[t(816)](sn[t(927)] + t(1122) + i + t(550));
                                        window.UBP_DEBUG && console.groupEnd()
                                    }
                                }
                            })), h(b(sn), pn(876), (function() {
                                var e = pn,
                                    t = document.querySelector(".ima-controls-div");
                                sn.isAdRunning() && t && null != videojs[e(361)]()[e(793)] && !t[e(658)][e(730)]("ima-controls-div-showing") && (e(1026) !== e(466) ? t[e(658)][e(627)](e(1646)) : _0x30f453[e(1298)] = !0)
                            })), h(b(sn), pn(1074), u(regeneratorRuntime[pn(382)]((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    var t = a;
                                    if (t(1093) !== t(731))
                                        for (;;)
                                            if (t(919) != t(919)) _0x16dfb4({
                                                error: _0x5758ff
                                            });
                                            else switch (e[t(799)] = e[t(1639)]) {
                                                case 0:
                                                    return sn[t(1279)] = !1, sn[t(479)] = 0, sn[t(927)] = 0, sn.totalAdsDuration = 0, sn.reset4CFlag = !0, sn.adsIndex = 0, window.UBP_DEBUG && console.log(t(1405)), sn[t(1305)][t(704)].isInAdMode() && sn[t(1305)][t(704)].endLinearAdMode(), sn[t(1305)][t(704)][t(1469)]() && sn.ubPlayer[t(704)][t(467)]() ? sn[t(541)]() : t(1591) === t(1130) ? _0x3fc9cb[_0x1705b6] = _0x7a1c31[_0x24f16c] : sn[t(541)](), sn.ubPlayer[t(472)][t(599)](0), sn.ubPlayer[t(1686)](t(618)), e[t(1639)] = 13, sn[t(1305)].playlist[t(1639)]();
                                                case 13:
                                                    sn[t(1305)].playlist[t(599)](1);
                                                case 14:
                                                case t(1290):
                                                    return e.stop()
                                            } else {
                                                var n = arguments[t(1446)] > 1 && arguments[1] !== _0x68c805 ? arguments[1] : _0x2dffe8;
                                                if (_0x24bce3 == _0x3dc72b) throw new _0x525197(t(548));
                                                _0x5e5a7a[t(1425)] = _0x12a9f7, n != _0x1c5314 && (_0x2e2618.ubprebid = n), _0x595b66[t(1601)]({
                                                    timeout: 100,
                                                    muted: !1,
                                                    inline: !0
                                                }).then((function(e) {
                                                    var n = t;
                                                    !1 === e[n(1375)] ? _0x462614[n(1218)]() : (_0x4f4fad[n(1306)] = !0, _0x4131c2.autoplayRequiresMute = !1, _0x6f6a51[n(1212)](!0))
                                                }))
                                            }
                                }), e)
                            })))), h(b(sn), pn(386), (function() {
                                var e = pn;
                                if ("hxcIr" === e(828)) !_0x4f4597[e(658)][e(730)](e(1646)) && _0x5e86fb[e(658)].add(e(1646));
                                else if (sn[e(691)] > sn[e(1305)][e(954)]())
                                    if (e(826) === e(1438)) _0x221c1e[e(658)][e(873)]("ubsticky_" + _0x2dcf28), _0x1e0374.classList.add(e(1119));
                                    else {
                                        if (window[e(566)]) {
                                            if ("CvxJh" === e(576)) return _0x1176bd[e(378)]((function(t) {
                                                for (var n = e;;) switch (t[n(799)] = t[n(1639)]) {
                                                    case 0:
                                                        _0x31afe4[n(1565)](_0x4356d4, _0x29d9e3);
                                                    case 1:
                                                    case n(1290):
                                                        return t[n(821)]()
                                                }
                                            }), _0x350639);
                                            console.group(e(440)), console[e(816)](e(1369) + sn.totalAdsDuration, e(689) + sn.ubPlayer[e(954)]()), console[e(816)](e(539)), console[e(1089)]()
                                        }
                                        var t = window[e(974)][e(1126)](e(987) + sn.clientname);
                                        t && t[e(1565)](e(683), (function() {
                                            return sn[e(876)]()
                                        }), !0), window[e(1565)](e(1597), (function() {
                                            return sn[e(1142)]()
                                        }), !0), sn[e(1633)]()
                                    }
                            })), h(b(sn), pn(643), (function() {
                                var e = pn;
                                if ("tPQdd" === e(1006)) !1 === _0x11da60[e(1375)] ? _0x27cb7b[e(1218)]() : (_0xca8b5[e(1306)] = !0, _0xde16c[e(812)] = !1, _0x54198d[e(1212)](!0));
                                else {
                                    var t = window[e(1014)] ? "touchend" : e(1467),
                                        n = document[e(761)](e(1365)),
                                        r = window[e(974)][e(1126)]("div-ub-" + sn.clientname);
                                    n[e(1128)](t, (function a() {
                                        var i = e;
                                        if (event[i(1528)] === r || r.contains(event[i(1528)])) return i(985) === i(1697) ? _0x931ad6 && typeof _0x39df6e === i(1269) && _0x2ec125[i(1643)] === _0x56facf && _0x245d69 !== _0x5585fd[i(1192)] ? i(1198) : typeof _0x5b4e96 : void n[i(1565)](t, a);
                                        i(1152) === i(1583) ? (_0x2193e5.classList[i(873)](i(567)), _0x20a4f6.classList[i(627)](i(935))) : canAutoplay[i(1601)]({
                                            timeout: 100,
                                            muted: !1,
                                            inline: !0
                                        })[i(558)]((function(e) {
                                            var r, o, d, s, c = i;
                                            !1 === e[c(1375)] ? c(1097) != c(1097) ? (_0x2a3a5b[c(566)] && _0x48faaf[c(406)](c(444)), _0x1817e4[c(1305)][c(545)](_0x2ebaec[c(812)] || !_0x5119d1[c(1306)]), _0x14fbe3[c(1305)][c(881)](), null !== (r = _0x47b32c[c(632)]) && void 0 !== r && null !== (o = r[c(709)]) && void 0 !== o && o[c(1046)] || _0x49e8c6[c(1069)]()) : (sn[c(1306)] = !0, sn[c(812)] = !0) : (sn[c(1306)] = !0, sn[c(812)] = !1), sn[c(1305)][c(545)](sn[c(812)]), sn[c(1306)] && !sn[c(812)] && (c(1260) !== c(1511) ? (window[c(566)] && console.log("player played on DOM click"), sn[c(1685)] && (sn[c(788)] = !1), sn[c(1685)] = !1, n[c(1565)](t, a), sn[c(1305)].volume(.001), sn.clickToPlay[c(1066)].keepFloating, !sn[c(653)][c(1066)].keepFloating && (sn[c(546)] = !1, sn[c(1297)] = !0, sn[c(1620)]()), sn[c(1305)].paused() && sn[c(1305)].play()) : (0 == (s = this[c(1644)][c(766)] >= this[c(1644)].adsArray[c(1446)] - 1 ? 0 : this[c(1644)].adsIndex + 1) && this[c(1644)].resetAdArray(), d = this[c(1644)][c(1553)].DEFAULT, this[c(1644)][c(1215)][s][c(1237)] = d)), sn[c(1305)][c(1101)](c(881), u(regeneratorRuntime[c(382)]((function e() {
                                                var r = c;
                                                return regeneratorRuntime[r(378)]((function(e) {
                                                    var i = r;
                                                    if ("DTZMg" === i(619))
                                                        for (;;) switch (e.prev = e[i(1639)]) {
                                                            case 0:
                                                                n[i(1565)](t, a);
                                                            case 1:
                                                            case "end":
                                                                return e.stop()
                                                        } else _0x3fb040 = _0x5bd300[i(450)](_0x426540.slotID, _0x5bd1a2[i(899)], _0x53e18a[i(583)])[i(1585)](_0xb14594[i(1028)]())[i(1585)](_0x34675e.pubads()), _0x46e988.enableServices(), _0x1de75b[i(1002)](_0x239862[i(583)]), _0xebb93e(), _0x4249a6()
                                                }), e)
                                            }))))
                                        }))
                                    }))
                                }
                            })), h(b(sn), "startAdsonHalfPlayerViewed", (function() {
                                var e = pn;
                                if ("LsdXk" !== e(782)) {
                                    if (!sn[e(846)] && sn[e(1305)]) {
                                        var t = function() {
                                                var t = e;
                                                sn.ubPlayer[t(1422)].playAdBreak(), sn[t(1235)] = !1, sn[t(1305)][t(1422)].controller[t(1188)][t(1027)] = !0
                                            },
                                            n = window[e(974)][e(1126)](sn[e(413)]);
                                        sn[e(1693)] || sn[e(1672)] || sn[e(1586)] || sn[e(456)](n, 50) || sn[e(1298)] ? t() : window[e(1128)](e(1597), (function n() {
                                            var r = e;
                                            if ("ZFvNL" !== r(1169)) _0x3761d7.prebidLog(r(475)), _0xe3c291[r(1471)][r(1177)] = !1, _0x233aea[r(1471)].prebidAdRequested = !1, _0xfa952a[r(1626)][r(625)](), _0x49a990.markCurrentIndexAsServed();
                                            else if (sn.playerViewed50) {
                                                if ("XhUiL" === r(447)) return this[r(1066)];
                                                t(), window[r(1565)](r(1597), n, !0)
                                            }
                                        }), !0)
                                    }
                                } else {
                                    if (_0x78fad7 >= 7) return _0x43da7a = 0, _0x4b2204(_0x5a991e), _0x35657c[e(566)] && _0x53da29[e(406)](e(610)), _0x17c188 && _0x1dd8e0[e(658)].contains(e(1123) + _0x20d480) && (_0x115da1[e(658)][e(873)](e(1123) + _0x51adb7), _0x6cf7d4[e(658)][e(627)]("unsticky")), _0x205c23[e(1422)][e(581)].sdkImpl[e(1396)][e(795)](), _0x319934;
                                    _0x516066 = _0x5d9bd8 + .5, _0x2cb972.UBP_DEBUG && _0x3f3b7d[e(816)](e(628), _0x4e40ec)
                                }
                            })), h(b(sn), pn(1684), u(regeneratorRuntime[pn(382)]((function e() {
                                var t, n = pn;
                                return regeneratorRuntime[n(378)]((function(e) {
                                    var r = n;
                                    if ("JpLgA" !== r(1600)) {
                                        var a = _0x5dff3e(this)[r(1643)];
                                        _0x559dd4 = _0x475633[r(1447)](_0xc75b8a, arguments, a)
                                    } else
                                        for (;;) switch (e[r(799)] = e.next) {
                                            case 0:
                                                t = videojs[r(1473)][r(775)], sn[r(1305)] && !sn[r(596)] && sn[r(1014)] && t && window[r(387)][r(974)].body[r(1128)]("touchend", function() {
                                                    var e = r,
                                                        t = u(regeneratorRuntime[e(382)]((function t(n) {
                                                            var r = e;
                                                            return regeneratorRuntime[r(378)]((function(e) {
                                                                var t = r;
                                                                if (t(1072) !== t(901))
                                                                    for (;;)
                                                                        if ("ZGrGS" === t(823)) switch (e[t(799)] = e.next) {
                                                                            case 0:
                                                                                window.UBP_DEBUG && console[t(816)](t(1262), sn[t(596)]), sn[t(596)] || (window[t(566)] && console[t(816)](t(1675), n), sn[t(596)] = !0);
                                                                            case 2:
                                                                            case t(1290):
                                                                                return e[t(821)]()
                                                                        } else _0x1d0210.ubPlayer[t(1440)] = _0x3fe47b((function() {
                                                                            var e = t;
                                                                            _0x32bfc6.ubPlayer[e(979)]({
                                                                                type: "application/x-mpegURL",
                                                                                src: _0x28bc84[e(1032)]
                                                                            }), _0x86229e[e(1305)][e(967)](), _0x279d4d[e(1182)]()
                                                                        }), 200);
                                                                        else _0x322344[t(566)] && _0x30e937.log(t(810)), _0x5ed6c[t(1148)] && _0x4cb969[t(803)](), _0x4ded4f.prebidIma[t(1177)] && (_0x3fc98d[t(1618)](t(475)), _0xa4102d[t(1471)][t(1177)] = !1, _0x3fc1af.prebidIma.prebidAdRequested = !1, _0x1ecb5b[t(1626)].resetAdServedCountPB(), _0x9ce2bb[t(1273)]()), _0x9d6b30 = _0x5a2dbc.now(), _0x4e31eb[t(1e3)] = _0x455811((_0x52d1a7 - _0x1cca4d) / 1e3 + 1)[t(1445)](0), _0x443b0b = _0xcfa9b3[t(1444)](_0xd83ced, _0x132faf[t(1e3)]), _0x50c0f8 = _0x16a8ef, _0x10738e[t(455)] = _0x2babcb.totalServedAdDuration + _0x51a8e6(_0x57ba59), _0x1e40ad.modifyNextAdsDealy(_0x50cf04), _0x2c8841[t(691)] += _0x4fcfc3(_0x39f094), _0x31d90b = 0, _0x36db16[t(884)]() && (_0x1da1f2.stickyFlag = !1, _0x4da245[t(1142)]()), _0xed9c86[t(1126)](t(1037))[t(908)][t(1550)] = t(1015)
                                                            }), t)
                                                        })));
                                                    return function(n) {
                                                        var r = e;
                                                        return t[r(498)](this, arguments)
                                                    }
                                                }());
                                            case 2:
                                            case r(1290):
                                                return e[r(821)]()
                                        }
                                }), e)
                            })))), h(b(sn), pn(1204), (function() {
                                var e = pn;
                                return sn[e(1661)] > 0 && sn[e(1305)][e(1047)](sn[e(1661)])
                            })), h(b(sn), pn(1278), (function() {
                                var e = pn;
                                if (e(1184) === e(1514)) {
                                    if (_0x39605b) throw _0x3b7ffb
                                } else window[e(1128)](e(1597), (function t() {
                                    var n = e,
                                        r = window[n(974)][n(1126)](sn[n(413)]);
                                    if (sn[n(456)](r, 50) && sn.isFullPlayerViewedOnce)
                                        if (n(1475) === n(474)) {
                                            var a = {
                                                main: 21928950349,
                                                new_main: 22082859479,
                                                cr_ads: 23027927350,
                                                affinity: 21930596546
                                            };
                                            _0x10ff19[n(1055)](a)[n(1315)]((function(e) {
                                                _0x3f1013[n(1683)](a[e]) && (_0x3b1104 = e)
                                            }))
                                        } else sn[n(910)] = !0, window[n(1565)](n(1597), t, !0)
                                }), !0)
                            })), h(b(sn), "processPlayerPlay", u(regeneratorRuntime[pn(382)]((function e() {
                                var t, n, r, a, i, o, d = pn;
                                if ("YnBAd" === d(827)) return regeneratorRuntime.wrap((function(e) {
                                    for (var s = d;;) switch (e[s(799)] = e.next) {
                                        case 0:
                                            if (null === (t = sn[s(632)]) || void 0 === t || null === (n = t.CLICK_TO_PLAY) || void 0 === n || !n[s(790)] || sn[s(656)] || !sn[s(812)] && sn[s(1306)]) {
                                                e[s(1639)] = 4;
                                                break
                                            }
                                            sn[s(981)](), e.next = 15;
                                            break;
                                        case 4:
                                            if (window[s(566)] && console.log(s(1428)), sn[s(656)] ? sn[s(1305)].muted(sn[s(656)]) : sn[s(1305)][s(545)](sn[s(812)]), null !== (i = sn[s(632)]) && void 0 !== i && null !== (o = i[s(709)]) && void 0 !== o && o[s(1046)] ? sn[s(546)] = !0 : sn[s(546)] = !1, !sn.autoplayRequiresMute && sn[s(1306)] && sn.playAdUnmuted ? (sn[s(1190)] = !0, sn.ubPlayer[s(545)]() || sn[s(1305)][s(545)](sn[s(1190)])) : (sn[s(1190)] = !1, sn[s(632)][s(786)] = !1), sn[s(1305)][s(545)]() && !sn[s(1190)]) {
                                                if (s(1294) == s(1294)) {
                                                    e.next = 14;
                                                    break
                                                }
                                                _0x4d0430[s(658)][s(873)]("ubsticky_" + _0x13c380), _0x4fe5a9.classList[s(627)](s(1119))
                                            }
                                            return sn[s(1685)] && (sn.sendAdWithoutDelay = !1), sn[s(1685)] = !1, sn.autoplayAllowed || sn[s(1305)].muted(!sn[s(1306)]), e[s(1639)] = 14, sn[s(1305)].play();
                                        case 14:
                                            sn[s(890)] = -1;
                                        case 15:
                                            null !== (r = sn[s(632)]) && void 0 !== r && null !== (a = r[s(709)]) && void 0 !== a && a[s(790)] ? sn[s(1305)][s(545)](sn[s(656)]) : sn.ubPlayer[s(545)](!0);
                                        case 16:
                                        case s(1290):
                                            return e[s(821)]()
                                    }
                                }), e);
                                if (arguments[d(1446)] > 0 && _0x317c8d, _0x2ac232[d(815)]) {
                                    if (!_0xbe59a4[d(1228)]) {
                                        var s = d(1270) in _0x17a108[d(632)] && 0 != _0x5845eb.clientData[d(1270)] ? _0x1bad9a.clientData[d(1270)] : 150;
                                        _0x139aab.isNearViewport(_0x43e5dc[d(387)][d(974)][d(1126)](_0x414c86[d(413)]), s)
                                    }
                                } else _0x85911[d(724)]()
                            })))), h(b(sn), pn(724), u(regeneratorRuntime[pn(382)]((function e() {
                                var t, n, r, a, i = pn;
                                return regeneratorRuntime[i(378)]((function(e) {
                                    for (var o = i;;) switch (e[o(799)] = e[o(1639)]) {
                                        case 0:
                                            if ((r = sn[o(632)][o(626)]) && r.length > 0 && sn[o(1317)](r), window.UBP_DEBUG && console[o(816)](o(716)), (a = []).push(document[o(1126)]("ubVideo")), sn.checkPlayerViewed50Percent(), sn[o(1608)](a), sn[o(1148)] && sn.hidePlayer(), sn[o(851)](), sn[o(1335)](), null !== (t = sn[o(632)]) && void 0 !== t && null !== (n = t[o(709)]) && void 0 !== n && n[o(790)]) {
                                                if (o(1570) != o(1570)) return _0x30309a[o(378)]((function(e) {
                                                    for (var t = o;;) switch (e[t(799)] = e.next) {
                                                        case 0:
                                                            _0x1dea75[t(566)] && _0x2996a0.log(t(1262), _0x36b685[t(596)]), _0x1ce834.playerFirstPlay || (_0x687273[t(566)] && _0x314439[t(816)](t(1675), _0x35c4b7), _0x335d5f[t(596)] = !0);
                                                        case 2:
                                                        case t(1290):
                                                            return e.stop()
                                                    }
                                                }), _0x2316d9);
                                                sn[o(1510)] && sn[o(643)](), window.UBP_DEBUG && console.log("player will play muted -", sn[o(812)], o(1551), sn[o(1306)]), sn.processPlayerPlay()
                                            } else sn.ubPlayer[o(545)](!0);
                                            sn[o(1142)]();
                                        case 12:
                                        case "end":
                                            return e[o(821)]()
                                    }
                                }), e)
                            })))), h(b(sn), pn(851), (function() {
                                var e = pn;
                                sn[e(715)][e(1651)](), sn[e(579)].bigPlayButton = !0, sn[e(579)].html5 = {
                                    hlsjsConfig: {
                                        debug: !1
                                    },
                                    vhs: {
                                        overrideNative: !videojs[e(1473)].IS_SAFARI,
                                        enableLowInitialPlaylist: !0
                                    },
                                    nativeTextTracks: !1,
                                    nativeAudioTracks: !1,
                                    nativeVideoTracks: !1
                                };
                                var t = {
                                    id: sn.videoElement,
                                    disableCustomPlaybackForIOS10Plus: !0,
                                    disableAdControls: !1,
                                    contribAdsSettings: {
                                        debug: !1,
                                        timeout: 1e4
                                    },
                                    adsRenderingSettings: {
                                        loadVideoTimeout: 1e4,
                                        enablePreloading: !0
                                    },
                                    autoPlayAdBreaks: sn[e(504)],
                                    vastLoadTimeout: 1e4,
                                    adsManagerLoadedCallback: function() {
                                        var t = e;
                                        if ("ZAeIb" === t(575)) return sn[t(1622)]();
                                        var n = {},
                                            r = _0xa68a94.mobileCheck ? "MB" : "PC",
                                            a = _0x588939[t(1305)] && _0x484415.ubPlayer[t(545)]() && !_0x5ef146[t(971)] ? t(1334) : t(1373);
                                        return _0x452cc7[_0x2c58ac] && (_0x1302ce[t(1480)] ? _0x52ed6f[t(1557)] && _0x109fa7[_0xcef682][r] ? n[_0x364899] = _0x27f659[_0x2c6d25][r][a] : n[_0x4c2c57] = _0x4e0b41[_0x4bf409][r] : _0x59f7f2[t(1557)] && (n[_0x5de9ca] = _0x3fe137[_0x44dbd3][a])), 0 == _0x56d252[t(1055)](n)[t(1446)] && (n = null), n
                                    }
                                };
                                if (sn[e(446)](document[e(1126)]("div-ub-" + sn[e(774)])) && (t[e(1663)][e(892)] = 1e3), videojs[e(1473)][e(775)] && document[e(1126)](sn.videoElement).setAttribute(e(871), ""), sn[e(1305)] = videojs(sn[e(615)], sn.vjsOptions), sn.ubPlayer[e(1422)](t), sn[e(1204)](), sn[e(715)][e(1321)](), sn[e(804)](), sn[e(1680)](sn[e(1560)]()), sn[e(1292)](), sn[e(976)](sn[e(1381)]), sn.isFloatAllowed())
                                    if ("KiZNE" === e(703)) window[e(974)].getElementById(sn[e(413)]) && !sn[e(846)] && (e(556) !== e(752) ? window[e(1128)](e(1597), (function() {
                                        return sn[e(1142)]()
                                    })) : (_0x2a1ad3.initPlayer(), _0x1958a0[e(434)] = !0));
                                    else if (!_0x5ea4e3[e(1228)]) {
                                    var n = e(1270) in _0x5b66d7.clientData && 0 != _0x26ca67[e(632)][e(1270)] ? _0xe828fd[e(632)][e(1270)] : 150;
                                    _0x4b6b9e[e(1300)](_0x5db0e4[e(387)][e(974)][e(1126)](_0x3bfe61.listenerElement), n)
                                }
                                sn.runVideo()
                            })), h(b(sn), pn(582), (function() {
                                var e = pn;
                                if (e(950) !== e(756)) return sn.clickToPlay.config[e(921)] ? sn.ubPlayer[e(520)](!1) : sn[e(1305)][e(520)](!0);
                                _0x976525 || (_0xcbcdca[e(566)] && _0x360e70[e(406)](e(947), _0x20f821), _0x2c76c7())
                            })), h(b(sn), "runVideo", (function() {
                                var e = pn;
                                if ("rxGbT" !== e(359)) {
                                    if (sn.firstFlag) {
                                        if (e(666) != e(666)) return _0x5d366f.apply(this, arguments);
                                        if (sn[e(1347)] = !1, !sn[e(1306)]) {
                                            var t, n, r, a = function t() {
                                                var n = e;
                                                "YPuAJ" !== n(1658) ? (i.ima[n(1490)](), divWrapper[n(1565)](o, t)) : !_0x573e54[n(779)] && _0x2130f7[n(476)] && (_0x3961c4[n(779)] = !0)
                                            };
                                            null !== (t = sn[e(813)]) && void 0 !== t && t.pbFlags[e(844)] && null !== (n = sn[e(813)]) && void 0 !== n && null !== (r = n[e(1061)]) && void 0 !== r && r.priorityPlay ? sn[e(1305)][e(967)]() : sn[e(582)](), (navigator[e(1520)][e(1488)](/iPhone/i) || navigator.userAgent[e(1488)](/iPad/i) || navigator.userAgent[e(1488)](/Android/i)) && (o = e(995));
                                            var i = sn[e(1305)];
                                            divWrapper = document.getElementById(e(793)), divWrapper[e(1128)](o, a);
                                            var o = "click"
                                        }
                                        if (sn[e(1306)] && !sn[e(360)]) {
                                            if ("rwnIR" === e(1011)) throw new _0x31fd41(e(548));
                                            sn.setPlayerAutoplay()
                                        }
                                    }
                                } else _0x140e86.observe(_0x988138, {
                                    attributes: !0,
                                    attributeFilter: [e(908)]
                                })
                            })), h(b(sn), "addCloseButton", (function(e) {
                                var t = pn;
                                if (e) {
                                    var n = function(e) {
                                        f(n, e);
                                        var t = v(n);

                                        function n(e, r) {
                                            var i, o = a;
                                            if (o(571) == o(571)) return _(this, n), (i = t[o(1567)](this, e, r))[o(1181)](o(1481)), i[o(1172)]("ubp-close"), i;
                                            _0x3ca60e.playerViewed50 = !0, _0x30a390[o(1565)](o(1597), _0x5e020a, !0)
                                        }
                                        return n
                                    }(videojs[t(1443)](t(791)));
                                    videojs[t(1532)](t(791), n), sn[t(1305)].addChild(t(791));
                                    var r = document[t(969)](t(1696))[0];
                                    sn[t(682)] && document[t(761)](t(1598))[t(1361)](t(908), t(907));
                                    var i = window[t(1014)] ? t(995) : t(1467);
                                    r[t(1128)](i, (function() {
                                        var e = t;
                                        if ("OARKu" !== e(1064)) return this[e(1450)];
                                        sn[e(994)] = !0, sn[e(720)] ? sn[e(678)]() && (e(1056) == e(1056) ? (sn[e(1185)] = !0, sn[e(1620)]()) : (_0x537891[e(1305)] && _0x5676f9.ubPlayer[e(1617)]() && _0x1da23f(_0x168b49), _0x3db90c[e(1305)][e(1326)](), (_0x347440 >= 10 || _0x287e4d[e(1305)] && _0x3e514c[e(1305)][e(1617)]()) && _0xb6bfb2(_0x3c3ae4), _0x5e5aa3++)) : sn[e(508)] || !sn[e(678)]() ? e(783) != e(783) ? (_0x56188e[e(1305)] && _0x30005c[e(1305)][e(704)][e(1469)]() && (_0x4e0c1e[e(1305)].ads.endLinearAdMode(), _0x1dcca7.ubPlayer[e(704)][e(1084)]()), _0x3dc5dd((function() {
                                            var t = e;
                                            _0x4f157e.ubPlayer && _0x31fd3b.ubPlayer[t(704)][t(1469)]() && _0x4ce7c[t(1305)][t(704)][t(1573)](), _0x17b0e4[t(1305)].trigger(t(1324)), _0x1cec99.initNextAdRequest("adsError")
                                        }), 1e3)) : sn[e(962)]() : sn[e(981)]() ? e(1134) === e(1549) ? this.nonServedCount = 0 : sn.removeStickyPlayer() : sn[e(1620)]()
                                    }))
                                }
                            })), h(b(sn), pn(962), (function() {
                                var e = pn;
                                if (e(861) == e(861)) {
                                    var t = window[e(387)][e(974)][e(1126)](e(987) + sn[e(774)]);
                                    t && t[e(1253)](e(908)) && t[e(1036)](e(908));
                                    var n = 5,
                                        r = setInterval((function() {
                                            var t = e;
                                            if (n-- && this.imaRequestQueue && this[t(1305)]) {
                                                if (t(487) === t(1288)) return _0x5ea4f1[t(1622)]();
                                                this[t(1305)][t(1628)](), this[t(846)] = !0, this.destroyAdManger(), clearInterval(r)
                                            }
                                            n <= 0 && (!this[t(846)] && this[t(1305)] && (this[t(1305)][t(1628)](), this[t(846)] = !0, this[t(541)]()), clearInterval(r))
                                        }), 500);
                                    sn[e(846)] = !0, window[e(389)] = !1, sn[e(541)](), window.parent.document[e(1126)](e(437))[e(873)](), window[e(387)][e(974)][e(1126)](e(918))[e(873)]()
                                } else _0x23dd59[e(645)][e(1343)][e(984)][_0x40427c[e(1471)][e(358)]][e(1238)] = !1, _0x12db63[e(645)][e(1343)][e(984)][_0x48935e.prebidIma.lastServedIndex][e(785)] = !1, _0x48fef9.prebidLog(e(948))
                            })), h(b(sn), "reInitializePlayer", (function() {
                                var e = pn;
                                sn[e(1401)] ? (sn[e(846)] = !0, sn[e(1279)] = !1, videojs[e(361)]().content_video[e(1628)](), document[e(761)]("#" + sn[e(413)]) && ("FFRBn" === e(441) ? document[e(761)]("#" + sn[e(413)])[e(873)]() : _0x1e68b4 = 0), videojs[e(816)].warn(e(1167)), videojs[e(816)][e(406)](e(480)), window.playerRun = !1, setTimeout((function() {
                                    var t = e;
                                    console[t(449)](), window[t(912)] = window[t(912)] || {
                                        cmd: []
                                    }, unibots[t(1245)][t(1554)]((function() {
                                        unibotsPlayer(sn[t(774)])
                                    })), runCMD()
                                }), 2e3)) : sn[e(1074)]()
                            })), h(b(sn), pn(600), (function() {
                                var e = pn;
                                return sn[e(1305)][e(1047)]() == sn[e(1305)][e(954)]()
                            })), h(b(sn), pn(976), (function(e) {
                                var t = pn;
                                if (e) {
                                    var n = function(e) {
                                        f(n, e);
                                        var t = v(n);

                                        function n(e, r) {
                                            var i, o = a;
                                            if (o(1398) == o(1398)) return _(this, n), (i = t[o(1567)](this, e, r)).controlText(o(796)), i[o(1172)](o(747)), i;
                                            for (;;) switch (_0x29faf8.prev = _0xb70f90[o(1639)]) {
                                                case 0:
                                                    _0x38e40e.removeEventListener(_0x59025d, _0x54851c);
                                                case 1:
                                                case "end":
                                                    return _0x41188b.stop()
                                            }
                                        }
                                        return n
                                    }(videojs[t(1443)](t(906)));
                                    videojs[t(1532)](t(551), n), sn.ubPlayer[t(1287)](t(551));
                                    var r = document[t(969)](t(747))[0],
                                        i = window.mobileCheck ? "touchend" : t(1467),
                                        o = "thanhnien" == sn[t(774)] ? sn[t(673)] : "" == sn[t(632)][t(1197)] ? "https://unibots.in" : sn[t(632)][t(1197)];
                                    r[t(1128)](i, (function() {
                                        var e = t;
                                        return window.open(o, e(1660))
                                    }))
                                }
                            })), h(b(sn), pn(1372), (function() {
                                var e = pn;
                                if ("XaZxV" === e(737)) {
                                    if (sn.clientname === e(649) && sn.playerFirstPlay && sn[e(1305)])
                                        if (e(925) !== e(1384)) {
                                            var t = "" == sn[e(632)][e(1197)] ? null : sn[e(632)].PL_BUTTON_LINK;
                                            if (null != t) {
                                                var n = sn.mobileCheck ? e(995) : e(1467);
                                                sn[e(1305)].on(n, (function(n) {
                                                    var r = e;
                                                    if ("AdVcO" === r(1530))
                                                        for (;;) switch (_0x467c8f[r(799)] = _0x182e85[r(1639)]) {
                                                            case 0:
                                                                _0x3a4534.UBP_DEBUG && _0x33ab37.log(r(1262), _0xf284a5[r(596)]), _0x47d175[r(596)] || (_0x221d4e.UBP_DEBUG && _0x8bade5[r(816)]("first time load only", _0x46dcda), _0x5d11c8[r(596)] = !0);
                                                            case 2:
                                                            case "end":
                                                                return _0x851ccc[r(821)]()
                                                        } else n.target[r(485)] === r(536) && window[r(1086)](t, r(1660))
                                                }))
                                            }
                                        } else _0x3b994b[e(658)][e(873)](e(1123) + _0x5ad46b), _0x199683.classList[e(627)](e(1119))
                                } else _0x152a70[e(1055)](_0x4bb3f5).forEach((function(t) {
                                    t[e(1683)](_0x5816b6) && _0x4cb580(_0x3bd453[t])
                                }))
                            })), h(b(sn), pn(1068), (function(e) {
                                var t = pn;
                                if (!(e == t(1363) ? sn[t(1137)] : e == t(1601) && sn.specialVideoEnable) || sn[t(1472)][t(1683)](sn.clientData[t(1221)])) return !1;
                                var n, r, a, i, o, d, s, c, l, u, _, f, x, v, p, b, m = null !== (n = null === (r = sn.specialObj) || void 0 === r ? void 0 : r[t(562)]) && void 0 !== n ? n : "",
                                    h = null !== (a = null === (i = sn[t(1668)]) || void 0 === i ? void 0 : i.VIDEO_URL) && void 0 !== a ? a : "",
                                    g = null !== (o = null === (d = sn[t(1668)]) || void 0 === d || null === (s = d.GEO_COUNTRY) || void 0 === s ? void 0 : s[t(1436)]) && void 0 !== o && o,
                                    y = null !== (c = null === (l = sn[t(1668)]) || void 0 === l || null === (u = l[t(1563)]) || void 0 === u ? void 0 : u.COUNTRY) && void 0 !== c && c,
                                    w = null !== (_ = null === (f = sn[t(1668)]) || void 0 === f || null === (x = f[t(898)]) || void 0 === x ? void 0 : x[t(1436)]) && void 0 !== _ && _,
                                    A = null !== (v = null === (p = sn.specialObj) || void 0 === p || null === (b = p[t(898)]) || void 0 === b ? void 0 : b[t(482)]) && void 0 !== v && v;
                                if (g && y && w && A) {
                                    var E = "inc" == g ? y[t(1683)](window[t(1016)][t(911)]) : g == t(1655) ? !y[t(1683)](window[t(1016)][t(911)]) : g == t(1039),
                                        C = w == t(1131) ? A[t(1683)](sn[t(632)][t(1147)]) : w == t(1655) ? !A[t(1683)](sn[t(632)][t(1147)]) : w == t(1039);
                                    if (e == t(1363)) return !(!E || !C || "" === m) && m;
                                    if (e == t(1601)) return !(!E || !C || "" === h) && h
                                }
                            })), h(b(sn), pn(1292), (function() {
                                var e = pn;
                                if ("CEsXa" === e(917)) return _0x423715[e(1207)]();
                                var t, n, r, a, i, o, d = e(909) in sn.clientData && 1 == sn[e(632)][e(909)] || e(1316) in sn.clientData && 1 == sn.clientData.DEFAULT_LOGO_ENABLE,
                                    s = null !== (t = null === (n = sn[e(632)]) || void 0 === n ? void 0 : n[e(562)]) && void 0 !== t ? t : "",
                                    c = null !== (r = null === (a = sn[e(632)]) || void 0 === a ? void 0 : a.IMG_ALT) && void 0 !== r ? r : "",
                                    l = null !== (i = null === (o = sn[e(632)]) || void 0 === o ? void 0 : o[e(463)]) && void 0 !== i ? i : "";
                                if (e(1316) in sn.clientData && sn[e(632)][e(1316)]) {
                                    if ("feVEL" === e(1193)) return !(!_0x45d998 || !_0x24f3f5 || "" === _0x66f67f) && _0x2c85b3;
                                    var u, _, f, x, v = sn[e(1068)](e(1363));
                                    s = 0 != v ? v : null !== (u = null === (_ = sn[e(632)]) || void 0 === _ ? void 0 : _[e(1664)]) && void 0 !== u ? u : "", l = null !== (f = null === (x = sn.clientData) || void 0 === x ? void 0 : x[e(1302)]) && void 0 !== f ? f : ""
                                }
                                if (d && "" != s) {
                                    var p = document[e(614)]("a");
                                    p.href = l, p[e(1528)] = e(1660), p.id = e(1689), p[e(658)][e(627)] = e(1689);
                                    var b = document[e(614)]("img");
                                    b[e(979)] = s, b[e(1417)] = c || e(1342), b.style = "vertical-align:middle;height:11px;", b.style[e(1127)] = e(1659), p.append(b), sn[e(1305)][e(1673)][e(1225)](p)
                                }
                            })), h(b(sn), pn(1615), (function() {
                                var e = pn;
                                if ("Nczcj" === e(1345)) _0x38f575(_0x303a3e), _0x2c64db = null, _0x18b280 = !1, _0x26fcbb[e(580)] && _0x43de1d.log("UB: CompAd out of view with value of " [e(825)](_0x3d3118, e(1206)));
                                else {
                                    var t, n = document[e(1126)](sn[e(413)]),
                                        r = document[e(1126)](e(437)),
                                        a = window.mobileCheck ? sn.clientData[e(1653)] : sn[e(632)][e(1309)];
                                    if (!sn[e(846)] && r && !sn.isParmanentSticky) {
                                        if (sn.isInViewport(n) || sn[e(779)] || t) e(1562) != e(1562) ? (this.ubPlayer && this.destroyAdManger(), _0xa90b86[e(361)]()[e(793)] != _0x4955c1 && _0x22b2cf[e(361)]()[e(793)][e(1628)](), this[e(1305)] = null, _0x505aa4.apply(_0x5a7cc5[e(1159)], arguments)) : (r[e(658)][e(730)](e(1123) + a) && (e(1155) !== e(732) ? (r[e(658)][e(873)](e(1123) + a), r[e(658)][e(627)](e(1119))) : _0x5f4f56[e(1620)]()), sn[e(1305)][e(1422)][e(581)][e(1188)][e(1027)] = !0, sn[e(1456)](a, 0), sn[e(736)](!1), sn[e(1602)](!1));
                                        else if (sn[e(1298)] || sn[e(653)][e(1518)].floatBeforeView && sn[e(1305)][e(1617)]())
                                            if ("ltDFA" === e(1120)) !r[e(658)][e(730)](e(1123) + a) && (e(1050) == e(1050) ? (r[e(658)][e(627)](e(1123) + a), r.classList[e(873)]("unsticky")) : _0x6cda48(_0x220605)), sn.onStickyKeepParentDivHeight(!0), sn[e(1602)](!0);
                                            else {
                                                var i = _0xc2807e[e(761)](".ima-controls-div");
                                                _0x3b5440[e(787)]() && i && null != _0x1b2e0d[e(361)]()[e(793)] && !i[e(658)][e(730)](e(1646)) && i[e(658)][e(627)]("ima-controls-div-showing")
                                            }
                                        else r.classList[e(730)](e(1123) + a) && (r[e(658)][e(873)](e(1123) + a), r[e(658)].add("unsticky")), sn[e(1456)](a, 0), sn[e(736)](!1), sn.hideClosebuttonInread(!1);
                                        sn.adResizer()
                                    }
                                }
                            })), h(b(sn), "stickyConfig", (function() {
                                var e = pn;
                                if (e(1303) === e(807)) return _0xd5bfcb[e(498)](this, arguments);
                                var t = document[e(1126)]("div-ub-" [e(825)](sn[e(632)][e(1221)])),
                                    n = document[e(1126)](sn.listenerElement),
                                    r = document.getElementById(e(437)),
                                    a = window[e(1014)] ? sn[e(632)][e(1653)] : sn.clientData[e(1309)];
                                if (!sn[e(846)] && r && !sn[e(1118)])
                                    if ((sn.enablePlayerInViewPercentage ? sn[e(893)](t) : sn[e(446)](n)) || sn[e(779)]) e(1003) != e(1003) ? (_0x22d2a9 = this[e(1644)].nonServedCount > this[e(1644)][e(1553)].AFTER ? this.accessGlobals[e(1553)][e(733)] : this[e(1644)][e(1553)][e(674)], _0x4d8f60[e(566)] && _0x1513cc[e(816)](e(1359) + _0x54c264), this[e(1644)][e(1215)][_0x364be6][e(1237)] = _0x1cba0f) : (r.classList[e(730)](e(1123) + a) && (r[e(658)][e(873)](e(1123) + a), r.classList[e(627)](e(1119))), sn[e(1456)](a, 0), sn[e(736)](!1), sn[e(1602)](!1));
                                    else if (sn[e(1297)]) {
                                    if (!r[e(658)][e(730)](e(1123) + a)) {
                                        if (e(863) != e(863)) return _0x18fa12[e(498)](this, arguments);
                                        r[e(658)][e(627)](e(1123) + a), r[e(658)][e(873)](e(1119))
                                    }
                                    sn[e(736)](!0), sn[e(1602)](!0)
                                } else r[e(658)].contains(e(1123) + a) && (r[e(658)][e(873)](e(1123) + a), r[e(658)][e(627)]("unsticky")), sn.onStickyKeepParentDivHeight(!0), sn.hideClosebuttonInread(!0)
                            })), h(b(sn), pn(1456), (function(e, t) {
                                var n = pn;
                                if (window[n(974)].querySelector("#" + sn.listenerElement)) {
                                    var r = document[n(761)](n(1598));
                                    !sn[n(846)] && r && (1 == t ? r[n(658)][n(730)](n(1313) + e) || r[n(658)].add(n(1313) + e) : r.classList[n(730)]("ubClose-" + e) && r[n(658)][n(873)]("ubClose-" + e))
                                }
                            })), h(b(sn), "hideClosebuttonInread", (function(e) {
                                var t = pn;
                                if (t(848) !== t(1277)) {
                                    if (sn[t(682)]) {
                                        var n = document.querySelector(t(1598));
                                        !0 === e ? "eindw" !== t(1677) ? _0x3d477e = -2 == _0x41d1cb[t(890)] ? _0x569daf + t(563) : _0x53d83f + t(569) : n[t(1253)](t(908)) && n[t(1036)]("style") : t(638) == t(638) ? n[t(1253)](t(908)) || n[t(1361)](t(908), t(907)) : _0x142a0b[t(406)]("No GAM Tags added or Goolge Ads Not Enabled from Dashboard ")
                                    }
                                } else 1 == _0x3a45f9 ? _0x488711.classList[t(730)]("ubClose-" + _0x570f0d) || _0x29e313[t(658)].add(t(1313) + _0x42111c) : _0x371b8d[t(658)][t(730)](t(1313) + _0x2da19c) && _0x51941f.classList[t(873)](t(1313) + _0x41206a)
                            })), h(b(sn), pn(1312), (function() {
                                var e = pn;
                                if ("LBUyA" === e(1603)) return !1;
                                var t = document[e(761)](e(688));
                                if (t) {
                                    var n = t.offsetWidth,
                                        r = t[e(872)];
                                    sn[e(1305)][e(1422)][e(1051)]() && (e(1548) == e(1548) ? sn[e(1305)].ima[e(1051)]()[e(1112)](n, r, google[e(1422)][e(760)].NORMAL) : (_0x21a2d3[e(1228)] = !0, _0x5cc975[e(1297)] = !0, _0x390461[e(1565)](e(1597), _0x2ac81d)))
                                }
                            })), h(b(sn), pn(784), (function() {
                                var e = pn;
                                if (e(604) != e(604)) _0x9b3e54[e(1305)].ads[e(1573)](), _0x57668a[e(1305)][e(704)][e(1084)]();
                                else if (window[e(1014)]) {
                                    if (!sn.inReadPlayerLogo_mob || !sn[e(445)]) {
                                        var t = document.querySelector("#ubp_logo");
                                        sn.inReadPlayerLogo_mob || sn.floatingPlayerLogo_mob || !t ? !sn[e(564)] && t ? (document[e(761)](e(1171)) && (t.style[e(1002)] = e(565)), (document[e(761)](e(1370)) || document.querySelector(e(1010))) && (t[e(908)][e(1002)] = e(1187))) : !sn[e(445)] && t && ((document[e(761)](".ubsticky_right") || document[e(761)](".ubsticky_left")) && (t.style[e(1002)] = "none"), document[e(761)](e(1171)) && (t.style[e(1002)] = e(1187))) : t.style[e(1002)] = e(565)
                                    }
                                } else if ("BtHJS" !== e(1189)) {
                                    if (!sn[e(1540)] || !sn[e(540)]) {
                                        var n = document[e(761)](e(515));
                                        sn.inReadPlayerLogo || sn[e(540)] || !n ? !sn[e(1540)] && n ? ((document[e(761)](e(1370)) || document[e(761)](e(1010))) && (n[e(908)][e(1002)] = e(1187)), document[e(761)](e(1171)) && (n[e(908)][e(1002)] = e(565))) : !sn[e(540)] && n && (e(773) === e(1178) ? _0xc41438[_0x2d6662](_0x2eb4b1)[e(896)] : (document[e(761)](e(1171)) && (n[e(908)][e(1002)] = e(1187)), (document[e(761)](e(1370)) || document[e(761)](".ubsticky_left")) && (n[e(908)][e(1002)] = e(565)))) : n[e(908)][e(1002)] = e(565)
                                    }
                                } else _0xf7bd65--, _0x3f0b68[e(1606)] = e(1665) + _0x49c8c9 + "s", _0xdebbeb[e(566)] && _0x3d7e70.log(e(611), _0x4ed105), _0x1b8752 <= 0 && (_0x1ecfc0(_0x24da32), _0x21e31[e(472)][e(1639)](), _0x23776c.style.visibility = "hidden")
                            })), h(b(sn), pn(1142), (function() {
                                var e = pn;
                                e(1318) == e(1318) ? (sn[e(884)]() && sn[e(653)].getConfig[e(921)] && sn[e(546)] ? "pCzaE" === e(1183) ? sn[e(1615)]() : _0x5aba17[e(1215)][_0x9f2819[e(766)]][e(1237)] = _0x266bc7(_0x178935[e(1388)]) : !sn[e(846)] && sn[e(1305)] && sn[e(1305)].ads[e(1469)]() && sn[e(1305)][e(704)][e(467)]() && (e(1211) == e(1211) ? (sn[e(1586)] && (sn[e(1298)] = !0), sn.isFullPlayerViewedOnce && sn[e(884)]() && (sn[e(1599)] && (sn[e(1297)] = !0), !sn[e(1185)] && ("nMpdx" === e(617) ? (_0x29caa2[e(1498)](e(1231)), _0x134242[e(816)](_0x2281bf[e(927)] + e(1108) + _0x2551fc + e(550)), _0xfe8b96.groupEnd()) : sn[e(530)]()))) : (_0x3ed30f[e(1077)] || (_0x49b74[e(1077)] = _0x531cb3.adsArray[_0x309ac6][e(897)]), _0x2cfd70[e(1305)][e(704)][e(1469)]() && _0xf27bd9[e(632)][e(966)] == e(462) && _0x5d7dcb.ubpSocket[e(1110)](e(830), {
                                    website: _0x1a014a[e(387)][e(1607)][e(1657)],
                                    bidder: e(383),
                                    cpm: _0x5f0dd4.googleCpm,
                                    adTagName: "google~" + _0x464bf7[e(1215)][_0x49be74][e(1486)]
                                }))), sn[e(784)]()) : _0x3985e0[e(589)] || (_0x1ad4e2 = _0x2bd061[e(715)][e(453)])
                            })), h(b(sn), pn(736), (function() {
                                var e = pn;
                                if ("ShGDC" !== e(1382)) {
                                    var t = window.document[e(1126)](e(987) + sn[e(774)]);
                                    if (!sn[e(846)] && sn[e(1305)] && t) {
                                        var n = sn[e(1305)][e(842)]() + 30;
                                        t[e(1361)]("style", e(652) + n + "px")
                                    }
                                } else {
                                    var r = _0x459d95[e(1271)](_0x2c61f5[e(1413)]() * (_0x18eb84 + 1)),
                                        a = [_0x1b1d3b[r], _0x4ba9f7[_0x5b5fd7]];
                                    _0x113c0a[_0x36e95a] = a[0], _0x596f94[r] = a[1]
                                }
                            })), h(b(sn), "removeStickyPlayer", (function() {
                                var e = pn;
                                if (e(1594) === e(578)) _0x43d4e8[e(566)] && _0x2d5628[e(406)](e(662)), _0x7b9157 = !1, _0x2f340b = _0x2c716e, _0x3724ed(), _0x451008[e(908)].display = e(1187), _0x1b4a60[e(908)][e(1002)] = e(1187), _0x3a41b4[e(908)][e(1550)] = e(478);
                                else {
                                    var t = arguments[e(1446)] > 0 && void 0 !== arguments[0] && arguments[0];
                                    if (!sn[e(1118)] && (sn[e(1297)] || t)) {
                                        var n = e(437),
                                            r = window.parent[e(974)][e(1126)](n),
                                            a = sn.mobileCheck ? sn[e(632)].FLOATING_POSITION_MB : sn[e(632)][e(1309)];
                                        sn[e(1297)] = !1, r && r[e(658)][e(730)]("ubsticky_" + a) && (r[e(658)].remove(e(1123) + a), r.classList[e(627)](e(1119)))
                                    }
                                    if (sn[e(1118)]) {
                                        sn.isParmanentSticky = !1;
                                        var i = window[e(974)][e(1126)](e(437)),
                                            o = sn[e(1014)] ? sn[e(632)].IS_PERMANENT_STICKY_POSITION_MB : sn.clientData[e(496)];
                                        i && i[e(658)][e(730)](e(1123) + o) && ("GpHaQ" === e(606) ? (i[e(658)][e(873)](e(1123) + o), !i[e(658)][e(730)](e(1119)) && (e(914) === e(1539) ? _0x1668d8[e(1425)].emit("impression", {
                                            website: _0x420fee[e(387)][e(1607)].hostname,
                                            bidder: e(383),
                                            cpm: _0x1b0426[e(1077)],
                                            adTagName: e(983) + _0x5cbc3b[e(1215)][_0x2cfb5f][e(1486)]
                                        }) : i[e(658)][e(627)]("unsticky"))) : _0x568fb0 = function(t) {
                                            var n = e;
                                            return t && typeof _0x1bc859 === n(1269) && t.constructor === _0x577440 && t !== _0x45c865[n(1192)] ? n(1198) : typeof t
                                        })
                                    }
                                }
                            })), h(b(sn), pn(678), (function() {
                                var e = pn,
                                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    n = e(t ? 686 : 1574),
                                    r = e(437),
                                    a = window[e(387)][e(974)][e(1126)](r),
                                    i = sn.mobileCheck ? sn[e(632)].FLOATING_POSITION_MB : sn[e(632)][e(1309)];
                                return !!a[e(658)][e(730)](n + "_" + i)
                            })), h(b(sn), pn(1041), (function(e) {
                                var t = pn;
                                if (t(1526) == t(1526)) return Math[t(1271)](Math[t(1413)]() * e);
                                _0x1ef537[t(566)] && _0x295d98[t(406)](t(947), _0x5a5b00), _0x588309()
                            })), h(b(sn), pn(922), (function() {
                                var e = pn,
                                    t = window.parent.document.querySelector("#ubVideo");
                                if (t[e(658)][e(730)](e(567))) {
                                    if (e(998) != e(998)) return _0x526b76.apply(this, arguments);
                                    t[e(658)].remove(e(567)), t.classList[e(627)](e(935))
                                }
                            })), h(b(sn), pn(803), (function() {
                                var e = pn;
                                e(1296) != e(1296) ? (_0x180bed[e(1071)]()[e(1367)]([_0x4f1914]), _0xd9cb82[e(580)] && _0x2ab3b9[e(816)]("SCROLL DOWN! Next Ad will be refreshed after 30 seconds.")) : (document[e(761)](e(688))[e(658)][e(873)]("ub-loaded"), document[e(761)](e(688))[e(658)].add(e(567)))
                            })), h(b(sn), pn(1618), (function(e) {
                                var t = pn;
                                if (t(637) === t(829)) {
                                    var n = "application/x-mpegURL";
                                    return _0x299d47 && (n = _0x41384e[t(1683)]("m3u8") ? t(1376) : t(395)), n
                                }
                                var r = new URL(window[t(387)][t(1607)][t(432)]),
                                    a = null;
                                r && (a = r.searchParams[t(1433)](t(423))), (window[t(566)] || a) && console.log(t(1578)[t(825)](e, " "), t(1203))
                            })), sn[pn(774)] = e[pn(1221)], sn[pn(1150)] = 1 == e[pn(953)], sn.floatingonMobile = 1 == e.IS_FLOATING_ON_MOBILE, sn.isFlaotingBlockONSomeUrls = pn(711) in e && 1 == e[pn(711)], sn[pn(398)] = 1 == e[pn(521)], sn[pn(630)] = 1 == e[pn(1075)], sn[pn(1293)] = pn(399) in e && 1 == e[pn(399)], sn.floatingAvoidUrl = e[pn(964)], sn[pn(1381)] = 1 == e[pn(528)], sn[pn(1161)] = pn(634) in e && 1 == e[pn(634)], sn[pn(1113)] = "LOAD_VD_TIMEOUT" in e && null != e.LOAD_VD_TIMEOUT ? e[pn(634)] : 9e3, sn[pn(1118)] = "IS_PERMANENT_STICKY" in sn.clientData && 1 == sn[pn(632)][pn(1641)], sn[pn(508)] = !("CLOSE_BUTTON_DISPOSE_PLAYER" in sn[pn(632)]) || 0 != sn[pn(632)][pn(1065)], sn.requestSingleAdOnly = "REQUEST_SINGLE_AD" in sn[pn(632)] && 1 == sn[pn(632)][pn(845)], sn[pn(360)] = pn(1395) in sn[pn(632)] && 1 == sn[pn(632)][pn(1395)], sn.reCreatePlayer = pn(1357) in sn.clientData && 1 == sn[pn(632)].RECREATE_PLAYER, sn[pn(1454)] = "AD_DELAY_ENABLED" in sn[pn(632)] && 1 == sn[pn(632)].AD_DELAY_ENABLED, sn[pn(1388)] = sn[pn(499)](pn(1280), "CUSTOM_AD_DELAY"), sn.adPlayDurationVersion = null === (Ae = sn.clientData) || void 0 === Ae ? void 0 : Ae[pn(549)], sn.isHLS_Enabled = null !== (Ce = (Ee = sn[pn(632)])[pn(1645)]) && void 0 !== Ce ? Ce : Ee[pn(1645)] = !1, sn.floatPlayerOnceViewed = null !== (Se = (Pe = sn.clientData)[pn(1232)]) && void 0 !== Se ? Se : Pe[pn(1232)] = !1, sn[pn(1667)] = sn[pn(978)] ? pn(1376) : pn(395), sn.defalutCDNUrl = pn(1427), sn[pn(1406)] = null !== (Re = (Ie = sn[pn(632)])[pn(439)]) && void 0 !== Re ? Re : Ie.CUSTOM_CDN_LINK = sn[pn(537)], sn[pn(1032)] = "https://stream.unibotscdn.com/5f049e1e-1b0c-4561-a9eb-e4847659fe14/playlist.m3u8", sn.autoPlayAds = sn.clientname === pn(855), sn.playlistFeature = !sn[pn(1401)], sn[pn(648)] = null !== (Te = (ke = sn[pn(632)])[pn(1325)]) && void 0 !== Te ? Te : ke[pn(1325)] = 1, sn[pn(1286)] = null !== (Oe = (Le = sn[pn(632)])[pn(1220)]) && void 0 !== Oe ? Oe : Le[pn(1220)] = !1, sn[pn(1035)] = null !== (Ne = (De = sn[pn(632)])[pn(986)]) && void 0 !== Ne ? Ne : De[pn(986)] = .7, sn[pn(682)] = sn[pn(926)](null === (Ue = sn[pn(632)]) || void 0 === Ue ? void 0 : Ue[pn(397)]), sn[pn(800)] = null !== (Me = (Be = sn[pn(632)]).AD_POD_REQUEST) && void 0 !== Me ? Me : Be[pn(742)] = !1, sn[pn(1485)] = null !== (je = (Fe = sn[pn(632)])[pn(1031)]) && void 0 !== je ? je : Fe[pn(1031)] = 5e3, sn[pn(814)] = sn.flagParser2("bool", pn(991)), sn.InitPlayerNearViewport = sn.flagParser2(pn(1692), "RUN_PLAY_ONLY_NEARBY_VIEWPORT"), sn[pn(720)] = "FLOAT_ONLY_ONCE" in sn[pn(632)] && 1 == sn[pn(632)].FLOAT_ONLY_ONCE, sn[pn(1508)] = null !== (Ve = null === (Ge = sn[pn(632)]) || void 0 === Ge ? void 0 : Ge[pn(735)]) && void 0 !== Ve ? Ve : [], sn[pn(555)](sn[pn(1508)])[pn(558)](sn[pn(416)]())[pn(1254)]((function(e) {
                                var t = pn;
                                if (t(1399) !== t(1327)) return console[t(816)](e);
                                _0x4fc4e5[t(566)] && _0x36d72b[t(816)](t(608)), _0x1b6f40[t(766)] = -1, _0x292edc[t(479)] += 1, _0x1a208d[t(1215)][t(1315)]((function(e) {
                                    var n = t;
                                    _0x1dc976(e[n(1237)]) < 1 && (e[n(1237)] = .5)
                                }))
                            })), sn.enableMaxAdDuration = !1, sn[pn(1553)] = sn[pn(499)](pn(1692), pn(1542)), sn[pn(769)] = null !== (qe = null === (Ye = sn[pn(632)]) || void 0 === Ye || null === (Qe = Ye.AD_SOURCES) || void 0 === Qe || null === (He = Qe[pn(538)]) || void 0 === He ? void 0 : He[pn(1437)]) && void 0 !== qe && qe, sn.enablePlayerInViewPercentage = null !== (We = null === (Ke = sn.clientData) || void 0 === Ke ? void 0 : Ke[pn(1648)]) && void 0 !== We && We, sn[pn(621)] = null !== (ze = null === (Je = sn[pn(632)]) || void 0 === Je ? void 0 : Je.PLAYER_IN_VIEW_PERCENT) && void 0 !== ze ? ze : 30, sn[pn(1540)] = null === (Ze = null === (Xe = sn[pn(632)]) || void 0 === Xe || null === ($e = Xe[pn(367)]) || void 0 === $e ? void 0 : $e.PC_INREAD_LOGO) || void 0 === Ze || Ze, sn[pn(540)] = null === (et = null === (tt = sn[pn(632)]) || void 0 === tt || null === (nt = tt[pn(367)]) || void 0 === nt ? void 0 : nt.PC_FLOATING_LOGO) || void 0 === et || et, sn[pn(564)] = null === (rt = null === (at = sn[pn(632)]) || void 0 === at || null === (it = at[pn(367)]) || void 0 === it ? void 0 : it[pn(1233)]) || void 0 === rt || rt, sn[pn(445)] = null === (ot = null === (dt = sn[pn(632)]) || void 0 === dt || null === (st = dt[pn(367)]) || void 0 === st ? void 0 : st[pn(710)]) || void 0 === ot || ot, sn.playOnClick = sn[pn(653)][pn(1518)].isEnable, sn[pn(890)] = sn[pn(653)][pn(1518)][pn(429)], sn[pn(1410)] = sn[pn(653)][pn(1518)].keepFloating, sn[pn(1661)] = sn[pn(499)]("num", pn(882)), sn.stickyTop = sn[pn(499)](pn(1692), pn(1083)), sn.stickyBottom = sn.flagParser2("bool", "STICKY_BOTTOM"), sn.floatOncePerUser = sn[pn(499)]("bool", pn(1630)), sn[pn(939)] = sn.flagParser2(pn(1692), "FLOAT_ABOVE_VIEW"), sn.enableAdTracking = sn[pn(499)](pn(1692), pn(996)), sn[pn(1586)] = null !== (ct = null === (lt = sn.clientData) || void 0 === lt ? void 0 : lt.RUN_AD_WITHOUT_VIEW) && void 0 !== ct && ct, sn[pn(1510)] = null !== (ut = null === (_t = sn[pn(632)]) || void 0 === _t ? void 0 : _t[pn(483)]) && void 0 !== ut && ut, sn.mutePlayer = null !== (ft = null === (xt = sn[pn(632)]) || void 0 === xt ? void 0 : xt[pn(741)]) && void 0 !== ft && ft, sn.send5AdsPolicyViolation = null !== (vt = null === (pt = sn[pn(632)]) || void 0 === pt ? void 0 : pt.SEND_5_ADS_POLICY_VIOLATION) && void 0 !== vt && vt, sn.plcmt = null !== (bt = null === (mt = sn[pn(632)]) || void 0 === mt ? void 0 : mt.PLCMT) && void 0 !== bt ? bt : -2, sn[pn(1543)] = null !== (ht = null === (gt = sn[pn(632)]) || void 0 === gt ? void 0 : gt[pn(501)]) && void 0 !== ht && ht, sn[pn(788)] = null !== (yt = null === (wt = sn[pn(632)]) || void 0 === wt ? void 0 : wt[pn(469)]) && void 0 !== yt && yt, sn[pn(1685)] = null !== (At = null === (Et = sn[pn(632)]) || void 0 === Et ? void 0 : Et[pn(963)]) && void 0 !== At && At, sn[pn(1595)] = null !== (Ct = null === (Pt = sn[pn(632)]) || void 0 === Pt ? void 0 : Pt.DESTROY_AD_AFTER_7_SEC) && void 0 !== Ct && Ct, sn[pn(1647)] = null !== (St = null === (It = sn[pn(632)]) || void 0 === It ? void 0 : It[pn(1346)]) && void 0 !== St && St, sn.sendDataToDB = null !== (Rt = null === (kt = sn.clientData) || void 0 === kt ? void 0 : kt[pn(1079)]) && void 0 !== Rt && Rt, sn[pn(1190)] = null !== (Tt = null === (Lt = sn[pn(632)]) || void 0 === Lt ? void 0 : Lt[pn(786)]) && void 0 !== Tt && Tt, sn.specialLogoEnable = null !== (Ot = null === (Dt = sn[pn(632)]) || void 0 === Dt || null === (Nt = Dt[pn(904)]) || void 0 === Nt ? void 0 : Nt[pn(436)]) && void 0 !== Ot && Ot, sn[pn(726)] = null !== (Ut = null === (Bt = sn[pn(632)]) || void 0 === Bt || null === (Mt = Bt.SPECIAL_OBJ) || void 0 === Mt ? void 0 : Mt.SPECIAL_VIDEO) && void 0 !== Ut && Ut, sn[pn(1668)] = null !== (Ft = null === (jt = sn[pn(632)]) || void 0 === jt ? void 0 : jt.SPECIAL_OBJ) && void 0 !== Ft && Ft, sn[pn(1472)] = null !== (Vt = null === (Gt = sn.clientData) || void 0 === Gt || null === (qt = Gt[pn(904)]) || void 0 === qt ? void 0 : qt[pn(646)]) && void 0 !== Vt ? Vt : [], sn[pn(748)] = sn[pn(1616)][pn(1518)][pn(543)], sn[pn(1419)] = sn[pn(1616)][pn(1518)][pn(1013)], sn.disableBasicUpr = null !== (Yt = null === (Qt = sn[pn(632)]) || void 0 === Qt || null === (Ht = Qt[pn(392)]) || void 0 === Ht || null === (Wt = Ht[pn(836)]) || void 0 === Wt ? void 0 : Wt[pn(533)]) && void 0 !== Yt && Yt, sn.showPlayerWithAdOnly = null !== (Kt = null === (zt = sn[pn(632)]) || void 0 === zt ? void 0 : zt[pn(1285)]) && void 0 !== Kt && Kt, sn[pn(589)] = null !== (Jt = null === (Zt = sn[pn(632)]) || void 0 === Zt ? void 0 : Zt[pn(1248)]) && void 0 !== Jt && Jt, sn[pn(1323)] = null !== (Xt = null === ($t = sn[pn(632)]) || void 0 === $t || null === (en = $t[pn(701)]) || void 0 === en ? void 0 : en[pn(790)]) && void 0 !== Xt && Xt, sn[pn(1049)] = sn.flagParser2(pn(1692), pn(1666)), sn.enableContentCategorywise = null !== (tn = null === (nn = sn[pn(632)]) || void 0 === nn || null === (rn = nn.RUN_CONTENT_ON_CATEGORIES) || void 0 === rn ? void 0 : rn[pn(790)]) && void 0 !== tn && tn, null !== (an = null === (on = sn.clientData) || void 0 === on || null === (dn = on.COMPANION_AD) || void 0 === dn ? void 0 : dn[pn(790)]) && void 0 !== an && an && sn[pn(1650)](), sn.enableXml && (sn[pn(815)] = !0, sn.autoPlayAds = !0), sn[pn(1685)] && (sn[pn(788)] = !0, sn[pn(504)] = !0), sn[pn(1014)] && (sn[pn(727)] || sn[pn(1672)]) && screen.width >= 340 && (sn.hideCloseBtn = !0), sn
                        }
                        return n
                    }(g));
                t[r(1690)] = y
            },
            221: (e, t) => {
                function n() {
                    var e = ["TPcew", '");<\/script>', "querySelectorAll", "Helper", "pzoZV", "bdMWw", "innerHTML", "2FCuwXL", "userAgent", "head", "21xShJkk", "div", "gRvWR", "eXVft", "isMobile", "setAttribute", "clarity", "push", "2473823qslMyE", "19122qiJcLd", "addClarityToClient", "772128AYNWPM", "name", "document", "clarity code can not be passed with empty value", "https://www.clarity.ms/tag/", "src", "3157344bETzKQ", "getElementById", "UDXGq", "IBcLj", "length", '"><\/script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "', "test", "soOMv", "createElement", "loadGA", "rYPny", "parent", "1579032MdNAsf", "value", "DkCNX", "substr", "defineProperty", "DmKxA", "5QvZeRL", '<script async src="https://www.googletagmanager.com/gtag/js?id=', "getElementsByTagName", "gabywa_ubp", "291186bHbYeg", "parentNode", "warn", "script", "loadAd", "appendChild", "50dfQOGD", "1428904UCFrbc", "opera", "yAlNU", "vendor"];
                    return (n = function() {
                        return e
                    })()
                }

                function r(e, t) {
                    var a = n();
                    return (r = function(e, t) {
                        return a[e -= 387]
                    })(e, t)
                }
                var a = r;

                function i(e, t, n) {
                    var a = r;
                    return t in e ? Object[a(437)](e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : a(407) !== a(392) ? e[t] = n : _0x5650f4[_0x23e36b] = _0x456242, e
                }! function(e, t) {
                    for (var n = r, a = e();;) try {
                        if (328028 == parseInt(n(413)) / 1 * (parseInt(n(401)) / 2) + parseInt(n(415)) / 3 + parseInt(n(390)) / 4 * (-parseInt(n(439)) / 5) + -parseInt(n(443)) / 6 * (parseInt(n(404)) / 7) + -parseInt(n(421)) / 8 + -parseInt(n(433)) / 9 + parseInt(n(389)) / 10 * (parseInt(n(412)) / 11)) break;
                        a.push(a.shift())
                    } catch (e) {
                        a.push(a.shift())
                    }
                }(n), t[a(397)] = function e() {
                    var t = r,
                        n = this;
                    (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, e), i(this, t(408), (function() {
                        var e, n, r = t;
                        if ("DkCNX" === r(435)) {
                            var a = !1;
                            return e = navigator[r(402)] || navigator[r(393)] || window[r(391)], (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i [(n = r)(427)](e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i [n(427)](e[n(436)](0, 4))) && (a = !0), a
                        }
                        _0x1561d8[r(445)](r(418))
                    })), i(this, t(430), (function(e) {
                        var r = t;
                        if (r(424) == r(424)) {
                            if (null === window[r(432)].document[r(422)](r(442))) {
                                myPlayerGabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id=' + e + r(426) + e + '");<\/script>';
                                var a = document[r(429)](r(405));
                                a.id = "gabywa_ubp", window[r(432)].document[r(441)](r(403))[0][r(388)](a), window.parent.document[r(422)](r(442))[r(400)] = myPlayerGabywa, n.loadAd(r(442))
                            }
                        } else _0x116cb9 = _0x547e12[_0x4f1014], _0x2c0c94[r(409)](_0x260391.name, _0x108037[r(434)])
                    })), i(this, t(387), (function(e) {
                        var n, a, i = t,
                            o = window[i(417)].getElementById(e);
                        if (null == o) {
                            if (i(399) != i(399)) {
                                var d = !1;
                                return n = _0x222ad2[i(402)] || _0x5b8041[i(393)] || _0x4765e4[i(391)], (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i [(a = i)(427)](n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i [a(427)](n[a(436)](0, 4))) && (d = !0), d
                            }
                            o = window[i(432)][i(417)][i(422)](e)
                        }
                        var s = Array(o[i(396)](i(446)));
                        s = s[0];
                        for (var c = 0; c < s.length; c++)
                            if ("DmKxA" !== i(438)) _0x67ad52 = _0x38724b.parent[i(417)][i(422)](_0x3db88e);
                            else {
                                oldScript = s[c];
                                var l = document[i(429)](i(446)),
                                    u = Array(oldScript.attributes);
                                u = u[0];
                                for (var _ = 0; _ < u[i(425)]; _++) i(431) == i(431) ? (attr = u[_], l[i(409)](attr[i(416)], attr[i(434)])) : function(e, t, n, a, o, d, s) {
                                    var c = i;
                                    e[n] = e[n] || function() {
                                        var t = r;
                                        (e[n].q = e[n].q || [])[t(411)](arguments)
                                    }, (d = t[c(429)](a)).async = 1, d[c(420)] = c(419) + o, t.head[c(388)](d)
                                }(_0x4fb395, _0x3b8907, i(410), i(446), _0xfd8c80);
                                var f = window[i(417)].createTextNode(oldScript[i(400)]);
                                null == f && (i(423) != i(423) ? (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i [i(427)](_0x24a1cf) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i [i(427)](_0x39221d.substr(0, 4))) && (_0x1285ff = !0) : f = window[i(432)][i(417)].createTextNode(oldScript[i(400)])), l[i(388)](f), oldScript[i(444)].replaceChild(l, oldScript)
                            }
                    })), i(this, t(414), (function(e) {
                        var n = t;
                        if ("" !== e) {
                            if (n(406) !== n(398)) ! function(e, t, r, a, i, o, d) {
                                var s = n;
                                if (s(428) != s(428)) {
                                    _0x47ae72 = s(440) + _0xd8f395 + s(426) + _0x5c37ac + '");<\/script>';
                                    var c = _0x1d27d9[s(429)](s(405));
                                    c.id = s(442), _0x1ee2b7[s(432)][s(417)][s(441)](s(403))[0].appendChild(c), _0x4a1b4d[s(432)][s(417)][s(422)](s(442))[s(400)] = _0x5e911d, _0x5436a0[s(387)]("gabywa_ubp")
                                } else e[r] = e[r] || function() {
                                    (e[r].q = e[r].q || []).push(arguments)
                                }, (o = t[s(429)]("script")).async = 1, o[s(420)] = "https://www.clarity.ms/tag/" + i, t[s(403)].appendChild(o)
                            }(window, document, n(410), 0, e);
                            else if (null === _0x182d07[n(432)].document[n(422)]("gabywa_ubp")) {
                                _0x2ee4ab = n(440) + _0x2c297e + n(426) + _0x989fbf + n(395);
                                var r = _0x5f2425.createElement("div");
                                r.id = n(442), _0x1fc6aa[n(432)][n(417)][n(441)](n(403))[0][n(388)](r), _0x1e8717[n(432)][n(417)][n(422)](n(442))[n(400)] = _0xdc779e, _0x298fb4[n(387)](n(442))
                            }
                        } else "MmWBG" !== n(394) ? console[n(445)](n(418)) : _0x2365ed.defineProperty(_0x1d5ae9, _0x26f204, {
                            value: _0x3d429b,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        })
                    }))
                }
            },
            717: (e, t, n) => {
                var r = R;

                function a(e) {
                    var t = R;
                    return (a = "function" == typeof Symbol && typeof Symbol[t(589)] === t(633) ? function(e) {
                        var n = t;
                        if ("AJwOe" !== n(590)) return typeof e;
                        if (_0x4f7a4e[n(684)](_0x3a6f6a) && _0x2019e0) {
                            var r = _0x3c8804[n(507)](n(603));
                            r.id = n(606) + _0x4829d0, r.style = n(665);
                            var a = _0x2609e8.parent[n(386)].getElementById(n(606) + _0x297bfb);
                            _0xdf604 && a && a[n(602)]();
                            var i = _0x15617e[n(507)]("script");
                            i[n(530)] = "text/javascript", i[n(464)] = n(595), _0x55fa74.parent[n(386)][n(424)](n(703))[0][n(581)](i), _0x147e9f[n(635)][n(386)][n(424)](n(400))[0][n(581)](r), i.onload = function() {
                                var e = n;
                                _0x57cbba[e(635)].unibots = _0x46ee3a.parent[e(445)] || {
                                    cmd: []
                                }, _0x10fb86.parent.unibots[e(688)][e(483)]((function() {
                                    var t = e;
                                    _0x21b469(_0x1d802f), _0x54f262[t(635)][t(406)](_0x25b924)
                                }))
                            }
                        }
                    } : function(e) {
                        var n = t;
                        return e && typeof Symbol === n(426) && e.constructor === Symbol && e !== Symbol.prototype ? n(633) : typeof e
                    })(e)
                }

                function i() {
                    var e = ["Something went wrong", "getVideos", "HHvBu", "remove", "div", "end", "uqoXo", "div-ub-", "warn", "NzYbC", "UGafU", "lrxYM", ".js", "yMxUk", "flGJQ", "abrupt", "json", "resolve", "INCLUDE", "hGFQL", ".css", "message", "ADDITIONAL_SCRIPT_TAGS", '" crossorigin="anonymous" playsinline controls="true" preload="auto"></video-js></div>', "BPAwb", "IeyfG", "config", "afterend", "13:05", "insertAdjacentElement", "CUSTOM_JS", "MULTI_CLIENT_NAME", "https://cdn.unibotscdn.com/player/mvp/multi/player.js", "https://playerapi.b-cdn.net/website/playerConfig", "symbol", "JjgYv", "parent", "GEO", "querySelector", "zaECA", "setAttribute", "IGNORE_POLICY_CHNAGE", "https://vjs.zencdn.net/8.10.0/video.min.js", "video-js vjs-big-play-centere", "12804tFFCTb", "102hWTmjm", "GPNXg", '" crossorigin="anonymous" playsinline controls="true" preload="auto" style="', "OUTSTREAM_PLAYER_NAME", "CUSTOM_CDN_LINK", "/player/mvp/player_external_scripts/level_one/player.js", "removeChild", "uOenU", "defaultKv", "tnIdq", "Player Moved", "ZVNhI", "https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/7.5.2/videojs.ads.min.js", "188GhaCXO", "eWMnL", "BvdqY", "success", "forEach", "RUN_ONLY_OUTSTREAM", "SpqLw", "CeiDH", "height: 0px", "SPECIAL_OBJ", "11129660PzCkNW", "1812720WSRuRE", "https://cdn.unibotscdn.com/ubplayer/player.js", "SIURz", "CtyEx", "done", "aqAbp", "contains", "1176IShIrM", "01:15", "https://cdn.unibotscdn.com/ubplayer/dist/js/videojs.ima.js", "default", "OVERRIDE", "log", "https://cdn.unibotscdn.com/ubplayer/dist/js/can-autoplay.min.js", '"></video>    \n                                </div>', "https://socket.unibots.in", "includes", "script", "CHECK_BLOCKED_PAGES", "HLS enabled but a valid m3u8 path not exist for video! - UBP", "cmd", "loadDynamicStyles", "aQZBY", "HbrGo", "&page=", "prebid ads data : ", " Location!", "OEcne", "pbjsCreateBidders", "scroll", "BLOCK_GEO_LOCATION", "unibotsPlayer", "Common", "FLcyv", "https://imasdk.googleapis.com/js/sdkloader/ima3.js", "head", "plEnabled", "ENABLED_FOR_PC", "previousUrl", "then", "jQPXL", "IS_ACTIVE", "Targeted Div not found on page for UBP!", "LOAD_PL_WITH_DELAY", "aBfae", "/player/prebid/prebid.js", "RUN_MULTI_PLAYER", "HLS_CLIENT_NAME", "pbjsStoreBidResponse", "stop", "kOgLT", "_1691149734860", "concat", "apply", 'color: #263BSE; font-size: 19px; font-weight: bolder; font-family: "Arial"', "KVWwy", "document", "HPzcf", 'script[src="', "style", "%c MVP - v1.3.1 22-apr-24 modified 8-5-24", "QjBcR", "SCRIPT_TEST_LEVEL", "yYtFJ", "01:05", "sent", "unibots-video", "eiTpb", "throw", "1081380kqVaTL", "body", "IwiVy", "filter: invert(1); color:blue", "return", "vERrl", "Request failed to reach server, It Seems device isn't connected to network", "unibotsOsPlayer", "CLICK_TO_PLAY", "qGKhW", "loadDynamicScripts", "ohpzJ", "COLLECT_DATA", "EKrRb", "CLIENTSITE_TARGETED_DIV_ID_CLASSES", "hAmUe", "https://cdn.unibotscdn.com/ubplayer/dist/css/video-js.min.css", "MALSW", "location", "http://localhost:8080", "https://unibots.b-cdn.net/ub_fpd/script.js", "34299RtoBXZ", "from", "DISABLE_BASIC_UPR", "WAKoe", "getElementsByTagName", "next", "function", "scrollY", "oWLoV", "loadGA", ".json", "addClarityToClient", "IS_ENABLE", "clientActualDomain", "BbrWo", "prebidAds", "ENABLED_FOR_MB", "DZFvU", "value", "nNMSh", "continent", "TIER", "CrHdg", "player.js", "prebidPlayer", "unibots", "BLOCK_CHECK_NAME", "onload", "PREBID", "href", "https://cdn.unibotscdn.com/ubplayer/dist/css/videojs.ads.css", "Qugem", "hostname", "env", "/clientdata/", "documentElement", "jnQpQ", "/json/", "CLARITY_CODE", "addEventListener", "SHOW_AD_ONCE_VIEWED", "clientDomain", "/player/mvp/player_external_scripts/level_three/player.js", "Page is blocked", "src", "USE_TIER_WISE_SCRIPT", "GBcru", "development", "xFLfh", "join", "LdgLE", "querySelectorAll", "region", "36353526DJqZUq", "object", "HEAD", "getItem", "ODASK", "Ainpt", "TPELj", "error", "PGfiw", "GEO_LOCATIONS_TO_BLOCK", "push", "getElementById", "9EOxwIu", "length", "GROLn", "CLIENTS_LIST", "slice", "m3u8", "https://cdn.unibotscdn.com/ubplayer/mvp/player.js", "data", "https://cdn.unibotscdn.com", "charAt", "hdFOt", "ENABLE_HLS_PLAYER", 'color: #9bcdf1; font-size: 12px; font-family: "Arial"; margin-bottom: 5px;', "otShS", "16:00", "Scripts Already There!", "/player/mvp/player_external_scripts/level_two/player.js", "qkLBA", "AD_SOURCES", "status", "https://cdn.socket.io/4.5.4/socket.io.min.js", "lJfoC", "createElement", "MODE", "prev", "https://cdn.unibotscdn.com/player/mvp/player.js", "UBP Blocked For ", "true", "host", "PARENT_OVERRIDE", "yaDVn", "USE_OF_CUSTOM_CSS", "ILEZh", "constructor", "parentNode", "emit", "VALUE", "country", "shift", "fkduN", '<div id="ubVideo" class="ub-loaded unsticky"><video-js id="content_video" class="', "HoUVV", "display:none", "/css-src/main.css", "additionalScriptTags loaded", "type", "OmmYq", "websocket", "GJqdg", "checkUnmutedAutoplaySupport", "mark", "some", "getElementsByClassName", "geoData", "UBP_DEBUG", "Stopping Code Execution, Player will not run on this url !", "RECREATE_PLAYER", "HQoDe", "CURRENT_CLIENT", "wrap", "oIyfT", "split", "REQUIRED_SCROLL_FOR_PL_RUN", "YDSRo", "https://cdn.unibotscdn.com/ubplayer/dist/js/videojs-playlist.min.js", "basic_upr", "reverse", "CKpvN", "NEW_CUSTOM_CSS_MODULE", "kSxeQ", "qIcpB", "mobileCheck", '<div id="ubVideo" class="ub-loaded unsticky">\n                                    <video id="content_video" class="', "qzZeL", "FitNq", "Page is not allowed for UBP, player will not load", "mvPlayer", "PL_RUN_AFTER_PAGE_SCROLL", "playerRun", "Lkier", "IfvEk", "/clientdata/js/", "vpmute", "Block Check Request failed", "https://pro.ip-api.com/json/?fields=query,status,message,continent,countryCode,country,city,region&key=LWKtz4EzQwMJRyQ", "ZYUFR", '"></video>\n                                    <video id="ub_pbpl" class="', " extra player will not run now", "prototype", "26803rVYeiM", "%cUnibots%c.in\n%c{ Maximize Ad Revenues - Next Gen Ad-Tech }", 'filter: invert(1); font-size: 22px; font-weight: bolder; font-family: "Rubik"; margin-top: 5px; margin-bottom: 5px;', "ApxzF", "pathname", "LmzdH", "BHDAD", "appendChild", "uCoWL", "JSON_FLAG_NAME", "insertBefore", "catch", "text/javascript", "[id]", "GOOGLE", "iterator", "tItNY", "HLS_ENABLED", "AAyfA", "/player.js", "CJzOk", "https://unibots.b-cdn.net/player/outstream/player.js", "/ubplayer/mvp/css/main.css", "scrollTop", "countryCode"];
                    return (i = function() {
                        return e
                    })()
                }

                function o(e, t, n, r, a, i, o) {
                    var d = R;
                    try {
                        var s = e[i](o),
                            c = s.value
                    } catch (e) {
                        if (d(397) == d(397)) return void n(e);
                        _0x46fb08 ? _0x2e4705((function() {
                            _0x37c38d()
                        }), 3e3) : _0x5c7621()
                    }
                    s[d(672)] ? t(c) : Promise.resolve(c)[d(707)](r, a)
                }

                function d(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, a) {
                            var i = R,
                                d = e[i(383)](t, n);

                            function s(e) {
                                o(d, r, a, s, c, i(425), e)
                            }

                            function c(e) {
                                var t = i;
                                if ("kSxeQ" !== t(554)) {
                                    var n = _0xc7cd1d[_0x1b0e8a],
                                        l = _0x125c5e[t(637)](t(388) + n + '"');
                                    l && l[t(519)].removeChild(l)
                                } else o(d, r, a, s, c, t(398), e)
                            }
                            s(void 0)
                        }))
                    }
                }! function(e, t) {
                    for (var n = R, r = e();;) try {
                        if (693927 == parseInt(n(644)) / 1 * (-parseInt(n(643)) / 2) + parseInt(n(420)) / 3 * (-parseInt(n(657)) / 4) + parseInt(n(399)) / 5 + parseInt(n(675)) / 6 * (-parseInt(n(574)) / 7) + parseInt(n(668)) / 8 + parseInt(n(485)) / 9 * (-parseInt(n(667)) / 10) + parseInt(n(473)) / 11) break;
                        r.push(r.shift())
                    } catch (e) {
                        r.push(r.shift())
                    }
                }(i);
                var s, c, l, u = n(221).Helper,
                    _ = n(384).prebid,
                    f = (n(754)[r(444)], n(399).FloatingPlayerCss),
                    x = n(730).injectCustomConfig,
                    v = n(669),
                    p = {
                        CURRENT_CLIENT: "theuploadhub",
                        LOCAL_URL: "http://localhost:8080",
                        MODE: "production"
                    }[r(543)],
                    b = {},
                    m = new u,
                    h = !1,
                    g = [r(491), r(510)],
                    y = r(418);
                window[r(445)] = window[r(445)] || {
                    cmd: []
                }, window[r(561)] = window.mvPlayer || {
                    cmd: []
                }, window.UBP_DEBUG = localStorage[r(476)]("ubp_debug") == r(512), reactSiteCheck = function() {
                    var e = r;
                    return !!Array[e(421)](document[e(471)](e(587)))[e(536)]((function(t) {
                        var n = e;
                        return n(428) == n(428) ? void 0 !== t._reactRootContainer : _0x2accd4[n(684)]("m3u8")
                    }))
                }, window[r(556)] = m.isMobile(), window[r(433)] = location[r(452)], window[r(461)] = window[r(433)][r(546)](".")[r(551)]().splice(0, 2)[r(551)]()[r(469)]("."), window[r(563)] = !1, window.reactSite = reactSiteCheck(), window.previousUrl = window.previousUrl ? window.previousUrl : "", window[r(538)], window[r(652)], window[r(567)] = !1, runCMD = function() {
                    for (var e = r; unibots[e(688)][e(486)] > 0;) e(564) === e(517) ? _0x4383e2(_0x1de578) : (unibots[e(688)][0](), unibots[e(688)][e(523)](), clearInterval(S));
                    for (; mvPlayer.cmd[e(486)] > 0;) mvPlayer[e(688)][0](), mvPlayer[e(688)][e(523)](), clearInterval(S)
                };
                var w, A, E, C, P, S = setInterval((function() {
                    return runCMD()
                }), 500);

                function I(e) {
                    for (var t = r, n = e[t(486)] - 1; n >= 0; n--)
                        if (t(410) === t(712)) _0x2489a9.parent.unibots = _0x5de8cc[t(635)][t(445)] || {
                            cmd: []
                        }, _0x358357[t(635)][t(445)].cmd[t(483)]((function() {
                            var e = t;
                            _0x1dd55d(_0xc538fa), _0x49f45d[e(635)].unibotsPlayer(_0x2b597f)
                        }));
                        else {
                            var a = e[n],
                                i = document.querySelector(t(388) + a + '"');
                            i && i[t(519)][t(650)](i)
                        }
                }

                function R(e, t) {
                    var n = i();
                    return (R = function(e, t) {
                        return n[e -= 383]
                    })(e, t)
                }

                function k(e, t, n) {
                    var a = r;
                    if (e[a(684)](t) && n) {
                        var i = document[a(507)](a(603));
                        i.id = a(606) + n;
                        var o = window[a(635)][a(386)].getElementById("div-ub-" + e);
                        o && (a(412) === a(613) ? (_0x13bc5c = _0x1e3139[a(507)](a(603)), _0x3d722c = a(396), _0x5124d2.id = _0x2afa5a, _0x117c4b = _0x4783d7.getElementById(_0x2e063c), _0x3896c0.contains(_0x583755) ? _0x2e07df[a(607)](a(599)) : (_0x1e1644.appendChild(_0x4db6f1), _0x5c67ea())) : o[a(519)][a(584)](i, o));
                        var d = document[a(507)](a(685));
                        d[a(530)] = "text/javascript", d[a(464)] = a(669), window[a(635)][a(386)][a(424)]("head")[0][a(581)](d), d.onload = function() {
                            var e = a;
                            if (e(487) != e(487)) return _0x172b4f[e(615)]();
                            window.parent[e(445)] = window[e(635)][e(445)] || {
                                cmd: []
                            }, window[e(635)][e(445)][e(688)][e(483)]((function() {
                                var t = e;
                                if (t(442) === t(559)) {
                                    "development" == _0x496de6[t(453)][t(508)] ? _0x513830([t(443)]) : _0x54bf66(_0x1b5d12);
                                    var r = _0x16d18c[t(507)](t(603));
                                    r.id = t(606) + _0x92b8be, _0x7e8ab0 && (_0x143eac[t(628)](t(626), r), _0x135945[t(602)]());
                                    var a = _0xec397b[t(507)](t(685));
                                    a[t(530)] = t(586), a[t(464)] = _0xe87f42, _0x3479ec[t(635)][t(386)][t(424)]("head")[0][t(581)](a), a[t(447)] = function() {
                                        var e = t;
                                        _0xda4685.unibots = _0xa6b2e0[e(445)] || {
                                            cmd: []
                                        }, _0x8cf140.cmd[e(483)]((function() {
                                            _0x1b3da5(_0x217844)
                                        }))
                                    }
                                } else I(g), window.parent[t(699)](n)
                            }))
                        }
                    }
                }

                function T(e, t, n) {
                    var a = r;
                    if (e[a(684)](t)) {
                        if (n) {
                            var i = document[a(507)](a(603));
                            i.id = "div-ub-" + n;
                            var o = window[a(635)].document[a(484)](a(606) + e);
                            o && o[a(519)][a(584)](i, o)
                        }
                        var d = document[a(507)](a(685));
                        d[a(530)] = a(586), d.src = a(631), window[a(635)][a(386)][a(424)](a(703))[0].appendChild(d), d.onload = function() {
                            var t = a;
                            "kOgLT" === t(718) ? (window[t(635)].unibots = window.parent[t(445)] || {
                                cmd: []
                            }, window[t(635)][t(445)].cmd[t(483)]((function() {
                                I(g), window.parent.unibotsPlayer(e)
                            })), n && (window[t(635)].unibots = window[t(635)].unibots || {
                                cmd: []
                            }, window[t(635)][t(445)][t(688)][t(483)]((function() {
                                var e = t;
                                if (e(477) !== e(555)) window.parent[e(699)](n);
                                else {
                                    _0x109582[e(563)] = !1, _0x2601bc[e(706)] = "", _0x23cb17 = !0;
                                    var r = _0x8d3fb8(_0x5b7793);
                                    _0x1c1400(_0x3bcbfe, r)
                                }
                            })))) : _0x38ead6({
                                status: !1,
                                message: _0x193ecf
                            })
                        }
                    }
                }
                unibotsLog = function(e) {
                    var t = r;
                    e && ("HbrGo" !== t(691) ? _0x21e1c9() : console[t(680)](t(575), t(576), t(384), t(497)))
                }, insertRequriredJsToDom = function(e) {
                    return new Promise((function(t, n) {
                        var r = R,
                            a = 0,
                            i = [];
                        try {
                            e[r(661)]((function(n) {
                                var o = r,
                                    d = document[o(507)](o(685));
                                d[o(639)]("src", n), null == document.querySelector('script[src="' + n + '"]') ? (document[o(424)](o(475))[0][o(581)](d), d.onload = function() {
                                    var r = o;
                                    a++, i[r(483)](n), a == e[r(486)] && t({
                                        status: !0,
                                        message: i,
                                        totalFiles: a
                                    })
                                }) : t({
                                    status: !0,
                                    message: o(500)
                                })
                            }))
                        } catch (e) {
                            var o, d;
                            if ("egJJw" === r(663)) return _0x4139ed.wrap((function(e) {
                                for (var t = r;;) switch (e[t(509)] = e[t(425)]) {
                                    case 0:
                                        return e[t(425)] = 2, _0x5aee39("https://playerapi.b-cdn.net/website/playerConfig", {
                                            params: {
                                                playerName: _0x484921
                                            }
                                        });
                                    case 2:
                                        return o = e[t(395)], e.next = 5, o[t(492)];
                                    case 5:
                                        return d = e[t(395)], e[t(614)]("return", d[t(625)]);
                                    case 7:
                                    case t(604):
                                        return e[t(717)]()
                                }
                            }), _0x2cea23);
                            n({
                                status: !1,
                                error: e
                            })
                        }
                    }))
                }, checkBlocked = function(e) {
                    return new Promise((function(t, n) {
                        var r = R,
                            a = window[r(635)][r(417)][r(513)] + window.parent[r(417)][r(578)],
                            i = "https://api.unibots.in/block?client=" + (e[r(494)](0).toUpperCase() + e[r(489)](1)) + r(692) + a;
                        fetch(i)[r(707)]((function(e) {
                            return e[r(615)]()
                        }))[r(707)]((function(e) {
                            var a = r;
                            "jQPXL" === a(708) ? 1 == e[a(504)] ? n(a(463)) : t("Page is allowed") : (_0x13585a[a(539)] && _0x112be3[a(680)]("Player Load Emitted"), _0x79932b.emit("player_load", {
                                website: _0x4977e0[a(635)][a(417)][a(452)]
                            }))
                        })).catch((function() {
                            var e = r;
                            e(618) != e(618) ? (_0x3ad510[e(407)] = {
                                IS_ENABLE: !1,
                                WAITING: 5,
                                KEEP_FLOAT_AFTER_AUTOPLAY: !1,
                                FLOT_BEFORE_INVIEW: !1
                            }, _0xa925dc[e(460)] = !1, _0x54a9ad[e(640)] = {
                                IS_ENABLE: !1,
                                PERCENT_USERS_TO_RUN: 0,
                                USER_FREQUENCY_CAP: 0,
                                ENABLE_TIME: [e(394), e(676), e(627), "16:00"],
                                START_TIME: "",
                                END_TIME: ""
                            }, _0x25832e[e(539)] && _0x3ac789.log(_0x2fad4a)) : (console.log(e(568)), t(e(568)))
                        }))
                    }))
                }, getGeoInfo = function() {
                    return new Promise((function(e, t) {
                        var n = R,
                            r = n(569);
                        fetch(r)[n(707)]((function(e) {
                            return e[n(615)]()
                        }))[n(707)]((function(r) {
                            var a = n;
                            r.status == a(660) ? e({
                                country: r[a(598)],
                                region: r[a(472)],
                                continent: r[a(440)]
                            }, {
                                status: !0
                            }) : t({
                                status: !1
                            })
                        })).catch((function() {
                            return t(n(405))
                        }))
                    }))
                }, fetchJsonData = (E = d(regeneratorRuntime.mark((function e(t) {
                    var n, r, a, i = R;
                    return regeneratorRuntime[i(544)]((function(e) {
                        for (var o = i;;) switch (e[o(509)] = e[o(425)]) {
                            case 0:
                                return l || (l = o(493)), n = {
                                    env: {
                                        CURRENT_CLIENT: "theuploadhub",
                                        LOCAL_URL: "http://localhost:8080",
                                        MODE: "production"
                                    }
                                }[o(453)][o(508)] == o(467) ? "".concat(y, o(457))[o(720)](t, ".json") : "" [o(720)](l, o(454)).concat(t, o(430)), e[o(425)] = 4, fetch(n);
                            case 4:
                                return r = e[o(395)], e[o(425)] = 7, r[o(615)]();
                            case 7:
                                return a = e[o(395)], e[o(614)](o(403), a);
                            case 9:
                            case "end":
                                return e[o(717)]()
                        }
                    }), e)
                }))), function(e) {
                    var t = R;
                    return E[t(383)](this, arguments)
                }), fetchJsonData_new = (w = r, A = d(regeneratorRuntime[w(535)]((function e(t) {
                    var n, r, a = w;
                    return regeneratorRuntime[a(544)]((function(e) {
                        var i = a;
                        if (i(645) !== i(502))
                            for (;;) switch (e[i(509)] = e[i(425)]) {
                                case 0:
                                    return e[i(425)] = 2, v(i(632), {
                                        params: {
                                            playerName: t
                                        }
                                    });
                                case 2:
                                    return n = e[i(395)], e[i(425)] = 5, n[i(492)];
                                case 5:
                                    return r = e.sent, e.abrupt(i(403), r[i(625)]);
                                case 7:
                                case "end":
                                    return e[i(717)]()
                            } else _0x510868 = !1, _0x8bba6b[i(563)] = !0, _0x2c37e6[i(607)](i(560))
                    }), e)
                }))), function(e) {
                    var t = w;
                    if ("JjgYv" === t(634)) return A[t(383)](this, arguments);
                    _0x3a39f4[t(616)](_0x4c93f0)[t(707)](_0x38fbb2, _0x4693bc)
                }), scritpTestLevel = function(e) {
                    var t = r,
                        n = t(493),
                        a = {
                            1: "" [t(720)](n, t(649)),
                            2: "" [t(720)](n, t(501)),
                            3: "" [t(720)](n, t(462)),
                            4: "" [t(720)](n, "/player/mvp/player_external_scripts/level_four/player.js"),
                            default: "" [t(720)](n, "/player/mvp/player.js")
                        };
                    return a[e] || a[t(678)]
                }, switchScript = function(e, t) {
                    var n = r;
                    h || (n(437) !== n(401) ? (window[n(563)] = !1, window[n(706)] = "", h = !0, function(e, t) {
                        var n = r,
                            a = window[n(635)][n(386)][n(484)]("div-ub-" + e);
                        if (a)
                            if (n(526) == n(526)) {
                                ({
                                    env: {
                                        CURRENT_CLIENT: "theuploadhub",
                                        LOCAL_URL: "http://localhost:8080",
                                        MODE: "production"
                                    }
                                })[n(453)].MODE == n(467) ? I([n(443)]) : I(g);
                                var i = document[n(507)](n(603));
                                i.id = n(606) + e, a && (a[n(628)]("afterend", i), a[n(602)]());
                                var o = document.createElement("script");
                                o.type = "text/javascript", o[n(464)] = t, window.parent.document.getElementsByTagName(n(703))[0][n(581)](o), o[n(447)] = function() {
                                    var t = n;
                                    window[t(445)] = window[t(445)] || {
                                        cmd: []
                                    }, unibots[t(688)].push((function() {
                                        unibotsPlayer(e)
                                    }))
                                }
                            } else {
                                var d = _0x161da3[n(507)]("div");
                                d.id = n(606) + _0x2d65cd, d[n(389)] = "height: 0px";
                                var s = _0x5949f8[n(635)].document[n(484)]("div-ub-" + _0x2d352c);
                                _0x3944ae && s && s[n(602)]();
                                var c = _0x18d76e.createElement(n(685));
                                c.type = n(586), c[n(464)] = n(595), _0xc2406e[n(635)][n(386)][n(424)](n(703))[0][n(581)](c), _0x11036a[n(635)][n(386)][n(424)](n(400))[0][n(581)](d), c[n(447)] = function() {
                                    var e = n;
                                    _0x1d58fe[e(635)].unibots = _0x496992.parent[e(445)] || {
                                        cmd: []
                                    }, _0x5c9ea9[e(635)][e(445)].cmd[e(483)]((function() {
                                        var t = e;
                                        _0x4d0f02(_0x16d662), _0x5c7536.parent[t(406)](_0x3bc0bf)
                                    }))
                                }
                            }
                    }(t, scritpTestLevel(e))) : (_0x4e32ad.appendChild(_0x34e25a), _0x234bd7()))
                }, runOutstreamPlyer = function(e, t, n, a) {
                    var i = r;
                    if (e[i(684)](t) && n) {
                        var o = document[i(507)](i(603));
                        o.id = "div-ub-" + n, o[i(389)] = i(665);
                        var d = window[i(635)].document[i(484)]("div-ub-" + e);
                        a && d && d[i(602)]();
                        var s = document[i(507)]("script");
                        s.type = i(586), s.src = i(595), window.parent[i(386)][i(424)]("head")[0][i(581)](s), window[i(635)].document[i(424)]("body")[0][i(581)](o), s.onload = function() {
                            var e = i;
                            window[e(635)][e(445)] = window[e(635)][e(445)] || {
                                cmd: []
                            }, window[e(635)][e(445)][e(688)][e(483)]((function() {
                                var t = e;
                                I(g), window[t(635)][t(406)](n)
                            }))
                        }
                    }
                }, processExcludeIncludedClientsData = function(e, t) {
                    var n = r;
                    if (e && e[n(486)])
                        for (var i = 0; i < e[n(486)]; i++)
                            if ("CeiDH" !== n(664)) switch (_0x3457fc[n(509)] = _0x563688[n(425)]) {
                                case 0:
                                    return _0x5f920c || (_0x34b61a = n(493)), _0x2ea504 = _0xace42e[n(453)].MODE == n(467) ? "".concat(_0x9d92f7, n(457))[n(720)](_0x50ef6c, n(430)) : "" [n(720)](_0x2198dd, n(454))[n(720)](_0x422765, n(430)), _0x2e84be.next = 4, _0x3d132f(_0x22f014);
                                case 4:
                                    return _0xa5759e = _0xa181a4[n(395)], _0x49f810[n(425)] = 7, _0x54eb20.json();
                                case 7:
                                    return _0x11c31e = _0x30af8f[n(395)], _0x28d96b[n(614)]("return", _0x5b898a);
                                case 9:
                                case n(604):
                                    return _0x4c31f1.stop()
                            } else {
                                var o = e[i][n(432)],
                                    d = e[i][n(617)],
                                    s = e[i][n(583)],
                                    c = e[i][n(488)];
                                if (null == t[s] && (t[s] = {}), o && null != t[s] && c.length) {
                                    if (a(t[s]) != Object)
                                        if ("AAyfA" === n(592)) {
                                            var l = t[s];
                                            t[s] = {
                                                VALUE: l
                                            }
                                        } else
                                            for (;;) switch (_0x1bae7b[n(509)] = _0x59b181[n(425)]) {
                                                case 0:
                                                    return _0x356480 || (_0x329cc3 = "https://cdn.unibotscdn.com"), _0x455ea1 = _0x364025[n(453)][n(508)] == n(467) ? "" [n(720)](_0x46c8a9, n(457))[n(720)](_0x753b38, ".json") : "" [n(720)](_0x4ed034, "/clientdata/")[n(720)](_0x2560b4, ".json"), _0x163586[n(425)] = 4, _0x48bfeb(_0x1a166c);
                                                case 4:
                                                    return _0x16df3d = _0x338a0e.sent, _0x2b983d[n(425)] = 7, _0x3f7b66[n(615)]();
                                                case 7:
                                                    return _0x12c526 = _0x8522a7[n(395)], _0x55d822[n(614)]("return", _0x3eb248);
                                                case 9:
                                                case "end":
                                                    return _0x459375[n(717)]()
                                            }
                                    c.includes(t[n(543)]) ? t[s][n(679)] = !d : d && (t[s].OVERRIDE = d)
                                }
                            }
                }, unibotsPlayer = (C = r, P = d(regeneratorRuntime[C(535)]((function e(t) {
                    var n, r = C;
                    if (r(495) == r(495)) return regeneratorRuntime.wrap((function(e) {
                        for (var i = r;;)
                            if ("PGfiw" === i(481)) switch (e.prev = e[i(425)]) {
                                case 0:
                                    return p = t, e.next = 3, getGeoInfo().then((function(e) {
                                        return e
                                    })).catch((function(e) {
                                        var t = i;
                                        if ("zaECA" === t(638)) return console[t(480)](e);
                                        _0x1dc14a(t(463))
                                    }));
                                case 3:
                                    window[i(538)] = e[i(395)], checkFrameandInitStartFun = function() {
                                        var e = i;
                                        if (e(470) == e(470)) {
                                            var n = d(regeneratorRuntime.mark((function n(r) {
                                                var a, i, o, d, c, l, u, _, v = e;
                                                return regeneratorRuntime[v(544)]((function(e) {
                                                    for (var n = v;;) switch (e[n(509)] = e.next) {
                                                        case 0:
                                                            if (b = r, {
                                                                    env: {
                                                                        CURRENT_CLIENT: "theuploadhub",
                                                                        LOCAL_URL: "http://localhost:8080",
                                                                        MODE: "production"
                                                                    }
                                                                }[n(453)].MODE == n(467)) {
                                                                if (n(651) === n(605)) return _0x8508df == _0x2d0028[n(538)].country || _0x48cc9f == _0x1a3ed7[n(538)][n(440)];
                                                                b.CLICK_TO_PLAY = {
                                                                    IS_ENABLE: !1,
                                                                    WAITING: 5,
                                                                    KEEP_FLOAT_AFTER_AUTOPLAY: !1,
                                                                    FLOT_BEFORE_INVIEW: !1
                                                                }, b[n(460)] = !1, b[n(640)] = {
                                                                    IS_ENABLE: !1,
                                                                    PERCENT_USERS_TO_RUN: 0,
                                                                    USER_FREQUENCY_CAP: 0,
                                                                    ENABLE_TIME: [n(394), n(676), n(627), n(499)],
                                                                    START_TIME: "",
                                                                    END_TIME: ""
                                                                }, window.UBP_DEBUG && console[n(680)](b)
                                                            }
                                                            if (null != s && {
                                                                    env: {
                                                                        CURRENT_CLIENT: "theuploadhub",
                                                                        LOCAL_URL: "http://localhost:8080",
                                                                        MODE: "production"
                                                                    }
                                                                }[n(453)][n(508)] !== n(467))
                                                                if ("zdfzP" !== n(423)) window[n(539)] && console[n(680)]("Player Load Emitted"), s[n(520)]("player_load", {
                                                                    website: window[n(635)][n(417)].hostname
                                                                });
                                                                else {
                                                                    if (_0x3b08db(_0x56405e[_0x23d89e]) != _0x562f3d) {
                                                                        var m = _0x5b3b62[_0x32ebda];
                                                                        _0x52f140[_0x125022] = {
                                                                            VALUE: m
                                                                        }
                                                                    }
                                                                    _0x19e2c6[n(684)](_0x22f9aa[n(543)]) ? _0x22db7d[_0x2a6e7c][n(679)] = !_0x573b0d : _0x21f22a && (_0x492fce[_0xdd7f32][n(679)] = _0x11b8af)
                                                                }
                                                            if (new f(b), new x(b), a = b[n(413)], "true" == sessionStorage[n(476)](n(539)) && (window[n(539)] = !0), !(i = b.PLAYER_BLOCKED_URL)) {
                                                                e[n(425)] = 19;
                                                                break
                                                            }
                                                            o = window[n(417)][n(449)], d = 0;
                                                        case 11:
                                                            if (!(d < i[n(486)])) {
                                                                if ("UdtHD" !== n(408)) {
                                                                    e[n(425)] = 19;
                                                                    break
                                                                }
                                                                _0x4cafb7++, _0x107fb6[n(483)](_0x3f34f6), _0x630d21 == _0xa660b7[n(486)] && _0x1a09e6({
                                                                    status: !0,
                                                                    message: _0x22b944,
                                                                    totalFiles: _0x123086
                                                                })
                                                            }
                                                            if (!o.includes(i[d])) {
                                                                e[n(425)] = 16;
                                                                break
                                                            }
                                                            return console[n(607)](n(540)), d = i.length, e.abrupt(n(403), 0);
                                                        case 16:
                                                            d++, e.next = 11;
                                                            break;
                                                        case 19:
                                                            if (unibotsLog(window[n(539)]), window[n(539)] && console[n(680)](n(390), n(402)), "" == a) {
                                                                if (n(531) == n(531)) {
                                                                    e.next = 24;
                                                                    break
                                                                }
                                                                for (;;) switch (_0x50921c.prev = _0x4b2039[n(425)]) {
                                                                    case 0:
                                                                        return _0x43c62e.next = 2, _0x43d2d6(n(632), {
                                                                            params: {
                                                                                playerName: _0x2dc8de
                                                                            }
                                                                        });
                                                                    case 2:
                                                                        return _0x3073fb = _0x5defbf[n(395)], _0x263289[n(425)] = 5, _0x581dbd[n(492)];
                                                                    case 5:
                                                                        return _0x233eb6 = _0x1eac0c.sent, _0x3a958f[n(614)](n(403), _0x475a6e.config);
                                                                    case 7:
                                                                    case n(604):
                                                                        return _0xd78ffd[n(717)]()
                                                                }
                                                            }
                                                            return e.next = 24, checkPlDivs(a, p)[n(707)]((function(e) {
                                                                window[n(539)] && console.log("player moved to ", a)
                                                            }))[n(585)]((function(e) {
                                                                var t = n;
                                                                console[t(480)](e[t(620)])
                                                            }));
                                                        case 24:
                                                            null != (c = document[n(484)]("div-ub-" + t)) && (l = document[n(507)]("div"), u = n(396), l.id = u, _ = document[n(484)](u), c[n(674)](_) ? n(690) === n(558) ? _0x1a17dc[n(534)](_0x1863b4, _0x1b619d) : console[n(607)](n(599)) : (c[n(581)](l), startFunc()));
                                                        case 26:
                                                        case n(604):
                                                            return e[n(717)]()
                                                    }
                                                }), n)
                                            })));
                                            return function(t) {
                                                var r = e;
                                                if (r(701) !== r(552)) return n[r(383)](this, arguments);
                                                _0x5b4fb7(_0x586fee), _0x1e34d3[r(635)].unibotsPlayer(_0x559895)
                                            }
                                        }
                                        return _0x49e0e4[e(680)](_0x431019[e(620)])
                                    }(), processData = function() {
                                        var e = i,
                                            t = d(regeneratorRuntime[e(535)]((function t(r) {
                                                var i, o, d, l, u, f, x, p, b, m, g, y, w, A, E, C, P, S, I, R, L, O, D, N, U, B, M, F, j, V, G, q, Y, Q, H, W, K, z, J, Z, X, $, ee, te, ne, re, ae, ie, oe, de, se, ce, le, ue, _e, fe, xe, ve, pe, be, me, he, ge, ye, we, Ae, Ee, Ce = e;
                                                return regeneratorRuntime[Ce(544)]((function(e) {
                                                    for (var t = Ce;;)
                                                        if (t(391) != t(391)) {
                                                            var Pe = _0x5c126a[_0x1a8932];
                                                            _0x496b79[_0x1eaddb] = {
                                                                VALUE: Pe
                                                            }
                                                        } else switch (e.prev = e.next) {
                                                            case 0:
                                                                if (x = r[t(546)]("_")[1], b = r, !x || !Number(x)) {
                                                                    if ("jVdXA" !== t(623)) {
                                                                        e.next = 8;
                                                                        break
                                                                    }
                                                                    _0x2db1ce[_0x452d99] = _0x4552f6[_0x58973b][t(521)]
                                                                }
                                                                return e[t(425)] = 5, fetchJsonData_new(r);
                                                            case 5:
                                                                p = e[t(395)], e.next = 14;
                                                                break;
                                                            case 8:
                                                                return e[t(425)] = 10, fetchJsonData(r);
                                                            case 10:
                                                                (p = e[t(395)])[t(496)] = !0, p[t(715)] = r, p[t(543)] = r + t(719);
                                                            case 14:
                                                                return e[t(425)] = 16, fetchJsonData("mvp_parent");
                                                            case 16:
                                                                if (m = e[t(395)], t(666) in m && (p.SPECIAL_OBJ = m[t(666)]), !(m && m.PARENT_OVERRIDE && m.PARENT_OVERRIDE[t(679)] && m[t(514)].VALUE)) {
                                                                    if ("HHvBu" === t(601)) {
                                                                        e[t(425)] = 25;
                                                                        break
                                                                    }
                                                                    _0x458eb9[t(716)](_0x5aa9fb), "development" == _0x2741c5[t(453)][t(508)] && _0x942795[t(539)] && (_0x26ada0[t(680)](_0x5ed65d), _0x5b5a3c.log(t(693), _0x25d29d[t(435)]))
                                                                }
                                                                if (!(g = m.ALLOWED_CLIENTS) || !g[t(679)]) {
                                                                    e[t(425)] = 23;
                                                                    break
                                                                }
                                                                return e[t(425)] = 23, processExcludeIncludedClientsData(g[t(521)], p);
                                                            case 23:
                                                                for (key in p) t(404) === t(673) ? _0x4b1c99[_0x3336a0](_0x51975b)[t(438)] : (m[key] && a(m[key]) == t(474) && m[key][t(679)] && (a(p[key]) != t(474) || "object" == a(p[key]) && !p[key].OVERRIDE) && (p[key] = m[key][t(521)]), a(p[key]) == t(474) && null != p[key].VALUE && null != p[key][t(679)] && (p[key] = p[key][t(521)]));
                                                                for (key in m)
                                                                    if (t(478) !== t(577)) null == p[key] && m[key][t(679)] && (p[key] = m[key][t(521)]);
                                                                    else {
                                                                        var Se = _0x38812b[_0x5ac975][t(432)],
                                                                            Ie = _0x4c0556[_0x3dce28].INCLUDE,
                                                                            Re = _0x45a24e[_0x1f9a81][t(583)],
                                                                            ke = _0x1cc3d1[_0x463b22][t(488)];
                                                                        if (null == _0x5ecdb6[Re] && (_0x3a8b6d[Re] = {}), Se && null != _0x4dc879[Re] && ke[t(486)]) {
                                                                            if (_0x24c84e(_0x2f62d1[Re]) != _0x4992d8) {
                                                                                var Te = _0x50ab5d[Re];
                                                                                _0x5bd1da[Re] = {
                                                                                    VALUE: Te
                                                                                }
                                                                            }
                                                                            ke[t(684)](_0x2f1382[t(543)]) ? _0x3ef5b1[Re][t(679)] = !Ie : Ie && (_0x3d7a83[Re][t(679)] = Ie)
                                                                        }
                                                                    }
                                                            case 25:
                                                                if (y = "SCRIPT_TEST_LEVEL" in p ? p[t(392)] : 0, w = "", A = t(465) in p ? p[t(465)] : [], E = t(441) in p ? p[t(441)] : "", !(A[t(486)] && E && A.includes(E))) {
                                                                    e.next = 32;
                                                                    break
                                                                }
                                                                return w = "https://cdn.unibotscdn.com/player/mvp/tier/" + E + t(593), e[t(614)](t(403), new Promise((function(e, n) {
                                                                    switchScript(w, p[t(543)]), e()
                                                                })));
                                                            case 32:
                                                                if ({
                                                                        env: {
                                                                            CURRENT_CLIENT: "theuploadhub",
                                                                            LOCAL_URL: "http://localhost:8080",
                                                                            MODE: "production"
                                                                        }
                                                                    }[t(453)][t(508)] == t(467)) {
                                                                    e[t(425)] = 37;
                                                                    break
                                                                }
                                                                if (h || !y) {
                                                                    if ("ELNIp" !== t(468)) {
                                                                        e[t(425)] = 37;
                                                                        break
                                                                    }
                                                                    _0x23dcf0(_0x26796a), _0x5e06b6.parent.unibotsOsPlayer(_0x491b78)
                                                                }
                                                                if (w = scritpTestLevel(y), null != document[t(637)](t(388) + w + '"')) {
                                                                    e[t(425)] = 37;
                                                                    break
                                                                }
                                                                return e.abrupt(t(403), new Promise((function(e, n) {
                                                                    switchScript(y, p[t(543)]), e()
                                                                })));
                                                            case 37:
                                                                if (C = null !== (i = null === (o = p) || void 0 === o ? void 0 : o.ENABLE_HLS_PLAYER) && void 0 !== i && i, P = null !== (d = null === (l = p) || void 0 === l ? void 0 : l[t(714)]) && void 0 !== d && d, S = null !== (u = null === (f = p) || void 0 === f ? void 0 : f.RUN_OUTSTREAM_PLAYER) && void 0 !== u && u, !C) {
                                                                    if (t(612) == t(612)) {
                                                                        e.next = 47;
                                                                        break
                                                                    }
                                                                    _0x449693.error(_0x1e07e9[t(620)])
                                                                }
                                                                L = p[t(543)], O = L[t(546)]("_")[1], D = null !== (I = null === (R = p) || void 0 === R ? void 0 : R[t(715)]) && void 0 !== I && I, k(L, O, D), e[t(425)] = 102;
                                                                break;
                                                            case 47:
                                                                if (!P) {
                                                                    e.next = 52;
                                                                    break
                                                                }
                                                                B = null !== (N = null === (U = p) || void 0 === U ? void 0 : U[t(630)]) && void 0 !== N ? N : "", T(b, x, B), e[t(425)] = 102;
                                                                break;
                                                            case 52:
                                                                if (!S) {
                                                                    if (t(439) == t(439)) {
                                                                        e[t(425)] = 58;
                                                                        break
                                                                    }
                                                                    return _0x4ea9b6
                                                                }
                                                                if (de = null !== (re = null === (ae = p) || void 0 === ae ? void 0 : ae[t(647)]) && void 0 !== re ? re : "", se = null !== (ie = null === (oe = p) || void 0 === oe ? void 0 : oe[t(662)]) && void 0 !== ie && ie, runOutstreamPlyer(b, x, de, se), !se) {
                                                                    e[t(425)] = 58;
                                                                    break
                                                                }
                                                                return e[t(614)](t(403), 0);
                                                            case 58:
                                                                if (null !== (M = p[t(503)]) && void 0 !== M && null !== (F = M[t(588)]) && void 0 !== F && F[t(422)]) {
                                                                    e[t(425)] = 62;
                                                                    break
                                                                }
                                                                return e.next = 61, fetchJsonData(t(550));
                                                            case 61:
                                                                window[t(652)] = e[t(395)];
                                                            case 62:
                                                                if (ce = null !== (V = (j = p).CHECK_BLOCKED_PAGES) && void 0 !== V ? V : j[t(686)] = !1, le = window[t(556)] ? p[t(436)] : p[t(705)], ue = null !== (q = (G = p)[t(698)]) && void 0 !== q ? q : G.BLOCK_GEO_LOCATION = !1, _e = null !== (Q = (Y = p)[t(482)]) && void 0 !== Q ? Q : Y[t(482)] = [], fe = null !== (H = null === (W = p) || void 0 === W || null === (K = W[t(503)]) || void 0 === K || null === (z = K.PREBID) || void 0 === z ? void 0 : z[t(709)]) && void 0 !== H && H, xe = null !== (J = null === (Z = p) || void 0 === Z ? void 0 : Z[t(446)]) && void 0 !== J ? J : null, ve = t(493), pe = t(648) in p && "" != p[t(648)], n = pe && null !== (X = p[t(648)]) && void 0 !== X ? X : ve, be = null !== ($ = null === (ee = p) || void 0 === ee || null === (te = ee.AD_SOURCES) || void 0 === te || null === (ne = te[t(448)]) || void 0 === ne ? void 0 : ne.DATA) && void 0 !== $ ? $ : [], me = be[t(486)] > 0 && be[t(536)]((function(e) {
                                                                        var n;
                                                                        return null !== (n = null == e ? void 0 : e[t(636)]) && void 0 !== n && n
                                                                    })), he = {}, le && ce && (t(582) == t(582) ? xe && "" !== xe ? checkBlocked(xe).then((function() {
                                                                        var e = t;
                                                                        window[e(539)] && console[e(680)]("Page is allowed for UBP")
                                                                    }))[t(585)]((function(e) {
                                                                        var n = t;
                                                                        le = !1, window[n(563)] = !0, console[n(607)](n(560))
                                                                    })) : console[t(607)]("Block Check Enabled but block clientname not specified so player will run") : (_0x32f10e(_0x57c362, _0xde5fe4.CURRENT_CLIENT), _0x4d977b())), !window.playerRun && (p[t(541)] || window[t(706)] != location.href)) {
                                                                    e[t(425)] = 78;
                                                                    break
                                                                }
                                                                return window[t(539)] && console[t(607)](t(572)), e[t(614)](t(403), 0);
                                                            case 78:
                                                                if (window[t(563)] = !0, window[t(706)] = location[t(449)], !me) {
                                                                    e.next = 83;
                                                                    break
                                                                }
                                                                return e[t(425)] = 83, v("" [t(720)](n, "/player/mvp/prebid_countries.json"))[t(707)]((function(e) {
                                                                    return he = e[t(492)]
                                                                }))[t(585)]((function(e) {
                                                                    var n = t;
                                                                    if ("MALSW" === n(416)) return console[n(680)](e[n(620)]);
                                                                    _0x428f65(_0x35de24, _0x32fa73, _0x4e4d64, _0x725a60, _0x5c394e, n(425), _0xfed51a)
                                                                }));
                                                            case 83:
                                                                return sessionStorage[t(476)]("ENABLED_FOR_PC") != t(512) || window[t(556)] || (le = !0), "true" == sessionStorage[t(476)]("ENABLED_FOR_MB") && window.mobileCheck && (le = !0), ge = [t(505)], fe && ("BbrWo" !== t(434) ? _0x2ef541 && (_0x5f5a85 ? _0x5edd24((function() {
                                                                    _0x11a38c()
                                                                }), 3e3) : _0x4a8e8d()) : ge.push("" [t(720)](n, t(713)))), "development" != {
                                                                    env: {
                                                                        CURRENT_CLIENT: "theuploadhub",
                                                                        LOCAL_URL: "http://localhost:8080",
                                                                        MODE: "production"
                                                                    }
                                                                }[t(453)][t(508)] && p[t(629)] && ge.push("" [t(720)](n) + t(566) + r + t(611)), e[t(425)] = 91, insertRequriredJsToDom(ge);
                                                            case 91:
                                                                return e[t(425)] = 93, io(t(683), {
                                                                    transports: [t(532)]
                                                                });
                                                            case 93:
                                                                if (s = e.sent, le && fe && (t(533) != t(533) ? (_0x356263[t(635)][t(445)] = _0xebb74c.parent[t(445)] || {
                                                                        cmd: []
                                                                    }, _0x2093ce[t(635)].unibots[t(688)][t(483)]((function() {
                                                                        var e = t;
                                                                        _0x9f081a(_0x4cc73d), _0x28b879[e(635)][e(406)](_0x36f89d)
                                                                    }))) : ((c = new _({
                                                                        _pbjs: ubp_pbjs,
                                                                        _testAds: !1,
                                                                        _ubpSocket: s,
                                                                        _clientData: p,
                                                                        _geoData: null !== (ye = window[t(538)]) && void 0 !== ye ? ye : void 0,
                                                                        _prebidRegions: he
                                                                    }))[t(696)](null !== (we = null === (Ae = p) || void 0 === Ae || null === (Ee = Ae[t(503)]) || void 0 === Ee ? void 0 : Ee.PREBID) && void 0 !== we && we), c.pbjsRequstBids({
                                                                        debug: !1,
                                                                        queue: !0
                                                                    })[t(707)]((function(e) {
                                                                        var n = t;
                                                                        if ("rkuZR" === n(570)) return _0x473124[n(480)](_0x4d51ba);
                                                                        c[n(716)](e), {
                                                                            env: {
                                                                                CURRENT_CLIENT: "theuploadhub",
                                                                                LOCAL_URL: "http://localhost:8080",
                                                                                MODE: "production"
                                                                            }
                                                                        }[n(453)][n(508)] == n(467) && window[n(539)] && (console[n(680)](e), console.log(n(693), c[n(435)]))
                                                                    }))[t(585)]((function(e) {
                                                                        return console.warn(e)
                                                                    })))), !(ue && _e[t(486)] > 0 && null != window[t(538)])) {
                                                                    e[t(425)] = 100;
                                                                    break
                                                                }
                                                                if (!_e[t(536)]((function(e) {
                                                                        var n = t;
                                                                        return e == window.geoData[n(522)] || e == window[n(538)][n(440)]
                                                                    }))) {
                                                                    e.next = 100;
                                                                    break
                                                                }
                                                                return console[t(607)](t(511)[t(720)](window[t(538)][t(522)], t(694))), e[t(614)](t(403), 0);
                                                            case 100:
                                                                window[t(539)] && console[t(680)](t(704), le), le && checkFrameandInitStartFun(p);
                                                            case 102:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                }), t)
                                            })));
                                        return function(n) {
                                            var r = e;
                                            return t[r(383)](this, arguments)
                                        }
                                    }(), processData(t);
                                case 7:
                                case i(604):
                                    return e[i(717)]()
                            } else _0x1e7fbb = i(525)[i(720)](_0x36c376, i(622))
                    }), e);
                    _0x2b8527[r(483)](_0x41b631 + r(528))
                }))), function(e) {
                    return P.apply(this, arguments)
                }), initMVPlayer = unibotsPlayer, startFunc = function() {
                    var e, t, a, i, o, l, u, _, f, x, v, h, g, w, A, E = r,
                        C = window.mobileCheck ? b.ENABLED_FOR_MB : b.ENABLED_FOR_PC,
                        P = E(516) in b && 1 == b[E(516)],
                        S = E(711) in b && 1 == b.LOAD_PL_WITH_DELAY,
                        I = E(562) in b && 1 == b.PL_RUN_AFTER_PAGE_SCROLL,
                        R = null !== (t = (e = b)[E(553)]) && void 0 !== t ? t : e[E(553)] = !1,
                        k = null !== (i = (a = b)[E(591)]) && void 0 !== i ? i : a[E(591)] = !1,
                        T = null !== (l = (o = b)[E(621)]) && void 0 !== l ? l : o[E(621)] = !1,
                        L = null !== (u = null === (_ = b) || void 0 === _ || null === (f = _[E(503)]) || void 0 === f || null === (x = f[E(448)]) || void 0 === x ? void 0 : x[E(709)]) && void 0 !== u && u,
                        O = null === (v = b) || void 0 === v ? void 0 : v[E(648)],
                        D = O && "" !== O ? O : "https://cdn.unibotscdn.com",
                        N = null !== (h = null === (g = b) || void 0 === g ? void 0 : g.ENABLE_CLARITY) && void 0 !== h && h,
                        U = null !== (w = null === (A = b) || void 0 === A ? void 0 : A[E(411)]) && void 0 !== w && w;
                    "true" != sessionStorage[E(476)](E(705)) || window[E(556)] || (C = !0), "true" == sessionStorage[E(476)](E(436)) && window[E(556)] && (C = !0);
                    var B = "unibots-video",
                        M = new(0, n(989)[E(700)])(b);
                    blockedPagesFlag = 1 == (E(686) in b && b[E(686)]), loadStyles = function() {
                        var e = E,
                            t = [e(450), "https://cdn.unibotscdn.com/ubplayer/dist/css/videojs.ima.css", e(415)];
                        if (P) {
                            if (e(658) != e(658)) return _0x1ef098[e(383)](this, arguments);
                            ({
                                env: {
                                    CURRENT_CLIENT: "theuploadhub",
                                    LOCAL_URL: "http://localhost:8080",
                                    MODE: "production"
                                }
                            })[e(453)][e(508)] == e(467) ? t[e(483)](y + "/css-src/" + p + e(619)) : "BHDAD" === e(580) ? t[e(483)]("" [e(720)](D, "/clientdata/css/") + p + e(619)) : _0x14c075[e(539)] && _0x3da1e5.log(e(529))
                        }
                        if (R)
                            if (e(659) !== e(542))
                                if ("production" == e(467)) "Qugem" !== e(451) ? _0x528614[e(635)].unibotsPlayer(_0x1fe38e) : t[e(483)](y + e(528));
                                else if (e(545) === e(506))
                            for (var n = 0; n < _0x19d727[e(486)]; n++) {
                                var r = _0xa756e0[n][e(432)],
                                    a = _0x44911b[n][e(617)],
                                    i = _0x4841cb[n][e(583)],
                                    o = _0x3d442a[n][e(488)];
                                if (null == _0xac4d1[i] && (_0x311d57[i] = {}), r && null != _0x2c973d[i] && o[e(486)]) {
                                    if (_0x95f4b0(_0x563960[i]) != _0x277526) {
                                        var d = _0x1c87b5[i];
                                        _0xeb652a[i] = {
                                            VALUE: d
                                        }
                                    }
                                    o[e(684)](_0x5d7ef9[e(543)]) ? _0xacc5c8[i][e(679)] = !a : a && (_0x6f5cf3[i].OVERRIDE = a)
                                }
                            } else t[e(483)]("" [e(720)](D, e(596)));
                        else if (!_0x3a96f3) {
                            _0x25e938[e(563)] = !1, _0x304e7f.previousUrl = "", _0xb79518 = !0;
                            var s = _0x2af36f(_0x5306cf);
                            _0xfba424(_0xda78a4, s)
                        }
                        R || P || t[e(483)]("" [e(720)](D, "/clientData/css/player.css")), M[e(689)](t)
                    }, initFunction = function() {
                        var e = E;
                        M.loadDynamicScripts([e(702)])[e(707)]((function() {
                            var t = e;
                            M[t(409)]([t(641)]).then((function() {
                                var e = t,
                                    n = [e(656), e(677), e(681), e(549)];
                                U && n[e(483)](e(419)), M.loadDynamicScripts(n, !1).then((function() {
                                    var t = e;
                                    M.videoModule[t(600)]()[t(707)](function() {
                                        var e = t;
                                        if ("NFwdy" !== e(610)) {
                                            var n = d(regeneratorRuntime[e(535)]((function t(n) {
                                                var r, a, i, o = e;
                                                if (o(479) !== o(524)) return regeneratorRuntime[o(544)]((function(e) {
                                                    for (var t = o;;)
                                                        if (t(466) == t(466)) switch (e[t(509)] = e[t(425)]) {
                                                            case 0:
                                                                if (isValidVideo = function(e) {
                                                                        var n = t;
                                                                        return e.includes(n(490))
                                                                    }, n && (r = Array.isArray(n) ? n[t(536)](isValidVideo) : n[t(684)](t(490))), !document[t(484)](B)) {
                                                                    if (t(608) == t(608)) {
                                                                        e.next = 17;
                                                                        break
                                                                    }
                                                                    _0x468751.UBP_DEBUG && _0x6c4100[t(680)]("Page is allowed for UBP")
                                                                }
                                                                if (i = t(642), L ? a = t(557)[t(720)](i, '" crossorigin="anonymous" playsinline controls="true" preload="auto" style="')[t(720)]("", t(571))[t(720)](i, t(646))[t(720)](t(527), t(682)) : "NGnpp" === t(414) ? _0x13de7f.env.MODE == t(467) ? _0x17cab8[t(483)](_0x1493f4 + t(528)) : _0x3dc306[t(483)]("".concat(_0x5ae638, "/ubplayer/mvp/css/main.css")) : a = t(525)[t(720)](i, t(622)), r || !k) {
                                                                    e[t(425)] = 9;
                                                                    break
                                                                }
                                                                return console[t(607)](t(687)), e[t(614)](t(403));
                                                            case 9:
                                                                document[t(484)](B).innerHTML = a, L ? t(498) != t(498) ? (_0x5dc14d[t(635)][t(445)] = _0x3a48d1[t(635)][t(445)] || {
                                                                    cmd: []
                                                                }, _0x180254[t(635)].unibots[t(688)][t(483)]((function() {
                                                                    var e = t;
                                                                    _0x37f9e8(_0x3748b4), _0x3bd2c9[e(635)][e(699)](_0x2f2ef6)
                                                                })), _0x13d3cd && (_0x4cd474[t(635)][t(445)] = _0x33646c.parent[t(445)] || {
                                                                    cmd: []
                                                                }, _0x33e3db.parent.unibots[t(688)][t(483)]((function() {
                                                                    var e = t;
                                                                    _0x47593a[e(635)][e(699)](_0x1d1a79)
                                                                })))) : M.checkUnmutedAutoplaySupport(s, c) : M.checkUnmutedAutoplaySupport(s), "development" != {
                                                                    CURRENT_CLIENT: "theuploadhub",
                                                                    LOCAL_URL: "http://localhost:8080",
                                                                    MODE: "production"
                                                                }[t(508)] && m[t(429)](b.GA_CODE), {
                                                                    env: {
                                                                        CURRENT_CLIENT: "theuploadhub",
                                                                        LOCAL_URL: "http://localhost:8080",
                                                                        MODE: "production"
                                                                    }
                                                                }[t(453)][t(508)] != t(467) && 1 == N && m[t(431)](b[t(458)]), window[t(539)] && console[t(680)]("UBP Loaded...!"), T && T[t(486)] && M[t(409)](T, !1)[t(707)]((function() {
                                                                    var e = t;
                                                                    window.UBP_DEBUG && console.log(e(529))
                                                                })), e[t(425)] = 18;
                                                                break;
                                                            case 17:
                                                                console[t(607)](t(710));
                                                            case 18:
                                                            case t(604):
                                                                return e[t(717)]()
                                                        } else _0x519221[t(607)](t(599))
                                                }), t);
                                                _0x548c0b[o(445)] = _0x5e7d13[o(445)] || {
                                                    cmd: []
                                                }, _0x94e3f5[o(688)].push((function() {
                                                    _0x73937a(_0x490900)
                                                }))
                                            })));
                                            return function(t) {
                                                var r = e;
                                                return n[r(383)](this, arguments)
                                            }
                                        }
                                        return _0x2505a4.json()
                                    }())[t(585)]((function(e) {
                                        var n = t;
                                        "KVWwy" !== n(385) ? (_0x50a444(_0xf1f767), _0x30caf3[n(635)][n(699)](_0x325b4e)) : console[n(607)](e)
                                    }))
                                }))[e(585)]((function(e) {
                                    console.warn(e)
                                }))
                            }))[t(585)]((function(e) {
                                console.warn(e)
                            }))
                        }))[e(585)]((function(t) {
                            var n = e;
                            if ("gAZeW" !== n(548)) console[n(607)](t);
                            else {
                                var r = n(547) in _0x451e58 && "" == _0x678188[n(547)] ? 100 : _0x204db7[n(547)];
                                _0x417e44[n(635)][n(459)]("scroll", (function() {
                                    var e = n;
                                    !_0x526d61 && r <= (_0x4e9928[e(635)].scrollY || _0x395be1[e(635)][e(386)][e(455)].scrollTop || _0x3b710c[e(635)][e(386)][e(400)][e(597)]) && (_0x5c0328(), _0x4a5167 = !0)
                                }))
                            }
                        }))
                    }, loadStyles(), runPlayer = function(e) {
                        var t = E;
                        if (t(565) !== t(653)) {
                            var n = !1;
                            if (e) {
                                var r = t(547) in b && "" == b.REQUIRED_SCROLL_FOR_PL_RUN ? 100 : b[t(547)];
                                window[t(635)][t(459)](t(697), (function() {
                                    var e = t;
                                    e(515) === e(655) ? _0x3a8b21[e(539)] && _0x186821.log("player moved to ", _0x528199) : !n && r <= (window[e(635)][e(427)] || window.parent[e(386)].documentElement[e(597)] || window[e(635)][e(386)][e(400)][e(597)]) && (shouldPlayerRun(), n = !0)
                                }))
                            } else shouldPlayerRun()
                        } else _0x1bc4a7[t(628)](t(626), _0x501aad), _0x2c1b1b[t(602)]()
                    }, shouldPlayerRun = function() {
                        C && (S ? setTimeout((function() {
                            initFunction()
                        }), 3e3) : initFunction())
                    }, runPlayer(I)
                }, movedivtotargetLocation = function(e, t) {
                    return new Promise((function(n, r) {
                        var a = R;
                        try {
                            if (a(393) != a(393)) {
                                for (; _0x171c55[a(688)][a(486)] > 0;) _0xd47978[a(688)][0](), _0x1021e1[a(688)].shift(), _0x4ece03(_0x29fcb7);
                                for (; _0x1f3f85[a(688)].length > 0;) _0x47e986[a(688)][0](), _0x268b3b.cmd[a(523)](), _0x58fb70(_0x4aaf58)
                            } else if (null != e) {
                                if (a(624) === a(609)) return _0xc86c2[a(383)](this, arguments);
                                var i = document[a(484)](a(606) + t);
                                if (i) a(456) !== a(594) ? (e.insertAdjacentElement(a(626), i), n({
                                    status: !0,
                                    message: a(654)
                                })) : (_0x1b7e39(_0x2b2dd7[_0x52dd38]) != a(474) || _0x43d779(_0xacbb1[_0x6d5063]) == a(474) && !_0x3eff82[_0x1edffe][a(679)]) && (_0x5839a0[_0x558b22] = _0x1dba4f[_0x16199b].VALUE);
                                else {
                                    var o = document[a(507)](a(603));
                                    o.id = a(396), e[a(628)](a(626), o), n({
                                        status: !0,
                                        message: a(654)
                                    })
                                }
                            }
                        } catch (e) {
                            r({
                                status: !1,
                                message: e
                            })
                        }
                    }))
                }, checkPlDivs = function(e, t) {
                    return new Promise((function(n, r) {
                        var a = R;
                        try {
                            var i = 0,
                                o = [],
                                s = !1,
                                c = setInterval(d(regeneratorRuntime[a(535)]((function r() {
                                    var d = a;
                                    if (d(670) == d(670)) return regeneratorRuntime[d(544)]((function(r) {
                                        var a = d;
                                        if (a(579) != a(579)) null == _0x3b3bb9[_0xe39529] && _0x3ace98[_0x108cd1][a(679)] && (_0x6d1a08[_0x32f1e8] = _0x2f64e2[_0x5cd735][a(521)]);
                                        else
                                            for (;;) {
                                                if (a(671) === a(695)) return _0x21ad5e = _0xca31a3[a(492)];
                                                switch (r[a(509)] = r[a(425)]) {
                                                    case 0:
                                                        if (i++, null === document[a(484)](e)) {
                                                            r[a(425)] = 7;
                                                            break
                                                        }
                                                        return s = !0, r[a(425)] = 5, movedivtotargetLocation(document[a(484)](e), t);
                                                    case 5:
                                                        r.next = 11;
                                                        break;
                                                    case 7:
                                                        if (!(document[a(537)](e).length > 0)) {
                                                            if ("zhwtq" !== a(387)) {
                                                                r.next = 11;
                                                                break
                                                            }
                                                            _0x551630[a(607)](_0x463ef0)
                                                        }
                                                        return s = !0, r[a(425)] = 11, movedivtotargetLocation(document[a(537)](e)[0], t);
                                                    case 11:
                                                        s && (clearInterval(c), n({
                                                            divsLoaded: o,
                                                            counter: i
                                                        })), i > 5 && (clearInterval(c), n({
                                                            divsLoaded: o,
                                                            counter: i
                                                        }));
                                                    case 13:
                                                    case a(604):
                                                        return r[a(717)]()
                                                }
                                            }
                                    }), r);
                                    _0x509bd2(_0x39f00a)
                                }))), 500)
                        } catch (e) {
                            r({
                                status: !1,
                                message: e
                            })
                        }
                    }))
                }
            },
            399: (e, t) => {
                function n() {
                    var e = ["YANdx", "split", "bottom", "right", "styleSheet", "115696TUEoDe", "BedAA", "margin_bottom", "style", "FLOATING_PLAYER_SETTINGS", "clientData", "1890360UNWydd", "FvIXc", "86808WHbnQM", "MARGIN_BOTTOM", "WCAQY", "hMuzG", "cssInterval", "_MB", "px !important};", "stickyPlayerWidth", "_SPACING", "72Ljxvny", "cssText", "CURRENT_CLIENT", "px !important; height : ", "h_spacing", "px !important; .ubsticky_", "clientSettings", "length", "px !important }", "defaultSettings", "mobileCheck", "2txdScy", "STICKY_V_POSITION", "FLOATING_SIZE_MB", "px !important}", "appendChild", "759ZFcFJP", "cssIntervalCounter", "createTextNode", "77530iYhCXK", "jrUHe", "ETmLF", "STICKY_POSITION", "sticky_v_position", "insertCssRule", ".ubsticky_", "stickyPlayerHeight", "cssRule", "stickyPlayerWidthMB", "stickyPlayerHeightMB", "v_spacing", "floatingPlSettings", "buildCSSRules", "wpxsv", "288962fsaVSJ", "sticky_h_position", "mhbVy", "upNEC", "Cannot call a class as a function", "296208oYuaaW", "28905RkWfDh", "MXwYT", " : ", "px !important };", "cssRules", "STICKY_H_POSITION", "FLOATING_POSITION_MB", "toUpperCase", "keys", "window.mobileCheck is required to use generatePlayerCss Plugin.", "px !important;", "left", " .content_video-dimensions, .ubsticky_", "119cWYgeX", "zpiup", "#unibots-video{margin:auto !important; margin-bottom : ", "FLOATING_SIZE", "concat"];
                    return (n = function() {
                        return e
                    })()
                }

                function r(e, t) {
                    var a = n();
                    return (r = function(e, t) {
                        return a[e -= 462]
                    })(e, t)
                }

                function a(e, t, n) {
                    var a = r;
                    if (t in e) Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    });
                    else {
                        if (a(490) === a(473)) {
                            var i, o, d = null !== (i = null === (o = _0x2f67f7[a(504)]) || void 0 === o ? void 0 : o[a(503)]) && void 0 !== i ? i : [];
                            return _0x554e07[a(484)](d)[a(523)] > 0 ? d[_0x4b4ec5 ? _0x559a97 + a(512) : _0x45d38c] : null
                        }
                        e[t] = n
                    }
                    return e
                }! function(e, t) {
                    for (var n = r, a = e();;) try {
                        if (148952 == -parseInt(n(470)) / 1 * (-parseInt(n(527)) / 2) + parseInt(n(475)) / 3 + -parseInt(n(499)) / 4 + -parseInt(n(476)) / 5 * (parseInt(n(516)) / 6) + parseInt(n(489)) / 7 * (parseInt(n(507)) / 8) + parseInt(n(505)) / 9 + -parseInt(n(535)) / 10 * (parseInt(n(532)) / 11)) break;
                        a.push(a.shift())
                    } catch (e) {
                        a.push(a.shift())
                    }
                }(n), t.FloatingPlayerCss = function e(t) {
                    var n, i, o, d, s = r,
                        c = this;
                    if (function(e, t) {
                            var n = r;
                            if (!(e instanceof t)) {
                                if (n(536) !== n(510)) throw new TypeError(n(474));
                                var a = this.clientSettings(n(492), _0xc4d55b[n(526)]);
                                a ? a.split("x")[0] : this[n(525)][_0x2a6444[n(526)] ? n(464) : n(514)]
                            }
                        }(this, e), a(this, s(511), void 0), a(this, s(533), 0), a(this, s(480), void 0), a(this, s(467), {
                            stickyPosition: null !== (n = null === (i = this[s(504)]) || void 0 === i ? void 0 : i[s(538)]) && void 0 !== n ? n : s(497),
                            stickyPositionMB: null !== (o = null === (d = this[s(504)]) || void 0 === d ? void 0 : d[s(482)]) && void 0 !== o ? o : "right",
                            defaultSettings: {
                                sticky_h_position: s(487),
                                sticky_v_position: s(496),
                                h_spacing: 5,
                                v_spacing: 120,
                                margin_bottom: 12,
                                stickyPlayerWidth: 400,
                                stickyPlayerHeight: 225,
                                stickyPlayerWidthMB: 256,
                                stickyPlayerHeightMB: 144
                            },
                            clientSettings: function(e, t) {
                                var n, r, a = s,
                                    i = null !== (n = null === (r = c.clientData) || void 0 === r ? void 0 : r.FLOATING_PLAYER_SETTINGS) && void 0 !== n ? n : [];
                                return Object[a(484)](i)[a(523)] > 0 ? i[t ? e + a(512) : e] : null
                            },
                            getClientName: function() {
                                var e = s;
                                return c[e(504)][e(518)]
                            },
                            get stickyPlayerWidth() {
                                var e = s;
                                if (e(500) != e(500)) {
                                    var t = this.clientSettings(this[e(539)][e(483)]() + e(515), _0x351c59[e(526)]);
                                    return t != _0xfa979b ? t : this[e(525)][e(466)]
                                }
                                var n = this[e(522)](e(492), window.mobileCheck);
                                return n ? n[e(495)]("x")[0] : this[e(525)][window[e(526)] ? e(464) : "stickyPlayerWidth"]
                            },
                            get stickyPlayerWidthMB() {
                                var e = s,
                                    t = this[e(522)](e(529));
                                return t ? t[e(495)]("x")[0] : this[e(525)][e(464)]
                            },
                            get stickyPlayerHeight() {
                                var e = s,
                                    t = this[e(522)]("FLOATING_SIZE", window.mobileCheck);
                                return t ? t[e(495)]("x")[1] : this[e(525)][window.mobileCheck ? e(465) : e(462)]
                            },
                            get stickyPlayerHeightMB() {
                                var e = s,
                                    t = this[e(522)]("FLOATING_SIZE_MB");
                                return t ? t[e(495)]("x")[1] : this[e(525)].stickyPlayerHeightMB
                            },
                            get sticky_h_position() {
                                var e = s;
                                return this[e(522)](e(481), window.mobileCheck) || this[e(525)][e(471)]
                            },
                            get sticky_v_position() {
                                var e = s;
                                return this.clientSettings(e(528), window.mobileCheck) || this[e(525)][e(539)]
                            },
                            get h_spacing() {
                                var e = s;
                                if (e(469) != e(469)) {
                                    var t = this[e(522)]("FLOATING_SIZE_MB");
                                    return t ? t.split("x")[1] : this[e(525)].stickyPlayerHeightMB
                                }
                                var n = this[e(522)](this[e(471)][e(483)]() + e(515), window.mobileCheck);
                                return null != n ? n : this[e(525)][e(520)]
                            },
                            get v_spacing() {
                                var e = s;
                                if (e(472) !== e(477)) {
                                    var t = this[e(522)](this[e(539)][e(483)]() + e(515), window.mobileCheck);
                                    return null != t ? t : this[e(525)][e(466)]
                                }
                                _0x1c1db8[_0x3a3bee] = _0x3f471c
                            },
                            get margin_bottom() {
                                var e = s;
                                if (e(494) !== e(506)) {
                                    var t = this[e(522)](e(508));
                                    return null != t ? t : this.defaultSettings.margin_bottom
                                }
                                var n = this.clientSettings(e(508));
                                return n != _0x5ba20a ? n : this[e(525)][e(501)]
                            }
                        }), a(this, s(540), (function() {
                            var e = s;
                            if (e(509) != e(509)) _0x355411[e(531)](_0x6e36bf[e(534)](_0x57c4ea));
                            else {
                                var t = document.createElement(e(502)),
                                    n = c[e(468)]();
                                if (t[e(498)]) t[e(498)][e(517)] = n;
                                else {
                                    if ("VoUrL" === e(537)) {
                                        var r = this[e(522)](e(492), _0x371c61[e(526)]);
                                        return r ? r[e(495)]("x")[1] : this.defaultSettings[_0x4b3ba2[e(526)] ? e(465) : e(462)]
                                    }
                                    t[e(531)](document[e(534)](n))
                                }
                                document.head[e(531)](t)
                            }
                        })), a(this, "buildCSSRules", (function() {
                            var e = s;
                            return c.cssRule = e(491)[e(493)](c[e(467)][e(501)], "px !important; .ubsticky_").concat(c[e(467)][e(471)], "{ ")[e(493)](c[e(467)][e(539)], e(478))[e(493)](c[e(467)][e(466)], e(486)).concat(c.floatingPlSettings[e(471)], " : ")[e(493)](c.floatingPlSettings.h_spacing, e(479)), c[e(463)] += e(541).concat(c[e(467)][e(471)], e(488)).concat(c.floatingPlSettings[e(471)], " .ub_pbpl-dimensions{ width : ")[e(493)](c[e(467)].stickyPlayerWidth, e(519))[e(493)](c[e(467)][e(462)], e(530)), c.cssRule += "@media (max-width: 481px) { .ubsticky_" [e(493)](c[e(467)].sticky_h_position, e(488))[e(493)](c[e(467)][e(471)], " .ub_pbpl-dimensions{ width : ")[e(493)](c.floatingPlSettings[e(464)], e(519))[e(493)](c.floatingPlSettings.stickyPlayerHeightMB, e(524)), c[e(463)] += "@media (max-width: 481px) { #unibots-video{margin:auto !important; margin-bottom : ".concat(c[e(467)][e(501)], e(521))[e(493)](c.floatingPlSettings[e(471)], "{ ")[e(493)](c[e(467)].sticky_v_position, e(478))[e(493)](c[e(467)][e(466)], "px !important; ")[e(493)](c.floatingPlSettings[e(471)], e(478))[e(493)](c[e(467)][e(520)], e(513)), c.cssRule
                        })), this[s(504)] = t, null == window.mobileCheck) throw new Error(s(485));
                    this[s(540)]()
                }
            },
            730: (e, t) => {
                function n(e, t) {
                    var a = r();
                    return (n = function(e, t) {
                        return a[e -= 376]
                    })(e, t)
                }

                function r() {
                    var e = ["14lfsHzD", "JS_VALUE", "appendChild", "CUSTOM_CONFIG", "text/javascript", "CSS_VALUE", "style", "2677096nqqKFp", "text/css", "Cannot call a class as a function", "applyCustomConfig", "217608AkFpKR", "162620aPhDPK", "pIunw", "17028doFstC", "clientData", "htdDf", "1458117LOJtNb", "body", "concat", "script", "defineProperty", "window.mobileCheck is required to use generatePlayerCss Plugin.", "INJECT_JS", "98KougrG", "1239342pKFNzI", "type", "252SofLOQ", "head", "2009635SLsImS", "INJECT_CSS", "createElement"];
                    return (r = function() {
                        return e
                    })()
                }! function(e, t) {
                    for (var r = n, a = e();;) try {
                        if (425817 == parseInt(r(395)) / 1 * (parseInt(r(385)) / 2) + -parseInt(r(388)) / 3 + -parseInt(r(382)) / 4 + -parseInt(r(400)) / 5 + -parseInt(r(396)) / 6 * (-parseInt(r(403)) / 7) + -parseInt(r(378)) / 8 + parseInt(r(398)) / 9 * (parseInt(r(383)) / 10)) break;
                        a.push(a.shift())
                    } catch (e) {
                        a.push(a.shift())
                    }
                }(r), t.injectCustomConfig = function e(t) {
                    var r, a, i, o, d = n,
                        s = this;
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError(n(380))
                        }(this, e), r = this, i = function() {
                            var e, t, n, r = d;
                            if (null !== (e = null === (t = s[r(386)]) || void 0 === t || null === (n = t[r(406)]) || void 0 === n ? void 0 : n.IS_CUSTOM_CONFIG_ENABLE) && void 0 !== e && e) {
                                var a, i;
                                if (null !== (a = s[r(386)]) && void 0 !== a && a.CUSTOM_CONFIG[r(394)]) {
                                    var o = document[r(402)](r(391));
                                    o.type = r(407);
                                    var c = "" [r(390)](s[r(386)][r(406)][r(404)]);
                                    o.textContent = c, document[r(389)][r(405)](o)
                                }
                                if (null !== (i = s[r(386)]) && void 0 !== i && i[r(406)][r(401)]) {
                                    var l = document[r(402)](r(377));
                                    l[r(397)] = r(379), l[r(405)](document.createTextNode(s[r(386)].CUSTOM_CONFIG[r(376)])), document[r(399)][r(405)](l)
                                }
                            }
                        }, o = n, (a = d(381)) in r ? Object[o(392)](r, a, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : o(387) === o(384) ? _0x33fa9f[_0x3c20de] = _0x1c8791 : r[a] = i, this[d(386)] = t, null == window.mobileCheck) throw new Error(d(393));
                    this[d(381)](this.clientData)
                }
            },
            754: () => {},
            384: (e, t, n) => {
                "use strict";

                function r() {
                    var e = ["petbasics.com", "throw", "ubpSocket can't be null, Make Sure Soket Initalize!", "pbjsBidsAdjustment", "WcAjH", "GEO_PARAMS", "GROSS_PERCENTAGE", "AD_SOURCES", "tRbTZ", "tKqIl", "0.36", "dvFxY", "159939", "GwvjC", "some", "pbVideo", "storeAds", "debug", "que", "BIDDER", "152media.info", "bidderSettings", "pbjs", "ubp_pbjs", "PLAYER_HEIGHT_MB", "call", "rJXuo", "Cannot call a class as a function", "NfSdy", "instream", "sort", "USD", "bidder", "198430HGxQaQ", "iterator", "isArray", "PLAYER_HEIGHT", "REGION", "48VAQvwp", "adId", "wrap", "net", "location", "defineProperty", "testAds", "openx.com", "400x225", "forEach", "cpm", "pbjsStoreBidResponse", "relaxed", "length", "23976", "addAdUnits", "client", "pbjs can't be null, Make Sure prebid.js is Integrated", "_clientData", "SdklA", "2249:489448157", "GEO", "prev", "YzLAs", "_prebidRegions", "development", "defaultCpm", "jTNOF", "OfwPX", "44586AVomaE", "3699479bgmooo", "response", "undefined", "map", "mediaTypes", "region", "from", "db88f10a-04d1-4938-a1ef-68986a6e393d", "videoAdUnit", "push", "fakeBidResponse", "MRgfb", "590eb51e-f453-46cc-a367-6aa61ed331e4", "/cache", "60c32c42465aac2", "storeBiddersData", "appnexus.com", "tBTUd", "PREBID", "6nYOdVk", "imaNonServedAd", "https://prebid-server.rubiconproject.com/cache", "biddersData", "name", "oXcGO", "next", "544059fitifQ", "JnshC", "pbjsQueuePusher", "imaServedAd", "DEFAULT_CPM", "log", "BikOx", "prebid-server-sjc2.rubiconproject.com", "assign", "testBids", "emit", "requesting test bids", "appnexus", "1557800rbCEfO", "pbjsSetupSupplyChain", "prebidAds", "541212869", "env", "vastUrl", "545814lBpOPt", "pbvideo|video|*", "2e97544b992fa7", "gWMMb", "constructor", "FLOOR", "openx", "0.30", "type", "gross", "XrZIP", "ubpSocket", "OedhO", "13232361", "PARAMS", "generalSettings", "floor", "toString", "LtCpR", "onetag.com", "pbvideo", "45383c36-4073-4a5d-92ee-2f3f9e91cad2", "split", "_testAds", "_defaultCpm", "_geoData", "https://video.unibots.in/prebid-player/openx.xml", "done", "bids", "40Vuuggm", "ad_request", "slice", "resolve", "1.0", "params", "Bid available", "Set", "OcIMr", "vastXml", "455d25d36e0c6e4", "addBidders", "vOoiN", "adTagUrls", "bidsResponse", "PLAYER_WIDTH_MB", "IS_ACTIVE", "parent", "18346rTwjtO", "pbjsCreateBidders", "hostname", "hasOwnProperty", "stop", "adapterCode", "video", "pFELa", "getBidResponses", "PLAYER_WIDTH", "0.35", "_ubpSocket", "pubmatic.com", "pbjsRequstBids", "rubicon", "country", "EMIT_LOGS", "test", "video/x-flv", "prebidRegions", "cYysC", "video/mp4", "NGuBB", "DATA", "message", "content_video", "MODE", "ENABLED", "0.00", "setConfig", "auto_play_sound_off", "clientData can't be null, Make Sure Client Data Passed on Prebid Init!", "keys", "compareFloorsWithRecievedData", "yNfUl", "schainConfig", "@@iterator", "mobileCheck", "prototype", "elXAM", "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "clientData", "GPFcc", "TeSCu", "11798", "WFSfu", "rubiconproject.com", "return", "152M49", "https://sin3-ib.adnxs.com/vast_track/v2?info=aAAAAAMArgAFAQmE78BkAAAAABEH-kVN_u69bBmE78BkAAAAACDLgcAuKAAw7Ug47UhA0-hISLuv1AFQ6dGnBljDlQtiAklOaAFwAXgAgAECiAEBkAGABZgB6AKgAQCoAcuBwC6wAQE.&s=216935970ec0b11d25983d17d93e4f4628047818&event_type=1&redir=https%3A%2F%2Fsin3-ib.adnxs.com%2Fab%3Fro%3D1%26an_audit%3D0%26referrer%3Dhttps%253A%252F%252F3c63-183-83-210-150.ngrok-free.app%252F%26e%3DwqT_3QL4DKB4BgAAAwDWAAUBCITfg6YGEIf0l-rk3_vebBjzjLn3nb2J-UoqNgkAAAECCBRAEQEHNAAAFEAZAAAA4HoUFEAhERIAKREJADERG6gw6dGnBjjtSEDtSEgCUMuBwC5YnPFbYABoi8akAXiu0gWAAQGKAQNVU0SSBQb0gQGYAQGgAQGoAQGwAQC4AQPAAQTIAQLQAQDYAQDgAQDwAQD6AQgxMzIzMjM2MYoCKXVmKCdhJywgMjUyOTg4NSwgMCk7dWYoJ3InLCA5NzUxNzc3MSwgMCk7kgKtBCFtV1JiZ0FpMi1Md0tFTXVCd0M0WUFDQ2M4VnN3QURnQVFBUkk3VWhRNmRHbkJsZ0FZUHNCYUFCd19FUjQ1c3dCZ0FHQVJZZ0I1c3dCa0FFQm1BRUJvQUVCcUFFRHNBRUF1UUh6cldxa0FBQVVRTUVCODYxcXBBQUFGRURKQVI1YUpqNnd0TklfMlFFQUFBQUFBQUR3UC1BQkFQVUJBQUFBQUpnQ0FLQUNBTFVDQUFBQUFMMENBQUFBQU1BQ0FNZ0NBTkFDQU5nQ0FPQUNBT2dDQVBnQ0FJQURBWmdEQWJvRENWTkpUak02TkRjM04tQURqVVNJQkFDUUJBQ1lCQUhCQkFBQUFBQUFBQUFBeVFRQUFBQUFBQUFBQU5nRUFQRUVBQUFBQQUjIENJQmFrbHFRVQUOAEEBqAg3RUYNDQEQCEJCUQEICQEAeRUoDEFBQU4yKAAAWi4oADw0QVdnd2g3cUJTWUlBeElpAUnwT1AxSHh4QjM2LWwxYnRuVlBKWVM3aVBMOVo0ZkxIM3ZfZk15NkFMOTVGdkFGaE1QZkF2Z0YzYlNhQVlJR0ExVlRSSWdHQUpBR0FaZ0dBS0VHAYMBASxGRUNvQmdHeUJpUUoBEA0BAFINCAEBAFoBBQ0BAGgNCFhBQUFDNEJnby6aApUBIWV3OHltZ2kyLV0xKG5QRmJJQVFvQURFAS4BAVRVUURvSlUwbE9Nem8wTnpjM1FJMUVTMSEMUEFfVREMDEFBQVcdDABZHQwAYR0MAGMdDBBlQUNKQR0Q8IbCAj9odHRwOi8vcHJlYmlkLm9yZy9kZXYtZG9jcy9zaG93LXZpZGVvLXdpdGgtYS1kZnAtdmlkZW8tdGFnLmh0bWzYAvfpA-ACrZhI6gIraHR0cHM6Ly8zYzYzLTE4My04My0yMTAtMTUwLm5ncm9rLWZyZWUuYXBwL_ICEQoGQURWX0lEEgdtcgUUCENQRwUUGDU3NTkzNjQBFAgFQ1ABE7gIMjE5Njk5NzTyAhAKCEFEVl9GUkVREgQ0NDE28gINCghSRU1fVVNFUhIBMPICDAkjGENPREUSAPIBDwFaEQ8QCwoHQ1AVDhAJCgVJTwFjBADyARoESU8VGjgTCg9DVVNUT01fTU9ERUwNJAgaChYyFgAcTEVBRl9OQU0FaggeCho2HQAIQVNUAT4QSUZJRUQBYhwNCghTUExJVAFN0AEwgAMAiAMBkAMAmAMXoAMBqgMAwAPgqAHIAwDYAwDgAwDoAwD4AwGABACSBA0vdXQvdjMvKazwUpgEAKIEDjE4My44My4yMTAuMTUwqAS58g2yBBAIARAEGIAFIOgCKAIwADgDuAQAwASA2rgiyAQA0gQOOTMyNSNTSU4zOjQ3NzfaBAIIAeAEAPAEoVMgiAUBmAUAoAX_EQEUAcAFAMkFqY0U8D_SBQkJCQx4AADYBQHgBQHwBcOVC_oFBAgAEACQBgGYBgC4BgDBBgklKPA_0Ab1L9oGFgoQCREZAXAQABgA4AYE8gYCCACABwGIBwCgB0DIB67SBdIHDRVkASYI2gcGAV1wGADgBwDqBwIIAPAH1rgLiggCEACVCAAAgD-YCAE.%26s%3Da04a3102b33dbbb8ea10de3998ab49dcb8125242&pb_uuid=pb_4e72a005", "is_active", "72523a5121ae62"];
                    return (r = function() {
                        return e
                    })()
                }

                function a(e, t) {
                    var n = r();
                    return (a = function(e, t) {
                        return n[e -= 467]
                    })(e, t)
                }

                function i(e, t) {
                    var n = a;
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, i = new Array(t); r < t; r++) n(564) != n(564) ? _0xd50ab7 = _0x562ef4 : i[r] = e[r];
                    return i
                }

                function o(e, t, n, r, i, o, d) {
                    var s = a;
                    try {
                        if ("NGuBB" !== s(654)) {
                            if (!(_0x2e8695 instanceof _0x2d61f6)) throw new _0x5710b0(s(499))
                        } else var c = e[o](d),
                            l = c.value
                    } catch (e) {
                        return void n(e)
                    }
                    c[s(612)] ? t(l) : s(498) == s(498) ? Promise[s(617)](l).then(r, i) : this[s(627)][s(549)](_0x118488)
                }

                function d(e, t, n) {
                    return t in e ? Object[a(515)](e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                n.r(t), n.d(t, {
                        prebid: () => s
                    }),
                    function(e, t) {
                        for (var n = a, r = e();;) try {
                            if (295617 == -parseInt(n(566)) / 1 + -parseInt(n(632)) / 2 + parseInt(n(539)) / 3 * (-parseInt(n(510)) / 4) + parseInt(n(505)) / 5 + -parseInt(n(559)) / 6 * (-parseInt(n(540)) / 7) + parseInt(n(614)) / 8 * (parseInt(n(585)) / 9) + parseInt(n(579)) / 10) break;
                            r.push(r.shift())
                        } catch (e) {
                            r.push(r.shift())
                        }
                    }(r);
                var s = function e(t) {
                    var n, r, s, c, l = a,
                        u = this,
                        _ = t._pbjs,
                        f = t[l(608)],
                        x = void 0 !== f && f,
                        v = t[l(643)],
                        p = t[l(528)],
                        b = t[l(610)],
                        m = t[l(534)];
                    if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError(a(499))
                        }(this, e), d(this, l(600), {
                            prebidTimeout: 5e3,
                            prebidBidRequestCounter: 0,
                            set defaultCpm(e) {
                                this[l(609)] = e
                            },
                            get defaultCpm() {
                                return this[l(609)]
                            }
                        }), d(this, l(581), {
                            adTagUrls: [],
                            biddersData: {},
                            set storeAds(e) {
                                var t = l;
                                this[t(627)][t(549)](e)
                            },
                            get getAllAds() {
                                var e = l;
                                return e(485) != e(485) ? _0x5e69aa * _0x230493.GROSS_PERCENTAGE / 100 : this[e(627)]
                            },
                            get ad() {
                                return this[l(627)][0]
                            },
                            clearAllAds: function() {
                                var e = l;
                                if (e(529) !== e(639)) return this[e(627)][e(523)] > 0 && (this[e(627)] = []), this.adTagUrls[e(523)];
                                this.bids.push(_0x136c66)
                            },
                            storeBiddersData: function(e) {
                                var t = l;
                                Object.assign(this[t(562)], d({}, e[t(491)], {
                                    params: e.PARAMS,
                                    floor: e[t(590)],
                                    is_active: e[t(630)],
                                    type: e.TYPE,
                                    grossPercent: e[t(478)]
                                })), "rubicon" == e.BIDDER && (this.biddersData[t(646)][t(619)][t(638)] = {
                                    language: "en"
                                })
                            }
                        }), d(this, "videoAdUnit", {
                            code: l(487),
                            mediaTypes: {
                                video: {
                                    context: l(501),
                                    mimes: [l(653), l(650)],
                                    protocols: [3, 6, 7, 8],
                                    playbackmethod: [2],
                                    placement: 1,
                                    api: [2],
                                    maxduration: 900,
                                    linearity: 1,
                                    skippable: !0,
                                    pos: 2
                                }
                            },
                            bids: [],
                            set addBidders(e) {
                                var t = l;
                                this[t(613)][t(549)](e)
                            },
                            set playerSize(e) {
                                this.playerSize = e
                            }
                        }), d(this, l(633), (function(e) {
                            var t = l;
                            if (e) {
                                if ("elXAM" !== t(671)) throw new _0x3ea7bb(t(672));
                                if (e[t(655)][t(519)]((function(e) {
                                        var n, r = t;
                                        if (e[r(630)] && e[r(531)]) {
                                            var a, i, o, d = null !== (a = null === (i = e[r(477)]) || void 0 === i || null === (o = i[r(509)]) || void 0 === o ? void 0 : o[r(659)]) && void 0 !== a ? a : "";
                                            if (("" != d || "" != disabledRegions) && Object[r(664)](u[r(651)])[r(523)] > 0) {
                                                if ("uOTFr" === r(652)) return _0x91d422(_0x2cc312) || _0x347d8b(_0x420bbe) || _0x405377(_0x75f55d) || _0x1e1c6f();
                                                var s = d[r(607)](","),
                                                    c = !1;
                                                s[r(519)]((function(e) {
                                                    var t = r;
                                                    t(572) !== t(500) ? u.prebidRegions[t(635)](e) && (c = u[t(651)][e][t(486)]((function(e) {
                                                        var n = t;
                                                        if ("SVcRY" !== n(567)) return e == u[n(647)];
                                                        _0x3cc181[n(596)][n(576)](n(615), {
                                                            website: _0x3ecc4d[n(631)].location.hostname,
                                                            bidder: _0x56971f.bidder,
                                                            adTagName: _0x511583.bidder
                                                        })
                                                    }))) : _0x139626[t(549)](_0x23452c)
                                                })), c && ("VjMCF" !== r(622) ? u[r(548)][r(625)] = {
                                                    bidder: e.BIDDER,
                                                    params: e[r(599)]
                                                } : _0x567e45(_0x59dfd0))
                                            }
                                        } else !e[r(630)] || null !== (n = null == e ? void 0 : e.GEO) && void 0 !== n && n || (u[r(548)][r(625)] = {
                                            bidder: e.BIDDER,
                                            params: e[r(599)]
                                        });
                                        u[r(581)][r(555)](e)
                                    })), u[t(516)] || {
                                        CURRENT_CLIENT: "theuploadhub",
                                        LOCAL_URL: "http://localhost:8080",
                                        MODE: "production"
                                    }[t(658)] == t(535)) {
                                    if ("xMYjc" === t(557)) return _0x4e62f9 in _0x4b3723 ? _0x556d55[t(515)](_0x4ebe65, _0x1ee7a4, {
                                        value: _0x4e9d3a,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : _0x203038[_0x194418] = _0x160213, _0x132701;
                                    u[t(548)][t(625)] = {
                                        bidder: t(578),
                                        params: {
                                            placementId: "13232361",
                                            video: {
                                                skippable: !0,
                                                playback_method: [t(662)]
                                            }
                                        }
                                    }, u[t(581)][t(555)]({
                                        BIDDER: t(578),
                                        PARAMS: {
                                            placementId: t(598),
                                            video: {
                                                skippable: !0,
                                                playback_method: ["auto_play_sound_off"]
                                            }
                                        },
                                        FLOOR: 0,
                                        IS_ACTIVE: !0,
                                        TYPE: t(513),
                                        GROSS_PERCENTAGE: .01
                                    })
                                }
                            }
                        })), d(this, l(568), (function() {
                            var e = l;
                            u[e(495)][e(490)][e(549)]((function() {
                                var t = e;
                                u.ubp_pbjs[t(525)](u[t(548)]), u[t(475)](), u[t(495)][t(661)]({
                                    cache: {
                                        url: t(561)
                                    },
                                    bidderTimeout: 5e3,
                                    video: {
                                        providers: [{
                                            divId: t(657),
                                            vendorCode: 2,
                                            playerConfig: {
                                                params: {
                                                    adPluginConfig: {
                                                        numRedirects: 10
                                                    },
                                                    vendorConfig: {
                                                        controls: !0,
                                                        autoplay: !0,
                                                        preload: "auto"
                                                    }
                                                }
                                            }
                                        }]
                                    },
                                    deviceAccess: !0,
                                    userSync: {
                                        syncsPerBidder: 0,
                                        syncDelay: 12e3,
                                        filterSettings: {
                                            iframe: {
                                                bidders: "*",
                                                filter: "include"
                                            }
                                        },
                                        enableOverride: !0,
                                        auctionDelay: 500
                                    }
                                }), u[t(580)]()
                            }))
                        })), d(this, "pbjsBidsAdjustment", (function() {
                            var e = l;
                            if (Object.keys(u[e(581)].biddersData).length > 0)
                                if ("wfCgG" === e(476)) _0x5380df = _0x2d4e1a[e(502)]((function(t, n) {
                                    return n[e(520)] - t.cpm
                                }));
                                else {
                                    var t = function(t) {
                                        var n = e,
                                            r = u[n(581)][n(562)][t];
                                        r[n(470)] && r[n(593)] == n(594) ? n(551) == n(551) ? Object[n(574)](u[n(495)][n(493)], d({}, t, {
                                            bidCpmAdjustment: function(e) {
                                                return e * r[n(478)] / 100
                                            }
                                        })) : this.playerSize = _0xf04274 : r[n(470)] && Object[n(574)](u[n(495)][n(493)], d({}, t, {
                                            storageAllowed: !0
                                        }))
                                    };
                                    for (var n in u.prebidAds[e(562)]) t(n)
                                }
                        })), d(this, l(645), (s = regeneratorRuntime.mark((function e(t) {
                            var n, r, i, o, d = a;
                            return regeneratorRuntime[d(512)]((function(e) {
                                var a = d;
                                if (a(674) != a(674)) return this.adTagUrls;
                                for (;;) switch (e[a(532)] = e[a(565)]) {
                                    case 0:
                                        return n = t[a(489)], r = void 0 !== n && n, i = t.queue, o = void 0 !== i && i, t[a(569)], t[a(560)], e.abrupt(a(467), new Promise((function(e, t) {
                                            var n = a;
                                            u.testAds ? n(533) != n(533) ? _0x5ab7bf({
                                                response: "No bid received",
                                                status: !1
                                            }) : (console[n(571)](n(577)), e({
                                                response: u[n(575)](),
                                                status: !0
                                            })) : (o && u[n(568)](r), void 0 !== u[n(596)] && u.videoAdUnit[n(613)][n(519)]((function(e) {
                                                var t = n;
                                                u[t(596)][t(576)](t(615), {
                                                    website: window[t(631)][t(514)][t(634)],
                                                    bidder: e[t(504)],
                                                    adTagName: e.bidder
                                                })
                                            })), u[n(495)].requestBids({
                                                bidsBackHandler: function(r) {
                                                    var a = n;
                                                    u.generalSettings.prebidBidRequestCounter++;
                                                    try {
                                                        Object[a(664)](r)[a(523)] > 0 ? e({
                                                            response: u.ubp_pbjs[a(640)](),
                                                            status: !0
                                                        }) : t({
                                                            response: "No bid received",
                                                            status: !1
                                                        })
                                                    } catch (e) {
                                                        console.warn(e), t({
                                                            response: e[a(656)],
                                                            status: !1
                                                        })
                                                    }
                                                }
                                            }))
                                        })));
                                    case 2:
                                    case "end":
                                        return e[a(636)]()
                                }
                            }), e)
                        })), c = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(n, r) {
                                var i = s.apply(e, t);

                                function d(e) {
                                    var t = a;
                                    t(480) === t(483) ? _0x4ec254[t(548)][t(625)] = {
                                        bidder: _0x467575.BIDDER,
                                        params: _0x5ef19c[t(599)]
                                    } : o(i, n, r, d, c, t(565), e)
                                }

                                function c(e) {
                                    var t = a;
                                    if ("mKFQu" !== t(595)) o(i, n, r, d, c, t(473), e);
                                    else if (typeof _0x4be3fa !== t(542) && null != _0x3044fe[_0x48cddf[t(506)]] || null != _0x3e922f[t(668)]) return _0x1559ba[t(546)](_0x548932)
                                }
                                d(void 0)
                            }))
                        }, function(e) {
                            return c.apply(this, arguments)
                        })), d(this, l(665), (function(e, t, n) {
                            var r = l;
                            if (e && u[r(581)][r(562)][t] && n > 0) {
                                var a = u[r(581)].biddersData[t][r(601)];
                                return 0 !== a && a <= n
                            }
                            return !0
                        })), d(this, l(521), (function(e) {
                            var t, n, r = l,
                                o = {
                                    CURRENT_CLIENT: "theuploadhub",
                                    LOCAL_URL: "http://localhost:8080",
                                    MODE: "production"
                                }[r(658)] == r(535),
                                d = !1;
                            if (e) {
                                var s = o ? u.fakeBidResponse[r(628)] : e[r(541)][r(487)][r(613)];
                                if (s.length > 0) {
                                    if (r(675) != r(675)) return _0x2adfec[r(520)] - _0x283242[r(520)];
                                    var c, _, f = s.filter((function(e) {
                                        var t = r;
                                        if (t(626) !== t(537)) return e[t(520)] >= u[t(600)][t(536)];
                                        var n = _0x55cba0.prebidAds[t(562)][_0x107481];
                                        n.is_active && n[t(593)] == t(594) ? _0x26ef60[t(574)](_0x3afbce.ubp_pbjs[t(493)], _0x5f1aed({}, _0x3fe99a, {
                                            bidCpmAdjustment: function(e) {
                                                return e * n[t(478)] / 100
                                            }
                                        })) : n[t(470)] && _0x58e7b6[t(574)](_0x10105c[t(495)][t(493)], _0x9b636b({}, _0x51407c, {
                                            storageAllowed: !0
                                        }))
                                    }));
                                    f[r(523)] > 0 && f[r(523)] <= 1 ? t = f : f[r(523)] > 1 ? t = s.sort((function(e, t) {
                                        var n = r;
                                        return t[n(520)] - e[n(520)]
                                    })) : (t = s, d = !0);
                                    var x, v, p = [];
                                    if (d && t.length > 0) {
                                        var b = [];
                                        (n = t, function(e) {
                                            if (Array[a(507)](e)) return i(e)
                                        }(n) || function(e) {
                                            var t = a;
                                            if ("undefined" != typeof Symbol && null != e[Symbol[t(506)]] || null != e["@@iterator"]) return Array[t(546)](e)
                                        }(n) || function(e, t) {
                                            var n = a;
                                            if (e) {
                                                if ("string" == typeof e) return i(e, t);
                                                var r = Object[n(670)][n(602)][n(497)](e)[n(616)](8, -1);
                                                return "Object" === r && e.constructor && (r = e[n(589)][n(563)]), "Map" === r || r === n(621) ? Array[n(546)](e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/ [n(649)](r) ? i(e, t) : void 0
                                            }
                                        }(n) || function() {
                                            throw new TypeError(a(672))
                                        }())[r(543)]((function(e) {
                                            var t = r;
                                            if (u[t(665)](d, e[t(637)], e.cpm)) {
                                                if (t(597) != t(597)) return _0x5bd5e6.cpm - _0x26ee9a[t(520)];
                                                b[t(549)](e)
                                            }
                                        })), b[r(523)] > 0 && p[r(549)](b[r(523)] > 1 ? b[r(502)]((function(e, t) {
                                            var n = r;
                                            return t[n(520)] - e[n(520)]
                                        }))[0] : Array[r(507)](b) ? b[0] : b)
                                    } else p[r(549)](t[r(523)] > 1 ? t.sort((function(e, t) {
                                        return t.cpm - e.cpm
                                    }))[0] : Array[r(507)](t) ? t[0] : t);
                                    p[r(523)] > 0 && (r(603) === r(538) ? _0x459d60.vastUrl && (_0x1584bf[r(581)].storeAds = {
                                        adId: _0x43cb58.adId,
                                        adapterCode: _0x2d3a16[r(637)],
                                        vastUrl: _0x524491[r(584)],
                                        cpm: _0x32c4d9[r(520)],
                                        vastXml: null !== (x = null !== (v = null === _0x20ceb7 || void 0 === _0x107af3 ? void 0 : _0x547a7d[r(623)]) && void 0 !== v ? v : null === _0x9c5a1f || void 0 === _0xff51a0 ? void 0 : _0x5850d5.ad) && void 0 !== x && x,
                                        servedStatus: !1,
                                        shouldServe: !0
                                    }) : p[r(519)]((function(e) {
                                        var t, n, a = r;
                                        e[a(584)] && (u[a(581)][a(488)] = {
                                            adId: e[a(511)],
                                            adapterCode: e[a(637)],
                                            vastUrl: e.vastUrl,
                                            cpm: e[a(520)],
                                            vastXml: null !== (t = null !== (n = null == e ? void 0 : e[a(623)]) && void 0 !== n ? n : null == e ? void 0 : e.ad) && void 0 !== t && t,
                                            servedStatus: !1,
                                            shouldServe: !0
                                        })
                                    }))), {
                                        env: {
                                            CURRENT_CLIENT: "theuploadhub",
                                            LOCAL_URL: "http://localhost:8080",
                                            MODE: "production"
                                        }
                                    }[r(583)][r(658)] !== r(535) && null !== (c = null === (_ = u.clientData) || void 0 === _ ? void 0 : _[r(648)]) && void 0 !== c && c && emitBidsData[r(523)] > 0 && u.ubpSocket[r(576)]("prebid", {
                                        data: {
                                            playerName: window[r(631)].location[r(634)],
                                            country: u[r(647)],
                                            bidsResponse: t
                                        }
                                    })
                                }
                            }
                        })), d(this, l(575), (function() {
                            var e = l;
                            if (e(481) !== e(666)) return {
                                pbVideo: {
                                    bids: [{
                                        adId: e(624),
                                        adapterCode: e(591),
                                        vastUrl: e(611),
                                        vastImpUrl: e(611)
                                    }]
                                }
                            };
                            _0x3b1a8a[e(519)]((function(t) {
                                var n, r, a = e;
                                t[a(584)] && (_0x64d175[a(581)][a(488)] = {
                                    adId: t.adId,
                                    adapterCode: t[a(637)],
                                    vastUrl: t.vastUrl,
                                    cpm: t[a(520)],
                                    vastXml: null !== (n = null !== (r = null == t ? void 0 : t.vastXml) && void 0 !== r ? r : null == t ? void 0 : t.ad) && void 0 !== n && n,
                                    servedStatus: !1,
                                    shouldServe: !0
                                })
                            }))
                        })), d(this, "pbjsSetupSupplyChain", (function() {
                            var e = l,
                                t = [],
                                n = [];
                            Object[e(664)](u.prebidAds[e(562)])[e(543)]((function(r) {
                                var a = e;
                                t[a(549)](r), null != u.schainConfig[r] && n[a(549)](u.schainConfig[r])
                            })), t[e(523)] > 0 && n.length > 0 && u.ubp_pbjs.setBidderConfig({
                                bidders: t,
                                config: {
                                    schain: {
                                        validation: e(522),
                                        config: {
                                            ver: e(618),
                                            complete: 1,
                                            nodes: n
                                        }
                                    }
                                }
                            })
                        })), d(this, l(667), {
                            pubmatic: {
                                asi: l(644),
                                sid: l(484),
                                hp: 1
                            },
                            oftmedia: {
                                asi: l(492),
                                sid: l(468),
                                hp: 1
                            },
                            appnexus: {
                                asi: l(556),
                                sid: l(676),
                                hp: 1
                            },
                            onetag: {
                                asi: l(604),
                                sid: l(554),
                                hp: 1
                            },
                            rubicon: {
                                asi: l(678),
                                sid: l(524),
                                hp: 1
                            },
                            openx: {
                                asi: l(517),
                                sid: l(582),
                                hp: 1
                            },
                            adtelligent: {
                                asi: "adtelligent.com",
                                sid: "556372",
                                hp: 1
                            }
                        }), d(this, l(550), {
                            bidsResponse: [{
                                bidderCode: l(646),
                                width: 400,
                                height: 225,
                                statusMessage: l(620),
                                adId: l(471),
                                requestId: l(587),
                                transactionId: l(547),
                                auctionId: l(552),
                                mediaType: l(638),
                                source: l(526),
                                seatBidId: "8122dfdd-adf9-42ef-9e10-0b3f7bc7d843",
                                cpm: .61,
                                currency: l(503),
                                creative_id: "2249:489448157",
                                creativeId: l(530),
                                ttl: 900,
                                netRevenue: !0,
                                meta: {
                                    networkId: 2249,
                                    advertiserDomains: [l(472)],
                                    mediaType: l(638)
                                },
                                playerWidth: 400,
                                playerHeight: 225,
                                adapterCode: "rubicon",
                                adserverTargeting: {
                                    hb_pb: l(592),
                                    hb_cache_path: l(553),
                                    hb_uuid: l(606),
                                    hb_bidder: l(646),
                                    hb_cache_host: l(573),
                                    hb_adid: l(471),
                                    hb_size: l(518),
                                    hb_source: l(526),
                                    hb_format: l(638),
                                    hb_adomain: "petbasics.com",
                                    hb_cache_id: l(606)
                                },
                                videoCacheKey: "45383c36-4073-4a5d-92ee-2f3f9e91cad2",
                                vastUrl: l(469),
                                metrics: {
                                    "requestBids.usp": 2.400000035762787,
                                    "requestBids.priceFloors": 1.2000000476837158,
                                    "requestBids.validate": .5,
                                    "requestBids.makeRequests": 4.299999952316284,
                                    "requestBids.total": 587.6999999880791,
                                    "requestBids.callBids": 571.6999999880791,
                                    "adapter.client.validate": .7000000476837158,
                                    "adapters.client.rubicon.validate": .7000000476837158,
                                    "adapter.client.buildRequests": 4.900000035762787,
                                    "adapters.client.rubicon.buildRequests": 4.900000035762787,
                                    "adapter.client.total": 569,
                                    "adapters.client.rubicon.total": 569,
                                    "adapter.client.net": 556.6000000238419,
                                    "adapters.client.rubicon.net": 556.6000000238419,
                                    "adapter.client.interpretResponse": 1.399999976158142,
                                    "adapters.client.rubicon.interpretResponse": 1.399999976158142,
                                    "addBidResponse.validate": .3999999761581421,
                                    "addBidResponse.priceFloors": 1,
                                    "addBidResponse.total": 4.599999964237213
                                },
                                originalCpm: .36,
                                originalCurrency: l(503),
                                floorData: {
                                    floorValue: .25,
                                    floorRule: l(586),
                                    floorRuleValue: .25,
                                    floorCurrency: l(503),
                                    cpmAfterAdjustments: .36,
                                    enforcements: {
                                        enforceJS: !0,
                                        enforcePBS: !1,
                                        floorDeals: !1,
                                        bidAdjustment: !0
                                    },
                                    matchedFields: {
                                        adUnitCode: l(605),
                                        mediaType: l(638),
                                        size: l(518)
                                    }
                                },
                                responseTimestamp: 1689827682082,
                                requestTimestamp: 1689827681515,
                                bidder: l(646),
                                adUnitCode: l(487),
                                timeToRespond: 567,
                                pbLg: l(660),
                                pbMg: l(592),
                                pbHg: l(482),
                                pbAg: l(642),
                                pbDg: l(482),
                                pbCg: "",
                                size: "400x225"
                            }]
                        }), null == _) throw new Error(l(527));
                    if (null == v) throw new Error(l(474));
                    if (null == p) throw new Error(l(663));
                    null != b && (l(588) !== l(677) ? (this.country = b[l(647)], this[l(545)] = b[l(545)]) : _0x17a8ab(_0x4f959c)), this.ubp_pbjs = _, this[l(596)] = v, this.testAds = x, this.pbjs = this[l(494)] || {}, this[l(495)][l(490)] = this[l(495)][l(490)] || [], this[l(673)] = p, this[l(651)] = m, Object[l(574)](this[l(548)][l(544)][l(638)], {
                        playerSize: [
                            [window[l(669)] ? this[l(673)][l(629)] : this[l(673)][l(641)], window[l(669)] ? this[l(673)][l(496)] : this.clientData[l(508)]]
                        ]
                    }), this.generalSettings.defaultCpm = null !== (n = null === (r = this[l(673)][l(479)][l(558)]) || void 0 === r ? void 0 : r[l(570)]) && void 0 !== n ? n : .3, 0 == this.generalSettings[l(536)] && (this[l(600)][l(536)] = .3)
                }
            },
            593: e => {
                "use strict";
                e.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')
            }
        },
        t = {};

    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n), i.exports
    }
    n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n(666), n(717)
})();