// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    var l, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ea = ca(this),
        q = function(a, b) {
            if (b) a: {
                var c = ea;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    q("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.g = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    q("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return fa(aa(this))
                }
            })
        }
        return a
    });
    var fa = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        ha = function(a) {
            return a.raw = a
        },
        v = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ia = function(a) {
            if (!(a instanceof Array)) {
                a = v(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ka = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a,
                b)
        },
        la = typeof Object.assign == "function" ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ka(d, e) && (a[e] = d[e])
            }
            return a
        };
    q("Object.assign", function(a) {
        return a || la
    });
    var ma = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        na = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (typeof Reflect != "undefined" && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                e === void 0 && (e = c);
                e = ma(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c,
                    e, d) || e
            }
        }(),
        oa;
    if (typeof Object.setPrototypeOf == "function") oa = Object.setPrototypeOf;
    else {
        var pa;
        a: {
            var qa = {
                    a: !0
                },
                ra = {};
            try {
                ra.__proto__ = qa;
                pa = ra.a;
                break a
            } catch (a) {}
            pa = !1
        }
        oa = pa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ta = oa,
        x = function(a, b) {
            a.prototype = ma(b.prototype);
            a.prototype.constructor = a;
            if (ta) ta(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ia = b.prototype
        },
        ua = function() {
            this.B = !1;
            this.o = null;
            this.j = void 0;
            this.g = 1;
            this.J = this.l = 0;
            this.A = null
        },
        va = function(a) {
            if (a.B) throw new TypeError("Generator is already running");
            a.B = !0
        };
    ua.prototype.C = function(a) {
        this.j = a
    };
    var wa = function(a, b) {
        a.A = {
            He: b,
            Kg: !0
        };
        a.g = a.l || a.J
    };
    ua.prototype.return = function(a) {
        this.A = {
            return: a
        };
        this.g = this.J
    };
    var xa = function(a, b, c) {
            a.g = c;
            return {
                value: b
            }
        },
        ya = function(a) {
            a.g = 0;
            a.l = 0
        },
        Aa = function(a) {
            a.l = 0;
            var b = a.A.He;
            a.A = null;
            return b
        },
        Ba = function(a) {
            this.g = new ua;
            this.j = a
        },
        Fa = function(a, b) {
            va(a.g);
            var c = a.g.o;
            if (c) return Ca(a, "return" in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }, b, a.g.return);
            a.g.return(b);
            return Da(a)
        },
        Ca = function(a, b, c, d) {
            try {
                var e = b.call(a.g.o, c);
                if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done) return a.g.B = !1, e;
                var f = e.value
            } catch (g) {
                return a.g.o =
                    null, wa(a.g, g), Da(a)
            }
            a.g.o = null;
            d.call(a.g, f);
            return Da(a)
        },
        Da = function(a) {
            for (; a.g.g;) try {
                var b = a.j(a.g);
                if (b) return a.g.B = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.g.j = void 0, wa(a.g, c)
            }
            a.g.B = !1;
            if (a.g.A) {
                b = a.g.A;
                a.g.A = null;
                if (b.Kg) throw b.He;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        Ga = function(a) {
            this.next = function(b) {
                va(a.g);
                a.g.o ? b = Ca(a, a.g.o.next, b, a.g.C) : (a.g.C(b), b = Da(a));
                return b
            };
            this.throw = function(b) {
                va(a.g);
                a.g.o ? b = Ca(a, a.g.o["throw"], b, a.g.C) : (wa(a.g, b), b = Da(a));
                return b
            };
            this.return = function(b) {
                return Fa(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Ha = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        Ia = function(a) {
            return Ha(new Ga(new Ba(a)))
        },
        Ja = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    q("Reflect", function(a) {
        return a ? a : {}
    });
    q("Reflect.construct", function() {
        return na
    });
    q("Reflect.setPrototypeOf", function(a) {
        return a ? a : ta ? function(b, c) {
            try {
                return ta(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    q("Promise", function(a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.j = function(g) {
            if (this.g == null) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.A()
                })
            }
            this.g.push(g)
        };
        var d = ea.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        };
        b.prototype.A = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (n) {
                        this.o(n)
                    }
                }
            }
            this.g = null
        };
        b.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.g = 0;
            this.l = void 0;
            this.j = [];
            this.C = !1;
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.o = function() {
            function g(n) {
                return function(m) {
                    k || (k = !0, n.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.I),
                reject: g(this.A)
            }
        };
        e.prototype.I = function(g) {
            if (g === this) this.A(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.M(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = g != null;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ?
                this.G(g) : this.B(g)
            }
        };
        e.prototype.G = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.A(k);
                return
            }
            typeof h == "function" ? this.P(h, g) : this.B(g)
        };
        e.prototype.A = function(g) {
            this.J(2, g)
        };
        e.prototype.B = function(g) {
            this.J(1, g)
        };
        e.prototype.J = function(g, h) {
            if (this.g != 0) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.l = h;
            this.g === 2 && this.K();
            this.L()
        };
        e.prototype.K = function() {
            var g = this;
            d(function() {
                    if (g.D()) {
                        var h = ea.console;
                        typeof h !== "undefined" && h.error(g.l)
                    }
                },
                1)
        };
        e.prototype.D = function() {
            if (this.C) return !1;
            var g = ea.CustomEvent,
                h = ea.Event,
                k = ea.dispatchEvent;
            if (typeof k === "undefined") return !0;
            typeof g === "function" ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : typeof h === "function" ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.l;
            return k(g)
        };
        e.prototype.L = function() {
            if (this.j != null) {
                for (var g = 0; g < this.j.length; ++g) f.j(this.j[g]);
                this.j =
                    null
            }
        };
        var f = new b;
        e.prototype.M = function(g) {
            var h = this.o();
            g.Ac(h.resolve, h.reject)
        };
        e.prototype.P = function(g, h) {
            var k = this.o();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (n) {
                k.reject(n)
            }
        };
        e.prototype.then = function(g, h) {
            function k(r, t) {
                return typeof r == "function" ? function(u) {
                    try {
                        n(r(u))
                    } catch (w) {
                        m(w)
                    }
                } : t
            }
            var n, m, p = new e(function(r, t) {
                n = r;
                m = t
            });
            this.Ac(k(g, n), k(h, m));
            return p
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Ac = function(g, h) {
            function k() {
                switch (n.g) {
                    case 1:
                        g(n.l);
                        break;
                    case 2:
                        h(n.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + n.g);
                }
            }
            var n = this;
            this.j == null ? f.j(k) : this.j.push(k);
            this.C = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var n = v(g), m = n.next(); !m.done; m = n.next()) c(m.value).Ac(h, k)
            })
        };
        e.all = function(g) {
            var h = v(g),
                k = h.next();
            return k.done ? c([]) : new e(function(n, m) {
                function p(u) {
                    return function(w) {
                        r[u] = w;
                        t--;
                        t == 0 && n(r)
                    }
                }
                var r = [],
                    t = 0;
                do r.push(void 0), t++, c(k.value).Ac(p(r.length -
                    1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    q("Object.setPrototypeOf", function(a) {
        return a || ta
    });
    q("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    q("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    q("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var n = typeof k;
            return n === "object" && k !== null || n === "function"
        }

        function d(k) {
            if (!ka(k, f)) {
                var n = new b;
                ba(k, f, {
                    value: n
                })
            }
        }

        function e(k) {
            var n = Object[k];
            n && (Object[k] = function(m) {
                if (m instanceof b) return m;
                Object.isExtensible(m) && d(m);
                return n(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        n = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [n, 3]
                        ]);
                    if (m.get(k) != 2 || m.get(n) != 3) return !1;
                    m.delete(k);
                    m.set(n, 4);
                    return !m.has(k) && m.get(n) == 4
                } catch (p) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.g = (g += Math.random() + 1).toString();
                if (k) {
                    k = v(k);
                    for (var n; !(n = k.next()).done;) n = n.value, this.set(n[0], n[1])
                }
            };
        h.prototype.set = function(k, n) {
            if (!c(k)) throw Error("Invalid WeakMap key");
            d(k);
            if (!ka(k, f)) throw Error("WeakMap key fail: " + k);
            k[f][this.g] = n;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ka(k, f) ? k[f][this.g] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ka(k, f) && ka(k[f],
                this.g)
        };
        h.prototype.delete = function(k) {
            return c(k) && ka(k, f) && ka(k[f], this.g) ? delete k[f][this.g] : !1
        };
        return h
    });
    q("Map", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [h, "s"]
                        ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var n = k.entries(),
                        m = n.next();
                    if (m.done || m.value[0] != h || m.value[1] != "s") return !1;
                    m = n.next();
                    return m.done || m.value[0].x != 4 || m.value[1] != "t" || !n.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] =
                    f();
                this.size = 0;
                if (h) {
                    h = v(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var n = d(this, h);
            n.list || (n.list = this[0][n.id] = []);
            n.pa ? n.pa.value = k : (n.pa = {
                next: this[1],
                Za: this[1].Za,
                head: this[1],
                key: h,
                value: k
            }, n.list.push(n.pa), this[1].Za.next = n.pa, this[1].Za = n.pa, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.pa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.pa.Za.next = h.pa.next, h.pa.next.Za =
                h.pa.Za, h.pa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Za = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).pa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).pa) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var n = this.entries(),
                    m; !(m = n.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var n = k && typeof k;
                n == "object" || n == "function" ? b.has(k) ? n = b.get(k) : (n = "" + ++g, b.set(k, n)) : n = "p_" + k;
                var m = h[0][n];
                if (m && ka(h[0], n))
                    for (h = 0; h < m.length; h++) {
                        var p = m[h];
                        if (k !== k && p.key !== p.key || k === p.key) return {
                            id: n,
                            list: m,
                            index: h,
                            pa: p
                        }
                    }
                return {
                    id: n,
                    list: m,
                    index: -1,
                    pa: void 0
                }
            },
            e = function(h, k) {
                var n = h[1];
                return fa(function() {
                    if (n) {
                        for (; n.head != h[1];) n = n.Za;
                        for (; n.next != n.head;) return n =
                            n.next, {
                                done: !1,
                                value: k(n)
                            };
                        n = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Za = h.next = h.head = h
            },
            g = 0;
        return c
    });
    q("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ka(b, d) && c.push(b[d]);
            return c
        }
    });
    q("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    q("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    var Ka = function(a, b, c) {
        if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    q("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return Ka(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    });
    q("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    q("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    });
    q("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    q("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    q("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    });
    q("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    });
    var La = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    q("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return La(this, function(b, c) {
                return [b, c]
            })
        }
    });
    q("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return La(this, function(b) {
                return b
            })
        }
    });
    q("Array.prototype.values", function(a) {
        return a ? a : function() {
            return La(this, function(b, c) {
                return c
            })
        }
    });
    q("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            };
            var e = [],
                f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == "function") {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    q("Set", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                            x: 4
                        }) != d || d.size != 2) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new Map;
            if (c) {
                c =
                    v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.g.size
        };
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.g.set(c, c);
            this.size = this.g.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.g.delete(c);
            this.size = this.g.size;
            return c
        };
        b.prototype.clear = function() {
            this.g.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.g.has(c)
        };
        b.prototype.entries = function() {
            return this.g.entries()
        };
        b.prototype.values = function() {
            return this.g.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    q("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ka(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    q("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ka(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    q("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Ka(this, null, "repeat");
            if (b < 0 || b > 1342177279) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    q("globalThis", function(a) {
        return a || ea
    });
    var Ma = function(a, b) {
        a = a !== void 0 ? String(a) : " ";
        return b > 0 && a ? a.repeat(Math.ceil(b / a.length)).substring(0, b) : ""
    };
    q("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Ka(this, null, "padStart");
            return Ma(c, b - d.length) + d
        }
    });
    q("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = Ka(this, null, "padStart");
            return d + Ma(c, b - d.length)
        }
    });
    q("Math.imul", function(a) {
        return a ? a : function(b, c) {
            b = Number(b);
            c = Number(c);
            var d = b & 65535,
                e = c & 65535;
            return d * e + ((b >>> 16 & 65535) * e + d * (c >>> 16 & 65535) << 16 >>> 0) | 0
        }
    });
    q("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
            b = b[Symbol.iterator].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Oa = Oa || {},
        y = this || self,
        z = function(a, b, c) {
            a = a.split(".");
            c = c || y;
            a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        Qa = function(a, b) {
            var c = Pa("CLOSURE_FLAGS");
            a = c && c[a];
            return a != null ? a : b
        },
        Pa = function(a, b) {
            a = a.split(".");
            b = b || y;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], b == null) return null;
            return b
        },
        Ra = function(a) {
            var b = typeof a;
            return b != "object" ? b : a ? Array.isArray(a) ?
                "array" : b : "null"
        },
        Sa = function(a) {
            var b = Ra(a);
            return b == "array" || b == "object" && typeof a.length == "number"
        },
        Ta = function(a) {
            var b = typeof a;
            return b == "object" && a != null || b == "function"
        },
        Ya = function(a) {
            return Object.prototype.hasOwnProperty.call(a, Ua) && a[Ua] || (a[Ua] = ++Xa)
        },
        Za = function(a) {
            a !== null && "removeAttribute" in a && a.removeAttribute(Ua);
            try {
                delete a[Ua]
            } catch (b) {}
        },
        Ua = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        Xa = 0,
        $a = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ab = function(a, b, c) {
            if (!a) throw Error();
            if (arguments.length > 2) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        bb = function(a, b, c) {
            bb = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? $a : ab;
            return bb.apply(null, arguments)
        },
        cb = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        db = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Ia = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.ej = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        },
        eb = function(a) {
            return a
        };

    function gb(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, gb);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    db(gb, Error);
    gb.prototype.name = "CustomError";
    var ib;
    var kb, lb = typeof String.prototype.Ng === "function",
        nb = typeof TextEncoder !== "undefined";

    function ob(a) {
        var b = !1;
        b = b === void 0 ? !1 : b;
        if (nb) {
            if (b && (lb ? !a.Ng() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
            a = (kb || (kb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (f < 128) d[c++] = f;
                else {
                    if (f < 2048) d[c++] = f >> 6 | 192;
                    else {
                        if (f >= 55296 && f <= 57343) {
                            if (f <= 56319 && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (g >= 56320 && g <= 57343) {
                                    f = (f - 55296) * 1024 + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };

    function pb(a) {
        y.setTimeout(function() {
            throw a;
        }, 0)
    };
    var sb = function(a, b) {
            var c = a.length - b.length;
            return c >= 0 && a.indexOf(b, c) == c
        },
        tb = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        ub = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        vb = function(a, b) {
            return a.indexOf(b) != -1
        },
        wb = function(a, b) {
            return vb(a.toLowerCase(), b.toLowerCase())
        },
        yb = function(a, b) {
            var c = 0;
            a = ub(String(a)).split(".");
            b = ub(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (f[0].length == 0 && g[0].length == 0) break;
                    c = xb(f[1].length == 0 ? 0 : parseInt(f[1], 10), g[1].length == 0 ? 0 : parseInt(g[1], 10)) || xb(f[2].length == 0, g[2].length == 0) || xb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (c == 0)
            }
            return c
        },
        xb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var zb = Qa(1, !0),
        Ab = Qa(610401301, !1),
        Bb = Qa(188588736, !0),
        Cb = Qa(645172343, zb),
        Db = Qa(653718497, zb);

    function Eb() {
        var a = y.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Fb, Gb = y.navigator;
    Fb = Gb ? Gb.userAgentData || null : null;

    function Hb(a) {
        return Ab ? Fb ? Fb.brands.some(function(b) {
            return (b = b.brand) && vb(b, a)
        }) : !1 : !1
    }

    function A(a) {
        return vb(Eb(), a)
    };

    function Ib() {
        return Ab ? !!Fb && Fb.brands.length > 0 : !1
    }

    function Jb() {
        return Ib() ? !1 : A("Opera")
    }

    function Lb() {
        return Ib() ? !1 : A("Trident") || A("MSIE")
    }

    function Mb() {
        return A("Firefox") || A("FxiOS")
    }

    function Nb() {
        return A("Safari") && !(Ob() || (Ib() ? 0 : A("Coast")) || Jb() || (Ib() ? 0 : A("Edge")) || (Ib() ? Hb("Microsoft Edge") : A("Edg/")) || (Ib() ? Hb("Opera") : A("OPR")) || Mb() || A("Silk") || A("Android"))
    }

    function Ob() {
        return Ib() ? Hb("Chromium") : (A("Chrome") || A("CriOS")) && !(Ib() ? 0 : A("Edge")) || A("Silk")
    };

    function Pb() {
        return Ab && Fb && Fb.platform ? Fb.platform === "Android" : A("Android")
    }

    function Qb() {
        return A("iPhone") && !A("iPod") && !A("iPad")
    };
    var Rb = function(a, b) {
            if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Sb = function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        };

    function Tb(a, b) {
        for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; d >= 0; --d) d in c && b.call(void 0, c[d], d, a)
    }
    var Ub = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = typeof a === "string" ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        Xb = function(a, b) {
            for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Yb = function(a, b, c) {
            var d = c;
            Sb(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        },
        Zb = function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e],
                        e, a)) return !0;
            return !1
        };

    function $b(a, b) {
        b = ac(a, b);
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function ac(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function bc(a, b) {
        b = cc(a, b);
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function cc(a, b) {
        for (var c = typeof a === "string" ? a.split("") : a, d = a.length - 1; d >= 0; d--)
            if (d in c && b.call(void 0, c[d], d, a)) return d;
        return -1
    }

    function dc(a, b) {
        return Rb(a, b) >= 0
    }

    function ec(a, b) {
        b = Rb(a, b);
        var c;
        (c = b >= 0) && fc(a, b);
        return c
    }

    function fc(a, b) {
        return Array.prototype.splice.call(a, b, 1).length == 1
    }

    function gc(a, b) {
        var c = 0;
        Tb(a, function(d, e) {
            b.call(void 0, d, e, a) && fc(a, e) && c++
        })
    }

    function hc(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function ic(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function jc(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = Ta(e) ? "o" + Ya(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    }

    function kc(a, b) {
        a.sort(b || lc)
    }

    function lc(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function mc(a) {
        for (var b = [], c = 0; c < a; c++) b[c] = "";
        return b
    };
    var nc = function(a) {
        nc[" "](a);
        return a
    };
    nc[" "] = function() {};
    var oc = function(a, b) {
            try {
                return nc(a[b]), !0
            } catch (c) {}
            return !1
        },
        qc = function(a) {
            var b = pc;
            return Object.prototype.hasOwnProperty.call(b, 8) ? b[8] : b[8] = a(8)
        };
    var rc = Jb(),
        sc = Lb(),
        tc = A("Edge"),
        uc = A("Gecko") && !(wb(Eb(), "WebKit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        vc = wb(Eb(), "WebKit") && !A("Edge"),
        wc = Ab && Fb && Fb.platform ? Fb.platform === "macOS" : A("Macintosh"),
        xc = Pb(),
        yc = Qb(),
        zc = A("iPad"),
        Ac = A("iPod"),
        Bc = Qb() || A("iPad") || A("iPod"),
        Cc;
    a: {
        var Dc = "",
            Ec = function() {
                var a = Eb();
                if (uc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (tc) return /Edge\/([\d\.]+)/.exec(a);
                if (sc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (vc) return /WebKit\/(\S+)/.exec(a);
                if (rc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ec && (Dc = Ec ? Ec[1] : "");
        if (sc) {
            var Fc, Gc = y.document;
            Fc = Gc ? Gc.documentMode : void 0;
            if (Fc != null && Fc > parseFloat(Dc)) {
                Cc = String(Fc);
                break a
            }
        }
        Cc = Dc
    }
    var Hc = Cc,
        pc = {},
        Ic = function() {
            return qc(function() {
                return yb(Hc, 8) >= 0
            })
        };
    var Kc = Mb(),
        Lc = A("Android") && !(Ob() || Mb() || Jb() || A("Silk")),
        Mc = Ob();
    Nb();
    var Nc = {},
        Oc = null,
        Qc = function(a, b) {
            b === void 0 && (b = 0);
            Pc();
            b = Nc[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    n = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + n + g + h + k
            }
            n = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    n = a[e + 1], k = b[(n & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | n >> 4] + k + d
            }
            return c.join("")
        },
        Sc = function(a) {
            var b = [];
            Rc(a, function(c) {
                b.push(c)
            });
            return b
        },
        Rc = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var n = a.charAt(d++),
                        m = Oc[n];
                    if (m != null) return m;
                    if (!tb(n)) throw Error("Unknown base64 encoding at char: " + n);
                }
                return k
            }
            Pc();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (h === 64 && e === -1) break;
                b(e << 2 | f >> 4);
                g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
            }
        },
        Pc = function() {
            if (!Oc) {
                Oc = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                    var d = a.concat(b[c].split(""));
                    Nc[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        Oc[f] === void 0 && (Oc[f] = e)
                    }
                }
            }
        };
    var Tc = typeof Uint8Array !== "undefined",
        Uc = !sc && typeof btoa === "function";
    var Vc = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var Wc;

    function Xc() {
        var a = Error();
        Vc(a, "incident");
        pb(a)
    }

    function Yc(a) {
        a = Error(a);
        Vc(a, "warning");
        return a
    }

    function Zc(a, b) {
        if (b != null) {
            if (a == null) {
                var c;
                a = (c = Wc) != null ? c : Wc = {}
            } else a = a.constructor;
            c = a[b] || 0;
            c >= 4 || (a[b] = c + 1, Xc())
        }
    };

    function $c() {
        return typeof BigInt === "function"
    };

    function ad(a) {
        return Array.prototype.slice.call(a)
    };
    var bd = typeof Symbol === "function" && typeof Symbol() === "symbol";

    function dd(a) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol() : a
    }
    var ed = dd(),
        fd = dd("0di"),
        gd = dd("2ex"),
        hd = dd("1oa"),
        id = dd("0dg"),
        jd = dd("64big");
    var kd = bd ? function(a, b) {
            a[ed] |= b
        } : function(a, b) {
            a.Da !== void 0 ? a.Da |= b : Object.defineProperties(a, {
                Da: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        ld = bd ? function(a, b) {
            a[ed] &= ~b
        } : function(a, b) {
            a.Da !== void 0 && (a.Da &= ~b)
        },
        md = bd ? function(a) {
            return a[ed] | 0
        } : function(a) {
            return a.Da | 0
        },
        nd = bd ? function(a) {
            return a[ed]
        } : function(a) {
            return a.Da
        },
        od = bd ? function(a, b) {
            a[ed] = b
        } : function(a, b) {
            a.Da !== void 0 ? a.Da = b : Object.defineProperties(a, {
                Da: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function pd(a) {
        kd(a, 34);
        return a
    }

    function qd(a) {
        kd(a, 32);
        return a
    }

    function rd(a, b) {
        od(b, (a | 0) & -14591)
    }

    function sd(a, b) {
        od(b, (a | 34) & -14557)
    };
    var td = {},
        ud = {};

    function vd(a) {
        return !(!a || typeof a !== "object" || a.Og !== ud)
    }

    function wd(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function xd(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = md(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        od(a, d | 1);
        return !0
    }
    var yd, zd = [];
    od(zd, 55);
    yd = Object.freeze(zd);

    function Ad(a) {
        if (a & 2) throw Error();
    }
    var Bd = function(a, b, c) {
        this.l = 0;
        this.g = a;
        this.j = b;
        this.o = c
    };
    Bd.prototype.next = function() {
        if (this.l < this.g.length) {
            var a = this.g[this.l++];
            return {
                done: !1,
                value: this.j ? this.j.call(this.o, a) : a
            }
        }
        return {
            done: !0,
            value: void 0
        }
    };
    Bd.prototype[Symbol.iterator] = function() {
        return new Bd(this.g, this.j, this.o)
    };
    var Cd = Object.freeze({});
    Object.freeze({});
    var Dd = Object.freeze({});
    var Ed = 0,
        Fd = 0,
        Gd;

    function Hd(a) {
        var b = a >>> 0;
        Ed = b;
        Fd = (a - b) / 4294967296 >>> 0
    }

    function Id(a) {
        if (a < 0) {
            Hd(0 - a);
            var b = v(Jd(Ed, Fd));
            a = b.next().value;
            b = b.next().value;
            Ed = a >>> 0;
            Fd = b >>> 0
        } else Hd(a)
    }

    function Kd(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151) var c = "" + (4294967296 * b + a);
        else $c() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + Ld(c) + Ld(a));
        return c
    }

    function Ld(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function Md() {
        var a = Ed,
            b = Fd;
        b & 2147483648 ? $c() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = v(Jd(a, b)), a = b.next().value, b = b.next().value, a = "-" + Kd(a, b)) : a = Kd(a, b);
        return a
    }

    function Nd(a) {
        if (a.length < 16) Id(Number(a));
        else if ($c()) a = BigInt(a), Ed = Number(a & BigInt(4294967295)) >>> 0, Fd = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +(a[0] === "-");
            Fd = Ed = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), Fd *= 1E6, Ed = Ed * 1E6 + d, Ed >= 4294967296 && (Fd += Math.trunc(Ed / 4294967296), Fd >>>= 0, Ed >>>= 0);
            b && (b = v(Jd(Ed, Fd)), a = b.next().value, b = b.next().value, Ed = a, Fd = b)
        }
    }

    function Jd(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };

    function Od(a) {
        if (a == null || typeof a === "number") return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a)
    }

    function Pd(a) {
        if (typeof a !== "boolean") throw Error("Expected boolean but got " + Ra(a) + ": " + a);
        return a
    }

    function Qd(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    var Rd = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Sd(a) {
        var b = typeof a;
        return b === "number" ? Number.isFinite(a) : b !== "string" ? !1 : Rd.test(a)
    }

    function Td(a) {
        if (!Number.isFinite(a)) throw Yc("enum");
        return a | 0
    }

    function Ud(a) {
        return a == null ? a : Td(a)
    }

    function Vd(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Wd(a) {
        if (typeof a !== "number") throw Yc("int32");
        if (!Number.isFinite(a)) throw Yc("int32");
        return a | 0
    }

    function Xd(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Yd(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Zd(a) {
        if (a != null) {
            var b = !!b;
            if (!Sd(a)) throw Yc("int64");
            a = typeof a === "string" ? $d(a) : b ? ae(a) : be(a)
        }
        return a
    }

    function ce(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function de(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function ee(a) {
        if (a < 0) {
            Id(a);
            var b = Kd(Ed, Fd);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (ce(String(a))) return a;
        Id(a);
        return Fd * 4294967296 + (Ed >>> 0)
    }

    function be(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            Id(a);
            var b = Ed,
                c = Fd;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function ae(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            var b = String(a);
            de(b) ? a = b : (Id(a), a = Md())
        }
        return a
    }

    function $d(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        de(a) || (Nd(a), a = Md());
        return a
    }

    function fe(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function ge(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function he(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function ke(a, b, c, d) {
        if (a != null && typeof a === "object" && a.Pd === td) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? le(b) : new b : void 0;
        var e = c = md(a);
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && od(a, e);
        return new b(a)
    }

    function le(a) {
        var b = a[fd];
        if (b) return b;
        b = new a;
        pd(b.F);
        return a[fd] = b
    }

    function me(a, b, c) {
        if (b) return Pd(a);
        var d;
        return (d = Qd(a)) != null ? d : c ? !1 : void 0
    }

    function ne(a, b, c) {
        if (b) return fe(a);
        var d;
        return (d = he(a)) != null ? d : c ? "" : void 0
    };
    var re = function(a) {
        var b = oe(a);
        if (b) return b;
        if (Math.random() > .01 || typeof Proxy !== "function") return a;
        b = new Proxy(a, {
            set: function(c, d, e) {
                pe();
                c[d] = e;
                return !0
            }
        });
        qe(a, b);
        return b
    };

    function pe() {
        Xc()
    }
    var se = void 0,
        te = void 0,
        oe = function(a) {
            var b;
            return (b = se) == null ? void 0 : b.get(a)
        },
        ue = function(a) {
            var b;
            return ((b = te) == null ? void 0 : b.get(a)) || a
        };

    function qe(a, b) {
        (se || (se = new WeakMap)).set(a, b);
        (te || (te = new WeakMap)).set(b, a)
    };
    var ve;

    function we(a, b) {
        ve = b;
        a = new a(b);
        ve = void 0;
        return a
    }
    var xe, ye;

    function ze(a) {
        switch (typeof a) {
            case "boolean":
                return xe || (xe = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? ye || (ye = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    }

    function B(a, b, c) {
        a == null && (a = ve);
        ve = void 0;
        if (a == null) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            d = md(a);
            if (d & 2048) throw Error("farr");
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (wd(c[f])) {
                        d |= 256;
                        b = f - (+!!(d & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        d = d & -16760833 | (b & 1023) << 14;
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, e - (+!!(d & 512) - 1));
                    if (b > 1024) throw Error("spvt");
                    d = d & -16760833 | (b & 1023) <<
                        14
                }
            }
        }
        od(a, d);
        return a
    };
    var Ae = {},
        Be = function() {
            try {
                var a = function() {
                    return na(Map, [], this.constructor)
                };
                x(a, Map);
                nc(new a);
                return !1
            } catch (b) {
                return !0
            }
        }(),
        Ce = function() {
            this.g = new Map
        };
    l = Ce.prototype;
    l.get = function(a) {
        return this.g.get(a)
    };
    l.set = function(a, b) {
        this.g.set(a, b);
        this.size = this.g.size;
        return this
    };
    l.delete = function(a) {
        a = this.g.delete(a);
        this.size = this.g.size;
        return a
    };
    l.clear = function() {
        this.g.clear();
        this.size = this.g.size
    };
    l.has = function(a) {
        return this.g.has(a)
    };
    l.entries = function() {
        return this.g.entries()
    };
    l.keys = function() {
        return this.g.keys()
    };
    l.values = function() {
        return this.g.values()
    };
    l.forEach = function(a, b) {
        return this.g.forEach(a, b)
    };
    Ce.prototype[Symbol.iterator] = function() {
        return this.entries()
    };
    var De = function() {
        if (Be) return Object.setPrototypeOf(Ce.prototype, Map.prototype), Object.defineProperties(Ce.prototype, {
            size: {
                value: 0,
                configurable: !0,
                enumerable: !0,
                writable: !0
            }
        }), Ce;
        var a = function() {
            return na(Map, [], this.constructor)
        };
        x(a, Map);
        return a
    }();

    function Ee(a) {
        return a
    }
    var Ge = function(a, b, c, d) {
        c = c === void 0 ? Ee : c;
        d = d === void 0 ? Ee : d;
        var e = De.call(this) || this;
        var f = md(a);
        f |= 64;
        od(a, f);
        e.Qb = f;
        e.nd = b;
        e.bc = c;
        e.ne = e.nd ? Fe : d;
        for (var g = 0; g < a.length; g++) {
            var h = a[g],
                k = c(h[0], !1, !0),
                n = h[1];
            b ? n === void 0 && (n = null) : n = d(h[1], !1, !0, void 0, void 0, f);
            De.prototype.set.call(e, k, n)
        }
        return e
    };
    x(Ge, De);
    var He = function(a) {
            if (a.Qb & 2) throw Error("Cannot mutate an immutable Map");
        },
        Ke = function(a, b) {
            b = b === void 0 ? Ie : b;
            if (a.size !== 0) return Je(a, b)
        },
        Je = function(a, b) {
            b = b === void 0 ? Ie : b;
            var c = [];
            a = De.prototype.entries.call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    l = Ge.prototype;
    l.clear = function() {
        He(this);
        De.prototype.clear.call(this)
    };
    l.delete = function(a) {
        He(this);
        return De.prototype.delete.call(this, this.bc(a, !0, !1))
    };
    l.entries = function() {
        var a = Array.from(De.prototype.keys.call(this));
        return new Bd(a, Le, this)
    };
    l.keys = function() {
        return De.prototype.keys.call(this)
    };
    l.values = function() {
        var a = Array.from(De.prototype.keys.call(this));
        return new Bd(a, Ge.prototype.get, this)
    };
    l.forEach = function(a, b) {
        var c = this;
        De.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    l.set = function(a, b) {
        He(this);
        a = this.bc(a, !0, !1);
        return a == null ? this : b == null ? (De.prototype.delete.call(this, a), this) : De.prototype.set.call(this, a, this.ne(b, !0, !0, this.nd, !1, this.Qb))
    };
    l.has = function(a) {
        return De.prototype.has.call(this, this.bc(a, !1, !1))
    };
    l.get = function(a) {
        a = this.bc(a, !1, !1);
        var b = De.prototype.get.call(this, a);
        if (b !== void 0) {
            var c = this.nd;
            return c ? (c = this.ne(b, !1, !0, c, this.fg, this.Qb), c !== b && De.prototype.set.call(this, a, c), c) : b
        }
    };
    Ge.prototype[Symbol.iterator] = function() {
        return this.entries()
    };
    Ge.prototype.toJSON = void 0;
    Ge.prototype.Og = ud;

    function Fe(a, b, c, d, e, f) {
        a = ke(a, d, c, f);
        e && (a = Me(a));
        return a
    }

    function Ie(a) {
        return a
    }

    function Le(a) {
        return [a, this.get(a)]
    }
    var Ne;

    function Oe() {
        return Ne || (Ne = new Ge(pd([]), void 0, void 0, void 0, Ae))
    };

    function Pe(a, b) {
        return Qe(b)
    }

    function Qe(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (xd(a, void 0, 0)) return
                    } else {
                        if (Tc && a != null && a instanceof Uint8Array) {
                            if (Uc) {
                                for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                                b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                                a = btoa(b)
                            } else a = Qc(a);
                            return a
                        }
                        if (a instanceof Ge) return Ke(a)
                    }
        }
        return a
    };

    function Re(a, b, c) {
        a = ad(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) b[f] = c(e[f])
        }
        return a
    }

    function Se(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = xd(a, void 0, 0) ? void 0 : e && md(a) & 2 ? a : Te(a, b, c, d !== void 0, e);
            else if (wd(a)) {
                var f = {},
                    g;
                for (g in a) f[g] = Se(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Te(a, b, c, d, e) {
        var f = d || c ? md(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = ad(a);
        for (var g = 0; g < a.length; g++) a[g] = Se(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Ue(a) {
        return Se(a, Ve, void 0, void 0, !1)
    }

    function Ve(a) {
        return a.Pd === td ? a.toJSON() : a instanceof Ge ? Ke(a, Ue) : Qe(a)
    };

    function We(a, b, c) {
        c = c === void 0 ? sd : c;
        if (a != null) {
            if (Tc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = md(a);
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (od(a, (d | 34) & -12293), a) : Te(a, We, d & 4 ? sd : c, !0, !0)
            }
            a.Pd === td ? (c = a.F, d = nd(c), a = d & 2 ? a : we(a.constructor, Ye(c, d, !0))) : a instanceof Ge && !(a.Qb & 2) && (c = pd(Je(a, We)), a = new Ge(c, a.nd, a.bc, a.ne));
            return a
        }
    }

    function Ye(a, b, c) {
        var d = c || b & 2 ? sd : rd,
            e = !!(b & 32);
        a = Re(a, b, function(f) {
            return We(f, e, d)
        });
        kd(a, 32 | (c ? 2 : 0));
        return a
    }

    function Me(a) {
        var b = a.F,
            c = nd(b);
        return c & 2 ? we(a.constructor, Ye(b, c, !1)) : a
    };

    function Ze(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[id] = (a.constructor[id] | 0) + 1) < 5 && Xc();
        return c === 0 ? !1 : !(c & b)
    }
    var af = function(a, b) {
        a = a.F;
        return $e(a, nd(a), b)
    };

    function bf(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }
    var $e = function(a, b, c, d) {
            if (c === -1) return null;
            var e = b >> 14 & 1023 || 536870912;
            if (c >= e) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var f = a.length;
                return d && b & 256 && (d = a[f - 1][c], d != null) ? (bf(a, b, e, c) && Zc(void 0, gd), d) : bf(a, b, e, c)
            }
        },
        df = function(a, b, c) {
            var d = a.F,
                e = nd(d);
            Ad(e);
            cf(d, e, b, c);
            return a
        };

    function cf(a, b, c, d, e) {
        var f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Cb) {
            var g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return g;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && od(a, g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }
    var ef = function(a) {
        return a === Cd ? 2 : Db ? 5 : 2
    };

    function ff(a, b, c, d) {
        var e = a.F,
            f = nd(e),
            g = 2 & f ? 1 : d;
        d = gf(e, f, b);
        var h = md(d);
        if (Ze(a, h, void 0, !1)) {
            if (4 & h || Object.isFrozen(d)) d = ad(d), h = hf(h, f), f = cf(e, f, b, d);
            for (var k = a = 0; a < d.length; a++) {
                var n = c(d[a]);
                n != null && (d[k++] = n)
            }
            k < a && (d.length = k);
            h = jf(h, f);
            h = (h | 20) & -4097;
            h &= -8193;
            od(d, h);
            2 & h && Object.freeze(d)
        }
        var m;
        g === 1 || g === 4 && 32 & h ? kf(h) || (f = h, h |= 2, h !== f && od(d, h), Object.freeze(d)) : (c = g !== 5 ? !1 : !!(32 & h) || kf(h) || !!oe(d), (g === 2 || c) && kf(h) && (d = ad(d), h = hf(h, f), h = lf(h, f, !1), od(d, h), f = cf(e, f, b, d)), kf(h) || (b = h, h = lf(h,
            f, !1), h !== b && od(d, h)), c && (m = re(d)));
        return m || d
    }

    function gf(a, b, c) {
        a = $e(a, b, c);
        return Array.isArray(a) ? a : yd
    }

    function jf(a, b) {
        a === 0 && (a = hf(a, b));
        return a | 1
    }

    function kf(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function mf(a, b, c, d, e, f) {
        var g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (h == null) {
                if (k) {
                    a = Oe();
                    break a
                }
                h = []
            } else if (h.constructor === Ge) {
                if ((h.Qb & 2) == 0 || k) {
                    a = h;
                    break a
                }
                h = Je(h)
            } else Array.isArray(h) ? c = !!(md(h) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = Oe();
                    break a
                }
                c || (c = !0, pd(h))
            } else if (c) {
                c = !1;
                k = ad(h);
                for (h = 0; h < k.length; h++) {
                    var n = k[h] = ad(k[h]);
                    Array.isArray(n[1]) && (n[1] = pd(n[1]))
                }
                h = k
            }
            c || (md(h) & 64 ? ld(h, 32) : 32 & b && qd(h));f = new Ge(h, e, ne, f);cf(a, b, d, f, !1);a = f
        }!g && e && (a.fg = !0);
        return a
    }

    function nf(a, b, c) {
        a = a.F;
        var d = nd(a);
        return mf(a, d, $e(a, d, b), b, void 0, c)
    }

    function of (a, b, c, d) {
        var e = a.F,
            f = nd(e);
        Ad(f);
        if (c == null) return cf(e, f, b), a;
        c = ue(c);
        var g = md(c),
            h = g,
            k = !!(2 & g) || Object.isFrozen(c),
            n = !k && (void 0 === Dd || !1);
        if (Ze(a, g))
            for (g = 21, k && (c = ad(c), h = 0, g = hf(g, f), g = lf(g, f, !0)), k = 0; k < c.length; k++) c[k] = d(c[k]);
        n && (c = ad(c), h = 0, g = hf(g, f), g = lf(g, f, !0));
        g !== h && od(c, g);
        cf(e, f, b, c);
        return a
    }

    function pf(a, b, c, d) {
        var e = a.F,
            f = nd(e);
        Ad(f);
        cf(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function qf(a, b, c, d) {
        var e = a.F,
            f = md(e);
        Ad(nd(a.F));
        var g = f & 2;
        a = $e(e, f, b, !1);
        Array.isArray(a) || (a = yd);
        var h = !!(f & 32),
            k = md(a);
        k === 0 && h && !g ? (k |= 33, od(a, k)) : k & 1 || (k |= 1, od(a, k));
        if (g) k & 2 || pd(a), Object.freeze(a);
        else if (2 & k || 2048 & k) a = ad(a), g = 1, h && (g |= 32), od(a, g), cf(e, f, b, a, !1);
        b = a;
        e = md(b);
        e = !!(4 & e) && !!(4096 & e);
        if (Array.isArray(d))
            for (f = 0; f < d.length; f++) b.push(c(d[f], e));
        else
            for (d = v(d), f = d.next(); !f.done; f = d.next()) b.push(c(f.value, e))
    }
    var tf = function(a, b, c, d) {
            var e = a.F,
                f = nd(e);
            Ad(f);
            if (d == null) {
                var g = rf(e);
                if (sf(g, e, f, c) === b) g.set(c, 0);
                else return a
            } else {
                g = rf(e);
                var h = sf(g, e, f, c);
                h !== b && (h && (f = cf(e, f, h)), g.set(c, b))
            }
            cf(e, f, b, d);
            return a
        },
        vf = function(a, b, c) {
            return uf(a, b) === c ? c : -1
        },
        uf = function(a, b) {
            a = a.F;
            return sf(rf(a), a, nd(a), b)
        };

    function rf(a) {
        if (bd) {
            var b;
            return (b = a[hd]) != null ? b : a[hd] = new Map
        }
        if (hd in a) return a[hd];
        b = new Map;
        Object.defineProperty(a, hd, {
            value: b
        });
        return b
    }

    function sf(a, b, c, d) {
        var e = a.get(d);
        if (e != null) return e;
        for (var f = e = 0; f < d.length; f++) {
            var g = d[f];
            $e(b, c, g) != null && (e !== 0 && (c = cf(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }
    var xf = function(a) {
        var b = wf;
        a = a.F;
        var c = nd(a);
        Ad(c);
        var d = $e(a, c, 4);
        b = Me(ke(d, b, !0, c));
        d !== b && cf(a, c, 4, b);
        return b
    };

    function yf(a, b, c, d) {
        a = a.F;
        var e = nd(a),
            f = $e(a, e, c, d);
        b = ke(f, b, !1, e);
        b !== f && b != null && cf(a, e, c, b, d);
        return b
    }
    var zf = function(a, b, c) {
            return (a = yf(a, b, c, !1)) ? a : le(b)
        },
        Af = function(a, b, c) {
            var d = d === void 0 ? !1 : d;
            b = yf(a, b, c, d);
            if (b == null) return b;
            a = a.F;
            var e = nd(a);
            if (!(e & 2)) {
                var f = Me(b);
                f !== b && (b = f, cf(a, e, c, b, d))
            }
            return b
        };

    function Bf(a, b, c, d, e, f, g) {
        var h = !!(2 & b);
        e = h ? 1 : e;
        f = !!f;
        g && (g = !h);
        h = gf(a, b, d);
        var k = md(h),
            n = !!(4 & k);
        if (!n) {
            k = jf(k, b);
            var m = h,
                p = b,
                r = !!(2 & k);
            r && (p |= 2);
            for (var t = !r, u = !0, w = 0, E = 0; w < m.length; w++) {
                var Y = ke(m[w], c, !1, p);
                if (Y instanceof c) {
                    if (!r) {
                        var V = !!(md(Y.F) & 2);
                        t && (t = !V);
                        u && (u = V)
                    }
                    m[E++] = Y
                }
            }
            E < w && (m.length = E);
            k |= 4;
            k = u ? k | 16 : k & -17;
            k = t ? k | 8 : k & -9;
            od(m, k);
            r && Object.freeze(m)
        }
        if (g && !(8 & k || !h.length && (e === 1 || e === 4 && 32 & k))) {
            kf(k) && (h = ad(h), k = hf(k, b), b = cf(a, b, d, h));
            c = h;
            g = k;
            for (m = 0; m < c.length; m++) k = c[m], p = Me(k), k !==
                p && (c[m] = p);
            g |= 8;
            g = c.length ? g & -17 : g | 16;
            od(c, g);
            k = g
        }
        var da;
        e === 1 || e === 4 && 32 & k ? kf(k) || (b = k, k |= !h.length || 16 & k && (!n || 32 & k) ? 2 : 2048, k !== b && od(h, k), Object.freeze(h)) : (n = e !== 5 ? !1 : !!(32 & k) || kf(k) || !!oe(h), (e === 2 || n) && kf(k) && (h = ad(h), k = hf(k, b), k = lf(k, b, f), od(h, k), b = cf(a, b, d, h)), kf(k) || (a = k, k = lf(k, b, f), k !== a && od(h, k)), n && (da = re(h)));
        return da || h
    }
    var Cf = function(a, b, c, d) {
            a = a.F;
            var e = nd(a);
            return Bf(a, e, b, c, d, !1, !(2 & e))
        },
        C = function(a, b, c) {
            c == null && (c = void 0);
            return df(a, b, c)
        },
        Df = function(a, b, c, d) {
            d == null && (d = void 0);
            return tf(a, b, c, d)
        },
        Ef = function(a, b, c) {
            var d = a.F,
                e = nd(d);
            Ad(e);
            if (c == null) return cf(d, e, b), a;
            c = ue(c);
            for (var f = md(c), g = f, h = !!(2 & f) || !!(2048 & f), k = h || Object.isFrozen(c), n = !k && (void 0 === Dd || !1), m = !0, p = !0, r = 0; r < c.length; r++) {
                var t = c[r];
                h || (t = !!(md(t.F) & 2), m && (m = !t), p && (p = t))
            }
            h || (f |= 5, f = m ? f | 8 : f & -9, f = p ? f | 16 : f & -17);
            if (n || k && f !== g) c = ad(c),
                g = 0, f = hf(f, e), f = lf(f, e, !0);
            f !== g && od(c, f);
            cf(d, e, b, c);
            return a
        };

    function hf(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function lf(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function Ff(a, b, c, d) {
        a = a.F;
        var e = nd(a);
        Ad(e);
        b = Bf(a, e, c, b, 2, !0);
        c = d != null ? d : new c;
        b.push(c);
        md(c.F) & 2 ? ld(b, 8) : ld(b, 16);
        return c
    }
    var Gf = function(a, b, c, d) {
            Ff(a, b, c, d);
            return a
        },
        Hf = function(a, b) {
            a = af(a, b);
            var c;
            a == null ? c = a : Sd(a) ? typeof a === "number" ? c = be(a) : c = $d(a) : c = void 0;
            return c
        };

    function If(a, b) {
        return a != null ? a : b
    }
    var Jf = function(a, b) {
            return he(af(a, b))
        },
        Kf = function(a, b) {
            var c = c === void 0 ? !1 : c;
            return If(Qd(af(a, b)), c)
        },
        Lf = function(a, b) {
            var c = c === void 0 ? 0 : c;
            return If(Xd(af(a, b)), c)
        },
        Mf = function(a, b) {
            var c = c === void 0 ? 0 : c;
            return If(Yd(af(a, b)), c)
        },
        Nf = function(a, b) {
            var c = c === void 0 ? 0 : c;
            return If(Hf(a, b), c)
        },
        Of = function(a, b) {
            var c = c === void 0 ? 0 : c;
            a = a.F;
            var d = nd(a),
                e = $e(a, d, b),
                f = Od(e);
            f != null && f !== e && cf(a, d, b, f);
            return If(f, c)
        },
        D = function(a, b) {
            var c = c === void 0 ? "" : c;
            return If(Jf(a, b), c)
        },
        F = function(a, b) {
            var c = 0;
            c = c ===
                void 0 ? 0 : c;
            return If(Vd(af(a, b)), c)
        },
        Pf = function(a, b) {
            var c = c === void 0 ? "0" : c;
            a = af(a, b);
            b = !0;
            b = b === void 0 ? !1 : b;
            a = a == null ? a : Sd(a) ? typeof a === "string" ? $d(a) : b ? ae(a) : be(a) : void 0;
            return If(a, c)
        },
        Qf = function(a, b) {
            return ff(a, b, Xd, ef())
        },
        Rf = function(a, b, c) {
            return ff(a, b, he, c)
        },
        Sf = function(a, b, c) {
            return F(a, vf(a, c, b))
        },
        Tf = function(a, b, c) {
            return df(a, b, c == null ? c : Pd(c))
        },
        Uf = function(a, b, c) {
            return pf(a, b, c == null ? c : Pd(c), !1)
        },
        Vf = function(a, b, c) {
            return df(a, b, c == null ? c : Wd(c))
        },
        Wf = function(a, b, c) {
            return pf(a,
                b, c == null ? c : Wd(c), 0)
        },
        Xf = function(a, b, c) {
            return pf(a, b, Zd(c), "0")
        },
        Yf = function(a, b, c) {
            return df(a, b, ge(c))
        },
        Zf = function(a, b, c) {
            return df(a, b, Ud(c))
        },
        G = function(a, b, c) {
            return pf(a, b, Ud(c), 0)
        };
    var $f, H = function(a, b, c) {
        this.F = B(a, b, c)
    };
    H.prototype.toJSON = function() {
        return ag(this)
    };
    var bg = function(a) {
        try {
            return $f = !0, JSON.stringify(ag(a), Pe)
        } finally {
            $f = !1
        }
    };
    H.prototype.Pd = td;
    H.prototype.toString = function() {
        try {
            return $f = !0, ag(this).toString()
        } finally {
            $f = !1
        }
    };

    function ag(a) {
        var b = $f ? a.F : Te(a.F, Ve, void 0, void 0, !1);
        var c = !$f;
        var d = Bb ? void 0 : a.constructor.ba;
        var e = nd(c ? a.F : b);
        if (a = b.length) {
            var f = b[a - 1],
                g = wd(f);
            g ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var h = b;
            if (g) {
                b: {
                    var k = f;
                    var n = {};g = !1;
                    if (k)
                        for (var m in k)
                            if (isNaN(+m)) n[m] = k[m];
                            else {
                                var p = k[m];
                                Array.isArray(p) && (xd(p, d, +m) || vd(p) && p.size === 0) && (p = null);
                                p == null && (g = !0);
                                p != null && (n[m] = p)
                            }
                    if (g) {
                        for (var r in n) break b;
                        n = null
                    } else n = k
                }
                k = n == null ? f != null : n !== f
            }
            for (var t; a > 0; a--) {
                r = a - 1;
                m = h[r];
                r -= e;
                if (!(m == null || xd(m, d,
                        r) || vd(m) && m.size === 0)) break;
                t = !0
            }
            if (h !== b || k || t) {
                if (!c) h = Array.prototype.slice.call(h, 0, a);
                else if (t || k || n) h.length = a;
                n && h.push(n)
            }
            b = h
        }
        return b
    };
    var cg = function(a, b) {
            this.j = a >>> 0;
            this.g = b >>> 0
        },
        eg = function(a) {
            if (!a) return dg || (dg = new cg(0, 0));
            if (!/^\d+$/.test(a)) return null;
            Nd(a);
            return new cg(Ed, Fd)
        },
        dg, fg = function(a, b) {
            this.j = a >>> 0;
            this.g = b >>> 0
        },
        hg = function(a) {
            if (!a) return gg || (gg = new fg(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            Nd(a);
            return new fg(Ed, Fd)
        },
        gg;
    var ig = function() {
        this.g = []
    };
    ig.prototype.length = function() {
        return this.g.length
    };
    ig.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var jg = function(a, b, c) {
            for (; c > 0 || b > 127;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.g.push(b)
        },
        kg = function(a, b) {
            for (; b > 127;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        lg = function(a, b) {
            if (b >= 0) kg(a, b);
            else {
                for (var c = 0; c < 9; c++) a.g.push(b & 127 | 128), b >>= 7;
                a.g.push(1)
            }
        },
        mg = function(a, b) {
            a.g.push(b >>> 0 & 255);
            a.g.push(b >>> 8 & 255);
            a.g.push(b >>> 16 & 255);
            a.g.push(b >>> 24 & 255)
        };
    var ng = function() {
            this.l = [];
            this.j = 0;
            this.g = new ig
        },
        og = function(a, b) {
            b.length !== 0 && (a.l.push(b), a.j += b.length)
        },
        qg = function(a, b) {
            pg(a, b, 2);
            b = a.g.end();
            og(a, b);
            b.push(a.j);
            return b
        },
        rg = function(a, b) {
            var c = b.pop();
            for (c = a.j + a.g.length() - c; c > 127;) b.push(c & 127 | 128), c >>>= 7, a.j++;
            b.push(c);
            a.j++
        },
        pg = function(a, b, c) {
            kg(a.g, b * 8 + c)
        },
        sg = function(a, b, c) {
            pg(a, b, 2);
            kg(a.g, c.length);
            og(a, a.g.end());
            og(a, c)
        };
    var tg = function(a, b) {
        this.g = a;
        this.sf = b
    };

    function ug(a, b) {
        if (Array.isArray(b)) {
            var c = md(b);
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                f != null && (b[e++] = f)
            }
            e < d && (b.length = e);
            od(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    }
    var vg = Symbol();

    function wg(a, b, c) {
        a[b] = c
    }
    var xg = Symbol();

    function yg(a) {
        var b = a[xg];
        if (!b) {
            var c = zg(a);
            b = function(d, e) {
                return Ag(d, e, c)
            };
            a[xg] = b
        }
        return b
    }
    var Bg = Symbol();

    function Cg(a) {
        return a.g
    }

    function Dg(a, b) {
        var c, d, e = a.g;
        return function(f, g, h) {
            return e(f, g, h, d || (d = zg(b).g), c || (c = yg(b)))
        }
    }

    function zg(a) {
        var b = a[Bg];
        if (b) return b;
        b = a[Bg] = {};
        var c = Cg,
            d = Dg;
        var e = e === void 0 ? wg : e;
        b.g = ze(a[0]);
        var f = 0,
            g = a[++f];
        g && g.constructor === Object && (b.rg = g, g = a[++f], typeof g === "function" && (b.l = g, b.j = a[++f], g = a[++f]));
        for (var h = {}; Array.isArray(g) && typeof g[0] === "number" && g[0] > 0;) {
            for (var k = 0; k < g.length; k++) h[g[k]] = g;
            g = a[++f]
        }
        for (k = 1; g !== void 0;) {
            typeof g === "number" && (k += g, g = a[++f]);
            var n = void 0;
            if (g instanceof tg) var m = g;
            else m = Eg, f--;
            if (m.sf) {
                g = a[++f];
                n = a;
                var p = f;
                typeof g == "function" && (g = g(), n[p] = g);
                n = g
            }
            g = a[++f];
            p = k + 1;
            typeof g === "number" && g < 0 && (p -= g, g = a[++f]);
            for (; k < p; k++) {
                var r = h[k];
                e(b, k, n ? d(m, n, r) : c(m, r))
            }
        }
        Fg in a && vg in a && Bg in a && (a.length = 0);
        return b
    }
    var Fg = Symbol();

    function Gg(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.rg)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof tg ? c : [Hg, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = yg(c),
                        f = zg(c).g;
                    c = (c = a.j) ? c(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    }

    function Ag(a, b, c) {
        for (var d = nd(a), e = +!!(d & 512) - 1, f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (k != null) {
                var n = h - e,
                    m = Gg(c, n);
                m && m(b, k, n)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var p in a) d = +p, Number.isNaN(d) || (e = a[p], e != null && (f = Gg(c, d)) && f(b, e, d))
        }
    }

    function Ig(a) {
        return new tg(a, !1)
    }

    function Jg(a, b, c) {
        a: if (b != null) {
            if (Sd(b)) {
                if (typeof b === "string") {
                    b = $d(b);
                    break a
                }
                if (typeof b === "number") {
                    b = be(b);
                    break a
                }
            }
            b = void 0
        }b != null && (typeof b === "string" && hg(b), b != null && (pg(a, c, 0), typeof b === "number" ? (a = a.g, Id(b), jg(a, Ed, Fd)) : (c = hg(b), jg(a.g, c.j, c.g))))
    }

    function Kg(a, b, c) {
        b = Xd(b);
        b != null && b != null && (pg(a, c, 0), lg(a.g, b))
    }

    function Lg(a, b, c, d, e) {
        b = b instanceof H ? b.F : Array.isArray(b) ? B(b, d[0], d[1]) : void 0;
        b != null && (c = qg(a, c), e(b, a), rg(a, c))
    }
    var Mg = Ig(function(a, b, c) {
            b = Od(b);
            b != null && (pg(a, c, 1), a = a.g, c = Gd || (Gd = new DataView(new ArrayBuffer(8))), c.setFloat64(0, +b, !0), Ed = c.getUint32(0, !0), Fd = c.getUint32(4, !0), mg(a, Ed), mg(a, Fd))
        }),
        Ng = Ig(function(a, b, c) {
            b = Od(b);
            b != null && (pg(a, c, 5), a = a.g, c = Gd || (Gd = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), Fd = 0, Ed = c.getUint32(0, !0), mg(a, Ed))
        }),
        Og = Ig(Jg),
        Pg = Ig(Jg),
        Qg = Ig(function(a, b, c) {
            a: if (b != null) {
                if (Sd(b)) {
                    if (typeof b === "string") {
                        var d = Math.trunc(Number(b));
                        Number.isSafeInteger(d) && d >= 0 ? b = String(d) :
                            (d = b.indexOf("."), d !== -1 && (b = b.substring(0, d)), ce(b) || (Nd(b), b = Kd(Ed, Fd)));
                        break a
                    }
                    if (typeof b === "number") {
                        b = Math.trunc(b);
                        b = b >= 0 && Number.isSafeInteger(b) ? b : ee(b);
                        break a
                    }
                }
                b = void 0
            }b != null && (typeof b === "string" && eg(b), b != null && (pg(a, c, 0), typeof b === "number" ? (a = a.g, Id(b), jg(a, Ed, Fd)) : (c = eg(b), jg(a.g, c.j, c.g))))
        }),
        Rg = Ig(Kg),
        Sg = Ig(Kg),
        Tg = Ig(function(a, b, c) {
            b = Qd(b);
            b != null && (pg(a, c, 0), a.g.g.push(b ? 1 : 0))
        }),
        Ug = Ig(function(a, b, c) {
            b = he(b);
            b != null && sg(a, c, ob(b))
        }),
        Vg;
    Vg = new tg(function(a, b, c) {
        b = ug(he, b);
        if (b != null)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    g = b[d];
                g != null && sg(e, f, ob(g))
            }
    }, !1);
    var Hg = new tg(Lg, !0),
        Eg = new tg(Lg, !0),
        Wg;
    Wg = new tg(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Lg(a, b[f], c, d, e)
    }, !0);
    var Xg = Ig(function(a, b, c) {
            b = Yd(b);
            b != null && b != null && (pg(a, c, 0), kg(a.g, b))
        }),
        Yg = Ig(function(a, b, c) {
            b = Xd(b);
            b != null && (b = parseInt(b, 10), pg(a, c, 0), lg(a.g, b))
        }),
        Zg;
    Zg = new tg(function(a, b, c) {
        b = ug(Xd, b);
        if (b != null && b.length) {
            c = qg(a, c);
            for (var d = 0; d < b.length; d++) lg(a.g, b[d]);
            rg(a, c)
        }
    }, !1);

    function $g(a) {
        return function() {
            var b = new ng;
            Ag(this.F, b, zg(a));
            og(b, b.g.end());
            for (var c = new Uint8Array(b.j), d = b.l, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.l = [c];
            return c
        }
    }

    function ah(a) {
        return function(b) {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = we(a, qd(b))
            }
            return b
        }
    };
    var bh = function(a) {
        this.F = B(a)
    };
    x(bh, H);
    var ch = function(a, b, c) {
            c = c === void 0 ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        },
        dh = function(a) {
            return !!(a.error && a.meta && a.id)
        };
    var eh = function() {},
        fh = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        gh = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        },
        hh = function(a) {
            var b = 0,
                c = !1,
                d = [],
                e = function() {
                    b = 0;
                    c && (c = !1, f())
                },
                f = function() {
                    b = y.setTimeout(e, 1E3);
                    var g = d;
                    d = [];
                    a.apply(void 0, g)
                };
            return function(g) {
                d = arguments;
                b ? c = !0 : f()
            }
        };
    var ih = fh(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            y.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function jh(a) {
        return a ? a.passive && ih() ? a : a.capture || !1 : !1
    }
    var kh = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, jh(d)), !0) : !1
        },
        lh = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, jh())
        };

    function mh(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function nh(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function oh(a) {
        var b = ph,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function qh(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function rh(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function sh(a, b) {
        var c = Sa(b),
            d = c ? b : arguments;
        for (c = c ? 0 : 1; c < d.length; c++) {
            if (a == null) return;
            a = a[d[c]]
        }
        return a
    }

    function th(a, b) {
        return a !== null && b in a
    }

    function uh(a, b) {
        for (var c in a)
            if (a[c] == b) return !0;
        return !1
    }

    function vh(a) {
        var b = wh,
            c;
        for (c in b)
            if (a.call(void 0, b[c], c, b)) return c
    }

    function xh(a) {
        for (var b in a) return !1;
        return !0
    }

    function yh(a) {
        for (var b in a) delete a[b]
    }

    function zh(a, b, c) {
        return a !== null && b in a ? a[b] : c
    }
    var Ah = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Bh(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ah.length; f++) c = Ah[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Ch, Dh = function() {
        if (Ch === void 0) {
            var a = null,
                b = y.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: eb,
                        createScript: eb,
                        createScriptURL: eb
                    })
                } catch (c) {
                    y.console && y.console.error(c.message)
                }
                Ch = a
            } else Ch = a
        }
        return Ch
    };
    var Eh = function(a) {
        this.g = a
    };
    Eh.prototype.toString = function() {
        return this.g + ""
    };
    var Fh = {},
        Gh = function(a) {
            var b = Dh();
            a = b ? b.createScriptURL(a) : a;
            return new Eh(a, Fh)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Hh = function(a) {
        this.g = a
    };
    Hh.prototype.toString = function() {
        return this.g
    };
    var Ih = new Hh("about:invalid#zClosurez");
    var Jh = function(a) {
        this.Mg = a
    };

    function Kh(a) {
        return new Jh(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var Lh = [Kh("data"), Kh("http"), Kh("https"), Kh("mailto"), Kh("ftp"), new Jh(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function Mh(a) {
        if (typeof MediaSource !== "undefined" && a instanceof MediaSource) return new Hh(URL.createObjectURL(a));
        var b = a.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);
        if ((b == null ? void 0 : b.length) !== 2 || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif|avif|x-ms-bmp)$/i.test(b[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(b[1]) || /^audio\/(?:3gpp2|3gpp|aac|amr|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(b[1]) || /^font\/\w+/i.test(b[1]))) throw Error("");
        return new Hh(URL.createObjectURL(a))
    }
    var Nh = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    var Oh = {},
        Ph = function(a) {
            this.g = a
        };
    Ph.prototype.toString = function() {
        return this.g.toString()
    };
    var Qh = new Ph("", Oh);
    var Rh = {},
        Sh = function(a) {
            this.g = a
        };
    Sh.prototype.toString = function() {
        return this.g.toString()
    };
    var $h = function(a) {
        return a instanceof Sh && a.constructor === Sh ? a.g : "type_error:SafeHtml"
    };

    function ai(a) {
        var b = Ja.apply(1, arguments);
        if (b.length === 0) return Gh(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Gh(c)
    };

    function bi(a) {
        for (var b = Ja.apply(1, arguments), c = a[0], d = 0; d < a.length - 1; d++) c += String(b[d]) + a[d + 1];
        if (/[<>]/.test(c)) throw Error("Forbidden characters in style string: " + c);
        return new Ph(c, Oh)
    };
    var ci = function(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    };
    ci.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    ci.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    ci.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    ci.prototype.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };
    var di = function(a, b) {
            this.width = a;
            this.height = b
        },
        ei = function(a, b) {
            return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
        };
    l = di.prototype;
    l.aspectRatio = function() {
        return this.width / this.height
    };
    l.isEmpty = function() {
        return !(this.width * this.height)
    };
    l.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function fi(a, b) {
        if (a.nodeType === 1) {
            var c = a.tagName;
            if (c === "SCRIPT" || c === "STYLE") throw Error("");
        }
        a.innerHTML = $h(b)
    };

    function gi(a, b) {
        a.src = b instanceof Eh && b.constructor === Eh ? b.g : "type_error:TrustedResourceUrl";
        var c, d;
        (c = (b = (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var hi = function(a) {
        var b = [],
            c = [],
            d = {},
            e = function(f, g) {
                var h = g + "  ";
                try {
                    if (f === void 0) b.push("undefined");
                    else if (f === null) b.push("NULL");
                    else if (typeof f === "string") b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                    else if (typeof f === "function") b.push(String(f).replace(/\n/g, "\n" + g));
                    else if (Ta(f)) {
                        f[Ua] || c.push(f);
                        var k = Ya(f);
                        if (d[k]) b.push("*** reference loop detected (id=" + k + ") ***");
                        else {
                            d[k] = !0;
                            b.push("{");
                            for (var n in f) typeof f[n] !== "function" && (b.push("\n"), b.push(h), b.push(n + " = "), e(f[n], h));
                            b.push("\n" +
                                g + "}");
                            delete d[k]
                        }
                    } else b.push(f)
                } catch (m) {
                    b.push("*** " + m + " ***")
                }
            };
        e(a, "");
        for (a = 0; a < c.length; a++) Za(c[a]);
        return b.join("")
    };

    function ii(a, b) {
        a.write($h(b))
    };
    var ji = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        ki = function(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        },
        li = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        mi = function(a) {
            return a == null ? "" : String(a)
        },
        ni = Math.random() * 2147483648 | 0,
        oi = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        pi = function() {
            return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
        },
        qi = function(a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])",
                "g"), function(b, c, d) {
                return c + d.toUpperCase()
            })
        },
        ri = function(a) {
            isFinite(a) && (a = String(a));
            return typeof a === "string" ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
        };
    var ui = function(a) {
            return a ? new si(ti(a)) : ib || (ib = new si)
        },
        vi = function(a) {
            var b = document;
            return typeof a === "string" ? b.getElementById(a) : a
        },
        xi = function(a, b) {
            mh(b, function(c, d) {
                d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : wi.hasOwnProperty(d) ? a.setAttribute(wi[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c
            })
        },
        wi = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        yi = function(a) {
            a = a.document;
            a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
            return new di(a.clientWidth, a.clientHeight)
        },
        zi = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : vc || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return new ci(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        Ai = function(a) {
            return a ? a.parentWindow ||
                a.defaultView : window
        },
        Di = function(a, b, c) {
            var d = arguments,
                e = document,
                f = d[1],
                g = Bi(e, String(d[0]));
            f && (typeof f === "string" ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : xi(g, f));
            d.length > 2 && Ci(e, g, d, 2);
            return g
        },
        Ci = function(a, b, c, d) {
            function e(h) {
                h && b.appendChild(typeof h === "string" ? a.createTextNode(h) : h)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!Sa(f) || Ta(f) && f.nodeType > 0) e(f);
                else {
                    a: {
                        if (f && typeof f.length == "number") {
                            if (Ta(f)) {
                                var g = typeof f.item == "function" || typeof f.item == "string";
                                break a
                            }
                            if (typeof f ===
                                "function") {
                                g = typeof f.item == "function";
                                break a
                            }
                        }
                        g = !1
                    }
                    Sb(g ? ic(f) : f, e)
                }
            }
        },
        Bi = function(a, b) {
            b = String(b);
            a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
            return a.createElement(b)
        },
        Ei = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        Fi = function(a) {
            var b;
            if (b = a.parentElement) return b;
            b = a.parentNode;
            return Ta(b) && b.nodeType == 1 ? b : null
        },
        Gi = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
            if (typeof a.compareDocumentPosition != "undefined") return a ==
                b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        ti = function(a) {
            return a.nodeType == 9 ? a : a.ownerDocument || a.document
        },
        Hi = function(a) {
            try {
                return a.contentWindow || (a.contentDocument ? Ai(a.contentDocument) : null)
            } catch (b) {}
            return null
        },
        Ii = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        si = function(a) {
            this.g = a || y.document || document
        };
    l = si.prototype;
    l.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    l.appendChild = function(a, b) {
        a.appendChild(b)
    };
    l.append = function(a, b) {
        Ci(ti(a), a, arguments, 1)
    };
    l.canHaveChildren = function(a) {
        if (a.nodeType != 1) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    l.contains = Gi;
    var Ki = function() {
            return Ab && Fb ? Fb.mobile : !Ji() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
        },
        Ji = function() {
            return Ab && Fb ? !Fb.mobile && (A("iPad") || A("Android") || A("Silk")) : A("iPad") || A("Android") && !A("Mobile") || A("Silk")
        };
    var Li = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Mi = function(a) {
            var b = a.match(Li);
            a = b[1];
            var c = b[3];
            b = b[4];
            var d = "";
            a && (d += a + ":");
            c && (d = d + "//" + c, b && (d += ":" + b));
            return d
        },
        Ni = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (d >= 0) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? ji(e) : "")
                }
            }
        },
        Oi = /#|$/,
        Pi = function(a, b) {
            var c = a.search(Oi);
            a: {
                var d =
                    0;
                for (var e = b.length;
                    (d = a.indexOf(b, d)) >= 0 && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (f == 38 || f == 63)
                        if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                    d += e + 1
                }
                d = -1
            }
            if (d < 0) return null;
            e = a.indexOf("&", d);
            if (e < 0 || e > c) e = c;
            d += b.length + 1;
            return ji(a.slice(d, e !== -1 ? e : 0))
        };
    var Qi = function(a) {
            try {
                return !!a && a.location.href != null && oc(a, "foo")
            } catch (b) {
                return !1
            }
        },
        Si = function(a) {
            var b = b === void 0 ? !1 : b;
            var c = c === void 0 ? y : c;
            for (var d = 0; c && d++ < 40 && (!b && !Qi(c) || !a(c));) c = Ri(c)
        },
        Ti = function() {
            var a = window;
            Si(function(b) {
                a = b;
                return !1
            });
            return a
        },
        Ri = function(a) {
            try {
                var b = a.parent;
                if (b && b != a) return b
            } catch (c) {}
            return null
        },
        Ui = function() {
            var a = window;
            return Qi(a.top) ? a.top : null
        },
        Vi = function() {
            if (!globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        Wi = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Xi = function(a) {
            var b = a.length;
            if (b == 0) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return c > 0 ? c : 4294967296 + c
        };

    function Yi(a) {
        var b, c;
        return (c = (b = /https?:\/\/[^\/]+/.exec(a)) == null ? void 0 : b[0]) != null ? c : ""
    }
    var Zi = function() {
            var a = y;
            try {
                for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return !0;
                    case "http:":
                        return !1
                }
            } catch (c) {}
            return !0
        },
        $i = function(a) {
            a = a && a.toString && a.toString();
            return typeof a === "string" && vb(a, "[native code]")
        },
        aj = function(a, b) {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        bj = function(a, b) {
            for (var c = 0; c < 50; ++c) {
                if (aj(a, b)) return a;
                if (!(a = Ri(a))) break
            }
            return null
        },
        cj = fh(function() {
            return Ki() ? 2 : Ji() ? 1 : 0
        }),
        dj = function() {
            var a =
                window;
            if (typeof a.goog_pvsid !== "number") try {
                var b = Object,
                    c = b.defineProperty,
                    d = void 0;
                d = d === void 0 ? Math.random : d;
                var e = Math.floor(d() * Math.pow(2, 52));
                c.call(b, a, "goog_pvsid", {
                    value: e,
                    configurable: !1
                })
            } catch (f) {}
            return Number(a.goog_pvsid) || -1
        },
        ej = function(a, b) {
            b = b === void 0 ? document : b;
            return b.createElement(String(a).toLowerCase())
        },
        fj = function(a) {
            for (var b = a; a && a != a.parent;) a = a.parent, Qi(a) && (b = a);
            return b
        };
    var gj = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)"),
        kj = function(a) {
            a = a || hj();
            for (var b = new ij(y.location.href, !1), c = null, d = a.length - 1, e = d; e >= 0; --e) {
                var f = a[e];
                !c && gj.test(f.url) && (c = f);
                if (f.url && !f.Kd) {
                    b = f;
                    break
                }
            }
            e = null;
            f = a.length && a[d].url;
            b.depth != 0 && f && (e = a[d]);
            return new jj(b, e, c)
        },
        hj = function() {
            var a = y,
                b = [],
                c = null;
            do {
                var d = a;
                if (Qi(d)) {
                    var e = d.location.href;
                    c = d.document && d.document.referrer || null
                } else e = c, c = null;
                b.push(new ij(e || ""));
                try {
                    a = d.parent
                } catch (f) {
                    a = null
                }
            } while (a &&
                d != a);
            d = 0;
            for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
            d = y;
            if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.Kd = !0);
            return b
        },
        jj = function(a, b, c) {
            this.g = a;
            this.j = b;
            this.l = c
        },
        ij = function(a, b) {
            this.url = a;
            this.Kd = !!b;
            this.depth = null
        };
    var lj = null,
        mj = function() {
            if (lj === null) {
                lj = "";
                try {
                    var a = "";
                    try {
                        a = y.top.location.hash
                    } catch (c) {
                        a = y.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        lj = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return lj
        };

    function nj() {
        var a = a === void 0 ? y : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function oj() {
        var a = a === void 0 ? y : a;
        return (a = a.performance) && a.now ? a.now() : null
    }

    function pj(a, b) {
        b = b === void 0 ? y : b;
        var c, d;
        return ((c = b.performance) == null ? void 0 : (d = c.timing) == null ? void 0 : d[a]) || 0
    }

    function qj() {
        var a = a === void 0 ? y : a;
        var b = Math.min(pj("domLoading", a) || Infinity, pj("domInteractive", a) || Infinity);
        return b === Infinity ? Math.max(pj("responseEnd", a), pj("navigationStart", a)) : b
    };
    var rj = function(a, b, c, d) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = d === void 0 ? 0 : d;
        this.taskId = this.slotId = void 0;
        this.uniqueId = Math.random()
    };
    var sj = y.performance,
        tj = !!(sj && sj.mark && sj.measure && sj.clearMarks),
        uj = fh(function() {
            var a;
            if (a = tj) a = mj(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        }),
        vj = function(a, b) {
            this.events = [];
            this.g = b || y;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.l = uj() || (c != null ? c : Math.random() < a)
        };
    vj.prototype.B = function() {
        this.l = !1;
        this.events != this.g.google_js_reporting_queue && (uj() && Sb(this.events, wj), this.events.length = 0)
    };
    vj.prototype.C = function(a) {
        !this.l || this.events.length > 2048 || this.events.push(a)
    };
    var wj = function(a) {
        a && sj && uj() && (sj.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), sj.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    vj.prototype.start = function(a, b) {
        if (!this.l) return null;
        a = new rj(a, b, oj() || nj());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        sj && uj() && sj.mark(b);
        return a
    };
    vj.prototype.end = function(a) {
        if (this.l && typeof a.value === "number") {
            a.duration = (oj() || nj()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            sj && uj() && sj.mark(b);
            this.C(a)
        }
    };
    var xj = function() {
            this.l = "&";
            this.j = {};
            this.o = 0;
            this.g = []
        },
        yj = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        Aj = function(a, b, c, d, e) {
            var f = [];
            Wi(a, function(g, h) {
                (g = zj(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        zj = function(a, b, c, d, e) {
            if (a == null) return "";
            b = b || "&";
            c = c || ",$";
            typeof c == "string" && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(zj(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(Aj(a,
                b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        Bj = function(a, b, c) {
            a.g.push(b);
            a.j[b] = c
        },
        Cj = function(a, b, c, d) {
            a.g.push(b);
            a.j[b] = yj(c, d)
        },
        Ej = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = Dj(a) - c.length;
            if (d < 0) return "";
            a.g.sort(function(m, p) {
                return m - p
            });
            c = null;
            for (var e = "", f = 0; f < a.g.length; f++)
                for (var g = a.g[f], h = a.j[g], k = 0; k < h.length; k++) {
                    if (!d) {
                        c = c == null ? g : c;
                        break
                    }
                    var n = Aj(h[k], a.l, ",$");
                    if (n) {
                        n = e + n;
                        if (d >= n.length) {
                            d -= n.length;
                            b += n;
                            e = a.l;
                            break
                        }
                        c = c == null ? g : c
                    }
                }
            a = "";
            c != null &&
                (a = e + "trn=" + c);
            return b + a
        },
        Dj = function(a) {
            var b = 1,
                c;
            for (c in a.j) b = c.length > b ? c.length : b;
            return 3997 - b - a.l.length - 1
        };
    var Hj = function() {
        var a = Fj;
        this.A = Gj;
        this.B = "jserror";
        this.o = !0;
        this.g = a === void 0 ? null : a;
        this.j = null;
        this.l = !1;
        this.C = this.Xa
    };
    l = Hj.prototype;
    l.gd = function(a) {
        this.j = a
    };
    l.ee = function(a) {
        this.B = a
    };
    l.fe = function(a) {
        this.o = a
    };
    l.ge = function(a) {
        this.l = a
    };
    l.Ab = function(a, b, c) {
        try {
            if (this.g && this.g.l) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (h) {
            b = this.o;
            try {
                wj(d), b = this.C(a, new ch(h, {
                    message: Ij(h)
                }), void 0, c)
            } catch (k) {
                this.Xa(217, k)
            }
            if (b) {
                var f, g;
                (f = window.console) == null || (g = f.error) == null || g.call(f, h)
            } else throw h;
        }
        return e
    };
    l.Xd = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Ja.apply(0, arguments);
            return e.Ab(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    l.Xa = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new xj;
            Cj(f, 1, "context", a);
            dh(b) || (b = new ch(b, {
                message: Ij(b)
            }));
            b.msg && Cj(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.j) try {
                this.j(g)
            } catch (k) {}
            if (d) try {
                d(g)
            } catch (k) {}
            Bj(f, 3, [g]);
            var h = kj();
            h.j && Cj(f, 4, "top", h.j.url || "");
            Bj(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? Mi(h.g.url) : ""
            }]);
            Jj(this.A, e, f, this.l, c)
        } catch (k) {
            try {
                Jj(this.A, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Ij(k),
                    url: h && h.g.url
                }, this.l, c)
            } catch (n) {}
        }
        return this.o
    };
    var Ij = function(a) {
        var b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack) a: {
            a = a.stack;
            var c = b;
            try {
                a.indexOf(c) == -1 && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n");
                break a
            } catch (e) {
                b = c;
                break a
            }
            b = void 0
        }
        return b
    };
    var Lj = function(a, b, c, d, e) {
        Kj(a, b, c === void 0 ? null : c, d === void 0 ? !1 : d, e === void 0 ? !1 : e)
    };

    function Kj(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = ej("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && ec(a.google_image_requests, f);
                lh(f, "load", g);
                lh(f, "error", g)
            };
            kh(f, "load", g);
            kh(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Nj = function(a, b) {
            var c = c === void 0 ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            Wi(a, function(e, f) {
                if (e || e === 0) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            Mj(d, c)
        },
        Mj = function(a, b) {
            var c = window;
            b = b === void 0 ? !1 : b;
            var d = d === void 0 ? !1 : d;
            c.fetch ? (b = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }, d && (b.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? b.attributionReporting = {
                    eventSourceEligible: "true",
                    triggerEligible: "false"
                } :
                b.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                }), c.fetch(a, b)) : Lj(c, a, void 0, b, d)
        };

    function Oj(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.nf] = d.Pe, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Md
            }).map(c), ag(b), a.filter(function(d) {
                return !d.Md
            }).map(c)])
        } catch (d) {
            return Pj(d, b), ""
        }
    }

    function Pj(a, b) {
        try {
            Nj({
                m: Ij(a instanceof Error ? a : Error(String(a))),
                b: F(b, 1) || null,
                v: D(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Qj = function(a, b) {
        var c = new bh;
        a = G(c, 1, a);
        b = pf(a, 2, ge(b), "");
        a = b.F;
        c = nd(a);
        this.l = c & 2 ? b : we(b.constructor, Ye(a, c, !0))
    };
    var Rj = function(a) {
        this.F = B(a)
    };
    x(Rj, H);
    var Sj = [1, 2, 3];
    var Tj = function(a) {
        this.F = B(a)
    };
    x(Tj, H);
    var Uj = [2, 4];
    var Vj = function(a) {
        this.F = B(a)
    };
    x(Vj, H);
    Vj.ba = [4];
    var Wj = function(a) {
        this.F = B(a)
    };
    x(Wj, H);
    var Xj = function(a) {
        this.F = B(a)
    };
    x(Xj, H);
    var Yj = function(a, b) {
            return G(a, 1, b)
        },
        Zj = function(a, b) {
            return G(a, 2, b)
        };
    var ak = function(a) {
        this.F = B(a)
    };
    x(ak, H);
    var bk = [1, 2];
    var ck = function(a) {
        this.F = B(a)
    };
    x(ck, H);
    var dk = function(a, b) {
            return C(a, 1, b)
        },
        ek = function(a, b) {
            return Ef(a, 2, b)
        },
        fk = function(a, b) {
            return of(a, 4, b, Wd)
        },
        gk = function(a, b) {
            return Ef(a, 5, b)
        },
        hk = function(a, b) {
            return G(a, 6, b)
        };
    ck.ba = [2, 4, 5];
    var ik = function(a) {
        this.F = B(a)
    };
    x(ik, H);
    ik.ba = [5];
    var jk = [1, 2, 3, 4, 6];
    var kk = function(a) {
        this.F = B(a)
    };
    x(kk, H);
    kk.ba = [2, 3];
    var lk = function(a) {
        this.F = B(a)
    };
    x(lk, H);
    var mk = [2, 3, 4];
    var nk = function(a) {
        this.F = B(a)
    };
    x(nk, H);
    nk.ba = [2, 8];
    var ok = [3, 4, 5],
        pk = [6, 7];
    var qk = function(a) {
        this.F = B(a)
    };
    x(qk, H);
    var rk = [4, 5];
    var sk = function(a) {
        this.F = B(a)
    };
    x(sk, H);
    sk.prototype.getTagSessionCorrelator = function() {
        Zc(this, jd);
        return Nf(this, 2)
    };
    var uk = function(a) {
            var b = new sk;
            return Df(b, 4, tk, a)
        },
        tk = [4, 5, 7, 8, 9];
    var vk = function(a) {
        this.F = B(a)
    };
    x(vk, H);
    var wk = function(a) {
        this.F = B(a)
    };
    x(wk, H);
    var xk = function(a) {
        this.F = B(a)
    };
    x(xk, H);
    var yk = function(a) {
        this.F = B(a)
    };
    x(yk, H);
    yk.prototype.kb = function() {
        return Af(this, wk, 1)
    };
    yk.prototype.getSize = function() {
        return Af(this, xk, 2)
    };
    yk.prototype.getDuration = function() {
        return Af(this, vk, 3)
    };
    var zk = function(a) {
        this.F = B(a)
    };
    x(zk, H);
    var Ak = function(a) {
        this.F = B(a)
    };
    x(Ak, H);
    var Bk = function(a) {
        this.F = B(a)
    };
    x(Bk, H);
    var Ck = function(a) {
        this.F = B(a)
    };
    x(Ck, H);
    Ck.prototype.getEscapedQemQueryId = function() {
        return D(this, 4)
    };
    Ck.ba = [2, 23, 31];
    var Dk = function(a) {
        this.F = B(a)
    };
    x(Dk, H);
    var Ek = function(a) {
        this.F = B(a)
    };
    x(Ek, H);
    Ek.prototype.getEscapedQemQueryId = function() {
        return D(this, 2)
    };
    Ek.ba = [30];
    var Gk = function(a) {
            this.ph = new Fk(a)
        },
        Fk = function(a) {
            this.th = new Hk(a)
        },
        Hk = function(a) {
            this.dg = new Ik(a)
        },
        Ik = function(a) {
            this.Id = function(b) {
                var c = b.he;
                var d = b.rd;
                b = b.status;
                var e = new Vj;
                e = pf(e, 1, ge("SOomke"), "");
                var f = new Rj;
                d = tf(f, 1, Sj, ge(d));
                d = Gf(e, 4, Rj, d);
                e = new Rj;
                b = tf(e, 1, Sj, ge(b));
                b = Gf(d, 4, Rj, b);
                d = new Tj;
                c = tf(d, 2, Uj, Zd(Math.round(c)));
                c = C(b, 3, c);
                a(c)
            }
        },
        Jk = function() {
            Qj.apply(this, arguments);
            var a = this;
            this.Qg = new Gk(function(b) {
                return a.I(b)
            })
        };
    x(Jk, Qj);
    var Kk = function() {
        Jk.apply(this, arguments)
    };
    x(Kk, Jk);
    Kk.prototype.fd = function() {
        this.B.apply(this, ia(Ja.apply(0, arguments).map(function(a) {
            return {
                Md: !0,
                nf: 4,
                Pe: ag(a)
            }
        })))
    };
    Kk.prototype.I = function() {
        this.B.apply(this, ia(Ja.apply(0, arguments).map(function(a) {
            return {
                Md: !1,
                nf: 1,
                Pe: ag(a)
            }
        })))
    };
    var Lk = function(a, b) {
        if (globalThis.fetch) globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var Mk = function(a, b, c, d, e, f, g, h) {
        Kk.call(this, a, b);
        this.D = c;
        this.L = d;
        this.G = e;
        this.C = f;
        this.J = g;
        this.o = h;
        this.g = [];
        this.j = null;
        this.A = !1
    };
    x(Mk, Kk);
    var Nk = function(a) {
        a.j !== null && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Oj(a.g, a.l);
            a.L(a.D + "?e=1", b);
            a.g = []
        }
    };
    Mk.prototype.B = function() {
        var a = Ja.apply(0, arguments),
            b = this;
        try {
            this.J && Oj(this.g.concat(a), this.l).length >= 65536 && Nk(this), this.o && !this.A && (this.A = !0, this.o.g(function() {
                Nk(b)
            })), this.g.push.apply(this.g, ia(a)), this.g.length >= this.C && Nk(this), this.g.length && this.j === null && (this.j = setTimeout(function() {
                Nk(b)
            }, this.G))
        } catch (c) {
            Pj(c, this.l)
        }
    };
    var Ok = function(a, b, c, d, e, f) {
        Mk.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", Lk, c === void 0 ? 1E3 : c, d === void 0 ? 100 : d, (e === void 0 ? !1 : e) && !!globalThis.fetch, f)
    };
    x(Ok, Mk);
    var I = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    I.prototype.getWidth = function() {
        return this.right - this.left
    };
    I.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    var Pk = function(a) {
        return new I(a.top, a.right, a.bottom, a.left)
    };
    l = I.prototype;
    l.contains = function(a) {
        return this && a ? a instanceof I ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    l.expand = function(a, b, c, d) {
        Ta(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    l.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Qk = function(a, b, c) {
        b instanceof ci ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, typeof c === "number" && (a.top += c, a.bottom += c));
        return a
    };
    I.prototype.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var Rk = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Sk = function(a) {
            return new I(a.top, a.left + a.width, a.top + a.height, a.left)
        };
    l = Rk.prototype;
    l.contains = function(a) {
        return a instanceof ci ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    l.getSize = function() {
        return new di(this.width, this.height)
    };
    l.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };

    function Tk(a) {
        a = a === void 0 ? y : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return ((c = b) == null ? 0 : c.pageViewId) && ((d = b) == null ? 0 : d.canonicalUrl) ? b : null
    };
    var Uk = function() {
            this.S = {}
        },
        dl = function() {
            var a = Tk(window);
            if (a) {
                if (a) {
                    var b = a.pageViewId;
                    a = a.clientId;
                    typeof a === "string" && (b += a.replace(/\D/g, "").substr(0, 6))
                } else b = null;
                return +b
            }
            b = fj(window);
            a = b.google_global_correlator;
            a || (b.google_global_correlator = a = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
            return a
        },
        fl = function(a, b) {
            var c = el[7] || "google_ps_7";
            a = a.S;
            var d = a[c];
            return d === void 0 ? (a[c] = b(), a[c]) : d
        },
        gl = function(a) {
            var b = dl();
            return fl(a, function() {
                return b
            })
        },
        il = function() {
            if (hl) var a = hl;
            else {
                a =
                    ((a = a === void 0 ? Tk() : a) ? Qi(a.master) ? a.master : null : null) || window;
                var b = a.google_persistent_state_async;
                a = b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? hl = b : a.google_persistent_state_async = hl = new Uk
            }
            return gl(a)
        },
        hl = null,
        jl = {},
        el = (jl[8] = "google_prev_ad_formats_by_region", jl[9] = "google_prev_ad_slotnames_by_region", jl);
    var kl = ha(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        ll = function() {
            var a = a === void 0 ? "jserror" : a;
            var b = b === void 0 ? .01 : b;
            var c = c === void 0 ? ai(kl) : c;
            this.j = a;
            this.l = !1;
            this.g = null;
            this.o = !1;
            this.C = Math.random();
            this.A = b;
            this.B = this.Xa;
            this.J = c
        };
    l = ll.prototype;
    l.ee = function(a) {
        this.j = a
    };
    l.gd = function(a) {
        this.g = a
    };
    l.fe = function(a) {
        this.l = a
    };
    l.ge = function(a) {
        this.o = a
    };
    l.Xa = function(a, b, c, d, e) {
        c = c === void 0 ? this.A : c;
        e = e === void 0 ? this.j : e;
        if ((this.o ? this.C : Math.random()) > c) return this.l;
        dh(b) || (b = new ch(b, {
            context: a,
            id: e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        y.google_js_errors = y.google_js_errors || [];
        y.google_js_errors.push(b);
        y.error_rep_loaded || (b = y.document, a = ej("SCRIPT", b), gi(a, this.J), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a, b), y.error_rep_loaded = !0);
        return this.l
    };
    l.Ab = function(a, b, c) {
        try {
            return b()
        } catch (d) {
            if (!this.B(a, d, this.A, c, this.j)) throw d;
        }
    };
    l.Xd = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = Ja.apply(0, arguments);
            return e.Ab(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    var ml = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        nl = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };
    var ol = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };

    function pl(a) {
        a = a === null ? "null" : a === void 0 ? "undefined" : a;
        var b = Dh();
        a = b ? b.createHTML(a) : a;
        return new Sh(a, Rh)
    };

    function ql(a, b, c) {
        Wi(b, function(d, e) {
            var f = c && c[e];
            !d && d !== 0 || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0))
        });
        return a
    }
    var wl = function(a, b, c, d, e, f, g, h) {
        f = f === void 0 ? Infinity : f;
        g = g === void 0 ? !1 : g;
        vj.call(this, a, h);
        var k = this;
        this.V = b;
        this.domain = c;
        this.path = d;
        this.Z = e;
        this.J = 0;
        this.A = {};
        this.G = {};
        this.W = [];
        this.report = {};
        this.j = 0;
        this.D = [];
        this.I = f;
        a = this.g.navigator;
        this.U = !(this.domain !== "csi.gstatic.com" || !a || !a.sendBeacon);
        this.g.performance && this.g.performance.now || rl(this, "dat", 1);
        a && a.deviceMemory && rl(this, "dmc", a.deviceMemory);
        this.g === this.g.top && rl(this, "top", 1);
        this.P = !g;
        this.K = function() {
            k.g.setTimeout(function() {
                    sl(k)
                },
                1100)
        };
        this.M = function() {
            rl(k, "uet", 2);
            for (var m = v(k.W), p = m.next(); !p.done; p = m.next()) {
                p = p.value;
                try {
                    p()
                } catch (t) {}
            }
            m = k.g;
            var r = r === void 0 ? {} : r;
            typeof window.CustomEvent === "function" ? p = new CustomEvent("rum_blp", r) : (p = document.createEvent("CustomEvent"), p.initCustomEvent("rum_blp", !!r.bubbles, !!r.cancelable, r.detail));
            m.dispatchEvent(p);
            sl(k);
            k.A.uet != null && (k.o -= 3 + k.A.uet.length + 2, delete k.A.uet)
        };
        this.aa = hh(function() {
            sl(k)
        });
        this.ga = function() {
            var m = k.g.document;
            (m.hidden != null ? m.hidden : m.mozHidden !=
                null ? m.mozHidden : m.webkitHidden != null && m.webkitHidden) && k.aa()
        };
        this.L = this.g.setTimeout(function() {
            sl(k)
        }, 5E3);
        this.o = b.length + c.length + d.length + e.length + 3;
        Sb(this.events, function(m) {
            tl(k, m)
        });
        b = ol(this.g);
        var n = function() {
            var m = Ja.apply(0, arguments)[0],
                p = m[0];
            m = m[1];
            var r = p.length + m.length + 2;
            k.o + k.j + r > 8E3 && sl(k);
            k.D.push([p, m]);
            k.j += r;
            ul(k);
            return 0
        };
        Sb(b, function(m) {
            return n(m)
        });
        b.length = 0;
        b.push = n;
        rl(this, "puid", (this.J + 1).toString(36) + "~" + Date.now().toString(36));
        vl(this)
    };
    x(wl, vj);
    var vl = function(a) {
            a.g.document.readyState === "complete" ? a.g.setTimeout(function() {
                sl(a)
            }, 0) : kh(a.g, "load", a.K);
            var b = nl(a.g.document);
            typeof b !== "undefined" && kh(a.g, b, a.ga);
            kh(a.g, "pagehide", a.M)
        },
        rl = function(a, b, c) {
            c = String(c);
            a.o = a.A[b] != null ? a.o + (c.length - a.A[b].length) : a.o + (b.length + c.length + 2);
            a.A[b] = c
        },
        zl = function(a, b, c, d, e) {
            e = e === void 0 ? "" : e;
            var f = xl(a, b, c, d, e);
            a.o + a.j + f > 8E3 && (sl(a), f = b.length + c.length + 2);
            yl(a, b, c, d, e);
            a.j += f;
            ul(a)
        },
        xl = function(a, b, c, d, e) {
            return a.report[b] == null ? b.length +
                c.length + 2 : d ? c.length + (e === void 0 ? "" : e).length : c.length - a.report[b].length
        },
        yl = function(a, b, c, d, e) {
            a.report[b] = d && a.report[b] != null ? a.report[b] + ("" + (e === void 0 ? "" : e) + c) : c
        },
        ul = function(a) {
            a.o + a.j >= 6E3 && sl(a)
        },
        sl = function(a) {
            if (a.l && a.P) {
                try {
                    a.j && (a.sendBeacon(a.report), a.J === a.I && a.B())
                } catch (b) {
                    (new ll).Xa(358, b)
                }
                a.report = {};
                a.j = 0;
                a.events.length = 0;
                a.g.clearTimeout(a.L);
                a.L = 0
            }
        },
        Al = function(a, b) {
            var c = a.V + "//" + a.domain + a.path + a.Z,
                d = {};
            c = ql(c, a.A, d);
            c = ql(c, b, d);
            b = a.g;
            b.google_timing_params && (c = ql(c,
                b.google_timing_params, d), b.google_timing_params = void 0);
            Sb(a.D, function(e) {
                var f = v(e);
                e = f.next().value;
                f = f.next().value;
                var g = {};
                c = ql(c, (g[e] = f, g))
            });
            a.D.length = 0;
            return c
        };
    wl.prototype.sendBeacon = function(a) {
        this.J++;
        a = Al(this, a);
        var b = !1;
        try {
            b = !!(this.U && this.g.navigator && this.g.navigator.sendBeacon(a, null))
        } catch (c) {
            this.U = !1
        }
        b || Lj(this.g, a);
        rl(this, "puid", (this.J + 1).toString(36) + "~" + Date.now().toString(36))
    };
    var tl = function(a, b) {
        var c = "met." + b.type,
            d = typeof b.value === "number" ? Math.round(b.value).toString(36) : b.value,
            e = Math.round(b.duration);
        b = "" + b.label + (b.slotId != null ? "_" + b.slotId : "") + ("." + d) + (e > 0 ? "_" + e.toString(36) : "") + (b.taskId != null ? "__" + Math.round(b.taskId).toString(36) : "");
        zl(a, c, b, !0, "~")
    };
    wl.prototype.C = function(a) {
        this.l && this.J < this.I && (vj.prototype.C.call(this, a), tl(this, a))
    };
    wl.prototype.B = function() {
        vj.prototype.B.call(this);
        this.g.clearTimeout(this.L);
        this.j = this.L = 0;
        this.report = {};
        yh(this.G);
        yh(this.A);
        lh(this.g, "load", this.K);
        lh(this.g, "pagehide", this.M)
    };
    var J = function(a) {
        var b = "xb";
        if (a.xb && a.hasOwnProperty(b)) return a.xb;
        b = new a;
        return a.xb = b
    };
    var K = function() {
            this.g = new wl(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
            var a = il();
            a != null && rl(this.g, "c", a);
            a = parseInt(this.g.A.c, 10) / 2;
            a != null && rl(this.g, "slotId", a)
        },
        L = function(a, b, c) {
            if (c != null) {
                a = a.g;
                var d = b + "=" + c;
                a.G[d] || (zl(a, b, c, !1), d.length < 1E3 && (a.G[d] = !0))
            }
        },
        Bl = function(a, b) {
            for (var c in b) b[c] = typeof b[c] === "object" ? encodeURIComponent(JSON.stringify(b[c])) : encodeURIComponent(String(b[c]));
            a = a.g;
            var d = !1;
            c = 0;
            for (var e = v(Object.keys(b)), f = e.next(); !f.done; f = e.next()) f =
                f.value, a.report[f] != null && (d = !0), c += xl(a, f, b[f], !1);
            (a.o + a.j + c > 8E3 || d) && sl(a);
            d = v(Object.keys(b));
            for (e = d.next(); !e.done; e = d.next()) e = e.value, yl(a, e, b[e], !1);
            a.j += c;
            ul(a)
        },
        Cl = function(a) {
            var b = K.getInstance().g;
            b.l && b.C(new rj(a, 4, nj() - 0, 0))
        };
    K.prototype.recordClick = function(a, b, c, d) {
        for (var e = !1, f = "notag"; d != void 0 && d != document.documentElement;) {
            var g = void 0,
                h = void 0;
            if (((g = d) == null ? 0 : g.getAttribute("data-ck-navigates")) || ((h = d) == null ? 0 : h.getAttribute("data-ck-tag"))) {
                g = f = void 0;
                e = (g = (f = d) == null ? void 0 : f.getAttribute("data-ck-navigates")) != null ? g : !1;
                h = g = void 0;
                f = (h = (g = d) == null ? void 0 : g.getAttribute("data-ck-tag")) != null ? h : "notag";
                break
            }
            g = void 0;
            d = (g = d.parentElement) != null ? g : void 0
        }
        d = this.g;
        d.l && d.C(new rj(a + "_" + b + "x" + c + "|" + e + "|" + f, 4,
            nj(), 0))
    };
    K.getInstance = function() {
        return J(K)
    };
    var Dl = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        El = function(a) {
            try {
                return y.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (Dl(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        Gl = function() {
            this.g = Fl
        },
        Hl = function(a, b, c) {
            if (b ==
                null) c.push("null");
            else {
                if (typeof b == "object") {
                    if (Array.isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Hl(a, a.g ? a.g.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], typeof e != "function" && (c.push(f), Il(d, c), c.push(":"), Hl(a, a.g ? a.g.call(b, d, e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        Il(b,
                            c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        Jl = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\u000b"
        },
        Kl = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        Il = function(a, b) {
            b.push('"', a.replace(Kl, function(c) {
                var d = Jl[c];
                d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).slice(1),
                    Jl[c] = d);
                return d
            }), '"')
        };
    var Ll = function() {
            this.l = null;
            this.g = "missing-id";
            this.j = !1
        },
        Nl = function(a) {
            var b = null;
            try {
                b = document.getElementsByClassName("lima-exp-data")
            } catch (c) {
                return Ml("missing-element", a.g), null
            }
            if (b.length > 1) return Ml("multiple-elements", a.g), null;
            b = b[0];
            return b ? b.innerHTML : (Ml("missing-element", a.g), null)
        },
        Pl = function() {
            var a = Ol,
                b = Nl(a);
            if (b !== null)
                if (Dl(b)) {
                    var c = JSON.parse(b);
                    b = c.experimentIds;
                    var d = c.binaryIdentifier;
                    c = c.adEventId;
                    var e = typeof d === "string";
                    if (typeof c == "string") {
                        var f = K.getInstance();
                        c != null && rl(f.g, "qqid", c)
                    }
                    e && (a.g = d);
                    typeof b !== "string" ? Ml("missing-flags", a.g) : (e || Ml("missing-binary-id", a.g), a.l = b)
                } else Ml("invalid-json", a.g)
        };
    Ll.prototype.reset = function() {
        this.l = null;
        this.g = "missing-id"
    };
    var Ql = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    l = Ql.prototype;
    l.set = function(a, b, c) {
        var d = !1;
        if (typeof c === "object") {
            var e = c.ff;
            d = c.ed || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.Qc
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        h === void 0 && (h = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (h < 0 ? "" : h == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + h * 1E3)).toUTCString()) + (d ? ";secure" : "") + (e != null ? ";samesite=" + e : "")
    };
    l.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = ub(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    l.remove = function(a, b, c) {
        var d = this.get(a) !== void 0;
        this.set(a, "", {
            Qc: 0,
            path: b,
            domain: c
        });
        return d
    };
    l.Hc = function() {
        return Rl(this).keys
    };
    l.Hb = function() {
        return Rl(this).values
    };
    l.isEmpty = function() {
        return !this.g.cookie
    };
    l.clear = function() {
        for (var a = Rl(this).keys, b = a.length - 1; b >= 0; b--) this.remove(a[b])
    };
    var Rl = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = ub(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };

    function Sl(a, b, c) {
        return Kf(b, 5) ? Tl(a, c) : null
    }
    var Ul;

    function Vl(a) {
        return Ul ? Ul : a.origin === "null" ? Ul = !1 : Ul = Wl(a)
    }

    function Wl(a) {
        if (!a.navigator.cookieEnabled) return !1;
        var b = new Ql(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            Qc: 60,
            ff: a.isSecureContext ? "none" : void 0,
            ed: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        b.remove("TESTCOOKIESENABLED");
        return !0
    }

    function Tl(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new Ql({
            cookie: b
        })).get(a) || ""
    }

    function Xl(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = Object.assign({}, c, {
            ff: "none",
            ed: !0
        })), (new Ql(d.document)).set(a, b, c))
    };

    function Yl(a, b) {
        var c = Cf(a, nk, 2, ef());
        if (!c.length) return Zl(a, b);
        a = F(a, 1);
        if (a === 1) {
            var d = Yl(c[0], b);
            return d.success ? {
                success: !0,
                value: !d.value
            } : d
        }
        c = Xb(c, function(h) {
            return Yl(h, b)
        });
        switch (a) {
            case 2:
                var e;
                return (e = (d = c.find(function(h) {
                    return h.success && !h.value
                })) != null ? d : c.find(function(h) {
                    return !h.success
                })) != null ? e : {
                    success: !0,
                    value: !0
                };
            case 3:
                var f, g;
                return (g = (f = c.find(function(h) {
                    return h.success && h.value
                })) != null ? f : c.find(function(h) {
                    return !h.success
                })) != null ? g : {
                    success: !0,
                    value: !1
                };
            default:
                return {
                    success: !1,
                    Ca: 3
                }
        }
    }

    function Zl(a, b) {
        var c = uf(a, ok);
        a: {
            switch (c) {
                case 3:
                    var d = Sf(a, 3, ok);
                    break a;
                case 4:
                    d = Sf(a, 4, ok);
                    break a;
                case 5:
                    d = Sf(a, 5, ok);
                    break a
            }
            d = void 0
        }
        if (!d) return {
            success: !1,
            Ca: 2
        };
        b = (b = b[c]) && b[d];
        if (!b) return {
            success: !1,
            Lb: d,
            jc: c,
            Ca: 1
        };
        try {
            var e = b.apply;
            var f = Rf(a, 8, ef());
            var g = e.call(b, null, ia(f))
        } catch (h) {
            return {
                success: !1,
                Lb: d,
                jc: c,
                Ca: 2
            }
        }
        e = F(a, 1);
        if (e === 4) return {
            success: !0,
            value: !!g
        };
        if (e === 5) return {
            success: !0,
            value: g != null
        };
        if (e === 12) a = D(a, vf(a, pk, 7));
        else a: {
            switch (c) {
                case 4:
                    a = Of(a, vf(a, pk, 6));
                    break a;
                case 5:
                    a = D(a, vf(a, pk, 7));
                    break a
            }
            a = void 0
        }
        if (a == null) return {
            success: !1,
            Lb: d,
            jc: c,
            Ca: 3
        };
        if (e === 6) return {
            success: !0,
            value: g === a
        };
        if (e === 9) return {
            success: !0,
            value: g != null && yb(String(g), a) === 0
        };
        if (g == null) return {
            success: !1,
            Lb: d,
            jc: c,
            Ca: 4
        };
        switch (e) {
            case 7:
                c = g < a;
                break;
            case 8:
                c = g > a;
                break;
            case 12:
                c = typeof a === "string" && typeof g === "string" && (new RegExp(a)).test(g);
                break;
            case 10:
                c = g != null && yb(String(g), a) === -1;
                break;
            case 11:
                c = g != null && yb(String(g), a) === 1;
                break;
            default:
                return {
                    success: !1,
                    Ca: 3
                }
        }
        return {
            success: !0,
            value: c
        }
    }

    function $l(a, b) {
        return a ? b ? Yl(a, b) : {
            success: !1,
            Ca: 1
        } : {
            success: !0,
            value: !0
        }
    };
    var wf = function(a) {
        this.F = B(a)
    };
    x(wf, H);
    wf.ba = [4];
    var am = function(a) {
        this.F = B(a)
    };
    x(am, H);
    am.prototype.getValue = function() {
        return Af(this, wf, 2)
    };
    var bm = function(a) {
        this.F = B(a)
    };
    x(bm, H);
    var cm = ah(bm);
    bm.ba = [5];
    var dm = [1, 2, 3, 6, 7, 8];
    var em = function(a, b, c) {
            var d = d === void 0 ? new Ok(6, "unknown", b) : d;
            this.o = a;
            this.A = c;
            this.j = d;
            this.g = [];
            this.l = a > 0 && Vi() < 1 / a
        },
        gm = function(a, b, c, d, e, f) {
            if (a.l) {
                var g = Zj(Yj(new Xj, b), c);
                b = hk(ek(dk(gk(fk(new ck, d), e), g), a.g.slice()), f);
                b = uk(b);
                a.j.fd(fm(a, b));
                if (f === 1 || f === 3 || f === 4 && !a.g.some(function(h) {
                        return F(h, 1) === F(g, 1) && F(h, 2) === c
                    })) a.g.push(g), a.g.length > 100 && a.g.shift()
            }
        },
        hm = function(a, b, c, d) {
            if (a.l) {
                var e = new Wj;
                b = Vf(e, 1, b);
                c = Vf(b, 2, c);
                d = Zf(c, 3, d);
                c = new sk;
                d = Df(c, 8, tk, d);
                a.j.fd(fm(a, d))
            }
        },
        im =
        function(a, b, c, d, e) {
            if (a.l) {
                var f = new qk;
                b = C(f, 1, b);
                c = Zf(b, 2, c);
                d = Vf(c, 3, d);
                if (e.jc === void 0) tf(d, 4, rk, Ud(e.Ca));
                else switch (e.jc) {
                    case 3:
                        c = new lk;
                        c = tf(c, 2, mk, Ud(e.Lb));
                        e = Zf(c, 1, e.Ca);
                        Df(d, 5, rk, e);
                        break;
                    case 4:
                        c = new lk;
                        c = tf(c, 3, mk, Ud(e.Lb));
                        e = Zf(c, 1, e.Ca);
                        Df(d, 5, rk, e);
                        break;
                    case 5:
                        c = new lk, c = tf(c, 4, mk, Ud(e.Lb)), e = Zf(c, 1, e.Ca), Df(d, 5, rk, e)
                }
                e = new sk;
                e = Df(e, 9, tk, d);
                a.j.fd(fm(a, e))
            }
        },
        fm = function(a, b) {
            var c = Date.now();
            c = Number.isFinite(c) ? Math.round(c) : 0;
            b = Xf(b, 1, c);
            c = dj();
            b = Xf(b, 2, c);
            return Xf(b, 6, a.o)
        };
    var jm = function() {
        var a = {};
        this.Ha = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    };
    var km = /^true$/.test("false");

    function lm(a, b) {
        switch (b) {
            case 1:
                return Sf(a, 1, dm);
            case 2:
                return Sf(a, 2, dm);
            case 3:
                return Sf(a, 3, dm);
            case 6:
                return Sf(a, 6, dm);
            case 8:
                return Sf(a, 8, dm);
            default:
                return null
        }
    }

    function mm(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Kf(a, 1);
            case 7:
                return D(a, 3);
            case 2:
                return Of(a, 2);
            case 3:
                return D(a, 3);
            case 6:
                return Rf(a, 4, ef());
            case 8:
                return Rf(a, 4, ef());
            default:
                return null
        }
    }
    var nm = fh(function() {
        if (!km) return {};
        try {
            var a;
            var b = b === void 0 ? window : b;
            try {
                var c = b.sessionStorage
            } catch (e) {
                c = null
            }
            var d = (a = c) == null ? void 0 : a.getItem("GGDFSSK");
            if (d) return JSON.parse(d)
        } catch (e) {}
        return {}
    });

    function om(a, b, c, d) {
        var e = d = d === void 0 ? 0 : d,
            f, g;
        J(pm).l[e] = (g = (f = J(pm).l[e]) == null ? void 0 : f.add(b)) != null ? g : (new Set).add(b);
        e = nm();
        if (e[b] != null) return e[b];
        b = qm(d)[b];
        if (!b) return c;
        b = cm(JSON.stringify(b));
        b = rm(b);
        a = mm(b, a);
        return a != null ? a : c
    }

    function rm(a) {
        var b = J(jm).Ha;
        if (b && uf(a, dm) !== 8) {
            var c = bc(Cf(a, am, 5, ef()), function(f) {
                f = $l(Af(f, nk, 1), b);
                return f.success && f.value
            });
            if (c) {
                var d;
                return (d = c.getValue()) != null ? d : null
            }
        }
        var e;
        return (e = Af(a, wf, 4)) != null ? e : null
    }
    var pm = function() {
        this.j = {};
        this.o = [];
        this.l = {};
        this.g = new Map
    };

    function sm(a, b, c) {
        return !!om(1, a, b === void 0 ? !1 : b, c)
    }

    function tm(a, b, c) {
        b = b === void 0 ? 0 : b;
        a = Number(om(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function um(a, b, c) {
        b = b === void 0 ? "" : b;
        a = om(3, a, b, c);
        return typeof a === "string" ? a : b
    }

    function vm(a, b, c) {
        b = b === void 0 ? [] : b;
        a = om(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function wm(a, b, c) {
        b = b === void 0 ? [] : b;
        a = om(8, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function qm(a) {
        return J(pm).j[a] || (J(pm).j[a] = {})
    }

    function xm(a, b) {
        var c = qm(b);
        Wi(a, function(d, e) {
            if (c[e]) {
                d = cm(JSON.stringify(d));
                var f = vf(d, dm, 8);
                if (Vd(af(d, f)) != null) {
                    var g = cm(JSON.stringify(c[e]));
                    f = xf(d);
                    g = Rf(zf(g, wf, 4), 4, ef());
                    qf(f, 4, fe, g)
                }
                c[e] = ag(d)
            } else c[e] = d
        })
    }

    function ym(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        var f = [],
            g = [];
        b = v(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            for (var k = qm(h), n = v(a), m = n.next(); !m.done; m = n.next()) {
                m = m.value;
                var p = uf(m, dm),
                    r = lm(m, p);
                if (r) {
                    var t = void 0,
                        u = void 0,
                        w = void 0;
                    var E = (t = (w = J(pm).g.get(h)) == null ? void 0 : (u = w.get(r)) == null ? void 0 : u.slice(0)) != null ? t : [];
                    a: {
                        t = r;u = p;w = new ik;
                        switch (u) {
                            case 1:
                                tf(w, 1, jk, Ud(t));
                                break;
                            case 2:
                                tf(w, 2, jk, Ud(t));
                                break;
                            case 3:
                                tf(w, 3, jk, Ud(t));
                                break;
                            case 6:
                                tf(w, 4, jk, Ud(t));
                                break;
                            case 8:
                                tf(w, 6, jk, Ud(t));
                                break;
                            default:
                                E = void 0;
                                break a
                        } of (w, 5, E, Wd);E = w
                    }
                    if (t = E) u = void 0, t = !((u = J(pm).l[h]) == null || !u.has(r));
                    t && f.push(E);
                    if (p === 8 && k[r]) E = cm(JSON.stringify(k[r])), p = xf(m), E = Rf(zf(E, wf, 4), 4, ef()), qf(p, 4, fe, E);
                    else {
                        if (p = E) t = void 0, p = !((t = J(pm).g.get(h)) == null || !t.has(r));
                        p && g.push(E)
                    }
                    e || (p = r, E = h, t = d, u = J(pm), u.g.has(E) || u.g.set(E, new Map), u.g.get(E).has(p) || u.g.get(E).set(p, []), t && u.g.get(E).get(p).push(t));
                    k[r] = ag(m)
                }
            }
        }
        if (f.length || g.length) a = d != null ? d : void 0, c.l && c.A && (d = new kk, f = Ef(d, 2, f), g = Ef(f, 3, g), a &&
            Wf(g, 1, a), f = new sk, g = Df(f, 7, tk, g), c.j.fd(fm(c, g)))
    }

    function zm(a, b) {
        b = qm(b);
        a = v(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = cm(JSON.stringify(c)),
                e = uf(d, dm);
            (d = lm(d, e)) && (b[d] || (b[d] = c))
        }
    }

    function Am() {
        return Object.keys(J(pm).j).map(function(a) {
            return Number(a)
        })
    }

    function Bm(a) {
        J(pm).o.includes(a) || xm(qm(4), a)
    };

    function Cm(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function Dm(a, b, c) {
        return b[a] || c
    }

    function Em(a) {
        Cm(5, sm, a);
        Cm(6, tm, a);
        Cm(7, um, a);
        Cm(8, vm, a);
        Cm(17, wm, a);
        Cm(13, zm, a);
        Cm(15, Bm, a)
    }

    function Fm(a) {
        Cm(4, function(b) {
            J(jm).Ha = b
        }, a);
        Cm(9, function(b, c) {
            var d = J(jm);
            d.Ha[3][b] == null && (d.Ha[3][b] = c)
        }, a);
        Cm(10, function(b, c) {
            var d = J(jm);
            d.Ha[4][b] == null && (d.Ha[4][b] = c)
        }, a);
        Cm(11, function(b, c) {
            var d = J(jm);
            d.Ha[5][b] == null && (d.Ha[5][b] = c)
        }, a);
        Cm(14, function(b) {
            for (var c = J(jm), d = v([3, 4, 5]), e = d.next(); !e.done; e = d.next()) e = e.value, Object.assign(c.Ha[e], b[e])
        }, a)
    }

    function Gm(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };
    var Hm = function() {};
    Hm.prototype.j = function() {};
    Hm.prototype.g = function() {
        return []
    };
    var Im = function(a, b, c) {
        a.j = function(d, e) {
            Dm(2, b, function() {
                return []
            })(d, c, e)
        };
        a.g = function() {
            return Dm(3, b, function() {
                return []
            })(c)
        }
    };
    var Jm = function(a, b, c) {
            this.id = a;
            this.H = b;
            this.j = c;
            this.g = !1
        },
        Km = function(a) {
            return a.g || a.j
        },
        Lm = function() {
            this.g = []
        },
        Mm = function() {
            this.g = new Map;
            this.j = !1;
            this.o = new Lm;
            this.A = new Jm(0, 0, !1);
            this.l = [this.o]
        },
        M = function(a) {
            var b = Nm;
            if (b.j || b.g.has(a.id) || a.H == null && a.control == null || a.ij == 0) return b.A;
            var c = b.o;
            if (a.control != null)
                for (var d = v(b.l), e = d.next(); !e.done; e = d.next()) {
                    if (e = e.value, e.g.includes(a.control)) {
                        c = e;
                        break
                    }
                } else a.ca != null && (c = a.ca);
            d = 0;
            a.control != null ? d = a.control.H : a.H != null &&
                (d = a.H);
            a = new Jm(a.id, d, !!a.lj);
            c.g.push(a);
            b.l.includes(c) || b.l.push(c);
            b.g.set(a.id, a);
            return a
        },
        Om = function() {
            var a = Nm;
            a = [].concat(ia(a.g.keys())).filter(function(c) {
                return Km(this.g.get(c))
            }, a);
            var b = J(Hm).g();
            return [].concat(ia(a), ia(b))
        },
        Pm = function(a) {
            var b = Nm;
            b.j || (a.g(b.l, b.g), b.j = !0)
        };
    Mm.prototype.reset = function() {
        for (var a = v(this.g), b = a.next(); !b.done; b = a.next()) b = v(b.value), b.next(), b.next().value.g = !1;
        this.j = !1
    };
    var Nm = new Mm,
        Rm = function() {
            return Qm.g.filter(function(a) {
                return Km(a)
            }).map(function(a) {
                return a.id
            })
        };
    var Sm = function() {};
    Sm.prototype.g = function(a) {
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0,
                d = Math.floor(Math.random() * 1E3);
            b = v(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value, c += e.H, d < c) {
                    e.g = !0;
                    break
                }
        }
    };
    var Tm = function(a) {
        this.j = a
    };
    Tm.prototype.g = function(a, b) {
        a = v(this.j);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value)) c.g = !0
    };
    var Um = function(a, b) {
        this.j = a;
        this.l = b
    };
    x(Um, Tm);
    Um.prototype.g = function(a, b) {
        Tm.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = v(this.j), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        L(K.getInstance(), "sei", b);
        L(K.getInstance(), "nsei", a);
        L(K.getInstance(), "bi", this.l)
    };
    var Vm = function() {
        Ll.apply(this, arguments)
    };
    x(Vm, Ll);
    var Ml = function(a, b) {
        var c = K.getInstance();
        L(c, "eee", a);
        L(c, "bi", b)
    };
    Vm.getInstance = function() {
        return J(Vm)
    };

    function Wm() {
        return Xm.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    };
    var Qm = new Lm,
        Ym = new Lm,
        Zm = new Lm,
        $m = new Lm,
        an = new Lm,
        bn = new Lm,
        cn = new Lm,
        dn = new Lm,
        en = new Lm,
        fn = new Lm,
        gn = new Lm;
    M({
        id: 95329493,
        H: 0
    });
    M({
        id: 95329494,
        H: 0
    });
    M({
        id: 318475490,
        H: 0
    });
    M({
        id: 324123032,
        H: 0
    });
    M({
        id: 420706097,
        H: 10
    });
    M({
        id: 420706098,
        H: 10
    });
    M({
        id: 21062100,
        H: 0
    });
    M({
        id: 420706142,
        H: 0
    });
    M({
        id: 44745813,
        H: 0
    });
    M({
        id: 44746068,
        H: 0
    });
    M({
        id: 21064565,
        H: 0
    });
    M({
        id: 21064567,
        H: 0
    });
    M({
        id: 418572006,
        H: 10
    });
    var hn = M({
            id: 44768716,
            H: 10,
            ca: $m
        }),
        jn = M({
            id: 44768717,
            H: 10,
            ca: $m
        }),
        kn = M({
            id: 44787137,
            H: 0,
            ca: $m
        });
    M({
        id: 95334214,
        H: 10
    });
    M({
        id: 95334215,
        H: 10
    });
    M({
        id: 44749839,
        H: 0
    });
    M({
        id: 44714743,
        H: 0
    });
    M({
        id: 44715336,
        H: 10
    });
    M({
        id: 44724516,
        H: 0
    });
    M({
        id: 44726389,
        H: 10
    });
    M({
        id: 44752711,
        H: 50
    });
    M({
        id: 44752052,
        H: 50
    });
    M({
        id: 44752657,
        H: 50
    });
    M({
        id: 44733246,
        H: 10
    });
    M({
        id: 44750823,
        H: 10,
        ca: Ym
    });
    M({
        id: 44750824,
        H: 10,
        ca: Ym
    });
    M({
        id: 44794282,
        H: 10,
        ca: Ym
    });
    M({
        id: 44797013,
        H: 10,
        ca: Ym
    });
    M({
        id: 44797014,
        H: 10,
        ca: Ym
    });
    M({
        id: 44750822,
        H: 10,
        ca: Ym
    });
    M({
        id: 44751889,
        H: 10
    });
    M({
        id: 44751890,
        H: 10
    });
    M({
        id: 44752995,
        H: 10
    });
    M({
        id: 44752996,
        H: 10
    });
    M({
        id: 44762627,
        H: 0
    });
    M({
        id: 44762628,
        H: 0
    });
    M({
        id: 44801479,
        H: 10,
        ca: Zm
    });
    M({
        id: 44801480,
        H: 10,
        ca: Zm
    });
    M({
        id: 44752538,
        H: 0
    });
    M({
        id: 44754608,
        H: 10
    });
    M({
        id: 44754609,
        H: 10
    });
    M({
        id: 75259414,
        H: 0
    });
    M({
        id: 44776384,
        H: 0
    });
    M({
        id: 95322945,
        H: 10
    });
    var ln = M({
        id: 95322946,
        H: 10
    });
    M({
        id: 44787954,
        H: 0
    });
    M({
        id: 44789282,
        H: 0
    });
    M({
        id: 44792636,
        H: 0
    });
    M({
        id: 44794298,
        H: 0
    });
    M({
        id: 44803996,
        H: 0
    });
    M({
        id: 44805453,
        H: 0
    });
    M({
        id: 44804917,
        H: 0
    });
    M({
        id: 95334260,
        H: 0
    });
    var mn = M({
            id: 75259416,
            H: 0
        }),
        nn = M({
            id: 75259420,
            H: 0
        }),
        on = M({
            id: 75259421,
            H: 0
        });
    M({
        id: 44785452,
        H: 10
    });
    M({
        id: 44785453,
        H: 10
    });
    M({
        id: 45401791,
        H: 0
    });
    M({
        id: 95326337,
        H: 990,
        ca: an
    });
    M({
        id: 95336735,
        H: 50,
        ca: en
    });
    M({
        id: 95336736,
        H: 50,
        ca: en
    });
    var pn = window.navigator || {},
        qn = pn.cookieDeprecationLabel ? 990 : 0;
    M({
        id: 95322906,
        H: pn.cookieDeprecationLabel ? 10 : 0,
        ca: bn
    });
    var rn = M({
            id: 95320461,
            H: 0,
            ca: bn
        }),
        sn = M({
            id: 95322907,
            H: qn,
            ca: bn
        });
    M({
        id: 44807614,
        H: 10
    });
    M({
        id: 44807615,
        H: 10
    });
    M({
        id: 44809192,
        H: 10,
        ca: dn
    });
    M({
        id: 44809193,
        H: 10,
        ca: dn
    });
    M({
        id: 95320804,
        H: 10,
        ca: dn
    });
    M({
        id: 95320805,
        H: 10,
        ca: dn
    });
    M({
        id: 95322027,
        H: 1E3,
        ca: cn
    });
    var tn = M({
        id: 46130031,
        H: 0
    });
    M({
        id: 95328713,
        H: 10
    });
    M({
        id: 95328714,
        H: 10
    });
    var un = M({
        id: 95327848,
        H: 0
    });
    M({
        id: 95335486,
        H: 100,
        ca: gn
    });
    var vn = M({
        id: 95335487,
        H: 100,
        ca: gn
    });
    M({
        id: 95327717,
        H: 10,
        ca: fn
    });
    M({
        id: 95327718,
        H: 10,
        ca: fn
    });
    M({
        id: 31065644,
        H: 1
    });
    var wn = M({
            id: 31065645,
            H: 1
        }),
        xn = new Lm;
    M({
        id: 95331588,
        H: 0,
        ca: xn
    });
    M({
        id: 95331589,
        H: 1E3,
        ca: xn
    });
    var yn = M({
            id: 95332182,
            H: 0
        }),
        zn = typeof window.sharedStorage !== "undefined" ? 50 : 0;
    M({
        id: 95338844,
        H: zn
    });
    M({
        id: 95338845,
        H: zn
    });
    M({
        id: 95338109,
        H: 1
    });
    M({
        id: 95338110,
        H: 1
    });
    if (typeof window.initializeVirtualDom === "undefined") {
        var Ol = Vm.getInstance();
        Ol.j || (Pl(), Ol.j = !0);
        var Xm = Ol.l,
            An;
        Ol.j || (Pl(), Ol.j = !0);
        An = Ol.g;
        if (Xm != null) {
            var Bn = new Um(Wm(), An);
            Pm(Bn)
        }
    };
    var Cn = function(a) {
        this.F = B(a)
    };
    x(Cn, H);
    Cn.prototype.getId = function() {
        return Lf(this, 1)
    };
    Cn.ba = [2];
    var Dn = function(a) {
        this.F = B(a)
    };
    x(Dn, H);
    var En = function(a) {
        return Cf(a, Cn, 2, ef())
    };
    Dn.ba = [2];
    var Fn = function(a) {
        this.F = B(a)
    };
    x(Fn, H);
    Fn.ba = [2];
    var Gn = function(a) {
        this.F = B(a)
    };
    x(Gn, H);
    var Hn = function(a) {
        this.F = B(a)
    };
    x(Hn, H);
    Hn.ba = [1, 4, 2, 3];
    var In = function(a) {
        return function(b) {
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error("Expected jspb data to be an array, got " + Ra(b) + ": " + b);
            pd(b);
            return new a(b)
        }
    }(Hn);

    function Jn() {
        return Me(In("[[[45638669,null,null,[]],[null,45638670,null,[]],[45637656,null,null,[]],[null,45637657,null,[]],[45643344,null,null,[]],[45642592,null,null,[]],[45642676,null,null,[]],[45640378,null,null,[]]],[[16,[[1000,[[95332046]]],[null,[[95332047]]],[10,[[95333808],[95333809,[[635466687,null,null,[1]]]]]],[50,[[95334996],[95334997,[[45637656,null,null,[1]],[null,45637657,null,[]]]],[95334998,[[45637656,null,null,[1]],[null,45637657,null,[null,500]]]]]],[50,[[95335506],[95335507,[[45638669,null,null,[1]],[null,45638670,null,[]]]],[95335508,[[45638669,null,null,[1]],[null,45638670,null,[null,500]]]]]],[10,[[95336351],[95336352,[[45640378,null,null,[1]]]]]],[10,[[95336859],[95336860,[[45641707,null,null,[1]]]]]],[null,[[95337286],[95337287,[[45642676,null,null,[1]]]]]],[10,[[95337288],[95337289,[[45642592,null,null,[1]]]]]],[10,[[95337679],[95337680,[[45643344,null,null,[1]]]]]]]]],null,null,[null,1000,1,1000]]"))
    };
    var Kn = ["A9AxgGSwmnfgzzkyJHILUr3H8nJ/3D+57oAsL4DBt4USlng4jZ0weq+fZtHC/Qwwn6gd4QSa5DzT3OBif+kXVA0AAAB4eyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", "AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ=="];

    function Ln(a, b) {
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.features().includes(a))
    }

    function Mn(a, b) {
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a))
    }

    function Nn() {
        var a = window.navigator,
            b = window.document;
        return !!(window.isSecureContext && "runAdAuction" in a && a.runAdAuction instanceof Function && Mn("run-ad-auction", b))
    };

    function On(a, b) {
        try {
            var c = a.split(".");
            a = y;
            for (var d = 0, e; a != null && d < c.length; d++) e = a, a = a[c[d]], typeof a === "function" && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }
    var Pn = {},
        Qn = {},
        Rn = {},
        Sn = {},
        Tn = (Sn[3] = (Pn[8] = function(a) {
            try {
                return Pa(a) != null
            } catch (b) {}
        }, Pn[9] = function(a) {
            try {
                var b = Pa(a)
            } catch (c) {
                return
            }
            return typeof b === "function" && $i(b)
        }, Pn[10] = function() {
            return window === window.top
        }, Pn[6] = function(a) {
            return dc(J(Hm).g(), Number(a))
        }, Pn[27] = function(a) {
            a = On(a, "boolean");
            return a !== void 0 ? a : void 0
        }, Pn[60] = function(a) {
            try {
                return !!y.document.querySelector(a)
            } catch (b) {}
        }, Pn[80] = function(a) {
            try {
                return !!y.matchMedia(a).matches
            } catch (b) {}
        }, Pn[69] = function(a) {
            return Ln(a,
                y.document)
        }, Pn[70] = function(a) {
            return Mn(a, y.document)
        }, Pn[79] = function(a) {
            var b = y.navigator;
            b = b === void 0 ? navigator : b;
            try {
                var c, d;
                var e = !!((c = b.protectedAudience) == null ? 0 : (d = c.queryFeatureSupport) == null ? 0 : d.call(c, a))
            } catch (f) {
                e = !1
            }
            return e
        }, Pn), Sn[4] = (Qn[3] = function() {
            return cj()
        }, Qn[6] = function(a) {
            a = On(a, "number");
            return a !== void 0 ? a : void 0
        }, Qn), Sn[5] = (Rn[2] = function() {
            return window.location.href
        }, Rn[3] = function() {
            try {
                return window.top.location.hash
            } catch (a) {
                return ""
            }
        }, Rn[4] = function(a) {
            a = On(a,
                "string");
            return a !== void 0 ? a : void 0
        }, Rn), Sn);

    function Un() {
        var a = a === void 0 ? y : a;
        return a.ggeac || (a.ggeac = {})
    };

    function Vn(a) {
        var b = {};
        return Wn((b[0] = new Map, b[1] = new Map, b[2] = new Map, b), a)
    }

    function Wn(a, b) {
        for (var c = new Map, d = v(a[1].entries()), e = d.next(); !e.done; e = d.next()) {
            var f = v(e.value);
            e = f.next().value;
            f = f.next().value;
            f = f[f.length - 1];
            c.set(e, f.kf + f.Qe * f.Re)
        }
        b = v(b);
        for (d = b.next(); !d.done; d = b.next())
            for (d = d.value, e = Cf(d, Dn, 2, ef()), e = v(e), f = e.next(); !f.done; f = e.next())
                if (f = f.value, En(f).length !== 0) {
                    var g = Mf(f, 8);
                    if (F(f, 4) && !F(f, 13)) {
                        var h = void 0;
                        g = (h = c.get(F(f, 4))) != null ? h : 0;
                        h = Mf(f, 1) * En(f).length;
                        c.set(F(f, 4), g + h)
                    }
                    h = [];
                    for (var k = 0; k < En(f).length; k++) {
                        var n = {
                            kf: g,
                            Qe: Mf(f, 1),
                            Re: En(f).length,
                            Rg: k,
                            Ec: F(d, 1),
                            md: f,
                            Na: En(f)[k]
                        };
                        h.push(n)
                    }
                    Xn(a[2], F(f, 10), h) || Xn(a[1], F(f, 4), h) || Xn(a[0], En(f)[0].getId(), h)
                }
        return a
    }

    function Xn(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        var d;
        (d = a.get(b)).push.apply(d, ia(c));
        return !0
    };
    var Yn = [12, 13, 20],
        Zn = function(a, b, c, d) {
            d = d === void 0 ? {} : d;
            var e = d.Dd === void 0 ? !1 : d.Dd;
            d = d.gh === void 0 ? [] : d.gh;
            this.dc = a;
            this.qb = c;
            this.o = {};
            this.Dd = e;
            a = {};
            this.g = (a[b] = [], a[4] = [], a);
            this.j = {};
            this.l = {};
            if (b = mj())
                for (b = v(b.split(",") || []), a = b.next(); !a.done; a = b.next())(a = Number(a.value)) && (this.j[a] = !0);
            d = v(d);
            for (b = d.next(); !b.done; b = d.next()) this.j[b.value] = !0
        },
        bo = function(a, b, c, d) {
            var e = [],
                f;
            if (f = b !== 9) a.o[b] ? f = !0 : (a.o[b] = !0, f = !1);
            if (f) return gm(a.qb, b, c, e, [], 4), e;
            f = Yn.includes(b);
            for (var g = [], h = [], k = v([0, 1, 2]), n = k.next(); !n.done; n = k.next()) {
                n = n.value;
                for (var m = v(a.dc[n].entries()), p = m.next(); !p.done; p = m.next()) {
                    var r = v(p.value);
                    p = r.next().value;
                    r = r.next().value;
                    var t = p,
                        u = r;
                    p = new ak;
                    r = u.filter(function(da) {
                        return da.Ec === b && a.j[da.Na.getId()] && $n(a, da)
                    });
                    if (r.length)
                        for (p = v(r), r = p.next(); !r.done; r = p.next()) h.push(r.value.Na);
                    else if (!a.Dd) {
                        r = void 0;
                        n === 2 ? (r = d[1], tf(p, 2, bk, Ud(t))) : r = d[0];
                        var w = void 0,
                            E = void 0;
                        r = (E = (w = r) == null ? void 0 : w(String(t))) != null ? E : n === 2 && F(u[0].md, 11) === 1 ? void 0 : d[0](String(t));
                        if (r !== void 0) {
                            t = v(u);
                            for (u = t.next(); !u.done; u = t.next())
                                if (u = u.value, u.Ec === b) {
                                    w = r - u.kf;
                                    var Y = u;
                                    E = Y.Qe;
                                    var V = Y.Re;
                                    Y = Y.Rg;
                                    w < 0 || w >= E * V || w % V !== Y || !$n(a, u) || (w = F(u.md, 13), w !== 0 && w !== void 0 && (E = a.l[String(w)], E !== void 0 && E !== u.Na.getId() ? hm(a.qb, a.l[String(w)], u.Na.getId(), w) : a.l[String(w)] = u.Na.getId()), h.push(u.Na))
                                }
                            uf(p, bk) !== 0 && (Wf(p, 3, r), g.push(p))
                        }
                    }
                }
            }
            d = v(h);
            for (h = d.next(); !h.done; h = d.next()) h = h.value, k = h.getId(), e.push(k), ao(a, k, f ? 4 : c), ym(Cf(h, bm, 2, ef()), f ? Am() : [c], a.qb, k);
            gm(a.qb, b, c, e, g, 1);
            return e
        },
        ao = function(a, b, c) {
            a.g[c] || (a.g[c] = []);
            a = a.g[c];
            a.includes(b) || a.push(b)
        },
        $n = function(a, b) {
            var c = J(jm).Ha,
                d = $l(Af(b.md, nk, 3), c);
            if (!d.success) return im(a.qb, Af(b.md, nk, 3), b.Ec, b.Na.getId(), d), !1;
            if (!d.value) return !1;
            c = $l(Af(b.Na, nk, 3), c);
            return c.success ? c.value ? !0 : !1 : (im(a.qb, Af(b.Na, nk, 3), b.Ec, b.Na.getId(), c), !1)
        },
        co = function(a, b) {
            b = b.map(function(c) {
                return new Fn(c)
            }).filter(function(c) {
                return !Yn.includes(F(c, 1))
            });
            a.dc = Wn(a.dc, b)
        },
        eo = function(a, b) {
            Cm(1, function(c) {
                a.j[c] = !0
            }, b);
            Cm(2, function(c,
                d, e) {
                return bo(a, c, d, e)
            }, b);
            Cm(3, function(c) {
                return (a.g[c] || []).concat(a.g[4])
            }, b);
            Cm(12, function(c) {
                return void co(a, c)
            }, b);
            Cm(16, function(c, d) {
                return void ao(a, c, d)
            }, b)
        };
    var fo = function() {
        var a = {};
        this.g = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.o = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.A = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.B = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.l = function(b, c) {
            return a[b] != null ? c.concat(a[b]) : c
        };
        this.j = function() {}
    };

    function go(a) {
        return J(fo).g(a.g, a.defaultValue)
    };
    var ho = function() {
            this.g = function() {}
        },
        io = function(a, b) {
            a.g = Dm(14, b, function() {})
        };

    function jo(a) {
        J(ho).g(a)
    };
    var ko, lo, mo, no, oo, po;

    function qo(a, b) {
        var c = b = b === void 0 ? Un() : b;
        Im(J(Hm), c, a);
        ro(b, a);
        a = b;
        io(J(ho), a);
        J(fo).j()
    }

    function ro(a, b) {
        var c = J(fo);
        c.g = function(d, e) {
            return Dm(5, a, function() {
                return !1
            })(d, e, b)
        };
        c.o = function(d, e) {
            return Dm(6, a, function() {
                return 0
            })(d, e, b)
        };
        c.A = function(d, e) {
            return Dm(7, a, function() {
                return ""
            })(d, e, b)
        };
        c.B = function(d, e) {
            return Dm(8, a, function() {
                return []
            })(d, e, b)
        };
        c.l = function(d, e) {
            return Dm(17, a, function() {
                return []
            })(d, e, b)
        };
        c.j = function() {
            Dm(15, a, function() {})(b)
        }
    };
    Nm.reset();
    Pm(new Sm);
    (function(a) {
        var b = a.qg;
        var c = a.Ha;
        var d = a.config;
        var e = a.ag === void 0 ? Un() : a.ag;
        var f = a.ze === void 0 ? 0 : a.ze;
        var g = a.qb === void 0 ? new em((no = (ko = Af(b, Gn, 5)) == null ? void 0 : Nf(ko, 2)) != null ? no : 0, (oo = (lo = Af(b, Gn, 5)) == null ? void 0 : Nf(lo, 4)) != null ? oo : 0, (po = (mo = Af(b, Gn, 5)) == null ? void 0 : Kf(mo, 3)) != null ? po : !1) : a.qb;
        a = a.dc === void 0 ? Vn(Cf(b, Fn, 2, ef(Cd))) : a.dc;
        e.hasOwnProperty("init-done") ? (Dm(12, e, function() {})(Cf(b, Fn, 2, ef()).map(function(h) {
            return ag(h)
        })), Dm(13, e, function() {})(Cf(b, bm, 1, ef()).map(function(h) {
                return ag(h)
            }),
            f), c && Dm(14, e, function() {})(c), qo(f, e)) : (eo(new Zn(a, f, g, d), e), Em(e), Fm(e), Gm(e), qo(f, e), ym(Cf(b, bm, 1, ef(Cd)), [f], g, void 0, !0), km = km || !(!d || !d.nj), jo(Tn), c && jo(c))
    })({
        qg: Jn(),
        ze: 7
    });
    var so = dj(),
        to = {},
        uo = (to[0] = function(a) {
            a = a === void 0 ? Vi() : a;
            return function(b) {
                return Xi(b + " + " + a) % 1E3
            }
        }(so), to);
    J(Hm).j(16, uo);
    var vo = function(a) {
        var b = {};
        Sb(a, function(c) {
            var d = c.g,
                e = b[d];
            b.hasOwnProperty(d) ? e !== null && (c.j(e) || (b[d] = null)) : b[d] = c
        });
        gc(a, function(c) {
            return b[c.g] === null
        })
    };
    var wo = {
            NONE: 0,
            Qh: 1
        },
        xo = {
            Oh: 0,
            Li: 1,
            Ki: 2,
            Mi: 3
        },
        yo = {
            uf: "a",
            Ph: "d",
            VIDEO: "v"
        };
    var zo = function() {
        this.X = 0;
        this.g = !1;
        this.j = -1;
        this.yb = !1;
        this.ta = 0
    };
    zo.prototype.isVisible = function() {
        return this.yb ? this.X >= .3 : this.X >= .5
    };
    var Ao = {
            Nh: 0,
            Th: 1
        },
        Bo = {
            668123728: 0,
            668123729: 1
        },
        Co = {
            44731964: 0,
            44731965: 1
        },
        Do = {
            NONE: 0,
            yi: 1,
            Yh: 2
        },
        Eo = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        };
    var Fo = function() {
            this.g = null;
            this.o = !1;
            this.l = null
        },
        Go = function(a) {
            a.o = !0;
            return a
        },
        Ho = function(a, b) {
            a.l && Sb(b, function(c) {
                c = a.l[c];
                c !== void 0 && a.j(c)
            })
        };
    Fo.prototype.getValue = function() {
        return this.g
    };
    var Io = function(a) {
        Fo.call(this);
        this.A = a
    };
    x(Io, Fo);
    Io.prototype.j = function(a) {
        this.g === null && uh(this.A, a) && (this.g = a)
    };
    var Jo = function() {
        Fo.call(this)
    };
    x(Jo, Fo);
    Jo.prototype.j = function(a) {
        this.g === null && typeof a === "number" && (this.g = a)
    };
    var Ko = function() {
        Fo.call(this)
    };
    x(Ko, Fo);
    Ko.prototype.j = function(a) {
        this.g === null && typeof a === "string" && (this.g = a)
    };
    var Lo = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    };
    Lo.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.j = {}
    };
    var Mo = function(a, b, c) {
            a.g[b] || (a.g[b] = new Io(c));
            return a.g[b]
        },
        No = function(a) {
            a.g.queryid || (a.g.queryid = new Ko)
        },
        Oo = function(a, b, c) {
            (a = a.g[b]) && a.j(c)
        },
        Po = function(a, b) {
            if (th(a.j, b)) return a.j[b];
            if (a = a.g[b]) return a.getValue()
        },
        Qo = function(a) {
            var b = {},
                c = nh(a.g, function(d) {
                    return d.o
                });
            mh(c, function(d, e) {
                d = a.j[e] !== void 0 ? String(a.j[e]) : d.o && d.g !== null ? String(d.g) : "";
                d.length > 0 && (b[e] = d)
            }, a);
            return b
        },
        Ro = function(a) {
            a = Qo(a);
            var b = [];
            mh(a, function(c, d) {
                d in Object.prototype || typeof c != "undefined" &&
                    b.push([d, ":", c].join(""))
            });
            return b
        },
        So = function() {
            var a = N().R,
                b = Rm();
            a.l && Sb(qh(a.g), function(c) {
                return Ho(c, b)
            })
        };
    var To = function(a) {
        Mo(a, "od", wo);
        Go(Mo(a, "opac", Ao));
        Go(Mo(a, "sbeos", Ao));
        Go(Mo(a, "prf", Ao));
        Go(Mo(a, "mwt", Ao));
        Mo(a, "iogeo", Ao)
    };
    var Uo = document,
        O = window;
    var Vo = !sc && !Nb();
    var Wo = function() {
        this.g = this.pb = null
    };
    var Xo = function() {};
    Xo.prototype.now = function() {
        return 0
    };
    Xo.prototype.j = function() {
        return 0
    };
    Xo.prototype.l = function() {
        return 0
    };
    Xo.prototype.g = function() {
        return 0
    };
    var Zo = function() {
        if (!Yo()) throw Error();
    };
    x(Zo, Xo);
    var Yo = function() {
        return !(!O || !O.performance)
    };
    Zo.prototype.now = function() {
        return Yo() && O.performance.now ? O.performance.now() : Xo.prototype.now.call(this)
    };
    Zo.prototype.j = function() {
        return Yo() && O.performance.memory ? O.performance.memory.totalJSHeapSize || 0 : Xo.prototype.j.call(this)
    };
    Zo.prototype.l = function() {
        return Yo() && O.performance.memory ? O.performance.memory.usedJSHeapSize || 0 : Xo.prototype.l.call(this)
    };
    Zo.prototype.g = function() {
        return Yo() && O.performance.memory ? O.performance.memory.jsHeapSizeLimit || 0 : Xo.prototype.g.call(this)
    };
    var $o = function() {};
    $o.prototype.isVisible = function() {
        return ml(Uo) === 1
    };
    var ap = function(a, b) {
            this.g = a;
            this.depth = b
        },
        cp = function() {
            var a = hj(),
                b = Math.max(a.length - 1, 0),
                c = kj(a);
            a = c.g;
            var d = c.j,
                e = c.l,
                f = [];
            c = function(h, k) {
                return h == null ? k : h
            };
            e && f.push(new ap([e.url, e.Kd ? 2 : 0], c(e.depth, 1)));
            d && d != e && f.push(new ap([d.url, 2], 0));
            a.url && a != e && f.push(new ap([a.url, 0], c(a.depth, b)));
            var g = Xb(f, function(h, k) {
                return f.slice(0, f.length - k)
            });
            !a.url || (e || d) && a != e || (d = Yi(a.url)) && g.push([new ap([d, 1], c(a.depth, b))]);
            g.push([]);
            return Xb(g, function(h) {
                return bp(b, h)
            })
        };

    function bp(a, b) {
        var c = Yb(b, function(e, f) {
                return Math.max(e, f.depth)
            }, -1),
            d = mc(c + 2);
        d[0] = a;
        Sb(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }

    function dp() {
        var a = a === void 0 ? cp() : a;
        return a.map(function(b) {
            return zj(b)
        })
    };
    var ep = function() {
            this.j = new $o;
            this.g = Yo() ? new Zo : new Xo
        },
        gp = function() {
            fp();
            var a = O.document;
            return !!(a && a.body && a.body.getBoundingClientRect && typeof O.setInterval === "function" && typeof O.clearInterval === "function" && typeof O.setTimeout === "function" && typeof O.clearTimeout === "function")
        };
    ep.prototype.setTimeout = function(a, b) {
        return O.setTimeout(a, b)
    };
    ep.prototype.clearTimeout = function(a) {
        O.clearTimeout(a)
    };
    var hp = function() {
        fp();
        return dp()
    };
    var ip = function() {},
        fp = function() {
            var a = J(ip);
            if (!a.g) {
                if (!O) throw Error("Context has not been set and window is undefined.");
                a.g = J(ep)
            }
            return a.g
        };
    var jp = function(a) {
        this.F = B(a)
    };
    x(jp, H);
    jp.prototype.g = $g([0, Mg, Pg, -2, Sg]);
    var kp = function(a) {
            this.l = a;
            this.g = -1;
            this.j = this.o = 0
        },
        lp = function(a, b) {
            return function() {
                var c = Ja.apply(0, arguments);
                if (a.g > -1) return b.apply(null, ia(c));
                try {
                    return a.g = a.l.g.now(), b.apply(null, ia(c))
                } finally {
                    a.o += a.l.g.now() - a.g, a.g = -1, a.j += 1
                }
            }
        };
    var mp = function(a, b) {
        this.j = a;
        this.l = b;
        this.g = new kp(a)
    };
    var np = function() {
            this.g = {}
        },
        pp = function() {
            var a = N().flags,
                b = op;
            a = a.g[b.key];
            if (b.valueType === "proto") {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var qp = {
        Hi: 1,
        Yi: 2,
        Di: 3
    };
    var rp = function() {
        this.l = void 0;
        this.j = this.B = 0;
        this.A = -1;
        this.R = new Lo;
        Go(Mo(this.R, "mv", Do)).l = Eo === void 0 ? null : Eo;
        Mo(this.R, "omid", Ao);
        Go(Mo(this.R, "epoh", Ao));
        Go(Mo(this.R, "epph", Ao));
        Go(Mo(this.R, "umt", Ao)).l = Bo === void 0 ? null : Bo;
        Go(Mo(this.R, "phel", Ao));
        Go(Mo(this.R, "phell", Ao));
        Go(Mo(this.R, "oseid", qp));
        var a = this.R;
        a.g.sloi || (a.g.sloi = new Jo);
        Go(a.g.sloi);
        Mo(this.R, "mm", yo);
        Go(Mo(this.R, "ovms", xo));
        Go(Mo(this.R, "xdi", Ao));
        Go(Mo(this.R, "amp", Ao));
        Go(Mo(this.R, "prf", Ao));
        Go(Mo(this.R, "gtx", Ao));
        Go(Mo(this.R, "mvp_lv", Ao));
        Go(Mo(this.R, "ssmol", Ao)).l = Co === void 0 ? null : Co;
        Go(Mo(this.R, "fmd", Ao));
        Mo(this.R, "gen204simple", Ao);
        this.g = new mp(fp(), this.R);
        this.o = !1;
        this.flags = new np
    };
    rp.prototype.Wd = function(a) {
        if (typeof a === "string" && a.length != 0) {
            var b = this.R;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; c >= 0; c--) {
                    var d = a[c].split("="),
                        e = decodeURIComponent(d[0]);
                    d.length > 1 ? (d = decodeURIComponent(d[1]), d = /^[0-9]+$/g.exec(d) ? parseInt(d, 10) : d) : d = 1;
                    (e = b.g[e]) && e.j(d)
                }
            }
        }
    };
    var N = function() {
        return J(rp)
    };
    var sp = function(a, b, c, d, e) {
        if ((d ? a.l : Math.random()) < (e || a.g)) try {
            if (c instanceof xj) var f = c;
            else f = new xj, Wi(c, function(h, k) {
                var n = f,
                    m = n.o++;
                Bj(n, m, yj(k, h))
            });
            var g = Ej(f, a.j, "/pagead/gen_204?id=" + b + "&");
            g && (fp(), Lj(O, g))
        } catch (h) {}
    };
    var vp = function() {
        var a = tp;
        this.B = up;
        this.A = "jserror";
        this.l = !0;
        this.j = null;
        this.C = this.Xa;
        this.g = a === void 0 ? null : a;
        this.o = !1
    };
    l = vp.prototype;
    l.gd = function(a) {
        this.j = a
    };
    l.ee = function(a) {
        this.A = a
    };
    l.fe = function(a) {
        this.l = a
    };
    l.ge = function(a) {
        this.o = a
    };
    l.Ab = function(a, b, c) {
        var d = this;
        return lp(N().g.g, function() {
            try {
                if (d.g && d.g.l) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else f = b()
            } catch (h) {
                var g = d.l;
                try {
                    wj(e), g = d.C(a, new wp(xp(h)), void 0, c)
                } catch (k) {
                    d.Xa(217, k)
                }
                if (!g) throw h;
            }
            return f
        })()
    };
    l.Xd = function(a, b, c, d) {
        var e = this;
        return lp(N().g.g, function() {
            var f = Ja.apply(0, arguments);
            return e.Ab(a, function() {
                return b.apply(c, f)
            }, d)
        })
    };
    l.Xa = function(a, b, c, d, e) {
        e = e || this.A;
        try {
            var f = new xj;
            Cj(f, 1, "context", a);
            dh(b) || (b = new wp(xp(b)));
            b.msg && Cj(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.j) try {
                this.j(g)
            } catch (k) {}
            if (d) try {
                d(g)
            } catch (k) {}
            Bj(f, 3, [g]);
            var h = kj();
            h.j && Cj(f, 4, "top", h.j.url || "");
            Bj(f, 5, [{
                url: h.g.url || ""
            }, {
                url: h.g.url ? Mi(h.g.url) : ""
            }]);
            sp(this.B, e, f, this.o, c)
        } catch (k) {
            try {
                sp(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: xp(k),
                    url: h && h.g.url
                }, this.o, c)
            } catch (n) {}
        }
        return this.l
    };
    var xp = function(a) {
            var b = a.toString();
            a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
            a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
            if (a.stack) a: {
                a = a.stack;
                var c = b;
                try {
                    a.indexOf(c) == -1 && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n");
                    break a
                } catch (e) {
                    b = c;
                    break a
                }
                b = void 0
            }
            return b
        },
        wp = function(a) {
            ch.call(this, Error(a), {
                message: a
            })
        };
    x(wp, ch);
    var up, yp, tp = new vj(1, window),
        zp = function() {
            O && typeof O.google_measure_js_timing != "undefined" && (O.google_measure_js_timing || tp.B())
        };
    up = new function() {
        var a = "https:";
        O && O.location && O.location.protocol === "http:" && (a = "http:");
        this.j = a;
        this.g = .01;
        this.l = Math.random()
    };
    yp = new vp;
    O && O.document && (O.document.readyState == "complete" ? zp() : tp.l && kh(O, "load", function() {
        zp()
    }));
    var Ap = function(a) {
            yp.gd(function(b) {
                Sb(a, function(c) {
                    c(b)
                })
            })
        },
        Bp = function(a, b) {
            return yp.Ab(a, b)
        },
        Cp = function(a, b, c, d) {
            return yp.Xd(a, b, c, d)
        },
        Dp = function(a, b, c, d) {
            yp.Xa(a, b, c, d)
        };
    var Ep = Date.now(),
        Vp = -1,
        Wp = -1,
        Xp, Yp = -1,
        Zp = !1,
        $p = function() {
            return Date.now() - Ep
        },
        aq = function() {
            var a = N().l,
                b = Wp >= 0 ? $p() - Wp : -1,
                c = Zp ? $p() - Vp : -1,
                d = Yp >= 0 ? $p() - Yp : -1;
            if (a == 947190542) return 100;
            if (a == 79463069) return 200;
            a = [2E3, 4E3];
            var e = [250, 500, 1E3];
            Dp(637, Error(), .001);
            var f = b;
            c != -1 && c < b && (f = c);
            for (b = 0; b < a.length; ++b)
                if (f < a[b]) {
                    var g = e[b];
                    break
                }
            g === void 0 && (g = e[a.length]);
            return d != -1 && d > 1500 && d < 4E3 ? 500 : g
        };
    var bq = function(a, b, c) {
        var d = new I(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.j = c
    };
    var cq = function(a, b, c, d, e, f, g) {
        this.l = a;
        this.j = b;
        this.A = c;
        this.g = d;
        this.o = e;
        this.C = f;
        this.B = g
    };
    cq.prototype.getTimestamp = function() {
        return this.C
    };
    var dq = {
            currentTime: 1,
            duration: 2,
            isVpaid: 4,
            volume: 8,
            isYouTube: 16,
            isPlaying: 32
        },
        wh = {
            ve: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            ERROR: "error",
            Hf: "metric",
            PAUSE: "pause",
            Qf: "resume",
            SKIPPED: "skip",
            VIEWABLE_IMPRESSION: "viewable_impression",
            If: "mute",
            Uf: "unmute",
            FULLSCREEN: "fullscreen",
            Ef: "exitfullscreen",
            zf: "bufferstart",
            yf: "bufferfinish",
            qe: "fully_viewable_audible_half_duration_impression",
            ue: "measurable_impression",
            tf: "abandon",
            pe: "engagedview",
            IMPRESSION: "impression",
            Bf: "creativeview",
            LOADED: "loaded",
            PROGRESS: "progress",
            Hh: "close",
            Ih: "collapse",
            Jf: "overlay_resize",
            Kf: "overlay_unmeasurable_impression",
            Lf: "overlay_unviewable_impression",
            Nf: "overlay_viewable_immediate_impression",
            Mf: "overlay_viewable_end_of_session_impression",
            Cf: "custom_metric_viewable",
            vf: "audio_audible",
            xf: "audio_measurable",
            wf: "audio_impression"
        },
        eq = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        fq = ["start", "firstquartile", "midpoint", "thirdquartile"],
        gq = ["abandon"],
        hq = {
            UNKNOWN: -1,
            ve: 0,
            FIRST_QUARTILE: 1,
            MIDPOINT: 2,
            THIRD_QUARTILE: 3,
            COMPLETE: 4,
            Hf: 5,
            PAUSE: 6,
            Qf: 7,
            SKIPPED: 8,
            VIEWABLE_IMPRESSION: 9,
            If: 10,
            Uf: 11,
            FULLSCREEN: 12,
            Ef: 13,
            qe: 14,
            ue: 15,
            tf: 16,
            pe: 17,
            IMPRESSION: 18,
            Bf: 19,
            LOADED: 20,
            Cf: 21,
            zf: 22,
            yf: 23,
            wf: 27,
            xf: 28,
            vf: 29
        };
    var ph = {
            Dh: "addEventListener",
            Zh: "getMaxSize",
            ai: "getScreenSize",
            bi: "getState",
            ci: "getVersion",
            Ji: "removeEventListener",
            zi: "isViewable"
        },
        iq = function(a) {
            var b = a !== a.top,
                c = a.top === fj(a),
                d = -1,
                e = 0;
            if (b && c && a.top.mraid) {
                d = 3;
                var f = a.top.mraid
            } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
            f && (f.IS_GMA_SDK || (e = 2), oh(function(g) {
                return typeof f[g] === "function"
            }) || (e = 1));
            return {
                Fa: f,
                Dc: e,
                mh: d
            }
        };
    var jq = function() {
        var a = window.document;
        return a && typeof a.elementFromPoint === "function"
    };

    function kq(a, b, c) {
        try {
            a && (b = b.top);
            var d = b;
            a && d !== null && d != d.top && (d = d.top);
            try {
                var e = (c === void 0 ? 0 : c) ? (new di(d.innerWidth, d.innerHeight)).round() : yi(d || window).round()
            } catch (m) {
                e = new di(-12245933, -12245933)
            }
            a = e;
            var f = a.height,
                g = a.width;
            if (g === -12245933) return new I(g, g, g, g);
            var h = zi(ui(b.document).g),
                k = h.x,
                n = h.y;
            return new I(n, k + g, n + f, k)
        } catch (m) {
            return new I(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var mq = function(a, b) {
            if (typeof b === "string")(b = lq(a, b)) && (a.style[b] = void 0);
            else
                for (var c in b) {
                    var d = a,
                        e = b[c],
                        f = lq(d, c);
                    f && (d.style[f] = e)
                }
        },
        nq = {},
        lq = function(a, b) {
            var c = nq[b];
            if (!c) {
                var d = oi(b);
                c = d;
                a.style[d] === void 0 && (d = (vc ? "Webkit" : uc ? "Moz" : sc ? "ms" : null) + qi(d), a.style[d] !== void 0 && (c = d));
                nq[b] = c
            }
            return c
        },
        oq = function(a, b) {
            var c = a.style[oi(b)];
            return typeof c !== "undefined" ? c : a.style[lq(a, b)] || ""
        },
        pq = function(a, b) {
            var c = ti(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a,
                null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        },
        qq = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        },
        rq = function(a) {
            var b = ti(a),
                c = new ci(0, 0);
            if (a == (b ? ti(b) : document).documentElement) return c;
            a = qq(a);
            b = zi(ui(b).g);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        sq = function(a, b) {
            var c = new ci(0, 0),
                d = Ai(ti(a));
            if (!oc(d, "parent")) return c;
            do {
                if (d == b) var e = rq(a);
                else e = qq(a), e = new ci(e.left, e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        },
        tq = function() {
            var a = "100%";
            typeof a == "number" && (a = Math.round(a) + "px");
            return a
        },
        vq = function(a) {
            var b = uq,
                c;
            (c = pq(a, "display")) || (c = a.currentStyle ? a.currentStyle.display : null);
            if ((c || a.style && a.style.display) != "none") return b(a);
            c = a.style;
            var d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        uq = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = vc && !b && !c;
            return (b === void 0 || d) && a.getBoundingClientRect ?
                (a = qq(a), new di(a.right - a.left, a.bottom - a.top)) : new di(b, c)
        },
        wq = function(a) {
            var b = new di(a.offsetWidth, a.offsetHeight);
            var c = pq(a, "paddingLeft");
            var d = pq(a, "paddingRight"),
                e = pq(a, "paddingTop"),
                f = pq(a, "paddingBottom");
            c = new I(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c));
            d = pq(a, "borderLeftWidth");
            e = pq(a, "borderRightWidth");
            f = pq(a, "borderTopWidth");
            a = pq(a, "borderBottomWidth");
            a = new I(parseFloat(f), parseFloat(e), parseFloat(a), parseFloat(d));
            return new di(b.width - a.left - c.left - c.right - a.right,
                b.height - a.top - c.top - c.bottom - a.bottom)
        };
    var xq = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };

    function yq(a, b, c, d) {
        if (!a) return {
            value: d,
            done: !1
        };
        d = b(d, a);
        var e = c(d, a);
        return !e && oc(a, "parentElement") ? yq(Fi(a), b, c, d) : {
            done: e,
            value: d
        }
    }
    var zq = function(a, b, c, d) {
        if (!a) return d;
        d = yq(a, b, c, d);
        if (!d.done) try {
            var e = ti(a),
                f = e && Ai(e);
            return zq(f && f.frameElement, b, c, d.value)
        } catch (g) {}
        return d.value
    };

    function Aq(a) {
        var b = !sc || Ic();
        return zq(a, function(c, d) {
            c = oc(d, "style") && d.style && oq(d, "visibility");
            return {
                hidden: c === "hidden",
                visible: b && c === "visible"
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var Bq = function(a) {
            return zq(a, function(b, c) {
                return !(!oc(c, "style") || !c.style || oq(c, "display") !== "none")
            }, function(b) {
                return b
            }, !1) ? !0 : Aq(a)
        },
        Cq = function(a) {
            return new I(a.top, a.right, a.bottom, a.left)
        },
        Dq = function(a) {
            var b = a.top || 0,
                c = a.left || 0;
            return new I(b, c + (a.width || 0), b + (a.height || 0), c)
        },
        Eq = function(a) {
            return a != null && a >= 0 && a <= 1
        };

    function Fq() {
        var a = Eb();
        return a ? Zb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return wb(a, b)
        }) || wb(a, "OMI/") && !wb(a, "XiaoMi/") ? !0 : wb(a, "Presto") && wb(a, "Linux") && !wb(a, "X11") && !wb(a, "Android") && !wb(a, "Mobi") : !1
    }

    function Gq() {
        var a = Eb();
        return wb(a, "AppleTV") || wb(a, "Apple TV") || wb(a, "CFNetwork") || wb(a, "tvOS")
    }

    function Hq() {
        var a;
        (a = wb(Eb(), "CrKey") && !(wb(Eb(), "CrKey") && wb(Eb(), "SmartSpeaker")) || wb(Eb(), "PlayStation") || wb(Eb(), "Roku") || Fq() || wb(Eb(), "Xbox") || Gq()) || (a = Eb(), a = wb(a, "sdk_google_atv_x86") || wb(a, "Android TV"));
        return a
    };
    var Jq = function() {
            this.l = !Qi(O.top);
            this.C = Ji() || Ki();
            var a = hj();
            a = a.length > 0 && a[a.length - 1] != null && a[a.length - 1].url != null ? ((a = a[a.length - 1].url.match(Li)[3] || null) ? decodeURI(a) : a) || "" : "";
            this.domain = a;
            this.g = new I(0, 0, 0, 0);
            this.A = new di(0, 0);
            this.o = new di(0, 0);
            this.J = new I(0, 0, 0, 0);
            this.frameOffset = new ci(0, 0);
            this.B = 0;
            this.L = !1;
            this.j = !(!O || !iq(O).Fa);
            Iq(this)
        },
        Kq = function(a, b) {
            b && b.screen && (a.A = new di(b.screen.width, b.screen.height))
        },
        Lq = function(a, b) {
            a: {
                var c = a.g ? new di(a.g.getWidth(), a.g.getHeight()) : new di(0, 0);b = b === void 0 ? O : b;b !== null && b != b.top && (b = b.top);
                var d = 0,
                    e = 0;
                try {
                    var f = b.document,
                        g = f.body,
                        h = f.documentElement;
                    if (f.compatMode == "CSS1Compat" && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                    else {
                        var k = h.scrollHeight,
                            n = h.scrollWidth,
                            m = h.offsetHeight,
                            p = h.offsetWidth;
                        h.clientHeight != m && (k = g.scrollHeight, n = g.scrollWidth, m = g.offsetHeight, p = g.offsetWidth);
                        k > c.height ? k > m ? (d = k, e = n) : (d = m, e = p) : k < m ? (d = k, e = n) : (d = m, e = p)
                    }
                    var r =
                        new di(e, d);
                    break a
                } catch (t) {
                    r = new di(-12245933, -12245933);
                    break a
                }
                r = void 0
            }
            a.o = r
        },
        Iq = function(a) {
            O && O.document && (a.J = kq(!1, O, a.C), a.g = kq(!0, O, a.C), Lq(a, O), Kq(a, O))
        },
        Nq = function() {
            var a = Mq();
            if (a.B > 0 || a.L) return !0;
            a = fp().j.isVisible();
            var b = ml(Uo) === 0;
            return a || b
        },
        Mq = function() {
            return J(Jq)
        };
    var Oq = function(a) {
        this.l = a;
        this.j = 0;
        this.g = null
    };
    Oq.prototype.cancel = function() {
        fp().clearTimeout(this.g);
        this.g = null
    };
    var Pq = function(a) {
        var b = fp(),
            c = N().g.g;
        a.g = b.setTimeout(lp(c, Cp(143, function() {
            a.j++;
            a.l.sample()
        })), aq())
    };
    var Qq = function(a, b, c) {
        this.l = a;
        this.la = c === void 0 ? "na" : c;
        this.A = [];
        this.va = !1;
        this.o = new bq(-1, !0, this);
        this.g = this;
        this.L = b;
        this.I = this.D = !1;
        this.W = "uk";
        this.P = !1;
        this.C = !0
    };
    Qq.prototype.G = function() {
        return !1
    };
    Qq.prototype.initialize = function() {
        return this.va = !0
    };
    Qq.prototype.Gb = function() {
        return this.g.W
    };
    Qq.prototype.Yb = function() {
        return this.g.I
    };
    var Sq = function(a, b, c) {
        if (!a.I || (c === void 0 ? 0 : c)) a.I = !0, a.W = b, a.L = 0, a.g != a || Rq(a)
    };
    Qq.prototype.getName = function() {
        return this.g.la
    };
    Qq.prototype.jb = function() {
        return this.g.Z()
    };
    Qq.prototype.Z = function() {
        return {}
    };
    Qq.prototype.Ta = function() {
        return this.g.L
    };
    var Tq = function(a, b) {
        dc(a.A, b) || (a.A.push(b), b.Ib(a.g), b.lb(a.o), b.Pa() && (a.D = !0))
    };
    Qq.prototype.U = function() {
        var a = Mq();
        a.g = kq(!0, this.l, a.C)
    };
    Qq.prototype.V = function() {
        Kq(Mq(), this.l)
    };
    Qq.prototype.aa = function() {
        return this.o.g
    };
    var Uq = function(a) {
        a = a.g;
        a.V();
        a.U();
        var b = Mq();
        b.J = kq(!1, a.l, b.C);
        Lq(Mq(), a.l);
        a.o.g = a.aa()
    };
    Qq.prototype.sample = function() {};
    Qq.prototype.isActive = function() {
        return this.g.C
    };
    var Vq = function(a) {
            a.D = a.A.length ? Zb(a.A, function(b) {
                return b.Pa()
            }) : !1
        },
        Wq = function(a) {
            var b = ic(a.A);
            Sb(b, function(c) {
                c.lb(a.o)
            })
        },
        Rq = function(a) {
            var b = ic(a.A);
            Sb(b, function(c) {
                c.Ib(a.g)
            });
            a.g != a || Wq(a)
        };
    l = Qq.prototype;
    l.Ib = function(a) {
        var b = this.g;
        this.g = a.Ta() >= this.L ? a : this;
        b !== this.g ? (this.C = this.g.C, Rq(this)) : this.C !== this.g.C && (this.C = this.g.C, Rq(this))
    };
    l.lb = function(a) {
        if (a.j === this.g) {
            var b = this.o,
                c = this.D;
            if (c = a && (c === void 0 || !c || b.volume == a.volume) && b.l == a.l) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.o = a;
            !c && Wq(this)
        }
    };
    l.Pa = function() {
        return this.D
    };
    l.dispose = function() {
        this.P = !0
    };
    l.Ea = function() {
        return this.P
    };
    var Xq = function(a, b, c, d) {
        this.l = a;
        this.g = new I(0, 0, 0, 0);
        this.A = new I(0, 0, 0, 0);
        this.j = b;
        this.R = c;
        this.I = d;
        this.G = !1;
        this.timestamp = -1;
        this.J = new cq(b.o, this.g, new I(0, 0, 0, 0), 0, 0, $p(), 0)
    };
    l = Xq.prototype;
    l.pd = function() {
        return !0
    };
    l.rc = function() {};
    l.dispose = function() {
        if (!this.Ea()) {
            var a = this.j;
            ec(a.A, this);
            a.D && this.Pa() && Vq(a);
            this.rc();
            this.G = !0
        }
    };
    l.Ea = function() {
        return this.G
    };
    l.jb = function() {
        return this.j.jb()
    };
    l.Ta = function() {
        return this.j.Ta()
    };
    l.Gb = function() {
        return this.j.Gb()
    };
    l.Yb = function() {
        return this.j.Yb()
    };
    l.Ib = function() {};
    l.lb = function() {
        this.gb()
    };
    l.Pa = function() {
        return this.I
    };
    var Yq = function(a) {
        this.A = !1;
        this.g = a;
        this.o = function() {}
    };
    l = Yq.prototype;
    l.Ta = function() {
        return this.g.Ta()
    };
    l.Gb = function() {
        return this.g.Gb()
    };
    l.Yb = function() {
        return this.g.Yb()
    };
    l.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.sc(a, b, c), Tq(this.g, d));
        return d
    };
    l.re = function() {
        return this.Pb()
    };
    l.Pb = function() {
        return !1
    };
    l.init = function(a) {
        return this.g.initialize() ? (Tq(this.g, this), this.o = a, !0) : !1
    };
    l.Ib = function(a) {
        a.Ta() == 0 && this.o(a.Gb(), this)
    };
    l.lb = function() {};
    l.Pa = function() {
        return !1
    };
    l.dispose = function() {
        this.A = !0
    };
    l.Ea = function() {
        return this.A
    };
    l.jb = function() {
        return {}
    };
    var Zq = function(a, b, c) {
            this.l = c === void 0 ? 0 : c;
            this.j = a;
            this.g = b == null ? "" : b
        },
        $q = function(a) {
            switch (Math.trunc(a.l)) {
                case -16:
                    return -16;
                case -8:
                    return -8;
                case 0:
                    return 0;
                case 8:
                    return 8;
                case 16:
                    return 16;
                default:
                    return 16
            }
        },
        ar = function(a, b) {
            return a.l < b.l ? !0 : a.l > b.l ? !1 : a.j < b.j ? !0 : a.j > b.j ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
        };
    var br = function() {
        this.l = 0;
        this.g = [];
        this.j = !1
    };
    br.prototype.add = function(a, b, c) {
        ++this.l;
        a = new Zq(a, b, c);
        this.g.push(new Zq(a.j, a.g, a.l + this.l / 4096));
        this.j = !0;
        return this
    };
    var cr = function(a, b) {
            Sb(b.g, function(c) {
                a.add(c.j, c.g, $q(c))
            })
        },
        dr = function(a, b) {
            var c = c === void 0 ? 0 : c;
            var d = d === void 0 ? !0 : d;
            Wi(b, function(e, f) {
                d && e === void 0 || a.add(f, e, c)
            });
            return a
        },
        fr = function(a) {
            var b = er;
            a.j && (kc(a.g, function(c, d) {
                return ar(d, c) ? 1 : ar(c, d) ? -1 : 0
            }), a.j = !1);
            return Yb(a.g, function(c, d) {
                d = b(d);
                return "" + c + (c != "" && d != "" ? "&" : "") + d
            }, "")
        };
    var er = function(a) {
        var b = a.j;
        a = a.g;
        return a === "" ? b : typeof a === "boolean" ? a ? b : "" : Array.isArray(a) ? a.length === 0 ? b : b + "=" + a.join() : b + "=" + (dc(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var gr = function(a) {
        var b = b === void 0 ? !0 : b;
        this.g = new br;
        a !== void 0 && cr(this.g, a);
        b && this.g.add("v", "unreleased", -16)
    };
    gr.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = fr(this.g);
        b.length > 0 && (a += "?" + b);
        return a
    };
    var hr = function(a) {
            var b = [],
                c = [];
            mh(a, function(d, e) {
                if (!(e in Object.prototype) && typeof d != "undefined") switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                    case "adk":
                    case "r":
                    case "tt":
                    case "error":
                    case "mtos":
                    case "tos":
                    case "p":
                    case "bs":
                        b.unshift(d);
                        break;
                    case "req":
                    case "url":
                    case "referrer":
                    case "iframe_loc":
                        c.push(d);
                        break;
                    default:
                        b.push(d)
                }
            });
            return b.concat(c)
        },
        ir = function(a) {
            a = a.toString();
            fp();
            Lj(O, a)
        };
    var jr = function() {
        this.g = 0
    };

    function kr(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };
    var Q = function() {
        this.L = this.L;
        this.J = this.J
    };
    Q.prototype.L = !1;
    Q.prototype.Ea = function() {
        return this.L
    };
    Q.prototype.dispose = function() {
        this.L || (this.L = !0, this.O())
    };
    Q.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    var mr = function(a, b) {
            lr(a, cb(kr, b))
        },
        lr = function(a, b) {
            a.L ? b() : (a.J || (a.J = []), a.J.push(b))
        };
    Q.prototype.O = function() {
        if (this.J)
            for (; this.J.length;) this.J.shift()()
    };
    var nr = function(a, b, c) {
        Sb(a.l, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c), d.o())) {
                d.g = !0;
                var f = d.j(),
                    g = new br;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.A);
                d = J(jr);
                g.add("i", d.g++);
                g.add("adk", e);
                dr(g, f);
                e = new gr(g);
                ir(e)
            }
        })
    };
    var or = function() {
            this.j = this.l = this.o = this.g = 0
        },
        pr = function(a, b, c, d) {
            b && (a.g += c, a.j += c, a.o += c, a.l = Math.max(a.l, a.o));
            if (d === void 0 ? !b : d) a.o = 0
        };
    var qr = [1, .75, .5, .3, 0],
        rr = function(a) {
            this.j = a = a === void 0 ? qr : a;
            this.g = Xb(this.j, function() {
                return new or
            })
        },
        tr = function(a, b) {
            return sr(a, function(c) {
                return c.g
            }, b === void 0 ? !0 : b)
        },
        vr = function(a, b) {
            return ur(a, b, function(c) {
                return c.g
            })
        },
        wr = function(a, b) {
            return sr(a, function(c) {
                return c.l
            }, b === void 0 ? !0 : b)
        },
        xr = function(a, b) {
            return ur(a, b, function(c) {
                return c.l
            })
        },
        yr = function(a, b) {
            return ur(a, b, function(c) {
                return c.j
            })
        },
        zr = function(a) {
            Sb(a.g, function(b) {
                b.j = 0
            })
        },
        Ar = function(a, b, c, d, e, f, g) {
            g = g === void 0 ?
                !0 : g;
            c = f ? Math.min(b, c) : c;
            for (f = 0; f < a.j.length; f++) {
                var h = a.j[f],
                    k = c > 0 && c >= h;
                h = !(b > 0 && b >= h) || d;
                pr(a.g[f], g && k, e, !g || h)
            }
        },
        sr = function(a, b, c) {
            a = Xb(a.g, function(d) {
                return b(d)
            });
            return c ? a : Br(a)
        },
        ur = function(a, b, c) {
            var d = cc(a.j, function(e) {
                return b <= e
            });
            return d == -1 ? 0 : c(a.g[d])
        },
        Br = function(a) {
            return Xb(a, function(b, c, d) {
                return c > 0 ? d[c] - d[c - 1] : d[c]
            })
        };
    var Cr = function() {
            this.j = new rr;
            this.W = new or;
            this.I = this.C = -1;
            this.ga = 1E3;
            this.ha = new rr([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
            this.P = this.K = -1
        },
        Dr = function(a, b) {
            return wr(a.j, b === void 0 ? !0 : b)
        };
    Cr.prototype.L = function(a, b, c, d) {
        this.C = this.C != -1 ? Math.min(this.C, b.X) : b.X;
        this.I = Math.max(this.I, b.X);
        this.K = this.K != -1 ? Math.min(this.K, b.ta) : b.ta;
        this.P = Math.max(this.P, b.ta);
        Ar(this.ha, b.ta, c.ta, b.g, a, d);
        Ar(this.j, b.X, c.X, b.g, a, d);
        c = d || c.yb != b.yb ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        pr(this.W, c, a, b)
    };
    Cr.prototype.Wa = function() {
        return this.W.l >= this.ga
    };
    if (Uo && Uo.URL) {
        var Er = Uo.URL,
            Fr;
        if (Fr = !!Er) {
            var Gr;
            a: {
                if (Er) {
                    var Hr = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
                    try {
                        var Ir = Hr.exec(decodeURIComponent(Er));
                        if (Ir) {
                            Gr = Ir[1] && Ir[1].length > 1 ? Ir[1].substring(1) : "true";
                            break a
                        }
                    } catch (a) {}
                }
                Gr = ""
            }
            Fr = Gr.length > 0
        }
        yp.fe(!Fr)
    }
    var Jr = function(a, b, c, d) {
        var e = e === void 0 ? !1 : e;
        c = Cp(d, c);
        kh(a, b, c, {
            capture: e
        })
    };
    var Kr = new I(0, 0, 0, 0);

    function Lr(a, b) {
        b = Mr(b);
        return b === 0 ? 0 : Mr(a) / b
    }

    function Mr(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function Nr(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; a !== null && c++ < 100;) {
            if (a === b) return !0;
            try {
                if (a = Fi(a) || a) {
                    var d = ti(a),
                        e = d && Ai(d),
                        f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }

    function Or(a, b, c) {
        if (!a || !b) return !1;
        b = Qk(Pk(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        Qi(window.top) && window.top && window.top.document && (window = window.top);
        if (!jq()) return !1;
        a = window.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = ti(c)) && b.defaultView && b.defaultView.frameElement) && Nr(b, a);
        var d = a === c;
        a = !d && a && Ii(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function Pr(a, b, c, d) {
        return Mq().l ? !1 : a.getWidth() <= 0 || a.getHeight() <= 0 ? !0 : c && d ? Bp(208, function() {
            return Or(a, b, c)
        }) : !1
    };
    var Qr = new I(0, 0, 0, 0),
        Sr = function(a, b, c) {
            Q.call(this);
            this.position = Pk(Qr);
            this.Uc = this.Ic();
            this.Ld = -2;
            this.rh = Date.now();
            this.mf = -1;
            this.Lc = b;
            this.Kc = null;
            this.Ub = !1;
            this.Zc = null;
            this.opacity = -1;
            this.eh = c;
            this.sh = !1;
            this.Od = function() {};
            this.qf = function() {};
            this.ua = new Wo;
            this.ua.pb = a;
            this.ua.g = a;
            this.Ua = !1;
            this.vb = {
                Rd: null,
                Qd: null
            };
            this.gf = !0;
            this.qc = null;
            this.Jb = this.Lg = !1;
            N().B++;
            this.ra = this.Fd();
            this.lf = -1;
            this.da = null;
            this.Me = this.Jg = !1;
            this.R = new Lo;
            To(this.R);
            Rr(this);
            this.eh == 1 ? Oo(this.R,
                "od", 1) : Oo(this.R, "od", 0)
        };
    x(Sr, Q);
    Sr.prototype.O = function() {
        this.ua.g && (this.vb.Rd && (lh(this.ua.g, "mouseover", this.vb.Rd), this.vb.Rd = null), this.vb.Qd && (lh(this.ua.g, "mouseout", this.vb.Qd), this.vb.Qd = null));
        this.qc && this.qc.dispose();
        this.da && this.da.dispose();
        delete this.Uc;
        delete this.Od;
        delete this.qf;
        delete this.ua.pb;
        delete this.ua.g;
        delete this.vb;
        delete this.qc;
        delete this.da;
        delete this.R;
        Q.prototype.O.call(this)
    };
    Sr.prototype.kb = function() {
        return this.da ? this.da.g : this.position
    };
    Sr.prototype.Wd = function(a) {
        N().Wd(a)
    };
    var Rr = function(a) {
        a = a.ua.pb;
        var b;
        if (b = a && a.getAttribute) b = /-[a-z]/.test("googleAvInapp") ? !1 : Vo && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + pi()) : !!a.getAttribute("data-" + pi());
        b && (Mq().j = !0)
    };
    Sr.prototype.Pa = function() {
        return !1
    };
    Sr.prototype.Ic = function() {
        return new Cr
    };
    Sr.prototype.qa = function() {
        return this.Uc
    };
    var Tr = function(a, b) {
            b != a.Jb && (a.Jb = b, a = Mq(), b ? a.B++ : a.B > 0 && a.B--)
        },
        Ur = function(a, b) {
            if (a.da) {
                if (b.getName() === a.da.getName()) return;
                a.da.dispose();
                a.da = null
            }
            b = b.create(a.ua.g, a.R, a.Pa());
            if (b = b != null && b.pd() ? b : null) a.da = b
        },
        Vr = function(a, b, c) {
            if (!a.Kc || a.Lc == -1 || b.getTimestamp() === -1 || a.Kc.getTimestamp() === -1) return 0;
            a = b.getTimestamp() - a.Kc.getTimestamp();
            return a > c ? 0 : a
        };
    Sr.prototype.Je = function(a) {
        return Vr(this, a, 1E4)
    };
    var Wr = function(a, b, c) {
            if (a.da) {
                a.da.gb();
                var d = a.da.J,
                    e = d.l,
                    f = e.g;
                if (d.A != null) {
                    var g = d.j;
                    a.Zc = new ci(g.left - f.left, g.top - f.top)
                }
                f = a.jd() ? Math.max(d.g, d.o) : d.g;
                g = {};
                e.volume !== null && (g.volume = e.volume);
                e = a.Je(d);
                a.Kc = d;
                a.je(f, b, c, !1, g, e, d.B)
            }
        },
        Xr = function(a) {
            if (a.Ub && a.qc) {
                var b = Po(a.R, "od") == 1,
                    c = Mq().g,
                    d = a.qc,
                    e = a.da ? a.da.getName() : "ns",
                    f = a.Zc,
                    g = new di(c.getWidth(), c.getHeight());
                c = a.jd();
                a = {
                    oh: e,
                    Zc: f,
                    Ch: g,
                    jd: c,
                    X: a.ra.X,
                    xh: b
                };
                if (b = d.j) {
                    b.gb();
                    e = b.J;
                    f = e.l.g;
                    var h = g = null;
                    e.A != null && f && (g = e.j, g = new ci(g.left -
                        f.left, g.top - f.top), h = new di(f.right - f.left, f.bottom - f.top));
                    e = c ? Math.max(e.g, e.o) : e.g;
                    c = {
                        oh: b.getName(),
                        Zc: g,
                        Ch: h,
                        jd: c,
                        xh: !1,
                        X: e
                    }
                } else c = null;
                c && nr(d, a, c)
            }
        };
    l = Sr.prototype;
    l.je = function(a, b, c, d, e, f, g) {
        this.Ua || (this.Ub && (a = this.qd(a, c, e, g), d = d && this.ra.X >= (this.yb() ? .3 : .5), this.ke(f, a, d), this.Lc = b, a.X > 0 && -1 === this.lf && (this.lf = b), this.mf == -1 && this.Wa() && (this.mf = b), this.Ld == -2 && (this.Ld = Mr(this.kb()) ? a.X : -1), this.ra = a), this.Od(this))
    };
    l.ke = function(a, b, c) {
        this.qa().L(a, b, this.ra, c)
    };
    l.Fd = function() {
        return new zo
    };
    l.qd = function(a, b, c, d) {
        c = this.Fd();
        c.g = b;
        b = fp().j;
        b = ml(Uo) === 0 ? -1 : b.isVisible() ? 0 : 1;
        c.j = b;
        c.X = this.wd(a);
        c.yb = this.yb();
        c.ta = d;
        return c
    };
    l.wd = function(a) {
        return this.opacity === 0 && Po(this.R, "opac") === 1 ? 0 : a
    };
    l.yb = function() {
        return !1
    };
    l.jd = function() {
        return this.Jg || this.Lg
    };
    l.za = function() {
        return 0
    };
    l.Wa = function() {
        return this.Uc.Wa()
    };
    l.Le = function() {
        var a = this.Ub;
        a = (this.Me || this.Ea()) && !a;
        var b = N().j !== 2 || this.sh;
        return this.Ua || b && a ? 2 : this.Wa() ? 4 : 3
    };
    l.Gc = function() {
        return 0
    };
    var Yr = function(a, b, c) {
        b && (a.Od = b);
        c && (a.qf = c)
    };
    var Zr = function() {};
    Zr.prototype.next = function() {
        return $r
    };
    var $r = {
        done: !0,
        value: void 0
    };
    Zr.prototype.Db = function() {
        return this
    };
    var as = function() {
            this.o = this.g = this.l = this.j = this.A = 0
        },
        bs = function(a) {
            var b = {};
            b = (b.ptlt = Date.now() - a.A, b);
            var c = a.j;
            c && (b.pnk = c);
            (c = a.l) && (b.pnc = c);
            (c = a.o) && (b.pnmm = c);
            (a = a.g) && (b.pns = a);
            return b
        };
    var cs = function() {
        zo.call(this);
        this.fullscreen = !1;
        this.volume = void 0;
        this.l = !1;
        this.mediaTime = -1
    };
    x(cs, zo);
    var ds = function(a) {
        return Eq(a.volume) && a.volume > 0
    };
    var fs = function(a, b, c, d) {
            c = c === void 0 ? !0 : c;
            d = d === void 0 ? function() {
                return !0
            } : d;
            return function(e) {
                var f = e[a];
                if (Array.isArray(f) && d(e)) return es(f, b, c)
            }
        },
        gs = function(a, b) {
            return function(c) {
                return b(c) ? c[a] : void 0
            }
        },
        hs = function(a) {
            return function(b) {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b.e || a[c] === void 0 && !b.hasOwnProperty("e")) return !0;
                return !1
            }
        },
        es = function(a, b, c) {
            return c === void 0 || c ? Ub(a, function(d, e) {
                return dc(b, e)
            }) : Xb(b, function(d, e, f) {
                return a.slice(e > 0 ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                    return g +
                        h
                }, 0)
            })
        };
    var is = hs([void 0, 1, 2, 3, 4, 8, 16]),
        js = hs([void 0, 4, 8, 16]),
        ks = {
            sv: "sv",
            v: "v",
            cb: "cb",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            p0: gs("p0", js),
            p1: gs("p1", js),
            p2: gs("p2", js),
            p3: gs("p3", js),
            cp: "cp",
            tos: "tos",
            mtos: "mtos",
            amtos: "amtos",
            mtos1: fs("mtos1", [0, 2, 4], !1, js),
            mtos2: fs("mtos2", [0, 2, 4], !1, js),
            mtos3: fs("mtos3", [0, 2, 4], !1, js),
            mcvt: "mcvt",
            ps: "ps",
            scs: "scs",
            bs: "bs",
            vht: "vht",
            mut: "mut",
            a: "a",
            a0: gs("a0", js),
            a1: gs("a1", js),
            a2: gs("a2", js),
            a3: gs("a3", js),
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            nio: "nio",
            px: "px",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            dtos: "dtos",
            dtoss: "dtoss",
            dvs: "dvs",
            dfvs: "dfvs",
            dvpt: "dvpt",
            fmf: "fmf",
            vds: "vds",
            is: "is",
            i0: "i0",
            i1: "i1",
            i2: "i2",
            i3: "i3",
            ic: "ic",
            cs: "cs",
            c: "c",
            c0: gs("c0", js),
            c1: gs("c1", js),
            c2: gs("c2", js),
            c3: gs("c3", js),
            mc: "mc",
            nc: "nc",
            mv: "mv",
            nv: "nv",
            qmt: gs("qmtos", is),
            qnc: gs("qnc", is),
            qmv: gs("qmv", is),
            qnv: gs("qnv", is),
            raf: "raf",
            rafc: "rafc",
            lte: "lte",
            ces: "ces",
            tth: "tth",
            femt: "femt",
            femvt: "femvt",
            emc: "emc",
            emuc: "emuc",
            emb: "emb",
            avms: "avms",
            nvat: "nvat",
            qi: "qi",
            psm: "psm",
            psv: "psv",
            psfv: "psfv",
            psa: "psa",
            pnk: "pnk",
            pnc: "pnc",
            pnmm: "pnmm",
            pns: "pns",
            ptlt: "ptlt",
            pngs: "pings",
            veid: "veid",
            ssb: "ssb",
            ss0: gs("ss0", js),
            ss1: gs("ss1", js),
            ss2: gs("ss2", js),
            ss3: gs("ss3", js),
            dc_rfl: "urlsigs",
            obd: "obd",
            omidp: "omidp",
            omidr: "omidr",
            omidv: "omidv",
            omida: "omida",
            omids: "omids",
            omidpv: "omidpv",
            omidam: "omidam",
            omidct: "omidct",
            omidia: "omidia",
            omiddc: "omiddc",
            omidlat: "omidlat",
            omiddit: "omiddit",
            nopd: "nopd",
            co: "co"
        },
        ls = Object.assign({}, ks, {
            avid: function(a) {
                return function() {
                    return a
                }
            }("audio"),
            avas: "avas",
            vs: "vs"
        }),
        ms = {
            atos: "atos",
            avt: fs("atos", [2]),
            davs: "davs",
            dafvs: "dafvs",
            dav: "dav",
            ss: function(a, b) {
                return function(c) {
                    return c[a] === void 0 && b !== void 0 ? b : c[a]
                }
            }("ss", 0),
            t: "t"
        };
    var ns = function() {
        this.j = this.g = ""
    };
    var os = function() {},
        ps = function(a, b) {
            var c = {};
            if (a !== void 0)
                if (b != null)
                    for (var d in b) {
                        var e = b[d];
                        d in Object.prototype || e != null && (c[d] = typeof e === "function" ? e(a) : a[e])
                    } else Bh(c, a);
            return fr(dr(new br, c))
        };
    var qs = function() {
        var a = {};
        this.j = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a.mut = [33554432, 33554432], a.umutb = [67108864, 67108864], a.tvoff = [134217728, 134217728], a);
        this.g = {};
        for (var b in this.j) this.j[b][1] > 0 && (this.g[b] = 0);
        this.l = 0
    };
    qs.prototype.reportEvent = function(a) {
        var b = this.j[a],
            c = b[1];
        this.l += b[0];
        c > 0 && this.g[a] == 0 && (this.g[a] = 1)
    };
    var rs = function(a) {
            var b = rh(a.j),
                c = 0,
                d;
            for (d in a.g) dc(b, d) && a.g[d] == 1 && (c += a.j[d][1], a.g[d] = 2);
            return c
        },
        ts = function(a) {
            var b = 0,
                c;
            for (c in a.g) {
                var d = a.g[c];
                if (d == 1 || d == 2) b += a.j[c][1]
            }
            return b
        };
    var us = function() {
        this.g = this.j = 0
    };
    us.prototype.getValue = function() {
        return this.j
    };
    var vs = function(a, b, c) {
        b >= 32 || (a.g & 1 << b && !c ? a.j &= ~(1 << b) : a.g & 1 << b || !c || (a.j |= 1 << b), a.g |= 1 << b)
    };
    var ws = function() {
        Cr.call(this);
        this.l = new or;
        this.V = this.D = this.M = 0;
        this.J = -1;
        this.la = new or;
        this.A = new or;
        this.g = new rr;
        this.B = this.o = -1;
        this.G = new or;
        this.ga = 2E3;
        this.U = new us;
        this.aa = new us;
        this.Z = new us
    };
    x(ws, Cr);
    var xs = function(a, b, c) {
        var d = a.V;
        Zp || c || a.J == -1 || (d += b - a.J);
        return d
    };
    ws.prototype.L = function(a, b, c, d) {
        if (!b.l) {
            Cr.prototype.L.call(this, a, b, c, d);
            var e = ds(b) && ds(c),
                f = (d ? Math.min(b.X, c.X) : c.X) >= .5;
            Eq(b.volume) && (this.o = this.o != -1 ? Math.min(this.o, b.volume) : b.volume, this.B = Math.max(this.B, b.volume));
            f && (this.M += a, this.D += e ? a : 0);
            Ar(this.g, b.X, c.X, b.g, a, d, e);
            pr(this.l, !0, a);
            pr(this.A, e, a);
            pr(this.G, c.fullscreen, a);
            pr(this.la, e && !f, a);
            a = Math.floor(b.mediaTime / 1E3);
            vs(this.U, a, b.isVisible());
            vs(this.aa, a, b.X >= 1);
            vs(this.Z, a, ds(b))
        }
    };
    var ys = function() {
        this.l = !1
    };
    ys.prototype.j = function(a) {
        this.l || (this.g(a) ? (a = this.L.report(this.o, a), this.A |= a, a = a == 0) : a = !1, this.l = a)
    };
    var zs = function(a, b) {
        this.l = !1;
        this.o = a;
        this.L = b;
        this.A = 0
    };
    x(zs, ys);
    zs.prototype.g = function() {
        return !0
    };
    zs.prototype.B = function() {
        return !1
    };
    zs.prototype.getId = function() {
        var a = this,
            b = vh(function(c) {
                return c == a.o
            });
        return hq[b].toString()
    };
    zs.prototype.toString = function() {
        var a = "";
        this.B() && (a += "c");
        this.l && (a += "s");
        this.A > 0 && (a += ":" + this.A);
        return this.getId() + a
    };
    var As = function(a, b) {
        zs.call(this, a, b);
        this.C = []
    };
    x(As, zs);
    As.prototype.j = function(a, b) {
        b = b === void 0 ? null : b;
        b != null && this.C.push(b);
        zs.prototype.j.call(this, a)
    };
    var Bs = function() {};
    var Cs = function() {};
    x(Cs, Bs);
    Cs.prototype.j = function() {
        return null
    };
    Cs.prototype.l = function() {
        return []
    };
    var Ds = function(a, b, c, d) {
        Xq.call(this, a, b, c, d)
    };
    x(Ds, Xq);
    l = Ds.prototype;
    l.td = function() {
        if (this.l) {
            var a = this.l,
                b = this.j.g.l;
            try {
                try {
                    var c = Cq(a.getBoundingClientRect())
                } catch (n) {
                    c = new I(0, 0, 0, 0)
                }
                var d = c.right - c.left,
                    e = c.bottom - c.top,
                    f = sq(a, b),
                    g = f.x,
                    h = f.y;
                var k = new I(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (n) {
                k = Pk(Kr)
            }
            this.g = k
        }
    };
    l.Ae = function() {
        this.A = this.j.o.g
    };
    l.Ne = function(a) {
        var b = Po(this.R, "od") == 1;
        return Pr(a, this.A, this.l, b)
    };
    l.Be = function() {
        this.timestamp = $p()
    };
    l.gb = function() {
        this.Be();
        this.td();
        if (this.l && typeof this.l.videoWidth === "number" && typeof this.l.videoHeight === "number") {
            var a = this.l;
            var b = new di(a.videoWidth, a.videoHeight);
            a = this.g;
            var c = a.getWidth(),
                d = a.getHeight(),
                e = b.width;
            b = b.height;
            e <= 0 || b <= 0 || c <= 0 || d <= 0 || (e /= b, a = Pk(a), e > c / d ? (c /= e, d = (d - c) / 2, d > 0 && (d = a.top + d, a.top = Math.round(d), a.bottom = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), c > 0 && (c = a.left + c, a.left = Math.round(c), a.right = Math.round(c + d))));
            this.g = a
        }
        this.Ae();
        a = this.g;
        c = this.A;
        a = a.left <=
            c.right && c.left <= a.right && a.top <= c.bottom && c.top <= a.bottom ? new I(Math.max(a.top, c.top), Math.min(a.right, c.right), Math.min(a.bottom, c.bottom), Math.max(a.left, c.left)) : new I(0, 0, 0, 0);
        c = a.top >= a.bottom || a.left >= a.right ? new I(0, 0, 0, 0) : a;
        a = this.j.o;
        b = e = d = 0;
        (this.g.bottom - this.g.top) * (this.g.right - this.g.left) > 0 && (this.Ne(c) ? c = new I(0, 0, 0, 0) : (d = Mq().A, b = new I(0, d.height, d.width, 0), d = Lr(c, this.g), e = Lr(c, Mq().g), b = Lr(c, b)));
        c = c.top >= c.bottom || c.left >= c.right ? new I(0, 0, 0, 0) : Qk(c, -this.g.left, -this.g.top);
        Nq() || (e = d = 0);
        this.J = new cq(a, this.g, c, d, e, this.timestamp, b)
    };
    l.getName = function() {
        return this.j.getName()
    };
    var Es = new I(0, 0, 0, 0),
        Fs = function(a, b, c) {
            Xq.call(this, null, a, b, c);
            this.C = a.isActive();
            this.B = 0
        };
    x(Fs, Ds);
    l = Fs.prototype;
    l.pd = function() {
        this.o();
        return !0
    };
    l.lb = function() {
        Ds.prototype.gb.call(this)
    };
    l.Be = function() {};
    l.td = function() {};
    l.gb = function() {
        this.o();
        Ds.prototype.gb.call(this)
    };
    l.Ib = function(a) {
        a = a.isActive();
        a !== this.C && (a ? this.o() : (Mq().g = new I(0, 0, 0, 0), this.g = new I(0, 0, 0, 0), this.A = new I(0, 0, 0, 0), this.timestamp = -1));
        this.C = a
    };

    function Gs(a) {
        return [a.top, a.left, a.bottom, a.right]
    }
    var Hs = {},
        Is = (Hs.firstquartile = 0, Hs.midpoint = 1, Hs.thirdquartile = 2, Hs.complete = 3, Hs),
        Js = function(a, b, c, d, e, f) {
            f = f === void 0 ? new Cs : f;
            Sr.call(this, b, c, d);
            this.Vd = e;
            this.zd = 0;
            this.ka = {};
            this.ia = new qs;
            this.rf = {};
            this.na = "";
            this.rb = null;
            this.Sa = !1;
            this.g = [];
            this.Ya = f.j();
            this.B = f.l();
            this.A = null;
            this.l = -1;
            this.Z = this.G = void 0;
            this.K = this.I = 0;
            this.U = -1;
            this.la = this.ha = !1;
            this.P = this.D = this.j = this.Ob = this.Ra = 0;
            new rr;
            this.V = this.aa = 0;
            this.ga = -1;
            this.ma = 0;
            this.C = eh;
            this.M = [this.Ic()];
            this.Fb = 2;
            this.Cb = {};
            this.Cb.pause = "p";
            this.Cb.resume = "r";
            this.Cb.skip = "s";
            this.Cb.mute = "m";
            this.Cb.unmute = "um";
            this.Cb.exitfullscreen = "ef";
            this.o = null;
            this.ya = this.Ja = !1;
            this.Eb = Math.floor(Date.now() / 1E3 - 1704067200);
            this.W = 0
        };
    x(Js, Sr);
    Js.prototype.Pa = function() {
        return !0
    };
    var Ks = function(a) {
            a.Me = !0;
            a.ma != 0 && (a.ma = 3)
        },
        Ls = function(a) {
            return a === void 0 ? a : Number(a) ? xq(a, 3) : 0
        };
    l = Js.prototype;
    l.Je = function(a) {
        return Vr(this, a, Math.max(1E4, this.l / 3))
    };
    l.je = function(a, b, c, d, e, f, g) {
        var h = this,
            k = this.C(this) || {};
        Bh(k, e);
        this.l = k.duration || this.l;
        this.G = k.isVpaid || this.G;
        this.Z = k.isYouTube || this.Z;
        fp();
        this.ya = !1;
        e = Ms(this, b);
        Ns(this) === 1 && (f = e);
        Sr.prototype.je.call(this, a, b, c, d, k, f, g);
        this.Ya && this.Ya.l && Sb(this.B, function(n) {
            n.j(h)
        })
    };
    l.ke = function(a, b, c) {
        Sr.prototype.ke.call(this, a, b, c);
        Os(this).L(a, b, this.ra, c);
        this.la = ds(this.ra) && ds(b);
        this.U == -1 && this.ha && (this.U = this.qa().l.g);
        this.ia.l = 0;
        a = this.Wa();
        b.isVisible() && this.ia.reportEvent("vs");
        a && this.ia.reportEvent("vw");
        Eq(b.volume) && this.ia.reportEvent("am");
        ds(b) ? this.ia.reportEvent("a") : this.ia.reportEvent("mut");
        this.Jb && this.ia.reportEvent("f");
        b.j != -1 && (this.ia.reportEvent("bm"), b.j == 1 && (this.ia.reportEvent("b"), ds(b) && this.ia.reportEvent("umutb")));
        ds(b) && b.isVisible() &&
            this.ia.reportEvent("avs");
        this.la && a && this.ia.reportEvent("avw");
        b.X > 0 && this.ia.reportEvent("pv");
        Ps(this, this.qa().l.g, !0) && this.ia.reportEvent("gdr");
        xr(this.qa().j, 1) >= 2E3 && this.ia.reportEvent("pmx");
        this.ya && this.ia.reportEvent("tvoff")
    };
    l.Ic = function() {
        return new ws
    };
    l.qa = function() {
        return this.Uc
    };
    var Os = function(a, b) {
        return a.M[b != null && b < a.M.length ? b : a.M.length - 1]
    };
    Js.prototype.Fd = function() {
        return new cs
    };
    Js.prototype.qd = function(a, b, c, d) {
        a = Sr.prototype.qd.call(this, a, b, c, d === void 0 ? -1 : d);
        a.fullscreen = this.Jb;
        a.l = this.ma == 2;
        a.volume = c.volume;
        Eq(a.volume) || (this.Ra++, b = this.ra, Eq(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.mediaTime = c !== void 0 && c >= 0 ? c : -1;
        return a
    };
    var Ns = function(a) {
            var b = !!Po(N().R, "umt");
            return a.G || !b && !a.Z ? 0 : 1
        },
        Ms = function(a, b) {
            a.ma == 2 ? b = 0 : a.Lc == -1 ? b = 0 : (b -= a.Lc, b = b > Math.max(1E4, a.l / 3) ? 0 : b);
            var c = a.C(a) || {};
            c = c.currentTime !== void 0 ? c.currentTime : a.I;
            var d = c - a.I,
                e = 0;
            d >= 0 ? (a.K += b, a.V += Math.max(b - d, 0), e = Math.min(d, a.K)) : a.aa += Math.abs(d);
            d != 0 && (a.K = 0);
            a.ga == -1 && d > 0 && (a.ga = Yp >= 0 ? $p() - Yp : -1);
            a.I = c;
            return e
        };
    Js.prototype.wd = function(a) {
        return Mq(), this.Jb ? 1 : Sr.prototype.wd.call(this, a)
    };
    Js.prototype.za = function() {
        return 1
    };
    Js.prototype.getDuration = function() {
        return this.l
    };
    var Qs = function(a, b) {
            Zb(a.B, function(c) {
                return c.o == b.o
            }) || a.B.push(b)
        },
        Rs = function(a) {
            var b = vr(a.qa().g, 1);
            return Ps(a, b)
        },
        Ps = function(a, b, c) {
            return b >= 15E3 ? !0 : a.ha ? (c === void 0 ? 0 : c) ? !0 : a.l > 0 ? b >= a.l / 2 : a.U > 0 ? b >= a.U : !1 : !1
        },
        Ss = function(a) {
            var b = {},
                c = Mq();
            b.insideIframe = c.l;
            b.unmeasurable = a.Ua;
            b.position = a.kb();
            b.exposure = a.ra.X;
            b.documentSize = c.o;
            b.viewportSize = new di(c.g.getWidth(), c.g.getHeight());
            a.o != null && (b.presenceData = a.o);
            b.screenShare = a.ra.ta;
            return b
        },
        Ts = function(a) {
            var b = xq(a.ra.X, 2),
                c = a.ia.l,
                d = a.ra,
                e = Os(a),
                f = Ls(e.o),
                g = Ls(e.B),
                h = Ls(d.volume),
                k = xq(e.C, 2),
                n = xq(e.I, 2),
                m = xq(d.X, 2),
                p = xq(e.K, 2),
                r = xq(e.P, 2);
            d = xq(d.ta, 2);
            a = Pk(a.kb());
            a.round();
            e = Dr(e, !1);
            return {
                Bh: b,
                ac: c,
                Vc: f,
                Rc: g,
                Rb: h,
                Wc: k,
                Sc: n,
                X: m,
                Xc: p,
                Tc: r,
                ta: d,
                position: a,
                Yc: e
            }
        },
        Vs = function(a, b) {
            Us(a.g, b, function() {
                return {
                    Bh: 0,
                    ac: void 0,
                    Vc: -1,
                    Rc: -1,
                    Rb: -1,
                    Wc: -1,
                    Sc: -1,
                    X: -1,
                    Xc: -1,
                    Tc: -1,
                    ta: -1,
                    position: void 0,
                    Yc: []
                }
            });
            a.g[b] = Ts(a)
        },
        Us = function(a, b, c) {
            for (var d = a.length; d < b + 1;) a.push(c()), d++
        },
        Ys = function(a, b, c) {
            var d = a.rf[b];
            if (d != null) return d;
            d = Ws(a, b);
            var e = vh(function(f) {
                return f == b
            });
            a = Xs(a, d, d, c, Is[wh[e]]);
            b == "fully_viewable_audible_half_duration_impression" && (a.std = "csm");
            return a
        },
        Zs = function(a, b, c) {
            var d = [b];
            if (a != b || c != b) d.unshift(a), d.push(c);
            return d
        },
        Xs = function(a, b, c, d, e) {
            if (a.Ua) return {
                "if": 0,
                vs: 0
            };
            var f = Pk(a.kb());
            f.round();
            var g = Mq(),
                h = N(),
                k = a.qa(),
                n = a.da ? a.da.getName() : "ns",
                m = {};
            m["if"] = g.l ? 1 : void 0;
            m.sdk = a.A ? a.A : void 0;
            m.t = a.rh;
            m.p = [f.top, f.left, f.bottom, f.right];
            m.tos = tr(k.j, !1);
            m.mtos = Dr(k);
            m.mcvt = k.W.l;
            m.ps = void 0;
            m.vht = xs(k, $p(), a.ma == 2);
            m.mut = k.la.l;
            m.a = Ls(a.ra.volume);
            m.mv = Ls(k.B);
            m.fs = a.Jb ? 1 : 0;
            m.ft = k.G.g;
            m.at = k.A.g;
            m.as = k.o > 0 ? 1 : 0;
            m.atos = tr(k.g);
            m.ssb = tr(k.ha, !1);
            m.amtos = wr(k.g, !1);
            m.uac = a.Ra;
            m.vpt = k.l.g;
            n == "nio" && (m.nio = 1, m.avms = "nio");
            m.gmm = "4";
            m.gdr = Ps(a, k.l.g, !0) ? 1 : 0;
            m.efpf = a.Fb;
            if (n == "gsv" || n == "nis") f = a.da, f.B > 0 && (m.nnut = f.B);
            m.tcm = Ns(a);
            m.nmt = a.aa;
            m.bt = a.V;
            m.pst = a.ga;
            m.vpaid = a.G;
            m.dur = a.l;
            m.vmtime = a.I;
            m.is = a.ia.l;
            a.g.length >= 1 && (m.i0 = a.g[0].ac, m.a0 = [a.g[0].Rb], m.c0 = [a.g[0].X], m.ss0 = [a.g[0].ta], f = a.g[0].position,
                m.p0 = f ? Gs(f) : void 0);
            a.g.length >= 2 && (m.i1 = a.g[1].ac, m.a1 = Zs(a.g[1].Vc, a.g[1].Rb, a.g[1].Rc), m.c1 = Zs(a.g[1].Wc, a.g[1].X, a.g[1].Sc), m.ss1 = Zs(a.g[1].Xc, a.g[1].ta, a.g[1].Tc), f = a.g[1].position, m.p1 = f ? Gs(f) : void 0, m.mtos1 = a.g[1].Yc);
            a.g.length >= 3 && (m.i2 = a.g[2].ac, m.a2 = Zs(a.g[2].Vc, a.g[2].Rb, a.g[2].Rc), m.c2 = Zs(a.g[2].Wc, a.g[2].X, a.g[2].Sc), m.ss2 = Zs(a.g[2].Xc, a.g[2].ta, a.g[2].Tc), f = a.g[2].position, m.p2 = f ? Gs(f) : void 0, m.mtos2 = a.g[2].Yc);
            a.g.length >= 4 && (m.i3 = a.g[3].ac, m.a3 = Zs(a.g[3].Vc, a.g[3].Rb, a.g[3].Rc),
                m.c3 = Zs(a.g[3].Wc, a.g[3].X, a.g[3].Sc), m.ss3 = Zs(a.g[3].Xc, a.g[3].ta, a.g[3].Tc), f = a.g[3].position, m.p3 = f ? Gs(f) : void 0, m.mtos3 = a.g[3].Yc);
            m.cs = ts(a.ia);
            b && (m.ic = rs(a.ia), m.dvpt = k.l.j, m.dvs = yr(k.j, .5), m.dfvs = yr(k.j, 1), m.davs = yr(k.g, .5), m.dafvs = yr(k.g, 1), c && (k.l.j = 0, zr(k.j), zr(k.g)), a.Wa() && (m.dtos = k.M, m.dav = k.D, m.dtoss = a.zd + 1, c && (k.M = 0, k.D = 0, a.zd++)), m.dat = k.A.j, m.dft = k.G.j, c && (k.A.j = 0, k.G.j = 0));
            m.ps = [g.o.width, g.o.height];
            m.bs = [g.g.getWidth(), g.g.getHeight()];
            m.scs = [g.A.width, g.A.height];
            m.dom = g.domain;
            a.Ob && (m.vds = a.Ob);
            if (a.B.length > 0 || a.Ya) b = ic(a.B), a.Ya && b.push(a.Ya), m.pings = Xb(b, function(p) {
                return p.toString()
            });
            b = Xb(Ub(a.B, function(p) {
                return p.B()
            }), function(p) {
                return p.getId()
            });
            jc(b);
            m.ces = b;
            a.j && (m.vmer = a.j);
            a.D && (m.vmmk = a.D);
            a.P && (m.vmiec = a.P);
            m.avms = a.da ? a.da.getName() : "ns";
            a.da && Bh(m, a.da.jb());
            d ? (m.c = xq(a.ra.X, 2), m.ss = xq(a.ra.ta, 2)) : m.tth = $p() - Xp;
            m.mc = xq(k.I, 2);
            m.nc = xq(k.C, 2);
            m.mv = Ls(k.B);
            m.nv = Ls(k.o);
            m.lte = xq(a.Ld, 2);
            d = Os(a, e);
            Dr(k);
            m.qmtos = Dr(d);
            m.qnc = xq(d.C, 2);
            m.qmv = Ls(d.B);
            m.qnv =
                Ls(d.o);
            m.qas = d.o > 0 ? 1 : 0;
            m.qi = a.na;
            m.avms || (m.avms = "geo");
            m.psm = k.U.g;
            m.psv = k.U.getValue();
            m.psfv = k.aa.getValue();
            m.psa = k.Z.getValue();
            h = Ro(h.R);
            h.length && (m.veid = h);
            a.o && Bh(m, bs(a.o));
            m.avas = a.Gc();
            m.vs = a.Le();
            m.co = $s(a);
            return m
        },
        Ws = function(a, b) {
            if (dc(gq, b)) return !0;
            var c = a.ka[b];
            return c !== void 0 ? (a.ka[b] = !0, !c) : !1
        };
    Js.prototype.Le = function() {
        return this.Ua ? 2 : Rs(this) ? 5 : this.Wa() ? 4 : 3
    };
    Js.prototype.Gc = function() {
        return this.Ja ? this.qa().A.l >= 2E3 ? 4 : 3 : 2
    };
    var $s = function(a) {
        var b = a.W.toString(10).padStart(2, "0");
        b = "" + a.Eb + b;
        a.W < 99 && a.W++;
        return b
    };
    var at = Date.now(),
        dt = function() {
            this.g = {};
            var a = Ai();
            bt(this, a, document);
            var b = ct();
            try {
                if ("1" == b) {
                    for (var c = a.parent; c != a.top; c = c.parent) bt(this, c, c.document);
                    bt(this, a.top, a.top.document)
                }
            } catch (d) {}
        },
        ct = function() {
            var a = document.documentElement;
            try {
                if (!Qi(Ai().top)) return "2";
                var b = [],
                    c = Ai(a.ownerDocument);
                for (a = c; a != c.top; a = a.parent)
                    if (a.frameElement) b.push(a.frameElement);
                    else break;
                return b && b.length != 0 ? "1" : "0"
            } catch (d) {
                return "2"
            }
        },
        bt = function(a, b, c) {
            Jr(c, "mousedown", function() {
                    return et(a)
                },
                301);
            Jr(b, "scroll", function() {
                return ft(a)
            }, 302);
            Jr(c, "touchmove", function() {
                return gt(a)
            }, 303);
            Jr(c, "mousemove", function() {
                return ht(a)
            }, 304);
            Jr(c, "keydown", function() {
                return it(a)
            }, 305)
        },
        et = function(a) {
            mh(a.g, function(b) {
                b.l > 1E5 || ++b.l
            })
        },
        ft = function(a) {
            mh(a.g, function(b) {
                b.g > 1E5 || ++b.g
            })
        },
        gt = function(a) {
            mh(a.g, function(b) {
                b.g > 1E5 || ++b.g
            })
        },
        it = function(a) {
            mh(a.g, function(b) {
                b.j > 1E5 || ++b.j
            })
        },
        ht = function(a) {
            mh(a.g, function(b) {
                b.o > 1E5 || ++b.o
            })
        };
    var jt = function() {
            this.g = [];
            this.j = []
        },
        kt = function(a, b) {
            return $b(a.g, function(c) {
                return c.na == b
            })
        },
        lt = function(a, b) {
            return b ? $b(a.g, function(c) {
                return c.ua.pb == b
            }) : null
        },
        mt = function(a, b) {
            return $b(a.j, function(c) {
                return c.za() == 2 && c.na == b
            })
        },
        ot = function() {
            var a = nt;
            return a.g.length == 0 ? a.j : a.j.length == 0 ? a.g : hc(a.j, a.g)
        };
    jt.prototype.reset = function() {
        this.g = [];
        this.j = []
    };
    var pt = function(a, b) {
            a = b.za() == 1 ? a.g : a.j;
            var c = ac(a, function(d) {
                return d == b
            });
            return c != -1 ? (a.splice(c, 1), b.da && b.da.rc(), b.dispose(), !0) : !1
        },
        qt = function(a) {
            var b = nt;
            if (pt(b, a)) {
                switch (a.za()) {
                    case 0:
                        var c = function() {
                            return null
                        };
                    case 2:
                        c = function() {
                            return mt(b, a.na)
                        };
                        break;
                    case 1:
                        c = function() {
                            return kt(b, a.na)
                        }
                }
                for (var d = c(); d; d = c()) pt(b, d)
            }
        },
        rt = function(a) {
            var b = nt;
            a = Ub(a, function(c) {
                return !lt(b, c.ua.pb)
            });
            b.g.push.apply(b.g, ia(a))
        },
        tt = function(a) {
            var b = [];
            Sb(a, function(c) {
                Zb(nt.g, function(d) {
                    return d.ua.pb ===
                        c.ua.pb && d.na === c.na
                }) || (nt.g.push(c), b.push(c))
            })
        },
        nt = J(jt);
    var ut = function() {
            this.g = this.j = null
        },
        vt = function(a, b) {
            if (a.j == null) return !1;
            var c = function(d, e) {
                b(d, e)
            };
            a.g = $b(a.j, function(d) {
                return d != null && d.re()
            });
            a.g && (a.g.init(c) ? Uq(a.g.g) : b(a.g.g.Gb(), a.g));
            return a.g != null
        };
    var xt = function(a) {
        a = wt(a);
        Yq.call(this, a.length ? a[a.length - 1] : new Qq(O, 0));
        this.l = a;
        this.j = null
    };
    x(xt, Yq);
    l = xt.prototype;
    l.getName = function() {
        return (this.j ? this.j : this.g).getName()
    };
    l.jb = function() {
        return (this.j ? this.j : this.g).jb()
    };
    l.Ta = function() {
        return (this.j ? this.j : this.g).Ta()
    };
    l.init = function(a) {
        var b = !1;
        Sb(this.l, function(c) {
            c.initialize() && (b = !0)
        });
        b && (this.o = a, Tq(this.g, this));
        return b
    };
    l.dispose = function() {
        Sb(this.l, function(a) {
            a.dispose()
        });
        Yq.prototype.dispose.call(this)
    };
    l.re = function() {
        return Zb(this.l, function(a) {
            return a.G()
        })
    };
    l.Pb = function() {
        return Zb(this.l, function(a) {
            return a.G()
        })
    };
    l.sc = function(a, b, c) {
        return new Ds(a, this.g, b, c)
    };
    l.lb = function(a) {
        this.j = a.j
    };
    var wt = function(a) {
        if (!a.length) return [];
        a = Ub(a, function(c) {
            return c != null && c.G()
        });
        for (var b = 1; b < a.length; b++) Tq(a[b - 1], a[b]);
        return a
    };
    var yt = {
            threshold: [0, .3, .5, .75, 1]
        },
        zt = function(a, b, c, d) {
            Xq.call(this, a, b, c, d);
            this.D = this.L = this.B = this.C = this.o = null
        };
    x(zt, Ds);
    zt.prototype.pd = function() {
        var a = this;
        this.D || (this.D = $p());
        if (Bp(298, function() {
                return At(a)
            })) return !0;
        Sq(this.j, "msf");
        return !1
    };
    zt.prototype.rc = function() {
        if (this.o && this.l) try {
            this.o.unobserve(this.l), this.C ? (this.C.unobserve(this.l), this.C = null) : this.B && (this.B.disconnect(), this.B = null)
        } catch (a) {}
    };
    var Bt = function(a) {
            return a.o && a.o.takeRecords ? a.o.takeRecords() : []
        },
        At = function(a) {
            if (!a.l) return !1;
            var b = a.l,
                c = a.j.g.l,
                d = N().g.g;
            a.o = new c.IntersectionObserver(lp(d, function(e) {
                return Ct(a, e)
            }), yt);
            d = lp(d, function() {
                a.o.unobserve(b);
                a.o.observe(b);
                Ct(a, Bt(a))
            });
            c.ResizeObserver ? (a.C = new c.ResizeObserver(d), a.C.observe(b)) : c.MutationObserver && (a.B = new y.MutationObserver(d), a.B.observe(b, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }));
            a.o.observe(b);
            Ct(a, Bt(a));
            return !0
        },
        Ct = function(a,
            b) {
            try {
                if (b.length) {
                    a.L || (a.L = $p());
                    var c = Dt(b),
                        d = sq(a.l, a.j.g.l),
                        e = d.x,
                        f = d.y;
                    a.g = new I(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                    var g = Cq(c.intersectionRect);
                    a.A = Qk(g, a.g.left - g.left, a.g.top - g.top)
                }
            } catch (h) {
                a.rc(), Dp(299, h)
            }
        },
        Dt = function(a) {
            return Yb(a, function(b, c) {
                return b.time > c.time ? b : c
            }, a[0])
        };
    l = zt.prototype;
    l.gb = function() {
        var a = Bt(this);
        a.length > 0 && Ct(this, a);
        Ds.prototype.gb.call(this)
    };
    l.td = function() {};
    l.Ne = function() {
        return !1
    };
    l.Ae = function() {};
    l.jb = function() {
        var a = {};
        return Object.assign(this.j.jb(), (a.niot_obs = this.D, a.niot_cbk = this.L, a))
    };
    l.getName = function() {
        return "nio"
    };
    var Et = function(a) {
        a = a === void 0 ? O : a;
        Yq.call(this, new Qq(a, 2))
    };
    x(Et, Yq);
    Et.prototype.getName = function() {
        return "nio"
    };
    Et.prototype.Pb = function() {
        return !Mq().j && this.g.g.l.IntersectionObserver != null
    };
    Et.prototype.sc = function(a, b, c) {
        return new zt(a, this.g, b, c)
    };
    var Gt = function() {
        var a = Ft();
        Qq.call(this, O.top, a, "geo")
    };
    x(Gt, Qq);
    Gt.prototype.aa = function() {
        return Mq().g
    };
    Gt.prototype.G = function() {
        var a = Ft();
        this.L !== a && (this.g != this && a > this.g.L && (this.g = this, Rq(this)), this.L = a);
        return a == 2
    };
    var Ft = function() {
        N();
        var a = Mq();
        return a.l || a.j ? 0 : 2
    };
    var Ht = function() {};
    var It = function() {
            this.done = !1;
            this.g = {
                Wf: 0,
                we: 0,
                uj: 0,
                Fe: 0,
                Jd: -1,
                jg: 0,
                ig: 0,
                kg: 0,
                nh: 0
            };
            this.A = null;
            this.B = !1;
            this.l = null;
            this.C = 0;
            this.j = new Oq(this)
        },
        Lt = function() {
            var a = Jt;
            a.B || (a.B = !0, Kt(a, function() {
                return a.o.apply(a, ia(Ja.apply(0, arguments)))
            }), a.o())
        };
    It.prototype.sample = function() {
        Mt(this, ot(), !1)
    };
    var Nt = function() {
            J(Ht);
            var a = J(ut);
            a.g != null && a.g.g ? Uq(a.g.g) : Iq(Mq())
        },
        Mt = function(a, b, c) {
            if (!a.done && (a.j.cancel(), b.length != 0)) {
                a.l = null;
                try {
                    Nt();
                    var d = $p();
                    N().A = d;
                    if (J(ut).g != null)
                        for (var e = 0; e < b.length; e++) Wr(b[e], d, c);
                    for (d = 0; d < b.length; d++) Xr(b[d]);
                    ++a.g.Fe
                } finally {
                    c ? Sb(b, function(f) {
                        f.ra.X = 0
                    }) : Pq(a.j)
                }
            }
        },
        Kt = function(a, b) {
            if (!a.A) {
                b = Cp(142, b);
                fp();
                var c = nl(Uo);
                c && kh(Uo, c, b, {
                    capture: !1
                }) && (a.A = b)
            }
        };
    It.prototype.o = function() {
        var a = Nq(),
            b = $p();
        a ? (Zp || (Vp = b, Sb(nt.g, function(c) {
            var d = c.qa();
            d.V = xs(d, b, c.ma != 1)
        })), Zp = !0) : (this.C = Ot(this, b), Zp = !1, Xp = b, Sb(nt.g, function(c) {
            c.Ub && (c.qa().J = b)
        }));
        Mt(this, ot(), !a)
    };
    var Pt = function() {
            var a = J(ut);
            if (a.g != null) {
                var b = a.g;
                Sb(ot(), function(c) {
                    return Ur(c, b)
                })
            }
        },
        Ot = function(a, b) {
            a = a.C;
            Zp && (a += b - Vp);
            return a
        },
        Qt = function(a) {
            a = a === void 0 ? function() {
                return {}
            } : a;
            yp.ee("av-js");
            up.g = .01;
            Ap([function(b) {
                var c = N(),
                    d = {};
                d = (d.bin = c.j, d.type = "error", d);
                c = Qo(c.R);
                if (!Jt.l) {
                    var e = Jt,
                        f = O.document,
                        g = Wp >= 0 ? $p() - Wp : -1,
                        h = $p();
                    e.g.Jd == -1 && (g = h);
                    var k = Mq(),
                        n = N(),
                        m = Qo(n.R),
                        p = ot();
                    try {
                        if (p.length > 0) {
                            var r = k.g;
                            r && (m.bs = [r.getWidth(), r.getHeight()]);
                            var t = k.o;
                            t && (m.ps = [t.width, t.height]);
                            O.screen && (m.scs = [O.screen.width, O.screen.height])
                        } else m.url = encodeURIComponent(O.location.href.substring(0, 512)), f.referrer && (m.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                        m.tt = g;
                        m.pt = Wp;
                        m.bin = n.j;
                        O.google_osd_load_pub_page_exp !== void 0 && (m.olpp = O.google_osd_load_pub_page_exp);
                        m.deb = [1, e.g.Wf, e.g.we, e.g.Fe, e.g.Jd, 0, e.j.j, e.g.jg, e.g.ig, e.g.kg, e.g.nh, -1].join(";");
                        m.tvt = Ot(e, h);
                        k.j && (m.inapp = 1);
                        if (O !== null && O != O.top) {
                            p.length > 0 && (m.iframe_loc = encodeURIComponent(O.location.href.substring(0,
                                512)));
                            var u = k.J;
                            m.is = [u.getWidth(), u.getHeight()]
                        }
                    } catch (E) {
                        m.error = 1
                    }
                    Jt.l = m
                }
                t = Jt.l;
                r = {};
                for (var w in t) r[w] = t[w];
                w = N().g;
                if (Po(w.l, "prf") == 1) {
                    t = new jp;
                    u = w.g;
                    e = 0;
                    u.g > -1 && (e = u.l.g.now() - u.g);
                    u = u.o + e;
                    if (u != null && typeof u !== "number") throw Error("Value of float/double field must be a number, found " + typeof u + ": " + u);
                    t = pf(t, 1, u, 0);
                    u = w.g;
                    t = Wf(t, 5, u.g > -1 ? u.j + 1 : u.j);
                    t = Xf(t, 2, w.j.g.l());
                    t = Xf(t, 3, w.j.g.j());
                    w = Xf(t, 4, w.j.g.g());
                    t = {};
                    w = (t.pf = Qc(w.g()), t)
                } else w = {};
                Bh(r, w);
                Bh(b, d, c, r, a())
            }])
        },
        Jt = J(It);
    var Rt = null,
        St = "",
        Tt = !1,
        Ut = function() {
            var a = Rt || O;
            if (!a) return "";
            var b = [];
            if (!a.location || !a.location.href) return "";
            b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
            return b.join("&")
        };

    function Vt() {
        var a = "av.default_js_unreleased_RCxx".match(/_(\d{8})_RC\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+\.\d+$/) || "av.default_js_unreleased_RCxx".match(/_(\d{8})_\d+_RC\d+$/),
            b;
        if (((b = a) == null ? void 0 : b.length) == 2) return a[1];
        a = "av.default_js_unreleased_RCxx".match(/.*_(\d{2})\.(\d{4})\.\d+_RC\d+$/);
        var c;
        return ((c = a) == null ? void 0 : c.length) == 3 ? "20" + a[1] + a[2] : null
    }
    var Wt = function() {
            return "ima_html5_sdk".includes("ima_html5_sdk") ? {
                La: "ima",
                Ma: null
            } : "ima_html5_sdk".includes("ima_native_sdk") ? {
                La: "nima",
                Ma: null
            } : "ima_html5_sdk".includes("admob-native-video-javascript") ? {
                La: "an",
                Ma: null
            } : "av.default_js_unreleased_RCxx".includes("cast_js_sdk") ? {
                La: "cast",
                Ma: Vt()
            } : "av.default_js_unreleased_RCxx".includes("youtube.player.web") ? {
                La: "yw",
                Ma: Vt()
            } : "av.default_js_unreleased_RCxx".includes("outstream_web_client") ? {
                La: "out",
                Ma: Vt()
            } : "av.default_js_unreleased_RCxx".includes("drx_rewarded_web") ? {
                La: "r",
                Ma: Vt()
            } : "av.default_js_unreleased_RCxx".includes("gam_native_web_video") ? {
                La: "n",
                Ma: Vt()
            } : "av.default_js_unreleased_RCxx".includes("admob_interstitial_video") ? {
                La: "int",
                Ma: Vt()
            } : {
                La: "j",
                Ma: null
            }
        },
        Xt = Wt().La,
        Yt = Wt().Ma;
    var $t = function(a, b) {
            var c = {
                sv: "963"
            };
            Yt !== null && (c.v = Yt);
            c.cb = Xt;
            c.nas = nt.g.length;
            c.msg = a;
            b !== void 0 && (a = Zt(b)) && (c.e = hq[a]);
            return c
        },
        au = function(a) {
            return a.lastIndexOf("custom_metric_viewable", 0) == 0
        },
        Zt = function(a) {
            var b = au(a) ? "custom_metric_viewable" : a.toLowerCase();
            return vh(function(c) {
                return c == b
            })
        };
    var bu = {
            Uh: "visible",
            Fh: "audible",
            Pi: "time",
            Ri: "timetype"
        },
        cu = {
            visible: function(a) {
                return /^(100|[0-9]{1,2})$/.test(a)
            },
            audible: function(a) {
                return a == "0" || a == "1"
            },
            timetype: function(a) {
                return a == "mtos" || a == "tos"
            },
            time: function(a) {
                return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
            }
        },
        du = function() {
            this.g = void 0;
            this.j = !1;
            this.l = 0;
            this.o = -1;
            this.A = "tos"
        },
        eu = function(a) {
            try {
                var b = a.split(",");
                return b.length > rh(bu).length ? null : Yb(b, function(c, d) {
                    d = d.toLowerCase().split("=");
                    if (d.length != 2 || cu[d[0]] ===
                        void 0 || !cu[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                    c[d[0]] = d[1];
                    return c
                }, {})
            } catch (c) {
                return null
            }
        },
        fu = function(a, b) {
            if (a.g == void 0) return 0;
            switch (a.A) {
                case "mtos":
                    return a.j ? xr(b.g, a.g) : xr(b.j, a.g);
                case "tos":
                    return a.j ? vr(b.g, a.g) : vr(b.j, a.g)
            }
            return 0
        };
    var gu = function(a, b, c, d) {
        zs.call(this, b, d);
        this.C = a;
        this.J = c
    };
    x(gu, zs);
    gu.prototype.getId = function() {
        return this.C
    };
    gu.prototype.B = function() {
        return !0
    };
    gu.prototype.g = function(a) {
        var b = a.qa(),
            c = a.getDuration();
        return Zb(this.J, function(d) {
            if (d.g != void 0) var e = fu(d, b);
            else b: {
                switch (d.A) {
                    case "mtos":
                        e = d.j ? b.A.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.j ? b.A.g : b.l.g;
                        break b
                }
                e = 0
            }
            e == 0 ? d = !1 : (d = d.l != -1 ? d.l : c !== void 0 && c > 0 ? d.o * c : -1, d = d != -1 && e >= d);
            return d
        })
    };
    var hu = function() {};
    x(hu, os);
    hu.prototype.g = function(a) {
        var b = new ns;
        b.g = ps(a, ks);
        b.j = ps(a, ms);
        return b
    };
    var iu = function(a) {
        zs.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    x(iu, zs);
    iu.prototype.g = function(a) {
        return Rs(a)
    };
    var ju = function(a) {
        this.g = a
    };
    x(ju, Bs);
    var ku = function(a, b) {
        zs.call(this, a, b)
    };
    x(ku, zs);
    ku.prototype.g = function(a) {
        return a.qa().Wa()
    };
    var lu = function(a) {
        As.call(this, "measurable_impression", a)
    };
    x(lu, As);
    lu.prototype.g = function(a) {
        var b = dc(this.C, Po(N().R, "ovms"));
        return !a.Ua && (a.ma != 0 || b)
    };
    var mu = function() {
        ju.apply(this, arguments)
    };
    x(mu, ju);
    mu.prototype.j = function() {
        return new lu(this.g)
    };
    mu.prototype.l = function() {
        return [new ku("viewable_impression", this.g), new iu(this.g)]
    };
    var nu = function(a, b, c) {
        Fs.call(this, a, b, c)
    };
    x(nu, Fs);
    nu.prototype.o = function() {
        var a = Pa("ima.admob.getViewability"),
            b = Po(this.R, "queryid");
        typeof a === "function" && b && a(b)
    };
    nu.prototype.getName = function() {
        return "gsv"
    };
    var ou = function(a) {
        a = a === void 0 ? O : a;
        Yq.call(this, new Qq(a, 2))
    };
    x(ou, Yq);
    ou.prototype.getName = function() {
        return "gsv"
    };
    ou.prototype.Pb = function() {
        var a = Mq();
        N();
        return a.j && !1
    };
    ou.prototype.sc = function(a, b, c) {
        return new nu(this.g, b, c)
    };
    var pu = function(a, b, c) {
        Fs.call(this, a, b, c)
    };
    x(pu, Fs);
    pu.prototype.o = function() {
        var a = this,
            b = Pa("ima.bridge.getNativeViewability"),
            c = Po(this.R, "queryid");
        typeof b === "function" && c && b(c, function(d) {
            xh(d) && a.B++;
            var e = d.opt_nativeViewVisibleBounds || {},
                f = d.opt_nativeViewHidden;
            a.g = Dq(d.opt_nativeViewBounds || {});
            var g = a.j.o;
            g.g = f ? Pk(Es) : Dq(e);
            a.timestamp = d.opt_nativeTime || -1;
            Mq().g = g.g;
            d = d.opt_nativeVolume;
            d !== void 0 && (g.volume = d)
        })
    };
    pu.prototype.getName = function() {
        return "nis"
    };
    var qu = function(a) {
        a = a === void 0 ? O : a;
        Yq.call(this, new Qq(a, 2))
    };
    x(qu, Yq);
    qu.prototype.getName = function() {
        return "nis"
    };
    qu.prototype.Pb = function() {
        var a = Mq();
        N();
        return a.j && !1
    };
    qu.prototype.sc = function(a, b, c) {
        return new pu(this.g, b, c)
    };
    var ru = function() {
        Qq.call(this, O, 2, "mraid");
        this.ga = 0;
        this.K = this.M = !1;
        this.J = null;
        this.j = iq(this.l);
        this.o.g = new I(0, 0, 0, 0);
        this.ha = !1
    };
    x(ru, Qq);
    ru.prototype.G = function() {
        return this.j.Fa != null
    };
    ru.prototype.Z = function() {
        var a = {};
        this.ga && (a.mraid = this.ga);
        this.M && (a.mlc = 1);
        a.mtop = this.j.mh;
        this.J && (a.mse = this.J);
        this.ha && (a.msc = 1);
        a.mcp = this.j.Dc;
        return a
    };
    ru.prototype.B = function(a) {
        var b = Ja.apply(1, arguments);
        try {
            return this.j.Fa[a].apply(this.j.Fa, b)
        } catch (c) {
            Dp(538, c, .01, function(d) {
                d.method = a
            })
        }
    };
    var tu = function(a, b, c) {
        a.B("addEventListener", b, c)
    };
    ru.prototype.initialize = function() {
        var a = this;
        if (this.va) return !this.Yb();
        this.va = !0;
        if (this.j.Dc === 2) return this.J = "ng", Sq(this, "w"), !1;
        if (this.j.Dc === 1) return this.J = "mm", Sq(this, "w"), !1;
        Mq().L = !0;
        this.l.document.readyState && this.l.document.readyState == "complete" ? uu(this) : Jr(this.l, "load", function() {
            fp().setTimeout(Cp(292, function() {
                return uu(a)
            }), 100)
        }, 292);
        return !0
    };
    var uu = function(a) {
            N().o = !!a.B("isViewable");
            tu(a, "viewableChange", vu);
            a.B("getState") === "loading" ? tu(a, "ready", wu) : xu(a)
        },
        xu = function(a) {
            typeof a.j.Fa.AFMA_LIDAR === "string" ? (a.M = !0, yu(a)) : (a.j.Dc = 3, a.J = "nc", Sq(a, "w"))
        },
        yu = function(a) {
            a.K = !1;
            var b = Po(N().R, "rmmt") == 1,
                c = !!a.B("isViewable");
            (b ? !c : 1) && fp().setTimeout(Cp(524, function() {
                a.K || (zu(a), Dp(540, Error()), a.J = "mt", Sq(a, "w"))
            }), 500);
            Au(a);
            tu(a, a.j.Fa.AFMA_LIDAR, Bu)
        },
        Au = function(a) {
            var b = Po(N().R, "sneio") == 1,
                c = a.j.Fa.AFMA_LIDAR_EXP_1 !== void 0,
                d =
                a.j.Fa.AFMA_LIDAR_EXP_2 !== void 0;
            (b = b && d) && (a.j.Fa.AFMA_LIDAR_EXP_2 = !0);
            c && (a.j.Fa.AFMA_LIDAR_EXP_1 = !b)
        },
        zu = function(a) {
            a.B("removeEventListener", a.j.Fa.AFMA_LIDAR, Bu);
            a.M = !1
        };
    ru.prototype.U = function() {
        var a = Mq(),
            b = Cu(this, "getMaxSize");
        a.g = new I(0, b.width, b.height, 0)
    };
    ru.prototype.V = function() {
        Mq().A = Cu(this, "getScreenSize")
    };
    var Cu = function(a, b) {
        if (a.B("getState") === "loading") return new di(-1, -1);
        b = a.B(b);
        if (!b) return new di(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new di(-1, -1) : new di(a, b)
    };
    ru.prototype.dispose = function() {
        zu(this);
        Qq.prototype.dispose.call(this)
    };
    var wu = function() {
            try {
                var a = J(ru);
                a.B("removeEventListener", "ready", wu);
                xu(a)
            } catch (b) {
                Dp(541, b)
            }
        },
        Bu = function(a, b) {
            try {
                var c = J(ru);
                c.K = !0;
                var d = a ? new I(a.y, a.x + a.width, a.y + a.height, a.x) : new I(0, 0, 0, 0);
                var e = $p(),
                    f = Nq();
                var g = new bq(e, f, c);
                g.g = d;
                g.volume = b;
                c.lb(g)
            } catch (h) {
                Dp(542, h)
            }
        },
        vu = function(a) {
            var b = N(),
                c = J(ru);
            a && !b.o && (b.o = !0, c.ha = !0, c.J && Sq(c, "w", !0))
        };
    var op = new function(a, b) {
        this.key = a;
        this.defaultValue = b === void 0 ? !1 : b;
        this.valueType = "boolean"
    }("45378663");
    var Eu = function() {
        this.l = this.va = !1;
        this.g = this.j = null;
        var a = {};
        this.M = (a.start = this.Gg, a.firstquartile = this.Bg, a.midpoint = this.Dg, a.thirdquartile = this.Hg, a.complete = this.yg, a.error = this.zg, a.pause = this.Ud, a.resume = this.df, a.skip = this.Fg, a.viewable_impression = this.Oa, a.mute = this.Nb, a.unmute = this.Nb, a.fullscreen = this.Cg, a.exitfullscreen = this.Ag, a.fully_viewable_audible_half_duration_impression = this.Oa, a.measurable_impression = this.Oa, a.abandon = this.Ud, a.engagedview = this.Oa, a.impression = this.Oa, a.creativeview =
            this.Oa, a.progress = this.Nb, a.custom_metric_viewable = this.Oa, a.bufferstart = this.Ud, a.bufferfinish = this.df, a.audio_measurable = this.Oa, a.audio_audible = this.Oa, a);
        a = {};
        this.U = (a.overlay_resize = this.Eg, a.abandon = this.Hd, a.close = this.Hd, a.collapse = this.Hd, a.overlay_unmeasurable_impression = function(b) {
            return Ys(b, "overlay_unmeasurable_impression", Nq())
        }, a.overlay_viewable_immediate_impression = function(b) {
            return Ys(b, "overlay_viewable_immediate_impression", Nq())
        }, a.overlay_unviewable_impression = function(b) {
            return Ys(b,
                "overlay_unviewable_impression", Nq())
        }, a.overlay_viewable_end_of_session_impression = function(b) {
            return Ys(b, "overlay_viewable_end_of_session_impression", Nq())
        }, a);
        N().j = 3;
        Du(this)
    };
    Eu.prototype.A = function(a) {
        Tr(a, !1);
        qt(a)
    };
    Eu.prototype.J = function() {};
    var Fu = function(a, b, c, d) {
        a = a.B(null, d, !0, b);
        a.A = c;
        rt([a]);
        return a
    };
    Eu.prototype.B = function(a, b, c, d) {
        var e = this;
        a = new Js(O, a, c ? b : -1, 7, this.xd(), this.Ee());
        a.na = d;
        No(a.R);
        Oo(a.R, "queryid", a.na);
        a.Wd("");
        Yr(a, function() {
            return e.K.apply(e, ia(Ja.apply(0, arguments)))
        }, function() {
            return e.P.apply(e, ia(Ja.apply(0, arguments)))
        });
        (d = J(ut).g) && Ur(a, d);
        a.ua.pb && J(Ht);
        return a
    };
    var Gu = function(a, b, c) {
            vo(b);
            var d = a.g;
            Sb(b, function(e) {
                var f = Xb(e.l, function(g) {
                    var h = eu(g);
                    if (h == null) g = null;
                    else if (g = new du, h.visible != null && (g.g = h.visible / 100), h.audible != null && (g.j = h.audible == 1), h.time != null) {
                        var k = h.timetype == "mtos" ? "mtos" : "tos",
                            n = sb(h.time, "%") ? "%" : "ms";
                        h = parseInt(h.time, 10);
                        n == "%" && (h /= 100);
                        n == "ms" ? (g.l = h, g.o = -1) : (g.l = -1, g.o = h);
                        g.A = k === void 0 ? "tos" : k
                    }
                    return g
                });
                Zb(f, function(g) {
                    return g == null
                }) || Qs(c, new gu(e.id, e.g, f, d))
            })
        },
        Hu = function() {
            var a = [],
                b = N();
            a.push(J(Gt));
            Po(b.R,
                "mvp_lv") && a.push(J(ru));
            b = [new ou, new qu];
            b.push(new xt(a));
            b.push(new Et(O));
            return b
        },
        Ju = function(a) {
            if (!a.va) {
                a.va = !0;
                try {
                    var b = $p(),
                        c = N(),
                        d = Mq();
                    Wp = b;
                    c.l = 79463069;
                    a.j !== "o" && (Rt = fj(O));
                    if (gp()) {
                        Jt.g.we = 0;
                        Jt.g.Jd = $p() - b;
                        var e = Hu(),
                            f = J(ut);
                        f.j = e;
                        vt(f, function() {
                            Iu()
                        }) ? Jt.done || (Pt(), Tq(f.g.g, a), Lt()) : d.l ? Iu() : Lt()
                    } else Tt = !0
                } catch (g) {
                    throw nt.reset(), g;
                }
            }
        },
        Ku = function(a) {
            Jt.j.cancel();
            St = a;
            Jt.done = !0
        },
        Lu = function(a) {
            if (a.j) return a.j;
            var b = J(ut).g;
            if (b) switch (b.getName()) {
                case "nis":
                    a.j = "n";
                    break;
                case "gsv":
                    a.j = "m"
            }
            a.j || (a.j = "h");
            return a.j
        },
        Mu = function(a, b, c) {
            if (a.g == null) return b.Ob |= 4, !1;
            a = a.g.report(c, b);
            b.Ob |= a;
            return a == 0
        };
    Eu.prototype.Ib = function(a) {
        switch (a.Ta()) {
            case 0:
                if (a = J(ut).g) a = a.g, ec(a.A, this), a.D && this.Pa() && Vq(a);
                Iu();
                break;
            case 2:
                Lt()
        }
    };
    Eu.prototype.lb = function() {};
    Eu.prototype.Pa = function() {
        return !1
    };
    var Iu = function() {
        var a = [new Et(O)],
            b = J(ut);
        b.j = a;
        vt(b, function() {
            Ku("i")
        }) ? Jt.done || (Pt(), Lt()) : Ku("i")
    };
    Eu.prototype.P = function(a, b) {
        a.Ua = !0;
        switch (a.za()) {
            case 1:
                Nu(a, b);
                break;
            case 2:
                this.Zd(a)
        }
        this.de(a)
    };
    var Nu = function(a, b) {
        if (!a.Sa) {
            var c = Ys(a, "start", Nq());
            c = a.Vd.g(c).g;
            var d = {
                id: "lidarv"
            };
            d.r = b;
            d.sv = "963";
            Yt !== null && (d.v = Yt);
            Ni(c, function(e, f) {
                return d[e] = e == "mtos" || e == "tos" ? f : encodeURIComponent(f)
            });
            b = Ut();
            Ni(b, function(e, f) {
                return d[e] = encodeURIComponent(f)
            });
            b = "//pagead2.googlesyndication.com/pagead/gen_204?" + fr(dr(new br, d));
            ir(b);
            a.Sa = !0
        }
    };
    l = Eu.prototype;
    l.Gg = function(a) {
        var b = a.C(a);
        b && (b = b.volume, a.Ja = Eq(b) && b > 0);
        Vs(a, 0);
        return Ys(a, "start", Nq())
    };
    l.Nb = function(a, b, c) {
        Mt(Jt, [a], !Nq());
        return this.Oa(a, b, c)
    };
    l.Oa = function(a, b, c) {
        return Ys(a, c, Nq())
    };
    l.Bg = function(a) {
        return Ou(a, "firstquartile", 1)
    };
    l.Dg = function(a) {
        a.ha = !0;
        return Ou(a, "midpoint", 2)
    };
    l.Hg = function(a) {
        return Ou(a, "thirdquartile", 3)
    };
    l.yg = function(a) {
        var b = Ou(a, "complete", 4);
        Ks(a);
        return b
    };
    l.zg = function(a) {
        a.ma = 3;
        return Ys(a, "error", Nq())
    };
    var Ou = function(a, b, c) {
        Mt(Jt, [a], !Nq());
        Vs(a, c);
        c != 4 && Us(a.M, c, a.Ic);
        return Ys(a, b, Nq())
    };
    l = Eu.prototype;
    l.df = function(a, b, c) {
        b = Nq();
        a.ma != 2 || b || (a.qa().J = $p());
        Mt(Jt, [a], !b);
        a.ma == 2 && (a.ma = 1);
        return Ys(a, c, b)
    };
    l.Fg = function(a, b) {
        b = this.Nb(a, b || {}, "skip");
        Ks(a);
        return b
    };
    l.Cg = function(a, b) {
        Tr(a, !0);
        return this.Nb(a, b || {}, "fullscreen")
    };
    l.Ag = function(a, b) {
        Tr(a, !1);
        return this.Nb(a, b || {}, "exitfullscreen")
    };
    l.Ud = function(a, b, c) {
        b = a.qa();
        b.V = xs(b, $p(), a.ma != 1);
        Mt(Jt, [a], !Nq());
        a.ma == 1 && (a.ma = 2);
        return Ys(a, c, Nq())
    };
    l.Eg = function(a) {
        Mt(Jt, [a], !Nq());
        return a.j()
    };
    l.Hd = function(a) {
        Mt(Jt, [a], !Nq());
        this.af(a);
        Ks(a);
        return a.j()
    };
    var Du = function(a) {
            Qt(function() {
                var b = Pu();
                a.j != null && (b.sdk = a.j);
                var c = J(ut);
                c.g != null && (b.avms = c.g.getName());
                return b
            })
        },
        Qu = function(a, b, c, d) {
            var e = lt(nt, c);
            e !== null && e.na !== b && (a.A(e), e = null);
            e || (b = a.B(c, $p(), !1, b), nt.j.length == 0 && (N().l = 79463069), tt([b]), e = b, e.A = Lu(a), d && (e.rb = d));
            return e
        };
    Eu.prototype.K = function() {};
    var Su = function(a, b) {
        b.D = 0;
        for (var c in dq) a[c] == null && (b.D |= dq[c]);
        Ru(a, "currentTime");
        Ru(a, "duration")
    };
    l = Eu.prototype;
    l.Zd = function() {};
    l.af = function() {};
    l.se = function() {};
    l.de = function() {};
    l.yd = function() {};
    l.Ee = function() {
        this.g || (this.g = this.yd());
        return this.g == null || this.l ? new Cs : new mu(this.g)
    };
    l.xd = function() {
        return new hu
    };
    var Ru = function(a, b) {
            var c = a[b];
            c !== void 0 && c > 0 && (a[b] = Math.floor(c * 1E3))
        },
        Pu = function() {
            var a = Mq(),
                b = {},
                c = {},
                d = {};
            return Object.assign({}, (b.sv = "963", b), Yt !== null && (c.v = Yt, c), (d["if"] = a.l ? "1" : "0", d.nas = String(nt.g.length), d))
        };
    var Tu = function(a) {
        zs.call(this, "audio_audible", a)
    };
    x(Tu, zs);
    Tu.prototype.g = function(a) {
        return a.Gc() == 4
    };
    var Uu = function(a) {
        As.call(this, "audio_measurable", a)
    };
    x(Uu, As);
    Uu.prototype.g = function(a) {
        a = a.Gc();
        return a == 3 || a == 4
    };
    var Vu = function() {
        ju.apply(this, arguments)
    };
    x(Vu, ju);
    Vu.prototype.j = function() {
        return new Uu(this.g)
    };
    Vu.prototype.l = function() {
        return [new Tu(this.g)]
    };
    var Wu = function() {};
    x(Wu, os);
    Wu.prototype.g = function(a) {
        a && (a.e === 28 && (a = Object.assign({}, a, {
            avas: 3
        })), a.vs === 4 || a.vs === 5) && (a = Object.assign({}, a, {
            vs: 3
        }));
        var b = new ns;
        b.g = ps(a, ls);
        b.j = ps(a, ms);
        return b
    };
    var Xu = function(a) {
        this.j = a
    };
    Xu.prototype.report = function(a, b) {
        var c = this.g(b);
        if (typeof c === "function") {
            var d = {};
            var e = {};
            d = Object.assign({}, Yt !== null && (d.v = Yt, d), (e.sv = "963", e.cb = Xt, e.e = Yu(a), e));
            e = Ys(b, a, Nq());
            Bh(d, e);
            b.rf[a] = e;
            d = b.za() == 2 ? hr(d).join("&") : b.Vd.g(d).g;
            try {
                return c(b.na, d, a), 0
            } catch (f) {
                return 2
            }
        } else return 1
    };
    var Yu = function(a) {
        var b = au(a) ? "custom_metric_viewable" : a;
        a = vh(function(c) {
            return c == b
        });
        return hq[a]
    };
    Xu.prototype.g = function() {
        return Pa(this.j)
    };
    var Zu = function(a, b) {
        this.j = a;
        this.l = b
    };
    x(Zu, Xu);
    Zu.prototype.g = function(a) {
        if (!a.rb) return Xu.prototype.g.call(this, a);
        if (this.l[a.rb]) return function() {};
        Dp(393, Error());
        return null
    };
    var $u = function() {
        Eu.call(this);
        this.D = void 0;
        this.G = null;
        this.L = !1;
        this.o = {};
        this.I = 0;
        this.C = "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED"
    };
    x($u, Eu);
    $u.prototype.J = function(a, b) {
        var c = this,
            d = J(ut);
        if (d.g != null) switch (d.g.getName()) {
            case "nis":
                var e = av(this, a, b);
                break;
            case "gsv":
                e = bv(this, a, b);
                break;
            case "exc":
                e = cv(this, a)
        }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = Qu(this, a, b.opt_adElement, b.opt_osdId)));
        e && e.za() == 1 && (e.C == eh && (e.C = function(f) {
            return c.se(f)
        }), dv(this, e, b));
        return e
    };
    var dv = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        a.g != null && Array.isArray(c) && Gu(a, c, b)
    };
    $u.prototype.se = function(a) {
        a.j = 0;
        a.P = 0;
        if (a.A == "h" || a.A == "n") {
            var b;
            N();
            if (a.rb && ev(this)) {
                var c = this.o[a.rb];
                c ? b = function(e) {
                    return fv(c, e)
                } : c !== null && Dp(379, Error())
            } else b = Pa("ima.common.getVideoMetadata");
            if (typeof b === "function") try {
                var d = b(a.na)
            } catch (e) {
                a.j |= 4
            } else a.j |= 2
        } else if (a.A == "b")
            if (b = Pa("ytads.bulleit.getVideoMetadata"), typeof b === "function") try {
                d = b(a.na)
            } catch (e) {
                a.j |= 4
            } else a.j |= 2;
            else if (a.A == "ml")
            if (b = Pa("ima.common.getVideoMetadata"), typeof b === "function") try {
                d = b(a.na)
            } catch (e) {
                a.j |=
                    4
            } else a.j |= 2;
            else a.j |= 1;
        a.j || (d === void 0 ? a.j |= 8 : d === null ? a.j |= 16 : xh(d) ? a.j |= 32 : d.errorCode != null && (a.P = d.errorCode, a.j |= 64));
        d == null && (d = {});
        Su(d, a);
        Eq(d.volume) && Eq(this.D) && (d.volume *= this.D);
        return d
    };
    var bv = function(a, b, c) {
            var d = kt(nt, b);
            d || (d = c.opt_nativeTime || -1, d = Fu(a, b, Lu(a), d), c.opt_osdId && (d.rb = c.opt_osdId));
            return d
        },
        av = function(a, b, c) {
            var d = kt(nt, b);
            d || (d = Fu(a, b, "n", c.opt_nativeTime || -1));
            return d
        },
        cv = function(a, b) {
            var c = kt(nt, b);
            c || (c = Fu(a, b, "h", -1));
            return c
        };
    $u.prototype.yd = function() {
        if (ev(this)) return new Zu("ima.common.triggerExternalActivityEvent", this.o);
        var a = gv(this);
        return a != null ? new Xu(a) : null
    };
    var gv = function(a) {
        N();
        switch (Lu(a)) {
            case "b":
                return "ytads.bulleit.triggerExternalActivityEvent";
            case "n":
                return "ima.bridge.triggerExternalActivityEvent";
            case "h":
            case "m":
            case "ml":
                return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    $u.prototype.Zd = function(a) {
        !a.g && a.Ua && Mu(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    };
    $u.prototype.af = function(a) {
        a.gf && (a.Wa() ? Mu(this, a, "overlay_viewable_end_of_session_impression") : Mu(this, a, "overlay_unviewable_impression"), a.gf = !1)
    };
    var hv = function(a, b, c, d) {
        c = c === void 0 ? {} : c;
        var e = {};
        Bh(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        var f = a.J(b, c);
        c = f ? f.Vd : a.xd();
        if (e.opt_bounds) return c.g($t("ol", d));
        if (d !== void 0)
            if (Zt(d) !== void 0)
                if (Tt) a = $t("ue", d);
                else if (Ju(a), St == "i") a = $t("i", d), a["if"] = 0;
        else if (b = a.J(b, e)) {
            b: {
                St == "i" && (b.Ua = !0, a.de(b));f = e.opt_fullscreen;f !== void 0 && Tr(b, !!f);
                var g;
                if (f = !Mq().j && !Hq()) fp(),
                f = ml(Uo) === 0;
                if (g = f) {
                    switch (b.za()) {
                        case 1:
                            Nu(b, "pv");
                            break;
                        case 2:
                            a.Zd(b)
                    }
                    Ku("pv")
                }
                f = d.toLowerCase();
                if (g = !g) c: {
                    if (Po(N().R,
                            "ssmol") && (g = a.l, f === "loaded")) break c;g = dc(eq, f)
                }
                if (g && b.ma == 0) {
                    St != "i" && (Jt.done = !1);
                    g = e !== void 0 ? e.opt_nativeTime : void 0;
                    Yp = g = typeof g === "number" ? g : $p();
                    b.Ub = !0;
                    var h = Nq();
                    b.ma = 1;
                    b.ka = {};
                    b.ka.start = !1;
                    b.ka.firstquartile = !1;
                    b.ka.midpoint = !1;
                    b.ka.thirdquartile = !1;
                    b.ka.complete = !1;
                    b.ka.resume = !1;
                    b.ka.pause = !1;
                    b.ka.skip = !1;
                    b.ka.mute = !1;
                    b.ka.unmute = !1;
                    b.ka.viewable_impression = !1;
                    b.ka.measurable_impression = !1;
                    b.ka.fully_viewable_audible_half_duration_impression = !1;
                    b.ka.fullscreen = !1;
                    b.ka.exitfullscreen = !1;
                    b.zd = 0;
                    h || (b.qa().J = g);
                    Mt(Jt, [b], !h)
                }(g = b.Cb[f]) && b.ia.reportEvent(g);Po(N().R, "fmd") || dc(fq, f) && b.Ya && b.Ya.j(b, null);
                switch (b.za()) {
                    case 1:
                        var k = au(f) ? a.M.custom_metric_viewable : a.M[f];
                        break;
                    case 2:
                        k = a.U[f]
                }
                if (k && (d = k.call(a, b, e, d), Po(N().R, "fmd") && dc(fq, f) && b.Ya && b.Ya.j(b, null), d !== void 0)) {
                    e = $t(void 0, f);
                    Bh(e, d);
                    d = e;
                    break b
                }
                d = void 0
            }
            b.ma == 3 && a.A(b);a = d
        }
        else a = $t("nf", d);
        else a = void 0;
        else Tt ? a = $t("ue") : f ? (a = $t(), Bh(a, Xs(f, !0, !1, !1))) : a = $t("nf");
        return typeof a === "string" ? c.g() : c.g(a)
    };
    $u.prototype.K = function(a) {
        this.l && a.za() == 1 && iv(this, a)
    };
    $u.prototype.de = function(a) {
        this.l && a.za() == 1 && iv(this, a)
    };
    var iv = function(a, b) {
            var c;
            if (b.rb && ev(a)) {
                var d = a.o[b.rb];
                d ? c = function(f, g) {
                    jv(d, f, g)
                } : d !== null && Dp(379, Error())
            } else c = Pa("ima.common.triggerViewabilityMeasurementUpdate");
            if (typeof c === "function") {
                var e = Ss(b);
                e.nativeVolume = a.D;
                c(b.na, e)
            }
        },
        ev = function(a) {
            return (N(), Lu(a) != "h" && Lu(a) != "m") ? !1 : a.I != 0
        };
    $u.prototype.B = function(a, b, c, d) {
        if (pp()) {
            var e = Po(N().R, "mm"),
                f = {};
            (e = (f[yo.uf] = "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO", f[yo.VIDEO] = "ACTIVE_VIEW_TRAFFIC_TYPE_VIDEO", f)[e]) && e && (this.C = e);
            this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_UNSPECIFIED" && Dp(1044, Error())
        }
        a = Eu.prototype.B.call(this, a, b, c, d);
        this.L && (b = this.G, a.o == null && (a.o = new as), b.g[a.na] = a.o, a.o.A = at);
        return a
    };
    $u.prototype.A = function(a) {
        a && a.za() == 1 && this.L && delete this.G.g[a.na];
        return Eu.prototype.A.call(this, a)
    };
    $u.prototype.Ee = function() {
        this.g || (this.g = this.yd());
        return this.g == null || this.l ? new Cs : this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" ? new Vu(this.g) : new mu(this.g)
    };
    $u.prototype.xd = function() {
        return this.C === "ACTIVE_VIEW_TRAFFIC_TYPE_AUDIO" ? new Wu : new hu
    };
    var kv = function(a) {
            var b = {};
            return b.viewability = a.g, b.googleViewability = a.j, b
        },
        lv = function(a, b, c) {
            c = c === void 0 ? {} : c;
            a = hv(J($u), b, c, a);
            return kv(a)
        },
        mv = Cp(193, lv, void 0, Pu);
    z("Goog_AdSense_Lidar_sendVastEvent", mv);
    var nv = Cp(194, function(a, b) {
        b = b === void 0 ? {} : b;
        a = hv(J($u), a, b);
        return kv(a)
    });
    z("Goog_AdSense_Lidar_getViewability", nv);
    var ov = Cp(195, function() {
        return hp()
    });
    z("Goog_AdSense_Lidar_getUrlSignalsArray", ov);
    var pv = Cp(196, function() {
        return JSON.stringify(hp())
    });
    z("Goog_AdSense_Lidar_getUrlSignalsList", pv);
    y.console && typeof y.console.log === "function" && bb(y.console.log, y.console);
    var qv = function(a) {
        for (var b = [], c = a = Ai(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b
    };
    var rv = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.j = !1
    };
    rv.prototype.stopPropagation = function() {
        this.j = !0
    };
    rv.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var tv = function() {
        if (!y.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            var c = function() {};
            y.addEventListener("test", c, b);
            y.removeEventListener("test", c, b)
        } catch (d) {}
        return a
    }();
    var uv = function(a, b) {
        rv.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.g = null;
        a && this.init(a, b)
    };
    db(uv, rv);
    var vv = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    uv.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        (b = a.relatedTarget) ? uc && (oc(b, "nodeName") || (b = null)): c == "mouseover" ? b = a.fromElement : c == "mouseout" && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = d.clientX !== void 0 ? d.clientX : d.pageX, this.clientY = d.clientY !== void 0 ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = a.clientX !== void 0 ?
            a.clientX : a.pageX, this.clientY = a.clientY !== void 0 ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = typeof a.pointerType === "string" ? a.pointerType : vv[a.pointerType] || "";
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && uv.Ia.preventDefault.call(this)
    };
    uv.prototype.stopPropagation = function() {
        uv.Ia.stopPropagation.call(this);
        this.g.stopPropagation ? this.g.stopPropagation() : this.g.cancelBubble = !0
    };
    uv.prototype.preventDefault = function() {
        uv.Ia.preventDefault.call(this);
        var a = this.g;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    var wv = "closure_listenable_" + (Math.random() * 1E6 | 0),
        xv = function(a) {
            return !(!a || !a[wv])
        };
    var yv = 0;
    var zv = function(a, b, c, d, e) {
            this.listener = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Jc = e;
            this.key = ++yv;
            this.lc = this.zc = !1
        },
        Av = function(a) {
            a.lc = !0;
            a.listener = null;
            a.proxy = null;
            a.src = null;
            a.Jc = null
        };
    var Bv = function(a) {
        this.src = a;
        this.g = {};
        this.j = 0
    };
    Bv.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.j++);
        var g = Cv(a, b, d, e);
        g > -1 ? (b = a[g], c || (b.zc = !1)) : (b = new zv(b, this.src, f, !!d, e), b.zc = c, a.push(b));
        return b
    };
    Bv.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.g)) return !1;
        var e = this.g[a];
        b = Cv(e, b, c, d);
        return b > -1 ? (Av(e[b]), fc(e, b), e.length == 0 && (delete this.g[a], this.j--), !0) : !1
    };
    var Dv = function(a, b) {
        var c = b.type;
        c in a.g && ec(a.g[c], b) && (Av(b), a.g[c].length == 0 && (delete a.g[c], a.j--))
    };
    Bv.prototype.Wb = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = Cv(a, b, c, d));
        return e > -1 ? a[e] : null
    };
    var Cv = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.lc && f.listener == b && f.capture == !!c && f.Jc == d) return e
        }
        return -1
    };
    var Ev = "closure_lm_" + (Math.random() * 1E6 | 0),
        Fv = {},
        Gv = 0,
        Iv = function(a, b, c, d, e) {
            if (d && d.once) return Hv(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) Iv(a, b[f], c, d, e);
                return null
            }
            c = Jv(c);
            return xv(a) ? a.listen(b, c, Ta(d) ? !!d.capture : !!d, e) : Kv(a, b, c, !1, d, e)
        },
        Kv = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = Ta(e) ? !!e.capture : !!e,
                h = Lv(a);
            h || (a[Ev] = h = new Bv(a));
            c = h.add(b, c, d, g, f);
            if (c.proxy) return c;
            d = Mv();
            c.proxy = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) tv || (e = g), e ===
                void 0 && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(Nv(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Gv++;
            return c
        },
        Mv = function() {
            var a = Ov,
                b = function(c) {
                    return a.call(b.src, b.listener, c)
                };
            return b
        },
        Hv = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) Hv(a, b[f], c, d, e);
                return null
            }
            c = Jv(c);
            return xv(a) ? a.ec(b, c, Ta(d) ? !!d.capture : !!d, e) : Kv(a, b, c, !0, d,
                e)
        },
        Pv = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) Pv(a, b[f], c, d, e);
            else d = Ta(d) ? !!d.capture : !!d, c = Jv(c), xv(a) ? a.tb(b, c, d, e) : a && (a = Lv(a)) && (b = a.Wb(b, c, d, e)) && Qv(b)
        },
        Qv = function(a) {
            if (typeof a !== "number" && a && !a.lc) {
                var b = a.src;
                if (xv(b)) Dv(b.o, a);
                else {
                    var c = a.type,
                        d = a.proxy;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Nv(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    Gv--;
                    (c = Lv(b)) ? (Dv(c, a), c.j == 0 && (c.src = null, b[Ev] = null)) :
                    Av(a)
                }
            }
        },
        Nv = function(a) {
            return a in Fv ? Fv[a] : Fv[a] = "on" + a
        },
        Ov = function(a, b) {
            if (a.lc) a = !0;
            else {
                b = new uv(b, this);
                var c = a.listener,
                    d = a.Jc || a.src;
                a.zc && Qv(a);
                a = c.call(d, b)
            }
            return a
        },
        Lv = function(a) {
            a = a[Ev];
            return a instanceof Bv ? a : null
        },
        Rv = "__closure_events_fn_" + (Math.random() * 1E9 >>> 0),
        Jv = function(a) {
            if (typeof a === "function") return a;
            a[Rv] || (a[Rv] = function(b) {
                return a.handleEvent(b)
            });
            return a[Rv]
        };
    var R = function() {
        Q.call(this);
        this.o = new Bv(this);
        this.Eb = this;
        this.ga = null
    };
    db(R, Q);
    R.prototype[wv] = !0;
    l = R.prototype;
    l.addEventListener = function(a, b, c, d) {
        Iv(this, a, b, c, d)
    };
    l.removeEventListener = function(a, b, c, d) {
        Pv(this, a, b, c, d)
    };
    l.dispatchEvent = function(a) {
        var b, c = this.ga;
        if (c)
            for (b = []; c; c = c.ga) b.push(c);
        c = this.Eb;
        var d = a.type || a;
        if (typeof a === "string") a = new rv(a, c);
        else if (a instanceof rv) a.target = a.target || c;
        else {
            var e = a;
            a = new rv(d, c);
            Bh(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.j && f >= 0; f--) {
                var g = a.currentTarget = b[f];
                e = Sv(g, d, !0, a) && e
            }
        a.j || (g = a.currentTarget = c, e = Sv(g, d, !0, a) && e, a.j || (e = Sv(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.j && f < b.length; f++) g = a.currentTarget = b[f], e = Sv(g, d, !1, a) && e;
        return e
    };
    l.O = function() {
        R.Ia.O.call(this);
        if (this.o) {
            var a = this.o,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, Av(d[e]);
                delete a.g[c];
                a.j--
            }
        }
        this.ga = null
    };
    l.listen = function(a, b, c, d) {
        return this.o.add(String(a), b, !1, c, d)
    };
    l.ec = function(a, b, c, d) {
        return this.o.add(String(a), b, !0, c, d)
    };
    l.tb = function(a, b, c, d) {
        this.o.remove(String(a), b, c, d)
    };
    var Sv = function(a, b, c, d) {
        b = a.o.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.lc && g.capture == c) {
                var h = g.listener,
                    k = g.Jc || g.src;
                g.zc && Dv(a.o, g);
                e = h.call(k, d) !== !1 && e
            }
        }
        return e && !d.defaultPrevented
    };
    R.prototype.Wb = function(a, b, c, d) {
        return this.o.Wb(String(a), b, c, d)
    };
    var Tv = function(a, b) {
        this.l = a;
        this.o = b;
        this.j = 0;
        this.g = null
    };
    Tv.prototype.get = function() {
        if (this.j > 0) {
            this.j--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.l();
        return a
    };
    var Uv = function(a, b) {
        a.o(b);
        a.j < 100 && (a.j++, b.next = a.g, a.g = b)
    };
    var Vv, Wv = function() {
        var a = y.MessageChannel;
        typeof a === "undefined" && typeof window !== "undefined" && window.postMessage && window.addEventListener && !A("Presto") && (a = function() {
            var e = Bi(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = f.location.protocol == "file:" ? "*" : f.location.protocol + "//" + f.location.host;
            e = bb(function(k) {
                    if ((h == "*" || k.origin == h) && k.data == g) this.port1.onmessage()
                },
                this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if (typeof a !== "undefined") {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (c.next !== void 0) {
                    c = c.next;
                    var e = c.Ce;
                    c.Ce = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Ce: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            y.setTimeout(e, 0)
        }
    };
    var Xv = function() {
        this.j = this.g = null
    };
    Xv.prototype.add = function(a, b) {
        var c = Yv.get();
        c.set(a, b);
        this.j ? this.j.next = c : this.g = c;
        this.j = c
    };
    Xv.prototype.remove = function() {
        var a = null;
        this.g && (a = this.g, this.g = this.g.next, this.g || (this.j = null), a.next = null);
        return a
    };
    var Yv = new Tv(function() {
            return new Zv
        }, function(a) {
            return a.reset()
        }),
        Zv = function() {
            this.next = this.g = this.j = null
        };
    Zv.prototype.set = function(a, b) {
        this.j = a;
        this.g = b;
        this.next = null
    };
    Zv.prototype.reset = function() {
        this.next = this.g = this.j = null
    };
    var $v, aw = !1,
        bw = new Xv,
        dw = function(a, b) {
            $v || cw();
            aw || ($v(), aw = !0);
            bw.add(a, b)
        },
        cw = function() {
            if (y.Promise && y.Promise.resolve) {
                var a = y.Promise.resolve(void 0);
                $v = function() {
                    a.then(ew)
                }
            } else $v = function() {
                var b = ew;
                typeof y.setImmediate !== "function" || y.Window && y.Window.prototype && y.Window.prototype.setImmediate == y.setImmediate ? (Vv || (Vv = Wv()), Vv(b)) : y.setImmediate(b)
            }
        },
        ew = function() {
            for (var a; a = bw.remove();) {
                try {
                    a.j.call(a.g)
                } catch (b) {
                    pb(b)
                }
                Uv(Yv, a)
            }
            aw = !1
        };
    var fw = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var hw = function(a) {
            this.g = 0;
            this.C = void 0;
            this.o = this.j = this.l = null;
            this.A = this.B = !1;
            if (a != eh) try {
                var b = this;
                a.call(void 0, function(c) {
                    gw(b, 2, c)
                }, function(c) {
                    gw(b, 3, c)
                })
            } catch (c) {
                gw(this, 3, c)
            }
        },
        iw = function() {
            this.next = this.context = this.j = this.l = this.g = null;
            this.o = !1
        };
    iw.prototype.reset = function() {
        this.context = this.j = this.l = this.g = null;
        this.o = !1
    };
    var jw = new Tv(function() {
            return new iw
        }, function(a) {
            a.reset()
        }),
        kw = function(a, b, c) {
            var d = jw.get();
            d.l = a;
            d.j = b;
            d.context = c;
            return d
        };
    hw.prototype.then = function(a, b, c) {
        return lw(this, typeof a === "function" ? a : null, typeof b === "function" ? b : null, c)
    };
    hw.prototype.$goog_Thenable = !0;
    hw.prototype.J = function(a, b) {
        return lw(this, null, a, b)
    };
    hw.prototype.catch = hw.prototype.J;
    hw.prototype.cancel = function(a) {
        if (this.g == 0) {
            var b = new mw(a);
            dw(function() {
                nw(this, b)
            }, this)
        }
    };
    var nw = function(a, b) {
            if (a.g == 0)
                if (a.l) {
                    var c = a.l;
                    if (c.j) {
                        for (var d = 0, e = null, f = null, g = c.j; g && (g.o || (d++, g.g == a && (e = g), !(e && d > 1))); g = g.next) e || (f = g);
                        e && (c.g == 0 && d == 1 ? nw(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : ow(c), pw(c, e, 3, b)))
                    }
                    a.l = null
                } else gw(a, 3, b)
        },
        rw = function(a, b) {
            a.j || a.g != 2 && a.g != 3 || qw(a);
            a.o ? a.o.next = b : a.j = b;
            a.o = b
        },
        lw = function(a, b, c, d) {
            var e = kw(null, null, null);
            e.g = new hw(function(f, g) {
                e.l = b ? function(h) {
                    try {
                        var k = b.call(d, h);
                        f(k)
                    } catch (n) {
                        g(n)
                    }
                } : f;
                e.j = c ? function(h) {
                    try {
                        var k = c.call(d,
                            h);
                        k === void 0 && h instanceof mw ? g(h) : f(k)
                    } catch (n) {
                        g(n)
                    }
                } : g
            });
            e.g.l = a;
            rw(a, e);
            return e.g
        };
    hw.prototype.D = function(a) {
        this.g = 0;
        gw(this, 2, a)
    };
    hw.prototype.G = function(a) {
        this.g = 0;
        gw(this, 3, a)
    };
    var gw = function(a, b, c) {
            if (a.g == 0) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.g = 1;
                a: {
                    var d = c,
                        e = a.D,
                        f = a.G;
                    if (d instanceof hw) {
                        rw(d, kw(e || eh, f || null, a));
                        var g = !0
                    } else if (fw(d)) d.then(e, f, a),
                    g = !0;
                    else {
                        if (Ta(d)) try {
                            var h = d.then;
                            if (typeof h === "function") {
                                tw(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (k) {
                            f.call(a, k);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
                g || (a.C = c, a.g = b, a.l = null, qw(a), b != 3 || c instanceof mw || uw(a, c))
            }
        },
        tw = function(a, b, c, d, e) {
            var f = !1,
                g = function(k) {
                    f || (f = !0, c.call(e, k))
                },
                h = function(k) {
                    f || (f = !0, d.call(e,
                        k))
                };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        },
        qw = function(a) {
            a.B || (a.B = !0, dw(a.L, a))
        },
        ow = function(a) {
            var b = null;
            a.j && (b = a.j, a.j = b.next, b.next = null);
            a.j || (a.o = null);
            return b
        };
    hw.prototype.L = function() {
        for (var a; a = ow(this);) pw(this, a, this.g, this.C);
        this.B = !1
    };
    var pw = function(a, b, c, d) {
            if (c == 3 && b.j && !b.o)
                for (; a && a.A; a = a.l) a.A = !1;
            if (b.g) b.g.l = null, vw(b, c, d);
            else try {
                b.o ? b.l.call(b.context) : vw(b, c, d)
            } catch (e) {
                ww.call(null, e)
            }
            Uv(jw, b)
        },
        vw = function(a, b, c) {
            b == 2 ? a.l.call(a.context, c) : a.j && a.j.call(a.context, c)
        },
        uw = function(a, b) {
            a.A = !0;
            dw(function() {
                a.A && ww.call(null, b)
            })
        },
        ww = pb,
        mw = function(a) {
            gb.call(this, a)
        };
    db(mw, gb);
    mw.prototype.name = "cancel";
    var xw = function(a, b) {
        R.call(this);
        this.j = a || 1;
        this.g = b || y;
        this.l = bb(this.qh, this);
        this.A = Date.now()
    };
    db(xw, R);
    l = xw.prototype;
    l.enabled = !1;
    l.Qa = null;
    l.qh = function() {
        if (this.enabled) {
            var a = Date.now() - this.A;
            a > 0 && a < this.j * .8 ? this.Qa = this.g.setTimeout(this.l, this.j - a) : (this.Qa && (this.g.clearTimeout(this.Qa), this.Qa = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
        }
    };
    l.start = function() {
        this.enabled = !0;
        this.Qa || (this.Qa = this.g.setTimeout(this.l, this.j), this.A = Date.now())
    };
    l.stop = function() {
        this.enabled = !1;
        this.Qa && (this.g.clearTimeout(this.Qa), this.Qa = null)
    };
    l.O = function() {
        xw.Ia.O.call(this);
        this.stop();
        delete this.g
    };
    var yw = function(a, b, c) {
            if (typeof a === "function") c && (a = bb(a, c));
            else if (a && typeof a.handleEvent == "function") a = bb(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            return Number(b) > 2147483647 ? -1 : y.setTimeout(a, b || 0)
        },
        zw = function(a, b) {
            var c = null;
            return (new hw(function(d, e) {
                c = yw(function() {
                    d(b)
                }, a);
                c == -1 && e(Error("Failed to schedule timer."))
            })).J(function(d) {
                y.clearTimeout(c);
                throw d;
            })
        };
    var Aw = function() {
        return Math.round(Date.now() / 1E3)
    };
    var Bw = function() {
        this.g = {};
        return this
    };
    Bw.prototype.remove = function(a) {
        var b = this.g;
        a in b && delete b[a]
    };
    Bw.prototype.set = function(a, b) {
        this.g[a] = b
    };
    var Cw = function(a, b) {
        a.g.eb = zh(a.g, "eb", 0) | b
    };
    Bw.prototype.get = function(a) {
        return zh(this.g, a, null)
    };
    var Dw = null,
        Ew = function() {
            this.g = {};
            this.j = 0
        },
        Fw = function() {
            Dw || (Dw = new Ew);
            return Dw
        },
        Gw = function(a, b) {
            a.g[b.getName()] = b
        },
        Hw = function(a, b) {
            this.o = a;
            this.l = !0;
            this.g = b
        };
    Hw.prototype.getName = function() {
        return this.o
    };
    Hw.prototype.getValue = function() {
        return this.g
    };
    Hw.prototype.j = function() {
        return String(this.g)
    };
    var Iw = function(a, b) {
        Hw.call(this, String(a), b);
        this.A = a;
        this.g = !!b
    };
    x(Iw, Hw);
    Iw.prototype.j = function() {
        return this.g ? "1" : "0"
    };
    var Jw = function(a, b) {
        Hw.call(this, a, b)
    };
    x(Jw, Hw);
    Jw.prototype.j = function() {
        return this.g ? Math.round(this.g.top) + "." + Math.round(this.g.left) + "." + (Math.round(this.g.top) + Math.round(this.g.height)) + "." + (Math.round(this.g.left) + Math.round(this.g.width)) : ""
    };
    var Kw = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0]),
                c = Number(a[1]);
            return new Jw("", new Rk(c, b, Number(a[3]) - c, Number(a[2]) - b))
        }
        return new Jw("", new Rk(0, 0, 0, 0))
    };
    var Lw = function(a) {
            var b = new Rk(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new Rk(0, 0, 0, 0);
            if (!a || 0 == a.length) return c;
            for (var d = 0; d < a.length; d++) {
                a: {
                    var e = b;
                    var f = a[d],
                        g = Math.max(e.left, f.left),
                        h = Math.min(e.left + e.width, f.left + f.width);
                    if (g <= h) {
                        var k = Math.max(e.top, f.top);
                        f = Math.min(e.top + e.height, f.top + f.height);
                        if (k <= f) {
                            e.left = g;
                            e.top = k;
                            e.width = h - g;
                            e.height = f - k;
                            e = !0;
                            break a
                        }
                    }
                    e = !1
                }
                if (!e) return c
            }
            return b
        },
        Mw = function(a, b) {
            var c = a.getBoundingClientRect();
            a = sq(a,
                b);
            return new Rk(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        Nw = function(a, b, c) {
            if (b && c) {
                a: {
                    var d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                        var f = Math.max(b.top, c.top),
                            g = Math.min(b.top + b.height, c.top + c.height);
                        if (f <= g) {
                            d = new Rk(d, f, e - d, g - f);
                            break a
                        }
                    }
                    d = null
                }
                e = d ? d.height * d.width : 0;f = d ? b.height * b.width : 0;d = d && f ? Math.round(e / f * 100) : 0;Gw(a, new Hw("vp", d));d && d > 0 ? (e = Sk(b), f = Sk(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;Gw(a, new Iw(512,
                    e));d && d > 0 ? (e = Sk(b), f = Sk(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;Gw(a, new Iw(1024, e));d && d > 0 ? (e = Sk(b), f = Sk(c), e = e.left >= f.left && e.left < f.right) : e = !1;Gw(a, new Iw(2048, e));d && d > 0 ? (b = Sk(b), c = Sk(c), c = b.right <= c.right && b.right > c.left) : c = !1;Gw(a, new Iw(4096, c))
            }
        };
    var Ow = function(a, b) {
        var c = 0;
        sh(Ai(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = Fw();
            a.g = {};
            var e = new Iw(32, !0);
            e.l = !1;
            Gw(a, e);
            e = Ai().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            Gw(a, new Iw(64, e.toLowerCase().substring(e.length - 6) != "hidden" ? !0 : !1));
            a: {
                try {
                    var f = Ai().top;
                    try {
                        var g = !!f.location.href || f.location.href === ""
                    } catch (m) {
                        g = !1
                    }
                    if (g) {
                        var h = qv(d);
                        var k = h && h.length != 0 ? "1" : "0";
                        break a
                    }
                    k = "2";
                    break a
                } catch (m) {
                    k = "2";
                    break a
                }
                k = void 0
            }
            Gw(a, new Iw(256, k == "2"));
            Gw(a, new Iw(128, k == "1"));
            h = g = Ai().top;
            k == "2" && (h = Ai());
            f = Mw(d, h);
            Gw(a, new Jw("er", f));
            try {
                var n = h.document && !h.document.body ? null : yi(h || window)
            } catch (m) {
                n = null
            }
            n ? (h = zi(ui(h.document).g), Gw(a, new Iw(16384, !!h)), n = h ? new Rk(h.x, h.y, n.width, n.height) : null) : n = null;
            Gw(a, new Jw("vi", n));
            if (n && "1" == k) {
                k = qv(d);
                d = [];
                for (h = 0; h < k.length; h++)(e = Mw(k[h], g)) && d.push(e);
                d.push(n);
                n = Lw(d)
            }
            Nw(a, f, n);
            a.j && Gw(a, new Hw("ts", Aw() - a.j));
            a.j = Aw()
        } else a = Fw(), a.g = {}, a.j = Aw(), Gw(a,
            new Iw(32, !1));
        this.l = a;
        this.g = new Bw;
        this.g.set("ve", 4);
        c && Cw(this.g, 1);
        sh(Ai(), "ima", "video", "client", "crossdomainTag") && Cw(this.g, 4);
        sh(Ai(), "ima", "video", "client", "sdkTag") && Cw(this.g, 8);
        sh(Ai(), "ima", "video", "client", "jsTag") && Cw(this.g, 2);
        b && zh(b, "fullscreen", !1) && Cw(this.g, 16);
        this.j = b = null;
        if (c && (c = sh(Ai(), "ima", "video", "client"), c.getEData)) {
            this.j = c.getEData();
            if (c = sh(Ai(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c()) this.j.extendWithDataFromTopIframe(a.tagstamp, a.playstamp,
                    a.lactstamp), c = this.l, b = a.er, a = a.vi, b && a && (b = Kw(b).getValue(), a = Kw(a).getValue(), k = null, zh(c.g, "er", null) && (k = zh(c.g, "er", null).getValue(), k.top += b.top, k.left += b.left, Gw(c, new Jw("er", k))), zh(c.g, "vi", null) && (n = zh(c.g, "vi", null).getValue(), n.top += b.top, n.left += b.left, d = [], d.push(n), d.push(b), d.push(a), b = Lw(d), Nw(c, k, b), Gw(c, new Jw("vi", a))));
            a: {
                if (this.j) {
                    if (this.j.getTagLoadTimestamp) {
                        b = this.j.getTagLoadTimestamp();
                        break a
                    }
                    if (this.j.getTimeSinceTagLoadSeconds) {
                        b = this.j.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        c = this.g;
        a = window.performance && window.performance.timing && window.performance.timing.domLoading && window.performance.timing.domLoading > 0 ? Math.round(window.performance.timing.domLoading / 1E3) : null;
        c.set.call(c, "td", Aw() - (a != null ? a : b != null ? b : Aw()))
    };
    new xw(200);
    var Pw = function(a, b) {
        try {
            var c = new Ow(a, b);
            a = [];
            var d = Number(c.g.get("eb"));
            c.g.remove("eb");
            var e, f = c.g;
            b = [];
            for (var g in f.g) b.push(g + f.g[g]);
            (e = b.join("_")) && a.push(e);
            if (c.j) {
                var h = c.j.serialize();
                h && a.push(h)
            }
            var k, n = c.l;
            e = d;
            f = [];
            e || (e = 0);
            for (var m in n.g) {
                var p = n.g[m];
                if (p instanceof Iw) p.getValue() && (e |= p.A);
                else {
                    var r = n.g[m],
                        t = r.l ? r.j() : "";
                    t && f.push(m + t)
                }
            }
            f.push("eb" + String(e));
            (k = f.join("_")) && a.push(k);
            c.g.set("eb", d);
            return a.join("_")
        } catch (u) {
            return "tle;" + ki(u.name, 12) + ";" + ki(u.message,
                40)
        }
    };
    var Qw = function(a) {
        this.F = B(a)
    };
    x(Qw, H);
    Qw.prototype.getId = function() {
        return D(this, 1)
    };
    var Rw = [0, Ug];
    var Sw = function(a) {
        this.F = B(a)
    };
    x(Sw, H);
    var Tw = [0, Ug, -3];
    var Uw = function(a) {
        this.F = B(a)
    };
    x(Uw, H);
    Uw.prototype.getWidth = function() {
        return Lf(this, 1)
    };
    Uw.prototype.getHeight = function() {
        return Lf(this, 2)
    };
    var Vw = [0, Rg, -1];
    var Ww = function(a) {
        this.F = B(a)
    };
    x(Ww, H);
    var Xw = [0, Og, Tg, Ug, -1];
    var Yw = function(a) {
        this.F = B(a)
    };
    x(Yw, H);
    Yw.prototype.getAdId = function() {
        return D(this, 1)
    };
    Yw.prototype.getSize = function() {
        return Af(this, Uw, 7)
    };
    Yw.prototype.Xb = function() {
        return Af(this, Ww, 9)
    };
    Yw.ba = [4];
    var Zw = [0, Ug, Og, Ug, Vg, Yg, Rw, Vw, Og, Xw, Ug, Tw];
    var $w = function(a) {
        this.F = B(a)
    };
    x($w, H);
    var ax = function(a, b) {
            return Zf(a, 1, b)
        },
        bx = function(a, b) {
            return Tf(a, 4, b)
        },
        cx = function(a, b) {
            return Vf(a, 2, b)
        };
    var dx = function(a) {
        this.F = B(a)
    };
    x(dx, H);
    var ex = function(a, b) {
            return Yf(a, 1, b)
        },
        fx = function(a, b) {
            return Gf(a, 3, Yw, b)
        },
        gx = function(a, b) {
            return Zf(a, 4, b)
        };
    dx.ba = [10, 3];
    var hx = [0, Yg, Rg, Ug, Tg];
    var ix = [0, Ug, Og, Wg, Zw, Yg, hx, Tg, Yg, 2, Vg];
    var jx = function(a) {
        this.F = B(a)
    };
    x(jx, H);
    var kx = function(a) {
        this.F = B(a)
    };
    x(kx, H);
    var lx = function(a, b) {
            return Ff(a, 2, dx, b)
        },
        mx = function(a, b) {
            C(a, 5, b)
        },
        nx = function(a, b) {
            Yf(a, 10, b)
        },
        ox = function(a, b) {
            Yf(a, 11, b)
        };
    kx.ba = [2];
    var px = [0, Yg, Wg, ix, Yg, Ug, hx, Ug, Tg, Rg, [0, Yg, Tg, Og], Ug, -1];
    var qx = function(a) {
        this.F = B(a)
    };
    x(qx, H);
    var rx = function(a) {
        var b = new kx;
        b = Zf(b, 1, 1);
        return Ff(a, 1, kx, b)
    };
    qx.ba = [1];
    qx.prototype.g = $g([0, Wg, px]);
    var sx = function(a) {
        this.F = B(a)
    };
    x(sx, H);
    var tx = function(a) {
        this.F = B(a)
    };
    x(tx, H);
    tx.ba = [3];
    var ux = function(a) {
        this.F = B(a)
    };
    x(ux, H);
    ux.ba = [1];
    var vx = function(a) {
        this.F = B(a)
    };
    x(vx, H);
    var wx = function(a) {
        this.F = B(a)
    };
    x(wx, H);
    wx.ba = [1];
    var xx = function(a) {
        this.F = B(a)
    };
    x(xx, H);
    var yx = function(a) {
        this.F = B(a)
    };
    x(yx, H);
    var zx = ah(yx);
    yx.ba = [1];
    var Ax = function(a) {
        this.F = B(a)
    };
    x(Ax, H);
    var Bx = function(a) {
        var b = new Ax;
        return Zf(b, 1, a)
    };
    var Cx = [0, Yg];
    var Dx = function(a) {
        this.F = B(a)
    };
    x(Dx, H);
    var Ex = function(a) {
            var b = new Dx;
            return Yf(b, 1, a)
        },
        Fx = function(a) {
            var b = window.Date.now();
            b = Number.isFinite(b) ? Math.round(b) : 0;
            return df(a, 3, Zd(b))
        };
    Dx.prototype.getError = function() {
        return Af(this, Ax, 10)
    };
    Dx.prototype.bb = function(a) {
        return C(this, 10, a)
    };
    var Gx = ah(Dx);
    var Hx = [0, Ug, -1, Og, Rg, -2, Og, Ng, Tg, Cx, Tg];
    var Ix = [0, 1, [0, Qg, -2], -1, Ug, -1, Tg, [0, 3, Yg, Ug], Og, Zg, Xg];
    var Jx = function(a) {
        this.F = B(a)
    };
    x(Jx, H);
    Jx.ba = [1, 2];
    Jx.prototype.g = $g([0, Wg, Ix, Wg, Hx]);
    var Kx = function() {
            this.g = Math.random()
        },
        Lx = function() {
            var a = Gj,
                b = window.google_srt;
            b >= 0 && b <= 1 && (a.g = b)
        },
        Jj = function(a, b, c, d, e) {
            if (((d === void 0 ? 0 : d) ? a.g : Math.random()) < (e || .01)) try {
                if (c instanceof xj) var f = c;
                else f = new xj, Wi(c, function(h, k) {
                    var n = f,
                        m = n.o++;
                    Bj(n, m, yj(k, h))
                });
                var g = Ej(f, "https:", "/pagead/gen_204?id=" + b + "&");
                g && Lj(y, g)
            } catch (h) {}
        };
    var Gj, Mx, Fj = new vj(1, window);
    (function(a) {
        Gj = a != null ? a : new Kx;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Lx();
        Mx = new Hj;
        Mx.gd(function() {});
        Mx.ge(!0);
        window.document.readyState == "complete" ? window.google_measure_js_timing || Fj.B() : Fj.l && kh(window, "load", function() {
            window.google_measure_js_timing || Fj.B()
        })
    })();
    var Nx = function(a) {
        this.F = B(a)
    };
    x(Nx, H);
    var Ox = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var Px = function(a) {
        this.F = B(a)
    };
    x(Px, H);
    Px.prototype.getType = function() {
        return Lf(this, 1)
    };
    Px.prototype.getVersion = function() {
        return Lf(this, 2)
    };
    Px.ba = [3];

    function Qx(a) {
        return Sc(a.length % 4 !== 0 ? a + "A" : a).map(function(b) {
            return b.toString(2).padStart(8, "0")
        }).join("")
    }

    function Rx(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    }

    function Sx(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    }

    function Tx(a, b) {
        a = Qx(a);
        return a.length < b ? a.padEnd(b, "0") : a
    };

    function Ux(a, b) {
        var c = a.indexOf("11");
        if (c === -1) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    var Vx = function(a) {
        this.F = B(a)
    };
    x(Vx, H);
    var Wx = function(a) {
        this.F = B(a)
    };
    x(Wx, H);
    var Xx = function(a) {
        this.F = B(a)
    };
    x(Xx, H);
    Xx.prototype.getVersion = function() {
        return Lf(this, 1)
    };
    var Yx = function(a) {
        this.F = B(a)
    };
    x(Yx, H);
    var pA = function(a) {
        this.F = B(a)
    };
    x(pA, H);
    var qA = function(a) {
        var b = new pA;
        return C(b, 1, a)
    };
    var rA = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        sA = 6 + rA.reduce(function(a, b) {
            return a + b
        });
    var tA = function(a) {
        this.F = B(a)
    };
    x(tA, H);
    var uA = function(a) {
        this.F = B(a)
    };
    x(uA, H);
    uA.prototype.getVersion = function() {
        return Lf(this, 1)
    };
    var vA = function(a) {
        this.F = B(a)
    };
    x(vA, H);
    var wA = function(a) {
        this.F = B(a)
    };
    x(wA, H);
    var xA = function(a) {
        var b = new wA;
        return C(b, 1, a)
    };
    var yA = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        zA = 6 + yA.reduce(function(a, b) {
            return a + b
        });
    var AA = function(a) {
        this.F = B(a)
    };
    x(AA, H);
    var BA = function(a) {
        this.F = B(a)
    };
    x(BA, H);
    var CA = function(a) {
        this.F = B(a)
    };
    x(CA, H);
    CA.prototype.getVersion = function() {
        return Lf(this, 1)
    };
    var DA = function(a) {
        this.F = B(a)
    };
    x(DA, H);
    var EA = function(a) {
        this.F = B(a)
    };
    x(EA, H);
    var FA = function(a) {
        var b = new EA;
        return C(b, 1, a)
    };
    var GA = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        HA = 6 + GA.reduce(function(a, b) {
            return a + b
        });
    var IA = function(a) {
        this.F = B(a)
    };
    x(IA, H);
    var JA = function(a) {
        this.F = B(a)
    };
    x(JA, H);
    var KA = function(a) {
        this.F = B(a)
    };
    x(KA, H);
    KA.prototype.getVersion = function() {
        return Lf(this, 1)
    };
    var LA = function(a) {
        this.F = B(a)
    };
    x(LA, H);
    var MA = function(a) {
        this.F = B(a)
    };
    x(MA, H);
    var NA = function(a) {
        var b = new MA;
        return C(b, 1, a)
    };
    var OA = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        PA = 6 + OA.reduce(function(a, b) {
            return a + b
        });
    var QA = function(a) {
        this.F = B(a)
    };
    x(QA, H);
    var RA = function(a) {
        this.F = B(a)
    };
    x(RA, H);
    RA.prototype.getVersion = function() {
        return Lf(this, 1)
    };
    var SA = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        TA = 6 + SA.reduce(function(a, b) {
            return a + b
        });
    var UA = function(a) {
        this.F = B(a)
    };
    x(UA, H);
    UA.ba = [3];
    var VA = function(a) {
        this.F = B(a)
    };
    x(VA, H);
    var WA = function(a, b) {
            return of(a, 1, b, Td)
        },
        XA = function(a, b) {
            return of(a, 2, b, Td)
        },
        YA = function(a, b) {
            return of(a, 3, b, Wd)
        },
        ZA = function(a, b) { of (a, 4, b, Wd)
        };
    VA.ba = [1, 2, 3, 4];
    var $A = function(a) {
        this.F = B(a)
    };
    x($A, H);
    var aB = function(a) {
        this.F = B(a)
    };
    x(aB, H);
    aB.prototype.getVersion = function() {
        return Lf(this, 1)
    };
    var bB = function(a, b) {
            return Wf(a, 1, b)
        },
        cB = function(a, b) {
            return C(a, 2, b)
        },
        dB = function(a, b) {
            return C(a, 3, b)
        },
        eB = function(a, b) {
            return Wf(a, 4, b)
        },
        fB = function(a, b) {
            return Wf(a, 5, b)
        },
        gB = function(a, b) {
            return Wf(a, 6, b)
        },
        hB = function(a, b) {
            return pf(a, 7, ge(b), "")
        },
        iB = function(a, b) {
            return Wf(a, 8, b)
        },
        jB = function(a, b) {
            return Wf(a, 9, b)
        },
        kB = function(a, b) {
            return Uf(a, 10, b)
        },
        lB = function(a, b) {
            return Uf(a, 11, b)
        },
        mB = function(a, b) {
            return of(a, 12, b, Td)
        },
        nB = function(a, b) {
            return of(a, 13, b, Td)
        },
        oB = function(a, b) {
            return of(a,
                14, b, Td)
        },
        pB = function(a, b) {
            return Uf(a, 15, b)
        },
        qB = function(a, b) {
            return pf(a, 16, ge(b), "")
        },
        rB = function(a, b) {
            return of(a, 17, b, Wd)
        },
        sB = function(a, b) {
            return of(a, 18, b, Wd)
        },
        tB = function(a, b) {
            return Ef(a, 19, b)
        };
    aB.ba = [12, 13, 14, 17, 18, 19];
    var uB = function(a) {
        this.F = B(a)
    };
    x(uB, H);
    var vB = "a".charCodeAt(),
        wB = qh({
            ri: 0,
            pi: 1,
            ki: 2,
            ei: 3,
            li: 4,
            fi: 5,
            mi: 6,
            hi: 7,
            ji: 8,
            di: 9,
            gi: 10,
            si: 11
        }),
        xB = qh({
            wi: 0,
            xi: 1,
            ti: 2
        });
    var yB = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.j = a;
            this.g = 0
        },
        AB = function(a) {
            a = zB(a, 36);
            var b = new $A;
            b = Xf(b, 1, Math.floor(a / 10));
            return Wf(b, 2, a % 10 * 1E8)
        },
        BB = function(a) {
            return String.fromCharCode(vB + zB(a, 6)) + String.fromCharCode(vB + zB(a, 6))
        },
        EB = function(a) {
            var b = zB(a, 16);
            return !!zB(a, 1) === !0 ? (a = CB(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : DB(a, b)
        },
        FB = function(a) {
            for (var b = [], c = zB(a, 12); c--;) {
                var d = zB(a, 6),
                    e =
                    zB(a, 2),
                    f = CB(a),
                    g = b,
                    h = g.push,
                    k = new UA;
                d = G(k, 1, d);
                e = G(d, 2, e);
                f = of (e, 3, f, Wd);
                h.call(g, f)
            }
            return b
        },
        CB = function(a) {
            for (var b = zB(a, 12), c = []; b--;) {
                var d = !!zB(a, 1) === !0,
                    e = zB(a, 16);
                if (d)
                    for (d = zB(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        DB = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (zB(a, 1)) {
                    var f = e + 1;
                    if (c && c.indexOf(f) === -1) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        zB = function(a, b) {
            if (a.g + b > a.j.length) throw Error("Requested length " +
                b + " is past end of string.");
            var c = a.j.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    yB.prototype.skip = function(a) {
        this.g += a
    };
    var GB = function(a) {
        try {
            var b = Sc(a).map(function(f) {
                    return f.toString(2).padStart(8, "0")
                }).join(""),
                c = new yB(b);
            if (zB(c, 3) !== 3) return null;
            var d = XA(WA(new VA, DB(c, 24, wB)), DB(c, 24, wB)),
                e = zB(c, 6);
            e !== 0 && ZA(YA(d, DB(c, e)), DB(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var HB = function(a) {
        try {
            var b = Sc(a).map(function(d) {
                    return d.toString(2).padStart(8, "0")
                }).join(""),
                c = new yB(b);
            return tB(sB(rB(qB(pB(oB(nB(mB(lB(kB(jB(iB(hB(gB(fB(eB(dB(cB(bB(new aB, zB(c, 6)), AB(c)), AB(c)), zB(c, 12)), zB(c, 12)), zB(c, 6)), BB(c)), zB(c, 12)), zB(c, 6)), !!zB(c, 1)), !!zB(c, 1)), DB(c, 12, xB)), DB(c, 24, wB)), DB(c, 24, wB)), !!zB(c, 1)), BB(c)), EB(c)), EB(c)), FB(c))
        } catch (d) {
            return null
        }
    };
    var JB = function(a) {
            if (!a) return null;
            var b = a.split(".");
            if (b.length > 4) return null;
            a = HB(b[0]);
            if (!a) return null;
            var c = new uB;
            a = C(c, 1, a);
            b.shift();
            b = v(b);
            for (c = b.next(); !c.done; c = b.next()) switch (c = c.value, IB(c)) {
                case 1:
                case 2:
                    break;
                case 3:
                    c = GB(c);
                    if (!c) return null;
                    C(a, 2, c);
                    break;
                default:
                    return null
            }
            return a
        },
        IB = function(a) {
            try {
                var b = Sc(a).map(function(c) {
                    return c.toString(2).padStart(8, "0")
                }).join("");
                return zB(new yB(b), 3)
            } catch (c) {
                return -1
            }
        };
    var LB = function(a, b) {
            var c = JB(a);
            if (!c || !a) return null;
            var d = Af(c, aB, 1),
                e = Af(c, VA, 2) || new VA;
            c = Lf(d, 9);
            var f = Lf(d, 4),
                g = Lf(d, 5),
                h = Kf(d, 10),
                k = Kf(d, 11),
                n = D(d, 16),
                m = Kf(d, 15);
            var p = ff(d, 13, Vd, ef());
            p = KB(p, wB);
            var r = ff(d, 14, Vd, ef());
            p = {
                consents: p,
                legitimateInterests: KB(r, wB)
            };
            r = Qf(d, 17);
            r = KB(r);
            var t = Qf(d, 18);
            r = {
                consents: r,
                legitimateInterests: KB(t)
            };
            t = ff(d, 12, Vd, ef());
            t = KB(t, xB);
            var u = Cf(d, UA, 19, ef());
            d = {};
            u = v(u);
            for (var w = u.next(); !w.done; w = u.next()) {
                w = w.value;
                var E = F(w, 1);
                d[E] = d[E] || {};
                for (var Y = v(Qf(w,
                        3)), V = Y.next(); !V.done; V = Y.next()) d[E][V.value] = F(w, 2)
            }
            u = ff(e, 1, Vd, ef());
            u = KB(u, wB);
            w = ff(e, 2, Vd, ef());
            w = KB(w, wB);
            E = Qf(e, 3);
            E = KB(E);
            e = Qf(e, 4);
            return {
                tcString: a,
                tcfPolicyVersion: c,
                gdprApplies: b,
                cmpId: f,
                cmpVersion: g,
                isServiceSpecific: h,
                useNonStandardStacks: k,
                publisherCC: n,
                purposeOneTreatment: m,
                purpose: p,
                vendor: r,
                specialFeatureOptins: t,
                publisher: {
                    restrictions: d,
                    consents: u,
                    legitimateInterests: w,
                    customPurposes: {
                        consents: E,
                        legitimateInterests: KB(e)
                    }
                }
            }
        },
        KB = function(a, b) {
            var c = {};
            if (Array.isArray(b) && b.length !==
                0) {
                b = v(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = a.indexOf(d) !== -1
            } else
                for (a = v(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
            delete c[0];
            return c
        };
    var MB = function(a) {
        this.g = a;
        this.defaultValue = !1
    };
    var NB = new MB(45641707),
        OB = new MB(45642592),
        PB = new MB(635466687);
    var QB = function(a) {
        this.F = B(a)
    };
    x(QB, H);
    var RB = function(a) {
        var b = new QB;
        qf(b, 1, Td, a)
    };
    QB.ba = [1];
    var SB = /^((market|itms|intent|itms-appss):\/\/)/i;
    var TB = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var UB = function(a) {
        var b = a.ub;
        var c = a.fb;
        var d = a.height;
        var e = a.width;
        a = a.Ga === void 0 ? !1 : a.Ga;
        this.ub = b;
        this.fb = c;
        this.height = d;
        this.width = e;
        this.Ga = a
    };
    UB.prototype.getHeight = function() {
        return this.height
    };
    UB.prototype.getWidth = function() {
        return this.width
    };
    var VB = function(a) {
        var b = a.Ah;
        var c = a.cg;
        var d = a.ub;
        var e = a.fb;
        var f = a.zh;
        var g = a.bg;
        UB.call(this, {
            ub: d,
            fb: e,
            height: a.height,
            width: a.width,
            Ga: a.Ga === void 0 ? !1 : a.Ga
        });
        this.o = b;
        this.j = c;
        this.l = f;
        this.g = g
    };
    x(VB, UB);
    var WB = function(a) {
        var b = a.Pg;
        UB.call(this, {
            ub: a.ub,
            fb: a.fb,
            height: a.height,
            width: a.width,
            Ga: a.Ga === void 0 ? !1 : a.Ga
        });
        this.g = b
    };
    x(WB, UB);
    WB.prototype.getMediaUrl = function() {
        return this.g
    };

    function XB(a) {
        return new(Function.prototype.bind.apply(a, [null].concat(ia(Ja.apply(1, arguments)))))
    };
    var YB = function(a, b, c, d) {
        Q.call(this);
        this.G = b;
        this.D = c;
        this.C = d;
        this.A = new Map;
        this.I = 0;
        this.o = new Map;
        this.B = new Map;
        this.l = void 0;
        this.j = a
    };
    x(YB, Q);
    YB.prototype.O = function() {
        delete this.g;
        this.A.clear();
        this.o.clear();
        this.B.clear();
        this.l && (lh(this.j, "message", this.l), delete this.l);
        delete this.j;
        delete this.C;
        Q.prototype.O.call(this)
    };
    var ZB = function(a) {
            if (a.g) return a.g;
            a.D && a.D(a.j) ? a.g = a.j : a.g = bj(a.j, a.G);
            var b;
            return (b = a.g) != null ? b : null
        },
        aC = function(a, b, c) {
            if (ZB(a))
                if (a.g === a.j)(b = a.A.get(b)) && b(a.g, c);
                else {
                    var d = a.o.get(b);
                    if (d && d.Pc) {
                        $B(a);
                        var e = ++a.I;
                        a.B.set(e, {
                            fc: d.fc,
                            lg: d.Nd(c),
                            bh: b === "addEventListener"
                        });
                        a.g.postMessage(d.Pc(c, e), "*")
                    }
                }
        },
        $B = function(a) {
            a.l || (a.l = function(b) {
                    try {
                        var c = a.C ? a.C(b) : void 0;
                        if (c) {
                            var d = c.Ve,
                                e = a.B.get(d);
                            if (e) {
                                e.bh || a.B.delete(d);
                                var f;
                                (f = e.fc) == null || f.call(e, e.lg, c.payload)
                            }
                        }
                    } catch (g) {}
                },
                kh(a.j, "message", a.l))
        };
    var bC = function(a) {
            a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
            a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
            return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
        },
        cC = function(a, b) {
            b = b === void 0 ? {} : b;
            Q.call(this);
            this.j = a;
            this.g = null;
            this.B = {};
            this.C = 0;
            var c;
            this.o = (c = b.timeoutMs) != null ? c : 500;
            var d;
            this.A = (d = b.fj) != null ? d : !1;
            this.l =
                null
        };
    x(cC, Q);
    cC.prototype.O = function() {
        this.B = {};
        this.l && (lh(this.j, "message", this.l), delete this.l);
        delete this.B;
        delete this.j;
        delete this.g;
        Q.prototype.O.call(this)
    };
    var eC = function(a) {
            return typeof a.j.__tcfapi === "function" || dC(a) != null
        },
        hC = function(a, b) {
            var c = {
                    internalErrorState: 0,
                    internalBlockOnErrors: a.A
                },
                d = gh(function() {
                    return b(c)
                }),
                e = 0;
            a.o !== -1 && (e = setTimeout(function() {
                e = 0;
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.o));
            fC(a, "addEventListener", function(f) {
                f && (c = f, c.internalErrorState = bC(c), c.internalBlockOnErrors = a.A, gC(c) ? (c.internalErrorState != 0 && (c.tcString = "tcunavailable"), fC(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f),
                    d()) : (c.cmpStatus === "error" || c.internalErrorState !== 0) && (f = e) && clearTimeout(f))
            })
        };
    cC.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.A
            },
            d = gh(function() {
                return a(c)
            }),
            e = 0;
        this.o !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = bC(c), c.internalBlockOnErrors = b.A, h && c.internalErrorState === 0 || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            fC(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    cC.prototype.removeEventListener = function(a) {
        a && a.listenerId && fC(this, "removeEventListener", null, a.listenerId)
    };
    var jC = function(a, b, c) {
            var d = d === void 0 ? "755" : d;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var e = a.publisher.restrictions[b];
                    if (e !== void 0) {
                        e = e[d === void 0 ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            if (e === 0) return !1;
            var f = c;
            c === 2 ? (f = 0, e === 2 && (f = 1)) : c === 3 && (f = 1, e === 1 && (f = 0));
            a = f === 0 ? a.purpose && a.vendor ? (c = iC(a.vendor.consents, d === void 0 ? "755" : d)) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && iC(a.purpose.consents, b) : !0 : f === 1 ? a.purpose && a.vendor ? iC(a.purpose.legitimateInterests, b) && iC(a.vendor.legitimateInterests,
                d === void 0 ? "755" : d) : !0 : !0;
            return a
        },
        iC = function(a, b) {
            return !(!a || !a[b])
        },
        fC = function(a, b, c, d) {
            c || (c = function() {});
            if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
            else if (dC(a)) {
                kC(a);
                var e = ++a.C;
                a.B[e] = c;
                a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        dC = function(a) {
            if (a.g) return a.g;
            a.g = bj(a.j, "__tcfapiLocator");
            return a.g
        },
        kC = function(a) {
            a.l || (a.l = function(b) {
                try {
                    var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.B[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, kh(a.j, "message", a.l))
        },
        gC = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = bC(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (Nj({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        },
        lC = function(a, b, c) {
            return a.gdprApplies === !1 ? !0 : b.every(function(d) {
                return jC(a, d, c)
            })
        };
    var mC = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        nC = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        oC = {
            Nd: function(a) {
                return a.listener
            },
            Pc: function(a, b) {
                a = {};
                return a.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, a
            },
            fc: function(a, b) {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        pC = {
            Nd: function(a) {
                return a.listener
            },
            Pc: function(a, b) {
                var c = {};
                return c.__gppCall = {
                        callId: b,
                        command: "removeEventListener",
                        version: "1.1",
                        parameter: a.listenerId
                    },
                    c
            },
            fc: function(a, b) {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                a == null || a(c, b.success)
            }
        };

    function qC(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Ve: b.__gppReturn.callId
        }
    }
    var rC = function(a, b) {
        var c = b === void 0 ? {} : b;
        b = c.timeoutMs;
        c = c.cmpInteractionEventReporter;
        Q.call(this);
        this.caller = new YB(a, "__gppLocator", function(d) {
            return typeof d.__gpp === "function"
        }, qC);
        this.caller.A.set("addEventListener", mC);
        this.caller.o.set("addEventListener", oC);
        this.caller.A.set("removeEventListener", nC);
        this.caller.o.set("removeEventListener", pC);
        this.timeoutMs = b != null ? b : 500;
        this.cmpInteractionEventReporter = c
    };
    x(rC, Q);
    rC.prototype.O = function() {
        this.caller.dispose();
        Q.prototype.O.call(this)
    };
    rC.prototype.addEventListener = function(a) {
        var b = this,
            c = gh(function() {
                a(sC, !0)
            }),
            d = this.timeoutMs === -1 ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        aC(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var g;
                    if (((g = e.pingData) == null ? void 0 : g.gppVersion) === void 0 || e.pingData.gppVersion === "1" || e.pingData.gppVersion === "1.0") {
                        b.removeEventListener(e.listenerId);
                        var h = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 1,
                                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                applicableSections: [-1]
                            }
                        }
                    } else Array.isArray(e.pingData.applicableSections) ? h = e : (b.removeEventListener(e.listenerId), h = {
                        eventName: "signalStatus",
                        data: "ready",
                        pingData: {
                            internalErrorState: 2,
                            gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                            applicableSections: [-1]
                        }
                    });
                    a(h, f);
                    var k;
                    (k = b.cmpInteractionEventReporter) == null || k.g()
                } catch (n) {
                    if (e == null ? 0 : e.listenerId) try {
                        b.removeEventListener(e.listenerId)
                    } catch (m) {
                        a(tC, !0);
                        return
                    }
                    a(uC, !0)
                }
            }
        })
    };
    rC.prototype.removeEventListener = function(a) {
        aC(this.caller, "removeEventListener", {
            listener: function() {},
            listenerId: a
        })
    };
    var vC = function(a, b) {
            var c = c === void 0 ? !1 : c;
            if (!a) return !1;
            var d = Qx(a.split("~")[0]),
                e = Rx(d.slice(0, 6)),
                f = Rx(d.slice(6, 12)),
                g = new Px;
            var h = Wf(g, 1, e);
            var k = Wf(h, 2, f);
            for (var n = d.slice(12), m = Rx(n.slice(0, 12)), p = [], r = n.slice(12).replace(/0+$/, ""), t = 0; t < m; t++) {
                if (r.length === 0) throw Error("Found " + t + " of " + m + " sections [" + p + "] but reached end of input [" + n + "]");
                var u = Rx(r[0]) === 0;
                r = r.slice(1);
                var w = Ux(r, n),
                    E = p.length === 0 ? 0 : p[p.length - 1],
                    Y = Sx(w) + E;
                r = r.slice(w.length);
                if (u) p.push(Y);
                else {
                    for (var V = Ux(r, n),
                            da = Sx(V), Va = 0; Va <= da; Va++) p.push(Y + Va);
                    r = r.slice(V.length)
                }
            }
            if (r.length > 0) throw Error("Found " + m + " sections [" + p + "] but has remaining input [" + r + "], entire input [" + n + "]");
            var za = of (k, 3, p, Wd);
            var Kb = a.includes("~") ? a.split("~").slice(1) : [];
            var Vb = Qf(za, 3);
            for (var fb = 0; fb < Vb.length; ++fb) {
                var Jc = Vb[fb];
                if (b.includes(Jc)) {
                    var P = Kb[fb];
                    switch (Jc) {
                        case 2:
                            if (c) {
                                var Ea = LB(P, !0);
                                if (!Ea) throw Error("Cannot decode TCF V2 section string.");
                                if (!lC(Ea, ["3", "4"], 0)) return !0
                            }
                            break;
                        case 7:
                            if (P.length === 0) throw Error("Cannot decode empty USNat section string.");
                            var Wb = P.split(".");
                            if (Wb.length > 2) throw Error("Expected at most 2 segments but got " + Wb.length + " when decoding " + P + ".");
                            var cd = void 0,
                                ie = void 0,
                                je = void 0,
                                Xe = void 0,
                                qb = void 0,
                                Th = void 0,
                                Uh = void 0,
                                Vh = void 0,
                                Wh = void 0,
                                Zx = void 0,
                                $x = void 0,
                                ay = void 0,
                                by = void 0,
                                cy = void 0,
                                dy = void 0,
                                ey = void 0,
                                fy = void 0,
                                gy = void 0,
                                hy = void 0,
                                iy = void 0,
                                jy = void 0,
                                ky = void 0,
                                ly = void 0,
                                my = void 0,
                                ny = void 0,
                                oy = void 0,
                                py = void 0,
                                qy = void 0,
                                ry = void 0,
                                sy = void 0,
                                ty = Wb[0];
                            if (ty.length === 0) throw Error("Cannot decode empty core segment string.");
                            var Vk = Tx(ty, PA),
                                Fp = Rx(Vk.slice(0, 6));
                            Vk = Vk.slice(6);
                            if (Fp !== 1) throw Error("Unable to decode unsupported USNat Section specification version " + Fp + " - only version 1 is supported.");
                            for (var Gp = 0, sa = [], Hp = 0; Hp < OA.length; Hp++) {
                                var uy = OA[Hp];
                                sa.push(Rx(Vk.slice(Gp, Gp + uy)));
                                Gp += uy
                            }
                            var tK = new KA;
                            sy = Wf(tK, 1, Fp);
                            var uK = sa.shift();
                            ry = G(sy, 2, uK);
                            var vK = sa.shift();
                            qy = G(ry, 3, vK);
                            var wK = sa.shift();
                            py = G(qy, 4, wK);
                            var xK = sa.shift();
                            oy = G(py, 5, xK);
                            var yK = sa.shift();
                            ny = G(oy, 6, yK);
                            var zK = sa.shift();
                            my = G(ny, 7, zK);
                            var AK =
                                sa.shift();
                            ly = G(my, 8, AK);
                            var BK = sa.shift();
                            ky = G(ly, 9, BK);
                            var CK = sa.shift();
                            jy = G(ky, 10, CK);
                            var DK = new JA,
                                EK = sa.shift();
                            iy = G(DK, 1, EK);
                            var FK = sa.shift();
                            hy = G(iy, 2, FK);
                            var GK = sa.shift();
                            gy = G(hy, 3, GK);
                            var HK = sa.shift();
                            fy = G(gy, 4, HK);
                            var IK = sa.shift();
                            ey = G(fy, 5, IK);
                            var JK = sa.shift();
                            dy = G(ey, 6, JK);
                            var KK = sa.shift();
                            cy = G(dy, 7, KK);
                            var LK = sa.shift();
                            by = G(cy, 8, LK);
                            var MK = sa.shift();
                            ay = G(by, 9, MK);
                            var NK = sa.shift();
                            $x = G(ay, 10, NK);
                            var OK = sa.shift();
                            Zx = G($x, 11, OK);
                            var PK = sa.shift();
                            Wh = G(Zx, 12, PK);
                            Vh = C(jy, 11, Wh);
                            var QK = new IA,
                                RK = sa.shift();
                            Uh = G(QK, 1, RK);
                            var SK = sa.shift();
                            Th = G(Uh, 2, SK);
                            qb = C(Vh, 12, Th);
                            var TK = sa.shift();
                            Xe = G(qb, 13, TK);
                            var UK = sa.shift();
                            je = G(Xe, 14, UK);
                            var VK = sa.shift();
                            ie = G(je, 15, VK);
                            var WK = sa.shift();
                            var vy = cd = G(ie, 16, WK);
                            if (Wb.length === 1) var wy = NA(vy);
                            else {
                                var XK = NA(vy),
                                    yy = void 0,
                                    zy = void 0,
                                    Ay = void 0,
                                    By = Wb[1];
                                if (By.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                var Cy = Tx(By, 3),
                                    Wk = Rx(Cy.slice(0, 2));
                                if (Wk < 0 || Wk > 1) throw Error("Attempting to decode unknown GPC segment subsection type " +
                                    Wk + ".");
                                Ay = Wk + 1;
                                var YK = Rx(Cy.slice(2, 3)),
                                    ZK = new LA;
                                zy = G(ZK, 2, Ay);
                                yy = Uf(zy, 1, !!YK);
                                wy = C(XK, 2, yy)
                            }
                            var Ip = Af(wy, KA, 1);
                            if (F(Ip, 8) === 1 || F(Ip, 9) === 1 || F(Ip, 10) === 1) return !0;
                            break;
                        case 8:
                            if (P.length === 0) throw Error("Cannot decode empty USCA section string.");
                            var Xh = P.split(".");
                            if (Xh.length > 2) throw Error("Expected at most 1 sub-section but got " + (Xh.length - 1) + " when decoding " + P + ".");
                            var $K = void 0,
                                Dy = void 0,
                                Ey = void 0,
                                Fy = void 0,
                                Gy = void 0,
                                Hy = void 0,
                                Iy = void 0,
                                Jy = void 0,
                                Ky = void 0,
                                Ly = void 0,
                                My = void 0,
                                Ny = void 0,
                                Oy = void 0,
                                Py = void 0,
                                Qy = void 0,
                                Ry = void 0,
                                Sy = void 0,
                                Ty = void 0,
                                Uy = void 0,
                                Vy = void 0,
                                Wy = void 0,
                                Xy = void 0,
                                Yy = void 0,
                                Zy = Xh[0];
                            if (Zy.length === 0) throw Error("Cannot decode empty core segment string.");
                            var Xk = Tx(Zy, sA),
                                Jp = Rx(Xk.slice(0, 6));
                            Xk = Xk.slice(6);
                            if (Jp !== 1) throw Error("Unable to decode unsupported USCA Section specification version " + Jp + " - only version 1 is supported.");
                            for (var Kp = 0, Na = [], Lp = 0; Lp < rA.length; Lp++) {
                                var $y = rA[Lp];
                                Na.push(Rx(Xk.slice(Kp, Kp + $y)));
                                Kp += $y
                            }
                            var aL = new Xx;
                            Yy = Wf(aL, 1, Jp);
                            var bL =
                                Na.shift();
                            Xy = G(Yy, 2, bL);
                            var cL = Na.shift();
                            Wy = G(Xy, 3, cL);
                            var dL = Na.shift();
                            Vy = G(Wy, 4, dL);
                            var eL = Na.shift();
                            Uy = G(Vy, 5, eL);
                            var fL = Na.shift();
                            Ty = G(Uy, 6, fL);
                            var gL = new Wx,
                                hL = Na.shift();
                            Sy = G(gL, 1, hL);
                            var iL = Na.shift();
                            Ry = G(Sy, 2, iL);
                            var jL = Na.shift();
                            Qy = G(Ry, 3, jL);
                            var kL = Na.shift();
                            Py = G(Qy, 4, kL);
                            var lL = Na.shift();
                            Oy = G(Py, 5, lL);
                            var mL = Na.shift();
                            Ny = G(Oy, 6, mL);
                            var nL = Na.shift();
                            My = G(Ny, 7, nL);
                            var oL = Na.shift();
                            Ly = G(My, 8, oL);
                            var pL = Na.shift();
                            Ky = G(Ly, 9, pL);
                            Jy = C(Ty, 7, Ky);
                            var qL = new Vx,
                                rL = Na.shift();
                            Iy = G(qL,
                                1, rL);
                            var sL = Na.shift();
                            Hy = G(Iy, 2, sL);
                            Gy = C(Jy, 8, Hy);
                            var tL = Na.shift();
                            Fy = G(Gy, 9, tL);
                            var uL = Na.shift();
                            Ey = G(Fy, 10, uL);
                            var vL = Na.shift();
                            Dy = G(Ey, 11, vL);
                            var wL = Na.shift();
                            var az = $K = G(Dy, 12, wL);
                            if (Xh.length === 1) var bz = qA(az);
                            else {
                                var xL = qA(az),
                                    cz = void 0,
                                    dz = void 0,
                                    ez = void 0,
                                    fz = Xh[1];
                                if (fz.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                var gz = Tx(fz, 3),
                                    Yk = Rx(gz.slice(0, 2));
                                if (Yk < 0 || Yk > 1) throw Error("Attempting to decode unknown GPC segment subsection type " + Yk + ".");
                                ez = Yk + 1;
                                var yL = Rx(gz.slice(2,
                                        3)),
                                    zL = new Yx;
                                dz = G(zL, 2, ez);
                                cz = Uf(dz, 1, !!yL);
                                bz = C(xL, 2, cz)
                            }
                            var hz = Af(bz, Xx, 1);
                            if (F(hz, 5) === 1 || F(hz, 6) === 1) return !0;
                            break;
                        case 9:
                            if (P.length === 0) throw Error("Cannot decode empty USVA section string.");
                            var Zk = Tx(P, TA),
                                Mp = Rx(Zk.slice(0, 6));
                            Zk = Zk.slice(6);
                            if (Mp !== 1) throw Error("Unable to decode unsupported USVA Section specification version " + Mp + " - only version 1 is supported.");
                            for (var Np = 0, jb = [], Op = 0; Op < SA.length; Op++) {
                                var iz = SA[Op];
                                jb.push(Rx(Zk.slice(Np, Np + iz)));
                                Np += iz
                            }
                            var AL = Mp,
                                BL = new RA,
                                CL = Wf(BL,
                                    1, AL),
                                DL = jb.shift(),
                                EL = G(CL, 2, DL),
                                FL = jb.shift(),
                                GL = G(EL, 3, FL),
                                HL = jb.shift(),
                                IL = G(GL, 4, HL),
                                JL = jb.shift(),
                                KL = G(IL, 5, JL),
                                LL = jb.shift();
                            var ML = G(KL, 6, LL);
                            var NL = new QA,
                                OL = jb.shift(),
                                PL = G(NL, 1, OL),
                                QL = jb.shift(),
                                RL = G(PL, 2, QL),
                                SL = jb.shift(),
                                TL = G(RL, 3, SL),
                                UL = jb.shift(),
                                VL = G(TL, 4, UL),
                                WL = jb.shift(),
                                XL = G(VL, 5, WL),
                                YL = jb.shift(),
                                ZL = G(XL, 6, YL),
                                $L = jb.shift(),
                                aM = G(ZL, 7, $L),
                                bM = jb.shift();
                            var cM = G(aM, 8, bM);
                            var dM = C(ML, 7, cM),
                                eM = jb.shift(),
                                fM = G(dM, 8, eM),
                                gM = jb.shift(),
                                hM = G(fM, 9, gM),
                                iM = jb.shift(),
                                jM = G(hM, 10, iM),
                                kM = jb.shift(),
                                jz = G(jM, 11, kM);
                            if (F(jz, 5) === 1 || F(jz, 6) === 1) return !0;
                            break;
                        case 10:
                            if (P.length === 0) throw Error("Cannot decode empty USCO section string.");
                            var Yh = P.split(".");
                            if (Yh.length > 2) throw Error("Expected at most 2 segments but got " + Yh.length + " when decoding " + P + ".");
                            var lM = void 0,
                                kz = void 0,
                                lz = void 0,
                                mz = void 0,
                                nz = void 0,
                                oz = void 0,
                                pz = void 0,
                                qz = void 0,
                                rz = void 0,
                                sz = void 0,
                                tz = void 0,
                                uz = void 0,
                                vz = void 0,
                                wz = void 0,
                                xz = void 0,
                                yz = void 0,
                                zz = void 0,
                                Az = void 0,
                                Bz = Yh[0];
                            if (Bz.length === 0) throw Error("Cannot decode empty core segment string.");
                            var $k = Tx(Bz, zA),
                                Pp = Rx($k.slice(0, 6));
                            $k = $k.slice(6);
                            if (Pp !== 1) throw Error("Unable to decode unsupported USCO Section specification version " + Pp + " - only version 1 is supported.");
                            for (var Qp = 0, rb = [], Rp = 0; Rp < yA.length; Rp++) {
                                var Cz = yA[Rp];
                                rb.push(Rx($k.slice(Qp, Qp + Cz)));
                                Qp += Cz
                            }
                            var mM = new uA;
                            Az = Wf(mM, 1, Pp);
                            var nM = rb.shift();
                            zz = G(Az, 2, nM);
                            var oM = rb.shift();
                            yz = G(zz, 3, oM);
                            var pM = rb.shift();
                            xz = G(yz, 4, pM);
                            var qM = rb.shift();
                            wz = G(xz, 5, qM);
                            var rM = rb.shift();
                            vz = G(wz, 6, rM);
                            var sM = new tA,
                                tM = rb.shift();
                            uz = G(sM,
                                1, tM);
                            var uM = rb.shift();
                            tz = G(uz, 2, uM);
                            var vM = rb.shift();
                            sz = G(tz, 3, vM);
                            var wM = rb.shift();
                            rz = G(sz, 4, wM);
                            var xM = rb.shift();
                            qz = G(rz, 5, xM);
                            var yM = rb.shift();
                            pz = G(qz, 6, yM);
                            var zM = rb.shift();
                            oz = G(pz, 7, zM);
                            nz = C(vz, 7, oz);
                            var AM = rb.shift();
                            mz = G(nz, 8, AM);
                            var BM = rb.shift();
                            lz = G(mz, 9, BM);
                            var CM = rb.shift();
                            kz = G(lz, 10, CM);
                            var DM = rb.shift();
                            var Dz = lM = G(kz, 11, DM);
                            if (Yh.length === 1) var Ez = xA(Dz);
                            else {
                                var EM = xA(Dz),
                                    Fz = void 0,
                                    Gz = void 0,
                                    Hz = void 0,
                                    Iz = Yh[1];
                                if (Iz.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                var Jz = Tx(Iz, 3),
                                    al = Rx(Jz.slice(0, 2));
                                if (al < 0 || al > 1) throw Error("Attempting to decode unknown GPC segment subsection type " + al + ".");
                                Hz = al + 1;
                                var FM = Rx(Jz.slice(2, 3)),
                                    GM = new vA;
                                Gz = G(GM, 2, Hz);
                                Fz = Uf(Gz, 1, !!FM);
                                Ez = C(EM, 2, Fz)
                            }
                            var Kz = Af(Ez, uA, 1);
                            if (F(Kz, 5) === 1 || F(Kz, 6) === 1) return !0;
                            break;
                        case 12:
                            if (P.length === 0) throw Error("Cannot decode empty usct section string.");
                            var Zh = P.split(".");
                            if (Zh.length > 2) throw Error("Expected at most 2 segments but got " + Zh.length + " when decoding " + P + ".");
                            var HM = void 0,
                                Lz = void 0,
                                Mz = void 0,
                                Nz = void 0,
                                Oz = void 0,
                                Pz = void 0,
                                Qz = void 0,
                                Rz = void 0,
                                Sz = void 0,
                                Tz = void 0,
                                Uz = void 0,
                                Vz = void 0,
                                Wz = void 0,
                                Xz = void 0,
                                Yz = void 0,
                                Zz = void 0,
                                $z = void 0,
                                aA = void 0,
                                bA = void 0,
                                cA = void 0,
                                dA = void 0,
                                eA = void 0,
                                fA = Zh[0];
                            if (fA.length === 0) throw Error("Cannot decode empty core segment string.");
                            var bl = Tx(fA, HA),
                                Sp = Rx(bl.slice(0, 6));
                            bl = bl.slice(6);
                            if (Sp !== 1) throw Error("Unable to decode unsupported USCT Section specification version " + Sp + " - only version 1 is supported.");
                            for (var Tp = 0, Wa = [], Up = 0; Up < GA.length; Up++) {
                                var gA =
                                    GA[Up];
                                Wa.push(Rx(bl.slice(Tp, Tp + gA)));
                                Tp += gA
                            }
                            var IM = new CA;
                            eA = Wf(IM, 1, Sp);
                            var JM = Wa.shift();
                            dA = G(eA, 2, JM);
                            var KM = Wa.shift();
                            cA = G(dA, 3, KM);
                            var LM = Wa.shift();
                            bA = G(cA, 4, LM);
                            var MM = Wa.shift();
                            aA = G(bA, 5, MM);
                            var NM = Wa.shift();
                            $z = G(aA, 6, NM);
                            var OM = new BA,
                                PM = Wa.shift();
                            Zz = G(OM, 1, PM);
                            var QM = Wa.shift();
                            Yz = G(Zz, 2, QM);
                            var RM = Wa.shift();
                            Xz = G(Yz, 3, RM);
                            var SM = Wa.shift();
                            Wz = G(Xz, 4, SM);
                            var TM = Wa.shift();
                            Vz = G(Wz, 5, TM);
                            var UM = Wa.shift();
                            Uz = G(Vz, 6, UM);
                            var VM = Wa.shift();
                            Tz = G(Uz, 7, VM);
                            var WM = Wa.shift();
                            Sz = G(Tz, 8, WM);
                            Rz = C($z, 7, Sz);
                            var XM = new AA,
                                YM = Wa.shift();
                            Qz = G(XM, 1, YM);
                            var ZM = Wa.shift();
                            Pz = G(Qz, 2, ZM);
                            var $M = Wa.shift();
                            Oz = G(Pz, 3, $M);
                            Nz = C(Rz, 8, Oz);
                            var aN = Wa.shift();
                            Mz = G(Nz, 9, aN);
                            var bN = Wa.shift();
                            Lz = G(Mz, 10, bN);
                            var cN = Wa.shift();
                            var hA = HM = G(Lz, 11, cN);
                            if (Zh.length === 1) var iA = FA(hA);
                            else {
                                var dN = FA(hA),
                                    jA = void 0,
                                    kA = void 0,
                                    lA = void 0,
                                    mA = Zh[1];
                                if (mA.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                var nA = Tx(mA, 3),
                                    cl = Rx(nA.slice(0, 2));
                                if (cl < 0 || cl > 1) throw Error("Attempting to decode unknown GPC segment subsection type " +
                                    cl + ".");
                                lA = cl + 1;
                                var eN = Rx(nA.slice(2, 3)),
                                    fN = new DA;
                                kA = G(fN, 2, lA);
                                jA = Uf(kA, 1, !!eN);
                                iA = C(dN, 2, jA)
                            }
                            var oA = Af(iA, CA, 1);
                            if (F(oA, 5) === 1 || F(oA, 6) === 1) return !0
                    }
                }
            }
            return !1
        },
        uC = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        sC = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        tC = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };
    RB([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16]);
    RB([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18]);
    RB([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 17, 18]);
    new QB;
    var wC = function(a, b) {
        this.j = this.B = this.o = "";
        this.J = null;
        this.L = this.l = "";
        this.A = !1;
        var c;
        a instanceof wC ? (this.A = b !== void 0 ? b : a.A, xC(this, a.o), this.B = a.B, this.j = a.j, yC(this, a.J), this.l = a.l, zC(this, AC(a.g)), this.L = a.D()) : a && (c = String(a).match(Li)) ? (this.A = !!b, xC(this, c[1] || "", !0), this.B = BC(c[2] || ""), this.j = BC(c[3] || "", !0), yC(this, c[4]), this.l = BC(c[5] || "", !0), zC(this, c[6] || "", !0), this.L = BC(c[7] || "")) : (this.A = !!b, this.g = new CC(null, this.A))
    };
    wC.prototype.toString = function() {
        var a = [],
            b = this.o;
        b && a.push(DC(b, EC, !0), ":");
        var c = this.j;
        if (c || b == "file") a.push("//"), (b = this.B) && a.push(DC(b, EC, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.J, c != null && a.push(":", String(c));
        if (c = this.l) this.j && c.charAt(0) != "/" && a.push("/"), a.push(DC(c, c.charAt(0) == "/" ? FC : GC, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.D()) && a.push("#", DC(c, HC));
        return a.join("")
    };
    wC.prototype.resolve = function(a) {
        var b = this.G(),
            c = !!a.o;
        c ? xC(b, a.o) : c = !!a.B;
        c ? b.B = a.B : c = !!a.j;
        c ? b.j = a.j : c = a.J != null;
        var d = a.l;
        if (c) yC(b, a.J);
        else if (c = !!a.l) {
            if (d.charAt(0) != "/")
                if (this.j && !this.l) d = "/" + d;
                else {
                    var e = b.l.lastIndexOf("/");
                    e != -1 && (d = b.l.slice(0, e + 1) + d)
                }
            e = d;
            if (e == ".." || e == ".") d = "";
            else if (vb(e, "./") || vb(e, "/.")) {
                d = e.lastIndexOf("/", 0) == 0;
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    h == "." ? d && g == e.length && f.push("") : h == ".." ? ((f.length > 1 || f.length == 1 && f[0] != "") && f.pop(), d &&
                        g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.l = d : c = a.g.toString() !== "";
        c ? zC(b, AC(a.g)) : c = !!a.L;
        c && (b.L = a.D());
        return b
    };
    wC.prototype.G = function() {
        return new wC(this)
    };
    var xC = function(a, b, c) {
            a.o = c ? BC(b, !0) : b;
            a.o && (a.o = a.o.replace(/:$/, ""))
        },
        yC = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || b < 0) throw Error("Bad port number " + b);
                a.J = b
            } else a.J = null
        },
        zC = function(a, b, c) {
            b instanceof CC ? (a.g = b, IC(a.g, a.A)) : (c || (b = DC(b, JC)), a.g = new CC(b, a.A))
        },
        KC = function(a, b, c) {
            a.g.set(b, c);
            return a
        };
    wC.prototype.D = function() {
        return this.L
    };
    var LC = function(a) {
            return a instanceof wC ? a.G() : new wC(a, void 0)
        },
        BC = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        DC = function(a, b, c) {
            return typeof a === "string" ? (a = encodeURI(a).replace(b, MC), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        MC = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        EC = /[#\/\?@]/g,
        GC = /[#\?:]/g,
        FC = /[#\?]/g,
        JC = /[#\?@]/g,
        HC = /#/g,
        CC = function(a, b) {
            this.j = this.g = null;
            this.l = a || null;
            this.o = !!b
        },
        NC =
        function(a) {
            a.g || (a.g = new Map, a.j = 0, a.l && Ni(a.l, function(b, c) {
                a.add(ji(b), c)
            }))
        };
    CC.prototype.add = function(a, b) {
        NC(this);
        this.l = null;
        a = OC(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.j += 1;
        return this
    };
    CC.prototype.remove = function(a) {
        NC(this);
        a = OC(this, a);
        return this.g.has(a) ? (this.l = null, this.j -= this.g.get(a).length, this.g.delete(a)) : !1
    };
    CC.prototype.clear = function() {
        this.g = this.l = null;
        this.j = 0
    };
    CC.prototype.isEmpty = function() {
        NC(this);
        return this.j == 0
    };
    var PC = function(a, b) {
        NC(a);
        b = OC(a, b);
        return a.g.has(b)
    };
    l = CC.prototype;
    l.forEach = function(a, b) {
        NC(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    l.Hc = function() {
        NC(this);
        for (var a = Array.from(this.g.values()), b = Array.from(this.g.keys()), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    l.Hb = function(a) {
        NC(this);
        var b = [];
        if (typeof a === "string") PC(this, a) && (b = b.concat(this.g.get(OC(this, a))));
        else {
            a = Array.from(this.g.values());
            for (var c = 0; c < a.length; c++) b = b.concat(a[c])
        }
        return b
    };
    l.set = function(a, b) {
        NC(this);
        this.l = null;
        a = OC(this, a);
        PC(this, a) && (this.j -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.j += 1;
        return this
    };
    l.get = function(a, b) {
        if (!a) return b;
        a = this.Hb(a);
        return a.length > 0 ? String(a[0]) : b
    };
    l.toString = function() {
        if (this.l) return this.l;
        if (!this.g) return "";
        for (var a = [], b = Array.from(this.g.keys()), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.Hb(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                d[f] !== "" && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    };
    var AC = function(a) {
            var b = new CC;
            b.l = a.l;
            a.g && (b.g = new Map(a.g), b.j = a.j);
            return b
        },
        OC = function(a, b) {
            b = String(b);
            a.o && (b = b.toLowerCase());
            return b
        },
        IC = function(a, b) {
            b && !a.o && (NC(a), a.l = null, a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (this.remove(d), this.remove(e), c.length > 0 && (this.l = null, this.g.set(OC(this, e), ic(c)), this.j += c.length))
            }, a));
            a.o = b
        };
    var QC, RC, SC, TC = function() {
            return y.navigator ? y.navigator.userAgent : ""
        },
        UC = vb(TC(), "(iPad") || vb(TC(), "(Macintosh") || vb(TC(), "(iPod") || vb(TC(), "(iPhone");
    var VC = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        WC = ["c.googlesyndication.com"];

    function XC(a, b) {
        b = b === void 0 ? window.location.protocol : b;
        var c = !1;
        a == null || !a.startsWith("http") || (a == null ? 0 : a.startsWith("https")) ? c = !1 : YC(a, WC) ? c = !1 : b.includes("https") && YC(a, VC) && (c = !0);
        return c ? (a = new wC(a), L(K.getInstance(), "htp", "1"), xC(a, "https"), a.toString()) : a
    }

    function ZC(a) {
        if (!a) return !1;
        try {
            var b = typeof a === "string" ? new wC(a) : a;
            return b.o == "gcache" && !!b.g.get("url")
        } catch (c) {
            return !1
        }
    }

    function $C(a) {
        try {
            var b = typeof a === "string" ? new wC(a) : a;
            if (ZC(b)) {
                var c = b.g.get("url");
                return typeof c === "undefined" ? null : c
            }
        } catch (d) {}
        return null
    }

    function YC(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
    };
    var aD = -1;

    function bD(a, b) {
        b = b != null ? b : "";
        sc && (b = "");
        if (!tb(mi(a))) {
            var c = a instanceof Hh || !SB.test(a) ? a : new Hh(a);
            if (c instanceof Hh) var d = c;
            else {
                d = d === void 0 ? Lh : d;
                a: if (d = d === void 0 ? Lh : d, !(a instanceof Hh)) {
                    for (c = 0; c < d.length; ++c) {
                        var e = d[c];
                        if (e instanceof Jh && e.Mg(a)) {
                            a = new Hh(a);
                            break a
                        }
                    }
                    a = void 0
                }
                d = a || Ih
            }
            a = window;
            if (d instanceof Hh)
                if (d instanceof Hh) d = d.g;
                else throw Error("");
            else d = Nh.test(d) ? d : void 0;
            d !== void 0 && a.open(d, "_blank", b)
        }
    };

    function cD(a, b) {
        for (var c; !(c = a.next()).done;) b(c.value)
    }
    var dD = function(a, b) {
        this.g = a[y.Symbol.iterator]();
        this.j = b
    };
    dD.prototype[Symbol.iterator] = function() {
        return this
    };
    dD.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.j.call(void 0, a.value),
            done: a.done
        }
    };
    var eD = function(a, b) {
        return new dD(a, b)
    };
    var fD = function(a, b) {
        var c = new Set(a);
        cD(b[Symbol.iterator](), function(d) {
            return c.add(d)
        });
        return c
    };
    var gD = new Map,
        hD = function() {
            this.j = this.g = null
        };

    function iD(a, b, c, d) {
        var e = vq(a);
        ei(b, e) ? (e = setTimeout(function() {
            return iD(a, b, c, d)
        }, 200), d.j = e) : (jD(d), c(e))
    }

    function kD(a) {
        var b = new hD,
            c = new Promise(function(f) {
                var g = vq(a);
                if ("ResizeObserver" in window) {
                    var h = new ResizeObserver(function(k) {
                        window.requestAnimationFrame(function() {
                            for (var n = new di(0, 0), m = v(k), p = m.next(); !p.done; p = m.next())
                                if (p = p.value, p.contentBoxSize ? (p = Array.isArray(p.contentBoxSize) ? p.contentBoxSize[0] : p.contentBoxSize, n.width = Math.floor(p.inlineSize), n.height = Math.floor(p.blockSize)) : (n.width = Math.floor(p.contentRect.width), n.height = Math.floor(p.contentRect.height)), !ei(g, n)) return jD(b),
                                    f(n)
                        })
                    });
                    b.g = h;
                    h.observe(a)
                } else iD(a, g, f, b)
            }),
            d, e = (d = gD.get(c)) != null ? d : new Set;
        e.add(b);
        gD.set(c, e);
        return c
    }

    function lD(a, b) {
        b = b === void 0 ? new di(1, 1) : b;
        var c = function(g) {
                var h = kD(a),
                    k, n = (k = gD.get(g)) != null ? k : new Set,
                    m;
                k = (m = gD.get(h)) != null ? m : new Set;
                gD.set(g, fD(n, k));
                return h
            },
            d = function(g, h) {
                c(g).then(function(k) {
                    return b.width <= k.width && b.height <= k.height ? (mD(g), h(k)) : d(g, h)
                })
            },
            e, f = new Promise(function(g) {
                e = g
            });
        d(f, e);
        return f
    }

    function mD(a) {
        a = gD.get(a);
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next()) jD(b.value)
    }

    function jD(a) {
        a.j && window.clearTimeout(a.j);
        a.g && (a.g.disconnect(), a.g = null)
    };

    function nD(a, b) {
        return a && (a[b] || (a[b] = {}))
    }

    function oD(a, b) {
        var c;
        if (c = c === void 0 ? typeof omidExports === "undefined" ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(nD, c)[a[a.length - 1]] = b
    };
    var pD = new Map([
        [2, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.moatads\.com\/.*$/]],
        [3, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.doubleverify\.com\/.*$/, /^(https?:\/\/|\/\/)?c\.[\w\-]+\.com\/vfw\/dv\/.*$/, /^(https?:\/\/|\/\/)?(www\.)?[\w]+\.tv\/r\/s\/d\/.*$/, /^(https?:\/\/|\/\/)?(\w\.?)+\.dv\.tech\/.*$/]],
        [4, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.adsafeprotected\.com\/.*$/]],
        [5, [/^https?:\/\/(q|cdn)\.adrta\.com\/s\/.*\/(aa|aanf)\.js.*$/, /^https:\/\/cdn\.rta247\.com\/s\/.*\/(aa|aanf)\.js.*$/]],
        [6, []],
        [7, [/^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.voicefive\.com\/.*$/,
            /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.measuread\.com\/.*$/, /^(https?:\/\/|\/\/)?[-a-zA-Z0-9.]+\.scorecardresearch\.com\/.*$/
        ]],
        [8, [/^(https?:\/\/|\/\/)?s418\.mxcdn\.net\/bb-serve\/omid-meetrics.*\.js$/]],
        [9, [/^(https?:\/\/|\/\/)?pagead2\.googlesyndication\.com\/.*$/, /^(https?:\/\/|\/\/)?www\.googletagservices\.com\/.*$/]]
    ]);
    oD("OmidSessionClient.verificationVendorIdForScriptUrl", function(a) {
        for (var b = v(pD.keys()), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            for (var d = v(pD.get(c)), e = d.next(); !e.done; e = d.next())
                if (e.value.test(a)) return c
        }
        return 1
    });
    oD("OmidSessionClient.VerificationVendorId", {
        OTHER: 1,
        MOAT: 2,
        DOUBLEVERIFY: 3,
        INTEGRAL_AD_SCIENCE: 4,
        PIXELATE: 5,
        NIELSEN: 6,
        COMSCORE: 7,
        MEETRICS: 8,
        GOOGLE: 9
    });
    var qD = /OS (\S+) like/,
        rD = /Android ([\d\.]+)/;

    function sD(a, b) {
        a = (a = a.exec(Eb())) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return yb(a, b) >= 0
    }
    var tD = function() {
            return zc || wc && "ontouchstart" in document.documentElement
        },
        uD = function(a) {
            return Bc && sD(qD, a)
        },
        vD = function(a) {
            return (a = a === void 0 ? null : a) && typeof a.getAttribute === "function" ? a.getAttribute("playsinline") ? !0 : !1 : !1
        };
    var wD = function(a) {
        R.call(this);
        this.j = a;
        this.A = this.B = !1;
        this.C = this.D = 0;
        this.g = new xw(1E3);
        mr(this, this.g);
        Iv(this.g, "tick", this.G, !1, this);
        Iv(this.j, "pause", this.l, !1, this);
        Iv(this.j, "playing", this.l, !1, this);
        Iv(this.j, "ended", this.l, !1, this);
        Iv(this.j, "timeupdate", this.l, !1, this)
    };
    x(wD, R);
    var xD = function(a) {
        var b;
        return (b = a.j.currentTime) != null ? b : a.j.getCurrentTime()
    };
    wD.prototype.l = function(a) {
        switch (a.type) {
            case "playing":
                yD(this);
                break;
            case "pause":
            case "ended":
                this.g.enabled && this.g.stop();
                break;
            case "timeupdate":
                !this.B && xD(this) > 0 && (this.B = !0, yD(this))
        }
    };
    var yD = function(a) {
        !a.g.enabled && a.B && (a.D = xD(a) * 1E3, a.C = Date.now(), a.A = !1, a.g.start())
    };
    wD.prototype.G = function() {
        var a = Date.now(),
            b = a - this.C,
            c = xD(this) * 1E3;
        c - this.D < b * .5 ? this.A || (this.A = !0, this.dispatchEvent("playbackStalled")) : this.A = !1;
        this.D = c;
        this.C = a
    };
    var zD = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
        AD = /\bocr\b/;

    function BD(a) {
        if (tb(mi(a)) || sc && a.length > 2048) return !1;
        try {
            if ((new wC(a)).D().match(AD)) return !0
        } catch (b) {}
        return zD.find(function(b) {
            return a.match(b) != null
        }) != null
    };

    function CD(a, b) {
        return tb(b) ? !1 : (new RegExp(a)).test(b)
    }

    function DD(a) {
        var b = {};
        a.split(",").forEach(function(c) {
            var d = c.split("=");
            d.length == 2 && (c = ub(d[0]), d = ub(d[1]), c.length > 0 && (b[c] = d))
        });
        return b
    }

    function ED(a) {
        var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
        if (!a) return null;
        a = a.toLowerCase().replace("-", "_");
        if (b.includes(a)) return a;
        a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
        return b.includes(a) ? a : null
    };
    var FD = function() {
        this.g = Date.now()
    };
    FD.prototype.reset = function() {
        this.g = Date.now()
    };
    var GD = function(a) {
        a = a.g + 5E3 - Date.now();
        return a > 0 ? a : 0
    };
    var HD = function(a, b) {
        this.url = a;
        this.g = b === void 0 ? null : b
    };
    var ID = function(a) {
        switch (a) {
            case 0:
                return "No Error";
            case 1:
                return "Access denied to content document";
            case 2:
                return "File not found";
            case 3:
                return "Firefox silently errored";
            case 4:
                return "Application custom error";
            case 5:
                return "An exception occurred";
            case 6:
                return "Http response at 400 or 500 level";
            case 7:
                return "Request was aborted";
            case 8:
                return "Request timed out";
            case 9:
                return "The resource is not available offline";
            default:
                return "Unrecognized error code"
        }
    };
    var JD = function(a) {
        var b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.errorCode = a
    };
    x(JD, Error);
    var KD = function(a) {
        Q.call(this);
        this.o = a;
        this.j = {}
    };
    db(KD, Q);
    var LD = [];
    KD.prototype.listen = function(a, b, c, d) {
        return MD(this, a, b, c, d)
    };
    var MD = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (LD[0] = c.toString()), c = LD);
        for (var g = 0; g < c.length; g++) {
            var h = Iv(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
            if (!h) break;
            a.j[h.key] = h
        }
        return a
    };
    KD.prototype.ec = function(a, b, c, d) {
        return ND(this, a, b, c, d)
    };
    var ND = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) ND(a, b, c[g], d, e, f);
        else {
            b = Hv(b, c, d || a.handleEvent, e, f || a.o || a);
            if (!b) return a;
            a.j[b.key] = b
        }
        return a
    };
    KD.prototype.tb = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.tb(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = Ta(d) ? !!d.capture : !!d, e = e || this.o || this, c = Jv(c), d = !!d, b = xv(a) ? a.Wb(b, c, d, e) : a ? (a = Lv(a)) ? a.Wb(b, c, d, e) : null : null, b && (Qv(b), delete this.j[b.key])
    };
    var OD = function(a) {
        mh(a.j, function(b, c) {
            this.j.hasOwnProperty(c) && Qv(b)
        }, a);
        a.j = {}
    };
    KD.prototype.O = function() {
        KD.Ia.O.call(this);
        OD(this)
    };
    KD.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var PD = function() {};
    PD.prototype.g = null;
    var QD = function(a) {
        var b;
        (b = a.g) || (b = a.g = {});
        return b
    };
    var RD, SD = function() {};
    db(SD, PD);
    RD = new SD;
    var TD = function(a) {
        R.call(this);
        this.headers = new Map;
        this.W = a || null;
        this.j = !1;
        this.D = this.g = null;
        this.K = "";
        this.A = 0;
        this.l = this.I = this.B = this.G = !1;
        this.M = 0;
        this.C = null;
        this.V = "";
        this.P = !1
    };
    db(TD, R);
    var UD = /^https?$/i,
        VD = ["POST", "PUT"],
        YD = function(a, b, c, d) {
            if (a.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.K + "; newUri=" + b);
            c = c ? c.toUpperCase() : "GET";
            a.K = b;
            a.A = 0;
            a.G = !1;
            a.j = !0;
            a.g = new XMLHttpRequest;
            a.D = a.W ? QD(a.W) : QD(RD);
            a.g.onreadystatechange = bb(a.U, a);
            try {
                a.I = !0, a.g.open(c, String(b), !0), a.I = !1
            } catch (g) {
                WD(a);
                return
            }
            b = d || "";
            d = new Map(a.headers);
            var e = Array.from(d.keys()).find(function(g) {
                    return "content-type" == g.toLowerCase()
                }),
                f = y.FormData && b instanceof y.FormData;
            !dc(VD, c) || e || f || d.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            c = v(d);
            for (d = c.next(); !d.done; d = c.next()) e = v(d.value), d = e.next().value, e = e.next().value, a.g.setRequestHeader(d, e);
            a.V && (a.g.responseType = a.V);
            "withCredentials" in a.g && a.g.withCredentials !== a.P && (a.g.withCredentials = a.P);
            try {
                XD(a), a.M > 0 && (a.C = yw(a.aa, a.M, a)), a.B = !0, a.g.send(b), a.B = !1
            } catch (g) {
                WD(a)
            }
        };
    TD.prototype.aa = function() {
        typeof Oa != "undefined" && this.g && (this.A = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    var WD = function(a) {
            a.j = !1;
            a.g && (a.l = !0, a.g.abort(), a.l = !1);
            a.A = 5;
            ZD(a);
            $D(a)
        },
        ZD = function(a) {
            a.G || (a.G = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    TD.prototype.abort = function(a) {
        this.g && this.j && (this.j = !1, this.l = !0, this.g.abort(), this.l = !1, this.A = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), $D(this))
    };
    TD.prototype.O = function() {
        this.g && (this.j && (this.j = !1, this.l = !0, this.g.abort(), this.l = !1), $D(this, !0));
        TD.Ia.O.call(this)
    };
    TD.prototype.U = function() {
        this.Ea() || (this.I || this.B || this.l ? aE(this) : this.Z())
    };
    TD.prototype.Z = function() {
        aE(this)
    };
    var aE = function(a) {
            if (a.j && typeof Oa != "undefined" && (!a.D[1] || bE(a) != 4 || cE(a) != 2))
                if (a.B && bE(a) == 4) yw(a.U, 0, a);
                else if (a.dispatchEvent("readystatechange"), bE(a) == 4) {
                a.j = !1;
                try {
                    var b = cE(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = b === 0) {
                            var f = String(a.K).match(Li)[1] || null;
                            !f && y.self && y.self.location && (f = y.self.location.protocol.slice(0, -1));
                            e = !UD.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                        a.dispatchEvent("success")) : (a.A = 6, ZD(a))
                } finally {
                    $D(a)
                }
            }
        },
        $D = function(a, b) {
            if (a.g) {
                XD(a);
                var c = a.g,
                    d = a.D[0] ? function() {} : null;
                a.g = null;
                a.D = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        XD = function(a) {
            a.C && (y.clearTimeout(a.C), a.C = null)
        };
    TD.prototype.isActive = function() {
        return !!this.g
    };
    var bE = function(a) {
            return a.g ? a.g.readyState : 0
        },
        cE = function(a) {
            try {
                return bE(a) > 2 ? a.g.status : -1
            } catch (b) {
                return -1
            }
        },
        dE = function(a) {
            if (a.g) {
                a: {
                    a = a.g.responseText;
                    if (y.JSON) try {
                        var b = y.JSON.parse(a);
                        break a
                    } catch (c) {}
                    b = El(a)
                }
                return b
            }
        };
    var eE = function() {};
    eE.prototype.get = function(a) {
        return fE({
            url: a.url,
            timeout: a.timeout,
            withCredentials: a.withCredentials === void 0 ? !0 : a.withCredentials,
            method: "GET",
            headers: a.headers === void 0 ? {} : a.headers
        })
    };
    var fE = function(a) {
            var b = a.url;
            var c = a.timeout;
            var d = a.withCredentials;
            var e = a.method;
            var f = a.content === void 0 ? void 0 : a.content;
            var g = a.headers === void 0 ? {} : a.headers;
            return gE({
                url: b,
                timeout: c,
                withCredentials: d,
                method: e,
                content: f,
                headers: g
            }).then(function(h) {
                return Promise.resolve(h)
            }, function(h) {
                return h instanceof Error && h.message == 6 && d ? gE({
                    url: b,
                    timeout: c,
                    withCredentials: !d,
                    method: e,
                    content: f,
                    headers: g
                }) : Promise.reject(h)
            })
        },
        gE = function(a) {
            var b = a.url;
            var c = a.timeout;
            var d = a.withCredentials;
            var e =
                a.method;
            var f = a.content === void 0 ? void 0 : a.content;
            a = a.headers === void 0 ? {} : a.headers;
            var g = new TD;
            g.P = d;
            g.M = Math.max(0, GD(c));
            for (var h in a) g.headers.set(h, a[h]);
            var k = new KD;
            return new Promise(function(n, m) {
                k.ec(g, "success", function() {
                    a: {
                        if (Gq()) try {
                            dE(g);
                            var p = "application/json";
                            break a
                        } catch (u) {
                            p = "application/xml";
                            break a
                        }
                        g.g && bE(g) == 4 ? (p = g.g.getResponseHeader("Content-Type"), p = p === null ? void 0 : p) : p = void 0;p = p || ""
                    }
                    if (p.indexOf("application/json") != -1) try {
                        n(dE(g) || {})
                    } catch (u) {
                        m(new JD(5, cE(g)))
                    } else {
                        try {
                            var r =
                                g.g ? g.g.responseXML : null
                        } catch (u) {
                            r = null
                        }
                        if (r == null) {
                            try {
                                var t = g.g ? g.g.responseText : ""
                            } catch (u) {
                                t = ""
                            }
                            if (typeof DOMParser != "undefined") r = new DOMParser, t = pl(t), r = r.parseFromString($h(t), "application/xml");
                            else throw Error("Your browser does not support loading xml documents");
                        }
                        n(r)
                    }
                    k.dispose();g.dispose()
                });
                k.ec(g, ["error", "timeout"], function() {
                    m(new JD(g.A, cE(g)));
                    k.dispose();
                    g.dispose()
                });
                YD(g, XC(b), e, f)
            })
        };
    z("google.javascript.ads.imalib.common.UrlLoader", eE);
    var hE = RegExp("ad\\.doubleclick\\.net/ddm/track(imp|clk)");

    function iE() {
        return Ln("attribution-reporting")
    }
    var mE = function(a, b, c, d, e) {
            c = c === void 0 ? !1 : c;
            e = e === void 0 ? null : e;
            try {
                b = (d === void 0 ? 0 : d) ? XC(b, "https") : XC(b);
                hE.test(b) && (b = b.replace("?", ";tpsrc=ima?"), e = e || "");
                c = c || BD(b);
                var f = e != null && window.fetch != null;
                if (a.j || f) jE(a, b, c, e);
                else {
                    var g = iE() ? e : null;
                    Gq() ? kE(b) : lE(a, b, c, g)
                }
            } catch (h) {}
        },
        nE = function(a, b) {
            var c = {
                keepalive: !0,
                method: "get",
                redirect: "follow",
                credentials: "include"
            };
            a && (c.referrerPolicy = "no-referrer");
            b ? "setAttributionReporting" in XMLHttpRequest.prototype ? (c.attributionReporting = {
                eventSourceEligible: !0,
                triggerEligible: !1
            }, c.mode = "no-cors") : c.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            } : c.mode = "no-cors";
            return c
        },
        jE = function(a, b, c, d) {
            d = d === void 0 ? null : d;
            L(K.getInstance(), "faa", "1");
            L(K.getInstance(), "alp", d === null ? "0" : "1");
            var e = iE();
            L(K.getInstance(), "arpa", e ? "1" : "0");
            fetch(b, nE(c, d === "" && e)).then(function() {
                L(K.getInstance(), "fas", "1")
            }).catch(function() {
                L(K.getInstance(), "faf", "1");
                a.j = !1;
                var f = d;
                f = iE() ? f : null;
                Gq() ? kE(b) : lE(a, b, c, f)
            });
            e && d && fetch(d, nE(c, !0))
        },
        lE = function(a, b, c, d) {
            var e =
                new Image,
                f = (a.l++).toString();
            a.g.set(f, e);
            e.onload = e.onerror = function() {
                a.g.delete(f)
            };
            c && (e.referrerPolicy = "no-referrer");
            d != null && (e.attributionSrc = d);
            e.src = b
        },
        kE = function(a) {
            (new eE).get({
                url: a,
                timeout: new FD
            })
        };
    var oE = {
        AUTOPLAY_DISALLOWED: "autoplayDisallowed",
        Gh: "beginFullscreen",
        CAN_PLAY: "canPlay",
        CAN_PLAY_THROUGH: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        Rh: "end",
        Sh: "endFullscreen",
        ERROR: "error",
        Wh: "focusSkipButton",
        LOAD_START: "loadStart",
        LOADED: "loaded",
        Ai: "mediaLoadTimeout",
        Bi: "mediaPlaybackTimeout",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        SEEKED: "seeked",
        SEEKING: "seeking",
        Ni: "skip",
        Rf: "skipShown",
        STALLED: "stalled",
        ve: "start",
        TIME_UPDATE: "timeUpdate",
        Qi: "timedMetadata",
        Zi: "volumeChange",
        WAITING: "waiting",
        aj: "windowFocusChanged",
        Xh: "fullyLoaded"
    };
    var pE = function() {
        R.apply(this, arguments)
    };
    x(pE, R);
    pE.prototype.C = function() {
        return !1
    };
    pE.prototype.D = function() {
        return -1
    };
    pE.prototype.G = function() {};
    var qE = {},
        rE = (qE[18] = -1, qE[22] = -1, qE[43] = 350, qE[44] = 350, qE[45] = 350, qE[59] = -1, qE[133] = 350, qE[134] = 350, qE[135] = 350, qE[136] = 350, qE[139] = 50, qE[140] = 50, qE[141] = 50, qE[160] = 350, qE[242] = 150, qE[243] = 150, qE[244] = 150, qE[245] = 150, qE[247] = 150, qE[249] = 50, qE[250] = 50, qE[251] = 50, qE[278] = 150, qE[342] = -1, qE[343] = -1, qE[344] = -1, qE[345] = -1, qE[346] = -1, qE[347] = -1, qE),
        sE = {},
        tE = (sE[18] = !1, sE[22] = !1, sE[43] = !0, sE[44] = !0, sE[45] = !0, sE[59] = !1, sE[133] = !0, sE[134] = !0, sE[135] = !0, sE[136] = !0, sE[139] = !0, sE[140] = !0, sE[141] = !0, sE[160] = !0,
            sE[242] = !0, sE[243] = !0, sE[244] = !0, sE[245] = !0, sE[247] = !0, sE[249] = !0, sE[250] = !0, sE[251] = !0, sE[278] = !0, sE[342] = !1, sE[343] = !1, sE[344] = !1, sE[345] = !1, sE[346] = !1, sE[347] = !1, sE),
        uE = {},
        vE = (uE[18] = "video/mp4", uE[22] = "video/mp4", uE[43] = "video/webm", uE[44] = "video/webm", uE[45] = "video/webm", uE[59] = "video/mp4", uE[133] = "video/mp4", uE[134] = "video/mp4", uE[135] = "video/mp4", uE[136] = "video/mp4", uE[139] = "audio/mp4", uE[140] = "audio/mp4", uE[141] = "audio/mp4", uE[160] = "video/mp4", uE[242] = "video/webm", uE[243] = "video/webm", uE[244] =
            "video/webm", uE[245] = "video/webm", uE[247] = "video/webm", uE[249] = "audio/webm", uE[250] = "audio/webm", uE[251] = "audio/webm", uE[278] = "video/webm", uE[342] = "video/mp4", uE[343] = "video/mp4", uE[344] = "video/mp4", uE[345] = "video/mp4", uE[346] = "video/mp4", uE[347] = "video/mp4", uE),
        wE = {},
        xE = (wE[18] = "avc1.42001E, mp4a.40.2", wE[22] = "avc1.64001F, mp4a.40.2", wE[43] = "vp8, vorbis", wE[44] = "vp8, vorbis", wE[45] = "vp8, vorbis", wE[59] = "avc1.4D001F, mp4a.40.2", wE[133] = "avc1.4D401E", wE[134] = "avc1.4D401E", wE[135] = "avc1.4D401E", wE[136] =
            "avc1.4D401E", wE[139] = "mp4a.40.2", wE[140] = "mp4a.40.2", wE[141] = "mp4a.40.2", wE[160] = "avc1.4D401E", wE[242] = "vp9", wE[243] = "vp9", wE[244] = "vp9", wE[245] = "vp9", wE[247] = "vp9", wE[249] = "opus", wE[250] = "opus", wE[251] = "opus", wE[278] = "vp9", wE[342] = "avc1.42E01E, mp4a.40.2", wE[343] = "avc1.42E01E, mp4a.40.2", wE[344] = "avc1.42E01E, mp4a.40.2", wE[345] = "avc1.42E01E, mp4a.40.2", wE[346] = "avc1.42E01E, mp4a.40.2", wE[347] = "avc1.4D001F, mp4a.40.2", wE);
    var yE = RegExp("/itag/(\\d+)/");

    function zE(a) {
        var b = Number(Pi(a, "itag"));
        return b ? b : (a = a.match(yE)) && a.length === 2 ? Number(a[1]) : null
    }

    function AE(a) {
        var b = vE[a];
        a = xE[a];
        b ? (b = mi(b).toLowerCase(), b = a ? b + '; codecs="' + mi(a) + '"' : b) : b = "";
        return b
    }

    function BE(a, b) {
        if (typeof CustomEvent === "function") return new CustomEvent(a, {
            detail: b
        });
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !1, !0, b);
        return c
    };
    var CE = function(a, b) {
        pE.call(this);
        var c = this;
        this.j = b;
        this.B = this.l = this.g = 0;
        this.A = null;
        this.uri = new wC(a);
        this.state = 0;
        var d;
        this.I = (d = this.j) == null ? void 0 : d.initialize();
        lr(this, function() {
            kr(c.j)
        })
    };
    x(CE, pE);
    CE.prototype.D = function() {
        return this.g
    };
    CE.prototype.C = function() {
        return this.state === 3
    };
    CE.prototype.G = function(a) {
        this.state === 1 ? (this.g += a, this.state = 2) : this.state === 0 && (this.g += a, this.state = 1, DE(this))
    };
    var DE = function(a) {
            Ia(function(b) {
                if (b.g == 1) return a.state === 2 && (a.state = 1), xa(b, EE(a), 4);
                var c = a.B > 3;
                if (c) {
                    a.A === null && (a.A = 400);
                    var d = BE("media_source_error", {
                        code: a.l > 0 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                        message: 'Response code "' + a.A + '" with ' + a.g + " bytes requested and " + a.l + " bytes loaded"
                    });
                    a.dispatchEvent(d)
                }
                a.l < a.g && a.state !== 3 && !c ? b.g = 1 : (a.state !== 3 && (a.state = 0), b.g = 0)
            })
        },
        EE = function(a) {
            var b;
            return Ia(function(c) {
                switch (c.g) {
                    case 1:
                        b = a.l + "-" + (a.g - 1);
                        KC(a.uri,
                            "range", b);
                        if (!a.j) {
                            c.g = 2;
                            break
                        }
                        return xa(c, a.I, 3);
                    case 3:
                        return c.return(FE(a));
                    case 2:
                        return c.l = 4, xa(c, GE(a), 6);
                    case 6:
                        ya(c);
                        break;
                    case 4:
                        Aa(c), a.B++, c.g = 0
                }
            })
        },
        FE = function(a) {
            var b;
            return Ia(function(c) {
                switch (c.g) {
                    case 1:
                        return a.j ? xa(c, a.j.Xb(a.uri), 2) : c.return(Promise.reject());
                    case 2:
                        if (b = c.j) return b.wa && (a.state = 3), HE(a, b.video), c.return();
                        c.l = 3;
                        return xa(c, GE(a), 5);
                    case 5:
                        ya(c);
                        break;
                    case 3:
                        Aa(c), a.B++, c.g = 0
                }
            })
        },
        GE = function(a) {
            var b, c, d, e, f, g, h;
            return Ia(function(k) {
                if (k.g == 1) return b = 0,
                    c = a.g - a.l, xa(k, fetch(a.uri.toString()), 2);
                d = k.j;
                if (d.status >= 400) return L(K.getInstance(), "lvlfes", d.status.toString()), a.A = d.status, k.return(Promise.reject());
                f = (e = d.body) == null ? void 0 : e.getReader();
                if (!f) return Cl("lvlmr"), a.A = d.status, k.return(Promise.reject());
                g = [];
                h = function() {
                    var n, m, p, r, t, u;
                    return Ia(function(w) {
                        if (w.g == 1) return xa(w, f.read(), 2);
                        n = w.j;
                        m = n.done;
                        p = n.value;
                        if (m) return r = b < c, IE(a, g, r), w.return();
                        g.push(p);
                        b += (t = p) == null ? void 0 : t.length;
                        HE(a, (u = p) == null ? void 0 : u.buffer);
                        return xa(w,
                            h(), 0)
                    })
                };
                return xa(k, h(), 0)
            })
        },
        IE = function(a, b, c) {
            c && (a.state = 3, HE(a, new ArrayBuffer(0)));
            var d = new Uint8Array(b.reduce(function(g, h) {
                    return g + h.length
                }, 0)),
                e = 0;
            b = v(b);
            for (var f = b.next(); !f.done; f = b.next()) f = f.value, d.set(f, e), e += f.length;
            a.j && d.buffer.byteLength > 0 && a.j.wc(d.buffer, a.uri, 0, c)
        },
        HE = function(a, b) {
            b !== null && (b = b.slice(0), a.l += b.byteLength, a.dispatchEvent({
                type: "progress",
                ud: b
            }))
        };
    CE.prototype.O = function() {
        var a;
        ((a = this.j) == null ? 0 : a.Va()) && this.j.close();
        pE.prototype.O.call(this)
    };
    var KE = function(a) {
            this.uri = a;
            this.g = JE(a)
        },
        JE = function(a) {
            return new Map(a.l.split("/").reduce(function(b, c, d, e) {
                d % 2 && b.set(e[d - 1], c);
                return b
            }, new Map))
        },
        LE = function(a) {
            var b, c;
            return (b = a.uri) == null ? void 0 : (c = b.l) == null ? void 0 : c.startsWith("/videoplayback")
        };
    KE.prototype.getId = function() {
        return ME(this, "id")
    };
    var NE = function(a) {
            a = a.uri.g.get("range");
            if (!a) return null;
            a = a.split("-")[0];
            return !a || isNaN(Number(a)) ? null : Number(a)
        },
        ME = function(a, b) {
            var c = a.uri.g.get(b);
            return c ? c : (a = a.g.get(b)) ? a : null
        };
    var OE = function() {};
    var PE = ["doubleclick.net"];

    function QE() {
        if (Qb() || A("iPad") || A("iPod")) var a = !1;
        else if (Pb()) {
            if (SC === void 0) {
                a: {
                    if (QC === void 0) {
                        if (UC) {
                            a = vb(TC(), "Safari");
                            var b = (new wC(window.location.href)).g.Hb("js");
                            b: {
                                if ((b = b.length ? b[0] : "") && b.lastIndexOf("afma-", 0) == 0) {
                                    var c = b.lastIndexOf("v");
                                    if (c > -1 && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                                        b = b[1];
                                        break b
                                    }
                                }
                                b = "0.0.0"
                            }
                            if (!a || b !== "0.0.0") {
                                a = QC = !0;
                                break a
                            }
                        }
                        QC = !1
                    }
                    a = QC
                }
                a || (RC === void 0 && (RC = vb(TC(), "afma-sdk-a") ? !0 : !1), a = RC);SC = a
            }
            a = SC ? !0 : Ji() ? !1 : RE()
        } else a = !1;
        return a
    }

    function RE() {
        var a = !1,
            b = (new wC(window.location.href)).j;
        PE.forEach(function(c) {
            b.includes(c) && (a = !0)
        });
        return a
    };
    var SE, VE = function(a, b, c) {
        if (typeof a === "number") var d = {
            name: TE(a)
        };
        else d = a, a = UE(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + this.getName();
        c && (b += ", " + c);
        gb.call(this, b)
    };
    db(VE, gb);
    VE.prototype.getName = function() {
        return this.g.name || ""
    };
    var WE = {
            Tf: 1,
            Fi: 2,
            NOT_FOUND_ERR: 3,
            Af: 4,
            Df: 5,
            Gi: 6,
            Sf: 7,
            ABORT_ERR: 8,
            Pf: 9,
            Ti: 10,
            TIMEOUT_ERR: 11,
            Of: 12,
            INVALID_ACCESS_ERR: 13,
            INVALID_STATE_ERR: 14
        },
        XE = (y.g || y.j || WE).Tf,
        YE = (y.g || y.j || WE).NOT_FOUND_ERR,
        ZE = (y.g || y.j || WE).Af,
        $E = (y.g || y.j || WE).Df,
        aF = (y.g || y.j || WE).Sf,
        bF = (y.g || y.j || WE).ABORT_ERR,
        cF = (y.g || y.j || WE).Pf,
        dF = (y.g || y.j || WE).TIMEOUT_ERR,
        eF = (y.g || y.j || WE).Of,
        fF = (y.DOMException || WE).INVALID_ACCESS_ERR,
        gF = (y.DOMException || WE).INVALID_STATE_ERR,
        UE = function(a) {
            switch (a) {
                case "UnknownError":
                    return XE;
                case "NotFoundError":
                    return YE;
                case "ConstraintError":
                    return ZE;
                case "DataError":
                    return $E;
                case "TransactionInactiveError":
                    return aF;
                case "AbortError":
                    return bF;
                case "ReadOnlyError":
                    return cF;
                case "TimeoutError":
                    return dF;
                case "QuotaExceededError":
                    return eF;
                case "InvalidAccessError":
                    return fF;
                case "InvalidStateError":
                    return gF;
                default:
                    return XE
            }
        },
        TE = function(a) {
            switch (a) {
                case XE:
                    return "UnknownError";
                case YE:
                    return "NotFoundError";
                case ZE:
                    return "ConstraintError";
                case $E:
                    return "DataError";
                case aF:
                    return "TransactionInactiveError";
                case bF:
                    return "AbortError";
                case cF:
                    return "ReadOnlyError";
                case dF:
                    return "TimeoutError";
                case eF:
                    return "QuotaExceededError";
                case fF:
                    return "InvalidAccessError";
                case gF:
                    return "InvalidStateError";
                default:
                    return "UnknownError"
            }
        },
        hF = function(a, b) {
            return "error" in a ? new VE(a.error, b) : new VE({
                name: "UnknownError"
            }, b)
        },
        iF = function(a, b) {
            return "name" in a ? new VE(a, b + ": " + a.message) : new VE({
                name: "UnknownError"
            }, b)
        };
    var jF = function(a) {
            this.g = a
        },
        kF = y.IDBKeyRange || y.webkitIDBKeyRange;
    /*

     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: MIT
    */
    var lF = function() {
        this.A = [];
        this.o = this.l = !1;
        this.j = void 0;
        this.L = this.G = this.C = !1;
        this.B = 0;
        this.g = null;
        this.J = 0
    };
    lF.prototype.cancel = function(a) {
        if (this.l) this.j instanceof lF && this.j.cancel();
        else {
            if (this.g) {
                var b = this.g;
                delete this.g;
                a ? b.cancel(a) : (b.J--, b.J <= 0 && b.cancel())
            }
            this.L = !0;
            this.l || mF(this, new nF(this))
        }
    };
    lF.prototype.D = function(a, b) {
        this.C = !1;
        oF(this, a, b)
    };
    var oF = function(a, b, c) {
            a.l = !0;
            a.j = c;
            a.o = !b;
            pF(a)
        },
        rF = function(a) {
            if (a.l) {
                if (!a.L) throw new qF(a);
                a.L = !1
            }
        };
    lF.prototype.Ba = function(a) {
        rF(this);
        oF(this, !0, a)
    };
    var mF = function(a, b) {
            rF(a);
            oF(a, !1, b)
        },
        tF = function(a, b) {
            return sF(a, b, null)
        },
        sF = function(a, b, c, d) {
            a.A.push([b, c, d]);
            a.l && pF(a);
            return a
        };
    lF.prototype.then = function(a, b, c) {
        var d, e, f = new hw(function(g, h) {
            e = g;
            d = h
        });
        sF(this, e, function(g) {
            g instanceof nF ? f.cancel() : d(g);
            return uF
        }, this);
        return f.then(a, b, c)
    };
    lF.prototype.$goog_Thenable = !0;
    var vF = function(a) {
            return Zb(a.A, function(b) {
                return typeof b[1] === "function"
            })
        },
        uF = {},
        pF = function(a) {
            if (a.B && a.l && vF(a)) {
                var b = a.B,
                    c = wF[b];
                c && (y.clearTimeout(c.g), delete wF[b]);
                a.B = 0
            }
            a.g && (a.g.J--, delete a.g);
            b = a.j;
            for (var d = c = !1; a.A.length && !a.C;) {
                var e = a.A.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.o ? g : f) try {
                    var h = f.call(e || null, b);
                    h === uF && (h = void 0);
                    h !== void 0 && (a.o = a.o && (h == b || h instanceof Error), a.j = b = h);
                    if (fw(b) || typeof y.Promise === "function" && b instanceof y.Promise) d = !0, a.C = !0
                } catch (k) {
                    b = k, a.o = !0,
                        vF(a) || (c = !0)
                }
            }
            a.j = b;
            d && (h = bb(a.D, a, !0), d = bb(a.D, a, !1), b instanceof lF ? (sF(b, h, d), b.G = !0) : b.then(h, d));
            c && (b = new xF(b), wF[b.g] = b, a.B = b.g)
        },
        qF = function() {
            gb.call(this)
        };
    db(qF, gb);
    qF.prototype.message = "Deferred has already fired";
    qF.prototype.name = "AlreadyCalledError";
    var nF = function() {
        gb.call(this)
    };
    db(nF, gb);
    nF.prototype.message = "Deferred was canceled";
    nF.prototype.name = "CanceledError";
    var xF = function(a) {
        this.g = y.setTimeout(bb(this.l, this), 0);
        this.j = a
    };
    xF.prototype.l = function() {
        delete wF[this.g];
        throw this.j;
    };
    var wF = {};
    var yF = function() {
        R.call(this)
    };
    db(yF, R);
    yF.prototype.g = null;
    yF.prototype.next = function(a) {
        if (a) this.g["continue"](a);
        else this.g["continue"]()
    };
    yF.prototype.remove = function() {
        var a = new lF;
        try {
            var b = this.g["delete"]()
        } catch (c) {
            return mF(a, iF(c, "deleting via cursor")), a
        }
        b.onsuccess = function() {
            a.Ba()
        };
        b.onerror = function(c) {
            mF(a, hF(c.target, "deleting via cursor"))
        };
        return a
    };
    yF.prototype.getValue = function() {
        return this.g.value
    };
    var zF = function(a, b) {
        var c = new yF;
        try {
            var d = a.openCursor(b ? b.g : null)
        } catch (e) {
            throw c.dispose(), iF(e, a.name);
        }
        d.onsuccess = function(e) {
            c.g = e.target.result || null;
            c.g ? c.dispatchEvent("n") : c.dispatchEvent("c")
        };
        d.onerror = function() {
            c.dispatchEvent("e")
        };
        return c
    };
    var AF = function(a) {
        this.g = a
    };
    AF.prototype.getName = function() {
        return this.g.name
    };
    var BF = function(a, b, c) {
        var d = new lF;
        try {
            var e = a.g.get(c)
        } catch (f) {
            return b += " with key " + hi(c), mF(d, iF(f, b)), d
        }
        e.onsuccess = function(f) {
            d.Ba(f.target.result)
        };
        e.onerror = function(f) {
            b += " with key " + hi(c);
            mF(d, hF(f.target, b))
        };
        return d
    };
    AF.prototype.get = function(a) {
        return BF(this, "getting from index " + this.getName(), a)
    };
    var CF = function(a, b) {
        return zF(a.g, b)
    };
    var DF = function(a) {
        this.g = a
    };
    DF.prototype.getName = function() {
        return this.g.name
    };
    var EF = function(a, b, c, d, e) {
            var f = new lF;
            try {
                var g = e ? a.g[b](d, e) : a.g[b](d)
            } catch (h) {
                return c += hi(d), e && (c += ", with key " + hi(e)), mF(f, iF(h, c)), f
            }
            g.onsuccess = function(h) {
                f.Ba(h.target.result)
            };
            g.onerror = function(h) {
                c += hi(d);
                e && (c += ", with key " + hi(e));
                mF(f, hF(h.target, c))
            };
            return f
        },
        FF = function(a, b) {
            return EF(a, "put", "putting into " + a.getName() + " with value", b)
        };
    DF.prototype.add = function(a, b) {
        return EF(this, "add", "adding into " + this.getName() + " with value ", a, b)
    };
    DF.prototype.remove = function(a) {
        var b = new lF;
        try {
            var c = this.g["delete"](a instanceof jF ? a.g : a)
        } catch (e) {
            return c = "removing from " + this.getName() + " with key " + hi(a), mF(b, iF(e, c)), b
        }
        c.onsuccess = function() {
            b.Ba()
        };
        var d = this;
        c.onerror = function(e) {
            var f = "removing from " + d.getName() + " with key " + hi(a);
            mF(b, hF(e.target, f))
        };
        return b
    };
    DF.prototype.get = function(a) {
        var b = new lF;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.getName() + " with key " + hi(a), mF(b, iF(e, c)), b
        }
        c.onsuccess = function(e) {
            b.Ba(e.target.result)
        };
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.getName() + " with key " + hi(a);
            mF(b, hF(e.target, f))
        };
        return b
    };
    DF.prototype.clear = function() {
        var a = "clearing store " + this.getName(),
            b = new lF;
        try {
            var c = this.g.clear()
        } catch (d) {
            return mF(b, iF(d, a)), b
        }
        c.onsuccess = function() {
            b.Ba()
        };
        c.onerror = function(d) {
            mF(b, hF(d.target, a))
        };
        return b
    };
    var GF = function(a) {
        try {
            return new AF(a.g.index("timestamp"))
        } catch (b) {
            throw iF(b, "getting index timestamp");
        }
    };
    var HF = function(a, b) {
        R.call(this);
        this.g = a;
        this.l = b;
        this.j = new KD(this);
        this.j.listen(this.g, "complete", bb(this.dispatchEvent, this, "complete"));
        this.j.listen(this.g, "abort", bb(this.dispatchEvent, this, "abort"));
        this.j.listen(this.g, "error", this.Ff)
    };
    db(HF, R);
    l = HF.prototype;
    l.Ff = function(a) {
        a.target instanceof VE ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: hF(a.target, "in transaction")
        })
    };
    l.objectStore = function(a) {
        try {
            return new DF(this.g.objectStore(a))
        } catch (b) {
            throw iF(b, "getting object store " + a);
        }
    };
    l.commit = function(a) {
        if (this.g.commit || !a) try {
            this.g.commit()
        } catch (b) {
            throw iF(b, "cannot commit the transaction");
        }
    };
    l.wait = function() {
        var a = new lF;
        Hv(this, "complete", bb(a.Ba, a));
        var b = Hv(this, "abort", function() {
            Qv(c);
            mF(a, new VE(bF, "waiting for transaction to complete"))
        });
        var c = Hv(this, "error", function(e) {
            Qv(b);
            mF(a, e.target)
        });
        var d = this.l;
        return tF(a, function() {
            return d
        })
    };
    l.abort = function() {
        this.g.abort()
    };
    l.O = function() {
        HF.Ia.O.call(this);
        this.j.dispose()
    };
    var IF = function(a) {
        R.call(this);
        this.g = a;
        this.j = new KD(this);
        this.j.listen(this.g, "abort", bb(this.dispatchEvent, this, "abort"));
        this.j.listen(this.g, "error", this.Gf);
        this.j.listen(this.g, "versionchange", this.ng);
        this.j.listen(this.g, "close", bb(this.dispatchEvent, this, "close"))
    };
    db(IF, R);
    l = IF.prototype;
    l.Sd = !0;
    l.Gf = function(a) {
        a = (a = a.target) && a.error;
        this.dispatchEvent({
            type: "error",
            errorCode: a && a.severity
        })
    };
    l.ng = function(a) {
        this.dispatchEvent(new JF(a.oldVersion, a.newVersion))
    };
    l.close = function() {
        this.Sd && (this.g.close(), this.Sd = !1)
    };
    l.Va = function() {
        return this.Sd
    };
    l.getName = function() {
        return this.g.name
    };
    l.getVersion = function() {
        return Number(this.g.version)
    };
    var KF = function(a) {
        var b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new HF(c, a)
        } catch (d) {
            throw iF(d, "creating transaction");
        }
    };
    IF.prototype.O = function() {
        IF.Ia.O.call(this);
        this.j.dispose()
    };
    var JF = function(a, b) {
        rv.call(this, "versionchange");
        this.oldVersion = a;
        this.newVersion = b
    };
    db(JF, rv);
    var LF = function(a) {
        var b = new lF;
        SE == void 0 && (SE = y.indexedDB || y.mozIndexedDB || y.webkitIndexedDB || y.moz_indexedDB);
        var c = SE.open("IndexedDbVideoChunkPersistentStorage", 6);
        c.onsuccess = function(d) {
            d = new IF(d.target.result);
            b.Ba(d)
        };
        c.onerror = function(d) {
            mF(b, hF(d.target, "opening database IndexedDbVideoChunkPersistentStorage"))
        };
        c.onupgradeneeded = function(d) {
            if (a) {
                var e = new IF(d.target.result);
                a(new JF(d.oldVersion, d.newVersion), e, new HF(d.target.transaction, e))
            }
        };
        c.onblocked = function() {};
        return b
    };
    var MF = function() {
        R.apply(this, arguments);
        this.g = null
    };
    x(MF, R);
    MF.prototype.initialize = function() {
        var a = this;
        return Promise.resolve(LF(this.j)).then(function(b) {
            a.g = b
        }, function(b) {
            L(K.getInstance(), "codf", b.message)
        })
    };
    MF.prototype.Va = function() {
        return this.g !== null && this.g.Va()
    };
    MF.prototype.close = function() {
        var a = this;
        return (new Promise(function(b) {
            NF(a, b)
        })).then(function() {
            return OF()
        }).then(function() {
            a.g.close()
        })
    };
    var OF = function() {
        var a;
        return ((a = navigator.storage) == null ? 0 : a.estimate) ? navigator.storage.estimate().then(function(b) {
            L(K.getInstance(), "csue", String(b.usage))
        }) : Promise.resolve(void 0)
    };
    MF.prototype.Xb = function(a) {
        return (a = PF(a, 0)) ? QF(this, RF(a), a.Mc) : Promise.resolve(null)
    };
    MF.prototype.wc = function(a, b, c, d) {
        (b = PF(b, c)) ? (c = b.startIndex, SF(this, {
            gj: RF(b),
            startIndex: c,
            Fc: c + a.byteLength - 1,
            Mc: b.Mc,
            timestamp: new Date(Date.now()),
            wa: d,
            zb: b.zb,
            video: a
        })) : Promise.resolve(void 0)
    };
    MF.prototype.j = function(a, b) {
        if (b.g.objectStoreNames.contains("MediaSourceVideoChunk")) try {
            b.g.deleteObjectStore("MediaSourceVideoChunk")
        } catch (d) {
            throw iF(d, "deleting object store MediaSourceVideoChunk");
        }
        a = {
            keyPath: "cacheId"
        };
        try {
            var c = new DF(b.g.createObjectStore("MediaSourceVideoChunk", a))
        } catch (d) {
            throw iF(d, "creating object store MediaSourceVideoChunk");
        }
        b = {
            unique: !1
        };
        try {
            c.g.createIndex("timestamp", "timestamp", b)
        } catch (d) {
            throw iF(d, "creating new index timestamp with key path timestamp");
        }
    };
    var NF = function(a, b) {
            var c = new Date(Date.now());
            c.setDate(c.getDate() - 30);
            c = new jF(kF.upperBound(c, void 0));
            var d = CF(GF(KF(a.g).objectStore("MediaSourceVideoChunk")), c),
                e = d.listen("n", function() {
                    d.remove();
                    d.next()
                });
            Hv(d, "c", function() {
                Qv(e);
                b()
            })
        },
        PF = function(a, b) {
            var c = new KE(a);
            a = c.getId();
            var d = ME(c, "itag"),
                e = ME(c, "source"),
                f = ME(c, "lmt");
            c = NE(c);
            var g = [];
            a ? d ? e ? f ? c === null && g.push("startIndex") : g.push("lmt") : g.push("source") : g.push("itag") : g.push("videoId");
            return g.length > 0 ? (L(K.getInstance(),
                "civp", g.join("-")), null) : {
                yh: a,
                zb: d,
                source: e,
                Mc: f,
                startIndex: c + b
            }
        },
        RF = function(a) {
            for (var b = [a.yh, a.source, a.startIndex].join(), c = 0, d = 0; d < b.length; d++) c = Math.imul(31, c) + b.charCodeAt(d) | 0;
            return c.toString() + "," + a.zb
        },
        QF = function(a, b, c) {
            var d = KF(a.g).objectStore("MediaSourceVideoChunk");
            return Promise.resolve(d.get(b)).then(function(e) {
                if (!e) return L(K.getInstance(), "cenf", "1"), null;
                if (e.Mc !== c) return L(K.getInstance(), "cdl", "1"), d.remove(b).then(null, function(f) {
                        L(K.getInstance(), "crdlvf", f.message)
                    }),
                    null;
                L(K.getInstance(), "cefml", "1");
                return {
                    zb: e.zb,
                    Fc: e.Fc,
                    wa: e.wa,
                    video: e.video
                }
            }, function(e) {
                L(K.getInstance(), "cgvf", e.message);
                return null
            })
        },
        SF = function(a, b) {
            a = KF(a.g).objectStore("MediaSourceVideoChunk");
            Promise.resolve(FF(a, b)).then(function() {
                L(K.getInstance(), "cavs", "1")
            }, function(c) {
                L(K.getInstance(), "cavf", c.message)
            })
        };
    var TF = function(a) {
        pE.call(this);
        var b = this;
        this.I = this.j = this.g = 0;
        this.A = this.K = null;
        this.uri = new wC(a);
        this.state = 0;
        this.l = (this.B = QE() && !ZC(this.uri)) ? XB(MF) : null;
        lr(this, function() {
            kr(b.l)
        });
        this.K = this.B ? this.l.initialize() : null
    };
    x(TF, pE);
    TF.prototype.D = function() {
        return this.g
    };
    TF.prototype.C = function() {
        return this.state === 3
    };
    TF.prototype.G = function(a) {
        this.state === 1 ? (this.g += a, this.state = 2) : this.state === 0 && (this.g += a, this.state = 1, UF(this))
    };
    var UF = function(a) {
            Ia(function(b) {
                if (b.g == 1) return a.state === 2 && (a.state = 1), xa(b, VF(a), 4);
                var c = a.I > 3;
                if (c && a.A !== null) {
                    var d = BE("media_source_error", {
                        code: a.j > 0 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                        message: 'Response code "' + a.A + '" with ' + a.g + " bytes requested and " + a.j + " bytes loaded"
                    });
                    a.dispatchEvent(d)
                }
                a.j < a.g && a.state !== 3 && !c ? b.g = 1 : (a.state !== 3 && (a.state = 0), b.g = 0)
            })
        },
        VF = function(a) {
            var b;
            return Ia(function(c) {
                switch (c.g) {
                    case 1:
                        b = a.j + "-" + (a.g - 1);
                        KC(a.uri, "range",
                            b);
                        if (!a.B) {
                            c.g = 2;
                            break
                        }
                        return xa(c, a.K, 3);
                    case 3:
                        return c.return(WF(a));
                    case 2:
                        return c.l = 4, xa(c, XF(a), 6);
                    case 6:
                        ya(c);
                        break;
                    case 4:
                        Aa(c), YF(a), c.g = 0
                }
            })
        },
        WF = function(a) {
            var b;
            return Ia(function(c) {
                switch (c.g) {
                    case 1:
                        return xa(c, a.l.Xb(a.uri), 2);
                    case 2:
                        if (b = c.j) {
                            b.wa && (a.state = 3);
                            ZF(a, b.video, 0);
                            c.g = 0;
                            break
                        }
                        c.l = 4;
                        return xa(c, XF(a), 6);
                    case 6:
                        ya(c);
                        break;
                    case 4:
                        Aa(c), YF(a), c.g = 0
                }
            })
        },
        YF = function(a) {
            var b = new KE(a.uri);
            if (Km(tn) && LE(b)) {
                a: if (LE(b)) {
                    var c = ME(b, "mn");
                    var d = c ? c.split(",") : null;
                    var e = ME(b,
                        "fvip");
                    c = b.uri.G();
                    if (d && e) {
                        var f = (Number(ME(b, "fallback_count")) || 0) + 1;
                        if (d = d[f]) {
                            c.j = "r" + e + "---" + d + ".googlevideo.com";
                            KC(c, "fallback_count", f);
                            b = c;
                            break a
                        }
                    }
                    var g, h;
                    e = Number(((h = (g = c.g.get("cmo")) == null ? void 0 : g.split("=")) != null ? h : [])[1]) || 0;
                    b.uri.j.match(/^r{1,2}(\d+)---(.+)\.googlevideo.com$/) && (c.j = "redirector.googlevideo.com");
                    KC(c, "cmo", "pf=" + (e + 1));
                    b = c
                } else b = b.uri;a.uri = b;a.dispatchEvent(BE("bandaid_fallback_count"))
            }
            else Km(yn) && ZC(a.uri) && (a.uri = new wC($C(a.uri)));
            a.I++
        },
        XF = function(a) {
            return new Promise(function(b,
                c) {
                var d = new XMLHttpRequest,
                    e = 0,
                    f = a.g - a.j;
                d.addEventListener("load", function() {
                    Cl("lvlcl");
                    if (d.status >= 400) L(K.getInstance(), "lvlxes", d.status.toString()), a.A = d.status, c();
                    else {
                        var g = d.response;
                        g.byteLength < f && (a.state = 3);
                        var h = ZF(a, g, e);
                        e += h;
                        a.B && g.byteLength > 0 && a.l.wc(g, a.uri, 0, g.byteLength < f);
                        b()
                    }
                });
                d.addEventListener("timeout", function() {
                    Cl("lvlct");
                    a.A = d.status;
                    c()
                });
                d.addEventListener("error", function() {
                    Cl("lvlce");
                    a.A = d.status;
                    c()
                });
                d.addEventListener("progress", function() {
                    if (d.status >= 400) a.A =
                        d.status;
                    else {
                        var g = ZF(a, d.response, e);
                        e += g
                    }
                });
                d.responseType = "arraybuffer";
                d.open("get", a.uri.toString());
                d.send(null)
            })
        },
        ZF = function(a, b, c) {
            if (b === null) return 0;
            b = b.slice(c);
            a.j += b.byteLength;
            a.dispatchEvent({
                type: "progress",
                ud: b
            });
            return b.byteLength
        };
    TF.prototype.O = function() {
        this.B && this.l.Va() && this.l.close();
        pE.prototype.O.call(this)
    };
    var $F = {
        rj: 2E5,
        pj: 7E4,
        Ka: 3E5,
        oj: 5E3,
        xj: 5E3,
        qj: 6E3
    };

    function aG() {
        return !!window.MediaSource
    }

    function bG(a) {
        return [43, 44, 45].includes(a) && Kc ? !1 : tE[a] ? (a = AE(a), !!a && aG() && MediaSource.isTypeSupported(a)) : !1
    };
    var cG = function() {};
    cG.prototype.Sg = function(a, b, c) {
        return c === 0 ? 1E6 : b - a < 5E3 ? 3E5 : 0
    };
    var eG = function(a, b) {
            var c = this;
            this.g = a;
            this.index = b;
            this.j = [];
            this.g || Cl("msms_sbf" + this.index);
            this.g.addEventListener("updateend", function() {
                dG(c)
            });
            this.g.addEventListener("error", function() {
                Cl("msms_sbe" + c.index)
            })
        },
        dG = function(a) {
            if (a.j.length > 0 && !a.g.updating) {
                var b = a.j.shift();
                a.g.appendBuffer(b)
            }
        };
    var fG = function() {
        this.g = this.cache = null
    };
    l = fG.prototype;
    l.initialize = function() {
        var a = this;
        return window.caches.open("CACHE_VIDEO_CHUNK_PERSISTENT_STORAGE").then(function(b) {
            a.cache = b
        }, function(b) {
            L(K.getInstance(), "codf", b.message)
        })
    };
    l.Va = function() {
        return this.cache !== null
    };
    l.close = function() {
        return Promise.resolve()
    };
    l.Xb = function(a) {
        var b = this;
        a = gG(this, a);
        return this.Va() && a ? this.cache.match(a).then(function(c) {
            if (!c) return L(K.getInstance(), "cenf", "1"), Promise.resolve(null);
            L(K.getInstance(), "cef", "1");
            return c.arrayBuffer().then(function(d) {
                var e = NE(b.g),
                    f;
                (f = b.g.uri.g.get("range")) ? (f = f.split("-")[1], f = !f || isNaN(Number(f)) ? null : Number(f)) : f = null;
                e = e + d.byteLength - 1;
                f = f > e;
                return {
                    zb: ME(b.g, "itag"),
                    Fc: e,
                    wa: f,
                    video: d
                }
            })
        }, function(c) {
            L(K.getInstance(), "cgvf", c.message);
            return Promise.resolve(null)
        }) : (L(K.getInstance(),
            "cgvf", "1"), Promise.resolve(null))
    };
    l.wc = function(a, b) {
        b = gG(this, b);
        a = new Response(a);
        this.Va() && b ? this.cache.put(b, a).then(function() {
            L(K.getInstance(), "cavs", "1")
        }, function(c) {
            L(K.getInstance(), "cavf", c.message)
        }) : (L(K.getInstance(), "cavf", "1"), Promise.resolve())
    };
    var gG = function(a, b) {
        a.g = new KE(b);
        b = a.g.getId();
        var c = ME(a.g, "itag"),
            d = ME(a.g, "source"),
            e = ME(a.g, "lmt");
        a = ME(a.g, "range");
        if (b && c && d && a) return new Request("http://url/videoplayback?id=" + b + "&itag=" + c + "&source=" + d + "&lmt=" + e + "&range=" + a);
        L(K.getInstance(), "civp", "1");
        return null
    };
    var jG = function(a) {
        R.call(this);
        var b = this;
        this.l = a;
        this.g = [];
        this.B = null;
        this.C = 0;
        this.M = !1;
        this.G = 0;
        this.D = [];
        if (Km(mn)) {
            var c = null;
            QE() && (Km(on) ? c = XB(fG) : c = XB(MF));
            this.A = this.l.map(function(d) {
                return XB(CE, d.url, ZC(d.url) ? null : c)
            })
        } else this.A = this.l.map(function(d) {
            return XB(TF, d.url)
        });
        this.j = XB(MediaSource);
        this.I = function() {
            hG(b)
        };
        this.j.addEventListener("sourceopen", this.I);
        this.K = iG(this)
    };
    x(jG, R);
    var iG = function(a) {
            for (var b = [], c = 0; c < a.l.length; ++c) b.push(new cG);
            return b
        },
        hG = function(a) {
            Cl("msms_oso");
            for (var b = {
                    Aa: 0
                }; b.Aa < a.l.length; b = {
                    Yd: void 0,
                    Nc: void 0,
                    sb: void 0,
                    Aa: b.Aa,
                    Oc: void 0
                }, ++b.Aa) {
                var c = a.l[b.Aa];
                L(K.getInstance(), "msms_mime" + b.Aa, c.mimeType);
                L(K.getInstance(), "msms_cs" + b.Aa, c.Ka.toString());
                Km(nn) ? (b.Yd = new eG(a.j.addSourceBuffer(c.mimeType), b.Aa), b.Nc = a.A[b.Aa], b.Nc.listen("progress", function(d) {
                    return function(e) {
                        var f = d.Yd,
                            g = d.Nc;
                        e = e.ud;
                        e.byteLength !== 0 && (f.j.push(e), dG(f));
                        g.C() && (a.C++, a.C === a.g.length && kG(a))
                    }
                }(b)), b.Nc.listen("media_source_error", function(d) {
                    a.dispatchEvent(d)
                }), a.g.push(b.Yd.g)) : (b.sb = a.j.addSourceBuffer(c.mimeType), b.sb ? (b.Oc = a.A[b.Aa], Km(mn) && b.sb.addEventListener("updateend", function(d) {
                    return function() {
                        if (a.D.length > 0 && !d.sb.updating) {
                            var e = a.D.shift();
                            d.sb.appendBuffer(e)
                        }
                    }
                }(b)), b.sb.addEventListener("error", function(d) {
                    return function() {
                        Cl("msms_sbe" + d.Aa)
                    }
                }(b)), b.Oc.listen("progress", function(d) {
                    return function(e) {
                        var f = d.sb,
                            g = d.Oc;
                        e = e.ud;
                        e.byteLength !== 0 && (Km(mn) ? f.updating ? a.D.push(e) : f.appendBuffer(e) : f.appendBuffer(e));
                        g.C() && (a.C++, a.C === a.g.length && kG(a))
                    }
                }(b)), b.Oc.listen("media_source_error", function(d) {
                    a.dispatchEvent(d)
                }), a.g.push(b.sb)) : Cl("msms_sbf" + b.Aa))
            }
            L(K.getInstance(), "msms_ns", a.g.length.toString());
            a.M = !0;
            lG(a)
        },
        kG = function(a) {
            Promise.all(a.g.map(function(b) {
                return new Promise(function(c) {
                    b.updating ? b.addEventListener("updateend", function() {
                        c()
                    }) : c()
                })
            })).then(function() {
                a.j.endOfStream()
            })
        },
        lG = function(a) {
            if (a.M)
                for (var b =
                        0; b < a.l.length; ++b) {
                    var c = a.A[b],
                        d = a.g[b];
                    d = d.buffered.length === 0 ? 0 : d.buffered.end(0) * 1E3;
                    d = a.K[b].Sg(a.G, d, c.D());
                    d !== 0 && c.G(d)
                }
        },
        mG = function(a) {
            a.B = Mh(a.j).toString();
            return a.B
        };
    jG.prototype.O = function() {
        this.B && window.URL.revokeObjectURL(this.B);
        for (var a = v(this.A), b = a.next(); !b.done; b = a.next()) b.value.dispose();
        this.j.removeEventListener("sourceopen", this.I);
        R.prototype.O.call(this)
    };
    jG.prototype.hd = function(a) {
        this.K.filter(function() {
            return !1
        }).map(function(b) {
            return b
        }).forEach(function(b) {
            b.g = Object.assign({}, $F, b.g, a)
        })
    };
    var nG = RegExp("/pagead/conversion|/pagead/adview|/pagead/gen_204|/activeview?|csi.gstatic.com/csi|google.com/pagead/xsul|google.com/ads/measurement/l|googleads.g.doubleclick.net/pagead/ide_cookie|googleads.g.doubleclick.net/xbbe/pixel"),
        oG = RegExp("outstream.min.js"),
        pG = RegExp("outstream.min.css"),
        qG = RegExp("fonts.gstatic.com"),
        rG = RegExp("googlevideo.com/videoplayback|c.2mdn.net/videoplayback|gcdn.2mdn.net/videoplayback"),
        sG = RegExp("custom.elements.min.js");

    function tG(a, b) {
        var c = 0,
            d = 0,
            e = 0,
            f = 0,
            g = 0,
            h = 0,
            k = 0,
            n = !1,
            m = !1;
        if (typeof Pa("performance.getEntriesByType", y) === "function" && "transferSize" in y.PerformanceResourceTiming.prototype) {
            var p = y.performance.getEntriesByType("resource");
            p = v(p);
            for (var r = p.next(); !r.done; r = p.next()) r = r.value, nG.test(r.name) || (f += 1, r.transferSize ? (c += r.transferSize, r.encodedBodySize && r.transferSize < r.encodedBodySize && (h += 1, e += r.encodedBodySize, oG.test(r.name) && (n = !0), pG.test(r.name) && (m = !0)), rG.test(r.name) && (d += r.transferSize)) :
                r.transferSize === 0 && r.encodedBodySize === 0 ? sG.test(r.name) ? c += 6686 : qG.test(r.name) || (k += 1, Bl(K.getInstance(), {
                    event_name: "unmeasurable_asset",
                    resource_name: r.name,
                    encoded_body_size: r.encodedBodySize,
                    transfer_size: r.transferSize
                })) : (g += 1, e += r.encodedBodySize, oG.test(r.name) && (n = !0), pG.test(r.name) && (m = !0)));
            p = 0;
            if (a.duration) {
                for (r = 0; r < a.buffered.length; r++) p += a.buffered.end(r) - a.buffered.start(r);
                p = Math.min(p, a.duration)
            }
            Bl(K.getInstance(), {
                event_name: b,
                asset_bytes: c,
                video_bytes: d,
                cached_data_bytes: e,
                js_cached: n,
                css_cached: m,
                num_assets: f,
                num_assets_cached: g,
                num_assets_cache_validated: h,
                num_assets_unmeasurable: k,
                video_played_seconds: a.currentTime.toFixed(2),
                video_muted: a.muted,
                video_seconds_loaded: p.toFixed(2)
            })
        } else L(K.getInstance(), "error", "reporting_timing_not_supported")
    };
    var uG = function(a, b, c, d) {
        this.url = a;
        this.mimeType = b;
        this.Ka = c;
        this.g = d === void 0 ? null : d
    };

    function vG(a) {
        var b = K.getInstance(),
            c = a.getVideoPlaybackQuality && a.getVideoPlaybackQuality();
        c ? (a = a.currentTime, L(b, "vqdf", String(c.droppedVideoFrames)), L(b, "vqtf", String(c.totalVideoFrames)), L(b, "vqfr", String(Math.round(c.totalVideoFrames / a)))) : L(b, "vqu", "1")
    };
    var wG = function(a) {
        this.g = a
    };
    wG.prototype.toString = function() {
        return this.g
    };
    var xG = new wG("video_mute"),
        yG = new wG("video_caption_visibility");
    var zG = function(a) {
        Q.call(this);
        this.B = 1;
        this.l = [];
        this.o = 0;
        this.g = [];
        this.j = {};
        this.D = !!a
    };
    db(zG, Q);
    var AG = function(a, b, c) {
            var d = yG.toString(),
                e = a.j[d];
            e || (e = a.j[d] = []);
            var f = a.B;
            a.g[f] = d;
            a.g[f + 1] = b;
            a.g[f + 2] = c;
            a.B = f + 3;
            e.push(f)
        },
        BG = function(a, b, c) {
            var d = a.j[yG.toString()];
            if (d) {
                var e = a.g;
                (d = d.find(function(f) {
                    return e[f + 1] == b && e[f + 2] == c
                })) && a.A(d)
            }
        };
    zG.prototype.A = function(a) {
        var b = this.g[a];
        if (b) {
            var c = this.j[b];
            this.o != 0 ? (this.l.push(a), this.g[a + 1] = function() {}) : (c && ec(c, a), delete this.g[a], delete this.g[a + 1], delete this.g[a + 2])
        }
        return !!b
    };
    zG.prototype.C = function(a, b) {
        var c = this.j[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.D)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    CG(this.g[g + 1], this.g[g + 2], d)
                } else {
                    this.o++;
                    try {
                        for (e = 0, f = c.length; e < f && !this.Ea(); e++) g = c[e], this.g[g + 1].apply(this.g[g + 2], d)
                    } finally {
                        if (this.o--, this.l.length > 0 && this.o == 0)
                            for (; c = this.l.pop();) this.A(c)
                    }
                }
        }
    };
    var CG = function(a, b, c) {
        dw(function() {
            a.apply(b, c)
        })
    };
    zG.prototype.clear = function(a) {
        if (a) {
            var b = this.j[a];
            b && (b.forEach(this.A, this), delete this.j[a])
        } else this.g.length = 0, this.j = {}
    };
    zG.prototype.O = function() {
        zG.Ia.O.call(this);
        this.clear();
        this.l.length = 0
    };
    var DG = function(a) {
        Q.call(this);
        this.g = new zG(a);
        mr(this, this.g)
    };
    db(DG, Q);
    DG.prototype.clear = function(a) {
        this.g.clear(a !== void 0 ? a.toString() : void 0)
    };
    var EG = function(a) {
        a = a === void 0 ? null : a;
        Q.call(this);
        this.g = new KD(this);
        mr(this, this.g);
        this.Bb = a
    };
    x(EG, Q);
    var FG = function(a, b, c) {
        a.Bb && (AG(a.Bb.g, b, c), lr(a, function() {
            BG(a.Bb.g, b, c)
        }))
    };
    var GG = function(a, b) {
        EG.call(this, b);
        FG(this, function(c) {
            c ? a.g.mode = "showing" : a.nb()
        }, this)
    };
    x(GG, EG);
    var HG = function() {
        R.call(this);
        this.j = new KD(this);
        mr(this, this.j)
    };
    x(HG, R);
    var JG = function(a, b, c) {
        c = c === void 0 ? !0 : c;
        HG.call(this);
        a.setAttribute("crossorigin", "anonymous");
        var d = Di("TRACK");
        d.setAttribute("kind", "captions");
        d.setAttribute("src", b);
        d.setAttribute("default", "");
        a.appendChild(d);
        this.g = a.textTracks[0];
        IG(this);
        c ? this.g.mode = "showing" : this.nb()
    };
    x(JG, HG);
    var IG = function(a) {
        var b = a.g;
        b.addEventListener("cuechange", function() {
            for (var c = b.cues, d = 0; d < c.length; d++) {
                var e = c[d];
                e.align = "center";
                e.position = "auto"
            }
        }, {
            once: !0
        })
    };
    JG.prototype.nb = function() {
        this.g.mode = "hidden"
    };

    function KG(a, b) {
        if (typeof ReportingObserver !== "undefined") {
            var c = function(e) {
                    e = v(e);
                    for (var f = e.next(); !f.done; f = e.next()) f = f.value, a(f) && b(f)
                },
                d = new ReportingObserver(c, {
                    buffered: !0
                });
            y.addEventListener("pagehide", function() {
                c(d.takeRecords(), d);
                d.disconnect()
            });
            d.observe()
        }
    }

    function LG(a) {
        a = a === void 0 ? null : a;
        KG(function(b) {
            return b.body && b.body.id === "HeavyAdIntervention"
        }, function(b) {
            var c = b.body.message,
                d = K.getInstance();
            L(d, "ham", c);
            c.includes("CPU") ? L(d, "hacpu", "true") : c.includes("network") && L(d, "habytes", "true");
            a && a(b)
        })
    };
    var MG = "autoplay controls crossorigin demuxedaudiosrc demuxedvideosrc loop muted playsinline poster preload src webkit-playsinline x-webkit-airplay".split(" "),
        NG = "autoplay buffered controls crossOrigin currentSrc currentTime defaultMuted defaultPlaybackRate disablePictureInPicture disableRemotePlayback duration ended loop muted networkState onerror onwaitingforkey paused played playsinline poster preload preservesPitch mozPreservesPitch webkitPreservesPitch readyState seekable videoWidth videoHeight volume textTracks canPlayType captureStream getVideoPlaybackQuality load pause play requestPictureInPicture setSinkId oncanplay oncanplaythrough onload onplay onpause onended onfullscreenchange onfullscreenerror addEventListener dispatchEvent removeEventListener requestFullscreen".split(" "),
        OG = {
            childList: !0
        },
        PG = !RegExp("^\\s*class\\s*\\{\\s*\\}\\s*$").test(function() {}.toString()),
        QG = HTMLElement;
    PG && (QG = function() {
        var a = Object.getPrototypeOf(this).constructor;
        return y.Reflect.construct(HTMLElement, [], a)
    }, Object.setPrototypeOf(QG, HTMLElement), Object.setPrototypeOf(QG.prototype, HTMLElement.prototype));
    var RG = function(a) {
            if (a !== null) {
                a = v(a);
                for (var b = a.next(); !b.done; b = a.next())
                    if (b = b.value, b.nodeName === "TRACK".toString()) return b
            }
            return null
        },
        SG = function(a, b) {
            this.code = a;
            this.message = b === void 0 ? "" : b
        },
        TG = function(a) {
            SG.call(this, MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED, a === void 0 ? "" : a)
        };
    x(TG, SG);
    var XG = function(a, b) {
        b = b === void 0 ? !1 : b;
        var c = QG.call(this) || this;
        L(K.getInstance(), "ulv", "1");
        c.vh = b;
        c.sa = null;
        c.Xe = null;
        c.xe = null;
        c.T = Di("VIDEO");
        UG(c);
        c.Bb = a || new DG;
        VG(c);
        c.Bc = null;
        WG(c);
        c.attachShadow({
            mode: "open"
        });
        c.shadowRoot.appendChild(c.T);
        LG(function() {
            L(K.getInstance(), "has", c.src || c.ib);
            L(K.getInstance(), "hat", String(c.T.currentTime))
        });
        c.dd = !1;
        c.bf = !1;
        c.hc = null;
        c.od = null;
        c.wh = !1;
        c.hf = !1;
        c.kj = null;
        c.Sb = null;
        return c
    };
    x(XG, QG);
    var YG = function(a) {
        a.T.load();
        Km(un) && a.T.dispatchEvent(new Event("canplaythrough"))
    };
    XG.prototype.attributeChangedCallback = function(a, b, c) {
        switch (a) {
            case "src":
                ZG(this, c);
                break;
            case "demuxedaudiosrc":
            case "demuxedvideosrc":
                $G(this);
                break;
            case "muted":
                this.T[a] = c === "" ? !0 : !!c;
                aH(this, a, c);
                break;
            default:
                aH(this, a, c)
        }
    };
    XG.prototype.hd = function(a) {
        this.Sb = a;
        var b;
        (b = this.sa) == null || b.hd(a)
    };
    var aH = function(a, b, c) {
            c !== a.T.getAttribute(b) && (c === null ? a.T.removeAttribute(b) : a.T.setAttribute(b, c))
        },
        bH = function(a) {
            a.sa && (a.T.removeEventListener("timeupdate", a.hc), a.sa.dispose(), a.sa = null)
        },
        cH = function(a, b) {
            a.xe = b;
            a.T.dispatchEvent(new Event("error"))
        },
        UG = function(a) {
            dH(a);
            eH(a);
            a.T.addEventListener("loadedmetadata", function() {
                a.od = lD(a);
                a.od.then(function(b) {
                    var c = a.T.videoWidth;
                    var d = a.T.videoHeight,
                        e = b.width,
                        f = b.height;
                    c > 0 && d > 0 && e > 0 && f > 0 ? (b = b.width / b.height, c /= d, c = Math.min(c, b) / Math.max(c,
                        b) >= .97 ? "cover" : "contain") : c = null;
                    c !== null && mq(a.T, {
                        "object-fit": c
                    })
                })
            });
            a.T.addEventListener("play", function() {
                a.bf || (tG(a.T, "first_play"), a.bf = !0)
            });
            a.T.addEventListener("pause", function() {
                a.dd || (tG(a.T, "first_pause"), vG(a.T), a.dd = !0)
            });
            Iv(y, "pagehide", function() {
                a.dd || (tG(a.T, "first_pause"), vG(a.T), a.dd = !0)
            });
            a.T.addEventListener("stalled", function() {
                L(K.getInstance(), "ves", "1")
            });
            (new wD(a.T)).listen("playbackStalled", function() {
                return L(K.getInstance(), "pbs", "1")
            });
            a.T.addEventListener("media_source_error",
                function(b) {
                    bH(a);
                    b = b.detail;
                    cH(a, new SG(b.code, b.message))
                });
            fH(a)
        },
        WG = function(a) {
            var b = RG(a.childNodes);
            b && gH(a, b);
            a.Bc === null && hH(a)
        },
        hH = function(a) {
            if (y.MutationObserver) {
                var b = new MutationObserver(function(c) {
                    c = v(c);
                    for (var d = c.next(); !d.done; d = c.next())
                        if (d = d.value, d.type === "childList" && (d = RG(d.addedNodes))) {
                            gH(a, d);
                            b.disconnect();
                            break
                        }
                });
                b.observe(a, OG)
            }
        },
        VG = function(a) {
            a.T.addEventListener("volumechange", function() {
                a.Bb.g.C(xG.toString(), a.T.muted);
                a.vh || a.Bb.g.C(yG.toString(), a.T.muted)
            })
        },
        gH = function(a, b) {
            if (a.Bc === null && b.hasAttribute("src")) {
                var c = b.getAttribute("src");
                a.Bc = new JG(a.T, c, b.hasAttribute("default"));
                new GG(a.Bc, a.Bb);
                c.includes("kind=asr") && L(K.getInstance(), "act", "1")
            }
        },
        ZG = function(a, b) {
            if (b !== a.Xe) {
                a.Xe = b;
                a.wh && b && ZC(b) && (b = $C(b));
                var c = b ? zE(b) : null,
                    d = !!c && bG(c);
                L(K.getInstance(), "umsem", d ? "1" : "0");
                d ? (b = XB(uG, b, AE(c), rE[c] * 1E3, null), a.sa = XB(jG, [b]), a.Sb && a.sa.hd(a.Sb), a.sa.listen("media_source_error", function(e) {
                        e = BE("media_source_error", e.detail);
                        a.T.dispatchEvent(e)
                    }),
                    a.hc = function() {
                        var e = a.sa;
                        e.G = a.T.currentTime * 1E3;
                        lG(e)
                    }, a.T.addEventListener("timeupdate", a.hc), aH(a, "src", mG(a.sa))) : (bH(a), aH(a, "src", b));
                a.hf || YG(a)
            }
        },
        $G = function(a) {
            a.src && cH(a, new SG(MediaError.MEDIA_ERR_ABORTED, "Setting demuxed src after src is already set."));
            if (!a.wb && !a.ib && a.sa) bH(a), aH(a, "src", null), YG(a);
            else if (a.wb && a.ib) {
                var b = zE(ZC(a.ib) ? $C(a.ib) : a.ib),
                    c = zE(ZC(a.wb) ? $C(a.wb) : a.wb);
                if (b && bG(b))
                    if (c && bG(c)) {
                        var d = !!b && bG(b) && !!c && bG(c);
                        L(K.getInstance(), "umsed", d ? "1" : "0");
                        b = XB(uG,
                            a.ib, AE(b), -1, null);
                        c = XB(uG, a.wb, AE(c), -1, null);
                        a.sa = XB(jG, [b, c]);
                        a.Sb && a.sa.hd(a.Sb);
                        a.sa.listen("media_source_error", function(e) {
                            e = BE("media_source_error", e.detail);
                            a.T.dispatchEvent(e)
                        });
                        a.hc = function() {
                            var e = a.sa;
                            e.G = a.T.currentTime * 1E3;
                            lG(e)
                        };
                        a.T.addEventListener("timeupdate", a.hc);
                        aH(a, "src", mG(a.sa));
                        a.hf || YG(a)
                    } else cH(a, new TG('Audio itag "' + c + '" not supported.'));
                else cH(a, new TG('Video itag "' + b + '" not supported.'))
            }
        },
        dH = function(a) {
            for (var b = v(NG), c = b.next(), d = {}; !c.done; d = {
                    ab: void 0,
                    getValue: void 0
                }, c = b.next()) d.ab = c.value, d.ab in a.T && (typeof a.T[d.ab] === "function" ? (d.getValue = a.T[d.ab].bind(a.T), Object.defineProperty(a, d.ab, {
                set: function(e) {
                    return function(f) {
                        a.T[e.ab] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return e.getValue
                    }
                }(d)
            })) : Object.defineProperty(a, d.ab, {
                set: function(e) {
                    return function(f) {
                        a.T[e.ab] = f
                    }
                }(d),
                get: function(e) {
                    return function() {
                        return a.T[e.ab]
                    }
                }(d)
            }))
        },
        eH = function(a) {
            Object.defineProperty(a, "error", {
                set: function() {},
                get: function() {
                    return a.T.error ? a.T.error :
                        a.xe
                }
            })
        },
        fH = function(a) {
            a.T.style.width = tq();
            a.T.style.height = tq()
        };
    XG.prototype.disconnectedCallback = function() {
        this.od && mD(this.od);
        QG.prototype.disconnectedCallback && QG.prototype.disconnectedCallback.call(this)
    };
    ea.Object.defineProperties(XG.prototype, {
        wb: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedaudiosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedaudiosrc")
            }
        },
        ib: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("demuxedvideosrc", a)
            },
            get: function() {
                return this.getAttribute("demuxedvideosrc")
            }
        },
        src: {
            configurable: !0,
            enumerable: !0,
            set: function(a) {
                this.setAttribute("src", a)
            },
            get: function() {
                return this.getAttribute("src")
            }
        }
    });
    ea.Object.defineProperties(XG, {
        observedAttributes: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return MG
            }
        }
    });
    y.customElements && (y.customElements.get("lima-video") || y.customElements.define("lima-video", XG));

    function iH() {
        var a = XB(MF);
        a.initialize().then(function() {
            var b = BE("initialized");
            a.dispatchEvent(b)
        });
        return a
    }
    var kH = function(a, b, c, d, e) {
        Q.call(this);
        this.G = a;
        this.j = c;
        this.o = e;
        this.Z = this.U = this.Eb = this.D = this.l = this.Sa = 0;
        this.C = [];
        this.M = !1;
        this.aa = this.ha = this.ga = null;
        this.ya = !1;
        this.Fb = this.K = this.A = this.Ja = this.Ra = null;
        this.wa = !1;
        this.I = new wC(b.url);
        this.Ka = b.Ka;
        this.la = d;
        (this.P = b.g) || this.I.g.remove("alr");
        L(K.getInstance(), "sl_dv" + this.o, (this.P !== null).toString());
        this.V = !this.P;
        this.g = new XMLHttpRequest;
        this.W = .1;
        if (this.B = QE() && !ZC(this.I)) this.A = iH(), mr(this, this.A);
        jH(this)
    };
    x(kH, Q);
    var lH = function(a, b) {
            b = BE("media_source_error", b);
            a.G.dispatchEvent(b)
        },
        mH = function(a, b) {
            lH(a, {
                code: a.l > 1 ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                message: b
            })
        },
        jH = function(a) {
            a.ga = function() {
                nH(a);
                if (a.V) {
                    var b = a.g.responseText;
                    a.M = !b || b.length < a.Ka;
                    a.U = 0;
                    Cl("sl_cc" + a.o + "_" + a.l);
                    a.D++;
                    oH(a)
                }
            };
            a.ha = function() {
                nH(a)
            };
            a.aa = function() {
                Cl("sl_ec" + a.o + "_" + a.l);
                mH(a, "Failed to load chunk " + a.l + " for stream " + a.o)
            };
            a.g.addEventListener("load", a.ga);
            a.g.addEventListener("progress",
                a.ha);
            a.g.addEventListener("error", a.aa);
            a.j.addEventListener("updateend", function() {
                a.j.buffered.length && (a.Eb = a.j.buffered.end(0), a.B ? a.wa && !a.j.updating && a.l === a.D && (Cl("sl_lc" + a.o), a.la()) : a.M && !a.j.updating && a.l === a.D && (Cl("sl_lc" + a.o), a.la()));
                !a.ya && a.G.buffered.length > 1 && (L(K.getInstance(), "dbr", "1"), a.ya = !0)
            });
            a.j.addEventListener("update", function() {
                a.C.length && !a.j.updating && a.j.appendBuffer(a.C.shift())
            });
            a.j.addEventListener("error", function() {
                Cl("msb_err" + a.o);
                lH(a, {
                    code: MediaError.MEDIA_ERR_DECODE,
                    message: "Error on SourceBuffer " + a.o
                })
            });
            a.B ? (a.A.Va() ? pH(a) : a.Ra = Iv(a.A, "initialized", function() {
                pH(a)
            }), a.Ja = Iv(a.A, "get_video_succeeded", function() {
                oH(a)
            })) : pH(a)
        },
        rH = function(a) {
            Cl("sl_rc" + a.o + "_" + a.l);
            var b = qH(a);
            a.g.open("get", b);
            a.g.overrideMimeType("text/plain; charset=x-user-defined");
            a.g.send(null);
            a.B && (a.K = null, a.Fb = b)
        },
        nH = function(a) {
            if (a.g.status >= 400) mH(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + " for stream " + a.o);
            else {
                if (!a.V) {
                    var b = a.g.getResponseHeader("content-type");
                    if (b && b.indexOf("text/plain") >= 0) {
                        a.g.readyState === XMLHttpRequest.DONE && (a.I = new wC(a.g.response), a.l = 0, a.D = 0, a.Sa++, pH(a));
                        return
                    }
                    a.V = !0;
                    Cl("sl_redc" + a.o);
                    L(K.getInstance(), "sl_tr" + a.o, a.Sa.toString())
                }
                a.I.g.remove("alr");
                if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE) b = sH(a, a.U), a.U = a.g.response.length, a.Z += b.byteLength, tH(a, b);
                if (a.B && a.g.readyState === XMLHttpRequest.DONE && (b = sH(a, 0), b.byteLength > 0)) {
                    var c = a.g.responseText;
                    a.wa = !c || c.length < a.Ka;
                    a.A.wc(b, new wC(a.Fb),
                        0, a.wa)
                }
            }
        },
        tH = function(a, b) {
            b.byteLength > 0 && (a.j.updating || a.C.length ? a.C.push(b) : a.j.appendBuffer(b))
        },
        sH = function(a, b) {
            a = a.g.response;
            for (var c = new Uint8Array(a.length - b), d = 0; d < c.length; d++) c[d] = a.charCodeAt(d + b) & 255;
            return c.buffer
        },
        oH = function(a) {
            var b = aD;
            b !== -1 && b < a.Z + a.Ka ? (a.G.pause(), aD = -1, b = !1) : (b = a.D === a.l && !a.j.updating && !a.C.length, b = a.B ? !a.wa && b && a.G.currentTime >= a.W : !a.M && b && a.G.currentTime >= a.W);
            b && (a.W = a.Eb + .1, pH(a))
        },
        qH = function(a) {
            var b = a.B && a.K ? a.K + 1 : a.l * a.Ka;
            return KC(a.I, "range",
                b + "-" + (b + a.Ka - 1)).toString()
        },
        pH = function(a) {
            if (a.B) {
                var b = new wC(qH(a));
                a.A.Xb(b).then(function(c) {
                    c ? (a.K = Number(c.Fc), a.wa = c.wa, tH(a, c.video), c = BE("get_video_succeeded"), a.A.dispatchEvent(c), a.D++) : rH(a);
                    a.l++
                })
            } else rH(a), a.l++
        };
    kH.prototype.O = function() {
        this.B && this.A.Va() && this.A.close();
        this.g.removeEventListener("load", this.ga);
        this.g.removeEventListener("progress", this.ha);
        this.g.removeEventListener("error", this.aa);
        Qv(this.Ra);
        Qv(this.Ja);
        Q.prototype.O.call(this)
    };
    var vH = function(a, b) {
        Q.call(this);
        var c = this;
        this.A = a;
        this.G = b;
        this.g = new MediaSource;
        this.D = [];
        this.l = [];
        this.j = this.o = null;
        this.B = !1;
        this.C = function() {
            uH(c)
        };
        this.g.addEventListener("sourceopen", this.C)
    };
    x(vH, Q);
    var wH = function(a) {
            a.o && a.A.removeEventListener("timeupdate", a.o)
        },
        uH = function(a) {
            Cl("msmsw_oso");
            a.o = function() {
                if (!a.B)
                    for (var e = v(a.l), f = e.next(); !f.done; f = e.next()) oH(f.value)
            };
            a.A.addEventListener("timeupdate", a.o);
            for (var b = 0; b < a.G.length; b++) {
                var c = a.G[b];
                L(K.getInstance(), "msmsw_mime" + b, c.mimeType);
                L(K.getInstance(), "msmsw_cs" + b, c.Ka.toString());
                var d = a.g.addSourceBuffer(c.mimeType);
                d ? (a.D.push(d), c = XB(kH, a.A, c, d, function() {
                    a: if (!a.B) {
                        for (var e = v(a.l), f = e.next(); !f.done; f = e.next())
                            if (f = f.value,
                                f.B ? !f.wa || f.j.updating || f.C.length : !f.M || f.j.updating || f.C.length) break a;
                        a.g.endOfStream();
                        a.B = !0;
                        wH(a)
                    }
                }, b), a.l.push(c)) : Cl("msmsw_sbf" + b)
            }
            L(K.getInstance(), "msmsw_ns", a.D.length.toString())
        };
    vH.prototype.O = function() {
        this.j && window.URL.revokeObjectURL(this.j);
        for (var a = v(this.l), b = a.next(); !b.done; b = a.next()) b.value.dispose();
        wH(this);
        this.g.removeEventListener("sourceopen", this.C);
        Q.prototype.O.call(this)
    };
    RegExp.prototype.hasOwnProperty("sticky");
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var xH = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        yH = function() {
            for (var a = Array(36), b = 0, c, d = 0; d < 36; d++) d == 8 || d == 13 || d == 18 || d == 23 ? a[d] = "-" : d == 14 ? a[d] = "4" : (b <= 2 && (b = 33554432 + Math.random() * 16777216 | 0), c = b & 15, b >>= 4, a[d] = xH[d == 19 ? c & 3 | 8 : c]);
            return a.join("")
        };
    var AH = function(a) {
        wC.call(this, a);
        this.C = new Map;
        a = this.l;
        var b = a.indexOf(";"),
            c = null;
        b >= 0 ? (this.l = a.substring(0, b), c = a.substring(b + 1)) : this.l = a;
        zH(this, c)
    };
    x(AH, wC);
    AH.prototype.toString = function() {
        return BH(this, wC.prototype.toString.call(this))
    };
    AH.prototype.D = function() {
        return ""
    };
    var zH = function(a, b) {
            tb(mi(b)) || b.split(";").forEach(function(c) {
                var d = c.indexOf("=");
                if (!(d <= 0)) {
                    var e = ji(c.substring(0, d));
                    c = ji(c.substring(d + 1));
                    d = a.C.get(e);
                    d != null ? d.includes(c) || d.push(c) : d = [mi(c)];
                    a.C.set(e, d)
                }
            }, a)
        },
        CH = function(a) {
            if (tb(mi("ord"))) return null;
            a = a.C.get("ord");
            return a != null ? a : null
        },
        DH = function(a, b) {
            tb(mi("ord")) || (b = b.map(mi), a.C.set("ord", b))
        },
        BH = function(a, b) {
            b = [mi(b)];
            b.push.apply(b, ia(EH(a)));
            return b.join(";")
        },
        EH = function(a) {
            var b = CH(a);
            b == null ? b = [mi(Date.now())] : tb(mi("ord")) ||
                a.C.delete("ord");
            var c = [];
            a.C.forEach(function(d, e) {
                d.forEach(function(f) {
                    c.push(e + "=" + f)
                })
            });
            c.push("ord=" + b[0]);
            DH(a, b);
            return c
        };
    AH.prototype.G = function() {
        return new AH(this.toString())
    };
    var S = {
        DEPRECATED_ERROR_CODE: -1,
        VAST_MALFORMED_RESPONSE: 100,
        VAST_SCHEMA_VALIDATION_ERROR: 101,
        VAST_UNSUPPORTED_VERSION: 102,
        VAST_TRAFFICKING_ERROR: 200,
        VAST_UNEXPECTED_LINEARITY: 201,
        VAST_UNEXPECTED_DURATION_ERROR: 202,
        VAST_WRAPPER_ERROR: 300,
        VAST_LOAD_TIMEOUT: 301,
        VAST_TOO_MANY_REDIRECTS: 302,
        VAST_NO_ADS_AFTER_WRAPPER: 303,
        VIDEO_PLAY_ERROR: 400,
        VAST_MEDIA_LOAD_TIMEOUT: 402,
        VAST_LINEAR_ASSET_MISMATCH: 403,
        VAST_PROBLEM_DISPLAYING_MEDIA_FILE: 405,
        OVERLAY_AD_PLAYING_FAILED: 500,
        NONLINEAR_DIMENSIONS_ERROR: 501,
        OVERLAY_AD_LOADING_FAILED: 502,
        VAST_NONLINEAR_ASSET_MISMATCH: 503,
        COMPANION_REQUIRED_ERROR: 602,
        COMPANION_AD_LOADING_FAILED: 603,
        UNKNOWN_ERROR: 900,
        VPAID_ERROR: 901,
        FAILED_TO_REQUEST_ADS: 1005,
        VAST_ASSET_NOT_FOUND: 1007,
        VAST_EMPTY_RESPONSE: 1009,
        UNKNOWN_AD_RESPONSE: 1010,
        UNSUPPORTED_LOCALE: 1011,
        ADS_REQUEST_NETWORK_ERROR: 1012,
        INVALID_AD_TAG: 1013,
        PROTECTED_AUDIENCE_API_ERROR: 1014,
        STREAM_INITIALIZATION_FAILED: 1020,
        ASSET_FALLBACK_FAILED: 1021,
        UNSUPPORTED_URL: 1022,
        INVALID_ARGUMENTS: 1101,
        NATIVE_MESSAGE_ERROR: 1204,
        AUTOPLAY_DISALLOWED: 1205,
        CONSENT_MANAGEMENT_PROVIDER_NOT_READY: 1300,
        Oi: 2002
    };
    S[-1] = "DEPRECATED_ERROR_CODE";
    S[100] = "VAST_MALFORMED_RESPONSE";
    S[101] = "VAST_SCHEMA_VALIDATION_ERROR";
    S[102] = "VAST_UNSUPPORTED_VERSION";
    S[200] = "VAST_TRAFFICKING_ERROR";
    S[201] = "VAST_UNEXPECTED_LINEARITY";
    S[202] = "VAST_UNEXPECTED_DURATION_ERROR";
    S[300] = "VAST_WRAPPER_ERROR";
    S[301] = "VAST_LOAD_TIMEOUT";
    S[302] = "VAST_TOO_MANY_REDIRECTS";
    S[303] = "VAST_NO_ADS_AFTER_WRAPPER";
    S[400] = "VIDEO_PLAY_ERROR";
    S[402] = "VAST_MEDIA_LOAD_TIMEOUT";
    S[403] = "VAST_LINEAR_ASSET_MISMATCH";
    S[405] = "VAST_PROBLEM_DISPLAYING_MEDIA_FILE";
    S[500] = "OVERLAY_AD_PLAYING_FAILED";
    S[501] = "NONLINEAR_DIMENSIONS_ERROR";
    S[502] = "OVERLAY_AD_LOADING_FAILED";
    S[503] = "VAST_NONLINEAR_ASSET_MISMATCH";
    S[602] = "COMPANION_REQUIRED_ERROR";
    S[603] = "COMPANION_AD_LOADING_FAILED";
    S[900] = "UNKNOWN_ERROR";
    S[901] = "VPAID_ERROR";
    S[1005] = "FAILED_TO_REQUEST_ADS";
    S[1007] = "VAST_ASSET_NOT_FOUND";
    S[1009] = "VAST_EMPTY_RESPONSE";
    S[1010] = "UNKNOWN_AD_RESPONSE";
    S[1011] = "UNSUPPORTED_LOCALE";
    S[1012] = "ADS_REQUEST_NETWORK_ERROR";
    S[1013] = "INVALID_AD_TAG";
    S[1014] = "PROTECTED_AUDIENCE_API_ERROR";
    S[1020] = "STREAM_INITIALIZATION_FAILED";
    S[1021] = "ASSET_FALLBACK_FAILED";
    S[1022] = "UNSUPPORTED_URL";
    S[1101] = "INVALID_ARGUMENTS";
    S[1204] = "NATIVE_MESSAGE_ERROR";
    S[1205] = "AUTOPLAY_DISALLOWED";
    S[1300] = "CONSENT_MANAGEMENT_PROVIDER_NOT_READY";
    S[2002] = "SUPPORTED_ADS_NOT_FOUND";
    var FH = function(a, b, c) {
        var d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.type = a;
        this.errorMessage = b;
        this.errorCode = c;
        this.ad = this.g = null
    };
    x(FH, Error);
    l = FH.prototype;
    l.getAd = function() {
        return this.ad
    };
    l.getInnerError = function() {
        return this.g
    };
    l.getMessage = function() {
        return this.errorMessage
    };
    l.getErrorCode = function() {
        return this.errorCode
    };
    l.getVastErrorCode = function() {
        return this.errorCode < 1E3 ? this.errorCode : 900
    };
    l.getType = function() {
        return this.type
    };
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (this.getInnerError() != null ? " Caused by: " + this.getInnerError() : "")
    };
    var GH = ha(["https://imasdk.googleapis.com/js/sdkloader/car.js"]);
    ai(GH);

    function HH(a) {
        return a ? (a = /\/(\d+)(?:,\d+){0,2}\//.exec(a)) && a.length === 2 ? a[1] : null : null
    }

    function IH(a) {
        if (a === "") return null;
        a = new wC(a);
        var b = a.g.get("slotname") || a.g.get("iu");
        if (!(b = b ? HH(b) : null)) {
            var c;
            b = (a = (c = a.g.get("client")) != null ? c : "") ? a : null
        }
        return b
    }

    function JH(a, b) {
        try {
            var c = new URL(a);
            return c.searchParams.get("slotname") || c.searchParams.get("iu") || ""
        } catch (d) {
            b == null || b(d)
        }
        return ""
    };
    var KH = function(a) {
        var b = {};
        b = (b.IABUSPrivacy_String = "uspString", b.IABTCF_gdprApplies = "gdprApplies", b.IABTCF_TCString = "tcString", b.IABTCF_AddtlConsent = "addtlConsent", b.IABGPP_HDR_GppString = "gppString", b.IABGPP_GppSID = "gppSid", b);
        for (var c in b) a[c] != null && (a[b[c]] = a[c], delete a[c]);
        c = a.uspString;
        this.uspString = typeof c === "string" ? c : "";
        c = a.gdprApplies;
        this.j = typeof c === "boolean" ? c ? "1" : "0" : typeof c !== "number" || c !== 1 && c !== 0 ? typeof c !== "string" || c !== "1" && c !== "0" ? "" : c === "1" ? "1" : "0" : c === 1 ? "1" : "0";
        c = a.tcString;
        this.g = typeof c === "string" ? c : "";
        /^[\.\w_-]*$/.test(this.g) || (this.g = encodeURIComponent(this.g));
        c = a.gppString;
        this.gppString = typeof c === "string" ? c : "";
        a = a.gppSid;
        this.l = typeof a === "string" ? a : ""
    };
    var LH = function(a) {
            this.g = a
        },
        MH = function(a, b) {
            return th(a.g, b) && (a = a.g[b], typeof a === "boolean") ? a : !1
        },
        NH = function(a) {
            return th(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration, typeof a === "number") ? a : NaN
        },
        OH = function(a) {
            if (th(a.g, "forceExperimentIds")) {
                a = a.g.forceExperimentIds;
                var b = [],
                    c = 0;
                Array.isArray(a) && a.forEach(function(d) {
                    typeof d === "number" && (b[c++] = d)
                });
                return b
            }
            return null
        };
    var T = function() {
            this.G = "always";
            this.U = 4;
            this.L = null;
            this.A = 1;
            this.g = 0;
            this.o = !0;
            this.locale = "en";
            this.l = null;
            this.j = !1;
            this.Z = this.W = "";
            this.C = null;
            this.aa = this.V = -1;
            this.B = "";
            this.M = !1;
            this.K = !0;
            this.D = yH();
            this.P = {};
            this.J = "";
            this.I = 0;
            try {
                this.ga = cp()[0]
            } catch (a) {}
        },
        PH = function(a) {
            a = mi(a);
            tb(a) || (a = a.substring(0, 20));
            return a
        };
    l = T.prototype;
    l.setCompanionBackfill = function(a) {
        this.G = a
    };
    l.getCompanionBackfill = function() {
        return this.G
    };
    l.setNumRedirects = function(a) {
        this.U = a
    };
    l.getNumRedirects = function() {
        return this.U
    };
    l.setPpid = function(a) {
        this.L = a
    };
    l.getPpid = function() {
        return this.L
    };
    l.setVpaidAllowed = function(a) {
        typeof a === "boolean" && (this.A = a ? 1 : 0)
    };
    l.setVpaidMode = function(a) {
        this.A = a
    };
    l.wg = function() {
        return this.A
    };
    l.setAutoPlayAdBreaks = function(a) {
        this.o = a
    };
    l.Ig = function() {
        return this.o
    };
    l.jh = function(a) {
        this.j = a
    };
    l.vg = function() {
        return this.j
    };
    l.setLocale = function(a) {
        if (a = ED(a)) this.locale = a
    };
    l.getLocale = function() {
        return this.locale
    };
    l.setPlayerType = function(a) {
        this.W = PH(a)
    };
    l.getPlayerType = function() {
        return this.W
    };
    l.setPlayerVersion = function(a) {
        this.Z = PH(a)
    };
    l.getPlayerVersion = function() {
        return this.Z
    };
    var QH = function(a) {
        if (a.C == null) {
            var b = {};
            var c = (new wC(Ai().location.href)).g;
            if (PC(c, "tcnfp")) try {
                b = JSON.parse(c.get("tcnfp"))
            } catch (d) {}
            a.C = new LH(b)
        }
        return a.C
    };
    l = T.prototype;
    l.kh = function(a) {
        this.V = a
    };
    l.lh = function(a) {
        this.aa = a
    };
    l.setDisableCustomPlaybackForIOS10Plus = function(a) {
        this.M = a
    };
    l.getDisableCustomPlaybackForIOS10Plus = function() {
        return this.M
    };
    l.isCookiesEnabled = function() {
        return this.K
    };
    l.setCookiesEnabled = function(a) {
        a != null && (this.K = a)
    };
    l.setSessionId = function(a) {
        this.D = a
    };
    l.ih = function() {};
    l.ug = function() {
        return !0
    };
    l.setFeatureFlags = function(a) {
        this.P = a
    };
    l.getFeatureFlags = function() {
        return this.P
    };
    var RH = function(a, b) {
        b = b === void 0 ? null : b;
        var c = {};
        b != null && (c.activeViewPushUpdates = b);
        c.activityMonitorMode = a.g;
        c.adsToken = a.B;
        c.autoPlayAdBreaks = a.o;
        c.companionBackfill = a.getCompanionBackfill();
        c.cookiesEnabled = a.isCookiesEnabled();
        c.disableCustomPlaybackForIOS10Plus = a.getDisableCustomPlaybackForIOS10Plus();
        c.engagementDetection = !0;
        c.isFunctionalTest = !1;
        c.isVpaidAdapter = a.j;
        c["1pJar"] = "";
        c.numRedirects = a.getNumRedirects();
        c.pageCorrelator = a.V;
        c.persistentStateCorrelator = il();
        c.playerType = a.getPlayerType();
        c.playerVersion = a.getPlayerVersion();
        c.ppid = a.getPpid();
        c.privacyControls = "";
        c.reportMediaRequests = !1;
        c.sessionId = a.D;
        c.streamCorrelator = a.aa;
        c.testingConfig = QH(a).g;
        c.urlSignals = a.ga;
        c.vpaidMode = a.A;
        c.featureFlags = a.getFeatureFlags();
        c.cookieDeprecationLabel = a.J;
        c.cookieDeprecationLabelStatus = a.I;
        return c
    };
    T.prototype.getFeatureFlags = T.prototype.getFeatureFlags;
    T.prototype.setFeatureFlags = T.prototype.setFeatureFlags;
    T.prototype.getDisableFlashAds = T.prototype.ug;
    T.prototype.setDisableFlashAds = T.prototype.ih;
    T.prototype.setSessionId = T.prototype.setSessionId;
    T.prototype.setCookiesEnabled = T.prototype.setCookiesEnabled;
    T.prototype.isCookiesEnabled = T.prototype.isCookiesEnabled;
    T.prototype.getDisableCustomPlaybackForIOS10Plus = T.prototype.getDisableCustomPlaybackForIOS10Plus;
    T.prototype.setDisableCustomPlaybackForIOS10Plus = T.prototype.setDisableCustomPlaybackForIOS10Plus;
    T.prototype.setStreamCorrelator = T.prototype.lh;
    T.prototype.setPageCorrelator = T.prototype.kh;
    T.prototype.getPlayerVersion = T.prototype.getPlayerVersion;
    T.prototype.setPlayerVersion = T.prototype.setPlayerVersion;
    T.prototype.getPlayerType = T.prototype.getPlayerType;
    T.prototype.setPlayerType = T.prototype.setPlayerType;
    T.prototype.getLocale = T.prototype.getLocale;
    T.prototype.setLocale = T.prototype.setLocale;
    T.prototype.getIsVpaidAdapter = T.prototype.vg;
    T.prototype.setIsVpaidAdapter = T.prototype.jh;
    T.prototype.isAutoPlayAdBreaks = T.prototype.Ig;
    T.prototype.setAutoPlayAdBreaks = T.prototype.setAutoPlayAdBreaks;
    T.prototype.getVpaidMode = T.prototype.wg;
    T.prototype.setVpaidMode = T.prototype.setVpaidMode;
    T.prototype.setVpaidAllowed = T.prototype.setVpaidAllowed;
    T.prototype.getPpid = T.prototype.getPpid;
    T.prototype.setPpid = T.prototype.setPpid;
    T.prototype.getNumRedirects = T.prototype.getNumRedirects;
    T.prototype.setNumRedirects = T.prototype.setNumRedirects;
    T.prototype.getCompanionBackfill = T.prototype.getCompanionBackfill;
    T.prototype.setCompanionBackfill = T.prototype.setCompanionBackfill;
    var SH = new T;
    var TH = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Ba({
                    De: c != null ? c : void 0,
                    Ge: d ? void 0 : 2
                })
            })
        },
        UH = {
            Nd: function(a) {
                return a.Ba
            },
            Pc: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            fc: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    De: (c = b.returnValue) != null ? c : void 0,
                    Ge: b.success ? void 0 : 2
                })
            }
        };

    function VH(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Ve: b.__uspapiReturn.callId
        }
    }
    var WH = function(a, b) {
        b = b === void 0 ? {} : b;
        Q.call(this);
        var c;
        this.timeoutMs = (c = b.timeoutMs) != null ? c : 500;
        this.caller = new YB(a, "__uspapiLocator", function(d) {
            return typeof d.__uspapi === "function"
        }, VH);
        this.caller.A.set("getDataWithCallback", TH);
        this.caller.o.set("getDataWithCallback", UH)
    };
    x(WH, Q);
    WH.prototype.O = function() {
        this.caller.dispose();
        Q.prototype.O.call(this)
    };
    var XH = function(a, b) {
        var c = {};
        if (ZB(a.caller)) {
            var d = gh(function() {
                b(c)
            });
            aC(a.caller, "getDataWithCallback", {
                Ba: function(e) {
                    e.Ge || (c = e.De);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var YH = function(a) {
        this.F = B(a)
    };
    x(YH, H);
    YH.ba = [10];

    function ZH(a) {
        var b = {};
        (new wC(a)).g.forEach(function(c, d) {
            b[d] = c
        });
        return b
    }

    function $H(a) {
        return a === "1" || a === "true"
    }
    var aI = function(a, b, c, d) {
            b = b === void 0 ? {} : b;
            c = c === void 0 ? {} : c;
            this.o = d === void 0 ? !1 : d;
            this.j = a === void 0 ? !1 : a;
            a = {};
            b = v(Object.entries(b));
            for (d = b.next(); !d.done; d = b.next()) {
                var e = v(d.value);
                d = e.next().value;
                e = e.next().value;
                e != null && (a[d] = String(e))
            }
            this.l = a;
            this.g = new KH(c)
        },
        bI = function(a, b) {
            var c = !1;
            c = c === void 0 ? !1 : c;
            var d = new wC(a);
            var e = d.l;
            (d = sb(d.j, "googleads.g.doubleclick.net") && CD("/pagead/(live/)?ads", e)) || (e = new AH(a), d = e.j, e = BH(e, e.l), d = !sb(d, ".g.doubleclick.net") && (sb(d, "doubleclick.net") ||
                sb(d, "pagead2.googlesyndication.com")) && CD("/(ad|pfad)[x|i|j]?/", e));
            d || (d = new wC(a), e = d.l, d = sb(d.j, "doubleclick.net") && CD("/gampad/(live/)?ads", e));
            (d = d || (new wC(a)).j == "bid.g.doubleclick.net") || (d = new wC(a), e = d.l, d = d.j === "ad.doubleclick.net" && CD("/dv3/adv", e));
            d || (d = new wC(a), e = d.l, d = d.j === "pubads.g.doubleclick.net" && (CD("/ssai/", e) || CD("/ondemand/", e)));
            return new aI(d, ZH(a), b, c)
        },
        eI = function(a) {
            var b = a.g.g;
            var c = cI(a, "gdpr_consent");
            b = b && b !== "tcunavailable" ? b : b === "tcunavailable" ? c || b : c || "";
            if (b ===
                "tcunavailable") return null;
            var d;
            return (d = LB(b, dI(a))) != null ? d : null
        },
        cI = function(a, b) {
            if (a.l.hasOwnProperty(b)) return a.l[b]
        },
        gI = function(a) {
            var b;
            if (!(b = fI(a))) {
                if (dI(a)) {
                    a = eI(a);
                    if (b = !!a) {
                        var c = c === void 0 ? {} : c;
                        b = gC(a) ? a.gdprApplies === !1 ? !0 : a.tcString === "tcunavailable" ? !c.idpcApplies : (c.idpcApplies || a.gdprApplies !== void 0 || c.mj) && (c.idpcApplies || typeof a.tcString === "string" && a.tcString.length) ? jC(a, "1", 0) : !0 : !1
                    }
                    c = b
                } else c = !0;
                b = !c
            }
            return b
        },
        fI = function(a) {
            a = cI(a, "ltd");
            return $H(a)
        },
        dI = function(a) {
            var b =
                cI(a, "gdpr"),
                c = a.g.j;
            b = (c === "1" || c === "0" ? c : b !== void 0 ? b : "").toLowerCase();
            b = b === "true" || b === "1";
            return go(OB) ? b || a.o : b
        },
        hI = function(a) {
            var b = new YH;
            var c = !gI(a);
            c = Tf(b, 5, c);
            dI(a) ? (a = eI(a), a = !!a && !lC(a, ["2", "7", "9", "10"], 3)) : a = !1;
            Tf(c, 8, a);
            return b
        },
        iI = function(a) {
            var b = a.g.gppString;
            a = a.g.l.split("_").map(function(c) {
                return Number(c)
            });
            return vC(b, a)
        };
    var jI = function(a) {
        this.F = B(a)
    };
    x(jI, H);
    jI.prototype.getVersion = function() {
        return D(this, 2)
    };
    var kI = function(a) {
        this.F = B(a)
    };
    x(kI, H);
    var lI = function(a, b) {
            return Yf(a, 2, b)
        },
        mI = function(a, b) {
            return Yf(a, 3, b)
        },
        nI = function(a, b) {
            return Yf(a, 4, b)
        },
        oI = function(a, b) {
            return Yf(a, 5, b)
        },
        pI = function(a, b) {
            return Yf(a, 9, b)
        },
        qI = function(a, b) {
            return Ef(a, 10, b)
        },
        rI = function(a, b) {
            return Tf(a, 11, b)
        },
        sI = function(a, b) {
            return Yf(a, 1, b)
        },
        tI = function(a, b) {
            return Tf(a, 7, b)
        };
    kI.ba = [10, 6];
    var uI = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function vI(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function wI(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function xI() {
        var a = window;
        if (!wI(a)) return null;
        var b = vI(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(uI).then(function(c) {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function yI(a) {
        var b;
        return rI(qI(oI(lI(sI(nI(tI(pI(mI(new kI, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(function(c) {
            var d = new jI;
            d = Yf(d, 1, c.brand);
            return Yf(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function zI() {
        var a, b;
        return (b = (a = xI()) == null ? void 0 : a.then(function(c) {
            return yI(c)
        })) != null ? b : null
    };
    var BI = function() {
            this.appName = null;
            new aI;
            this.secureSignals = null;
            yH();
            this.deviceId = "";
            this.g = this.referrer = this.Se = null;
            new Bk;
            new zk;
            AI(this)
        },
        CI = function() {
            BI.getInstance();
            var a = "h.3.655.0";
            SH.j && (a += "/vpaid_adapter");
            return a
        },
        AI = function(a) {
            var b = zI();
            b && b.then(function(c) {
                if (c == null) c = null;
                else {
                    c = bg(c);
                    for (var d = [], e = 0, f = 0; f < c.length; f++) {
                        var g = c.charCodeAt(f);
                        g > 255 && (d[e++] = g & 255, g >>= 8);
                        d[e++] = g
                    }
                    c = Qc(d, 3)
                }
                a.g = c
            })
        };
    BI.getInstance = function() {
        return J(BI)
    };
    var EI = function(a) {
            a = a === void 0 ? !1 : a;
            var b = QH(SH);
            if (b && MH(b, "forceCustomPlayback") || SH.j) return !0;
            if (tD() && a) return !1;
            a = a && (tD() || uD(10)) && SH.getDisableCustomPlaybackForIOS10Plus();
            return (yc || Ac) && !a || xc && (!xc || !sD(rD, 4)) || DI() ? !0 : !1
        },
        FI = function(a) {
            return a === null ? !1 : SH.j ? !0 : Bc || tD() ? vD(a) ? tD() || uD(10) && SH.getDisableCustomPlaybackForIOS10Plus() ? !1 : !0 : !0 : xc && (!xc || !sD(rD, 4)) || DI() ? !0 : !1
        },
        GI = function() {
            var a = QH(SH);
            return a && MH(a, "disableOnScreenDetection") ? !1 : !Gq()
        },
        DI = function() {
            return HI() === 1 ||
                HI() === 2
        },
        HI = function() {
            switch (BI.getInstance(), 0) {
                case 1:
                    return 3;
                case 2:
                    return 1
            }
            return (BI.getInstance(), BI.getInstance(), BI.getInstance().Se === "tvos") ? 1 : Hq() ? 2 : 0
        };
    var II = function(a, b) {
        return a.indexOf(b) == 0 ? a.substr(b.length) : null
    };

    function JI() {
        if (Gq()) return window.location.href;
        var a = kj(),
            b = a.j,
            c = a.g;
        a = a.l;
        var d = null;
        if (a) try {
            var e = LC(a.url),
                f = e.l,
                g = II(f, "/v/");
            g || (g = II(f, "/a/"));
            if (!g) throw Error("Can not extract standalone amp url.");
            var h = II("/" + g, "/s/"),
                k = AC(e.g);
            k.remove("amp_js_v");
            k.remove("amp_lite");
            var n = h ? LC("https://" + h) : LC("http://" + g);
            zC(n, k);
            d = n.toString()
        } catch (m) {
            d = null
        }
        return d ? d : b && b.url ? b.url : c && c.url ? c.url : ""
    }

    function KI() {
        var a = hj();
        a = v(a);
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.url && b.url.includes("amp=1")) return !0;
        return window.context != null ? (a = Number(window.context.ampcontextVersion), isNaN(a) ? !1 : Math.floor(a) > 0) : kj().l != null
    }

    function LI() {
        var a = Ai().location.ancestorOrigins;
        return a ? a.length > 0 ? [].concat(ia(a)).join(",") : "" : ""
    };

    function MI() {
        var a = Ai(),
            b = document;
        return new wC(a.parent === a ? a.location.href : b.referrer)
    }

    function NI(a, b) {
        KC(a, "url", "");
        try {
            var c = 2083 - a.toString().length - 1;
            if (c <= 0) return a.toString();
            for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; f > 0 && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
            KC(a, "url", d)
        } catch (g) {}
        return a.toString()
    };
    var U = {},
        OI = (U.creativeView = "creativeview", U.start = "start", U.midpoint = "midpoint", U.firstQuartile = "firstquartile", U.thirdQuartile = "thirdquartile", U.complete = "complete", U.mute = "mute", U.unmute = "unmute", U.pause = "pause", U.rewind = "rewind", U.resume = "resume", U.fullscreen = "fullscreen", U.exitFullscreen = "exitfullscreen", U.expand = "expand", U.collapse = "collapse", U.close = "close", U.acceptInvitation = "acceptinvitation", U.adCanPlay = "adCanPlay", U.adStarted = "adStarted", U.abandon = "abandon", U.acceptInvitationLinear = "acceptinvitationlinear",
            U.engagedView = "engagedview", U.instreamAdComplete = "instreamAdComplete", U.skipShown = "skipshown", U.skippableStateChanged = "skippableStateChanged", U.skip = "skip", U.progress = "progress", U.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", U.annotation_start = "annotation_start", U.annotation_click = "annotation_click", U.annotation_close = "annotation_close", U.cta_annotation_shown = "cta_annotation_shown", U.cta_annotation_clicked = "cta_annotation_clicked", U.cta_annotation_closed = "cta_annotation_closed", U.replay = "replay",
            U.stop = "stop", U.autoplayDisallowed = "autoplayDisallowed", U.error = "error", U.mediaLoadTimeout = "mediaLoadTimeout", U.linearChanged = "linearChanged", U.click = "click", U.contentPauseRequested = "contentPauseRequested", U.contentResumeRequested = "contentResumeRequested", U.discardAdBreak = "discardAdBreak", U.updateAdsRenderingSettings = "updateAdsRenderingSettings", U.durationChange = "durationChange", U.expandedChanged = "expandedChanged", U.autoClose = "autoClose", U.userClose = "userClose", U.userRecall = "userRecall", U.prefetched =
            "prefetched", U.loaded = "loaded", U.init = "init", U.allAdsCompleted = "allAdsCompleted", U.adMetadata = "adMetadata", U.adBreakReady = "adBreakReady", U.adBreakFetchError = "adBreakFetchError", U.log = "log", U.volumeChange = "volumeChange", U.companionBackfill = "companionBackfill", U.companionInitialized = "companionInitialized", U.companionImpression = "companionImpression", U.companionClick = "companionClick", U.impression = "impression", U.interaction = "interaction", U.adProgress = "adProgress", U.adBuffering = "adBuffering", U.trackingUrlPinged =
            "trackingUrlPinged", U.measurable_impression = "measurable_impression", U.custom_metric_viewable = "custom_metric_viewable", U.viewable_impression = "viewable_impression", U.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", U.audio_audible = "audio_audible", U.audio_measurable = "audio_measurable", U.overlay_resize = "overlay_resize", U.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", U.overlay_unviewable_impression = "overlay_unviewable_impression", U.overlay_viewable_immediate_impression =
            "overlay_viewable_immediate_impression", U.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", U.externalActivityEvent = "externalActivityEvent", U.adEvent = "adEvent", U.configure = "configure", U.remainingTime = "remainingTime", U.destroy = "destroy", U.resize = "resize", U.volume = "volume", U.authorIconClicked = "videoAuthorIconClicked", U.authorNameClicked = "videoAuthorClicked", U.videoClicked = "videoClicked", U.videoIconClicked = "videoIconClicked", U.learnMoreClicked = "videoLearnMoreClicked",
            U.muteClicked = "videoMuteClicked", U.titleClicked = "videoTitleClicked", U.videoSkipClicked = "SKIPPED", U.unmuteClicked = "videoUnmuteClicked", U.vpaidEvent = "vpaidEvent", U.show_ad = "show_ad", U.video_card_endcap_collapse = "video_card_endcap_collapse", U.video_card_endcap_dismiss = "video_card_endcap_dismiss", U.video_card_endcap_impression = "video_card_endcap_impression", U.mediaUrlPinged = "mediaUrlPinged", U.breakStart = "breakstart", U.breakEnd = "breakend", U.omidReady = "omidReady", U.omidUnavailable = "omidUnavailable", U.omidAdSessionCompleted =
            "omidAdSessionCompleted", U.omidAdSessionAbandoned = "omidAdSessionAbandoned", U.verificationNotExecuted = "verificationNotExecuted", U.loadStart = "loadStart", U.seeked = "seeked", U.seeking = "seeking", U);
    var PI = new function() {
        this.g = new Map;
        this.l = 0;
        this.j = window.fetch != null
    };

    function QI(a) {
        var b = b === void 0 ? PI : b;
        var c = c === void 0 ? null : c;
        a = new HD(a, c ? c : c);
        var d = d === void 0 ? !1 : d;
        var e = e === void 0 ? !1 : e;
        a.g != null || e ? mE(b, a.url, d, e, a.g) : mE(b, a.url, d)
    };
    var W = function() {
        this.l = Math.random() < .01;
        this.j = Math.floor(Math.random() * 4503599627370496);
        this.g = null
    };
    W.prototype.report = function(a, b, c) {
        b = b === void 0 ? {} : b;
        if (y.G_testRunner == null && (this.l || (c === void 0 ? 0 : c))) {
            b.lid = a;
            CI() && (b.sdkv = CI());
            this.g && (b.palv = this.g);
            a = Om().sort().join(",");
            tb(mi(a)) || (b.e = a);
            b = RI(this, b);
            var d = new wC("http://pagead2.googlesyndication.com/pagead/gen_204");
            mh(b, function(e, f) {
                e != null && KC(d, f, e == null ? "" : typeof e === "boolean" ? e ? "t" : "f" : "" + e)
            }, this);
            b = MI().o;
            b !== "http" && b !== "https" || xC(d, b);
            b = d.toString();
            a = d.g.get("url");
            a != null && Lb() && b.length > 2083 && (b = NI(d, a));
            QI(b)
        }
    };
    var RI = function(a, b) {
        b.id = "ima_html5";
        var c = MI();
        b.c = a.j;
        b.domain = c.j;
        return b
    };
    W.getInstance = function() {
        return J(W)
    };

    function SI(a) {
        var b = Date.now(),
            c = {};
        a = (c["x-afma-token-requester-type"] = a, c);
        c = "https://pubads.g.doubleclick.net/adsid/integrator.json?aos=" + encodeURIComponent(LI());
        return (new eE).get({
            url: c,
            withCredentials: !0,
            timeout: new FD,
            headers: a
        }).then(function(d) {
            var e = Date.now();
            d = d.newToken || "";
            var f = {};
            W.getInstance().report(182, (f.t = e - b, f.aos = LI(), f));
            return new TI(d)
        }).catch(function(d) {
            var e = "not instanceof Error";
            d instanceof Error && (e = ID(Number(d.message)));
            d = Date.now();
            var f = {};
            W.getInstance().report(182,
                (f.except = e, f.t = d - b, f));
            return Promise.resolve(UI)
        })
    }
    var VI = function() {
        R.call(this);
        this.g = null;
        this.A = new KD(this);
        mr(this, this.A);
        this.j = new xw(72E5);
        this.l = Promise.resolve(UI)
    };
    x(VI, R);
    var WI = function(a) {
        var b = "requester_type_8";
        b = b === void 0 ? "requester_type_9" : b;
        var c = function(d) {
            a.g = d;
            return a.g
        };
        a.l = SI(b).then(c);
        a.j = new xw(72E5);
        a.A.listen(a.j, "tick", function() {
            a.l = SI(b).then(c)
        });
        a.j.start();
        lr(a, function() {
            a.j.stop()
        })
    };
    VI.prototype.getId = function() {
        var a = this;
        return Ia(function(b) {
            if (b.g == 1) return a.g != null && a.g !== UI ? (b.g = 2, b = void 0) : b = xa(b, a.l, 3), b;
            b.g != 2 && (a.g = b.j);
            return b.return(a.g)
        })
    };
    var TI = function(a) {
            this.id = a
        },
        UI = new TI("");
    var XI = function(a, b, c, d, e) {
            this.name = a;
            this.type = b;
            this.data = c;
            this.id = d;
            this.g = e
        },
        YI = function(a) {
            R.call(this);
            this.A = [];
            this.j = !1;
            this.l = a || "goog_" + ni++
        };
    x(YI, R);
    YI.prototype.connect = function() {
        for (this.j = !0; this.A.length !== 0;) {
            var a = this.A.shift();
            a && this.sendMessage(a)
        }
    };
    var ZI = function(a, b, c, d, e, f) {
        a.j ? a.sendMessage(new XI(b, c, d, e, f)) : a.A.push(new XI(b, c, d, e, f))
    };
    YI.prototype.sendMessage = function() {};
    var $I = function(a, b, c, d, e, f) {
        e = e === void 0 ? "" : e;
        f = f === void 0 ? "" : f;
        rv.call(this, a);
        this.messageType = b;
        this.oa = c;
        this.tc = d;
        this.origin = e;
        this.id = f
    };
    x($I, rv);
    $I.prototype.getId = function() {
        return this.id
    };
    $I.prototype.toString = function() {
        return ""
    };
    var aJ = {
            IMAGE: "Image",
            FLASH: "Flash",
            ALL: "All"
        },
        bJ = {
            HTML: "Html",
            IFRAME: "IFrame",
            STATIC: "Static",
            ALL: "All"
        },
        cJ = {
            IGNORE: "IgnoreSize",
            SELECT_EXACT_MATCH: "SelectExactMatch",
            SELECT_NEAR_MATCH: "SelectNearMatch",
            SELECT_FLUID: "SelectFluid"
        },
        dJ = function() {
            this.allowCustom = !0;
            this.creativeType = this.resourceType = "All";
            this.sizeCriteria = "SelectExactMatch";
            this.nearMatchPercent = 90;
            this.adSlotIds = []
        };
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.CreativeType", aJ);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.ResourceType", bJ);
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$companion_ad_selection_settings.CompanionAdSelectionSettings.SizeCriteria", cJ);
    var fJ = function(a, b) {
            b = b === void 0 ? new dJ : b;
            this.g = a;
            this.settings = b ? b : new dJ;
            this.resourceType = eJ(bJ, this.settings.resourceType) ? this.settings.resourceType : "All";
            this.creativeType = eJ(aJ, this.settings.creativeType) ? this.settings.creativeType : "All";
            this.sizeCriteria = eJ(cJ, this.settings.sizeCriteria) ? this.settings.sizeCriteria : "SelectExactMatch";
            this.adSlotIds = this.settings.adSlotIds != null ? this.settings.adSlotIds : [];
            this.nearMatchPercent = typeof this.settings.nearMatchPercent === "number" && this.settings.nearMatchPercent >
                0 && this.settings.nearMatchPercent <= 100 ? this.settings.nearMatchPercent : 90
        },
        iJ = function(a, b) {
            var c = [];
            b.forEach(function(d) {
                a.settings.allowCustom && (!tb(d.getContent()) && (isNaN(d.data.sequenceNumber) || isNaN(d.data.mainAdSequenceNumber) || d.data.mainAdSequenceNumber === d.data.sequenceNumber) && gJ(a, d) ? c.push(d) : (d = hJ(a, d), d != null && !tb(d.getContent()) && c.push(d)))
            });
            return c
        };
    fJ.prototype.Ke = function() {
        return this.resourceType
    };
    var gJ = function(a, b) {
            var c;
            if (c = b.getContentType() !== "Flash") {
                if (c = a.resourceType === "All" || a.resourceType === b.Ke()) c = b.getContentType(), c = c == null ? !0 : a.creativeType === "All" || a.creativeType === c;
                c && (c = b.getAdSlotId(), c = a.adSlotIds.length === 0 ? !0 : c != null ? a.adSlotIds.includes(c) : !1)
            }
            if (c)
                if (c = b.getSize(), (b = !!b.data.fluidSize) || a.g.Ie) a = b && a.g.Ie;
                else if (a.sizeCriteria === "IgnoreSize" || ei(a.g.size, c)) a = !0;
            else {
                if (b = a.sizeCriteria === "SelectNearMatch") b = c.width, c = c.height, b = b > a.g.size.width || c > a.g.size.height ||
                    b < a.nearMatchPercent / 100 * a.g.size.width || c < a.nearMatchPercent / 100 * a.g.size.height ? !1 : !0;
                a = b
            } else a = !1;
            return a
        },
        hJ = function(a, b) {
            b = jJ(b);
            return b == null ? null : b.find(function(c) {
                return gJ(a, c)
            }) || null
        },
        eJ = function(a, b) {
            return b != null && uh(a, b)
        };

    function kJ(a) {
        var b = new zk;
        var c = a.kc;
        var d = c.clientWidth;
        var e = c.clientHeight;
        typeof c.getBoundingClientRect === "function" && Gi(ti(c), c) ? (c = c.getBoundingClientRect(), d = document.elementsFromPoint(c.x + .5 * d, c.y + .5 * e)) : d = [];
        if (d = lJ(d, a)) {
            a = new yk;
            c = d.getBoundingClientRect();
            e = c.y;
            c = c.x;
            var f = new wk;
            e = Wf(f, 1, e);
            e = Wf(e, 2, c);
            c = d.duration;
            var g = d.clientWidth;
            f = d.clientHeight;
            var h = new xk;
            g = Wf(h, 1, g);
            f = Wf(g, 2, f);
            isNaN(c) || (g = new vk, c = Vf(g, 1, c), C(a, 3, c));
            d = Number(window.getComputedStyle(d).opacity);
            e = C(a, 1,
                e);
            e = C(e, 2, f);
            Vf(e, 4, d);
            b = C(b, 2, a)
        } else a = new yk, b = C(b, 2, a);
        return b
    }

    function lJ(a, b) {
        if (a.length === 0) return null;
        var c = b.fa.A.g,
            d, e, f = (e = (d = b.xa) == null ? void 0 : d.A.g) != null ? e : null;
        a = a.filter(function(g) {
            return g.tagName === "VIDEO" && !g.isEqualNode(c) && !g.isEqualNode(f)
        });
        return a.length > 0 ? a[0] : null
    };
    var mJ = function(a, b) {
        this.message = a;
        this.errorCode = b
    };
    mJ.prototype.getErrorCode = function() {
        return this.errorCode
    };
    mJ.prototype.getMessage = function() {
        return this.message
    };
    var nJ = new mJ("Failed to initialize ad playback element before starting ad playback.", 400),
        oJ = new mJ("The provided {0} information: {1} is invalid.", 1101);

    function pJ(a, b) {
        var c = b === void 0 ? null : b;
        var d = Ja.apply(2, arguments);
        if (!(c instanceof FH)) {
            var e = a.getErrorCode(),
                f = a.getMessage();
            if (d.length > 0)
                for (var g = 0; g < d.length; g++) f = f.replace(new RegExp("\\{" + g + "\\}", "ig"), d[g]);
            d = new FH("adPlayError", f, e);
            d.g = c;
            c = d
        }
        return c
    };
    var qJ = {
        gg: [],
        eg: 0,
        mg: [],
        hh: !1
    };
    var rJ = function() {};
    rJ.getInstance = function() {
        throw Error("Must be overridden");
    };
    var sJ = function() {
        this.g = 0
    };
    x(sJ, rJ);
    sJ.xb = void 0;
    sJ.getInstance = function() {
        return sJ.xb ? sJ.xb : sJ.xb = new sJ
    };

    function tJ(a, b, c, d) {
        c = c === void 0 ? null : c;
        d = d === void 0 ? {} : d;
        var e = sJ.getInstance();
        e.g === 0 && (e.g = Math.random() < .001 ? 2 : 1);
        e.g === 2 && (e = {}, Nj(Object.assign({}, (e.c = String(a), e.pc = String(dj()), e.em = c, e.lid = b, e.eids = J(Hm).g().join(), e), d), "esp"))
    };

    function uJ() {
        var a = window;
        var b = b === void 0 ? function() {} : b;
        return new Promise(function(c) {
            var d = function() {
                c(b());
                lh(a, "load", d)
            };
            kh(a, "load", d)
        })
    };
    var vJ = function() {
            this.cache = {}
        },
        xJ = function() {
            wJ || (wJ = new vJ);
            return wJ
        },
        yJ = function(a) {
            if (a !== void 0)
                for (var b = v(Object.keys(a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, c.startsWith("_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            wJ = new vJ
        },
        zJ = function(a) {
            var b = Hf(a, 3);
            if (!b) return 3;
            if (Jf(a, 2) === void 0) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    vJ.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            Mb: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            tJ(6, a, (d = g) == null ? void 0 : d.message);
            return {
                Mb: null,
                success: !1
            }
        }
        if (!c) return {
            Mb: null,
            success: !0
        };
        try {
            var e = Gx(c);
            this.cache[a] = e;
            return {
                Mb: e,
                success: !0
            }
        } catch (g) {
            var f;
            tJ(5, a, (f = g) == null ? void 0 : f.message);
            return {
                Mb: null,
                success: !1
            }
        }
    };
    vJ.prototype.set = function(a, b) {
        var c = Jf(a, 1),
            d = "_GESPSK-" + c;
        Fx(a);
        try {
            b.setItem(d, bg(a))
        } catch (f) {
            var e;
            tJ(7, c, (e = f) == null ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    vJ.prototype.remove = function(a, b) {
        a = Jf(a, 1);
        try {
            b.removeItem("_GESPSK-" + a), delete this.cache[a]
        } catch (d) {
            var c;
            tJ(8, a, (c = d) == null ? void 0 : c.message)
        }
    };
    var wJ = null;

    function AJ(a) {
        var b = qJ.hh;
        var c = new Jx;
        b && tJ(56, "", null);
        if (a) {
            b = [];
            var d = RegExp("^_GESPSK-(.+)$");
            try {
                for (var e = 0; e < a.length; e++) {
                    var f = (d.exec(a.key(e)) || [])[1];
                    f && b.push(f)
                }
            } catch (k) {}
            f = v(b);
            d = f.next();
            for (b = {}; !d.done; b = {
                    Zb: void 0
                }, d = f.next())
                if (b.Zb = d.value, (d = xJ().get(b.Zb, a).Mb) && !BJ(c, b.Zb) && (e = zJ(d), e !== 2 && e !== 3)) {
                    Tf(d, 9, !1);
                    if ((e = Jf(d, 2)) && e.length > 1024) {
                        var g = {};
                        tJ(55, b.Zb, null, (g.sl = String(e.length), g));
                        e = d.bb(Bx(108));
                        df(e, 2)
                    }
                    Gf(c, 2, Dx, d);
                    d = Jf(d, 2);
                    g = e = void 0;
                    var h = {};
                    tJ(19, b.Zb, null,
                        (h.hs = d ? "1" : "0", h.sl = String((g = (e = d) == null ? void 0 : e.length) != null ? g : -1), h))
                }
        }
        if (!Cf(c, Dx, 2, ef()).length) return null;
        a = {};
        tJ(50, "", null, (a.ns = String(Cf(c, Dx, 2, ef()).length), a));
        return Qc(c.g(), 3)
    }

    function BJ(a, b) {
        return Cf(a, Dx, 2, ef()).some(function(c) {
            return Jf(c, 1) === b && Jf(c, 2) != null
        })
    };
    var CJ = function() {
        var a = this;
        this.promise = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var DJ = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        Object.setPrototypeOf(this, DJ.prototype);
        this.name = "InputError"
    };
    x(DJ, Error);
    var EJ = function() {
            this.ob = !1
        },
        FJ = function() {
            EJ.apply(this, arguments);
            this.cd = new CJ
        };
    x(FJ, EJ);
    var GJ = function(a, b) {
        a.ob || (a.ob = !0, a.bd = b, a.cd.resolve(b))
    };
    ea.Object.defineProperties(FJ.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.cd.promise
            }
        },
        cf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ob
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Td
            }
        }
    });
    var HJ = function() {
        FJ.apply(this, arguments)
    };
    x(HJ, FJ);
    var IJ = function(a, b) {
            GJ(a, b)
        },
        JJ = function(a, b) {
            b.then(function(c) {
                GJ(a, c)
            })
        };
    HJ.prototype.bb = function(a) {
        this.ob || (this.ob = !0, this.bd = null, this.Td = a, this.cd.reject(a))
    };
    var KJ = function(a) {
        this.ob = !1;
        this.g = a
    };
    x(KJ, EJ);
    KJ.prototype.cf = function() {
        return this.g.ob
    };
    ea.Object.defineProperties(KJ.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.Td
            }
        }
    });
    var LJ = function(a) {
        KJ.call(this, a);
        this.g = a
    };
    x(LJ, KJ);
    ea.Object.defineProperties(LJ.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g.bd
            }
        }
    });
    var MJ = function(a) {
        KJ.call(this, a);
        this.g = a
    };
    x(MJ, KJ);
    ea.Object.defineProperties(MJ.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return (a = this.g.bd) != null ? a : null
            }
        }
    });
    var NJ = function() {
        FJ.apply(this, arguments)
    };
    x(NJ, FJ);
    NJ.prototype.notify = function() {
        GJ(this, null)
    };
    var OJ = function() {
        Q.apply(this, arguments);
        this.g = [];
        this.j = [];
        this.l = []
    };
    x(OJ, Q);
    var PJ = function(a, b) {
        a.j.push({
            xc: !1,
            Bd: b
        })
    };
    OJ.prototype.xc = function(a) {
        var b = this.j.find(function(c) {
            return c.Bd === a
        });
        b && (b.xc = !0)
    };
    OJ.prototype.O = function() {
        this.g.length = 0;
        this.l.length = 0;
        this.j.length = 0;
        Q.prototype.O.call(this)
    };

    function QJ(a, b) {
        var c, d;
        return Ia(function(e) {
            if (e.g == 1) return c = b ? a.filter(function(f) {
                return !f.xc
            }) : a, xa(e, Promise.all(c.map(function(f) {
                return f.Bd.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function(f) {
                return f.xc
            });
            return xa(e, Promise.race([Promise.all(d.map(function(f) {
                return f.Bd.promise
            })), new Promise(function(f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    }
    var RJ = function(a, b) {
        Q.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.A = !1;
        this.g = new OJ;
        mr(this, this.g)
    };
    x(RJ, Q);
    RJ.prototype.start = function() {
        var a = this,
            b, c;
        return Ia(function(d) {
            if (d.g == 1) {
                if (a.A) return d.return();
                a.A = !0;
                d.l = 2;
                return xa(d, QJ(a.g.j, (b = a.K) != null ? b : a.timeoutMs), 4)
            }
            if (d.g != 2) {
                if (!a.Ea()) {
                    for (var e = 0, f = v(a.g.l), g = f.next(); !g.done; g = f.next()) {
                        if (g.value.g.bd == null) throw Error("missing input: " + a.id + "/" + e);
                        ++e
                    }
                    a.j()
                }
                return ya(d)
            }
            c = Aa(d);
            if (a.Ea()) return d.return();
            if (!(c instanceof DJ) && c instanceof Error && (a.D ? a.D(a.id, c) : a.B(a.id, c), a.g.g.length))
                for (e = new DJ(c.message), f = v(a.g.g), g = f.next(); !g.done; g =
                    f.next())
                    if (g = g.value, !g.cf) {
                        var h = e;
                        g.ob = !0;
                        g.Td = h;
                        g.cd.reject(h)
                    }
            d.g = 0
        })
    };
    var SJ = function(a) {
            var b = b === void 0 ? new HJ : b;
            a.g.g.push(b);
            return b
        },
        TJ = function(a) {
            var b = b === void 0 ? new NJ : b;
            a.g.g.push(b);
            return b
        },
        UJ = function(a, b) {
            PJ(a.g, b);
            b = new LJ(b);
            a.g.l.push(b);
            return b
        },
        VJ = function(a, b) {
            PJ(a.g, b);
            return new MJ(b)
        };
    var WJ = function() {
        Q.call(this);
        this.o = [];
        this.B = [];
        this.A = {};
        this.g = [];
        this.j = new CJ;
        this.l = {}
    };
    x(WJ, Q);
    var XJ = function(a, b) {
            mr(a, b);
            a.o.push(b)
        },
        YJ = function(a, b) {
            b = v(b);
            for (var c = b.next(); !c.done; c = b.next()) XJ(a, c.value)
        },
        ZJ = function(a) {
            var b, c, d, e, f, g, h, k, n, m, p, r;
            Ia(function(t) {
                switch (t.g) {
                    case 1:
                        if (!a.g.length) {
                            t.g = 2;
                            break
                        }
                        return xa(t, Promise.all(a.g.map(function(u) {
                            return u.j.promise
                        })), 2);
                    case 2:
                        b = v(a.o);
                        for (c = b.next(); !c.done; c = b.next()) d = c.value, d.start();
                        e = v(a.B);
                        for (f = e.next(); !f.done; f = e.next()) g = f.value, ZJ(g);
                        if (!a.l) {
                            t.g = 4;
                            break
                        }
                        h = Object.keys(a.l);
                        if (!h.length) {
                            t.g = 4;
                            break
                        }
                        return xa(t, Promise.all(Object.values(a.l).map(function(u) {
                                return u.promise
                            })),
                            6);
                    case 6:
                        for (k = t.j, n = 0, m = v(h), p = m.next(); !p.done; p = m.next()) r = p.value, a.A[r] = k[n++];
                    case 4:
                        return a.j.resolve(a.A), t.return(a.j.promise)
                }
            })
        };
    WJ.prototype.O = function() {
        Q.prototype.O.call(this);
        this.o.length = 0;
        this.B.length = 0;
        this.g.length = 0
    };
    var $J = function(a, b) {
        RJ.call(this, a);
        this.id = a;
        this.B = b
    };
    x($J, RJ);
    var aK = function(a, b, c, d) {
        $J.call(this, 1041, d);
        this.storage = b;
        this.o = UJ(this, a);
        c && (this.l = VJ(this, c))
    };
    x(aK, $J);
    aK.prototype.j = function() {
        var a = this.o.value,
            b, c, d = (c = this.storage) != null ? c : (b = this.l) == null ? void 0 : b.value;
        d && xJ().set(a, d) && Jf(a, 2) != null && tJ(27, Jf(a, 1))
    };
    var bK = function(a, b) {
        $J.call(this, 1094, b);
        this.l = TJ(this);
        this.o = UJ(this, a)
    };
    x(bK, $J);
    bK.prototype.j = function() {
        var a = this.o.value;
        a && (yJ(a), this.l.notify())
    };
    var cK = function(a, b) {
        $J.call(this, 1048, b);
        this.l = SJ(this);
        this.o = SJ(this);
        this.C = UJ(this, a)
    };
    x(cK, $J);
    cK.prototype.j = function() {
        var a = this.C.value,
            b = function(c) {
                var d = {};
                tJ(c, Jf(a, 1), null, (d.tic = String(Math.round((Date.now() - Hf(a, 3)) / 6E4)), d))
            };
        switch (zJ(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                GJ(this.o, a);
                break;
            case 2:
                b(26);
                GJ(this.l, a);
                break;
            case 3:
                tJ(9, Jf(a, 1));
                GJ(this.l, a);
                break;
            case 4:
                b(23), GJ(this.l, a)
        }
    };
    var dK = function(a, b, c) {
        $J.call(this, 1027, c);
        this.Cc = a;
        this.storage = b;
        this.l = SJ(this);
        this.o = SJ(this)
    };
    x(dK, $J);
    dK.prototype.j = function() {
        var a = xJ().get(this.Cc, this.storage).Mb;
        if (!a) {
            a = Fx(Ex(this.Cc));
            var b = this.o,
                c = a.bb(Bx(100));
            GJ(b, c)
        }
        GJ(this.l, a)
    };
    var eK = function(a, b, c) {
        $J.call(this, 1046, c);
        this.output = TJ(this);
        this.l = SJ(this);
        this.o = UJ(this, b);
        PJ(this.g, a)
    };
    x(eK, $J);
    eK.prototype.j = function() {
        GJ(this.l, this.o.value)
    };
    var fK = function(a, b, c) {
        $J.call(this, 1047, c);
        this.collectorFunction = a;
        this.l = SJ(this);
        this.o = SJ(this);
        this.C = SJ(this);
        this.G = UJ(this, b)
    };
    x(fK, $J);
    fK.prototype.j = function() {
        var a = this,
            b = this.G.value,
            c = Jf(b, 1);
        tJ(18, c);
        try {
            var d = nj();
            this.collectorFunction().then(function(e) {
                tJ(29, c, null, {
                    delta: String(nj() - d)
                });
                var f = a.l,
                    g = Yf(b, 2, e);
                GJ(f, g);
                GJ(a.C, e != null ? e : null)
            }).catch(function(e) {
                tJ(28, c, gK(e));
                e = a.o;
                var f = b.bb(Bx(106));
                GJ(e, f)
            })
        } catch (e) {
            tJ(1, c, gK(e)), IJ(this.o, b.bb(Bx(107)))
        }
    };

    function gK(a) {
        return typeof a === "string" ? a : a instanceof Error ? a.message : null
    };
    var hK = function(a, b) {
        $J.call(this, 1028, b);
        this.l = SJ(this);
        this.o = UJ(this, a)
    };
    x(hK, $J);
    hK.prototype.j = function() {
        var a = this.o.value,
            b = Jf(a, 1);
        Hf(a, 3) != null || tJ(35, b);
        GJ(this.l, a)
    };
    var iK = function(a, b, c, d) {
        $J.call(this, 1050, d);
        this.C = c;
        this.l = SJ(this);
        this.o = UJ(this, a);
        this.G = VJ(this, b)
    };
    x(iK, $J);
    iK.prototype.j = function() {
        var a = this.o.value,
            b = Jf(a, 1),
            c = this.G.value;
        if (c == null) tJ(41, b), a.bb(Bx(111)), GJ(this.l, a);
        else if (typeof c !== "string") tJ(21, b), b = this.l, a = a.bb(Bx(113)), GJ(b, a);
        else {
            if (c.length > this.C) {
                var d = {};
                tJ(12, b, null, (d.sl = String(c.length), d));
                b = a.bb(Bx(108));
                df(b, 2)
            } else c.length || tJ(20, b), df(a, 10);
            GJ(this.l, a)
        }
    };
    var jK = function(a) {
        $J.call(this, 1046, a);
        this.output = TJ(this)
    };
    x(jK, $J);
    jK.prototype.j = function() {
        var a = this;
        uJ().then(function() {
            a.output.notify()
        })
    };

    function kK(a, b, c, d, e) {
        var f, g, h, k, n, m, p, r, t, u, w, E, Y;
        return Ia(function(V) {
            return V.g == 1 ? (f = new WJ, g = new dK(a, c, e), XJ(f, g), XJ(f, new aK(g.o, void 0, d, e)), h = new hK(g.l, e), XJ(f, h), k = new cK(h.l, e), XJ(f, k), n = new fK(b, k.l, e), XJ(f, n), XJ(f, new aK(n.o, void 0, d, e)), m = new iK(n.l, n.C, 1024, e), XJ(f, m), XJ(f, new aK(m.l, void 0, d, e)), p = new jK(e), XJ(f, p), r = new eK(p.output, k.o, e), XJ(f, r), t = new fK(b, r.l, e), XJ(f, t), u = new aK(t.l, void 0, d, e), XJ(f, u), ZJ(f), Y = a, xa(V, m.l.promise, 2)) : V.return({
                id: Y,
                collectorGeneratedData: (E =
                    (w = V.j) == null ? void 0 : Jf(w, 2)) != null ? E : null
            })
        })
    };
    var lK = function(a, b, c, d) {
        $J.call(this, 1059, d);
        this.G = b;
        this.C = c;
        this.l = SJ(this);
        this.I = UJ(this, a);
        this.o = VJ(this, c)
    };
    x(lK, $J);
    lK.prototype.j = function() {
        var a = this.o.value;
        if (a) {
            var b = this.I.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = (e = b.networkCode) != null ? e : c;
            c = {};
            tJ(42, b, null, (c.ea = String(Number(this.G)), c));
            JJ(this.l, kK(b, d, a, this.C, this.B))
        }
    };
    var mK = function(a, b, c) {
        c = c === void 0 ? qJ : c;
        $J.call(this, 1057, b);
        this.l = a;
        this.G = c;
        this.o = SJ(this);
        this.C = SJ(this)
    };
    x(mK, $J);
    mK.prototype.j = function() {
        if (this.l)
            if (typeof this.l !== "object") tJ(46, "UNKNOWN_COLLECTOR_ID"), nK(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id,
                    b = this.l.networkCode;
                a && b && (delete this.l.id, tJ(47, a + ";" + b));
                a = b != null ? b : a;
                typeof a !== "string" ? (b = {}, tJ(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), nK(this, "INVALID_COLLECTOR_ID", 102)) : typeof this.l.collectorFunction !== "function" ? (tJ(14, a), nK(this, a, 105)) : this.G.mg.includes(a) ? (tJ(22, a), nK(this, a, 104)) : GJ(this.C, this.l)
            }
        else tJ(39, "UNKNOWN_COLLECTOR_ID"),
            nK(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var nK = function(a, b, c) {
        a = a.o;
        b = Ex(b).bb(Bx(c));
        GJ(a, b)
    };
    var oK = function(a, b, c, d, e) {
        var f = document;
        f = f === void 0 ? document : f;
        e = e === void 0 ? qJ : e;
        this.j = b;
        this.o = c;
        this.A = f;
        this.L = d;
        this.g = e;
        this.J = [];
        this.C = [];
        this.B = [];
        this.l = 0;
        a = v(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    oK.prototype.push = function(a) {
        var b = this;
        this.o || this.L();
        var c = function(f, g) {
            return void pK(b, f, g)
        };
        a = new mK(a, c, this.g);
        var d = new aK(a.o, void 0, this.j, c);
        c = new lK(a.C, this.o, this.j, c, this.g);
        var e = new WJ;
        YJ(e, [a, d, c]);
        ZJ(e);
        a = c.l.promise;
        this.J.push(a);
        d = v(this.C);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    oK.prototype.addOnSignalResolveCallback = function(a) {
        this.C.push(a);
        for (var b = v(this.J), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    oK.prototype.addErrorHandler = function(a) {
        this.B.push(a)
    };
    oK.prototype.clearAllCache = function() {
        var a = this,
            b = this.A.currentScript instanceof HTMLScriptElement ? this.A.currentScript.src : "";
        if (this.l === 1) {
            var c = {};
            tJ(49, "", null, (c.url = b, c))
        } else if (this.g.gg.includes(String(Xi(b != null ? b : "")))) c = {}, tJ(48, "", null, (c.url = b, c));
        else {
            var d = new WJ;
            c = new bK(this.j, function(e, f) {
                return void pK(a, e, f)
            });
            XJ(d, c);
            ZJ(d);
            this.l = 1;
            setTimeout(function() {
                a.l = 0
            }, this.g.eg * 1E3);
            d = {};
            tJ(43, "", null, (d.url = b, d));
            return c.l.promise
        }
    };
    var pK = function(a, b, c) {
            a = v(a.B);
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, d(b, c)
        },
        qK = function(a) {
            this.push = function(b) {
                a.push(b)
            };
            this.addOnSignalResolveCallback = function(b) {
                a.addOnSignalResolveCallback(b)
            };
            this.addErrorHandler = function(b) {
                a.addErrorHandler(b)
            };
            this.clearAllCache = function() {
                a.clearAllCache()
            }
        };

    function rK(a, b, c, d, e, f) {
        f = f === void 0 ? qJ : f;
        Ti() !== Ui() ? tJ(16, "") : sK(a, "encryptedSignalProviders", c, e) && sK(a, "secureSignalProviders", c, e) || (tJ(38, ""), gN(a, "encryptedSignalProviders", b, f, c, d, e), gN(a, "secureSignalProviders", b, f, c, function() {}, e))
    }

    function sK(a, b, c, d) {
        if (a[b] === void 0 || a[b] instanceof Array) return !1;
        a = a[b];
        d && a.addOnSignalResolveCallback(d);
        a.addErrorHandler(c);
        return !0
    }

    function gN(a, b, c, d, e, f, g) {
        var h, k = new oK((h = a[b]) != null ? h : [], c, b === "secureSignalProviders", f, d);
        a[b] = new qK(k);
        g && k.addOnSignalResolveCallback(g);
        k.addErrorHandler(e)
    }

    function hN(a, b, c, d, e) {
        var f = f === void 0 ? qJ : f;
        var g = new HJ;
        GJ(g, b);
        rK(a, g, c, d, e, f)
    }

    function iN(a, b, c, d) {
        var e = jN,
            f = new Map;
        b = b.map(function(g) {
            var h = g.Cc;
            return new Promise(function(k) {
                f.set(h, k)
            })
        });
        hN(a, c, d, e, function(g) {
            var h = g.collectorGeneratedData;
            g = g.id;
            var k;
            return void((k = f.get(g)) == null ? void 0 : k({
                collectorGeneratedData: h,
                id: g
            }))
        });
        return b
    };

    function kN() {
        var a;
        return (a = y.googletag) != null ? a : y.googletag = {
            cmd: []
        }
    };

    function lN(a) {
        if (!a || gI(a)) return null;
        try {
            return window.localStorage
        } catch (b) {
            return null
        }
    }

    function mN(a, b) {
        (a = lN(a)) && hN(kN(), a, function() {}, jN, b)
    }

    function nN(a, b) {
        return (b = lN(b)) && a.length !== 0 ? iN(kN(), a, b, function() {}) : null
    }

    function jN() {};

    function oN(a, b, c, d) {
        var e = new CJ,
            f = "",
            g = function(k) {
                try {
                    var n = typeof k.data === "object" ? k.data : JSON.parse(k.data);
                    f === n.paw_id && (lh(a, "message", g), n.error ? e.reject(Error(n.error)) : e.resolve(d(n)))
                } catch (m) {}
            },
            h = pN(a);
        return h ? (kh(a, "message", g), f = c(h), e.promise) : (c = qN(a)) ? (f = String(Math.floor(Vi() * 2147483647)), kh(a, "message", g), b(c, f), e.promise) : null
    }

    function rN(a) {
        return oN(a, function(b, c) {
            var d, e;
            return void((d = (e = b.getGmaQueryInfo) != null ? e : b.getGmaSig) == null ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    }

    function sN() {
        var a = window;
        return !!pN(a) || !!qN(a)
    }

    function pN(a) {
        var b;
        if (typeof((b = a.gmaSdk) == null ? void 0 : b.getQueryInfo) === "function") return a.gmaSdk
    }

    function qN(a) {
        var b, c, d, e, f, g;
        if (typeof((b = a.webkit) == null ? void 0 : (c = b.messageHandlers) == null ? void 0 : (d = c.getGmaQueryInfo) == null ? void 0 : d.postMessage) === "function" || typeof((e = a.webkit) == null ? void 0 : (f = e.messageHandlers) == null ? void 0 : (g = f.getGmaSig) == null ? void 0 : g.postMessage) === "function") return a.webkit.messageHandlers
    };
    var tN = function() {
            this.timeoutMs = 500;
            this.j = rN;
            this.signal = null;
            this.g = 0
        },
        uN = function(a) {
            if (Km(ln) || !sN()) return Promise.resolve(null);
            var b;
            return ((b = a.j(window)) != null ? b : Promise.resolve(null)).catch(function() {
                return "0"
            })
        },
        wN = function(a) {
            var b;
            return Ia(function(c) {
                if (c.g == 1) return b = Date.now() - a.g, !a.signal || b > 3E5 ? c = xa(c, vN(a), 3) : (c.g = 2, c = void 0), c;
                c.g != 2 && (a.signal = c.j, a.g = Date.now());
                return c.return(a.signal)
            })
        },
        vN = function(a) {
            return Promise.race([uN(a).then(function(b) {
                if (b == null) return null;
                a.signal = b.length > 1E4 ? "0" : b;
                a.g = Date.now();
                return a.signal
            }), zw(a.timeoutMs, "0")])
        };

    function Fl(a, b) {
        return b instanceof RegExp ? "__REGEXP" + b.toString() : b
    }

    function xN(a, b) {
        return b && b.toString().indexOf("__REGEXP") === 0 ? (a = b.split("__REGEXP")[1].match(/\/(.*)\/(.*)?/), new RegExp(a[1], a[2] || "")) : b
    }
    var yN = function(a, b) {
        YI.call(this, b);
        this.B = a;
        this.g = null;
        this.C = new KD(this);
        this.C.listen(Ai(), "message", this.D)
    };
    x(yN, YI);
    var zN = function(a) {
        if (a == null || typeof a !== "string" || !a.startsWith("ima://")) return null;
        a = a.substr(6);
        try {
            return JSON.parse(a, xN)
        } catch (b) {
            return null
        }
    };
    yN.prototype.sendMessage = function(a) {
        if (this.g != null && this.g.postMessage != null) {
            var b = this.g,
                c = b.postMessage,
                d = {};
            d.name = a.name;
            d.type = a.type;
            a.data != null && (d.data = a.data);
            a.id && (d.id = a.id);
            a.g && (d.replyToMessageId = a.g);
            d.sid = this.l;
            d.channel = this.B;
            a = [];
            Hl(new Gl, d, a);
            c.call(b, "ima://" + a.join(""), "*")
        }
        this.g != null && this.g.postMessage == null && W.getInstance().report(11)
    };
    yN.prototype.O = function() {
        kr(this.C);
        this.g = null;
        YI.prototype.O.call(this)
    };
    yN.prototype.D = function(a) {
        a = a.g;
        var b = zN(a.data);
        if (AN(this, b)) {
            if (this.g === null) this.g = a.source, this.j || this.connect();
            else if (this.g !== a.source) return;
            AN(this, b) && this.dispatchEvent(new $I(b.name, b.type, b.data || {}, b.sid, a.origin, b.id, b.replyToMessageId))
        }
    };
    var AN = function(a, b) {
        if (b == null) return !1;
        var c = b.channel;
        if (c == null || c !== a.B) return !1;
        b = b.sid;
        return b == null || a.l !== "*" && b !== a.l ? !1 : !0
    };
    var BN = function() {
        R.call(this);
        this.G = !1;
        this.g = null;
        this.B = this.D = this.M = !1;
        this.j = 0;
        this.A = [];
        this.C = !1;
        this.U = this.P = Infinity;
        this.l = 0;
        this.I = {};
        this.K = new KD(this);
        mr(this, this.K)
    };
    x(BN, R);
    var DN = function(a, b) {
            b == null || a.G || (a.g = b, CN(a), a.G = !0)
        },
        FN = function(a) {
            a.g != null && a.G && (EN(a), a.G = !1, a.D = !1, a.B = !1, a.j = 0, a.A = [], a.C = !1)
        },
        CN = function(a) {
            EN(a);
            !(a.g instanceof R) && "ontouchstart" in document.documentElement && Bc ? (a.I = {
                touchstart: function(b) {
                    a.D = !0;
                    a.j = b.touches.length;
                    a.l && (window.clearTimeout(a.l), a.l = 0, a.M = !0);
                    a.C = GN(a, b.touches) || b.touches.length !== 1;
                    a.C ? (a.P = Infinity, a.U = Infinity) : (a.P = b.touches[0].clientX, a.U = b.touches[0].clientY);
                    b = b.touches;
                    a.A = [];
                    for (var c = 0; c < b.length; c++) a.A.push(b[c].identifier)
                },
                touchmove: function(b) {
                    a.j = b.touches.length;
                    if (!uD(8) || Math.pow(b.changedTouches[0].clientX - a.P, 2) + Math.pow(b.changedTouches[0].clientY - a.U, 2) > Math.pow(5, 2)) a.B = !0
                },
                touchend: function(b) {
                    return void HN(a, b)
                }
            }, mh(a.I, function(b, c) {
                a.g.addEventListener(c, b, !1)
            })) : a.K.listen(a.g, "click", a.V)
        },
        EN = function(a) {
            a.K.tb(a.g, "click", a.V);
            mh(a.I, function(b, c) {
                this.g.removeEventListener(c, b, !1)
            }, a);
            a.I = {}
        },
        HN = function(a, b) {
            !a.D || a.j !== 1 || a.B || a.M || a.C || !GN(a, b.changedTouches) || (a.l = window.setTimeout(function() {
                    return void IN(a)
                },
                300));
            a.j = b.touches.length;
            a.j === 0 && (a.D = !1, a.B = !1, a.A = []);
            a.M = !1
        };
    BN.prototype.V = function() {
        IN(this)
    };
    var GN = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if (a.A.includes(b[c].identifier)) return !0;
            return !1
        },
        IN = function(a) {
            a.l = 0;
            a.dispatchEvent(new rv("click"))
        };
    BN.prototype.O = function() {
        FN(this);
        R.prototype.O.call(this)
    };
    var JN = function() {
        this.o = function() {
            return new XMLHttpRequest
        };
        this.g = new CJ;
        this.l = this.j = this.config = null
    };
    JN.prototype.getConfig = function() {
        var a = this;
        return Ia(function(b) {
            return b.g == 1 ? xa(b, a.g.promise, 2) : b.return(a.config)
        })
    };
    var NN = function() {
            var a = KN,
                b = LN,
                c = Date.now(),
                d = a.o();
            d.timeout = 6E4;
            d.open("GET", b, !0);
            d.onload = function() {
                a.l = Date.now() - c;
                if (d.status < 200 || d.status >= 300) MN(a, Error("status: " + d.status));
                else {
                    var e = d.responseText,
                        f = null;
                    try {
                        f = zx(e)
                    } catch (g) {
                        MN(a, Error("per-pub config could not be deserialized"));
                        return
                    }
                    a.g.resolve();
                    a.config = f
                }
            };
            d.onerror = function() {
                MN(a, Error("status: " + d.status))
            };
            d.send()
        },
        MN = function(a, b) {
            a.j = b;
            a.g.resolve()
        },
        ON = new JN;

    function PN() {
        var a = QN;
        var b = a.appName;
        var c = a.Se;
        a = a.pageUrl;
        var d = new URL("https://securepubads.g.doubleclick.net/pagead/ima_ppub_config");
        return b && c ? (c === "android" ? d.searchParams.set("msid", b) : c === "ios" && d.searchParams.set("an", b), d.toString()) : a ? (d.searchParams.set("ippd", a), d.toString()) : null
    };

    function RN(a, b, c) {
        var d, e, f;
        a = ((f = (d = Af(a, wx, 2)) == null ? void 0 : (e = Cf(d, vx, 1, ef())) == null ? void 0 : e.map(function(g) {
            return D(g, 1)
        })) != null ? f : []).some(function(g) {
            return g === b
        });
        W.getInstance().report(190, {
            fm: a,
            fl: c
        })
    }

    function SN(a, b) {
        if (!a || !b) return !1;
        var c;
        return !((c = Af(a, ux, 5)) == null || !Cf(c, tx, 1, ef()).find(function(d) {
            return (d == null ? void 0 : D(d, 1)) === b && (d == null ? void 0 : Kf(d, 2))
        }))
    };
    var TN = function(a, b) {
        Q.call(this);
        var c = this;
        this.g = a;
        this.j = new Map;
        this.l = function(d) {
            var e = c.j.get(d.messageType);
            if (e) {
                var f = "goog_" + ni++,
                    g = d.getId();
                e(d.oa).then(function(h) {
                    ZI(c.g, d.type, d.messageType, h, f, g)
                })
            }
        };
        this.g.listen(b, this.l);
        lr(this, function() {
            c.j.clear();
            c.g.tb(b, c.l)
        })
    };
    x(TN, Q);
    var UN = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var VN = function(a, b) {
        Q.call(this);
        this.g = a;
        this.timeoutMs = b;
        mr(this, this.g)
    };
    x(VN, Q);
    var XN = function(a) {
            if (!ZB(a.g.caller)) return Promise.resolve(null);
            var b = new CJ,
                c = null;
            a.g.addEventListener(function(e) {
                if (e.pingData.internalErrorState === 1) b.resolve(null);
                else if (e.eventName === "listenerRegistered") c = e.listenerId, e.pingData.applicableSections.length === 1 && e.pingData.applicableSections[0] === -1 && b.resolve(new WN("", "-1"));
                else if (e.eventName === "signalStatus" && e.data === "ready") {
                    e = e.pingData;
                    var f, g = ((f = e.applicableSections) != null ? f : []).join("_");
                    b.resolve(new WN(e.gppString, g))
                }
            });
            var d =
                new Promise(function(e) {
                    setTimeout(function() {
                        e(null)
                    }, a.timeoutMs)
                });
            d = Promise.race([b.promise, d]);
            d.then(function() {
                c !== null && a.g.removeEventListener(c)
            });
            return d
        },
        WN = function(a, b) {
            this.gppString = a;
            this.sid = b
        };
    var YN = ha(["https://pagead2.googlesyndication.com/omsdk/releases/live/omweb-v1.js"]),
        ZN = ha(["https://pagead2.googlesyndication.com/omsdk/releases/control/omweb-v1.js"]),
        $N = ha(["https://pagead2.googlesyndication.com/omsdk/releases/canary/omweb-v1.js"]),
        aO = ha(["https://pagead2.googlesyndication.com/omsdk/releases/experimental/omweb-v1.js"]),
        bO = ai(YN),
        cO = ai(ZN),
        dO = ai($N),
        eO = ai(aO);

    function fO(a) {
        return (a = Hi(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
    }

    function gO(a) {
        var b, c, d, e, f, g;
        return Ia(function(h) {
            if (h.g == 1) return b = Di("IFRAME", {
                style: "display: none",
                title: "Advertisement"
            }), c = new Promise(function(k) {
                b.addEventListener("load", function() {
                    k()
                })
            }), a.appendChild(b), xa(h, c, 2);
            d = Di("SCRIPT");
            e = bO;
            Km(hn) ? e = cO : Km(jn) ? e = dO : Km(kn) && (e = eO);
            gi(d, e);
            f = new Promise(function(k, n) {
                d.addEventListener("load", function() {
                    fO(b) ? k(b) : n()
                })
            });
            g = b.contentDocument || b.contentWindow.document;
            g.head.appendChild(d);
            return h.return(f)
        })
    };
    var hO = function(a, b) {
        R.call(this);
        this.j = b;
        this.g = fO(a)
    };
    x(hO, R);
    var jO = function(a) {
            try {
                a.g && a.g.registerSessionObserver(function(b) {
                    b.type === "sessionStart" ? iO(a, a.j) : b.type === "sessionFinish" && jO(a)
                })
            } catch (b) {
                a.dispatchEvent(new Event("error"))
            }
        },
        iO = function(a, b) {
            b instanceof XG && (b = b.T);
            var c;
            if (((c = b.tagName) == null ? void 0 : c.toUpperCase()) !== "AUDIO") try {
                a.g && a.g.setVideoElement(b)
            } catch (d) {
                a.dispatchEvent(new Event("error"))
            }
        };
    var kO = function(a) {
        this.data = a
    };
    l = kO.prototype;
    l.getTotalAds = function() {
        return this.data.totalAds
    };
    l.getMaxDuration = function() {
        return this.data.maxDuration
    };
    l.getAdPosition = function() {
        return this.data.adPosition
    };
    l.getPodIndex = function() {
        return this.data.podIndex
    };
    l.getTimeOffset = function() {
        return this.data.timeOffset
    };
    l.getIsBumper = function() {
        return this.data.isBumper
    };
    kO.prototype.getIsBumper = kO.prototype.getIsBumper;
    kO.prototype.getTimeOffset = kO.prototype.getTimeOffset;
    kO.prototype.getPodIndex = kO.prototype.getPodIndex;
    kO.prototype.getAdPosition = kO.prototype.getAdPosition;
    kO.prototype.getMaxDuration = kO.prototype.getMaxDuration;
    kO.prototype.getTotalAds = kO.prototype.getTotalAds;
    var lO = function(a) {
        this.data = a
    };
    l = lO.prototype;
    l.getContent = function() {
        return this.data.content
    };
    l.getContentType = function() {
        return this.data.contentType
    };
    l.getWidth = function() {
        return this.getSize().width
    };
    l.getHeight = function() {
        return this.getSize().height
    };
    l.getAdSlotId = function() {
        return this.data.adSlotId
    };
    l.getSize = function() {
        return this.data.size
    };
    l.Ke = function() {
        return this.data.resourceType
    };
    var jJ = function(a) {
        return (a = a.data.backupCompanions) ? a.map(function(b) {
            return new lO(b)
        }) : []
    };
    lO.prototype.getAdSlotId = lO.prototype.getAdSlotId;
    lO.prototype.getHeight = lO.prototype.getHeight;
    lO.prototype.getWidth = lO.prototype.getWidth;
    lO.prototype.getContentType = lO.prototype.getContentType;
    lO.prototype.getContent = lO.prototype.getContent;
    var mO = function(a, b) {
        this.j = a;
        this.g = b
    };
    mO.prototype.getAdIdValue = function() {
        return this.j
    };
    mO.prototype.getAdIdRegistry = function() {
        return this.g
    };
    mO.prototype.getAdIdRegistry = mO.prototype.getAdIdRegistry;
    mO.prototype.getAdIdValue = mO.prototype.getAdIdValue;
    var X = function(a) {
        this.data = a
    };
    X.prototype.getAdId = function() {
        return this.data.adId
    };
    X.prototype.getCreativeAdId = function() {
        return this.data.creativeAdId
    };
    X.prototype.getCreativeId = function() {
        return this.data.creativeId
    };
    var nO = function(a) {
        return a.data.adQueryId
    };
    l = X.prototype;
    l.getAdSystem = function() {
        return this.data.adSystem
    };
    l.getAdvertiserName = function() {
        return this.data.advertiserName
    };
    l.getApiFramework = function() {
        return this.data.apiFramework
    };
    l.getWrapperAdIds = function() {
        return this.data.adWrapperIds
    };
    l.getWrapperCreativeIds = function() {
        return this.data.adWrapperCreativeIds
    };
    l.getWrapperAdSystems = function() {
        return this.data.adWrapperSystems
    };
    l.isLinear = function() {
        return this.data.linear
    };
    l.isSkippable = function() {
        return this.data.skippable
    };
    l.getContentType = function() {
        return this.data.contentType
    };
    l.getDescription = function() {
        return this.data.description
    };
    l.getTitle = function() {
        return this.data.title
    };
    l.getDuration = function() {
        return this.data.duration
    };
    l.getVastMediaWidth = function() {
        return this.data.vastMediaWidth
    };
    l.getVastMediaHeight = function() {
        return this.data.vastMediaHeight
    };
    l.getWidth = function() {
        return this.data.width
    };
    l.getHeight = function() {
        return this.data.height
    };
    l.getUiElements = function() {
        return this.data.uiElements
    };
    l.getMinSuggestedDuration = function() {
        return this.data.minSuggestedDuration
    };
    l.getAdPodInfo = function() {
        return new kO(this.data.adPodInfo)
    };
    l.getCompanionAds = function(a, b, c) {
        if (!this.data.companions) return [];
        var d = this.data.companions.map(function(e) {
            return new lO(e)
        });
        return iJ(new fJ({
            size: new di(a, b),
            Ie: c ? c.sizeCriteria === "SelectFluid" : !1
        }, c), d)
    };
    l.getTraffickingParameters = function() {
        return DD(mi(this.data.traffickingParameters))
    };
    l.getTraffickingParametersString = function() {
        return this.data.traffickingParameters
    };
    l.getVastMediaBitrate = function() {
        return this.data.vastMediaBitrate
    };
    l.getMediaUrl = function() {
        return this.data.mediaUrl
    };
    l.getSurveyUrl = function() {
        return this.data.surveyUrl
    };
    l.getDealId = function() {
        return this.data.dealId
    };
    l.getUniversalAdIds = function() {
        return (this.data.universalAdIds || []).map(function(a) {
            return new mO(a.adIdValue, a.adIdRegistry)
        })
    };
    l.getUniversalAdIdValue = function() {
        return this.data.universalAdIdValue
    };
    l.getUniversalAdIdRegistry = function() {
        return this.data.universalAdIdRegistry
    };
    l.getSkipTimeOffset = function() {
        return this.data.skipTimeOffset
    };
    l.Oe = function() {
        return this.data.disableUi
    };
    X.prototype.isUiDisabled = X.prototype.Oe;
    X.prototype.getSkipTimeOffset = X.prototype.getSkipTimeOffset;
    X.prototype.getUniversalAdIdRegistry = X.prototype.getUniversalAdIdRegistry;
    X.prototype.getUniversalAdIdValue = X.prototype.getUniversalAdIdValue;
    X.prototype.getUniversalAdIds = X.prototype.getUniversalAdIds;
    X.prototype.getDealId = X.prototype.getDealId;
    X.prototype.getSurveyUrl = X.prototype.getSurveyUrl;
    X.prototype.getMediaUrl = X.prototype.getMediaUrl;
    X.prototype.getVastMediaBitrate = X.prototype.getVastMediaBitrate;
    X.prototype.getTraffickingParametersString = X.prototype.getTraffickingParametersString;
    X.prototype.getTraffickingParameters = X.prototype.getTraffickingParameters;
    X.prototype.getCompanionAds = X.prototype.getCompanionAds;
    X.prototype.getAdPodInfo = X.prototype.getAdPodInfo;
    X.prototype.getMinSuggestedDuration = X.prototype.getMinSuggestedDuration;
    X.prototype.getUiElements = X.prototype.getUiElements;
    X.prototype.getHeight = X.prototype.getHeight;
    X.prototype.getWidth = X.prototype.getWidth;
    X.prototype.getVastMediaHeight = X.prototype.getVastMediaHeight;
    X.prototype.getVastMediaWidth = X.prototype.getVastMediaWidth;
    X.prototype.getDuration = X.prototype.getDuration;
    X.prototype.getTitle = X.prototype.getTitle;
    X.prototype.getDescription = X.prototype.getDescription;
    X.prototype.getContentType = X.prototype.getContentType;
    X.prototype.isSkippable = X.prototype.isSkippable;
    X.prototype.isLinear = X.prototype.isLinear;
    X.prototype.getWrapperAdSystems = X.prototype.getWrapperAdSystems;
    X.prototype.getWrapperCreativeIds = X.prototype.getWrapperCreativeIds;
    X.prototype.getWrapperAdIds = X.prototype.getWrapperAdIds;
    X.prototype.getApiFramework = X.prototype.getApiFramework;
    X.prototype.getAdvertiserName = X.prototype.getAdvertiserName;
    X.prototype.getAdSystem = X.prototype.getAdSystem;
    X.prototype.getCreativeId = X.prototype.getCreativeId;
    X.prototype.getCreativeAdId = X.prototype.getCreativeAdId;
    X.prototype.getAdId = X.prototype.getAdId;
    var oO = function(a) {
        this.g = a
    };
    oO.prototype.getCuePoints = function() {
        return this.g
    };
    oO.prototype.getCuePoints = oO.prototype.getCuePoints;
    var pO = function() {
            this.useLearnMoreButton = this.disableUi = this.disableClickThrough = !1;
            this.autoAlign = this.useVideoAdUi = !0;
            this.bitrate = -1;
            this.enablePreloading = !1;
            this.loadVideoTimeout = 8E3;
            this.mimeTypes = null;
            this.playAdsAfterTime = -1;
            this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
            this.uiElements = null;
            this.useStyledNonLinearAds = this.useStyledLinearAds = !1
        },
        qO = function(a, b) {
            var c = {};
            Object.assign(c, a);
            b && (c.disableClickThrough = !0);
            return c
        };
    pO.prototype.append = function(a) {
        if (a) {
            var b = a.autoAlign;
            b != null && (this.autoAlign = b);
            b = ri(a.bitrate);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.bitrate = b);
            this.disableClickThrough = a.disableClickThrough || this.disableClickThrough;
            this.disableUi = a.disableUi || this.disableUi;
            this.enablePreloading = a.enablePreloading || this.enablePreloading;
            (b = a.mimeTypes) && b.length !== 0 && (this.mimeTypes = b);
            b = ri(a.playAdsAfterTime);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.playAdsAfterTime = b);
            this.restoreCustomPlaybackStateOnAdBreakComplete =
                a.restoreCustomPlaybackStateOnAdBreakComplete || this.restoreCustomPlaybackStateOnAdBreakComplete;
            b = ri(a.loadVideoTimeout);
            typeof b === "number" && !isNaN(b) && b > 0 && (this.loadVideoTimeout = b);
            this.uiElements = a.uiElements || this.uiElements;
            this.useLearnMoreButton = a.useLearnMoreButton || this.useLearnMoreButton;
            this.useStyledLinearAds = a.useStyledLinearAds || this.useStyledLinearAds;
            this.useStyledNonLinearAds = a.useStyledNonLinearAds || this.useStyledNonLinearAds;
            this.useVideoAdUi = a.useVideoAdUi === !1 ? !1 : this.useVideoAdUi
        }
    };
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_rendering_settings.AdsRenderingSettings.AUTO_SCALE", -1);
    var rO = function(a) {
        this.F = B(a)
    };
    x(rO, H);
    var sO = function(a) {
        this.F = B(a)
    };
    x(sO, H);
    var tO = function(a) {
        this.F = B(a)
    };
    x(tO, H);
    var uO = function(a) {
        this.F = B(a)
    };
    x(uO, H);
    var vO = function(a) {
        this.F = B(a)
    };
    x(vO, H);
    var wO = function(a) {
        return zf(a, Ek, 5)
    };
    vO.prototype.getWidth = function() {
        return Lf(this, 9)
    };
    vO.prototype.getHeight = function() {
        return Lf(this, 10)
    };
    var xO = ah(vO);
    vO.ba = [3, 7, 27, 11, 32];

    function yO(a) {
        var b = a.uh,
            c = a.hj,
            d = a.sj,
            e = a.auctionNonce,
            f = a.Xf === void 0 ? 0 : a.Xf,
            g = a.bj,
            h = a.tj;
        a = !Kf(b, 14);
        for (var k = {}, n = v(Cf(b, sO, 7, ef())), m = n.next(); !m.done; m = n.next()) {
            m = m.value;
            var p = {},
                r = void 0,
                t = (r = d) == null ? void 0 : r.Qg.ph.th.dg;
            r = D(m, 1);
            if (D(m, 2).length) try {
                if (p = JSON.parse(D(m, 2)), Vi() * 100 < 1) {
                    var u = void 0;
                    (u = t) == null || u.Id({
                        rd: r,
                        status: "SUCCESS",
                        he: 100
                    })
                }
            } catch (Va) {
                u = void 0, (u = t) == null || u.Id({
                    rd: r,
                    status: "ERROR",
                    he: 1
                })
            } else u = void 0, (u = t) == null || u.Id({
                rd: r,
                status: "EMPTY",
                he: 1
            });
            k[D(m, 1)] = p
        }
        if (d =
            Af(b, Ck, 6)) k["https://googleads.g.doubleclick.net"] = ag(d), k["https://td.doubleclick.net"] = ag(d);
        n = {};
        d = Cf(b, uO, 11, ef());
        d = v(d);
        for (m = d.next(); !m.done; m = d.next()) m = m.value, n[D(m, 1)] = Lf(m, 2);
        m = {};
        Lf(b, 21) !== 0 && (m["*"] = Lf(b, 21));
        if (Cf(b, tO, 32, ef()).length > 0) {
            var w = {};
            d = v(Cf(b, tO, 32, ef()));
            for (p = d.next(); !p.done; p = d.next()) p = p.value, w[D(p, 1)] = Lf(p, 2)
        }
        p = {};
        Yd(af(b, 18)) != null && (p["https://googleads.g.doubleclick.net"] = Mf(b, 18), p["https://td.doubleclick.net"] = Mf(b, 18));
        d = b.F;
        t = nd(d);
        d = mf(d, t, $e(d, t, 24),
            24, rO);
        d = v(d);
        for (t = d.next(); !t.done; t = d.next()) r = t.value, Mf(r[1], 4) && (t = r[0], r = Mf(r[1], 4), p[t] = r);
        d = D(b, 1).split("/td/")[0];
        (t = Af(b, Ek, 5)) == null ? t = void 0 : (r = t.F, t = we(t.constructor, Ye(r, nd(r), !1)));
        var E;
        t != null && (E = Af(t, Dk, 5)) != null && df(E, 2);
        E = Object;
        r = E.assign;
        u = D(b, 1);
        var Y = D(b, 2);
        var V = Rf(b, 3, ef(Cd));
        w = r.call(E, {}, {
            seller: d,
            decisionLogicUrl: u,
            trustedScoringSignalsUrl: Y,
            interestGroupBuyers: V,
            sellerExperimentGroupId: Mf(b, 17),
            auctionSignals: JSON.parse(D(b, 4) || "{}"),
            sellerSignals: (t == null ? void 0 :
                ag(t)) || [],
            sellerTimeout: Lf(b, 15) || 50,
            perBuyerExperimentGroupIds: p,
            perBuyerSignals: k,
            perBuyerTimeouts: n,
            perBuyerCumulativeTimeouts: m,
            reportingTimeout: 5E3
        }, w ? {
            perBuyerGroupLimits: w
        } : {}, a ? {
            resolveToConfig: a
        } : {});
        if (b == null ? 0 : Kf(wO(b), 25)) w.sellerCurrency = "USD", w.perBuyerCurrencies = Object.fromEntries(nf(b, 22, ne));
        D(b, 28) && (w.directFromSellerSignalsHeaderAdSlot = D(b, 28));
        if (zO(w.interestGroupBuyers, g)) {
            w.auctionReportBuyerKeys = w.interestGroupBuyers.map(AO);
            g = {
                interestGroupCount: {
                    bucket: BigInt(0),
                    scale: 1
                },
                bidCount: {
                    bucket: BigInt(1),
                    scale: 1
                }
            };
            h || (g.totalGenerateBidLatency = {
                bucket: BigInt(2),
                scale: 1
            }, g.totalSignalsFetchLatency = {
                bucket: BigInt(3),
                scale: 1
            });
            w.auctionReportBuyers = g;
            var da = da === void 0 ? BigInt(0) : da;
            w.auctionReportBuyerDebugModeConfig = {
                enabled: !0,
                debugKey: da
            }
        }
        e && (w.auctionNonce = e, w.additionalBids = Promise.resolve());
        nf(b, 33, ne).size && (w.deprecatedRenderURLReplacements = Object.fromEntries(nf(b, 33, ne).entries()), (e = w.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (w.deprecatedRenderURLReplacements["${RENDER_DATA}"] =
            e));
        switch (f) {
            case 1:
                w.allSlotsRequestedSizes = [{
                    width: b.getWidth(),
                    height: b.getHeight()
                }];
                break;
            case 2:
                w.allSlotsRequestedSizes = [{
                    width: 123456789,
                    height: Number(b.getWidth() + "999" + b.getHeight())
                }]
        }
        f = Object;
        e = f.assign;
        da = D(b, 1);
        g = Mf(b, 17);
        h = new Ek;
        k = wO(b);
        yf(k, Dk, 5, !1) !== void 0 && (k = new Dk, E = Pf(zf(wO(b), Dk, 5), 2), k = pf(k, 2, Zd(E), "0"), E = Pf(zf(wO(b), Dk, 5), 4), k = pf(k, 4, Zd(E), "0"), C(h, 5, k));
        wO(b).getEscapedQemQueryId() && (k = wO(b).getEscapedQemQueryId(), pf(h, 2, ge(k), ""));
        D(wO(b), 6) && (k = D(wO(b), 6), pf(h, 6, ge(k),
            ""));
        Kf(wO(b), 21) && Uf(h, 21, !0);
        Kf(wO(b), 4) && Uf(h, 4, !0);
        D(wO(b), 11) && (k = D(wO(b), 11), pf(h, 11, ge(k), ""));
        Kf(wO(b), 32) && Uf(h, 32, !0);
        h = ag(h);
        k = Lf(b, 15) || 50;
        if (Kf(b, 30)) {
            if (c == null || !c.length) throw Error("top_td_without_component_auction");
        } else c = [w].concat(ia(c != null ? c : []));
        c = e.call(f, {}, {
            seller: d,
            decisionLogicUrl: da,
            sellerExperimentGroupId: g,
            sellerSignals: h,
            sellerTimeout: k,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: c
        }, a ? {
            resolveToConfig: a
        } : {});
        D(b, 28) && (c.directFromSellerSignalsHeaderAdSlot = D(b, 28));
        return c
    }

    function zO(a, b) {
        return a.some(function(c) {
            return AO(c) !== BigInt(100)
        }) && (b != null ? b : !1)
    }

    function AO(a) {
        var b;
        return (b = (new Map([
            ["https://googleads.g.doubleclick.net", BigInt(200)],
            ["https://td.doubleclick.net", BigInt(300)],
            ["https://f.creativecdn.com", BigInt(400)],
            ["https://fledge.us.criteo.com", BigInt(500)],
            ["https://fledge.eu.criteo.com", BigInt(600)],
            ["https://fledge.as.criteo.com", BigInt(700)],
            ["https://fledge-buyer-testing-1.uc.r.appspot.com", BigInt(800)]
        ])).get(a)) != null ? b : BigInt(100)
    };
    var CO = function(a, b) {
        Q.call(this);
        var c = this;
        this.navigator = b;
        this.j = function(d) {
            var e = Date.now();
            try {
                var f = BO(c, d.tdconfig)
            } catch (g) {
                f = Promise.resolve({
                    Kb: !1,
                    result: null
                })
            }
            return f.then(function(g) {
                var h = new Ak;
                h = Xf(h, 1, e);
                h = Xf(h, 2, Date.now());
                var k = g.result;
                g = g.Kb;
                var n;
                k = typeof k === "string" ? k : (n = k == null ? void 0 : k.url) != null ? n : "";
                n = {};
                return n.ffconfig = k, n.timeout = 500, n.auctioninterval = bg(h), n.isauctiontimeout = g, n
            })
        };
        this.g = new TN(a, "fledge");
        mr(this, this.g)
    };
    x(CO, Q);
    var BO = function(a, b) {
        b = xO(b);
        var c = yO({
            uh: b
        });
        b = zw(500, null).then(function() {
            return {
                Kb: !0,
                result: null
            }
        });
        a = a.navigator.runAdAuction(c).then(function(d) {
            return {
                Kb: !1,
                result: d
            }
        });
        return Promise.race([b, a])
    };
    var EO = function(a, b, c) {
        Q.call(this);
        this.C = a;
        this.A = b;
        this.B = c;
        this.g = this.j = this.o = null;
        this.l = 0;
        a = new KD(this);
        mr(this, a);
        DO(this);
        a.listen(this.A, "adsManager", this.D)
    };
    x(EO, Q);
    var DO = function(a) {
        gO(a.C).then(function(b) {
            return void FO(a, b)
        }).catch(function() {
            return void GO(a)
        })
    };
    EO.prototype.D = function(a) {
        if (["complete", "skip", "error"].includes(a.messageType)) {
            this.l++;
            if (this.l === 10) {
                this.l = 0;
                var b;
                (b = this.g) == null || b.dispose();
                DO(this)
            }
            a = Hi(this.j);
            var c;
            a && ((c = a.frames) == null ? 0 : c.omid_v1_present) || W.getInstance().report(188, {})
        }
    };
    var HO = function(a) {
            if (a.g && a.o) {
                var b = a.g;
                try {
                    b.g && b.g.setSessionClientWindow(a.o)
                } catch (c) {
                    b.dispatchEvent(new Event("error"))
                }
            }
        },
        FO = function(a, b) {
            a.j = b;
            a.g = new hO(b, a.B);
            a.g.listen("error", function() {
                return void GO(a)
            });
            jO(a.g);
            HO(a)
        },
        GO = function(a) {
            ZI(a.A, "omid", "iframeFailed");
            a.dispose()
        };
    EO.prototype.O = function() {
        this.j && (Ei(this.j), this.j = null);
        Q.prototype.O.call(this)
    };
    var IO = function(a, b, c, d) {
        Q.call(this);
        this.o = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.j = new KD(this);
        mr(this, this.j);
        this.j.listen(this.o, d, this.B)
    };
    x(IO, Q);
    var JO = function(a, b) {
        var c = b.oa;
        switch (b.messageType) {
            case "showVideo":
                a.l.kd();
                break;
            case "hide":
                a.l.nb();
                break;
            case "resizeAndPositionVideo":
                b = c.resizeAndPositionVideo;
                a.l.ae(new Rk(b.x, b.y, b.width, b.height));
                break;
            case "restoreSizeAndPositionVideo":
                a.l.be()
        }
    };
    IO.prototype.B = function(a) {
        var b = a.oa;
        switch (a.messageType) {
            case "activate":
                this.l.vc(this.g);
                break;
            case "startTracking":
                a = this.g;
                var c = this.A;
                this.j.listen(a, qh(oE), c);
                this.j.listen(a, UN, c);
                a = this.g;
                KO(a);
                a.j.listen(a.g, UN, a.Ra);
                a.j.listen(a.g, "ended", a.Tg);
                a.j.listen(a.g, "webkitbeginfullscreen", a.Sa);
                a.j.listen(a.g, "webkitendfullscreen", a.ha);
                a.j.listen(a.g, "loadedmetadata", a.Vg);
                a.j.listen(a.g, "pause", a.Xg);
                a.j.listen(a.g, "playing", a.Ue);
                a.j.listen(a.g, "timeupdate", a.Yg);
                a.j.listen(a.g, "volumechange",
                    a.ah);
                a.j.listen(a.g, "error", a.W);
                a.j.listen(a.g, Lc || Bc && !uD(8) ? "loadeddata" : "canplay", a.Ug);
                a.B = new BN;
                a.j.listen(a.B, "click", a.la);
                DN(a.B, a.g);
                a.I = new xw(1E3);
                a.j.listen(a.I, "tick", a.Ja);
                a.I.start();
                break;
            case "stopTracking":
                a = this.g;
                c = this.A;
                this.j.tb(a, qh(oE), c);
                this.j.tb(a, UN, c);
                KO(this.g);
                break;
            case "exitFullscreen":
                a = this.g;
                (yc || Ac) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen();
                break;
            case "play":
                LO(this.g);
                break;
            case "pause":
                this.g.pause();
                break;
            case "load":
                a = this.g;
                c = b.videoUrl;
                var d = b.muxedMediaUrl,
                    e = b.muxedMimeType,
                    f = b.muxedAudioCodec,
                    g = b.muxedVideoCodec,
                    h = b.demuxedAudioUrl,
                    k = b.demuxedVideoUrl,
                    n = b.demuxedAudioMimeType,
                    m = b.demuxedVideoMimeType,
                    p = b.demuxedAudioCodec,
                    r = b.demuxedVideoCodec;
                b = b.mseCompatible;
                var t = null;
                k && h && b && m && n && r && p && (t = new VB({
                    Ah: k,
                    cg: h,
                    wj: null,
                    dj: null,
                    zh: m,
                    bg: n,
                    ub: r,
                    fb: p,
                    height: null,
                    width: null,
                    Ga: b,
                    vj: null,
                    cj: null
                }));
                h = null;
                d && e && g && f && (h = new WB({
                    Pg: d,
                    zb: null,
                    mimeType: e,
                    ub: g,
                    fb: f,
                    height: null,
                    width: null,
                    Ga: b,
                    jj: null
                }));
                t ? a.load(c, t) : h ? a.load(c, h) : a.load(c,
                    null);
                break;
            case "unload":
                a = this.g;
                MO(a);
                a.U = !1;
                "removeAttribute" in a.g ? a.g.removeAttribute("src") : a.g.src = "";
                a.g.load();
                break;
            case "setCurrentTime":
                this.g.g.currentTime = b.currentTime;
                break;
            case "setVolume":
                this.g.setVolume(b.volume)
        }
    };
    IO.prototype.A = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.getCurrentTime();
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        ZI(this.o,
            this.C, a, b)
    };
    var NO = function(a, b) {
        Q.call(this);
        this.j = b;
        this.g = null;
        this.l = new IO(a, b, this.j.fa, "videoDisplay1");
        mr(this, this.l);
        var c = this.j.xa;
        c != null && (this.g = new IO(a, b, c, "videoDisplay2"), mr(this, this.g))
    };
    x(NO, Q);

    function OO(a, b, c, d) {
        var e = ej("IFRAME");
        e.id = b;
        e.name = b;
        e.width = String(c);
        e.height = String(d);
        e.allowTransparency = "true";
        e.scrolling = "no";
        e.marginWidth = "0";
        e.marginHeight = "0";
        e.frameBorder = "0";
        e.style.border = "0";
        e.style.verticalAlign = "bottom";
        e.src = "about:blank";
        e.setAttribute("aria-label", "Advertisement");
        e.title = "3rd party ad content";
        e.tabIndex = 0;
        a.appendChild(e);
        return e
    };

    function PO() {
        var a, b, c, d = Ai();
        d = d === void 0 ? window : d;
        d = ((c = d === void 0 ? null : d) != null ? c : window).googletag;
        c = (d == null ? 0 : d.apiReady) ? d : void 0;
        return (b = c == null ? void 0 : (a = c.companionAds) == null ? void 0 : a.call(c)) != null ? b : null
    }

    function QO(a) {
        var b = {};
        b.slotId = a.getSlotId().getId();
        var c = [];
        a = v(a.getSizes() || []);
        for (var d = a.next(); !d.done; d = a.next())
            if (d = d.value, typeof d !== "string") {
                var e = {};
                c.push((e.adWidth = d.getWidth(), e.adHeight = d.getHeight(), e))
            } else d === "fluid" && (d = {}, c.push((d.fluidSize = !0, d)));
        return b.adSizes = c, b
    }

    function RO(a) {
        var b = PO();
        if (b && a && Array.isArray(a)) {
            var c = new Map(b.getSlots().map(function(r) {
                return [r.getSlotId().getId(), r]
            }));
            a = v(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                var e = d.value,
                    f = c.get(e.slotId);
                if (f && !b.isSlotAPersistentRoadblock(f)) {
                    var g = e.adContent;
                    if (g && (d = vi(f.getSlotId().getDomId()))) {
                        d.style.display = "";
                        var h = e.adWidth,
                            k = e.adHeight;
                        e.fluidSize && (k = wq(d), h = k.width, k = k.height);
                        d.textContent = "";
                        if (e.friendlyIframeRendering) try {
                            var n = "google_companion_" + f.getSlotId().getId(),
                                m = OO(d,
                                    n, h, k),
                                p = m.contentWindow ? m.contentWindow.document : m.contentDocument;
                            uc && p.open("text/html", "replace");
                            ii(p, pl(g));
                            p.close()
                        } catch (r) {} else fi(d, pl(g)), d.style.width = h + "px", d.style.height = k + "px";
                        b.slotRenderEnded(f, h, k);
                        (e = e.onAdContentSet) && e(d)
                    }
                }
            }
        }
    };
    var SO = function(a, b, c, d, e, f) {
        $I.call(this, a, b, c, d, e);
        this.g = f
    };
    x(SO, $I);
    var TO = function(a, b) {
        R.call(this);
        this.B = a;
        this.A = b;
        this.g = {};
        this.j = new KD(this);
        mr(this, this.j);
        this.j.listen(Ai(), "message", this.l)
    };
    x(TO, R);
    var UO = function(a, b) {
            var c = b.g;
            a.g.hasOwnProperty(c) && ZI(a.g[c], b.type, b.messageType, b.oa)
        },
        VO = function(a, b, c, d) {
            a.g.hasOwnProperty(b) || (c = new yN(b, c), a.j.listen(c, a.B, function(e) {
                this.dispatchEvent(new SO(e.type, e.messageType, e.oa, e.tc, e.origin, b))
            }), c.g = d, c.connect(), a.g[b] = c)
        };
    TO.prototype.O = function() {
        for (var a = v(Object.values(this.g)), b = a.next(); !b.done; b = a.next()) kr(b.value);
        R.prototype.O.call(this)
    };
    TO.prototype.l = function(a) {
        a = a.g;
        var b = zN(a.data);
        if (b != null) {
            var c = b.channel;
            if (this.A && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                VO(this, c, d, a.source);
                this.dispatchEvent(new SO(b.name, b.type, b.data || {}, d, a.origin, c))
            }
        }
    };

    function WO() {
        return !!Pa("googletag.cmd", Ai())
    }

    function XO() {
        var a = Pa("googletag.console", Ai());
        return a != null ? a : null
    }
    var YO = function() {
        KD.call(this);
        this.g = null;
        this.l = new TO("gpt", !0);
        mr(this, this.l);
        this.listen(this.l, "gpt", this.B);
        WO() || Ai().top === Ai() || (this.g = new TO("gpt", !1), mr(this, this.g), this.listen(this.g, "gpt", this.A))
    };
    x(YO, KD);
    YO.prototype.B = function(a) {
        var b = a.origin,
            c = "//imasdk.googleapis.com".match(Li);
        b = b.match(Li);
        if (c[3] == b[3] && c[4] == b[4])
            if (this.g != null) VO(this.g, a.g, a.tc, Ai().parent), this.g != null && UO(this.g, a);
            else if (c = a.oa, c != null && c.scope !== void 0) {
            b = c.scope;
            c = c.args;
            var d;
            if (b === "proxy") {
                var e = a.messageType;
                e === "isGptPresent" ? d = WO() : e === "isConsolePresent" && (d = XO() != null)
            } else if (WO())
                if (b === "pubads" || b === "companionAds") {
                    d = a.messageType;
                    var f = Ai().googletag;
                    if (f != null && f[b] != null && (b = f[b](), b != null && (d = b[d],
                            d != null))) try {
                        e = d.apply(b, c)
                    } catch (g) {}
                    d = e
                } else if (b === "console") {
                if (e = XO(), e != null && (b = e[a.messageType], b != null)) try {
                    b.apply(e, c)
                } catch (g) {}
            } else b === null && (e = a.messageType, e === "googleGetCompanionAdSlots" ? (e = PO()) ? (e = e.getSlots().map(QO), d = e.length ? e : null) : d = null : (e === "googleSetCompanionAdContents" && RO(c == null ? void 0 : c[0]), d = null));
            d !== void 0 && (a.oa.returnValue = d, UO(this.l, a))
        }
    };
    YO.prototype.A = function(a) {
        UO(this.l, a)
    };
    var ZO = function(a, b) {
        if (a.g) {
            var c = a.g;
            kr(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l, kr(a.g[b]), delete a.g[b])
    };
    var aP = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if (typeof d == "undefined") throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, k, n, m, p) {
                if (n == "%") return "%";
                var r = c.shift();
                if (typeof r == "undefined") throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = r;
                return $O[n].apply(null, arguments)
            })
        },
        $O = {
            s: function(a, b, c) {
                return isNaN(c) || c == "" || a.length >= Number(c) ? a : a = b.indexOf("-", 0) > -1 ?
                    a + li(" ", Number(c) - a.length) : li(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || e == "" || (d = parseFloat(a).toFixed(e));
                var f = Number(a) < 0 ? "-" : b.indexOf("+") >= 0 ? "+" : b.indexOf(" ") >= 0 ? " " : "";
                Number(a) >= 0 && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return d = b.indexOf("-", 0) >= 0 ? f + d + li(" ", a) : f + li(b.indexOf("0", 0) >= 0 ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, f, g, h) {
                return $O.f(parseInt(a,
                    10), b, c, d, 0, f, g, h)
            }
        };
    $O.i = $O.d;
    $O.u = $O.d;

    function bP() {
        return ["autoplay", "attribution-reporting"].filter(function(a) {
            var b = document.featurePolicy;
            return b !== void 0 && typeof b.allowedFeatures == "function" && typeof b.allowedFeatures() == "object" && b.allowedFeatures().includes(a)
        }).join(";")
    }
    var dP = function(a, b, c) {
        c = c === void 0 ? !1 : c;
        R.call(this);
        this.D = b;
        this.W = c;
        this.M = this.K = null;
        this.I = !1;
        this.G = "goog_" + ni++;
        this.B = new Map;
        this.j = null;
        c = Ai();
        var d = Pa("google.ima.gptProxyInstance", c);
        d != null ? c = d : (d = new YO, z("google.ima.gptProxyInstance", d, c), c = d);
        this.Z = c;
        this.C = null;
        this.A = new KD(this);
        mr(this, this.A);
        c = this.G;
        d = this.W ? "?gdpr=1" : "";
        d = (Zi() ? "https:" : "http:") + aP("//imasdk.googleapis.com/js/core/bridge3.655.0_%s.html", SH.getLocale()) + d;
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (e.location.href.indexOf(d) ===
                            0 || e.document.referrer.indexOf(d) === 0) {
                            var f = !0;
                            break a
                        }
                    } catch (k) {}
                    e = e.parent
                } while (e !== e.top)
            } catch (k) {}
            f = !1
        }
        f && (d += "?f=" + c);
        f = window.document;
        if (Kn.length && f.head) {
            e = v(Kn);
            for (var g = e.next(); !g.done; g = e.next())
                if ((g = g.value) && f.head) {
                    var h = ej("META");
                    f.head.appendChild(h);
                    h.httpEquiv = "origin-trial";
                    h.content = g
                }
        }
        f = bP();
        c = Di("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: f,
            id: c,
            style: "border:0; opacity:0; margin:0; padding:0; position:relative; color-scheme: light;",
            title: "Advertisement"
        });
        this.A.ec(c,
            "load", this.la);
        a.appendChild(c);
        this.g = c;
        this.l = cP(this);
        this.P = new CO(this.l, navigator);
        mr(this, this.P);
        c = this.P;
        c.g.j.set("auction", c.j);
        this.U = new NO(this.l, this.D);
        mr(this, this.U);
        this.D.fa && this.A.listen(this.l, "displayContainer", this.V);
        this.A.listen(this.l, "mouse", this.aa);
        this.A.listen(this.l, "touch", this.ha);
        DI() || (this.C = new EO(a, this.l, b.fa.A.g), mr(this, this.C))
    };
    x(dP, R);
    var cP = function(a, b) {
        b = b === void 0 ? "*" : b;
        var c = a.B.get(b);
        c == null && (c = new yN(a.G, b), a.I && (c.g = Hi(a.g), c.connect()), a.B.set(b, c));
        return c
    };
    dP.prototype.vc = function(a) {
        var b;
        (b = this.C) != null && (a = a.A.g, b.B = a, b.g && (b = b.g, b.j = a, iO(b, a)))
    };
    dP.prototype.O = function() {
        this.j !== null && (this.j.dispose(), this.j = null);
        this.B.forEach(function(a) {
            kr(a)
        });
        this.B.clear();
        ZO(this.Z, this.G);
        Ei(this.g);
        R.prototype.O.call(this)
    };
    dP.prototype.aa = function(a) {
        var b = a.oa,
            c = rq(this.g),
            d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.messageType, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    };
    var eP = function(a, b) {
        var c = rq(a.g),
            d = !!("TouchEvent" in window && TouchEvent.length > 0);
        b = b.map(function(f) {
            return d ? new Touch({
                identifier: f.identifier,
                target: a.g,
                clientX: f.clientX,
                clientY: f.clientY,
                screenX: f.screenX,
                screenY: f.screenY,
                pageX: f.pageX + c.x,
                pageY: f.pageY + c.y
            }) : document.createTouch(window, a.g, f.identifier, f.pageX + c.x, f.pageY + c.y, f.screenX, f.screenY)
        });
        if (d) return b;
        var e;
        return (e = document.createTouchList) == null ? void 0 : e.apply(document, b)
    };
    dP.prototype.ha = function(a) {
        var b = a.oa,
            c = rq(this.g);
        if ("TouchEvent" in window && TouchEvent.length > 0) b = {
            bubbles: !0,
            cancelable: !0,
            view: window,
            detail: b.detail,
            ctrlKey: b.ctrlKey,
            altKey: b.altKey,
            shiftKey: b.shiftKey,
            metaKey: b.metaKey,
            touches: eP(this, b.touches),
            targetTouches: eP(this, b.targetTouches),
            changedTouches: eP(this, b.changedTouches)
        }, a = new TouchEvent(a.messageType, b), this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.messageType, !0, !0, window, b.detail, b.screenX,
                b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, eP(this, b.touches), eP(this, b.targetTouches), eP(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    };
    dP.prototype.V = function(a) {
        switch (a.messageType) {
            case "showVideo":
                this.j == null ? (this.j = new BN, this.A.listen(this.j, "click", this.ya)) : FN(this.j);
                DN(this.j, this.D.Vb());
                break;
            case "hide":
                this.j !== null && (this.j.dispose(), this.j = null)
        }
        var b = this.U;
        JO(b.l, a);
        b.g && JO(b.g, a)
    };
    dP.prototype.ya = function() {
        ZI(this.l, "displayContainer", "videoClick")
    };
    dP.prototype.la = function() {
        this.K = qj();
        this.M = nj();
        var a = Hi(this.g);
        this.B.forEach(function(c) {
            c.g = a;
            c.connect()
        });
        var b;
        (b = this.C) != null && (b.o = a, HO(b));
        this.I = !0
    };
    var fP = ha(["https://s0.2mdn.net/instream/video/client.js"]),
        gP = null,
        hP = function() {
            R.call(this);
            this.g = null;
            this.j = new Map;
            this.l = new Map;
            this.va = this.C = !1;
            this.A = null;
            this.B = new KD(this);
            mr(this, this.B)
        };
    x(hP, R);
    var iP = function() {
            gP == null && (gP = new hP);
            return gP
        },
        jv = function(a, b, c) {
            var d = {};
            d.queryId = b;
            d.viewabilityData = c;
            a.g && ZI(a.g, "activityMonitor", "viewabilityMeasurement", d)
        };
    hP.prototype.destroy = function() {
        this.B.tb(this.g, "activityMonitor", this.D);
        this.va = !1;
        this.j.clear()
    };
    hP.prototype.O = function() {
        this.destroy();
        R.prototype.O.call(this)
    };
    hP.prototype.init = function(a) {
        if (!this.va) {
            if (this.g = a || null) this.B.listen(this.g, "activityMonitor", this.D), jP(this);
            if (!(y.ima && y.ima.video && y.ima.video.client && y.ima.video.client.tagged)) {
                z("ima.video.client.sdkTag", !0);
                var b = y.document;
                a = Bi(document, "SCRIPT");
                var c = ai(fP);
                gi(a, c);
                a.async = !0;
                a.type = "text/javascript";
                b = b.getElementsByTagName("script")[0];
                b.parentNode.insertBefore(a, b)
            }
            So();
            J($u).I = SH.g;
            this.C = !0;
            J($u).l = !0;
            this.A = null;
            a = J($u);
            b = Lu(a) == "h" || Lu(a) == "b";
            c = !(N(), !1);
            b && c && (a.L = !0, a.G =
                new dt);
            this.va = !0
        }
    };
    var lP = function(a) {
            if (a == null) return !1;
            if ((yc || Ac) && a.webkitDisplayingFullscreen !== null) return a.webkitDisplayingFullscreen;
            a = kP(a);
            var b = window.screen.availHeight || window.screen.height;
            return (window.screen.availWidth || window.screen.width) - a.width <= 0 && b - a.height <= 42
        },
        kP = function(a) {
            var b = {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            };
            try {
                typeof a.getBoundingClientRect === "function" && Gi(ti(a), a) && (b = a.getBoundingClientRect())
            } catch (c) {}
            return b
        },
        mP = function(a, b, c, d, e) {
            e =
                e === void 0 ? {} : e;
            if (a.va) {
                d && e.opt_osdId == null && (e.opt_osdId = d);
                if (a.A) return a.A(b, c, e);
                if (a = d ? a.l.get(d) : SH.l) e.opt_fullscreen == null && (e.opt_fullscreen = lP(a)), e.opt_adElement == null && (e.opt_adElement = a);
                return Mx.Ab(469, cb(lv, b, c, e)) || {}
            }
            return {}
        },
        nP = function(a) {
            var b;
            SH.g !== 0 ? b = J($u).l : b = a.C;
            return b
        },
        oP = function(a, b) {
            var c = String(Math.floor(Math.random() * 1E9));
            a.l.set(c, b);
            SH.g !== 0 && (J($u).o[c] = a);
            return c
        },
        pP = function(a, b, c) {
            if (c) a.j.get(c) === b && a.j.delete(c);
            else {
                var d = [];
                a.j.forEach(function(e,
                    f) {
                    e === b && d.push(f)
                });
                d.forEach(a.j.delete, a.j)
            }
        },
        fv = function(a, b) {
            a = a.j.get(b);
            return typeof a === "function" ? a() : {}
        },
        jP = function(a) {
            if (typeof window.Goog_AdSense_Lidar_getUrlSignalsArray === "function") {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                var c;
                (c = a.g) == null || ZI(c, "activityMonitor", "pageSignals", b)
            }
        };
    hP.prototype.D = function(a) {
        var b = a.oa,
            c = b.queryId,
            d = {},
            e = null;
        d.eventId = b.eventId;
        switch (a.messageType) {
            case "getPageSignals":
                jP(this);
                break;
            case "reportVastEvent":
                e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                d.viewabilityData = mP(this, e, c, a, f);
                var g;
                (g = this.g) == null || ZI(g, "activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                c = {}, c.eventId = b.eventId, a = b.osdId, th(b, "isFullscreen") && (e = b.isFullscreen), th(b, "loggingId") && (b = b.loggingId,
                    c.loggingId = b, W.getInstance().report(43, {
                        step: "beforeLookup",
                        logid: b,
                        time: Date.now()
                    })), c.engagementString = qP(this, a, e), this.g && ZI(this.g, "activityMonitor", "engagement", c)
        }
    };
    var qP = function(a, b, c) {
        var d, e = b ? (d = a.l.get(b)) != null ? d : null : SH.l;
        a = {};
        c != null && (a.fullscreen = c);
        c = "";
        try {
            c = Pw(function() {
                return e
            }, a)
        } catch (f) {
            c = f, c = "sdktle;" + ki(c.name, 12) + ";" + ki(c.message, 40)
        }
        return c
    };
    z("ima.common.getVideoMetadata", function(a) {
        return fv(iP(), a)
    });
    z("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        jv(iP(), a, b)
    });
    var rP = function(a) {
            this.g = a;
            this.l = "";
            this.j = -1;
            this.o = !1
        },
        tP = function(a, b) {
            if (a.j >= 0) {
                var c = b == null ? function() {} : b,
                    d = function() {
                        sP(a, c);
                        a.g.removeEventListener("loadedmetadata", d, !1)
                    };
                a.g.addEventListener("loadedmetadata", d, !1);
                a.g.src = a.l;
                a.g.load()
            } else b != null && b()
        },
        sP = function(a, b) {
            var c = a.g.seekable.length > 0;
            a.o ? c ? (a.g.currentTime = a.j, uP(a), b()) : setTimeout(function() {
                return void sP(a, b)
            }, 100) : (uP(a), b())
        },
        uP = function(a) {
            a.j = -1;
            a.l = "";
            a.o = !1
        };
    var vP = new di(5, 5),
        wP = function(a) {
            R.call(this);
            this.g = a;
            this.B = this.aa = null;
            this.D = 0;
            this.M = this.G = this.U = this.loaded = this.K = !1;
            this.V = this.I = this.P = this.l = null;
            this.Z = !1;
            this.C = null;
            this.A = new rP(a);
            this.j = new KD(this);
            mr(this, this.j);
            this.size = this.getSize();
            this.fullscreen = lP(this.g)
        };
    x(wP, R);
    l = wP.prototype;
    l.te = function() {
        var a = this.A;
        a.l = a.g.currentSrc;
        a.o = a.g.seekable.length > 0;
        a.j = a.g.ended ? -1 : a.g.currentTime
    };
    l.uc = function(a) {
        tP(this.A, a)
    };
    l.load = function(a, b) {
        var c = K.getInstance().g;
        c.P = !0;
        sl(c);
        Cl("hvd_lc");
        MO(this);
        this.U = !1;
        if (b)
            if (Cl("hvd_ad"), b instanceof WB) {
                if (Cl("hvd_mad"), c = b.getMediaUrl()) {
                    Cl("hvd_admu");
                    Cl("hvd_src");
                    this.g.src = c;
                    this.g.load();
                    return
                }
            } else if (b instanceof VB) {
            Cl("hvd_dad");
            c = b.o;
            var d = b.j,
                e = b.l,
                f = b.g,
                g = b.ub,
                h = b.fb;
            if (c && d && e && f && g && h && (Cl("hvd_addu"), b.Ga)) {
                Cl("hvd_admse");
                b = e + '; codecs="' + g + '"';
                f = f + '; codecs="' + h + '"';
                if (aG() && aG() && MediaSource.isTypeSupported(b) && aG() && MediaSource.isTypeSupported(f)) {
                    Cl("hvd_ymse");
                    Cl("hvd_mse");
                    a = !1;
                    try {
                        window.location.search.indexOf("goog_limavideo=true") !== -1 && (a = !0)
                    } catch (k) {}
                    y.customElements ? a ? a = !0 : (go(PB) && W.getInstance().report(153, {
                        limvid: "vd"
                    }), a = go(PB) ? !0 : !1) : a = !1;
                    a && this.g instanceof XG ? (this.g.ib = c, this.g.wb = d) : (this.aa = new vH(this.g, [new uG(c, b, 35E4, new OE), new uG(d, f, 82E3, new OE)]), mr(this, this.aa), a = this.g, c = this.aa, c.j || (c.j = Mh(c.g).toString()), c = c.j, a.src = c);
                    this.g.load();
                    return
                }
                Cl("hvd_nmse")
            }
        } else Cl("hvd_uad");
        a ? (Cl("hvd_src"), this.g.src = a) : Cl("hvd_vn");
        this.g.load()
    };
    l.setVolume = function(a) {
        this.g.volume = Math.max(a, 0);
        this.g.muted = a === 0 ? !0 : !1
    };
    l.ae = function(a) {
        this.g.style.left = String(a.left) + "px";
        this.g.style.top = String(a.top) + "px";
        this.g.style.width = String(a.width) + "px";
        this.g.style.height = String(a.height) + "px"
    };
    l.be = function() {
        this.g.style.width = "100%";
        this.g.style.height = "100%";
        this.g.style.left = "0";
        this.g.style.right = "0"
    };
    l.getVolume = function() {
        return this.g.muted ? 0 : this.g.volume
    };
    var LO = function(a) {
        a.Z = !1;
        a.U || Lb() ? (a.M = !1, a.l = a.g.play(), a.l != null && (a.P = null, a.l.then(function() {
            a.l = null;
            a.Ue(a.P);
            a.P = null
        }).catch(function(b) {
            a.l = null;
            var c = "";
            b != null && b.name != null && (c = b.name);
            c === "AbortError" || c === "NotAllowedError" ? a.dispatchEvent("autoplayDisallowed") : a.W()
        }))) : a.M = !0
    };
    l = wP.prototype;
    l.pause = function() {
        this.l == null && (this.Z = !0, this.g.pause())
    };
    l.getCurrentTime = function() {
        return this.g.currentTime
    };
    l.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    };
    l.getSize = function() {
        return new di(this.g.offsetWidth, this.g.offsetHeight)
    };
    l.O = function() {
        this.V && mD(this.V);
        KO(this);
        R.prototype.O.call(this)
    };
    var KO = function(a) {
            a.B != null && (FN(a.B), a.B = null);
            a.I != null && a.I.dispose();
            OD(a.j);
            MO(a)
        },
        MO = function(a) {
            a.loaded = !1;
            a.G = !1;
            a.K = !1;
            a.M = !1;
            a.D = 0;
            a.l = null;
            a.P = null;
            kr(a.C)
        };
    wP.prototype.Ra = function(a) {
        this.dispatchEvent(a.type)
    };
    var yP = function(a) {
        if (!a.G) {
            a.G = !0;
            a.dispatchEvent("start");
            try {
                if (go(PB) && y.customElements) {
                    var b = y.customElements.get("lima-video");
                    a.g instanceof b ? W.getInstance().report(153, {
                        limvid: "limastart"
                    }) : W.getInstance().report(153, {
                        limvid: "videostart"
                    })
                }
            } catch (c) {
                W.getInstance().report(153, {
                    limvid: "startfail"
                })
            }
            b = typeof a.g.getAttribute === "function" && a.g.getAttribute("playsinline") != null;
            b = b === void 0 ? !1 : b;
            (!tD() && !uD(10) || !b && (BI.getInstance(), !1) ? (BI.getInstance(), wb(Eb(), "Xbox")) || (yc || Ac ? 0 : (!xc || xc &&
                sD(rD, 4)) && (Gq() ? (BI.getInstance(), !1) : !DI())) : 1) || !xc || xc && sD(rD, 3) || (yc || Ac) && !uD(4) || xP(a)
        }
    };
    l = wP.prototype;
    l.Vg = function() {
        this.U = !0;
        this.M && LO(this);
        this.M = !1;
        zP(this)
    };
    l.Ug = function() {
        this.loaded || (this.loaded = !0, this.dispatchEvent("loaded"))
    };
    l.Ue = function(a) {
        this.l != null ? this.P = a : (this.dispatchEvent("play"), Bc || tD() || Lc || yP(this))
    };
    l.Yg = function(a) {
        if (!this.G && (Bc || tD() || Lc)) {
            if (this.getCurrentTime() <= 0) return;
            if (Lc && this.g.ended && this.getDuration() === 1) {
                this.W(a);
                return
            }
            yP(this)
        }
        if (Bc || wb(Eb(), "Nintendo WiiU")) {
            if (this.getCurrentTime() - this.D > 1.5) {
                this.K = !0;
                this.g.currentTime = this.D;
                return
            }
            this.K = !1;
            this.getCurrentTime() > this.D && (this.D = this.getCurrentTime())
        }
        this.dispatchEvent("timeUpdate")
    };
    l.ah = function() {
        this.dispatchEvent("volumeChange")
    };
    l.Xg = function() {
        if (this.G && Bc && !this.Z && (AP(this) < 2 || this.K)) {
            this.C = new xw(250);
            this.j.listen(this.C, "tick", this.ya);
            this.C.start();
            var a = !0
        } else a = !1;
        a || this.l || this.dispatchEvent("pause")
    };
    l.Tg = function() {
        var a = !0;
        if (Bc || wb(Eb(), "Nintendo WiiU")) a = this.D >= this.g.duration - 1.5;
        !this.K && a && this.dispatchEvent("end")
    };
    var xP = function(a) {
        a.dispatchEvent("beginFullscreen")
    };
    wP.prototype.ha = function() {
        this.dispatchEvent("endFullscreen")
    };
    wP.prototype.W = function() {
        this.dispatchEvent("error")
    };
    wP.prototype.la = function() {
        this.dispatchEvent("click")
    };
    var zP = function(a) {
        a.g instanceof HTMLElement && (a.V = lD(a.g, vP), a.V.then(function(b) {
            a.Ea() || L(K.getInstance(), "ps", b.width + "x" + b.height)
        }))
    };
    wP.prototype.Ja = function() {
        var a = this.getSize(),
            b = lP(this.g);
        if (a.width !== this.size.width || a.height !== this.size.height) !this.fullscreen && b ? xP(this) : this.fullscreen && !b && this.ha(), this.size = a, this.fullscreen = b
    };
    wP.prototype.ya = function() {
        if (!this.g.ended && this.g.paused && (Bc || Mc ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime,
                b = AP(this);
            b > 0 && (b >= 2 || a < 2) && (kr(this.C), LO(this))
        } else kr(this.C)
    };
    var AP = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; b >= 0;) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    wP.prototype.Sa = function() {
        W.getInstance().report(139);
        xP(this)
    };
    var EP = function(a) {
            if (a instanceof BP || a instanceof CP || a instanceof DP) return a;
            if (typeof a.next == "function") return new BP(function() {
                return a
            });
            if (typeof a[Symbol.iterator] == "function") return new BP(function() {
                return a[Symbol.iterator]()
            });
            if (typeof a.Db == "function") return new BP(function() {
                return a.Db()
            });
            throw Error("Not an iterator or iterable.");
        },
        BP = function(a) {
            this.g = a
        };
    BP.prototype.Db = function() {
        return new CP(this.g())
    };
    BP.prototype[Symbol.iterator] = function() {
        return new DP(this.g())
    };
    BP.prototype.j = function() {
        return new DP(this.g())
    };
    var CP = function(a) {
        this.g = a
    };
    x(CP, Zr);
    CP.prototype.next = function() {
        return this.g.next()
    };
    CP.prototype[Symbol.iterator] = function() {
        return new DP(this.g)
    };
    CP.prototype.j = function() {
        return new DP(this.g)
    };
    var DP = function(a) {
        BP.call(this, function() {
            return a
        });
        this.l = a
    };
    x(DP, BP);
    DP.prototype.next = function() {
        return this.l.next()
    };
    var FP = function(a, b) {
        this.j = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof FP)
                for (c = a.Hc(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    l = FP.prototype;
    l.Hb = function() {
        GP(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.j[this.g[b]]);
        return a
    };
    l.Hc = function() {
        GP(this);
        return this.g.concat()
    };
    l.has = function(a) {
        return HP(this.j, a)
    };
    l.isEmpty = function() {
        return this.size == 0
    };
    l.clear = function() {
        this.j = {};
        this.l = this.size = this.g.length = 0
    };
    l.remove = function(a) {
        return this.delete(a)
    };
    l.delete = function(a) {
        return HP(this.j, a) ? (delete this.j[a], --this.size, this.l++, this.g.length > 2 * this.size && GP(this), !0) : !1
    };
    var GP = function(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                HP(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], HP(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    };
    l = FP.prototype;
    l.get = function(a, b) {
        return HP(this.j, a) ? this.j[a] : b
    };
    l.set = function(a, b) {
        HP(this.j, a) || (this.size += 1, this.g.push(a), this.l++);
        this.j[a] = b
    };
    l.forEach = function(a, b) {
        for (var c = this.Hc(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    l.keys = function() {
        return EP(this.Db(!0)).j()
    };
    l.values = function() {
        return EP(this.Db(!1)).j()
    };
    l.entries = function() {
        var a = this;
        return eD(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    l.Db = function(a) {
        GP(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new Zr;
        e.next = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return $r;
            var f = d.g[b++];
            return {
                value: a ? f : d.j[f],
                done: !1
            }
        };
        return e
    };
    var HP = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var JP = function() {
        R.call(this);
        this.currentTime = 0;
        this.duration = NaN;
        this.l = !0;
        this.volume = 1;
        this.muted = !1;
        this.C = 1;
        this.playbackRate = 0;
        this.j = this.g = this.G = null;
        this.buffered = new IP;
        this.D = new IP;
        this.B = "";
        this.tagName = "VIDEO";
        this.height = this.width = 0;
        this.canPlayType = function() {
            return ""
        };
        this.A = new KD(this);
        mr(this, this.A);
        var a = QH(SH);
        a && (this.duration = NH(a))
    };
    x(JP, R);
    var KP = function() {
        var a = ["video/mp4"],
            b = ["video/ogg"],
            c = new JP;
        c.canPlayType = function(d) {
            return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
        };
        return c
    };
    l = JP.prototype;
    l.pause = function() {
        if (!this.l) {
            var a;
            (a = this.G) == null || a.stop();
            this.l = !0;
            this.dispatchEvent("timeupdate");
            this.dispatchEvent("pause")
        }
    };
    l.load = function() {
        this.l = !0;
        this.dispatchEvent("loadstart");
        var a;
        isNaN(this.duration) ? a = 10 + Math.random() * 20 : a = this.duration;
        this.duration = Number(a);
        this.dispatchEvent("durationchange");
        a = this.D;
        a.g.push(new LP(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new LP(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        this.currentTime > 0 && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress");
        this.playbackRate = this.C
    };
    l.setVolume = function(a) {
        this.volume = a;
        this.dispatchEvent("volumechange")
    };
    l.setAttribute = function(a, b) {
        a != null && MP.set(a, b)
    };
    l.getAttribute = function(a) {
        return MP.get(a)
    };
    l.Zg = function(a) {
        var b = null,
            c = null;
        switch (a.type) {
            case "loadeddata":
                b = "Loaded";
                break;
            case "playing":
                b = "Playing";
                c = "#00f";
                break;
            case "pause":
                b = "Paused";
                break;
            case "ended":
                b = "Ended", c = "#000"
        }
        b && this.j && (this.j.innerText = b);
        c && this.g && (this.g.style.backgroundColor = c)
    };
    ea.Object.defineProperties(JP.prototype, {
        src: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B
            },
            set: function(a) {
                this.B = a
            }
        }
    });
    var MP = new FP,
        LP = function(a) {
            this.startTime = 0;
            this.endTime = a
        },
        IP = function() {
            this.length = 0;
            this.g = []
        };
    IP.prototype.start = function(a) {
        return this.g[a].startTime
    };
    IP.prototype.end = function(a) {
        return this.g[a].endTime
    };
    var OP = function(a) {
        Q.call(this);
        this.o = a;
        this.l = this.g = null;
        this.j = NP(this);
        this.g = Di("DIV", {
            style: "display:none;"
        });
        this.o.appendChild(this.g);
        this.g.appendChild(this.j);
        this.l = Di("DIV", {
            style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
        });
        this.g.appendChild(this.l);
        LG(function() {
            L(K.getInstance(), "haob", "1")
        })
    };
    x(OP, Q);
    OP.prototype.initialize = function() {
        this.j && this.j.load()
    };
    OP.prototype.O = function() {
        Ei(this.g);
        Q.prototype.O.call(this)
    };
    var NP = function(a) {
            var b = QH(SH);
            if (MH(b, "useVideoElementFake")) a = KP(), b = Di("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            }), Object.assign(b, a), a.g = Di("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            }), a.j = Di("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            }), a.g.appendChild(a.j), b.appendChild(a.g), a.A.listen(a, ["loadeddata", "playing", "pause", "ended"], a.Zg), a = b;
            else {
                b = !1;
                try {
                    window.location.search.indexOf("goog_limavideo=true") !==
                        -1 && (b = !0)
                } catch (c) {}
                if (PP(a, b)) {
                    b && console.log("force lima video in wrapper");
                    a = null;
                    try {
                        a = new XG
                    } catch (c) {
                        a = Di("lima-video"), go(PB) && W.getInstance().report(153, {
                            limvid: "firefail"
                        })
                    }
                    a.style.backgroundColor = "#000";
                    a.style.height = "100%";
                    a.style.width = "100%";
                    a.style.position = "absolute";
                    a.style.left = "0";
                    a.style.top = "0"
                } else a = Di("VIDEO", {
                    style: "background-color:#000;position:absolute;width:100%;height:100%;left:0;top:0;",
                    title: "Advertisement".toString()
                })
            }
            a.setAttribute("webkit-playsinline", "true");
            a.setAttribute("playsinline", "true");
            return a
        },
        PP = function(a, b) {
            if (!y.customElements) return !1;
            if (b) return !0;
            if (Mb() && ti(a.o) !== document) return !1;
            go(PB) && W.getInstance().report(153, {
                limvid: "vw"
            });
            return go(PB) ? !0 : !1
        };
    OP.prototype.Vb = function() {
        return this.l
    };
    OP.prototype.nb = function() {
        var a = this.g;
        a != null && (a.style.display = "none")
    };
    var TP = function(a, b, c) {
        var d = a && a.getRootNode ? a.getRootNode({
            composed: !0
        }) : a;
        if (a == null || !Gi(ti(d), d)) throw pJ(oJ, null, "containerElement", "element");
        this.j = b;
        this.P = FI(this.j || null);
        this.M = vD(this.j || null);
        this.K = String(Math.floor(Math.random() * 1E9));
        this.D = !1;
        this.kc = a;
        this.I = b != null;
        SH.g = 2;
        this.J = QP(b ? b : null);
        d = Di("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.o = d;
        this.g = null;
        RP(this) && b ? a = new wP(b) : (this.g = new OP(this.o), a = new wP(this.g.j));
        this.fa = a;
        this.xa = this.l = null;
        if (a = this.g && SH.o) a = !(RP(this) || yc || Ac || Hq() || xc && (!xc || !sD(rD, 4)));
        a && (this.l = new OP(this.o), this.xa = new wP(this.l.j));
        this.A = c || null;
        this.G = this.A != null;
        RP(this) && b ? typeof b.getBoundingClientRect !== "function" ? (c = this.o, SH.l = c) : c = b : c = this.o;
        this.C = c;
        this.B = new dP(this.o, this, !1);
        this.size = new di(0, 0);
        this.L = "";
        b && (b = LC(b.src || b.currentSrc), b.toString().length < 200 ? this.L = b.toString() : b.j.length < 200 && (this.L = b.j));
        this.oe = new Map;
        this.oe.set("videoDisplay1", this.fa);
        this.xa && this.oe.set("videoDisplay2",
            this.xa);
        SP(this) && !SH.j && console.warn("Custom media element must be a <video> or <audio> element. Viewability/audibility measurement will fail.")
    };
    l = TP.prototype;
    l.initialize = function() {
        this.D = !0;
        this.g != null && this.g.initialize();
        this.l != null && this.l.initialize()
    };
    l.va = function() {
        return this.D
    };
    l.destroy = function() {
        var a = this;
        this.j = null;
        kr(this.g);
        kr(this.l);
        kr(this.B);
        this.fa.uc(function() {
            return kr(a.fa)
        });
        this.xa != null && this.xa.uc(function() {
            return kr(a.xa)
        });
        Ei(this.o)
    };
    l.kd = function() {
        if (this.g != null) {
            var a = this.g.g;
            a != null && (a.style.display = "block")
        }
    };
    l.vc = function(a) {
        this.fa !== a && this.g && this.l && this.xa && (a.setVolume(this.fa.getVolume()), a = this.fa, this.fa = this.xa, this.xa = a, a = this.g, this.g = this.l, this.l = a, this.l.nb(), this.B.vc(this.fa))
    };
    l.nb = function() {
        this.g != null && this.g.nb()
    };
    l.Vb = function() {
        return this.G && this.A ? this.A : this.g != null ? this.g.Vb() : null
    };
    var RP = function(a) {
            return EI(a.J) && a.I
        },
        SP = function(a) {
            var b = ["VIDEO", "AUDIO"],
                c;
            return RP(a) && !!a.j && !b.includes((c = a.j.tagName) == null ? void 0 : c.toUpperCase())
        };
    TP.prototype.getSize = function() {
        return this.size
    };
    var QP = function(a) {
        return a != null && typeof a.getAttribute === "function" && a.getAttribute("playsinline") != null ? !0 : !1
    };
    TP.prototype.ae = function(a) {
        this.fa.ae(a)
    };
    TP.prototype.be = function() {
        this.fa.be()
    };
    TP.prototype.destroy = TP.prototype.destroy;
    TP.prototype.initialize = TP.prototype.initialize;
    var UP = {
            AD_LOAD: "adLoadError",
            AD_PLAY: "adPlayError"
        },
        VP = function(a) {
            var b = Error.call(this);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.data = a
        };
    x(VP, Error);
    l = VP.prototype;
    l.getInnerError = function() {
        var a = this.data.innerError;
        return a instanceof Object ? new VP(a) : a != null ? Error(a) : null
    };
    l.getMessage = function() {
        return this.data.errorMessage
    };
    l.getErrorCode = function() {
        return this.data.errorCode
    };
    l.getVastErrorCode = function() {
        var a = this.getErrorCode();
        return a < 1E3 ? a : 900
    };
    l.getType = function() {
        return this.data.type
    };
    l.toString = function() {
        return "AdError " + this.getErrorCode() + ": " + this.getMessage() + (this.getInnerError() != null ? " Caused by: " + this.getInnerError() : "")
    };
    VP.prototype.getType = VP.prototype.getType;
    VP.prototype.getVastErrorCode = VP.prototype.getVastErrorCode;
    VP.prototype.getErrorCode = VP.prototype.getErrorCode;
    VP.prototype.getMessage = VP.prototype.getMessage;
    VP.prototype.getInnerError = VP.prototype.getInnerError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error.AdError.Type", UP);
    var WP = {
            AD_ERROR: "adError"
        },
        XP = function(a, b) {
            b = b === void 0 ? null : b;
            rv.call(this, "adError");
            this.error = a;
            this.g = b
        };
    x(XP, rv);
    XP.prototype.getError = function() {
        return this.error
    };
    XP.prototype.getUserRequestContext = function() {
        return this.g
    };
    XP.prototype.getUserRequestContext = XP.prototype.getUserRequestContext;
    XP.prototype.getError = XP.prototype.getError;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_error_event.AdErrorEvent.Type", WP);
    var YP = {
            AD_CAN_PLAY: "adCanPlay",
            Eh: "adStarted",
            CONTENT_PAUSE_REQUESTED: "contentPauseRequested",
            CONTENT_RESUME_REQUESTED: "contentResumeRequested",
            CLICK: "click",
            VIDEO_CLICKED: "videoClicked",
            VIDEO_ICON_CLICKED: "videoIconClicked",
            pe: "engagedView",
            EXPANDED_CHANGED: "expandedChanged",
            STARTED: "start",
            AD_PROGRESS: "adProgress",
            AD_BUFFERING: "adBuffering",
            IMPRESSION: "impression",
            ue: "measurable_impression",
            VIEWABLE_IMPRESSION: "viewable_impression",
            qe: "fully_viewable_audible_half_duration_impression",
            Jf: "overlay_resize",
            Kf: "overlay_unmeasurable_impression",
            Lf: "overlay_unviewable_impression",
            Nf: "overlay_viewable_immediate_impression",
            Mf: "overlay_viewable_end_of_session_impression",
            Vh: "externalActivityEvent",
            PAUSED: "pause",
            RESUMED: "resume",
            FIRST_QUARTILE: "firstQuartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdQuartile",
            COMPLETE: "complete",
            DURATION_CHANGE: "durationChange",
            USER_CLOSE: "userClose",
            Ui: "userRecall",
            Ii: "prefetched",
            LOADED: "loaded",
            ALL_ADS_COMPLETED: "allAdsCompleted",
            SKIPPED: "skip",
            Rf: "skipShown",
            LINEAR_CHANGED: "linearChanged",
            SKIPPABLE_STATE_CHANGED: "skippableStateChanged",
            AD_METADATA: "adMetadata",
            AD_BREAK_FETCH_ERROR: "adBreakFetchError",
            AD_BREAK_READY: "adBreakReady",
            LOG: "log",
            VOLUME_CHANGED: "volumeChange",
            VOLUME_MUTED: "mute",
            INTERACTION: "interaction",
            Jh: "companionBackfill",
            Si: "trackingUrlPinged",
            Vi: "video_card_endcap_collapse",
            Wi: "video_card_endcap_dismiss",
            Xi: "video_card_endcap_impression",
            Mh: "companionInitialized",
            Lh: "companionImpression",
            Kh: "companionClick",
            Ci: "mediaUrlPinged",
            LOAD_START: "loadStart",
            Ei: "navigationRequested"
        },
        ZP = function(a, b, c) {
            b = b === void 0 ? null : b;
            c = c === void 0 ? null : c;
            rv.call(this, a);
            this.ad = b;
            this.l = c
        };
    x(ZP, rv);
    ZP.prototype.getAd = function() {
        return this.ad
    };
    ZP.prototype.getAdData = function() {
        return this.l
    };
    ZP.prototype.getAdData = ZP.prototype.getAdData;
    ZP.prototype.getAd = ZP.prototype.getAd;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ad_event.AdEvent.Type", YP);
    var $P = function(a, b) {
        b = b === void 0 ? null : b;
        ZP.call(this, "adMetadata", a);
        this.g = b
    };
    x($P, ZP);
    $P.prototype.sg = function() {
        return this.g
    };
    $P.prototype.getAdCuePoints = $P.prototype.sg;
    var aQ = function(a) {
        this.adBreakDuration = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var bQ = function(a, b) {
        R.call(this);
        this.l = a;
        this.B = b;
        this.j = this.l.currentTime;
        this.g = new xw(250);
        mr(this, this.g);
        this.A = new KD(this);
        mr(this, this.A);
        MD(this.A, this.g, "tick", this.C, !1, this)
    };
    x(bQ, R);
    bQ.prototype.kb = function() {
        return this.j
    };
    bQ.prototype.start = function() {
        cQ(this);
        this.g.start()
    };
    bQ.prototype.stop = function() {
        this.g.stop()
    };
    bQ.prototype.C = function() {
        var a = this.l.currentTime;
        a !== this.kb() && (this.j = a, cQ(this))
    };
    var cQ = function(a) {
        var b = {};
        b.currentTime = a.kb();
        ZI(a.B, "contentTimeUpdate", "contentTimeUpdate", b)
    };
    var dQ = vc && "srcdoc" in Bi(document, "IFRAME"),
        eQ = function(a, b) {
            a.open("text/html", "replace");
            ii(a, pl(String(b)));
            a.close()
        };
    var fQ = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        gQ = function(a) {
            a = ub(a);
            if (a == "") return null;
            var b = String(a.slice(0, 4)).toLowerCase();
            if (("url(" <
                    b ? -1 : "url(" == b ? 0 : 1) == 0) return null;
            if (a.indexOf("(") > 0) {
                if (/"|'/.test(a)) return null;
                b = /([\-\w]+)\(/g;
                for (var c; c = b.exec(a);)
                    if (!(c[1].toLowerCase() in fQ)) return null
            }
            return a
        };

    function hQ(a, b) {
        a = y[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }

    function iQ(a) {
        var b = y.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    hQ("Element", "attributes") || hQ("Node", "attributes");
    hQ("Element", "innerHTML") || hQ("HTMLElement", "innerHTML");
    hQ("Node", "nodeName");
    hQ("Node", "nodeType");
    hQ("Node", "parentNode");
    hQ("Node", "childNodes");
    hQ("HTMLElement", "style") || hQ("Element", "style");
    hQ("HTMLStyleElement", "sheet");
    var jQ = iQ("getPropertyValue"),
        kQ = iQ("setProperty");
    hQ("Element", "namespaceURI") || hQ("Node", "namespaceURI");

    function lQ(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (sc && document.documentMode < 10) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if (typeof b[c] != "function") throw Error("Clobbering detected");
        return b[c].apply(b, d)
    };
    var mQ = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        },
        oQ = function(a) {
            if (!a) return Qh;
            var b = document.createElement("div").style;
            nQ(a).forEach(function(c) {
                var d = vc && c in mQ ? c : c.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                d.lastIndexOf("--", 0) != 0 && d.lastIndexOf("var", 0) != 0 && (c = lQ(jQ, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [c]) || "", c = gQ(c), c != null && lQ(kQ, b, b.setProperty ? "setProperty" : "setAttribute", [d, c]))
            });
            return new Ph(b.cssText ||
                "", Oh)
        },
        nQ = function(a) {
            Sa(a) ? a = ic(a) : (a = rh(a), ec(a, "cssText"));
            return a
        };
    var pQ = ha([""]),
        qQ = function(a, b, c) {
            R.call(this);
            this.j = a;
            this.A = b;
            this.D = c;
            this.g = null;
            this.G = "";
            this.I = bi(pQ);
            this.K = 0;
            this.B = this.slot = this.l = null;
            this.C = ""
        };
    x(qQ, R);
    qQ.prototype.init = function(a) {
        this.C = a;
        a = "about:blank";
        sc && (a = "");
        this.l = Di("IFRAME", {
            src: a,
            allowtransparency: !0,
            background: "transparent",
            title: "Advertisement"
        });
        mq(this.l, {
            display: "none",
            width: "0",
            height: "0"
        });
        a = this.j.kc;
        a.appendChild(this.l);
        a = a.ownerDocument;
        a = a.defaultView || a.parentWindow;
        this.B == null && (this.B = new KD(this));
        this.B.listen(a, "message", this.M);
        a = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (this.C + '");\x3c/script></body>');
        if (Mc || Kc || tc) {
            var b = this.l.contentWindow;
            b && eQ(b.document, a)
        } else b = this.l, dQ ? (a = pl(a), b.srcdoc = $h(a)) : (b = b.contentWindow) && eQ(b.document, a)
    };
    qQ.prototype.M = function(a) {
        try {
            var b = a.g.data;
            try {
                var c = JSON.parse(b)
            } catch (t) {
                return
            }
            var d = c.session;
            if (d != null && this.C === d) switch (c.type) {
                case "friendlyReady":
                    var e = rQ(this);
                    if (e != null) {
                        this.g = e;
                        this.G = e.currentSrc;
                        var f = e.style.cssText,
                            g = document.implementation.createHTMLDocument("").createElement("DIV");
                        g.style.cssText = f;
                        this.I = oQ(g.style);
                        this.K = e.currentTime
                    } else {
                        var h = this.j.kc,
                            k = "border: 0; margin: 0; padding: 0; position: absolute; ",
                            n = this.j.getSize();
                        k += "width:" + n.width + "px;";
                        k += "height:" +
                            n.height + "px;";
                        this.g = Di("VIDEO", {
                            style: k,
                            autoplay: !0
                        });
                        h.appendChild(this.g)
                    }
                    var m = this.j.kc;
                    h = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var p = vq(this.g);
                    h += "width:" + p.width + "px;";
                    h += "height:" + p.height + "px;";
                    this.slot = Di("DIV", {
                        style: h
                    });
                    m.appendChild(this.slot);
                    try {
                        this.l.contentWindow.loader.initFriendly(this.g, this.slot)
                    } catch (t) {
                        sQ(this)
                    }
                    ZI(this.A, "vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g && !Ki() && !Ji() && mq(this.g, {
                        visibility: "visible"
                    });
                    ZI(this.A, "vpaid", "", b);
                    break;
                case "becameNonlinear":
                    tQ(this);
                    ZI(this.A, "vpaid", "", b);
                    break;
                case "startAd":
                    m = {};
                    if (this.g) {
                        k = this.g.paused;
                        var r = this.g.currentTime > 0;
                        m.apl = r && !k ? "1" : "0";
                        m.ip = k ? "1" : "0";
                        m.iavp = r ? "1" : "0"
                    } else m.apl = "n";
                    W.getInstance().report(99, m);
                    ZI(this.A, "vpaid", "", b);
                    this.kd();
                    break;
                default:
                    ZI(this.A, "vpaid", "", b)
            }
        } catch (t) {
            sQ(this)
        }
    };
    var sQ = function(a) {
        var b = {
            type: "error"
        };
        b.session = a.C;
        b = JSON.stringify(b);
        a.postMessage(b)
    };
    qQ.prototype.postMessage = function(a) {
        window.postMessage(a, "*")
    };
    var rQ = function(a) {
        return (a.D === "videoDisplayUnknown" ? a.j.fa : a.j.oe.get(a.D)).A.g
    };
    qQ.prototype.kd = function() {
        rQ(this) != null && this.j.kd()
    };
    var tQ = function(a) {
        a.g && !Ki() && !Ji() && mq(a.g, {
            visibility: "hidden"
        })
    };
    qQ.prototype.O = function() {
        kr(this.B);
        this.B = null;
        Ei(this.slot);
        this.slot = null;
        Ei(this.l);
        this.l = null;
        var a = rQ(this);
        if (a != null) {
            var b = this.I;
            a.style.cssText = b instanceof Ph && b.constructor === Ph ? b.g : "type_error:SafeStyle";
            Ki() || Ji() ? (a.src = this.G, a.currentTime = this.K) : (a.removeAttribute("src"), this.j.nb())
        } else Ei(this.g), this.g = null;
        R.prototype.O.call(this)
    };
    var uQ = function(a, b) {
        Q.call(this);
        this.j = a;
        this.l = b;
        this.g = new Map
    };
    x(uQ, Q);
    var vQ = function(a, b) {
        try {
            var c = b.oa,
                d = c.session;
            switch (c.vpaidEventType) {
                case "createFriendlyIframe":
                    b = "videoDisplayUnknown";
                    c.videoDisplayName && (b = c.videoDisplayName);
                    var e = c.session,
                        f = new qQ(a.j, a.l, b);
                    a.g.set(e, f);
                    f.init(e);
                    break;
                case "vpaidNonLinear":
                    var g = a.g.get(d);
                    g && tQ(g);
                    break;
                case "destroyFriendlyIframe":
                    var h = a.g.get(d);
                    h && (h.dispose(), a.g.delete(d))
            }
        } catch (k) {
            W.getInstance().report(125, {
                msg: k.message
            })
        }
    };
    uQ.prototype.O = function() {
        this.g.forEach(function(a) {
            a.dispose()
        })
    };
    var wQ = function(a) {
        this.F = B(a)
    };
    x(wQ, H);
    wQ.prototype.getValue = function() {
        return D(this, 1)
    };
    wQ.prototype.getVersion = function() {
        return F(this, 5)
    };
    var xQ = ah(wQ);
    var yQ = function() {
            this.g = window
        },
        zQ = function(a, b, c, d) {
            if (d) {
                var e = Nf(c, 2) - Date.now() / 1E3;
                e = {
                    Qc: Math.max(e, 0),
                    path: D(c, 3),
                    domain: D(c, 4),
                    ed: !1
                };
                c = c.getValue();
                a = a.g;
                Kf(d, 5) && Xl(b, c, e, a)
            }
        },
        AQ = function(a, b, c) {
            if (c && Sl(b, c, a.g)) {
                var d = a.g.location.hostname;
                if (d === "localhost") d = ["localhost"];
                else if (d = d.split("."), d.length < 2) d = [];
                else {
                    for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                    d = e
                }
                d = v(d);
                for (var g = d.next(); !g.done; g = d.next()) e = b, f = a.g, g = g.value, Kf(c, 5) && f.origin !== "null" && (new Ql(f.document)).remove(e,
                    "/", g)
            }
        };
    var BQ = function() {
        this.g = [];
        this.j = []
    };
    l = BQ.prototype;
    l.isEmpty = function() {
        return this.g.length === 0 && this.j.length === 0
    };
    l.clear = function() {
        this.g = [];
        this.j = []
    };
    l.contains = function(a) {
        return dc(this.g, a) || dc(this.j, a)
    };
    l.remove = function(a) {
        var b = this.g;
        b: {
            var c = b.length - 1;c < 0 && (c = Math.max(0, b.length + c));
            if (typeof b === "string") c = typeof a !== "string" || a.length != 1 ? -1 : b.lastIndexOf(a, c);
            else {
                for (; c >= 0; c--)
                    if (c in b && b[c] === a) break b;
                c = -1
            }
        }
        c >= 0 ? (fc(b, c), b = !0) : b = !1;
        return b || ec(this.j, a)
    };
    l.Hb = function() {
        for (var a = [], b = this.g.length - 1; b >= 0; --b) a.push(this.g[b]);
        var c = this.j.length;
        for (b = 0; b < c; ++b) a.push(this.j[b]);
        return a
    };
    var Z = function(a, b, c, d, e, f, g, h) {
        R.call(this);
        var k = this;
        this.I = a;
        this.g = b;
        this.adTagUrl = c;
        this.ha = d;
        this.Sa = e;
        this.D = g;
        this.Ra = h;
        this.A = new pO;
        this.M = !1;
        this.volume = 1;
        this.ha = d;
        this.aa = -1;
        this.C = this.l = this.j = null;
        this.B = new bQ({
            currentTime: 0
        }, this.D);
        this.G = new BQ;
        this.la = this.V = !1;
        this.W = new Map;
        this.Z = this.ya = !1;
        this.Ja = new uQ(b, g);
        mr(this, this.Ja);
        this.K = f && this.g.A != null;
        this.P = function() {
            var n = k.g.fa,
                m = n.getCurrentTime();
            n = n.getDuration();
            return {
                currentTime: m,
                duration: n,
                isPlaying: !0,
                volume: k.volume
            }
        };
        this.U = new KD(this);
        this.U.listen(this.D, "adsManager", this.Fb)
    };
    x(Z, R);
    Z.prototype.Fb = function(a) {
        var b = this,
            c = a.messageType,
            d = a.oa,
            e = {};
        switch (c) {
            case "error":
                CQ(this);
                DQ(this, d);
                break;
            case "contentPauseRequested":
                W.getInstance().report(130);
                EQ(this);
                this.B.stop();
                FQ(this, c, d);
                break;
            case "contentResumeRequested":
                GQ(this, function() {
                    FQ(b, c, d)
                });
                break;
            case "remainingTime":
                this.aa = d.remainingTime;
                break;
            case "skip":
                FQ(this, c, d);
                break;
            case "log":
                FQ(this, c, d, d.logData);
                break;
            case "companionBackfill":
                a = Pa("window.google_show_companion_ad");
                a != null && a();
                break;
            case "skipShown":
                this.M = !0;
                FQ(this, c, d);
                break;
            case "interaction":
                FQ(this, c, d, d.interactionData);
                break;
            case "vpaidEvent":
                vQ(this.Ja, a);
                break;
            case "skippableStateChanged":
                e = d.adData;
                e.skippable != null && (this.M = e.skippable);
                FQ(this, c, d);
                break;
            case "volumeChange":
                e = d.adData;
                e != null && typeof e.volume === "number" && (this.volume = e.volume);
                FQ(this, c, d);
                break;
            case "firstQuartile":
                FQ(this, OI.firstQuartile, d);
                FQ(this, c, d);
                break;
            case "thirdQuartile":
                FQ(this, OI.thirdQuartile, d);
                FQ(this, c, d);
                break;
            case "updateGfpCookie":
                HQ(this, d);
                break;
            default:
                FQ(this, c, d)
        }
    };
    var FQ = function(a, b, c, d) {
            if (c.companions == null) {
                var e = a.W.get(c.adId);
                c.companions = e != null ? e : []
            }
            var f = c.adData;
            if (e = f == null ? null : new X(f)) a.j = e;
            switch (b) {
                case "adBreakReady":
                case "mediaUrlPinged":
                    b = new ZP(b, null, c);
                    break;
                case "adMetadata":
                    b = null;
                    c.adCuePoints != null && (b = new oO(c.adCuePoints));
                    b = new $P(e, b);
                    break;
                case "allAdsCompleted":
                    a.j = null;
                    a.ya = !0;
                    b = new ZP(b, e);
                    break;
                case "contentPauseRequested":
                    a.Z = !1;
                    b = new ZP(b, e);
                    break;
                case "contentResumeRequested":
                    a.j = null;
                    a.Z = !0;
                    b = new ZP(b, e);
                    break;
                case "loaded":
                    a.aa =
                        e.getDuration();
                    a.M = !1;
                    GI() && (d = a.I, c = a.Sa, d.j.set(nO(e), a.P), nP(d) && mP(d, "loaded", nO(e), c));
                    b = new ZP(b, e, f);
                    break;
                case "start":
                    a.W.set(c.adId, c.companions);
                    a.g.Vb() != null && (a.l == null ? (a.l = new BN, a.U.listen(a.l, "click", a.Wg)) : FN(a.l), DN(a.l, a.g.Vb()));
                    b = new ZP(b, e);
                    break;
                case "complete":
                    a.l != null && FN(a.l);
                    GI() && pP(a.I, a.P, nO(e));
                    a.j = null;
                    a.W.delete(c.adId);
                    b = new ZP(b, e);
                    break;
                case "log":
                    c = null;
                    d != null && d.type != null ? (f = d.type, f = f === "adLoadError" || f === "adPlayError") : f = !1;
                    f && (c = {
                        adError: new VP(d)
                    });
                    b = new ZP(b, e, c);
                    break;
                case "interaction":
                    b = new ZP(b, e, d);
                    break;
                case "adProgress":
                    b = new ZP(b, e, new aQ(c));
                    break;
                default:
                    b = new ZP(b, e)
            }
            a.dispatchEvent(b);
            a.ya && a.Z && a.destroy()
        },
        DQ = function(a, b) {
            var c = new XP(new VP(b));
            a.V ? (a.dispatchEvent(c), GI() && a.j && pP(a.I, a.P, nO(a.j)), a.j = null) : a.G.j.push(c);
            a = {
                error: b.errorCode,
                vis: ml(document)
            };
            W.getInstance().report(7, a)
        },
        IQ = function(a, b, c) {
            ZI(a.D, "adsManager", b, c)
        },
        GQ = function(a, b) {
            W.getInstance().report(131);
            CQ(a, b);
            a.Ea() || a.B.start()
        },
        EQ = function(a) {
            var b =
                a.g.fa;
            RP(a.g) && a.A.restoreCustomPlaybackStateOnAdBreakComplete && b.te != null && b.te()
        },
        CQ = function(a, b) {
            var c = a.g.fa;
            RP(a.g) && a.A.restoreCustomPlaybackStateOnAdBreakComplete && c.uc != null ? c.uc(b) : b && b()
        };
    l = Z.prototype;
    l.configureAdsManager = function(a, b) {
        this.C = a;
        a.currentTime != null && (this.B = new bQ(a, this.D), this.B.start());
        b != null && (this.A = JQ(b))
    };
    l.init = function(a, b, c, d) {
        if (this.G.isEmpty()) {
            var e = this.g,
                f = null;
            e.j && d == null && (f = {
                vd: "setnull"
            });
            e.j && e.j === d && (f = {
                vd: "match"
            });
            if (e.j && e.j !== d) {
                f = FI(d || null);
                var g = vD(d || null);
                f = {
                    vd: "diff",
                    oc: e.P,
                    nc: f,
                    oi: e.M,
                    ni: g
                }
            }!e.j && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.K, W.getInstance().report(93, f));
            d != null && (e.J = QP(d), EI(e.J) && (e.I = !0, kr(e.g), kr(e.l), kr(e.xa), e.g = null, e.l = null, e.xa = null, kr(e.fa), e.fa = new wP(d), typeof d.getBoundingClientRect !== "function" ? (e.C = e.o, SH.l = e.C) : e.C = d, e.B.vc(e.fa)));
            this.V = !0;
            this.resize(a,
                b, c);
            d = qO(this.A, this.K);
            e = {};
            a = (e.adsRenderingSettings = d, e.width = a, e.height = b, e.viewMode = c, e);
            IQ(this, "init", a)
        } else {
            for (; !this.G.isEmpty();) b = a = this.G, b.g.length === 0 && (b.g = b.j, b.g.reverse(), b.j = []), a = a.g.pop(), this.dispatchEvent(a);
            this.dispose()
        }
    };
    l.isCustomPlaybackUsed = function() {
        return RP(this.g)
    };
    l.isCustomClickTrackingUsed = function() {
        return this.K
    };
    l.getRemainingTime = function() {
        return this.aa
    };
    l.getAdSkippableState = function() {
        return this.M
    };
    l.discardAdBreak = function() {
        IQ(this, "discardAdBreak")
    };
    l.updateAdsRenderingSettings = function(a) {
        if (a != null) {
            a = JQ(a);
            var b = this.A.bitrate,
                c = a.bitrate;
            W.getInstance().report(96, {
                init: this.V ? "1" : "0",
                start: this.la ? "1" : "0",
                old: b,
                "new": c,
                changed: b !== c ? "1" : "0"
            });
            this.A = a;
            a = qO(this.A, this.K);
            b = {};
            a = (b.adsRenderingSettings = a, b);
            IQ(this, "updateAdsRenderingSettings", a)
        }
    };
    l.skip = function() {
        IQ(this, "skip")
    };
    l.start = function() {
        if (this.adTagUrl) {
            (yc || Ac) && W.getInstance().report(50, {
                customPlayback: RP(this.g)
            });
            this.g.va() || W.getInstance().report(26, {
                adtagurl: this.adTagUrl,
                customPlayback: RP(this.g)
            });
            Bq(this.g.o) && W.getInstance().report(30, {
                adtagurl: this.adTagUrl,
                customPlayback: RP(this.g)
            });
            var a = this.g.A,
                b = this.g.o,
                c;
            if (c = a && b && !Bq(a)) a = kP(a), b = kP(b), c = a.width > 0 && a.height > 0 && b.width > 0 && b.height > 0 && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            b = c;
            W.getInstance().report(31, {
                adtagurl: this.adTagUrl,
                customPlayback: RP(this.g),
                covers: b
            })
        }
        if (!this.g.va() && !RP(this.g)) throw pJ(nJ);
        b = this.g;
        b.G = this.K && b.A != null;
        this.g.B.g.style.opacity = "1";
        if (this.C != null && this.getVolume() === 1) {
            var d, e;
            if (typeof((d = this.C) == null ? void 0 : d.muted) === "boolean" && ((e = this.C) == null ? 0 : e.muted)) this.setVolume(0);
            else {
                var f;
                if (typeof((f = this.C) == null ? void 0 : f.volume) === "number") {
                    var g;
                    d = (g = this.C) == null ? void 0 : g.volume;
                    if (d >= 0 && d <= 1) {
                        var h;
                        this.setVolume((h = this.C) == null ? void 0 : h.volume)
                    }
                }
            }
        }
        this.la = !0;
        IQ(this, "start")
    };
    l.Wg = function() {
        if (!this.A.disableClickThrough && this.j != null) {
            var a = this.j.data.clickThroughUrl;
            a != null && bD(a, this.j.data.attributionParams)
        }
    };
    l.resize = function(a, b, c) {
        var d = this.g,
            e = d.o;
        e != null && (a === -1 ? (e.style.right = "0", e.style.left = "0") : e.style.width = a + "px", b === -1 ? (e.style.bottom = "0", e.style.top = "0") : e.style.height = b + "px");
        e = d.B;
        e.g.width = a === -1 ? "100%" : String(a);
        e.g.height = b === -1 ? "100%" : String(b);
        try {
            e.g.offsetTop = e.g.offsetTop
        } catch (f) {}
        d.size = new di(a, b);
        d = {};
        a = (d.width = a, d.height = b, d.viewMode = c, d);
        IQ(this, "resize", a)
    };
    l.stop = function() {
        IQ(this, "stop")
    };
    l.expand = function() {
        IQ(this, "expand")
    };
    l.collapse = function() {
        IQ(this, "collapse")
    };
    l.getVolume = function() {
        return this.volume
    };
    l.setVolume = function(a) {
        this.volume = a;
        this.g.fa.setVolume(a);
        var b = {};
        a = (b.volume = a, b);
        IQ(this, "volume", a)
    };
    l.pause = function() {
        IQ(this, "pause")
    };
    l.resume = function() {
        IQ(this, "resume")
    };
    l.destroy = function() {
        this.dispose()
    };
    l.getCuePoints = function() {
        return this.ha
    };
    l.tg = function() {
        return this.j
    };
    l.O = function() {
        IQ(this, "destroy");
        this.l != null && this.l.dispose();
        this.U.dispose();
        this.G.clear();
        this.B && (this.B.stop(), this.B.dispose());
        GI() && pP(this.I, this.P);
        R.prototype.O.call(this)
    };
    l.hg = function() {
        W.getInstance().report(124, {
            api: "clicked"
        });
        var a = this.j && this.j.data.clickThroughUrl,
            b;
        if (a && ((b = this.j) == null ? 0 : b.Oe())) {
            var c;
            bD(a, (c = this.j) == null ? void 0 : c.data.attributionParams)
        }
        IQ(this, "click")
    };
    l.focus = function() {
        ZI(this.D, "userInteraction", "focusUiElement")
    };
    var HQ = function(a, b) {
        var c = b.gfpCookieUserEnabled;
        b = b.gfpCookieClearData;
        var d = new wQ;
        d = Yf(d, 1, c ? "0" : "1");
        d = df(d, 2, Zd(2147483647));
        d = Yf(d, 3, "/");
        d = Yf(d, 4, window.location.hostname);
        var e = new yQ,
            f, g;
        a = (g = (f = a.Ra) == null ? void 0 : hI(f)) != null ? g : null;
        zQ(e, "__gpi_opt_out", d, a);
        if (!c || b) AQ(e, "__gads", a), AQ(e, "__gpi", a)
    };
    Z.prototype.clicked = Z.prototype.hg;
    Z.prototype.getCurrentAd = Z.prototype.tg;
    Z.prototype.getCuePoints = Z.prototype.getCuePoints;
    Z.prototype.destroy = Z.prototype.destroy;
    Z.prototype.resume = Z.prototype.resume;
    Z.prototype.pause = Z.prototype.pause;
    Z.prototype.setVolume = Z.prototype.setVolume;
    Z.prototype.getVolume = Z.prototype.getVolume;
    Z.prototype.collapse = Z.prototype.collapse;
    Z.prototype.expand = Z.prototype.expand;
    Z.prototype.stop = Z.prototype.stop;
    Z.prototype.resize = Z.prototype.resize;
    Z.prototype.start = Z.prototype.start;
    Z.prototype.skip = Z.prototype.skip;
    Z.prototype.updateAdsRenderingSettings = Z.prototype.updateAdsRenderingSettings;
    Z.prototype.discardAdBreak = Z.prototype.discardAdBreak;
    Z.prototype.getAdSkippableState = Z.prototype.getAdSkippableState;
    Z.prototype.getRemainingTime = Z.prototype.getRemainingTime;
    Z.prototype.isCustomClickTrackingUsed = Z.prototype.isCustomClickTrackingUsed;
    Z.prototype.isCustomPlaybackUsed = Z.prototype.isCustomPlaybackUsed;
    Z.prototype.init = Z.prototype.init;

    function JQ(a) {
        if (a instanceof pO) return W.getInstance().report(174, {
            valid: !0
        }), a;
        W.getInstance().report(174, {
            valid: !1
        });
        var b = new pO;
        b.append(a);
        return b
    };
    var KQ = {
            ADS_MANAGER_LOADED: "adsManagerLoaded"
        },
        LQ = function(a, b) {
            rv.call(this, "adsManagerLoaded");
            this.g = a;
            this.l = b
        };
    x(LQ, rv);
    LQ.prototype.getAdsManager = function(a, b) {
        a = a || {
            currentTime: null
        };
        this.g.configureAdsManager(a, b);
        return this.g
    };
    LQ.prototype.getUserRequestContext = function() {
        return this.l
    };
    LQ.prototype.getUserRequestContext = LQ.prototype.getUserRequestContext;
    LQ.prototype.getAdsManager = LQ.prototype.getAdsManager;
    z("module$exports$google3$javascript$ads$interactivemedia$sdk$clientside$api$ads_manager_loaded_event.AdsManagerLoadedEvent.Type", KQ);
    var MQ = function() {
        this.g = window
    };

    function NQ() {
        var a = window,
            b, c;
        return (c = ["pbjs"].concat((b = a._pbjsGlobals) != null ? b : []).map(function(d) {
            return a[d]
        }).find(function(d) {
            return Array.isArray(d == null ? void 0 : d.que)
        })) != null ? c : null
    };

    function OQ(a, b) {
        var c, d, e;
        b == null ? e = void 0 : e = b.get.call(b, a);
        return (d = (c = e) != null ? c : b == null ? void 0 : b.get(Xi(a))) != null ? d : 0
    };
    var PQ = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        QQ = new Map,
        RQ = function(a, b) {
            var c = {};
            this.pbjs = a;
            this.slot = b;
            var d;
            this.ld = (d = c == null ? void 0 : c.ld) != null ? d : {};
            this.Cd = !(c == null || !c.Cd);
            var e;
            this.Ed = (e = c == null ? void 0 : c.Ed) != null ? e : new Map;
            var f;
            this.We = (f = c == null ? void 0 : c.We) != null ? f : new Map;
            var g;
            this.ye = (g = c == null ? void 0 : c.ye) != null ? g : new jx;
            this.Te = c == null ? void 0 : c.Te;
            this.g = c
        },
        UQ = function(a, b, c) {
            var d = a.pbjs.getBidResponsesForAdUnitCode;
            if (d) {
                var e, f, g, h, k, n = (k = (e = d((g = a.slot.Tb) != null ? g : "")) == null ?
                    void 0 : e.bids) != null ? k : (f = d((h = a.slot.adUnitCode) != null ? h : "")) == null ? void 0 : f.bids;
                if (n != null && n.length && (e = n.filter(function(r) {
                        var t = r.auctionId;
                        var u = r.adId;
                        return t !== c && Object.values(a.ld).some(function(w) {
                            return w.includes(u)
                        })
                    }), e.length)) {
                    var m, p;
                    d = (m = a.pbjs.adUnits) == null ? void 0 : (p = m.find(function(r) {
                        r = r.code;
                        return r === a.slot.Tb || r === a.slot.adUnitCode
                    })) == null ? void 0 : p.mediaTypes;
                    m = v(e);
                    for (p = m.next(); !p.done; p = m.next()) p = p.value, e = SQ(a, p, d), e = lx(b, fx(Tf(gx(ex(new dx, p.bidder), 1), 6, !0),
                        e)), TQ(a, p.bidder, e), typeof p.timeToRespond === "number" && df(e, 2, Zd(Math.round(p.timeToRespond)))
                }
            }
        },
        TQ = function(a, b, c) {
            for (var d = []; b && !d.includes(b);) {
                d.unshift(b);
                var e = void 0,
                    f = void 0;
                b = (e = a.pbjs) == null ? void 0 : (f = e.aliasRegistry) == null ? void 0 : f[b]
            } of (c, 10, d, fe)
        },
        VQ = function(a, b, c) {
            Vd(af(b, 3)) != null || (c === a.slot.adUnitCode ? Zf(b, 3, 1) : c === a.slot.Tb && Zf(b, 3, 2))
        },
        WQ = function(a, b, c, d, e) {
            e = a.We.get(e != null ? e : function() {
                return null
            });
            (e == null ? void 0 : F(e, 1)) !== 1 && C(c, 5, e);
            yf(b, $w, 5, !1) !== void 0 || (e ? F(e,
                1) === 1 ? mx(b, e) : mx(b, cx(ax(bx(new $w, a.Cd), 1), OQ(d, a.Ed))) : mx(b, ax(bx(new $w, a.Cd), OQ(d, a.Ed) ? 2 : 3)))
        },
        SQ = function(a, b, c) {
            var d = b.cpm,
                e = b.originalCpm,
                f = b.currency,
                g = b.originalCurrency,
                h = b.dealId,
                k = b.adserverTargeting,
                n = b.bidder,
                m = b.adId,
                p = b.mediaType,
                r = b.height,
                t = b.width,
                u = b.meta,
                w = new Yw;
            typeof d === "number" && (df(w, 2, Zd(Math.round(d * 1E6))), g && g !== f || (d = Math.round(Number(e) * 1E6), isNaN(d) || d === Nf(w, 2) || df(w, 8, Zd(d))));
            typeof f === "string" && Yf(w, 3, f);
            ["string", "number"].includes(typeof h) && (f = new Qw, h =
                Yf(f, 1, String(h)), C(w, 6, h));
            if (typeof k === "object")
                for (h = v(["", "_" + n]), f = h.next(); !f.done; f = h.next()) {
                    d = f.value;
                    f = [];
                    e = v(Object.entries(k));
                    for (g = e.next(); !g.done; g = e.next()) {
                        g = v(g.value);
                        var E = g.next().value;
                        g = g.next().value;
                        E = ("" + E + d).slice(0, 20);
                        var Y = void 0;
                        if ((Y = a.ld[E]) != null && Y.length)
                            if (a.ld[E][0] === String(g)) f.push(E);
                            else {
                                f = [];
                                break
                            }
                    }
                    d = Rf(w, 4, ef()); of (w, 4, d.concat(f), fe)
                }
            switch (p || "banner") {
                case "banner":
                    Zf(w, 5, 1);
                    break;
                case "native":
                    Zf(w, 5, 2);
                    break;
                case "video":
                    Zf(w, 5, 3);
                    p = new Ww;
                    var V;
                    if ((c == null ? void 0 : (V = c.video) == null ? void 0 : V.context) === "adpod") {
                        var da, Va = c == null ? void 0 : (da = c.video) == null ? void 0 : da.adPodDurationSec;
                        df(p, 1, Zd(Va))
                    } else da = c == null ? void 0 : (Va = c.video) == null ? void 0 : Va.maxduration, df(p, 1, Zd(da));
                    var za;
                    if (typeof(c == null ? void 0 : (za = c.video) == null ? void 0 : za.skip) === "number") {
                        var Kb;
                        c = !!(c == null ? 0 : (Kb = c.video) == null ? 0 : Kb.skip);
                        Tf(p, 2, c)
                    }
                    var Vb;
                    Kb = (Vb = b.meta) == null ? void 0 : Vb.adServerCatId;
                    Vb = Yf(p, 3, Kb);
                    if (typeof k !== "object") k = null;
                    else {
                        var fb, Jc;
                        Kb = String((Jc = (fb =
                            k["hb_pb_cat_dur_" + n]) != null ? fb : k.hb_pb_cat_dur) != null ? Jc : "");
                        var P, Ea, Wb, cd;
                        fb = String((cd = (Wb = (Ea = (P = k["hb_cache_id_" + n]) != null ? P : k["hb_uuid_" + n]) != null ? Ea : k.hb_cache_id) != null ? Wb : k.hb_uuid) != null ? cd : "");
                        k = Kb && fb ? Kb + "_" + fb : fb ? fb : null
                    }
                    Yf(Vb, 4, k);
                    C(w, 9, p)
            }
            Number.isFinite(r) && Number.isFinite(t) && (k = new Uw, t = Vf(k, 1, Math.round(t)), r = Vf(t, 2, Math.round(r)), C(w, 7, r));
            typeof m === "string" && Yf(w, 1, m);
            var ie, je;
            if (((ie = a.g) == null ? 0 : ie.Vf) && Array.isArray(u == null ? void 0 : u.advertiserDomains) && (u == null ? 0 : (je = u.advertiserDomains[0]) ==
                    null ? 0 : je.length)) {
                var Xe;
                m = u.advertiserDomains[0].substring(0, (Xe = a.g) == null ? void 0 : Xe.Vf);
                Yf(w, 10, m)
            }
            if (b.meta && a.g) {
                var qb, Th;
                a.g.Yf && typeof b.meta.agencyId === "string" && ((Th = b.meta.agencyId) == null ? 0 : Th.length) && (qb != null || (qb = new Sw), Yf(qb, 1, b.meta.agencyId.substring(0, a.g.Yf)));
                var Uh;
                a.g.Zf && typeof b.meta.agencyId === "string" && ((Uh = b.meta.agencyName) == null ? 0 : Uh.length) && (qb != null || (qb = new Sw), Yf(qb, 2, b.meta.agencyName.substring(0, a.g.Zf)));
                var Vh;
                a.g.og && typeof b.meta.networkId === "string" && ((Vh =
                    b.meta.networkId) == null ? 0 : Vh.length) && (qb != null || (qb = new Sw), Yf(qb, 3, b.meta.networkId.substring(0, a.g.og)));
                var Wh;
                a.g.pg && typeof b.meta.networkId === "string" && ((Wh = b.meta.networkName) == null ? 0 : Wh.length) && (qb != null || (qb = new Sw), Yf(qb, 4, b.meta.networkName.substring(0, a.g.pg)));
                qb && C(w, 11, qb)
            }
            return w
        },
        XQ = function(a, b) {
            var c = new Map,
                d = function(k) {
                    var n = c.get(k);
                    n || (n = {}, c.set(k, n));
                    return n
                },
                e = [];
            a = v(a);
            for (var f = a.next(); !f.done; f = a.next()) {
                f = f.value;
                var g = f.args,
                    h = f.eventType;
                f = f.elapsedTime;
                h === "bidTimeout" &&
                    e.push.apply(e, ia(g));
                switch (h) {
                    case "bidRequested":
                        if (g.auctionId !== b) continue;
                        if (!Array.isArray(g.bids)) continue;
                        g = v(g.bids);
                        for (h = g.next(); !h.done; h = g.next())
                            if (h = h.value.bidId) d(h).requestTime = f;
                        break;
                    case "noBid":
                        g.auctionId === b && g.bidId && (d(g.bidId).fh = f)
                }
            }
            d = new Map;
            a = v(c.entries());
            for (f = a.next(); !f.done; f = a.next()) g = v(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.fh, g && h && d.set(f, {
                latency: h - g,
                Kb: !1
            });
            e = v(e);
            for (a = e.next(); !a.done; a = e.next())
                if (f = a.value, a = f.bidId, f = f.auctionId,
                    a && f === b && (a = d.get(a))) a.Kb = !0;
            return d
        },
        YQ = function(a) {
            var b = new Map,
                c = (0, a.pbjs.getEvents)(),
                d = c.filter(function(P) {
                    var Ea = P.eventType;
                    P = P.args;
                    return Ea === "auctionEnd" && P.auctionId
                }),
                e = new qx,
                f = function(P) {
                    return P === a.slot.Tb || P === a.slot.adUnitCode
                },
                g, h, k, n = (k = QQ.get(((g = a.slot.Tb) != null ? g : "") + ((h = a.slot.adUnitCode) != null ? h : ""))) != null ? k : 0,
                m;
            d = (m = d.filter(function(P) {
                var Ea, Wb, cd;
                return Number((Ea = P.args) == null ? void 0 : Ea.timestamp) > n && ((Wb = P.args) == null ? void 0 : (cd = Wb.adUnitCodes) == null ? void 0 :
                    cd.find(f))
            })) != null ? m : [];
            if (!d.length) return null;
            var p;
            if (d = (p = d.reduce(function(P, Ea) {
                    return Number(Ea.args.timestamp) > Number(P.args.timestamp) ? Ea : P
                })) == null ? void 0 : p.args) {
                m = d.bidderRequests === void 0 ? [] : d.bidderRequests;
                p = d.bidsReceived === void 0 ? [] : d.bidsReceived;
                var r = d.auctionId;
                d = d.timestamp;
                if (r && d != null && m.length) {
                    var t, u;
                    QQ.set(((t = a.slot.Tb) != null ? t : "") + ((u = a.slot.adUnitCode) != null ? u : ""), d);
                    t = rx(e);
                    a.pbjs.version && PQ.test(a.pbjs.version) && Yf(t, 6, a.pbjs.version);
                    var w, E, Y, V;
                    if ((E = (w = a.pbjs).getConfig) ==
                        null ? 0 : (Y = E.call(w).cache) == null ? 0 : (V = Y.url) == null ? 0 : V.length) {
                        var da, Va, za;
                        nx(t, (Va = (da = a.pbjs).getConfig) == null ? void 0 : (za = Va.call(da).cache) == null ? void 0 : za.url)
                    }
                    C(t, 9, a.ye);
                    w = fh(function() {
                        return XQ(c, r)
                    });
                    E = v(m);
                    V = E.next();
                    for (Y = {}; !V.done; Y = {
                            bidderCode: void 0,
                            jf: void 0
                        }, V = E.next())
                        for (da = V.value, Y.bidderCode = da.bidderCode, Va = da.bids, V = da.timeout, Y.jf = da.src, da = da.auctionStart, Va = v(Va), za = Va.next(), u = {}; !za.done; u = {
                                yc: void 0
                            }, za = Va.next())
                            if (h = za.value, u.yc = h.bidId, g = h.transactionId, m = h.adUnitCode,
                                d = h.getFloor, za = h.mediaTypes, h = h.ortb2Imp, u.yc && f(m)) {
                                VQ(a, t, m);
                                var Kb = k = void 0,
                                    Vb = void 0;
                                ((k = a.g) == null ? 0 : k.xg) && Jf(t, 11) == null && typeof((Kb = h) == null ? void 0 : (Vb = Kb.ext) == null ? void 0 : Vb.gpid) === "string" && (k = void 0, ox(t, h.ext.gpid.substring(0, (k = a.g) == null ? void 0 : k.xg)));
                                g && (Jf(t, 4) != null || Yf(t, 4, g), b.has(g) || b.set(g, da));
                                Xd(af(t, 8)) == null && Number.isFinite(V) && Vf(t, 8, V);
                                h = p.find(function(P) {
                                    return function(Ea) {
                                        return Ea.requestId === P.yc
                                    }
                                }(u));
                                g = lx(t, function(P) {
                                    return function() {
                                        var Ea = ex(new dx, P.bidderCode);
                                        TQ(a, P.bidderCode, Ea);
                                        switch (P.jf) {
                                            case null:
                                            case void 0:
                                            case "client":
                                                Zf(Ea, 7, 1);
                                                break;
                                            case "s2s":
                                                Zf(Ea, 7, 2)
                                        }
                                        return Ea
                                    }
                                }(Y)());
                                WQ(a, t, g, m, d);
                                if (h) {
                                    gx(g, 1);
                                    typeof h.timeToRespond === "number" && Number.isFinite(h.timeToRespond) && df(g, 2, Zd(Math.round(h.timeToRespond)));
                                    try {
                                        m = u = void 0, (m = (u = a).Te) == null || m.call(u, h)
                                    } catch (P) {}
                                    za = SQ(a, h, za);
                                    fx(g, za)
                                } else(za = w().get(u.yc)) && !za.Kb ? (gx(g, 2), Number.isFinite(za.latency) && df(g, 2, Zd(Math.round(za.latency)))) : (za = gx(g, 3), Number.isFinite(V) && df(za, 2, Zd(Math.round(V))))
                            }
                    var fb,
                        Jc;
                    ((Jc = (fb = a.pbjs).getConfig) == null ? 0 : Jc.call(fb).useBidCache) && UQ(a, t, r);
                    return e
                }
            }
        };

    function ZQ(a, b) {
        return YQ(new RQ(a, b))
    };
    var $Q = function(a) {
        R.call(this);
        var b = this,
            c = OH(QH(this.getSettings()));
        c && c.length > 0 && (Nm.reset(), Pm(new Tm(c)));
        this.C = new yQ;
        this.B = null;
        this.j = a;
        this.G = new Map;
        this.A = this.j.B;
        this.K = new KD(this);
        mr(this, this.K);
        this.U = new cC(window, {
            timeoutMs: 500
        });
        this.V = new WH(window, {
            timeoutMs: 500
        });
        this.M = new tN;
        wN(this.M);
        a = new rC(window, {
            timeoutMs: 500
        });
        this.P = new VN(a, 500);
        mr(this, this.P);
        this.g = null;
        this.I = {};
        SH.g !== 0 ? (this.l = new hP, mr(this, this.l)) : this.l = iP();
        GI() && (this.l.init(cP(this.A)), this.D = oP(this.l,
            this.j.C), lr(this, function() {
            var d = b.D;
            b.l.l.delete(d);
            SH.g !== 0 && (J($u).o[d] = null)
        }))
    };
    x($Q, R);
    $Q.prototype.destroy = function() {
        this.dispose()
    };
    $Q.prototype.getVersion = function() {
        return "h.3.655.0"
    };
    $Q.prototype.requestAds = function(a, b) {
        var c = this,
            d = [],
            e = null;
        eC(this.U) && d.push(new Promise(function(h) {
            hC(c.U, function(k) {
                e = k;
                h()
            })
        }));
        var f = null;
        ZB(this.V.caller) && d.push(new Promise(function(h) {
            XH(c.V, function(k) {
                f = k;
                h()
            })
        }));
        var g = null;
        d.push(XN(this.P).then(function(h) {
            g = h
        }));
        Promise.all(d).then(function() {
            aR(c, a, b, {
                ie: e,
                me: f,
                Gd: g
            })
        })
    };
    var aR = function(a, b, c, d) {
        var e = b.adTagUrl,
            f = "goog_" + ni++;
        a.G.set(f, c || null);
        var g = bR({
            adTagUrl: e,
            ie: d.ie,
            me: d.me,
            Gd: d.Gd
        });
        a.g = bI(e, g || {});
        mN(a.g, function() {
            cR(a)
        });
        var h, k = (h = b.adTagUrl) == null ? void 0 : h.includes("GOOGLE_INSTREAM_VIDEO_NONCE"),
            n = gI(a.g);
        c = dR(a, n, k);
        d = wN(a.M);
        h = ON.getConfig().then(function(m) {
            if (m) {
                var p = ON.l;
                RN(m, e != null ? e : "", p != null ? p : 0)
            }
            if (p = ON.j) p = p.message, W.getInstance().report(189, {
                message: p
            });
            return m
        });
        h = Promise.race([h, zw(500, null)]);
        Promise.all([c, d, h]).then(function(m) {
            var p =
                v(m);
            p.next();
            m = p.next().value;
            p = p.next().value;
            var r = {};
            W.getInstance().report(182, (r.aid = !!SH.B, r.aidf = !!a.B, r.hsc = !n && k, r));
            p = eR(a, b, g, m, p);
            r = cP(a.A, f);
            a.K.listen(r, "adsLoader", a.W);
            ZI(r, "adsLoader", "requestAds", p);
            p = {};
            W.getInstance().report(155, (p.ws = sN(), p.blob = m != null ? m : "undef", p))
        })
    };
    $Q.prototype.getSettings = function() {
        return SH
    };
    $Q.prototype.contentComplete = function() {
        ZI(cP(this.A), "adsLoader", "contentComplete")
    };
    $Q.prototype.W = function(a) {
        var b = a.messageType;
        switch (b) {
            case "adsLoaded":
                var c = a.oa,
                    d = a.tc;
                c = new Z(this.l, this.j, c.adTagUrl || "", c.adCuePoints, this.D, c.isCustomClickTrackingAllowed, cP(this.A, d), this.g);
                this.dispatchEvent(new LQ(c, fR(this, d)));
                break;
            case "error":
                c = a.oa;
                this.dispatchEvent(new XP(new VP(c), fR(this, a.tc)));
                c = {
                    error: c.errorCode,
                    vis: ml(document)
                };
                W.getInstance().report(7, c);
                break;
            case "cookieUpdate":
                a = a.oa;
                if (a == null) break;
                if (SH.isCookiesEnabled()) {
                    b = new YH;
                    b = Tf(b, 5, !0);
                    var e = a.gfpCookie;
                    e && zQ(this.C, "__gads", xQ(e), b);
                    (e = a.gfpCookieV2) && zQ(this.C, "__gpi", xQ(e), b)
                }
                if (b = a.eoidCookie) {
                    e = new MQ;
                    try {
                        c = xQ(b);
                        d = Nf(c, 2) - Date.now() / 1E3;
                        var f = {
                            Qc: Math.max(d, 0),
                            path: D(c, 3),
                            domain: D(c, 4),
                            ed: !1
                        };
                        Xl("__eoi", c.getValue(), f, e.g)
                    } catch (h) {
                        var g;
                        W.getInstance().report(198, {
                            action: "write",
                            message: (g = h) == null ? void 0 : g.message
                        }, !0)
                    }
                }
                gR(this, a.encryptedSignalBidderIds || []);
                break;
            case "trackingUrlPinged":
                this.dispatchEvent(new ZP(b, null, a.oa))
        }
    };
    var gR = function(a, b) {
            b.length !== 0 && (b = nN(b.map(function(c) {
                return {
                    Cc: c
                }
            }), a.g)) && b.forEach(function(c) {
                c.then(function(d) {
                    d && cR(a)
                })
            })
        },
        cR = function(a) {
            var b = AJ(lN(a.g));
            b && (a.I.espSignals = b, ZI(cP(a.A), "adsLoader", "signalsRefresh", a.I))
        },
        fR = function(a, b) {
            var c = a.G.get(b);
            a.G.delete(b);
            return c != null ? c : null
        },
        bR = function(a) {
            var b = a.ie,
                c = a.me;
            a = a.Gd;
            var d, e, f, g, h, k, n = {};
            var m = m === void 0 ? y : m;
            return n.gfcLoaded = aj(m.top, "googlefcLoaded"), n.addtlConsent = (d = b == null ? void 0 : b.addtlConsent) != null ? d : null, n.gdprApplies =
                (e = b == null ? void 0 : b.gdprApplies) != null ? e : null, n.tcString = (f = b == null ? void 0 : b.tcString) != null ? f : null, n.uspString = (g = c == null ? void 0 : c.uspString) != null ? g : null, n.gppString = (h = a == null ? void 0 : a.gppString) != null ? h : null, n.gppSid = (k = a == null ? void 0 : a.sid) != null ? k : null, n
        },
        hR = function(a, b) {
            var c = {};
            c.contentMediaUrl = a.j.L;
            c.customClickTrackingProvided = a.j.A != null;
            c.isAmp = KI();
            a: {
                try {
                    var d = window.top.location.href
                } catch (E) {
                    d = 2;
                    break a
                }
                d = d == null ? 2 : d == window.document.location.href ? 0 : 1
            }
            c.iframeState = d;
            c.imaHostingDomain =
                window.document.domain;
            c.imaHostingPageUrl = window.document.URL;
            c.topAccessiblePageUrl = JI();
            c.referrer = window.document.referrer;
            c.domLoadTime = a.A.K;
            c.sdkImplLoadTime = a.A.M;
            c.supportsResizing = !RP(a.j);
            d = Ai().location.ancestorOrigins;
            c.topOrigin = d ? d.length > 0 && d[d.length - 1].length < 200 ? d[d.length - 1] : "" : null;
            c.osdId = a.D;
            c.usesCustomVideoPlayback = RP(a.j);
            c.usesProxyMediaElement = SP(a.j);
            c.usesInlinePlayback = a.j.J;
            d = a.j.kc;
            a = [];
            var e = "",
                f = "";
            if (d != null) {
                e = d;
                f = !0;
                f = f === void 0 ? !1 : f;
                for (var g = [], h = 0; e && h < 25; ++h) {
                    var k =
                        "";
                    f !== void 0 && f || (k = (k = e.nodeType !== 9 && e.id) ? "/" + k : "");
                    a: {
                        if (e && e.nodeName && e.parentElement) {
                            var n = e.nodeName.toString().toLowerCase();
                            for (var m = e.parentElement.childNodes, p = 0, r = 0; r < m.length; ++r) {
                                var t = m[r];
                                if (t.nodeName && t.nodeName.toString().toLowerCase() === n) {
                                    if (e === t) {
                                        n = "." + p;
                                        break a
                                    }++p
                                }
                            }
                        }
                        n = ""
                    }
                    g.push((e.nodeName && e.nodeName.toString().toLowerCase()) + k + n);
                    e = e.parentElement
                }
                e = g.join();
                if (d) {
                    d = (d = d.ownerDocument) && (d.defaultView || d.parentWindow) || null;
                    f = [];
                    if (d) try {
                        var u = d.parent;
                        for (g = 0; u && u !==
                            d && g < 25; ++g) {
                            var w = u.frames;
                            for (h = 0; h < w.length; ++h)
                                if (d === w[h]) {
                                    f.push(h);
                                    break
                                }
                            d = u;
                            u = d.parent
                        }
                    } catch (E) {}
                    f = f.join()
                } else f = ""
            }
            a.push(e, f);
            if (b != null) {
                for (u = 0; u < TB.length - 1; ++u) a.push(Pi(b, TB[u]) || "");
                b = Pi(b, "videoad_start_delay");
                u = "";
                b && (b = parseInt(b, 10), u = b < 0 ? "postroll" : b == 0 ? "preroll" : "midroll");
                a.push(u)
            } else
                for (b = 0; b < TB.length; ++b) a.push("");
            return c.videoAdKey = Xi(a.join(":")).toString(), c
        },
        iR = function(a, b, c) {
            a = fI(a);
            b = b.adTagUrl ? IH(b.adTagUrl) : null;
            var d;
            c && b ? (c = Af(c, sx, 3), c = !!b && (c == null ?
                void 0 : (d = nf(c, 1, me)) == null ? void 0 : d.get(b)), W.getInstance().report(196, {
                status: c,
                network: b
            }), d = !c) : d = !0;
            return {
                Ye: a,
                Ze: d
            }
        },
        jR = function(a, b, c) {
            var d = hI(a);
            c = iR(a, b, c);
            a = new MQ;
            b = c.Ye;
            c = c.Ze;
            return !Vl(a.g) || Kf(d, 8) || (b || !Kf(d, 5)) && c ? !1 : !0
        },
        kR = function(a, b, c) {
            var d = hI(a);
            a = iR(a, b, c);
            b = new MQ;
            c = void 0;
            try {
                var e = a.Ye;
                var f = a.Ze;
                if (Kf(d, 8) || (e || !Kf(d, 5)) && f) c = void 0;
                else {
                    var g;
                    c = (g = Tl("__eoi", b.g)) != null ? g : void 0
                }
            } catch (k) {
                var h;
                W.getInstance().report(198, {
                    action: "read",
                    message: (h = k) == null ? void 0 : h.message
                }, !0)
            }
            return c
        },
        lR = function(a, b, c) {
            if (Km(vn) && Ob() && $i(window.fetch) && $i(window.AbortController)) try {
                var d = window.document;
                var e = !!(window.isSecureContext && "browsingTopics" in d && d.browsingTopics instanceof Function && Mn("browsing-topics", d));
                if (a.j) {
                    var f = cI(a, "rdp");
                    var g = $H(f) ? "1" : ""
                } else g = "";
                d = g === "1";
                var h, k = cI(a, "us_privacy"),
                    n = a.g.uspString || k || "";
                n = n.toUpperCase();
                k = n;
                if (k.length == 4 && (k.indexOf("-") == -1 || k.substring(1) === "---") && k[0] >= "1" && k[0] <= "9" && Ox.hasOwnProperty(k[1]) && Ox.hasOwnProperty(k[2]) &&
                    Ox.hasOwnProperty(k[3])) {
                    var m = new Nx;
                    var p = Wf(m, 1, parseInt(n[0], 10));
                    var r = G(p, 2, Ox[n[1]]);
                    var t = G(r, 3, Ox[n[2]]);
                    var u = G(t, 4, Ox[n[3]])
                } else u = null;
                var w = u;
                var E;
                if (!(E = (w == null ? void 0 : F(w, 3)) === 2 || iI(a)))
                    if (dI(a)) {
                        var Y = eI(a);
                        E = Y ? !lC(Y, ["3", "4"], 0) : !0
                    } else E = !1;
                if (!(h = E)) {
                    var V = cI(a, "npa"),
                        da = $H(V);
                    h = (a.j && da ? "1" : "") === "1"
                }
                var Va;
                if (!(Va = h || d || gI(a))) {
                    if (a.j) {
                        var za = cI(a, "tfcd");
                        var Kb = za === "0" || za === "false" ? (0).toString() : $H(za) ? (1).toString() : ""
                    } else Kb = "";
                    var Vb;
                    if (!(Vb = Kb === (1).toString())) {
                        if (a.j) {
                            var fb =
                                cI(a, "tfua");
                            var Jc = fb === "0" || fb === "false" ? (0).toString() : $H(fb) ? (1).toString() : ""
                        } else Jc = "";
                        Vb = Jc === (1).toString()
                    }
                    Va = Vb
                }
                a = !Va;
                var P = b.adTagUrl ? IH(b.adTagUrl) : null;
                if (c && P) {
                    var Ea, Wb, cd;
                    var ie = (cd = (Ea = Af(c, xx, 4)) == null ? void 0 : (Wb = nf(Ea, 1, me)) == null ? void 0 : Wb.get(P)) != null ? cd : !0
                } else ie = !0;
                return e && a && ie
            } catch (Xe) {
                var je;
                W.getInstance().report(209, {
                    message: (je = Xe) == null ? void 0 : je.message
                }, !0)
            }
            return !1
        },
        dR = function(a, b, c) {
            if (b) return a.B = null, Promise.resolve([]);
            b = [];
            b.push(mR());
            c && b.push(nR(a));
            return Promise.all(b)
        },
        nR = function(a) {
            var b;
            return Ia(function(c) {
                if (c.g == 1) return a.B || (a.B = new VI, WI(a.B)), xa(c, a.B.getId(), 2);
                b = c.j;
                SH.B = b.id || "";
                c.g = 0
            })
        },
        mR = function() {
            return Ob() && (Km(sn) || Km(rn)) ? Km(rn) ? new Promise(function(a) {
                setTimeout(function() {
                    a()
                }, 50)
            }) : oR().then(function(a) {
                var b, c = (b = a.label) != null ? b : "";
                SH.J = c;
                SH.I = a.status
            }) : Promise.resolve()
        },
        oR = function() {
            if (navigator.cookieDeprecationLabel) {
                var a = navigator.cookieDeprecationLabel.getValue().then(function(c) {
                        return {
                            label: c,
                            status: 1
                        }
                    }).catch(function() {
                        return {
                            label: "",
                            status: 2
                        }
                    }),
                    b = new Promise(function(c) {
                        setTimeout(function() {
                            c({
                                label: "",
                                status: 5
                            })
                        }, 50)
                    });
                return Promise.race([b, a])
            }
            return Promise.resolve({
                label: "",
                status: 3
            })
        },
        eR = function(a, b, c, d, e) {
            var f = {};
            f = (f.limaExperimentIds = Om().sort().join(","), f);
            var g = dj(),
                h = Jn(),
                k = {};
            h = (k.experimentStateProto = bg(h), k);
            k = RH(a.getSettings(), nP(a.l));
            var n = hR(a, b.adTagUrl),
                m = Nn(),
                p = {};
            c = (p.consentSettings = c, p.imalibExperiments = f, p.genotypeExperimentData = h, p.settings = k, p.videoEnvironment = n, p.isFledgeEligible = m, p.pvsid = g,
                p);
            Object.assign(c, pR(b));
            a.g && SH.isCookiesEnabled() && (f = hI(a.g), c.isBrowserCookieEnabled = Vl(a.C.g) ? !!Kf(f, 5) : !1, g = f ? Sl("__gads", f, a.C.g) : null, g !== null && (c.gfpCookieValue = g), g = f ? Sl("__gpi", f, a.C.g) : null, g !== null && (c.gfpCookieV2Id = g), f = f ? Sl("__gpi_opt_out", f, a.C.g) : null, f !== null && (c.gfpCookieV2OptOut = f));
            a.g && (f = jR(a.g, b, e), c.eoidCookieEnabled = f, (f = kR(a.g, b, e)) && (c.eoidCookieValue = f));
            if (f = AJ(lN(a.g))) a.I.espSignals = f, c.espSignals = f;
            d && (c.gmaSignals = d);
            c.isEapLoader = !1;
            if (Km(wn) || go(NB)) {
                d = function(w) {
                    W.getInstance().report(195, {
                        message: w == null ? void 0 : w.message
                    })
                };
                try {
                    var r = NQ();
                    if (r) {
                        var t = JH(b.adTagUrl, d);
                        if (t && (Km(wn) || SN(e, HH(t)))) {
                            var u = ZQ(r, {
                                adUnitCode: t
                            });
                            c.clientBidsProto = u ? Qc(u.g(), 3) : void 0
                        }
                    }
                } catch (w) {
                    d(w)
                }
            }
            a.g && (c.topicsEnabled = lR(a.g, b, e));
            c.quicksilverSignals = bg(kJ(a.j));
            return c
        };
    $Q.prototype.contentComplete = $Q.prototype.contentComplete;
    $Q.prototype.getSettings = $Q.prototype.getSettings;
    $Q.prototype.requestAds = $Q.prototype.requestAds;
    $Q.prototype.getVersion = $Q.prototype.getVersion;
    $Q.prototype.destroy = $Q.prototype.destroy;
    var qR = function() {
            this.l = this.j = "unknown";
            this.g = "0";
            this.adsResponse = null;
            this.adTagUrl = "";
            this.contentTitle = this.contentKeywords = this.contentDuration = null;
            this.forceNonLinearFullSlot = !1;
            this.nonLinearAdSlotWidth = this.nonLinearAdSlotHeight = this.liveStreamPrefetchSeconds = this.linearAdSlotWidth = this.linearAdSlotHeight = 0;
            this.omidAccessModeRules = {};
            this.pageUrl = null;
            this.vastLoadTimeout = 5E3
        },
        pR = function(a) {
            var b = {};
            b.adsResponse = a.adsResponse;
            b.videoPlayActivation = a.j;
            b.videoPlayMuted = a.l;
            b.videoContinuousPlay =
                a.g;
            b.adTagUrl = a.adTagUrl;
            b.contentDuration = a.contentDuration;
            b.contentKeywords = a.contentKeywords;
            b.contentTitle = a.contentTitle;
            b.linearAdSlotWidth = a.linearAdSlotWidth;
            b.linearAdSlotHeight = a.linearAdSlotHeight;
            b.nonLinearAdSlotWidth = a.nonLinearAdSlotWidth;
            b.nonLinearAdSlotHeight = a.nonLinearAdSlotHeight;
            b.forceNonLinearFullSlot = a.forceNonLinearFullSlot;
            b.liveStreamPrefetchSeconds = a.liveStreamPrefetchSeconds;
            b.vastLoadTimeout = a.vastLoadTimeout;
            b.omidAccessModeRules = a.omidAccessModeRules;
            b.pageUrl = a.pageUrl;
            return b
        };
    qR.prototype.setAdWillAutoPlay = function(a) {
        this.j = a ? "auto" : "click"
    };
    qR.prototype.setAdWillPlayMuted = function(a) {
        this.l = a ? "muted" : "unmuted"
    };
    qR.prototype.setContinuousPlayback = function(a) {
        this.g = a ? "2" : "1"
    };
    qR.prototype.setContinuousPlayback = qR.prototype.setContinuousPlayback;
    qR.prototype.setAdWillPlayMuted = qR.prototype.setAdWillPlayMuted;
    qR.prototype.setAdWillAutoPlay = qR.prototype.setAdWillAutoPlay;
    z("google.ima.AdCuePoints.POSTROLL", -1, window);
    z("google.ima.AdCuePoints.PREROLL", 0, window);
    z("google.ima.AdDisplayContainer", TP, window);
    z("google.ima.AdError.ErrorCode", S, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    z("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    z("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    z("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    z("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    z("google.ima.AdError.Type", UP, window);
    z("google.ima.AdErrorEvent.Type", WP, window);
    z("google.ima.AdEvent.Type", YP, window);
    z("google.ima.AdsLoader", $Q, window);
    z("google.ima.AdsManagerLoadedEvent.Type", KQ, window);
    z("google.ima.CompanionAdSelectionSettings", dJ, window);
    z("google.ima.CompanionAdSelectionSettings.CreativeType", aJ);
    z("google.ima.CompanionAdSelectionSettings.ResourceType", bJ);
    z("google.ima.CompanionAdSelectionSettings.SizeCriteria", cJ);
    z("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    z("ima.ImaSdkSettings", T, window);
    z("google.ima.settings", SH, window);
    z("google.ima.ImaSdkSettings.CompanionBackfillMode", {
        ALWAYS: "always",
        ON_MASTER_AD: "on_master_ad"
    });
    z("google.ima.ImaSdkSettings.VpaidMode", {
        DISABLED: 0,
        ENABLED: 1,
        INSECURE: 2,
        0: "DISABLED",
        1: "ENABLED",
        2: "INSECURE"
    });
    z("google.ima.AdsRenderingSettings", pO, window);
    z("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    z("google.ima.AdsRequest", qR, window);
    z("google.ima.VERSION", "3.655.0");
    z("google.ima.OmidAccessMode", {
        LIMITED: "limited",
        DOMAIN: "domain",
        FULL: "full"
    });
    z("google.ima.OmidVerificationVendor", {
        COMSCORE: 7,
        DOUBLEVERIFY: 3,
        GOOGLE: 9,
        INTEGRAL_AD_SCIENCE: 4,
        MEETRICS: 8,
        MOAT: 2,
        NIELSEN: 6,
        PIXELATE: 5,
        OTHER: 1,
        7: "COMSCORE",
        3: "DOUBLEVERIFY",
        9: "GOOGLE",
        4: "INTEGRAL_AD_SCIENCE",
        8: "MEETRICS",
        2: "MOAT",
        6: "NIELSEN",
        5: "PIXELATE",
        1: "OTHER"
    });
    z("google.ima.UiElements", {
        AD_ATTRIBUTION: "adAttribution",
        COUNTDOWN: "countdown"
    });
    z("google.ima.ViewMode", {
        NORMAL: "normal",
        FULLSCREEN: "fullscreen"
    });
    z("google.ima.secureSignals", {
        clearAllCache: function() {
            yJ(window.localStorage)
        }
    });
    var rR = function(a, b, c) {
            this.j = c;
            b.length === 0 && (b = [
                []
            ]);
            this.g = b.map(function(d) {
                d = a.concat(d);
                for (var e = [], f = 0, g = 0; f < d.length;) {
                    var h = d[f++];
                    if (h < 128) e[g++] = String.fromCharCode(h);
                    else if (h > 191 && h < 224) {
                        var k = d[f++];
                        e[g++] = String.fromCharCode((h & 31) << 6 | k & 63)
                    } else if (h > 239 && h < 365) {
                        k = d[f++];
                        var n = d[f++],
                            m = d[f++];
                        h = ((h & 7) << 18 | (k & 63) << 12 | (n & 63) << 6 | m & 63) - 65536;
                        e[g++] = String.fromCharCode(55296 + (h >> 10));
                        e[g++] = String.fromCharCode(56320 + (h & 1023))
                    } else k = d[f++], n = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 |
                        (k & 63) << 6 | n & 63)
                }
                return new RegExp(e.join(""))
            })
        },
        sR = function(a, b) {
            return b ? a.g.some(function(c) {
                c = b.match(c);
                return c == null ? !1 : !a.j || c.length >= 1 && c[1] === "3.655.0" || c.length >= 2 && c[2] === "3.655.0" ? !0 : !1
            }) : !1
        },
        tR = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        uR = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 115, 48, 92, 46, 50, 109, 100,
            110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47
        ],
        vR = [94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 97, 108, 47, 115, 100, 107, 108, 111, 97, 100, 101, 114, 47],
        wR = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 101, 97, 112, 46, 106, 115]
        ],
        xR = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97,
                45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        yR = [
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101,
                98, 117, 103, 92, 46, 106, 115
            ]
        ],
        zR = new rR(tR, wR, !1);
    new rR(tR, xR, !0);
    var AR = new rR(uR, wR, !1);
    new rR(uR, xR, !0);
    var BR = new rR([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 46, 91, 48, 45, 57, 46, 93, 43, 47], wR, !1),
        CR = new rR([94, 40, 63, 58, 104, 116, 116, 112, 115, 63, 58, 41, 63, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103,
            101, 116, 115, 124, 106, 115, 41, 47
        ], [], !1);
    new rR(tR, [
        [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
        [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
        [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125,
            41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
        ]
    ], !0);
    var DR = new rR(tR, yR, !1),
        ER = new rR(tR, yR, !1);
    new rR(vR, [
        [112, 97, 108, 46, 106, 115]
    ], !1);
    new rR(vR, [
        [99, 97, 115, 116, 95, 112, 97, 108, 46, 106, 115]
    ], !1);
    new rR(vR, [
        [99, 116, 118, 95, 112, 97, 108, 46, 106, 115]
    ], !1);

    function FR(a, b) {
        for (var c = {}, d = 0; d < b.length; c = {
                ce: void 0
            }, d++)
            if (c.ce = b[d], a.some(function(e) {
                    return function(f) {
                        return sR(f, e.ce.src)
                    }
                }(c))) return c.ce;
        return null
    };
    if (! function(a) {
            if (a.some(function(c) {
                    return sR(c, Ai().location.href)
                })) return !0;
            var b = FR(a, document.querySelectorAll && document.querySelector ? document.querySelectorAll("SCRIPT") : document.getElementsByTagName("SCRIPT"));
            b == null && document.querySelectorAll && (b = FR(a, document.querySelectorAll("script")));
            return b != null
        }([zR, BR, AR, CR, DR, ER])) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
    var KN = ON,
        QN = {
            pageUrl: JI()
        };
    try {
        var LN = PN();
        if (!LN) throw Error("Could not generate config URL");
        NN()
    } catch (a) {
        MN(KN, a)
    };
})();