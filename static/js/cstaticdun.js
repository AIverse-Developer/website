! function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define
    .amd ? define([], e) : "object" == typeof exports ? exports.initNECaptcha = e() : t.initNECaptcha = e()
}(this, function() {
  return function(t) {
    function e(n) {
      if (r[n]) return r[n].exports;
      var o = r[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var r = {};
    return e.m = t, e.c = r, e.p = "/", e(0)
  }([function(t, e, r) {
    r(20), r(23), r(22), r(19), r(21);
    var n = r(17);
    t.exports = n
  }, function(t, e) {
    function r(t, e, r) {
      return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t
    }

    function n(t, e) {
      function r() {}
      r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
    }

    function o(t, e, r) {
      this.name = "CaptchaError", this.code = t, this.message = t + ("(" + _[t] + ")") + (e ? " - " + e : ""),
        Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error)
        .stack, this.data = r || {}
    }
    var i, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
          "symbol" : typeof t
      },
      c = "prototype",
      s = 100,
      u = 200,
      l = 300,
      p = 432,
      f = 500,
      h = 501,
      d = 502,
      v = 503,
      y = 504,
      m = 505,
      g = 600,
      E = 1e3,
      _ = (i = {}, r(i, s, "script error"), r(i, u, "business error"), r(i, l, "unpass error"), r(i, p,
        "captcha id is invalid"), r(i, f, "request error"), r(i, h, "request api error"), r(i, d,
        "request script error"), r(i, v, "request img error"), r(i, y, "request timeout error"), r(i, m,
        "request audio error"), r(i, g, "request anticheat token error"), r(i, E, "unknown error"), i);
    n(o, Error), o[c].toString = function() {
        var t = String(this.stack);
        return 0 === t.indexOf("CaptchaError:") ? t : this.name + ": " + this.message + (t ? "\n    " + t : "")
      }, o.set = function(t, e) {
        "number" == typeof t && "string" == typeof e && (_[t] = e), "object" === ("undefined" == typeof t ?
          "undefined" : a(t)) && t && Object.assign(_, t)
      }, o.get = function(t) {
        return _[t]
      }, o.remove = function(t) {
        String(t) in _ && delete _[t]
      }, e = t.exports = o, e.SCRIPT_ERROR = s, e.BUSINESS_ERROR = u, e.UNPASS_ERROR = l, e.ID_INVAILD_ERROR =
      p, e.REQUEST_ERROR = f, e.REQUEST_API_ERROR = h, e.REQUEST_SCRIPT_ERROR = d, e.REQUEST_IMG_ERROR = v, e
      .REQUEST_TIMEOUT_ERROR = y, e.REQUEST_AUDIO_ERROR = m, e.ANTICHEAT_TOKEN_ERROR = g, e.UNKNOWN_ERROR = E
  }, function(t, e, r) {
    function n(t, e) {
      var r = {};
      for (var n in t) e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
      return r
    }
    var o = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
      },
      i = r(24),
      a = r(3),
      c = r(10),
      s = r(14),
      u = r(6),
      l = 0,
      p = /MicroMessenger|Weibo/i.test(window.navigator.userAgent),
      f = function(t) {
        return "string" == typeof t ? [t, t] : Array.isArray(t) && 1 === t.length ? t.concat(t) : t
      },
      h = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return parseInt((new Date).valueOf() / t, 10)
      },
      d = {
        script: function(t, e) {
          var r = this;
          this.cacheTime && (t = t + "?v=" + h(this.cacheTime)), i(t, {
            charset: "UTF-8"
          }, function(n, o) {
            var i = r.detectKey;
            if (n || i && !window[i]) {
              var a = n && n.message || "unreliable script",
                c = new Error("Failed to load script(" + t + ")." + a);
              return c.data = {
                url: t,
                retry: !!r._options.retry
              }, void e(c)
            }
            e({
              scriptEl: o,
              _originUrl: t
            })
          })
        },
        image: function(t, e) {
          var r = this,
            n = document.createElement("img");
          n.onload = function() {
            n.onload = n.onerror = null, e({
              width: n.width,
              height: n.height,
              src: t
            })
          }, n.onerror = function(o) {
            n.onload = n.onerror = null;
            var i = o && o.message || "unreliable image error",
              a = new Error("Failed to load image(" + t + ")." + i);
            a.data = {
              url: t,
              retry: !!r._options.retry
            }, e(a)
          }, n.src = t
        },
        audio: function(t, e) {
          var r = this;
          try {
            if (p) {
              var n = new XMLHttpRequest;
              n.open("GET", t), n.responseType = "blob", n.onload = function() {
                var t = new Blob([n.response], {
                    type: "audio/mpeg"
                  }),
                  r = URL.createObjectURL(t);
                e({
                  src: r
                })
              }, n.onerror = function() {
                n.onload = n.onerror = null;
                var r = n.statusText || "unreliable audio error",
                  o = n.status || "",
                  i = new Error("Failed to load audio(" + t + ")." + r + "." + o);
                i.data = {
                  url: t,
                  retry: !!this._options.retry
                }, e(i)
              }, n.send()
            } else {
              var o = new Audio;
              o.oncanplaythrough = function(r) {
                o.oncanplaythrough = o.onerror = null, e({
                  src: t
                })
              }, o.onerror = function(n) {
                o.oncanplaythrough = o.onerror = null;
                var i = o.error && o.error.message || "unreliable audio error",
                  a = o.error && o.code || "",
                  c = new Error("Failed to play audio(" + t + ")." + i + "." + a);
                c.data = {
                  url: t,
                  retry: !!r._options.retry
                }, e(c)
              }, o.src = t, o.load()
            }
          } catch (i) {
            var a = new Error("not support audio");
            a.data = {
              url: t,
              retry: !!this._options.retry
            }, e(a)
          }
        },
        api: function(t, e, r) {
          var n = this;
          s(t, r, function(r, i, a) {
            if (r) {
              var c = r && r.message || "unreliable api error",
                s = new Error("Failed to request api(" + t + ")." + c);
              return s.data = {
                url: t,
                retry: !!n._options.retry
              }, void e(s)
            }
            e(o({}, i, {
              _originUrl: a.url
            }))
          }, {
            timeout: this.timeout
          })
        }
      },
      v = function(t) {
        this.id = t.id || "resource_" + l++, this.type = t.type || "script", this.url = t.url || "", this
          .payload = t.payload, this.timeout = t.timeout || 6e3, this.cacheTime = t.cacheTime ? parseInt(t
            .cacheTime, 10) : 0, this.detectKey = t.detectKey || "", this._options = t, a.call(this), this
          .load(), this.setTimeout()
      };
    c(v, a), Object.assign(v.prototype, {
      load: function() {
        var t = this,
          e = d[this.type];
        e && e.call(this, this.url, function(e) {
          return t.resolve(e)
        }, this.payload)
      },
      addSupport: function(t, e, r) {
        ("function" != typeof d[t] || r) && (d[t] = e)
      },
      setTimeout: function() {
        var t = this;
        window.setTimeout(function() {
          var e = String(t.url),
            r = new Error("Timeout: failed to request " + t.type + "(" + e + ").");
          r.data = {
            url: e
          }, t.resolve(r)
        }, this.timeout)
      }
    }), v.SUPPORTS = d;
    var y = function(t) {
      d.hasOwnProperty(t) && (v[t] = function(e) {
        var r = e.disableRetry,
          i = e.onProcess,
          c = e.checkResult,
          s = n(e, ["disableRetry", "onProcess", "checkResult"]);
        if (r) {
          var l = s.url;
          return Array.isArray(l) && (l = l[0] || ""), new v(o({}, s, {
            url: l,
            type: t
          }))
        }
        var p = f(e.url),
          h = new a,
          d = function y() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              r = function(r) {
                var n = p.length;
                e < n - 1 ? y(e + 1) : e === n - 1 && (r.data = o({}, r.data, {
                  url: String(p),
                  requestId: d.id
                }), h.resolve(r)), u.isFn(i) && i(f, d.id, t, {
                  status: "error",
                  error: r,
                  index: e
                })
              },
              n = function(t) {
                var e = t instanceof Error ? t : new Error("Failed to check result of " + f);
                e.data = {
                  url: f,
                  retry: !!s.retry
                }, r(e)
              },
              l = function(e) {
                u.isFn(i) && i(f, d.id, t, {
                  status: "success",
                  res: e
                }), h.resolve(e)
              },
              f = p[e],
              d = new v(o({}, s, {
                type: t,
                url: f,
                retry: e > 0
              }));
            u.isFn(i) && i(f, d.id, t, {
              status: "start"
            }), d.then(function(t) {
              if (!u.isFn(c)) return l(t);
              var e = c(t);
              e instanceof a ? e.then(l(t))["catch"](function(t) {
                return n(t)
              }) : e ? l(t) : n()
            })["catch"](function(t) {
              return r(t)
            })
          };
        return d(0), h
      })
    };
    for (var m in d) y(m);
    v.all = function(t) {
      var e = 0,
        r = !1,
        n = new a,
        o = [];
      return t.map(function(i, a) {
        i.then(function(i) {
          r || (o[a] = i, e++, e === t.length && n.resolve(o))
        })["catch"](function(t) {
          r = !0, n.resolve(t)
        })
      }), n
    }, t.exports = v
  }, function(t, e) {
    function r() {
      this._state = i, this._arg = void 0, this._fullfilledCallback = [], this._rejectedCallback = []
    }

    function n(t) {
      window.setTimeout(t, 1)
    }

    function o(t) {
      if (t) {
        var e = new r;
        t.then = function() {
          return e.then.apply(e, arguments)
        }, t["catch"] = function() {
          return e["catch"].apply(e, arguments)
        }, t["finally"] = function() {
          return e["finally"].apply(e, arguments)
        }, t.resolve = function() {
          return e.resolve.apply(e, arguments)
        }
      }
    }
    var i = "pending",
      a = "fullfilled",
      c = "rejected";
    Object.assign(r.prototype, {
      then: function(t, e) {
        var r = function(t) {
          return "function" == typeof t
        };
        return r(t) && this._fullfilledCallback.push(t), r(e) && this._rejectedCallback.push(e), this
          ._state !== i && this._emit(this._state), this
      },
      "catch": function(t) {
        return this.then(null, t)
      },
      "finally": function(t) {
        return this.then(t, t)
      },
      resolve: function(t) {
        this._state === i && (t instanceof Error ? this._state = c : this._state = a, this._arg = t, this
          ._emit(this._state))
      },
      _emit: function(t) {
        var e = this;
        switch (t) {
          case a:
            n(function() {
              e._fullfilledCallback.map(function(t) {
                return t(e._arg)
              }), e._fullfilledCallback = [], e._rejectedCallback = []
            });
            break;
          case c:
            n(function() {
              e._rejectedCallback.map(function(t) {
                return t(e._arg)
              }), e._fullfilledCallback = [], e._rejectedCallback = []
            })
        }
      }
    }), r.mixin = o, t.exports = r
  }, function(t, e) {
    t.exports = function(t) {
      var e = t.protocol,
        r = void 0 === e ? "" : e,
        n = t.host,
        o = void 0 === n ? "" : n,
        i = t.port,
        a = void 0 === i ? "" : i,
        c = t.path,
        s = void 0 === c ? "" : c,
        u = t.search,
        l = void 0 === u ? "" : u,
        p = t.hash,
        f = void 0 === p ? "" : p;
      if (r && (r = r.replace(/:?\/{0,2}$/, "://")), o) {
        var h = o.match(/^([-0-9a-zA-Z.:]*)(\/.*)?/);
        o = h[1], s = (h[2] || "") + "/" + s
      }
      if (!o && (r = ""), a) {
        if (!o) throw Error('"host" is required, if "port" was provided');
        a = ":" + a
      }
      return s && (s = s.replace(/^\/*|\/+/g, "/")), l && (l = l.replace(/^\??/, "?")), f && (f = f.replace(
        /^#?/, "#")), r + o + a + s + l + f
    }
  }, function(t, e) {
    e.CAPTCHA_TYPE = {
      JIGSAW: 2,
      POINT: 3,
      SMS: 4,
      INTELLISENSE: 5,
      ICON_POINT: 7,
      INFERENCE: 9,
      WORD_ORDER: 10,
      SPACE: 11,
      VOICE: 12
    }, e.CAPTCHA_CLASS = {
      CAPTCHA: "yidun",
      PANEL: "yidun_panel",
      SLIDE_INDICATOR: "yidun_slide_indicator",
      SLIDER: "yidun_slider",
      JIGSAW: "yidun_jigsaw",
      POINT: "point",
      SMS: "yidun_sms",
      TIPS: "yidun_tips",
      REFRESH: "yidun_refresh",
      CONTROL: "yidun_control",
      BGIMG: "yidun_bgimg",
      INPUT: "yidun_input",
      LOADBOX: "yidun_loadbox",
      LOADICON: "yidun_loadicon",
      LOADTEXT: "yidun_loadtext",
      ERROR: "error",
      WARN: "warn",
      VERIFY: "verifying",
      SUCCESS: "success",
      LOADING: "loading",
      LOADFAIL: "loadfail"
    }, e.WIDTH_LIMIT = [220, 1e4], e.SAMPLE_NUM = 50, e.DEVICE = {
      MOUSE: 1,
      TOUCH: 2,
      MOUSE_TOUCH: 3
    }, e.MAX_VERIFICATION = 5, e.RTL_LANGS = ["ar", "he"], e.CACHE_MIN = 6e4, e.FILE_DETECT_KEY = {
      core: "NECaptcha",
      light: "NECaptcha_theme_light",
      dark: "NECaptcha_theme_dark",
      plugins: "NECaptcha_plugin",
      watchman: "initWatchman"
    }, e.FEEDBACK_URL = "http://support.dun.163.com/feedback/captcha", e.RUN_ENV = {
      WEB: 10,
      ANDROID: 20,
      IOS: 30,
      MINIPROGRAM: 40,
      JUMPER_MINI_PROGRAM: 50,
      QUICKAPP: 60
    }, e.CLOSE_SOURCE = {
      USER: 1,
      PROCESS: 2,
      CLOSE: 3
    }
  }, function(t, e) {
    var r = {}.toString,
      n = {
        slice: function(t, e, r) {
          for (var n = [], o = e || 0, i = r || t.length; o < i; o++) n.push(o);
          return n
        },
        getObjKey: function(t, e) {
          for (var r in t)
            if (t.hasOwnProperty(r) && t[r] === e) return r
        },
        typeOf: function(t) {
          return null == t ? String(t) : r.call(t).slice(8, -1).toLowerCase()
        },
        isFn: function(t) {
          return "function" == typeof t
        },
        log: function(t, e) {
          var r = ["info", "warn", "error"];
          return "string" == typeof t && ~r.indexOf(t) ? void(console && console[t]("[NECaptcha] " + e)) :
            void n.error('util.log(type, msg): "type" must be one string of ' + r.toString())
        },
        warn: function(t) {
          n.log("warn", t)
        },
        error: function(t) {
          n.log("error", t)
        },
        assert: function(t, e) {
          if (!t) throw new Error("[NECaptcha] " + e)
        },
        msie: function o() {
          var t = navigator.userAgent,
            o = parseInt((/msie (\d+)/.exec(t.toLowerCase()) || [])[1]);
          return isNaN(o) && (o = parseInt((/trident\/.*; rv:(\d+)/.exec(t.toLowerCase()) || [])[1])), o
        },
        now: function() {
          return (new Date).getTime()
        },
        getIn: function(t, e, r) {
          if ("[object Object]" !== Object.prototype.toString.call(t)) return r;
          "string" == typeof e && (e = e.split("."));
          for (var n = 0, o = e.length; n < o; n++) {
            var i = e[n];
            if (n < o - 1 && !t[i]) return r || void 0;
            t = t[i]
          }
          return t
        },
        raf: function i(t) {
          var i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
            window.setTimeout(t, 16)
          };
          i(t)
        },
        nextFrame: function(t) {
          n.raf(function() {
            return n.raf(t)
          })
        },
        sample: function(t, e) {
          var r = t.length;
          if (r <= e) return t;
          for (var n = [], o = 0, i = 0; i < r; i++) i >= o * (r - 1) / (e - 1) && (n.push(t[i]), o += 1);
          return n
        },
        template: function(t, e) {
          var r = function(t) {
              return t.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
            },
            n = {
              start: "<%",
              end: "%>",
              interpolate: /<%=(.+?)%>/g
            },
            o = n,
            i = new RegExp("'(?=[^" + o.end.substr(0, 1) + "]*" + r(o.end) + ")", "g"),
            a = new Function("obj",
              "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(
                /[\r\t\n]/g, " ").replace(i, "\t").split("'").join("\\'").split("\t").join("'").replace(o
                .interpolate, "',$1,'").split(o.start).join("');").split(o.end).join("p.push('") +
              "');}return p.join('');");
          return e ? a(e) : a
        },
        uuid: function a(t, e) {
          var r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
            a = [],
            n = void 0;
          if (e = e || r.length, t)
            for (n = 0; n < t; n++) a[n] = r[0 | Math.random() * e];
          else {
            var o = void 0;
            for (a[8] = a[13] = a[18] = a[23] = "-", a[14] = "4", n = 0; n < 36; n++) a[n] || (o = 0 | 16 *
              Math.random(), a[n] = r[19 === n ? 3 & o | 8 : o])
          }
          return a.join("")
        },
        reverse: function(t) {
          return Array.isArray(t) ? t.reverse() : "string" === n.typeOf(t) ? t.split("").reverse().join("") :
            t
        },
        encodeUrlParams: function(t) {
          var e = [];
          for (var r in t) t.hasOwnProperty(r) && e.push(window.encodeURIComponent(r) + "=" + window
            .encodeURIComponent(t[r]));
          return e.join("&")
        }
      };
    t.exports = n
  }, function(t, e, r) {
    function n(t, e) {
      var r = {};
      for (var n in t) e.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
      return r
    }

    function o(t, e) {
      function r() {}
      r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
    }

    function i(t, e) {
      this.enable = !0, this.snaker = new u(s({}, t, {
        pid: "captcha",
        limit: 9,
        random: .3,
        version: "2.15.3"
      })), this._captchaConfig = e || {}, this.events = {}
    }

    function a(t, e) {
      var r = f(t);
      if ("string" === r || "number" === r) return "string" === r && (t = parseFloat(t), !isNaN(t) && (t = t
        .toFixed)), t.toFixed(e)
    }

    function c(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = "network";
      return function(n, o, i, c) {
        var u = c.status,
          p = c.error,
          f = c.index,
          d = c.res,
          E = c.perfEntry;
        try {
          var b = l(n),
            w = "image" === i ? "image" : b.path;
          if (p) {
            t.remove(r, w, o);
            var S = {
                script: v,
                image: m,
                audio: g,
                api: y
              },
              C = new h(S[i], p.message, s({}, e, {
                url: n
              }));
            t.collectErr(C, {
              times: f + 1
            })
          } else {
            var I = O[u];
            if (R) {
              if ("end" !== I) return;
              var T = E || _.getEntriesByName(d && d._originUrl || n)[0];
              if (!T) return;
              t.collect(r, w, {
                tc: a(T.responseEnd - (T.domainLookupStart || T.connectStart), 1),
                dc: a(T.domainLookupEnd - T.domainLookupStart, 1),
                cc: a(T.connectEnd - T.connectStart, 1),
                rc: a(T.responseStart - T.requestStart, 1),
                rr: a(T.responseEnd - T.responseStart, 1),
                url: n,
                host: b.host,
                https: "https" === b.protocol,
                from: "PERF"
              }, {}, s({}, e))
            } else t.collect(r, w, {
              timestamp: (new Date).valueOf(),
              url: n,
              host: b.host,
              https: "https" === b.protocol,
              from: "js"
            }, {
              rangeId: o,
              rangeType: I
            }, s({}, e))
          }
        } catch (C) {}
      }
    }
    var s = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
      },
      u = r(11),
      l = r(15),
      p = r(6),
      f = p.typeOf,
      h = r(1),
      d = r(12),
      v = h.REQUEST_SCRIPT_ERROR,
      y = h.REQUEST_API_ERROR,
      m = h.REQUEST_IMG_ERROR,
      g = h.REQUEST_AUDIO_ERROR,
      E = "prototype",
      _ = window.performance || window.msPerformance || window.webkitPerformance || {},
      R = _ && "getEntriesByName" in _;
    o(i, Error), i[E].collect = function(t, e, r, o, i) {
      var a = o.rangeId,
        c = o.rangeType;
      if (this.enable) try {
        if (a) {
          var u = r.timestamp,
            l = n(r, ["timestamp"]);
          !this.events[t] && (this.events[t] = {}), !this.events[t][e] && (this.events[t][e] = {});
          var p = this.events[t][e][a];
          if ("start" !== c || p) {
            if ("end" === c && p && !p.end) {
              Object.assign(p, s({
                end: u,
                zoneId: this._captchaConfig.zoneId,
                extra: i
              }, l));
              var h = p.end,
                d = p.start,
                v = p.extra,
                y = n(p, ["end", "start", "extra"]);
              this.snaker.trackAsync(t, e, window.encodeURIComponent(JSON.stringify(s({
                tc: h - d
              }, y))), s({}, v, {
                nts: (new Date).valueOf()
              })), this.events[t][e][a] = null
            }
          } else this.events[t][e][a] = s({
            ev: p,
            start: u,
            extra: i
          }, l)
        } else this.snaker.trackAsync(t, e, "string" === f(r) ? r : window.encodeURIComponent(JSON
          .stringify(s({}, r, {
            zoneId: this._captchaConfig.zoneId
          }))), s({}, i, {
          nts: (new Date).valueOf()
        }))
      } catch (m) {}
    }, i[E].collectErr = function(t, e) {
      d(t, this._captchaConfig, s({}, e))
    }, i[E].remove = function(t, e, r) {
      t && e && r ? this.events[t] && this.events[t][e] && delete this.events[t][e][r] : t && e ? this.events[
        t] && (this.events[t][e] = {}) : t && (this.events[t] = {})
    }, i[E].clear = function() {
      if (this.enable) try {
        this.snaker.flush(), this.events = {}
      } catch (t) {}
    };
    var O = {
      start: "start",
      success: "end"
    };
    e = t.exports = i, e.createNetCollect = c, e.supportEntries = R
  }, function(t, e, r) {
    var n = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
      },
      o = r(2),
      i = r(13);
    t.exports = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.captchaConfig,
        r = void 0 === e ? {} : e;
      return function(e, a, c, s) {
        a = Object.assign({
          referer: i(),
          zoneId: r.zoneId || ""
        }, a);
        var u = n({}, t, s, {
          url: e,
          payload: a
        });
        o.api(u).then(function(t) {
          return c(null, t)
        })["catch"](c)
      }
    }
  }, function(t, e, r) {
    var n = r(5),
      o = n.FILE_DETECT_KEY;
    t.exports = function(t) {
      var e = Object.keys(o);
      if (e.indexOf(t) > -1) return o[t];
      for (var r = 0, n = e.length; r < n; r++)
        if (new RegExp("/" + e[r] + "\\.(\\S*?\\.min\\.)?js").test(t)) return o[e[r]];
      return ""
    }
  }, function(t, e) {
    t.exports = function(t, e) {
      function r() {}
      r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
    }
  }, function(t, e, r) {
    ! function(e, r) {
      t.exports = r()
    }(this, function() {
      "use strict";

      function t(t) {
        var e = new RegExp("(^|;)[ ]*" + t + "=([^;]*)"),
          r = e.exec(document.cookie);
        return r ? decodeURIComponent(r[2]) : ""
      }

      function e(t, e, r) {
        var n, o = t + "=" + encodeURIComponent(e) + ";";
        r && (n = new Date, n.setTime(n.getTime() + r), o += "expires=" + n.toUTCString()), document.cookie =
          o
      }

      function r() {
        for (var t = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", e = "", r = 0, n = t
            .length; r < 16; r++) e += t.charAt(Math.floor(Math.random() * n));
        return e
      }
      var n, o = function() {
          return o = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++) {
              e = arguments[r];
              for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
            }
            return t
          }, o.apply(this, arguments)
        },
        i = {
          userData: null,
          name: location.hostname + "_snaker",
          init: function() {
            if (!i.userData) try {
              i.userData = document.createElement("INPUT"), i.userData.type = "hidden", i.userData.style
                .display = "none", i.userData.addBehavior("#default#userData"), i.userData && document
                .body.appendChild(i.userData);
              var t = new Date;
              t.setDate(t.getDate() + 365), i.userData.expires = t.toUTCString()
            } catch (e) {
              return console.log("userData is disabled!"), !1
            }
            return !0
          },
          setItem: function(t, e) {
            i.init() && i.userData && (i.userData.load(i.name), i.userData.setAttribute(t, e), i.userData
              .save(i.name))
          },
          getItem: function(t) {
            return i.init() && i.userData ? (i.userData.load(i.name), i.userData.getAttribute(t) || "") : ""
          },
          removeItem: function(t) {
            i.init() && i.userData && (i.userData.load(i.name), i.userData.removeAttribute(t), i.userData
              .save(i.name))
          }
        };
      try {
        n = localStorage || i
      } catch (a) {
        n = i
      }
      var c = function() {
          function t(t) {
            this.name = t
          }
          return t.prototype.push = function(t) {
            if (t) try {
              var e = n.getItem(this.name);
              n.setItem(this.name, e ? e + "," + t : t)
            } catch (r) {
              console.log("localstorage or userData is disabled!")
            }
          }, t.prototype.length = function() {
            try {
              var t = n.getItem(this.name) || "";
              return t ? t.split(",").length : 0
            } catch (e) {
              return console.log("localstorage or userData is disabled!"), 0
            }
          }, t.prototype.pop = function(t) {
            void 0 === t && (t = 1);
            var e;
            try {
              var r = n.getItem(this.name),
                o = r ? r.split(",") : [];
              e = o.splice(0, t), n.setItem(this.name, o.join(","))
            } catch (i) {
              e = [], console.log("localstorage or userData is disabled!")
            }
            return e
          }, t.prototype.clear = function() {
            try {
              n.removeItem(this.name)
            } catch (t) {
              console.log("localstorage or userData is disabled!")
            }
          }, t
        }(),
        s = function() {
          function n(n) {
            if (!n.pid) throw new Error("product id is required!");
            var o = n.pid,
              i = n.bid,
              a = n.url,
              s = n.random,
              u = n.limit,
              l = n.disabled,
              p = n.version;
            this.pid = o, this.bid = i, this.random = s || 100, this.limit = u || 5, this.disabled = l, this
              .version = p || "", this.url = a || "https://da.dun.163.com/sn.gif", this.prefix =
              "__snaker__id", this.cache = new c(this.prefix);
            var f = t(this.prefix);
            f ? this.uuid = f : (this.uuid = r(), e(this.prefix, this.uuid, 31536e6))
          }
          return n.prototype.setUser = function(t) {
            if ("string" == typeof t) this.user = {
              uid: t
            };
            else {
              this.user = {
                uid: t.uid
              };
              for (var e in t) t.hasOwnProperty(e) && "uid" !== e && (this.user["$user_" + e] = t[e])
            }
          }, n.prototype.serialize = function(t, e) {
            var r = this,
              n = r.pid,
              i = r.bid,
              a = r.uuid,
              c = r.user,
              s = r.version,
              u = t.type,
              l = t.name,
              p = t.value,
              f = function(t, e) {
                return t.substring(0, e)
              },
              h = screen.width + "x" + screen.height,
              d = f(location.href, 200),
              v = (new Date).getTime() + "",
              y = o(o({
                pid: n,
                bid: i,
                uuid: a,
                type: u,
                name: l,
                version: s,
                value: p,
                res: h,
                pu: d,
                nts: v
              }, e), c),
              m = [];
            for (var g in y) y.hasOwnProperty(g) && void 0 !== y[g] && m.push(encodeURIComponent(g + "=") +
              encodeURIComponent(encodeURIComponent(y[g])));
            return m.join("%26")
          }, n.prototype.sendRequest = function(t, e) {
            if (!this.disabled) {
              var r = new Image(1, 1);
              r.src = t + "?d=" + e
            }
          }, n.prototype.report = function(t, e, r, n, o) {
            if (!this.disabled) {
              var i = this.serialize({
                type: t,
                name: e,
                value: r
              }, o ? o : {});
              this.random < Math.random() || (n ? (this.cache.push(i), this.cache.length() >= this.limit &&
                this.flush()) : this.sendRequest(this.url, i))
            }
          }, n.prototype.track = function(t, e, r, n) {
            this.report(t, e, r, !1, n)
          }, n.prototype.trackAsync = function(t, e, r, n) {
            this.report(t, e, r, !0, n)
          }, n.prototype.flush = function() {
            for (var t = "", e = this.cache.pop(this.limit); e.length;) {
              var r = e.pop() || "";
              r && (t.length + r.length <= 1800 ? (t = t ? t + "," + r : r, e.length || this.sendRequest(
                this.url, t)) : (this.sendRequest(this.url, t), t = r))
            }
          }, n
        }();
      return s
    })
  }, function(t, e, r) {
    function n(t, e, r) {
      return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t
    }
    var o, i = r(8),
      a = r(4),
      c = r(1),
      s = c.REQUEST_SCRIPT_ERROR,
      u = c.REQUEST_API_ERROR,
      l = c.REQUEST_IMG_ERROR,
      p = c.REQUEST_AUDIO_ERROR,
      f = c.BUSINESS_ERROR,
      h = c.UNPASS_ERROR,
      d = c.ANTICHEAT_TOKEN_ERROR,
      v = r(3),
      y = r(2),
      m = r(6),
      g = m.uuid,
      E = (o = {}, n(o, u, "api"), n(o, l, "image"), n(o, p, "audio"), n(o, s, "script"), n(o, f, "business"),
        n(o, h, "unpass"), n(o, d, "anticheat"), o),
      _ = null;
    t.exports = function(t, e, r) {
      var n = e.protocol,
        o = e.apiServer,
        c = e.__serverConfig__,
        s = void 0 === c ? {} : c,
        u = e.captchaId,
        l = e.timeout,
        p = new v,
        f = function(t) {
          var e = "/api/v2/collect";
          return Array.isArray(t) ? t.map(function(t) {
            return a({
              protocol: n,
              host: t,
              path: e
            })
          }) : a({
            protocol: n,
            host: t,
            path: e
          })
        },
        h = f(o || s.apiServer || ["c.dun.163.com", "c.dun.163yun.com"]),
        d = i({
          timeout: l,
          disableRetry: !0,
          captchaConfig: e
        }),
        m = t.data,
        R = Object.assign({
          id: u,
          token: m.token || "",
          type: E[t.code] || "other",
          target: m.url || m.resource || "",
          message: t.toString()
        }, r);
      null == window.ip && (window.ip = function(t, e, r) {
        _ = {
          ip: t,
          dns: r
        }
      });
      var O = function() {
          Object.assign(R, _), d(h, R, function(t, e) {
            if (t || e.error) {
              console && console.warn("Failed to collect error.");
              var r = new Error(t ? t.message : e.msg);
              return r.data = {
                url: h
              }, void p.resolve(r)
            }
            p.resolve()
          })
        },
        b = n + "://only-d-" + g(32) + "-" + (new Date).valueOf() + ".nstool.netease.com/ip.js";
      return y.script({
        url: b,
        timeout: l,
        checkResult: function(t) {
          t && t.scriptEl && t.scriptEl.parentElement.removeChild(t.scriptEl);
          var e = new v;
          return _ && _.dns ? (e.resolve(), e) : (setTimeout(function() {
            return e.resolve(new Error("try to collect dns again"))
          }, 100), e)
        }
      })["finally"](function() {
        O()
      }), p
    }
  }, function(t, e) {
    t.exports = function() {
      return location.href.replace(/\?[\s\S]*/, "").substring(0, 128)
    }
  }, function(t, e) {
    function r() {}

    function n(t, e, n, a) {
      function c() {
        l.parentNode && l.parentNode.removeChild(l), window[d] = r, p && clearTimeout(p)
      }

      function s() {
        window[d] && c()
      }

      function u(t) {
        var e = [];
        for (var r in t) t.hasOwnProperty(r) && e.push(m(r) + "=" + m(t[r]));
        return e.join("&")
      }
      "object" === ("undefined" == typeof n ? "undefined" : o(n)) && (a = n, n = null), "function" == typeof e
        && (n = e, e = null), a || (a = {});
      var l, p, f = Math.random().toString(36).slice(2, 9),
        h = a.prefix || "__JSONP",
        d = a.name || h + ("_" + f) + ("_" + i++),
        v = a.param || "callback",
        y = a.timeout || 6e3,
        m = window.encodeURIComponent,
        g = document.getElementsByTagName("script")[0] || document.head;
      return y && (p = setTimeout(function() {
          c(), n && n(new Error("Timeout"))
        }, y)), window[d] = function(e) {
          c(), n && n(null, e, {
            url: t
          })
        }, e && (t = t.split("?")[0]), t += (~t.indexOf("?") ? "&" : "?") + u(e) + "&" + v + "=" + m(d), t = t
        .replace("?&", "?"), l = document.createElement("script"), l.type = "text/javascript", l.src = t, g
        .parentNode.insertBefore(l, g), s
    }
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
          "symbol" : typeof t
      },
      i = 0;
    t.exports = n
  }, function(t, e) {
    function r(t) {
      if (!t) return {};
      var e = document.createElement("a");
      return e.href = t, {
        source: t,
        protocol: e.protocol.replace(":", ""),
        host: e.hostname,
        port: e.port,
        query: e.search,
        hash: e.hash.replace("#", ""),
        path: e.pathname.replace(/^([^/])/, "/$1"),
        segments: e.pathname.replace(/^\//, "").split("/")
      }
    }
    t.exports = r
  }, function(t, e, r) {
    function n() {
      this._events = {}
    }
    var o = r(3);
    t.exports = n, Object.assign(n.prototype, {
      on: function(t, e) {
        var r = this._events;
        return r[t] || (r[t] = []), r[t].push(e), this
      },
      once: function(t, e) {
        var r = this,
          n = function o() {
            e.apply(void 0, arguments), r.off(t, o)
          };
        return this.on(t, n)
      },
      off: function(t, e) {
        if (t)
          if (t && !e) this._events[t] = [];
          else {
            var r = this._events[t] || [],
              n = r.indexOf(e);
            n > -1 && r.splice(n, 1)
          }
        else this._events = {};
        return this
      },
      emit: function(t) {
        for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] =
          arguments[n];
        var i = this._events[t] || [],
          a = new o,
          c = {},
          s = function u(t) {
            var e = i[t];
            if (!e) return void a.resolve(c);
            var n = !1,
              o = {
                async: function() {
                  return n = !0,
                    function(e) {
                      return e instanceof Error ? void a.resolve(e) : void u(t + 1)
                    }
                }
              };
            e.call.apply(e, [o].concat(r, [c])), !n && u(t + 1)
          };
        return s(0), a
      }
    })
  }, function(t, e, r) {
    function n(t, e, r) {
      e = e || function() {}, r = r || function(t) {
        console && console.error(
          '[NECaptcha] initNECaptcha(config, onload, onerror) has thrown an error. If needed, handle it yourself in callback "onerror".\n',
          t)
      };
      var a = window.location.protocol.replace(":", ""),
        l = {
          protocol: "http" === a || "https" === a ? a : "https",
          timeout: 6e3,
          runEnv: f.WEB
        };
      t = Object.assign({}, l, t);
      var _ = new d({
        bid: t.captchaId,
        url: ""
      }, t);
      _.clear(), E || (E = !0, setTimeout(function() {
        if (m)
          for (var t = performance.getEntries({
              entryType: "resource",
              initiatorType: "script"
            }), e = 0; e < t.length; e++) {
            var r = t[e];
            r && r.name.indexOf("/load.min.js") !== -1 && y(_)(r.name, "load.min.js_" + e, "script", {
              status: "success",
              perfEntry: r
            })
          }
      }, 0));
      var R = function(e) {
          var r = "plugins" + (v ? "" : ".min") + ".js";
          return Array.isArray(e) ? e.map(function(e) {
            return c({
              protocol: t.protocol,
              host: e,
              path: r
            })
          }) : c({
            protocol: t.protocol,
            host: e,
            path: r
          })
        },
        O = "loader_plugins",
        b = g[O] || i.script({
          id: O,
          url: R(t.staticServer || ["cstaticdun.126.net", "cstatic.dun.163yun.com"]),
          timeout: t.timeout,
          cacheTime: p,
          onProcess: y(_),
          detectKey: h("plugins")
        });
      !g[O] && (g[O] = b), b.then(function() {
        var i = new o({
          captchaConfig: t,
          cache: g,
          captchaCollector: _
        });
        i._hooks = {
          onload: e,
          onerror: r
        }, n.apply(i), i.run()
      })["catch"](function(t) {
        g[O] = null, r(new s(u, t.message, t.data))
      })
    }
    var o = r(18),
      i = r(2),
      a = r(3),
      c = r(4),
      s = r(1),
      u = s.REQUEST_SCRIPT_ERROR,
      l = r(5),
      p = l.CACHE_MIN,
      f = l.RUN_ENV,
      h = r(9),
      d = r(7),
      v = !1,
      y = d.createNetCollect,
      m = d.supportEntries,
      g = {},
      E = !1;
    n.use = function(t) {
      this._plugins || (this._plugins = []);
      var e = t.constructor,
        r = !!e.singleton,
        n = this._plugins.map(function(t) {
          return t.constructor
        }).indexOf(e) > -1;
      n && r || this._plugins.push(t)
    }, n.apply = function(t) {
      this._plugins && this._plugins.map(function(e) {
        return e.apply(t)
      })
    }, n.VERSION = "2.2.2", n.ResourceLoader = i, n.Thenable = a, n.CaptchaError = s, t.exports = n
  }, function(t, e, r) {
    function n(t, e) {
      if (!t) throw new Error("[NECaptcha Loader] " + e)
    }

    function o(t) {
      u.call(this), n(t.captchaConfig, 'option "captchaConfig" is required.'), n(t.cache,
          'option "cache" is required.'), this._captchaConfig = t.captchaConfig, this._captchaHooks = t
        .captchaHooks, this._cache = t.cache, this._captchaCollector = t.captchaCollector, this._error = null
    }
    var i = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
        }
        return t
      },
      a = r(8),
      c = r(4),
      s = r(1),
      u = r(16),
      l = r(10),
      p = r(2),
      f = r(7),
      h = f.createNetCollect,
      d = r(9),
      v = r(5),
      y = v.CACHE_MIN,
      m = s.REQUEST_API_ERROR,
      g = s.REQUEST_SCRIPT_ERROR,
      E = s.ID_INVAILD_ERROR,
      _ = s.UNKNOWN_ERROR,
      R = !1;
    l(o, u), Object.assign(o.prototype, {
      run: function() {
        var t = this;
        this.fetchConfig(function() {
          return t.loadResources()
        })
      },
      fetchConfig: function(t) {
        var e = this,
          r = this._captchaConfig,
          n = r.captchaId,
          o = r.protocol,
          s = r.timeout,
          u = r.apiServer,
          l = r.__serverConfig__,
          p = r.ipv6,
          f = r.runEnv;
        null == u && (u = ["c.dun.163.com", "c.dun.163yun.com"]);
        var d = function() {
            var t = "/api/v2/getconf";
            return Array.isArray(u) ? u.map(function(e) {
              return c({
                protocol: o,
                host: e,
                path: t
              })
            }) : c({
              protocol: o,
              host: u,
              path: t
            })
          },
          v = d(),
          y = {
            id: n,
            ipv6: p,
            runEnv: f
          },
          g = {
            timeout: s
          },
          _ = a(i({}, g, {
            onProcess: h(this._captchaCollector)
          })),
          O = function() {
            _(v, y, function(r, n) {
              if (r || n.error) {
                var o = r ? r.message : n.msg,
                  i = new Error(o + " (" + v + ")");
                i.data = {
                  url: v
                };
                var a = r || n.error !== E ? m : E;
                return void e.catchError(i, a)
              }
              var c = function(t) {
                  var r = e._captchaConfig;
                  null == r.apiServer && (r.apiServer = t.apiServer), null == r.staticServer && (r
                      .staticServer = t.staticServers), r.theme = t.theme, r.acConfig = t.ac, r
                    .zoneId = t.zoneId, r.__serverConfig__ = t
                },
                s = n.data;
              R && l && (s = Object.assign({}, s, l)), c(s), e.emit("after-config", e._captchaConfig
                .__serverConfig__).then(t)["catch"](function(t) {
                return e.catchError(t)
              })
            })
          };
        this.emit("before-config", {
          params: y,
          jsonpOpts: g
        }).then(O)["catch"](function(t) {
          return e.catchError(t)
        })
      },
      loadResources: function() {
        var t = this,
          e = this._captchaConfig,
          r = e.protocol,
          n = e.timeout,
          o = e.staticServer,
          i = e.__serverConfig__,
          a = function(t, e) {
            return Array.isArray(t) ? t.map(function(t) {
              return c({
                protocol: r,
                host: t,
                path: e
              })
            }) : c({
              protocol: r,
              host: t,
              path: e
            })
          };
        this.emit("before-load", o).then(function() {
          var e = i.resources.map(function(e) {
            var r = a(o, e),
              i = Array.isArray(r) ? r[0] : r,
              c = t._cache[i];
            return c || (c = p.script({
              id: i,
              url: r,
              timeout: n,
              cacheTime: 10 * y,
              onProcess: h(t._captchaCollector),
              detectKey: d(e)
            }), t._cache[i] = c, c["catch"](function() {
              t._cache[i] = null
            })), c
          });
          p.all(e).then(function() {
            t.emit("after-load")["catch"](function(e) {
              return t.catchError(e)
            })
          })["catch"](function(e) {
            return t.catchError(e, g)
          })
        })["catch"](function(e) {
          return t.catchError(e)
        })
      },
      catchError: function(t, e) {
        if (!this._error) {
          var r = new s(e || _, t.message, t.data);
          this._error = r, this.emit("error", r)
        }
      }
    }), t.exports = o
  }, function(t, e) {
    Array.isArray || (Array.isArray = function(t) {
      return "[object Array]" === Object.prototype.toString.call(t)
    })
  }, function(t, e) {
    "function" != typeof Object.assign && (Object.assign = function(t) {
      if (null == t) throw new TypeError("Cannot convert undefined or null to object");
      t = Object(t);
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        if (null != r)
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
      }
      return t
    })
  }, function(t, e) {
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ?
        "symbol" : typeof t
    };
    Object.keys || (Object.keys = function() {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        e = !{
          toString: null
        }.propertyIsEnumerable("toString"),
        n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf",
          "propertyIsEnumerable", "constructor"
        ],
        o = n.length;
      return function(i) {
        if ("function" != typeof i && ("object" !== ("undefined" == typeof i ? "undefined" : r(i)) ||
            null === i)) throw new TypeError("Object.keys called on non-object");
        var a, c, s = [];
        for (a in i) t.call(i, a) && s.push(a);
        if (e)
          for (c = 0; c < o; c++) t.call(i, n[c]) && s.push(n[c]);
        return s
      }
    }())
  }, function(t, e) {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
      var r;
      if (null == this) throw new TypeError('"this" is null or not defined');
      var n = Object(this),
        o = n.length >>> 0;
      if (0 === o) return -1;
      var i = +e || 0;
      if (Math.abs(i) === 1 / 0 && (i = 0), i >= o) return -1;
      for (r = Math.max(i >= 0 ? i : o - Math.abs(i), 0); r < o;) {
        if (r in n && n[r] === t) return r;
        r++
      }
      return -1
    })
  }, function(t, e) {
    Array.prototype.map || (Array.prototype.map = function(t, e) {
      var r, n, o;
      if (null == this) throw new TypeError(" this is null or not defined");
      var i = Object(this),
        a = i.length >>> 0;
      if ("[object Function]" !== Object.prototype.toString.call(t)) throw new TypeError(t +
        " is not a function");
      for (e && (r = e), n = new Array(a), o = 0; o < a;) {
        var c, s;
        o in i && (c = i[o], s = t.call(r, c, o, i), n[o] = s), o++
      }
      return n
    })
  }, function(t, e) {
    function r(t, e) {
      for (var r in e) t.setAttribute(r, e[r])
    }

    function n(t, e) {
      t.onload = function() {
        this.onerror = this.onload = null, e(null, t)
      }, t.onerror = function() {
        this.onerror = this.onload = null, e(new Error("Failed to load " + this.src), t)
      }
    }

    function o(t, e) {
      t.onreadystatechange = function() {
        "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null, e(
          null, t))
      }
    }
    t.exports = function(t, e, i) {
      var a = document.head || document.getElementsByTagName("head")[0],
        c = document.createElement("script");
      "function" == typeof e && (i = e, e = {}), e = e || {}, i = i || function() {}, c.type = e.type ||
        "text/javascript", c.charset = e.charset || "utf8", c.async = !("async" in e) || !!e.async, c.src = t,
        e.attrs && r(c, e.attrs), e.text && (c.text = "" + e.text);
      var s = "onload" in c ? n : o;
      s(c, i), c.onload || n(c, i), a.appendChild(c)
    }
  }])
});
