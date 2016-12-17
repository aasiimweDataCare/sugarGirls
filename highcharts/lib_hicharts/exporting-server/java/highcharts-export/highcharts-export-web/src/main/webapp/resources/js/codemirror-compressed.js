/* CodeMirror - Minified & Bundled
 Generated on 1/21/2015 with http://codemirror.net/doc/compress.html
 Version: HEAD

 CodeMirror Library:
 - codemirror.js
 Modes:
 - javascript.js
 - xml.js
 Add-ons:
 - active-line.js
 - brace-fold.js
 - closebrackets.js
 - closetag.js
 - colorize.js
 - foldcode.js
 - javascript-lint.js
 - json-lint.js
 */

!function (a) {
    if ("object" == typeof exports && "object" == typeof module)module.exports = a(); else {
        if ("function" == typeof define && define.amd)return define([], a);
        this.CodeMirror = a()
    }
}(function () {
    "use strict";
    function w(a, b) {
        if (!(this instanceof w))return new w(a, b);
        this.options = b = b ? Xg(b) : {}, Xg(pe, b, !1), J(b);
        var c = b.value;
        "string" == typeof c && (c = new Sf(c, b.mode)), this.doc = c;
        var g = this.display = new x(a, c);
        g.wrapper.CodeMirror = this, F(this), D(this), b.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), b.autofocus && !o && fd(this), N(this), this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            draggingText: !1,
            highlight: new Ng,
            keySeq: null
        }, d && 11 > e && setTimeout(Yg(ed, this, !0), 20), id(this), ph(), Gc(this), this.curOp.forceUpdate = !0, Wf(this, c), b.autofocus && !o || ih() == g.input ? setTimeout(Yg(Od, this), 20) : Pd(this);
        for (var h in qe)qe.hasOwnProperty(h) && qe[h](this, b[h], se);
        S(this);
        for (var i = 0; i < we.length; ++i)we[i](this);
        Ic(this), f && b.lineWrapping && "optimizelegibility" == getComputedStyle(g.lineDiv).textRendering && (g.lineDiv.style.textRendering = "auto")
    }

    function x(a, b) {
        var c = this, g = c.input = dh("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
        f ? g.style.width = "1000px" : g.setAttribute("wrap", "off"), n && (g.style.border = "1px solid black"), g.setAttribute("autocorrect", "off"), g.setAttribute("autocapitalize", "off"), g.setAttribute("spellcheck", "false"), c.inputDiv = dh("div", [g], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), c.scrollbarFiller = dh("div", null, "CodeMirror-scrollbar-filler"), c.scrollbarFiller.setAttribute("not-content", "true"), c.gutterFiller = dh("div", null, "CodeMirror-gutter-filler"), c.gutterFiller.setAttribute("not-content", "true"), c.lineDiv = dh("div", null, "CodeMirror-code"), c.selectionDiv = dh("div", null, null, "position: relative; z-index: 1"), c.cursorDiv = dh("div", null, "CodeMirror-cursors"), c.measure = dh("div", null, "CodeMirror-measure"), c.lineMeasure = dh("div", null, "CodeMirror-measure"), c.lineSpace = dh("div", [c.measure, c.lineMeasure, c.selectionDiv, c.cursorDiv, c.lineDiv], null, "position: relative; outline: none"), c.mover = dh("div", [dh("div", [c.lineSpace], "CodeMirror-lines")], null, "position: relative"), c.sizer = dh("div", [c.mover], "CodeMirror-sizer"), c.sizerWidth = null, c.heightForcer = dh("div", null, null, "position: absolute; height: " + Ig + "px; width: 1px;"), c.gutters = dh("div", null, "CodeMirror-gutters"), c.lineGutter = null, c.scroller = dh("div", [c.sizer, c.heightForcer, c.gutters], "CodeMirror-scroll"), c.scroller.setAttribute("tabIndex", "-1"), c.wrapper = dh("div", [c.inputDiv, c.scrollbarFiller, c.gutterFiller, c.scroller], "CodeMirror"), d && 8 > e && (c.gutters.style.zIndex = -1, c.scroller.style.paddingRight = 0), n && (g.style.width = "0px"), f || (c.scroller.draggable = !0), k && (c.inputDiv.style.height = "1px", c.inputDiv.style.position = "absolute"), a && (a.appendChild ? a.appendChild(c.wrapper) : a(c.wrapper)), c.viewFrom = c.viewTo = b.first, c.reportedViewFrom = c.reportedViewTo = b.first, c.view = [], c.renderedView = null, c.externalMeasured = null, c.viewOffset = 0, c.lastWrapHeight = c.lastWrapWidth = 0, c.updateLineNumbers = null, c.nativeBarWidth = c.barHeight = c.barWidth = 0, c.scrollbarsClipped = !1, c.lineNumWidth = c.lineNumInnerWidth = c.lineNumChars = null, c.prevInput = "", c.alignWidgets = !1, c.pollingFast = !1, c.poll = new Ng, c.cachedCharWidth = c.cachedTextHeight = c.cachedPaddingH = null, c.inaccurateSelection = !1, c.maxLine = null, c.maxLineLength = 0, c.maxLineChanged = !1, c.wheelDX = c.wheelDY = c.wheelStartX = c.wheelStartY = null, c.shift = !1, c.selForContextMenu = null
    }

    function y(a) {
        a.doc.mode = w.getMode(a.options, a.doc.modeOption), z(a)
    }

    function z(a) {
        a.doc.iter(function (a) {
            a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null)
        }), a.doc.frontier = a.doc.first, Wb(a, 100), a.state.modeGen++, a.curOp && Vc(a)
    }

    function A(a) {
        a.options.lineWrapping ? (lh(a.display.wrapper, "CodeMirror-wrap"), a.display.sizer.style.minWidth = "", a.display.sizerWidth = null) : (kh(a.display.wrapper, "CodeMirror-wrap"), I(a)), C(a), Vc(a), qc(a), setTimeout(function () {
            O(a)
        }, 100)
    }

    function B(a) {
        var b = Cc(a.display), c = a.options.lineWrapping, d = c && Math.max(5, a.display.scroller.clientWidth / Dc(a.display) - 3);
        return function (e) {
            if (mf(a.doc, e))return 0;
            var f = 0;
            if (e.widgets)for (var g = 0; g < e.widgets.length; g++)e.widgets[g].height && (f += e.widgets[g].height);
            return c ? f + (Math.ceil(e.text.length / d) || 1) * b : f + b
        }
    }

    function C(a) {
        var b = a.doc, c = B(a);
        b.iter(function (a) {
            var b = c(a);
            b != a.height && $f(a, b)
        })
    }

    function D(a) {
        a.display.wrapper.className = a.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + a.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), qc(a)
    }

    function E(a) {
        F(a), Vc(a), setTimeout(function () {
            R(a)
        }, 20)
    }

    function F(a) {
        var b = a.display.gutters, c = a.options.gutters;
        fh(b);
        for (var d = 0; d < c.length; ++d) {
            var e = c[d], f = b.appendChild(dh("div", null, "CodeMirror-gutter " + e));
            "CodeMirror-linenumbers" == e && (a.display.lineGutter = f, f.style.width = (a.display.lineNumWidth || 1) + "px")
        }
        b.style.display = d ? "" : "none", G(a)
    }

    function G(a) {
        var b = a.display.gutters.offsetWidth;
        a.display.sizer.style.marginLeft = b + "px"
    }

    function H(a) {
        if (0 == a.height)return 0;
        for (var c, b = a.text.length, d = a; c = ef(d);) {
            var e = c.find(0, !0);
            d = e.from.line, b += e.from.ch - e.to.ch
        }
        for (d = a; c = ff(d);) {
            var e = c.find(0, !0);
            b -= d.text.length - e.from.ch, d = e.to.line, b += d.text.length - e.to.ch
        }
        return b
    }

    function I(a) {
        var b = a.display, c = a.doc;
        b.maxLine = Xf(c, c.first), b.maxLineLength = H(b.maxLine), b.maxLineChanged = !0, c.iter(function (a) {
            var c = H(a);
            c > b.maxLineLength && (b.maxLineLength = c, b.maxLine = a)
        })
    }

    function J(a) {
        var b = Ug(a.gutters, "CodeMirror-linenumbers");
        -1 == b && a.lineNumbers ? a.gutters = a.gutters.concat(["CodeMirror-linenumbers"]) : b > -1 && !a.lineNumbers && (a.gutters = a.gutters.slice(0), a.gutters.splice(b, 1))
    }

    function K(a) {
        var b = a.display, c = b.gutters.offsetWidth, d = Math.round(a.doc.height + _b(a.display));
        return {
            clientHeight: b.scroller.clientHeight,
            viewHeight: b.wrapper.clientHeight,
            scrollWidth: b.scroller.scrollWidth,
            clientWidth: b.scroller.clientWidth,
            viewWidth: b.wrapper.clientWidth,
            barLeft: a.options.fixedGutter ? c : 0,
            docHeight: d,
            scrollHeight: d + bc(a) + b.barHeight,
            nativeBarWidth: b.nativeBarWidth,
            gutterWidth: c
        }
    }

    function L(a, b, c) {
        this.cm = c;
        var f = this.vert = dh("div", [dh("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), g = this.horiz = dh("div", [dh("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        a(f), a(g), yg(f, "scroll", function () {
            f.clientHeight && b(f.scrollTop, "vertical")
        }), yg(g, "scroll", function () {
            g.clientWidth && b(g.scrollLeft, "horizontal")
        }), this.checkedOverlay = !1, d && 8 > e && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
    }

    function M() {
    }

    function N(a) {
        a.display.scrollbars && (a.display.scrollbars.clear(), a.display.scrollbars.addClass && kh(a.display.wrapper, a.display.scrollbars.addClass)), a.display.scrollbars = new w.scrollbarModel[a.options.scrollbarStyle](function (b) {
            a.display.wrapper.insertBefore(b, a.display.scrollbarFiller), yg(b, "mousedown", function () {
                a.state.focused && setTimeout(Yg(fd, a), 0)
            }), b.setAttribute("not-content", "true")
        }, function (b, c) {
            "horizontal" == c ? yd(a, b) : xd(a, b)
        }, a), a.display.scrollbars.addClass && lh(a.display.wrapper, a.display.scrollbars.addClass)
    }

    function O(a, b) {
        b || (b = K(a));
        var c = a.display.barWidth, d = a.display.barHeight;
        P(a, b);
        for (var e = 0; 4 > e && c != a.display.barWidth || d != a.display.barHeight; e++)c != a.display.barWidth && a.options.lineWrapping && _(a), P(a, K(a)), c = a.display.barWidth, d = a.display.barHeight
    }

    function P(a, b) {
        var c = a.display, d = c.scrollbars.update(b);
        c.sizer.style.paddingRight = (c.barWidth = d.right) + "px", c.sizer.style.paddingBottom = (c.barHeight = d.bottom) + "px", d.right && d.bottom ? (c.scrollbarFiller.style.display = "block", c.scrollbarFiller.style.height = d.bottom + "px", c.scrollbarFiller.style.width = d.right + "px") : c.scrollbarFiller.style.display = "", d.bottom && a.options.coverGutterNextToScrollbar && a.options.fixedGutter ? (c.gutterFiller.style.display = "block", c.gutterFiller.style.height = d.bottom + "px", c.gutterFiller.style.width = b.gutterWidth + "px") : c.gutterFiller.style.display = ""
    }

    function Q(a, b, c) {
        var d = c && null != c.top ? Math.max(0, c.top) : a.scroller.scrollTop;
        d = Math.floor(d - $b(a));
        var e = c && null != c.bottom ? c.bottom : d + a.wrapper.clientHeight, f = ag(b, d), g = ag(b, e);
        if (c && c.ensure) {
            var h = c.ensure.from.line, i = c.ensure.to.line;
            f > h ? (f = h, g = ag(b, bg(Xf(b, h)) + a.wrapper.clientHeight)) : Math.min(i, b.lastLine()) >= g && (f = ag(b, bg(Xf(b, i)) - a.wrapper.clientHeight), g = i)
        }
        return {from: f, to: Math.max(g, f + 1)}
    }

    function R(a) {
        var b = a.display, c = b.view;
        if (b.alignWidgets || b.gutters.firstChild && a.options.fixedGutter) {
            for (var d = U(b) - b.scroller.scrollLeft + a.doc.scrollLeft, e = b.gutters.offsetWidth, f = d + "px", g = 0; g < c.length; g++)if (!c[g].hidden) {
                a.options.fixedGutter && c[g].gutter && (c[g].gutter.style.left = f);
                var h = c[g].alignable;
                if (h)for (var i = 0; i < h.length; i++)h[i].style.left = f
            }
            a.options.fixedGutter && (b.gutters.style.left = d + e + "px")
        }
    }

    function S(a) {
        if (!a.options.lineNumbers)return !1;
        var b = a.doc, c = T(a.options, b.first + b.size - 1), d = a.display;
        if (c.length != d.lineNumChars) {
            var e = d.measure.appendChild(dh("div", [dh("div", c)], "CodeMirror-linenumber CodeMirror-gutter-elt")), f = e.firstChild.offsetWidth, g = e.offsetWidth - f;
            return d.lineGutter.style.width = "", d.lineNumInnerWidth = Math.max(f, d.lineGutter.offsetWidth - g), d.lineNumWidth = d.lineNumInnerWidth + g, d.lineNumChars = d.lineNumInnerWidth ? c.length : -1, d.lineGutter.style.width = d.lineNumWidth + "px", G(a), !0
        }
        return !1
    }

    function T(a, b) {
        return String(a.lineNumberFormatter(b + a.firstLineNumber))
    }

    function U(a) {
        return a.scroller.getBoundingClientRect().left - a.sizer.getBoundingClientRect().left
    }

    function V(a, b, c) {
        var d = a.display;
        this.viewport = b, this.visible = Q(d, a.doc, b), this.editorIsHidden = !d.wrapper.offsetWidth, this.wrapperHeight = d.wrapper.clientHeight, this.wrapperWidth = d.wrapper.clientWidth, this.oldDisplayWidth = cc(a), this.force = c, this.dims = bb(a)
    }

    function W(a) {
        var b = a.display;
        !b.scrollbarsClipped && b.scroller.offsetWidth && (b.nativeBarWidth = b.scroller.offsetWidth - b.scroller.clientWidth, b.heightForcer.style.height = bc(a) + "px", b.sizer.style.marginBottom = -b.nativeBarWidth + "px", b.sizer.style.borderRightWidth = bc(a) + "px", b.scrollbarsClipped = !0)
    }

    function X(a, b) {
        var c = a.display, d = a.doc;
        if (b.editorIsHidden)return Xc(a), !1;
        if (!b.force && b.visible.from >= c.viewFrom && b.visible.to <= c.viewTo && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo) && c.renderedView == c.view && 0 == _c(a))return !1;
        S(a) && (Xc(a), b.dims = bb(a));
        var e = d.first + d.size, f = Math.max(b.visible.from - a.options.viewportMargin, d.first), g = Math.min(e, b.visible.to + a.options.viewportMargin);
        c.viewFrom < f && f - c.viewFrom < 20 && (f = Math.max(d.first, c.viewFrom)), c.viewTo > g && c.viewTo - g < 20 && (g = Math.min(e, c.viewTo)), v && (f = kf(a.doc, f), g = lf(a.doc, g));
        var h = f != c.viewFrom || g != c.viewTo || c.lastWrapHeight != b.wrapperHeight || c.lastWrapWidth != b.wrapperWidth;
        $c(a, f, g), c.viewOffset = bg(Xf(a.doc, c.viewFrom)), a.display.mover.style.top = c.viewOffset + "px";
        var i = _c(a);
        if (!h && 0 == i && !b.force && c.renderedView == c.view && (null == c.updateLineNumbers || c.updateLineNumbers >= c.viewTo))return !1;
        var j = ih();
        return i > 4 && (c.lineDiv.style.display = "none"), cb(a, c.updateLineNumbers, b.dims), i > 4 && (c.lineDiv.style.display = ""), c.renderedView = c.view, j && ih() != j && j.offsetHeight && j.focus(), fh(c.cursorDiv), fh(c.selectionDiv), c.gutters.style.height = 0, h && (c.lastWrapHeight = b.wrapperHeight, c.lastWrapWidth = b.wrapperWidth, Wb(a, 400)), c.updateLineNumbers = null, !0
    }

    function Y(a, b) {
        for (var c = b.force, d = b.viewport, e = !0; ; e = !1) {
            if (e && a.options.lineWrapping && b.oldDisplayWidth != cc(a))c = !0; else if (c = !1, d && null != d.top && (d = {top: Math.min(a.doc.height + _b(a.display) - dc(a), d.top)}), b.visible = Q(a.display, a.doc, d), b.visible.from >= a.display.viewFrom && b.visible.to <= a.display.viewTo)break;
            if (!X(a, b))break;
            _(a);
            var f = K(a);
            Sb(a), $(a, f), O(a, f)
        }
        Cg(a, "update", a), (a.display.viewFrom != a.display.reportedViewFrom || a.display.viewTo != a.display.reportedViewTo) && (Cg(a, "viewportChange", a, a.display.viewFrom, a.display.viewTo), a.display.reportedViewFrom = a.display.viewFrom, a.display.reportedViewTo = a.display.viewTo)
    }

    function Z(a, b) {
        var c = new V(a, b);
        if (X(a, c)) {
            _(a), Y(a, c);
            var d = K(a);
            Sb(a), $(a, d), O(a, d)
        }
    }

    function $(a, b) {
        a.display.sizer.style.minHeight = b.docHeight + "px";
        var c = b.docHeight + a.display.barHeight;
        a.display.heightForcer.style.top = c + "px", a.display.gutters.style.height = Math.max(c + bc(a), b.clientHeight) + "px"
    }

    function _(a) {
        for (var b = a.display, c = b.lineDiv.offsetTop, f = 0; f < b.view.length; f++) {
            var h, g = b.view[f];
            if (!g.hidden) {
                if (d && 8 > e) {
                    var i = g.node.offsetTop + g.node.offsetHeight;
                    h = i - c, c = i
                } else {
                    var j = g.node.getBoundingClientRect();
                    h = j.bottom - j.top
                }
                var k = g.line.height - h;
                if (2 > h && (h = Cc(b)), (k > .001 || -.001 > k) && ($f(g.line, h), ab(g.line), g.rest))for (var l = 0; l < g.rest.length; l++)ab(g.rest[l])
            }
        }
    }

    function ab(a) {
        if (a.widgets)for (var b = 0; b < a.widgets.length; ++b)a.widgets[b].height = a.widgets[b].node.offsetHeight
    }

    function bb(a) {
        for (var b = a.display, c = {}, d = {}, e = b.gutters.clientLeft, f = b.gutters.firstChild, g = 0; f; f = f.nextSibling, ++g)c[a.options.gutters[g]] = f.offsetLeft + f.clientLeft + e, d[a.options.gutters[g]] = f.clientWidth;
        return {
            fixedPos: U(b),
            gutterTotalWidth: b.gutters.offsetWidth,
            gutterLeft: c,
            gutterWidth: d,
            wrapperWidth: b.wrapper.clientWidth
        }
    }

    function cb(a, b, c) {
        function i(b) {
            var c = b.nextSibling;
            return f && p && a.display.currentWheelTarget == b ? b.style.display = "none" : b.parentNode.removeChild(b), c
        }

        for (var d = a.display, e = a.options.lineNumbers, g = d.lineDiv, h = g.firstChild, j = d.view, k = d.viewFrom, l = 0; l < j.length; l++) {
            var m = j[l];
            if (m.hidden); else if (m.node) {
                for (; h != m.node;)h = i(h);
                var o = e && null != b && k >= b && m.lineNumber;
                m.changes && (Ug(m.changes, "gutter") > -1 && (o = !1), db(a, m, k, c)), o && (fh(m.lineNumber), m.lineNumber.appendChild(document.createTextNode(T(a.options, k)))), h = m.node.nextSibling
            } else {
                var n = lb(a, m, k, c);
                g.insertBefore(n, h)
            }
            k += m.size
        }
        for (; h;)h = i(h)
    }

    function db(a, b, c, d) {
        for (var e = 0; e < b.changes.length; e++) {
            var f = b.changes[e];
            "text" == f ? hb(a, b) : "gutter" == f ? jb(a, b, c, d) : "class" == f ? ib(b) : "widget" == f && kb(b, d)
        }
        b.changes = null
    }

    function eb(a) {
        return a.node == a.text && (a.node = dh("div", null, null, "position: relative"), a.text.parentNode && a.text.parentNode.replaceChild(a.node, a.text), a.node.appendChild(a.text), d && 8 > e && (a.node.style.zIndex = 2)), a.node
    }

    function fb(a) {
        var b = a.bgClass ? a.bgClass + " " + (a.line.bgClass || "") : a.line.bgClass;
        if (b && (b += " CodeMirror-linebackground"), a.background)b ? a.background.className = b : (a.background.parentNode.removeChild(a.background), a.background = null); else if (b) {
            var c = eb(a);
            a.background = c.insertBefore(dh("div", null, b), c.firstChild)
        }
    }

    function gb(a, b) {
        var c = a.display.externalMeasured;
        return c && c.line == b.line ? (a.display.externalMeasured = null, b.measure = c.measure, c.built) : Gf(a, b)
    }

    function hb(a, b) {
        var c = b.text.className, d = gb(a, b);
        b.text == b.node && (b.node = d.pre), b.text.parentNode.replaceChild(d.pre, b.text), b.text = d.pre, d.bgClass != b.bgClass || d.textClass != b.textClass ? (b.bgClass = d.bgClass, b.textClass = d.textClass, ib(b)) : c && (b.text.className = c)
    }

    function ib(a) {
        fb(a), a.line.wrapClass ? eb(a).className = a.line.wrapClass : a.node != a.text && (a.node.className = "");
        var b = a.textClass ? a.textClass + " " + (a.line.textClass || "") : a.line.textClass;
        a.text.className = b || ""
    }

    function jb(a, b, c, d) {
        b.gutter && (b.node.removeChild(b.gutter), b.gutter = null);
        var e = b.line.gutterMarkers;
        if (a.options.lineNumbers || e) {
            var f = eb(b), g = b.gutter = f.insertBefore(dh("div", null, "CodeMirror-gutter-wrapper", "left: " + (a.options.fixedGutter ? d.fixedPos : -d.gutterTotalWidth) + "px; width: " + d.gutterTotalWidth + "px"), b.text);
            if (b.line.gutterClass && (g.className += " " + b.line.gutterClass), !a.options.lineNumbers || e && e["CodeMirror-linenumbers"] || (b.lineNumber = g.appendChild(dh("div", T(a.options, c), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + d.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + a.display.lineNumInnerWidth + "px"))), e)for (var h = 0; h < a.options.gutters.length; ++h) {
                var i = a.options.gutters[h], j = e.hasOwnProperty(i) && e[i];
                j && g.appendChild(dh("div", [j], "CodeMirror-gutter-elt", "left: " + d.gutterLeft[i] + "px; width: " + d.gutterWidth[i] + "px"))
            }
        }
    }

    function kb(a, b) {
        a.alignable && (a.alignable = null);
        for (var d, c = a.node.firstChild; c; c = d) {
            var d = c.nextSibling;
            "CodeMirror-linewidget" == c.className && a.node.removeChild(c)
        }
        mb(a, b)
    }

    function lb(a, b, c, d) {
        var e = gb(a, b);
        return b.text = b.node = e.pre, e.bgClass && (b.bgClass = e.bgClass), e.textClass && (b.textClass = e.textClass), ib(b), jb(a, b, c, d), mb(b, d), b.node
    }

    function mb(a, b) {
        if (nb(a.line, a, b, !0), a.rest)for (var c = 0; c < a.rest.length; c++)nb(a.rest[c], a, b, !1)
    }

    function nb(a, b, c, d) {
        if (a.widgets)for (var e = eb(b), f = 0, g = a.widgets; f < g.length; ++f) {
            var h = g[f], i = dh("div", [h.node], "CodeMirror-linewidget");
            h.handleMouseEvents || i.setAttribute("cm-ignore-events", "true"), ob(h, i, b, c), d && h.above ? e.insertBefore(i, b.gutter || b.text) : e.appendChild(i), Cg(h, "redraw")
        }
    }

    function ob(a, b, c, d) {
        if (a.noHScroll) {
            (c.alignable || (c.alignable = [])).push(b);
            var e = d.wrapperWidth;
            b.style.left = d.fixedPos + "px", a.coverGutter || (e -= d.gutterTotalWidth, b.style.paddingLeft = d.gutterTotalWidth + "px"), b.style.width = e + "px"
        }
        a.coverGutter && (b.style.zIndex = 5, b.style.position = "relative", a.noHScroll || (b.style.marginLeft = -d.gutterTotalWidth + "px"))
    }

    function rb(a) {
        return pb(a.line, a.ch)
    }

    function sb(a, b) {
        return qb(a, b) < 0 ? b : a
    }

    function tb(a, b) {
        return qb(a, b) < 0 ? a : b
    }

    function ub(a, b) {
        this.ranges = a, this.primIndex = b
    }

    function vb(a, b) {
        this.anchor = a, this.head = b
    }

    function wb(a, b) {
        var c = a[b];
        a.sort(function (a, b) {
            return qb(a.from(), b.from())
        }), b = Ug(a, c);
        for (var d = 1; d < a.length; d++) {
            var e = a[d], f = a[d - 1];
            if (qb(f.to(), e.from()) >= 0) {
                var g = tb(f.from(), e.from()), h = sb(f.to(), e.to()), i = f.empty() ? e.from() == e.head : f.from() == f.head;
                b >= d && --b, a.splice(--d, 2, new vb(i ? h : g, i ? g : h))
            }
        }
        return new ub(a, b)
    }

    function xb(a, b) {
        return new ub([new vb(a, b || a)], 0)
    }

    function yb(a, b) {
        return Math.max(a.first, Math.min(b, a.first + a.size - 1))
    }

    function zb(a, b) {
        if (b.line < a.first)return pb(a.first, 0);
        var c = a.first + a.size - 1;
        return b.line > c ? pb(c, Xf(a, c).text.length) : Ab(b, Xf(a, b.line).text.length)
    }

    function Ab(a, b) {
        var c = a.ch;
        return null == c || c > b ? pb(a.line, b) : 0 > c ? pb(a.line, 0) : a
    }

    function Bb(a, b) {
        return b >= a.first && b < a.first + a.size
    }

    function Cb(a, b) {
        for (var c = [], d = 0; d < b.length; d++)c[d] = zb(a, b[d]);
        return c
    }

    function Db(a, b, c, d) {
        if (a.cm && a.cm.display.shift || a.extend) {
            var e = b.anchor;
            if (d) {
                var f = qb(c, e) < 0;
                f != qb(d, e) < 0 ? (e = c, c = d) : f != qb(c, d) < 0 && (c = d)
            }
            return new vb(e, c)
        }
        return new vb(d || c, c)
    }

    function Eb(a, b, c, d) {
        Kb(a, new ub([Db(a, a.sel.primary(), b, c)], 0), d)
    }

    function Fb(a, b, c) {
        for (var d = [], e = 0; e < a.sel.ranges.length; e++)d[e] = Db(a, a.sel.ranges[e], b[e], null);
        var f = wb(d, a.sel.primIndex);
        Kb(a, f, c)
    }

    function Gb(a, b, c, d) {
        var e = a.sel.ranges.slice(0);
        e[b] = c, Kb(a, wb(e, a.sel.primIndex), d)
    }

    function Hb(a, b, c, d) {
        Kb(a, xb(b, c), d)
    }

    function Ib(a, b) {
        var c = {
            ranges: b.ranges, update: function (b) {
                this.ranges = [];
                for (var c = 0; c < b.length; c++)this.ranges[c] = new vb(zb(a, b[c].anchor), zb(a, b[c].head))
            }
        };
        return Ag(a, "beforeSelectionChange", a, c), a.cm && Ag(a.cm, "beforeSelectionChange", a.cm, c), c.ranges != b.ranges ? wb(c.ranges, c.ranges.length - 1) : b
    }

    function Jb(a, b, c) {
        var d = a.history.done, e = Sg(d);
        e && e.ranges ? (d[d.length - 1] = b, Lb(a, b, c)) : Kb(a, b, c)
    }

    function Kb(a, b, c) {
        Lb(a, b, c), jg(a, a.sel, a.cm ? a.cm.curOp.id : 0 / 0, c)
    }

    function Lb(a, b, c) {
        (Gg(a, "beforeSelectionChange") || a.cm && Gg(a.cm, "beforeSelectionChange")) && (b = Ib(a, b));
        var d = c && c.bias || (qb(b.primary().head, a.sel.primary().head) < 0 ? -1 : 1);
        Mb(a, Ob(a, b, d, !0)), c && c.scroll === !1 || !a.cm || ie(a.cm)
    }

    function Mb(a, b) {
        b.equals(a.sel) || (a.sel = b, a.cm && (a.cm.curOp.updateInput = a.cm.curOp.selectionChanged = !0, Fg(a.cm)), Cg(a, "cursorActivity", a))
    }

    function Nb(a) {
        Mb(a, Ob(a, a.sel, null, !1), Kg)
    }

    function Ob(a, b, c, d) {
        for (var e, f = 0; f < b.ranges.length; f++) {
            var g = b.ranges[f], h = Pb(a, g.anchor, c, d), i = Pb(a, g.head, c, d);
            (e || h != g.anchor || i != g.head) && (e || (e = b.ranges.slice(0, f)), e[f] = new vb(h, i))
        }
        return e ? wb(e, b.primIndex) : b
    }

    function Pb(a, b, c, d) {
        var e = !1, f = b, g = c || 1;
        a.cantEdit = !1;
        a:for (; ;) {
            var h = Xf(a, f.line);
            if (h.markedSpans)for (var i = 0; i < h.markedSpans.length; ++i) {
                var j = h.markedSpans[i], k = j.marker;
                if ((null == j.from || (k.inclusiveLeft ? j.from <= f.ch : j.from < f.ch)) && (null == j.to || (k.inclusiveRight ? j.to >= f.ch : j.to > f.ch))) {
                    if (d && (Ag(k, "beforeCursorEnter"), k.explicitlyCleared)) {
                        if (h.markedSpans) {
                            --i;
                            continue
                        }
                        break
                    }
                    if (!k.atomic)continue;
                    var l = k.find(0 > g ? -1 : 1);
                    if (0 == qb(l, f) && (l.ch += g, l.ch < 0 ? l = l.line > a.first ? zb(a, pb(l.line - 1)) : null : l.ch > h.text.length && (l = l.line < a.first + a.size - 1 ? pb(l.line + 1, 0) : null), !l)) {
                        if (e)return d ? (a.cantEdit = !0, pb(a.first, 0)) : Pb(a, b, c, !0);
                        e = !0, l = b, g = -g
                    }
                    f = l;
                    continue a
                }
            }
            return f
        }
    }

    function Qb(a) {
        for (var b = a.display, c = a.doc, d = {}, e = d.cursors = document.createDocumentFragment(), f = d.selection = document.createDocumentFragment(), g = 0; g < c.sel.ranges.length; g++) {
            var h = c.sel.ranges[g], i = h.empty();
            (i || a.options.showCursorWhenSelecting) && Tb(a, h, e), i || Ub(a, h, f)
        }
        if (a.options.moveInputWithCursor) {
            var j = wc(a, c.sel.primary().head, "div"), k = b.wrapper.getBoundingClientRect(), l = b.lineDiv.getBoundingClientRect();
            d.teTop = Math.max(0, Math.min(b.wrapper.clientHeight - 10, j.top + l.top - k.top)), d.teLeft = Math.max(0, Math.min(b.wrapper.clientWidth - 10, j.left + l.left - k.left))
        }
        return d
    }

    function Rb(a, b) {
        gh(a.display.cursorDiv, b.cursors), gh(a.display.selectionDiv, b.selection), null != b.teTop && (a.display.inputDiv.style.top = b.teTop + "px", a.display.inputDiv.style.left = b.teLeft + "px")
    }

    function Sb(a) {
        Rb(a, Qb(a))
    }

    function Tb(a, b, c) {
        var d = wc(a, b.head, "div", null, null, !a.options.singleCursorHeightPerLine), e = c.appendChild(dh("div", "\xa0", "CodeMirror-cursor"));
        if (e.style.left = d.left + "px", e.style.top = d.top + "px", e.style.height = Math.max(0, d.bottom - d.top) * a.options.cursorHeight + "px", d.other) {
            var f = c.appendChild(dh("div", "\xa0", "CodeMirror-cursor CodeMirror-secondarycursor"));
            f.style.display = "", f.style.left = d.other.left + "px", f.style.top = d.other.top + "px", f.style.height = .85 * (d.other.bottom - d.other.top) + "px"
        }
    }

    function Ub(a, b, c) {
        function j(a, b, c, d) {
            0 > b && (b = 0), b = Math.round(b), d = Math.round(d), f.appendChild(dh("div", null, "CodeMirror-selected", "position: absolute; left: " + a + "px; top: " + b + "px; width: " + (null == c ? i - a : c) + "px; height: " + (d - b) + "px"))
        }

        function k(b, c, d) {
            function m(c, d) {
                return vc(a, pb(b, c), "div", f, d)
            }

            var k, l, f = Xf(e, b), g = f.text.length;
            return Ch(cg(f), c || 0, null == d ? g : d, function (a, b, e) {
                var n, o, p, f = m(a, "left");
                if (a == b)n = f, o = p = f.left; else {
                    if (n = m(b - 1, "right"), "rtl" == e) {
                        var q = f;
                        f = n, n = q
                    }
                    o = f.left, p = n.right
                }
                null == c && 0 == a && (o = h), n.top - f.top > 3 && (j(o, f.top, null, f.bottom), o = h, f.bottom < n.top && j(o, f.bottom, null, n.top)), null == d && b == g && (p = i), (!k || f.top < k.top || f.top == k.top && f.left < k.left) && (k = f), (!l || n.bottom > l.bottom || n.bottom == l.bottom && n.right > l.right) && (l = n), h + 1 > o && (o = h), j(o, n.top, p - o, n.bottom)
            }), {start: k, end: l}
        }

        var d = a.display, e = a.doc, f = document.createDocumentFragment(), g = ac(a.display), h = g.left, i = Math.max(d.sizerWidth, cc(a) - d.sizer.offsetLeft) - g.right, l = b.from(), m = b.to();
        if (l.line == m.line)k(l.line, l.ch, m.ch); else {
            var n = Xf(e, l.line), o = Xf(e, m.line), p = hf(n) == hf(o), q = k(l.line, l.ch, p ? n.text.length + 1 : null).end, r = k(m.line, p ? 0 : null, m.ch).start;
            p && (q.top < r.top - 2 ? (j(q.right, q.top, null, q.bottom), j(h, r.top, r.left, r.bottom)) : j(q.right, q.top, r.left - q.right, q.bottom)), q.bottom < r.top && j(h, q.bottom, null, r.top)
        }
        c.appendChild(f)
    }

    function Vb(a) {
        if (a.state.focused) {
            var b = a.display;
            clearInterval(b.blinker);
            var c = !0;
            b.cursorDiv.style.visibility = "", a.options.cursorBlinkRate > 0 ? b.blinker = setInterval(function () {
                b.cursorDiv.style.visibility = (c = !c) ? "" : "hidden"
            }, a.options.cursorBlinkRate) : a.options.cursorBlinkRate < 0 && (b.cursorDiv.style.visibility = "hidden")
        }
    }

    function Wb(a, b) {
        a.doc.mode.startState && a.doc.frontier < a.display.viewTo && a.state.highlight.set(b, Yg(Xb, a))
    }

    function Xb(a) {
        var b = a.doc;
        if (b.frontier < b.first && (b.frontier = b.first), !(b.frontier >= a.display.viewTo)) {
            var c = +new Date + a.options.workTime, d = ye(b.mode, Zb(a, b.frontier)), e = [];
            b.iter(b.frontier, Math.min(b.first + b.size, a.display.viewTo + 500), function (f) {
                if (b.frontier >= a.display.viewFrom) {
                    var g = f.styles, h = Af(a, f, d, !0);
                    f.styles = h.styles;
                    var i = f.styleClasses, j = h.classes;
                    j ? f.styleClasses = j : i && (f.styleClasses = null);
                    for (var k = !g || g.length != f.styles.length || i != j && (!i || !j || i.bgClass != j.bgClass || i.textClass != j.textClass), l = 0; !k && l < g.length; ++l)k = g[l] != f.styles[l];
                    k && e.push(b.frontier), f.stateAfter = ye(b.mode, d)
                } else Cf(a, f.text, d), f.stateAfter = 0 == b.frontier % 5 ? ye(b.mode, d) : null;
                return ++b.frontier, +new Date > c ? (Wb(a, a.options.workDelay), !0) : void 0
            }), e.length && Pc(a, function () {
                for (var b = 0; b < e.length; b++)Wc(a, e[b], "text")
            })
        }
    }

    function Yb(a, b, c) {
        for (var d, e, f = a.doc, g = c ? -1 : b - (a.doc.mode.innerMode ? 1e3 : 100), h = b; h > g; --h) {
            if (h <= f.first)return f.first;
            var i = Xf(f, h - 1);
            if (i.stateAfter && (!c || h <= f.frontier))return h;
            var j = Og(i.text, null, a.options.tabSize);
            (null == e || d > j) && (e = h - 1, d = j)
        }
        return e
    }

    function Zb(a, b, c) {
        var d = a.doc, e = a.display;
        if (!d.mode.startState)return !0;
        var f = Yb(a, b, c), g = f > d.first && Xf(d, f - 1).stateAfter;
        return g = g ? ye(d.mode, g) : ze(d.mode), d.iter(f, b, function (c) {
            Cf(a, c.text, g);
            var h = f == b - 1 || 0 == f % 5 || f >= e.viewFrom && f < e.viewTo;
            c.stateAfter = h ? ye(d.mode, g) : null, ++f
        }), c && (d.frontier = f), g
    }

    function $b(a) {
        return a.lineSpace.offsetTop
    }

    function _b(a) {
        return a.mover.offsetHeight - a.lineSpace.offsetHeight
    }

    function ac(a) {
        if (a.cachedPaddingH)return a.cachedPaddingH;
        var b = gh(a.measure, dh("pre", "x")), c = window.getComputedStyle ? window.getComputedStyle(b) : b.currentStyle, d = {
            left: parseInt(c.paddingLeft),
            right: parseInt(c.paddingRight)
        };
        return isNaN(d.left) || isNaN(d.right) || (a.cachedPaddingH = d), d
    }

    function bc(a) {
        return Ig - a.display.nativeBarWidth
    }

    function cc(a) {
        return a.display.scroller.clientWidth - bc(a) - a.display.barWidth
    }

    function dc(a) {
        return a.display.scroller.clientHeight - bc(a) - a.display.barHeight
    }

    function ec(a, b, c) {
        var d = a.options.lineWrapping, e = d && cc(a);
        if (!b.measure.heights || d && b.measure.width != e) {
            var f = b.measure.heights = [];
            if (d) {
                b.measure.width = e;
                for (var g = b.text.firstChild.getClientRects(), h = 0; h < g.length - 1; h++) {
                    var i = g[h], j = g[h + 1];
                    Math.abs(i.bottom - j.bottom) > 2 && f.push((i.bottom + j.top) / 2 - c.top)
                }
            }
            f.push(c.bottom - c.top)
        }
    }

    function fc(a, b, c) {
        if (a.line == b)return {map: a.measure.map, cache: a.measure.cache};
        for (var d = 0; d < a.rest.length; d++)if (a.rest[d] == b)return {
            map: a.measure.maps[d],
            cache: a.measure.caches[d]
        };
        for (var d = 0; d < a.rest.length; d++)if (_f(a.rest[d]) > c)return {
            map: a.measure.maps[d],
            cache: a.measure.caches[d],
            before: !0
        }
    }

    function gc(a, b) {
        b = hf(b);
        var c = _f(b), d = a.display.externalMeasured = new Tc(a.doc, b, c);
        d.lineN = c;
        var e = d.built = Gf(a, d);
        return d.text = e.pre, gh(a.display.lineMeasure, e.pre), d
    }

    function hc(a, b, c, d) {
        return kc(a, jc(a, b), c, d)
    }

    function ic(a, b) {
        if (b >= a.display.viewFrom && b < a.display.viewTo)return a.display.view[Yc(a, b)];
        var c = a.display.externalMeasured;
        return c && b >= c.lineN && b < c.lineN + c.size ? c : void 0
    }

    function jc(a, b) {
        var c = _f(b), d = ic(a, c);
        d && !d.text ? d = null : d && d.changes && db(a, d, c, bb(a)), d || (d = gc(a, b));
        var e = fc(d, b, c);
        return {line: b, view: d, rect: null, map: e.map, cache: e.cache, before: e.before, hasHeights: !1}
    }

    function kc(a, b, c, d, e) {
        b.before && (c = -1);
        var g, f = c + (d || "");
        return b.cache.hasOwnProperty(f) ? g = b.cache[f] : (b.rect || (b.rect = b.view.text.getBoundingClientRect()), b.hasHeights || (ec(a, b.view, b.rect), b.hasHeights = !0), g = mc(a, b, c, d), g.bogus || (b.cache[f] = g)), {
            left: g.left,
            right: g.right,
            top: e ? g.rtop : g.top,
            bottom: e ? g.rbottom : g.bottom
        }
    }

    function mc(a, b, c, f) {
        for (var h, i, j, k, g = b.map, l = 0; l < g.length; l += 3) {
            var m = g[l], n = g[l + 1];
            if (m > c ? (i = 0, j = 1, k = "left") : n > c ? (i = c - m, j = i + 1) : (l == g.length - 3 || c == n && g[l + 3] > c) && (j = n - m, i = j - 1, c >= n && (k = "right")), null != i) {
                if (h = g[l + 2], m == n && f == (h.insertLeft ? "left" : "right") && (k = f), "left" == f && 0 == i)for (; l && g[l - 2] == g[l - 3] && g[l - 1].insertLeft;)h = g[(l -= 3) + 2], k = "left";
                if ("right" == f && i == n - m)for (; l < g.length - 3 && g[l + 3] == g[l + 4] && !g[l + 5].insertLeft;)h = g[(l += 3) + 2], k = "right";
                break
            }
        }
        var o;
        if (3 == h.nodeType) {
            for (var l = 0; 4 > l; l++) {
                for (; i && ch(b.line.text.charAt(m + i));)--i;
                for (; n > m + j && ch(b.line.text.charAt(m + j));)++j;
                if (d && 9 > e && 0 == i && j == n - m)o = h.parentNode.getBoundingClientRect(); else if (d && a.options.lineWrapping) {
                    var p = eh(h, i, j).getClientRects();
                    o = p.length ? p["right" == f ? p.length - 1 : 0] : lc
                } else o = eh(h, i, j).getBoundingClientRect() || lc;
                if (o.left || o.right || 0 == i)break;
                j = i, i -= 1, k = "right"
            }
            d && 11 > e && (o = nc(a.display.measure, o))
        } else {
            i > 0 && (k = f = "right");
            var p;
            o = a.options.lineWrapping && (p = h.getClientRects()).length > 1 ? p["right" == f ? p.length - 1 : 0] : h.getBoundingClientRect()
        }
        if (d && 9 > e && !i && (!o || !o.left && !o.right)) {
            var q = h.parentNode.getClientRects()[0];
            o = q ? {left: q.left, right: q.left + Dc(a.display), top: q.top, bottom: q.bottom} : lc
        }
        for (var r = o.top - b.rect.top, s = o.bottom - b.rect.top, t = (r + s) / 2, u = b.view.measure.heights, l = 0; l < u.length - 1 && !(t < u[l]); l++);
        var v = l ? u[l - 1] : 0, w = u[l], x = {
            left: ("right" == k ? o.right : o.left) - b.rect.left,
            right: ("left" == k ? o.left : o.right) - b.rect.left,
            top: v,
            bottom: w
        };
        return o.left || o.right || (x.bogus = !0), a.options.singleCursorHeightPerLine || (x.rtop = r, x.rbottom = s), x
    }

    function nc(a, b) {
        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Ah(a))return b;
        var c = screen.logicalXDPI / screen.deviceXDPI, d = screen.logicalYDPI / screen.deviceYDPI;
        return {left: b.left * c, right: b.right * c, top: b.top * d, bottom: b.bottom * d}
    }

    function oc(a) {
        if (a.measure && (a.measure.cache = {}, a.measure.heights = null, a.rest))for (var b = 0; b < a.rest.length; b++)a.measure.caches[b] = {}
    }

    function pc(a) {
        a.display.externalMeasure = null, fh(a.display.lineMeasure);
        for (var b = 0; b < a.display.view.length; b++)oc(a.display.view[b])
    }

    function qc(a) {
        pc(a), a.display.cachedCharWidth = a.display.cachedTextHeight = a.display.cachedPaddingH = null, a.options.lineWrapping || (a.display.maxLineChanged = !0), a.display.lineNumChars = null
    }

    function rc() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }

    function sc() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop
    }

    function tc(a, b, c, d) {
        if (b.widgets)for (var e = 0; e < b.widgets.length; ++e)if (b.widgets[e].above) {
            var f = qf(b.widgets[e]);
            c.top += f, c.bottom += f
        }
        if ("line" == d)return c;
        d || (d = "local");
        var g = bg(b);
        if ("local" == d ? g += $b(a.display) : g -= a.display.viewOffset, "page" == d || "window" == d) {
            var h = a.display.lineSpace.getBoundingClientRect();
            g += h.top + ("window" == d ? 0 : sc());
            var i = h.left + ("window" == d ? 0 : rc());
            c.left += i, c.right += i
        }
        return c.top += g, c.bottom += g, c
    }

    function uc(a, b, c) {
        if ("div" == c)return b;
        var d = b.left, e = b.top;
        if ("page" == c)d -= rc(), e -= sc(); else if ("local" == c || !c) {
            var f = a.display.sizer.getBoundingClientRect();
            d += f.left, e += f.top
        }
        var g = a.display.lineSpace.getBoundingClientRect();
        return {left: d - g.left, top: e - g.top}
    }

    function vc(a, b, c, d, e) {
        return d || (d = Xf(a.doc, b.line)), tc(a, d, hc(a, d, b.ch, e), c)
    }

    function wc(a, b, c, d, e, f) {
        function g(b, g) {
            var h = kc(a, e, b, g ? "right" : "left", f);
            return g ? h.left = h.right : h.right = h.left, tc(a, d, h, c)
        }

        function h(a, b) {
            var c = i[b], d = c.level % 2;
            return a == Dh(c) && b && c.level < i[b - 1].level ? (c = i[--b], a = Eh(c) - (c.level % 2 ? 0 : 1), d = !0) : a == Eh(c) && b < i.length - 1 && c.level < i[b + 1].level && (c = i[++b], a = Dh(c) - c.level % 2, d = !1), d && a == c.to && a > c.from ? g(a - 1) : g(a, d)
        }

        d = d || Xf(a.doc, b.line), e || (e = jc(a, d));
        var i = cg(d), j = b.ch;
        if (!i)return g(j);
        var k = Mh(i, j), l = h(j, k);
        return null != Lh && (l.other = h(j, Lh)), l
    }

    function xc(a, b) {
        var c = 0, b = zb(a.doc, b);
        a.options.lineWrapping || (c = Dc(a.display) * b.ch);
        var d = Xf(a.doc, b.line), e = bg(d) + $b(a.display);
        return {left: c, right: c, top: e, bottom: e + d.height}
    }

    function yc(a, b, c, d) {
        var e = pb(a, b);
        return e.xRel = d, c && (e.outside = !0), e
    }

    function zc(a, b, c) {
        var d = a.doc;
        if (c += a.display.viewOffset, 0 > c)return yc(d.first, 0, !0, -1);
        var e = ag(d, c), f = d.first + d.size - 1;
        if (e > f)return yc(d.first + d.size - 1, Xf(d, f).text.length, !0, 1);
        0 > b && (b = 0);
        for (var g = Xf(d, e); ;) {
            var h = Ac(a, g, e, b, c), i = ff(g), j = i && i.find(0, !0);
            if (!i || !(h.ch > j.from.ch || h.ch == j.from.ch && h.xRel > 0))return h;
            e = _f(g = j.to.line)
        }
    }

    function Ac(a, b, c, d, e) {
        function j(d) {
            var e = wc(a, pb(c, d), "line", b, i);
            return g = !0, f > e.bottom ? e.left - h : f < e.top ? e.left + h : (g = !1, e.left)
        }

        var f = e - bg(b), g = !1, h = 2 * a.display.wrapper.clientWidth, i = jc(a, b), k = cg(b), l = b.text.length, m = Fh(b), n = Gh(b), o = j(m), p = g, q = j(n), r = g;
        if (d > q)return yc(c, n, r, 1);
        for (; ;) {
            if (k ? n == m || n == Oh(b, m, 1) : 1 >= n - m) {
                for (var s = o > d || q - d >= d - o ? m : n, t = d - (s == m ? o : q); ch(b.text.charAt(s));)++s;
                var u = yc(c, s, s == m ? p : r, -1 > t ? -1 : t > 1 ? 1 : 0);
                return u
            }
            var v = Math.ceil(l / 2), w = m + v;
            if (k) {
                w = m;
                for (var x = 0; v > x; ++x)w = Oh(b, w, 1)
            }
            var y = j(w);
            y > d ? (n = w, q = y, (r = g) && (q += 1e3), l = v) : (m = w, o = y, p = g, l -= v)
        }
    }

    function Cc(a) {
        if (null != a.cachedTextHeight)return a.cachedTextHeight;
        if (null == Bc) {
            Bc = dh("pre");
            for (var b = 0; 49 > b; ++b)Bc.appendChild(document.createTextNode("x")), Bc.appendChild(dh("br"));
            Bc.appendChild(document.createTextNode("x"))
        }
        gh(a.measure, Bc);
        var c = Bc.offsetHeight / 50;
        return c > 3 && (a.cachedTextHeight = c), fh(a.measure), c || 1
    }

    function Dc(a) {
        if (null != a.cachedCharWidth)return a.cachedCharWidth;
        var b = dh("span", "xxxxxxxxxx"), c = dh("pre", [b]);
        gh(a.measure, c);
        var d = b.getBoundingClientRect(), e = (d.right - d.left) / 10;
        return e > 2 && (a.cachedCharWidth = e), e || 10
    }

    function Gc(a) {
        a.curOp = {
            cm: a,
            viewChanged: !1,
            startHeight: a.doc.height,
            forceUpdate: !1,
            updateInput: null,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            id: ++Fc
        }, Ec ? Ec.ops.push(a.curOp) : a.curOp.ownsGroup = Ec = {ops: [a.curOp], delayedCallbacks: []}
    }

    function Hc(a) {
        var b = a.delayedCallbacks, c = 0;
        do {
            for (; c < b.length; c++)b[c]();
            for (var d = 0; d < a.ops.length; d++) {
                var e = a.ops[d];
                if (e.cursorActivityHandlers)for (; e.cursorActivityCalled < e.cursorActivityHandlers.length;)e.cursorActivityHandlers[e.cursorActivityCalled++](e.cm)
            }
        } while (c < b.length)
    }

    function Ic(a) {
        var b = a.curOp, c = b.ownsGroup;
        if (c)try {
            Hc(c)
        } finally {
            Ec = null;
            for (var d = 0; d < c.ops.length; d++)c.ops[d].cm.curOp = null;
            Jc(c)
        }
    }

    function Jc(a) {
        for (var b = a.ops, c = 0; c < b.length; c++)Kc(b[c]);
        for (var c = 0; c < b.length; c++)Lc(b[c]);
        for (var c = 0; c < b.length; c++)Mc(b[c]);
        for (var c = 0; c < b.length; c++)Nc(b[c]);
        for (var c = 0; c < b.length; c++)Oc(b[c])
    }

    function Kc(a) {
        var b = a.cm, c = b.display;
        W(b), a.updateMaxLine && I(b), a.mustUpdate = a.viewChanged || a.forceUpdate || null != a.scrollTop || a.scrollToPos && (a.scrollToPos.from.line < c.viewFrom || a.scrollToPos.to.line >= c.viewTo) || c.maxLineChanged && b.options.lineWrapping, a.update = a.mustUpdate && new V(b, a.mustUpdate && {
                    top: a.scrollTop,
                    ensure: a.scrollToPos
                }, a.forceUpdate)
    }

    function Lc(a) {
        a.updatedDisplay = a.mustUpdate && X(a.cm, a.update)
    }

    function Mc(a) {
        var b = a.cm, c = b.display;
        a.updatedDisplay && _(b), a.barMeasure = K(b), c.maxLineChanged && !b.options.lineWrapping && (a.adjustWidthTo = hc(b, c.maxLine, c.maxLine.text.length).left + 3, b.display.sizerWidth = a.adjustWidthTo, a.barMeasure.scrollWidth = Math.max(c.scroller.clientWidth, c.sizer.offsetLeft + a.adjustWidthTo + bc(b) + b.display.barWidth), a.maxScrollLeft = Math.max(0, c.sizer.offsetLeft + a.adjustWidthTo - cc(b))), (a.updatedDisplay || a.selectionChanged) && (a.newSelectionNodes = Qb(b))
    }

    function Nc(a) {
        var b = a.cm;
        null != a.adjustWidthTo && (b.display.sizer.style.minWidth = a.adjustWidthTo + "px", a.maxScrollLeft < b.doc.scrollLeft && yd(b, Math.min(b.display.scroller.scrollLeft, a.maxScrollLeft), !0), b.display.maxLineChanged = !1), a.newSelectionNodes && Rb(b, a.newSelectionNodes), a.updatedDisplay && $(b, a.barMeasure), (a.updatedDisplay || a.startHeight != b.doc.height) && O(b, a.barMeasure), a.selectionChanged && Vb(b), b.state.focused && a.updateInput && ed(b, a.typing)
    }

    function Oc(a) {
        var b = a.cm, c = b.display, d = b.doc;
        if (a.updatedDisplay && Y(b, a.update), null == c.wheelStartX || null == a.scrollTop && null == a.scrollLeft && !a.scrollToPos || (c.wheelStartX = c.wheelStartY = null), null == a.scrollTop || c.scroller.scrollTop == a.scrollTop && !a.forceScroll || (d.scrollTop = Math.max(0, Math.min(c.scroller.scrollHeight - c.scroller.clientHeight, a.scrollTop)), c.scrollbars.setScrollTop(d.scrollTop), c.scroller.scrollTop = d.scrollTop), null == a.scrollLeft || c.scroller.scrollLeft == a.scrollLeft && !a.forceScroll || (d.scrollLeft = Math.max(0, Math.min(c.scroller.scrollWidth - cc(b), a.scrollLeft)), c.scrollbars.setScrollLeft(d.scrollLeft), c.scroller.scrollLeft = d.scrollLeft, R(b)), a.scrollToPos) {
            var e = ee(b, zb(d, a.scrollToPos.from), zb(d, a.scrollToPos.to), a.scrollToPos.margin);
            a.scrollToPos.isCursor && b.state.focused && de(b, e)
        }
        var f = a.maybeHiddenMarkers, g = a.maybeUnhiddenMarkers;
        if (f)for (var h = 0; h < f.length; ++h)f[h].lines.length || Ag(f[h], "hide");
        if (g)for (var h = 0; h < g.length; ++h)g[h].lines.length && Ag(g[h], "unhide");
        c.wrapper.offsetHeight && (d.scrollTop = b.display.scroller.scrollTop), a.changeObjs && Ag(b, "changes", b, a.changeObjs)
    }

    function Pc(a, b) {
        if (a.curOp)return b();
        Gc(a);
        try {
            return b()
        } finally {
            Ic(a)
        }
    }

    function Qc(a, b) {
        return function () {
            if (a.curOp)return b.apply(a, arguments);
            Gc(a);
            try {
                return b.apply(a, arguments)
            } finally {
                Ic(a)
            }
        }
    }

    function Rc(a) {
        return function () {
            if (this.curOp)return a.apply(this, arguments);
            Gc(this);
            try {
                return a.apply(this, arguments)
            } finally {
                Ic(this)
            }
        }
    }

    function Sc(a) {
        return function () {
            var b = this.cm;
            if (!b || b.curOp)return a.apply(this, arguments);
            Gc(b);
            try {
                return a.apply(this, arguments)
            } finally {
                Ic(b)
            }
        }
    }

    function Tc(a, b, c) {
        this.line = b, this.rest = jf(b), this.size = this.rest ? _f(Sg(this.rest)) - c + 1 : 1, this.node = this.text = null, this.hidden = mf(a, b)
    }

    function Uc(a, b, c) {
        for (var e, d = [], f = b; c > f; f = e) {
            var g = new Tc(a.doc, Xf(a.doc, f), f);
            e = f + g.size, d.push(g)
        }
        return d
    }

    function Vc(a, b, c, d) {
        null == b && (b = a.doc.first), null == c && (c = a.doc.first + a.doc.size), d || (d = 0);
        var e = a.display;
        if (d && c < e.viewTo && (null == e.updateLineNumbers || e.updateLineNumbers > b) && (e.updateLineNumbers = b), a.curOp.viewChanged = !0, b >= e.viewTo)v && kf(a.doc, b) < e.viewTo && Xc(a); else if (c <= e.viewFrom)v && lf(a.doc, c + d) > e.viewFrom ? Xc(a) : (e.viewFrom += d, e.viewTo += d); else if (b <= e.viewFrom && c >= e.viewTo)Xc(a); else if (b <= e.viewFrom) {
            var f = Zc(a, c, c + d, 1);
            f ? (e.view = e.view.slice(f.index), e.viewFrom = f.lineN, e.viewTo += d) : Xc(a)
        } else if (c >= e.viewTo) {
            var f = Zc(a, b, b, -1);
            f ? (e.view = e.view.slice(0, f.index), e.viewTo = f.lineN) : Xc(a)
        } else {
            var g = Zc(a, b, b, -1), h = Zc(a, c, c + d, 1);
            g && h ? (e.view = e.view.slice(0, g.index).concat(Uc(a, g.lineN, h.lineN)).concat(e.view.slice(h.index)), e.viewTo += d) : Xc(a)
        }
        var i = e.externalMeasured;
        i && (c < i.lineN ? i.lineN += d : b < i.lineN + i.size && (e.externalMeasured = null))
    }

    function Wc(a, b, c) {
        a.curOp.viewChanged = !0;
        var d = a.display, e = a.display.externalMeasured;
        if (e && b >= e.lineN && b < e.lineN + e.size && (d.externalMeasured = null), !(b < d.viewFrom || b >= d.viewTo)) {
            var f = d.view[Yc(a, b)];
            if (null != f.node) {
                var g = f.changes || (f.changes = []);
                -1 == Ug(g, c) && g.push(c)
            }
        }
    }

    function Xc(a) {
        a.display.viewFrom = a.display.viewTo = a.doc.first, a.display.view = [], a.display.viewOffset = 0
    }

    function Yc(a, b) {
        if (b >= a.display.viewTo)return null;
        if (b -= a.display.viewFrom, 0 > b)return null;
        for (var c = a.display.view, d = 0; d < c.length; d++)if (b -= c[d].size, 0 > b)return d
    }

    function Zc(a, b, c, d) {
        var f, e = Yc(a, b), g = a.display.view;
        if (!v || c == a.doc.first + a.doc.size)return {index: e, lineN: c};
        for (var h = 0, i = a.display.viewFrom; e > h; h++)i += g[h].size;
        if (i != b) {
            if (d > 0) {
                if (e == g.length - 1)return null;
                f = i + g[e].size - b, e++
            } else f = i - b;
            b += f, c += f
        }
        for (; kf(a.doc, c) != c;) {
            if (e == (0 > d ? 0 : g.length - 1))return null;
            c += d * g[e - (0 > d ? 1 : 0)].size, e += d
        }
        return {index: e, lineN: c}
    }

    function $c(a, b, c) {
        var d = a.display, e = d.view;
        0 == e.length || b >= d.viewTo || c <= d.viewFrom ? (d.view = Uc(a, b, c), d.viewFrom = b) : (d.viewFrom > b ? d.view = Uc(a, b, d.viewFrom).concat(d.view) : d.viewFrom < b && (d.view = d.view.slice(Yc(a, b))), d.viewFrom = b, d.viewTo < c ? d.view = d.view.concat(Uc(a, d.viewTo, c)) : d.viewTo > c && (d.view = d.view.slice(0, Yc(a, c)))), d.viewTo = c
    }

    function _c(a) {
        for (var b = a.display.view, c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            e.hidden || e.node && !e.changes || ++c
        }
        return c
    }

    function ad(a) {
        a.display.pollingFast || a.display.poll.set(a.options.pollInterval, function () {
            dd(a), a.state.focused && ad(a)
        })
    }

    function bd(a) {
        function c() {
            var d = dd(a);
            d || b ? (a.display.pollingFast = !1, ad(a)) : (b = !0, a.display.poll.set(60, c))
        }

        var b = !1;
        a.display.pollingFast = !0, a.display.poll.set(20, c)
    }

    function dd(a) {
        var b = a.display.input, c = a.display.prevInput, f = a.doc;
        if (!a.state.focused || xh(b) && !c || hd(a) || a.options.disableInput || a.state.keySeq)return !1;
        a.state.pasteIncoming && a.state.fakedLastChar && (b.value = b.value.substring(0, b.value.length - 1), a.state.fakedLastChar = !1);
        var g = b.value;
        if (g == c && !a.somethingSelected())return !1;
        if (d && e >= 9 && a.display.inputHasSelection === g || p && /[\uf700-\uf7ff]/.test(g))return ed(a), !1;
        var h = !a.curOp;
        h && Gc(a), a.display.shift = !1, 8203 != g.charCodeAt(0) || f.sel != a.display.selForContextMenu || c || (c = "\u200b");
        for (var i = 0, j = Math.min(c.length, g.length); j > i && c.charCodeAt(i) == g.charCodeAt(i);)++i;
        var k = g.slice(i), l = wh(k), m = null;
        a.state.pasteIncoming && f.sel.ranges.length > 1 && (cd && cd.join("\n") == k ? m = 0 == f.sel.ranges.length % cd.length && Vg(cd, wh) : l.length == f.sel.ranges.length && (m = Vg(l, function (a) {
            return [a]
        })));
        for (var n = f.sel.ranges.length - 1; n >= 0; n--) {
            var o = f.sel.ranges[n], q = o.from(), r = o.to();
            i < c.length ? q = pb(q.line, q.ch - (c.length - i)) : a.state.overwrite && o.empty() && !a.state.pasteIncoming && (r = pb(r.line, Math.min(Xf(f, r.line).text.length, r.ch + Sg(l).length)));
            var s = a.curOp.updateInput, t = {
                from: q,
                to: r,
                text: m ? m[n % m.length] : l,
                origin: a.state.pasteIncoming ? "paste" : a.state.cutIncoming ? "cut" : "+input"
            };
            if (Yd(a.doc, t), Cg(a, "inputRead", a, t), k && !a.state.pasteIncoming && a.options.electricChars && a.options.smartIndent && o.head.ch < 100 && (!n || f.sel.ranges[n - 1].head.line != o.head.line)) {
                var u = a.getModeAt(o.head), v = Sd(t);
                if (u.electricChars) {
                    for (var w = 0; w < u.electricChars.length; w++)if (k.indexOf(u.electricChars.charAt(w)) > -1) {
                        ke(a, v.line, "smart");
                        break
                    }
                } else u.electricInput && u.electricInput.test(Xf(f, v.line).text.slice(0, v.ch)) && ke(a, v.line, "smart")
            }
        }
        return ie(a), a.curOp.updateInput = s, a.curOp.typing = !0, g.length > 1e3 || g.indexOf("\n") > -1 ? b.value = a.display.prevInput = "" : a.display.prevInput = g, h && Ic(a), a.state.pasteIncoming = a.state.cutIncoming = !1, !0
    }

    function ed(a, b) {
        if (!a.display.contextMenuPending) {
            var c, f, g = a.doc;
            if (a.somethingSelected()) {
                a.display.prevInput = "";
                var h = g.sel.primary();
                c = yh && (h.to().line - h.from().line > 100 || (f = a.getSelection()).length > 1e3);
                var i = c ? "-" : f || a.getSelection();
                a.display.input.value = i, a.state.focused && Tg(a.display.input), d && e >= 9 && (a.display.inputHasSelection = i)
            } else b || (a.display.prevInput = a.display.input.value = "", d && e >= 9 && (a.display.inputHasSelection = null));
            a.display.inaccurateSelection = c
        }
    }

    function fd(a) {
        "nocursor" == a.options.readOnly || o && ih() == a.display.input || a.display.input.focus()
    }

    function gd(a) {
        a.state.focused || (fd(a), Od(a))
    }

    function hd(a) {
        return a.options.readOnly || a.doc.cantEdit
    }

    function id(a) {
        function c(b) {
            Eg(a, b) || vg(b)
        }

        function g(c) {
            if (a.somethingSelected())cd = a.getSelections(), b.inaccurateSelection && (b.prevInput = "", b.inaccurateSelection = !1, b.input.value = cd.join("\n"), Tg(b.input)); else {
                for (var d = [], e = [], f = 0; f < a.doc.sel.ranges.length; f++) {
                    var g = a.doc.sel.ranges[f].head.line, h = {anchor: pb(g, 0), head: pb(g + 1, 0)};
                    e.push(h), d.push(a.getRange(h.anchor, h.head))
                }
                "cut" == c.type ? a.setSelections(e, null, Kg) : (b.prevInput = "", b.input.value = d.join("\n"), Tg(b.input)), cd = d
            }
            "cut" == c.type && (a.state.cutIncoming = !0)
        }

        var b = a.display;
        yg(b.scroller, "mousedown", Qc(a, md)), d && 11 > e ? yg(b.scroller, "dblclick", Qc(a, function (b) {
            if (!Eg(a, b)) {
                var c = ld(a, b);
                if (c && !td(a, b) && !kd(a.display, b)) {
                    sg(b);
                    var d = a.findWordAt(c);
                    Eb(a.doc, d.anchor, d.head)
                }
            }
        })) : yg(b.scroller, "dblclick", function (b) {
            Eg(a, b) || sg(b)
        }), yg(b.lineSpace, "selectstart", function (a) {
            kd(b, a) || sg(a)
        }), t || yg(b.scroller, "contextmenu", function (b) {
            Qd(a, b)
        }), yg(b.scroller, "scroll", function () {
            b.scroller.clientHeight && (xd(a, b.scroller.scrollTop), yd(a, b.scroller.scrollLeft, !0), Ag(a, "scroll", a))
        }), yg(b.scroller, "mousewheel", function (b) {
            Cd(a, b)
        }), yg(b.scroller, "DOMMouseScroll", function (b) {
            Cd(a, b)
        }), yg(b.wrapper, "scroll", function () {
            b.wrapper.scrollTop = b.wrapper.scrollLeft = 0
        }), yg(b.input, "keyup", function (b) {
            Md.call(a, b)
        }), yg(b.input, "input", function () {
            d && e >= 9 && a.display.inputHasSelection && (a.display.inputHasSelection = null), dd(a)
        }), yg(b.input, "keydown", Qc(a, Kd)), yg(b.input, "keypress", Qc(a, Nd)), yg(b.input, "focus", Yg(Od, a)), yg(b.input, "blur", Yg(Pd, a)), a.options.dragDrop && (yg(b.scroller, "dragstart", function (b) {
            wd(a, b)
        }), yg(b.scroller, "dragenter", c), yg(b.scroller, "dragover", c), yg(b.scroller, "drop", Qc(a, vd))), yg(b.scroller, "paste", function (c) {
            kd(b, c) || (a.state.pasteIncoming = !0, fd(a), bd(a))
        }), yg(b.input, "paste", function () {
            if (f && !a.state.fakedLastChar && !(new Date - a.state.lastMiddleDown < 200)) {
                var c = b.input.selectionStart, d = b.input.selectionEnd;
                b.input.value += "$", b.input.selectionEnd = d, b.input.selectionStart = c, a.state.fakedLastChar = !0
            }
            a.state.pasteIncoming = !0, bd(a)
        }), yg(b.input, "cut", g), yg(b.input, "copy", g), k && yg(b.sizer, "mouseup", function () {
            ih() == b.input && b.input.blur(), fd(a)
        })
    }

    function jd(a) {
        var b = a.display;
        (b.lastWrapHeight != b.wrapper.clientHeight || b.lastWrapWidth != b.wrapper.clientWidth) && (b.cachedCharWidth = b.cachedTextHeight = b.cachedPaddingH = null, b.scrollbarsClipped = !1, a.setSize())
    }

    function kd(a, b) {
        for (var c = wg(b); c != a.wrapper; c = c.parentNode)if (!c || 1 == c.nodeType && "true" == c.getAttribute("cm-ignore-events") || c.parentNode == a.sizer && c != a.mover)return !0
    }

    function ld(a, b, c, d) {
        var e = a.display;
        if (!c && "true" == wg(b).getAttribute("not-content"))return null;
        var f, g, h = e.lineSpace.getBoundingClientRect();
        try {
            f = b.clientX - h.left, g = b.clientY - h.top
        } catch (b) {
            return null
        }
        var j, i = zc(a, f, g);
        if (d && 1 == i.xRel && (j = Xf(a.doc, i.line).text).length == i.ch) {
            var k = Og(j, j.length, a.options.tabSize) - j.length;
            i = pb(i.line, Math.max(0, Math.round((f - ac(a.display).left) / Dc(a.display)) - k))
        }
        return i
    }

    function md(a) {
        if (!Eg(this, a)) {
            var b = this, c = b.display;
            if (c.shift = a.shiftKey, kd(c, a))return f || (c.scroller.draggable = !1, setTimeout(function () {
                c.scroller.draggable = !0
            }, 100)), void 0;
            if (!td(b, a)) {
                var d = ld(b, a);
                switch (window.focus(), xg(a)) {
                    case 1:
                        d ? pd(b, a, d) : wg(a) == c.scroller && sg(a);
                        break;
                    case 2:
                        f && (b.state.lastMiddleDown = +new Date), d && Eb(b.doc, d), setTimeout(Yg(fd, b), 20), sg(a);
                        break;
                    case 3:
                        t && Qd(b, a)
                }
            }
        }
    }

    function pd(a, b, c) {
        setTimeout(Yg(gd, a), 0);
        var e, d = +new Date;
        od && od.time > d - 400 && 0 == qb(od.pos, c) ? e = "triple" : nd && nd.time > d - 400 && 0 == qb(nd.pos, c) ? (e = "double", od = {
            time: d,
            pos: c
        }) : (e = "single", nd = {time: d, pos: c});
        var h, f = a.doc.sel, g = p ? b.metaKey : b.ctrlKey;
        a.options.dragDrop && rh && !hd(a) && "single" == e && (h = f.contains(c)) > -1 && !f.ranges[h].empty() ? qd(a, b, c, g) : rd(a, b, c, e, g)
    }

    function qd(a, b, c, g) {
        var h = a.display, i = Qc(a, function (j) {
            f && (h.scroller.draggable = !1), a.state.draggingText = !1, zg(document, "mouseup", i), zg(h.scroller, "drop", i), Math.abs(b.clientX - j.clientX) + Math.abs(b.clientY - j.clientY) < 10 && (sg(j), g || Eb(a.doc, c), fd(a), d && 9 == e && setTimeout(function () {
                document.body.focus(), fd(a)
            }, 20))
        });
        f && (h.scroller.draggable = !0), a.state.draggingText = i, h.scroller.dragDrop && h.scroller.dragDrop(), yg(document, "mouseup", i), yg(h.scroller, "drop", i)
    }

    function rd(a, b, c, d, e) {
        function o(b) {
            if (0 != qb(n, b))if (n = b, "rect" == d) {
                for (var e = [], f = a.options.tabSize, k = Og(Xf(g, c.line).text, c.ch, f), l = Og(Xf(g, b.line).text, b.ch, f), m = Math.min(k, l), o = Math.max(k, l), p = Math.min(c.line, b.line), q = Math.min(a.lastLine(), Math.max(c.line, b.line)); q >= p; p++) {
                    var r = Xf(g, p).text, s = Pg(r, m, f);
                    m == o ? e.push(new vb(pb(p, s), pb(p, s))) : r.length > s && e.push(new vb(pb(p, s), pb(p, Pg(r, o, f))))
                }
                e.length || e.push(new vb(c, c)), Kb(g, wb(j.ranges.slice(0, i).concat(e), i), {
                    origin: "*mouse",
                    scroll: !1
                }), a.scrollIntoView(b)
            } else {
                var t = h, u = t.anchor, v = b;
                if ("single" != d) {
                    if ("double" == d)var w = a.findWordAt(b); else var w = new vb(pb(b.line, 0), zb(g, pb(b.line + 1, 0)));
                    qb(w.anchor, u) > 0 ? (v = w.head, u = tb(t.from(), w.anchor)) : (v = w.anchor, u = sb(t.to(), w.head))
                }
                var e = j.ranges.slice(0);
                e[i] = new vb(zb(g, u), v), Kb(g, wb(e, i), Lg)
            }
        }

        function r(b) {
            var c = ++q, e = ld(a, b, !0, "rect" == d);
            if (e)if (0 != qb(e, n)) {
                gd(a), o(e);
                var h = Q(f, g);
                (e.line >= h.to || e.line < h.from) && setTimeout(Qc(a, function () {
                    q == c && r(b)
                }), 150)
            } else {
                var i = b.clientY < p.top ? -20 : b.clientY > p.bottom ? 20 : 0;
                i && setTimeout(Qc(a, function () {
                    q == c && (f.scroller.scrollTop += i, r(b))
                }), 50)
            }
        }

        function s(b) {
            q = 1 / 0, sg(b), fd(a), zg(document, "mousemove", t), zg(document, "mouseup", u), g.history.lastSelOrigin = null
        }

        var f = a.display, g = a.doc;
        sg(b);
        var h, i, j = g.sel, k = j.ranges;
        if (e && !b.shiftKey ? (i = g.sel.contains(c), h = i > -1 ? k[i] : new vb(c, c)) : h = g.sel.primary(), b.altKey)d = "rect", e || (h = new vb(c, c)), c = ld(a, b, !0, !0), i = -1; else if ("double" == d) {
            var l = a.findWordAt(c);
            h = a.display.shift || g.extend ? Db(g, h, l.anchor, l.head) : l
        } else if ("triple" == d) {
            var m = new vb(pb(c.line, 0), zb(g, pb(c.line + 1, 0)));
            h = a.display.shift || g.extend ? Db(g, h, m.anchor, m.head) : m
        } else h = Db(g, h, c);
        e ? -1 == i ? (i = k.length, Kb(g, wb(k.concat([h]), i), {
            scroll: !1,
            origin: "*mouse"
        })) : k.length > 1 && k[i].empty() && "single" == d ? (Kb(g, wb(k.slice(0, i).concat(k.slice(i + 1)), 0)), j = g.sel) : Gb(g, i, h, Lg) : (i = 0, Kb(g, new ub([h], 0), Lg), j = g.sel);
        var n = c, p = f.wrapper.getBoundingClientRect(), q = 0, t = Qc(a, function (a) {
            xg(a) ? r(a) : s(a)
        }), u = Qc(a, s);
        yg(document, "mousemove", t), yg(document, "mouseup", u)
    }

    function sd(a, b, c, d, e) {
        try {
            var f = b.clientX, g = b.clientY
        } catch (b) {
            return !1
        }
        if (f >= Math.floor(a.display.gutters.getBoundingClientRect().right))return !1;
        d && sg(b);
        var h = a.display, i = h.lineDiv.getBoundingClientRect();
        if (g > i.bottom || !Gg(a, c))return ug(b);
        g -= i.top - h.viewOffset;
        for (var j = 0; j < a.options.gutters.length; ++j) {
            var k = h.gutters.childNodes[j];
            if (k && k.getBoundingClientRect().right >= f) {
                var l = ag(a.doc, g), m = a.options.gutters[j];
                return e(a, c, a, l, m, b), ug(b)
            }
        }
    }

    function td(a, b) {
        return sd(a, b, "gutterClick", !0, Cg)
    }

    function vd(a) {
        var b = this;
        if (!Eg(b, a) && !kd(b.display, a)) {
            sg(a), d && (ud = +new Date);
            var c = ld(b, a, !0), e = a.dataTransfer.files;
            if (c && !hd(b))if (e && e.length && window.FileReader && window.File)for (var f = e.length, g = Array(f), h = 0, i = function (a, d) {
                var e = new FileReader;
                e.onload = Qc(b, function () {
                    if (g[d] = e.result, ++h == f) {
                        c = zb(b.doc, c);
                        var a = {from: c, to: c, text: wh(g.join("\n")), origin: "paste"};
                        Yd(b.doc, a), Jb(b.doc, xb(c, Sd(a)))
                    }
                }), e.readAsText(a)
            }, j = 0; f > j; ++j)i(e[j], j); else {
                if (b.state.draggingText && b.doc.sel.contains(c) > -1)return b.state.draggingText(a), setTimeout(Yg(fd, b), 20), void 0;
                try {
                    var g = a.dataTransfer.getData("Text");
                    if (g) {
                        if (b.state.draggingText && !(p ? a.metaKey : a.ctrlKey))var k = b.listSelections();
                        if (Lb(b.doc, xb(c, c)), k)for (var j = 0; j < k.length; ++j)ce(b.doc, "", k[j].anchor, k[j].head, "drag");
                        b.replaceSelection(g, "around", "paste"), fd(b)
                    }
                } catch (a) {
                }
            }
        }
    }

    function wd(a, b) {
        if (d && (!a.state.draggingText || +new Date - ud < 100))return vg(b), void 0;
        if (!Eg(a, b) && !kd(a.display, b) && (b.dataTransfer.setData("Text", a.getSelection()), b.dataTransfer.setDragImage && !j)) {
            var c = dh("img", null, null, "position: fixed; left: 0; top: 0;");
            c.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", i && (c.width = c.height = 1, a.display.wrapper.appendChild(c), c._top = c.offsetTop), b.dataTransfer.setDragImage(c, 0, 0), i && c.parentNode.removeChild(c)
        }
    }

    function xd(b, c) {
        Math.abs(b.doc.scrollTop - c) < 2 || (b.doc.scrollTop = c, a || Z(b, {top: c}), b.display.scroller.scrollTop != c && (b.display.scroller.scrollTop = c), b.display.scrollbars.setScrollTop(c), a && Z(b), Wb(b, 100))
    }

    function yd(a, b, c) {
        (c ? b == a.doc.scrollLeft : Math.abs(a.doc.scrollLeft - b) < 2) || (b = Math.min(b, a.display.scroller.scrollWidth - a.display.scroller.clientWidth), a.doc.scrollLeft = b, R(a), a.display.scroller.scrollLeft != b && (a.display.scroller.scrollLeft = b), a.display.scrollbars.setScrollLeft(b))
    }

    function Cd(b, c) {
        var d = Bd(c), e = d.x, g = d.y, h = b.display, j = h.scroller;
        if (e && j.scrollWidth > j.clientWidth || g && j.scrollHeight > j.clientHeight) {
            if (g && p && f)a:for (var k = c.target, l = h.view; k != j; k = k.parentNode)for (var m = 0; m < l.length; m++)if (l[m].node == k) {
                b.display.currentWheelTarget = k;
                break a
            }
            if (e && !a && !i && null != Ad)return g && xd(b, Math.max(0, Math.min(j.scrollTop + g * Ad, j.scrollHeight - j.clientHeight))), yd(b, Math.max(0, Math.min(j.scrollLeft + e * Ad, j.scrollWidth - j.clientWidth))), sg(c), h.wheelStartX = null, void 0;
            if (g && null != Ad) {
                var n = g * Ad, o = b.doc.scrollTop, q = o + h.wrapper.clientHeight;
                0 > n ? o = Math.max(0, o + n - 50) : q = Math.min(b.doc.height, q + n + 50), Z(b, {top: o, bottom: q})
            }
            20 > zd && (null == h.wheelStartX ? (h.wheelStartX = j.scrollLeft, h.wheelStartY = j.scrollTop, h.wheelDX = e, h.wheelDY = g, setTimeout(function () {
                if (null != h.wheelStartX) {
                    var a = j.scrollLeft - h.wheelStartX, b = j.scrollTop - h.wheelStartY, c = b && h.wheelDY && b / h.wheelDY || a && h.wheelDX && a / h.wheelDX;
                    h.wheelStartX = h.wheelStartY = null, c && (Ad = (Ad * zd + c) / (zd + 1), ++zd)
                }
            }, 200)) : (h.wheelDX += e, h.wheelDY += g))
        }
    }

    function Dd(a, b, c) {
        if ("string" == typeof b && (b = Ae[b], !b))return !1;
        a.display.pollingFast && dd(a) && (a.display.pollingFast = !1);
        var d = a.display.shift, e = !1;
        try {
            hd(a) && (a.state.suppressEdits = !0), c && (a.display.shift = !1), e = b(a) != Jg
        } finally {
            a.display.shift = d, a.state.suppressEdits = !1
        }
        return e
    }

    function Ed(a, b, c) {
        for (var d = 0; d < a.state.keyMaps.length; d++) {
            var e = De(b, a.state.keyMaps[d], c, a);
            if (e)return e
        }
        return a.options.extraKeys && De(b, a.options.extraKeys, c, a) || De(b, a.options.keyMap, c, a)
    }

    function Gd(a, b, c, d) {
        var e = a.state.keySeq;
        if (e) {
            if (Ee(b))return "handled";
            Fd.set(50, function () {
                a.state.keySeq == e && (a.state.keySeq = null, ed(a))
            }), b = e + " " + b
        }
        var f = Ed(a, b, d);
        return "multi" == f && (a.state.keySeq = b), "handled" == f && Cg(a, "keyHandled", a, b, c), ("handled" == f || "multi" == f) && (sg(c), Vb(a)), e && !f && /\'$/.test(b) ? (sg(c), !0) : !!f
    }

    function Hd(a, b) {
        var c = Fe(b, !0);
        return c ? b.shiftKey && !a.state.keySeq ? Gd(a, "Shift-" + c, b, function (b) {
            return Dd(a, b, !0)
        }) || Gd(a, c, b, function (b) {
            return ("string" == typeof b ? /^go[A-Z]/.test(b) : b.motion) ? Dd(a, b) : void 0
        }) : Gd(a, c, b, function (b) {
            return Dd(a, b)
        }) : !1
    }

    function Id(a, b, c) {
        return Gd(a, "'" + c + "'", b, function (b) {
            return Dd(a, b, !0)
        })
    }

    function Kd(a) {
        var b = this;
        if (gd(b), !Eg(b, a)) {
            d && 11 > e && 27 == a.keyCode && (a.returnValue = !1);
            var c = a.keyCode;
            b.display.shift = 16 == c || a.shiftKey;
            var f = Hd(b, a);
            i && (Jd = f ? c : null, !f && 88 == c && !yh && (p ? a.metaKey : a.ctrlKey) && b.replaceSelection("", null, "cut")), 18 != c || /\bCodeMirror-crosshair\b/.test(b.display.lineDiv.className) || Ld(b)
        }
    }

    function Ld(a) {
        function c(a) {
            18 != a.keyCode && a.altKey || (kh(b, "CodeMirror-crosshair"), zg(document, "keyup", c), zg(document, "mouseover", c))
        }

        var b = a.display.lineDiv;
        lh(b, "CodeMirror-crosshair"), yg(document, "keyup", c), yg(document, "mouseover", c)
    }

    function Md(a) {
        16 == a.keyCode && (this.doc.sel.shift = !1), Eg(this, a)
    }

    function Nd(a) {
        var b = this;
        if (!(Eg(b, a) || a.ctrlKey && !a.altKey || p && a.metaKey)) {
            var c = a.keyCode, f = a.charCode;
            if (i && c == Jd)return Jd = null, sg(a), void 0;
            if (!(i && (!a.which || a.which < 10) || k) || !Hd(b, a)) {
                var g = String.fromCharCode(null == f ? c : f);
                Id(b, a, g) || (d && e >= 9 && (b.display.inputHasSelection = null), bd(b))
            }
        }
    }

    function Od(a) {
        "nocursor" != a.options.readOnly && (a.state.focused || (Ag(a, "focus", a), a.state.focused = !0, lh(a.display.wrapper, "CodeMirror-focused"), a.curOp || a.display.selForContextMenu == a.doc.sel || (ed(a), f && setTimeout(Yg(ed, a, !0), 0))), ad(a), Vb(a))
    }

    function Pd(a) {
        a.state.focused && (Ag(a, "blur", a), a.state.focused = !1, kh(a.display.wrapper, "CodeMirror-focused")), clearInterval(a.display.blinker), setTimeout(function () {
            a.state.focused || (a.display.shift = !1)
        }, 150)
    }

    function Qd(a, b) {
        function m() {
            if (null != c.input.selectionStart) {
                var b = a.somethingSelected(), d = c.input.value = "\u200b" + (b ? c.input.value : "");
                c.prevInput = b ? "" : "\u200b", c.input.selectionStart = 1, c.input.selectionEnd = d.length, c.selForContextMenu = a.doc.sel
            }
        }

        function n() {
            if (c.contextMenuPending = !1, c.inputDiv.style.position = "relative", c.input.style.cssText = k, d && 9 > e && c.scrollbars.setScrollTop(c.scroller.scrollTop = h), ad(a), null != c.input.selectionStart) {
                (!d || d && 9 > e) && m();
                var b = 0, f = function () {
                    c.selForContextMenu == a.doc.sel && 0 == c.input.selectionStart ? Qc(a, Ae.selectAll)(a) : b++ < 10 ? c.detectingSelectAll = setTimeout(f, 500) : ed(a)
                };
                c.detectingSelectAll = setTimeout(f, 200)
            }
        }

        if (!Eg(a, b, "contextmenu")) {
            var c = a.display;
            if (!kd(c, b) && !Rd(a, b)) {
                var g = ld(a, b), h = c.scroller.scrollTop;
                if (g && !i) {
                    var j = a.options.resetSelectionOnContextMenu;
                    j && -1 == a.doc.sel.contains(g) && Qc(a, Kb)(a.doc, xb(g), Kg);
                    var k = c.input.style.cssText;
                    if (c.inputDiv.style.position = "absolute", c.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (b.clientY - 5) + "px; left: " + (b.clientX - 5) + "px; z-index: 1000; background: " + (d ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", f)var l = window.scrollY;
                    if (fd(a), f && window.scrollTo(null, l), ed(a), a.somethingSelected() || (c.input.value = c.prevInput = " "), c.contextMenuPending = !0, c.selForContextMenu = a.doc.sel, clearTimeout(c.detectingSelectAll), d && e >= 9 && m(), t) {
                        vg(b);
                        var o = function () {
                            zg(window, "mouseup", o), setTimeout(n, 20)
                        };
                        yg(window, "mouseup", o)
                    } else setTimeout(n, 50)
                }
            }
        }
    }

    function Rd(a, b) {
        return Gg(a, "gutterContextMenu") ? sd(a, b, "gutterContextMenu", !1, Ag) : !1
    }

    function Td(a, b) {
        if (qb(a, b.from) < 0)return a;
        if (qb(a, b.to) <= 0)return Sd(b);
        var c = a.line + b.text.length - (b.to.line - b.from.line) - 1, d = a.ch;
        return a.line == b.to.line && (d += Sd(b).ch - b.to.ch), pb(c, d)
    }

    function Ud(a, b) {
        for (var c = [], d = 0; d < a.sel.ranges.length; d++) {
            var e = a.sel.ranges[d];
            c.push(new vb(Td(e.anchor, b), Td(e.head, b)))
        }
        return wb(c, a.sel.primIndex)
    }

    function Vd(a, b, c) {
        return a.line == b.line ? pb(c.line, a.ch - b.ch + c.ch) : pb(c.line + (a.line - b.line), a.ch)
    }

    function Wd(a, b, c) {
        for (var d = [], e = pb(a.first, 0), f = e, g = 0; g < b.length; g++) {
            var h = b[g], i = Vd(h.from, e, f), j = Vd(Sd(h), e, f);
            if (e = h.to, f = j, "around" == c) {
                var k = a.sel.ranges[g], l = qb(k.head, k.anchor) < 0;
                d[g] = new vb(l ? j : i, l ? i : j)
            } else d[g] = new vb(i, i)
        }
        return new ub(d, a.sel.primIndex)
    }

    function Xd(a, b, c) {
        var d = {
            canceled: !1, from: b.from, to: b.to, text: b.text, origin: b.origin, cancel: function () {
                this.canceled = !0
            }
        };
        return c && (d.update = function (b, c, d, e) {
            b && (this.from = zb(a, b)), c && (this.to = zb(a, c)), d && (this.text = d), void 0 !== e && (this.origin = e)
        }), Ag(a, "beforeChange", a, d), a.cm && Ag(a.cm, "beforeChange", a.cm, d), d.canceled ? null : {
            from: d.from,
            to: d.to,
            text: d.text,
            origin: d.origin
        }
    }

    function Yd(a, b, c) {
        if (a.cm) {
            if (!a.cm.curOp)return Qc(a.cm, Yd)(a, b, c);
            if (a.cm.state.suppressEdits)return
        }
        if (!(Gg(a, "beforeChange") || a.cm && Gg(a.cm, "beforeChange")) || (b = Xd(a, b, !0))) {
            var d = u && !c && Ze(a, b.from, b.to);
            if (d)for (var e = d.length - 1; e >= 0; --e)Zd(a, {
                from: d[e].from,
                to: d[e].to,
                text: e ? [""] : b.text
            }); else Zd(a, b)
        }
    }

    function Zd(a, b) {
        if (1 != b.text.length || "" != b.text[0] || 0 != qb(b.from, b.to)) {
            var c = Ud(a, b);
            hg(a, b, c, a.cm ? a.cm.curOp.id : 0 / 0), ae(a, b, c, We(a, b));
            var d = [];
            Vf(a, function (a, c) {
                c || -1 != Ug(d, a.history) || (rg(a.history, b), d.push(a.history)), ae(a, b, null, We(a, b))
            })
        }
    }

    function $d(a, b, c) {
        if (!a.cm || !a.cm.state.suppressEdits) {
            for (var e, d = a.history, f = a.sel, g = "undo" == b ? d.done : d.undone, h = "undo" == b ? d.undone : d.done, i = 0; i < g.length && (e = g[i], c ? !e.ranges || e.equals(a.sel) : e.ranges); i++);
            if (i != g.length) {
                for (d.lastOrigin = d.lastSelOrigin = null; e = g.pop(), e.ranges;) {
                    if (kg(e, h), c && !e.equals(a.sel))return Kb(a, e, {clearRedo: !1}), void 0;
                    f = e
                }
                var j = [];
                kg(f, h), h.push({
                    changes: j,
                    generation: d.generation
                }), d.generation = e.generation || ++d.maxGeneration;
                for (var k = Gg(a, "beforeChange") || a.cm && Gg(a.cm, "beforeChange"), i = e.changes.length - 1; i >= 0; --i) {
                    var l = e.changes[i];
                    if (l.origin = b, k && !Xd(a, l, !1))return g.length = 0, void 0;
                    j.push(eg(a, l));
                    var m = i ? Ud(a, l) : Sg(g);
                    ae(a, l, m, Ye(a, l)), !i && a.cm && a.cm.scrollIntoView({from: l.from, to: Sd(l)});
                    var n = [];
                    Vf(a, function (a, b) {
                        b || -1 != Ug(n, a.history) || (rg(a.history, l), n.push(a.history)), ae(a, l, null, Ye(a, l))
                    })
                }
            }
        }
    }

    function _d(a, b) {
        if (0 != b && (a.first += b, a.sel = new ub(Vg(a.sel.ranges, function (a) {
                return new vb(pb(a.anchor.line + b, a.anchor.ch), pb(a.head.line + b, a.head.ch))
            }), a.sel.primIndex), a.cm)) {
            Vc(a.cm, a.first, a.first - b, b);
            for (var c = a.cm.display, d = c.viewFrom; d < c.viewTo; d++)Wc(a.cm, d, "gutter")
        }
    }

    function ae(a, b, c, d) {
        if (a.cm && !a.cm.curOp)return Qc(a.cm, ae)(a, b, c, d);
        if (b.to.line < a.first)return _d(a, b.text.length - 1 - (b.to.line - b.from.line)), void 0;
        if (!(b.from.line > a.lastLine())) {
            if (b.from.line < a.first) {
                var e = b.text.length - 1 - (a.first - b.from.line);
                _d(a, e), b = {
                    from: pb(a.first, 0),
                    to: pb(b.to.line + e, b.to.ch),
                    text: [Sg(b.text)],
                    origin: b.origin
                }
            }
            var f = a.lastLine();
            b.to.line > f && (b = {
                from: b.from,
                to: pb(f, Xf(a, f).text.length),
                text: [b.text[0]],
                origin: b.origin
            }), b.removed = Yf(a, b.from, b.to), c || (c = Ud(a, b)), a.cm ? be(a.cm, b, d) : Of(a, b, d), Lb(a, c, Kg)
        }
    }

    function be(a, b, c) {
        var d = a.doc, e = a.display, f = b.from, g = b.to, h = !1, i = f.line;
        a.options.lineWrapping || (i = _f(hf(Xf(d, f.line))), d.iter(i, g.line + 1, function (a) {
            return a == e.maxLine ? (h = !0, !0) : void 0
        })), d.sel.contains(b.from, b.to) > -1 && Fg(a), Of(d, b, c, B(a)), a.options.lineWrapping || (d.iter(i, f.line + b.text.length, function (a) {
            var b = H(a);
            b > e.maxLineLength && (e.maxLine = a, e.maxLineLength = b, e.maxLineChanged = !0, h = !1)
        }), h && (a.curOp.updateMaxLine = !0)), d.frontier = Math.min(d.frontier, f.line), Wb(a, 400);
        var j = b.text.length - (g.line - f.line) - 1;
        b.full ? Vc(a) : f.line != g.line || 1 != b.text.length || Nf(a.doc, b) ? Vc(a, f.line, g.line + 1, j) : Wc(a, f.line, "text");
        var k = Gg(a, "changes"), l = Gg(a, "change");
        if (l || k) {
            var m = {from: f, to: g, text: b.text, removed: b.removed, origin: b.origin};
            l && Cg(a, "change", a, m), k && (a.curOp.changeObjs || (a.curOp.changeObjs = [])).push(m)
        }
        a.display.selForContextMenu = null
    }

    function ce(a, b, c, d, e) {
        if (d || (d = c), qb(d, c) < 0) {
            var f = d;
            d = c, c = f
        }
        "string" == typeof b && (b = wh(b)), Yd(a, {from: c, to: d, text: b, origin: e})
    }

    function de(a, b) {
        if (!Eg(a, "scrollCursorIntoView")) {
            var c = a.display, d = c.sizer.getBoundingClientRect(), e = null;
            if (b.top + d.top < 0 ? e = !0 : b.bottom + d.top > (window.innerHeight || document.documentElement.clientHeight) && (e = !1), null != e && !m) {
                var f = dh("div", "\u200b", null, "position: absolute; top: " + (b.top - c.viewOffset - $b(a.display)) + "px; height: " + (b.bottom - b.top + bc(a) + c.barHeight) + "px; left: " + b.left + "px; width: 2px;");
                a.display.lineSpace.appendChild(f), f.scrollIntoView(e), a.display.lineSpace.removeChild(f)
            }
        }
    }

    function ee(a, b, c, d) {
        null == d && (d = 0);
        for (var e = 0; 5 > e; e++) {
            var f = !1, g = wc(a, b), h = c && c != b ? wc(a, c) : g, i = ge(a, Math.min(g.left, h.left), Math.min(g.top, h.top) - d, Math.max(g.left, h.left), Math.max(g.bottom, h.bottom) + d), j = a.doc.scrollTop, k = a.doc.scrollLeft;
            if (null != i.scrollTop && (xd(a, i.scrollTop), Math.abs(a.doc.scrollTop - j) > 1 && (f = !0)), null != i.scrollLeft && (yd(a, i.scrollLeft), Math.abs(a.doc.scrollLeft - k) > 1 && (f = !0)), !f)break
        }
        return g
    }

    function fe(a, b, c, d, e) {
        var f = ge(a, b, c, d, e);
        null != f.scrollTop && xd(a, f.scrollTop), null != f.scrollLeft && yd(a, f.scrollLeft)
    }

    function ge(a, b, c, d, e) {
        var f = a.display, g = Cc(a.display);
        0 > c && (c = 0);
        var h = a.curOp && null != a.curOp.scrollTop ? a.curOp.scrollTop : f.scroller.scrollTop, i = dc(a), j = {};
        e - c > i && (e = c + i);
        var k = a.doc.height + _b(f), l = g > c, m = e > k - g;
        if (h > c)j.scrollTop = l ? 0 : c; else if (e > h + i) {
            var n = Math.min(c, (m ? k : e) - i);
            n != h && (j.scrollTop = n)
        }
        var o = a.curOp && null != a.curOp.scrollLeft ? a.curOp.scrollLeft : f.scroller.scrollLeft, p = cc(a) - (a.options.fixedGutter ? f.gutters.offsetWidth : 0), q = d - b > p;
        return q && (d = b + p), 10 > b ? j.scrollLeft = 0 : o > b ? j.scrollLeft = Math.max(0, b - (q ? 0 : 10)) : d > p + o - 3 && (j.scrollLeft = d + (q ? 0 : 10) - p), j
    }

    function he(a, b, c) {
        (null != b || null != c) && je(a), null != b && (a.curOp.scrollLeft = (null == a.curOp.scrollLeft ? a.doc.scrollLeft : a.curOp.scrollLeft) + b), null != c && (a.curOp.scrollTop = (null == a.curOp.scrollTop ? a.doc.scrollTop : a.curOp.scrollTop) + c)
    }

    function ie(a) {
        je(a);
        var b = a.getCursor(), c = b, d = b;
        a.options.lineWrapping || (c = b.ch ? pb(b.line, b.ch - 1) : b, d = pb(b.line, b.ch + 1)), a.curOp.scrollToPos = {
            from: c,
            to: d,
            margin: a.options.cursorScrollMargin,
            isCursor: !0
        }
    }

    function je(a) {
        var b = a.curOp.scrollToPos;
        if (b) {
            a.curOp.scrollToPos = null;
            var c = xc(a, b.from), d = xc(a, b.to), e = ge(a, Math.min(c.left, d.left), Math.min(c.top, d.top) - b.margin, Math.max(c.right, d.right), Math.max(c.bottom, d.bottom) + b.margin);
            a.scrollTo(e.scrollLeft, e.scrollTop)
        }
    }

    function ke(a, b, c, d) {
        var f, e = a.doc;
        null == c && (c = "add"), "smart" == c && (e.mode.indent ? f = Zb(a, b) : c = "prev");
        var g = a.options.tabSize, h = Xf(e, b), i = Og(h.text, null, g);
        h.stateAfter && (h.stateAfter = null);
        var k, j = h.text.match(/^\s*/)[0];
        if (d || /\S/.test(h.text)) {
            if ("smart" == c && (k = e.mode.indent(f, h.text.slice(j.length), h.text), k == Jg || k > 150)) {
                if (!d)return;
                c = "prev"
            }
        } else k = 0, c = "not";
        "prev" == c ? k = b > e.first ? Og(Xf(e, b - 1).text, null, g) : 0 : "add" == c ? k = i + a.options.indentUnit : "subtract" == c ? k = i - a.options.indentUnit : "number" == typeof c && (k = i + c), k = Math.max(0, k);
        var l = "", m = 0;
        if (a.options.indentWithTabs)for (var n = Math.floor(k / g); n; --n)m += g, l += "	";
        if (k > m && (l += Rg(k - m)), l != j)ce(e, l, pb(b, 0), pb(b, j.length), "+input"); else for (var n = 0; n < e.sel.ranges.length; n++) {
            var o = e.sel.ranges[n];
            if (o.head.line == b && o.head.ch < j.length) {
                var m = pb(b, j.length);
                Gb(e, n, new vb(m, m));
                break
            }
        }
        h.stateAfter = null
    }

    function le(a, b, c, d) {
        var e = b, f = b;
        return "number" == typeof b ? f = Xf(a, yb(a, b)) : e = _f(b), null == e ? null : (d(f, e) && a.cm && Wc(a.cm, e, c), f)
    }

    function me(a, b) {
        for (var c = a.doc.sel.ranges, d = [], e = 0; e < c.length; e++) {
            for (var f = b(c[e]); d.length && qb(f.from, Sg(d).to) <= 0;) {
                var g = d.pop();
                if (qb(g.from, f.from) < 0) {
                    f.from = g.from;
                    break
                }
            }
            d.push(f)
        }
        Pc(a, function () {
            for (var b = d.length - 1; b >= 0; b--)ce(a.doc, "", d[b].from, d[b].to, "+delete");
            ie(a)
        })
    }

    function ne(a, b, c, d, e) {
        function k() {
            var b = f + c;
            return b < a.first || b >= a.first + a.size ? j = !1 : (f = b, i = Xf(a, b))
        }

        function l(a) {
            var b = (e ? Oh : Ph)(i, g, c, !0);
            if (null == b) {
                if (a || !k())return j = !1;
                g = e ? (0 > c ? Gh : Fh)(i) : 0 > c ? i.text.length : 0
            } else g = b;
            return !0
        }

        var f = b.line, g = b.ch, h = c, i = Xf(a, f), j = !0;
        if ("char" == d)l(); else if ("column" == d)l(!0); else if ("word" == d || "group" == d)for (var m = null, n = "group" == d, o = a.cm && a.cm.getHelper(b, "wordChars"), p = !0; !(0 > c) || l(!p); p = !1) {
            var q = i.text.charAt(g) || "\n", r = _g(q, o) ? "w" : n && "\n" == q ? "n" : !n || /\s/.test(q) ? null : "p";
            if (!n || p || r || (r = "s"), m && m != r) {
                0 > c && (c = 1, l());
                break
            }
            if (r && (m = r), c > 0 && !l(!p))break
        }
        var s = Pb(a, pb(f, g), h, !0);
        return j || (s.hitSide = !0), s
    }

    function oe(a, b, c, d) {
        var g, e = a.doc, f = b.left;
        if ("page" == d) {
            var h = Math.min(a.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            g = b.top + c * (h - (0 > c ? 1.5 : .5) * Cc(a.display))
        } else"line" == d && (g = c > 0 ? b.bottom + 3 : b.top - 3);
        for (; ;) {
            var i = zc(a, f, g);
            if (!i.outside)break;
            if (0 > c ? 0 >= g : g >= e.height) {
                i.hitSide = !0;
                break
            }
            g += 5 * c
        }
        return i
    }

    function re(a, b, c, d) {
        w.defaults[a] = b, c && (qe[a] = d ? function (a, b, d) {
            d != se && c(a, b, d)
        } : c)
    }

    function Ce(a) {
        for (var c, d, e, f, b = a.split(/-(?!$)/), a = b[b.length - 1], g = 0; g < b.length - 1; g++) {
            var h = b[g];
            if (/^(cmd|meta|m)$/i.test(h))f = !0; else if (/^a(lt)?$/i.test(h))c = !0;
            else if (/^(c|ctrl|control)$/i.test(h))d = !0; else {
                if (!/^s(hift)$/i.test(h))throw new Error("Unrecognized modifier name: " + h);
                e = !0
            }
        }
        return c && (a = "Alt-" + a), d && (a = "Ctrl-" + a), f && (a = "Cmd-" + a), e && (a = "Shift-" + a), a
    }

    function Ge(a) {
        return "string" == typeof a ? Be[a] : a
    }

    function Ke(a, b, c, d, e) {
        if (d && d.shared)return Me(a, b, c, d, e);
        if (a.cm && !a.cm.curOp)return Qc(a.cm, Ke)(a, b, c, d, e);
        var f = new Ie(a, e), g = qb(b, c);
        if (d && Xg(d, f, !1), g > 0 || 0 == g && f.clearWhenEmpty !== !1)return f;
        if (f.replacedWith && (f.collapsed = !0, f.widgetNode = dh("span", [f.replacedWith], "CodeMirror-widget"), d.handleMouseEvents || f.widgetNode.setAttribute("cm-ignore-events", "true"), d.insertLeft && (f.widgetNode.insertLeft = !0)), f.collapsed) {
            if (gf(a, b.line, b, c, f) || b.line != c.line && gf(a, c.line, b, c, f))throw new Error("Inserting collapsed marker partially overlapping an existing one");
            v = !0
        }
        f.addToHistory && hg(a, {from: b, to: c, origin: "markText"}, a.sel, 0 / 0);
        var j, h = b.line, i = a.cm;
        if (a.iter(h, c.line + 1, function (a) {
                i && f.collapsed && !i.options.lineWrapping && hf(a) == i.display.maxLine && (j = !0), f.collapsed && h != b.line && $f(a, 0), Te(a, new Qe(f, h == b.line ? b.ch : null, h == c.line ? c.ch : null)), ++h
            }), f.collapsed && a.iter(b.line, c.line + 1, function (b) {
                mf(a, b) && $f(b, 0)
            }), f.clearOnEnter && yg(f, "beforeCursorEnter", function () {
                f.clear()
            }), f.readOnly && (u = !0, (a.history.done.length || a.history.undone.length) && a.clearHistory()), f.collapsed && (f.id = ++Je, f.atomic = !0), i) {
            if (j && (i.curOp.updateMaxLine = !0), f.collapsed)Vc(i, b.line, c.line + 1); else if (f.className || f.title || f.startStyle || f.endStyle || f.css)for (var k = b.line; k <= c.line; k++)Wc(i, k, "text");
            f.atomic && Nb(i.doc), Cg(i, "markerAdded", i, f)
        }
        return f
    }

    function Me(a, b, c, d, e) {
        d = Xg(d), d.shared = !1;
        var f = [Ke(a, b, c, d, e)], g = f[0], h = d.widgetNode;
        return Vf(a, function (a) {
            h && (d.widgetNode = h.cloneNode(!0)), f.push(Ke(a, zb(a, b), zb(a, c), d, e));
            for (var i = 0; i < a.linked.length; ++i)if (a.linked[i].isParent)return;
            g = Sg(f)
        }), new Le(f, g)
    }

    function Ne(a) {
        return a.findMarks(pb(a.first, 0), a.clipPos(pb(a.lastLine())), function (a) {
            return a.parent
        })
    }

    function Oe(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c], e = d.find(), f = a.clipPos(e.from), g = a.clipPos(e.to);
            if (qb(f, g)) {
                var h = Ke(a, f, g, d.primary, d.primary.type);
                d.markers.push(h), h.parent = d
            }
        }
    }

    function Pe(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b], d = [c.primary.doc];
            Vf(c.primary.doc, function (a) {
                d.push(a)
            });
            for (var e = 0; e < c.markers.length; e++) {
                var f = c.markers[e];
                -1 == Ug(d, f.doc) && (f.parent = null, c.markers.splice(e--, 1))
            }
        }
    }

    function Qe(a, b, c) {
        this.marker = a, this.from = b, this.to = c
    }

    function Re(a, b) {
        if (a)for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            if (d.marker == b)return d
        }
    }

    function Se(a, b) {
        for (var c, d = 0; d < a.length; ++d)a[d] != b && (c || (c = [])).push(a[d]);
        return c
    }

    function Te(a, b) {
        a.markedSpans = a.markedSpans ? a.markedSpans.concat([b]) : [b], b.marker.attachLine(a)
    }

    function Ue(a, b, c) {
        if (a)for (var e, d = 0; d < a.length; ++d) {
            var f = a[d], g = f.marker, h = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
            if (h || f.from == b && "bookmark" == g.type && (!c || !f.marker.insertLeft)) {
                var i = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
                (e || (e = [])).push(new Qe(g, f.from, i ? null : f.to))
            }
        }
        return e
    }

    function Ve(a, b, c) {
        if (a)for (var e, d = 0; d < a.length; ++d) {
            var f = a[d], g = f.marker, h = null == f.to || (g.inclusiveRight ? f.to >= b : f.to > b);
            if (h || f.from == b && "bookmark" == g.type && (!c || f.marker.insertLeft)) {
                var i = null == f.from || (g.inclusiveLeft ? f.from <= b : f.from < b);
                (e || (e = [])).push(new Qe(g, i ? null : f.from - b, null == f.to ? null : f.to - b))
            }
        }
        return e
    }

    function We(a, b) {
        if (b.full)return null;
        var c = Bb(a, b.from.line) && Xf(a, b.from.line).markedSpans, d = Bb(a, b.to.line) && Xf(a, b.to.line).markedSpans;
        if (!c && !d)return null;
        var e = b.from.ch, f = b.to.ch, g = 0 == qb(b.from, b.to), h = Ue(c, e, g), i = Ve(d, f, g), j = 1 == b.text.length, k = Sg(b.text).length + (j ? e : 0);
        if (h)for (var l = 0; l < h.length; ++l) {
            var m = h[l];
            if (null == m.to) {
                var n = Re(i, m.marker);
                n ? j && (m.to = null == n.to ? null : n.to + k) : m.to = e
            }
        }
        if (i)for (var l = 0; l < i.length; ++l) {
            var m = i[l];
            if (null != m.to && (m.to += k), null == m.from) {
                var n = Re(h, m.marker);
                n || (m.from = k, j && (h || (h = [])).push(m))
            } else m.from += k, j && (h || (h = [])).push(m)
        }
        h && (h = Xe(h)), i && i != h && (i = Xe(i));
        var o = [h];
        if (!j) {
            var q, p = b.text.length - 2;
            if (p > 0 && h)for (var l = 0; l < h.length; ++l)null == h[l].to && (q || (q = [])).push(new Qe(h[l].marker, null, null));
            for (var l = 0; p > l; ++l)o.push(q);
            o.push(i)
        }
        return o
    }

    function Xe(a) {
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            null != c.from && c.from == c.to && c.marker.clearWhenEmpty !== !1 && a.splice(b--, 1)
        }
        return a.length ? a : null
    }

    function Ye(a, b) {
        var c = ng(a, b), d = We(a, b);
        if (!c)return d;
        if (!d)return c;
        for (var e = 0; e < c.length; ++e) {
            var f = c[e], g = d[e];
            if (f && g)a:for (var h = 0; h < g.length; ++h) {
                for (var i = g[h], j = 0; j < f.length; ++j)if (f[j].marker == i.marker)continue a;
                f.push(i)
            } else g && (c[e] = g)
        }
        return c
    }

    function Ze(a, b, c) {
        var d = null;
        if (a.iter(b.line, c.line + 1, function (a) {
                if (a.markedSpans)for (var b = 0; b < a.markedSpans.length; ++b) {
                    var c = a.markedSpans[b].marker;
                    !c.readOnly || d && -1 != Ug(d, c) || (d || (d = [])).push(c)
                }
            }), !d)return null;
        for (var e = [{
            from: b,
            to: c
        }], f = 0; f < d.length; ++f)for (var g = d[f], h = g.find(0), i = 0; i < e.length; ++i) {
            var j = e[i];
            if (!(qb(j.to, h.from) < 0 || qb(j.from, h.to) > 0)) {
                var k = [i, 1], l = qb(j.from, h.from), m = qb(j.to, h.to);
                (0 > l || !g.inclusiveLeft && !l) && k.push({
                    from: j.from,
                    to: h.from
                }), (m > 0 || !g.inclusiveRight && !m) && k.push({
                    from: h.to,
                    to: j.to
                }), e.splice.apply(e, k), i += k.length - 1
            }
        }
        return e
    }

    function $e(a) {
        var b = a.markedSpans;
        if (b) {
            for (var c = 0; c < b.length; ++c)b[c].marker.detachLine(a);
            a.markedSpans = null
        }
    }

    function _e(a, b) {
        if (b) {
            for (var c = 0; c < b.length; ++c)b[c].marker.attachLine(a);
            a.markedSpans = b
        }
    }

    function af(a) {
        return a.inclusiveLeft ? -1 : 0
    }

    function bf(a) {
        return a.inclusiveRight ? 1 : 0
    }

    function cf(a, b) {
        var c = a.lines.length - b.lines.length;
        if (0 != c)return c;
        var d = a.find(), e = b.find(), f = qb(d.from, e.from) || af(a) - af(b);
        if (f)return -f;
        var g = qb(d.to, e.to) || bf(a) - bf(b);
        return g ? g : b.id - a.id
    }

    function df(a, b) {
        var d, c = v && a.markedSpans;
        if (c)for (var e, f = 0; f < c.length; ++f)e = c[f], e.marker.collapsed && null == (b ? e.from : e.to) && (!d || cf(d, e.marker) < 0) && (d = e.marker);
        return d
    }

    function ef(a) {
        return df(a, !0)
    }

    function ff(a) {
        return df(a, !1)
    }

    function gf(a, b, c, d, e) {
        var f = Xf(a, b), g = v && f.markedSpans;
        if (g)for (var h = 0; h < g.length; ++h) {
            var i = g[h];
            if (i.marker.collapsed) {
                var j = i.marker.find(0), k = qb(j.from, c) || af(i.marker) - af(e), l = qb(j.to, d) || bf(i.marker) - bf(e);
                if (!(k >= 0 && 0 >= l || 0 >= k && l >= 0) && (0 >= k && (qb(j.to, c) > 0 || i.marker.inclusiveRight && e.inclusiveLeft) || k >= 0 && (qb(j.from, d) < 0 || i.marker.inclusiveLeft && e.inclusiveRight)))return !0
            }
        }
    }

    function hf(a) {
        for (var b; b = ef(a);)a = b.find(-1, !0).line;
        return a
    }

    function jf(a) {
        for (var b, c; b = ff(a);)a = b.find(1, !0).line, (c || (c = [])).push(a);
        return c
    }

    function kf(a, b) {
        var c = Xf(a, b), d = hf(c);
        return c == d ? b : _f(d)
    }

    function lf(a, b) {
        if (b > a.lastLine())return b;
        var d, c = Xf(a, b);
        if (!mf(a, c))return b;
        for (; d = ff(c);)c = d.find(1, !0).line;
        return _f(c) + 1
    }

    function mf(a, b) {
        var c = v && b.markedSpans;
        if (c)for (var d, e = 0; e < c.length; ++e)if (d = c[e], d.marker.collapsed) {
            if (null == d.from)return !0;
            if (!d.marker.widgetNode && 0 == d.from && d.marker.inclusiveLeft && nf(a, b, d))return !0
        }
    }

    function nf(a, b, c) {
        if (null == c.to) {
            var d = c.marker.find(1, !0);
            return nf(a, d.line, Re(d.line.markedSpans, c.marker))
        }
        if (c.marker.inclusiveRight && c.to == b.text.length)return !0;
        for (var e, f = 0; f < b.markedSpans.length; ++f)if (e = b.markedSpans[f], e.marker.collapsed && !e.marker.widgetNode && e.from == c.to && (null == e.to || e.to != c.from) && (e.marker.inclusiveLeft || c.marker.inclusiveRight) && nf(a, b, e))return !0
    }

    function pf(a, b, c) {
        bg(b) < (a.curOp && a.curOp.scrollTop || a.doc.scrollTop) && he(a, null, c)
    }

    function qf(a) {
        if (null != a.height)return a.height;
        if (!hh(document.body, a.node)) {
            var b = "position: relative;";
            a.coverGutter && (b += "margin-left: -" + a.cm.display.gutters.offsetWidth + "px;"), a.noHScroll && (b += "width: " + a.cm.display.wrapper.clientWidth + "px;"), gh(a.cm.display.measure, dh("div", [a.node], null, b))
        }
        return a.height = a.node.offsetHeight
    }

    function rf(a, b, c, d) {
        var e = new of(a, c, d);
        return e.noHScroll && (a.display.alignWidgets = !0), le(a.doc, b, "widget", function (b) {
            var c = b.widgets || (b.widgets = []);
            if (null == e.insertAt ? c.push(e) : c.splice(Math.min(c.length - 1, Math.max(0, e.insertAt)), 0, e), e.line = b, !mf(a.doc, b)) {
                var d = bg(b) < a.doc.scrollTop;
                $f(b, b.height + qf(e)), d && he(a, null, e.height), a.curOp.forceUpdate = !0
            }
            return !0
        }), e
    }

    function tf(a, b, c, d) {
        a.text = b, a.stateAfter && (a.stateAfter = null), a.styles && (a.styles = null), null != a.order && (a.order = null), $e(a), _e(a, c);
        var e = d ? d(a) : 1;
        e != a.height && $f(a, e)
    }

    function uf(a) {
        a.parent = null, $e(a)
    }

    function vf(a, b) {
        if (a)for (; ;) {
            var c = a.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!c)break;
            a = a.slice(0, c.index) + a.slice(c.index + c[0].length);
            var d = c[1] ? "bgClass" : "textClass";
            null == b[d] ? b[d] = c[2] : new RegExp("(?:^|s)" + c[2] + "(?:$|s)").test(b[d]) || (b[d] += " " + c[2])
        }
        return a
    }

    function wf(a, b) {
        if (a.blankLine)return a.blankLine(b);
        if (a.innerMode) {
            var c = w.innerMode(a, b);
            return c.mode.blankLine ? c.mode.blankLine(c.state) : void 0
        }
    }

    function xf(a, b, c, d) {
        for (var e = 0; 10 > e; e++) {
            d && (d[0] = w.innerMode(a, c).mode);
            var f = a.token(b, c);
            if (b.pos > b.start)return f
        }
        throw new Error("Mode " + a.name + " failed to advance stream.")
    }

    function yf(a, b, c, d) {
        function e(a) {
            return {start: k.start, end: k.pos, string: k.current(), type: h || null, state: a ? ye(f.mode, j) : j}
        }

        var h, f = a.doc, g = f.mode;
        b = zb(f, b);
        var l, i = Xf(f, b.line), j = Zb(a, b.line, c), k = new He(i.text, a.options.tabSize);
        for (d && (l = []); (d || k.pos < b.ch) && !k.eol();)k.start = k.pos, h = xf(g, k, j), d && l.push(e(!0));
        return d ? l : e()
    }

    function zf(a, b, c, d, e, f, g) {
        var h = c.flattenSpans;
        null == h && (h = a.options.flattenSpans);
        var l, i = 0, j = null, k = new He(b, a.options.tabSize), m = a.options.addModeClass && [null];
        for ("" == b && vf(wf(c, d), f); !k.eol();) {
            if (k.pos > a.options.maxHighlightLength ? (h = !1, g && Cf(a, b, d, k.pos), k.pos = b.length, l = null) : l = vf(xf(c, k, d, m), f), m) {
                var n = m[0].name;
                n && (l = "m-" + (l ? n + " " + l : n))
            }
            if (!h || j != l) {
                for (; i < k.start;)i = Math.min(k.start, i + 5e4), e(i, j);
                j = l
            }
            k.start = k.pos
        }
        for (; i < k.pos;) {
            var o = Math.min(k.pos, i + 5e4);
            e(o, j), i = o
        }
    }

    function Af(a, b, c, d) {
        var e = [a.state.modeGen], f = {};
        zf(a, b.text, a.doc.mode, c, function (a, b) {
            e.push(a, b)
        }, f, d);
        for (var g = 0; g < a.state.overlays.length; ++g) {
            var h = a.state.overlays[g], i = 1, j = 0;
            zf(a, b.text, h.mode, !0, function (a, b) {
                for (var c = i; a > j;) {
                    var d = e[i];
                    d > a && e.splice(i, 1, a, e[i + 1], d), i += 2, j = Math.min(a, d)
                }
                if (b)if (h.opaque)e.splice(c, i - c, a, "cm-overlay " + b), i = c + 2; else for (; i > c; c += 2) {
                    var f = e[c + 1];
                    e[c + 1] = (f ? f + " " : "") + "cm-overlay " + b
                }
            }, f)
        }
        return {styles: e, classes: f.bgClass || f.textClass ? f : null}
    }

    function Bf(a, b, c) {
        if (!b.styles || b.styles[0] != a.state.modeGen) {
            var d = Af(a, b, b.stateAfter = Zb(a, _f(b)));
            b.styles = d.styles, d.classes ? b.styleClasses = d.classes : b.styleClasses && (b.styleClasses = null), c === a.doc.frontier && a.doc.frontier++
        }
        return b.styles
    }

    function Cf(a, b, c, d) {
        var e = a.doc.mode, f = new He(b, a.options.tabSize);
        for (f.start = f.pos = d || 0, "" == b && wf(e, c); !f.eol() && f.pos <= a.options.maxHighlightLength;)xf(e, f, c), f.start = f.pos
    }

    function Ff(a, b) {
        if (!a || /^\s*$/.test(a))return null;
        var c = b.addModeClass ? Ef : Df;
        return c[a] || (c[a] = a.replace(/\S+/g, "cm-$&"))
    }

    function Gf(a, b) {
        var c = dh("span", null, null, f ? "padding-right: .1px" : null), e = {
            pre: dh("pre", [c]),
            content: c,
            col: 0,
            pos: 0,
            cm: a
        };
        b.measure = {};
        for (var g = 0; g <= (b.rest ? b.rest.length : 0); g++) {
            var i, h = g ? b.rest[g - 1] : b.line;
            e.pos = 0, e.addToken = If, (d || f) && a.getOption("lineWrapping") && (e.addToken = Jf(e.addToken)), vh(a.display.measure) && (i = cg(h)) && (e.addToken = Kf(e.addToken, i)), e.map = [];
            var j = b != a.display.externalMeasured && _f(h);
            Mf(h, e, Bf(a, h, j)), h.styleClasses && (h.styleClasses.bgClass && (e.bgClass = mh(h.styleClasses.bgClass, e.bgClass || "")), h.styleClasses.textClass && (e.textClass = mh(h.styleClasses.textClass, e.textClass || ""))), 0 == e.map.length && e.map.push(0, 0, e.content.appendChild(th(a.display.measure))), 0 == g ? (b.measure.map = e.map, b.measure.cache = {}) : ((b.measure.maps || (b.measure.maps = [])).push(e.map), (b.measure.caches || (b.measure.caches = [])).push({}))
        }
        return f && /\bcm-tab\b/.test(e.content.lastChild.className) && (e.content.className = "cm-tab-wrap-hack"), Ag(a, "renderLine", a, b.line, e.pre), e.pre.className && (e.textClass = mh(e.pre.className, e.textClass || "")), e
    }

    function Hf(a) {
        var b = dh("span", "\u2022", "cm-invalidchar");
        return b.title = "\\u" + a.charCodeAt(0).toString(16), b
    }

    function If(a, b, c, f, g, h, i) {
        if (b) {
            var j = a.cm.options.specialChars, k = !1;
            if (j.test(b))for (var l = document.createDocumentFragment(), m = 0; ;) {
                j.lastIndex = m;
                var n = j.exec(b), o = n ? n.index - m : b.length - m;
                if (o) {
                    var p = document.createTextNode(b.slice(m, m + o));
                    d && 9 > e ? l.appendChild(dh("span", [p])) : l.appendChild(p), a.map.push(a.pos, a.pos + o, p), a.col += o, a.pos += o
                }
                if (!n)break;
                if (m += o + 1, "	" == n[0]) {
                    var q = a.cm.options.tabSize, r = q - a.col % q, p = l.appendChild(dh("span", Rg(r), "cm-tab"));
                    a.col += r
                } else {
                    var p = a.cm.options.specialCharPlaceholder(n[0]);
                    d && 9 > e ? l.appendChild(dh("span", [p])) : l.appendChild(p), a.col += 1
                }
                a.map.push(a.pos, a.pos + 1, p), a.pos++
            } else {
                a.col += b.length;
                var l = document.createTextNode(b);
                a.map.push(a.pos, a.pos + b.length, l), d && 9 > e && (k = !0), a.pos += b.length
            }
            if (c || f || g || k || i) {
                var s = c || "";
                f && (s += f), g && (s += g);
                var t = dh("span", [l], s, i);
                return h && (t.title = h), a.content.appendChild(t)
            }
            a.content.appendChild(l)
        }
    }

    function Jf(a) {
        function b(a) {
            for (var b = " ", c = 0; c < a.length - 2; ++c)b += c % 2 ? " " : "\xa0";
            return b += " "
        }

        return function (c, d, e, f, g, h) {
            a(c, d.replace(/ {3,}/g, b), e, f, g, h)
        }
    }

    function Kf(a, b) {
        return function (c, d, e, f, g, h) {
            e = e ? e + " cm-force-border" : "cm-force-border";
            for (var i = c.pos, j = i + d.length; ;) {
                for (var k = 0; k < b.length; k++) {
                    var l = b[k];
                    if (l.to > i && l.from <= i)break
                }
                if (l.to >= j)return a(c, d, e, f, g, h);
                a(c, d.slice(0, l.to - i), e, f, null, h), f = null, d = d.slice(l.to - i), i = l.to
            }
        }
    }

    function Lf(a, b, c, d) {
        var e = !d && c.widgetNode;
        e && (a.map.push(a.pos, a.pos + b, e), a.content.appendChild(e)), a.pos += b
    }

    function Mf(a, b, c) {
        var d = a.markedSpans, e = a.text, f = 0;
        if (d)for (var k, l, n, o, p, q, r, h = e.length, i = 0, g = 1, j = "", m = 0; ;) {
            if (m == i) {
                n = o = p = q = l = "", r = null, m = 1 / 0;
                for (var s = [], t = 0; t < d.length; ++t) {
                    var u = d[t], v = u.marker;
                    u.from <= i && (null == u.to || u.to > i) ? (null != u.to && m > u.to && (m = u.to, o = ""), v.className && (n += " " + v.className), v.css && (l = v.css), v.startStyle && u.from == i && (p += " " + v.startStyle), v.endStyle && u.to == m && (o += " " + v.endStyle), v.title && !q && (q = v.title), v.collapsed && (!r || cf(r.marker, v) < 0) && (r = u)) : u.from > i && m > u.from && (m = u.from), "bookmark" == v.type && u.from == i && v.widgetNode && s.push(v)
                }
                if (r && (r.from || 0) == i && (Lf(b, (null == r.to ? h + 1 : r.to) - i, r.marker, null == r.from), null == r.to))return;
                if (!r && s.length)for (var t = 0; t < s.length; ++t)Lf(b, 0, s[t])
            }
            if (i >= h)break;
            for (var w = Math.min(h, m); ;) {
                if (j) {
                    var x = i + j.length;
                    if (!r) {
                        var y = x > w ? j.slice(0, w - i) : j;
                        b.addToken(b, y, k ? k + n : n, p, i + y.length == m ? o : "", q, l)
                    }
                    if (x >= w) {
                        j = j.slice(w - i), i = w;
                        break
                    }
                    i = x, p = ""
                }
                j = e.slice(f, f = c[g++]), k = Ff(c[g++], b.cm.options)
            }
        } else for (var g = 1; g < c.length; g += 2)b.addToken(b, e.slice(f, f = c[g]), Ff(c[g + 1], b.cm.options))
    }

    function Nf(a, b) {
        return 0 == b.from.ch && 0 == b.to.ch && "" == Sg(b.text) && (!a.cm || a.cm.options.wholeLineUpdateBefore)
    }

    function Of(a, b, c, d) {
        function e(a) {
            return c ? c[a] : null
        }

        function f(a, c, e) {
            tf(a, c, e, d), Cg(a, "change", a, b)
        }

        function g(a, b) {
            for (var c = a, f = []; b > c; ++c)f.push(new sf(j[c], e(c), d));
            return f
        }

        var h = b.from, i = b.to, j = b.text, k = Xf(a, h.line), l = Xf(a, i.line), m = Sg(j), n = e(j.length - 1), o = i.line - h.line;
        if (b.full)a.insert(0, g(0, j.length)), a.remove(j.length, a.size - j.length); else if (Nf(a, b)) {
            var p = g(0, j.length - 1);
            f(l, l.text, n), o && a.remove(h.line, o), p.length && a.insert(h.line, p)
        } else if (k == l)if (1 == j.length)f(k, k.text.slice(0, h.ch) + m + k.text.slice(i.ch), n); else {
            var p = g(1, j.length - 1);
            p.push(new sf(m + k.text.slice(i.ch), n, d)), f(k, k.text.slice(0, h.ch) + j[0], e(0)), a.insert(h.line + 1, p)
        } else if (1 == j.length)f(k, k.text.slice(0, h.ch) + j[0] + l.text.slice(i.ch), e(0)), a.remove(h.line + 1, o); else {
            f(k, k.text.slice(0, h.ch) + j[0], e(0)), f(l, m + l.text.slice(i.ch), n);
            var p = g(1, j.length - 1);
            o > 1 && a.remove(h.line + 1, o - 1), a.insert(h.line + 1, p)
        }
        Cg(a, "change", a, b)
    }

    function Pf(a) {
        this.lines = a, this.parent = null;
        for (var b = 0, c = 0; b < a.length; ++b)a[b].parent = this, c += a[b].height;
        this.height = c
    }

    function Qf(a) {
        this.children = a;
        for (var b = 0, c = 0, d = 0; d < a.length; ++d) {
            var e = a[d];
            b += e.chunkSize(), c += e.height, e.parent = this
        }
        this.size = b, this.height = c, this.parent = null
    }

    function Vf(a, b, c) {
        function d(a, e, f) {
            if (a.linked)for (var g = 0; g < a.linked.length; ++g) {
                var h = a.linked[g];
                if (h.doc != e) {
                    var i = f && h.sharedHist;
                    (!c || i) && (b(h.doc, i), d(h.doc, a, i))
                }
            }
        }

        d(a, null, !0)
    }

    function Wf(a, b) {
        if (b.cm)throw new Error("This document is already in use.");
        a.doc = b, b.cm = a, C(a), y(a), a.options.lineWrapping || I(a), a.options.mode = b.modeOption, Vc(a)
    }

    function Xf(a, b) {
        if (b -= a.first, 0 > b || b >= a.size)throw new Error("There is no line " + (b + a.first) + " in the document.");
        for (var c = a; !c.lines;)for (var d = 0; ; ++d) {
            var e = c.children[d], f = e.chunkSize();
            if (f > b) {
                c = e;
                break
            }
            b -= f
        }
        return c.lines[b]
    }

    function Yf(a, b, c) {
        var d = [], e = b.line;
        return a.iter(b.line, c.line + 1, function (a) {
            var f = a.text;
            e == c.line && (f = f.slice(0, c.ch)), e == b.line && (f = f.slice(b.ch)), d.push(f), ++e
        }), d
    }

    function Zf(a, b, c) {
        var d = [];
        return a.iter(b, c, function (a) {
            d.push(a.text)
        }), d
    }

    function $f(a, b) {
        var c = b - a.height;
        if (c)for (var d = a; d; d = d.parent)d.height += c
    }

    function _f(a) {
        if (null == a.parent)return null;
        for (var b = a.parent, c = Ug(b.lines, a), d = b.parent; d; b = d, d = d.parent)for (var e = 0; d.children[e] != b; ++e)c += d.children[e].chunkSize();
        return c + b.first
    }

    function ag(a, b) {
        var c = a.first;
        a:do {
            for (var d = 0; d < a.children.length; ++d) {
                var e = a.children[d], f = e.height;
                if (f > b) {
                    a = e;
                    continue a
                }
                b -= f, c += e.chunkSize()
            }
            return c
        } while (!a.lines);
        for (var d = 0; d < a.lines.length; ++d) {
            var g = a.lines[d], h = g.height;
            if (h > b)break;
            b -= h
        }
        return c + d
    }

    function bg(a) {
        a = hf(a);
        for (var b = 0, c = a.parent, d = 0; d < c.lines.length; ++d) {
            var e = c.lines[d];
            if (e == a)break;
            b += e.height
        }
        for (var f = c.parent; f; c = f, f = c.parent)for (var d = 0; d < f.children.length; ++d) {
            var g = f.children[d];
            if (g == c)break;
            b += g.height
        }
        return b
    }

    function cg(a) {
        var b = a.order;
        return null == b && (b = a.order = Qh(a.text)), b
    }

    function dg(a) {
        this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = a || 1
    }

    function eg(a, b) {
        var c = {from: rb(b.from), to: Sd(b), text: Yf(a, b.from, b.to)};
        return lg(a, c, b.from.line, b.to.line + 1), Vf(a, function (a) {
            lg(a, c, b.from.line, b.to.line + 1)
        }, !0), c
    }

    function fg(a) {
        for (; a.length;) {
            var b = Sg(a);
            if (!b.ranges)break;
            a.pop()
        }
    }

    function gg(a, b) {
        return b ? (fg(a.done), Sg(a.done)) : a.done.length && !Sg(a.done).ranges ? Sg(a.done) : a.done.length > 1 && !a.done[a.done.length - 2].ranges ? (a.done.pop(), Sg(a.done)) : void 0
    }

    function hg(a, b, c, d) {
        var e = a.history;
        e.undone.length = 0;
        var g, f = +new Date;
        if ((e.lastOp == d || e.lastOrigin == b.origin && b.origin && ("+" == b.origin.charAt(0) && a.cm && e.lastModTime > f - a.cm.options.historyEventDelay || "*" == b.origin.charAt(0))) && (g = gg(e, e.lastOp == d))) {
            var h = Sg(g.changes);
            0 == qb(b.from, b.to) && 0 == qb(b.from, h.to) ? h.to = Sd(b) : g.changes.push(eg(a, b))
        } else {
            var i = Sg(e.done);
            for (i && i.ranges || kg(a.sel, e.done), g = {
                changes: [eg(a, b)],
                generation: e.generation
            }, e.done.push(g); e.done.length > e.undoDepth;)e.done.shift(), e.done[0].ranges || e.done.shift()
        }
        e.done.push(c), e.generation = ++e.maxGeneration, e.lastModTime = e.lastSelTime = f, e.lastOp = e.lastSelOp = d, e.lastOrigin = e.lastSelOrigin = b.origin, h || Ag(a, "historyAdded")
    }

    function ig(a, b, c, d) {
        var e = b.charAt(0);
        return "*" == e || "+" == e && c.ranges.length == d.ranges.length && c.somethingSelected() == d.somethingSelected() && new Date - a.history.lastSelTime <= (a.cm ? a.cm.options.historyEventDelay : 500)
    }

    function jg(a, b, c, d) {
        var e = a.history, f = d && d.origin;
        c == e.lastSelOp || f && e.lastSelOrigin == f && (e.lastModTime == e.lastSelTime && e.lastOrigin == f || ig(a, f, Sg(e.done), b)) ? e.done[e.done.length - 1] = b : kg(b, e.done), e.lastSelTime = +new Date, e.lastSelOrigin = f, e.lastSelOp = c, d && d.clearRedo !== !1 && fg(e.undone)
    }

    function kg(a, b) {
        var c = Sg(b);
        c && c.ranges && c.equals(a) || b.push(a)
    }

    function lg(a, b, c, d) {
        var e = b["spans_" + a.id], f = 0;
        a.iter(Math.max(a.first, c), Math.min(a.first + a.size, d), function (c) {
            c.markedSpans && ((e || (e = b["spans_" + a.id] = {}))[f] = c.markedSpans), ++f
        })
    }

    function mg(a) {
        if (!a)return null;
        for (var c, b = 0; b < a.length; ++b)a[b].marker.explicitlyCleared ? c || (c = a.slice(0, b)) : c && c.push(a[b]);
        return c ? c.length ? c : null : a
    }

    function ng(a, b) {
        var c = b["spans_" + a.id];
        if (!c)return null;
        for (var d = 0, e = []; d < b.text.length; ++d)e.push(mg(c[d]));
        return e
    }

    function og(a, b, c) {
        for (var d = 0, e = []; d < a.length; ++d) {
            var f = a[d];
            if (f.ranges)e.push(c ? ub.prototype.deepCopy.call(f) : f); else {
                var g = f.changes, h = [];
                e.push({changes: h});
                for (var i = 0; i < g.length; ++i) {
                    var k, j = g[i];
                    if (h.push({
                            from: j.from,
                            to: j.to,
                            text: j.text
                        }), b)for (var l in j)(k = l.match(/^spans_(\d+)$/)) && Ug(b, Number(k[1])) > -1 && (Sg(h)[l] = j[l], delete j[l])
                }
            }
        }
        return e
    }

    function pg(a, b, c, d) {
        c < a.line ? a.line += d : b < a.line && (a.line = b, a.ch = 0)
    }

    function qg(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e], g = !0;
            if (f.ranges) {
                f.copied || (f = a[e] = f.deepCopy(), f.copied = !0);
                for (var h = 0; h < f.ranges.length; h++)pg(f.ranges[h].anchor, b, c, d), pg(f.ranges[h].head, b, c, d)
            } else {
                for (var h = 0; h < f.changes.length; ++h) {
                    var i = f.changes[h];
                    if (c < i.from.line)i.from = pb(i.from.line + d, i.from.ch), i.to = pb(i.to.line + d, i.to.ch); else if (b <= i.to.line) {
                        g = !1;
                        break
                    }
                }
                g || (a.splice(0, e + 1), e = 0)
            }
        }
    }

    function rg(a, b) {
        var c = b.from.line, d = b.to.line, e = b.text.length - (d - c) - 1;
        qg(a.done, c, d, e), qg(a.undone, c, d, e)
    }

    function ug(a) {
        return null != a.defaultPrevented ? a.defaultPrevented : 0 == a.returnValue
    }

    function wg(a) {
        return a.target || a.srcElement
    }

    function xg(a) {
        var b = a.which;
        return null == b && (1 & a.button ? b = 1 : 2 & a.button ? b = 3 : 4 & a.button && (b = 2)), p && a.ctrlKey && 1 == b && (b = 3), b
    }

    function Cg(a, b) {
        function f(a) {
            return function () {
                a.apply(null, d)
            }
        }

        var c = a._handlers && a._handlers[b];
        if (c) {
            var e, d = Array.prototype.slice.call(arguments, 2);
            Ec ? e = Ec.delayedCallbacks : Bg ? e = Bg : (e = Bg = [], setTimeout(Dg, 0));
            for (var g = 0; g < c.length; ++g)e.push(f(c[g]))
        }
    }

    function Dg() {
        var a = Bg;
        Bg = null;
        for (var b = 0; b < a.length; ++b)a[b]()
    }

    function Eg(a, b, c) {
        return "string" == typeof b && (b = {
            type: b, preventDefault: function () {
                this.defaultPrevented = !0
            }
        }), Ag(a, c || b.type, a, b), ug(b) || b.codemirrorIgnore
    }

    function Fg(a) {
        var b = a._handlers && a._handlers.cursorActivity;
        if (b)for (var c = a.curOp.cursorActivityHandlers || (a.curOp.cursorActivityHandlers = []), d = 0; d < b.length; ++d)-1 == Ug(c, b[d]) && c.push(b[d])
    }

    function Gg(a, b) {
        var c = a._handlers && a._handlers[b];
        return c && c.length > 0
    }

    function Hg(a) {
        a.prototype.on = function (a, b) {
            yg(this, a, b)
        }, a.prototype.off = function (a, b) {
            zg(this, a, b)
        }
    }

    function Ng() {
        this.id = null
    }

    function Pg(a, b, c) {
        for (var d = 0, e = 0; ;) {
            var f = a.indexOf("	", d);
            -1 == f && (f = a.length);
            var g = f - d;
            if (f == a.length || e + g >= b)return d + Math.min(g, b - e);
            if (e += f - d, e += c - e % c, d = f + 1, e >= b)return d
        }
    }

    function Rg(a) {
        for (; Qg.length <= a;)Qg.push(Sg(Qg) + " ");
        return Qg[a]
    }

    function Sg(a) {
        return a[a.length - 1]
    }

    function Ug(a, b) {
        for (var c = 0; c < a.length; ++c)if (a[c] == b)return c;
        return -1
    }

    function Vg(a, b) {
        for (var c = [], d = 0; d < a.length; d++)c[d] = b(a[d], d);
        return c
    }

    function Wg(a, b) {
        var c;
        if (Object.create)c = Object.create(a); else {
            var d = function () {
            };
            d.prototype = a, c = new d
        }
        return b && Xg(b, c), c
    }

    function Xg(a, b, c) {
        b || (b = {});
        for (var d in a)!a.hasOwnProperty(d) || c === !1 && b.hasOwnProperty(d) || (b[d] = a[d]);
        return b
    }

    function Yg(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return function () {
            return a.apply(null, b)
        }
    }

    function _g(a, b) {
        return b ? b.source.indexOf("\\w") > -1 && $g(a) ? !0 : b.test(a) : $g(a)
    }

    function ah(a) {
        for (var b in a)if (a.hasOwnProperty(b) && a[b])return !1;
        return !0
    }

    function ch(a) {
        return a.charCodeAt(0) >= 768 && bh.test(a)
    }

    function dh(a, b, c, d) {
        var e = document.createElement(a);
        if (c && (e.className = c), d && (e.style.cssText = d), "string" == typeof b)e.appendChild(document.createTextNode(b)); else if (b)for (var f = 0; f < b.length; ++f)e.appendChild(b[f]);
        return e
    }

    function fh(a) {
        for (var b = a.childNodes.length; b > 0; --b)a.removeChild(a.firstChild);
        return a
    }

    function gh(a, b) {
        return fh(a).appendChild(b)
    }

    function hh(a, b) {
        if (a.contains)return a.contains(b);
        for (; b = b.parentNode;)if (b == a)return !0
    }

    function ih() {
        return document.activeElement
    }

    function jh(a) {
        return new RegExp("(^|\\s)" + a + "(?:$|\\s)\\s*")
    }

    function mh(a, b) {
        for (var c = a.split(" "), d = 0; d < c.length; d++)c[d] && !jh(c[d]).test(b) && (b += " " + c[d]);
        return b
    }

    function nh(a) {
        if (document.body.getElementsByClassName)for (var b = document.body.getElementsByClassName("CodeMirror"), c = 0; c < b.length; c++) {
            var d = b[c].CodeMirror;
            d && a(d)
        }
    }

    function ph() {
        oh || (qh(), oh = !0)
    }

    function qh() {
        var a;
        yg(window, "resize", function () {
            null == a && (a = setTimeout(function () {
                a = null, nh(jd)
            }, 100))
        }), yg(window, "blur", function () {
            nh(Pd)
        })
    }

    function th(a) {
        if (null == sh) {
            var b = dh("span", "\u200b");
            gh(a, dh("span", [b, document.createTextNode("x")])), 0 != a.firstChild.offsetHeight && (sh = b.offsetWidth <= 1 && b.offsetHeight > 2 && !(d && 8 > e))
        }
        return sh ? dh("span", "\u200b") : dh("span", "\xa0", null, "display: inline-block; width: 1px; margin-right: -1px")
    }

    function vh(a) {
        if (null != uh)return uh;
        var b = gh(a, document.createTextNode("A\u062eA")), c = eh(b, 0, 1).getBoundingClientRect();
        if (!c || c.left == c.right)return !1;
        var d = eh(b, 1, 2).getBoundingClientRect();
        return uh = d.right - c.right < 3
    }

    function Ah(a) {
        if (null != zh)return zh;
        var b = gh(a, dh("span", "x")), c = b.getBoundingClientRect(), d = eh(b, 0, 1).getBoundingClientRect();
        return zh = Math.abs(c.left - d.left) > 1
    }

    function Ch(a, b, c, d) {
        if (!a)return d(b, c, "ltr");
        for (var e = !1, f = 0; f < a.length; ++f) {
            var g = a[f];
            (g.from < c && g.to > b || b == c && g.to == b) && (d(Math.max(g.from, b), Math.min(g.to, c), 1 == g.level ? "rtl" : "ltr"), e = !0)
        }
        e || d(b, c, "ltr")
    }

    function Dh(a) {
        return a.level % 2 ? a.to : a.from
    }

    function Eh(a) {
        return a.level % 2 ? a.from : a.to
    }

    function Fh(a) {
        var b = cg(a);
        return b ? Dh(b[0]) : 0
    }

    function Gh(a) {
        var b = cg(a);
        return b ? Eh(Sg(b)) : a.text.length
    }

    function Hh(a, b) {
        var c = Xf(a.doc, b), d = hf(c);
        d != c && (b = _f(d));
        var e = cg(d), f = e ? e[0].level % 2 ? Gh(d) : Fh(d) : 0;
        return pb(b, f)
    }

    function Ih(a, b) {
        for (var c, d = Xf(a.doc, b); c = ff(d);)d = c.find(1, !0).line, b = null;
        var e = cg(d), f = e ? e[0].level % 2 ? Fh(d) : Gh(d) : d.text.length;
        return pb(null == b ? _f(d) : b, f)
    }

    function Jh(a, b) {
        var c = Hh(a, b.line), d = Xf(a.doc, c.line), e = cg(d);
        if (!e || 0 == e[0].level) {
            var f = Math.max(0, d.text.search(/\S/)), g = b.line == c.line && b.ch <= f && b.ch;
            return pb(c.line, g ? 0 : f)
        }
        return c
    }

    function Kh(a, b, c) {
        var d = a[0].level;
        return b == d ? !0 : c == d ? !1 : c > b
    }

    function Mh(a, b) {
        Lh = null;
        for (var d, c = 0; c < a.length; ++c) {
            var e = a[c];
            if (e.from < b && e.to > b)return c;
            if (e.from == b || e.to == b) {
                if (null != d)return Kh(a, e.level, a[d].level) ? (e.from != e.to && (Lh = d), c) : (e.from != e.to && (Lh = c), d);
                d = c
            }
        }
        return d
    }

    function Nh(a, b, c, d) {
        if (!d)return b + c;
        do b += c; while (b > 0 && ch(a.text.charAt(b)));
        return b
    }

    function Oh(a, b, c, d) {
        var e = cg(a);
        if (!e)return Ph(a, b, c, d);
        for (var f = Mh(e, b), g = e[f], h = Nh(a, b, g.level % 2 ? -c : c, d); ;) {
            if (h > g.from && h < g.to)return h;
            if (h == g.from || h == g.to)return Mh(e, h) == f ? h : (g = e[f += c], c > 0 == g.level % 2 ? g.to : g.from);
            if (g = e[f += c], !g)return null;
            h = c > 0 == g.level % 2 ? Nh(a, g.to, -1, d) : Nh(a, g.from, 1, d)
        }
    }

    function Ph(a, b, c, d) {
        var e = b + c;
        if (d)for (; e > 0 && ch(a.text.charAt(e));)e += c;
        return 0 > e || e > a.text.length ? null : e
    }

    var a = /gecko\/\d/i.test(navigator.userAgent), b = /MSIE \d/.test(navigator.userAgent), c = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), d = b || c, e = d && (b ? document.documentMode || 6 : c[1]), f = /WebKit\//.test(navigator.userAgent), g = f && /Qt\/\d+\.\d+/.test(navigator.userAgent), h = /Chrome\//.test(navigator.userAgent), i = /Opera\//.test(navigator.userAgent), j = /Apple Computer/.test(navigator.vendor), k = /KHTML\//.test(navigator.userAgent), l = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent), m = /PhantomJS/.test(navigator.userAgent), n = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), o = n || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent), p = n || /Mac/.test(navigator.platform), q = /win/i.test(navigator.platform), r = i && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    r && (r = Number(r[1])), r && r >= 15 && (i = !1, f = !0);
    var s = p && (g || i && (null == r || 12.11 > r)), t = a || d && e >= 9, u = !1, v = !1;
    L.prototype = Xg({
        update: function (a) {
            var b = a.scrollWidth > a.clientWidth + 1, c = a.scrollHeight > a.clientHeight + 1, d = a.nativeBarWidth;
            if (c) {
                this.vert.style.display = "block", this.vert.style.bottom = b ? d + "px" : "0";
                var e = a.viewHeight - (b ? d : 0);
                this.vert.firstChild.style.height = Math.max(0, a.scrollHeight - a.clientHeight + e) + "px"
            } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";
            if (b) {
                this.horiz.style.display = "block", this.horiz.style.right = c ? d + "px" : "0", this.horiz.style.left = a.barLeft + "px";
                var f = a.viewWidth - a.barLeft - (c ? d : 0);
                this.horiz.firstChild.style.width = a.scrollWidth - a.clientWidth + f + "px"
            } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
            return !this.checkedOverlay && a.clientHeight > 0 && (0 == d && this.overlayHack(), this.checkedOverlay = !0), {
                right: c ? d : 0,
                bottom: b ? d : 0
            }
        }, setScrollLeft: function (a) {
            this.horiz.scrollLeft != a && (this.horiz.scrollLeft = a)
        }, setScrollTop: function (a) {
            this.vert.scrollTop != a && (this.vert.scrollTop = a)
        }, overlayHack: function () {
            var a = p && !l ? "12px" : "18px";
            this.horiz.style.minHeight = this.vert.style.minWidth = a;
            var b = this, c = function (a) {
                wg(a) != b.vert && wg(a) != b.horiz && Qc(b.cm, md)(a)
            };
            yg(this.vert, "mousedown", c), yg(this.horiz, "mousedown", c)
        }, clear: function () {
            var a = this.horiz.parentNode;
            a.removeChild(this.horiz), a.removeChild(this.vert)
        }
    }, L.prototype), M.prototype = Xg({
        update: function () {
            return {bottom: 0, right: 0}
        }, setScrollLeft: function () {
        }, setScrollTop: function () {
        }, clear: function () {
        }
    }, M.prototype), w.scrollbarModel = {"native": L, "null": M};
    var pb = w.Pos = function (a, b) {
        return this instanceof pb ? (this.line = a, this.ch = b, void 0) : new pb(a, b)
    }, qb = w.cmpPos = function (a, b) {
        return a.line - b.line || a.ch - b.ch
    };
    ub.prototype = {
        primary: function () {
            return this.ranges[this.primIndex]
        }, equals: function (a) {
            if (a == this)return !0;
            if (a.primIndex != this.primIndex || a.ranges.length != this.ranges.length)return !1;
            for (var b = 0; b < this.ranges.length; b++) {
                var c = this.ranges[b], d = a.ranges[b];
                if (0 != qb(c.anchor, d.anchor) || 0 != qb(c.head, d.head))return !1
            }
            return !0
        }, deepCopy: function () {
            for (var a = [], b = 0; b < this.ranges.length; b++)a[b] = new vb(rb(this.ranges[b].anchor), rb(this.ranges[b].head));
            return new ub(a, this.primIndex)
        }, somethingSelected: function () {
            for (var a = 0; a < this.ranges.length; a++)if (!this.ranges[a].empty())return !0;
            return !1
        }, contains: function (a, b) {
            b || (b = a);
            for (var c = 0; c < this.ranges.length; c++) {
                var d = this.ranges[c];
                if (qb(b, d.from()) >= 0 && qb(a, d.to()) <= 0)return c
            }
            return -1
        }
    }, vb.prototype = {
        from: function () {
            return tb(this.anchor, this.head)
        }, to: function () {
            return sb(this.anchor, this.head)
        }, empty: function () {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        }
    };
    var Bc, nd, od, lc = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, Ec = null, Fc = 0, cd = null, ud = 0, zd = 0, Ad = null;
    d ? Ad = -.53 : a ? Ad = 15 : h ? Ad = -.7 : j && (Ad = -1 / 3);
    var Bd = function (a) {
        var b = a.wheelDeltaX, c = a.wheelDeltaY;
        return null == b && a.detail && a.axis == a.HORIZONTAL_AXIS && (b = a.detail), null == c && a.detail && a.axis == a.VERTICAL_AXIS ? c = a.detail : null == c && (c = a.wheelDelta), {
            x: b,
            y: c
        }
    };
    w.wheelEventPixels = function (a) {
        var b = Bd(a);
        return b.x *= Ad, b.y *= Ad, b
    };
    var Fd = new Ng, Jd = null, Sd = w.changeEnd = function (a) {
        return a.text ? pb(a.from.line + a.text.length - 1, Sg(a.text).length + (1 == a.text.length ? a.from.ch : 0)) : a.to
    };
    w.prototype = {
        constructor: w, focus: function () {
            window.focus(), fd(this), bd(this)
        }, setOption: function (a, b) {
            var c = this.options, d = c[a];
            (c[a] != b || "mode" == a) && (c[a] = b, qe.hasOwnProperty(a) && Qc(this, qe[a])(this, b, d))
        }, getOption: function (a) {
            return this.options[a]
        }, getDoc: function () {
            return this.doc
        }, addKeyMap: function (a, b) {
            this.state.keyMaps[b ? "push" : "unshift"](Ge(a))
        }, removeKeyMap: function (a) {
            for (var b = this.state.keyMaps, c = 0; c < b.length; ++c)if (b[c] == a || b[c].name == a)return b.splice(c, 1), !0
        }, addOverlay: Rc(function (a, b) {
            var c = a.token ? a : w.getMode(this.options, a);
            if (c.startState)throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({mode: c, modeSpec: a, opaque: b && b.opaque}), this.state.modeGen++, Vc(this)
        }), removeOverlay: Rc(function (a) {
            for (var b = this.state.overlays, c = 0; c < b.length; ++c) {
                var d = b[c].modeSpec;
                if (d == a || "string" == typeof a && d.name == a)return b.splice(c, 1), this.state.modeGen++, Vc(this), void 0
            }
        }), indentLine: Rc(function (a, b, c) {
            "string" != typeof b && "number" != typeof b && (b = null == b ? this.options.smartIndent ? "smart" : "prev" : b ? "add" : "subtract"), Bb(this.doc, a) && ke(this, a, b, c)
        }), indentSelection: Rc(function (a) {
            for (var b = this.doc.sel.ranges, c = -1, d = 0; d < b.length; d++) {
                var e = b[d];
                if (e.empty())e.head.line > c && (ke(this, e.head.line, a, !0), c = e.head.line, d == this.doc.sel.primIndex && ie(this)); else {
                    var f = e.from(), g = e.to(), h = Math.max(c, f.line);
                    c = Math.min(this.lastLine(), g.line - (g.ch ? 0 : 1)) + 1;
                    for (var i = h; c > i; ++i)ke(this, i, a);
                    var j = this.doc.sel.ranges;
                    0 == f.ch && b.length == j.length && j[d].from().ch > 0 && Gb(this.doc, d, new vb(f, j[d].to()), Kg)
                }
            }
        }), getTokenAt: function (a, b) {
            return yf(this, a, b)
        }, getLineTokens: function (a, b) {
            return yf(this, pb(a), b, !0)
        }, getTokenTypeAt: function (a) {
            a = zb(this.doc, a);
            var f, b = Bf(this, Xf(this.doc, a.line)), c = 0, d = (b.length - 1) / 2, e = a.ch;
            if (0 == e)f = b[2]; else for (; ;) {
                var g = c + d >> 1;
                if ((g ? b[2 * g - 1] : 0) >= e)d = g; else {
                    if (!(b[2 * g + 1] < e)) {
                        f = b[2 * g + 2];
                        break
                    }
                    c = g + 1
                }
            }
            var h = f ? f.indexOf("cm-overlay ") : -1;
            return 0 > h ? f : 0 == h ? null : f.slice(0, h - 1)
        }, getModeAt: function (a) {
            var b = this.doc.mode;
            return b.innerMode ? w.innerMode(b, this.getTokenAt(a).state).mode : b
        }, getHelper: function (a, b) {
            return this.getHelpers(a, b)[0]
        }, getHelpers: function (a, b) {
            var c = [];
            if (!xe.hasOwnProperty(b))return xe;
            var d = xe[b], e = this.getModeAt(a);
            if ("string" == typeof e[b])d[e[b]] && c.push(d[e[b]]); else if (e[b])for (var f = 0; f < e[b].length; f++) {
                var g = d[e[b][f]];
                g && c.push(g)
            } else e.helperType && d[e.helperType] ? c.push(d[e.helperType]) : d[e.name] && c.push(d[e.name]);
            for (var f = 0; f < d._global.length; f++) {
                var h = d._global[f];
                h.pred(e, this) && -1 == Ug(c, h.val) && c.push(h.val)
            }
            return c
        }, getStateAfter: function (a, b) {
            var c = this.doc;
            return a = yb(c, null == a ? c.first + c.size - 1 : a), Zb(this, a + 1, b)
        }, cursorCoords: function (a, b) {
            var c, d = this.doc.sel.primary();
            return c = null == a ? d.head : "object" == typeof a ? zb(this.doc, a) : a ? d.from() : d.to(), wc(this, c, b || "page")
        }, charCoords: function (a, b) {
            return vc(this, zb(this.doc, a), b || "page")
        }, coordsChar: function (a, b) {
            return a = uc(this, a, b || "page"), zc(this, a.left, a.top)
        }, lineAtHeight: function (a, b) {
            return a = uc(this, {top: a, left: 0}, b || "page").top, ag(this.doc, a + this.display.viewOffset)
        }, heightAtLine: function (a, b) {
            var c = !1, d = this.doc.first + this.doc.size - 1;
            a < this.doc.first ? a = this.doc.first : a > d && (a = d, c = !0);
            var e = Xf(this.doc, a);
            return tc(this, e, {top: 0, left: 0}, b || "page").top + (c ? this.doc.height - bg(e) : 0)
        }, defaultTextHeight: function () {
            return Cc(this.display)
        }, defaultCharWidth: function () {
            return Dc(this.display)
        }, setGutterMarker: Rc(function (a, b, c) {
            return le(this.doc, a, "gutter", function (a) {
                var d = a.gutterMarkers || (a.gutterMarkers = {});
                return d[b] = c, !c && ah(d) && (a.gutterMarkers = null), !0
            })
        }), clearGutter: Rc(function (a) {
            var b = this, c = b.doc, d = c.first;
            c.iter(function (c) {
                c.gutterMarkers && c.gutterMarkers[a] && (c.gutterMarkers[a] = null, Wc(b, d, "gutter"), ah(c.gutterMarkers) && (c.gutterMarkers = null)), ++d
            })
        }), addLineWidget: Rc(function (a, b, c) {
            return rf(this, a, b, c)
        }), removeLineWidget: function (a) {
            a.clear()
        }, lineInfo: function (a) {
            if ("number" == typeof a) {
                if (!Bb(this.doc, a))return null;
                var b = a;
                if (a = Xf(this.doc, a), !a)return null
            } else {
                var b = _f(a);
                if (null == b)return null
            }
            return {
                line: b,
                handle: a,
                text: a.text,
                gutterMarkers: a.gutterMarkers,
                textClass: a.textClass,
                bgClass: a.bgClass,
                wrapClass: a.wrapClass,
                widgets: a.widgets
            }
        }, getViewport: function () {
            return {from: this.display.viewFrom, to: this.display.viewTo}
        }, addWidget: function (a, b, c, d, e) {
            var f = this.display;
            a = wc(this, zb(this.doc, a));
            var g = a.bottom, h = a.left;
            if (b.style.position = "absolute", b.setAttribute("cm-ignore-events", "true"), f.sizer.appendChild(b), "over" == d)g = a.top; else if ("above" == d || "near" == d) {
                var i = Math.max(f.wrapper.clientHeight, this.doc.height), j = Math.max(f.sizer.clientWidth, f.lineSpace.clientWidth);
                ("above" == d || a.bottom + b.offsetHeight > i) && a.top > b.offsetHeight ? g = a.top - b.offsetHeight : a.bottom + b.offsetHeight <= i && (g = a.bottom), h + b.offsetWidth > j && (h = j - b.offsetWidth)
            }
            b.style.top = g + "px", b.style.left = b.style.right = "", "right" == e ? (h = f.sizer.clientWidth - b.offsetWidth, b.style.right = "0px") : ("left" == e ? h = 0 : "middle" == e && (h = (f.sizer.clientWidth - b.offsetWidth) / 2), b.style.left = h + "px"), c && fe(this, h, g, h + b.offsetWidth, g + b.offsetHeight)
        }, triggerOnKeyDown: Rc(Kd), triggerOnKeyPress: Rc(Nd), triggerOnKeyUp: Md, execCommand: function (a) {
            return Ae.hasOwnProperty(a) ? Ae[a](this) : void 0
        }, findPosH: function (a, b, c, d) {
            var e = 1;
            0 > b && (e = -1, b = -b);
            for (var f = 0, g = zb(this.doc, a); b > f && (g = ne(this.doc, g, e, c, d), !g.hitSide); ++f);
            return g
        }, moveH: Rc(function (a, b) {
            var c = this;
            c.extendSelectionsBy(function (d) {
                return c.display.shift || c.doc.extend || d.empty() ? ne(c.doc, d.head, a, b, c.options.rtlMoveVisually) : 0 > a ? d.from() : d.to()
            }, Mg)
        }), deleteH: Rc(function (a, b) {
            var c = this.doc.sel, d = this.doc;
            c.somethingSelected() ? d.replaceSelection("", null, "+delete") : me(this, function (c) {
                var e = ne(d, c.head, a, b, !1);
                return 0 > a ? {from: e, to: c.head} : {from: c.head, to: e}
            })
        }), findPosV: function (a, b, c, d) {
            var e = 1, f = d;
            0 > b && (e = -1, b = -b);
            for (var g = 0, h = zb(this.doc, a); b > g; ++g) {
                var i = wc(this, h, "div");
                if (null == f ? f = i.left : i.left = f, h = oe(this, i, e, c), h.hitSide)break
            }
            return h
        }, moveV: Rc(function (a, b) {
            var c = this, d = this.doc, e = [], f = !c.display.shift && !d.extend && d.sel.somethingSelected();
            if (d.extendSelectionsBy(function (g) {
                    if (f)return 0 > a ? g.from() : g.to();
                    var h = wc(c, g.head, "div");
                    null != g.goalColumn && (h.left = g.goalColumn), e.push(h.left);
                    var i = oe(c, h, a, b);
                    return "page" == b && g == d.sel.primary() && he(c, null, vc(c, i, "div").top - h.top), i
                }, Mg), e.length)for (var g = 0; g < d.sel.ranges.length; g++)d.sel.ranges[g].goalColumn = e[g]
        }), findWordAt: function (a) {
            var b = this.doc, c = Xf(b, a.line).text, d = a.ch, e = a.ch;
            if (c) {
                var f = this.getHelper(a, "wordChars");
                (a.xRel < 0 || e == c.length) && d ? --d : ++e;
                for (var g = c.charAt(d), h = _g(g, f) ? function (a) {
                    return _g(a, f)
                } : /\s/.test(g) ? function (a) {
                    return /\s/.test(a)
                } : function (a) {
                    return !/\s/.test(a) && !_g(a)
                }; d > 0 && h(c.charAt(d - 1));)--d;
                for (; e < c.length && h(c.charAt(e));)++e
            }
            return new vb(pb(a.line, d), pb(a.line, e))
        }, toggleOverwrite: function (a) {
            (null == a || a != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? lh(this.display.cursorDiv, "CodeMirror-overwrite") : kh(this.display.cursorDiv, "CodeMirror-overwrite"), Ag(this, "overwriteToggle", this, this.state.overwrite))
        }, hasFocus: function () {
            return ih() == this.display.input
        }, scrollTo: Rc(function (a, b) {
            (null != a || null != b) && je(this), null != a && (this.curOp.scrollLeft = a), null != b && (this.curOp.scrollTop = b)
        }), getScrollInfo: function () {
            var a = this.display.scroller;
            return {
                left: a.scrollLeft,
                top: a.scrollTop,
                height: a.scrollHeight - bc(this) - this.display.barHeight,
                width: a.scrollWidth - bc(this) - this.display.barWidth,
                clientHeight: dc(this),
                clientWidth: cc(this)
            }
        }, scrollIntoView: Rc(function (a, b) {
            if (null == a ? (a = {
                    from: this.doc.sel.primary().head,
                    to: null
                }, null == b && (b = this.options.cursorScrollMargin)) : "number" == typeof a ? a = {
                    from: pb(a, 0),
                    to: null
                } : null == a.from && (a = {
                    from: a,
                    to: null
                }), a.to || (a.to = a.from), a.margin = b || 0, null != a.from.line)je(this), this.curOp.scrollToPos = a; else {
                var c = ge(this, Math.min(a.from.left, a.to.left), Math.min(a.from.top, a.to.top) - a.margin, Math.max(a.from.right, a.to.right), Math.max(a.from.bottom, a.to.bottom) + a.margin);
                this.scrollTo(c.scrollLeft, c.scrollTop)
            }
        }), setSize: Rc(function (a, b) {
            function d(a) {
                return "number" == typeof a || /^\d+$/.test(String(a)) ? a + "px" : a
            }

            var c = this;
            null != a && (c.display.wrapper.style.width = d(a)), null != b && (c.display.wrapper.style.height = d(b)), c.options.lineWrapping && pc(this);
            var e = c.display.viewFrom;
            c.doc.iter(e, c.display.viewTo, function (a) {
                if (a.widgets)for (var b = 0; b < a.widgets.length; b++)if (a.widgets[b].noHScroll) {
                    Wc(c, e, "widget");
                    break
                }
                ++e
            }), c.curOp.forceUpdate = !0, Ag(c, "refresh", this)
        }), operation: function (a) {
            return Pc(this, a)
        }, refresh: Rc(function () {
            var a = this.display.cachedTextHeight;
            Vc(this), this.curOp.forceUpdate = !0, qc(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), G(this), (null == a || Math.abs(a - Cc(this.display)) > .5) && C(this), Ag(this, "refresh", this)
        }), swapDoc: Rc(function (a) {
            var b = this.doc;
            return b.cm = null, Wf(this, a), qc(this), ed(this), this.scrollTo(a.scrollLeft, a.scrollTop), this.curOp.forceScroll = !0, Cg(this, "swapDoc", this, b), b
        }), getInputField: function () {
            return this.display.input
        }, getWrapperElement: function () {
            return this.display.wrapper
        }, getScrollerElement: function () {
            return this.display.scroller
        }, getGutterElement: function () {
            return this.display.gutters
        }
    }, Hg(w);
    var pe = w.defaults = {}, qe = w.optionHandlers = {}, se = w.Init = {
        toString: function () {
            return "CodeMirror.Init"
        }
    };
    re("value", "", function (a, b) {
        a.setValue(b)
    }, !0), re("mode", null, function (a, b) {
        a.doc.modeOption = b, y(a)
    }, !0), re("indentUnit", 2, y, !0), re("indentWithTabs", !1), re("smartIndent", !0), re("tabSize", 4, function (a) {
        z(a), qc(a), Vc(a)
    }, !0), re("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function (a, b) {
        a.options.specialChars = new RegExp(b.source + (b.test("	") ? "" : "|	"), "g"), a.refresh()
    }, !0), re("specialCharPlaceholder", Hf, function (a) {
        a.refresh()
    }, !0), re("electricChars", !0), re("rtlMoveVisually", !q), re("wholeLineUpdateBefore", !0), re("theme", "default", function (a) {
        D(a), E(a)
    }, !0), re("keyMap", "default", function (a, b, c) {
        var d = Ge(b), e = c != w.Init && Ge(c);
        e && e.detach && e.detach(a, d), d.attach && d.attach(a, e || null)
    }), re("extraKeys", null), re("lineWrapping", !1, A, !0), re("gutters", [], function (a) {
        J(a.options), E(a)
    }, !0), re("fixedGutter", !0, function (a, b) {
        a.display.gutters.style.left = b ? U(a.display) + "px" : "0", a.refresh()
    }, !0), re("coverGutterNextToScrollbar", !1, function (a) {
        O(a)
    }, !0), re("scrollbarStyle", "native", function (a) {
        N(a), O(a), a.display.scrollbars.setScrollTop(a.doc.scrollTop), a.display.scrollbars.setScrollLeft(a.doc.scrollLeft)
    }, !0), re("lineNumbers", !1, function (a) {
        J(a.options), E(a)
    }, !0), re("firstLineNumber", 1, E, !0), re("lineNumberFormatter", function (a) {
        return a
    }, E, !0), re("showCursorWhenSelecting", !1, Sb, !0), re("resetSelectionOnContextMenu", !0), re("readOnly", !1, function (a, b) {
        "nocursor" == b ? (Pd(a), a.display.input.blur(), a.display.disabled = !0) : (a.display.disabled = !1, b || ed(a))
    }), re("disableInput", !1, function (a, b) {
        b || ed(a)
    }, !0), re("dragDrop", !0), re("cursorBlinkRate", 530), re("cursorScrollMargin", 0), re("cursorHeight", 1, Sb, !0), re("singleCursorHeightPerLine", !0, Sb, !0), re("workTime", 100), re("workDelay", 100), re("flattenSpans", !0, z, !0), re("addModeClass", !1, z, !0), re("pollInterval", 100), re("undoDepth", 200, function (a, b) {
        a.doc.history.undoDepth = b
    }), re("historyEventDelay", 1250), re("viewportMargin", 10, function (a) {
        a.refresh()
    }, !0), re("maxHighlightLength", 1e4, z, !0), re("moveInputWithCursor", !0, function (a, b) {
        b || (a.display.inputDiv.style.top = a.display.inputDiv.style.left = 0)
    }), re("tabindex", null, function (a, b) {
        a.display.input.tabIndex = b || ""
    }), re("autofocus", null);
    var te = w.modes = {}, ue = w.mimeModes = {};
    w.defineMode = function (a, b) {
        w.defaults.mode || "null" == a || (w.defaults.mode = a), arguments.length > 2 && (b.dependencies = Array.prototype.slice.call(arguments, 2)), te[a] = b
    }, w.defineMIME = function (a, b) {
        ue[a] = b
    }, w.resolveMode = function (a) {
        if ("string" == typeof a && ue.hasOwnProperty(a))a = ue[a]; else if (a && "string" == typeof a.name && ue.hasOwnProperty(a.name)) {
            var b = ue[a.name];
            "string" == typeof b && (b = {name: b}), a = Wg(b, a), a.name = b.name
        } else if ("string" == typeof a && /^[\w\-]+\/[\w\-]+\+xml$/.test(a))return w.resolveMode("application/xml");
        return "string" == typeof a ? {name: a} : a || {name: "null"}
    }, w.getMode = function (a, b) {
        var b = w.resolveMode(b), c = te[b.name];
        if (!c)return w.getMode(a, "text/plain");
        var d = c(a, b);
        if (ve.hasOwnProperty(b.name)) {
            var e = ve[b.name];
            for (var f in e)e.hasOwnProperty(f) && (d.hasOwnProperty(f) && (d["_" + f] = d[f]), d[f] = e[f])
        }
        if (d.name = b.name, b.helperType && (d.helperType = b.helperType), b.modeProps)for (var f in b.modeProps)d[f] = b.modeProps[f];
        return d
    }, w.defineMode("null", function () {
        return {
            token: function (a) {
                a.skipToEnd()
            }
        }
    }), w.defineMIME("text/plain", "null");
    var ve = w.modeExtensions = {};
    w.extendMode = function (a, b) {
        var c = ve.hasOwnProperty(a) ? ve[a] : ve[a] = {};
        Xg(b, c)
    }, w.defineExtension = function (a, b) {
        w.prototype[a] = b
    }, w.defineDocExtension = function (a, b) {
        Sf.prototype[a] = b
    }, w.defineOption = re;
    var we = [];
    w.defineInitHook = function (a) {
        we.push(a)
    };
    var xe = w.helpers = {};
    w.registerHelper = function (a, b, c) {
        xe.hasOwnProperty(a) || (xe[a] = w[a] = {_global: []}), xe[a][b] = c
    }, w.registerGlobalHelper = function (a, b, c, d) {
        w.registerHelper(a, b, d), xe[a]._global.push({pred: c, val: d})
    };
    var ye = w.copyState = function (a, b) {
        if (b === !0)return b;
        if (a.copyState)return a.copyState(b);
        var c = {};
        for (var d in b) {
            var e = b[d];
            e instanceof Array && (e = e.concat([])), c[d] = e
        }
        return c
    }, ze = w.startState = function (a, b, c) {
        return a.startState ? a.startState(b, c) : !0
    };
    w.innerMode = function (a, b) {
        for (; a.innerMode;) {
            var c = a.innerMode(b);
            if (!c || c.mode == a)break;
            b = c.state, a = c.mode
        }
        return c || {mode: a, state: b}
    };
    var Ae = w.commands = {
        selectAll: function (a) {
            a.setSelection(pb(a.firstLine(), 0), pb(a.lastLine()), Kg)
        }, singleSelection: function (a) {
            a.setSelection(a.getCursor("anchor"), a.getCursor("head"), Kg)
        }, killLine: function (a) {
            me(a, function (b) {
                if (b.empty()) {
                    var c = Xf(a.doc, b.head.line).text.length;
                    return b.head.ch == c && b.head.line < a.lastLine() ? {
                        from: b.head,
                        to: pb(b.head.line + 1, 0)
                    } : {from: b.head, to: pb(b.head.line, c)}
                }
                return {from: b.from(), to: b.to()}
            })
        }, deleteLine: function (a) {
            me(a, function (b) {
                return {from: pb(b.from().line, 0), to: zb(a.doc, pb(b.to().line + 1, 0))}
            })
        }, delLineLeft: function (a) {
            me(a, function (a) {
                return {from: pb(a.from().line, 0), to: a.from()}
            })
        }, delWrappedLineLeft: function (a) {
            me(a, function (b) {
                var c = a.charCoords(b.head, "div").top + 5, d = a.coordsChar({left: 0, top: c}, "div");
                return {from: d, to: b.from()}
            })
        }, delWrappedLineRight: function (a) {
            me(a, function (b) {
                var c = a.charCoords(b.head, "div").top + 5, d = a.coordsChar({
                    left: a.display.lineDiv.offsetWidth + 100,
                    top: c
                }, "div");
                return {from: b.from(), to: d}
            })
        }, undo: function (a) {
            a.undo()
        }, redo: function (a) {
            a.redo()
        }, undoSelection: function (a) {
            a.undoSelection()
        }, redoSelection: function (a) {
            a.redoSelection()
        }, goDocStart: function (a) {
            a.extendSelection(pb(a.firstLine(), 0))
        }, goDocEnd: function (a) {
            a.extendSelection(pb(a.lastLine()))
        }, goLineStart: function (a) {
            a.extendSelectionsBy(function (b) {
                return Hh(a, b.head.line)
            }, {origin: "+move", bias: 1})
        }, goLineStartSmart: function (a) {
            a.extendSelectionsBy(function (b) {
                return Jh(a, b.head)
            }, {origin: "+move", bias: 1})
        }, goLineEnd: function (a) {
            a.extendSelectionsBy(function (b) {
                return Ih(a, b.head.line)
            }, {origin: "+move", bias: -1})
        }, goLineRight: function (a) {
            a.extendSelectionsBy(function (b) {
                var c = a.charCoords(b.head, "div").top + 5;
                return a.coordsChar({left: a.display.lineDiv.offsetWidth + 100, top: c}, "div")
            }, Mg)
        }, goLineLeft: function (a) {
            a.extendSelectionsBy(function (b) {
                var c = a.charCoords(b.head, "div").top + 5;
                return a.coordsChar({left: 0, top: c}, "div")
            }, Mg)
        }, goLineLeftSmart: function (a) {
            a.extendSelectionsBy(function (b) {
                var c = a.charCoords(b.head, "div").top + 5, d = a.coordsChar({left: 0, top: c}, "div");
                return d.ch < a.getLine(d.line).search(/\S/) ? Jh(a, b.head) : d
            }, Mg)
        }, goLineUp: function (a) {
            a.moveV(-1, "line")
        }, goLineDown: function (a) {
            a.moveV(1, "line")
        }, goPageUp: function (a) {
            a.moveV(-1, "page")
        }, goPageDown: function (a) {
            a.moveV(1, "page")
        }, goCharLeft: function (a) {
            a.moveH(-1, "char")
        }, goCharRight: function (a) {
            a.moveH(1, "char")
        }, goColumnLeft: function (a) {
            a.moveH(-1, "column")
        }, goColumnRight: function (a) {
            a.moveH(1, "column")
        }, goWordLeft: function (a) {
            a.moveH(-1, "word")
        }, goGroupRight: function (a) {
            a.moveH(1, "group")
        }, goGroupLeft: function (a) {
            a.moveH(-1, "group")
        }, goWordRight: function (a) {
            a.moveH(1, "word")
        }, delCharBefore: function (a) {
            a.deleteH(-1, "char")
        }, delCharAfter: function (a) {
            a.deleteH(1, "char")
        }, delWordBefore: function (a) {
            a.deleteH(-1, "word")
        }, delWordAfter: function (a) {
            a.deleteH(1, "word")
        }, delGroupBefore: function (a) {
            a.deleteH(-1, "group")
        }, delGroupAfter: function (a) {
            a.deleteH(1, "group")
        }, indentAuto: function (a) {
            a.indentSelection("smart")
        }, indentMore: function (a) {
            a.indentSelection("add")
        }, indentLess: function (a) {
            a.indentSelection("subtract")
        }, insertTab: function (a) {
            a.replaceSelection("	")
        }, insertSoftTab: function (a) {
            for (var b = [], c = a.listSelections(), d = a.options.tabSize, e = 0; e < c.length; e++) {
                var f = c[e].from(), g = Og(a.getLine(f.line), f.ch, d);
                b.push(new Array(d - g % d + 1).join(" "))
            }
            a.replaceSelections(b)
        }, defaultTab: function (a) {
            a.somethingSelected() ? a.indentSelection("add") : a.execCommand("insertTab")
        }, transposeChars: function (a) {
            Pc(a, function () {
                for (var b = a.listSelections(), c = [], d = 0; d < b.length; d++) {
                    var e = b[d].head, f = Xf(a.doc, e.line).text;
                    if (f)if (e.ch == f.length && (e = new pb(e.line, e.ch - 1)), e.ch > 0)e = new pb(e.line, e.ch + 1), a.replaceRange(f.charAt(e.ch - 1) + f.charAt(e.ch - 2), pb(e.line, e.ch - 2), e, "+transpose"); else if (e.line > a.doc.first) {
                        var g = Xf(a.doc, e.line - 1).text;
                        g && a.replaceRange(f.charAt(0) + "\n" + g.charAt(g.length - 1), pb(e.line - 1, g.length - 1), pb(e.line, 1), "+transpose")
                    }
                    c.push(new vb(e, e))
                }
                a.setSelections(c)
            })
        }, newlineAndIndent: function (a) {
            Pc(a, function () {
                for (var b = a.listSelections().length, c = 0; b > c; c++) {
                    var d = a.listSelections()[c];
                    a.replaceRange("\n", d.anchor, d.head, "+input"), a.indentLine(d.from().line + 1, null, !0), ie(a)
                }
            })
        }, toggleOverwrite: function (a) {
            a.toggleOverwrite()
        }
    }, Be = w.keyMap = {};
    Be.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    }, Be.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
    }, Be.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars"
    }, Be.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
    }, Be["default"] = p ? Be.macDefault : Be.pcDefault, w.normalizeKeyMap = function (a) {
        var b = {};
        for (var c in a)if (a.hasOwnProperty(c)) {
            var d = a[c];
            if (/^(name|fallthrough|(de|at)tach)$/.test(c))continue;
            if ("..." == d) {
                delete a[c];
                continue
            }
            for (var e = Vg(c.split(" "), Ce), f = 0; f < e.length; f++) {
                var g, h;
                f == e.length - 1 ? (h = c, g = d) : (h = e.slice(0, f + 1).join(" "), g = "...");
                var i = b[h];
                if (i) {
                    if (i != g)throw new Error("Inconsistent bindings for " + h)
                } else b[h] = g
            }
            delete a[c]
        }
        for (var j in b)a[j] = b[j];
        return a
    };
    var De = w.lookupKey = function (a, b, c, d) {
        b = Ge(b);
        var e = b.call ? b.call(a, d) : b[a];
        if (e === !1)return "nothing";
        if ("..." === e)return "multi";
        if (null != e && c(e))return "handled";
        if (b.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(b.fallthrough))return De(a, b.fallthrough, c, d);
            for (var f = 0; f < b.fallthrough.length; f++) {
                var g = De(a, b.fallthrough[f], c, d);
                if (g)return g
            }
        }
    }, Ee = w.isModifierKey = function (a) {
        var b = "string" == typeof a ? a : Bh[a.keyCode];
        return "Ctrl" == b || "Alt" == b || "Shift" == b || "Mod" == b
    }, Fe = w.keyName = function (a, b) {
        if (i && 34 == a.keyCode && a["char"])return !1;
        var c = Bh[a.keyCode], d = c;
        return null == d || a.altGraphKey ? !1 : (a.altKey && "Alt" != c && (d = "Alt-" + d), (s ? a.metaKey : a.ctrlKey) && "Ctrl" != c && (d = "Ctrl-" + d), (s ? a.ctrlKey : a.metaKey) && "Cmd" != c && (d = "Cmd-" + d), !b && a.shiftKey && "Shift" != c && (d = "Shift-" + d), d)
    };
    w.fromTextArea = function (a, b) {
        function d() {
            a.value = i.getValue()
        }

        if (b || (b = {}), b.value = a.value, !b.tabindex && a.tabindex && (b.tabindex = a.tabindex), !b.placeholder && a.placeholder && (b.placeholder = a.placeholder), null == b.autofocus) {
            var c = ih();
            b.autofocus = c == a || null != a.getAttribute("autofocus") && c == document.body
        }
        if (a.form && (yg(a.form, "submit", d), !b.leaveSubmitMethodAlone)) {
            var e = a.form, f = e.submit;
            try {
                var g = e.submit = function () {
                    d(), e.submit = f, e.submit(), e.submit = g
                }
            } catch (h) {
            }
        }
        a.style.display = "none";
        var i = w(function (b) {
            a.parentNode.insertBefore(b, a.nextSibling)
        }, b);
        return i.save = d, i.getTextArea = function () {
            return a
        }, i.toTextArea = function () {
            i.toTextArea = isNaN, d(), a.parentNode.removeChild(i.getWrapperElement()), a.style.display = "", a.form && (zg(a.form, "submit", d), "function" == typeof a.form.submit && (a.form.submit = f))
        }, i
    };
    var He = w.StringStream = function (a, b) {
        this.pos = this.start = 0, this.string = a, this.tabSize = b || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
    };
    He.prototype = {
        eol: function () {
            return this.pos >= this.string.length
        }, sol: function () {
            return this.pos == this.lineStart
        }, peek: function () {
            return this.string.charAt(this.pos) || void 0
        }, next: function () {
            return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
        }, eat: function (a) {
            var b = this.string.charAt(this.pos);
            if ("string" == typeof a)var c = b == a; else var c = b && (a.test ? a.test(b) : a(b));
            return c ? (++this.pos, b) : void 0
        }, eatWhile: function (a) {
            for (var b = this.pos; this.eat(a););
            return this.pos > b
        }, eatSpace: function () {
            for (var a = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;
            return this.pos > a
        }, skipToEnd: function () {
            this.pos = this.string.length
        }, skipTo: function (a) {
            var b = this.string.indexOf(a, this.pos);
            return b > -1 ? (this.pos = b, !0) : void 0
        }, backUp: function (a) {
            this.pos -= a
        }, column: function () {
            return this.lastColumnPos < this.start && (this.lastColumnValue = Og(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Og(this.string, this.lineStart, this.tabSize) : 0)
        }, indentation: function () {
            return Og(this.string, null, this.tabSize) - (this.lineStart ? Og(this.string, this.lineStart, this.tabSize) : 0)
        }, match: function (a, b, c) {
            if ("string" != typeof a) {
                var f = this.string.slice(this.pos).match(a);
                return f && f.index > 0 ? null : (f && b !== !1 && (this.pos += f[0].length), f)
            }
            var d = function (a) {
                return c ? a.toLowerCase() : a
            }, e = this.string.substr(this.pos, a.length);
            return d(e) == d(a) ? (b !== !1 && (this.pos += a.length), !0) : void 0
        }, current: function () {
            return this.string.slice(this.start, this.pos)
        }, hideFirstChars: function (a, b) {
            this.lineStart += a;
            try {
                return b()
            } finally {
                this.lineStart -= a
            }
        }
    };
    var Ie = w.TextMarker = function (a, b) {
        this.lines = [], this.type = b, this.doc = a
    };
    Hg(Ie), Ie.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            var a = this.doc.cm, b = a && !a.curOp;
            if (b && Gc(a), Gg(this, "clear")) {
                var c = this.find();
                c && Cg(this, "clear", c.from, c.to)
            }
            for (var d = null, e = null, f = 0; f < this.lines.length; ++f) {
                var g = this.lines[f], h = Re(g.markedSpans, this);
                a && !this.collapsed ? Wc(a, _f(g), "text") : a && (null != h.to && (e = _f(g)), null != h.from && (d = _f(g))), g.markedSpans = Se(g.markedSpans, h), null == h.from && this.collapsed && !mf(this.doc, g) && a && $f(g, Cc(a.display))
            }
            if (a && this.collapsed && !a.options.lineWrapping)for (var f = 0; f < this.lines.length; ++f) {
                var i = hf(this.lines[f]), j = H(i);
                j > a.display.maxLineLength && (a.display.maxLine = i, a.display.maxLineLength = j, a.display.maxLineChanged = !0)
            }
            null != d && a && this.collapsed && Vc(a, d, e + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, a && Nb(a.doc)), a && Cg(a, "markerCleared", a, this), b && Ic(a), this.parent && this.parent.clear()
        }
    }, Ie.prototype.find = function (a, b) {
        null == a && "bookmark" == this.type && (a = 1);
        for (var c, d, e = 0; e < this.lines.length; ++e) {
            var f = this.lines[e], g = Re(f.markedSpans, this);
            if (null != g.from && (c = pb(b ? f : _f(f), g.from), -1 == a))return c;
            if (null != g.to && (d = pb(b ? f : _f(f), g.to), 1 == a))return d
        }
        return c && {from: c, to: d}
    }, Ie.prototype.changed = function () {
        var a = this.find(-1, !0), b = this, c = this.doc.cm;
        a && c && Pc(c, function () {
            var d = a.line, e = _f(a.line), f = ic(c, e);
            if (f && (oc(f), c.curOp.selectionChanged = c.curOp.forceUpdate = !0), c.curOp.updateMaxLine = !0, !mf(b.doc, d) && null != b.height) {
                var g = b.height;
                b.height = null;
                var h = qf(b) - g;
                h && $f(d, d.height + h)
            }
        })
    }, Ie.prototype.attachLine = function (a) {
        if (!this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            b.maybeHiddenMarkers && -1 != Ug(b.maybeHiddenMarkers, this) || (b.maybeUnhiddenMarkers || (b.maybeUnhiddenMarkers = [])).push(this)
        }
        this.lines.push(a)
    }, Ie.prototype.detachLine = function (a) {
        if (this.lines.splice(Ug(this.lines, a), 1), !this.lines.length && this.doc.cm) {
            var b = this.doc.cm.curOp;
            (b.maybeHiddenMarkers || (b.maybeHiddenMarkers = [])).push(this)
        }
    };
    var Je = 0, Le = w.SharedTextMarker = function (a, b) {
        this.markers = a, this.primary = b;
        for (var c = 0; c < a.length; ++c)a[c].parent = this
    };
    Hg(Le), Le.prototype.clear = function () {
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var a = 0; a < this.markers.length; ++a)this.markers[a].clear();
            Cg(this, "clear")
        }
    }, Le.prototype.find = function (a, b) {
        return this.primary.find(a, b)
    };
    var of = w.LineWidget = function (a, b, c) {
        if (c)for (var d in c)c.hasOwnProperty(d) && (this[d] = c[d]);
        this.cm = a, this.node = b
    };
    Hg(of), of.prototype.clear = function () {
        var a = this.cm, b = this.line.widgets, c = this.line, d = _f(c);
        if (null != d && b) {
            for (var e = 0; e < b.length; ++e)b[e] == this && b.splice(e--, 1);
            b.length || (c.widgets = null);
            var f = qf(this);
            Pc(a, function () {
                pf(a, c, -f), Wc(a, d, "widget"), $f(c, Math.max(0, c.height - f))
            })
        }
    }, of.prototype.changed = function () {
        var a = this.height, b = this.cm, c = this.line;
        this.height = null;
        var d = qf(this) - a;
        d && Pc(b, function () {
            b.curOp.forceUpdate = !0, pf(b, c, d), $f(c, c.height + d)
        })
    };
    var sf = w.Line = function (a, b, c) {
        this.text = a, _e(this, b), this.height = c ? c(this) : 1
    };
    Hg(sf), sf.prototype.lineNo = function () {
        return _f(this)
    };
    var Df = {}, Ef = {};
    Pf.prototype = {
        chunkSize: function () {
            return this.lines.length
        }, removeInner: function (a, b) {
            for (var c = a, d = a + b; d > c; ++c) {
                var e = this.lines[c];
                this.height -= e.height, uf(e), Cg(e, "delete")
            }
            this.lines.splice(a, b)
        }, collapse: function (a) {
            a.push.apply(a, this.lines)
        }, insertInner: function (a, b, c) {
            this.height += c, this.lines = this.lines.slice(0, a).concat(b).concat(this.lines.slice(a));
            for (var d = 0; d < b.length; ++d)b[d].parent = this
        }, iterN: function (a, b, c) {
            for (var d = a + b; d > a; ++a)if (c(this.lines[a]))return !0
        }
    }, Qf.prototype = {
        chunkSize: function () {
            return this.size
        }, removeInner: function (a, b) {
            this.size -= b;
            for (var c = 0; c < this.children.length; ++c) {
                var d = this.children[c], e = d.chunkSize();
                if (e > a) {
                    var f = Math.min(b, e - a), g = d.height;
                    if (d.removeInner(a, f), this.height -= g - d.height, e == f && (this.children.splice(c--, 1), d.parent = null), 0 == (b -= f))break;
                    a = 0
                } else a -= e
            }
            if (this.size - b < 25 && (this.children.length > 1 || !(this.children[0]instanceof Pf))) {
                var h = [];
                this.collapse(h), this.children = [new Pf(h)], this.children[0].parent = this
            }
        }, collapse: function (a) {
            for (var b = 0; b < this.children.length; ++b)this.children[b].collapse(a)
        }, insertInner: function (a, b, c) {
            this.size += b.length, this.height += c;
            for (var d = 0; d < this.children.length; ++d) {
                var e = this.children[d], f = e.chunkSize();
                if (f >= a) {
                    if (e.insertInner(a, b, c), e.lines && e.lines.length > 50) {
                        for (; e.lines.length > 50;) {
                            var g = e.lines.splice(e.lines.length - 25, 25), h = new Pf(g);
                            e.height -= h.height, this.children.splice(d + 1, 0, h), h.parent = this
                        }
                        this.maybeSpill()
                    }
                    break
                }
                a -= f
            }
        }, maybeSpill: function () {
            if (!(this.children.length <= 10)) {
                var a = this;
                do {
                    var b = a.children.splice(a.children.length - 5, 5), c = new Qf(b);
                    if (a.parent) {
                        a.size -= c.size, a.height -= c.height;
                        var e = Ug(a.parent.children, a);
                        a.parent.children.splice(e + 1, 0, c)
                    } else {
                        var d = new Qf(a.children);
                        d.parent = a, a.children = [d, c], a = d
                    }
                    c.parent = a.parent
                } while (a.children.length > 10);
                a.parent.maybeSpill()
            }
        }, iterN: function (a, b, c) {
            for (var d = 0; d < this.children.length; ++d) {
                var e = this.children[d], f = e.chunkSize();
                if (f > a) {
                    var g = Math.min(b, f - a);
                    if (e.iterN(a, g, c))return !0;
                    if (0 == (b -= g))break;
                    a = 0
                } else a -= f
            }
        }
    };
    var Rf = 0, Sf = w.Doc = function (a, b, c) {
        if (!(this instanceof Sf))return new Sf(a, b, c);
        null == c && (c = 0), Qf.call(this, [new Pf([new sf("", null)])]), this.first = c, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = c;
        var d = pb(c, 0);
        this.sel = xb(d), this.history = new dg(null), this.id = ++Rf, this.modeOption = b, "string" == typeof a && (a = wh(a)), Of(this, {
            from: d,
            to: d,
            text: a
        }), Kb(this, xb(d), Kg)
    };
    Sf.prototype = Wg(Qf.prototype, {
        constructor: Sf, iter: function (a, b, c) {
            c ? this.iterN(a - this.first, b - a, c) : this.iterN(this.first, this.first + this.size, a)
        }, insert: function (a, b) {
            for (var c = 0, d = 0; d < b.length; ++d)c += b[d].height;
            this.insertInner(a - this.first, b, c)
        }, remove: function (a, b) {
            this.removeInner(a - this.first, b)
        }, getValue: function (a) {
            var b = Zf(this, this.first, this.first + this.size);
            return a === !1 ? b : b.join(a || "\n")
        }, setValue: Sc(function (a) {
            var b = pb(this.first, 0), c = this.first + this.size - 1;
            Yd(this, {
                from: b,
                to: pb(c, Xf(this, c).text.length),
                text: wh(a),
                origin: "setValue",
                full: !0
            }, !0), Kb(this, xb(b))
        }), replaceRange: function (a, b, c, d) {
            b = zb(this, b), c = c ? zb(this, c) : b, ce(this, a, b, c, d)
        }, getRange: function (a, b, c) {
            var d = Yf(this, zb(this, a), zb(this, b));
            return c === !1 ? d : d.join(c || "\n")
        }, getLine: function (a) {
            var b = this.getLineHandle(a);
            return b && b.text
        }, getLineHandle: function (a) {
            return Bb(this, a) ? Xf(this, a) : void 0
        }, getLineNumber: function (a) {
            return _f(a)
        }, getLineHandleVisualStart: function (a) {
            return "number" == typeof a && (a = Xf(this, a)), hf(a)
        }, lineCount: function () {
            return this.size
        }, firstLine: function () {
            return this.first
        }, lastLine: function () {
            return this.first + this.size - 1
        }, clipPos: function (a) {
            return zb(this, a)
        }, getCursor: function (a) {
            var c, b = this.sel.primary();
            return c = null == a || "head" == a ? b.head : "anchor" == a ? b.anchor : "end" == a || "to" == a || a === !1 ? b.to() : b.from()
        }, listSelections: function () {
            return this.sel.ranges
        }, somethingSelected: function () {
            return this.sel.somethingSelected()
        }, setCursor: Sc(function (a, b, c) {
            Hb(this, zb(this, "number" == typeof a ? pb(a, b || 0) : a), null, c)
        }), setSelection: Sc(function (a, b, c) {
            Hb(this, zb(this, a), zb(this, b || a), c)
        }), extendSelection: Sc(function (a, b, c) {
            Eb(this, zb(this, a), b && zb(this, b), c)
        }), extendSelections: Sc(function (a, b) {
            Fb(this, Cb(this, a, b))
        }), extendSelectionsBy: Sc(function (a, b) {
            Fb(this, Vg(this.sel.ranges, a), b)
        }), setSelections: Sc(function (a, b, c) {
            if (a.length) {
                for (var d = 0, e = []; d < a.length; d++)e[d] = new vb(zb(this, a[d].anchor), zb(this, a[d].head));
                null == b && (b = Math.min(a.length - 1, this.sel.primIndex)), Kb(this, wb(e, b), c)
            }
        }), addSelection: Sc(function (a, b, c) {
            var d = this.sel.ranges.slice(0);
            d.push(new vb(zb(this, a), zb(this, b || a))), Kb(this, wb(d, d.length - 1), c)
        }), getSelection: function (a) {
            for (var c, b = this.sel.ranges, d = 0; d < b.length; d++) {
                var e = Yf(this, b[d].from(), b[d].to());
                c = c ? c.concat(e) : e
            }
            return a === !1 ? c : c.join(a || "\n")
        }, getSelections: function (a) {
            for (var b = [], c = this.sel.ranges, d = 0; d < c.length; d++) {
                var e = Yf(this, c[d].from(), c[d].to());
                a !== !1 && (e = e.join(a || "\n")), b[d] = e
            }
            return b
        }, replaceSelection: function (a, b, c) {
            for (var d = [], e = 0; e < this.sel.ranges.length; e++)d[e] = a;
            this.replaceSelections(d, b, c || "+input")
        }, replaceSelections: Sc(function (a, b, c) {
            for (var d = [], e = this.sel, f = 0; f < e.ranges.length; f++) {
                var g = e.ranges[f];
                d[f] = {from: g.from(), to: g.to(), text: wh(a[f]), origin: c}
            }
            for (var h = b && "end" != b && Wd(this, d, b), f = d.length - 1; f >= 0; f--)Yd(this, d[f]);
            h ? Jb(this, h) : this.cm && ie(this.cm)
        }), undo: Sc(function () {
            $d(this, "undo")
        }), redo: Sc(function () {
            $d(this, "redo")
        }), undoSelection: Sc(function () {
            $d(this, "undo", !0)
        }), redoSelection: Sc(function () {
            $d(this, "redo", !0)
        }), setExtending: function (a) {
            this.extend = a
        }, getExtending: function () {
            return this.extend
        }, historySize: function () {
            for (var a = this.history, b = 0, c = 0, d = 0; d < a.done.length; d++)a.done[d].ranges || ++b;
            for (var d = 0; d < a.undone.length; d++)a.undone[d].ranges || ++c;
            return {undo: b, redo: c}
        }, clearHistory: function () {
            this.history = new dg(this.history.maxGeneration)
        }, markClean: function () {
            this.cleanGeneration = this.changeGeneration(!0)
        }, changeGeneration: function (a) {
            return a && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
        }, isClean: function (a) {
            return this.history.generation == (a || this.cleanGeneration)
        }, getHistory: function () {
            return {done: og(this.history.done), undone: og(this.history.undone)}
        }, setHistory: function (a) {
            var b = this.history = new dg(this.history.maxGeneration);
            b.done = og(a.done.slice(0), null, !0), b.undone = og(a.undone.slice(0), null, !0)
        }, addLineClass: Sc(function (a, b, c) {
            return le(this, a, "gutter" == b ? "gutter" : "class", function (a) {
                var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass";
                if (a[d]) {
                    if (jh(c).test(a[d]))return !1;
                    a[d] += " " + c
                } else a[d] = c;
                return !0
            })
        }), removeLineClass: Sc(function (a, b, c) {
            return le(this, a, "gutter" == b ? "gutter" : "class", function (a) {
                var d = "text" == b ? "textClass" : "background" == b ? "bgClass" : "gutter" == b ? "gutterClass" : "wrapClass", e = a[d];
                if (!e)return !1;
                if (null == c)a[d] = null; else {
                    var f = e.match(jh(c));
                    if (!f)return !1;
                    var g = f.index + f[0].length;
                    a[d] = e.slice(0, f.index) + (f.index && g != e.length ? " " : "") + e.slice(g) || null
                }
                return !0
            })
        }), markText: function (a, b, c) {
            return Ke(this, zb(this, a), zb(this, b), c, "range")
        }, setBookmark: function (a, b) {
            var c = {
                replacedWith: b && (null == b.nodeType ? b.widget : b),
                insertLeft: b && b.insertLeft,
                clearWhenEmpty: !1,
                shared: b && b.shared
            };
            return a = zb(this, a), Ke(this, a, a, c, "bookmark")
        }, findMarksAt: function (a) {
            a = zb(this, a);
            var b = [], c = Xf(this, a.line).markedSpans;
            if (c)for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                (null == e.from || e.from <= a.ch) && (null == e.to || e.to >= a.ch) && b.push(e.marker.parent || e.marker)
            }
            return b
        }, findMarks: function (a, b, c) {
            a = zb(this, a), b = zb(this, b);
            var d = [], e = a.line;
            return this.iter(a.line, b.line + 1, function (f) {
                var g = f.markedSpans;
                if (g)for (var h = 0; h < g.length; h++) {
                    var i = g[h];
                    e == a.line && a.ch > i.to || null == i.from && e != a.line || e == b.line && i.from > b.ch || c && !c(i.marker) || d.push(i.marker.parent || i.marker)
                }
                ++e
            }), d
        }, getAllMarks: function () {
            var a = [];
            return this.iter(function (b) {
                var c = b.markedSpans;
                if (c)for (var d = 0; d < c.length; ++d)null != c[d].from && a.push(c[d].marker)
            }), a
        }, posFromIndex: function (a) {
            var b, c = this.first;
            return this.iter(function (d) {
                var e = d.text.length + 1;
                return e > a ? (b = a, !0) : (a -= e, ++c, void 0)
            }), zb(this, pb(c, b))
        }, indexFromPos: function (a) {
            a = zb(this, a);
            var b = a.ch;
            return a.line < this.first || a.ch < 0 ? 0 : (this.iter(this.first, a.line, function (a) {
                b += a.text.length + 1
            }), b)
        }, copy: function (a) {
            var b = new Sf(Zf(this, this.first, this.first + this.size), this.modeOption, this.first);
            return b.scrollTop = this.scrollTop, b.scrollLeft = this.scrollLeft, b.sel = this.sel, b.extend = !1, a && (b.history.undoDepth = this.history.undoDepth, b.setHistory(this.getHistory())), b
        }, linkedDoc: function (a) {
            a || (a = {});
            var b = this.first, c = this.first + this.size;
            null != a.from && a.from > b && (b = a.from), null != a.to && a.to < c && (c = a.to);
            var d = new Sf(Zf(this, b, c), a.mode || this.modeOption, b);
            return a.sharedHist && (d.history = this.history), (this.linked || (this.linked = [])).push({
                doc: d,
                sharedHist: a.sharedHist
            }), d.linked = [{doc: this, isParent: !0, sharedHist: a.sharedHist}], Oe(d, Ne(this)), d
        }, unlinkDoc: function (a) {
            if (a instanceof w && (a = a.doc), this.linked)for (var b = 0; b < this.linked.length; ++b) {
                var c = this.linked[b];
                if (c.doc == a) {
                    this.linked.splice(b, 1), a.unlinkDoc(this), Pe(Ne(this));
                    break
                }
            }
            if (a.history == this.history) {
                var d = [a.id];
                Vf(a, function (a) {
                    d.push(a.id)
                }, !0), a.history = new dg(null), a.history.done = og(this.history.done, d), a.history.undone = og(this.history.undone, d)
            }
        }, iterLinkedDocs: function (a) {
            Vf(this, a)
        }, getMode: function () {
            return this.mode
        }, getEditor: function () {
            return this.cm
        }
    }), Sf.prototype.eachLine = Sf.prototype.iter;
    var Tf = "iter insert remove copy getEditor".split(" ");
    for (var Uf in Sf.prototype)Sf.prototype.hasOwnProperty(Uf) && Ug(Tf, Uf) < 0 && (w.prototype[Uf] = function (a) {
        return function () {
            return a.apply(this.doc, arguments)
        }
    }(Sf.prototype[Uf]));
    Hg(Sf);
    var sg = w.e_preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    }, tg = w.e_stopPropagation = function (a) {
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
    }, vg = w.e_stop = function (a) {
        sg(a), tg(a)
    }, yg = w.on = function (a, b, c) {
        if (a.addEventListener)a.addEventListener(b, c, !1); else if (a.attachEvent)a.attachEvent("on" + b, c); else {
            var d = a._handlers || (a._handlers = {}), e = d[b] || (d[b] = []);
            e.push(c)
        }
    }, zg = w.off = function (a, b, c) {
        if (a.removeEventListener)a.removeEventListener(b, c, !1); else if (a.detachEvent)a.detachEvent("on" + b, c); else {
            var d = a._handlers && a._handlers[b];
            if (!d)return;
            for (var e = 0; e < d.length; ++e)if (d[e] == c) {
                d.splice(e, 1);
                break
            }
        }
    }, Ag = w.signal = function (a, b) {
        var c = a._handlers && a._handlers[b];
        if (c)for (var d = Array.prototype.slice.call(arguments, 2), e = 0; e < c.length; ++e)c[e].apply(null, d)
    }, Bg = null, Ig = 30, Jg = w.Pass = {
        toString: function () {
            return "CodeMirror.Pass"
        }
    }, Kg = {scroll: !1}, Lg = {origin: "*mouse"}, Mg = {origin: "+move"};
    Ng.prototype.set = function (a, b) {
        clearTimeout(this.id), this.id = setTimeout(b, a)
    };
    var Og = w.countColumn = function (a, b, c, d, e) {
        null == b && (b = a.search(/[^\s\u00a0]/), -1 == b && (b = a.length));
        for (var f = d || 0, g = e || 0; ;) {
            var h = a.indexOf("	", f);
            if (0 > h || h >= b)return g + (b - f);
            g += h - f, g += c - g % c, f = h + 1
        }
    }, Qg = [""], Tg = function (a) {
        a.select()
    };
    n ? Tg = function (a) {
        a.selectionStart = 0, a.selectionEnd = a.value.length
    } : d && (Tg = function (a) {
        try {
            a.select()
        } catch (b) {
        }
    });
    var eh, Zg = /[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, $g = w.isWordChar = function (a) {
        return /\w/.test(a) || a > "\x80" && (a.toUpperCase() != a.toLowerCase() || Zg.test(a))
    }, bh = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    eh = document.createRange ? function (a, b, c) {
        var d = document.createRange();
        return d.setEnd(a, c), d.setStart(a, b), d
    } : function (a, b, c) {
        var d = document.body.createTextRange();
        try {
            d.moveToElementText(a.parentNode)
        } catch (e) {
            return d
        }
        return d.collapse(!0), d.moveEnd("character", c), d.moveStart("character", b), d
    }, d && 11 > e && (ih = function () {
        try {
            return document.activeElement
        } catch (a) {
            return document.body
        }
    });
    var sh, uh, kh = w.rmClass = function (a, b) {
        var c = a.className, d = jh(b).exec(c);
        if (d) {
            var e = c.slice(d.index + d[0].length);
            a.className = c.slice(0, d.index) + (e ? d[1] + e : "")
        }
    }, lh = w.addClass = function (a, b) {
        var c = a.className;
        jh(b).test(c) || (a.className += (c ? " " : "") + b)
    }, oh = !1, rh = function () {
        if (d && 9 > e)return !1;
        var a = dh("div");
        return "draggable"in a || "dragDrop"in a
    }(), wh = w.splitLines = 3 != "\n\nb".split(/\n/).length ? function (a) {
        for (var b = 0, c = [], d = a.length; d >= b;) {
            var e = a.indexOf("\n", b);
            -1 == e && (e = a.length);
            var f = a.slice(b, "\r" == a.charAt(e - 1) ? e - 1 : e), g = f.indexOf("\r");
            -1 != g ? (c.push(f.slice(0, g)), b += g + 1) : (c.push(f), b = e + 1)
        }
        return c
    } : function (a) {
        return a.split(/\r\n?|\n/)
    }, xh = window.getSelection ? function (a) {
        try {
            return a.selectionStart != a.selectionEnd
        } catch (b) {
            return !1
        }
    } : function (a) {
        try {
            var b = a.ownerDocument.selection.createRange()
        } catch (c) {
        }
        return b && b.parentElement() == a ? 0 != b.compareEndPoints("StartToEnd", b) : !1
    }, yh = function () {
        var a = dh("div");
        return "oncopy"in a ? !0 : (a.setAttribute("oncopy", "return;"), "function" == typeof a.oncopy)
    }(), zh = null, Bh = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        107: "=",
        109: "-",
        127: "Delete",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    };
    w.keyNames = Bh, function () {
        for (var a = 0; 10 > a; a++)Bh[a + 48] = Bh[a + 96] = String(a);
        for (var a = 65; 90 >= a; a++)Bh[a] = String.fromCharCode(a);
        for (var a = 1; 12 >= a; a++)Bh[a + 111] = Bh[a + 63235] = "F" + a
    }();
    var Lh, Qh = function () {
        function c(c) {
            return 247 >= c ? a.charAt(c) : c >= 1424 && 1524 >= c ? "R" : c >= 1536 && 1773 >= c ? b.charAt(c - 1536) : c >= 1774 && 2220 >= c ? "r" : c >= 8192 && 8203 >= c ? "w" : 8204 == c ? "b" : "L"
        }

        function j(a, b, c) {
            this.level = a, this.from = b, this.to = c
        }

        var a = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", b = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm", d = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, e = /[stwN]/, f = /[LRr]/, g = /[Lb1n]/, h = /[1n]/, i = "L";
        return function (a) {
            if (!d.test(a))return !1;
            for (var m, b = a.length, k = [], l = 0; b > l; ++l)k.push(m = c(a.charCodeAt(l)));
            for (var l = 0, n = i; b > l; ++l) {
                var m = k[l];
                "m" == m ? k[l] = n : n = m
            }
            for (var l = 0, o = i; b > l; ++l) {
                var m = k[l];
                "1" == m && "r" == o ? k[l] = "n" : f.test(m) && (o = m, "r" == m && (k[l] = "R"))
            }
            for (var l = 1, n = k[0]; b - 1 > l; ++l) {
                var m = k[l];
                "+" == m && "1" == n && "1" == k[l + 1] ? k[l] = "1" : "," != m || n != k[l + 1] || "1" != n && "n" != n || (k[l] = n), n = m
            }
            for (var l = 0; b > l; ++l) {
                var m = k[l];
                if ("," == m)k[l] = "N"; else if ("%" == m) {
                    for (var p = l + 1; b > p && "%" == k[p]; ++p);
                    for (var q = l && "!" == k[l - 1] || b > p && "1" == k[p] ? "1" : "N", r = l; p > r; ++r)k[r] = q;
                    l = p - 1
                }
            }
            for (var l = 0, o = i; b > l; ++l) {
                var m = k[l];
                "L" == o && "1" == m ? k[l] = "L" : f.test(m) && (o = m)
            }
            for (var l = 0; b > l; ++l)if (e.test(k[l])) {
                for (var p = l + 1; b > p && e.test(k[p]); ++p);
                for (var s = "L" == (l ? k[l - 1] : i), t = "L" == (b > p ? k[p] : i), q = s || t ? "L" : "R", r = l; p > r; ++r)k[r] = q;
                l = p - 1
            }
            for (var v, u = [], l = 0; b > l;)if (g.test(k[l])) {
                var w = l;
                for (++l; b > l && g.test(k[l]); ++l);
                u.push(new j(0, w, l))
            } else {
                var x = l, y = u.length;
                for (++l; b > l && "L" != k[l]; ++l);
                for (var r = x; l > r;)if (h.test(k[r])) {
                    r > x && u.splice(y, 0, new j(1, x, r));
                    var z = r;
                    for (++r; l > r && h.test(k[r]); ++r);
                    u.splice(y, 0, new j(2, z, r)), x = r
                } else++r;
                l > x && u.splice(y, 0, new j(1, x, l))
            }
            return 1 == u[0].level && (v = a.match(/^\s+/)) && (u[0].from = v[0].length, u.unshift(new j(0, 0, v[0].length))), 1 == Sg(u).level && (v = a.match(/\s+$/)) && (Sg(u).to -= v[0].length, u.push(new j(0, b - v[0].length, b))), u[0].level != Sg(u).level && u.push(new j(u[0].level, b, b)), u
        }
    }();
    return w.version = "4.11.1", w
}), function (a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function (a) {
    "use strict";
    a.defineMode("javascript", function (b, c) {
        function m(a) {
            for (var c, b = !1, d = !1; null != (c = a.next());) {
                if (!b) {
                    if ("/" == c && !d)return;
                    "[" == c ? d = !0 : d && "]" == c && (d = !1)
                }
                b = !b && "\\" == c
            }
        }

        function p(a, b, c) {
            return n = a, o = c, b
        }

        function q(a, b) {
            var c = a.next();
            if ('"' == c || "'" == c)return b.tokenize = r(c), b.tokenize(a, b);
            if ("." == c && a.match(/^\d+(?:[eE][+\-]?\d+)?/))return p("number", "number");
            if ("." == c && a.match(".."))return p("spread", "meta");
            if (/[\[\]{}\(\),;\:\.]/.test(c))return p(c);
            if ("=" == c && a.eat(">"))return p("=>", "operator");
            if ("0" == c && a.eat(/x/i))return a.eatWhile(/[\da-f]/i), p("number", "number");
            if (/\d/.test(c))return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), p("number", "number");
            if ("/" == c)return a.eat("*") ? (b.tokenize = s, s(a, b)) : a.eat("/") ? (a.skipToEnd(), p("comment", "comment")) : "operator" == b.lastType || "keyword c" == b.lastType || "sof" == b.lastType || /^[\[{}\(,;:]$/.test(b.lastType) ? (m(a), a.eatWhile(/[gimy]/), p("regexp", "string-2")) : (a.eatWhile(k), p("operator", "operator", a.current()));
            if ("`" == c)return b.tokenize = t, t(a, b);
            if ("#" == c)return a.skipToEnd(), p("error", "error");
            if (k.test(c))return a.eatWhile(k), p("operator", "operator", a.current());
            if (i.test(c)) {
                a.eatWhile(i);
                var d = a.current(), e = j.propertyIsEnumerable(d) && j[d];
                return e && "." != b.lastType ? p(e.type, e.style, d) : p("variable", "variable", d)
            }
        }

        function r(a) {
            return function (b, c) {
                var e, d = !1;
                if (f && "@" == b.peek() && b.match(l))return c.tokenize = q, p("jsonld-keyword", "meta");
                for (; null != (e = b.next()) && (e != a || d);)d = !d && "\\" == e;
                return d || (c.tokenize = q), p("string", "string")
            }
        }

        function s(a, b) {
            for (var d, c = !1; d = a.next();) {
                if ("/" == d && c) {
                    b.tokenize = q;
                    break
                }
                c = "*" == d
            }
            return p("comment", "comment")
        }

        function t(a, b) {
            for (var d, c = !1; null != (d = a.next());) {
                if (!c && ("`" == d || "$" == d && a.eat("{"))) {
                    b.tokenize = q;
                    break
                }
                c = !c && "\\" == d
            }
            return p("quasi", "string-2", a.current())
        }

        function v(a, b) {
            b.fatArrowAt && (b.fatArrowAt = null);
            var c = a.string.indexOf("=>", a.start);
            if (!(0 > c)) {
                for (var d = 0, e = !1, f = c - 1; f >= 0; --f) {
                    var g = a.string.charAt(f), h = u.indexOf(g);
                    if (h >= 0 && 3 > h) {
                        if (!d) {
                            ++f;
                            break
                        }
                        if (0 == --d)break
                    } else if (h >= 3 && 6 > h)++d; else if (i.test(g))e = !0; else {
                        if (/["'\/]/.test(g))return;
                        if (e && !d) {
                            ++f;
                            break
                        }
                    }
                }
                e && !d && (b.fatArrowAt = f)
            }
        }

        function x(a, b, c, d, e, f) {
            this.indented = a, this.column = b, this.type = c, this.prev = e, this.info = f, null != d && (this.align = d)
        }

        function y(a, b) {
            for (var c = a.localVars; c; c = c.next)if (c.name == b)return !0;
            for (var d = a.context; d; d = d.prev)for (var c = d.vars; c; c = c.next)if (c.name == b)return !0
        }

        function z(a, b, c, d, e) {
            var f = a.cc;
            for (A.state = a, A.stream = e, A.marked = null, A.cc = f, A.style = b, a.lexical.hasOwnProperty("align") || (a.lexical.align = !0); ;) {
                var h = f.length ? f.pop() : g ? L : K;
                if (h(c, d)) {
                    for (; f.length && f[f.length - 1].lex;)f.pop()();
                    return A.marked ? A.marked : "variable" == c && y(a, d) ? "variable-2" : b
                }
            }
        }

        function B() {
            for (var a = arguments.length - 1; a >= 0; a--)A.cc.push(arguments[a])
        }

        function C() {
            return B.apply(null, arguments), !0
        }

        function D(a) {
            function b(b) {
                for (var c = b; c; c = c.next)if (c.name == a)return !0;
                return !1
            }

            var d = A.state;
            if (d.context) {
                if (A.marked = "def", b(d.localVars))return;
                d.localVars = {name: a, next: d.localVars}
            } else {
                if (b(d.globalVars))return;
                c.globalVars && (d.globalVars = {name: a, next: d.globalVars})
            }
        }

        function F() {
            A.state.context = {prev: A.state.context, vars: A.state.localVars}, A.state.localVars = E
        }

        function G() {
            A.state.localVars = A.state.context.vars, A.state.context = A.state.context.prev
        }

        function H(a, b) {
            var c = function () {
                var c = A.state, d = c.indented;
                if ("stat" == c.lexical.type)d = c.lexical.indented; else for (var e = c.lexical; e && ")" == e.type && e.align; e = e.prev)d = e.indented;
                c.lexical = new x(d, A.stream.column(), a, null, c.lexical, b)
            };
            return c.lex = !0, c
        }

        function I() {
            var a = A.state;
            a.lexical.prev && (")" == a.lexical.type && (a.indented = a.lexical.indented), a.lexical = a.lexical.prev)
        }

        function J(a) {
            function b(c) {
                return c == a ? C() : ";" == a ? B() : C(b)
            }

            return b
        }

        function K(a, b) {
            return "var" == a ? C(H("vardef", b.length), eb, J(";"), I) : "keyword a" == a ? C(H("form"), L, K, I) : "keyword b" == a ? C(H("form"), K, I) : "{" == a ? C(H("}"), bb, I) : ";" == a ? C() : "if" == a ? ("else" == A.state.lexical.info && A.state.cc[A.state.cc.length - 1] == I && A.state.cc.pop()(), C(H("form"), L, K, I, jb)) : "function" == a ? C(pb) : "for" == a ? C(H("form"), kb, K, I) : "variable" == a ? C(H("stat"), W) : "switch" == a ? C(H("form"), L, H("}", "switch"), J("{"), bb, I, I) : "case" == a ? C(L, J(":")) : "default" == a ? C(J(":")) : "catch" == a ? C(H("form"), F, J("("), qb, J(")"), K, I, G) : "module" == a ? C(H("form"), F, vb, G, I) : "class" == a ? C(H("form"), rb, I) : "export" == a ? C(H("form"), wb, I) : "import" == a ? C(H("form"), xb, I) : B(H("stat"), L, J(";"), I)
        }

        function L(a) {
            return N(a, !1)
        }

        function M(a) {
            return N(a, !0)
        }

        function N(a, b) {
            if (A.state.fatArrowAt == A.stream.start) {
                var c = b ? V : U;
                if ("(" == a)return C(F, H(")"), _(fb, ")"), I, J("=>"), c, G);
                if ("variable" == a)return B(F, fb, J("=>"), c, G)
            }
            var d = b ? R : Q;
            return w.hasOwnProperty(a) ? C(d) : "function" == a ? C(pb, d) : "keyword c" == a ? C(b ? P : O) : "(" == a ? C(H(")"), O, Cb, J(")"), I, d) : "operator" == a || "spread" == a ? C(b ? M : L) : "[" == a ? C(H("]"), Ab, I, d) : "{" == a ? ab(Y, "}", null, d) : "quasi" == a ? B(S, d) : C()
        }

        function O(a) {
            return a.match(/[;\}\)\],]/) ? B() : B(L)
        }

        function P(a) {
            return a.match(/[;\}\)\],]/) ? B() : B(M)
        }

        function Q(a, b) {
            return "," == a ? C(L) : R(a, b, !1)
        }

        function R(a, b, c) {
            var d = 0 == c ? Q : R, e = 0 == c ? L : M;
            return "=>" == a ? C(F, c ? V : U, G) : "operator" == a ? /\+\+|--/.test(b) ? C(d) : "?" == b ? C(L, J(":"), e) : C(e) : "quasi" == a ? B(S, d) : ";" != a ? "(" == a ? ab(M, ")", "call", d) : "." == a ? C(X, d) : "[" == a ? C(H("]"), O, J("]"), I, d) : void 0 : void 0
        }

        function S(a, b) {
            return "quasi" != a ? B() : "${" != b.slice(b.length - 2) ? C(S) : C(L, T)
        }

        function T(a) {
            return "}" == a ? (A.marked = "string-2", A.state.tokenize = t, C(S)) : void 0
        }

        function U(a) {
            return v(A.stream, A.state), B("{" == a ? K : L)
        }

        function V(a) {
            return v(A.stream, A.state), B("{" == a ? K : M)
        }

        function W(a) {
            return ":" == a ? C(I, K) : B(Q, J(";"), I)
        }

        function X(a) {
            return "variable" == a ? (A.marked = "property", C()) : void 0
        }

        function Y(a, b) {
            return "variable" == a || "keyword" == A.style ? (A.marked = "property", "get" == b || "set" == b ? C(Z) : C($)) : "number" == a || "string" == a ? (A.marked = f ? "property" : A.style + " property", C($)) : "jsonld-keyword" == a ? C($) : "[" == a ? C(L, J("]"), $) : void 0
        }

        function Z(a) {
            return "variable" != a ? B($) : (A.marked = "property", C(pb))
        }

        function $(a) {
            return ":" == a ? C(M) : "(" == a ? B(pb) : void 0
        }

        function _(a, b) {
            function c(d) {
                if ("," == d) {
                    var e = A.state.lexical;
                    return "call" == e.info && (e.pos = (e.pos || 0) + 1), C(a, c)
                }
                return d == b ? C() : C(J(b))
            }

            return function (d) {
                return d == b ? C() : B(a, c)
            }
        }

        function ab(a, b, c) {
            for (var d = 3; d < arguments.length; d++)A.cc.push(arguments[d]);
            return C(H(b, c), _(a, b), I)
        }

        function bb(a) {
            return "}" == a ? C() : B(K, bb)
        }

        function cb(a) {
            return h && ":" == a ? C(db) : void 0
        }

        function db(a) {
            return "variable" == a ? (A.marked = "variable-3", C()) : void 0
        }

        function eb() {
            return B(fb, cb, hb, ib)
        }

        function fb(a, b) {
            return "variable" == a ? (D(b), C()) : "[" == a ? ab(fb, "]") : "{" == a ? ab(gb, "}") : void 0
        }

        function gb(a, b) {
            return "variable" != a || A.stream.match(/^\s*:/, !1) ? ("variable" == a && (A.marked = "property"), C(J(":"), fb, hb)) : (D(b), C(hb))
        }

        function hb(a, b) {
            return "=" == b ? C(M) : void 0
        }

        function ib(a) {
            return "," == a ? C(eb) : void 0
        }

        function jb(a, b) {
            return "keyword b" == a && "else" == b ? C(H("form", "else"), K, I) : void 0
        }

        function kb(a) {
            return "(" == a ? C(H(")"), lb, J(")"), I) : void 0
        }

        function lb(a) {
            return "var" == a ? C(eb, J(";"), nb) : ";" == a ? C(nb) : "variable" == a ? C(mb) : B(L, J(";"), nb)
        }

        function mb(a, b) {
            return "in" == b || "of" == b ? (A.marked = "keyword", C(L)) : C(Q, nb)
        }

        function nb(a, b) {
            return ";" == a ? C(ob) : "in" == b || "of" == b ? (A.marked = "keyword", C(L)) : B(L, J(";"), ob)
        }

        function ob(a) {
            ")" != a && C(L)
        }

        function pb(a, b) {
            return "*" == b ? (A.marked = "keyword", C(pb)) : "variable" == a ? (D(b), C(pb)) : "(" == a ? C(F, H(")"), _(qb, ")"), I, K, G) : void 0
        }

        function qb(a) {
            return "spread" == a ? C(qb) : B(fb, cb)
        }

        function rb(a, b) {
            return "variable" == a ? (D(b), C(sb)) : void 0
        }

        function sb(a, b) {
            return "extends" == b ? C(L, sb) : "{" == a ? C(H("}"), tb, I) : void 0
        }

        function tb(a, b) {
            return "variable" == a || "keyword" == A.style ? (A.marked = "property", "get" == b || "set" == b ? C(ub, pb, tb) : C(pb, tb)) : "*" == b ? (A.marked = "keyword", C(tb)) : ";" == a ? C(tb) : "}" == a ? C() : void 0
        }

        function ub(a) {
            return "variable" != a ? B() : (A.marked = "property", C())
        }

        function vb(a, b) {
            return "string" == a ? C(K) : "variable" == a ? (D(b), C(zb)) : void 0
        }

        function wb(a, b) {
            return "*" == b ? (A.marked = "keyword", C(zb, J(";"))) : "default" == b ? (A.marked = "keyword", C(L, J(";"))) : B(K)
        }

        function xb(a) {
            return "string" == a ? C() : B(yb, zb)
        }

        function yb(a, b) {
            return "{" == a ? ab(yb, "}") : ("variable" == a && D(b), C())
        }

        function zb(a, b) {
            return "from" == b ? (A.marked = "keyword", C(L)) : void 0
        }

        function Ab(a) {
            return "]" == a ? C() : B(M, Bb)
        }

        function Bb(a) {
            return "for" == a ? B(Cb, J("]")) : "," == a ? C(_(P, "]")) : B(_(M, "]"))
        }

        function Cb(a) {
            return "for" == a ? C(kb, Cb) : "if" == a ? C(L, Cb) : void 0
        }

        function Db(a, b) {
            return "operator" == a.lastType || "," == a.lastType || k.test(b.charAt(0)) || /[,.]/.test(b.charAt(0))
        }

        var n, o, d = b.indentUnit, e = c.statementIndent, f = c.jsonld, g = c.json || f, h = c.typescript, i = c.wordCharacters || /[\w$\xa1-\uffff]/, j = function () {
            function a(a) {
                return {type: a, style: "keyword"}
            }

            var b = a("keyword a"), c = a("keyword b"), d = a("keyword c"), e = a("operator"), f = {
                type: "atom",
                style: "atom"
            }, g = {
                "if": a("if"),
                "while": b,
                "with": b,
                "else": c,
                "do": c,
                "try": c,
                "finally": c,
                "return": d,
                "break": d,
                "continue": d,
                "new": d,
                "delete": d,
                "throw": d,
                "debugger": d,
                "var": a("var"),
                "const": a("var"),
                let: a("var"),
                "function": a("function"),
                "catch": a("catch"),
                "for": a("for"),
                "switch": a("switch"),
                "case": a("case"),
                "default": a("default"),
                "in": e,
                "typeof": e,
                "instanceof": e,
                "true": f,
                "false": f,
                "null": f,
                undefined: f,
                NaN: f,
                Infinity: f,
                "this": a("this"),
                module: a("module"),
                "class": a("class"),
                "super": a("atom"),
                yield: d,
                "export": a("export"),
                "import": a("import"),
                "extends": d
            };
            if (h) {
                var i = {type: "variable", style: "variable-3"}, j = {
                    "interface": a("interface"),
                    "extends": a("extends"),
                    constructor: a("constructor"),
                    "public": a("public"),
                    "private": a("private"),
                    "protected": a("protected"),
                    "static": a("static"),
                    string: i,
                    number: i,
                    bool: i,
                    any: i
                };
                for (var k in j)g[k] = j[k]
            }
            return g
        }(), k = /[+\-*&%=<>!?|~^]/, l = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/, u = "([{}])", w = {
            atom: !0,
            number: !0,
            variable: !0,
            string: !0,
            regexp: !0,
            "this": !0,
            "jsonld-keyword": !0
        }, A = {state: null, column: null, marked: null, cc: null}, E = {name: "this", next: {name: "arguments"}};
        return I.lex = !0, {
            startState: function (a) {
                var b = {
                    tokenize: q,
                    lastType: "sof",
                    cc: [],
                    lexical: new x((a || 0) - d, 0, "block", !1),
                    localVars: c.localVars,
                    context: c.localVars && {vars: c.localVars},
                    indented: 0
                };
                return c.globalVars && "object" == typeof c.globalVars && (b.globalVars = c.globalVars), b
            },
            token: function (a, b) {
                if (a.sol() && (b.lexical.hasOwnProperty("align") || (b.lexical.align = !1), b.indented = a.indentation(), v(a, b)), b.tokenize != s && a.eatSpace())return null;
                var c = b.tokenize(a, b);
                return "comment" == n ? c : (b.lastType = "operator" != n || "++" != o && "--" != o ? n : "incdec", z(b, c, n, o, a))
            },
            indent: function (b, f) {
                if (b.tokenize == s)return a.Pass;
                if (b.tokenize != q)return 0;
                var g = f && f.charAt(0), h = b.lexical;
                if (!/^\s*else\b/.test(f))for (var i = b.cc.length - 1; i >= 0; --i) {
                    var j = b.cc[i];
                    if (j == I)h = h.prev; else if (j != jb)break
                }
                "stat" == h.type && "}" == g && (h = h.prev), e && ")" == h.type && "stat" == h.prev.type && (h = h.prev);
                var k = h.type, l = g == k;
                return "vardef" == k ? h.indented + ("operator" == b.lastType || "," == b.lastType ? h.info + 1 : 0) : "form" == k && "{" == g ? h.indented : "form" == k ? h.indented + d : "stat" == k ? h.indented + (Db(b, f) ? e || d : 0) : "switch" != h.info || l || 0 == c.doubleIndentSwitch ? h.align ? h.column + (l ? 0 : 1) : h.indented + (l ? 0 : d) : h.indented + (/^(?:case|default)\b/.test(f) ? d : 2 * d)
            },
            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
            blockCommentStart: g ? null : "/*",
            blockCommentEnd: g ? null : "*/",
            lineComment: g ? null : "//",
            fold: "brace",
            helperType: g ? "json" : "javascript",
            jsonldMode: f,
            jsonMode: g
        }
    }), a.registerHelper("wordChars", "javascript", /[\w$]/), a.defineMIME("text/javascript", "javascript"), a.defineMIME("text/ecmascript", "javascript"), a.defineMIME("application/javascript", "javascript"), a.defineMIME("application/x-javascript", "javascript"), a.defineMIME("application/ecmascript", "javascript"), a.defineMIME("application/json", {
        name: "javascript",
        json: !0
    }), a.defineMIME("application/x-json", {
        name: "javascript",
        json: !0
    }), a.defineMIME("application/ld+json", {
        name: "javascript",
        jsonld: !0
    }), a.defineMIME("text/typescript", {
        name: "javascript",
        typescript: !0
    }), a.defineMIME("application/typescript", {name: "javascript", typescript: !0})
}), function (a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function (a) {
    "use strict";
    a.defineMode("xml", function (b, c) {
        function k(a, b) {
            function c(c) {
                return b.tokenize = c, c(a, b)
            }

            var d = a.next();
            if ("<" == d)return a.eat("!") ? a.eat("[") ? a.match("CDATA[") ? c(n("atom", "]]>")) : null : a.match("--") ? c(n("comment", "-->")) : a.match("DOCTYPE", !0, !0) ? (a.eatWhile(/[\w\._\-]/), c(o(1))) : null : a.eat("?") ? (a.eatWhile(/[\w\._\-]/), b.tokenize = n("meta", "?>"), "meta") : (i = a.eat("/") ? "closeTag" : "openTag", b.tokenize = l, "tag bracket");
            if ("&" == d) {
                var e;
                return e = a.eat("#") ? a.eat("x") ? a.eatWhile(/[a-fA-F\d]/) && a.eat(";") : a.eatWhile(/[\d]/) && a.eat(";") : a.eatWhile(/[\w\.\-:]/) && a.eat(";"), e ? "atom" : "error"
            }
            return a.eatWhile(/[^&<]/), null
        }

        function l(a, b) {
            var c = a.next();
            if (">" == c || "/" == c && a.eat(">"))return b.tokenize = k, i = ">" == c ? "endTag" : "selfcloseTag", "tag bracket";
            if ("=" == c)return i = "equals", null;
            if ("<" == c) {
                b.tokenize = k, b.state = s, b.tagName = b.tagStart = null;
                var d = b.tokenize(a, b);
                return d ? d + " tag error" : "tag error"
            }
            return /[\'\"]/.test(c) ? (b.tokenize = m(c), b.stringStartCol = a.column(), b.tokenize(a, b)) : (a.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word")
        }

        function m(a) {
            var b = function (b, c) {
                for (; !b.eol();)if (b.next() == a) {
                    c.tokenize = l;
                    break
                }
                return "string"
            };
            return b.isInAttribute = !0, b
        }

        function n(a, b) {
            return function (c, d) {
                for (; !c.eol();) {
                    if (c.match(b)) {
                        d.tokenize = k;
                        break
                    }
                    c.next()
                }
                return a
            }
        }

        function o(a) {
            return function (b, c) {
                for (var d; null != (d = b.next());) {
                    if ("<" == d)return c.tokenize = o(a + 1), c.tokenize(b, c);
                    if (">" == d) {
                        if (1 == a) {
                            c.tokenize = k;
                            break
                        }
                        return c.tokenize = o(a - 1), c.tokenize(b, c)
                    }
                }
                return "meta"
            }
        }

        function p(a, b, c) {
            this.prev = a.context, this.tagName = b, this.indent = a.indented, this.startOfLine = c, (g.doNotIndent.hasOwnProperty(b) || a.context && a.context.noIndent) && (this.noIndent = !0)
        }

        function q(a) {
            a.context && (a.context = a.context.prev)
        }

        function r(a, b) {
            for (var c; ;) {
                if (!a.context)return;
                if (c = a.context.tagName, !g.contextGrabbers.hasOwnProperty(c) || !g.contextGrabbers[c].hasOwnProperty(b))return;
                q(a)
            }
        }

        function s(a, b, c) {
            return "openTag" == a ? (c.tagStart = b.column(), t) : "closeTag" == a ? u : s
        }

        function t(a, b, c) {
            return "word" == a ? (c.tagName = b.current(), j = "tag", x) : (j = "error", t)
        }

        function u(a, b, c) {
            if ("word" == a) {
                var d = b.current();
                return c.context && c.context.tagName != d && g.implicitlyClosed.hasOwnProperty(c.context.tagName) && q(c), c.context && c.context.tagName == d ? (j = "tag", v) : (j = "tag error", w)
            }
            return j = "error", w
        }

        function v(a, b, c) {
            return "endTag" != a ? (j = "error", v) : (q(c), s)
        }

        function w(a, b, c) {
            return j = "error", v(a, b, c)
        }

        function x(a, b, c) {
            if ("word" == a)return j = "attribute", y;
            if ("endTag" == a || "selfcloseTag" == a) {
                var d = c.tagName, e = c.tagStart;
                return c.tagName = c.tagStart = null, "selfcloseTag" == a || g.autoSelfClosers.hasOwnProperty(d) ? r(c, d) : (r(c, d), c.context = new p(c, d, e == c.indented)), s
            }
            return j = "error", x
        }

        function y(a, b, c) {
            return "equals" == a ? z : (g.allowMissing || (j = "error"), x(a, b, c))
        }

        function z(a, b, c) {
            return "string" == a ? A : "word" == a && g.allowUnquoted ? (j = "string", x) : (j = "error", x(a, b, c))
        }

        function A(a, b, c) {
            return "string" == a ? A : x(a, b, c)
        }

        var d = b.indentUnit, e = c.multilineTagIndentFactor || 1, f = c.multilineTagIndentPastTag;
        null == f && (f = !0);
        var i, j, g = c.htmlMode ? {
            autoSelfClosers: {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0,
                menuitem: !0
            },
            implicitlyClosed: {
                dd: !0,
                li: !0,
                optgroup: !0,
                option: !0,
                p: !0,
                rp: !0,
                rt: !0,
                tbody: !0,
                td: !0,
                tfoot: !0,
                th: !0,
                tr: !0
            },
            contextGrabbers: {
                dd: {dd: !0, dt: !0},
                dt: {dd: !0, dt: !0},
                li: {li: !0},
                option: {option: !0, optgroup: !0},
                optgroup: {optgroup: !0},
                p: {
                    address: !0,
                    article: !0,
                    aside: !0,
                    blockquote: !0,
                    dir: !0,
                    div: !0,
                    dl: !0,
                    fieldset: !0,
                    footer: !0,
                    form: !0,
                    h1: !0,
                    h2: !0,
                    h3: !0,
                    h4: !0,
                    h5: !0,
                    h6: !0,
                    header: !0,
                    hgroup: !0,
                    hr: !0,
                    menu: !0,
                    nav: !0,
                    ol: !0,
                    p: !0,
                    pre: !0,
                    section: !0,
                    table: !0,
                    ul: !0
                },
                rp: {rp: !0, rt: !0},
                rt: {rp: !0, rt: !0},
                tbody: {tbody: !0, tfoot: !0},
                td: {td: !0, th: !0},
                tfoot: {tbody: !0},
                th: {td: !0, th: !0},
                thead: {tbody: !0, tfoot: !0},
                tr: {tr: !0}
            },
            doNotIndent: {pre: !0},
            allowUnquoted: !0,
            allowMissing: !0,
            caseFold: !0
        } : {
            autoSelfClosers: {},
            implicitlyClosed: {},
            contextGrabbers: {},
            doNotIndent: {},
            allowUnquoted: !1,
            allowMissing: !1,
            caseFold: !1
        }, h = c.alignCDATA;
        return {
            startState: function () {
                return {tokenize: k, state: s, indented: 0, tagName: null, tagStart: null, context: null}
            },
            token: function (a, b) {
                if (!b.tagName && a.sol() && (b.indented = a.indentation()), a.eatSpace())return null;
                i = null;
                var c = b.tokenize(a, b);
                return (c || i) && "comment" != c && (j = null, b.state = b.state(i || c, a, b), j && (c = "error" == j ? c + " error" : j)), c
            },
            indent: function (b, c, i) {
                var j = b.context;
                if (b.tokenize.isInAttribute)return b.tagStart == b.indented ? b.stringStartCol + 1 : b.indented + d;
                if (j && j.noIndent)return a.Pass;
                if (b.tokenize != l && b.tokenize != k)return i ? i.match(/^(\s*)/)[0].length : 0;
                if (b.tagName)return f ? b.tagStart + b.tagName.length + 2 : b.tagStart + d * e;
                if (h && /<!\[CDATA\[/.test(c))return 0;
                var m = c && /^<(\/)?([\w_:\.-]*)/.exec(c);
                if (m && m[1])for (; j;) {
                    if (j.tagName == m[2]) {
                        j = j.prev;
                        break
                    }
                    if (!g.implicitlyClosed.hasOwnProperty(j.tagName))break;
                    j = j.prev
                } else if (m)for (; j;) {
                    var n = g.contextGrabbers[j.tagName];
                    if (!n || !n.hasOwnProperty(m[2]))break;
                    j = j.prev
                }
                for (; j && !j.startOfLine;)j = j.prev;
                return j ? j.indent + d : 0
            },
            electricInput: /<\/[\s\w:]+>$/,
            blockCommentStart: "<!--",
            blockCommentEnd: "-->",
            configuration: c.htmlMode ? "html" : "xml",
            helperType: c.htmlMode ? "html" : "xml"
        }
    }), a.defineMIME("text/xml", "xml"), a.defineMIME("application/xml", "xml"), a.mimeModes.hasOwnProperty("text/html") || a.defineMIME("text/html", {
        name: "xml",
        htmlMode: !0
    })
}), function (a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function (a) {
    "use strict";
    function d(a) {
        for (var d = 0; d < a.state.activeLines.length; d++)a.removeLineClass(a.state.activeLines[d], "wrap", b), a.removeLineClass(a.state.activeLines[d], "background", c)
    }

    function e(a, b) {
        if (a.length != b.length)return !1;
        for (var c = 0; c < a.length; c++)if (a[c] != b[c])return !1;
        return !0
    }

    function f(a, f) {
        for (var g = [], h = 0; h < f.length; h++) {
            var i = f[h];
            if (i.empty()) {
                var j = a.getLineHandleVisualStart(i.head.line);
                g[g.length - 1] != j && g.push(j)
            }
        }
        e(a.state.activeLines, g) || a.operation(function () {
            d(a);
            for (var e = 0; e < g.length; e++)a.addLineClass(g[e], "wrap", b), a.addLineClass(g[e], "background", c);
            a.state.activeLines = g
        })
    }

    function g(a, b) {
        f(a, b.ranges)
    }

    var b = "CodeMirror-activeline", c = "CodeMirror-activeline-background";
    a.defineOption("styleActiveLine", !1, function (b, c, e) {
        var h = e && e != a.Init;
        c && !h ? (b.state.activeLines = [], f(b, b.listSelections()), b.on("beforeSelectionChange", g)) : !c && h && (b.off("beforeSelectionChange", g), d(b), delete b.state.activeLines)
    })
}), function (a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function (a) {
    "use strict";
    a.registerHelper("fold", "brace", function (b, c) {
        function h(f) {
            for (var h = c.ch, i = 0; ;) {
                var j = 0 >= h ? -1 : e.lastIndexOf(f, h - 1);
                if (-1 != j) {
                    if (1 == i && j < c.ch)break;
                    if (g = b.getTokenTypeAt(a.Pos(d, j + 1)), !/^(comment|string)/.test(g))return j + 1;
                    h = j - 1
                } else {
                    if (1 == i)break;
                    i = 1, h = e.length
                }
            }
        }

        var f, g, d = c.line, e = b.getLine(d), i = "{", j = "}", f = h("{");
        if (null == f && (i = "[", j = "]", f = h("[")), null != f) {
            var m, n, k = 1, l = b.lastLine();
            a:for (var o = d; l >= o; ++o)for (var p = b.getLine(o), q = o == d ? f : 0; ;) {
                var r = p.indexOf(i, q), s = p.indexOf(j, q);
                if (0 > r && (r = p.length), 0 > s && (s = p.length), q = Math.min(r, s), q == p.length)break;
                if (b.getTokenTypeAt(a.Pos(o, q + 1)) == g)if (q == r)++k; else if (!--k) {
                    m = o, n = q;
                    break a
                }
                ++q
            }
            if (null != m && (d != m || n != f))return {from: a.Pos(d, f), to: a.Pos(m, n)}
        }
    }), a.registerHelper("fold", "import", function (b, c) {
        function d(c) {
            if (c < b.firstLine() || c > b.lastLine())return null;
            var d = b.getTokenAt(a.Pos(c, 1));
            if (/\S/.test(d.string) || (d = b.getTokenAt(a.Pos(c, d.end + 1))), "keyword" != d.type || "import" != d.string)return null;
            for (var e = c, f = Math.min(b.lastLine(), c + 10); f >= e; ++e) {
                var g = b.getLine(e), h = g.indexOf(";");
                if (-1 != h)return {startCh: d.end, end: a.Pos(e, h)}
            }
        }

        var f, c = c.line, e = d(c);
        if (!e || d(c - 1) || (f = d(c - 2)) && f.end.line == c - 1)return null;
        for (var g = e.end; ;) {
            var h = d(g.line + 1);
            if (null == h)break;
            g = h.end
        }
        return {from: b.clipPos(a.Pos(c, e.startCh + 1)), to: g}
    }), a.registerHelper("fold", "include", function (b, c) {
        function d(c) {
            if (c < b.firstLine() || c > b.lastLine())return null;
            var d = b.getTokenAt(a.Pos(c, 1));
            return /\S/.test(d.string) || (d = b.getTokenAt(a.Pos(c, d.end + 1))), "meta" == d.type && "#include" == d.string.slice(0, 8) ? d.start + 8 : void 0
        }

        var c = c.line, e = d(c);
        if (null == e || null != d(c - 1))return null;
        for (var f = c; ;) {
            var g = d(f + 1);
            if (null == g)break;
            ++f
        }
        return {from: a.Pos(c, e + 1), to: b.clipPos(a.Pos(f))}
    })
}), function (a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function (a) {
    function f(a, b) {
        var c = a.getRange(e(b.line, b.ch - 1), e(b.line, b.ch + 1));
        return 2 == c.length ? c : null
    }

    function g(b, c, d) {
        var e = b.getLine(c.line), f = b.getTokenAt(c);
        if (/\bstring2?\b/.test(f.type))return !1;
        var g = new a.StringStream(e.slice(0, c.ch) + d + e.slice(c.ch), 4);
        for (g.pos = g.start = f.start; ;) {
            var h = b.getMode().token(g, f.state);
            if (g.pos >= c.ch + 1)return /\bstring2?\b/.test(h);
            g.start = g.pos
        }
    }

    function h(b) {
        for (var c = {
            name: "autoCloseBrackets", Backspace: function (c) {
                if (c.getOption("disableInput"))return a.Pass;
                for (var d = c.listSelections(), g = 0; g < d.length; g++) {
                    if (!d[g].empty())return a.Pass;
                    var h = f(c, d[g].head);
                    if (!h || 0 != b.indexOf(h) % 2)return a.Pass
                }
                for (var g = d.length - 1; g >= 0; g--) {
                    var i = d[g].head;
                    c.replaceRange("", e(i.line, i.ch - 1), e(i.line, i.ch + 1))
                }
            }
        }, h = "", i = 0; i < b.length; i += 2)!function (b, f) {
            h += f, c["'" + b + "'"] = function (c) {
                if (c.getOption("disableInput"))return a.Pass;
                for (var j, k, i = c.listSelections(), l = 0; l < i.length; l++) {
                    var o, m = i[l], n = m.head, k = c.getRange(n, e(n.line, n.ch + 1));
                    if (m.empty())if (b == f && k == f)o = c.getRange(n, e(n.line, n.ch + 3)) == b + b + b ? "skipThree" : "skip"; else if (b == f && n.ch > 1 && c.getRange(e(n.line, n.ch - 2), n) == b + b && (n.ch <= 2 || c.getRange(e(n.line, n.ch - 3), e(n.line, n.ch - 2)) != b))o = "addFour"; else if ('"' == b || "'" == b) {
                        if (a.isWordChar(k) || !g(c, n, b))return a.Pass;
                        o = "both"
                    } else {
                        if (!(c.getLine(n.line).length == n.ch || h.indexOf(k) >= 0 || d.test(k)))return a.Pass;
                        o = "both"
                    } else o = "surround";
                    if (j) {
                        if (j != o)return a.Pass
                    } else j = o
                }
                c.operation(function () {
                    if ("skip" == j)c.execCommand("goCharRight"); else if ("skipThree" == j)for (var a = 0; 3 > a; a++)c.execCommand("goCharRight"); else if ("surround" == j) {
                        for (var d = c.getSelections(), a = 0; a < d.length; a++)d[a] = b + d[a] + f;
                        c.replaceSelections(d, "around")
                    } else"both" == j ? (c.replaceSelection(b + f, null), c.execCommand("goCharLeft")) : "addFour" == j && (c.replaceSelection(b + b + b + b, "before"), c.execCommand("goCharRight"))
                })
            }, b != f && (c["'" + f + "'"] = function (b) {
                for (var c = b.listSelections(), d = 0; d < c.length; d++) {
                    var g = c[d];
                    if (!g.empty() || b.getRange(g.head, e(g.head.line, g.head.ch + 1)) != f)return a.Pass
                }
                b.execCommand("goCharRight")
            })
        }(b.charAt(i), b.charAt(i + 1));
        return c
    }

    function i(b) {
        return function (c) {
            if (c.getOption("disableInput"))return a.Pass;
            for (var d = c.listSelections(), e = 0; e < d.length; e++) {
                if (!d[e].empty())return a.Pass;
                var g = f(c, d[e].head);
                if (!g || 0 != b.indexOf(g) % 2)return a.Pass
            }
            c.operation(function () {
                c.replaceSelection("\n\n", null), c.execCommand("goCharLeft"), d = c.listSelections();
                for (var a = 0; a < d.length; a++) {
                    var b = d[a].head.line;
                    c.indentLine(b, null, !0), c.indentLine(b + 1, null, !0)
                }
            })
        }
    }

    var b = "()[]{}''\"\"", c = "[]{}", d = /\s/, e = a.Pos;
    a.defineOption("autoCloseBrackets", !1, function (d, e, f) {
        if (f != a.Init && f && d.removeKeyMap("autoCloseBrackets"), e) {
            var g = b, j = c;
            "string" == typeof e ? g = e : "object" == typeof e && (null != e.pairs && (g = e.pairs), null != e.explode && (j = e.explode));
            var k = h(g);
            j && (k.Enter = i(j)), d.addKeyMap(k)
        }
    })
}), function (a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("../fold/xml-fold")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "../fold/xml-fold"], a) : a(CodeMirror)
}(function (a) {
    function d(d) {
        if (d.getOption("disableInput"))return a.Pass;
        for (var e = d.listSelections(), f = [], i = 0; i < e.length; i++) {
            if (!e[i].empty())return a.Pass;
            var j = e[i].head, k = d.getTokenAt(j), l = a.innerMode(d.getMode(), k.state), m = l.state;
            if ("xml" != l.mode.name || !m.tagName)return a.Pass;
            var n = d.getOption("autoCloseTags"), o = "html" == l.mode.configuration, p = "object" == typeof n && n.dontCloseTags || o && b, q = "object" == typeof n && n.indentTags || o && c, r = m.tagName;
            k.end > j.ch && (r = r.slice(0, r.length - k.end + j.ch));
            var s = r.toLowerCase();
            if (!r || "string" == k.type && (k.end != j.ch || !/[\"\']/.test(k.string.charAt(k.string.length - 1)) || 1 == k.string.length) || "tag" == k.type && "closeTag" == m.type || k.string.indexOf("/") == k.string.length - 1 || p && g(p, s) > -1 || h(d, r, j, m, !0))return a.Pass;
            var t = q && g(q, s) > -1;
            f[i] = {
                indent: t,
                text: ">" + (t ? "\n\n" : "") + "</" + r + ">",
                newPos: t ? a.Pos(j.line + 1, 0) : a.Pos(j.line, j.ch + 1)
            }
        }
        for (var i = e.length - 1; i >= 0; i--) {
            var u = f[i];
            d.replaceRange(u.text, e[i].head, e[i].anchor, "+insert");
            var v = d.listSelections().slice(0);
            v[i] = {
                head: u.newPos,
                anchor: u.newPos
            }, d.setSelections(v), u.indent && (d.indentLine(u.newPos.line, null, !0), d.indentLine(u.newPos.line + 1, null, !0))
        }
    }

    function e(b, c) {
        for (var d = b.listSelections(), e = [], f = c ? "/" : "</", g = 0; g < d.length; g++) {
            if (!d[g].empty())return a.Pass;
            var i = d[g].head, j = b.getTokenAt(i), k = a.innerMode(b.getMode(), j.state), l = k.state;
            if (c && ("string" == j.type || "<" != j.string.charAt(0) || j.start != i.ch - 1))return a.Pass;
            if ("xml" != k.mode.name)if ("htmlmixed" == b.getMode().name && "javascript" == k.mode.name)e[g] = f + "script>"; else {
                if ("htmlmixed" != b.getMode().name || "css" != k.mode.name)return a.Pass;
                e[g] = f + "style>"
            } else {
                if (!l.context || !l.context.tagName || h(b, l.context.tagName, i, l))return a.Pass;
                e[g] = f + l.context.tagName + ">"
            }
        }
        b.replaceSelections(e), d = b.listSelections();
        for (var g = 0; g < d.length; g++)(g == d.length - 1 || d[g].head.line < d[g + 1].head.line) && b.indentLine(d[g].head.line)
    }

    function f(b) {
        return b.getOption("disableInput") ? a.Pass : (e(b, !0), void 0)
    }

    function g(a, b) {
        if (a.indexOf)return a.indexOf(b);
        for (var c = 0, d = a.length; d > c; ++c)if (a[c] == b)return c;
        return -1
    }

    function h(b, c, d, e, f) {
        if (!a.scanForClosingTag)return !1;
        var g = Math.min(b.lastLine() + 1, d.line + 500), h = a.scanForClosingTag(b, d, null, g);
        if (!h || h.tag != c)return !1;
        for (var i = e.context, j = f ? 1 : 0; i && i.tagName == c; i = i.prev)++j;
        d = h.to;
        for (var k = 1; j > k; k++) {
            var l = a.scanForClosingTag(b, d, null, g);
            if (!l || l.tag != c)return !1;
            d = l.to
        }
        return !0
    }

    a.defineOption("autoCloseTags", !1, function (b, c, e) {
        if (e != a.Init && e && b.removeKeyMap("autoCloseTags"), c) {
            var g = {name: "autoCloseTags"};
            ("object" != typeof c || c.whenClosing) && (g["'/'"] = function (a) {
                return f(a)
            }), ("object" != typeof c || c.whenOpening) && (g["'>'"] = function (a) {
                return d(a)
            }), b.addKeyMap(g)
        }
    });
    var b = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"], c = ["applet", "blockquote", "body", "button", "div", "dl", "fieldset", "form", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "html", "iframe", "layer", "legend", "object", "ol", "p", "select", "table", "ul"];
    a.commands.closeTag = function (a) {
        return e(a)
    }
}), function (a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror"), require("./runmode")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror", "./runmode"], a) : a(CodeMirror)
}(function (a) {
    "use strict";
    function c(a, d) {
        if (3 == a.nodeType)return d.push(a.nodeValue);
        for (var e = a.firstChild; e; e = e.nextSibling)c(e, d), b.test(a.nodeType) && d.push("\n")
    }

    var b = /^(p|li|div|h\\d|pre|blockquote|td)$/;
    a.colorize = function (b, d) {
        b || (b = document.body.getElementsByTagName("pre"));
        for (var e = 0; e < b.length; ++e) {
            var f = b[e], g = f.getAttribute("data-lang") || d;
            if (g) {
                var h = [];
                c(f, h), f.innerHTML = "", a.runMode(h.join(""), g, f), f.className += " cm-s-default"
            }
        }
    }
}), function (a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function (a) {
    "use strict";
    function b(b, d, f, g) {
        function j(a) {
            var c = h(b, d);
            if (!c || c.to.line - c.from.line < i)return null;
            for (var e = b.findMarksAt(c.from), f = 0; f < e.length; ++f)if (e[f].__isFold && "fold" !== g) {
                if (!a)return null;
                c.cleared = !0, e[f].clear()
            }
            return c
        }

        if (f && f.call) {
            var h = f;
            f = null
        } else var h = e(b, f, "rangeFinder");
        "number" == typeof d && (d = a.Pos(d, 0));
        var i = e(b, f, "minFoldSize"), k = j(!0);
        if (e(b, f, "scanUp"))for (; !k && d.line > b.firstLine();)d = a.Pos(d.line - 1, 0), k = j(!1);
        if (k && !k.cleared && "unfold" !== g) {
            var l = c(b, f);
            a.on(l, "mousedown", function (b) {
                m.clear(), a.e_preventDefault(b)
            });
            var m = b.markText(k.from, k.to, {replacedWith: l, clearOnEnter: !0, __isFold: !0});
            m.on("clear", function (c, d) {
                a.signal(b, "unfold", b, c, d)
            }), a.signal(b, "fold", b, k.from, k.to)
        }
    }

    function c(a, b) {
        var c = e(a, b, "widget");
        if ("string" == typeof c) {
            var d = document.createTextNode(c);
            c = document.createElement("span"), c.appendChild(d), c.className = "CodeMirror-foldmarker"
        }
        return c
    }

    function e(a, b, c) {
        if (b && void 0 !== b[c])return b[c];
        var e = a.options.foldOptions;
        return e && void 0 !== e[c] ? e[c] : d[c]
    }

    a.newFoldFunction = function (a, c) {
        return function (d, e) {
            b(d, e, {rangeFinder: a, widget: c})
        }
    }, a.defineExtension("foldCode", function (a, c, d) {
        b(this, a, c, d)
    }), a.defineExtension("isFolded", function (a) {
        for (var b = this.findMarksAt(a), c = 0; c < b.length; ++c)if (b[c].__isFold)return !0
    }), a.commands.toggleFold = function (a) {
        a.foldCode(a.getCursor())
    }, a.commands.fold = function (a) {
        a.foldCode(a.getCursor(), null, "fold")
    }, a.commands.unfold = function (a) {
        a.foldCode(a.getCursor(), null, "unfold")
    }, a.commands.foldAll = function (b) {
        b.operation(function () {
            for (var c = b.firstLine(), d = b.lastLine(); d >= c; c++)b.foldCode(a.Pos(c, 0), null, "fold")
        })
    }, a.commands.unfoldAll = function (b) {
        b.operation(function () {
            for (var c = b.firstLine(), d = b.lastLine(); d >= c; c++)b.foldCode(a.Pos(c, 0), null, "unfold")
        })
    }, a.registerHelper("fold", "combine", function () {
        var a = Array.prototype.slice.call(arguments, 0);
        return function (b, c) {
            for (var d = 0; d < a.length; ++d) {
                var e = a[d](b, c);
                if (e)return e
            }
        }
    }), a.registerHelper("fold", "auto", function (a, b) {
        for (var c = a.getHelpers(b, "fold"), d = 0; d < c.length; d++) {
            var e = c[d](a, b);
            if (e)return e
        }
    });
    var d = {rangeFinder: a.fold.auto, widget: "\u2194", minFoldSize: 0, scanUp: !1};
    a.defineOption("foldOptions", null), a.defineExtension("foldOption", function (a, b) {
        return e(this, a, b)
    })
}), function (a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function (a) {
    "use strict";
    function e(a, b) {
        if (!window.JSHINT)return [];
        JSHINT(a, b);
        var c = JSHINT.data().errors, d = [];
        return c && i(c, d), d
    }

    function f(a) {
        return g(a, c, "warning", !0), g(a, d, "error"), h(a) ? null : a
    }

    function g(a, b, c, d) {
        var e, f, g, h, i;
        e = a.description;
        for (var j = 0; j < b.length; j++)f = b[j], g = "string" == typeof f ? f : f[0], h = "string" == typeof f ? null : f[1], i = -1 !== e.indexOf(g), (d || i) && (a.severity = c), i && h && (a.description = h)
    }

    function h(a) {
        for (var c = a.description, d = 0; d < b.length; d++)if (-1 !== c.indexOf(b[d]))return !0;
        return !1
    }

    function i(b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (e) {
                var g, h;
                if (g = [], e.evidence) {
                    var i = g[e.line];
                    if (!i) {
                        var j = e.evidence;
                        i = [], Array.prototype.forEach.call(j, function (a, b) {
                            "	" === a && i.push(b + 1)
                        }), g[e.line] = i
                    }
                    if (i.length > 0) {
                        var k = e.character;
                        i.forEach(function (a) {
                            k > a && (k -= 1)
                        }), e.character = k
                    }
                }
                var l = e.character - 1, m = l + 1;
                e.evidence && (h = e.evidence.substring(l).search(/.\b/), h > -1 && (m += h)), e.description = e.reason, e.start = e.character, e.end = m, e = f(e), e && c.push({
                    message: e.description,
                    severity: e.severity,
                    from: a.Pos(e.line - 1, l),
                    to: a.Pos(e.line - 1, m)
                })
            }
        }
    }

    var b = ["Dangerous comment"], c = [["Expected '{'", "Statement body should be inside '{ }' braces."]], d = ["Missing semicolon", "Extra comma", "Missing property name", "Unmatched ", " and instead saw", " is not defined", "Unclosed string", "Stopping, unable to continue"];
    a.registerHelper("lint", "javascript", e)
}), function (a) {
    "object" == typeof exports && "object" == typeof module ? a(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define(["../../lib/codemirror"], a) : a(CodeMirror)
}(function (a) {
    "use strict";
    a.registerHelper("lint", "json", function (b) {
        var c = [];
        jsonlint.parseError = function (b, d) {
            var e = d.loc;
            c.push({
                from: a.Pos(e.first_line - 1, e.first_column),
                to: a.Pos(e.last_line - 1, e.last_column),
                message: b
            })
        };
        try {
            jsonlint.parse(b)
        } catch (d) {
        }
        return c
    })
});
