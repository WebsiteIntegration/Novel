(function () {
    var h = {},
        mt = {},
        c = {
            id: "169609146ffe5972484b0957bd1b46d6",
            dm: ["xbiquge.la"],
            js: "tongji.baidu.com/hm-web/js/",
            etrk: [],
            cetrk: [],
            cptrk: [],
            icon: '',
            ctrk: [],
            nv: -1,
            vdur: 1800000,
            age: 31536000000,
            rec: 0,
            rp: [],
            trust: 0,
            vcard: 0,
            qiao: 0,
            lxb: 0,
            kbtrk: 0,
            pt: 0,
            spa: 0,
            oc: 0,
            aet: '',
            hca: 'B8EC0C48D9F258A1',
            conv: 0,
            med: 0,
            cvcc: '',
            cvcf: [],
            apps: ''
        };
    var s = void 0,
        v = !0,
        w = null,
        x = !1;
    mt.cookie = {};
    mt.cookie.set = function (b, d, a) {
        var k;
        a.Q && (k = new Date, k.setTime(k.getTime() + a.Q));
        document.cookie = b + "=" + d + (a.domain ? "; domain=" + a.domain : "") + (a.path ? "; path=" + a.path : "") + (k ? "; expires=" + k.toGMTString() : "") + (a.Lc ? "; secure" : "")
    };
    mt.cookie.get = function (b) {
        return (b = RegExp("(^| )" + b + "=([^;]*)(;|$)").exec(document.cookie)) ? b[2] : w
    };
    mt.cookie.jc = function (b, d) {
        try {
            var a = "Hm_ck_" + +new Date;
            mt.cookie.set(a, "is-cookie-enabled", {
                domain: b,
                path: d,
                Q: s
            });
            var k = "is-cookie-enabled" === mt.cookie.get(a) ? "1" : "0";
            mt.cookie.set(a, "", {
                domain: b,
                path: d,
                Q: -1
            });
            return k
        } catch (e) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.d = function (b, d) {
        return "[object " + d + "]" === {}.toString.call(b)
    };
    mt.lang.$a = function (b) {
        return mt.lang.d(b, "Number") && isFinite(b)
    };
    mt.lang.B = function (b) {
        return mt.lang.d(b, "String")
    };
    mt.lang.isArray = function (b) {
        return mt.lang.d(b, "Array")
    };
    mt.lang.h = function (b) {
        return b.replace ? b.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : b
    };
    mt.lang.trim = function (b) {
        return b.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.I = function (b, d) {
        var a = x;
        if (b == w || !mt.lang.d(b, "Array") || d === s) return a;
        if (Array.prototype.indexOf) a = -1 !== b.indexOf(d);
        else
            for (var k = 0; k < b.length; k++)
                if (b[k] === d) {
                    a = v;
                    break
                } return a
    };
    mt.lang.sa = function (b, d) {
        return isNaN(parseFloat(b)) ? 0 : parseFloat(parseFloat(b).toFixed(d))
    };
    mt.url = {};
    mt.url.m = function (b, d) {
        var a = b.match(RegExp("(^|&|\\?|#)(" + d + ")=([^&#]*)(&|$|#)", ""));
        return a ? a[3] : w
    };
    mt.url.Gc = function (b) {
        return (b = b.match(/^(https?:)\/\//)) ? b[1] : w
    };
    mt.url.Nb = function (b) {
        return (b = b.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? b[2].replace(/.*@/, "") : w
    };
    mt.url.O = function (b) {
        return (b = mt.url.Nb(b)) ? b.replace(/:\d+$/, "") : b
    };
    mt.url.va = function (b) {
        return (b = b.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? b[2].replace(/[\?#].*/, "").replace(/^$/, "/") : w
    };
    (function () {
        var b = mt.lang,
            d = mt.url;
        mt.g = {};
        mt.g.Ta = function (a) {
            return document.getElementById(a)
        };
        mt.g.ta = function (a) {
            if (!a) return w;
            try {
                a = String(a);
                if (0 === a.indexOf("!HMCQ!")) return a;
                if (0 === a.indexOf("!HMCC!")) return document.querySelector(a.substring(6, a.length));
                for (var b = a.split(">"), e = document.body, d = b.length - 1; 0 <= d; d--)
                    if (-1 < b[d].indexOf("#")) {
                        var f = b[d].split("#")[1];
                        (e = document.getElementById(f)) || (e = document.getElementById(decodeURIComponent(f)));
                        b = b.splice(d + 1, b.length - (d + 1));
                        break
                    } for (a =
                    0; e && a < b.length;) {
                    var n = String(b[a]).toLowerCase();
                    if (!("html" === n || "body" === n)) {
                        var d = 0,
                            q = b[a].match(/\[(\d+)\]/i),
                            f = [];
                        if (q) d = q[1] - 1, n = n.split("[")[0];
                        else if (1 !== e.childNodes.length) {
                            for (var r = 0, u = 0, g = e.childNodes.length; u < g; u++) {
                                var l = e.childNodes[u];
                                1 === l.nodeType && l.nodeName.toLowerCase() === n && r++;
                                if (1 < r) return w
                            }
                            if (1 !== r) return w
                        }
                        for (r = 0; r < e.childNodes.length; r++) 1 === e.childNodes[r].nodeType && e.childNodes[r].nodeName.toLowerCase() === n && f.push(e.childNodes[r]);
                        if (!f[d]) return w;
                        e = f[d]
                    }
                    a++
                }
                return e
            } catch (m) {
                return w
            }
        };
        mt.g.va = function (a, b) {
            var e = [],
                d = [];
            if (!a) return d;
            for (; a.parentNode != w;) {
                for (var f = 0, n = 0, q = a.parentNode.childNodes.length, r = 0; r < q; r++) {
                    var u = a.parentNode.childNodes[r];
                    if (u.nodeName === a.nodeName && (f++, u === a && (n = f), 0 < n && 1 < f)) break
                }
                if ((q = "" !== a.id) && b) {
                    e.unshift("#" + encodeURIComponent(a.id));
                    break
                } else q && (q = "#" + encodeURIComponent(a.id), q = 0 < e.length ? q + ">" + e.join(">") : q, d.push(q)), e.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < f ? "[" + n + "]" : ""));
                a = a.parentNode
            }
            d.push(e.join(">"));
            return d
        };
        mt.g.wa = function (a) {
            return (a = mt.g.va(a, v)) && a.length ? String(a[0]) : ""
        };
        mt.g.Rb = function (a) {
            return mt.g.va(a, x)
        };
        mt.g.Gb = function (a) {
            var b;
            for (b = "A";
                (a = a.parentNode) && 1 == a.nodeType;)
                if (a.tagName == b) return a;
            return w
        };
        mt.g.Jb = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.g.Pb = function (a) {
            var b = {
                top: 0,
                left: 0
            };
            if (!a) return b;
            var e = mt.g.Jb(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (b = a.getBoundingClientRect());
            return {
                top: b.top + (window.pageYOffset || e.scrollTop) -
                    (e.clientTop || 0),
                left: b.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }
        };
        mt.g.getAttribute = function (a, b) {
            var e = a.getAttribute && a.getAttribute(b) || w;
            if (!e && a.attributes && a.attributes.length)
                for (var d = a.attributes, f = d.length, n = 0; n < f; n++) d[n].nodeName === b && (e = d[n].nodeValue);
            return e
        };
        mt.g.T = function (a) {
            var b = "document";
            a.tagName !== s && (b = a.tagName);
            return b.toLowerCase()
        };
        mt.g.Vb = function (a) {
            var d = "";
            a.textContent ? d = b.trim(a.textContent) : a.innerText && (d = b.trim(a.innerText));
            d && (d = d.replace(/\s+/g,
                " ").substring(0, 255));
            return d
        };
        mt.g.S = function (a, k) {
            var e;
            b.B(a) && 0 === String(a).indexOf("!HMCQ!") ? (e = String(a), e = d.m(document.location.href, e.substring(6, e.length))) : b.B(a) || (e = mt.g.T(a), "input" === e && k && ("button" === a.type || "submit" === a.type) ? e = b.trim(a.value) || "" : "input" === e && !k && "password" !== a.type ? e = b.trim(a.value) || "" : "img" === e ? (e = mt.g.getAttribute, e = e(a, "alt") || e(a, "title") || e(a, "src")) : e = "body" === e || "html" === e ? ["(hm-default-content-for-", e, ")"].join("") : mt.g.Vb(a));
            return String(e || "").substring(0,
                255)
        };
        (function () {
            (mt.g.hb = function () {
                function a() {
                    if (!a.ea) {
                        a.ea = v;
                        for (var b = 0, d = p.length; b < d; b++) p[b]()
                    }
                }

                function b() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (d) {
                        setTimeout(b, 1);
                        return
                    }
                    a()
                }
                var d = x,
                    p = [],
                    f;
                document.addEventListener ? f = function () {
                    document.removeEventListener("DOMContentLoaded", f, x);
                    a()
                } : document.attachEvent && (f = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", f), a())
                });
                (function () {
                    if (!d)
                        if (d = v, "complete" === document.readyState) a.ea = v;
                        else if (document.addEventListener) document.addEventListener("DOMContentLoaded", f, x), window.addEventListener("load", a, x);
                    else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", f);
                        window.attachEvent("onload", a);
                        var n = x;
                        try {
                            n = window.frameElement == w
                        } catch (q) {}
                        document.documentElement.doScroll && n && b()
                    }
                })();
                return function (b) {
                    a.ea ? b() : p.push(b)
                }
            }()).ea = x
        })();
        return mt.g
    })();
    mt.event = {};
    mt.event.e = function (b, d, a) {
        b.attachEvent ? b.attachEvent("on" + d, function (d) {
            a.call(b, d)
        }) : b.addEventListener && b.addEventListener(d, a, x)
    };
    mt.event.preventDefault = function (b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = x
    };
    (function () {
        var b = mt.event;
        mt.f = {};
        mt.f.Aa = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.f.Ob = function () {
            if (document.documentMode) return document.documentMode;
            var b = /msie (\d+\.\d+)/i.exec(navigator.userAgent);
            return b ? +b[1] || 0 : 0
        };
        mt.f.Ic = function () {
            try {
                return !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && "undefined" !== typeof document.body.style.webkitFilter && !window.chrome
            } catch (b) {
                return x
            }
        };
        mt.f.cookieEnabled = navigator.cookieEnabled;
        mt.f.javaEnabled = navigator.javaEnabled();
        mt.f.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.f.mc = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.f.colorDepth = window.screen.colorDepth || 0;
        mt.f.Tb = function () {
            var b;
            b = b || document;
            return parseInt(window.pageYOffset || b.documentElement.scrollTop || b.body && b.body.scrollTop || 0, 10)
        };
        mt.f.Xa = function () {
            var b = document;
            return parseInt(window.innerHeight || b.documentElement.clientHeight || b.body && b.body.clientHeight || 0, 10)
        };
        mt.f.H =
            function () {
                return mt.f.Tb() + mt.f.Xa()
            };
        mt.f.pb = 0;
        mt.f.Xb = function () {
            var b = document;
            return parseInt(window.innerWidth || b.documentElement.clientWidth || b.body.offsetWidth || 0, 10)
        };
        mt.f.orientation = 0;
        (function () {
            function d() {
                var b = 0;
                window.orientation !== s && (b = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== s) && (b = screen.orientation.angle);
                mt.f.orientation = b;
                mt.f.pb = mt.f.Xb()
            }
            d();
            b.e(window, "orientationchange", d)
        })();
        return mt.f
    })();
    mt.z = {};
    mt.z.parse = function (b) {
        return (new Function("return (" + b + ")"))()
    };
    mt.z.stringify = function () {
        function b(b) {
            /["\\\x00-\x1f]/.test(b) && (b = b.replace(/["\\\x00-\x1f]/g, function (b) {
                var d = a[b];
                if (d) return d;
                d = b.charCodeAt();
                return "\\u00" + Math.floor(d / 16).toString(16) + (d % 16).toString(16)
            }));
            return '"' + b + '"'
        }

        function d(b) {
            return 10 > b ? "0" + b : b
        }
        var a = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        return function (a) {
            switch (typeof a) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "string":
                    return b(a);
                case "boolean":
                    return String(a);
                default:
                    if (a === w) return "null";
                    if (a instanceof Array) {
                        var e = ["["],
                            p = a.length,
                            f, n, q;
                        for (n = 0; n < p; n++) switch (q = a[n], typeof q) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                f && e.push(","), e.push(mt.z.stringify(q)), f = 1
                        }
                        e.push("]");
                        return e.join("")
                    }
                    if (a instanceof Date) return '"' + a.getFullYear() + "-" + d(a.getMonth() + 1) + "-" + d(a.getDate()) + "T" + d(a.getHours()) + ":" + d(a.getMinutes()) + ":" + d(a.getSeconds()) + '"';
                    f = ["{"];
                    n = mt.z.stringify;
                    for (p in a)
                        if (Object.prototype.hasOwnProperty.call(a, p)) switch (q =
                            a[p], typeof q) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                e && f.push(","), e = 1, f.push(n(p) + ":" + n(q))
                        }
                    f.push("}");
                    return f.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.la = function () {
        if (!mt.localStorage.j) try {
            mt.localStorage.j = document.createElement("input"), mt.localStorage.j.type = "hidden", mt.localStorage.j.style.display = "none", mt.localStorage.j.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.j)
        } catch (b) {
            return x
        }
        return v
    };
    mt.localStorage.set = function (b, d, a) {
        var k = new Date;
        k.setTime(k.getTime() + a || 31536E6);
        try {
            window.localStorage ? (d = k.getTime() + "|" + d, window.localStorage.setItem(b, d)) : mt.localStorage.la() && (mt.localStorage.j.expires = k.toUTCString(), mt.localStorage.j.load(document.location.hostname), mt.localStorage.j.setAttribute(b, d), mt.localStorage.j.save(document.location.hostname))
        } catch (e) {}
    };
    mt.localStorage.get = function (b) {
        if (window.localStorage) {
            if (b = window.localStorage.getItem(b)) {
                var d = b.indexOf("|"),
                    a = b.substring(0, d) - 0;
                if (a && a > (new Date).getTime()) return b.substring(d + 1)
            }
        } else if (mt.localStorage.la()) try {
            return mt.localStorage.j.load(document.location.hostname), mt.localStorage.j.getAttribute(b)
        } catch (k) {}
        return w
    };
    mt.localStorage.remove = function (b) {
        if (window.localStorage) window.localStorage.removeItem(b);
        else if (mt.localStorage.la()) try {
            mt.localStorage.j.load(document.location.hostname), mt.localStorage.j.removeAttribute(b), mt.localStorage.j.save(document.location.hostname)
        } catch (d) {}
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (b, d) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(b, d)
        } catch (a) {}
    };
    mt.sessionStorage.get = function (b) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(b) : w
        } catch (d) {
            return w
        }
    };
    mt.sessionStorage.remove = function (b) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(b)
        } catch (d) {}
    };
    mt.mb = {};
    mt.mb.log = function (b, d) {
        var a = new Image,
            k = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[k] = a;
        a.onload = function () {
            a.onload = w;
            a = window[k] = w;
            d && d(b)
        };
        a.src = b
    };
    mt.Ia = {};
    mt.Ia.Wb = function () {
        var b = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var d = navigator.plugins["Shockwave Flash"];
            d && d.description && (b = d.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b = d.GetVariable("$version")) && (b = b.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (a) {}
        return b
    };
    mt.Ia.Fc = function (b, d, a, k, e) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + b + '" width="' + a + '" height="' + k + '"><param name="movie" value="' + d + '" /><param name="flashvars" value="' + (e || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + b + '" width="' + a + '" height="' + k + '" src="' + d + '" flashvars="' + (e || "") + '" allowscriptaccess="always" /></object>'
    };
    h.F = {
        Hc: "http://tongji.baidu.com/hm-web/welcome/ico",
        gb: "hm.baidu.com/hm.gif",
        wb: /^(tongji|hmcdn).baidu.com$/,
        ob: "tongji.baidu.com",
        ac: "hmmd",
        bc: "hmpl",
        zc: "utm_medium",
        $b: "hmkw",
        Bc: "utm_term",
        Yb: "hmci",
        yc: "utm_content",
        dc: "hmsr",
        Ac: "utm_source",
        Zb: "hmcu",
        xc: "utm_campaign",
        P: 0,
        L: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        Ca: "https:",
        Jc: 0,
        Dc: 6E5,
        Kc: 6E5,
        nc: 5E3,
        Ec: 5,
        Sa: 1024,
        Cc: 1,
        Ea: 2147483647,
        nb: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
        U: v,
        Pa: ["a", "input", "button"],
        Ma: {
            id: "data-hm-id",
            $: "data-hm-class",
            Z: "data-hm-xpath",
            content: "data-hm-content",
            ha: "data-hm-tag",
            link: "data-hm-link"
        },
        Oa: "data-hm-enabled",
        Na: "data-hm-disabled",
        kc: "https://hmcdn.baidu.com/static/tongji/plugins/",
        fb: ["UrlChangeTracker", "OcpcCbHm"]
    };
    (function () {
        var b = {
            G: {},
            e: function (b, a) {
                this.G[b] = this.G[b] || [];
                this.G[b].push(a)
            },
            M: function (b, a) {
                this.G[b] = this.G[b] || [];
                for (var k = this.G[b].length, e = 0; e < k; e++) this.G[b][e](a)
            }
        };
        return h.A = b
    })();
    (function () {
        var b = mt.lang,
            d = /^https?:\/\//,
            a = {
                Ib: function (b) {
                    var a;
                    try {
                        a = JSON.parse(decodeURIComponent(b[0]))
                    } catch (d) {}
                    return a
                },
                ab: function (b, a) {
                    var p = h.c && h.c.b && h.c.b.u || document.location.href;
                    d.test(b) || (p = p.replace(d, ""));
                    b = b.replace(/\/$/, "");
                    p = p.replace(/\/$/, "");
                    a && (p = p.replace(/^(https?:\/\/)?www\./, "$1"));
                    return RegExp("^" + b.replace(/[?.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$").test(p)
                },
                ba: function (d, e) {
                    var p = a.Ib(d);
                    if (!b.d(p, "Undefined")) {
                        if (b.d(p, "Array")) {
                            for (var f = 0; f < p.length; f++)
                                if (a.ab(p[f],
                                        e)) return v;
                            return x
                        }
                        if (b.d(p, "Object")) {
                            var f = [],
                                n;
                            for (n in p) p.hasOwnProperty(n) && a.ab(n, e) && (f = f.concat(p[n]));
                            return f
                        }
                    }
                }
            };
        return h.pa = a
    })();
    (function () {
        function b(b, k) {
            var e = document.createElement("script");
            e.charset = "utf-8";
            d.d(k, "Function") && (e.readyState ? e.onreadystatechange = function () {
                if ("loaded" === e.readyState || "complete" === e.readyState) e.onreadystatechange = w, k()
            } : e.onload = function () {
                k()
            });
            e.src = b;
            var p = document.getElementsByTagName("script")[0];
            p.parentNode.insertBefore(e, p)
        }
        var d = mt.lang;
        return h.load = b
    })();
    (function () {
        var b = mt.cookie,
            d = mt.localStorage,
            a = mt.sessionStorage,
            k = {
                getData: function (e) {
                    try {
                        return b.get(e) || a.get(e) || d.get(e)
                    } catch (p) {}
                },
                setData: function (e, p, f) {
                    try {
                        b.set(e, p, {
                            domain: k.R(),
                            path: k.ca(),
                            Q: f
                        }), f ? d.set(e, p, f) : a.set(e, p)
                    } catch (n) {}
                },
                removeData: function (e) {
                    try {
                        b.set(e, "", {
                            domain: k.R(),
                            path: k.ca(),
                            Q: -1
                        }), a.remove(e), d.remove(e)
                    } catch (p) {}
                },
                V: function (b, a) {
                    b = "." + b.replace(/:\d+/, "");
                    a = "." + a.replace(/:\d+/, "");
                    var d = b.indexOf(a);
                    return -1 < d && d + a.length === b.length
                },
                fa: function (b, a) {
                    b = b.replace(/^https?:\/\//,
                        "");
                    return 0 === b.indexOf(a)
                },
                R: function () {
                    for (var b = document.location.hostname, a = 0, d = c.dm.length; a < d; a++)
                        if (k.V(b, c.dm[a])) return c.dm[a].replace(/(:\d+)?[/?#].*/, "");
                    return b
                },
                ca: function () {
                    for (var b = 0, a = c.dm.length; b < a; b++) {
                        var d = c.dm[b];
                        if (-1 < d.indexOf("/") && k.fa(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/, "$1") + "/"
                    }
                    return "/"
                }
            };
        return h.oa = k
    })();
    (function () {
        var b = mt.lang,
            d = mt.z,
            a = h.oa,
            k = {
                pageview: {},
                session: {},
                autoEventTracking: {},
                customEvent: {},
                user: {}
            },
            e = {
                user: 1,
                session: 2,
                pageview: 3,
                autoEventTracking: 3,
                customEvent: 3,
                others: 3
            },
            p = ["session", "user"],
            f = "Hm_up_" + c.id,
            n = {
                init: function () {
                    n.gc()
                },
                gc: function () {
                    try {
                        var e = d.parse(decodeURIComponent(a.getData(f)));
                        b.d(e, "Object") && (k.user = e)
                    } catch (r) {}
                },
                w: function (b) {
                    var a = {};
                    k[b] !== s && (a = k[b]);
                    b = this.Wa();
                    for (var d in a) a.hasOwnProperty(d) && (b[d] = a[d]);
                    return b
                },
                Wa: function () {
                    for (var b = {}, a, d = p.length -
                            1; 0 <= d; d--) {
                        a = k[p[d]];
                        for (var g in a) a.hasOwnProperty(g) && (b[g] = a[g])
                    }
                    return b
                },
                setProperty: function (a, e, f) {
                    var g = k[a];
                    if (b.d(g, "Object") && b.d(e, "Object")) {
                        for (var l in e)
                            if (e.hasOwnProperty(l)) {
                                var m = b.h(String(l));
                                if (f || !/^_/.test(m) && !/_$/.test(m) || /^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(m)) {
                                    var t = e[l];
                                    if (t == w) delete g[m];
                                    else {
                                        if (b.d(t, "Object") || b.d(t, "Array")) t = d.stringify(t);
                                        t = b.h(String(t));
                                        n.ic(a, m, t) && (g[m] = {
                                            value: t,
                                            scope: n.Va(a)
                                        })
                                    }
                                }
                            }
                        "user" === a && n.Ga()
                    }
                },
                o: function (a) {
                    a !== s && ("userId" ===
                        a && b.d(k.user, "Object") ? (delete k.user.uid_, n.Ga()) : "user" === a && b.d(k.user, "Object") ? (a = k.user.uid_, k.user = a === s ? {} : {
                            uid_: a
                        }, n.Ga()) : k[a] !== s && (k[a] = {}))
                },
                Ga: function () {
                    try {
                        a.setData(f, encodeURIComponent(d.stringify(k.user)), c.age)
                    } catch (b) {}
                },
                ic: function (b, a, d) {
                    var g = v,
                        l = k[b];
                    if (256 < encodeURIComponent(String(a)).length || 256 < encodeURIComponent(String(d)).length) g = x;
                    else {
                        var m = l[a];
                        l[a] = {
                            value: d,
                            scope: n.Va(b)
                        };
                        b = n.K(n.w(b));
                        2048 < encodeURIComponent(b).length && (m !== s ? l[a] = m : delete l[a], g = x)
                    }
                    return g
                },
                K: function (b) {
                    var a = [],
                        d, g;
                    for (g in b) b.hasOwnProperty(g) && (d = [g, b[g].value], (1 === b[g].scope || 2 === b[g].scope) && d.push(b[g].scope), a.push(d.join("*")));
                    return a.join("!")
                },
                Va: function (b) {
                    b = e[b];
                    return b !== s ? b : e.others
                }
            };
        return h.N = n
    })();
    (function () {
        var b = mt.g,
            d = mt.lang,
            a = h.A,
            k = h.pa,
            e = h.N,
            p = e.K;
        if (d.isArray(c.cptrk) && 0 < c.cptrk.length) {
            var f = {
                eb: {},
                ia: {},
                init: function () {
                    for (var b, a = k.ba(c.cptrk) || [], e = 0; e < a.length; e++)
                        if (b = a[e], b.a !== s && d.d(b.a, "Object")) {
                            b = b.a;
                            for (var p in b) b.hasOwnProperty(p) && (f.ia[p] = String(b[p]))
                        }
                },
                cb: function () {
                    var a, d, e;
                    for (e in f.ia)
                        if (f.ia.hasOwnProperty(e) && f.eb[e] === s && (a = f.ia[e], a = b.ta(a))) d = d === s ? {} : d, d[e] = b.S(a, x), f.eb[e] = v;
                    return d
                },
                ya: function () {
                    var b = f.cb();
                    b && f.qc(b)
                },
                fc: function () {
                    "MutationObserver" in
                    window && document.body ? (new MutationObserver(f.ya)).observe(document.body, {
                        childList: v,
                        subtree: v
                    }) : window.setInterval(f.ya, 15E3)
                },
                qc: function (b) {
                    if (d.d(b, "Object")) {
                        e.setProperty("pageview", b);
                        b = h.c.b.p;
                        var a = h.c.b.ep;
                        h.c.b.et = 9;
                        h.c.b.ep = "";
                        h.c.b.p = p(e.w("pageview"));
                        h.c.i();
                        h.c.b.p = b;
                        h.c.b.ep = a;
                        e.o("pageview")
                    }
                }
            };
            f.init();
            a.e("pv-b", function () {
                var b = f.cb();
                b && e.setProperty("pageview", b)
            });
            f.fc();
            b.hb(f.ya)
        }
    })();
    (function () {
        var b = mt.lang,
            d = mt.g,
            a = h.pa,
            k = {
                aa: function (b, p) {
                    return function (f) {
                        var n = f.target || f.srcElement;
                        if (n) {
                            var q = a.ba(p) || [],
                                r = n.getAttribute(b.ka);
                            f = f.clientX + ":" + f.clientY;
                            if (r && r === f) n.removeAttribute(b.ka);
                            else if (0 < q.length && (n = d.Rb(n)) && n.length)
                                if (q = n.length, r = n[n.length - 1], 1E4 > q * r.split(">").length)
                                    for (r = 0; r < q; r++) k.lb(b, n[r]);
                                else k.lb(b, r)
                        }
                    }
                },
                lb: function (a, d) {
                    for (var f = {}, k = String(d).split(">").length, q = 0; q < k; q++) f[d] = "", d = d.substring(0, d.lastIndexOf(">"));
                    a && (b.d(a, "Object") && a.Qa) &&
                        a.Qa(f)
                },
                lc: function (b, a) {
                    return function (d) {
                        (d.target || d.srcElement).setAttribute(b.ka, d.clientX + ":" + d.clientY);
                        b && b.s && (a ? b.s(a) : b.s("#" + encodeURIComponent(this.id), d.type))
                    }
                }
            };
        return h.ra = k
    })();
    (function () {
        var b = mt.g,
            d = mt.event,
            a = mt.lang,
            k = h.F,
            e = h.pa,
            p = h.ra,
            f = h.N,
            n = f.K,
            q = {
                ka: "HM_ce",
                qb: function () {
                    if (c.cetrk && 0 < c.cetrk.length) {
                        d.e(document, "click", p.aa(q, c.cetrk));
                        for (var a = e.ba(c.cetrk) || [], f = 0, g = a.length; f < g; f++) {
                            var l = a[f],
                                m = l.p || ""; - 1 === m.indexOf(">") && (0 === m.indexOf("#") && (m = m.substring(1)), (m = b.Ta(m)) && d.e(m, "click", p.lc(q, l)))
                        }
                    }
                },
                Qa: function (b) {
                    for (var a = e.ba(c.cetrk) || [], d = 0; d < a.length; d++) {
                        var l = a[d],
                            m = q.Lb(l.p, b);
                        m && q.s(l, m)
                    }
                },
                Lb: function (b, a) {
                    b = String(b);
                    if (0 < b.indexOf("*")) {
                        var d =
                            RegExp("^" + b.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\*/, "\\d+") + "$"),
                            l;
                        for (l in a)
                            if (a.hasOwnProperty(l) && d.test(l)) return l;
                        return w
                    }
                    return a.hasOwnProperty(b) ? b : w
                },
                s: function (d, e) {
                    h.c.b.et = 7;
                    var g = d && d.k || "",
                        g = a.h(g),
                        l = {};
                    if (d && d.a && a.d(d.a, "Object")) {
                        var m = d.a,
                            t;
                        for (t in m)
                            if (m.hasOwnProperty(t)) {
                                var z = q.Sb(m[t] || "", e),
                                    z = z ? b.S(z, x) : "";
                                l[t] = z
                            }
                    }
                    l = q.Hb(l, e || d && d.p);
                    l._iden = g;
                    f.setProperty("customEvent", l);
                    h.c.b.ep = "";
                    h.c.b.p = n(f.w("customEvent"));
                    h.c.i();
                    h.c.b.p = "";
                    f.o("customEvent")
                },
                Hb: function (a, d) {
                    var g = b.ta(d),
                        l = k.Ma;
                    g && (c.aet && c.aet.length ? (a.ei_ = b.getAttribute(g, l.id) || b.getAttribute(g, "id") || "", a.ec_ = b.getAttribute(g, l.$) || b.getAttribute(g, "class") || "", a.ex_ = b.getAttribute(g, l.Z) || b.wa(g), a.en_ = b.getAttribute(g, l.content) || b.S(g, v), a.et_ = b.getAttribute(g, l.ha) || b.T(g), a.el_ = b.getAttribute(g, l.link) || b.getAttribute(g, "href") || "") : (a.ex_ = b.getAttribute(g, l.Z) || b.wa(g), a.en_ = b.getAttribute(g, l.content) || b.S(g, v)));
                    return a
                },
                Sb: function (a, d) {
                    a = String(a);
                    d = String(d);
                    if (0 < a.indexOf("*")) {
                        var g =
                            /.*\[(\d+)\]$/.exec(d);
                        a = a.replace("*", g ? g[1] : "1")
                    }
                    return b.ta(a)
                }
            };
        h.A.e("pv-b", q.qb);
        return q
    })();
    (function () {
        var b = mt.lang,
            d = mt.g,
            a = mt.event,
            k = mt.f,
            e = h.F,
            p = h.A,
            f = h.N,
            n = f.K,
            q = +new Date,
            r = [],
            u = {
                aa: function () {
                    return function (a) {
                        if (h.c && h.c.U && c.aet && c.aet.length) {
                            var l = a.target || a.srcElement;
                            if (l) {
                                var m = h.c.Pa,
                                    t = d.getAttribute(l, e.Oa) != w ? v : x;
                                if (d.getAttribute(l, e.Na) == w)
                                    if (t) u.ma(u.ua(l, a));
                                    else {
                                        var f = d.T(l);
                                        if (b.I(m, "*") || b.I(m, f)) u.ma(u.ua(l, a));
                                        else
                                            for (; l.parentNode != w;) {
                                                var t = l.parentNode,
                                                    f = d.T(t),
                                                    y = "a" === f && b.I(m, "a") ? v : x,
                                                    f = "button" === f && b.I(m, "button") ? v : x,
                                                    A = d.getAttribute(t, e.Oa) != w ? v : x;
                                                if (d.getAttribute(t, e.Na) == w && (y || f || A)) {
                                                    u.ma(u.ua(t, a));
                                                    break
                                                }
                                                l = l.parentNode
                                            }
                                    }
                            }
                        }
                    }
                },
                ua: function (a, l) {
                    var m = {},
                        t = e.Ma;
                    m.id = d.getAttribute(a, t.id) || d.getAttribute(a, "id") || "";
                    m.$ = d.getAttribute(a, t.$) || d.getAttribute(a, "class") || "";
                    m.Z = d.getAttribute(a, t.Z) || d.wa(a);
                    m.content = d.getAttribute(a, t.content) || d.S(a, v);
                    m.ha = d.getAttribute(a, t.ha) || d.T(a);
                    m.link = d.getAttribute(a, t.link) || d.getAttribute(a, "href") || "";
                    m.type = l.type || "click";
                    t = b.$a(a.offsetTop) ? a.offsetTop : 0;
                    "click" === l.type ? t = k.Aa ? l.clientY +
                        Math.max(document.documentElement.scrollTop, document.body.scrollTop) : l.pageY : "touchend" === l.type && (l.bb && l.bb.changedTouches) && (t = l.bb.changedTouches[0].pageY);
                    m.wc = t;
                    t = this.Kb(l);
                    m.Da = t.Da || 0;
                    m.Fa = t.Fa || 0;
                    m.La = t.La || 0;
                    m.xa = t.xa || 0;
                    m.Ja = t.Ja || "b";
                    return m
                },
                Kb: function (a) {
                    var l = a.target || a.srcElement,
                        m;
                    if (k.Aa) {
                        var e = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                        m = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                        m = a.clientX + m;
                        a = a.clientY + e
                    } else m = a.pageX,
                        a = a.pageY;
                    var f = e = 0,
                        y = 0,
                        A = 0;
                    if (l && (e = l.offsetWidth || l.clientWidth, f = l.offsetHeight || l.clientHeight, A = d.Pb(l), y = A.left, A = A.top, b.d(l.getBBox, "Function") && (f = l.getBBox(), e = f.width, f = f.height), "html" === (l.tagName || "").toLowerCase())) e = Math.max(e, l.clientWidth), f = Math.max(f, l.clientHeight);
                    return {
                        Da: Math.round(100 * ((m - y) / e)),
                        Fa: Math.round(100 * ((a - A) / f)),
                        La: e,
                        xa: f,
                        Ja: ("a" === (l.tagName || "").toLowerCase() ? l : d.Gb(l)) ? "a" : "b"
                    }
                },
                ma: function (a) {
                    var l = b.h;
                    a = [+new Date - (h.c.W !== s ? h.c.W : q), l(a.id), l(a.$), l(a.ha),
                        l(a.Z), l(a.link), l(a.content), a.type, a.wc, a.Da, a.Fa, a.La, a.xa, a.Ja
                    ].join("*");
                    u.na(a);
                    b.d(this.Y(), "Function") && this.Y()()
                },
                na: function (a) {
                    var b = e.Sa;
                    a.length > b || (encodeURIComponent(r.join("!") + a).length > b && 0 < r.length && (u.s(r.join("!")), r = []), r.push(a))
                },
                s: function (a) {
                    h.c.b.et = 5;
                    h.c.b.ep = a;
                    f.setProperty("autoEventTracking", {
                        view_h_: k.H()
                    }, v);
                    h.c.b.p = n(f.w("autoEventTracking"));
                    h.c.i();
                    h.c.b.p = "";
                    f.setProperty("autoEventTracking", {
                        view_h_: w
                    }, v)
                },
                Y: function () {
                    return function () {
                        r && r.length && (u.s(r.join("!")),
                            r = [])
                    }
                }
            };
        b.B(c.aet) && "" !== c.aet && p.e("pv-b", function () {
            a.e(document, "click", u.aa());
            "ontouchend" in document && a.e(window, "touchend", u.aa());
            a.e(window, "unload", u.Y())
        });
        return u
    })();
    (function () {
        var b = mt.lang,
            d = mt.event,
            a = mt.f,
            k = h.F,
            e = h.A,
            p = h.N,
            f = p.K,
            n = +new Date,
            q = [],
            r = w,
            u = {
                ub: function () {
                    b.B(c.aet) && "" !== c.aet && setInterval(u.jb, k.nc)
                },
                jb: function () {
                    var b = a.H();
                    0 < b - h.c.b.vl && (h.c.b.vl = b)
                }
            },
            g = {
                Cb: function () {
                    return function () {
                        h.c && (h.c.U && c.aet && c.aet.length) && (window.clearTimeout(r), r = window.setTimeout(function () {
                            g.tb(a.H())
                        }, 150))
                    }
                },
                tb: function (a) {
                    g.na([+new Date - (h.c.W !== s ? h.c.W : n), a].join("*"))
                },
                na: function (a) {
                    if (encodeURIComponent(q.join("!") + a).length > k.Sa || 3 < q.length) g.s(q.join("!")),
                        q = [];
                    q.push(a)
                },
                s: function (b) {
                    u.jb();
                    h.c.b.et = 6;
                    h.c.b.vh = a.Xa();
                    h.c.b.ep = b;
                    p.setProperty("autoEventTracking", {
                        view_h_: a.H()
                    }, v);
                    h.c.b.p = f(p.w("autoEventTracking"));
                    h.c.i();
                    h.c.b.p = "";
                    p.setProperty("autoEventTracking", {
                        view_h_: w
                    }, v)
                },
                Y: function () {
                    return function () {
                        q && q.length && (g.s(q.join("!")), q = [])
                    }
                }
            };
        b.B(c.aet) && "" !== c.aet && e.e("pv-b", function () {
            d.e(window, "scroll", g.Cb());
            d.e(window, "unload", g.Y());
            u.ub()
        });
        return g
    })();
    (function () {
        function b() {
            return function () {
                h.c.b.nv = 0;
                h.c.b.st = 4;
                h.c.b.et = 3;
                h.c.b.ep = h.qa.Qb() + "," + h.qa.Mb();
                h.c.b.hca = c.hca;
                h.c.i()
            }
        }

        function d() {
            clearTimeout(y);
            var a;
            t && (a = "visible" == document[t]);
            z && (a = !document[z]);
            n = "undefined" == typeof a ? v : a;
            if ((!f || !q) && n && r) m = v, g = +new Date;
            else if (f && q && (!n || !r)) m = x, l += +new Date - g;
            f = n;
            q = r;
            y = setTimeout(d, 100)
        }

        function a(a) {
            var b = document,
                l = "";
            if (a in b) l = a;
            else
                for (var d = ["webkit", "ms", "moz", "o"], e = 0; e < d.length; e++) {
                    var m = d[e] + a.charAt(0).toUpperCase() + a.slice(1);
                    if (m in b) {
                        l = m;
                        break
                    }
                }
            return l
        }

        function k(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) r = "focus" == a.type || "focusin" == a.type ? v : x, d()
        }
        var e = mt.event,
            p = h.A,
            f = v,
            n = v,
            q = v,
            r = v,
            u = +new Date,
            g = u,
            l = 0,
            m = v,
            t = a("visibilityState"),
            z = a("hidden"),
            y;
        d();
        (function () {
            var a = t.replace(/[vV]isibilityState/, "visibilitychange");
            e.e(document, a, d);
            e.e(window, "pageshow", d);
            e.e(window, "pagehide", d);
            "object" == typeof document.onfocusin ? (e.e(document, "focusin", k), e.e(document, "focusout", k)) : (e.e(window,
                "focus", k), e.e(window, "blur", k))
        })();
        h.qa = {
            Qb: function () {
                return +new Date - u
            },
            Mb: function () {
                return m ? +new Date - g + l : l
            }
        };
        p.e("pv-b", function () {
            e.e(window, "unload", b())
        });
        p.e("duration-send", b());
        p.e("duration-done", function () {
            g = u = +new Date;
            l = 0
        });
        return h.qa
    })();
    (function () {
        var b = mt.lang,
            d = h.F,
            a = h.load,
            k = {
                ec: function (e) {
                    if ((window._dxt === s || b.d(window._dxt, "Array")) && "undefined" !== typeof h.c) {
                        var k = h.c.R();
                        a([d.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(k)].join(""), e)
                    }
                },
                vc: function (a) {
                    if (b.d(a, "String") || b.d(a, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", a])
                }
            };
        return h.Ab = k
    })();
    (function () {
        function b(a, b, d, e) {
            if (!(a === s || b === s || e === s)) {
                if ("" === a) return [b, d, e].join("*");
                a = String(a).split("!");
                for (var y, f = x, g = 0; g < a.length; g++)
                    if (y = a[g].split("*"), String(b) === y[0]) {
                        y[1] = d;
                        y[2] = e;
                        a[g] = y.join("*");
                        f = v;
                        break
                    } f || a.push([b, d, e].join("*"));
                return a.join("!")
            }
        }
        var d = mt.url,
            a = mt.lang,
            k = mt.f,
            e = h.F,
            p = h.A,
            f = h.Ab,
            n = h.load,
            q = h.oa,
            r = h.N,
            u = r.K,
            g = {
                X: [],
                ga: 0,
                Ba: x,
                D: {
                    Ka: "",
                    page: ""
                },
                init: function () {
                    g.l = 0;
                    r.init();
                    p.e("pv-b", function () {
                        g.Bb();
                        g.Db()
                    });
                    p.e("pv-d", function () {
                        g.Eb();
                        g.D.page = ""
                    });
                    p.e("stag-b", function () {
                        h.c.b.api = g.l || g.ga ? g.l + "_" + g.ga : "";
                        h.c.b.ct = [decodeURIComponent(q.getData("Hm_ct_" + c.id) || ""), g.D.Ka, g.D.page].join("!")
                    });
                    p.e("stag-d", function () {
                        h.c.b.api = 0;
                        g.l = 0;
                        g.ga = 0
                    })
                },
                Bb: function () {
                    var b = window._hmt || [];
                    if (!b || a.d(b, "Array")) window._hmt = {
                        id: c.id,
                        cmd: {},
                        push: function () {
                            for (var b = window._hmt, l = 0; l < arguments.length; l++) {
                                var d = arguments[l];
                                a.d(d, "Array") && (b.cmd[b.id].push(d), "_setAccount" === d[0] && (1 < d.length && /^[0-9a-f]{31,32}$/.test(d[1])) && (d = d[1], b.id = d, b.cmd[d] = b.cmd[d] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, b)
                },
                Db: function () {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id])
                        for (var b = a.cmd[c.id], d = /^_track(Event|MobConv|Order)$/, e = 0, y = b.length; e < y; e++) {
                            var f = b[e];
                            d.test(f[0]) ? g.X.push(f) : g.Ha(f)
                        }
                    a.cmd[c.id] = {
                        push: g.Ha
                    }
                },
                Eb: function () {
                    if (0 < g.X.length)
                        for (var a = 0, b = g.X.length; a < b; a++) g.Ha(g.X[a]);
                    g.X = w
                },
                Ha: function (b) {
                    var d = b[0];
                    if (g.hasOwnProperty(d) && a.d(g[d], "Function")) g[d](b)
                },
                _setAccount: function (a) {
                    1 < a.length && /^[0-9a-f]{31,32}$/.test(a[1]) &&
                        (g.l |= 1)
                },
                _setAutoPageview: function (a) {
                    if (1 < a.length && (a = a[1], x === a || v === a)) g.l |= 2, h.c.Ya = a
                },
                _trackPageview: function (a) {
                    1 < a.length && (a[1].charAt && "/" === a[1].charAt(0)) && (g.l |= 4, h.c.b.sn = h.c.Ua(), h.c.b.et = 0, h.c.b.ep = "", h.c.b.vl = k.H(), h.c.b.kb = 0, h.c.za ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.za = v, g.Ba || (h.c.b.su = h.c.b.u || document.location.href), h.c.b.u = e.protocol + "//" + document.location.host + a[1], h.c.b.p = u(r.w("pageview")), h.c.i(), h.c.b.p = "", h.c.W = +new Date, r.o("pageview"))
                },
                _trackEvent: function (b) {
                    2 < b.length &&
                        (g.l |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = a.h(b[1]) + "*" + a.h(b[2]) + (b[3] ? "*" + a.h(b[3]) : "") + (b[4] ? "*" + a.h(b[4]) : ""), h.c.b.p = u(r.Wa()), h.c.i(), h.c.b.p = "")
                },
                _setCustomVar: function (b) {
                    if (!(4 > b.length)) {
                        var d = b[1],
                            e = b[4] || 3;
                        if (0 < d && 6 > d && 0 < e && 4 > e) {
                            g.ga++;
                            for (var f = (h.c.b.cv || "*").split("!"), y = f.length; y < d - 1; y++) f.push("*");
                            f[d - 1] = e + "*" + a.h(b[2]) + "*" + a.h(b[3]);
                            h.c.b.cv = f.join("!");
                            b = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== b ? q.setData("Hm_cv_" + c.id, encodeURIComponent(b),
                                c.age) : q.removeData("Hm_cv_" + c.id)
                        }
                    }
                },
                _setUserTag: function (d) {
                    if (!(3 > d.length)) {
                        var e = a.h(d[1]);
                        d = a.h(d[2]);
                        if (e !== s && d !== s) {
                            var f = decodeURIComponent(q.getData("Hm_ct_" + c.id) || ""),
                                f = b(f, e, 1, d);
                            q.setData("Hm_ct_" + c.id, encodeURIComponent(f), c.age)
                        }
                    }
                },
                _setVisitTag: function (d) {
                    if (!(3 > d.length)) {
                        var e = a.h(d[1]);
                        d = a.h(d[2]);
                        if (e !== s && d !== s) {
                            var f = g.D.Ka,
                                f = b(f, e, 2, d);
                            g.D.Ka = f
                        }
                    }
                },
                _setPageTag: function (d) {
                    if (!(3 > d.length)) {
                        var e = a.h(d[1]);
                        d = a.h(d[2]);
                        if (e !== s && d !== s) {
                            var f = g.D.page,
                                f = b(f, e, 3, d);
                            g.D.page = f
                        }
                    }
                },
                _setReferrerOverride: function (b) {
                    1 < b.length && (b = b[1], a.d(b, "String") ? (h.c.b.su = "/" === b.charAt(0) ? e.protocol + "//" + window.location.host + b : b, g.Ba = v) : g.Ba = x)
                },
                _trackOrder: function (b) {
                    var d = b[1];
                    if (a.d(d, "Object") && a.B(d.orderId)) {
                        window._hmt = window._hmt || [];
                        b = d.orderId;
                        var e = a.sa(d.orderTotal, 2);
                        r.setProperty("customEvent", {
                            order_id_: b,
                            order_total_: e
                        }, v);
                        window._hmt.push(["_trackCustomEvent", "order_", {}]);
                        r.o("customEvent");
                        for (var d = d.item || [], f, y, g, k = 0; k < d.length; k++) f = d[k], y = a.sa(f.Price, 2), g = a.sa(f.Quantity,
                            0), r.setProperty("customEvent", {
                            order_id_: b,
                            order_total_: e,
                            product_id_: f.skuId || "",
                            product_name_: f.skuName || "",
                            product_category_: f.category || "",
                            product_price_: y,
                            product_quantity_: g,
                            product_amount_: y * g
                        }, v), window._hmt.push(["_trackCustomEvent", "product_", {}]), r.o("customEvent")
                    }
                },
                _trackMobConv: function (a) {
                    if (a = {
                            webim: 1,
                            tel: 2,
                            map: 3,
                            sms: 4,
                            callback: 5,
                            share: 6
                        } [a[1]]) g.l |= 32, h.c.b.et = 93, h.c.b.ep = a, h.c.i()
                },
                _setDataxId: function (a) {
                    a = a[1];
                    f.ec();
                    f.vc(a)
                },
                _setUserId: function (b) {
                    b = b[1];
                    if (b !== s && (a.B(b) || a.$a(b))) {
                        var d =
                            r.w("user").uid_;
                        if (!(d && d.value === a.h(String(b)))) {
                            var d = h.c.b.p,
                                e = h.c.b.ep;
                            h.c.b.et = 8;
                            h.c.b.ep = "";
                            h.c.b.p = "uid_*" + a.h(String(b));
                            h.c.i();
                            var f = {};
                            f.uid_ = b;
                            r.setProperty("user", f, v);
                            h.c.b.p = d;
                            h.c.b.ep = e
                        }
                    }
                },
                _clearUserId: function (a) {
                    1 < a.length && v === a[1] && r.o("userId")
                },
                _setUserProperty: function (b) {
                    b = b[1];
                    a.d(b, "Object") && r.setProperty("user", b)
                },
                _clearUserProperty: function (a) {
                    1 < a.length && v === a[1] && r.o("user")
                },
                _setSessionProperty: function (b) {
                    b = b[1];
                    a.d(b, "Object") && r.setProperty("session", b)
                },
                _clearSessionProperty: function (a) {
                    1 <
                        a.length && v === a[1] && r.o("session")
                },
                _setPageviewProperty: function (b) {
                    b = b[1];
                    a.d(b, "Object") && r.setProperty("pageview", b)
                },
                _clearPageviewProperty: function (a) {
                    1 < a.length && v === a[1] && r.o("pageview")
                },
                _setAutoEventTrackingProperty: function (b) {
                    b = b[1];
                    a.d(b, "Object") && r.setProperty("autoEventTracking", b)
                },
                _clearAutoEventTrackingProperty: function (a) {
                    1 < a.length && v === a[1] && r.o("autoEventTracking")
                },
                _setAutoTracking: function (a) {
                    if (1 < a.length && (a = a[1], x === a || v === a)) h.c.Za = a
                },
                _setAutoEventTracking: function (a) {
                    if (1 <
                        a.length && (a = a[1], x === a || v === a)) h.c.U = a
                },
                _trackPageDuration: function (a) {
                    1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.c.b.et = 3, h.c.b.ep = a, h.c.i())) : p.M("duration-send");
                    p.M("duration-done")
                },
                _require: function (a) {
                    1 < a.length && (a = a[1], e.wb.test(d.O(a)) && n(a))
                },
                _providePlugin: function (b) {
                    if (1 < b.length) {
                        var d = window._hmt,
                            f = b[1];
                        b = b[2];
                        if (a.I(e.fb, f) && a.d(b, "Function") && (d.plugins = d.plugins || {}, d.J = d.J || {}, d.plugins[f] = b, d.C = d.C || [], b = d.C.slice(), f && b.length && b[0][1] === f))
                            for (var g = 0, y = b.length; g <
                                y; g++) {
                                var k = b[g][2] || {};
                                if (d.plugins[f] && !d.J[f]) d.J[f] = new d.plugins[f](k), d.C.shift();
                                else break
                            }
                    }
                },
                _requirePlugin: function (b) {
                    if (1 < b.length) {
                        var d = window._hmt,
                            f = b[1],
                            k = b[2] || {};
                        if (a.I(e.fb, f))
                            if (d.plugins = d.plugins || {}, d.J = d.J || {}, d.plugins[f] && !d.J[f]) d.J[f] = new d.plugins[f](k);
                            else {
                                d.C = d.C || [];
                                for (var k = 0, y = d.C.length; k < y; k++)
                                    if (d.C[k][1] === f) return;
                                d.C.push(b);
                                g._require([w, e.kc + f + ".js"])
                            }
                    }
                },
                _trackCustomEvent: function (b) {
                    if (1 < b.length) {
                        var d = b[1];
                        b = b[2];
                        a.d(b, "Object") || (b = {});
                        b._iden = d;
                        r.setProperty("customEvent",
                            b);
                        h.c.b.et = 7;
                        h.c.b.ep = "";
                        h.c.b.p = u(r.w("customEvent"));
                        h.c.i();
                        h.c.b.p = "";
                        r.o("customEvent")
                    }
                }
            };
        g.init();
        h.xb = g;
        return h.xb
    })();
    (function () {
        var b = h.A;
        c.spa !== s && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]), b.e("pv-b", function () {
            "" !== window.location.hash && (h.c.b.u = window.location.href)
        }))
    })();
    (function () {
        function b() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = v, this.b = {}, this.Za = this.Ya = v, this.U = m.U, this.Pa = e.B(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.za = x, this.init())
        }
        var d = mt.url,
            a = mt.mb,
            k = mt.Ia,
            e = mt.lang,
            p = mt.cookie,
            f = mt.f,
            n = mt.sessionStorage,
            q = mt.z,
            r = mt.event,
            u = h.oa,
            g = h.N,
            l = g.K,
            m = h.F,
            t = h.load,
            z = h.A;
        b.prototype = {
            V: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            },
            fa: function (a,
                b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            },
            da: function (a) {
                for (var b = 0; b < c.dm.length; b++)
                    if (-1 < c.dm[b].indexOf("/")) {
                        if (this.fa(a, c.dm[b])) return v
                    } else {
                        var e = d.O(a);
                        if (e && this.V(e, c.dm[b])) return v
                    } return x
            },
            R: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++)
                    if (this.V(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            },
            ca: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.fa(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/,
                        "$1") + "/"
                }
                return "/"
            },
            Ub: function () {
                if (!document.referrer) return m.L - m.P > c.vdur ? 1 : 4;
                var a = x;
                this.da(document.referrer) && this.da(document.location.href) ? a = v : (a = d.O(document.referrer), a = this.V(a || "", document.location.hostname));
                return a ? m.L - m.P > c.vdur ? 1 : 4 : 3
            },
            tc: function () {
                var a, b, d, e, f, g;
                m.P = u.getData("Hm_lpvt_" + c.id) || 0;
                13 === m.P.length && (m.P = Math.round(m.P / 1E3));
                b = this.Ub();
                a = 4 !== b ? 1 : 0;
                if (g = u.getData("Hm_lvt_" + c.id)) {
                    e = g.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] /
                        1E3));
                    for (; 2592E3 < m.L - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(m.L); 4 < e.length;) e.shift();
                    g = e.join(",");
                    e = e[e.length - 1]
                } else g = m.L, e = "", f = 1;
                this.hc() ? (u.setData("Hm_lvt_" + c.id, g, c.age), u.setData("Hm_lpvt_" + c.id, m.L), d = p.jc(this.R(), this.ca())) : this.Fb();
                if (0 === c.nv && this.da(document.location.href) && ("" === document.referrer || this.da(document.referrer))) a = 0, b = 4;
                this.b.nv = a;
                this.b.st = b;
                this.b.cc = d;
                this.b.lt = e;
                this.b.lv = f
            },
            hc: function () {
                var a = d.O(document.location.href);
                return !e.I("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
                    a)
            },
            Fb: function () {
                for (var a = document.cookie.split(";"), b = 0; b < a.length; b++) {
                    var d = a[b].split("=");
                    d.length && /Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0])) && u.removeData(d[0]);
                    d.length && /Hm_ck_[0-9]{13}/.test(String(d[0])) && u.removeData(d[0])
                }
            },
            sc: function () {
                for (var a = [], b = this.b.et, d = 0, e = m.nb.length; d < e; d++) {
                    var f = m.nb[d],
                        g = this.b[f];
                    "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && ("ct" !== f || "ct" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(g))
                }
                return a.join("&")
            },
            uc: function () {
                this.tc();
                this.b.si = c.id;
                this.b.sn = this.Ua();
                this.b.su = document.referrer;
                this.b.ds = f.mc;
                this.b.cl = f.colorDepth + "-bit";
                this.b.ln = String(f.language).toLowerCase();
                this.b.ja = f.javaEnabled ? 1 : 0;
                this.b.ck = f.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.fl = k.Wb();
                this.b.v = "1.2.84";
                this.b.cv = decodeURIComponent(u.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = f.H();
                var a = document.location.href;
                this.b.cm = d.m(a, m.ac) || "";
                this.b.cp = d.m(a, m.bc) || d.m(a, m.zc) || "";
                this.b.cw = d.m(a, m.$b) ||
                    d.m(a, m.Bc) || "";
                this.b.ci = d.m(a, m.Yb) || d.m(a, m.yc) || "";
                this.b.cf = d.m(a, m.dc) || d.m(a, m.Ac) || "";
                this.b.cu = d.m(a, m.Zb) || d.m(a, m.xc) || "";
                /https?:/.test(document.location.protocol) && (this.b.u = a)
            },
            init: function () {
                try {
                    this.uc(), 0 === this.b.nv ? this.rc() : this.Ra(), h.c = this, this.zb(), this.yb(), z.M("pv-b"), this.pc()
                } catch (b) {
                    var d = [];
                    d.push("si=" + c.id);
                    d.push("n=" + encodeURIComponent(b.name));
                    d.push("m=" + encodeURIComponent(b.message));
                    d.push("r=" + encodeURIComponent(document.referrer));
                    a.log(m.Ca + "//" + m.gb + "?" +
                        d.join("&"))
                }
            },
            pc: function () {
                function a() {
                    z.M("pv-d")
                }
                this.Ya ? (this.za = v, this.b.et = 0, this.b.ep = "", this.b.p = l(g.w("pageview")), this.b.vl = f.H(), this.i(a), this.b.p = "") : a();
                this.W = +new Date;
                g.o("pageview")
            },
            i: function (b) {
                if (this.Za) {
                    var d = this;
                    d.b.rnd = Math.round(Math.random() * m.Ea);
                    d.b.r = f.orientation;
                    d.b.ww = f.pb;
                    z.M("stag-b");
                    var g = m.Ca + "//" + m.gb + "?" + d.sc();
                    z.M("stag-d");
                    d.vb(g);
                    a.log(g, function (a) {
                        d.ib(a);
                        e.d(b, "Function") && b.call(d)
                    })
                }
            },
            zb: function () {
                var a = document.location.hash.substring(1),
                    b = RegExp(c.id),
                    e = d.O(document.referrer) === m.ob ? 1 : 0,
                    f = d.m(a, "jn"),
                    g = /^select$/.test(f);
                a && (b.test(a) && e && g) && (this.b.rnd = Math.round(Math.random() * m.Ea), a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", m.protocol + "//" + c.js + f + ".js?" + this.b.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
            },
            yb: function () {
                try {
                    if (window.postMessage && window.self !== window.parent) {
                        var a = this;
                        r.e(window, "message", function (b) {
                            if (d.O(b.origin) ===
                                m.ob) {
                                b = b.data || {};
                                var e = b.jn || "",
                                    f = /^customevent$|^heatmap$|^pageclick$/.test(e);
                                if (RegExp(c.id).test(b.sd || "") && f) a.b.rnd = Math.round(Math.random() * m.Ea), t(m.protocol + "//" + c.js + e + ".js?" + a.b.rnd)
                            }
                        });
                        window.parent.postMessage({
                            id: c.id,
                            url: document.location.href,
                            status: "__Messenger__hmLoaded"
                        }, "*")
                    }
                } catch (b) {}
            },
            vb: function (a) {
                var b;
                try {
                    b = q.parse(n.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//, "") + e);
                n.set("Hm_unsent_" +
                    c.id, q.stringify(b))
            },
            ib: function (a) {
                var b;
                try {
                    b = q.parse(n.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++)
                        if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                            b.splice(e, 1);
                            break
                        } b.length ? n.set("Hm_unsent_" + c.id, q.stringify(b)) : this.Ra()
                }
            },
            Ra: function () {
                n.remove("Hm_unsent_" + c.id)
            },
            rc: function () {
                var b = this,
                    d;
                try {
                    d = q.parse(n.get("Hm_unsent_" + c.id) || "[]")
                } catch (e) {
                    d = []
                }
                if (d.length)
                    for (var f = function (d) {
                                a.log(m.Ca + "//" + d, function (a) {
                                    b.ib(a)
                                })
                            },
                            g = 0; g < d.length; g++) f(d[g])
            },
            Ua: function () {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new b
    })();
    var B = h.F,
        C = h.load;
    c.pt && C([B.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    (function () {
        var b = mt.f,
            d = mt.lang,
            a = mt.event,
            k = mt.z;
        if ("undefined" !== typeof h.c && (c.med || (!b.Aa || 7 < b.Ob()) && c.cvcc)) {
            var e, p, f, n, q = function (a) {
                    if (a.item) {
                        for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                        return d
                    }
                    return [].slice.call(a)
                },
                r = function (a, b) {
                    for (var d in a)
                        if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === x) return x
                },
                u = function (a, b) {
                    var g = {};
                    g.n = e;
                    g.t = "clk";
                    g.v = a;
                    if (b) {
                        var l = b.getAttribute("href"),
                            m = b.getAttribute("onclick") ? "" + b.getAttribute("onclick") : w,
                            n = b.getAttribute("id") || "";
                        f.test(l) ? (g.sn =
                            "mediate", g.snv = l) : d.d(m, "String") && f.test(m) && (g.sn = "wrap", g.snv = m);
                        g.id = n
                    }
                    h.c.b.et = 86;
                    h.c.b.ep = k.stringify(g);
                    h.c.i();
                    for (g = +new Date; 400 >= +new Date - g;);
                };
            if (c.med) p = "/zoosnet", e = "swt", f = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, n = {
                click: function () {
                    for (var a = [], b = q(document.getElementsByTagName("a")), b = [].concat.apply(b, q(document.getElementsByTagName("area"))), b = [].concat.apply(b, q(document.getElementsByTagName("img"))), d, e, g = 0, l = b.length; g < l; g++) d = b[g], e =
                        d.getAttribute("onclick"), d = d.getAttribute("href"), (f.test(e) || f.test(d)) && a.push(b[g]);
                    return a
                }
            };
            else if (c.cvcc) {
                p = "/other-comm";
                e = "other";
                f = c.cvcc.q || s;
                var g = c.cvcc.id || s;
                n = {
                    click: function () {
                        for (var a = [], b = q(document.getElementsByTagName("a")), b = [].concat.apply(b, q(document.getElementsByTagName("area"))), b = [].concat.apply(b, q(document.getElementsByTagName("img"))), d, e, l, k = 0, m = b.length; k < m; k++) d = b[k], f !== s ? (e = d.getAttribute("onclick"), l = d.getAttribute("href"), g ? (d = d.getAttribute("id"), (f.test(e) ||
                            f.test(l) || g.test(d)) && a.push(b[k])) : (f.test(e) || f.test(l)) && a.push(b[k])) : g !== s && (d = d.getAttribute("id"), g.test(d) && a.push(b[k]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof n && "undefined" !== typeof f) {
                var l;
                p += /\/$/.test(p) ? "" : "/";
                var m = function (a, b) {
                    if (l === b) return u(p + a, b), x;
                    if (d.d(b, "Array") || d.d(b, "NodeList"))
                        for (var e = 0, f = b.length; e < f; e++)
                            if (l === b[e]) return u(p + a + "/" + (e + 1), b[e]), x
                };
                a.e(document, "mousedown", function (a) {
                    a = a || window.event;
                    l = a.target || a.srcElement;
                    var b = {};
                    for (r(n, function (a, e) {
                            b[a] = d.d(e,
                                "Function") ? e() : document.getElementById(e)
                        }); l && l !== document && r(b, m) !== x;) l = l.parentNode
                })
            }
        }
    })();
    (function () {
        var b = mt.g,
            d = mt.lang,
            a = mt.event,
            k = mt.z;
        if ("undefined" !== typeof h.c && d.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var e = {
                rb: function () {
                    for (var d = c.cvcf.length, f, k = 0; k < d; k++)(f = b.Ta(decodeURIComponent(c.cvcf[k]))) && a.e(f, "click", e.ra())
                },
                ra: function () {
                    return function () {
                        h.c.b.et = 86;
                        var a = {
                            n: "form",
                            t: "clk"
                        };
                        a.id = this.id;
                        h.c.b.ep = k.stringify(a);
                        h.c.i()
                    }
                }
            };
            b.hb(function () {
                e.rb()
            })
        }
    })();
    (function () {
        var b = mt.event,
            d = mt.z;
        if (c.med && "undefined" !== typeof h.c) {
            var a = {
                    n: "anti",
                    sb: 0,
                    kb: 0,
                    clk: 0
                },
                k = function () {
                    h.c.b.et = 86;
                    h.c.b.ep = d.stringify(a);
                    h.c.i()
                };
            b.e(document, "click", function () {
                a.clk++
            });
            b.e(document, "keyup", function () {
                a.kb = 1
            });
            b.e(window, "scroll", function () {
                a.sb++
            });
            b.e(window, "load", function () {
                setTimeout(k, 5E3)
            })
        }
    })();
    c.oc !== s && "1" === String(c.oc) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "OcpcCbHm"]));
})();