(function () {
    var n = (function () {
        return this;
    })();
    !n && "undefined" != typeof window && (n = window);
    var q = function (b, a, d) {
        "string" != typeof b
            ? q.original
                ? q.original.apply(this, arguments)
                : (console.error(
                      "dropping module because define wasn't a string."
                  ),
                  console.trace())
            : (2 == arguments.length && (d = a),
              q.modules[b] || ((q.payloads[b] = d), (q.modules[b] = null)));
    };
    q.modules = {};
    q.payloads = {};
    var t = function (b, a, d) {
            if ("string" == typeof a) {
                if (((b = c(b, a)), void 0 != b)) return d && d(), b;
            } else if ("[object Array]" === Object.prototype.toString.call(a)) {
                for (var e = [], m = 0, f = a.length; m < f; ++m) {
                    var k = c(b, a[m]);
                    if (void 0 == k && h.original) return;
                    e.push(k);
                }
                return (d && d.apply(null, e)) || !0;
            }
        },
        h = function (b, a) {
            var d = t("", b, a);
            return void 0 == d && h.original
                ? h.original.apply(this, arguments)
                : d;
        },
        g = function (b, a) {
            if (-1 !== a.indexOf("!"))
                return (a = a.split("!")), g(b, a[0]) + "!" + g(b, a[1]);
            if ("." == a.charAt(0))
                for (
                    a = b.split("/").slice(0, -1).join("/") + "/" + a;
                    -1 !== a.indexOf(".") && d != a;

                ) {
                    var d = a;
                    a = a.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
                }
            return a;
        },
        c = function (b, a) {
            a = g(b, a);
            b = q.modules[a];
            if (!b) {
                b = q.payloads[a];
                if ("function" == typeof b) {
                    var d = {};
                    var e = { id: a, uri: "", exports: d, packaged: !0 };
                    d =
                        b(
                            function (d, e) {
                                return t(a, d, e);
                            },
                            d,
                            e
                        ) || e.exports;
                    q.modules[a] = d;
                    delete q.payloads[a];
                }
                b = q.modules[a] = d || b;
            }
            return b;
        };
    (function (b) {
        var a = n;
        b && (n[b] || (n[b] = {}), (a = n[b]));
        (a.define && a.define.packaged) ||
            ((q.original = a.define), (a.define = q), (a.define.packaged = !0));
        (a.require && a.require.packaged) ||
            ((h.original = a.require),
            (a.require = h),
            (a.require.packaged = !0));
    })("ace");
})();
ace.define("ace/lib/regexp", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    function h(a, d, b) {
        if (Array.prototype.indexOf) return a.indexOf(d, b);
        for (b = b || 0; b < a.length; b++) if (a[b] === d) return b;
        return -1;
    }
    var g = RegExp.prototype.exec,
        c = RegExp.prototype.test,
        b = String.prototype.replace,
        a = void 0 === g.call(/()??/, "")[1],
        d = (function () {
            var a = /^/g;
            return c.call(a, ""), !a.lastIndex;
        })();
    (d && a) ||
        ((RegExp.prototype.exec = function (e) {
            var m = g.apply(this, arguments),
                c;
            if ("string" == typeof e && m) {
                !a &&
                    1 < m.length &&
                    -1 < h(m, "") &&
                    ((c = RegExp(
                        this.source,
                        b.call(
                            (this.global ? "g" : "") +
                                (this.ignoreCase ? "i" : "") +
                                (this.multiline ? "m" : "") +
                                (this.extended ? "x" : "") +
                                (this.sticky ? "y" : ""),
                            "g",
                            ""
                        )
                    )),
                    b.call(e.slice(m.index), c, function () {
                        for (var a = 1; a < arguments.length - 2; a++)
                            void 0 === arguments[a] && (m[a] = void 0);
                    }));
                if (this._xregexp && this._xregexp.captureNames)
                    for (var k = 1; k < m.length; k++)
                        (c = this._xregexp.captureNames[k - 1]) &&
                            (m[c] = m[k]);
                !d &&
                    this.global &&
                    !m[0].length &&
                    this.lastIndex > m.index &&
                    this.lastIndex--;
            }
            return m;
        }),
        d ||
            (RegExp.prototype.test = function (a) {
                a = g.call(this, a);
                return (
                    a &&
                        this.global &&
                        !a[0].length &&
                        this.lastIndex > a.index &&
                        this.lastIndex--,
                    !!a
                );
            }));
});
ace.define("ace/lib/es5-shim", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    function h() {}
    function g(a) {
        try {
            return Object.defineProperty(a, "sentinel", {}), "sentinel" in a;
        } catch (A) {}
    }
    function c(a) {
        return (
            (a = +a),
            a !== a
                ? (a = 0)
                : 0 !== a &&
                  a !== 1 / 0 &&
                  a !== -1 / 0 &&
                  (a = (0 < a || -1) * Math.floor(Math.abs(a))),
            a
        );
    }
    Function.prototype.bind ||
        (Function.prototype.bind = function (d) {
            var e = this;
            if ("function" != typeof e)
                throw new TypeError(
                    "Function.prototype.bind called on incompatible " + e
                );
            var p = a.call(arguments, 1),
                b = function () {
                    if (this instanceof b) {
                        var m = e.apply(this, p.concat(a.call(arguments)));
                        return Object(m) === m ? m : this;
                    }
                    return e.apply(d, p.concat(a.call(arguments)));
                };
            return (
                e.prototype &&
                    ((h.prototype = e.prototype),
                    (b.prototype = new h()),
                    (h.prototype = null)),
                b
            );
        });
    n = Function.prototype.call;
    var b = Object.prototype,
        a = Array.prototype.slice,
        d = n.bind(b.toString),
        e = n.bind(b.hasOwnProperty),
        m;
    if ((m = e(b, "__defineGetter__"))) {
        var f = n.bind(b.__defineGetter__);
        var k = n.bind(b.__defineSetter__);
        var l = n.bind(b.__lookupGetter__);
        var v = n.bind(b.__lookupSetter__);
    }
    if (2 != [1, 2].splice(0).length)
        if (
            (function () {
                function a(a) {
                    a = Array(a + 2);
                    return (a[0] = a[1] = 0), a;
                }
                var d = [];
                d.splice.apply(d, a(20));
                d.splice.apply(d, a(26));
                var e = d.length;
                d.splice(5, 0, "XXX");
                e + 1 == d.length;
                if (e + 1 == d.length) return !0;
            })()
        ) {
            var u = Array.prototype.splice;
            Array.prototype.splice = function (d, e) {
                return arguments.length
                    ? u.apply(
                          this,
                          [
                              void 0 === d ? 0 : d,
                              void 0 === e ? this.length - d : e,
                          ].concat(a.call(arguments, 2))
                      )
                    : [];
            };
        } else
            Array.prototype.splice = function (d, e) {
                var p = this.length;
                0 < d
                    ? d > p && (d = p)
                    : void 0 == d
                    ? (d = 0)
                    : 0 > d && (d = Math.max(p + d, 0));
                d + e < p || (e = p - d);
                var b = this.slice(d, d + e),
                    m = a.call(arguments, 2),
                    c = m.length;
                if (d === p) c && this.push.apply(this, m);
                else {
                    var f = Math.min(e, p - d),
                        l = d + f,
                        k = l + c - f,
                        r = p - l,
                        p = p - f;
                    if (k < l)
                        for (f = 0; f < r; ++f) this[k + f] = this[l + f];
                    else if (k > l)
                        for (f = r; f--; ) this[k + f] = this[l + f];
                    if (c && d === p)
                        (this.length = p), this.push.apply(this, m);
                    else
                        for (this.length = p + c, f = 0; f < c; ++f)
                            this[d + f] = m[f];
                }
                return b;
            };
    Array.isArray ||
        (Array.isArray = function (a) {
            return "[object Array]" == d(a);
        });
    n = Object("a");
    var r = "a" != n[0] || !(0 in n);
    Array.prototype.forEach ||
        (Array.prototype.forEach = function (a, e) {
            var p = B(this),
                b = r && "[object String]" == d(this) ? this.split("") : p,
                m = -1,
                c = b.length >>> 0;
            if ("[object Function]" != d(a)) throw new TypeError();
            for (; ++m < c; ) m in b && a.call(e, b[m], m, p);
        });
    Array.prototype.map ||
        (Array.prototype.map = function (a, e) {
            var p = B(this),
                b = r && "[object String]" == d(this) ? this.split("") : p,
                m = b.length >>> 0,
                c = Array(m);
            if ("[object Function]" != d(a))
                throw new TypeError(a + " is not a function");
            for (var f = 0; f < m; f++)
                f in b && (c[f] = a.call(e, b[f], f, p));
            return c;
        });
    Array.prototype.filter ||
        (Array.prototype.filter = function (a, e) {
            var p = B(this),
                b = r && "[object String]" == d(this) ? this.split("") : p,
                m = b.length >>> 0,
                c = [],
                f;
            if ("[object Function]" != d(a))
                throw new TypeError(a + " is not a function");
            for (var l = 0; l < m; l++)
                l in b && ((f = b[l]), a.call(e, f, l, p) && c.push(f));
            return c;
        });
    Array.prototype.every ||
        (Array.prototype.every = function (a, e) {
            var p = B(this),
                b = r && "[object String]" == d(this) ? this.split("") : p,
                m = b.length >>> 0;
            if ("[object Function]" != d(a))
                throw new TypeError(a + " is not a function");
            for (var c = 0; c < m; c++)
                if (c in b && !a.call(e, b[c], c, p)) return !1;
            return !0;
        });
    Array.prototype.some ||
        (Array.prototype.some = function (a, e) {
            var p = B(this),
                b = r && "[object String]" == d(this) ? this.split("") : p,
                m = b.length >>> 0;
            if ("[object Function]" != d(a))
                throw new TypeError(a + " is not a function");
            for (var c = 0; c < m; c++)
                if (c in b && a.call(e, b[c], c, p)) return !0;
            return !1;
        });
    Array.prototype.reduce ||
        (Array.prototype.reduce = function (a) {
            var e = B(this),
                p = r && "[object String]" == d(this) ? this.split("") : e,
                b = p.length >>> 0;
            if ("[object Function]" != d(a))
                throw new TypeError(a + " is not a function");
            if (!b && 1 == arguments.length)
                throw new TypeError(
                    "reduce of empty array with no initial value"
                );
            var m = 0;
            if (2 <= arguments.length) var c = arguments[1];
            else {
                do {
                    if (m in p) {
                        c = p[m++];
                        break;
                    }
                    if (++m >= b)
                        throw new TypeError(
                            "reduce of empty array with no initial value"
                        );
                } while (1);
            }
            for (; m < b; m++) m in p && (c = a.call(void 0, c, p[m], m, e));
            return c;
        });
    Array.prototype.reduceRight ||
        (Array.prototype.reduceRight = function (a) {
            var e = B(this),
                p = r && "[object String]" == d(this) ? this.split("") : e,
                b = p.length >>> 0;
            if ("[object Function]" != d(a))
                throw new TypeError(a + " is not a function");
            if (!b && 1 == arguments.length)
                throw new TypeError(
                    "reduceRight of empty array with no initial value"
                );
            var b = b - 1;
            if (2 <= arguments.length) var m = arguments[1];
            else {
                do {
                    if (b in p) {
                        m = p[b--];
                        break;
                    }
                    if (0 > --b)
                        throw new TypeError(
                            "reduceRight of empty array with no initial value"
                        );
                } while (1);
            }
            do b in this && (m = a.call(void 0, m, p[b], b, e));
            while (b--);
            return m;
        });
    (Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2)) ||
        (Array.prototype.indexOf = function (a) {
            var e =
                    r && "[object String]" == d(this)
                        ? this.split("")
                        : B(this),
                p = e.length >>> 0;
            if (!p) return -1;
            var b = 0;
            1 < arguments.length && (b = c(arguments[1]));
            for (b = 0 <= b ? b : Math.max(0, p + b); b < p; b++)
                if (b in e && e[b] === a) return b;
            return -1;
        });
    (Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3)) ||
        (Array.prototype.lastIndexOf = function (a) {
            var e =
                    r && "[object String]" == d(this)
                        ? this.split("")
                        : B(this),
                p = e.length >>> 0;
            if (!p) return -1;
            var b = p - 1;
            1 < arguments.length && (b = Math.min(b, c(arguments[1])));
            for (b = 0 <= b ? b : p - Math.abs(b); 0 <= b; b--)
                if (b in e && a === e[b]) return b;
            return -1;
        });
    Object.getPrototypeOf ||
        (Object.getPrototypeOf = function (a) {
            return a.__proto__ || (a.constructor ? a.constructor.prototype : b);
        });
    Object.getOwnPropertyDescriptor ||
        (Object.getOwnPropertyDescriptor = function (a, d) {
            if (("object" != typeof a && "function" != typeof a) || null === a)
                throw new TypeError(
                    "Object.getOwnPropertyDescriptor called on a non-object: " +
                        a
                );
            if (e(a, d)) {
                var p = { enumerable: !0, configurable: !0 };
                if (m) {
                    var c = a.__proto__;
                    a.__proto__ = b;
                    var f = l(a, d);
                    var k = v(a, d);
                    a.__proto__ = c;
                    if (f || k) return f && (p.get = f), k && (p.set = k), p;
                }
                return (p.value = a[d]), p;
            }
        });
    Object.getOwnPropertyNames ||
        (Object.getOwnPropertyNames = function (a) {
            return Object.keys(a);
        });
    if (!Object.create) {
        var p;
        null === Object.prototype.__proto__
            ? (p = function () {
                  return { __proto__: null };
              })
            : (p = function () {
                  var a = {},
                      d;
                  for (d in a) a[d] = null;
                  return (
                      (a.constructor = a.hasOwnProperty = a.propertyIsEnumerable = a.isPrototypeOf = a.toLocaleString = a.toString = a.valueOf = a.__proto__ = null),
                      a
                  );
              });
        Object.create = function (a, d) {
            if (null === a) var e = p();
            else {
                if ("object" != typeof a)
                    throw new TypeError(
                        "typeof prototype[" + typeof a + "] != 'object'"
                    );
                e = function () {};
                e.prototype = a;
                e = new e();
                e.__proto__ = a;
            }
            return void 0 !== d && Object.defineProperties(e, d), e;
        };
    }
    if (
        Object.defineProperty &&
        ((n = g({})),
        (q =
            "undefined" == typeof document || g(document.createElement("div"))),
        !n || !q)
    )
        var z = Object.defineProperty;
    if (!Object.defineProperty || z)
        Object.defineProperty = function (a, d, p) {
            if (("object" != typeof a && "function" != typeof a) || null === a)
                throw new TypeError(
                    "Object.defineProperty called on non-object: " + a
                );
            if (("object" != typeof p && "function" != typeof p) || null === p)
                throw new TypeError(
                    "Property description must be an object: " + p
                );
            if (z)
                try {
                    return z.call(Object, a, d, p);
                } catch (H) {}
            if (e(p, "value"))
                if (m && (l(a, d) || v(a, d))) {
                    var c = a.__proto__;
                    a.__proto__ = b;
                    delete a[d];
                    a[d] = p.value;
                    a.__proto__ = c;
                } else a[d] = p.value;
            else {
                if (!m)
                    throw new TypeError(
                        "getters & setters can not be defined on this javascript engine"
                    );
                e(p, "get") && f(a, d, p.get);
                e(p, "set") && k(a, d, p.set);
            }
            return a;
        };
    Object.defineProperties ||
        (Object.defineProperties = function (a, d) {
            for (var p in d) e(d, p) && Object.defineProperty(a, p, d[p]);
            return a;
        });
    Object.seal ||
        (Object.seal = function (a) {
            return a;
        });
    Object.freeze ||
        (Object.freeze = function (a) {
            return a;
        });
    try {
        Object.freeze(function () {});
    } catch (K) {
        Object.freeze = (function (a) {
            return function (d) {
                return "function" == typeof d ? d : a(d);
            };
        })(Object.freeze);
    }
    Object.preventExtensions ||
        (Object.preventExtensions = function (a) {
            return a;
        });
    Object.isSealed ||
        (Object.isSealed = function (a) {
            return !1;
        });
    Object.isFrozen ||
        (Object.isFrozen = function (a) {
            return !1;
        });
    Object.isExtensible ||
        (Object.isExtensible = function (a) {
            if (Object(a) === a) throw new TypeError();
            for (var d = ""; e(a, d); ) d += "?";
            a[d] = !0;
            var p = e(a, d);
            return delete a[d], p;
        });
    if (!Object.keys) {
        var w = !0,
            y = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(
                " "
            ),
            x = y.length;
        for (L in { toString: null }) w = !1;
        Object.keys = function (a) {
            if (("object" != typeof a && "function" != typeof a) || null === a)
                throw new TypeError("Object.keys called on a non-object");
            var d = [],
                p;
            for (p in a) e(a, p) && d.push(p);
            if (w)
                for (p = 0; p < x; p++) {
                    var b = y[p];
                    e(a, b) && d.push(b);
                }
            return d;
        };
    }
    Date.now ||
        (Date.now = function () {
            return new Date().getTime();
        });
    var L =
        "\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    if (!String.prototype.trim || L.trim()) {
        L = "[" + L + "]";
        var J = new RegExp("^" + L + L + "*"),
            C = new RegExp(L + L + "*$");
        String.prototype.trim = function () {
            return String(this).replace(J, "").replace(C, "");
        };
    }
    var B = function (a) {
        if (null == a) throw new TypeError("can't convert " + a + " to object");
        return Object(a);
    };
});
ace.define(
    "ace/lib/fixoldbrowsers",
    ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"],
    function (n, q, t) {
        n("./regexp");
        n("./es5-shim");
    }
);
ace.define("ace/lib/dom", ["require", "exports", "module"], function (n, q, t) {
    q.getDocumentHead = function (h) {
        return (
            h || (h = document),
            h.head || h.getElementsByTagName("head")[0] || h.documentElement
        );
    };
    q.createElement = function (h, g) {
        return document.createElementNS
            ? document.createElementNS(g || "http://www.w3.org/1999/xhtml", h)
            : document.createElement(h);
    };
    q.hasCssClass = function (h, g) {
        return -1 !== (h.className + "").split(/\s+/g).indexOf(g);
    };
    q.addCssClass = function (h, g) {
        q.hasCssClass(h, g) || (h.className += " " + g);
    };
    q.removeCssClass = function (h, g) {
        for (var c = h.className.split(/\s+/g); ; ) {
            var b = c.indexOf(g);
            if (-1 == b) break;
            c.splice(b, 1);
        }
        h.className = c.join(" ");
    };
    q.toggleCssClass = function (h, g) {
        for (var c = h.className.split(/\s+/g), b = !0; ; ) {
            var a = c.indexOf(g);
            if (-1 == a) break;
            b = !1;
            c.splice(a, 1);
        }
        return b && c.push(g), (h.className = c.join(" ")), b;
    };
    q.setCssClass = function (h, g, c) {
        c ? q.addCssClass(h, g) : q.removeCssClass(h, g);
    };
    q.hasCssString = function (h, g) {
        var c = 0,
            b;
        g = g || document;
        if (g.createStyleSheet && (b = g.styleSheets))
            for (; c < b.length; ) {
                if (b[c++].owningElement.id === h) return !0;
            }
        else if ((b = g.getElementsByTagName("style")))
            for (; c < b.length; ) if (b[c++].id === h) return !0;
        return !1;
    };
    q.importCssString = function (h, g, c) {
        c = c || document;
        if (g && q.hasCssString(g, c)) return null;
        var b;
        g && (h += "\n/*# sourceURL=ace/css/" + g + " */");
        c.createStyleSheet
            ? ((b = c.createStyleSheet()),
              (b.cssText = h),
              g && (b.owningElement.id = g))
            : ((b = q.createElement("style")),
              b.appendChild(c.createTextNode(h)),
              g && (b.id = g),
              q.getDocumentHead(c).appendChild(b));
    };
    q.importCssStylsheet = function (h, g) {
        if (g.createStyleSheet) g.createStyleSheet(h);
        else {
            var c = q.createElement("link");
            c.rel = "stylesheet";
            c.href = h;
            q.getDocumentHead(g).appendChild(c);
        }
    };
    q.getInnerWidth = function (h) {
        return (
            parseInt(q.computedStyle(h, "paddingLeft"), 10) +
            parseInt(q.computedStyle(h, "paddingRight"), 10) +
            h.clientWidth
        );
    };
    q.getInnerHeight = function (h) {
        return (
            parseInt(q.computedStyle(h, "paddingTop"), 10) +
            parseInt(q.computedStyle(h, "paddingBottom"), 10) +
            h.clientHeight
        );
    };
    q.scrollbarWidth = function (h) {
        var g = q.createElement("ace_inner");
        g.style.width = "100%";
        g.style.minWidth = "0px";
        g.style.height = "200px";
        g.style.display = "block";
        var c = q.createElement("ace_outer"),
            b = c.style;
        b.position = "absolute";
        b.left = "-10000px";
        b.overflow = "hidden";
        b.width = "200px";
        b.minWidth = "0px";
        b.height = "150px";
        b.display = "block";
        c.appendChild(g);
        h = h.documentElement;
        h.appendChild(c);
        var a = g.offsetWidth;
        b.overflow = "scroll";
        g = g.offsetWidth;
        return a == g && (g = c.clientWidth), h.removeChild(c), a - g;
    };
    "undefined" == typeof document
        ? (q.importCssString = function () {})
        : (void 0 !== window.pageYOffset
              ? ((q.getPageScrollTop = function () {
                    return window.pageYOffset;
                }),
                (q.getPageScrollLeft = function () {
                    return window.pageXOffset;
                }))
              : ((q.getPageScrollTop = function () {
                    return document.body.scrollTop;
                }),
                (q.getPageScrollLeft = function () {
                    return document.body.scrollLeft;
                })),
          window.getComputedStyle
              ? (q.computedStyle = function (h, g) {
                    return g
                        ? (window.getComputedStyle(h, "") || {})[g] || ""
                        : window.getComputedStyle(h, "") || {};
                })
              : (q.computedStyle = function (h, g) {
                    return g ? h.currentStyle[g] : h.currentStyle;
                }),
          (q.setInnerHtml = function (h, g) {
              var c = h.cloneNode(!1);
              return (c.innerHTML = g), h.parentNode.replaceChild(c, h), c;
          }),
          "textContent" in document.documentElement
              ? ((q.setInnerText = function (h, g) {
                    h.textContent = g;
                }),
                (q.getInnerText = function (h) {
                    return h.textContent;
                }))
              : ((q.setInnerText = function (h, g) {
                    h.innerText = g;
                }),
                (q.getInnerText = function (h) {
                    return h.innerText;
                })),
          (q.getParentWindow = function (h) {
              return h.defaultView || h.parentWindow;
          }));
});
ace.define("ace/lib/oop", ["require", "exports", "module"], function (n, q, t) {
    q.inherits = function (h, g) {
        h.super_ = g;
        h.prototype = Object.create(g.prototype, {
            constructor: {
                value: h,
                enumerable: !1,
                writable: !0,
                configurable: !0,
            },
        });
    };
    q.mixin = function (h, g) {
        for (var c in g) h[c] = g[c];
        return h;
    };
    q.implement = function (h, g) {
        q.mixin(h, g);
    };
});
ace.define(
    "ace/lib/keys",
    ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop"],
    function (n, q, t) {
        n("./fixoldbrowsers");
        var h = n("./oop"),
            g = (function () {
                var c = {
                        MODIFIER_KEYS: {
                            16: "Shift",
                            17: "Ctrl",
                            18: "Alt",
                            224: "Meta",
                        },
                        KEY_MODS: {
                            ctrl: 1,
                            alt: 2,
                            option: 2,
                            shift: 4,
                            super: 8,
                            meta: 8,
                            command: 8,
                            cmd: 8,
                        },
                        FUNCTION_KEYS: {
                            8: "Backspace",
                            9: "Tab",
                            13: "Return",
                            19: "Pause",
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
                            44: "Print",
                            45: "Insert",
                            46: "Delete",
                            96: "Numpad0",
                            97: "Numpad1",
                            98: "Numpad2",
                            99: "Numpad3",
                            100: "Numpad4",
                            101: "Numpad5",
                            102: "Numpad6",
                            103: "Numpad7",
                            104: "Numpad8",
                            105: "Numpad9",
                            "-13": "NumpadEnter",
                            112: "F1",
                            113: "F2",
                            114: "F3",
                            115: "F4",
                            116: "F5",
                            117: "F6",
                            118: "F7",
                            119: "F8",
                            120: "F9",
                            121: "F10",
                            122: "F11",
                            123: "F12",
                            144: "Numlock",
                            145: "Scrolllock",
                        },
                        PRINTABLE_KEYS: {
                            32: " ",
                            48: "0",
                            49: "1",
                            50: "2",
                            51: "3",
                            52: "4",
                            53: "5",
                            54: "6",
                            55: "7",
                            56: "8",
                            57: "9",
                            59: ";",
                            61: "=",
                            65: "a",
                            66: "b",
                            67: "c",
                            68: "d",
                            69: "e",
                            70: "f",
                            71: "g",
                            72: "h",
                            73: "i",
                            74: "j",
                            75: "k",
                            76: "l",
                            77: "m",
                            78: "n",
                            79: "o",
                            80: "p",
                            81: "q",
                            82: "r",
                            83: "s",
                            84: "t",
                            85: "u",
                            86: "v",
                            87: "w",
                            88: "x",
                            89: "y",
                            90: "z",
                            107: "+",
                            109: "-",
                            110: ".",
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
                            111: "/",
                            106: "*",
                        },
                    },
                    b;
                for (b in c.FUNCTION_KEYS) {
                    var a = c.FUNCTION_KEYS[b].toLowerCase();
                    c[a] = parseInt(b, 10);
                }
                for (b in c.PRINTABLE_KEYS)
                    (a = c.PRINTABLE_KEYS[b].toLowerCase()),
                        (c[a] = parseInt(b, 10));
                return (
                    h.mixin(c, c.MODIFIER_KEYS),
                    h.mixin(c, c.PRINTABLE_KEYS),
                    h.mixin(c, c.FUNCTION_KEYS),
                    (c.enter = c["return"]),
                    (c.escape = c.esc),
                    (c.del = c["delete"]),
                    (c[173] = "-"),
                    (function () {
                        for (
                            var a = ["cmd", "ctrl", "alt", "shift"],
                                e = Math.pow(2, a.length);
                            e--;

                        )
                            c.KEY_MODS[e] =
                                a
                                    .filter(function (a) {
                                        return e & c.KEY_MODS[a];
                                    })
                                    .join("-") + "-";
                    })(),
                    (c.KEY_MODS[0] = ""),
                    (c.KEY_MODS[-1] = "input-"),
                    c
                );
            })();
        h.mixin(q, g);
        q.keyCodeToString = function (c) {
            var b = g[c];
            return (
                "string" != typeof b && (b = String.fromCharCode(c)),
                b.toLowerCase()
            );
        };
    }
);
ace.define("ace/lib/useragent", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    q.OS = { LINUX: "LINUX", MAC: "MAC", WINDOWS: "WINDOWS" };
    q.getOS = function () {
        return q.isMac ? q.OS.MAC : q.isLinux ? q.OS.LINUX : q.OS.WINDOWS;
    };
    "object" == typeof navigator &&
        ((n = (navigator.platform.match(/mac|win|linux/i) || [
            "other",
        ])[0].toLowerCase()),
        (t = navigator.userAgent),
        (q.isWin = "win" == n),
        (q.isMac = "mac" == n),
        (q.isLinux = "linux" == n),
        (q.isIE =
            "Microsoft Internet Explorer" == navigator.appName ||
            0 <= navigator.appName.indexOf("MSAppHost")
                ? parseFloat(
                      (t.match(
                          /(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/
                      ) || [])[1]
                  )
                : parseFloat(
                      (t.match(
                          /(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/
                      ) || [])[1]
                  )),
        (q.isOldIE = q.isIE && 9 > q.isIE),
        (q.isGecko = q.isMozilla =
            (window.Controllers || window.controllers) &&
            "Gecko" === window.navigator.product),
        (q.isOldGecko =
            q.isGecko && 4 > parseInt((t.match(/rv:(\d+)/) || [])[1], 10)),
        (q.isOpera =
            window.opera &&
            "[object Opera]" == Object.prototype.toString.call(window.opera)),
        (q.isWebKit = parseFloat(t.split("WebKit/")[1]) || void 0),
        (q.isChrome = parseFloat(t.split(" Chrome/")[1]) || void 0),
        (q.isAIR = 0 <= t.indexOf("AdobeAIR")),
        (q.isIPad = 0 <= t.indexOf("iPad")),
        (q.isChromeOS = 0 <= t.indexOf(" CrOS ")),
        (q.isIOS = /iPad|iPhone|iPod/.test(t) && !window.MSStream),
        q.isIOS && (q.isMac = !0));
});
ace.define(
    "ace/lib/event",
    ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"],
    function (n, q, t) {
        function h(m, f, k) {
            var l = e(f);
            if (!b.isMac && a) {
                f.getModifierState &&
                    (f.getModifierState("OS") || f.getModifierState("Win")) &&
                    (l |= 8);
                if (a.altGr) {
                    if (3 == (3 & l)) return;
                    a.altGr = 0;
                }
                if (18 === k || 17 === k) {
                    var v = "location" in f ? f.location : f.keyLocation;
                    17 === k && 1 === v
                        ? 1 == a[k] && (d = f.timeStamp)
                        : 18 === k &&
                          3 === l &&
                          2 === v &&
                          50 > f.timeStamp - d &&
                          (a.altGr = !0);
                }
            }
            k in c.MODIFIER_KEYS && (k = -1);
            l & 8 && 91 <= k && 93 >= k && (k = -1);
            if (
                !l &&
                13 === k &&
                ((v = "location" in f ? f.location : f.keyLocation),
                3 === v && (m(f, l, -k), f.defaultPrevented))
            )
                return;
            if (b.isChromeOS && l & 8) {
                m(f, l, k);
                if (f.defaultPrevented) return;
                l &= -9;
            }
            return l || k in c.FUNCTION_KEYS || k in c.PRINTABLE_KEYS
                ? m(f, l, k)
                : !1;
        }
        function g() {
            a = Object.create(null);
        }
        var c = n("./keys"),
            b = n("./useragent"),
            a = null,
            d = 0;
        q.addListener = function (a, d, e) {
            if (a.addEventListener) return a.addEventListener(d, e, !1);
            if (a.attachEvent) {
                var b = function () {
                    e.call(a, window.event);
                };
                e._wrapper = b;
                a.attachEvent("on" + d, b);
            }
        };
        q.removeListener = function (a, d, e) {
            if (a.removeEventListener) return a.removeEventListener(d, e, !1);
            a.detachEvent && a.detachEvent("on" + d, e._wrapper || e);
        };
        q.stopEvent = function (a) {
            return q.stopPropagation(a), q.preventDefault(a), !1;
        };
        q.stopPropagation = function (a) {
            a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = !0);
        };
        q.preventDefault = function (a) {
            a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
        };
        q.getButton = function (a) {
            return "dblclick" == a.type
                ? 0
                : "contextmenu" == a.type ||
                  (b.isMac && a.ctrlKey && !a.altKey && !a.shiftKey)
                ? 2
                : a.preventDefault
                ? a.button
                : { 1: 0, 2: 2, 4: 1 }[a.button];
        };
        q.capture = function (a, d, e) {
            function b(a) {
                d && d(a);
                e && e(a);
                q.removeListener(document, "mousemove", d, !0);
                q.removeListener(document, "mouseup", b, !0);
                q.removeListener(document, "dragstart", b, !0);
            }
            return (
                q.addListener(document, "mousemove", d, !0),
                q.addListener(document, "mouseup", b, !0),
                q.addListener(document, "dragstart", b, !0),
                b
            );
        };
        q.addTouchMoveListener = function (a, d) {
            if ("ontouchmove" in a) {
                var e, b;
                q.addListener(a, "touchstart", function (a) {
                    a = a.changedTouches[0];
                    e = a.clientX;
                    b = a.clientY;
                });
                q.addListener(a, "touchmove", function (a) {
                    var c = a.changedTouches[0];
                    a.wheelX = -(c.clientX - e) / 1;
                    a.wheelY = -(c.clientY - b) / 1;
                    e = c.clientX;
                    b = c.clientY;
                    d(a);
                });
            }
        };
        q.addMouseWheelListener = function (a, d) {
            "onmousewheel" in a
                ? q.addListener(a, "mousewheel", function (a) {
                      void 0 !== a.wheelDeltaX
                          ? ((a.wheelX = -a.wheelDeltaX / 8),
                            (a.wheelY = -a.wheelDeltaY / 8))
                          : ((a.wheelX = 0), (a.wheelY = -a.wheelDelta / 8));
                      d(a);
                  })
                : "onwheel" in a
                ? q.addListener(a, "wheel", function (a) {
                      switch (a.deltaMode) {
                          case a.DOM_DELTA_PIXEL:
                              a.wheelX = 0.35 * a.deltaX || 0;
                              a.wheelY = 0.35 * a.deltaY || 0;
                              break;
                          case a.DOM_DELTA_LINE:
                          case a.DOM_DELTA_PAGE:
                              (a.wheelX = 5 * (a.deltaX || 0)),
                                  (a.wheelY = 5 * (a.deltaY || 0));
                      }
                      d(a);
                  })
                : q.addListener(a, "DOMMouseScroll", function (a) {
                      a.axis && a.axis == a.HORIZONTAL_AXIS
                          ? ((a.wheelX = 5 * (a.detail || 0)), (a.wheelY = 0))
                          : ((a.wheelX = 0), (a.wheelY = 5 * (a.detail || 0)));
                      d(a);
                  });
        };
        q.addMultiMouseDownListener = function (a, d, e, c) {
            function m(a) {
                0 !== q.getButton(a)
                    ? (l = 0)
                    : 1 < a.detail
                    ? (l++, 4 < l && (l = 1))
                    : (l = 1);
                if (b.isIE) {
                    var m =
                        5 < Math.abs(a.clientX - p) ||
                        5 < Math.abs(a.clientY - k);
                    if (!g || m) l = 1;
                    g && clearTimeout(g);
                    g = setTimeout(function () {
                        g = null;
                    }, d[l - 1] || 600);
                    1 == l && ((p = a.clientX), (k = a.clientY));
                }
                a._clicks = l;
                e[c]("mousedown", a);
                if (4 < l) l = 0;
                else if (1 < l) return e[c](y[l], a);
            }
            function f(a) {
                l = 2;
                g && clearTimeout(g);
                g = setTimeout(function () {
                    g = null;
                }, d[l - 1] || 600);
                e[c]("mousedown", a);
                e[c](y[l], a);
            }
            var l = 0,
                p,
                k,
                g,
                y = { 2: "dblclick", 3: "tripleclick", 4: "quadclick" };
            Array.isArray(a) || (a = [a]);
            a.forEach(function (a) {
                q.addListener(a, "mousedown", m);
                b.isOldIE && q.addListener(a, "dblclick", f);
            });
        };
        var e =
            !b.isMac || !b.isOpera || "KeyboardEvent" in window
                ? function (a) {
                      return (
                          0 |
                          (a.ctrlKey ? 1 : 0) |
                          (a.altKey ? 2 : 0) |
                          (a.shiftKey ? 4 : 0) |
                          (a.metaKey ? 8 : 0)
                      );
                  }
                : function (a) {
                      return (
                          0 |
                          (a.metaKey ? 1 : 0) |
                          (a.altKey ? 2 : 0) |
                          (a.shiftKey ? 4 : 0) |
                          (a.ctrlKey ? 8 : 0)
                      );
                  };
        q.getModifierString = function (a) {
            return c.KEY_MODS[e(a)];
        };
        q.addCommandKeyListener = function (d, e) {
            var c = q.addListener;
            if (b.isOldGecko || (b.isOpera && !("KeyboardEvent" in window))) {
                var m = null;
                c(d, "keydown", function (a) {
                    m = a.keyCode;
                });
                c(d, "keypress", function (a) {
                    return h(e, a, m);
                });
            } else {
                var f = null;
                c(d, "keydown", function (d) {
                    a[d.keyCode] = (a[d.keyCode] || 0) + 1;
                    var b = h(e, d, d.keyCode);
                    return (f = d.defaultPrevented), b;
                });
                c(d, "keypress", function (a) {
                    f &&
                        (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey) &&
                        (q.stopEvent(a), (f = null));
                });
                c(d, "keyup", function (d) {
                    a[d.keyCode] = null;
                });
                a || (g(), c(window, "focus", g));
            }
        };
        "object" == typeof window &&
            window.postMessage &&
            !b.isOldIE &&
            (q.nextTick = function (a, d) {
                d = d || window;
                q.addListener(d, "message", function l(e) {
                    "zero-timeout-message-1" == e.data &&
                        (q.stopPropagation(e),
                        q.removeListener(d, "message", l),
                        a());
                });
                d.postMessage("zero-timeout-message-1", "*");
            });
        q.nextFrame =
            "object" == typeof window &&
            (window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                window.oRequestAnimationFrame);
        q.nextFrame
            ? (q.nextFrame = q.nextFrame.bind(window))
            : (q.nextFrame = function (a) {
                  setTimeout(a, 17);
              });
    }
);
ace.define("ace/lib/lang", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    q.last = function (c) {
        return c[c.length - 1];
    };
    q.stringReverse = function (c) {
        return c.split("").reverse().join("");
    };
    q.stringRepeat = function (c, b) {
        for (var a = ""; 0 < b; ) if ((b & 1 && (a += c), (b >>= 1))) c += c;
        return a;
    };
    var h = /^\s\s*/,
        g = /\s\s*$/;
    q.stringTrimLeft = function (c) {
        return c.replace(h, "");
    };
    q.stringTrimRight = function (c) {
        return c.replace(g, "");
    };
    q.copyObject = function (c) {
        var b = {},
            a;
        for (a in c) b[a] = c[a];
        return b;
    };
    q.copyArray = function (c) {
        for (var b = [], a = 0, d = c.length; a < d; a++)
            c[a] && "object" == typeof c[a]
                ? (b[a] = this.copyObject(c[a]))
                : (b[a] = c[a]);
        return b;
    };
    q.deepCopy = function b(a) {
        if ("object" != typeof a || !a) return a;
        if (Array.isArray(a)) {
            var d = [];
            for (var e = 0; e < a.length; e++) d[e] = b(a[e]);
            return d;
        }
        if ("[object Object]" !== Object.prototype.toString.call(a)) return a;
        d = {};
        for (e in a) d[e] = b(a[e]);
        return d;
    };
    q.arrayToMap = function (b) {
        for (var a = {}, d = 0; d < b.length; d++) a[b[d]] = 1;
        return a;
    };
    q.createMap = function (b) {
        var a = Object.create(null),
            d;
        for (d in b) a[d] = b[d];
        return a;
    };
    q.arrayRemove = function (b, a) {
        for (var d = 0; d <= b.length; d++) a === b[d] && b.splice(d, 1);
    };
    q.escapeRegExp = function (b) {
        return b.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
    };
    q.escapeHTML = function (b) {
        return b
            .replace(/&/g, "&#38;")
            .replace(/"/g, "&#34;")
            .replace(/'/g, "&#39;")
            .replace(/</g, "&#60;");
    };
    q.getMatchOffsets = function (b, a) {
        var d = [];
        return (
            b.replace(a, function (a) {
                d.push({
                    offset: arguments[arguments.length - 2],
                    length: a.length,
                });
            }),
            d
        );
    };
    q.deferredCall = function (b) {
        var a = null,
            d = function () {
                a = null;
                b();
            },
            e = function (b) {
                return e.cancel(), (a = setTimeout(d, b || 0)), e;
            };
        return (
            (e.schedule = e),
            (e.call = function () {
                return this.cancel(), b(), e;
            }),
            (e.cancel = function () {
                return clearTimeout(a), (a = null), e;
            }),
            (e.isPending = function () {
                return a;
            }),
            e
        );
    };
    q.delayedCall = function (b, a) {
        var d = null,
            e = function () {
                d = null;
                b();
            },
            m = function (b) {
                null == d && (d = setTimeout(e, b || a));
            };
        return (
            (m.delay = function (b) {
                d && clearTimeout(d);
                d = setTimeout(e, b || a);
            }),
            (m.schedule = m),
            (m.call = function () {
                this.cancel();
                b();
            }),
            (m.cancel = function () {
                d && clearTimeout(d);
                d = null;
            }),
            (m.isPending = function () {
                return d;
            }),
            m
        );
    };
});
ace.define(
    "ace/keyboard/textinput_ios",
    "require exports module ace/lib/event ace/lib/useragent ace/lib/dom ace/lib/lang ace/lib/keys".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../lib/event"),
            g = n("../lib/useragent"),
            c = n("../lib/dom"),
            b = n("../lib/lang"),
            a = n("../lib/keys"),
            d = a.KEY_MODS,
            e = 18 > g.isChrome,
            m = g.isIE;
        q.TextInput = function (f, k) {
            function l(a) {
                if (!x) {
                    x = !0;
                    if (t) {
                        var d = 0;
                        a = a ? 0 : r.value.length - 1;
                    } else (d = 4), (a = 5);
                    try {
                        r.setSelectionRange(d, a);
                    } catch (W) {}
                    x = !1;
                }
            }
            function v() {
                x || ((r.value = p), g.isWebKit && K.schedule());
            }
            function u() {
                clearTimeout(N);
                N = setTimeout(function () {
                    n && ((r.style.cssText = n), (n = ""));
                    null == k.renderer.$keepTextAreaAtCursor &&
                        ((k.renderer.$keepTextAreaAtCursor = !0),
                        k.renderer.$moveTextAreaToCursor());
                }, 0);
            }
            var r = c.createElement("textarea");
            r.className = g.isIOS
                ? "ace_text-input ace_text-input-ios"
                : "ace_text-input";
            g.isTouchPad && r.setAttribute("x-palm-disable-auto-cap", !0);
            r.setAttribute("wrap", "off");
            r.setAttribute("autocorrect", "off");
            r.setAttribute("autocapitalize", "off");
            r.setAttribute("spellcheck", !1);
            r.style.opacity = "0";
            f.insertBefore(r, f.firstChild);
            var p = "\n aaaa a\n",
                z = !1,
                w = !1,
                y = !1,
                x = !1,
                n = "",
                q = !0;
            try {
                var C = document.activeElement === r;
            } catch (V) {}
            h.addListener(r, "blur", function (a) {
                k.onBlur(a);
                C = !1;
            });
            h.addListener(r, "focus", function (a) {
                C = !0;
                k.onFocus(a);
                l();
            });
            this.focus = function () {
                if (n) return r.focus();
                r.style.position = "fixed";
                r.focus();
            };
            this.blur = function () {
                r.blur();
            };
            this.isFocused = function () {
                return C;
            };
            var B = b.delayedCall(function () {
                    C && l(q);
                }),
                K = b.delayedCall(function () {
                    x || ((r.value = p), C && l());
                });
            g.isWebKit ||
                k.addEventListener("changeSelection", function () {
                    k.selection.isEmpty() != q && ((q = !q), B.schedule());
                });
            v();
            C && k.onFocus();
            var t = null;
            this.setInputHandler = function (a) {
                t = a;
            };
            this.getInputHandler = function () {
                return t;
            };
            var D = !1,
                E = function (a) {
                    if (4 !== r.selectionStart || 5 !== r.selectionEnd)
                        t && ((a = t(a)), (t = null)),
                            y
                                ? (l(), a && k.onPaste(a), (y = !1))
                                : a == p.substr(0) && 4 === r.selectionStart
                                ? D
                                    ? k.execCommand("del", { source: "ace" })
                                    : k.execCommand("backspace", {
                                          source: "ace",
                                      })
                                : z ||
                                  (a.substring(0, 9) == p && a.length > p.length
                                      ? (a = a.substr(9))
                                      : a.substr(0, 4) == p.substr(0, 4)
                                      ? (a = a.substr(
                                            4,
                                            a.length - p.length + 1
                                        ))
                                      : a.charAt(a.length - 1) == p.charAt(0) &&
                                        (a = a.slice(0, -1)),
                                  a != p.charAt(0) &&
                                      a.charAt(a.length - 1) == p.charAt(0) &&
                                      (a = a.slice(0, -1)),
                                  a && k.onTextInput(a)),
                            z && (z = !1),
                            D && (D = !1);
                },
                H = function (a) {
                    x || (E(r.value), v());
                },
                F = function (a, d, p) {
                    if ((a = a.clipboardData || window.clipboardData) && !e) {
                        var b = m || p ? "Text" : "text/plain";
                        try {
                            return d ? !1 !== a.setData(b, d) : a.getData(b);
                        } catch (U) {
                            if (!p) return F(U, d, !0);
                        }
                    }
                },
                G = function (a, d) {
                    var e = k.getCopyText();
                    if (!e) return h.preventDefault(a);
                    F(a, e)
                        ? (g.isIOS &&
                              ((w = d),
                              (r.value = "\n aa" + e + "a a\n"),
                              r.setSelectionRange(4, 4 + e.length),
                              (z = { value: e })),
                          d ? k.onCut() : k.onCopy(),
                          g.isIOS || h.preventDefault(a))
                        : ((z = !0),
                          (r.value = e),
                          r.select(),
                          setTimeout(function () {
                              z = !1;
                              v();
                              l();
                              d ? k.onCut() : k.onCopy();
                          }));
                };
            h.addCommandKeyListener(r, k.onCommandKey.bind(k));
            h.addListener(r, "select", function (a) {
                0 === r.selectionStart && r.selectionEnd === r.value.length
                    ? (k.selectAll(), l())
                    : t && l(k.selection.isEmpty());
            });
            h.addListener(r, "input", H);
            h.addListener(r, "cut", function (a) {
                G(a, !0);
            });
            h.addListener(r, "copy", function (a) {
                G(a, !1);
            });
            h.addListener(r, "paste", function (a) {
                var d = F(a);
                "string" == typeof d
                    ? (d && k.onPaste(d, a),
                      g.isIE && setTimeout(l),
                      h.preventDefault(a))
                    : ((r.value = ""), (y = !0));
            });
            var I = function () {
                    if (x && k.onCompositionUpdate && !k.$readOnly) {
                        var a = r.value.replace(/\x01/g, "");
                        x.lastValue !== a &&
                            (k.onCompositionUpdate(a),
                            x.lastValue && k.undo(),
                            x.canUndo && (x.lastValue = a),
                            x.lastValue &&
                                ((a = k.selection.getRange()),
                                k.insert(x.lastValue),
                                k.session.markUndoGroup(),
                                (x.range = k.selection.getRange()),
                                k.selection.setRange(a),
                                k.selection.clearSelection()));
                    }
                },
                P = function (a) {
                    if (k.onCompositionEnd && !k.$readOnly) {
                        var d = x;
                        x = !1;
                        var e = setTimeout(function () {
                            e = null;
                            var a = r.value.replace(/\x01/g, "");
                            x ||
                                (a == d.lastValue
                                    ? v()
                                    : !d.lastValue && a && (v(), E(a)));
                        });
                        t = function (a) {
                            return (
                                e && clearTimeout(e),
                                (a = a.replace(/\x01/g, "")),
                                a == d.lastValue
                                    ? ""
                                    : (d.lastValue && e && k.undo(), a)
                            );
                        };
                        k.onCompositionEnd();
                        k.removeListener("mousedown", P);
                        "compositionend" == a.type &&
                            d.range &&
                            k.selection.setRange(d.range);
                        ((g.isChrome && 53 <= g.isChrome) ||
                            (g.isWebKit && 603 <= g.isWebKit)) &&
                            H();
                    }
                },
                M = b.delayedCall(I, 50);
            h.addListener(r, "compositionstart", function (a) {
                x ||
                    !k.onCompositionStart ||
                    k.$readOnly ||
                    ((x = {}),
                    (x.canUndo = k.session.$undoManager),
                    k.onCompositionStart(),
                    setTimeout(I, 0),
                    k.on("mousedown", P),
                    x.canUndo &&
                        !k.selection.isEmpty() &&
                        (k.insert(""),
                        k.session.markUndoGroup(),
                        k.selection.clearSelection()),
                    k.session.markUndoGroup());
            });
            g.isGecko
                ? h.addListener(r, "text", function () {
                      M.schedule();
                  })
                : (h.addListener(r, "keyup", function () {
                      M.schedule();
                  }),
                  h.addListener(r, "keydown", function () {
                      M.schedule();
                  }));
            h.addListener(r, "compositionend", P);
            this.getElement = function () {
                return r;
            };
            this.setReadOnly = function (a) {
                r.readOnly = a;
            };
            this.onContextMenu = function (a) {
                D = !0;
                l(k.selection.isEmpty());
                k._emit("nativecontextmenu", { target: k, domEvent: a });
                this.moveToMouse(a, !0);
            };
            this.moveToMouse = function (a, d) {
                n || (n = r.style.cssText);
                r.style.cssText =
                    (d ? "z-index:100000;" : "") +
                    "height:" +
                    r.style.height +
                    ";" +
                    (g.isIE ? "opacity:0.1;" : "");
                d = k.container.getBoundingClientRect();
                var e = c.computedStyle(k.container),
                    p = d.top + (parseInt(e.borderTopWidth) || 0),
                    b = d.left + (parseInt(d.borderLeftWidth) || 0),
                    m = d.bottom - p - r.clientHeight - 2;
                d = function (a) {
                    r.style.left = a.clientX - b - 2 + "px";
                    r.style.top = Math.min(a.clientY - p - 2, m) + "px";
                };
                d(a);
                "mousedown" == a.type &&
                    (k.renderer.$keepTextAreaAtCursor &&
                        (k.renderer.$keepTextAreaAtCursor = null),
                    clearTimeout(N),
                    g.isWin && h.capture(k.container, d, u));
            };
            this.onContextMenuClose = u;
            var N,
                O = function (a) {
                    k.textInput.onContextMenu(a);
                    u();
                };
            h.addListener(r, "mouseup", O);
            h.addListener(r, "mousedown", function (a) {
                a.preventDefault();
                u();
            });
            h.addListener(k.renderer.scroller, "contextmenu", O);
            h.addListener(r, "contextmenu", O);
            if (g.isIOS) {
                var Q = null,
                    R = !1;
                f.addEventListener("keydown", function (a) {
                    Q && clearTimeout(Q);
                    R = !0;
                });
                f.addEventListener("keyup", function (a) {
                    Q = setTimeout(function () {
                        R = !1;
                    }, 100);
                });
                var S = function (e) {
                    if (document.activeElement === r && !R) {
                        if (w)
                            return setTimeout(function () {
                                w = !1;
                            }, 100);
                        e = r.selectionStart;
                        var p = r.selectionEnd;
                        r.setSelectionRange(4, 5);
                        if (e == p)
                            switch (e) {
                                case 0:
                                    k.onCommandKey(null, 0, a.up);
                                    break;
                                case 1:
                                    k.onCommandKey(null, 0, a.home);
                                    break;
                                case 2:
                                    k.onCommandKey(null, d.option, a.left);
                                    break;
                                case 4:
                                    k.onCommandKey(null, 0, a.left);
                                    break;
                                case 5:
                                    k.onCommandKey(null, 0, a.right);
                                    break;
                                case 7:
                                    k.onCommandKey(null, d.option, a.right);
                                    break;
                                case 8:
                                    k.onCommandKey(null, 0, a.end);
                                    break;
                                case 9:
                                    k.onCommandKey(null, 0, a.down);
                            }
                        else {
                            switch (p) {
                                case 6:
                                    k.onCommandKey(null, d.shift, a.right);
                                    break;
                                case 7:
                                    k.onCommandKey(
                                        null,
                                        d.shift | d.option,
                                        a.right
                                    );
                                    break;
                                case 8:
                                    k.onCommandKey(null, d.shift, a.end);
                                    break;
                                case 9:
                                    k.onCommandKey(null, d.shift, a.down);
                            }
                            switch (e) {
                                case 0:
                                    k.onCommandKey(null, d.shift, a.up);
                                    break;
                                case 1:
                                    k.onCommandKey(null, d.shift, a.home);
                                    break;
                                case 2:
                                    k.onCommandKey(
                                        null,
                                        d.shift | d.option,
                                        a.left
                                    );
                                    break;
                                case 3:
                                    k.onCommandKey(null, d.shift, a.left);
                            }
                        }
                    }
                };
                document.addEventListener("selectionchange", S);
                k.on("destroy", function () {
                    document.removeEventListener("selectionchange", S);
                });
            }
        };
    }
);
ace.define(
    "ace/keyboard/textinput",
    "require exports module ace/lib/event ace/lib/useragent ace/lib/dom ace/lib/lang ace/keyboard/textinput_ios".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../lib/event"),
            g = n("../lib/useragent"),
            c = n("../lib/dom"),
            b = n("../lib/lang"),
            a = 18 > g.isChrome,
            d = g.isIE,
            e = n("./textinput_ios").TextInput;
        q.TextInput = function (m, f) {
            function k(a) {
                if (!w) {
                    w = !0;
                    if (B) {
                        var d = 0;
                        a = a ? 0 : u.value.length - 1;
                    } else (d = a ? 2 : 1), (a = 2);
                    try {
                        u.setSelectionRange(d, a);
                    } catch (S) {}
                    w = !1;
                }
            }
            function l() {
                w || ((u.value = r), g.isWebKit && C.schedule());
            }
            function v() {
                clearTimeout(O);
                O = setTimeout(function () {
                    y && ((u.style.cssText = y), (y = ""));
                    null == f.renderer.$keepTextAreaAtCursor &&
                        ((f.renderer.$keepTextAreaAtCursor = !0),
                        f.renderer.$moveTextAreaToCursor());
                }, 0);
            }
            if (g.isIOS) return e.call(this, m, f);
            var u = c.createElement("textarea");
            u.className = "ace_text-input";
            u.setAttribute("wrap", "off");
            u.setAttribute("autocorrect", "off");
            u.setAttribute("autocapitalize", "off");
            u.setAttribute("spellcheck", !1);
            u.style.opacity = "0";
            m.insertBefore(u, m.firstChild);
            var r = "\u2028\u2028",
                p = !1,
                z = !1,
                w = !1,
                y = "",
                x = !0;
            try {
                var n = document.activeElement === u;
            } catch (Q) {}
            h.addListener(u, "blur", function (a) {
                f.onBlur(a);
                n = !1;
            });
            h.addListener(u, "focus", function (a) {
                n = !0;
                f.onFocus(a);
                k();
            });
            this.focus = function () {
                if (y) return u.focus();
                var a = u.style.top;
                u.style.position = "fixed";
                u.style.top = "0px";
                u.focus();
                setTimeout(function () {
                    u.style.position = "";
                    "0px" == u.style.top && (u.style.top = a);
                }, 0);
            };
            this.blur = function () {
                u.blur();
            };
            this.isFocused = function () {
                return n;
            };
            var q = b.delayedCall(function () {
                    n && k(x);
                }),
                C = b.delayedCall(function () {
                    w || ((u.value = r), n && k());
                });
            g.isWebKit ||
                f.addEventListener("changeSelection", function () {
                    f.selection.isEmpty() != x && ((x = !x), q.schedule());
                });
            l();
            n && f.onFocus();
            var B = null;
            this.setInputHandler = function (a) {
                B = a;
            };
            this.getInputHandler = function () {
                return B;
            };
            var t = !1,
                A = function (a) {
                    B && ((a = B(a)), (B = null));
                    z
                        ? (k(), a && f.onPaste(a), (z = !1))
                        : a == r.charAt(0)
                        ? t
                            ? f.execCommand("del", { source: "ace" })
                            : f.execCommand("backspace", { source: "ace" })
                        : (a.substring(0, 2) == r
                              ? (a = a.substr(2))
                              : a.charAt(0) == r.charAt(0)
                              ? (a = a.substr(1))
                              : a.charAt(a.length - 1) == r.charAt(0) &&
                                (a = a.slice(0, -1)),
                          a.charAt(a.length - 1) == r.charAt(0) &&
                              (a = a.slice(0, -1)),
                          a && f.onTextInput(a));
                    t && (t = !1);
                },
                D = function (a) {
                    w || (A(u.value), l());
                },
                E = function (e, p, b) {
                    if ((e = e.clipboardData || window.clipboardData) && !a) {
                        var c = d || b ? "Text" : "text/plain";
                        try {
                            return p ? !1 !== e.setData(c, p) : e.getData(c);
                        } catch (T) {
                            if (!b) return E(T, p, !0);
                        }
                    }
                },
                H = function (a, d) {
                    var e = f.getCopyText();
                    if (!e) return h.preventDefault(a);
                    E(a, e)
                        ? (d ? f.onCut() : f.onCopy(), h.preventDefault(a))
                        : ((p = !0),
                          (u.value = e),
                          u.select(),
                          setTimeout(function () {
                              p = !1;
                              l();
                              k();
                              d ? f.onCut() : f.onCopy();
                          }));
                },
                F = function (a) {
                    H(a, !0);
                },
                G = function (a) {
                    H(a, !1);
                },
                I = function (a) {
                    var d = E(a);
                    "string" == typeof d
                        ? (d && f.onPaste(d, a),
                          g.isIE && setTimeout(k),
                          h.preventDefault(a))
                        : ((u.value = ""), (z = !0));
                };
            h.addCommandKeyListener(u, f.onCommandKey.bind(f));
            h.addListener(u, "select", function (a) {
                p
                    ? (p = !1)
                    : 0 === u.selectionStart &&
                      u.selectionEnd === u.value.length
                    ? (f.selectAll(), k())
                    : B && k(f.selection.isEmpty());
            });
            h.addListener(u, "input", D);
            h.addListener(u, "cut", F);
            h.addListener(u, "copy", G);
            h.addListener(u, "paste", I);
            ("oncut" in u && "oncopy" in u && "onpaste" in u) ||
                h.addListener(m, "keydown", function (a) {
                    if ((!g.isMac || a.metaKey) && a.ctrlKey)
                        switch (a.keyCode) {
                            case 67:
                                G(a);
                                break;
                            case 86:
                                I(a);
                                break;
                            case 88:
                                F(a);
                        }
                });
            var P = function () {
                    if (w && f.onCompositionUpdate && !f.$readOnly) {
                        var a = u.value.replace(/\u2028/g, "");
                        w.lastValue !== a &&
                            (f.onCompositionUpdate(a),
                            w.lastValue && f.undo(),
                            w.canUndo && (w.lastValue = a),
                            w.lastValue &&
                                ((a = f.selection.getRange()),
                                f.insert(w.lastValue),
                                f.session.markUndoGroup(),
                                (w.range = f.selection.getRange()),
                                f.selection.setRange(a),
                                f.selection.clearSelection()));
                    }
                },
                M = function (a) {
                    if (f.onCompositionEnd && !f.$readOnly) {
                        var d = w;
                        w = !1;
                        var e = setTimeout(function () {
                            e = null;
                            var a = u.value.replace(/\u2028/g, "");
                            w ||
                                (a == d.lastValue
                                    ? l()
                                    : !d.lastValue && a && (l(), A(a)));
                        });
                        B = function (a) {
                            return (
                                e && clearTimeout(e),
                                (a = a.replace(/\u2028/g, "")),
                                a == d.lastValue
                                    ? ""
                                    : (d.lastValue && e && f.undo(), a)
                            );
                        };
                        f.onCompositionEnd();
                        f.removeListener("mousedown", M);
                        "compositionend" == a.type &&
                            d.range &&
                            f.selection.setRange(d.range);
                        ((g.isChrome && 53 <= g.isChrome) ||
                            (g.isWebKit && 603 <= g.isWebKit)) &&
                            D();
                    }
                },
                N = b.delayedCall(P, 50);
            h.addListener(u, "compositionstart", function (a) {
                w ||
                    !f.onCompositionStart ||
                    f.$readOnly ||
                    ((w = {}),
                    (w.canUndo = f.session.$undoManager),
                    f.onCompositionStart(),
                    setTimeout(P, 0),
                    f.on("mousedown", M),
                    w.canUndo &&
                        !f.selection.isEmpty() &&
                        (f.insert(""),
                        f.session.markUndoGroup(),
                        f.selection.clearSelection()),
                    f.session.markUndoGroup());
            });
            g.isGecko
                ? h.addListener(u, "text", function () {
                      N.schedule();
                  })
                : (h.addListener(u, "keyup", function () {
                      N.schedule();
                  }),
                  h.addListener(u, "keydown", function () {
                      N.schedule();
                  }));
            h.addListener(u, "compositionend", M);
            this.getElement = function () {
                return u;
            };
            this.setReadOnly = function (a) {
                u.readOnly = a;
            };
            this.onContextMenu = function (a) {
                t = !0;
                k(f.selection.isEmpty());
                f._emit("nativecontextmenu", { target: f, domEvent: a });
                this.moveToMouse(a, !0);
            };
            this.moveToMouse = function (a, d) {
                y || (y = u.style.cssText);
                u.style.cssText =
                    (d ? "z-index:100000;" : "") +
                    "height:" +
                    u.style.height +
                    ";" +
                    (g.isIE ? "opacity:0.1;" : "");
                d = f.container.getBoundingClientRect();
                var e = c.computedStyle(f.container),
                    p = d.top + (parseInt(e.borderTopWidth) || 0),
                    b = d.left + (parseInt(d.borderLeftWidth) || 0),
                    m = d.bottom - p - u.clientHeight - 2;
                d = function (a) {
                    u.style.left = a.clientX - b - 2 + "px";
                    u.style.top = Math.min(a.clientY - p - 2, m) + "px";
                };
                d(a);
                "mousedown" == a.type &&
                    (f.renderer.$keepTextAreaAtCursor &&
                        (f.renderer.$keepTextAreaAtCursor = null),
                    clearTimeout(O),
                    g.isWin && h.capture(f.container, d, v));
            };
            this.onContextMenuClose = v;
            var O;
            m = function (a) {
                f.textInput.onContextMenu(a);
                v();
            };
            h.addListener(u, "mouseup", m);
            h.addListener(u, "mousedown", function (a) {
                a.preventDefault();
                v();
            });
            h.addListener(f.renderer.scroller, "contextmenu", m);
            h.addListener(u, "contextmenu", m);
        };
    }
);
ace.define(
    "ace/mouse/default_handlers",
    "require exports module ace/lib/dom ace/lib/event ace/lib/useragent".split(
        " "
    ),
    function (n, q, t) {
        function h(b) {
            b.$clickSelection = null;
            var a = b.editor;
            a.setDefaultHandler("mousedown", this.onMouseDown.bind(b));
            a.setDefaultHandler("dblclick", this.onDoubleClick.bind(b));
            a.setDefaultHandler("tripleclick", this.onTripleClick.bind(b));
            a.setDefaultHandler("quadclick", this.onQuadClick.bind(b));
            a.setDefaultHandler("mousewheel", this.onMouseWheel.bind(b));
            a.setDefaultHandler("touchmove", this.onTouchMove.bind(b));
            "select startSelect selectEnd selectAllEnd selectByWordsEnd selectByLinesEnd dragWait dragWaitEnd focusWait"
                .split(" ")
                .forEach(function (a) {
                    b[a] = this[a];
                }, this);
            b.selectByLines = this.extendSelectionBy.bind(b, "getLineRange");
            b.selectByWords = this.extendSelectionBy.bind(b, "getWordRange");
        }
        function g(b, a) {
            return 0 >
                (b.start.row == b.end.row
                    ? 2 * a.column - b.start.column - b.end.column
                    : b.start.row != b.end.row - 1 ||
                      b.start.column ||
                      b.end.column
                    ? 2 * a.row - b.start.row - b.end.row
                    : a.column - 4)
                ? { cursor: b.start, anchor: b.end }
                : { cursor: b.end, anchor: b.start };
        }
        n("../lib/dom");
        n("../lib/event");
        var c = n("../lib/useragent");
        (function () {
            this.onMouseDown = function (b) {
                var a = b.inSelection(),
                    d = b.getDocumentPosition();
                this.mousedownEvent = b;
                var e = this.editor,
                    m = b.getButton();
                if (0 !== m)
                    (a = e.getSelectionRange().isEmpty()),
                        e.$blockScrolling++,
                        (a || 1 == m) && e.selection.moveToPosition(d),
                        e.$blockScrolling--,
                        2 == m &&
                            (e.textInput.onContextMenu(b.domEvent),
                            c.isMozilla || b.preventDefault());
                else {
                    this.mousedownEvent.time = Date.now();
                    if (
                        a &&
                        !e.isFocused() &&
                        (e.focus(),
                        this.$focusTimout &&
                            !this.$clickSelection &&
                            !e.inMultiSelectMode)
                    ) {
                        this.setState("focusWait");
                        this.captureMouse(b);
                        return;
                    }
                    return (
                        this.captureMouse(b),
                        this.startSelect(d, 1 < b.domEvent._clicks),
                        b.preventDefault()
                    );
                }
            };
            this.startSelect = function (b, a) {
                b =
                    b ||
                    this.editor.renderer.screenToTextCoordinates(
                        this.x,
                        this.y
                    );
                var d = this.editor;
                d.$blockScrolling++;
                this.mousedownEvent.getShiftKey()
                    ? d.selection.selectToPosition(b)
                    : a || d.selection.moveToPosition(b);
                a || this.select();
                d.renderer.scroller.setCapture &&
                    d.renderer.scroller.setCapture();
                d.setStyle("ace_selecting");
                this.setState("select");
                d.$blockScrolling--;
            };
            this.select = function () {
                var b = this.editor,
                    a = b.renderer.screenToTextCoordinates(this.x, this.y);
                b.$blockScrolling++;
                if (this.$clickSelection) {
                    var d = this.$clickSelection.comparePoint(a);
                    -1 == d
                        ? (d = this.$clickSelection.end)
                        : 1 == d
                        ? (d = this.$clickSelection.start)
                        : ((d = g(this.$clickSelection, a)),
                          (a = d.cursor),
                          (d = d.anchor));
                    b.selection.setSelectionAnchor(d.row, d.column);
                }
                b.selection.selectToPosition(a);
                b.$blockScrolling--;
                b.renderer.scrollCursorIntoView();
            };
            this.extendSelectionBy = function (b) {
                var a = this.editor,
                    d = a.renderer.screenToTextCoordinates(this.x, this.y);
                b = a.selection[b](d.row, d.column);
                a.$blockScrolling++;
                if (this.$clickSelection) {
                    var e = this.$clickSelection.comparePoint(b.start);
                    var c = this.$clickSelection.comparePoint(b.end);
                    if (-1 == e && 0 >= c) {
                        if (
                            ((e = this.$clickSelection.end),
                            b.end.row != d.row || b.end.column != d.column)
                        )
                            d = b.start;
                    } else if (1 == c && 0 <= e) {
                        if (
                            ((e = this.$clickSelection.start),
                            b.start.row != d.row || b.start.column != d.column)
                        )
                            d = b.end;
                    } else
                        -1 == e && 1 == c
                            ? ((d = b.end), (e = b.start))
                            : ((b = g(this.$clickSelection, d)),
                              (d = b.cursor),
                              (e = b.anchor));
                    a.selection.setSelectionAnchor(e.row, e.column);
                }
                a.selection.selectToPosition(d);
                a.$blockScrolling--;
                a.renderer.scrollCursorIntoView();
            };
            this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function () {
                this.$clickSelection = null;
                this.editor.unsetStyle("ace_selecting");
                this.editor.renderer.scroller.releaseCapture &&
                    this.editor.renderer.scroller.releaseCapture();
            };
            this.focusWait = function () {
                var b = Math.sqrt(
                        Math.pow(this.x - this.mousedownEvent.x, 2) +
                            Math.pow(this.y - this.mousedownEvent.y, 2)
                    ),
                    a = Date.now();
                (0 < b || a - this.mousedownEvent.time > this.$focusTimout) &&
                    this.startSelect(this.mousedownEvent.getDocumentPosition());
            };
            this.onDoubleClick = function (b) {
                b = b.getDocumentPosition();
                var a = this.editor,
                    d = a.session.getBracketRange(b);
                d
                    ? (d.isEmpty() && (d.start.column--, d.end.column++),
                      this.setState("select"))
                    : ((d = a.selection.getWordRange(b.row, b.column)),
                      this.setState("selectByWords"));
                this.$clickSelection = d;
                this.select();
            };
            this.onTripleClick = function (b) {
                b = b.getDocumentPosition();
                var a = this.editor;
                this.setState("selectByLines");
                var d = a.getSelectionRange();
                d.isMultiLine() && d.contains(b.row, b.column)
                    ? ((this.$clickSelection = a.selection.getLineRange(
                          d.start.row
                      )),
                      (this.$clickSelection.end = a.selection.getLineRange(
                          d.end.row
                      ).end))
                    : (this.$clickSelection = a.selection.getLineRange(b.row));
                this.select();
            };
            this.onQuadClick = function (b) {
                b = this.editor;
                b.selectAll();
                this.$clickSelection = b.getSelectionRange();
                this.setState("selectAll");
            };
            this.onMouseWheel = function (b) {
                if (!b.getAccelKey()) {
                    b.getShiftKey() &&
                        b.wheelY &&
                        !b.wheelX &&
                        ((b.wheelX = b.wheelY), (b.wheelY = 0));
                    var a = b.domEvent.timeStamp,
                        d = a - (this.$lastScrollTime || 0),
                        e = this.editor;
                    if (
                        e.renderer.isScrollableBy(
                            b.wheelX * b.speed,
                            b.wheelY * b.speed
                        ) ||
                        200 > d
                    )
                        return (
                            (this.$lastScrollTime = a),
                            e.renderer.scrollBy(
                                b.wheelX * b.speed,
                                b.wheelY * b.speed
                            ),
                            b.stop()
                        );
                }
            };
            this.onTouchMove = function (b) {
                var a = b.domEvent.timeStamp,
                    d = a - (this.$lastScrollTime || 0),
                    e = this.editor;
                if (
                    e.renderer.isScrollableBy(
                        b.wheelX * b.speed,
                        b.wheelY * b.speed
                    ) ||
                    200 > d
                )
                    return (
                        (this.$lastScrollTime = a),
                        e.renderer.scrollBy(
                            b.wheelX * b.speed,
                            b.wheelY * b.speed
                        ),
                        b.stop()
                    );
            };
        }.call(h.prototype));
        q.DefaultHandlers = h;
    }
);
ace.define(
    "ace/tooltip",
    ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"],
    function (n, q, t) {
        function h(c) {
            this.isOpen = !1;
            this.$element = null;
            this.$parentNode = c;
        }
        n("./lib/oop");
        var g = n("./lib/dom");
        (function () {
            this.$init = function () {
                return (
                    (this.$element = g.createElement("div")),
                    (this.$element.className = "ace_tooltip"),
                    (this.$element.style.display = "none"),
                    this.$parentNode.appendChild(this.$element),
                    this.$element
                );
            };
            this.getElement = function () {
                return this.$element || this.$init();
            };
            this.setText = function (c) {
                g.setInnerText(this.getElement(), c);
            };
            this.setHtml = function (c) {
                this.getElement().innerHTML = c;
            };
            this.setPosition = function (c, b) {
                this.getElement().style.left = c + "px";
                this.getElement().style.top = b + "px";
            };
            this.setClassName = function (c) {
                g.addCssClass(this.getElement(), c);
            };
            this.show = function (c, b, a) {
                null != c && this.setText(c);
                null != b && null != a && this.setPosition(b, a);
                this.isOpen ||
                    ((this.getElement().style.display = "block"),
                    (this.isOpen = !0));
            };
            this.hide = function () {
                this.isOpen &&
                    ((this.getElement().style.display = "none"),
                    (this.isOpen = !1));
            };
            this.getHeight = function () {
                return this.getElement().offsetHeight;
            };
            this.getWidth = function () {
                return this.getElement().offsetWidth;
            };
            this.destroy = function () {
                this.isOpen = !1;
                this.$element &&
                    this.$element.parentNode &&
                    this.$element.parentNode.removeChild(this.$element);
            };
        }.call(h.prototype));
        q.Tooltip = h;
    }
);
ace.define(
    "ace/mouse/default_gutter_handler",
    "require exports module ace/lib/dom ace/lib/oop ace/lib/event ace/tooltip".split(
        " "
    ),
    function (n, q, t) {
        function h(a) {
            b.call(this, a);
        }
        var g = n("../lib/dom");
        t = n("../lib/oop");
        var c = n("../lib/event"),
            b = n("../tooltip").Tooltip;
        t.inherits(h, b);
        (function () {
            this.setPosition = function (a, d) {
                var e =
                        window.innerWidth ||
                        document.documentElement.clientWidth,
                    c =
                        window.innerHeight ||
                        document.documentElement.clientHeight,
                    f = this.getWidth(),
                    k = this.getHeight();
                a += 15;
                d += 15;
                a + f > e && (a -= a + f - e);
                d + k > c && (d -= 20 + k);
                b.prototype.setPosition.call(this, a, d);
            };
        }.call(h.prototype));
        q.GutterHandler = function (a) {
            function d() {
                k && (k = clearTimeout(k));
                v &&
                    (f.hide(),
                    (v = null),
                    e._signal("hideGutterTooltip", f),
                    e.removeEventListener("mousewheel", d));
            }
            var e = a.editor,
                b = e.renderer.$gutterLayer,
                f = new h(e.container);
            a.editor.setDefaultHandler("guttermousedown", function (d) {
                if (
                    e.isFocused() &&
                    0 == d.getButton() &&
                    "foldWidgets" != b.getRegion(d)
                ) {
                    var c = d.getDocumentPosition().row,
                        p = e.session.selection;
                    if (d.getShiftKey()) p.selectTo(c, 0);
                    else {
                        if (2 == d.domEvent.detail)
                            return e.selectAll(), d.preventDefault();
                        a.$clickSelection = e.selection.getLineRange(c);
                    }
                    return (
                        a.setState("selectByLines"),
                        a.captureMouse(d),
                        d.preventDefault()
                    );
                }
            });
            var k, l, v;
            a.editor.setDefaultHandler("guttermousemove", function (c) {
                if (
                    g.hasCssClass(
                        c.domEvent.target || c.domEvent.srcElement,
                        "ace_fold-widget"
                    )
                )
                    return d();
                v && a.$tooltipFollowsMouse && f.setPosition(c.x, c.y);
                l = c;
                k ||
                    (k = setTimeout(function () {
                        k = null;
                        if (l && !a.isMousePressed)
                            a: {
                                var c = l.getDocumentPosition().row,
                                    p = b.$annotations[c];
                                if (p) {
                                    var m = e.session.getLength();
                                    if (
                                        c == m &&
                                        ((c = e.renderer.pixelToScreenCoordinates(
                                            0,
                                            l.y
                                        ).row),
                                        (m = l.$pos),
                                        c >
                                            e.session.documentToScreenRow(
                                                m.row,
                                                m.column
                                            ))
                                    ) {
                                        d();
                                        break a;
                                    }
                                    v != p &&
                                        ((v = p.text.join("<br/>")),
                                        f.setHtml(v),
                                        f.show(),
                                        e._signal("showGutterTooltip", f),
                                        e.on("mousewheel", d),
                                        a.$tooltipFollowsMouse
                                            ? f.setPosition(l.x, l.y)
                                            : ((p = l.domEvent.target.getBoundingClientRect()),
                                              (c = f.getElement().style),
                                              (c.left = p.right + "px"),
                                              (c.top = p.bottom + "px")));
                                } else d();
                            }
                        else d();
                    }, 50));
            });
            c.addListener(e.renderer.$gutter, "mouseout", function (a) {
                l = null;
                v &&
                    !k &&
                    (k = setTimeout(function () {
                        k = null;
                        d();
                    }, 50));
            });
            e.on("changeSession", d);
        };
    }
);
ace.define(
    "ace/mouse/mouse_event",
    ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"],
    function (n, q, t) {
        var h = n("../lib/event"),
            g = n("../lib/useragent");
        n = q.MouseEvent = function (c, b) {
            this.domEvent = c;
            this.editor = b;
            this.x = this.clientX = c.clientX;
            this.y = this.clientY = c.clientY;
            this.$inSelection = this.$pos = null;
            this.defaultPrevented = this.propagationStopped = !1;
        };
        (function () {
            this.stopPropagation = function () {
                h.stopPropagation(this.domEvent);
                this.propagationStopped = !0;
            };
            this.preventDefault = function () {
                h.preventDefault(this.domEvent);
                this.defaultPrevented = !0;
            };
            this.stop = function () {
                this.stopPropagation();
                this.preventDefault();
            };
            this.getDocumentPosition = function () {
                return this.$pos
                    ? this.$pos
                    : ((this.$pos = this.editor.renderer.screenToTextCoordinates(
                          this.clientX,
                          this.clientY
                      )),
                      this.$pos);
            };
            this.inSelection = function () {
                if (null !== this.$inSelection) return this.$inSelection;
                var c = this.editor.getSelectionRange();
                if (c.isEmpty()) this.$inSelection = !1;
                else {
                    var b = this.getDocumentPosition();
                    this.$inSelection = c.contains(b.row, b.column);
                }
                return this.$inSelection;
            };
            this.getButton = function () {
                return h.getButton(this.domEvent);
            };
            this.getShiftKey = function () {
                return this.domEvent.shiftKey;
            };
            this.getAccelKey = g.isMac
                ? function () {
                      return this.domEvent.metaKey;
                  }
                : function () {
                      return this.domEvent.ctrlKey;
                  };
        }.call(n.prototype));
    }
);
ace.define(
    "ace/mouse/dragdrop_handler",
    "require exports module ace/lib/dom ace/lib/event ace/lib/useragent".split(
        " "
    ),
    function (n, q, t) {
        function h(m) {
            var f, k;
            function l() {
                var p = A,
                    b = (A = w.renderer.screenToTextCoordinates(n, q)),
                    c = Date.now(),
                    m = !p || b.row != p.row,
                    l = !p || b.column != p.column;
                !G || m || l
                    ? ((w.$blockScrolling += 1),
                      w.moveCursorToPosition(b),
                      --w.$blockScrolling,
                      (G = c),
                      (f = n),
                      (k = q))
                    : Math.sqrt(Math.pow(n - f, 2) + Math.pow(q - k, 2)) > e
                    ? (G = null)
                    : c - G >= d &&
                      (w.renderer.scrollCursorIntoView(), (G = null));
                var b = A,
                    c = Date.now(),
                    l = w.renderer.layerConfig.lineHeight,
                    y = w.renderer.layerConfig.characterWidth,
                    m = w.renderer.scroller.getBoundingClientRect(),
                    r = n - m.left,
                    x = m.right - n,
                    v = q - m.top,
                    z = m.bottom - q,
                    u = Math.min(v, z),
                    m = { row: b.row, column: b.column };
                2 >= Math.min(r, x) / y && (m.column += r < x ? -3 : 2);
                1 >= u / l && (m.row += v < z ? -1 : 1);
                l = b.column != m.column;
                p = !p || b.row != p.row;
                b.row != m.row || (l && !p)
                    ? F
                        ? c - F >= a && w.renderer.scrollCursorIntoView(m)
                        : (F = c)
                    : (F = null);
            }
            function v() {
                t = w.selection.toOrientedRange();
                h = w.session.addMarker(
                    t,
                    "ace_selection",
                    w.getSelectionStyle()
                );
                w.clearSelection();
                w.isFocused() && w.renderer.$cursorLayer.setBlinking(!1);
                clearInterval(B);
                l();
                B = setInterval(l, 20);
                D = 0;
                c.addListener(document, "mousemove", r);
            }
            function u() {
                clearInterval(B);
                w.session.removeMarker(h);
                h = null;
                w.$blockScrolling += 1;
                w.selection.fromOrientedRange(t);
                --w.$blockScrolling;
                w.isFocused() &&
                    !H &&
                    w.renderer.$cursorLayer.setBlinking(!w.getReadOnly());
                A = t = null;
                D = 0;
                G = F = null;
                c.removeListener(document, "mousemove", r);
            }
            function r() {
                null == I &&
                    (I = setTimeout(function () {
                        null != I && h && u();
                    }, 20));
            }
            function p(a) {
                a = a.types;
                return (
                    !a ||
                    Array.prototype.some.call(a, function (a) {
                        return "text/plain" == a || "Text" == a;
                    })
                );
            }
            function z(a) {
                var d = ["copy", "copymove", "all", "uninitialized"],
                    e = [
                        "move",
                        "copymove",
                        "linkmove",
                        "all",
                        "uninitialized",
                    ],
                    p = b.isMac ? a.altKey : a.ctrlKey,
                    c = "uninitialized";
                try {
                    c = a.dataTransfer.effectAllowed.toLowerCase();
                } catch (R) {}
                a = "none";
                return (
                    p && 0 <= d.indexOf(c)
                        ? (a = "copy")
                        : 0 <= e.indexOf(c)
                        ? (a = "move")
                        : 0 <= d.indexOf(c) && (a = "copy"),
                    a
                );
            }
            var w = m.editor,
                y = g.createElement("img");
            y.src =
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            b.isOpera &&
                (y.style.cssText =
                    "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;");
            [
                "dragWait",
                "dragWaitEnd",
                "startDrag",
                "dragReadyEnd",
                "onMouseDrag",
            ].forEach(function (a) {
                m[a] = this[a];
            }, this);
            w.addEventListener("mousedown", this.onMouseDown.bind(m));
            var x = w.container,
                h,
                n,
                q,
                B,
                t,
                A,
                D = 0,
                E,
                H,
                F,
                G;
            this.onDragStart = function (a) {
                if (this.cancelDrag || !x.draggable) {
                    var d = this;
                    return (
                        setTimeout(function () {
                            d.startSelect();
                            d.captureMouse(a);
                        }, 0),
                        a.preventDefault()
                    );
                }
                t = w.getSelectionRange();
                var e = a.dataTransfer;
                e.effectAllowed = w.getReadOnly() ? "copy" : "copyMove";
                b.isOpera && (w.container.appendChild(y), (y.scrollTop = 0));
                e.setDragImage && e.setDragImage(y, 0, 0);
                b.isOpera && w.container.removeChild(y);
                e.clearData();
                e.setData("Text", w.session.getTextRange());
                H = !0;
                this.setState("drag");
            };
            this.onDragEnd = function (a) {
                H = x.draggable = !1;
                this.setState(null);
                w.getReadOnly() ||
                    ((a = a.dataTransfer.dropEffect),
                    !E &&
                        "move" == a &&
                        w.session.remove(w.getSelectionRange()),
                    w.renderer.$cursorLayer.setBlinking(!0));
                this.editor.unsetStyle("ace_dragging");
                this.editor.renderer.setCursorStyle("");
            };
            this.onDragEnter = function (a) {
                if (!w.getReadOnly() && p(a.dataTransfer))
                    return (
                        (n = a.clientX),
                        (q = a.clientY),
                        h || v(),
                        D++,
                        (a.dataTransfer.dropEffect = E = z(a)),
                        c.preventDefault(a)
                    );
            };
            this.onDragOver = function (a) {
                if (!w.getReadOnly() && p(a.dataTransfer))
                    return (
                        (n = a.clientX),
                        (q = a.clientY),
                        h || (v(), D++),
                        null !== I && (I = null),
                        (a.dataTransfer.dropEffect = E = z(a)),
                        c.preventDefault(a)
                    );
            };
            this.onDragLeave = function (a) {
                D--;
                if (0 >= D && h) return u(), (E = null), c.preventDefault(a);
            };
            this.onDrop = function (a) {
                if (A) {
                    var d = a.dataTransfer;
                    if (H)
                        switch (E) {
                            case "move":
                                t.contains(A.row, A.column)
                                    ? (t = { start: A, end: A })
                                    : (t = w.moveText(t, A));
                                break;
                            case "copy":
                                t = w.moveText(t, A, !0);
                        }
                    else
                        (d = d.getData("Text")),
                            (t = { start: A, end: w.session.insert(A, d) }),
                            w.focus(),
                            (E = null);
                    return u(), c.preventDefault(a);
                }
            };
            c.addListener(x, "dragstart", this.onDragStart.bind(m));
            c.addListener(x, "dragend", this.onDragEnd.bind(m));
            c.addListener(x, "dragenter", this.onDragEnter.bind(m));
            c.addListener(x, "dragover", this.onDragOver.bind(m));
            c.addListener(x, "dragleave", this.onDragLeave.bind(m));
            c.addListener(x, "drop", this.onDrop.bind(m));
            var I = null;
        }
        var g = n("../lib/dom"),
            c = n("../lib/event"),
            b = n("../lib/useragent"),
            a = 200,
            d = 200,
            e = 5;
        (function () {
            this.dragWait = function () {
                Date.now() - this.mousedownEvent.time >
                    this.editor.getDragDelay() && this.startDrag();
            };
            this.dragWaitEnd = function () {
                this.editor.container.draggable = !1;
                this.startSelect(this.mousedownEvent.getDocumentPosition());
                this.selectEnd();
            };
            this.dragReadyEnd = function (a) {
                this.editor.renderer.$cursorLayer.setBlinking(
                    !this.editor.getReadOnly()
                );
                this.editor.unsetStyle("ace_dragging");
                this.editor.renderer.setCursorStyle("");
                this.dragWaitEnd();
            };
            this.startDrag = function () {
                this.cancelDrag = !1;
                var a = this.editor;
                a.container.draggable = !0;
                a.renderer.$cursorLayer.setBlinking(!1);
                a.setStyle("ace_dragging");
                a.renderer.setCursorStyle(b.isWin ? "default" : "move");
                this.setState("dragReady");
            };
            this.onMouseDrag = function (a) {
                var d = this.editor.container;
                b.isIE &&
                    "dragReady" == this.state &&
                    ((a = Math.sqrt(
                        Math.pow(this.x - this.mousedownEvent.x, 2) +
                            Math.pow(this.y - this.mousedownEvent.y, 2)
                    )),
                    3 < a && d.dragDrop());
                "dragWait" === this.state &&
                    ((a = Math.sqrt(
                        Math.pow(this.x - this.mousedownEvent.x, 2) +
                            Math.pow(this.y - this.mousedownEvent.y, 2)
                    )),
                    0 < a &&
                        ((d.draggable = !1),
                        this.startSelect(
                            this.mousedownEvent.getDocumentPosition()
                        )));
            };
            this.onMouseDown = function (a) {
                if (this.$dragEnabled) {
                    this.mousedownEvent = a;
                    var d = this.editor,
                        e = a.inSelection(),
                        c = a.getButton();
                    1 !== (a.domEvent.detail || 1) ||
                        0 !== c ||
                        !e ||
                        (a.editor.inMultiSelectMode &&
                            (a.getAccelKey() || a.getShiftKey())) ||
                        ((this.mousedownEvent.time = Date.now()),
                        (e = a.domEvent.target || a.domEvent.srcElement),
                        "unselectable" in e && (e.unselectable = "on"),
                        d.getDragDelay()
                            ? (b.isWebKit &&
                                  ((this.cancelDrag = !0),
                                  (d.container.draggable = !0)),
                              this.setState("dragWait"))
                            : this.startDrag(),
                        this.captureMouse(a, this.onMouseDrag.bind(this)),
                        (a.defaultPrevented = !0));
                }
            };
        }.call(h.prototype));
        q.DragdropHandler = h;
    }
);
ace.define(
    "ace/lib/net",
    ["require", "exports", "module", "ace/lib/dom"],
    function (n, q, t) {
        var h = n("./dom");
        q.get = function (g, c) {
            var b = new XMLHttpRequest();
            b.open("GET", g, !0);
            b.onreadystatechange = function () {
                4 === b.readyState && c(b.responseText);
            };
            b.send(null);
        };
        q.loadScript = function (g, c) {
            var b = h.getDocumentHead(),
                a = document.createElement("script");
            a.src = g;
            b.appendChild(a);
            a.onload = a.onreadystatechange = function (d, e) {
                if (
                    e ||
                    !a.readyState ||
                    "loaded" == a.readyState ||
                    "complete" == a.readyState
                )
                    (a = a.onload = a.onreadystatechange = null), e || c();
            };
        };
        q.qualifyURL = function (g) {
            var c = document.createElement("a");
            return (c.href = g), c.href;
        };
    }
);
ace.define("ace/lib/event_emitter", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    n = {};
    var h = function () {
            this.propagationStopped = !0;
        },
        g = function () {
            this.defaultPrevented = !0;
        };
    n._emit = n._dispatchEvent = function (c, b) {
        this._eventRegistry || (this._eventRegistry = {});
        this._defaultHandlers || (this._defaultHandlers = {});
        var a = this._eventRegistry[c] || [],
            d = this._defaultHandlers[c];
        if (a.length || d) {
            ("object" == typeof b && b) || (b = {});
            b.type || (b.type = c);
            b.stopPropagation || (b.stopPropagation = h);
            b.preventDefault || (b.preventDefault = g);
            a = a.slice();
            for (
                c = 0;
                c < a.length && (a[c](b, this), !b.propagationStopped);
                c++
            );
            if (d && !b.defaultPrevented) return d(b, this);
        }
    };
    n._signal = function (c, b) {
        if ((c = (this._eventRegistry || {})[c])) {
            c = c.slice();
            for (var a = 0; a < c.length; a++) c[a](b, this);
        }
    };
    n.once = function (c, b) {
        var a = this;
        b &&
            this.addEventListener(c, function e() {
                a.removeEventListener(c, e);
                b.apply(null, arguments);
            });
    };
    n.setDefaultHandler = function (c, b) {
        var a = this._defaultHandlers;
        a || (a = this._defaultHandlers = { _disabled_: {} });
        if (a[c]) {
            var d = a[c],
                e = a._disabled_[c];
            e || (a._disabled_[c] = e = []);
            e.push(d);
            d = e.indexOf(b);
            -1 != d && e.splice(d, 1);
        }
        a[c] = b;
    };
    n.removeDefaultHandler = function (c, b) {
        var a = this._defaultHandlers;
        if (a) {
            var d = a._disabled_[c];
            a[c] == b
                ? d && this.setDefaultHandler(c, d.pop())
                : d && ((c = d.indexOf(b)), -1 != c && d.splice(c, 1));
        }
    };
    n.on = n.addEventListener = function (c, b, a) {
        this._eventRegistry = this._eventRegistry || {};
        var d = this._eventRegistry[c];
        return (
            d || (d = this._eventRegistry[c] = []),
            -1 == d.indexOf(b) && d[a ? "unshift" : "push"](b),
            b
        );
    };
    n.off = n.removeListener = n.removeEventListener = function (c, b) {
        this._eventRegistry = this._eventRegistry || {};
        if ((c = this._eventRegistry[c]))
            (b = c.indexOf(b)), -1 !== b && c.splice(b, 1);
    };
    n.removeAllListeners = function (c) {
        this._eventRegistry && (this._eventRegistry[c] = []);
    };
    q.EventEmitter = n;
});
ace.define(
    "ace/lib/app_config",
    ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"],
    function (n, q, t) {
        function h(a) {
            "undefined" != typeof console &&
                console.warn &&
                console.warn.apply(console, arguments);
        }
        function g(a, e) {
            var d = Error(a);
            d.data = e;
            "object" == typeof console && console.error && console.error(d);
            setTimeout(function () {
                throw d;
            });
        }
        ("no use strict");
        var c = n("./oop"),
            b = n("./event_emitter").EventEmitter,
            a = {
                setOptions: function (a) {
                    Object.keys(a).forEach(function (d) {
                        this.setOption(d, a[d]);
                    }, this);
                },
                getOptions: function (a) {
                    var d = {};
                    return (
                        a
                            ? Array.isArray(a) ||
                              ((d = a), (a = Object.keys(d)))
                            : (a = Object.keys(this.$options)),
                        a.forEach(function (a) {
                            d[a] = this.getOption(a);
                        }, this),
                        d
                    );
                },
                setOption: function (a, e) {
                    if (this["$" + a] !== e) {
                        var d = this.$options[a];
                        if (!d) return h('misspelled option "' + a + '"');
                        if (d.forwardTo)
                            return (
                                this[d.forwardTo] &&
                                this[d.forwardTo].setOption(a, e)
                            );
                        d.handlesSet || (this["$" + a] = e);
                        d && d.set && d.set.call(this, e);
                    }
                },
                getOption: function (a) {
                    var d = this.$options[a];
                    return d
                        ? d.forwardTo
                            ? this[d.forwardTo] &&
                              this[d.forwardTo].getOption(a)
                            : d && d.get
                            ? d.get.call(this)
                            : this["$" + a]
                        : h('misspelled option "' + a + '"');
                },
            };
        n = function () {
            this.$defaultOptions = {};
        };
        (function () {
            c.implement(this, b);
            this.defineOptions = function (d, e, b) {
                return (
                    d.$options || (this.$defaultOptions[e] = d.$options = {}),
                    Object.keys(b).forEach(function (a) {
                        var e = b[a];
                        "string" == typeof e && (e = { forwardTo: e });
                        e.name || (e.name = a);
                        d.$options[e.name] = e;
                        "initialValue" in e &&
                            (d["$" + e.name] = e.initialValue);
                    }),
                    c.implement(d, a),
                    this
                );
            };
            this.resetOptions = function (a) {
                Object.keys(a.$options).forEach(function (d) {
                    var e = a.$options[d];
                    "value" in e && a.setOption(d, e.value);
                });
            };
            this.setDefaultValue = function (a, e, b) {
                a = this.$defaultOptions[a] || (this.$defaultOptions[a] = {});
                a[e] &&
                    (a.forwardTo
                        ? this.setDefaultValue(a.forwardTo, e, b)
                        : (a[e].value = b));
            };
            this.setDefaultValues = function (a, e) {
                Object.keys(e).forEach(function (d) {
                    this.setDefaultValue(a, d, e[d]);
                }, this);
            };
            this.warn = h;
            this.reportError = g;
        }.call(n.prototype));
        q.AppConfig = n;
    }
);
ace.define(
    "ace/config",
    "require exports module ace/lib/lang ace/lib/oop ace/lib/net ace/lib/app_config".split(
        " "
    ),
    function (n, q, t) {
        function h(a) {
            return a.replace(/-(.)/g, function (a, d) {
                return d.toUpperCase();
            });
        }
        ("no use strict");
        var g = n("./lib/lang");
        n("./lib/oop");
        var c = n("./lib/net"),
            b = n("./lib/app_config").AppConfig;
        t.exports = q = new b();
        var a = (function () {
                return this || ("undefined" != typeof window && window);
            })(),
            d = {
                packaged: !1,
                workerPath: null,
                modePath: null,
                themePath: null,
                basePath: "",
                suffix: ".js",
                $moduleUrls: {},
            };
        q.get = function (a) {
            if (!d.hasOwnProperty(a)) throw Error("Unknown config key: " + a);
            return d[a];
        };
        q.set = function (a, b) {
            if (!d.hasOwnProperty(a)) throw Error("Unknown config key: " + a);
            d[a] = b;
        };
        q.all = function () {
            return g.copyObject(d);
        };
        q.moduleUrl = function (a, b) {
            if (d.$moduleUrls[a]) return d.$moduleUrls[a];
            var e = a.split("/");
            b = b || e[e.length - 2] || "";
            a = "snippets" == b ? "/" : "-";
            var c = e[e.length - 1];
            "worker" == b &&
                "-" == a &&
                (c = c.replace(
                    new RegExp("^" + b + "[\\-_]|[\\-_]" + b + "$", "g"),
                    ""
                ));
            (!c || c == b) && 1 < e.length && (c = e[e.length - 2]);
            e = d[b + "Path"];
            return (
                null == e ? (e = d.basePath) : "/" == a && (b = a = ""),
                e && "/" != e.slice(-1) && (e += "/"),
                e + b + a + c + this.get("suffix")
            );
        };
        q.setModuleUrl = function (a, b) {
            return (d.$moduleUrls[a] = b);
        };
        q.$loading = {};
        q.loadModule = function (a, d) {
            var e;
            Array.isArray(a) && ((e = a[0]), (a = a[1]));
            try {
                var b = n(a);
            } catch (l) {}
            if (b && !q.$loading[a]) return d && d(b);
            q.$loading[a] || (q.$loading[a] = []);
            q.$loading[a].push(d);
            if (!(1 < q.$loading[a].length)) {
                d = function () {
                    n([a], function (d) {
                        q._emit("load.module", { name: a, module: d });
                        var e = q.$loading[a];
                        q.$loading[a] = null;
                        e.forEach(function (a) {
                            a && a(d);
                        });
                    });
                };
                if (!q.get("packaged")) return d();
                c.loadScript(q.moduleUrl(a, e), d);
            }
        };
        q.init = function (e) {
            if (a && a.document) {
                d.packaged =
                    e ||
                    n.packaged ||
                    t.packaged ||
                    (a.define && define.packaged);
                e = {};
                for (
                    var b = "",
                        c = document.currentScript || document._currentScript,
                        c = (
                            (c && c.ownerDocument) ||
                            document
                        ).getElementsByTagName("script"),
                        k = 0;
                    k < c.length;
                    k++
                ) {
                    var l = c[k],
                        v = l.src || l.getAttribute("src");
                    if (v) {
                        for (
                            var l = l.attributes, u = 0, r = l.length;
                            u < r;
                            u++
                        ) {
                            var p = l[u];
                            0 === p.name.indexOf("data-ace-") &&
                                (e[h(p.name.replace(/^data-ace-/, ""))] =
                                    p.value);
                        }
                        (v = v.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/)) &&
                            (b = v[1]);
                    }
                }
                b && ((e.base = e.base || b), (e.packaged = !0));
                e.basePath = e.base;
                e.workerPath = e.workerPath || e.base;
                e.modePath = e.modePath || e.base;
                e.themePath = e.themePath || e.base;
                delete e.base;
                for (var z in e) "undefined" != typeof e[z] && q.set(z, e[z]);
            }
        };
    }
);
ace.define(
    "ace/mouse/mouse_handler",
    "require exports module ace/lib/event ace/lib/useragent ace/mouse/default_handlers ace/mouse/default_gutter_handler ace/mouse/mouse_event ace/mouse/dragdrop_handler ace/config".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../lib/event"),
            g = n("../lib/useragent"),
            c = n("./default_handlers").DefaultHandlers,
            b = n("./default_gutter_handler").GutterHandler,
            a = n("./mouse_event").MouseEvent,
            d = n("./dragdrop_handler").DragdropHandler;
        n = n("../config");
        t = function (a) {
            var e = this;
            this.editor = a;
            new c(this);
            new b(this);
            new d(this);
            var f = function (d) {
                    (document.hasFocus &&
                        document.hasFocus() &&
                        (a.isFocused() ||
                            document.activeElement !=
                                (a.textInput && a.textInput.getElement()))) ||
                        window.focus();
                    a.focus();
                },
                k = a.renderer.getMouseEventTarget();
            h.addListener(k, "click", this.onMouseEvent.bind(this, "click"));
            h.addListener(
                k,
                "mousemove",
                this.onMouseMove.bind(this, "mousemove")
            );
            h.addMultiMouseDownListener(
                [
                    k,
                    a.renderer.scrollBarV && a.renderer.scrollBarV.inner,
                    a.renderer.scrollBarH && a.renderer.scrollBarH.inner,
                    a.textInput && a.textInput.getElement(),
                ].filter(Boolean),
                [400, 300, 250],
                this,
                "onMouseEvent"
            );
            h.addMouseWheelListener(
                a.container,
                this.onMouseWheel.bind(this, "mousewheel")
            );
            h.addTouchMoveListener(
                a.container,
                this.onTouchMove.bind(this, "touchmove")
            );
            var l = a.renderer.$gutter;
            h.addListener(
                l,
                "mousedown",
                this.onMouseEvent.bind(this, "guttermousedown")
            );
            h.addListener(
                l,
                "click",
                this.onMouseEvent.bind(this, "gutterclick")
            );
            h.addListener(
                l,
                "dblclick",
                this.onMouseEvent.bind(this, "gutterdblclick")
            );
            h.addListener(
                l,
                "mousemove",
                this.onMouseEvent.bind(this, "guttermousemove")
            );
            h.addListener(k, "mousedown", f);
            h.addListener(l, "mousedown", f);
            g.isIE &&
                a.renderer.scrollBarV &&
                (h.addListener(a.renderer.scrollBarV.element, "mousedown", f),
                h.addListener(a.renderer.scrollBarH.element, "mousedown", f));
            a.on("mousemove", function (d) {
                if (!e.state && !e.$dragDelay && e.$dragEnabled) {
                    d = a.renderer.screenToTextCoordinates(d.x, d.y);
                    var b = a.session.selection.getRange(),
                        c = a.renderer;
                    !b.isEmpty() && b.insideStart(d.row, d.column)
                        ? c.setCursorStyle("default")
                        : c.setCursorStyle("");
                }
            });
        };
        (function () {
            this.onMouseEvent = function (d, b) {
                this.editor._emit(d, new a(b, this.editor));
            };
            this.onMouseMove = function (d, b) {
                var e =
                    this.editor._eventRegistry &&
                    this.editor._eventRegistry.mousemove;
                e && e.length && this.editor._emit(d, new a(b, this.editor));
            };
            this.onMouseWheel = function (d, b) {
                var e = new a(b, this.editor);
                e.speed = 2 * this.$scrollSpeed;
                e.wheelX = b.wheelX;
                e.wheelY = b.wheelY;
                this.editor._emit(d, e);
            };
            this.onTouchMove = function (d, b) {
                var e = new a(b, this.editor);
                e.speed = 1;
                e.wheelX = b.wheelX;
                e.wheelY = b.wheelY;
                this.editor._emit(d, e);
            };
            this.setState = function (a) {
                this.state = a;
            };
            this.captureMouse = function (d, b) {
                this.x = d.x;
                this.y = d.y;
                this.isMousePressed = !0;
                var e = this.editor.renderer;
                e.$keepTextAreaAtCursor && (e.$keepTextAreaAtCursor = null);
                var c = this,
                    l = function (d) {
                        if (d) {
                            if (g.isWebKit && !d.which && c.releaseMouse)
                                return c.releaseMouse();
                            c.x = d.clientX;
                            c.y = d.clientY;
                            b && b(d);
                            c.mouseEvent = new a(d, c.editor);
                            c.$mouseMoved = !0;
                        }
                    },
                    m = function (a) {
                        clearInterval(r);
                        u();
                        c[c.state + "End"] && c[c.state + "End"](a);
                        c.state = "";
                        null == e.$keepTextAreaAtCursor &&
                            ((e.$keepTextAreaAtCursor = !0),
                            e.$moveTextAreaToCursor());
                        c.isMousePressed = !1;
                        c.$onCaptureMouseMove = c.releaseMouse = null;
                        a && c.onMouseEvent("mouseup", a);
                    },
                    u = function () {
                        c[c.state] && c[c.state]();
                        c.$mouseMoved = !1;
                    };
                if (g.isOldIE && "dblclick" == d.domEvent.type)
                    return setTimeout(function () {
                        m(d);
                    });
                c.$onCaptureMouseMove = l;
                c.releaseMouse = h.capture(this.editor.container, l, m);
                var r = setInterval(u, 20);
            };
            this.releaseMouse = null;
            this.cancelContextMenu = function () {
                var a = function (d) {
                    (d && d.domEvent && "contextmenu" != d.domEvent.type) ||
                        (this.editor.off("nativecontextmenu", a),
                        d && d.domEvent && h.stopEvent(d.domEvent));
                }.bind(this);
                setTimeout(a, 10);
                this.editor.on("nativecontextmenu", a);
            };
        }.call(t.prototype));
        n.defineOptions(t.prototype, "mouseHandler", {
            scrollSpeed: { initialValue: 2 },
            dragDelay: { initialValue: g.isMac ? 150 : 0 },
            dragEnabled: { initialValue: !0 },
            focusTimout: { initialValue: 0 },
            tooltipFollowsMouse: { initialValue: !0 },
        });
        q.MouseHandler = t;
    }
);
ace.define(
    "ace/mouse/fold_handler",
    ["require", "exports", "module"],
    function (n, q, t) {
        q.FoldHandler = function (h) {
            h.on("click", function (g) {
                var c = g.getDocumentPosition(),
                    b = h.session;
                (c = b.getFoldAt(c.row, c.column, 1)) &&
                    (g.getAccelKey() ? b.removeFold(c) : b.expandFold(c),
                    g.stop());
            });
            h.on("gutterclick", function (g) {
                if ("foldWidgets" == h.renderer.$gutterLayer.getRegion(g)) {
                    var c = g.getDocumentPosition().row,
                        b = h.session;
                    b.foldWidgets &&
                        b.foldWidgets[c] &&
                        h.session.onFoldWidgetClick(c, g);
                    h.isFocused() || h.focus();
                    g.stop();
                }
            });
            h.on("gutterdblclick", function (g) {
                if ("foldWidgets" == h.renderer.$gutterLayer.getRegion(g)) {
                    var c = g.getDocumentPosition().row,
                        b = h.session,
                        a = b.getParentFoldRangeData(c, !0);
                    if ((a = a.range || a.firstRange))
                        (c = a.start.row),
                            (c = b.getFoldAt(c, b.getLine(c).length, 1))
                                ? b.removeFold(c)
                                : (b.addFold("...", a),
                                  h.renderer.scrollCursorIntoView({
                                      row: a.start.row,
                                      column: 0,
                                  }));
                    g.stop();
                }
            });
        };
    }
);
ace.define(
    "ace/keyboard/keybinding",
    ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"],
    function (n, q, t) {
        var h = n("../lib/keys"),
            g = n("../lib/event");
        n = function (c) {
            this.$editor = c;
            this.$data = { editor: c };
            this.$handlers = [];
            this.setDefaultHandler(c.commands);
        };
        (function () {
            this.setDefaultHandler = function (c) {
                this.removeKeyboardHandler(this.$defaultHandler);
                this.$defaultHandler = c;
                this.addKeyboardHandler(c, 0);
            };
            this.setKeyboardHandler = function (c) {
                var b = this.$handlers;
                if (b[b.length - 1] != c) {
                    for (
                        ;
                        b[b.length - 1] &&
                        b[b.length - 1] != this.$defaultHandler;

                    )
                        this.removeKeyboardHandler(b[b.length - 1]);
                    this.addKeyboardHandler(c, 1);
                }
            };
            this.addKeyboardHandler = function (c, b) {
                if (c) {
                    "function" == typeof c &&
                        !c.handleKeyboard &&
                        (c.handleKeyboard = c);
                    var a = this.$handlers.indexOf(c);
                    -1 != a && this.$handlers.splice(a, 1);
                    void 0 == b
                        ? this.$handlers.push(c)
                        : this.$handlers.splice(b, 0, c);
                    -1 == a && c.attach && c.attach(this.$editor);
                }
            };
            this.removeKeyboardHandler = function (c) {
                var b = this.$handlers.indexOf(c);
                return -1 == b
                    ? !1
                    : (this.$handlers.splice(b, 1),
                      c.detach && c.detach(this.$editor),
                      !0);
            };
            this.getKeyboardHandler = function () {
                return this.$handlers[this.$handlers.length - 1];
            };
            this.getStatusText = function () {
                var c = this.$data,
                    b = c.editor;
                return this.$handlers
                    .map(function (a) {
                        return (a.getStatusText && a.getStatusText(b, c)) || "";
                    })
                    .filter(Boolean)
                    .join(" ");
            };
            this.$callKeyboardHandlers = function (c, b, a, d) {
                for (
                    var e,
                        m = !1,
                        f = this.$editor.commands,
                        k = this.$handlers.length;
                    k-- &&
                    !(
                        (e = this.$handlers[k].handleKeyboard(
                            this.$data,
                            c,
                            b,
                            a,
                            d
                        )) &&
                        e.command &&
                        ("null" == e.command
                            ? (m = !0)
                            : (m = f.exec(e.command, this.$editor, e.args, d)),
                        m &&
                            d &&
                            -1 != c &&
                            1 != e.passEvent &&
                            1 != e.command.passEvent &&
                            g.stopEvent(d),
                        m)
                    );

                );
                return (
                    !m &&
                        -1 == c &&
                        ((e = { command: "insertstring" }),
                        (m = f.exec("insertstring", this.$editor, b))),
                    m &&
                        this.$editor._signal &&
                        this.$editor._signal("keyboardActivity", e),
                    m
                );
            };
            this.onCommandKey = function (c, b, a) {
                var d = h.keyCodeToString(a);
                this.$callKeyboardHandlers(b, d, a, c);
            };
            this.onTextInput = function (c) {
                this.$callKeyboardHandlers(-1, c);
            };
        }.call(n.prototype));
        q.KeyBinding = n;
    }
);
ace.define("ace/range", ["require", "exports", "module"], function (n, q, t) {
    var h = function (g, c, b, a) {
        this.start = { row: g, column: c };
        this.end = { row: b, column: a };
    };
    (function () {
        this.isEqual = function (g) {
            return (
                this.start.row === g.start.row &&
                this.end.row === g.end.row &&
                this.start.column === g.start.column &&
                this.end.column === g.end.column
            );
        };
        this.toString = function () {
            return (
                "Range: [" +
                this.start.row +
                "/" +
                this.start.column +
                "] -> [" +
                this.end.row +
                "/" +
                this.end.column +
                "]"
            );
        };
        this.contains = function (g, c) {
            return 0 == this.compare(g, c);
        };
        this.compareRange = function (g) {
            var c,
                b = g.end;
            g = g.start;
            return (
                (c = this.compare(b.row, b.column)),
                1 == c
                    ? ((c = this.compare(g.row, g.column)),
                      1 == c ? 2 : 0 == c ? 1 : 0)
                    : -1 == c
                    ? -2
                    : ((c = this.compare(g.row, g.column)),
                      -1 == c ? -1 : 1 == c ? 42 : 0)
            );
        };
        this.comparePoint = function (g) {
            return this.compare(g.row, g.column);
        };
        this.containsRange = function (g) {
            return (
                0 == this.comparePoint(g.start) && 0 == this.comparePoint(g.end)
            );
        };
        this.intersects = function (g) {
            g = this.compareRange(g);
            return -1 == g || 0 == g || 1 == g;
        };
        this.isEnd = function (g, c) {
            return this.end.row == g && this.end.column == c;
        };
        this.isStart = function (g, c) {
            return this.start.row == g && this.start.column == c;
        };
        this.setStart = function (g, c) {
            "object" == typeof g
                ? ((this.start.column = g.column), (this.start.row = g.row))
                : ((this.start.row = g), (this.start.column = c));
        };
        this.setEnd = function (g, c) {
            "object" == typeof g
                ? ((this.end.column = g.column), (this.end.row = g.row))
                : ((this.end.row = g), (this.end.column = c));
        };
        this.inside = function (g, c) {
            return 0 == this.compare(g, c)
                ? this.isEnd(g, c) || this.isStart(g, c)
                    ? !1
                    : !0
                : !1;
        };
        this.insideStart = function (g, c) {
            return 0 == this.compare(g, c) ? (this.isEnd(g, c) ? !1 : !0) : !1;
        };
        this.insideEnd = function (g, c) {
            return 0 == this.compare(g, c)
                ? this.isStart(g, c)
                    ? !1
                    : !0
                : !1;
        };
        this.compare = function (g, c) {
            return this.isMultiLine() || g !== this.start.row
                ? g < this.start.row
                    ? -1
                    : g > this.end.row
                    ? 1
                    : this.start.row === g
                    ? c >= this.start.column
                        ? 0
                        : -1
                    : this.end.row === g
                    ? c <= this.end.column
                        ? 0
                        : 1
                    : 0
                : c < this.start.column
                ? -1
                : c > this.end.column
                ? 1
                : 0;
        };
        this.compareStart = function (g, c) {
            return this.start.row == g && this.start.column == c
                ? -1
                : this.compare(g, c);
        };
        this.compareEnd = function (g, c) {
            return this.end.row == g && this.end.column == c
                ? 1
                : this.compare(g, c);
        };
        this.compareInside = function (g, c) {
            return this.end.row == g && this.end.column == c
                ? 1
                : this.start.row == g && this.start.column == c
                ? -1
                : this.compare(g, c);
        };
        this.clipRows = function (g, c) {
            var b, a;
            this.end.row > c
                ? (a = { row: c + 1, column: 0 })
                : this.end.row < g && (a = { row: g, column: 0 });
            this.start.row > c
                ? (b = { row: c + 1, column: 0 })
                : this.start.row < g && (b = { row: g, column: 0 });
            return h.fromPoints(b || this.start, a || this.end);
        };
        this.extend = function (g, c) {
            var b,
                a,
                d = this.compare(g, c);
            if (0 == d) return this;
            -1 == d ? (a = { row: g, column: c }) : (b = { row: g, column: c });
            return h.fromPoints(a || this.start, b || this.end);
        };
        this.isEmpty = function () {
            return (
                this.start.row === this.end.row &&
                this.start.column === this.end.column
            );
        };
        this.isMultiLine = function () {
            return this.start.row !== this.end.row;
        };
        this.clone = function () {
            return h.fromPoints(this.start, this.end);
        };
        this.collapseRows = function () {
            return 0 == this.end.column
                ? new h(
                      this.start.row,
                      0,
                      Math.max(this.start.row, this.end.row - 1),
                      0
                  )
                : new h(this.start.row, 0, this.end.row, 0);
        };
        this.toScreenRange = function (g) {
            var c = g.documentToScreenPosition(this.start);
            g = g.documentToScreenPosition(this.end);
            return new h(c.row, c.column, g.row, g.column);
        };
        this.moveBy = function (g, c) {
            this.start.row += g;
            this.start.column += c;
            this.end.row += g;
            this.end.column += c;
        };
    }.call(h.prototype));
    h.fromPoints = function (g, c) {
        return new h(g.row, g.column, c.row, c.column);
    };
    h.comparePoints = function (g, c) {
        return g.row - c.row || g.column - c.column;
    };
    h.comparePoints = function (g, c) {
        return g.row - c.row || g.column - c.column;
    };
    q.Range = h;
});
ace.define(
    "ace/selection",
    "require exports module ace/lib/oop ace/lib/lang ace/lib/event_emitter ace/range".split(
        " "
    ),
    function (n, q, t) {
        var h = n("./lib/oop"),
            g = n("./lib/lang"),
            c = n("./lib/event_emitter").EventEmitter,
            b = n("./range").Range;
        n = function (a) {
            this.session = a;
            this.doc = a.getDocument();
            this.clearSelection();
            this.lead = this.selectionLead = this.doc.createAnchor(0, 0);
            this.anchor = this.selectionAnchor = this.doc.createAnchor(0, 0);
            var d = this;
            this.lead.on("change", function (a) {
                d._emit("changeCursor");
                d.$isEmpty || d._emit("changeSelection");
                !d.$keepDesiredColumnOnChange &&
                    a.old.column != a.value.column &&
                    (d.$desiredColumn = null);
            });
            this.selectionAnchor.on("change", function () {
                d.$isEmpty || d._emit("changeSelection");
            });
        };
        (function () {
            h.implement(this, c);
            this.isEmpty = function () {
                return (
                    this.$isEmpty ||
                    (this.anchor.row == this.lead.row &&
                        this.anchor.column == this.lead.column)
                );
            };
            this.isMultiLine = function () {
                return this.isEmpty() ? !1 : this.getRange().isMultiLine();
            };
            this.getCursor = function () {
                return this.lead.getPosition();
            };
            this.setSelectionAnchor = function (a, d) {
                this.anchor.setPosition(a, d);
                this.$isEmpty &&
                    ((this.$isEmpty = !1), this._emit("changeSelection"));
            };
            this.getSelectionAnchor = function () {
                return this.$isEmpty
                    ? this.getSelectionLead()
                    : this.anchor.getPosition();
            };
            this.getSelectionLead = function () {
                return this.lead.getPosition();
            };
            this.shiftSelection = function (a) {
                if (this.$isEmpty)
                    this.moveCursorTo(this.lead.row, this.lead.column + a);
                else {
                    var d = this.getSelectionAnchor(),
                        b = this.getSelectionLead(),
                        c = this.isBackwards();
                    (c && 0 === d.column) ||
                        this.setSelectionAnchor(d.row, d.column + a);
                    (c || 0 !== b.column) &&
                        this.$moveSelection(function () {
                            this.moveCursorTo(b.row, b.column + a);
                        });
                }
            };
            this.isBackwards = function () {
                var a = this.anchor,
                    d = this.lead;
                return a.row > d.row || (a.row == d.row && a.column > d.column);
            };
            this.getRange = function () {
                var a = this.anchor,
                    d = this.lead;
                return this.isEmpty()
                    ? b.fromPoints(d, d)
                    : this.isBackwards()
                    ? b.fromPoints(d, a)
                    : b.fromPoints(a, d);
            };
            this.clearSelection = function () {
                this.$isEmpty ||
                    ((this.$isEmpty = !0), this._emit("changeSelection"));
            };
            this.selectAll = function () {
                var a = this.doc.getLength() - 1;
                this.setSelectionAnchor(0, 0);
                this.moveCursorTo(a, this.doc.getLine(a).length);
            };
            this.setRange = this.setSelectionRange = function (a, d) {
                d
                    ? (this.setSelectionAnchor(a.end.row, a.end.column),
                      this.selectTo(a.start.row, a.start.column))
                    : (this.setSelectionAnchor(a.start.row, a.start.column),
                      this.selectTo(a.end.row, a.end.column));
                this.getRange().isEmpty() && (this.$isEmpty = !0);
                this.$desiredColumn = null;
            };
            this.$moveSelection = function (a) {
                var d = this.lead;
                this.$isEmpty && this.setSelectionAnchor(d.row, d.column);
                a.call(this);
            };
            this.selectTo = function (a, d) {
                this.$moveSelection(function () {
                    this.moveCursorTo(a, d);
                });
            };
            this.selectToPosition = function (a) {
                this.$moveSelection(function () {
                    this.moveCursorToPosition(a);
                });
            };
            this.moveTo = function (a, d) {
                this.clearSelection();
                this.moveCursorTo(a, d);
            };
            this.moveToPosition = function (a) {
                this.clearSelection();
                this.moveCursorToPosition(a);
            };
            this.selectUp = function () {
                this.$moveSelection(this.moveCursorUp);
            };
            this.selectDown = function () {
                this.$moveSelection(this.moveCursorDown);
            };
            this.selectRight = function () {
                this.$moveSelection(this.moveCursorRight);
            };
            this.selectLeft = function () {
                this.$moveSelection(this.moveCursorLeft);
            };
            this.selectLineStart = function () {
                this.$moveSelection(this.moveCursorLineStart);
            };
            this.selectLineEnd = function () {
                this.$moveSelection(this.moveCursorLineEnd);
            };
            this.selectFileEnd = function () {
                this.$moveSelection(this.moveCursorFileEnd);
            };
            this.selectFileStart = function () {
                this.$moveSelection(this.moveCursorFileStart);
            };
            this.selectWordRight = function () {
                this.$moveSelection(this.moveCursorWordRight);
            };
            this.selectWordLeft = function () {
                this.$moveSelection(this.moveCursorWordLeft);
            };
            this.getWordRange = function (a, d) {
                "undefined" == typeof d &&
                    ((d = a || this.lead), (a = d.row), (d = d.column));
                return this.session.getWordRange(a, d);
            };
            this.selectWord = function () {
                this.setSelectionRange(this.getWordRange());
            };
            this.selectAWord = function () {
                var a = this.getCursor(),
                    a = this.session.getAWordRange(a.row, a.column);
                this.setSelectionRange(a);
            };
            this.getLineRange = function (a, d) {
                a = "number" == typeof a ? a : this.lead.row;
                var e,
                    c = this.session.getFoldLine(a);
                return (
                    c ? ((a = c.start.row), (e = c.end.row)) : (e = a),
                    !0 === d
                        ? new b(a, 0, e, this.session.getLine(e).length)
                        : new b(a, 0, e + 1, 0)
                );
            };
            this.selectLine = function () {
                this.setSelectionRange(this.getLineRange());
            };
            this.moveCursorUp = function () {
                this.moveCursorBy(-1, 0);
            };
            this.moveCursorDown = function () {
                this.moveCursorBy(1, 0);
            };
            this.wouldMoveIntoSoftTab = function (a, d, b) {
                var e = a.column,
                    c = a.column + d;
                return (
                    0 > b && ((e = a.column - d), (c = a.column)),
                    this.session.isTabStop(a) &&
                        this.doc.getLine(a.row).slice(e, c).split(" ").length -
                            1 ==
                            d
                );
            };
            this.moveCursorLeft = function () {
                var a = this.lead.getPosition(),
                    d;
                (d = this.session.getFoldAt(a.row, a.column, -1))
                    ? this.moveCursorTo(d.start.row, d.start.column)
                    : 0 === a.column
                    ? 0 < a.row &&
                      this.moveCursorTo(
                          a.row - 1,
                          this.doc.getLine(a.row - 1).length
                      )
                    : ((d = this.session.getTabSize()),
                      this.wouldMoveIntoSoftTab(a, d, -1) &&
                      !this.session.getNavigateWithinSoftTabs()
                          ? this.moveCursorBy(0, -d)
                          : this.moveCursorBy(0, -1));
            };
            this.moveCursorRight = function () {
                var a = this.lead.getPosition();
                if ((a = this.session.getFoldAt(a.row, a.column, 1)))
                    this.moveCursorTo(a.end.row, a.end.column);
                else if (
                    this.lead.column == this.doc.getLine(this.lead.row).length
                )
                    this.lead.row < this.doc.getLength() - 1 &&
                        this.moveCursorTo(this.lead.row + 1, 0);
                else {
                    var d = this.session.getTabSize();
                    a = this.lead;
                    this.wouldMoveIntoSoftTab(a, d, 1) &&
                    !this.session.getNavigateWithinSoftTabs()
                        ? this.moveCursorBy(0, d)
                        : this.moveCursorBy(0, 1);
                }
            };
            this.moveCursorLineStart = function () {
                var a = this.lead.row,
                    d = this.lead.column,
                    b = this.session.documentToScreenRow(a, d),
                    b = this.session.screenToDocumentPosition(b, 0),
                    a = this.session
                        .getDisplayLine(a, null, b.row, b.column)
                        .match(/^\s*/);
                a[0].length != d &&
                    !this.session.$useEmacsStyleLineStart &&
                    (b.column += a[0].length);
                this.moveCursorToPosition(b);
            };
            this.moveCursorLineEnd = function () {
                var a = this.lead,
                    a = this.session.getDocumentLastRowColumnPosition(
                        a.row,
                        a.column
                    );
                if (this.lead.column == a.column) {
                    var d = this.session.getLine(a.row);
                    a.column == d.length &&
                        ((d = d.search(/\s+$/)), 0 < d && (a.column = d));
                }
                this.moveCursorTo(a.row, a.column);
            };
            this.moveCursorFileEnd = function () {
                var a = this.doc.getLength() - 1,
                    d = this.doc.getLine(a).length;
                this.moveCursorTo(a, d);
            };
            this.moveCursorFileStart = function () {
                this.moveCursorTo(0, 0);
            };
            this.moveCursorLongWordRight = function () {
                var a = this.lead.row,
                    d = this.lead.column,
                    b = this.doc.getLine(a),
                    c = b.substring(d);
                this.session.nonTokenRe.lastIndex = 0;
                this.session.tokenRe.lastIndex = 0;
                var f = this.session.getFoldAt(a, d, 1);
                f
                    ? this.moveCursorTo(f.end.row, f.end.column)
                    : (this.session.nonTokenRe.exec(c) &&
                          ((d += this.session.nonTokenRe.lastIndex),
                          (this.session.nonTokenRe.lastIndex = 0),
                          (c = b.substring(d))),
                      d >= b.length
                          ? (this.moveCursorTo(a, b.length),
                            this.moveCursorRight(),
                            a < this.doc.getLength() - 1 &&
                                this.moveCursorWordRight())
                          : (this.session.tokenRe.exec(c) &&
                                ((d += this.session.tokenRe.lastIndex),
                                (this.session.tokenRe.lastIndex = 0)),
                            this.moveCursorTo(a, d)));
            };
            this.moveCursorLongWordLeft = function () {
                var a = this.lead.row,
                    d = this.lead.column,
                    b;
                (b = this.session.getFoldAt(a, d, -1))
                    ? this.moveCursorTo(b.start.row, b.start.column)
                    : ((b = this.session.getFoldStringAt(a, d, -1)),
                      null == b && (b = this.doc.getLine(a).substring(0, d)),
                      (b = g.stringReverse(b)),
                      (this.session.nonTokenRe.lastIndex = 0),
                      (this.session.tokenRe.lastIndex = 0),
                      this.session.nonTokenRe.exec(b) &&
                          ((d -= this.session.nonTokenRe.lastIndex),
                          (b = b.slice(this.session.nonTokenRe.lastIndex)),
                          (this.session.nonTokenRe.lastIndex = 0)),
                      0 >= d
                          ? (this.moveCursorTo(a, 0),
                            this.moveCursorLeft(),
                            0 < a && this.moveCursorWordLeft())
                          : (this.session.tokenRe.exec(b) &&
                                ((d -= this.session.tokenRe.lastIndex),
                                (this.session.tokenRe.lastIndex = 0)),
                            this.moveCursorTo(a, d)));
            };
            this.$shortWordEndIndex = function (a) {
                var d = 0,
                    b,
                    c = /\s/,
                    f = this.session.tokenRe;
                f.lastIndex = 0;
                if (this.session.tokenRe.exec(a))
                    d = this.session.tokenRe.lastIndex;
                else {
                    for (; (b = a[d]) && c.test(b); ) d++;
                    if (1 > d)
                        for (f.lastIndex = 0; (b = a[d]) && !f.test(b); )
                            if (((f.lastIndex = 0), d++, c.test(b))) {
                                if (2 < d) {
                                    d--;
                                    break;
                                }
                                for (; (b = a[d]) && c.test(b); ) d++;
                                if (2 < d) break;
                            }
                }
                return (f.lastIndex = 0), d;
            };
            this.moveCursorShortWordRight = function () {
                var a = this.lead.row,
                    d = this.lead.column,
                    b = this.doc.getLine(a),
                    c = b.substring(d),
                    f = this.session.getFoldAt(a, d, 1);
                if (f) return this.moveCursorTo(f.end.row, f.end.column);
                if (d == b.length) {
                    d = this.doc.getLength();
                    do a++, (c = this.doc.getLine(a));
                    while (a < d && /^\s*$/.test(c));
                    /^\s+/.test(c) || (c = "");
                    d = 0;
                }
                c = this.$shortWordEndIndex(c);
                this.moveCursorTo(a, d + c);
            };
            this.moveCursorShortWordLeft = function () {
                var a = this.lead.row,
                    d = this.lead.column,
                    b;
                if ((b = this.session.getFoldAt(a, d, -1)))
                    return this.moveCursorTo(b.start.row, b.start.column);
                b = this.session.getLine(a).substring(0, d);
                if (0 === d) {
                    do a--, (b = this.doc.getLine(a));
                    while (0 < a && /^\s*$/.test(b));
                    d = b.length;
                    /\s+$/.test(b) || (b = "");
                }
                b = g.stringReverse(b);
                b = this.$shortWordEndIndex(b);
                return this.moveCursorTo(a, d - b);
            };
            this.moveCursorWordRight = function () {
                this.session.$selectLongWords
                    ? this.moveCursorLongWordRight()
                    : this.moveCursorShortWordRight();
            };
            this.moveCursorWordLeft = function () {
                this.session.$selectLongWords
                    ? this.moveCursorLongWordLeft()
                    : this.moveCursorShortWordLeft();
            };
            this.moveCursorBy = function (a, d) {
                var b = this.session.documentToScreenPosition(
                    this.lead.row,
                    this.lead.column
                );
                0 === d &&
                    (this.$desiredColumn
                        ? (b.column = this.$desiredColumn)
                        : (this.$desiredColumn = b.column));
                b = this.session.screenToDocumentPosition(b.row + a, b.column);
                0 !== a &&
                    0 === d &&
                    b.row === this.lead.row &&
                    b.column === this.lead.column &&
                    this.session.lineWidgets &&
                    this.session.lineWidgets[b.row] &&
                    (0 < b.row || 0 < a) &&
                    b.row++;
                this.moveCursorTo(b.row, b.column + d, 0 === d);
            };
            this.moveCursorToPosition = function (a) {
                this.moveCursorTo(a.row, a.column);
            };
            this.moveCursorTo = function (a, d, b) {
                var e = this.session.getFoldAt(a, d, 1);
                e && ((a = e.start.row), (d = e.start.column));
                this.$keepDesiredColumnOnChange = !0;
                this.lead.setPosition(a, d);
                this.$keepDesiredColumnOnChange = !1;
                b || (this.$desiredColumn = null);
            };
            this.moveCursorToScreen = function (a, d, b) {
                a = this.session.screenToDocumentPosition(a, d);
                this.moveCursorTo(a.row, a.column, b);
            };
            this.detach = function () {
                this.lead.detach();
                this.anchor.detach();
                this.session = this.doc = null;
            };
            this.fromOrientedRange = function (a) {
                this.setSelectionRange(a, a.cursor == a.start);
                this.$desiredColumn = a.desiredColumn || this.$desiredColumn;
            };
            this.toOrientedRange = function (a) {
                var d = this.getRange();
                return (
                    a
                        ? ((a.start.column = d.start.column),
                          (a.start.row = d.start.row),
                          (a.end.column = d.end.column),
                          (a.end.row = d.end.row))
                        : (a = d),
                    (a.cursor = this.isBackwards() ? a.start : a.end),
                    (a.desiredColumn = this.$desiredColumn),
                    a
                );
            };
            this.getRangeOfMovements = function (a) {
                var d = this.getCursor();
                try {
                    a(this);
                    var e = this.getCursor();
                    return b.fromPoints(d, e);
                } catch (m) {
                    return b.fromPoints(d, d);
                } finally {
                    this.moveCursorToPosition(d);
                }
            };
            this.toJSON = function () {
                if (this.rangeCount)
                    var a = this.ranges.map(function (a) {
                        var d = a.clone();
                        return (d.isBackwards = a.cursor == a.start), d;
                    });
                else
                    (a = this.getRange()), (a.isBackwards = this.isBackwards());
                return a;
            };
            this.fromJSON = function (a) {
                if (void 0 == a.start) {
                    if (this.rangeList) {
                        this.toSingleRange(a[0]);
                        for (var d = a.length; d--; ) {
                            var e = b.fromPoints(a[d].start, a[d].end);
                            a[d].isBackwards && (e.cursor = e.start);
                            this.addRange(e, !0);
                        }
                        return;
                    }
                    a = a[0];
                }
                this.rangeList && this.toSingleRange(a);
                this.setSelectionRange(a, a.isBackwards);
            };
            this.isEqual = function (a) {
                if (
                    (a.length || this.rangeCount) &&
                    a.length != this.rangeCount
                )
                    return !1;
                if (!a.length || !this.ranges)
                    return this.getRange().isEqual(a);
                for (var d = this.ranges.length; d--; )
                    if (!this.ranges[d].isEqual(a[d])) return !1;
                return !0;
            };
        }.call(n.prototype));
        q.Selection = n;
    }
);
ace.define(
    "ace/tokenizer",
    ["require", "exports", "module", "ace/config"],
    function (n, q, t) {
        var h = n("./config"),
            g = 2e3;
        n = function (c) {
            this.states = c;
            this.regExps = {};
            this.matchMappings = {};
            for (var b in this.states) {
                c = this.states[b];
                for (
                    var a = [],
                        d = 0,
                        e = (this.matchMappings[b] = { defaultToken: "text" }),
                        m = "g",
                        f = [],
                        k = 0;
                    k < c.length;
                    k++
                ) {
                    var l = c[k];
                    l.defaultToken && (e.defaultToken = l.defaultToken);
                    l.caseInsensitive && (m = "gi");
                    if (null != l.regex) {
                        l.regex instanceof RegExp &&
                            (l.regex = l.regex.toString().slice(1, -1));
                        var v = l.regex,
                            u =
                                new RegExp("(?:(" + v + ")|(.))").exec("a")
                                    .length - 2;
                        Array.isArray(l.token)
                            ? 1 == l.token.length || 1 == u
                                ? (l.token = l.token[0])
                                : u - 1 != l.token.length
                                ? (this.reportError(
                                      "number of classes and regexp groups doesn't match",
                                      { rule: l, groupCount: u - 1 }
                                  ),
                                  (l.token = l.token[0]))
                                : ((l.tokenArray = l.token),
                                  (l.token = null),
                                  (l.onMatch = this.$arrayTokens))
                            : "function" == typeof l.token &&
                              !l.onMatch &&
                              (1 < u
                                  ? (l.onMatch = this.$applyToken)
                                  : (l.onMatch = l.token));
                        1 < u &&
                            (/\\\d/.test(l.regex)
                                ? (v = l.regex.replace(/\\([0-9]+)/g, function (
                                      a,
                                      b
                                  ) {
                                      return "\\" + (parseInt(b, 10) + d + 1);
                                  }))
                                : ((u = 1),
                                  (v = this.removeCapturingGroups(l.regex))),
                            !l.splitRegex &&
                                "string" != typeof l.token &&
                                f.push(l));
                        e[d] = k;
                        d += u;
                        a.push(v);
                        l.onMatch || (l.onMatch = null);
                    }
                }
                a.length || ((e[0] = 0), a.push("$"));
                f.forEach(function (a) {
                    a.splitRegex = this.createSplitterRegexp(a.regex, m);
                }, this);
                this.regExps[b] = new RegExp("(" + a.join(")|(") + ")|($)", m);
            }
        };
        (function () {
            this.$setMaxTokenCount = function (c) {
                g = c | 0;
            };
            this.$applyToken = function (c) {
                var b = this.splitRegex.exec(c).slice(1),
                    a = this.token.apply(this, b);
                if ("string" == typeof a) return [{ type: a, value: c }];
                c = [];
                for (var d = 0, e = a.length; d < e; d++)
                    b[d] && (c[c.length] = { type: a[d], value: b[d] });
                return c;
            };
            this.$arrayTokens = function (c) {
                if (!c) return [];
                c = this.splitRegex.exec(c);
                if (!c) return "text";
                for (
                    var b = [], a = this.tokenArray, d = 0, e = a.length;
                    d < e;
                    d++
                )
                    c[d + 1] && (b[b.length] = { type: a[d], value: c[d + 1] });
                return b;
            };
            this.removeCapturingGroups = function (c) {
                return c.replace(
                    /\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g,
                    function (b, a) {
                        return a ? "(?:" : b;
                    }
                );
            };
            this.createSplitterRegexp = function (c, b) {
                if (-1 != c.indexOf("(?=")) {
                    var a = 0,
                        d = !1,
                        e = {};
                    c.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function (
                        b,
                        c,
                        k,
                        l,
                        v,
                        u
                    ) {
                        return (
                            d
                                ? (d = "]" != v)
                                : v
                                ? (d = !0)
                                : l
                                ? (a == e.stack &&
                                      ((e.end = u + 1), (e.stack = -1)),
                                  a--)
                                : k &&
                                  (a++,
                                  1 != k.length &&
                                      ((e.stack = a), (e.start = u))),
                            b
                        );
                    });
                    null != e.end &&
                        /^\)*$/.test(c.substr(e.end)) &&
                        (c = c.substring(0, e.start) + c.substr(e.end));
                }
                return (
                    "^" != c.charAt(0) && (c = "^" + c),
                    "$" != c.charAt(c.length - 1) && (c += "$"),
                    new RegExp(c, (b || "").replace("g", ""))
                );
            };
            this.getLineTokens = function (c, b) {
                if (b && "string" != typeof b) {
                    var a = b.slice(0);
                    b = a[0];
                    "#tmp" === b && (a.shift(), (b = a.shift()));
                } else a = [];
                var d = b || "start",
                    e = this.states[d];
                e || ((d = "start"), (e = this.states[d]));
                var m = this.matchMappings[d],
                    f = this.regExps[d];
                f.lastIndex = 0;
                for (
                    var k, l = [], v = 0, u = 0, r = { type: null, value: "" };
                    (k = f.exec(c));

                ) {
                    var p = m.defaultToken,
                        z = null,
                        h = k[0],
                        y = f.lastIndex;
                    if (y - h.length > v) {
                        var x = c.substring(v, y - h.length);
                        r.type == p
                            ? (r.value += x)
                            : (r.type && l.push(r),
                              (r = { type: p, value: x }));
                    }
                    for (x = 0; x < k.length - 2; x++)
                        if (void 0 !== k[x + 1]) {
                            z = e[m[x]];
                            z.onMatch
                                ? (p = z.onMatch(h, d, a, c))
                                : (p = z.token);
                            z.next &&
                                ("string" == typeof z.next
                                    ? (d = z.next)
                                    : (d = z.next(d, a)),
                                (e = this.states[d]),
                                e ||
                                    (this.reportError("state doesn't exist", d),
                                    (d = "start"),
                                    (e = this.states[d])),
                                (m = this.matchMappings[d]),
                                (v = y),
                                (f = this.regExps[d]),
                                (f.lastIndex = y));
                            z.consumeLineEnd && (v = y);
                            break;
                        }
                    if (h)
                        if ("string" == typeof p)
                            (z && !1 === z.merge) || r.type !== p
                                ? (r.type && l.push(r),
                                  (r = { type: p, value: h }))
                                : (r.value += h);
                        else if (p)
                            for (
                                r.type && l.push(r),
                                    r = { type: null, value: "" },
                                    x = 0;
                                x < p.length;
                                x++
                            )
                                l.push(p[x]);
                    if (v == c.length) break;
                    v = y;
                    if (u++ > g) {
                        for (
                            u > 2 * c.length &&
                            this.reportError(
                                "infinite loop with in ace tokenizer",
                                { startState: b, line: c }
                            );
                            v < c.length;

                        )
                            r.type && l.push(r),
                                (r = {
                                    value: c.substring(v, (v += 2e3)),
                                    type: "overflow",
                                });
                        d = "start";
                        a = [];
                        break;
                    }
                }
                return (
                    r.type && l.push(r),
                    1 < a.length && a[0] !== d && a.unshift("#tmp", d),
                    { tokens: l, state: a.length ? a : d }
                );
            };
            this.reportError = h.reportError;
        }.call(n.prototype));
        q.Tokenizer = n;
    }
);
ace.define(
    "ace/mode/text_highlight_rules",
    ["require", "exports", "module", "ace/lib/lang"],
    function (n, q, t) {
        var h = n("../lib/lang");
        n = function () {
            this.$rules = {
                start: [
                    { token: "empty_line", regex: "^$" },
                    { defaultToken: "text" },
                ],
            };
        };
        (function () {
            this.addRules = function (b, a) {
                if (a)
                    for (f in b) {
                        for (var d = b[f], e = 0; e < d.length; e++) {
                            var c = d[e];
                            if (c.next || c.onMatch)
                                "string" == typeof c.next &&
                                    0 !== c.next.indexOf(a) &&
                                    (c.next = a + c.next),
                                    c.nextState &&
                                        0 !== c.nextState.indexOf(a) &&
                                        (c.nextState = a + c.nextState);
                        }
                        this.$rules[a + f] = d;
                    }
                else for (var f in b) this.$rules[f] = b[f];
            };
            this.getRules = function () {
                return this.$rules;
            };
            this.embedRules = function (b, a, d, e, c) {
                b = "function" == typeof b ? new b().getRules() : b;
                if (e) for (var f = 0; f < e.length; f++) e[f] = a + e[f];
                else for (f in ((e = []), b)) e.push(a + f);
                this.addRules(b, a);
                if (d)
                    for (
                        c = Array.prototype[c ? "push" : "unshift"], f = 0;
                        f < e.length;
                        f++
                    )
                        c.apply(this.$rules[e[f]], h.deepCopy(d));
                this.$embeds || (this.$embeds = []);
                this.$embeds.push(a);
            };
            this.getEmbeds = function () {
                return this.$embeds;
            };
            var g = function (b, a) {
                    return (
                        ("start" != b || a.length) &&
                            a.unshift(this.nextState, b),
                        this.nextState
                    );
                },
                c = function (b, a) {
                    return a.shift(), a.shift() || "start";
                };
            this.normalizeRules = function () {
                function b(e) {
                    e = d[e];
                    e.processed = !0;
                    for (var m = 0; m < e.length; m++) {
                        var f = e[m],
                            k = null;
                        Array.isArray(f) && ((k = f), (f = {}));
                        !f.regex &&
                            f.start &&
                            ((f.regex = f.start),
                            f.next || (f.next = []),
                            f.next.push(
                                { defaultToken: f.token },
                                {
                                    token: f.token + ".end",
                                    regex: f.end || f.start,
                                    next: "pop",
                                }
                            ),
                            (f.token += ".start"),
                            (f.push = !0));
                        var l = f.next || f.push;
                        if (l && Array.isArray(l)) {
                            var v = f.stateName;
                            v ||
                                ((v = f.token),
                                "string" != typeof v && (v = v[0] || ""),
                                d[v] && (v += a++));
                            d[v] = l;
                            f.next = v;
                            b(v);
                        } else "pop" == l && (f.next = c);
                        f.push &&
                            ((f.nextState = f.next || f.push),
                            (f.next = g),
                            delete f.push);
                        if (f.rules)
                            for (var u in f.rules)
                                d[u]
                                    ? d[u].push &&
                                      d[u].push.apply(d[u], f.rules[u])
                                    : (d[u] = f.rules[u]);
                        (l = "string" == typeof f ? f : f.include) &&
                            (Array.isArray(l)
                                ? (k = l.map(function (a) {
                                      return d[a];
                                  }))
                                : (k = d[l]));
                        k &&
                            ((k = [m, 1].concat(k)),
                            f.noEscape &&
                                (k = k.filter(function (a) {
                                    return !a.next;
                                })),
                            e.splice.apply(e, k),
                            m--);
                        f.keywordMap &&
                            ((f.token = this.createKeywordMapper(
                                f.keywordMap,
                                f.defaultToken || "text",
                                f.caseInsensitive
                            )),
                            delete f.defaultToken);
                    }
                }
                var a = 0,
                    d = this.$rules;
                Object.keys(d).forEach(b, this);
            };
            this.createKeywordMapper = function (b, a, d, e) {
                var c = Object.create(null);
                return (
                    Object.keys(b).forEach(function (a) {
                        var f = b[a];
                        d && (f = f.toLowerCase());
                        for (var f = f.split(e || "|"), l = f.length; l--; )
                            c[f[l]] = a;
                    }),
                    Object.getPrototypeOf(c) && (c.__proto__ = null),
                    (this.$keywordList = Object.keys(c)),
                    (b = null),
                    d
                        ? function (d) {
                              return c[d.toLowerCase()] || a;
                          }
                        : function (d) {
                              return c[d] || a;
                          }
                );
            };
            this.getKeywords = function () {
                return this.$keywords;
            };
        }.call(n.prototype));
        q.TextHighlightRules = n;
    }
);
ace.define("ace/mode/behaviour", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    n = function () {
        this.$behaviours = {};
    };
    (function () {
        this.add = function (h, g, c) {
            switch (void 0) {
                case this.$behaviours:
                    this.$behaviours = {};
                case this.$behaviours[h]:
                    this.$behaviours[h] = {};
            }
            this.$behaviours[h][g] = c;
        };
        this.addBehaviours = function (h) {
            for (var g in h) for (var c in h[g]) this.add(g, c, h[g][c]);
        };
        this.remove = function (h) {
            this.$behaviours &&
                this.$behaviours[h] &&
                delete this.$behaviours[h];
        };
        this.inherit = function (h, g) {
            h =
                "function" == typeof h
                    ? new h().getBehaviours(g)
                    : h.getBehaviours(g);
            this.addBehaviours(h);
        };
        this.getBehaviours = function (h) {
            if (!h) return this.$behaviours;
            for (var g = {}, c = 0; c < h.length; c++)
                this.$behaviours[h[c]] && (g[h[c]] = this.$behaviours[h[c]]);
            return g;
        };
    }.call(n.prototype));
    q.Behaviour = n;
});
ace.define("ace/token_iterator", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    n = function (h, g, c) {
        this.$session = h;
        this.$row = g;
        this.$rowTokens = h.getTokens(g);
        this.$tokenIndex = (h = h.getTokenAt(g, c)) ? h.index : -1;
    };
    (function () {
        this.stepBackward = function () {
            for (--this.$tokenIndex; 0 > this.$tokenIndex; ) {
                --this.$row;
                if (0 > this.$row) return (this.$row = 0), null;
                this.$rowTokens = this.$session.getTokens(this.$row);
                this.$tokenIndex = this.$rowTokens.length - 1;
            }
            return this.$rowTokens[this.$tokenIndex];
        };
        this.stepForward = function () {
            this.$tokenIndex += 1;
            for (var h; this.$tokenIndex >= this.$rowTokens.length; ) {
                this.$row += 1;
                h || (h = this.$session.getLength());
                if (this.$row >= h) return (this.$row = h - 1), null;
                this.$rowTokens = this.$session.getTokens(this.$row);
                this.$tokenIndex = 0;
            }
            return this.$rowTokens[this.$tokenIndex];
        };
        this.getCurrentToken = function () {
            return this.$rowTokens[this.$tokenIndex];
        };
        this.getCurrentTokenRow = function () {
            return this.$row;
        };
        this.getCurrentTokenColumn = function () {
            var h = this.$rowTokens,
                g = this.$tokenIndex,
                c = h[g].start;
            if (void 0 !== c) return c;
            for (c = 0; 0 < g; ) --g, (c += h[g].value.length);
            return c;
        };
        this.getCurrentTokenPosition = function () {
            return { row: this.$row, column: this.getCurrentTokenColumn() };
        };
    }.call(n.prototype));
    q.TokenIterator = n;
});
ace.define(
    "ace/mode/behaviour/cstyle",
    "require exports module ace/lib/oop ace/mode/behaviour ace/token_iterator ace/lib/lang".split(
        " "
    ),
    function (n, q, t) {
        t = n("../../lib/oop");
        var h = n("../behaviour").Behaviour,
            g = n("../../token_iterator").TokenIterator,
            c = n("../../lib/lang"),
            b = ["text", "paren.rparen", "punctuation.operator"],
            a = ["text", "paren.rparen", "punctuation.operator", "comment"],
            d,
            e = {},
            m = { '"': '"', "'": "'" },
            f = function (a) {
                var b = -1;
                a.multiSelect &&
                    ((b = a.selection.index),
                    e.rangeCount != a.multiSelect.rangeCount &&
                        (e = { rangeCount: a.multiSelect.rangeCount }));
                if (e[b]) return (d = e[b]);
                d = e[b] = {
                    autoInsertedBrackets: 0,
                    autoInsertedRow: -1,
                    autoInsertedLineEnd: "",
                    maybeInsertedBrackets: 0,
                    maybeInsertedRow: -1,
                    maybeInsertedLineStart: "",
                    maybeInsertedLineEnd: "",
                };
            },
            k = function (a, d, b, p) {
                var e = a.end.row - a.start.row;
                return {
                    text: b + d + p,
                    selection: [
                        0,
                        a.start.column + 1,
                        e,
                        a.end.column + (e ? 0 : 1),
                    ],
                };
            },
            l = function (a) {
                this.add("braces", "insertion", function (b, e, p, m, v) {
                    b = p.getCursorPosition();
                    e = m.doc.getLine(b.row);
                    if ("{" == v) {
                        f(p);
                        v = p.getSelectionRange();
                        var y = m.doc.getTextRange(v);
                        if (
                            "" !== y &&
                            "{" !== y &&
                            p.getWrapBehavioursEnabled()
                        )
                            return k(v, y, "{", "}");
                        if (l.isSaneInsertion(p, m))
                            return /[\]\}\)]/.test(e[b.column]) ||
                                p.inMultiSelectMode ||
                                (a && a.braces)
                                ? (l.recordAutoInsert(p, m, "}"),
                                  { text: "{}", selection: [1, 1] })
                                : (l.recordMaybeInsert(p, m, "{"),
                                  { text: "{", selection: [1, 1] });
                    } else if ("}" == v) {
                        if (
                            (f(p),
                            (y = e.substring(b.column, b.column + 1)),
                            "}" == y &&
                                null !==
                                    m.$findOpeningBracket("}", {
                                        column: b.column + 1,
                                        row: b.row,
                                    }) &&
                                l.isAutoInsertedClosing(b, e, v))
                        )
                            return (
                                l.popAutoInsertedClosing(),
                                { text: "", selection: [1, 1] }
                            );
                    } else {
                        if ("\n" == v || "\r\n" == v) {
                            f(p);
                            p = "";
                            l.isMaybeInsertedClosing(b, e) &&
                                ((p = c.stringRepeat(
                                    "}",
                                    d.maybeInsertedBrackets
                                )),
                                l.clearMaybeInsertedClosing());
                            y = e.substring(b.column, b.column + 1);
                            if ("}" === y) {
                                b = m.findMatchingBracket(
                                    { row: b.row, column: b.column + 1 },
                                    "}"
                                );
                                if (!b) return null;
                                b = this.$getIndent(m.getLine(b.row));
                            } else {
                                if (!p) {
                                    l.clearMaybeInsertedClosing();
                                    return;
                                }
                                b = this.$getIndent(e);
                            }
                            m = b + m.getTabString();
                            return {
                                text: "\n" + m + "\n" + b + p,
                                selection: [1, m.length, 1, m.length],
                            };
                        }
                        l.clearMaybeInsertedClosing();
                    }
                });
                this.add("braces", "deletion", function (a, b, p, e, c) {
                    a = e.doc.getTextRange(c);
                    if (!c.isMultiLine() && "{" == a) {
                        f(p);
                        if (
                            "}" ==
                            e.doc
                                .getLine(c.start.row)
                                .substring(c.end.column, c.end.column + 1)
                        )
                            return c.end.column++, c;
                        d.maybeInsertedBrackets--;
                    }
                });
                this.add("parens", "insertion", function (a, d, b, e, c) {
                    if ("(" == c) {
                        f(b);
                        c = b.getSelectionRange();
                        a = e.doc.getTextRange(c);
                        if ("" !== a && b.getWrapBehavioursEnabled())
                            return k(c, a, "(", ")");
                        if (l.isSaneInsertion(b, e))
                            return (
                                l.recordAutoInsert(b, e, ")"),
                                { text: "()", selection: [1, 1] }
                            );
                    } else if (")" == c && (f(b), (b = b.getCursorPosition()), (a = e.doc.getLine(b.row)), ")" == a.substring(b.column, b.column + 1) && null !== e.$findOpeningBracket(")", { column: b.column + 1, row: b.row }) && l.isAutoInsertedClosing(b, a, c))) return l.popAutoInsertedClosing(), { text: "", selection: [1, 1] };
                });
                this.add("parens", "deletion", function (a, d, b, e, c) {
                    a = e.doc.getTextRange(c);
                    if (
                        !c.isMultiLine() &&
                        "(" == a &&
                        (f(b),
                        ")" ==
                            e.doc
                                .getLine(c.start.row)
                                .substring(
                                    c.start.column + 1,
                                    c.start.column + 2
                                ))
                    )
                        return c.end.column++, c;
                });
                this.add("brackets", "insertion", function (a, d, b, e, c) {
                    if ("[" == c) {
                        f(b);
                        c = b.getSelectionRange();
                        a = e.doc.getTextRange(c);
                        if ("" !== a && b.getWrapBehavioursEnabled())
                            return k(c, a, "[", "]");
                        if (l.isSaneInsertion(b, e))
                            return (
                                l.recordAutoInsert(b, e, "]"),
                                { text: "[]", selection: [1, 1] }
                            );
                    } else if ("]" == c && (f(b), (b = b.getCursorPosition()), (a = e.doc.getLine(b.row)), "]" == a.substring(b.column, b.column + 1) && null !== e.$findOpeningBracket("]", { column: b.column + 1, row: b.row }) && l.isAutoInsertedClosing(b, a, c))) return l.popAutoInsertedClosing(), { text: "", selection: [1, 1] };
                });
                this.add("brackets", "deletion", function (a, d, b, e, c) {
                    a = e.doc.getTextRange(c);
                    if (
                        !c.isMultiLine() &&
                        "[" == a &&
                        (f(b),
                        "]" ==
                            e.doc
                                .getLine(c.start.row)
                                .substring(
                                    c.start.column + 1,
                                    c.start.column + 2
                                ))
                    )
                        return c.end.column++, c;
                });
                this.add("string_dquotes", "insertion", function (
                    a,
                    d,
                    b,
                    e,
                    c
                ) {
                    a = e.$mode.$quotes || m;
                    if (
                        1 == c.length &&
                        a[c] &&
                        (!this.lineCommentStart ||
                            -1 == this.lineCommentStart.indexOf(c))
                    ) {
                        f(b);
                        d = b.getSelectionRange();
                        var p = e.doc.getTextRange(d);
                        if (
                            "" !== p &&
                            (1 != p.length || !a[p]) &&
                            b.getWrapBehavioursEnabled()
                        )
                            return k(d, p, c, c);
                        if (!p) {
                            d = b.getCursorPosition();
                            a = e.doc.getLine(d.row);
                            b = a.substring(d.column - 1, d.column);
                            a = a.substring(d.column, d.column + 1);
                            p = e.getTokenAt(d.row, d.column);
                            d = e.getTokenAt(d.row, d.column + 1);
                            if ("\\" == b && p && /escape/.test(p.type))
                                return null;
                            var p = p && /string|escape/.test(p.type),
                                l = !d || /string|escape/.test(d.type);
                            if (a == c)
                                (e = p !== l) &&
                                    /string\.end/.test(d.type) &&
                                    (e = !1);
                            else {
                                if ((p && !l) || (p && l)) return null;
                                d = e.$mode.tokenRe;
                                d.lastIndex = 0;
                                e = d.test(b);
                                d.lastIndex = 0;
                                b = d.test(b);
                                if (e || b || (a && !/[\s;,.})\]\\]/.test(a)))
                                    return null;
                                e = !0;
                            }
                            return { text: e ? c + c : "", selection: [1, 1] };
                        }
                    }
                });
                this.add("string_dquotes", "deletion", function (
                    a,
                    d,
                    b,
                    e,
                    c
                ) {
                    a = e.doc.getTextRange(c);
                    if (
                        !c.isMultiLine() &&
                        ('"' == a || "'" == a) &&
                        (f(b),
                        e.doc
                            .getLine(c.start.row)
                            .substring(
                                c.start.column + 1,
                                c.start.column + 2
                            ) == a)
                    )
                        return c.end.column++, c;
                });
            };
        l.isSaneInsertion = function (d, e) {
            d = d.getCursorPosition();
            var c = new g(e, d.row, d.column);
            return this.$matchTokenType(c.getCurrentToken() || "text", b) ||
                ((e = new g(e, d.row, d.column + 1)),
                this.$matchTokenType(e.getCurrentToken() || "text", b))
                ? (c.stepForward(),
                  c.getCurrentTokenRow() !== d.row ||
                      this.$matchTokenType(c.getCurrentToken() || "text", a))
                : !1;
        };
        l.$matchTokenType = function (a, d) {
            return -1 < d.indexOf(a.type || a);
        };
        l.recordAutoInsert = function (a, b, e) {
            a = a.getCursorPosition();
            b = b.doc.getLine(a.row);
            this.isAutoInsertedClosing(a, b, d.autoInsertedLineEnd[0]) ||
                (d.autoInsertedBrackets = 0);
            d.autoInsertedRow = a.row;
            d.autoInsertedLineEnd = e + b.substr(a.column);
            d.autoInsertedBrackets++;
        };
        l.recordMaybeInsert = function (a, b, e) {
            a = a.getCursorPosition();
            b = b.doc.getLine(a.row);
            this.isMaybeInsertedClosing(a, b) || (d.maybeInsertedBrackets = 0);
            d.maybeInsertedRow = a.row;
            d.maybeInsertedLineStart = b.substr(0, a.column) + e;
            d.maybeInsertedLineEnd = b.substr(a.column);
            d.maybeInsertedBrackets++;
        };
        l.isAutoInsertedClosing = function (a, b, e) {
            return (
                0 < d.autoInsertedBrackets &&
                a.row === d.autoInsertedRow &&
                e === d.autoInsertedLineEnd[0] &&
                b.substr(a.column) === d.autoInsertedLineEnd
            );
        };
        l.isMaybeInsertedClosing = function (a, b) {
            return (
                0 < d.maybeInsertedBrackets &&
                a.row === d.maybeInsertedRow &&
                b.substr(a.column) === d.maybeInsertedLineEnd &&
                b.substr(0, a.column) == d.maybeInsertedLineStart
            );
        };
        l.popAutoInsertedClosing = function () {
            d.autoInsertedLineEnd = d.autoInsertedLineEnd.substr(1);
            d.autoInsertedBrackets--;
        };
        l.clearMaybeInsertedClosing = function () {
            d && ((d.maybeInsertedBrackets = 0), (d.maybeInsertedRow = -1));
        };
        t.inherits(l, h);
        q.CstyleBehaviour = l;
    }
);
ace.define("ace/unicode", ["require", "exports", "module"], function (n, q, t) {
    q.packages = {};
    n = {
        L:
            "0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
        Ll:
            "0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",
        Lu:
            "0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",
        Lt: "01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",
        Lm:
            "02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",
        Lo:
            "01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",
        M:
            "0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",
        Mn:
            "0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",
        Mc:
            "0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",
        Me: "0488048906DE20DD-20E020E2-20E4A670-A672",
        N:
            "0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
        Nd:
            "0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",
        Nl: "16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",
        No:
            "00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",
        P:
            "0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",
        Pd:
            "002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",
        Ps:
            "0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",
        Pe:
            "0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",
        Pi: "00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",
        Pf: "00BB2019201D203A2E032E052E0A2E0D2E1D2E21",
        Pc: "005F203F20402054FE33FE34FE4D-FE4FFF3F",
        Po:
            "0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",
        S:
            "0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",
        Sm:
            "002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",
        Sc:
            "002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",
        Sk:
            "005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",
        So:
            "00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",
        Z: "002000A01680180E2000-200A20282029202F205F3000",
        Zs: "002000A01680180E2000-200A202F205F3000",
        Zl: "2028",
        Zp: "2029",
        C:
            "0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",
        Cc: "0000-001F007F-009F",
        Cf:
            "00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",
        Co: "E000-F8FF",
        Cs: "D800-DFFF",
        Cn:
            "03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF",
    };
    t = /\w{4}/g;
    for (var h in n) q.packages[h] = n[h].replace(t, "\\u$&");
});
ace.define(
    "ace/mode/text",
    "require exports module ace/tokenizer ace/mode/text_highlight_rules ace/mode/behaviour/cstyle ace/unicode ace/lib/lang ace/token_iterator ace/range".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../tokenizer").Tokenizer,
            g = n("./text_highlight_rules").TextHighlightRules,
            c = n("./behaviour/cstyle").CstyleBehaviour,
            b = n("../unicode"),
            a = n("../lib/lang"),
            d = n("../token_iterator").TokenIterator,
            e = n("../range").Range;
        n = function () {
            this.HighlightRules = g;
        };
        (function () {
            this.$defaultBehaviour = new c();
            this.tokenRe = new RegExp(
                "^[" +
                    b.packages.L +
                    b.packages.Mn +
                    b.packages.Mc +
                    b.packages.Nd +
                    b.packages.Pc +
                    "\\$_]+",
                "g"
            );
            this.nonTokenRe = new RegExp(
                "^(?:[^" +
                    b.packages.L +
                    b.packages.Mn +
                    b.packages.Mc +
                    b.packages.Nd +
                    b.packages.Pc +
                    "\\$_]|\\s])+",
                "g"
            );
            this.getTokenizer = function () {
                return (
                    this.$tokenizer ||
                        ((this.$highlightRules =
                            this.$highlightRules ||
                            new this.HighlightRules(this.$highlightRuleConfig)),
                        (this.$tokenizer = new h(
                            this.$highlightRules.getRules()
                        ))),
                    this.$tokenizer
                );
            };
            this.blockComment = this.lineCommentStart = "";
            this.toggleCommentLines = function (d, b, e, c) {
                function l(a) {
                    for (var d = e; d <= c; d++) a(m.getLine(d), d);
                }
                var m = b.doc,
                    f = !0,
                    p = !0,
                    k = Infinity,
                    g = b.getTabSize(),
                    y = !1;
                if (this.lineCommentStart) {
                    if (Array.isArray(this.lineCommentStart)) {
                        var x = this.lineCommentStart
                            .map(a.escapeRegExp)
                            .join("|");
                        var h = this.lineCommentStart[0];
                    } else
                        (x = a.escapeRegExp(this.lineCommentStart)),
                            (h = this.lineCommentStart);
                    x = new RegExp("^(\\s*)(?:" + x + ") ?");
                    y = b.getUseSoftTabs();
                    var n = function (a, d) {
                        var b = a.match(x);
                        if (b) {
                            var e = b[1].length,
                                p = b[0].length;
                            !t(a, e, p) && " " == b[0][p - 1] && p--;
                            m.removeInLine(d, e, p);
                        }
                    };
                    var q = h + " ";
                    d = function (a, d) {
                        if (!f || /\S/.test(a))
                            t(a, k, k)
                                ? m.insertInLine({ row: d, column: k }, q)
                                : m.insertInLine({ row: d, column: k }, h);
                    };
                    var B = function (a, d) {
                        return x.test(a);
                    };
                    var t = function (a, d, b) {
                        for (var e = 0; d-- && " " == a.charAt(d); ) e++;
                        if (0 != e % g) return !1;
                        for (e = 0; " " == a.charAt(b++); ) e++;
                        return 2 < g ? e % g != g - 1 : 0 == e % g;
                    };
                } else {
                    if (!this.blockComment) return !1;
                    h = this.blockComment.start;
                    var A = this.blockComment.end;
                    x = new RegExp("^(\\s*)(?:" + a.escapeRegExp(h) + ")");
                    var D = new RegExp("(?:" + a.escapeRegExp(A) + ")\\s*$");
                    d = function (a, d) {
                        B(a, d) ||
                            (f && !/\S/.test(a)) ||
                            (m.insertInLine({ row: d, column: a.length }, A),
                            m.insertInLine({ row: d, column: k }, h));
                    };
                    n = function (a, d) {
                        var b;
                        (b = a.match(D)) &&
                            m.removeInLine(d, a.length - b[0].length, a.length);
                        (b = a.match(x)) &&
                            m.removeInLine(d, b[1].length, b[0].length);
                    };
                    B = function (a, d) {
                        if (x.test(a)) return !0;
                        a = b.getTokens(d);
                        for (d = 0; d < a.length; d++)
                            if ("comment" === a[d].type) return !0;
                    };
                }
                var E = Infinity;
                l(function (a, d) {
                    var b = a.search(/\S/);
                    -1 !== b
                        ? (b < k && (k = b), p && !B(a, d) && (p = !1))
                        : E > a.length && (E = a.length);
                });
                Infinity == k && ((k = E), (f = !1), (p = !1));
                y && 0 != k % g && (k = Math.floor(k / g) * g);
                l(p ? n : d);
            };
            this.toggleBlockComment = function (a, b, c, l) {
                if ((a = this.blockComment)) {
                    !a.start && a[0] && (a = a[0]);
                    var m = new d(b, l.row, l.column);
                    var f = m.getCurrentToken();
                    var k = b.selection.toOrientedRange(),
                        p,
                        z;
                    if (f && /comment/.test(f.type)) {
                        for (var g, y; f && /comment/.test(f.type); ) {
                            f = f.value.indexOf(a.start);
                            if (-1 != f) {
                                c = m.getCurrentTokenRow();
                                m = m.getCurrentTokenColumn() + f;
                                g = new e(c, m, c, m + a.start.length);
                                break;
                            }
                            f = m.stepBackward();
                        }
                        m = new d(b, l.row, l.column);
                        for (
                            f = m.getCurrentToken();
                            f && /comment/.test(f.type);

                        ) {
                            f = f.value.indexOf(a.end);
                            if (-1 != f) {
                                c = m.getCurrentTokenRow();
                                m = m.getCurrentTokenColumn() + f;
                                y = new e(c, m, c, m + a.end.length);
                                break;
                            }
                            f = m.stepForward();
                        }
                        y && b.remove(y);
                        g &&
                            (b.remove(g),
                            (p = g.start.row),
                            (z = -a.start.length));
                    } else
                        (z = a.start.length),
                            (p = c.start.row),
                            b.insert(c.end, a.end),
                            b.insert(c.start, a.start);
                    k.start.row == p && (k.start.column += z);
                    k.end.row == p && (k.end.column += z);
                    b.selection.fromOrientedRange(k);
                }
            };
            this.getNextLineIndent = function (a, d, b) {
                return this.$getIndent(d);
            };
            this.checkOutdent = function (a, d, b) {
                return !1;
            };
            this.autoOutdent = function (a, d, b) {};
            this.$getIndent = function (a) {
                return a.match(/^\s*/)[0];
            };
            this.createWorker = function (a) {
                return null;
            };
            this.createModeDelegates = function (a) {
                this.$embeds = [];
                this.$modes = {};
                for (var d in a)
                    a[d] &&
                        (this.$embeds.push(d), (this.$modes[d] = new a[d]()));
                var b = "toggleBlockComment toggleCommentLines getNextLineIndent checkOutdent autoOutdent transformAction getCompletions".split(
                    " "
                );
                for (d = 0; d < b.length; d++)
                    (function (a) {
                        var e = b[d],
                            c = a[e];
                        a[b[d]] = function () {
                            return this.$delegator(e, arguments, c);
                        };
                    })(this);
            };
            this.$delegator = function (a, d, b) {
                var e = d[0];
                "string" != typeof e && (e = e[0]);
                for (var c = 0; c < this.$embeds.length; c++)
                    if (this.$modes[this.$embeds[c]]) {
                        var m = e.split(this.$embeds[c]);
                        if (!m[0] && m[1])
                            return (
                                (d[0] = m[1]),
                                (b = this.$modes[this.$embeds[c]]),
                                b[a].apply(b, d)
                            );
                    }
                a = b.apply(this, d);
                return b ? a : void 0;
            };
            this.transformAction = function (a, d, b, e, c) {
                if (this.$behaviour) {
                    var l = this.$behaviour.getBehaviours(),
                        m;
                    for (m in l)
                        if (l[m][d]) {
                            var p = l[m][d].apply(this, arguments);
                            if (p) return p;
                        }
                }
            };
            this.getKeywords = function (a) {
                if (!this.completionKeywords) {
                    var d = this.$tokenizer.rules;
                    var b = [];
                    for (z in d)
                        for (var e = d[z], c = 0, m = e.length; c < m; c++)
                            if ("string" == typeof e[c].token)
                                /keyword|support|storage/.test(e[c].token) &&
                                    b.push(e[c].regex);
                            else if ("object" == typeof e[c].token)
                                for (
                                    var r = 0, p = e[c].token.length;
                                    r < p;
                                    r++
                                )
                                    if (
                                        /keyword|support|storage/.test(
                                            e[c].token[r]
                                        )
                                    ) {
                                        var z = e[c].regex.match(/\(.+?\)/g)[r];
                                        b.push(z.substr(1, z.length - 2));
                                    }
                    this.completionKeywords = b;
                }
                return a
                    ? b.concat(this.$keywordList || [])
                    : this.$keywordList;
            };
            this.$createKeywordList = function () {
                return (
                    this.$highlightRules || this.getTokenizer(),
                    (this.$keywordList =
                        this.$highlightRules.$keywordList || [])
                );
            };
            this.getCompletions = function (a, d, b, e) {
                return (this.$keywordList || this.$createKeywordList()).map(
                    function (a) {
                        return { name: a, value: a, score: 0, meta: "keyword" };
                    }
                );
            };
            this.$id = "ace/mode/text";
        }.call(n.prototype));
        q.Mode = n;
    }
);
ace.define("ace/apply_delta", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    q.applyDelta = function (h, g, c) {
        c = g.start.row;
        var b = g.start.column,
            a = h[c] || "";
        switch (g.action) {
            case "insert":
                if (1 === g.lines.length)
                    h[c] = a.substring(0, b) + g.lines[0] + a.substring(b);
                else {
                    var d = [c, 1].concat(g.lines);
                    h.splice.apply(h, d);
                    h[c] = a.substring(0, b) + h[c];
                    h[c + g.lines.length - 1] += a.substring(b);
                }
                break;
            case "remove":
                (d = g.end.column),
                    (g = g.end.row),
                    c === g
                        ? (h[c] = a.substring(0, b) + a.substring(d))
                        : h.splice(
                              c,
                              g - c + 1,
                              a.substring(0, b) + h[g].substring(d)
                          );
        }
    };
});
ace.define(
    "ace/anchor",
    ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"],
    function (n, q, t) {
        var h = n("./lib/oop"),
            g = n("./lib/event_emitter").EventEmitter;
        n = q.Anchor = function (c, b, a) {
            this.$onChange = this.onChange.bind(this);
            this.attach(c);
            "undefined" == typeof a
                ? this.setPosition(b.row, b.column)
                : this.setPosition(b, a);
        };
        (function () {
            function c(b, a, d) {
                d = d ? b.column <= a.column : b.column < a.column;
                return b.row < a.row || (b.row == a.row && d);
            }
            h.implement(this, g);
            this.getPosition = function () {
                return this.$clipPositionToDocument(this.row, this.column);
            };
            this.getDocument = function () {
                return this.document;
            };
            this.$insertRight = !1;
            this.onChange = function (b) {
                if (
                    !(
                        (b.start.row == b.end.row && b.start.row != this.row) ||
                        b.start.row > this.row
                    )
                ) {
                    var a = { row: this.row, column: this.column };
                    var d = this.$insertRight,
                        e = "insert" == b.action,
                        m = (e ? 1 : -1) * (b.end.row - b.start.row),
                        f = (e ? 1 : -1) * (b.end.column - b.start.column),
                        k = b.start;
                    b = e ? k : b.end;
                    a = c(a, k, d)
                        ? { row: a.row, column: a.column }
                        : c(b, a, !d)
                        ? {
                              row: a.row + m,
                              column: a.column + (a.row == b.row ? f : 0),
                          }
                        : { row: k.row, column: k.column };
                    this.setPosition(a.row, a.column, !0);
                }
            };
            this.setPosition = function (b, a, d) {
                var e;
                d
                    ? (e = { row: b, column: a })
                    : (e = this.$clipPositionToDocument(b, a));
                if (this.row != e.row || this.column != e.column)
                    (b = { row: this.row, column: this.column }),
                        (this.row = e.row),
                        (this.column = e.column),
                        this._signal("change", { old: b, value: e });
            };
            this.detach = function () {
                this.document.removeEventListener("change", this.$onChange);
            };
            this.attach = function (b) {
                this.document = b || this.document;
                this.document.on("change", this.$onChange);
            };
            this.$clipPositionToDocument = function (b, a) {
                var d = {};
                return (
                    b >= this.document.getLength()
                        ? ((d.row = Math.max(0, this.document.getLength() - 1)),
                          (d.column = this.document.getLine(d.row).length))
                        : 0 > b
                        ? ((d.row = 0), (d.column = 0))
                        : ((d.row = b),
                          (d.column = Math.min(
                              this.document.getLine(d.row).length,
                              Math.max(0, a)
                          ))),
                    0 > a && (d.column = 0),
                    d
                );
            };
        }.call(n.prototype));
    }
);
ace.define(
    "ace/document",
    "require exports module ace/lib/oop ace/apply_delta ace/lib/event_emitter ace/range ace/anchor".split(
        " "
    ),
    function (n, q, t) {
        var h = n("./lib/oop"),
            g = n("./apply_delta").applyDelta,
            c = n("./lib/event_emitter").EventEmitter,
            b = n("./range").Range,
            a = n("./anchor").Anchor;
        n = function (a) {
            this.$lines = [""];
            0 === a.length
                ? (this.$lines = [""])
                : Array.isArray(a)
                ? this.insertMergedLines({ row: 0, column: 0 }, a)
                : this.insert({ row: 0, column: 0 }, a);
        };
        (function () {
            h.implement(this, c);
            this.setValue = function (a) {
                var d = this.getLength() - 1;
                this.remove(new b(0, 0, d, this.getLine(d).length));
                this.insert({ row: 0, column: 0 }, a);
            };
            this.getValue = function () {
                return this.getAllLines().join(this.getNewLineCharacter());
            };
            this.createAnchor = function (d, b) {
                return new a(this, d, b);
            };
            0 === "aaa".split(/a/).length
                ? (this.$split = function (a) {
                      return a.replace(/\r\n|\r/g, "\n").split("\n");
                  })
                : (this.$split = function (a) {
                      return a.split(/\r\n|\r|\n/);
                  });
            this.$detectNewLine = function (a) {
                this.$autoNewLine = (a = a.match(/^.*?(\r\n|\r|\n)/m))
                    ? a[1]
                    : "\n";
                this._signal("changeNewLineMode");
            };
            this.getNewLineCharacter = function () {
                switch (this.$newLineMode) {
                    case "windows":
                        return "\r\n";
                    case "unix":
                        return "\n";
                    default:
                        return this.$autoNewLine || "\n";
                }
            };
            this.$autoNewLine = "";
            this.$newLineMode = "auto";
            this.setNewLineMode = function (a) {
                this.$newLineMode !== a &&
                    ((this.$newLineMode = a),
                    this._signal("changeNewLineMode"));
            };
            this.getNewLineMode = function () {
                return this.$newLineMode;
            };
            this.isNewLine = function (a) {
                return "\r\n" == a || "\r" == a || "\n" == a;
            };
            this.getLine = function (a) {
                return this.$lines[a] || "";
            };
            this.getLines = function (a, b) {
                return this.$lines.slice(a, b + 1);
            };
            this.getAllLines = function () {
                return this.getLines(0, this.getLength());
            };
            this.getLength = function () {
                return this.$lines.length;
            };
            this.getTextRange = function (a) {
                return this.getLinesForRange(a).join(
                    this.getNewLineCharacter()
                );
            };
            this.getLinesForRange = function (a) {
                if (a.start.row === a.end.row)
                    var d = [
                        this.getLine(a.start.row).substring(
                            a.start.column,
                            a.end.column
                        ),
                    ];
                else {
                    d = this.getLines(a.start.row, a.end.row);
                    d[0] = (d[0] || "").substring(a.start.column);
                    var b = d.length - 1;
                    a.end.row - a.start.row == b &&
                        (d[b] = d[b].substring(0, a.end.column));
                }
                return d;
            };
            this.insertLines = function (a, b) {
                return (
                    console.warn(
                        "Use of document.insertLines is deprecated. Use the insertFullLines method instead."
                    ),
                    this.insertFullLines(a, b)
                );
            };
            this.removeLines = function (a, b) {
                return (
                    console.warn(
                        "Use of document.removeLines is deprecated. Use the removeFullLines method instead."
                    ),
                    this.removeFullLines(a, b)
                );
            };
            this.insertNewLine = function (a) {
                return (
                    console.warn(
                        "Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."
                    ),
                    this.insertMergedLines(a, ["", ""])
                );
            };
            this.insert = function (a, b) {
                return (
                    1 >= this.getLength() && this.$detectNewLine(b),
                    this.insertMergedLines(a, this.$split(b))
                );
            };
            this.insertInLine = function (a, b) {
                var d = this.clippedPos(a.row, a.column);
                a = this.pos(a.row, a.column + b.length);
                return (
                    this.applyDelta(
                        { start: d, end: a, action: "insert", lines: [b] },
                        !0
                    ),
                    this.clonePos(a)
                );
            };
            this.clippedPos = function (a, b) {
                var d = this.getLength();
                void 0 === a
                    ? (a = d)
                    : 0 > a
                    ? (a = 0)
                    : a >= d && ((a = d - 1), (b = void 0));
                d = this.getLine(a);
                return (
                    void 0 == b && (b = d.length),
                    (b = Math.min(Math.max(b, 0), d.length)),
                    { row: a, column: b }
                );
            };
            this.clonePos = function (a) {
                return { row: a.row, column: a.column };
            };
            this.pos = function (a, b) {
                return { row: a, column: b };
            };
            this.$clipPosition = function (a) {
                var d = this.getLength();
                return (
                    a.row >= d
                        ? ((a.row = Math.max(0, d - 1)),
                          (a.column = this.getLine(d - 1).length))
                        : ((a.row = Math.max(0, a.row)),
                          (a.column = Math.min(
                              Math.max(a.column, 0),
                              this.getLine(a.row).length
                          ))),
                    a
                );
            };
            this.insertFullLines = function (a, b) {
                a = Math.min(Math.max(a, 0), this.getLength());
                var d = 0;
                a < this.getLength()
                    ? ((b = b.concat([""])), (d = 0))
                    : ((b = [""].concat(b)), a--, (d = this.$lines[a].length));
                this.insertMergedLines({ row: a, column: d }, b);
            };
            this.insertMergedLines = function (a, b) {
                a = this.clippedPos(a.row, a.column);
                var d = {
                    row: a.row + b.length - 1,
                    column:
                        (1 == b.length ? a.column : 0) + b[b.length - 1].length,
                };
                return (
                    this.applyDelta({
                        start: a,
                        end: d,
                        action: "insert",
                        lines: b,
                    }),
                    this.clonePos(d)
                );
            };
            this.remove = function (a) {
                var d = this.clippedPos(a.start.row, a.start.column);
                a = this.clippedPos(a.end.row, a.end.column);
                return (
                    this.applyDelta({
                        start: d,
                        end: a,
                        action: "remove",
                        lines: this.getLinesForRange({ start: d, end: a }),
                    }),
                    this.clonePos(d)
                );
            };
            this.removeInLine = function (a, b, c) {
                b = this.clippedPos(a, b);
                a = this.clippedPos(a, c);
                return (
                    this.applyDelta(
                        {
                            start: b,
                            end: a,
                            action: "remove",
                            lines: this.getLinesForRange({ start: b, end: a }),
                        },
                        !0
                    ),
                    this.clonePos(b)
                );
            };
            this.removeFullLines = function (a, c) {
                a = Math.min(Math.max(0, a), this.getLength() - 1);
                c = Math.min(Math.max(0, c), this.getLength() - 1);
                var d = c == this.getLength() - 1 && 0 < a,
                    e = c < this.getLength() - 1,
                    k = d ? a - 1 : a,
                    d = d ? this.getLine(k).length : 0,
                    l = e ? c + 1 : c,
                    e = e ? 0 : this.getLine(l).length,
                    k = new b(k, d, l, e);
                a = this.$lines.slice(a, c + 1);
                return (
                    this.applyDelta({
                        start: k.start,
                        end: k.end,
                        action: "remove",
                        lines: this.getLinesForRange(k),
                    }),
                    a
                );
            };
            this.removeNewLine = function (a) {
                a < this.getLength() - 1 &&
                    0 <= a &&
                    this.applyDelta({
                        start: this.pos(a, this.getLine(a).length),
                        end: this.pos(a + 1, 0),
                        action: "remove",
                        lines: ["", ""],
                    });
            };
            this.replace = function (a, c) {
                a instanceof b || (a = b.fromPoints(a.start, a.end));
                if (0 === c.length && a.isEmpty()) return a.start;
                if (c == this.getTextRange(a)) return a.end;
                this.remove(a);
                var d;
                return c ? (d = this.insert(a.start, c)) : (d = a.start), d;
            };
            this.applyDeltas = function (a) {
                for (var d = 0; d < a.length; d++) this.applyDelta(a[d]);
            };
            this.revertDeltas = function (a) {
                for (var d = a.length - 1; 0 <= d; d--) this.revertDelta(a[d]);
            };
            this.applyDelta = function (a, c) {
                var d = "insert" == a.action;
                (d
                    ? 1 >= a.lines.length && !a.lines[0]
                    : !b.comparePoints(a.start, a.end)) ||
                    (d &&
                        2e4 < a.lines.length &&
                        this.$splitAndapplyLargeDelta(a, 2e4),
                    g(this.$lines, a, c),
                    this._signal("change", a));
            };
            this.$splitAndapplyLargeDelta = function (a, b) {
                var d = a.lines,
                    c = d.length,
                    e = a.start.row,
                    l = a.start.column,
                    g = 0;
                do {
                    var h = g;
                    var g = g + (b - 1),
                        r = d.slice(h, g);
                    if (g > c) {
                        a.lines = r;
                        a.start.row = e + h;
                        a.start.column = l;
                        break;
                    }
                    r.push("");
                    this.applyDelta(
                        {
                            start: this.pos(e + h, l),
                            end: this.pos(e + g, (l = 0)),
                            action: a.action,
                            lines: r,
                        },
                        !0
                    );
                } while (1);
            };
            this.revertDelta = function (a) {
                this.applyDelta({
                    start: this.clonePos(a.start),
                    end: this.clonePos(a.end),
                    action: "insert" == a.action ? "remove" : "insert",
                    lines: a.lines.slice(),
                });
            };
            this.indexToPosition = function (a, b) {
                var d = this.$lines || this.getAllLines(),
                    c = this.getNewLineCharacter().length;
                b = b || 0;
                for (var e = d.length; b < e; b++)
                    if (((a -= d[b].length + c), 0 > a))
                        return { row: b, column: a + d[b].length + c };
                return { row: e - 1, column: d[e - 1].length };
            };
            this.positionToIndex = function (a, b) {
                var d = this.$lines || this.getAllLines(),
                    c = this.getNewLineCharacter().length,
                    e = 0,
                    l = Math.min(a.row, d.length);
                for (b = b || 0; b < l; ++b) e += d[b].length + c;
                return e + a.column;
            };
        }.call(n.prototype));
        q.Document = n;
    }
);
ace.define(
    "ace/background_tokenizer",
    ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"],
    function (n, q, t) {
        var h = n("./lib/oop"),
            g = n("./lib/event_emitter").EventEmitter;
        n = function (c, b) {
            this.running = !1;
            this.lines = [];
            this.states = [];
            this.currentLine = 0;
            this.tokenizer = c;
            var a = this;
            this.$worker = function () {
                if (a.running) {
                    for (
                        var d = new Date(),
                            b = a.currentLine,
                            c = -1,
                            f = a.doc,
                            k = b;
                        a.lines[b];

                    )
                        b++;
                    var f = f.getLength(),
                        l = 0;
                    for (a.running = !1; b < f; ) {
                        a.$tokenizeRow(b);
                        c = b;
                        do b++;
                        while (a.lines[b]);
                        l++;
                        if (0 === l % 5 && 20 < new Date() - d) {
                            a.running = setTimeout(a.$worker, 20);
                            break;
                        }
                    }
                    a.currentLine = b;
                    -1 == c && (c = b);
                    k <= c && a.fireUpdateEvent(k, c);
                }
            };
        };
        (function () {
            h.implement(this, g);
            this.setTokenizer = function (c) {
                this.tokenizer = c;
                this.lines = [];
                this.states = [];
                this.start(0);
            };
            this.setDocument = function (c) {
                this.doc = c;
                this.lines = [];
                this.states = [];
                this.stop();
            };
            this.fireUpdateEvent = function (c, b) {
                this._signal("update", { data: { first: c, last: b } });
            };
            this.start = function (c) {
                this.currentLine = Math.min(
                    c || 0,
                    this.currentLine,
                    this.doc.getLength()
                );
                this.lines.splice(this.currentLine, this.lines.length);
                this.states.splice(this.currentLine, this.states.length);
                this.stop();
                this.running = setTimeout(this.$worker, 700);
            };
            this.scheduleStart = function () {
                this.running || (this.running = setTimeout(this.$worker, 700));
            };
            this.$updateOnChange = function (c) {
                var b = c.start.row,
                    a = c.end.row - b;
                0 === a
                    ? (this.lines[b] = null)
                    : "remove" == c.action
                    ? (this.lines.splice(b, a + 1, null),
                      this.states.splice(b, a + 1, null))
                    : ((c = Array(a + 1)),
                      c.unshift(b, 1),
                      this.lines.splice.apply(this.lines, c),
                      this.states.splice.apply(this.states, c));
                this.currentLine = Math.min(
                    b,
                    this.currentLine,
                    this.doc.getLength()
                );
                this.stop();
            };
            this.stop = function () {
                this.running && clearTimeout(this.running);
                this.running = !1;
            };
            this.getTokens = function (c) {
                return this.lines[c] || this.$tokenizeRow(c);
            };
            this.getState = function (c) {
                return (
                    this.currentLine == c && this.$tokenizeRow(c),
                    this.states[c] || "start"
                );
            };
            this.$tokenizeRow = function (c) {
                var b = this.doc.getLine(c),
                    b = this.tokenizer.getLineTokens(b, this.states[c - 1], c);
                return (
                    this.states[c] + "" != b.state + ""
                        ? ((this.states[c] = b.state),
                          (this.lines[c + 1] = null),
                          this.currentLine > c + 1 &&
                              (this.currentLine = c + 1))
                        : this.currentLine == c && (this.currentLine = c + 1),
                    (this.lines[c] = b.tokens)
                );
            };
        }.call(n.prototype));
        q.BackgroundTokenizer = n;
    }
);
ace.define(
    "ace/search_highlight",
    "require exports module ace/lib/lang ace/lib/oop ace/range".split(" "),
    function (n, q, t) {
        var h = n("./lib/lang");
        n("./lib/oop");
        var g = n("./range").Range;
        n = function (c, b, a) {
            this.setRegexp(c);
            this.clazz = b;
            this.type = a || "text";
        };
        (function () {
            this.MAX_RANGES = 500;
            this.setRegexp = function (c) {
                this.regExp + "" != c + "" &&
                    ((this.regExp = c), (this.cache = []));
            };
            this.update = function (c, b, a, d) {
                if (this.regExp)
                    for (var e = d.lastRow, m = d.firstRow; m <= e; m++) {
                        var f = this.cache[m];
                        null == f &&
                            ((f = h.getMatchOffsets(a.getLine(m), this.regExp)),
                            f.length > this.MAX_RANGES &&
                                (f = f.slice(0, this.MAX_RANGES)),
                            (f = f.map(function (a) {
                                return new g(
                                    m,
                                    a.offset,
                                    m,
                                    a.offset + a.length
                                );
                            })),
                            (this.cache[m] = f.length ? f : ""));
                        for (var k = f.length; k--; )
                            b.drawSingleLineMarker(
                                c,
                                f[k].toScreenRange(a),
                                this.clazz,
                                d
                            );
                    }
            };
        }.call(n.prototype));
        q.SearchHighlight = n;
    }
);
ace.define(
    "ace/edit_session/fold_line",
    ["require", "exports", "module", "ace/range"],
    function (n, q, t) {
        function h(c, b) {
            this.foldData = c;
            Array.isArray(b) ? (this.folds = b) : (b = this.folds = [b]);
            c = b[b.length - 1];
            this.range = new g(
                b[0].start.row,
                b[0].start.column,
                c.end.row,
                c.end.column
            );
            this.start = this.range.start;
            this.end = this.range.end;
            this.folds.forEach(function (a) {
                a.setFoldLine(this);
            }, this);
        }
        var g = n("../range").Range;
        (function () {
            this.shiftRow = function (c) {
                this.start.row += c;
                this.end.row += c;
                this.folds.forEach(function (b) {
                    b.start.row += c;
                    b.end.row += c;
                });
            };
            this.addFold = function (c) {
                if (c.sameRow) {
                    if (c.start.row < this.startRow || c.endRow > this.endRow)
                        throw Error(
                            "Can't add a fold to this FoldLine as it has no connection"
                        );
                    this.folds.push(c);
                    this.folds.sort(function (b, a) {
                        return -b.range.compareEnd(a.start.row, a.start.column);
                    });
                    0 < this.range.compareEnd(c.start.row, c.start.column)
                        ? ((this.end.row = c.end.row),
                          (this.end.column = c.end.column))
                        : 0 >
                              this.range.compareStart(
                                  c.end.row,
                                  c.end.column
                              ) &&
                          ((this.start.row = c.start.row),
                          (this.start.column = c.start.column));
                } else if (c.start.row == this.end.row)
                    this.folds.push(c),
                        (this.end.row = c.end.row),
                        (this.end.column = c.end.column);
                else {
                    if (c.end.row != this.start.row)
                        throw Error(
                            "Trying to add fold to FoldRow that doesn't have a matching row"
                        );
                    this.folds.unshift(c);
                    this.start.row = c.start.row;
                    this.start.column = c.start.column;
                }
                c.foldLine = this;
            };
            this.containsRow = function (c) {
                return c >= this.start.row && c <= this.end.row;
            };
            this.walk = function (c, b, a) {
                var d = 0,
                    e = this.folds;
                var m = !0;
                null == b && ((b = this.end.row), (a = this.end.column));
                for (var f = 0; f < e.length; f++) {
                    var k = e[f];
                    var l = k.range.compareStart(b, a);
                    if (-1 == l) {
                        c(null, b, a, d, m);
                        return;
                    }
                    m = c(null, k.start.row, k.start.column, d, m);
                    if (
                        (m =
                            !m &&
                            c(k.placeholder, k.start.row, k.start.column, d)) ||
                        0 === l
                    )
                        return;
                    m = !k.sameRow;
                    d = k.end.column;
                }
                c(null, b, a, d, m);
            };
            this.getNextFoldTo = function (c, b) {
                for (var a, d, e = 0; e < this.folds.length; e++) {
                    a = this.folds[e];
                    d = a.range.compareEnd(c, b);
                    if (-1 == d) return { fold: a, kind: "after" };
                    if (0 === d) return { fold: a, kind: "inside" };
                }
                return null;
            };
            this.addRemoveChars = function (c, b, a) {
                var d = this.getNextFoldTo(c, b);
                if (d) {
                    var e = d.fold;
                    if (
                        "inside" == d.kind &&
                        e.start.column != b &&
                        e.start.row != c
                    )
                        window.console && window.console.log(c, b, e);
                    else if (e.start.row == c) {
                        c = this.folds;
                        b = c.indexOf(e);
                        0 === b && (this.start.column += a);
                        for (b; b < c.length; b++) {
                            e = c[b];
                            e.start.column += a;
                            if (!e.sameRow) return;
                            e.end.column += a;
                        }
                        this.end.column += a;
                    }
                }
            };
            this.split = function (c, b) {
                var a = this.getNextFoldTo(c, b);
                if (!a || "inside" == a.kind) return null;
                b = this.folds;
                c = this.foldData;
                var a = b.indexOf(a.fold),
                    d = b[a - 1];
                this.end.row = d.end.row;
                this.end.column = d.end.column;
                b = b.splice(a, b.length - a);
                b = new h(c, b);
                return c.splice(c.indexOf(this) + 1, 0, b), b;
            };
            this.merge = function (c) {
                for (var b = c.folds, a = 0; a < b.length; a++)
                    this.addFold(b[a]);
                b = this.foldData;
                b.splice(b.indexOf(c), 1);
            };
            this.toString = function () {
                var c = [this.range.toString() + ": ["];
                return (
                    this.folds.forEach(function (b) {
                        c.push("  " + b.toString());
                    }),
                    c.push("]"),
                    c.join("\n")
                );
            };
            this.idxToPosition = function (c) {
                for (var b = 0, a = 0; a < this.folds.length; a++) {
                    var d = this.folds[a];
                    c -= d.start.column - b;
                    if (0 > c)
                        return { row: d.start.row, column: d.start.column + c };
                    c -= d.placeholder.length;
                    if (0 > c) return d.start;
                    b = d.end.column;
                }
                return { row: this.end.row, column: this.end.column + c };
            };
        }.call(h.prototype));
        q.FoldLine = h;
    }
);
ace.define(
    "ace/range_list",
    ["require", "exports", "module", "ace/range"],
    function (n, q, t) {
        var h = n("./range").Range.comparePoints;
        n = function () {
            this.ranges = [];
        };
        (function () {
            this.comparePoints = h;
            this.pointIndex = function (g, c, b) {
                var a = this.ranges;
                for (b = b || 0; b < a.length; b++) {
                    var d = a[b],
                        e = h(g, d.end);
                    if (!(0 < e))
                        return (
                            (g = h(g, d.start)),
                            0 === e
                                ? c && 0 !== g
                                    ? -b - 2
                                    : b
                                : 0 < g || (0 === g && !c)
                                ? b
                                : -b - 1
                        );
                }
                return -b - 1;
            };
            this.add = function (g) {
                var c = !g.isEmpty(),
                    b = this.pointIndex(g.start, c);
                0 > b && (b = -b - 1);
                c = this.pointIndex(g.end, c, b);
                return (
                    0 > c ? (c = -c - 1) : c++, this.ranges.splice(b, c - b, g)
                );
            };
            this.addList = function (g) {
                for (var c = [], b = g.length; b--; )
                    c.push.apply(c, this.add(g[b]));
                return c;
            };
            this.substractPoint = function (g) {
                g = this.pointIndex(g);
                if (0 <= g) return this.ranges.splice(g, 1);
            };
            this.merge = function () {
                for (
                    var g = [],
                        c = this.ranges,
                        c = c.sort(function (a, d) {
                            return h(a.start, d.start);
                        }),
                        b = c[0],
                        a,
                        d = 1;
                    d < c.length;
                    d++
                ) {
                    a = b;
                    var b = c[d],
                        e = h(a.end, b.start);
                    0 > e ||
                        (0 == e && !a.isEmpty() && !b.isEmpty()) ||
                        (0 > h(a.end, b.end) &&
                            ((a.end.row = b.end.row),
                            (a.end.column = b.end.column)),
                        c.splice(d, 1),
                        g.push(b),
                        (b = a),
                        d--);
                }
                return (this.ranges = c), g;
            };
            this.contains = function (g, c) {
                return 0 <= this.pointIndex({ row: g, column: c });
            };
            this.containsPoint = function (g) {
                return 0 <= this.pointIndex(g);
            };
            this.rangeAtPoint = function (g) {
                g = this.pointIndex(g);
                if (0 <= g) return this.ranges[g];
            };
            this.clipRows = function (g, c) {
                var b = this.ranges;
                if (b[0].start.row > c || b[b.length - 1].start.row < g)
                    return [];
                g = this.pointIndex({ row: g, column: 0 });
                0 > g && (g = -g - 1);
                c = this.pointIndex({ row: c, column: 0 }, g);
                0 > c && (c = -c - 1);
                for (var a = []; g < c; g++) a.push(b[g]);
                return a;
            };
            this.removeAll = function () {
                return this.ranges.splice(0, this.ranges.length);
            };
            this.attach = function (g) {
                this.session && this.detach();
                this.session = g;
                this.onChange = this.$onChange.bind(this);
                this.session.on("change", this.onChange);
            };
            this.detach = function () {
                this.session &&
                    (this.session.removeListener("change", this.onChange),
                    (this.session = null));
            };
            this.$onChange = function (g) {
                if ("insert" == g.action) {
                    var c = g.start;
                    var b = g.end;
                } else (b = g.start), (c = g.end);
                g = c.row;
                for (
                    var a = b.row - g,
                        d = -c.column + b.column,
                        e = this.ranges,
                        m = 0,
                        f = e.length;
                    m < f;
                    m++
                )
                    if (((b = e[m]), !(b.end.row < g))) {
                        if (b.start.row > g) break;
                        b.start.row == g &&
                            b.start.column >= c.column &&
                            (b.start.column != c.column ||
                                !this.$insertRight) &&
                            ((b.start.column += d), (b.start.row += a));
                        b.end.row == g &&
                            b.end.column >= c.column &&
                            (b.end.column != c.column || !this.$insertRight) &&
                            (b.end.column == c.column &&
                                0 < d &&
                                m < f - 1 &&
                                b.end.column > b.start.column &&
                                b.end.column == e[m + 1].start.column &&
                                (b.end.column -= d),
                            (b.end.column += d),
                            (b.end.row += a));
                    }
                if (0 != a && m < f)
                    for (; m < f; m++)
                        (b = e[m]), (b.start.row += a), (b.end.row += a);
            };
        }.call(n.prototype));
        q.RangeList = n;
    }
);
ace.define(
    "ace/edit_session/fold",
    "require exports module ace/range ace/range_list ace/lib/oop".split(" "),
    function (n, q, t) {
        function h(b, a) {
            b.row -= a.row;
            0 == b.row && (b.column -= a.column);
        }
        function g(b, a) {
            0 == b.row && (b.column += a.column);
            b.row += a.row;
        }
        n("../range");
        t = n("../range_list").RangeList;
        n = n("../lib/oop");
        var c = (q.Fold = function (b, a) {
            this.foldLine = null;
            this.placeholder = a;
            this.range = b;
            this.start = b.start;
            this.end = b.end;
            this.sameRow = b.start.row == b.end.row;
            this.subFolds = this.ranges = [];
        });
        n.inherits(c, t);
        (function () {
            this.toString = function () {
                return '"' + this.placeholder + '" ' + this.range.toString();
            };
            this.setFoldLine = function (b) {
                this.foldLine = b;
                this.subFolds.forEach(function (a) {
                    a.setFoldLine(b);
                });
            };
            this.clone = function () {
                var b = this.range.clone(),
                    a = new c(b, this.placeholder);
                return (
                    this.subFolds.forEach(function (d) {
                        a.subFolds.push(d.clone());
                    }),
                    (a.collapseChildren = this.collapseChildren),
                    a
                );
            };
            this.addSubFold = function (b) {
                if (!this.range.isEqual(b)) {
                    if (!this.range.containsRange(b))
                        throw Error(
                            "A fold can't intersect already existing fold" +
                                b.range +
                                this.range
                        );
                    var a = this.start;
                    h(b.start, a);
                    h(b.end, a);
                    for (
                        var d = b.start.row, c = b.start.column, a = 0, m = -1;
                        a < this.subFolds.length &&
                        ((m = this.subFolds[a].range.compare(d, c)), 1 == m);
                        a++
                    );
                    d = this.subFolds[a];
                    if (0 == m) return d.addSubFold(b);
                    for (
                        var d = b.range.end.row,
                            c = b.range.end.column,
                            f = a,
                            m = -1;
                        f < this.subFolds.length &&
                        ((m = this.subFolds[f].range.compare(d, c)), 1 == m);
                        f++
                    );
                    if (0 == m)
                        throw Error(
                            "A fold can't intersect already existing fold" +
                                b.range +
                                this.range
                        );
                    this.subFolds.splice(a, f - a, b);
                    return b.setFoldLine(this.foldLine), b;
                }
            };
            this.restoreRange = function (b) {
                var a = this.start;
                g(b.start, a);
                g(b.end, a);
            };
        }.call(c.prototype));
    }
);
ace.define(
    "ace/edit_session/folding",
    "require exports module ace/range ace/edit_session/fold_line ace/edit_session/fold ace/token_iterator".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../range").Range,
            g = n("./fold_line").FoldLine,
            c = n("./fold").Fold,
            b = n("../token_iterator").TokenIterator;
        q.Folding = function () {
            this.getFoldAt = function (a, d, b) {
                var c = this.getFoldLine(a);
                if (!c) return null;
                for (var c = c.folds, e = 0; e < c.length; e++) {
                    var k = c[e];
                    if (
                        !(
                            !k.range.contains(a, d) ||
                            (1 == b && k.range.isEnd(a, d)) ||
                            (-1 == b && k.range.isStart(a, d))
                        )
                    )
                        return k;
                }
            };
            this.getFoldsInRange = function (a) {
                var d = a.start,
                    b = a.end,
                    c = this.$foldData,
                    f = [];
                d.column += 1;
                --b.column;
                for (var k = 0; k < c.length; k++) {
                    var l = c[k].range.compareRange(a);
                    if (2 != l) {
                        if (-2 == l) break;
                        for (var g = c[k].folds, h = 0; h < g.length; h++) {
                            var r = g[h],
                                l = r.range.compareRange(a);
                            if (-2 == l) break;
                            if (2 != l) {
                                if (42 == l) break;
                                f.push(r);
                            }
                        }
                    }
                }
                return --d.column, (b.column += 1), f;
            };
            this.getFoldsInRangeList = function (a) {
                if (Array.isArray(a)) {
                    var d = [];
                    a.forEach(function (a) {
                        d = d.concat(this.getFoldsInRange(a));
                    }, this);
                } else d = this.getFoldsInRange(a);
                return d;
            };
            this.getAllFolds = function () {
                for (var a = [], d = this.$foldData, b = 0; b < d.length; b++)
                    for (var c = 0; c < d[b].folds.length; c++)
                        a.push(d[b].folds[c]);
                return a;
            };
            this.getFoldStringAt = function (a, d, b, c) {
                c = c || this.getFoldLine(a);
                if (!c) return null;
                for (
                    var e = { end: { column: 0 } }, m, l, g = 0;
                    g < c.folds.length;
                    g++
                ) {
                    l = c.folds[g];
                    var h = l.range.compareEnd(a, d);
                    if (-1 == h) {
                        m = this.getLine(l.start.row).substring(
                            e.end.column,
                            l.start.column
                        );
                        break;
                    }
                    if (0 === h) return null;
                    e = l;
                }
                return (
                    m ||
                        (m = this.getLine(l.start.row).substring(e.end.column)),
                    -1 == b
                        ? m.substring(0, d - e.end.column)
                        : 1 == b
                        ? m.substring(d - e.end.column)
                        : m
                );
            };
            this.getFoldLine = function (a, d) {
                var b = this.$foldData,
                    c = 0;
                d && (c = b.indexOf(d));
                -1 == c && (c = 0);
                for (c; c < b.length; c++) {
                    d = b[c];
                    if (d.start.row <= a && d.end.row >= a) return d;
                    if (d.end.row > a) break;
                }
                return null;
            };
            this.getNextFoldLine = function (a, d) {
                var b = this.$foldData,
                    c = 0;
                d && (c = b.indexOf(d));
                -1 == c && (c = 0);
                for (c; c < b.length; c++)
                    if (((d = b[c]), d.end.row >= a)) return d;
                return null;
            };
            this.getFoldedRowCount = function (a, d) {
                for (
                    var b = this.$foldData, c = d - a + 1, f = 0;
                    f < b.length;
                    f++
                ) {
                    var k = b[f],
                        l = k.end.row,
                        k = k.start.row;
                    if (l >= d) {
                        k < d && (k >= a ? (c -= d - k) : (c = 0));
                        break;
                    }
                    l >= a && (k >= a ? (c -= l - k) : (c -= l - a + 1));
                }
                return c;
            };
            this.$addFoldLine = function (a) {
                return (
                    this.$foldData.push(a),
                    this.$foldData.sort(function (a, b) {
                        return a.start.row - b.start.row;
                    }),
                    a
                );
            };
            this.addFold = function (a, d) {
                var b = this.$foldData,
                    m = !1,
                    f;
                a instanceof c
                    ? (f = a)
                    : ((f = new c(d, a)),
                      (f.collapseChildren = d.collapseChildren));
                this.$clipRangeToDocument(f.range);
                d = f.start.row;
                var k = f.start.column;
                a = f.end.row;
                var l = f.end.column;
                if (d < a || (d == a && k <= l - 2)) {
                    var h = this.getFoldAt(d, k, 1),
                        n = this.getFoldAt(a, l, -1);
                    if (h && n == h) return h.addSubFold(f);
                    h && !h.range.isStart(d, k) && this.removeFold(h);
                    n && !n.range.isEnd(a, l) && this.removeFold(n);
                    k = this.getFoldsInRange(f.range);
                    0 < k.length &&
                        (this.removeFolds(k),
                        k.forEach(function (a) {
                            f.addSubFold(a);
                        }));
                    for (k = 0; k < b.length; k++) {
                        var r = b[k];
                        if (a == r.start.row) {
                            r.addFold(f);
                            m = !0;
                            break;
                        }
                        if (d == r.end.row) {
                            r.addFold(f);
                            m = !0;
                            if (
                                !f.sameRow &&
                                (b = b[k + 1]) &&
                                b.start.row == a
                            ) {
                                r.merge(b);
                                break;
                            }
                            break;
                        }
                        if (a <= r.start.row) break;
                    }
                    return (
                        m || (r = this.$addFoldLine(new g(this.$foldData, f))),
                        this.$useWrapMode
                            ? this.$updateWrapData(r.start.row, r.start.row)
                            : this.$updateRowLengthCache(
                                  r.start.row,
                                  r.start.row
                              ),
                        (this.$modified = !0),
                        this._signal("changeFold", { data: f, action: "add" }),
                        f
                    );
                }
                throw Error("The range has to be at least 2 characters width");
            };
            this.addFolds = function (a) {
                a.forEach(function (a) {
                    this.addFold(a);
                }, this);
            };
            this.removeFold = function (a) {
                var b = a.foldLine,
                    c = b.start.row,
                    m = b.end.row,
                    f = this.$foldData,
                    k = b.folds;
                1 == k.length
                    ? f.splice(f.indexOf(b), 1)
                    : b.range.isEnd(a.end.row, a.end.column)
                    ? (k.pop(),
                      (b.end.row = k[k.length - 1].end.row),
                      (b.end.column = k[k.length - 1].end.column))
                    : b.range.isStart(a.start.row, a.start.column)
                    ? (k.shift(),
                      (b.start.row = k[0].start.row),
                      (b.start.column = k[0].start.column))
                    : a.sameRow
                    ? k.splice(k.indexOf(a), 1)
                    : ((b = b.split(a.start.row, a.start.column)),
                      (k = b.folds),
                      k.shift(),
                      (b.start.row = k[0].start.row),
                      (b.start.column = k[0].start.column));
                this.$updating ||
                    (this.$useWrapMode
                        ? this.$updateWrapData(c, m)
                        : this.$updateRowLengthCache(c, m));
                this.$modified = !0;
                this._signal("changeFold", { data: a, action: "remove" });
            };
            this.removeFolds = function (a) {
                for (var b = [], c = 0; c < a.length; c++) b.push(a[c]);
                b.forEach(function (a) {
                    this.removeFold(a);
                }, this);
                this.$modified = !0;
            };
            this.expandFold = function (a) {
                this.removeFold(a);
                a.subFolds.forEach(function (b) {
                    a.restoreRange(b);
                    this.addFold(b);
                }, this);
                0 < a.collapseChildren &&
                    this.foldAll(
                        a.start.row + 1,
                        a.end.row,
                        a.collapseChildren - 1
                    );
                a.subFolds = [];
            };
            this.expandFolds = function (a) {
                a.forEach(function (a) {
                    this.expandFold(a);
                }, this);
            };
            this.unfold = function (a, b) {
                var d;
                null == a
                    ? ((d = new h(0, 0, this.getLength(), 0)), (b = !0))
                    : "number" == typeof a
                    ? (d = new h(a, 0, a, this.getLine(a).length))
                    : "row" in a
                    ? (d = h.fromPoints(a, a))
                    : (d = a);
                a = this.getFoldsInRangeList(d);
                if (b) this.removeFolds(a);
                else
                    for (b = a; b.length; )
                        this.expandFolds(b), (b = this.getFoldsInRangeList(d));
                if (a.length) return a;
            };
            this.isRowFolded = function (a, b) {
                return !!this.getFoldLine(a, b);
            };
            this.getRowFoldEnd = function (a, b) {
                return (b = this.getFoldLine(a, b)) ? b.end.row : a;
            };
            this.getRowFoldStart = function (a, b) {
                return (b = this.getFoldLine(a, b)) ? b.start.row : a;
            };
            this.getFoldDisplayLine = function (a, b, c, m, f) {
                null == m && (m = a.start.row);
                null == f && (f = 0);
                null == b && (b = a.end.row);
                null == c && (c = this.getLine(b).length);
                var d = this.doc,
                    e = "";
                return (
                    a.walk(
                        function (a, b, c, p) {
                            if (!(b < m)) {
                                if (b == m) {
                                    if (c < f) return;
                                    p = Math.max(f, p);
                                }
                                null != a
                                    ? (e += a)
                                    : (e += d.getLine(b).substring(p, c));
                            }
                        },
                        b,
                        c
                    ),
                    e
                );
            };
            this.getDisplayLine = function (a, b, c, m) {
                var d = this.getFoldLine(a);
                if (!d) {
                    var e;
                    return (
                        (e = this.doc.getLine(a)),
                        e.substring(m || 0, b || e.length)
                    );
                }
                return this.getFoldDisplayLine(d, a, b, c, m);
            };
            this.$cloneFoldData = function () {
                var a = [];
                return (
                    (a = this.$foldData.map(function (b) {
                        b = b.folds.map(function (a) {
                            return a.clone();
                        });
                        return new g(a, b);
                    })),
                    a
                );
            };
            this.toggleFold = function (a) {
                var b = this.selection.getRange(),
                    c,
                    m;
                if (b.isEmpty()) {
                    a = b.start;
                    if ((c = this.getFoldAt(a.row, a.column))) {
                        this.expandFold(c);
                        return;
                    }
                    (m = this.findMatchingBracket(a))
                        ? 1 == b.comparePoint(m)
                            ? (b.end = m)
                            : ((b.start = m), b.start.column++, b.end.column--)
                        : (m = this.findMatchingBracket({
                              row: a.row,
                              column: a.column + 1,
                          }))
                        ? (1 == b.comparePoint(m) ? (b.end = m) : (b.start = m),
                          b.start.column++)
                        : (b = this.getCommentFoldRange(a.row, a.column) || b);
                } else {
                    m = this.getFoldsInRange(b);
                    if (a && m.length) {
                        this.expandFolds(m);
                        return;
                    }
                    1 == m.length && (c = m[0]);
                }
                c || (c = this.getFoldAt(b.start.row, b.start.column));
                if (c && c.range.toString() == b.toString()) this.expandFold(c);
                else {
                    c = "...";
                    if (!b.isMultiLine()) {
                        c = this.getTextRange(b);
                        if (4 > c.length) return;
                        c = c.trim().substring(0, 2) + "..";
                    }
                    this.addFold(c, b);
                }
            };
            this.getCommentFoldRange = function (a, d, c) {
                var e = new b(this, a, d),
                    f = e.getCurrentToken(),
                    k = f.type;
                if (f && /^comment|string/.test(k)) {
                    k = k.match(/comment|string/)[0];
                    "comment" == k && (k += "|doc-start");
                    var k = new RegExp(k),
                        l = new h();
                    if (1 != c) {
                        do f = e.stepBackward();
                        while (f && k.test(f.type));
                        e.stepForward();
                    }
                    l.start.row = e.getCurrentTokenRow();
                    l.start.column = e.getCurrentTokenColumn() + 2;
                    e = new b(this, a, d);
                    if (-1 != c) {
                        a = -1;
                        do
                            if (((f = e.stepForward()), -1 == a))
                                (d = this.getState(e.$row)),
                                    k.test(d) || (a = e.$row);
                            else if (e.$row > a) break;
                        while (f && k.test(f.type));
                        f = e.stepBackward();
                    } else f = e.getCurrentToken();
                    return (
                        (l.end.row = e.getCurrentTokenRow()),
                        (l.end.column =
                            e.getCurrentTokenColumn() + f.value.length - 2),
                        l
                    );
                }
            };
            this.foldAll = function (a, b, c) {
                void 0 == c && (c = 1e5);
                var d = this.foldWidgets;
                if (d) {
                    b = b || this.getLength();
                    for (var e = (a = a || 0); e < b; e++)
                        if (
                            (null == d[e] && (d[e] = this.getFoldWidget(e)),
                            "start" == d[e])
                        ) {
                            var k = this.getFoldWidgetRange(e);
                            if (
                                k &&
                                k.isMultiLine() &&
                                k.end.row <= b &&
                                k.start.row >= a
                            ) {
                                e = k.end.row;
                                try {
                                    var l = this.addFold("...", k);
                                    l && (l.collapseChildren = c);
                                } catch (v) {}
                            }
                        }
                }
            };
            this.$foldStyles = { manual: 1, markbegin: 1, markbeginend: 1 };
            this.$foldStyle = "markbegin";
            this.setFoldStyle = function (a) {
                if (!this.$foldStyles[a])
                    throw Error(
                        "invalid fold style: " +
                            a +
                            "[" +
                            Object.keys(this.$foldStyles).join(", ") +
                            "]"
                    );
                this.$foldStyle != a &&
                    ((this.$foldStyle = a),
                    "manual" == a && this.unfold(),
                    (a = this.$foldMode),
                    this.$setFolding(null),
                    this.$setFolding(a));
            };
            this.$setFolding = function (a) {
                this.$foldMode != a &&
                    ((this.$foldMode = a),
                    this.off("change", this.$updateFoldWidgets),
                    this.off(
                        "tokenizerUpdate",
                        this.$tokenizerUpdateFoldWidgets
                    ),
                    this._signal("changeAnnotation"),
                    a && "manual" != this.$foldStyle
                        ? ((this.foldWidgets = []),
                          (this.getFoldWidget = a.getFoldWidget.bind(
                              a,
                              this,
                              this.$foldStyle
                          )),
                          (this.getFoldWidgetRange = a.getFoldWidgetRange.bind(
                              a,
                              this,
                              this.$foldStyle
                          )),
                          (this.$updateFoldWidgets = this.updateFoldWidgets.bind(
                              this
                          )),
                          (this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(
                              this
                          )),
                          this.on("change", this.$updateFoldWidgets),
                          this.on(
                              "tokenizerUpdate",
                              this.$tokenizerUpdateFoldWidgets
                          ))
                        : (this.foldWidgets = null));
            };
            this.getParentFoldRangeData = function (a, b) {
                var d = this.foldWidgets;
                if (!d || (b && d[a])) return {};
                b = a - 1;
                for (var c; 0 <= b; ) {
                    var f = d[b];
                    null == f && (f = d[b] = this.getFoldWidget(b));
                    if ("start" == f) {
                        var k = this.getFoldWidgetRange(b);
                        c || (c = k);
                        if (k && k.end.row >= a) break;
                    }
                    b--;
                }
                return { range: -1 !== b && k, firstRange: c };
            };
            this.onFoldWidgetClick = function (a, b) {
                b = b.domEvent;
                this.$toggleFoldWidget(a, {
                    children: b.shiftKey,
                    all: b.ctrlKey || b.metaKey,
                    siblings: b.altKey,
                }) ||
                    ((a = b.target || b.srcElement) &&
                        /ace_fold-widget/.test(a.className) &&
                        (a.className += " ace_invalid"));
            };
            this.$toggleFoldWidget = function (a, b) {
                if (this.getFoldWidget) {
                    var d = this.getFoldWidget(a),
                        c = this.getLine(a),
                        d = "end" === d ? -1 : 1;
                    if ((d = this.getFoldAt(a, -1 === d ? 0 : c.length, d)))
                        return (
                            b.children || b.all
                                ? this.removeFold(d)
                                : this.expandFold(d),
                            d
                        );
                    if (
                        (c = this.getFoldWidgetRange(a, !0)) &&
                        !c.isMultiLine() &&
                        (d = this.getFoldAt(c.start.row, c.start.column, 1)) &&
                        c.isEqual(d.range)
                    )
                        return this.removeFold(d), d;
                    if (b.siblings) {
                        a = this.getParentFoldRangeData(a);
                        if (a.range) {
                            var f = a.range.start.row + 1;
                            var k = a.range.end.row;
                        }
                        this.foldAll(f, k, b.all ? 1e4 : 0);
                    } else
                        b.children
                            ? ((k = c ? c.end.row : this.getLength()),
                              this.foldAll(a + 1, k, b.all ? 1e4 : 0))
                            : c &&
                              (b.all && (c.collapseChildren = 1e4),
                              this.addFold("...", c));
                    return c;
                }
            };
            this.toggleFoldWidget = function (a) {
                var b = this.selection.getCursor().row,
                    b = this.getRowFoldStart(b);
                a = this.$toggleFoldWidget(b, {});
                !a &&
                    ((a = this.getParentFoldRangeData(b, !0)),
                    (a = a.range || a.firstRange)) &&
                    ((b = a.start.row),
                    (b = this.getFoldAt(b, this.getLine(b).length, 1))
                        ? this.removeFold(b)
                        : this.addFold("...", a));
            };
            this.updateFoldWidgets = function (a) {
                var b = a.start.row,
                    c = a.end.row - b;
                0 === c
                    ? (this.foldWidgets[b] = null)
                    : "remove" == a.action
                    ? this.foldWidgets.splice(b, c + 1, null)
                    : ((a = Array(c + 1)),
                      a.unshift(b, 1),
                      this.foldWidgets.splice.apply(this.foldWidgets, a));
            };
            this.tokenizerUpdateFoldWidgets = function (a) {
                a = a.data;
                a.first != a.last &&
                    this.foldWidgets.length > a.first &&
                    this.foldWidgets.splice(a.first, this.foldWidgets.length);
            };
        };
    }
);
ace.define(
    "ace/edit_session/bracket_match",
    ["require", "exports", "module", "ace/token_iterator", "ace/range"],
    function (n, q, t) {
        var h = n("../token_iterator").TokenIterator,
            g = n("../range").Range;
        q.BracketMatch = function () {
            this.findMatchingBracket = function (c, b) {
                if (0 == c.column) return null;
                b = b || this.getLine(c.row).charAt(c.column - 1);
                return "" == b
                    ? null
                    : (b = b.match(/([\(\[\{])|([\)\]\}])/))
                    ? b[1]
                        ? this.$findClosingBracket(b[1], c)
                        : this.$findOpeningBracket(b[2], c)
                    : null;
            };
            this.getBracketRange = function (c) {
                var b = this.getLine(c.row);
                var a = !0,
                    d = b.charAt(c.column - 1),
                    e = d && d.match(/([\(\[\{])|([\)\]\}])/);
                e ||
                    ((d = b.charAt(c.column)),
                    (c = { row: c.row, column: c.column + 1 }),
                    (e = d && d.match(/([\(\[\{])|([\)\]\}])/)),
                    (a = !1));
                if (!e) return null;
                if (e[1]) {
                    b = this.$findClosingBracket(e[1], c);
                    if (!b) return null;
                    c = g.fromPoints(c, b);
                    a || (c.end.column++, c.start.column--);
                    c.cursor = c.end;
                } else {
                    b = this.$findOpeningBracket(e[2], c);
                    if (!b) return null;
                    c = g.fromPoints(b, c);
                    a || (c.start.column++, c.end.column--);
                    c.cursor = c.start;
                }
                return c;
            };
            this.$brackets = {
                ")": "(",
                "(": ")",
                "]": "[",
                "[": "]",
                "{": "}",
                "}": "{",
            };
            this.$findOpeningBracket = function (c, b, a) {
                var d = this.$brackets[c],
                    e = 1,
                    m = new h(this, b.row, b.column),
                    f = m.getCurrentToken();
                f || (f = m.stepForward());
                if (f) {
                    a ||
                        (a = new RegExp(
                            "(\\.?" +
                                f.type
                                    .replace(".", "\\.")
                                    .replace("rparen", ".paren")
                                    .replace(
                                        /\b(?:end)\b/,
                                        "(?:start|begin|end)"
                                    ) +
                                ")+"
                        ));
                    b = b.column - m.getCurrentTokenColumn() - 2;
                    for (f = f.value; ; ) {
                        for (; 0 <= b; ) {
                            var k = f.charAt(b);
                            if (k == d) {
                                if ((--e, 0 == e))
                                    return {
                                        row: m.getCurrentTokenRow(),
                                        column: b + m.getCurrentTokenColumn(),
                                    };
                            } else k == c && (e += 1);
                            --b;
                        }
                        do f = m.stepBackward();
                        while (f && !a.test(f.type));
                        if (null == f) break;
                        f = f.value;
                        b = f.length - 1;
                    }
                    return null;
                }
            };
            this.$findClosingBracket = function (c, b, a) {
                var d = this.$brackets[c],
                    e = 1,
                    m = new h(this, b.row, b.column),
                    f = m.getCurrentToken();
                f || (f = m.stepForward());
                if (f) {
                    a ||
                        (a = new RegExp(
                            "(\\.?" +
                                f.type
                                    .replace(".", "\\.")
                                    .replace("lparen", ".paren")
                                    .replace(
                                        /\b(?:start|begin)\b/,
                                        "(?:start|begin|end)"
                                    ) +
                                ")+"
                        ));
                    for (b = b.column - m.getCurrentTokenColumn(); ; ) {
                        for (var f = f.value, k = f.length; b < k; ) {
                            var l = f.charAt(b);
                            if (l == d) {
                                if ((--e, 0 == e))
                                    return {
                                        row: m.getCurrentTokenRow(),
                                        column: b + m.getCurrentTokenColumn(),
                                    };
                            } else l == c && (e += 1);
                            b += 1;
                        }
                        do f = m.stepForward();
                        while (f && !a.test(f.type));
                        if (null == f) break;
                        b = 0;
                    }
                    return null;
                }
            };
        };
    }
);
ace.define(
    "ace/edit_session",
    "require exports module ace/lib/oop ace/lib/lang ace/config ace/lib/event_emitter ace/selection ace/mode/text ace/range ace/document ace/background_tokenizer ace/search_highlight ace/edit_session/folding ace/edit_session/bracket_match".split(
        " "
    ),
    function (n, q, t) {
        var h = n("./lib/oop"),
            g = n("./lib/lang"),
            c = n("./config"),
            b = n("./lib/event_emitter").EventEmitter,
            a = n("./selection").Selection,
            d = n("./mode/text").Mode,
            e = n("./range").Range,
            m = n("./document").Document,
            f = n("./background_tokenizer").BackgroundTokenizer,
            k = n("./search_highlight").SearchHighlight,
            l = function (b, d) {
                this.$breakpoints = [];
                this.$decorations = [];
                this.$frontMarkers = {};
                this.$backMarkers = {};
                this.$markerId = 1;
                this.$undoSelect = !0;
                this.$foldData = [];
                this.id = "session" + ++l.$uid;
                this.$foldData.toString = function () {
                    return this.join("\n");
                };
                this.on("changeFold", this.onChangeFold.bind(this));
                this.$onChange = this.onChange.bind(this);
                ("object" == typeof b && b.getLine) || (b = new m(b));
                this.setDocument(b);
                this.selection = new a(this);
                c.resetOptions(this);
                this.setMode(d);
                c._signal("session", this);
            };
        l.$uid = 0;
        (function () {
            function a(a) {
                return 4352 > a
                    ? !1
                    : (4352 <= a && 4447 >= a) ||
                          (4515 <= a && 4519 >= a) ||
                          (4602 <= a && 4607 >= a) ||
                          (9001 <= a && 9002 >= a) ||
                          (11904 <= a && 11929 >= a) ||
                          (11931 <= a && 12019 >= a) ||
                          (12032 <= a && 12245 >= a) ||
                          (12272 <= a && 12283 >= a) ||
                          (12288 <= a && 12350 >= a) ||
                          (12353 <= a && 12438 >= a) ||
                          (12441 <= a && 12543 >= a) ||
                          (12549 <= a && 12589 >= a) ||
                          (12593 <= a && 12686 >= a) ||
                          (12688 <= a && 12730 >= a) ||
                          (12736 <= a && 12771 >= a) ||
                          (12784 <= a && 12830 >= a) ||
                          (12832 <= a && 12871 >= a) ||
                          (12880 <= a && 13054 >= a) ||
                          (13056 <= a && 19903 >= a) ||
                          (19968 <= a && 42124 >= a) ||
                          (42128 <= a && 42182 >= a) ||
                          (43360 <= a && 43388 >= a) ||
                          (44032 <= a && 55203 >= a) ||
                          (55216 <= a && 55238 >= a) ||
                          (55243 <= a && 55291 >= a) ||
                          (63744 <= a && 64255 >= a) ||
                          (65040 <= a && 65049 >= a) ||
                          (65072 <= a && 65106 >= a) ||
                          (65108 <= a && 65126 >= a) ||
                          (65128 <= a && 65131 >= a) ||
                          (65281 <= a && 65376 >= a) ||
                          (65504 <= a && 65510 >= a);
            }
            h.implement(this, b);
            this.setDocument = function (a) {
                this.doc && this.doc.removeListener("change", this.$onChange);
                this.doc = a;
                a.on("change", this.$onChange);
                this.bgTokenizer &&
                    this.bgTokenizer.setDocument(this.getDocument());
                this.resetCaches();
            };
            this.getDocument = function () {
                return this.doc;
            };
            this.$resetRowCache = function (a) {
                if (a) {
                    var b = this.$docRowCache.length;
                    a = this.$getRowCacheIndex(this.$docRowCache, a) + 1;
                    b > a &&
                        (this.$docRowCache.splice(a, b),
                        this.$screenRowCache.splice(a, b));
                } else (this.$docRowCache = []), (this.$screenRowCache = []);
            };
            this.$getRowCacheIndex = function (a, b) {
                for (var d = 0, c = a.length - 1; d <= c; ) {
                    var p = (d + c) >> 1,
                        e = a[p];
                    if (b > e) d = p + 1;
                    else {
                        if (!(b < e)) return p;
                        c = p - 1;
                    }
                }
                return d - 1;
            };
            this.resetCaches = function () {
                this.$modified = !0;
                this.$wrapData = [];
                this.$rowLengthCache = [];
                this.$resetRowCache(0);
                this.bgTokenizer && this.bgTokenizer.start(0);
            };
            this.onChangeFold = function (a) {
                this.$resetRowCache(a.data.start.row);
            };
            this.onChange = function (a) {
                this.$modified = !0;
                this.$resetRowCache(a.start.row);
                var b = this.$updateInternalDataOnChange(a);
                !this.$fromUndo &&
                    this.$undoManager &&
                    !a.ignore &&
                    (this.$deltasDoc.push(a),
                    b &&
                        0 != b.length &&
                        this.$deltasFold.push({
                            action: "removeFolds",
                            folds: b,
                        }),
                    this.$informUndoManager.schedule());
                this.bgTokenizer && this.bgTokenizer.$updateOnChange(a);
                this._signal("change", a);
            };
            this.setValue = function (a) {
                this.doc.setValue(a);
                this.selection.moveTo(0, 0);
                this.$resetRowCache(0);
                this.$deltas = [];
                this.$deltasDoc = [];
                this.$deltasFold = [];
                this.setUndoManager(this.$undoManager);
                this.getUndoManager().reset();
            };
            this.getValue = this.toString = function () {
                return this.doc.getValue();
            };
            this.getSelection = function () {
                return this.selection;
            };
            this.getState = function (a) {
                return this.bgTokenizer.getState(a);
            };
            this.getTokens = function (a) {
                return this.bgTokenizer.getTokens(a);
            };
            this.getTokenAt = function (a, b) {
                var d = this.bgTokenizer.getTokens(a),
                    c,
                    p = 0;
                if (null == b) (e = d.length - 1), (p = this.getLine(a).length);
                else
                    for (
                        var e = 0;
                        e < d.length && !((p += d[e].value.length), p >= b);
                        e++
                    );
                return (
                    (c = d[e]),
                    c
                        ? ((c.index = e), (c.start = p - c.value.length), c)
                        : null
                );
            };
            this.setUndoManager = function (a) {
                this.$undoManager = a;
                this.$deltas = [];
                this.$deltasDoc = [];
                this.$deltasFold = [];
                this.$informUndoManager && this.$informUndoManager.cancel();
                if (a) {
                    var b = this;
                    this.$syncInformUndoManager = function () {
                        b.$informUndoManager.cancel();
                        b.$deltasFold.length &&
                            (b.$deltas.push({
                                group: "fold",
                                deltas: b.$deltasFold,
                            }),
                            (b.$deltasFold = []));
                        b.$deltasDoc.length &&
                            (b.$deltas.push({
                                group: "doc",
                                deltas: b.$deltasDoc,
                            }),
                            (b.$deltasDoc = []));
                        0 < b.$deltas.length &&
                            a.execute({
                                action: "aceupdate",
                                args: [b.$deltas, b],
                                merge: b.mergeUndoDeltas,
                            });
                        b.mergeUndoDeltas = !1;
                        b.$deltas = [];
                    };
                    this.$informUndoManager = g.delayedCall(
                        this.$syncInformUndoManager
                    );
                }
            };
            this.markUndoGroup = function () {
                this.$syncInformUndoManager && this.$syncInformUndoManager();
            };
            this.$defaultUndoManager = {
                undo: function () {},
                redo: function () {},
                reset: function () {},
            };
            this.getUndoManager = function () {
                return this.$undoManager || this.$defaultUndoManager;
            };
            this.getTabString = function () {
                return this.getUseSoftTabs()
                    ? g.stringRepeat(" ", this.getTabSize())
                    : "\t";
            };
            this.setUseSoftTabs = function (a) {
                this.setOption("useSoftTabs", a);
            };
            this.getUseSoftTabs = function () {
                return this.$useSoftTabs && !this.$mode.$indentWithTabs;
            };
            this.setTabSize = function (a) {
                this.setOption("tabSize", a);
            };
            this.getTabSize = function () {
                return this.$tabSize;
            };
            this.isTabStop = function (a) {
                return this.$useSoftTabs && 0 === a.column % this.$tabSize;
            };
            this.setNavigateWithinSoftTabs = function (a) {
                this.setOption("navigateWithinSoftTabs", a);
            };
            this.getNavigateWithinSoftTabs = function () {
                return this.$navigateWithinSoftTabs;
            };
            this.$overwrite = !1;
            this.setOverwrite = function (a) {
                this.setOption("overwrite", a);
            };
            this.getOverwrite = function () {
                return this.$overwrite;
            };
            this.toggleOverwrite = function () {
                this.setOverwrite(!this.$overwrite);
            };
            this.addGutterDecoration = function (a, b) {
                this.$decorations[a] || (this.$decorations[a] = "");
                this.$decorations[a] += " " + b;
                this._signal("changeBreakpoint", {});
            };
            this.removeGutterDecoration = function (a, b) {
                this.$decorations[a] = (this.$decorations[a] || "").replace(
                    " " + b,
                    ""
                );
                this._signal("changeBreakpoint", {});
            };
            this.getBreakpoints = function () {
                return this.$breakpoints;
            };
            this.setBreakpoints = function (a) {
                this.$breakpoints = [];
                for (var b = 0; b < a.length; b++)
                    this.$breakpoints[a[b]] = "ace_breakpoint";
                this._signal("changeBreakpoint", {});
            };
            this.clearBreakpoints = function () {
                this.$breakpoints = [];
                this._signal("changeBreakpoint", {});
            };
            this.setBreakpoint = function (a, b) {
                void 0 === b && (b = "ace_breakpoint");
                b ? (this.$breakpoints[a] = b) : delete this.$breakpoints[a];
                this._signal("changeBreakpoint", {});
            };
            this.clearBreakpoint = function (a) {
                delete this.$breakpoints[a];
                this._signal("changeBreakpoint", {});
            };
            this.addMarker = function (a, b, d, c) {
                var e = this.$markerId++;
                a = {
                    range: a,
                    type: d || "line",
                    renderer: "function" == typeof d ? d : null,
                    clazz: b,
                    inFront: !!c,
                    id: e,
                };
                return (
                    c
                        ? ((this.$frontMarkers[e] = a),
                          this._signal("changeFrontMarker"))
                        : ((this.$backMarkers[e] = a),
                          this._signal("changeBackMarker")),
                    e
                );
            };
            this.addDynamicMarker = function (a, b) {
                if (a.update) {
                    var d = this.$markerId++;
                    return (
                        (a.id = d),
                        (a.inFront = !!b),
                        b
                            ? ((this.$frontMarkers[d] = a),
                              this._signal("changeFrontMarker"))
                            : ((this.$backMarkers[d] = a),
                              this._signal("changeBackMarker")),
                        a
                    );
                }
            };
            this.removeMarker = function (a) {
                var b = this.$frontMarkers[a] || this.$backMarkers[a];
                if (b) {
                    var d = b.inFront ? this.$frontMarkers : this.$backMarkers;
                    b &&
                        (delete d[a],
                        this._signal(
                            b.inFront ? "changeFrontMarker" : "changeBackMarker"
                        ));
                }
            };
            this.getMarkers = function (a) {
                return a ? this.$frontMarkers : this.$backMarkers;
            };
            this.highlight = function (a) {
                if (!this.$searchHighlight) {
                    var b = new k(null, "ace_selected-word", "text");
                    this.$searchHighlight = this.addDynamicMarker(b);
                }
                this.$searchHighlight.setRegexp(a);
            };
            this.highlightLines = function (a, b, d, c) {
                "number" != typeof b && ((d = b), (b = a));
                d || (d = "ace_step");
                a = new e(a, 0, b, Infinity);
                return (a.id = this.addMarker(a, d, "fullLine", c)), a;
            };
            this.setAnnotations = function (a) {
                this.$annotations = a;
                this._signal("changeAnnotation", {});
            };
            this.getAnnotations = function () {
                return this.$annotations || [];
            };
            this.clearAnnotations = function () {
                this.setAnnotations([]);
            };
            this.$detectNewLine = function (a) {
                (a = a.match(/^.*?(\r?\n)/m))
                    ? (this.$autoNewLine = a[1])
                    : (this.$autoNewLine = "\n");
            };
            this.getWordRange = function (a, b) {
                var d = this.getLine(a);
                var c = !1;
                0 < b && (c = !!d.charAt(b - 1).match(this.tokenRe));
                c || (c = !!d.charAt(b).match(this.tokenRe));
                c = c
                    ? this.tokenRe
                    : /^\s+$/.test(d.slice(b - 1, b + 1))
                    ? /\s/
                    : this.nonTokenRe;
                var p = b;
                if (0 < p) {
                    do p--;
                    while (0 <= p && d.charAt(p).match(c));
                    p++;
                }
                for (; b < d.length && d.charAt(b).match(c); ) b++;
                return new e(a, p, a, b);
            };
            this.getAWordRange = function (a, b) {
                a = this.getWordRange(a, b);
                for (
                    b = this.getLine(a.end.row);
                    b.charAt(a.end.column).match(/[ \t]/);

                )
                    a.end.column += 1;
                return a;
            };
            this.setNewLineMode = function (a) {
                this.doc.setNewLineMode(a);
            };
            this.getNewLineMode = function () {
                return this.doc.getNewLineMode();
            };
            this.setUseWorker = function (a) {
                this.setOption("useWorker", a);
            };
            this.getUseWorker = function () {
                return this.$useWorker;
            };
            this.onReloadTokenizer = function (a) {
                this.bgTokenizer.start(a.data.first);
                this._signal("tokenizerUpdate", a);
            };
            this.$modes = {};
            this.$modeId = this.$mode = null;
            this.setMode = function (a, b) {
                if (a && "object" == typeof a) {
                    if (a.getTokenizer) return this.$onChangeMode(a);
                    var e = a;
                    var p = e.path;
                } else p = a || "ace/mode/text";
                this.$modes["ace/mode/text"] ||
                    (this.$modes["ace/mode/text"] = new d());
                this.$modes[p] && !e
                    ? (this.$onChangeMode(this.$modes[p]), b && b())
                    : ((this.$modeId = p),
                      c.loadModule(
                          ["mode", p],
                          function (a) {
                              if (this.$modeId !== p) return b && b();
                              this.$modes[p] && !e
                                  ? this.$onChangeMode(this.$modes[p])
                                  : a &&
                                    a.Mode &&
                                    ((a = new a.Mode(e)),
                                    e || ((this.$modes[p] = a), (a.$id = p)),
                                    this.$onChangeMode(a));
                              b && b();
                          }.bind(this)
                      ),
                      this.$mode ||
                          this.$onChangeMode(this.$modes["ace/mode/text"], !0));
            };
            this.$onChangeMode = function (a, b) {
                b || (this.$modeId = a.$id);
                if (this.$mode !== a) {
                    this.$mode = a;
                    this.$stopWorker();
                    this.$useWorker && this.$startWorker();
                    var d = a.getTokenizer();
                    if (void 0 !== d.addEventListener) {
                        var c = this.onReloadTokenizer.bind(this);
                        d.addEventListener("update", c);
                    }
                    if (this.bgTokenizer) this.bgTokenizer.setTokenizer(d);
                    else {
                        this.bgTokenizer = new f(d);
                        var e = this;
                        this.bgTokenizer.addEventListener("update", function (
                            a
                        ) {
                            e._signal("tokenizerUpdate", a);
                        });
                    }
                    this.bgTokenizer.setDocument(this.getDocument());
                    this.tokenRe = a.tokenRe;
                    this.nonTokenRe = a.nonTokenRe;
                    b ||
                        (a.attachToSession && a.attachToSession(this),
                        this.$options.wrapMethod.set.call(
                            this,
                            this.$wrapMethod
                        ),
                        this.$setFolding(a.foldingRules),
                        this.bgTokenizer.start(0),
                        this._emit("changeMode"));
                }
            };
            this.$stopWorker = function () {
                this.$worker &&
                    (this.$worker.terminate(), (this.$worker = null));
            };
            this.$startWorker = function () {
                try {
                    this.$worker = this.$mode.createWorker(this);
                } catch (p) {
                    c.warn("Could not load worker", p), (this.$worker = null);
                }
            };
            this.getMode = function () {
                return this.$mode;
            };
            this.$scrollTop = 0;
            this.setScrollTop = function (a) {
                this.$scrollTop === a ||
                    isNaN(a) ||
                    ((this.$scrollTop = a), this._signal("changeScrollTop", a));
            };
            this.getScrollTop = function () {
                return this.$scrollTop;
            };
            this.$scrollLeft = 0;
            this.setScrollLeft = function (a) {
                this.$scrollLeft === a ||
                    isNaN(a) ||
                    ((this.$scrollLeft = a),
                    this._signal("changeScrollLeft", a));
            };
            this.getScrollLeft = function () {
                return this.$scrollLeft;
            };
            this.getScreenWidth = function () {
                return (
                    this.$computeWidth(),
                    this.lineWidgets
                        ? Math.max(
                              this.getLineWidgetMaxWidth(),
                              this.screenWidth
                          )
                        : this.screenWidth
                );
            };
            this.getLineWidgetMaxWidth = function () {
                if (null != this.lineWidgetsWidth) return this.lineWidgetsWidth;
                var a = 0;
                return (
                    this.lineWidgets.forEach(function (b) {
                        b && b.screenWidth > a && (a = b.screenWidth);
                    }),
                    (this.lineWidgetWidth = a)
                );
            };
            this.$computeWidth = function (a) {
                if (this.$modified || a) {
                    this.$modified = !1;
                    if (this.$useWrapMode)
                        return (this.screenWidth = this.$wrapLimit);
                    a = this.doc.getAllLines();
                    for (
                        var b = this.$rowLengthCache,
                            d = 0,
                            c = 0,
                            e = this.$foldData[c],
                            p = e ? e.start.row : Infinity,
                            l = a.length,
                            f = 0;
                        f < l;
                        f++
                    ) {
                        if (f > p) {
                            f = e.end.row + 1;
                            if (f >= l) break;
                            p = (e = this.$foldData[c++])
                                ? e.start.row
                                : Infinity;
                        }
                        null == b[f] &&
                            (b[f] = this.$getStringScreenWidth(a[f])[0]);
                        b[f] > d && (d = b[f]);
                    }
                    this.screenWidth = d;
                }
            };
            this.getLine = function (a) {
                return this.doc.getLine(a);
            };
            this.getLines = function (a, b) {
                return this.doc.getLines(a, b);
            };
            this.getLength = function () {
                return this.doc.getLength();
            };
            this.getTextRange = function (a) {
                return this.doc.getTextRange(a || this.selection.getRange());
            };
            this.insert = function (a, b) {
                return this.doc.insert(a, b);
            };
            this.remove = function (a) {
                return this.doc.remove(a);
            };
            this.removeFullLines = function (a, b) {
                return this.doc.removeFullLines(a, b);
            };
            this.undoChanges = function (a, b) {
                if (a.length) {
                    this.$fromUndo = !0;
                    for (var d = null, c = a.length - 1; -1 != c; c--) {
                        var e = a[c];
                        "doc" == e.group
                            ? (this.doc.revertDeltas(e.deltas),
                              (d = this.$getUndoSelection(e.deltas, !0, d)))
                            : e.deltas.forEach(function (a) {
                                  this.addFolds(a.folds);
                              }, this);
                    }
                    return (
                        (this.$fromUndo = !1),
                        d &&
                            this.$undoSelect &&
                            !b &&
                            this.selection.setSelectionRange(d),
                        d
                    );
                }
            };
            this.redoChanges = function (a, b) {
                if (a.length) {
                    this.$fromUndo = !0;
                    for (var d = null, c = 0; c < a.length; c++) {
                        var e = a[c];
                        "doc" == e.group &&
                            (this.doc.applyDeltas(e.deltas),
                            (d = this.$getUndoSelection(e.deltas, !1, d)));
                    }
                    return (
                        (this.$fromUndo = !1),
                        d &&
                            this.$undoSelect &&
                            !b &&
                            this.selection.setSelectionRange(d),
                        d
                    );
                }
            };
            this.setUndoSelect = function (a) {
                this.$undoSelect = a;
            };
            this.$getUndoSelection = function (a, b, d) {
                var c = a[0],
                    p,
                    l;
                (b ? "insert" !== c.action : "insert" === c.action)
                    ? (p = e.fromPoints(c.start, c.end))
                    : (p = e.fromPoints(c.start, c.start));
                for (var f = 1; f < a.length; f++)
                    (c = a[f]),
                        (b ? "insert" !== c.action : "insert" === c.action)
                            ? ((l = c.start),
                              -1 == p.compare(l.row, l.column) && p.setStart(l),
                              (l = c.end),
                              1 == p.compare(l.row, l.column) && p.setEnd(l))
                            : ((l = c.start),
                              -1 == p.compare(l.row, l.column) &&
                                  (p = e.fromPoints(c.start, c.start)));
                null != d &&
                    (0 === e.comparePoints(d.start, p.start) &&
                        ((d.start.column += p.end.column - p.start.column),
                        (d.end.column += p.end.column - p.start.column)),
                    (a = d.compareRange(p)),
                    1 == a ? p.setStart(d.start) : -1 == a && p.setEnd(d.end));
                return p;
            };
            this.replace = function (a, b) {
                return this.doc.replace(a, b);
            };
            this.moveText = function (a, b, d) {
                var c,
                    p,
                    l = this.getTextRange(a),
                    f = this.getFoldsInRange(a);
                b = e.fromPoints(b, b);
                d ||
                    (this.remove(a),
                    (c = (p = a.start.row - a.end.row)
                        ? -a.end.column
                        : a.start.column - a.end.column) &&
                        (b.start.row == a.end.row &&
                            b.start.column > a.end.column &&
                            (b.start.column += c),
                        b.end.row == a.end.row &&
                            b.end.column > a.end.column &&
                            (b.end.column += c)),
                    p &&
                        b.start.row >= a.end.row &&
                        ((b.start.row += p), (b.end.row += p)));
                b.end = this.insert(b.start, l);
                if (f.length) {
                    var m = a.start;
                    a = b.start;
                    p = a.row - m.row;
                    c = a.column - m.column;
                    this.addFolds(
                        f.map(function (a) {
                            return (
                                (a = a.clone()),
                                a.start.row == m.row && (a.start.column += c),
                                a.end.row == m.row && (a.end.column += c),
                                (a.start.row += p),
                                (a.end.row += p),
                                a
                            );
                        })
                    );
                }
                return b;
            };
            this.indentRows = function (a, b, d) {
                for (d = d.replace(/\t/g, this.getTabString()); a <= b; a++)
                    this.doc.insertInLine({ row: a, column: 0 }, d);
            };
            this.outdentRows = function (a) {
                a = a.collapseRows();
                for (
                    var b = new e(0, 0, 0, 0),
                        d = this.getTabSize(),
                        c = a.start.row;
                    c <= a.end.row;
                    ++c
                ) {
                    var p = this.getLine(c);
                    b.start.row = c;
                    b.end.row = c;
                    for (var l = 0; l < d && " " == p.charAt(l); ++l);
                    l < d && "\t" == p.charAt(l)
                        ? ((b.start.column = l), (b.end.column = l + 1))
                        : ((b.start.column = 0), (b.end.column = l));
                    this.remove(b);
                }
            };
            this.$moveLines = function (a, b, d) {
                a = this.getRowFoldStart(a);
                b = this.getRowFoldEnd(b);
                if (0 > d) {
                    var c = this.getRowFoldStart(a + d);
                    if (0 > c) return 0;
                    var p = c - a;
                } else if (0 < d) {
                    c = this.getRowFoldEnd(b + d);
                    if (c > this.doc.getLength() - 1) return 0;
                    p = c - b;
                } else
                    (a = this.$clipRowToDocument(a)),
                        (b = this.$clipRowToDocument(b)),
                        (p = b - a + 1);
                c = new e(a, 0, b, Number.MAX_VALUE);
                c = this.getFoldsInRange(c).map(function (a) {
                    return (
                        (a = a.clone()), (a.start.row += p), (a.end.row += p), a
                    );
                });
                b =
                    0 == d
                        ? this.doc.getLines(a, b)
                        : this.doc.removeFullLines(a, b);
                return (
                    this.doc.insertFullLines(a + p, b),
                    c.length && this.addFolds(c),
                    p
                );
            };
            this.moveLinesUp = function (a, b) {
                return this.$moveLines(a, b, -1);
            };
            this.moveLinesDown = function (a, b) {
                return this.$moveLines(a, b, 1);
            };
            this.duplicateLines = function (a, b) {
                return this.$moveLines(a, b, 0);
            };
            this.$clipRowToDocument = function (a) {
                return Math.max(0, Math.min(a, this.doc.getLength() - 1));
            };
            this.$clipColumnToRow = function (a, b) {
                return 0 > b ? 0 : Math.min(this.doc.getLine(a).length, b);
            };
            this.$clipPositionToDocument = function (a, b) {
                b = Math.max(0, b);
                if (0 > a) b = a = 0;
                else {
                    var d = this.doc.getLength();
                    a >= d
                        ? ((a = d - 1), (b = this.doc.getLine(d - 1).length))
                        : (b = Math.min(this.doc.getLine(a).length, b));
                }
                return { row: a, column: b };
            };
            this.$clipRangeToDocument = function (a) {
                0 > a.start.row
                    ? ((a.start.row = 0), (a.start.column = 0))
                    : (a.start.column = this.$clipColumnToRow(
                          a.start.row,
                          a.start.column
                      ));
                var b = this.doc.getLength() - 1;
                return (
                    a.end.row > b
                        ? ((a.end.row = b),
                          (a.end.column = this.doc.getLine(b).length))
                        : (a.end.column = this.$clipColumnToRow(
                              a.end.row,
                              a.end.column
                          )),
                    a
                );
            };
            this.$wrapLimit = 80;
            this.$useWrapMode = !1;
            this.$wrapLimitRange = { min: null, max: null };
            this.setUseWrapMode = function (a) {
                a != this.$useWrapMode &&
                    ((this.$useWrapMode = a),
                    (this.$modified = !0),
                    this.$resetRowCache(0),
                    a &&
                        ((a = this.getLength()),
                        (this.$wrapData = Array(a)),
                        this.$updateWrapData(0, a - 1)),
                    this._signal("changeWrapMode"));
            };
            this.getUseWrapMode = function () {
                return this.$useWrapMode;
            };
            this.setWrapLimitRange = function (a, b) {
                if (
                    this.$wrapLimitRange.min !== a ||
                    this.$wrapLimitRange.max !== b
                )
                    (this.$wrapLimitRange = { min: a, max: b }),
                        (this.$modified = !0),
                        this.$useWrapMode && this._signal("changeWrapMode");
            };
            this.adjustWrapLimit = function (a, b) {
                var d = this.$wrapLimitRange;
                0 > d.max && (d = { min: b, max: b });
                a = this.$constrainWrapLimit(a, d.min, d.max);
                return a != this.$wrapLimit && 1 < a
                    ? ((this.$wrapLimit = a),
                      (this.$modified = !0),
                      this.$useWrapMode &&
                          (this.$updateWrapData(0, this.getLength() - 1),
                          this.$resetRowCache(0),
                          this._signal("changeWrapLimit")),
                      !0)
                    : !1;
            };
            this.$constrainWrapLimit = function (a, b, d) {
                return b && (a = Math.max(b, a)), d && (a = Math.min(d, a)), a;
            };
            this.getWrapLimit = function () {
                return this.$wrapLimit;
            };
            this.setWrapLimit = function (a) {
                this.setWrapLimitRange(a, a);
            };
            this.getWrapLimitRange = function () {
                return {
                    min: this.$wrapLimitRange.min,
                    max: this.$wrapLimitRange.max,
                };
            };
            this.$updateInternalDataOnChange = function (a) {
                var b = this.$useWrapMode;
                var d = a.action;
                var c = a.start,
                    e = a.end,
                    p = c.row,
                    l = e.row,
                    f = l - p,
                    m = null;
                this.$updating = !0;
                if (0 != f)
                    if ("remove" === d) {
                        this[b ? "$wrapData" : "$rowLengthCache"].splice(p, f);
                        d = this.$foldData;
                        m = this.getFoldsInRange(a);
                        this.removeFolds(m);
                        a = this.getFoldLine(e.row);
                        var k = 0;
                        a &&
                            (a.addRemoveChars(
                                e.row,
                                e.column,
                                c.column - e.column
                            ),
                            a.shiftRow(-f),
                            (c = this.getFoldLine(p)) &&
                                c !== a &&
                                (c.merge(a), (a = c)),
                            (k = d.indexOf(a) + 1));
                        for (k; k < d.length; k++)
                            (a = d[k]), a.start.row >= e.row && a.shiftRow(-f);
                        l = p;
                    } else
                        for (
                            d = Array(f),
                                d.unshift(p, 0),
                                a = b ? this.$wrapData : this.$rowLengthCache,
                                a.splice.apply(a, d),
                                d = this.$foldData,
                                a = this.getFoldLine(p),
                                k = 0,
                                a &&
                                    ((k = a.range.compareInside(
                                        c.row,
                                        c.column
                                    )),
                                    0 == k
                                        ? ((a = a.split(c.row, c.column)),
                                          a &&
                                              (a.shiftRow(f),
                                              a.addRemoveChars(
                                                  l,
                                                  0,
                                                  e.column - c.column
                                              )))
                                        : -1 == k &&
                                          (a.addRemoveChars(
                                              p,
                                              0,
                                              e.column - c.column
                                          ),
                                          a.shiftRow(f)),
                                    (k = d.indexOf(a) + 1)),
                                k;
                            k < d.length;
                            k++
                        )
                            (a = d[k]), a.start.row >= p && a.shiftRow(f);
                else
                    (f = Math.abs(a.start.column - a.end.column)),
                        "remove" === d &&
                            ((m = this.getFoldsInRange(a)),
                            this.removeFolds(m),
                            (f = -f)),
                        (a = this.getFoldLine(p)) &&
                            a.addRemoveChars(p, c.column, f);
                return (
                    b &&
                        this.$wrapData.length != this.doc.getLength() &&
                        console.error(
                            "doc.getLength() and $wrapData.length have to be the same!"
                        ),
                    (this.$updating = !1),
                    b
                        ? this.$updateWrapData(p, l)
                        : this.$updateRowLengthCache(p, l),
                    m
                );
            };
            this.$updateRowLengthCache = function (a, b, d) {
                this.$rowLengthCache[a] = null;
                this.$rowLengthCache[b] = null;
            };
            this.$updateWrapData = function (a, b) {
                var d = this.doc.getAllLines(),
                    c = this.getTabSize(),
                    e = this.$wrapData,
                    p = this.$wrapLimit,
                    f,
                    k;
                for (b = Math.min(b, d.length - 1); a <= b; )
                    (k = this.getFoldLine(a, k))
                        ? ((f = []),
                          k.walk(
                              function (a, b, c, e) {
                                  if (null != a)
                                      for (
                                          a = this.$getDisplayTokens(
                                              a,
                                              f.length
                                          ),
                                              a[0] = l,
                                              b = 1;
                                          b < a.length;
                                          b++
                                      )
                                          a[b] = m;
                                  else
                                      a = this.$getDisplayTokens(
                                          d[b].substring(e, c),
                                          f.length
                                      );
                                  f = f.concat(a);
                              }.bind(this),
                              k.end.row,
                              d[k.end.row].length + 1
                          ),
                          (e[k.start.row] = this.$computeWrapSplits(f, p, c)),
                          (a = k.end.row + 1))
                        : ((f = this.$getDisplayTokens(d[a])),
                          (e[a] = this.$computeWrapSplits(f, p, c)),
                          a++);
            };
            var l = 3,
                m = 4;
            this.$computeWrapSplits = function (a, b, d) {
                function c() {
                    var b = 0;
                    if (0 === v) return b;
                    if (h)
                        for (var c = 0; c < a.length; c++) {
                            var e = a[c];
                            if (10 == e) b += 1;
                            else {
                                if (11 != e) {
                                    if (12 == e) continue;
                                    break;
                                }
                                b += d;
                            }
                        }
                    return g && !1 !== h && (b += d), Math.min(b, v);
                }
                function e(b) {
                    var d = a.slice(k, b),
                        e = d.length;
                    d.join("")
                        .replace(/12/g, function () {
                            --e;
                        })
                        .replace(/2/g, function () {
                            --e;
                        });
                    p.length || ((n = c()), (p.indent = n));
                    r += e;
                    p.push(r);
                    k = b;
                }
                if (0 == a.length) return [];
                for (
                    var p = [],
                        f = a.length,
                        k = 0,
                        r = 0,
                        g = this.$wrapAsCode,
                        h = this.$indentedSoftWrap,
                        v =
                            b <= Math.max(2 * d, 8) || !1 === h
                                ? 0
                                : Math.floor(b / 2),
                        n = 0;
                    f - k > b - n;

                ) {
                    var u = k + b - n;
                    if (10 <= a[u - 1] && 10 <= a[u]) e(u);
                    else if (a[u] == l || a[u] == m) {
                        for (u; u != k - 1 && a[u] != l; u--);
                        if (!(u > k)) {
                            u = k + b;
                            for (u; u < a.length && a[u] == m; u++);
                            if (u == a.length) break;
                        }
                        e(u);
                    } else {
                        for (
                            var z = Math.max(u - (b - (b >> 2)), k - 1);
                            u > z && a[u] < l;

                        )
                            u--;
                        if (g) {
                            for (; u > z && a[u] < l; ) u--;
                            for (; u > z && 9 == a[u]; ) u--;
                        } else for (; u > z && 10 > a[u]; ) u--;
                        u > z
                            ? e(++u)
                            : ((u = k + b), 2 == a[u] && u--, e(u - n));
                    }
                }
                return p;
            };
            this.$getDisplayTokens = function (b, d) {
                var c = [];
                d = d || 0;
                for (var e = 0; e < b.length; e++) {
                    var p = b.charCodeAt(e);
                    if (9 == p) {
                        p = this.getScreenTabSize(c.length + d);
                        c.push(11);
                        for (var l = 1; l < p; l++) c.push(12);
                    } else
                        32 == p
                            ? c.push(10)
                            : (39 < p && 48 > p) || (57 < p && 64 > p)
                            ? c.push(9)
                            : 4352 <= p && a(p)
                            ? c.push(1, 2)
                            : c.push(1);
                }
                return c;
            };
            this.$getStringScreenWidth = function (b, d, c) {
                if (0 == d) return [0, 0];
                null == d && (d = Infinity);
                c = c || 0;
                var e;
                for (e = 0; e < b.length; e++) {
                    var p = b.charCodeAt(e);
                    9 == p
                        ? (c += this.getScreenTabSize(c))
                        : 4352 <= p && a(p)
                        ? (c += 2)
                        : (c += 1);
                    if (c > d) break;
                }
                return [c, e];
            };
            this.lineWidgets = null;
            this.getRowLength = function (a) {
                var b = this.lineWidgets
                    ? (this.lineWidgets[a] && this.lineWidgets[a].rowCount) || 0
                    : 0;
                return this.$useWrapMode && this.$wrapData[a]
                    ? this.$wrapData[a].length + 1 + b
                    : 1 + b;
            };
            this.getRowLineCount = function (a) {
                return this.$useWrapMode && this.$wrapData[a]
                    ? this.$wrapData[a].length + 1
                    : 1;
            };
            this.getRowWrapIndent = function (a) {
                if (this.$useWrapMode) {
                    a = this.screenToDocumentPosition(a, Number.MAX_VALUE);
                    var b = this.$wrapData[a.row];
                    return b.length && b[0] < a.column ? b.indent : 0;
                }
                return 0;
            };
            this.getScreenLastRowColumn = function (a) {
                a = this.screenToDocumentPosition(a, Number.MAX_VALUE);
                return this.documentToScreenColumn(a.row, a.column);
            };
            this.getDocumentLastRowColumn = function (a, b) {
                a = this.documentToScreenRow(a, b);
                return this.getScreenLastRowColumn(a);
            };
            this.getDocumentLastRowColumnPosition = function (a, b) {
                a = this.documentToScreenRow(a, b);
                return this.screenToDocumentPosition(a, Number.MAX_VALUE / 10);
            };
            this.getRowSplitData = function (a) {
                return this.$useWrapMode ? this.$wrapData[a] : void 0;
            };
            this.getScreenTabSize = function (a) {
                return this.$tabSize - (a % this.$tabSize);
            };
            this.screenToDocumentRow = function (a, b) {
                return this.screenToDocumentPosition(a, b).row;
            };
            this.screenToDocumentColumn = function (a, b) {
                return this.screenToDocumentPosition(a, b).column;
            };
            this.screenToDocumentPosition = function (a, b) {
                var d, c;
                if (0 > a) return { row: 0, column: 0 };
                var e = (d = 0);
                var l = (c = 0);
                var p = this.$screenRowCache;
                var f = this.$getRowCacheIndex(p, a);
                var m = p.length;
                m && 0 <= f
                    ? ((c = p[f]),
                      (d = this.$docRowCache[f]),
                      (f = a > p[m - 1]))
                    : (f = !m);
                for (
                    var m = this.getLength() - 1,
                        k = (p = this.getNextFoldLine(d))
                            ? p.start.row
                            : Infinity;
                    c <= a;

                ) {
                    l = this.getRowLength(d);
                    if (c + l > a || d >= m) break;
                    c += l;
                    d++;
                    d > k &&
                        ((d = p.end.row + 1),
                        (p = this.getNextFoldLine(d, p)),
                        (k = p ? p.start.row : Infinity));
                    f &&
                        (this.$docRowCache.push(d),
                        this.$screenRowCache.push(c));
                }
                if (p && p.start.row <= d)
                    (l = this.getFoldDisplayLine(p)), (d = p.start.row);
                else {
                    if (c + l <= a || d > m)
                        return { row: m, column: this.getLine(m).length };
                    l = this.getLine(d);
                    p = null;
                }
                f = 0;
                if (this.$useWrapMode && (m = this.$wrapData[d])) {
                    a = Math.floor(a - c);
                    var r = m[a];
                    0 < a &&
                        m.length &&
                        ((f = m.indent),
                        (e = m[a - 1] || m[m.length - 1]),
                        (l = l.substring(e)));
                }
                return (
                    (e += this.$getStringScreenWidth(l, b - f)[1]),
                    this.$useWrapMode && e >= r && (e = r - 1),
                    p ? p.idxToPosition(e) : { row: d, column: e }
                );
            };
            this.documentToScreenPosition = function (a, b) {
                var d;
                var c =
                    "undefined" == typeof b
                        ? this.$clipPositionToDocument(a.row, a.column)
                        : this.$clipPositionToDocument(a, b);
                a = c.row;
                b = c.column;
                c = 0;
                var e = null;
                (d = this.getFoldAt(a, b, 1)) &&
                    ((a = d.start.row), (b = d.start.column));
                d = 0;
                var l = this.$docRowCache;
                var p = this.$getRowCacheIndex(l, a),
                    f = l.length;
                f && 0 <= p
                    ? ((d = l[p]),
                      (c = this.$screenRowCache[p]),
                      (l = a > l[f - 1]))
                    : (l = !f);
                for (
                    f = (p = this.getNextFoldLine(d)) ? p.start.row : Infinity;
                    d < a;

                ) {
                    if (d >= f) {
                        var m = p.end.row + 1;
                        if (m > a) break;
                        f = (p = this.getNextFoldLine(m, p))
                            ? p.start.row
                            : Infinity;
                    } else m = d + 1;
                    c += this.getRowLength(d);
                    d = m;
                    l &&
                        (this.$docRowCache.push(d),
                        this.$screenRowCache.push(c));
                }
                l = "";
                p && d >= f
                    ? ((l = this.getFoldDisplayLine(p, a, b)),
                      (e = p.start.row))
                    : ((l = this.getLine(a).substring(0, b)), (e = a));
                a = 0;
                if (this.$useWrapMode && (e = this.$wrapData[e])) {
                    for (a = 0; l.length >= e[a]; ) c++, a++;
                    l = l.substring(e[a - 1] || 0, l.length);
                    a = 0 < a ? e.indent : 0;
                }
                return { row: c, column: a + this.$getStringScreenWidth(l)[0] };
            };
            this.documentToScreenColumn = function (a, b) {
                return this.documentToScreenPosition(a, b).column;
            };
            this.documentToScreenRow = function (a, b) {
                return this.documentToScreenPosition(a, b).row;
            };
            this.getScreenLength = function () {
                var a,
                    b = 0;
                if (this.$useWrapMode) {
                    var d = this.$wrapData.length,
                        c = 0;
                    var e = 0;
                    for (
                        var l = (a = this.$foldData[e++])
                            ? a.start.row
                            : Infinity;
                        c < d;

                    ) {
                        var f = this.$wrapData[c],
                            b = b + (f ? f.length + 1 : 1);
                        c++;
                        c > l &&
                            ((c = a.end.row + 1),
                            (a = this.$foldData[e++]),
                            (l = a ? a.start.row : Infinity));
                    }
                } else
                    for (
                        b = this.getLength(), d = this.$foldData, e = 0;
                        e < d.length;
                        e++
                    )
                        (a = d[e]), (b -= a.end.row - a.start.row);
                return (
                    this.lineWidgets && (b += this.$getWidgetScreenLength()), b
                );
            };
            this.$setFontMetrics = function (a) {
                this.$enableVarChar &&
                    (this.$getStringScreenWidth = function (b, d, c) {
                        if (0 === d) return [0, 0];
                        d || (d = Infinity);
                        c = c || 0;
                        var e;
                        for (e = 0; e < b.length; e++) {
                            var l = b.charAt(e);
                            "\t" === l
                                ? (c += this.getScreenTabSize(c))
                                : (c += a.getCharacterWidth(l));
                            if (c > d) break;
                        }
                        return [c, e];
                    });
            };
            this.destroy = function () {
                this.bgTokenizer &&
                    (this.bgTokenizer.setDocument(null),
                    (this.bgTokenizer = null));
                this.$stopWorker();
            };
        }.call(l.prototype));
        n("./edit_session/folding").Folding.call(l.prototype);
        n("./edit_session/bracket_match").BracketMatch.call(l.prototype);
        c.defineOptions(l.prototype, "session", {
            wrap: {
                set: function (a) {
                    a && "off" != a
                        ? "free" == a
                            ? (a = !0)
                            : "printMargin" == a
                            ? (a = -1)
                            : "string" == typeof a &&
                              (a = parseInt(a, 10) || !1)
                        : (a = !1);
                    this.$wrap != a &&
                        ((this.$wrap = a)
                            ? ((a = "number" == typeof a ? a : null),
                              this.setWrapLimitRange(a, a),
                              this.setUseWrapMode(!0))
                            : this.setUseWrapMode(!1));
                },
                get: function () {
                    return this.getUseWrapMode()
                        ? -1 == this.$wrap
                            ? "printMargin"
                            : this.getWrapLimitRange().min
                            ? this.$wrap
                            : "free"
                        : "off";
                },
                handlesSet: !0,
            },
            wrapMethod: {
                set: function (a) {
                    a = "auto" == a ? "text" != this.$mode.type : "text" != a;
                    a != this.$wrapAsCode &&
                        ((this.$wrapAsCode = a),
                        this.$useWrapMode &&
                            ((this.$modified = !0),
                            this.$resetRowCache(0),
                            this.$updateWrapData(0, this.getLength() - 1)));
                },
                initialValue: "auto",
            },
            indentedSoftWrap: { initialValue: !0 },
            firstLineNumber: {
                set: function () {
                    this._signal("changeBreakpoint");
                },
                initialValue: 1,
            },
            useWorker: {
                set: function (a) {
                    this.$useWorker = a;
                    this.$stopWorker();
                    a && this.$startWorker();
                },
                initialValue: !0,
            },
            useSoftTabs: { initialValue: !0 },
            tabSize: {
                set: function (a) {
                    isNaN(a) ||
                        this.$tabSize === a ||
                        ((this.$modified = !0),
                        (this.$rowLengthCache = []),
                        (this.$tabSize = a),
                        this._signal("changeTabSize"));
                },
                initialValue: 4,
                handlesSet: !0,
            },
            navigateWithinSoftTabs: { initialValue: !1 },
            overwrite: {
                set: function (a) {
                    this._signal("changeOverwrite");
                },
                initialValue: !1,
            },
            newLineMode: {
                set: function (a) {
                    this.doc.setNewLineMode(a);
                },
                get: function () {
                    return this.doc.getNewLineMode();
                },
                handlesSet: !0,
            },
            mode: {
                set: function (a) {
                    this.setMode(a);
                },
                get: function () {
                    return this.$modeId;
                },
            },
        });
        q.EditSession = l;
    }
);
ace.define(
    "ace/search",
    "require exports module ace/lib/lang ace/lib/oop ace/range".split(" "),
    function (n, q, t) {
        var h = n("./lib/lang"),
            g = n("./lib/oop"),
            c = n("./range").Range;
        n = function () {
            this.$options = {};
        };
        (function () {
            this.set = function (b) {
                return g.mixin(this.$options, b), this;
            };
            this.getOptions = function () {
                return h.copyObject(this.$options);
            };
            this.setOptions = function (b) {
                this.$options = b;
            };
            this.find = function (b) {
                var a = this.$options;
                b = this.$matchIterator(b, a);
                if (!b) return !1;
                var d = null;
                return (
                    b.forEach(function (b, m, f, k) {
                        return (
                            (d = new c(b, m, f, k)),
                            m == k &&
                            a.start &&
                            a.start.start &&
                            0 != a.skipCurrent &&
                            d.isEqual(a.start)
                                ? ((d = null), !1)
                                : !0
                        );
                    }),
                    d
                );
            };
            this.findAll = function (b) {
                var a;
                var d = this.$options;
                if (!d.needle) return [];
                this.$assembleRegExp(d);
                var e = d.range,
                    m = e
                        ? b.getLines(e.start.row, e.end.row)
                        : b.doc.getAllLines();
                b = [];
                var f = d.re;
                if (d.$isMultiLine) {
                    var k = f.length,
                        l = m.length - k,
                        g = f.offset || 0;
                    a: for (; g <= l; g++) {
                        for (d = 0; d < k; d++)
                            if (-1 == m[g + d].search(f[d])) continue a;
                        var n = m[g];
                        d = m[g + k - 1];
                        n = n.length - n.match(f[0])[0].length;
                        d = d.match(f[k - 1])[0].length;
                        (a && a.end.row === g && a.end.column > n) ||
                            (b.push((a = new c(g, n, g + k - 1, d))),
                            2 < k && (g = g + k - 2));
                    }
                } else
                    for (a = 0; a < m.length; a++)
                        for (
                            k = h.getMatchOffsets(m[a], f), d = 0;
                            d < k.length;
                            d++
                        )
                            (l = k[d]),
                                b.push(
                                    new c(a, l.offset, a, l.offset + l.length)
                                );
                if (e) {
                    f = m = e.start.column;
                    a = 0;
                    for (
                        d = b.length - 1;
                        a < d &&
                        b[a].start.column < m &&
                        b[a].start.row == e.start.row;

                    )
                        a++;
                    for (
                        ;
                        a < d &&
                        b[d].end.column > f &&
                        b[d].end.row == e.end.row;

                    )
                        d--;
                    b = b.slice(a, d + 1);
                    a = 0;
                    for (d = b.length; a < d; a++)
                        (b[a].start.row += e.start.row),
                            (b[a].end.row += e.start.row);
                }
                return b;
            };
            this.replace = function (b, a) {
                var d = this.$options,
                    c = this.$assembleRegExp(d);
                if (d.$isMultiLine) return a;
                if (c) {
                    var m = c.exec(b);
                    if (!m || m[0].length != b.length) return null;
                    a = b.replace(c, a);
                    if (d.preserveCase) {
                        a = a.split("");
                        for (d = Math.min(b.length, b.length); d--; )
                            (c = b[d]) && c.toLowerCase() != c
                                ? (a[d] = a[d].toUpperCase())
                                : (a[d] = a[d].toLowerCase());
                        a = a.join("");
                    }
                    return a;
                }
            };
            this.$assembleRegExp = function (b, a) {
                if (b.needle instanceof RegExp) return (b.re = b.needle);
                var d = b.needle;
                if (!b.needle) return (b.re = !1);
                b.regExp || (d = h.escapeRegExp(d));
                b.wholeWord &&
                    (d =
                        (/\w/.test(d[0]) || b.regExp ? "\\b" : "") +
                        d +
                        (/\w/.test(d[d.length - 1]) || b.regExp ? "\\b" : ""));
                var c = b.caseSensitive ? "gm" : "gmi";
                b.$isMultiLine = !a && /[\n\r]/.test(d);
                if (b.$isMultiLine)
                    return (b.re = this.$assembleMultilineRegExp(d, c));
                try {
                    var m = new RegExp(d, c);
                } catch (f) {
                    m = !1;
                }
                return (b.re = m);
            };
            this.$assembleMultilineRegExp = function (b, a) {
                b = b.replace(/\r\n|\r|\n/g, "$\n^").split("\n");
                for (var d = [], c = 0; c < b.length; c++)
                    try {
                        d.push(new RegExp(b[c], a));
                    } catch (m) {
                        return !1;
                    }
                return d;
            };
            this.$matchIterator = function (b, a) {
                var d = this.$assembleRegExp(a);
                if (!d) return !1;
                var c = 1 == a.backwards;
                var m = 0 != a.skipCurrent;
                var f = a.range,
                    k = a.start;
                k || (k = f ? f[c ? "end" : "start"] : b.selection.getRange());
                k.start && (k = k[m != c ? "end" : "start"]);
                var l = f ? f.start.row : 0,
                    g = f ? f.end.row : b.getLength() - 1;
                m = c
                    ? function (b) {
                          var d = k.row;
                          if (!r(d, k.column, b)) {
                              for (d--; d >= l; d--)
                                  if (r(d, Number.MAX_VALUE, b)) return;
                              if (0 != a.wrap)
                                  for (
                                      d = g, l = k.row;
                                      d >= l && !r(d, Number.MAX_VALUE, b);
                                      d--
                                  );
                          }
                      }
                    : function (b) {
                          var d = k.row;
                          if (!r(d, k.column, b)) {
                              for (d += 1; d <= g; d++) if (r(d, 0, b)) return;
                              if (0 != a.wrap)
                                  for (
                                      d = l, g = k.row;
                                      d <= g && !r(d, 0, b);
                                      d++
                                  );
                          }
                      };
                if (a.$isMultiLine) {
                    var h = d.length;
                    var r = function (a, e, l) {
                        a = c ? a - h + 1 : a;
                        if (!(0 > a)) {
                            var p = b.getLine(a),
                                f = p.search(d[0]);
                            if (!((!c && f < e) || -1 === f)) {
                                for (var m = 1; m < h; m++)
                                    if (
                                        ((p = b.getLine(a + m)),
                                        -1 == p.search(d[m]))
                                    )
                                        return;
                                p = p.match(d[h - 1])[0].length;
                                if (!(c && p > e) && l(a, f, a + h - 1, p))
                                    return !0;
                            }
                        }
                    };
                } else
                    r = c
                        ? function (a, c, e) {
                              var l = b.getLine(a),
                                  p = [],
                                  f;
                              for (d.lastIndex = 0; (f = d.exec(l)); ) {
                                  var m = f[0].length;
                                  var k = f.index;
                                  if (!m) {
                                      if (k >= l.length) break;
                                      d.lastIndex = k + 1;
                                  }
                                  if (f.index + m > c) break;
                                  p.push(f.index, m);
                              }
                              for (c = p.length - 1; 0 <= c; c -= 2)
                                  if (
                                      ((l = p[c - 1]),
                                      (m = p[c]),
                                      e(a, l, a, l + m))
                                  )
                                      return !0;
                          }
                        : function (a, c, e) {
                              var l = b.getLine(a),
                                  p;
                              for (d.lastIndex = c; (p = d.exec(l)); ) {
                                  c = p[0].length;
                                  p = p.index;
                                  if (e(a, p, a, p + c)) return !0;
                                  if (
                                      !c &&
                                      ((d.lastIndex = p += 1), p >= l.length)
                                  )
                                      return !1;
                              }
                          };
                return { forEach: m };
            };
        }.call(n.prototype));
        q.Search = n;
    }
);
ace.define(
    "ace/keyboard/hash_handler",
    ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"],
    function (n, q, t) {
        function h(a, c) {
            this.platform = c || (b.isMac ? "mac" : "win");
            this.commands = {};
            this.commandKeyBinding = {};
            this.addCommands(a);
            this.$singleCommand = !0;
        }
        function g(a, b) {
            h.call(this, a, b);
            this.$singleCommand = !1;
        }
        var c = n("../lib/keys"),
            b = n("../lib/useragent"),
            a = c.KEY_MODS;
        g.prototype = h.prototype;
        (function () {
            function b(a) {
                return (
                    ("object" == typeof a && a.bindKey && a.bindKey.position) ||
                    (a.isDefault ? -100 : 0)
                );
            }
            this.addCommand = function (a) {
                this.commands[a.name] && this.removeCommand(a);
                this.commands[a.name] = a;
                a.bindKey && this._buildKeyHash(a);
            };
            this.removeCommand = function (a, b) {
                var d = a && ("string" == typeof a ? a : a.name);
                a = this.commands[d];
                b || delete this.commands[d];
                b = this.commandKeyBinding;
                for (var c in b)
                    if (((d = b[c]), d == a)) delete b[c];
                    else if (Array.isArray(d)) {
                        var e = d.indexOf(a);
                        -1 != e &&
                            (d.splice(e, 1), 1 == d.length && (b[c] = d[0]));
                    }
            };
            this.bindKey = function (b, d, c) {
                "object" == typeof b &&
                    b &&
                    (void 0 == c && (c = b.position), (b = b[this.platform]));
                if (b) {
                    if ("function" == typeof d)
                        return this.addCommand({
                            exec: d,
                            bindKey: b,
                            name: d.name || b,
                        });
                    b.split("|").forEach(function (b) {
                        var e = "";
                        if (-1 != b.indexOf(" ")) {
                            var f = b.split(/\s+/);
                            b = f.pop();
                            f.forEach(function (b) {
                                b = this.parseKeys(b);
                                e += (e ? " " : "") + (a[b.hashId] + b.key);
                                this._addCommandToBinding(e, "chainKeys");
                            }, this);
                            e += " ";
                        }
                        b = this.parseKeys(b);
                        this._addCommandToBinding(
                            e + (a[b.hashId] + b.key),
                            d,
                            c
                        );
                    }, this);
                }
            };
            this._addCommandToBinding = function (a, d, c) {
                var e = this.commandKeyBinding,
                    l;
                if (d)
                    if (!e[a] || this.$singleCommand) e[a] = d;
                    else {
                        Array.isArray(e[a])
                            ? -1 != (l = e[a].indexOf(d)) && e[a].splice(l, 1)
                            : (e[a] = [e[a]]);
                        "number" != typeof c && (c = b(d));
                        a = e[a];
                        for (l = 0; l < a.length && !(b(a[l]) > c); l++);
                        a.splice(l, 0, d);
                    }
                else delete e[a];
            };
            this.addCommands = function (a) {
                a &&
                    Object.keys(a).forEach(function (b) {
                        var d = a[b];
                        if (d) {
                            if ("string" == typeof d) return this.bindKey(d, b);
                            "function" == typeof d && (d = { exec: d });
                            "object" == typeof d &&
                                (d.name || (d.name = b), this.addCommand(d));
                        }
                    }, this);
            };
            this.removeCommands = function (a) {
                Object.keys(a).forEach(function (b) {
                    this.removeCommand(a[b]);
                }, this);
            };
            this.bindKeys = function (a) {
                Object.keys(a).forEach(function (b) {
                    this.bindKey(b, a[b]);
                }, this);
            };
            this._buildKeyHash = function (a) {
                this.bindKey(a.bindKey, a);
            };
            this.parseKeys = function (a) {
                var b = a
                        .toLowerCase()
                        .split(/[\-\+]([\-\+])?/)
                        .filter(function (a) {
                            return a;
                        }),
                    d = b.pop(),
                    e = c[d];
                if (c.FUNCTION_KEYS[e]) d = c.FUNCTION_KEYS[e].toLowerCase();
                else {
                    if (!b.length) return { key: d, hashId: -1 };
                    if (1 == b.length && "shift" == b[0])
                        return { key: d.toUpperCase(), hashId: -1 };
                }
                for (var e = 0, l = b.length; l--; ) {
                    var g = c.KEY_MODS[b[l]];
                    if (null == g)
                        return (
                            "undefined" != typeof console &&
                                console.error(
                                    "invalid modifier " + b[l] + " in " + a
                                ),
                            !1
                        );
                    e |= g;
                }
                return { key: d, hashId: e };
            };
            this.findKeyCommand = function (b, d) {
                return this.commandKeyBinding[a[b] + d];
            };
            this.handleKeyboard = function (b, d, c, k) {
                if (!(0 > k)) {
                    var e = a[d] + c,
                        f = this.commandKeyBinding[e];
                    b.$keyChain &&
                        ((b.$keyChain += " " + e),
                        (f = this.commandKeyBinding[b.$keyChain] || f));
                    if (
                        f &&
                        ("chainKeys" == f || "chainKeys" == f[f.length - 1])
                    )
                        return (
                            (b.$keyChain = b.$keyChain || e),
                            { command: "null" }
                        );
                    if (b.$keyChain)
                        if ((d && 4 != d) || 1 != c.length) {
                            if (-1 == d || 0 < k) b.$keyChain = "";
                        } else
                            b.$keyChain = b.$keyChain.slice(0, -e.length - 1);
                    return { command: f };
                }
            };
            this.getStatusText = function (a, b) {
                return b.$keyChain || "";
            };
        }.call(h.prototype));
        q.HashHandler = h;
        q.MultiHashHandler = g;
    }
);
ace.define(
    "ace/commands/command_manager",
    "require exports module ace/lib/oop ace/keyboard/hash_handler ace/lib/event_emitter".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../lib/oop"),
            g = n("../keyboard/hash_handler").MultiHashHandler,
            c = n("../lib/event_emitter").EventEmitter;
        n = function (b, a) {
            g.call(this, a, b);
            this.byName = this.commands;
            this.setDefaultHandler("exec", function (a) {
                return a.command.exec(a.editor, a.args || {});
            });
        };
        h.inherits(n, g);
        (function () {
            h.implement(this, c);
            this.exec = function (b, a, d) {
                if (Array.isArray(b)) {
                    for (var c = b.length; c--; )
                        if (this.exec(b[c], a, d)) return !0;
                    return !1;
                }
                "string" == typeof b && (b = this.commands[b]);
                if (
                    !b ||
                    (a && a.$readOnly && !b.readOnly) ||
                    (b.isAvailable && !b.isAvailable(a))
                )
                    return !1;
                b = { editor: a, command: b, args: d };
                return (
                    (b.returnValue = this._emit("exec", b)),
                    this._signal("afterExec", b),
                    !1 === b.returnValue ? !1 : !0
                );
            };
            this.toggleRecording = function (b) {
                if (!this.$inReplay)
                    return (
                        b && b._emit("changeStatus"),
                        this.recording
                            ? (this.macro.pop(),
                              this.removeEventListener(
                                  "exec",
                                  this.$addCommandToMacro
                              ),
                              this.macro.length || (this.macro = this.oldMacro),
                              (this.recording = !1))
                            : (this.$addCommandToMacro ||
                                  (this.$addCommandToMacro = function (a) {
                                      this.macro.push([a.command, a.args]);
                                  }.bind(this)),
                              (this.oldMacro = this.macro),
                              (this.macro = []),
                              this.on("exec", this.$addCommandToMacro),
                              (this.recording = !0))
                    );
            };
            this.replay = function (b) {
                if (!this.$inReplay && this.macro) {
                    if (this.recording) return this.toggleRecording(b);
                    try {
                        (this.$inReplay = !0),
                            this.macro.forEach(function (a) {
                                "string" == typeof a
                                    ? this.exec(a, b)
                                    : this.exec(a[0], b, a[1]);
                            }, this);
                    } finally {
                        this.$inReplay = !1;
                    }
                }
            };
            this.trimMacro = function (b) {
                return b.map(function (a) {
                    return (
                        "string" != typeof a[0] && (a[0] = a[0].name),
                        a[1] || (a = a[0]),
                        a
                    );
                });
            };
        }.call(n.prototype));
        q.CommandManager = n;
    }
);
ace.define(
    "ace/commands/default_commands",
    "require exports module ace/lib/lang ace/config ace/range".split(" "),
    function (n, q, t) {
        function h(a, b) {
            return { win: a, mac: b };
        }
        var g = n("../lib/lang"),
            c = n("../config"),
            b = n("../range").Range;
        q.commands = [
            {
                name: "showSettingsMenu",
                bindKey: h("Ctrl-,", "Command-,"),
                exec: function (a) {
                    c.loadModule("ace/ext/settings_menu", function (b) {
                        b.init(a);
                        a.showSettingsMenu();
                    });
                },
                readOnly: !0,
            },
            {
                name: "goToNextError",
                bindKey: h("Alt-E", "F4"),
                exec: function (a) {
                    c.loadModule("ace/ext/error_marker", function (b) {
                        b.showErrorMarker(a, 1);
                    });
                },
                scrollIntoView: "animate",
                readOnly: !0,
            },
            {
                name: "goToPreviousError",
                bindKey: h("Alt-Shift-E", "Shift-F4"),
                exec: function (a) {
                    c.loadModule("ace/ext/error_marker", function (b) {
                        b.showErrorMarker(a, -1);
                    });
                },
                scrollIntoView: "animate",
                readOnly: !0,
            },
            {
                name: "selectall",
                bindKey: h("Ctrl-A", "Command-A"),
                exec: function (a) {
                    a.selectAll();
                },
                readOnly: !0,
            },
            {
                name: "centerselection",
                bindKey: h(null, "Ctrl-L"),
                exec: function (a) {
                    a.centerSelection();
                },
                readOnly: !0,
            },
            {
                name: "gotoline",
                bindKey: h("Ctrl-L", "Command-L"),
                exec: function (a) {
                    var b = parseInt(prompt("Enter line number:"), 10);
                    isNaN(b) || a.gotoLine(b);
                },
                readOnly: !0,
            },
            {
                name: "fold",
                bindKey: h("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
                exec: function (a) {
                    a.session.toggleFold(!1);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0,
            },
            {
                name: "unfold",
                bindKey: h(
                    "Alt-Shift-L|Ctrl-Shift-F1",
                    "Command-Alt-Shift-L|Command-Shift-F1"
                ),
                exec: function (a) {
                    a.session.toggleFold(!0);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0,
            },
            {
                name: "toggleFoldWidget",
                bindKey: h("F2", "F2"),
                exec: function (a) {
                    a.session.toggleFoldWidget();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0,
            },
            {
                name: "toggleParentFoldWidget",
                bindKey: h("Alt-F2", "Alt-F2"),
                exec: function (a) {
                    a.session.toggleFoldWidget(!0);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0,
            },
            {
                name: "foldall",
                bindKey: h(null, "Ctrl-Command-Option-0"),
                exec: function (a) {
                    a.session.foldAll();
                },
                scrollIntoView: "center",
                readOnly: !0,
            },
            {
                name: "foldOther",
                bindKey: h("Alt-0", "Command-Option-0"),
                exec: function (a) {
                    a.session.foldAll();
                    a.session.unfold(a.selection.getAllRanges());
                },
                scrollIntoView: "center",
                readOnly: !0,
            },
            {
                name: "unfoldall",
                bindKey: h("Alt-Shift-0", "Command-Option-Shift-0"),
                exec: function (a) {
                    a.session.unfold();
                },
                scrollIntoView: "center",
                readOnly: !0,
            },
            {
                name: "findnext",
                bindKey: h("Ctrl-K", "Command-G"),
                exec: function (a) {
                    a.findNext();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0,
            },
            {
                name: "findprevious",
                bindKey: h("Ctrl-Shift-K", "Command-Shift-G"),
                exec: function (a) {
                    a.findPrevious();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: !0,
            },
            {
                name: "selectOrFindNext",
                bindKey: h("Alt-K", "Ctrl-G"),
                exec: function (a) {
                    a.selection.isEmpty()
                        ? a.selection.selectWord()
                        : a.findNext();
                },
                readOnly: !0,
            },
            {
                name: "selectOrFindPrevious",
                bindKey: h("Alt-Shift-K", "Ctrl-Shift-G"),
                exec: function (a) {
                    a.selection.isEmpty()
                        ? a.selection.selectWord()
                        : a.findPrevious();
                },
                readOnly: !0,
            },
            {
                name: "find",
                bindKey: h("Ctrl-F", "Command-F"),
                exec: function (a) {
                    c.loadModule("ace/ext/searchbox", function (b) {
                        b.Search(a);
                    });
                },
                readOnly: !0,
            },
            {
                name: "overwrite",
                bindKey: "Insert",
                exec: function (a) {
                    a.toggleOverwrite();
                },
                readOnly: !0,
            },
            {
                name: "selecttostart",
                bindKey: h(
                    "Ctrl-Shift-Home",
                    "Command-Shift-Home|Command-Shift-Up"
                ),
                exec: function (a) {
                    a.getSelection().selectFileStart();
                },
                multiSelectAction: "forEach",
                readOnly: !0,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump",
            },
            {
                name: "gotostart",
                bindKey: h("Ctrl-Home", "Command-Home|Command-Up"),
                exec: function (a) {
                    a.navigateFileStart();
                },
                multiSelectAction: "forEach",
                readOnly: !0,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump",
            },
            {
                name: "selectup",
                bindKey: h("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
                exec: function (a) {
                    a.getSelection().selectUp();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "golineup",
                bindKey: h("Up", "Up|Ctrl-P"),
                exec: function (a, b) {
                    a.navigateUp(b.times);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selecttoend",
                bindKey: h(
                    "Ctrl-Shift-End",
                    "Command-Shift-End|Command-Shift-Down"
                ),
                exec: function (a) {
                    a.getSelection().selectFileEnd();
                },
                multiSelectAction: "forEach",
                readOnly: !0,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump",
            },
            {
                name: "gotoend",
                bindKey: h("Ctrl-End", "Command-End|Command-Down"),
                exec: function (a) {
                    a.navigateFileEnd();
                },
                multiSelectAction: "forEach",
                readOnly: !0,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump",
            },
            {
                name: "selectdown",
                bindKey: h("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
                exec: function (a) {
                    a.getSelection().selectDown();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "golinedown",
                bindKey: h("Down", "Down|Ctrl-N"),
                exec: function (a, b) {
                    a.navigateDown(b.times);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selectwordleft",
                bindKey: h("Ctrl-Shift-Left", "Option-Shift-Left"),
                exec: function (a) {
                    a.getSelection().selectWordLeft();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "gotowordleft",
                bindKey: h("Ctrl-Left", "Option-Left"),
                exec: function (a) {
                    a.navigateWordLeft();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selecttolinestart",
                bindKey: h("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
                exec: function (a) {
                    a.getSelection().selectLineStart();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "gotolinestart",
                bindKey: h("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
                exec: function (a) {
                    a.navigateLineStart();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selectleft",
                bindKey: h("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
                exec: function (a) {
                    a.getSelection().selectLeft();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "gotoleft",
                bindKey: h("Left", "Left|Ctrl-B"),
                exec: function (a, b) {
                    a.navigateLeft(b.times);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selectwordright",
                bindKey: h("Ctrl-Shift-Right", "Option-Shift-Right"),
                exec: function (a) {
                    a.getSelection().selectWordRight();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "gotowordright",
                bindKey: h("Ctrl-Right", "Option-Right"),
                exec: function (a) {
                    a.navigateWordRight();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selecttolineend",
                bindKey: h(
                    "Alt-Shift-Right",
                    "Command-Shift-Right|Shift-End|Ctrl-Shift-E"
                ),
                exec: function (a) {
                    a.getSelection().selectLineEnd();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "gotolineend",
                bindKey: h("Alt-Right|End", "Command-Right|End|Ctrl-E"),
                exec: function (a) {
                    a.navigateLineEnd();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selectright",
                bindKey: h("Shift-Right", "Shift-Right"),
                exec: function (a) {
                    a.getSelection().selectRight();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "gotoright",
                bindKey: h("Right", "Right|Ctrl-F"),
                exec: function (a, b) {
                    a.navigateRight(b.times);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selectpagedown",
                bindKey: "Shift-PageDown",
                exec: function (a) {
                    a.selectPageDown();
                },
                readOnly: !0,
            },
            {
                name: "pagedown",
                bindKey: h(null, "Option-PageDown"),
                exec: function (a) {
                    a.scrollPageDown();
                },
                readOnly: !0,
            },
            {
                name: "gotopagedown",
                bindKey: h("PageDown", "PageDown|Ctrl-V"),
                exec: function (a) {
                    a.gotoPageDown();
                },
                readOnly: !0,
            },
            {
                name: "selectpageup",
                bindKey: "Shift-PageUp",
                exec: function (a) {
                    a.selectPageUp();
                },
                readOnly: !0,
            },
            {
                name: "pageup",
                bindKey: h(null, "Option-PageUp"),
                exec: function (a) {
                    a.scrollPageUp();
                },
                readOnly: !0,
            },
            {
                name: "gotopageup",
                bindKey: "PageUp",
                exec: function (a) {
                    a.gotoPageUp();
                },
                readOnly: !0,
            },
            {
                name: "scrollup",
                bindKey: h("Ctrl-Up", null),
                exec: function (a) {
                    a.renderer.scrollBy(
                        0,
                        -2 * a.renderer.layerConfig.lineHeight
                    );
                },
                readOnly: !0,
            },
            {
                name: "scrolldown",
                bindKey: h("Ctrl-Down", null),
                exec: function (a) {
                    a.renderer.scrollBy(
                        0,
                        2 * a.renderer.layerConfig.lineHeight
                    );
                },
                readOnly: !0,
            },
            {
                name: "selectlinestart",
                bindKey: "Shift-Home",
                exec: function (a) {
                    a.getSelection().selectLineStart();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selectlineend",
                bindKey: "Shift-End",
                exec: function (a) {
                    a.getSelection().selectLineEnd();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "togglerecording",
                bindKey: h("Ctrl-Alt-E", "Command-Option-E"),
                exec: function (a) {
                    a.commands.toggleRecording(a);
                },
                readOnly: !0,
            },
            {
                name: "replaymacro",
                bindKey: h("Ctrl-Shift-E", "Command-Shift-E"),
                exec: function (a) {
                    a.commands.replay(a);
                },
                readOnly: !0,
            },
            {
                name: "jumptomatching",
                bindKey: h("Ctrl-P", "Ctrl-P"),
                exec: function (a) {
                    a.jumpToMatching();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "animate",
                readOnly: !0,
            },
            {
                name: "selecttomatching",
                bindKey: h("Ctrl-Shift-P", "Ctrl-Shift-P"),
                exec: function (a) {
                    a.jumpToMatching(!0);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "animate",
                readOnly: !0,
            },
            {
                name: "expandToMatching",
                bindKey: h("Ctrl-Shift-M", "Ctrl-Shift-M"),
                exec: function (a) {
                    a.jumpToMatching(!0, !0);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "animate",
                readOnly: !0,
            },
            {
                name: "passKeysToBrowser",
                bindKey: h(null, null),
                exec: function () {},
                passEvent: !0,
                readOnly: !0,
            },
            { name: "copy", exec: function (a) {}, readOnly: !0 },
            {
                name: "cut",
                exec: function (a) {
                    var b = a.getSelectionRange();
                    a._emit("cut", b);
                    a.selection.isEmpty() ||
                        (a.session.remove(b), a.clearSelection());
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach",
            },
            {
                name: "paste",
                exec: function (a, b) {
                    a.$handlePaste(b);
                },
                scrollIntoView: "cursor",
            },
            {
                name: "removeline",
                bindKey: h("Ctrl-D", "Command-D"),
                exec: function (a) {
                    a.removeLines();
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEachLine",
            },
            {
                name: "duplicateSelection",
                bindKey: h("Ctrl-Shift-D", "Command-Shift-D"),
                exec: function (a) {
                    a.duplicateSelection();
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach",
            },
            {
                name: "sortlines",
                bindKey: h("Ctrl-Alt-S", "Command-Alt-S"),
                exec: function (a) {
                    a.sortLines();
                },
                scrollIntoView: "selection",
                multiSelectAction: "forEachLine",
            },
            {
                name: "togglecomment",
                bindKey: h("Ctrl-/", "Command-/"),
                exec: function (a) {
                    a.toggleCommentLines();
                },
                multiSelectAction: "forEachLine",
                scrollIntoView: "selectionPart",
            },
            {
                name: "toggleBlockComment",
                bindKey: h("Ctrl-Shift-/", "Command-Shift-/"),
                exec: function (a) {
                    a.toggleBlockComment();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "selectionPart",
            },
            {
                name: "modifyNumberUp",
                bindKey: h("Ctrl-Shift-Up", "Alt-Shift-Up"),
                exec: function (a) {
                    a.modifyNumber(1);
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach",
            },
            {
                name: "modifyNumberDown",
                bindKey: h("Ctrl-Shift-Down", "Alt-Shift-Down"),
                exec: function (a) {
                    a.modifyNumber(-1);
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach",
            },
            {
                name: "replace",
                bindKey: h("Ctrl-H", "Command-Option-F"),
                exec: function (a) {
                    c.loadModule("ace/ext/searchbox", function (b) {
                        b.Search(a, !0);
                    });
                },
            },
            {
                name: "undo",
                bindKey: h("Ctrl-Z", "Command-Z"),
                exec: function (a) {
                    a.undo();
                },
            },
            {
                name: "redo",
                bindKey: h("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
                exec: function (a) {
                    a.redo();
                },
            },
            {
                name: "copylinesup",
                bindKey: h("Alt-Shift-Up", "Command-Option-Up"),
                exec: function (a) {
                    a.copyLinesUp();
                },
                scrollIntoView: "cursor",
            },
            {
                name: "movelinesup",
                bindKey: h("Alt-Up", "Option-Up"),
                exec: function (a) {
                    a.moveLinesUp();
                },
                scrollIntoView: "cursor",
            },
            {
                name: "copylinesdown",
                bindKey: h("Alt-Shift-Down", "Command-Option-Down"),
                exec: function (a) {
                    a.copyLinesDown();
                },
                scrollIntoView: "cursor",
            },
            {
                name: "movelinesdown",
                bindKey: h("Alt-Down", "Option-Down"),
                exec: function (a) {
                    a.moveLinesDown();
                },
                scrollIntoView: "cursor",
            },
            {
                name: "del",
                bindKey: h("Delete", "Delete|Ctrl-D|Shift-Delete"),
                exec: function (a) {
                    a.remove("right");
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "backspace",
                bindKey: h(
                    "Shift-Backspace|Backspace",
                    "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"
                ),
                exec: function (a) {
                    a.remove("left");
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "cut_or_delete",
                bindKey: h("Shift-Delete", null),
                exec: function (a) {
                    if (!a.selection.isEmpty()) return !1;
                    a.remove("left");
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "removetolinestart",
                bindKey: h("Alt-Backspace", "Command-Backspace"),
                exec: function (a) {
                    a.removeToLineStart();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "removetolineend",
                bindKey: h("Alt-Delete", "Ctrl-K"),
                exec: function (a) {
                    a.removeToLineEnd();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "removewordleft",
                bindKey: h(
                    "Ctrl-Backspace",
                    "Alt-Backspace|Ctrl-Alt-Backspace"
                ),
                exec: function (a) {
                    a.removeWordLeft();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "removewordright",
                bindKey: h("Ctrl-Delete", "Alt-Delete"),
                exec: function (a) {
                    a.removeWordRight();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "outdent",
                bindKey: h("Shift-Tab", "Shift-Tab"),
                exec: function (a) {
                    a.blockOutdent();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "selectionPart",
            },
            {
                name: "indent",
                bindKey: h("Tab", "Tab"),
                exec: function (a) {
                    a.indent();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "selectionPart",
            },
            {
                name: "blockoutdent",
                bindKey: h("Ctrl-[", "Ctrl-["),
                exec: function (a) {
                    a.blockOutdent();
                },
                multiSelectAction: "forEachLine",
                scrollIntoView: "selectionPart",
            },
            {
                name: "blockindent",
                bindKey: h("Ctrl-]", "Ctrl-]"),
                exec: function (a) {
                    a.blockIndent();
                },
                multiSelectAction: "forEachLine",
                scrollIntoView: "selectionPart",
            },
            {
                name: "insertstring",
                exec: function (a, b) {
                    a.insert(b);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "inserttext",
                exec: function (a, b) {
                    a.insert(g.stringRepeat(b.text || "", b.times || 1));
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "splitline",
                bindKey: h(null, "Ctrl-O"),
                exec: function (a) {
                    a.splitLine();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "transposeletters",
                bindKey: h("Alt-Shift-X", "Ctrl-T"),
                exec: function (a) {
                    a.transposeLetters();
                },
                multiSelectAction: function (a) {
                    a.transposeSelections(1);
                },
                scrollIntoView: "cursor",
            },
            {
                name: "touppercase",
                bindKey: h("Ctrl-U", "Ctrl-U"),
                exec: function (a) {
                    a.toUpperCase();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "tolowercase",
                bindKey: h("Ctrl-Shift-U", "Ctrl-Shift-U"),
                exec: function (a) {
                    a.toLowerCase();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
            },
            {
                name: "expandtoline",
                bindKey: h("Ctrl-Shift-L", "Command-Shift-L"),
                exec: function (a) {
                    var b = a.selection.getRange();
                    b.start.column = b.end.column = 0;
                    b.end.row++;
                    a.selection.setRange(b, !1);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "joinlines",
                bindKey: h(null, null),
                exec: function (a) {
                    for (
                        var d = a.selection.isBackwards(),
                            c = d
                                ? a.selection.getSelectionLead()
                                : a.selection.getSelectionAnchor(),
                            d = d
                                ? a.selection.getSelectionAnchor()
                                : a.selection.getSelectionLead(),
                            m = a.session.doc.getLine(c.row).length,
                            f = a.session.doc
                                .getTextRange(a.selection.getRange())
                                .replace(/\n\s*/, " ").length,
                            k = a.session.doc.getLine(c.row),
                            l = c.row + 1;
                        l <= d.row + 1;
                        l++
                    ) {
                        var h = g.stringTrimLeft(
                            g.stringTrimRight(a.session.doc.getLine(l))
                        );
                        0 !== h.length && (h = " " + h);
                        k += h;
                    }
                    d.row + 1 < a.session.doc.getLength() - 1 &&
                        (k += a.session.doc.getNewLineCharacter());
                    a.clearSelection();
                    a.session.doc.replace(new b(c.row, 0, d.row + 2, 0), k);
                    0 < f
                        ? (a.selection.moveCursorTo(c.row, c.column),
                          a.selection.selectTo(c.row, c.column + f))
                        : ((m =
                              a.session.doc.getLine(c.row).length > m
                                  ? m + 1
                                  : m),
                          a.selection.moveCursorTo(c.row, m));
                },
                multiSelectAction: "forEach",
                readOnly: !0,
            },
            {
                name: "invertSelection",
                bindKey: h(null, null),
                exec: function (a) {
                    var d = a.session.doc.getLength() - 1,
                        c = a.session.doc.getLine(d).length,
                        m = a.selection.rangeList.ranges,
                        f = [];
                    1 > m.length && (m = [a.selection.getRange()]);
                    for (var k = 0; k < m.length; k++)
                        k != m.length - 1 ||
                            (m[k].end.row === d && m[k].end.column === c) ||
                            f.push(new b(m[k].end.row, m[k].end.column, d, c)),
                            0 === k
                                ? (0 !== m[k].start.row ||
                                      0 !== m[k].start.column) &&
                                  f.push(
                                      new b(
                                          0,
                                          0,
                                          m[k].start.row,
                                          m[k].start.column
                                      )
                                  )
                                : f.push(
                                      new b(
                                          m[k - 1].end.row,
                                          m[k - 1].end.column,
                                          m[k].start.row,
                                          m[k].start.column
                                      )
                                  );
                    a.exitMultiSelectMode();
                    a.clearSelection();
                    for (k = 0; k < f.length; k++)
                        a.selection.addRange(f[k], !1);
                },
                readOnly: !0,
                scrollIntoView: "none",
            },
        ];
    }
);
ace.define(
    "ace/editor",
    "require exports module ace/lib/fixoldbrowsers ace/lib/oop ace/lib/dom ace/lib/lang ace/lib/useragent ace/keyboard/textinput ace/mouse/mouse_handler ace/mouse/fold_handler ace/keyboard/keybinding ace/edit_session ace/search ace/range ace/lib/event_emitter ace/commands/command_manager ace/commands/default_commands ace/config ace/token_iterator".split(
        " "
    ),
    function (n, q, t) {
        n("./lib/fixoldbrowsers");
        var h = n("./lib/oop"),
            g = n("./lib/dom"),
            c = n("./lib/lang"),
            b = n("./lib/useragent"),
            a = n("./keyboard/textinput").TextInput,
            d = n("./mouse/mouse_handler").MouseHandler,
            e = n("./mouse/fold_handler").FoldHandler,
            m = n("./keyboard/keybinding").KeyBinding,
            f = n("./edit_session").EditSession,
            k = n("./search").Search,
            l = n("./range").Range,
            v = n("./lib/event_emitter").EventEmitter,
            u = n("./commands/command_manager").CommandManager,
            r = n("./commands/default_commands").commands,
            p = n("./config"),
            z = n("./token_iterator").TokenIterator,
            w = function (l, g) {
                this.container = l.getContainerElement();
                this.renderer = l;
                this.id = "editor" + ++w.$uid;
                this.commands = new u(b.isMac ? "mac" : "win", r);
                "object" == typeof document &&
                    ((this.textInput = new a(l.getTextAreaContainer(), this)),
                    (this.renderer.textarea = this.textInput.getElement()),
                    (this.$mouseHandler = new d(this)),
                    new e(this));
                this.keyBinding = new m(this);
                this.$blockScrolling = 0;
                this.$search = new k().set({ wrap: !0 });
                this.$historyTracker = this.$historyTracker.bind(this);
                this.commands.on("exec", this.$historyTracker);
                this.$initOperationListeners();
                this._$emitInputEvent = c.delayedCall(
                    function () {
                        this._signal("input", {});
                        this.session &&
                            this.session.bgTokenizer &&
                            this.session.bgTokenizer.scheduleStart();
                    }.bind(this)
                );
                this.on("change", function (a, b) {
                    b._$emitInputEvent.schedule(31);
                });
                this.setSession(g || new f(""));
                p.resetOptions(this);
                p._signal("editor", this);
            };
        w.$uid = 0;
        (function () {
            h.implement(this, v);
            this.$initOperationListeners = function () {
                this.selections = [];
                this.commands.on("exec", this.startOperation.bind(this), !0);
                this.commands.on("afterExec", this.endOperation.bind(this), !0);
                this.$opResetTimer = c.delayedCall(
                    this.endOperation.bind(this)
                );
                this.on(
                    "change",
                    function () {
                        this.curOp || this.startOperation();
                        this.curOp.docChanged = !0;
                    }.bind(this),
                    !0
                );
                this.on(
                    "changeSelection",
                    function () {
                        this.curOp || this.startOperation();
                        this.curOp.selectionChanged = !0;
                    }.bind(this),
                    !0
                );
            };
            this.curOp = null;
            this.prevOp = {};
            this.startOperation = function (a) {
                if (this.curOp) {
                    if (!a || this.curOp.command) return;
                    this.prevOp = this.curOp;
                }
                a || ((this.previousCommand = null), (a = {}));
                this.$opResetTimer.schedule();
                this.curOp = {
                    command: a.command || {},
                    args: a.args,
                    scrollTop: this.renderer.scrollTop,
                };
                this.curOp.command.name &&
                    void 0 !== this.curOp.command.scrollIntoView &&
                    this.$blockScrolling++;
            };
            this.endOperation = function (a) {
                if (this.curOp) {
                    if (a && !1 === a.returnValue) return (this.curOp = null);
                    this._signal("beforeEndOperation");
                    a = this.curOp.command;
                    a.name &&
                        0 < this.$blockScrolling &&
                        this.$blockScrolling--;
                    if ((a = a && a.scrollIntoView)) {
                        switch (a) {
                            case "center-animate":
                                a = "animate";
                            case "center":
                                this.renderer.scrollCursorIntoView(null, 0.5);
                                break;
                            case "animate":
                            case "cursor":
                                this.renderer.scrollCursorIntoView();
                                break;
                            case "selectionPart":
                                var b = this.selection.getRange(),
                                    d = this.renderer.layerConfig;
                                (b.start.row >= d.lastRow ||
                                    b.end.row <= d.firstRow) &&
                                    this.renderer.scrollSelectionIntoView(
                                        this.selection.anchor,
                                        this.selection.lead
                                    );
                        }
                        "animate" == a &&
                            this.renderer.animateScrolling(
                                this.curOp.scrollTop
                            );
                    }
                    this.prevOp = this.curOp;
                    this.curOp = null;
                }
            };
            this.$mergeableCommands = ["backspace", "del", "insertstring"];
            this.$historyTracker = function (a) {
                if (this.$mergeUndoDeltas) {
                    var b = this.prevOp,
                        d = this.$mergeableCommands,
                        c = b.command && a.command.name == b.command.name;
                    if ("insertstring" == a.command.name) {
                        var e = a.args;
                        void 0 === this.mergeNextCommand &&
                            (this.mergeNextCommand = !0);
                        c =
                            c &&
                            this.mergeNextCommand &&
                            (!/\s/.test(e) || /\s/.test(b.args));
                        this.mergeNextCommand = !0;
                    } else c = c && -1 !== d.indexOf(a.command.name);
                    "always" != this.$mergeUndoDeltas &&
                        2e3 < Date.now() - this.sequenceStartTime &&
                        (c = !1);
                    c
                        ? (this.session.mergeUndoDeltas = !0)
                        : -1 !== d.indexOf(a.command.name) &&
                          (this.sequenceStartTime = Date.now());
                }
            };
            this.setKeyboardHandler = function (a, b) {
                if (a && "string" == typeof a) {
                    this.$keybindingId = a;
                    var d = this;
                    p.loadModule(["keybinding", a], function (c) {
                        d.$keybindingId == a &&
                            d.keyBinding.setKeyboardHandler(c && c.handler);
                        b && b();
                    });
                } else
                    (this.$keybindingId = null),
                        this.keyBinding.setKeyboardHandler(a),
                        b && b();
            };
            this.getKeyboardHandler = function () {
                return this.keyBinding.getKeyboardHandler();
            };
            this.setSession = function (a) {
                if (this.session != a) {
                    this.curOp && this.endOperation();
                    this.curOp = {};
                    var b = this.session;
                    if (b) {
                        this.session.off("change", this.$onDocumentChange);
                        this.session.off("changeMode", this.$onChangeMode);
                        this.session.off(
                            "tokenizerUpdate",
                            this.$onTokenizerUpdate
                        );
                        this.session.off(
                            "changeTabSize",
                            this.$onChangeTabSize
                        );
                        this.session.off(
                            "changeWrapLimit",
                            this.$onChangeWrapLimit
                        );
                        this.session.off(
                            "changeWrapMode",
                            this.$onChangeWrapMode
                        );
                        this.session.off("changeFold", this.$onChangeFold);
                        this.session.off(
                            "changeFrontMarker",
                            this.$onChangeFrontMarker
                        );
                        this.session.off(
                            "changeBackMarker",
                            this.$onChangeBackMarker
                        );
                        this.session.off(
                            "changeBreakpoint",
                            this.$onChangeBreakpoint
                        );
                        this.session.off(
                            "changeAnnotation",
                            this.$onChangeAnnotation
                        );
                        this.session.off(
                            "changeOverwrite",
                            this.$onCursorChange
                        );
                        this.session.off(
                            "changeScrollTop",
                            this.$onScrollTopChange
                        );
                        this.session.off(
                            "changeScrollLeft",
                            this.$onScrollLeftChange
                        );
                        var d = this.session.getSelection();
                        d.off("changeCursor", this.$onCursorChange);
                        d.off("changeSelection", this.$onSelectionChange);
                    }
                    (this.session = a)
                        ? ((this.$onDocumentChange = this.onDocumentChange.bind(
                              this
                          )),
                          a.on("change", this.$onDocumentChange),
                          this.renderer.setSession(a),
                          (this.$onChangeMode = this.onChangeMode.bind(this)),
                          a.on("changeMode", this.$onChangeMode),
                          (this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(
                              this
                          )),
                          a.on("tokenizerUpdate", this.$onTokenizerUpdate),
                          (this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(
                              this.renderer
                          )),
                          a.on("changeTabSize", this.$onChangeTabSize),
                          (this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(
                              this
                          )),
                          a.on("changeWrapLimit", this.$onChangeWrapLimit),
                          (this.$onChangeWrapMode = this.onChangeWrapMode.bind(
                              this
                          )),
                          a.on("changeWrapMode", this.$onChangeWrapMode),
                          (this.$onChangeFold = this.onChangeFold.bind(this)),
                          a.on("changeFold", this.$onChangeFold),
                          (this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(
                              this
                          )),
                          this.session.on(
                              "changeFrontMarker",
                              this.$onChangeFrontMarker
                          ),
                          (this.$onChangeBackMarker = this.onChangeBackMarker.bind(
                              this
                          )),
                          this.session.on(
                              "changeBackMarker",
                              this.$onChangeBackMarker
                          ),
                          (this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(
                              this
                          )),
                          this.session.on(
                              "changeBreakpoint",
                              this.$onChangeBreakpoint
                          ),
                          (this.$onChangeAnnotation = this.onChangeAnnotation.bind(
                              this
                          )),
                          this.session.on(
                              "changeAnnotation",
                              this.$onChangeAnnotation
                          ),
                          (this.$onCursorChange = this.onCursorChange.bind(
                              this
                          )),
                          this.session.on(
                              "changeOverwrite",
                              this.$onCursorChange
                          ),
                          (this.$onScrollTopChange = this.onScrollTopChange.bind(
                              this
                          )),
                          this.session.on(
                              "changeScrollTop",
                              this.$onScrollTopChange
                          ),
                          (this.$onScrollLeftChange = this.onScrollLeftChange.bind(
                              this
                          )),
                          this.session.on(
                              "changeScrollLeft",
                              this.$onScrollLeftChange
                          ),
                          (this.selection = a.getSelection()),
                          this.selection.on(
                              "changeCursor",
                              this.$onCursorChange
                          ),
                          (this.$onSelectionChange = this.onSelectionChange.bind(
                              this
                          )),
                          this.selection.on(
                              "changeSelection",
                              this.$onSelectionChange
                          ),
                          this.onChangeMode(),
                          (this.$blockScrolling += 1),
                          this.onCursorChange(),
                          --this.$blockScrolling,
                          this.onScrollTopChange(),
                          this.onScrollLeftChange(),
                          this.onSelectionChange(),
                          this.onChangeFrontMarker(),
                          this.onChangeBackMarker(),
                          this.onChangeBreakpoint(),
                          this.onChangeAnnotation(),
                          this.session.getUseWrapMode() &&
                              this.renderer.adjustWrapLimit(),
                          this.renderer.updateFull())
                        : ((this.selection = null),
                          this.renderer.setSession(a));
                    this._signal("changeSession", {
                        session: a,
                        oldSession: b,
                    });
                    this.curOp = null;
                    b && b._signal("changeEditor", { oldEditor: this });
                    a && a._signal("changeEditor", { editor: this });
                    a && a.bgTokenizer && a.bgTokenizer.scheduleStart();
                }
            };
            this.getSession = function () {
                return this.session;
            };
            this.setValue = function (a, b) {
                return (
                    this.session.doc.setValue(a),
                    b
                        ? 1 == b
                            ? this.navigateFileEnd()
                            : -1 == b && this.navigateFileStart()
                        : this.selectAll(),
                    a
                );
            };
            this.getValue = function () {
                return this.session.getValue();
            };
            this.getSelection = function () {
                return this.selection;
            };
            this.resize = function (a) {
                this.renderer.onResize(a);
            };
            this.setTheme = function (a, b) {
                this.renderer.setTheme(a, b);
            };
            this.getTheme = function () {
                return this.renderer.getTheme();
            };
            this.setStyle = function (a) {
                this.renderer.setStyle(a);
            };
            this.unsetStyle = function (a) {
                this.renderer.unsetStyle(a);
            };
            this.getFontSize = function () {
                return (
                    this.getOption("fontSize") ||
                    g.computedStyle(this.container, "fontSize")
                );
            };
            this.setFontSize = function (a) {
                this.setOption("fontSize", a);
            };
            this.$highlightBrackets = function () {
                this.session.$bracketHighlight &&
                    (this.session.removeMarker(this.session.$bracketHighlight),
                    (this.session.$bracketHighlight = null));
                if (!this.$highlightPending) {
                    var a = this;
                    this.$highlightPending = !0;
                    setTimeout(function () {
                        var b;
                        a.$highlightPending = !1;
                        var d = a.session;
                        if (d && d.bgTokenizer) {
                            var c = d.findMatchingBracket(
                                a.getCursorPosition()
                            );
                            c
                                ? (b = new l(
                                      c.row,
                                      c.column,
                                      c.row,
                                      c.column + 1
                                  ))
                                : d.$mode.getMatching &&
                                  (b = d.$mode.getMatching(a.session));
                            b &&
                                (d.$bracketHighlight = d.addMarker(
                                    b,
                                    "ace_bracket",
                                    "text"
                                ));
                        }
                    }, 50);
                }
            };
            this.$highlightTags = function () {
                if (!this.$highlightTagPending) {
                    var a = this;
                    this.$highlightTagPending = !0;
                    setTimeout(function () {
                        a.$highlightTagPending = !1;
                        var b = a.session;
                        if (b && b.bgTokenizer) {
                            var d = a.getCursorPosition(),
                                c = new z(a.session, d.row, d.column);
                            if (
                                (d = c.getCurrentToken()) &&
                                /\b(?:tag-open|tag-name)/.test(d.type)
                            ) {
                                if (
                                    -1 != d.type.indexOf("tag-open") &&
                                    ((d = c.stepForward()), !d)
                                )
                                    return;
                                var e = d.value,
                                    p = 0,
                                    f = c.stepBackward();
                                if ("<" == f.value) {
                                    do
                                        (f = d),
                                            (d = c.stepForward()) &&
                                                d.value === e &&
                                                -1 !==
                                                    d.type.indexOf(
                                                        "tag-name"
                                                    ) &&
                                                ("<" === f.value
                                                    ? p++
                                                    : "</" === f.value && p--);
                                    while (d && 0 <= p);
                                } else {
                                    do
                                        (d = f),
                                            (f = c.stepBackward()),
                                            d &&
                                                d.value === e &&
                                                -1 !==
                                                    d.type.indexOf(
                                                        "tag-name"
                                                    ) &&
                                                ("<" === f.value
                                                    ? p++
                                                    : "</" === f.value && p--);
                                    while (f && 0 >= p);
                                    c.stepForward();
                                }
                                d
                                    ? ((e = c.getCurrentTokenRow()),
                                      (c = c.getCurrentTokenColumn()),
                                      (d = new l(e, c, e, c + d.value.length)),
                                      (c = b.$backMarkers[b.$tagHighlight]),
                                      b.$tagHighlight &&
                                          void 0 != c &&
                                          0 !== d.compareRange(c.range) &&
                                          (b.removeMarker(b.$tagHighlight),
                                          (b.$tagHighlight = null)),
                                      d &&
                                          !b.$tagHighlight &&
                                          (b.$tagHighlight = b.addMarker(
                                              d,
                                              "ace_bracket",
                                              "text"
                                          )))
                                    : (b.removeMarker(b.$tagHighlight),
                                      (b.$tagHighlight = null));
                            } else
                                b.removeMarker(b.$tagHighlight),
                                    (b.$tagHighlight = null);
                        }
                    }, 50);
                }
            };
            this.focus = function () {
                var a = this;
                setTimeout(function () {
                    a.textInput.focus();
                });
                this.textInput.focus();
            };
            this.isFocused = function () {
                return this.textInput.isFocused();
            };
            this.blur = function () {
                this.textInput.blur();
            };
            this.onFocus = function (a) {
                this.$isFocused ||
                    ((this.$isFocused = !0),
                    this.renderer.showCursor(),
                    this.renderer.visualizeFocus(),
                    this._emit("focus", a));
            };
            this.onBlur = function (a) {
                this.$isFocused &&
                    ((this.$isFocused = !1),
                    this.renderer.hideCursor(),
                    this.renderer.visualizeBlur(),
                    this._emit("blur", a));
            };
            this.$cursorChange = function () {
                this.renderer.updateCursor();
            };
            this.onDocumentChange = function (a) {
                this.renderer.updateLines(
                    a.start.row,
                    a.start.row == a.end.row ? a.end.row : Infinity,
                    this.session.$useWrapMode
                );
                this._signal("change", a);
                this.$cursorChange();
                this.$updateHighlightActiveLine();
            };
            this.onTokenizerUpdate = function (a) {
                a = a.data;
                this.renderer.updateLines(a.first, a.last);
            };
            this.onScrollTopChange = function () {
                this.renderer.scrollToY(this.session.getScrollTop());
            };
            this.onScrollLeftChange = function () {
                this.renderer.scrollToX(this.session.getScrollLeft());
            };
            this.onCursorChange = function () {
                this.$cursorChange();
                this.$blockScrolling ||
                    (p.warn(
                        "Automatically scrolling cursor into view after selection change",
                        "this will be disabled in the next version",
                        "set editor.$blockScrolling = Infinity to disable this message"
                    ),
                    this.renderer.scrollCursorIntoView());
                this.$highlightBrackets();
                this.$highlightTags();
                this.$updateHighlightActiveLine();
                this._signal("changeSelection");
            };
            this.$updateHighlightActiveLine = function () {
                var a = this.getSession(),
                    b;
                this.$highlightActiveLine &&
                    (("line" == this.$selectionStyle &&
                        this.selection.isMultiLine()) ||
                        (b = this.getCursorPosition()),
                    !this.renderer.$maxLines ||
                        1 !== this.session.getLength() ||
                        1 < this.renderer.$minLines ||
                        (b = !1));
                a.$highlightLineMarker && !b
                    ? (a.removeMarker(a.$highlightLineMarker.id),
                      (a.$highlightLineMarker = null))
                    : !a.$highlightLineMarker && b
                    ? ((b = new l(b.row, b.column, b.row, Infinity)),
                      (b.id = a.addMarker(b, "ace_active-line", "screenLine")),
                      (a.$highlightLineMarker = b))
                    : b &&
                      ((a.$highlightLineMarker.start.row = b.row),
                      (a.$highlightLineMarker.end.row = b.row),
                      (a.$highlightLineMarker.start.column = b.column),
                      a._signal("changeBackMarker"));
            };
            this.onSelectionChange = function (a) {
                a = this.session;
                a.$selectionMarker && a.removeMarker(a.$selectionMarker);
                a.$selectionMarker = null;
                if (this.selection.isEmpty()) this.$updateHighlightActiveLine();
                else {
                    var b = this.selection.getRange(),
                        d = this.getSelectionStyle();
                    a.$selectionMarker = a.addMarker(b, "ace_selection", d);
                }
                a =
                    this.$highlightSelectedWord &&
                    this.$getSelectionHighLightRegexp();
                this.session.highlight(a);
                this._signal("changeSelection");
            };
            this.$getSelectionHighLightRegexp = function () {
                var a = this.session,
                    b = this.getSelectionRange();
                if (!b.isEmpty() && !b.isMultiLine()) {
                    var d = b.start.column - 1,
                        c = b.end.column + 1,
                        a = a.getLine(b.start.row),
                        e = a.length,
                        l = a.substring(Math.max(d, 0), Math.min(c, e));
                    if (
                        !(
                            (0 <= d && /^[\w\d]/.test(l)) ||
                            (c <= e && /[\w\d]$/.test(l))
                        ) &&
                        ((l = a.substring(b.start.column, b.end.column)),
                        /^[\w\d]+$/.test(l))
                    )
                        return this.$search.$assembleRegExp({
                            wholeWord: !0,
                            caseSensitive: !0,
                            needle: l,
                        });
                }
            };
            this.onChangeFrontMarker = function () {
                this.renderer.updateFrontMarkers();
            };
            this.onChangeBackMarker = function () {
                this.renderer.updateBackMarkers();
            };
            this.onChangeBreakpoint = function () {
                this.renderer.updateBreakpoints();
            };
            this.onChangeAnnotation = function () {
                this.renderer.setAnnotations(this.session.getAnnotations());
            };
            this.onChangeMode = function (a) {
                this.renderer.updateText();
                this._emit("changeMode", a);
            };
            this.onChangeWrapLimit = function () {
                this.renderer.updateFull();
            };
            this.onChangeWrapMode = function () {
                this.renderer.onResize(!0);
            };
            this.onChangeFold = function () {
                this.$updateHighlightActiveLine();
                this.renderer.updateFull();
            };
            this.getSelectedText = function () {
                return this.session.getTextRange(this.getSelectionRange());
            };
            this.getCopyText = function () {
                var a = this.getSelectedText();
                return this._signal("copy", a), a;
            };
            this.onCopy = function () {
                this.commands.exec("copy", this);
            };
            this.onCut = function () {
                this.commands.exec("cut", this);
            };
            this.onPaste = function (a, b) {
                this.commands.exec("paste", this, { text: a, event: b });
            };
            this.$handlePaste = function (a) {
                "string" == typeof a && (a = { text: a });
                this._signal("paste", a);
                var b = a.text;
                if (!this.inMultiSelectMode || this.inVirtualSelectionMode)
                    this.insert(b);
                else {
                    a = b.split(/\r\n|\r|\n/);
                    var d = this.selection.rangeList.ranges;
                    if (a.length > d.length || 2 > a.length || !a[1])
                        return this.commands.exec("insertstring", this, b);
                    for (b = d.length; b--; ) {
                        var c = d[b];
                        c.isEmpty() || this.session.remove(c);
                        this.session.insert(c.start, a[b]);
                    }
                }
            };
            this.execCommand = function (a, b) {
                return this.commands.exec(a, this, b);
            };
            this.insert = function (a, b) {
                var d,
                    c = this.session,
                    e = c.getMode(),
                    p = this.getCursorPosition();
                this.getBehavioursEnabled() &&
                    !b &&
                    (d = e.transformAction(
                        c.getState(p.row),
                        "insertion",
                        this,
                        c,
                        a
                    )) &&
                    (a !== d.text &&
                        ((this.session.mergeUndoDeltas = !1),
                        (this.$mergeNextCommand = !1)),
                    (a = d.text));
                "\t" == a && (a = this.session.getTabString());
                this.selection.isEmpty()
                    ? this.session.getOverwrite() &&
                      -1 == a.indexOf("\n") &&
                      ((b = new l.fromPoints(p, p)),
                      (b.end.column += a.length),
                      this.session.remove(b))
                    : ((b = this.getSelectionRange()),
                      (p = this.session.remove(b)),
                      this.clearSelection());
                if ("\n" == a || "\r\n" == a) {
                    var f = c.getLine(p.row);
                    p.column > f.search(/\S|$/) &&
                        ((b = f.substr(p.column).search(/\S|$/)),
                        c.doc.removeInLine(p.row, p.column, p.column + b));
                }
                this.clearSelection();
                var m = p.column;
                b = c.getState(p.row);
                f = c.getLine(p.row);
                var k = e.checkOutdent(b, f, a);
                c.insert(p, a);
                d &&
                    d.selection &&
                    (2 == d.selection.length
                        ? this.selection.setSelectionRange(
                              new l(
                                  p.row,
                                  m + d.selection[0],
                                  p.row,
                                  m + d.selection[1]
                              )
                          )
                        : this.selection.setSelectionRange(
                              new l(
                                  p.row + d.selection[0],
                                  d.selection[1],
                                  p.row + d.selection[2],
                                  d.selection[3]
                              )
                          ));
                c.getDocument().isNewLine(a) &&
                    ((a = e.getNextLineIndent(
                        b,
                        f.slice(0, p.column),
                        c.getTabString()
                    )),
                    c.insert({ row: p.row + 1, column: 0 }, a));
                k && e.autoOutdent(b, c, p.row);
            };
            this.onTextInput = function (a) {
                this.keyBinding.onTextInput(a);
            };
            this.onCommandKey = function (a, b, d) {
                this.keyBinding.onCommandKey(a, b, d);
            };
            this.setOverwrite = function (a) {
                this.session.setOverwrite(a);
            };
            this.getOverwrite = function () {
                return this.session.getOverwrite();
            };
            this.toggleOverwrite = function () {
                this.session.toggleOverwrite();
            };
            this.setScrollSpeed = function (a) {
                this.setOption("scrollSpeed", a);
            };
            this.getScrollSpeed = function () {
                return this.getOption("scrollSpeed");
            };
            this.setDragDelay = function (a) {
                this.setOption("dragDelay", a);
            };
            this.getDragDelay = function () {
                return this.getOption("dragDelay");
            };
            this.setSelectionStyle = function (a) {
                this.setOption("selectionStyle", a);
            };
            this.getSelectionStyle = function () {
                return this.getOption("selectionStyle");
            };
            this.setHighlightActiveLine = function (a) {
                this.setOption("highlightActiveLine", a);
            };
            this.getHighlightActiveLine = function () {
                return this.getOption("highlightActiveLine");
            };
            this.setHighlightGutterLine = function (a) {
                this.setOption("highlightGutterLine", a);
            };
            this.getHighlightGutterLine = function () {
                return this.getOption("highlightGutterLine");
            };
            this.setHighlightSelectedWord = function (a) {
                this.setOption("highlightSelectedWord", a);
            };
            this.getHighlightSelectedWord = function () {
                return this.$highlightSelectedWord;
            };
            this.setAnimatedScroll = function (a) {
                this.renderer.setAnimatedScroll(a);
            };
            this.getAnimatedScroll = function () {
                return this.renderer.getAnimatedScroll();
            };
            this.setShowInvisibles = function (a) {
                this.renderer.setShowInvisibles(a);
            };
            this.getShowInvisibles = function () {
                return this.renderer.getShowInvisibles();
            };
            this.setDisplayIndentGuides = function (a) {
                this.renderer.setDisplayIndentGuides(a);
            };
            this.getDisplayIndentGuides = function () {
                return this.renderer.getDisplayIndentGuides();
            };
            this.setShowPrintMargin = function (a) {
                this.renderer.setShowPrintMargin(a);
            };
            this.getShowPrintMargin = function () {
                return this.renderer.getShowPrintMargin();
            };
            this.setPrintMarginColumn = function (a) {
                this.renderer.setPrintMarginColumn(a);
            };
            this.getPrintMarginColumn = function () {
                return this.renderer.getPrintMarginColumn();
            };
            this.setReadOnly = function (a) {
                this.setOption("readOnly", a);
            };
            this.getReadOnly = function () {
                return this.getOption("readOnly");
            };
            this.setBehavioursEnabled = function (a) {
                this.setOption("behavioursEnabled", a);
            };
            this.getBehavioursEnabled = function () {
                return this.getOption("behavioursEnabled");
            };
            this.setWrapBehavioursEnabled = function (a) {
                this.setOption("wrapBehavioursEnabled", a);
            };
            this.getWrapBehavioursEnabled = function () {
                return this.getOption("wrapBehavioursEnabled");
            };
            this.setShowFoldWidgets = function (a) {
                this.setOption("showFoldWidgets", a);
            };
            this.getShowFoldWidgets = function () {
                return this.getOption("showFoldWidgets");
            };
            this.setFadeFoldWidgets = function (a) {
                this.setOption("fadeFoldWidgets", a);
            };
            this.getFadeFoldWidgets = function () {
                return this.getOption("fadeFoldWidgets");
            };
            this.remove = function (a) {
                this.selection.isEmpty() &&
                    ("left" == a
                        ? this.selection.selectLeft()
                        : this.selection.selectRight());
                a = this.getSelectionRange();
                if (this.getBehavioursEnabled()) {
                    var b = this.session,
                        d = b.getState(a.start.row),
                        d = b
                            .getMode()
                            .transformAction(d, "deletion", this, b, a);
                    if (0 === a.end.column) {
                        var c = b.getTextRange(a);
                        "\n" == c[c.length - 1] &&
                            ((b = b.getLine(a.end.row)),
                            /^\s+$/.test(b) && (a.end.column = b.length));
                    }
                    d && (a = d);
                }
                this.session.remove(a);
                this.clearSelection();
            };
            this.removeWordRight = function () {
                this.selection.isEmpty() && this.selection.selectWordRight();
                this.session.remove(this.getSelectionRange());
                this.clearSelection();
            };
            this.removeWordLeft = function () {
                this.selection.isEmpty() && this.selection.selectWordLeft();
                this.session.remove(this.getSelectionRange());
                this.clearSelection();
            };
            this.removeToLineStart = function () {
                this.selection.isEmpty() && this.selection.selectLineStart();
                this.session.remove(this.getSelectionRange());
                this.clearSelection();
            };
            this.removeToLineEnd = function () {
                this.selection.isEmpty() && this.selection.selectLineEnd();
                var a = this.getSelectionRange();
                a.start.column == a.end.column &&
                    a.start.row == a.end.row &&
                    ((a.end.column = 0), a.end.row++);
                this.session.remove(a);
                this.clearSelection();
            };
            this.splitLine = function () {
                this.selection.isEmpty() ||
                    (this.session.remove(this.getSelectionRange()),
                    this.clearSelection());
                var a = this.getCursorPosition();
                this.insert("\n");
                this.moveCursorToPosition(a);
            };
            this.transposeLetters = function () {
                if (this.selection.isEmpty()) {
                    var a = this.getCursorPosition(),
                        b = a.column;
                    if (0 !== b) {
                        var d = this.session.getLine(a.row),
                            c,
                            e;
                        b < d.length
                            ? ((c = d.charAt(b) + d.charAt(b - 1)),
                              (e = new l(a.row, b - 1, a.row, b + 1)))
                            : ((c = d.charAt(b - 1) + d.charAt(b - 2)),
                              (e = new l(a.row, b - 2, a.row, b)));
                        this.session.replace(e, c);
                        this.session.selection.moveToPosition(e.end);
                    }
                }
            };
            this.toLowerCase = function () {
                var a = this.getSelectionRange();
                this.selection.isEmpty() && this.selection.selectWord();
                var b = this.getSelectionRange(),
                    d = this.session.getTextRange(b);
                this.session.replace(b, d.toLowerCase());
                this.selection.setSelectionRange(a);
            };
            this.toUpperCase = function () {
                var a = this.getSelectionRange();
                this.selection.isEmpty() && this.selection.selectWord();
                var b = this.getSelectionRange(),
                    d = this.session.getTextRange(b);
                this.session.replace(b, d.toUpperCase());
                this.selection.setSelectionRange(a);
            };
            this.indent = function () {
                var a = this.session;
                var b = this.getSelectionRange();
                if (b.start.row < b.end.row)
                    (b = this.$getSelectedRows()),
                        a.indentRows(b.first, b.last, "\t");
                else {
                    if (b.start.column < b.end.column) {
                        var d = a.getTextRange(b);
                        if (!/^\s+$/.test(d)) {
                            b = this.$getSelectedRows();
                            a.indentRows(b.first, b.last, "\t");
                            return;
                        }
                    }
                    var d = a.getLine(b.start.row),
                        e = b.start,
                        l = a.getTabSize();
                    a = a.documentToScreenColumn(e.row, e.column);
                    if (this.session.getUseSoftTabs())
                        b = c.stringRepeat(" ", l - (a % l));
                    else {
                        for (a %= l; " " == d[b.start.column - 1] && a; )
                            b.start.column--, a--;
                        this.selection.setSelectionRange(b);
                        b = "\t";
                    }
                    return this.insert(b);
                }
            };
            this.blockIndent = function () {
                var a = this.$getSelectedRows();
                this.session.indentRows(a.first, a.last, "\t");
            };
            this.blockOutdent = function () {
                var a = this.session.getSelection();
                this.session.outdentRows(a.getRange());
            };
            this.sortLines = function () {
                for (
                    var a = this.$getSelectedRows(),
                        b = this.session,
                        d = [],
                        c = a.first;
                    c <= a.last;
                    c++
                )
                    d.push(b.getLine(c));
                d.sort(function (a, b) {
                    return a.toLowerCase() < b.toLowerCase()
                        ? -1
                        : a.toLowerCase() > b.toLowerCase()
                        ? 1
                        : 0;
                });
                for (var e = new l(0, 0, 0, 0), c = a.first; c <= a.last; c++) {
                    var p = b.getLine(c);
                    e.start.row = c;
                    e.end.row = c;
                    e.end.column = p.length;
                    b.replace(e, d[c - a.first]);
                }
            };
            this.toggleCommentLines = function () {
                var a = this.session.getState(this.getCursorPosition().row),
                    b = this.$getSelectedRows();
                this.session
                    .getMode()
                    .toggleCommentLines(a, this.session, b.first, b.last);
            };
            this.toggleBlockComment = function () {
                var a = this.getCursorPosition(),
                    b = this.session.getState(a.row),
                    d = this.getSelectionRange();
                this.session
                    .getMode()
                    .toggleBlockComment(b, this.session, d, a);
            };
            this.getNumberAt = function (a, b) {
                var d = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
                d.lastIndex = 0;
                for (a = this.session.getLine(a); d.lastIndex < b; ) {
                    var c = d.exec(a);
                    if (c.index <= b && c.index + c[0].length >= b)
                        return {
                            value: c[0],
                            start: c.index,
                            end: c.index + c[0].length,
                        };
                }
                return null;
            };
            this.modifyNumber = function (a) {
                var b = this.selection.getCursor().row,
                    d = this.selection.getCursor().column,
                    c = new l(b, d - 1, b, d),
                    c = this.session.getTextRange(c);
                if (
                    !isNaN(parseFloat(c)) &&
                    isFinite(c) &&
                    (c = this.getNumberAt(b, d))
                ) {
                    var e =
                            0 <= c.value.indexOf(".")
                                ? c.start + c.value.indexOf(".") + 1
                                : c.end,
                        p = c.start + c.value.length - e,
                        f = parseFloat(c.value),
                        f = f * Math.pow(10, p);
                    e !== c.end && d < e
                        ? (a *= Math.pow(10, c.end - d - 1))
                        : (a *= Math.pow(10, c.end - d));
                    f = (f + a) / Math.pow(10, p);
                    a = f.toFixed(p);
                    e = new l(b, c.start, b, c.end);
                    this.session.replace(e, a);
                    this.moveCursorTo(
                        b,
                        Math.max(c.start + 1, d + a.length - c.value.length)
                    );
                }
            };
            this.removeLines = function () {
                var a = this.$getSelectedRows();
                this.session.removeFullLines(a.first, a.last);
                this.clearSelection();
            };
            this.duplicateSelection = function () {
                var a = this.selection,
                    b = this.session,
                    d = a.getRange(),
                    c = a.isBackwards();
                if (d.isEmpty()) (a = d.start.row), b.duplicateLines(a, a);
                else {
                    var e = c ? d.start : d.end,
                        b = b.insert(e, b.getTextRange(d), !1);
                    d.start = e;
                    d.end = b;
                    a.setSelectionRange(d, c);
                }
            };
            this.moveLinesDown = function () {
                this.$moveLines(1, !1);
            };
            this.moveLinesUp = function () {
                this.$moveLines(-1, !1);
            };
            this.moveText = function (a, b, d) {
                return this.session.moveText(a, b, d);
            };
            this.copyLinesUp = function () {
                this.$moveLines(-1, !0);
            };
            this.copyLinesDown = function () {
                this.$moveLines(1, !0);
            };
            this.$moveLines = function (a, b) {
                var d = this.selection;
                if (!d.inMultiSelectMode || this.inVirtualSelectionMode) {
                    var c = d.toOrientedRange();
                    var e = this.$getSelectedRows(c);
                    var l = this.session.$moveLines(e.first, e.last, b ? 0 : a);
                    b && -1 == a && (l = 0);
                    c.moveBy(l, 0);
                    d.fromOrientedRange(c);
                } else {
                    c = d.rangeList.ranges;
                    d.rangeList.detach(this.session);
                    this.inVirtualSelectionMode = !0;
                    var p = 0;
                    l = 0;
                    for (var f = c.length, m = 0; m < f; m++) {
                        var k = m;
                        c[m].moveBy(p, 0);
                        e = this.$getSelectedRows(c[m]);
                        p = e.first;
                        for (e = e.last; ++m < f; ) {
                            l && c[m].moveBy(l, 0);
                            var r = this.$getSelectedRows(c[m]);
                            if (b && r.first != e) break;
                            if (!b && r.first > e + 1) break;
                            e = r.last;
                        }
                        m--;
                        p = this.session.$moveLines(p, e, b ? 0 : a);
                        for (b && -1 == a && (k = m + 1); k <= m; )
                            c[k].moveBy(p, 0), k++;
                        b || (p = 0);
                        l += p;
                    }
                    d.fromOrientedRange(d.ranges[0]);
                    d.rangeList.attach(this.session);
                    this.inVirtualSelectionMode = !1;
                }
            };
            this.$getSelectedRows = function (a) {
                return (
                    (a = (a || this.getSelectionRange()).collapseRows()),
                    {
                        first: this.session.getRowFoldStart(a.start.row),
                        last: this.session.getRowFoldEnd(a.end.row),
                    }
                );
            };
            this.onCompositionStart = function (a) {
                this.renderer.showComposition(this.getCursorPosition());
            };
            this.onCompositionUpdate = function (a) {
                this.renderer.setCompositionText(a);
            };
            this.onCompositionEnd = function () {
                this.renderer.hideComposition();
            };
            this.getFirstVisibleRow = function () {
                return this.renderer.getFirstVisibleRow();
            };
            this.getLastVisibleRow = function () {
                return this.renderer.getLastVisibleRow();
            };
            this.isRowVisible = function (a) {
                return (
                    a >= this.getFirstVisibleRow() &&
                    a <= this.getLastVisibleRow()
                );
            };
            this.isRowFullyVisible = function (a) {
                return (
                    a >= this.renderer.getFirstFullyVisibleRow() &&
                    a <= this.renderer.getLastFullyVisibleRow()
                );
            };
            this.$getVisibleRowCount = function () {
                return (
                    this.renderer.getScrollBottomRow() -
                    this.renderer.getScrollTopRow() +
                    1
                );
            };
            this.$moveByPage = function (a, b) {
                var d = this.renderer,
                    c = this.renderer.layerConfig,
                    e = a * Math.floor(c.height / c.lineHeight);
                this.$blockScrolling++;
                !0 === b
                    ? this.selection.$moveSelection(function () {
                          this.moveCursorBy(e, 0);
                      })
                    : !1 === b &&
                      (this.selection.moveCursorBy(e, 0),
                      this.selection.clearSelection());
                this.$blockScrolling--;
                a = d.scrollTop;
                d.scrollBy(0, e * c.lineHeight);
                null != b && d.scrollCursorIntoView(null, 0.5);
                d.animateScrolling(a);
            };
            this.selectPageDown = function () {
                this.$moveByPage(1, !0);
            };
            this.selectPageUp = function () {
                this.$moveByPage(-1, !0);
            };
            this.gotoPageDown = function () {
                this.$moveByPage(1, !1);
            };
            this.gotoPageUp = function () {
                this.$moveByPage(-1, !1);
            };
            this.scrollPageDown = function () {
                this.$moveByPage(1);
            };
            this.scrollPageUp = function () {
                this.$moveByPage(-1);
            };
            this.scrollToRow = function (a) {
                this.renderer.scrollToRow(a);
            };
            this.scrollToLine = function (a, b, d, c) {
                this.renderer.scrollToLine(a, b, d, c);
            };
            this.centerSelection = function () {
                var a = this.getSelectionRange();
                this.renderer.alignCursor(
                    {
                        row: Math.floor(
                            a.start.row + (a.end.row - a.start.row) / 2
                        ),
                        column: Math.floor(
                            a.start.column + (a.end.column - a.start.column) / 2
                        ),
                    },
                    0.5
                );
            };
            this.getCursorPosition = function () {
                return this.selection.getCursor();
            };
            this.getCursorPositionScreen = function () {
                return this.session.documentToScreenPosition(
                    this.getCursorPosition()
                );
            };
            this.getSelectionRange = function () {
                return this.selection.getRange();
            };
            this.selectAll = function () {
                this.$blockScrolling += 1;
                this.selection.selectAll();
                --this.$blockScrolling;
            };
            this.clearSelection = function () {
                this.selection.clearSelection();
            };
            this.moveCursorTo = function (a, b) {
                this.selection.moveCursorTo(a, b);
            };
            this.moveCursorToPosition = function (a) {
                this.selection.moveCursorToPosition(a);
            };
            this.jumpToMatching = function (a, b) {
                var d = this.getCursorPosition(),
                    c = new z(this.session, d.row, d.column),
                    e = c.getCurrentToken(),
                    p = e || c.stepForward();
                if (p) {
                    var f,
                        m = !1,
                        k = {},
                        r = d.column - p.start,
                        g = {
                            ")": "(",
                            "(": "(",
                            "]": "[",
                            "[": "[",
                            "{": "{",
                            "}": "{",
                        };
                    do {
                        if (p.value.match(/[{}()\[\]]/g))
                            for (; r < p.value.length && !m; r++) {
                                if (g[p.value[r]]) {
                                    var h =
                                        g[p.value[r]] +
                                        "." +
                                        p.type.replace("rparen", "lparen");
                                    isNaN(k[h]) && (k[h] = 0);
                                    switch (p.value[r]) {
                                        case "(":
                                        case "[":
                                        case "{":
                                            k[h]++;
                                            break;
                                        case ")":
                                        case "]":
                                        case "}":
                                            k[h]--,
                                                -1 === k[h] &&
                                                    ((f = "bracket"), (m = !0));
                                    }
                                }
                            }
                        else
                            p &&
                                -1 !== p.type.indexOf("tag-name") &&
                                (isNaN(k[p.value]) && (k[p.value] = 0),
                                "<" === e.value
                                    ? k[p.value]++
                                    : "</" === e.value && k[p.value]--,
                                -1 === k[p.value] && ((f = "tag"), (m = !0)));
                        m || ((e = p), (p = c.stepForward()), (r = 0));
                    } while (p && !m);
                    if (f) {
                        if ("bracket" === f) {
                            var n = this.session.getBracketRange(d);
                            if (!n) {
                                n = new l(
                                    c.getCurrentTokenRow(),
                                    c.getCurrentTokenColumn() + r - 1,
                                    c.getCurrentTokenRow(),
                                    c.getCurrentTokenColumn() + r - 1
                                );
                                var u = n.start;
                                if (
                                    b ||
                                    (u.row === d.row &&
                                        2 > Math.abs(u.column - d.column))
                                )
                                    n = this.session.getBracketRange(u);
                            }
                        } else if ("tag" === f) {
                            if (!p || -1 === p.type.indexOf("tag-name")) return;
                            f = p.value;
                            n = new l(
                                c.getCurrentTokenRow(),
                                c.getCurrentTokenColumn() - 2,
                                c.getCurrentTokenRow(),
                                c.getCurrentTokenColumn() - 2
                            );
                            if (0 === n.compare(d.row, d.column)) {
                                m = !1;
                                do
                                    (p = e),
                                        (e = c.stepBackward()) &&
                                            (-1 !==
                                                e.type.indexOf("tag-close") &&
                                                n.setEnd(
                                                    c.getCurrentTokenRow(),
                                                    c.getCurrentTokenColumn() +
                                                        1
                                                ),
                                            p.value === f &&
                                                -1 !==
                                                    p.type.indexOf(
                                                        "tag-name"
                                                    ) &&
                                                ("<" === e.value
                                                    ? k[f]++
                                                    : "</" === e.value &&
                                                      k[f]--,
                                                0 === k[f] && (m = !0)));
                                while (e && !m);
                            }
                            p &&
                                p.type.indexOf("tag-name") &&
                                ((u = n.start),
                                u.row == d.row &&
                                    2 > Math.abs(u.column - d.column) &&
                                    (u = n.end));
                        }
                        (u = (n && n.cursor) || u) &&
                            (a
                                ? n && b
                                    ? this.selection.setRange(n)
                                    : n && n.isEqual(this.getSelectionRange())
                                    ? this.clearSelection()
                                    : this.selection.selectTo(u.row, u.column)
                                : this.selection.moveTo(u.row, u.column));
                    }
                }
            };
            this.gotoLine = function (a, b, d) {
                this.selection.clearSelection();
                this.session.unfold({ row: a - 1, column: b || 0 });
                this.$blockScrolling += 1;
                this.exitMultiSelectMode && this.exitMultiSelectMode();
                this.moveCursorTo(a - 1, b || 0);
                --this.$blockScrolling;
                this.isRowFullyVisible(a - 1) ||
                    this.scrollToLine(a - 1, !0, d);
            };
            this.navigateTo = function (a, b) {
                this.selection.moveTo(a, b);
            };
            this.navigateUp = function (a) {
                if (
                    this.selection.isMultiLine() &&
                    !this.selection.isBackwards()
                )
                    return (
                        (a = this.selection.anchor.getPosition()),
                        this.moveCursorToPosition(a)
                    );
                this.selection.clearSelection();
                this.selection.moveCursorBy(-a || -1, 0);
            };
            this.navigateDown = function (a) {
                if (
                    this.selection.isMultiLine() &&
                    this.selection.isBackwards()
                )
                    return (
                        (a = this.selection.anchor.getPosition()),
                        this.moveCursorToPosition(a)
                    );
                this.selection.clearSelection();
                this.selection.moveCursorBy(a || 1, 0);
            };
            this.navigateLeft = function (a) {
                if (this.selection.isEmpty())
                    for (a = a || 1; a--; ) this.selection.moveCursorLeft();
                else
                    (a = this.getSelectionRange().start),
                        this.moveCursorToPosition(a);
                this.clearSelection();
            };
            this.navigateRight = function (a) {
                if (this.selection.isEmpty())
                    for (a = a || 1; a--; ) this.selection.moveCursorRight();
                else
                    (a = this.getSelectionRange().end),
                        this.moveCursorToPosition(a);
                this.clearSelection();
            };
            this.navigateLineStart = function () {
                this.selection.moveCursorLineStart();
                this.clearSelection();
            };
            this.navigateLineEnd = function () {
                this.selection.moveCursorLineEnd();
                this.clearSelection();
            };
            this.navigateFileEnd = function () {
                this.selection.moveCursorFileEnd();
                this.clearSelection();
            };
            this.navigateFileStart = function () {
                this.selection.moveCursorFileStart();
                this.clearSelection();
            };
            this.navigateWordRight = function () {
                this.selection.moveCursorWordRight();
                this.clearSelection();
            };
            this.navigateWordLeft = function () {
                this.selection.moveCursorWordLeft();
                this.clearSelection();
            };
            this.replace = function (a, b) {
                b && this.$search.set(b);
                b = this.$search.find(this.session);
                var d = 0;
                return b
                    ? (this.$tryReplace(b, a) && (d = 1),
                      null !== b &&
                          (this.selection.setSelectionRange(b),
                          this.renderer.scrollSelectionIntoView(
                              b.start,
                              b.end
                          )),
                      d)
                    : d;
            };
            this.replaceAll = function (a, b) {
                b && this.$search.set(b);
                b = this.$search.findAll(this.session);
                var d = 0;
                if (!b.length) return d;
                this.$blockScrolling += 1;
                var c = this.getSelectionRange();
                this.selection.moveTo(0, 0);
                for (var e = b.length - 1; 0 <= e; --e)
                    this.$tryReplace(b[e], a) && d++;
                return (
                    this.selection.setSelectionRange(c),
                    --this.$blockScrolling,
                    d
                );
            };
            this.$tryReplace = function (a, b) {
                var d = this.session.getTextRange(a);
                return (
                    (b = this.$search.replace(d, b)),
                    null !== b
                        ? ((a.end = this.session.replace(a, b)), a)
                        : null
                );
            };
            this.getLastSearchOptions = function () {
                return this.$search.getOptions();
            };
            this.find = function (a, b, d) {
                b || (b = {});
                "string" == typeof a || a instanceof RegExp
                    ? (b.needle = a)
                    : "object" == typeof a && h.mixin(b, a);
                var c = this.selection.getRange();
                null == b.needle &&
                    ((a =
                        this.session.getTextRange(c) ||
                        this.$search.$options.needle),
                    a ||
                        ((c = this.session.getWordRange(
                            c.start.row,
                            c.start.column
                        )),
                        (a = this.session.getTextRange(c))),
                    this.$search.set({ needle: a }));
                this.$search.set(b);
                b.start || this.$search.set({ start: c });
                a = this.$search.find(this.session);
                if (b.preventScroll) return a;
                if (a) return this.revealRange(a, d), a;
                b.backwards ? (c.start = c.end) : (c.end = c.start);
                this.selection.setRange(c);
            };
            this.findNext = function (a, b) {
                this.find({ skipCurrent: !0, backwards: !1 }, a, b);
            };
            this.findPrevious = function (a, b) {
                this.find(a, { skipCurrent: !0, backwards: !0 }, b);
            };
            this.revealRange = function (a, b) {
                this.$blockScrolling += 1;
                this.session.unfold(a);
                this.selection.setSelectionRange(a);
                --this.$blockScrolling;
                var d = this.renderer.scrollTop;
                this.renderer.scrollSelectionIntoView(a.start, a.end, 0.5);
                !1 !== b && this.renderer.animateScrolling(d);
            };
            this.undo = function () {
                this.$blockScrolling++;
                this.session.getUndoManager().undo();
                this.$blockScrolling--;
                this.renderer.scrollCursorIntoView(null, 0.5);
            };
            this.redo = function () {
                this.$blockScrolling++;
                this.session.getUndoManager().redo();
                this.$blockScrolling--;
                this.renderer.scrollCursorIntoView(null, 0.5);
            };
            this.destroy = function () {
                this.renderer.destroy();
                this._signal("destroy", this);
                this.session && this.session.destroy();
            };
            this.setAutoScrollEditorIntoView = function (a) {
                if (a) {
                    var b,
                        d = this,
                        c = !1;
                    this.$scrollAnchor ||
                        (this.$scrollAnchor = document.createElement("div"));
                    var e = this.$scrollAnchor;
                    e.style.cssText = "position:absolute";
                    this.container.insertBefore(e, this.container.firstChild);
                    var l = this.on("changeSelection", function () {
                            c = !0;
                        }),
                        p = this.renderer.on("beforeRender", function () {
                            c &&
                                (b = d.renderer.container.getBoundingClientRect());
                        }),
                        f = this.renderer.on("afterRender", function () {
                            if (
                                c &&
                                b &&
                                (d.isFocused() ||
                                    (d.searchBox && d.searchBox.isFocused()))
                            ) {
                                var a = d.renderer,
                                    l = a.$cursorLayer.$pixelPos,
                                    a = a.layerConfig,
                                    p = l.top - a.offset;
                                0 <= l.top && 0 > p + b.top
                                    ? (c = !0)
                                    : l.top < a.height &&
                                      l.top + b.top + a.lineHeight >
                                          window.innerHeight
                                    ? (c = !1)
                                    : (c = null);
                                null != c &&
                                    ((e.style.top = p + "px"),
                                    (e.style.left = l.left + "px"),
                                    (e.style.height = a.lineHeight + "px"),
                                    e.scrollIntoView(c));
                                c = b = null;
                            }
                        });
                    this.setAutoScrollEditorIntoView = function (a) {
                        a ||
                            (delete this.setAutoScrollEditorIntoView,
                            this.off("changeSelection", l),
                            this.renderer.off("afterRender", f),
                            this.renderer.off("beforeRender", p));
                    };
                }
            };
            this.$resetCursorStyle = function () {
                var a = this.$cursorStyle || "ace",
                    b = this.renderer.$cursorLayer;
                b &&
                    (b.setSmoothBlinking(/smooth/.test(a)),
                    (b.isBlinking = !this.$readOnly && "wide" != a),
                    g.setCssClass(
                        b.element,
                        "ace_slim-cursors",
                        /slim/.test(a)
                    ));
            };
        }.call(w.prototype));
        p.defineOptions(w.prototype, "editor", {
            selectionStyle: {
                set: function (a) {
                    this.onSelectionChange();
                    this._signal("changeSelectionStyle", { data: a });
                },
                initialValue: "line",
            },
            highlightActiveLine: {
                set: function () {
                    this.$updateHighlightActiveLine();
                },
                initialValue: !0,
            },
            highlightSelectedWord: {
                set: function (a) {
                    this.$onSelectionChange();
                },
                initialValue: !0,
            },
            readOnly: {
                set: function (a) {
                    this.$resetCursorStyle();
                },
                initialValue: !1,
            },
            cursorStyle: {
                set: function (a) {
                    this.$resetCursorStyle();
                },
                values: ["ace", "slim", "smooth", "wide"],
                initialValue: "ace",
            },
            mergeUndoDeltas: { values: [!1, !0, "always"], initialValue: !0 },
            behavioursEnabled: { initialValue: !0 },
            wrapBehavioursEnabled: { initialValue: !0 },
            autoScrollEditorIntoView: {
                set: function (a) {
                    this.setAutoScrollEditorIntoView(a);
                },
            },
            keyboardHandler: {
                set: function (a) {
                    this.setKeyboardHandler(a);
                },
                get: function () {
                    return this.keybindingId;
                },
                handlesSet: !0,
            },
            hScrollBarAlwaysVisible: "renderer",
            vScrollBarAlwaysVisible: "renderer",
            highlightGutterLine: "renderer",
            animatedScroll: "renderer",
            showInvisibles: "renderer",
            showPrintMargin: "renderer",
            printMarginColumn: "renderer",
            printMargin: "renderer",
            fadeFoldWidgets: "renderer",
            showFoldWidgets: "renderer",
            showLineNumbers: "renderer",
            showGutter: "renderer",
            displayIndentGuides: "renderer",
            fontSize: "renderer",
            fontFamily: "renderer",
            maxLines: "renderer",
            minLines: "renderer",
            scrollPastEnd: "renderer",
            fixedWidthGutter: "renderer",
            theme: "renderer",
            scrollSpeed: "$mouseHandler",
            dragDelay: "$mouseHandler",
            dragEnabled: "$mouseHandler",
            focusTimout: "$mouseHandler",
            tooltipFollowsMouse: "$mouseHandler",
            firstLineNumber: "session",
            overwrite: "session",
            newLineMode: "session",
            useWorker: "session",
            useSoftTabs: "session",
            tabSize: "session",
            wrap: "session",
            indentedSoftWrap: "session",
            foldStyle: "session",
            mode: "session",
        });
        q.Editor = w;
    }
);
ace.define("ace/undomanager", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    n = function () {
        this.reset();
    };
    (function () {
        function h(b) {
            return {
                action: b.action,
                start: b.start,
                end: b.end,
                lines: 1 == b.lines.length ? null : b.lines,
                text: 1 == b.lines.length ? b.lines[0] : null,
            };
        }
        function g(b) {
            return {
                action: b.action,
                start: b.start,
                end: b.end,
                lines: b.lines || [b.text],
            };
        }
        function c(b, a) {
            for (var d = Array(b.length), c = 0; c < b.length; c++) {
                for (
                    var m = b[c],
                        f = { group: m.group, deltas: Array(m.length) },
                        k = 0;
                    k < m.deltas.length;
                    k++
                )
                    f.deltas[k] = a(m.deltas[k]);
                d[c] = f;
            }
            return d;
        }
        this.execute = function (b) {
            var a = b.args[0];
            this.$doc = b.args[1];
            b.merge &&
                this.hasUndo() &&
                (this.dirtyCounter--, (a = this.$undoStack.pop().concat(a)));
            this.$undoStack.push(a);
            this.$redoStack = [];
            0 > this.dirtyCounter && (this.dirtyCounter = NaN);
            this.dirtyCounter++;
        };
        this.undo = function (b) {
            var a = this.$undoStack.pop(),
                d = null;
            return (
                a &&
                    ((d = this.$doc.undoChanges(a, b)),
                    this.$redoStack.push(a),
                    this.dirtyCounter--),
                d
            );
        };
        this.redo = function (b) {
            var a = this.$redoStack.pop(),
                d = null;
            return (
                a &&
                    ((d = this.$doc.redoChanges(this.$deserializeDeltas(a), b)),
                    this.$undoStack.push(a),
                    this.dirtyCounter++),
                d
            );
        };
        this.reset = function () {
            this.$undoStack = [];
            this.$redoStack = [];
            this.dirtyCounter = 0;
        };
        this.hasUndo = function () {
            return 0 < this.$undoStack.length;
        };
        this.hasRedo = function () {
            return 0 < this.$redoStack.length;
        };
        this.markClean = function () {
            this.dirtyCounter = 0;
        };
        this.isClean = function () {
            return 0 === this.dirtyCounter;
        };
        this.$serializeDeltas = function (b) {
            return c(b, h);
        };
        this.$deserializeDeltas = function (b) {
            return c(b, g);
        };
    }.call(n.prototype));
    q.UndoManager = n;
});
ace.define(
    "ace/layer/gutter",
    "require exports module ace/lib/dom ace/lib/oop ace/lib/lang ace/lib/event_emitter".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../lib/dom"),
            g = n("../lib/oop"),
            c = n("../lib/lang"),
            b = n("../lib/event_emitter").EventEmitter;
        n = function (a) {
            this.element = h.createElement("div");
            this.element.className = "ace_layer ace_gutter-layer";
            a.appendChild(this.element);
            this.setShowFoldWidgets(this.$showFoldWidgets);
            this.gutterWidth = 0;
            this.$annotations = [];
            this.$updateAnnotations = this.$updateAnnotations.bind(this);
            this.$cells = [];
        };
        (function () {
            g.implement(this, b);
            this.setSession = function (a) {
                this.session &&
                    this.session.removeEventListener(
                        "change",
                        this.$updateAnnotations
                    );
                (this.session = a) && a.on("change", this.$updateAnnotations);
            };
            this.addGutterDecoration = function (a, b) {
                window.console &&
                    console.warn &&
                    console.warn("deprecated use session.addGutterDecoration");
                this.session.addGutterDecoration(a, b);
            };
            this.removeGutterDecoration = function (a, b) {
                window.console &&
                    console.warn &&
                    console.warn(
                        "deprecated use session.removeGutterDecoration"
                    );
                this.session.removeGutterDecoration(a, b);
            };
            this.setAnnotations = function (a) {
                this.$annotations = [];
                for (var b = 0; b < a.length; b++) {
                    var e = a[b],
                        m = e.row,
                        f = this.$annotations[m];
                    f || (f = this.$annotations[m] = { text: [] });
                    m = (m = e.text) ? c.escapeHTML(m) : e.html || "";
                    -1 === f.text.indexOf(m) && f.text.push(m);
                    e = e.type;
                    "error" == e
                        ? (f.className = " ace_error")
                        : "warning" == e && " ace_error" != f.className
                        ? (f.className = " ace_warning")
                        : "info" == e &&
                          !f.className &&
                          (f.className = " ace_info");
                }
            };
            this.$updateAnnotations = function (a) {
                if (this.$annotations.length) {
                    var b = a.start.row,
                        c = a.end.row - b;
                    0 !== c &&
                        ("remove" == a.action
                            ? this.$annotations.splice(b, c + 1, null)
                            : ((a = Array(c + 1)),
                              a.unshift(b, 1),
                              this.$annotations.splice.apply(
                                  this.$annotations,
                                  a
                              )));
                }
            };
            this.update = function (a) {
                var b = this.session,
                    c = a.firstRow,
                    m = Math.min(a.lastRow + a.gutterOffset, b.getLength() - 1),
                    f = b.getNextFoldLine(c),
                    k = f ? f.start.row : Infinity,
                    l = this.$showFoldWidgets && b.foldWidgets,
                    g = b.$breakpoints,
                    n = b.$decorations,
                    r = b.$firstLineNumber;
                var p = 0;
                for (
                    var q = b.gutterRenderer || this.$renderer, w = -1, y = c;
                    ;

                ) {
                    y > k &&
                        ((y = f.end.row + 1),
                        (f = b.getNextFoldLine(y, f)),
                        (k = f ? f.start.row : Infinity));
                    if (y > m) {
                        for (; this.$cells.length > w + 1; )
                            (c = this.$cells.pop()),
                                this.element.removeChild(c.element);
                        break;
                    }
                    (c = this.$cells[++w]) ||
                        ((c = {
                            element: null,
                            textNode: null,
                            foldWidget: null,
                        }),
                        (c.element = h.createElement("div")),
                        (c.textNode = document.createTextNode("")),
                        c.element.appendChild(c.textNode),
                        this.element.appendChild(c.element),
                        (this.$cells[w] = c));
                    p = "ace_gutter-cell ";
                    g[y] && (p += g[y]);
                    n[y] && (p += n[y]);
                    this.$annotations[y] &&
                        (p += this.$annotations[y].className);
                    c.element.className != p && (c.element.className = p);
                    p = b.getRowLength(y) * a.lineHeight + "px";
                    p != c.element.style.height && (c.element.style.height = p);
                    if (l) {
                        var x = l[y];
                        null == x && (x = l[y] = b.getFoldWidget(y));
                    }
                    x
                        ? (c.foldWidget ||
                              ((c.foldWidget = h.createElement("span")),
                              c.element.appendChild(c.foldWidget)),
                          (p = "ace_fold-widget ace_" + x),
                          "start" == x && y == k && y < f.end.row
                              ? (p += " ace_closed")
                              : (p += " ace_open"),
                          c.foldWidget.className != p &&
                              (c.foldWidget.className = p),
                          (p = a.lineHeight + "px"),
                          c.foldWidget.style.height != p &&
                              (c.foldWidget.style.height = p))
                        : c.foldWidget &&
                          (c.element.removeChild(c.foldWidget),
                          (c.foldWidget = null));
                    var t = (p = q ? q.getText(b, y) : y + r);
                    t !== c.textNode.data && (c.textNode.data = t);
                    y++;
                }
                this.element.style.height = a.minHeight + "px";
                if (this.$fixedWidth || b.$useWrapMode) p = b.getLength() + r;
                a = q
                    ? q.getWidth(b, p, a)
                    : p.toString().length * a.characterWidth;
                x = this.$padding || this.$computePadding();
                a += x.left + x.right;
                a !== this.gutterWidth &&
                    !isNaN(a) &&
                    ((this.gutterWidth = a),
                    (this.element.style.width =
                        Math.ceil(this.gutterWidth) + "px"),
                    this._emit("changeGutterWidth", a));
            };
            this.$fixedWidth = !1;
            this.$showLineNumbers = !0;
            this.$renderer = "";
            this.setShowLineNumbers = function (a) {
                this.$renderer = !a && {
                    getWidth: function () {
                        return "";
                    },
                    getText: function () {
                        return "";
                    },
                };
            };
            this.getShowLineNumbers = function () {
                return this.$showLineNumbers;
            };
            this.$showFoldWidgets = !0;
            this.setShowFoldWidgets = function (a) {
                a
                    ? h.addCssClass(this.element, "ace_folding-enabled")
                    : h.removeCssClass(this.element, "ace_folding-enabled");
                this.$showFoldWidgets = a;
                this.$padding = null;
            };
            this.getShowFoldWidgets = function () {
                return this.$showFoldWidgets;
            };
            this.$computePadding = function () {
                if (!this.element.firstChild) return { left: 0, right: 0 };
                var a = h.computedStyle(this.element.firstChild);
                return (
                    (this.$padding = {}),
                    (this.$padding.left = parseInt(a.paddingLeft) + 1 || 0),
                    (this.$padding.right = parseInt(a.paddingRight) || 0),
                    this.$padding
                );
            };
            this.getRegion = function (a) {
                var b = this.$padding || this.$computePadding(),
                    c = this.element.getBoundingClientRect();
                if (a.x < b.left + c.left) return "markers";
                if (this.$showFoldWidgets && a.x > c.right - b.right)
                    return "foldWidgets";
            };
        }.call(n.prototype));
        q.Gutter = n;
    }
);
ace.define(
    "ace/layer/marker",
    ["require", "exports", "module", "ace/range", "ace/lib/dom"],
    function (n, q, t) {
        var h = n("../range").Range,
            g = n("../lib/dom");
        n = function (c) {
            this.element = g.createElement("div");
            this.element.className = "ace_layer ace_marker-layer";
            c.appendChild(this.element);
        };
        (function () {
            this.$padding = 0;
            this.setPadding = function (c) {
                this.$padding = c;
            };
            this.setSession = function (c) {
                this.session = c;
            };
            this.setMarkers = function (c) {
                this.markers = c;
            };
            this.update = function (c) {
                if ((c = c || this.config)) {
                    this.config = c;
                    var b = [],
                        a;
                    for (a in this.markers) {
                        var d = this.markers[a];
                        if (d.range) {
                            var e = d.range.clipRows(c.firstRow, c.lastRow);
                            if (!e.isEmpty())
                                if (
                                    ((e = e.toScreenRange(this.session)),
                                    d.renderer)
                                ) {
                                    var m = this.$getTop(e.start.row, c);
                                    d.renderer(
                                        b,
                                        e,
                                        this.$padding +
                                            e.start.column * c.characterWidth,
                                        m,
                                        c
                                    );
                                } else
                                    "fullLine" == d.type
                                        ? this.drawFullLineMarker(
                                              b,
                                              e,
                                              d.clazz,
                                              c
                                          )
                                        : "screenLine" == d.type
                                        ? this.drawScreenLineMarker(
                                              b,
                                              e,
                                              d.clazz,
                                              c
                                          )
                                        : e.isMultiLine()
                                        ? "text" == d.type
                                            ? this.drawTextMarker(
                                                  b,
                                                  e,
                                                  d.clazz,
                                                  c
                                              )
                                            : this.drawMultiLineMarker(
                                                  b,
                                                  e,
                                                  d.clazz,
                                                  c
                                              )
                                        : this.drawSingleLineMarker(
                                              b,
                                              e,
                                              d.clazz + " ace_start ace_br15",
                                              c
                                          );
                        } else d.update(b, this, this.session, c);
                    }
                    this.element.innerHTML = b.join("");
                }
            };
            this.$getTop = function (c, b) {
                return (c - b.firstRowScreen) * b.lineHeight;
            };
            this.drawTextMarker = function (c, b, a, d, e) {
                for (
                    var m = this.session,
                        f = b.start.row,
                        k = b.end.row,
                        l = f,
                        g,
                        n = 0,
                        r = m.getScreenLastRowColumn(l),
                        p = new h(l, b.start.column, l, n);
                    l <= k;
                    l++
                )
                    (p.start.row = p.end.row = l),
                        (p.start.column =
                            l == f ? b.start.column : m.getRowWrapIndent(l)),
                        (p.end.column = r),
                        (g = n),
                        (n = r),
                        (r =
                            l + 1 < k
                                ? m.getScreenLastRowColumn(l + 1)
                                : l == k
                                ? 0
                                : b.end.column),
                        this.drawSingleLineMarker(
                            c,
                            p,
                            a +
                                (l == f ? " ace_start" : "") +
                                " ace_br" +
                                ((l == f || (l == f + 1 && b.start.column)
                                    ? 1
                                    : 0) |
                                    (g < n ? 2 : 0) |
                                    (n > r ? 4 : 0) |
                                    (l == k ? 8 : 0)),
                            d,
                            l == k ? 0 : 1,
                            e
                        );
            };
            this.drawMultiLineMarker = function (c, b, a, d, e) {
                var m = this.$padding,
                    f = d.lineHeight,
                    k = this.$getTop(b.start.row, d),
                    l = m + b.start.column * d.characterWidth;
                e = e || "";
                c.push(
                    "<div class='",
                    a,
                    " ace_br1 ace_start' style='",
                    "height:",
                    f,
                    "px;",
                    "right:0;",
                    "top:",
                    k,
                    "px;",
                    "left:",
                    l,
                    "px;",
                    e,
                    "'></div>"
                );
                k = this.$getTop(b.end.row, d);
                c.push(
                    "<div class='",
                    a,
                    " ace_br12' style='",
                    "height:",
                    f,
                    "px;",
                    "width:",
                    b.end.column * d.characterWidth,
                    "px;",
                    "top:",
                    k,
                    "px;",
                    "left:",
                    m,
                    "px;",
                    e,
                    "'></div>"
                );
                f = (b.end.row - b.start.row - 1) * d.lineHeight;
                0 >= f ||
                    ((k = this.$getTop(b.start.row + 1, d)),
                    (b = (b.start.column ? 1 : 0) | (b.end.column ? 0 : 8)),
                    c.push(
                        "<div class='",
                        a,
                        b ? " ace_br" + b : "",
                        "' style='",
                        "height:",
                        f,
                        "px;",
                        "right:0;",
                        "top:",
                        k,
                        "px;",
                        "left:",
                        m,
                        "px;",
                        e,
                        "'></div>"
                    ));
            };
            this.drawSingleLineMarker = function (c, b, a, d, e, m) {
                var f = d.lineHeight;
                e =
                    (b.end.column + (e || 0) - b.start.column) *
                    d.characterWidth;
                var k = this.$getTop(b.start.row, d);
                c.push(
                    "<div class='",
                    a,
                    "' style='",
                    "height:",
                    f,
                    "px;",
                    "width:",
                    e,
                    "px;",
                    "top:",
                    k,
                    "px;",
                    "left:",
                    this.$padding + b.start.column * d.characterWidth,
                    "px;",
                    m || "",
                    "'></div>"
                );
            };
            this.drawFullLineMarker = function (c, b, a, d, e) {
                var m = this.$getTop(b.start.row, d),
                    f = d.lineHeight;
                b.start.row != b.end.row &&
                    (f += this.$getTop(b.end.row, d) - m);
                c.push(
                    "<div class='",
                    a,
                    "' style='",
                    "height:",
                    f,
                    "px;",
                    "top:",
                    m,
                    "px;",
                    "left:0;right:0;",
                    e || "",
                    "'></div>"
                );
            };
            this.drawScreenLineMarker = function (c, b, a, d, e) {
                b = this.$getTop(b.start.row, d);
                c.push(
                    "<div class='",
                    a,
                    "' style='",
                    "height:",
                    d.lineHeight,
                    "px;",
                    "top:",
                    b,
                    "px;",
                    "left:0;right:0;",
                    e || "",
                    "'></div>"
                );
            };
        }.call(n.prototype));
        q.Marker = n;
    }
);
ace.define(
    "ace/layer/text",
    "require exports module ace/lib/oop ace/lib/dom ace/lib/lang ace/lib/useragent ace/lib/event_emitter".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../lib/oop"),
            g = n("../lib/dom"),
            c = n("../lib/lang");
        n("../lib/useragent");
        var b = n("../lib/event_emitter").EventEmitter;
        n = function (a) {
            this.element = g.createElement("div");
            this.element.className = "ace_layer ace_text-layer";
            a.appendChild(this.element);
            this.$updateEolChar = this.$updateEolChar.bind(this);
        };
        (function () {
            h.implement(this, b);
            this.EOF_CHAR = "\u00b6";
            this.EOL_CHAR_LF = "\u00ac";
            this.EOL_CHAR_CRLF = "\u00a4";
            this.EOL_CHAR = this.EOL_CHAR_LF;
            this.TAB_CHAR = "\u2014";
            this.SPACE_CHAR = "\u00b7";
            this.$padding = 0;
            this.$updateEolChar = function () {
                var a =
                    "\n" == this.session.doc.getNewLineCharacter()
                        ? this.EOL_CHAR_LF
                        : this.EOL_CHAR_CRLF;
                if (this.EOL_CHAR != a) return (this.EOL_CHAR = a), !0;
            };
            this.setPadding = function (a) {
                this.$padding = a;
                this.element.style.padding = "0 " + a + "px";
            };
            this.getLineHeight = function () {
                return this.$fontMetrics.$characterSize.height || 0;
            };
            this.getCharacterWidth = function () {
                return this.$fontMetrics.$characterSize.width || 0;
            };
            this.$setFontMetrics = function (a) {
                this.$fontMetrics = a;
                this.$fontMetrics.on(
                    "changeCharacterSize",
                    function (a) {
                        this._signal("changeCharacterSize", a);
                    }.bind(this)
                );
                this.$pollSizeChanges();
            };
            this.checkForSizeChanges = function () {
                this.$fontMetrics.checkForSizeChanges();
            };
            this.$pollSizeChanges = function () {
                return (this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges());
            };
            this.setSession = function (a) {
                (this.session = a) && this.$computeTabString();
            };
            this.showInvisibles = !1;
            this.setShowInvisibles = function (a) {
                return this.showInvisibles == a
                    ? !1
                    : ((this.showInvisibles = a), this.$computeTabString(), !0);
            };
            this.displayIndentGuides = !0;
            this.setDisplayIndentGuides = function (a) {
                return this.displayIndentGuides == a
                    ? !1
                    : ((this.displayIndentGuides = a),
                      this.$computeTabString(),
                      !0);
            };
            this.$tabStrings = [];
            this.onChangeTabSize = this.$computeTabString = function () {
                var a;
                this.tabSize = a = this.session.getTabSize();
                var b = (this.$tabStrings = [0]);
                for (var e = 1; e < a + 1; e++)
                    this.showInvisibles
                        ? b.push(
                              "<span class='ace_invisible ace_invisible_tab'>" +
                                  c.stringRepeat(this.TAB_CHAR, e) +
                                  "</span>"
                          )
                        : b.push(c.stringRepeat(" ", e));
                if (this.displayIndentGuides) {
                    this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                    var e = "ace_indent-guide",
                        m = "",
                        f = "";
                    this.showInvisibles
                        ? ((e += " ace_invisible"),
                          (m = " ace_invisible_space"),
                          (f = " ace_invisible_tab"),
                          (b = c.stringRepeat(this.SPACE_CHAR, this.tabSize)),
                          (a = c.stringRepeat(this.TAB_CHAR, this.tabSize)))
                        : (a = b = c.stringRepeat(" ", this.tabSize));
                    this.$tabStrings[" "] =
                        "<span class='" + e + m + "'>" + b + "</span>";
                    this.$tabStrings["\t"] =
                        "<span class='" + e + f + "'>" + a + "</span>";
                }
            };
            this.updateLines = function (a, b, c) {
                (this.config.lastRow == a.lastRow &&
                    this.config.firstRow == a.firstRow) ||
                    this.scrollLines(a);
                this.config = a;
                var d = Math.max(b, a.firstRow);
                b = Math.min(c, a.lastRow);
                for (
                    var e = this.element.childNodes, k = 0, l = a.firstRow;
                    l < d;
                    l++
                ) {
                    if ((c = this.session.getFoldLine(l))) {
                        if (c.containsRow(d)) {
                            d = c.start.row;
                            break;
                        }
                        l = c.end.row;
                    }
                    k++;
                }
                l = d;
                for (
                    d = (c = this.session.getNextFoldLine(l))
                        ? c.start.row
                        : Infinity;
                    ;

                ) {
                    l > d &&
                        ((l = c.end.row + 1),
                        (c = this.session.getNextFoldLine(l, c)),
                        (d = c ? c.start.row : Infinity));
                    if (l > b) break;
                    var g = e[k++];
                    if (g) {
                        var h = [];
                        this.$renderLine(
                            h,
                            l,
                            !this.$useLineGroups(),
                            l == d ? c : !1
                        );
                        g.style.height =
                            a.lineHeight * this.session.getRowLength(l) + "px";
                        g.innerHTML = h.join("");
                    }
                    l++;
                }
            };
            this.scrollLines = function (a) {
                var b,
                    c = this.config;
                this.config = a;
                if (!c || c.lastRow < a.firstRow || a.lastRow < c.firstRow)
                    return this.update(a);
                var m = this.element;
                if (c.firstRow < a.firstRow)
                    for (
                        b = this.session.getFoldedRowCount(
                            c.firstRow,
                            a.firstRow - 1
                        );
                        0 < b;
                        b--
                    )
                        m.removeChild(m.firstChild);
                if (c.lastRow > a.lastRow)
                    for (
                        b = this.session.getFoldedRowCount(
                            a.lastRow + 1,
                            c.lastRow
                        );
                        0 < b;
                        b--
                    )
                        m.removeChild(m.lastChild);
                a.firstRow < c.firstRow &&
                    ((b = this.$renderLinesFragment(
                        a,
                        a.firstRow,
                        c.firstRow - 1
                    )),
                    m.firstChild
                        ? m.insertBefore(b, m.firstChild)
                        : m.appendChild(b));
                a.lastRow > c.lastRow &&
                    ((b = this.$renderLinesFragment(
                        a,
                        c.lastRow + 1,
                        a.lastRow
                    )),
                    m.appendChild(b));
            };
            this.$renderLinesFragment = function (a, b, c) {
                for (
                    var d = this.element.ownerDocument.createDocumentFragment(),
                        e = this.session.getNextFoldLine(b),
                        k = e ? e.start.row : Infinity;
                    ;

                ) {
                    b > k &&
                        ((b = e.end.row + 1),
                        (e = this.session.getNextFoldLine(b, e)),
                        (k = e ? e.start.row : Infinity));
                    if (b > c) break;
                    var l = g.createElement("div"),
                        h = [];
                    this.$renderLine(h, b, !1, b == k ? e : !1);
                    l.innerHTML = h.join("");
                    if (this.$useLineGroups())
                        (l.className = "ace_line_group"),
                            d.appendChild(l),
                            (l.style.height =
                                a.lineHeight * this.session.getRowLength(b) +
                                "px");
                    else for (; l.firstChild; ) d.appendChild(l.firstChild);
                    b++;
                }
                return d;
            };
            this.update = function (a) {
                this.config = a;
                for (
                    var b = [],
                        c = a.lastRow,
                        m = a.firstRow,
                        f = this.session.getNextFoldLine(m),
                        k = f ? f.start.row : Infinity;
                    ;

                ) {
                    m > k &&
                        ((m = f.end.row + 1),
                        (f = this.session.getNextFoldLine(m, f)),
                        (k = f ? f.start.row : Infinity));
                    if (m > c) break;
                    this.$useLineGroups() &&
                        b.push(
                            "<div class='ace_line_group' style='height:",
                            a.lineHeight * this.session.getRowLength(m),
                            "px'>"
                        );
                    this.$renderLine(b, m, !1, m == k ? f : !1);
                    this.$useLineGroups() && b.push("</div>");
                    m++;
                }
                this.element.innerHTML = b.join("");
            };
            this.$textToken = { text: !0, rparen: !0, lparen: !0 };
            this.$renderToken = function (a, b, e, m) {
                var d = this,
                    k = m.replace(
                        /\t|&|<|>|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF\uFFF9-\uFFFC])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g,
                        function (a, e, l, f, m) {
                            return e
                                ? d.showInvisibles
                                    ? "<span class='ace_invisible ace_invisible_space'>" +
                                      c.stringRepeat(d.SPACE_CHAR, a.length) +
                                      "</span>"
                                    : a
                                : "&" == a
                                ? "&#38;"
                                : "<" == a
                                ? "&#60;"
                                : ">" == a
                                ? "&#62;"
                                : "\t" == a
                                ? ((a = d.session.getScreenTabSize(b + f)),
                                  (b += a - 1),
                                  d.$tabStrings[a])
                                : "\u3000" == a
                                ? ((a = d.showInvisibles
                                      ? "ace_cjk ace_invisible ace_invisible_space"
                                      : "ace_cjk"),
                                  (e = d.showInvisibles ? d.SPACE_CHAR : ""),
                                  (b += 1),
                                  "<span class='" +
                                      a +
                                      "' style='width:" +
                                      2 * d.config.characterWidth +
                                      "px'>" +
                                      e +
                                      "</span>")
                                : l
                                ? "<span class='ace_invisible ace_invisible_space ace_invalid'>" +
                                  d.SPACE_CHAR +
                                  "</span>"
                                : ((b += 1),
                                  "<span class='ace_cjk' style='width:" +
                                      2 * d.config.characterWidth +
                                      "px'>" +
                                      a +
                                      "</span>");
                        }
                    );
                if (this.$textToken[e.type]) a.push(k);
                else {
                    var l = "ace_" + e.type.replace(/\./g, " ace_"),
                        g = "";
                    "fold" == e.type &&
                        (g =
                            " style='width:" +
                            e.value.length * this.config.characterWidth +
                            "px;' ");
                    a.push("<span class='", l, "'", g, ">", k, "</span>");
                }
                return b + m.length;
            };
            this.renderIndentGuide = function (a, b, e) {
                var d = b.search(this.$indentGuideRe);
                return 0 >= d || d >= e
                    ? b
                    : " " == b[0]
                    ? ((d -= d % this.tabSize),
                      a.push(
                          c.stringRepeat(
                              this.$tabStrings[" "],
                              d / this.tabSize
                          )
                      ),
                      b.substr(d))
                    : "\t" == b[0]
                    ? (a.push(c.stringRepeat(this.$tabStrings["\t"], d)),
                      b.substr(d))
                    : b;
            };
            this.$renderWrappedLine = function (a, b, e, m) {
                for (
                    var d = 0, k = 0, l = e[0], g = 0, h = 0;
                    h < b.length;
                    h++
                ) {
                    var r = b[h],
                        p = r.value;
                    if (0 == h && this.displayIndentGuides) {
                        d = p.length;
                        p = this.renderIndentGuide(a, p, l);
                        if (!p) continue;
                        d -= p.length;
                    }
                    if (d + p.length < l)
                        (g = this.$renderToken(a, g, r, p)), (d += p.length);
                    else {
                        for (; d + p.length >= l; )
                            this.$renderToken(a, g, r, p.substring(0, l - d)),
                                (p = p.substring(l - d)),
                                (d = l),
                                m ||
                                    a.push(
                                        "</div>",
                                        "<div class='ace_line' style='height:",
                                        this.config.lineHeight,
                                        "px'>"
                                    ),
                                a.push(c.stringRepeat("\u00a0", e.indent)),
                                k++,
                                (g = 0),
                                (l = e[k] || Number.MAX_VALUE);
                        0 != p.length &&
                            ((d += p.length),
                            (g = this.$renderToken(a, g, r, p)));
                    }
                }
            };
            this.$renderSimpleLine = function (a, b) {
                var d = 0,
                    c = b[0],
                    f = c.value;
                this.displayIndentGuides && (f = this.renderIndentGuide(a, f));
                f && (d = this.$renderToken(a, d, c, f));
                for (var k = 1; k < b.length; k++)
                    (c = b[k]),
                        (f = c.value),
                        (d = this.$renderToken(a, d, c, f));
            };
            this.$renderLine = function (a, b, c, m) {
                !m && 0 != m && (m = this.session.getFoldLine(b));
                var d = m
                    ? this.$getFoldLineTokens(b, m)
                    : this.session.getTokens(b);
                c ||
                    a.push(
                        "<div class='ace_line' style='height:",
                        this.config.lineHeight *
                            (this.$useLineGroups()
                                ? 1
                                : this.session.getRowLength(b)),
                        "px'>"
                    );
                if (d.length) {
                    var e = this.session.getRowSplitData(b);
                    e && e.length
                        ? this.$renderWrappedLine(a, d, e, c)
                        : this.$renderSimpleLine(a, d);
                }
                this.showInvisibles &&
                    (m && (b = m.end.row),
                    a.push(
                        "<span class='ace_invisible ace_invisible_eol'>",
                        b == this.session.getLength() - 1
                            ? this.EOF_CHAR
                            : this.EOL_CHAR,
                        "</span>"
                    ));
                c || a.push("</div>");
            };
            this.$getFoldLineTokens = function (a, b) {
                var d = this.session,
                    c = [],
                    f = d.getTokens(a);
                return (
                    b.walk(
                        function (a, b, e, m, r) {
                            if (null != a) c.push({ type: "fold", value: a });
                            else if ((r && (f = d.getTokens(b)), f.length))
                                a: {
                                    a = f;
                                    for (
                                        var l = (r = 0);
                                        l + a[r].value.length < m;

                                    )
                                        if (
                                            ((l += a[r].value.length),
                                            r++,
                                            r == a.length)
                                        )
                                            break a;
                                    l != m &&
                                        ((b = a[r].value.substring(m - l)),
                                        b.length > e - m &&
                                            (b = b.substring(0, e - m)),
                                        c.push({ type: a[r].type, value: b }),
                                        (l = m + b.length),
                                        (r += 1));
                                    for (; l < e && r < a.length; )
                                        (b = a[r].value),
                                            b.length + l > e
                                                ? c.push({
                                                      type: a[r].type,
                                                      value: b.substring(
                                                          0,
                                                          e - l
                                                      ),
                                                  })
                                                : c.push(a[r]),
                                            (l += b.length),
                                            (r += 1);
                                }
                        },
                        b.end.row,
                        this.session.getLine(b.end.row).length
                    ),
                    c
                );
            };
            this.$useLineGroups = function () {
                return this.session.getUseWrapMode();
            };
            this.destroy = function () {
                clearInterval(this.$pollSizeChangesTimer);
                this.$measureNode &&
                    this.$measureNode.parentNode.removeChild(this.$measureNode);
                delete this.$measureNode;
            };
        }.call(n.prototype));
        q.Text = n;
    }
);
ace.define(
    "ace/layer/cursor",
    ["require", "exports", "module", "ace/lib/dom"],
    function (n, q, t) {
        var h = n("../lib/dom"),
            g;
        n = function (c) {
            this.element = h.createElement("div");
            this.element.className = "ace_layer ace_cursor-layer";
            c.appendChild(this.element);
            void 0 === g && (g = !("opacity" in this.element.style));
            this.isVisible = !1;
            this.isBlinking = !0;
            this.blinkInterval = 1e3;
            this.smoothBlinking = !1;
            this.cursors = [];
            this.cursor = this.addCursor();
            h.addCssClass(this.element, "ace_hidden-cursors");
            this.$updateCursors = (g
                ? this.$updateVisibility
                : this.$updateOpacity
            ).bind(this);
        };
        (function () {
            this.$updateVisibility = function (c) {
                for (var b = this.cursors, a = b.length; a--; )
                    b[a].style.visibility = c ? "" : "hidden";
            };
            this.$updateOpacity = function (c) {
                for (var b = this.cursors, a = b.length; a--; )
                    b[a].style.opacity = c ? "" : "0";
            };
            this.$padding = 0;
            this.setPadding = function (c) {
                this.$padding = c;
            };
            this.setSession = function (c) {
                this.session = c;
            };
            this.setBlinking = function (c) {
                c != this.isBlinking &&
                    ((this.isBlinking = c), this.restartTimer());
            };
            this.setBlinkInterval = function (c) {
                c != this.blinkInterval &&
                    ((this.blinkInterval = c), this.restartTimer());
            };
            this.setSmoothBlinking = function (c) {
                c != this.smoothBlinking &&
                    !g &&
                    ((this.smoothBlinking = c),
                    h.setCssClass(this.element, "ace_smooth-blinking", c),
                    this.$updateCursors(!0),
                    (this.$updateCursors = this.$updateOpacity.bind(this)),
                    this.restartTimer());
            };
            this.addCursor = function () {
                var c = h.createElement("div");
                return (
                    (c.className = "ace_cursor"),
                    this.element.appendChild(c),
                    this.cursors.push(c),
                    c
                );
            };
            this.removeCursor = function () {
                if (1 < this.cursors.length) {
                    var c = this.cursors.pop();
                    return c.parentNode.removeChild(c), c;
                }
            };
            this.hideCursor = function () {
                this.isVisible = !1;
                h.addCssClass(this.element, "ace_hidden-cursors");
                this.restartTimer();
            };
            this.showCursor = function () {
                this.isVisible = !0;
                h.removeCssClass(this.element, "ace_hidden-cursors");
                this.restartTimer();
            };
            this.restartTimer = function () {
                var c = this.$updateCursors;
                clearInterval(this.intervalId);
                clearTimeout(this.timeoutId);
                this.smoothBlinking &&
                    h.removeCssClass(this.element, "ace_smooth-blinking");
                c(!0);
                if (this.isBlinking && this.blinkInterval && this.isVisible) {
                    this.smoothBlinking &&
                        setTimeout(
                            function () {
                                h.addCssClass(
                                    this.element,
                                    "ace_smooth-blinking"
                                );
                            }.bind(this)
                        );
                    var b = function () {
                        this.timeoutId = setTimeout(function () {
                            c(!1);
                        }, 0.6 * this.blinkInterval);
                    }.bind(this);
                    this.intervalId = setInterval(function () {
                        c(!0);
                        b();
                    }, this.blinkInterval);
                    b();
                }
            };
            this.getPixelPosition = function (c, b) {
                if (!this.config || !this.session) return { left: 0, top: 0 };
                c || (c = this.session.selection.getCursor());
                c = this.session.documentToScreenPosition(c);
                return {
                    left: this.$padding + c.column * this.config.characterWidth,
                    top:
                        (c.row - (b ? this.config.firstRowScreen : 0)) *
                        this.config.lineHeight,
                };
            };
            this.update = function (c) {
                this.config = c;
                var b = this.session.$selectionMarkers,
                    a = 0;
                if (void 0 === b || 0 === b.length) b = [{ cursor: null }];
                var d = 0;
                for (var e = b.length; d < e; d++) {
                    var m = this.getPixelPosition(b[d].cursor, !0);
                    if (
                        !((m.top > c.height + c.offset || 0 > m.top) && 1 < d)
                    ) {
                        var f = (this.cursors[a++] || this.addCursor()).style;
                        this.drawCursor
                            ? this.drawCursor(f, m, c, b[d], this.session)
                            : ((f.left = m.left + "px"),
                              (f.top = m.top + "px"),
                              (f.width = c.characterWidth + "px"),
                              (f.height = c.lineHeight + "px"));
                    }
                }
                for (; this.cursors.length > a; ) this.removeCursor();
                c = this.session.getOverwrite();
                this.$setOverwrite(c);
                this.$pixelPos = m;
                this.restartTimer();
            };
            this.drawCursor = null;
            this.$setOverwrite = function (c) {
                c != this.overwrite &&
                    ((this.overwrite = c),
                    c
                        ? h.addCssClass(this.element, "ace_overwrite-cursors")
                        : h.removeCssClass(
                              this.element,
                              "ace_overwrite-cursors"
                          ));
            };
            this.destroy = function () {
                clearInterval(this.intervalId);
                clearTimeout(this.timeoutId);
            };
        }.call(n.prototype));
        q.Cursor = n;
    }
);
ace.define(
    "ace/scrollbar",
    "require exports module ace/lib/oop ace/lib/dom ace/lib/event ace/lib/event_emitter".split(
        " "
    ),
    function (n, q, t) {
        var h = n("./lib/oop"),
            g = n("./lib/dom"),
            c = n("./lib/event"),
            b = n("./lib/event_emitter").EventEmitter,
            a = function (a) {
                this.element = g.createElement("div");
                this.element.className =
                    "ace_scrollbar ace_scrollbar" + this.classSuffix;
                this.inner = g.createElement("div");
                this.inner.className = "ace_scrollbar-inner";
                this.element.appendChild(this.inner);
                a.appendChild(this.element);
                this.setVisible(!1);
                this.skipEvent = !1;
                c.addListener(this.element, "scroll", this.onScroll.bind(this));
                c.addListener(this.element, "mousedown", c.preventDefault);
            };
        (function () {
            h.implement(this, b);
            this.setVisible = function (a) {
                this.element.style.display = a ? "" : "none";
                this.isVisible = a;
                this.coeff = 1;
            };
        }.call(a.prototype));
        n = function (b, c) {
            a.call(this, b);
            this.scrollHeight = this.scrollTop = 0;
            c.$scrollbarWidth = this.width = g.scrollbarWidth(b.ownerDocument);
            this.inner.style.width = this.element.style.width =
                (this.width || 15) + 5 + "px";
        };
        h.inherits(n, a);
        (function () {
            this.classSuffix = "-v";
            this.onScroll = function () {
                if (!this.skipEvent) {
                    this.scrollTop = this.element.scrollTop;
                    if (1 != this.coeff) {
                        var a = this.element.clientHeight / this.scrollHeight;
                        this.scrollTop =
                            (this.scrollTop * (1 - a)) / (this.coeff - a);
                    }
                    this._emit("scroll", { data: this.scrollTop });
                }
                this.skipEvent = !1;
            };
            this.getWidth = function () {
                return this.isVisible ? this.width : 0;
            };
            this.setHeight = function (a) {
                this.element.style.height = a + "px";
            };
            this.setInnerHeight = this.setScrollHeight = function (a) {
                this.scrollHeight = a;
                32768 < a
                    ? ((this.coeff = 32768 / a), (a = 32768))
                    : 1 != this.coeff && (this.coeff = 1);
                this.inner.style.height = a + "px";
            };
            this.setScrollTop = function (a) {
                this.scrollTop != a &&
                    ((this.skipEvent = !0),
                    (this.scrollTop = a),
                    (this.element.scrollTop = a * this.coeff));
            };
        }.call(n.prototype));
        t = function (b, c) {
            a.call(this, b);
            this.scrollLeft = 0;
            this.height = c.$scrollbarWidth;
            this.inner.style.height = this.element.style.height =
                (this.height || 15) + 5 + "px";
        };
        h.inherits(t, a);
        (function () {
            this.classSuffix = "-h";
            this.onScroll = function () {
                this.skipEvent ||
                    ((this.scrollLeft = this.element.scrollLeft),
                    this._emit("scroll", { data: this.scrollLeft }));
                this.skipEvent = !1;
            };
            this.getHeight = function () {
                return this.isVisible ? this.height : 0;
            };
            this.setWidth = function (a) {
                this.element.style.width = a + "px";
            };
            this.setInnerWidth = function (a) {
                this.inner.style.width = a + "px";
            };
            this.setScrollWidth = function (a) {
                this.inner.style.width = a + "px";
            };
            this.setScrollLeft = function (a) {
                this.scrollLeft != a &&
                    ((this.skipEvent = !0),
                    (this.scrollLeft = this.element.scrollLeft = a));
            };
        }.call(t.prototype));
        q.ScrollBar = n;
        q.ScrollBarV = n;
        q.ScrollBarH = t;
        q.VScrollBar = n;
        q.HScrollBar = t;
    }
);
ace.define(
    "ace/renderloop",
    ["require", "exports", "module", "ace/lib/event"],
    function (n, q, t) {
        var h = n("./lib/event");
        n = function (g, c) {
            this.onRender = g;
            this.pending = !1;
            this.changes = 0;
            this.window = c || window;
        };
        (function () {
            this.schedule = function (g) {
                this.changes |= g;
                if (!this.pending && this.changes) {
                    this.pending = !0;
                    var c = this;
                    h.nextFrame(function () {
                        c.pending = !1;
                        for (var b; (b = c.changes); )
                            (c.changes = 0), c.onRender(b);
                    }, this.window);
                }
            };
        }.call(n.prototype));
        q.RenderLoop = n;
    }
);
ace.define(
    "ace/layer/font_metrics",
    "require exports module ace/lib/oop ace/lib/dom ace/lib/lang ace/lib/useragent ace/lib/event_emitter".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../lib/oop"),
            g = n("../lib/dom"),
            c = n("../lib/lang"),
            b = n("../lib/useragent"),
            a = n("../lib/event_emitter").EventEmitter,
            d = 0;
        n = q.FontMetrics = function (a) {
            this.el = g.createElement("div");
            this.$setMeasureNodeStyles(this.el.style, !0);
            this.$main = g.createElement("div");
            this.$setMeasureNodeStyles(this.$main.style);
            this.$measureNode = g.createElement("div");
            this.$setMeasureNodeStyles(this.$measureNode.style);
            this.el.appendChild(this.$main);
            this.el.appendChild(this.$measureNode);
            a.appendChild(this.el);
            d || this.$testFractionalRect();
            this.$measureNode.innerHTML = c.stringRepeat("X", d);
            this.$characterSize = { width: 0, height: 0 };
            this.checkForSizeChanges();
        };
        (function () {
            h.implement(this, a);
            this.$characterSize = { width: 0, height: 0 };
            this.$testFractionalRect = function () {
                var a = g.createElement("div");
                this.$setMeasureNodeStyles(a.style);
                a.style.width = "0.2px";
                document.documentElement.appendChild(a);
                var b = a.getBoundingClientRect().width;
                0 < b && 1 > b ? (d = 50) : (d = 100);
                a.parentNode.removeChild(a);
            };
            this.$setMeasureNodeStyles = function (a, c) {
                a.width = a.height = "auto";
                a.left = a.top = "0px";
                a.visibility = "hidden";
                a.position = "absolute";
                a.whiteSpace = "pre";
                8 > b.isIE
                    ? (a["font-family"] = "inherit")
                    : (a.font = "inherit");
                a.overflow = c ? "hidden" : "visible";
            };
            this.checkForSizeChanges = function () {
                var a = this.$measureSizes();
                if (
                    a &&
                    (this.$characterSize.width !== a.width ||
                        this.$characterSize.height !== a.height)
                ) {
                    this.$measureNode.style.fontWeight = "bold";
                    var b = this.$measureSizes();
                    this.$measureNode.style.fontWeight = "";
                    this.$characterSize = a;
                    this.charSizes = Object.create(null);
                    this.allowBoldFonts =
                        b && b.width === a.width && b.height === a.height;
                    this._emit("changeCharacterSize", { data: a });
                }
            };
            this.$pollSizeChanges = function () {
                if (this.$pollSizeChangesTimer)
                    return this.$pollSizeChangesTimer;
                var a = this;
                return (this.$pollSizeChangesTimer = setInterval(function () {
                    a.checkForSizeChanges();
                }, 500));
            };
            this.setPolling = function (a) {
                a
                    ? this.$pollSizeChanges()
                    : this.$pollSizeChangesTimer &&
                      (clearInterval(this.$pollSizeChangesTimer),
                      (this.$pollSizeChangesTimer = 0));
            };
            this.$measureSizes = function () {
                if (50 === d) {
                    var a = null;
                    try {
                        a = this.$measureNode.getBoundingClientRect();
                    } catch (m) {
                        a = { width: 0, height: 0 };
                    }
                    a = { height: a.height, width: a.width / d };
                } else
                    a = {
                        height: this.$measureNode.clientHeight,
                        width: this.$measureNode.clientWidth / d,
                    };
                return 0 === a.width || 0 === a.height ? null : a;
            };
            this.$measureCharWidth = function (a) {
                this.$main.innerHTML = c.stringRepeat(a, d);
                return this.$main.getBoundingClientRect().width / d;
            };
            this.getCharacterWidth = function (a) {
                var b = this.charSizes[a];
                return (
                    void 0 === b &&
                        (b = this.charSizes[a] =
                            this.$measureCharWidth(a) /
                            this.$characterSize.width),
                    b
                );
            };
            this.destroy = function () {
                clearInterval(this.$pollSizeChangesTimer);
                this.el &&
                    this.el.parentNode &&
                    this.el.parentNode.removeChild(this.el);
            };
        }.call(n.prototype));
    }
);
ace.define(
    "ace/virtual_renderer",
    "require exports module ace/lib/oop ace/lib/dom ace/config ace/lib/useragent ace/layer/gutter ace/layer/marker ace/layer/text ace/layer/cursor ace/scrollbar ace/scrollbar ace/renderloop ace/layer/font_metrics ace/lib/event_emitter".split(
        " "
    ),
    function (n, q, t) {
        var h = n("./lib/oop"),
            g = n("./lib/dom"),
            c = n("./config"),
            b = n("./lib/useragent"),
            a = n("./layer/gutter").Gutter,
            d = n("./layer/marker").Marker,
            e = n("./layer/text").Text,
            m = n("./layer/cursor").Cursor,
            f = n("./scrollbar").HScrollBar,
            k = n("./scrollbar").VScrollBar,
            l = n("./renderloop").RenderLoop,
            v = n("./layer/font_metrics").FontMetrics,
            u = n("./lib/event_emitter").EventEmitter;
        g.importCssString(
            '.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;min-width: 100%;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: inherit;color: inherit;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-webkit-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-webkit-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-webkit-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_text-input-ios {position: absolute !important;top: -100000px !important;left: -100000px !important;}',
            "ace_editor.css"
        );
        n = function (r, p) {
            var h = this;
            this.container = r || g.createElement("div");
            this.$keepTextAreaAtCursor = !b.isOldIE;
            g.addCssClass(this.container, "ace_editor");
            this.setTheme(p);
            this.$gutter = g.createElement("div");
            this.$gutter.className = "ace_gutter";
            this.container.appendChild(this.$gutter);
            this.scroller = g.createElement("div");
            this.scroller.className = "ace_scroller";
            this.container.appendChild(this.scroller);
            this.content = g.createElement("div");
            this.content.className = "ace_content";
            this.scroller.appendChild(this.content);
            this.$gutterLayer = new a(this.$gutter);
            this.$gutterLayer.on(
                "changeGutterWidth",
                this.onGutterResize.bind(this)
            );
            this.$markerBack = new d(this.content);
            this.canvas = (this.$textLayer = new e(this.content)).element;
            this.$markerFront = new d(this.content);
            this.$cursorLayer = new m(this.content);
            this.$vScroll = this.$horizScroll = !1;
            this.scrollBar = this.scrollBarV = new k(this.container, this);
            this.scrollBarH = new f(this.container, this);
            this.scrollBarV.addEventListener("scroll", function (a) {
                h.$scrollAnimation ||
                    h.session.setScrollTop(a.data - h.scrollMargin.top);
            });
            this.scrollBarH.addEventListener("scroll", function (a) {
                h.$scrollAnimation ||
                    h.session.setScrollLeft(a.data - h.scrollMargin.left);
            });
            this.scrollLeft = this.scrollTop = 0;
            this.cursorPos = { row: 0, column: 0 };
            this.$fontMetrics = new v(this.container);
            this.$textLayer.$setFontMetrics(this.$fontMetrics);
            this.$textLayer.addEventListener("changeCharacterSize", function (
                a
            ) {
                h.updateCharacterSize();
                h.onResize(!0, h.gutterWidth, h.$size.width, h.$size.height);
                h._signal("changeCharacterSize", a);
            });
            this.$size = {
                width: 0,
                height: 0,
                scrollerHeight: 0,
                scrollerWidth: 0,
                $dirty: !0,
            };
            this.layerConfig = {
                width: 1,
                padding: 0,
                firstRow: 0,
                firstRowScreen: 0,
                lastRow: 0,
                lineHeight: 0,
                characterWidth: 0,
                minHeight: 1,
                maxHeight: 1,
                offset: 0,
                height: 1,
                gutterOffset: 1,
            };
            this.scrollMargin = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                v: 0,
                h: 0,
            };
            this.$loop = new l(
                this.$renderChanges.bind(this),
                this.container.ownerDocument.defaultView
            );
            this.$loop.schedule(this.CHANGE_FULL);
            this.updateCharacterSize();
            this.setPadding(4);
            c.resetOptions(this);
            c._emit("renderer", this);
        };
        (function () {
            this.CHANGE_CURSOR = 1;
            this.CHANGE_MARKER = 2;
            this.CHANGE_GUTTER = 4;
            this.CHANGE_SCROLL = 8;
            this.CHANGE_LINES = 16;
            this.CHANGE_TEXT = 32;
            this.CHANGE_SIZE = 64;
            this.CHANGE_MARKER_BACK = 128;
            this.CHANGE_MARKER_FRONT = 256;
            this.CHANGE_FULL = 512;
            this.CHANGE_H_SCROLL = 1024;
            h.implement(this, u);
            this.updateCharacterSize = function () {
                this.$textLayer.allowBoldFonts != this.$allowBoldFonts &&
                    ((this.$allowBoldFonts = this.$textLayer.allowBoldFonts),
                    this.setStyle("ace_nobold", !this.$allowBoldFonts));
                this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth();
                this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight();
                this.$updatePrintMargin();
            };
            this.setSession = function (a) {
                this.session &&
                    this.session.doc.off(
                        "changeNewLineMode",
                        this.onChangeNewLineMode
                    );
                (this.session = a) &&
                    this.scrollMargin.top &&
                    0 >= a.getScrollTop() &&
                    a.setScrollTop(-this.scrollMargin.top);
                this.$cursorLayer.setSession(a);
                this.$markerBack.setSession(a);
                this.$markerFront.setSession(a);
                this.$gutterLayer.setSession(a);
                this.$textLayer.setSession(a);
                a &&
                    (this.$loop.schedule(this.CHANGE_FULL),
                    this.session.$setFontMetrics(this.$fontMetrics),
                    (this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null),
                    (this.onChangeNewLineMode = this.onChangeNewLineMode.bind(
                        this
                    )),
                    this.onChangeNewLineMode(),
                    this.session.doc.on(
                        "changeNewLineMode",
                        this.onChangeNewLineMode
                    ));
            };
            this.updateLines = function (a, b, c) {
                void 0 === b && (b = Infinity);
                this.$changedLines
                    ? (this.$changedLines.firstRow > a &&
                          (this.$changedLines.firstRow = a),
                      this.$changedLines.lastRow < b &&
                          (this.$changedLines.lastRow = b))
                    : (this.$changedLines = { firstRow: a, lastRow: b });
                if (this.$changedLines.lastRow < this.layerConfig.firstRow) {
                    if (!c) return;
                    this.$changedLines.lastRow = this.layerConfig.lastRow;
                }
                this.$changedLines.firstRow > this.layerConfig.lastRow ||
                    this.$loop.schedule(this.CHANGE_LINES);
            };
            this.onChangeNewLineMode = function () {
                this.$loop.schedule(this.CHANGE_TEXT);
                this.$textLayer.$updateEolChar();
            };
            this.onChangeTabSize = function () {
                this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER);
                this.$textLayer.onChangeTabSize();
            };
            this.updateText = function () {
                this.$loop.schedule(this.CHANGE_TEXT);
            };
            this.updateFull = function (a) {
                a
                    ? this.$renderChanges(this.CHANGE_FULL, !0)
                    : this.$loop.schedule(this.CHANGE_FULL);
            };
            this.updateFontSize = function () {
                this.$textLayer.checkForSizeChanges();
            };
            this.$changes = 0;
            this.$updateSizeAsync = function () {
                this.$loop.pending ? (this.$size.$dirty = !0) : this.onResize();
            };
            this.onResize = function (a, b, c, d) {
                if (!(2 < this.resizing)) {
                    0 < this.resizing
                        ? this.resizing++
                        : (this.resizing = a ? 1 : 0);
                    var e = this.container;
                    d || (d = e.clientHeight || e.scrollHeight);
                    c || (c = e.clientWidth || e.scrollWidth);
                    b = this.$updateCachedSize(a, b, c, d);
                    if (!this.$size.scrollerHeight || (!c && !d))
                        return (this.resizing = 0);
                    a && (this.$gutterLayer.$padding = null);
                    a
                        ? this.$renderChanges(b | this.$changes, !0)
                        : this.$loop.schedule(b | this.$changes);
                    this.resizing && (this.resizing = 0);
                    this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null;
                }
            };
            this.$updateCachedSize = function (a, b, c, d) {
                d -= this.$extraHeight || 0;
                var e = 0,
                    l = this.$size,
                    p = {
                        width: l.width,
                        height: l.height,
                        scrollerHeight: l.scrollerHeight,
                        scrollerWidth: l.scrollerWidth,
                    };
                d &&
                    (a || l.height != d) &&
                    ((l.height = d),
                    (e |= this.CHANGE_SIZE),
                    (l.scrollerHeight = l.height),
                    this.$horizScroll &&
                        (l.scrollerHeight -= this.scrollBarH.getHeight()),
                    (this.scrollBarV.element.style.bottom =
                        this.scrollBarH.getHeight() + "px"),
                    (e |= this.CHANGE_SCROLL));
                c &&
                    (a || l.width != c) &&
                    ((e |= this.CHANGE_SIZE),
                    (l.width = c),
                    null == b &&
                        (b = this.$showGutter ? this.$gutter.offsetWidth : 0),
                    (this.gutterWidth = b),
                    (this.scrollBarH.element.style.left = this.scroller.style.left =
                        b + "px"),
                    (l.scrollerWidth = Math.max(
                        0,
                        c - b - this.scrollBarV.getWidth()
                    )),
                    (this.scrollBarH.element.style.right = this.scroller.style.right =
                        this.scrollBarV.getWidth() + "px"),
                    (this.scroller.style.bottom =
                        this.scrollBarH.getHeight() + "px"),
                    (this.session &&
                        this.session.getUseWrapMode() &&
                        this.adjustWrapLimit()) ||
                        a) &&
                    (e |= this.CHANGE_FULL);
                return (l.$dirty = !c || !d), e && this._signal("resize", p), e;
            };
            this.onGutterResize = function () {
                var a = this.$showGutter ? this.$gutter.offsetWidth : 0;
                a != this.gutterWidth &&
                    (this.$changes |= this.$updateCachedSize(
                        !0,
                        a,
                        this.$size.width,
                        this.$size.height
                    ));
                this.session.getUseWrapMode() && this.adjustWrapLimit()
                    ? this.$loop.schedule(this.CHANGE_FULL)
                    : this.$size.$dirty
                    ? this.$loop.schedule(this.CHANGE_FULL)
                    : (this.$computeLayerConfig(),
                      this.$loop.schedule(this.CHANGE_MARKER));
            };
            this.adjustWrapLimit = function () {
                return this.session.adjustWrapLimit(
                    Math.floor(
                        (this.$size.scrollerWidth - 2 * this.$padding) /
                            this.characterWidth
                    ),
                    this.$showPrintMargin && this.$printMarginColumn
                );
            };
            this.setAnimatedScroll = function (a) {
                this.setOption("animatedScroll", a);
            };
            this.getAnimatedScroll = function () {
                return this.$animatedScroll;
            };
            this.setShowInvisibles = function (a) {
                this.setOption("showInvisibles", a);
            };
            this.getShowInvisibles = function () {
                return this.getOption("showInvisibles");
            };
            this.getDisplayIndentGuides = function () {
                return this.getOption("displayIndentGuides");
            };
            this.setDisplayIndentGuides = function (a) {
                this.setOption("displayIndentGuides", a);
            };
            this.setShowPrintMargin = function (a) {
                this.setOption("showPrintMargin", a);
            };
            this.getShowPrintMargin = function () {
                return this.getOption("showPrintMargin");
            };
            this.setPrintMarginColumn = function (a) {
                this.setOption("printMarginColumn", a);
            };
            this.getPrintMarginColumn = function () {
                return this.getOption("printMarginColumn");
            };
            this.getShowGutter = function () {
                return this.getOption("showGutter");
            };
            this.setShowGutter = function (a) {
                return this.setOption("showGutter", a);
            };
            this.getFadeFoldWidgets = function () {
                return this.getOption("fadeFoldWidgets");
            };
            this.setFadeFoldWidgets = function (a) {
                this.setOption("fadeFoldWidgets", a);
            };
            this.setHighlightGutterLine = function (a) {
                this.setOption("highlightGutterLine", a);
            };
            this.getHighlightGutterLine = function () {
                return this.getOption("highlightGutterLine");
            };
            this.$updateGutterLineHighlight = function () {
                var a = this.$cursorLayer.$pixelPos,
                    b = this.layerConfig.lineHeight;
                if (this.session.getUseWrapMode()) {
                    var c = this.session.selection.getCursor();
                    c.column = 0;
                    a = this.$cursorLayer.getPixelPosition(c, !0);
                    b *= this.session.getRowLength(c.row);
                }
                this.$gutterLineHighlight.style.top =
                    a.top - this.layerConfig.offset + "px";
                this.$gutterLineHighlight.style.height = b + "px";
            };
            this.$updatePrintMargin = function () {
                if (this.$showPrintMargin || this.$printMarginEl) {
                    if (!this.$printMarginEl) {
                        var a = g.createElement("div");
                        a.className = "ace_layer ace_print-margin-layer";
                        this.$printMarginEl = g.createElement("div");
                        this.$printMarginEl.className = "ace_print-margin";
                        a.appendChild(this.$printMarginEl);
                        this.content.insertBefore(a, this.content.firstChild);
                    }
                    a = this.$printMarginEl.style;
                    a.left =
                        this.characterWidth * this.$printMarginColumn +
                        this.$padding +
                        "px";
                    a.visibility = this.$showPrintMargin ? "visible" : "hidden";
                    this.session &&
                        -1 == this.session.$wrap &&
                        this.adjustWrapLimit();
                }
            };
            this.getContainerElement = function () {
                return this.container;
            };
            this.getMouseEventTarget = function () {
                return this.scroller;
            };
            this.getTextAreaContainer = function () {
                return this.container;
            };
            this.$moveTextAreaToCursor = function () {
                if (this.$keepTextAreaAtCursor) {
                    var a = this.layerConfig,
                        b = this.$cursorLayer.$pixelPos.top,
                        c = this.$cursorLayer.$pixelPos.left,
                        b = b - a.offset,
                        d = this.textarea.style,
                        e = this.lineHeight;
                    if (0 > b || b > a.height - e) d.top = d.left = "0";
                    else {
                        a = this.characterWidth;
                        if (this.$composition)
                            var l = this.textarea.value.replace(/^\x01+/, ""),
                                a =
                                    a *
                                    (this.session.$getStringScreenWidth(l)[0] +
                                        2),
                                e = e + 2;
                        c -= this.scrollLeft;
                        c > this.$size.scrollerWidth - a &&
                            (c = this.$size.scrollerWidth - a);
                        c += this.gutterWidth;
                        d.height = e + "px";
                        d.width = a + "px";
                        d.left =
                            Math.min(c, this.$size.scrollerWidth - a) + "px";
                        d.top = Math.min(b, this.$size.height - e) + "px";
                    }
                }
            };
            this.getFirstVisibleRow = function () {
                return this.layerConfig.firstRow;
            };
            this.getFirstFullyVisibleRow = function () {
                return (
                    this.layerConfig.firstRow +
                    (0 === this.layerConfig.offset ? 0 : 1)
                );
            };
            this.getLastFullyVisibleRow = function () {
                var a = this.layerConfig,
                    b = a.lastRow;
                return this.session.documentToScreenRow(b, 0) * a.lineHeight -
                    this.session.getScrollTop() >
                    a.height - a.lineHeight
                    ? b - 1
                    : b;
            };
            this.getLastVisibleRow = function () {
                return this.layerConfig.lastRow;
            };
            this.$padding = null;
            this.setPadding = function (a) {
                this.$padding = a;
                this.$textLayer.setPadding(a);
                this.$cursorLayer.setPadding(a);
                this.$markerFront.setPadding(a);
                this.$markerBack.setPadding(a);
                this.$loop.schedule(this.CHANGE_FULL);
                this.$updatePrintMargin();
            };
            this.setScrollMargin = function (a, b, c, d) {
                var e = this.scrollMargin;
                e.top = a | 0;
                e.bottom = b | 0;
                e.right = d | 0;
                e.left = c | 0;
                e.v = e.top + e.bottom;
                e.h = e.left + e.right;
                e.top &&
                    0 >= this.scrollTop &&
                    this.session &&
                    this.session.setScrollTop(-e.top);
                this.updateFull();
            };
            this.getHScrollBarAlwaysVisible = function () {
                return this.$hScrollBarAlwaysVisible;
            };
            this.setHScrollBarAlwaysVisible = function (a) {
                this.setOption("hScrollBarAlwaysVisible", a);
            };
            this.getVScrollBarAlwaysVisible = function () {
                return this.$vScrollBarAlwaysVisible;
            };
            this.setVScrollBarAlwaysVisible = function (a) {
                this.setOption("vScrollBarAlwaysVisible", a);
            };
            this.$updateScrollBarV = function () {
                var a = this.layerConfig.maxHeight,
                    b = this.$size.scrollerHeight;
                !this.$maxLines &&
                    this.$scrollPastEnd &&
                    ((a -= (b - this.lineHeight) * this.$scrollPastEnd),
                    this.scrollTop > a - b &&
                        ((a = this.scrollTop + b),
                        (this.scrollBarV.scrollTop = null)));
                this.scrollBarV.setScrollHeight(a + this.scrollMargin.v);
                this.scrollBarV.setScrollTop(
                    this.scrollTop + this.scrollMargin.top
                );
            };
            this.$updateScrollBarH = function () {
                this.scrollBarH.setScrollWidth(
                    this.layerConfig.width +
                        2 * this.$padding +
                        this.scrollMargin.h
                );
                this.scrollBarH.setScrollLeft(
                    this.scrollLeft + this.scrollMargin.left
                );
            };
            this.$frozen = !1;
            this.freeze = function () {
                this.$frozen = !0;
            };
            this.unfreeze = function () {
                this.$frozen = !1;
            };
            this.$renderChanges = function (a, b) {
                this.$changes && ((a |= this.$changes), (this.$changes = 0));
                if (
                    this.session &&
                    this.container.offsetWidth &&
                    !this.$frozen &&
                    (a || b)
                ) {
                    if (this.$size.$dirty)
                        return (this.$changes |= a), this.onResize(!0);
                    this.lineHeight || this.$textLayer.checkForSizeChanges();
                    this._signal("beforeRender");
                    b = this.layerConfig;
                    if (
                        a & this.CHANGE_FULL ||
                        a & this.CHANGE_SIZE ||
                        a & this.CHANGE_TEXT ||
                        a & this.CHANGE_LINES ||
                        a & this.CHANGE_SCROLL ||
                        a & this.CHANGE_H_SCROLL
                    )
                        (a |= this.$computeLayerConfig()),
                            b.firstRow != this.layerConfig.firstRow &&
                                b.firstRowScreen ==
                                    this.layerConfig.firstRowScreen &&
                                ((b =
                                    this.scrollTop +
                                    (b.firstRow - this.layerConfig.firstRow) *
                                        this.lineHeight),
                                0 < b &&
                                    ((this.scrollTop = b),
                                    (a |= this.CHANGE_SCROLL),
                                    (a |= this.$computeLayerConfig()))),
                            (b = this.layerConfig),
                            this.$updateScrollBarV(),
                            a & this.CHANGE_H_SCROLL &&
                                this.$updateScrollBarH(),
                            (this.$gutterLayer.element.style.marginTop =
                                -b.offset + "px"),
                            (this.content.style.marginTop = -b.offset + "px"),
                            (this.content.style.width =
                                b.width + 2 * this.$padding + "px"),
                            (this.content.style.height = b.minHeight + "px");
                    a & this.CHANGE_H_SCROLL &&
                        ((this.content.style.marginLeft =
                            -this.scrollLeft + "px"),
                        (this.scroller.className =
                            0 >= this.scrollLeft
                                ? "ace_scroller"
                                : "ace_scroller ace_scroll-left"));
                    a & this.CHANGE_FULL
                        ? (this.$textLayer.update(b),
                          this.$showGutter && this.$gutterLayer.update(b),
                          this.$markerBack.update(b),
                          this.$markerFront.update(b),
                          this.$cursorLayer.update(b),
                          this.$moveTextAreaToCursor(),
                          this.$highlightGutterLine &&
                              this.$updateGutterLineHighlight())
                        : a & this.CHANGE_SCROLL
                        ? (a & this.CHANGE_TEXT || a & this.CHANGE_LINES
                              ? this.$textLayer.update(b)
                              : this.$textLayer.scrollLines(b),
                          this.$showGutter && this.$gutterLayer.update(b),
                          this.$markerBack.update(b),
                          this.$markerFront.update(b),
                          this.$cursorLayer.update(b),
                          this.$highlightGutterLine &&
                              this.$updateGutterLineHighlight(),
                          this.$moveTextAreaToCursor())
                        : (a & this.CHANGE_TEXT
                              ? (this.$textLayer.update(b),
                                this.$showGutter && this.$gutterLayer.update(b))
                              : a & this.CHANGE_LINES
                              ? (this.$updateLines() ||
                                    (a & this.CHANGE_GUTTER &&
                                        this.$showGutter)) &&
                                this.$gutterLayer.update(b)
                              : (a & this.CHANGE_TEXT ||
                                    a & this.CHANGE_GUTTER) &&
                                this.$showGutter &&
                                this.$gutterLayer.update(b),
                          a & this.CHANGE_CURSOR &&
                              (this.$cursorLayer.update(b),
                              this.$moveTextAreaToCursor(),
                              this.$highlightGutterLine &&
                                  this.$updateGutterLineHighlight()),
                          a & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) &&
                              this.$markerFront.update(b),
                          a & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) &&
                              this.$markerBack.update(b));
                    this._signal("afterRender");
                } else this.$changes |= a;
            };
            this.$autosize = function () {
                var a = this.session.getScreenLength() * this.lineHeight,
                    b = this.$maxLines * this.lineHeight,
                    c =
                        Math.min(
                            b,
                            Math.max((this.$minLines || 1) * this.lineHeight, a)
                        ) +
                        this.scrollMargin.v +
                        (this.$extraHeight || 0);
                this.$horizScroll && (c += this.scrollBarH.getHeight());
                this.$maxPixelHeight &&
                    c > this.$maxPixelHeight &&
                    (c = this.$maxPixelHeight);
                a = a > b;
                if (
                    c != this.desiredHeight ||
                    this.$size.height != this.desiredHeight ||
                    a != this.$vScroll
                )
                    a != this.$vScroll &&
                        ((this.$vScroll = a), this.scrollBarV.setVisible(a)),
                        (a = this.container.clientWidth),
                        (this.container.style.height = c + "px"),
                        this.$updateCachedSize(!0, this.$gutterWidth, a, c),
                        (this.desiredHeight = c),
                        this._signal("autosize");
            };
            this.$computeLayerConfig = function () {
                var a = this.session,
                    b = this.$size,
                    c = b.height <= 2 * this.lineHeight,
                    d = this.session.getScreenLength() * this.lineHeight,
                    e = this.$getLongestLine(),
                    l =
                        !c &&
                        (this.$hScrollBarAlwaysVisible ||
                            0 > b.scrollerWidth - e - 2 * this.$padding),
                    f = this.$horizScroll !== l;
                f && ((this.$horizScroll = l), this.scrollBarH.setVisible(l));
                var m = this.$vScroll;
                this.$maxLines && 1 < this.lineHeight && this.$autosize();
                var l = this.scrollTop % this.lineHeight,
                    k = b.scrollerHeight + this.lineHeight,
                    g =
                        !this.$maxLines && this.$scrollPastEnd
                            ? (b.scrollerHeight - this.lineHeight) *
                              this.$scrollPastEnd
                            : 0,
                    d = d + g,
                    h = this.scrollMargin;
                this.session.setScrollTop(
                    Math.max(
                        -h.top,
                        Math.min(
                            this.scrollTop,
                            d - b.scrollerHeight + h.bottom
                        )
                    )
                );
                this.session.setScrollLeft(
                    Math.max(
                        -h.left,
                        Math.min(
                            this.scrollLeft,
                            e + 2 * this.$padding - b.scrollerWidth + h.right
                        )
                    )
                );
                g =
                    !c &&
                    (this.$vScrollBarAlwaysVisible ||
                        0 > b.scrollerHeight - d + g ||
                        this.scrollTop > h.top);
                (c = m !== g) &&
                    ((this.$vScroll = g), this.scrollBarV.setVisible(g));
                var m = Math.max(
                        0,
                        Math.round((this.scrollTop - l) / this.lineHeight)
                    ),
                    g = m + (Math.ceil(k / this.lineHeight) - 1),
                    h = this.lineHeight,
                    m = a.screenToDocumentRow(m, 0);
                (l = a.getFoldLine(m)) && (m = l.start.row);
                var n = a.documentToScreenRow(m, 0);
                l = a.getRowLength(m) * h;
                g = Math.min(a.screenToDocumentRow(g, 0), a.getLength() - 1);
                k = b.scrollerHeight + a.getRowLength(g) * h + l;
                l = this.scrollTop - n * h;
                a = 0;
                this.layerConfig.width != e && (a = this.CHANGE_H_SCROLL);
                if (f || c)
                    (a = this.$updateCachedSize(
                        !0,
                        this.gutterWidth,
                        b.width,
                        b.height
                    )),
                        this._signal("scrollbarVisibilityChanged"),
                        c && (e = this.$getLongestLine());
                return (
                    (this.layerConfig = {
                        width: e,
                        padding: this.$padding,
                        firstRow: m,
                        firstRowScreen: n,
                        lastRow: g,
                        lineHeight: h,
                        characterWidth: this.characterWidth,
                        minHeight: k,
                        maxHeight: d,
                        offset: l,
                        gutterOffset: h
                            ? Math.max(
                                  0,
                                  Math.ceil(
                                      (l + b.height - b.scrollerHeight) / h
                                  )
                              )
                            : 0,
                        height: this.$size.scrollerHeight,
                    }),
                    a
                );
            };
            this.$updateLines = function () {
                var a = this.$changedLines.firstRow,
                    b = this.$changedLines.lastRow;
                this.$changedLines = null;
                var c = this.layerConfig;
                if (!(a > c.lastRow + 1 || b < c.firstRow))
                    if (Infinity === b)
                        this.$showGutter && this.$gutterLayer.update(c),
                            this.$textLayer.update(c);
                    else return this.$textLayer.updateLines(c, a, b), !0;
            };
            this.$getLongestLine = function () {
                var a = this.session.getScreenWidth();
                return (
                    this.showInvisibles &&
                        !this.session.$useWrapMode &&
                        (a += 1),
                    Math.max(
                        this.$size.scrollerWidth - 2 * this.$padding,
                        Math.round(a * this.characterWidth)
                    )
                );
            };
            this.updateFrontMarkers = function () {
                this.$markerFront.setMarkers(this.session.getMarkers(!0));
                this.$loop.schedule(this.CHANGE_MARKER_FRONT);
            };
            this.updateBackMarkers = function () {
                this.$markerBack.setMarkers(this.session.getMarkers());
                this.$loop.schedule(this.CHANGE_MARKER_BACK);
            };
            this.addGutterDecoration = function (a, b) {
                this.$gutterLayer.addGutterDecoration(a, b);
            };
            this.removeGutterDecoration = function (a, b) {
                this.$gutterLayer.removeGutterDecoration(a, b);
            };
            this.updateBreakpoints = function (a) {
                this.$loop.schedule(this.CHANGE_GUTTER);
            };
            this.setAnnotations = function (a) {
                this.$gutterLayer.setAnnotations(a);
                this.$loop.schedule(this.CHANGE_GUTTER);
            };
            this.updateCursor = function () {
                this.$loop.schedule(this.CHANGE_CURSOR);
            };
            this.hideCursor = function () {
                this.$cursorLayer.hideCursor();
            };
            this.showCursor = function () {
                this.$cursorLayer.showCursor();
            };
            this.scrollSelectionIntoView = function (a, b, c) {
                this.scrollCursorIntoView(a, c);
                this.scrollCursorIntoView(b, c);
            };
            this.scrollCursorIntoView = function (a, b, c) {
                if (0 !== this.$size.scrollerHeight) {
                    var d = this.$cursorLayer.getPixelPosition(a);
                    a = d.left;
                    var d = d.top,
                        e = (c && c.top) || 0;
                    c = (c && c.bottom) || 0;
                    var l = this.$scrollAnimation
                        ? this.session.getScrollTop()
                        : this.scrollTop;
                    l + e > d
                        ? (b &&
                              l + e > d + this.lineHeight &&
                              (d -= b * this.$size.scrollerHeight),
                          0 === d && (d = -this.scrollMargin.top),
                          this.session.setScrollTop(d))
                        : l + this.$size.scrollerHeight - c <
                              d + this.lineHeight &&
                          (b &&
                              l + this.$size.scrollerHeight - c <
                                  d - this.lineHeight &&
                              (d += b * this.$size.scrollerHeight),
                          this.session.setScrollTop(
                              d + this.lineHeight - this.$size.scrollerHeight
                          ));
                    b = this.scrollLeft;
                    b > a
                        ? (a <
                              this.$padding +
                                  2 * this.layerConfig.characterWidth &&
                              (a = -this.scrollMargin.left),
                          this.session.setScrollLeft(a))
                        : b + this.$size.scrollerWidth < a + this.characterWidth
                        ? this.session.setScrollLeft(
                              Math.round(
                                  a +
                                      this.characterWidth -
                                      this.$size.scrollerWidth
                              )
                          )
                        : b <= this.$padding &&
                          a - b < this.characterWidth &&
                          this.session.setScrollLeft(0);
                }
            };
            this.getScrollTop = function () {
                return this.session.getScrollTop();
            };
            this.getScrollLeft = function () {
                return this.session.getScrollLeft();
            };
            this.getScrollTopRow = function () {
                return this.scrollTop / this.lineHeight;
            };
            this.getScrollBottomRow = function () {
                return Math.max(
                    0,
                    Math.floor(
                        (this.scrollTop + this.$size.scrollerHeight) /
                            this.lineHeight
                    ) - 1
                );
            };
            this.scrollToRow = function (a) {
                this.session.setScrollTop(a * this.lineHeight);
            };
            this.alignCursor = function (a, b) {
                "number" == typeof a && (a = { row: a, column: 0 });
                a =
                    this.$cursorLayer.getPixelPosition(a).top -
                    (this.$size.scrollerHeight - this.lineHeight) * (b || 0);
                return this.session.setScrollTop(a), a;
            };
            this.STEPS = 8;
            this.$calcSteps = function (a, b) {
                var c,
                    d = this.STEPS,
                    e = [];
                for (c = 0; c < d; ++c)
                    e.push((b - a) * (Math.pow(c / this.STEPS - 1, 3) + 1) + a);
                return e;
            };
            this.scrollToLine = function (a, b, c, d) {
                a = this.$cursorLayer.getPixelPosition({ row: a, column: 0 })
                    .top;
                b && (a -= this.$size.scrollerHeight / 2);
                b = this.scrollTop;
                this.session.setScrollTop(a);
                !1 !== c && this.animateScrolling(b, d);
            };
            this.animateScrolling = function (a, b) {
                var c = this.scrollTop;
                if (this.$animatedScroll) {
                    var d = this;
                    if (a != c) {
                        if (this.$scrollAnimation) {
                            var e = this.$scrollAnimation.steps;
                            if (e.length && ((a = e[0]), a == c)) return;
                        }
                        var l = d.$calcSteps(a, c);
                        this.$scrollAnimation = { from: a, to: c, steps: l };
                        clearInterval(this.$timer);
                        d.session.setScrollTop(l.shift());
                        d.session.$scrollTop = c;
                        this.$timer = setInterval(function () {
                            l.length
                                ? (d.session.setScrollTop(l.shift()),
                                  (d.session.$scrollTop = c))
                                : null != c
                                ? ((d.session.$scrollTop = -1),
                                  d.session.setScrollTop(c),
                                  (c = null))
                                : ((d.$timer = clearInterval(d.$timer)),
                                  (d.$scrollAnimation = null),
                                  b && b());
                        }, 10);
                    }
                }
            };
            this.scrollToY = function (a) {
                this.scrollTop !== a &&
                    (this.$loop.schedule(this.CHANGE_SCROLL),
                    (this.scrollTop = a));
            };
            this.scrollToX = function (a) {
                this.scrollLeft !== a && (this.scrollLeft = a);
                this.$loop.schedule(this.CHANGE_H_SCROLL);
            };
            this.scrollTo = function (a, b) {
                this.session.setScrollTop(b);
                this.session.setScrollLeft(b);
            };
            this.scrollBy = function (a, b) {
                b && this.session.setScrollTop(this.session.getScrollTop() + b);
                a &&
                    this.session.setScrollLeft(
                        this.session.getScrollLeft() + a
                    );
            };
            this.isScrollableBy = function (a, b) {
                if (
                    (0 > b &&
                        this.session.getScrollTop() >=
                            1 - this.scrollMargin.top) ||
                    (0 < b &&
                        this.session.getScrollTop() +
                            this.$size.scrollerHeight -
                            this.layerConfig.maxHeight <
                            -1 + this.scrollMargin.bottom) ||
                    (0 > a &&
                        this.session.getScrollLeft() >=
                            1 - this.scrollMargin.left) ||
                    (0 < a &&
                        this.session.getScrollLeft() +
                            this.$size.scrollerWidth -
                            this.layerConfig.width <
                            -1 + this.scrollMargin.right)
                )
                    return !0;
            };
            this.pixelToScreenCoordinates = function (a, b) {
                var c = this.scroller.getBoundingClientRect();
                a =
                    (a + this.scrollLeft - c.left - this.$padding) /
                    this.characterWidth;
                var d = Math.round(a);
                return {
                    row: Math.floor(
                        (b + this.scrollTop - c.top) / this.lineHeight
                    ),
                    column: d,
                    side: 0 < a - d ? 1 : -1,
                };
            };
            this.screenToTextCoordinates = function (a, b) {
                var c = this.scroller.getBoundingClientRect();
                return this.session.screenToDocumentPosition(
                    (b + this.scrollTop - c.top) / this.lineHeight,
                    Math.max(
                        Math.round(
                            (a + this.scrollLeft - c.left - this.$padding) /
                                this.characterWidth
                        ),
                        0
                    )
                );
            };
            this.textToScreenCoordinates = function (a, b) {
                var c = this.scroller.getBoundingClientRect();
                a = this.session.documentToScreenPosition(a, b);
                return {
                    pageX:
                        c.left +
                        (this.$padding +
                            Math.round(a.column * this.characterWidth)) -
                        this.scrollLeft,
                    pageY: c.top + a.row * this.lineHeight - this.scrollTop,
                };
            };
            this.visualizeFocus = function () {
                g.addCssClass(this.container, "ace_focus");
            };
            this.visualizeBlur = function () {
                g.removeCssClass(this.container, "ace_focus");
            };
            this.showComposition = function (a) {
                this.$composition ||
                    (this.$composition = {
                        keepTextAreaAtCursor: this.$keepTextAreaAtCursor,
                        cssText: this.textarea.style.cssText,
                    });
                this.$keepTextAreaAtCursor = !0;
                g.addCssClass(this.textarea, "ace_composition");
                this.textarea.style.cssText = "";
                this.$moveTextAreaToCursor();
            };
            this.setCompositionText = function (a) {
                this.$moveTextAreaToCursor();
            };
            this.hideComposition = function () {
                this.$composition &&
                    (g.removeCssClass(this.textarea, "ace_composition"),
                    (this.$keepTextAreaAtCursor = this.$composition.keepTextAreaAtCursor),
                    (this.textarea.style.cssText = this.$composition.cssText),
                    (this.$composition = null));
            };
            this.setTheme = function (a, b) {
                function d(c) {
                    if (e.$themeId != a) return b && b();
                    if (!c || !c.cssClass)
                        throw Error(
                            "couldn't load module " +
                                a +
                                " or it didn't call define"
                        );
                    g.importCssString(
                        c.cssText,
                        c.cssClass,
                        e.container.ownerDocument
                    );
                    e.theme && g.removeCssClass(e.container, e.theme.cssClass);
                    var d =
                        "padding" in c
                            ? c.padding
                            : "padding" in (e.theme || {})
                            ? 4
                            : e.$padding;
                    e.$padding && d != e.$padding && e.setPadding(d);
                    e.$theme = c.cssClass;
                    e.theme = c;
                    g.addCssClass(e.container, c.cssClass);
                    g.setCssClass(e.container, "ace_dark", c.isDark);
                    e.$size && ((e.$size.width = 0), e.$updateSizeAsync());
                    e._dispatchEvent("themeLoaded", { theme: c });
                    b && b();
                }
                var e = this;
                this.$themeId = a;
                e._dispatchEvent("themeChange", { theme: a });
                a && "string" != typeof a
                    ? d(a)
                    : c.loadModule(
                          ["theme", a || this.$options.theme.initialValue],
                          d
                      );
            };
            this.getTheme = function () {
                return this.$themeId;
            };
            this.setStyle = function (a, b) {
                g.setCssClass(this.container, a, !1 !== b);
            };
            this.unsetStyle = function (a) {
                g.removeCssClass(this.container, a);
            };
            this.setCursorStyle = function (a) {
                this.scroller.style.cursor != a &&
                    (this.scroller.style.cursor = a);
            };
            this.setMouseCursor = function (a) {
                this.scroller.style.cursor = a;
            };
            this.destroy = function () {
                this.$textLayer.destroy();
                this.$cursorLayer.destroy();
            };
        }.call(n.prototype));
        c.defineOptions(n.prototype, "renderer", {
            animatedScroll: { initialValue: !1 },
            showInvisibles: {
                set: function (a) {
                    this.$textLayer.setShowInvisibles(a) &&
                        this.$loop.schedule(this.CHANGE_TEXT);
                },
                initialValue: !1,
            },
            showPrintMargin: {
                set: function () {
                    this.$updatePrintMargin();
                },
                initialValue: !0,
            },
            printMarginColumn: {
                set: function () {
                    this.$updatePrintMargin();
                },
                initialValue: 80,
            },
            printMargin: {
                set: function (a) {
                    "number" == typeof a && (this.$printMarginColumn = a);
                    this.$showPrintMargin = !!a;
                    this.$updatePrintMargin();
                },
                get: function () {
                    return this.$showPrintMargin && this.$printMarginColumn;
                },
            },
            showGutter: {
                set: function (a) {
                    this.$gutter.style.display = a ? "block" : "none";
                    this.$loop.schedule(this.CHANGE_FULL);
                    this.onGutterResize();
                },
                initialValue: !0,
            },
            fadeFoldWidgets: {
                set: function (a) {
                    g.setCssClass(this.$gutter, "ace_fade-fold-widgets", a);
                },
                initialValue: !1,
            },
            showFoldWidgets: {
                set: function (a) {
                    this.$gutterLayer.setShowFoldWidgets(a);
                },
                initialValue: !0,
            },
            showLineNumbers: {
                set: function (a) {
                    this.$gutterLayer.setShowLineNumbers(a);
                    this.$loop.schedule(this.CHANGE_GUTTER);
                },
                initialValue: !0,
            },
            displayIndentGuides: {
                set: function (a) {
                    this.$textLayer.setDisplayIndentGuides(a) &&
                        this.$loop.schedule(this.CHANGE_TEXT);
                },
                initialValue: !0,
            },
            highlightGutterLine: {
                set: function (a) {
                    this.$gutterLineHighlight
                        ? ((this.$gutterLineHighlight.style.display = a
                              ? ""
                              : "none"),
                          this.$cursorLayer.$pixelPos &&
                              this.$updateGutterLineHighlight())
                        : ((this.$gutterLineHighlight = g.createElement("div")),
                          (this.$gutterLineHighlight.className =
                              "ace_gutter-active-line"),
                          this.$gutter.appendChild(this.$gutterLineHighlight));
                },
                initialValue: !1,
                value: !0,
            },
            hScrollBarAlwaysVisible: {
                set: function (a) {
                    (this.$hScrollBarAlwaysVisible && this.$horizScroll) ||
                        this.$loop.schedule(this.CHANGE_SCROLL);
                },
                initialValue: !1,
            },
            vScrollBarAlwaysVisible: {
                set: function (a) {
                    (this.$vScrollBarAlwaysVisible && this.$vScroll) ||
                        this.$loop.schedule(this.CHANGE_SCROLL);
                },
                initialValue: !1,
            },
            fontSize: {
                set: function (a) {
                    "number" == typeof a && (a += "px");
                    this.container.style.fontSize = a;
                    this.updateFontSize();
                },
                initialValue: 12,
            },
            fontFamily: {
                set: function (a) {
                    this.container.style.fontFamily = a;
                    this.updateFontSize();
                },
            },
            maxLines: {
                set: function (a) {
                    this.updateFull();
                },
            },
            minLines: {
                set: function (a) {
                    this.updateFull();
                },
            },
            maxPixelHeight: {
                set: function (a) {
                    this.updateFull();
                },
                initialValue: 0,
            },
            scrollPastEnd: {
                set: function (a) {
                    a = +a || 0;
                    this.$scrollPastEnd != a &&
                        ((this.$scrollPastEnd = a),
                        this.$loop.schedule(this.CHANGE_SCROLL));
                },
                initialValue: 0,
                handlesSet: !0,
            },
            fixedWidthGutter: {
                set: function (a) {
                    this.$gutterLayer.$fixedWidth = !!a;
                    this.$loop.schedule(this.CHANGE_GUTTER);
                },
            },
            theme: {
                set: function (a) {
                    this.setTheme(a);
                },
                get: function () {
                    return this.$themeId || this.theme;
                },
                initialValue: "./theme/textmate",
                handlesSet: !0,
            },
        });
        q.VirtualRenderer = n;
    }
);
ace.define(
    "ace/worker/worker_client",
    "require exports module ace/lib/oop ace/lib/net ace/lib/event_emitter ace/config".split(
        " "
    ),
    function (n, q, t) {
        function h(a) {
            a = "importScripts('" + c.qualifyURL(a) + "');";
            try {
                var b = new Blob([a], { type: "application/javascript" });
            } catch (f) {
                (b = new (window.BlobBuilder ||
                    window.WebKitBlobBuilder ||
                    window.MozBlobBuilder)()),
                    (b = (b.append(a), b.getBlob("application/javascript")));
            }
            b = (window.URL || window.webkitURL).createObjectURL(b);
            return new Worker(b);
        }
        var g = n("../lib/oop"),
            c = n("../lib/net"),
            b = n("../lib/event_emitter").EventEmitter,
            a = n("../config");
        t = function (b, c, d, k, l) {
            this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this);
            this.changeListener = this.changeListener.bind(this);
            this.onMessage = this.onMessage.bind(this);
            n.nameToUrl && !n.toUrl && (n.toUrl = n.nameToUrl);
            if (a.get("packaged") || !n.toUrl)
                k = k || a.moduleUrl(c, "worker");
            else {
                var e = this.$normalizePath;
                k = k || e(n.toUrl("ace/worker/worker.js", null, "_"));
                var f = {};
                b.forEach(function (a) {
                    f[a] = e(
                        n.toUrl(a, null, "_").replace(/(\.js)?(\?.*)?$/, "")
                    );
                });
            }
            this.$worker = h(k);
            l && this.send("importScripts", l);
            this.$worker.postMessage({
                init: !0,
                tlns: f,
                module: c,
                classname: d,
            });
            this.callbackId = 1;
            this.callbacks = {};
            this.$worker.onmessage = this.onMessage;
        };
        (function () {
            g.implement(this, b);
            this.onMessage = function (a) {
                a = a.data;
                switch (a.type) {
                    case "event":
                        this._signal(a.name, { data: a.data });
                        break;
                    case "call":
                        var b = this.callbacks[a.id];
                        b && (b(a.data), delete this.callbacks[a.id]);
                        break;
                    case "error":
                        this.reportError(a.data);
                        break;
                    case "log":
                        window.console &&
                            console.log &&
                            console.log.apply(console, a.data);
                }
            };
            this.reportError = function (a) {
                window.console && console.error && console.error(a);
            };
            this.$normalizePath = function (a) {
                return c.qualifyURL(a);
            };
            this.terminate = function () {
                this._signal("terminate", {});
                this.deltaQueue = null;
                this.$worker.terminate();
                this.$worker = null;
                this.$doc && this.$doc.off("change", this.changeListener);
                this.$doc = null;
            };
            this.send = function (a, b) {
                this.$worker.postMessage({ command: a, args: b });
            };
            this.call = function (a, b, c) {
                if (c) {
                    var d = this.callbackId++;
                    this.callbacks[d] = c;
                    b.push(d);
                }
                this.send(a, b);
            };
            this.emit = function (a, b) {
                try {
                    this.$worker.postMessage({
                        event: a,
                        data: { data: b.data },
                    });
                } catch (f) {
                    console.error(f.stack);
                }
            };
            this.attachToDocument = function (a) {
                this.$doc && this.terminate();
                this.$doc = a;
                this.call("setValue", [a.getValue()]);
                a.on("change", this.changeListener);
            };
            this.changeListener = function (a) {
                this.deltaQueue ||
                    ((this.deltaQueue = []),
                    setTimeout(this.$sendDeltaQueue, 0));
                "insert" == a.action
                    ? this.deltaQueue.push(a.start, a.lines)
                    : this.deltaQueue.push(a.start, a.end);
            };
            this.$sendDeltaQueue = function () {
                var a = this.deltaQueue;
                a &&
                    ((this.deltaQueue = null),
                    50 < a.length && a.length > this.$doc.getLength() >> 1
                        ? this.call("setValue", [this.$doc.getValue()])
                        : this.emit("change", { data: a }));
            };
        }.call(t.prototype));
        var d = function (c, d, f) {
            this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this);
            this.changeListener = this.changeListener.bind(this);
            this.callbackId = 1;
            this.callbacks = {};
            this.messageBuffer = [];
            var e = null,
                l = !1,
                m = Object.create(b),
                g = this;
            this.$worker = {};
            this.$worker.terminate = function () {};
            this.$worker.postMessage = function (a) {
                g.messageBuffer.push(a);
                e && (l ? setTimeout(h) : h());
            };
            this.setEmitSync = function (a) {
                l = a;
            };
            var h = function () {
                var a = g.messageBuffer.shift();
                a.command
                    ? e[a.command].apply(e, a.args)
                    : a.event && m._signal(a.event, a.data);
            };
            m.postMessage = function (a) {
                g.onMessage({ data: a });
            };
            m.callback = function (a, b) {
                this.postMessage({ type: "call", id: b, data: a });
            };
            m.emit = function (a, b) {
                this.postMessage({ type: "event", name: a, data: b });
            };
            a.loadModule(["worker", d], function (a) {
                for (e = new a[f](m); g.messageBuffer.length; ) h();
            });
        };
        d.prototype = t.prototype;
        q.UIWorkerClient = d;
        q.WorkerClient = t;
        q.createWorker = h;
    }
);
ace.define(
    "ace/placeholder",
    "require exports module ace/range ace/lib/event_emitter ace/lib/oop".split(
        " "
    ),
    function (n, q, t) {
        var h = n("./range").Range,
            g = n("./lib/event_emitter").EventEmitter,
            c = n("./lib/oop");
        n = function (b, a, c, e, m, f) {
            var d = this;
            this.length = a;
            this.session = b;
            this.doc = b.getDocument();
            this.mainClass = m;
            this.othersClass = f;
            this.$onUpdate = this.onUpdate.bind(this);
            this.doc.on("change", this.$onUpdate);
            this.$others = e;
            this.$onCursorChange = function () {
                setTimeout(function () {
                    d.onCursorChange();
                });
            };
            this.$pos = c;
            this.$undoStackDepth = (
                b.getUndoManager().$undoStack ||
                b.getUndoManager().$undostack || { length: -1 }
            ).length;
            this.setup();
            b.selection.on("changeCursor", this.$onCursorChange);
        };
        (function () {
            c.implement(this, g);
            this.setup = function () {
                var b = this,
                    a = this.doc,
                    c = this.session;
                this.selectionBefore = c.selection.toJSON();
                c.selection.inMultiSelectMode && c.selection.toSingleRange();
                var e = (this.pos = a.createAnchor(
                    this.$pos.row,
                    this.$pos.column
                ));
                e.$insertRight = !0;
                e.detach();
                e.markerId = c.addMarker(
                    new h(e.row, e.column, e.row, e.column + this.length),
                    this.mainClass,
                    null,
                    !1
                );
                this.others = [];
                this.$others.forEach(function (c) {
                    c = a.createAnchor(c.row, c.column);
                    c.$insertRight = !0;
                    c.detach();
                    b.others.push(c);
                });
                c.setUndoSelect(!1);
            };
            this.showOtherMarkers = function () {
                if (!this.othersActive) {
                    var b = this.session,
                        a = this;
                    this.othersActive = !0;
                    this.others.forEach(function (c) {
                        c.markerId = b.addMarker(
                            new h(c.row, c.column, c.row, c.column + a.length),
                            a.othersClass,
                            null,
                            !1
                        );
                    });
                }
            };
            this.hideOtherMarkers = function () {
                if (this.othersActive) {
                    this.othersActive = !1;
                    for (var b = 0; b < this.others.length; b++)
                        this.session.removeMarker(this.others[b].markerId);
                }
            };
            this.onUpdate = function (b) {
                if (this.$updating) return this.updateAnchors(b);
                if (b.start.row === b.end.row && b.start.row === this.pos.row) {
                    this.$updating = !0;
                    var a =
                            "insert" === b.action
                                ? b.end.column - b.start.column
                                : b.start.column - b.end.column,
                        c =
                            b.start.column >= this.pos.column &&
                            b.start.column <= this.pos.column + this.length + 1,
                        e = b.start.column - this.pos.column;
                    this.updateAnchors(b);
                    c && (this.length += a);
                    if (c && !this.session.$fromUndo)
                        if ("insert" === b.action)
                            for (c = this.others.length - 1; 0 <= c; c--) {
                                var m = this.others[c];
                                m = { row: m.row, column: m.column + e };
                                this.doc.insertMergedLines(m, b.lines);
                            }
                        else if ("remove" === b.action)
                            for (c = this.others.length - 1; 0 <= c; c--)
                                (m = this.others[c]),
                                    (m = { row: m.row, column: m.column + e }),
                                    this.doc.remove(
                                        new h(
                                            m.row,
                                            m.column,
                                            m.row,
                                            m.column - a
                                        )
                                    );
                    this.$updating = !1;
                    this.updateMarkers();
                }
            };
            this.updateAnchors = function (b) {
                this.pos.onChange(b);
                for (var a = this.others.length; a--; )
                    this.others[a].onChange(b);
                this.updateMarkers();
            };
            this.updateMarkers = function () {
                if (!this.$updating) {
                    var b = this,
                        a = this.session,
                        c = function (c, d) {
                            a.removeMarker(c.markerId);
                            c.markerId = a.addMarker(
                                new h(
                                    c.row,
                                    c.column,
                                    c.row,
                                    c.column + b.length
                                ),
                                d,
                                null,
                                !1
                            );
                        };
                    c(this.pos, this.mainClass);
                    for (var e = this.others.length; e--; )
                        c(this.others[e], this.othersClass);
                }
            };
            this.onCursorChange = function (b) {
                if (!this.$updating && this.session) {
                    var a = this.session.selection.getCursor();
                    a.row === this.pos.row &&
                    a.column >= this.pos.column &&
                    a.column <= this.pos.column + this.length
                        ? (this.showOtherMarkers(),
                          this._emit("cursorEnter", b))
                        : (this.hideOtherMarkers(),
                          this._emit("cursorLeave", b));
                }
            };
            this.detach = function () {
                this.session.removeMarker(this.pos && this.pos.markerId);
                this.hideOtherMarkers();
                this.doc.removeEventListener("change", this.$onUpdate);
                this.session.selection.removeEventListener(
                    "changeCursor",
                    this.$onCursorChange
                );
                this.session.setUndoSelect(!0);
                this.session = null;
            };
            this.cancel = function () {
                if (-1 !== this.$undoStackDepth) {
                    for (
                        var b = this.session.getUndoManager(),
                            a =
                                (b.$undoStack || b.$undostack).length -
                                this.$undoStackDepth,
                            c = 0;
                        c < a;
                        c++
                    )
                        b.undo(!0);
                    this.selectionBefore &&
                        this.session.selection.fromJSON(this.selectionBefore);
                }
            };
        }.call(n.prototype));
        q.PlaceHolder = n;
    }
);
ace.define(
    "ace/mouse/multi_select_handler",
    ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"],
    function (n, q, t) {
        function h(b, a) {
            return b.row == a.row && b.column == a.column;
        }
        var g = n("../lib/event"),
            c = n("../lib/useragent");
        q.onMouseDown = function (b) {
            var a = b.domEvent,
                d = a.altKey,
                e = a.shiftKey,
                m = a.ctrlKey,
                f = b.getAccelKey(),
                k = b.getButton();
            m && c.isMac && (k = a.button);
            if (b.editor.inMultiSelectMode && 2 == k)
                b.editor.textInput.onContextMenu(b.domEvent);
            else if (!m && !d && !f)
                0 === k &&
                    b.editor.inMultiSelectMode &&
                    b.editor.exitMultiSelectMode();
            else if (0 === k) {
                var l = b.editor,
                    n = l.selection,
                    k = l.inMultiSelectMode,
                    u = b.getDocumentPosition(),
                    r = n.getCursor(),
                    r = b.inSelection() || (n.isEmpty() && h(u, r)),
                    p = b.x,
                    q = b.y,
                    w = function (a) {
                        p = a.clientX;
                        q = a.clientY;
                    },
                    y = l.session,
                    x = l.renderer.pixelToScreenCoordinates(p, q),
                    t = x,
                    J;
                if (l.$mouseHandler.$enableJumpToDef)
                    (m && d) || (f && d)
                        ? (J = e ? "block" : "add")
                        : d && l.$blockSelectEnabled && (J = "block");
                else if (f && !d) {
                    if (((J = "add"), !k && e)) return;
                } else d && l.$blockSelectEnabled && (J = "block");
                J &&
                    c.isMac &&
                    a.ctrlKey &&
                    l.$mouseHandler.cancelContextMenu();
                if ("add" == J) {
                    if (k || !r) {
                        if (!k) {
                            var C = n.toOrientedRange();
                            l.addSelectionMarker(C);
                        }
                        var B = n.rangeList.rangeAtPoint(u);
                        l.$blockScrolling++;
                        l.inVirtualSelectionMode = !0;
                        e &&
                            ((B = null),
                            (C = n.ranges[0] || C),
                            l.removeSelectionMarker(C));
                        l.once("mouseup", function () {
                            var a = n.toOrientedRange();
                            B && a.isEmpty() && h(B.cursor, a.cursor)
                                ? n.substractPoint(a.cursor)
                                : (e
                                      ? n.substractPoint(C.cursor)
                                      : C &&
                                        (l.removeSelectionMarker(C),
                                        n.addRange(C)),
                                  n.addRange(a));
                            l.$blockScrolling--;
                            l.inVirtualSelectionMode = !1;
                        });
                    }
                } else if ("block" == J) {
                    b.stop();
                    l.inVirtualSelectionMode = !0;
                    var K,
                        A = [];
                    l.$blockScrolling++;
                    k && !f
                        ? n.toSingleRange()
                        : !k &&
                          f &&
                          ((K = n.toOrientedRange()), l.addSelectionMarker(K));
                    e
                        ? (x = y.documentToScreenPosition(n.lead))
                        : n.moveToPosition(u);
                    l.$blockScrolling--;
                    t = { row: -1, column: -1 };
                    g.capture(l.container, w, function (a) {
                        clearInterval(D);
                        l.removeSelectionMarkers(A);
                        A.length || (A = [n.toOrientedRange()]);
                        l.$blockScrolling++;
                        K && (l.removeSelectionMarker(K), n.toSingleRange(K));
                        for (a = 0; a < A.length; a++) n.addRange(A[a]);
                        l.inVirtualSelectionMode = !1;
                        l.$mouseHandler.$clickSelection = null;
                        l.$blockScrolling--;
                    });
                    var D = setInterval(function () {
                        var a = l.renderer.pixelToScreenCoordinates(p, q),
                            b = y.screenToDocumentPosition(a.row, a.column);
                        (h(t, a) && h(b, n.lead)) ||
                            ((t = a),
                            l.$blockScrolling++,
                            l.selection.moveToPosition(b),
                            l.renderer.scrollCursorIntoView(),
                            l.removeSelectionMarkers(A),
                            (A = n.rectangularRangeBlock(t, x)),
                            l.$mouseHandler.$clickSelection &&
                                1 == A.length &&
                                A[0].isEmpty() &&
                                (A[0] = l.$mouseHandler.$clickSelection.clone()),
                            A.forEach(l.addSelectionMarker, l),
                            l.updateSelectionMarkers(),
                            l.$blockScrolling--);
                    }, 20);
                    return b.preventDefault();
                }
            }
        };
    }
);
ace.define(
    "ace/commands/multi_select_commands",
    ["require", "exports", "module", "ace/keyboard/hash_handler"],
    function (n, q, t) {
        q.defaultCommands = [
            {
                name: "addCursorAbove",
                exec: function (h) {
                    h.selectMoreLines(-1);
                },
                bindKey: { win: "Ctrl-Alt-Up", mac: "Ctrl-Alt-Up" },
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "addCursorBelow",
                exec: function (h) {
                    h.selectMoreLines(1);
                },
                bindKey: { win: "Ctrl-Alt-Down", mac: "Ctrl-Alt-Down" },
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "addCursorAboveSkipCurrent",
                exec: function (h) {
                    h.selectMoreLines(-1, !0);
                },
                bindKey: { win: "Ctrl-Alt-Shift-Up", mac: "Ctrl-Alt-Shift-Up" },
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "addCursorBelowSkipCurrent",
                exec: function (h) {
                    h.selectMoreLines(1, !0);
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Down",
                    mac: "Ctrl-Alt-Shift-Down",
                },
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selectMoreBefore",
                exec: function (h) {
                    h.selectMore(-1);
                },
                bindKey: { win: "Ctrl-Alt-Left", mac: "Ctrl-Alt-Left" },
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selectMoreAfter",
                exec: function (h) {
                    h.selectMore(1);
                },
                bindKey: { win: "Ctrl-Alt-Right", mac: "Ctrl-Alt-Right" },
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selectNextBefore",
                exec: function (h) {
                    h.selectMore(-1, !0);
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Left",
                    mac: "Ctrl-Alt-Shift-Left",
                },
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "selectNextAfter",
                exec: function (h) {
                    h.selectMore(1, !0);
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Right",
                    mac: "Ctrl-Alt-Shift-Right",
                },
                scrollIntoView: "cursor",
                readOnly: !0,
            },
            {
                name: "splitIntoLines",
                exec: function (h) {
                    h.multiSelect.splitIntoLines();
                },
                bindKey: { win: "Ctrl-Alt-L", mac: "Ctrl-Alt-L" },
                readOnly: !0,
            },
            {
                name: "alignCursors",
                exec: function (h) {
                    h.alignCursors();
                },
                bindKey: { win: "Ctrl-Alt-A", mac: "Ctrl-Alt-A" },
                scrollIntoView: "cursor",
            },
            {
                name: "findAll",
                exec: function (h) {
                    h.findAll();
                },
                bindKey: { win: "Ctrl-Alt-K", mac: "Ctrl-Alt-G" },
                scrollIntoView: "cursor",
                readOnly: !0,
            },
        ];
        q.multiSelectCommands = [
            {
                name: "singleSelection",
                bindKey: "esc",
                exec: function (h) {
                    h.exitMultiSelectMode();
                },
                scrollIntoView: "cursor",
                readOnly: !0,
                isAvailable: function (h) {
                    return h && h.inMultiSelectMode;
                },
            },
        ];
        n = n("../keyboard/hash_handler").HashHandler;
        q.keyboardHandler = new n(q.multiSelectCommands);
    }
);
ace.define(
    "ace/multi_select",
    "require exports module ace/range_list ace/range ace/selection ace/mouse/multi_select_handler ace/lib/event ace/lib/lang ace/commands/multi_select_commands ace/search ace/edit_session ace/editor ace/config".split(
        " "
    ),
    function (n, q, t) {
        function h(a) {
            a.$multiselectOnSessionChange ||
                ((a.$onAddRange = a.$onAddRange.bind(a)),
                (a.$onRemoveRange = a.$onRemoveRange.bind(a)),
                (a.$onMultiSelect = a.$onMultiSelect.bind(a)),
                (a.$onSingleSelect = a.$onSingleSelect.bind(a)),
                (a.$multiselectOnSessionChange = q.onSessionChange.bind(a)),
                (a.$checkMultiselectChange = a.$checkMultiselectChange.bind(a)),
                a.$multiselectOnSessionChange(a),
                a.on("changeSession", a.$multiselectOnSessionChange),
                a.on("mousedown", d),
                a.commands.addCommands(f.defaultCommands),
                g(a));
        }
        function g(a) {
            function b(b) {
                d && (a.renderer.setMouseCursor(""), (d = !1));
            }
            var c = a.textInput.getElement(),
                d = !1;
            e.addListener(c, "keydown", function (c) {
                c = 18 == c.keyCode && !(c.ctrlKey || c.shiftKey || c.metaKey);
                a.$blockSelectEnabled && c
                    ? d || (a.renderer.setMouseCursor("crosshair"), (d = !0))
                    : d && b();
            });
            e.addListener(c, "keyup", b);
            e.addListener(c, "blur", b);
        }
        var c = n("./range_list").RangeList,
            b = n("./range").Range,
            a = n("./selection").Selection,
            d = n("./mouse/multi_select_handler").onMouseDown,
            e = n("./lib/event"),
            m = n("./lib/lang"),
            f = n("./commands/multi_select_commands");
        q.commands = f.defaultCommands.concat(f.multiSelectCommands);
        var k = new (n("./search").Search)();
        t = n("./edit_session").EditSession;
        (function () {
            this.getSelectionMarkers = function () {
                return this.$selectionMarkers;
            };
        }.call(t.prototype));
        (function () {
            this.rangeList = this.ranges = null;
            this.addRange = function (a, b) {
                if (a) {
                    if (!this.inMultiSelectMode && 0 === this.rangeCount) {
                        var c = this.toOrientedRange();
                        this.rangeList.add(c);
                        this.rangeList.add(a);
                        if (2 != this.rangeList.ranges.length)
                            return (
                                this.rangeList.removeAll(),
                                b || this.fromOrientedRange(a)
                            );
                        this.rangeList.removeAll();
                        this.rangeList.add(c);
                        this.$onAddRange(c);
                    }
                    a.cursor || (a.cursor = a.end);
                    c = this.rangeList.add(a);
                    return (
                        this.$onAddRange(a),
                        c.length && this.$onRemoveRange(c),
                        1 < this.rangeCount &&
                            !this.inMultiSelectMode &&
                            (this._signal("multiSelect"),
                            (this.inMultiSelectMode = !0),
                            (this.session.$undoSelect = !1),
                            this.rangeList.attach(this.session)),
                        b || this.fromOrientedRange(a)
                    );
                }
            };
            this.toSingleRange = function (a) {
                a = a || this.ranges[0];
                var b = this.rangeList.removeAll();
                b.length && this.$onRemoveRange(b);
                a && this.fromOrientedRange(a);
            };
            this.substractPoint = function (a) {
                if ((a = this.rangeList.substractPoint(a)))
                    return this.$onRemoveRange(a), a[0];
            };
            this.mergeOverlappingRanges = function () {
                var a = this.rangeList.merge();
                a.length
                    ? this.$onRemoveRange(a)
                    : this.ranges[0] && this.fromOrientedRange(this.ranges[0]);
            };
            this.$onAddRange = function (a) {
                this.rangeCount = this.rangeList.ranges.length;
                this.ranges.unshift(a);
                this._signal("addRange", { range: a });
            };
            this.$onRemoveRange = function (a) {
                this.rangeCount = this.rangeList.ranges.length;
                if (1 == this.rangeCount && this.inMultiSelectMode) {
                    var b = this.rangeList.ranges.pop();
                    a.push(b);
                    this.rangeCount = 0;
                }
                for (var c = a.length; c--; ) {
                    var d = this.ranges.indexOf(a[c]);
                    this.ranges.splice(d, 1);
                }
                this._signal("removeRange", { ranges: a });
                0 === this.rangeCount &&
                    this.inMultiSelectMode &&
                    ((this.inMultiSelectMode = !1),
                    this._signal("singleSelect"),
                    (this.session.$undoSelect = !0),
                    this.rangeList.detach(this.session));
                (b = b || this.ranges[0]) &&
                    !b.isEqual(this.getRange()) &&
                    this.fromOrientedRange(b);
            };
            this.$initRangeList = function () {
                this.rangeList ||
                    ((this.rangeList = new c()),
                    (this.ranges = []),
                    (this.rangeCount = 0));
            };
            this.getAllRanges = function () {
                return this.rangeCount
                    ? this.rangeList.ranges.concat()
                    : [this.getRange()];
            };
            this.splitIntoLines = function () {
                if (1 < this.rangeCount) {
                    var a = this.rangeList.ranges;
                    var c = a[a.length - 1];
                    a = b.fromPoints(a[0].start, c.end);
                    this.toSingleRange();
                    this.setSelectionRange(a, c.cursor == c.start);
                } else {
                    a = this.getRange();
                    var d = this.isBackwards(),
                        e = a.start.row;
                    c = a.end.row;
                    if (e == c)
                        d
                            ? ((c = a.end), (a = a.start))
                            : ((c = a.start), (a = a.end)),
                            this.addRange(b.fromPoints(a, a)),
                            this.addRange(b.fromPoints(c, c));
                    else {
                        var d = [],
                            f = this.getLineRange(e, !0);
                        f.start.column = a.start.column;
                        d.push(f);
                        for (e += 1; e < c; e++)
                            d.push(this.getLineRange(e, !0));
                        f = this.getLineRange(c, !0);
                        f.end.column = a.end.column;
                        d.push(f);
                        d.forEach(this.addRange, this);
                    }
                }
            };
            this.toggleBlockSelection = function () {
                if (1 < this.rangeCount) {
                    var a = this.rangeList.ranges,
                        c = a[a.length - 1],
                        a = b.fromPoints(a[0].start, c.end);
                    this.toSingleRange();
                    this.setSelectionRange(a, c.cursor == c.start);
                } else
                    (c = this.session.documentToScreenPosition(
                        this.selectionLead
                    )),
                        (a = this.session.documentToScreenPosition(
                            this.selectionAnchor
                        )),
                        this.rectangularRangeBlock(c, a).forEach(
                            this.addRange,
                            this
                        );
            };
            this.rectangularRangeBlock = function (a, c, d) {
                var e,
                    l = [],
                    f = a.column < c.column;
                if (f) {
                    var k = a.column;
                    var m = c.column;
                } else (k = c.column), (m = a.column);
                var g = a.row < c.row;
                if (g) {
                    var h = a.row;
                    a = c.row;
                } else (h = c.row), (a = a.row);
                0 > k && (k = 0);
                0 > h && (h = 0);
                for (h == a && (d = !0); h <= a; h++) {
                    c = b.fromPoints(
                        this.session.screenToDocumentPosition(h, k),
                        this.session.screenToDocumentPosition(h, m)
                    );
                    if (c.isEmpty()) {
                        var n;
                        if ((n = u))
                            (n = c.end),
                                (n = n.row == u.row && n.column == u.column);
                        if (n) break;
                        var u = c.end;
                    }
                    c.cursor = f ? c.start : c.end;
                    l.push(c);
                }
                g && l.reverse();
                if (!d) {
                    for (d = l.length - 1; l[d].isEmpty() && 0 < d; ) d--;
                    if (0 < d) for (e = 0; l[e].isEmpty(); ) e++;
                    for (; d >= e; d--) l[d].isEmpty() && l.splice(d, 1);
                }
                return l;
            };
        }.call(a.prototype));
        t = n("./editor").Editor;
        (function () {
            this.updateSelectionMarkers = function () {
                this.renderer.updateCursor();
                this.renderer.updateBackMarkers();
            };
            this.addSelectionMarker = function (a) {
                a.cursor || (a.cursor = a.end);
                var b = this.getSelectionStyle();
                return (
                    (a.marker = this.session.addMarker(a, "ace_selection", b)),
                    this.session.$selectionMarkers.push(a),
                    (this.session.selectionMarkerCount = this.session.$selectionMarkers.length),
                    a
                );
            };
            this.removeSelectionMarker = function (a) {
                a.marker &&
                    (this.session.removeMarker(a.marker),
                    (a = this.session.$selectionMarkers.indexOf(a)),
                    -1 != a && this.session.$selectionMarkers.splice(a, 1),
                    (this.session.selectionMarkerCount = this.session.$selectionMarkers.length));
            };
            this.removeSelectionMarkers = function (a) {
                for (
                    var b = this.session.$selectionMarkers, c = a.length;
                    c--;

                ) {
                    var d = a[c];
                    d.marker &&
                        (this.session.removeMarker(d.marker),
                        (d = b.indexOf(d)),
                        -1 != d && b.splice(d, 1));
                }
                this.session.selectionMarkerCount = b.length;
            };
            this.$onAddRange = function (a) {
                this.addSelectionMarker(a.range);
                this.renderer.updateCursor();
                this.renderer.updateBackMarkers();
            };
            this.$onRemoveRange = function (a) {
                this.removeSelectionMarkers(a.ranges);
                this.renderer.updateCursor();
                this.renderer.updateBackMarkers();
            };
            this.$onMultiSelect = function (a) {
                this.inMultiSelectMode ||
                    ((this.inMultiSelectMode = !0),
                    this.setStyle("ace_multiselect"),
                    this.keyBinding.addKeyboardHandler(f.keyboardHandler),
                    this.commands.setDefaultHandler(
                        "exec",
                        this.$onMultiSelectExec
                    ),
                    this.renderer.updateCursor(),
                    this.renderer.updateBackMarkers());
            };
            this.$onSingleSelect = function (a) {
                this.session.multiSelect.inVirtualMode ||
                    ((this.inMultiSelectMode = !1),
                    this.unsetStyle("ace_multiselect"),
                    this.keyBinding.removeKeyboardHandler(f.keyboardHandler),
                    this.commands.removeDefaultHandler(
                        "exec",
                        this.$onMultiSelectExec
                    ),
                    this.renderer.updateCursor(),
                    this.renderer.updateBackMarkers(),
                    this._emit("changeSelection"));
            };
            this.$onMultiSelectExec = function (a) {
                var b,
                    c = a.command,
                    d = a.editor;
                if (d.multiSelect)
                    return (
                        c.multiSelectAction
                            ? "forEach" == c.multiSelectAction
                                ? (b = d.forEachSelection(c, a.args))
                                : "forEachLine" == c.multiSelectAction
                                ? (b = d.forEachSelection(c, a.args, !0))
                                : "single" == c.multiSelectAction
                                ? (d.exitMultiSelectMode(),
                                  (b = c.exec(d, a.args || {})))
                                : (b = c.multiSelectAction(d, a.args || {}))
                            : ((b = c.exec(d, a.args || {})),
                              d.multiSelect.addRange(
                                  d.multiSelect.toOrientedRange()
                              ),
                              d.multiSelect.mergeOverlappingRanges()),
                        b
                    );
            };
            this.forEachSelection = function (b, c, d) {
                if (!this.inVirtualSelectionMode) {
                    var e = 1 == d || (d && d.$byLines),
                        l = this.session,
                        f = this.selection,
                        k = f.rangeList;
                    d = (d && d.keepOrder ? f : k).ranges;
                    var m;
                    if (!d.length)
                        return b.exec
                            ? b.exec(this, c || {})
                            : b(this, c || {});
                    k = f._eventRegistry;
                    f._eventRegistry = {};
                    var g = new a(l);
                    this.inVirtualSelectionMode = !0;
                    for (var h = d.length; h--; ) {
                        if (e)
                            for (
                                ;
                                0 < h && d[h].start.row == d[h - 1].end.row;

                            )
                                h--;
                        g.fromOrientedRange(d[h]);
                        g.index = h;
                        this.selection = l.selection = g;
                        var n = b.exec
                            ? b.exec(this, c || {})
                            : b(this, c || {});
                        !m && void 0 !== n && (m = n);
                        g.toOrientedRange(d[h]);
                    }
                    g.detach();
                    this.selection = l.selection = f;
                    this.inVirtualSelectionMode = !1;
                    f._eventRegistry = k;
                    f.mergeOverlappingRanges();
                    b = this.renderer.$scrollAnimation;
                    return (
                        this.onCursorChange(),
                        this.onSelectionChange(),
                        b &&
                            b.from == b.to &&
                            this.renderer.animateScrolling(b.from),
                        m
                    );
                }
            };
            this.exitMultiSelectMode = function () {
                this.inMultiSelectMode &&
                    !this.inVirtualSelectionMode &&
                    this.multiSelect.toSingleRange();
            };
            this.getSelectedText = function () {
                var a = "";
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    for (
                        var a = this.multiSelect.rangeList.ranges,
                            b = [],
                            c = 0;
                        c < a.length;
                        c++
                    )
                        b.push(this.session.getTextRange(a[c]));
                    c = this.session.getDocument().getNewLineCharacter();
                    a = b.join(c);
                    a.length == (b.length - 1) * c.length && (a = "");
                } else
                    this.selection.isEmpty() ||
                        (a = this.session.getTextRange(
                            this.getSelectionRange()
                        ));
                return a;
            };
            this.$checkMultiselectChange = function (a, b) {
                this.inMultiSelectMode &&
                    !this.inVirtualSelectionMode &&
                    ((a = this.multiSelect.ranges[0]),
                    (this.multiSelect.isEmpty() &&
                        b == this.multiSelect.anchor) ||
                        ((a =
                            b == this.multiSelect.anchor
                                ? a.cursor == a.start
                                    ? a.end
                                    : a.start
                                : a.cursor),
                        (a.row == b.row &&
                            this.session.$clipPositionToDocument(
                                a.row,
                                a.column
                            ).column == b.column) ||
                            this.multiSelect.toSingleRange(
                                this.multiSelect.toOrientedRange()
                            )));
            };
            this.findAll = function (a, b, c) {
                b = b || {};
                b.needle = a || b.needle;
                if (void 0 == b.needle) {
                    var d = this.selection.isEmpty()
                        ? this.selection.getWordRange()
                        : this.selection.getRange();
                    b.needle = this.session.getTextRange(d);
                }
                this.$search.set(b);
                a = this.$search.findAll(this.session);
                if (!a.length) return 0;
                this.$blockScrolling += 1;
                b = this.multiSelect;
                c || b.toSingleRange(a[0]);
                for (c = a.length; c--; ) b.addRange(a[c], !0);
                return (
                    d && b.rangeList.rangeAtPoint(d.start) && b.addRange(d, !0),
                    --this.$blockScrolling,
                    a.length
                );
            };
            this.selectMoreLines = function (a, c) {
                var d = this.selection.toOrientedRange();
                var e = d.cursor == d.end;
                var l = this.session.documentToScreenPosition(d.cursor);
                this.selection.$desiredColumn &&
                    (l.column = this.selection.$desiredColumn);
                var f = this.session.screenToDocumentPosition(
                    l.row + a,
                    l.column
                );
                if (d.isEmpty()) a = f;
                else {
                    var k = this.session.documentToScreenPosition(
                        e ? d.end : d.start
                    );
                    a = this.session.screenToDocumentPosition(
                        k.row + a,
                        k.column
                    );
                }
                e
                    ? ((e = b.fromPoints(f, a)), (e.cursor = e.start))
                    : ((e = b.fromPoints(a, f)), (e.cursor = e.end));
                e.desiredColumn = l.column;
                if (!this.selection.inMultiSelectMode)
                    this.selection.addRange(d);
                else if (c) var m = d.cursor;
                this.selection.addRange(e);
                m && this.selection.substractPoint(m);
            };
            this.transposeSelections = function (a) {
                for (
                    var b,
                        c,
                        d = this.session,
                        e = d.multiSelect,
                        l = e.ranges,
                        f = l.length;
                    f--;

                )
                    (c = l[f]),
                        c.isEmpty() &&
                            ((b = d.getWordRange(c.start.row, c.start.column)),
                            (c.start.row = b.start.row),
                            (c.start.column = b.start.column),
                            (c.end.row = b.end.row),
                            (c.end.column = b.end.column));
                e.mergeOverlappingRanges();
                e = [];
                for (f = l.length; f--; )
                    (c = l[f]), e.unshift(d.getTextRange(c));
                0 > a ? e.unshift(e.pop()) : e.push(e.shift());
                for (f = l.length; f--; )
                    (c = l[f]),
                        (b = c.clone()),
                        d.replace(c, e[f]),
                        (c.start.row = b.start.row),
                        (c.start.column = b.start.column);
            };
            this.selectMore = function (a, b, c) {
                var d = this.session,
                    e = d.multiSelect.toOrientedRange();
                if (
                    e.isEmpty() &&
                    ((e = d.getWordRange(e.start.row, e.start.column)),
                    (e.cursor = -1 == a ? e.start : e.end),
                    this.multiSelect.addRange(e),
                    c)
                )
                    return;
                c = d.getTextRange(e);
                (d =
                    ((k.$options.wrap = !0),
                    (k.$options.needle = c),
                    (k.$options.backwards = -1 == a),
                    k.find(d))) &&
                    ((d.cursor = -1 == a ? d.start : d.end),
                    (this.$blockScrolling += 1),
                    this.session.unfold(d),
                    this.multiSelect.addRange(d),
                    --this.$blockScrolling,
                    this.renderer.scrollCursorIntoView(null, 0.5));
                b && this.multiSelect.substractPoint(e.cursor);
            };
            this.alignCursors = function () {
                var a = this.session,
                    c = a.multiSelect,
                    d = c.ranges,
                    e = -1,
                    f = d.filter(function (a) {
                        if (a.cursor.row == e) return !0;
                        e = a.cursor.row;
                    });
                if (d.length && f.length != d.length - 1) {
                    f.forEach(function (a) {
                        c.substractPoint(a.cursor);
                    });
                    var k = 0,
                        g = Infinity,
                        h = d.map(function (b) {
                            b = b.cursor;
                            var c = a
                                .getLine(b.row)
                                .substr(b.column)
                                .search(/\S/g);
                            return (
                                -1 == c && (c = 0),
                                b.column > k && (k = b.column),
                                c < g && (g = c),
                                c
                            );
                        });
                    d.forEach(function (c, d) {
                        var e = c.cursor,
                            f = k - e.column;
                        d = h[d] - g;
                        f > d
                            ? a.insert(e, m.stringRepeat(" ", f - d))
                            : a.remove(
                                  new b(
                                      e.row,
                                      e.column,
                                      e.row,
                                      e.column - f + d
                                  )
                              );
                        c.start.column = c.end.column = k;
                        c.start.row = c.end.row = e.row;
                        c.cursor = c.end;
                    });
                    c.fromOrientedRange(d[0]);
                    this.renderer.updateCursor();
                    this.renderer.updateBackMarkers();
                } else {
                    var d = this.selection.getRange(),
                        f = d.start.row,
                        n = d.end.row,
                        q = f == n;
                    if (q) {
                        var t = this.session.getLength();
                        do var C = this.session.getLine(n);
                        while (/[=:]/.test(C) && ++n < t);
                        do C = this.session.getLine(f);
                        while (/[=:]/.test(C) && 0 < --f);
                        0 > f && (f = 0);
                        n >= t && (n = t - 1);
                    }
                    n = this.session.removeFullLines(f, n);
                    n = this.$reAlignText(n, q);
                    this.session.insert(
                        { row: f, column: 0 },
                        n.join("\n") + "\n"
                    );
                    q ||
                        ((d.start.column = 0),
                        (d.end.column = n[n.length - 1].length));
                    this.selection.setRange(d);
                }
            };
            this.$reAlignText = function (a, b) {
                function c(a) {
                    return m.stringRepeat(" ", a);
                }
                function d(a) {
                    return a[2]
                        ? c(g) +
                              a[2] +
                              c(h - a[2].length + n) +
                              a[4].replace(/^([=:])\s+/, "$1 ")
                        : a[0];
                }
                function e(a) {
                    return a[2]
                        ? c(g + h - a[2].length) +
                              a[2] +
                              c(n, " ") +
                              a[4].replace(/^([=:])\s+/, "$1 ")
                        : a[0];
                }
                function f(a) {
                    return a[2]
                        ? c(g) + a[2] + c(n) + a[4].replace(/^([=:])\s+/, "$1 ")
                        : a[0];
                }
                var l = !0,
                    k = !0,
                    g,
                    h,
                    n;
                return a
                    .map(function (a) {
                        var b = a.match(/(\s*)(.*?)(\s*)([=:].*)/);
                        return b
                            ? null == g
                                ? ((g = b[1].length),
                                  (h = b[2].length),
                                  (n = b[3].length),
                                  b)
                                : (g + h + n !=
                                      b[1].length + b[2].length + b[3].length &&
                                      (k = !1),
                                  g != b[1].length && (l = !1),
                                  g > b[1].length && (g = b[1].length),
                                  h < b[2].length && (h = b[2].length),
                                  n > b[3].length && (n = b[3].length),
                                  b)
                            : [a];
                    })
                    .map(b ? d : l ? (k ? e : d) : f);
            };
        }.call(t.prototype));
        q.onSessionChange = function (a) {
            var b = a.session;
            b &&
                !b.multiSelect &&
                ((b.$selectionMarkers = []),
                b.selection.$initRangeList(),
                (b.multiSelect = b.selection));
            this.multiSelect = b && b.multiSelect;
            (a = a.oldSession) &&
                (a.multiSelect.off("addRange", this.$onAddRange),
                a.multiSelect.off("removeRange", this.$onRemoveRange),
                a.multiSelect.off("multiSelect", this.$onMultiSelect),
                a.multiSelect.off("singleSelect", this.$onSingleSelect),
                a.multiSelect.lead.off("change", this.$checkMultiselectChange),
                a.multiSelect.anchor.off(
                    "change",
                    this.$checkMultiselectChange
                ));
            b &&
                (b.multiSelect.on("addRange", this.$onAddRange),
                b.multiSelect.on("removeRange", this.$onRemoveRange),
                b.multiSelect.on("multiSelect", this.$onMultiSelect),
                b.multiSelect.on("singleSelect", this.$onSingleSelect),
                b.multiSelect.lead.on("change", this.$checkMultiselectChange),
                b.multiSelect.anchor.on(
                    "change",
                    this.$checkMultiselectChange
                ));
            b &&
                this.inMultiSelectMode != b.selection.inMultiSelectMode &&
                (b.selection.inMultiSelectMode
                    ? this.$onMultiSelect()
                    : this.$onSingleSelect());
        };
        q.MultiSelect = h;
        n("./config").defineOptions(t.prototype, "editor", {
            enableMultiselect: {
                set: function (a) {
                    h(this);
                    a
                        ? (this.on(
                              "changeSession",
                              this.$multiselectOnSessionChange
                          ),
                          this.on("mousedown", d))
                        : (this.off(
                              "changeSession",
                              this.$multiselectOnSessionChange
                          ),
                          this.off("mousedown", d));
                },
                value: !0,
            },
            enableBlockSelect: {
                set: function (a) {
                    this.$blockSelectEnabled = a;
                },
                value: !0,
            },
        });
    }
);
ace.define(
    "ace/mode/folding/fold_mode",
    ["require", "exports", "module", "ace/range"],
    function (n, q, t) {
        var h = n("../../range").Range;
        n = q.FoldMode = function () {};
        (function () {
            this.foldingStopMarker = this.foldingStartMarker = null;
            this.getFoldWidget = function (g, c, b) {
                g = g.getLine(b);
                return this.foldingStartMarker.test(g)
                    ? "start"
                    : "markbeginend" == c &&
                      this.foldingStopMarker &&
                      this.foldingStopMarker.test(g)
                    ? "end"
                    : "";
            };
            this.getFoldWidgetRange = function (g, c, b) {
                return null;
            };
            this.indentationBlock = function (g, c, b) {
                var a = /\S/,
                    d = g.getLine(c),
                    e = d.search(a);
                if (-1 != e) {
                    b = b || d.length;
                    for (var m = g.getLength(), f = (d = c); ++c < m; ) {
                        var k = g.getLine(c).search(a);
                        if (-1 != k) {
                            if (k <= e) break;
                            f = c;
                        }
                    }
                    if (f > d)
                        return (g = g.getLine(f).length), new h(d, b, f, g);
                }
            };
            this.openingBracketBlock = function (g, c, b, a, d) {
                b = { row: b, column: a + 1 };
                if ((c = g.$findClosingBracket(c, b, d)))
                    return (
                        (d = g.foldWidgets[c.row]),
                        null == d && (d = g.getFoldWidget(c.row)),
                        "start" == d &&
                            c.row > b.row &&
                            (c.row--, (c.column = g.getLine(c.row).length)),
                        h.fromPoints(b, c)
                    );
            };
            this.closingBracketBlock = function (g, c, b, a, d) {
                b = { row: b, column: a };
                if ((g = g.$findOpeningBracket(c, b)))
                    return g.column++, b.column--, h.fromPoints(g, b);
            };
        }.call(n.prototype));
    }
);
ace.define(
    "ace/theme/textmate",
    ["require", "exports", "module", "ace/lib/dom"],
    function (n, q, t) {
        q.isDark = !1;
        q.cssClass = "ace-tm";
        q.cssText =
            '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
        n("../lib/dom").importCssString(q.cssText, q.cssClass);
    }
);
ace.define(
    "ace/line_widgets",
    "require exports module ace/lib/oop ace/lib/dom ace/range".split(" "),
    function (n, q, t) {
        function h(c) {
            this.session = c;
            this.session.widgetManager = this;
            this.session.getRowLength = this.getRowLength;
            this.session.$getWidgetScreenLength = this.$getWidgetScreenLength;
            this.updateOnChange = this.updateOnChange.bind(this);
            this.renderWidgets = this.renderWidgets.bind(this);
            this.measureWidgets = this.measureWidgets.bind(this);
            this.session._changedWidgets = [];
            this.$onChangeEditor = this.$onChangeEditor.bind(this);
            this.session.on("change", this.updateOnChange);
            this.session.on("changeFold", this.updateOnFold);
            this.session.on("changeEditor", this.$onChangeEditor);
        }
        n("./lib/oop");
        var g = n("./lib/dom");
        n("./range");
        (function () {
            this.getRowLength = function (c) {
                var b;
                return (
                    this.lineWidgets
                        ? (b =
                              (this.lineWidgets[c] &&
                                  this.lineWidgets[c].rowCount) ||
                              0)
                        : (b = 0),
                    this.$useWrapMode && this.$wrapData[c]
                        ? this.$wrapData[c].length + 1 + b
                        : 1 + b
                );
            };
            this.$getWidgetScreenLength = function () {
                var c = 0;
                return (
                    this.lineWidgets.forEach(function (b) {
                        b && b.rowCount && !b.hidden && (c += b.rowCount);
                    }),
                    c
                );
            };
            this.$onChangeEditor = function (c) {
                this.attach(c.editor);
            };
            this.attach = function (c) {
                c &&
                    c.widgetManager &&
                    c.widgetManager != this &&
                    c.widgetManager.detach();
                this.editor != c &&
                    (this.detach(),
                    (this.editor = c) &&
                        ((c.widgetManager = this),
                        c.renderer.on("beforeRender", this.measureWidgets),
                        c.renderer.on("afterRender", this.renderWidgets)));
            };
            this.detach = function (c) {
                if ((c = this.editor))
                    (this.editor = null),
                        (c.widgetManager = null),
                        c.renderer.off("beforeRender", this.measureWidgets),
                        c.renderer.off("afterRender", this.renderWidgets),
                        (c = this.session.lineWidgets) &&
                            c.forEach(function (b) {
                                b &&
                                    b.el &&
                                    b.el.parentNode &&
                                    ((b._inDocument = !1),
                                    b.el.parentNode.removeChild(b.el));
                            });
            };
            this.updateOnFold = function (c, b) {
                if ((b = b.lineWidgets) && c.action) {
                    var a = c.data,
                        d = a.start.row,
                        a = a.end.row;
                    c = "add" == c.action;
                    for (var e = d + 1; e < a; e++) b[e] && (b[e].hidden = c);
                    b[a] &&
                        (c
                            ? b[d]
                                ? (b[a].hidden = c)
                                : (b[d] = b[a])
                            : (b[d] == b[a] && (b[d] = void 0),
                              (b[a].hidden = c)));
                }
            };
            this.updateOnChange = function (c) {
                var b = this.session.lineWidgets;
                if (b) {
                    var a = c.start.row,
                        d = c.end.row - a;
                    0 !== d &&
                        ("remove" == c.action
                            ? b.splice(a + 1, d).forEach(function (a) {
                                  a && this.removeLineWidget(a);
                              }, this)
                            : ((c = Array(d)),
                              c.unshift(a, 0),
                              b.splice.apply(b, c)),
                        this.$updateRows());
                }
            };
            this.$updateRows = function () {
                var c = this.session.lineWidgets;
                if (c) {
                    var b = !0;
                    c.forEach(function (a, c) {
                        if (a)
                            for (b = !1, a.row = c; a.$oldWidget; )
                                (a.$oldWidget.row = c), (a = a.$oldWidget);
                    });
                    b && (this.session.lineWidgets = null);
                }
            };
            this.addLineWidget = function (c) {
                this.session.lineWidgets ||
                    (this.session.lineWidgets = Array(
                        this.session.getLength()
                    ));
                var b = this.session.lineWidgets[c.row];
                b &&
                    ((c.$oldWidget = b),
                    b.el &&
                        b.el.parentNode &&
                        (b.el.parentNode.removeChild(b.el),
                        (b._inDocument = !1)));
                this.session.lineWidgets[c.row] = c;
                c.session = this.session;
                b = this.editor.renderer;
                c.html &&
                    !c.el &&
                    ((c.el = g.createElement("div")),
                    (c.el.innerHTML = c.html));
                c.el &&
                    (g.addCssClass(c.el, "ace_lineWidgetContainer"),
                    (c.el.style.position = "absolute"),
                    (c.el.style.zIndex = 5),
                    b.container.appendChild(c.el),
                    (c._inDocument = !0));
                c.coverGutter || (c.el.style.zIndex = 3);
                null == c.pixelHeight && (c.pixelHeight = c.el.offsetHeight);
                null == c.rowCount &&
                    (c.rowCount = c.pixelHeight / b.layerConfig.lineHeight);
                var a = this.session.getFoldAt(c.row, 0);
                if ((c.$fold = a)) {
                    var d = this.session.lineWidgets;
                    c.row != a.end.row || d[a.start.row]
                        ? (c.hidden = !0)
                        : (d[a.start.row] = c);
                }
                return (
                    this.session._emit("changeFold", {
                        data: { start: { row: c.row } },
                    }),
                    this.$updateRows(),
                    this.renderWidgets(null, b),
                    this.onWidgetChanged(c),
                    c
                );
            };
            this.removeLineWidget = function (c) {
                c._inDocument = !1;
                c.session = null;
                c.el && c.el.parentNode && c.el.parentNode.removeChild(c.el);
                if (c.editor && c.editor.destroy)
                    try {
                        c.editor.destroy();
                    } catch (a) {}
                if (this.session.lineWidgets) {
                    var b = this.session.lineWidgets[c.row];
                    if (b == c)
                        (this.session.lineWidgets[c.row] = c.$oldWidget) &&
                            this.onWidgetChanged(c.$oldWidget);
                    else
                        for (; b; ) {
                            if (b.$oldWidget == c) {
                                b.$oldWidget = c.$oldWidget;
                                break;
                            }
                            b = b.$oldWidget;
                        }
                }
                this.session._emit("changeFold", {
                    data: { start: { row: c.row } },
                });
                this.$updateRows();
            };
            this.getWidgetsAtRow = function (c) {
                var b = this.session.lineWidgets;
                c = b && b[c];
                for (b = []; c; ) b.push(c), (c = c.$oldWidget);
                return b;
            };
            this.onWidgetChanged = function (c) {
                this.session._changedWidgets.push(c);
                this.editor && this.editor.renderer.updateFull();
            };
            this.measureWidgets = function (c, b) {
                c = this.session._changedWidgets;
                var a = b.layerConfig;
                if (c && c.length) {
                    for (var d = Infinity, e = 0; e < c.length; e++) {
                        var m = c[e];
                        if (m && m.el && m.session == this.session) {
                            if (!m._inDocument) {
                                if (this.session.lineWidgets[m.row] != m)
                                    continue;
                                m._inDocument = !0;
                                b.container.appendChild(m.el);
                            }
                            m.h = m.el.offsetHeight;
                            m.fixedWidth ||
                                ((m.w = m.el.offsetWidth),
                                (m.screenWidth = Math.ceil(
                                    m.w / a.characterWidth
                                )));
                            var f = m.h / a.lineHeight;
                            m.coverLine &&
                                ((f -= this.session.getRowLineCount(m.row)),
                                0 > f && (f = 0));
                            m.rowCount != f &&
                                ((m.rowCount = f), m.row < d && (d = m.row));
                        }
                    }
                    Infinity != d &&
                        (this.session._emit("changeFold", {
                            data: { start: { row: d } },
                        }),
                        (this.session.lineWidgetWidth = null));
                    this.session._changedWidgets = [];
                }
            };
            this.renderWidgets = function (c, b) {
                c = b.layerConfig;
                var a = this.session.lineWidgets;
                if (a) {
                    for (
                        var d = Math.min(this.firstRow, c.firstRow),
                            e = Math.max(this.lastRow, c.lastRow, a.length);
                        0 < d && !a[d];

                    )
                        d--;
                    this.firstRow = c.firstRow;
                    this.lastRow = c.lastRow;
                    for (b.$cursorLayer.config = c; d <= e; d++) {
                        var m = a[d];
                        if (m && m.el)
                            if (m.hidden)
                                m.el.style.top =
                                    -100 - (m.pixelHeight || 0) + "px";
                            else {
                                m._inDocument ||
                                    ((m._inDocument = !0),
                                    b.container.appendChild(m.el));
                                var f = b.$cursorLayer.getPixelPosition(
                                    { row: d, column: 0 },
                                    !0
                                ).top;
                                m.coverLine ||
                                    (f +=
                                        c.lineHeight *
                                        this.session.getRowLineCount(m.row));
                                m.el.style.top = f - c.offset + "px";
                                f = m.coverGutter ? 0 : b.gutterWidth;
                                m.fixedWidth || (f -= b.scrollLeft);
                                m.el.style.left = f + "px";
                                m.fullWidth &&
                                    m.screenWidth &&
                                    (m.el.style.minWidth =
                                        c.width + 2 * c.padding + "px");
                                m.fixedWidth
                                    ? (m.el.style.right =
                                          b.scrollBar.getWidth() + "px")
                                    : (m.el.style.right = "");
                            }
                    }
                }
            };
        }.call(h.prototype));
        q.LineWidgets = h;
    }
);
ace.define(
    "ace/ext/error_marker",
    "require exports module ace/line_widgets ace/lib/dom ace/range".split(" "),
    function (n, q, t) {
        function h(a, c, e) {
            a = a.getAnnotations().sort(b.comparePoints);
            if (a.length) {
                a: {
                    var d = { row: c, column: -1 };
                    for (
                        var f = b.comparePoints, k = 0, l = a.length - 1;
                        k <= l;

                    ) {
                        var g = (k + l) >> 1,
                            h = f(d, a[g]);
                        if (0 < h) k = g + 1;
                        else {
                            if (!(0 > h)) {
                                d = g;
                                break a;
                            }
                            l = g - 1;
                        }
                    }
                    d = -(k + 1);
                }
                0 > d && (d = -d - 1);
                d >= a.length
                    ? (d = 0 < e ? 0 : a.length - 1)
                    : 0 === d && 0 > e && (d = a.length - 1);
                if ((f = a[d]) && e) {
                    if (f.row === c) {
                        do f = a[(d += e)];
                        while (f && f.row === c);
                        if (!f) return a.slice();
                    }
                    k = [];
                    c = f.row;
                    do k[0 > e ? "unshift" : "push"](f), (f = a[(d += e)]);
                    while (f && f.row == c);
                    return k.length && k;
                }
            }
        }
        var g = n("../line_widgets").LineWidgets,
            c = n("../lib/dom"),
            b = n("../range").Range;
        q.showErrorMarker = function (a, b) {
            var d = a.session;
            d.widgetManager ||
                ((d.widgetManager = new g(d)), d.widgetManager.attach(a));
            var m = a.getCursorPosition(),
                f = m.row,
                k = d.widgetManager.getWidgetsAtRow(f).filter(function (a) {
                    return "errorMarker" == a.type;
                })[0];
            k ? k.destroy() : (f -= b);
            if ((b = h(d, f, b)))
                (k = b[0]),
                    (m.column =
                        (k.pos && "number" != typeof k.column
                            ? k.pos.sc
                            : k.column) || 0),
                    (m.row = k.row),
                    (k = a.renderer.$gutterLayer.$annotations[m.row]);
            else {
                if (k) return;
                k = { text: ["Looks good!"], className: "ace_ok" };
            }
            a.session.unfold(m.row);
            a.selection.moveToPosition(m);
            var l = {
                row: m.row,
                fixedWidth: !0,
                coverGutter: !0,
                el: c.createElement("div"),
                type: "errorMarker",
            };
            b = l.el.appendChild(c.createElement("div"));
            f = l.el.appendChild(c.createElement("div"));
            f.className = "error_widget_arrow " + k.className;
            m = a.renderer.$cursorLayer.getPixelPosition(m).left;
            f.style.left = m + a.renderer.gutterWidth - 5 + "px";
            l.el.className = "error_widget_wrapper";
            b.className = "error_widget " + k.className;
            b.innerHTML = k.text.join("<br>");
            b.appendChild(c.createElement("div"));
            var n = function (a, b, c) {
                if (0 === b && ("esc" === c || "return" === c))
                    return l.destroy(), { command: "null" };
            };
            l.destroy = function () {
                a.$mouseHandler.isMousePressed ||
                    (a.keyBinding.removeKeyboardHandler(n),
                    d.widgetManager.removeLineWidget(l),
                    a.off("changeSelection", l.destroy),
                    a.off("changeSession", l.destroy),
                    a.off("mouseup", l.destroy),
                    a.off("change", l.destroy));
            };
            a.keyBinding.addKeyboardHandler(n);
            a.on("changeSelection", l.destroy);
            a.on("changeSession", l.destroy);
            a.on("mouseup", l.destroy);
            a.on("change", l.destroy);
            a.session.widgetManager.addLineWidget(l);
            l.el.onmousedown = a.focus.bind(a);
            a.renderer.scrollCursorIntoView(null, 0.5, {
                bottom: l.el.offsetHeight,
            });
        };
        c.importCssString(
            "    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }",
            ""
        );
    }
);
ace.define(
    "ace/ace",
    "require exports module ace/lib/fixoldbrowsers ace/lib/dom ace/lib/event ace/editor ace/edit_session ace/undomanager ace/virtual_renderer ace/worker/worker_client ace/keyboard/hash_handler ace/placeholder ace/multi_select ace/mode/folding/fold_mode ace/theme/textmate ace/ext/error_marker ace/config".split(
        " "
    ),
    function (n, q, t) {
        n("./lib/fixoldbrowsers");
        var h = n("./lib/dom"),
            g = n("./lib/event"),
            c = n("./editor").Editor,
            b = n("./edit_session").EditSession,
            a = n("./undomanager").UndoManager,
            d = n("./virtual_renderer").VirtualRenderer;
        n("./worker/worker_client");
        n("./keyboard/hash_handler");
        n("./placeholder");
        n("./multi_select");
        n("./mode/folding/fold_mode");
        n("./theme/textmate");
        n("./ext/error_marker");
        q.config = n("./config");
        q.require = n;
        "function" == typeof define && (q.define = define);
        q.edit = function (a) {
            if ("string" == typeof a) {
                var b = a;
                a = document.getElementById(b);
                if (!a) throw Error("ace.edit can't find div #" + b);
            }
            if (a && a.env && a.env.editor instanceof c) return a.env.editor;
            b = "";
            if (a && /input|textarea/i.test(a.tagName)) {
                var e = a;
                b = e.value;
                a = h.createElement("pre");
                e.parentNode.replaceChild(a, e);
            } else a && ((b = h.getInnerText(a)), (a.innerHTML = ""));
            b = q.createEditSession(b);
            a = new c(new d(a));
            a.setSession(b);
            var k = {
                document: b,
                editor: a,
                onResize: a.resize.bind(a, null),
            };
            return (
                e && (k.textarea = e),
                g.addListener(window, "resize", k.onResize),
                a.on("destroy", function () {
                    g.removeListener(window, "resize", k.onResize);
                    k.editor.container.env = null;
                }),
                (a.container.env = a.env = k),
                a
            );
        };
        q.createEditSession = function (c, d) {
            c = new b(c, d);
            return c.setUndoManager(new a()), c;
        };
        q.EditSession = b;
        q.UndoManager = a;
        q.version = "1.2.7";
    }
);
(function () {
    ace.require(["ace/ace"], function (n) {
        n && (n.config.init(!0), (n.define = ace.define));
        window.ace || (window.ace = n);
        for (var q in n) n.hasOwnProperty(q) && (window.ace[q] = n[q]);
    });
})();
ace.define(
    "ace/mode/bas_highlight_rules",
    "require exports module ace/lib/oop ace/mode/doc_comment_highlight_rules ace/mode/text_highlight_rules".split(
        " "
    ),
    function (n, q, t) {
        t = n("../lib/oop");
        n = n("./text_highlight_rules").TextHighlightRules;
        var h = function () {
            this.$rules = {
                start: [
                    {
                        token: "constant.numeric.hex",
                        regex: /0[xX][\da-fA-F]+/,
                    },
                    {
                        token: "constant.numeric.time",
                        regex: /(?:\d*\.?\d+(?:[eE][\+\-]?\d+)?)ms|(?:\d*\.?\d+(?:[eE][\+\-]?\d+)?)s(?:(?:\d*\.?\d+(?:[eE][\+\-]?\d+)?)ms)?|(?:\d*\.?\d+(?:[eE][\+\-]?\d+)?)m(?:(?:\d*\.?\d+(?:[eE][\+\-]?\d+)?)s)?(?:(?:\d*\.?\d+(?:[eE][\+\-]?\d+)?)ms)?|(?:\d*\.?\d+(?:[eE][\+\-]?\d+)?)h(?:(?:\d*\.?\d+(?:[eE][\+\-]?\d+)?)m)?(?:(?:\d*\.?\d+(?:[eE][\+\-]?\d+)?)s)?(?:(?:\d*\.?\d+(?:[eE][\+\-]?\d+)?)ms)?/,
                    },
                    {
                        token: "constant.numeric.percent_number",
                        regex: /(?:\+|\-)?\d*\.?\d+(?:[eE][\-]?\d+)?%/,
                    },
                    {
                        token: "constant.numeric.number",
                        regex: /(?:\+|\-)?\d*\.?\d+(?:[eE][\-]?\d+)?/,
                    },
                    { token: "keyword.operator", regex: /=|\.|,/ },
                    { token: "keyword", regex: /def/, next: "keyword.class" },
                    {
                        token: "keyword",
                        regex: /set/,
                        next: "variable.id.name",
                    },
                    { token: "keyword", regex: /then/ },
                    {
                        token: "variable.id",
                        regex: /[a-zA-Z_$@]+[a-zA-Z_$@\d]*/,
                    },
                    {
                        token: "variable",
                        regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)',
                    },
                    { token: "string", regex: '"', next: "string" },
                    {
                        token: "constant.language.boolean",
                        regex: "(?:true|false)\\b",
                    },
                    {
                        token: "text",
                        regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",
                    },
                    { token: "comment", regex: "\\/\\/.*$" },
                    {
                        token: "comment.start",
                        regex: "\\/\\*",
                        next: "comment",
                    },
                    { token: "paren.lparen", regex: "[[({]" },
                    { token: "paren.rparen", regex: "[\\])}]" },
                    { token: "text", regex: "\\s+" },
                ],
                string: [
                    {
                        token: "constant.language.escape",
                        regex: /\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/,
                    },
                    { token: "string", regex: '"|$', next: "start" },
                    { defaultToken: "string" },
                ],
                comment: [
                    { token: "comment.end", regex: "\\*\\/", next: "start" },
                    { defaultToken: "comment" },
                ],
                "keyword.class": [
                    {
                        token: "constant.language.class",
                        regex: /text|button|tween/,
                        next: "variable.id.name",
                    },
                    {
                        token: "text.class",
                        regex: /[a-zA-Z_$@]+[a-zA-Z_$@\d]*/,
                        next: "variable.id.name",
                    },
                ],
                "variable.id.name": [
                    {
                        token: "variable.id.name",
                        regex: /[a-zA-Z_$@]+[a-zA-Z_$@\d]*/,
                        next: "start",
                    },
                ],
            };
        };
        t.inherits(h, n);
        q.BasHighlightRules = h;
    }
);
ace.define(
    "ace/mode/matching_brace_outdent",
    ["require", "exports", "module", "ace/range"],
    function (n, q, t) {
        var h = n("../range").Range;
        n = function () {};
        (function () {
            this.checkOutdent = function (g, c) {
                return /^\s+$/.test(g) ? /^\s*\}/.test(c) : !1;
            };
            this.autoOutdent = function (g, c) {
                var b = g.getLine(c).match(/^(\s*\})/);
                if (!b) return 0;
                var b = b[1].length,
                    a = g.findMatchingBracket({ row: c, column: b });
                if (!a || a.row == c) return 0;
                a = this.$getIndent(g.getLine(a.row));
                g.replace(new h(c, 0, c, b - 1), a);
            };
            this.$getIndent = function (g) {
                return g.match(/^\s*/)[0];
            };
        }.call(n.prototype));
        q.MatchingBraceOutdent = n;
    }
);
ace.define(
    "ace/mode/folding/cstyle",
    "require exports module ace/lib/oop ace/range ace/mode/folding/fold_mode".split(
        " "
    ),
    function (n, q, t) {
        t = n("../../lib/oop");
        var h = n("../../range").Range;
        n = n("./fold_mode").FoldMode;
        q = q.FoldMode = function (g) {
            g &&
                ((this.foldingStartMarker = new RegExp(
                    this.foldingStartMarker.source.replace(
                        /\|[^|]*?$/,
                        "|" + g.start
                    )
                )),
                (this.foldingStopMarker = new RegExp(
                    this.foldingStopMarker.source.replace(
                        /\|[^|]*?$/,
                        "|" + g.end
                    )
                )));
        };
        t.inherits(q, n);
        (function () {
            this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
            this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
            this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/;
            this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
            this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
            this._getFoldWidgetBase = this.getFoldWidget;
            this.getFoldWidget = function (g, c, b) {
                var a = g.getLine(b);
                if (
                    this.singleLineBlockCommentRe.test(a) &&
                    !this.startRegionRe.test(a) &&
                    !this.tripleStarBlockCommentRe.test(a)
                )
                    return "";
                g = this._getFoldWidgetBase(g, c, b);
                return !g && this.startRegionRe.test(a) ? "start" : g;
            };
            this.getFoldWidgetRange = function (g, c, b, a) {
                var d = g.getLine(b);
                if (this.startRegionRe.test(d))
                    return this.getCommentRegionBlock(g, d, b);
                var e = d.match(this.foldingStartMarker);
                if (e) {
                    d = e.index;
                    if (e[1]) return this.openingBracketBlock(g, e[1], b, d);
                    (e = g.getCommentFoldRange(b, d + e[0].length, 1)) &&
                        !e.isMultiLine() &&
                        (a
                            ? (e = this.getSectionRange(g, b))
                            : "all" != c && (e = null));
                    return e;
                }
                if ("markbegin" !== c && (e = d.match(this.foldingStopMarker)))
                    return (
                        (d = e.index + e[0].length),
                        e[1]
                            ? this.closingBracketBlock(g, e[1], b, d)
                            : g.getCommentFoldRange(b, d, -1)
                    );
            };
            this.getSectionRange = function (g, c) {
                for (
                    var b = g.getLine(c),
                        a = b.search(/\S/),
                        d = c,
                        e = b.length,
                        m = (c += 1),
                        f = g.getLength();
                    ++c < f;

                )
                    if (((b = g.getLine(c)), (b = b.search(/\S/)), -1 !== b)) {
                        if (a > b) break;
                        var k = this.getFoldWidgetRange(g, "all", c);
                        if (k)
                            if (k.start.row <= d) break;
                            else if (k.isMultiLine()) c = k.end.row;
                            else if (a == b) break;
                        m = c;
                    }
                return new h(d, e, m, g.getLine(m).length);
            };
            this.getCommentRegionBlock = function (g, c, b) {
                for (
                    var a = c.search(/\s*$/),
                        d = g.getLength(),
                        e = b,
                        m = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,
                        f = 1;
                    ++b < d;

                ) {
                    c = g.getLine(b);
                    var k = m.exec(c);
                    if (k && (k[1] ? f-- : f++, !f)) break;
                }
                g = b;
                if (g > e) return new h(e, a, g, c.length);
            };
        }.call(q.prototype));
    }
);
ace.define(
    "ace/mode/bas_completions",
    ["require", "exports", "module"],
    function (n, q, t) {
        var h = "def text set linear ease ease-in ease-out ease-in-out then button path".split(
                " "
            ),
            g = "content x y alpha color bold textShadow strokeWidth strokeColor anchorX anchorY zIndex rotateX rotateY rotateZ parent fontSize fontFamily text textColor textAlpha fillColor fillAlpha duration target av bangumi seek page time seasonId episodeId d scale borderWidth borderColor borderAlpha viewBox width height".split(
                " "
            ),
            c = ["0x000000", "0xffffff", "av", "bangumi", "seek"];
        n = function () {};
        (function () {
            this.getCompletions = function (b, a, c, e) {
                if (!a.getTokenAt(c.row, c.column)) return [];
                var d = a.getLine(c.row).substr(0, c.column),
                    f = a.getLines(0, c.row - 1).join("") + d;
                return /=(.*)*$/.test(d)
                    ? this.getPropertyValueCompletions(b, a, c, e)
                    : /{[^}]*$/.test(f)
                    ? this.getPropertyCompletions(b, a, c, e)
                    : this.getKeyWordCompletions(b, a, c, e);
            };
            this.getPropertyValueCompletions = function (b, a, d, e) {
                return c.map(function (a) {
                    return {
                        caption: a,
                        snippet: a,
                        meta: "property value",
                        score: Number.MAX_VALUE,
                    };
                });
            };
            this.getPropertyCompletions = function (b, a, c, e) {
                return g.map(function (a) {
                    return {
                        caption: a,
                        snippet: a + " = ",
                        meta: "property",
                        score: Number.MAX_VALUE,
                    };
                });
            };
            this.getKeyWordCompletions = function (b, a, c, e) {
                return h.map(function (a) {
                    return {
                        caption: a,
                        snippet: a + " ",
                        meta: "keyword",
                        score: Number.MAX_VALUE,
                    };
                });
            };
        }.call(n.prototype));
        q.BasCompletions = n;
    }
);
ace.define(
    "ace/mode/bas",
    "require exports module ace/lib/oop ace/mode/text ace/mode/bas_highlight_rules ace/mode/matching_brace_outdent ace/worker/worker_client ace/mode/bas_completions ace/mode/behaviour/cstyle ace/mode/folding/cstyle".split(
        " "
    ),
    function (n, q, t) {
        t = n("../lib/oop");
        var h = n("./text").Mode,
            g = n("./bas_highlight_rules").BasHighlightRules,
            c = n("./matching_brace_outdent").MatchingBraceOutdent;
        n("../worker/worker_client");
        var b = n("./bas_completions").BasCompletions,
            a = n("./behaviour/cstyle").CstyleBehaviour,
            d = n("./folding/cstyle").FoldMode;
        n = function () {
            this.HighlightRules = g;
            this.$outdent = new c();
            this.$behaviour = new a();
            this.$completer = new b();
            this.foldingRules = new d();
        };
        t.inherits(n, h);
        (function () {
            this.lineCommentStart = "//";
            this.blockComment = { start: "/*", end: "*/" };
            this.getNextLineIndent = function (a, b, c) {
                var d = this.$getIndent(b);
                "start" == a && b.match(/^.*[\{\(\[]\s*$/) && (d += c);
                return d;
            };
            this.checkOutdent = function (a, b, c) {
                return this.$outdent.checkOutdent(b, c);
            };
            this.autoOutdent = function (a, b, c) {
                this.$outdent.autoOutdent(b, c);
            };
            this.getCompletions = function (a, b, c, d) {
                return this.$completer.getCompletions(a, b, c, d);
            };
            this.createWorker = function () {};
            this.$id = "ace/mode/bas";
        }.call(n.prototype));
        q.Mode = n;
    }
);
ace.define(
    "ace/theme/crimson_editor",
    ["require", "exports", "module", "ace/lib/dom"],
    function (n, q, t) {
        q.isDark = !1;
        q.cssText =
            '.ace-crimson-editor .ace_gutter {background: #ebebeb;color: #333;overflow : hidden;}.ace-crimson-editor .ace_gutter-layer {width: 100%;text-align: right;}.ace-crimson-editor .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-crimson-editor {background-color: #FFFFFF;color: rgb(64, 64, 64);}.ace-crimson-editor .ace_cursor {color: black;}.ace-crimson-editor .ace_invisible {color: rgb(191, 191, 191);}.ace-crimson-editor .ace_identifier {color: black;}.ace-crimson-editor .ace_keyword {color: blue;}.ace-crimson-editor .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-crimson-editor .ace_constant.ace_language {color: rgb(255, 156, 0);}.ace-crimson-editor .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-crimson-editor .ace_invalid {text-decoration: line-through;color: rgb(224, 0, 0);}.ace-crimson-editor .ace_fold {}.ace-crimson-editor .ace_support.ace_function {color: rgb(192, 0, 0);}.ace-crimson-editor .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-crimson-editor .ace_support.ace_type,.ace-crimson-editor .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-crimson-editor .ace_keyword.ace_operator {color: rgb(49, 132, 149);}.ace-crimson-editor .ace_string {color: rgb(128, 0, 128);}.ace-crimson-editor .ace_comment {color: rgb(76, 136, 107);}.ace-crimson-editor .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-crimson-editor .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-crimson-editor .ace_constant.ace_numeric {color: rgb(0, 0, 64);}.ace-crimson-editor .ace_variable {color: rgb(0, 64, 128);}.ace-crimson-editor .ace_xml-pe {color: rgb(104, 104, 91);}.ace-crimson-editor .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-crimson-editor .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-crimson-editor .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-crimson-editor .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-crimson-editor .ace_marker-layer .ace_active-line {background: rgb(232, 242, 254);}.ace-crimson-editor .ace_gutter-active-line {background-color : #dcdcdc;}.ace-crimson-editor .ace_meta.ace_tag {color:rgb(28, 2, 255);}.ace-crimson-editor .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-crimson-editor .ace_string.ace_regex {color: rgb(192, 0, 192);}.ace-crimson-editor .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
        q.cssClass = "ace-crimson-editor";
        n("../lib/dom").importCssString(q.cssText, q.cssClass);
    }
);
ace.define(
    "ace/snippets",
    "require exports module ace/lib/oop ace/lib/event_emitter ace/lib/lang ace/range ace/anchor ace/keyboard/hash_handler ace/tokenizer ace/lib/dom ace/editor".split(
        " "
    ),
    function (n, q, t) {
        var h = n("./lib/oop"),
            g = n("./lib/event_emitter").EventEmitter,
            c = n("./lib/lang"),
            b = n("./range").Range;
        n("./anchor");
        var a = n("./keyboard/hash_handler").HashHandler,
            d = n("./tokenizer").Tokenizer,
            e = b.comparePoints,
            m = function () {
                this.snippetMap = {};
                this.snippetNameMap = {};
            };
        (function () {
            h.implement(this, g);
            this.getTokenizer = function () {
                function a(a, b, c) {
                    return (
                        (a = a.substr(1)),
                        /^\d+$/.test(a) && !c.inFormatString
                            ? [{ tabstopId: parseInt(a, 10) }]
                            : [{ text: a }]
                    );
                }
                function b(a) {
                    return "(?:[^\\\\" + a + "]|\\\\.)";
                }
                return (
                    (m.$tokenizer = new d({
                        start: [
                            {
                                regex: /:/,
                                onMatch: function (a, b, c) {
                                    return c.length && c[0].expectIf
                                        ? ((c[0].expectIf = !1),
                                          (c[0].elseBranch = c[0]),
                                          [c[0]])
                                        : ":";
                                },
                            },
                            {
                                regex: /\\./,
                                onMatch: function (a, b, c) {
                                    b = a[1];
                                    return (
                                        "}" == b && c.length
                                            ? (a = b)
                                            : -1 != "`$\\".indexOf(b)
                                            ? (a = b)
                                            : c.inFormatString &&
                                              ("n" == b
                                                  ? (a = "\n")
                                                  : "t" == b
                                                  ? (a = "\n")
                                                  : -1 != "ulULE".indexOf(b) &&
                                                    (a = {
                                                        changeCase: b,
                                                        local: "a" < b,
                                                    })),
                                        [a]
                                    );
                                },
                            },
                            {
                                regex: /}/,
                                onMatch: function (a, b, c) {
                                    return [c.length ? c.shift() : a];
                                },
                            },
                            { regex: /\$(?:\d+|\w+)/, onMatch: a },
                            {
                                regex: /\$\{[\dA-Z_a-z]+/,
                                onMatch: function (b, c, d) {
                                    b = a(b.substr(1), c, d);
                                    return d.unshift(b[0]), b;
                                },
                                next: "snippetVar",
                            },
                            { regex: /\n/, token: "newline", merge: !1 },
                        ],
                        snippetVar: [
                            {
                                regex: "\\|" + b("\\|") + "*\\|",
                                onMatch: function (a, b, c) {
                                    c[0].choices = a.slice(1, -1).split(",");
                                },
                                next: "start",
                            },
                            {
                                regex:
                                    "/(" +
                                    b("/") +
                                    "+)/(?:(" +
                                    b("/") +
                                    "*)/)(\\w*):?",
                                onMatch: function (a, b, c) {
                                    b = c[0];
                                    return (
                                        (b.fmtString = a),
                                        (a = this.splitRegex.exec(a)),
                                        (b.guard = a[1]),
                                        (b.fmt = a[2]),
                                        (b.flag = a[3]),
                                        ""
                                    );
                                },
                                next: "start",
                            },
                            {
                                regex: "`" + b("`") + "*`",
                                onMatch: function (a, b, c) {
                                    return (c[0].code = a.splice(1, -1)), "";
                                },
                                next: "start",
                            },
                            {
                                regex: "\\?",
                                onMatch: function (a, b, c) {
                                    c[0] && (c[0].expectIf = !0);
                                },
                                next: "start",
                            },
                            {
                                regex: "([^:}\\\\]|\\\\.)*:?",
                                token: "",
                                next: "start",
                            },
                        ],
                        formatString: [
                            { regex: "/(" + b("/") + "+)/", token: "regex" },
                            {
                                regex: "",
                                onMatch: function (a, b, c) {
                                    c.inFormatString = !0;
                                },
                                next: "start",
                            },
                        ],
                    })),
                    (m.prototype.getTokenizer = function () {
                        return m.$tokenizer;
                    }),
                    m.$tokenizer
                );
            };
            this.tokenizeTmSnippet = function (a, b) {
                return this.getTokenizer()
                    .getLineTokens(a, b)
                    .tokens.map(function (a) {
                        return a.value || a;
                    });
            };
            this.$getDefaultValue = function (a, b) {
                if (/^[A-Z]\d+$/.test(b))
                    return (
                        (a = b.substr(1)),
                        (this.variables[b[0] + "__"] || {})[a]
                    );
                if (/^\d+$/.test(b)) return (this.variables.__ || {})[b];
                b = b.replace(/^TM_/, "");
                if (a) {
                    var c = a.session;
                    switch (b) {
                        case "CURRENT_WORD":
                            var d = c.getWordRange();
                        case "SELECTION":
                        case "SELECTED_TEXT":
                            return c.getTextRange(d);
                        case "CURRENT_LINE":
                            return c.getLine(a.getCursorPosition().row);
                        case "PREV_LINE":
                            return c.getLine(a.getCursorPosition().row - 1);
                        case "LINE_INDEX":
                            return a.getCursorPosition().column;
                        case "LINE_NUMBER":
                            return a.getCursorPosition().row + 1;
                        case "SOFT_TABS":
                            return c.getUseSoftTabs() ? "YES" : "NO";
                        case "TAB_SIZE":
                            return c.getTabSize();
                        case "FILENAME":
                        case "FILEPATH":
                            return "";
                        case "FULLNAME":
                            return "Ace";
                    }
                }
            };
            this.variables = {};
            this.getVariableValue = function (a, b) {
                return this.variables.hasOwnProperty(b)
                    ? this.variables[b](a, b) || ""
                    : this.$getDefaultValue(a, b) || "";
            };
            this.tmStrFormat = function (a, b, c) {
                var d = b.guard,
                    d = new RegExp(d, (b.flag || "").replace(/[^gi]/, "")),
                    e = this.tokenizeTmSnippet(b.fmt, "formatString"),
                    f = this;
                a = a.replace(d, function () {
                    f.variables.__ = arguments;
                    for (
                        var a = f.resolveVariables(e, c), b = "E", d = 0;
                        d < a.length;
                        d++
                    ) {
                        var l = a[d];
                        if ("object" == typeof l)
                            if (((a[d] = ""), l.changeCase && l.local)) {
                                var k = a[d + 1];
                                k &&
                                    "string" == typeof k &&
                                    ("u" == l.changeCase
                                        ? (a[d] = k[0].toUpperCase())
                                        : (a[d] = k[0].toLowerCase()),
                                    (a[d + 1] = k.substr(1)));
                            } else l.changeCase && (b = l.changeCase);
                        else
                            "U" == b
                                ? (a[d] = l.toUpperCase())
                                : "L" == b && (a[d] = l.toLowerCase());
                    }
                    return a.join("");
                });
                return (this.variables.__ = null), a;
            };
            this.resolveVariables = function (a, b) {
                function c(b) {
                    b = a.indexOf(b, e + 1);
                    -1 != b && (e = b);
                }
                for (var d = [], e = 0; e < a.length; e++) {
                    var f = a[e];
                    if ("string" == typeof f) d.push(f);
                    else if ("object" == typeof f)
                        if (f.skip) c(f);
                        else if (!(f.processed < e))
                            if (f.text) {
                                var l = this.getVariableValue(b, f.text);
                                l &&
                                    f.fmtString &&
                                    (l = this.tmStrFormat(l, f));
                                f.processed = e;
                                null == f.expectIf
                                    ? l && (d.push(l), c(f))
                                    : l
                                    ? (f.skip = f.elseBranch)
                                    : c(f);
                            } else
                                null != f.tabstopId
                                    ? d.push(f)
                                    : null != f.changeCase && d.push(f);
                }
                return d;
            };
            this.insertSnippetForSelection = function (a, b) {
                function c(a) {
                    for (var b = [], c = 0; c < a.length; c++) {
                        var d = a[c];
                        if ("object" == typeof d) {
                            if (m[d.tabstopId]) continue;
                            var e = a.lastIndexOf(d, c - 1),
                                d = b[e] || { tabstopId: d.tabstopId };
                        }
                        b[c] = d;
                    }
                    return b;
                }
                var d = a.getCursorPosition(),
                    e = a.session.getLine(d.row),
                    l = a.session.getTabString(),
                    k = e.match(/^\s*/)[0];
                d.column < k.length && (k = k.slice(0, d.column));
                b = b.replace(/\r/g, "");
                var g = this.tokenizeTmSnippet(b),
                    g = this.resolveVariables(g, a),
                    g = g.map(function (a) {
                        return "\n" == a
                            ? a + k
                            : "string" == typeof a
                            ? a.replace(/\t/g, l)
                            : a;
                    }),
                    h = [];
                g.forEach(function (a, b) {
                    if ("object" == typeof a) {
                        var c = a.tabstopId,
                            d = h[c];
                        d || ((d = h[c] = []), (d.index = c), (d.value = ""));
                        -1 === d.indexOf(a) &&
                            (d.push(a),
                            (a = g.indexOf(a, b + 1)),
                            -1 !== a &&
                                ((b = g.slice(b + 1, a)),
                                b.some(function (a) {
                                    return "object" == typeof a;
                                }) && !d.value
                                    ? (d.value = b)
                                    : b.length &&
                                      (!d.value ||
                                          "string" != typeof d.value) &&
                                      (d.value = b.join(""))));
                    }
                });
                h.forEach(function (a) {
                    a.length = 0;
                });
                var m = {};
                for (b = 0; b < g.length; b++)
                    if (((d = g[b]), "object" == typeof d)) {
                        var e = d.tabstopId,
                            n = g.indexOf(d, b + 1);
                        if (m[e]) m[e] === d && (m[e] = null);
                        else {
                            var q = h[e],
                                v =
                                    "string" == typeof q.value
                                        ? [q.value]
                                        : c(q.value);
                            v.unshift(b + 1, Math.max(0, n - b));
                            v.push(d);
                            m[e] = d;
                            g.splice.apply(g, v);
                            -1 === q.indexOf(d) && q.push(d);
                        }
                    }
                var t = 0,
                    A = 0,
                    D = "";
                g.forEach(function (a) {
                    if ("string" == typeof a) {
                        var b = a.split("\n");
                        1 < b.length
                            ? ((A = b[b.length - 1].length),
                              (t += b.length - 1))
                            : (A += a.length);
                        D += a;
                    } else a.start ? (a.end = { row: t, column: A }) : (a.start = { row: t, column: A });
                });
                b = a.getSelectionRange();
                d = a.session.replace(b, D);
                new f(a).addTabstops(
                    h,
                    b.start,
                    d,
                    a.inVirtualSelectionMode && a.selection.index
                );
            };
            this.insertSnippet = function (a, b) {
                var c = this;
                if (a.inVirtualSelectionMode)
                    return c.insertSnippetForSelection(a, b);
                a.forEachSelection(
                    function () {
                        c.insertSnippetForSelection(a, b);
                    },
                    null,
                    { keepOrder: !0 }
                );
                a.tabstopManager && a.tabstopManager.tabNext();
            };
            this.$getScope = function (a) {
                var b = a.session.$mode.$id || "",
                    b = b.split("/").pop();
                if ("html" === b || "php" === b) {
                    "php" === b && !a.session.$mode.inlinePhp && (b = "html");
                    var c = a.getCursorPosition();
                    a = a.session.getState(c.row);
                    "object" == typeof a && (a = a[0]);
                    a.substring &&
                        ("js-" == a.substring(0, 3)
                            ? (b = "javascript")
                            : "css-" == a.substring(0, 4)
                            ? (b = "css")
                            : "php-" == a.substring(0, 4) && (b = "php"));
                }
                return b;
            };
            this.getActiveScopes = function (a) {
                a = this.$getScope(a);
                var b = [a],
                    c = this.snippetMap;
                return (
                    c[a] &&
                        c[a].includeScopes &&
                        b.push.apply(b, c[a].includeScopes),
                    b.push("_"),
                    b
                );
            };
            this.expandWithTab = function (a, b) {
                var c = this,
                    d = a.forEachSelection(
                        function () {
                            return c.expandSnippetForSelection(a, b);
                        },
                        null,
                        { keepOrder: !0 }
                    );
                return d && a.tabstopManager && a.tabstopManager.tabNext(), d;
            };
            this.expandSnippetForSelection = function (a, b) {
                var c = a.getCursorPosition(),
                    d = a.session.getLine(c.row),
                    e = d.substring(0, c.column),
                    f = d.substr(c.column),
                    l = this.snippetMap,
                    k;
                return (
                    this.getActiveScopes(a).some(function (a) {
                        a = l[a];
                        return (
                            a && (k = this.findMatchingSnippet(a, e, f)), !!k
                        );
                    }, this),
                    k
                        ? b && b.dryRun
                            ? !0
                            : (a.session.doc.removeInLine(
                                  c.row,
                                  c.column - k.replaceBefore.length,
                                  c.column + k.replaceAfter.length
                              ),
                              (this.variables.M__ = k.matchBefore),
                              (this.variables.T__ = k.matchAfter),
                              this.insertSnippetForSelection(a, k.content),
                              (this.variables.M__ = this.variables.T__ = null),
                              !0)
                        : !1
                );
            };
            this.findMatchingSnippet = function (a, b, c) {
                for (var d = a.length; d--; ) {
                    var e = a[d];
                    if (!e.startRe || e.startRe.test(b))
                        if (!e.endRe || e.endRe.test(c))
                            if (e.startRe || e.endRe)
                                return (
                                    (e.matchBefore = e.startRe
                                        ? e.startRe.exec(b)
                                        : [""]),
                                    (e.matchAfter = e.endRe
                                        ? e.endRe.exec(c)
                                        : [""]),
                                    (e.replaceBefore = e.triggerRe
                                        ? e.triggerRe.exec(b)[0]
                                        : ""),
                                    (e.replaceAfter = e.endTriggerRe
                                        ? e.endTriggerRe.exec(c)[0]
                                        : ""),
                                    e
                                );
                }
            };
            this.snippetMap = {};
            this.snippetNameMap = {};
            this.register = function (a, b) {
                function d(a) {
                    return (
                        a &&
                            !/^\^?\(.*\)\$?$|^\\b$/.test(a) &&
                            (a = "(?:" + a + ")"),
                        a || ""
                    );
                }
                function e(a, b, c) {
                    return (
                        (a = d(a)),
                        (b = d(b)),
                        c
                            ? ((a = b + a),
                              a && "$" != a[a.length - 1] && (a += "$"))
                            : ((a += b), a && "^" != a[0] && (a = "^" + a)),
                        new RegExp(a)
                    );
                }
                function f(a) {
                    a.scope || (a.scope = b || "_");
                    b = a.scope;
                    l[b] || ((l[b] = []), (k[b] = {}));
                    var d = k[b];
                    if (a.name) {
                        var f = d[a.name];
                        f && g.unregister(f);
                        d[a.name] = a;
                    }
                    l[b].push(a);
                    a.tabTrigger &&
                        !a.trigger &&
                        (!a.guard &&
                            /^\w/.test(a.tabTrigger) &&
                            (a.guard = "\\b"),
                        (a.trigger = c.escapeRegExp(a.tabTrigger)));
                    if (a.trigger || a.guard || a.endTrigger || a.endGuard)
                        (a.startRe = e(a.trigger, a.guard, !0)),
                            (a.triggerRe = new RegExp(a.trigger, "", !0)),
                            (a.endRe = e(a.endTrigger, a.endGuard, !0)),
                            (a.endTriggerRe = new RegExp(a.endTrigger, "", !0));
                }
                var l = this.snippetMap,
                    k = this.snippetNameMap,
                    g = this;
                a || (a = []);
                a && a.content ? f(a) : Array.isArray(a) && a.forEach(f);
                this._signal("registerSnippets", { scope: b });
            };
            this.unregister = function (a, b) {
                function c(a) {
                    var c = e[a.scope || b];
                    c &&
                        c[a.name] &&
                        (delete c[a.name],
                        (a = (c = d[a.scope || b]) && c.indexOf(a)),
                        0 <= a && c.splice(a, 1));
                }
                var d = this.snippetMap,
                    e = this.snippetNameMap;
                a.content ? c(a) : Array.isArray(a) && a.forEach(c);
            };
            this.parseSnippetFile = function (a) {
                a = a.replace(/\r/g, "");
                for (
                    var b = [],
                        c = {},
                        d = /^#.*|^({[\s\S]*})\s*$|^(\S+) (.*)$|^((?:\n*\t.*)+)/gm,
                        e;
                    (e = d.exec(a));

                ) {
                    if (e[1])
                        try {
                            (c = JSON.parse(e[1])), b.push(c);
                        } catch (w) {}
                    if (e[4])
                        (c.content = e[4].replace(/^\t/gm, "")),
                            b.push(c),
                            (c = {});
                    else {
                        var f = e[2];
                        e = e[3];
                        "regex" == f
                            ? ((f = /\/((?:[^\/\\]|\\.)*)|$/g),
                              (c.guard = f.exec(e)[1]),
                              (c.trigger = f.exec(e)[1]),
                              (c.endTrigger = f.exec(e)[1]),
                              (c.endGuard = f.exec(e)[1]))
                            : "snippet" == f
                            ? ((c.tabTrigger = e.match(/^\S*/)[0]),
                              c.name || (c.name = e))
                            : (c[f] = e);
                    }
                }
                return b;
            };
            this.getSnippetByName = function (a, b) {
                var c = this.snippetNameMap,
                    d;
                return (
                    this.getActiveScopes(b).some(function (b) {
                        b = c[b];
                        return b && (d = b[a]), !!d;
                    }, this),
                    d
                );
            };
        }.call(m.prototype));
        var f = function (a) {
            if (a.tabstopManager) return a.tabstopManager;
            a.tabstopManager = this;
            this.$onChange = this.onChange.bind(this);
            this.$onChangeSelection = c.delayedCall(
                this.onChangeSelection.bind(this)
            ).schedule;
            this.$onChangeSession = this.onChangeSession.bind(this);
            this.$onAfterExec = this.onAfterExec.bind(this);
            this.attach(a);
        };
        (function () {
            this.attach = function (a) {
                this.index = 0;
                this.ranges = [];
                this.tabstops = [];
                this.selectedTabstop = this.$openTabstops = null;
                this.editor = a;
                this.editor.on("change", this.$onChange);
                this.editor.on("changeSelection", this.$onChangeSelection);
                this.editor.on("changeSession", this.$onChangeSession);
                this.editor.commands.on("afterExec", this.$onAfterExec);
                this.editor.keyBinding.addKeyboardHandler(this.keyboardHandler);
            };
            this.detach = function () {
                this.tabstops.forEach(this.removeTabstopMarkers, this);
                this.selectedTabstop = this.tabstops = this.ranges = null;
                this.editor.removeListener("change", this.$onChange);
                this.editor.removeListener(
                    "changeSelection",
                    this.$onChangeSelection
                );
                this.editor.removeListener(
                    "changeSession",
                    this.$onChangeSession
                );
                this.editor.commands.removeListener(
                    "afterExec",
                    this.$onAfterExec
                );
                this.editor.keyBinding.removeKeyboardHandler(
                    this.keyboardHandler
                );
                this.editor = this.editor.tabstopManager = null;
            };
            this.onChange = function (a) {
                var b = "r" == a.action[0],
                    c = a.start,
                    d = a.end;
                a = c.row;
                var f = d.row - a,
                    l = d.column - c.column;
                b && ((f = -f), (l = -l));
                if (!this.$inChange && b) {
                    var k = this.selectedTabstop;
                    if (
                        k &&
                        !k.some(function (a) {
                            return 0 >= e(a.start, c) && 0 <= e(a.end, d);
                        })
                    )
                        return this.detach();
                }
                for (var k = this.ranges, g = 0; g < k.length; g++) {
                    var h = k[g];
                    h.end.row < c.row ||
                        (b && 0 > e(c, h.start) && 0 < e(d, h.end)
                            ? (this.removeRange(h), g--)
                            : (h.start.row == a &&
                                  h.start.column > c.column &&
                                  (h.start.column += l),
                              h.end.row == a &&
                                  h.end.column >= c.column &&
                                  (h.end.column += l),
                              h.start.row >= a && (h.start.row += f),
                              h.end.row >= a && (h.end.row += f),
                              0 < e(h.start, h.end) && this.removeRange(h)));
                }
                k.length || this.detach();
            };
            this.updateLinkedFields = function () {
                var a = this.selectedTabstop;
                if (a && a.hasLinkedRanges) {
                    this.$inChange = !0;
                    for (
                        var b = this.editor.session,
                            c = b.getTextRange(a.firstNonLinked),
                            d = a.length;
                        d--;

                    ) {
                        var e = a[d];
                        if (e.linked) {
                            var f = q.snippetManager.tmStrFormat(c, e.original);
                            b.replace(e, f);
                        }
                    }
                    this.$inChange = !1;
                }
            };
            this.onAfterExec = function (a) {
                a.command && !a.command.readOnly && this.updateLinkedFields();
            };
            this.onChangeSelection = function () {
                if (this.editor) {
                    for (
                        var a = this.editor.selection.lead,
                            b = this.editor.selection.anchor,
                            c = this.editor.selection.isEmpty(),
                            d = this.ranges.length;
                        d--;

                    )
                        if (!this.ranges[d].linked) {
                            var e = this.ranges[d].contains(a.row, a.column),
                                f =
                                    c ||
                                    this.ranges[d].contains(b.row, b.column);
                            if (e && f) return;
                        }
                    this.detach();
                }
            };
            this.onChangeSession = function () {
                this.detach();
            };
            this.tabNext = function (a) {
                var b = this.tabstops.length;
                a = this.index + (a || 1);
                a = Math.min(Math.max(a, 1), b);
                a == b && (a = 0);
                this.selectTabstop(a);
                0 === a && this.detach();
            };
            this.selectTabstop = function (a) {
                this.$openTabstops = null;
                var b = this.tabstops[this.index];
                b && this.addTabstopMarkers(b);
                this.index = a;
                if ((b = this.tabstops[this.index]) && b.length) {
                    this.selectedTabstop = b;
                    if (this.editor.inVirtualSelectionMode)
                        this.editor.selection.setRange(b.firstNonLinked);
                    else {
                        a = this.editor.multiSelect;
                        a.toSingleRange(b.firstNonLinked.clone());
                        for (var c = b.length; c--; )
                            (b.hasLinkedRanges && b[c].linked) ||
                                a.addRange(b[c].clone(), !0);
                        a.ranges[0] && a.addRange(a.ranges[0].clone());
                    }
                    this.editor.keyBinding.addKeyboardHandler(
                        this.keyboardHandler
                    );
                }
            };
            this.addTabstops = function (a, c, d) {
                this.$openTabstops || (this.$openTabstops = []);
                a[0] ||
                    ((d = b.fromPoints(d, d)),
                    k(d.start, c),
                    k(d.end, c),
                    (a[0] = [d]),
                    (a[0].index = 0));
                var e = [this.index + 1, 0],
                    f = this.ranges;
                a.forEach(function (a, d) {
                    for (
                        var k = this.$openTabstops[d] || a, l = a.length;
                        l--;

                    ) {
                        var g = a[l],
                            h = b.fromPoints(g.start, g.end || g.start),
                            m = h.start,
                            p = c;
                        0 == m.row && (m.column += p.column);
                        m.row += p.row;
                        m = h.end;
                        p = c;
                        0 == m.row && (m.column += p.column);
                        m.row += p.row;
                        h.original = g;
                        h.tabstop = k;
                        f.push(h);
                        k != a ? k.unshift(h) : (k[l] = h);
                        g.fmtString
                            ? ((h.linked = !0), (k.hasLinkedRanges = !0))
                            : k.firstNonLinked || (k.firstNonLinked = h);
                    }
                    k.firstNonLinked || (k.hasLinkedRanges = !1);
                    k === a && (e.push(k), (this.$openTabstops[d] = k));
                    this.addTabstopMarkers(k);
                }, this);
                2 < e.length &&
                    (this.tabstops.length && e.push(e.splice(2, 1)[0]),
                    this.tabstops.splice.apply(this.tabstops, e));
            };
            this.addTabstopMarkers = function (a) {
                var b = this.editor.session;
                a.forEach(function (a) {
                    a.markerId ||
                        (a.markerId = b.addMarker(
                            a,
                            "ace_snippet-marker",
                            "text"
                        ));
                });
            };
            this.removeTabstopMarkers = function (a) {
                var b = this.editor.session;
                a.forEach(function (a) {
                    b.removeMarker(a.markerId);
                    a.markerId = null;
                });
            };
            this.removeRange = function (a) {
                var b = a.tabstop.indexOf(a);
                a.tabstop.splice(b, 1);
                b = this.ranges.indexOf(a);
                this.ranges.splice(b, 1);
                this.editor.session.removeMarker(a.markerId);
                a.tabstop.length ||
                    ((b = this.tabstops.indexOf(a.tabstop)),
                    -1 != b && this.tabstops.splice(b, 1),
                    this.tabstops.length || this.detach());
            };
            this.keyboardHandler = new a();
            this.keyboardHandler.bindKeys({
                Tab: function (a) {
                    (q.snippetManager && q.snippetManager.expandWithTab(a)) ||
                        a.tabstopManager.tabNext(1);
                },
                "Shift-Tab": function (a) {
                    a.tabstopManager.tabNext(-1);
                },
                Esc: function (a) {
                    a.tabstopManager.detach();
                },
                Return: function (a) {
                    return !1;
                },
            });
        }.call(f.prototype));
        var k = function (a, b) {
            a.row == b.row && (a.column -= b.column);
            a.row -= b.row;
        };
        n("./lib/dom").importCssString(
            ".ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}"
        );
        q.snippetManager = new m();
        n = n("./editor").Editor;
        (function () {
            this.insertSnippet = function (a, b) {
                return q.snippetManager.insertSnippet(this, a, b);
            };
            this.expandSnippet = function (a) {
                return q.snippetManager.expandWithTab(this, a);
            };
        }.call(n.prototype));
    }
);
ace.define(
    "ace/autocomplete/popup",
    "require exports module ace/virtual_renderer ace/editor ace/range ace/lib/event ace/lib/lang ace/lib/dom".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../virtual_renderer").VirtualRenderer,
            g = n("../editor").Editor,
            c = n("../range").Range,
            b = n("../lib/event"),
            a = n("../lib/lang"),
            d = n("../lib/dom"),
            e = function (a) {
                a = new h(a);
                a.$maxLines = 4;
                a = new g(a);
                return (
                    a.setHighlightActiveLine(!1),
                    a.setShowPrintMargin(!1),
                    a.renderer.setShowGutter(!1),
                    a.renderer.setHighlightGutterLine(!1),
                    (a.$mouseHandler.$focusWaitTimout = 0),
                    (a.$highlightTagPending = !0),
                    a
                );
            };
        d.importCssString(
            ".ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);}.ace_editor.ace_autocomplete .ace_line-hover {    position: absolute;    z-index: 2;}.ace_editor.ace_autocomplete .ace_scroller {   background: none;   border: none;   box-shadow: none;}.ace_rightAlignedText {    color: gray;    display: inline-block;    position: absolute;    right: 4px;    text-align: right;    z-index: -1;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #000;    text-shadow: 0 0 0.01em;}.ace_editor.ace_autocomplete {    width: 280px;    z-index: 200000;    background: #fbfbfb;    color: #444;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;}"
        );
        q.AcePopup = function (g) {
            var f = d.createElement("div"),
                k = new e(f);
            g && g.appendChild(f);
            f.style.display = "none";
            k.renderer.content.style.cursor = "default";
            k.renderer.setStyle("ace_autocomplete");
            k.setOption("displayIndentGuides", !1);
            k.setOption("dragDelay", 150);
            g = function () {};
            k.focus = g;
            k.$isFocused = !0;
            k.renderer.$cursorLayer.restartTimer = g;
            k.renderer.$cursorLayer.element.style.opacity = 0;
            k.renderer.$maxLines = 8;
            k.renderer.$keepTextAreaAtCursor = !1;
            k.setHighlightActiveLine(!1);
            k.session.highlight("");
            k.session.$searchHighlight.clazz = "ace_highlight-marker";
            k.on("mousedown", function (a) {
                var b = a.getDocumentPosition();
                k.selection.moveToPosition(b);
                m.start.row = m.end.row = b.row;
                a.stop();
            });
            var l,
                h = new c(-1, 0, -1, Infinity),
                m = new c(-1, 0, -1, Infinity);
            m.id = k.session.addMarker(m, "ace_active-line", "fullLine");
            k.setSelectOnHover = function (a) {
                a
                    ? h.id && (k.session.removeMarker(h.id), (h.id = null))
                    : (h.id = k.session.addMarker(
                          h,
                          "ace_line-hover",
                          "fullLine"
                      ));
            };
            k.setSelectOnHover(!1);
            k.on("mousemove", function (a) {
                if (!l) l = a;
                else if (l.x != a.x || l.y != a.y)
                    (l = a),
                        (l.scrollTop = k.renderer.scrollTop),
                        (a = l.getDocumentPosition().row),
                        h.start.row != a && (h.id || k.setRow(a), n(a));
            });
            k.renderer.on("beforeRender", function () {
                if (l && -1 != h.start.row) {
                    l.$pos = null;
                    var a = l.getDocumentPosition().row;
                    h.id || k.setRow(a);
                    n(a, !0);
                }
            });
            k.renderer.on("afterRender", function () {
                var a = k.getRow(),
                    b = k.renderer.$textLayer,
                    a = b.element.childNodes[a - b.config.firstRow];
                a != b.selectedNode &&
                    (b.selectedNode &&
                        d.removeCssClass(b.selectedNode, "ace_selected"),
                    (b.selectedNode = a) && d.addCssClass(a, "ace_selected"));
            });
            var f = function () {
                    n(-1);
                },
                n = function (a, b) {
                    a !== h.start.row &&
                        ((h.start.row = h.end.row = a),
                        b || k.session._emit("changeBackMarker"),
                        k._emit("changeHoverMarker"));
                };
            k.getHoveredRow = function () {
                return h.start.row;
            };
            b.addListener(k.container, "mouseout", f);
            k.on("hide", f);
            k.on("changeSelection", f);
            k.session.doc.getLength = function () {
                return k.data.length;
            };
            k.session.doc.getLine = function (a) {
                a = k.data[a];
                return "string" == typeof a ? a : (a && a.value) || "";
            };
            f = k.session.bgTokenizer;
            return (
                (f.$tokenizeRow = function (a) {
                    a = k.data[a];
                    var b = [];
                    if (!a) return b;
                    "string" == typeof a && (a = { value: a });
                    a.caption || (a.caption = a.value || a.name);
                    for (var c = -1, d, e, f = 0; f < a.caption.length; f++)
                        (e = a.caption[f]),
                            (d = a.matchMask & (1 << f) ? 1 : 0),
                            c !== d
                                ? (b.push({
                                      type:
                                          a.className ||
                                          "" +
                                              (d ? "completion-highlight" : ""),
                                      value: e,
                                  }),
                                  (c = d))
                                : (b[b.length - 1].value += e);
                    a.meta &&
                        ((c =
                            k.renderer.$size.scrollerWidth /
                            k.renderer.layerConfig.characterWidth),
                        (d = a.meta),
                        d.length + a.caption.length > c - 2 &&
                            (d =
                                d.substr(0, c - a.caption.length - 3) +
                                "\u2026"),
                        b.push({ type: "rightAlignedText", value: d }));
                    return b;
                }),
                (f.$updateOnChange = g),
                (f.start = g),
                (k.session.$computeWidth = function () {
                    return (this.screenWidth = 0);
                }),
                (k.$blockScrolling = Infinity),
                (k.isOpen = !1),
                (k.isTopdown = !1),
                (k.autoSelect = !0),
                (k.data = []),
                (k.setData = function (b) {
                    k.setValue(a.stringRepeat("\n", b.length), -1);
                    k.data = b || [];
                    k.setRow(0);
                }),
                (k.getData = function (a) {
                    return k.data[a];
                }),
                (k.getRow = function () {
                    return m.start.row;
                }),
                (k.setRow = function (a) {
                    a = Math.max(
                        this.autoSelect ? 0 : -1,
                        Math.min(this.data.length, a)
                    );
                    m.start.row != a &&
                        (k.selection.clearSelection(),
                        (m.start.row = m.end.row = a || 0),
                        k.session._emit("changeBackMarker"),
                        k.moveCursorTo(a || 0, 0),
                        k.isOpen && k._signal("select"));
                }),
                k.on("changeSelection", function () {
                    k.isOpen && k.setRow(k.selection.lead.row);
                    k.renderer.scrollCursorIntoView();
                }),
                (k.hide = function () {
                    this.container.style.display = "none";
                    this._signal("hide");
                    k.isOpen = !1;
                }),
                (k.show = function (a, b, c) {
                    var d = this.container,
                        e = window.innerHeight,
                        f = window.innerWidth,
                        g = this.renderer,
                        h = g.$maxLines * b * 1.4,
                        m = a.top + this.$borderSize;
                    m > e / 2 && !c && m + b + h > e
                        ? ((g.$maxPixelHeight = m - 2 * this.$borderSize),
                          (d.style.top = ""),
                          (d.style.bottom = e - m + "px"),
                          (k.isTopdown = !1))
                        : ((m += b),
                          (g.$maxPixelHeight = e - m - 0.2 * b),
                          (d.style.top = m + "px"),
                          (d.style.bottom = ""),
                          (k.isTopdown = !0));
                    d.style.display = "";
                    this.renderer.$textLayer.checkForSizeChanges();
                    a = a.left;
                    a + d.offsetWidth > f && (a = f - d.offsetWidth);
                    d.style.left = a + "px";
                    this._signal("show");
                    l = null;
                    k.isOpen = !0;
                }),
                (k.getTextLeftOffset = function () {
                    return (
                        this.$borderSize +
                        this.renderer.$padding +
                        this.$imageSize
                    );
                }),
                (k.$imageSize = 0),
                (k.$borderSize = 1),
                k
            );
        };
    }
);
ace.define("ace/autocomplete/util", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    q.parForEach = function (g, c, b) {
        var a = 0,
            d = g.length;
        0 === d && b();
        for (var e = 0; e < d; e++)
            c(g[e], function (c, e) {
                a++;
                a === d && b(c, e);
            });
    };
    var h = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;
    q.retrievePrecedingIdentifier = function (g, c, b) {
        b = b || h;
        var a = [];
        for (--c; 0 <= c && b.test(g[c]); c--) a.push(g[c]);
        return a.reverse().join("");
    };
    q.retrieveFollowingIdentifier = function (g, c, b) {
        b = b || h;
        for (var a = []; c < g.length && b.test(g[c]); c++) a.push(g[c]);
        return a;
    };
    q.getCompletionPrefix = function (g) {
        var c = g.getCursorPosition(),
            b = g.session.getLine(c.row),
            a;
        return (
            g.completers.forEach(
                function (d) {
                    d.identifierRegexps &&
                        d.identifierRegexps.forEach(
                            function (d) {
                                !a &&
                                    d &&
                                    (a = this.retrievePrecedingIdentifier(
                                        b,
                                        c.column,
                                        d
                                    ));
                            }.bind(this)
                        );
                }.bind(this)
            ),
            a || this.retrievePrecedingIdentifier(b, c.column)
        );
    };
});
ace.define(
    "ace/autocomplete",
    "require exports module ace/keyboard/hash_handler ace/autocomplete/popup ace/autocomplete/util ace/lib/event ace/lib/lang ace/lib/dom ace/snippets".split(
        " "
    ),
    function (n, q, t) {
        var h = n("./keyboard/hash_handler").HashHandler,
            g = n("./autocomplete/popup").AcePopup,
            c = n("./autocomplete/util");
        n("./lib/event");
        var b = n("./lib/lang"),
            a = n("./lib/dom"),
            d = n("./snippets").snippetManager,
            e = function () {
                this.autoInsert = !1;
                this.autoSelect = !0;
                this.exactMatch = !1;
                this.gatherCompletionsId = 0;
                this.keyboardHandler = new h();
                this.keyboardHandler.bindKeys(this.commands);
                this.blurListener = this.blurListener.bind(this);
                this.changeListener = this.changeListener.bind(this);
                this.mousedownListener = this.mousedownListener.bind(this);
                this.mousewheelListener = this.mousewheelListener.bind(this);
                this.changeTimer = b.delayedCall(
                    function () {
                        this.updateCompletions(!0);
                    }.bind(this)
                );
                this.tooltipTimer = b.delayedCall(
                    this.updateDocTooltip.bind(this),
                    50
                );
            };
        (function () {
            this.$init = function () {
                return (
                    (this.popup = new g(
                        document.body || document.documentElement
                    )),
                    this.popup.on(
                        "click",
                        function (a) {
                            this.insertMatch();
                            a.stop();
                        }.bind(this)
                    ),
                    (this.popup.focus = this.editor.focus.bind(this.editor)),
                    this.popup.on("show", this.tooltipTimer.bind(null, null)),
                    this.popup.on("select", this.tooltipTimer.bind(null, null)),
                    this.popup.on(
                        "changeHoverMarker",
                        this.tooltipTimer.bind(null, null)
                    ),
                    this.popup
                );
            };
            this.getPopup = function () {
                return this.popup || this.$init();
            };
            this.openPopup = function (a, b, c) {
                this.popup || this.$init();
                this.popup.autoSelect = this.autoSelect;
                this.popup.setData(this.completions.filtered);
                a.keyBinding.addKeyboardHandler(this.keyboardHandler);
                var d = a.renderer;
                this.popup.setRow(this.autoSelect ? 0 : -1);
                if (c) c && !b && this.detach();
                else {
                    this.popup.setTheme(a.getTheme());
                    this.popup.setFontSize(a.getFontSize());
                    b = d.layerConfig.lineHeight;
                    c = d.$cursorLayer.getPixelPosition(this.base, !0);
                    c.left -= this.popup.getTextLeftOffset();
                    var e = a.container.getBoundingClientRect();
                    c.top += e.top - d.layerConfig.offset;
                    c.left += e.left - a.renderer.scrollLeft;
                    c.left += d.gutterWidth;
                    this.popup.show(c, b);
                }
            };
            this.detach = function () {
                this.editor.keyBinding.removeKeyboardHandler(
                    this.keyboardHandler
                );
                this.editor.off("changeSelection", this.changeListener);
                this.editor.off("blur", this.blurListener);
                this.editor.off("mousedown", this.mousedownListener);
                this.editor.off("mousewheel", this.mousewheelListener);
                this.changeTimer.cancel();
                this.hideDocTooltip();
                this.gatherCompletionsId += 1;
                this.popup && this.popup.isOpen && this.popup.hide();
                this.base && this.base.detach();
                this.activated = !1;
                this.completions = this.base = null;
            };
            this.changeListener = function (a) {
                a = this.editor.selection.lead;
                (a.row != this.base.row || a.column < this.base.column) &&
                    this.detach();
                this.activated ? this.changeTimer.schedule() : this.detach();
            };
            this.blurListener = function (a) {
                var b = document.activeElement,
                    c = this.editor.textInput.getElement(),
                    d =
                        a.relatedTarget &&
                        this.tooltipNode &&
                        this.tooltipNode.contains(a.relatedTarget),
                    e = this.popup && this.popup.container;
                b != c &&
                    b.parentNode != e &&
                    !d &&
                    b != this.tooltipNode &&
                    a.relatedTarget != c &&
                    this.detach();
            };
            this.mousedownListener = function (a) {
                this.detach();
            };
            this.mousewheelListener = function (a) {
                this.detach();
            };
            this.goTo = function (a) {
                var b = this.popup.getRow(),
                    c = this.popup.session.getLength() - 1;
                switch (a) {
                    case "up":
                        b = 0 >= b ? c : b - 1;
                        break;
                    case "down":
                        b = b >= c ? -1 : b + 1;
                        break;
                    case "start":
                        b = 0;
                        break;
                    case "end":
                        b = c;
                }
                this.popup.setRow(b);
            };
            this.insertMatch = function (a, b) {
                a || (a = this.popup.getData(this.popup.getRow()));
                if (!a) return !1;
                if (a.completer && a.completer.insertMatch)
                    a.completer.insertMatch(this.editor, a);
                else {
                    if (this.completions.filterText) {
                        b = this.editor.selection.getAllRanges();
                        for (var c = 0, e; (e = b[c]); c++)
                            (e.start.column -= this.completions.filterText.length),
                                this.editor.session.remove(e);
                    }
                    a.snippet
                        ? d.insertSnippet(this.editor, a.snippet)
                        : this.editor.execCommand("insertstring", a.value || a);
                }
                this.detach();
            };
            this.commands = {
                Up: function (a) {
                    a.completer.goTo("up");
                },
                Down: function (a) {
                    a.completer.goTo("down");
                },
                "Ctrl-Up|Ctrl-Home": function (a) {
                    a.completer.goTo("start");
                },
                "Ctrl-Down|Ctrl-End": function (a) {
                    a.completer.goTo("end");
                },
                Esc: function (a) {
                    a.completer.detach();
                },
                Return: function (a) {
                    return a.completer.insertMatch();
                },
                "Shift-Return": function (a) {
                    a.completer.insertMatch(null, { deleteSuffix: !0 });
                },
                Tab: function (a) {
                    var b = a.completer.insertMatch();
                    if (b || a.tabstopManager) return b;
                    a.completer.goTo("down");
                },
                PageUp: function (a) {
                    a.completer.popup.gotoPageUp();
                },
                PageDown: function (a) {
                    a.completer.popup.gotoPageDown();
                },
            };
            this.gatherCompletions = function (a, b) {
                var d = a.getSession(),
                    e = a.getCursorPosition(),
                    f = c.getCompletionPrefix(a);
                this.base = d.doc.createAnchor(e.row, e.column - f.length);
                this.base.$insertRight = !0;
                var k = [],
                    g = a.completers.length;
                return (
                    a.completers.forEach(function (h, l) {
                        h.getCompletions(a, d, e, f, function (d, e) {
                            !d && e && (k = k.concat(e));
                            b(null, {
                                prefix: c.getCompletionPrefix(a),
                                matches: k,
                                finished: 0 === --g,
                            });
                        });
                    }),
                    !0
                );
            };
            this.showPopup = function (a) {
                this.editor && this.detach();
                this.activated = !0;
                this.editor = a;
                a.completer != this &&
                    (a.completer && a.completer.detach(), (a.completer = this));
                a.on("changeSelection", this.changeListener);
                a.on("blur", this.blurListener);
                a.on("mousedown", this.mousedownListener);
                a.on("mousewheel", this.mousewheelListener);
                this.updateCompletions();
            };
            this.updateCompletions = function (a) {
                if (a && this.base && this.completions) {
                    var b = this.editor.getCursorPosition(),
                        b = this.editor.session.getTextRange({
                            start: this.base,
                            end: b,
                        });
                    if (b != this.completions.filterText) {
                        this.completions.setFilter(b);
                        if (
                            !this.completions.filtered.length ||
                            (1 == this.completions.filtered.length &&
                                this.completions.filtered[0].value == b &&
                                !this.completions.filtered[0].snippet)
                        )
                            return this.detach();
                        this.openPopup(this.editor, b, a);
                    }
                } else {
                    var c = this.gatherCompletionsId;
                    this.gatherCompletions(
                        this.editor,
                        function (b, d) {
                            b = function () {
                                if (d.finished) return this.detach();
                            }.bind(this);
                            var e = d.prefix,
                                f = d && d.matches;
                            if (!f || !f.length) return b();
                            if (
                                0 === e.indexOf(d.prefix) &&
                                c == this.gatherCompletionsId
                            ) {
                                this.completions = new m(f);
                                this.exactMatch &&
                                    (this.completions.exactMatch = !0);
                                this.completions.setFilter(e);
                                f = this.completions.filtered;
                                if (
                                    !f.length ||
                                    (1 == f.length &&
                                        f[0].value == e &&
                                        !f[0].snippet)
                                )
                                    return b();
                                if (
                                    this.autoInsert &&
                                    1 == f.length &&
                                    d.finished
                                )
                                    return this.insertMatch(f[0]);
                                this.openPopup(this.editor, e, a);
                            }
                        }.bind(this)
                    );
                }
            };
            this.cancelContextMenu = function () {
                this.editor.$mouseHandler.cancelContextMenu();
            };
            this.updateDocTooltip = function () {
                var a = this.popup,
                    b = a.data,
                    c = b && (b[a.getHoveredRow()] || b[a.getRow()]),
                    d = null;
                if (!c || !this.editor || !this.popup.isOpen)
                    return this.hideDocTooltip();
                this.editor.completers.some(function (a) {
                    return a.getDocTooltip && (d = a.getDocTooltip(c)), d;
                });
                d || (d = c);
                "string" == typeof d && (d = { docText: d });
                if (!d || (!d.docHTML && !d.docText))
                    return this.hideDocTooltip();
                this.showDocTooltip(d);
            };
            this.showDocTooltip = function (b) {
                this.tooltipNode ||
                    ((this.tooltipNode = a.createElement("div")),
                    (this.tooltipNode.className =
                        "ace_tooltip ace_doc-tooltip"),
                    (this.tooltipNode.style.margin = 0),
                    (this.tooltipNode.style.pointerEvents = "auto"),
                    (this.tooltipNode.tabIndex = -1),
                    (this.tooltipNode.onblur = this.blurListener.bind(this)),
                    (this.tooltipNode.onclick = this.onTooltipClick.bind(
                        this
                    )));
                var c = this.tooltipNode;
                b.docHTML
                    ? (c.innerHTML = b.docHTML)
                    : b.docText && (c.textContent = b.docText);
                c.parentNode || document.body.appendChild(c);
                b = this.popup;
                var d = b.container.getBoundingClientRect();
                c.style.top = b.container.style.top;
                c.style.bottom = b.container.style.bottom;
                320 > window.innerWidth - d.right
                    ? ((c.style.right = window.innerWidth - d.left + "px"),
                      (c.style.left = ""))
                    : ((c.style.left = d.right + 1 + "px"),
                      (c.style.right = ""));
                c.style.display = "block";
            };
            this.hideDocTooltip = function () {
                this.tooltipTimer.cancel();
                if (this.tooltipNode) {
                    var a = this.tooltipNode;
                    !this.editor.isFocused() &&
                        document.activeElement == a &&
                        this.editor.focus();
                    this.tooltipNode = null;
                    a.parentNode && a.parentNode.removeChild(a);
                }
            };
            this.onTooltipClick = function (a) {
                for (a = a.target; a && a != this.tooltipNode; ) {
                    if ("A" == a.nodeName && a.href) {
                        a.rel = "noreferrer";
                        a.target = "_blank";
                        break;
                    }
                    a = a.parentNode;
                }
            };
        }.call(e.prototype));
        e.startCommand = {
            name: "startAutocomplete",
            exec: function (a) {
                a.completer || (a.completer = new e());
                a.completer.autoInsert = !1;
                a.completer.autoSelect = !0;
                a.completer.showPopup(a);
                a.completer.cancelContextMenu();
            },
            bindKey: "Ctrl-Space|Ctrl-Shift-Space|Alt-Space",
        };
        var m = function (a, b) {
            this.filtered = this.all = a;
            this.filterText = b || "";
            this.exactMatch = !1;
        };
        (function () {
            this.setFilter = function (a) {
                var b =
                    a.length > this.filterText &&
                    0 === a.lastIndexOf(this.filterText, 0)
                        ? this.filtered
                        : this.all;
                this.filterText = a;
                b = this.filterCompletions(b, this.filterText);
                b = b.sort(function (a, b) {
                    return b.exactMatch - a.exactMatch || b.score - a.score;
                });
                var c = null;
                this.filtered = b = b.filter(function (a) {
                    a = a.snippet || a.caption || a.value;
                    return a === c ? !1 : ((c = a), !0);
                });
            };
            this.filterCompletions = function (a, b) {
                var c = [],
                    d = b.toUpperCase(),
                    e = b.toLowerCase(),
                    f = 0,
                    g;
                a: for (; (g = a[f]); f++) {
                    var h = g.value || g.caption || g.snippet;
                    if (h) {
                        var k = -1,
                            m = 0,
                            n = 0;
                        if (this.exactMatch) {
                            if (b !== h.substr(0, b.length)) continue a;
                        } else
                            for (var q = 0; q < b.length; q++) {
                                var t = h.indexOf(e[q], k + 1);
                                var C = h.indexOf(d[q], k + 1);
                                t = 0 <= t ? (0 > C || t < C ? t : C) : C;
                                if (0 > t) continue a;
                                C = t - k - 1;
                                0 < C && (-1 === k && (n += 10), (n += C));
                                m |= 1 << t;
                                k = t;
                            }
                        g.matchMask = m;
                        g.exactMatch = n ? 0 : 1;
                        g.score = (g.score || 0) - n;
                        c.push(g);
                    }
                }
                return c;
            };
        }.call(m.prototype));
        q.Autocomplete = e;
        q.FilteredList = m;
    }
);
ace.define(
    "ace/autocomplete/text_completer",
    ["require", "exports", "module", "ace/range"],
    function (n, q, t) {
        function h(b, a) {
            var d =
                    b
                        .getTextRange(g.fromPoints({ row: 0, column: 0 }, a))
                        .split(c).length - 1,
                e = b.getValue().split(c),
                h = Object.create(null),
                f = e[d];
            return (
                e.forEach(function (a, b) {
                    a &&
                        a !== f &&
                        ((b = e.length - Math.abs(d - b)),
                        h[a] ? (h[a] = Math.max(b, h[a])) : (h[a] = b));
                }),
                h
            );
        }
        var g = n("../range").Range,
            c = /[^a-zA-Z_0-9\$\-\u00C0-\u1FFF\u2C00-\uD7FF\w]+/;
        q.getCompletions = function (b, a, c, e, g) {
            var d = h(a, c, e);
            b = Object.keys(d);
            g(
                null,
                b.map(function (a) {
                    return { caption: a, value: a, score: d[a], meta: "local" };
                })
            );
        };
    }
);
ace.define(
    "ace/ext/language_tools",
    "require exports module ace/snippets ace/autocomplete ace/config ace/lib/lang ace/autocomplete/util ace/autocomplete/text_completer ace/editor ace/config".split(
        " "
    ),
    function (n, q, t) {
        var h = n("../snippets").snippetManager,
            g = n("../autocomplete").Autocomplete,
            c = n("../config"),
            b = n("../lib/lang"),
            a = n("../autocomplete/util");
        t = n("../autocomplete/text_completer");
        var d = {
                getCompletions: function (a, b, c, d, e) {
                    if (b.$mode.completer)
                        return b.$mode.completer.getCompletions(a, b, c, d, e);
                    a = a.session.getState(c.row);
                    b = b.$mode.getCompletions(a, b, c, d);
                    e(null, b);
                },
            },
            e = {
                getCompletions: function (a, b, c, d, e) {
                    var f = h.snippetMap,
                        g = [];
                    h.getActiveScopes(a).forEach(function (a) {
                        a = f[a] || [];
                        for (var b = a.length; b--; ) {
                            var c = a[b],
                                d = c.name || c.tabTrigger;
                            d &&
                                g.push({
                                    caption: d,
                                    snippet: c.content,
                                    meta:
                                        c.tabTrigger && !c.name
                                            ? c.tabTrigger + "\u21e5 "
                                            : "snippet",
                                    type: "snippet",
                                });
                        }
                    }, this);
                    e(null, g);
                },
                getDocTooltip: function (a) {
                    "snippet" == a.type &&
                        !a.docHTML &&
                        (a.docHTML = [
                            "<b>",
                            b.escapeHTML(a.caption),
                            "</b><hr></hr>",
                            b.escapeHTML(a.snippet),
                        ].join(""));
                },
            },
            m = [e, t, d];
        q.setCompleters = function (a) {
            m.length = 0;
            a && m.push.apply(m, a);
        };
        q.addCompleter = function (a) {
            m.push(a);
        };
        q.textCompleter = t;
        q.keyWordCompleter = d;
        q.snippetCompleter = e;
        var f = {
                name: "expandSnippet",
                exec: function (a) {
                    return h.expandWithTab(a);
                },
                bindKey: "Tab",
            },
            k = function (a, b) {
                l(b.session.$mode);
            },
            l = function (a) {
                var b = a.$id;
                h.files || (h.files = {});
                v(b);
                a.modes && a.modes.forEach(l);
            },
            v = function (a) {
                if (a && !h.files[a]) {
                    var b = a.replace("mode", "snippets");
                    h.files[a] = {};
                    c.loadModule(b, function (b) {
                        b &&
                            ((h.files[a] = b),
                            !b.snippets &&
                                b.snippetText &&
                                (b.snippets = h.parseSnippetFile(
                                    b.snippetText
                                )),
                            h.register(b.snippets || [], b.scope),
                            b.includeScopes &&
                                ((h.snippetMap[b.scope].includeScopes =
                                    b.includeScopes),
                                b.includeScopes.forEach(function (a) {
                                    v("ace/mode/" + a);
                                })));
                    });
                }
            },
            u = function (b) {
                var c = b.editor,
                    d = c.completer && c.completer.activated;
                "backspace" === b.command.name
                    ? d && !a.getCompletionPrefix(c) && c.completer.detach()
                    : "insertstring" === b.command.name &&
                      a.getCompletionPrefix(c) &&
                      !d &&
                      (c.completer || (c.completer = new g()),
                      (c.completer.autoInsert = !1),
                      c.completer.showPopup(c));
            };
        q = n("../editor").Editor;
        n("../config").defineOptions(q.prototype, "editor", {
            enableBasicAutocompletion: {
                set: function (a) {
                    a
                        ? (this.completers ||
                              (this.completers = Array.isArray(a) ? a : m),
                          this.commands.addCommand(g.startCommand))
                        : this.commands.removeCommand(g.startCommand);
                },
                value: !1,
            },
            enableLiveAutocompletion: {
                set: function (a) {
                    a
                        ? (this.completers ||
                              (this.completers = Array.isArray(a) ? a : m),
                          this.commands.on("afterExec", u))
                        : this.commands.removeListener("afterExec", u);
                },
                value: !1,
            },
            enableSnippets: {
                set: function (a) {
                    a
                        ? (this.commands.addCommand(f),
                          this.on("changeMode", k),
                          k(null, this))
                        : (this.commands.removeCommand(f),
                          this.off("changeMode", k));
                },
                value: !1,
            },
        });
    }
);
(function () {
    ace.require(["ace/ext/language_tools"], function () {});
})();
ace.define("ace/snippets/bas", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    q.snippetText = "";
    q.scope = "bas";
});
ace.define("ace/snippets/text", ["require", "exports", "module"], function (
    n,
    q,
    t
) {
    q.snippetText = void 0;
    q.scope = "text";
});
