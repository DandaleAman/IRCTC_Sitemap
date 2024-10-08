(function(_) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     
     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors 
     Licensed under the Apache License, Version 2.0 (the "License"); 
     you may not use this file except in compliance with the License. 
     You may obtain a copy of the License at 
         http://www.apache.org/licenses/LICENSE-2.0 
     Unless required by applicable law or agreed to in writing, software 
     distributed under the License is distributed on an "AS IS" BASIS, 
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
     See the License for the specific language governing permissions and 
     limitations under the License. 
    */
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var ba, ea, ia, ja, la, ma, oa, na, ta, za, Ia, Ka, Na, Pa, Sa, Va, Ua, Wa, Xa, Ya, Za, ab, cb, eb, fb, hb, ib, jb, nb, ob, rb, tb, vb, xb, Ab, Bb, Eb, Fb, Hb, Ib, Kb, Lb, Nb, Pb, Sb, Tb, Vb, Wb, Zb, ac, fc, ic, kc, jc, lc, mc, gc, oc, rc, sc, vc, xc, zc, Ac, Bc, Dc, Ic, Jc, Kc, Lc, Gc, Mc, Fc, Nc, Ec, Oc, Pc, Qc, Wc, $c, Zc, bd, cd, fd, id, kd, nd, od, qd, rd, sd, wd, yd, xd, Bd, Dd, Cd, Fd, Ed, Gd, Id, pd, Nd, Od, Qd, Vd, Wd, Yd, Zd, de, ee, ge, he, ie, re, te, se, ue, Xd, ae, we, xe, ye, De, Ee, Fe, Je, Ke, Le, He, Se, Ie, Te, Xe, $e, bf, cf, ff, gf, hf, nf, uf, yf, Af, Bf, Cf, Ef, Ff, Gf, Hf, If, Lf, Pf, Rf, Qf, Vf, Xf, Yf, ag, bg, dg, eg, fg, gg, jg, vg, yg, zg, Bg, Dg, Fg, Hg, Gg, Ig, Lg, Mg, Ng, Og, Sg, Tg, Vg, Xg, $g, Zg, Wg, bh, ch, dh, eh, hh, ih, jh, kh, lh, mh, nh, qh, Dh, Eh, Gh, Kh, Ih, Nh, Rh, Sh, Th, Uh, Ph, Qh, Vh, Wh, Zh, $h, ai, ci, di, fi, ii, li, qi, si, ti, wi, vi, zi, Ai, Li, Oi, Pi, Qi, Ri, Si, Ti, Ui, Vi, Xi, $i, Yi, cj, Zi, dj, ij, Cj, Fj, Hj, Ij, Lj, Jj, Oj, Rj, Sj, Tj, Zj, hk, bk, ik, vk, Ek, Ck, Dk, Jk, Nk, Pk, Qk, Rk, Tk, Xk, dl, Zk, Uk, kl, ll, pl, ql, xl, Al, Bl, N, Cl, Il, Gl, Tl, O, Vl, Wl, Xl, Zl, am, bm, im, jm, lm, mm, sm, zm, Bm, Dm, Em, Fm, Gm, Hm, Km, Om, Tm, Sm, $m, an, bn, nn, Um, qn, Vm, sn, tn, xn, yn, Bn, Cn, Dn, Fn, Jn, Kn, Pn, Rn, Sn, Un, Vn, Zn, $n, ao, fo, Yn, ho, io, ro, to, wo, yo, zo, Ao, Bo, Do, Fo, Go, Io, Jo, Ko, Lo, Mo, Oo, To, cp, ep, gp, jp, ip, hp, tp, wp, Dp, Ep, Gp, Hp, Ip, Kp, Lp, Np, Op, Pp, Rp, Sp, Up, Tp, Wp, Zp, Yp, $p, bq, cq, fq, gq, hq, kq, nq, mq, pq, vq, wq, yq, zq, Bq, Aq, Eq, Gq, Iq, Jq, Kq, Rq, Tq, Zq, br, fr, gr, qr, tr, rr, sr, vr, wr, xr, yr, zr, Ar, Br, Cr, Dr, Er, Jr, Lr, Mr, Pr, Qr, Sr, Zr, is, bs, js, ks, ls, ms, os, qs, ss, us, ws, ys, Bs, Es, Qs, Cs, Ds, Gs, Hs, As, Fs, Vs, dt, jt, mt, qt, tt, wt, Et, Qa, Ft, Gt, It, Ht, Jt, Kt, Tt, St, Vt, Xt, Yt, $t, bu, fu, gu, cu, hu, lu, mu, ou, qu, vu, wu, ru, su, tu, uu, yu, zu, Hu, Ju, Ku, av, bv, cv, dv, kv, mv, ov, qv, rv, uv, Lv, Rv, ew, gw, hw, iw, jw, fx, hx, px, lx, mx, tx, ux, wx, xx, Fx, Jx, Mx, Qx, Rx, Sx, Tx, Vx, Wx, Xx, Yx, $x, ay, by, iy, jy, ky, xf, my, py, ny, oy, qy, ry;
    ba = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    ea = function() {
        var a = _.ca.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    ia = function(a) {
        return fa ? ha ? ha.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    };
    ja = function(a) {
        return ea().indexOf(a) != -1
    };
    la = function() {
        return fa ? !!ha && ha.brands.length > 0 : !1
    };
    ma = function() {
        return ja("Firefox") || ja("FxiOS")
    };
    oa = function() {
        !ja("Safari") || na() || (la() ? 0 : ja("Coast")) || (la() ? 0 : ja("Opera")) || (la() ? 0 : ja("Edge")) || (la() ? ia("Microsoft Edge") : ja("Edg/")) || la() && ia("Opera")
    };
    na = function() {
        return la() ? ia("Chromium") : (ja("Chrome") || ja("CriOS")) && !(la() ? 0 : ja("Edge")) || ja("Silk")
    };
    _.ra = function(a) {
        if (a instanceof _.qa) return a.g;
        throw Error("");
    };
    ta = function(a) {
        return new sa(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    _.wa = function(a) {
        var b = b === void 0 ? ua : b;
        a: if (b = b === void 0 ? ua : b, !(a instanceof _.qa)) {
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof sa && d.dn(a)) {
                    a = new _.qa(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.va
    };
    za = function(a) {
        for (var b = _.xa.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return new _.qa(c.join(""))
    };
    _.Ba = function(a) {
        if (Aa.test(a)) return a
    };
    _.Ca = function(a) {
        return a instanceof _.qa ? _.ra(a) : _.Ba(a)
    };
    _.Ea = function(a, b) {
        b = _.Ca(b);
        b !== void 0 && (a.href = b)
    };
    Ia = function(a, b) {
        b = _.Ga(a, b);
        var c;
        (c = b >= 0) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    _.Ja = function(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    Ka = function(a, b, c) {
        return arguments.length <= 2 ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    Na = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.La(e) ? "o" + _.Ma(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    Pa = function(a, b) {
        a.sort(b || _.Oa)
    };
    Sa = function(a) {
        for (var b = Qa, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || _.Oa;
        Pa(c, function(f, h) {
            return e(f.value, h.value) || f.index - h.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    Va = function(a, b) {
        if (!_.Ta(a) || !_.Ta(b) || a.length != b.length) return !1;
        for (var c = a.length, d = Ua, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    _.Oa = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    Ua = function(a, b) {
        return a === b
    };
    Wa = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            f !== void 0 && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    Xa = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Xa.apply(null, Ka(d, e, e + 8192)), h = 0; h < f.length; h++) b.push(f[h]);
            else b.push(d)
        }
        return b
    };
    Ya = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    Za = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    ab = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    cb = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < bb.length; f++) c = bb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    eb = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    fb = function(a) {
        var b, c, d = (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) == null ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    hb = function(a, b) {
        a.src = _.gb(b);
        fb(a)
    };
    ib = function(a) {
        a = a(function(b) {
            b.name = b.constructor.name;
            b.stack = Error().stack
        });
        a.prototype = Object.create(Error.prototype);
        a.prototype.constructor = a
    };
    jb = function(a) {
        var b = {};
        b.winner_qid = a.getEscapedQemQueryId();
        b.cid = _.u(a, 19);
        b.ecrs = _.u(a, 11);
        return "https://googleads.g.doubleclick.net/td/activeview?" + _.x(Object, "entries").call(Object, b).map(function(c) {
            var d = _.A(c);
            c = d.next().value;
            d = d.next().value;
            return encodeURIComponent(c) + "=" + encodeURIComponent(d)
        }).join("&") + "&acvw=[VIEWABILITY]"
    };
    nb = function(a) {
        var b = !1;
        b = b === void 0 ? !1 : b;
        if (kb) {
            if (b && (lb ? !a.en() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a))) throw Error("Found an unpaired surrogate");
            a = (mb || (mb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (f < 128) d[c++] = f;
                else {
                    if (f < 2048) d[c++] = f >> 6 | 192;
                    else {
                        if (f >= 55296 && f <= 57343) {
                            if (f <= 56319 && e < a.length) {
                                var h = a.charCodeAt(++e);
                                if (h >= 56320 && h <= 57343) {
                                    f = (f - 55296) * 1024 + h - 56320 + 65536;
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
    ob = function(a) {
        _.ca.setTimeout(function() {
            throw a;
        }, 0)
    };
    rb = function(a) {
        if (!pb) return qb(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    };
    tb = function(a) {
        return sb[a] || ""
    };
    vb = function(a) {
        return ub && a != null && a instanceof Uint8Array
    };
    xb = function(a) {
        if (a !== wb) throw Error("illegal external caller");
    };
    Ab = function(a) {
        if (yb) throw Error("");
        yb = function(b) {
            _.ca.setTimeout(function() {
                a(b)
            }, 0)
        }
    };
    Bb = function(a) {
        if (yb) try {
            yb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    };
    Eb = function() {
        var a = Error();
        Cb(a, "incident");
        yb ? Bb(a) : ob(a)
    };
    Fb = function(a) {
        a = Error(a);
        Cb(a, "warning");
        Bb(a);
        return a
    };
    Hb = function(a, b) {
        if (b != null) {
            if (a == null) {
                var c;
                a = (c = Gb) != null ? c : Gb = {}
            } else a = a.constructor;
            c = a[b] || 0;
            c >= 4 || (a[b] = c + 1, Eb())
        }
    };
    Ib = function() {
        return typeof BigInt === "function"
    };
    Kb = function(a) {
        return Array.prototype.slice.call(a)
    };
    Lb = function(a) {
        return typeof _.B.Symbol === "function" && typeof(0, _.B.Symbol)() === "symbol" ? (0, _.B.Symbol)() : a
    };
    Nb = function(a) {
        Mb(a, 34);
        return a
    };
    Pb = function(a) {
        Mb(a, 32);
        return a
    };
    Sb = function(a, b) {
        Rb(b, (a | 0) & -14591)
    };
    Tb = function(a, b) {
        Rb(b, (a | 34) & -14557)
    };
    Vb = function(a) {
        return !(!a || typeof a !== "object" || a.kn !== Ub)
    };
    Wb = function(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    };
    Zb = function(a, b, c) {
        if (a != null)
            if (typeof a === "string") a = a ? new Xb(a, wb) : Yb();
            else if (a.constructor !== Xb)
            if (vb(a)) a = a.length ? new Xb(c ? a : new Uint8Array(a), wb) : Yb();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    ac = function(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = (0, _.$b)(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? _.x(b, "includes").call(b, c) : b.has(c)))) return !1;
        Rb(a, d | 1);
        return !0
    };
    _.bc = function(a) {
        if (a & 2) throw Error();
    };
    fc = function(a) {
        var b = a >>> 0;
        dc = b;
        ec = (a - b) / 4294967296 >>> 0
    };
    ic = function(a) {
        if (a < 0) {
            fc(-a);
            var b = _.A(gc(dc, ec));
            a = b.next().value;
            b = b.next().value;
            dc = a >>> 0;
            ec = b >>> 0
        } else fc(a)
    };
    kc = function(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151) var c = "" + (4294967296 * b + a);
        else Ib() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), c = b + jc(c) + jc(a));
        return c
    };
    jc = function(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    };
    lc = function() {
        var a = dc,
            b = ec;
        b & 2147483648 ? Ib() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = _.A(gc(a, b)), a = b.next().value, b = b.next().value, a = "-" + kc(a, b)) : a = kc(a, b);
        return a
    };
    mc = function(a) {
        if (a.length < 16) ic(Number(a));
        else if (Ib()) a = BigInt(a), dc = Number(a & BigInt(4294967295)) >>> 0, ec = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +(a[0] === "-");
            ec = dc = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), ec *= 1E6, dc = dc * 1E6 + d, dc >= 4294967296 && (ec += _.x(Math, "trunc").call(Math, dc / 4294967296), ec >>>= 0, dc >>>= 0);
            b && (b = _.A(gc(dc, ec)), a = b.next().value, b = b.next().value, dc = a, ec = b)
        }
    };
    gc = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    _.nc = function(a) {
        if (a != null && typeof a !== "number") throw Error("Value of float/double field must be a number, found " + typeof a + ": " + a);
        return a
    };
    oc = function(a) {
        if (a == null || typeof a === "number") return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a)
    };
    rc = function(a) {
        if (typeof a !== "boolean") throw Error("Expected boolean but got " + qc(a) + ": " + a);
        return a
    };
    sc = function(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    };
    vc = function(a) {
        var b = typeof a;
        return b === "number" ? _.x(Number, "isFinite").call(Number, a) : b !== "string" ? !1 : tc.test(a)
    };
    _.wc = function(a) {
        if (!_.x(Number, "isFinite").call(Number, a)) throw Fb("enum");
        return a | 0
    };
    xc = function(a) {
        return a == null ? a : _.wc(a)
    };
    _.yc = function(a) {
        return a == null ? a : _.x(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    zc = function(a) {
        if (typeof a !== "number") throw Fb("int32");
        if (!_.x(Number, "isFinite").call(Number, a)) throw Fb("int32");
        return a | 0
    };
    Ac = function(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return _.x(Number, "isFinite").call(Number, a) ? a | 0 : void 0
    };
    Bc = function(a) {
        if (typeof a !== "number") throw Fb("uint32");
        if (!_.x(Number, "isFinite").call(Number, a)) throw Fb("uint32");
        return a >>> 0
    };
    _.Cc = function(a) {
        return a == null ? a : Bc(a)
    };
    Dc = function(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return _.x(Number, "isFinite").call(Number, a) ? a >>> 0 : void 0
    };
    _.Hc = function(a, b) {
        b = !!b;
        if (!vc(a)) throw Fb("int64");
        return typeof a === "string" ? Ec(a) : b ? Fc(a) : Gc(a)
    };
    Ic = function(a) {
        return a == null ? a : _.Hc(a)
    };
    Jc = function(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    };
    Kc = function(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    };
    Lc = function(a) {
        if (a < 0) {
            ic(a);
            var b = kc(dc, ec);
            a = Number(b);
            return _.x(Number, "isSafeInteger").call(Number, a) ? a : b
        }
        if (Jc(String(a))) return a;
        ic(a);
        return ec * 4294967296 + (dc >>> 0)
    };
    Gc = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (!_.x(Number, "isSafeInteger").call(Number, a)) {
            ic(a);
            var b = dc,
                c = ec;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    };
    Mc = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        return a >= 0 && _.x(Number, "isSafeInteger").call(Number, a) ? a : Lc(a)
    };
    Fc = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (_.x(Number, "isSafeInteger").call(Number, a)) a = String(a);
        else {
            var b = String(a);
            Kc(b) ? a = b : (ic(a), a = lc())
        }
        return a
    };
    Nc = function(a) {
        a = _.x(Math, "trunc").call(Math, a);
        if (a >= 0 && _.x(Number, "isSafeInteger").call(Number, a)) a = String(a);
        else {
            var b = String(a);
            Jc(b) ? a = b : (ic(a), a = kc(dc, ec))
        }
        return a
    };
    Ec = function(a) {
        var b = _.x(Math, "trunc").call(Math, Number(a));
        if (_.x(Number, "isSafeInteger").call(Number, b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Kc(a) || (mc(a), a = lc());
        return a
    };
    Oc = function(a) {
        var b = _.x(Math, "trunc").call(Math, Number(a));
        if (_.x(Number, "isSafeInteger").call(Number, b) && b >= 0) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        Jc(a) || (mc(a), a = kc(dc, ec));
        return a
    };
    Pc = function(a) {
        if (a == null) return a;
        if (vc(a)) {
            var b;
            typeof a === "number" ? b = Gc(a) : b = Ec(a);
            return b
        }
    };
    Qc = function(a, b) {
        b = b === void 0 ? !1 : b;
        if (a == null) return a;
        if (vc(a)) return typeof a === "string" ? Ec(a) : b ? Fc(a) : Gc(a)
    };
    _.Uc = function(a) {
        if (a != null) {
            var b = !!b;
            if (!vc(a)) throw Fb("uint64");
            a = typeof a === "string" ? Oc(a) : b ? Nc(a) : Mc(a)
        }
        return a
    };
    _.Vc = function(a) {
        if (typeof a !== "string") throw Error();
        return a
    };
    Wc = function(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    };
    _.Xc = function(a) {
        return a == null || typeof a === "string" ? a : void 0
    };
    $c = function(a, b, c, d) {
        if (a != null && typeof a === "object" && a.vh === Yc) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? Zc(b) : new b : void 0;
        var e = c = (0, _.$b)(a);
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && Rb(a, e);
        return new b(a)
    };
    Zc = function(a) {
        var b = a[ad];
        if (b) return b;
        b = new a;
        Nb(b.D);
        return a[ad] = b
    };
    bd = function(a, b, c) {
        if (b) return rc(a);
        var d;
        return (d = sc(a)) != null ? d : c ? !1 : void 0
    };
    cd = function(a, b, c) {
        if (b) return _.Vc(a);
        var d;
        return (d = _.Xc(a)) != null ? d : c ? "" : void 0
    };
    fd = function() {
        Eb()
    };
    id = function(a, b) {
        (gd || (gd = new _.B.WeakMap)).set(a, b);
        (hd || (hd = new _.B.WeakMap)).set(b, a)
    };
    kd = function(a, b) {
        jd = b;
        a = new a(b);
        jd = void 0;
        return a
    };
    nd = function(a) {
        switch (typeof a) {
            case "boolean":
                return ld || (ld = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? md || (md = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return a
        }
    };
    _.D = function(a, b, c) {
        a == null && (a = jd);
        jd = void 0;
        if (a == null) {
            var d = 96;
            c ? (a = [c], d |= 512) : a = [];
            b && (d = d & -16760833 | (b & 1023) << 14)
        } else {
            if (!Array.isArray(a)) throw Error("narr");
            d = (0, _.$b)(a);
            if (d & 2048) throw Error("farr");
            if (d & 64) return a;
            d |= 64;
            if (c && (d |= 512, c !== a[0])) throw Error("mid");
            a: {
                c = a;
                var e = c.length;
                if (e) {
                    var f = e - 1;
                    if (Wb(c[f])) {
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
                    d = d & -16760833 | (b & 1023) << 14
                }
            }
        }
        Rb(a, d);
        return a
    };
    od = function(a) {
        return a
    };
    qd = function(a, b, c, d, e, f) {
        a = $c(a, d, c, f);
        e && (a = pd(a));
        return a
    };
    rd = function(a) {
        return a
    };
    sd = function(a) {
        return [a, this.get(a)]
    };
    wd = function() {
        return td || (td = new ud(Nb([]), void 0, void 0, void 0, vd))
    };
    yd = function(a, b) {
        return xd(b)
    };
    xd = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (ac(a, void 0, 0)) return
                    } else {
                        if (vb(a)) return rb(a);
                        if (a instanceof Xb) return zd(a);
                        if (a instanceof ud) return Ad(a)
                    }
        }
        return a
    };
    Bd = function(a, b, c) {
        a = Kb(a);
        var d = a.length,
            e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (var f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    };
    Dd = function(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = ac(a, void 0, 0) ? void 0 : e && (0, _.$b)(a) & 2 ? a : Cd(a, b, c, d !== void 0, e);
            else if (Wb(a)) {
                var f = {},
                    h;
                for (h in a) Object.prototype.hasOwnProperty.call(a, h) && (f[h] = Dd(a[h], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    };
    Cd = function(a, b, c, d, e) {
        var f = d || c ? (0, _.$b)(a) : 0;
        d = d ? !!(f & 32) : void 0;
        a = Kb(a);
        for (var h = 0; h < a.length; h++) a[h] = Dd(a[h], b, c, d, e);
        c && c(f, a);
        return a
    };
    Fd = function(a) {
        return Dd(a, Ed, void 0, void 0, !1)
    };
    Ed = function(a) {
        return a.vh === Yc ? a.toJSON() : a instanceof ud ? Ad(a, Fd) : xd(a)
    };
    Gd = function(a, b, c) {
        c = c === void 0 ? Tb : c;
        if (a != null) {
            if (ub && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = (0, _.$b)(a);
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (Rb(a, (d | 34) & -12293), a) : Cd(a, Gd, d & 4 ? Tb : c, !0, !0)
            }
            a.vh === Yc ? (c = a.D, d = (0, _.Hd)(c), a = d & 2 ? a : kd(a.constructor, Id(c, d, !0))) : a instanceof ud && !(a.he & 2) && (c = Nb(Jd(a, Gd)), a = new ud(c, a.qg, a.De, a.wi));
            return a
        }
    };
    _.Kd = function(a) {
        var b = a.D;
        return kd(a.constructor, Id(b, (0, _.Hd)(b), !1))
    };
    Id = function(a, b, c) {
        var d = c || b & 2 ? Tb : Sb,
            e = !!(b & 32);
        a = Bd(a, b, function(f) {
            return Gd(f, e, d)
        });
        Mb(a, 32 | (c ? 2 : 0));
        return a
    };
    pd = function(a) {
        var b = a.D,
            c = (0, _.Hd)(b);
        return c & 2 ? kd(a.constructor, Id(b, c, !1)) : a
    };
    _.Ld = function(a) {
        var b = a.D,
            c = (0, _.Hd)(b);
        return c & 2 ? a : kd(a.constructor, Id(b, c, !0))
    };
    Nd = function(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[Md] = (a.constructor[Md] | 0) + 1) < 5 && Eb();
        return c === 0 ? !1 : !(c & b)
    };
    Od = function(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    };
    Qd = function(a, b, c, d, e) {
        var f = b >> 14 & 1023 || 536870912;
        if (c >= f || e && !Pd) {
            var h = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return h;
                e = a[f + (+!!(b & 512) - 1)] = {};
                h |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            h !== b && Rb(a, h);
            return h
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    };
    Vd = function(a, b, c, d) {
        var e = b & 2,
            f = Rd(a, b, c, d);
        Array.isArray(f) || (f = Ud);
        var h = !!(b & 32),
            k = (0, _.$b)(f);
        k === 0 && h && !e ? (k |= 33, Rb(f, k)) : k & 1 || (k |= 1, Rb(f, k));
        if (e) k & 2 || Nb(f), Object.freeze(f);
        else if (2 & k || 2048 & k) f = Kb(f), e = 1, h && (e |= 32), Rb(f, e), Qd(a, b, c, f, d);
        return f
    };
    _.ce = function(a, b, c, d, e, f, h) {
        var k = a.D,
            l = (0, _.Hd)(k),
            m = 2 & l ? 1 : d;
        f = !!f;
        d = Wd(k, l, b, e);
        var n = (0, _.$b)(d);
        if (Nd(a, n, h, f)) {
            if (4 & n || Object.isFrozen(d)) d = Kb(d), n = Xd(n, l), l = Qd(k, l, b, d, e);
            for (var p = a = 0; a < d.length; a++) {
                var q = c(d[a]);
                q != null && (d[p++] = q)
            }
            p < a && (d.length = p);
            n = Yd(n, l);
            n = (n | 20) & -4097;
            n &= -8193;
            h && (n |= h);
            Rb(d, n);
            2 & n && Object.freeze(d)
        }
        var t;
        m === 1 || m === 4 && 32 & n ? Zd(n) || (f = n, n |= 2, n !== f && Rb(d, n), Object.freeze(d)) : (h = m !== 5 ? !1 : !!(32 & n) || Zd(n) || !!$d(d), (m === 2 || h) && Zd(n) && (d = Kb(d), n = Xd(n, l), n = ae(n, l, f), Rb(d, n), l = Qd(k, l, b, d, e)), Zd(n) || (b = n, n = ae(n, l, f), n !== b && Rb(d, n)), h && (t = be(d)));
        return t || d
    };
    Wd = function(a, b, c, d) {
        a = Rd(a, b, c, d);
        return Array.isArray(a) ? a : Ud
    };
    Yd = function(a, b) {
        a === 0 && (a = Xd(a, b));
        return a | 1
    };
    Zd = function(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    };
    de = function(a) {
        return Zb(a, !0, !0)
    };
    ee = function(a) {
        return Zb(a, !0, !1)
    };
    ge = function(a, b, c, d, e, f) {
        var h = b & 2;
        a: {
            var k = c,
                l = b & 2;c = !1;
            if (k == null) {
                if (l) {
                    a = wd();
                    break a
                }
                k = []
            } else if (k.constructor === ud) {
                if ((k.he & 2) == 0 || l) {
                    a = k;
                    break a
                }
                k = Jd(k)
            } else Array.isArray(k) ? c = !!((0, _.$b)(k) & 2) : k = [];
            if (l) {
                if (!k.length) {
                    a = wd();
                    break a
                }
                c || (c = !0, Nb(k))
            } else if (c) {
                c = !1;
                l = Kb(k);
                for (k = 0; k < l.length; k++) {
                    var m = l[k] = Kb(l[k]);
                    Array.isArray(m[1]) && (m[1] = Nb(m[1]))
                }
                k = l
            }
            c || ((0, _.$b)(k) & 64 ? (0, _.fe)(k, 32) : 32 & b && Pb(k));f = new ud(k, e, cd, f);Qd(a, b, d, f, !1);a = f
        }!h && e && (a.Ol = !0);
        return a
    };
    he = function(a, b, c) {
        a = a.D;
        var d = (0, _.Hd)(a);
        return ge(a, d, Rd(a, d, b), b, void 0, c)
    };
    ie = function(a, b, c) {
        a = a.D;
        var d = (0, _.Hd)(a);
        return ge(a, d, Rd(a, d, b), b, c)
    };
    _.le = function(a, b, c, d) {
        var e = a.D,
            f = (0, _.Hd)(e);
        _.bc(f);
        if (c == null) return Qd(e, f, b), a;
        c = je(c);
        var h = (0, _.$b)(c),
            k = h,
            l = !!(2 & h) || Object.isFrozen(c),
            m = !l && (void 0 === ke || !1);
        if (Nd(a, h))
            for (h = 21, l && (c = Kb(c), k = 0, h = Xd(h, f), h = ae(h, f, !0)), l = 0; l < c.length; l++) c[l] = d(c[l]);
        m && (c = Kb(c), k = 0, h = Xd(h, f), h = ae(h, f, !0));
        h !== k && Rb(c, h);
        Qd(e, f, b, c);
        return a
    };
    _.me = function(a, b, c, d) {
        var e = a.D,
            f = (0, _.Hd)(e);
        _.bc(f);
        Qd(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    };
    _.ne = function(a, b, c, d) {
        var e = a.D,
            f = (0, _.$b)(e);
        _.bc((0, _.Hd)(a.D));
        b = Vd(e, f, b, !1);
        e = (0, _.$b)(b);
        e = !!(4 & e) && !!(4096 & e);
        if (Array.isArray(d))
            for (f = 0; f < d.length; f++) b.push(c(d[f], e));
        else
            for (d = _.A(d), f = d.next(); !f.done; f = d.next()) b.push(c(f.value, e));
        return a
    };
    _.oe = function(a, b, c, d) {
        var e = a.D,
            f = (0, _.Hd)(e);
        _.bc(f);
        b = Vd(e, f, b);
        e = (0, _.$b)(b);
        d = c(d, !!(4 & e) && !!(4096 & e));
        b.push(d);
        return a
    };
    re = function(a) {
        if (pe) {
            var b;
            return (b = a[qe]) != null ? b : a[qe] = new _.B.Map
        }
        if (qe in a) return a[qe];
        b = new _.B.Map;
        Object.defineProperty(a, qe, {
            value: b
        });
        return b
    };
    te = function(a, b, c, d) {
        var e = re(a),
            f = se(e, a, b, c);
        f !== d && (f && (b = Qd(a, b, f)), e.set(c, d));
        return b
    };
    se = function(a, b, c, d) {
        var e = a.get(d);
        if (e != null) return e;
        for (var f = e = 0; f < d.length; f++) {
            var h = d[f];
            Rd(b, c, h) != null && (e !== 0 && (c = Qd(b, c, e)), e = h)
        }
        a.set(d, e);
        return e
    };
    ue = function(a, b, c, d) {
        a = a.D;
        var e = (0, _.Hd)(a),
            f = Rd(a, e, c, d);
        b = $c(f, b, !1, e);
        b !== f && b != null && Qd(a, e, c, b, d);
        return b
    };
    _.ve = function(a, b, c, d, e, f, h, k) {
        var l = !!(2 & b);
        e = l ? 1 : e;
        h = !!h;
        k && (k = !l);
        l = Wd(a, b, d, f);
        var m = (0, _.$b)(l),
            n = !!(4 & m);
        if (!n) {
            m = Yd(m, b);
            var p = l,
                q = b,
                t = !!(2 & m);
            t && (q |= 2);
            for (var w = !t, v = !0, y = 0, z = 0; y < p.length; y++) {
                var G = $c(p[y], c, !1, q);
                if (G instanceof c) {
                    if (!t) {
                        var C = !!((0, _.$b)(G.D) & 2);
                        w && (w = !C);
                        v && (v = C)
                    }
                    p[z++] = G
                }
            }
            z < y && (p.length = z);
            m |= 4;
            m = v ? m | 16 : m & -17;
            m = w ? m | 8 : m & -9;
            Rb(p, m);
            t && Object.freeze(p)
        }
        if (k && !(8 & m || !l.length && (e === 1 || e === 4 && 32 & m))) {
            Zd(m) && (l = Kb(l), m = Xd(m, b), b = Qd(a, b, d, l, f));
            c = l;
            k = m;
            for (p = 0; p < c.length; p++) m = c[p], q = pd(m), m !== q && (c[p] = q);
            k |= 8;
            k = c.length ? k & -17 : k | 16;
            Rb(c, k);
            m = k
        }
        var H;
        e === 1 || e === 4 && 32 & m ? Zd(m) || (b = m, m |= !l.length || 16 & m && (!n || 32 & m) ? 2 : 2048, m !== b && Rb(l, m), Object.freeze(l)) : (n = e !== 5 ? !1 : !!(32 & m) || Zd(m) || !!$d(l), (e === 2 || n) && Zd(m) && (l = Kb(l), m = Xd(m, b), m = ae(m, b, h), Rb(l, m), b = Qd(a, b, d, l, f)), Zd(m) || (a = m, m = ae(m, b, h), m !== a && Rb(l, m)), n && (H = be(l)));
        return H || l
    };
    Xd = function(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    };
    ae = function(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    };
    we = function(a, b, c, d) {
        a = a.D;
        var e = (0, _.Hd)(a);
        _.bc(e);
        b = _.ve(a, e, c, b, 2, void 0, !0);
        c = d != null ? d : new c;
        b.push(c);
        (0, _.$b)(c.D) & 2 ? (0, _.fe)(b, 8) : (0, _.fe)(b, 16);
        return c
    };
    xe = function(a) {
        return Qc(a, !0)
    };
    ye = function(a, b) {
        return a != null ? a : b
    };
    _.Ce = function(a) {
        var b = ze ? a.D : Cd(a.D, Ed, void 0, void 0, !1);
        var c = !ze;
        var d = Ae ? void 0 : a.constructor.Z;
        var e = (0, _.Hd)(c ? a.D : b);
        if (a = b.length) {
            var f = b[a - 1],
                h = Wb(f);
            h ? a-- : f = void 0;
            e = +!!(e & 512) - 1;
            var k = b;
            if (h) {
                b: {
                    var l = f;
                    var m = {};h = !1;
                    if (l)
                        for (var n in l)
                            if (Object.prototype.hasOwnProperty.call(l, n))
                                if (isNaN(+n)) m[n] = l[n];
                                else {
                                    var p = l[n];
                                    Array.isArray(p) && (ac(p, d, +n) || Vb(p) && p.size === 0) && (p = null);
                                    p == null && (h = !0);
                                    p != null && (m[n] = p)
                                }
                    if (h) {
                        for (var q in m) break b;
                        m = null
                    } else m = l
                }
                l = m == null ? f != null : m !== f
            }
            for (var t; a > 0; a--) {
                q = a - 1;
                n = k[q];
                q -= e;
                if (!(n == null || ac(n, d, q) || Vb(n) && n.size === 0)) break;
                t = !0
            }
            if (k !== b || l || t) {
                if (!c) k = Array.prototype.slice.call(k, 0, a);
                else if (t || l || m) k.length = a;
                m && k.push(m)
            }
            b = k
        }
        return b
    };
    De = function(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        Mb(b, 128);
        return kd(a, Pb(b))
    };
    Ee = function(a, b) {
        if (Array.isArray(b)) {
            var c = (0, _.$b)(b);
            if (c & 4) return b;
            for (var d = 0, e = 0; d < b.length; d++) {
                var f = a(b[d]);
                f != null && (b[e++] = f)
            }
            e < d && (b.length = e);
            Rb(b, (c | 5) & -12289);
            c & 2 && Object.freeze(b);
            return b
        }
    };
    Fe = function(a, b, c) {
        a[b] = c
    };
    Je = function(a) {
        var b = a[Ge];
        if (!b) {
            var c = He(a);
            b = function(d, e) {
                return Ie(d, e, c)
            };
            a[Ge] = b
        }
        return b
    };
    Ke = function(a) {
        return a.g
    };
    Le = function(a, b) {
        var c, d, e = a.g;
        return function(f, h, k) {
            return e(f, h, k, d || (d = He(b).g), c || (c = Je(b)))
        }
    };
    He = function(a) {
        var b = a[Me];
        if (b) return b;
        b = a[Me] = {};
        var c = Ke,
            d = Le;
        var e = e === void 0 ? Fe : e;
        b.g = nd(a[0]);
        var f = 0,
            h = a[++f];
        h && h.constructor === Object && (b.ym = h, h = a[++f], typeof h === "function" && (b.l = h, b.o = a[++f], h = a[++f]));
        for (var k = {}; Array.isArray(h) && typeof h[0] === "number" && h[0] > 0;) {
            for (var l = 0; l < h.length; l++) k[h[l]] = h;
            h = a[++f]
        }
        for (l = 1; h !== void 0;) {
            typeof h === "number" && (l += h, h = a[++f]);
            var m = void 0;
            if (h instanceof Ne) var n = h;
            else n = Oe, f--;
            if (n.ml) {
                h = a[++f];
                m = a;
                var p = f;
                typeof h == "function" && (h = h(), m[p] = h);
                m = h
            }
            h = a[++f];
            p = l + 1;
            typeof h === "number" && h < 0 && (p -= h, h = a[++f]);
            for (; l < p; l++) {
                var q = k[l];
                e(b, l, m ? d(n, m, q) : c(n, q))
            }
        }
        Pe in a && Qe in a && Me in a && (a.length = 0);
        return b
    };
    Se = function(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.ym)
            if (c = c[b]) {
                c = Array.isArray(c) ? c[0] instanceof Ne ? c : [Re, c] : [c, void 0];
                var d = c[0].g;
                if (c = c[1]) {
                    var e = Je(c),
                        f = He(c).g;
                    c = (c = a.o) ? c(f, e) : function(h, k, l) {
                        return d(h, k, l, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    };
    Ie = function(a, b, c) {
        for (var d = (0, _.Hd)(a), e = +!!(d & 512) - 1, f = a.length, h = f + (d & 256 ? -1 : 0), k = d & 512 ? 1 : 0; k < h; k++) {
            var l = a[k];
            if (l != null) {
                var m = k - e,
                    n = Se(c, m);
                n && n(b, l, m)
            }
        }
        if (d & 256) {
            a = a[f - 1];
            for (var p in a) Object.prototype.hasOwnProperty.call(a, p) && (d = +p, _.x(Number, "isNaN").call(Number, d) || (e = a[p], e != null && (f = Se(c, d)) && f(b, e, d)))
        }
    };
    Te = function(a) {
        return new Ne(a, !1)
    };
    Xe = function(a, b, c) {
        a: if (b != null) {
            if (vc(b)) {
                if (typeof b === "string") {
                    b = Ec(b);
                    break a
                }
                if (typeof b === "number") {
                    b = Gc(b);
                    break a
                }
            }
            b = void 0
        }b != null && (typeof b === "string" && Ue(b), b != null && (Ve(a, c, 0), typeof b === "number" ? (a = a.g, ic(b), We(a, dc, ec)) : (c = Ue(b), We(a.g, c.o, c.g))))
    };
    $e = function(a, b, c, d, e) {
        b = b instanceof _.E ? b.D : Array.isArray(b) ? _.D(b, d[0], d[1]) : void 0;
        b != null && (c = Ye(a, c), e(b, a), Ze(a, c))
    };
    bf = function(a) {
        var b = _.af;
        if (!a) throw Error((typeof b === "function" ? b() : b) || String(a));
    };
    cf = function(a) {
        a.jq = !0;
        return a
    };
    ff = function(a) {
        return function() {
            var b = new df;
            Ie(this.D, b, He(a));
            ef(b, b.g.end());
            for (var c = new Uint8Array(b.o), d = b.l, e = d.length, f = 0, h = 0; h < e; h++) {
                var k = d[h];
                c.set(k, f);
                f += k.length
            }
            b.l = [c];
            return c
        }
    };
    gf = function(a) {
        return function(b) {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = kd(a, Pb(b))
            }
            return b
        }
    };
    hf = function(a) {
        var b = a.split(/\?|#/),
            c = /\?/.test(a) ? "?" + b[1] : "";
        return {
            path: b[0],
            lb: c,
            hash: /#/.test(a) ? "#" + (c ? b[2] : b[1]) : ""
        }
    };
    _.kf = function(a) {
        var b = _.xa.apply(1, arguments);
        if (b.length === 0) return jf(a[0]);
        for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return jf(c)
    };
    _.lf = function(a, b) {
        a = hf(_.gb(a).toString());
        var c = a.lb,
            d = c.length ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var h = 0; h < e.length; h++) {
                var k = e[h];
                k !== null && k !== void 0 && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(k)), d = "&")
            }
        });
        return jf(a.path + c + a.hash)
    };
    nf = function(a) {
        return a ? a.passive && mf() ? a : a.capture || !1 : !1
    };
    uf = function(a) {
        var b = window,
            c = !0;
        c = c === void 0 ? !1 : c;
        new _.B.Promise(function(d, e) {
            function f() {
                h.onload = null;
                h.onerror = null;
                var k;
                (k = h.parentElement) == null || k.removeChild(h)
            }
            var h = b.document.createElement("script");
            h.onload = function() {
                f();
                d()
            };
            h.onerror = function() {
                f();
                e(void 0)
            };
            h.type = "text/javascript";
            hb(h, a);
            c && b.document.readyState !== "complete" ? _.tf(b, "load", function() {
                b.document.body.appendChild(h)
            }) : b.document.body.appendChild(h)
        })
    };
    yf = function(a) {
        var b, c, d, e, f, h;
        return _.vf(function(k) {
            switch (k.g) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.g + ("&tv=" + a.o + "&st=") + a.Zd, c = void 0, k.l = 2, k.yield(wf(b), 4);
                case 4:
                    c = k.o;
                    k.g = 3;
                    k.l = 0;
                    break;
                case 2:
                    xf(k);
                case 3:
                    if (!c) return k.return(void 0);
                    d = a.Ce || c.sodar_query_id;
                    e = c.rc_enable !== void 0 && a.l ? c.rc_enable : "n";
                    f = c.bg_snapshot_delay_ms === void 0 ? "0" : c.bg_snapshot_delay_ms;
                    h = c.is_gen_204 === void 0 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? k.return({
                        context: a.B,
                        Hl: c.bg_hash_basename,
                        Gl: c.bg_binary,
                        hn: a.g + "_" + a.o,
                        Ce: d,
                        Zd: a.Zd,
                        Pf: e,
                        mg: f,
                        Mf: h
                    }) : k.return(void 0)
            }
        })
    };
    Af = function(a) {
        var b;
        _.vf(function(c) {
            if (c.g == 1) return c.yield(yf(a), 2);
            if (b = c.o) {
                var d = b,
                    e = "sodar2";
                e = e === void 0 ? "sodar2" : e;
                var f = window,
                    h = f.GoogleGcLKhOms;
                h && typeof h.push === "function" || (h = f.GoogleGcLKhOms = []);
                var k = {};
                h.push((k._ctx_ = d.context, k._bgv_ = d.Hl, k._bgp_ = d.Gl, k._li_ = d.hn, k._jk_ = d.Ce, k._st_ = d.Zd, k._rc_ = d.Pf, k._dl_ = d.mg, k._g2_ = d.Mf, k));
                if (d = f.GoogleDX5YKUSk) f.GoogleDX5YKUSk = void 0, d[1]();
                e = _.kf(zf, e);
                uf(e)
            }
            return c.return(b)
        })
    };
    Bf = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    Cf = function(a) {
        a = a === void 0 ? _.ca : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return ((c = b) == null ? 0 : c.pageViewId) && ((d = b) == null ? 0 : d.canonicalUrl) ? b : null
    };
    Ef = function(a) {
        return Df(a.length % 4 !== 0 ? a + "A" : a).map(function(b) {
            return (_.F = b.toString(2), _.x(_.F, "padStart")).call(_.F, 8, "0")
        }).join("")
    };
    Ff = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        return parseInt(a, 2)
    };
    Gf = function(a) {
        if (!/^[0-1]+$/.test(a)) throw Error("Invalid input [" + a + "] not a bit string.");
        for (var b = [1, 2, 3, 5], c = 0, d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };
    Hf = function(a, b) {
        a = Ef(a);
        return a.length < b ? _.x(a, "padEnd").call(a, b, "0") : a
    };
    If = function(a, b) {
        var c = a.indexOf("11");
        if (c === -1) throw Error("Expected section bitstring but not found in [" + a + "] part of [" + b + "]");
        return a.slice(0, c + 2)
    };
    _.Jf = function(a) {
        a = a === void 0 ? _.ca : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    };
    _.Kf = function(a) {
        a = a === void 0 ? _.ca : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    Lf = function(a, b) {
        b = b === void 0 ? _.ca : b;
        var c, d;
        return ((c = b.performance) == null ? void 0 : (d = c.timing) == null ? void 0 : d[a]) || 0
    };
    _.Mf = function(a) {
        a = a === void 0 ? _.ca : a;
        var b = Math.min(Lf("domLoading", a) || Infinity, Lf("domInteractive", a) || Infinity);
        return b === Infinity ? Math.max(Lf("responseEnd", a), Lf("navigationStart", a)) : b
    };
    Pf = function(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.Nf("IMG", a.document);
        if (c || d) {
            var h = function(k) {
                c && c(k);
                d && Ia(a.google_image_requests, f);
                _.Of(f, "load", h);
                _.Of(f, "error", h)
            };
            _.tf(f, "load", h);
            _.tf(f, "error", h)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    Rf = function(a, b) {
        try {
            var c = function(d) {
                var e = {};
                return [(e[d.Wb] = d.Rb, e)]
            };
            return JSON.stringify([a.filter(function(d) {
                return d.Mb
            }).map(c), _.Ce(b), a.filter(function(d) {
                return !d.Mb
            }).map(c)])
        } catch (d) {
            return Qf(d, b), ""
        }
    };
    Qf = function(a, b) {
        try {
            Sf({
                m: _.Tf(a instanceof Error ? a : Error(String(a))),
                b: _.Uf(b, 1, 0) || null,
                v: _.u(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    };
    Vf = function(a, b, c, d, e, f) {
        try {
            var h = a.g,
                k = _.Nf("SCRIPT", h);
            k.async = !0;
            hb(k, b);
            h.head.appendChild(k);
            k.addEventListener("load", function() {
                e();
                d && h.head.removeChild(k)
            });
            k.addEventListener("error", function() {
                c > 0 ? Vf(a, b, c - 1, d, e, f) : (d && h.head.removeChild(k), f())
            })
        } catch (l) {
            f()
        }
    };
    Xf = function(a, b, c, d) {
        c = c === void 0 ? function() {} : c;
        d = d === void 0 ? function() {} : d;
        Vf(Wf(a), b, 0, !1, c, d)
    };
    Yf = function(a) {
        return a[_.x(_.B.Symbol, "iterator")]()
    };
    ag = function(a) {
        var b = Zf($f(a.location.href));
        a = b.get("fcconsent");
        b = b.get("fc");
        return b === "alwaysshow" ? b : a === "alwaysshow" ? a : null
    };
    bg = function(a) {
        var b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = Zf($f(a.location.href)).get("fctype")) && b.indexOf(a) !== -1 ? a : null
    };
    dg = function(a) {
        var b = $f(a),
            c = {
                search: "",
                hash: ""
            };
        a = {};
        b && (a.protocol = b.protocol, a.username = b.username, a.password = b.password, a.hostname = b.hostname, a.port = b.port, a.pathname = b.pathname, a.search = b.search, a.hash = b.hash);
        _.x(Object, "assign").call(Object, a, c);
        if (a.port && a.port[0] === ":") throw Error("port should not start with ':'");
        a.hash && a.hash[0] != "#" && (a.hash = "#" + a.hash);
        c.search ? c.search[0] != "?" && (a.search = "?" + c.search) : c.searchParams && (a.search = "?" + cg(c.searchParams), a.searchParams = void 0);
        b = "";
        a.protocol && (b += a.protocol + "//");
        c = a.username;
        var d = a.password;
        b = b + (c && d ? c + ":" + d + "@" : c ? c + "@" : d ? ":" + d + "@" : "") + (a.hostname || "");
        a.port && (b += ":" + a.port);
        b += a.pathname || "";
        b += a.search || "";
        b += a.hash || "";
        a = $f(b).toString();
        a.charAt(a.length - 1) === "/" && (a = a.substring(0, a.length - 1));
        return a.toString().length <= 1E3 ? a : null
    };
    eg = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.Nf("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    fg = function(a) {
        a = Wf(a);
        for (var b = _.A(document.getElementsByName("googlefcPresent")), c = b.next(); !c.done; c = b.next()) a.ul(c.value)
    };
    gg = function(a) {
        a && typeof a.dispose == "function" && a.dispose()
    };
    jg = function(a) {
        a = hg(a.data.__fciReturn);
        return {
            payload: a,
            Rh: _.ig(a, 1)
        }
    };
    vg = function(a, b) {
        var c = new kg(lg, "https://fundingchoicesmessages.google.com/i/%{id}");
        b = _.x(Object, "assign").call(Object, {}, b, {
            ers: 3
        });
        return _.tg(ug(c, {
            id: a
        }), b)
    };
    yg = function() {
        var a = ea();
        return a ? _.wg("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return _.xg(a, b)
        }) || _.xg(a, "OMI/") && !_.xg(a, "XiaoMi/") ? !0 : _.xg(a, "Presto") && _.xg(a, "Linux") && !_.xg(a, "X11") && !_.xg(a, "Android") && !_.xg(a, "Mobi") : !1
    };
    zg = function() {
        return cf(function(a) {
            return a === 0
        })
    };
    Bg = function() {
        var a = Ag;
        return cf(function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        })
    };
    Dg = function() {
        var a = Cg;
        return cf(function(b) {
            return b instanceof a
        })
    };
    Fg = function(a) {
        return cf(function(b) {
            if (!Eg(b)) return !1;
            for (var c = _.A(_.x(Object, "entries").call(Object, a)), d = c.next(); !d.done; d = c.next()) {
                var e = _.A(d.value);
                d = e.next().value;
                e = e.next().value;
                if (!(d in b)) {
                    if (e.bn === !0) continue;
                    return !1
                }
                if (!e(b[d])) return !1
            }
            return !0
        })
    };
    Hg = function(a) {
        return Gg(cf(function(b, c) {
            return b === void 0 ? !0 : a(b, c)
        }))
    };
    Gg = function(a) {
        a.bn = !0;
        return a
    };
    Ig = function() {
        return cf(function(a) {
            return Array.isArray(a)
        })
    };
    Lg = function() {
        return cf(function(a) {
            return Jg(a) ? a.every(function(b) {
                return Kg(b)
            }) : !1
        })
    };
    Mg = function(a) {
        var b = 1,
            c;
        if (a !== void 0 && a !== "")
            for (b = 0, c = a.length - 1; c >= 0; c--) {
                var d = a.charCodeAt(c);
                b = (b << 6 & 268435455) + d + (d << 14);
                d = b & 266338304;
                b = d !== 0 ? b ^ d >> 21 : b
            }
        return b
    };
    Ng = function(a, b) {
        if (!a || a === "none") return 1;
        a = String(a);
        "auto" === a && (a = b, "www." === a.substring(0, 4) && (a = a.substring(4, a.length)));
        return Mg(a.toLowerCase())
    };
    Og = function(a) {
        return !!a && a.top === a
    };
    Sg = function(a) {
        a = a === void 0 ? _.ca : a;
        var b = new Pg;
        "SVGElement" in a && "createElementNS" in a.document && b.set(0);
        var c = Qg();
        c["allow-top-navigation-by-user-activation"] && b.set(1);
        c["allow-popups-to-escape-sandbox"] && b.set(2);
        a.crypto && a.crypto.subtle && b.set(3);
        "TextDecoder" in a && "TextEncoder" in a && b.set(4);
        return Rg(b)
    };
    Tg = function(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Rh: b.__uspapiReturn.callId
        }
    };
    Vg = function(a, b) {
        b = b === void 0 ? window : b;
        if (Ug(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    Xg = function(a, b, c) {
        return Ug(b) ? Wg(a, c) : null
    };
    $g = function(a) {
        return Yg ? Yg : a.origin === "null" ? Yg = !1 : Yg = Zg(a)
    };
    Zg = function(a) {
        if (!a.navigator.cookieEnabled) return !1;
        var b = new ah(a.document);
        if (!b.isEmpty()) return !0;
        b.set("TESTCOOKIESENABLED", "1", {
            He: 60,
            Ik: a.isSecureContext ? "none" : void 0,
            hg: a.isSecureContext || void 0
        });
        if (b.get("TESTCOOKIESENABLED") !== "1") return !1;
        b.remove("TESTCOOKIESENABLED");
        return !0
    };
    Wg = function(a, b) {
        b = b.origin !== "null" ? b.document.cookie : null;
        return b === null ? null : (new ah({
            cookie: b
        })).get(a) || ""
    };
    bh = function(a, b, c, d) {
        d.origin !== "null" && (d.isSecureContext && (c = _.x(Object, "assign").call(Object, {}, c, {
            Ik: "none",
            hg: !0
        })), (new ah(d.document)).set(a, b, c))
    };
    ch = function(a) {
        var b = {};
        typeof a.data === "string" ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Rh: b.__gppReturn.callId
        }
    };
    dh = function(a) {
        return !a || a.length === 1 && a[0] === -1
    };
    eh = function(a, b, c) {
        return b[a] || c
    };
    hh = function(a) {
        _.fh(gh).l(a)
    };
    ih = function() {
        return _.fh(gh).B()
    };
    jh = function(a, b) {
        b = b === void 0 ? document : b;
        var c;
        return !((c = b.featurePolicy) == null || !(_.F = c.allowedFeatures(), _.x(_.F, "includes")).call(_.F, a))
    };
    kh = function(a) {
        a = a === void 0 ? navigator : a;
        try {
            var b, c;
            return !!((b = a.protectedAudience) == null ? 0 : (c = b.queryFeatureSupport) == null ? 0 : c.call(b, "deprecatedRenderURLReplacements"))
        } catch (d) {
            return !1
        }
    };
    lh = function(a, b, c) {
        return !!(a && "runAdAuction" in b && b.runAdAuction instanceof Function && jh("run-ad-auction", c))
    };
    mh = function(a, b) {
        return !!(a && "browsingTopics" in b && b.browsingTopics instanceof Function && jh("browsing-topics", b))
    };
    nh = function(a, b, c) {
        c = c === void 0 ? b.document : c;
        return !!(a && "sharedStorage" in b && b.sharedStorage && jh("shared-storage", c))
    };
    qh = function(a) {
        a = a === void 0 ? _.oh() : a;
        return function(b) {
            return _.ph(b + " + " + a) % 1E3
        }
    };
    _.I = function(a) {
        return _.fh(sh).o(a.g, a.defaultValue)
    };
    _.yh = function(a) {
        return _.fh(sh).l(a.g, a.defaultValue)
    };
    Dh = function(a) {
        return _.fh(sh).B(a.g, a.defaultValue)
    };
    Eh = function(a) {
        return _.fh(sh).L(a.g, a.defaultValue)
    };
    Gh = function(a) {
        _.fh(Fh).g(a)
    };
    Kh = function() {
        if (b === void 0) {
            var a = a === void 0 ? _.ca : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        Hh(_.fh(gh), a);
        Ih(b);
        Jh(_.fh(Fh), b);
        _.fh(sh).g()
    };
    Ih = function(a) {
        var b = _.fh(sh);
        b.o = function(c, d) {
            return eh(5, a, function() {
                return !1
            })(c, d, 2)
        };
        b.l = function(c, d) {
            return eh(6, a, function() {
                return 0
            })(c, d, 2)
        };
        b.B = function(c, d) {
            return eh(7, a, function() {
                return ""
            })(c, d, 2)
        };
        b.L = function(c, d) {
            return eh(8, a, function() {
                return []
            })(c, d, 2)
        };
        b.j = function(c, d) {
            return eh(17, a, function() {
                return []
            })(c, d, 2)
        };
        b.g = function() {
            eh(15, a, function() {})(2)
        }
    };
    Nh = function(a) {
        try {
            var b, c, d = (b = a.performance) == null ? void 0 : (c = b.getEntriesByType("navigation")) == null ? void 0 : c[0];
            if (d == null ? 0 : d.type) {
                var e;
                return (e = Lh.get(d.type)) != null ? e : null
            }
        } catch (l) {}
        var f, h, k;
        return (k = Mh.get((f = a.performance) == null ? void 0 : (h = f.navigation) == null ? void 0 : h.type)) != null ? k : null
    };
    Rh = function(a, b, c, d) {
        var e = new _.Oh,
            f = "",
            h = function(l) {
                try {
                    var m = typeof l.data === "object" ? l.data : JSON.parse(l.data);
                    f === m.paw_id && (_.Of(a, "message", h), m.error ? e.reject(Error(m.error)) : e.resolve(d(m)))
                } catch (n) {}
            },
            k = Ph(a);
        return k ? (_.tf(a, "message", h), f = c(k), e.promise) : (c = Qh(a)) ? (f = String(Math.floor(_.oh() * 2147483647)), _.tf(a, "message", h), b(c, f), e.promise) : null
    };
    Sh = function(a) {
        return Rh(a, function(b, c) {
            var d, e;
            return void((d = (e = b.getGmaQueryInfo) != null ? e : b.getGmaSig) == null ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    Th = function(a) {
        return Rh(a, function(b, c) {
            var d, e;
            return void((d = (e = b.getGmaQueryInfo) != null ? e : b.getGmaSig) == null ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b
        })
    };
    Uh = function(a) {
        return !!Ph(a) || !!Qh(a)
    };
    Ph = function(a) {
        var b;
        if (typeof((b = a.gmaSdk) == null ? void 0 : b.getQueryInfo) === "function") return a.gmaSdk
    };
    Qh = function(a) {
        var b, c, d, e, f, h;
        if (typeof((b = a.webkit) == null ? void 0 : (c = b.messageHandlers) == null ? void 0 : (d = c.getGmaQueryInfo) == null ? void 0 : d.postMessage) === "function" || typeof((e = a.webkit) == null ? void 0 : (f = e.messageHandlers) == null ? void 0 : (h = f.getGmaSig) == null ? void 0 : h.postMessage) === "function") return a.webkit.messageHandlers
    };
    Vh = function(a) {
        var b, c;
        return (c = (_.F = ["pbjs"].concat((b = a._pbjsGlobals) != null ? b : []).map(function(d) {
            return a[d]
        }), _.x(_.F, "find")).call(_.F, function(d) {
            return Array.isArray(d == null ? void 0 : d.que)
        })) != null ? c : null
    };
    Wh = function(a, b) {
        var c, d;
        return (d = (c = b == null ? void 0 : b.get(a)) != null ? c : b == null ? void 0 : b.get(_.ph(a))) != null ? d : 0
    };
    Zh = function(a, b, c) {
        return Xh(new Yh(a, b, c))
    };
    $h = function(a, b) {
        var c, d;
        return _.vf(function(e) {
            if (e.g == 1) return c = b ? a.filter(function(f) {
                return !f.uc
            }) : a, e.yield(_.B.Promise.all(c.map(function(f) {
                return f.Kg.promise
            })), 2);
            if (a.length === c.length) return e.return();
            d = a.filter(function(f) {
                return f.uc
            });
            return e.yield(_.B.Promise.race([_.B.Promise.all(d.map(function(f) {
                return f.Kg.promise
            })), new _.B.Promise(function(f) {
                return void setTimeout(f, b)
            })]), 0)
        })
    };
    ai = function(a, b, c) {
        return {
            id: a,
            Yg: b,
            Ta: c
        }
    };
    ci = function(a, b) {
        return new bi(a.id, a.Yg, b, a.Ta, _.xa.apply(2, arguments))
    };
    di = function(a, b, c, d) {
        return {
            id: a,
            Yg: b,
            xn: c,
            Ta: d
        }
    };
    fi = function(a, b) {
        return new ei(a.id, a.Yg, b, a.xn, a.Ta, _.xa.apply(2, arguments))
    };
    ii = function(a, b) {
        if (a !== a.top) {
            b = b === void 0 ? -1 : b;
            if (b < 0) a = !1;
            else {
                var c = _.gi(a, !0, !0),
                    d = _.hi(a, !0);
                a = c > 0 && d > 0 && Math.abs(1 - a.screen.width / c) <= b && Math.abs(1 - a.screen.height / d) <= b
            }
            a = a ? 0 : 512
        } else a = 0;
        return a
    };
    _.ji = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.ki = function(a) {
        var b = _.gi(a);
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    li = function(a, b, c) {
        b = b === void 0 ? 420 : b;
        return (a = _.gi(a, !0, c === void 0 ? !1 : c)) ? a > b ? 32768 : a < 320 ? 65536 : 0 : 16384
    };
    _.mi = function(a) {
        a = a.document;
        var b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    };
    _.hi = function(a, b) {
        var c = _.mi(a).clientHeight;
        return (b === void 0 ? 0 : b) ? c * _.ni(a) : c
    };
    _.gi = function(a, b, c) {
        var d, e = (d = _.mi(a).clientWidth) != null ? d : (c === void 0 ? 0 : c) ? a.innerWidth : void 0;
        return (b === void 0 ? 0 : b) ? e * _.ni(a) : e
    };
    _.oi = function(a, b) {
        var c = _.mi(a);
        return b ? (a = _.hi(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    };
    _.pi = function(a) {
        return a.pageYOffset === void 0 ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    qi = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                b.googletag != null || (b.googletag = {
                    cmd: []
                });
                var e;
                b.googletag.queryIds = (e = b.googletag.queryIds) != null ? e : [];
                b.googletag.queryIds.push(c);
                b.googletag.queryIds.length > 500 && b.googletag.queryIds.shift()
            }
        } catch (f) {}
    };
    _.ri = function(a) {
        var b = a.ni;
        var c = a.Qg;
        var d = a.Eh;
        var e = a.oi;
        var f = a.Rg;
        a = a.Fh;
        for (var h = [], k = 0; k < a; k++)
            for (var l = 0; l < d; l++) {
                var m = l,
                    n = d - 1,
                    p = k,
                    q = a - 1;
                h.push({
                    x: b + (n === 0 ? 0 : m / n) * (c - b),
                    y: e + (q === 0 ? 0 : p / q) * (f - e)
                })
            }
        return h
    };
    si = function(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };
    ti = function(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    };
    wi = function(a, b) {
        return new _.ui(a, {
            tj: vi(a, b === void 0 ? null : b)
        })
    };
    vi = function(a, b) {
        if (b = b === void 0 ? null : b) {
            var c = b;
            return function(d, e, f) {
                var h, k;
                _.xi(c, "ach_evt", {
                    tn: d.tagName,
                    id: (h = d.getAttribute("id")) != null ? h : "",
                    cls: (k = d.getAttribute("class")) != null ? k : "",
                    ign: String(f),
                    pw: a.innerWidth,
                    ph: a.innerHeight,
                    x: e.x,
                    y: e.y
                }, !0, 1)
            }
        }
    };
    zi = function(a, b) {
        b = b === void 0 ? [] : b;
        var c = Date.now();
        return _.yi(b, function(d) {
            return c - d < a * 1E3
        })
    };
    Ai = function(a, b, c) {
        try {
            var d = a.getItem(c);
            if (!d) return [];
            try {
                var e = JSON.parse(d)
            } catch (f) {}
            if (!Array.isArray(e) || _.wg(e, function(f) {
                    return !_.x(Number, "isInteger").call(Number, f)
                })) return a.removeItem(c), [];
            e = zi(b, e);
            e.length || a == null || a.removeItem(c);
            return e
        } catch (f) {
            return null
        }
    };
    _.Ci = function(a, b, c) {
        return b <= 0 || a == null || !Bi(a) ? null : Ai(a, b, c)
    };
    Li = function(a) {
        var b = _.Di(new _.Ei, a.bb);
        b = Fi(b, 4, _.Gi, Ic(a.un));
        b = _.Hi(b, 11, a.Ba);
        b = _.Ii(b, 8, a.pvsid);
        b = _.Ii(b, 7, a.wg);
        b = _.Hi(b, 9, a.Tb);
        var c = _.Ji(b, _.Ki, 5);
        _.oe(c, 1, _.wc, a.mb);
        return b
    };
    _.Mi = function(a) {
        var b = _.Di(new _.Ei, a.bb);
        b = Fi(b, 3, _.Gi, xc(a.T));
        b = _.Hi(b, 11, a.Ba);
        b = _.Ii(b, 8, a.pvsid);
        b = _.Ii(b, 7, a.wg);
        b = _.Hi(b, 9, a.Tb);
        var c = _.Ji(b, _.Ki, 5);
        _.oe(c, 1, _.wc, a.mb);
        return b
    };
    Oi = function(a, b) {
        return _.Ni(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.has(c)
        }, !0) !== null
    };
    Pi = function(a, b) {
        return _.Ni(a, function(c) {
            return c.nodeType === Node.ELEMENT_NODE && b.getComputedStyle(c, null).position === "fixed"
        }, !0)
    };
    Qi = function(a) {
        for (var b = [], c = _.A(a.document.querySelectorAll("*")), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a.getComputedStyle(d, null);
            e.position === "fixed" && e.display !== "none" && e.visibility !== "hidden" && b.push(d)
        }
        return b
    };
    Ri = function(a, b) {
        b = b.getBoundingClientRect();
        var c = b.left,
            d = b.bottom,
            e = b.right;
        return b.top >= 0 && c >= 0 && d <= a.innerHeight && e <= a.innerWidth
    };
    Si = function(a) {
        return Math.round(Math.round(a / 10) * 10)
    };
    Ti = function(a) {
        return a.position + "-" + Si(a.oa) + "x" + Si(a.ra) + "-" + Si(a.scrollY + a.Rd) + "Y"
    };
    Ui = function(a) {
        return "f-" + Ti({
            position: a.position,
            Rd: a.Rd,
            scrollY: 0,
            oa: a.oa,
            ra: a.ra
        })
    };
    Vi = function(a, b) {
        a = Math.min(a != null ? a : Infinity, b != null ? b : Infinity);
        return a !== Infinity ? a : 0
    };
    Xi = function(a, b, c) {
        var d = _.Wi(c.qa).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.min(e.bottom + 10, c.ra),
                    h = Math.max(e.left - 10, 0),
                    k = Math.min(e.right + 10, c.oa),
                    l = c.oa * .3;
                for (e = Math.max(e.top - 10, 0); e <= f; e += 10) {
                    if (k > 0 && h < l) {
                        var m = Ui({
                            position: "left",
                            Rd: e,
                            oa: c.oa,
                            ra: c.ra
                        });
                        b.set(m, Vi(b.get(m), h))
                    }
                    if (h < c.oa && k > c.oa - l) {
                        m = Ui({
                            position: "right",
                            Rd: e,
                            oa: c.oa,
                            ra: c.ra
                        });
                        var n = c.oa - k;
                        b.set(m, Vi(b.get(m), n))
                    }
                }
                d.add(a)
            }
        }
    };
    $i = function(a, b) {
        var c = b.qa,
            d = b.fd,
            e = b.ld,
            f = "f-" + Si(b.oa) + "x" + Si(b.ra);
        a.has(f) || (a.set(f, 0), f = Qi(c), d || e ? (Yi(a, b, f.filter(function(h) {
            return Ri(c, h)
        })), Zi(c, f.filter(function(h) {
            return !Ri(c, h)
        }).concat(e ? _.x(Array, "from").call(Array, c.document.querySelectorAll("[google-side-rail-overlap=false]")) : []))) : Yi(a, b, f))
    };
    Yi = function(a, b, c) {
        var d = b.Uc,
            e = b.qa;
        _.Wi(e).sideRailProcessedFixedElements.clear();
        d = new _.B.Set([].concat(_.aj(_.x(Array, "from").call(Array, e.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]"))), _.aj(d)));
        c = _.A(c);
        for (e = c.next(); !e.done; e = c.next()) e = e.value, Oi(e, d) || Xi(e, a, b)
    };
    cj = function(a) {
        if (a.oa < 1200 || a.ra < 650) return null;
        var b = _.Wi(a.qa).sideRailAvailableSpace;
        a.Vj || $i(b, {
            qa: a.qa,
            oa: a.oa,
            ra: a.ra,
            Uc: a.Uc,
            fd: a.fd,
            ld: a.ld
        });
        for (var c = [], d = a.ra * .9, e = _.pi(a.qa), f = (a.ra - d) / 2, h = f, k = d / 7, l = 0; l < 8; l++) {
            var m = c,
                n = m.push;
            var p = h;
            var q = a.position,
                t = b,
                w = {
                    qa: a.qa,
                    oa: a.oa,
                    ra: a.ra,
                    Uc: a.Uc,
                    Od: a.Od
                },
                v = Ui({
                    position: q,
                    Rd: p,
                    oa: w.oa,
                    ra: w.ra
                }),
                y = Ti({
                    position: q,
                    Rd: p,
                    scrollY: e,
                    oa: w.oa,
                    ra: w.ra
                });
            if (!t.has(y)) {
                var z = q === "left" ? 20 : w.oa - 20,
                    G = z;
                q = w.oa * .3 / 5 * (q === "left" ? 1 : -1);
                for (var C = 0; C < 6; C++) {
                    var H = si(w.qa.document, {
                            x: Math.round(G),
                            y: Math.round(p)
                        }),
                        L = Oi(H, w.Uc),
                        S = Pi(H, w.qa);
                    if (!L && S !== null) {
                        Xi(S, t, w);
                        t.delete(y);
                        break
                    }
                    L || (L = w, H.getAttribute("google-side-rail-overlap") === "true" ? L = !0 : H.getAttribute("google-side-rail-overlap") === "false" || L.Od && !_.x(bj, "includes").call(bj, H.tagName.toLowerCase()) ? L = !1 : (S = H.offsetHeight >= L.ra * .25, L = H.offsetWidth >= L.oa * .9 && S));
                    if (L) t.set(y, Math.round(Math.abs(G - z) + 20));
                    else if (G !== z) G -= q, q /= 2;
                    else {
                        t.set(y, 0);
                        break
                    }
                    G += q
                }
            }
            p = Vi(t.get(v), t.get(y));
            n.call(m, p);
            h += k
        }
        b = a.Lk;
        e = a.position;
        d = Math.round(d / 8);
        f = Math.round(f);
        h = a.minWidth;
        a = a.minHeight;
        m = [];
        k = _.x(Array(c.length), "fill").call(Array(c.length), 0);
        for (l = 0; l < c.length; l++) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[l];) m.pop();
            k[l] = m.length === 0 ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        n = c.length - 1;
        l = _.x(Array(c.length), "fill").call(Array(c.length), 0);
        for (p = n; p >= 0; p--) {
            for (; m.length !== 0 && c[m[m.length - 1]] >= c[p];) m.pop();
            l[p] = m.length === 0 ? n : m[m.length - 1] - 1;
            m.push(p)
        }
        m = null;
        for (n = 0; n < c.length; n++)
            if (p = {
                    position: e,
                    width: Math.round(c[n]),
                    height: Math.round((l[n] - k[n] + 1) * d),
                    offsetY: f + k[n] * d
                }, t = p.width >= h && p.height >= a, b === 0 && t) {
                m = p;
                break
            } else b === 1 && t && (!m || p.width * p.height > m.width * m.height) && (m = p);
        return m
    };
    Zi = function(a, b) {
        var c = _.Wi(a);
        if (b.length && !c.g) {
            var d = new MutationObserver(function() {
                setTimeout(function() {
                    dj(a);
                    for (var f = _.A(c.o), h = f.next(); !h.done; h = f.next()) h = h.value, h()
                }, 500)
            });
            b = _.A(b);
            for (var e = b.next(); !e.done; e = b.next()) d.observe(e.value, {
                attributes: !0
            });
            c.g = d
        }
    };
    dj = function(a) {
        a = _.Wi(a).sideRailAvailableSpace;
        var b = _.x(Array, "from").call(Array, _.x(a, "keys").call(a)).filter(function(d) {
            return _.x(d, "startsWith").call(d, "f-")
        });
        b = _.A(b);
        for (var c = b.next(); !c.done; c = b.next()) a.delete(c.value)
    };
    _.ej = function(a) {
        if (a.la) return a.la.Sb(1228, function() {
            return cj(a)
        }) || null;
        try {
            return cj(a)
        } catch (b) {}
        return null
    };
    ij = function(a, b) {
        b = b === void 0 ? {} : b;
        var c = {};
        c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c);
        cb(c, b);
        fj(a, c)
    };
    Cj = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = d === -1 ? Infinity : d;
        e = e === -1 ? Infinity : e;
        for (var h = 0; h < Math.min(b.length, d); ++h) {
            var k = null;
            try {
                var l = b[h],
                    m = null;
                try {
                    m = l.cssRules || l.rules
                } catch (H) {
                    if (H.code == 15) throw H.styleSheet = l, H;
                }
                k = m
            } catch (H) {
                continue
            }
            m = void 0;
            if ((m = k) != null && m.length)
                for (m = 0; m < Math.min(k.length, e); ++m) try {
                    var n = k[m],
                        p, q = n,
                        t = c;
                    if (!(p = f.call(a, q.selectorText) && t(q))) a: {
                        var w = void 0;q = a;t = f;
                        var v = c,
                            y = e,
                            z = (w = n.cssRules) != null ? w : [];
                        for (w = 0; w < Math.min(z.length, y); w++) {
                            var G = z[w],
                                C = v;
                            if (t.call(q, G.selectorText) && C(G)) {
                                p = !0;
                                break a
                            }
                        }
                        p = !1
                    }
                    if (p) return !0
                } catch (H) {}
        }
        return !1
    };
    Fj = function(a, b, c, d) {
        var e = a.style;
        return (e == null ? 0 : e.height) && !_.x(Dj, "includes").call(Dj, e.height) || (e == null ? 0 : e.maxHeight) && !_.x(Ej, "includes").call(Ej, e.maxHeight) || Cj(a, b.document, function(f) {
            var h = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!h && !_.x(Dj, "includes").call(Dj, h) || !!f && !_.x(Ej, "includes").call(Ej, f)
        }, c, d) ? !1 : !0
    };
    Hj = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        Gj(a, function(e) {
            return d = Fj(e, b, 10, 10)
        }, c);
        return d
    };
    Ij = function(a) {
        return typeof a === "number" || typeof a === "string"
    };
    Lj = function(a) {
        a = Jj(a);
        return _.Kj(a)
    };
    Jj = function(a) {
        return a === null ? "null" : a === void 0 ? "undefined" : a
    };
    Oj = function(a, b) {
        a = Mj.fn(a);
        return (b = Nj(b)) ? _.lf(a, new _.B.Map([
            ["n", String(b)]
        ])) : a
    };
    Rj = function(a, b, c, d) {
        c = c === void 0 ? null : c;
        d = d === void 0 ? {} : d;
        var e = Pj.g();
        e.g === 0 && (e.g = Math.random() < .001 ? 2 : 1);
        e.g === 2 && (e = {}, Sf(_.x(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(Qj(window)), e.em = c, e.lid = b, e.eids = ih().join(), e), d), "esp"))
    };
    Sj = function() {
        var a = window;
        var b = b === void 0 ? function() {} : b;
        return new _.B.Promise(function(c) {
            var d = function() {
                c(b());
                _.Of(a, "load", d)
            };
            _.tf(a, "load", d)
        })
    };
    Tj = function(a) {
        var b = [],
            c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {}
        return b
    };
    Zj = function(a, b) {
        return _.Uj(a, Vj, 2, _.Wj()).some(function(c) {
            return Xj(c, 1) === b && _.Yj(c, 2)
        })
    };
    hk = function(a, b, c, d) {
        if (b)
            for (var e = _.A(Tj(b)), f = e.next(), h = {}; !f.done; h = {
                    ed: void 0
                }, f = e.next())
                if (h.ed = f.value, (f = ak().get(h.ed, b).xd) && !bk(a, h.ed)) {
                    var k = ck(f);
                    if (k !== 2 && k !== 3) {
                        k = !1;
                        if (c) {
                            var l = /^(\d+)$/.exec(h.ed);
                            if (l && !(k = _.x(c.split(","), "includes").call(c.split(","), l[1]))) continue;
                            if (!k && !c.split(",").some(function(n) {
                                    return function(p) {
                                        var q;
                                        return d == null ? void 0 : (q = d.get(p)) == null ? void 0 : q.has(n.ed)
                                    }
                                }(h))) continue
                        }
                        _.dk(f, 9, k);
                        (k = Xj(f, 2)) && k.length > 1024 && (l = {}, Rj(55, h.ed, null, (l.sl = String(k.length), l)), _.ek(f.wb(fk(108)), 2));
                        gk(a, 2, Vj, f);
                        f = Xj(f, 2);
                        l = k = void 0;
                        var m = {};
                        Rj(19, h.ed, null, (m.hs = f ? "1" : "0", m.sl = String((l = (k = f) == null ? void 0 : k.length) != null ? l : -1), m))
                    }
                }
    };
    bk = function(a, b) {
        return _.Uj(a, Vj, 2, _.Wj()).some(function(c) {
            return Xj(c, 1) === b && _.Yj(c, 2)
        })
    };
    ik = function(a) {
        return typeof a === "string" ? a : a instanceof Error ? a.message : null
    };
    vk = function(a, b, c, d, e) {
        var f, h, k, l, m, n, p, q, t, w, v, y, z;
        return _.vf(function(G) {
            return G.g == 1 ? (f = new jk, h = new kk(a, c, e), J(f, h), J(f, new lk(h.A, void 0, d, e)), k = new mk(h.j, e), J(f, k), l = new nk(k.j, e), J(f, l), m = new ok(b, l.j, e), J(f, m), J(f, new lk(m.A, void 0, d, e)), n = new sk(m.j, m.F, 1024, e), J(f, n), J(f, new lk(n.j, void 0, d, e)), p = new tk(e), J(f, p), q = new uk(p.output, l.A, e), J(f, q), t = new ok(b, q.j, e), J(f, t), w = new lk(t.j, void 0, d, e), J(f, w), f.run(), z = a, G.yield(n.j.promise, 2)) : G.return({
                id: z,
                collectorGeneratedData: (y = (v = G.o) == null ? void 0 : Xj(v, 2)) != null ? y : null
            })
        })
    };
    Ek = function(a, b, c, d) {
        var e = {
            qf: Eh(wk),
            yg: _.yh(xk),
            vf: Eh(yk)
        };
        e = e === void 0 ? zk : e;
        Ak() !== Bk(window) ? Rj(16, "") : Ck(a, "encryptedSignalProviders", c) && Ck(a, "secureSignalProviders", c) || (Rj(38, ""), Dk(a, "encryptedSignalProviders", b, e, c, d), Dk(a, "secureSignalProviders", b, e, c, function() {}))
    };
    Ck = function(a, b, c) {
        if (a[b] === void 0 || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    Dk = function(a, b, c, d, e, f) {
        var h, k = new Fk((h = a[b]) != null ? h : [], c, b === "secureSignalProviders", f, d);
        a[b] = new Gk(k);
        k.addErrorHandler(e)
    };
    Jk = function(a, b) {
        var c = new jk,
            d = new tk(b);
        a = new Hk(d.output, a, b);
        Ik(c, [d, a]);
        c.run()
    };
    Nk = function(a, b, c, d, e) {
        var f = b.toString();
        if (Kk.has(f)) return null;
        Kk.add(f);
        f = new jk;
        a = new kk(a, c, e);
        var h = new lk(a.A, c, d, e),
            k = new Lk(a.j, e),
            l = new mk(k.j, e);
        b = new Mk(l.j, b, e);
        c = new lk(b.j, c, d, e);
        Ik(f, [a, h, k, l, b, c]);
        f.run();
        return f
    };
    Pk = function(a, b, c) {
        c = c === void 0 ? Ok : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), a.document.readyState === "complete" ? c(a, b) : _.tf(a, "load", function() {
            return void c(a, b)
        }))
    };
    Qk = function(a) {
        try {
            var b, c;
            return ((c = (b = a.top) == null ? void 0 : b.frames) != null ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Rk = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Tk = function(a) {
        if (a === a.top || _.Sk(a.top)) return _.B.Promise.resolve({
            status: 4
        });
        var b = Qk(a);
        if (!b) return _.B.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Rk(a.document.referrer)) return _.B.Promise.resolve({
            status: 3
        });
        var c = new _.Oh;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            d.data.msgType === "__goog_top_url_resp" && c.resolve({
                Zb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    Xk = function(a, b) {
        var c = Uk(a);
        return c.messageChannelSendRequestFn ? _.B.Promise.resolve(c.messageChannelSendRequestFn) : new _.B.Promise(function(d) {
            function e(l) {
                return k.g(l).then(function(m) {
                    return m.data
                })
            }
            var f = _.Nf("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            b && (f.credentialless = !0);
            f.src = _.gb(Vk).toString();
            var h = (new URL(Vk.toString())).origin,
                k = Wk({
                    destination: a,
                    tb: f,
                    origin: h,
                    Ob: "goog:gRpYw:doubleclick"
                });
            k.g("goog:topics:frame:handshake:ack").then(function(l) {
                l.data === "goog:topics:frame:handshake:ack" && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    dl = function(a, b, c, d) {
        var e = {
            skipTopicsObservation: _.I(Yk)
        };
        e = e === void 0 ? {} : e;
        var f = Zk(d),
            h = f.nf,
            k = f.mf;
        b = Uk(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation
        }).then(function(l) {
            var m = k;
            if (l instanceof Uint8Array) m || (m = !(h instanceof Uint8Array && Va(l, h)));
            else if (Bg()(l)) m || (m = l !== h);
            else return c.Qb(989, Error(JSON.stringify(l))), 7;
            if (m && d) try {
                var n = new $k,
                    p = _.Jf();
                var q = _.al(n, 2, p);
                l instanceof Uint8Array ? Fi(q, 1, bl, Zb(l, !1, !1)) : Fi(q, 3, bl, xc(l));
                d.setItem("goog:cached:topics", cl(q))
            } catch (t) {}
            return l
        }), b.getTopicsPromise = a);
        return h && !k ? _.B.Promise.resolve(h) : b.getTopicsPromise
    };
    Zk = function(a) {
        if (!a) return {
            nf: null,
            mf: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                nf: null,
                mf: !0
            };
            var c = el(b),
                d = fl(c, bl);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    e = gl(hl(c, il(c, bl, 1)));
                    break;
                case 3:
                    e = _.Uf(c, il(c, bl, 3), 0);
                    break;
                default:
                    eb(d)
            }
            var f = _.ig(c, 2) + 6048E5 < _.Jf();
            return {
                nf: e,
                mf: f
            }
        } catch (h) {
            return {
                nf: null,
                mf: !0
            }
        }
    };
    Uk = function(a) {
        var b;
        return (b = a.google_tag_topics_state) != null ? b : a.google_tag_topics_state = {}
    };
    kl = function(a) {
        var b = "";
        jl(function(c) {
            if (c === c.top) return !0;
            var d;
            if ((d = c.document) == null ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    ll = function() {
        var a = Date.now();
        return _.x(Number, "isFinite").call(Number, a) ? Math.round(a) : 0
    };
    pl = function(a, b) {
        var c = new ml;
        var d = ll();
        c = _.Ii(c, 1, d);
        c = _.Ii(c, 2, a.pvsid);
        c = _.Hi(c, 3, a.La);
        d = ih();
        c = _.le(c, 4, d, zc);
        b = _.Ii(c, 5, b);
        a = _.Hi(b, 12, a.Ba);
        var e;
        if (b = (e = _.B.globalThis.performance) == null ? void 0 : e.memory) {
            e = new nl;
            try {
                _.Ii(e, 1, b.jsHeapSizeLimit)
            } catch (f) {}
            try {
                _.Ii(e, 2, b.totalJSHeapSize)
            } catch (f) {}
            try {
                _.Ii(e, 3, b.usedJSHeapSize)
            } catch (f) {}
        } else e = void 0;
        e && _.ol(a, 10, e);
        return a
    };
    ql = function(a) {
        return {
            jd: 1E3,
            ud: a.Gb < .001,
            dk: 1E4,
            Pk: a.Gb < 1E-4
        }
    };
    xl = function(a) {
        var b = _.Mf(),
            c = ql(a),
            d = c.ud,
            e = c.jd,
            f = c.Pk,
            h = c.dk;
        if (d) {
            c = a.va;
            var k = c.td,
                l = pl(a, e),
                m = new rl;
            b = _.Ii(m, 2, b);
            m = new sl;
            d = _.tl(m, 1, d);
            e = _.ul(d, 2, e);
            f = _.tl(e, 3, f);
            f = _.ul(f, 4, h);
            f = _.tl(f, 5, a.gi);
            a = _.ul(f, 6, a.Tg);
            a = _.ol(b, 3, a);
            l = _.vl(l, 6, wl, a);
            k.call(c, l)
        }
    };
    Al = function(a) {
        var b = ql(a),
            c = b.jd;
        if (!b.ud) return function() {};
        var d = ll();
        a.va.td(yl(pl(a, c)));
        return function() {
            var e = a.va,
                f = e.td,
                h = pl(a, c);
            var k = new zl;
            var l = ll() - d;
            k = _.Ii(k, 1, l);
            h = _.vl(h, 14, wl, k);
            return void f.call(e, h)
        }
    };
    Bl = function(a) {
        var b = a.split("/");
        return a.charAt(0) === "/" && b.length >= 2 ? b[1] : a.charAt(0) !== "/" && b.length >= 1 ? b[0] : ""
    };
    N = function(a, b, c) {
        var d = d === void 0 ? !1 : d;
        return function() {
            var e = _.xa.apply(0, arguments),
                f = Cl(a, b, c, d).apply(this, e);
            try {
                var h = e.length,
                    k = ql(a),
                    l = k.Pk,
                    m = k.dk;
                if (k.ud && l) {
                    var n = a.va,
                        p = n.td,
                        q = pl(a, k.jd);
                    var t = _.Ii(q, 5, m);
                    var w = new Dl;
                    var v = _.K(w, 1, b);
                    var y = _.ul(v, 2, h);
                    var z = _.vl(t, 9, wl, y);
                    p.call(n, z)
                }
            } catch (G) {}
            return f
        }
    };
    Cl = function(a, b, c, d) {
        d = d === void 0 ? !1 : d;
        return function() {
            var e = _.xa.apply(0, arguments),
                f = void 0,
                h = !1,
                k = null,
                l = _.fh(El);
            try {
                var m = _.I(Fl);
                m && l && (k = l.start(b.toString(), 3));
                f = c.apply(this, e);
                h = !0;
                m && l && l.end(k)
            } catch (n) {
                try {
                    if (h) Gl.call(this, a, 110, n);
                    else if (Gl.call(this, a, b, n), !d) throw n;
                } catch (p) {
                    if (_.Hl(k), !h && !d) throw n;
                }
            }
            return f
        }
    };
    Il = function(a, b, c, d) {
        return Cl(a, b, c, d === void 0 ? !1 : d)()
    };
    Gl = function(a, b, c) {
        if (a.gi) {
            c = _.Jl(c) ? c.error : c;
            var d = new Kl,
                e = new Ll;
            try {
                var f = Qj(window);
                _.Ii(e, 1, f)
            } catch (q) {}
            try {
                var h = ih();
                _.le(e, 2, h, zc)
            } catch (q) {}
            try {
                _.Hi(e, 3, window.document.URL)
            } catch (q) {}
            f = _.ol(d, 2, e);
            h = new Ml;
            b = _.K(h, 1, b);
            try {
                var k = Kg(c == null ? void 0 : c.name) ? c.name : "Unknown error";
                _.Hi(b, 2, k)
            } catch (q) {}
            try {
                var l = Kg(c == null ? void 0 : c.message) ? c.message : "Caught " + c;
                _.Hi(b, 3, l)
            } catch (q) {}
            try {
                var m = Kg(c == null ? void 0 : c.stack) ? c.stack : Error().stack;
                m && _.le(b, 4, m.split(/\n\s*/), _.Vc)
            } catch (q) {}
            k = _.ol(f, 1, b);
            l = new Nl;
            try {
                _.Hi(l, 1, a.La)
            } catch (q) {}
            try {
                var n = Ol();
                _.ul(l, 2, n)
            } catch (q) {}
            try {
                var p = [].concat(_.aj(_.x(Pl, "keys").call(Pl)));
                _.le(l, 3, p, _.Vc)
            } catch (q) {}
            _.vl(k, 4, Ql, l);
            _.Ii(k, 5, a.Tg);
            a.va.bo(k)
        }
    };
    Tl = function(a, b) {
        var c = Rl.get(a);
        c || (b = c = b(), Sl.set(b, a), Rl.set(a, b));
        return c
    };
    O = function(a) {
        return function() {
            return new Ul(a, [].concat(_.aj(_.xa.apply(0, arguments))))
        }
    };
    Vl = function(a) {
        return "[" + a.map(function(b) {
            return typeof b === "string" ? "'" + b + "'" : Array.isArray(b) ? Vl(b) : String(b)
        }).join(", ") + "]"
    };
    Wl = function(a, b) {
        b = Vl(b);
        b = b.substring(1, b.length - 1);
        return new Ul(96, [a, b])
    };
    Xl = function(a) {
        return (_.F = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable gameManualInterstitialSlotReady gameManualInterstitialSlotClosed".split(" "), _.x(_.F, "includes")).call(_.F, a) ? a : null
    };
    Zl = function(a, b, c) {
        return Tl(c, function() {
            return new Yl(a, b, c)
        })
    };
    am = function(a, b, c) {
        return Tl(c, function() {
            return new $l(a, b, c)
        })
    };
    bm = function(a, b, c, d) {
        typeof a === "string" ? b.setClickUrl(a) : P(d, Wl("Slot.setClickUrl", [a]), c)
    };
    im = function(a, b, c, d, e) {
        if (typeof a !== "string" || cm(a)) P(e, Wl("Slot.setTargeting", [a, b]), c);
        else {
            var f = [];
            Array.isArray(b) ? f = b : _.Ta(b) ? f = _.x(Array, "from").call(Array, b) : b && (f = [b]);
            f = f.map(String);
            (b = (_.F = dm(d), _.x(_.F, "find")).call(_.F, function(h) {
                return Xj(h, 1) === a
            })) ? em(b, f): (b = em(fm(new gm, a), f), gk(d, 9, gm, b));
            e.info(hm(a, f.join(), d.getAdUnitPath()), c)
        }
    };
    jm = function(a, b, c, d) {
        if (a != null && typeof a === "object")
            for (var e = _.A(_.x(Object, "keys").call(Object, a)), f = e.next(); !f.done; f = e.next()) f = f.value, im(f, a[f], b, c, d);
        else d.error(Wl("Slot.updateTargetingFromMap", [a]), b)
    };
    lm = function(a, b, c, d) {
        return typeof a !== "string" ? (P(d, Wl("Slot.getTargeting", [a]), b), []) : (b = (_.F = dm(c), _.x(_.F, "find")).call(_.F, function(e) {
            return Xj(e, 1) === a
        })) ? km(b).slice() : []
    };
    mm = function(a) {
        return dm(a).map(function(b) {
            return _.u(b, 1)
        })
    };
    sm = function(a, b, c, d) {
        if (a === void 0) _.ek(c, 9), d.info(nm(b.getAdUnitPath()), b);
        else if (typeof a !== "string" || cm(a)) P(d, Wl("Slot.clearTargeting", [a]), b);
        else {
            var e = dm(c, _.om),
                f = _.x(e, "findIndex").call(e, function(h) {
                    return Xj(h, 1) === a
                });
            f < 0 ? P(d, pm(a, b.getAdUnitPath()), b) : (e.splice(f, 1), _.qm(c, 9, e), d.info(rm(a, b.getAdUnitPath()), b))
        }
    };
    _.vm = function(a) {
        _.fh(tm).g = !0;
        return um[a]
    };
    zm = function(a, b, c) {
        var d, e;
        return (e = (d = _.x(a, "find").call(a, function(f) {
            f = _.wm(f, xm, 1);
            return ym(f, 1) <= b && ym(f, 2) <= c
        })) == null ? void 0 : _.Uj(d, xm, 2, _.Wj(_.om))) != null ? e : null
    };
    Bm = function(a, b, c) {
        var d;
        typeof b === "number" && typeof c === "number" && _.Uj(a, Am, 6, _.Wj()).length ? d = zm(_.Uj(a, Am, 6, _.Wj()), b, c) : d = _.Uj(a, xm, 5, _.Wj(_.om));
        return d
    };
    Dm = function(a) {
        var b = b === void 0 ? window : b;
        var c = null;
        b.top === b && (b = Cm(!1, b), c = Bm(a, b.width, b.height));
        c != null || (c = Bm(a));
        return c == null ? [] : c.map(function(d) {
            return _.Q(d, 3) ? "fluid" : [ym(d, 1), ym(d, 2)]
        })
    };
    Em = function(a) {
        var b = [],
            c = !1;
        a = _.A(Dm(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : d === "fluid" ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Fm = function(a) {
        return a !== 0 && a !== 1
    };
    Gm = function(a) {
        return Fm(a) && !(_.F = [8, 9], _.x(_.F, "includes")).call(_.F, a)
    };
    Hm = function(a) {
        var b = a.document;
        return Og(a) ? b.URL : b.referrer
    };
    Km = function(a) {
        try {
            return Im(a, window.top)
        } catch (b) {
            return new _.Jm(-12245933, -12245933)
        }
    };
    Om = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Lm(Mm, a), a = new _.Nm(a.right - a.left, a.bottom - a.top)) : a = null;
        return (c = (b = a) == null ? void 0 : b.floor()) != null ? c : null
    };
    _.Rm = function(a, b, c) {
        for (var d = {}, e = _.x(Object, "keys").call(Object, b), f = _.A(e), h = f.next(); !h.done; h = f.next()) {
            h = h.value;
            var k = _.Kd(b[h]),
                l = _.fh(Pm),
                m = l.g.get(h);
            m == null ? m = ++_.fh(El).o : l.g.delete(h);
            _.ek(k, 20, _.Cc(m));
            d[h] = k
        }
        a = {
            X: _.Kd(a),
            W: d
        };
        b = _.Qm();
        d = {};
        e = _.A(e);
        for (f = e.next(); !f.done; f = e.next()) f = f.value, k = h = void 0, d[f] = _.x(Array, "from").call(Array, (k = (h = b.o[f]) == null ? void 0 : _.x(h, "values").call(h)) != null ? k : []);
        a.Dd = d;
        a.qc = c;
        return a
    };
    Tm = function() {
        for (var a = "", b = _.A(Sm()), c = b.next(); !c.done; c = b.next()) c = c.value, c <= 15 && (a += "0"), a += c.toString(16);
        return a
    };
    Sm = function() {
        var a;
        if (typeof((a = window.crypto) == null ? void 0 : a.getRandomValues) === "function") return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if (typeof((b = a.msCrypto) == null ? void 0 : b.getRandomValues) === "function") return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(Math.random() * 255);
        return a
    };
    $m = function(a, b, c, d) {
        var e = Um(b, a) || Vm(b, a);
        if (!e) return null;
        var f = Km(e),
            h = e === Vm(b, a),
            k = Wm(function() {
                var q = h ? Vm(b, a) : e;
                return q && Xm(q, window)
            }),
            l = function(q) {
                var t;
                return (t = k()) == null ? void 0 : t.getPropertyValue(q)
            };
        c = Dm(c)[0];
        var m = !1;
        Array.isArray(c) && (m = d ? h : f.x === 0 && l("text-align") === "center");
        m && (f.x += Math.round(Math.max(0, (h ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (h) {
            var n;
            f.y += Math.round(Math.min((n = Ym(l("padding-top"))) != null ? n : 0, e.clientHeight));
            if (!m) {
                d = e.clientWidth;
                var p;
                f.x += Math.round(Math.min((p = Ym(l("padding-left"))) != null ? p : 0, d))
            }
        }
        return f && Zm(e) ? f : new _.Jm(-12245933, -12245933)
    };
    an = function(a, b, c, d) {
        var e = Vm(a, c),
            f = (e == null ? void 0 : e.style.display) === "none";
        f && (e.style.display = "block");
        a = $m(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    bn = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    nn = function(a) {
        return bn(a) + "__container__"
    };
    Um = function(a, b) {
        var c;
        return ((c = Vm(a, b)) == null ? void 0 : c.querySelector('[id="' + nn(a) + '"]')) || null
    };
    qn = function(a, b) {
        var c, d;
        return (d = (c = Um(a, b)) == null ? void 0 : c.querySelector('iframe[id="' + bn(a) + '"]')) != null ? d : null
    };
    Vm = function(a, b) {
        b = b === void 0 ? document : b;
        return _.Qm().l.get(a) || b.getElementById(a.getDomId())
    };
    sn = function(a, b, c) {
        return Tl(c, function() {
            return new rn(a, b, c, c.g)
        })
    };
    tn = function(a) {
        return _.x(Object, "assign").call(Object, {}, a, _.x(Object, "fromEntries").call(Object, _.x(Object, "entries").call(Object, a).map(function(b) {
            var c = _.A(b);
            b = c.next().value;
            return [c.next().value, b]
        })))
    };
    xn = function() {
        var a = {},
            b = tn(un);
        a.OutOfPageFormat = b;
        b = tn(vn);
        a.TrafficSource = b;
        b = tn(wn);
        a.Taxonomy = b;
        return a
    };
    yn = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a.tag_origin = "to", a
    };
    Bn = function(a, b, c, d, e) {
        if (typeof a === "string" && a.length && yn()[a] !== void 0 && typeof b === "string") {
            var f = (_.F = c.Va(), _.x(_.F, "find")).call(_.F, function(h) {
                return Xj(h, 1) === a
            });
            f ? em(f, [b]) : (f = zn(fm(new gm, a), b), gk(c, 14, gm, f));
            e.info(An(a, String(b), d))
        } else P(e, Wl("PubAdsService.set", [a, b]))
    };
    Cn = function(a, b, c) {
        return typeof a !== "string" ? (P(c, Wl("PubAdsService.get", [a])), null) : (b = (b = (_.F = b.Va(), _.x(_.F, "find")).call(_.F, function(d) {
            return Xj(d, 1) === a
        })) && km(b)) ? b[0] : null
    };
    Dn = function(a) {
        return a.Va().map(function(b) {
            return _.u(b, 1)
        })
    };
    Fn = function() {
        for (var a = Dh(En) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    Jn = function() {
        if (Gn) return Gn;
        for (var a = Eh(Hn), b = [], c = 0; c < a.length; c += 2) _.In(a[c], a[c + 1], b);
        return Gn = b.join("&")
    };
    Kn = function(a) {
        for (var b = Eh(Hn), c = new _.B.Map, d = 0; d < b.length; d += 2) c.set(b[d], b[d + 1]);
        return _.lf(a, c)
    };
    Pn = function(a, b) {
        if (!b || !_.La(b)) return null;
        var c = !1,
            d = new Ln;
        _.Mn(b, function(e, f) {
            var h = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    typeof e === "boolean" ? _.dk(d, 1, b.allowOverlayExpansion) : c = h = !0;
                    break;
                case "allowPushExpansion":
                    typeof e === "boolean" ? _.dk(d, 2, b.allowPushExpansion) : c = h = !0;
                    break;
                case "sandbox":
                    e === !0 ? _.dk(d, 3, b.sandbox) : c = h = !0;
                    break;
                default:
                    h = !0
            }
            h && a.error(Nn("setSafeFrameConfig", On(b), f, On(e)))
        });
        return c ? null : d
    };
    Rn = function(a) {
        var b = new Ln;
        a = _.A(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) {
                if (Qn(c, 1)) {
                    var d = b,
                        e = _.Q(c, 1);
                    _.dk(d, 1, e)
                }
                Qn(c, 2) && (d = b, e = _.Q(c, 2), _.dk(d, 2, e));
                Qn(c, 3) && (d = b, c = _.Q(c, 3), _.dk(d, 3, c))
            }
        return b
    };
    Sn = function(a, b) {
        var c = {};
        b = (c[0] = qh(b.pvsid), c);
        return _.fh(gh).o(a, b)
    };
    Un = function(a, b) {
        var c;
        return (c = _.Tn(a, "__gads", b)) == null ? void 0 : _.x(c.split(":"), "find").call(c.split(":"), function(d) {
            return d.indexOf("ID=") === 0
        })
    };
    Vn = function(a, b, c, d) {
        (c = Un(c, d)) ? (d = {}, b = (d[0] = qh(b.pvsid), d[1] = qh(c), d), _.fh(gh).o(a, b)) : Sn(a, b)
    };
    Zn = function(a) {
        var b = a.key;
        var c = a.value;
        var d = a.Ja;
        var e = a.serviceName;
        var f = a.ko;
        var h = a.Jb;
        var k = a.P;
        a = a.context;
        var l = null;
        typeof c === "string" ? l = [c] : Array.isArray(c) ? l = c : _.Ta(c) && (l = _.x(Array, "from").call(Array, c));
        l = l && Xa(l);
        var m, n = (m = l == null ? void 0 : l.every(function(p) {
            return typeof p === "string"
        })) != null ? m : !1;
        if (typeof b === "string" && !cm(b) && n) {
            c = l;
            m = (_.F = _.Uj(d, gm, 2, _.Wj()), _.x(_.F, "find")).call(_.F, function(p) {
                return Xj(p, 1) === b
            });
            if (b === "gpt-beta") {
                if (f) {
                    P(k, Wn(c.join()));
                    return
                }
                if (m) {
                    P(k, Xn(c.join()));
                    return
                }
                c = Yn(c, h, a)
            }
            m ? em(m, c) : (f = em(fm(new gm, b), c), gk(d, 2, gm, f));
            k.info(hm(b, c.join(), e))
        } else P(k, Wl("PubAdsService.setTargeting", [b, c]))
    };
    $n = function(a, b, c) {
        return typeof a !== "string" ? (P(c, Wl("PubAdsService.getTargeting", [a])), []) : (b = (_.F = _.Uj(b, gm, 2, _.Wj()), _.x(_.F, "find")).call(_.F, function(d) {
            return Xj(d, 1) === a
        })) ? km(b).slice() : []
    };
    ao = function(a) {
        return _.Uj(a, gm, 2, _.Wj()).map(function(b) {
            return _.u(b, 1)
        })
    };
    fo = function(a, b, c, d) {
        if (a === void 0) _.ek(b, 2), d.info(bo(c));
        else if (typeof a !== "string" || cm(a)) P(d, Wl("PubAdsService.clearTargeting", [a]));
        else if (a === "gpt-beta") P(d, co(a));
        else {
            var e = _.Uj(b, gm, 2, _.Wj(_.om)),
                f = _.x(e, "findIndex").call(e, function(h) {
                    return Xj(h, 1) === a
                });
            f < 0 ? P(d, pm(a, c)) : (e.splice(f, 1), _.qm(b, 2, e), d.info(eo(a, c)))
        }
    };
    Yn = function(a, b, c) {
        var d = [];
        a = _.A(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            b.g = e;
            var f = Sn(9, c);
            f.length === 1 && (d.push(e), d.push(e + "-" + f[0]))
        }
        return d
    };
    ho = function() {
        var a, b, c;
        return ((c = go.exec((b = (a = _.vm(172)) == null ? void 0 : a.src) != null ? b : "")) != null ? c : [])[1] === "pagead2.googlesyndication.com"
    };
    io = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    ro = function(a, b) {
        var c = b.g;
        return a.map(function(d) {
            return _.x(c, "find").call(c, function(e) {
                return e.g === d
            })
        }).filter(Dg())
    };
    to = function() {
        Object.defineProperty(window, "google_DisableInitialLoad", {
            get: function() {
                so();
                return !0
            },
            set: function() {
                so()
            },
            configurable: !0
        })
    };
    wo = function(a, b, c, d, e, f) {
        var h = uo(f, a, b, d, e, void 0, !0);
        f = h.slotId;
        h = h.Ja;
        if (!f || !h) return P(b, Wl("PubAdsService.definePassback", [d, e])), null;
        _.dk(h, 17, !0);
        c.slotAdded(f, h);
        return {
            qk: sn(a, b, new vo(a, f, c)),
            Ja: h
        }
    };
    yo = function(a, b, c, d, e) {
        return Tl(c, function() {
            return new xo(a, b, c, d, e)
        })
    };
    zo = function(a, b, c, d, e) {
        typeof a !== "string" || typeof b !== "string" || yn()[a] === void 0 ? P(e, Wl("Slot.set", [a, b]), c) : (c = (_.F = d.Va(), _.x(_.F, "find")).call(_.F, function(f) {
            return Xj(f, 1) === a
        })) ? em(c, [b]) : (b = zn(fm(new gm, a), b), gk(d, 3, gm, b))
    };
    Ao = function(a, b, c, d) {
        return typeof a !== "string" ? (P(d, Wl("Slot.get", [a]), b), null) : (b = (b = (_.F = c.Va(), _.x(_.F, "find")).call(_.F, function(e) {
            return Xj(e, 1) === a
        })) && km(b)) ? b[0] : null
    };
    Bo = function(a) {
        return a.Va().map(function(b) {
            return _.u(b, 1)
        })
    };
    Do = function(a) {
        return Array.isArray(a) && a.length === 2 ? a.every(Co) : a === "fluid"
    };
    Fo = function(a) {
        return Array.isArray(a) && a.length === 2 ? a.every(Eo) : a === "fluid"
    };
    Go = function(a) {
        return Array.isArray(a) && a.length === 2 && Co(a[0]) && Co(a[1])
    };
    Io = function(a) {
        if (Array.isArray(a)) {
            var b = new xm;
            b = _.ek(b, 1, _.Cc(a[0]));
            a = _.ek(b, 2, _.Cc(a[1]))
        } else a = Ho();
        return a
    };
    Jo = function(a) {
        var b = [];
        if (Fo(a)) b.push(Io(a));
        else if (Array.isArray(a)) {
            a = _.A(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Fo(c) ? b.push(Io(c)) : Va(c, ["fluid"]) && b.push(Ho())
        }
        return b
    };
    Ko = function(a) {
        var b = b === void 0 ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            (c = b.console) == null || (d = c.warn) == null || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return Jo(a)
    };
    Lo = function(a) {
        if (!Array.isArray(a)) return "Size mapping must be an array";
        var b = [];
        a = _.A(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            if (!Array.isArray(c) || c.length !== 2) return "Each mapping entry must be an array of size 2";
            if (!Go(c[0])) return "Size must be an array of two non-negative integers";
            var d = _.A(c[0]),
                e = d.next().value;
            d = d.next().value;
            var f = new xm;
            e = _.ek(f, 1, _.Cc(e));
            d = _.ek(e, 2, _.Cc(d));
            if (Array.isArray(c[1]) && c[1].length === 0) f = [];
            else if (f = Jo(c[1]), f.length === 0) return "At least one slot size must be present";
            c = b;
            e = c.push;
            var h = new Am;
            d = _.ol(h, 1, d);
            d = _.qm(d, 2, f);
            e.call(c, d)
        }
        return b
    };
    Mo = function() {
        var a;
        return (a = _.ca.googletag) != null ? a : _.ca.googletag = {
            cmd: []
        }
    };
    Oo = function(a, b, c) {
        return Tl(c, function() {
            return new No(a, b, c)
        })
    };
    To = function(a, b, c) {
        b = Po(Qo(b, c.applicableSections.filter(function(e) {
            return _.x(Number, "isInteger").call(Number, e)
        })), c.gppString);
        try {
            var d = Ro(c.gppString, c.applicableSections)
        } catch (e) {
            Gl(a, 1182, e), d = !1
        }
        So(b, d)
    };
    cp = function(a, b, c, d, e, f, h) {
        var k = new jk;
        if (_.I(Uo)) var l = k.g(Vo, {}, a, h).aa;
        else l = new Wo(a, h), J(k, l), l = l.xb;
        var m = new Xo(a, b, d, e, l);
        J(k, m);
        h = new Yo(a, b, c, d, h, e, l);
        J(k, h);
        b = new Zo(a, b, c, d, e, l);
        J(k, b);
        b = new $o(a, l, h.j, m.j, b.j);
        J(k, b);
        _.yh(ap) > 0 && J(k, new bp(a, f, b.output));
        k.run();
        return {
            xb: b.output,
            Wa: k
        }
    };
    ep = function(a, b) {
        return Tl(b, function() {
            return new dp(a, b)
        })
    };
    gp = function(a, b, c) {
        var d = Cl(a, 77, function() {
            var e = b.cmd;
            if (!e || Array.isArray(e)) {
                var f = new fp(c);
                b.cmd = ep(a, f);
                e != null && e.length && b.cmd.push.apply(f, e)
            }
        });
        b.fifWin && document.readyState !== "complete" ? _.tf(window, "load", function() {
            return window.setTimeout(d, 0)
        }) : d()
    };
    jp = function(a) {
        var b = window;
        _.ca.document.readyState === "complete" ? Il(a, 94, function() {
            Mo()._pubconsole_disable_ || hp(b) !== null && ip(a, b)
        }) : _.tf(_.ca, "load", Cl(a, 94, function() {
            Mo()._pubconsole_disable_ || hp(b) !== null && ip(a, b)
        }))
    };
    ip = function(a, b) {
        b = b === void 0 ? _.ca : b;
        if (!kp) {
            var c = new lp("gpt_pubconsole_loaded");
            mp(c, a);
            np(c, "param", String(hp(b)));
            np(c, "api", String(op));
            pp(c);
            _.qp(b.document, rp);
            kp = !0
        }
    };
    hp = function(a) {
        var b = Hm(a),
            c;
        return (c = (_.F = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.x(_.F, "find")).call(_.F, function(d) {
            var e = b.search(sp);
            b: {
                var f = 0;
                for (var h = d.length;
                    (f = b.indexOf(d, f)) >= 0 && f < e;) {
                    var k = b.charCodeAt(f - 1);
                    if (k == 38 || k == 63)
                        if (k = b.charCodeAt(f + h), !k || k == 61 || k == 38 || k == 35) break b;
                    f += h + 1
                }
                f = -1
            }
            if (f < 0) d = null;
            else {
                h = b.indexOf("&", f);
                if (h < 0 || h > e) h = e;
                f += d.length + 1;
                d = decodeURIComponent(b.slice(f, h !== -1 ? h : 0).replace(/\+/g, " "))
            }
            return d !== null
        })) != null ? c : null
    };
    tp = function() {
        Mo()._pubconsole_disable_ = !0
    };
    wp = function() {
        up && (Mo().console.openConsole(vp), vp = void 0, up = !1)
    };
    Dp = function() {
        var a = {};
        return a[576944485] = new xp, a[578856259] = new yp(function() {
            return _.yh(zp)
        }), a[607368714] = new Ap, a[629394304] = new Bp, a[633226268] = new Cp, a
    };
    Ep = function(a) {
        switch (Number(a)) {
            case 0:
                return "";
            case 1:
                return "Out-of-page creative";
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            case 6:
                return "Shoppit";
            case 7:
                return "Game Manual Interstitial";
            case 4:
                return "Rewarded";
            case 8:
            case 9:
                return "Side Rail";
            default:
                return ""
        }
    };
    Gp = function(a) {
        var b, c, d;
        var e = new Fp;
        e = _.Ii(e, 1, a.pvsid);
        var f = ih();
        e = _.le(e, 2, f, zc);
        e = _.Hi(e, 3, a.Ba);
        e = _.Hi(e, 4, a.La);
        e = _.Ii(e, 5, 10);
        e = _.K(e, 6, a.jn);
        e = _.Hi(e, 7, a.nn);
        f = a.message.getMessageId();
        e = _.K(e, 8, f);
        f = a.message.getMessageArgs();
        e = _.le(e, 9, f, _.Vc);
        f = Bl((d = (b = a.slotId) == null ? void 0 : b.getAdUnitPath()) != null ? d : "");
        b = _.Hi(e, 10, f);
        a = (c = a.slotId) == null ? void 0 : c.getAdUnitPath();
        return _.Hi(b, 11, a)
    };
    Hp = function(a, b) {
        b = b === void 0 ? null : b;
        var c = [];
        a && (c.push(Xj(a, 1)), c.push(Em(a)), c.push(Xj(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && d < 25; b = b.parentNode, ++d) b.nodeType === 9 ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.ph(c.join(":")).toString() : "0"
    };
    Ip = function(a) {
        if (!_.Sk(a)) return -1;
        a = a.pageYOffset;
        return a < 0 ? -1 : a
    };
    Kp = function(a, b, c, d, e, f) {
        var h = void 0,
            k = Cl(a, c, f);
        _.tf(d, e, k) && (h = function() {
            return void _.Of(d, e, k)
        }, _.Jp(b, h));
        return h
    };
    Lp = function(a, b, c, d, e) {
        return Kp(a.context, a, b, c, d, e)
    };
    Np = function(a) {
        a = (_.Sk(a.top) ? a.top : a).AMP;
        return typeof a === "object" && !!Mp(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    Op = function(a) {
        return Math.round(Number(Ym(a)))
    };
    Pp = function(a) {
        var b = a.parentElement;
        return !b || b.children.length <= 1 ? !1 : _.x(Array, "from").call(Array, b.children).some(function(c) {
            return c !== a && !(_.F = ["script", "style"], _.x(_.F, "includes")).call(_.F, c.tagName.toLowerCase())
        })
    };
    Rp = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.Qp(a, c), a = a.parentElement
    };
    Sp = function(a, b, c, d, e) {
        _.Qp(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            h = d.direction === "rtl",
            k = ((e && e.width !== -12245933 ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var l = a.getBoundingClientRect().left;
            return h ? k - l : l - k
        };
        b = d();
        return b !== 0 ? (c = function(l) {
            h ? f["margin-right"] = l + "px" : f["margin-left"] = l + "px"
        }, c(-b), _.Qp(a, f), d = d(), d !== 0 && b !== d && (c(b / (d - b) * b), _.Qp(a, f)), !0) : !1
    };
    Up = function(a, b, c, d, e, f, h, k, l, m) {
        window.setTimeout(function() {
            var n = Em(d);
            if (window.IntersectionObserver) {
                var p, q = (p = qn(c, b)) != null ? p : Vm(c, b);
                n = Tp(a, b, c, e, f, h, n, k, l, m, q);
                (new window.IntersectionObserver(n, {
                    threshold: .98
                })).observe(q)
            }
        }, 500)
    };
    Tp = function(a, b, c, d, e, f, h, k, l, m, n) {
        var p = window.location && window.location.hash === "#flexibleAdSlotTest" ? 1 : _.yh(Vp);
        return Cl(a, 459, function(q, t) {
            (q = q == null ? void 0 : q[0]) && Wp(a, b, c, d, e, f, h, k, l, m, t, n, q, p)
        })
    };
    Wp = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t) {
        var w = q.boundingClientRect,
            v = q.intersectionRatio,
            y = window.innerWidth,
            z = w.left,
            G = w.right,
            C = z + 2 < 0,
            H = G - (y + 2) > 0;
        (v >= .98 || C || H) && Xp(l, function(L) {
            n.unobserve(p);
            var S = C || H;
            var M = new Pg;
            Yp(p, S) && M.set(10);
            if (k !== void 0 && Pp(p)) {
                var da, Z = (da = Vm(c, b)) == null ? void 0 : da.parentElement,
                    U;
                da = Z ? (U = Xm(Z, window)) == null ? void 0 : U.width : void 0;
                k !== da && M.set(16)
            }
            S ? (M.set(8), S = Rg(M)) : S = Zp(b, c, v, M);
            U = $p(c, p, f);
            M = U.Zm;
            U = U.cn;
            mp(L, a);
            np(L, "qid", m);
            np(L, "iu", c.getAdUnitPath());
            np(L, "e", String(S));
            C && np(L, "ofl", String(z));
            H && np(L, "ofr", String(G - y));
            np(L, "ret", e + "x" + f);
            np(L, "req", h);
            np(L, "bm", String(d));
            np(L, "efh", Number(M));
            np(L, "stk", Number(U));
            np(L, "ifi", aq(window))
        }, t)
    };
    Zp = function(a, b, c, d) {
        var e = qn(b, a) || Vm(b, a);
        try {
            var f = e.getBoundingClientRect(),
                h = f.left,
                k = f.top,
                l = f.width,
                m = f.height,
                n = Vm(b, a),
                p = Xm(n, window);
            if (p.visibility === "hidden" || p.display === "none") return Rg(d);
            var q = Op(p.getPropertyValue("border-top-width") || 0) + 1;
            b = h + l;
            f = k + m;
            c = (1 - c) * m;
            var t = a.elementsFromPoint(h + q + 2, k + c + q);
            var w = a.elementsFromPoint(b - q - 2, k + c + q);
            var v = a.elementsFromPoint(b - q - 2, f - c - q);
            var y = a.elementsFromPoint(h + q + 2, f - c - q);
            var z = a.elementsFromPoint(b / 2, f - c - q)
        } catch (C) {
            return d.set(1), Rg(d)
        }
        if (!(t && t.length && w && w.length && v && v.length && y && y.length && z && z.length)) return d.set(7), Rg(d);
        a = function(C, H) {
            for (var L = !1, S = 0; S < C.length; S++) {
                var M = C[S];
                if (L) {
                    var da = Xm(M, window);
                    if (da.visibility !== "hidden" && !bq(M) && !G(e, M)) {
                        d.set(H);
                        da.position === "absolute" && d.set(11);
                        break
                    }
                } else e === M && (L = !0)
            }
        };
        cq(e) && d.set(9);
        var G = function(C, H) {
            return dq(C, H) || dq(H, C)
        };
        h = t[0];
        e === h || G(e, h) || bq(h) || d.set(2);
        h = w[0];
        e === h || G(e, h) || bq(h) || d.set(3);
        h = v[0];
        e === h || G(e, h) || bq(h) || d.set(4);
        h = y[0];
        e === h || G(e, h) || bq(h) || d.set(5);
        if (bq(e)) return Rg(d);
        a(t, 12);
        a(w, 13);
        a(v, 14);
        a(y, 15);
        a(z, 6);
        return Rg(d)
    };
    Yp = function(a, b) {
        var c = !1,
            d = !1;
        return eq(a, function(e, f) {
            d = d || e.overflowX === "scroll" || e.overflowX === "auto";
            c = c || e.display === "flex";
            return b && c && d || f.role === "listbox"
        })
    };
    $p = function(a, b, c) {
        var d = (a = Vm(a)) && Xm(a, window),
            e = d ? d.position !== "absolute" : !0,
            f = !1,
            h = a && a.parentElement,
            k = !1;
        Gj(b, function(l) {
            var m = l.style;
            if (e)
                if (k || (k = l === h)) e = Fj(l, _.ca, -1, -1);
                else {
                    m = m && m.height;
                    var n = (m && _.x(m, "endsWith").call(m, "px") ? Op(m) : 0) >= c;
                    !m || n || typeof m === "string" && _.x(Dj, "includes").call(Dj, m) || (e = !1)
                }
            f || (l = Xm(l, _.ca), l.position !== "sticky" && l.position !== "fixed") || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            Zm: e,
            cn: f
        }
    };
    bq = function(a) {
        return eq(a, function(b) {
            return b.position === "fixed" || b.position === "sticky"
        })
    };
    cq = function(a) {
        return eq(a, function(b) {
            var c;
            return (_.F = ["left", "right"], _.x(_.F, "includes")).call(_.F, (c = b["float"]) != null ? c : b.cssFloat)
        })
    };
    fq = function(a) {
        a = Dm(a)[0];
        return Array.isArray(a) && a.every(function(b) {
            return typeof b === "number"
        }) ? new _.Nm(a[0], a[1]) : null
    };
    gq = function(a, b, c, d) {
        var e = _.Nf("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    hq = function(a) {
        return (a == null ? void 0 : a.position) === "sticky" || (a == null ? void 0 : a.position) === "fixed"
    };
    kq = function(a, b, c) {
        var d = new _.B.Map;
        a = _.A(a);
        for (var e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var f = b[e.getDomId()];
            f = iq(f, jq, 28) ? _.wm(f, jq, 28) : _.wm(c, jq, 34);
            var h = void 0;
            d.set(e, ((h = f) == null ? 0 : Qn(h, 1)) ? _.Q(f, 1) ? 2 : 1 : 0)
        }
        return d
    };
    nq = function(a, b, c) {
        var d, e, f = [],
            h = [];
        a = _.A(a);
        for (d = a.next(); !d.done; d = a.next())
            if (d = d.value, b.get(d) === 1) f.push(null), h.push(null);
            else {
                var k = c,
                    l = Vm(d);
                d = lq((l == null ? void 0 : l.parentElement) && Xm(l.parentElement, k) || null);
                if (!d || d[0] === 1 && d[3] === 1) {
                    var m = e = d = void 0,
                        n = (m = l == null ? void 0 : l.parentElement) != null ? m : null;
                    m = (e = Om(n)) != null ? e : new _.Nm(0, 0);
                    mq(m, n, k, 100);
                    e = (d = Om(l)) != null ? d : new _.Nm(0, 0);
                    mq(e, l, k, 1);
                    m.height === -1 && (e.height = -1);
                    d = m;
                    d = d.width + "x" + d.height;
                    e = e.width + "x" + e.height
                } else e = d = "-1x-1";
                f.push(d);
                h.push(e)
            }
        return {
            Bn: f,
            ro: h
        }
    };
    mq = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b || !Hj(b, c, d))) {
                a: {
                    do {
                        var f = Xm(b, c);
                        if (f && f.position == "fixed") {
                            var h = !1;
                            break a
                        }
                    } while (b = b.parentElement);h = !0
                }
                e = !h
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    pq = function(a, b, c) {
        var d = (0, _.oq)() !== 0,
            e = Cm(!0, c, d).width,
            f = [],
            h = [],
            k = [];
        if (c !== null && c != c.top) {
            var l = Cm(!1, c).width;
            (e === -12245933 || l === -12245933 || l < e) && k.push(8)
        }
        e !== -12245933 && (e * 1.5 < c.document.documentElement.scrollWidth ? k.push(10) : d && c.outerWidth * 1.5 < e && k.push(10));
        a = _.A(a);
        for (d = a.next(); !d.done; d = a.next())
            if (l = d.value, b.get(l) === 1) f.push(null), h.push(null);
            else {
                d = new Pg;
                var m = Vm(l);
                l = 0;
                var n = !1,
                    p = !1,
                    q = !1;
                if (m) {
                    for (var t = 0, w = m; w && t < 100; t++, w = w.parentElement) {
                        var v = Xm(w, c);
                        if (v) {
                            var y = v,
                                z = y.display,
                                G = y.overflowX;
                            if (y.overflowY !== "visible" && (d.set(2), (y = Om(w)) && (l = l ? Math.min(l, y.width) : y.width), d.get(9))) break;
                            hq(v) && d.set(9);
                            z === "none" && d.set(7);
                            w.nodeName === "IFRAME" && (v = parseInt(v.width, 10), v < e && (d.set(8), l = l ? Math.min(v, l) : v));
                            p || (p = G === "scroll" || G === "auto");
                            n || (n = z === "flex");
                            q || (q = w.role === "listbox")
                        } else d.set(3)
                    }
                    if (!q) {
                        if (n = p && n) m = m.getBoundingClientRect().left, n = m > e || m < 0;
                        q = n
                    }
                    q && d.set(11)
                } else d.set(1);
                m = _.A(k);
                for (n = m.next(); !n.done; n = m.next()) d.set(n.value);
                f.push(Rg(d));
                h.push(l)
            }
        return {
            Fm: f,
            yn: h
        }
    };
    vq = function(a, b, c, d, e) {
        if (b != null && b.size) {
            var f, h;
            e = (h = (f = e == null ? void 0 : e.adUnits) != null ? f : a == null ? void 0 : a.adUnits) != null ? h : [];
            a = _.A(e);
            h = a.next();
            for (f = {}; !h.done; f = {
                    Th: void 0
                }, h = a.next()) {
                h = h.value;
                var k = e = void 0,
                    l = void 0;
                if ((e = h) != null && e.code && ((k = h) == null ? 0 : (l = k.bids) == null ? 0 : l.length) && (e = h.bids, h = Wh(h.code, b), f.Th = h / 1E6, !(h <= 0)))
                    for (e = _.A(e), l = e.next(), k = {}; !l.done; k = {
                            Ac: void 0,
                            Mj: void 0
                        }, l = e.next()) l = l.value, k.Mj = typeof l.getFloor === "function" ? l.getFloor : void 0, k.Ac = qq(rq(sq(new tq, 4), h), c), l.getFloor = function(m, n) {
                        return function(p) {
                            _.Uf(m.Ac, 1, 0) === 4 && sq(m.Ac, 1);
                            var q, t = (q = m.Mj) == null ? void 0 : q.apply(this, [p]);
                            p = c ? t || {} : {
                                currency: "USD",
                                floor: n.Th
                            };
                            return t != null && t.floor ? (t == null ? 0 : t.currency) && t.currency !== "USD" ? (_.Uf(m.Ac, 1, 0) === 1 && (p = rq(sq(m.Ac, 6), t.floor * 1E6), _.uq(p, 3, t.currency)), t) : (t.floor || 0) > n.Th ? (_.Uf(m.Ac, 1, 0) === 1 && rq(sq(m.Ac, 5), t.floor * 1E6), t) : p : p
                        }
                    }(k, f), d.set(l.getFloor, k.Ac)
            }
        }
    };
    wq = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                a == null || (e = a.requestBids) == null || e.before.call(b, function(f, h) {
                    return Mo().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: h
                    })
                }, 0)
            };
        (c == null ? 0 : c.hasOwnProperty("push")) ? c == null || c.push(d): c == null || c.unshift(d)
    };
    yq = function(a, b) {
        return Tl(b, function() {
            return new xq(a, b)
        })
    };
    zq = function(a, b) {
        for (var c = new Pg, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return Rg(c)
    };
    Bq = function(a, b) {
        return Aq(a, b)
    };
    Aq = function(a, b) {
        return a.map(function(c) {
            return b(c)
        })
    };
    Eq = function(a, b, c) {
        var d = {
                jc: new Cq,
                Nc: new Cq,
                Mc: new Cq,
                Lc: new Cq,
                zd: new Cq,
                nd: new Cq,
                cg: new Cq,
                dg: new Cq,
                vg: new Cq
            },
            e = new jk;
        J(e, new Dq(a, b, c, window, d));
        e.run();
        return {
            Qi: d,
            Wa: e
        }
    };
    Gq = function(a, b, c, d, e, f, h, k) {
        if (h) {
            var l = {
                    li: new Cq
                },
                m = new jk;
            a = new Fq(a, b, c, d, e, f, h, k, l);
            J(m, a);
            m.run();
            return {
                El: l,
                Wa: m
            }
        }
    };
    Iq = function(a, b) {
        var c;
        return !((c = Hq(b, 22)) != null ? !c : !_.Q(a, 15))
    };
    Jq = function(a, b) {
        var c;
        return !((c = Hq(b, 23)) != null ? !c : !_.Q(a, 31))
    };
    Kq = function() {
        return {
            Md: new _.B.Set
        }
    };
    Rq = function(a) {
        var b, c = Lq(Mq(Nq(Oq(Pq(new Qq, a.pvsid), a.La), a.Ba), (b = a.wg) != null ? b : _.Jf()));
        a.payload && (b = a.payload(), _.ol(c, 7, b));
        a.bb && _.Ii(c, 5, a.bb);
        return c
    };
    Tq = function(a, b, c, d) {
        for (var e = _.A(_.x(Object, "entries").call(Object, Sq)), f = e.next(); !f.done; f = e.next()) {
            var h = _.A(f.value);
            f = h.next().value;
            h = h.next().value;
            b & f && P(a, h(String(c), d))
        }
    };
    Zq = function(a) {
        return Rq(_.x(Object, "assign").call(Object, {}, a, {
            payload: function() {
                var b = new Uq;
                var c = _.Vq(b, Wq, 1, Xq);
                c = _.Yq(c, 1, a.sn);
                _.Yq(c, 2, a.Wh);
                return b
            }
        }))
    };
    br = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        c = (c = c === void 0 ? null : c) ? Vg(c) : null;
        c = _.I($q) ? null : c;
        var d = _.I(ar);
        b = b === void 0 ? !0 : b;
        d = d === void 0 ? !1 : d;
        var e = 0;
        try {
            e |= ii(a);
            var f;
            if (!(f = !a.navigator)) {
                var h = a.navigator;
                f = "brave" in h && "isBrave" in h.brave || !1
            }
            e |= f || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            e |= li(a, d ? _.x(Number, "MAX_SAFE_INTEGER") : 2500);
            !b || c && Bi(c) || (e |= 4194304)
        } catch (k) {
            e |= 32
        }
        return e
    };
    fr = function(a, b, c, d, e, f) {
        d = cr(d);
        if (d !== 5) return !1;
        a.R.log(578856259, _.Mi, {
            pvsid: a.pvsid,
            Ba: a.Ba,
            mb: 17,
            Tb: a.La,
            T: 1
        });
        (e = br(e, _.I(_.dr) ? !1 : !er(c), f)) ? (f = _.I($q) ? e & -4194305 : e, Tq(b, f, d, c.getAdUnitPath()), a.R.log(578856259, Li, {
            pvsid: a.pvsid,
            Ba: a.Ba,
            mb: 17,
            Tb: a.La,
            un: f
        }), a.R.log(578856259, _.Mi, {
            pvsid: a.pvsid,
            Ba: a.Ba,
            mb: 17,
            Tb: a.La,
            T: 2
        })) : a.R.log(578856259, _.Mi, {
            pvsid: a.pvsid,
            Ba: a.Ba,
            mb: 17,
            Tb: a.La,
            T: 3
        });
        return !!e
    };
    gr = function(a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            case 6:
                return 42;
            case 7:
                return 10;
            case 8:
                return 3;
            case 9:
                return 4
        }
    };
    qr = function(a, b, c, d) {
        d = d === void 0 ? !0 : d;
        a = gr(a);
        if (!a) return null;
        if (a === 10) return 0;
        var e = 0;
        if (!(_.F = [11, 10], _.x(_.F, "includes")).call(_.F, a)) {
            e |= ii(b);
            if (d || !_.I(hr)) {
                var f = _.Wi(b);
                f = a !== 26 && a !== 27 && a !== 40 && a !== 41 && a !== 10 && f.adCount ? a == 1 || a == 2 ? !(!f.adCount[1] && !f.adCount[2]) : (f = f.adCount[a]) ? f >= 1 : !1 : !1;
                f && (e |= 64)
            }
            if (e) return e
        }
        if (a === 2 || a === 1) {
            c = {
                qa: b,
                gk: _.I(ir) ? _.x(Number, "MAX_SAFE_INTEGER") : jr,
                Pl: c ? a : void 0
            };
            (0, _.oq)() === 0 && (c.gk = _.I(ir) ? _.x(Number, "MAX_SAFE_INTEGER") : 3E3, c.qn = _.I(kr) ? -1 : 650, c.Jo = _.I(lr), c.Mo = _.yh(mr));
            var h = e;
            e = c.qa;
            f = c.qn;
            var k = c.gk;
            var l = c.Pl;
            var m = c.Jo;
            var n = c.Mo;
            var p = c.Qa;
            c = 0;
            try {
                c |= ii(e, n);
                var q = Math.min(e.screen.width || 0, e.screen.height || 0);
                c |= q ? q < 320 ? 8192 : 0 : 2048;
                c |= e.navigator && ti(e.navigator.userAgent) ? 1048576 : 0;
                if (f) {
                    q = c;
                    var t = e.innerHeight;
                    var w = _.ni(e) * t >= f ? 0 : 1024;
                    var v = q | w
                } else v = c | (_.ji(e) ? 0 : 8);
                c = v;
                c |= li(e, k, m)
            } catch (y) {
                c |= 32
            }
            switch (l) {
                case 2:
                    v = p;
                    v = v === void 0 ? null : v;
                    w = _.ri({
                        ni: 0,
                        Qg: e.innerWidth,
                        Eh: 3,
                        oi: 0,
                        Rg: Math.min(Math.round(e.innerWidth / 320 * 50), nr) + 15,
                        Fh: 3
                    });
                    or(wi(e, v), w) != null && (c |= 16777216);
                    break;
                case 1:
                    v = p, v = v === void 0 ? null : v, w = e.innerWidth, t = e.innerHeight, q = Math.min(Math.round(e.innerWidth / 320 * 50), nr) + 15, f = _.ri({
                        ni: 0,
                        Qg: w,
                        Eh: 3,
                        oi: t - q,
                        Rg: t,
                        Fh: 3
                    }), q > 25 && f.push({
                        x: w - 25,
                        y: t - 25
                    }), or(wi(e, v), f) != null && (c |= 16777216)
            }
            e = h | c
        } else a === 8 ? e |= br(b) : a === 3 || a === 4 ? (q = a, w = !0, t = !1, c = _.I(pr), q = q === void 0 ? null : q, w = w === void 0 ? !1 : w, t = t === void 0 ? !1 : t, c = c === void 0 ? !1 : c, v = ii(b), ti((h = b.navigator) == null ? void 0 : h.userAgent) && (v |= 1048576), h = b.innerWidth, h < 1200 && (v |= 65536), f = b.innerHeight, f < 650 && (v |= 2097152), q && v === 0 && (q = q === 3 ? "left" : "right", (h = _.ej({
            qa: b,
            Vj: !1,
            Lk: 1,
            position: q,
            oa: h,
            ra: f,
            Uc: new _.B.Set,
            minWidth: 120,
            minHeight: 500,
            fd: w,
            Od: t,
            ld: c
        })) ? _.Wi(b).sideRailPlasParam.set(q, h.width + "x" + h.height + "_" + String(q).charAt(0)) : v |= 16), e |= v) : a !== 11 && a !== 42 && (e |= 32);
        !e && d && (b = _.Wi(b), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return e
    };
    tr = function(a, b, c, d) {
        var e = d.ij;
        var f = d.adUnitPath;
        d = d.Ab === void 0 ? !1 : d.Ab;
        return typeof f === "string" && f.length && (e == null || typeof e === "string" || typeof e === "number" && rr(e)) ? sr(a, b, f, c, {
            Yb: typeof e === "string" ? e : void 0,
            format: typeof e === "number" ? e : 1,
            Ab: d
        }) : (b.error(Wl("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    rr = function(a) {
        switch (a) {
            case 6:
                return !0;
            case 7:
                return !0;
            default:
                return !!Mp(un, function(b) {
                    return b === a
                })
        }
    };
    sr = function(a, b, c, d, e) {
        var f = e.Yb;
        var h = e.format;
        b = d.add(a, b, c, [1, 1], {
            Yb: f,
            format: h,
            Ab: e.Ab
        });
        a = b.slotId;
        b = b.Ja;
        a && b && (_.ur(b, 15, h), _.Jp(a, function() {
            var k = window,
                l = gr(h);
            if (l) {
                k = _.Wi(k);
                var m = k.adCount && k.adCount[l];
                m && (k.adCount[l] = m - 1)
            }
        }));
        return a != null ? a : null
    };
    vr = function(a, b) {
        var c;
        return !((c = Hq(a, 11)) != null ? !c : !_.Q(b, 10))
    };
    wr = function(a, b, c, d) {
        if (a = Vm(a, b)) {
            var e;
            if (c = (e = Hq(c, 24)) != null ? e : _.Q(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, c.height === 0 ? c = !1 : (c = _.ca.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    xr = function(a) {
        for (var b = 0; a && b < 100; b++, a = a.parentElement) {
            var c = void 0;
            if (((c = Xm(a, window)) == null ? void 0 : c.display) !== "none") return a
        }
        return null
    };
    yr = function(a) {
        if (a.length <= 61440) return {
            url: a,
            Si: 0
        };
        var b = a;
        b.length > 61440 && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Si: a.length - b.length + 8
        }
    };
    zr = function(a, b) {
        b = b === void 0 ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (a == null ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Ar = function(a, b) {
        b = b === void 0 ? window : b;
        return !!zr(a, b)
    };
    Br = function(a) {
        var b, c;
        return (c = (b = _.x(a, "find").call(a, function(d) {
            return Xj(d, 1) === "page_url"
        })) == null ? void 0 : km(b)[0]) != null ? c : null
    };
    Cr = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b);
        c === -1 && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Dr = function(a) {
        var b;
        if ((b = a.location) == null ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        jl(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    Er = function(a, b) {
        var c = b.X;
        var d = b.W;
        return !!Br(c.Va()) || a.some(function(e) {
            return Br(d[e.getDomId()].Va()) !== null
        })
    };
    Jr = function(a, b, c) {
        var d = window,
            e = new jk;
        d = new Fr(d);
        _.Gr(e, d);
        a = new Hr(a, d, c, _.vm(150));
        J(e, a);
        b = e.l(Ir, {
            Id: b ? a.Lf : void 0
        }, {
            Ef: d
        }).output;
        e.run();
        return {
            Lf: a.Lf,
            Zg: b,
            Wa: e
        }
    };
    Lr = function() {
        var a = a === void 0 ? window : a;
        Kr = _.Jf(a)
    };
    Mr = function(a, b) {
        var c = _.Nf("DIV");
        c.id = a;
        c.textContent = b;
        _.Qp(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    Pr = function(a, b, c, d) {
        if (!(a = Nr(b, a) > 0)) {
            a: {
                try {
                    a = top;
                    if (!a) {
                        var e = !0;
                        break a
                    }
                    var f = Or(a.document, a).y,
                        h = f + c.height;
                    e = d.y >= f && d.y <= h;
                    break a
                } catch (k) {
                    e = !0;
                    break a
                }
                e = void 0
            }
            a = !e
        }
        return a
    };
    Qr = function(a, b) {
        if (typeof IntersectionObserver !== "undefined") return new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    Sr = function(a, b, c, d, e) {
        return new _.B.Promise(function(f) {
            for (var h = new e(function(n, p) {
                    n.some(function(q) {
                        return q.intersectionRatio > 0
                    }) && (p.disconnect(), f())
                }, {
                    rootMargin: b + "%"
                }), k = _.A(a), l = k.next(), m = {}; !l.done; m = {
                    kg: void 0
                }, l = k.next()) {
                l = l.value;
                m.kg = Vm(l);
                if (!m.kg) return;
                h.observe(m.kg);
                Rr(c, l, function(n) {
                    return function() {
                        return void h.unobserve(n.kg)
                    }
                }(m))
            }
            _.Jp(d, function() {
                return void h.disconnect()
            })
        })
    };
    Zr = function(a, b, c, d, e) {
        var f = f === void 0 ? _.B.globalThis.IntersectionObserver : f;
        if (!b) return {
            oh: e
        };
        var h = Tr(b, 1) != null ? Ur(b) != null && (0, _.oq)() !== 0 ? Tr(b, 1) * Ur(b) : Tr(b, 1) : null;
        if (h == null) return {
            oh: e
        };
        b = new jk;
        _.I(Vr) ? (c = b.l(Wr, {}, d, c, h, b, f), a = c.complete, e && Xr(c, e)) : a = J(b, new Yr(a, d, c, h, e, f)).output;
        b.run();
        return {
            oh: a,
            gn: b
        }
    };
    is = function(a, b, c, d, e) {
        var f = window,
            h = new jk,
            k = J(h, new $r(a, b, as, function(n) {
                return bs("i-adframe-load", n.detail.data)
            })),
            l = J(h, new $r(a, b, as, function(n) {
                return bs("i-dismiss", n.detail.data)
            }));
        k = _.yh(cs) > 0 ? J(h, new ds(a, k.output, void 0)).output : k.output;
        k = J(h, new es(a, b, c, k));
        J(h, new fs(a, f, d, e, k.output));
        if (f.top === f) var m = J(h, new gs(a, f, k.output)).output;
        J(h, new hs(a, b, c, k.output, l.output, m));
        return h
    };
    bs = function(a, b) {
        try {
            var c = JSON.parse(b);
            return c.googMsgType === "sth" && c.msg_type === a
        } catch (d) {}
        return !1
    };
    js = function(a, b) {
        a.R.log(576944485, Rq, _.x(Object, "assign").call(Object, {}, a, b))
    };
    ks = function(a) {
        return window.IntersectionObserver && new IntersectionObserver(a, {
            threshold: [.5]
        })
    };
    ls = function(a) {
        return Math.max.apply(Math, _.aj(a != null ? a : []))
    };
    ms = function(a) {
        return (_.F = [4, 5, 7, 1], _.x(_.F, "includes")).call(_.F, cr(a))
    };
    os = function(a, b, c, d) {
        return ((d = _.ki(d)) ? d > 1.05 || d < .95 : 1) && cr(c) === 4 ? (P(a, ns("googletag.enums.OutOfPageFormat.REWARDED", String(b.getAdUnitPath()))), !0) : !1
    };
    qs = function(a, b, c) {
        _.vf(function(d) {
            a.R.log(629394304, function(e) {
                var f = new ps;
                f = _.Ii(f, 1, a.pvsid);
                var h = ih();
                f = _.le(f, 2, h, zc);
                f = _.Hi(f, 3, a.Ba);
                h = _.Jf() - c;
                f = _.ul(f, 6, h);
                f = _.Hi(f, 8, b);
                f = _.Hi(f, 7, Bl(b));
                return _.Ii(f, 5, e.bb)
            }, {});
            d.g = 0
        })
    };
    ss = function(a, b, c) {
        return new rs(c, a, as, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if (e.type === "rewarded" && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    us = function(a, b, c) {
        a.R.log(576944485, Zq, _.x(Object, "assign").call(Object, {}, a, {
            bb: _.yh(ts),
            sn: b,
            Wh: gr(c)
        }))
    };
    ws = function(a) {
        for (var b = Array(36), c = 0, d, e = 0; e < 36; e++) e == 8 || e == 13 || e == 18 || e == 23 ? b[e] = "-" : e == 14 ? b[e] = "4" : (c <= 2 && (c = 33554432 + Math.random() * 16777216 | 0), d = c & 15, c >>= 4, b[e] = vs[e == 19 ? d & 3 | 8 : d]);
        a.postMessage(JSON.stringify({
            paw_id: b.join(""),
            gpa: 0
        }))
    };
    ys = function(a, b) {
        var c = new jk;
        a = new xs(a, b);
        J(c, a);
        c.run();
        return {
            Fn: a.F,
            Ic: a.Ic
        }
    };
    Bs = function(a, b, c) {
        if (_.x(Object, "keys").call(Object, a).some(function(d) {
                return (_.F = _.x(Object, "values").call(Object, zs), _.x(_.F, "includes")).call(_.F, Number(d))
            })) return !0;
        As("taxonomies", a, b, c);
        return !1
    };
    Es = function(a, b, c, d, e) {
        if (a == null) As("taxonomy", a, d, e);
        else {
            var f = Number(a);
            (_.F = _.x(Object, "values").call(Object, wn), _.x(_.F, "includes")).call(_.F, Number(f)) ? a = !0 : (As("taxonomy", a, d, e), a = !1);
            a && (b == null ? As("taxonomyData", b, d, e) : Cs(b, d, e) && Ds(f, b, c, d))
        }
    };
    Qs = function(a, b, c, d, e) {
        if (!Fs(a)) As("taxonomy", a, d, e);
        else if (b == null) As("taxonomyData", b, d, e);
        else if (Cs(b, d, e) && Gs(_.x(b, "values"), d, b) && (b = Hs(a, _.x(b, "values"), d, b), b.size)) {
            b = [].concat(_.aj(b));
            e = new Is;
            var f = Js.get(a);
            e = _.Yq(e, 3, f);
            Ks(c, Ls(e, b));
            d.info(Os(On(b), On(a)))
        }
    };
    Cs = function(a, b, c) {
        if (Eg(a) && a.hasOwnProperty("values")) return !0;
        As("taxonomyData", a, b, c);
        return !1
    };
    Ds = function(a, b, c, d) {
        if (Gs(_.x(b, "values"), d, b)) {
            var e = Hs(a, _.x(b, "values"), d, b);
            e.size && (b = (_.F = _.Uj(c, Is, 1, _.Wj()), _.x(_.F, "find")).call(_.F, function(f) {
                return _.Uf(f, 1, 0) === a
            }), e = [].concat(_.aj(e)), b ? Ls(b, e) : Ks(c, Ls(Rs(new Is, a), e)), d.info(Os(On(e), On(a))))
        }
    };
    Gs = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        As("taxonomyData.values", a, b, c);
        return !1
    };
    Hs = function(a, b, c, d) {
        if (!Lg()(b)) return As("taxonomyData.values", b, c, d), new _.B.Set;
        d = new _.B.Set;
        var e = !1;
        b = _.A(b);
        for (var f = b.next(); !f.done; f = b.next()) {
            f = f.value;
            if (d.size >= 10) {
                e = !0;
                break
            }
            d.add(f)
        }
        e && P(c, Ts(On(a), On(10)));
        return d
    };
    As = function(a, b, c, d) {
        P(c, Nn("googletag.setConfig.pps", On(d), a, On(b)))
    };
    Fs = function(a) {
        return Js.has(a)
    };
    Vs = function(a) {
        return Us.has(a)
    };
    dt = function(a, b) {
        if (_.$s(b) === 3) {
            var c = {
                    Le: new at
                },
                d = new jk;
            J(d, new bt(a, b, c.Le));
            d.run();
            return {
                Wa: d,
                Jn: c
            }
        }
    };
    jt = function(a) {
        if (na()) {
            var b = {
                    tk: new Cq
                },
                c = new jk;
            J(c, new et(a, window, b.tk));
            c.run();
            return b
        }
    };
    mt = function(a, b, c, d, e, f, h) {
        if (b) {
            var k = {
                    Vh: new Cq
                },
                l = new jk;
            J(l, new kt(a, b, c, d, k, e, f, h));
            l.run();
            return {
                Wa: l,
                eg: k
            }
        }
    };
    qt = function(a) {
        nt = a
    };
    tt = function(a, b, c, d) {
        Ek(b, d, function(e, f) {
            Gl(a, e, f);
            var h, k;
            (k = (h = window.console).error) == null || k.call(h, f)
        }, function() {
            return void c.info(st())
        })
    };
    wt = function(a, b, c) {
        if (!_.I(ut) && !ho()) {
            var d = {
                    Bh: new Cq,
                    Lb: new Cq
                },
                e = new jk;
            J(e, new vt(a, b, c, d));
            e.run();
            return {
                Xd: d,
                Wa: e
            }
        }
    };
    Et = function(a, b, c, d, e, f, h, k) {
        var l = window,
            m, n, p, q, t;
        _.vf(function(w) {
            m = new jk;
            n = m.g(xt, {
                Pd: h
            }, window.location.hash);
            p = n.adUnitPath;
            var v = new jk;
            _.Gr(m, v);
            var y = v.l(yt, {
                adUnitPath: p
            }, l);
            y = v.g(zt, {
                data: y.output
            });
            v.run();
            q = y.Bb;
            t = m.g(At, {
                adUnitPath: p
            }, b, a, c, d);
            m.g(Bt, {
                Bb: q
            });
            m.l(Ct, {
                Bb: q,
                Hg: k,
                ig: t.output
            }, {
                context: a,
                ab: e,
                C: l,
                Zc: f,
                om: m
            });
            return w.yield(Dt(m), 0)
        })
    };
    Qa = function(a, b) {
        a: {
            b = b[0];a = a[0];
            for (var c = _.Oa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (f != 0) {
                    b = f;
                    break a
                }
            }
            b = _.Oa(b.length, a.length)
        }
        return b
    };
    Ft = function(a) {
        return Array.isArray(a) && a.length === 2 && typeof a[0] === "number" && _.x(a, "includes").call(a, 0)
    };
    Gt = function(a) {
        if (Ft(a)) return {
            size: [],
            ai: !0
        };
        if (Array.isArray(a) && a.length > 0 && typeof a[0] !== "number") {
            var b = !1;
            a = a.filter(function(c) {
                c = Ft(c);
                b = b || c;
                return !c
            });
            return {
                size: a,
                ai: b
            }
        }
        return {
            size: a,
            ai: !1
        }
    };
    It = function(a, b) {
        var c = b.W;
        return Bq(a, function(d) {
            return Ht(c[d.getDomId()]).join("&")
        })
    };
    Ht = function(a) {
        a = Jt(a);
        var b = [];
        _.Mn(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    Jt = function(a) {
        for (var b = {}, c = _.A(dm(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.u(d, 1)] = km(d, _.om);
        a = _.ce(a, 8, _.Xc, _.Wj(_.om));
        a.length && (b.excl_cat != null || (b.excl_cat = a));
        return b
    };
    Kt = function(a) {
        var b = !1,
            c = _.Uj(a, gm, 2, _.Wj()).map(function(d) {
                var e = _.u(d, 1);
                b = e === "excl_cat";
                d = km(d);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = _.ce(a, 3, _.Xc, _.Wj());
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    Tt = function(a, b, c) {
        var d, e, f, h, k, l, m, n, p, q, t, w, v, y, z, G, C, H, L;
        return _.vf(function(S) {
            if (S.g == 1) {
                if (![Lt, Mt, Nt].some(_.I)) return S.return();
                d = _.yh(Ot);
                e = c.Gb < 1 / d ? c.va.Pa.Sa.sb.vo : void 0;
                h = (f = _.wm(a.X, Pt, 33)) == null ? void 0 : _.wm(f, Qt, 3);
                if ((k = h) == null ? 0 : _.Q(k, 1)) return (l = e) == null || l.re.xa({
                    za: d,
                    reason: "disabled"
                }), S.return();
                m = window;
                if (m !== m.top) return (n = e) == null || n.re.xa({
                    za: d,
                    reason: "top"
                }), S.return();
                if (((p = h) == null || !_.Q(p, 2)) && _.I(Rt) && (q = St, t = q(b, a, m), t >= 0 && t < 1)) return (w = e) == null || w.re.xa({
                    za: d,
                    reason: "viewport"
                }), S.return();
                v = _.Jf(m);
                if (_.I(Lt) && ((z = m.scheduler) == null ? 0 : z.yield)) return y = "yield", S.yield(m.scheduler.yield(), 3);
                if (_.I(Mt) && ((G = m.scheduler) == null ? 0 : G.postTask)) return y = "postTask", S.yield(new _.B.Promise(function(M) {
                    return void m.scheduler.postTask(M, {
                        priority: "user-blocking"
                    })
                }), 3);
                if (!_.I(Nt)) return (C = e) == null || C.re.xa({
                    za: d,
                    reason: "nofn"
                }), S.return();
                y = "setTimeout";
                return S.yield(new _.B.Promise(function(M) {
                    m.setTimeout(function() {
                        return void M()
                    }, 0)
                }), 3)
            }(H = e) == null || H.re.xa({
                za: d,
                reason: "none"
            });
            (L = e) == null || L.latency.lc({
                oc: _.Jf(m) - v,
                Em: y
            });
            S.g = 0
        })
    };
    St = function(a, b, c) {
        var d = b.X;
        if (_.$s(c.document) !== 1) return 1;
        b = b.W[a.getDomId()];
        a = an(a, b, c.document, Iq(d, b));
        b = Cm(!0, c);
        d = b.height;
        b = b.width;
        if (!a || a.y === -12245933 || d === -12245933 || b === -12245933 || !d) return 0;
        b = 0;
        try {
            b = Or(c.top.document, c.top).y
        } catch (e) {
            return 0
        }
        c = b + d;
        return a.y < b ? b - a.y / d : a.y > c ? (a.y - c) / d : 0
    };
    Vt = function(a, b, c) {
        var d = window,
            e = !mh(d.isSecureContext, d.document);
        if (nh(d.isSecureContext, d, d.document) || !e) return e = new jk, a = new Ut(a, d, b, c), J(e, a), e.run(), a.j
    };
    Xt = function(a, b, c, d, e, f, h) {
        if (d) {
            var k = {
                    We: new Cq,
                    Xe: new Cq,
                    be: new Cq
                },
                l = new jk;
            J(l, new Wt(a, c, b, d, e, k, f, h));
            l.run();
            return {
                Wa: l,
                zo: k
            }
        }
    };
    Yt = function(a) {
        return "gads_privacy_sandbox_td_buyerlist__" + a
    };
    $t = function(a, b) {
        return a.filter(function(c) {
            return Zt(c, 2) > b
        })
    };
    bu = function(a, b) {
        a = new _.B.Map(a.map(function(e) {
            return [_.u(e, 1), e]
        }));
        b = _.A(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = a.get(_.u(c, 1));
            d ? au(d, Math.max(Zt(c, 2), Zt(d, 2))) : a.set(_.u(c, 1), c)
        }
        return _.x(Array, "from").call(Array, _.x(a, "values").call(a))
    };
    fu = function(a, b, c, d, e) {
        if (cu(b, c, d, e)) return new _.B.Map;
        c = new _.B.Map(_.x(Object, "entries").call(Object, b).filter(function(l) {
            var m = _.A(l);
            l = m.next().value;
            m = m.next().value;
            return _.x(l, "startsWith").call(l, "gads_privacy_sandbox_td_buyerlist__") && m
        }).map(function(l) {
            var m = _.A(l);
            l = m.next().value;
            m = m.next().value;
            return [l, du(m)]
        }));
        d = _.A(c);
        for (e = d.next(); !e.done; e = d.next()) {
            var f = _.A(e.value);
            e = f.next().value;
            f = f.next().value;
            var h = eu(f),
                k = $t(h, a);
            k.length === 0 ? (c.delete(e), b.removeItem(e)) : k.length < h.length && (_.qm(f, 1, k), b.setItem(e, cl(f)))
        }
        return c
    };
    gu = function(a, b, c) {
        return c ? String(_.ph(b + "-" + cl(a))) : String(_.ph(b + "-" + _.u(a, 2) + _.u(a, 4) + ("" + _.Q(a, 3))))
    };
    cu = function(a, b, c, d) {
        if (!_.Q(b, 3) && !c) return !1;
        b = gu(b, d, c);
        if (a.getItem("gads_privacy_sandbox_tcf_hash") === b) return !1;
        c = _.A(_.x(Object, "keys").call(Object, a).filter(function(e) {
            return _.x(e, "startsWith").call(e, "gads_privacy_sandbox_td_buyerlist__")
        }));
        for (d = c.next(); !d.done; d = c.next()) a.removeItem(d.value);
        a.setItem("gads_privacy_sandbox_tcf_hash", b);
        return !0
    };
    hu = function(a) {
        return a !== null && _.x(Number, "isFinite").call(Number, a) && a >= 0
    };
    lu = function(a) {
        var b = _.I(iu),
            c = a.navigator;
        a = lh(a.isSecureContext, a.navigator, a.document);
        b = !b && a;
        a = _.yh(ju);
        var d = !!c.getInterestGroupAdAuctionData;
        c = _.I(ku) && !!c.createAuctionNonce;
        return {
            si: b,
            md: a,
            Qn: d,
            Ei: c
        }
    };
    mu = function(a) {
        return (_.F = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"], _.x(_.F, "includes")).call(_.F, a)
    };
    ou = function(a, b, c, d, e) {
        if (b) {
            var f = b.md,
                h = b.Qn;
            if (b.si && f === 4) {
                b = new Cq;
                f = new Cq;
                if (!h) return b.G({
                    kind: 1,
                    reason: 1
                }), f.G(!1), {
                    Yk: {
                        Ak: b,
                        Lj: f
                    }
                };
                h = new jk;
                a = new nu(a, c, d, e, b, f);
                J(h, a);
                h.run();
                return {
                    Yk: {
                        Ak: b,
                        Lj: f
                    },
                    Eo: h
                }
            }
        }
    };
    qu = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            e = _.Q(c, 18),
            f = _.Q(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = _.u(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        _.Q(c, 4) && (d += "&is_plog=1");
        (e = _.u(c, 11)) && (d += "&ecrs=" + e);
        if (c == null ? 0 : _.u(c, 19)) d += "&cid=" + encodeURIComponent(_.u(c, 19));
        (c == null ? 0 : _.Q(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + b + ("&duration_ms=" + Math.round(a));
        pu(d)
    };
    vu = function(a) {
        var b = a.Jg,
            c = a.Nb,
            d = a.Dd === void 0 ? [] : a.Dd,
            e = a.interestGroupBuyers,
            f = a.Nm,
            h = a.zm,
            k = a.xl,
            l = a.Sn,
            m = a.sellerTimeout;
        a = a.auctionNonce;
        var n = {};
        f !== void 0 && (n["https://googleads.g.doubleclick.net"] = f, n["https://td.doubleclick.net"] = f);
        if (h) {
            h = _.A(h);
            for (var p = h.next(); !p.done; p = h.next()) {
                var q = _.A(p.value);
                p = q.next().value;
                q = q.next().value;
                n[p] = q
            }
        }
        e = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            trustedScoringSignalsUrl: "https://securepubads.g.doubleclick.net/td/sts",
            interestGroupBuyers: e != null ? e : ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"],
            sellerExperimentGroupId: f,
            auctionSignals: b.auctionSignals.promise,
            sellerSignals: b.g.promise,
            sellerTimeout: m,
            sellerCurrency: "USD",
            perBuyerCurrencies: b.perBuyerCurrencies.promise,
            perBuyerExperimentGroupIds: n,
            perBuyerSignals: b.perBuyerSignals.promise,
            perBuyerTimeouts: b.perBuyerTimeouts.promise,
            perBuyerCumulativeTimeouts: b.perBuyerCumulativeTimeouts.promise,
            reportingTimeout: 5E3
        };
        a && (e.auctionNonce = a, e.additionalBids = b.o.promise);
        e.deprecatedRenderURLReplacements = b.deprecatedRenderURLReplacements.promise;
        ru(e.interestGroupBuyers, k) && (e.auctionReportBuyerKeys = e.interestGroupBuyers.map(su), e.auctionReportBuyers = tu(l), e.auctionReportBuyerDebugModeConfig = uu());
        e.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        c = {
            seller: "https://securepubads.g.doubleclick.net",
            decisionLogicUrl: "https://securepubads.g.doubleclick.net/td/sjs",
            interestGroupBuyers: [],
            auctionSignals: {},
            sellerExperimentGroupId: f,
            sellerSignals: b.topLevelSellerSignals.promise,
            sellerTimeout: m,
            signal: c.signal,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            perBuyerCumulativeTimeouts: {},
            componentAuctions: [e].concat(_.aj(d)),
            resolveToConfig: b.resolveToConfig.promise
        };
        c.directFromSellerSignalsHeaderAdSlot = b.directFromSellerSignalsHeaderAdSlot.promise;
        return c
    };
    wu = function(a, b) {
        var c = b.Jg;
        c.topLevelSellerSignals.resolve(a.sellerSignals);
        c.directFromSellerSignals.resolve(a.directFromSellerSignals);
        c.directFromSellerSignalsHeaderAdSlot.resolve(a.directFromSellerSignalsHeaderAdSlot);
        c.resolveToConfig.resolve(!!a.resolveToConfig);
        var d;
        a = (d = a.componentAuctions) == null ? void 0 : _.x(d, "find").call(d, function(n) {
            return mu(n.seller)
        });
        var e;
        d = (e = a == null ? void 0 : a.perBuyerCumulativeTimeouts) != null ? e : {};
        b = _.A(b.interestGroupBuyers);
        for (e = b.next(); !e.done; e = b.next()) {
            e = e.value;
            var f = void 0,
                h = void 0;
            ((f = a) == null ? 0 : (h = f.interestGroupBuyers) == null ? 0 : _.x(h, "includes").call(h, e)) || (d[e] = 0)
        }
        c.o.resolve();
        if (a) {
            c.auctionSignals.resolve(a.auctionSignals);
            c.g.resolve(a.sellerSignals);
            c.perBuyerSignals.resolve(a.perBuyerSignals);
            var k;
            c.perBuyerTimeouts.resolve((k = a.perBuyerTimeouts) != null ? k : {});
            c.perBuyerCumulativeTimeouts.resolve(d);
            var l;
            c.perBuyerCurrencies.resolve((l = a.perBuyerCurrencies) != null ? l : {});
            var m;
            c.deprecatedRenderURLReplacements.resolve((m = a.deprecatedRenderURLReplacements) != null ? m : {})
        } else c.auctionSignals.resolve(void 0), c.g.resolve(void 0), c.perBuyerSignals.resolve({}), c.perBuyerTimeouts.resolve({}), c.perBuyerCumulativeTimeouts.resolve(d), c.perBuyerCurrencies.resolve({}), c.deprecatedRenderURLReplacements.resolve({})
    };
    ru = function(a, b) {
        return a.some(function(c) {
            return su(c) !== BigInt(100)
        }) && (b != null ? b : !1)
    };
    su = function(a) {
        var b;
        return (b = (new _.B.Map([
            ["https://googleads.g.doubleclick.net", BigInt(200)],
            ["https://td.doubleclick.net", BigInt(300)],
            ["https://f.creativecdn.com", BigInt(400)],
            ["https://fledge.us.criteo.com", BigInt(500)],
            ["https://fledge.eu.criteo.com", BigInt(600)],
            ["https://fledge.as.criteo.com", BigInt(700)],
            ["https://fledge-buyer-testing-1.uc.r.appspot.com", BigInt(800)]
        ])).get(a)) != null ? b : BigInt(100)
    };
    tu = function(a) {
        var b = {
            interestGroupCount: {
                bucket: BigInt(0),
                scale: 1
            },
            bidCount: {
                bucket: BigInt(1),
                scale: 1
            }
        };
        a || (b.totalGenerateBidLatency = {
            bucket: BigInt(2),
            scale: 1
        }, b.totalSignalsFetchLatency = {
            bucket: BigInt(3),
            scale: 1
        });
        return b
    };
    uu = function() {
        var a = a === void 0 ? BigInt(0) : a;
        return {
            enabled: !0,
            debugKey: a
        }
    };
    yu = function(a, b) {
        if (!hu(b)) return [];
        var c = Math.round(b);
        return a.map(function(d) {
            var e = new xu;
            d = _.Hi(e, 1, d);
            return au(d, c)
        })
    };
    zu = function(a, b, c, d, e) {
        a.ec.G(e);
        a.Ia.G(c);
        a.Ka.G(d);
        b == null || b.G(!1)
    };
    Hu = function(a, b) {
        var c, d, e, f, h, k, l, m, n, p, q, t, w, v;
        return _.vf(function(y) {
            if (y.g == 1) return (typeof a !== "string" || _.x(a, "startsWith").call(a, "urn:")) && Au.deprecatedURNToURL && Au.deprecatedReplaceInURN ? y.yield(Au.deprecatedURNToURL(a), 2) : y.return();
            c = y.o;
            d = {};
            e = b.gdprApplies || "";
            ((f = c.match(Bu)) != null ? f : []).forEach(function(z) {
                d[z] = e
            });
            h = b.Ff || "";
            ((k = c.match(Cu)) != null ? k : []).forEach(function(z) {
                d[z] = h
            });
            l = b.Fi || "";
            ((m = c.match(Du)) != null ? m : []).forEach(function(z) {
                d[z] = l
            });
            n = b.Ci || "";
            ((p = c.match(Eu)) != null ? p : []).forEach(function(z) {
                d[z] = n
            });
            q = b.Ai || "";
            ((t = c.match(Fu)) != null ? t : []).forEach(function(z) {
                d[z] = q
            });
            w = b.Bk || "";
            ((v = c.match(Gu)) != null ? v : []).forEach(function(z) {
                d[z] = w
            });
            return y.yield(Au.deprecatedReplaceInURN(a, d), 0)
        })
    };
    Ju = function(a, b) {
        var c, d, e, f, h;
        return _.vf(function(k) {
            if (typeof a === "string" && !_.x(a, "startsWith").call(a, "urn:") || !Au.deprecatedReplaceInURN) return k.return();
            c = {};
            c["${GDPR}"] = b.gdprApplies || "";
            c["${ADDTL_CONSENT}"] = b.Fi || "";
            c["${AD_WIDTH}"] = b.Ci || "";
            c["${AD_HEIGHT}"] = b.Ai || "";
            c["${RENDER_DATA}"] = b.Bk || "";
            if (b.Gg == null || _.Q(b.Gg, 4))
                for (d = 0; d <= 2E3; d++) c["${GDPR_CONSENT_" + String(d) + "}"] = b.Ff || "";
            else {
                c["${GDPR_CONSENT_0}"] = b.Ff || "";
                var l = Iu(b.Gg, 3);
                e = _.A(l);
                for (f = e.next(); !f.done; f = e.next()) h = f.value, c["${GDPR_CONSENT_" + String(h) + "}"] = b.Ff || ""
            }
            return k.yield(Au.deprecatedReplaceInURN(a, c), 0)
        })
    };
    Ku = function(a) {
        return typeof FencedFrameConfig === "function" && a instanceof FencedFrameConfig
    };
    av = function(a) {
        var b = a.rm;
        var c = a.Al;
        var d = a.Nn;
        var e = a.Om;
        a = a.bb;
        if (typeof c === "string" || Ku(c)) c = 4;
        else switch (c) {
            case null:
                c = 5;
                break;
            case 2:
                c = 1;
                break;
            case 3:
                c = 3;
                break;
            case 1:
                c = 2;
                break;
            case 4:
            case 0:
                c = 0;
                break;
            default:
                c = 0
        }
        var f = new Lu;
        c = _.K(f, 3, c);
        d = _.Hi(c, 2, d);
        b = _.ul(d, 1, b);
        e !== void 0 && _.Hi(b, 4, e);
        e = new Mu;
        a !== void 0 && _.ul(e, 1, a);
        _.vl(e, 3, Nu, b);
        return e
    };
    bv = function(a, b, c, d, e, f, h, k) {
        var l = b === 3,
            m = b === 2,
            n = b === 1,
            p = f.getEscapedQemQueryId(),
            q = _.u(f, 6);
        Xp("run_ad_auction_stats", function(t) {
            mp(t, a);
            np(t, "duration_ms", c);
            np(t, "applied_timeout_ms", d);
            np(t, "timed_out", m ? 1 : 0);
            np(t, "error", l ? 1 : 0);
            np(t, "auction_skipped", n ? 1 : 0);
            np(t, "auction_winner", k ? 1 : 0);
            np(t, "thread_release_only", _.Q(f, 15) ? 1 : 0);
            np(t, "winner_qid", p != null ? p : "");
            np(t, "xfpQid", q != null ? q : "");
            np(t, "publisher_tag", "gpt");
            e && np(t, "parallel", "1");
            h > 0 && np(t, "nc", h)
        }, 1)
    };
    cv = function(a, b, c, d, e) {
        var f = e.getEscapedQemQueryId(),
            h = _.u(e, 6);
        Xp("run_ad_auction_complete", function(k) {
            mp(k, a);
            np(k, "duration_ms", Math.round(d));
            np(k, "applied_timeout_ms", c);
            np(k, "auction_has_winner", b);
            f && np(k, "winner_qid", f);
            h && np(k, "xfpQid", h)
        }, 1)
    };
    dv = function(a, b) {
        var c = b.getEscapedQemQueryId(),
            d = _.u(b, 6);
        Xp("pre_run_ad_auction_ping", function(e) {
            mp(e, a);
            np(e, "winner_qid", c != null ? c : "");
            np(e, "xfpQid", d != null ? d : "");
            np(e, "publisher_tag", "gpt")
        }, 1)
    };
    kv = function(a, b, c, d) {
        var e = Vm(a, document);
        e && qi(e, window, d, !0);
        ev(_.fh(El), "5", fv(c.W[a.getDomId()], 20));
        gv(a, hv, 801, {
            bj: null,
            isBackfill: !1
        });
        if (_.iv(b, a) && !qn(a, document)) {
            b = c.X;
            c = c.W[a.getDomId()];
            var f;
            ((f = Hq(c, 10)) != null ? f : _.Q(b, 11)) && wr(a, document, c, b)
        }
        gv(a, jv, 825, {
            isEmpty: !0
        })
    };
    mv = function(a) {
        if (!_.I(lv)) return null;
        var b = new _.B.Set;
        a = _.A(_.x(a, "values").call(a));
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, _.Q(c, 2) && eu(c).forEach(function(d) {
            b.add(_.u(d, 1))
        });
        return b.size > 0 ? _.x(Array, "from").call(Array, b) : null
    };
    ov = function(a, b, c, d, e, f, h, k, l, m) {
        if (b) {
            var n = b.md;
            if (b.si && n !== 0) return b = new jk, a = new nv(a, n, c, d, e, f, h, k, l, m), J(b, a), b.run(), {
                Do: a.j,
                Co: b
            }
        }
    };
    qv = function() {
        for (var a = _.A(_.x(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            b = c;
            var d = c.src;
            if (d && (d.indexOf("/tag/js/gpt.js") != -1 || d.indexOf("/tag/js/gpt_mobile.js") != -1) && !b.googletag_executed && c.textContent) {
                b.googletag_executed = !0;
                b = document.createElement("script");
                c = c.textContent;
                c = new pv(c);
                if (c instanceof pv) c = c.g;
                else throw Error("");
                b.textContent = c;
                fb(b);
                document.head.appendChild(b);
                document.head.removeChild(b)
            }
        }
    };
    rv = function(a, b) {
        b = _.A(_.x(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.A(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    uv = function(a, b, c) {
        var d = [];
        c = [].concat(_.aj(c.V)).slice();
        if (b) {
            if (!Array.isArray(b)) return P(a, Wl("googletag.destroySlots", [b])), !1;
            Na(b);
            d = c.filter(function(e) {
                return _.x(b, "includes").call(b, e.g)
            })
        } else d = c;
        if (!d.length) return !1;
        sv(d);
        tv(d);
        return !0
    };
    Lv = function(a, b, c, d, e, f, h, k, l, m) {
        var n = Mo(),
            p, q, t = N(a, 74, function(v, y, z) {
                return e.defineSlot(a, b, v, y, z)
            }),
            w = {};
        t = (w._loaded_ = !0, w.cmd = [], w._vars_ = n._vars_, w.evalScripts = function() {
            try {
                qv()
            } catch (z) {
                Gl(a, 297, z);
                var v, y;
                (v = window.console) == null || (y = v.error) == null || y.call(v, z)
            }
        }, w.display = N(a, 95, function(v) {
            vv(c, v, e)
        }), w.defineOutOfPageSlot = N(a, 73, function(v, y) {
            return (v = tr(a, b, e, {
                ij: y,
                adUnitPath: v
            })) ? v.g : null
        }), w.getVersion = N(a, 946, function() {
            return a.If
        }), w.pubads = N(a, 947, function() {
            return yo(a, b, c, e, k)
        }), w.companionAds = N(a, 816, function() {
            p != null || (p = new wv(a, b, c, f));
            return Zl(a, b, p)
        }), w.content = N(a, 817, function() {
            q != null || (q = new xv(a, b, h));
            return am(a, b, q)
        }), w.setAdIframeTitle = N(a, 729, qt), w.getEventLog = N(a, 945, function() {
            return new yv(a, b)
        }), w.sizeMapping = N(a, 90, function() {
            return new zv(a, b)
        }), w.enableServices = N(a, 91, function() {
            for (var v = _.A(Av), y = v.next(); !y.done; y = v.next()) y = y.value, y.enabled && b.info(Bv()), Cv(y)
        }), w.destroySlots = N(a, 75, function(v) {
            return uv(b, v, e)
        }), w.enums = xn(), w.defineSlot = t, w.defineUnit = t, w.getWindowsThatCanCommunicateWithHostpageLibrary = N(a, 955, function(v) {
            return Dv(l, v).map(function(y) {
                var z;
                return (z = qn(y, document)) == null ? void 0 : z.contentWindow
            }).filter(function(y) {
                return !!y
            })
        }), w.disablePublisherConsole = N(a, 93, tp), w.onPubConsoleJsLoad = N(a, 731, wp), w.openConsole = N(a, 732, function(v) {
            op = !0;
            var y;
            ((y = Mo()) == null ? 0 : y.console) ? Mo().console.openConsole(v): (v && (vp = v), up = !0, ip(a))
        }), w.setConfig = N(a, 1034, function(v) {
            if (Eg(v)) {
                if (_.x(Object, "hasOwn").call(Object, v, "pps")) {
                    var y = v.pps;
                    if (y === null) {
                        var z = _.Ji(d, Pt, 33);
                        _.ek(z, 2)
                    } else {
                        z = _.Ji(_.Ji(d, Pt, 33), Ev, 2);
                        _.ek(z, 1);
                        if (Eg(y) && y.hasOwnProperty("taxonomies")) var G = !0;
                        else P(b, Wl("googletag.setConfig.pps", [y])), G = !1;
                        if (G)
                            if (G = y.taxonomies, Eg(G) && G !== null) {
                                var C;
                                _.x(Object, "keys").call(Object, G).some(Fs) ? C = Qs : Bs(G, b, y) && (C = Es);
                                if (C) {
                                    y = _.A(_.x(Object, "entries").call(Object, G));
                                    for (var H = y.next(); !H.done; H = y.next()) {
                                        var L = _.A(H.value);
                                        H = L.next().value;
                                        L = L.next().value;
                                        C(H, L, z, b, G)
                                    }
                                }
                            } else As("taxonomies", G, b, y)
                    }
                }
                _.x(Object, "hasOwn").call(Object, v, "adExpansion") && (_.ek(d, 34), z = v.adExpansion, !Fv(z)) && (Eg(z) ? _.x(Object, "hasOwn").call(Object, z, "enabled") && (z = z.enabled, Gv(z) ? (z = Hv(z), _.ol(d, 34, z)) : P(b, Wl("googletag.setConfig.adExpansion.enabled", [z]))) : P(b, Wl("googletag.setConfig.adExpansion", [z])));
                _.x(Object, "hasOwn").call(Object, v, "headerBidding") && (z = v.headerBidding, !Fv(z) && Eg(z) && _.x(Object, "hasOwn").call(Object, z, "enableHeaderBiddingTraffickingPrebidIntegration") && (z = z.enableHeaderBiddingTraffickingPrebidIntegration, Gv(z) && _.dk(d, 38, z)));
                if (_.x(Object, "hasOwn").call(Object, v, "privacyTreatments")) {
                    z = v.privacyTreatments;
                    _.ek(d, 36);
                    a: {
                        if (z !== null && Eg(z) && _.x(Object, "hasOwn").call(Object, z, "treatments")) {
                            z = z.treatments;
                            if (Iv(z) && z.every(Vs)) {
                                z = {
                                    treatments: z
                                };
                                break a
                            }
                            P(b, Wl("googletag.setConfig", [z]))
                        }
                        z = void 0
                    }
                    C = z;
                    if (C !== void 0) {
                        z = new _.B.Set;
                        C = _.A(C.treatments);
                        for (G = C.next(); !G.done; G = C.next()) {
                            G = G.value;
                            a: {
                                switch (G) {
                                    case "disablePersonalization":
                                        y = 1;
                                        break a
                                }
                                y = void 0
                            }
                            y === void 0 ? P(b, Wl("googletag.setConfig", [G])) : z.add(y)
                        }
                        z.size && (C = new Jv, z = _.ne(C, 1, _.wc, z), _.ol(d, 36, z))
                    }
                }
                if (_.I(Kv) && _.x(Object, "hasOwn").call(Object, v, "adYield")) switch (_.ek(_.Ji(d, Pt, 33), 3), v = v.adYield, v) {
                    case null:
                        break;
                    case "ENABLED_ALL_SLOTS":
                        v = _.Ji(d, Pt, 33);
                        z = new Qt;
                        z = _.dk(z, 2, !0);
                        _.ol(v, 3, z);
                        break;
                    case "DISABLED":
                        v = _.Ji(d, Pt, 33);
                        z = new Qt;
                        z = _.dk(z, 1, !0);
                        _.ol(v, 3, z);
                        break;
                    default:
                        P(b, Wl("googletag.setConfig.adYield", [v]))
                }
            } else P(b, Wl("googletag.setConfig", [v]))
        }), w.apiReady = !0, w);
        tt(a, n, b, m);
        rv(n, t)
    };
    Rv = function(a, b) {
        var c = new jk;
        a = new Mv(a, b);
        J(c, a);
        a = Nv(Ov(c.g(Pv, {
            config: a.j
        }), _.yh(Qv)), a.j);
        c.run();
        return {
            Pi: a.fb,
            Qj: a.Cc,
            oj: a.Vc,
            rj: a.ve,
            Fd: a.ue,
            wk: a.qd,
            vq: a.ji,
            bf: a.xi,
            te: a.se,
            Ze: a.ri,
            Qd: a.Pd,
            nq: c
        }
    };
    ew = function(a, b, c, d, e, f, h, k, l, m) {
        l = new jk;
        var n = new Sv(a, b);
        n = J(l, n).output;
        var p = ys(a, b),
            q = jt(a);
        b = lu(b);
        if (h) {
            var t = Rv(a, h),
                w = t.wk,
                v = t.oj,
                y = t.rj,
                z = t.Qj,
                G = t.Pi;
            var C = t.Fd;
            var H = t.bf,
                L = t.te,
                S = t.Ze;
            t = t.Qd;
            var M, da = new Tv(a, document, Mo(), c, d, e, (M = window.location.hash) != null ? M : "");
            J(l, da);
            c = new Uv(a, Mo(), null, c, d, e, w);
            J(l, c);
            d = new Vv(a, v);
            J(l, d);
            m = new Wv(a, window, z, m);
            J(l, m);
            if (k = Eq(a, k, G)) var Z = k.Qi;
            h = Jr(a, h, m.bc);
            M = h.Zg;
            _.Gr(l, h.Wa);
            h = new Xv(a, M);
            J(l, h);
            k = new Yv(a, M);
            J(l, k);
            e = cp(a, e, f, window, M, 2).xb;
            if (_.I(Zv)) {
                f = new $v(a, window.navigator, e);
                var U = f.j;
                J(l, f)
            }
            f = void 0;
            _.I(aw) && (y = new bw(a, window, e, y), f = y.output, J(l, y));
            if (y = wt(a, C, e)) var pa = y.Xd;
            y = Vt(a, n, e);
            _.I(cw) && l.g(dw, {}, {
                C: window,
                context: a
            });
            C = {
                Kc: Z,
                Xd: pa,
                kk: m.bc,
                sf: d.output,
                zb: c.zb,
                Fd: C,
                Gd: h.Gd,
                wj: k.j,
                bf: H,
                Ye: y,
                Wg: f,
                Zi: U,
                te: L,
                Ze: S,
                Qd: t,
                xb: e
            }
        }
        l.run();
        return {
            rk: p,
            uk: q,
            uf: n,
            Xk: b,
            ke: Kq(),
            rb: C
        }
    };
    gw = function(a, b, c, d, e, f, h, k, l, m) {
        l = new jk;
        var n = new Sv(a, b);
        n = J(l, n).output;
        var p = ys(a, b),
            q = jt(a);
        b = lu(b);
        var t, w = new Tv(a, document, Mo(), c, d, e, (t = window.location.hash) != null ? t : "");
        J(l, w);
        if (h) {
            var v = Rv(a, h);
            c = new Uv(a, Mo(), null, c, d, e, v.wk);
            J(l, c);
            d = new Vv(a, v.oj);
            J(l, d);
            m = new Wv(a, window, v.Qj, m);
            J(l, m);
            k = Eq(a, k, v.Pi);
            v = _.x(Object, "assign").call(Object, {}, v, {
                zb: c.zb,
                sf: d.output,
                bc: m.bc,
                Kc: k == null ? void 0 : k.Qi
            })
        }
        var y;
        h = Jr(a, h, (y = v) == null ? void 0 : y.bc);
        k = h.Zg;
        _.Gr(l, h.Wa);
        y = new Xv(a, k);
        J(l, y);
        h = new Yv(a, k);
        J(l, h);
        e = cp(a, e, f, window, k, 2).xb;
        if (_.I(Zv)) {
            f = new $v(a, window.navigator, e);
            var z = f.j;
            J(l, f)
        }
        f = void 0;
        _.I(aw) && v && (k = new bw(a, window, e, v.rj), f = k.output, J(l, k));
        if (v) {
            if (k = wt(a, v.Fd, e)) var G = k.Xd;
            _.I(fw) && l.g(dw, {}, {
                C: window,
                context: a
            })
        }
        a = Vt(a, n, e);
        var C;
        v && (C = {
            Kc: v.Kc,
            Xd: G,
            kk: v.bc,
            sf: v.sf,
            zb: v.zb,
            Fd: v.Fd,
            Gd: y.Gd,
            wj: h.j,
            bf: v.bf,
            Ye: a,
            Wg: f,
            Zi: z,
            te: v.te,
            Ze: v.Ze,
            Qd: v.Qd,
            xb: e
        });
        l.run();
        return {
            rk: p,
            uk: q,
            uf: n,
            Xk: b,
            ke: Kq(),
            rb: C
        }
    };
    hw = function(a) {
        if (!a) return a;
        var b = a.toString().toLowerCase();
        return b.indexOf("<!doctype") > -1 || b.indexOf("<html") > -1 ? a : Lj("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + a + "</body></html>")
    };
    iw = function(a, b, c, d, e) {
        return c && e != null && d ? Jq(a, b) ? Math.floor((c.offsetHeight - d) / 2) : 0 : 0
    };
    jw = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver && new IntersectionObserver(a, b)
    };
    fx = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, y, z, G, C) {
        var H = new jk,
            L = Cm(!0, window),
            S = l.X,
            M = l.W[e.getDomId()],
            da = G.uf,
            Z = G.ke.Md,
            U, pa = (U = G.rb) == null ? void 0 : U.Ye,
            ka = new kw(a, window);
        J(H, ka);
        var Da = n.height,
            ya = n.width,
            Fa = n.ac,
            zb = n.pb,
            $a = n.ge,
            Ra = n.isBackfill,
            Db = n.Db,
            Ha = n.Km,
            Ob = n.Ua,
            dd = n.vc,
            Rc = n.vi,
            Sc = n.mh,
            Sd = n.tc,
            of = n.Jf,
            mg = n.Zb,
            ng = n.wa,
            pf = n.ga,
            gj = n.qd,
            rh = n.Tl,
            hj = n.Ag,
            og = new Cq;
        og.G(q);
        var qf = new lw(a, window.top, og);
        J(H, qf);
        var rf = new mw(a, cr(M), L.height, Ob, Da);
        J(H, rf);
        var cn = new nw(a, e, Vm(e, p), e.getDomId(), nn(e), p.documentElement, cr(M), k, f);
        ow(H, cn);
        var uc = cn.output,
            jj = new pw(a, ng, $a, Ra, Db);
        J(H, jj);
        var Be = new qw(window.location.hash, L, e.getAdUnitPath(), M, f, rf.output, dd, ya, Da, jj.output, uc);
        ow(H, Be);
        var kj = Be.B;
        if (_.I(rw)) {
            var th = new sw(window, window.location.hash, Ob, Be.B.Ia, Be.B.Ka);
            ow(H, th);
            var uh = th.B.Ia;
            var vh = th.B.Ka
        } else uh = Be.B.Ia, vh = Be.B.Ka;
        var sf = new tw(a, S, M, $a, Db, kj.Xm);
        J(H, sf);
        var dn = qf.output,
            en = uh,
            fn = vh;
        if (lh(window.isSecureContext, window.navigator, window.document) && !_.I(iu) && h) {
            var lj = {
                    gg: new at,
                    Ia: new Cq,
                    Ka: new Cq,
                    Kd: new Cq
                },
                wh = new jk;
            J(wh, new uw(a, e, dn, M, k, q, f, en, fn, uc, t, l, z, zb, pf, lj, w, C));
            wh.run();
            var mj = {
                Wa: wh,
                Fo: lj
            }
        } else mj = void 0;
        var xh = mj;
        if (xh) {
            _.Gr(H, xh.Wa);
            var pg = xh.Fo
        }
        var nj, oj, pj = (oj = (nj = pg) == null ? void 0 : nj.Ia) != null ? oj : uh,
            qj, rj, Td = (rj = (qj = pg) == null ? void 0 : qj.Ka) != null ? rj : vh,
            sj, Tc = (sj = pg) == null ? void 0 : sj.gg,
            tj, gn = (tj = pg) == null ? void 0 : tj.Kd;
        if (_.I(vw)) var ed = H.g(ww, {
            Vb: uc,
            Db: sf.output,
            size: Td
        }, e, cr(M), Fa, p, k, S, M, l.qc, H).yb;
        else {
            var uj = new xw(a, e, S, M, cr(M), p, k, uc, sf.output, Td, Fa, Tc, l.qc);
            J(H, uj);
            ed = uj.output
        }
        if (_.I(yw)) var vj = ow(H, new zw(a, e, k, S, M, d, L, ed, Tc)).B;
        else {
            var wj = H.g(Aw, {}, _.wm(S, Bw, 5), M, d).hd,
                zh = H.g(Cw, {
                    measuringElement: ed
                }).ae,
                Ah = H.l(Dw, {
                    ae: zh,
                    hd: wj
                }, e, k, L, a, H);
            Tc && Xr(Ah, Tc);
            var Bh = Xr(H.l(Ew, {
                yb: ed,
                Ck: wj
            }, a, H), Ah.complete);
            Tc && Xr(Bh, Tc);
            vj = Bh.complete
        }
        var db = vj,
            Ch = new Fw(a, window, L, e, M, uc, ed, Fa, Td, kj.Il, zb);
        ow(H, Ch);
        var xj = new Gw(a, S, M, Rc, pj, sf.output);
        J(H, xj);
        var hn = new Hw(a, window, mg, ka.output, Tc);
        J(H, hn);
        var jn = new Iw(a, cr(M), p);
        J(H, jn);
        var qg = new Jw(a, y, cr(M), Ob, Ha, Tc);
        J(H, qg);
        var Ms = new Kw(a, Sc, gn, og, Tc);
        J(H, Ms);
        var Ns = window;
        if (_.I(Yk) && pa) {
            var yj = new jk;
            J(yj, new Lw(a, Ns, hj, pa));
            yj.run();
            var kn = yj
        } else kn = void 0;
        var ln = kn;
        ln && _.Gr(H, ln);
        var Ps = H.l(Mw, {}, {
                context: a,
                O: l,
                slotId: e
            }).complete,
            pc = new Nw(a, e, k, d, l, v, m, Fa, zb, Ra, Sd, pf, window, pj, sf.output, db, uc, ed, Td, xj.output, Ch.gg, hn.output, jn.output, qg.output, da, Tc, Ps);
        J(H, pc);
        var Ss = new Ow(a, window, e, pc.A, og);
        J(H, Ss);
        var mn = cr(M);
        switch (mn) {
            case 2:
            case 3:
                _.I(Pw) ? J(H, new Qw(a, k, cr(M), e, window, Ob, pc.j, uc, qg.output, Td, qf.output)) : J(H, new Rw(a, k, cr(M), e, window, Ob, pc.j, uc, qg.output, Td, qf.output));
                break;
            case 5:
                J(H, new Sw(a, e, l.No, Ha, p, pc.j, uc, qf.output, qg.output, z));
                break;
            case 4:
                var on = new Tw(a, e, v, window, pc.j, uc);
                _.Gr(H, on);
                on.run();
                break;
            case 7:
                ow(H, is(a, e, v, pc.j, uc));
                break;
            case 8:
            case 9:
                var Ws = pc.j,
                    Xs = ed,
                    Ys = window,
                    rg = new jk,
                    Zs = mn === 8 ? 3 : 4,
                    pn = new Uw(a, y);
                J(rg, pn);
                J(rg, new Vw(a, Ys, Zs, pn.output, Ws, Xs, Td));
                rg.run();
                rg && _.Gr(H, rg)
        }
        var ct = new Ww(a, e, pc.j, p, v);
        J(H, ct);
        var zj = new Xw(a, e, Yw(k, e), window.top);
        J(H, zj);
        var ft = pc.j,
            sg = new jk,
            gt = J(sg, new $r(a, e, Zw)),
            ht = J(sg, new $w(a, p, ft, gt.output));
        J(sg, new ax(a, ht.output, v, e));
        sg.run();
        _.Gr(H, sg);
        var lt = new bx(a, Yw(k, e), window.top, pc.j, ka.output, zj.output, zj.j);
        J(H, lt);
        J(H, new cx(a, e, Fa, $a, pc.j, ed, pc.F));
        var ot = new dx(a, window, of , pc.j, ed, uc);
        J(H, ot);
        var pt = Mo(),
            Aj = new jk,
            rt = new ex(a, p, pt, S, c, b, d, Z, rh);
        J(Aj, rt);
        Aj.run();
        _.Gr(H, Aj);
        var Bj = new Cq;
        Bj.G(gj);
        J(H, new Uv(a, Mo(), S, b, c, d, Bj));
        return H
    };
    hx = function(a, b, c) {
        var d = null;
        try {
            var e = Or(b.top.document, b.top).y;
            d = a.map(function(f) {
                var h = c.X,
                    k = c.W[f.getDomId()];
                h = Iq(h, k);
                var l;
                f = (l = an(f, k, b.document, h)) == null ? void 0 : l.y;
                l = Cm(!0, b).height;
                return f === void 0 || f === -12245933 || l === -12245933 ? -1 : f < e + l ? 0 : ++gx
            })
        } catch (f) {}
        return d
    };
    px = function(a) {
        return Il(a.ma.context, 1132, function() {
            if (a.ja.V.length) {
                var b = new _.B.Set(Eh(ix));
                var c = a.ma.aa;
                c = _.I(jx) && _.Q(c, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id".split(" ") : [];
                c = _.A(c);
                for (var d = c.next(); !d.done; d = c.next()) b.add(d.value);
                d = new _.B.Map;
                c = _.A(kx);
                for (var e = c.next(); !e.done; e = c.next()) e = e.value, e(a, d);
                c = "https://" + (lx(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
                d = _.A(d);
                for (e = d.next(); !e.done; e = d.next()) {
                    var f = _.A(e.value);
                    e = f.next().value;
                    var h = f.next().value;
                    f = h.value;
                    h = h.options === void 0 ? {} : h.options;
                    (new RegExp("[?&]" + e + "=")).test(c);
                    if (!b.has(e) && f != null) {
                        var k = h.Ga === void 0 ? !1 : h.Ga;
                        if (f = typeof f !== "object" ? f == null || !k && f === 0 ? null : encodeURIComponent(f) : Array.isArray(f) && f.length ? mx(f, h) : null) c[c.length - 1] !== "?" && (c += "&"), c += e + "=" + f
                    }
                }
                if (_.yh(nx) === 1 || _.yh(nx) === 2) b = _.yh(ox), b = b <= 0 ? "" : (_.F = _.x(Array, "from").call(Array, {
                    length: Math.ceil(b / 8)
                }), _.x(_.F, "fill")).call(_.F, "testdata").join("").substring(0, b), _.yh(nx) === 2 && (c += "&dblt=" + b);
                b = c
            } else b = "";
            return b
        })
    };
    lx = function(a) {
        var b = a.ma.aa,
            c, d;
        a = (d = (c = qx(a.ja.O.X)) == null ? void 0 : _.Q(c, 9)) != null ? d : !1;
        c = _.I(jx) && _.Q(b, 8);
        return a || c || !Ug(b)
    };
    mx = function(a, b) {
        var c = b.Za === void 0 ? "," : b.Za,
            d = b.pe === void 0 ? "" : b.pe,
            e = b.Ga === void 0 ? !1 : b.Ga,
            f = !1;
        a = a.map(function(h) {
            f || (f = !!h);
            return String(h === 0 && e ? h : h || d)
        });
        return f || e ? encodeURIComponent(a.join(c)) : null
    };
    tx = function() {
        var a = _.yh(rx);
        switch (a) {
            case 0:
                return na() && sx(window.fetch) && sx(window.TextDecoderStream);
            case 1:
                return na() && sx(window.fetch) && !!window.TextDecoderStream;
            case 2:
                return na() && !!window.fetch && !!window.TextDecoderStream;
            case 3:
                return !ma() && sx(window.fetch) && !!window.TextDecoderStream;
            case 4:
                return !ma() && !!window.fetch && !!window.TextDecoderStream;
            case 5:
                return sx(window.fetch) && !!window.TextDecoderStream;
            case 6:
                return !!window.fetch && !!window.TextDecoderStream;
            default:
                eb(a)
        }
    };
    ux = function(a) {
        var b = a;
        return function() {
            var c = _.xa.apply(0, arguments);
            if (b) {
                var d = b;
                b = null;
                d.apply(null, _.aj(c))
            }
        }
    };
    wx = function(a) {
        var b = 0,
            c = null,
            d = 0,
            e = 0;
        return function() {
            var f, h, k, l, m, n;
            return _.vf(function(p) {
                if (p.g == 1) return f = new _.Oh, h = ux(f.resolve), k = ++e, p.yield(0, 2);
                if (e !== k) return h(!1), p.return(f.promise);
                (l = c) == null || l(!1);
                m = ux(function() {
                    b = (new Date).getTime();
                    c = null;
                    d = 0;
                    h(!0)
                });
                d && clearTimeout(d);
                n = (new Date).getTime() - b;
                n > _.yh(vx) ? m() : (d = setTimeout(m, _.yh(vx) - n), _.Jp(a, function() {
                    return void h(!1)
                }), c = h);
                return p.return(f.promise)
            })
        }
    };
    xx = function(a, b) {
        var c = [];
        a = Wa(a, function(f) {
            return Bl(f.getAdUnitPath())
        });
        a = _.A(_.x(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.A(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                networkCode: d,
                V: e
            }) : c.push({
                networkCode: d,
                V: e
            })
        }
        return c
    };
    Fx = function() {
        var a = new yx;
        var b = (new zx).setCorrelator(Qj(_.ca));
        var c = ih().join();
        b = _.Hi(b, 5, c);
        b = _.K(b, 2, 1);
        a = _.ol(a, 1, b);
        b = new Ax;
        c = _.I(Bx);
        b = _.tl(b, 7, c);
        c = _.I(Cx);
        b = _.tl(b, 8, c);
        c = _.I(Dx);
        b = _.tl(b, 9, c);
        b = _.tl(b, 10, !0);
        c = _.I(Ex);
        b = _.tl(b, 13, c);
        b = _.tl(b, 16, !0);
        a = _.ol(a, 2, b);
        window.google_rum_config = _.Ce(a)
    };
    Jx = function() {
        var a = _.I(Gx) ? _.kf(Hx) : _.kf(Ix);
        _.qp(document, a)
    };
    Mx = function(a, b) {
        var c = Kx() || Lx() ? 1 : _.oh(),
            d = c < .001;
        d ? (b.j = !0, hh(31067358)) : c < .002 && hh(31067357);
        Sn(23, a);
        return {
            gi: d,
            Tg: 1E3,
            Gb: c
        }
    };
    Qx = function(a, b) {
        var c = window.document.URL,
            d = new Nx(4, b.La, 1E3),
            e = new Ox(Dp(), d, a.Gb);
        return _.x(Object, "assign").call(Object, {}, b, a, {
            sq: new Px(b)
        }, {
            va: d,
            Ba: c,
            R: e
        })
    };
    _.aa = [];
    Rx = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    Sx = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    Tx = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    _.Ux = Tx(this);
    Vx = typeof Symbol === "function" && typeof Symbol("x") === "symbol";
    _.B = {};
    Wx = {};
    _.x = function(a, b, c) {
        if (!c || a != null) {
            c = Wx[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    };
    Xx = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in _.B ? f = _.B : f = _.Ux;
            for (e = 0; e < d.length - 1; e++) {
                var h = d[e];
                if (!(h in f)) break a;
                f = f[h]
            }
            d = d[d.length - 1];c = Vx && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? Sx(_.B, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (Wx[d] === void 0 && (a = Math.random() * 1E9 >>> 0, Wx[d] = Vx ? _.Ux.Symbol(d) : "$jscp$" + a + "$" + d), Sx(f, Wx[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    Xx("Symbol", function(a) {
        if (a) return a;
        var b = function(f, h) {
            this.g = f;
            Sx(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
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
    }, "es6");
    Xx("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, _.B.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.Ux[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && Sx(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Yx(Rx(this))
                }
            })
        }
        return a
    }, "es6");
    Yx = function(a) {
        a = {
            next: a
        };
        a[_.x(_.B.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    _.Zx = function(a) {
        return a.raw = a
    };
    $x = function(a, b) {
        a.raw = b;
        return a
    };
    _.A = function(a) {
        var b = typeof _.B.Symbol != "undefined" && _.x(_.B.Symbol, "iterator") && a[_.x(_.B.Symbol, "iterator")];
        if (b) return b.call(a);
        if (typeof a.length == "number") return {
            next: Rx(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.aj = function(a) {
        if (!(a instanceof Array)) {
            a = _.A(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    ay = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    by = Vx && typeof _.x(Object, "assign") == "function" ? _.x(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ay(d, e) && (a[e] = d[e])
        }
        return a
    };
    Xx("Object.assign", function(a) {
        return a || by
    }, "es6");
    var cy = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        dy = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (Vx && typeof Reflect != "undefined" && Reflect.construct) {
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
                e = cy(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        ey;
    if (Vx && typeof _.x(Object, "setPrototypeOf") == "function") ey = _.x(Object, "setPrototypeOf");
    else {
        var fy;
        a: {
            var gy = {
                    a: !0
                },
                hy = {};
            try {
                hy.__proto__ = gy;
                fy = hy.a;
                break a
            } catch (a) {}
            fy = !1
        }
        ey = fy ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    iy = ey;
    _.R = function(a, b) {
        a.prototype = cy(b.prototype);
        a.prototype.constructor = a;
        if (iy) iy(a, b);
        else
            for (var c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.to = b.prototype
    };
    jy = function() {
        this.j = !1;
        this.B = null;
        this.o = void 0;
        this.g = 1;
        this.J = this.l = 0;
        this.L = null
    };
    ky = function(a) {
        if (a.j) throw new TypeError("Generator is already running");
        a.j = !0
    };
    jy.prototype.H = function(a) {
        this.o = a
    };
    var ly = function(a, b) {
        a.L = {
            exception: b,
            Ym: !0
        };
        a.g = a.l || a.J
    };
    jy.prototype.return = function(a) {
        this.L = {
            return: a
        };
        this.g = this.J
    };
    jy.prototype.yield = function(a, b) {
        this.g = b;
        return {
            value: a
        }
    };
    xf = function(a) {
        a.l = 0;
        var b = a.L.exception;
        a.L = null;
        return b
    };
    my = function(a) {
        this.g = new jy;
        this.o = a
    };
    py = function(a, b) {
        ky(a.g);
        var c = a.g.B;
        if (c) return ny(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.g.return);
        a.g.return(b);
        return oy(a)
    };
    ny = function(a, b, c, d) {
        try {
            var e = b.call(a.g.B, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.g.j = !1, e;
            var f = e.value
        } catch (h) {
            return a.g.B = null, ly(a.g, h), oy(a)
        }
        a.g.B = null;
        d.call(a.g, f);
        return oy(a)
    };
    oy = function(a) {
        for (; a.g.g;) try {
            var b = a.o(a.g);
            if (b) return a.g.j = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.g.o = void 0, ly(a.g, c)
        }
        a.g.j = !1;
        if (a.g.L) {
            b = a.g.L;
            a.g.L = null;
            if (b.Ym) throw b.exception;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    qy = function(a) {
        this.next = function(b) {
            ky(a.g);
            a.g.B ? b = ny(a, a.g.B.next, b, a.g.H) : (a.g.H(b), b = oy(a));
            return b
        };
        this.throw = function(b) {
            ky(a.g);
            a.g.B ? b = ny(a, a.g.B["throw"], b, a.g.H) : (ly(a.g, b), b = oy(a));
            return b
        };
        this.return = function(b) {
            return py(a, b)
        };
        this[_.x(_.B.Symbol, "iterator")] = function() {
            return this
        }
    };
    ry = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new _.B.Promise(function(d, e) {
            function f(h) {
                h.done ? d(h.value) : _.B.Promise.resolve(h.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.vf = function(a) {
        return ry(new qy(new my(a)))
    };
    _.xa = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    Xx("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    Xx("Reflect.construct", function() {
        return dy
    }, "es6");
    Xx("Reflect.setPrototypeOf", function(a) {
        return a ? a : iy ? function(b, c) {
            try {
                return iy(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    Xx("Promise", function(a) {
        function b() {
            this.g = null
        }

        function c(h) {
            return h instanceof e ? h : new e(function(k) {
                k(h)
            })
        }
        if (a) return a;
        b.prototype.o = function(h) {
            if (this.g == null) {
                this.g = [];
                var k = this;
                this.l(function() {
                    k.L()
                })
            }
            this.g.push(h)
        };
        var d = _.Ux.setTimeout;
        b.prototype.l = function(h) {
            d(h, 0)
        };
        b.prototype.L = function() {
            for (; this.g && this.g.length;) {
                var h = this.g;
                this.g = [];
                for (var k = 0; k < h.length; ++k) {
                    var l = h[k];
                    h[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.B(m)
                    }
                }
            }
            this.g = null
        };
        b.prototype.B = function(h) {
            this.l(function() {
                throw h;
            })
        };
        var e = function(h) {
            this.o = 0;
            this.l = void 0;
            this.g = [];
            this.H = !1;
            var k = this.B();
            try {
                h(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.B = function() {
            function h(m) {
                return function(n) {
                    l || (l = !0, m.call(k, n))
                }
            }
            var k = this,
                l = !1;
            return {
                resolve: h(this.Ma),
                reject: h(this.L)
            }
        };
        e.prototype.Ma = function(h) {
            if (h === this) this.L(new TypeError("A Promise cannot resolve to itself"));
            else if (h instanceof e) this.ha(h);
            else {
                a: switch (typeof h) {
                    case "object":
                        var k = h != null;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1
                }
                k ? this.I(h) : this.j(h)
            }
        };
        e.prototype.I = function(h) {
            var k = void 0;
            try {
                k = h.then
            } catch (l) {
                this.L(l);
                return
            }
            typeof k == "function" ? this.U(k, h) : this.j(h)
        };
        e.prototype.L = function(h) {
            this.J(2, h)
        };
        e.prototype.j = function(h) {
            this.J(1, h)
        };
        e.prototype.J = function(h, k) {
            if (this.o != 0) throw Error("Cannot settle(" + h + ", " + k + "): Promise already settled in state" + this.o);
            this.o = h;
            this.l = k;
            this.o === 2 && this.K();
            this.A()
        };
        e.prototype.K = function() {
            var h = this;
            d(function() {
                if (h.F()) {
                    var k = _.Ux.console;
                    typeof k !== "undefined" && k.error(h.l)
                }
            }, 1)
        };
        e.prototype.F = function() {
            if (this.H) return !1;
            var h = _.Ux.CustomEvent,
                k = _.Ux.Event,
                l = _.Ux.dispatchEvent;
            if (typeof l === "undefined") return !0;
            typeof h === "function" ? h = new h("unhandledrejection", {
                cancelable: !0
            }) : typeof k === "function" ? h = new k("unhandledrejection", {
                cancelable: !0
            }) : (h = _.Ux.document.createEvent("CustomEvent"), h.initCustomEvent("unhandledrejection", !1, !0, h));
            h.promise = this;
            h.reason = this.l;
            return l(h)
        };
        e.prototype.A = function() {
            if (this.g != null) {
                for (var h = 0; h < this.g.length; ++h) f.o(this.g[h]);
                this.g = null
            }
        };
        var f = new b;
        e.prototype.ha = function(h) {
            var k = this.B();
            h.pf(k.resolve, k.reject)
        };
        e.prototype.U = function(h, k) {
            var l = this.B();
            try {
                h.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        e.prototype.then = function(h, k) {
            function l(q, t) {
                return typeof q == "function" ? function(w) {
                    try {
                        m(q(w))
                    } catch (v) {
                        n(v)
                    }
                } : t
            }
            var m, n, p = new e(function(q, t) {
                m = q;
                n = t
            });
            this.pf(l(h, m), l(k, n));
            return p
        };
        e.prototype.catch = function(h) {
            return this.then(void 0, h)
        };
        e.prototype.pf = function(h, k) {
            function l() {
                switch (m.o) {
                    case 1:
                        h(m.l);
                        break;
                    case 2:
                        k(m.l);
                        break;
                    default:
                        throw Error("Unexpected state: " + m.o);
                }
            }
            var m = this;
            this.g == null ? f.o(l) : this.g.push(l);
            this.H = !0
        };
        e.resolve = c;
        e.reject = function(h) {
            return new e(function(k, l) {
                l(h)
            })
        };
        e.race = function(h) {
            return new e(function(k, l) {
                for (var m = _.A(h), n = m.next(); !n.done; n = m.next()) c(n.value).pf(k, l)
            })
        };
        e.all = function(h) {
            var k = _.A(h),
                l = k.next();
            return l.done ? c([]) : new e(function(m, n) {
                function p(w) {
                    return function(v) {
                        q[w] = v;
                        t--;
                        t == 0 && m(q)
                    }
                }
                var q = [],
                    t = 0;
                do q.push(void 0), t++, c(l.value).pf(p(q.length - 1), n), l = k.next(); while (!l.done)
            })
        };
        return e
    }, "es6");
    Xx("Object.setPrototypeOf", function(a) {
        return a || iy
    }, "es6");
    Xx("Symbol.dispose", function(a) {
        return a ? a : (0, _.B.Symbol)("Symbol.dispose")
    }, "es_next");
    var sy = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                Kj: e,
                dl: f
            }
        }
        return {
            Kj: -1,
            dl: void 0
        }
    };
    Xx("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return sy(this, b, c).dl
        }
    }, "es6");
    Xx("WeakMap", function(a) {
        function b() {}

        function c(h) {
            var k = typeof h;
            return k === "object" && h !== null || k === "function"
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var h = Object.seal({}),
                        k = Object.seal({}),
                        l = new a([
                            [h, 2],
                            [k, 3]
                        ]);
                    if (l.get(h) != 2 || l.get(k) != 3) return !1;
                    l.delete(h);
                    l.set(k, 4);
                    return !l.has(h) && l.get(k) == 4
                } catch (m) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(h) {
                this.g = (e += Math.random() + 1).toString();
                if (h) {
                    h = _.A(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        f.prototype.set = function(h, k) {
            if (!c(h)) throw Error("Invalid WeakMap key");
            if (!ay(h, d)) {
                var l = new b;
                Sx(h, d, {
                    value: l
                })
            }
            if (!ay(h, d)) throw Error("WeakMap key fail: " + h);
            h[d][this.g] = k;
            return this
        };
        f.prototype.get = function(h) {
            return c(h) && ay(h, d) ? h[d][this.g] : void 0
        };
        f.prototype.has = function(h) {
            return c(h) && ay(h, d) && ay(h[d], this.g)
        };
        f.prototype.delete = function(h) {
            return c(h) && ay(h, d) && ay(h[d], this.g) ? delete h[d][this.g] : !1
        };
        return f
    }, "es6");
    Xx("Map", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !_.x(a.prototype, "entries") || typeof Object.seal != "function") return !1;
                try {
                    var k = Object.seal({
                            x: 4
                        }),
                        l = new a(_.A([
                            [k, "s"]
                        ]));
                    if (l.get(k) != "s" || l.size != 1 || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || l.size != 2) return !1;
                    var m = _.x(l, "entries").call(l),
                        n = m.next();
                    if (n.done || n.value[0] != k || n.value[1] != "s") return !1;
                    n = m.next();
                    return n.done || n.value[0].x != 4 || n.value[1] != "t" || !m.next().done ? !1 : !0
                } catch (p) {
                    return !1
                }
            }()) return a;
        var b = new _.B.WeakMap,
            c = function(k) {
                this[0] = {};
                this[1] = f();
                this.size = 0;
                if (k) {
                    k = _.A(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        c.prototype.set = function(k, l) {
            k = k === 0 ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this[0][m.id] = []);
            m.hb ? m.hb.value = l : (m.hb = {
                next: this[1],
                kc: this[1].kc,
                head: this[1],
                key: k,
                value: l
            }, m.list.push(m.hb), this[1].kc.next = m.hb, this[1].kc = m.hb, this.size++);
            return this
        };
        c.prototype.delete = function(k) {
            k = d(this, k);
            return k.hb && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this[0][k.id], k.hb.kc.next = k.hb.next, k.hb.next.kc = k.hb.kc, k.hb.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].kc = f();
            this.size = 0
        };
        c.prototype.has = function(k) {
            return !!d(this, k).hb
        };
        c.prototype.get = function(k) {
            return (k = d(this, k).hb) && k.value
        };
        c.prototype.entries = function() {
            return e(this, function(k) {
                return [k.key, k.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(k) {
                return k.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(k) {
                return k.value
            })
        };
        c.prototype.forEach = function(k, l) {
            for (var m = _.x(this, "entries").call(this), n; !(n = m.next()).done;) n = n.value, k.call(l, n[1], n[0], this)
        };
        c.prototype[_.x(_.B.Symbol, "iterator")] = _.x(c.prototype, "entries");
        var d = function(k, l) {
                var m = l && typeof l;
                m == "object" || m == "function" ? b.has(l) ? m = b.get(l) : (m = "" + ++h, b.set(l, m)) : m = "p_" + l;
                var n = k[0][m];
                if (n && ay(k[0], m))
                    for (k = 0; k < n.length; k++) {
                        var p = n[k];
                        if (l !== l && p.key !== p.key || l === p.key) return {
                            id: m,
                            list: n,
                            index: k,
                            hb: p
                        }
                    }
                return {
                    id: m,
                    list: n,
                    index: -1,
                    hb: void 0
                }
            },
            e = function(k, l) {
                var m = k[1];
                return Yx(function() {
                    if (m) {
                        for (; m.head != k[1];) m = m.kc;
                        for (; m.next != m.head;) return m = m.next, {
                            done: !1,
                            value: l(m)
                        };
                        m = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var k = {};
                return k.kc = k.next = k.head = k
            },
            h = 0;
        return c
    }, "es6");
    var ty = function(a, b, c) {
        if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Xx("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ty(this, b, "endsWith");
            c === void 0 && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; e > 0 && c > 0;)
                if (d[--c] != b[--e]) return !1;
            return e <= 0
        }
    }, "es6");
    var uy = function(a, b) {
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
        e[_.x(_.B.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    Xx("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return uy(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    Xx("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return uy(this, function(b) {
                return b
            })
        }
    }, "es6");
    Xx("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ty(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < f && c < e;)
                if (d[c++] != b[h++]) return !1;
            return h >= f
        }
    }, "es6");
    Xx("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    }, "es6");
    Xx("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = ty(this, null, "repeat");
            if (b < 0 || b > 1342177279) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    Xx("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    Xx("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.x(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    Xx("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return ty(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    }, "es6");
    Xx("Set", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !_.x(a.prototype, "entries") || typeof Object.seal != "function") return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.A([c]));
                    if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                            x: 4
                        }) != d || d.size != 2) return !1;
                    var e = _.x(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (h) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.g = new _.B.Map;
            if (c) {
                c = _.A(c);
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
            return _.x(this.g, "entries").call(this.g)
        };
        b.prototype.values = function() {
            return _.x(this.g, "values").call(this.g)
        };
        b.prototype.keys = _.x(b.prototype, "values");
        b.prototype[_.x(_.B.Symbol, "iterator")] = _.x(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.g.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    Xx("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return sy(this, b, c).Kj
        }
    }, "es6");
    Xx("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function(e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    Xx("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ay(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    Xx("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ay(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    Xx("Number.EPSILON", function() {
        return Math.pow(2, -52)
    }, "es6");
    Xx("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    Xx("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.x(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    Xx("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return _.x(Number, "isInteger").call(Number, b) && Math.abs(b) <= _.x(Number, "MAX_SAFE_INTEGER")
        }
    }, "es6");
    Xx("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    }, "es6");
    Xx("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    }, "es6");
    Xx("Array.prototype.values", function(a) {
        return a ? a : function() {
            return uy(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    Xx("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(k) {
                return k
            };
            var e = [],
                f = typeof _.B.Symbol != "undefined" && _.x(_.B.Symbol, "iterator") && b[_.x(_.B.Symbol, "iterator")];
            if (typeof f == "function") {
                b = f.call(b);
                for (var h = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, h++))
            } else
                for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
            return e
        }
    }, "es6");
    Xx("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            c < 0 && (c = Math.max(0, e + c));
            if (d == null || d > e) d = e;
            d = Number(d);
            d < 0 && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    }, "es6");
    var vy = function(a) {
        return a ? a : _.x(Array.prototype, "fill")
    };
    Xx("Int8Array.prototype.fill", vy, "es6");
    Xx("Uint8Array.prototype.fill", vy, "es6");
    Xx("Uint8ClampedArray.prototype.fill", vy, "es6");
    Xx("Int16Array.prototype.fill", vy, "es6");
    Xx("Uint16Array.prototype.fill", vy, "es6");
    Xx("Int32Array.prototype.fill", vy, "es6");
    Xx("Uint32Array.prototype.fill", vy, "es6");
    Xx("Float32Array.prototype.fill", vy, "es6");
    Xx("Float64Array.prototype.fill", vy, "es6");
    Xx("globalThis", function(a) {
        return a || _.Ux
    }, "es_2020");
    var wy = function(a, b) {
        a = a !== void 0 ? String(a) : " ";
        return b > 0 && a ? _.x(a, "repeat").call(a, Math.ceil(b / a.length)).substring(0, b) : ""
    };
    Xx("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = ty(this, null, "padStart");
            return wy(c, b - d.length) + d
        }
    }, "es8");
    Xx("String.prototype.padEnd", function(a) {
        return a ? a : function(b, c) {
            var d = ty(this, null, "padStart");
            return d + wy(c, b - d.length)
        }
    }, "es8");
    Xx("AggregateError", function(a) {
        if (a) return a;
        a = function(b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.R(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    Xx("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.x(Array, "from").call(Array, b);
            return _.B.Promise.all(b.map(function(c) {
                return _.B.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new _.B.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    Xx("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.x(_.B.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.x(_.B.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    Xx("Object.hasOwn", function(a) {
        return a ? a : function(b, c) {
            return Object.prototype.hasOwnProperty.call(b, c)
        }
    }, "es_next");
    Xx("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return _.B.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return _.B.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    Xx("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = b === void 0 ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && b > 0 ? (d = _.x(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    Xx("String.raw", function(a) {
        return a ? a : function(b, c) {
            if (b == null) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", h = 0; h < e; ++h) f += d[h], h + 1 < e && h + 1 < arguments.length && (f += String(arguments[h + 1]));
            return f
        }
    }, "es6");
    Xx("Math.sign", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            return b === 0 || isNaN(b) ? b : b > 0 ? 1 : -1
        }
    }, "es6");
    Xx("String.fromCodePoint", function(a) {
        return a ? a : function(b) {
            for (var c = "", d = 0; d < arguments.length; d++) {
                var e = Number(arguments[d]);
                if (e < 0 || e > 1114111 || e !== Math.floor(e)) throw new RangeError("invalid_code_point " + e);
                e <= 65535 ? c += String.fromCharCode(e) : (e -= 65536, c += String.fromCharCode(e >>> 10 & 1023 | 55296), c += String.fromCharCode(e & 1023 | 56320))
            }
            return c
        }
    }, "es6");
    var xy, qc, yy, zy, Ay, By;
    _.ca = this || self;
    xy = function(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = _.ca, e = 0; e < c.length; e++)
                if (d = d[c[e]], d == null) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return a != null ? a : b
    };
    qc = function(a) {
        var b = typeof a;
        return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    _.Ta = function(a) {
        var b = qc(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    };
    _.La = function(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    };
    _.Ma = function(a) {
        return Object.prototype.hasOwnProperty.call(a, yy) && a[yy] || (a[yy] = ++zy)
    };
    yy = "closure_uid_" + (Math.random() * 1E9 >>> 0);
    zy = 0;
    Ay = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    By = function(a, b, c) {
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
    };
    _.Cy = function(a, b, c) {
        _.Cy = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? Ay : By;
        return _.Cy.apply(null, arguments)
    };
    _.Dy = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    var Ey;
    var Fy = xy(1, !0),
        fa = xy(610401301, !1),
        Ae = xy(188588736, !0),
        Pd = xy(645172343, Fy),
        Gy = xy(653718497, Fy);
    var Hy, cm, Iy, Qy, Ky, Ly, My, Ny, Oy, Py, Jy;
    Hy = function(a, b) {
        var c = a.length - b.length;
        return c >= 0 && a.indexOf(b, c) == c
    };
    cm = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    Iy = function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    };
    Qy = function(a) {
        if (!Jy.test(a)) return a;
        a.indexOf("&") != -1 && (a = a.replace(Ky, "&amp;"));
        a.indexOf("<") != -1 && (a = a.replace(Ly, "&lt;"));
        a.indexOf(">") != -1 && (a = a.replace(My, "&gt;"));
        a.indexOf('"') != -1 && (a = a.replace(Ny, "&quot;"));
        a.indexOf("'") != -1 && (a = a.replace(Oy, "&#39;"));
        a.indexOf("\x00") != -1 && (a = a.replace(Py, "&#0;"));
        return a
    };
    Ky = /&/g;
    Ly = /</g;
    My = />/g;
    Ny = /"/g;
    Oy = /'/g;
    Py = /\x00/g;
    Jy = /[\x00&<>"']/;
    _.xg = function(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };
    var ha, Ry = _.ca.navigator;
    ha = Ry ? Ry.userAgentData || null : null;
    var kg = function(a, b) {
        this.g = a === lg && b || "";
        this.o = Sy
    };
    kg.prototype.toString = function() {
        return this.g
    };
    var Ty = function(a) {
            return a instanceof kg && a.constructor === kg && a.o === Sy ? a.g : "type_error:Const"
        },
        Sy = {},
        lg = {};
    var ug, Yy, Xy, Vy, Zy, jf, Wy;
    _.Uy = function(a) {
        this.g = a
    };
    _.Uy.prototype.toString = function() {
        return this.g + ""
    };
    _.tg = function(a, b) {
        a = Vy.exec(_.gb(a).toString());
        var c = a[3] || "";
        return jf(a[1] + Wy("?", a[2] || "", b) + Wy("#", c))
    };
    _.gb = function(a) {
        return a instanceof _.Uy && a.constructor === _.Uy ? a.g : "type_error:TrustedResourceUrl"
    };
    ug = function(a, b) {
        var c = Ty(a);
        if (!Xy.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Yy, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof kg ? Ty(d) : encodeURIComponent(String(d))
        });
        return jf(a)
    };
    Yy = /%{(\w+)}/g;
    Xy = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    Vy = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    Zy = {};
    jf = function(a) {
        return new _.Uy(a, Zy)
    };
    Wy = function(a, b, c) {
        if (c == null) return b;
        if (typeof c === "string") return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var h = e[f];
                    h != null && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
                }
            }
        return b
    };
    _.qa = function(a) {
        this.g = a
    };
    _.qa.prototype.toString = function() {
        return this.g
    };
    _.va = new _.qa("about:invalid#zClosurez");
    var sa = function(a) {
            this.dn = a
        },
        ua = [ta("data"), ta("http"), ta("https"), ta("mailto"), ta("ftp"), new sa(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        })],
        Aa = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
    _.Ga = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.$y = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.yi = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.az = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    _.wg = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var bb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var bz = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var cz;
    cz = {};
    _.dz = function(a) {
        this.g = a
    };
    _.dz.prototype.toString = function() {
        return this.g.toString()
    };
    _.ez = function(a) {
        return a instanceof _.dz && a.constructor === _.dz ? a.g : "type_error:SafeStyleSheet"
    };
    var fz, jz, kz, lz, mz, nz, iz;
    fz = {};
    _.gz = function(a) {
        this.g = a
    };
    _.gz.prototype.toString = function() {
        return this.g.toString()
    };
    _.hz = function(a) {
        return a instanceof _.gz && a.constructor === _.gz ? a.g : "type_error:SafeHtml"
    };
    jz = function(a) {
        var b = iz;
        b = b instanceof _.gz ? b : _.Kj(Qy(String(b)));
        var c = [],
            d = function(e) {
                Array.isArray(e) ? e.forEach(d) : (e = e instanceof _.gz ? e : _.Kj(Qy(String(e))), c.push(_.hz(e).toString()))
            };
        a.forEach(d);
        return _.Kj(c.join(_.hz(b).toString()))
    };
    kz = function(a) {
        return jz(Array.prototype.slice.call(arguments))
    };
    _.Kj = function(a) {
        return new _.gz(a, fz)
    };
    lz = /^[a-zA-Z0-9-]+$/;
    mz = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    nz = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    iz = new _.gz(_.ca.trustedTypes && _.ca.trustedTypes.emptyHTML || "", fz);
    var oz = {
            op: 0,
            mp: 1,
            np: 2,
            0: "FORMATTED_HTML_CONTENT",
            1: "EMBEDDED_INTERNAL_CONTENT",
            2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        pz = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + oz[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.R(pz, Error);
    var pv = function(a) {
        this.g = a
    };
    pv.prototype.toString = function() {
        return this.g.toString()
    };
    var Cb = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var qz, rz, tz;
    qz = function() {
        return Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)
    };
    rz = Math.random() * 2147483648 | 0;
    _.sz = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    tz = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    _.uz = function(a) {
        _.uz[" "](a);
        return a
    };
    _.uz[" "] = function() {};
    var vz = function(a, b) {
        try {
            return _.uz(a[b]), !0
        } catch (c) {}
        return !1
    };
    var wz = la() ? !1 : ja("Trident") || ja("MSIE"),
        xz = ja("Gecko") && !(_.xg(ea(), "WebKit") && !ja("Edge")) && !(ja("Trident") || ja("MSIE")) && !ja("Edge"),
        yz = _.xg(ea(), "WebKit") && !ja("Edge");
    !ja("Android") || na();
    na();
    oa();
    wz || oa();
    ib(function(a) {
        return function(b) {
            a(this);
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b
        }
    });
    ib(function(a) {
        return function() {
            a(this);
            this.message = "no elements in sequence"
        }
    });
    ib(function(a) {
        return function() {
            a(this);
            this.message = "argument out of range"
        }
    });
    ib(function(a) {
        return function() {
            a(this);
            this.message = "object unsubscribed"
        }
    });
    ib(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    ib(function(a) {
        return function(b) {
            a(this);
            this.message = b
        }
    });
    ib(function(a) {
        return function(b) {
            b = b === void 0 ? null : b;
            a(this);
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = b
        }
    });
    var mb, lb = typeof String.prototype.en === "function",
        kb = typeof TextEncoder !== "undefined";
    var zz = {},
        Az = null,
        Bz = xz || yz || typeof _.ca.btoa == "function",
        qb = function(a, b) {
            b === void 0 && (b = 0);
            Cz();
            b = zz[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var h = a[e],
                    k = a[e + 1],
                    l = a[e + 2],
                    m = b[h >> 2];
                h = b[(h & 3) << 4 | k >> 4];
                k = b[(k & 15) << 2 | l >> 6];
                l = b[l & 63];
                c[f++] = m + h + k + l
            }
            m = 0;
            l = d;
            switch (a.length - e) {
                case 2:
                    m = a[e + 1], l = b[(m & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
            }
            return c.join("")
        },
        Dz = function(a, b) {
            if (Bz && !b) a = _.ca.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    f > 255 && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = qb(c, b)
            }
            return a
        },
        Df = function(a) {
            var b = [];
            Ez(a, function(c) {
                b.push(c)
            });
            return b
        },
        Fz = function(a) {
            var b = a.length,
                c = b * 3 / 4;
            c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            Ez(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        Ez = function(a, b) {
            function c(l) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        n = Az[m];
                    if (n != null) return n;
                    if (!cm(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            Cz();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    h = c(64),
                    k = c(64);
                if (k === 64 && e === -1) break;
                b(e << 2 | f >> 4);
                h != 64 && (b(f << 4 & 240 | h >> 2), k != 64 && b(h << 6 & 192 | k))
            }
        },
        Cz = function() {
            if (!Az) {
                Az = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                    var d = a.concat(b[c].split(""));
                    zz[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        Az[f] === void 0 && (Az[f] = e)
                    }
                }
            }
        };
    var ub = typeof Uint8Array !== "undefined",
        pb = !wz && typeof btoa === "function",
        Gz = /[-_.]/g,
        sb = {
            "-": "+",
            _: "/",
            ".": "="
        },
        wb = {};
    var Hz, Xb = function(a, b) {
            xb(b);
            this.g = a;
            if (a != null && a.length === 0) throw Error("ByteString should be constructed with non-empty values");
        },
        Yb = function() {
            return Hz || (Hz = new Xb(null, wb))
        },
        zd = function(a) {
            var b = a.g;
            return b == null ? "" : typeof b === "string" ? b : a.g = rb(b)
        },
        gl = function(a) {
            var b = Uint8Array;
            xb(wb);
            var c = a.g;
            if (c != null && !vb(c))
                if (typeof c === "string")
                    if (pb) {
                        Gz.test(c) && (c = c.replace(Gz, tb));
                        c = atob(c);
                        for (var d = new Uint8Array(c.length), e = 0; e < c.length; e++) d[e] = c.charCodeAt(e);
                        c = d
                    } else c = Fz(c);
            else c = null;
            a = c == null ? c : a.g = c;
            return new b(a || 0)
        };
    Xb.prototype.isEmpty = function() {
        return this.g == null
    };
    var Gb, yb;
    var pe = typeof _.B.Symbol === "function" && typeof(0, _.B.Symbol)() === "symbol",
        Iz = Lb(),
        ad = Lb("0di"),
        Jz = Lb("2ex"),
        qe = Lb("1oa"),
        Md = Lb("0dg"),
        Kz = Lb("64big");
    var Mb, Rb;
    Mb = pe ? function(a, b) {
        a[Iz] |= b
    } : function(a, b) {
        a.Kb !== void 0 ? a.Kb |= b : Object.defineProperties(a, {
            Kb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };
    _.fe = pe ? function(a, b) {
        a[Iz] &= ~b
    } : function(a, b) {
        a.Kb !== void 0 && (a.Kb &= ~b)
    };
    _.$b = pe ? function(a) {
        return a[Iz] | 0
    } : function(a) {
        return a.Kb | 0
    };
    _.Hd = pe ? function(a) {
        return a[Iz]
    } : function(a) {
        return a.Kb
    };
    Rb = pe ? function(a, b) {
        a[Iz] = b
    } : function(a, b) {
        a.Kb !== void 0 ? a.Kb = b : Object.defineProperties(a, {
            Kb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };
    var Yc = {},
        Ub = {},
        Ud, Lz = [];
    Rb(Lz, 55);
    Ud = Object.freeze(Lz);
    var Mz = function(a, b, c) {
        this.l = 0;
        this.g = a;
        this.o = b;
        this.B = c
    };
    Mz.prototype.next = function() {
        if (this.l < this.g.length) {
            var a = this.g[this.l++];
            return {
                done: !1,
                value: this.o ? this.o.call(this.B, a) : a
            }
        }
        return {
            done: !0,
            value: void 0
        }
    };
    Mz.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return new Mz(this.g, this.o, this.B)
    };
    _.om = Object.freeze({});
    Object.freeze({});
    var ke = Object.freeze({});
    var dc = 0,
        ec = 0,
        Nz;
    var tc = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;
    var be = function(a) {
            if (Math.random() > .01 || typeof Proxy !== "function") return a;
            var b = $d(a);
            if (b) return b;
            b = new Proxy(a, {
                set: function(c, d, e) {
                    fd();
                    c[d] = e;
                    return !0
                }
            });
            id(a, b);
            return b
        },
        gd = void 0,
        hd = void 0,
        $d = function(a) {
            var b;
            return (b = gd) == null ? void 0 : b.get(a)
        },
        je = function(a) {
            var b;
            return ((b = hd) == null ? void 0 : b.get(a)) || a
        };
    var jd, ld, md;
    var vd = {},
        Oz = function() {
            try {
                var a = function() {
                    return dy(_.B.Map, [], this.constructor)
                };
                _.R(a, _.B.Map);
                _.uz(new a);
                return !1
            } catch (b) {
                return !0
            }
        }(),
        Pz = function() {
            this.g = new _.B.Map
        };
    _.r = Pz.prototype;
    _.r.get = function(a) {
        return this.g.get(a)
    };
    _.r.set = function(a, b) {
        this.g.set(a, b);
        this.size = this.g.size;
        return this
    };
    _.r.delete = function(a) {
        a = this.g.delete(a);
        this.size = this.g.size;
        return a
    };
    _.r.clear = function() {
        this.g.clear();
        this.size = this.g.size
    };
    _.r.has = function(a) {
        return this.g.has(a)
    };
    _.r.entries = function() {
        return _.x(this.g, "entries").call(this.g)
    };
    _.r.keys = function() {
        return _.x(this.g, "keys").call(this.g)
    };
    _.r.values = function() {
        return _.x(this.g, "values").call(this.g)
    };
    _.r.forEach = function(a, b) {
        return this.g.forEach(a, b)
    };
    Pz.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return _.x(this, "entries").call(this)
    };
    var Qz = function() {
            if (Oz) return _.x(Object, "setPrototypeOf").call(Object, Pz.prototype, _.B.Map.prototype), Object.defineProperties(Pz.prototype, {
                size: {
                    value: 0,
                    configurable: !0,
                    enumerable: !0,
                    writable: !0
                }
            }), Pz;
            var a = function() {
                return dy(_.B.Map, [], this.constructor)
            };
            _.R(a, _.B.Map);
            return a
        }(),
        ud = function(a, b, c, d) {
            c = c === void 0 ? od : c;
            d = d === void 0 ? od : d;
            var e = Qz.call(this) || this;
            var f = (0, _.$b)(a);
            f |= 64;
            Rb(a, f);
            e.he = f;
            e.qg = b;
            e.De = c;
            e.wi = e.qg ? qd : d;
            for (var h = 0; h < a.length; h++) {
                var k = a[h],
                    l = c(k[0], !1, !0),
                    m = k[1];
                b ? m === void 0 && (m = null) : m = d(k[1], !1, !0, void 0, void 0, f);
                Qz.prototype.set.call(e, l, m)
            }
            return e
        };
    _.R(ud, Qz);
    var Rz = function(a) {
            if (a.he & 2) throw Error("Cannot mutate an immutable Map");
        },
        Ad = function(a, b) {
            b = b === void 0 ? rd : b;
            if (a.size !== 0) return Jd(a, b)
        },
        Jd = function(a, b) {
            b = b === void 0 ? rd : b;
            var c = [];
            a = _.x(Qz.prototype, "entries").call(a);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    _.r = ud.prototype;
    _.r.clear = function() {
        Rz(this);
        Qz.prototype.clear.call(this)
    };
    _.r.delete = function(a) {
        Rz(this);
        return Qz.prototype.delete.call(this, this.De(a, !0, !1))
    };
    _.r.entries = function() {
        var a = _.x(Array, "from").call(Array, _.x(Qz.prototype, "keys").call(this));
        return new Mz(a, sd, this)
    };
    _.r.keys = function() {
        return _.x(Qz.prototype, "keys").call(this)
    };
    _.r.values = function() {
        var a = _.x(Array, "from").call(Array, _.x(Qz.prototype, "keys").call(this));
        return new Mz(a, ud.prototype.get, this)
    };
    _.r.forEach = function(a, b) {
        var c = this;
        Qz.prototype.forEach.call(this, function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    _.r.set = function(a, b) {
        Rz(this);
        a = this.De(a, !0, !1);
        return a == null ? this : b == null ? (Qz.prototype.delete.call(this, a), this) : Qz.prototype.set.call(this, a, this.wi(b, !0, !0, this.qg, !1, this.he))
    };
    _.r.has = function(a) {
        return Qz.prototype.has.call(this, this.De(a, !1, !1))
    };
    _.r.get = function(a) {
        a = this.De(a, !1, !1);
        var b = Qz.prototype.get.call(this, a);
        if (b !== void 0) {
            var c = this.qg;
            return c ? (c = this.wi(b, !1, !0, c, this.Ol, this.he), c !== b && Qz.prototype.set.call(this, a, c), c) : b
        }
    };
    ud.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return _.x(this, "entries").call(this)
    };
    ud.prototype.toJSON = void 0;
    ud.prototype.kn = Ub;
    var td;
    var Rd, iq, Ur, hl, Fi, il, fl, Tz, Vz, gk, Wz, Xz, Yz, Tr, ym, Xj, fv, Zt, aA, Iu, bA, dA, eA, Hq, fA, gA, hA, Qn;
    _.Sz = function(a, b) {
        a = a.D;
        return Rd(a, (0, _.Hd)(a), b)
    };
    Rd = function(a, b, c, d) {
        if (c === -1) return null;
        var e = b >> 14 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Od(a, b, e, c) && Hb(void 0, Jz), d) : Od(a, b, e, c)
        }
    };
    _.ek = function(a, b, c) {
        var d = a.D,
            e = (0, _.Hd)(d);
        _.bc(e);
        Qd(d, e, b, c);
        return a
    };
    iq = function(a, b, c) {
        return ue(a, b, c, !1) !== void 0
    };
    Ur = function(a) {
        a = a.D;
        var b = (0, _.Hd)(a),
            c = Rd(a, b, 3),
            d = oc(c);
        d != null && d !== c && Qd(a, b, 3, d);
        return d
    };
    _.Wj = function(a) {
        return a === _.om ? 2 : Gy ? 5 : 2
    };
    hl = function(a, b) {
        a = a.D;
        var c = (0, _.Hd)(a),
            d = Rd(a, c, b),
            e = Zb(d, !0, !!(c & 34));
        e != null && e !== d && Qd(a, c, b, e);
        return e == null ? Yb() : e
    };
    Fi = function(a, b, c, d) {
        var e = a.D,
            f = (0, _.Hd)(e);
        _.bc(f);
        if (d == null) {
            var h = re(e);
            if (se(h, e, f, c) === b) h.set(c, 0);
            else return a
        } else f = te(e, f, c, b);
        Qd(e, f, b, d);
        return a
    };
    il = function(a, b, c) {
        return fl(a, b) === c ? c : -1
    };
    fl = function(a, b) {
        a = a.D;
        return se(re(a), a, (0, _.Hd)(a), b)
    };
    _.Vq = function(a, b, c, d) {
        var e = a.D;
        te(e, (0, _.Hd)(e), d, c);
        return _.Ji(a, b, c)
    };
    _.Ji = function(a, b, c) {
        a = a.D;
        var d = (0, _.Hd)(a);
        _.bc(d);
        var e = Rd(a, d, c);
        b = pd($c(e, b, !0, d));
        e !== b && Qd(a, d, c, b);
        return b
    };
    Tz = function(a, b, c) {
        return (a = ue(a, b, c, !1)) ? a : Zc(b)
    };
    _.wm = function(a, b, c) {
        var d = d === void 0 ? !1 : d;
        b = ue(a, b, c, d);
        if (b == null) return b;
        a = a.D;
        var e = (0, _.Hd)(a);
        if (!(e & 2)) {
            var f = pd(b);
            f !== b && (b = f, Qd(a, e, c, b, d))
        }
        return b
    };
    Vz = function(a) {
        a = a.D;
        return _.ve(a, (0, _.Hd)(a), _.Uz, 15, 1)
    };
    _.Uj = function(a, b, c, d) {
        a = a.D;
        var e = (0, _.Hd)(a);
        return _.ve(a, e, b, c, d, void 0, !1, !(2 & e))
    };
    _.ol = function(a, b, c) {
        c == null && (c = void 0);
        return _.ek(a, b, c)
    };
    _.vl = function(a, b, c, d) {
        d == null && (d = void 0);
        return Fi(a, b, c, d)
    };
    _.qm = function(a, b, c) {
        var d = a.D,
            e = (0, _.Hd)(d);
        _.bc(e);
        if (c == null) return Qd(d, e, b), a;
        c = je(c);
        for (var f = (0, _.$b)(c), h = f, k = !!(2 & f) || !!(2048 & f), l = k || Object.isFrozen(c), m = !l && (void 0 === ke || !1), n = !0, p = !0, q = 0; q < c.length; q++) {
            var t = c[q];
            k || (t = !!((0, _.$b)(t.D) & 2), n && (n = !t), p && (p = t))
        }
        k || (f |= 5, f = n ? f | 8 : f & -9, f = p ? f | 16 : f & -17);
        if (m || l && f !== h) c = Kb(c), h = 0, f = Xd(f, e), f = ae(f, e, !0);
        f !== h && Rb(c, f);
        Qd(d, e, b, c);
        return a
    };
    gk = function(a, b, c, d) {
        we(a, b, c, d);
        return a
    };
    Wz = function(a, b) {
        a = _.Sz(a, b);
        var c;
        a == null ? c = a : vc(a) ? typeof a === "number" ? c = Mc(a) : c = Oc(a) : c = void 0;
        return c
    };
    Xz = function(a, b, c) {
        return _.ce(a, b, Pc, c, void 0, void 0, 0)
    };
    Yz = function(a, b) {
        return sc(_.Sz(a, b))
    };
    Tr = function(a, b) {
        return Ac(_.Sz(a, b))
    };
    ym = function(a, b) {
        return Dc(_.Sz(a, b))
    };
    Xj = function(a, b) {
        return _.Xc(_.Sz(a, b))
    };
    _.Q = function(a, b, c) {
        c = c === void 0 ? !1 : c;
        return ye(Yz(a, b), c)
    };
    _.Zz = function(a, b) {
        var c = c === void 0 ? 0 : c;
        return ye(Tr(a, b), c)
    };
    fv = function(a, b) {
        var c = c === void 0 ? 0 : c;
        return ye(ym(a, b), c)
    };
    _.ig = function(a, b) {
        var c = c === void 0 ? 0 : c;
        return ye(Pc(_.Sz(a, b)), c)
    };
    Zt = function(a, b) {
        var c = c === void 0 ? 0 : c;
        return ye(Wz(a, b), c)
    };
    _.u = function(a, b) {
        var c = c === void 0 ? "" : c;
        return ye(Xj(a, b), c)
    };
    _.Uf = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        return ye(_.yc(_.Sz(a, b)), c)
    };
    _.$z = function(a, b) {
        var c = c === void 0 ? "0" : c;
        a = _.Sz(a, b);
        b = !0;
        b = b === void 0 ? !1 : b;
        a = a == null ? a : vc(a) ? typeof a === "string" ? Oc(a) : b ? Nc(a) : Mc(a) : void 0;
        return ye(a, c)
    };
    aA = function(a, b) {
        var c = c === void 0 ? "0" : c;
        return ye(Qc(_.Sz(a, b), !0), c)
    };
    Iu = function(a, b) {
        return _.ce(a, b, Ac, _.Wj())
    };
    bA = function(a, b, c) {
        a = _.ce(a, b, _.Xc, 3, void 0, !0);
        if (typeof c !== "number" || c < 0 || c >= a.length) throw Error();
        return a[c]
    };
    dA = function(a) {
        return _.ig(a, il(a, cA, 3))
    };
    eA = function(a, b) {
        return _.u(a, il(a, b, 2))
    };
    Hq = function(a, b) {
        a = Yz(a, b);
        return a == null ? void 0 : a
    };
    fA = function(a, b) {
        a = Tr(a, b);
        return a == null ? void 0 : a
    };
    gA = function(a, b) {
        a = Xj(a, b);
        return a == null ? void 0 : a
    };
    hA = function(a, b) {
        a = _.yc(_.Sz(a, b));
        return a == null ? void 0 : a
    };
    _.dk = function(a, b, c) {
        return _.ek(a, b, c == null ? c : rc(c))
    };
    _.tl = function(a, b, c) {
        return _.me(a, b, c == null ? c : rc(c), !1)
    };
    _.Yq = function(a, b, c) {
        return _.ek(a, b, c == null ? c : zc(c))
    };
    _.ul = function(a, b, c) {
        return _.me(a, b, c == null ? c : zc(c), 0)
    };
    _.al = function(a, b, c) {
        return _.ek(a, b, Ic(c))
    };
    _.Ii = function(a, b, c) {
        return _.me(a, b, Ic(c), "0")
    };
    _.uq = function(a, b, c) {
        return _.ek(a, b, Wc(c))
    };
    _.Hi = function(a, b, c) {
        return _.me(a, b, Wc(c), "")
    };
    _.ur = function(a, b, c) {
        return _.ek(a, b, xc(c))
    };
    _.K = function(a, b, c) {
        return _.me(a, b, xc(c), 0)
    };
    Qn = function(a, b) {
        return Yz(a, b) != null
    };
    _.Yj = function(a, b) {
        return Xj(a, b) != null
    };
    var ze;
    _.E = function(a, b, c) {
        this.D = _.D(a, b, c)
    };
    _.E.prototype.toJSON = function() {
        return _.Ce(this)
    };
    var cl = function(a) {
        try {
            return ze = !0, JSON.stringify(_.Ce(a), yd)
        } finally {
            ze = !1
        }
    };
    _.E.prototype.vh = Yc;
    var iA = function(a, b) {
            this.o = a >>> 0;
            this.g = b >>> 0
        },
        kA = function(a) {
            if (!a) return jA || (jA = new iA(0, 0));
            if (!/^\d+$/.test(a)) return null;
            mc(a);
            return new iA(dc, ec)
        },
        jA, lA = function(a, b) {
            this.o = a >>> 0;
            this.g = b >>> 0
        },
        Ue = function(a) {
            if (!a) return mA || (mA = new lA(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            mc(a);
            return new lA(dc, ec)
        },
        mA;
    var nA = function() {
        this.g = []
    };
    nA.prototype.length = function() {
        return this.g.length
    };
    nA.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var We = function(a, b, c) {
            for (; c > 0 || b > 127;) a.g.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.g.push(b)
        },
        oA = function(a, b) {
            for (; b > 127;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        pA = function(a, b) {
            if (b >= 0) oA(a, b);
            else {
                for (var c = 0; c < 9; c++) a.g.push(b & 127 | 128), b >>= 7;
                a.g.push(1)
            }
        };
    var df = function() {
            this.l = [];
            this.o = 0;
            this.g = new nA
        },
        ef = function(a, b) {
            b.length !== 0 && (a.l.push(b), a.o += b.length)
        },
        Ye = function(a, b) {
            Ve(a, b, 2);
            b = a.g.end();
            ef(a, b);
            b.push(a.o);
            return b
        },
        Ze = function(a, b) {
            var c = b.pop();
            for (c = a.o + a.g.length() - c; c > 127;) b.push(c & 127 | 128), c >>>= 7, a.o++;
            b.push(c);
            a.o++
        },
        Ve = function(a, b, c) {
            oA(a.g, b * 8 + c)
        },
        qA = function(a, b, c) {
            Ve(a, b, 2);
            oA(a.g, c.length);
            ef(a, a.g.end());
            ef(a, c)
        };
    var Ne = function(a, b) {
        this.g = a;
        this.ml = b
    };
    var Qe = (0, _.B.Symbol)(),
        Ge = (0, _.B.Symbol)(),
        Me = (0, _.B.Symbol)(),
        Pe = (0, _.B.Symbol)(),
        rA = Te(function(a, b, c) {
            b = oc(b);
            b != null && (Ve(a, c, 5), a = a.g, c = Nz || (Nz = new DataView(new ArrayBuffer(8))), c.setFloat32(0, +b, !0), ec = 0, b = dc = c.getUint32(0, !0), a.g.push(b >>> 0 & 255), a.g.push(b >>> 8 & 255), a.g.push(b >>> 16 & 255), a.g.push(b >>> 24 & 255))
        }),
        sA = Te(Xe),
        tA = Te(Xe),
        uA = Te(function(a, b, c) {
            a: if (b != null) {
                if (vc(b)) {
                    if (typeof b === "string") {
                        b = Oc(b);
                        break a
                    }
                    if (typeof b === "number") {
                        b = Mc(b);
                        break a
                    }
                }
                b = void 0
            }b != null && (typeof b === "string" && kA(b), b != null && (Ve(a, c, 0), typeof b === "number" ? (a = a.g, ic(b), We(a, dc, ec)) : (c = kA(b), We(a.g, c.o, c.g))))
        }),
        vA = Te(function(a, b, c) {
            b = Ac(b);
            b != null && b != null && (Ve(a, c, 0), pA(a.g, b))
        }),
        wA = Te(function(a, b, c) {
            b = sc(b);
            b != null && (Ve(a, c, 0), a.g.g.push(b ? 1 : 0))
        }),
        xA = Te(function(a, b, c) {
            b = _.Xc(b);
            b != null && qA(a, c, nb(b))
        }),
        yA;
    yA = new Ne(function(a, b, c) {
        b = Ee(_.Xc, b);
        if (b != null)
            for (var d = 0; d < b.length; d++) {
                var e = a,
                    f = c,
                    h = b[d];
                h != null && qA(e, f, nb(h))
            }
    }, !1);
    var Re = new Ne($e, !0),
        Oe = new Ne($e, !0),
        zA;
    zA = new Ne(function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) $e(a, b[f], c, d, e)
    }, !0);
    var AA = Te(function(a, b, c) {
            b = Dc(b);
            b != null && b != null && (Ve(a, c, 0), oA(a.g, b))
        }),
        BA = Te(function(a, b, c) {
            b = Ac(b);
            b != null && (b = parseInt(b, 10), Ve(a, c, 0), pA(a.g, b))
        }),
        CA;
    CA = new Ne(function(a, b, c) {
        b = Ee(Ac, b);
        if (b != null && b.length) {
            c = Ye(a, c);
            for (var d = 0; d < b.length; d++) pA(a.g, b[d]);
            Ze(a, c)
        }
    }, !1);
    _.af = void 0;
    var DA = function(a) {
        this.D = _.D(a)
    };
    _.R(DA, _.E);
    var EA = _.Zx(["https://pagead2.googlesyndication.com/pagead/managed/js/activeview/current/ufs_web_display.js"]);
    var zf = _.Zx(["https://tpc.googlesyndication.com/sodar/", ".js"]),
        FA = _.Zx(["https://www.google.com/recaptcha/api2/aframe"]);
    _.kf(FA);
    var GA, HA, Wm;
    GA = function() {
        return !0
    };
    HA = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Wm = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.IA = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    _.JA = function(a, b) {
        var c = 0,
            d = !1,
            e = [],
            f = function() {
                c = 0;
                d && (d = !1, h())
            },
            h = function() {
                c = _.ca.setTimeout(f, b);
                var k = e;
                e = [];
                a.apply(void 0, k)
            };
        return function(k) {
            e = arguments;
            c ? d = !0 : h()
        }
    };
    var mf;
    mf = Wm(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.ca.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.tf = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, nf(d)), !0) : !1
    };
    _.Of = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, nf(d)), !0) : !1
    };
    var wf = function(a) {
        return new _.B.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (d.status >= 200 && d.status < 300 ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var KA = function(a) {
        this.D = _.D(a)
    };
    _.R(KA, _.E);
    var LA = function(a) {
        this.D = _.D(a)
    };
    _.R(LA, _.E);
    var MA = function(a) {
            this.g = a.o;
            this.o = a.l;
            this.B = a.B;
            this.Ce = a.Ce;
            this.C = a.C;
            this.Zd = a.Zd;
            this.Pf = a.Pf;
            this.mg = a.mg;
            this.Mf = a.Mf;
            this.l = a.g
        },
        NA = function(a, b, c) {
            this.o = a;
            this.l = b;
            this.B = c;
            this.C = window;
            this.Zd = "env";
            this.Pf = "n";
            this.mg = "0";
            this.Mf = "1";
            this.g = !0
        };
    NA.prototype.build = function() {
        return new MA(this)
    };
    var OA = function(a) {
        this.D = _.D(a)
    };
    _.R(OA, _.E);
    OA.prototype.getId = function() {
        return _.u(this, 1)
    };
    var PA = [0, xA];
    var QA = function(a) {
        this.D = _.D(a)
    };
    _.R(QA, _.E);
    var RA = [0, xA, -3];
    var SA = function(a) {
        this.D = _.D(a)
    };
    _.R(SA, _.E);
    SA.prototype.getWidth = function() {
        return _.Zz(this, 1)
    };
    SA.prototype.getHeight = function() {
        return _.Zz(this, 2)
    };
    var TA = [0, vA, -1];
    var UA = function(a) {
        this.D = _.D(a)
    };
    _.R(UA, _.E);
    var VA = [0, tA, wA, xA, -1];
    var WA = function(a) {
        this.D = _.D(a)
    };
    _.R(WA, _.E);
    WA.prototype.Gj = function() {
        return iq(this, SA, 7)
    };
    WA.Z = [4];
    var XA = [0, xA, tA, xA, yA, BA, PA, TA, tA, VA, xA, RA];
    var tq = function(a) {
        this.D = _.D(a)
    };
    _.R(tq, _.E);
    var sq = function(a, b) {
            return _.ur(a, 1, b)
        },
        qq = function(a, b) {
            return _.dk(a, 4, b)
        },
        rq = function(a, b) {
            return _.Yq(a, 2, b)
        };
    var YA = function(a) {
        this.D = _.D(a)
    };
    _.R(YA, _.E);
    var ZA = function(a, b) {
            return _.uq(a, 1, b)
        },
        $A = function(a, b) {
            return gk(a, 3, WA, b)
        },
        aB = function(a, b) {
            return _.ur(a, 4, b)
        };
    YA.prototype.Aj = function() {
        return _.Uf(this, 7, 0)
    };
    YA.Z = [10, 3];
    var bB = [0, BA, vA, xA, wA];
    var cB = [0, xA, tA, zA, XA, BA, bB, wA, BA, 2, yA];
    var dB = function(a) {
        this.D = _.D(a)
    };
    _.R(dB, _.E);
    var eB = function(a) {
        this.D = _.D(a)
    };
    _.R(eB, _.E);
    var fB = function(a, b) {
            return we(a, 2, YA, b)
        },
        gB = function(a, b) {
            _.ol(a, 5, b)
        },
        hB = function(a, b) {
            _.uq(a, 10, b)
        },
        iB = function(a, b) {
            _.uq(a, 11, b)
        };
    eB.Z = [2];
    var jB = [0, BA, zA, cB, BA, xA, bB, xA, wA, vA, [0, BA, wA, tA], xA, -1];
    var kB = function(a) {
        this.D = _.D(a)
    };
    _.R(kB, _.E);
    var lB = function(a) {
        var b = new eB;
        b = _.ur(b, 1, 1);
        return we(a, 1, eB, b)
    };
    kB.Z = [1];
    kB.prototype.g = ff([0, zA, jB]);
    var mB = function(a) {
        this.D = _.D(a)
    };
    _.R(mB, _.E);
    var cA = [2, 3];
    var nB = function(a) {
        this.D = _.D(a)
    };
    _.R(nB, _.E);
    nB.Z = [1];
    var oB = function(a) {
        this.D = _.D(a)
    };
    _.R(oB, _.E);
    oB.Z = [1];
    var pB = function(a) {
        this.D = _.D(a)
    };
    _.R(pB, _.E);
    var qB = [2, 3];
    var rB = function(a) {
        this.D = _.D(a)
    };
    _.R(rB, _.E);
    rB.Z = [2];
    var sB = function(a) {
        this.D = _.D(a)
    };
    _.R(sB, _.E);
    sB.prototype.getId = function() {
        return fv(this, 1)
    };
    var tB = function(a) {
        this.D = _.D(a)
    };
    _.R(tB, _.E);
    tB.Z = [6, 4];
    var uB = function(a) {
        this.D = _.D(a)
    };
    _.R(uB, _.E);
    uB.Z = [4, 5];
    var vB = function(a) {
        this.D = _.D(a)
    };
    _.R(vB, _.E);
    var wB = function(a) {
        this.D = _.D(a)
    };
    _.R(wB, _.E);
    wB.prototype.zj = function() {
        return Tz(this, vB, 2)
    };
    wB.Z = [1];
    var xB = function(a) {
        this.D = _.D(a)
    };
    _.R(xB, _.E);
    var yB = function(a) {
        this.D = _.D(a)
    };
    _.R(yB, _.E);
    var zB = function(a) {
        return _.Uj(a, xB, 1, _.Wj())
    };
    yB.Z = [1];
    var AB = function(a) {
        this.D = _.D(a)
    };
    _.R(AB, _.E);
    AB.prototype.getAdUnitPath = function() {
        return _.u(this, 2)
    };
    var BB = function(a) {
        this.D = _.D(a)
    };
    _.R(BB, _.E);
    var CB = function(a) {
        this.D = _.D(a)
    };
    _.R(CB, _.E);
    var DB = function(a) {
        this.D = _.D(a)
    };
    _.R(DB, _.E);
    var EB = function(a) {
        this.D = _.D(a)
    };
    _.R(EB, _.E);
    EB.prototype.getEscapedQemQueryId = function() {
        return _.u(this, 1)
    };
    var FB = function(a) {
        this.D = _.D(a)
    };
    _.R(FB, _.E);
    FB.prototype.getAdUnitPath = function() {
        return _.u(this, 1)
    };
    _.Uz = function(a) {
        this.D = _.D(a)
    };
    _.R(_.Uz, _.E);
    _.Uz.Z = [3];
    _.GB = function(a) {
        this.D = _.D(a)
    };
    _.R(_.GB, _.E);
    _.GB.Z = [15, 24];
    var HB = function(a) {
        this.D = _.D(a)
    };
    _.R(HB, _.E);
    var IB = function(a) {
        this.D = _.D(a)
    };
    _.R(IB, _.E);
    var JB = [5, 7, 8, 9];
    var KB = function(a) {
        this.D = _.D(a)
    };
    _.R(KB, _.E);
    var LB = function(a) {
        this.D = _.D(a)
    };
    _.R(LB, _.E);
    var MB = function(a) {
        this.D = _.D(a)
    };
    _.R(MB, _.E);
    MB.Z = [4, 5, 6, 11];
    var NB = [0, xA, [0, sA],
        [0, BA, tA]
    ];
    var OB = function(a) {
        this.D = _.D(a)
    };
    _.R(OB, _.E);
    var PB = gf(OB);
    var QB = function(a) {
        this.D = _.D(a)
    };
    _.R(QB, _.E);
    QB.prototype.getValue = function() {
        return _.u(this, 2)
    };
    QB.prototype.ah = function() {
        return _.Yj(this, 2)
    };
    var RB = function(a) {
        this.D = _.D(a)
    };
    _.R(RB, _.E);
    var SB = function(a) {
        this.D = _.D(a)
    };
    _.R(SB, _.E);
    SB.Z = [13];
    var TB = function(a) {
        this.D = _.D(a)
    };
    _.R(TB, _.E);
    TB.Z = [15, 13];
    var UB = function(a) {
        this.D = _.D(a)
    };
    _.R(UB, _.E);
    var fk = function(a) {
        var b = new UB;
        return _.ur(b, 1, a)
    };
    var VB = [0, BA];
    var Vj = function(a) {
        this.D = _.D(a)
    };
    _.R(Vj, _.E);
    var WB = function(a) {
            var b = new Vj;
            return _.uq(b, 1, a)
        },
        XB = function(a) {
            var b = window.Date.now();
            b = _.x(Number, "isFinite").call(Number, b) ? Math.round(b) : 0;
            return _.al(a, 3, b)
        };
    Vj.prototype.wb = function(a) {
        return _.ol(this, 10, a)
    };
    var YB = gf(Vj);
    var ZB = [0, xA, -1, tA, vA, -2, tA, rA, wA, VB, wA];
    var $B = [0, 1, [0, uA, -2], -1, xA, -1, wA, [0, 3, BA, xA], tA, CA, AA];
    var aC = function(a) {
        this.D = _.D(a)
    };
    _.R(aC, _.E);
    aC.Z = [1, 2];
    aC.prototype.g = ff([0, zA, $B, zA, ZB]);
    var bC = function(a) {
        this.D = _.D(a)
    };
    _.R(bC, _.E);
    var cC = function(a) {
        this.D = _.D(a)
    };
    _.R(cC, _.E);
    cC.Z = [1, 3];
    var dC = function(a) {
        this.D = _.D(a)
    };
    _.R(dC, _.E);
    var eC = function(a) {
        this.D = _.D(a)
    };
    _.R(eC, _.E);
    var fC = function(a) {
        this.D = _.D(a)
    };
    _.R(fC, _.E);
    fC.prototype.getValue = function() {
        return _.u(this, 1)
    };
    fC.prototype.ah = function() {
        return _.Yj(this, 1)
    };
    fC.prototype.getVersion = function() {
        return _.Uf(this, 5, 0)
    };
    var gC = function(a) {
        this.D = _.D(a)
    };
    _.R(gC, _.E);
    var hC = function(a) {
        this.D = _.D(a)
    };
    _.R(hC, _.E);
    hC.prototype.getAdUnitPath = function() {
        return _.u(this, 1)
    };
    var iC = function(a) {
        this.D = _.D(a)
    };
    _.R(iC, _.E);
    var jC = function(a) {
        this.D = _.D(a)
    };
    _.R(jC, _.E);
    var kC = function(a) {
        this.D = _.D(a)
    };
    _.R(kC, _.E);
    var lC = function(a) {
        this.D = _.D(a)
    };
    _.R(lC, _.E);
    lC.prototype.getContentUrl = function() {
        return _.u(this, 2)
    };
    lC.Z = [11];
    var mC = function(a) {
        this.D = _.D(a)
    };
    _.R(mC, _.E);
    mC.prototype.getEscapedQemQueryId = function() {
        return _.u(this, 4)
    };
    mC.Z = [2, 23, 31];
    var nC = function(a) {
        this.D = _.D(a)
    };
    _.R(nC, _.E);
    var oC = function(a) {
        this.D = _.D(a)
    };
    _.R(oC, _.E);
    var pC = function(a) {
        this.D = _.D(a)
    };
    _.R(pC, _.E);
    var qC = function(a) {
        this.D = _.D(a)
    };
    _.R(qC, _.E);
    var rC = function(a) {
        this.D = _.D(a)
    };
    _.R(rC, _.E);
    var sC = function(a) {
        this.D = _.D(a)
    };
    _.R(sC, _.E);
    sC.prototype.getEscapedQemQueryId = function() {
        return _.u(this, 2)
    };
    sC.Z = [30];
    var tC = function(a) {
        this.D = _.D(a)
    };
    _.R(tC, _.E);
    var uC = function(a) {
        this.D = _.D(a)
    };
    _.R(uC, _.E);
    var vC = function(a) {
        this.D = _.D(a)
    };
    _.R(vC, _.E);
    var wC = function(a) {
            return _.wm(a, sC, 5)
        },
        xC = function(a) {
            return Tz(a, sC, 5)
        };
    vC.prototype.getWidth = function() {
        return _.Zz(this, 9)
    };
    vC.prototype.getHeight = function() {
        return _.Zz(this, 10)
    };
    vC.Z = [3, 7, 27, 11, 32];
    var yC = function(a) {
        this.D = _.D(a)
    };
    _.R(yC, _.E);
    yC.prototype.getHeight = function() {
        return Tr(this, 6)
    };
    yC.prototype.getWidth = function() {
        return Tr(this, 7)
    };
    yC.prototype.getEscapedQemQueryId = function() {
        return Xj(this, 34)
    };
    yC.Z = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63, 67];
    var zC = [39, 48];
    var AC = window;
    var Ax = function(a) {
        this.D = _.D(a)
    };
    _.R(Ax, _.E);
    Ax.Z = [15];
    var zx = function(a) {
        this.D = _.D(a)
    };
    _.R(zx, _.E);
    zx.prototype.getCorrelator = function() {
        Hb(this, Kz);
        return _.ig(this, 1)
    };
    zx.prototype.setCorrelator = function(a) {
        return _.Ii(this, 1, a)
    };
    var yx = function(a) {
        this.D = _.D(a)
    };
    _.R(yx, _.E);
    _.BC = Wm(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.hz(iz);
        return !b.parentElement
    });
    _.Jm = function(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    };
    _.r = _.Jm.prototype;
    _.r.equals = function(a) {
        return a instanceof _.Jm && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    _.r.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.r.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.r.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.r.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };
    _.Nm = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.r = _.Nm.prototype;
    _.r.aspectRatio = function() {
        return this.width / this.height
    };
    _.r.isEmpty = function() {
        return !(this.width * this.height)
    };
    _.r.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.r.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.r.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.r.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };
    var Wf, fj, EC, GC, IC, NC;
    Wf = function(a) {
        return a ? new _.CC(_.DC(a)) : Ey || (Ey = new _.CC)
    };
    fj = function(a, b) {
        Ya(b, function(c, d) {
            d == "style" ? a.style.cssText = c : d == "class" ? a.className = c : d == "for" ? a.htmlFor = c : EC.hasOwnProperty(d) ? a.setAttribute(EC[d], c) : d.lastIndexOf("aria-", 0) == 0 || d.lastIndexOf("data-", 0) == 0 ? a.setAttribute(d, c) : a[d] = c
        })
    };
    EC = {
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
    };
    _.FC = function(a) {
        a = a.document;
        a = a.compatMode == "CSS1Compat" ? a.documentElement : a.body;
        return new _.Nm(a.clientWidth, a.clientHeight)
    };
    GC = function(a) {
        return a.scrollingElement ? a.scrollingElement : yz || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement
    };
    _.HC = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    IC = function(a, b, c) {
        function d(k) {
            k && b.appendChild(typeof k === "string" ? a.createTextNode(k) : k)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!_.Ta(f) || _.La(f) && f.nodeType > 0) d(f);
            else {
                a: {
                    if (f && typeof f.length == "number") {
                        if (_.La(f)) {
                            var h = typeof f.item == "function" || typeof f.item == "string";
                            break a
                        }
                        if (typeof f === "function") {
                            h = typeof f.item == "function";
                            break a
                        }
                    }
                    h = !1
                }
                _.$y(h ? _.Ja(f) : f, d)
            }
        }
    };
    _.JC = function(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.KC = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.LC = function(a) {
        var b;
        if (b = a.parentElement) return b;
        b = a.parentNode;
        return _.La(b) && b.nodeType == 1 ? b : null
    };
    _.MC = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    _.DC = function(a) {
        return a.nodeType == 9 ? a : a.ownerDocument || a.document
    };
    NC = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.HC(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    _.Ni = function(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (d == null || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    };
    _.CC = function(a) {
        this.g = a || _.ca.document || document
    };
    _.r = _.CC.prototype;
    _.r.Lm = function(a) {
        var b = this.g;
        return typeof a === "string" ? b.getElementById(a) : a
    };
    _.r.So = _.CC.prototype.Lm;
    _.r.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    _.r.createElement = function(a) {
        return _.JC(this.g, a)
    };
    _.r.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    _.r.append = function(a, b) {
        IC(_.DC(a), a, arguments)
    };
    _.r.ul = _.KC;
    _.r.contains = _.MC;
    var PC = function() {
            return fa && ha ? ha.mobile : !OC() && (ja("iPod") || ja("iPhone") || ja("Android") || ja("IEMobile"))
        },
        OC = function() {
            return fa && ha ? !ha.mobile && (ja("iPad") || ja("Android") || ja("Silk")) : ja("iPad") || ja("Android") && !ja("Mobile") || ja("Silk")
        };
    var RC, sp;
    _.QC = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    RC = function(a) {
        return a ? decodeURI(a) : a
    };
    _.In = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) _.In(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    };
    sp = /#|$/;
    var jl, Ak, SC, Bk, Xm, Mp, Lx, Kx, UC, VC, Ym, WC, XC, YC, ZC, $C, Qg, sx, aD, bD, dq, Gj, eq, lq, cD, eD, fD, gD, hD, iD, Qj, jD, Eo, Co, kD, On, lD, mD;
    _.Sk = function(a) {
        try {
            return !!a && a.location.href != null && vz(a, "foo")
        } catch (b) {
            return !1
        }
    };
    jl = function(a, b, c, d) {
        b = b === void 0 ? !1 : b;
        d = d === void 0 ? _.ca : d;
        c = (c === void 0 ? 0 : c) ? SC(d) : d;
        for (d = 0; c && d++ < 40 && (!b && !_.Sk(c) || !a(c));) c = SC(c)
    };
    Ak = function() {
        var a = window;
        jl(function(b) {
            a = b;
            return !1
        });
        return a
    };
    SC = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Bk = function(a) {
        return _.Sk(a.top) ? a.top : null
    };
    _.qp = function(a, b) {
        var c = _.Nf("SCRIPT", a);
        hb(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Xm = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.oh = function() {
        if (!_.B.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.B.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.Mn = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.TC = function(a) {
        var b = [];
        _.Mn(a, function(c) {
            b.push(c)
        });
        return b
    };
    Mp = function(a, b) {
        return ab(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.ph = function(a) {
        var b = a.length;
        if (b == 0) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    };
    Lx = Wm(function() {
        return _.wg(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], UC) || Math.random() < 1E-4
    });
    Kx = Wm(function() {
        return UC("MSIE")
    });
    UC = function(a) {
        return ea().indexOf(a) != -1
    };
    VC = /^([0-9.]+)px$/;
    Ym = function(a) {
        return (a = VC.exec(a)) ? +a[1] : null
    };
    WC = function() {
        var a = window;
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
    };
    XC = function() {
        var a = _.ca.location.href;
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && c[1].length > 1 ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    YC = {
        Wo: "allow-forms",
        Xo: "allow-modals",
        Yo: "allow-orientation-lock",
        Zo: "allow-pointer-lock",
        ap: "allow-popups",
        bp: "allow-popups-to-escape-sandbox",
        cp: "allow-presentation",
        ep: "allow-same-origin",
        gp: "allow-scripts",
        hp: "allow-top-navigation",
        ip: "allow-top-navigation-by-user-activation"
    };
    ZC = Wm(function() {
        return _.TC(YC)
    });
    $C = function(a) {
        var b = ZC();
        return a.length ? _.yi(b, function(c) {
            return !(_.Ga(a, c) >= 0)
        }) : b
    };
    Qg = function() {
        var a = _.Nf("IFRAME"),
            b = {};
        _.$y(ZC(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    sx = function(a) {
        a = a && a.toString && a.toString();
        return typeof a === "string" && a.indexOf("[native code]") != -1
    };
    aD = function(a, b) {
        for (var c = 0; c < 50; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = SC(a))) break
        }
        return null
    };
    bD = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = (d = b.body) != null ? d : c == null ? void 0 : c.parentElement;
            if (e) {
                var f = _.Nf("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (h) {}
        return null
    };
    _.oq = Wm(function() {
        return PC() ? 2 : OC() ? 1 : 0
    });
    dq = function(a, b) {
        var c;
        for (c = c === void 0 ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.Qp = function(a, b) {
        _.Mn(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    Gj = function(a, b, c) {
        for (c = c === void 0 ? 100 : c; a && c-- && b(a) !== !1;) a = a.parentElement
    };
    eq = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Xm(a, window);
            if (d) {
                if (b(d, a)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    lq = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return a.length != 6 ? null : _.az(a, parseFloat)
    };
    cD = {};
    _.dD = (cD["http://googleads.g.doubleclick.net"] = !0, cD["http://pagead2.googlesyndication.com"] = !0, cD["https://googleads.g.doubleclick.net"] = !0, cD["https://pagead2.googlesyndication.com"] = !0, cD);
    eD = function(a) {
        _.ca.console && _.ca.console.warn && _.ca.console.warn(a)
    };
    fD = [];
    gD = function() {
        var a = fD;
        fD = [];
        a = _.A(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    hD = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return c == "n" ? "\n" : c == "r" ? "\r" : "\\"
        })
    };
    iD = function() {
        var a = a === void 0 ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    };
    Qj = function(a) {
        if (typeof a.goog_pvsid !== "number") try {
            Object.defineProperty(a, "goog_pvsid", {
                value: iD(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    jD = function(a, b) {
        a.readyState === "complete" || a.readyState === "interactive" ? (fD.push(b), fD.length == 1 && (_.B.Promise ? _.B.Promise.resolve().then(gD) : window.setImmediate ? setImmediate(gD) : setTimeout(gD, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    Eo = function(a) {
        return typeof a === "number" && isFinite(a) && a % 1 == 0 && a > 0
    };
    Co = function(a) {
        return a === 0 || Eo(a)
    };
    kD = function(a, b) {
        return new _.B.Promise(function(c) {
            setTimeout(function() {
                return void c(b)
            }, a)
        })
    };
    On = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.Nf = function(a, b) {
        b = b === void 0 ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    lD = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.Sk(a) && (b = a);
        return b
    };
    _.ni = function(a) {
        return na() && PC() ? mD(a, !0) : 1
    };
    mD = function(a, b) {
        var c = (b === void 0 ? 0 : b) ? Bk(a) : a;
        if (!c) return 1;
        a = (0, _.oq)() === 0;
        b = !!c.document.querySelector('meta[name=viewport][content*="width=device-width"]');
        var d = c.innerWidth;
        c = c.outerWidth;
        if (d === 0) return 1;
        var e = Math.round((c / d + _.x(Number, "EPSILON")) * 100) / 100;
        return e === 1 ? 1 : a || b ? e : Math.round((c / d / .4 + _.x(Number, "EPSILON")) * 100) / 100
    };
    _.nD = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.nD.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.nD.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.oD = function(a) {
        return new _.nD(a.top, a.right, a.bottom, a.left)
    };
    _.r = _.nD.prototype;
    _.r.contains = function(a) {
        return this && a ? a instanceof _.nD ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    _.r.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.r.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.r.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    _.r.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var pD = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        qD = function(a) {
            return new _.nD(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        rD = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new pD(c, e, d - c, a - e)
            }
            return null
        };
    _.r = pD.prototype;
    _.r.contains = function(a) {
        return a instanceof _.Jm ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    _.r.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.r.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.r.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    _.r.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    var sD = function(a) {
        return (a = a === void 0 ? Cf() : a) ? _.Sk(a.master) ? a.master : null : null
    };
    var vD, xD, Mm, yD, zD, Im;
    _.uD = function(a, b, c) {
        if (typeof b === "string")(b = _.tD(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.tD(c, d);
                f && (c.style[f] = e)
            }
    };
    vD = {};
    _.tD = function(a, b) {
        var c = vD[b];
        if (!c) {
            var d = _.sz(b);
            c = d;
            a.style[d] === void 0 && (d = (yz ? "Webkit" : xz ? "Moz" : wz ? "ms" : null) + tz(d), a.style[d] !== void 0 && (c = d));
            vD[b] = c
        }
        return c
    };
    _.wD = function(a, b) {
        var c = _.DC(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    xD = function(a, b) {
        return _.wD(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Mm = function(a) {
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
    };
    yD = function(a) {
        var b = _.DC(a),
            c = xD(a, "position"),
            d = c == "fixed" || c == "absolute";
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (a.nodeType == 11 && a.host && (a = a.host), c = xD(a, "position"), d = d && c == "static" && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || c == "fixed" || c == "absolute" || c == "relative")) return a;
        return null
    };
    zD = function(a) {
        var b = _.DC(a),
            c = new _.Jm(0, 0);
        if (a == (b ? _.DC(b) : document).documentElement) return c;
        a = Mm(a);
        var d = Wf(b).g;
        b = GC(d);
        d = d.parentWindow || d.defaultView;
        b = new _.Jm(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Im = function(a, b) {
        var c = new _.Jm(0, 0),
            d = _.HC(_.DC(a));
        if (!vz(d, "parent")) return c;
        do {
            var e = d == b ? zD(a) : _.AD(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.AD = function(a) {
        a = Mm(a);
        return new _.Jm(a.left, a.top)
    };
    _.BD = function(a, b) {
        typeof a == "number" && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Lm = function(a, b) {
        if (xD(b, "display") != "none") return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.CD = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = yz && !b && !c;
        return (b === void 0 || d) && a.getBoundingClientRect ? (a = Mm(a), new _.Nm(a.right - a.left, a.bottom - a.top)) : new _.Nm(b, c)
    };
    var ED, FD, aq;
    _.DD = _.Zx(["//fonts.googleapis.com/css"]);
    ED = function(a) {
        a = a === void 0 ? AC : a;
        try {
            return a.history.length
        } catch (b) {
            return 0
        }
    };
    FD = function(a, b) {
        b = b === void 0 ? 1 : b;
        a = sD(Cf(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b
    };
    aq = function(a) {
        a = sD(Cf(a)) || a;
        a = a.google_unique_id;
        return typeof a === "number" ? a : 0
    };
    var GD = {
        Dp: 0,
        Cp: 1,
        zp: 2,
        up: 3,
        Ap: 4,
        vp: 5,
        Bp: 6,
        xp: 7,
        yp: 8,
        sp: 9,
        wp: 10,
        Ep: 11
    };
    var HD = {
        Gp: 0,
        Hp: 1,
        Fp: 2
    };
    _.Ki = function(a) {
        this.D = _.D(a)
    };
    _.R(_.Ki, _.E);
    _.Ki.Z = [1];
    var ID = function(a) {
        this.D = _.D(a)
    };
    _.R(ID, _.E);
    var JD = {
        "-": 0,
        Y: 2,
        N: 1
    };
    var KD = function(a) {
        this.D = _.D(a)
    };
    _.R(KD, _.E);
    KD.prototype.getVersion = function() {
        return _.Zz(this, 2)
    };
    KD.Z = [3];
    var LD = function(a) {
        this.D = _.D(a)
    };
    _.R(LD, _.E);
    var MD = function(a) {
        this.D = _.D(a)
    };
    _.R(MD, _.E);
    var ND = function(a) {
        this.D = _.D(a)
    };
    _.R(ND, _.E);
    ND.prototype.getVersion = function() {
        return _.Zz(this, 1)
    };
    var OD = function(a) {
        this.D = _.D(a)
    };
    _.R(OD, _.E);
    var PD = function(a) {
        this.D = _.D(a)
    };
    _.R(PD, _.E);
    var QD = function(a) {
        var b = new PD;
        return _.ol(b, 1, a)
    };
    var RD = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        SD = 6 + RD.reduce(function(a, b) {
            return a + b
        });
    var TD = function(a) {
        this.D = _.D(a)
    };
    _.R(TD, _.E);
    var UD = function(a) {
        this.D = _.D(a)
    };
    _.R(UD, _.E);
    UD.prototype.getVersion = function() {
        return _.Zz(this, 1)
    };
    var VD = function(a) {
        this.D = _.D(a)
    };
    _.R(VD, _.E);
    var WD = function(a) {
        this.D = _.D(a)
    };
    _.R(WD, _.E);
    var XD = function(a) {
        var b = new WD;
        return _.ol(b, 1, a)
    };
    var YD = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        ZD = 6 + YD.reduce(function(a, b) {
            return a + b
        });
    var $D = function(a) {
        this.D = _.D(a)
    };
    _.R($D, _.E);
    var aE = function(a) {
        this.D = _.D(a)
    };
    _.R(aE, _.E);
    var bE = function(a) {
        this.D = _.D(a)
    };
    _.R(bE, _.E);
    bE.prototype.getVersion = function() {
        return _.Zz(this, 1)
    };
    var cE = function(a) {
        this.D = _.D(a)
    };
    _.R(cE, _.E);
    var dE = function(a) {
        this.D = _.D(a)
    };
    _.R(dE, _.E);
    var eE = function(a) {
        var b = new dE;
        return _.ol(b, 1, a)
    };
    var fE = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        gE = 6 + fE.reduce(function(a, b) {
            return a + b
        });
    var hE = function(a) {
        this.D = _.D(a)
    };
    _.R(hE, _.E);
    var iE = function(a) {
        this.D = _.D(a)
    };
    _.R(iE, _.E);
    var jE = function(a) {
        this.D = _.D(a)
    };
    _.R(jE, _.E);
    jE.prototype.getVersion = function() {
        return _.Zz(this, 1)
    };
    var kE = function(a) {
        this.D = _.D(a)
    };
    _.R(kE, _.E);
    var lE = function(a) {
        this.D = _.D(a)
    };
    _.R(lE, _.E);
    var mE = function(a) {
        var b = new lE;
        return _.ol(b, 1, a)
    };
    var nE = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        oE = 6 + nE.reduce(function(a, b) {
            return a + b
        });
    var pE = function(a) {
        this.D = _.D(a)
    };
    _.R(pE, _.E);
    var qE = function(a) {
        this.D = _.D(a)
    };
    _.R(qE, _.E);
    qE.prototype.getVersion = function() {
        return _.Zz(this, 1)
    };
    var rE = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        sE = 6 + rE.reduce(function(a, b) {
            return a + b
        });
    var tE = function(a) {
        this.D = _.D(a)
    };
    _.R(tE, _.E);
    tE.Z = [3];
    var uE = function(a) {
        this.D = _.D(a)
    };
    _.R(uE, _.E);
    var vE = function(a, b) {
            return _.le(a, 1, b, _.wc)
        },
        wE = function(a, b) {
            return _.le(a, 2, b, _.wc)
        },
        xE = function(a, b) {
            return _.le(a, 3, b, zc)
        },
        yE = function(a, b) {
            _.le(a, 4, b, zc)
        };
    uE.Z = [1, 2, 3, 4];
    var zE = function(a) {
        this.D = _.D(a)
    };
    _.R(zE, _.E);
    var AE = function(a) {
        this.D = _.D(a)
    };
    _.R(AE, _.E);
    AE.prototype.getVersion = function() {
        return _.Zz(this, 1)
    };
    var BE = function(a, b) {
            return _.ul(a, 1, b)
        },
        CE = function(a, b) {
            return _.ol(a, 2, b)
        },
        DE = function(a, b) {
            return _.ol(a, 3, b)
        },
        EE = function(a, b) {
            return _.ul(a, 4, b)
        },
        FE = function(a, b) {
            return _.ul(a, 5, b)
        },
        GE = function(a, b) {
            return _.ul(a, 6, b)
        },
        HE = function(a, b) {
            return _.Hi(a, 7, b)
        },
        IE = function(a, b) {
            return _.ul(a, 8, b)
        },
        JE = function(a, b) {
            return _.ul(a, 9, b)
        },
        KE = function(a, b) {
            return _.tl(a, 10, b)
        },
        LE = function(a, b) {
            return _.tl(a, 11, b)
        },
        ME = function(a, b) {
            return _.le(a, 12, b, _.wc)
        },
        NE = function(a, b) {
            return _.le(a, 13, b, _.wc)
        },
        OE = function(a, b) {
            return _.le(a, 14, b, _.wc)
        },
        PE = function(a, b) {
            return _.tl(a, 15, b)
        },
        QE = function(a, b) {
            return _.Hi(a, 16, b)
        },
        RE = function(a, b) {
            return _.le(a, 17, b, zc)
        },
        SE = function(a, b) {
            return _.le(a, 18, b, zc)
        },
        TE = function(a, b) {
            return _.qm(a, 19, b)
        };
    AE.Z = [12, 13, 14, 17, 18, 19];
    var UE = function(a) {
        this.D = _.D(a)
    };
    _.R(UE, _.E);
    var VE = "a".charCodeAt(),
        WE = Za(GD),
        XE = Za(HD);
    var YE = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.o = a;
            this.g = 0
        },
        $E = function(a) {
            a = ZE(a, 36);
            var b = new zE;
            b = _.Ii(b, 1, Math.floor(a / 10));
            return _.ul(b, 2, a % 10 * 1E8)
        },
        aF = function(a) {
            return String.fromCharCode(VE + ZE(a, 6)) + String.fromCharCode(VE + ZE(a, 6))
        },
        dF = function(a) {
            var b = ZE(a, 16);
            return !!ZE(a, 1) === !0 ? (a = bF(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : cF(a, b)
        },
        eF = function(a) {
            for (var b = [], c = ZE(a, 12); c--;) {
                var d = ZE(a, 6),
                    e = ZE(a, 2),
                    f = bF(a),
                    h = b,
                    k = h.push,
                    l = new tE;
                d = _.K(l, 1, d);
                e = _.K(d, 2, e);
                f = _.le(e, 3, f, zc);
                k.call(h, f)
            }
            return b
        },
        bF = function(a) {
            for (var b = ZE(a, 12), c = []; b--;) {
                var d = !!ZE(a, 1) === !0,
                    e = ZE(a, 16);
                if (d)
                    for (d = ZE(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, h) {
                return f - h
            });
            return c
        },
        cF = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (ZE(a, 1)) {
                    var f = e + 1;
                    if (c && c.indexOf(f) === -1) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        ZE = function(a, b) {
            if (a.g + b > a.o.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.o.substring(a.g, a.g + b);
            a.g += b;
            return parseInt(c, 2)
        };
    YE.prototype.skip = function(a) {
        this.g += a
    };
    var fF = function(a) {
        try {
            var b = Df(a).map(function(f) {
                    return (_.F = f.toString(2), _.x(_.F, "padStart")).call(_.F, 8, "0")
                }).join(""),
                c = new YE(b);
            if (ZE(c, 3) !== 3) return null;
            var d = wE(vE(new uE, cF(c, 24, WE)), cF(c, 24, WE)),
                e = ZE(c, 6);
            e !== 0 && yE(xE(d, cF(c, e)), cF(c, e));
            return d
        } catch (f) {
            return null
        }
    };
    var gF = function(a) {
        try {
            var b = Df(a).map(function(d) {
                    return (_.F = d.toString(2), _.x(_.F, "padStart")).call(_.F, 8, "0")
                }).join(""),
                c = new YE(b);
            return TE(SE(RE(QE(PE(OE(NE(ME(LE(KE(JE(IE(HE(GE(FE(EE(DE(CE(BE(new AE, ZE(c, 6)), $E(c)), $E(c)), ZE(c, 12)), ZE(c, 12)), ZE(c, 6)), aF(c)), ZE(c, 12)), ZE(c, 6)), !!ZE(c, 1)), !!ZE(c, 1)), cF(c, 12, XE)), cF(c, 24, WE)), cF(c, 24, WE)), !!ZE(c, 1)), aF(c)), dF(c)), dF(c)), eF(c))
        } catch (d) {
            return null
        }
    };
    var iF = function(a) {
            if (!a) return null;
            var b = a.split(".");
            if (b.length > 4) return null;
            a = gF(b[0]);
            if (!a) return null;
            var c = new UE;
            a = _.ol(c, 1, a);
            b.shift();
            b = _.A(b);
            for (c = b.next(); !c.done; c = b.next()) switch (c = c.value, hF(c)) {
                case 1:
                case 2:
                    break;
                case 3:
                    c = fF(c);
                    if (!c) return null;
                    _.ol(a, 2, c);
                    break;
                default:
                    return null
            }
            return a
        },
        hF = function(a) {
            try {
                var b = Df(a).map(function(c) {
                    return (_.F = c.toString(2), _.x(_.F, "padStart")).call(_.F, 8, "0")
                }).join("");
                return ZE(new YE(b), 3)
            } catch (c) {
                return -1
            }
        };
    var jF = function(a, b) {
        var c = {};
        if (Array.isArray(b) && b.length !== 0) {
            b = _.A(b);
            for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = a.indexOf(d) !== -1
        } else
            for (a = _.A(a), b = a.next(); !b.done; b = a.next()) c[b.value] = !0;
        delete c[0];
        return c
    };
    var kF = function(a) {
        this.D = _.D(a)
    };
    _.R(kF, _.E);
    _.Jl = function(a) {
        return !!(a.error && a.meta && a.id)
    };
    _.lF = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var mF = null,
        nF = function() {
            if (mF === null) {
                mF = "";
                try {
                    var a = "";
                    try {
                        a = _.ca.top.location.hash
                    } catch (c) {
                        a = _.ca.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        mF = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return mF
        };
    var oF = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = d === void 0 ? 0 : d;
        this.slotId = e;
        this.taskId = void 0;
        this.uniqueId = Math.random()
    };
    var pF, qF, rF, sF, tF;
    pF = _.ca.performance;
    qF = !!(pF && pF.mark && pF.measure && pF.clearMarks);
    rF = Wm(function() {
        var a;
        if (a = qF) a = nF(), a = !!a.indexOf && a.indexOf("1337") >= 0;
        return a
    });
    sF = function(a, b) {
        this.events = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.g = rF() || (c != null ? c : Math.random() < a)
    };
    _.Hl = function(a) {
        a && pF && rF() && (pF.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), pF.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    tF = function(a, b, c, d, e, f) {
        a.g && (b = new oF(b, c, d, e === void 0 ? 0 : e, f), !a.g || a.events.length > 2048 || a.events.push(b))
    };
    sF.prototype.start = function(a, b) {
        if (!this.g) return null;
        var c = _.Kf() || _.Jf();
        a = new oF(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        pF && rF() && pF.mark(b);
        return a
    };
    sF.prototype.end = function(a) {
        if (this.g && typeof a.value === "number") {
            var b = _.Kf() || _.Jf();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            pF && rF() && pF.mark(b);
            !this.g || this.events.length > 2048 || this.events.push(a)
        }
    };
    var ev = function(a, b, c) {
        var d = _.Kf();
        d && tF(a, b, 9, d, 0, c)
    };
    var xF, wF, zF, yF;
    _.uF = function() {
        this.l = "&";
        this.o = {};
        this.B = 0;
        this.g = []
    };
    _.vF = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    xF = function(a, b, c, d, e) {
        var f = [];
        _.Mn(a, function(h, k) {
            (h = wF(h, b, c, d, e)) && f.push(k + "=" + h)
        });
        return f.join(b)
    };
    wF = function(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c == "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], h = 0; h < a.length; h++) f.push(wF(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a == "object") return e = e || 0, e < 2 ? encodeURIComponent(xF(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    zF = function(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = yF(a) - b.length;
        if (d < 0) return "";
        a.g.sort(function(n, p) {
            return n - p
        });
        b = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var h = a.g[f], k = a.o[h], l = 0; l < k.length; l++) {
                if (!d) {
                    b = b == null ? h : b;
                    break
                }
                var m = xF(k[l], a.l, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.l;
                        break
                    }
                    b = b == null ? h : b
                }
            }
        a = "";
        b != null && (a = e + "trn=" + b);
        return c + a
    };
    yF = function(a) {
        var b = 1,
            c;
        for (c in a.o) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    };
    _.Tf = function(a) {
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
    var AF = function(a, b, c, d, e) {
            Pf(a, b, c === void 0 ? null : c, d === void 0 ? !1 : d, e === void 0 ? !1 : e)
        },
        Sf = function(a, b) {
            var c = c === void 0 ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.Mn(a, function(e, f) {
                if (e || e === 0) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            pu(d, c)
        },
        pu = function(a, b) {
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
            } : b.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            }), c.fetch(a, b)) : AF(c, a, void 0, b, d)
        };
    var BF = function(a, b) {
        var c = new kF;
        a = _.K(c, 1, a);
        b = _.Hi(a, 2, b);
        this.B = _.Ld(b)
    };
    var CF = function(a) {
        this.D = _.D(a)
    };
    _.R(CF, _.E);
    var EF = function(a, b) {
            return Fi(a, 1, DF, Wc(b))
        },
        FF = function(a, b) {
            return Fi(a, 2, DF, Ic(b))
        },
        GF = function(a, b) {
            return Fi(a, 3, DF, b == null ? b : rc(b))
        },
        DF = [1, 2, 3];
    var HF = function(a) {
        this.D = _.D(a)
    };
    _.R(HF, _.E);
    var JF = function(a, b) {
            return Fi(a, 2, IF, Ic(b))
        },
        KF = function(a, b) {
            return Fi(a, 4, IF, _.nc(b))
        },
        IF = [2, 4];
    var LF = function(a) {
        this.D = _.D(a)
    };
    _.R(LF, _.E);
    var MF = function(a) {
            var b = new LF;
            return _.Hi(b, 1, a)
        },
        NF = function(a, b) {
            return _.ol(a, 3, b)
        },
        OF = function(a, b) {
            return gk(a, 4, CF, b)
        };
    LF.Z = [4];
    var PF = function(a) {
        this.D = _.D(a)
    };
    _.R(PF, _.E);
    var QF = function(a) {
        this.D = _.D(a)
    };
    _.R(QF, _.E);
    var RF = function(a) {
        this.D = _.D(a)
    };
    _.R(RF, _.E);
    var Dl = function(a) {
        this.D = _.D(a)
    };
    _.R(Dl, _.E);
    var sl = function(a) {
        this.D = _.D(a)
    };
    _.R(sl, _.E);
    var rl = function(a) {
        this.D = _.D(a)
    };
    _.R(rl, _.E);
    var nl = function(a) {
        this.D = _.D(a)
    };
    _.R(nl, _.E);
    var zl = function(a) {
        this.D = _.D(a)
    };
    _.R(zl, _.E);
    var SF = function(a) {
        this.D = _.D(a)
    };
    _.R(SF, _.E);
    var TF = function(a) {
        this.D = _.D(a)
    };
    _.R(TF, _.E);
    var ml = function(a) {
        this.D = _.D(a)
    };
    _.R(ml, _.E);
    ml.prototype.getTagSessionCorrelator = function() {
        Hb(this, Kz);
        return _.ig(this, 2)
    };
    var yl = function(a) {
        var b = new SF;
        return _.vl(a, 13, wl, b)
    };
    ml.Z = [4];
    var wl = [6, 7, 8, 9, 11, 13, 14];
    var UF = function(a) {
        this.D = _.D(a)
    };
    _.R(UF, _.E);
    UF.Z = [1];
    var VF = function(a) {
        this.D = _.D(a)
    };
    _.R(VF, _.E);
    var WF = function(a) {
        this.D = _.D(a)
    };
    _.R(WF, _.E);
    var XF = function(a) {
        this.D = _.D(a)
    };
    _.R(XF, _.E);
    var Wq = function(a) {
        this.D = _.D(a)
    };
    _.R(Wq, _.E);
    _.Ei = function(a) {
        this.D = _.D(a)
    };
    _.R(_.Ei, _.E);
    _.Ei.prototype.getTagSessionCorrelator = function() {
        Hb(this, Kz);
        return _.ig(this, 8)
    };
    _.Di = function(a, b) {
        return _.ul(a, 10, b)
    };
    _.Gi = [3, 4, 6];
    var Uq = function(a) {
        this.D = _.D(a)
    };
    _.R(Uq, _.E);
    var YF = function(a) {
            var b = new Uq;
            return _.vl(b, 2, Xq, a)
        },
        Xq = [1, 2, 4, 5, 6, 7];
    var Qq = function(a) {
        this.D = _.D(a)
    };
    _.R(Qq, _.E);
    var Mq = function(a, b) {
        return _.Ii(a, 1, b)
    };
    Qq.prototype.getTagSessionCorrelator = function() {
        Hb(this, Kz);
        return _.ig(this, 2)
    };
    var Pq = function(a, b) {
            return _.Ii(a, 2, b)
        },
        Oq = function(a, b) {
            return _.Hi(a, 3, b)
        },
        Lq = function(a) {
            var b = ih();
            return _.le(a, 4, b, zc)
        },
        Nq = function(a, b) {
            return _.Hi(a, 6, b)
        };
    Qq.Z = [4];
    var Nl = function(a) {
        this.D = _.D(a)
    };
    _.R(Nl, _.E);
    Nl.Z = [3];
    var Ml = function(a) {
        this.D = _.D(a)
    };
    _.R(Ml, _.E);
    Ml.Z = [4, 5];
    var Ll = function(a) {
        this.D = _.D(a)
    };
    _.R(Ll, _.E);
    Ll.prototype.getTagSessionCorrelator = function() {
        Hb(this, Kz);
        return _.ig(this, 1)
    };
    Ll.Z = [2];
    var Kl = function(a) {
        this.D = _.D(a)
    };
    _.R(Kl, _.E);
    var Ql = [4, 6];
    var Fp = function(a) {
        this.D = _.D(a)
    };
    _.R(Fp, _.E);
    Fp.prototype.getTagSessionCorrelator = function() {
        Hb(this, Kz);
        return _.ig(this, 1)
    };
    Fp.prototype.getMessageId = function() {
        return _.Uf(this, 8, 0)
    };
    Fp.prototype.getMessageArgs = function(a) {
        return bA(this, 9, a)
    };
    Fp.Z = [2, 9];
    var ps = function(a) {
        this.D = _.D(a)
    };
    _.R(ps, _.E);
    ps.prototype.getTagSessionCorrelator = function() {
        Hb(this, Kz);
        return _.ig(this, 1)
    };
    ps.prototype.getAdUnitPath = function() {
        return _.u(this, 8)
    };
    ps.Z = [2];
    var Lu = function(a) {
        this.D = _.D(a)
    };
    _.R(Lu, _.E);
    var Mu = function(a) {
        this.D = _.D(a)
    };
    _.R(Mu, _.E);
    var Nu = [3];
    var $F = function(a) {
            this.Sa = new ZF(a)
        },
        ZF = function(a) {
            this.sb = new aG(a);
            this.af = new bG(a)
        },
        aG = function(a) {
            this.me = new cG(a);
            this.dj = new dG(a);
            this.outstream = new eG(a);
            this.request = new fG(a);
            this.vo = new gG(a);
            this.Bi = new hG(a);
            this.Bl = new iG(a)
        },
        hG = function(a) {
            this.xa = function(b) {
                var c = b.za;
                var d = b.qj;
                var e = b.ak;
                var f = b.Sj;
                b = b.Xj;
                a(NF(OF(OF(OF(OF(MF("qVcX5d"), GF(new CF, d)), GF(new CF, e)), GF(new CF, f)), GF(new CF, b)), JF(new HF, Math.round(c))))
            }
        },
        iG = function(a) {
            this.xa = function(b) {
                b = b.za;
                a(NF(MF("oHc1rb"), JF(new HF, Math.round(b))))
            }
        },
        cG = function(a) {
            this.Wl = new jG(a);
            this.globalPrivacyControl = new kG(a)
        },
        jG = function(a) {
            this.lc = function(b) {
                var c = b.oc;
                var d = b.zg;
                var e = b.Hj;
                var f = b.Ij;
                b = b.Dj;
                a(NF(OF(OF(OF(OF(MF("XVNPAd"), FF(new CF, Math.round(d))), GF(new CF, e)), GF(new CF, f)), GF(new CF, b)), KF(new HF, c)))
            }
        },
        kG = function(a) {
            this.xa = function(b) {
                var c = b.za;
                var d = b.Nf;
                b = b.Of;
                a(NF(OF(OF(MF("V6BGRd"), GF(new CF, d)), GF(new CF, b)), JF(new HF, Math.round(c))))
            }
        },
        dG = function(a) {
            this.bm = new lG(a);
            this.Vm = new mG(a)
        },
        lG = function(a) {
            this.lc = function(b) {
                var c = b.oc;
                b = b.didTimeout;
                a(NF(OF(MF("C2uQt"), GF(new CF, b)), KF(new HF, c)))
            }
        },
        mG = function(a) {
            this.lc = function(b) {
                b = b.oc;
                a(NF(MF("iAwBu"), KF(new HF, b)))
            }
        },
        eG = function(a) {
            this.xm = new nG(a)
        },
        nG = function(a) {
            this.xa = function(b) {
                var c = b.za;
                b = b.Gj;
                a(NF(OF(MF("joavYe"), GF(new CF, b)), JF(new HF, Math.round(c))))
            }
        },
        fG = function(a) {
            this.Vn = new oG(a)
        },
        oG = function(a) {
            this.xa = function(b) {
                var c = b.za;
                var d = b.status;
                var e = b.ln;
                b = b.Se;
                a(NF(OF(OF(OF(MF("tsK0dd"), EF(new CF, d)), FF(new CF, Math.round(e))), FF(new CF, Math.round(b))), JF(new HF, Math.round(c))))
            }
        },
        gG = function(a) {
            this.re = new pG(a);
            this.latency = new qG(a)
        },
        pG = function(a) {
            this.xa = function(b) {
                var c = b.za;
                b = b.reason;
                a(NF(OF(MF("EsGFxb"), EF(new CF, b)), JF(new HF, Math.round(c))))
            }
        },
        qG = function(a) {
            this.lc = function(b) {
                var c = b.oc;
                b = b.Em;
                a(NF(OF(MF("DEm1hb"), EF(new CF, b)), KF(new HF, c)))
            }
        },
        bG = function(a) {
            this.hi = new rG(a);
            this.Dl = new sG(a);
            this.Ml = new tG(a)
        },
        sG = function(a) {
            this.lc = function(b) {
                b = b.oc;
                a(NF(MF("rsv8Kc"), KF(new HF, b)))
            }
        },
        tG = function(a) {
            this.xa = function(b) {
                var c = b.za;
                var d = b.xg;
                b = b.status;
                a(NF(OF(OF(MF("SOomke"), EF(new CF, d)), EF(new CF, b)), JF(new HF, Math.round(c))))
            }
        },
        rG = function(a) {
            this.yi = new uG(a)
        },
        uG = function(a) {
            this.xa = function(b) {
                var c = b.za;
                b = b.status;
                a(NF(OF(MF("TP3y1d"), EF(new CF, b)), JF(new HF, Math.round(c))))
            }
        },
        vG = function() {
            BF.apply(this, arguments);
            var a = this;
            this.Pa = new $F(function(b) {
                return a.Zn(b)
            })
        };
    _.R(vG, BF);
    _.wG = function() {
        vG.apply(this, arguments)
    };
    _.R(_.wG, vG);
    _.r = _.wG.prototype;
    _.r.bo = function() {
        this.g.apply(this, _.aj(_.xa.apply(0, arguments).map(function(a) {
            return {
                Mb: !0,
                Wb: 2,
                Rb: _.Ce(a)
            }
        })))
    };
    _.r.td = function() {
        this.g.apply(this, _.aj(_.xa.apply(0, arguments).map(function(a) {
            return {
                Mb: !0,
                Wb: 5,
                Rb: _.Ce(a)
            }
        })))
    };
    _.r.co = function() {
        this.g.apply(this, _.aj(_.xa.apply(0, arguments).map(function(a) {
            return {
                Mb: !0,
                Wb: 15,
                Rb: _.Ce(a)
            }
        })))
    };
    _.r.Ok = ba(0);
    _.r.fo = function() {
        this.g.apply(this, _.aj(_.xa.apply(0, arguments).map(function(a) {
            return {
                Mb: !0,
                Wb: 17,
                Rb: _.Ce(a)
            }
        })))
    };
    _.r.eo = function() {
        this.g.apply(this, _.aj(_.xa.apply(0, arguments).map(function(a) {
            return {
                Mb: !0,
                Wb: 19,
                Rb: _.Ce(a)
            }
        })))
    };
    _.r.io = function() {
        this.g.apply(this, _.aj(_.xa.apply(0, arguments).map(function(a) {
            return {
                Mb: !0,
                Wb: 21,
                Rb: _.Ce(a)
            }
        })))
    };
    _.r.ao = function() {
        this.g.apply(this, _.aj(_.xa.apply(0, arguments).map(function(a) {
            return {
                Mb: !0,
                Wb: 23,
                Rb: _.Ce(a)
            }
        })))
    };
    _.r.ho = function() {
        this.g.apply(this, _.aj(_.xa.apply(0, arguments).map(function(a) {
            return {
                Mb: !0,
                Wb: 24,
                Rb: _.Ce(a)
            }
        })))
    };
    _.r.Zn = function() {
        this.g.apply(this, _.aj(_.xa.apply(0, arguments).map(function(a) {
            return {
                Mb: !1,
                Wb: 1,
                Rb: _.Ce(a)
            }
        })))
    };
    var xG = function(a, b) {
        if (_.B.globalThis.fetch) _.B.globalThis.fetch(a, {
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
    var yG = function(a, b, c, d, e, f, h, k) {
        _.wG.call(this, a, b);
        this.F = c;
        this.A = d;
        this.I = e;
        this.H = f;
        this.J = h;
        this.L = k;
        this.o = [];
        this.l = null;
        this.j = !1
    };
    _.R(yG, _.wG);
    var zG = function(a) {
        a.l !== null && (clearTimeout(a.l), a.l = null);
        if (a.o.length) {
            var b = Rf(a.o, a.B);
            a.A(a.F + "?e=1", b);
            a.o = []
        }
    };
    yG.prototype.g = function() {
        var a = _.xa.apply(0, arguments),
            b = this;
        try {
            this.J && Rf(this.o.concat(a), this.B).length >= 65536 && zG(this), this.L && !this.j && (this.j = !0, this.L.g(function() {
                zG(b)
            })), this.o.push.apply(this.o, _.aj(a)), this.o.length >= this.H && zG(this), this.o.length && this.l === null && (this.l = setTimeout(function() {
                zG(b)
            }, this.I))
        } catch (c) {
            Qf(c, this.B)
        }
    };
    var Nx = function(a, b, c, d, e, f) {
        yG.call(this, a, b, "https://pagead2.googlesyndication.com/pagead/ping", xG, c === void 0 ? 1E3 : c, d === void 0 ? 100 : d, (e === void 0 ? !1 : e) && !!_.B.globalThis.fetch, f)
    };
    _.R(Nx, yG);
    var AG, BG, CG;
    _.T = function(a, b) {
        this.g = a;
        this.defaultValue = b === void 0 ? !1 : b
    };
    AG = function(a, b) {
        this.g = a;
        this.defaultValue = b === void 0 ? 0 : b
    };
    BG = function(a, b) {
        this.g = a;
        this.defaultValue = b === void 0 ? "" : b
    };
    CG = function(a, b) {
        b = b === void 0 ? [] : b;
        this.g = a;
        this.defaultValue = b
    };
    var DG, EG, Vp, FG, GG, HG, IG, JG, KG, LG, MG, NG, OG, PG, QG, RG, ox, nx, KI, ts, LI, MI, NI, OI, PI, ap, QI, RI, SI, TI, UI, VI, WI, XI, YI, xk, wk, yk, ut, ZI, $I, aJ, bJ, rx, cJ, dJ, eJ, fJ, gJ, hJ, mJ, oJ, zp, pJ, $q, Fl, rJ, sJ, tJ, Pw, hr, ir, ar, kr, rw, uJ, cs, vJ, wJ, pr, xJ, yJ, fw, cw, lr, mr, zJ, AJ, BJ, Qv, Zv, CJ, DJ, EJ, vw, Vr, FJ, Uo, GJ, yw, HJ, IJ, vx, JJ, Hn, En, KJ, LJ, MJ, NJ, OJ, PJ, RJ, ix, SJ, TJ, UJ, VJ, jx, WJ, XJ, YJ, ZJ, Yk, $J, aK, iu, aw, ju, bK, cK, dK, ku, eK, fK, gK, lv, hK, iK, jK, kK, lK, mK, nK, oK, Rt, Mt, Lt, Kv, Nt, Ot, pK, Cx, Dx, qK, Ex, Bx, rK, Gx, sK;
    DG = new _.T(560703441, !0);
    EG = new _.T(629691748);
    Vp = new AG(7, .1);
    FG = new _.T(212);
    GG = new AG(612427114);
    HG = new AG(643185309);
    IG = new AG(643185308);
    JG = new BG(643045659, "dbm(/|%2F|%252F)(ad|clkk)");
    KG = new AG(643045660);
    LG = new AG(643185311);
    MG = new AG(643185310);
    NG = new AG(612427113);
    OG = new AG(653204221);
    PG = new AG(462420536);
    QG = new _.T(476475256, !0);
    RG = new AG(438663674);
    ox = new AG(45409629);
    nx = new AG(522348973);
    KI = new AG(564509649);
    ts = new AG(578655462, 20);
    LI = new _.T(558225291);
    MI = new _.T(591917863, !0);
    NI = new _.T(644381217);
    OI = new _.T(644381218);
    PI = new AG(632270607, 1E3);
    ap = new AG(617843383);
    QI = new _.T(652535384);
    RI = new AG(625028671, .8);
    SI = new AG(625028672, 50);
    TI = new AG(629733890, 1E3);
    UI = new _.T(644091943);
    VI = new _.T(625422809, !0);
    WI = new _.T(573236024, !0);
    XI = new _.T(619946851, !0);
    YI = new _.T(620930073, !0);
    xk = new AG(494575051);
    wk = new CG(489560439);
    yk = new CG(505762507);
    ut = new _.T(453);
    ZI = new _.T(454);
    $I = new AG(377289019, 1E4);
    aJ = new AG(529, 20);
    bJ = new BG(10);
    rx = new AG(610770343, 5);
    cJ = new _.T(610525552);
    dJ = new _.T(45624259);
    eJ = new _.T(45627954, !0);
    fJ = new _.T(45622305);
    gJ = new _.T(360245597, !0);
    hJ = new _.T(45628169, !0);
    _.dr = new _.T(629201869);
    _.iJ = new _.T(479390945);
    _.jJ = new _.T(518650310);
    _.kJ = new _.T(561164161, !0);
    _.lJ = new AG(550718589, 250);
    mJ = new _.T(586382198);
    _.nJ = new AG(609494714, 1);
    oJ = new AG(575880738, 10);
    zp = new AG(586681283, 100);
    pJ = new _.T(599186119, !0);
    $q = new _.T(630224494);
    _.qJ = new _.T(531615531);
    Fl = new _.T(85);
    rJ = new _.T(647760793);
    sJ = new _.T(624961684);
    tJ = new AG(618260805, 10);
    Pw = new _.T(524098256);
    hr = new _.T(639096031, !0);
    ir = new _.T(624264748);
    ar = new _.T(624264747);
    kr = new _.T(624264746);
    rw = new _.T(644156683);
    uJ = new _.T(647753412, !0);
    cs = new AG(532520346, 120);
    vJ = new _.T(557870754, !0);
    wJ = new _.T(614048762);
    pr = new _.T(654220659);
    xJ = new CG(466086960);
    yJ = new AG(630428304, 100);
    fw = new _.T(641346575, !0);
    cw = new _.T(632286145, !0);
    lr = new _.T(624264749);
    mr = new AG(624264750, -1);
    zJ = new _.T(607106222, !0);
    AJ = new AG(398776877, 6E4);
    BJ = new AG(374201269, 6E4);
    Qv = new AG(371364213, 6E4);
    Zv = new _.T(570764855, !0);
    CJ = new BG(579921177, "control_1\\.\\d");
    DJ = new AG(570764854, 50);
    EJ = new _.T(578725095, !0);
    vw = new _.T(633341243);
    Vr = new _.T(639116666);
    FJ = new _.T(648808579, !0);
    Uo = new _.T(649083388);
    GJ = new _.T(654024184);
    yw = new _.T(651894333);
    HJ = new _.T(453275889);
    IJ = new _.T(377936516, !0);
    vx = new AG(599575765, 1E3);
    JJ = new AG(24);
    Hn = new CG(1);
    En = new BG(2, "1-0-40");
    KJ = new _.T(643056384);
    LJ = new _.T(608664189);
    MJ = new AG(626653285, 1E3);
    NJ = new AG(626653286);
    OJ = new AG(642407444, 10);
    PJ = new _.T(652574591, !0);
    _.QJ = new AG(506394061, 100);
    RJ = new CG(631604025, ["95335247"]);
    ix = new CG(489);
    SJ = new _.T(628431786);
    TJ = new _.T(392065905);
    UJ = new AG(360245595, 500);
    VJ = new _.T(561985307);
    jx = new _.T(424117738);
    WJ = new _.T(563462360, !0);
    XJ = new _.T(555237688);
    YJ = new _.T(555237687);
    ZJ = new _.T(555237686);
    Yk = new _.T(507033477, !0);
    $J = new AG(638742197, 500);
    aK = new _.T(636731477);
    iu = new _.T(399705355);
    aw = new _.T(45420038, !0);
    ju = new AG(514795754, 2);
    bK = new _.T(638770075, !0);
    cK = new AG(609173130);
    dK = new CG(603422363);
    ku = new _.T(590730356);
    eK = new _.T(564724551);
    fK = new _.T(567489814, !0);
    gK = new _.T(45415915, !0);
    lv = new _.T(582338617, !0);
    hK = new _.T(582287318, !0);
    iK = new AG(596918936, 500);
    jK = new AG(607730666, 10);
    kK = new _.T(632286496, !0);
    lK = new AG(641937776);
    mK = new _.T(630167509);
    nK = new _.T(647262744);
    oK = new _.T(616896918, !0);
    Rt = new _.T(638632925);
    Mt = new _.T(647331452);
    Lt = new _.T(647331451);
    Kv = new _.T(652501522);
    Nt = new _.T(638632927);
    Ot = new AG(642727723, 10);
    pK = new _.T(506738118);
    Cx = new _.T(77);
    Dx = new _.T(78);
    qK = new _.T(83);
    Ex = new _.T(80);
    Bx = new _.T(76);
    rK = new _.T(84);
    Gx = new _.T(188);
    sK = new _.T(485990406);
    Za(GD).map(function(a) {
        return Number(a)
    });
    Za(HD).map(function(a) {
        return Number(a)
    });
    var tK = function(a, b) {
        this.g = Yf(a);
        this.o = b
    };
    tK.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return this
    };
    tK.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.o.call(void 0, a.value),
            done: a.done
        }
    };
    var uK = function(a, b) {
            return new tK(a, b)
        },
        vK = function(a) {
            this.o = a;
            this.g = 0
        };
    vK.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return this
    };
    vK.prototype.next = function() {
        for (; this.g < this.o.length;) {
            var a = this.o[this.g].next();
            if (!a.done) return a;
            this.g++
        }
        return {
            done: !0
        }
    };
    var wK = function() {
        return new vK(_.xa.apply(0, arguments).map(Yf))
    };
    var xK = _.ca.URL,
        yK;
    try {
        new xK("http://example.com"), yK = !0
    } catch (a) {
        yK = !1
    }
    var zK = yK,
        AK = function(a) {
            this.g = new _.B.Map;
            a.indexOf("?") == 0 && (a = a.substring(1));
            a = _.A(a.split("&"));
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = b.value;
                b = c;
                var d = "";
                c = c.split("=");
                c.length > 1 && (b = decodeURIComponent(c[0].replace("+", " ")), d = decodeURIComponent(c[1].replace("+", " ")));
                c = this.g.get(b);
                c == null && (c = [], this.g.set(b, c));
                c.push(d)
            }
        };
    AK.prototype.get = function(a) {
        return (a = this.g.get(a)) && a.length ? a[0] : null
    };
    AK.prototype.getAll = function(a) {
        return [].concat(_.aj(this.g.get(a) || []))
    };
    AK.prototype.has = function(a) {
        return this.g.has(a)
    };
    AK.prototype[_.x(_.B.Symbol, "iterator")] = function() {
        return wK.apply(null, _.aj(uK(this.g, function(a) {
            var b = a[0];
            return uK(a[1], function(c) {
                return [b, c]
            })
        })))
    };
    AK.prototype.toString = function() {
        return cg(this)
    };
    var cg = function(a) {
            var b = function(c) {
                return encodeURIComponent(c).replace(/[!()~']|(%20)/g, function(d) {
                    return {
                        "!": "%21",
                        "(": "%28",
                        ")": "%29",
                        "%20": "+",
                        "'": "%27",
                        "~": "%7E"
                    }[d]
                })
            };
            return _.x(Array, "from").call(Array, a, function(c) {
                return b(c[0]) + "=" + b(c[1])
            }).join("&")
        },
        CK = function(a) {
            var b = _.JC(document, "A");
            try {
                _.Ea(b, new _.qa(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if (c === "" || c === ":" || c[c.length - 1] != ":") throw Error(a + " is not a valid URL.");
            if (!BK.has(c)) throw Error(a + " is not a valid URL.");
            if (!b.hostname) throw Error(a + " is not a valid URL.");
            var d = b.href;
            a = {
                href: d,
                protocol: b.protocol,
                username: "",
                password: "",
                hostname: b.hostname,
                pathname: "/" + b.pathname,
                search: b.search,
                hash: b.hash,
                toString: function() {
                    return d
                }
            };
            BK.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        },
        $f = function(a) {
            if (zK) {
                try {
                    var b = new xK(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = BK.get(b.protocol);
                if (!c) throw Error(a + " is not a valid URL.");
                if (!b.hostname) throw Error(a + " is not a valid URL.");
                b.origin == "null" && (a = {
                    href: b.href,
                    protocol: b.protocol,
                    username: "",
                    password: "",
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    pathname: b.pathname,
                    search: b.search,
                    hash: b.hash
                }, a.origin = c === b.port ? b.protocol + "//" + b.hostname : b.protocol + "//" + b.hostname + ":" + b.port, b = a)
            } else b = CK(a);
            return b
        },
        BK = new _.B.Map([
            ["http:", "80"],
            ["https:", "443"],
            ["ws:", "80"],
            ["wss:", "443"],
            ["ftp:", "21"]
        ]),
        Zf = function(a) {
            return zK && a.searchParams ? a.searchParams : new AK(a.search)
        };
    var DK = function(a) {
        this.D = _.D(a)
    };
    _.R(DK, _.E);
    DK.Z = [1, 2];
    var EK = function(a) {
        this.D = _.D(a)
    };
    _.R(EK, _.E);
    var hg = gf(EK);
    _.V = function() {
        this.L = this.L;
        this.Ma = this.Ma
    };
    _.V.prototype.L = !1;
    _.V.prototype.dispose = function() {
        this.L || (this.L = !0, this.o())
    };
    _.V.prototype[_.x(_.B.Symbol, "dispose")] = function() {
        this.dispose()
    };
    _.Gr = function(a, b) {
        _.Jp(a, _.Dy(gg, b))
    };
    _.Jp = function(a, b) {
        a.L ? b() : (a.Ma || (a.Ma = []), a.Ma.push(b))
    };
    _.V.prototype.o = function() {
        if (this.Ma)
            for (; this.Ma.length;) this.Ma.shift()()
    };
    var FK = function(a, b, c, d) {
        _.V.call(this);
        this.I = b;
        this.F = c;
        this.A = d;
        this.H = new _.B.Map;
        this.K = 0;
        this.j = new _.B.Map;
        this.J = new _.B.Map;
        this.B = void 0;
        this.l = a
    };
    _.R(FK, _.V);
    FK.prototype.o = function() {
        delete this.g;
        this.H.clear();
        this.j.clear();
        this.J.clear();
        this.B && (_.Of(this.l, "message", this.B), delete this.B);
        delete this.l;
        delete this.A;
        _.V.prototype.o.call(this)
    };
    var GK = function(a) {
            if (a.g) return a.g;
            a.F && a.F(a.l) ? a.g = a.l : a.g = aD(a.l, a.I);
            var b;
            return (b = a.g) != null ? b : null
        },
        IK = function(a, b, c) {
            if (GK(a))
                if (a.g === a.l)(b = a.H.get(b)) && b(a.g, c);
                else {
                    var d = a.j.get(b);
                    if (d && d.Ge) {
                        HK(a);
                        var e = ++a.K;
                        a.J.set(e, {
                            Nd: d.Nd,
                            im: d.Rf(c),
                            Gn: b === "addEventListener"
                        });
                        a.g.postMessage(d.Ge(c, e), "*")
                    }
                }
        },
        HK = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c = a.A ? a.A(b) : void 0;
                    if (c) {
                        var d = c.Rh,
                            e = a.J.get(d);
                        if (e) {
                            e.Gn || a.J.delete(d);
                            var f;
                            (f = e.Nd) == null || f.call(e, e.im, c.payload)
                        }
                    }
                } catch (h) {}
            }, _.tf(a.l, "message", a.B))
        };
    var JK = function(a, b) {
            var c = {
                cb: function(d) {
                    d = hg(d);
                    b.Cd({
                        ne: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        KK = {
            Rf: function(a) {
                return a.Cd
            },
            Ge: function(a, b) {
                return {
                    __fciCall: {
                        callId: b,
                        command: a.command,
                        spsp: a.spsp || void 0
                    }
                }
            },
            Nd: function(a, b) {
                a({
                    ne: b
                })
            }
        },
        Fr = function(a) {
            _.V.call(this);
            this.g = this.l = !1;
            this.caller = new FK(a, "googlefcPresent", void 0, jg);
            this.caller.H.set("getDataWithCallback", JK);
            this.caller.j.set("getDataWithCallback", KK)
        };
    _.R(Fr, _.V);
    Fr.prototype.o = function() {
        this.caller.dispose();
        _.V.prototype.o.call(this)
    };
    Fr.prototype.Id = function(a) {
        if (a === void 0 ? 0 : a) return !1;
        this.l || (this.g = !!GK(this.caller), this.l = !0);
        return this.g
    };
    var LK = function(a) {
            return new _.B.Promise(function(b) {
                a.Id() && IK(a.caller, "getDataWithCallback", {
                    command: "loaded",
                    Cd: function(c) {
                        b(c.ne)
                    }
                })
            })
        },
        MK = function(a, b) {
            a.Id() && IK(a.caller, "getDataWithCallback", {
                command: "prov",
                spsp: cl(b),
                Cd: function() {}
            })
        };
    var NK = function(a) {
            a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
            a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
            return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
        },
        OK = function(a, b) {
            b = b === void 0 ? {} : b;
            _.V.call(this);
            this.l = a;
            this.g = null;
            this.j = {};
            this.A = 0;
            var c;
            this.J = (c = b.timeoutMs) != null ? c : 500;
            var d;
            this.H = (d = b.Fl) != null ? d : !1;
            this.B = null
        };
    _.R(OK, _.V);
    OK.prototype.o = function() {
        this.j = {};
        this.B && (_.Of(this.l, "message", this.B), delete this.B);
        delete this.j;
        delete this.l;
        delete this.g;
        _.V.prototype.o.call(this)
    };
    OK.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.H
            },
            d = _.IA(function() {
                return a(c)
            }),
            e = 0;
        this.J !== -1 && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.J));
        var f = function(h, k) {
            clearTimeout(e);
            h ? (c = h, c.internalErrorState = NK(c), c.internalBlockOnErrors = b.H, k && c.internalErrorState === 0 || (c.tcString = "tcunavailable", k || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            PK(this, "addEventListener", f)
        } catch (h) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    OK.prototype.removeEventListener = function(a) {
        a && a.listenerId && PK(this, "removeEventListener", null, a.listenerId)
    };
    var RK = function(a, b, c) {
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
            a = f === 0 ? a.purpose && a.vendor ? (c = QK(a.vendor.consents, d === void 0 ? "755" : d)) && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH" ? !0 : c && QK(a.purpose.consents, b) : !0 : f === 1 ? a.purpose && a.vendor ? QK(a.purpose.legitimateInterests, b) && QK(a.vendor.legitimateInterests, d === void 0 ? "755" : d) : !0 : !0;
            return a
        },
        QK = function(a, b) {
            return !(!a || !a[b])
        },
        PK = function(a, b, c, d) {
            c || (c = function() {});
            if (typeof a.l.__tcfapi === "function") a = a.l.__tcfapi, a(b, 2, c, d);
            else if (SK(a)) {
                TK(a);
                var e = ++a.A;
                a.j[e] = c;
                a.g && (c = {}, a.g.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        SK = function(a) {
            if (a.g) return a.g;
            a.g = aD(a.l, "__tcfapiLocator");
            return a.g
        },
        TK = function(a) {
            a.B || (a.B = function(b) {
                try {
                    var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.j[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.tf(a.l, "message", a.B))
        },
        UK = function(a) {
            if (a.gdprApplies === !1) return !0;
            a.internalErrorState === void 0 && (a.internalErrorState = NK(a));
            return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (Sf({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
        },
        VK = function(a, b, c) {
            return a.gdprApplies === !1 ? !0 : b.every(function(d) {
                return RK(a, d, c)
            })
        };
    var WK = function(a, b, c) {
            this.C = a;
            this.o = b;
            this.g = c === void 0 ? function() {} : c;
            this.R = null
        },
        XK = function(a, b, c) {
            return new WK(a, b, c)
        };
    WK.prototype.start = function(a, b) {
        a = a === void 0 ? !1 : a;
        if (this.C === this.C.top) try {
            eg(this.C), YK(this, a, b)
        } catch (c) {}
    };
    var YK = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        var d = {};
        try {
            var e = ag(a.C),
                f = bg(a.C);
            d.fc = e;
            d.fctype = f
        } catch (k) {}
        try {
            var h = dg(a.C.location.href)
        } catch (k) {}
        b && h && (d.href = h);
        b = vg(a.o, d);
        Xf(a.C, b, function() {
            a.g(!0)
        }, function() {
            a.g(!1)
        });
        c && MK(new Fr(a.C), c)
    };
    var ZK = _.B.Promise;
    var $K = function(a) {
        this.o = a
    };
    $K.prototype.send = function(a, b, c) {
        this.o.then(function(d) {
            d.send(a, b, c)
        })
    };
    $K.prototype.g = function(a, b) {
        return this.o.then(function(c) {
            return c.g(a, b)
        })
    };
    var aL = function(a) {
        this.data = a
    };
    var bL = function(a) {
        this.o = a
    };
    bL.prototype.send = function(a, b, c) {
        c = c === void 0 ? [] : c;
        var d = new MessageChannel;
        cL(d.port1, b);
        this.o.postMessage(a, [d.port2].concat(c))
    };
    bL.prototype.g = function(a, b) {
        var c = this;
        return new ZK(function(d) {
            c.send(a, d, b)
        })
    };
    var dL = function(a, b) {
            cL(a, b);
            return new bL(a)
        },
        cL = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new aL(c.data, dL(c.ports[0])))
            })
        };
    var eL = function(a) {
            this.g = a
        },
        fL = function(a) {
            var b = Object.create(null);
            (typeof a === "string" ? [a] : a).forEach(function(c) {
                if (c === "null") throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return function(c) {
                return b[c] === !0
            }
        };
    var Wk = function(a) {
            var b = a.destination;
            var c = a.tb;
            var d = a.origin;
            var e = a.Ob === void 0 ? "ZNWN1d" : a.Ob;
            var f = a.onMessage === void 0 ? void 0 : a.onMessage;
            a = a.Xf === void 0 ? void 0 : a.Xf;
            return gL({
                destination: b,
                Aj: function() {
                    return c.contentWindow
                },
                wn: d instanceof eL ? d : typeof d === "function" ? new eL(d) : new eL(fL(d)),
                Ob: e,
                onMessage: f,
                Xf: a
            })
        },
        gL = function(a) {
            var b = a.destination;
            var c = a.Aj;
            var d = a.wn;
            var e = a.Ve === void 0 ? void 0 : a.Ve;
            var f = a.Ob;
            var h = a.onMessage === void 0 ? void 0 : a.onMessage;
            var k = a.Xf === void 0 ? void 0 : a.Xf;
            return new $K(new ZK(function(l, m) {
                var n = function(p) {
                    p.source && p.source === c() && d.g(p.origin) && (p.data.n || p.data) === f && (b.removeEventListener("message", n, !1), e && p.data.t !== e ? m(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(dL(p.ports[0], h)), k && k(p)))
                };
                b.addEventListener("message", n, !1)
            }))
        };
    var hL, Kg, Gv, Fv, Eg, Iv, Jg;
    hL = cf(function(a) {
        return typeof a === "number"
    });
    Kg = cf(function(a) {
        return typeof a === "string"
    });
    Gv = cf(function(a) {
        return typeof a === "boolean"
    });
    Fv = cf(function(a) {
        return a === null
    });
    _.iL = cf(function(a) {
        return typeof a === "function"
    });
    Eg = cf(function(a) {
        return !!a && (typeof a === "object" || typeof a === "function")
    });
    Iv = Ig();
    Jg = Ig();
    var jL = navigator,
        kL = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        lL = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        mL = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Pg = function() {
        this.data = [];
        this.g = -1
    };
    Pg.prototype.set = function(a, b) {
        b = b === void 0 ? !0 : b;
        0 <= a && a < 52 && _.x(Number, "isInteger").call(Number, a) && this.data[a] !== b && (this.data[a] = b, this.g = -1)
    };
    Pg.prototype.get = function(a) {
        return !!this.data[a]
    };
    var Rg = function(a) {
        a.g === -1 && (a.g = a.data.reduce(function(b, c, d) {
            return b + (c ? Math.pow(2, d) : 0)
        }, 0));
        return a.g
    };
    var nL = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.Cd({
                    ne: c != null ? c : void 0,
                    nj: d ? void 0 : 2
                })
            })
        },
        oL = {
            Rf: function(a) {
                return a.Cd
            },
            Ge: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            Nd: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    ne: (c = b.returnValue) != null ? c : void 0,
                    nj: b.success ? void 0 : 2
                })
            }
        },
        pL = function(a, b) {
            b = b === void 0 ? {} : b;
            _.V.call(this);
            var c;
            this.timeoutMs = (c = b.timeoutMs) != null ? c : 500;
            this.caller = new FK(a, "__uspapiLocator", function(d) {
                return typeof d.__uspapi === "function"
            }, Tg);
            this.caller.H.set("getDataWithCallback", nL);
            this.caller.j.set("getDataWithCallback", oL)
        };
    _.R(pL, _.V);
    pL.prototype.o = function() {
        this.caller.dispose();
        _.V.prototype.o.call(this)
    };
    var qL = function(a, b) {
        var c = {};
        if (GK(a.caller)) {
            var d = _.IA(function() {
                b(c)
            });
            IK(a.caller, "getDataWithCallback", {
                Cd: function(e) {
                    e.nj || (c = e.ne);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    };
    var ah = function(a) {
            this.g = a || {
                cookie: ""
            }
        },
        sL = function() {
            var a = rL;
            if (!_.ca.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                He: 60
            });
            if (a.get("TESTCOOKIESENABLED") !== "1") return !1;
            a.remove("TESTCOOKIESENABLED");
            return !0
        };
    _.r = ah.prototype;
    _.r.set = function(a, b, c) {
        var d = !1;
        if (typeof c === "object") {
            var e = c.Ik;
            d = c.hg || !1;
            var f = c.domain || void 0;
            var h = c.path || void 0;
            var k = c.He
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        k === void 0 && (k = -1);
        c = f ? ";domain=" + f : "";
        h = h ? ";path=" + h : "";
        d = d ? ";secure" : "";
        k = k < 0 ? "" : k == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + k * 1E3)).toUTCString();
        this.g.cookie = a + "=" + b + c + h + k + d + (e != null ? ";samesite=" + e : "")
    };
    _.r.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Iy(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    _.r.remove = function(a, b, c) {
        var d = this.get(a) !== void 0;
        this.set(a, "", {
            He: 0,
            path: b,
            domain: c
        });
        return d
    };
    _.r.isEmpty = function() {
        return !this.g.cookie
    };
    _.r.clear = function() {
        for (var a = (this.g.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Iy(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) this.remove(b[a])
    };
    var rL = new ah(typeof document == "undefined" ? null : document);
    var Yg;
    var tL = function(a) {
        this.g = a
    };
    var uL = function(a, b) {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        vL = function(a, b) {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        wL = {
            Rf: function(a) {
                return a.listener
            },
            Ge: function(a, b) {
                a = {};
                return a.__gppCall = {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }, a
            },
            Nd: function(a, b) {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        xL = {
            Rf: function(a) {
                return a.listener
            },
            Ge: function(a, b) {
                var c = {};
                return c.__gppCall = {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }, c
            },
            Nd: function(a, b) {
                b = b.__gppReturn;
                var c = b.returnValue.data;
                a == null || a(c, b.success)
            }
        },
        yL = function(a, b) {
            var c = b === void 0 ? {} : b;
            b = c.timeoutMs;
            c = c.cmpInteractionEventReporter;
            _.V.call(this);
            this.caller = new FK(a, "__gppLocator", function(d) {
                return typeof d.__gpp === "function"
            }, ch);
            this.caller.H.set("addEventListener", uL);
            this.caller.j.set("addEventListener", wL);
            this.caller.H.set("removeEventListener", vL);
            this.caller.j.set("removeEventListener", xL);
            this.timeoutMs = b != null ? b : 500;
            this.cmpInteractionEventReporter = c
        };
    _.R(yL, _.V);
    yL.prototype.o = function() {
        this.caller.dispose();
        _.V.prototype.o.call(this)
    };
    yL.prototype.addEventListener = function(a) {
        var b = this,
            c = _.IA(function() {
                a(zL, !0)
            }),
            d = this.timeoutMs === -1 ? void 0 : setTimeout(function() {
                c()
            }, this.timeoutMs);
        IK(this.caller, "addEventListener", {
            listener: function(e, f) {
                clearTimeout(d);
                try {
                    var h;
                    if (((h = e.pingData) == null ? void 0 : h.gppVersion) === void 0 || e.pingData.gppVersion === "1" || e.pingData.gppVersion === "1.0") {
                        b.removeEventListener(e.listenerId);
                        var k = {
                            eventName: "signalStatus",
                            data: "ready",
                            pingData: {
                                internalErrorState: 1,
                                gppString: "GPP_ERROR_STRING_IS_DEPRECATED_SPEC",
                                applicableSections: [-1]
                            }
                        }
                    } else Array.isArray(e.pingData.applicableSections) ? k = e : (b.removeEventListener(e.listenerId), k = {
                        eventName: "signalStatus",
                        data: "ready",
                        pingData: {
                            internalErrorState: 2,
                            gppString: "GPP_ERROR_STRING_EXPECTED_APPLICATION_SECTION_ARRAY",
                            applicableSections: [-1]
                        }
                    });
                    a(k, f);
                    var l;
                    (l = b.cmpInteractionEventReporter) != null && l.g && l.Qa.ao(l.g)
                } catch (m) {
                    if (e == null ? 0 : e.listenerId) try {
                        b.removeEventListener(e.listenerId)
                    } catch (n) {
                        a(AL, !0);
                        return
                    }
                    a(BL, !0)
                }
            }
        })
    };
    yL.prototype.removeEventListener = function(a) {
        IK(this.caller, "removeEventListener", {
            listener: function() {},
            listenerId: a
        })
    };
    var Ro = function(a, b) {
            var c = c === void 0 ? !1 : c;
            if (!a) return !1;
            var d = Ef(a.split("~")[0]),
                e = Ff(d.slice(0, 6)),
                f = Ff(d.slice(6, 12)),
                h = new KD;
            var k = _.ul(h, 1, e);
            var l = _.ul(k, 2, f);
            for (var m = d.slice(12), n = Ff(m.slice(0, 12)), p = [], q = m.slice(12).replace(/0+$/, ""), t = 0; t < n; t++) {
                if (q.length === 0) throw Error("Found " + t + " of " + n + " sections [" + p + "] but reached end of input [" + m + "]");
                var w = Ff(q[0]) === 0;
                q = q.slice(1);
                var v = If(q, m),
                    y = p.length === 0 ? 0 : p[p.length - 1],
                    z = Gf(v) + y;
                q = q.slice(v.length);
                if (w) p.push(z);
                else {
                    for (var G = If(q, m), C = Gf(G), H = 0; H <= C; H++) p.push(z + H);
                    q = q.slice(G.length)
                }
            }
            if (q.length > 0) throw Error("Found " + n + " sections [" + p + "] but has remaining input [" + q + "], entire input [" + m + "]");
            var L = _.le(l, 3, p, zc);
            var S = _.x(a, "includes").call(a, "~") ? a.split("~").slice(1) : [];
            var M = Iu(L, 3);
            for (var da = 0; da < M.length; ++da) {
                var Z = M[da];
                if (_.x(b, "includes").call(b, Z)) {
                    var U = S[da];
                    switch (Z) {
                        case 2:
                            if (c) {
                                var pa = iF(U);
                                if (pa && U) {
                                    for (var ka = _.wm(pa, AE, 1), Da = _.wm(pa, uE, 2) || new uE, ya = _.Zz(ka, 9), Fa = _.Zz(ka, 4), zb = _.Zz(ka, 5), $a = _.Q(ka, 10), Ra = _.Q(ka, 11), Db = _.u(ka, 16), Ha = _.Q(ka, 15), Ob = {
                                            consents: jF(_.ce(ka, 13, _.yc, _.Wj()), WE),
                                            legitimateInterests: jF(_.ce(ka, 14, _.yc, _.Wj()), WE)
                                        }, dd = {
                                            consents: jF(Iu(ka, 17)),
                                            legitimateInterests: jF(Iu(ka, 18))
                                        }, Rc = jF(_.ce(ka, 12, _.yc, _.Wj()), XE), Sc = _.Uj(ka, tE, 19, _.Wj()), Sd = {}, of = _.A(Sc), mg = of .next(); !mg.done; mg = of .next()) {
                                        var ng = mg.value,
                                            pf = _.Uf(ng, 1, 0);
                                        Sd[pf] = Sd[pf] || {};
                                        var gj = Iu(ng, 3);
                                        for (var rh = _.A(gj), hj = rh.next(); !hj.done; hj = rh.next()) Sd[pf][hj.value] = _.Uf(ng, 2, 0)
                                    }
                                    var og = {
                                        tcString: U,
                                        tcfPolicyVersion: ya,
                                        gdprApplies: !0,
                                        cmpId: Fa,
                                        cmpVersion: zb,
                                        isServiceSpecific: $a,
                                        useNonStandardStacks: Ra,
                                        publisherCC: Db,
                                        purposeOneTreatment: Ha,
                                        purpose: Ob,
                                        vendor: dd,
                                        specialFeatureOptins: Rc,
                                        publisher: {
                                            restrictions: Sd,
                                            consents: jF(_.ce(Da, 1, _.yc, _.Wj()), WE),
                                            legitimateInterests: jF(_.ce(Da, 2, _.yc, _.Wj()), WE),
                                            customPurposes: {
                                                consents: jF(Iu(Da, 3)),
                                                legitimateInterests: jF(Iu(Da, 4))
                                            }
                                        }
                                    }
                                } else og = null;
                                var qf = og;
                                if (!qf) throw Error("Cannot decode TCF V2 section string.");
                                if (!VK(qf, ["3", "4"], 0)) return !0
                            }
                            break;
                        case 7:
                            if (U.length === 0) throw Error("Cannot decode empty USNat section string.");
                            var rf = U.split(".");
                            if (rf.length > 2) throw Error("Expected at most 2 segments but got " + rf.length + " when decoding " + U + ".");
                            var cn = void 0,
                                uc = void 0,
                                jj = void 0,
                                Be = void 0,
                                kj = void 0,
                                th = void 0,
                                uh = void 0,
                                vh = void 0,
                                sf = void 0,
                                dn = void 0,
                                en = void 0,
                                fn = void 0,
                                lj = void 0,
                                wh = void 0,
                                mj = void 0,
                                xh = void 0,
                                pg = void 0,
                                nj = void 0,
                                oj = void 0,
                                pj = void 0,
                                qj = void 0,
                                rj = void 0,
                                Td = void 0,
                                sj = void 0,
                                Tc = void 0,
                                tj = void 0,
                                gn = void 0,
                                ed = void 0,
                                uj = void 0,
                                vj = void 0,
                                wj = rf[0];
                            if (wj.length === 0) throw Error("Cannot decode empty core segment string.");
                            var zh = Hf(wj, oE),
                                Ah = Ff(zh.slice(0, 6));
                            zh = zh.slice(6);
                            if (Ah !== 1) throw Error("Unable to decode unsupported USNat Section specification version " + Ah + " - only version 1 is supported.");
                            for (var Bh = 0, db = [], Ch = 0; Ch < nE.length; Ch++) {
                                var xj = nE[Ch];
                                db.push(Ff(zh.slice(Bh, Bh + xj)));
                                Bh += xj
                            }
                            var hn = new jE;
                            vj = _.ul(hn, 1, Ah);
                            var jn = db.shift();
                            uj = _.K(vj, 2, jn);
                            var qg = db.shift();
                            ed = _.K(uj, 3, qg);
                            var Ms = db.shift();
                            gn = _.K(ed, 4, Ms);
                            var Ns = db.shift();
                            tj = _.K(gn, 5, Ns);
                            var yj = db.shift();
                            Tc = _.K(tj, 6, yj);
                            var kn = db.shift();
                            sj = _.K(Tc, 7, kn);
                            var ln = db.shift();
                            Td = _.K(sj, 8, ln);
                            var Ps = db.shift();
                            rj = _.K(Td, 9, Ps);
                            var pc = db.shift();
                            qj = _.K(rj, 10, pc);
                            var Ss = new iE,
                                mn = db.shift();
                            pj = _.K(Ss, 1, mn);
                            var on = db.shift();
                            oj = _.K(pj, 2, on);
                            var Ws = db.shift();
                            nj = _.K(oj, 3, Ws);
                            var Xs = db.shift();
                            pg = _.K(nj, 4, Xs);
                            var Ys = db.shift();
                            xh = _.K(pg, 5, Ys);
                            var rg = db.shift();
                            mj = _.K(xh, 6, rg);
                            var Zs = db.shift();
                            wh = _.K(mj, 7, Zs);
                            var pn = db.shift();
                            lj = _.K(wh, 8, pn);
                            var ct = db.shift();
                            fn = _.K(lj, 9, ct);
                            var zj = db.shift();
                            en = _.K(fn, 10, zj);
                            var ft = db.shift();
                            dn = _.K(en, 11, ft);
                            var sg = db.shift();
                            sf = _.K(dn, 12, sg);
                            vh = _.ol(qj, 11, sf);
                            var gt = new hE,
                                ht = db.shift();
                            uh = _.K(gt, 1, ht);
                            var lt = db.shift();
                            th = _.K(uh, 2, lt);
                            kj = _.ol(vh, 12, th);
                            var ot = db.shift();
                            Be = _.K(kj, 13, ot);
                            var pt = db.shift();
                            jj = _.K(Be, 14, pt);
                            var Aj = db.shift();
                            uc = _.K(jj, 15, Aj);
                            var rt = db.shift();
                            var Bj = cn = _.K(uc, 16, rt);
                            if (rf.length === 1) var SG = mE(Bj);
                            else {
                                var XY = mE(Bj),
                                    TG = void 0,
                                    UG = void 0,
                                    VG = void 0,
                                    WG = rf[1];
                                if (WG.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                var XG = Hf(WG, 3),
                                    jo = Ff(XG.slice(0, 2));
                                if (jo < 0 || jo > 1) throw Error("Attempting to decode unknown GPC segment subsection type " + jo + ".");
                                VG = jo + 1;
                                var YY = Ff(XG.charAt(2)),
                                    ZY = new kE;
                                UG = _.K(ZY, 2, VG);
                                TG = _.tl(UG, 1, !!YY);
                                SG = _.ol(XY, 2, TG)
                            }
                            var Ou = _.wm(SG, jE, 1);
                            if (_.Uf(Ou, 8, 0) === 1 || _.Uf(Ou, 9, 0) === 1 || _.Uf(Ou, 10, 0) === 1) return !0;
                            break;
                        case 8:
                            if (U.length === 0) throw Error("Cannot decode empty USCA section string.");
                            var pk = U.split(".");
                            if (pk.length > 2) throw Error("Expected at most 1 sub-section but got " + (pk.length - 1) + " when decoding " + U + ".");
                            var $Y = void 0,
                                YG = void 0,
                                ZG = void 0,
                                $G = void 0,
                                aH = void 0,
                                bH = void 0,
                                cH = void 0,
                                dH = void 0,
                                eH = void 0,
                                fH = void 0,
                                gH = void 0,
                                hH = void 0,
                                iH = void 0,
                                jH = void 0,
                                kH = void 0,
                                lH = void 0,
                                mH = void 0,
                                nH = void 0,
                                oH = void 0,
                                pH = void 0,
                                qH = void 0,
                                rH = void 0,
                                sH = void 0,
                                tH = pk[0];
                            if (tH.length === 0) throw Error("Cannot decode empty core segment string.");
                            var ko = Hf(tH, SD),
                                Pu = Ff(ko.slice(0, 6));
                            ko = ko.slice(6);
                            if (Pu !== 1) throw Error("Unable to decode unsupported USCA Section specification version " + Pu + " - only version 1 is supported.");
                            for (var Qu = 0, Jb = [], Ru = 0; Ru < RD.length; Ru++) {
                                var uH = RD[Ru];
                                Jb.push(Ff(ko.slice(Qu, Qu + uH)));
                                Qu += uH
                            }
                            var aZ = new ND;
                            sH = _.ul(aZ, 1, Pu);
                            var bZ = Jb.shift();
                            rH = _.K(sH, 2, bZ);
                            var cZ = Jb.shift();
                            qH = _.K(rH, 3, cZ);
                            var dZ = Jb.shift();
                            pH = _.K(qH, 4, dZ);
                            var eZ = Jb.shift();
                            oH = _.K(pH, 5, eZ);
                            var fZ = Jb.shift();
                            nH = _.K(oH, 6, fZ);
                            var gZ = new MD,
                                hZ = Jb.shift();
                            mH = _.K(gZ, 1, hZ);
                            var iZ = Jb.shift();
                            lH = _.K(mH, 2, iZ);
                            var jZ = Jb.shift();
                            kH = _.K(lH, 3, jZ);
                            var kZ = Jb.shift();
                            jH = _.K(kH, 4, kZ);
                            var lZ = Jb.shift();
                            iH = _.K(jH, 5, lZ);
                            var mZ = Jb.shift();
                            hH = _.K(iH, 6, mZ);
                            var nZ = Jb.shift();
                            gH = _.K(hH, 7, nZ);
                            var oZ = Jb.shift();
                            fH = _.K(gH, 8, oZ);
                            var pZ = Jb.shift();
                            eH = _.K(fH, 9, pZ);
                            dH = _.ol(nH, 7, eH);
                            var qZ = new LD,
                                rZ = Jb.shift();
                            cH = _.K(qZ, 1, rZ);
                            var sZ = Jb.shift();
                            bH = _.K(cH, 2, sZ);
                            aH = _.ol(dH, 8, bH);
                            var tZ = Jb.shift();
                            $G = _.K(aH, 9, tZ);
                            var uZ = Jb.shift();
                            ZG = _.K($G, 10, uZ);
                            var vZ = Jb.shift();
                            YG = _.K(ZG, 11, vZ);
                            var wZ = Jb.shift();
                            var vH = $Y = _.K(YG, 12, wZ);
                            if (pk.length === 1) var wH = QD(vH);
                            else {
                                var xZ = QD(vH),
                                    xH = void 0,
                                    yH = void 0,
                                    zH = void 0,
                                    AH = pk[1];
                                if (AH.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                var BH = Hf(AH, 3),
                                    lo = Ff(BH.slice(0, 2));
                                if (lo < 0 || lo > 1) throw Error("Attempting to decode unknown GPC segment subsection type " + lo + ".");
                                zH = lo + 1;
                                var yZ = Ff(BH.charAt(2)),
                                    zZ = new OD;
                                yH = _.K(zZ, 2, zH);
                                xH = _.tl(yH, 1, !!yZ);
                                wH = _.ol(xZ, 2, xH)
                            }
                            var CH = _.wm(wH, ND, 1);
                            if (_.Uf(CH, 5, 0) === 1 || _.Uf(CH, 6, 0) === 1) return !0;
                            break;
                        case 9:
                            if (U.length === 0) throw Error("Cannot decode empty USVA section string.");
                            var mo = Hf(U, sE),
                                Su = Ff(mo.slice(0, 6));
                            mo = mo.slice(6);
                            if (Su !== 1) throw Error("Unable to decode unsupported USVA Section specification version " + Su + " - only version 1 is supported.");
                            for (var Tu = 0, cc = [], Uu = 0; Uu < rE.length; Uu++) {
                                var DH = rE[Uu];
                                cc.push(Ff(mo.slice(Tu, Tu + DH)));
                                Tu += DH
                            }
                            var AZ = Su,
                                BZ = new qE,
                                CZ = _.ul(BZ, 1, AZ),
                                DZ = cc.shift(),
                                EZ = _.K(CZ, 2, DZ),
                                FZ = cc.shift(),
                                GZ = _.K(EZ, 3, FZ),
                                HZ = cc.shift(),
                                IZ = _.K(GZ, 4, HZ),
                                JZ = cc.shift(),
                                KZ = _.K(IZ, 5, JZ),
                                LZ = cc.shift();
                            var MZ = _.K(KZ, 6, LZ);
                            var NZ = new pE,
                                OZ = cc.shift(),
                                PZ = _.K(NZ, 1, OZ),
                                QZ = cc.shift(),
                                RZ = _.K(PZ, 2, QZ),
                                SZ = cc.shift(),
                                TZ = _.K(RZ, 3, SZ),
                                UZ = cc.shift(),
                                VZ = _.K(TZ, 4, UZ),
                                WZ = cc.shift(),
                                XZ = _.K(VZ, 5, WZ),
                                YZ = cc.shift(),
                                ZZ = _.K(XZ, 6, YZ),
                                $Z = cc.shift(),
                                a_ = _.K(ZZ, 7, $Z),
                                b_ = cc.shift();
                            var c_ = _.K(a_, 8, b_);
                            var d_ = _.ol(MZ, 7, c_),
                                e_ = cc.shift(),
                                f_ = _.K(d_, 8, e_),
                                g_ = cc.shift(),
                                h_ = _.K(f_, 9, g_),
                                i_ = cc.shift(),
                                j_ = _.K(h_, 10, i_),
                                k_ = cc.shift(),
                                EH = _.K(j_, 11, k_);
                            if (_.Uf(EH, 5, 0) === 1 || _.Uf(EH, 6, 0) === 1) return !0;
                            break;
                        case 10:
                            if (U.length === 0) throw Error("Cannot decode empty USCO section string.");
                            var qk = U.split(".");
                            if (qk.length > 2) throw Error("Expected at most 2 segments but got " + qk.length + " when decoding " + U + ".");
                            var l_ = void 0,
                                FH = void 0,
                                GH = void 0,
                                HH = void 0,
                                IH = void 0,
                                JH = void 0,
                                KH = void 0,
                                LH = void 0,
                                MH = void 0,
                                NH = void 0,
                                OH = void 0,
                                PH = void 0,
                                QH = void 0,
                                RH = void 0,
                                SH = void 0,
                                TH = void 0,
                                UH = void 0,
                                VH = void 0,
                                WH = qk[0];
                            if (WH.length === 0) throw Error("Cannot decode empty core segment string.");
                            var no = Hf(WH, ZD),
                                Vu = Ff(no.slice(0, 6));
                            no = no.slice(6);
                            if (Vu !== 1) throw Error("Unable to decode unsupported USCO Section specification version " + Vu + " - only version 1 is supported.");
                            for (var Wu = 0, hc = [], Xu = 0; Xu < YD.length; Xu++) {
                                var XH = YD[Xu];
                                hc.push(Ff(no.slice(Wu, Wu + XH)));
                                Wu += XH
                            }
                            var m_ = new UD;
                            VH = _.ul(m_, 1, Vu);
                            var n_ = hc.shift();
                            UH = _.K(VH, 2, n_);
                            var o_ = hc.shift();
                            TH = _.K(UH, 3, o_);
                            var p_ = hc.shift();
                            SH = _.K(TH, 4, p_);
                            var q_ = hc.shift();
                            RH = _.K(SH, 5, q_);
                            var r_ = hc.shift();
                            QH = _.K(RH, 6, r_);
                            var s_ = new TD,
                                t_ = hc.shift();
                            PH = _.K(s_, 1, t_);
                            var u_ = hc.shift();
                            OH = _.K(PH, 2, u_);
                            var v_ = hc.shift();
                            NH = _.K(OH, 3, v_);
                            var w_ = hc.shift();
                            MH = _.K(NH, 4, w_);
                            var x_ = hc.shift();
                            LH = _.K(MH, 5, x_);
                            var y_ = hc.shift();
                            KH = _.K(LH, 6, y_);
                            var z_ = hc.shift();
                            JH = _.K(KH, 7, z_);
                            IH = _.ol(QH, 7, JH);
                            var A_ = hc.shift();
                            HH = _.K(IH, 8, A_);
                            var B_ = hc.shift();
                            GH = _.K(HH, 9, B_);
                            var C_ = hc.shift();
                            FH = _.K(GH, 10, C_);
                            var D_ = hc.shift();
                            var YH = l_ = _.K(FH, 11, D_);
                            if (qk.length === 1) var ZH = XD(YH);
                            else {
                                var E_ = XD(YH),
                                    $H = void 0,
                                    aI = void 0,
                                    bI = void 0,
                                    cI = qk[1];
                                if (cI.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                var dI = Hf(cI, 3),
                                    oo = Ff(dI.slice(0, 2));
                                if (oo < 0 || oo > 1) throw Error("Attempting to decode unknown GPC segment subsection type " + oo + ".");
                                bI = oo + 1;
                                var F_ = Ff(dI.charAt(2)),
                                    G_ = new VD;
                                aI = _.K(G_, 2, bI);
                                $H = _.tl(aI, 1, !!F_);
                                ZH = _.ol(E_, 2, $H)
                            }
                            var eI = _.wm(ZH, UD, 1);
                            if (_.Uf(eI, 5, 0) === 1 || _.Uf(eI, 6, 0) === 1) return !0;
                            break;
                        case 12:
                            if (U.length === 0) throw Error("Cannot decode empty usct section string.");
                            var rk = U.split(".");
                            if (rk.length > 2) throw Error("Expected at most 2 segments but got " + rk.length + " when decoding " + U + ".");
                            var H_ = void 0,
                                fI = void 0,
                                gI = void 0,
                                hI = void 0,
                                iI = void 0,
                                jI = void 0,
                                kI = void 0,
                                lI = void 0,
                                mI = void 0,
                                nI = void 0,
                                oI = void 0,
                                pI = void 0,
                                qI = void 0,
                                rI = void 0,
                                sI = void 0,
                                tI = void 0,
                                uI = void 0,
                                vI = void 0,
                                wI = void 0,
                                xI = void 0,
                                yI = void 0,
                                zI = void 0,
                                AI = rk[0];
                            if (AI.length === 0) throw Error("Cannot decode empty core segment string.");
                            var po = Hf(AI, gE),
                                Yu = Ff(po.slice(0, 6));
                            po = po.slice(6);
                            if (Yu !== 1) throw Error("Unable to decode unsupported USCT Section specification version " + Yu + " - only version 1 is supported.");
                            for (var Zu = 0, Qb = [], $u = 0; $u < fE.length; $u++) {
                                var BI = fE[$u];
                                Qb.push(Ff(po.slice(Zu, Zu + BI)));
                                Zu += BI
                            }
                            var I_ = new bE;
                            zI = _.ul(I_, 1, Yu);
                            var J_ = Qb.shift();
                            yI = _.K(zI, 2, J_);
                            var K_ = Qb.shift();
                            xI = _.K(yI, 3, K_);
                            var L_ = Qb.shift();
                            wI = _.K(xI, 4, L_);
                            var M_ = Qb.shift();
                            vI = _.K(wI, 5, M_);
                            var N_ = Qb.shift();
                            uI = _.K(vI, 6, N_);
                            var O_ = new aE,
                                P_ = Qb.shift();
                            tI = _.K(O_, 1, P_);
                            var Q_ = Qb.shift();
                            sI = _.K(tI, 2, Q_);
                            var R_ = Qb.shift();
                            rI = _.K(sI, 3, R_);
                            var S_ = Qb.shift();
                            qI = _.K(rI, 4, S_);
                            var T_ = Qb.shift();
                            pI = _.K(qI, 5, T_);
                            var U_ = Qb.shift();
                            oI = _.K(pI, 6, U_);
                            var V_ = Qb.shift();
                            nI = _.K(oI, 7, V_);
                            var W_ = Qb.shift();
                            mI = _.K(nI, 8, W_);
                            lI = _.ol(uI, 7, mI);
                            var X_ = new $D,
                                Y_ = Qb.shift();
                            kI = _.K(X_, 1, Y_);
                            var Z_ = Qb.shift();
                            jI = _.K(kI, 2, Z_);
                            var $_ = Qb.shift();
                            iI = _.K(jI, 3, $_);
                            hI = _.ol(lI, 8, iI);
                            var a0 = Qb.shift();
                            gI = _.K(hI, 9, a0);
                            var b0 = Qb.shift();
                            fI = _.K(gI, 10, b0);
                            var c0 = Qb.shift();
                            var CI = H_ = _.K(fI, 11, c0);
                            if (rk.length === 1) var DI = eE(CI);
                            else {
                                var d0 = eE(CI),
                                    EI = void 0,
                                    FI = void 0,
                                    GI = void 0,
                                    HI = rk[1];
                                if (HI.length === 0) throw Error("Cannot decode empty GPC segment string.");
                                var II = Hf(HI, 3),
                                    qo = Ff(II.slice(0, 2));
                                if (qo < 0 || qo > 1) throw Error("Attempting to decode unknown GPC segment subsection type " + qo + ".");
                                GI = qo + 1;
                                var e0 = Ff(II.charAt(2)),
                                    f0 = new cE;
                                FI = _.K(f0, 2, GI);
                                EI = _.tl(FI, 1, !!e0);
                                DI = _.ol(d0, 2, EI)
                            }
                            var JI = _.wm(DI, bE, 1);
                            if (_.Uf(JI, 5, 0) === 1 || _.Uf(JI, 6, 0) === 1) return !0
                    }
                }
            }
            return !1
        },
        BL = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                internalErrorState: 2,
                gppString: "GPP_ERROR_STRING_UNAVAILABLE",
                applicableSections: [-1]
            },
            listenerId: -1
        },
        zL = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_LISTENER_REGISTRATION_TIMEOUT",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        },
        AL = {
            eventName: "signalStatus",
            data: "ready",
            pingData: {
                gppString: "GPP_ERROR_STRING_REMOVE_EVENT_LISTENER_ERROR",
                internalErrorState: 2,
                applicableSections: [-1]
            },
            listenerId: -1
        };
    var CL = function(a) {
        var b = _.yh(PI);
        b = b === void 0 ? 1E3 : b;
        this.mb = 17;
        this.Qa = a;
        this.bb = b;
        b > 0 && _.oh() < 1 / b && (a = new PF, this.g = _.Ii(a, 1, b), b = _.Ji(this.g, _.Ki, 2), _.oe(b, 1, _.wc, 17))
    };
    var DL = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, DL.prototype)
    };
    _.R(DL, Error);
    DL.prototype.name = "PublisherInputError";
    var EL = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, EL.prototype)
    };
    _.R(EL, Error);
    EL.prototype.name = "ServerError";
    var FL = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, FL.prototype)
    };
    _.R(FL, Error);
    FL.prototype.name = "NetworkError";
    _.fh = function(a) {
        var b = "gd";
        if (a.gd && a.hasOwnProperty(b)) return a.gd;
        b = new a;
        return a.gd = b
    };
    var gh = function() {};
    gh.prototype.g = function() {};
    gh.prototype.l = function() {};
    gh.prototype.o = function() {
        return []
    };
    gh.prototype.B = function() {
        return []
    };
    var Hh = function(a, b) {
        a.g = eh(1, b, function() {});
        a.o = function(c, d) {
            return eh(2, b, function() {
                return []
            })(c, 2, d)
        };
        a.B = function() {
            return eh(3, b, function() {
                return []
            })(2)
        };
        a.l = function(c) {
            eh(16, b, function() {})(c, 2)
        }
    };
    var sh = function() {
        var a = {};
        this.o = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.l = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.B = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.L = function(b, c) {
            return a[b] != null ? a[b] : c
        };
        this.j = function(b, c) {
            return a[b] != null ? c.concat(a[b]) : c
        };
        this.g = function() {}
    };
    var Fh = function() {
            this.g = function() {}
        },
        Jh = function(a, b) {
            a.g = eh(14, b, function() {})
        };
    var Cm = function(a, b, c) {
            a && b !== null && b != b.top && (b = b.top);
            try {
                return (c === void 0 ? 0 : c) ? (new _.Nm(b.innerWidth, b.innerHeight)).round() : _.FC(b || window).round()
            } catch (d) {
                return new _.Nm(-12245933, -12245933)
            }
        },
        GL = function(a) {
            a = a === void 0 ? _.ca : a;
            a = a.devicePixelRatio;
            return typeof a === "number" ? +a.toFixed(3) : null
        },
        HL = function(a) {
            return a.compatMode == "CSS1Compat" ? a.documentElement : a.body
        },
        Or = function(a, b) {
            b = b === void 0 ? _.ca : b;
            a = a.scrollingElement || HL(a);
            return new _.Jm(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        Zm = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var JL, KL;
    _.IL = function(a) {
        this.C = a
    };
    _.Tn = function(a, b, c) {
        return c ? Xg(b, c, a.C) : null
    };
    JL = function(a, b, c, d) {
        if (d) {
            var e = _.ig(c, 2) - Date.now() / 1E3;
            e = {
                He: Math.max(e, 0),
                path: _.u(c, 3),
                domain: _.u(c, 4),
                hg: !1
            };
            c = c.getValue();
            a = a.C;
            Ug(d) && bh(b, c, e, a)
        }
    };
    KL = function(a, b, c) {
        if (c && Xg(b, c, a.C)) {
            var d = a.C.location.hostname;
            if (d === "localhost") d = ["localhost"];
            else if (d = d.split("."), d.length < 2) d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = _.A(d);
            for (var h = d.next(); !h.done; h = d.next()) e = b, f = a.C, h = h.value, Ug(c) && f.origin !== "null" && (new ah(f.document)).remove(e, "/", h)
        }
    };
    var LL = {},
        ML = (LL[3] = jf(Ty(new kg(lg, "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), LL);
    ({})[3] = jf(Ty(new kg(lg, "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var NL = function(a) {
            this.g = a;
            this.o = qz()
        },
        OL = function(a) {
            var b = {};
            _.$y(a, function(c) {
                b[c.g] = c.o
            });
            return b
        };
    _.PL = _.Zx(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);
    var Ox = function(a, b, c) {
        this.configuration = a;
        this.Qa = b;
        this.g = c
    };
    Ox.prototype.log = function(a, b, c) {
        var d, e = (d = c.bb) != null ? d : this.configuration[a].qe;
        e === 0 || 1 / e < this.g || (b = b(_.x(Object, "assign").call(Object, {}, {
            bb: e
        }, c))) && this.configuration[a].send(this.Qa, b)
    };
    var QL = function(a, b, c, d, e, f) {
        _.V.call(this);
        this.Ob = a;
        this.status = 1;
        this.B = b;
        this.l = c;
        this.I = d;
        this.Ae = !!e;
        this.j = Math.random();
        this.H = {};
        this.g = null;
        this.J = (0, _.Cy)(this.F, this);
        this.T = f
    };
    _.R(QL, _.V);
    QL.prototype.F = function(a) {
        if (!(this.l !== "*" && a.origin !== this.l || !this.Ae && a.source != this.B)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.La(b) && (a = b.i, b.c === this.Ob && a != this.j)) {
                if (this.status !== 2) try {
                    this.status = 2, RL(this), this.g && (this.g(), this.g = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if (typeof a === "string" && (typeof b === "string" || _.La(b)) && this.H.hasOwnProperty(a)) this.H[a](b)
            }
        }
    };
    var RL = function(a) {
        var b = {};
        b.c = a.Ob;
        b.i = a.j;
        a.T && (b.e = a.T);
        a.B.postMessage(JSON.stringify(b), a.l)
    };
    QL.prototype.A = function() {
        if (this.status === 1) {
            try {
                this.B.postMessage && RL(this)
            } catch (a) {}
            window.setTimeout((0, _.Cy)(this.A, this), 50)
        }
    };
    QL.prototype.connect = function(a) {
        a && (this.g = a);
        _.tf(window, "message", this.J);
        this.I && this.A()
    };
    var SL = function(a, b, c) {
        a.H[b] = c
    };
    QL.prototype.send = function(a, b) {
        var c = {};
        c.c = this.Ob;
        c.i = this.j;
        c.s = a;
        c.p = b;
        try {
            this.B.postMessage(JSON.stringify(c), this.l)
        } catch (d) {}
    };
    QL.prototype.o = function() {
        this.status = 3;
        _.Of(window, "message", this.J);
        _.V.prototype.o.call(this)
    };
    var Lh = new _.B.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        Mh = new _.B.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var TL = function(a) {
        this.D = _.D(a)
    };
    _.R(TL, _.E);
    var UL = gf(TL);
    var VL = function(a) {
        this.D = _.D(a)
    };
    _.R(VL, _.E);
    var WL = function(a) {
        this.D = _.D(a)
    };
    _.R(WL, _.E);
    var XL, YL, ZL, $L;
    _.$s = function(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    XL = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    YL = function(a) {
        return a.hidden != null ? a.hidden : a.mozHidden != null ? a.mozHidden : a.webkitHidden != null ? a.webkitHidden : null
    };
    ZL = function(a, b) {
        if (_.$s(b) == 3) return !1;
        a();
        return !0
    };
    $L = function(a, b) {
        var c = !0;
        c = c === void 0 ? !1 : c;
        if (!ZL(a, b))
            if (c) {
                var d = function() {
                    _.Of(b, "prerenderingchange", d);
                    a()
                };
                _.tf(b, "prerenderingchange", d)
            } else {
                var e = !1,
                    f = XL(b),
                    h = function() {
                        !e && ZL(a, b) && (e = !0, _.Of(b, f, h))
                    };
                f && _.tf(b, f, h)
            }
    };
    _.Oh = function() {
        var a = this;
        this.promise = new _.B.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    _.aM = function() {
        this.g = Math.random()
    };
    _.xi = function(a, b, c, d, e) {
        if (((d === void 0 ? 0 : d) ? a.g : Math.random()) < (e || .001)) try {
            if (c instanceof _.uF) var f = c;
            else f = new _.uF, _.Mn(c, function(k, l) {
                var m = f,
                    n = m.B++;
                k = _.vF(l, k);
                m.g.push(n);
                m.o[n] = k
            });
            var h = zF(f, "/pagead/gen_204?id=" + b + "&");
            h && AF(_.ca, h)
        } catch (k) {}
    };
    var bM = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        cM = new _.B.Map,
        Yh = function(a, b, c) {
            this.pbjs = a;
            this.slot = b;
            var d;
            this.Ue = (d = c == null ? void 0 : c.Ue) != null ? d : {};
            this.yc = !(c == null || !c.yc);
            var e;
            this.Bc = (e = c == null ? void 0 : c.Bc) != null ? e : new _.B.Map;
            var f;
            this.Sh = (f = c == null ? void 0 : c.Sh) != null ? f : new _.B.Map;
            var h;
            this.ug = (h = c == null ? void 0 : c.ug) != null ? h : new dB;
            this.Gh = c == null ? void 0 : c.Gh;
            this.g = c
        },
        fM = function(a, b, c) {
            var d = a.pbjs.getBidResponsesForAdUnitCode;
            if (d) {
                var e, f, h, k, l, m = (l = (e = d((h = a.slot.Ed) != null ? h : "")) == null ? void 0 : e.bids) != null ? l : (f = d((k = a.slot.adUnitCode) != null ? k : "")) == null ? void 0 : f.bids;
                if (m != null && m.length && (e = m.filter(function(q) {
                        var t = q.auctionId;
                        var w = q.adId;
                        return t !== c && _.x(Object, "values").call(Object, a.Ue).some(function(v) {
                            return _.x(v, "includes").call(v, w)
                        })
                    }), e.length)) {
                    var n, p;
                    d = (n = a.pbjs.adUnits) == null ? void 0 : (p = _.x(n, "find").call(n, function(q) {
                        q = q.code;
                        return q === a.slot.Ed || q === a.slot.adUnitCode
                    })) == null ? void 0 : p.mediaTypes;
                    n = _.A(e);
                    for (p = n.next(); !p.done; p = n.next()) p = p.value, e = dM(a, p, d), e = fB(b, $A(_.dk(aB(ZA(new YA, p.bidder), 1), 6, !0), e)), eM(a, p.bidder, e), typeof p.timeToRespond === "number" && _.al(e, 2, Math.round(p.timeToRespond))
                }
            }
        },
        eM = function(a, b, c) {
            for (var d = []; b && !_.x(d, "includes").call(d, b);) {
                d.unshift(b);
                var e = void 0,
                    f = void 0;
                b = (e = a.pbjs) == null ? void 0 : (f = e.aliasRegistry) == null ? void 0 : f[b]
            }
            _.le(c, 10, d, _.Vc)
        },
        gM = function(a, b, c) {
            _.yc(_.Sz(b, 3)) != null || (c === a.slot.adUnitCode ? _.ur(b, 3, 1) : c === a.slot.Ed && _.ur(b, 3, 2))
        },
        hM = function(a, b, c, d, e) {
            e = a.Sh.get(e != null ? e : function() {
                return null
            });
            (e == null ? void 0 : _.Uf(e, 1, 0)) !== 1 && _.ol(c, 5, e);
            iq(b, tq, 5) || (e ? _.Uf(e, 1, 0) === 1 ? gB(b, e) : gB(b, rq(sq(qq(new tq, a.yc), 1), Wh(d, a.Bc))) : gB(b, sq(qq(new tq, a.yc), Wh(d, a.Bc) ? 2 : 3)))
        },
        dM = function(a, b, c) {
            var d = b.cpm,
                e = b.originalCpm,
                f = b.currency,
                h = b.originalCurrency,
                k = b.dealId,
                l = b.adserverTargeting,
                m = b.bidder,
                n = b.adId,
                p = b.mediaType,
                q = b.height,
                t = b.width,
                w = b.meta,
                v = new WA;
            typeof d === "number" && (_.al(v, 2, Math.round(d * 1E6)), h && h !== f || (d = Math.round(Number(e) * 1E6), isNaN(d) || d === _.ig(v, 2) || _.al(v, 8, d)));
            typeof f === "string" && _.uq(v, 3, f);
            (_.F = ["string", "number"], _.x(_.F, "includes")).call(_.F, typeof k) && (f = new OA, k = _.uq(f, 1, String(k)), _.ol(v, 6, k));
            if (typeof l === "object")
                for (k = _.A(["", "_" + m]), f = k.next(); !f.done; f = k.next()) {
                    d = f.value;
                    f = [];
                    e = _.A(_.x(Object, "entries").call(Object, l));
                    for (h = e.next(); !h.done; h = e.next()) {
                        h = _.A(h.value);
                        var y = h.next().value;
                        h = h.next().value;
                        y = (y + d).slice(0, 20);
                        var z = void 0;
                        if ((z = a.Ue[y]) != null && z.length)
                            if (a.Ue[y][0] === String(h)) f.push(y);
                            else {
                                f = [];
                                break
                            }
                    }
                    d = _.ce(v, 4, _.Xc, _.Wj());
                    _.le(v, 4, d.concat(f), _.Vc)
                }
            switch (p || "banner") {
                case "banner":
                    _.ur(v, 5, 1);
                    break;
                case "native":
                    _.ur(v, 5, 2);
                    break;
                case "video":
                    _.ur(v, 5, 3);
                    p = new UA;
                    var G;
                    if ((c == null ? void 0 : (G = c.video) == null ? void 0 : G.context) === "adpod") {
                        var C, H = c == null ? void 0 : (C = c.video) == null ? void 0 : C.adPodDurationSec;
                        _.al(p, 1, H)
                    } else C = c == null ? void 0 : (H = c.video) == null ? void 0 : H.maxduration, _.al(p, 1, C);
                    var L;
                    if (typeof(c == null ? void 0 : (L = c.video) == null ? void 0 : L.skip) === "number") {
                        var S;
                        c = !!(c == null ? 0 : (S = c.video) == null ? 0 : S.skip);
                        _.dk(p, 2, c)
                    }
                    var M;
                    S = (M = b.meta) == null ? void 0 : M.adServerCatId;
                    M = _.uq(p, 3, S);
                    if (typeof l !== "object") l = null;
                    else {
                        var da, Z;
                        S = String((Z = (da = l["hb_pb_cat_dur_" + m]) != null ? da : l.hb_pb_cat_dur) != null ? Z : "");
                        var U, pa, ka, Da;
                        da = String((Da = (ka = (pa = (U = l["hb_cache_id_" + m]) != null ? U : l["hb_uuid_" + m]) != null ? pa : l.hb_cache_id) != null ? ka : l.hb_uuid) != null ? Da : "");
                        l = S && da ? S + "_" + da : da ? da : null
                    }
                    _.uq(M, 4, l);
                    _.ol(v, 9, p)
            }
            _.x(Number, "isFinite").call(Number, q) && _.x(Number, "isFinite").call(Number, t) && (l = new SA, t = _.Yq(l, 1, Math.round(t)), q = _.Yq(t, 2, Math.round(q)), _.ol(v, 7, q));
            typeof n === "string" && _.uq(v, 1, n);
            var ya, Fa;
            if (((ya = a.g) == null ? 0 : ya.zi) && Array.isArray(w == null ? void 0 : w.advertiserDomains) && (w == null ? 0 : (Fa = w.advertiserDomains[0]) == null ? 0 : Fa.length)) {
                var zb;
                n = w.advertiserDomains[0].substring(0, (zb = a.g) == null ? void 0 : zb.zi);
                _.uq(v, 10, n)
            }
            if (b.meta && a.g) {
                var $a, Ra;
                a.g.Hi && typeof b.meta.agencyId === "string" && ((Ra = b.meta.agencyId) == null ? 0 : Ra.length) && ($a != null || ($a = new QA), _.uq($a, 1, b.meta.agencyId.substring(0, a.g.Hi)));
                var Db;
                a.g.Ii && typeof b.meta.agencyId === "string" && ((Db = b.meta.agencyName) == null ? 0 : Db.length) && ($a != null || ($a = new QA), _.uq($a, 2, b.meta.agencyName.substring(0, a.g.Ii)));
                var Ha;
                a.g.kj && typeof b.meta.networkId === "string" && ((Ha = b.meta.networkId) == null ? 0 : Ha.length) && ($a != null || ($a = new QA), _.uq($a, 3, b.meta.networkId.substring(0, a.g.kj)));
                var Ob;
                a.g.lj && typeof b.meta.networkId === "string" && ((Ob = b.meta.networkName) == null ? 0 : Ob.length) && ($a != null || ($a = new QA), _.uq($a, 4, b.meta.networkName.substring(0, a.g.lj)));
                $a && _.ol(v, 11, $a)
            }
            return v
        },
        iM = function(a, b) {
            var c = new _.B.Map,
                d = function(l) {
                    var m = c.get(l);
                    m || (m = {}, c.set(l, m));
                    return m
                },
                e = [];
            a = _.A(a);
            for (var f = a.next(); !f.done; f = a.next()) {
                f = f.value;
                var h = f.args,
                    k = f.eventType;
                f = f.elapsedTime;
                k === "bidTimeout" && e.push.apply(e, _.aj(h));
                switch (k) {
                    case "bidRequested":
                        if (h.auctionId !== b) continue;
                        if (!Array.isArray(h.bids)) continue;
                        h = _.A(h.bids);
                        for (k = h.next(); !k.done; k = h.next())
                            if (k = k.value.bidId) d(k).requestTime = f;
                        break;
                    case "noBid":
                        h.auctionId === b && h.bidId && (d(h.bidId).Un = f)
                }
            }
            d = new _.B.Map;
            a = _.A(_.x(c, "entries").call(c));
            for (f = a.next(); !f.done; f = a.next()) h = _.A(f.value), f = h.next().value, k = h.next().value, h = k.requestTime, k = k.Un, h && k && d.set(f, {
                latency: k - h,
                Yj: !1
            });
            e = _.A(e);
            for (a = e.next(); !a.done; a = e.next())
                if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Yj = !0;
            return d
        },
        Xh = function(a) {
            var b = new _.B.Map,
                c = (0, a.pbjs.getEvents)(),
                d = c.filter(function(U) {
                    var pa = U.eventType;
                    U = U.args;
                    return pa === "auctionEnd" && U.auctionId
                }),
                e = new kB,
                f = function(U) {
                    return U === a.slot.Ed || U === a.slot.adUnitCode
                },
                h, k, l, m = (l = cM.get(((h = a.slot.Ed) != null ? h : "") + ((k = a.slot.adUnitCode) != null ? k : ""))) != null ? l : 0,
                n;
            d = (n = d.filter(function(U) {
                var pa, ka, Da;
                return Number((pa = U.args) == null ? void 0 : pa.timestamp) > m && ((ka = U.args) == null ? void 0 : (Da = ka.adUnitCodes) == null ? void 0 : _.x(Da, "find").call(Da, f))
            })) != null ? n : [];
            if (!d.length) return null;
            var p;
            if (d = (p = d.reduce(function(U, pa) {
                    return Number(pa.args.timestamp) > Number(U.args.timestamp) ? pa : U
                })) == null ? void 0 : p.args) {
                n = d.bidderRequests === void 0 ? [] : d.bidderRequests;
                p = d.bidsReceived === void 0 ? [] : d.bidsReceived;
                var q = d.auctionId;
                d = d.timestamp;
                if (q && d != null && n.length) {
                    var t, w;
                    cM.set(((t = a.slot.Ed) != null ? t : "") + ((w = a.slot.adUnitCode) != null ? w : ""), d);
                    t = lB(e);
                    a.pbjs.version && bM.test(a.pbjs.version) && _.uq(t, 6, a.pbjs.version);
                    var v, y, z, G;
                    if ((y = (v = a.pbjs).getConfig) == null ? 0 : (z = y.call(v).cache) == null ? 0 : (G = z.url) == null ? 0 : G.length) {
                        var C, H, L;
                        hB(t, (H = (C = a.pbjs).getConfig) == null ? void 0 : (L = H.call(C).cache) == null ? void 0 : L.url)
                    }
                    _.ol(t, 9, a.ug);
                    v = Wm(function() {
                        return iM(c, q)
                    });
                    y = _.A(n);
                    G = y.next();
                    for (z = {}; !G.done; z = {
                            bidderCode: void 0,
                            Sk: void 0
                        }, G = y.next())
                        for (C = G.value, z.bidderCode = C.bidderCode, H = C.bids, G = C.timeout, z.Sk = C.src, C = C.auctionStart, H = _.A(H), L = H.next(), w = {}; !L.done; w = {
                                kf: void 0
                            }, L = H.next())
                            if (k = L.value, w.kf = k.bidId, h = k.transactionId, n = k.adUnitCode, d = k.getFloor, L = k.mediaTypes, k = k.ortb2Imp, w.kf && f(n)) {
                                gM(a, t, n);
                                var S = l = void 0,
                                    M = void 0;
                                ((l = a.g) == null ? 0 : l.Bj) && !_.Yj(t, 11) && typeof((S = k) == null ? void 0 : (M = S.ext) == null ? void 0 : M.gpid) === "string" && (l = void 0, iB(t, k.ext.gpid.substring(0, (l = a.g) == null ? void 0 : l.Bj)));
                                h && (_.Yj(t, 4) || _.uq(t, 4, h), b.has(h) || b.set(h, C));
                                Tr(t, 8) == null && _.x(Number, "isFinite").call(Number, G) && _.Yq(t, 8, G);
                                k = _.x(p, "find").call(p, function(U) {
                                    return function(pa) {
                                        return pa.requestId === U.kf
                                    }
                                }(w));
                                h = fB(t, function(U) {
                                    return function() {
                                        var pa = ZA(new YA, U.bidderCode);
                                        eM(a, U.bidderCode, pa);
                                        switch (U.Sk) {
                                            case null:
                                            case void 0:
                                            case "client":
                                                _.ur(pa, 7, 1);
                                                break;
                                            case "s2s":
                                                _.ur(pa, 7, 2)
                                        }
                                        return pa
                                    }
                                }(z)());
                                hM(a, t, h, n, d);
                                if (k) {
                                    aB(h, 1);
                                    typeof k.timeToRespond === "number" && _.x(Number, "isFinite").call(Number, k.timeToRespond) && _.al(h, 2, Math.round(k.timeToRespond));
                                    try {
                                        n = w = void 0, (n = (w = a).Gh) == null || n.call(w, k)
                                    } catch (U) {}
                                    L = dM(a, k, L);
                                    $A(h, L)
                                } else(L = v().get(w.kf)) && !L.Yj ? (aB(h, 2), _.x(Number, "isFinite").call(Number, L.latency) && _.al(h, 2, Math.round(L.latency))) : (L = aB(h, 3), _.x(Number, "isFinite").call(Number, G) && _.al(L, 2, Math.round(G)))
                            }
                    var da, Z;
                    ((Z = (da = a.pbjs).getConfig) == null ? 0 : Z.call(da).useBidCache) && fM(a, t, q);
                    return e
                }
            }
        };
    var jM = function(a) {
        this.D = _.D(a)
    };
    _.R(jM, _.E);
    var kM = function(a) {
        this.D = _.D(a)
    };
    _.R(kM, _.E);
    var lM = function(a, b) {
        return _.le(a, 1, b, _.Vc)
    };
    kM.Z = [1];
    var mM = function(a) {
        this.D = _.D(a)
    };
    _.R(mM, _.E);
    var nM = function(a, b) {
        return _.le(a, 1, b, Bc)
    };
    mM.Z = [1, 2];
    var oM = function(a) {
        this.D = _.D(a)
    };
    _.R(oM, _.E);
    var pM = function(a) {
        this.D = _.D(a)
    };
    _.R(pM, _.E);
    var qM = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.x(Object, "setPrototypeOf").call(Object, this, qM.prototype);
        this.name = "InputError"
    };
    _.R(qM, Error);
    var rM = function() {
            this.ub = !1
        },
        sM = function() {
            rM.apply(this, arguments);
            this.Vd = new _.Oh
        };
    _.R(sM, rM);
    var tM = function(a, b) {
        a.ub || (a.ub = !0, a.Oe = b, a.Vd.resolve(b))
    };
    _.Ux.Object.defineProperties(sM.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Vd.promise
            }
        },
        Wd: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ub
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ne
            }
        }
    });
    var Cq = function() {
        sM.apply(this, arguments)
    };
    _.R(Cq, sM);
    _.r = Cq.prototype;
    _.r.G = function(a) {
        tM(this, a)
    };
    _.r.Cb = function(a) {
        tM(this, a != null ? a : null)
    };
    _.r.ca = function() {
        tM(this, null)
    };
    _.r.Ra = function(a) {
        var b = this;
        a.then(function(c) {
            tM(b, c)
        })
    };
    _.r.wb = function(a) {
        this.ub || (this.ub = !0, this.Oe = null, this.Ne = a, this.Vd.reject(a))
    };
    var uM = function() {
        sM.apply(this, arguments)
    };
    _.R(uM, sM);
    uM.prototype.G = function(a) {
        tM(this, a)
    };
    uM.prototype.Ra = function(a) {
        var b = this;
        a.then(function(c) {
            return void tM(b, c)
        })
    };
    uM.prototype.wb = function(a) {
        this.ub || (this.ub = !0, this.Ne = a, this.Vd.reject(a))
    };
    var vM = function() {
        uM.apply(this, arguments)
    };
    _.R(vM, uM);
    vM.prototype.Cb = function(a) {
        tM(this, a != null ? a : null)
    };
    vM.prototype.ca = function() {
        tM(this, null)
    };
    vM.prototype.Ra = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.Cb(c)
        })
    };
    var wM = function(a) {
        this.ub = !1;
        this.Dc = a
    };
    _.R(wM, rM);
    wM.prototype.Wd = function() {
        return this.Dc.ub
    };
    wM.prototype.ah = function() {
        return this.Dc.Oe != null
    };
    _.Ux.Object.defineProperties(wM.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Dc.Ne
            }
        }
    });
    var xM = function(a) {
        wM.call(this, a);
        this.Dc = a
    };
    _.R(xM, wM);
    _.Ux.Object.defineProperties(xM.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Dc.Oe
            }
        }
    });
    var yM = function(a) {
        wM.call(this, a);
        this.Dc = a
    };
    _.R(yM, wM);
    _.Ux.Object.defineProperties(yM.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return (a = this.Dc.Oe) != null ? a : null
            }
        }
    });
    var zM = function() {
        wM.apply(this, arguments)
    };
    _.R(zM, wM);
    _.Ux.Object.defineProperties(zM.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return (a = this.Dc.Oe) != null ? a : null
            }
        }
    });
    var at = function() {
        sM.apply(this, arguments)
    };
    _.R(at, sM);
    at.prototype.notify = function() {
        tM(this, null)
    };
    var AM = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        BM = function(a, b) {
            b = b === void 0 ? !1 : b;
            Cq.call(this);
            var c = this;
            a = a.map(function(d) {
                return d.promise.then(function(e) {
                    if (b || e != null) return e;
                    throw e;
                }, function(e) {
                    c.ub = !0;
                    c.Ne = e;
                    c.Vd.reject(e);
                    return null
                })
            });
            _.x(_.B.Promise, "any").call(_.B.Promise, a).then(function(d) {
                c.ub || tM(c, d)
            }, function() {
                c.ub || tM(c, null)
            })
        };
    _.R(BM, Cq);
    var CM = function() {
        _.V.apply(this, arguments);
        this.g = [];
        this.l = [];
        this.B = []
    };
    _.R(CM, _.V);
    var DM = function(a, b, c) {
        a.l.push({
            uc: c === void 0 ? !1 : c,
            Kg: b
        })
    };
    CM.prototype.uc = function(a) {
        var b = _.x(this.l, "find").call(this.l, function(c) {
            return c.Kg === a
        });
        b && (b.uc = !0)
    };
    CM.prototype.o = function() {
        this.g.length = 0;
        this.B.length = 0;
        this.l.length = 0;
        _.V.prototype.o.call(this)
    };
    var EM = function(a, b) {
        _.V.call(this);
        this.id = a;
        this.timeoutMs = b;
        this.started = !1;
        this.B = new CM;
        _.Gr(this, this.B)
    };
    _.R(EM, _.V);
    EM.prototype.start = function() {
        var a = this,
            b, c;
        return _.vf(function(d) {
            if (d.g == 1) {
                if (a.started) return d.return();
                a.started = !0;
                d.l = 2;
                return d.yield($h(a.B.l, (b = a.Eb) != null ? b : a.timeoutMs), 4)
            }
            if (d.g != 2) {
                if (!a.L) {
                    for (var e = 0, f = _.A(a.B.B), h = f.next(); !h.done; h = f.next()) {
                        if (!h.value.ah()) throw Error("missing input: " + a.id + "/" + e);
                        ++e
                    }
                    a.g()
                }
                d.g = 0;
                d.l = 0
            } else {
                c = xf(d);
                if (a.L) return d.return();
                c instanceof qM ? a.J(c) : c instanceof Error && (a.ha ? a.ha(a.id, c) : a.H(c), a.l(c));
                d.g = 0
            }
        })
    };
    var W = function(a, b) {
            b = b === void 0 ? new Cq : b;
            a.B.g.push(b);
            return b
        },
        FM = function(a) {
            var b = b === void 0 ? new vM : b;
            a.B.g.push(b);
            return b
        },
        GM = function(a, b) {
            b = b === void 0 ? new at : b;
            a.B.g.push(b);
            return b
        },
        X = function(a, b) {
            DM(a.B, b);
            b = new xM(b);
            a.B.B.push(b);
            return b
        },
        HM = function(a, b) {
            DM(a.B, b);
            return new yM(b)
        },
        IM = function(a, b) {
            DM(a.B, b, !0);
            return new yM(b)
        },
        JM = function(a, b) {
            DM(a.B, b)
        },
        KM = function(a, b) {
            b = new BM(b);
            DM(a.B, b);
            b = new xM(b);
            a.B.B.push(b);
            return b
        };
    EM.prototype.J = function() {};
    EM.prototype.l = function(a) {
        if (this.B.g.length) {
            a = new qM(a.message);
            for (var b = _.A(this.B.g), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.Wd) {
                    var d = a;
                    c.ub = !0;
                    c.Ne = d;
                    c.Vd.reject(d)
                }
        }
    };
    var Ov = function(a, b) {
        a.Eb = b;
        return a
    };
    var LM = function(a, b, c, d) {
        EM.call(this, a);
        this.f = b;
        this.F = d;
        a = {};
        c = _.A(_.x(Object, "entries").call(Object, c));
        for (b = c.next(); !b.done; b = c.next()) d = _.A(b.value), b = d.next().value, (d = d.next().value) && (a[b] = HM(this, d));
        this.A = a
    };
    _.R(LM, EM);
    LM.prototype.g = function() {
        for (var a = this.f, b = a.apply, c = {}, d = _.A(_.x(Object, "entries").call(Object, this.A)), e = d.next(); !e.done; e = d.next()) {
            var f = _.A(e.value);
            e = f.next().value;
            f = f.next().value;
            c[e] = f.value
        }
        a = b.call(a, this, [c].concat(_.aj(this.F)));
        this.j(a)
    };
    LM.prototype.J = function(a) {
        this.l(a)
    };
    LM.prototype.H = function() {};
    var Xr = function(a, b) {
            MM(a);
            JM(a, b);
            return a
        },
        Nv = function(a, b) {
            MM(a);
            a.B.uc(b);
            return a
        },
        MM = function(a) {
            if (a.started) throw Error("Invalid operation: producer has already started");
        };
    var bi = function(a, b, c, d, e) {
        LM.call(this, a, b, c, e);
        this.Ta = d;
        this.output = W(this, new Cq);
        this.complete = new at
    };
    _.R(bi, LM);
    bi.prototype.j = function(a) {
        var b = this;
        a.then(function(c) {
            tM(b.output, c);
            b.complete.notify()
        }, function(c) {
            b.Ta ? tM(b.output, b.Ta(c)) : b.output.wb(new qM("output error: " + c.message));
            b.complete.notify()
        })
    };
    bi.prototype.l = function(a) {
        this.Ta ? (tM(this.output, this.Ta(a)), this.complete.notify()) : LM.prototype.l.call(this, a)
    };
    var ei = function(a, b, c, d, e, f) {
        LM.call(this, a, b, c, f);
        this.Ta = e;
        this.finished = new at;
        a = _.x(Object, "keys").call(Object, d);
        a = _.A(a);
        for (b = a.next(); !b.done; b = a.next()) this[b.value] = W(this)
    };
    _.R(ei, LM);
    ei.prototype.j = function(a) {
        a = _.A(_.x(Object, "entries").call(Object, a));
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = _.A(b.value);
            b = c.next().value;
            c = c.next().value;
            c instanceof Error ? this[b].wb(c) : tM(this[b], c)
        }
        this.finished.notify()
    };
    ei.prototype.l = function(a) {
        this.Ta ? this.j(this.Ta(a)) : LM.prototype.l.call(this, a)
    };
    var NM = function(a) {
        this.g = a === void 0 ? function() {} : a
    };
    NM.prototype.l = function(a, b) {
        var c = fi.apply(null, [a, b].concat(_.aj(_.xa.apply(2, arguments))));
        c.ha = this.g;
        return c
    };
    NM.prototype.o = function(a, b) {
        var c = ci.apply(null, [a, b].concat(_.aj(_.xa.apply(2, arguments))));
        c.ha = this.g;
        return c
    };
    var jk = function(a) {
        a = a === void 0 ? new NM : a;
        _.V.call(this);
        this.H = a;
        this.F = [];
        this.I = [];
        this.ha = {};
        this.J = [];
        this.A = new _.Oh;
        this.j = {}
    };
    _.R(jk, _.V);
    var J = function(a, b) {
            _.Gr(a, b);
            a.F.push(b);
            return b
        },
        Ik = function(a, b) {
            b = _.A(b);
            for (var c = b.next(); !c.done; c = b.next()) J(a, c.value)
        };
    jk.prototype.g = function(a, b) {
        var c = this.H.l.apply(this.H, [a, b].concat(_.aj(_.xa.apply(2, arguments))));
        return J(this, c)
    };
    jk.prototype.l = function(a, b) {
        var c = this.H.o.apply(this.H, [a, b].concat(_.aj(_.xa.apply(2, arguments))));
        return J(this, c)
    };
    var ow = function(a, b) {
            a.I.push(b);
            _.Gr(a, b);
            return b
        },
        Dt = function(a) {
            var b, c, d, e, f, h, k, l, m, n, p, q;
            return _.vf(function(t) {
                switch (t.g) {
                    case 1:
                        if (!a.J.length) {
                            t.g = 2;
                            break
                        }
                        return t.yield(_.B.Promise.all(a.J.map(function(w) {
                            return w.A.promise
                        })), 2);
                    case 2:
                        b = _.A(a.F);
                        for (c = b.next(); !c.done; c = b.next()) d = c.value, d.start();
                        e = _.A(a.I);
                        for (f = e.next(); !f.done; f = e.next()) h = f.value, Dt(h);
                        if (!a.j) {
                            t.g = 4;
                            break
                        }
                        k = _.x(Object, "keys").call(Object, a.j);
                        if (!k.length) {
                            t.g = 4;
                            break
                        }
                        return t.yield(_.B.Promise.all(_.x(Object, "values").call(Object, a.j).map(function(w) {
                            return w.promise
                        })), 6);
                    case 6:
                        for (l = t.o, m = 0, n = _.A(k), p = n.next(); !p.done; p = n.next()) q = p.value, a.ha[q] = l[m++];
                    case 4:
                        return a.A.resolve(a.ha), t.return(a.A.promise)
                }
            })
        };
    jk.prototype.run = function() {
        Dt(this)
    };
    jk.prototype.o = function() {
        _.V.prototype.o.call(this);
        this.F.length = 0;
        this.I.length = 0;
        this.J.length = 0
    };
    var OM = function(a) {
        this.D = _.D(a)
    };
    _.R(OM, _.E);
    OM.Z = [1];
    var PM = [0, zA, NB];
    var QM = function(a) {
        this.D = _.D(a)
    };
    _.R(QM, _.E);
    QM.Z = [1, 2];
    QM.prototype.g = ff([0, zA, NB, zA, PM]);
    var jr = 728 * 1.38;
    var SM, RM;
    SM = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new RM;
        this.sideRailProcessedFixedElements = new _.B.Set;
        this.sideRailAvailableSpace = new _.B.Map;
        this.sideRailPlasParam = new _.B.Map;
        this.o = [];
        this.g = null
    };
    _.Wi = function(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.B.Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.B.Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.B.Map)) : a.google_reactive_ads_global_state = new SM;
        return a.google_reactive_ads_global_state
    };
    RM = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var WM, YM, UM;
    _.TM = function(a) {
        this.g = _.Wi(a).floatingAdsStacking
    };
    _.VM = function(a, b) {
        return new UM(a, b)
    };
    WM = function(a) {
        a = _.TC(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    _.XM = function(a, b) {
        a.g.maxZIndexListeners.push(b);
        b(WM(a))
    };
    YM = function(a) {
        var b = WM(a);
        _.$y(a.g.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    UM = function(a, b) {
        this.o = a;
        this.l = b;
        this.g = null
    };
    _.ZM = function(a) {
        if (a.g == null) {
            var b = a.o,
                c = a.l,
                d = b.g.nextRestrictionId++;
            b.g.maxZIndexRestrictions[d] = c;
            YM(b);
            a.g = d
        }
    };
    _.$M = function(a) {
        if (a.g != null) {
            var b = a.o;
            delete b.g.maxZIndexRestrictions[a.g];
            YM(b);
            a.g = null
        }
    };
    var or, aN;
    _.ui = function(a, b) {
        b = b === void 0 ? {} : b;
        this.qa = a;
        this.Ja = b
    };
    _.bN = function(a, b) {
        var c = si(a.qa.document, b);
        if (c) {
            var d;
            if (!(d = aN(a, c, b))) a: {
                d = a.qa.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    var e = aN(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    };
    or = function(a, b) {
        b = _.A(b);
        for (var c = b.next(); !c.done; c = b.next())
            if (c = _.bN(a, c.value)) return c;
        return null
    };
    aN = function(a, b, c) {
        if (xD(b, "position") !== "fixed") return null;
        var d = b.getAttribute("class") === "GoogleActiveViewInnerContainer" || _.Lm(_.CD, b).width <= 1 && _.Lm(_.CD, b).height <= 1 || a.Ja.sm && !a.Ja.sm(b) ? !0 : !1;
        a.Ja.tj && a.Ja.tj(b, c, d);
        return d ? null : b
    };
    var nr = 90 * 1.38;
    var Bi = function(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            var b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return b === "__storage_test__"
        } catch (c) {
            return !1
        }
    };
    var cN, dN, eN;
    cN = _.Zx(["* { pointer-events: none; }"]);
    dN = function(a, b) {
        var c = _.Nf("STYLE", a);
        c.textContent = _.ez(new _.dz(cN[0], cz));
        a == null || a.head.appendChild(c);
        setTimeout(function() {
            a == null || a.head.removeChild(c)
        }, b)
    };
    _.fN = function(a, b, c) {
        if (!a.body) return null;
        var d = new eN;
        d.apply(a, b);
        return function() {
            var e = c || 0;
            e > 0 && dN(b.document, e);
            _.uD(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.B,
                top: d.L
            });
            b.scrollTo(0, d.o)
        }
    };
    eN = function() {
        this.g = this.L = this.B = this.l = null;
        this.o = 0
    };
    eN.prototype.apply = function(a, b) {
        this.l = a.body.style.overflow;
        this.B = a.body.style.position;
        this.L = a.body.style.top;
        this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.o = _.pi(b);
        _.uD(a.body, "top", -this.o + "px")
    };
    var yp = function(a, b) {
        this.g = a;
        this.o = b === void 0 ? 0 : b
    };
    yp.prototype.send = function(a, b) {
        var c = a.eo,
            d = this.o++;
        b = _.ul(b, 1, d);
        c.call(a, b)
    };
    _.Ux.Object.defineProperties(yp.prototype, {
        qe: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.g()
            }
        }
    });
    var bj = "body div footer header html main section".split(" ");
    var gN = function(a) {
        this.D = _.D(a)
    };
    _.R(gN, _.E);
    gN.prototype.Ij = function() {
        return _.Yj(this, 1)
    };
    gN.prototype.Hj = function() {
        return _.Yj(this, 2)
    };
    var Ug = function(a) {
            return _.Q(a, 5)
        },
        hN = function(a, b) {
            _.dk(a, 13, b)
        },
        So = function(a, b) {
            _.dk(a, 12, b)
        },
        Qo = function(a, b) {
            return _.le(a, 10, b, _.Hc)
        },
        Po = function(a, b) {
            return _.uq(a, 11, b)
        };
    gN.prototype.Dj = function() {
        return _.Yj(this, 11)
    };
    gN.Z = [10];
    var Dj = ["auto", "inherit", "100%"],
        Ej = Dj.concat(["none"]);
    var iN = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var jN = function(a, b, c, d, e, f) {
            this.l = _.oD(a);
            this.o = _.oD(b);
            this.B = c;
            this.g = _.oD(d);
            this.L = e;
            this.j = f
        },
        kN = function(a) {
            return JSON.stringify({
                windowCoords_t: a.l.top,
                windowCoords_r: a.l.right,
                windowCoords_b: a.l.bottom,
                windowCoords_l: a.l.left,
                frameCoords_t: a.o.top,
                frameCoords_r: a.o.right,
                frameCoords_b: a.o.bottom,
                frameCoords_l: a.o.left,
                styleZIndex: a.B,
                allowedExpansion_t: a.g.top,
                allowedExpansion_r: a.g.right,
                allowedExpansion_b: a.g.bottom,
                allowedExpansion_l: a.g.left,
                xInView: a.L,
                yInView: a.j
            })
        },
        lN = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.nD(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = zD(a);
            d = _.Lm(_.CD, a);
            var e = new pD(c.x, c.y, d.width, d.height);
            c = qD(e);
            d = String(xD(a, "zIndex"));
            var f = new _.nD(0, Infinity, Infinity, 0);
            for (var h = Wf(a), k = h.g.body, l = h.g.documentElement, m = GC(h.g); a = yD(a);)
                if ((!yz || a.clientHeight != 0 || a != k) && a != k && a != l && xD(a, "overflow") != "visible") {
                    var n = zD(a),
                        p = new _.Jm(a.clientLeft, a.clientTop);
                    n.x += p.x;
                    n.y += p.y;
                    f.top = Math.max(f.top, n.y);
                    f.right = Math.min(f.right, n.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, n.y + a.clientHeight);
                    f.left = Math.max(f.left, n.x)
                }
            a = m.scrollLeft;
            m = m.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, m);
            h = h.g;
            h = _.FC(h.parentWindow || h.defaultView || window);
            f.right = Math.min(f.right, a + h.width);
            f.bottom = Math.min(f.bottom, m + h.height);
            m = (f = (f = f.top >= 0 && f.left >= 0 && f.bottom > f.top && f.right > f.left ? f : null) ? new pD(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? rD(e, f) : null;
            h = a = 0;
            m && !(new _.Nm(m.width, m.height)).isEmpty() && (a = m.width / e.width, h = m.height / e.height);
            m = new _.nD(0, 0, 0, 0);
            if (k = f)(e = rD(e, f)) ? (l = qD(f), n = qD(e), k = n.right != l.left && l.right != n.left, l = n.bottom != l.top && l.bottom != n.top, k = (e.width != 0 || k) && (e.height != 0 || l)) : k = !1;
            k && (m = new _.nD(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new jN(b, c, d, m, a, h)
        };
    var mN = function(a) {
        this.L = a;
        this.B = null;
        this.F = this.status = 0;
        this.o = null;
        this.Ob = "sfchannel" + a
    };
    mN.prototype.jh = function() {
        return this.F == 2
    };
    var nN = function(a) {
        this.g = a
    };
    nN.prototype.getValue = function(a, b) {
        return this.g[a] == null || this.g[a][b] == null ? null : this.g[a][b]
    };
    var oN = function(a, b) {
        this.Af = a;
        this.Bf = b;
        this.o = this.g = !1
    };
    var pN = function(a, b, c, d, e, f, h, k) {
        k = k === void 0 ? [] : k;
        this.g = a;
        this.o = b;
        this.l = c;
        this.permissions = d;
        this.metadata = e;
        this.B = f;
        this.Ae = h;
        this.hostpageLibraryTokens = k;
        this.T = ""
    };
    var qN = function(a, b) {
        this.o = a;
        this.T = b
    };
    qN.prototype.g = function(a) {
        this.T && a && (a.sentinel = this.T);
        return JSON.stringify(a)
    };
    var rN = function(a, b, c) {
        qN.call(this, a, c === void 0 ? "" : c);
        this.version = b
    };
    _.R(rN, qN);
    rN.prototype.g = function() {
        return qN.prototype.g.call(this, {
            uid: this.o,
            version: this.version
        })
    };
    var sN = function(a, b, c, d) {
        qN.call(this, a, d === void 0 ? "" : d);
        this.B = b;
        this.l = c
    };
    _.R(sN, qN);
    sN.prototype.g = function() {
        return qN.prototype.g.call(this, {
            uid: this.o,
            initialWidth: this.B,
            initialHeight: this.l
        })
    };
    var tN = function(a, b, c) {
        qN.call(this, a, c === void 0 ? "" : c);
        this.description = b
    };
    _.R(tN, qN);
    tN.prototype.g = function() {
        return qN.prototype.g.call(this, {
            uid: this.o,
            description: this.description
        })
    };
    var uN = function(a, b, c, d) {
        qN.call(this, a, d === void 0 ? "" : d);
        this.l = b;
        this.push = c
    };
    _.R(uN, qN);
    uN.prototype.g = function() {
        return qN.prototype.g.call(this, {
            uid: this.o,
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        })
    };
    var vN = function(a, b) {
        qN.call(this, a, b === void 0 ? "" : b)
    };
    _.R(vN, qN);
    vN.prototype.g = function() {
        return qN.prototype.g.call(this, {
            uid: this.o
        })
    };
    var wN = function(a, b, c) {
        qN.call(this, a, c === void 0 ? "" : c);
        this.B = b
    };
    _.R(wN, qN);
    wN.prototype.g = function() {
        var a = {
            uid: this.o,
            newGeometry: kN(this.B)
        };
        return qN.prototype.g.call(this, a)
    };
    var xN = function(a, b, c, d, e, f) {
        wN.call(this, a, c, f === void 0 ? "" : f);
        this.success = b;
        this.l = d;
        this.push = e
    };
    _.R(xN, wN);
    xN.prototype.g = function() {
        var a = {
            uid: this.o,
            success: this.success,
            newGeometry: kN(this.B),
            expand_t: this.l.top,
            expand_r: this.l.right,
            expand_b: this.l.bottom,
            expand_l: this.l.left,
            push: this.push
        };
        this.T && (a.sentinel = this.T);
        return JSON.stringify(a)
    };
    var yN = function(a, b, c, d) {
        qN.call(this, a, d === void 0 ? "" : d);
        this.width = b;
        this.height = c
    };
    _.R(yN, qN);
    yN.prototype.g = function() {
        return qN.prototype.g.call(this, {
            uid: this.o,
            width: this.width,
            height: this.height
        })
    };
    var Nj = function(a) {
        var b;
        if ((b = a.location) == null ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        jl(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var zN, CN, DN, BN;
    zN = function() {
        this.g = []
    };
    _.AN = function(a) {
        return a + "px"
    };
    CN = function(a, b, c, d, e) {
        a.g.push(new BN(b, c, d, e))
    };
    DN = function(a) {
        for (var b = a.g.length - 1; b >= 0; b--) {
            var c = a.g[b];
            c.o ? (c.l.style.removeProperty(c.g), c.l.style.setProperty(c.g, String(c.B), c.L)) : c.l.style[c.g] = c.B
        }
        a.g.length = 0
    };
    BN = function(a, b, c, d) {
        this.l = a;
        this.g = (this.o = !(d === void 0 || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
        this.B = this.o ? a.style.getPropertyValue(this.g) : a.style[this.g];
        this.L = this.o ? a.style.getPropertyPriority(this.g) : void 0;
        this.o ? (a.style.removeProperty(this.g), a.style.setProperty(this.g, String(c), d)) : a.style[this.g] = String(c)
    };
    var EN, FN;
    EN = function(a, b) {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    FN = function() {
        var a = window,
            b = _.Kf(a);
        b && EN({
            label: "2",
            type: 9,
            value: b
        }, a)
    };
    _.GN = function(a, b, c, d, e) {
        e = e === void 0 ? !1 : e;
        var f = d || window,
            h = typeof queueMicrotask !== "undefined";
        return function() {
            e && h && queueMicrotask(function() {
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            });
            var k = _.Kf(),
                l = 3;
            try {
                var m = b.apply(this, arguments)
            } catch (p) {
                l = 13;
                if (!c) throw p;
                c(a, p)
            } finally {
                if (f.google_measure_js_timing && k) {
                    var n = _.Kf() || 0;
                    EN(_.x(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: k,
                        duration: n - k,
                        type: l
                    }, e && h && {
                        taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                    }), f)
                }
            }
            return m
        }
    };
    var LN = function(a) {
        mN.call(this, a.uniqueId);
        var b = this;
        this.J = a.R;
        this.A = a.size === 1;
        this.U = new oN(a.permissions.Af && !this.A, a.permissions.Bf && !this.A);
        this.j = a.Qh;
        var c;
        this.Oa = (c = a.hostpageLibraryTokens) != null ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.Fa = c == "file:" ? "*" : c + "//" + d;
        this.Ya = !!a.Ae;
        this.ba = a.Hk ? "//" + a.Hk + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ua = a.tb ? "*" : "https:" + this.ba;
        this.ka = HN(a);
        this.l = new zN;
        IN(this, a);
        this.B = this.ia = lN(a.Qh);
        this.K = a.Xn || "1-0-40";
        var e;
        this.sa = (e = a.Nl) != null ? e : "";
        JN(this, a);
        this.I = _.GN(412, function() {
            return KN(b)
        }, a.Ib);
        this.Ma = -1;
        this.H = 0;
        var f = _.GN(415, function() {
            b.g && (b.g.name = "", a.lk && a.lk(), _.Of(b.g, "load", f))
        }, a.Ib);
        _.tf(this.g, "load", f);
        this.fh = _.GN(413, this.fh, a.Ib);
        this.Xh = _.GN(417, this.Xh, a.Ib);
        this.bi = _.GN(419, this.bi, a.Ib);
        this.Vg = _.GN(411, this.Vg, a.Ib);
        this.Eg = _.GN(409, this.Eg, a.Ib);
        this.ha = _.GN(410, this.ha, a.Ib);
        this.Hh = _.GN(416, this.Hh, a.Ib);
        this.o = new QL(this.Ob, this.g.contentWindow, this.ua, !1);
        SL(this.o, "init_done", (0, _.Cy)(this.fh, this));
        SL(this.o, "register_done", (0, _.Cy)(this.Xh, this));
        SL(this.o, "report_error", (0, _.Cy)(this.bi, this));
        SL(this.o, "expand_request", (0, _.Cy)(this.Vg, this));
        SL(this.o, "collapse_request", (0, _.Cy)(this.Eg, this));
        SL(this.o, "creative_geometry_update", (0, _.Cy)(this.ha, this));
        this.o.connect((0, _.Cy)(this.Hh, this))
    };
    _.R(LN, mN);
    var IN = function(a, b) {
            var c = b.Qh;
            var d = b.size;
            b = b.Wj;
            a.A ? (c.style.width = _.BD("100%", !0), c.style.height = _.BD("auto", !0)) : b || (c.style.width = _.BD(d.width, !0), c.style.height = _.BD(d.height, !0))
        },
        JN = function(a, b) {
            var c = b.tb;
            var d = b.content;
            var e = b.ye;
            var f = b.size;
            var h = b.ze === void 0 ? "3rd party ad content" : b.ze;
            var k = b.Df;
            var l = b.tg;
            var m = (b = b.Wj) || !c;
            d = b || !c ? d != null ? d : "" : "";
            var n = {
                shared: {
                    sf_ver: a.K,
                    ck_on: sL() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = a.K + ";" + d.length + ";" + d;
            n = new pN(a.L, a.Fa, a.ia, a.U, new nN(n), a.A, a.Ya, a.Oa);
            var p = {};
            p.uid = n.g;
            p.hostPeerName = n.o;
            p.initialGeometry = kN(n.l);
            var q = n.permissions;
            q = JSON.stringify({
                expandByOverlay: q.Af,
                expandByPush: q.Bf,
                readCookie: q.g,
                writeCookie: q.o
            });
            p = (p.permissions = q, p.metadata = JSON.stringify(n.metadata.g), p.reportCreativeGeometry = n.B, p.isDifferentSourceWindow = n.Ae, p.goog_safeframe_hlt = OL(n.hostpageLibraryTokens), p);
            n.T && (p.sentinel = n.T);
            n = JSON.stringify(p);
            p = f.width;
            f = f.height;
            a.A && (f = p = 0);
            q = {};
            e = (q.id = e, q.title = h, q.name = d + n, q.scrolling = "no", q.marginWidth = "0", q.marginHeight = "0", q.width = String(p), q.height = String(f), q["data-is-safeframe"] = "true", q);
            m && (h = a.sa, m = a.ba, f = a.K, (d = h) && (d = "?" + d), m = (m === void 0 ? "//tpc.googlesyndication.com" : m) + ("/safeframe/" + f + "/html/container.html" + d), (f = Nj(_.HC(_.DC(a.j)))) && (m += (h ? "&" : "?") + "n=" + f), e.src = "https:" + m);
            a.ka !== null && (e.sandbox = a.ka);
            k && (e.allow = k);
            l && (e.credentialless = "true");
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            b ? (a.j.removeChild(c), ij(c, e), a.g = c) : c ? (a.g = c, fj(a.g, e)) : (c = _.Nf("IFRAME"), ij(c, e), a.g = c);
            a.A && (a.g.style.minWidth = "100%");
            a.j.appendChild(a.g)
        };
    _.r = LN.prototype;
    _.r.Hh = function() {
        _.tf(window, "resize", this.I);
        _.tf(window, "scroll", this.I)
    };
    _.r.fh = function(a) {
        try {
            if (this.status != 0) throw Error("Container already initialized");
            if (typeof a !== "string") throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Ij(b.uid) || typeof b.version !== "string") throw Error("Cannot parse JSON message");
            var c = new rN(b.uid, b.version, b.sentinel);
            if (this.L !== c.o || this.K !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            (d = this.J) == null || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.r.Xh = function(a) {
        try {
            if (this.status != 1) throw Error("Container not initialized");
            if (typeof a !== "string") throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Ij(b.uid) || typeof b.initialWidth !== "number" || typeof b.initialHeight !== "number") throw Error("Cannot parse JSON message");
            if (this.L !== (new sN(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).o) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            (c = this.J) == null || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.r.bi = function(a) {
        try {
            if (typeof a !== "string") throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Ij(b.uid) || typeof b.description !== "string") throw Error("Cannot parse JSON message");
            var c = new tN(b.uid, b.description, b.sentinel);
            if (this.L !== c.o) throw Error("Wrong source container");
            var d;
            (d = this.J) == null || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            (e = this.J) == null || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    _.r.Vg = function(a) {
        try {
            if (this.status != 2) throw Error("Container is not registered");
            if (this.F != 0) throw Error("Container is not collapsed");
            if (typeof a !== "string") throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Ij(b.uid) || typeof b.expand_t !== "number" || typeof b.expand_r !== "number" || typeof b.expand_b !== "number" || typeof b.expand_l !== "number" || typeof b.push !== "boolean") throw Error("Cannot parse JSON message");
            var c = new uN(b.uid, new _.nD(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.L !== c.o) throw Error("Wrong source container");
            if (!(c.l.top >= 0 && c.l.left >= 0 && c.l.bottom >= 0 && c.l.right >= 0)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.U.Bf || !c.push && this.U.Af) {
                var e = c.l,
                    f = c.push,
                    h = this.B = lN(this.g);
                if (e.top <= h.g.top && e.right <= h.g.right && e.bottom <= h.g.bottom && e.left <= h.g.left) {
                    if (!f)
                        for (var k = this.g.parentNode; k && k.style; k = k.parentNode) CN(this.l, k, "overflowX", "visible", "important"), CN(this.l, k, "overflowY", "visible", "important");
                    var l = qD(new pD(0, 0, this.B.o.getWidth(), this.B.o.getHeight()));
                    _.La(e) ? (l.top -= e.top, l.right += e.right, l.bottom += e.bottom, l.left -= e.left) : (l.top -= e, l.right += Number(void 0), l.bottom += Number(void 0), l.left -= Number(void 0));
                    CN(this.l, this.j, "position", "relative");
                    CN(this.l, this.g, "position", "absolute");
                    if (f) {
                        var m = this.l,
                            n = this.j,
                            p = l.getWidth();
                        CN(m, n, "width", _.AN(p));
                        var q = this.l,
                            t = this.j,
                            w = l.getHeight();
                        CN(q, t, "height", _.AN(w))
                    } else CN(this.l, this.g, "zIndex", "10000");
                    var v = this.l,
                        y = this.g,
                        z = l.getWidth();
                    CN(v, y, "width", _.AN(z));
                    var G = this.l,
                        C = this.g,
                        H = l.getHeight();
                    CN(G, C, "height", _.AN(H));
                    CN(this.l, this.g, "left", _.AN(l.left));
                    CN(this.l, this.g, "top", _.AN(l.top));
                    this.F = 2;
                    this.B = lN(this.g);
                    d = !0
                } else d = !1
            }
            a = d;
            this.o.send("expand_response", (new xN(this.L, a, this.B, c.l, c.push)).g());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (S) {
            var L;
            (L = this.J) == null || L.error("Invalid EXPAND_REQUEST message. Reason: " + S.message)
        }
    };
    _.r.Eg = function(a) {
        try {
            if (this.status != 2) throw Error("Container is not registered");
            if (!this.jh()) throw Error("Container is not expanded");
            if (typeof a !== "string") throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Ij(b.uid)) throw Error("Cannot parse JSON message");
            if (this.L !== (new vN(b.uid, b.sentinel)).o) throw Error("Wrong source container");
            DN(this.l);
            this.F = 0;
            this.g && (this.B = lN(this.g));
            this.o.send("collapse_response", (new wN(this.L, this.B)).g())
        } catch (d) {
            var c;
            (c = this.J) == null || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var KN = function(a) {
        if (a.status == 1 || a.status == 2) switch (a.H) {
            case 0:
                MN(a);
                a.Ma = window.setTimeout((0, _.Cy)(a.fa, a), 1E3);
                a.H = 1;
                break;
            case 1:
                a.H = 2;
                break;
            case 2:
                a.H = 2
        }
    };
    LN.prototype.ha = function(a) {
        try {
            if (typeof a !== "string") throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.La(b) || !Ij(b.uid) || typeof b.width !== "number" || typeof b.height !== "number" || b.sentinel && typeof b.sentinel !== "string") throw Error("Cannot parse JSON message");
            var c = new yN(b.uid, b.width, b.height, b.sentinel);
            if (this.L !== c.o) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.A) d !== this.g.height && (this.g.height = d, KN(this));
            else {
                var e;
                (e = this.J) == null || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (h) {
            var f;
            (f = this.J) == null || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + h.message)
        }
    };
    LN.prototype.fa = function() {
        if (this.status == 1 || this.status == 2) switch (this.H) {
            case 1:
                this.H = 0;
                break;
            case 2:
                MN(this), this.Ma = window.setTimeout((0, _.Cy)(this.fa, this), 1E3), this.H = 1
        }
    };
    var MN = function(a) {
            a.B = lN(a.g);
            a.o.send("geometry_update", (new wN(a.L, a.B)).g())
        },
        HN = function(a) {
            var b = null;
            a.Kk && (b = a.Kk);
            return b == null ? null : b.join(" ")
        },
        NN = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        ON = ["allow-top-navigation"],
        PN = ["allow-same-origin"],
        QN = $C([].concat(_.aj(NN), _.aj(ON)));
    $C([].concat(_.aj(NN), _.aj(PN)));
    $C([].concat(_.aj(NN), _.aj(ON), _.aj(PN)));
    var RN = _.Zx(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        Mj = {
            fn: function(a) {
                if (typeof a.version !== "string") throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if (typeof a.ng !== "string") throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.ng)) throw new RangeError("Invalid subdomain: " + a.ng);
                return jf("https://" + a.ng + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            uq: function(a) {
                return _.kf(RN, a)
            }
        };
    var zk = {
        qf: [],
        yg: 0,
        vf: [],
        Nk: !1
    };
    var SN = function() {};
    SN.g = function() {
        throw Error("Must be overridden");
    };
    var Pj = function() {
        this.g = 0
    };
    _.R(Pj, SN);
    Pj.gd = void 0;
    Pj.g = function() {
        return Pj.gd ? Pj.gd : Pj.gd = new Pj
    };
    var TN = function() {
            this.cache = {}
        },
        ak = function() {
            UN || (UN = new TN);
            return UN
        },
        ck = function(a) {
            var b = Pc(_.Sz(a, 3));
            if (!b) return 3;
            if (Xj(a, 2) === void 0) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    TN.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            xd: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (h) {
            var d;
            Rj(6, a, (d = h) == null ? void 0 : d.message);
            return {
                xd: null,
                success: !1
            }
        }
        if (!c) return {
            xd: null,
            success: !0
        };
        try {
            var e = YB(c);
            this.cache[a] = e;
            return {
                xd: e,
                success: !0
            }
        } catch (h) {
            var f;
            Rj(5, a, (f = h) == null ? void 0 : f.message);
            return {
                xd: null,
                success: !1
            }
        }
    };
    TN.prototype.set = function(a, b) {
        var c = Xj(a, 1),
            d = "_GESPSK-" + c;
        XB(a);
        try {
            b.setItem(d, cl(a))
        } catch (f) {
            var e;
            Rj(7, c, (e = f) == null ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    TN.prototype.remove = function(a, b) {
        a = Xj(a, 1);
        try {
            b.removeItem("_GESPSK-" + a), delete this.cache[a]
        } catch (d) {
            var c;
            Rj(8, a, (c = d) == null ? void 0 : c.message)
        }
    };
    var UN = null;
    var VN = function(a, b) {
        EM.call(this, a);
        this.id = a;
        this.Ta = b
    };
    _.R(VN, EM);
    VN.prototype.H = function(a) {
        this.Ta(this.id, a)
    };
    var lk = function(a, b, c, d) {
        VN.call(this, 1041, d);
        this.storage = b;
        this.A = X(this, a);
        c && (this.j = HM(this, c))
    };
    _.R(lk, VN);
    lk.prototype.g = function() {
        var a = this.A.value,
            b, c, d = (c = this.storage) != null ? c : (b = this.j) == null ? void 0 : b.value;
        d && ak().set(a, d) && _.Yj(a, 2) && Rj(27, Xj(a, 1))
    };
    var nk = function(a, b) {
        VN.call(this, 1048, b);
        this.j = W(this);
        this.A = W(this);
        this.F = X(this, a)
    };
    _.R(nk, VN);
    nk.prototype.g = function() {
        var a = this.F.value,
            b = function(c) {
                var d = {};
                Rj(c, Xj(a, 1), null, (d.tic = String(Math.round((Date.now() - Pc(_.Sz(a, 3))) / 6E4)), d))
            };
        switch (ck(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                this.A.G(a);
                break;
            case 2:
                b(26);
                this.j.G(a);
                break;
            case 3:
                Rj(9, Xj(a, 1));
                this.j.G(a);
                break;
            case 4:
                b(23), this.j.G(a)
        }
    };
    var WN = function(a, b) {
        VN.call(this, 1094, b);
        this.j = GM(this);
        this.A = X(this, a)
    };
    _.R(WN, VN);
    WN.prototype.g = function() {
        var a = this.A.value;
        if (a) {
            if (a !== void 0)
                for (var b = _.A(_.x(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, _.x(c, "startsWith").call(c, "_GESPSK")) try {
                        a.removeItem(c)
                    } catch (d) {}
            UN = new TN;
            this.j.notify()
        }
    };
    var Hk = function(a, b, c) {
        VN.call(this, 1049, c);
        this.storage = b;
        JM(this, a)
    };
    _.R(Hk, VN);
    Hk.prototype.g = function() {
        for (var a = _.A(Tj(this.storage)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = ak().get(b, this.storage).xd;
            if (c) {
                var d = ck(c);
                if (d === 2 || d === 3) ak().remove(c, this.storage), Rj(40, b)
            }
        }
    };
    var kk = function(a, b, c) {
        VN.call(this, 1027, c);
        this.rf = a;
        this.storage = b;
        this.j = W(this);
        this.A = W(this)
    };
    _.R(kk, VN);
    kk.prototype.g = function() {
        var a = ak().get(this.rf, this.storage).xd;
        a || (a = XB(WB(this.rf)), this.A.G(a.wb(fk(100))));
        this.j.G(a)
    };
    var Lk = function(a, b) {
        VN.call(this, 1036, b);
        this.j = W(this);
        this.A = X(this, a)
    };
    _.R(Lk, VN);
    Lk.prototype.g = function() {
        var a = this.A.value;
        ck(a) !== 0 && this.j.G(a)
    };
    var uk = function(a, b, c) {
        VN.call(this, 1046, c);
        this.output = GM(this);
        this.j = W(this);
        this.A = X(this, b);
        JM(this, a)
    };
    _.R(uk, VN);
    uk.prototype.g = function() {
        this.j.G(this.A.value)
    };
    var ok = function(a, b, c) {
        VN.call(this, 1047, c);
        this.collectorFunction = a;
        this.j = W(this);
        this.A = W(this);
        this.F = W(this);
        this.I = X(this, b)
    };
    _.R(ok, VN);
    ok.prototype.g = function() {
        var a = this,
            b = this.I.value,
            c = Xj(b, 1);
        Rj(18, c);
        try {
            var d = _.Jf();
            this.collectorFunction().then(function(e) {
                Rj(29, c, null, {
                    delta: String(_.Jf() - d)
                });
                a.j.G(_.uq(b, 2, e));
                a.F.Cb(e)
            }).catch(function(e) {
                Rj(28, c, ik(e));
                a.A.G(b.wb(fk(106)))
            })
        } catch (e) {
            Rj(1, c, ik(e)), this.A.G(b.wb(fk(107)))
        }
    };
    var mk = function(a, b) {
        VN.call(this, 1028, b);
        this.j = W(this);
        this.A = X(this, a)
    };
    _.R(mk, VN);
    mk.prototype.g = function() {
        var a = this.A.value,
            b = Xj(a, 1);
        Pc(_.Sz(a, 3)) != null || Rj(35, b);
        this.j.G(a)
    };
    var sk = function(a, b, c, d) {
        VN.call(this, 1050, d);
        this.F = c;
        this.j = W(this);
        this.A = X(this, a);
        this.I = HM(this, b)
    };
    _.R(sk, VN);
    sk.prototype.g = function() {
        var a = this.A.value,
            b = Xj(a, 1),
            c = this.I.value;
        if (c == null) Rj(41, b), a.wb(fk(111)), this.j.G(a);
        else if (typeof c !== "string") Rj(21, b), this.j.G(a.wb(fk(113)));
        else {
            if (c.length > this.F) {
                var d = {};
                Rj(12, b, null, (d.sl = String(c.length), d));
                b = a.wb(fk(108));
                _.ek(b, 2)
            } else c.length || Rj(20, b), _.ek(a, 10);
            this.j.G(a)
        }
    };
    var tk = function(a) {
        VN.call(this, 1046, a);
        this.output = GM(this)
    };
    _.R(tk, VN);
    tk.prototype.g = function() {
        var a = this;
        Sj().then(function() {
            a.output.notify()
        })
    };
    var XN = function(a, b, c, d) {
        VN.call(this, 1059, d);
        this.I = b;
        this.F = c;
        this.j = W(this);
        this.K = X(this, a);
        this.A = HM(this, c)
    };
    _.R(XN, VN);
    XN.prototype.g = function() {
        var a = this.A.value;
        if (a) {
            var b = this.K.value,
                c = b.id,
                d = b.collectorFunction,
                e;
            b = (e = b.networkCode) != null ? e : c;
            c = {};
            Rj(42, b, null, (c.ea = String(Number(this.I)), c));
            this.j.Ra(vk(b, d, a, this.F, this.Ta))
        }
    };
    var YN = function(a, b, c) {
        c = c === void 0 ? zk : c;
        VN.call(this, 1057, b);
        this.j = a;
        this.A = c;
        this.F = W(this);
        this.I = W(this)
    };
    _.R(YN, VN);
    YN.prototype.g = function() {
        if (this.j)
            if (typeof this.j !== "object") Rj(46, "UNKNOWN_COLLECTOR_ID"), ZN(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.j.id,
                    b = this.j.networkCode;
                a && b && (delete this.j.id, Rj(47, a + ";" + b));
                a = b != null ? b : a;
                typeof a !== "string" ? (b = {}, Rj(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), ZN(this, "INVALID_COLLECTOR_ID", 102)) : typeof this.j.collectorFunction !== "function" ? (Rj(14, a), ZN(this, a, 105)) : _.x(this.A.vf, "includes").call(this.A.vf, a) ? (Rj(22, a), ZN(this, a, 104)) : this.I.G(this.j)
            }
        else Rj(39, "UNKNOWN_COLLECTOR_ID"), ZN(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var ZN = function(a, b, c) {
        a.F.G(WB(b).wb(fk(c)))
    };
    var Fk = function(a, b, c, d, e) {
        var f = document;
        f = f === void 0 ? document : f;
        e = e === void 0 ? zk : e;
        this.o = b;
        this.B = c;
        this.da = f;
        this.J = d;
        this.g = e;
        this.H = [];
        this.j = [];
        this.L = [];
        this.l = 0;
        a = _.A(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    _.r = Fk.prototype;
    _.r.push = function(a) {
        var b = this;
        this.B || this.J();
        var c = function(f, h) {
            return void b.Ta(f, h)
        };
        a = new YN(a, c, this.g);
        var d = new lk(a.F, void 0, this.o, c);
        c = new XN(a.I, this.B, this.o, c, this.g);
        var e = new jk;
        Ik(e, [a, d, c]);
        e.run();
        a = c.j.promise;
        this.H.push(a);
        d = _.A(this.j);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    _.r.addOnSignalResolveCallback = function(a) {
        this.j.push(a);
        for (var b = _.A(this.H), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    _.r.addErrorHandler = function(a) {
        this.L.push(a)
    };
    _.r.clearAllCache = function() {
        var a = this,
            b = this.da.currentScript instanceof HTMLScriptElement ? this.da.currentScript.src : "";
        if (this.l === 1) {
            var c = {};
            Rj(49, "", null, (c.url = b, c))
        } else if (_.x(this.g.qf, "includes").call(this.g.qf, String(_.ph(b != null ? b : "")))) c = {}, Rj(48, "", null, (c.url = b, c));
        else {
            var d = new jk;
            c = new WN(this.o, function(e, f) {
                return void a.Ta(e, f)
            });
            J(d, c);
            d.run();
            this.l = 1;
            setTimeout(function() {
                a.l = 0
            }, this.g.yg * 1E3);
            d = {};
            Rj(43, "", null, (d.url = b, d));
            return c.j.promise
        }
    };
    _.r.Ta = function(a, b) {
        for (var c = _.A(this.L), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var Gk = function(a) {
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
    var Mk = function(a, b, c) {
        VN.call(this, 1035, c);
        this.A = b;
        this.j = W(this);
        this.F = X(this, a)
    };
    _.R(Mk, VN);
    Mk.prototype.g = function() {
        var a = this,
            b = this.F.value,
            c = Xj(b, 1),
            d = this.A.toString(),
            e = {};
        Rj(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        hb(f, this.A);
        var h = function() {
            var k = {};
            Rj(31, c, null, (k.url = d, k));
            a.j.G(b.wb(fk(109)));
            _.Of(f, "error", h)
        };
        document.head.appendChild(f);
        _.tf(f, "error", h)
    };
    var Kk = new _.B.Set;
    var Ok = function(a, b) {
        try {
            var c = _.Q(b, 6) === void 0 ? !0 : _.Q(b, 6),
                d, e, f = Bf(_.Uf(b, 2, 0)),
                h = _.u(b, 3);
            a: switch (_.Uf(b, 4, 0)) {
                case 1:
                    var k = "pt";
                    break a;
                case 2:
                    k = "cr";
                    break a;
                default:
                    k = ""
            }
            var l = new NA(f, h, k),
                m = (e = (d = _.wm(b, KA, 5)) == null ? void 0 : _.u(d, 1)) != null ? e : "";
            l.Ce = m;
            l.g = c;
            l.C = a;
            var n = l.build();
            Af(n)
        } catch (p) {}
    };
    var $N = function(a) {
        this.D = _.D(a)
    };
    _.R($N, _.E);
    $N.prototype.g = ff([0, tA, -3, wA]);
    var aO = [.05, .1, .2, .5],
        bO = [0, .5, 1],
        cO = function(a) {
            a = Bk(a);
            if (!a) return -1;
            try {
                var b = HL(a.document);
                var c = new _.Nm(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Nm(-12245933, -12245933)
            }
            return c.width == -12245933 || c.height == -12245933 ? -1 : c.width * c.height
        },
        dO = function(a, b) {
            return a <= 0 || b <= 0 ? [] : aO.map(function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        fO = function(a) {
            this.L = a.C;
            this.B = a.Yb;
            this.H = a.timer;
            this.l = null;
            this.g = a.Ib;
            this.o = eO(this);
            this.j = a.no || !1
        },
        gO = function() {
            var a;
            return !!window.IntersectionObserver && sx((a = window.performance) == null ? void 0 : a.now)
        };
    fO.prototype.getSlotId = function() {
        return this.l
    };
    var iO = function(a, b) {
            if (a.o) {
                if (a.l != null) {
                    try {
                        hO(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.g && a.g(c)
                    }
                    a.o && a.o.unobserve(a.B)
                }
                a.l = b;
                a.o.observe(a.B)
            }
        },
        eO = function(a) {
            if (!_.ca.IntersectionObserver) return null;
            var b = a.B.offsetWidth * a.B.offsetHeight,
                c = cO(a.L);
            b = [].concat(_.aj(bO), _.aj(dO(c, b)));
            Na(b);
            return new _.ca.IntersectionObserver(function(d) {
                try {
                    for (var e = cO(a.L), f = _.A(d), h = f.next(); !h.done; h = f.next()) {
                        var k = h.value,
                            l = Math.round(k.boundingClientRect.width * k.boundingClientRect.height),
                            m = Math.round(k.intersectionRect.width * k.intersectionRect.height),
                            n = Math.round(k.time);
                        if (_.x(Number, "isSafeInteger").call(Number, l) && _.x(Number, "isSafeInteger").call(Number, m) && _.x(Number, "isSafeInteger").call(Number, e) && _.x(Number, "isSafeInteger").call(Number, n)) a.j && hO(a, n, l, m, e, k.isIntersecting);
                        else {
                            var p = d = void 0;
                            (p = (d = a).g) == null || p.call(d, Error("invalid geometry: " + l + " | " + m + " | " + e + " | " + n))
                        }
                    }
                } catch (q) {
                    a.g && a.g(q)
                }
            }, {
                threshold: b
            })
        },
        hO = function(a, b, c, d, e, f) {
            if (a.l == null) throw Error("Not Attached.");
            var h = new $N;
            c = _.al(h, 1, c);
            d = _.al(c, 2, d);
            e = _.al(d, 3, e);
            b = _.al(e, 4, b);
            f = _.dk(b, 5, f);
            f = qb(f.g(), 4);
            tF(a.H, "1", 10, f, void 0, a.l)
        };
    var jO = function(a, b) {
            this.g = a;
            this.o = b
        },
        kO = function(a) {
            if (a.g.frames.google_ads_top_frame) return !0;
            var b = bD(a.g);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.data;
                c = c.ports;
                d.msgType === "__goog_top_url_req" && c.length && c[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.o
                })
            }, !1);
            return !0
        };
    var $k = function(a) {
        this.D = _.D(a)
    };
    _.R($k, _.E);
    var el = gf($k),
        bl = [1, 3];
    var Ag = {
        Yp: 0,
        Up: 1,
        Vp: 9,
        Rp: 2,
        Sp: 3,
        Xp: 5,
        Wp: 7,
        Tp: 10
    };
    var lO = _.Zx(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Vk = _.kf(lO);
    var lp = function(a) {
            var b = b === void 0 ? Qj(_.ca) : b;
            this.id = a;
            this.g = Math.random() < .001;
            this.lb = {
                pvsid: String(b)
            }
        },
        mO = function(a) {
            a = Bl(a);
            var b;
            Pl.set(a, ((b = Pl.get(a)) != null ? b : 0) + 1)
        },
        Ol = function() {
            return [].concat(_.aj(_.x(Pl, "values").call(Pl))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        np = function(a, b, c) {
            typeof c !== "string" && (c = String(c));
            /^\w+$/.test(b) && (c ? a.lb[b] = c : delete a.lb[b])
        },
        pp = function(a) {
            var b = 1;
            b = b === void 0 ? null : b;
            if (nO()) b = !0;
            else {
                var c = a.g;
                b && b >= 0 && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && AF(window, oO(a) || "", void 0, !0)
        },
        oO = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.Mn(a.lb, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        pO = function(a) {
            var b = [].concat(_.aj(_.x(Pl, "keys").call(Pl)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            b.length <= 3 ? np(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), np(a, "nw_id", b.join()))
        },
        mp = function(a, b) {
            np(a, "vrg", b.If);
            pO(a);
            np(a, "nslots", Ol().toString());
            b = ih();
            b.length && np(a, "eid", b.join());
            np(a, "pub_url", document.URL)
        },
        Xp = function(a, b, c) {
            c = c === void 0 ? .001 : c;
            if (c === void 0 || c < 0 || c > 1) c = .001;
            Math.random() < c && (a = new lp(a), b(a), pp(a))
        },
        Pl = new _.B.Map,
        nO = Wm(function() {
            return !!XC()
        });
    var El = function() {
        sF.call(this, _.I(Fl) || _.I(rK) ? 1 : 0, _.ca);
        this.o = 0;
        var a = _.I(Fl) || _.I(rK);
        _.ca.google_measure_js_timing = a || _.ca.google_measure_js_timing
    };
    _.R(El, sF);
    _.qO = function(a) {
        this.context = a
    };
    _.qO.prototype.Sb = function(a, b) {
        return Il(this.context, a, b)
    };
    _.qO.prototype.Ea = function(a, b) {
        return Cl(this.context, a, b)
    };
    _.qO.prototype.Qb = function(a, b) {
        Gl(this.context, a, b);
        return !1
    };
    _.qO.prototype.pd = ba(1);
    var rO = function() {
            this.id = "goog_" + rz++
        },
        sO = function(a) {
            _.V.call(this);
            this.context = a;
            this.l = new _.B.Map
        };
    _.R(sO, _.V);
    sO.prototype.o = function() {
        _.V.prototype.o.call(this);
        this.l.clear()
    };
    sO.prototype.listen = function(a, b) {
        var c = this;
        if (this.L) return function() {};
        var d = typeof a === "string" ? a : a.id,
            e, f, h = (f = (e = this.l.get(d)) == null ? void 0 : e.add(b)) != null ? f : new _.B.Set([b]);
        this.l.set(d, h);
        return function() {
            return void tO(c, a, b)
        }
    };
    var uO = function(a) {
            var b = Zw;
            var c = c === void 0 ? function() {
                return !0
            } : c;
            return new _.B.Promise(function(d) {
                var e = a.listen(b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        tO = function(a, b, c) {
            var d;
            return !((d = a.l.get(typeof b === "string" ? b : b.id)) == null || !d.delete(c))
        },
        gv = function(a, b, c, d) {
            var e, f, h, k, l, m, n, p;
            _.vf(function(q) {
                e = typeof b === "string" ? b : b.id;
                f = a.l.get(e);
                if ((h = f) == null || !h.size) return q.return();
                k = typeof window.CustomEvent === "function" ? new CustomEvent(e, {
                    detail: d,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var t = document.createEvent("CustomEvent");
                    t.initCustomEvent(e, !0, !0, d);
                    return t
                }();
                l = [];
                m = _.A(f);
                n = m.next();
                for (p = {}; !n.done; p = {
                        qh: void 0
                    }, n = m.next()) p.qh = n.value, l.push(new _.B.Promise(function(t) {
                    return function(w) {
                        return _.vf(function(v) {
                            if (v.g == 1) return v.yield(0, 2);
                            Il(a.context, c, function() {
                                a.l.has(e) && f.has(t.qh) && (0, t.qh)(k)
                            }, !0);
                            w();
                            v.g = 0
                        })
                    }
                }(p)));
                return q.yield(_.B.Promise.all(l), 0)
            })
        },
        vO = new rO,
        wO = new rO,
        hv = new rO,
        xO = new rO,
        jv = new rO,
        yO = new rO,
        zO = new rO,
        as = new rO,
        Zw = new rO,
        AO = new rO;
    var BO = function() {
            this.data = void 0;
            this.status = 0;
            this.g = []
        },
        CO = function(a) {
            a.data = void 0;
            a.status = 1
        };
    var DO, GO, JO, Yw, Nr, Rr, FO, EO, KO;
    DO = function() {
        this.g = new _.B.Map;
        this.j = 0;
        this.o = new _.B.Map;
        this.Zb = null;
        this.B = this.l = this.A = this.H = 0;
        this.vj = null;
        this.J = new BO;
        this.L = new BO
    };
    GO = function(a, b) {
        a.g.get(b) || (a.g.set(b, {
            rd: !0,
            Oh: "",
            fe: "",
            Ek: 0,
            Ih: [],
            Kh: [],
            cd: !1,
            kq: -1,
            ci: 0,
            Nh: 0
        }), _.Jp(b, function() {
            a.g.delete(b);
            EO(a, b)
        }), b.listen(wO, function(c) {
            c = c.detail;
            var d = a.g.get(b);
            d.Oh = Xj(c, 33) || "";
            d.cd = !0;
            FO(a, b, function() {
                return void(d.Oh = "")
            });
            Rr(a, b, function() {
                return void(d.cd = !1)
            })
        }))
    };
    _.iv = function(a, b) {
        var c;
        return (c = a.g.get(b)) == null ? void 0 : c.rd
    };
    _.HO = function(a, b) {
        if (a = a.g.get(b)) a.rd = !1
    };
    _.IO = function(a, b) {
        if (a = a.g.get(b)) a.rd = !0
    };
    JO = function(a, b) {
        if (!b.length) return [];
        var c = Bl(b[0].getAdUnitPath());
        b.every(function(h) {
            return Bl(h.getAdUnitPath()) === c
        });
        var d = [];
        a = _.A(a.g);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.A(e.value);
            e = f.next().value;
            (f = f.next().value.Oh) && Bl(e.getAdUnitPath()) === c && !_.x(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    Yw = function(a, b) {
        var c, d;
        return (d = (c = a.g.get(b)) == null ? void 0 : c.fe) != null ? d : ""
    };
    Nr = function(a, b) {
        return (a = a.g.get(b)) ? a.Ek - 1 : 0
    };
    Rr = function(a, b, c) {
        (a = a.g.get(b)) && a.Ih.push(c)
    };
    FO = function(a, b, c) {
        (a = a.g.get(b)) && a.Kh.push(c)
    };
    EO = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Kh.slice(), a.Kh.length = 0, a = _.A(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    KO = function(a, b) {
        if (a = a.g.get(b))
            for (b = a.Ih.slice(), a.Ih.length = 0, a = _.A(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    DO.prototype.cd = function(a) {
        var b, c;
        return (c = (b = this.g.get(a)) == null ? void 0 : b.cd) != null ? c : !1
    };
    var LO = function(a, b, c) {
            if (a = a.g.get(b)) a.Dk = c
        },
        MO = function(a, b) {
            if (a = a.g.get(b)) {
                var c;
                (c = a.Dk) == null || c.dispose();
                delete a.Dk
            }
        },
        NO = function(a, b) {
            return (a = a.g.get(b)) ? a.ci : 0
        },
        OO = function(a, b) {
            (a = a.g.get(b)) && ++a.ci
        },
        PO = function(a, b) {
            var c;
            return (c = a.g.get(b)) == null ? void 0 : c.Nh
        };
    var Sl = new _.B.Map,
        Rl = new _.B.Map;
    var Ul = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    Ul.prototype.getMessageId = function() {
        return this.messageId
    };
    Ul.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var QO = O(2),
        RO = O(3),
        SO = O(4),
        TO = O(5),
        UO = O(6),
        VO = O(12),
        WO = O(14),
        XO = O(16),
        nm = O(19),
        YO = O(20),
        ZO = O(23),
        $O = O(26),
        aP = O(28),
        bP = O(149),
        cP = O(30),
        dP = O(31),
        eP = O(34),
        fP = O(35),
        An = O(36),
        Bv = O(38),
        gP = O(40),
        hP = O(48),
        iP = O(50),
        jP = O(60),
        kP = O(63),
        lP = O(64),
        mP = O(66),
        nP = O(68),
        oP = O(69),
        pP = O(70),
        qP = O(71),
        rP = O(78),
        sP = O(80),
        eo = O(82),
        pm = O(84),
        tP = O(85),
        uP = O(87),
        hm = O(88),
        vP = O(92),
        wP = O(93),
        xP = O(99),
        rm = O(103),
        bo = O(104),
        yP = O(105),
        Wn = O(106),
        Xn = O(107),
        co = O(108),
        ns = O(113),
        zP = O(114),
        AP = O(115),
        BP = O(117),
        CP = O(167),
        DP = O(118),
        EP = O(120),
        FP = O(119),
        Nn = O(121),
        GP = O(122),
        HP = O(123),
        IP = O(126),
        JP = O(127),
        KP = O(144),
        Os = O(129),
        Ts = O(132),
        LP = O(134),
        MP = O(135),
        NP = O(136),
        OP = O(137),
        PP = O(138),
        QP = O(139),
        RP = O(140),
        SP = O(143),
        TP = O(145),
        UP = O(147),
        VP = O(150),
        WP = O(164),
        XP = O(152),
        YP = O(153),
        ZP = O(154),
        st = O(155),
        $P = O(156),
        aQ = O(157),
        bQ = O(158),
        cQ = O(159),
        dQ = O(160),
        eQ = O(161),
        fQ = O(162),
        gQ = O(165),
        hQ = O(166);
    var iQ = function(a, b, c) {
        var d = this;
        this.addEventListener = N(a, 86, function(e, f) {
            if (typeof f !== "function") return P(b, Wl("Service.addEventListener", [e, f])), d;
            var h = Xl(e);
            if (!h) return P(b, wP(e)), d;
            c.addEventListener(h, f);
            return d
        });
        this.removeEventListener = N(a, 904, function(e, f) {
            var h = Xl(e);
            typeof f === "function" && h ? c.removeEventListener(h, f) : P(b, Wl("Service.removeEventListener", [e, f]))
        });
        this.getSlots = N(a, 573, function() {
            return c.g.map(function(e) {
                return e.g
            })
        });
        this.getSlotIdMap = N(a, 574, function() {
            for (var e = {}, f = _.A(c.g), h = f.next(); !h.done; h = f.next()) h = h.value, e[h.toString()] = h.g;
            return e
        });
        this.getName = N(a, 575, function() {
            return c.getName()
        })
    };
    var Yl = function(a, b, c) {
        iQ.call(this, a, b, c);
        this.setRefreshUnfilledSlots = N(a, 59, function(d) {
            c.setRefreshUnfilledSlots(d)
        });
        this.notifyUnfilledSlots = N(a, 69, function(d) {
            c.rd && jQ(c, kQ(c, d))
        });
        this.refreshAllSlots = N(a, 60, function() {
            c.rd && jQ(c)
        });
        this.setVideoSession = N(a, 61, function(d, e, f) {
            c.H = e;
            c.F = f;
            typeof d === "number" && (e = _.Qm().g, _.ek(e, 29, _.Uc(d)))
        });
        this.getDisplayAdsCorrelator = N(a, 62, function() {
            return String(Wz(_.Qm().g, 26))
        });
        this.getVideoStreamCorrelator = N(a, 63, function() {
            var d = _.Qm().g;
            d = Zt(d, 29);
            return d != null ? d : 0
        });
        this.isSlotAPersistentRoadblock = N(a, 64, function(d) {
            var e = _.x(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            return !!e && lQ(c, e)
        });
        this.onImplementationLoaded = N(a, 65, function() {
            c.P.info(hP("GPT CompanionAds"))
        });
        this.slotRenderEnded = N(a, 67, function(d, e, f) {
            var h = _.x(c.g, "find").call(c.g, function(k) {
                return k.g === d
            });
            return h && mQ(c, h, e, f)
        })
    };
    _.R(Yl, iQ);
    var $l = function(a, b, c) {
        iQ.call(this, a, b, c);
        this.setContent = N(a, 72, function(d) {
            var e = _.x(c.g, "find").call(c.g, function(f) {
                return f.g === d
            });
            b.error(KP(), e)
        })
    };
    _.R($l, iQ);
    var gm = function(a) {
        this.D = _.D(a)
    };
    _.R(gm, _.E);
    var fm = function(a, b) {
            return _.uq(a, 1, b)
        },
        km = function(a, b) {
            return _.ce(a, 2, _.Xc, _.Wj(b))
        },
        em = function(a, b) {
            return _.le(a, 2, b, _.Vc)
        },
        zn = function(a, b) {
            return _.oe(a, 2, _.Vc, b)
        };
    gm.Z = [2];
    var nQ = function(a) {
        this.D = _.D(a)
    };
    _.R(nQ, _.E);
    nQ.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.ur(this, 5, a)
    };
    nQ.prototype.clearTagForChildDirectedTreatment = function() {
        return _.ek(this, 5)
    };
    nQ.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.ur(this, 6, a)
    };
    var jq = function(a) {
        this.D = _.D(a)
    };
    _.R(jq, _.E);
    var Hv = function(a) {
        var b = new jq;
        return _.dk(b, 1, a)
    };
    var Bw = function(a) {
        this.D = _.D(a)
    };
    _.R(Bw, _.E);
    var Jv = function(a) {
        this.D = _.D(a)
    };
    _.R(Jv, _.E);
    Jv.Z = [1];
    var Ln = function(a) {
        this.D = _.D(a)
    };
    _.R(Ln, _.E);
    var Is = function(a) {
        this.D = _.D(a)
    };
    _.R(Is, _.E);
    var Rs = function(a, b) {
            return _.ur(a, 1, b)
        },
        Ls = function(a, b) {
            return _.le(a, 2, b, _.Vc)
        };
    Is.Z = [2];
    var Ev = function(a) {
        this.D = _.D(a)
    };
    _.R(Ev, _.E);
    var Ks = function(a, b) {
        gk(a, 1, Is, b)
    };
    Ev.Z = [1];
    var Qt = function(a) {
        this.D = _.D(a)
    };
    _.R(Qt, _.E);
    var Pt = function(a) {
        this.D = _.D(a)
    };
    _.R(Pt, _.E);
    var oQ = function(a) {
        this.D = _.D(a)
    };
    _.R(oQ, _.E);
    oQ.prototype.getCategoryExclusions = function(a) {
        return bA(this, 3, a)
    };
    oQ.prototype.Va = function() {
        return _.Uj(this, gm, 14, _.Wj())
    };
    oQ.prototype.Yc = function() {
        return _.wm(this, Ln, 18)
    };
    var qx = function(a) {
        return _.wm(a, nQ, 25)
    };
    oQ.prototype.getCorrelator = function() {
        Hb(this, Kz);
        return Zt(this, 26)
    };
    oQ.prototype.setCorrelator = function(a) {
        return _.ek(this, 26, _.Uc(a))
    };
    oQ.prototype.zj = function() {
        return Tz(this, Pt, 33)
    };
    oQ.Z = [2, 3, 14];
    var Pm = function() {
        this.g = new _.B.Map
    };
    var pQ = {},
        um = (pQ[253] = !1, pQ[246] = [], pQ[150] = "", pQ[221] = !1, pQ[263] = !1, pQ[36] = /^true$/.test("false"), pQ[172] = null, pQ[260] = void 0, pQ[251] = null, pQ),
        tm = function() {
            this.g = !1
        };
    var qQ, rQ;
    qQ = function() {
        this.Xa = {};
        this.g = new oQ;
        this.l = new _.B.Map;
        this.o = {};
        this.g.setCorrelator(iD());
        _.vm(36) && _.dk(this.g, 15, !0)
    };
    rQ = function(a) {
        var b = _.Qm(),
            c = a.getDomId();
        if (c && !b.Xa.hasOwnProperty(c)) {
            var d = _.fh(Pm),
                e = ++_.fh(El).o;
            d.g.set(c, e);
            _.ek(a, 20, _.Cc(e));
            b.Xa[c] = a
        }
    };
    _.sQ = function(a, b) {
        return a.Xa[b]
    };
    _.Qm = function() {
        return _.fh(qQ)
    };
    var tQ = {},
        uQ = (tQ.companion_ads = "companionAds", tQ.content = "content", tQ.publisher_ads = "pubads", tQ);
    var vQ = Wm(Tm);
    var rn = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            h = _.Qm().g,
            k = _.sQ(_.Qm(), f.getDomId());
        this.set = N(a, 83, function(l, m) {
            l === "page_url" && m && (l = [em(fm(new gm, l), [String(m)])], _.qm(k, 3, l));
            return e
        });
        this.get = N(a, 84, function(l) {
            if (l !== "page_url") return null;
            var m, n;
            return (n = (m = (_.F = k.Va(), _.x(_.F, "find")).call(_.F, function(p) {
                return Xj(p, 1) === l
            })) == null ? void 0 : km(m)[0]) != null ? n : null
        });
        this.setClickUrl = N(a, 79, function(l) {
            bm(l, k, f, b);
            return e
        });
        this.setTargeting = N(a, 81, function(l, m) {
            im(l, m, f, k, b);
            return e
        });
        this.updateTargetingFromMap = N(a, 85, function(l) {
            jm(l, f, k, b);
            return e
        });
        this.display = N(a, 78, function() {
            var l = _.Rm(h, _.Qm().Xa);
            var m = m === void 0 ? document : m;
            var n;
            (n = l.W[f.getDomId()]) != null && _.dk(n, 19, !0);
            n = f.getDomId();
            n = Qy(n);
            var p = {
                id: n
            };
            var q = q === void 0 ? iz : q;
            var t = _.x(Object, "assign").call(Object, {}, p);
            n = p.id;
            var w = p.style;
            p = p.data;
            t = (delete t.id, delete t.style, delete t.data, t);
            if (_.x(Object, "keys").call(Object, t).length) throw Error("Invalid attribute(s): " + _.x(Object, "keys").call(Object, t));
            n = {
                id: n,
                style: w ? w : void 0
            };
            if (p)
                for (w = _.A(_.x(p, "entries").call(p)), p = w.next(); !p.done; p = w.next()) t = _.A(p.value), p = t.next().value, t = t.next().value, bf(iN.test(p)), n[p] = t;
            if (!lz.test("div")) throw Error("");
            if ("DIV" in nz) throw Error("");
            w = "";
            if (n)
                for (v in n)
                    if (Object.prototype.hasOwnProperty.call(n, v)) {
                        if (!lz.test(v)) throw Error("");
                        p = n[v];
                        if (p != null) {
                            t = v;
                            if (p instanceof kg) p = Ty(p);
                            else {
                                if (t.toLowerCase() == "style") throw Error("");
                                if (/^on/i.test(t)) throw Error("");
                                if (t.toLowerCase() in mz)
                                    if (p instanceof _.Uy) p = _.gb(p).toString();
                                    else if (p instanceof _.qa) p = _.ra(p);
                                else if (typeof p === "string") p = _.wa(p).toString();
                                else throw Error("");
                            }
                            p = t + '="' + Qy(String(p)) + '"';
                            w += " " + p
                        }
                    }
            var v = "<div" + w;
            q == null ? q = [] : Array.isArray(q) || (q = [q]);
            bz.div === !0 ? v += ">" : (q = kz(q), v += ">" + _.hz(q).toString() + "</div>");
            v = _.Kj(v);
            m.write(_.hz(v));
            Vm(f, m) && (Cv(d), GO(d.M, f), wQ(d, l, f))
        });
        this.setTagForChildDirectedTreatment = N(a, 80, function(l) {
            if (l === 0 || l === 1) {
                var m = qx(h) || new nQ;
                m.setTagForChildDirectedTreatment(l);
                _.ol(h, 25, m)
            }
            return e
        });
        this.setForceSafeFrame = N(a, 567, function(l) {
            typeof l === "boolean" ? _.dk(k, 12, l) : P(b, Wl("PassbackSlot.setForceSafeFrame", [String(l)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = N(a, 448, function(l) {
            if (l === 0 || l === 1) {
                var m = qx(h) || new nQ;
                m.setTagForUnderAgeOfConsent(l);
                _.ol(h, 25, m)
            }
            return e
        })
    };
    var zs = {
        Qp: 0,
        Np: 1,
        Op: 2,
        Pp: 3
    };
    var un = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5,
            GAME_MANUAL_INTERSTITIAL: 7,
            LEFT_SIDE_RAIL: 8,
            RIGHT_SIDE_RAIL: 9
        },
        wn = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        vn = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var xQ = "",
        Gn = null;
    var vo = function(a, b, c) {
        sO.call(this, a);
        this.slotId = b;
        this.g = c
    };
    _.R(vo, sO);
    vo.prototype.getSlotId = function() {
        return this.slotId
    };
    var Cg = function(a, b, c, d) {
        sO.call(this, a);
        this.adUnitPath = b;
        this.Yb = d;
        this.g = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.R(Cg, sO);
    _.r = Cg.prototype;
    _.r.getId = function() {
        return this.id
    };
    _.r.getAdUnitPath = function() {
        return this.adUnitPath
    };
    _.r.getName = function() {
        return this.adUnitPath
    };
    _.r.toString = function() {
        return this.getId()
    };
    _.r.getDomId = function() {
        return this.Yb
    };
    var yQ = function(a, b) {
        a.g = b
    };
    var go = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js)/;
    var so = _.IA(function() {
            return void eD("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        zQ = _.IA(function() {
            return void eD("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        AQ = _.IA(function() {
            return void eD("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        xo = function(a, b, c, d, e) {
            iQ.call(this, a, b, c);
            var f = this,
                h = _.Qm().g,
                k = _.Qm().Xa,
                l = !1;
            this.setTargeting = N(a, 1, function(m, n) {
                Zn({
                    key: m,
                    value: n,
                    Ja: h,
                    serviceName: c.getName(),
                    ko: c.enabled,
                    Jb: e,
                    P: b,
                    context: a
                });
                return f
            });
            this.clearTargeting = N(a, 2, function(m) {
                fo(m, h, c.getName(), b);
                return f
            });
            this.getTargeting = N(a, 38, function(m) {
                return $n(m, h, b)
            });
            this.getTargetingKeys = N(a, 39, function() {
                return ao(h)
            });
            this.setCategoryExclusion = N(a, 3, function(m) {
                typeof m !== "string" || cm(m) ? P(b, Wl("PubAdsService.setCategoryExclusion", [m])) : ((_.F = _.ce(h, 3, _.Xc, _.Wj()), _.x(_.F, "includes")).call(_.F, m) || _.oe(h, 3, _.Vc, m), b.info(tP(m)));
                return f
            });
            this.clearCategoryExclusions = N(a, 4, function() {
                _.ek(h, 3);
                b.info(uP());
                return f
            });
            this.disableInitialLoad = N(a, 5, function() {
                _.dk(h, 4, !0);
                l || (l = !0, to())
            });
            this.enableSingleRequest = N(a, 6, function() {
                if (c.enabled && !_.Q(h, 6)) return P(b, jP("PubAdsService.enableSingleRequest")), !1;
                b.info(kP("single request"));
                _.dk(h, 6, !0);
                return !0
            });
            this.enableAsyncRendering = N(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = N(a, 8, function() {
                eD("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = N(a, 485, function(m) {
                var n = new Bw;
                n = _.Yq(n, 1, 800);
                n = _.Yq(n, 2, 400);
                n = _.ek(n, 3, _.nc(3));
                if (_.La(m)) {
                    var p = m.fetchMarginPercent;
                    typeof p === "number" && (p >= 0 ? _.Yq(n, 1, p) : p === -1 && _.ek(n, 1));
                    p = m.renderMarginPercent;
                    typeof p === "number" && (p >= 0 ? _.Yq(n, 2, p) : p === -1 && _.ek(n, 2));
                    m = m.mobileScaling;
                    typeof m === "number" && (m > 0 ? _.ek(n, 3, _.nc(m)) : m === -1 && _.ek(n, 3, _.nc(1)))
                }
                window.IntersectionObserver || !Tr(n, 1) && !Tr(n, 2) ? _.ol(h, 5, n) : P(b, VP())
            });
            this.setCentering = N(a, 9, function(m) {
                m = !!m;
                b.info(lP("centering", String(m)));
                _.dk(h, 15, m)
            });
            this.definePassback = N(a, 10, function(m, n) {
                return (m = wo(a, b, c, m, n, d)) && m.qk
            });
            this.refresh = N(a, 11, function() {
                var m = _.xa.apply(0, arguments),
                    n = _.A(m),
                    p = n.next().value;
                n = n.next().value;
                n = n === void 0 ? {} : n;
                p && !Array.isArray(p) || !_.La(n) || n.changeCorrelator && typeof n.changeCorrelator !== "boolean" ? P(b, Wl("PubAdsService.refresh", m)) : (n && n.changeCorrelator === !1 || h.setCorrelator(iD()), p = p ? ro(p, c) : _.I(LJ) ? c.g.filter(function(q) {
                    var t = k[q.getDomId()];
                    return !(!Vm(q) && !Fm(cr(t)))
                }) : c.g, c.refresh(_.Rm(h, k), p) || P(b, Wl("PubAdsService.refresh", m)))
            });
            this.enableVideoAds = N(a, 12, function() {
                _.dk(h, 21, !0);
                BQ(c, h)
            });
            this.setVideoContent = N(a, 13, function(m, n) {
                CQ(c, m, n, h)
            });
            this.collapseEmptyDivs = N(a, 14, function(m) {
                m = m === void 0 ? !1 : m;
                m = m === void 0 ? !1 : m;
                _.dk(h, 11, !0);
                m = !!m;
                _.dk(h, 10, m);
                b.info(rP(String(m)));
                return !!_.Q(h, 11)
            });
            this.clear = N(a, 15, function(m) {
                if (Array.isArray(m)) return DQ(c, h, k, ro(m, c));
                if (m === void 0) return DQ(c, h, k, c.g);
                P(b, Wl("PubAdsService.clear", [m]));
                return !1
            });
            this.setLocation = N(a, 16, function(m) {
                typeof m !== "string" ? P(b, Wl("PubAdsService.setLocation", [m])) : _.uq(h, 8, m);
                return f
            });
            this.setCookieOptions = N(a, 17, function() {
                zQ();
                return f
            });
            this.setTagForChildDirectedTreatment = N(a, 18, function(m) {
                AQ();
                if (m !== 1 && m !== 0) return P(b, GP("PubadsService.setTagForChildDirectedTreatment", On(m), "0,1")), f;
                var n = qx(h) || new nQ;
                n.setTagForChildDirectedTreatment(m);
                _.ol(h, 25, n);
                return f
            });
            this.clearTagForChildDirectedTreatment = N(a, 19, function() {
                AQ();
                var m = qx(h);
                if (!m) return f;
                m.clearTagForChildDirectedTreatment();
                _.ol(h, 25, m);
                return f
            });
            this.setPublisherProvidedId = N(a, 20, function(m) {
                m = String(m);
                b.info(lP("PPID", m));
                _.uq(h, 16, m);
                return f
            });
            this.set = N(a, 21, function(m, n) {
                Bn(m, n, h, c.getName(), b);
                return f
            });
            this.get = N(a, 22, function(m) {
                return Cn(m, h, b)
            });
            this.getAttributeKeys = N(a, 23, function() {
                return Dn(h)
            });
            this.display = N(a, 24, function(m, n, p, q) {
                return void c.display(m, n, d, p, q)
            });
            this.updateCorrelator = N(a, 25, function() {
                eD(io("update"));
                P(b, AP());
                h.setCorrelator(iD());
                return f
            });
            this.defineOutOfPagePassback = N(a, 35, function(m) {
                m = wo(a, b, c, m, [1, 1], d);
                if (!m) return null;
                _.ur(m.Ja, 15, 1);
                return m.qk
            });
            this.setForceSafeFrame = N(a, 36, function(m) {
                typeof m !== "boolean" ? P(b, Wl("PubAdsService.setForceSafeFrame", [On(m)])) : _.dk(h, 13, m);
                return f
            });
            this.setSafeFrameConfig = N(a, 37, function(m) {
                var n = Pn(b, m);
                n ? _.ol(h, 18, n) : P(b, Wl("PubAdsService.setSafeFrameConfig", [m]));
                return f
            });
            this.setRequestNonPersonalizedAds = N(a, 445, function(m) {
                AQ();
                if (m !== 0 && m !== 1) return P(b, GP("PubAdsService.setRequestNonPersonalizedAds", On(m), "0,1")), f;
                var n = qx(h) || new nQ;
                _.dk(n, 8, !!m);
                _.ol(h, 25, n);
                return f
            });
            this.setTagForUnderAgeOfConsent = N(a, 447, function(m) {
                m = m === void 0 ? 2 : m;
                AQ();
                if (m !== 2 && m !== 0 && m !== 1) return P(b, GP("PubadsService.setTagForUnderAgeOfConsent", On(m), "2,0,1")), f;
                var n = qx(h) || new nQ;
                n.setTagForUnderAgeOfConsent(m);
                _.ol(h, 25, n);
                return f
            });
            this.getCorrelator = N(a, 27, function() {
                return String(Wz(h, 26))
            });
            this.getTagSessionCorrelator = N(a, 631, function() {
                return Qj(_.ca)
            });
            this.getVideoContent = N(a, 30, function() {
                return EQ(c, h)
            });
            this.getVersion = N(a, 568, function() {
                return a.If
            });
            this.forceExperiment = N(a, 569, function(m) {
                return void c.forceExperiment(m)
            });
            this.setCorrelator = N(a, 28, function(m) {
                eD(io("set"));
                P(b, zP());
                if (Og(window)) return f;
                if (!Eo(m)) return P(b, Wl("PubadsService.setCorrelator", [On(m)])), f;
                m = h.setCorrelator(m);
                _.dk(m, 27, !0);
                return f
            });
            this.markAsAmp = N(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = N(a, 571, function() {
                return !!_.Q(h, 6)
            });
            this.setImaContent = N(a, 328, function(m, n) {
                _.Yj(h, 22) ? CQ(c, m, n, h) : (_.dk(h, 21, !0), BQ(c, h), typeof m === "string" && _.uq(h, 19, m), typeof n === "string" && _.uq(h, 20, n))
            });
            this.getImaContent = N(a, 329, function() {
                return _.Yj(h, 22) ? EQ(c, h) : c.enabled ? {
                    vid: _.u(h, 19) || "",
                    cmsid: _.u(h, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = N(a, 572, function() {
                return !!_.Q(h, 4)
            });
            this.setPrivacySettings = N(a, 648, function(m) {
                if (!_.La(m)) return P(b, Wl("PubAdsService.setPrivacySettings", [m])), f;
                var n = m.restrictDataProcessing,
                    p = m.childDirectedTreatment,
                    q = m.underAgeOfConsent,
                    t = m.limitedAds,
                    w = m.nonPersonalizedAds,
                    v = m.userOptedOutOfPersonalization,
                    y = m.trafficSource,
                    z = m.isSpecialCategoryData,
                    G, C = (G = qx(h)) != null ? G : new nQ;
                typeof w === "boolean" ? _.dk(C, 8, w) : w !== void 0 && P(b, Nn("PubAdsService.setPrivacySettings", On(m), "nonPersonalizedAds", On(w)));
                typeof v === "boolean" ? _.dk(C, 13, v) : v !== void 0 && P(b, Nn("PubAdsService.setPrivacySettings", On(m), "userOptedOutOfPersonalization", On(v)));
                typeof n === "boolean" ? _.dk(C, 1, n) : n !== void 0 && P(b, Nn("PubAdsService.setPrivacySettings", On(m), "restrictDataProcessing", On(n)));
                if (typeof t === "boolean") {
                    n = ho();
                    if (t && !_.Q(C, 9) && (G = ql(a), G.ud)) {
                        w = a.va;
                        v = w.td;
                        G = pl(a, G.jd);
                        var H = new TF;
                        H = _.tl(H, 1, !0);
                        H = _.tl(H, 2, n);
                        G = _.vl(G, 11, wl, H);
                        v.call(w, G)
                    }
                    n ? _.dk(C, 9, t) : t && P(b, UP())
                } else t !== void 0 && P(b, Nn("PubAdsService.setPrivacySettings", On(m), "limitedAds", On(t)));
                q !== void 0 && (q === null ? C.setTagForUnderAgeOfConsent(2) : q === !1 ? C.setTagForUnderAgeOfConsent(0) : q === !0 ? C.setTagForUnderAgeOfConsent(1) : P(b, Nn("PubAdsService.setPrivacySettings", On(m), "underAgeOfConsent", On(q))));
                p !== void 0 && (p === null ? C.clearTagForChildDirectedTreatment() : p === !1 ? C.setTagForChildDirectedTreatment(0) : p === !0 ? C.setTagForChildDirectedTreatment(1) : P(b, Nn("PubAdsService.setPrivacySettings", On(m), "childDirectedTreatment", On(p))));
                y !== void 0 && (y === null ? _.ek(C, 10) : (_.F = _.x(Object, "values").call(Object, vn), _.x(_.F, "includes")).call(_.F, y) ? _.ur(C, 10, y) : P(b, Nn("PubAdsService.setPrivacySettings", On(m), "trafficSource", On(y))));
                _.I(DG) && z !== void 0 && (z === null ? _.ek(C, 14) : z === !0 ? _.dk(C, 14, !0) : P(b, Nn("PubAdsService.setPrivacySettings", On(m), "isSpecialCategoryData", On(z))));
                _.ol(h, 25, C);
                return f
            })
        };
    _.R(xo, iQ);
    var FQ = function(a, b) {
        this.getId = N(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = N(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = N(a, 595, function() {
            return b.getName()
        });
        this.toString = N(a, 596, function() {
            return b.toString()
        });
        this.getDomId = N(a, 597, function() {
            return b.getDomId()
        })
    };
    var GQ = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        HQ = function(a, b) {
            a.advertiserId = b
        },
        IQ = function(a, b) {
            a.campaignId = b
        },
        JQ = function(a, b) {
            a.yieldGroupIds = b
        },
        KQ = function(a, b) {
            a.companyIds = b
        };
    var xm = function(a) {
        this.D = _.D(a)
    };
    _.R(xm, _.E);
    xm.prototype.getWidth = function() {
        return fv(this, 1)
    };
    xm.prototype.getHeight = function() {
        return fv(this, 2)
    };
    var Ho = function() {
        var a = new xm;
        return _.dk(a, 3, !0)
    };
    var Am = function(a) {
        this.D = _.D(a)
    };
    _.R(Am, _.E);
    Am.Z = [2];
    var LQ = function(a) {
        this.D = _.D(a)
    };
    _.R(LQ, _.E);
    var MQ = function(a) {
        var b = new LQ;
        return _.ur(b, 1, a)
    };
    var NQ = function(a) {
        this.D = _.D(a)
    };
    _.R(NQ, _.E);
    NQ.Z = [1];
    var OQ = function(a) {
        this.D = _.D(a)
    };
    _.R(OQ, _.E);
    var PQ = function(a) {
        this.D = _.D(a)
    };
    _.R(PQ, _.E);
    PQ.prototype.getAdUnitPath = function() {
        return _.u(this, 1)
    };
    PQ.prototype.getDomId = function() {
        return _.u(this, 2)
    };
    var QQ = function(a, b) {
        _.uq(a, 2, b)
    };
    PQ.prototype.Va = function() {
        return _.Uj(this, gm, 3, _.Wj())
    };
    PQ.prototype.getServices = function(a) {
        return bA(this, 4, a)
    };
    var RQ = function(a, b) {
        _.qm(a, 5, b)
    };
    PQ.prototype.getClickUrl = function() {
        return _.u(this, 7)
    };
    PQ.prototype.setClickUrl = function(a) {
        return _.uq(this, 7, a)
    };
    PQ.prototype.getCategoryExclusions = function(a) {
        return bA(this, 8, a)
    };
    var dm = function(a, b) {
        return _.Uj(a, gm, 9, _.Wj(b))
    };
    PQ.prototype.Yc = function() {
        return _.wm(this, Ln, 13)
    };
    var cr = function(a) {
        return _.Uf(a, 15, 0)
    };
    PQ.Z = [3, 4, 5, 6, 8, 9, 27];
    var SQ = function(a, b) {
        this.width = a;
        this.height = b
    };
    SQ.prototype.getWidth = function() {
        return this.width
    };
    SQ.prototype.getHeight = function() {
        return this.height
    };
    var TQ = new _.B.Set(["unhideWindow", "navBar"]);
    var No = function(a, b, c) {
        var d = this,
            e = _.sQ(_.Qm(), c.getDomId()),
            f = "",
            h = null,
            k = function() {
                return ""
            },
            l = "",
            m = !1;
        _.Jp(c, function() {
            e = new PQ;
            f = "";
            h = null;
            k = function() {
                return ""
            };
            l = ""
        });
        c.listen(hv, function(p) {
            var q = p.detail;
            p = q.bj;
            q = q.isBackfill;
            p && (f = p, m = q)
        });
        this.set = N(a, 40, function(p, q) {
            zo(p, q, c, e, b);
            return d
        });
        this.get = N(a, 41, function(p) {
            return Ao(p, c, e, b)
        });
        this.getAttributeKeys = N(a, 42, function() {
            return Bo(e)
        });
        this.addService = N(a, 43, function(p) {
            p = Sl.get(p);
            if (!p) return P(b, Wl("Slot.addService", [p]), c), d;
            var q = p.getName();
            if ((_.F = _.ce(e, 4, _.Xc, _.Wj()), _.x(_.F, "includes")).call(_.F, q)) return b.info(VO(q, c.toString()), c), d;
            p.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = N(a, 44, function(p) {
            p = Lo(p);
            typeof p === "string" ? P(b, Wl("Slot.defineSizeMapping", [p]), c) : _.qm(e, 6, p);
            return d
        });
        this.setClickUrl = N(a, 45, function(p) {
            bm(p, e, c, b);
            return d
        });
        this.setCategoryExclusion = N(a, 46, function(p) {
            var q = e;
            typeof p !== "string" || cm(p) ? P(b, Wl("Slot.setCategoryExclusion", [p]), c) : ((_.F = _.ce(q, 8, _.Xc, _.Wj()), _.x(_.F, "includes")).call(_.F, p) || _.oe(q, 8, _.Vc, p), b.info(WO(p), c));
            return d
        });
        this.clearCategoryExclusions = N(a, 47, function() {
            _.ek(e, 8);
            b.info(XO(), c);
            return d
        });
        this.getCategoryExclusions = N(a, 48, function() {
            return _.ce(e, 8, _.Xc, _.Wj()).slice()
        });
        this.setTargeting = N(a, 49, function(p, q) {
            im(p, q, c, e, b);
            return d
        });
        this.updateTargetingFromMap = N(a, 649, function(p) {
            jm(p, c, e, b);
            return d
        });
        this.clearTargeting = N(a, 50, function(p) {
            sm(p, c, e, b);
            return d
        });
        this.getTargeting = N(a, 51, function(p) {
            return lm(p, c, e, b)
        });
        this.getTargetingKeys = N(a, 52, function() {
            return mm(e)
        });
        this.setCollapseEmptyDiv = N(a, 53, function(p, q) {
            var t = e;
            q = q === void 0 ? !1 : q;
            q = q === void 0 ? !1 : q;
            typeof p !== "boolean" || typeof q !== "boolean" ? P(b, Wl("Slot.setCollapseEmptyDiv", [p, q]), c) : (t = _.dk(t, 10, p), _.dk(t, 11, p && q), q && !p && P(b, YO(c.toString()), c));
            return d
        });
        this.getAdUnitPath = N(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = N(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = N(a, 55, function(p) {
            var q = e;
            typeof p !== "boolean" ? P(b, Wl("Slot.setForceSafeFrame", [String(p)]), c) : _.dk(q, 12, p);
            return d
        });
        this.setSafeFrameConfig = N(a, 56, function(p) {
            var q = e,
                t = Pn(b, p);
            t ? _.ol(q, 13, t) : b.error(Wl("Slot.setSafeFrameConfig", [p]), c);
            return d
        });
        c.listen(wO, function(p) {
            p = p.detail;
            if (Yz(p, 8)) h = null;
            else {
                h = new GQ;
                var q = !!Yz(p, 9);
                h.isBackfill = q;
                var t = Xz(p, 15, _.Wj()),
                    w = Xz(p, 16, _.Wj());
                t.length && w.length && (h.sourceAgnosticCreativeId = t[0], h.sourceAgnosticLineItemId = w[0], q || (h.creativeId = t[0], h.lineItemId = w[0], (q = Xz(p, 22, _.Wj())) && q.length && (h.creativeTemplateId = q[0])));
                Xz(p, 17, _.Wj()).length && HQ(h, Xz(p, 17, _.Wj())[0]);
                Xz(p, 18, _.Wj()).length && IQ(h, Xz(p, 18, _.Wj())[0]);
                Xz(p, 19, _.Wj()).length && JQ(h, Xz(p, 19, _.Wj(_.om)));
                Xz(p, 20, _.Wj()).length && KQ(h, Xz(p, 20, _.Wj(_.om)));
                p = _.ce(p, 45, (0, _.Hd)(p.D) & 34 ? de : ee, _.Wj()).map(function(v) {
                    return zd(v)
                });
                p.length && (h.encryptedTroubleshootingInfo = p[0])
            }
        });
        this.getResponseInformation = N(a, 355, function() {
            return h
        });
        this.getName = N(a, 170, function() {
            b.error(SP());
            return c.getAdUnitPath()
        });
        var n = new FQ(a, c);
        this.getSlotId = N(a, 579, function() {
            return n
        });
        this.getServices = N(a, 580, function() {
            return _.ce(e, 4, _.Xc, _.Wj()).map(function(p) {
                var q = uQ[p];
                if (q) {
                    var t, w, v;
                    p = (v = (w = (t = Mo())[q]) == null ? void 0 : w.call(t)) != null ? v : null
                } else p = null;
                return p
            })
        });
        this.getSizes = N(a, 581, function(p, q) {
            var t, w;
            return (w = (t = Bm(e, p, q)) == null ? void 0 : t.map(function(v) {
                return _.Q(v, 3) ? "fluid" : new SQ(v.getWidth(), v.getHeight())
            })) != null ? w : null
        });
        this.getClickUrl = N(a, 582, function() {
            var p;
            return (p = e.getClickUrl()) != null ? p : ""
        });
        this.getTargetingMap = N(a, 583, function() {
            for (var p = {}, q = _.A(dm(e)), t = q.next(); !t.done; t = q.next()) t = t.value, _.u(t, 1) && (p[Xj(t, 1)] = km(t, _.om));
            return p
        });
        this.getOutOfPage = N(a, 584, function(p) {
            return typeof p === "number" ? cr(e) === p : cr(e) !== 0
        });
        this.getCollapseEmptyDiv = N(a, 585, function() {
            var p = e;
            return Qn(p, 10) ? _.Q(p, 10) : null
        });
        this.getDivStartsCollapsed = N(a, 586, function() {
            var p = e;
            return Qn(p, 11) ? _.Q(p, 11) : null
        });
        c.listen(xO, function(p) {
            k = p.detail.Yl
        });
        this.getContentUrl = N(a, 587, function() {
            return k()
        });
        this.getFirstLook = N(a, 588, function() {
            eD("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.listen(wO, function(p) {
            var q;
            l = (q = p.detail.getEscapedQemQueryId()) != null ? q : ""
        });
        this.getEscapedQemQueryId = N(a, 591, function() {
            return l
        });
        this.getHtml = N(a, 592, function() {
            return m ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = N(a, 1022, function(p) {
            var q = e;
            if (Eg(p)) {
                var t = p.componentAuction,
                    w = p.adExpansion,
                    v = p.outstream;
                if (t != null) {
                    var y = q.getDomId();
                    t = {
                        componentAuction: t
                    };
                    if (!_.La(t)) P(b, Wl("googletag.Slot.setConfig", [t]));
                    else if (t.componentAuction !== void 0 && Array.isArray(t.componentAuction)) {
                        t = _.A(t.componentAuction);
                        for (var z = t.next(); !z.done; z = t.next()) {
                            var G = z.value;
                            z = G.configKey;
                            G = G.auctionConfig;
                            if (typeof z === "string" && !cm(z)) {
                                var C = void 0,
                                    H = void 0,
                                    L = _.Qm(),
                                    S = y;
                                G === null ? (H = L.o[S]) == null || H.delete(z) : G && ((C = L.o)[S] != null || (C[S] = new _.B.Map), L.o[S].set(z, G))
                            }
                        }
                    }
                }
                if (_.x(Object, "hasOwn").call(Object, p, "interstitial"))
                    if (cr(q) !== 5) P(b, dQ("interstitial"), c);
                    else {
                        t = p.interstitial;
                        b.info($P("interstitial", On(t)), c);
                        if (Eg(t))
                            for (y = {}, t = _.A(_.x(Object, "entries").call(Object, t)), z = t.next(); !z.done; z = t.next()) switch (G = _.A(z.value), z = G.next().value, G = G.next().value, z) {
                                case "triggers":
                                    y.triggers = G;
                                    break;
                                default:
                                    P(b, bQ("interstitial", z), c)
                            } else P(b, cQ("googletag.slot.setConfig", "interstitial", On(t)), c), y = null;
                        z = y;
                        y = new NQ;
                        t = {};
                        if (z && z.triggers)
                            if (z = z.triggers, Eg(z))
                                for (t.triggers = {}, z = _.A(_.x(Object, "entries").call(Object, z)), G = z.next(); !G.done; G = z.next())
                                    if (C = _.A(G.value), G = C.next().value, C = C.next().value, H = G, G = C, TQ.has(H))
                                        if (Gv(G)) switch (H) {
                                            case "unhideWindow":
                                                C = MQ(2);
                                                C = _.dk(C, 2, G);
                                                gk(y, 1, LQ, C);
                                                t.triggers.yq = G;
                                                break;
                                            case "navBar":
                                                _.I(pJ) ? (C = MQ(3), C = _.dk(C, 2, G), gk(y, 1, LQ, C), t.triggers.mq = G) : P(b, bQ("interstitial.triggers", H), c)
                                        } else P(b, cQ("interstitial.triggers", H, On(G)), c);
                                        else P(b, bQ("interstitial.triggers", H), c);
                        else P(b, cQ("interstitial", "triggers", On(z)), c);
                        b.info(aQ("interstitial", On(t)), c);
                        _.ol(q, 29, y)
                    }
                _.x(Object, "hasOwn").call(Object, p, "adExpansion") && (_.ek(q, 28), !Fv(w)) && (Eg(w) ? _.x(Object, "hasOwn").call(Object, w, "enabled") && (w = w.enabled, Gv(w) ? (w = Hv(w), _.ol(q, 28, w)) : P(b, Wl("googletag.setConfig.adExpansion.enabled", [w]), c)) : P(b, Wl("googletag.setConfig.adExpansion", [w]), c));
                if (_.I(zJ) && _.x(Object, "hasOwn").call(Object, p, "outstream") && (_.ek(q, 31), !Fv(v)))
                    if (Eg(v))
                        if (cr(q) !== 0) P(b, dQ("outstream", String(cr(q))), c);
                        else {
                            a: {
                                w = ["exposeVast"];p = new _.B.Map;v = _.A(_.x(Object, "entries").call(Object, v));
                                for (y = v.next(); !y.done; y = v.next()) t = _.A(y.value),
                                y = t.next().value,
                                t = t.next().value,
                                _.x(w, "includes").call(w, y) ? p.set(y, t) : P(b, bQ("outstream", y), c);
                                if (p.size === 0) v = null;
                                else
                                    for (v = new OQ, p = _.A(p), w = p.next(); !w.done; w = p.next())
                                        if (y = _.A(w.value), w = y.next().value, y = y.next().value, w === "exposeVast") {
                                            if (!Gv(y)) {
                                                P(b, cQ("outstream", "exposeVast", On(y)), c);
                                                v = null;
                                                break a
                                            }
                                            _.dk(v, 1, y)
                                        }
                            }
                            v && _.ol(q, 31, v)
                        }
                else P(b, cQ("googletag.slot.setConfig", "outstream", On(v)), c)
            } else P(b, Wl("googletag.slot.setConfig", [p]), c)
        })
    };
    var Y = function(a, b, c) {
        EM.call(this, b, c);
        this.context = a
    };
    _.R(Y, EM);
    Y.prototype.H = function(a) {
        Gl(this.context, this.id, a);
        var b, c;
        (b = window.console) == null || (c = b.error) == null || c.call(b, a)
    };
    var bp = function(a, b, c) {
        Y.call(this, a, 1226);
        this.zg = b;
        this.startTime = _.Jf();
        this.j = X(this, c)
    };
    _.R(bp, Y);
    bp.prototype.g = function() {
        var a = _.yh(ap);
        a > 0 && this.context.Gb < 1 / a && this.context.va.Pa.Sa.sb.me.Wl.lc({
            oc: _.Jf() - this.startTime,
            zg: this.zg,
            Hj: !!_.u(this.j.value, 2),
            Ij: !!_.u(this.j.value, 1),
            Dj: !!_.u(this.j.value, 11)
        })
    };
    bp.prototype.l = function(a) {
        this.H(a)
    };
    var $o = function(a, b, c, d, e) {
        Y.call(this, a, 959);
        this.xb = b;
        this.output = W(this);
        this.j = X(this, b);
        JM(this, c);
        JM(this, d);
        JM(this, e)
    };
    _.R($o, Y);
    $o.prototype.g = function() {
        this.output.G(this.j.value)
    };
    var Zo = function(a, b, c, d, e, f) {
        Y.call(this, a, 1172);
        this.P = b;
        this.M = c;
        this.C = d;
        this.j = GM(this);
        JM(this, e);
        this.A = X(this, f)
    };
    _.R(Zo, Y);
    Zo.prototype.g = function() {
        var a = this,
            b = new yL(this.C, {
                cmpInteractionEventReporter: new CL(this.context.va)
            });
        _.Gr(this, b);
        if (GK(b.caller)) {
            var c = this.M.L,
                d = c.status,
                e = function(f) {
                    f.internalErrorState ? Po(a.A.value, f.gppString) : dh(f.applicableSections) ? So(Qo(a.A.value, f.applicableSections.filter(function(h) {
                        return _.x(Number, "isInteger").call(Number, h)
                    })), !1) : To(a.context, a.A.value, f);
                    a.j.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.g.push(e);
                    break;
                case 0:
                    CO(c);
                    c.g.push(e);
                    this.P.info(EP());
                    b.addEventListener(Cl(this.context, 1173, function(f) {
                        if (f.pingData.signalStatus === "ready" || dh(f.pingData.applicableSections)) c.data = f.pingData, c.status = 2, c.g.forEach(function(h) {
                            h(f.pingData)
                        }), c.g = []
                    }));
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Yo = function(a, b, c, d, e, f, h) {
        Y.call(this, a, 874);
        this.P = b;
        this.M = c;
        this.C = d;
        this.F = e;
        this.j = GM(this);
        JM(this, f);
        this.A = X(this, h)
    };
    _.R(Yo, Y);
    Yo.prototype.g = function() {
        var a = this,
            b = new OK(this.C, {
                timeoutMs: -1,
                Fl: !0
            });
        _.Gr(this, b);
        if (typeof b.l.__tcfapi === "function" || SK(b) != null) {
            var c = this.M.J,
                d = c.status,
                e = function(f) {
                    var h, k, l = a.A.value,
                        m, n;
                    if (n = !((k = (h = a.F) == null ? void 0 : _.Q(h, 9)) != null && k)) h = {
                        idpcApplies: _.vm(221) && !yg()
                    }, h = h === void 0 ? {} : h, n = UK(f) ? f.gdprApplies === !1 ? !0 : f.tcString === "tcunavailable" ? !h.idpcApplies : (h.idpcApplies || f.gdprApplies !== void 0 || h.gq) && (h.idpcApplies || typeof f.tcString === "string" && f.tcString.length) ? RK(f, "1", 0) : !0 : !1;
                    h = _.dk(l, 5, n);
                    k = !VK(f, ["3", "4"], 0);
                    h = _.dk(h, 9, k);
                    h = _.uq(h, 2, f.tcString);
                    k = (m = f.addtlConsent) != null ? m : "";
                    m = _.uq(h, 4, k);
                    _.ur(m, 7, f.internalErrorState);
                    f.gdprApplies != null && _.dk(l, 3, f.gdprApplies);
                    VK(f, ["2", "7", "9", "10"], 3) || _.dk(l, 8, !0);
                    a.j.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.g.push(e);
                    break;
                case 0:
                    CO(c);
                    c.g.push(e);
                    this.P.info(DP());
                    b.addEventListener(function(f) {
                        UK(f) ? (f.tcString === "tcunavailable" ? a.P.info(FP("failed")) : a.P.info(FP("succeeded")), c.data = f, c.status = 2, c.g.forEach(function(h) {
                            h(f)
                        }), c.g = []) : CO(c)
                    });
                    break;
                default:
                    throw Error("Impossible CacheStatus: " + d);
            }
        } else this.j.notify()
    };
    var Xo = function(a, b, c, d, e) {
        Y.call(this, a, 875);
        this.P = b;
        this.C = c;
        this.j = GM(this);
        JM(this, d);
        this.A = X(this, e)
    };
    _.R(Xo, Y);
    Xo.prototype.g = function() {
        var a = this,
            b = new pL(this.C);
        _.Gr(this, b);
        if (GK(b.caller)) {
            var c = Cl(this.context, 660, function(d) {
                _.I(QI) && d && _.x(Object, "keys").call(Object, d).length === 0 && a.P.info(CP());
                d && typeof d.uspString === "string" && (_.uq(a.A.value, 1, d.uspString), hN(a.A.value, Cl(a.context, 1187, function() {
                    var e = d.uspString;
                    var f = e = e.toUpperCase();
                    f.length == 4 && (f.indexOf("-") == -1 || f.substring(1) === "---") && f[0] >= "1" && f[0] <= "9" && JD.hasOwnProperty(f[1]) && JD.hasOwnProperty(f[2]) && JD.hasOwnProperty(f[3]) ? (f = new ID, f = _.ul(f, 1, parseInt(e[0], 10)), f = _.K(f, 2, JD[e[1]]), f = _.K(f, 3, JD[e[2]]), e = _.K(f, 4, JD[e[3]])) : e = null;
                    return (e == null ? void 0 : _.Uf(e, 3, 0)) === 2
                })()));
                a.j.notify()
            });
            this.P.info(BP());
            qL(b, c)
        } else this.j.notify()
    };
    var Vo = di(958, function(a, b, c) {
        a = new gN;
        c = c ? _.Q(c, 9) : ho();
        var d = _.vm(221) && !yg();
        _.dk(a, 5, !c && !d);
        c = _.vm(263);
        d = !!navigator.globalPrivacyControl;
        c && d && _.dk(a, 14, !0);
        d ? b.va.Pa.Sa.sb.me.globalPrivacyControl.xa({
            za: 1,
            Nf: c,
            Of: d
        }) : b.Gb < .001 && b.va.Pa.Sa.sb.me.globalPrivacyControl.xa({
            za: 1E3,
            Nf: c,
            Of: d
        });
        return {
            aa: a
        }
    }, {
        aa: void 0
    });
    var Wo = function(a, b) {
        Y.call(this, a, 958);
        this.j = b;
        this.xb = W(this)
    };
    _.R(Wo, Y);
    Wo.prototype.g = function() {
        var a = new gN,
            b = this.j ? _.Q(this.j, 9) : ho(),
            c = _.vm(221) && !yg();
        _.dk(a, 5, !b && !c);
        b = _.vm(263);
        c = !!navigator.globalPrivacyControl;
        b && c && _.dk(a, 14, !0);
        c ? this.context.va.Pa.Sa.sb.me.globalPrivacyControl.xa({
            za: 1,
            Nf: b,
            Of: c
        }) : this.context.Gb < .001 && this.context.va.Pa.Sa.sb.me.globalPrivacyControl.xa({
            za: 1E3,
            Nf: b,
            Of: c
        });
        this.xb.G(a)
    };
    var UQ = function(a, b, c, d) {
        Y.call(this, a, 1103);
        this.j = b;
        this.aa = c;
        this.privacyTreatments = d;
        this.output = W(this)
    };
    _.R(UQ, Y);
    UQ.prototype.g = function() {
        this.output.G(!!Ug(this.aa) && !_.Q(this.aa, 9) && !_.Q(this.aa, 13) && !_.Q(this.aa, 12) && !_.Q(this.aa, 14) && (this.j ? _.Q(this.j, 9) || _.Q(this.j, 8) || _.Q(this.j, 1) || _.I(HJ) && _.Q(this.j, 13) || _.Uf(this.j, 6, 2) === 1 || _.yc(_.Sz(this.j, 5)) === 1 || _.x(this.privacyTreatments, "includes").call(this.privacyTreatments, 1) ? !1 : !0 : !0))
    };
    var fp = function(a) {
        this.P = a;
        this.o = this.g = 0
    };
    fp.prototype.push = function() {
        for (var a = _.A(_.xa.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                typeof b === "function" && (b.call(_.B.globalThis), this.g++)
            } catch (c) {
                this.o++, b = void 0, (b = window.console) == null || b.error("Exception in queued GPT command", c), this.P.error(cP(String(c)))
            }
        }
        this.P.info(dP(String(this.g), String(this.o)));
        return this.g
    };
    var dp = function(a, b) {
        this.push = N(a, 76, b.push.bind(b))
    };
    var VQ = ["Debug", "Info", "Warning", "Error", "Fatal"],
        WQ = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.g = c;
            this.timestamp = new Date
        };
    _.r = WQ.prototype;
    _.r.getSlot = function() {
        return this.g
    };
    _.r.getLevel = function() {
        return this.level
    };
    _.r.getTimestamp = function() {
        return this.timestamp
    };
    _.r.getMessage = function() {
        return this.message
    };
    _.r.toString = function() {
        return this.timestamp.toTimeString() + ": " + VQ[this.level] + ": " + this.message
    };
    var XQ = _.Zx(["https://console.googletagservices.com/pubconsole/loader.js"]),
        rp = _.kf(XQ),
        vp, up = !1,
        kp = !1,
        op = !1;
    var yv = function(a, b) {
        this.getAllEvents = N(a, 563, function() {
            return kp ? YQ(b).slice() : []
        });
        this.getEventsBySlot = N(a, 565, function(c) {
            return kp ? ZQ(b, c).slice() : []
        });
        this.getEventsByLevel = N(a, 566, function(c) {
            return kp ? $Q(b, c).slice() : []
        })
    };
    var xp = function() {
        this.qe = 1E3
    };
    xp.prototype.send = function(a, b) {
        a.co(b)
    };
    var Cp = function() {
        this.qe = 10
    };
    Cp.prototype.send = function(a, b) {
        a.fo(b)
    };
    var Ap = function() {
        this.qe = _.yh(jK);
        this.mb = 17
    };
    Ap.prototype.send = function(a, b) {
        var c = _.Ji(b, _.Ki, 2);
        _.oe(c, 1, _.wc, this.mb);
        a.io(b)
    };
    var Bp = function() {};
    Bp.prototype.send = function(a, b) {
        a.ho(b)
    };
    _.Ux.Object.defineProperties(Bp.prototype, {
        qe: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return _.yh(yJ)
            }
        }
    });
    var aR = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            151: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + "). All zero-area slot sizes were removed."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return Ep(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return Ep(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return Ep(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return Ep(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return Ep(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return Ep(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return Ep(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            145: function(a) {
                return Ep(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            },
            147: function() {
                return "GPT must be loaded from the limited ads URL to configure limited ads functionality via the PrivacySettings API."
            },
            150: function() {
                return "Legacy browser does not support intersection observer causing lazy render/fetch as well as viewability events not to work properly."
            },
            164: function() {
                return "Lazy loading is not supported for Side Rail formats. Invocation will have no effect."
            },
            154: function(a) {
                return "Refresh is disabled for " + Ep(a[0]) + " " + a[1] + "."
            },
            152: function() {
                return "Attempted to load GPT multiple times."
            },
            158: function(a) {
                return "Unrecognized property encountered when calling setConfig: " + a[0] + "." + a[1]
            },
            159: function(a) {
                return "Invalid value encountered when calling setConfig: " + a[0] + "." + a[1] + ": " + a[2]
            },
            160: function(a) {
                return "slot.setConfig key " + a[0] + " is not valid for this slot."
            },
            162: function(a) {
                return "GPT script src version " + a[0] + " is deprecated and will soon expire and fail to show ads. https://developers.google.com/publisher-tag/release-notes#2023-06-19"
            },
            165: function() {
                return "Rendering delayed due to slot element not being attached to the DOM.  It is recommended that the slot element or its ancestor be appended to the document prior to calling display."
            },
            166: function() {
                return "Creative content has successfully rendered after being delayed due to slot element not being attached to the DOM."
            }
        },
        bR = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            149: function(a) {
                return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            153: function() {
                return "Attempted to load GPT from both standard and limited ads domains."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            },
            161: function(a) {
                return "403 HTTP Response: " + a[0] + "."
            }
        };
    var cR = function(a) {
            this.context = a;
            this.o = this.g = 0;
            this.l = window;
            this.events = [];
            this.events.length = 1E3
        },
        YQ = function(a) {
            return [].concat(_.aj(a.events.slice(a.g)), _.aj(a.events.slice(0, a.g))).filter(function(b) {
                return !!b
            })
        },
        ZQ = function(a, b) {
            return YQ(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        $Q = function(a, b) {
            return YQ(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    cR.prototype.log = function(a, b, c) {
        c = c === void 0 ? null : c;
        var d, e, f = new WQ(a, b, (e = (d = c) == null ? void 0 : d.g) != null ? e : null);
        this.events[this.g] = f;
        this.g = (this.g + 1) % 1E3;
        var h = a === 2 || a === 3,
            k = b.getMessageArgs();
        e = b.getMessageId();
        var l = aR[e] || bR[e];
        d = void 0;
        if (l && (d = l(k), h = this.o < _.yh(aJ) && h && _.ca.console, this.l === this.l.top && h || _.x(_.ca.navigator.userAgent, "includes").call(_.ca.navigator.userAgent, "Lighthouse"))) {
            e = "[GPT] " + d + "\nhttps://goo.gle/gpt-message#" + e;
            var m, n, p, q;
            a === 2 ? (n = (m = _.ca.console).warn) == null || n.call(m, e) : (q = (p = _.ca.console).error) == null || q.call(p, e);
            this.o++
        }
        a: {
            switch (a) {
                case 2:
                    a = 1;
                    break;
                case 3:
                    a = 2;
                    break;
                default:
                    break a
            }
            this.context.R.log(633226268, Gp, _.x(Object, "assign").call(Object, {}, this.context, {
                jn: a,
                nn: d,
                message: b,
                slotId: c === void 0 ? null : c
            }))
        }
        return f
    };
    cR.prototype.info = function(a, b) {
        return this.log(1, a, b === void 0 ? null : b)
    };
    var P = function(a, b, c) {
        a.log(2, b, c)
    };
    cR.prototype.error = function(a, b) {
        return this.log(3, a, b)
    };
    var dR = function() {
            var a = {
                    X: _.Qm().g,
                    Uk: new Date(Date.now()),
                    ej: window.location.href
                },
                b = this;
            a = a === void 0 ? {} : a;
            var c = a.X === void 0 ? _.Qm().g : a.X;
            var d = a.Uk === void 0 ? new Date(Date.now()) : a.Uk;
            var e = a.ej === void 0 ? window.location.href : a.ej;
            this.g = "";
            this.B = this.o = null;
            this.L = this.j = !1;
            this.l = function() {
                return !1
            };
            a = {};
            var f = {},
                h = {};
            this.H = (h[3] = (a[72] = function(k, l) {
                var m = b.o;
                k = Number(k);
                l = Number(l);
                m = m !== null ? _.ph("w5uHecUBa2S:" + k + ":" + m) % l === Math.floor(d.valueOf() / 864E5) % l : void 0;
                return m
            }, a[13] = function() {
                return _.xa.apply(0, arguments).some(function(k) {
                    return _.x(b.g, "startsWith").call(b.g, k)
                })
            }, a[12] = function() {
                return !!_.Q(c, 6)
            }, a[15] = function(k) {
                return b.l(k)
            }, a[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (k) {
                    return !1
                }
            }, a[67] = function() {
                return b.j
            }, a[68] = function() {
                return b.L
            }, a[74] = function() {
                return _.x(_.xa.apply(0, arguments), "includes").call(_.xa.apply(0, arguments), String(_.ph(e)))
            }, a), h[4] = (f[14] = function() {
                var k = Number(b.B || void 0);
                isNaN(k) ? k = void 0 : (k = new Date(k * 1E3), k = k.getFullYear() * 1E4 + (k.getMonth() + 1) * 100 + k.getDate());
                return k
            }, f), h[5] = {}, h)
        },
        eR = function(a, b) {
            if (b && !a.o) {
                b = b.split(":");
                a.o = _.x(b, "find").call(b, function(d) {
                    return d.indexOf("ID=") === 0
                }) || null;
                var c;
                a.B = ((c = _.x(b, "find").call(b, function(d) {
                    return d.indexOf("T=") === 0
                })) == null ? void 0 : c.substring(2)) || null
            }
        };
    var bx = function(a, b, c, d, e, f, h) {
        Y.call(this, a, 863);
        this.A = c;
        this.fe = Number(b);
        this.j = X(this, d);
        this.I = X(this, e);
        this.K = X(this, f);
        this.F = X(this, h)
    };
    _.R(bx, Y);
    bx.prototype.g = function() {
        var a = this.K.value,
            b = this.j.value,
            c = this.F.value,
            d = this.I.value,
            e = this.A;
        var f = Ip(e);
        var h = b.getBoundingClientRect();
        e = _.Sk(e) ? Im(b, e) : {
            x: 0,
            y: 0
        };
        b = e.x;
        e = e.y;
        h = new _.nD(e, b + h.right, e + h.bottom, b);
        b = new VL;
        b = _.Yq(b, 1, h.top);
        b = _.Yq(b, 3, h.bottom);
        b = _.Yq(b, 2, h.left);
        h = _.Yq(b, 4, h.right);
        b = new WL;
        b = _.ek(b, 1, _.Cc(this.fe));
        d = _.dk(b, 2, !d);
        d = _.ol(d, 3, h);
        c = _.Yq(d, 4, c);
        f = _.Yq(c, 5, f);
        f = {
            type: "asmres",
            payload: cl(f)
        };
        a.ports[0].postMessage(f)
    };
    var rs = function(a, b, c, d) {
        Y.call(this, a, 1061);
        var e = this;
        this.output = W(this);
        this.output.Ra(new _.B.Promise(function(f) {
            var h = b.listen(c, function(k) {
                k = d(k);
                k !== null && (h(), f(k))
            });
            _.Jp(e, h)
        }))
    };
    _.R(rs, Y);
    rs.prototype.g = function() {};
    var $r = function(a, b, c, d) {
        d = d === void 0 ? function() {
            return !0
        } : d;
        Y.call(this, a, 1061);
        var e = this;
        this.output = GM(this);
        AM(this.output, new _.B.Promise(function(f) {
            var h = b.listen(c, function(k) {
                d(k) && (h(), f())
            });
            _.Jp(e, h)
        }))
    };
    _.R($r, Y);
    $r.prototype.g = function() {};
    var Xw = function(a, b, c, d) {
        rs.call(this, a, b, as, function(e) {
            e = e.detail;
            var f;
            return ((f = e.data) == null ? void 0 : f.type) === "asmreq" && fv(UL(e.data.payload), 1) === Number(c) ? e : null
        });
        this.A = d;
        this.j = W(this)
    };
    _.R(Xw, rs);
    Xw.prototype.g = function() {
        this.j.G(Ip(this.A))
    };
    var fR = /(<head(\s+[^>]*)?>)/i,
        pw = function(a, b, c, d, e) {
            Y.call(this, a, 665);
            this.wa = b;
            this.ge = c;
            this.isBackfill = d;
            this.Db = e;
            this.output = W(this)
        };
    _.R(pw, Y);
    pw.prototype.g = function() {
        var a;
        this.wa.kind !== 0 || (a = this.ge) == null || !_.u(a, 1) || this.Db ? this.output.G(this.wa) : (a = this.wa.qb, ma() || (a = a.replace(fR, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.isBackfill && (a = a.replace(fR, '$1<meta name="referrer" content="origin">')), this.output.G({
            kind: 0,
            qb: a
        }))
    };
    var gR = function(a, b, c) {
        Y.call(this, a, 1124);
        this.Le = GM(this);
        this.A = X(this, b);
        this.j = X(this, c)
    };
    _.R(gR, Y);
    gR.prototype.g = function() {
        _.uD(this.j.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.uD(this.A.value, "min-width", "100%");
        this.Le.notify()
    };
    var hR = function(a, b, c, d, e) {
        Y.call(this, a, 1125);
        this.A = X(this, b);
        this.j = X(this, c);
        JM(this, d);
        JM(this, e)
    };
    _.R(hR, Y);
    hR.prototype.g = function() {
        var a = this.A.value,
            b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.uD(this.j.value, "visibility", "visible"))
    };
    var cx = function(a, b, c, d, e, f, h) {
        Y.call(this, a, 718);
        this.slotId = b;
        this.ac = c;
        this.ge = d;
        this.A = e;
        this.F = f;
        this.output = W(this);
        this.j = new $r(this.context, this.slotId, Zw);
        this.I = X(this, h)
    };
    _.R(cx, Y);
    cx.prototype.g = function() {
        var a = !this.I.value;
        if (!this.ge || this.ac !== "height" || a) this.j.dispose(), this.output.G(!1);
        else {
            a = new jk;
            _.Gr(this, a);
            var b = new gR(this.context, this.A, this.F);
            J(a, b);
            J(a, this.j);
            J(a, new hR(this.context, this.A, this.F, this.j.output, b.Le));
            a.run();
            this.output.G(!0)
        }
    };
    var iR = [2, 1];
    var jR = di(699, function(a, b, c, d, e, f, h, k) {
        var l = a.Vb,
            m = a.yb,
            n = a.size,
            p = a.so;
        m.style.width = "";
        m.style.height = "";
        if (h === "height") return {};
        var q;
        a = (q = a.vc) != null ? q : 0;
        q = !1;
        switch (a) {
            case 1:
            case 2:
            case 4:
            case 5:
                var t, w = l.parentElement ? (t = Xm(l.parentElement, window)) == null ? void 0 : t.width : void 0;
                t = n.width;
                q = n.height;
                var v = h = 0;
                var y = Dm(e);
                y = _.A(y);
                for (var z = y.next(); !z.done; z = y.next()) {
                    var G = z.value;
                    Array.isArray(G) && (z = G[0], G = G[1], h < z && (h = z), v < G && (v = G))
                }
                v = [h, v];
                h = v[0] < t;
                q = v[1] < q;
                if (h || q) {
                    v = t + "px";
                    y = {
                        "max-height": "none",
                        "max-width": v,
                        padding: "0px",
                        width: v
                    };
                    q && (y.height = "auto");
                    Rp(m, l, y);
                    m = {};
                    if ((_.F = [2, 5], _.x(_.F, "includes")).call(_.F, a) || h && t > Op(p.width)) m.width = v, m["max-width"] = v;
                    q && (m.height = "auto", m["max-height"] = "none");
                    c: {
                        for (C in m)
                            if (Object.prototype.hasOwnProperty.call(m, C)) {
                                var C = !1;
                                break c
                            }
                        C = !0
                    }
                    C ? m = !1 : (m["padding-" + (p.direction === "ltr" ? "left" : "right")] = "0px", _.Qp(l, m), m = !0)
                } else m = !1;
                b: {
                    v = n.width;C = c.defaultView || c.parentWindow || _.ca;
                    switch (a) {
                        case 2:
                        case 5:
                            l = Sp(l, C, v, p, f);
                            break b;
                        case 1:
                        case 4:
                            if (f = l.parentElement)
                                if (p = Om(f)) {
                                    z = p.width;
                                    p = Vm(d, C.document);
                                    t = Xm(p, C);
                                    q = t.position;
                                    G = Op(t.width) || 0;
                                    h = Xm(f, C);
                                    y = h.direction === "rtl" ? "Right" : "Left";
                                    p = y.toLowerCase();
                                    C = q === "absolute" ? 0 : Op(h["padding" + y]);
                                    h = Op(h["border" + y + "Width"]);
                                    v = Math.max(Math.round((z - Math.max(G, v)) / 2), 0);
                                    z = {};
                                    G = 0;
                                    var H = lq(t);
                                    H && (G = H[4] * (y === "Right" ? -1 : 1), y = H[3] || 1, (H[0] || 1) !== 1 || y !== 1) && (H[0] = 1, H[3] = 1, z.transform = "matrix(" + H.join(",") + ")");
                                    y = 0;
                                    switch (q) {
                                        case "fixed":
                                            var L, S = (L = Number(Ym(t.getPropertyValue(p)))) != null ? L : 0,
                                                M;
                                            L = (M = f.getBoundingClientRect().left) != null ? M : 0;
                                            y = S - L;
                                            break;
                                        case "relative":
                                            y = (S = Number(Ym(t.getPropertyValue(p)))) != null ? S : 0;
                                            break;
                                        case "absolute":
                                            z[p] = "0"
                                    }
                                    z["margin-" + p] = v - C - h - y - G + "px";
                                    _.Qp(l, z);
                                    l = !0
                                } else l = !1;
                            else l = !1;
                            break b;
                        default:
                            l = !1;
                            break b
                    }
                    l = void 0
                }
                m || l ? (_.x(iR, "includes").call(iR, a) && Up(b, c, d, e, a, n.width, n.height, w, "gpt_slotexp", k), q = !0) : q = !1;
                break;
            case 3:
                a = l.parentElement ? (w = Xm(l.parentElement, window)) == null ? void 0 : w.width : void 0, M = n.width, L = n.height, S = Op(p.height) || 0, L >= S || p.display === "none" || p.visibility === "hidden" || !f || f.width === -12245933 || l.getBoundingClientRect().bottom <= f.height ? q = !1 : (S = {
                    height: L + "px"
                }, Rp(m, l, S), _.Qp(l, S), Up(b, c, d, e, 3, M, L, a, "gpt_slotred", k), q = !0)
        }!q && _.I(FG) && Up(b, c, d, e, 0, n.width, n.height, void 0, "gpt_pgbrk", k);
        return {}
    }, {});
    var kR = di(1114, function(a, b, c, d, e) {
        if (!b) return {
            wc: null,
            Sc: []
        };
        b = b.split(":");
        if (b.length !== 2 || b[0] !== "#flexibleAdSlotDebugSize") return {
            wc: null,
            Sc: []
        };
        b = b[1];
        a = a.Vb;
        var f = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
        if (f) {
            if (f = f[1], f !== "viewport")
                if (f === "parent") {
                    var h, k;
                    c = (a = (k = (h = Om(a.parentElement)) == null ? void 0 : h.width) != null ? k : null) ? Math.min(a, c) : null
                } else c = Number(f), c = c >= 0 ? c : null
        } else c = null;
        (h = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (h = h[1], h === "ratio" ? h = c && d && e ? Math.floor(e / d * c) : null : (h = Number(h), h = h >= 0 ? h : null)) : h = null;
        b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
        if (!c && !h) return {
            wc: null,
            Sc: []
        };
        var l, m;
        return {
            wc: new _.Nm((l = c != null ? c : d) != null ? l : 0, (m = h != null ? h : e) != null ? m : 0),
            Sc: b
        }
    }, {
        wc: void 0,
        Sc: void 0
    });
    var lR = di(681, function(a, b, c, d, e, f) {
        if (d) {
            var h, k;
            return {
                wa: a.wa,
                tf: new _.Nm(f != null ? f : 0, (h = a.Mh) != null ? h : 0),
                vc: (k = e) != null ? k : null,
                Kf: !1
            }
        }
        c = fq(c);
        (d = !c || !a.wc) || (d = a.Sc, d.length ? (b = b.split("/"), b = _.x(d, "includes").call(d, b[b.length - 1])) : b = !0, d = !b);
        if (d) {
            if (f == null) throw new DL("Missing 'width'.");
            if (a.Mh == null) throw new DL("Missing 'height'.");
            var l;
            return {
                wa: a.wa,
                tf: new _.Nm(f, a.Mh),
                vc: (l = e) != null ? l : null,
                Kf: !1
            }
        }
        f = a.Vb;
        var m, n;
        e = (n = (m = Om(f.parentElement)) == null ? void 0 : m.width) != null ? n : 0;
        m = a.wc;
        a = m.width;
        m = m.height;
        e = a <= e ? 1 : 2;
        n = '<html><body style="height:' + (m - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (c.width + "x" + c.height + "</p><p>Rendered size:") + (a + "x" + m + "</p></body></html>");
        _.uD(f, "opacity", .5);
        return {
            wa: {
                kind: 0,
                qb: n
            },
            tf: new _.Nm(a, m),
            vc: e,
            Kf: !0
        }
    }, {
        wa: void 0,
        tf: void 0,
        vc: void 0,
        Kf: void 0
    });
    var qw = function(a, b, c, d, e, f, h, k, l, m, n) {
        jk.call(this);
        a = this.g(kR, {
            Vb: n
        }, a, b.width, k, l);
        c = this.g(lR, {
            Mh: f,
            wc: a.wc,
            Sc: a.Sc,
            wa: m,
            Vb: n
        }, c, d, e, h, k);
        this.B = {
            Ia: c.wa,
            Ka: c.tf,
            Il: c.vc,
            Xm: c.Kf
        }
    };
    _.R(qw, jk);
    var mR = di(698, function(a, b) {
        return {
            output: Xm(a.element, b)
        }
    }, {
        output: void 0
    });
    var Fw = function(a, b, c, d, e, f, h, k, l, m, n) {
        jk.call(this);
        var p = this.g(mR, {
            element: f
        }, b).output;
        this.gg = this.g(jR, {
            Vb: f,
            yb: h,
            size: l,
            vc: m,
            so: p
        }, a, b.document, d, e, c, k, n).finished
    };
    _.R(Fw, jk);
    var nR = function(a, b, c, d, e) {
        Y.call(this, a, 937, _.yh(AJ));
        this.fb = b;
        this.j = W(this);
        this.A = W(this);
        this.F = W(this);
        this.Nc = c;
        this.Lc = d;
        this.zd = e
    };
    _.R(nR, Y);
    nR.prototype.g = function() {
        var a = {},
            b;
        if ((b = _.wm(this.fb, vB, 2)) == null ? 0 : _.Q(b, 2)) a["*"] = {
            Uf: !0
        };
        b = new _.B.Set;
        for (var c = _.A(_.Uj(this.fb, uB, 1, _.Wj())), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            for (var e = _.A([_.u(d, 2), _.u(d, 1)].filter(function(q) {
                    return !!q
                })), f = e.next(); !f.done; f = e.next()) a[f.value] = {
                Uf: _.Q(d, 3)
            };
            d = _.A(Iu(d, 4));
            for (e = d.next(); !e.done; e = d.next()) b.add(e.value)
        }
        this.Nc.G(a);
        this.j.G([].concat(_.aj(b)));
        var h, k;
        a = (h = _.wm(this.fb, vB, 2)) == null ? void 0 : (k = _.wm(h, oB, 1)) == null ? void 0 : _.Uj(k, nB, 1, _.Wj(_.om));
        this.A.Cb((a == null ? 0 : a.length) ? a : null);
        var l;
        this.Lc.G(!((l = _.wm(this.fb, vB, 2)) == null || !_.Q(l, 4)));
        var m;
        this.zd.G(!((m = _.wm(this.fb, vB, 2)) == null || !_.Q(m, 5)));
        var n, p;
        h = (n = _.wm(this.fb, vB, 2)) == null ? void 0 : (p = _.wm(n, oB, 3)) == null ? void 0 : _.Uj(p, nB, 1, _.Wj(_.om));
        this.F.Cb((h == null ? 0 : h.length) ? h : null)
    };
    nR.prototype.J = function(a) {
        this.l(a)
    };
    nR.prototype.l = function() {
        this.Nc.G({});
        this.j.G([]);
        this.A.ca();
        this.Lc.G(!1);
        this.zd.G(!1);
        this.F.ca()
    };
    var oR = function(a, b, c, d) {
        Y.call(this, a, 980);
        this.Jb = b;
        this.output = new at;
        this.j = X(this, c);
        this.A = X(this, d)
    };
    _.R(oR, Y);
    oR.prototype.g = function() {
        (_.F = _.x(Object, "entries").call(Object, this.j.value), _.x(_.F, "find")).call(_.F, function(c) {
            var d = _.A(c);
            c = d.next().value;
            d = d.next().value;
            return c !== "*" && (d == null ? void 0 : d.Uf)
        }) && (this.Jb.L = !0);
        Sn(25, this.context);
        for (var a = _.A(this.A.value), b = a.next(); !b.done; b = a.next()) hh(b.value);
        this.output.notify()
    };
    var pR = function(a, b, c, d) {
        Y.call(this, a, 931);
        this.j = HM(this, b);
        this.nd = c;
        this.Mc = d
    };
    _.R(pR, Y);
    pR.prototype.g = function() {
        var a = this.j.value,
            b = new _.B.Map;
        this.nd.G(new _.B.Map);
        if (a) {
            var c;
            a = _.A((c = this.j.value) != null ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = _.Uj(d, mB, 1, _.Wj());
                c = _.Uf(c[0], 1, 0) === 1 ? dA(c[0]) : eA(c[0], cA);
                d = _.ig(d, 2);
                var e = void 0;
                b.set(c, Math.min((e = b.get(c)) != null ? e : Number.MAX_VALUE, d))
            }
        }
        this.Mc.G(b)
    };
    pR.prototype.l = function() {
        this.nd.G(new _.B.Map);
        this.Mc.G(new _.B.Map)
    };
    var qR = function(a, b, c) {
        Y.call(this, a, 981);
        this.A = W(this);
        this.F = HM(this, b);
        this.j = c
    };
    _.R(qR, Y);
    qR.prototype.g = function() {
        var a = new _.B.Map,
            b, c = _.A((b = this.F.value) != null ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = _.Uj(b, mB, 1, _.Wj());
            d = _.Uf(d[0], 1, 0) === 1 ? dA(d[0]) : eA(d[0], cA);
            a.set(d, _.ig(b, 2))
        }
        this.A.G(a);
        this.j.G(new dB)
    };
    qR.prototype.l = function() {
        this.A.G(new _.B.Map);
        var a = this.j,
            b = a.G;
        var c = new dB;
        c = _.ur(c, 1, 2);
        b.call(a, c)
    };
    var rR = di(1264, function(a, b) {
        b.R.log(576944485, function() {
            var c, d = Lq(Mq(Nq(Oq(Pq(new Qq, b.pvsid), b.La), b.Ba), _.Jf())),
                e = new Uq,
                f = new UF,
                h = (c = a.global.installedModules) != null ? c : [];
            c = _.le(f, 1, h, _.Vc);
            e = _.vl(e, 7, Xq, c);
            return _.ol(d, 7, e)
        }, {
            bb: _.yh(OG)
        });
        return {}
    }, {});
    var sR = function(a, b, c, d, e, f) {
        Y.call(this, a, 976);
        this.nextFunction = d;
        this.j = e;
        this.requestBidsConfig = f;
        JM(this, b);
        JM(this, c)
    };
    _.R(sR, Y);
    sR.prototype.g = function() {
        var a;
        (a = this.nextFunction) == null || a.apply(this.j, [this.requestBidsConfig])
    };
    var tR = function(a, b, c, d, e, f) {
        Y.call(this, a, 975);
        this.Bc = b;
        this.yc = c;
        this.j = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.output = new at
    };
    _.R(tR, Y);
    tR.prototype.g = function() {
        vq(this.pbjs, this.Bc, this.yc, this.j, this.requestBidsConfig);
        this.output.notify()
    };
    tR.prototype.l = function() {
        this.output.notify()
    };
    var uR = function(a, b, c, d, e, f) {
        Y.call(this, a, 1100);
        this.pbjs = b;
        this.A = c;
        this.j = d;
        this.F = e;
        this.requestBidsConfig = f;
        this.output = new at
    };
    _.R(uR, Y);
    uR.prototype.g = function() {
        var a, b, c = (b = (a = this.A) == null ? void 0 : a.get("*")) != null ? b : _.yh(RG);
        if (c) this.uc(c);
        else {
            var d, e, f, h;
            a = (h = (f = (d = this.requestBidsConfig) == null ? void 0 : d.adUnits) != null ? f : (e = this.pbjs) == null ? void 0 : e.adUnits) != null ? h : [];
            d = _.A(a);
            for (e = d.next(); !e.done; e = d.next())
                if (e = e.value.code) {
                    a = h = f = void 0;
                    if ((b = this.A) == null) b = void 0;
                    else {
                        c = b.get;
                        if (_.I(QG)) {
                            var k = e.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                            k = (k == null ? void 0 : k.length) !== 3 ? e : "/" + k[1] + k[2]
                        } else k = e;
                        b = c.call(b, k)
                    }
                    b = (f = (h = b) != null ? h : (a = this.A) == null ? void 0 : a.get(_.ph(e))) != null ? f : 0;
                    this.uc(b)
                }
        }
        this.output.notify()
    };
    uR.prototype.uc = function(a) {
        var b;
        (b = this.j) != null && _.dk(b, 2, this.F);
        if (a) {
            var c;
            (c = this.j) == null || _.ur(c, 1, 1);
            var d;
            (d = this.j) != null && _.al(d, 3, a);
            if (!this.F) {
                this.requestBidsConfig.timeout = a;
                var e, f, h;
                b = (h = (f = (e = this.pbjs).getConfig) == null ? void 0 : f.call(e).s2sConfig) != null ? h : [];
                if (Array.isArray(b))
                    for (e = _.A(b), f = e.next(); !f.done; f = e.next()) f.value.timeout = a;
                else b.timeout = a;
                var k, l;
                (l = (k = this.pbjs).setConfig) == null || l.call(k, {
                    bidderTimeout: a
                })
            }
        }
    };
    uR.prototype.l = function() {
        this.output.notify()
    };
    var vR = function(a, b, c, d, e, f, h, k) {
        _.V.call(this);
        this.g = a;
        this.Bc = b;
        this.yc = c;
        this.l = d;
        this.j = e;
        this.B = f;
        this.H = h;
        this.pbjs = k
    };
    _.R(vR, _.V);
    vR.prototype.push = function(a) {
        var b = a.context;
        var c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new jk;
            _.Gr(this, d);
            var e = new uR(this.g, this.pbjs, this.j, this.B, this.H, a),
                f = new tR(this.g, this.Bc, this.yc, this.l, this.pbjs, a);
            J(d, e);
            J(d, f);
            J(d, new sR(this.g, f.output, e.output, c, b, a));
            d.run()
        }
    };
    var xq = function(a, b) {
        this.push = N(a, 932, function(c) {
            b.push(c)
        })
    };
    var wR = function(a, b, c, d, e, f, h, k, l, m, n) {
        Y.call(this, a, 951);
        this.C = window;
        this.I = X(this, b);
        this.A = HM(this, d);
        this.F = X(this, e);
        this.U = X(this, f);
        this.j = HM(this, h);
        this.ba = HM(this, k);
        this.K = X(this, l);
        JM(this, c);
        this.cg = m != null ? m : W(this);
        this.dg = n != null ? n : W(this)
    };
    _.R(wR, Y);
    wR.prototype.g = function() {
        var a = !!Mo().pbjs_hooks;
        this.dg.G(a);
        this.cg.Cb(a ? null : _.Jf());
        var b, c = (b = this.A.value) == null ? void 0 : b.size,
            d;
        b = ((d = this.j.value) == null ? void 0 : d.size) || _.yh(RG);
        d = this.I.value;
        var e, f = (e = Mo().pbjs_hooks) != null ? e : [];
        e = new vR(this.context, this.A.value, this.F.value, this.U.value, this.j.value, this.ba.value, this.K.value, d);
        _.Gr(this, e);
        f = _.A(f);
        for (var h = f.next(); !h.done; h = f.next()) e.push(h.value);
        if (c || b || a) Mo().pbjs_hooks = yq(this.context, e);
        !c && !b || a || wq(d, this.C)
    };
    var xR = function(a, b, c) {
        Y.call(this, a, 966);
        this.C = b;
        this.jc = c
    };
    _.R(xR, Y);
    xR.prototype.g = function() {
        var a = this,
            b = Vh(this.C);
        if (b) this.jc.G(b);
        else if (b = Object.getOwnPropertyDescriptor(this.C, "_pbjsGlobals"), !b || b.configurable) {
            var c = null;
            Object.defineProperty(this.C, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = Vh(a.C)) && a.jc.G(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    xR.prototype.l = function() {};
    var Dq = function(a, b, c, d, e) {
        Y.call(this, a, 1146, _.yh(AJ));
        this.Jb = b;
        this.C = d;
        this.j = e;
        this.A = IM(this, c)
    };
    _.R(Dq, Y);
    Dq.prototype.g = function() {
        var a = this.A.value,
            b = new jk;
        _.Gr(this, b);
        var c = new xR(this.context, this.C, this.j.jc);
        J(b, c);
        _.yh(OG) && b.g(rR, {
            global: c.jc
        }, this.context);
        if (a) {
            a = new nR(this.context, a, this.j.Nc, this.j.Lc, this.j.zd);
            J(b, a);
            var d = new oR(this.context, this.Jb, a.Nc, a.j);
            J(b, d);
            var e = new pR(this.context, a.A, this.j.nd, this.j.Mc);
            J(b, e);
            var f = new qR(this.context, a.F, this.j.vg);
            J(b, f);
            c = new wR(this.context, c.jc, d.output, e.Mc, this.j.Lc, e.nd, f.A, f.j, a.zd, this.j.cg, this.j.dg);
            J(b, c)
        } else yR(this);
        b.run()
    };
    var yR = function(a) {
        a.j.Nc.G({});
        a.j.Mc.G(new _.B.Map);
        a.j.Lc.G(!1);
        a.j.nd.G(new _.B.Map);
        a.j.cg.ca();
        a.j.dg.G(!1);
        a.j.vg.G(new dB);
        a.j.zd.G(!1)
    };
    Dq.prototype.J = function(a) {
        this.l(a)
    };
    Dq.prototype.l = function() {
        yR(this)
    };
    var zR = function(a, b, c, d, e, f, h) {
        Y.call(this, a, 920);
        this.P = b;
        this.W = c;
        this.pbjs = f;
        this.A = h;
        this.j = W(this);
        this.F = [];
        try {
            var k = new RegExp(Dh(JG))
        } catch (l) {
            Gl(this.context, 920, l), k = null
        }
        this.fa = k;
        this.U = X(this, d);
        this.K = HM(this, e.Mc);
        this.I = X(this, e.Lc);
        this.ia = X(this, e.nd);
        this.ba = HM(this, e.vg)
    };
    _.R(zR, Y);
    zR.prototype.g = function() {
        for (var a = this, b = new _.B.Map, c = !1, d = _.A(this.U.value), e = d.next(), f = {}; !e.done; f = {
                ei: void 0,
                mi: void 0
            }, e = d.next()) {
            e = e.value;
            for (var h = {}, k = _.A(dm(this.W[e.getDomId()])), l = k.next(); !l.done; l = k.next()) l = l.value, h[_.u(l, 1)] = km(l, _.om);
            f.ei = _.yh(KG);
            var m = l = k = void 0,
                n = void 0,
                p = void 0,
                q = void 0;
            (h = Zh(this.pbjs, {
                Ed: e.getDomId(),
                adUnitCode: e.getAdUnitPath()
            }, {
                Ue: h,
                Bc: (p = (k = this.K) == null ? void 0 : k.value) != null ? p : void 0,
                yc: (l = this.I) == null ? void 0 : l.value,
                Sh: (m = this.ia) == null ? void 0 : m.value,
                ug: (q = (n = this.ba) == null ? void 0 : n.value) != null ? q : void 0,
                Bj: _.yh(NG),
                zi: _.yh(GG),
                Ii: _.yh(IG),
                Hi: _.yh(HG),
                lj: _.yh(MG),
                kj: _.yh(LG),
                Gh: f.ei ? function(t) {
                    return function(w) {
                        return void AR(a, w, t.ei)
                    }
                }(f) : void 0
            })) ? (c = !0, b.set(e, h)) : (h === null && this.F.push(e), b.set(e, new kB));
            f.mi = e.getDomId() + e.getAdUnitPath();
            cM.has(f.mi) || _.Jp(e, function(t) {
                return function() {
                    return cM.delete(t.mi)
                }
            }(f))
        }
        c ? (this.A.Cb(b), this.j.G(this.F)) : (this.A.ca(), this.j.ca())
    };
    zR.prototype.J = function(a) {
        this.l(a)
    };
    zR.prototype.l = function(a) {
        this.P.error(JP(a.message));
        this.A.ca();
        this.j.ca()
    };
    var AR = function(a, b, c) {
        var d;
        var e = b.ad;
        (d = b.adId) && e && a.context.R.log(576944485, function() {
            var f;
            if ((f = a.fa) == null ? 0 : f.test(e)) {
                f = Lq(Mq(Nq(Oq(Pq(new Qq, a.context.pvsid), a.context.La), a.context.Ba), _.Jf()));
                var h = new Uq;
                var k = new VF;
                k = _.uq(k, 1, d);
                h = _.vl(h, 6, Xq, k);
                f = _.ol(f, 7, h)
            } else f = null;
            return f
        }, {
            bb: c
        })
    };
    var BR = function(a, b, c, d) {
        Y.call(this, a, 1019);
        this.W = c;
        this.pbjs = d;
        this.j = HM(this, b)
    };
    _.R(BR, Y);
    BR.prototype.g = function() {
        CR(this)
    };
    var CR = function(a) {
        if (!(Math.random() >= _.yh(PG))) {
            var b = (a.j.value || []).filter(function(l) {
                return dm(a.W[l.getDomId()]).some(function(m) {
                    return Xj(m, 1) === "hb_pb"
                })
            });
            if (b.length) {
                var c, d, e, f, h, k = ((c = a.pbjs) == null ? 0 : (d = c.adUnits) == null ? 0 : d.length) ? [].concat(_.aj(new _.B.Set((e = a.pbjs) == null ? void 0 : e.adUnits.map(function(l) {
                    return l.code
                })))) : _.x(Object, "keys").call(Object, ((f = a.pbjs) == null ? void 0 : (h = f.getAdserverTargeting) == null ? void 0 : h.call(f)) || {});
                c = new lp("haux");
                np(c, "ius", b.map(function(l) {
                    return l.getAdUnitPath()
                }).join("~"));
                np(c, "dids", b.map(function(l) {
                    return l.getDomId()
                }).join("~"));
                np(c, "paucs", k.join("~"));
                mp(c, a.context);
                pp(c)
            }
        }
    };
    var Fq = function(a, b, c, d, e, f, h, k, l) {
        Y.call(this, a, 1153);
        this.P = b;
        this.X = c;
        this.W = d;
        this.networkCode = e;
        this.I = f;
        this.Kc = h;
        this.j = l;
        this.K = X(this, h.Nc);
        this.A = new zM(h.jc);
        k && (this.F = HM(this, k))
    };
    _.R(Fq, Y);
    Fq.prototype.g = function() {
        var a, b = (a = this.A) == null ? void 0 : a.value;
        if (a = DR(this)) b != null && b.libLoaded ? typeof b.getEvents !== "function" ? (this.P.error(IP()), a = !1) : a = !0 : a = !1;
        if (a) {
            a = new jk;
            _.Gr(this, a);
            var c = new zR(this.context, this.P, this.W, this.I, this.Kc, b, this.j.li);
            J(a, c);
            J(a, new BR(this.context, c.j, this.W, b));
            a.run()
        } else this.j.li.ca()
    };
    var DR = function(a) {
        if (_.Q(a.X, 38)) return !0;
        var b;
        if ((b = a.F) == null ? 0 : b.value) return !0;
        var c = a.K.value;
        if (!c) return !1;
        var d;
        return !((d = c["*"]) == null || !d.Uf) || a.networkCode.split(",").some(function(e) {
            var f;
            return !((f = c[e]) == null || !f.Uf)
        })
    };
    var ER = function(a, b, c, d, e) {
        Y.call(this, a, 982);
        this.Db = b;
        this.pb = c;
        this.j = d;
        this.bg = e
    };
    _.R(ER, Y);
    ER.prototype.g = function() {
        for (var a = this, b = _.A(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), c = b.next(), d = {}; !c.done; d = {
                zf: void 0,
                Jh: void 0
            }, c = b.next()) d.zf = c.value, d.Jh = function(e) {
            return function(f) {
                if (a.j === f.adId) {
                    var h = new lp("hbm_brt");
                    mp(h, a.context);
                    np(h, "et", e.zf);
                    np(h, "sf", a.Db);
                    np(h, "qqid", a.pb);
                    var k, l, m;
                    np(h, "bc", String((m = (l = f.bidderCode) != null ? l : (k = f.bid) == null ? void 0 : k.bidder) != null ? m : ""));
                    pp(h)
                }
            }
        }(d), (0, this.bg.onEvent)(d.zf, d.Jh), _.Jp(this, function(e) {
            return function() {
                return void Il(a.context, a.id, function() {
                    var f, h;
                    return void((h = (f = a.bg).offEvent) == null ? void 0 : h.call(f, e.zf, e.Jh))
                }, !0)
            }
        }(d))
    };
    ER.prototype.l = function() {};
    var FR = function(a, b, c, d, e) {
        Y.call(this, a, 1134);
        this.A = b;
        this.Db = c;
        this.pb = d;
        this.j = new zM(e)
    };
    _.R(FR, Y);
    FR.prototype.g = function() {
        var a;
        if (this.A && (a = this.j.value) != null && a.onEvent) {
            a = new jk;
            var b = new ER(this.context, this.Db, this.pb, this.A, this.j.value);
            J(a, b);
            a.run()
        }
    };
    var JR = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.M = c;
            this.g = new _.B.Map;
            this.o = new _.B.Map;
            this.timer = _.fh(El);
            gO() && (_.tf(window, "DOMContentLoaded", Cl(a, 334, function() {
                for (var f = _.A(e.g), h = f.next(); !h.done; h = f.next()) {
                    var k = _.A(h.value);
                    h = k.next().value;
                    k = k.next().value;
                    GR(e, h, k) && e.g.delete(h)
                }
            })), b.listen(yO, function(f) {
                var h = f.detail;
                f = h.ki;
                h = h.W;
                return void HR(e, IR(d, f), fv(h, 20))
            }), b.listen(zO, function(f) {
                var h = f.detail;
                f = h.ki;
                h = h.W;
                f = IR(d, f);
                h = fv(h, 20);
                var k = e.o.get(f);
                k != null ? iO(k, h) : HR(e, f, h)
            }))
        },
        HR = function(a, b, c) {
            GR(a, b, c) ? a.g.delete(b) : (a.g.set(b, c), _.Jp(b, function() {
                return a.g.delete(b)
            }))
        },
        GR = function(a, b, c) {
            var d = Vm(b);
            if ((d == null ? void 0 : d.nodeName) !== "DIV") return !1;
            d = new fO({
                C: window,
                timer: a.timer,
                Yb: d,
                Ib: function(e) {
                    return void Gl(a.context, 336, e)
                },
                no: _.I(rK)
            });
            if (!d.o) return !1;
            iO(d, c);
            a.o.set(b, d);
            Rr(a.M, b, function() {
                return void a.o.delete(b)
            });
            return !0
        };
    var KR = function(a, b, c, d, e) {
        Y.call(this, a, 1058);
        this.C = b;
        this.aa = c;
        this.output = GM(this);
        d && (this.j = HM(this, d.yd));
        JM(this, e)
    };
    _.R(KR, Y);
    KR.prototype.g = function() {
        var a;
        nh(this.C.isSecureContext, this.C, this.C.document) && (a = this.j) != null && a.value && !_.I(LI) && Ug(this.aa) && (a = this.j.value, a({
            message: "goog:spam:client_age",
            pvsid: this.context.pvsid
        }));
        this.output.notify()
    };
    var LR = function(a, b, c) {
        Y.call(this, a, 1199);
        this.j = c;
        this.A = HM(this, b)
    };
    _.R(LR, Y);
    LR.prototype.g = function() {
        var a = this.A.value;
        a && (a = _.sQ(this.j, a.getSlotElementId()), _.dk(a, 30, !0))
    };
    var MR = function(a, b, c, d, e, f, h, k) {
        Y.call(this, a, 1109);
        this.da = c;
        this.X = d;
        this.j = e;
        this.F = f;
        this.I = h;
        this.A = k;
        this.output = W(this);
        this.K = HM(this, b)
    };
    _.R(MR, Y);
    MR.prototype.g = function() {
        var a = this,
            b = this.K.value;
        b && (this.A.push(function() {
            b.addService(a.j)
        }), jD(this.da, function() {
            a.I();
            a.F(b);
            _.Q(a.X, 4) && a.j.refresh([b])
        }))
    };
    var NR = {},
        Sq = (NR[64] = LP, NR[134217728] = MP, NR[32768] = NP, NR[536870912] = OP, NR[8] = PP, NR[512] = QP, NR[1048576] = RP, NR[4194304] = TP, NR);
    var er = function(a) {
        return Bl(a.getAdUnitPath()) === "22639388115"
    };
    var OR = function(a, b, c, d, e, f) {
        Y.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.Ab = d;
        this.A = e;
        this.P = f;
        this.output = W(this);
        this.j = W(this)
    };
    _.R(OR, Y);
    OR.prototype.g = function() {
        var a = tr(this.context, this.P, this.A, {
            ij: this.format,
            adUnitPath: this.adUnitPath,
            Ab: this.Ab
        });
        this.j.Cb(a);
        this.output.Cb(a ? a.g : null)
    };
    var PR = function(a, b, c, d) {
        Y.call(this, a, 1111);
        this.j = c;
        this.A = d;
        this.F = HM(this, b)
    };
    _.R(PR, Y);
    PR.prototype.g = function() {
        var a = this.F.value;
        a && (a = _.sQ(this.j, a.getSlotElementId()), gk(a, 27, EB, this.A))
    };
    var QR = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w) {
        jk.call(this);
        this.context = a;
        this.da = b;
        this.adUnitPath = c;
        this.format = d;
        this.Ab = e;
        this.ia = f;
        this.ba = h;
        this.fa = k;
        this.U = l;
        this.X = m;
        this.B = n;
        this.ka = p;
        this.P = q;
        this.sa = t;
        this.K = w;
        a = J(this, new OR(this.context, this.adUnitPath, this.format, this.Ab, this.ka, this.P));
        this.K && J(this, new PR(this.context, a.output, this.B, this.K));
        this.sa && J(this, new LR(this.context, a.output, this.B));
        J(this, new MR(this.context, a.output, this.da, this.X, this.ia, this.ba, this.fa, this.U));
        this.j = {
            wq: a.j
        }
    };
    _.R(QR, jk);
    var ex = function(a, b, c, d, e, f, h, k, l) {
        Y.call(this, a, 1198);
        this.da = b;
        this.googletag = c;
        this.X = d;
        this.j = e;
        this.A = f;
        this.P = h;
        this.Md = k;
        this.F = l
    };
    _.R(ex, Y);
    ex.prototype.g = function() {
        for (var a = this, b = _.A(this.F), c = b.next(); !c.done; c = b.next()) {
            var d = c.value;
            c = d.getAdUnitPath();
            d = _.Uf(d, 2, 0);
            c && d && (this.Md.add(Bl(c)), c = new QR(this.context, this.da, c, d, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, this.X, this.j, this.A, this.P, !0), c.run(), _.Gr(this, c))
        }
    };
    var Sv = function(a, b) {
        Y.call(this, a, 1110);
        this.C = b;
        this.output = W(this)
    };
    _.R(Sv, Y);
    Sv.prototype.g = function() {
        var a = this.C;
        a = _.I(NI) && a.credentialless !== void 0 && (_.I(OI) || a.crossOriginIsolated);
        this.output.G(a)
    };
    var RR = function(a, b, c, d, e, f) {
        Y.call(this, a, 935);
        this.M = b;
        this.O = c;
        this.da = d;
        this.output = GM(this);
        this.j = X(this, e);
        JM(this, f)
    };
    _.R(RR, Y);
    RR.prototype.g = function() {
        var a = this.O,
            b = a.X;
        a = a.W;
        for (var c = _.A(this.j.value), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            d = e;
            var f = b;
            e = a[e.getDomId()];
            var h = this.M,
                k = this.da;
            vr(e, f) && !h.cd(d) && wr(d, k, e, f)
        }
        this.output.notify()
    };
    var SR = di(864, function(a, b, c, d) {
        a = _.A(a.V);
        for (var e = a.next(); !e.done; e = a.next())
            if (e = e.value, _.iv(b, e)) {
                var f = c,
                    h = f.X;
                f = f.W[e.getDomId()];
                vr(f, h) && wr(e, d, f, h);
                KO(b, e);
                var k = void 0,
                    l = void 0;
                (k = (l = Hq(f, 10)) != null ? l : _.Q(h, 11)) != null && k && wr(e, d, f, h)
            }
        return {}
    }, {});
    var TR = di(1260, function(a) {
        var b = a.Pn,
            c = a.Vl;
        a = a.maxHeight;
        if (c && a) {
            b = c.width;
            c = c.height;
            var d = "background-color:#ddd;color:#000;border:1px solid #f00;margin:0;width:" + (b - 2 + "px;");
            a = {
                kind: 0,
                qb: "  <html>    <head>  <style>    @media (min-height: " + (c + "px) {      #collapsedDiv {        display:none      }      #expandedDiv {        display:block      }    }    @media (max-height: " + (c - 2 + 'px) {      #collapsedDiv {         display:block      }      #expandedDiv {        display:none      }    }  </style></head>    <body>      <div id="collapsedDiv" style="')) + (d + "height:" + (c - 2) + 'px;">        <p>Collapsed State</p>        <p>Rendered size:') + (b + "x" + c + '</p>      </div>      <div id="expandedDiv" style="') + (d + "height:" + (a - 2) + 'px;">        <p>Expanded State</p>        <p>Rendered size:') + (b + "x" + a + "</p>      </div>    </body></html>")
            }
        } else a = b;
        return {
            wa: a
        }
    }, {
        wa: void 0
    });
    var UR = di(1261, function(a, b) {
        var c = a.size;
        a = a.maxHeight;
        b = b.Ua;
        if (a) {
            var d = new RB;
            a = _.Yq(d, 1, a);
            a = _.ol(b, 16, a);
            a = _.Yq(a, 4, c.width);
            _.Yq(a, 5, c.height)
        }
        return {
            Ua: b
        }
    }, {
        Ua: void 0
    });
    var VR = di(1262, function(a, b) {
        var c = b.Ho;
        b = b.C;
        /(?:.*)collapsibleBannerDemo(?:.*)/.exec(c) ? (a = /(?:.*)height=([0-9]+)(?:;.*|$)/.exec(c), a = {
            size: new _.Nm(b.document.documentElement.clientWidth, 100),
            maxHeight: a ? Number(a[1]) : Math.floor(b.innerHeight / 2)
        }) : a = {
            size: a.vd,
            maxHeight: null
        };
        return a
    }, {
        size: void 0,
        maxHeight: void 0
    });
    var sw = function(a, b, c, d, e) {
        jk.call(this);
        c ? (a = this.g(VR, {
            vd: e
        }, {
            C: a,
            Ho: b
        }), this.g(UR, {
            size: a.size,
            maxHeight: a.maxHeight
        }, {
            Ua: c
        }), this.B = {
            Ia: this.g(TR, {
                Pn: d,
                Vl: a.size,
                maxHeight: a.maxHeight
            }).wa,
            Ka: a.size
        }) : this.B = {
            Ia: d,
            Ka: e
        }
    };
    _.R(sw, jk);
    var WR = ai(1238, function(a, b, c, d) {
        var e, f, h, k, l, m, n, p, q, t, w;
        return _.vf(function(v) {
            e = a;
            f = e.V;
            h = new _.B.Set;
            l = k = !1;
            m = _.yh(RI);
            n = _.yh(TI);
            p = n > 0 && c.Gb < 1 / n;
            q = _.Jf();
            t = new _.B.Map;
            w = new _.B.Promise(function(y) {
                for (var z = new IntersectionObserver(Cl(c, 1239, function(L) {
                        k || (p && c.va.Pa.Sa.sb.dj.Vm.lc({
                            oc: _.Jf() - q
                        }), k = !0);
                        l ? z.disconnect() : (L.forEach(function(S) {
                            var M;
                            (M = t.get(S.target)) == null || M.forEach(function(da) {
                                S.intersectionRatio >= m ? h.add(da) : h.delete(da)
                            })
                        }), y(h))
                    }), {
                        threshold: [m]
                    }), G = _.A(f), C = G.next(); !C.done; C = G.next()) {
                    C = C.value;
                    var H = _.I(UI) ? xr(Vm(C, b)) : Vm(C, b);
                    H && (t.has(H) ? t.get(H).add(C) : t.set(H, new _.B.Set([C])), z.observe(H))
                }
            });
            _.Jp(d, function() {
                l = !0
            });
            return v.return(_.B.Promise.race([w, kD(_.yh(SI), null)]).then(function(y) {
                p && c.va.Pa.Sa.sb.dj.bm.lc({
                    oc: _.Jf() - q,
                    didTimeout: y === null
                });
                return y
            }))
        })
    });
    var YR = function(a, b, c) {
        Y.call(this, a, 1208);
        this.Sg = b;
        this.C = c;
        this.output = new at
    };
    _.R(YR, Y);
    YR.prototype.g = function() {
        var a, b = (a = this.Sg) == null ? void 0 : _.wm(a, fC, 1);
        if (b) {
            a = new tL(this.C);
            var c = _.ig(b, 2) - Date.now() / 1E3;
            c = {
                He: Math.max(c, 0),
                path: _.u(b, 3),
                domain: _.u(b, 4),
                hg: !1
            };
            bh("__eoi", b.getValue(), c, a.g)
        }
        this.output.notify()
    };
    var Ir = ai(879, function(a, b) {
        var c;
        return _.vf(function(d) {
            return ((c = a.Id) != null ? c : b.Ef.Id()) ? d.return(LK(b.Ef)) : d.return(null)
        })
    });
    var Hr = function(a, b, c, d) {
        Y.call(this, a, 896);
        this.Ef = b;
        this.Zc = d;
        this.Lf = W(this);
        c && JM(this, c)
    };
    _.R(Hr, Y);
    Hr.prototype.g = function() {
        this.Lf.G(this.Ef.Id(this.Zc === ".google.cn"))
    };
    var Xv = function(a, b) {
        Y.call(this, a, 1018);
        this.Gd = GM(this);
        this.j = HM(this, b)
    };
    _.R(Xv, Y);
    Xv.prototype.g = function() {
        var a, b, c;
        if ((a = this.j.value) == null) a = void 0;
        else {
            var d;
            (b = _.wm(a, DK, 5)) == null ? d = void 0 : d = Iu(b, 1);
            a = d
        }
        a = _.A((c = a) != null ? c : []);
        for (c = a.next(); !c.done; c = a.next()) hh(c.value);
        this.Gd.notify()
    };
    var Yv = function(a, b) {
        Y.call(this, a, 1070);
        this.j = W(this);
        this.A = HM(this, b)
    };
    _.R(Yv, Y);
    Yv.prototype.g = function() {
        var a, b = (a = this.A.value) == null ? void 0 : _.wm(a, DK, 5);
        if (b) {
            a = [];
            for (var c = _.A(_.ce(b, 2, xe, 1, void 0, void 0, 4096)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new EB;
                var f = new DB;
                e = _.ek(f, 1, Ic(e));
                d = _.ol(d, 2, e);
                Tr(b, 3) != null && (e = new CB, e = _.ur(e, 1, 1), f = _.Zz(b, 3), e = _.al(e, 2, f), _.ol(d, 3, e));
                a.push(d)
            }
            this.j.G(a)
        } else this.j.G([])
    };
    var ZR = function(a, b, c, d) {
        Y.call(this, a, 1016);
        this.output = W(this);
        this.A = HM(this, b);
        this.j = HM(this, c);
        this.F = KM(this, [b, d])
    };
    _.R(ZR, Y);
    ZR.prototype.g = function() {
        if (this.j.value) {
            var a = this.A.value || this.F.value;
            a && $R(this, a) ? this.output.G(a) : this.output.ca()
        } else this.output.ca()
    };
    ZR.prototype.J = function(a) {
        this.l(a)
    };
    ZR.prototype.l = function() {
        this.output.ca()
    };
    var $R = function(a, b) {
        return zB(a.j.value).some(function(c) {
            return _.u(c, 1) === b
        })
    };
    var aS = di(1016, function(a) {
        var b = a.Cc,
            c = a.um;
        if (!b) return {
            networkCode: null
        };
        var d, e = (d = a.zc) != null ? d : c;
        return zB(b).some(function(f) {
            return _.u(f, 1) === e
        }) ? {
            networkCode: e
        } : {
            networkCode: null
        }
    }, {
        networkCode: void 0
    }, function() {
        return {
            networkCode: null
        }
    });
    var bS = di(1056, function(a) {
        return {
            networkCode: Bl(a.Xa.getAdUnitPath())
        }
    }, {
        networkCode: void 0
    }, function() {
        return {
            networkCode: null
        }
    });
    var cS = di(1015, function(a) {
        if (!a.Cc) return {
            zc: null
        };
        a = zB(a.Cc);
        if (!a.length) return {
            zc: null
        };
        var b = a[0];
        if ((_.F = [2, 3], _.x(_.F, "includes")).call(_.F, _.Uf(b, 3, 0))) {
            if (a.length !== 1) throw Error("list length is not 1");
            return {
                zc: _.u(b, 1)
            }
        }
        return {
            zc: null
        }
    }, {
        zc: void 0
    }, function() {
        return {
            zc: null
        }
    });
    var dS = function(a, b) {
        Y.call(this, a, 1015);
        this.j = W(this);
        this.A = HM(this, b)
    };
    _.R(dS, Y);
    dS.prototype.g = function() {
        if (this.A.value)
            if (zB(this.A.value).length) {
                var a = zB(this.A.value)[0];
                (_.F = [2, 3], _.x(_.F, "includes")).call(_.F, _.Uf(a, 3, 0)) ? this.j.G(_.u(a, 1)) : this.j.ca()
            } else this.j.ca();
        else this.j.ca()
    };
    dS.prototype.J = function(a) {
        this.l(a)
    };
    dS.prototype.l = function() {
        this.j.ca()
    };
    var eS = ai(1017, function(a, b) {
        var c;
        return _.vf(function(d) {
            c = new _.B.Promise(function(e) {
                if (a.networkCode) {
                    var f = XK(b, a.networkCode, function(h) {
                        h || fg(f.C);
                        e()
                    });
                    f.start(_.I(cJ))
                } else e()
            });
            return d.return(c)
        })
    }, function() {});
    var fS = function(a, b, c) {
        Y.call(this, a, 1017);
        this.C = c;
        this.output = GM(this);
        this.j = HM(this, b)
    };
    _.R(fS, Y);
    fS.prototype.g = function() {
        var a = this;
        if (this.j.value) {
            var b = XK(this.C, this.j.value, function(c) {
                c || fg(b.C);
                a.output.notify()
            });
            b.start(_.I(cJ))
        } else this.output.notify()
    };
    fS.prototype.J = function(a) {
        this.l(a)
    };
    fS.prototype.l = function() {
        this.output.notify()
    };
    var gS = function(a, b) {
        Y.call(this, a, 1056);
        this.output = W(this);
        this.j = X(this, b)
    };
    _.R(gS, Y);
    gS.prototype.g = function() {
        var a = Bl(this.j.value.getAdUnitPath());
        this.output.G(a)
    };
    gS.prototype.J = function(a) {
        this.l(a)
    };
    gS.prototype.l = function() {
        this.output.ca()
    };
    var Wv = function(a, b, c, d) {
        Y.call(this, a, 906, _.yh(BJ));
        this.bc = GM(this);
        if (b === b.top) {
            var e = new jk;
            _.Gr(this, e);
            d = new rs(a, d, yO, function(h) {
                return h.detail.W
            });
            J(e, d);
            if (_.I(GJ)) a = e.g(cS, {
                Cc: c
            }).zc, d = e.g(bS, {
                Xa: d.output
            }).networkCode, d = new BM([a, d]), c = e.g(aS, {
                Cc: c,
                zc: a,
                um: d
            }).networkCode, b = e.l(eS, {
                networkCode: c
            }, b), DM(this.B, b.complete, !0);
            else {
                var f = new dS(a, c);
                J(e, f);
                d = new gS(a, d.output);
                J(e, d);
                c = new ZR(a, f.j, c, d.output);
                J(e, c);
                b = new fS(this.context, c.output, b);
                J(e, b);
                DM(this.B, b.output, !0)
            }
            e.run()
        } else this.bc.notify()
    };
    _.R(Wv, Y);
    Wv.prototype.g = function() {
        this.bc.notify()
    };
    Wv.prototype.J = function(a) {
        this.l(a)
    };
    Wv.prototype.l = function() {
        this.bc.notify()
    };
    var Ow = function(a, b, c, d, e) {
        Y.call(this, a, 934);
        this.C = b;
        this.slotId = c;
        JM(this, d);
        this.j = X(this, e)
    };
    _.R(Ow, Y);
    Ow.prototype.g = function() {
        var a = this;
        this.slotId.listen(as, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if (c.googMsgType === "gpi-uoo") {
                    var d = c.userOptOut;
                    var e = c.clearAdsData;
                    var f = a.j.value,
                        h = new fC;
                    var k = _.uq(h, 1, d ? "1" : "0");
                    var l = _.uq(_.al(k, 2, 2147483647), 3, "/");
                    var m = _.uq(l, 4, a.C.location.hostname);
                    var n = new _.IL(a.C);
                    JL(n, "__gpi_opt_out", m, f);
                    if (d || e) KL(n, "__gads", f), KL(n, "__gpi", f)
                }
            } catch (p) {}
        })
    };
    var hS = function(a, b, c) {
        Y.call(this, a, 944);
        this.C = b;
        this.j = new _.IL(this.C);
        this.A = X(this, c)
    };
    _.R(hS, Y);
    hS.prototype.g = function() {
        var a = this.A.value;
        if ($g(this.j.C) && Ug(a)) {
            var b = _.Tn(this.j, "__gpi_opt_out", a);
            if (b) {
                var c = new fC;
                b = _.uq(c, 1, b);
                b = _.uq(_.al(b, 2, 2147483647), 3, "/");
                b = _.uq(b, 4, this.C.location.hostname);
                JL(this.j, "__gpi_opt_out", b, a)
            }
        }
    };
    var iS = function(a, b, c, d) {
        Y.call(this, a, 821);
        this.aa = b;
        this.Ha = c;
        this.j = X(this, d)
    };
    _.R(iS, Y);
    iS.prototype.g = function() {
        if (Ug(this.aa)) {
            var a = new _.B.Set;
            var b = _.Uj(this.j.value, fC, 14, _.Wj());
            b = _.A(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = (d = hA(c, 5)) != null ? d : 1;
                a.has(e) || (JL(this.Ha, e === 2 ? "__gpi" : "__gads", c, this.aa), a.add(e))
            }
        }
    };
    var jS = function() {
            this.o = [];
            this.hostpageLibraryTokens = [];
            this.g = {}
        },
        Dv = function(a, b) {
            var c, d;
            a = (d = (c = a.g[b]) == null ? void 0 : _.x(c, "values").call(c)) != null ? d : [];
            return [].concat(_.aj(a))
        };
    var kS = function(a, b, c, d) {
        Y.call(this, a, 822);
        this.slotId = b;
        this.ib = c;
        this.j = X(this, d)
    };
    _.R(kS, Y);
    kS.prototype.g = function() {
        var a = _.ce(this.j.value, 23, _.yc, _.Wj());
        a = _.A(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = this.ib;
            if (!_.x(c.o, "includes").call(c.o, b) && (_.F = [1, 2, 3], _.x(_.F, "includes")).call(_.F, b)) {
                var d = ML[b];
                if (d) {
                    var e = b + "_hostpage_library";
                    if (d = _.qp(document, d)) d.id = e
                }
                c.o.push(b);
                e = new NL(b);
                c.hostpageLibraryTokens.push(e);
                c = Mo();
                c.hostpageLibraryTokens || (c.hostpageLibraryTokens = {});
                c.hostpageLibraryTokens[e.g] = e.o
            }
            c = void 0;
            e = this.ib;
            d = this.slotId;
            e.g[b] = (c = e.g[b]) != null ? c : new _.B.Set;
            e.g[b].add(d)
        }
    };
    var Kr = 0;
    var dx = function(a, b, c, d, e, f) {
        Y.call(this, a, 721);
        this.C = b;
        this.Jf = c;
        this.A = X(this, d);
        this.j = X(this, e);
        this.F = X(this, f)
    };
    _.R(dx, Y);
    dx.prototype.g = function() {
        var a = this,
            b, c, d = (b = this.Jf) == null ? void 0 : (c = _.u(b, 1)) == null ? void 0 : c.toUpperCase(),
            e, f;
        b = (e = this.Jf) == null ? void 0 : (f = _.u(e, 2)) == null ? void 0 : f.toUpperCase();
        if (d && b) {
            e = this.A.value;
            f = this.j.value;
            var h = this.F.value,
                k = h.style.height,
                l = h.style.width,
                m = h.style.display,
                n = h.style.position,
                p = Mr(e.id + "_top", d),
                q = Mr(e.id + "_bottom", b);
            _.Qp(q, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            h.appendChild(p);
            h.appendChild(q);
            _.Qp(f, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.Qp(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var t;
            _.Qp(h, {
                position: "relative",
                display: ((t = this.C.screen.orientation) == null ? 0 : t.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            Lp(this, 722, this.C, "orientationchange", function() {
                var w;
                ((w = a.C.screen.orientation) == null ? 0 : w.angle) ? _.Qp(h, {
                    display: "none"
                }): _.Qp(h, {
                    display: "block"
                })
            });
            _.Jp(this, function() {
                _.KC(p);
                _.KC(q);
                h.style.position = n;
                h.style.height = k;
                h.style.width = l;
                h.style.display = m
            })
        }
    };
    var lS = _.Zx(["https://td.doubleclick.net/td/kb?kbli=", ""]),
        Kw = function(a, b, c, d, e) {
            Y.call(this, a, 1007);
            this.mh = b;
            this.j = X(this, d);
            c && (this.A = X(this, c));
            e && JM(this, e)
        };
    _.R(Kw, Y);
    Kw.prototype.g = function() {
        if (Ug(this.j.value)) {
            var a;
            if ((a = this.A) == null || !a.value) {
                var b = this.mh;
                if (b.length && document.getElementById("koelBirdIGRegisterIframe") === null) {
                    a = document.createElement("iframe");
                    b = za(lS, encodeURIComponent(b.join()));
                    a.removeAttribute("srcdoc");
                    if (b instanceof _.Uy) throw new pz("TrustedResourceUrl", 2);
                    var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
                    a.setAttribute("sandbox", "");
                    for (var d = 0; d < c.length; d++) a.sandbox.supports && !a.sandbox.supports(c[d]) || a.sandbox.add(c[d]);
                    b = _.Ca(b);
                    b !== void 0 && (a.src = b);
                    a.id = "koelBirdIGRegisterIframe";
                    document.head.appendChild(a)
                }
            }
        }
    };
    var Dw = ai(664, function(a, b, c, d, e, f) {
        var h, k, l, m, n, p, q;
        return _.vf(function(t) {
            k = (h = a.hd) != null ? h : 0;
            l = a;
            m = l.ae;
            n = (0, _.oq)() !== 0 || k > 0;
            if (!n) return t.return(_.B.Promise.resolve());
            p = XL(document);
            q = YL(document) && p && Pr(b, c, d, m);
            return t.return(new _.B.Promise(function(w) {
                if (q && p) var v = Kp(e, f, 324, document, p, function() {
                    YL(document) || (v && v(), w())
                });
                else w()
            }))
        })
    });
    var Ew = ai(666, function(a, b, c, d) {
        d = d === void 0 ? Qr : d;
        var e, f, h;
        return _.vf(function(k) {
            e = a;
            f = e.Ck;
            h = e.yb;
            return f == null || f < 0 || !Zm(h) ? k.return(_.B.Promise.resolve()) : k.return(new _.B.Promise(function(l) {
                var m = d(f, Cl(b, 291, function(n, p) {
                    n = _.A(n);
                    for (var q = n.next(); !q.done; q = n.next())
                        if (q = q.value, !(q.intersectionRatio <= 0)) {
                            p.unobserve(q.target);
                            l();
                            break
                        }
                }));
                m ? (_.Jp(c, function() {
                    m.disconnect()
                }), m.observe(h)) : l()
            }))
        })
    });
    var Aw = di(1176, function(a, b, c, d) {
        a = b != null ? b : new Bw;
        return (a = Tr(a, 2) != null ? Ur(a) != null && (0, _.oq)() !== 0 ? Tr(a, 2) * Ur(a) : Tr(a, 2) : null) && (_.F = [8, 9], _.x(_.F, "includes")).call(_.F, cr(c)) ? (P(d, WP()), {
            hd: null
        }) : {
            hd: a
        }
    }, {
        hd: void 0
    });
    var Cw = di(676, function(a) {
        return {
            ae: Km(a.measuringElement)
        }
    }, {
        ae: void 0
    });
    var zw = function(a, b, c, d, e, f, h, k, l) {
        jk.call(this);
        d = this.g(Aw, {}, _.wm(d, Bw, 5), e, f).hd;
        e = this.g(Cw, {
            measuringElement: k
        }).ae;
        b = this.l(Dw, {
            ae: e,
            hd: d
        }, b, c, h, a, this);
        l && Xr(b, l);
        a = Xr(this.l(Ew, {
            yb: k,
            Ck: d
        }, a, this), b.complete);
        l && Xr(a, l);
        this.B = a.complete
    };
    _.R(zw, jk);
    var Yr = function(a, b, c, d, e, f) {
        f = f === void 0 ? _.B.globalThis.IntersectionObserver : f;
        Y.call(this, a, 886);
        this.V = b;
        this.M = c;
        this.A = d;
        this.j = f;
        this.output = GM(this);
        e && JM(this, e)
    };
    _.R(Yr, Y);
    Yr.prototype.g = function() {
        this.V.some(function(a) {
            return !Zm(Vm(a))
        }) ? this.output.notify() : AM(this.output, mS(this, this.A))
    };
    var mS = function(a, b) {
        return new _.B.Promise(function(c) {
            if (a.j) {
                for (var d = new a.j(function(k, l) {
                        k.some(function(m) {
                            return m.intersectionRatio > 0
                        }) && (l.disconnect(), c())
                    }, {
                        rootMargin: b + "%"
                    }), e = _.A(a.V), f = e.next(), h = {}; !f.done; h = {
                        jg: void 0
                    }, f = e.next()) {
                    f = f.value;
                    h.jg = Vm(f);
                    if (!h.jg) return;
                    d.observe(h.jg);
                    Rr(a.M, f, function(k) {
                        return function() {
                            return void d.unobserve(k.jg)
                        }
                    }(h))
                }
                _.Jp(a, function() {
                    return void d.disconnect()
                })
            } else c()
        })
    };
    var Wr = ai(886, function(a, b, c, d, e, f) {
        a = f != null ? f : _.B.globalThis.IntersectionObserver;
        return !a || b.some(function(h) {
            return !Zm(Vm(h))
        }) ? _.B.Promise.resolve() : Sr(b, d, c, e, a)
    });
    var nS = [{
            name: "Interstitial",
            format: 1,
            Me: 5
        }, {
            name: "TopAnchor",
            format: 2,
            Me: 2
        }, {
            name: "BottomAnchor",
            format: 3,
            Me: 3
        }, {
            name: "LeftSideRail",
            format: 4,
            Me: 8
        }, {
            name: "RightSideRail",
            format: 5,
            Me: 9
        }],
        Tv = function(a, b, c, d, e, f, h) {
            Y.call(this, a, 789);
            this.da = b;
            this.googletag = c;
            this.A = d;
            this.j = e;
            this.P = f;
            this.F = h;
            this.output = W(this)
        };
    _.R(Tv, Y);
    Tv.prototype.g = function() {
        var a = this;
        nS.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.F)
        }).forEach(function(b) {
            var c = b.name;
            b = b.Me;
            var d, e;
            (d = window.console) == null || (e = d.warn) == null || e.call(d, "GPT - Demo " + c + " ENABLED");
            c = new QR(a.context, a.da, "/22639388115/example/" + c.toLowerCase(), b, !1, a.googletag.pubads(), function(f) {
                return void a.googletag.display(f)
            }, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, a.googletag.cmd, a.j.g, a.j, a.A, a.P, !1);
            _.Gr(a, c);
            c.run()
        })
    };
    var oS = function(a, b, c) {
        Y.call(this, a, 1163);
        _.I(Pw);
        this.j = X(this, b);
        c && JM(this, c)
    };
    _.R(oS, Y);
    oS.prototype.g = function() {
        this.j.value.tl();
        this.j.value.Ya()
    };
    var Rw = function(a, b, c, d, e, f, h, k, l, m, n) {
        Y.call(this, a, 682);
        this.M = b;
        this.format = c;
        this.slotId = d;
        this.C = e;
        this.Ua = f;
        this.j = W(this);
        this.A = X(this, h);
        this.I = X(this, k);
        this.F = HM(this, l);
        this.vd = X(this, m);
        this.K = HM(this, n)
    };
    _.R(Rw, Y);
    Rw.prototype.g = function() {
        var a = this,
            b;
        if ((b = this.Ua) != null && _.Q(b, 12, !1)) {
            b = this.F.value.Dm;
            var c = _.iv(this.M, this.slotId),
                d = this.I.value,
                e = this.A.value,
                f = this.K.value;
            _.Qp(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (pS) pS.ql(e, this.vd.value);
            else {
                var h, k;
                pS = new b(this.context, this.format, e, this.C, d, this.M, this.slotId, f, (k = (h = this.Ua) == null ? void 0 : _.wm(h, RB, 16)) != null ? k : null);
                h = {};
                k = _.A(_.Uj(this.Ua, QB, 13, _.Wj()));
                for (b = k.next(); !b.done; b = k.next()) b = b.value, h[Xj(b, 1)] = Xj(b, 2);
                pS.rl(h);
                _.I(Pw) ? (pS.nl(), this.j.G(pS)) : pS.Ya();
                FO(this.M, this.slotId, function() {
                    pS && (pS.dispose(), pS = null);
                    c && _.IO(a.M, a.slotId)
                })
            }
            _.Jp(this, function() {
                return _.KC(e)
            })
        }
    };
    var pS = null;
    var Qw = function(a, b, c, d, e, f, h, k, l, m, n) {
        Y.call(this, a, 1155);
        this.M = b;
        this.format = c;
        this.slotId = d;
        this.C = e;
        this.Ua = f;
        this.j = h;
        this.F = k;
        this.A = l;
        this.K = m;
        this.I = n
    };
    _.R(Qw, Y);
    Qw.prototype.g = function() {
        var a;
        if ((a = this.Ua) != null && Qn(a, 12)) {
            a = new jk;
            _.Gr(this, a);
            var b, c = ((b = this.Ua) == null ? 0 : _.Q(b, 15)) ? J(a, new $r(this.context, this.slotId, as, function(d) {
                d = d.detail.data;
                try {
                    var e = JSON.parse(d);
                    return e.type === "floating" && e.message === "loaded"
                } catch (f) {}
                return !1
            })).output : void 0;
            b = new Rw(this.context, this.M, this.format, this.slotId, this.C, this.Ua, this.j, this.F, this.A, this.K, this.I);
            J(a, b);
            b = new oS(this.context, b.j, c);
            J(a, b);
            a.run()
        }
    };
    var gs = function(a, b, c) {
        Y.call(this, a, 1150);
        this.C = b;
        this.output = GM(this);
        JM(this, c)
    };
    _.R(gs, Y);
    gs.prototype.g = function() {
        var a = this;
        this.C.location.hash = "goog_game_inter";
        _.Jp(this, function() {
            "goog_game_inter" === a.C.location.hash && (a.C.location.hash = "")
        });
        AM(this.output, new _.B.Promise(function(b) {
            return void Lp(a, a.id, a.C, "hashchange", function(c) {
                Hy(c.oldURL, "#goog_game_inter") && b()
            })
        }))
    };
    var qS = function(a, b) {
            this.serviceName = b;
            this.slot = a.g
        },
        rS = function(a, b) {
            qS.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.vast = this.companyIds = this.yieldGroupIds = null
        };
    _.R(rS, qS);
    var sS = function() {
        qS.apply(this, arguments)
    };
    _.R(sS, qS);
    var tS = function(a, b, c) {
        qS.call(this, a, b);
        this.inViewPercentage = c
    };
    _.R(tS, qS);
    var uS = function() {
        qS.apply(this, arguments)
    };
    _.R(uS, qS);
    var vS = function() {
        qS.apply(this, arguments)
    };
    _.R(vS, qS);
    var wS = function() {
        qS.apply(this, arguments)
    };
    _.R(wS, qS);
    var xS = function() {
        qS.apply(this, arguments)
    };
    _.R(xS, qS);
    var yS = function(a, b, c, d) {
        qS.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.R(yS, qS);
    var zS = function(a, b, c) {
        qS.call(this, a, b);
        this.payload = c
    };
    _.R(zS, qS);
    var AS = function() {
        qS.apply(this, arguments)
    };
    _.R(AS, qS);
    var BS = function(a, b, c) {
        qS.call(this, a, b);
        this.makeGameManualInterstitialVisible = c
    };
    _.R(BS, qS);
    var CS = function() {
        qS.apply(this, arguments)
    };
    _.R(CS, qS);
    var hs = function(a, b, c, d, e, f) {
        Y.call(this, a, 1151);
        this.slotId = b;
        this.Ca = c;
        JM(this, d);
        a = [e];
        f && a.push(f);
        f = new BM(a, !0);
        DM(this.B, f)
    };
    _.R(hs, Y);
    hs.prototype.g = function() {
        gv(this.Ca, "gameManualInterstitialSlotClosed", 1148, new CS(this.slotId, "publisher_ads"))
    };
    var es = function(a, b, c, d) {
        Y.call(this, a, 1149);
        this.slotId = b;
        this.Ca = c;
        this.output = GM(this);
        JM(this, d)
    };
    _.R(es, Y);
    es.prototype.g = function() {
        var a = new _.Oh,
            b = a.promise;
        gv(this.Ca, "gameManualInterstitialSlotReady", 1147, new BS(this.slotId, "publisher_ads", a.resolve));
        AM(this.output, b.then(function() {
            return kD(10)
        }))
    };
    var ds = function(a, b, c) {
        c = c === void 0 ? DS : c;
        Y.call(this, a, 1158);
        this.j = c;
        this.A = _.yh(cs) * 1E3;
        this.output = GM(this);
        JM(this, b)
    };
    _.R(ds, Y);
    ds.prototype.g = function() {
        var a = this;
        this.j.ag++ ? AM(this.output, kD(this.A * (this.j.ag - 2) + (this.A - (Date.now() - this.j.nh))).then(function() {
            a.j.nh = Date.now();
            a.j.ag--
        })) : (this.j.nh = Date.now(), kD(this.A).then(function() {
            return void a.j.ag--
        }), this.output.notify())
    };
    var DS = {
        ag: 0,
        nh: Date.now()
    };
    var ES = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        FS = {
            width: "100%",
            height: "100%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        fs = function(a, b, c, d, e) {
            Y.call(this, a, 1150);
            this.C = b;
            this.j = X(this, c);
            this.F = X(this, d);
            JM(this, e);
            this.A = new _.TM(this.C)
        };
    _.R(fs, Y);
    fs.prototype.g = function() {
        var a = (0, _.oq)() === 0 ? "rgba(1,1,1,0.5)" : "white";
        _.Qp(this.j.value, _.x(Object, "assign").call(Object, {
            position: "absolute"
        }, (0, _.oq)() === 0 ? FS : ES));
        _.Qp(this.F.value, _.x(Object, "assign").call(Object, {
            "background-color": a,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, ES));
        _.Jp(this, _.fN(this.C.document, this.C));
        a = {};
        NC(this.j.value).postMessage(JSON.stringify((a.googMsgType = "sth", a.msg_type = "i-view", a)), "*");
        if (this.C === this.C.top) {
            var b = _.VM(this.A, 2147483646);
            _.ZM(b);
            _.Jp(this, function() {
                return void _.$M(b)
            })
        }
    };
    var GS = function(a, b, c, d, e, f, h, k) {
        Y.call(this, a, 683);
        this.slotId = b;
        this.U = c;
        this.j = d;
        this.A = W(this);
        this.F = X(this, e);
        this.ba = X(this, f);
        this.I = HM(this, h);
        this.K = HM(this, k);
        this.context.R.log(578856259, _.Mi, {
            pvsid: this.context.pvsid,
            Ba: this.context.Ba,
            mb: 17,
            Tb: this.context.La,
            T: 7
        })
    };
    _.R(GS, Y);
    GS.prototype.g = function() {
        var a = this;
        this.context.R.log(578856259, _.Mi, {
            pvsid: this.context.pvsid,
            Ba: this.context.Ba,
            mb: 17,
            Tb: this.context.La,
            T: 8
        });
        var b = this.ba.value,
            c = this.F.value,
            d = this.K.value.Wm,
            e = new _.qO(this.context),
            f = ym(this.j, 14) != null ? fv(this.j, 14) * 60 : 604800;
        b = new d(this.context, window, c, b, e, this.U, HS(this), new _.B.Set(_.ce(this.j, 15, _.yc, _.Wj())), er(this.slotId), function() {
            return void a.dispose()
        }, function() {
            js(a.context, {
                bb: 1,
                payload: function() {
                    var h = new Uq,
                        k = _.Vq(h, XF, 5, Xq),
                        l = _.Kf();
                    _.Yq(k, 1, l);
                    return h
                }
            });
            a.dispose()
        }, f, this.I.value);
        b.U();
        _.Gr(this, b);
        this.A.G(b);
        this.context.R.log(578856259, _.Mi, {
            pvsid: this.context.pvsid,
            Ba: this.context.Ba,
            mb: 17,
            Tb: this.context.La,
            T: 9
        })
    };
    var HS = function(a) {
        var b = {};
        a = _.Uj(a.j, QB, 13, _.Wj());
        a = _.A(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[Xj(c, 1)] = Xj(c, 2);
        return b
    };
    var IS = function(a, b, c, d) {
        Y.call(this, a, 1210);
        this.action = b;
        this.j = HM(this, c);
        JM(this, d)
    };
    _.R(IS, Y);
    IS.prototype.g = function() {
        var a;
        (a = this.j.value) != null && a.Fb() && this.action()
    };
    var JS = function(a, b, c) {
        Y.call(this, a, 1121);
        this.da = b;
        this.output = GM(this);
        this.F = !1;
        this.I = X(this, c)
    };
    _.R(JS, Y);
    JS.prototype.g = function() {
        var a = this;
        if (this.A = ks(Cl(this.context, this.id, function(b) {
                b = _.A(b);
                for (var c = b.next(); !c.done; c = b.next()) c = c.value.intersectionRatio * 100, _.x(Number, "isFinite").call(Number, c) && c >= 50 ? a.j || (a.F = !0, YL(a.da) || KS(a)) : (a.F = !1, LS(a))
            }))) _.Jp(this, function() {
            var b;
            (b = a.A) == null || b.disconnect();
            LS(a)
        }), this.A.observe(this.I.value), this.K = Lp(this, this.id, this.da, "visibilitychange", function() {
            YL(a.da) ? LS(a) : a.F && !a.j && KS(a)
        })
    };
    var KS = function(a) {
            a.j = setTimeout(function() {
                a.j = void 0;
                if (!YL(a.da)) {
                    a.output.notify();
                    var b;
                    (b = a.A) == null || b.disconnect();
                    var c;
                    (c = a.K) == null || c.call(a)
                }
            }, 1E3)
        },
        LS = function(a) {
            clearTimeout(a.j);
            a.j = void 0
        };
    var Sw = function(a, b, c, d, e, f, h, k, l, m, n) {
        n = n === void 0 ? function() {
            return _.Kf()
        } : n;
        Y.call(this, a, 1141);
        this.slotId = b;
        this.K = c;
        this.A = d;
        this.da = e;
        this.j = f;
        this.U = h;
        this.Lb = k;
        this.I = l;
        this.F = m;
        this.Hc = n;
        this.output = W(this)
    };
    _.R(Sw, Y);
    Sw.prototype.g = function() {
        var a = this;
        if (this.A) {
            var b = new jk;
            _.Gr(this, b);
            var c = new Cq;
            c.ca();
            c = J(b, new GS(this.context, this.slotId, this.K, this.A, this.j, this.U, _.I($q) ? c : this.Lb, this.I));
            _.Jp(c, function() {
                return void a.dispose()
            });
            this.output.Ra(c.A.promise.then(function() {
                return !0
            }));
            if (_.I(mJ) || _.yh(oJ)) {
                var d = J(b, new JS(this.context, this.da, this.j));
                _.yh(oJ) && J(b, new IS(this.context, function() {
                    js(a.context, {
                        bb: _.yh(oJ),
                        payload: function() {
                            var e = new WF,
                                f = a.Hc();
                            f !== null && _.Yq(e, 1, f);
                            return YF(e)
                        }
                    })
                }, c.A, d.output));
                _.I(mJ) && J(b, new IS(this.context, function() {
                    js(a.context, {
                        bb: 1,
                        payload: function() {
                            var e = new WF,
                                f = a.Hc();
                            f !== null && _.Yq(e, 1, f);
                            _.dk(e, 2, !0);
                            return YF(e)
                        }
                    });
                    a.F()
                }, c.A, d.output))
            }
            b.run()
        } else this.output.G(!1)
    };
    var MS = function(a) {
        this.module = a
    };
    MS.prototype.toString = function() {
        return String(this.module)
    };
    _.NS = new MS(2);
    _.OS = new MS(5);
    _.PS = new MS(6);
    var Jw = function(a, b, c, d, e, f) {
        Y.call(this, a, 846);
        this.ab = b;
        this.format = c;
        this.Ua = d;
        this.j = e;
        this.output = W(this);
        f && JM(this, f)
    };
    _.R(Jw, Y);
    Jw.prototype.g = function() {
        var a, b = (this.format === 2 || this.format === 3) && !((a = this.Ua) == null || !_.Q(a, 12, !1));
        a = this.format === 5 && this.j;
        b || a ? this.output.Ra(this.ab.load(_.NS)) : this.output.ca()
    };
    var QS = function(a, b, c, d, e) {
        Y.call(this, a, 905);
        this.O = b;
        this.ab = c;
        this.output = GM(this);
        this.j = X(this, d);
        JM(this, e)
    };
    _.R(QS, Y);
    QS.prototype.g = function() {
        for (var a = _.A(this.j.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            b = (c = this.O.W[b.value.getDomId()]) == null ? void 0 : cr(c);
            if (b === 2 || b === 3 || b === 5) {
                this.ab.load(_.NS);
                return
            }
        }
        this.output.notify()
    };
    var RS = function(a, b, c, d, e, f) {
        Y.call(this, a, 696);
        this.slotId = b;
        this.Ca = c;
        JM(this, d);
        KM(this, [e, f])
    };
    _.R(RS, Y);
    RS.prototype.g = function() {
        gv(this.Ca, "rewardedSlotClosed", 703, new AS(this.slotId, "publisher_ads"))
    };
    var SS = function(a, b, c, d, e) {
        Y.call(this, a, 694);
        this.slotId = b;
        this.Ca = c;
        JM(this, d);
        this.j = HM(this, e)
    };
    _.R(SS, Y);
    SS.prototype.g = function() {
        var a, b = (a = this.j.value) == null ? void 0 : a.payload;
        gv(this.Ca, "rewardedSlotGranted", 702, new zS(this.slotId, "publisher_ads", b != null ? b : null))
    };
    var TS = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        US = function(a, b, c, d, e, f) {
            Y.call(this, a, 693);
            this.C = b;
            this.output = GM(this);
            this.A = X(this, c);
            this.F = X(this, d);
            this.I = X(this, f);
            JM(this, e);
            this.j = new _.TM(this.C)
        };
    _.R(US, Y);
    US.prototype.g = function() {
        var a = this;
        if (!this.I.value) {
            var b = (0, _.oq)() === 0 ? "rgba(1,1,1,0.5)" : "white";
            _.Qp(this.F.value, _.x(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, TS));
            _.Jp(this, _.fN(this.C.document, this.C));
            NC(this.A.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.C === this.C.top) {
                this.C.location.hash = "goog_rewarded";
                var c = _.VM(this.j, 2147483646);
                _.ZM(c);
                _.Jp(this, function() {
                    _.$M(c);
                    "goog_rewarded" === a.C.location.hash && (a.C.location.hash = "")
                })
            }
            this.output.notify()
        }
    };
    var VS = function(a, b, c, d) {
        Y.call(this, a, 695);
        this.C = b;
        this.j = X(this, c);
        JM(this, d)
    };
    _.R(VS, Y);
    VS.prototype.g = function() {
        if (this.C === this.C.top) var a = NC(this.j.value),
            b = Lp(this, 503, this.C, "hashchange", function(c) {
                Hy(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var WS = function(a, b, c, d) {
        Y.call(this, a, 692);
        this.slotId = b;
        this.Ca = c;
        this.output = GM(this);
        this.j = W(this);
        this.A = HM(this, d)
    };
    _.R(WS, Y);
    WS.prototype.g = function() {
        var a = this.A.value;
        if (a) {
            var b = new _.Oh,
                c = b.promise,
                d;
            gv(this.Ca, "rewardedSlotReady", 701, new yS(this.slotId, "publisher_ads", N(this.context, 1235, b.resolve), (d = a.payload) != null ? d : null));
            this.j.G(_.Jf());
            AM(this.output, c)
        }
    };
    var XS = di(1237, function(a, b) {
        qs(b.context, b.adUnitPath, a.On);
        return {}
    }, {});
    var YS = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        ZS = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        $S = di(691, function(a) {
            if (a.message.message === "ha_before_make_visible") return {
                Uh: null,
                eh: !0
            };
            var b = _.I(vJ) ? YS : ZS;
            b = _.x(Object, "assign").call(Object, {}, {
                position: "absolute"
            }, (0, _.oq)() === 0 ? b : YS);
            _.Qp(a.tb, b);
            return {
                Uh: a.message,
                eh: !1
            }
        }, {
            Uh: void 0,
            eh: void 0
        });
    var Tw = function(a, b, c, d, e, f) {
        jk.call(this);
        var h = ss(b, "granted", a);
        J(this, h);
        var k = ss(b, "prefetched", a);
        J(this, k);
        var l = ss(b, "closed", a);
        J(this, l);
        var m = ss(b, "ha_before_make_visible", a);
        J(this, m);
        var n = this.g($S, {
            tb: e,
            message: new BM([k.output, m.output])
        }, {});
        k = n.eh;
        n = new WS(a, b, c, n.Uh);
        J(this, n);
        f = new US(a, d, e, f, n.output, k);
        J(this, f);
        J(this, new VS(a, d, e, f.output));
        J(this, new SS(a, b, c, n.output, h.output));
        J(this, new RS(a, b, c, n.output, l.output, m.output));
        _.yh(yJ) && Xr(this.g(XS, {
            On: n.j
        }, {
            context: a,
            adUnitPath: b.getAdUnitPath()
        }), n.output)
    };
    _.R(Tw, jk);
    var aT = [2, 3, 8, 9, 5],
        dw = di(1242, function(a, b) {
            a = b.context;
            b = b.C;
            for (var c = _.A(aT), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                var e = qr(d, b, !0, !1);
                e !== null && us(a, e, d)
            }
            return {}
        }, {});
    var vs = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var bT = Fg({
            gsppack: Gv,
            fpt: Kg,
            eids: Lg()
        }),
        cT = Fg({
            paw_id: Kg,
            signal: Kg,
            error: Hg(Kg),
            eids: Hg(Lg()),
            sdk_ttl_ms: Hg(hL)
        }),
        dT = function(a, b, c, d, e) {
            b = b === void 0 ? new _.B.Set : b;
            c = c === void 0 ? null : c;
            d = d === void 0 ? null : d;
            e = e === void 0 ? null : e;
            _.V.call(this);
            this.C = a;
            this.ports = b;
            this.l = c;
            this.g = d;
            this.B = e
        };
    _.R(dT, _.V);
    dT.prototype.o = function() {
        _.V.prototype.o.call(this);
        eT(this);
        for (var a = _.A(this.ports), b = a.next(); !b.done; b = a.next()) b = b.value, this.ports.delete(b), b.onmessage = null
    };
    var fT = function(a, b, c) {
            b.onmessage = c;
            a.ports.add(b)
        },
        eT = function(a) {
            a.l !== null && (_.Of(a.C, "message", a.l), a.l = null)
        },
        gT = function(a, b) {
            for (var c = _.A(a.ports), d = c.next(); !d.done; d = c.next()) d = d.value, d !== b && (a.ports.delete(d), d.onmessage = null);
            eT(a);
            a.g = b
        },
        hT = function(a, b) {
            fT(a, b, function(c) {
                a: {
                    try {
                        var d = JSON.parse(c.data);
                        if (cT(d)) {
                            var e = d;
                            break a
                        }
                    } catch (l) {}
                    e = void 0
                }
                if (e) {
                    a.g === null && gT(a, b);
                    var f;
                    (f = a.B) == null || f.resolve(e);
                    a.B = null
                } else {
                    a: {
                        try {
                            var h = JSON.parse(c.data);
                            if (bT(h) && h.gsppack) {
                                var k = h;
                                break a
                            }
                        } catch (l) {}
                        k = void 0
                    }
                    k && a.g === null && gT(a, b)
                }
            });
            ws(b)
        },
        iT = function(a) {
            if (a.B) return a.B.promise;
            if (a.l !== null) throw Error("a poll message listener is already registered");
            a.B = new _.Oh;
            a.g === null ? (a.l = function(b) {
                b = b.data == null || b.data === "" ? b.ports[0] : void 0;
                b && hT(a, b)
            }, _.tf(a.C, "message", a.l)) : ws(a.g);
            return a.B.promise
        };
    var xs = function(a, b, c, d, e) {
        c = c === void 0 ? Th : c;
        d = d === void 0 ? Sh : d;
        e = e === void 0 ? new dT(b) : e;
        Y.call(this, a, 1063);
        this.C = b;
        this.K = c;
        this.I = d;
        this.A = e;
        this.F = W(this);
        this.Ic = W(this);
        this.j = !1;
        _.Gr(this, e)
    };
    _.R(xs, Y);
    xs.prototype.g = function() {
        var a = this;
        if (_.I(gJ)) {
            this.j = Uh(this.C);
            var b = !this.j && _.I(dJ) ? iT(this.A) : void 0,
                c = null,
                d = 0,
                e = 0,
                f = function() {
                    if (!_.I(dJ) || a.A.g === null) {
                        if (_.I(hJ)) {
                            var l, m;
                            return (m = (l = a.K(a.C)) == null ? void 0 : l.then(function(n) {
                                var p;
                                e = (p = n.sdk_ttl_ms) != null ? p : 0;
                                return n.signal
                            })) != null ? m : null
                        }
                        return a.I(a.C)
                    }
                    return b ? b.then(function(n) {
                        b = void 0;
                        return n.signal
                    }) : iT(a.A).then(function(n) {
                        return n.signal
                    })
                },
                h = Cl(this.context, this.id, function() {
                    var l, m, n, p, q, t;
                    return _.vf(function(w) {
                        switch (w.g) {
                            case 1:
                                return l = "0", w.l = 2, w.yield(f(), 4);
                            case 4:
                                m = w.o;
                                l = (n = m) != null ? n : "0";
                                l.length > 1E4 && (Gl(a.context, a.id, new DL("ML:" + l.length)), l = "0");
                                w.g = 3;
                                w.l = 0;
                                break;
                            case 2:
                                p = xf(w), Gl(a.context, a.id, p);
                            case 3:
                                _.I(eJ) ? (t = Math.max(3E5 - e, 5E3), q = _.Jf(a.C) + t) : q = _.Jf(a.C) + 3E5, c = l, d = q, w.g = 0
                        }
                    })
                });
            if (!_.I(dJ) || this.j) var k = (_.F = h(), _.x(_.F, "finally")).call(_.F, function() {
                k = void 0
            });
            this.F.G(function() {
                var l, m, n;
                return _.vf(function(p) {
                    if (p.g == 1) {
                        l = _.I(dJ) && a.A.g !== null;
                        if (!a.j && !l) return p.return("");
                        m = _.Jf(a.C) >= d;
                        n = c === null || c === "0";
                        if (!m && !n) {
                            p.g = 2;
                            return
                        }
                        k || (k = (_.F = h(), _.x(_.F, "finally")).call(_.F, function() {
                            k = void 0
                        }));
                        return p.yield(k, 2)
                    }
                    return p.return(c)
                })
            });
            this.j ? this.Ic.G("WEBVIEW_SDK_PAW") : this.Ic.G("WEBVIEW_SDK_PACT")
        } else this.F.G(function() {
            return _.B.Promise.resolve("")
        }), this.Ic.G("WEBVIEW_SDK_UNKNOWN")
    };
    xs.prototype.l = function() {
        this.F.G(function() {
            return _.B.Promise.resolve("")
        });
        this.j ? this.Ic.G("WEBVIEW_SDK_PAW") : this.Ic.G("WEBVIEW_SDK_PACT")
    };
    var jT = function(a, b) {
        Y.call(this, a, 1091);
        this.output = W(this);
        b && (this.j = HM(this, b))
    };
    _.R(jT, Y);
    jT.prototype.g = function() {
        var a;
        (a = this.j) != null && a.value ? this.output.Ra(this.j.value()) : this.output.G("")
    };
    jT.prototype.l = function() {
        this.output.G("")
    };
    var Js = new _.B.Map([
        ["IAB_AUDIENCE_1_1", 3],
        ["IAB_CONTENT_2_2", 5],
        ["IAB_CONTENT_3_0", 6]
    ]);
    var Us = new _.B.Set(["disablePersonalization"]);
    var bt = function(a, b, c) {
        Y.call(this, a, 1122);
        this.da = b;
        this.j = c;
        GM(this, c)
    };
    _.R(bt, Y);
    bt.prototype.g = function() {
        var a = this,
            b = Al(this.context);
        AM(this.j, new _.B.Promise(function(c) {
            return void $L(function() {
                c();
                b()
            }, a.da)
        }))
    };
    var et = function(a, b, c) {
        Y.call(this, a, 1107);
        this.C = b;
        this.j = c;
        W(this, c)
    };
    _.R(et, Y);
    et.prototype.g = function() {
        var a = lh(this.C.isSecureContext, this.C.navigator, this.C.document),
            b = mh(this.C.isSecureContext, this.C.document),
            c = nh(this.C.isSecureContext, this.C, this.C.document),
            d = !(!this.C.isSecureContext || !jh("attribution-reporting", this.C.document)),
            e = 0;
        a && (e |= 1);
        b && (e |= 4);
        c && (e |= 8);
        d && (e |= 2);
        this.j.Cb(e === 0 ? null : e)
    };
    et.prototype.l = function() {
        this.j.ca()
    };
    var kT = function(a, b, c, d, e, f, h, k) {
        Y.call(this, a, 1118, _.yh(DJ));
        this.F = b;
        this.K = e;
        this.O = f;
        W(this, e);
        c && (this.U = HM(this, c));
        d && (this.I = HM(this, d));
        h && (this.A = X(this, h));
        k && (this.j = IM(this, k))
    };
    _.R(kT, Y);
    kT.prototype.g = function() {
        var a = new pM;
        a = _.me(a, 1, _.Cc(this.F), 0);
        if (this.j)
            if (this.j.value) {
                var b = _.Hi(a, 3, this.j.value.label);
                _.K(b, 4, this.j.value.status)
            } else this.j.Wd() || _.K(a, 4, 5);
        if (this.F & 1) {
            var c, d;
            b = lT(this, (c = this.U) == null ? void 0 : c.value, (d = this.I) == null ? void 0 : d.value);
            _.ol(a, 2, b)
        }
        this.K.G(a)
    };
    var lT = function(a, b, c) {
            var d = new oM;
            b == null || b.forEach(function(h, k) {
                if (h.length) {
                    var l = nM(new mM, h),
                        m;
                    (m = c == null ? void 0 : c.get(k)) == null || m.forEach(function(n, p) {
                        var q = new jM;
                        n = _.me(q, 2, _.Cc(n), 0);
                        p = _.me(n, 1, _.Cc(_.ph(p)), 0);
                        gk(l, 2, jM, p)
                    });
                    ie(d, 2, mM).set(k, l)
                }
            });
            var e;
            if (((e = a.A) == null ? 0 : e.value) && a.O.W) {
                var f;
                b = _.A((f = a.A) == null ? void 0 : f.value);
                for (f = b.next(); !f.done; f = b.next()) f = f.value, (e = mT(a, f)) && ie(d, 3, kM).set(f.getAdUnitPath(), e)
            }
            return d
        },
        mT = function(a, b) {
            var c, d;
            a = (d = (c = a.O.Dd) == null ? void 0 : c[b.getDomId()]) != null ? d : [];
            if (a.length !== 0) return lM(new kM, a.map(function(e) {
                return e.seller
            }))
        };
    var kt = function(a, b, c, d, e, f, h, k) {
        Y.call(this, a, 1165);
        this.K = c;
        this.I = d;
        this.eg = e;
        this.O = f;
        this.F = h;
        this.A = k;
        this.j = HM(this, b.tk)
    };
    _.R(kt, Y);
    kt.prototype.g = function() {
        if (this.j.value) {
            var a = new jk,
                b = new kT(this.context, this.j.value, this.K, this.I, this.eg.Vh, this.O, this.F, this.A);
            J(a, b);
            a.run()
        } else this.eg.Vh.ca()
    };
    var $v = function(a, b, c) {
        Y.call(this, a, 1206);
        this.A = b;
        this.j = W(this);
        this.aa = X(this, c)
    };
    _.R($v, Y);
    $v.prototype.g = function() {
        var a = this;
        this.A.cookieDeprecationLabel ? Ug(this.aa.value) ? this.j.Ra(this.A.cookieDeprecationLabel.getValue().then(function(b) {
            return {
                status: 1,
                label: b
            }
        }).catch(function(b) {
            a.H(b);
            return {
                status: 2
            }
        })) : this.j.G({
            status: 4
        }) : this.j.G({
            status: 3
        })
    };
    var nT = di(1213, function(a) {
        var b, c;
        return {
            Qk: !((c = (b = a.Zl) == null ? void 0 : b.label) == null || !c.match(Dh(CJ)))
        }
    }, {
        Qk: void 0
    });
    var oT = function(a, b) {
        Y.call(this, a, 1212, _.yh(DJ));
        this.j = W(this);
        this.A = W(this);
        b && (this.F = IM(this, b))
    };
    _.R(oT, Y);
    oT.prototype.g = function() {
        var a, b, c = (a = this.F) == null ? void 0 : (b = a.value) == null ? void 0 : b.label;
        c ? (this.A.G(!0), c.match(Dh(CJ)) ? this.j.G(!0) : this.j.G(!1)) : (this.j.G(!1), this.A.G(!1))
    };
    var pT = function(a, b, c) {
        Y.call(this, a, 873);
        this.C = b;
        this.j = X(this, c)
    };
    _.R(pT, Y);
    pT.prototype.g = function() {
        var a = this.context,
            b = this.j.value,
            c = this.C;
        !Mo()._pubconsole_disable_ && (b = Xg("google_pubconsole", b, c)) && (b = b.split("|"), b[0] !== "1" && b[0] !== "0" || ip(a, c))
    };
    var qT = function() {
            var a = _.I(rJ);
            this.g = a = a === void 0 ? !1 : a;
            this.resources = {};
            this.g = a
        },
        sT = function(a, b) {
            var c = vQ();
            c = Kn(Oj({
                version: xQ ? xQ : xQ = Fn(),
                ng: c
            }, b));
            var d;
            if (!(a.resources[c.toString()] || ((d = Mo()) == null ? 0 : d.fifWin))) {
                a.resources[c.toString()] = 1;
                var e = rT(b.document, c);
                a.g && e.addEventListener("load", function() {
                    e.remove()
                })
            }
        },
        rT = function(a, b) {
            var c = _.Nf("IFRAME");
            c.src = _.gb(b).toString();
            c.style.visibility = "hidden";
            c.style.display = "none";
            a = a.getElementsByTagName("script");
            a.length && (a = a[a.length - 1], a.parentNode && a.parentNode.insertBefore(c, a.nextSibling));
            return c
        };
    var nt = "3rd party ad content";
    var tT = function(a, b, c) {
        _.V.call(this);
        this.context = a;
        this.wa = b;
        this.g = c;
        a = c.slotId;
        b = c.size;
        this.l = c.ac === "height" ? "fluid" : [b.width, b.height];
        this.ye = bn(a);
        this.ze = nt
    };
    _.R(tT, _.V);
    tT.prototype.render = function() {
        var a = this.wa,
            b = this.g,
            c = b.slotId,
            d = b.O.W,
            e = b.size,
            f = b.pb,
            h = b.isBackfill,
            k = b.tc;
        qi(b.Vb, _.HC(b.da), f != null ? f : "", !1);
        ev(_.fh(El), "5", fv(d[c.getDomId()], 20));
        gv(c, hv, 801, {
            bj: a.kind === 0 ? a.qb : "",
            isBackfill: h
        });
        a = this.j();
        k && a && a.setAttribute("data-google-container-id", k);
        gv(c, jv, 825, {
            size: e,
            isEmpty: !1
        });
        return a
    };
    tT.prototype.loaded = function(a) {
        var b = this.g,
            c = b.slotId,
            d = b.Ca;
        b = b.O.W;
        gv(c, Zw, 844);
        a && a.setAttribute("data-load-complete", !0);
        gv(d, "slotOnload", 710, new uS(c, "publisher_ads"));
        ev(_.fh(El), "6", fv(b[c.getDomId()], 20))
    };
    var uT = function(a) {
        a = a.wa;
        if (a = a.kind === 0 ? a.qb : "") {
            var b = a.toLowerCase();
            a = b.indexOf("<!doctype") > -1 || b.indexOf("<html") > -1 ? a : "<!doctype html><html><head></head><body>" + a + "</body></html>"
        }
        return a
    };
    tT.prototype.o = function() {
        _.V.prototype.o.call(this);
        this.g.Vb.removeAttribute("data-google-query-id")
    };
    tT.prototype.H = function(a) {
        var b = this,
            c = vT(this, function() {
                return void b.loaded(c.g)
            }, a);
        _.Jp(this, function() {
            c.status != 100 && (c.jh() && (DN(c.l), c.F = 0), window.clearTimeout(c.Ma), c.Ma = -1, c.H = 3, c.o && (c.o.dispose(), c.o = null), _.Of(window, "resize", c.I), _.Of(window, "scroll", c.I), c.j && c.g && c.j == _.LC(c.g) && c.j.removeChild(c.g), c.g = null, c.j = null, c.status = 100)
        });
        return c
    };
    var vT = function(a, b, c) {
        var d = a.g,
            e = d.Jk,
            f = d.isBackfill,
            h = d.tc,
            k = d.Df,
            l = d.tg,
            m = d.ib,
            n;
        return new LN({
            Qh: d.yb,
            ye: a.ye,
            ze: a.ze,
            content: uT(a),
            size: Array.isArray(a.l) ? new _.Nm(Number(a.l[0]), Number(a.l[1])) : 1,
            lk: b,
            Kk: e != null ? e : void 0,
            permissions: {
                Af: Qn(c, 1) ? !!_.Q(c, 1) : !f,
                Bf: Qn(c, 2) ? !!_.Q(c, 2) : !1
            },
            Ae: !!Mo().fifWin,
            Xn: xQ ? xQ : xQ = Fn(),
            Nl: Jn(),
            hostpageLibraryTokens: m.hostpageLibraryTokens,
            Ib: function(p, q) {
                return void Gl(a.context, p, q)
            },
            uniqueId: h,
            Hk: vQ(),
            Df: k != null ? k : void 0,
            tb: (n = a.g.O.qc) != null ? n : void 0,
            tg: l != null ? l : void 0,
            Wj: !!a.g.O.qc
        })
    };
    var wT = function() {
        tT.apply(this, arguments)
    };
    _.R(wT, tT);
    wT.prototype.j = function() {
        var a = this.g,
            b = a.O,
            c = b.X;
        a = b.W[a.slotId.getDomId()];
        b = new Ln;
        c = Rn([b, c.Yc(), a == null ? void 0 : a.Yc()]);
        return tT.prototype.H.call(this, c).g
    };
    wT.prototype.B = function() {
        return !1
    };
    var tw = function(a, b, c, d, e, f) {
        Y.call(this, a, 669);
        this.X = b;
        this.W = c;
        this.j = d;
        this.Db = e;
        this.output = W(this);
        f && (this.A = X(this, f))
    };
    _.R(tw, Y);
    tw.prototype.g = function() {
        var a;
        if ((a = this.A) == null ? 0 : a.value) this.output.G(!0);
        else {
            var b;
            a = !((b = this.j) == null || !_.u(b, 1)) && (_.Q(this.W, 12) || Yz(this.X, 13)) || this.Db;
            this.output.G(!!a)
        }
    };
    var xT = di(833, function(a, b) {
        sT(b.od, b.C);
        return {}
    }, {});
    var yT = function(a, b, c) {
        Y.call(this, a, 1135);
        this.A = b;
        this.F = c;
        this.j = W(this)
    };
    _.R(yT, Y);
    yT.prototype.g = function() {
        for (var a = new rB, b = new _.B.Map, c = new _.B.Set, d = _.A(this.A), e = d.next(); !e.done; e = d.next()) {
            var f = e.value;
            if (_.Yj(f, 1)) {
                e = new _.B.Set;
                b.set(_.u(f, 1).toString(), e);
                f = _.A(_.Uj(f, pB, 2, _.Wj()));
                for (var h = f.next(); !h.done; h = f.next()) {
                    h = h.value;
                    var k = _.u(h, 1);
                    e.add(k);
                    c.has(k) || gk(a, 2, pB, h);
                    c.add(k)
                }
            }
        }
        this.F.G(b);
        this.j.G(a)
    };
    var zT = function(a, b, c) {
        Y.call(this, a, 1051);
        this.A = b;
        this.j = HM(this, c)
    };
    _.R(zT, Y);
    zT.prototype.g = function() {
        var a = this;
        this.j.value && Jk(this.j.value, function(b, c) {
            Gl(a.context, b, c);
            var d, e;
            (d = a.A) == null || (e = d.error) == null || e.call(d, c)
        })
    };
    var AT = function(a, b) {
        Y.call(this, a, 1040);
        this.j = W(this);
        this.A = HM(this, b)
    };
    _.R(AT, Y);
    AT.prototype.g = function() {
        var a = this.A.value;
        a ? (a = _.Uj(a, pB, 2, _.Wj()), this.j.G(a.map(function(b) {
            var c = eA(b, qB);
            b = _.u(b, 1);
            c = c && (_.x(c, "startsWith").call(c, location.protocol) || _.x(c, "startsWith").call(c, "data:") && c.length <= 80) ? jf(Jj(c)) : void 0;
            return {
                rf: b,
                url: c
            }
        }))) : this.j.G([])
    };
    var BT = function(a, b, c) {
        Y.call(this, a, 813);
        this.Lb = c;
        this.A = HM(this, b);
        this.j = HM(this, c)
    };
    _.R(BT, Y);
    BT.prototype.g = function() {
        var a = this,
            b = this.A.value,
            c = this.j.value;
        if (b != null && b.length && c) {
            b = _.A(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = e.rf;
                (e = e.url) && _.Gr(this, Nk(d, e, c, this.Lb, function(f, h) {
                    Gl(a.context, f, h);
                    var k, l;
                    (l = (k = console).error) == null || l.call(k, h)
                }))
            }
        }
    };
    var CT = function(a, b, c) {
        Y.call(this, a, 1045);
        this.j = b;
        this.Lb = c
    };
    _.R(CT, Y);
    CT.prototype.g = function() {
        var a = new jk;
        _.Gr(this, a);
        var b = new AT(this.context, this.j);
        J(a, b);
        b = new BT(this.context, b.j, this.Lb);
        J(a, b);
        a.run()
    };
    var lw = function(a, b, c, d) {
        Y.call(this, a, 706);
        this.C = b;
        this.output = d != null ? d : W(this);
        this.j = X(this, c)
    };
    _.R(lw, Y);
    lw.prototype.g = function() {
        this.output.Cb(Vg(this.j.value, this.C))
    };
    var vt = function(a, b, c, d) {
        Y.call(this, a, 1154);
        this.xb = c;
        this.j = d;
        this.A = HM(this, b)
    };
    _.R(vt, Y);
    vt.prototype.g = function() {
        if (this.A.value) {
            var a = new jk;
            _.Gr(this, a);
            var b = new lw(this.context, window, this.xb, this.j.Lb);
            J(a, b);
            b = new yT(this.context, this.A.value, this.j.Bh);
            J(a, b);
            J(a, new CT(this.context, b.j, this.j.Lb));
            b = new zT(this.context, console, this.j.Lb);
            J(a, b);
            a.run()
        } else this.j.Bh.ca(), this.j.Lb.ca()
    };
    var Bt = di(1255, function(a) {
        a = a.Bb;
        var b;
        if (((b = a == null ? void 0 : Vz(a).length) != null ? b : 0) > 0)
            for (b = _.A(Eh(RJ)), a = b.next(); !a.done; a = b.next()) hh(Number(a.value));
        return {}
    }, {});
    var DT = ai(1249, function(a, b) {
        return _.vf(function(c) {
            var d = c.yield,
                e = a.lo,
                f = e.wl;
            var h = new HB;
            h = _.ol(h, 1, b.Bb);
            return d.call(c, f.call(e, h, b.Hg, b.C, b.Zc, b.va, b.ig), 0)
        })
    });
    var ET = function(a, b) {
        Y.call(this, a, 1095);
        this.ab = b;
        this.output = W(this)
    };
    _.R(ET, Y);
    ET.prototype.g = function() {
        this.output.Ra(this.ab.load(_.OS))
    };
    var Ct = ai(1248, function(a, b) {
        var c = b.context;
        var d = b.ab;
        var e = b.C;
        var f = b.Zc;
        var h = b.om;
        var k, l;
        return _.vf(function(m) {
            if (m.g == 1) {
                if (!(a.Bb && Vz(a.Bb).length > 0 && a.ig)) return m.return();
                k = new jk;
                _.Gr(h, k);
                l = J(k, new ET(c, d));
                k.l(DT, {
                    lo: l.output
                }, {
                    Hg: a.Hg,
                    va: c.va,
                    C: e,
                    Zc: f,
                    Bb: a.Bb,
                    ig: a.ig
                });
                return m.yield(Dt(k), 2)
            }
            return m.return()
        })
    });
    var FT = function(a, b, c, d, e) {
        this.g = a;
        b = e.add(c, d, b, [1, 1], {
            Yb: void 0,
            format: 6,
            Ab: !0
        });
        a = b.slotId;
        b = b.Ja;
        a && b ? (_.ur(b, 15, 6), this.slotId = a) : this.slotId = null
    };
    var At = di(1252, function(a, b, c, d, e) {
        return (a = a.adUnitPath) ? {
            output: new FT(b, a, c, d, e)
        } : {
            output: null
        }
    }, {
        output: void 0
    });
    var xt = di(1263, function(a, b) {
        if (b.toLowerCase() === "#enableshoppitdemo") return {
            adUnitPath: "/6499/shoppit_test"
        };
        var c;
        return (c = a.Pd) != null && _.Yj(Tz(c, AB, 1), 2) ? {
            adUnitPath: Tz(a.Pd, AB, 1).getAdUnitPath()
        } : {
            adUnitPath: null
        }
    }, {
        adUnitPath: void 0
    });
    var zt = di(1246, function(a) {
        if (!a.data) return {
            Bb: null
        };
        var b;
        return {
            Bb: (b = _.wm(PB(a.data), _.GB, 2)) != null ? b : null
        }
    }, {
        Bb: void 0
    }, function() {
        return {
            Bb: null
        }
    });
    var yt = ai(1245, function(a, b) {
        var c, d;
        return _.vf(function(e) {
            if (e.g == 1) {
                if (!a.adUnitPath) return e.return(null);
                c = new URL("https://securepubads.g.doubleclick.net/pagead/purl_config");
                c.searchParams.set("url", b.location.href);
                c.searchParams.set("puc_types", "1");
                return e.yield(b.fetch(c, {
                    credentials: "omit"
                }), 2)
            }
            d = e.o;
            return d.ok ? e.return(d.text()) : e.return(null)
        })
    });
    var Vw = function(a, b, c, d, e, f, h) {
        Y.call(this, a, 1205);
        this.C = b;
        this.Wh = c;
        this.I = X(this, d);
        this.A = X(this, e);
        this.j = X(this, f);
        this.F = X(this, h)
    };
    _.R(Vw, Y);
    Vw.prototype.g = function() {
        var a = this.I.value;
        a = new a.oo(this.A.value, this.C, this.j.value, this.Wh, this.F.value, new _.qO(this.context), new a.Cm(this.C), void 0, void 0, void 0, _.I(wJ), _.I(pr));
        _.Gr(this, a);
        _.Gr(this, a.K)
    };
    var Uw = function(a, b) {
        Y.call(this, a, 1204);
        this.ab = b;
        this.output = W(this)
    };
    _.R(Uw, Y);
    Uw.prototype.g = function() {
        this.output.Ra(this.ab.load(_.PS))
    };
    var zv = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = Cl(a, 88, function(f, h) {
            var k;
            if (k = Go(f)) k = h, k = Do(k) || Array.isArray(k) && k.every(Do);
            if (k) {
                var l = Gt(h);
                k = l.size;
                l.ai && (h = Vl([f, h]), h = h.substring(1, h.length - 1), P(b, new Ul(151, ["SizeMappingBuilder.addSize", h])), h = k);
                d.push([f, h])
            } else e.push([f, h]), P(b, Wl("SizeMappingBuilder.addSize", [f, h]));
            return c
        });
        this.build = Cl(a, 89, function() {
            if (e.length) return P(b, eP(On(e))), null;
            Sa(d);
            return d
        })
    };
    var GT = di(939, function(a, b) {
        var c = b.context,
            d = b.zn,
            e = b.aa;
        a = b.Um;
        b = b.C;
        var f = new LA,
            h = new KA;
        d = _.Hi(h, 1, String(d));
        d = _.ol(f, 5, d);
        d = _.K(d, 4, 1);
        d = _.K(d, 2, 2);
        c = _.Hi(d, 3, c.La);
        e = Ug(e);
        e = _.tl(c, 6, e);
        a(b, e);
        return {}
    }, {});
    var Mw = ai(1240, function(a, b) {
        return Tt(b.O, b.slotId, b.context)
    });
    var Hw = function(a, b, c, d, e) {
        Y.call(this, a, 807);
        this.C = b;
        this.Zb = c;
        this.output = GM(this);
        this.j = X(this, d);
        e && JM(this, e)
    };
    _.R(Hw, Y);
    Hw.prototype.g = function() {
        if (this.Zb && !this.j.value) {
            var a = lD(this.C);
            kO(new jO(a, this.Zb)) || this.H(new DL("Cannot create top window frame"))
        }
        this.output.notify()
    };
    var HT = function(a, b) {
        Y.call(this, a, 820);
        this.C = b;
        this.output = W(this)
    };
    _.R(HT, Y);
    HT.prototype.g = function() {
        var a = this;
        this.output.Ra(Tk(this.C).then(function(b) {
            var c = b.Zb;
            var d = b.status;
            Xp("gpt_etu", function(e) {
                mp(e, a.context);
                np(e, "rsn", d)
            }, c ? void 0 : 0);
            return c != null ? c : ""
        }))
    };
    var IT = function(a, b, c, d) {
        Y.call(this, a, 979);
        this.C = b;
        this.j = HM(this, d);
        this.output = c
    };
    _.R(IT, Y);
    IT.prototype.g = function() {
        var a = this;
        if (_.I(ZJ) || ho()) this.output.ca();
        else {
            var b;
            Xk(this.C, (b = this.j.value) != null ? b : !1).then(function(c) {
                a.output.G(c)
            })
        }
    };
    IT.prototype.l = function() {
        this.output.ca()
    };
    var Ut = function(a, b, c, d) {
        Y.call(this, a, 1156);
        this.C = b;
        this.uf = c;
        this.j = {
            yd: new Cq
        };
        this.A = X(this, d)
    };
    _.R(Ut, Y);
    Ut.prototype.g = function() {
        if (Ug(this.A.value)) {
            var a = new jk;
            _.Gr(this, a);
            var b = new IT(this.context, this.C, this.j.yd, this.uf);
            J(a, b);
            a.run()
        } else this.j.yd.ca()
    };
    var JT = function(a, b, c) {
        Y.call(this, a, 1123);
        this.j = b;
        this.A = c;
        W(this, b);
        W(this, c)
    };
    _.R(JT, Y);
    JT.prototype.g = function() {
        _.I(XJ) ? (this.j.G(!1), this.A.ca()) : (this.j.G(!0), this.A.G(10))
    };
    var KT = function(a, b, c, d, e) {
        Y.call(this, a, 978);
        this.C = b;
        this.F = c;
        this.j = e;
        W(this, e);
        this.A = HM(this, d.yd)
    };
    _.R(KT, Y);
    KT.prototype.g = function() {
        if (_.I(YJ)) this.j.ca();
        else if (this.A.value) {
            var a = dl(this.A.value, this.C, new _.qO(this.context), this.F);
            this.j.Ra(a)
        } else this.j.ca()
    };
    KT.prototype.l = function() {
        this.j.ca()
    };
    var Wt = function(a, b, c, d, e, f, h, k) {
        Y.call(this, a, 1164);
        this.networkCode = b;
        this.F = c;
        this.Ye = d;
        this.j = f;
        this.I = X(this, e);
        k && (this.A = HM(this, k));
        h && (this.K = X(this, h))
    };
    _.R(Wt, Y);
    Wt.prototype.g = function() {
        var a = mh(window.isSecureContext, window.document),
            b, c = !((b = this.A) == null || !b.value),
            d, e, f;
        b = (e = this.A) == null ? void 0 : (f = e.value) == null ? void 0 : he(f, 1, bd).get((d = this.networkCode.split(",")) == null ? void 0 : d[0]);
        var h;
        !a || c && b === !1 || ((h = this.K) == null ? 0 : h.value) ? (this.j.be.ca(), this.j.We.G(!1), this.j.Xe.ca()) : this.I.value ? (a = new jk, _.Gr(this, a), J(a, new KT(this.context, window, this.F, this.Ye, this.j.be)), c = new JT(this.context, this.j.We, this.j.Xe), J(a, c), a.run()) : (this.j.be.G(5), this.j.We.G(!1), this.j.Xe.G(5))
    };
    var LT = function(a, b, c) {
        Y.call(this, a, 1101);
        this.C = b;
        this.j = c
    };
    _.R(LT, Y);
    LT.prototype.g = function() {
        if (!_.I(YJ)) {
            var a = this.j,
                b = Uk(this.C);
            b.setTopicsCalled ? _.B.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }))
        }
    };
    var Lw = function(a, b, c, d) {
        Y.call(this, a, 1180);
        this.C = b;
        this.Ag = c;
        this.j = HM(this, d.yd)
    };
    _.R(Lw, Y);
    Lw.prototype.g = function() {
        if (this.Ag && this.j.value) {
            var a = new jk;
            _.Gr(this, a);
            J(a, new LT(this.context, this.C, this.j.value));
            a.run()
        }
    };
    var xu = function(a) {
        this.D = _.D(a)
    };
    _.R(xu, _.E);
    var au = function(a, b) {
        return _.me(a, 2, _.Uc(b), "0")
    };
    var MT = function(a) {
        this.D = _.D(a)
    };
    _.R(MT, _.E);
    var eu = function(a, b) {
            return _.Uj(a, xu, 1, _.Wj(b))
        },
        du = gf(MT);
    MT.Z = [1];
    var bw = function(a, b, c, d) {
        Y.call(this, a, 1186);
        this.C = b;
        this.j = Date.now();
        this.output = W(this);
        this.aa = X(this, c);
        this.ve = X(this, d)
    };
    _.R(bw, Y);
    bw.prototype.g = function() {
        if (lh(this.C.isSecureContext, this.C.navigator, this.C.document) && !_.I(iu) && hu(this.j)) {
            var a = _.Tn(new _.IL(this.C), "__gpi", this.aa.value);
            if (a) this.output.G(_.ph(a) % 63001);
            else {
                a = this.j / 1E3;
                for (var b = _.A(this.ve.value), c = b.next(); !c.done; c = b.next())
                    if (c = c.value, a < Number(_.$z(c, 2))) {
                        if (c.getId() >= 63001) {
                            this.output.ca();
                            return
                        }
                        this.output.G(c.getId());
                        return
                    }
                this.output.ca()
            }
        } else this.output.ca()
    };
    var NT = function(a, b, c) {
        Y.call(this, a, 1171);
        this.j = c;
        W(this, c);
        this.Zh = X(this, b)
    };
    _.R(NT, Y);
    NT.prototype.g = function() {
        this.j.G(this.Zh.value.kind === 0)
    };
    var OT = function(a, b, c) {
        Y.call(this, a, 1160);
        this.j = c;
        W(this, c);
        this.A = X(this, b)
    };
    _.R(OT, Y);
    OT.prototype.g = function() {
        if (this.A.value.requestId != null) {
            var a = this.A.value.request;
            this.context.va.Pa.Sa.af.Dl.lc({
                oc: a.byteLength
            });
            a.byteLength > 33792 ? this.j.G({
                kind: 1,
                reason: 3
            }) : (a = qb(a, 3), a.length ? this.j.G({
                kind: 0,
                signal: a,
                requestId: this.A.value.requestId
            }) : this.j.G({
                kind: 1,
                reason: 5
            }))
        } else this.j.G({
            kind: 1,
            reason: this.A.value
        })
    };
    OT.prototype.l = function() {
        this.j.G({
            kind: 1,
            reason: 4
        })
    };
    var PT = function(a, b) {
        Y.call(this, a, 1159);
        this.output = W(this);
        this.navigator = b
    };
    _.R(PT, Y);
    PT.prototype.g = function() {
        var a = this,
            b = {
                seller: "https://securepubads.g.doubleclick.net"
            },
            c = _.yh(lK);
        c && (b.requestSize = c);
        this.output.Ra(this.navigator.getInterestGroupAdAuctionData(b).catch(function(d) {
            a.H(d);
            return 4
        }))
    };
    PT.prototype.l = function() {
        this.output.G(4)
    };
    var nu = function(a, b, c, d, e, f) {
        Y.call(this, a, 1177);
        this.F = b;
        this.j = e;
        this.A = f;
        W(this, e);
        W(this, f);
        this.I = X(this, c);
        d && (this.K = X(this, d))
    };
    _.R(nu, Y);
    nu.prototype.g = function() {
        if (this.I.value) {
            var a;
            if ((a = this.K) == null ? 0 : a.value) this.j.G({
                kind: 1,
                reason: 6
            }), this.A.G(!1);
            else {
                a = new jk;
                _.Gr(this, a);
                var b = new PT(this.context, this.F);
                J(a, b);
                b = new OT(this.context, b.output, this.j);
                J(a, b);
                b = new NT(this.context, this.j, this.A);
                J(a, b);
                a.run()
            }
        } else this.j.G({
            kind: 1,
            reason: 2
        }), this.A.G(!1)
    };
    Fg({
        google_signals: Fg({
            buyer_reporting_id: Kg
        })
    });
    var QT = function(a, b, c, d, e, f) {
        Y.call(this, a, 881);
        this.slotId = b;
        this.O = c;
        this.ga = d;
        this.j = e;
        this.A = f;
        this.output = W(this)
    };
    _.R(QT, Y);
    QT.prototype.g = function() {
        if (_.yh(ju) === 4) {
            var a = _.wm(this.ga, qC, 23);
            if (a) {
                var b;
                if (((b = this.j) == null ? void 0 : b.kind) !== 0) throw new TypeError("Received remote auction config despite " + (this.j ? "invalid" : "absent") + " remarketing input.");
                this.output.G({
                    seller: "https://securepubads.g.doubleclick.net",
                    interestGroupBuyers: _.ce(this.ga, 3, _.Xc, _.Wj(_.om)),
                    requestId: this.j.requestId,
                    serverResponse: gl(hl(a, 1)),
                    resolveToConfig: !_.Q(this.ga, 14)
                })
            } else(b = wC(this.ga)) ? qu(0, 0, b) : reportError(new TypeError("Missing seller signals in B&A error case.")), this.output.ca()
        } else {
            b = _.yh($J);
            var c = b > 0 && this.context.Gb < 1 / b,
                d;
            b = this.output;
            a = b.G;
            var e = this.ga,
                f = (d = this.O.Dd) == null ? void 0 : d[this.slotId.getDomId()],
                h = this.context.va,
                k = this.A;
            d = _.yh(cK);
            var l = _.I(bK),
                m = d === void 0 ? 0 : d;
            d = !_.Q(e, 14);
            var n = {};
            var p = _.Uj(e, nC, 7, _.Wj());
            p = _.A(p);
            for (var q = p.next(); !q.done; q = p.next()) {
                q = q.value;
                var t = {},
                    w = void 0,
                    v = (w = h) == null ? void 0 : w.Pa.Sa.af.Ml;
                w = _.u(q, 1);
                if (_.u(q, 2).length) try {
                    if (t = JSON.parse(_.u(q, 2)), _.oh() * 100 < 1) {
                        var y = void 0;
                        (y = v) == null || y.xa({
                            xg: w,
                            status: "SUCCESS",
                            za: 100
                        })
                    }
                } catch (H) {
                    y = void 0, (y = v) == null || y.xa({
                        xg: w,
                        status: "ERROR",
                        za: 1
                    })
                } else y = void 0, (y = v) == null || y.xa({
                    xg: w,
                    status: "EMPTY",
                    za: 1
                });
                n[_.u(q, 1)] = t
            }
            if (h = _.wm(e, mC, 6)) n["https://googleads.g.doubleclick.net"] = _.Ce(h), n["https://td.doubleclick.net"] = _.Ce(h);
            p = {};
            h = _.A(_.Uj(e, pC, 11, _.Wj()));
            for (q = h.next(); !q.done; q = h.next()) q = q.value, p[_.u(q, 1)] = _.Zz(q, 2);
            q = {};
            _.Zz(e, 21) !== 0 && (q["*"] = _.Zz(e, 21));
            if (_.Uj(e, oC, 32, _.Wj()).length > 0) {
                var z = {};
                h = _.A(_.Uj(e, oC, 32, _.Wj()));
                for (t = h.next(); !t.done; t = h.next()) t = t.value, z[_.u(t, 1)] = _.Zz(t, 2)
            }
            t = {};
            ym(e, 18) != null && (t["https://googleads.g.doubleclick.net"] = fv(e, 18), t["https://td.doubleclick.net"] = fv(e, 18));
            h = _.A(ie(e, 24, uC));
            for (v = h.next(); !v.done; v = h.next()) w = v.value, fv(w[1], 4) && (v = w[0], w = fv(w[1], 4), t[v] = w);
            h = _.u(e, 1).split("/td/")[0];
            var G;
            v = (G = wC(e)) == null ? void 0 : _.Kd(G);
            var C;
            v != null && (C = _.wm(v, rC, 5)) != null && _.ek(C, 2);
            z = _.x(Object, "assign").call(Object, {}, {
                seller: h,
                decisionLogicUrl: _.u(e, 1),
                trustedScoringSignalsUrl: _.u(e, 2),
                interestGroupBuyers: _.ce(e, 3, _.Xc, _.Wj(_.om)),
                sellerExperimentGroupId: fv(e, 17),
                auctionSignals: JSON.parse(_.u(e, 4) || "{}"),
                sellerSignals: (v == null ? void 0 : _.Ce(v)) || [],
                sellerTimeout: _.Zz(e, 15) || 50,
                perBuyerExperimentGroupIds: t,
                perBuyerSignals: n,
                perBuyerTimeouts: p,
                perBuyerCumulativeTimeouts: q,
                reportingTimeout: 5E3
            }, z ? {
                perBuyerGroupLimits: z
            } : {}, d ? {
                resolveToConfig: d
            } : {});
            if (e == null ? 0 : _.Q(xC(e), 25)) z.sellerCurrency = "USD", z.perBuyerCurrencies = _.x(Object, "fromEntries").call(Object, he(e, 22, cd));
            _.u(e, 28) && (z.directFromSellerSignalsHeaderAdSlot = _.u(e, 28));
            ru(z.interestGroupBuyers, c) && (z.auctionReportBuyerKeys = z.interestGroupBuyers.map(su), z.auctionReportBuyers = tu(l), z.auctionReportBuyerDebugModeConfig = uu());
            k && (z.auctionNonce = k, z.additionalBids = _.B.Promise.resolve());
            he(e, 33, cd).size && (z.deprecatedRenderURLReplacements = _.x(Object, "fromEntries").call(Object, (_.F = he(e, 33, cd), _.x(_.F, "entries")).call(_.F)), (G = z.deprecatedRenderURLReplacements["${RENDER_DATA_td.doubleclick.net_GDA}"]) && (z.deprecatedRenderURLReplacements["${RENDER_DATA}"] = G));
            switch (m) {
                case 1:
                    z.allSlotsRequestedSizes = [{
                        width: e.getWidth(),
                        height: e.getHeight()
                    }];
                    break;
                case 2:
                    z.allSlotsRequestedSizes = [{
                        width: 123456789,
                        height: Number(e.getWidth() + "999" + e.getHeight())
                    }]
            }
            G = Object;
            C = G.assign;
            c = _.u(e, 1);
            k = fv(e, 17);
            l = new sC;
            iq(xC(e), rC, 5) && (m = new rC, n = aA(Tz(xC(e), rC, 5), 2), m = _.me(m, 2, Ic(n), "0"), n = aA(Tz(xC(e), rC, 5), 4), m = _.me(m, 4, Ic(n), "0"), _.ol(l, 5, m));
            xC(e).getEscapedQemQueryId() && (m = xC(e).getEscapedQemQueryId(), _.Hi(l, 2, m));
            _.u(xC(e), 6) && (m = _.u(xC(e), 6), _.Hi(l, 6, m));
            _.Q(xC(e), 21) && _.tl(l, 21, !0);
            _.Q(xC(e), 4) && _.tl(l, 4, !0);
            _.u(xC(e), 11) && (m = _.u(xC(e), 11), _.Hi(l, 11, m));
            _.Q(xC(e), 32) && _.tl(l, 32, !0);
            l = _.Ce(l);
            m = _.Zz(e, 15) || 50;
            if (_.Q(e, 30)) {
                if (f == null || !f.length) throw Error("top_td_without_component_auction");
            } else f = [z].concat(_.aj(f != null ? f : []));
            f = C.call(G, {}, {
                seller: h,
                decisionLogicUrl: c,
                sellerExperimentGroupId: k,
                sellerSignals: l,
                sellerTimeout: m,
                interestGroupBuyers: [],
                auctionSignals: {},
                perBuyerExperimentGroupIds: {},
                perBuyerSignals: {},
                perBuyerTimeouts: {},
                perBuyerCumulativeTimeouts: {},
                componentAuctions: f
            }, d ? {
                resolveToConfig: d
            } : {});
            _.u(e, 28) && (f.directFromSellerSignalsHeaderAdSlot = _.u(e, 28));
            a.call(b, f)
        }
    };
    QT.prototype.l = function() {
        this.output.ca()
    };
    var RT = function(a, b, c, d) {
        Y.call(this, a, 1105);
        this.adUnitPath = b;
        this.ga = c;
        this.storage = d
    };
    _.R(RT, Y);
    RT.prototype.g = function() {
        var a = Date.now();
        if (hu(a)) {
            var b = _.ce(this.ga, 3, _.Xc, _.Wj()),
                c = Yt(this.adUnitPath);
            if (_.Q(this.ga, 20)) {
                if (_.I(hK)) {
                    var d;
                    var e = ((d = _.wm(this.ga, tC, 29)) == null ? void 0 : fv(d, 2)) || 864E5
                } else e = 864E5;
                a = yu(b, a + e);
                e = (b = this.storage.getItem(c)) ? eu(du(b), _.om) : [];
                var f;
                b = new MT;
                a = bu(e, a);
                a = _.qm(b, 1, a);
                b = !((f = _.wm(this.ga, tC, 29)) == null || !_.Q(f, 3));
                f = _.dk(a, 2, b);
                this.storage.setItem(c, cl(f))
            } else _.I(gK) && this.storage.removeItem(c)
        }
    };
    var Au = navigator,
        Bu = /(\$\{GDPR})/gi,
        Cu = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        Du = /(\$\{ADDTL_CONSENT})/gi,
        Eu = /(\$\{AD_WIDTH})/gi,
        Fu = /(\$\{AD_HEIGHT})/gi,
        Gu = /(\$\{RENDER_DATA})/gi;
    var ST = function() {
            var a = this;
            this.promise = new _.B.Promise(function(b, c) {
                a.reject = c;
                a.resolve = b
            })
        },
        TT = function() {
            this.auctionSignals = new ST;
            this.topLevelSellerSignals = new ST;
            this.g = new ST;
            this.perBuyerSignals = new ST;
            this.perBuyerTimeouts = new ST;
            this.perBuyerCumulativeTimeouts = new ST;
            this.directFromSellerSignals = new ST;
            this.directFromSellerSignalsHeaderAdSlot = new ST;
            this.perBuyerCurrencies = new ST;
            this.resolveToConfig = new ST;
            this.deprecatedRenderURLReplacements = new ST;
            this.o = new ST
        },
        UT = function(a, b, c, d) {
            this.g = a;
            this.Jg = b;
            this.interestGroupBuyers = c;
            this.Nb = d
        };
    var VT = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v) {
        Y.call(this, a, 1201);
        this.navigator = b;
        this.aa = c;
        this.ga = d;
        this.ia = e;
        this.ba = l;
        this.I = m;
        this.K = n;
        this.U = p;
        this.F = q;
        this.j = t;
        this.ka = GM(this);
        this.A = W(this);
        this.ua = HM(this, f);
        this.Fa = X(this, h);
        this.sa = X(this, k);
        this.fa = X(this, v);
        X(this, w);
        W(this, q);
        W(this, p.ec);
        W(this, p.Ia);
        W(this, p.Ka);
        W(this, this.j)
    };
    _.R(VT, Y);
    VT.prototype.g = function() {
        var a = this.Fa.value,
            b = Math.round(performance.now() - a),
            c = this.sa.value;
        a = this.ua.value;
        var d = wC(this.ga),
            e = _.Q(d, 10),
            f = _.Q(d, 9),
            h = typeof a === "string" || Ku(a),
            k = a !== 3 && a !== 2 && a !== 1;
        this.j.G(h && !f);
        k && cv(this.context, h, c, b, d);
        this.context.R.log(607368714, av, {
            rm: b,
            Al: a,
            Nn: d.getEscapedQemQueryId(),
            Om: _.u(d, 6)
        });
        var l, m;
        k = (m = (l = this.fa.value.componentAuctions) == null ? void 0 : l.length) != null ? m : 0;
        bv(this.context, a, b, c, !!this.ia, d, k, h);
        if (h)
            if (e) this.navigator.deprecatedURNToURL(a, !0), this.F.G(!0), this.A.ca();
            else if (f) {
            _.Q(d, 17) ? qu(0, 0, d) : this.navigator.deprecatedURNToURL(a, !0);
            var n;
            zu(this.U, this.j, this.I, this.K, this.ba, (n = this.ga) == null ? void 0 : _.u(n, 25));
            this.F.G(!0);
            this.A.ca()
        } else {
            this.A.G(a);
            this.F.G(!0);
            if (_.I(fK)) {
                m = this.fa.value;
                n = this.ga;
                var p;
                l = ((p = m.componentAuctions) == null ? void 0 : p.length) === 1 && mu(m.componentAuctions[0].seller) && iq(n, lC, 26) ? Dz(cl(Tz(n, lC, 26)), 3) : ""
            } else l = void 0;
            p = l;
            var q, t, w, v;
            l = _.x(Object, "assign").call(Object, {}, {
                gdprApplies: Qn(this.aa, 3) ? _.Q(this.aa, 3) ? "1" : "0" : null,
                Ff: gA(this.aa, 2),
                Fi: gA(this.aa, 4),
                Gg: (q = this.ga) == null ? void 0 : (t = wC(q)) == null ? void 0 : (w = _.wm(t, eC, 1)) == null ? void 0 : (v = _.wm(w, dC, 2)) == null ? void 0 : Tz(v, cC, 3),
                Ci: this.ga.getWidth().toString(),
                Ai: this.ga.getHeight().toString()
            }, p ? {
                Bk: p
            } : {});
            AM(this.ka, _.I(kK) ? Ju(a, l) : Hu(a, l))
        } else {
            qu(b, a === 2 ? c : 0, d);
            if (!e) {
                var y;
                zu(this.U, this.j, this.I, this.K, this.ba, (y = this.ga) == null ? void 0 : _.u(y, 25))
            }
            this.F.G(!0);
            this.A.ca()
        }
    };
    VT.prototype.l = function() {
        var a, b, c = (a = this.ga) == null ? void 0 : wC(a);
        a = this.ia;
        var d = this.U,
            e = this.j,
            f = this.I,
            h = this.K,
            k = this.ba;
        (b = this.ga) == null || _.u(b, 25);
        c && qu(0, 0, c);
        a == null || a.Nb.abort();
        zu(d, e, f, h, k)
    };
    var WT = function(a, b, c, d, e, f, h, k, l, m, n, p, q) {
        Y.call(this, a, 1200);
        this.M = b;
        this.navigator = c;
        this.j = d;
        this.ga = e;
        this.fa = h;
        this.K = k;
        this.U = l;
        this.ba = n;
        this.ia = p;
        this.F = FM(this);
        this.ua = W(this);
        this.sa = W(this);
        this.ka = W(this);
        this.A = HM(this, f);
        X(this, m);
        W(this, n.ec);
        W(this, n.Ia);
        W(this, n.Ka);
        W(this, p);
        q && (this.I = X(this, q))
    };
    _.R(WT, Y);
    WT.prototype.g = function() {
        if (this.A.value) {
            var a = xC(this.ga);
            dv(this.context, a);
            var b = performance.now();
            this.ua.G(b);
            b = _.Zz(this.ga, 8) || 1E3;
            this.sa.G(b);
            var c, d, e, f;
            if (((c = this.I) == null ? void 0 : c.value) === 4 || ((d = this.I) == null ? void 0 : (e = d.value) == null ? void 0 : e.requestId) != null && ((f = this.I) == null ? void 0 : f.value).request.byteLength > 33792) {
                var h;
                (h = this.j) == null || h.Nb.abort();
                this.F.G(1)
            } else if (c = _.Zz(a, 14) || -1, d = _.Zz(a, 13) || -1, d = d > 0 && this.M.B >= d, c > 0 && this.M.l >= c || d) this.F.G(1);
            else if (++this.M.l, ++this.M.B, this.A.value.signal = AbortSignal.timeout(b), _.Q(a, 15)) --this.M.l, this.F.Ra(new _.B.Promise(function(k) {
                setTimeout(function() {
                    k(1)
                }, 0)
            }));
            else {
                if (this.j && this.A.value.serverResponse) throw new TypeError("Attempted to provide a RemoteAuctionConfig in parallelized auction.");
                a = this.j ? XT(this.A.value, b, this.j) : YT(this, this.A.value);
                --this.M.l;
                this.F.Ra(a)
            }
        } else(a = this.j) == null || a.Nb.abort(), zu(this.ba, this.ia, this.K, this.U, this.fa, _.u(this.ga, 25)), this.ka.G(!1)
    };
    var YT = function(a, b) {
            var c, d;
            return (d = (c = a.navigator).runAdAuction) == null ? void 0 : d.call(c, b).catch(function(e) {
                if (e instanceof DOMException && e.name === "TimeoutError") return 2;
                e instanceof Error && a.H(e);
                return 3
            })
        },
        XT = function(a, b, c) {
            wu(a, c);
            setTimeout(function() {
                c.Nb.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, b);
            return c.g
        };
    WT.prototype.l = function() {
        var a, b = (a = this.ga) == null ? void 0 : wC(a);
        a = this.j;
        var c = this.ba,
            d = this.ia,
            e = this.K,
            f = this.U,
            h = this.fa;
        _.u(this.ga, 25);
        b && qu(0, 0, b);
        a == null || a.Nb.abort();
        zu(c, d, e, f, h)
    };
    var ZT = function(a, b, c, d, e, f, h) {
        Y.call(this, a, 1202);
        this.ga = b;
        this.F = c;
        this.j = d;
        this.A = HM(this, f);
        this.I = X(this, e);
        JM(this, h);
        W(this, d.ec);
        W(this, d.Ia);
        W(this, d.Ka)
    };
    _.R(ZT, Y);
    ZT.prototype.g = function() {
        if (this.A.value) {
            Gm(this.F) || (this.I.value.style.display = "");
            var a = this.A.value,
                b = this.ga;
            var c = this.context.va;
            var d = _.u(b, 31);
            d ? Ku(a) ? (c.Pa.Sa.af.hi.yi.xa({
                za: 1,
                status: "FAILED_FENCED_FRAME"
            }), c = null) : ((b = wC(b)) && _.Q(b, 27) ? (b = jb(b), d = d.replace("%%activeview_prefix%%", b).replace("%%activeview_script%%", "https://pagead2.googlesyndication.com/pagead/managed/js/activeview/current/ufs_web_display.js")) : d = d.replace("%%activeview_prefix%%", "").replace("%%activeview_script%%", ""), a = d.replace("%%srcfledge%%", a), a.length === d.length && a === d ? (c.Pa.Sa.af.hi.yi.xa({
                za: 1,
                status: "FAILED_UNMODIFIED"
            }), c = null) : (c.Pa.Sa.af.hi.yi.xa({
                za: 1,
                status: "OK"
            }), c = a)) : c = null;
            c ? this.j.Ia.G({
                kind: 0,
                qb: c
            }) : this.j.Ia.G({
                kind: 2,
                Ve: this.A.value
            });
            this.j.Ka.G(new _.Nm(this.ga.getWidth(), this.ga.getHeight()));
            this.j.ec.G(!1)
        }
    };
    var $T = function(a, b, c) {
        Y.call(this, a, 1054);
        this.j = b;
        this.output = GM(this);
        this.A = X(this, c)
    };
    _.R($T, Y);
    $T.prototype.g = function() {
        this.A.value || this.j();
        this.output.notify()
    };
    var aU = function(a, b, c, d, e, f) {
        Y.call(this, a, 1053);
        this.slotId = b;
        this.O = c;
        this.M = d;
        this.pb = e;
        this.j = W(this);
        this.A = X(this, f)
    };
    _.R(aU, Y);
    aU.prototype.g = function() {
        this.A.value ? (kv(this.slotId, this.M, this.O, this.pb), this.j.G(!1)) : this.j.G(!0)
    };
    var bU = function(a, b, c, d) {
        Y.call(this, a, 1055);
        this.j = d;
        JM(this, c);
        this.A = X(this, b);
        GM(this, this.j)
    };
    _.R(bU, Y);
    bU.prototype.g = function() {
        this.A.value && this.j.notify()
    };
    var uw = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, y, z) {
        Y.call(this, a, 1179);
        this.slotId = b;
        this.W = d;
        this.M = e;
        this.aa = f;
        this.A = h;
        this.U = m;
        this.F = n;
        this.O = p;
        this.fa = q;
        this.pb = t;
        this.ga = w;
        this.j = v;
        this.ka = y;
        this.ia = z;
        this.I = X(this, k);
        this.K = X(this, l);
        this.ba = HM(this, c)
    };
    _.R(uw, Y);
    uw.prototype.g = function() {
        var a = new jk;
        _.Gr(this, a);
        var b = W(this);
        if (this.ga) {
            var c = xC(this.ga),
                d = _.Q(c, 10);
            if (this.ga.getWidth() && this.ga.getHeight())
                if (d)
                    if (zu({
                            ec: b,
                            Ia: this.j.Ia,
                            Ka: this.j.Ka
                        }, this.j.Kd, this.I.value, this.K.value, this.A), _.Q(c, 17)) {
                        qu(0, 0, c);
                        var e;
                        (e = this.F) == null || e.Nb.abort()
                    } else cU(this, a, this.ga);
            else b = cU(this, a, this.ga);
            else {
                zu({
                    ec: b,
                    Ia: this.j.Ia,
                    Ka: this.j.Ka
                }, this.j.Kd, this.I.value, this.K.value, this.A);
                qu(0, 0, c);
                var f;
                (f = this.F) == null || f.Nb.abort();
                this.H(Error("Missing width or height"))
            }
        } else zu({
            ec: b,
            Ia: this.j.Ia,
            Ka: this.j.Ka
        }, this.j.Kd, this.I.value, this.K.value, this.A), (c = this.F) == null || c.Nb.abort(new DOMException("runAdAuction", "ThrottledError"));
        e = new aU(this.context, this.slotId, this.O, this.M, this.pb, b);
        J(a, e);
        b = new $T(this.context, this.fa, b);
        J(a, b);
        b = new bU(this.context, e.j, b.output, this.j.gg);
        J(a, b);
        a.run()
    };
    var cU = function(a, b, c) {
        if (_.yh(ju) === 2 && a.ba.value && _.Q(c, 20) && _.ce(c, 3, _.Xc, _.Wj()).length !== 0) {
            var d = new RT(a.context, a.slotId.getAdUnitPath(), c, a.ba.value);
            J(b, d)
        }
        var e = new QT(a.context, a.slotId, a.O, c, a.ka, a.ia);
        J(b, e);
        var f = navigator,
            h = {
                Ia: a.j.Ia,
                Ka: a.j.Ka,
                ec: new Cq
            };
        d = h.ec;
        var k = void 0;
        _.I(aK) && (k = new PT(a.context, f), J(b, k));
        var l;
        k = new WT(a.context, a.M, f, a.F, c, e.output, a.A, a.I.value, a.K.value, a.U, h, a.j.Kd, (l = k) == null ? void 0 : l.output);
        J(b, k);
        l = new VT(a.context, f, a.aa, c, a.F, k.F, k.ua, k.sa, a.A, a.I.value, a.K.value, h, k.ka, a.j.Kd, a.U, e.output);
        J(b, l);
        c = new ZT(a.context, c, cr(a.W), h, a.U, l.A, l.ka);
        J(b, c);
        a = new $r(a.context, a.slotId, jv);
        J(b, a);
        return d
    };
    var dU = function() {
        tT.apply(this, arguments)
    };
    _.R(dU, tT);
    var eU = function(a, b) {
            var c = a.g.O.qc;
            c = c ? c : _.Nf(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.ye;
            c.name = a.ye;
            c.title = a.ze;
            Array.isArray(a.l) ? a.l[0] != null && a.l[1] != null && (c.width = String(a.l[0]), c.height = String(a.l[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        fU = function(a, b) {
            typeof a.l !== "string" && (b.width = String(a.l[0]), b.height = String(a.l[1]));
            var c = Cl(a.context, 774, function() {
                a.loaded(b);
                _.Of(b, "load", c)
            });
            _.tf(b, "load", c);
            _.Jp(a, function() {
                return _.Of(b, "load", c)
            });
            a.g.O.qc || a.g.yb.appendChild(b)
        };
    var gU = function() {
        dU.apply(this, arguments)
    };
    _.R(gU, dU);
    gU.prototype.j = function() {
        var a = eU(this, !this.g.Io);
        if (typeof this.wa.Ve === "string") {
            var b = this.wa.Ve;
            /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = jf(b), a.src = _.gb(b).toString())
        } else a.config = this.wa.Ve;
        if (_.I(oK) && this.g.Mk) {
            b = this.g.yb;
            var c = jb(this.g.Mk);
            var d = new DA;
            a.setAttribute("class", "GoogleActiveViewElement");
            a.setAttribute("data-google-av-cxn", c);
            a.setAttribute("data-google-av-itpl", (40).toString());
            a.setAttribute("data-google-av-ufs-integrator-metadata", btoa(cl(d)));
            c = b.appendChild;
            d = document.createElement("script");
            d.setAttribute("id", "googleActiveViewDisplayScript");
            var e = _.kf(EA);
            hb(d, e);
            d.async = !0;
            c.call(b, d)
        }
        fU(this, a);
        return a
    };
    gU.prototype.B = function() {
        return !1
    };
    var hU = navigator,
        iU = function(a, b, c, d, e, f, h, k, l) {
            Y.call(this, a, 1089);
            this.md = b;
            this.V = c;
            this.O = d;
            this.F = f;
            this.K = k;
            this.j = l;
            W(this, l);
            e && (this.A = HM(this, e));
            h && (this.I = HM(this, h))
        };
    _.R(iU, Y);
    iU.prototype.g = function() {
        var a = {};
        if (this.md === 2) {
            var b, c = (b = this.A) == null ? void 0 : b.value;
            if (!c) {
                this.j.ca();
                return
            }
            var d;
            b = (d = this.I) == null ? void 0 : d.value;
            d = _.A(this.V);
            for (var e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = c.get(e.getId()),
                    h = void 0;
                if ((h = f) != null && h.length) {
                    var k = void 0;
                    h = (k = b) == null ? void 0 : k.get(e.getAdUnitPath());
                    k = void 0;
                    var l = (k = this.K) == null ? void 0 : k.get(e);
                    a[e.getId()] = jU(this, e, f, this.F, h, l)
                }
            }
        }
        this.j.G(a)
    };
    var jU = function(a, b, c, d, e, f) {
        var h = new TT,
            k = new AbortController,
            l = _.yh($J);
        l = l > 0 && a.context.Gb < 1 / l;
        var m, n = vu({
            Jg: h,
            Nb: k,
            interestGroupBuyers: c,
            Dd: (m = a.O.Dd) == null ? void 0 : m[b.getDomId()],
            Nm: d,
            zm: e,
            xl: l,
            Sn: _.I(bK),
            sellerTimeout: _.yh(iK),
            auctionNonce: f
        });
        b = hU.runAdAuction(n).catch(function(p) {
            if (p instanceof DOMException && p.name === "TimeoutError") return 2;
            if (p instanceof DOMException && p.name === "ThrottledError") return 4;
            p instanceof Error && a.H(p);
            return 3
        });
        return new UT(b, h, c, k)
    };
    var kU = function(a, b, c, d) {
        Y.call(this, a, 1230);
        this.V = b;
        this.A = d;
        this.j = HM(this, c);
        W(this, d)
    };
    _.R(kU, Y);
    kU.prototype.g = function() {
        var a = this.j.value,
            b = new _.B.Map;
        if (a != null && a.size && !Lx()) {
            var c = Eh(dK);
            if (c.length !== 0)
                for (var d = _.A(this.V), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    var f = a.get(e.getId()),
                        h = void 0;
                    if ((h = f) != null && h.length) {
                        h = new _.B.Map;
                        f = _.A(f);
                        for (var k = f.next(); !k.done; k = f.next()) k = k.value, _.x(c, "includes").call(c, _.ph(k).toString()) && h.set(k, Math.floor(_.oh() * 63001));
                        h.size && b.set(e.getAdUnitPath(), h)
                    }
                }
        }
        this.A.G(b)
    };
    var lU = function(a, b, c, d, e, f, h) {
        Y.call(this, a, 1106);
        this.aa = b;
        this.I = c;
        this.A = d;
        this.V = e;
        this.F = f;
        this.K = h;
        this.j = W(this);
        W(this, h)
    };
    _.R(lU, Y);
    lU.prototype.g = function() {
        for (var a = fu(this.A, this.I, this.aa, _.I(mK), this.F), b = new _.B.Map, c = mv(a), d = new _.B.Map, e = _.A(this.V), f = e.next(); !f.done; f = e.next()) {
            var h = f.value;
            f = h.getAdUnitPath();
            var k = a.get(Yt(f)),
                l = void 0,
                m = void 0,
                n = void 0,
                p = (n = (m = c) != null ? m : (l = k) == null ? void 0 : eu(l).map(function(q) {
                    return _.u(q, 1)
                })) != null ? n : [];
            b.set(h.getId(), p);
            if (!d.has(f)) {
                h = [];
                p = _.A(p.sort());
                for (k = p.next(); !k.done; k = p.next()) h.push(_.ph(k.value));
                d.set(f, h)
            }
        }
        this.j.G(b);
        this.K.G(d)
    };
    var nv = function(a, b, c, d, e, f, h, k, l, m) {
        Y.call(this, a, 1170);
        this.md = b;
        this.O = c;
        this.aa = d;
        this.A = e;
        this.F = Date.now();
        this.j = {
            Ph: W(this)
        };
        b === 2 && this.A && (this.j.gh = W(this), this.j.Cf = W(this));
        this.U = X(this, f);
        this.K = X(this, h);
        k && (this.I = HM(this, k));
        l && (this.fa = X(this, l));
        m && _.I(nK) && (this.ba = HM(this, m))
    };
    _.R(nv, Y);
    nv.prototype.g = function() {
        var a = this.U.value,
            b;
        if (this.K.value && a.length && ((b = this.fa) == null || !b.value) && hu(this.F)) {
            b = new jk;
            _.Gr(this, b);
            if (this.md === 2 && this.A) {
                var c, d;
                var e = new lU(this.context, this.aa, this.A, this.F, a, (d = (c = this.I) == null ? void 0 : c.value) != null ? d : void 0, this.j.gh);
                J(b, e);
                e = e.j;
                c = new kU(this.context, a, e, this.j.Cf);
                J(b, c)
            }
            var f, h, k, l;
            a = new iU(this.context, this.md, a, this.O, e, (k = (f = this.I) == null ? void 0 : f.value) != null ? k : void 0, this.j.Cf, (l = (h = this.ba) == null ? void 0 : h.value) != null ? l : void 0, this.j.Ph);
            J(b, a);
            b.run()
        } else {
            this.j.Ph.ca();
            var m;
            (m = this.j.gh) == null || m.ca();
            var n;
            (n = this.j.Cf) == null || n.ca()
        }
    };
    var mU = function(a, b, c) {
        Y.call(this, a, 1216);
        this.j = b;
        this.output = FM(this);
        this.A = X(this, c)
    };
    _.R(mU, Y);
    mU.prototype.g = function() {
        var a = this,
            b = this.A.value,
            c = new _.B.Map;
        if (b.length) {
            var d = this.j;
            b = b.map(function(e) {
                return d.createAuctionNonce().then(function(f) {
                    c.set(e, f)
                }).catch(function(f) {
                    a.H(f)
                })
            });
            this.output.Ra(_.B.Promise.all(b).then(function() {
                return c
            }))
        } else this.output.G(c)
    };
    var Av = new _.B.Set,
        nU = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.ca.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new DL("Reached Limit for addEventListener");
        }, 3E5),
        oU = function(a, b, c) {
            _.V.call(this);
            this.context = a;
            this.P = b;
            this.l = c;
            this.g = [];
            this.enabled = !1;
            this.J = 0;
            this.j = new _.B.Map;
            Av.add(this);
            this.P.info(fP(this.getName()))
        };
    _.R(oU, _.V);
    var Cv = function(a) {
        a.enabled || (a.enabled = !0, Sn(6, a.context), a.A())
    };
    oU.prototype.slotAdded = function(a, b) {
        this.g.push(a);
        var c = new vS(a, this.getName());
        gv(this.l, "slotAdded", 818, c);
        this.P.info(gP(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        _.oe(b, 4, _.Vc, a)
    };
    oU.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return Ia(b.g, c)
        })
    };
    oU.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = c === void 0 ? window : c;
        if (this.J >= _.yh($I) && _.yh($I) > 0) return nU(), !1;
        if (!c.IntersectionObserver && (_.F = ["impressionViewable", "slotVisibilityChanged"], _.x(_.F, "includes")).call(_.F, a)) return P(this.P, VP()), !1;
        var e;
        if ((e = this.j.get(a)) == null ? 0 : e.has(b)) return !1;
        this.j.has(a) || this.j.set(a, new _.B.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (h) {
                d.P.error(vP(String(h), a))
            }
        };
        this.j.get(a).set(b, c);
        this.l.listen(a, c);
        this.J++;
        return !0
    };
    oU.prototype.removeEventListener = function(a, b) {
        var c, d = (c = this.j.get(a)) == null ? void 0 : c.get(b);
        if (!d || !tO(this.l, a, d)) return !1;
        this.J--;
        return this.j.get(a).delete(b)
    };
    var sv = function(a) {
        for (var b = _.A(Av), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var wv = function(a, b, c, d) {
        oU.call(this, a, b, d);
        this.B = c;
        this.ads = new _.B.Map;
        this.rd = !1
    };
    _.R(wv, oU);
    wv.prototype.setRefreshUnfilledSlots = function(a) {
        typeof a === "boolean" && (this.rd = a)
    };
    var lQ = function(a, b) {
            var c;
            return a.B.enabled && !((c = a.ads.get(b)) == null || !c.Hn)
        },
        mQ = function(a, b, c, d) {
            b = new rS(b, a.getName());
            c != null && d != null && (b.size = [c, d]);
            gv(a.l, "slotRenderEnded", 67, b)
        };
    wv.prototype.getName = function() {
        return "companion_ads"
    };
    wv.prototype.slotAdded = function(a, b) {
        var c = this;
        a.listen(wO, function(d) {
            Yz(d.detail, 11) && (pU(c, a).Hn = !0)
        });
        oU.prototype.slotAdded.call(this, a, b)
    };
    wv.prototype.A = function() {};
    var pU = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.Jp(b, function() {
                return a.ads.delete(b)
            }));
            return c
        },
        jQ = function(a, b) {
            var c = _.Qm().g,
                d = _.Qm().Xa;
            if (a.B.enabled) {
                var e = {
                    mc: 3
                };
                a.H && (e.ce = a.H);
                a.F && (e.de = a.F);
                b = b != null ? b : a.g;
                c = _.Rm(c, d);
                d = e.ce;
                var f = e.de;
                d && typeof d !== "number" || f && typeof f !== "number" || a.B.refresh(c, b, e)
            } else(b == null ? 0 : b[0]) && a.P.error(mP(b[0].getDomId()))
        },
        kQ = function(a, b) {
            return a.g.filter(function(c) {
                return _.x(b, "includes").call(b, c.toString())
            })
        };
    var xv = function(a, b, c) {
        oU.call(this, a, b, c)
    };
    _.R(xv, oU);
    xv.prototype.getName = function() {
        return "content"
    };
    xv.prototype.A = function() {};
    var qU = _.Zx(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        rU = _.Zx(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        sU = new _.B.Map([
            [2, {
                zh: "page_level_ads"
            }],
            [5, {
                zh: "shoppit"
            }],
            [6, {
                zh: "side_rails"
            }]
        ]),
        tU = function(a) {
            var b = b === void 0 ? sU : b;
            this.context = a;
            this.g = b;
            this.o = new _.B.Map;
            this.loaded = new _.B.Set
        },
        vU;
    tU.prototype.load = function(a) {
        var b = _.uU(this, a),
            c, d = ((c = this.g.get(a.module)) != null ? c : {}).zh;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            d = (c = _.vm(172)) && RC((c.src || "").match(_.QC)[3] || null) === "pagead2.googlesyndication.com" ? _.kf(rU, this.context.La, d) : _.kf(qU, this.context.La, d);
            c = {};
            var e = _.yh(JJ);
            e && (c.cb = e);
            d = _.x(Object, "keys").call(Object, c).length ? _.tg(d, c) : d;
            vU(this, a);
            _.qp(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.uU = function(a, b) {
        b = b.module;
        a.o.has(b) || a.o.set(b, new _.Oh);
        return a.o.get(b)
    };
    vU = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = Cl(a.context, 340, function(e) {
            if (a.g.has(c) && typeof e === "function") {
                var f = a.g.get(c);
                f = (f.jm === void 0 ? [] : f.jm).map(function(h) {
                    return _.uU(a, h).promise
                });
                _.B.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(Mo(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    var Vv = function(a, b) {
        Y.call(this, a, 980);
        this.output = new at;
        this.j = [];
        this.A = X(this, b)
    };
    _.R(Vv, Y);
    Vv.prototype.g = function() {
        for (var a = _.A((_.F = [this.A.value, this.j.map(function(c) {
                return c.value
            })], _.x(_.F, "flat")).call(_.F)), b = a.next(); !b.done; b = a.next()) hh(b.value);
        this.output.notify()
    };
    var Pv = di(892, function(a) {
        a = a.config;
        if (!a) throw Error("no per-pub config");
        var b, c, d, e, f, h, k, l = (c = _.wm(a, wB, 3)) != null ? c : null;
        c = (d = _.wm(a, yB, 2)) != null ? d : null;
        d = Iu(a, 4);
        d = d != null ? d : [];
        var m = _.Uj(a, sB, 11, _.Wj());
        m = m != null ? m : [];
        var n = _.Uj(a, rB, 6, _.Wj());
        var p = _.Uj(a, IB, 5, _.Wj());
        var q = (e = _.wm(a, HB, 7)) != null ? e : null;
        e = _.B.Set;
        var t;
        (b = _.wm(a, tB, 1)) == null ? t = void 0 : t = _.ce(b, 6, _.Xc, _.Wj());
        return {
            fb: l,
            Cc: c,
            Vc: d,
            ve: m,
            ue: n,
            qd: p,
            ji: q,
            xi: new e(t),
            se: (f = _.wm(a, KB, 8)) != null ? f : null,
            ri: (h = _.wm(a, LB, 9)) != null ? h : null,
            Pd: (k = _.wm(a, BB, 10)) != null ? k : null
        }
    }, {
        fb: void 0,
        Cc: void 0,
        Vc: void 0,
        ve: void 0,
        ue: void 0,
        qd: void 0,
        ji: void 0,
        xi: void 0,
        se: void 0,
        ri: void 0,
        Pd: void 0
    }, function(a) {
        return {
            fb: a,
            Cc: a,
            Vc: [],
            ve: [],
            ue: [],
            qd: [],
            ji: null,
            xi: new _.B.Set,
            se: null,
            ri: null,
            Pd: null
        }
    });
    var Mv = function(a, b) {
        Y.call(this, a, 891);
        var c = this;
        this.j = W(this);
        this.error = void 0;
        var d = W(this);
        this.A = X(this, d);
        b(function(e, f) {
            if (f) c.error = f, d.G([]);
            else try {
                if (typeof e === "string") {
                    var h = JSON.parse(e || "[]");
                    Array.isArray(h) && d.G(h)
                }
            } catch (k) {} finally {
                d.Wd || (c.error = Error("malformed response"), d.G([]))
            }
        })
    };
    _.R(Mv, Y);
    Mv.prototype.g = function() {
        if (this.error) throw this.error;
        this.j.G(De(MB, this.A.value))
    };
    var wU = function(a, b) {
        Y.call(this, a, 1081);
        this.zb = W(this);
        this.j = HM(this, b)
    };
    _.R(wU, Y);
    wU.prototype.g = function() {
        this.j.value ? this.zb.G(this.j.value) : this.zb.ca()
    };
    var xU = new _.B.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        yU = function(a, b, c, d, e, f, h, k, l) {
            Y.call(this, a, 1079);
            this.da = b;
            this.googletag = c;
            this.X = d;
            this.I = e;
            this.j = f;
            this.P = h;
            this.A = k;
            this.F = l;
            W(this)
        };
    _.R(yU, Y);
    yU.prototype.g = function() {
        var a = this,
            b = this.A.getAdUnitPath(),
            c = xU.get(_.Uf(this.A, 2, 0));
        if (b && c) {
            var d, e = (d = this.X) != null ? d : this.j.g;
            b = new QR(this.context, this.da, b, c, !0, this.googletag.pubads(), this.googletag.display, function() {
                a.googletag.pubadsReady || a.googletag.enableServices()
            }, this.googletag.cmd, e, this.j, this.I, this.P, !1, this.F);
            _.Gr(this, b);
            b.run()
        }
    };
    var Uv = function(a, b, c, d, e, f, h) {
        Y.call(this, a, 1082);
        this.googletag = b;
        this.X = c;
        this.I = d;
        this.A = e;
        this.P = f;
        this.F = W(this);
        this.j = new wU(this.context, this.F);
        this.zb = this.j.zb;
        _.Gr(this, this.j);
        this.K = X(this, h)
    };
    _.R(Uv, Y);
    Uv.prototype.g = function() {
        if (_.I(IJ)) {
            for (var a = [], b = _.A(this.K.value), c = b.next(); !c.done; c = b.next()) switch (c = c.value, fl(c, JB)) {
                case 5:
                    a.push(c);
                    break;
                case 8:
                    var d = c
            }
            this.F.Cb(d == null ? void 0 : _.wm(d, EB, 4));
            d = new jk;
            _.Gr(this, d);
            a = _.A(a);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, c = void 0, J(d, new yU(this.context, document, this.googletag, (c = this.X) != null ? c : this.A.g, this.I, this.A, this.P, _.wm(b, FB, il(b, JB, 5)), _.wm(b, EB, 4)));
            J(d, this.j);
            d.run()
        } else this.zb.ca()
    };
    var Px = function(a) {
        NM.call(this, function(b, c) {
            Gl(a, b, c);
            var d;
            (d = console) == null || d.error(c)
        })
    };
    _.R(Px, NM);
    var zU = function() {
        dU.apply(this, arguments)
    };
    _.R(zU, dU);
    zU.prototype.j = function() {
        var a = this.g,
            b = a.Jk;
        a = a.Df;
        var c = eU(this);
        if (b == null ? 0 : b.length)
            if (wz) {
                b = _.A(b);
                for (var d = b.next(); !d.done; d = b.next()) c.sandbox.add(d.value)
            } else c.sandbox.add.apply(c.sandbox, _.aj(b));
        a && (c.allow = a);
        fU(this, c);
        AU(this, c, this.wa.qb);
        return c
    };
    zU.prototype.B = function() {
        return !0
    };
    var AU = function(a, b, c) {
        function d() {
            var m, n, p = (n = (m = b.contentWindow) == null ? void 0 : m.document) != null ? n : b.contentDocument;
            if (!p) return !1;
            ma() && p.open("text/html", "replace");
            p.write(_.hz(e));
            var q, t, w;
            if (Hy((w = (q = b.contentWindow) == null ? void 0 : (t = q.location) == null ? void 0 : t.href) != null ? w : "", "#")) {
                var v, y;
                (v = b.contentWindow) == null || (y = v.history) == null || y.replaceState(null, "", "#" + Math.random())
            }
            p.close();
            return !0
        }
        var e = hw(Lj(c));
        if (!d()) {
            c = a.g;
            var f = c.da,
                h = c.P,
                k = c.slotId,
                l = new MutationObserver(function() {
                    d() && (P(h, hQ(), k), l.disconnect())
                });
            _.Jp(a, function() {
                return void l.disconnect()
            });
            l.observe(f, {
                childList: !0,
                subtree: !0
            });
            P(h, gQ(), k)
        }
    };
    var Nw = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, y, z, G, C, H, L, S, M, da, Z, U) {
        Y.call(this, a, 680);
        this.slotId = b;
        this.M = c;
        this.P = d;
        this.O = e;
        this.Ca = f;
        this.ib = h;
        this.ac = k;
        this.pb = l;
        this.isBackfill = m;
        this.tc = n;
        this.ga = p;
        this.C = q;
        this.j = W(this);
        this.F = W(this);
        this.A = GM(this);
        this.K = X(this, t);
        this.ia = X(this, w);
        JM(this, v);
        this.U = X(this, y);
        this.I = X(this, z);
        this.vd = X(this, G);
        JM(this, H);
        this.ka = HM(this, C);
        JM(this, L);
        this.fa = X(this, S);
        JM(this, M);
        Z && JM(this, Z);
        da && (this.ba = HM(this, da));
        U && JM(this, U)
    };
    _.R(Nw, Y);
    Nw.prototype.g = function() {
        var a = this.K.value;
        if (a.kind === 0 && a.qb == null) throw new EL("invalid html");
        var b, c, d;
        a: {
            var e = this.context,
                f = {
                    da: document,
                    slotId: this.slotId,
                    M: this.M,
                    P: this.P,
                    O: this.O,
                    Ca: this.Ca,
                    size: this.vd.value,
                    Vb: this.U.value,
                    yb: this.I.value,
                    pb: this.pb,
                    ac: this.ac,
                    Jk: this.ka.value,
                    isBackfill: this.isBackfill,
                    tc: this.tc,
                    Df: this.fa.value,
                    Io: (b = this.ga) == null ? void 0 : _.Q(b, 14),
                    tg: (c = this.ba) == null ? void 0 : c.value,
                    ib: this.ib,
                    Mk: _.I(oK) ? (d = this.ga) == null ? void 0 : wC(d) : void 0
                };b = this.ia.value;c = a.kind;
            switch (c) {
                case 0:
                    a = new(b ? wT : zU)(e, a, f);
                    break a;
                case 2:
                    a = new gU(e, a, f);
                    break a;
                default:
                    eb(c)
            }
            a = void 0
        }
        _.Gr(this, a);
        e = a.render();
        BU(this, this.C, e);
        this.C.top && this.C.top !== this.C && _.Sk(this.C.top) && BU(this, this.C.top, e);
        this.A.notify();
        this.j.G(e);
        this.F.G(a.B())
    };
    var BU = function(a, b, c) {
        Lp(a, a.id, b, "message", function(d) {
            c.contentWindow === d.source && gv(a.slotId, as, 824, d)
        })
    };
    var mw = function(a, b, c, d, e) {
        Y.call(this, a, 720);
        this.format = b;
        this.ra = c;
        this.Ua = d;
        this.height = e;
        this.output = W(this)
    };
    _.R(mw, Y);
    mw.prototype.g = function() {
        if (this.height == null) this.output.ca();
        else {
            var a = Math.round(this.ra * .3),
                b;
            this.format !== 2 && this.format !== 3 || (b = this.Ua) == null || !_.Q(b, 12, !1) || a <= 0 || this.height <= a ? this.output.G(this.height) : this.output.G(a)
        }
    };
    var xw = function(a, b, c, d, e, f, h, k, l, m, n, p, q) {
        Y.call(this, a, 674);
        this.slotId = b;
        this.X = c;
        this.Xa = d;
        this.da = f;
        this.M = h;
        this.ac = n;
        this.qc = q;
        this.output = W(this);
        this.F = e === 2 || e === 3;
        this.j = X(this, k);
        this.A = X(this, l);
        this.vd = HM(this, m);
        p && JM(this, p)
    };
    _.R(xw, Y);
    xw.prototype.g = function() {
        var a;
        if ((a = this.qc) == null ? 0 : a.parentElement) this.output.G(this.qc.parentElement);
        else {
            a = Iq(this.X, this.Xa);
            var b = Um(this.slotId, this.da) || gq(this.j.value, nn(this.slotId), a);
            this.A.value && !a && (b.style.display = "inline-block");
            this.F ? FO(this.M, this.slotId, function() {
                return void _.KC(b)
            }) : _.Jp(this, function() {
                return void _.KC(b)
            });
            a = CU(this);
            a > 0 && (b.style.paddingTop = a + "px");
            this.output.G(b)
        }
    };
    var CU = function(a) {
        var b = a.j.value,
            c, d = (c = a.vd.value) == null ? void 0 : c.height;
        return b && !a.ac && d ? Jq(a.X, a.Xa) ? Math.floor((b.offsetHeight - d) / 2) : 0 : 0
    };
    var kw = function(a, b) {
        Y.call(this, a, 859);
        this.C = b;
        this.output = W(this)
    };
    _.R(kw, Y);
    kw.prototype.g = function() {
        this.output.G(!_.Sk(this.C.top))
    };
    var Iw = function(a, b, c) {
        Y.call(this, a, 840);
        this.format = b;
        this.da = c;
        this.output = W(this)
    };
    _.R(Iw, Y);
    Iw.prototype.g = function() {
        var a = [],
            b = this.da;
        b = b === void 0 ? document : b;
        var c;
        (c = b.featurePolicy) != null && (_.F = c.features(), _.x(_.F, "includes")).call(_.F, "attribution-reporting") && a.push("attribution-reporting");
        switch (this.format) {
            case 5:
            case 4:
            case 7:
                a.push("autoplay")
        }
        a.length ? this.output.G(a.join(";")) : this.output.G("")
    };
    var ax = function(a, b, c, d) {
        Y.call(this, a, 1207);
        this.Ca = c;
        this.slotId = d;
        JM(this, b)
    };
    _.R(ax, Y);
    ax.prototype.g = function() {
        gv(this.Ca, "impressionViewable", 715, new sS(this.slotId, "publisher_ads"))
    };
    var $w = function(a, b, c, d) {
        JS.call(this, a, b, c);
        JM(this, d)
    };
    _.R($w, JS);
    var ww = di(674, function(a, b, c, d, e, f, h, k, l, m) {
        if (l == null ? 0 : l.parentElement) return {
            yb: l.parentElement
        };
        l = a.Vb;
        var n = a.Db;
        a = a.size;
        var p = Iq(h, k),
            q, t = (q = Um(b, e)) != null ? q : gq(l, nn(b), p);
        n && !p && (t.style.display = "inline-block");
        c === 2 || c === 3 ? FO(f, b, function() {
            return void _.KC(t)
        }) : _.Jp(m, function() {
            return void _.KC(t)
        });
        b = iw(h, k, l, a == null ? void 0 : a.height, d);
        b > 0 && (t.style.paddingTop = b + "px");
        return {
            yb: t
        }
    }, {
        yb: void 0
    });
    var Ww = function(a, b, c, d, e, f) {
        f = f === void 0 ? jw : f;
        Y.call(this, a, 783);
        var h = this;
        this.slotId = b;
        this.da = d;
        this.Ca = e;
        this.I = f;
        this.j = this.A = -1;
        this.K = _.JA(function() {
            gv(h.Ca, "slotVisibilityChanged", 716, new tS(h.slotId, "publisher_ads", h.j))
        }, 200);
        this.F = X(this, c);
        var k = new at;
        uO(this.slotId).then(function() {
            return void k.notify()
        });
        JM(this, k)
    };
    _.R(Ww, Y);
    Ww.prototype.g = function() {
        var a = this,
            b = this.I(Cl(this.context, this.id, function(c) {
                c = _.A(c);
                for (var d = c.next(); !d.done; d = c.next()) a.A = d.value.intersectionRatio * 100, _.x(Number, "isFinite").call(Number, a.A) && DU(a)
            }));
        b && (b.observe(this.F.value), Lp(this, this.id, this.da, "visibilitychange", function() {
            DU(a)
        }), _.Jp(this, function() {
            b.disconnect()
        }))
    };
    var DU = function(a) {
        var b = Math.floor(YL(a.da) ? 0 : a.A);
        if (b < 0 || b > 100 || b === a.j ? 0 : a.j !== -1 || b !== 0) a.j = b, a.K()
    };
    var Gw = function(a, b, c, d, e, f) {
        Y.call(this, a, 719);
        this.X = b;
        this.Xa = c;
        this.vi = d;
        this.output = W(this);
        this.j = X(this, e);
        this.A = X(this, f)
    };
    _.R(Gw, Y);
    Gw.prototype.g = function() {
        var a = this.j.value.kind;
        switch (a) {
            case 0:
                this.j.value.qb ? this.A.value ? (a = new Ln, a = _.dk(a, 3, this.vi), _.Q(Rn([a, this.X.Yc(), this.Xa.Yc()]), 3) ? this.output.G(QN) : this.output.ca()) : this.output.ca() : this.output.ca();
                break;
            case 2:
                this.output.ca();
                break;
            default:
                eb(a)
        }
    };
    var EU = function(a, b, c, d, e, f) {
        Y.call(this, a, 1119);
        this.slotId = b;
        this.A = c;
        this.documentElement = d;
        this.M = e;
        this.j = f;
        this.output = W(this)
    };
    _.R(EU, Y);
    EU.prototype.g = function() {
        var a = _.Nf("INS"),
            b = function() {
                return void _.KC(a)
            };
        this.j === 6 ? _.Jp(this, b) : (a.id = this.A, Gm(this.j) && _.Qp(a, {
            display: "none"
        }), this.documentElement.appendChild(a), (_.F = [2, 3], _.x(_.F, "includes")).call(_.F, this.j) ? FO(this.M, this.slotId, b) : _.Jp(this, b));
        this.output.G(a)
    };
    var FU = function(a, b, c, d, e) {
        Y.call(this, a, 1120);
        this.I = b;
        this.A = c;
        this.K = d;
        this.j = e;
        this.output = W(this);
        a = this.j;
        if (!_.La(a) || !_.La(a) || a.nodeType !== 1 || a.namespaceURI && a.namespaceURI !== "http://www.w3.org/1999/xhtml") this.F = X(this, this.j)
    };
    _.R(FU, Y);
    FU.prototype.g = function() {
        var a, b, c = (b = (a = this.F) == null ? void 0 : a.value) != null ? b : this.j;
        if (!(_.F = [2, 3], _.x(_.F, "includes")).call(_.F, this.A)) {
            a = _.A(_.x(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, b.nodeType === 1 && b.id !== this.I && _.KC(b);
            this.K || (c.style.display = "")
        }
        this.output.G(c)
    };
    var nw = function(a, b, c, d, e, f, h, k, l) {
        jk.call(this);
        c ? (a = new FU(a, e, h, l, c), J(this, a), a = a.output) : Fm(h) ? (a = new EU(a, b, d, f, k, h), J(this, a), a = a.output) : (b = new rs(a, b, vO, function(m) {
            return m.detail
        }), J(this, b), a = new FU(a, e, h, l, b.output), J(this, a), a = a.output);
        this.output = a
    };
    _.R(nw, jk);
    var GU = function(a, b) {
            var c = _.Qm();
            this.context = a;
            this.M = b;
            this.g = c
        },
        HU = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, y) {
            var z = document,
                G = window;
            e || f || MO(a.M, d);
            var C = fx(a.context, b, a.g, c, d, e, f, h, k, l, m, z, n, p, q, t, w, function() {
                MO(a.M, d);
                LO(a.M, d, C)
            }, v, y);
            f || LO(a.M, d, C);
            _.Jp(d, function() {
                MO(a.M, d)
            });
            G.top !== G && G.addEventListener("pagehide", function(H) {
                H.persisted || MO(a.M, d)
            });
            C.run()
        };
    var IU = function(a, b, c, d) {
        Y.call(this, a, 884);
        this.Ha = b;
        this.Jb = c;
        this.A = W(this);
        this.j = X(this, d)
    };
    _.R(IU, Y);
    IU.prototype.g = function() {
        eR(this.Jb, _.Tn(this.Ha, "__gads", this.j.value));
        Vn(20, this.context, this.Ha, this.j.value);
        Vn(2, this.context, this.Ha, this.j.value);
        this.A.G(ih())
    };
    var gx = 0,
        JU = new _.Jm(-9, -9);
    var kx = new _.B.Set([function(a, b) {
        var c = a.ma.context.pvsid;
        a = a.ja.O.X;
        b.set("pvsid", {
            value: c
        }).set("correlator", {
            value: Zt(a, 26)
        })
    }, function(a, b) {
        var c = a.ja.O.X;
        var d = a.Lo;
        a = d.de;
        d = d.ce;
        var e = _.Q(c, 21);
        b = b.set("hxva", {
            value: e ? 1 : null
        }).set("cmsid", {
            value: e ? Xj(c, 23) : null
        }).set("vid", {
            value: e ? Xj(c, 22) : null
        }).set("pod", {
            value: d
        }).set("ppos", {
            value: a
        });
        a = b.set;
        c = Wz(c, 29);
        a.call(b, "scor", {
            value: c == null ? void 0 : c
        })
    }, function(a, b) {
        var c = a.ma.Vc;
        var d = a.ja;
        var e = d.V;
        var f = d.O.W;
        a = a.qd;
        var h = a.Pm;
        var k = a.Jm;
        b.set("eid", {
            value: c
        }).set("debug_experiment_id", {
            value: nF().split(",")
        }).set("expflags", {
            value: _.vm(253) ? Dh(bJ) || null : null
        }).set("pied", {
            value: function() {
                var l = new QM,
                    m = !1,
                    n = !1;
                h && (m = !0, gk(l, 1, EB, h));
                var p = e.map(function(t) {
                    var w = new OM,
                        v, y;
                    (v = f[t.getDomId()]) == null ? y = void 0 : y = _.Uj(v, EB, 27, _.Wj());
                    t = y;
                    if (t == null || !t.length) return w;
                    n = m = !0;
                    t = _.A(t);
                    for (v = t.next(); !v.done; v = t.next()) gk(w, 1, EB, v.value);
                    return w
                });
                n && _.qm(l, 2, p);
                p = _.A(k != null ? k : []);
                for (var q = p.next(); !q.done; q = p.next()) gk(l, 1, EB, q.value), m = !0;
                return m ? qb(l.g(), 3) : null
            }()
        })
    }, function(a, b) {
        var c = a.ma;
        a = c.context;
        c = c.ic;
        b.set("output", {
            value: "ldjh"
        }).set("gdfp_req", {
            value: 1
        }).set("vrg", {
            value: a.If
        }).set("ptt", {
            value: 17
        }).set("impl", {
            value: c ? "fifs" : "fif"
        })
    }, function(a, b) {
        var c = a.ja.O.X;
        a = a.ma.aa;
        c = qx(c) || new nQ;
        var d = _.Uf(c, 6, 2);
        b = b.set("rdp", {
            value: _.Q(c, 1) ? "1" : null
        }).set("ltd", {
            value: _.Q(c, 9) ? "1" : null
        }).set("ltd_cs", {
            value: _.vm(221) && !Qn(a, 3) ? "1" : null
        }).set("gdpr_consent", {
            value: gA(a, 2)
        }).set("gdpr", {
            value: Qn(a, 3) ? _.Q(a, 3) ? "1" : "0" : null,
            options: {
                Ga: !0
            }
        }).set("addtl_consent", {
            value: gA(a, 4)
        }).set("tcfe", {
            value: hA(a, 7)
        }).set("us_privacy", {
            value: gA(a, 1)
        }).set("npa", {
            value: _.Q(c, 8) ? 1 : null
        }).set("puo", {
            value: _.I(HJ) && _.Q(c, 13) ? 1 : null
        }).set("tfua", {
            value: d !== 2 ? d : null,
            options: {
                Ga: !0
            }
        }).set("tfcd", {
            value: _.yc(_.Sz(c, 5)) != null ? _.Uf(c, 5, 0) : null,
            options: {
                Ga: !0
            }
        }).set("trt", {
            value: _.yc(_.Sz(c, 10)) != null ? _.Uf(c, 10, 0) : null,
            options: {
                Ga: !0
            }
        }).set("tad", {
            value: _.I(jx) && Qn(a, 8) ? _.Q(a, 8) ? "1" : "0" : null,
            options: {
                Ga: !0
            }
        }).set("gpp", {
            value: gA(a, 11)
        });
        d = b.set;
        a = Xz(a, 10, _.Wj());
        d.call(b, "gpp_sid", {
            value: a.join(",") || void 0
        }).set("scd", {
            value: Qn(c, 14) ? "1" : null
        })
    }, function(a, b) {
        var c = a.ja;
        var d = c.O;
        var e = c.V;
        var f = c.ih;
        a = a.ma;
        var h = a.M;
        var k = a.C;
        var l = e.map(function(n) {
                return d.W[n.getDomId()]
            }),
            m = [];
        a = e.map(function(n) {
            return n.getAdUnitPath().replace(/,/g, ":").split("/").map(function(p) {
                if (!p) return "";
                var q = _.x(m, "findIndex").call(m, function(t) {
                    return t === p
                });
                return q >= 0 ? q : m.push(p) - 1
            }).join("/")
        });
        b.set("iu_parts", {
            value: m
        }).set("enc_prev_ius", {
            value: a
        }).set("prev_iu_szs", {
            value: l.map(function(n) {
                return Em(n)
            })
        }).set("fluid", {
            value: function() {
                var n = !1,
                    p = l.map(function(q) {
                        q = (_.F = Dm(q), _.x(_.F, "includes")).call(_.F, "fluid");
                        n || (n = q);
                        return q ? "height" : "0"
                    });
                return n ? p : null
            }()
        }).set("ifi", {
            value: function() {
                if (_.yh(NJ) > 0 && NO(h, e[0]) > 0) return PO(h, e[0]);
                var n = aq(k);
                f || (n += 1, _.yh(NJ) > 0 && e.forEach(function(p) {
                    var q = n;
                    if (p = h.g.get(p)) p.Nh = q
                }), FD(k, e.length));
                return n
            }()
        }).set("didk", {
            value: _.I(TJ) ? Bq(e, function(n) {
                return _.ph(n.getDomId())
            }) : null,
            options: _.x(Object, "assign").call(Object, {}, {
                Za: "~"
            }, {
                Jd: !0
            })
        })
    }, function(a, b) {
        var c = a.ja;
        a = c.V;
        c = c.O;
        var d = c.X;
        var e = c.W;
        b.set("sfv", {
            value: xQ ? xQ : xQ = Fn()
        }).set("fsfs", {
            value: Bq(a, function(f) {
                f = e[f.getDomId()];
                var h;
                return Number((h = f == null ? void 0 : Hq(f, 12)) != null ? h : Yz(d, 13))
            }),
            options: {
                Za: ",",
                pe: 0,
                Jd: !0
            }
        }).set("fsbs", {
            value: Bq(a, function(f) {
                f = e[f.getDomId()].Yc();
                var h = d.Yc(),
                    k;
                return ((k = f == null ? void 0 : Hq(f, 3)) != null ? k : h == null ? 0 : _.Q(h, 3)) ? 1 : 0
            }),
            options: {
                pe: 0,
                Jd: !0
            }
        })
    }, function(a, b) {
        var c = a.ma.M;
        var d = a.ja;
        a = d.V;
        var e = d.ih;
        b.set("rcs", {
            value: Bq(a, function(f) {
                if (!(e || _.yh(NJ) !== 0 && NO(c, f) !== 0)) {
                    var h = c.g.get(f);
                    h && h.Ek++
                }
                return Nr(c, f)
            }),
            options: {
                pe: 0,
                Jd: !0
            }
        })
    }, function(a, b) {
        var c = a.ja;
        var d = c.O.W;
        c = c.V;
        a = a.ma.ic;
        d = d[c[0].getDomId()];
        b.set("click", {
            value: !a && d.getClickUrl() ? Xj(d, 7) : null
        })
    }, function(a, b, c) {
        var d = a.ja;
        var e = d.V;
        var f = d.O.W;
        a = a.ma;
        var h = a.aa;
        var k = a.C;
        c = c === void 0 ? function(p, q) {
            return Vg(p, q)
        } : c;
        a = e.map(function(p) {
            return f[p.getDomId()]
        });
        var l, m, n;
        b.set("ists", {
            value: zq(a, ms) || null
        }).set("fas", {
            value: Bq(a, function(p) {
                return gr(cr(p))
            }),
            options: {
                pe: 0,
                Jd: !0
            }
        }).set("itsi", {
            value: e.some(function(p) {
                var q;
                return !er(p) && ((q = f[p.getDomId()]) == null ? void 0 : cr(q)) === 5
            }) ? function() {
                var p = c(h, k);
                if (!p || _.I($q)) return _.I(_.dr) ? -1 : 1;
                p = ls(_.Ci(p, 604800, "__lsv__"));
                return isFinite(p) ? Math.floor(Math.max((Date.now() - p) / 6E4, 1)) : null
            }() : null
        }).set("fsapi", {
            value: zq(a, function(p) {
                return cr(p) === 5
            }) || null
        }).set("ifs", {
            value: (n = (l = (_.F = _.x(Object, "values").call(Object, f), _.x(_.F, "find")).call(_.F, function(p) {
                return iq(p, NQ, 29)
            })) == null ? void 0 : (m = _.wm(l, NQ, 29)) == null ? void 0 : cl(m)) != null ? n : null
        }).set("dap", {
            value: function() {
                if (_.I(uJ) ? e.every(function(q) {
                        var t;
                        return er(q) || !(_.F = [2, 3], _.x(_.F, "includes")).call(_.F, (t = f[q.getDomId()]) == null ? void 0 : cr(t))
                    }) : e.some(function(q) {
                        var t;
                        return er(q) || !(_.F = [2, 3], _.x(_.F, "includes")).call(_.F, (t = f[q.getDomId()]) == null ? void 0 : cr(t))
                    })) return null;
                var p = ls(_.Ci(c(h, k), 604800, "__lsa__"));
                return isFinite(p) ? Math.floor(Math.max((Date.now() - p) / 6E4, 1)) <= _.yh(tJ) ? 3 : null : null
            }()
        })
    }, function(a, b) {
        var c = a.ja;
        a = c.V;
        var d = c.O.W;
        a = a.map(function(e) {
            return d[e.getDomId()]
        });
        b.set("rbvs", {
            value: zq(a, function(e) {
                return cr(e) === 4
            }) || null
        })
    }, function(a, b) {
        var c = a.ja;
        var d = c.O;
        var e = c.V;
        var f = c.mc;
        c = c.kh;
        var h = a.ma;
        a = h.isSecureContext;
        var k = h.M;
        h = h.C;
        var l = b.set,
            m = d.X,
            n = d.W,
            p = new Pg;
        p.set(0, f !== 1);
        n = n[e[0].getDomId()];
        p.set(1, !!_.Q(n, 17));
        p.set(2, Er(e, d));
        p.set(3, _.Q(m, 27) || !1);
        p.set(4, f === 3);
        p.set(5, !c);
        _.yh(NJ) > 0 && p.set(6, NO(k, e[0]) > 0);
        d = Rg(p);
        l.call(b, "eri", {
            value: d
        }).set("gct", {
            value: zr("google_preview", h)
        }).set("sc", {
            value: a ? 1 : 0,
            options: {
                Ga: !0
            }
        })
    }, function(a, b) {
        a = a.ma;
        var c = a.aa;
        var d = a.Ha;
        var e = _.Tn(d, "__gads", c);
        a = _.Tn(d, "__gpi_opt_out", c) === "1" ? "1" : null;
        b = b.set("cookie", {
            value: e,
            options: {
                Ga: !0
            }
        });
        var f = b.set;
        if (e = !e) e = $g(d.C) ? !!Ug(c) : !1;
        b = f.call(b, "cookie_enabled", {
            value: e ? "1" : null
        });
        e = b.set;
        c = (c = _.Tn(d, "__gpi", c)) && !_.x(c, "includes").call(c, "&") ? c : null;
        e.call(b, "gpic", {
            value: c
        }).set("pdopt", {
            value: a
        })
    }, function(a, b) {
        var c = a.ma.C;
        a = Br(a.ja.O.X.Va());
        var d = c.document,
            e = d.domain;
        b.set("cdm", {
            value: (a || Hm(c)) === d.URL ? "" : e
        })
    }, function(a, b) {
        a = a.ma.C;
        b.set("arp", {
            value: Np(a) ? 1 : null
        }).set("abxe", {
            value: _.Sk(a.top) || sx(a.IntersectionObserver) ? 1 : null
        })
    }, function(a, b) {
        var c = a.ja.O.X;
        a = a.ma.C;
        c = Br(c.Va());
        b.set("dt", {
            value: (new Date).getTime()
        });
        if (!c) {
            try {
                var d = Math.round(Date.parse(a.document.lastModified) / 1E3) || null
            } catch (e) {
                d = null
            }
            b.set("lmt", {
                value: d
            })
        }
    }, function(a, b) {
        var c = a.ja;
        var d = c.O;
        c = c.V;
        a = a.ma.C;
        for (var e = Cm(!0, a), f = d.X, h = a.document, k = d.W, l = [], m = [], n = _.A(c), p = n.next(); !p.done; p = n.next()) {
            var q = p.value,
                t = k[q.getDomId()],
                w = Iq(f, t);
            p = void 0;
            q = (p = an(q, t, h, w)) != null ? p : JU;
            l.push(Math.round(q.x));
            m.push(Math.round(q.y))
        }
        e && (d.No = e);
        f = Og(a) ? null : Cm(!1, a);
        try {
            var v = a.top;
            var y = Or(v.document, v)
        } catch (z) {
            y = new _.Jm(-12245933, -12245933)
        }
        b.set("adxs", {
            value: l,
            options: {
                Ga: !0
            }
        }).set("adys", {
            value: m,
            options: {
                Ga: !0
            }
        }).set("biw", {
            value: e ? e.width : null
        }).set("bih", {
            value: e ? e.height : null
        }).set("isw", {
            value: e ? f == null ? void 0 : f.width : null
        }).set("ish", {
            value: e ? f == null ? void 0 : f.height : null
        }).set("scr_x", {
            value: Math.round(y.x),
            options: {
                Ga: !0
            }
        }).set("scr_y", {
            value: Math.round(y.y),
            options: {
                Ga: !0
            }
        }).set("btvi", {
            value: hx(c, a, d),
            options: {
                Ga: !0,
                Za: "|"
            }
        })
    }, function(a, b) {
        var c = a.ja.V;
        a = a.ma;
        var d = a.M;
        var e = a.C;
        b.set("ucis", {
            value: c.map(function(f) {
                (f = d.g.get(f)) ? (f.tc != null || (f.tc = e === e.top ? (++d.A).toString(36) : qz()), f = f.tc) : f = "";
                return f
            }),
            options: {
                Za: "|"
            }
        }).set("oid", {
            value: 2
        })
    }, function(a, b) {
        a = a.ja;
        var c = a.V;
        a = a.O;
        var d = a.X;
        var e = a.W;
        a = new _.B.Map;
        var f = Array(c.length),
            h = !1;
        d = _.A(d.Va());
        for (var k = d.next(); !k.done; k = d.next())
            if (k = k.value, _.u(k, 1) === "tag_origin") {
                h = !0;
                for (var l = 0; l < c.length; l++) f[l] = [].concat(_.aj(km(k)))
            } else a.set(_.u(k, 1), [km(k)[0]]);
        for (d = 0; d < c.length; d++)
            if (k = e[c[d].getDomId()])
                for (k = _.A(k.Va()), l = k.next(); !l.done; l = k.next()) {
                    l = l.value;
                    var m = _.u(l, 1);
                    if (_.u(l, 1) === "tag_origin") {
                        h = !0;
                        var n = m = void 0;
                        (m = f)[n = d] || (m[n] = []);
                        f[d].push.apply(f[d], _.aj(km(l)))
                    } else n = a.get(m) || [], l = km(l)[0], c.length === 1 ? n[0] = l : l !== n[0] && (n[d + 1] = l), a.set(m, n)
                }
        c = [];
        e = _.A(_.x(a, "keys").call(a));
        for (d = e.next(); !d.done; d = e.next()) k = d.value, d = yn()[k], k = a.get(k), d && k && d !== "to" && (k.length > 1 ? (k = k.map(function(p) {
            return encodeURIComponent(p || "")
        }).join(), c.push(d + "," + k)) : k.length === 1 && d !== "url" && b.set(d, {
            value: k[0]
        }));
        c.length && b.set("sps", {
            value: c,
            options: {
                Za: "|"
            }
        });
        b.set("tos", {
            value: h ? f.map(function(p) {
                return _.x(Array, "from").call(Array, new _.B.Set(p)).join("+")
            }) : void 0,
            options: {
                Za: "~"
            }
        })
    }, function(a, b) {
        var c = a.ma;
        a = c.context;
        var d = c.C;
        var e, f, h, k, l, m, n;
        b.set("u_his", {
            value: ED(d)
        }).set("u_h", {
            value: (e = d.screen) == null ? void 0 : e.height
        }).set("u_w", {
            value: (f = d.screen) == null ? void 0 : f.width
        }).set("u_ah", {
            value: (h = d.screen) == null ? void 0 : h.availHeight
        }).set("u_aw", {
            value: (k = d.screen) == null ? void 0 : k.availWidth
        }).set("u_cd", {
            value: (l = d.screen) == null ? void 0 : l.colorDepth
        }).set("u_sd", {
            value: GL(d)
        }).set("u_tz", {
            value: -(new Date).getTimezoneOffset()
        }).set("dmc", {
            value: (n = (m = d.navigator) == null ? void 0 : m.deviceMemory) != null ? n : null
        }).set("bc", {
            value: Sg(d)
        }).set("nvt", {
            value: Nh(d)
        }).set("bz", {
            value: function() {
                var p = _.yh(KI);
                return p === 0 ? null : mD(d, p === 2)
            }()
        }).set("tl", {
            value: _.I(VJ) ? Il(a, 1232, function() {
                var p;
                var q;
                if (q = na()) {
                    var t;
                    q = (p = d.document) == null ? void 0 : (t = p.documentElement) == null ? void 0 : t.classList;
                    q = !!((q == null ? 0 : q.contains("translated-rtl")) || (q == null ? 0 : q.contains("translated-ltr")))
                }
                p = q ? d.document.documentElement.lang : void 0;
                return p
            }, !0) : null
        })
    }, function(a, b) {
        (a = _.vm(251)) && b.set("uach", {
            value: Dz(a, 3)
        })
    }, function(a, b) {
        a = a.ma;
        if (!a.hc) {
            var c;
            if (a = (c = a.C.navigator) == null ? void 0 : c.userActivation) {
                c = 0;
                if (a == null ? 0 : a.hasBeenActive) c |= 1;
                if (a == null ? 0 : a.isActive) c |= 2
            } else c = void 0;
            _.I(SJ) ? c !== void 0 && b.set("uas", {
                value: c,
                options: {
                    Ga: !0
                }
            }) : c && b.set("uas", {
                value: c
            })
        }
    }, function(a, b) {
        var c = a.ma;
        var d = c.C;
        var e = c.M;
        c = c.ic;
        a = a.ja;
        var f = a.V;
        a = a.O;
        var h = a.X;
        var k = a.W;
        a = Ar("google_preview", d);
        var l = d.document,
            m = a ? Cr(l.URL) : l.URL;
        l = a ? Cr(l.referrer) : l.referrer;
        a = !1;
        if (c) c = Br(h.Va());
        else {
            var n;
            c = (n = Br(k[f[0].getDomId()].Va())) != null ? n : Br(h.Va())
        }
        if (c != null) {
            var p = m;
            Og(d) || (l = "", a = !0)
        } else c = m;
        n = Dr(d);
        b.set("nhd", {
            value: n || null
        }).set("url", {
            value: c
        }).set("loc", {
            value: p !== null && p !== c ? p : null
        }).set("ref", {
            value: l
        });
        if (n) {
            p = b.set;
            var q, t;
            n = _.Sk(d.top) && ((q = d.top) == null ? void 0 : (t = q.location) == null ? void 0 : t.href);
            var w;
            q = (w = d.location) == null ? void 0 : w.ancestorOrigins;
            d = kl(d) || "";
            w = (q == null ? void 0 : q[q.length - 1]) || "";
            d = (d = n || d || w) ? a ? RC(d.match(_.QC)[3] || null) : d : null;
            p.call(b, "top", {
                value: d
            }).set("etu", {
                value: e.Zb
            })
        }
    }, function(a, b) {
        a = a.ma.context.pvsid;
        b.set("rumc", {
            value: _.I(rK) || _.fh(El).g ? a : null
        }).set("rume", {
            value: _.I(qK) ? 1 : null
        })
    }, function(a, b) {
        b.set("vis", {
            value: _.$s(a.ma.C.document)
        })
    }, function(a, b) {
        var c = a.ja;
        var d = c.V;
        var e = c.O;
        c = e.X;
        e = e.W;
        a = a.ma.C;
        var f = kq(d, e, c);
        e = nq(d, f, a);
        c = e.Bn;
        e = e.ro;
        var h = pq(d, f, a),
            k = h.Fm;
        h = h.yn;
        var l = !1;
        d = d.map(function(n) {
            var p;
            n = (p = f.get(n)) != null ? p : 0;
            if (n === 0) return null;
            l = !0;
            return n === 2 ? "1" : "0"
        });
        var m;
        b.set("aee", {
            value: l ? d : null,
            options: {
                Za: "|"
            }
        }).set("psz", {
            value: c,
            options: {
                Za: "|"
            }
        }).set("msz", {
            value: e,
            options: {
                Za: "|"
            }
        }).set("fws", {
            value: k,
            options: {
                Ga: !0
            }
        }).set("ohw", {
            value: h,
            options: {
                Ga: !0
            }
        }).set("efat", {
            value: ((m = a.location) == null ? void 0 : m.hash) === "#flexibleAdSlotTest" ? "1" : null
        })
    }, function(a, b) {
        b.set("psts", {
            value: JO(a.ma.M, a.ja.V)
        })
    }, function(a, b) {
        var c = a.ma;
        a = c.aa;
        c = c.C;
        if (!_.I(KJ)) {
            var d = c.document.domain;
            var e = Ug(a) ? c.origin !== "null" ? c.document.cookie : null : null;
            var f = e != null ? e : "",
                h = c.history.length,
                k = c.screen,
                l = c.document.referrer;
            if (Cf()) var m = window.gaGlobal || {};
            else {
                var n = Math.round((new Date).getTime() / 1E3),
                    p = c.google_analytics_domain_name;
                d = typeof p === "undefined" ? Ng("auto", d) : Ng(p, d);
                var q = f.indexOf("__utma=" + d + ".") > -1,
                    t = f.indexOf("__utmb=" + d) > -1;
                (e = (sD() || window).gaGlobal) || (e = {}, (sD() || window).gaGlobal = e);
                var w = !1;
                if (q) {
                    var v = f.split("__utma=" + d + ".")[1].split(";")[0].split(".");
                    t ? e.sid = String(v[3]) : e.sid || (e.sid = String(n));
                    e.vid = v[0] + "." + v[1];
                    e.from_cookie = !0
                } else {
                    e.sid || (e.sid = String(n));
                    if (!e.vid) {
                        w = !0;
                        t = Math.round(Math.random() * 2147483647);
                        try {
                            v = jL.javaEnabled()
                        } catch (y) {
                            v = !1
                        }
                        v = [jL.appName, jL.version, jL.language ? jL.language : jL.browserLanguage, jL.platform, jL.userAgent, v ? 1 : 0].join("");
                        k ? v += k.width + "x" + k.height + k.colorDepth : _.ca.g && _.ca.g.Cl && (k = _.ca.g.Cl.Zp.hq().iq(), v += k.screen.width + "x" + k.screen.height);
                        v = v + f + (l || "");
                        for (l = v.length; h > 0;) v += h-- ^ l++;
                        e.vid = (t ^ Mg(v) & 2147483647) + "." + n
                    }
                    e.from_cookie || (e.from_cookie = !1)
                }
                if (!e.cid) {
                    b: for (n = 999, p && (p = p.indexOf(".") === 0 ? p.substr(1) : p, n = p.split(".").length), p = 999, f = f.split(";"), v = 0; v < f.length; v++)
                        if (l = kL.exec(f[v]) || lL.exec(f[v]) || mL.exec(f[v])) {
                            k = parseInt(l[1], 10) || 0;
                            if (k === n) {
                                m = l[2];
                                break b
                            }
                            k < p && (p = k, m = l[2])
                        }w && m && m.search(/^\d+\.\d+$/) !== -1 ? (e.vid = m, e.from_cookie = !0) : m !== e.vid && (e.cid = m)
                }
                e.dh = d;
                e.hid || (e.hid = Math.round(Math.random() * 2147483647));
                m = e
            }
            f = m;
            m = f.vid;
            d = f.sid;
            e = f.hid;
            w = f.from_cookie;
            f = f.cid;
            w && !Ug(a) || b.set("ga_vid", {
                value: m
            }).set("ga_sid", {
                value: d
            }).set("ga_hid", {
                value: e
            }).set("ga_fc", {
                value: w
            }).set("ga_cid", {
                value: f
            }).set("ga_wpids", {
                value: c.google_analytics_uacct
            })
        }
    }, function(a, b) {
        var c = a.ja.V;
        var d = a.ma.C;
        var e = a.Go;
        a = e.Zh;
        var f = e.vj;
        var h = e.mo;
        var k = e.zl;
        if (!_.I(sK) && !h) {
            (h = lh(d.isSecureContext, d.navigator, d.document)) && b.set("td", {
                value: 1
            });
            if (a) switch (a.kind) {
                case 0:
                    b.set("eig", {
                        value: a.signal
                    });
                    break;
                case 1:
                    b.set("eigir", {
                        value: a.reason,
                        options: {
                            Ga: !0
                        }
                    });
                    break;
                default:
                    eb(a)
            }
            f !== void 0 && b.set("egid", {
                value: f,
                options: {
                    Ga: !0
                }
            });
            (k == null ? 0 : k.size) && b.set("tan", {
                value: c.map(function(l) {
                    return k.get(l)
                })
            });
            h && (c = new Pg, c.set(1, kh(d.navigator)), b.set("tdf", {
                value: Rg(c)
            }))
        }
    }, function(a, b) {
        var c = a.ma.C;
        var d = a.xo;
        a = d.Ao;
        d = d.yo;
        mh(c.isSecureContext, c.document) && (b.set("topics", {
            value: a instanceof Uint8Array ? qb(a, 3) : a
        }), !a || a instanceof Uint8Array || b.set("tps", {
            value: a
        }), d && b.set("htps", {
            value: d
        }))
    }, function(a, b) {
        var c = a.ma;
        var d = c.C;
        var e = c.aa;
        var f = a.ja.V;
        a = a.Yn;
        c = a.bg;
        var h = a.ue;
        var k = a.rn;
        if (!_.I(ZI)) {
            a = b.set;
            d = Vg(e, d);
            f = Bl(f[0].getAdUnitPath());
            e = {
                qf: [],
                yg: 0,
                vf: [],
                Nk: _.I(PJ)
            };
            var l = (e === void 0 ? zk : e).Nk;
            e = new aC;
            l && (l = {}, Rj(56, "", null, f ? (l.nc = f, l) : void 0));
            h = h != null ? h : [];
            if (f && c && h && typeof c.getUserIdsAsEidBySource === "function") {
                if (typeof c.getUserIdsAsEids === "function") try {
                    for (var m = _.A(c.getUserIdsAsEids()), n = m.next(); !n.done; n = m.next()) {
                        var p = n.value;
                        if (typeof p.source === "string") {
                            var q = l = void 0,
                                t = void 0,
                                w = void 0,
                                v = {};
                            Rj(52, p.source, null, (v.sl = String((w = (l = p.uids) == null ? void 0 : (q = l[0]) == null ? void 0 : (t = q.id) == null ? void 0 : t.length) != null ? w : -1), v))
                        }
                    }
                } catch (z) {
                    var y;
                    Rj(45, "", (y = z) == null ? void 0 : y.message)
                }
                m = f.split(",");
                n = _.A(h);
                for (p = n.next(); !p.done; p = n.next())
                    if (p = p.value, _.x(m, "includes").call(m, _.u(p, 1)))
                        for (p = _.A(_.Uj(p, pB, 2, _.Wj())), y = p.next(); !y.done; y = p.next())
                            if (y = y.value, _.Q(y, il(y, qB, 3)) && (y = _.u(y, 1), !Zj(e, y))) {
                                h = null;
                                try {
                                    t = q = l = void 0, h = (l = c.getUserIdsAsEidBySource(y)) == null ? void 0 : (q = l.uids) == null ? void 0 : (t = q[0]) == null ? void 0 : t.id
                                } catch (z) {
                                    h = void 0;
                                    Rj(45, y, (h = z) == null ? void 0 : h.message);
                                    continue
                                }
                                h ? h.length > 1024 ? (l = {}, Rj(12, y, null, (l.sl = String(h.length), l.fp = "1", l))) : (l = WB(y), q = _.uq(l, 2, h), l = e, q = _.dk(q, 11, !0), gk(l, 2, Vj, q), l = {}, Rj(19, y, null, (l.fp = "1", l.hs = "1", l.sl = String(h.length), l))) : Rj(57, y)
                            }
            }
            hk(e, d, f, k);
            _.Uj(e, Vj, 2, _.Wj()).length ? (c = {}, Rj(50, "", null, (c.ns = String(_.Uj(e, Vj, 2, _.Wj()).length), c)), c = qb(e.g(), 3)) : c = null;
            a.call(b, "a3p", {
                value: c
            })
        }
    }, function(a, b) {
        var c = a.fb.jf;
        var d = a.ja.V;
        a = function() {
            return c ? d.map(function(e) {
                return c.get(e)
            }) : []
        }();
        b.set("cbidsp", {
            value: Bq(a, function(e) {
                return qb(e.g(), 3)
            }),
            options: _.x(Object, "assign").call(Object, {}, {
                Za: "~"
            }, {
                Jd: !0
            })
        })
    }, function(a, b) {
        var c = [];
        a = _.A(_.Uj(Tz(a.ja.O.X.zj(), Ev, 2), Is, 1, _.Wj()));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = d.value;
            _.ce(e, 2, _.Xc, _.Wj()).length && (d = Tr(e, 3) != null ? _.Zz(e, 3) : _.Uf(e, 1, 0) + 2, e = _.ce(e, 2, _.Xc, _.Wj()).join("|"), c.push(d + "=" + e))
        }
        b.set("pps", {
            value: c,
            options: {
                Za: "~"
            }
        })
    }, function(a, b) {
        var c = a.En;
        a = c.Mm;
        c = c.Oo;
        b.set("scar", {
            value: a
        });
        _.I(fJ) && (a == null ? 0 : a.length) && c != null && b.set("wst", {
            value: a === "0" ? c === "WEBVIEW_SDK_PAW" ? (3).toString() : (5).toString() : c === "WEBVIEW_SDK_PAW" ? (2).toString() : (4).toString()
        })
    }, function(a, b) {
        a = a.ma.C;
        a = !(!a.isSecureContext || !jh("attribution-reporting", a.document));
        !_.I(pK) && a && b.set("nt", {
            value: 1
        })
    }, function(a, b) {
        if (a = a.Mn.Ln) a = Dz(cl(a), 3), b.set("psd", {
            value: a
        })
    }, function(a, b) {
        a = _.Mf(a.ma.C);
        var c = Kr;
        a > 0 && c >= a && b.set("dlt", {
            value: a
        }).set("idt", {
            value: c - a
        })
    }, function(a, b) {
        a = a.ja.O.X;
        b.set("ppid", {
            value: _.Yj(a, 16) ? _.u(a, 16) : null,
            options: {
                Ga: !0
            }
        })
    }, function(a, b) {
        var c = b.set;
        (a = Xj(a.ja.O.X, 8)) ? (a.length > 50 && (a = a.substring(0, 50)), a = "a " + Dz('role:1 producer:12 loc:"' + a + '"')) : a = "";
        c.call(b, "uule", {
            value: a
        })
    }, function(a, b) {
        var c = a.ja;
        a = c.O;
        var d = c.O.X;
        b.set("prev_scp", {
            value: It(c.V, a),
            options: {
                Jd: !0,
                Za: "|"
            }
        }).set("cust_params", {
            value: Kt(d),
            options: {
                Za: "&"
            }
        })
    }, function(a, b) {
        var c = a.ja;
        var d = c.O;
        c = c.V;
        a = a.ma;
        var e = a.M;
        var f = a.ic;
        b.set("adks", {
            value: c.map(function(h) {
                if (f) {
                    var k = d.W[h.getDomId()];
                    k = Hp(k);
                    if (h = e.g.get(h)) h.fe = k;
                    return k
                }
                k = d.X;
                var l = d.W[h.getDomId()],
                    m;
                if (!(m = Yw(e, h))) {
                    k = Hp(l, _.Q(k, 6) || _.Q(l, 17) ? null : Vm(h));
                    if (h = e.g.get(h)) h.fe = k;
                    m = k
                }
                return m
            })
        })
    }, function(a, b) {
        var c = b.set;
        a = a.ma.C;
        var d = lD(a);
        a: {
            var e = a.google_ad_width || a.google_ad_width;
            var f = a.google_ad_height || a.google_ad_height;
            if (Og(a)) e = !1;
            else {
                var h = a.document,
                    k = h.documentElement;
                if (e && f) {
                    var l = 1,
                        m = 1;
                    a.innerHeight ? (l = a.innerWidth, m = a.innerHeight) : k && k.clientHeight ? (l = k.clientWidth, m = k.clientHeight) : h.body && (l = h.body.clientWidth, m = h.body.clientHeight);
                    if (m > 2 * f || l > 2 * e) {
                        e = !1;
                        break a
                    }
                }
                e = !0
            }
        }
        f = d.location.href;
        d === d.top ? d = !0 : (h = !1, (k = d.document) && k.referrer && (f = k.referrer, d.parent === d.top && (h = !0)), (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && f.indexOf(d) === -1 && (h = !1), d = h);
        f = a.top == a ? 0 : _.Sk(a.top) ? 1 : 2;
        h = 4;
        e || f !== 1 ? e || f !== 2 ? e && f === 1 ? h = 7 : e && f === 2 && (h = 8) : h = 6 : h = 5;
        d && (h |= 16);
        d = String(h);
        if (a !== a.top)
            for (e = a; e && e !== e.top && _.Sk(e) && !a.sf_ && !a.$sf && !a.inGptIF && !a.inDapIF; e = e.parent);
        c.call(b, "frm", {
            value: d || null
        })
    }, function(a, b) {
        var c = b.set;
        a = Tz(a.ja.O.X, Jv, 36);
        a = _.ce(a, 1, _.yc, _.Wj());
        c.call(b, "ppt", {
            value: a,
            options: {
                Za: "~"
            }
        })
    }, function(a, b) {
        a = a.ma.C;
        try {
            var c, d, e = (c = a.external) == null ? void 0 : (d = c.getHostEnvironmentValue) == null ? void 0 : d.call(c, "os-mode");
            if (e) {
                var f = Number(JSON.parse(e)["os-mode"]);
                f < 0 || b.set("wsm", {
                    value: f + 1
                })
            }
        } catch (h) {}
    }, function(a, b) {
        var c = a.ja;
        var d = c.networkCode;
        var e = c.V;
        c = c.O.W;
        a = a.Ul.Md;
        var f = [],
            h = !1;
        e = _.A(e);
        for (var k = e.next(); !k.done; k = e.next()) {
            var l = void 0;
            ((l = c[k.value.getDomId()]) == null ? 0 : _.Q(l, 30)) ? (f.push("1"), h = !0) : f.push("")
        }
        b.set("is_cau", {
            value: h ? f : null
        });
        _.I(MI) && b.set("no_cau_info", {
            value: a.has(d) ? "1" : null
        })
    }, function(a, b) {
        var c = a.ja;
        var d = c.V;
        c = c.O.W;
        a = a.ma.C;
        var e = [],
            f = !1;
        d = _.A(d);
        for (var h = d.next(); !h.done; h = d.next()) h = cr(c[h.value.getDomId()]), (_.F = [8, 9], _.x(_.F, "includes")).call(_.F, h) ? (f = h === 9 ? "right" : "left", e.push(_.Wi(a).sideRailPlasParam.get(f)), f = !0) : e.push("");
        f && b.set("plas", {
            value: e,
            options: {
                Za: "|"
            }
        })
    }, function(a, b) {
        var c = a.ma;
        var d = c.C;
        c = c.aa;
        var e = a.ja;
        var f = e.O.X;
        e = e.networkCode;
        a = a.vm.se;
        if (_.I(WI)) {
            var h;
            a = !a || !_.I(YI) && !he(a, 1, bd).get(e) || _.I(YI) && !he(a, 1, bd).get((h = e.split(",")) == null ? void 0 : h[0]);
            var k;
            h = !((k = qx(f)) == null || !_.Q(k, 9));
            d = new tL(d);
            if (_.Q(c, 8) || (h || !Ug(c)) && a) k = void 0;
            else {
                var l;
                k = (l = Wg("__eoi", d.g)) != null ? l : void 0
            }
            if (l = k) b.set("eo_id_str", {
                value: l
            });
            else {
                if (l = _.I(XI)) l = !$g(d.g) || _.Q(c, 8) || (h || !Ug(c)) && a ? !1 : !0;
                l && b.set("eoidce", {
                    value: "1"
                })
            }
        }
    }, function(a, b) {
        var c = a.ja;
        a = c.V;
        var d = c.O.W;
        _.I(zJ) && b.set("eov", {
            value: zq(a, function(e) {
                var f, h;
                return !!((f = d[e.getDomId()]) == null ? 0 : (h = _.wm(f, OQ, 31)) == null ? 0 : _.Q(h, 1))
            })
        })
    }, function(a, b) {
        var c = a.ja;
        a = c.V;
        var d = c.Be;
        d != null && d.size && b.set("xatfs", {
            value: zq(a, function(e) {
                return d.has(e)
            })
        })
    }, function(a, b) {
        var c = a.ja;
        a = c.V;
        c = c.O.W;
        a = a[0];
        _.Yj(c[a.getDomId()], 32) && b.set("ait_q", {
            value: _.u(c[a.getDomId()], 32)
        })
    }]);
    var KU = function(a, b, c) {
        Y.call(this, a, 798);
        this.output = W(this);
        this.j = HM(this, b);
        this.A = X(this, c)
    };
    _.R(KU, Y);
    KU.prototype.g = function() {
        var a = this,
            b = new _.B.Map;
        if (this.j.value) {
            var c = this.j.value,
                d = c.ma.ic,
                e = c.fb.jf;
            c = _.A(c.ja.V);
            for (var f = c.next(); !f.done; f = c.next()) {
                f = f.value;
                var h = void 0,
                    k = (h = e) == null ? void 0 : h.get(f);
                b.set(f, d ? LU(this, f, k) : function() {
                    return a.A.value
                })
            }
        }
        this.output.G(b)
    };
    var LU = function(a, b, c) {
        return Wm(function() {
            var d = _.x(Object, "assign").call(Object, {}, a.j.value);
            d.ja.ih = !0;
            d.ja.V = [b];
            c && (d.fb.jf = new _.B.Map, d.fb.jf.set(b, c));
            return yr(px(d)).url
        })
    };
    var MU = di(810, function(a, b, c, d, e, f, h, k) {
        a = c;
        !d && c.length > 1 && (a = a.slice(0, 1));
        a = a.filter(function(l) {
            if (l.L) return !1;
            var m = e.W[l.getDomId()];
            return !(rr(cr(m)) && (_.F = Eh(xJ), _.x(_.F, "includes")).call(_.F, String(cr(m)))) && !os(f, l, m, h) && !fr(b, f, l, m, h, k)
        });
        a.length > 30 && (P(f, yP("30", String(a.length), String(a.length - 30))), a = a.slice(0, 30));
        return {
            V: a
        }
    }, {
        V: void 0
    });
    var NU = function(a, b, c, d, e, f, h) {
        Y.call(this, a, 810);
        this.A = b;
        this.ic = c;
        this.O = d;
        this.P = e;
        this.C = f;
        this.aa = h;
        this.j = W(this)
    };
    _.R(NU, Y);
    NU.prototype.g = function() {
        var a = this,
            b = this.A;
        !this.ic && this.A.length > 1 && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.L) return !1;
            var d = a.O.W[c.getDomId()];
            return !(rr(cr(d)) && (_.F = Eh(xJ), _.x(_.F, "includes")).call(_.F, String(cr(d)))) && !os(a.P, c, d, a.C) && !fr(a.context, a.P, c, d, a.C, a.aa)
        });
        b.length > 30 && (P(this.P, yP("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.j.G(b)
    };
    var OU = function(a, b, c) {
        Y.call(this, a, 919);
        this.j = b;
        this.aa = c;
        this.output = W(this)
    };
    _.R(OU, Y);
    OU.prototype.g = function() {
        var a, b = !((a = this.j) == null ? 0 : _.Q(a, 9)) && !!Ug(this.aa);
        this.output.G(b)
    };
    var PU = di(1221, function(a, b) {
        a.status === 403 && b.P.error(eQ(a.responseText));
        return {}
    }, {});
    var QU = function(a, b, c, d, e, f) {
        Y.call(this, a, 928);
        this.requestId = b;
        this.F = f;
        this.output = GM(this);
        this.A = X(this, c);
        e && (this.j = X(this, e));
        JM(this, d)
    };
    _.R(QU, Y);
    var RU = function(a) {
        return a.j ? a.F.split(",").some(function(b) {
            var c;
            return (c = a.j) == null ? void 0 : c.value.has(b)
        }) : !1
    };
    QU.prototype.g = function() {
        var a = this.context,
            b = this.requestId,
            c = this.A.value.length,
            d = RU(this),
            e = ql(a);
        if (e.ud) {
            var f = a.va,
                h = f.td;
            a = pl(a, e.jd);
            e = new QF;
            b = _.Ii(e, 2, b);
            c = _.ul(b, 1, c);
            d = _.tl(c, 3, d);
            d = _.vl(a, 7, wl, d);
            h.call(f, d)
        }
        this.output.notify()
    };
    var SU = function(a, b, c, d) {
        Y.call(this, a, 867);
        this.Ca = b;
        this.O = c;
        this.output = GM(this);
        this.j = X(this, d)
    };
    _.R(SU, Y);
    SU.prototype.g = function() {
        for (var a = _.A(this.j.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.A(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = ym(this.O.W[b.getDomId()], 20);
            gv(b, xO, 808, {
                Yl: c,
                Wn: d
            });
            gv(this.Ca, "slotRequested", 705, new wS(b, "publisher_ads"))
        }
        this.output.notify()
    };
    var TU = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, y, z, G, C, H, L, S, M, da, Z, U, pa, ka, Da, ya, Fa, zb, $a, Ra, Db, Ha, Ob) {
        Y.call(this, a, 785, _.yh(UJ));
        this.ic = b;
        this.M = c;
        this.Ha = d;
        this.O = e;
        this.mc = f;
        this.networkCode = h;
        this.de = k;
        this.ce = l;
        this.Vc = m;
        this.timer = n;
        this.aa = p;
        this.isSecureContext = q;
        this.hc = t;
        this.kh = w;
        this.C = v;
        this.ke = y;
        this.j = W(this);
        this.A = W(this);
        this.ka = W(this);
        JM(this, da);
        this.Ya = IM(this, z);
        this.dd = IM(this, G);
        this.U = IM(this, C);
        this.I = X(this, H);
        S && (this.F = _.I(WJ) ? new zM(S.be) : IM(this, S.be), S.Xe && (this.Xc = HM(this, S.Xe)));
        M && (this.K = _.I(WJ) ? new zM(M.yd) : IM(this, M.yd));
        Z && (this.Xb = X(this, Z));
        U && (this.ba = new zM(U));
        pa && (this.nb = HM(this, pa));
        ka && (this.ua = X(this, ka));
        Da && JM(this, Da);
        ya && (this.Oa = X(this, ya));
        Ob && (this.Fb = HM(this, Ob));
        L && (this.ia = HM(this, L));
        Fa && (this.Rc = HM(this, Fa.Vh));
        zb && (this.bd = X(this, zb));
        $a && (this.Fa = HM(this, $a));
        Ra && (this.sa = HM(this, Ra));
        Db && (this.Wc = X(this, Db));
        Ha && (this.fa = IM(this, Ha))
    };
    _.R(TU, Y);
    TU.prototype.g = function() {
        if (this.I.value.length) {
            var a = null;
            if (this.F) {
                var b = this.F.value;
                a = b ? b : this.K && !this.K.Wd() ? 9 : this.F.Wd() ? null : 1
            }
            this.U.value && (this.M.Zb = this.U.value);
            var c, d, e, f, h, k, l, m, n, p, q, t, w, v, y, z, G;
            b = {
                ma: {
                    C: this.C,
                    context: this.context,
                    M: this.M,
                    Ha: this.Ha,
                    aa: this.aa,
                    ic: this.ic,
                    Vc: this.Vc,
                    isSecureContext: this.isSecureContext,
                    hc: this.hc
                },
                ja: {
                    networkCode: this.networkCode,
                    V: this.I.value,
                    O: this.O,
                    mc: this.mc,
                    ih: !1,
                    kh: this.kh,
                    Be: (c = this.Fb) == null ? void 0 : c.value
                },
                Lo: {
                    de: this.de,
                    ce: this.ce
                },
                En: {
                    Mm: (y = this.Ya.value) != null ? y : "0",
                    Oo: (z = this.dd.value) != null ? z : "WEBVIEW_SDK_PAW"
                },
                fb: {
                    jf: (d = this.ia) == null ? void 0 : d.value
                },
                xo: {
                    Ao: a,
                    yo: (e = this.Xc) == null ? void 0 : e.value
                },
                Yn: {
                    rn: (G = (f = this.Xb) == null ? void 0 : f.value) != null ? G : void 0,
                    bg: (h = this.ba) == null ? void 0 : h.value,
                    ue: (k = this.ua) == null ? void 0 : k.value
                },
                qd: {
                    Pm: (l = this.nb) == null ? void 0 : l.value,
                    Jm: (m = this.Oa) == null ? void 0 : m.value
                },
                Mn: {
                    Ln: (n = this.Rc) == null ? void 0 : n.value
                },
                Go: {
                    Zh: (p = this.bd) == null ? void 0 : p.value,
                    vj: (q = this.Fa) == null ? void 0 : q.value,
                    mo: (t = this.Wc) == null ? void 0 : t.value,
                    zl: (w = this.fa) == null ? void 0 : w.value
                },
                vm: {
                    se: (v = this.sa) == null ? void 0 : v.value
                },
                Ul: {
                    Md: this.ke.Md
                }
            };
            this.A.G(b);
            c = yr(px(b));
            d = c.url;
            tF(this.timer, (9).toString(), 9, c.Si);
            this.j.G(d);
            this.ka.G(lx(b) ? new kg(lg, "https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : new kg(lg, "https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))
        } else this.j.G(""), this.A.ca()
    };
    var UU = function(a, b, c, d, e, f) {
        Y.call(this, a, 878);
        this.j = b;
        this.da = c;
        this.O = d;
        this.C = e;
        this.output = GM(this);
        f && JM(this, f)
    };
    _.R(UU, Y);
    UU.prototype.g = function() {
        for (var a = _.A(this.j), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Vm(b, this.da);
            if (!Um(b, this.da) && c) {
                a: {
                    var d = c;
                    var e = this.O.W[b.getDomId()],
                        f = 0,
                        h = 0;e = _.A(Dm(e));
                    for (var k = e.next(); !k.done; k = e.next())
                        if (k = k.value, Array.isArray(k)) {
                            var l = _.A(k);
                            k = l.next().value;
                            l = l.next().value;
                            if (!(typeof k !== "number" || typeof l !== "number" || k <= 1 || l <= 1 || (f = f || k, h = Math.min(h || Infinity, l), hq(Xm(d, this.C)) || !d.parentElement || hq(Xm(d.parentElement, this.C))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || h ? [f, h] : null
                }
                h = this.O;f = h.X;h = h.W[b.getDomId()];gq(c, nn(b), Iq(f, h), d)
            }
        }
        this.output.notify()
    };
    var VU = di(1254, function(a, b) {
        b = b.context;
        var c = _.yh(NJ),
            d = _.yh(OJ);
        d > 0 && b.Gb < 1 / d && b.va.Pa.Sa.sb.request.Vn.xa({
            za: d,
            ln: c,
            Se: a.Se,
            status: a.Se === 0 ? "NOT_RETRIED" : a.Se > c ? "OVER_MAX_RETRIES/ABANDONED" : "RECOVERED"
        });
        return {}
    }, {});
    var WU = function(a, b, c, d, e, f, h, k) {
            this.L = a;
            this.H = b;
            this.B = c;
            this.V = d;
            this.aa = e;
            this.A = f;
            this.j = h;
            this.J = k;
            this.l = "";
            this.o = -1;
            this.state = 1;
            this.g = ""
        },
        YU = function(a, b) {
            if (b)
                if (a.state !== 1 && a.state !== 2) XU(a, new EL("state err: (" + ([a.state, a.g.length].join() + ")")));
                else {
                    a.g && (b = a.g + b);
                    var c = 0;
                    do {
                        var d = b.indexOf("\n", c);
                        var e = d !== -1;
                        if (!e) break;
                        var f = a;
                        c = b.substr(c, d - c);
                        if (f.state === 1) f.l = c, ++f.o, f.state = 2;
                        else {
                            var h = void 0;
                            try {
                                f.L(f.o, f.l, {
                                    kind: 0,
                                    qb: hD(c)
                                }, f.V, f.aa, f.A, f.j, (h = f.J) != null ? h : void 0), f.l = ""
                            } catch (k) {}
                            f.state = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.g = b.substr(c)
                }
        },
        XU = function(a, b) {
            a.state = 4;
            try {
                a.H(b)
            } catch (c) {}
        },
        ZU = function(a) {
            a.state !== 1 || a.g ? XU(a, new EL("state err (" + ([a.state, a.g.length].join() + ")"))) : (a.state = 3, a.B(a.o, a.V, a.aa))
        };
    var $U = function(a, b, c, d, e, f, h, k, l, m, n, p, q) {
        Y.call(this, a, 788);
        this.ka = b;
        this.ia = c;
        this.fa = d;
        this.aa = e;
        this.M = f;
        this.O = h;
        this.I = GM(this);
        this.F = W(this);
        this.A = W(this);
        this.ba = 0;
        this.U = !1;
        this.j = q != null ? q : new XMLHttpRequest;
        this.K = X(this, k);
        l && (this.ua = HM(this, l));
        this.Fa = X(this, m);
        JM(this, n);
        this.sa = X(this, p)
    };
    _.R($U, Y);
    $U.prototype.g = function() {
        var a = this,
            b = this.Fa.value;
        if (b) {
            var c, d = new WU(this.ka, this.ia, this.fa, this.K.value, this.aa, (c = this.ua) == null ? void 0 : c.value);
            this.j.open("GET", b);
            this.j.withCredentials = this.sa.value;
            this.j.onreadystatechange = function() {
                aV(a, d, !1)
            };
            this.j.onload = function() {
                aV(a, d, !0);
                a.F.G(a.j.status);
                if (a.j.status >= 300) {
                    var e;
                    a.A.G((e = a.j.responseText) != null ? e : "")
                } else a.A.G("")
            };
            this.j.onerror = function() {
                XU(d, new FL("XHR error"));
                a.K.value.forEach(function(e) {
                    kv(e, a.M, a.O, "")
                });
                a.F.G(0);
                a.A.G("")
            };
            this.j.send()
        }
        this.I.notify()
    };
    var aV = function(a, b, c) {
        try {
            if (a.j.readyState === 3 || a.j.readyState === 4)
                if (a.j.status >= 300) a.U || (XU(b, new FL("xhr_err-" + a.j.status)), a.U = !0);
                else {
                    var d = a.j.responseText.substr(a.ba);
                    d && YU(b, d);
                    a.ba = a.j.responseText.length;
                    c && a.j.readyState === 4 && ZU(b)
                }
        } catch (e) {
            XU(b, e)
        }
    };
    var bV = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, y) {
        Y.call(this, a, 1078);
        this.ia = b;
        this.fa = c;
        this.ba = d;
        this.aa = e;
        this.M = f;
        this.O = h;
        this.googletag = k;
        this.U = GM(this);
        this.I = W(this);
        this.A = W(this);
        this.K = W(this);
        this.F = 0;
        this.j = X(this, l);
        m && (this.sa = HM(this, m));
        n && (this.ua = X(this, n));
        this.Fa = X(this, p);
        JM(this, q);
        this.ka = X(this, t);
        if (w == null ? 0 : w.We) this.Ya = HM(this, w.We);
        v && (this.Oa = X(this, v));
        y && (this.nb = HM(this, y))
    };
    _.R(bV, Y);
    bV.prototype.g = function() {
        var a = this,
            b = this.Fa.value;
        if (b) {
            var c, d, e, f = new WU(this.ia, this.fa, this.ba, this.j.value, this.aa, (c = this.sa) == null ? void 0 : c.value, (d = this.ua) == null ? void 0 : d.value, (e = this.nb) == null ? void 0 : e.value);
            c = this.ka.value ? "include" : "omit";
            var h;
            d = (h = this.Ya) == null ? void 0 : h.value;
            var k;
            h = (k = this.Oa) == null ? void 0 : k.value;
            k = _.x(Object, "assign").call(Object, {}, {
                credentials: c
            }, d ? {
                browsingTopics: d
            } : {}, h ? {
                adAuctionHeaders: h
            } : {});
            fetch(b, k).then(function(l) {
                if (_.yh(NJ) > 0) {
                    a.K.G(NO(a.M, a.j.value[0]));
                    for (var m = _.A(a.j.value), n = m.next(); !n.done; n = m.next()) {
                        n = n.value;
                        var p = a.M.g.get(n);
                        p && (p.ci = 0);
                        if (n = a.M.g.get(n)) n.Nh = 0
                    }
                }
                cV(a, l, f)
            }).catch(function(l) {
                _.yh(NJ) > 0 ? dV(a, l, f) : eV(a, l, f)
            })
        }
        this.U.notify()
    };
    var dV = function(a, b, c) {
            var d = Cl(a.context, 1253, function() {
                    a.F = 0;
                    for (var f = _.A(a.j.value), h = f.next(); !h.done; h = f.next()) OO(a.M, h.value);
                    a.googletag.pubads().refresh(a.j.value.map(function(k) {
                        return k.g
                    }));
                    a.I.G(0);
                    a.A.G("")
                }),
                e = _.yh(NJ);
            a.j.value.every(function(f) {
                return NO(a.M, f) < e
            }) ? (a.F = setTimeout(d, _.yh(MJ)), _.Jp(a, function() {
                a.F && (clearTimeout(a.F), a.F = 0, eV(a, b, c))
            })) : (a.K.G(e + 1), eV(a, b, c))
        },
        eV = function(a, b, c) {
            fV(a, b, c);
            a.j.value.forEach(function(d) {
                kv(d, a.M, a.O, "")
            })
        },
        cV = function(a, b, c) {
            a.I.G(b.status);
            if (b.status >= 300) a.A.Ra(b.text()), XU(c, new FL("fetch_status-" + b.status));
            else {
                a.A.G("");
                var d, e = (d = b.body) == null ? void 0 : d.pipeThrough(new TextDecoderStream).getReader();
                e ? e.read().then(function(f) {
                    gV(a, f, e, c)
                }).catch(function(f) {
                    fV(a, f, c)
                }) : XU(c, new FL("failed_reader"))
            }
        },
        gV = function(a, b, c, d) {
            var e = b.value;
            b.done ? ZU(d) : (YU(d, e), c.read().then(function(f) {
                gV(a, f, c, d)
            }).catch(function(f) {
                fV(a, f, d)
            }))
        },
        fV = function(a, b, c) {
            XU(c, new FL("fetch error: " + (b instanceof Error ? b.message : void 0)));
            a.I.G(0);
            a.A.G("")
        };
    var hV = function(a, b, c, d, e) {
        Y.call(this, a, 918);
        this.O = b;
        this.timer = c;
        this.output = GM(this);
        this.j = X(this, e);
        JM(this, d)
    };
    _.R(hV, Y);
    hV.prototype.g = function() {
        var a = this.j.value;
        a.length && ev(this.timer, "3", fv(this.O.W[a[0].getDomId()], 20));
        this.output.notify()
    };
    var iV = di(1229, function(a, b) {
        a = a.Lh;
        var c = b.wa,
            d, e;
        b = fA(a, 6);
        var f = fA(a, 7),
            h = !!Yz(a, 8),
            k = gA(a, 10),
            l = (e = a.getEscapedQemQueryId()) != null ? e : "";
        e = _.wm(a, gC, 43);
        var m = !!Yz(a, 9),
            n = !!Yz(a, 12),
            p = _.wm(a, TB, il(a, zC, 48)),
            q = _.wm(a, SB, il(a, zC, 39)),
            t = _.yc(_.Sz(a, 36)),
            w = !!Yz(a, 13),
            v = gA(a, 49),
            y = _.wm(a, jC, 51),
            z = gA(a, 61);
        if (c.kind !== 0) {
            var G;
            c = {
                kind: 0,
                qb: (G = Xj(a, 4)) != null ? G : ""
            }
        }
        G = _.wm(a, vC, 58);
        var C = (d = _.wm(a, bC, 56)) == null ? void 0 : gA(d, 1);
        d = _.Uj(a, IB, 62, _.Wj());
        var H = _.Uj(a, hC, 67, _.Wj());
        var L = _.ce(a, 63, Qc, _.Wj(), void 0, void 0, 0);
        return {
            output: {
                height: b,
                width: f,
                isEmpty: h,
                ac: k,
                pb: l,
                ge: e,
                isBackfill: m,
                Db: n,
                Km: p,
                Ua: q,
                vc: t,
                vi: w,
                tc: v,
                Jf: y,
                Zb: z,
                wa: c,
                ga: G,
                Po: C,
                qd: d,
                Tl: H,
                mh: L,
                Ag: !!Yz(a, 64),
                Sg: _.wm(a, iC, 68),
                am: _.I(zJ) ? gA(a, 1) : void 0
            }
        }
    }, {
        output: void 0
    });
    var jV = di(1220, function(a, b) {
        var c = b.P;
        b = b.context;
        var d;
        ((d = _.wm(a.Lh, kC, 69)) == null ? 0 : _.Q(d, 1)) && P(c, fQ(b.La));
        return {}
    }, {});
    var kV = function(a, b, c, d, e) {
        Y.call(this, a, 803);
        this.j = b;
        this.slotId = c;
        this.Ha = d;
        this.aa = e;
        this.output = W(this)
    };
    _.R(kV, Y);
    kV.prototype.g = function() {
        var a = JSON.parse(this.j),
            b = Mp(a, GA);
        if (!b) throw Error("missing ad unit path");
        if (a == null || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.j);
        a = De(yC, a);
        b = Iu(a, 27);
        b = _.A(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.fh(gh).g(c);
        Vn(4, this.context, this.Ha, this.aa);
        gv(this.slotId, wO, 800, a);
        this.output.G(a)
    };
    var lV = function(a, b, c, d) {
        Y.call(this, a, 823);
        this.slotId = b;
        this.M = c;
        this.j = X(this, d)
    };
    _.R(lV, Y);
    lV.prototype.g = function() {
        var a = this;
        Yz(this.j.value, 11) && (_.HO(this.M, this.slotId), FO(this.M, this.slotId, function() {
            _.IO(a.M, a.slotId)
        }))
    };
    var mV = function(a, b, c, d) {
        jk.call(this);
        this.context = a;
        this.slotId = b;
        b = d.M;
        var e = d.aa;
        var f = d.ib;
        var h = d.Ha;
        a = d.wa;
        d = d.P;
        c = new kV(this.context, c, this.slotId, h, e);
        J(this, c);
        e = new iS(this.context, e, h, c.output);
        J(this, e);
        f = new kS(this.context, this.slotId, f, c.output);
        J(this, f);
        b = new lV(this.context, this.slotId, b, c.output);
        J(this, b);
        a = this.g(iV, {
            Lh: c.output
        }, {
            wa: a
        });
        this.g(jV, {
            Lh: c.output
        }, {
            P: d,
            context: this.context
        });
        this.j = {
            pn: a.output
        }
    };
    _.R(mV, jk);
    var nV = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, y, z, G, C, H, L, S, M, da) {
        Y.call(this, a, 973);
        var Z = this;
        this.ia = b;
        this.P = c;
        this.I = d;
        this.U = e;
        this.O = f;
        this.M = h;
        this.Ha = k;
        this.od = l;
        this.ab = m;
        this.K = n;
        this.Qe = p;
        this.fa = q;
        this.networkCode = t;
        this.isSecureContext = w;
        this.hc = v;
        this.ib = y;
        this.C = z;
        this.da = G;
        this.j = S;
        this.ka = M;
        this.Be = da;
        this.A = [];
        this.sa = _.IA(function() {
            return void Gl(Z.context, 646, new DL("response slot array length exceeded"))
        });
        this.F = HM(this, C);
        this.ba = X(this, H);
        this.ua = X(this, L);
        this.j.rb && JM(this, this.j.rb.sf)
    };
    _.R(nV, Y);
    nV.prototype.g = function() {
        var a = this,
            b = new jk;
        _.Gr(this, b);
        var c = this.ba.value,
            d = qx(this.O.X);
        this.F.value && this.ka.G(this.F.value);
        var e = dt(this.context, this.da);
        e && _.Gr(b, e.Wa);
        var f = Zr(this.context, _.wm(this.O.X, Bw, 5), this.M, this.I, e == null ? void 0 : e.Jn.Le);
        e = f.oh;
        (f = f.gn) && _.Gr(b, f);
        f = new UU(this.context, this.I, this.da, this.O, this.C, e);
        J(b, f);
        var h = !!_.Q(this.O.X, 6);
        e = function() {
            if (_.I(FJ)) return b.g(MU, {}, a.context, a.I, h, a.O, a.P, a.C, c).V;
            var Sc = new NU(a.context, a.I, h, a.O, a.P, a.C, c);
            J(b, Sc);
            return Sc.j
        }();
        var k, l = new UQ(this.context, d, c, ((k = _.wm(this.O.X, Jv, 36)) == null ? void 0 : _.ce(k, 1, _.yc, _.Wj(_.om))) || []);
        J(b, l);
        var m = this.j;
        k = m.rk;
        var n = m.uk,
            p = m.Xk;
        m = m.ke;
        var q, t = (q = this.j.rb) != null ? q : {},
            w = t.Kc,
            v = t.Xd,
            y = t.zb,
            z = t.Fd,
            G = t.Gd,
            C = t.wj;
        q = t.bf;
        var H = t.Wg,
            L = t.Zi,
            S = t.te;
        t = t.Ze;
        if (_.I(EJ)) {
            var M = b.g(nT, {
                Zl: L
            }, {});
            L && Nv(Ov(M, _.yh(DJ)), L);
            var da = M.Qk;
            var Z = new oT(this.context, L);
            J(b, Z);
            M = Z.j;
            Z = Z.A
        }
        if (_.I(nK) && p.Ei) {
            _.I(ku);
            var U = new mU(this.context, this.C.navigator, e);
            J(b, U);
            U = U.output
        }
        if (H = ov(this.context, p, this.O, c, this.F.value, e, l.output, H, M, U)) {
            var pa = H.Do;
            H = H.Co;
            var ka = pa.Ph;
            var Da = pa.gh;
            pa = pa.Cf;
            _.Gr(b, H)
        }
        if (Z = ou(this.context, p, this.C.navigator, l.output, Z)) {
            var ya = Z.Yk;
            Z = Z.Eo;
            var Fa = ya.Ak;
            ya = ya.Lj;
            Z && _.Gr(b, Z)
        }
        _.I(eK) && (ya = W(this), ya.G(p.si));
        var zb = new HT(this.context, this.C);
        J(b, zb);
        H = (w != null ? w : {}).jc;
        var $a;
        Z = ($a = this.j.rb) == null ? void 0 : $a.Ye;
        $a = new jT(this.context, k.Fn);
        J(b, $a);
        if (w = Gq(this.context, this.P, this.O.X, this.O.W, this.networkCode, e, w, y)) {
            var Ra = w.El;
            _.Gr(this, w.Wa)
        }
        if (Da = mt(this.context, n, Da, pa, this.O, e, L)) {
            var Db = Da.eg;
            _.Gr(this, Da.Wa)
        }
        if (da = Xt(this.context, this.F.value, this.networkCode, Z, l.output, da, t)) {
            var Ha = da.zo;
            _.Gr(this, da.Wa);
            this.A.push(Ha.be.promise)
        }!_.I(nK) && p.Ei && (_.I(ku), U = new mU(this.context, this.C.navigator, e), J(b, U), U = U.output);
        da = tx();
        var Ob = ++this.M.H;
        Da = this.Qe;
        var dd, Rc;
        Ra = new TU(this.context, h, this.M, this.Ha, this.O, Da.mc, this.networkCode, Da.de, Da.ce, this.ua.value, _.fh(El), c, this.isSecureContext, this.hc, da, this.C, m, $a.output, k.Ic, zb.output, e, (dd = Ra) == null ? void 0 : dd.li, Ha, Z, f.output, v == null ? void 0 : v.Bh, H, y, z, G, C, Db, Fa, (Rc = this.j.rb) == null ? void 0 : Rc.Wg, S, M, U, this.Be);
        J(b, Ra);
        Db = new hV(this.context, this.O, _.fh(El), Ra.j, e);
        J(b, Db);
        d = new OU(this.context, d, c);
        J(b, d);
        dd = Cl(this.context, 646, function(Sc, Sd, of , mg, ng, pf, gj, rh) {
            return void oV(a, ng, Sc, Sd, of , mg, pf, gj, rh)
        });
        Rc = Cl(this.context, 647, function(Sc, Sd, of ) {
            return void pV(a, Ob, of , Sd, Sc)
        });
        M = qV(this);
        da ? (ya = new bV(this.context, dd, M, Rc, c, this.M, this.O, Mo(), e, ka, Fa, Ra.j, Db.output, d.output, Ha, ya, U), J(b, ya), ka = ya.U, Fa = ya.I, Ha = ya.A, _.yh(NJ) > 0 && _.yh(OJ) > 0 && b.g(VU, {
            Se: ya.K
        }, {
            context: this.context
        })) : (Ha = new $U(this.context, dd, M, Rc, c, this.M, this.O, e, ka, Ra.j, Db.output, d.output), J(b, Ha), ka = Ha.I, Fa = Ha.F, Ha = Ha.A);
        Fa = b.g(PU, {
            status: Fa,
            responseText: Ha
        }, {
            P: this.P
        }).finished;
        this.A.push(Fa.promise);
        Fa = new QU(this.context, Ob, e, ka, q, this.networkCode);
        J(b, Fa);
        Ha = new KU(this.context, Ra.A, Ra.j);
        J(b, Ha);
        Ha = new SU(this.context, this.K.Ca, this.O, Ha.output);
        J(b, Ha);
        Ha = Xr(b.g(xT, {}, {
            od: this.od,
            C: this.C
        }), Ha.output).finished;
        Ha = new QS(this.context, this.O, this.ab, e, Ha);
        J(b, Ha);
        e = new RR(this.context, this.M, this.O, this.da, e, Ha.output);
        J(b, e);
        Ha = b.g(GT, {}, {
            context: this.context,
            zn: Qj(this.C),
            C: this.C,
            aa: c,
            Um: Pk
        }).finished;
        Ob === 1 && (ka = new KR(this.context, this.C, c, Z, ka), J(b, ka), this.A.push(ka.output.promise));
        this.A.push(Fa.output.promise, e.output.promise, Ha.promise);
        b.run()
    };
    var oV = function(a, b, c, d, e, f, h, k, l) {
            var m, n, p, q;
            return _.vf(function(t) {
                if (c >= f.length) return a.sa(), t.return();
                m = f[c];
                if (!m) return Gl(a.context, 646, Error("missing slot")), t.return();
                c === 0 && (n = fv(a.O.W[m.getDomId()], 20), ev(_.fh(El), "4", n));
                return t.yield(rV(a, m, d, e, b, (p = h) == null ? void 0 : p[m.getId()], k, (q = l) == null ? void 0 : q.get(m)), 0)
            })
        },
        pV = function(a, b, c, d, e) {
            var f, h, k;
            return _.vf(function(l) {
                if (l.g == 1) {
                    var m = a.context,
                        n = e + 1,
                        p = d.length,
                        q = ql(m);
                    if (q.ud) {
                        var t = m.va,
                            w = t.td;
                        m = pl(m, q.jd);
                        q = new RF;
                        q = _.Ii(q, 3, b);
                        n = _.ul(q, 1, n);
                        p = _.ul(n, 2, p);
                        p = _.vl(m, 8, wl, p);
                        w.call(t, p)
                    }
                    f = e + 1
                }
                if (l.g != 3) {
                    if (!(f < d.length)) return l.yield(sV(a), 0);
                    if (!d[f]) {
                        l.g = 3;
                        return
                    }
                    t = new yC;
                    t = _.dk(t, 8, !0);
                    h = cl(t);
                    k = '{"empty":' + h + "}";
                    return l.yield(oV(a, c, f, k, {
                        kind: 0,
                        qb: ""
                    }, d), 3)
                }++f;
                l.g = 2
            })
        },
        rV = function(a, b, c, d, e, f, h, k) {
            var l, m, n, p, q, t, w, v, y, z, G, C, H, L, S, M, da, Z;
            return _.vf(function(U) {
                if (U.g == 1) return l = {
                    aa: e,
                    ib: a.ib,
                    M: a.M,
                    Ha: a.Ha,
                    wa: d,
                    P: a.P
                }, m = new mV(a.context, b, c, l), U.yield(Dt(m), 2);
                n = U.o;
                q = p = n.pn;
                t = q.isEmpty;
                w = q.pb;
                v = q.ga;
                y = q.Po;
                z = q.Db;
                G = q.Sg;
                C = q.am;
                H = q.wa;
                L = q.height;
                S = q.width;
                var pa = a.context,
                    ka = (M = a.j.rb) == null ? void 0 : M.Kc;
                if (ka && !(Math.random() > .01)) {
                    var Da = new jk;
                    J(Da, new FR(pa, y, z, w, ka.jc));
                    Da.run()
                }
                if (_.I(WI)) {
                    ka = a.context;
                    Da = G;
                    var ya = a.C;
                    pa = new jk;
                    ka = new YR(ka, Da, ya);
                    J(pa, ka);
                    pa.run()
                }
                pa = a.context;
                var Fa;
                ka = (Fa = Tz(a.O.W[b.getDomId()], OQ, 31)) == null ? void 0 : _.Q(Fa, 1);
                Fa = C === "vast";
                Da = b.L;
                var zb = ql(pa);
                ya = zb.ud;
                zb = zb.jd;
                ka ? pa.va.Pa.Sa.sb.Bi.xa({
                    za: 1,
                    qj: !0,
                    ak: Fa,
                    Sj: t,
                    Xj: Da
                }) : ya && pa.va.Pa.Sa.sb.Bi.xa({
                    za: zb,
                    qj: !1,
                    ak: Fa,
                    Sj: t,
                    Xj: Da
                });
                if (b.L) return U.return();
                da = !!v || !!f;
                (Z = Ar("google_norender")) || t && !da ? kv(b, a.M, a.O, w) : _.I(zJ) && C === "vast" ? (Fg({
                    kind: zg(),
                    qb: Kg
                }), Fa = S === void 0 || L === void 0 ? void 0 : new _.Nm(S, L), a.context.va.Pa.Sa.sb.outstream.xm.xa({
                    za: 1,
                    Gj: !!Fa
                }), gv(b, jv, 825, {
                    isEmpty: !1,
                    vast: H.qb,
                    size: Fa
                })) : HU(a.fa, a.ia, a.P, b, t || Z, da, a.M, a.O, a.ib, p, e, f, h, a.K.Ca, a.ab, a.j, k);
                m.dispose();
                U.g = 0
            })
        },
        qV = function(a) {
            return Cl(a.context, 289, function(b) {
                b = b instanceof Error ? b : Error();
                b.message = b.message || "strm_err";
                Gl(a.context, 289, b);
                sV(a)
            })
        },
        sV = function(a) {
            return _.vf(function(b) {
                if (b.g == 1) {
                    var c = a.M,
                        d = a.U,
                        e = c.o.get(d) - 1;
                    e === 0 ? c.o.delete(d) : c.o.set(d, e);
                    return e ? b.return() : b.yield(_.B.Promise.all(a.A), 2)
                }
                gv(a.K.Cj, AO, 965, a.U);
                b.g = 0
            })
        };
    var tV = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, y, z, G, C, H, L, S, M) {
        Y.call(this, a, 885);
        this.U = b;
        this.P = c;
        this.O = d;
        this.M = e;
        this.Ha = f;
        this.Qe = h;
        this.od = k;
        this.ab = l;
        this.j = m;
        this.A = n;
        this.K = p;
        this.isSecureContext = q;
        this.Jb = t;
        this.I = w;
        this.hc = v;
        this.ib = y;
        this.C = z;
        this.da = G;
        this.F = L;
        this.ba = S;
        this.Be = M;
        this.fa = X(this, C);
        JM(this, H)
    };
    _.R(tV, Y);
    tV.prototype.g = function() {
        var a = this.fa.value;
        if (a.length) {
            var b = this.M,
                c = this.j,
                d = a.length;
            b.o.has(c);
            b.o.set(c, d);
            a = _.A(a);
            for (b = a.next(); !b.done; b = a.next()) {
                c = b.value;
                var e = void 0;
                b = c.networkCode;
                d = c.V;
                c = new jk;
                _.Gr(this, c);
                var f = Jr(this.context, this.I, (e = this.F.rb) == null ? void 0 : e.kk);
                e = f.Zg;
                _.Gr(c, f.Wa);
                f = cp(this.context, this.P, this.M, this.C, e, 3, qx(this.O.X));
                e = f.xb;
                _.Gr(c, f.Wa);
                f = new pT(this.context, this.C, e);
                J(c, f);
                f = new hS(this.context, this.C, e);
                J(c, f);
                f = new lw(this.context, this.C, e);
                J(c, f);
                var h = new IU(this.context, this.Ha, this.Jb, e);
                J(c, h);
                b = new nV(this.context, this.U, this.P, d, this.j, this.O, this.M, this.Ha, this.od, this.ab, this.A, this.Qe, this.K, b, this.isSecureContext, this.hc, this.ib, this.C, this.da, f.output, e, h.A, this.F, this.ba, this.Be);
                J(c, b);
                c.run()
            }
        } else gv(this.A.Cj, AO, 965, this.j)
    };
    var uV = new _.B.Map,
        vV = function(a, b, c, d) {
            d = d === void 0 ? uV : d;
            Y.call(this, a, 834);
            this.P = b;
            this.V = c;
            this.j = d;
            this.A = W(this);
            this.A.Ra(_.B.Promise.all(this.V.map(this.F, this)).then(function(e) {
                return e.filter(function(f) {
                    return f != null && !f.L
                })
            }))
        };
    _.R(vV, Y);
    vV.prototype.g = function() {};
    vV.prototype.F = function(a) {
        var b = this,
            c, d;
        return _.vf(function(e) {
            if (e.g == 1) {
                if (a.L) return e.return();
                b.j.has(a) || (b.j.set(a, wx(a)), _.Jp(a, function() {
                    return void b.j.delete(a)
                }));
                c = b.j.get(a);
                return e.yield(c(), 2)
            }
            d = e.o;
            if (b.L) return e.return();
            if (d) return e.return(a);
            P(b.P, HP(a.getAdUnitPath()));
            return e.return()
        })
    };
    var wV = di(847, function(a, b, c, d) {
        a = a.V;
        if (!a.length) return {
            Pe: []
        };
        for (var e = _.A(a), f = e.next(); !f.done; f = e.next()) KO(b, f.value);
        return d ? {
            Pe: []
        } : c ? (b = Bl(a[0].getAdUnitPath()), {
            Pe: xx(a, b)
        }) : {
            Pe: a.map(function(h) {
                return {
                    networkCode: Bl(h.getAdUnitPath()),
                    V: [h]
                }
            })
        }
    }, {
        Pe: void 0
    });
    var xV = di(845, function(a, b) {
        a = a.V;
        var c = function(d) {
            return !!Dm(b[d.getDomId()]).length
        };
        return {
            Rk: a.filter(c),
            bl: a.filter(HA(c))
        }
    }, {
        Rk: void 0,
        bl: void 0
    });
    var yV = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t, w, v, y, z) {
        _.V.call(this);
        var G = this;
        this.context = a;
        this.J = b;
        this.P = c;
        this.M = d;
        this.Ha = e;
        this.Ca = f;
        this.od = h;
        this.ab = k;
        this.H = l;
        this.isSecureContext = m;
        this.Jb = n;
        this.j = p;
        this.hc = q;
        this.ib = t;
        this.da = w;
        this.C = v;
        this.B = y;
        this.A = z;
        this.g = new _.B.Map;
        this.l = new sO(a);
        _.Gr(this, this.l);
        this.l.listen(AO, function(C) {
            C = C.detail;
            var H = G.g.get(C);
            H && (G.g.delete(C), H.dispose())
        })
    };
    _.R(yV, _.V);
    _.zV = function(a, b, c, d) {
        var e = ++a.M.j;
        a.g.has(e);
        var f = new jk;
        a.g.set(e, f);
        b = new vV(a.context, a.P, b);
        J(f, b);
        if (_.I(VI) && !_.Sk(a.C.top) && window.IntersectionObserver) var h = f.l(WR, {
            V: b.A
        }, a.da, a.context, f).output;
        var k = f.g(xV, {
            V: b.A
        }, d.W);
        b = k.bl;
        k = f.g(wV, {
            V: k.Rk
        }, a.M, !!_.Q(d.X, 6), Ar("google_nofetch")).Pe;
        b = f.g(SR, {
            V: b
        }, a.M, d, a.da).finished;
        a = new tV(a.context, a.J, a.P, d, a.M, a.Ha, c, a.od, a.ab, e, {
            Cj: a.l,
            Ca: a.Ca
        }, a.H, a.isSecureContext, a.Jb, a.j, a.hc, a.ib, a.C, a.da, k, b, a.B, a.A, h);
        J(f, a);
        f.run()
    };
    var AV = function(a, b, c, d, e, f, h, k, l, m, n, p, q, t) {
        oU.call(this, a, c, k);
        this.context = a;
        this.M = d;
        this.B = new _.B.Set;
        this.H = {};
        this.I = new GU(a, d);
        this.F = new yV(a, b, c, d, new _.IL(window), this.l, n, e, this.I, f, h, l, m, p, document, window, q, t);
        _.Gr(this, this.F)
    };
    _.R(AV, oU);
    AV.prototype.getName = function() {
        return "publisher_ads"
    };
    AV.prototype.display = function(a, b, c, d, e) {
        d = d === void 0 ? "" : d;
        e = e === void 0 ? "" : e;
        var f = "";
        if (d)
            if (_.La(d) && d.nodeType == 1) {
                var h = d;
                f = h.id
            } else f = d;
        Cv(this);
        var k = uo(c, this.context, this.P, a, b, f),
            l = k.slotId;
        k = k.Ja;
        if (l && k) {
            h && !f && (h.id = l.getDomId());
            this.slotAdded(l, k);
            k.setClickUrl(e);
            var m;
            vv(this, (m = h) != null ? m : l.getDomId(), c)
        } else P(this.P, Wl("PubAdsService.display", [a, b, d]))
    };
    var vv = function(a, b, c) {
        var d = BV(b, c);
        c = d.slotId;
        var e = d.pm;
        d = d.qm;
        if (c) {
            if (d = _.Qm(), (b = _.sQ(d, c.getDomId())) && !_.Q(b, 19))
                if (e && d.l.set(c, e), Vm(c) || Fm(cr(b))) {
                    if (_.dk(b, 19, !0), e = _.Rm(d.g, d.Xa), _.I(EG) && !_.x(a.g, "includes").call(a.g, c) && (a.slotAdded(c, b), a.context.va.Pa.Sa.sb.Bl.xa({
                            za: 1
                        })), a.enabled) {
                        Cv(a);
                        a.enabled && GO(a.M, c);
                        a.P.info(iP());
                        b = e.X;
                        d = e.W;
                        var f = _.Q(b, 6);
                        if (f || !a.M.cd(c)) f && (f = Vm(c)) && gv(c, vO, 778, f), _.Q(b, 4) && (d = d[c.getDomId()], f = a.M, vr(d, b) && !f.cd(c) && wr(c, document, d, b)), wQ(a, e, c)
                    }
                } else P(a.P, ZO(String(Xj(b, 1)), String(Xj(b, 2))), c)
        } else d ? a.P.error($O(d)) : a.P.error(Wl("googletag.display", [String(b)]))
    };
    AV.prototype.slotAdded = function(a, b) {
        var c = this;
        _.Q(b, 17) || this.enabled && GO(this.M, a);
        gv(this.l, yO, 724, {
            ki: a.getDomId(),
            W: b
        });
        a.listen(jv, function(d) {
            var e = d.detail;
            d = e.size;
            var f = e.isEmpty;
            var h = e.vast;
            e = new rS(a, "publisher_ads");
            f && (e.isEmpty = !0, e.slotContentChanged = !1);
            h && _.I(zJ) && (e.vast = h);
            f = a.g.getResponseInformation();
            d && f && (e.size = [d.width, d.height], e.sourceAgnosticCreativeId = f.sourceAgnosticCreativeId, e.sourceAgnosticLineItemId = f.sourceAgnosticLineItemId, e.isBackfill = f.isBackfill, e.creativeId = f.creativeId, e.lineItemId = f.lineItemId, e.creativeTemplateId = f.creativeTemplateId, e.advertiserId = f.advertiserId, e.campaignId = f.campaignId, e.yieldGroupIds = f.yieldGroupIds, e.companyIds = f.companyIds);
            gv(c.l, "slotRenderEnded", 708, e)
        });
        a.listen(wO, function() {
            gv(c.l, "slotResponseReceived", 709, new xS(a, c.getName()))
        });
        cr(b) === 4 && CV(this, "rewardedSlotClosed", a, b);
        cr(b) === 7 && CV(this, "gameManualInterstitialSlotClosed", a, b);
        oU.prototype.slotAdded.call(this, a, b)
    };
    var CV = function(a, b, c, d) {
            _.Jp(c, a.l.listen(b, function(e) {
                c.g === e.detail.slot && (e = {}, DV(a, [c], _.Qm().g, (e[c.getDomId()] = d, e), a.M))
            }))
        },
        wQ = function(a, b, c) {
            var d = EV(a, b, c);
            FV(a, d, b, {
                mc: 1
            });
            b = c.getAdUnitPath();
            if (c = a.H[b]) {
                c = _.A(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, FV(a, d.V, d.O, d.Qe);
                delete a.H[b]
            }
        },
        EV = function(a, b, c) {
            var d = b.X,
                e = b.W[c.getDomId()];
            return _.Q(d, 4) ? [] : !_.Q(d, 6) || (e == null ? 0 : _.Q(e, 17)) ? (a.B.add(c), _.Jp(c, function() {
                return void a.B.delete(c)
            }), [c]) : a.g.filter(function(f) {
                if (a.B.has(f) || _.I(LJ) && !Vm(f) && !Fm(cr(e))) return !1;
                a.B.add(f);
                _.Jp(f, function() {
                    return void a.B.delete(f)
                });
                return !0
            })
        },
        FV = function(a, b, c, d) {
            a.P.info(pP());
            if (GV(a, b, d, c) && d.mc !== 1)
                for (b = _.A(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), gv(a.l, zO, 725, {
                    ki: d,
                    W: c.W[d]
                })
        },
        GV = function(a, b, c, d) {
            b = b.filter(function(e) {
                var f = d.W[e.getDomId()],
                    h = _.iv(a.M, e);
                h === !1 && P(a.P, ZP(String(cr(f)), e.getAdUnitPath()));
                if (!h) return !1;
                (_.F = [5, 4, 7], _.x(_.F, "includes")).call(_.F, cr(f)) && _.HO(a.M, e);
                return !0
            });
            if (!b.length) return null;
            _.zV(a.F, b, c, d);
            return b
        };
    AV.prototype.refresh = function(a, b, c) {
        c = c === void 0 ? {
            mc: 2
        } : c;
        b = HV(this, b);
        b.length && IV(this, a, b, c);
        return !0
    };
    var HV = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.L) return !0;
                P(a.P, sP(String(d)));
                return !1
            })
        },
        IV = function(a, b, c, d) {
            var e = c[0],
                f, h = (f = e == null ? void 0 : e.getDomId()) != null ? f : "";
            if (a.enabled) {
                var k = _.A(c);
                e = k.next();
                for (f = {}; !e.done; f = {
                        lg: void 0
                    }, e = k.next()) f.lg = e.value, a.B.add(f.lg), _.Jp(f.lg, function(l) {
                    return function() {
                        return void a.B.delete(l.lg)
                    }
                }(f));
                FV(a, c, b, d)
            } else c.length && _.Q(b.X, 6) ? (P(a.P, oP(h), e), e = e.getAdUnitPath(), f = (k = a.H[e]) != null ? k : [], f.push({
                V: c,
                O: b,
                Qe: d
            }), a.H[e] = f) : P(a.P, mP(h), e)
        };
    AV.prototype.A = function() {
        var a = _.Qm().g;
        if (_.Q(a, 6))
            for (var b = _.A(this.g), c = b.next(); !c.done; c = b.next()) this.enabled && GO(this.M, c.value);
        BQ(this, a);
        a = Mo();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    AV.prototype.destroySlots = function(a) {
        a = oU.prototype.destroySlots.call(this, a);
        if (a.length && this.enabled) {
            var b = _.Qm();
            JV(this, a, b.g, b.Xa)
        }
        return a
    };
    var DQ = function(a, b, c, d) {
            if (!a.enabled) return P(a.P, nP(), d[0]), !1;
            var e = HV(a, d);
            if (!e.length) return P(a.P, Wl("PubAdsService.clear", [d].filter(function(f) {
                return f !== void 0
            }))), !1;
            a.P.info(qP());
            JV(a, e, b, c);
            return !0
        },
        JV = function(a, b, c, d) {
            for (var e = _.A(b), f = e.next(); !f.done; f = e.next()) EO(a.M, f.value);
            DV(a, b, c, d, a.M)
        };
    AV.prototype.forceExperiment = function(a) {
        a = Number(a);
        a > 0 && _.fh(gh).g(a)
    };
    var DV = function(a, b, c, d, e) {
            var f = f === void 0 ? window : f;
            b = _.A(b);
            for (var h = b.next(); !h.done; h = b.next()) {
                h = h.value;
                MO(a.I.M, h);
                var k = d[h.getDomId()];
                vr(k, c) && wr(h, f.document, k, c);
                KO(e, h)
            }
        },
        CQ = function(a, b, c, d) {
            if (typeof b !== "string" || typeof c !== "string") P(a.P, Wl("PubAdsService.setVideoContent", [b, c]));
            else {
                var e = _.dk(d, 21, !0);
                b = _.uq(e, 22, b);
                _.uq(b, 23, c);
                BQ(a, d)
            }
        },
        EQ = function(a, b) {
            if (!a.enabled) return null;
            var c, d;
            return {
                vid: (c = _.u(b, 22)) != null ? c : "",
                cmsid: (d = _.u(b, 23)) != null ? d : ""
            }
        },
        BQ = function(a, b) {
            _.Q(b, 21) && a.enabled && (a = iD(), _.ek(b, 29, _.Uc(a)))
        },
        BV = function(a, b) {
            var c = "";
            if (typeof a === "string") c = a, b = IR(b, c);
            else if (_.La(a) && a.nodeType == 1) {
                var d = a;
                c = d.id;
                b = IR(b, c)
            } else b = (_.F = [].concat(_.aj(b.V)), _.x(_.F, "find")).call(_.F, function(e) {
                return e.g === a
            });
            return {
                slotId: b,
                pm: d,
                qm: c
            }
        };
    var Hx = _.Zx(["https://pagead2.googlesyndication.com/pagead/js/rum_debug.js"]),
        Ix = _.Zx(["https://pagead2.googlesyndication.com/pagead/js/rum.js"]);
    var KV = $x(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]),
        LV = _.IA(function() {
            eD("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        NV = function(a, b) {
            var c = this;
            var d = d === void 0 ? _.x(String, "raw").call(String, KV) : d;
            this.M = a;
            this.o = d;
            this.g = new _.B.Map;
            this.V = new _.B.Set;
            b.l = function(e) {
                return MV(c, e)
            }
        };
    NV.prototype.defineSlot = function(a, b, c, d, e) {
        a = uo(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.g;
        a.yf || b.error(Wl("googletag.defineSlot", [c, d, e]));
        return null
    };
    var uo = function(a, b, c, d, e, f, h) {
        return typeof d === "string" && d.length > 0 && e && (f === void 0 || typeof f === "string") ? a.add(b, c, d, e, {
            Yb: f,
            pk: h === void 0 ? !1 : h
        }) : {}
    };
    NV.prototype.add = function(a, b, c, d, e, f) {
        var h = this;
        var k = e.Yb;
        var l = e.format === void 0 ? 0 : e.format;
        var m = e.pk === void 0 ? !1 : e.pk;
        e = e.Ab === void 0 ? !1 : e.Ab;
        f = f === void 0 ? _.ca : f;
        try {
            var n = new RegExp(this.o, "u");
            if (n.test("/1") && !n.test(c)) return b.error(bP(c)), {
                yf: !0
            }
        } catch (q) {}
        f = qr(l, f, e);
        f === null || _.I(cw) && _.x(aT, "includes").call(aT, l) || us(a, f, l);
        if (f) return Tq(b, f, l, c), {};
        m && LV();
        l = this.g.get(c) || Number(m);
        b = OV(this, a, b, c, l, d, k || "gpt_unit_" + c + "_" + l);
        a = b.Ja;
        var p = b.slotId;
        b = b.yf;
        if (!p) return {
            yf: b
        };
        this.g.set(c, l + 1);
        this.V.add(p);
        _.Jp(p, function() {
            return void h.V.delete(p)
        });
        mO(c);
        return {
            slotId: p,
            Ja: a
        }
    };
    var IR = function(a, b) {
            a = _.A(a.V);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        tv = function(a) {
            a = _.A(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.dispose()
        },
        OV = function(a, b, c, d, e, f, h) {
            var k = IR(a, h);
            if (k) return c.error(aP(h, d, k.getAdUnitPath())), {
                yf: !0
            };
            var l = new PQ;
            QQ(_.uq(l, 1, d), h);
            RQ(l, Ko(f));
            rQ(l);
            var m = new Cg(b, d, e, h);
            yQ(m, Oo(b, c, m));
            _.Jp(m, function() {
                var n = _.Qm(),
                    p = m.getDomId();
                delete n.Xa[p];
                n.l.delete(m);
                delete n.o[p];
                n = m.getAdUnitPath();
                n = Bl(n);
                var q;
                p = ((q = Pl.get(n)) != null ? q : 0) - 1;
                p <= 0 ? Pl.delete(n) : Pl.set(n, p);
                c.info(xP(m.toString()), m);
                (q = Rl.get(m)) && Sl.delete(q);
                Rl.delete(m)
            });
            c.info(QO(m.toString()), m);
            m.listen(xO, function(n) {
                n = n.detail.Wn;
                c.info(RO(m.getAdUnitPath()), m);
                tF(_.fh(El), "7", 9, Nr(a.M, m), 0, n)
            });
            m.listen(wO, function(n) {
                var p = n.detail;
                c.info(SO(m.getAdUnitPath()), m);
                var q;
                n = _.fh(El);
                var t = fv(l, 20);
                p = (q = p.getEscapedQemQueryId()) != null ? q : "";
                n.g && (_.ca.google_timing_params = _.ca.google_timing_params || {}, _.ca.google_timing_params["qqid." + t] = p)
            });
            m.listen(hv, function() {
                return void c.info(TO(m.getAdUnitPath()), m)
            });
            m.listen(jv, function() {
                return void c.info(UO(m.getAdUnitPath()), m)
            });
            return {
                Ja: l,
                slotId: m
            }
        },
        MV = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.aj(a.V)).some(function(d) {
                return c.test(Bl(d.getAdUnitPath()))
            })
        };
    (function(a, b) {
        var c = a != null ? a : {
            pvsid: Qj(window),
            La: "m202407250101",
            If: "202407250101",
            va: new Nx(3, "m202407250101", 0),
            gi: !0,
            Tg: 1
        };
        try {
            Ab(function(ka) {
                Gl(c, 1190, ka)
            });
            var d = Mo();
            bf(!_.fh(tm).g);
            _.x(Object, "assign").call(Object, um, d._vars_);
            d._vars_ = um;
            if (d.evalScripts) d.evalScripts();
            else {
                FN();
                try {
                    Kh()
                } catch (ka) {
                    Gl(c, 408, ka)
                }
                Lr();
                var e = new dR;
                try {
                    Gh(e.H), Sn(13, c), Sn(3, c)
                } catch (ka) {
                    Gl(c, 408, ka)
                }
                var f = Mx(c, e),
                    h = a != null ? a : Qx(f, c),
                    k = b != null ? b : new cR(h);
                xl(h);
                Xp("gpt_fifwin", function(ka) {
                    mp(ka, h)
                }, d.fifWin ? .01 : 0);
                var l = new DO,
                    m = new NV(l, e),
                    n = new tU(h),
                    p = _.vm(260),
                    q = new sO(h),
                    t = new sO(h),
                    w = new sO(h),
                    v = _.vm(150),
                    y = WC(),
                    z = (_.I(sJ) ? gw : ew)(h, window, m, _.Qm(), k, l, p, e, n, q, v),
                    G = _.vm(221),
                    C = new qT,
                    H = new jS,
                    L, S, M, da = (M = (L = z.rb) == null ? void 0 : (S = L.Xd) == null ? void 0 : S.Lb) != null ? M : new Cq,
                    Z = new AV(h, m, k, l, n, y, e, q, p, G, C, H, z, da);
                _.I(rK) && new JR(h, q, l, m);
                var U = _.Qm().g;
                Lv(h, k, Z, U, m, t, w, e, H, da);
                gp(h, d, k);
                window.setTimeout(function() {
                    for (var ka = window.document.scripts, Da = 0, ya = 0, Fa = 0; Fa < ka.length; Fa++) ka[Fa].src.match("securepubads.g.doubleclick.net/tag/js/gpt.js") ? Da++ : ka[Fa].src.match("www.googletagservices.com/tag/js/gpt.js") && ya++;
                    Da > 1 && ya === 0 || ya > 1 && Da === 0 ? P(k, XP()) : ya > 0 && Da > 0 && k.error(YP())
                }, 1E3);
                qv();
                if (_.I(rK) || _.fh(El).g) Fx(), Jx();
                jp(h);
                var pa;
                ((pa = z.rb) == null ? 0 : pa.Qd) && Et(h, Z, k, m, n, v, z.rb.Qd, z.rb.xb)
            }
        } catch (ka) {
            Gl(c, 106, ka)
        }
    })();
    _.PV = _.ca.requestAnimationFrame || _.ca.webkitRequestAnimationFrame;
    _.QV = !!_.PV && !/'iPhone'/.test(_.ca.navigator.userAgent);
    _.RV = function(a, b, c) {
        _.V.call(this);
        var d = this;
        this.B = a;
        this.l = b;
        this.g = c;
        this.U = null;
        _.Jp(this, function() {
            return d.U = null
        })
    };
    _.R(_.RV, _.V);
}).call(this, {});