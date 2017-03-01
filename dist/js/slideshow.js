/**
 * Created by Asimwe Apollo on 2/3/2017.
 */


(function (f, g, c, h, e, k, i) {/*! Jssor */
    new (function () {
    });
    var d = {
        Lc: function (a) {
            return a
        }, Cd: function (a) {
            return -a * (a - 2)
        }
    };
    var b = new function () {
        var j = this, xb = /\S+/g, F = 1, wb = 2, cb = 3, bb = 4, fb = 5, G, r = 0, l = 0, s = 0, Y = 0, A = 0, I = navigator, kb = I.appName, o = I.userAgent, p = parseFloat;

        function Fb() {
            if (!G) {
                G = {Zd: "ontouchstart"in f || "createTouch"in g};
                var a;
                if (I.pointerEnabled || (a = I.msPointerEnabled))G.hd = a ? "msTouchAction" : "touchAction"
            }
            return G
        }

        function v(i) {
            if (!r) {
                r = -1;
                if (kb == "Microsoft Internet Explorer" && !!f.attachEvent && !!f.ActiveXObject) {
                    var e = o.indexOf("MSIE");
                    r = F;
                    s = p(o.substring(e + 5, o.indexOf(";", e)));
                    /*@cc_on Y=@_jscript_version@*/
                    l = g.documentMode || s
                } else if (kb == "Netscape" && !!f.addEventListener) {
                    var d = o.indexOf("Firefox"), b = o.indexOf("Safari"), h = o.indexOf("Chrome"), c = o.indexOf("AppleWebKit");
                    if (d >= 0) {
                        r = wb;
                        l = p(o.substring(d + 8))
                    } else if (b >= 0) {
                        var j = o.substring(0, b).lastIndexOf("/");
                        r = h >= 0 ? bb : cb;
                        l = p(o.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);
                        if (a) {
                            r = F;
                            l = s = p(a[1])
                        }
                    }
                    if (c >= 0)A = p(o.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);
                    if (a) {
                        r = fb;
                        l = p(a[2])
                    }
                }
            }
            return i == r
        }

        function q() {
            return v(F)
        }

        function vb() {
            return q() && (l < 6 || g.compatMode == "BackCompat")
        }

        function ab() {
            return v(cb)
        }

        function eb() {
            return v(fb)
        }

        function rb() {
            return ab() && A > 534 && A < 535
        }

        function J() {
            v();
            return A > 537 || l > 42 || r == F && l >= 11
        }

        function tb() {
            return q() && l < 9
        }

        function sb(a) {
            var b, c;
            return function (f) {
                if (!b) {
                    b = e;
                    var d = a.substr(0, 1).toUpperCase() + a.substr(1);
                    n([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function (g, e) {
                        var b = a;
                        if (e)b = g + d;
                        if (f.style[b] != i)return c = b
                    })
                }
                return c
            }
        }

        function qb(b) {
            var a;
            return function (c) {
                a = a || sb(b)(c) || b;
                return a
            }
        }

        var K = qb("transform");

        function jb(a) {
            return {}.toString.call(a)
        }

        var gb = {};
        n(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
            gb["[object " + a + "]"] = a.toLowerCase()
        });
        function n(b, d) {
            var a, c;
            if (jb(b) == "[object Array]") {
                for (a = 0; a < b.length; a++)if (c = d(b[a], a, b))return c
            } else for (a in b)if (c = d(b[a], a, b))return c
        }

        function D(a) {
            return a == h ? String(a) : gb[jb(a)] || "object"
        }

        function hb(a) {
            for (var b in a)return e
        }

        function B(a) {
            try {
                return D(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {
            }
        }

        function u(a, b) {
            return {x: a, y: b}
        }

        function nb(b, a) {
            setTimeout(b, a || 0)
        }

        function H(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            n(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.index + b[0].length + 1, a.length - 1);
                    a = d + e
                }
            });
            a = c + (!a.indexOf(" ") ? "" : " ") + a;
            return a
        }

        function pb(b, a) {
            if (l < 9)b.style.filter = a
        }

        j.Yd = Fb;
        j.Zc = q;
        j.Vd = ab;
        j.Fe = J;
        sb("transform");
        j.kd = function () {
            return l
        };
        j.nd = nb;
        function V(a) {
            a.constructor === V.caller && a.Yc && a.Yc.apply(a, V.caller.arguments)
        }

        j.Yc = V;
        j.jb = function (a) {
            if (j.Oe(a))a = g.getElementById(a);
            return a
        };
        function t(a) {
            return a || f.event
        }

        j.wc = t;
        j.Pb = function (b) {
            b = t(b);
            var a = b.target || b.srcElement || g;
            if (a.nodeType == 3)a = j.zc(a);
            return a
        };
        j.Fc = function (a) {
            a = t(a);
            return {x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0}
        };
        function w(c, d, a) {
            if (a !== i)c.style[d] = a == i ? "" : a; else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && f.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, h);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function X(b, c, a, d) {
            if (a !== i) {
                if (a == h)a = ""; else d && (a += "px");
                w(b, c, a)
            } else return p(w(b, c))
        }

        function m(c, a) {
            var d = a ? X : w, b;
            if (a & 4)b = qb(c);
            return function (e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Ab(b) {
            if (q() && s < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? p(a[1]) / 100 : 1
            } else return p(b.style.opacity || "1")
        }

        function Cb(b, a, f) {
            if (q() && s < 9) {
                var h = b.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = c.round(100 * a), d = "";
                if (e < 100 || f)d = "alpha(opacity=" + e + ") ";
                var g = H(h, [i], d);
                pb(b, g)
            } else b.style.opacity = a == 1 ? "" : c.round(a * 100) / 100
        }

        var L = {X: ["rotate"], R: ["rotateX"], P: ["rotateY"], Ib: ["skewX"], wb: ["skewY"]};
        if (!J())L = C(L, {p: ["scaleX", 2], q: ["scaleY", 2], E: ["translateZ", 1]});
        function M(d, a) {
            var c = "";
            if (a) {
                if (q() && l && l < 10) {
                    delete a.R;
                    delete a.P;
                    delete a.E
                }
                b.f(a, function (d, b) {
                    var a = L[b];
                    if (a) {
                        var e = a[1] || 0;
                        if (N[b] != d)c += " " + a[0] + "(" + d + (["deg", "px", ""])[e] + ")"
                    }
                });
                if (J()) {
                    if (a.W || a.ab || a.E != i)c += " translate3d(" + (a.W || 0) + "px," + (a.ab || 0) + "px," + (a.E || 0) + "px)";
                    if (a.p == i)a.p = 1;
                    if (a.q == i)a.q = 1;
                    if (a.p != 1 || a.q != 1)c += " scale3d(" + a.p + ", " + a.q + ", 1)"
                }
            }
            d.style[K(d)] = c
        }

        j.Jc = m("transformOrigin", 4);
        j.Ie = m("backfaceVisibility", 4);
        j.He = m("transformStyle", 4);
        j.Se = m("perspective", 6);
        j.Ge = m("perspectiveOrigin", 4);
        j.Ee = function (a, b) {
            if (q() && s < 9 || s < 10 && vb())a.style.zoom = b == 1 ? "" : b; else {
                var c = K(a), f = "scale(" + b + ")", e = a.style[c], g = new RegExp(/[\s]*scale\(.*?\)/g), d = H(e, [g], f);
                a.style[c] = d
            }
        };
        j.Vb = function (b, a) {
            return function (c) {
                c = t(c);
                var e = c.type, d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !j.Ce(a, d)) && b(c)
            }
        };
        j.a = function (a, d, b, c) {
            a = j.jb(a);
            if (a.addEventListener) {
                d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
                a.addEventListener(d, b, c)
            } else if (a.attachEvent) {
                a.attachEvent("on" + d, b);
                c && a.setCapture && a.setCapture()
            }
        };
        j.D = function (a, c, d, b) {
            a = j.jb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        j.Ab = function (a) {
            a = t(a);
            a.preventDefault && a.preventDefault();
            a.cancel = e;
            a.returnValue = k
        };
        j.Ae = function (a) {
            a = t(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = e
        };
        j.G = function (d, c) {
            var a = [].slice.call(arguments, 2), b = function () {
                var b = a.concat([].slice.call(arguments, 0));
                return c.apply(d, b)
            };
            return b
        };
        j.ze = function (a, b) {
            if (b == i)return a.textContent || a.innerText;
            var c = g.createTextNode(b);
            j.Sb(a);
            a.appendChild(c)
        };
        j.Gb = function (d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };
        function ib(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : h; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (S(a, b) == c)return a;
                if (!e) {
                    var d = ib(a, c, e, b);
                    if (d)return d
                }
            }
        }

        j.B = ib;
        function Q(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : h; a; a = a.nextSibling)if (a.nodeType == 1) {
                S(a, b) == d && c.push(a);
                if (!f) {
                    var e = Q(a, d, f, b);
                    if (e.length)c = c.concat(e)
                }
            }
            return c
        }

        function db(a, c, d) {
            for (a = a ? a.firstChild : h; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.tagName == c)return a;
                if (!d) {
                    var b = db(a, c, d);
                    if (b)return b
                }
            }
        }

        j.Rd = db;
        j.vd = function (b, a) {
            return b.getElementsByTagName(a)
        };
        function C() {
            var e = arguments, d, c, b, a, g = 1 & e[0], f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)if (c = e[f])for (b in c) {
                a = c[b];
                if (a !== i) {
                    a = c[b];
                    var h = d[b];
                    d[b] = g && (B(h) || B(a)) ? C(g, {}, h, a) : a
                }
            }
            return d
        }

        j.Z = C;
        function W(f, g) {
            var d = {}, c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (B(a) && B(b)) {
                        a = W(a, b);
                        e = !hb(a)
                    }
                    !e && (d[c] = a)
                }
            }
            return d
        }

        j.Oc = function (a) {
            return D(a) == "function"
        };
        j.Oe = function (a) {
            return D(a) == "string"
        };
        j.Id = function (a) {
            return !isNaN(p(a)) && isFinite(a)
        };
        j.f = n;
        function P(a) {
            return g.createElement(a)
        }

        j.Fb = function () {
            return P("DIV")
        };
        j.Od = function () {
            return P("SPAN")
        };
        j.Kc = function () {
        };
        function T(b, c, a) {
            if (a == i)return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function S(a, b) {
            return T(a, b) || T(a, "data-" + b)
        }

        j.o = T;
        j.g = S;
        function y(b, a) {
            if (a == i)return b.className;
            b.className = a
        }

        j.Ic = y;
        function mb(b) {
            var a = {};
            n(b, function (b) {
                if (b != i)a[b] = b
            });
            return a
        }

        function ob(b, a) {
            return b.match(a || xb)
        }

        function O(b, a) {
            return mb(ob(b || "", a))
        }

        j.Qd = ob;
        function Z(b, c) {
            var a = "";
            n(c, function (c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function E(a, c, b) {
            y(a, Z(" ", C(W(O(y(a)), O(c)), O(b))))
        }

        j.zc = function (a) {
            return a.parentNode
        };
        j.L = function (a) {
            j.U(a, "none")
        };
        j.J = function (a, b) {
            j.U(a, b ? "none" : "")
        };
        j.Ed = function (b, a) {
            b.removeAttribute(a)
        };
        j.Ld = function () {
            return q() && l < 10
        };
        j.Md = function (d, a) {
            if (a)d.style.clip = "rect(" + c.round(a.j || a.s || 0) + "px " + c.round(a.v) + "px " + c.round(a.z) + "px " + c.round(a.k || a.n || 0) + "px)"; else if (a !== i) {
                var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = H(g, f, "");
                b.Jb(d, e)
            }
        };
        j.H = function () {
            return +new Date
        };
        j.I = function (b, a) {
            b.appendChild(a)
        };
        j.Cb = function (b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        j.yb = function (b, a) {
            a = a || b.parentNode;
            a && a.removeChild(b)
        };
        j.sd = function (a, b) {
            n(a, function (a) {
                j.yb(a, b)
            })
        };
        j.Sb = function (a) {
            j.sd(j.Gb(a, e), a)
        };
        j.td = function (a, b) {
            var c = j.zc(a);
            b & 1 && j.C(a, (j.l(c) - j.l(a)) / 2);
            b & 2 && j.F(a, (j.m(c) - j.m(a)) / 2)
        };
        j.Be = function (b, a) {
            return parseInt(b, a || 10)
        };
        j.Te = p;
        j.Ce = function (b, a) {
            var c = g.body;
            while (a && b !== a && c !== a)try {
                a = a.parentNode
            } catch (d) {
                return k
            }
            return b === a
        };
        function U(d, c, b) {
            var a = d.cloneNode(!c);
            !b && j.Ed(a, "id");
            return a
        }

        j.sb = U;
        j.pb = function (d, f) {
            var a = new Image;

            function b(e, d) {
                j.D(a, "load", b);
                j.D(a, "abort", c);
                j.D(a, "error", c);
                f && f(a, d)
            }

            function c(a) {
                b(a, e)
            }

            if (eb() && l < 11.6 || !d)b(!d); else {
                j.a(a, "load", b);
                j.a(a, "abort", c);
                j.a(a, "error", c);
                a.src = d
            }
        };
        j.Hd = function (d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src)a = b;
                !c && e && e(a)
            }

            n(d, function (a) {
                j.pb(a.src, b)
            });
            b()
        };
        j.Dd = function (a, g, i, h) {
            if (h)a = U(a);
            var c = Q(a, g);
            if (!c.length)c = b.vd(a, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f], e = U(i);
                y(e, y(d));
                b.Jb(e, d.style.cssText);
                b.Cb(e, d);
                b.yb(d)
            }
            return a
        };
        function Db(a) {
            var l = this, p = "", r = ["av", "pv", "ds", "dn"], e = [], q, k = 0, f = 0, d = 0;

            function h() {
                E(a, q, e[d || k || f & 2 || f]);
                b.K(a, "pointer-events", d ? "none" : "")
            }

            function c() {
                k = 0;
                h();
                j.D(g, "mouseup", c);
                j.D(g, "touchend", c);
                j.D(g, "touchcancel", c)
            }

            function o(a) {
                if (d)j.Ab(a); else {
                    k = 4;
                    h();
                    j.a(g, "mouseup", c);
                    j.a(g, "touchend", c);
                    j.a(g, "touchcancel", c)
                }
            }

            l.Nd = function (a) {
                if (a === i)return f;
                f = a & 2 || a & 1;
                h()
            };
            l.xb = function (a) {
                if (a === i)return !d;
                d = a ? 0 : 3;
                h()
            };
            l.cb = a = j.jb(a);
            var m = b.Qd(y(a));
            if (m)p = m.shift();
            n(r, function (a) {
                e.push(p + a)
            });
            q = Z(" ", e);
            e.unshift("");
            j.a(a, "mousedown", o);
            j.a(a, "touchstart", o)
        }

        j.cc = function (a) {
            return new Db(a)
        };
        j.K = w;
        j.Eb = m("overflow");
        j.F = m("top", 2);
        j.C = m("left", 2);
        j.l = m("width", 2);
        j.m = m("height", 2);
        j.bc = m("marginLeft", 2);
        j.fc = m("marginTop", 2);
        j.A = m("position");
        j.U = m("display");
        j.u = m("zIndex", 1);
        j.ac = function (b, a, c) {
            if (a != i)Cb(b, a, c); else return Ab(b)
        };
        j.Jb = function (a, b) {
            if (b != i)a.style.cssText = b; else return a.style.cssText
        };
        j.xe = function (b, a) {
            if (a === i) {
                a = w(b, "backgroundImage") || "";
                var c = /\burl\s*\(\s*["']?([^"'\r\n,]+)["']?\s*\)/gi.exec(a) || [];
                return c[1]
            }
            w(b, "backgroundImage", a ? "url('" + a + "')" : "")
        };
        var R = {qb: j.ac, j: j.F, k: j.C, Lb: j.l, vb: j.m, ob: j.A, cf: j.U, nb: j.u};

        function x(f, l) {
            var e = tb(), b = J(), d = rb(), g = K(f);

            function k(b, d, a) {
                var e = b.fb(u(-d / 2, -a / 2)), f = b.fb(u(d / 2, -a / 2)), g = b.fb(u(d / 2, a / 2)), h = b.fb(u(-d / 2, a / 2));
                b.fb(u(300, 300));
                return u(c.min(e.x, f.x, g.x, h.x) + d / 2, c.min(e.y, f.y, g.y, h.y) + a / 2)
            }

            function a(d, a) {
                a = a || {};
                var n = a.E || 0, p = (a.R || 0) % 360, q = (a.P || 0) % 360, u = (a.X || 0) % 360, l = a.p, m = a.q, f = a.bf;
                if (l == i)l = 1;
                if (m == i)m = 1;
                if (f == i)f = 1;
                if (e) {
                    n = 0;
                    p = 0;
                    q = 0;
                    f = 0
                }
                var c = new zb(a.W, a.ab, n);
                c.R(p);
                c.P(q);
                c.qd(u);
                c.od(a.Ib, a.wb);
                c.Zb(l, m, f);
                if (b) {
                    c.mb(a.n, a.s);
                    d.style[g] = c.Bd()
                } else if (!Y || Y < 9) {
                    var o = "", h = {x: 0, y: 0};
                    if (a.M)h = k(c, a.M, a.bb);
                    j.fc(d, h.y);
                    j.bc(d, h.x);
                    o = c.Ad();
                    var s = d.style.filter, t = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), r = H(s, [t], o);
                    pb(d, r)
                }
            }

            x = function (e, c) {
                c = c || {};
                var g = c.n, k = c.s, f;
                n(R, function (a, b) {
                    f = c[b];
                    f !== i && a(e, f)
                });
                j.Md(e, c.c);
                if (!b) {
                    g != i && j.C(e, (c.cd || 0) + g);
                    k != i && j.F(e, (c.gd || 0) + k)
                }
                if (c.Jd)if (d)nb(j.G(h, M, e, c)); else a(e, c)
            };
            j.lb = M;
            if (d)j.lb = x;
            if (e)j.lb = a; else if (!b)a = M;
            j.N = x;
            x(f, l)
        }

        j.lb = x;
        j.N = x;
        function zb(j, k, o) {
            var d = this, b = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, j || 0, k || 0, o || 0, 1], i = c.sin, g = c.cos, l = c.tan;

            function f(a) {
                return a * c.PI / 180
            }

            function n(a, b) {
                return {x: a, y: b}
            }

            function m(c, e, l, m, o, r, t, u, w, z, A, C, E, b, f, k, a, g, i, n, p, q, s, v, x, y, B, D, F, d, h, j) {
                return [c * a + e * p + l * x + m * F, c * g + e * q + l * y + m * d, c * i + e * s + l * B + m * h, c * n + e * v + l * D + m * j, o * a + r * p + t * x + u * F, o * g + r * q + t * y + u * d, o * i + r * s + t * B + u * h, o * n + r * v + t * D + u * j, w * a + z * p + A * x + C * F, w * g + z * q + A * y + C * d, w * i + z * s + A * B + C * h, w * n + z * v + A * D + C * j, E * a + b * p + f * x + k * F, E * g + b * q + f * y + k * d, E * i + b * s + f * B + k * h, E * n + b * v + f * D + k * j]
            }

            function e(c, a) {
                return m.apply(h, (a || b).concat(c))
            }

            d.Zb = function (a, c, d) {
                if (a != 1 || c != 1 || d != 1)b = e([a, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1])
            };
            d.mb = function (a, c, d) {
                b[12] += a || 0;
                b[13] += c || 0;
                b[14] += d || 0
            };
            d.R = function (c) {
                if (c) {
                    a = f(c);
                    var d = g(a), h = i(a);
                    b = e([1, 0, 0, 0, 0, d, h, 0, 0, -h, d, 0, 0, 0, 0, 1])
                }
            };
            d.P = function (c) {
                if (c) {
                    a = f(c);
                    var d = g(a), h = i(a);
                    b = e([d, 0, -h, 0, 0, 1, 0, 0, h, 0, d, 0, 0, 0, 0, 1])
                }
            };
            d.qd = function (c) {
                if (c) {
                    a = f(c);
                    var d = g(a), h = i(a);
                    b = e([d, h, 0, 0, -h, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.od = function (a, c) {
                if (a || c) {
                    j = f(a);
                    k = f(c);
                    b = e([1, l(k), 0, 0, l(j), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                }
            };
            d.fb = function (c) {
                var a = e(b, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c.x, c.y, 0, 1]);
                return n(a[12], a[13])
            };
            d.Bd = function () {
                return "matrix3d(" + b.join(",") + ")"
            };
            d.Ad = function () {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + b[0] + ", M12=" + b[4] + ", M21=" + b[1] + ", M22=" + b[5] + ", SizingMethod='auto expand')"
            }
        }

        new function () {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)for (var k = f[c] = [], b = 0; b < h; b++) {
                    for (var e = 0, a = 0; a < j; a++)e += d[c][a] * g[a][b];
                    k[b] = e
                }
                return f
            }

            a.p = function (b, c) {
                return a.ld(b, c, 0)
            };
            a.q = function (b, c) {
                return a.ld(b, 0, c)
            };
            a.ld = function (a, c, d) {
                return b(a, [[c, 0], [0, d]])
            };
            a.fb = function (d, c) {
                var a = b(d, [[c.x], [c.y]]);
                return u(a[0][0], a[1][0])
            }
        };
        var N = {cd: 0, gd: 0, n: 0, s: 0, eb: 1, p: 1, q: 1, X: 0, R: 0, P: 0, W: 0, ab: 0, E: 0, Ib: 0, wb: 0};
        j.Kd = function (c, d) {
            var a = c || {};
            if (c)if (b.Oc(c))a = {O: a}; else if (b.Oc(c.c))a.c = {O: c.c};
            a.O = a.O || d;
            if (a.c)a.c.O = a.c.O || d;
            return a
        };
        j.Pd = function (l, m, x, q, z, A, n) {
            var a = m;
            if (l) {
                a = {};
                for (var g in m) {
                    var B = A[g] || 1, w = z[g] || [0, 1], f = (x - w[0]) / w[1];
                    f = c.min(c.max(f, 0), 1);
                    f = f * B;
                    var u = c.floor(f);
                    if (f != u)f -= u;
                    var j = q.O || d.Lc, k, C = l[g], o = m[g];
                    if (b.Id(o)) {
                        j = q[g] || j;
                        var y = j(f);
                        k = C + o * y
                    } else {
                        k = b.Z({zb: {}}, l[g]);
                        var v = q[g] || {};
                        b.f(o.zb || o, function (d, a) {
                            j = v[a] || v.O || j;
                            var c = j(f), b = d * c;
                            k.zb[a] = b;
                            k[a] += b
                        })
                    }
                    a[g] = k
                }
                var t = b.f(m, function (b, a) {
                    return N[a] != i
                });
                t && b.f(N, function (c, b) {
                    if (a[b] == i && l[b] !== i)a[b] = l[b]
                });
                if (t) {
                    if (a.eb)a.p = a.q = a.eb;
                    a.M = n.M;
                    a.bb = n.bb;
                    a.Jd = e
                }
            }
            if (m.c && n.mb) {
                var p = a.c.zb, s = (p.j || 0) + (p.z || 0), r = (p.k || 0) + (p.v || 0);
                a.k = (a.k || 0) + r;
                a.j = (a.j || 0) + s;
                a.c.k -= r;
                a.c.v -= r;
                a.c.j -= s;
                a.c.z -= s
            }
            if (a.c && b.Ld() && !a.c.j && !a.c.k && !a.c.s && !a.c.n && a.c.v == n.M && a.c.z == n.bb)a.c = h;
            return a
        }
    };

    function m() {
        var a = this, d = [];

        function i(a, b) {
            d.push({Wb: a, Ub: b})
        }

        function h(a, c) {
            b.f(d, function (b, e) {
                b.Wb == a && b.Ub === c && d.splice(e, 1)
            })
        }

        a.hb = a.addEventListener = i;
        a.removeEventListener = h;
        a.i = function (a) {
            var c = [].slice.call(arguments, 1);
            b.f(d, function (b) {
                b.Wb == a && b.Ub.apply(f, c)
            })
        }
    }

    var l = function (z, E, g, K, N, M) {
        z = z || 0;
        var a = this, q, o, p, u, B = 0, H, I, G, C, y = 0, j = 0, m = 0, F, l, i, d, n, D, w = [], x;

        function P(a) {
            i += a;
            d += a;
            l += a;
            j += a;
            m += a;
            y += a
        }

        function t(p) {
            var f = p;
            if (n)if (!D && (f >= d || f < i) || D && f >= n)f = ((f - i) % n + n) % n + i;
            if (!F || u || j != f) {
                var h = c.min(f, d);
                h = c.max(h, i);
                if (!F || u || h != m) {
                    if (M) {
                        var k = (h - l) / (E || 1);
                        if (g.ve)k = 1 - k;
                        var o = b.Pd(N, M, k, H, G, I, g);
                        if (x)b.f(o, function (b, a) {
                            x[a] && x[a](K, b)
                        }); else b.N(K, o)
                    }
                    a.dc(m - l, h - l);
                    var r = m, q = m = h;
                    b.f(w, function (b, c) {
                        var a = f <= j ? w[w.length - c - 1] : b;
                        a.Q(m - y)
                    });
                    j = f;
                    F = e;
                    a.Mb(r, q)
                }
            }
        }

        function A(a, b, e) {
            b && a.Qb(d);
            if (!e) {
                i = c.min(i, a.Qc() + y);
                d = c.max(d, a.Nb() + y)
            }
            w.push(a)
        }

        var r = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.msRequestAnimationFrame;
        if (b.Vd() && b.kd() < 7)r = h;
        r = r || function (a) {
                b.nd(a, g.xc)
            };
        function J() {
            if (q) {
                var d = b.H(), e = c.min(d - B, g.Cc), a = j + e * p;
                B = d;
                if (a * p >= o * p)a = o;
                t(a);
                if (!u && a * p >= o * p)L(C); else r(J)
            }
        }

        function s(f, g, h) {
            if (!q) {
                q = e;
                u = h;
                C = g;
                f = c.max(f, i);
                f = c.min(f, d);
                o = f;
                p = o < j ? -1 : 1;
                a.Dc();
                B = b.H();
                r(J)
            }
        }

        function L(b) {
            if (q) {
                u = q = C = k;
                a.Gc();
                b && b()
            }
        }

        a.Ac = function (a, b, c) {
            s(a ? j + a : d, b, c)
        };
        a.Xc = s;
        a.db = L;
        a.ae = function (a) {
            s(a)
        };
        a.T = function () {
            return j
        };
        a.ad = function () {
            return o
        };
        a.ib = function () {
            return m
        };
        a.Q = t;
        a.mb = function (a) {
            t(j + a)
        };
        a.Uc = function () {
            return q
        };
        a.Td = function (a) {
            n = a
        };
        a.Qb = P;
        a.Sc = function (a, b) {
            A(a, 0, b)
        };
        a.Tb = function (a) {
            A(a, 1)
        };
        a.Qc = function () {
            return i
        };
        a.Nb = function () {
            return d
        };
        a.Mb = a.Dc = a.Gc = a.dc = b.Kc;
        a.Xb = b.H();
        g = b.Z({xc: 16, Cc: 50}, g);
        n = g.Yb;
        D = g.pd;
        x = g.ud;
        i = l = z;
        d = z + E;
        I = g.xd || {};
        G = g.re || {};
        H = b.Kd(g.rb)
    };
    new (function () {
    });
    var j = function (q, fc) {
        var o = this;

        function Bc() {
            var a = this;
            l.call(a, -1e8, 2e8);
            a.be = function () {
                var b = a.ib(), d = c.floor(b), f = t(d), e = b - c.floor(b);
                return {Y: f, ce: d, ob: e}
            };
            a.Mb = function (b, a) {
                var d = c.floor(a);
                if (d != a && a > b)d++;
                Tb(d, e);
                o.i(j.de, t(a), t(b), a, b)
            }
        }

        function Ac() {
            var a = this;
            l.call(a, 0, 0, {Yb: r});
            b.f(C, function (b) {
                D & 1 && b.Td(r);
                a.Tb(b);
                b.Qb(kb / bc)
            })
        }

        function zc() {
            var a = this, b = Ub.cb;
            l.call(a, -1, 2, {rb: d.Lc, ud: {ob: Zb}, Yb: r}, b, {ob: 1}, {ob: -2});
            a.Rb = b
        }

        function mc(n, m) {
            var b = this, d, f, g, i, c;
            l.call(b, -1e8, 2e8, {Cc: 100});
            b.Dc = function () {
                O = e;
                R = h;
                o.i(j.ee, t(w.T()), w.T())
            };
            b.Gc = function () {
                O = k;
                i = k;
                var a = w.be();
                o.i(j.fe, t(w.T()), w.T());
                !a.ob && Dc(a.ce, s)
            };
            b.Mb = function (j, h) {
                var b;
                if (i)b = c; else {
                    b = f;
                    if (g) {
                        var e = h / g;
                        b = a.ge(e) * (f - d) + d
                    }
                }
                w.Q(b)
            };
            b.Kb = function (a, e, c, h) {
                d = a;
                f = e;
                g = c;
                w.Q(a);
                b.Q(0);
                b.Xc(c, h)
            };
            b.he = function (a) {
                i = e;
                c = a;
                b.Ac(a, h, e)
            };
            b.ie = function (a) {
                c = a
            };
            w = new Bc;
            w.Sc(n);
            w.Sc(m)
        }

        function oc() {
            var c = this, a = Xb();
            b.u(a, 0);
            b.K(a, "pointerEvents", "none");
            c.cb = a;
            c.Hb = function () {
                b.L(a);
                b.Sb(a)
            }
        }

        function xc(n, f) {
            var d = this, q, N, v, i, y = [], x, B, W, H, S, F, g, w, p;
            l.call(d, -u, u + 1, {});
            function E(a) {
                q && q.bd();
                T(n, a, 0);
                F = e;
                q = new I.S(n, I, b.Te(b.g(n, "idle")) || lc, !L);
                q.Q(0)
            }

            function Z() {
                q.Xb < I.Xb && E()
            }

            function O(p, r, n) {
                if (!H) {
                    H = e;
                    if (i && n) {
                        var g = n.width, c = n.height, m = g, l = c;
                        if (g && c && a.tb) {
                            if (a.tb & 3 && (!(a.tb & 4) || g > K || c > J)) {
                                var h = k, q = K / J * c / g;
                                if (a.tb & 1)h = q > 1; else if (a.tb & 2)h = q < 1;
                                m = h ? g * J / c : K;
                                l = h ? J : c * K / g
                            }
                            b.l(i, m);
                            b.m(i, l);
                            b.F(i, (J - l) / 2);
                            b.C(i, (K - m) / 2)
                        }
                        b.A(i, "absolute");
                        o.i(j.ke, f)
                    }
                }
                b.L(r);
                p && p(d)
            }

            function Y(b, c, e, g) {
                if (g == R && s == f && L)if (!Cc) {
                    var a = t(b);
                    A.se(a, f, c, d, e);
                    c.le();
                    U.Qb(a - U.Qc() - 1);
                    U.Q(a);
                    z.Kb(b, b, 0)
                }
            }

            function bb(b) {
                if (b == R && s == f) {
                    if (!g) {
                        var a = h;
                        if (A)if (A.Y == f)a = A.Xd(); else A.Hb();
                        Z();
                        g = new vc(n, f, a, q);
                        g.ed(p)
                    }
                    !g.Uc() && g.ec()
                }
            }

            function G(e, i, l) {
                if (e == f) {
                    if (e != i)C[i] && C[i].fd(); else!l && g && g.ne();
                    p && p.xb();
                    var m = R = b.H();
                    d.pb(b.G(h, bb, m))
                } else {
                    var k = c.min(f, e), j = c.max(f, e), o = c.min(j - k, k + r - j), n = u + a.oe - 1;
                    (!S || o <= n) && d.pb()
                }
            }

            function db() {
                if (s == f && g) {
                    g.db();
                    p && p.pe();
                    p && p.qe();
                    g.Hc()
                }
            }

            function eb() {
                s == f && g && g.db()
            }

            function ab(a) {
                !P && o.i(j.rd, f, a)
            }

            function Q() {
                p = w.pInstance;
                g && g.ed(p)
            }

            d.pb = function (c, a) {
                a = a || v;
                if (y.length && !H) {
                    b.J(a);
                    if (!W) {
                        W = e;
                        o.i(j.me, f);
                        b.f(y, function (a) {
                            if (!b.o(a, "src")) {
                                a.src = b.g(a, "src2") || "";
                                b.U(a, a["display-origin"])
                            }
                        })
                    }
                    b.Hd(y, i, b.G(h, O, c, a))
                } else O(c, a)
            };
            d.je = function () {
                var j = f;
                if (a.oc < 0)j -= r;
                var e = j + a.oc * tc;
                if (D & 2)e = t(e);
                if (!(D & 1) && !ib)e = c.max(0, c.min(e, r - u));
                if (e != f) {
                    if (A) {
                        var g = A.Qe(r);
                        if (g) {
                            var k = R = b.H(), i = C[t(e)];
                            return i.pb(b.G(h, Y, e, i, g, k), v)
                        }
                    }
                    cb(e)
                } else if (a.ub) {
                    d.fd();
                    G(f, f)
                }
            };
            d.nc = function () {
                G(f, f, e)
            };
            d.fd = function () {
                p && p.pe();
                p && p.qe();
                d.id();
                g && g.Wd();
                g = h;
                E()
            };
            d.le = function () {
                b.L(n)
            };
            d.id = function () {
                b.J(n)
            };
            d.Re = function () {
                p && p.xb()
            };
            function T(a, c, d) {
                if (b.o(a, "jssor-slider"))return;
                if (!F) {
                    if (a.tagName == "IMG") {
                        y.push(a);
                        if (!b.o(a, "src")) {
                            S = e;
                            a["display-origin"] = b.U(a);
                            b.L(a)
                        }
                    }
                    var f = b.xe(a);
                    if (f) {
                        var g = new Image;
                        b.g(g, "src2", f);
                        y.push(g)
                    }
                    if (d) {
                        b.u(a, (b.u(a) || 0) + 1);
                        b.fc(a, b.fc(a) || 0);
                        b.bc(a, b.bc(a) || 0);
                        b.lb(a, {E: 0})
                    }
                }
                var h = b.Gb(a);
                b.f(h, function (f) {
                    var h = f.tagName, j = b.g(f, "u");
                    if (j == "player" && !w) {
                        w = f;
                        if (w.pInstance)Q(); else b.a(w, "dataavailable", Q)
                    }
                    if (j == "caption") {
                        if (c) {
                            b.Jc(f, b.g(f, "to"));
                            b.Ie(f, b.g(f, "bf"));
                            b.g(f, "3d") && b.He(f, "preserve-3d")
                        } else if (!b.Zc()) {
                            var g = b.sb(f, k, e);
                            b.Cb(g, f, a);
                            b.yb(f, a);
                            f = g;
                            c = e
                        }
                    } else if (!F && !d && !i) {
                        if (h == "A") {
                            if (b.g(f, "u") == "image")i = b.Rd(f, "IMG"); else i = b.B(f, "image", e);
                            if (i) {
                                x = f;
                                b.U(x, "block");
                                b.N(x, V);
                                B = b.sb(x, e);
                                b.A(x, "relative");
                                b.ac(B, 0);
                                b.K(B, "backgroundColor", "#000")
                            }
                        } else if (h == "IMG" && b.g(f, "u") == "image")i = f;
                        if (i) {
                            i.border = 0;
                            b.N(i, V)
                        }
                    }
                    T(f, c, d + 1)
                })
            }

            d.dc = function (c, b) {
                var a = u - b;
                Zb(N, a)
            };
            d.Y = f;
            m.call(d);
            b.Se(n, b.g(n, "p"));
            b.Ge(n, b.g(n, "po"));
            var M = b.B(n, "thumb", e);
            if (M) {
                b.sb(M);
                b.L(M)
            }
            b.J(n);
            v = b.sb(gb);
            b.u(v, 1e3);
            b.a(n, "click", ab);
            E(e);
            d.Ud = i;
            d.yc = B;
            d.Rb = N = n;
            b.I(N, v);
            o.hb(203, G);
            o.hb(28, eb);
            o.hb(24, db)
        }

        function vc(y, f, p, q) {
            var a = this, m = 0, u = 0, g, h, d, c, i, t, r, n = C[f];
            l.call(a, 0, 0);
            function v() {
                b.Sb(N);
                cc && i && n.yc && b.I(N, n.yc);
                b.J(N, !i && n.Ud)
            }

            function w() {
                a.ec()
            }

            function x(b) {
                r = b;
                a.db();
                a.ec()
            }

            a.ec = function () {
                var b = a.ib();
                if (!B && !O && !r && s == f) {
                    if (!b) {
                        if (g && !i) {
                            i = e;
                            a.Hc(e);
                            o.i(j.Ne, f, m, u, g, c)
                        }
                        v()
                    }
                    var k, p = j.Bc;
                    if (b != c)if (b == d)k = c; else if (b == h)k = d; else if (!b)k = h; else k = a.ad();
                    o.i(p, f, b, m, h, d, c);
                    var l = L && (!E || F);
                    if (b == c)(d != c && !(E & 12) || l) && n.je(); else(l || b != d) && a.Xc(k, w)
                }
            };
            a.ne = function () {
                d == c && d == a.ib() && a.Q(h)
            };
            a.Wd = function () {
                A && A.Y == f && A.Hb();
                var b = a.ib();
                b < c && o.i(j.Bc, f, -b - 1, m, h, d, c)
            };
            a.Hc = function (a) {
                p && b.Eb(lb, a && p.md.Ze ? "" : "hidden")
            };
            a.dc = function (b, a) {
                if (i && a >= g) {
                    i = k;
                    v();
                    n.id();
                    A.Hb();
                    o.i(j.Me, f, m, u, g, c)
                }
                o.i(j.Le, f, a, m, h, d, c)
            };
            a.ed = function (a) {
                if (a && !t) {
                    t = a;
                    a.hb($JssorPlayer$.ue, x)
                }
            };
            p && a.Tb(p);
            g = a.Nb();
            a.Tb(q);
            h = g + q.vc;
            d = g + q.Ec;
            c = a.Nb()
        }

        function Kb(a, c, d) {
            b.C(a, c);
            b.F(a, d)
        }

        function Zb(c, b) {
            var a = x > 0 ? x : fb, d = zb * b * (a & 1), e = Ab * b * (a >> 1 & 1);
            Kb(c, d, e)
        }

        function Pb() {
            qb = O;
            Ib = z.ad();
            G = w.T()
        }

        function gc() {
            Pb();
            if (B || !F && E & 12) {
                z.db();
                o.i(j.Ke)
            }
        }

        function ec(f) {
            if (!B && (F || !(E & 12)) && !z.Uc()) {
                var d = w.T(), b = c.ceil(G);
                if (f && c.abs(H) >= a.Vc) {
                    b = c.ceil(d);
                    b += jb
                }
                if (!(D & 1))b = c.min(r - u, c.max(b, 0));
                var e = c.abs(b - d);
                e = 1 - c.pow(1 - e, 5);
                if (!P && qb)z.ae(Ib); else if (d == b) {
                    tb.Re();
                    tb.nc()
                } else z.Kb(d, b, e * Vb)
            }
        }

        function Hb(a) {
            !b.g(b.Pb(a), "nodrag") && b.Ab(a)
        }

        function rc(a) {
            Yb(a, 1)
        }

        function Yb(a, c) {
            a = b.wc(a);
            var i = b.Pb(a);
            if (!M && !b.g(i, "nodrag") && sc() && (!c || a.touches.length == 1)) {
                B = e;
                yb = k;
                R = h;
                b.a(g, c ? "touchmove" : "mousemove", Bb);
                b.H();
                P = 0;
                gc();
                if (!qb)x = 0;
                if (c) {
                    var f = a.touches[0];
                    ub = f.clientX;
                    vb = f.clientY
                } else {
                    var d = b.Fc(a);
                    ub = d.x;
                    vb = d.y
                }
                H = 0;
                hb = 0;
                jb = 0;
                o.i(j.Je, t(G), G, a)
            }
        }

        function Bb(d) {
            if (B) {
                d = b.wc(d);
                var f;
                if (d.type != "mousemove") {
                    var l = d.touches[0];
                    f = {x: l.clientX, y: l.clientY}
                } else f = b.Fc(d);
                if (f) {
                    var j = f.x - ub, k = f.y - vb;
                    if (c.floor(G) != G)x = x || fb & M;
                    if ((j || k) && !x) {
                        if (M == 3)if (c.abs(k) > c.abs(j))x = 2; else x = 1; else x = M;
                        if (ob && x == 1 && c.abs(k) - c.abs(j) > 3)yb = e
                    }
                    if (x) {
                        var a = k, i = Ab;
                        if (x == 1) {
                            a = j;
                            i = zb
                        }
                        if (!(D & 1)) {
                            if (a > 0) {
                                var g = i * s, h = a - g;
                                if (h > 0)a = g + c.sqrt(h) * 5
                            }
                            if (a < 0) {
                                var g = i * (r - u - s), h = -a - g;
                                if (h > 0)a = -g - c.sqrt(h) * 5
                            }
                        }
                        if (H - hb < -2)jb = 0; else if (H - hb > 2)jb = -1;
                        hb = H;
                        H = a;
                        sb = G - H / i / (Y || 1);
                        if (H && x && !yb) {
                            b.Ab(d);
                            if (!O)z.he(sb); else z.ie(sb)
                        }
                    }
                }
            }
        }

        function bb() {
            qc();
            if (B) {
                B = k;
                b.H();
                b.D(g, "mousemove", Bb);
                b.D(g, "touchmove", Bb);
                P = H;
                z.db();
                var a = w.T();
                o.i(j.De, t(a), a, t(G), G);
                E & 12 && Pb();
                ec(e)
            }
        }

        function jc(c) {
            if (P) {
                b.Ae(c);
                var a = b.Pb(c);
                while (a && v !== a) {
                    a.tagName == "A" && b.Ab(c);
                    try {
                        a = a.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function Jb(a) {
            C[s];
            s = t(a);
            tb = C[s];
            Tb(a);
            return s
        }

        function Dc(a, b) {
            x = 0;
            Jb(a);
            o.i(j.Sd, t(a), b)
        }

        function Tb(a, c) {
            wb = a;
            b.f(S, function (b) {
                b.mc(t(a), a, c)
            })
        }

        function sc() {
            var b = j.Nc || 0, a = X;
            if (ob)a & 1 && (a &= 1);
            j.Nc |= a;
            return M = a & ~b
        }

        function qc() {
            if (M) {
                j.Nc &= ~X;
                M = 0
            }
        }

        function Xb() {
            var a = b.Fb();
            b.N(a, V);
            b.A(a, "absolute");
            return a
        }

        function t(a) {
            return (a % r + r) % r
        }

        function kc(b, d) {
            if (d)if (!D) {
                b = c.min(c.max(b + wb, 0), r - u);
                d = k
            } else if (D & 2) {
                b = t(b + wb);
                d = k
            }
            cb(b, a.Bb, d)
        }

        function xb() {
            b.f(S, function (a) {
                a.qc(a.Db.Ye <= F)
            })
        }

        function hc() {
            if (!F) {
                F = 1;
                xb();
                if (!B) {
                    E & 12 && ec();
                    E & 3 && C[s].nc()
                }
            }
        }

        function Ec() {
            if (F) {
                F = 0;
                xb();
                B || !(E & 12) || gc()
            }
        }

        function ic() {
            V = {Lb: K, vb: J, j: 0, k: 0};
            b.f(T, function (a) {
                b.N(a, V);
                b.A(a, "absolute");
                b.Eb(a, "hidden");
                b.L(a)
            });
            b.N(gb, V)
        }

        function ab(b, a) {
            cb(b, a, e)
        }

        function cb(g, f, l) {
            if (Rb && (!B && (F || !(E & 12)) || a.Tc)) {
                O = e;
                B = k;
                z.db();
                if (f == i)f = Vb;
                var d = Cb.ib(), b = g;
                if (l) {
                    b = d + g;
                    if (g > 0)b = c.ceil(b); else b = c.floor(b)
                }
                if (D & 2)b = t(b);
                if (!(D & 1))b = c.max(0, c.min(b, r - u));
                var j = (b - d) % r;
                b = d + j;
                var h = d == b ? 0 : f * c.abs(j);
                h = c.min(h, f * u * 1.5);
                z.Kb(d, b, h || 1)
            }
        }

        o.Ac = function () {
            if (!L) {
                L = e;
                C[s] && C[s].nc()
            }
        };
        function W() {
            return b.l(y || q)
        }

        function nb() {
            return b.m(y || q)
        }

        o.M = W;
        o.bb = nb;
        function Eb(c, d) {
            if (c == i)return b.l(q);
            if (!y) {
                var a = b.Fb(g);
                b.Ic(a, b.Ic(q));
                b.Jb(a, b.Jb(q));
                b.U(a, "block");
                b.A(a, "relative");
                b.F(a, 0);
                b.C(a, 0);
                b.Eb(a, "visible");
                y = b.Fb(g);
                b.A(y, "absolute");
                b.F(y, 0);
                b.C(y, 0);
                b.l(y, b.l(q));
                b.m(y, b.m(q));
                b.Jc(y, "0 0");
                b.I(y, a);
                var h = b.Gb(q);
                b.I(q, y);
                b.K(q, "backgroundImage", "");
                b.f(h, function (c) {
                    b.I(b.g(c, "noscale") ? q : a, c);
                    b.g(c, "autocenter") && Lb.push(c)
                })
            }
            Y = c / (d ? b.m : b.l)(y);
            b.Ee(y, Y);
            var f = d ? Y * W() : c, e = d ? c : Y * nb();
            b.l(q, f);
            b.m(q, e);
            b.f(Lb, function (a) {
                var c = b.Be(b.g(a, "autocenter"));
                b.td(a, c)
            })
        }

        o.yd = Eb;
        m.call(o);
        o.cb = q = b.jb(q);
        var a = b.Z({
            tb: 0,
            oe: 1,
            sc: 1,
            pc: 0,
            jc: k,
            ub: 1,
            kb: e,
            Tc: e,
            oc: 1,
            jd: 3e3,
            Pc: 1,
            Bb: 500,
            ge: d.Cd,
            Vc: 20,
            uc: 0,
            V: 1,
            Wc: 0,
            ye: 1,
            rc: 1,
            Mc: 1
        }, fc);
        a.kb = a.kb && b.Fe();
        if (a.Pe != i)a.jd = a.Pe;
        if (a.te != i)a.Wc = a.te;
        var fb = a.rc & 3, tc = (a.rc & 4) / -4 || 1, mb = a.af, I = b.Z({S: p, kb: a.kb}, a.Xe);
        I.Ob = I.Ob || I.Ue;
        var Fb = a.we, Z = a.wd, eb = a.We, Q = !a.ye, y, v = b.B(q, "slides", Q), gb = b.B(q, "loading", Q) || b.Fb(g), Nb = b.B(q, "navigator", Q), dc = b.B(q, "arrowleft", Q), ac = b.B(q, "arrowright", Q), Mb = b.B(q, "thumbnavigator", Q), pc = b.l(v), nc = b.m(v), V, T = [], uc = b.Gb(v);
        b.f(uc, function (a) {
            a.tagName == "DIV" && !b.g(a, "u") && T.push(a);
            b.u(a, (b.u(a) || 0) + 1)
        });
        var s = -1, wb, tb, r = T.length, K = a.dd || pc, J = a.zd || nc, Wb = a.uc, zb = K + Wb, Ab = J + Wb, bc = fb & 1 ? zb : Ab, u = c.min(a.V, r), lb, x, M, yb, S = [], Qb, Sb, Ob, cc, Cc, L, E = a.Pc, lc = a.jd, Vb = a.Bb, rb, ib, kb, Rb = u < r, D = Rb ? a.ub : 0, X, P, F = 1, O, B, R, ub = 0, vb = 0, H, hb, jb, Cb, w, U, z, Ub = new oc, Y, Lb = [];
        if (r) {
            if (a.kb)Kb = function (a, c, d) {
                b.lb(a, {W: c, ab: d})
            };
            L = a.jc;
            o.Db = fc;
            ic();
            b.o(q, "jssor-slider", e);
            b.u(v, b.u(v) || 0);
            b.A(v, "absolute");
            lb = b.sb(v, e);
            b.Cb(lb, v);
            if (mb) {
                cc = mb.Ve;
                rb = mb.S;
                ib = u == 1 && r > 1 && rb && (!b.Zc() || b.kd() >= 8)
            }
            kb = ib || u >= r || !(D & 1) ? 0 : a.Wc;
            X = (u > 1 || kb ? fb : -1) & a.Mc;
            var Gb = v, C = [], A, N, Db = b.Yd(), ob = Db.Zd, G, qb, Ib, sb;
            Db.hd && b.K(Gb, Db.hd, ([h, "pan-y", "pan-x", "none"])[X] || "");
            U = new zc;
            if (ib)A = new rb(Ub, K, J, mb, ob);
            b.I(lb, U.Rb);
            b.Eb(v, "hidden");
            N = Xb();
            b.K(N, "backgroundColor", "#000");
            b.ac(N, 0);
            b.Cb(N, Gb.firstChild, Gb);
            for (var db = 0; db < T.length; db++) {
                var wc = T[db], yc = new xc(wc, db);
                C.push(yc)
            }
            b.L(gb);
            Cb = new Ac;
            z = new mc(Cb, U);
            b.a(v, "click", jc, e);
            b.a(q, "mouseout", b.Vb(hc, q));
            b.a(q, "mouseover", b.Vb(Ec, q));
            if (X) {
                b.a(v, "mousedown", Yb);
                b.a(v, "touchstart", rc);
                b.a(v, "dragstart", Hb);
                b.a(v, "selectstart", Hb);
                b.a(g, "mouseup", bb);
                b.a(g, "touchend", bb);
                b.a(g, "touchcancel", bb);
                b.a(f, "blur", bb)
            }
            E &= ob ? 10 : 5;
            if (Nb && Fb) {
                Qb = new Fb.S(Nb, Fb, W(), nb());
                S.push(Qb)
            }
            if (Z && dc && ac) {
                Z.ub = D;
                Z.V = u;
                Sb = new Z.S(dc, ac, Z, W(), nb());
                S.push(Sb)
            }
            if (Mb && eb) {
                eb.pc = a.pc;
                Ob = new eb.S(Mb, eb);
                S.push(Ob)
            }
            b.f(S, function (a) {
                a.ic(r, C, gb);
                a.hb(n.hc, kc)
            });
            b.K(q, "visibility", "visible");
            Eb(W());
            xb();
            a.sc && b.a(g, "keydown", function (b) {
                if (b.keyCode == 37)ab(-a.sc); else b.keyCode == 39 && ab(a.sc)
            });
            var pb = a.pc;
            if (!(D & 1))pb = c.max(0, c.min(pb, r - u));
            z.Kb(pb, pb, 0)
        }
    };
    j.rd = 21;
    j.Je = 22;
    j.De = 23;
    j.ee = 24;
    j.fe = 25;
    j.me = 26;
    j.ke = 27;
    j.Ke = 28;
    j.de = 202;
    j.Sd = 203;
    j.Ne = 206;
    j.Me = 207;
    j.Le = 208;
    j.Bc = 209;
    var n = {hc: 1}, q = function (d, C) {
        var f = this;
        m.call(f);
        d = b.jb(d);
        var s, A, z, r, l = 0, a, o, j, w, x, i, g, q, p, B = [], y = [];

        function v(a) {
            a != -1 && y[a].Nd(a == l)
        }

        function t(a) {
            f.i(n.hc, a * o)
        }

        f.cb = d;
        f.mc = function (a) {
            if (a != r) {
                var d = l, b = c.floor(a / o);
                l = b;
                r = a;
                v(d);
                v(b)
            }
        };
        f.qc = function (a) {
            b.J(d, a)
        };
        var u;
        f.ic = function (D) {
            if (!u) {
                s = c.ceil(D / o);
                l = 0;
                var n = q + w, r = p + x, m = c.ceil(s / j) - 1;
                A = q + n * (!i ? m : j - 1);
                z = p + r * (i ? m : j - 1);
                b.l(d, A);
                b.m(d, z);
                for (var f = 0; f < s; f++) {
                    var C = b.Od();
                    b.ze(C, f + 1);
                    var k = b.Dd(g, "numbertemplate", C, e);
                    b.A(k, "absolute");
                    var v = f % (m + 1);
                    b.C(k, !i ? n * v : f % j * n);
                    b.F(k, i ? r * v : c.floor(f / (m + 1)) * r);
                    b.I(d, k);
                    B[f] = k;
                    a.gc & 1 && b.a(k, "click", b.G(h, t, f));
                    a.gc & 2 && b.a(k, "mouseover", b.Vb(b.G(h, t, f), k));
                    y[f] = b.cc(k)
                }
                u = e
            }
        };
        f.Db = a = b.Z({kc: 10, lc: 10, Rc: 1, gc: 1}, C);
        g = b.B(d, "prototype");
        q = b.l(g);
        p = b.m(g);
        b.yb(g, d);
        o = a.tc || 1;
        j = a.Fd || 1;
        w = a.kc;
        x = a.lc;
        i = a.Rc - 1;
        a.Zb == k && b.o(d, "noscale", e);
        a.gb && b.o(d, "autocenter", a.gb)
    }, r = function (a, g, i) {
        var c = this;
        m.call(c);
        var r, d, f, j;
        b.l(a);
        b.m(a);
        var p, o;

        function l(a) {
            c.i(n.hc, a, e)
        }

        function t(c) {
            b.J(a, c);
            b.J(g, c)
        }

        function s() {
            p.xb(i.ub || d > 0);
            o.xb(i.ub || d < r - i.V)
        }

        c.mc = function (b, a, c) {
            if (c)d = a; else {
                d = b;
                s()
            }
        };
        c.qc = t;
        var q;
        c.ic = function (c) {
            r = c;
            d = 0;
            if (!q) {
                b.a(a, "click", b.G(h, l, -j));
                b.a(g, "click", b.G(h, l, j));
                p = b.cc(a);
                o = b.cc(g);
                q = e
            }
        };
        c.Db = f = b.Z({tc: 1}, i);
        j = f.tc;
        if (f.Zb == k) {
            b.o(a, "noscale", e);
            b.o(g, "noscale", e)
        }
        if (f.gb) {
            b.o(a, "autocenter", f.gb);
            b.o(g, "autocenter", f.gb)
        }
    };

    function p(e, d, c) {
        var a = this;
        l.call(a, 0, c);
        a.bd = b.Kc;
        a.vc = 0;
        a.Ec = c
    }

    jssor_1_slider_init = function () {
        var g = {
            jc: e,
            oc: 4,
            Bb: 160,
            dd: 200,
            uc: 3,
            V: 4,
            wd: {S: r, tc: 4},
            we: {S: q, kc: 1, lc: 1}
        }, d = new j("jssor_1", g);

        function a() {
            var b = d.cb.parentNode.clientWidth;
            if (b) {
                b = c.min(b, 809);
                d.yd(b)
            } else f.setTimeout(a, 30)
        }

        a();
        b.a(f, "load", a);
        b.a(f, "resize", a);
        b.a(f, "orientationchange", a)
    }
})(window, document, Math, null, true, false);

