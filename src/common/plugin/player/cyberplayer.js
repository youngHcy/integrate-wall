!function (r, o) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = o() : 'function' == typeof define && define.amd ? define([], o) : 'object' == typeof exports ? exports.cyberplayer = o() : r.cyberplayer = o();
}(this, function () {
    return function (r) {
        function o(t) {
            if (e[t]) {
                return e[t].exports;
            }

            var n = e[t] = {exports: {}, id: t, loaded: !1};
            return r[t].call(n.exports, n, n.exports, o), n.loaded = !0, n.exports;
        }
        var t = window.webpackJsonpcyberplayer;
        window.webpackJsonpcyberplayer = function (e, a) {
            for (var i, c, d = 0, f = []; d < e.length; d++) {
                c = e[d], n[c] && f.push.apply(f, n[c]), n[c] = 0;

            }
            for (i in a) {
                r[i] = a[i];
            }
            for (t && t(e, a); f.length;) {
                f.shift().call(null, o);
            }
        };
        var e = {};
        var n = {
            0: 0
        };
        return o.e = function (r, t) {
                if (0 === n[r]) {
                    return t.call(null, o);
                }

                if (void 0 !== n[r]) {
                    n[r].push(t);
                }
                else {
                    n[r] = [t];
                    var e = document.getElementsByTagName('head')[0];
                    var a = document.createElement('script');
                    a.type = 'text/javascript', a.charset = 'utf-8', a.async = !0, a.src = o.p + '' + ({1: 'polyfills.promise', 2: 'polyfills.base64'}[r] || r) + '.js', e.appendChild(a);
                }
            }, o.m = r, o.c = e, o.p = '', o(0);
    }([function (r, o, t) {
        r.exports = t(92);
    }, function (r, o, t) {
        var e;
        var n;
        e = [], n = function () {
            var r = {};
            var o = Array.prototype;
            var t = Object.prototype;
            var e = Function.prototype;
            var n = o.slice;
            var a = o.concat;
            var i = t.toString;
            var c = t.hasOwnProperty;
            var d = o.map;
            var f = o.reduce;
            var h = o.forEach;
            var w = o.filter;
            var p = o.every;
            var s = o.some;
            var b = o.indexOf;
            var g = Array.isArray;
            var l = Object.keys;
            var u = e.bind;
            var v = function (r) {
                return r instanceof v ? r : this instanceof v ? void 0 : new v(r);
            };
            var y = v.each = v.forEach = function (o, t, e) {
                if (null == o) {
                    return o;
                }

                if (h && o.forEach === h) {
                    o.forEach(t, e);
                }
                else if (o.length === +o.length) {
                    for (var n = 0, a = o.length; n < a; n++) {
                        if (t.call(e, o[n], n, o) === r) {
                            return;
                        }

                    }
                }
                else {
                    for (var i = v.keys(o), n = 0, a = i.length; n < a; n++) {
                        if (t.call(e, o[i[n]], i[n], o) === r) {
                            return;
                        }

                    }
                }

                return o;
            };
            v.map = v.collect = function (r, o, t) {
                var e = [];
                return null == r ? e : d && r.map === d ? r.map(o, t) : (y(r, function (r, n, a) {
                    e.push(o.call(t, r, n, a));
                }), e);
            };
            var A = 'Reduce of empty array with no initial value';
            v.reduce = v.foldl = v.inject = function (r, o, t, e) {
                var n = arguments.length > 2;
                if (null == r && (r = []), f && r.reduce === f) {
                    return e && (o = v.bind(o, e)), n ? r.reduce(o, t) : r.reduce(o);
                }

                if (y(r, function (r, a, i) {
                        n ? t = o.call(e, t, r, a, i) : (t = r, n = !0);
                    }), !n) {
                    throw new TypeError(A);
                }

                return t;
            }, v.find = v.detect = function (r, o, t) {
                var e;
                return C(r, function (r, n, a) {
                        if (o.call(t, r, n, a)) {
                            return e = r, !0;
                        }

                    }), e;
            }, v.filter = v.select = function (r, o, t) {
                var e = [];
                return null == r ? e : w && r.filter === w ? r.filter(o, t) : (y(r, function (r, n, a) {
                    o.call(t, r, n, a) && e.push(r);
                }), e);
            }, v.reject = function (r, o, t) {
                return v.filter(r, function (r, e, n) {
                    return !o.call(t, r, e, n);
                }, t);
            }, v.compact = function (r) {
                return v.filter(r, v.identity);
            }, v.every = v.all = function (o, t, e) {
                t || (t = v.identity);
                var n = !0;
                return null == o ? n : p && o.every === p ? o.every(t, e) : (y(o, function (o, a, i) {
                    if (!(n = n && t.call(e, o, a, i))) {
                        return r;
                    }

                }), !!n);
            };
            var C = v.some = v.any = function (o, t, e) {
                t || (t = v.identity);
                var n = !1;
                return null == o ? n : s && o.some === s ? o.some(t, e) : (y(o, function (o, a, i) {
                    if (n || (n = t.call(e, o, a, i))) {
                        return r;
                    }

                }), !!n);
            };
            v.size = function (r) {
                return null == r ? 0 : r.length === +r.length ? r.length : v.keys(r).length;
            }, v.last = function (r, o, t) {
                if (null != r) {
                    return null == o || t ? r[r.length - 1] : n.call(r, Math.max(r.length - o, 0));
                }

            }, v.after = function (r, o) {
                return function () {
                    if (--r < 1) {
                        return o.apply(this, arguments);
                    }

                };
            }, v.before = function (r, o) {
                var t;
                return function () {
                    return --r > 0 && (t = o.apply(this, arguments)), r <= 1 && (o = null), t;
                };
            };
            var m = function (r) {
                return null == r ? v.identity : v.isFunction(r) ? r : v.property(r);
            };
            var S = function (r) {
                return function (o, t, e) {
                    var n = {};
                    return t = m(t), y(o, function (a, i) {
                            var c = t.call(e, a, i, o);
                            r(n, c, a);
                        }), n;
                };
            };
            v.groupBy = S(function (r, o, t) {
                v.has(r, o) ? r[o].push(t) : r[o] = [t];
            }), v.indexBy = S(function (r, o, t) {
                r[o] = t;
            }), v.sortedIndex = function (r, o, t, e) {
                t = m(t);
                for (var n = t.call(e, o), a = 0, i = r.length; a < i;) {
                    var c = a + i >>> 1;
                    t.call(e, r[c]) < n ? a = c + 1 : i = c;
                }
                return a;
            };
            var C = v.some = v.any = function (o, t, e) {
                t || (t = v.identity);
                var n = !1;
                return null == o ? n : s && o.some === s ? o.some(t, e) : (y(o, function (o, a, i) {
                    if (n || (n = t.call(e, o, a, i))) {
                        return r;
                    }

                }), !!n);
            };
            v.contains = v.include = function (r, o) {
                return null != r && (r.length !== +r.length && (r = v.values(r)), v.indexOf(r, o) >= 0);
            }, v.pluck = function (r, o) {
                return v.map(r, v.property(o));
            }, v.where = function (r, o) {
                return v.filter(r, v.matches(o));
            }, v.findWhere = function (r, o) {
                return v.find(r, v.matches(o));
            }, v.max = function (r, o, t) {
                if (!o && v.isArray(r) && r[0] === +r[0] && r.length < 65535) {
                    return Math.max.apply(Math, r);
                }

                var e = -(1 / 0);
                var n = -(1 / 0);
                return y(r, function (r, a, i) {
                        var c = o ? o.call(t, r, a, i) : r;
                        c > n && (e = r, n = c);
                    }), e;
            }, v.difference = function (r) {
                var t = a.apply(o, n.call(arguments, 1));
                return v.filter(r, function (r) {
                    return !v.contains(t, r);
                });
            }, v.without = function (r) {
                return v.difference(r, n.call(arguments, 1));
            }, v.indexOf = function (r, o, t) {
                if (null == r) {
                    return -1;
                }

                var e = 0;
                var n = r.length;
                if (t) {
                    if ('number' != typeof t) {
                        return e = v.sortedIndex(r, o), r[e] === o ? e : -1;
                    }

                    e = t < 0 ? Math.max(0, n + t) : t;
                }

                if (b && r.indexOf === b) {
                    return r.indexOf(o, t);
                }

                for (; e < n; e++) {
                    if (r[e] === o) {
                        return e;
                    }

                }

                return -1;
            };
            var x = function () {};
            v.bind = function (r, o) {
                var t;
                var e;
                if (u && r.bind === u) {
                    return u.apply(r, n.call(arguments, 1));
                }

                if (!v.isFunction(r)) {
                    throw new TypeError;
                }

                return t = n.call(arguments, 2), e = function () {
                        if (!(this instanceof e)) {
                            return r.apply(o, t.concat(n.call(arguments)));
                        }

                        x.prototype = r.prototype;
                        var a = new x;
                        x.prototype = null;
                        var i = r.apply(a, t.concat(n.call(arguments)));
                        return Object(i) === i ? i : a;
                    };
            }, v.partial = function (r) {
                var o = n.call(arguments, 1);
                return function () {
                    for (var t = 0, e = o.slice(), n = 0, a = e.length; n < a; n++) {
                        e[n] === v && (e[n] = arguments[t++]);

                    }
                    for (; t < arguments.length;) {
                        e.push(arguments[t++]);

                    }
                    return r.apply(this, e);
                };
            }, v.once = v.partial(v.before, 2), v.memoize = function (r, o) {
                var t = {};
                return o || (o = v.identity), function () {
                        var e = o.apply(this, arguments);
                        return v.has(t, e) ? t[e] : t[e] = r.apply(this, arguments);
                    };
            }, v.delay = function (r, o) {
                var t = n.call(arguments, 2);
                return setTimeout(function () {
                    return r.apply(null, t);
                }, o);
            }, v.defer = function (r) {
                return v.delay.apply(v, [r, 1].concat(n.call(arguments, 1)));
            }, v.throttle = function (r, o, t) {
                var e;
                var n;
                var a;
                var i = null;
                var c = 0;
                t || (t = {});
                var d = function () {
                    c = t.leading === !1 ? 0 : v.now(), i = null, a = r.apply(e, n), e = n = null;
                };
                return function () {
                    var f = v.now();
                    c || t.leading !== !1 || (c = f);
                    var h = o - (f - c);
                    return e = this, n = arguments, h <= 0 ? (clearTimeout(i), i = null, c = f, a = r.apply(e, n), e = n = null) : i || t.trailing === !1 || (i = setTimeout(d, h)), a;
                };
            }, v.keys = function (r) {
                if (!v.isObject(r)) {
                    return [];
                }

                if (l) {
                    return l(r);
                }

                var o = [];
                for (var t in r) {
                    v.has(r, t) && o.push(t);
                }
                return o;
            }, v.invert = function (r) {
                for (var o = {}, t = v.keys(r), e = 0, n = t.length; e < n; e++) {
                    o[r[t[e]]] = t[e];

                }
                return o;
            }, v.defaults = function (r) {
                return y(n.call(arguments, 1), function (o) {
                        if (o) {
                            for (var t in o) {
                                void 0 === r[t] && (r[t] = o[t]);
                            }
                        }

                    }), r;
            }, v.extend = function (r) {
                return y(n.call(arguments, 1), function (o) {
                        if (o) {
                            for (var t in o) {
                                r[t] = o[t];
                            }
                        }

                    }), r;
            }, v.pick = function (r) {
                var t = {};
                var e = a.apply(o, n.call(arguments, 1));
                return y(e, function (o) {
                        o in r && (t[o] = r[o]);
                    }), t;
            }, v.omit = function (r) {
                var t = {};
                var e = a.apply(o, n.call(arguments, 1));
                for (var i in r) {
                    v.contains(e, i) || (t[i] = r[i]);
                }
                return t;
            }, v.clone = function (r) {
                return v.isObject(r) ? v.isArray(r) ? r.slice() : v.extend({}, r) : r;
            }, v.isArray = g || function (r) {
                return '[object Array]' == i.call(r);
            }, v.isObject = function (r) {
                return r === Object(r);
            }, y(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (r) {
                v['is' + r] = function (o) {
                    return i.call(o) == '[object ' + r + ']';
                };
            }), v.isArguments(arguments) || (v.isArguments = function (r) {
                return !(!r || !v.has(r, 'callee'));
            }), v.isFunction = function (r) {
                return 'function' == typeof r;
            }, v.isFinite = function (r) {
                return isFinite(r) && !isNaN(parseFloat(r));
            }, v.isNaN = function (r) {
                return v.isNumber(r) && r != +r;
            }, v.isBoolean = function (r) {
                return r === !0 || r === !1 || '[object Boolean]' == i.call(r);
            }, v.isNull = function (r) {
                return null === r;
            }, v.isUndefined = function (r) {
                return void 0 === r;
            }, v.has = function (r, o) {
                return c.call(r, o);
            }, v.identity = function (r) {
                return r;
            }, v.constant = function (r) {
                return function () {
                    return r;
                };
            }, v.property = function (r) {
                return function (o) {
                    return o[r];
                };
            }, v.propertyOf = function (r) {
                return null == r ? function () {} : function (o) {
                    return r[o];
                };
            }, v.matches = function (r) {
                return function (o) {
                    if (o === r) {
                        return !0;
                    }

                    for (var t in r) {
                        if (r[t] !== o[t]) {
                            return !1;
                        }

                    }

                    return !0;
                };
            }, v.now = Date.now || function () {
                return (new Date).getTime();
            }, v.result = function (r, o) {
                if (null != r) {
                    var t = r[o];
                    return v.isFunction(t) ? t.call(r) : t;
                }

            };
            var E = 0;
            return v.uniqueId = function (r) {
                    var o = ++E + '';
                    return r ? r + o : o;
                }, v;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(5), t(1), t(104), t(27), t(16), t(28), t(45), t(103), t(30), t(107), t(110), t(108)], n = function (r, o, t, e, n, a, i, c, d, f, h, w) {
            var p = {};
            return p.log = function () {
                    window.console && ('object' == typeof console.log ? console.log(Array.prototype.slice.call(arguments, 0)) : console.log.apply(console, arguments));
                }, p.between = function (r, o, t) {
                    return Math.max(Math.min(r, t), o);
                }, p.foreach = function (r, o) {
                    var t;
                    var e;
                    for (t in r) {
                        'function' === p.typeOf(r.hasOwnProperty) ? r.hasOwnProperty(t) && (e = r[t], o(t, e)) : (e = r[t], o(t, e));
                    }
                }, p.indexOf = o.indexOf, p.noop = function () {}, p.seconds = r.seconds, p.prefix = r.prefix, p.suffix = r.suffix, o.extend(p, a, i, d, t, c, e, n, f, h, w), p;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1)], n = function (r) {
            var o = [];
            var t = o.slice;
            var e = {
                on: function (r, o, t) {
                    if (!a(this, 'on', r, [o, t]) || !o) {
                        return this;
                    }

                    this._events || (this._events = {});
                    var e = this._events[r] || (this._events[r] = []);
                    return e.push({callback: o, context: t}), this;
                },
                once: function (o, t, e) {
                    if (!a(this, 'once', o, [t, e]) || !t) {
                        return this;
                    }

                    var n = this;
                    var i = r.once(function () {
                        n.off(o, i), t.apply(this, arguments);
                    });
                    return i._callback = t, this.on(o, i, e);
                },
                off: function (o, t, e) {
                    var n;
                    var i;
                    var c;
                    var d;
                    var f;
                    var h;
                    var w;
                    var p;
                    if (!this._events || !a(this, 'off', o, [t, e])) {
                        return this;
                    }

                    if (!o && !t && !e) {
                        return this._events = void 0, this;
                    }

                    for (d = o ? [o] : r.keys(this._events), f = 0, h = d.length; f < h; f++) {
                        if (o = d[f], c = this._events[o]) {
                            if (this._events[o] = n = [], t || e) {
                                for (w = 0, p = c.length; w < p; w++) {
                                    i = c[w], (t && t !== i.callback && t !== i.callback._callback || e && e !== i.context) && n.push(i);
                                }
                            }

                            n.length ||
                            delete this._events[o];
                        }

                    }

                    return this;
                },
                trigger: function (r) {
                    if (!this._events) {
                        return this;
                    }

                    var o = t.call(arguments, 1);
                    if (!a(this, 'trigger', r, o)) {
                        return this;
                    }

                    var e = this._events[r];
                    var n = this._events.all;
                    return e && i(e, o, this), n && i(n, arguments, this), this;
                },
                triggerSafe: function (r) {
                    if (!this._events) {
                        return this;
                    }

                    var o = t.call(arguments, 1);
                    if (!a(this, 'trigger', r, o)) {
                        return this;
                    }

                    var e = this._events[r];
                    var n = this._events.all;
                    return e && c(e, o, this), n && c(n, arguments, this), this;
                }
            };
            var n = /\s+/;
            var a = function (r, o, t, e) {
                if (!t) {
                    return !0;
                }

                if ('object' == typeof t) {
                    for (var a in t) {
                        r[o].apply(r, [a, t[a]].concat(e));
                    }
                    return !1;
                }

                if (n.test(t)) {
                    for (var i = t.split(n), c = 0, d = i.length; c < d; c++) {
                        r[o].apply(r, [i[c]].concat(e));

                    }
                    return !1;
                }

                return !0;
            };
            var i = function (r, o, t) {
                var e;
                var n = -1;
                var a = r.length;
                var i = o[0];
                var c = o[1];
                var d = o[2];
                switch (o.length) {
                    case 0:
                        for (; ++n < a;) {
                            (e = r[n]).callback.call(e.context || t);

                        }
                        return;case 1:
                        for (; ++n < a;) {
                            (e = r[n]).callback.call(e.context || t, i);

                        }
                        return;case 2:
                        for (; ++n < a;) {
                            (e = r[n]).callback.call(e.context || t, i, c);

                        }
                        return;case 3:
                        for (; ++n < a;) {
                            (e = r[n]).callback.call(e.context || t, i, c, d);

                        }
                        return;default:
                        for (; ++n < a;) {
                            (e = r[n]).callback.apply(e.context || t, o);

                        }
                        return;
                }
            };
            var c = function (r, o, t) {
                for (var e, n = -1, a = r.length; ++n < a;) {
                    try {
                        (e = r[n]).callback.apply(e.context || t, o);
                    }
                    catch (i) {}
                }
            };
            return e;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [], n = function () {
            var r = {
                DRAG: 'drag',
                DRAG_START: 'dragStart',
                DRAG_END: 'dragEnd',
                CLICK: 'click',
                DOUBLE_CLICK: 'doubleClick',
                TAP: 'tap',
                DOUBLE_TAP: 'doubleTap',
                OVER: 'over',
                MOVE: 'move',
                OUT: 'out'
            };
            var o = {
                COMPLETE: 'complete',
                ERROR: 'error',
                JWPLAYER_AD_CLICK: 'adClick',
                JWPLAYER_AD_COMPANIONS: 'adCompanions',
                JWPLAYER_AD_COMPLETE: 'adComplete',
                JWPLAYER_AD_ERROR: 'adError',
                JWPLAYER_AD_IMPRESSION: 'adImpression',
                JWPLAYER_AD_META: 'adMeta',
                JWPLAYER_AD_PAUSE: 'adPause',
                JWPLAYER_AD_PLAY: 'adPlay',
                JWPLAYER_AD_SKIPPED: 'adSkipped',
                JWPLAYER_AD_TIME: 'adTime',
                JWPLAYER_CAST_AD_CHANGED: 'castAdChanged',
                JWPLAYER_MEDIA_COMPLETE: 'complete',
                JWPLAYER_READY: 'ready',
                JWPLAYER_MEDIA_SEEK: 'seek',
                JWPLAYER_MEDIA_BEFOREPLAY: 'beforePlay',
                JWPLAYER_MEDIA_BEFORECOMPLETE: 'beforeComplete',
                JWPLAYER_MEDIA_BUFFER_FULL: 'bufferFull',
                JWPLAYER_DISPLAY_CLICK: 'displayClick',
                JWPLAYER_PLAYLIST_COMPLETE: 'playlistComplete',
                JWPLAYER_CAST_SESSION: 'cast',
                JWPLAYER_MEDIA_ERROR: 'mediaError',
                JWPLAYER_MEDIA_FIRST_FRAME: 'firstFrame',
                JWPLAYER_MEDIA_PLAY_ATTEMPT: 'playAttempt',
                JWPLAYER_MEDIA_LOADED: 'loaded',
                JWPLAYER_MEDIA_SEEKED: 'seeked',
                JWPLAYER_SETUP_ERROR: 'setupError',
                JWPLAYER_ERROR: 'error',
                JWPLAYER_PLAYER_STATE: 'state',
                JWPLAYER_CAST_AVAILABLE: 'castAvailable',
                JWPLAYER_MEDIA_BUFFER: 'bufferChange',
                JWPLAYER_MEDIA_TIME: 'time',
                JWPLAYER_MEDIA_TYPE: 'mediaType',
                JWPLAYER_MEDIA_VOLUME: 'volume',
                JWPLAYER_MEDIA_MUTE: 'mute',
                JWPLAYER_MEDIA_META: 'meta',
                JWPLAYER_MEDIA_LEVELS: 'levels',
                JWPLAYER_MEDIA_LEVEL_CHANGED: 'levelsChanged',
                JWPLAYER_CONTROLS: 'controls',
                JWPLAYER_FULLSCREEN: 'fullscreen',
                JWPLAYER_RESIZE: 'resize',
                JWPLAYER_PLAYLIST_ITEM: 'playlistItem',
                JWPLAYER_PLAYLIST_LOADED: 'playlist',
                JWPLAYER_AUDIO_TRACKS: 'audioTracks',
                JWPLAYER_AUDIO_TRACK_CHANGED: 'audioTrackChanged',
                JWPLAYER_CONNECTING: 'connecting',
                JWPLAYER_CONNECT_FAILD: 'connectFaild',
                JWPLAYER_NO_LIVE_STREAM: 'noLiveStream',
                JWPLAYER_ALIVE: 'alive',
                JWPLAYER_LIVE_STOP: 'liveStop',
                JWPLAYER_LOGO_CLICK: 'logoClick',
                JWPLAYER_CAPTIONS_LIST: 'captionsList',
                JWPLAYER_CAPTIONS_CHANGED: 'captionsChanged',
                JWPLAYER_PROVIDER_CHANGED: 'providerChanged',
                JWPLAYER_PROVIDER_FIRST_FRAME: 'providerFirstFrame',
                JWPLAYER_USER_ACTION: 'userAction',
                JWPLAYER_PROVIDER_CLICK: 'providerClick',
                JWPLAYER_VIEW_TAB_FOCUS: 'tabFocus',
                JWPLAYER_CONTROLBAR_DRAGGING: 'scrubbing',
                JWPLAYER_INSTREAM_CLICK: 'instreamClick',
                JWPLAYER_CUEPOINT: 'cuepoint',
                JWPLAYER_SEEK_FORWARD_FORBIDDEN: 'seekForwardForbidden'
            };
            return o.touchEvents = r, o;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1)], n = function (r) {
            function o(r) {
                return !!/[\(,]format=m3u8-/i.test(r) && 'm3u8';
            }
            var t = function (r) {
                return r.replace(/^\s+|\s+$/g, '');
            };
            var e = function (r, o, t) {
                for (r = '' + r, t = t || '0'; r.length < o;) {
                    r = t + r;

                }
                return r;
            };
            var n = function (r, o) {
                for (var t = 0; t < r.attributes.length; t++) {
                    if (r.attributes[t].name && r.attributes[t].name.toLowerCase() === o.toLowerCase()) {
                        return r.attributes[t].value.toString();
                    }

                }

                return '';
            };
            var a = function (r) {
                if (!r || 'rtmp' === r.substr(0, 4)) {
                    return '';
                }

                var t = o(r);
                return t ? t : (r = r.split('?')[0].split('#')[0], r.lastIndexOf('.') > -1 ? r.substr(r.lastIndexOf('.') + 1, r.length).toLowerCase() : void 0);
            };
            var i = function (r) {
                var o = parseInt(r / 3600, 10);
                var t = parseInt(r / 60, 10) % 60;
                var n = r % 60;
                return e(o, 2) + ':' + e(t, 2) + ':' + e(n.toFixed(3), 6);
            };
            var c = function (o) {
                if (r.isNumber(o)) {
                    return o;
                }

                o = o.replace(',', '.');
                var t = o.split(':');
                var e = 0;
                return 's' === o.slice(-1) ? e = parseFloat(o) : 'm' === o.slice(-1) ? e = 60 * parseFloat(o) : 'h' === o.slice(-1) ? e = 3600 * parseFloat(o) : t.length > 1 ? (e = parseFloat(t[t.length - 1]), e += 60 * parseFloat(t[t.length - 2]), 3 === t.length && (e += 3600 * parseFloat(t[t.length - 3]))) : e = parseFloat(o), e;
            };
            var d = function (o, t) {
                return r.map(o, function (r) {
                    return t + r;
                });
            };
            var f = function (o, t) {
                return r.map(o, function (r) {
                    return r + t;
                });
            };
            return {
                trim: t,
                pad: e,
                xmlAttribute: n,
                extension: a,
                hms: i,
                seconds: c,
                suffix: f,
                prefix: d
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [], n = function () {
            return {
                BUFFERING: 'buffering',
                IDLE: 'idle',
                COMPLETE: 'complete',
                PAUSED: 'paused',
                PLAYING: 'playing',
                ERROR: 'error',
                LOADING: 'loading',
                STALLED: 'stalled'
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(3), t(4), t(1), t(2)], n = function (r, o, t, e) {
            function n(r, o) {
                return /touch/.test(r.type) ? (r.originalEvent || r).changedTouches[0]['page' + o] : r['page' + o];
            }
            function a(r) {
                var o = r || window.event;
                return !!(e.isPoorIE() || r instanceof MouseEvent) && ('which' in o ? 3 === o.which : 'button' in o && 2 === o.button);
            }
            function i(r, o, t) {
                var n;
                return n = !e.isPoorIE() && o instanceof MouseEvent || !o.touches && !o.changedTouches ? o : o.touches && o.touches.length ? o.touches[0] : o.changedTouches[0], {type: r, target: o.target, currentTarget: t, pageX: n.pageX, pageY: n.pageY};
            }
            function c(r) {
                (e.isPoorIE() || r instanceof MouseEvent || r instanceof window.TouchEvent) && (r.preventManipulation && r.preventManipulation(), r.cancelable && r.preventDefault && r.preventDefault());
            }
            var d = !t.isUndefined(window.PointerEvent);
            var f = !d && e.isMobile();
            var h = !d && !f;
            var w = e.isFF() && e.isOSX();
            var p = function (r, f) {
                function p(r) {
                    (h || d && 'touch' !== r.pointerType) && v(o.touchEvents.OVER, r);
                }
                function s(r) {
                    (h || d && 'touch' !== r.pointerType) && v(o.touchEvents.MOVE, r);
                }
                function b(t) {
                    (h || d && 'touch' !== t.pointerType && !r.contains(document.elementFromPoint(t.x, t.y))) && v(o.touchEvents.OUT, t);
                }
                function g(o) {
                    y = o.target, S = n(o, 'X'), x = n(o, 'Y'), a(o) || (d ? o.isPrimary && (f.preventScrolling && (A = o.pointerId, r.setPointerCapture(A)), e.addEventListener(r, 'pointermove', l), e.addEventListener(r, 'pointercancel', u), e.addEventListener(r, 'pointerup', u)) : h && (e.addEventListener(document, 'mousemove', l), w && 'object' === o.target.nodeName.toLowerCase() ? e.addEventListener(r, 'click', u) : e.addEventListener(document, 'mouseup', u)), y && (e.addEventListener(y, 'touchmove', l), e.addEventListener(y, 'touchcancel', u), e.addEventListener(y, 'touchend', u)));
                }
                function l(r) {
                    var t = o.touchEvents;
                    var e = 6;
                    if (m) {
                        v(t.DRAG, r);
                    }
                    else {
                        var a = n(r, 'X');
                        var i = n(r, 'Y');
                        var d = a - S;
                        var h = i - x;
                        d * d + h * h > e * e && (v(t.DRAG_START, r), m = !0, v(t.DRAG, r));
                    }
                    f.preventScrolling && c(r);
                }
                function u(t) {
                    var n = o.touchEvents;
                    d ? (f.preventScrolling && r.releasePointerCapture(A), e.removeEventListener(r, 'pointermove', l), e.removeEventListener(r, 'pointercancel', u), e.removeEventListener(r, 'pointerup', u)) : h && (e.removeEventListener(document, 'mousemove', l), e.removeEventListener(document, 'mouseup', u)), y && (e.removeEventListener(y, 'touchmove', l), e.removeEventListener(y, 'touchcancel', u), e.removeEventListener(y, 'touchend', u)), m ? v(n.DRAG_END, t) : f.directSelect && t.target !== r || t.type.indexOf('cancel') !== -1 || (d && t instanceof window.PointerEvent ? 'touch' === t.pointerType ? v(n.TAP, t) : v(n.CLICK, t) : h ? v(n.CLICK, t) : (v(n.TAP, t), c(t))), y = null, m = !1;
                }
                function v(r, e) {
                    var n;
                    if (f.enableDoubleTap && (r === o.touchEvents.CLICK || r === o.touchEvents.TAP)) {
                        if (t.now() - E < T) {
                            var a = r === o.touchEvents.CLICK ? o.touchEvents.DOUBLE_CLICK : o.touchEvents.DOUBLE_TAP;
                            n = i(a, e, C), k.trigger(a, n), E = 0;
                        }
                        else {
                            E = t.now();
                        }
                    }

                    n = i(r, e, C), k.trigger(r, n);
                }
                var y;
                var A;
                var C = r;
                var m = !1;
                var S = 0;
                var x = 0;
                var E = 0;
                var T = 300;
                f = f || {}, d ? (e.addEventListener(r, 'pointerdown', g), f.useHover && (e.addEventListener(r, 'pointerover', p), e.addEventListener(r, 'pointerout', b)), f.useMove && e.addEventListener(r, 'pointermove', s)) : h && (e.addEventListener(r, 'mousedown', g), f.useHover && (e.addEventListener(r, 'mouseover', p), e.addEventListener(r, 'mouseout', b)), f.useMove && e.addEventListener(r, 'mousemove', s)), e.addEventListener(r, 'touchstart', g);
                var k = this;
                return this.triggerEvent = v, this.destroy = function () {
                        e.removeEventListener(r, 'touchstart', g), e.removeEventListener(r, 'mousedown', g), y && (e.removeEventListener(y, 'touchmove', l), e.removeEventListener(y, 'touchcancel', u), e.removeEventListener(y, 'touchend', u)), d && (f.preventScrolling && r.releasePointerCapture(A), e.removeEventListener(r, 'pointerover', p), e.removeEventListener(r, 'pointerdown', g), e.removeEventListener(r, 'pointermove', l), e.removeEventListener(r, 'pointermove', s), e.removeEventListener(r, 'pointercancel', u), e.removeEventListener(r, 'pointerout', b), e.removeEventListener(r, 'pointerup', u)), e.removeEventListener(r, 'click', u), e.removeEventListener(r, 'mouseover', p), e.removeEventListener(r, 'mousemove', s), e.removeEventListener(r, 'mouseout', b), e.removeEventListener(document, 'mousemove', l), e.removeEventListener(document, 'mouseup', u);
                    }, this;
            };
            return t.extend(p.prototype, r), p;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    },, function (r, o, t) {
        r.exports = t(59).default;
    }, function (r, o) {
        'use strict';
        function t(r) {
            return h[r];
        }
        function e(r) {
            for (var o = 1; o < arguments.length; o++) {
                for (var t in arguments[o]) {
                    Object.prototype.hasOwnProperty.call(arguments[o], t) && (r[t] = arguments[o][t]);

                }
            }
            return r;
        }
        function n(r, o) {
            for (var t = 0, e = r.length; t < e; t++) {
                if (r[t] === o) {
                    return t;
                }

            }

            return -1;
        }
        function a(r) {
            if ('string' != typeof r) {
                if (r && r.toHTML) {
                    return r.toHTML();
                }

                if (null == r) {
                    return '';
                }

                if (!r) {
                    return r + '';
                }

                r = '' + r;
            }

            return p.test(r) ? r.replace(w, t) : r;
        }
        function i(r) {
            return !r && 0 !== r || !(!g(r) || 0 !== r.length);
        }
        function c(r) {
            var o = e({}, r);
            return o._parent = r, o;
        }
        function d(r, o) {
            return r.path = o, r;
        }
        function f(r, o) {
            return (r ? r + '.' : '') + o;
        }
        o.__esModule = !0, o.extend = e, o.indexOf = n, o.escapeExpression = a, o.isEmpty = i, o.createFrame = c, o.blockParams = d, o.appendContextPath = f;
        var h = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#x27;',
            '`': '&#x60;',
            '=': '&#x3D;'
        };
        var w = /[&<>"'`=]/g;
        var p = /[&<>"'`=]/;
        var s = Object.prototype.toString;
        o.toString = s;
        var b = function (r) {
            return 'function' == typeof r;
        };
        b(/x/) && (o.isFunction = b = function (r) {
            return 'function' == typeof r && '[object Function]' === s.call(r);
        }), o.isFunction = b;
        var g = Array.isArray || function (r) {
            return !(!r || 'object' != typeof r) && '[object Array]' === s.call(r);
        };
        o.isArray = g;
    },, function (r, o) {
        'use strict';
        function t(r, o) {
            var n = o && o.loc;
            var a = void 0;
            var i = void 0;
            n && (a = n.start.line, i = n.start.column, r += ' - ' + a + ':' + i);
            for (var c = Error.prototype.constructor.call(this, r), d = 0; d < e.length; d++) {
                this[e[d]] = c[e[d]];

            }
            Error.captureStackTrace && Error.captureStackTrace(this, t), n && (this.lineNumber = a, this.column = i);
        }
        o.__esModule = !0;
        var e = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
        t.prototype = new Error, o.default = t, r.exports = o.default;
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(5)], n = function (r) {
            return {
                localName: function (r) {
                    return r ? r.localName ? r.localName : r.baseName ? r.baseName : '' : '';
                },
                textContent: function (o) {
                    return o ? o.textContent ? r.trim(o.textContent) : o.text ? r.trim(o.text) : '' : '';
                },
                getChildNode: function (r, o) {
                    return r.childNodes[o];
                },
                numChildren: function (r) {
                    return r.childNodes ? r.childNodes.length : 0;
                }
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(24), t(43), t(101), t(1)], n = function (r, o, e, n) {
            function a(r) {
                this.providers = o.slice(), this.config = r || {}, this.reorderProviders();
            }
            return a.registerProvider = function (t) {
                    var a = t.getName().name;
                    if (!e[a]) {
                        if (!n.find(o, n.matches({
                                name: a
                            }))) {
                            if (!n.isFunction(t.supports)) {
                                throw {
                                    message: 'Tried to register a provider with an invalid object'
                                };
                            }

                            o.unshift({name: a, supports: t.supports});
                        }

                        var i = function () {};
                        i.prototype = r, t.prototype = new i, e[a] = t;
                    }

                }, a.load = function (r) {
                    return Promise.all(n.map(r, function (r) {
                        return new Promise(function (o) {
                            switch (r.name) {
                                case 'html5':
                                    !function (r) {
                                        o(t(26));
                                    }(t);
                                    break;case 'flash':
                                    !function (r) {
                                        o(t(25));
                                    }(t);
                                    break;default:
                                    o();
                            }
                        }).then(function (r) {
                            r && a.registerProvider(r);
                        });
                    }));
                }, n.extend(a.prototype, {
                    reorderProviders: function () {
                        if ('flash' === this.config.primary) {
                            var r = n.indexOf(this.providers, n.findWhere(this.providers, {
                                name: 'flash'
                            }));
                            var o = this.providers.splice(r, 1)[0];
                            var t = n.indexOf(this.providers, n.findWhere(this.providers, {
                                name: 'html5'
                            }));
                            this.providers.splice(t, 0, o);
                        }

                    },
                    providerSupports: function (r, o) {
                        return r.supports(o);
                    },
                    required: function (r, o) {
                        return r = r.slice(), n.compact(n.map(this.providers, function (t) {
                                for (var e = !1, n = r.length; n--;) {
                                    var a = r[n];
                                    var i = t.supports(a.sources[0], o);
                                    i && r.splice(n, 1), e = e || i;
                                }
                                if (e) {
                                    return t;
                                }

                            }));
                    },
                    choose: function (r) {
                        r = n.isObject(r) ? r : {};
                        for (var o = this.providers.length, t = 0; t < o; t++) {
                            var a = this.providers[t];
                            if (this.providerSupports(a, r)) {
                                var i = o - t - 1;
                                return {priority: i, name: a.name, type: r.type, provider: e[a.name]};
                            }

                        }
                        return null;
                    }
                }), a;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [], n = function () {
            return {repo: 'https://bce.bdstatic.com/jwplayer/', SkinsIncluded: ['seven'], SkinsLoadable: ['beelden', 'bekle', 'five', 'glow', 'roundster', 'six', 'stormtrooper', 'vapor'], dvrSeekLimit: -25};
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(5), t(34)], n = function (r, o) {
            function t(r) {
                r = r.split('-');
                for (var o = 1; o < r.length; o++) {
                    r[o] = r[o].charAt(0).toUpperCase() + r[o].slice(1);

                }
                return r.join('');
            }
            function e(o, t, e) {
                if ('' === t || void 0 === t || null === t) {
                    return '';
                }

                var n = e ? ' !important' : '';
                return 'string' == typeof t && isNaN(t) ? /png|gif|jpe?g/i.test(t) && t.indexOf('url') < 0 ? 'url(' + t + ')' : t + n : 0 === t || 'z-index' === o || 'opacity' === o ? '' + t + n : /color/i.test(o) ? '#' + r.pad(t.toString(16).replace(/^0x/i, ''), 6) + n : Math.ceil(t) + 'px' + n;
            }
            var n = function (r, t, e) {
                e = e || 'all-players';
                var n = '';
                if ('object' == typeof t) {
                    var i = document.createElement('div');
                    a(i, t), n = '{' + i.style.cssText + '}';
                }
                else {
                    'string' == typeof t && (n = t);
                }
                o.style([[r, r + n]], e);
            };
            var a = function (r, o) {
                if (void 0 !== r && null !== r) {
                    void 0 === r.length && (r = [r]);
                    var n;
                    var a = {};
                    for (n in o) {
                        a[n] = e(n, o[n]);
                    }
                    for (var i = 0; i < r.length; i++) {
                        var c;
                        var d = r[i];
                        if (void 0 !== d && null !== d) {
                            for (n in a) {
                                c = t(n), d.style[c] !== a[n] && (d.style[c] = a[n]);
                            }
                        }

                    }
                }

            };
            var i = function (r, o) {
                a(r, {transform: o, webkitTransform: o, msTransform: o, mozTransform: o, oTransform: o});
            };
            var c = function (r, o) {
                a(r, {animation: o, webkitAnimation: o, msAnimation: o, mozAnimation: o, oAnimation: o});
            };
            var d = function (r, o) {
                var t = 'rgb';
                r ? (r = String(r).replace('#', ''), 3 === r.length && (r = r.charAt(0) + r.charAt(0) + r.charAt(1) + r.charAt(1) + r.charAt(2) + r.charAt(2))) : r = '000000';
                var e = [parseInt(r.substr(0, 2), 16), parseInt(r.substr(2, 2), 16), parseInt(r.substr(4, 2), 16)];
                return void 0 !== o && 100 !== o && (t += 'a', e.push(o / 100)), t + '(' + e.join(',') + ')';
            };
            return {
                css: n,
                style: a,
                clearCss: o.clear,
                transform: i,
                animation: c,
                hexToRgba: d
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(44), t(2)], n = function (r, o) {
            var t = r.extend({
                constructor: function (r) {
                    this.el = document.createElement('div'), this.el.className = 'jw-icon jw-icon-tooltip ' + r + ' jw-button-color jw-reset jw-hidden', this.container = document.createElement('div'), this.container.className = 'jw-overlay jw-reset', this.openClass = 'jw-open', this.componentType = 'tooltip', this.el.appendChild(this.container);
                },
                addContent: function (r) {
                    this.content && this.removeContent(), this.content = r, this.container.appendChild(r);
                },
                removeContent: function () {
                    this.content && (this.container.removeChild(this.content), this.content = null);
                },
                hasContent: function () {
                    return !!this.content;
                },
                element: function () {
                    return this.el;
                },
                openTooltip: function (r) {
                    this.trigger('open-' + this.componentType, r, {
                        isOpen: !0
                    }), this.isOpen = !0, o.toggleClass(this.el, this.openClass, this.isOpen);
                },
                closeTooltip: function (r) {
                    this.trigger('close-' + this.componentType, r, {
                        isOpen: !1
                    }), this.isOpen = !1, o.toggleClass(this.el, this.openClass, this.isOpen);
                },
                toggleOpenState: function (r) {
                    this.isOpen ? this.closeTooltip(r) : this.openTooltip(r);
                }
            });
            return t;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(5)], n = function (r) {
            var o = {};
            var t = o.pluginPathType = {ABSOLUTE: 0, RELATIVE: 1, CDN: 2};
            return o.getPluginPathType = function (o) {
                    if ('string' == typeof o) {
                        o = o.split('?')[0];
                        var e = o.indexOf('://');
                        if (e > 0) {
                            return t.ABSOLUTE;
                        }

                        var n = o.indexOf('/');
                        var a = r.extension(o);
                        return !(e < 0 && n < 0) || a && isNaN(a) ? t.RELATIVE : t.CDN;
                    }

                }, o.getPluginName = function (r) {
                    return r.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/, '$2');
                }, o.getPluginVersion = function (r) {
                    return r.replace(/[^-]*-?([^\.]*).*$/, '$1');
                }, o;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [], n = function () {
            return '2.1.2';
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(14), t(36), t(90), t(1), t(3), t(109), t(4), t(6)], n = function (r, o, t, e, n, a, i, c, d) {
            var f = function () {
                function i(r, o) {
                    var t = n.extend({}, o, {
                        type: r
                    });
                    switch (r) {
                        case 'flashThrottle':
                            var e = 'resume' !== o.state;
                            this.set('flashThrottle', e), this.set('flashBlocked', e);
                            break;case 'flashBlocked':
                            return void this.set('flashBlocked', !0);case 'flashUnblocked':
                            return void this.set('flashBlocked', !1);case 'volume':
                        case 'mute':
                            return void this.set(r, o[r]);case c.JWPLAYER_MEDIA_TYPE:
                            return void (this.mediaModel.get('mediaType') !== o.mediaType && (this.mediaModel.set('mediaType', o.mediaType), this.mediaController.trigger(r, t)));case c.JWPLAYER_PLAYER_STATE:
                            return void this.mediaModel.set('state', o.newstate);case c.JWPLAYER_MEDIA_BUFFER:
                            this.set('buffer', o.bufferPercent);case c.JWPLAYER_MEDIA_META:
                            var a = o.duration;
                            n.isNumber(a) && (this.mediaModel.set('duration', a), this.set('duration', a));
                            break;case c.JWPLAYER_MEDIA_BUFFER_FULL:
                            this.mediaModel.get('playAttempt') ? this.playVideo() : this.mediaModel.on('change:playAttempt', function () {
                                this.playVideo();
                            }, this);
                            break;case c.JWPLAYER_MEDIA_TIME:
                            this.mediaModel.set('position', o.position), this.set('position', o.position), n.isNumber(o.duration) && (this.mediaModel.set('duration', o.duration), this.set('duration', o.duration), o.duration > 0 && this.recordMediaPosition(o.position, o.duration));
                            break;case c.JWPLAYER_PROVIDER_CHANGED:
                            this.set('provider', w.getName());
                            break;case c.JWPLAYER_MEDIA_LEVELS:
                            this.setQualityLevel(o.currentQuality, o.levels), this.mediaModel.set('levels', o.levels);
                            break;case c.JWPLAYER_MEDIA_LEVEL_CHANGED:
                            this.setQualityLevel(o.currentQuality, o.levels), this.persistQualityLevel(o.currentQuality, o.levels);
                            break;case c.JWPLAYER_AUDIO_TRACKS:
                            this.setCurrentAudioTrack(o.currentTrack, o.tracks), this.mediaModel.set('audioTracks', o.tracks);
                            break;case c.JWPLAYER_AUDIO_TRACK_CHANGED:
                            this.setCurrentAudioTrack(o.currentTrack, o.tracks);
                            break;case c.JWPLAYER_CONNECTING:
                            this.trigger('connecting');
                            break;case c.JWPLAYER_CONNECT_FAILD:
                            this.trigger('connectFaild');
                            break;case c.JWPLAYER_ALIVE:
                            this.trigger('alive');
                            break;case c.JWPLAYER_NO_LIVE_STREAM:
                            this.trigger('noLiveStream');
                            break;case c.JWPLAYER_LIVE_STOP:
                            this.trigger('liveStop');
                            break;case 'stop':
                            this.set('duration', 0);
                            break;case 'subtitlesTrackChanged':
                            this.setVideoSubtitleTrack(o.currentTrack, o.tracks);
                            break;case 'visualQuality':
                            var i = n.extend({}, o);
                            this.mediaModel.set('visualQuality', i);
                    }
                    this.mediaController.trigger(r, t);
                }
                var f;
                var w;
                var p;
                var s;
                var b = this;
                var g = r.noop;
                this.mediaController = n.extend({}, a), this.mediaModel = new h, e.model(this), this.set('mediaModel', this.mediaModel), this.setup = function (o) {
                    return s = new t, n.extend(this.attributes, o, {
                            item: 0,
                            state: d.IDLE,
                            flashBlocked: !1,
                            fullscreen: !1,
                            compactUI: !1,
                            scrubbing: !1,
                            duration: 0,
                            position: 0,
                            buffer: 0
                        }), r.isMobile() && !o.mobileSdk && this.set('autostart', !1), this.updateProviders(), this;
                }, this.getConfiguration = function () {
                    return n.omit(this.clone(), ['mediaModel']);
                }, this.updateProviders = function () {
                    f = new o(this.getConfiguration());
                }, this.recordMediaPosition = function (r, o) {
                    var t = p && p.sources && p.sources[0];
                    t && t.file && !isNaN(r) && !isNaN(o) && o > 0 && isFinite(o) !== !1 && n.each(p.sources, function (t) {
                        r < o && r > 2 ? s.setItem('filePostion.' + t.file, r) : o === r && s.clearItem('filePostion.' + t.file);
                    });
                }, this.getLastPosition = function (o) {
                    var t = 0;
                    return o && 'array' === r.typeOf(o.sources) && o.sources.length > 0 && s.getItem('filePostion.' + o.sources[0].file) && (t = s.getItem('filePostion.' + o.sources[0].file)), t;
                }, this.setQualityLevel = function (r, o) {
                    r > -1 && o.length > 1 && this.mediaModel.set('currentLevel', parseInt(r, 10));
                }, this.setCurrentQuality = function (o) {
                    if (r.isMutipleHls(p.sources)) {
                        this.stopVideo();
                        var t = {allSources: p.allSources, file: p.sources[o].file, tracks: p.tracks};
                        var e = [];
                        e[0] = p.sources[o];
                        for (var n = 0; n < p.sources.length; n++) {
                            n !== o && e.push(p.sources[n]);

                        }
                        t.sources = e, this.loadVideo(t);
                    }

                    w.setCurrentQuality(o);
                }, this.persistQualityLevel = function (r, o) {
                    var t = o[r] || {};
                    var e = t.label;
                    this.set('qualityLabel', e);
                }, this.setCurrentAudioTrack = function (r, o) {
                    r > -1 && o.length > 0 && r < o.length && this.mediaModel.set('currentAudioTrack', parseInt(r, 10));
                }, this.onMediaContainer = function () {
                    var r = this.get('mediaContainer');
                    g.setContainer(r);
                }, this.changeVideoProvider = function (r) {
                    var o = function () {
                        this.setVolume(this.get('volume'));
                    };
                    if (this.off('change:mediaContainer', this.onMediaContainer), w && (w.off(null, null, this), w.getContainer() && w.remove()), !r) {
                        return w = g = r, void this.set('provider', void 0);
                    }

                    g = new r(b.get('id'), b.getConfiguration());
                    var t = this.get('mediaContainer');
                    t ? g.setContainer(t) : this.once('change:mediaContainer', this.onMediaContainer), this.once('change:provider', o, this), this.set('provider', g.getName()), g.getName().name.indexOf('flash') === -1 && (this.set('flashThrottle', void 0), this.set('flashBlocked', !1)), w = g, w.volume(b.get('volume')), w.mute(b.get('mute')), w.on('all', i, this);
                }, this.destroy = function () {
                    w && (w.off(null, null, this), w.destroy());
                }, this.getVideo = function () {
                    return w;
                }, this.setFullscreen = function (r) {
                    r = !!r, r !== b.get('fullscreen') && b.set('fullscreen', r);
                }, this.chooseProvider = function (r) {
                    return f.choose(r).provider;
                }, this.setActiveItem = function (r) {
                    this.mediaModel.off(), this.mediaModel = new h, this.set('mediaModel', this.mediaModel), this.set('position', r.starttime || 0), this.set('duration', r.duration || 0), this.setProvider(r);
                }, this.setProvider = function (r) {
                    var o = r && r.sources && r.sources[0];
                    if (void 0 !== o) {
                        p = r;
                        var t = this.chooseProvider(o);
                        t && g instanceof t || b.changeVideoProvider(t), g && (g.init && g.init(r), this.trigger('itemReady', r));
                    }

                }, this.getCurrentItem = function () {
                    return p;
                }, this.getProviders = function () {
                    return f;
                }, this.resetProvider = function () {
                    g = null;
                }, this.setVolume = function (r) {
                    r = Math.round(r), r = w && 'html5' === w.getName().name ? Math.min(r, 100) : Math.min(r, 500), b.set('volume', r), w && w.volume(r);
                    var o = 0 === r;
                    o !== b.get('mute') && b.setMute(o);
                }, this.enableGPU = function () {
                    w.enableGPU();
                }, this.disableGPU = function () {
                    w.disableGPU();
                }, this.setMute = function (o) {
                    if (r.exists(o) || (o = !this.get('mute')), this.set('mute', o), w && w.mute(o), !o) {
                        var t = Math.max(10, this.get('volume'));
                        this.setVolume(t);
                    }

                }, this.loadVideo = function (o) {
                    if (!o) {
                        var t = this.get('item');
                        o = this.get('playlist')[t];
                    }

                    o.starttime = 0, this.attributes.startseek && !r.isMobile() && this.getLastPosition(o) > 0 && (o.starttime = this.getLastPosition(o),
                    this.trigger('loadVideoSuccess')), this.set('position', o.starttime || 0), this.set('duration', o.duration || 0), this.mediaModel.set('playAttempt', !0), this.mediaController.trigger(c.JWPLAYER_MEDIA_PLAY_ATTEMPT, {
                        playReason: this.get('playReason')
                    }), w.load(o);
                }, this.stopVideo = function () {
                    w && w.stop();
                }, this.playVideo = function () {
                    w.play();
                }, this.persistCaptionsTrack = function () {
                    var r = this.get('captionsTrack');
                    r ? this.set('captionLabel', r.label) : this.set('captionLabel', 'Off');
                }, this.setVideoSubtitleTrack = function (r, o) {
                    this.set('captionsIndex', r), r && o && r <= o.length && o[r - 1].data && this.set('captionsTrack', o[r - 1]), w && w.setSubtitlesTrack && w.setSubtitlesTrack(r);
                }, this.persistVideoSubtitleTrack = function (r) {
                    this.setVideoSubtitleTrack(r), this.persistCaptionsTrack();
                };
            };
            var h = f.MediaModel = function () {
                this.set('state', d.IDLE);
            };
            return n.extend(f.prototype, i), n.extend(h.prototype, i), f;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(6)], n = function (r) {
            function o(o) {
                return o === r.COMPLETE || o === r.ERROR ? r.IDLE : o;
            }
            return function (r, t, e) {
                if (t = o(t), e = o(e), t !== e) {
                    var n = t.replace(/(?:ing|d)$/, '');
                    var a = {type: n, newstate: t, oldstate: e, reason: r.mediaModel.get('state')};
                    'play' === n && (a.playReason = r.get('playReason')), this.trigger(n, a);
                }

            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(5)], n = function (r, o) {
            function t(r) {
                var o = {};
                var t = r.split('\r\n');
                1 === t.length && (t = r.split('\n'));var n = 1;
                if (t[0].indexOf(' --> ') > 0 && (n = 0), t.length > n + 1 && t[n + 1]) {
                    var a = t[n];
                    var i = a.indexOf(' --> ');
                    i > 0 && (o.begin = e(a.substr(0, i)), o.end = e(a.substr(i + 5)), o.text = t.slice(n + 1).join('<br/>'));
                }

                return o;
            }
            var e = r.seconds;
            return function (r) {
                var e = [];
                r = o.trim(r);
                var n = r.split('\r\n\r\n');
                1 === n.length && (n = r.split('\n\n'));
                for (var a = 0; a < n.length; a++) {
                    if ('WEBVTT' !== n[a]) {
                        var i = t(n[a]);
                        i.text && e.push(i);
                    }

                }

                return e;
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(99), t(100), t(40), t(18)], n = function (r, o, t, e) {
            var n = {};
            var a = {};
            var i = function (t, e) {
                return a[t] = new r(new o(n), e), a[t];
            };
            var c = function (r, o, a, i) {
                var c = e.getPluginName(r);
                n[c] || (n[c] = new t(r)), n[c].registerPlugin(r, o, a, i);
            };
            return {loadPlugins: i, registerPlugin: c};
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(4), t(6), t(1)], n = function (r, o, t, e) {
            var n = r.noop;
            var a = e.constant(!1);
            var i = {
                supports: a,
                play: n,
                load: n,
                stop: n,
                volume: n,
                mute: n,
                seek: n,
                resize: n,
                remove: n,
                destroy: n,
                setVisibility: n,
                setFullscreen: a,
                getFullscreen: n,
                getContainer: n,
                setContainer: a,
                getName: n,
                getQualityLevels: n,
                getCurrentQuality: n,
                setCurrentQuality: n,
                getAudioTracks: n,
                getCurrentAudioTrack: n,
                setCurrentAudioTrack: n,
                checkComplete: n,
                setControls: n,
                attachMedia: n,
                detachMedia: n,
                setState: function (r) {
                    var e = this.state || t.IDLE;
                    this.state = r, r !== e && this.trigger(o.JWPLAYER_PLAYER_STATE, {
                        newstate: r
                    });
                },
                sendMediaType: function (r) {
                    var t = r[0].type;
                    var e = 'oga' === t || 'aac' === t || 'mp3' === t || 'mpeg' === t || 'vorbis' === t;
                    this.trigger(o.JWPLAYER_MEDIA_TYPE, {
                        mediaType: e ? 'audio' : 'video'
                    });
                }
            };
            return i;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(1), t(4), t(6), t(105), t(24), t(3)], n = function (r, o, t, e, n, a, i) {
            function c(r) {
                return r + '_swf_' + h++;
            }
            function d(o) {
                var t = document.createElement('a');
                t.href = o.flashplayer;var e = t.hostname === window.location.host;
                return r.isChrome() && !e;
            }
            function f(f, h) {
                function w(r) {
                    if (z) {
                        for (var o = 0; o < r.length; o++) {
                            var t = r[o];
                            if (t.bitrate) {
                                var e = Math.round(t.bitrate / 1e3);
                                t.label = p(e);
                            }

                        }
                    }
                }
                function p(r) {
                    var o = z[r];
                    if (!o) {
                        for (var t = 1 / 0, e = z.bitrates.length; e--;) {
                            var n = Math.abs(z.bitrates[e] - r);
                            if (n > t) {
                                break;
                            }

                            t = n;
                        }
                        o = z.labels[z.bitrates[e + 1]], z[r] = o;
                    }

                    return o;
                }
                function s() {
                    var r = h.hlslabels;
                    if (!r) {
                        return null;
                    }

                    var o = {};
                    var t = [];
                    for (var e in r) {
                        var n = parseFloat(e);
                        if (!isNaN(n)) {
                            var a = Math.round(n);
                            o[a] = r[e], t.push(a);
                        }

                    }
                    return 0 === t.length ? null : (t.sort(function (r, o) {
                        return r - o;
                    }), {labels: o, bitrates: t});
                }
                function b() {
                    var t = [];
                    return L ? t = L : (t = C ? C.sources : [], L = t), !!r.isMutipleHls(t) && o.map(t, function (r, o) {
                            return {
                                label: r.label || o
                            };
                        });
                }
                function g() {
                    m = setTimeout(function () {
                        i.trigger.call(O, 'flashBlocked');
                    }, 4e3), y.once('embedded', function () {
                        u(), i.trigger.call(O, 'flashUnblocked');
                    }, O);
                }
                function l() {
                    u(), g();
                }
                function u() {
                    clearTimeout(m), r.removeEventListener(window, 'focus', l, !1);
                }
                var v;
                var y;
                var A;
                var C = null;
                var m = -1;
                var S = !1;
                var x = -1;
                var E = null;
                var T = -1;
                var k = null;
                var I = !0;
                var J = !1;
                var L = null;
                var O = this;
                var j = function () {
                    return y && y.__ready;
                };
                var q = function () {
                    y && y.triggerFlash.apply(y, arguments);
                };
                var z = s();
                o.extend(this, i, {
                    init: function (r) {
                        r.preload && 'none' !== r.preload && !h.autostart && (C = r);
                    },
                    load: function (r) {
                        C = r, S = !1, this.setState(e.LOADING), q('load', r), r.sources.length && 'hls' !== r.sources[0].type && this.sendMediaType(r.sources);
                    },
                    play: function () {
                        q('play');
                    },
                    pause: function () {
                        q('pause'), this.setState(e.PAUSED);
                    },
                    stop: function () {
                        q('stop'), x = -1, C = null, L = null, this.setState(e.IDLE), this.trigger('stop');
                    },
                    seek: function (r) {
                        q('seek', r);
                    },
                    volume: function (r) {
                        if (o.isNumber(r)) {
                            var t = Math.min(Math.max(0, r), 100);
                            j() && q('volume', t);
                        }

                    },
                    enableGPU: function () {
                        q('enableGPU');
                    },
                    disableGPU: function () {
                        q('disableGPU');
                    },
                    mute: function (r) {
                        j() && q('mute', r);
                    },
                    setState: function () {
                        return a.setState.apply(this, arguments);
                    },
                    checkComplete: function () {
                        return S;
                    },
                    attachMedia: function () {
                        I = !0, S && (this.setState(e.COMPLETE), this.trigger(t.JWPLAYER_MEDIA_COMPLETE), S = !1);
                    },
                    detachMedia: function () {
                        return I = !1, null;
                    },
                    getSwfObject: function (r) {
                        var o = r.getElementsByTagName('object')[0];
                        return o ? (o.off(null, null, this), o) : n.embed(h.flashplayer, r, c(f), h.wmode, h.playlistItem);
                    },
                    getContainer: function () {
                        return v;
                    },
                    setContainer: function (n) {
                        if (v !== n) {
                            v = n, y = this.getSwfObject(n), document.hasFocus() ? g() : r.addEventListener(window, 'focus', l, !1), y.once('ready', function () {
                                u(), y.once('pluginsLoaded', function () {
                                    y.queueCommands = !1, q('setupCommandQueue', y.__commandQueue), y.__commandQueue = [];
                                });
                                var r = o.extend({}, h);
                                var e = y.triggerFlash('setup', r);
                                e === y ? y.__ready = !0 : this.trigger(t.JWPLAYER_MEDIA_ERROR, e), C && q('init', C);
                            }, this);
                            var a = [t.JWPLAYER_MEDIA_META, t.JWPLAYER_MEDIA_ERROR, t.JWPLAYER_MEDIA_SEEK, t.JWPLAYER_MEDIA_SEEKED, 'subtitlesTracks', 'subtitlesTrackChanged', 'subtitlesTrackData', 'mediaType'];
                            var c = [t.JWPLAYER_MEDIA_BUFFER, t.JWPLAYER_MEDIA_TIME];
                            var f = [t.JWPLAYER_MEDIA_BUFFER_FULL];
                            y.on(t.JWPLAYER_MEDIA_LEVELS, function (r) {
                                r.levels = b() || r.levels, b() && (r.levels = b(), x !== -1 && (r.currentQuality = x)), w(r.levels), x = r.currentQuality, E = r.levels, this.trigger(r.type, r);
                            }, this), y.on(t.JWPLAYER_MEDIA_LEVEL_CHANGED, function (r) {
                                w(r.levels), x = r.currentQuality, E = r.levels, this.trigger(r.type, r);
                            }, this), y.on(t.JWPLAYER_AUDIO_TRACKS, function (r) {
                                T = r.currentTrack, k = r.tracks, this.trigger(r.type, r);
                            }, this), y.on(t.JWPLAYER_AUDIO_TRACK_CHANGED, function (r) {
                                T = r.currentTrack, k = r.tracks, this.trigger(r.type, r);
                            }, this), y.on(t.JWPLAYER_PLAYER_STATE, function (r) {
                                var o = r.newstate;
                                o !== e.IDLE && this.setState(o);
                            }, this), y.on(c.join(' '), function (r) {
                                'Infinity' === r.duration && (r.duration = 1 / 0), this.trigger(r.type, r);
                            }, this), y.on(a.join(' '), function (r) {
                                this.trigger(r.type, r);
                            }, this), y.on(f.join(' '), function (r) {
                                this.trigger(r.type);
                            }, this), y.on(t.JWPLAYER_CONNECTING, function (r) {
                                i.trigger.call(O, 'connecting', r);
                            }, this), y.on(t.JWPLAYER_CONNECT_FAILD, function (r) {
                                i.trigger.call(O, 'connectFaild', r), i.trigger.call(O, t.JWPLAYER_MEDIA_ERROR, {
                                    message: '连接已断开，请稍后重试'
                                });
                            }, this), y.on(t.JWPLAYER_ALIVE, function (r) {
                                i.trigger.call(O, 'alive', r);
                            }, this), y.on(t.JWPLAYER_NO_LIVE_STREAM, function (r) {
                                i.trigger.call(O, 'noLiveStream', r);
                            }, this), y.on(t.JWPLAYER_LIVE_STOP, function (r) {
                                i.trigger.call(O, 'liveStop', r);
                            }, this), y.on(t.JWPLAYER_CUEPOINT, function (r) {
                                i.trigger.call(O, r.name, r.args);
                            }, this), y.on(t.JWPLAYER_MEDIA_BEFORECOMPLETE, function (r) {
                                S = !0, this.trigger(r.type), I === !0 && (S = !1);
                            }, this), y.on(t.JWPLAYER_MEDIA_COMPLETE, function (r) {
                                S || (this.setState(e.COMPLETE), this.trigger(r.type));
                            }, this), y.on('visualQuality', function (r) {
                                r.reason = r.reason || 'api', this.trigger('visualQuality', r), this.trigger(t.JWPLAYER_PROVIDER_FIRST_FRAME, {});
                            }, this), y.on(t.JWPLAYER_PROVIDER_CHANGED, function (r) {
                                A = r.message, this.trigger(t.JWPLAYER_PROVIDER_CHANGED, r);
                            }, this), y.on(t.JWPLAYER_ERROR, function (o) {
                                r.log('Error playing media: %o %s', o.code, o.message, o), this.trigger(t.JWPLAYER_MEDIA_ERROR, o);
                            }, this), d(h) && y.on('throttle', function (r) {
                                u(), 'resume' === r.state ? i.trigger.call(O, 'flashThrottle', r) : m = setTimeout(function () {
                                    i.trigger.call(O, 'flashThrottle', r);
                                }, 250);
                            }, this);
                        }

                    },
                    remove: function () {
                        x = -1, E = null, n.remove(y);
                    },
                    setVisibility: function (r) {
                        r = !!r, v.style.opacity = r ? 1 : 0;
                    },
                    resize: function (r, o, t) {
                        t && q('stretch', t);
                    },
                    setControls: function (r) {
                        q('setControls', r);
                    },
                    setFullscreen: function (r) {
                        J = r, q('fullscreen', r);
                    },
                    getFullScreen: function () {
                        return J;
                    },
                    setCurrentQuality: function (o) {
                        r.isMutipleHls(L) ? x = o : q('setCurrentQuality', o);
                    },
                    getCurrentQuality: function () {
                        return x;
                    },
                    setSubtitlesTrack: function (r) {
                        q('setSubtitlesTrack', r);
                    },
                    getName: function () {
                        return A ? {
                            name: 'flash_' + A
                        } : {
                            name: 'flash'
                        };
                    },
                    getQualityLevels: function () {
                        return E || C.sources;
                    },
                    getAudioTracks: function () {
                        return k;
                    },
                    getCurrentAudioTrack: function () {
                        return T;
                    },
                    setCurrentAudioTrack: function (r) {
                        q('setCurrentAudioTrack', r);
                    },
                    destroy: function () {
                        u(), this.remove(), y && (y.off(), y = null), v = null, C = null, this.off();
                    }
                }), this.trigger = function (r, o) {
                    if (I) {
                        return i.trigger.call(this, r, o);
                    }

                };
            }
            var h = 0;
            var w = function () {};
            return w.prototype = a, f.prototype = new w, f.getName = function () {
                    return {
                        name: 'flash'
                    };
                }, f;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(16), t(2), t(27), t(1), t(4), t(6), t(24), t(3), t(102)], n = function (r, o, t, e, n, a, i, c, d) {
            function f(r, t) {
                o.foreach(r, function (r, e) {
                    o.addEventListener(t, r, e, !1);
                });
            }
            function h(r, t) {
                o.foreach(r, function (r, e) {
                    o.removeEventListener(t, r, e, !1);
                });
            }
            function w(r) {
                if ('hls' === r.type) {
                    if (r.androidhls !== !1) {
                        var t = o.isAndroidNative;
                        if (t(2) || t(3) || t('4.0')) {
                            return !1;
                        }

                        if (o.isAndroid()) {
                            return !0;
                        }
                    }
                    else if (o.isAndroid()) {
                        return !1;
                    }
                }

                return null;
            }
            function p(p, S) {
                function x() {
                    Sr && (cr(Br.audioTracks), ur.setTextTracks(Br.textTracks), Br.setAttribute('jw-loaded', 'data'));
                }
                function E() {
                    Sr && Br.setAttribute('jw-loaded', 'started');
                }
                function T(r) {
                    ur.trigger('click', r);
                }
                function k() {
                    Sr && !Er && (z(q()), O(rr(), br, sr));
                }
                function I() {
                    Sr && O(rr(), br, sr);
                }
                function J() {
                    s(Cr), yr = !0, Sr && (ur.state === a.STALLED ? ur.setState(a.PLAYING) : ur.state === a.PLAYING && (Cr = setTimeout(_, b)), Er && Br.duration === 1 / 0 && 0 === Br.currentTime || (z(q()), j(Br.currentTime), O(rr(), br, sr), ur.state === a.PLAYING && (ur.trigger(n.JWPLAYER_MEDIA_TIME, {position: br, duration: sr}), L())));
                }
                function L() {
                    var r = qr.level;
                    if (r.width !== Br.videoWidth || r.height !== Br.videoHeight) {
                        if (r.width = Br.videoWidth, r.height = Br.videoHeight, wr(), !r.width || !r.height) {
                            return;
                        }

                        qr.reason = qr.reason || 'auto', qr.mode = 'hls' === lr[xr].type ? 'auto' : 'manual', qr.bitrate = 0, r.index = xr, r.label = lr[xr].label, ur.trigger('visualQuality', qr), qr.reason = '';
                    }
                }
                function O(r, o, t) {
                    r === mr && t === sr || (mr = r, ur.trigger(n.JWPLAYER_MEDIA_BUFFER, {bufferPercent: 100 * r, position: o, duration: t}));
                }
                function j(r) {
                    sr < 0 && (r = -(Y() - r)), br = r;
                }
                function q() {
                    var r = Br.duration;
                    var o = Y();
                    if (r === 1 / 0 && o) {
                        var t = o - Br.seekable.start(0);
                        t !== 1 / 0 && t > 120 && (r = -t);
                    }

                    return r;
                }
                function z(r) {
                    sr = r, Ar && r && r !== 1 / 0 && ur.seek(Ar);
                }
                function B() {
                    var r = q();
                    Er && r === 1 / 0 && (r = 0), ur.trigger(n.JWPLAYER_MEDIA_META, {duration: r, height: Br.videoHeight, width: Br.videoWidth}), z(r);
                }
                function D() {
                    Sr && (yr = !0, Er || wr(), G());
                }
                function F() {
                    Sr && (Br.muted && (Br.muted = !1, Br.muted = !0), Br.setAttribute('jw-loaded', 'meta'), B());
                }
                function G() {
                    gr || (gr = !0, ur.trigger(n.JWPLAYER_MEDIA_BUFFER_FULL));
                }
                function H() {
                    ur.setState(a.PLAYING), Br.hasAttribute('jw-played') || Br.setAttribute('jw-played', ''), ur.trigger(n.JWPLAYER_PROVIDER_FIRST_FRAME, {});
                }
                function K() {
                    ur.state !== a.COMPLETE && Br.currentTime !== Br.duration && ur.setState(a.PAUSED);
                }
                function M() {
                    Er || Br.paused || Br.ended || ur.state !== a.LOADING && ur.state !== a.ERROR && (ur.seeking || ur.setState(a.STALLED));
                }
                function N() {
                    Sr && (o.log('Error playing media: %o %s', Br.error, Br.src), ur.trigger(n.JWPLAYER_MEDIA_ERROR, {
                        message: 'Error loading media: File could not be played'
                    }));
                }
                function P(r) {
                    var t;
                    return 'array' === o.typeOf(r) && r.length > 0 && (t = e.map(r, function (r, o) {
                            return {
                                label: r.label || o
                            };
                        })), t;
                }
                function Q(r) {
                    lr = r, xr = R(r);var o = P(r);
                    o && ur.trigger(n.JWPLAYER_MEDIA_LEVELS, {levels: o, currentQuality: xr});
                }
                function R(r) {
                    var o = Math.max(0, xr);
                    var t = S.qualityLabel;
                    if (r) {
                        for (var e = 0; e < r.length; e++) {
                            if (r[e].default && (o = e), t && r[e].label === t) {
                                return e;
                            }

                        }
                    }

                    return qr.reason = 'initial choice', qr.level = {}, o;
                }
                function U(r, t) {
                    Ar = 0, s(Cr);var e = document.createElement('source');
                    e.src = lr[xr].file;var n = Br.src !== e.src;
                    var i = Br.getAttribute('jw-loaded');
                    var c = Br.hasAttribute('jw-played');
                    n || 'none' === i || 'started' === i ? (sr = t, V(lr[xr]), ur.setupSideloadedTracks(jr), Br.load()) : (0 === r && Br.currentTime > 0 && (Ar = -1, ur.seek(r)), Br.play()), br = Br.currentTime, u && !c && (G(), Br.paused || ur.state === a.PLAYING || ur.setState(a.LOADING)), o.isIOS() && ur.getFullScreen() && (Br.controls = !0), r > 0 && ur.seek(r);
                }
                function V(r) {
                    Jr = null, Lr = -1, Or = -1, qr.reason || (qr.reason = 'initial choice', qr.level = {}), yr = !1, gr = !1, Er = w(r), r.preload && r.preload !== Br.getAttribute('preload') && Br.setAttribute('preload', r.preload);var o = document.createElement('source');
                    o.src = r.file;var t = Br.src !== o.src;
                    t && (Br.setAttribute('jw-loaded', 'none'), Br.src = r.file);
                }
                function W() {
                    Br && (ur.disableTextTrack(), Br.removeAttribute('crossorigin'), Br.removeAttribute('preload'), Br.removeAttribute('src'), Br.removeAttribute('jw-loaded'), Br.removeAttribute('jw-played'), t.emptyElement(Br), xr = -1, jr = null, !l && 'load' in Br && Br.load());
                }
                function X() {
                    for (var r = Br.seekable ? Br.seekable.length : 0, o = 1 / 0; r--;) {
                        o = Math.min(o, Br.seekable.start(r));

                    }
                    return o;
                }
                function Y() {
                    for (var r = Br.seekable ? Br.seekable.length : 0, o = 0; r--;) {
                        o = Math.max(o, Br.seekable.end(r));

                    }
                    return o;
                }
                function Z() {
                    ur.seeking = !1, ur.trigger(n.JWPLAYER_MEDIA_SEEKED);
                }
                function $() {
                    ur.trigger('volume', {
                        volume: Math.round(100 * Br.volume)
                    }), ur.trigger('mute', {
                        mute: Br.muted
                    });
                }
                function _() {
                    Br.currentTime === br && M();
                }
                function rr() {
                    var r = Br.buffered;
                    var t = Br.duration;
                    return !r || 0 === r.length || t <= 0 || t === 1 / 0 ? 0 : o.between(r.end(r.length - 1) / t, 0, 1);
                }
                function or() {
                    if (Sr && ur.state !== a.IDLE && ur.state !== a.COMPLETE) {
                        if (s(Cr), xr = -1, kr = !0, ur.trigger(n.JWPLAYER_MEDIA_BEFORECOMPLETE), !Sr) {
                            return;
                        }

                        tr();
                    }
                }
                function tr() {
                    s(Cr), ur.setState(a.COMPLETE), kr = !1, ur.trigger(n.JWPLAYER_MEDIA_COMPLETE);
                }
                function er(r) {
                    Ir = !0, ir(r), o.isIOS() && (Br.controls = !1);
                }
                function nr() {
                    for (var r = -1, o = 0; o < Br.audioTracks.length; o++) {
                        if (Br.audioTracks[o].enabled) {
                            r = o;break;
                        }

                    }

                    dr(r);
                }
                function ar(r) {
                    Ir = !1, ir(r), o.isIOS() && (Br.controls = !1);
                }
                function ir(r) {
                    ur.trigger('fullscreenchange', {target: r.target, jwstate: Ir});
                }
                function cr(r) {
                    if (Jr = null, r) {
                        if (r.length) {
                            for (var o = 0; o < r.length; o++) {
                                if (r[o].enabled) {
                                    Lr = o;break;
                                }

                            }

                            Lr === -1 && (Lr = 0, r[Lr].enabled = !0), Jr = e.map(r, function (r) {
                                var o = {name: r.label || r.language, language: r.language};
                                return o;
                            });
                        }

                        ur.addTracksListener(r, 'change', nr), Jr && ur.trigger('audioTracks', {currentTrack: Lr, tracks: Jr});
                    }
                }
                function dr(r) {
                    Br && Br.audioTracks && Jr && r > -1 && r < Br.audioTracks.length && r !== Lr && (Br.audioTracks[Lr].enabled = !1, Lr = r, Br.audioTracks[Lr].enabled = !0, ur.trigger('audioTrackChanged', {currentTrack: Lr, tracks: Jr}));
                }
                function fr() {
                    return Jr || [];
                }
                function hr() {
                    return Lr;
                }
                function wr() {
                    if ('hls' === lr[0].type) {
                        var r = 'video';
                        0 === Br.videoHeight && (r = 'audio'), ur.trigger('mediaType', {
                            mediaType: r
                        });
                    }
                }
                this.state = a.IDLE, this.seeking = !1, e.extend(this, c, d), this.trigger = function (r, o) {
                    if (Sr) {
                        return c.trigger.call(this, r, o);
                    }

                }, this.setState = function (r) {
                    if (Sr) {
                        return i.setState.call(this, r);
                    }

                };var pr;
                var sr;
                var br;
                var gr;
                var lr;
                var ur = this;
                var vr = {
                    click: T,
                    durationchange: k,
                    ended: or,
                    error: N,
                    loadstart: E,
                    loadeddata: x,
                    loadedmetadata: F,
                    canplay: D,
                    playing: H,
                    progress: I,
                    pause: K,
                    seeked: Z,
                    timeupdate: J,
                    volumechange: $,
                    webkitbeginfullscreen: er,
                    webkitendfullscreen: ar
                };
                var yr = !1;
                var Ar = 0;
                var Cr = -1;
                var mr = -1;
                var Sr = !0;
                var xr = -1;
                var Er = null;
                var Tr = !!S.sdkplatform;
                var kr = !1;
                var Ir = !1;
                var Jr = null;
                var Lr = -1;
                var Or = -1;
                var jr = null;
                var qr = {
                    level: {}
                };
                var zr = document.getElementById(p);
                var Br = zr ? zr.querySelector('video') : void 0;
                Br = Br || document.createElement('video'), Br.className = 'jw-video jw-reset', this.isSDK = Tr, this.itemTracks = jr, this.video = Br, e.isObject(S.cast) && S.cast.appid && Br.setAttribute('disableRemotePlayback', ''), f(vr, Br), A || (Br.controls = !0, Br.controls = !1), Br.setAttribute('x-webkit-airplay', 'allow'), Br.setAttribute('webkit-playsinline', ''), this.stop = function () {
                    s(Cr), Sr && (W(), o.isIETrident() && Br.pause(), this.setState(a.IDLE));
                }, this.destroy = function () {
                    h(vr, Br), this.removeTracksListener(Br.audioTracks, 'change', nr), this.removeTracksListener(Br.textTracks, 'change', ur.textTrackChangeHandler), this.remove(), this.off();
                }, this.init = function (r) {
                    Sr && (jr = null, lr = r.sources, xr = R(r.sources), r.sources.length && 'hls' !== r.sources[0].type && this.sendMediaType(r.sources), br = r.starttime || 0, sr = r.duration || 0, qr.reason = '', V(lr[xr]), this.setupSideloadedTracks(r.tracks), jr = this.itemTracks);
                }, this.load = function (r) {
                    Sr && (Q(r.sources), r.sources.length && 'hls' !== r.sources[0].type && this.sendMediaType(r.sources), u && !Br.hasAttribute('jw-played') || ur.setState(a.LOADING), U(r.starttime || 0, r.duration || 0));
                }, this.play = function () {
                    return ur.seeking ? (ur.setState(a.LOADING), void ur.once(n.JWPLAYER_MEDIA_SEEKED, ur.play)) : void Br.play();
                }, this.pause = function () {
                    s(Cr), Br.pause(), this.setState(a.PAUSED);
                }, this.seek = function (r) {
                    if (Sr) {
                        if (r < 0 && (r += X() + Y()), 0 === Ar && this.trigger(n.JWPLAYER_MEDIA_SEEK, {position: Br.currentTime, offset: r}), yr || (yr = !!Y()), yr) {
                            Ar = 0;
                            try {
                                ur.seeking = !0, Br.currentTime = r;
                            }
                            catch (o) {
                                ur.seeking = !1, Ar = r;
                            }
                        }
                        else {
                            Ar = r, v && Br.paused && Br.play();
                        }
                    }

                }, this.volume = function (r) {
                    r = o.between(r / 100, 0, 1), Br.volume = r;
                }, this.enableGPU = function () {
                    throw '只有使用Flash播放才支持开启GPU'
                }, this.disableGPU = function () {
                    throw '只有使用Flash播放才支持开启GPU'
                }, this.mute = function (r) {
                    Br.muted = !!r;
                }, this.checkComplete = function () {
                    return kr;
                }, this.detachMedia = function () {
                    return s(Cr), this.disableTextTrack(), Sr = !1, Br;
                }, this.attachMedia = function () {
                    Sr = !0, yr = !1, this.seeking = !1, Br.loop = !1, kr && tr();
                }, this.setContainer = function (r) {
                    pr = r, r.appendChild(Br);
                }, this.getContainer = function () {
                    return pr;
                }, this.remove = function () {
                    W(), s(Cr), pr === Br.parentNode && pr.removeChild(Br);
                }, this.setVisibility = function (o) {
                    o = !!o, o || y ? r.style(pr, {visibility: 'visible', opacity: 1}) : r.style(pr, {visibility: '', opacity: 0});
                }, this.resize = function (o, t, e) {
                    if (!(o && t && Br.videoWidth && Br.videoHeight)) {
                        return !1;
                    }

                    var n = {
                        objectFit: ''
                    };
                    if ('uniform' === e) {
                        var a = o / t;
                        var i = Br.videoWidth / Br.videoHeight;
                        Math.abs(a - i) < .09 && (n.objectFit = 'fill', e = 'exactfit');
                    }

                    var c = g || y || A || C;
                    if (c) {
                        var d = -Math.floor(Br.videoWidth / 2 + 1);
                        var f = -Math.floor(Br.videoHeight / 2 + 1);
                        var h = Math.ceil(100 * o / Br.videoWidth) / 100;
                        var w = Math.ceil(100 * t / Br.videoHeight) / 100;
                        'none' === e ? h = w = 1 : 'fill' === e ? h = w = Math.max(h, w) : 'uniform' === e && (h = w = Math.min(h, w)), n.width = Br.videoWidth, n.height = Br.videoHeight, n.top = n.left = '50%', n.margin = 0, r.transform(Br, 'translate(' + d + 'px, ' + f + 'px) scale(' + h.toFixed(2) + ', ' + w.toFixed(2) + ')');
                    }

                    return r.style(Br, n), !1;
                }, this.setFullscreen = function (r) {
                    if (r = !!r) {
                        var t = o.tryCatch(function () {
                            var r = Br.webkitEnterFullscreen || Br.webkitEnterFullScreen;
                            r && r.apply(Br);
                        });
                        return !(t instanceof o.Error) && ur.getFullScreen();
                    }

                    var e = Br.webkitExitFullscreen || Br.webkitExitFullScreen;
                    return e && e.apply(Br), r;
                }, ur.getFullScreen = function () {
                    return Ir || !!Br.webkitDisplayingFullscreen;
                }, this.setCurrentQuality = function (r) {
                    if (xr !== r && r >= 0 && lr && lr.length > r) {
                        xr = r, qr.reason = 'api', qr.level = {}, this.trigger(n.JWPLAYER_MEDIA_LEVEL_CHANGED, {currentQuality: r, levels: P(lr)}), S.qualityLabel = lr[r].label;
                        var o = Br.currentTime || 0;
                        var t = Br.duration || 0;
                        t <= 0 && (t = sr), ur.setState(a.LOADING), U(o, t);
                    }

                }, this.getCurrentQuality = function () {
                    return xr;
                }, this.getQualityLevels = function () {
                    return P(lr);
                }, this.getName = function () {
                    return {
                        name: m
                    };
                }, this.setCurrentAudioTrack = dr, this.getAudioTracks = fr, this.getCurrentAudioTrack = hr;
            }
            var s = window.clearTimeout;
            var b = 256;
            var g = o.isIE();
            var l = o.isMSIE();
            var u = o.isMobile();
            var v = o.isFF();
            var y = o.isAndroidNative();
            var A = o.isIOS(7);
            var C = o.isIOS(8);
            var m = 'html5';
            var S = function () {};
            return S.prototype = i, p.prototype = new S, p.getName = function () {
                    return {
                        name: 'html5'
                    };
                }, p;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(5), t(1), t(106)], n = function (r, o, t) {
            var e = {};
            e.createElement = function (r) {
                var o = document.createElement('div');
                return o.innerHTML = r, o.firstChild;
            }, e.styleDimension = function (r) {
                return r + (r.toString().indexOf('%') > 0 ? '' : 'px');
            };
            var n = function (r) {
                return o.isString(r.className) ? r.className.split(' ') : [];
            };
            var a = function (o, t) {
                t = r.trim(t), o.className !== t && (o.className = t);
            };
            return e.classList = function (r) {
                    return r.classList ? r.classList : n(r);
                }, e.hasClass = t.hasClass, e.addClass = function (r, t) {
                    var e = n(r);
                    var i = o.isArray(t) ? t : t.split(' ');
                    o.each(i, function (r) {
                        o.contains(e, r) || e.push(r);
                    }), a(r, e.join(' '));
                }, e.removeClass = function (r, t) {
                    var e = n(r);
                    var i = o.isArray(t) ? t : t.split(' ');
                    a(r, o.difference(e, i).join(' '));
                }, e.replaceClass = function (r, o, t) {
                    var e = r.className || '';
                    o.test(e) ? e = e.replace(o, t) : t && (e += ' ' + t), a(r, e);
                }, e.toggleClass = function (r, t, n) {
                    var a = e.hasClass(r, t);
                    n = o.isBoolean(n) ? n : !a, n !== a && (n ? e.addClass(r, t) : e.removeClass(r, t));
                }, e.emptyElement = function (r) {
                    for (; r.firstChild;) {
                        r.removeChild(r.firstChild);
                    }
                }, e.addStyleSheet = function (r) {
                    var o = document.createElement('link');
                    o.rel = 'stylesheet', o.href = r, document.getElementsByTagName('head')[0].appendChild(o);
                }, e.empty = function (r) {
                    if (r) {
                        for (; r.childElementCount > 0;) {
                            r.removeChild(r.children[0]);
                        }
                    }

                }, e.bounds = function (r) {
                    var o = {
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0,
                        top: 0,
                        bottom: 0
                    };
                    if (!r || !document.body.contains(r)) {
                        return o;
                    }

                    var t = r.getBoundingClientRect(r);
                    var e = window.pageYOffset;
                    var n = window.pageXOffset;
                    return t.width || t.height || t.left || t.top ? (o.left = t.left + n, o.right = t.right + n, o.top = t.top + e, o.bottom = t.bottom + e, o.width = t.right - t.left, o.height = t.bottom - t.top, o) : o;
                }, e;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(30)], n = function (r, o) {
            function t(r) {
                return /^(?:(?:https?|file)\:)?\/\//.test(r);
            }
            function e(o) {
                return r.some(o, function (r) {
                    return 'parsererror' === r.nodeName;
                });
            }
            var n = {};
            return n.getAbsolutePath = function (r, e) {
                    if (o.exists(e) || (e = document.location.href), o.exists(r)) {
                        if (t(r)) {
                            return r;
                        }

                        var n;
                        var a = e.substring(0, e.indexOf('://') + 3);
                        var i = e.substring(a.length, e.indexOf('/', a.length + 1));
                        if (0 === r.indexOf('/')) {
                            n = r.split('/');
                        }
                        else {
                            var c = e.split('?')[0];
                            c = c.substring(a.length + i.length + 1, c.lastIndexOf('/')), n = c.split('/').concat(r.split('/'));
                        }
                        for (var d = [], f = 0; f < n.length; f++) {
                            n[f] && o.exists(n[f]) && '.' !== n[f] && ('..' === n[f] ? d.pop() : d.push(n[f]));

                        }
                        return a + i + '/' + d.join('/');
                    }

                }, n.getScriptPath = r.memoize(function (r) {
                    for (var o = document.getElementsByTagName('script'), t = 0; t < o.length; t++) {
                        var e = o[t].src;
                        if (e && e.indexOf(r) >= 0) {
                            return e.substr(0, e.indexOf(r));
                        }

                    }
                    return '';
                }), n.parseXML = function (r) {
                    var o = null;
                    try {
                        'DOMParser' in window ? (o = (new window.DOMParser).parseFromString(r, 'text/xml'), (e(o.childNodes) || o.childNodes && e(o.childNodes[0].childNodes)) && (o = null)) : (o = new window.ActiveXObject('Microsoft.XMLDOM'), o.async = 'false', o.loadXML(r));
                    }
                    catch (t) {}
                    return o;
                }, n.serialize = function (r) {
                    if (void 0 === r) {
                        return null;
                    }

                    if ('string' == typeof r && r.length < 6) {
                        var o = r.toLowerCase();
                        if ('true' === o) {
                            return !0;
                        }

                        if ('false' === o) {
                            return !1;
                        }

                        if (!isNaN(Number(r)) && !isNaN(parseFloat(r))) {
                            return Number(r);
                        }
                    }

                    return r;
                }, n.parseDimension = function (r) {
                    return 'string' == typeof r ? '' === r ? 0 : r.lastIndexOf('%') > -1 ? r : parseInt(r.replace('px', ''), 10) : r;
                }, n.timeFormat = function (r, o) {
                    if (r <= 0 && !o) {
                        return '00:00';
                    }

                    var t = r < 0 ? '-' : '';
                    r = Math.abs(r);
                    var e = Math.floor(r / 3600);
                    var n = Math.floor((r - 3600 * e) / 60);
                    var a = Math.floor(r % 60);
                    return t + (e ? e + ':' : '') + (n < 10 ? '0' : '') + n + ':' + (a < 10 ? '0' : '') + a;
                }, n.adaptiveType = function (r) {
                    if (0 !== r) {
                        var o = -120;
                        if (r <= o) {
                            return 'DVR';
                        }

                        if (r < 0 || r === 1 / 0) {
                            return 'LIVE';
                        }
                    }

                    return 'VOD';
                }, n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(4), t(3), t(1)], n = function (r, o, t) {
            var e = {};
            var n = {NEW: 0, LOADING: 1, ERROR: 2, COMPLETE: 3};
            var a = function (a, i) {
                function c(o) {
                    h = n.ERROR, f.trigger(r.ERROR, o);
                }
                function d(o) {
                    h = n.COMPLETE, f.trigger(r.COMPLETE, o);
                }
                var f = t.extend(this, o);
                var h = n.NEW;
                this.addEventListener = this.on, this.removeEventListener = this.off, this.makeStyleLink = function (r) {
                    var o = document.createElement('link');
                    return o.type = 'text/css', o.rel = 'stylesheet', o.href = r, o;
                }, this.makeScriptTag = function (r) {
                    var o = document.createElement('script');
                    return o.src = r, o;
                }, this.makeTag = i ? this.makeStyleLink : this.makeScriptTag, this.load = function () {
                    if (h === n.NEW) {
                        var o = e[a];
                        if (o && (h = o.getStatus(), h < 2)) {
                            return o.on(r.ERROR, c), void o.on(r.COMPLETE, d);
                        }

                        var t = document.getElementsByTagName('head')[0] || document.documentElement;
                        var f = this.makeTag(a);
                        var w = !1;
                        f.onload = f.onreadystatechange = function (r) {
                            w || this.readyState && 'loaded' !== this.readyState && 'complete' !== this.readyState || (w = !0, d(r), f.onload = f.onreadystatechange = null, t && f.parentNode && !i && t.removeChild(f));
                        }, f.onerror = c, t.insertBefore(f, t.firstChild), h = n.LOADING, e[a] = this;
                    }

                }, this.getStatus = function () {
                    return h;
                };
            };
            return a.loaderstatus = n, a;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(5)], n = function (r, o) {
            var t = {};
            return t.exists = function (r) {
                    switch (typeof r) {
                        case 'string':
                            return r.length > 0;case 'object':
                            return null !== r;case 'undefined':
                            return !1;
                    }
                    return !0;
                }, t.isHTTPS = function () {
                    return 0 === window.location.href.indexOf('https');
                }, t.isRtmp = function (r, o) {
                    return 0 === r.indexOf('rtmp') || 'rtmp' === o;
                }, t.isHls = function (r, t) {
                    return 'm3u8' === o.extension(r) || 'hls' === o.extension(r) || 'hls' === t;
                }, t.isMutipleHls = function (o) {
                    if (r.isArray(o) && o.length > 1) {
                        var e = 0;
                        if (r.each(o, function (r) {
                                t.isHls(r.file, r.type) && e++;
                            }), e === o.length) {
                            return !0;
                        }
                    }

                    return !1;
                }, t.typeOf = function (o) {
                    if (null === o) {
                        return 'null';
                    }

                    var t = typeof o;
                    return 'object' === t && r.isArray(o) ? 'array' : t;
                }, t;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(44), t(7), t(58), t(2)], n = function (r, o, t, e) {
            var n = r.extend({
                constructor: function (r, o) {
                    this.className = r + ' jw-background-color jw-reset', this.orientation = o, this.dragStartListener = this.dragStart.bind(this), this.dragMoveListener = this.dragMove.bind(this), this.dragEndListener = this.dragEnd.bind(this), this.tapListener = this.tap.bind(this), this.setup();
                },
                setup: function () {
                    var r = {'default': this.default, 'className': this.className, 'orientation': 'jw-slider-' + this.orientation};
                    this.el = e.createElement(t(r)), this.elementRail = e.getElementsByClassName('jw-slider-container', this.el)[0], this.elementBuffer = e.getElementsByClassName('jw-buffer', this.el)[0], this.elementProgress = e.getElementsByClassName('jw-progress', this.el)[0], this.elementThumb = e.getElementsByClassName('jw-knob', this.el)[0], this.userInteract = new o(this.element(), {
                        preventScrolling: !0
                    }), this.userInteract.on('dragStart', this.dragStartListener), this.userInteract.on('drag', this.dragMoveListener), this.userInteract.on('dragEnd', this.dragEndListener), this.userInteract.on('tap click', this.tapListener);
                },
                dragStart: function () {
                    this.trigger('dragStart'), this.railBounds = e.bounds(this.elementRail);
                },
                dragEnd: function (r) {
                    this.dragMove(r), this.trigger('dragEnd');
                },
                dragMove: function (r) {
                    var o;
                    var t;
                    var n = this.railBounds = this.railBounds ? this.railBounds : e.bounds(this.elementRail);
                    'horizontal' === this.orientation ? (o = r.pageX, t = o < n.left ? 0 : o > n.right ? 100 : 100 * e.between((o - n.left) / n.width, 0, 1)) : (o = r.pageY, t = o >= n.bottom ? 0 : o <= n.top ? 100 : 100 * e.between((n.height - (o - n.top)) / n.height, 0, 1));
                    var a = this.limit(t);
                    return this.render(a), 'drag' === r.type && e.hasClass(r.currentTarget, 'jw-slider-time') || this.update(a), !1;
                },
                tap: function (r) {
                    this.railBounds = e.bounds(this.elementRail), this.dragMove(r);
                },
                limit: function (r) {
                    return r;
                },
                update: function (r) {
                    this.trigger('update', {
                        percentage: r
                    });
                },
                render: function (r) {
                    r = Math.max(0, Math.min(r, 100)), 'horizontal' === this.orientation ? (this.elementThumb.style.left = r + '%', this.elementProgress.style.width = r + '%') : (this.elementThumb.style.bottom = r + '%', this.elementProgress.style.height = r + '%');
                },
                updateBuffer: function (r) {
                    r && (this.elementBuffer.style.width = r + '%');
                },
                element: function () {
                    return this.el;
                }
            });
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        'use strict';
        function e(r) {
            return r && r.__esModule ? r : {
                'default': r
            };
        }
        function n(r, o, t) {
            this.helpers = r || {}, this.partials = o || {}, this.decorators = t || {}, d.registerDefaultHelpers(this), f.registerDefaultDecorators(this);
        }
        o.__esModule = !0, o.HandlebarsEnvironment = n;
        var a = t(10);
        var i = t(12);
        var c = e(i);
        var d = t(62);
        var f = t(60);
        var h = t(70);
        var w = e(h);
        var p = '4.0.5';
        o.VERSION = p;
        var s = 7;
        o.COMPILER_REVISION = s;
        var b = {
            1: '<= 1.0.rc.2',
            2: '== 1.0.0-rc.3',
            3: '== 1.0.0-rc.4',
            4: '== 1.x.x',
            5: '== 2.0.0-alpha.x',
            6: '>= 2.0.0-beta.1',
            7: '>= 4.0.0'
        };
        o.REVISION_CHANGES = b;
        var g = '[object Object]';
        n.prototype = {
            constructor: n,
            logger: w.default,
            log: w.default.log,
            registerHelper: function (r, o) {
                if (a.toString.call(r) === g) {
                    if (o) {
                        throw new c.default('Arg not supported with multiple helpers');
                    }

                    a.extend(this.helpers, r);
                }
                else {
                    this.helpers[r] = o;
                }
            },
            unregisterHelper: function (r) {
                delete this.helpers[r];
            },
            registerPartial: function (r, o) {
                if (a.toString.call(r) === g) {
                    a.extend(this.partials, r);
                }
                else {
                    if ('undefined' == typeof o) {
                        throw new c.default('Attempting to register a partial called "' + r + '" as undefined');
                    }

                    this.partials[r] = o;
                }
            },
            unregisterPartial: function (r) {
                delete this.partials[r];
            },
            registerDecorator: function (r, o) {
                if (a.toString.call(r) === g) {
                    if (o) {
                        throw new c.default('Arg not supported with multiple decorators');
                    }

                    a.extend(this.decorators, r);
                }
                else {
                    this.decorators[r] = o;
                }
            },
            unregisterDecorator: function (r) {
                delete this.decorators[r];
            }
        };
        var l = w.default.log;
        o.log = l, o.createFrame = a.createFrame, o.logger = w.default;
    },, function (r, o, t) {
        var e;
        e = function (r, o, t) {
            function e(r, o) {
                a(o, i(r));
            }
            function n(r) {
                var o = w[r];
                if (o) {
                    for (var t = Object.keys(o), e = 0; e < t.length; e += 1) {
                        for (var n = o[t[e]], a = 0; a < n.parts.length; a += 1) {
                            n.parts[a]();

                        }

                    }
                    delete w[r];
                }
            }
            function a(r, o) {
                for (var t = 0; t < o.length; t++) {
                    var e = o[t];
                    var n = (w[r] || {})[e.id];
                    if (n) {
                        for (var a = 0; a < n.parts.length; a++) {
                            n.parts[a](e.parts[a]);

                        }
                        for (; a < e.parts.length; a++) {
                            n.parts.push(f(r, e.parts[a]));
                        }
                    }
                    else {
                        for (var i = [], a = 0; a < e.parts.length; a++) {
                            i.push(f(r, e.parts[a]));

                        }
                        w[r] = w[r] || {}, w[r][e.id] = {id: e.id, parts: i};
                    }
                }
            }
            function i(r) {
                for (var o = [], t = {}, e = 0; e < r.length; e++) {
                    var n = r[e];
                    var a = n[0];
                    var i = n[1];
                    var c = n[2];
                    var d = {css: i, media: c};
                    t[a] ? t[a].parts.push(d) : o.push(t[a] = {id: a, parts: [d]});
                }
                return o;
            }
            function c(r) {
                b().appendChild(r);
            }
            function d(r) {
                var o = document.createElement('style');
                return o.type = 'text/css', o.setAttribute('data-jwplayer-id', r), c(o), o;
            }
            function f(r, o) {
                var t;
                var e;
                var n;
                var a = p[r];
                a || (a = p[r] = {element: d(r), counter: 0});var i = a.counter++;
                return t = a.element, e = h.bind(null, t, i, !1), n = h.bind(null, t, i, !0), e(o), function (r) {
                        if (r) {
                            if (r.css === o.css && r.media === o.media) {
                                return;
                            }

                            e(o = r);
                        }
                        else {
                            n();
                        }
                    };
            }
            function h(r, o, t, e) {
                var n = t ? '' : e.css;
                if (r.styleSheet) {
                    r.styleSheet.cssText = g(o, n);
                }
                else {
                    var a = document.createTextNode(n);
                    var i = r.childNodes;
                    i[o] && r.removeChild(i[o]), i.length ? r.insertBefore(a, i[o]) : r.appendChild(a);
                }
            }
            var w = {};
            var p = {};
            var s = function (r) {
                var o;
                return function () {
                    return 'undefined' == typeof o && (o = r.apply(this, arguments)), o;
                };
            };
            var b = s(function () {
                return document.head || document.getElementsByTagName('head')[0];
            });
            t.exports = {style: e, clear: n};
            var g = function () {
                var r = [];
                return function (o, t) {
                    return r[o] = t, r.filter(Boolean).join('\n');
                };
            }();
        }.call(o, t, o, r), !(void 0 !== e && (r.exports = e));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(79), t(1), t(14), t(43), t(23)], n = function (r, o, t, e, n) {
            var a = [];
            var i = 0;
            var c = function (o) {
                var t;
                var e;
                return o ? 'string' == typeof o ? (t = d(o), t || (e = document.getElementById(o))) : 'number' == typeof o ? t = a[o] : o.nodeType && (e = o, t = d(e.id)) : t = a[0], t ? t : e ? f(new r(e, h)) : {
                        registerPlugin: n.registerPlugin
                    };
            };
            var d = function (r) {
                for (var o = 0; o < a.length; o++) {
                    if (a[o].id === r) {
                        return a[o];
                    }

                }

                return null;
            };
            var f = function (r) {
                return i++, r.uniqueId = i, a.push(r), r;
            };
            var h = function (r) {
                for (var o = a.length; o--;) {
                    if (a[o].uniqueId === r.uniqueId) {
                        a.splice(o, 1);break;
                    }

                }

            };
            var w = {selectPlayer: c, registerProvider: t.registerProvider, availableProviders: e, registerPlugin: n.registerPlugin};
            return c.api = w, w;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(2)], n = function (r, o) {
            function t(r) {
                var o = 'baiducyberplayer.' + r;
                return o.toString();
            }
            function e() {
                return r.reduce(this.persistItems, function (r, e) {
                    var n = h[t(e)];
                    return n && (r[e] = o.serialize(n)), r;
                }, {});
            }
            function n(r, o) {
                try {
                    h[t(r)] = o;
                }
                catch (e) {}
            }
            function a(r) {
                return h[t(r)];
            }
            function i(r) {
                return h.removeItem(t(r));
            }
            function c() {
                r.each(this.persistItems, function (r) {
                    h.removeItem(t(r));
                });
            }
            function d() {
                this.persistItems = ['volume', 'mute', 'captionLabel', 'qualityLabel'];
            }
            function f(o) {
                r.each(this.persistItems, function (r) {
                    o.on('change:' + r, function (o, t) {
                        n(r, t);
                    });
                });
            }
            var h = {getItem: o.noop, setItem: o.noop, removeItem: o.noop};
            try {
                h = window.localStorage;
            }
            catch (w) {}
            return r.extend(d.prototype, {
                    getAllItems: e,
                    track: f,
                    clear: c,
                    setItem: n,
                    getItem: a,
                    clearItem: i
                }), d;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(39), t(98)], n = function (r, o, t) {
            var e = {sources: [], tracks: []};
            var n = function (n) {
                n = n || {}, r.isArray(n.tracks) ||
                delete n.tracks;
                var a = r.extend({}, e, n);
                r.isObject(a.sources) && !r.isArray(a.sources) && (a.sources = [o(a.sources)]), r.isArray(a.sources) && 0 !== a.sources.length || (n.levels ? a.sources = n.levels : a.sources = [o(n)]);
                for (var i = 0; i < a.sources.length; i++) {
                    var c = a.sources[i];
                    if (c) {
                        var d = c.default;
                        d ? c.default = 'true' === d.toString() : c.default = !1, a.sources[i].label || (a.sources[i].label = i.toString()), a.sources[i] = o(a.sources[i]);
                    }

                }
                return a.sources = r.compact(a.sources), r.isArray(a.tracks) || (a.tracks = []), r.isArray(a.captions) && (a.tracks = a.tracks.concat(a.captions),
                    delete a.captions
                    ), a.tracks = r.compact(r.map(a.tracks, t)), a;
            };
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(13), t(96), t(2), t(4), t(3), t(1)], n = function (r, o, t, e, n, a) {
            var i = function () {
                function i(n) {
                    var i = t.tryCatch(function () {
                        var t;
                        var i = n.responseXML ? n.responseXML.childNodes : null;
                        var c = '';
                        if (i) {
                            for (var h = 0; h < i.length && (c = i[h], 8 === c.nodeType); h++) {

                            }
                            'xml' === r.localName(c) && (c = c.nextSibling), 'rss' === r.localName(c) && (t = {
                                playlist: o.parse(c)
                            });
                        }

                        if (!t) {
                            try {
                                var w = JSON.parse(n.responseText);
                                if (a.isArray(w)) {
                                    t = {
                                        playlist: w
                                    };
                                }
                                else {
                                    if (!a.isArray(w.playlist)) {
                                        throw null;
                                    }

                                    t = w;
                                }
                            }
                            catch (p) {
                                return void d('Not a valid RSS/JSON feed');
                            }
                        }

                        f.trigger(e.JWPLAYER_PLAYLIST_LOADED, t);
                    });
                    i instanceof t.Error && d();
                }
                function c(r) {
                    d('Playlist load error: ' + r);
                }
                function d(r) {
                    f.trigger(e.JWPLAYER_ERROR, {
                        message: r ? r : 'Error loading file'
                    });
                }
                var f = a.extend(this, n);
                this.load = function (r) {
                    t.ajax(r, i, c);
                }, this.destroy = function () {
                    this.off();
                };
            };
            return i;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(5), t(1)], n = function (r, o, t) {
            var e = {
                'default': !1
            };
            var n = function (n) {
                if (n && n.file) {
                    r.isRtmp(n.file) && r.isMobile() && n.fallbackfile && r.isHls(n.fallbackfile) && (n.file = n.fallbackfile);
                    var a = t.extend({}, e, n);
                    a.file = o.trim('' + a.file), a.file = decodeURI(a.file), a.file = a.file.replace('%3F', '?'), a.file = a.file.replace('%3D', '=');
                    var i = /^[^\/]+\/(?:x-)?([^\/]+)$/;
                    if (r.isRtmp(a.file) ? a.type = 'rtmp' : i.test(a.type) ? a.type = a.type.replace(i, '$1') : a.type || (a.type = o.extension(a.file)), a.type) {
                        switch (a.type) {
                            case 'm3u8':
                            case 'vnd.apple.mpegurl':
                                a.type = 'hls';
                                break;case 'dash+xml':
                                a.type = 'dash';
                                break;case 'smil':
                                a.type = 'rtmp';
                                break;case 'm4a':
                                a.type = 'aac';
                        }
                        return t.each(a, function (r, o) {
                                '' === r &&
                                delete a[o];
                            }), a;
                    }
                }

            };
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(18), t(4), t(3), t(29), t(1)], n = function (r, o, t, e, n, a) {
            var i = {FLASH: 0, JAVASCRIPT: 1, HYBRID: 2};
            var c = function (c) {
                function d() {
                    switch (o.getPluginPathType(c)) {
                        case o.pluginPathType.ABSOLUTE:
                            return c;case o.pluginPathType.RELATIVE:
                            return r.getAbsolutePath(c, window.location.href);
                    }
                }
                function f() {
                    a.defer(function () {
                        l = n.loaderstatus.COMPLETE, g.trigger(t.COMPLETE);
                    });
                }
                function h() {
                    l = n.loaderstatus.ERROR, g.trigger(t.ERROR, {
                        url: c
                    });
                }
                var w;
                var p;
                var s;
                var b;
                var g = a.extend(this, e);
                var l = n.loaderstatus.NEW;
                this.load = function () {
                    if (l === n.loaderstatus.NEW) {
                        if (c.lastIndexOf('.swf') > 0) {
                            return w = c, l = n.loaderstatus.COMPLETE, void g.trigger(t.COMPLETE);
                        }

                        if (o.getPluginPathType(c) === o.pluginPathType.CDN) {
                            return l = n.loaderstatus.COMPLETE, void g.trigger(t.COMPLETE);
                        }

                        l = n.loaderstatus.LOADING;
                        var r = new n(d());
                        r.on(t.COMPLETE, f), r.on(t.ERROR, h), r.load();
                    }

                }, this.registerPlugin = function (r, o, e, a) {
                    b && (clearTimeout(b), b = void 0), s = o, e && a ? (w = a, p = e) : 'string' == typeof e ? w = e : 'function' == typeof e ? p = e : e || a || (w = r), l = n.loaderstatus.COMPLETE, g.trigger(t.COMPLETE);
                }, this.getStatus = function () {
                    return l;
                }, this.getPluginName = function () {
                    return o.getPluginName(c);
                }, this.getFlashPath = function () {
                    if (w) {
                        switch (o.getPluginPathType(w)) {
                            case o.pluginPathType.ABSOLUTE:
                                return w;case o.pluginPathType.RELATIVE:
                                return c.lastIndexOf('.swf') > 0 ? r.getAbsolutePath(w, window.location.href) : r.getAbsolutePath(w, d());
                        }
                    }

                    return null;
                }, this.getJS = function () {
                    return p;
                }, this.getTarget = function () {
                    return s;
                }, this.getPluginmode = function () {
                    return void 0 !== typeof w && void 0 !== typeof p ? i.HYBRID : void 0 !== typeof w ? i.FLASH : void 0 !== typeof p ? i.JAVASCRIPT : void 0;
                }, this.getNewInstance = function (r, o, t) {
                    return new p(r, o, t);
                }, this.getURL = function () {
                    return c;
                };
            };
            return c;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    },,, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(1), t(111)], n = function (r, o, t) {
            function e(o) {
                if ('hls' === o.type) {
                    if (o.androidhls !== !1) {
                        var t = r.isAndroidNative;
                        if (t(2) || t(3) || t('4.0')) {
                            return !1;
                        }

                        if (r.isAndroid()) {
                            return !0;
                        }
                    }
                    else if (r.isAndroid()) {
                        return !1;
                    }
                }

                return null;
            }
            var n = [{
                name: 'html5',
                supports: function (o) {
                    var n = {
                        aac: 'audio/mp4',
                        mp4: 'video/mp4',
                        f4v: 'video/mp4',
                        m4v: 'video/mp4',
                        mov: 'video/mp4',
                        mp3: 'audio/mpeg',
                        mpeg: 'audio/mpeg',
                        ogv: 'video/ogg',
                        ogg: 'video/ogg',
                        oga: 'video/ogg',
                        vorbis: 'video/ogg',
                        webm: 'video/webm',
                        f4a: 'video/aac',
                        m3u8: 'application/vnd.apple.mpegurl',
                        m3u: 'application/vnd.apple.mpegurl',
                        hls: 'application/vnd.apple.mpegurl'
                    };
                    var a = o.file;
                    var i = o.type;
                    var c = e(o);
                    if (null !== c) {
                        return c;
                    }

                    if (r.isRtmp(a, i)) {
                        return !1;
                    }

                    if (!n[i]) {
                        return !1;
                    }

                    if (r.isEdge() && r.isHls(a, i)) {
                        return !1;
                    }

                    if (r.isPoorIE()) {
                        return !1;
                    }

                    if (t.canPlayType) {
                        var d = t.canPlayType(n[i]);
                        return !!d;
                    }

                    return !1;
                }
            }, {
                name: 'flash',
                supports: function (t) {
                    var e = {
                        flv: 'video',
                        f4v: 'video',
                        mov: 'video',
                        m4a: 'video',
                        m4v: 'video',
                        mp4: 'video',
                        aac: 'video',
                        f4a: 'video',
                        mp3: 'sound',
                        mpeg: 'sound',
                        smil: 'rtmp',
                        m3u8: 'hls',
                        hls: 'hls'
                    };
                    var n = o.keys(e);
                    if (!r.isFlashSupported()) {
                        return !1;
                    }

                    var a = t.file;
                    var i = t.type;
                    return !!r.isRtmp(a, i) || o.contains(n, i);
                }
            }];
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(3), t(1)], n = function (r, o) {
            function t() {
            }
            var e = function (r, t) {
                var e;
                var n = this;
                e = r && o.has(r, 'constructor') ? r.constructor : function () {
                    return n.apply(this, arguments);
                }, o.extend(e, n, t);
                var a = function () {
                    this.constructor = e;
                };
                return a.prototype = n.prototype, e.prototype = new a, r && o.extend(e.prototype, r), e.__super__ = n.prototype, e;
            };
            return t.extend = e, o.extend(t.prototype, r), t;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1)], n = function (r) {
            var o = {};
            var t = {
                TIT2: 'title',
                TT2: 'title',
                WXXX: 'url',
                TPE1: 'artist',
                TP1: 'artist',
                TALB: 'album',
                TAL: 'album'
            };
            return o.utf8ArrayToStr = function (r, o) {
                    var t;
                    var e;
                    var n;
                    var a;
                    var i;
                    var c;
                    for (t = '', n = r.length, e = o || 0; e < n;) {
                        if (a = r[e++], 0 !== a && 3 !== a) {
                            switch (a >> 4) {
                                case 0:
                                case 1:
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                case 6:
                                case 7:
                                    t += String.fromCharCode(a);
                                    break;case 12:
                                case 13:
                                    i = r[e++], t += String.fromCharCode((31 & a) << 6 | 63 & i);
                                    break;case 14:
                                    i = r[e++], c = r[e++], t += String.fromCharCode((15 & a) << 12 | (63 & i) << 6 | (63 & c) << 0);
                            }
                        }

                    }

                    return t;
                }, o.utf16BigEndianArrayToStr = function (r, o) {
                    var t;
                    var e;
                    var n;
                    for (t = '', n = r.length - 1, e = o || 0; e < n;) {
                        254 === r[e] && 255 === r[e + 1] || (t += String.fromCharCode((r[e] << 8) + r[e + 1])), e += 2;

                    }
                    return t;
                }, o.syncSafeInt = function (r) {
                    var t = o.arrayToInt(r);
                    return 127 & t | (32512 & t) >> 1 | (8323072 & t) >> 2 | (2130706432 & t) >> 3;
                }, o.arrayToInt = function (r) {
                    for (var o = '0x', t = 0; t < r.length; t++) {
                        o += r[t].toString(16);

                    }
                    return parseInt(o, 10);
                }, o.parseID3 = function (e) {
                    return r.reduce(e, function (e, n) {
                        if (!('value' in n) && 'data' in n && n.data instanceof ArrayBuffer) {
                            var a = n;
                            var i = new Uint8Array(a.data);
                            var c = i.length;
                            n = {
                                value: {key: '', data: ''}
                            };
                            for (var d = 10; d < 14 && d < i.length && 0 !== i[d];) {
                                n.value.key += String.fromCharCode(i[d]), d++;

                            }
                            var f = 19;
                            var h = i[f];
                            3 !== h && 0 !== h || (h = i[++f], c--);
                            var w = 0;
                            if (1 !== h && 2 !== h) {
                                for (var p = f + 1; p < c; p++) {
                                    if (0 === i[p]) {
                                        w = p - f;break;
                                    }

                                }
                            }

                            if (w > 0) {
                                var s = o.utf8ArrayToStr(i.subarray(f, f += w), 0);
                                if ('PRIV' === n.value.key) {
                                    if ('com.apple.streaming.transportStreamTimestamp' === s) {
                                        var b = 1 & o.syncSafeInt(i.subarray(f, f += 4));
                                        var g = o.syncSafeInt(i.subarray(f, f += 4));
                                        b && (g += 4294967296), n.value.data = g;
                                    }
                                    else {
                                        n.value.data = o.utf8ArrayToStr(i, f + 1);
                                    }
                                    n.value.info = s;
                                }
                                else {
                                    n.value.info = s, n.value.data = o.utf8ArrayToStr(i, f + 1);
                                }
                            }
                            else {
                                var l = i[f];
                                1 === l || 2 === l ? n.value.data = o.utf16BigEndianArrayToStr(i, f + 1) : n.value.data = o.utf8ArrayToStr(i, f + 1);
                            }
                        }

                        if (t.hasOwnProperty(n.value.key) && (e[t[n.value.key]] = n.value.data), n.value.info) {
                            var u = e[n.value.key];
                            r.isObject(u) || (u = {}, e[n.value.key] = u), u[n.value.info] = n.value.data;
                        }
                        else {
                            e[n.value.key] = n.value.data;
                        }
                        return e;
                    }, {});
                }, o;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1)], n = function (r) {
            var o = function () {
                var o = {};
                var t = {};
                var e = {};
                var n = {};
                return {
                    start: function (t) {
                        o[t] = r.now(), e[t] = e[t] + 1 || 1;
                    },
                    end: function (e) {
                        if (o[e]) {
                            var n = r.now() - o[e];
                            t[e] = t[e] + n || n;
                        }

                    },
                    dump: function () {
                        return {counts: e, sums: t, events: n};
                    },
                    tick: function (o, t) {
                        n[o] = t || r.now();
                    },
                    between: function (r, o) {
                        return n[o] && n[r] ? n[o] - n[r] : -1;
                    }
                };
            };
            return o;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        o = r.exports = t(48)(), o.push([r.id, '.jw-reset{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-align:left;text-transform:none;vertical-align:baseline;border:0;direction:ltr;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}@font-face{font-family:jw-icons;src:url(' + t(75) + ') format(\'woff\'),url(' + t(76) + ') format(\'truetype\');font-weight:400;font-style:normal}.jw-controlbar .jw-menu .jw-option:before,.jw-icon-display,.jw-icon-inline,.jw-icon-tooltip{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-icon-audio-tracks:before{content:"\\E600"}.jw-icon-buffer:before{content:"\\E601"}.jw-icon-cast:before{content:"\\E603"}.jw-icon-cast.jw-off:before{content:"\\E602"}.jw-icon-cc:before{content:"\\E605"}.jw-icon-cue:before,.jw-icon-menu-bullet:before{content:"\\E606"}.jw-icon-error:before{content:"\\E607"}.jw-icon-fullscreen:before{content:"\\E608"}.jw-icon-fullscreen.jw-off:before{content:"\\E613"}.jw-icon-hd:before{content:"\\E60A"}.jw-rightclick-logo:before,.jw-watermark:before{content:"\\E60B"}.jw-icon-next:before{content:"\\E60C"}.jw-icon-pause:before{content:"\\E60D"}.jw-icon-play:before{content:"\\E60E"}.jw-icon-prev:before{content:"\\E60F"}.jw-icon-replay:before{content:"\\E610"}.jw-icon-volume:before{content:"\\E612"}.jw-icon-volume.jw-off:before{content:"\\E611"}.jw-icon-more:before{content:"\\E614"}.jw-icon-close:before{content:"\\E615"}.jw-icon-playlist:before{content:"\\E616"}.jw-icon-barlogo:before{content:"\\E617"}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;background-color:#000;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.jwplayer *{box-sizing:inherit}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jwplayer.jw-no-focus:focus,.jwplayer .jw-swf{outline:none}.jwplayer.jw-ie:focus{outline:1px dotted #585858}.jwplayer:hover .jw-display-icon-container{background-color:#333;background:#333;background-size:#333}.jw-adv,.jw-controls,.jw-media,.jw-overlays,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer .jw-adv{background-size:100% 100%;cursor:pointer}.jwplayer .jw-adv .adv-countdown{position:absolute;width:95px;padding-left:10px;height:30px;line-height:30px;background-color:#202020;opacity:.7;color:#ee6002;font-size:14px;top:0;right:0;display:none}.jwplayer .jw-adv .adv-close{position:absolute;height:22px;line-height:22px;color:#fff;font-weight:700;font-size:14px;width:20px;top:0;right:5px;display:none;text-align:center}.jw-media{overflow:hidden;cursor:pointer}.jw-overlays{cursor:auto}.jw-media.jw-media-show{visibility:visible;opacity:1}.jw-controls.jw-controls-disabled{display:none}.jw-controls .jw-controls-right{position:absolute;top:0;right:0;left:0;bottom:2em}.jw-warning{color:red;top:30px;right:10px;position:absolute;z-index:10000;width:320px;display:none}.jw-warning a{color:#108cee}.jw-marquee{opacity:0;color:#fff;width:110px;font-size:16px;font-weight:700;position:absolute}@-webkit-keyframes marquee1{0%{left:100%}to{left:-110px}}@keyframes marquee1{0%{left:100%}to{left:-110px}}@-webkit-keyframes marquee2{0%{left:100%}to{left:-110px}}@keyframes marquee2{0%{left:100%}to{left:-110px}}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-plugin{position:absolute;bottom:2.5em}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-cast-screen{width:100%;height:100%}.jw-instream{position:absolute;top:0;right:0;bottom:0;left:0;display:none}.jw-icon-playback:before{content:"\\E60E"}.jw-captions,.jw-controls,.jw-overlays,.jw-preview,.jw-title{pointer-events:none}.jw-controlbar,.jw-display-icon-container,.jw-dock,.jw-logo,.jw-media,.jw-overlays>div,.jw-skip{pointer-events:all}.jwplayer video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:transparent}.jwplayer video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform video{-o-object-fit:contain;object-fit:contain}.jwplayer.jw-stretch-none video{-o-object-fit:none;object-fit:none}.jwplayer.jw-stretch-fill video{-o-object-fit:cover;object-fit:cover}.jwplayer.jw-stretch-exactfit video{-o-object-fit:fill;object-fit:fill}.jw-adv,.jw-click,.jw-preview{position:absolute;width:100%;height:100%}.jw-adv,.jw-preview{display:none;opacity:1;visibility:visible;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jw-stretch-uniform .jw-preview,.jwplayer .jw-preview{background-size:100% 100%}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-display-icon-container{position:relative;top:50%;display:table;height:3.5em;width:3.5em;margin:-1.75em auto 0;cursor:pointer}.jw-display-icon-container .jw-icon-display{position:relative;display:table-cell;text-align:center;vertical-align:middle!important;background-position:50% 50%;background-repeat:no-repeat;font-size:2em}.jw-flag-audio-player .jw-display-icon-container,.jw-flag-dragging .jw-display-icon-container{display:none}.jw-icon{font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jw-controlbar{display:table;position:absolute;right:0;left:0;bottom:0;height:2em;padding:0 .25em}.jw-controlbar .jw-hidden{display:none}.jw-controlbar.jw-drawer-expanded .jw-controlbar-center-group,.jw-controlbar.jw-drawer-expanded .jw-controlbar-left-group{opacity:0}.jw-controlbar-textshow .jw-controlbar-center-group .jw-slider-time,.jw-controlbar-textshow .jw-controlbar-center-group .jw-text-duration,.jw-controlbar-textshow .jw-controlbar-center-group .jw-text-elapsed{display:none}.jw-controlbar-textshow .jw-controlbar-center-group .jw-text-alt{display:inline}.jw-background-color{background-color:#414040}.jw-group{display:table-cell}.jw-controlbar-center-group{width:100%;padding:0 .25em}.jw-controlbar-center-group .jw-slider-time,.jw-controlbar-center-group .jw-text-alt{padding:0}.jw-controlbar-center-group .jw-text-alt{display:none}.jw-controlbar-left-group,.jw-controlbar-right-group{white-space:nowrap}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#eee}.jw-icon-inline,.jw-icon-tooltip,.jw-slider-horizontal,.jw-text-duration,.jw-text-elapsed{display:inline-block;height:2em;position:relative;line-height:2em;vertical-align:middle;cursor:pointer}.jw-icon-inline,.jw-icon-tooltip{min-width:1.25em;text-align:center}.jw-icon-playback{min-width:2.25em}.jw-icon-barlogo{font-size:18px;min-width:1.75em}.jw-icon-volume{min-width:1.75em;text-align:left}.jw-time-tip{line-height:1em;pointer-events:none}.jw-icon-inline:after,.jw-icon-tooltip:after{width:100%;height:100%;font-size:1em}.jw-icon-cast,.jw-icon-inline.jw-icon-volume,.jw-slider-volume.jw-slider-horizontal{display:none}.jw-dock{margin:.75em;display:block;opacity:1;clear:right}.jw-dock:after{content:\'\';clear:both;display:block}.jw-dock-button{cursor:pointer;float:right;position:relative;width:2.5em;height:2.5em;margin:.5em}.jw-dock-button .jw-arrow{display:none;position:absolute;bottom:-.2em;width:.5em;height:.2em;left:50%;margin-left:-.25em}.jw-dock-button .jw-overlay{display:none;position:absolute;top:2.5em;right:0;margin-top:.25em;padding:.5em;white-space:nowrap}.jw-dock-button:hover .jw-arrow,.jw-dock-button:hover .jw-overlay{display:block}.jw-dock-image{width:100%;height:100%;background-position:50% 50%;background-repeat:no-repeat;opacity:.75}.jw-title{display:none;position:absolute;top:0;width:100%;font-size:.875em;height:8em;background:-webkit-linear-gradient(top,#000,#000 18%,transparent);background:linear-gradient(180deg,#000 0,#000 18%,transparent)}.jw-title-primary,.jw-title-secondary{padding:.75em 1.5em;min-height:2.5em;width:100%;color:#fff;white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden}.jw-title-primary{font-weight:700}.jw-title-secondary{margin-top:-.5em}.jw-slider-container{display:inline-block;height:1em;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#fff}.jw-rail{background-color:#aaa}.jw-buffer{background-color:#202020}.jw-cue,.jw-knob{position:absolute;cursor:pointer}.jw-cue{background-color:#fff;width:.1em;height:.4em}.jw-knob{background-color:#aaa;width:.4em;height:.4em}.jw-slider-horizontal{width:4em;height:1em}.jw-slider-horizontal.jw-slider-volume{margin-right:5px}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{width:100%;height:.4em}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress{width:0}.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail,.jw-slider-horizontal .jw-slider-container{width:100%}.jw-slider-horizontal .jw-knob{left:0;margin-left:-.325em}.jw-slider-vertical{width:.75em;height:4em;bottom:0;position:absolute;padding:1em}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{bottom:0;height:100%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress{height:0}.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail,.jw-slider-vertical .jw-slider-container{bottom:0;width:.75em;height:100%;left:0;right:0;margin:0 auto}.jw-slider-vertical .jw-slider-container{height:4em;position:relative}.jw-slider-vertical .jw-knob{bottom:0;left:0;right:0;margin:0 auto}.jw-slider-time{right:0;left:0;width:100%}.jw-tooltip-time{position:absolute}.jw-slider-volume .jw-buffer{display:none}.jw-captions{position:absolute;display:none;margin:0 auto;width:100%;left:0;bottom:3em;right:0;max-width:90%;text-align:center}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-text,.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{color:#fff;background-color:#000;word-wrap:break-word;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none;line-height:1.3em;padding:.1em .8em}.jwplayer video::-webkit-media-controls{-webkit-box-pack:start;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-container{max-height:84.5%;line-height:1.3em}.jwplayer.jw-flag-compact-player video::-webkit-media-text-track-container{max-height:82%}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick ul{list-style:none;font-weight:700;border-radius:.15em;margin:0;border:1px solid #444;padding:0}.jwplayer .jw-rightclick ul li{background-color:#000;border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick ul li .jw-rightclick-logo{font-size:2em;color:#ff0147;vertical-align:middle;padding-right:.3em;margin-right:.3em;border-right:1px solid #444}.jwplayer .jw-rightclick ul li a{color:#fff;text-decoration:none;padding:1em;display:block;font-size:.6875em;line-height:1em}.jwplayer .jw-rightclick ul li:last-child{border-bottom:none}.jwplayer .jw-rightclick ul li:hover{background-color:#1a1a1a;cursor:pointer}.jwplayer .jw-rightclick ul .jw-featured{background-color:#252525;vertical-align:middle}.jwplayer .jw-rightclick ul .jw-featured a{color:#777}.jw-logo{position:absolute;margin:.75em;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto}.jw-logo .jw-flag-audio-player{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{bottom:0;left:0}.jw-logo-bottom-right,.jw-watermark{bottom:0;right:0}.jw-watermark{position:absolute;top:50%;left:0;text-align:center;font-size:14em;color:#eee;opacity:.33;pointer-events:none}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;visibility:visible}.jw-icon-tooltip.jw-hidden,.jw-icon-tooltip.jw-open-drawer:before,.jw-overlay-horizontal{display:none}.jw-icon-tooltip.jw-open-drawer .jw-overlay-horizontal{opacity:1;display:inline-block;vertical-align:top}.jw-overlay:before{position:absolute;top:0;bottom:0;left:-50%;width:100%;background-color:transparent;content:" "}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-menu,.jw-time-tip,.jw-volume-tip{position:relative;left:-50%;border:1px solid #000;margin:0}.jw-volume-value-tip{font-size:12px;position:absolute;top:-26px;right:20px;background-color:#000;line-height:20px;border-radius:3px;padding:0 3px;color:#fff}.jw-volume-tip{width:100%;height:100%;display:block}.jw-time-tip{text-align:center;font-family:inherit;color:#aaa;bottom:1em;border:4px solid #000}.jw-time-tip .jw-text{line-height:1em}.jw-controlbar .jw-overlay{margin:0;position:absolute;bottom:2em;left:50%;opacity:0;visibility:hidden}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;color:#aaa;padding:0 .5em;font-size:.8em}.jw-controlbar .jw-option:before:hover,.jw-controlbar .jw-option:hover{color:#eee}.jw-controlbar .jw-option:before{padding-right:.125em}.jw-playlist-container ::-webkit-scrollbar-track{background-color:#333;border-radius:10px}.jw-playlist-container ::-webkit-scrollbar{width:5px;border:10px solid #000;border-bottom:0;border-top:0}.jw-playlist-container ::-webkit-scrollbar-thumb{background-color:#fff;border-radius:5px}.jw-tooltip-title{border-bottom:1px solid #444;text-align:left;padding-left:.7em}.jw-playlist{max-height:11em;min-height:4.5em;overflow-x:hidden;overflow-y:scroll;width:calc(100% - 4px)}.jw-playlist .jw-option{height:3em;margin-right:5px;color:#fff;padding-left:1em;font-size:.8em}.jw-playlist .jw-label,.jw-playlist .jw-name{display:inline-block;line-height:3em;text-align:left;overflow:hidden;white-space:nowrap}.jw-playlist .jw-label{width:1em}.jw-playlist .jw-name{width:11em}.jw-skip{cursor:default;position:absolute;float:right;display:inline-block;right:.75em;bottom:3em}.jw-skip.jw-skippable{cursor:pointer}.jw-skip.jw-hidden{visibility:hidden}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em}.jw-skip .jw-skip-icon:before{content:"\\E60C"}.jw-skip .jw-skip-icon,.jw-skip .jw-text{color:#aaa;vertical-align:middle;line-height:1.5em;font-size:.7em}.jw-skip.jw-skippable:hover{cursor:pointer}.jw-skip.jw-skippable:hover .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-text{color:#eee}.jw-skip.jw-skippable .jw-skip-icon{display:inline;margin:0}.jwplayer.jw-state-paused.jw-flag-casting .jw-display-icon-container,.jwplayer.jw-state-playing.jw-flag-casting .jw-display-icon-container{display:table}.jwplayer.jw-flag-casting .jw-display-icon-container{border-radius:0;border:1px solid #fff;position:absolute;top:auto;left:.5em;right:.5em;bottom:50%;margin-bottom:-12.5%;height:50%;width:50%;padding:0;background-repeat:no-repeat;background-position:50%}.jwplayer.jw-flag-casting .jw-display-icon-container .jw-icon{font-size:3em}.jwplayer.jw-flag-casting.jw-state-complete .jw-preview{display:none}.jw-cast{position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-size:auto;background-position:50% 50%}.jw-cast-label{position:absolute;left:.5em;right:.5em;bottom:75%;margin-bottom:1.5em;text-align:center}.jw-cast-name{color:#ccc}.jw-state-idle .jw-preview{display:block}.jw-state-idle .jw-icon-display:before{content:"\\E60E"}.jw-state-idle .jw-captions,.jw-state-idle .jw-controlbar{display:none}.jw-state-idle .jw-title{display:block}.jwplayer.jw-state-playing .jw-display-icon-container{display:none}.jwplayer.jw-state-playing .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-playing .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-state-paused .jw-display-icon-container .jw-icon-display:before,.jwplayer.jw-state-paused .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-icon-display:before{content:"\\E601"}@-webkit-keyframes spin{to{-webkit-transform:rotate(1turn)}}@keyframes spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.jwplayer.jw-state-buffering .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-buffering .jw-icon-playback:before{content:"\\E60D"}.jwplayer.jw-state-complete .jw-preview{display:block}.jwplayer.jw-state-complete .jw-display-icon-container{z-index:10}.jwplayer.jw-state-complete .jw-display-icon-container .jw-icon-display:before{content:"\\E610"}.jwplayer.jw-state-complete .jw-display-icon-container .jw-text{display:none}.jwplayer.jw-state-complete .jw-icon-playback:before{content:"\\E60E"}.jwplayer.jw-state-complete .jw-captions{display:none}.jwplayer.jw-state-error .jw-title,body .jw-error .jw-title{display:block;z-index:1}.jwplayer.jw-state-error .jw-title .jw-title-primary,body .jw-error .jw-title .jw-title-primary{white-space:normal}.jwplayer.jw-state-error .jw-title .jw-title-primary a,body .jw-error .jw-title .jw-title-primary a{cursor:pointer;color:#699f00;pointer-events:auto}.jwplayer.jw-state-error .jw-preview,body .jw-error .jw-preview{display:block}.jwplayer.jw-state-error .jw-captions,.jwplayer.jw-state-error .jw-controlbar,body .jw-error .jw-captions,body .jw-error .jw-controlbar{display:none}.jwplayer.jw-state-error:hover .jw-display-icon-container,body .jw-error:hover .jw-display-icon-container{cursor:default;color:#fff;background:#000}.jwplayer.jw-state-error .jw-icon-display,body .jw-error .jw-icon-display{cursor:default;font-family:jw-icons;-webkit-font-smoothing:antialiased;font-style:normal;font-weight:400;text-transform:none;background-color:transparent;font-variant:normal;-webkit-font-feature-settings:"liga";-ms-font-feature-settings:"liga" 1;-o-font-feature-settings:"liga";font-feature-settings:"liga";-moz-osx-font-smoothing:grayscale}.jwplayer.jw-state-error .jw-icon-display:before,body .jw-error .jw-icon-display:before{content:"\\E607"}.jwplayer.jw-state-error .jw-icon-display:hover,body .jw-error .jw-icon-display:hover{color:#fff}body .jw-error{font-size:16px;background-color:#000;color:#eee;width:100%;height:100%;display:table;opacity:1;position:relative}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jwplayer.jw-flag-cast-available .jw-controlbar{display:table}.jwplayer.jw-flag-cast-available .jw-icon-cast{display:inline-block}.jwplayer.jw-flag-skin-loading .jw-captions,.jwplayer.jw-flag-skin-loading .jw-controls,.jwplayer.jw-flag-skin-loading .jw-title{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-controlbar,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-dock,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-logo.jw-hide{display:none}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-captions,.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive.jw-state-playing .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:none}.jwplayer.jw-flag-user-inactive.jw-state-buffering .jw-controlbar{display:none}.jwplayer.jw-flag-media-audio .jw-controlbar,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive .jw-controlbar{display:table}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-captions,.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing .jw-plugin{bottom:3em}.jwplayer.jw-flag-media-audio.jw-flag-user-inactive.jw-state-playing video::-webkit-media-text-track-container{max-height:84.5%}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-dock,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-preview{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-horizontal,.jwplayer.jw-flag-ads .jw-controlbar .jw-text{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-playback,.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:inline}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-ads-googleima .jw-controlbar{display:table;bottom:0}.jwplayer.jw-flag-ads-googleima.jw-flag-touch .jw-controlbar{font-size:1em}.jwplayer.jw-flag-ads-googleima.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:none}.jwplayer.jw-flag-ads-googleima.jw-skin-seven .jw-controlbar{font-size:.9em}.jwplayer.jw-flag-ads-vpaid .jw-controlbar{display:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls{display:none!important}.jwplayer.jw-flag-ads.jw-flag-touch .jw-controlbar{display:table}.jwplayer.jw-flag-overlay-open-related .jw-controls,.jwplayer.jw-flag-overlay-open-related .jw-title,.jwplayer.jw-flag-overlay-open-sharing .jw-controls,.jwplayer.jw-flag-overlay-open-sharing .jw-title,.jwplayer.jw-flag-overlay-open .jw-controls-right .jw-logo,.jwplayer.jw-flag-overlay-open .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-controls-disabled .jw-controls{visibility:hidden}.jw-flag-controls-disabled .jw-logo{visibility:visible}.jw-flag-controls-disabled .jw-media{cursor:auto}body .jwplayer.jw-flag-flash-blocked .jw-title{display:block}body .jwplayer.jw-flag-flash-blocked .jw-controls,body .jwplayer.jw-flag-flash-blocked .jw-overlays,body .jwplayer.jw-flag-flash-blocked .jw-preview{display:none}.jw-flag-touch .jw-controlbar,.jw-flag-touch .jw-plugin,.jw-flag-touch .jw-skip{font-size:1.5em}.jw-flag-touch .jw-captions{bottom:4.25em}.jw-flag-touch video::-webkit-media-text-track-container{max-height:70%}.jw-flag-touch .jw-icon-tooltip.jw-open-drawer:before{display:inline;content:"\\E615"}.jw-flag-touch .jw-display-icon-container{pointer-events:none}.jw-flag-touch.jw-state-paused .jw-display-icon-container{display:table}.jw-flag-compact-player .jw-icon-playlist,.jw-flag-compact-player .jw-text-duration,.jw-flag-compact-player .jw-text-elapsed,.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display-icon-container{display:none}.jwplayer.jw-flag-audio-player{background-color:transparent}.jwplayer.jw-flag-audio-player .jw-media{visibility:hidden}.jwplayer.jw-flag-audio-player .jw-media object{width:1px;height:1px}.jwplayer.jw-flag-audio-player .jw-display-icon-container,.jwplayer.jw-flag-audio-player .jw-preview{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar{display:table;height:auto;left:0;bottom:0;margin:0;width:100%;min-width:100%;opacity:1}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-fullscreen,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-inline.jw-icon-volume,.jwplayer.jw-flag-audio-player .jw-controlbar .jw-slider-volume.jw-slider-horizontal{display:inline-block}.jwplayer.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip.jw-icon-volume{display:none}.jwplayer.jw-flag-audio-player.jw-flag-user-inactive .jw-controlbar{display:table}.jw-skin-seven .jw-background-color{background:#000}.jw-skin-seven .jw-controlbar{border-top:1px solid #333;height:2.5em}.jw-skin-seven .jw-group{vertical-align:middle}.jw-skin-seven .jw-playlist{background-color:rgba(0,0,0,.5)}.jw-skin-seven .jw-playlist-container{left:-43%;background-color:rgba(0,0,0,.5)}.jw-skin-seven .jw-playlist-container .jw-option{border-bottom:1px solid #444}.jw-skin-seven .jw-playlist-container .jw-option.jw-active-option,.jw-skin-seven .jw-playlist-container .jw-option:hover{background-color:#000}.jw-skin-seven .jw-playlist-container .jw-option:hover .jw-label{color:#ff0046}.jw-skin-seven .jw-playlist-container .jw-icon-playlist{margin-left:0}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play{color:#ff0046}.jw-skin-seven .jw-playlist-container .jw-label .jw-icon-play:before{padding-left:0}.jw-skin-seven .jw-tooltip-title{background-color:#000;color:#fff}.jw-skin-seven .jw-button-color,.jw-skin-seven .jw-text{color:#fff}.jw-skin-seven .jw-button-color:hover,.jw-skin-seven .jw-toggle{color:#ff0046}.jw-skin-seven .jw-toggle.jw-off{color:#fff}.jw-skin-seven .jw-controlbar .jw-icon:before,.jw-skin-seven .jw-text-duration,.jw-skin-seven .jw-text-elapsed{padding:0 .7em}.jw-skin-seven .jw-controlbar .jw-icon-prev:before{padding-right:.25em}.jw-skin-seven .jw-controlbar .jw-icon-playlist:before{padding:0 .45em}.jw-skin-seven .jw-controlbar .jw-icon-next:before{padding-left:.25em}.jw-skin-seven .jw-icon-next,.jw-skin-seven .jw-icon-prev{font-size:.7em}.jw-skin-seven .jw-icon-prev:before{border-left:1px solid #666}.jw-skin-seven .jw-icon-next:before{border-right:1px solid #666}.jw-skin-seven .jw-icon-display{color:#fff}.jw-skin-seven .jw-icon-display:before{padding-left:0}.jw-skin-seven .jw-display-icon-container{border-radius:50%;border:1px solid #333}.jw-skin-seven .jw-rail{background-color:#384154;box-shadow:none}.jw-skin-seven .jw-buffer{background-color:#666f82}.jw-skin-seven .jw-progress{background:#ff0046}.jw-skin-seven .jw-knob{width:.6em;height:.6em;background-color:#fff;box-shadow:0 0 0 1px #000;border-radius:1em}.jw-skin-seven .jw-slider-horizontal .jw-slider-container{height:.95em}.jw-skin-seven .jw-slider-horizontal .jw-buffer,.jw-skin-seven .jw-slider-horizontal .jw-progress,.jw-skin-seven .jw-slider-horizontal .jw-rail{height:.2em;border-radius:0}.jw-skin-seven .jw-slider-horizontal .jw-knob{top:-.2em}.jw-skin-seven .jw-slider-horizontal .jw-cue{top:-.05em;width:.3em;height:.3em;background-color:#fff;border-radius:50%}.jw-skin-seven .jw-slider-vertical .jw-buffer,.jw-skin-seven .jw-slider-vertical .jw-progress,.jw-skin-seven .jw-slider-vertical .jw-rail{width:.2em}.jw-skin-seven .jw-slider-vertical .jw-knob{margin-bottom:-.3em}.jw-skin-seven .jw-volume-tip{width:100%;left:-45%;padding-bottom:.7em}.jw-skin-seven .jw-text-duration{color:#666f82}.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:before,.jw-skin-seven .jw-controlbar-right-group .jw-icon-tooltip:before{border-left:1px solid #666}.jw-skin-seven .jw-controlbar-right-group .jw-icon-inline:first-child:before{border:none}.jw-skin-seven .jw-dock .jw-dock-button{border-radius:50%;border:1px solid #333}.jw-skin-seven .jw-dock .jw-overlay{border-radius:2.5em}.jw-skin-seven .jw-icon-tooltip .jw-active-option{background-color:#ff0046;color:#fff}.jw-skin-seven .jw-icon-volume{min-width:2.6em}.jw-skin-seven .jw-menu,.jw-skin-seven .jw-skip,.jw-skin-seven .jw-time-tip,.jw-skin-seven .jw-volume-tip{border:1px solid #333}.jw-skin-seven .jw-time-tip{padding:.2em;bottom:1.3em}.jw-skin-seven .jw-menu,.jw-skin-seven .jw-volume-tip{bottom:.24em}.jw-skin-seven .jw-skip{padding:.4em;border-radius:1.75em}.jw-skin-seven .jw-skip .jw-icon-inline,.jw-skin-seven .jw-skip .jw-text{color:#fff;line-height:1.75em}.jw-skin-seven .jw-skip.jw-skippable:hover .jw-icon-inline,.jw-skin-seven .jw-skip.jw-skippable:hover .jw-text{color:#ff0046}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon:before,.jw-skin-seven.jw-flag-touch .jw-text-duration,.jw-skin-seven.jw-flag-touch .jw-text-elapsed{padding:0 .35em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-prev:before{padding:0 .125em 0 .7em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-next:before{padding:0 .7em 0 .125em}.jw-skin-seven.jw-flag-touch .jw-controlbar .jw-icon-playlist:before{padding:0 .225em}', '']);
    }, function (r, o) {
        r.exports = function () {
            var r = [];
            return r.toString = function () {
                    for (var r = [], o = 0; o < this.length; o++) {
                        var t = this[o];
                        t[2] ? r.push('@media ' + t[2] + '{' + t[1] + '}') : r.push(t[1]);
                    }
                    return r.join('');
                }, r.i = function (o, t) {
                    'string' == typeof o && (o = [[null, o, '']]);
                    for (var e = {}, n = 0; n < this.length; n++) {
                        var a = this[n][0];
                        'number' == typeof a && (e[a] = !0);
                    }
                    for (n = 0; n < o.length; n++) {
                        var i = o[n];
                        'number' == typeof i[0] && e[i[0]] || (t && !i[2] ? i[2] = t : t && (i[2] = '(' + i[2] + ') and (' + t + ')'), r.push(i));
                    }
                }, r;
        };
    }, function (r, o, t) {
        var e = t(9);
        r.exports = (e.default || e).template({
            compiler: [7, '>= 4.0.0'],
            main: function (r, o, t, e, n) {
                return '<div class="jw-adv jw-reset">\n    <div class="adv-countdown"></div>\n    <div class="adv-close">X</div>\n</div>';
            },
            useData: !0
        });
    }, function (r, o, t) {
        var e = t(9);
        r.exports = (e.default || e).template({
            compiler: [7, '>= 4.0.0'],
            main: function (r, o, t, e, n) {
                return '<div class="jw-display-icon-container jw-background-color jw-reset">\n    <div class="jw-icon jw-icon-display jw-button-color jw-reset"></div>\n</div>\n';
            },
            useData: !0
        });
    }, function (r, o, t) {
        var e = t(9);
        r.exports = (e.default || e).template({
            1: function (r, o, t, e, n) {
                var a;
                var i;
                var c = null != o ? o : {};
                return '    <div class="jw-dock-button jw-background-color jw-reset' + (null != (a = t.if.call(c, null != o ? o.btnClass : o, {name: 'if', hash: {}, fn: r.program(2, n, 0), inverse: r.noop, data: n})) ? a : '') + '" button="' + r.escapeExpression((i = null != (i = t.id || (null != o ? o.id : o)) ? i : t.helperMissing, 'function' == typeof i ? i.call(c, {name: 'id', hash: {}, data: n}) : i)) + '">\n        <div class="jw-icon jw-dock-image jw-reset" ' + (null != (a = t.if.call(c, null != o ? o.img : o, {name: 'if', hash: {}, fn: r.program(4, n, 0), inverse: r.noop, data: n})) ? a : '') + '></div>\n        <div class="jw-arrow jw-reset"></div>\n' + (null != (a = t.if.call(c, null != o ? o.tooltip : o, {name: 'if', hash: {}, fn: r.program(6, n, 0), inverse: r.noop, data: n})) ? a : '') + '    </div>\n';
            },
            2: function (r, o, t, e, n) {
                var a;
                return ' ' + r.escapeExpression((a = null != (a = t.btnClass || (null != o ? o.btnClass : o)) ? a : t.helperMissing, 'function' == typeof a ? a.call(null != o ? o : {}, {name: 'btnClass', hash: {}, data: n}) : a));
            },
            4: function (r, o, t, e, n) {
                var a;
                return 'style=\'background-image: url("' + r.escapeExpression((a = null != (a = t.img || (null != o ? o.img : o)) ? a : t.helperMissing, 'function' == typeof a ? a.call(null != o ? o : {}, {name: 'img', hash: {}, data: n}) : a)) + '")\'';
            },
            6: function (r, o, t, e, n) {
                var a;
                return '        <div class="jw-overlay jw-background-color jw-reset">\n            <span class="jw-text jw-dock-text jw-reset">' + r.escapeExpression((a = null != (a = t.tooltip || (null != o ? o.tooltip : o)) ? a : t.helperMissing, 'function' == typeof a ? a.call(null != o ? o : {}, {name: 'tooltip', hash: {}, data: n}) : a)) + '</span>\n        </div>\n';
            },
            compiler: [7, '>= 4.0.0'],
            main: function (r, o, t, e, n) {
                var a;
                return '<div class="jw-dock jw-reset">\n' + (null != (a = t.each.call(null != o ? o : {}, o, {name: 'each', hash: {}, fn: r.program(1, n, 0), inverse: r.noop, data: n})) ? a : '') + '</div>';
            },
            useData: !0
        });
    }, function (r, o, t) {
        var e = t(9);
        r.exports = (e.default || e).template({
            compiler: [7, '>= 4.0.0'],
            main: function (r, o, t, e, n) {
                var a;
                var i = null != o ? o : {};
                var c = t.helperMissing;
                var d = 'function';
                var f = r.escapeExpression;
                return '<div id="' + f((a = null != (a = t.id || (null != o ? o.id : o)) ? a : c, typeof a === d ? a.call(i, {name: 'id', hash: {}, data: n}) : a)) + '"class="jw-skin-' + f((a = null != (a = t.skin || (null != o ? o.skin : o)) ? a : c, typeof a === d ? a.call(i, {name: 'skin', hash: {}, data: n}) : a)) + ' jw-error jw-reset">\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset">' + f((a = null != (a = t.title || (null != o ? o.title : o)) ? a : c, typeof a === d ? a.call(i, {name: 'title', hash: {}, data: n}) : a)) + '</div>\n        <div class="jw-title-secondary jw-reset">' + f((a = null != (a = t.body || (null != o ? o.body : o)) ? a : c, typeof a === d ? a.call(i, {name: 'body', hash: {}, data: n}) : a)) + '</div>\n    </div>\n\n    <div class="jw-icon-container jw-reset">\n        <div class="jw-display-icon-container jw-background-color jw-reset">\n            <div class="jw-icon jw-icon-display jw-reset"></div>\n        </div>\n    </div>\n</div>\n';
            },
            useData: !0
        });
    }, function (r, o, t) {
        var e = t(9);
        r.exports = (e.default || e).template({
            1: function (r, o, t, e, n) {
                var a;
                return 'src="' + r.escapeExpression((a = null != (a = t.file || (null != o ? o.file : o)) ? a : t.helperMissing, 'function' == typeof a ? a.call(null != o ? o : {}, {name: 'file', hash: {}, data: n}) : a)) + '"';
            },
            compiler: [7, '>= 4.0.0'],
            main: function (r, o, t, e, n) {
                var a;
                return '<div class="jw-logo jw-reset">\n    <img class="jw-logo-image" ' + (null != (a = t.if.call(null != o ? o : {}, null != o ? o.file : o, {name: 'if', hash: {}, fn: r.program(1, n, 0), inverse: r.noop, data: n})) ? a : '') + '>\n</div>';
            },
            useData: !0
        });
    }, function (r, o, t) {
        var e = t(9);
        r.exports = (e.default || e).template({
            1: function (r, o, t, e, n) {
                var a;
                var i = r.escapeExpression;
                return '        <li class=\'jw-text jw-option jw-item-' + i((a = null != (a = t.index || n && n.index) ? a : t.helperMissing, 'function' == typeof a ? a.call(null != o ? o : {}, {name: 'index', hash: {}, data: n}) : a)) + ' jw-reset\'>' + i(r.lambda(null != o ? o.label : o, o)) + '</li>\n';
            },
            compiler: [7, '>= 4.0.0'],
            main: function (r, o, t, e, n) {
                var a;
                return '<ul class="jw-menu jw-background-color jw-reset">\n' + (null != (a = t.each.call(null != o ? o : {}, o, {name: 'each', hash: {}, fn: r.program(1, n, 0), inverse: r.noop, data: n})) ? a : '') + '</ul>';
            },
            useData: !0
        });
    }, function (r, o, t) {
        var e = t(9);
        r.exports = (e.default || e).template({
            compiler: [7, '>= 4.0.0'],
            main: function (r, o, t, e, n) {
                var a;
                return '<div id="' + r.escapeExpression((a = null != (a = t.id || (null != o ? o.id : o)) ? a : t.helperMissing, 'function' == typeof a ? a.call(null != o ? o : {}, {name: 'id', hash: {}, data: n}) : a)) + '" class="jwplayer jw-reset" tabindex="0">\n    <div class="jw-aspect jw-reset"></div>\n    <div class="jw-media jw-reset"></div>\n    <div class="jw-preview jw-reset"></div>\n    <div class="jw-title jw-reset">\n        <div class="jw-title-primary jw-reset"></div>\n        <div class="jw-title-secondary jw-reset"></div>\n    </div>\n    <div class="jw-overlays jw-reset"></div>\n    <div class="jw-controls jw-reset"></div>\n    <div class="jw-warning jw-reset">\n        用户鉴权失败，请先<a target="_blank" href="http://bce.baidu.com">注册</a>成为百度开放云用户\n    </div>\n    <div class="jw-marquee">百度开放云</div>\n</div>';
            },
            useData: !0
        });
    }, function (r, o, t) {
        var e = t(9);
        r.exports = (e.default || e).template({
            1: function (r, o, t, e, n) {
                var a;
                return null != (a = t.if.call(null != o ? o : {}, null != o ? o.active : o, {name: 'if', hash: {}, fn: r.program(2, n, 0), inverse: r.program(4, n, 0), data: n})) ? a : '';
            },
            2: function (r, o, t, e, n) {
                var a;
                var i = r.escapeExpression;
                return '                <li class=\'jw-option jw-text jw-active-option jw-item-' + i((a = null != (a = t.index || n && n.index) ? a : t.helperMissing, 'function' == typeof a ? a.call(null != o ? o : {}, {name: 'index', hash: {}, data: n}) : a)) + ' jw-reset\'>\n                    <span class="jw-label jw-reset"><span class="jw-icon jw-icon-play jw-reset"></span></span>\n                    <span class="jw-name jw-reset">' + i(r.lambda(null != o ? o.title : o, o)) + '</span>\n                </li>\n';
            },
            4: function (r, o, t, e, n) {
                var a;
                var i = r.escapeExpression;
                var c = r.lambda;
                return '                <li class=\'jw-option jw-text jw-item-' + i((a = null != (a = t.index || n && n.index) ? a : t.helperMissing, 'function' == typeof a ? a.call(null != o ? o : {}, {name: 'index', hash: {}, data: n}) : a)) + ' jw-reset\'>\n                    <span class="jw-label jw-reset">' + i(c(null != o ? o.label : o, o)) + '</span>\n                    <span class="jw-name jw-reset">' + i(c(null != o ? o.title : o, o)) + '</span>\n                </li>\n';
            },
            compiler: [7, '>= 4.0.0'],
            main: function (r, o, t, e, n) {
                var a;
                return '<div class="jw-menu jw-playlist-container jw-background-color jw-reset">\n\n    <div class="jw-tooltip-title jw-reset">\n        <span class="jw-icon jw-icon-inline jw-icon-playlist jw-reset"></span>\n        <span class="jw-text jw-reset">PLAYLIST</span>\n    </div>\n\n    <ul class="jw-playlist jw-reset">\n' + (null != (a = t.each.call(null != o ? o : {}, o, {name: 'each', hash: {}, fn: r.program(1, n, 0), inverse: r.noop, data: n})) ? a : '') + '    </ul>\n</div>';
            },
            useData: !0
        });
    }, function (r, o, t) {
        var e = t(9);
        r.exports = (e.default || e).template({
            1: function (r, o, t, e, n) {
                var a;
                var i;
                var c = null != o ? o : {};
                var d = t.helperMissing;
                var f = 'function';
                var h = r.escapeExpression;
                return '        <li class="jw-reset' + (null != (a = t.if.call(c, null != o ? o.featured : o, {name: 'if', hash: {}, fn: r.program(2, n, 0), inverse: r.noop, data: n})) ? a : '') + '">\n            <a href="' + h((i = null != (i = t.link || (null != o ? o.link : o)) ? i : d, typeof i === f ? i.call(c, {name: 'link', hash: {}, data: n}) : i)) + '" class="jw-reset" target="_blank">\n' + (null != (a = t.if.call(c, null != o ? o.showLogo : o, {name: 'if', hash: {}, fn: r.program(4, n, 0), inverse: r.noop, data: n})) ? a : '') + '                ' + h((i = null != (i = t.title || (null != o ? o.title : o)) ? i : d, typeof i === f ? i.call(c, {name: 'title', hash: {}, data: n}) : i)) + '\n            </a>\n        </li>\n';
            },
            2: function (r, o, t, e, n) {
                return ' jw-featured';
            },
            4: function (r, o, t, e, n) {
                return '                <span class="jw-icon jw-rightclick-logo jw-reset"></span>\n';
            },
            compiler: [7, '>= 4.0.0'],
            main: function (r, o, t, e, n) {
                var a;
                return '<div class="jw-rightclick jw-reset">\n    <ul class="jw-reset">\n' + (null != (a = t.each.call(null != o ? o : {}, null != o ? o.items : o, {name: 'each', hash: {}, fn: r.program(1, n, 0), inverse: r.noop, data: n})) ? a : '') + '    </ul>\n</div>';
            },
            useData: !0
        });
    }, function (r, o, t) {
        var e = t(9);
        r.exports = (e.default || e).template({
            compiler: [7, '>= 4.0.0'],
            main: function (r, o, t, e, n) {
                var a;
                var i = null != o ? o : {};
                var c = t.helperMissing;
                var d = 'function';
                var f = r.escapeExpression;
                return '<div class="' + f((a = null != (a = t.className || (null != o ? o.className : o)) ? a : c, typeof a === d ? a.call(i, {name: 'className', hash: {}, data: n}) : a)) + ' ' + f((a = null != (a = t.orientation || (null != o ? o.orientation : o)) ? a : c, typeof a === d ? a.call(i, {name: 'orientation', hash: {}, data: n}) : a)) + ' jw-reset">\n    <div class="jw-slider-container jw-reset">\n        <div class="jw-rail jw-reset"></div>\n        <div class="jw-buffer jw-reset"></div>\n        <div class="jw-progress jw-reset"></div>\n        <div class="jw-knob jw-reset"></div>\n    </div>\n</div>';
            },
            useData: !0
        });
    }, function (r, o, t) {
        'use strict';
        function e(r) {
            return r && r.__esModule ? r : {
                'default': r
            };
        }
        function n(r) {
            if (r && r.__esModule) {
                return r;
            }

            var o = {};
            if (null != r) {
                for (var t in r) {
                    Object.prototype.hasOwnProperty.call(r, t) && (o[t] = r[t]);
                }
            }

            return o.default = r, o;
        }
        function a() {
            var r = new c.HandlebarsEnvironment;
            return s.extend(r, c), r.SafeString = f.default, r.Exception = w.default, r.Utils = s, r.escapeExpression = s.escapeExpression, r.VM = g, r.template = function (o) {
                    return g.template(o, r);
                }, r;
        }
        o.__esModule = !0;
        var i = t(32);
        var c = n(i);
        var d = t(73);
        var f = e(d);
        var h = t(12);
        var w = e(h);
        var p = t(10);
        var s = n(p);
        var b = t(72);
        var g = n(b);
        var l = t(71);
        var u = e(l);
        var v = a();
        v.create = a, u.default(v), v.default = v, o.default = v, r.exports = o.default;
    }, function (r, o, t) {
        'use strict';
        function e(r) {
            return r && r.__esModule ? r : {
                'default': r
            };
        }
        function n(r) {
            i.default(r);
        }
        o.__esModule = !0, o.registerDefaultDecorators = n;
        var a = t(61);
        var i = e(a);
    }, function (r, o, t) {
        'use strict';
        o.__esModule = !0;
        var e = t(10);
        o.default = function (r) {
            r.registerDecorator('inline', function (r, o, t, n) {
                var a = r;
                return o.partials || (o.partials = {}, a = function (n, a) {
                        var i = t.partials;
                        t.partials = e.extend({}, i, o.partials);
                        var c = r(n, a);
                        return t.partials = i, c;
                    }), o.partials[n.args[0]] = n.fn, a;
            });
        }, r.exports = o.default;
    }, function (r, o, t) {
        'use strict';
        function e(r) {
            return r && r.__esModule ? r : {
                'default': r
            };
        }
        function n(r) {
            i.default(r), d.default(r), h.default(r), p.default(r), b.default(r), l.default(r), v.default(r);
        }
        o.__esModule = !0, o.registerDefaultHelpers = n;
        var a = t(63);
        var i = e(a);
        var c = t(64);
        var d = e(c);
        var f = t(65);
        var h = e(f);
        var w = t(66);
        var p = e(w);
        var s = t(67);
        var b = e(s);
        var g = t(68);
        var l = e(g);
        var u = t(69);
        var v = e(u);
    }, function (r, o, t) {
        'use strict';
        o.__esModule = !0;
        var e = t(10);
        o.default = function (r) {
            r.registerHelper('blockHelperMissing', function (o, t) {
                var n = t.inverse;
                var a = t.fn;
                if (o === !0) {
                    return a(this);
                }

                if (o === !1 || null == o) {
                    return n(this);
                }

                if (e.isArray(o)) {
                    return o.length > 0 ? (t.ids && (t.ids = [t.name]), r.helpers.each(o, t)) : n(this);
                }

                if (t.data && t.ids) {
                    var i = e.createFrame(t.data);
                    i.contextPath = e.appendContextPath(t.data.contextPath, t.name), t = {
                        data: i
                    };
                }

                return a(o, t);
            });
        }, r.exports = o.default;
    }, function (r, o, t) {
        'use strict';
        function e(r) {
            return r && r.__esModule ? r : {
                'default': r
            };
        }
        o.__esModule = !0;
        var n = t(10);
        var a = t(12);
        var i = e(a);
        o.default = function (r) {
            r.registerHelper('each', function (r, o) {
                function t(o, t, a) {
                    f && (f.key = o, f.index = t, f.first = 0 === t, f.last = !!a, h && (f.contextPath = h + o)), d += e(r[o], {data: f, blockParams: n.blockParams([r[o], o], [h + o, null])});
                }
                if (!o) {
                    throw new i.default('Must pass iterator to #each');
                }

                var e = o.fn;
                var a = o.inverse;
                var c = 0;
                var d = '';
                var f = void 0;
                var h = void 0;
                if (o.data && o.ids && (h = n.appendContextPath(o.data.contextPath, o.ids[0]) + '.'), n.isFunction(r) && (r = r.call(this)), o.data && (f = n.createFrame(o.data)), r && 'object' == typeof r) {
                    if (n.isArray(r)) {
                        for (var w = r.length; c < w; c++) {
                            c in r && t(c, c, c === r.length - 1);
                        }
                    }
                    else {
                        var p = void 0;
                        for (var s in r) {
                            r.hasOwnProperty(s) && (void 0 !== p && t(p, c - 1), p = s, c++);
                        }
                        void 0 !== p && t(p, c - 1, !0);
                    }
                }

                return 0 === c && (d = a(this)), d;
            });
        }, r.exports = o.default;
    }, function (r, o, t) {
        'use strict';
        function e(r) {
            return r && r.__esModule ? r : {
                'default': r
            };
        }
        o.__esModule = !0;
        var n = t(12);
        var a = e(n);
        o.default = function (r) {
            r.registerHelper('helperMissing', function () {
                if (1 !== arguments.length) {
                    throw new a.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
                }

            });
        }, r.exports = o.default;
    }, function (r, o, t) {
        'use strict';
        o.__esModule = !0;
        var e = t(10);
        o.default = function (r) {
            r.registerHelper('if', function (r, o) {
                return e.isFunction(r) && (r = r.call(this)), !o.hash.includeZero && !r || e.isEmpty(r) ? o.inverse(this) : o.fn(this);
            }), r.registerHelper('unless', function (o, t) {
                return r.helpers.if.call(this, o, {fn: t.inverse, inverse: t.fn, hash: t.hash});
            });
        }, r.exports = o.default;
    }, function (r, o) {
        'use strict';o.__esModule = !0, o.default = function (r) {
            r.registerHelper('log', function () {
                for (var o = [void 0], t = arguments[arguments.length - 1], e = 0; e < arguments.length - 1; e++) {
                    o.push(arguments[e]);

                }
                var n = 1;
                null != t.hash.level ? n = t.hash.level : t.data && null != t.data.level && (n = t.data.level), o[0] = n, r.log.apply(r, o);
            });
        }, r.exports = o.default;
    }, function (r, o) {
        'use strict';o.__esModule = !0, o.default = function (r) {
            r.registerHelper('lookup', function (r, o) {
                return r && r[o];
            });
        }, r.exports = o.default;
    }, function (r, o, t) {
        'use strict';
        o.__esModule = !0;
        var e = t(10);
        o.default = function (r) {
            r.registerHelper('with', function (r, o) {
                e.isFunction(r) && (r = r.call(this));
                var t = o.fn;
                if (e.isEmpty(r)) {
                    return o.inverse(this);
                }

                var n = o.data;
                return o.data && o.ids && (n = e.createFrame(o.data), n.contextPath = e.appendContextPath(o.data.contextPath, o.ids[0])), t(r, {data: n, blockParams: e.blockParams([r], [n && n.contextPath])});
            });
        }, r.exports = o.default;
    }, function (r, o, t) {
        'use strict';
        o.__esModule = !0;
        var e = t(10);
        var n = {
            methodMap: ['debug', 'info', 'warn', 'error'],
            level: 'info',
            lookupLevel: function (r) {
                if ('string' == typeof r) {
                    var o = e.indexOf(n.methodMap, r.toLowerCase());
                    r = o >= 0 ? o : parseInt(r, 10);
                }

                return r;
            },
            log: function (r) {
                if (r = n.lookupLevel(r), 'undefined' != typeof console && n.lookupLevel(n.level) <= r) {
                    var o = n.methodMap[r];
                    console[o] || (o = 'log');
                    for (var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
                        e[a - 1] = arguments[a];

                    }
                    console[o].apply(console, e);
                }

            }
        };
        o.default = n, r.exports = o.default;
    }, function (r, o) {
        (function (t) {
            'use strict';o.__esModule = !0, o.default = function (r) {
                var o = 'undefined' != typeof t ? t : window;
                var e = o.Handlebars;
                r.noConflict = function () {
                    return o.Handlebars === r && (o.Handlebars = e), r;
                };
            }, r.exports = o.default;
        }).call(o, function () {
            return this;
        }());
    }, function (r, o, t) {
        'use strict';
        function e(r) {
            return r && r.__esModule ? r : {
                'default': r
            };
        }
        function n(r) {
            if (r && r.__esModule) {
                return r;
            }

            var o = {};
            if (null != r) {
                for (var t in r) {
                    Object.prototype.hasOwnProperty.call(r, t) && (o[t] = r[t]);
                }
            }

            return o.default = r, o;
        }
        function a(r) {
            var o = r && r[0] || 1;
            var t = u.COMPILER_REVISION;
            if (o !== t) {
                if (o < t) {
                    var e = u.REVISION_CHANGES[t];
                    var n = u.REVISION_CHANGES[o];
                    throw new l.default('Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (' + e + ') or downgrade your runtime to an older version (' + n + ').')
                }

                throw new l.default('Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (' + r[1] + ').')
            }
        }
        function i(r, o) {
            function t(t, e, n) {
                n.hash && (e = b.extend({}, e, n.hash), n.ids && (n.ids[0] = !0)), t = o.VM.resolvePartial.call(this, t, e, n);var a = o.VM.invokePartial.call(this, t, e, n);
                if (null == a && o.compile && (n.partials[n.name] = o.compile(t, r.compilerOptions, o), a = n.partials[n.name](e, n)), null != a) {
                    if (n.indent) {
                        for (var i = a.split('\n'), c = 0, d = i.length; c < d && (i[c] || c + 1 !== d); c++) {
                            i[c] = n.indent + i[c];

                        }
                        a = i.join('\n');
                    }

                    return a;
                }

                throw new l.default('The partial ' + n.name + ' could not be compiled when running in runtime-only mode')
            }
            function e(o) {
                function t(o) {
                    return '' + r.main(n, o, n.helpers, n.partials, i, d, c);
                }
                var a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                var i = a.data;
                e._setup(a), !a.partial && r.useData && (i = w(o, i));var c = void 0;
                var d = r.useBlockParams ? [] : void 0;
                return r.useDepths && (c = a.depths ? o !== a.depths[0] ? [o].concat(a.depths) : a.depths : [o]), (t = p(r.main, t, n, a.depths || [], i, d))(o, a);
            }
            if (!o) {
                throw new l.default('No environment passed to template');
            }

            if (!r || !r.main) {
                throw new l.default('Unknown template object: ' + typeof r);
            }

            r.main.decorator = r.main_d, o.VM.checkRevision(r.compiler);var n = {
                strict: function (r, o) {
                    if (!(o in r)) {
                        throw new l.default('"' + o + '" not defined in ' + r);
                    }

                    return r[o];
                },
                lookup: function (r, o) {
                    for (var t = r.length, e = 0; e < t; e++) {
                        if (r[e] && null != r[e][o]) {
                            return r[e][o];
                        }

                    }

                },
                lambda: function (r, o) {
                    return 'function' == typeof r ? r.call(o) : r;
                },
                escapeExpression: b.escapeExpression,
                invokePartial: t,
                fn: function (o) {
                    var t = r[o];
                    return t.decorator = r[o + '_d'], t;
                },
                programs: [],
                program: function (r, o, t, e, n) {
                    var a = this.programs[r];
                    var i = this.fn(r);
                    return o || n || e || t ? a = c(this, r, i, o, t, e, n) : a || (a = this.programs[r] = c(this, r, i)), a;
                },
                data: function (r, o) {
                    for (; r && o--;) {
                        r = r._parent;

                    }
                    return r;
                },
                merge: function (r, o) {
                    var t = r || o;
                    return r && o && r !== o && (t = b.extend({}, o, r)), t;
                },
                noop: o.VM.noop,
                compilerInfo: r.compiler
            };
            return e.isTop = !0, e._setup = function (t) {
                    t.partial ? (n.helpers = t.helpers, n.partials = t.partials, n.decorators = t.decorators) : (n.helpers = n.merge(t.helpers, o.helpers), r.usePartial && (n.partials = n.merge(t.partials, o.partials)), (r.usePartial || r.useDecorators) && (n.decorators = n.merge(t.decorators, o.decorators)));
                }, e._child = function (o, t, e, a) {
                    if (r.useBlockParams && !e) {
                        throw new l.default('must pass block params');
                    }

                    if (r.useDepths && !a) {
                        throw new l.default('must pass parent depths');
                    }

                    return c(n, o, r[o], t, 0, e, a);
                }, e;
        }
        function c(r, o, t, e, n, a, i) {
            function c(o) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                var c = i;
                return i && o !== i[0] && (c = [o].concat(i)), t(r, o, r.helpers, r.partials, n.data || e, a && [n.blockParams].concat(a), c);
            }
            return c = p(t, c, r, i, e, a), c.program = o, c.depth = i ? i.length : 0, c.blockParams = n || 0, c;
        }
        function d(r, o, t) {
            return r ? r.call || t.name || (t.name = r, r = t.partials[r]) : r = '@partial-block' === t.name ? t.data['partial-block'] : t.partials[t.name], r;
        }
        function f(r, o, t) {
            t.partial = !0, t.ids && (t.data.contextPath = t.ids[0] || t.data.contextPath);var e = void 0;
            if (t.fn && t.fn !== h && (t.data = u.createFrame(t.data), e = t.data['partial-block'] = t.fn, e.partials && (t.partials = b.extend({}, t.partials, e.partials))), void 0 === r && e && (r = e), void 0 === r) {
                throw new l.default('The partial ' + t.name + ' could not be found');
            }

            if (r instanceof Function) {
                return r(o, t);
            }
        }
        function h() {
            return '';
        }
        function w(r, o) {
            return o && 'root' in o || (o = o ? u.createFrame(o) : {}, o.root = r), o;
        }
        function p(r, o, t, e, n, a) {
            if (r.decorator) {
                var i = {};
                o = r.decorator(o, i, t, e && e[0], n, a, e), b.extend(o, i);
            }

            return o;
        }
        o.__esModule = !0, o.checkRevision = a, o.template = i, o.wrapProgram = c, o.resolvePartial = d, o.invokePartial = f, o.noop = h;
        var s = t(10);
        var b = n(s);
        var g = t(12);
        var l = e(g);
        var u = t(32);
    }, function (r, o) {
        'use strict';
        function t(r) {
            this.string = r;
        }
        o.__esModule = !0, t.prototype.toString = t.prototype.toHTML = function () {
            return '' + this.string;
        }, o.default = t, r.exports = o.default;
    }, function (r, o, t) {
        var e = t(47);
        'string' == typeof e && (e = [['all-players', e, '']]), t(34).style(e, 'all-players'), e.locals && (r.exports = e.locals);
    }, function (r, o) {
        r.exports = 'data:application/font-woff;base64,d09GRgABAAAAAA/sAAwAAAAAGggAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABHAAAABwAAAAcdmhnFk9TLzIAAAE4AAAAPAAAAGAPEwN/Y21hcAAAAXQAAABVAAABXhpX0/dnYXNwAAABzAAAAAgAAAAIAAAAEGdseWYAAAHUAAALqQAAEyhNhURMaGVhZAAADYAAAAAzAAAANgm9wORoaGVhAAANtAAAACAAAAAkCUEFmWhtdHgAAA3UAAAASgAAAHR2CwbXbG9jYQAADiAAAAA8AAAAPDmAPzJtYXhwAAAOXAAAABgAAAAgACYBc25hbWUAAA50AAAA7wAAAdeoyha4cG9zdAAAD2QAAACFAAABK0ItYZUAAAABAAAAANIEFAUAAAAA0dQiKwAAAADSkDDleJxjYGapZZzAwMrAwDST6QwDA0M/hGZ8zWDMyMmAChgFGDAA4zNx5gP/DzA4MAMxiI8kp8DACABCKAqbeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCs/E///9/x+sSuEZA4T9/4kUK1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAOwsNMwAAAAABAAH//wAPeJy1V2uMW8UVnsedO/f92Huv7X3Ze22vnfVuvA+vbZLsOk42rwaFQBLYzQbQEqI8gKpbUNU2CsVVfoBEIoIigooUKRKVeIiIiKhIjSrqlhaplVL1T4XUX4gfSLRFQmoLUtl1euZ6vdkE+vgBV3PncWbmzJk535xzBmHU+QhCGwj6X20JLSDELtEG2og2o23oWwgNBukiKU9WqkVcnqyR0kSSBL7MkzjwLZJxJ2LxGnQUSSZtQYdoldxxHITlML6a4Xpx33RGg2/HyZcfeODlkztEPTO9r1jYncRk49Fn9ux55uhGTJK7C+Reoi//8wL+XuvZ3Xi49adkUozrLgapmbSYKTikZ1IBkIAnbvZ3m72WmC24WL1md3/rQXr4hRc+iBLsDKM6QrQJewoR8vwkbKFGyiUhfbQz2FMgZB9/tiPHnR0pRRkJ1uws0KGK8k5BQHBmwF8S/C3UhwpoHM6siPOhG7pQQB7yTJHmy0kaHx/GN2vlJI6Pk6cok4ixtEMf1qWp5V/un1e2PXpm7+E3Tu9XfnaI5zfuLkw/uq+svP3j0R3GVn2dRn7V+phqBO9a+vXWu54+vlWZU+5uvLIwtGtDjs/xyXuOTT2pbysKjbI1cnWjPCqjqS9JhsuQgUjj+L+I2CAyI+ZS3ShoUn252WrQemsgsf3gYzW8fl7ZLsS9fHqfenWe5zftLkw9sq+iXmuMbTPqxjqDNFufEIXiHUtN/MdPl5vTxw5siS9/uueZ41v5PEj+Kkh+Rw6q5XuObXrSmCmunCcTcktIRcfQbxEqRbIKuVkNVwFhgDoQrZ0ysJdOyqRlbuF2EmDsDCpNVGBatdTpg5RJ51anCXhD93j4jXKvs8a/GqzyhS/9bSljhZ4/kugKHbvPNHxF0ckhzJikwQqK4qhOj653ca7R6NM479L1HicWGoZN54nKFc80+lwn6ydGfC+0zIBHX2Dia2boeyPdbug4fYYRKIpG5gmTJF2WgbOrOL1f5tzrBGnDsOghoircN4x+x8163SOeH5qWz7micO5btLHUoOXlGPnL+05CUVXGmK1pCRt2olqcG4wplBJZll2gmmafZfaYZlzTXCCZppWO+VnX6YPFoa0qaty2s74/Ek+sD/ys/fVzRHQVRw76DvoDQkM4nSu7k5VSOBELXF/O4Ejdt2u89P9rvJ0yX6nxDTj8ZtmzkS9enZ6dnZbmRL70EuhSjnSpOopiyVyTJBnPE01RfMCKY4ddt2NFYHC42886Tr8BGOQqmae2YaSDCCPAgUqUSvjnqygB+HBblnVJYviQ4BwYwNkJ3dux0sagB+oRnLmikkPUMswwuAV9szVyX212trb8em0W/8NMaLoDmiSUKowZnFsqSGsnNM2SGVNVJeGAfoP1ifiID/q146ByGA6C9QFc/VjaMs02VuKm2WOBK/j6OaLIn3yALtEB8gHyobHWjQjXSAfW33ViaurEXes7JW6ubYkSRdh0pDo9BzUHpRCqqjgcnKiUJ3OACYBCyWvXXKgC2a0T8NBL8FtBYIk/0y6swBH3cjHm2ImY68TwR6JsvS9yPATjO76PI1vY0Xg1zuPClOZ5vpqvN66cvdJoPYH/js9G1ZWCAi2qrPqRVXscQyW0d61FxqVyyc2UM0HGLQWDHQSLEKGD7GHsloQj4e5aXMNWVwE9jNfaxgNvLyy8feQIud9PWjZASpU59wwj9LyR3itXYgXv0k41rmpdCjfBYkiUmFH/gFuNTFRlOU4+bjUvt+rNJm5evghwtNOxYKw3UfRiadtKaCrHTcL5TOuj9uS4YO72R122xJjwQdOrtqMfbUIHv8p6wJbLsOlyKSi57OZWbt0lEDesOYc1lmDliOAiF754rTY3V5NmRb58deHqkSNXF/AVkMtKeV4+duVK74jnJW3D41wmivp9pUtTfWNn1UsagqZLFKRmJp+rkQMRjzdqc+Ti5ZUjeBKALM5RbtVVroJ5HfRiI4n+sdiHikngfqekjt1NuV7KNuIcMD5z4wa9RH+EnhMxU7qcH8vlI4UJS9WHg2gH7S2OVyaCMZ93zNea3dOoqx0WQl9sjVGr0epUBIEcHAIdl9PlsSnSaeMOKUJIRBkPzsmSIimEWRpXaYzz0HZsziugf8qZrmpxg5mM69zwFDXVFzAGxkthPHDdrCtoXczqNuSJO0YllRsxiU7vmpLYaNZNw63R5PRgH0CJ0MS6fE7jI/ga2IuEzTQuiAARnfuPWq7JlQHbO69pF8e8suAqumGQnbH8ma3jmrb/iR8MehkXvBnHGg80d9DJ78l5b/7uDZvJhJtUAgvzwuXnVLV84Oh4eROH2Vqfoy88cq+mnYyl9jK6M+Wdo+2IfAcAsRLdOwWh0IVrphKXvre4CChvdP5WvVWnjWg85LSxck9RuHpDSQOjG6iFRH5zHjQbAuhQg+VU7GIJCTpuCn6tOvDbDf0bO+vD6m4J1r+2uNhmcNvyAjNogM7QS2gIGivvg45pLJu4HD0QVsJv0HSVmj19UyfO7N175vj09PEze3G9dYupjHn7ycPDD5c7/aJsXL7aWGtKh+5Mja3E+EfJAPWQDHh1S4PuYKZ+HXutT67jEvauL++/vhKnnwNh42gY3jdb4IzyNSreLvlqkgpx+fgoblsmQbAoH893mtF1zbM2a/rnQq42HI8P13KFwsxYd/fYTOGnQxu2bdswFE5mfexnS+G76XXr0oXc2FiusHy9LUpm3YMnHp+a+u6JB4cyw0cfP7Vly6nHjw6fzpSfP3Dg+XImuevuudHRg/fs7L8a2zU0vCPI9N0/WT6YGqIrO0Ar9vzdjj3H8TCy6FgYc7DptLDYem3xxR/+pJW7cPLCIp79NnkC8sULJ8+3MoLSev0x4Xuwx5pkARnwLsgJHyZDdAFBBVinIPyPDXz28PbtDz20ffthEhO5aJH+Tg1fa5ed9s2yjY2tiNB3wJ4MCKljPpfToxiyfG5yM1zxyWplIoUhgy4bk5c/z2azD/d/9hlk2eznt7Zw8yvJKy0ECNiGJPoLeiq6BxbyUAJsOMIhvETd1QyXwHq7qxl+hQTLf+38rYtvRR89dfBg62L7J++99Zagix8pN94BvL1EXwSs342eQm/iAp7CB/EiQl0WTluSn1RqWlFN57ybJk+kfJFMloudd4Lsr5hGlou1TZ0ICsHgpXOi24+tuFDii8HRSMEmbDPJF3BerqwMgKITYLbXqsC1m4QyK6fltAVOEADsJ7WJGptIUohUJmr2ZNFMF4N0jkbchWWXJ6I18nHefveM4ratboexNbwZl6IlNuMU5hkQOpcWA8vV0u9lVU6YBifgUj0wzKyXmZ7EPCwRiUBijDCiJLjyoUOxrDGOGabYNAmmRN+Qknp7mSbhLk+y5NaHGgSc/ZZKFcrgraMBDz3GMJEwIZjQKNmO2qWNQ9BJBmV4IwxYVOlbH4fATgW2WMNYwkxxeyvc4Mwgokmo3DptKzpjIviD15DBeE414MXDZFeVZOYoDHPwowT4ad0GNYL7NN6vxoyapQWKynrUrV3cZqrBVPCYEFFikYgsOSqTNU1l1M4zTYYO6OeGLFETuCqyapzhsGGQXYTTVLWquE6e1hOqpCuY6C44b3ghC/loV7ZL2niAEl7FdBMm51RNh12Dy6Mb6YtY7nK6E4lEStHStjhOgg1GkyC4PNYvW6bMJA5urtWSKYajk5kKTL1qgsCGSf+oSvwBPW7ogZ4YsuFgIXj03QGdw9IUtAZHFOgghHBo4Dsh5lKknkqg6pyovaO9BGbYA4xxCu8CAwYDy/WD8CDQXXhoSNSSRChB4aEZ1uCEsThKzZK6JHNEBt+nY3DcRFZsl3HVVa1e21E0y+0Fp6sKVRGGoznABaoGVmQu+Ra3jTHNlBWTBUzmwr/bQ6AvC45cprbKKZfFTElqfUYpHKIG65vcsmV8+DzoUGdurKL2OHAUhABo4KN45/sAvfOU/AZIMlZt4yWK/g03uOZMAAAAeJxjYGRgYGCUnHXwnbtMPL/NVwZuFgYQuDTBMBxG/9/3/z/rAeYFQC4HAxNIFABwNw13AHicY2BkYGA+8P8AAwMbw/99/3ezHmAAiqAAWQCpMgbkeJxjYYAAxlAIzQTEbAwMCSwMDA6sUMwGxUCxBywNYBomZsv8gMEZKOYGFGsA4wYGL+YGoNgBoLoDCLVA2gmIXZhC/+8DAFPRDlIAAAAAAAAACAAIABAAGACCALIA/gFaAn4DqgPMBAAEIgScBRwF3gX2Bg4GHgY2BnQGhgboBwoHRAd6B6wJlHicY2BkYGCQZSxk4GAAASYGNAAAD0sAm3icjY0xasNAEEWfbNkhTnAZgit1qSQQBFKmC7hwk8KQUpY3QsbsgiRju8sFcoy0gZwjF8hx8iXmAF6Y3Td/5/8B5nwT0Z+IWxbGI654Mh5LfzOOxR/GE274Mp5K/zWesYjmckXxtZT7IaHnkXY9GI+lPxvH4nfjCXd8Gk+l/xjPeOSPHUdSWmpOemtKAl49u2Pa1qe0LoNX94qj4sCegkatqw77QnCh/cKxtbY0w1j/nZCTqVi7pq2DT/IsvzjqZZA7hVQK9UNwod6xlbbhrHs5mFeqfjaTKfguqZx3TdG5bbI5J8syrELwGf8xT00GAHicfc3JDgFRGEThe27TbZ5n8Q73b3SzNLRXQSJiY+HtJZSt2nyp1XHe/d/CObzzRC6iRJmYhApVatRp0KRFmw5devQZMGTEmAlTZszj8+31uFjyvF9DCB+LLAT5+6lcypVcy0zmciO3cif38iCPspCnr6a+qW/qm/qmvqlv6lv+Bgm8Oz0AAAA=';
    }, function (r, o) {
        r.exports = 'data:application/octet-stream;base64,AAEAAAAMAIAAAwBARkZUTXZoZxYAABnsAAAAHE9TLzIPEwN/AAABSAAAAGBjbWFwGlfT9wAAAhwAAAFeZ2FzcAAAABAAABnkAAAACGdseWZNhURMAAADuAAAEyhoZWFkCb3BbgAAAMwAAAA2aGhlYQlBBZkAAAEEAAAAJGhtdHh2CwbXAAABqAAAAHRsb2NhOYA/MgAAA3wAAAA8bWF4cAAmAXMAAAEoAAAAIG5hbWWoyha4AAAW4AAAAddwb3N0Qi1hlQAAGLgAAAErAAEAAAABGZrB7kYIXw889QALBAAAAAAA0pAxnAAAAADSkDGc/77//wXAA6AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABgD/vv+7BcAAAQAAAAAAAAAAAAAAAAAAAB0AAQAAAB0BcQAIAAAAAAACAAAAAAAAAAAAAAAAAAAAAAADBH0BkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAeYXA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAQQAAAAAAAAAAVUAAAAAAAACAAAABgAAYAQAAEAFAABABQAAQAYAAEAGAABABAAA4ASAAEAEAABABgAAQAYAAD0D4ABDBIAARgQAAIAEAACABIAASgOAAEMEwABABMAAQAQAAEAGAABABAAAQgQAAEQCVf++AAAAAwAAAAMAAAAcAAEAAAAAAFgAAwABAAAAHAAEADwAAAAKAAgAAgACAAEAIOYX//3//wAAAAAAIOYA//3//wAA/+QaBQADAAEACgAAAAAAAAAAAAEAAwAAAQYAAAEDAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAIABAAGACCALIA/gFaAn4DqgPMBAAEIgScBRwF3gX2Bg4GHgY2BnQGhgboBwoHRAd6B6wJlAABAAAAAAAAAAAAAgAAOQIAAQAAAAAAAAAAAAIAADkCAAEAAAAAAAAAAAACAAA5AgAEAGAAAAWgA4AAOgA/AEQASQAAJRUiLgI1NDY3LgE1ND4CMzIeAhUUBgceARUUDgIjETIWFz4BNTQuAiMiDgIVFBYXPgEzETEBFSE1IRcVITUhFxUhNSEBQC5SPSMKCgoKRnqjXV2jekYKCgoKIz1SLipKHgECOmaITU2IZjoBAh5KKgJVAgv99ZYBdf6LSgEr/tUeHiM9Ui4ZLhUfQyJdo3pGRnqjXSJDHxUuGS5SPSMBwB0ZDRsOTYhmOjpmiE0OGw0ZHf5eA2KVleCVleCVlQAAAAEAQAAAA8ADgAAhAAATFB4CMzI+AjUzFA4CIyIuAjU0PgIzFSIOAhUxizpmiE1NiGY6S0Z6o11do3pGRnqjXU2IZjoBwE2IZjo6ZohNXaN6RkZ6o11do3pGSzpmiE0AAAQAQAAABMADgAAOABwAKgAxAAAlLgEnIREhES4BJxEhESEHIy4DJzUeAxcxKwEuAyc1HgMXMSsBNR4BFzECfwMFBAIM/EYLKwsEPP2/U1oIRGuMT2Ksg1MItVsHJzpKKj1rUjUItoEvRgxCCygKAsH+6QMKAgFI/MJCTodoQghYCFCAp2ApSDkmB1gHNFFnPH0LRC4AAAAABQBAAAAEwAOAAA4AGQAnADUAPAAAJS4BJyERIREuAScRIREhATUhESEuAycxASMuAyc1HgMXMSsBLgMnNR4DFzErATUeARcxAoACBgUCDfxADCoKBED9wP6AA0D+IBhFWWw+AS1aCEVrjE9irYNSCbNaByc7Sio8alI2CbqAMEQMQAwoDALA/u0CCAMBRvzAAdDw/cA9Z1RBF/3wTYhoQgdaCFCAqGApSDgmB1oINVFnO30MQy4AAAQAQAAABcADgAAEAAkAZwDFAAAzESERIQEhESERBT4BNz4BMzIWFx4BFx4BFx4BFyMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATczDgEHDgEHDgEHDgEjIiYnLgEnLgEnLgE1NDY3PgE3MSE+ATc+ATMyFhceARceARceARcjLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3Mw4BBw4BBw4BBw4BIyImJy4BJy4BJy4BNTQ2Nz4BNzFABYD6gAU2+xQE7PwjDiETFCwYEiEQDxwNDBQICAsCWwEFBQQKBgcOCAgQCRAaCwsSBwcKAwMDAwMDCgcHEgsLGhAWIQwMDwNaAgkHCBMNDBwRECQUGCwUEyEODRUHBwcHBwcVDQG6DSEUEywZESEQEBwMDBUICAoCWgIFBAQLBgYOCAgRCBAbCwsSBwcKAwMDAwMDCgcHEgsLGxAVIgwMDgNbAgkIBxQMDB0QESQTGSwTFCENDhQHBwgIBwcUDgOA/IADNf0WAurXEBgICQkFBQUPCgoYDw4hEwkOBwcMBQUIAwMCBgYGEQoKGA0NHA4NGg0NFwoKEQYGBg0NDiIWFCQREBwLCxIGBgYJCAkXDw8kFBQsFxgtFRQkDxAYCAkJBQUFDwoKGA8OIRMJDgcHDAUFCAMDAgYGBhEKChgNDRwODRoNDRcKChEGBgYNDQ4iFhQkERAcCwsSBgYGCQgJFw8PJBQULBcYLRUUJA8AAwBAAAAFwAOAABAAbwDOAAApASImNRE0NjMhMhYVERQGIwE+ATc+ATc+ATMyFhceARceARceARczLgEnLgEnLgEnLgEjIgYHDgEHDgEHDgEVFBYXHgEXHgEXHgEzMjY3PgE3PgE3PgE3Iw4BBw4BIyImJy4BJy4BJy4BNTQ2NzkBIT4BNz4BNz4BMzIWFx4BFx4BFx4BFzMuAScuAScuAScuASMiBgcOAQcOAQcOARUUFhceARceARceATMyNjc+ATc+ATc+ATcjDgEHDgEjIiYnLgEnLgEnLgE1NDY3OQEFLPuoPVdXPQRYPVdXPfyaAwoHBhILCxsQCRAICA4GBwoEBAYBWgIKCAgUDQwcEA8hEhgsFBMhDg0VBwcHBwcHFQ0OIRMUKxkUJBAQHQwMFAgHCQJaAw8MDCIVEBsLCxIGBwoDBAMDBAG5AwoHBxILCxsQCBEIBw8GBgsEBAUBWwIKCAgVDAwcEBAhERksExQhDQ4UBwcICAcHFA4NIRQTLBkTJBEQHQwMFAcICQJbAw4MDSEVEBsLCxIHBwoDAwMDA1c+AlY+V1c+/ao+VwH0DRgKCxAGBgYCAwMIBQUMBwcOCRMhDg8YCgoOBgUFCQkIGBAPJBQVLRgXLBQUJA8PFwkICQYGBhILCxwQESQUFiIODQ0GBgYRCgoXDQ0aDg4bDQ0YCgsQBgYGAgMDCAUFDAcHDgkTIQ4PGAoKDgYFBQkJCBgQDyQUFS0YFywUFCQPDxcJCAkGBgYSCwscEBEkFBYiDg0NBgYGEQoKFw0NGg4OGw0AAAAAAQDgAKADIALgABQAAAEUDgIjIi4CNTQ+AjMyHgIVAyAtTmk8PGlOLS1OaTw8aU4tAcA8aU4tLU5pPDxpTi0tTmk8AAADAEAAEARAA5AAAwAQAB8AADcJASElMjY1NCYjIgYVFBYzEzQmIyIGFREUFjMyNjURQAIAAgD8AAIADhUVDg4VFQ4jFQ4OFRUODhUQA4D8gHAWEA8YFhEQFgHmDxgWEf7XDxgWEQEpAAIAQAAAA8ADgAAHAA8AADMRFzcXBxchASERJwcnNydAgLCNsID+cwHzAY2AsI2wgAGNgLCNsIADgP5zgLCNsIAAAAAABQBAAAAFwAOAAAQACQAWADMATwAAMxEhESEBIREhEQEzNTMRIzUjFSMRMxUlHgEXHgEXHgEVFAYHDgEHDgEHDgErAREzHgEXMQcRMzI2Nz4BNz4BNz4BNTQmJy4BJy4BJy4BKwFABYD6gAU2+xQE7PxUtmBgtmRkAlwUHg4PFAcHCQYHBxMMDCETEywbsLAWKhOgRwkXCQoSCAcNBQUFBAMCDQcHEwwMIBE3A4D8gAM2/RcC6f7Arf5AwMABwK2dBxQODyIWFTAbGC4TFiIPDhgKCQcBwAIHB0P+5gQDAg0HBxcMDCETER0PDhgKCQ8EBQUAAAQAPQAABcADgAAQAB0AOwBZAAApASImNRE0NjMhMhYVERQGIwEjFSM1IxEzNTMVMxEFLgEnLgEnLgErAREzMjY3PgE3PgE3PgE1LgEnOQEHDgEHDgErAREzMhYXHgEXHgEXHgEVFAYHDgEHOQEFKvupPlhYPgRXPlhYPv2zYLNkZLNgAbAHFwwOHxMTJxawsBssExMeDwwTBwcGAggJdwgSCgkUDEc3Ex4MDBMHBwsEAwQFBQUNB1g+AlQ+WFg+/aw+WAKdra3+QMDAAcB9FiIODxQHBwb+QAkHCRgPDiUTFiwYHTAW4ggNAgMEAR8EBQUPCgoYDw4fERMfDwwXBwABAEP//wOgA34AjwAAExQiNScwJic0JicuAQcOARUcARUeARceATc+ATc+ATE2MhUwFAcUFhceARceATMyNjc+ATc+ATc+AzE2MhUwDgIVFBYXHgEXFjY3PgE3PgE3PgE3PgM3PAE1NCYnJgYHDgMxBiI1MDwCNTQmJyYGBw4BBw4DMQYiNTAmJy4BJyYGBw4BMRWQBgQIBAgCBQ4KBwkDFgcHIQ8QDwcHNgUEAwMHBQsJChcMBQ0FBwsHDBMICR8cFQUFAwQDCAUHFRERJBEMEwgJEgUOGQwGMjgvBAkHDBYEAz1IPAQFLyQRIhEQFgoGIiUcBQUEAgMYKCcmCgcsAboFBQwYDwUKBwUEAgMNBwcLBxRrDhENBwggDxOTCgqdMBM1EQwTCAcFBAIFCgcPIw4UQ0IxCgpTc3glEyMREBgIBwEKBxUKESUQJ00mE6/JrA8FBgIHDQMECAkGla2PCQk1VGYxNTsHAgUKChwQC2BqVQoKehYfTwUDRx8TkAMAAAAAAgBGAAAENgOAAAQACAAAIREzESMJAhEDxnBw/IADgPyAA4D8gAOA/kD+QAOAAAAAAgCAAAADgAOAAAQACQAAIREhESEBIREhEQKAAQD/AP4AAQD/AAOA/IADgPyAA4AAAQCAAAAEAAOAAAMAAAkBEQEEAPyAA4ABwP5AA4D+QAACAEoAAAQ6A4AABAAIAAAzESMRMwkCEbpwcAOA/IADgAOA/IADgP5A/kADgAAAAAABAEMAIANDA6AAKQAAAR4BFRQOAiMiLgI1ND4CMzUNATUiDgIVFB4CMzI+AjU0Jic3Aw0aHDxpjE9PjGg9PWiMTwFA/sA8aU4tLU5pPDxpTi0WE1MCYytjNU+MaD09aIxPT4xoPYCts4AtTmk8PGlOLS1OaTwpSx8wAAAAAQBAAGYCIAMTAAYAABMRMyURJSNAzQET/u3NATMBE839U80ABABAAAAEkAOAABcAKwA6AEEAACEnPgM1NC4CJzceAxUUDgIHMS8BPgE1NCYnNx4DFQ4DBzEnPgE1NCYnNx4BFRQGBycFETMlESUjA9oqJj4rFxcrPiYqKkMwGRkwQyqkKTlERDkpITQkFAEUJDMhwyIoKCIqJjAwJir9zc0BE/7tzSMoXmlyPDxxaV4pIytmcnxBQXxyZiuDIzWRVFSRNSMeSFBYLy9ZUUcdsxZIKStGFSMcXDQ1WR8pAwETzf1TzQAAAAIAQAAAA8MDgAAHAA8AAAEXIREXNxcHAQcnNychEScDKnD+qXCXeZn+JpZ6lnABV20Cc3ABV3CWepP+I5Z6lnD+qmwAAwBAARMFwAJgAAwAGQAmAAABFAYjIiY1NDYzMhYVIRQGIyImNTQ2MzIWFSEUBiMiJjU0NjMyFhUBjWJFRWFhRUViAhZhRUViYkVFYQIdYUVFYmJFRWEBukViYkVFYWFFRWJiRUVhYUVFYmJFRWFhRQAAAAABAEIAAgO+A34AIAAAARcWFAcGIi8BBwYiJyY0PwEnJjQ3NjIfATc2MhcWFA8BAqP3JCQkYx329iRjHSQk9/ckJCRjHfb2JGMdJCT3AcD2JGMdJCT39yQkJGMd9vYkYx0kJPf3JCQkYx32AAAGAEQABAO8A3wABAAJAA4AEwAYAB0AAAEhFSE1ESEVITURIRUhNQEzFSM1ETMVIzURMxUjNQGnAhX96wIV/esCFf3r/p2ysrKysrIDfFlZ/p1ZWf6dWVkCxrKy/p2ysv6dsrIACP++AGYCmgOXACkAUAB/AK8BKgE8AVkBcAAAEg4BIg4EFB4IPgouCSImEz4BNz4BNz4BNz4BNz4BJy4CNDUuAQcOAQcOAQcGFBUUFhceARcFJhYnLgEnJgYnLgEjJgYHIiYHDgEHFBYOAQcOAQcOAhQOAQcGFhceARc3PgE3IS4CNDUuAScqAScGNgcOAQcOAhQHDgEXHgEXHgEXMz4BNz4BNzY0PgI0PgE3JAYiBiIOBxQOFRQGFB4KMj4FMh4DMh4CMj4PNC4NIi4VIiYDDgEHBhYHDgEVBjIXHgEXNycXByMuAScuAS8BPgE3PgM3PgE3PgEzPgE/ATMXHgEXMz8BHwEHIyYWJyYiIy4BJzU3M8oGCQYYDQwHAgQDAhMPBwcFGwUNEwQFEwEEAgQCAgQCBQUCBQIIGAcI4hADAQYKBQcBBQEDAQ0NAgEDAgs5HwQbGwUKBAESEwQOBv7iCgoHBx0OCQMIAwUCCQcKAQQCCxYFAQIEAQICAQIDAQIDAQIPEAkSCjEUIQ0CJQYDAgYgDgMIHC0XCg4GCQEDAQEKAQEEAQUIERs2BwwHBQwCAQEEAQIDBv6DDwgLBQUGBQUJBgYODAUHJgkMCQgHBQYRCQQGBRAIBQEHBQUFAgMCBgoZDAMMFVYKBx0JFgw+DgoVCAkFGglCEgcPBQkMBQkEBQUIBQUBBQUBBQIGBBAJBQYKCgkFAw8nBQoGCAUFCQQFBwwGBAMNBAYFCAYJDIwHCgUHAgIBBAMDBAMJDjcBQAKHCxgJBAsIAQILEQMEBQgDAQECAwYDEiQSBDpUAwIHNwEDOwECkAkKCwIEAQ4KBwM6A5cBBhIQGRgYGB8ICiIPBQIFAgIBDAUDHgYFEAYwHQYODQYFBAcJEgX+/gYDAQMIAwYFCQEBAhM3GAIFBgUCHS8JAhQgCxcMCxULGCkPAwUCFQ4OFBEgCwcDAQEDAgQDAQEEFQsBAgMEAgUKBQMEBgcHCAQaNhUJCwcCCRsvGwIDBQIPIAUFBwMGBwoMAQEEBQIdLSUIEQgLEQoEBAQDDgQCAwQBAwUEBCE+BQUGAQUBBwUKDgQSBA0sBg8FBgsBBQ4KAgYIDxEFBwkRCQ4bDxAICg4RGwUFBAkBBAEFAgUBBgEFAQcEAgMCBQEMAQgGBwQUDgcPDDAKDQYIDQUVBQYHBQ0FBw8pCQgHDgYEEAYDDwkHAwcGBQIFAQQE/vYDAwUIAwoDBQQNBw4PBgFikwIGCgsFERY2CRoQAwYFAgICAwEBAQEDAUfXBwEFkwMCxAICAgYBCQ8MmgMAAAAADgCuAAEAAAAAAAEADAAaAAEAAAAAAAIABwA3AAEAAAAAAAMADABZAAEAAAAAAAQADACAAAEAAAAAAAUACwClAAEAAAAAAAYADADLAAEAAAAAAAoAGgEOAAMAAQQJAAEAGAAAAAMAAQQJAAIADgAnAAMAAQQJAAMAGAA/AAMAAQQJAAQAGABmAAMAAQQJAAUAFgCNAAMAAQQJAAYAGACxAAMAAQQJAAoANADYAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzAABqdy1zaXgtaWNvbnMAAFIAZQBnAHUAbABhAHIAAFJlZ3VsYXIAAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzAABqdy1zaXgtaWNvbnMAAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzAABqdy1zaXgtaWNvbnMAAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAAVmVyc2lvbiAxLjEAAGoAdwAtAHMAaQB4AC0AaQBjAG8AbgBzAABqdy1zaXgtaWNvbnMAAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAARm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4AAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0AAAECAAIBAwADAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbBmdseXBoMQd1bmkwMDAxB3VuaUU2MDAHdW5pRTYwMQd1bmlFNjAyB3VuaUU2MDMHdW5pRTYwNAd1bmlFNjA1B3VuaUU2MDYHdW5pRTYwNwd1bmlFNjA4B3VuaUU2MDkHdW5pRTYwQQd1bmlFNjBCB3VuaUU2MEMHdW5pRTYwRAd1bmlFNjBFB3VuaUU2MEYHdW5pRTYxMAd1bmlFNjExB3VuaUU2MTIHdW5pRTYxMwd1bmlFNjE0B3VuaUU2MTUHdW5pRTYxNgd1bmlFNjE3AAABAAH//wAPAAAAAQAAAADSBBQFAAAAANHUIisAAAAA0pAw5Q==';
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(23), t(1)], n = function (r, o) {
            return function (t, e) {
                var n = ['seek', 'skipAd', 'stop', 'playlistNext', 'playlistPrev', 'playlistItem', 'resize', 'addButton', 'removeButton', 'registerPlugin', 'attachMedia'];
                o.each(n, function (r) {
                    t[r] = function () {
                        return e[r].apply(e, arguments), t;
                    };
                }), t.registerPlugin = r.registerPlugin;
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1)], n = function (r) {
            return function (o, t) {
                var e = ['buffer', 'controls', 'position', 'duration', 'fullscreen', 'volume', 'mute', 'item', 'stretching', 'playlist', 'captions'];
                r.each(e, function (r) {
                    var e = r.slice(0, 1).toUpperCase() + r.slice(1);
                    o['get' + e] = function () {
                        return t._model.get(r);
                    };
                });
                var n = ['getAudioTracks', 'getCaptionsList', 'getWidth', 'getHeight', 'getCurrentAudioTrack', 'setCurrentAudioTrack', 'getCurrentCaptions', 'setCurrentCaptions', 'getCurrentQuality', 'setCurrentQuality', 'getQualityLevels', 'getVisualQuality', 'getConfig', 'getState', 'getSafeRegion', 'isBeforeComplete', 'isBeforePlay', 'getProvider', 'detachMedia'];
                var a = ['setControls', 'setFullscreen', 'setVolume', 'enableGPU', 'disableGPU', 'setMute', 'setCues', 'setCaptions'];
                r.each(n, function (r) {
                    o[r] = function () {
                        return t[r] ? t[r].apply(t, arguments) : null;
                    };
                }), r.each(a, function (r) {
                    o[r] = function () {
                        return t[r].apply(t, arguments), o;
                    };
                }), o.getPlaylistIndex = o.getItem;
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(4), t(6), t(3), t(2), t(46), t(1), t(86), t(77), t(78), t(80), t(83), t(19)], n = function (r, o, t, e, n, a, i, c, d, f, h, w) {
            var p = function (p, s) {
                var b;
                var g = this;
                var l = !1;
                var u = {};
                a.extend(this, t), this.utils = e, this._ = a, this.Events = t, this.version = w, this.trigger = function (r, o) {
                    return o = a.isObject(o) ? a.extend({}, o) : {}, o.type = r, window.jwplayer && window.jwplayer.debug ? t.trigger.call(g, r, o) : t.triggerSafe.call(g, r, o);
                }, this.dispatchEvent = this.trigger, this.removeEventListener = this.off.bind(this);
                var v = function () {
                    b = new i(p), c(g, b), d(g, b), b.on(r.JWPLAYER_PLAYLIST_ITEM, function () {
                        u = {};
                    }), b.on(r.JWPLAYER_MEDIA_META, function (r) {
                        a.extend(u, r.metadata);
                    }), b.on(r.JWPLAYER_READY, function (r) {
                        l = !0, y.tick('ready'), r.setupTime = y.between('setup', 'ready');
                        var o = new h(g.getConfig(), g);
                        o.userCertify();
                    }), b.on('all', g.trigger);
                };
                v(), f(this), this.id = p.id;
                var y = this._qoe = new n;
                y.tick('init');
                var A = function () {
                    l = !1, u = {}, g.off(), b && b.off(), b && b.playerDestroy && b.playerDestroy();
                };
                return this.getPlugin = function (r) {
                        return g.plugins && g.plugins[r];
                    }, this.addPlugin = function (r, o) {
                        this.plugins = this.plugins || {}, this.plugins[r] = o, this.onReady(o.addToPlayer), o.resize && this.onResize(o.resizeHandler);
                    }, this.setup = function (r) {
                        return y.tick('setup'), A(), v(), e.foreach(r.events, function (r, o) {
                                var t = g[r];
                                'function' == typeof t && t.call(g, o);
                            }), r.id = g.id, b.setup(r, this), g;
                    }, this.qoe = function () {
                        var o = b.getItemQoe();
                        var t = y.between('setup', 'ready');
                        var e = o.between(r.JWPLAYER_MEDIA_PLAY_ATTEMPT, r.JWPLAYER_MEDIA_FIRST_FRAME);
                        return {setupTime: t, firstFrame: e, player: y.dump(), item: o.dump()};
                    }, this.getContainer = function () {
                        return b.getContainer ? b.getContainer() : p;
                    }, this.getMeta = this.getItemMeta = function () {
                        return u;
                    }, this.getPlaylistItem = function (r) {
                        if (!e.exists(r)) {
                            return b._model.get('playlistItem');
                        }

                        var o = g.getPlaylist();
                        return o ? o[r] : null;
                    }, this.getRenderingMode = function () {
                        return 'html5';
                    }, this.load = function (r) {
                        var o = this.getPlugin('vast') || this.getPlugin('googima');
                        return o && o.destroy(), b.load(r), g;
                    }, this.play = function (r, t) {
                        if (a.isBoolean(r) || (t = r), t || (t = {
                                reason: 'external'
                            }), r === !0) {
                            return b.play(t), g;
                        }

                        if (r === !1) {
                            return b.pause(), g;
                        }

                        switch (
                        r = g.getState()) {
                            case o.PLAYING:
                                b.pause();
                                break;default:
                                b.play(t);
                        }
                        return g;
                    }, this.pause = function (r) {
                        return a.isBoolean(r) ? this.play(!r) : this.play();
                    }, this.createInstream = function () {
                        return b.createInstream();
                    }, this.castToggle = function () {
                        b && b.castToggle && b.castToggle();
                    }, this.playAd = this.pauseAd = e.noop, this.remove = function () {
                        return s(g), g.trigger('remove'), A(), g;
                    }, this;
            };
            return p;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(4)], n = function (r, o) {
            return function (t) {
                var e = {
                    onBufferChange: o.JWPLAYER_MEDIA_BUFFER,
                    onBufferFull: o.JWPLAYER_MEDIA_BUFFER_FULL,
                    onError: o.JWPLAYER_ERROR,
                    onSetupError: o.JWPLAYER_SETUP_ERROR,
                    onFullscreen: o.JWPLAYER_FULLSCREEN,
                    onMeta: o.JWPLAYER_MEDIA_META,
                    onMute: o.JWPLAYER_MEDIA_MUTE,
                    onPlaylist: o.JWPLAYER_PLAYLIST_LOADED,
                    onPlaylistItem: o.JWPLAYER_PLAYLIST_ITEM,
                    onPlaylistComplete: o.JWPLAYER_PLAYLIST_COMPLETE,
                    onReady: o.JWPLAYER_READY,
                    onResize: o.JWPLAYER_RESIZE,
                    onComplete: o.JWPLAYER_MEDIA_COMPLETE,
                    onSeek: o.JWPLAYER_MEDIA_SEEK,
                    onTime: o.JWPLAYER_MEDIA_TIME,
                    onVolume: o.JWPLAYER_MEDIA_VOLUME,
                    onBeforePlay: o.JWPLAYER_MEDIA_BEFOREPLAY,
                    onBeforeComplete: o.JWPLAYER_MEDIA_BEFORECOMPLETE,
                    onDisplayClick: o.JWPLAYER_DISPLAY_CLICK,
                    onControls: o.JWPLAYER_CONTROLS,
                    onQualityLevels: o.JWPLAYER_MEDIA_LEVELS,
                    onQualityChange: o.JWPLAYER_MEDIA_LEVEL_CHANGED,
                    onCaptionsList: o.JWPLAYER_CAPTIONS_LIST,
                    onCaptionsChange: o.JWPLAYER_CAPTIONS_CHANGED,
                    onAdError: o.JWPLAYER_AD_ERROR,
                    onAdClick: o.JWPLAYER_AD_CLICK,
                    onAdImpression: o.JWPLAYER_AD_IMPRESSION,
                    onAdTime: o.JWPLAYER_AD_TIME,
                    onAdComplete: o.JWPLAYER_AD_COMPLETE,
                    onAdCompanions: o.JWPLAYER_AD_COMPANIONS,
                    onAdSkipped: o.JWPLAYER_AD_SKIPPED,
                    onAdPlay: o.JWPLAYER_AD_PLAY,
                    onAdPause: o.JWPLAYER_AD_PAUSE,
                    onAdMeta: o.JWPLAYER_AD_META,
                    onCast: o.JWPLAYER_CAST_SESSION,
                    onAudioTrackChange: o.JWPLAYER_AUDIO_TRACK_CHANGED,
                    onAudioTracks: o.JWPLAYER_AUDIO_TRACKS,
                    onCuepoint: o.JWPLAYER_CUEPOINT,
                    onSeekForwardForbidden: o.JWPLAYER_SEEK_FORWARD_FORBIDDEN,
                    onConnection: o.JWPLAYER_CONNECTING,
                    onAlive: o.JWPLAYER_ALIVE,
                    onNoLiveStream: o.JWPLAYER_NO_LIVE_STREAM,
                    onLiveStop: o.JWPLAYER_LIVE_STOP
                };
                var n = {onBuffer: 'buffer', onPause: 'pause', onPlay: 'play', onIdle: 'idle', onStop: 'stop'};
                r.each(n, function (o, e) {
                    t[e] = r.partial(t.on, o, r);
                }), r.each(e, function (o, e) {
                    t[e] = r.partial(t.on, o, r);
                });
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(1)], n = function (r, o) {
            function e(t) {
                o.each(t, function (o, e) {
                    t[e] = r.serialize(o);
                });
            }
            function n(r) {
                return r.slice && 'px' === r.slice(-2) && (r = r.slice(0, -2)), r;
            }
            function a(r) {
                return r.controls = !1, r.controlbar.barLogo = !0, r.skin = 'seven', r.startseek = !1,
                    delete r.skinColorInactive
                    ,
                    delete r.skinColorActive
                    ,
                    delete r.skinColorBackground
                    , r;
            }
            function i(o, t) {
                if (t.toString().indexOf('%') === -1) {
                    return 0;
                }

                if ('string' != typeof o || !r.exists(o)) {
                    return 0;
                }

                if (/^\d*\.?\d+%$/.test(o)) {
                    return o;
                }

                var e = o.indexOf(':');
                if (e === -1) {
                    return 0;
                }

                var n = parseFloat(o.substr(0, e));
                var a = parseFloat(o.substr(e + 1));
                return n <= 0 || a <= 0 ? 0 : a / n * 100 + '%';
            }
            var c = {
                autostart: !1,
                controls: !0,
                displaytitle: !0,
                displaydescription: !0,
                mobilecontrols: !1,
                repeat: !1,
                castAvailable: !1,
                skin: 'seven',
                stretching: 'uniform',
                mute: !1,
                volume: 90,
                width: 480,
                height: 270,
                controlbar: {
                    barLogo: !0
                },
                marquee: {show: !1, text: '百度开放云', fontSize: 12, color: '#FFF'},
                startseek: !0
            };
            var d = function (d, f) {
                d.autoStart && (d.autostart = !0), 'over' !== d.controls && 'none' !== d.controls || (d.controls = 'over' === d.controls), d.startParam && (d.startparam = d.startParam);
                var h = f && f.getAllItems();
                var w = o.extend({}, (window.jwplayer || {}).defaults, h, d);
                e(w);
                var p = o.extend({}, c, w);
                if ('.' === p.base && (p.base = r.getScriptPath('cyberplayer.js')), p.base = (p.base || r.loadFrom()).replace(/\/?$/, '/'), t.p = p.base, p.width = n(p.width), p.height = n(p.height), p.flashplayer = p.flashplayer || r.getScriptPath('cyberplayer.js') + 'cyberplayer.flash.swf', 'http:' === window.location.protocol && (p.flashplayer = p.flashplayer.replace('https', 'http')), p.aspectratio = i(p.aspectratio, p.width), o.isObject(p.skin) && (p.skinUrl = p.skin.url, p.skinColorInactive = p.skin.inactive, p.skinColorActive = p.skin.active, p.skinColorBackground = p.skin.background, p.skin = o.isString(p.skin.name) ? p.skin.name : c.skin), o.isString(p.skin) && p.skin.indexOf('.xml') > 0 && (console.log('JW Player does not support XML skins, please update your config'), p.skin = p.skin.replace('.xml', '')), p.aspectratio ||
                    delete p.aspectratio
                    , !p.playlist) {
                    var s = o.pick(p, ['title', 'description', 'type', 'mediaid', 'image', 'file', 'sources', 'tracks', 'preload', 'fallbackfile']);
                    p.playlist = [s];
                }

                return r.isPoorIE() && (p = a(p)), p;
            };
            return d;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (e, t, n) {
        var i;
        var o;
        i = [n(35), n(1)], o = function (e, t) {
            function n(e) {
                for (var n = {}, i = e.substr(e.indexOf('?') + 1).split('&'), r = 0; r < i.length; r++) {
                    var a = i[r];
                    var s = a.indexOf('=');
                    if (s > -1) {
                        var l = a.substr(0, s);
                        var c = decodeURIComponent(a.substr(s + 1));
                        t.contains(o, l) && (c = c.replace(/'/g, '"'), c = 'object' == typeof JSON && 'function' == typeof JSON.parse ? JSON.parse(c) : eval('(' + c + ')')), n[l] = c;
                    }

                }
                return n;
            }
            function i() {
                for (var r = document.getElementsByTagName('script'), o = r.length; o--;) {
                    var a = r[o];
                    var i = a.src;
                    if (i.indexOf('cyberplayer.js') > -1) {
                        var c = n(i);
                        if (t.size(c) > 0 && 'DIV' === a.parentNode.nodeName) {
                            return e.selectPlayer(a.parentNode).setup(c);
                        }
                    }

                }
            }
            var o = ['imageAdvs', 'playlist', 'listbar', 'tracks', 'captions', 'controlbar', 'logo', 'skin', 'marquee'];
            return i(), {getParams: n, loadPlayer: i};
        }.apply(t, i), !(void 0 !== o && (e.exports = o));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(19), t(2)], n = function (r, o) {
            function t() {
                for (var r = o.getElementsByClassName('jw-warning'), t = 0; t < r.length; t++) {
                    var e = r[t];
                    e.style.display = 'block';
                }
            }
            var e = 'https://drm.media.baidubce.com/v1/playerAuth';
            var n = function (r) {
                !r.code || 'UNAUTHORIZED' !== r.code && 'BAD_REQUEST' !== r.code || t();
            };
            var a = function (r, o) {
                this.config = r, this.api = o;
            };
            return a.prototype = {
                    userCertify: function () {
                        var n = this.config.ak ? this.config.ak : '';
                        if (!/^[a-z0-9]{32}$/.test(n)) {
                            return t(), !1;
                        }

                        var a = 'web-html5-' + r;
                        var i = o.getBrowserInfo();
                        var c = e + '?ak=' + n + '&player=' + a + '&platform=' + i + '&callback=' + this._getCallback();
                        c = encodeURI(c);
                        var d = document.createElement('script');
                        d.type = 'text/javascript', d.src = c, document.getElementsByTagName('head')[0].appendChild(d);
                    },
                    _getCallback: function () {
                        var r = (new Date).getTime();
                        var o = 1e9 * Math.random() >>> 0;
                        var t = 'jwplayer_' + r + '_' + o;
                        return window[t] = function (r) {
                                try {
                                    n(r),
                                    delete window[t];
                                }
                                catch (o) {
                                    window[t] = null;
                                }
                            }, t;
                    }
                }, a;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(91), t(3), t(1), t(4)], n = function (r, o, t, e) {
            var n = function (o, n, a, i) {
                function c() {
                    p('Setup Timeout Error', 'Setup took longer than ' + l + ' seconds to complete.');
                }
                function d() {
                    t.each(g, function (r) {
                        r.complete !== !0 && r.running !== !0 && null !== o && h(r.depends) && (r.running = !0, f(r));
                    });
                }
                function f(r) {
                    var t = function (o) {
                        o = o || {}, w(r, o);
                    };
                    r.method(t, n, o, a, i);
                }
                function h(r) {
                    return t.all(r, function (r) {
                        return g[r].complete;
                    });
                }
                function w(r, o) {
                    'error' === o.type ? p(o.msg, o.reason) : 'complete' === o.type ? (clearTimeout(s), b.trigger(e.JWPLAYER_READY)) : (r.complete = !0, d());
                }
                function p(r, o) {
                    clearTimeout(s), b.trigger(e.JWPLAYER_SETUP_ERROR, {
                        message: r + ': ' + o
                    }), b.destroy();
                }
                var s;
                var b = this;
                var g = r.getQueue();
                var l = 30;
                this.start = function () {
                    s = setTimeout(c, 1e3 * l), d();
                }, this.destroy = function () {
                    clearTimeout(s), this.off(), g.length = 0, o = null, n = null, a = null;
                };
            };
            return n.prototype = o, n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(13), t(22), t(93), t(2)], n = function (r, o, t, e) {
            var n = function (n, a) {
                function i(r) {
                    if (r.tracks.length) {
                        a.mediaController.off('meta', c), A = [], C = {}, m = {}, S = 0;
                        for (var o = r.tracks || [], t = 0; t < o.length; t++) {
                            var e = o[t];
                            e.id = e.name, e.label = e.name || e.language, p(e);
                        }
                        var n = g();
                        this.setCaptionsList(n), l();
                    }
                }
                function c(r) {
                    var o = r.metadata;
                    if (o && 'textdata' === o.type) {
                        if (!o.text) {
                            return;
                        }

                        var t = C[o.trackid];
                        if (!t) {
                            t = {kind: 'captions', id: o.trackid, data: []}, p(t);
                            var e = g();
                            this.setCaptionsList(e);
                        }

                        var n;
                        var i;
                        o.useDTS ? (t.source || (t.source = o.source || 'mpegts'), n = o.begin, i = o.begin + '_' + o.text) : (n = r.position || a.get('position'), i = '' + Math.round(10 * n) + '_' + o.text);
                        var c = m[i];
                        c || (c = {begin: n, text: o.text}, o.end && (c.end = o.end), m[i] = c, t.data.push(c));
                    }
                }
                function d(r) {
                    e.log('CAPTIONS(' + r + ')');
                }
                function f(r, o) {
                    y = o, A = [], C = {}, m = {}, S = 0;
                }
                function h(r) {
                    f(a, r), a.mediaController.off('meta', c), a.mediaController.off('subtitlesTracks', i);var o;
                    var t;
                    var n;
                    var d;
                    var h = r.tracks;
                    var w = 'flash' === a.get('provider').name;
                    var b = e.isChrome() || e.isIOS() || e.isSafari();
                    for (d = 0; d < h.length; d++) {
                        o = h[d], n = o.file && /\.(?:web)?vtt(?:\?.*)?$/i.test(o.file), !w && n && !v && b || (t = o.kind.toLowerCase(), 'captions' !== t && 'subtitles' !== t || (o.file ? (p(o), s(o)) : o.data && p(o)));

                    }
                    A.length || (a.mediaController.on('meta', c, this), a.mediaController.on('subtitlesTracks', i, this));var u = g();
                    this.setCaptionsList(u), l();
                }
                function w(r, o) {
                    var t = null;
                    0 !== o && (t = A[o - 1]), r.set('captionsTrack', t);
                }
                function p(r) {
                    'number' != typeof r.id && (r.id = r.name || r.file || 'cc' + A.length), r.data = r.data || [], r.label || (r.label = 'Unknown CC', S++, S > 1 && (r.label += ' (' + S + ')')), A.push(r), C[r.id] = r;
                }
                function s(r) {
                    e.ajax(r.file, function (o) {
                        b(o, r);
                    }, d);
                }
                function b(e, n) {
                    var a = e.responseXML ? e.responseXML.firstChild : null;
                    if (a) {
                        for ('xml' === r.localName(a) && (a = a.nextSibling); a.nodeType === a.COMMENT_NODE;) {
                            a = a.nextSibling;
                        }
                    }

                    try {
                        a && 'tt' === r.localName(a) ? n.data = t(e.responseXML) : n.data = o(e.responseText);
                    }
                    catch (i) {
                        d(i.message + ': ' + n.file);
                    }
                }
                function g() {
                    for (var r = [{id: 'off', label: 'Off'}], o = 0; o < A.length; o++) {
                        r.push({id: A[o].id, label: A[o].label || 'Unknown CC'});

                    }
                    return r;
                }
                function l() {
                    var r = 0;
                    var o = a.get('captionLabel');
                    if ('Off' === o) {
                        return void a.set('captionsIndex', 0);
                    }

                    for (var t = 0; t < A.length; t++) {
                        var e = A[t];
                        if (o && o === e.label) {
                            r = t + 1;break;
                        }

                        e.default || e.defaulttrack || 'default' === e.id ? r = t + 1 : e.autoselect;
                    }
                    u(r);
                }
                function u(r) {
                    A.length ? a.setVideoSubtitleTrack(r, A) : a.set('captionsIndex', r);
                }
                a.on('change:playlistItem', f, this), a.on('change:captionsIndex', w, this), a.on('itemReady', h, this), a.mediaController.on('subtitlesTracks', i, this), a.mediaController.on('subtitlesTrackData', function (r) {
                    var o = C[r.name];
                    if (o) {
                        o.source = r.source;
                        for (var t = r.captions || [], e = !1, n = 0; n < t.length; n++) {
                            var a = t[n];
                            var i = r.name + '_' + a.begin + '_' + a.end;
                            m[i] || (m[i] = a, o.data.push(a), e = !0);
                        }
                        e && o.data.sort(function (r, o) {
                            return r.begin - o.begin;
                        });
                    }

                }, this), a.mediaController.on('meta', c, this);
                var v = !!a.get('sdkplatform');
                var y = {};
                var A = [];
                var C = {};
                var m = {};
                var S = 0;
                this.getCurrentIndex = function () {
                    return a.get('captionsIndex');
                }, this.getCaptionsList = function () {
                    return a.get('captionsList');
                }, this.setCaptionsList = function (r) {
                    a.set('captionsList', r);
                };
            };
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(81), t(87), t(1), t(84), t(85), t(20), t(36), t(97), t(38), t(2), t(131), t(14), t(3), t(21), t(6), t(4), t(125)], n = function (r, o, t, e, n, a, i, c, d, f, h, w, p, s, b, g, l) {
            function u(r) {
                return function () {
                    var o = Array.prototype.slice.call(arguments, 0);
                    this._model.getVideo() ? this['_' + r].apply(this, o) : this.eventsQueue.push([r, o]);
                };
            }
            function v(r) {
                return r === b.LOADING || r === b.STALLED ? b.BUFFERING : r;
            }
            var y = function (r) {
                this.originalContainer = this.currentContainer = r, this.eventsQueue = [], t.extend(this, p), this._model = new a;
            };
            return y.prototype = {
                    play: u('play'),
                    pause: u('pause'),
                    setVolume: u('setVolume'),
                    enableGPU: u('enableGPU'),
                    disableGPU: u('disableGPU'),
                    setMute: u('setMute'),
                    seek: u('seek'),
                    stop: u('stop'),
                    load: u('load'),
                    playlistNext: u('next'),
                    playlistPrev: u('prev'),
                    playlistItem: u('item'),
                    setFullscreen: u('setFullscreen'),
                    setCurrentCaptions: u('setCurrentCaptions'),
                    setCurrentQuality: u('setCurrentQuality'),
                    setup: function (a, p) {
                        function l() {
                            rr.mediaModel.on('change:state', function (r, o) {
                                var t = v(o);
                                rr.set('state', t);
                            });
                        }
                        function u() {
                            Z = null, O(rr.get('item')), rr.on('change:state', s, this), rr.on('change:castState', function (r, o) {
                                er.trigger(g.JWPLAYER_CAST_SESSION, o);
                            }), rr.on('change:fullscreen', function (r, o) {
                                er.trigger(g.JWPLAYER_FULLSCREEN, {
                                    fullscreen: o
                                });
                            }), rr.on('itemReady', function () {
                                er.trigger(g.JWPLAYER_PLAYLIST_ITEM, {index: rr.get('item'), item: rr.get('playlistItem')});
                            }), rr.on('change:playlist', function (r, o) {
                                o.length && er.trigger(g.JWPLAYER_PLAYLIST_LOADED, {
                                    playlist: o
                                });
                            }), rr.on('change:volume', function (r, o) {
                                er.trigger(g.JWPLAYER_MEDIA_VOLUME, {
                                    volume: o
                                });
                            }), rr.on('change:mute', function (r, o) {
                                er.trigger(g.JWPLAYER_MEDIA_MUTE, {
                                    mute: o
                                });
                            }), rr.on('change:controls', function (r, o) {
                                er.trigger(g.JWPLAYER_CONTROLS, {
                                    controls: o
                                });
                            }), rr.on('change:scrubbing', function (r, o) {
                                o ? T() : x();
                            }), rr.on('change:captionsList', function (r, o) {
                                er.trigger(g.JWPLAYER_CAPTIONS_LIST, {tracks: o, track: Q()});
                            }), rr.mediaModel.set('mediaType', null), rr.mediaController.on('all', er.trigger.bind(er)), X.on('all', er.trigger.bind(er)), this.showView(X.element()), t.defer(y);
                        }
                        function y() {
                            er.trigger(g.JWPLAYER_READY, {
                                setupTime: 0
                            }), er.trigger(g.JWPLAYER_PLAYLIST_LOADED, {
                                playlist: rr.get('playlist')
                            }), er.trigger(g.JWPLAYER_PLAYLIST_ITEM, {index: rr.get('item'), item: rr.get('playlistItem')}), er.trigger(g.JWPLAYER_CAPTIONS_LIST, {tracks: rr.get('captionsList'), track: rr.get('captionsIndex')}), rr.get('autostart') && (!f.isPoorIE() && rr.get('imageAdvs') && rr.get('imageAdvs').start ? X.beginStartAdv() : x({
                                reason: 'autostart'
                            })), A();
                        }
                        function A() {
                            for (; er.eventsQueue.length > 0;) {
                                var r = er.eventsQueue.shift();
                                var o = r[0];
                                var t = r[1] || [];
                                er['_' + o].apply(er, t);
                            }
                        }
                        function C(r) {
                            switch (rr.get('state') === b.ERROR && rr.set('state', b.IDLE), E(!0), rr.get('autostart') && rr.once('itemReady', x), typeof r) {
                                case 'string':
                                    m(r);
                                    break;case 'object':
                                    var o = c(r);
                                    var t = rr.get('edition');
                                    var e = rr.getProviders();
                                    var n = e.required(o, t);
                                    w.load(n, t).then(function () {
                                        er.getProvider() || (rr.setProvider(rr.get('playlistItem')), A());
                                    });var a = L(r);
                                    a && O(0);
                                    break;case 'number':
                                    O(r);
                            }
                        }
                        function m(r) {
                            var o = new d;
                            o.on(g.JWPLAYER_PLAYLIST_LOADED, function (r) {
                                C(r.playlist);
                            }), o.on(g.JWPLAYER_ERROR, function (r) {
                                r.message = 'Error loading playlist: ' + r.message, this.triggerError(r);
                            }, this), o.load(r);
                        }
                        function S() {
                            var r = er._instreamAdapter && er._instreamAdapter.getState();
                            return t.isString(r) ? r : rr.get('state');
                        }
                        function x(r) {
                            var o;
                            if (r && rr.set('playReason', r.reason), rr.get('state') !== b.ERROR) {
                                var e = er._instreamAdapter && er._instreamAdapter.getState();
                                if (t.isString(e)) {
                                    return p.pauseAd(!1);
                                }

                                if (rr.get('state') === b.COMPLETE && (E(!0), O(0)), !or && (or = !0, er.trigger(g.JWPLAYER_MEDIA_BEFOREPLAY, {}), or = !1, _)) {
                                    return _ = !1, void ($ = null);
                                }

                                if (k()) {
                                    if (0 === rr.get('playlist').length) {
                                        return !1;
                                    }

                                    !f.isPoorIE() && rr.get('imageAdvs') && rr.get('imageAdvs').start ? X.beginStartAdv() : o = f.tryCatch(function () {
                                        rr.loadVideo();
                                    });
                                }
                                else {
                                    rr.get('state') === b.PAUSED && (o = f.tryCatch(function () {
                                        rr.playVideo();
                                    }));
                                }
                                return !(o instanceof f.Error && (er.triggerError(o), $ = null, 1));
                            }
                        }
                        function E(r) {
                            rr.off('itemReady', x);var o = !r;
                            $ = null;var t = f.tryCatch(function () {
                                rr.stopVideo();
                            }, er);
                            return t instanceof f.Error ? (er.triggerError(t), !1) : (o && (tr = !0), or && (_ = !0), !0);
                        }
                        function T() {
                            $ = null;var r = er._instreamAdapter && er._instreamAdapter.getState();
                            if (t.isString(r)) {
                                return p.pauseAd(!0);
                            }

                            switch (rr.get('state')) {
                                case b.ERROR:
                                    return !1;case b.PLAYING:
                                case b.BUFFERING:
                                    var o = f.tryCatch(function () {
                                        nr().pause();
                                    }, this);
                                    if (o instanceof f.Error) {
                                        return er.triggerError(o), !1;
                                    }

                                    break;default:
                                    or && (_ = !0);
                            }
                            return !0;
                        }
                        function k() {
                            var r = rr.get('state');
                            return r === b.IDLE || r === b.COMPLETE || r === b.ERROR;
                        }
                        function I(r) {
                            if (rr.get('state') !== b.ERROR) {
                                var o = this.getConfig();
                                if (o.disableSeekForward && r > this._model.get('position')) {
                                    return void er.trigger(g.JWPLAYER_SEEK_FORWARD_FORBIDDEN);
                                }

                                rr.get('scrubbing') || rr.get('state') === b.PLAYING || x(!0), nr().seek(r);
                            }
                        }
                        function J(r, o) {
                            E(!0), O(r), x(o);
                        }
                        function L(r) {
                            var o = c(r);
                            return o = c.filterPlaylist(o, rr.getProviders(), rr.get('androidhls'), rr.get('drm'), rr.get('preload'), rr.get('feedid'), rr.get('withCredentials')), rr.set('playlist', o), !(!t.isArray(o) || 0 === o.length) || (er.triggerError({
                                    message: 'Error loading playlist: No playable sources found'
                                }), !1);
                        }
                        function O(r) {
                            var o = rr.get('playlist');
                            r = parseInt(r, 10) || 0, r = (r + o.length) % o.length, rr.set('item', r), rr.set('playlistItem', o[r]), rr.setActiveItem(o[r]);
                        }
                        function j(r) {
                            J(rr.get('item') - 1, r || {
                                    reason: 'external'
                                });
                        }
                        function q(r) {
                            J(rr.get('item') + 1, r || {
                                    reason: 'external'
                                });
                        }
                        function z() {
                            if (k()) {
                                if (tr) {
                                    return void (tr = !1);
                                }

                                $ = z;
                                var r = rr.get('item');
                                return r === rr.get('playlist').length - 1 ? void (rr.get('repeat') ? q({
                                    reason: 'repeat'
                                }) : (rr.set('state', b.COMPLETE), er.trigger(g.JWPLAYER_PLAYLIST_COMPLETE, {}))) : void q({
                                    reason: 'playlist'
                                });
                            }
                        }
                        function B(r) {
                            nr() && (r = parseInt(r, 10) || 0, nr().setCurrentQuality(r));
                        }
                        function D() {
                            return nr() ? nr().getCurrentQuality() : -1;
                        }
                        function F() {
                            if (this._model) {
                                return this._model.getConfiguration();
                            }
                        }
                        function G() {
                            if (this._model.mediaModel) {
                                return this._model.mediaModel.get('visualQuality');
                            }

                            var r = H();
                            if (r) {
                                var o = D();
                                var e = r[o];
                                if (e) {
                                    return {
                                        level: t.extend({
                                            index: o
                                        }, e),
                                        mode: '',
                                        reason: ''
                                    };
                                }
                            }

                            return null;
                        }
                        function H() {
                            return nr() ? nr().getQualityLevels() : null;
                        }
                        function K(r) {
                            nr() && (r = parseInt(r, 10) || 0, nr().setCurrentAudioTrack(r));
                        }
                        function M() {
                            return nr() ? nr().getCurrentAudioTrack() : -1;
                        }
                        function N() {
                            return nr() ? nr().getAudioTracks() : null;
                        }
                        function P(r) {
                            r = parseInt(r, 10) || 0, rr.persistVideoSubtitleTrack(r), er.trigger(g.JWPLAYER_CAPTIONS_CHANGED, {tracks: R(), track: r});
                        }
                        function Q() {
                            return Y.getCurrentIndex();
                        }
                        function R() {
                            return Y.getCaptionsList();
                        }
                        function U() {
                            var r = rr.getVideo();
                            if (r) {
                                var o = r.detachMedia();
                                if (o instanceof HTMLVideoElement) {
                                    return o;
                                }
                            }

                            return null;
                        }
                        function V() {
                            var r = f.tryCatch(function () {
                                rr.getVideo().attachMedia();
                            });
                            return r instanceof f.Error ? void f.log('Error calling _attachMedia', r) : void ('function' == typeof $ && $());
                        }
                        function W(r) {
                            t.isBoolean(r) || (r = !rr.get('fullscreen')), rr.set('fullscreen', r), this._instreamAdapter && this._instreamAdapter._adModel && this._instreamAdapter._adModel.set('fullscreen', r);
                        }
                        var X;
                        var Y;
                        var Z;
                        var $;
                        var _;
                        var rr = this._model;
                        var or = !1;
                        var tr = !1;
                        var er = this;
                        var nr = function () {
                            return rr.getVideo();
                        };
                        var ar = new i;
                        ar.track(rr);
                        var ir = new r(a, ar);
                        rr.setup(ir, ar), X = this._view = new h(p, rr), Y = new n(p, rr), Z = new e(p, rr, X, L), Z.on(g.JWPLAYER_READY, u, this), Z.on(g.JWPLAYER_SETUP_ERROR, this.setupError, this), rr.mediaController.on(g.JWPLAYER_MEDIA_COMPLETE, function () {
                            t.defer(z);
                        }), rr.mediaController.on(g.JWPLAYER_MEDIA_ERROR, this.triggerError, this), rr.on('change:flashBlocked', function (r, o) {
                            if (!o) {
                                return void this._model.set('errorEvent', void 0);
                            }

                            var t = !!r.get('flashThrottle');
                            var e = {
                                message: t ? 'Click to run Flash' : 'Flash plugin failed to load'
                            };
                            t || this.trigger(g.JWPLAYER_ERROR, e), this._model.set('errorEvent', e);
                        }, this), l(), rr.on('change:mediaModel', l), this._play = x, this._pause = T, this._seek = I, this._stop = E, this._load = C, this._next = q, this._prev = j, this._item = J, this._setCurrentCaptions = P, this._setCurrentQuality = B, this._setFullscreen = W, this.detachMedia = U, this.attachMedia = V, this.getCurrentQuality = D, this.getQualityLevels = H, this.setCurrentAudioTrack = K, this.getCurrentAudioTrack = M, this.getAudioTracks = N, this.getCurrentCaptions = Q, this.getCaptionsList = R, this.getVisualQuality = G, this.getConfig = F, this.getState = S, this.setVolume = rr.setVolume.bind(rr), this.setMute = rr.setMute.bind(rr), this.enableGPU = rr.enableGPU, this.disableGPU = rr.disableGPU, this.getProvider = function () {
                            return rr.get('provider');
                        }, this.getWidth = function () {
                            return rr.get('containerWidth');
                        }, this.getHeight = function () {
                            return rr.get('containerHeight');
                        }, this.getContainer = function () {
                            return this.currentContainer;
                        }, this.resize = X.resize, this.getSafeRegion = X.getSafeRegion, this.setCues = X.addCues, this.setCaptions = X.setCaptions, this.addButton = function (r, o, e, n, a) {
                            var i = {img: r, tooltip: o, callback: e, id: n, btnClass: a};
                            var c = rr.get('dock');
                            c = c ? c.slice(0) : [], c = t.reject(c, t.matches({
                                id: i.id
                            })), c.push(i), rr.set('dock', c);
                        }, this.removeButton = function (r) {
                            var o = rr.get('dock') || [];
                            o = t.reject(o, t.matches({
                                id: r
                            })), rr.set('dock', o);
                        }, this.checkBeforePlay = function () {
                            return or;
                        }, this.getItemQoe = function () {
                            return rr._qoeItem;
                        }, this.setControls = function (r) {
                            t.isBoolean(r) || (r = !rr.get('controls')), rr.set('controls', r);
                            var o = rr.getVideo();
                            o && o.setControls(r);
                        }, this.playerDestroy = function () {
                            this.stop(), this.showView(this.originalContainer), X && X.destroy(), rr && rr.destroy(), Z && (Z.destroy(), Z = null);
                        }, this.isBeforePlay = this.checkBeforePlay, this.isBeforeComplete = function () {
                            return rr.getVideo().checkComplete();
                        }, this.createInstream = function () {
                            return this.instreamDestroy(), this._instreamAdapter = new o(this, rr, X), this._instreamAdapter;
                        }, this.skipAd = function () {
                            this._instreamAdapter && this._instreamAdapter.skipAd();
                        }, this.instreamDestroy = function () {
                            er._instreamAdapter && er._instreamAdapter.destroy();
                        }, Z.start();
                    },
                    showView: function (r) {
                        (document.documentElement.contains(this.currentContainer) || (this.currentContainer = document.getElementById(this._model.get('id')), this.currentContainer)) && (this.currentContainer.parentElement && this.currentContainer.parentElement.replaceChild(r, this.currentContainer), this.currentContainer = r);
                    },
                    triggerError: function (r) {
                        this._model.set('errorEvent', r), this._model.set('state', b.ERROR), this._model.once('change:state', function () {
                            this._model.set('errorEvent', void 0);
                        }, this), this.trigger(g.JWPLAYER_ERROR, r);
                    },
                    setupError: function (r) {
                        var o = r.message;
                        var e = f.createElement(l(this._model.get('id'), this._model.get('skin'), o));
                        var n = this._model.get('width');
                        var a = this._model.get('height');
                        f.style(e, {width: n.toString().indexOf('%') > 0 ? n : n + 'px', height: a.toString().indexOf('%') > 0 ? a : a + 'px'}), this.showView(e);
                        var i = this;
                        t.defer(function () {
                            i.trigger(g.JWPLAYER_SETUP_ERROR, {
                                message: o
                            });
                        });
                    }
                }, y;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(89), t(88), t(4), t(6), t(2), t(3), t(1)], n = function (r, o, t, e, n, a, i) {
            function c(t) {
                var e = t.get('provider').name || '';
                return e.indexOf('flash') >= 0 ? o : r;
            }
            var d = {skipoffset: null, tag: null};
            var f = function (r, o, a) {
                function f(r, o) {
                    'complete' !== r && (o = o || {}, A.tag && !o.tag && (o.tag = A.tag), this.trigger(r, o));
                }
                function h(r) {
                    v._adModel.set('duration', r.duration), v._adModel.set('position', r.position);
                }
                function w(r) {
                    var e = {};
                    if (A.tag && (e.tag = A.tag), p && y + 1 < p.length) {
                        this.trigger(t.JWPLAYER_MEDIA_COMPLETE, e), v._adModel.set('state', 'buffering'), o.set('skipButton', !1), y++;
                        var n;
                        var a = p[y];
                        s && (n = s[y]), this.loadItem(a, n);
                    }
                    else {
                        r.type === t.JWPLAYER_MEDIA_COMPLETE && (this.trigger(t.JWPLAYER_MEDIA_COMPLETE, e), this.trigger(t.JWPLAYER_PLAYLIST_COMPLETE, {})), this.destroy();
                    }
                }
                var p;
                var s;
                var b;
                var g;
                var l;
                var u = c(o);
                var v = new u(r, o);
                var y = 0;
                var A = {};
                var C = i.bind(function (r) {
                    r = r || {}, r.hasControls = !!o.get('controls'), this.trigger(t.JWPLAYER_INSTREAM_CLICK, r), v && v._adModel && (v._adModel.get('state') === e.PAUSED ? r.hasControls && v.instreamPlay() : v.instreamPause());
                }, this);
                var m = i.bind(function () {
                    v && v._adModel && v._adModel.get('state') === e.PAUSED && o.get('controls') && (r.setFullscreen(), r.play());
                }, this);
                this.type = 'instream', this.init = function () {
                    b = o.getVideo(), g = o.get('position'), l = o.get('playlist')[o.get('item')], v.on('all', f, this), v.on(t.JWPLAYER_MEDIA_TIME, h, this), v.on(t.JWPLAYER_MEDIA_COMPLETE, w, this), v.init(), b.detachMedia(), o.mediaModel.set('state', e.BUFFERING), r.checkBeforePlay() || 0 === g && !b.checkComplete() ? (g = 0, o.set('preInstreamState', 'instream-preroll')) : b && b.checkComplete() || o.get('state') === e.COMPLETE ? o.set('preInstreamState', 'instream-postroll') : o.set('preInstreamState', 'instream-midroll');
                    var i = o.get('state');
                    return i !== e.PLAYING && i !== e.BUFFERING || b.pause(), a.setupInstream(v._adModel), v._adModel.set('state', e.BUFFERING), a.clickHandler().setAlternateClickHandlers(n.noop, null), this.setText('Loading ad'), this;
                }, this.loadItem = function (r, e) {
                    if (n.isAndroid(2.3)) {
                        return void this.trigger({type: t.JWPLAYER_ERROR, message: 'Error loading instream: Cannot play instream on Android 2.3'});
                    }

                    i.isArray(r) && (p = r, s = e, r = p[y], s && (e = s[y])), this.trigger(t.JWPLAYER_PLAYLIST_ITEM, {index: y, item: r}), A = i.extend({}, d, e), v.load(r), this.addClickHandler();
                    var a = r.skipoffset || A.skipoffset;
                    a && (v._adModel.set('skipMessage', A.skipMessage), v._adModel.set('skipText', A.skipText), v._adModel.set('skipOffset', a), o.set('skipButton', !0));
                }, this.applyProviderListeners = function (r) {
                    v.applyProviderListeners(r), this.addClickHandler();
                }, this.play = function () {
                    v.instreamPlay();
                }, this.pause = function () {
                    v.instreamPause();
                }, this.hide = function () {
                    v.hide();
                }, this.addClickHandler = function () {
                    a.clickHandler().setAlternateClickHandlers(C, m), v.on(t.JWPLAYER_MEDIA_META, this.metaHandler, this);
                }, this.skipAd = function (r) {
                    var o = t.JWPLAYER_AD_SKIPPED;
                    this.trigger(o, r), w.call(this, {
                        type: o
                    });
                }, this.metaHandler = function (r) {
                    r.width && r.height && a.resizeMedia();
                }, this.destroy = function () {
                    if (this.off(), o.set('skipButton', !1), v) {
                        a.clickHandler() && a.clickHandler().revertAlternateClickHandlers(), v.instreamDestroy(), a.destroyInstream(), v = null, r.attachMedia();
                        var t = o.get('preInstreamState');
                        switch (t) {
                            case 'instream-preroll':
                            case 'instream-midroll':
                                var c = i.extend({}, l);
                                c.starttime = g, o.loadVideo(c), n.isMobile() && o.mediaModel.get('state') === e.BUFFERING && b.setState(e.BUFFERING), b.play();
                                break;case 'instream-postroll':
                            case 'instream-idle':
                                b.stop();
                        }
                    }

                }, this.getState = function () {
                    return !(!v || !v._adModel) && v._adModel.get('state');
                }, this.setText = function (r) {
                    a.setAltText(r ? r : '');
                }, this.hide = function () {
                    a.useExternalControls();
                };
            };
            return i.extend(f.prototype, a), f;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(3), t(20), t(21), t(4), t(6), t(2), t(1)], n = function (r, o, t, e, n, a, i) {
            var c = function (r, e) {
                this.model = e, this._adModel = (new o).setup({id: e.get('id'), volume: e.get('volume'), fullscreen: e.get('fullscreen'), mute: e.get('mute')}), this._adModel.on('change:state', t, this);
                var n = r.getContainer();
                this.swf = n.querySelector('object');
            };
            return c.prototype = i.extend({
                    init: function () {
                        if (a.isChrome()) {
                            var r = -1;
                            var o = !1;
                            this.swf.on('throttle', function (t) {
                                if (clearTimeout(r), 'resume' === t.state) {
                                    o && (o = !1, this.instreamPlay());
                                }
                                else {
                                    var e = this;
                                    r = setTimeout(function () {
                                        e._adModel.get('state') === n.PLAYING && (o = !0, e.instreamPause());
                                    }, 250);
                                }
                            }, this);
                        }

                        this.swf.on('instream:state', function (r) {
                            switch (r.newstate) {
                                case n.PLAYING:
                                    this._adModel.set('state', r.newstate);
                                    break;case n.PAUSED:
                                    this._adModel.set('state', r.newstate);
                            }
                        }, this).on('instream:time', function (r) {
                            this._adModel.set('position', r.position), this._adModel.set('duration', r.duration), this.trigger(e.JWPLAYER_MEDIA_TIME, r);
                        }, this).on('instream:complete', function (r) {
                            this.trigger(e.JWPLAYER_MEDIA_COMPLETE, r);
                        }, this).on('instream:error', function (r) {
                            this.trigger(e.JWPLAYER_MEDIA_ERROR, r);
                        }, this), this.swf.triggerFlash('instream:init'), this.applyProviderListeners = function (r) {
                            this.model.on('change:volume', function (o, t) {
                                r.volume(t);
                            }, this), this.model.on('change:mute', function (o, t) {
                                r.mute(t);
                            }, this);
                        };
                    },
                    instreamDestroy: function () {
                        this._adModel && (this.off(), this.swf.off(null, null, this), this.swf.triggerFlash('instream:destroy'), this.swf = null, this._adModel.off(), this._adModel = null, this.model = null);
                    },
                    load: function (r) {
                        this.swf.triggerFlash('instream:load', r);
                    },
                    instreamPlay: function () {
                        this.swf.triggerFlash('instream:play');
                    },
                    instreamPause: function () {
                        this.swf.triggerFlash('instream:pause');
                    }
                }, r), c;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(3), t(21), t(4), t(6), t(20)], n = function (r, o, t, e, n, a) {
            var i = function (i, c) {
                function d(o) {
                    var n = o || p.getVideo();
                    if (s !== n) {
                        if (s = n, !n) {
                            return;
                        }

                        n.off(), n.on('all', function (o, t) {
                            t = r.extend({}, t, {
                                type: o
                            }), this.trigger(o, t);
                        }, b), n.on(e.JWPLAYER_MEDIA_BUFFER_FULL, w), n.on(e.JWPLAYER_PLAYER_STATE, f), n.attachMedia(), n.volume(c.get('volume')), n.mute(c.get('mute')), p.on('change:state', t, b);
                    }
                }
                function f(r) {
                    switch (r.newstate) {
                        case n.PLAYING:
                            p.set('state', r.newstate);
                            break;case n.PAUSED:
                            p.set('state', r.newstate);
                    }
                }
                function h(r) {
                    c.trigger(r.type, r), b.trigger(e.JWPLAYER_FULLSCREEN, {
                        fullscreen: r.jwstate
                    });
                }
                function w() {
                    p.getVideo().play();
                }
                var p;
                var s;
                var b = r.extend(this, o);
                return i.on(e.JWPLAYER_FULLSCREEN, function (r) {
                        this.trigger(e.JWPLAYER_FULLSCREEN, r);
                    }, b), this.init = function () {
                        p = (new a).setup({id: c.get('id'), volume: c.get('volume'), fullscreen: c.get('fullscreen'), mute: c.get('mute')}), p.on('fullscreenchange', h), this._adModel = p;
                    }, b.load = function (r) {
                        p.set('item', 0), p.set('playlistItem', r), p.setActiveItem(r), d(), p.off(e.JWPLAYER_ERROR), p.on(e.JWPLAYER_ERROR, function (r) {
                            this.trigger(e.JWPLAYER_ERROR, r);
                        }, b), p.loadVideo(r);
                    }, b.applyProviderListeners = function (r) {
                        d(r), r.off(e.JWPLAYER_ERROR), r.on(e.JWPLAYER_ERROR, function (r) {
                            this.trigger(e.JWPLAYER_ERROR, r);
                        }, b), c.on('change:volume', function (r, o) {
                            s.volume(o);
                        }, b), c.on('change:mute', function (r, o) {
                            s.mute(o);
                        }, b);
                    }, this.instreamDestroy = function () {
                        p && (p.off(), this.off(), s && (s.detachMedia(), s.off(), p.getVideo() && s.destroy()), p = null, i.off(null, null, this), i = null);
                    }, b.instreamPlay = function () {
                        p.getVideo() && p.getVideo().play(!0);
                    }, b.instreamPause = function () {
                        p.getVideo() && p.getVideo().pause(!0);
                    }, b;
            };
            return i;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(46), t(4), t(1)], n = function (r, o, t) {
            function e(r) {
                r.mediaController.off(o.JWPLAYER_MEDIA_PLAY_ATTEMPT, r._onPlayAttempt), r.mediaController.off(o.JWPLAYER_PROVIDER_FIRST_FRAME, r._triggerFirstFrame), r.mediaController.off(o.JWPLAYER_MEDIA_TIME, r._onTime);
            }
            function n(r) {
                e(r), r._triggerFirstFrame = t.once(function () {
                    var t = r._qoeItem;
                    t.tick(o.JWPLAYER_MEDIA_FIRST_FRAME);
                    var n = t.between(o.JWPLAYER_MEDIA_PLAY_ATTEMPT, o.JWPLAYER_MEDIA_FIRST_FRAME);
                    r.mediaController.trigger(o.JWPLAYER_MEDIA_FIRST_FRAME, {
                        loadTime: n
                    }), e(r);
                }), r._onTime = i(r._triggerFirstFrame), r._onPlayAttempt = function () {
                    r._qoeItem.tick(o.JWPLAYER_MEDIA_PLAY_ATTEMPT);
                }, r.mediaController.on(o.JWPLAYER_MEDIA_PLAY_ATTEMPT, r._onPlayAttempt), r.mediaController.once(o.JWPLAYER_PROVIDER_FIRST_FRAME, r._triggerFirstFrame), r.mediaController.on(o.JWPLAYER_MEDIA_TIME, r._onTime);
            }
            function a(t) {
                function e(t, e, a) {
                    t._qoeItem && a && t._qoeItem.end(a.get('state')), t._qoeItem = new r, t._qoeItem.tick(o.JWPLAYER_PLAYLIST_ITEM), t._qoeItem.start(e.get('state')), n(t), e.on('change:state', function (r, o, e) {
                        t._qoeItem.end(e), t._qoeItem.start(o);
                    });
                }
                t.on('change:mediaModel', e);
            }
            var i = function (r) {
                var o = Number.MIN_VALUE;
                return function (t) {
                    t.position > o && r(), o = t.position;
                };
            };
            return {
                model: a
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(14), t(23), t(38), t(29), t(15), t(1), t(2), t(4), t(5)], n = function (r, o, e, n, a, i, c, d, f) {
            function h() {
                var r = {
                    LOAD_PROMISE_POLYFILL: {method: w, depends: []},
                    LOAD_BASE64_POLYFILL: {method: p, depends: []},
                    LOAD_JSON2: {method: s, depends: []},
                    LOADED_POLYFILLS: {method: b, depends: ['LOAD_PROMISE_POLYFILL', 'LOAD_BASE64_POLYFILL', 'LOAD_JSON2']},
                    LOAD_PLUGINS: {method: g, depends: ['LOADED_POLYFILLS']},
                    INIT_PLUGINS: {method: l, depends: ['LOAD_PLUGINS', 'SETUP_VIEW']},
                    LOAD_PROVIDERS: {method: E, depends: ['FILTER_PLAYLIST']},
                    LOAD_SKIN: {method: x, depends: ['LOADED_POLYFILLS']},
                    LOAD_PLAYLIST: {method: v, depends: ['LOADED_POLYFILLS']},
                    FILTER_PLAYLIST: {method: y, depends: ['LOAD_PLAYLIST']},
                    SETUP_VIEW: {method: T, depends: ['LOAD_SKIN']},
                    SEND_READY: {method: k, depends: ['INIT_PLUGINS', 'LOAD_PROVIDERS', 'SETUP_VIEW']}
                };
                return r;
            }
            function w(r) {
                window.Promise ? r() : t.e(1, function (o) {
                    t(42), r();
                });
            }
            function p(r) {
                window.btoa && window.atob ? r() : t.e(2, function (o) {
                    t(41), r();
                });
            }
            function s(r) {
                if ('object' != typeof JSON) {
                    var o = a.repo + 'json2.js';
                    var t = new n(o, (!1));
                    t.load(), t.addEventListener(d.COMPLETE, r);
                }
                else {
                    r();
                }
            }
            function b(r) {
                r();
            }
            function g(r, t) {
                J = o.loadPlugins(t.get('id'), t.get('plugins')), J.on(d.COMPLETE, r), J.on(d.ERROR, i.partial(u, r)), J.load();
            }
            function l(r, o, t) {
                J.setupPlugins(t, o), r();
            }
            function u(r, o) {
                I(r, 'Could not load plugin', o.message);
            }
            function v(r, o) {
                var t = o.get('playlist');
                i.isString(t) ? (L = new e, L.on(d.JWPLAYER_PLAYLIST_LOADED, function (t) {
                    o.set('playlist', t.playlist), o.set('feedid', t.feedid), r();
                }), L.on(d.JWPLAYER_ERROR, i.partial(C, r)), L.load(t)) : r();
            }
            function y(r, o, t, e, n) {
                var a = o.get('playlist');
                var i = n(a);
                if (i) {
                    r();
                }
                else {
                    var c = {};
                    var d = A(a);
                    d && (c.message = d), C(r, c);
                }
            }
            function A(r) {
                var o = '';
                return c.isMobile() && c.isRtmp(r[0].file) ? o = 'Error loading player: Rtmp not supported on mobile' : c.isMobile() && 'flv' === f.extension(r[0].file) ? o = 'Error loading player: FLV not supported on mobile' : c.flashVersion() || c.isMobile() ? c.flashVersion() && c.flashVersion() < 11.2 && (o = 'Error loading player: Flash Player version must be 11.2 or greater, <a href="http://www.adobe.com/go/getflashplayer" target="_blank">update Flash Player</a>.') : o = 'Error loading player: No Flash Player, please<a href="http://www.adobe.com/go/getflashplayer" target="_blank">install</a>.', o;
            }
            function C(r, o) {
                o && o.message ? I(r, 'Error loading playlist', o.message) : I(r, 'Error loading player', 'No playable sources found');
            }
            function m(r, o) {
                if (i.contains(a.SkinsLoadable, r)) {
                    return o + 'skins/' + r + '.css';
                }
            }
            function S(r) {
                for (var o = document.styleSheets, t = 0, e = o.length; t < e; t++) {
                    if (o[t].href === r) {
                        return !0;
                    }

                }

                return !1;
            }
            function x(r, o) {
                var t = o.get('skin');
                var e = o.get('skinUrl');
                if (i.contains(a.SkinsIncluded, t)) {
                    return void r();
                }

                if (e || (e = m(t, o.get('base'))), i.isString(e) && !S(e)) {
                    o.set('skin-loading', !0);
                    var c = !0;
                    var f = new n(e, c);
                    f.addEventListener(d.COMPLETE, function () {
                        o.set('skin-loading', !1);
                    }), f.addEventListener(d.ERROR, function () {
                        o.set('skin', 'seven'), o.set('skin-loading', !1);
                    }), f.load();
                }

                i.defer(function () {
                    r();
                });
            }
            function E(o, t) {
                var e = t.getProviders();
                var n = t.get('playlist');
                var a = e.required(n);
                r.load(a).then(o);
            }
            function T(r, o, t, e) {
                e.setup(), r();
            }
            function k(r) {
                r({
                    type: 'complete'
                });
            }
            function I(r, o, t) {
                r({type: 'error', msg: o, reason: t});
            }
            var J;
            var L;
            return {getQueue: h, error: I};
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(35), t(2), t(74), t(82)], n = function (r, o) {
            return t.p = o.loadFrom(), r.selectPlayer;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(5)], n = function (r) {
            function o(r) {
                r || t();
            }
            function t() {
                throw new Error('Invalid DFXP file')
            }
            var e = r.seconds;
            return function (n) {
                o(n);
                var a = [];
                var i = n.getElementsByTagName('p');
                o(i), i.length || (i = n.getElementsByTagName('tt:p'), i.length || (i = n.getElementsByTagName('tts:p')));
                for (var c = 0; c < i.length; c++) {
                    var d = i[c];
                    var f = d.innerHTML || d.textContent || d.text || '';
                    var h = r.trim(f).replace(/>\s+</g, '><').replace(/tts?:/g, '');
                    if (h) {
                        var w = d.getAttribute('begin');
                        var p = d.getAttribute('dur');
                        var s = d.getAttribute('end');
                        var b = {begin: e(w), text: h};
                        s ? b.end = e(s) : p && (b.end = b.begin + e(p)), a.push(b);
                    }

                }
                return a.length || t(), a;
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(13), t(5), t(2)], n = function (r, o, t) {
            var e = 'jwplayer';
            var n = function (n, a) {
                for (var i = [], c = [], d = o.xmlAttribute, f = 'default', h = 'label', w = 'file', p = 'type', s = 0; s < n.childNodes.length; s++) {
                    var b = n.childNodes[s];
                    if (b.prefix === e) {
                        var g = r.localName(b);
                        'source' === g ? (
                            delete a.sources
                            , i.push({'file': d(b, w), 'default': d(b, f), 'label': d(b, h), 'type': d(b, p)})) : 'track' === g ? (
                                delete a.tracks
                                , c.push({'file': d(b, w), 'default': d(b, f), 'kind': d(b, 'kind'), 'label': d(b, h)})) : (a[g] = t.serialize(r.textContent(b)), 'file' === g && a.sources &&
                                delete a.sources
                                );
                    }

                    a[w] || (a[w] = a.link);
                }
                if (i.length) {
                    for (a.sources = [], s = 0; s < i.length; s++) {
                        i[s].file.length > 0 && (i[s][f] = 'true' === i[s][f], i[s].label.length ||
                        delete i[s].label
                        , a.sources.push(i[s]));
                    }
                }

                if (c.length) {
                    for (a.tracks = [], s = 0; s < c.length; s++) {
                        c[s].file.length > 0 && (c[s][f] = 'true' === c[s][f], c[s].kind = c[s].kind.length ? c[s].kind : 'captions', c[s].label.length ||
                        delete c[s].label
                        , a.tracks.push(c[s]));
                    }
                }

                return a;
            };
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(13), t(5), t(2)], n = function (r, o, t) {
            function e(r) {
                for (var o = [], t = 0; t < c(r); t++) {
                    var e = r.childNodes[t];
                    'jwplayer' === e.prefix && 'mediatypes' === a(e).toLowerCase() && o.push(i(e));
                }
                return o;
            }
            var n = o.xmlAttribute;
            var a = r.localName;
            var i = r.textContent;
            var c = r.numChildren;
            var d = 'media';
            var f = function (r, o) {
                function h(r) {
                    var o = {
                        zh: 'Chinese',
                        nl: 'Dutch',
                        en: 'English',
                        fr: 'French',
                        de: 'German',
                        it: 'Italian',
                        ja: 'Japanese',
                        pt: 'Portuguese',
                        ru: 'Russian',
                        es: 'Spanish'
                    };
                    return o[r] ? o[r] : r;
                }
                var w;
                var p;
                var s = 'tracks';
                var b = [];
                for (p = 0; p < c(r); p++) {
                    if (w = r.childNodes[p], w.prefix === d) {
                        if (!a(w)) {
                            continue;
                        }

                        switch (a(w).toLowerCase()) {
                            case 'content':
                                if (n(w, 'duration') && (o.duration = t.seconds(n(w, 'duration'))), n(w, 'url')) {
                                    o.sources || (o.sources = []);
                                    var g = {file: n(w, 'url'), type: n(w, 'type'), width: n(w, 'width'), label: n(w, 'label')};
                                    var l = e(w);
                                    l.length && (g.mediaTypes = l), o.sources.push(g);
                                }

                                c(w) > 0 && (o = f(w, o));
                                break;case 'title':
                                o.title = i(w);
                                break;case 'description':
                                o.description = i(w);
                                break;case 'guid':
                                o.mediaid = i(w);
                                break;case 'thumbnail':
                                o.image || (o.image = n(w, 'url'));
                                break;case 'player':
                                break;case 'group':
                                f(w, o);
                                break;case 'subtitle':
                                var u = {};
                                u.file = n(w, 'url'), u.kind = 'captions', n(w, 'lang').length > 0 && (u.label = h(n(w, 'lang'))), b.push(u);
                        }
                    }

                }

                for (o.hasOwnProperty(s) || (o[s] = []), p = 0; p < b.length; p++) {
                    o[s].push(b[p]);

                }
                return o;
            };
            return f;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(5), t(13), t(94), t(95), t(37)], n = function (r, o, t, e, n) {
            function a(o) {
                for (var a = {}, c = 0; c < o.childNodes.length; c++) {
                    var d = o.childNodes[c];
                    var h = f(d);
                    if (h) {
                        switch (h.toLowerCase()) {
                            case 'enclosure':
                                a.file = r.xmlAttribute(d, 'url');
                                break;case 'title':
                                a.title = i(d);
                                break;case 'guid':
                                a.mediaid = i(d);
                                break;case 'pubdate':
                                a.date = i(d);
                                break;case 'description':
                                a.description = i(d);
                                break;case 'link':
                                a.link = i(d);
                                break;case 'category':
                                a.tags ? a.tags += i(d) : a.tags = i(d);
                        }
                    }

                }
                return a = e(o, a), a = t(o, a), new n(a);
            }
            var i = o.textContent;
            var c = o.getChildNode;
            var d = o.numChildren;
            var f = o.localName;
            var h = {};
            return h.parse = function (r) {
                    for (var o = [], t = 0; t < d(r); t++) {
                        var e = c(r, t);
                        var n = f(e).toLowerCase();
                        if ('channel' === n) {
                            for (var i = 0; i < d(e); i++) {
                                var h = c(e, i);
                                'item' === f(h).toLowerCase() && o.push(a(h));
                            }
                        }

                    }
                    return o;
                }, h;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(37), t(39), t(1), t(14)], n = function (r, o, t, e) {
            function n(r, o) {
                for (var t = 0; t < r.length; t++) {
                    var e = r[t];
                    var n = o.choose(e);
                    if (n) {
                        return e.type;
                    }

                }
                return null;
            }
            function a(r, o) {
                return t.isUndefined(r) ? o : r;
            }
            var i = function (o) {
                return o = t.isArray(o) ? o : [o], t.compact(t.map(o, r));
            };
            i.filterPlaylist = function (r, o, e, n, i, f, h) {
                var w = [];
                return t.each(r, function (r) {
                        r = t.extend({}, r), r.allSources = c(r.sources, e, r.drm || n, r.preload || i, a(r.withCredentials, h)), r.sources = d(r.allSources, o), r.sources.length && (r.file = r.sources[0].file, (r.preload || i) && (r.preload = r.preload || i), (r.feedid || f) && (r.feedid = r.feedid || f), w.push(r));
                    }), w;
            };
            var c = function (r, e, n, i, c) {
                return t.compact(t.map(r, function (r) {
                    if (t.isObject(r)) {
                        return void 0 !== e && null !== e && (r.androidhls = e), (r.drm || n) && (r.drm = r.drm || n), (r.preload || i) && (r.preload = r.preload || i), r.withCredentials = a(r.withCredentials, c), o(r);
                    }

                }));
            };
            var d = function (r, o) {
                o && o.choose || (o = new e({
                    primary: o ? 'flash' : null
                }));
                var a = n(r, o);
                return t.where(r, {
                    type: a
                });
            };
            return i;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1)], n = function (r) {
            var o = {'kind': 'captions', 'default': !1};
            var t = function (t) {
                if (t && t.file) {
                    return r.extend({}, o, t);
                }

            };
            return t;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(18), t(2), t(4), t(3), t(1), t(29)], n = function (r, o, t, e, n, a) {
            function i(r, t, e) {
                return function () {
                    var n = o.getElementsByClassName('jw-overlays', r.getContainer())[0];
                    n && (n.appendChild(e), e.left = n.style.left, e.top = n.style.top, t.displayArea = n);
                };
            }
            function c(r) {
                function o() {
                    var o = r.displayArea;
                    o && r.resize(o.clientWidth, o.clientHeight);
                }
                return function () {
                    o(), setTimeout(o, 400);
                };
            }
            var d = function (d, f) {
                function h() {
                    l || (l = !0, g = a.loaderstatus.COMPLETE, b.trigger(t.COMPLETE));
                }
                function w() {
                    if (!v && (f && 0 !== n.keys(f).length || h(), !l)) {
                        var e = d.getPlugins();
                        s = n.after(u, h), n.each(f, function (n, i) {
                            var c = r.getPluginName(i);
                            var d = e[c];
                            var f = d.getJS();
                            var h = d.getTarget();
                            var w = d.getStatus();
                            w !== a.loaderstatus.LOADING && w !== a.loaderstatus.NEW && (f && !o.versionCheck(h) && b.trigger(t.ERROR, {
                                message: 'Incompatible player version'
                            }), s());
                        });
                    }
                }
                function p(r) {
                    if (!v) {
                        var e = 'File not found';
                        r.url && o.log(e, r.url), this.off(), this.trigger(t.ERROR, {
                            message: e
                        }), w();
                    }
                }
                var s;
                var b = n.extend(this, e);
                var g = a.loaderstatus.NEW;
                var l = !1;
                var u = n.size(f);
                var v = !1;
                this.setupPlugins = function (t, e) {
                    var a = [];
                    var f = d.getPlugins();
                    var h = e.get('plugins');
                    n.each(h, function (e, d) {
                        var w = r.getPluginName(d);
                        var p = f[w];
                        var s = p.getFlashPath();
                        var b = p.getJS();
                        var g = p.getURL();
                        if (s) {
                            var l = n.extend({name: w, swf: s, pluginmode: p.getPluginmode()}, e);
                            a.push(l);
                        }

                        var u = o.tryCatch(function () {
                            if (b && h[g]) {
                                var r = document.createElement('div');
                                r.id = t.id + '_' + w, r.className = 'jw-plugin jw-reset';
                                var o = n.extend({}, h[g]);
                                var e = p.getNewInstance(t, o, r);
                                e.addToPlayer = i(t, e, r), e.resizeHandler = c(e), t.addPlugin(w, e, r);
                            }

                        });
                        u instanceof o.Error && o.log('ERROR: Failed to load ' + w + '.');
                    }), e.set('flashPlugins', a);
                }, this.load = function () {
                    if (o.exists(f) && 'object' !== o.typeOf(f)) {
                        return void w();
                    }

                    g = a.loaderstatus.LOADING, n.each(f, function (r, e) {
                        if (o.exists(e)) {
                            var n = d.addPlugin(e);
                            n.on(t.COMPLETE, w), n.on(t.ERROR, p);
                        }

                    });
                    var r = d.getPlugins();
                    n.each(r, function (r) {
                        r.load();
                    }), w();
                }, this.destroy = function () {
                    v = !0, this.off();
                }, this.getStatus = function () {
                    return g;
                };
            };
            return d;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(18), t(40)], n = function (r, o) {
            var t = function (t) {
                this.addPlugin = function (e) {
                    var n = r.getPluginName(e);
                    return t[n] || (t[n] = new o(e)), t[n];
                }, this.getPlugins = function () {
                    return t;
                };
            };
            return t;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(26), t(25)], n = function (r, o) {
            var t = {html5: r, flash: o};
            return t;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(45), t(2), t(27)], n = function (r, o, t, e) {
            function n(t) {
                var e = t.currentTarget.activeCues;
                if (e && e.length) {
                    var n = e[e.length - 1].startTime;
                    var a = [];
                    if (r.each(e, function (r) {
                            r.startTime < n || (r.data ? a.push(r) : r.text && this.trigger('meta', {metadataTime: n, metadata: JSON.parse(r.text)}));
                        }, this), a.length) {
                        var i = o.parseID3(a);
                        this.trigger('meta', {metadataTime: n, metadata: i});
                    }
                }
            }
            function a() {
                var r = this.video.textTracks;
                if (C = -1, r) {
                    if (y || h(), r.length) {
                        var o = 0;
                        var t = r.length;
                        for (m = 0, o; o < t; o++) {
                            var e = r[o];
                            if (!A[o + e.kind]) {
                                if ('metadata' === e.kind) {
                                    e.oncuechange = n.bind(this), e.mode = 'showing', A[o + e.kind] = e, 'ID3 Metadata' === e.label && m++;
                                }
                                else if ('subtitles' === e.kind || 'captions' === e.kind) {
                                    var a = e.mode;
                                    if (e.mode = 'hidden', !e.cues.length && 'caterpillar' === this.getName().name && 'Unknown CC' === e.label) {
                                        continue;
                                    }

                                    e.mode = a, y.push(e), A[o + e.kind] = e, 'Unknown CC' === e.label && m++;
                                }
                            }

                        }
                    }

                    this.addTracksListener(r, 'change', g), y && y.length && this.trigger('subtitlesTracks', {
                        tracks: y
                    });
                }
            }
            function i(r) {
                var o = t.isChrome() || t.isIOS() || t.isSafari();
                !this._isSDK && o && r && (c.call(this, r) || (u(), e.emptyElement(this.video), d(), this.itemTracks = r, f.call(this, r)));
            }
            function c(r) {
                return r === this.itemTracks && y && y.length === m + this.itemTracks.length;
            }
            function d() {
                if (y) {
                    var o = r.filter(y, function (r) {
                        return 'Unknown CC' === r.label || 'ID3 Metadata' === r.label;
                    });
                    h(), r.each(o, function (r, o) {
                        A[o + r] = r;
                    }), y = o;
                }
            }
            function f(r) {
                if (r) {
                    var o = !1;
                    y || h();
                    for (var e = 0; e < r.length; e++) {
                        var n = r[e];
                        if (/\.(?:web)?vtt(?:\?.*)?$/i.test(n.file)) {
                            if (/subtitles|captions|descriptions|chapters|metadata/i.test(n.kind)) {
                                o || !this.video.hasAttribute('crossorigin') && t.crossdomain(n.file) && (this.video.setAttribute('crossorigin', 'anonymous'), o = !0);
                                var a = document.createElement('track');
                                a.src = n.file, a.kind = n.kind, a.srclang = n.language || '', a.label = n.label, a.mode = 'disabled', a.id = n.defaulttrack ? 'default' : '', this.video.appendChild(a);
                            }
                        }
                        else {
                            y.push(n), A[e + n.kind] = a;
                        }
                    }
                }
            }
            function h() {
                y = [], A = {};
            }
            function w(o) {
                y && (0 === o && r.each(y, function (r) {
                    r.mode = 'disabled';
                }), C !== o - 1 && (u(), C = o - 1, y[C] && (y[C].mode = 'showing'), this.trigger('subtitlesTrackChanged', {currentTrack: C + 1, tracks: y})));
            }
            function p() {
                return C;
            }
            function s(r, o, t) {
                t = t.bind(this), r.addEventListener ? r.addEventListener(o, t) : r['on' + o] = t;
            }
            function b(r, o, t) {
                r && (r.removeEventListener ? r.removeEventListener(o, t) : r['on' + o] = null);
            }
            function g() {
                if (y) {
                    var r = -1;
                    var o = 0;
                    for (o; o < y.length; o++) {
                        if ('showing' === y[o].mode) {
                            r = o;break;
                        }

                    }

                    this.setSubtitlesTrack(r + 1);
                }
                else {
                    this.setTextTracks();
                }
            }
            function l() {
                y = null, A = null, m = 0;
            }
            function u() {
                y && y[C] && (y[C].mode = 'disabled');
            }
            var v = {
                addTracksListener: s,
                clearTracks: l,
                disableTextTrack: u,
                getSubtitlesTrack: p,
                removeTracksListener: b,
                setTextTracks: a,
                setupSideloadedTracks: i,
                setSubtitlesTrack: w,
                textTrackChangeHandler: g
            };
            var y = null;
            var A = null;
            var C = -1;
            var m = 0;
            return v;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(28)], n = function (r, o) {
            function t(r) {
                r.onload = null, r.onprogress = null, r.onreadystatechange = null, r.onerror = null, 'abort' in r && r.abort();
            }
            function e(o, e) {
                return function (n) {
                    var a = n.currentTarget || e.xhr;
                    if (clearTimeout(e.timeoutId), e.retryWithoutCredentials && e.xhr.withCredentials) {
                        t(a);
                        var i = r.extend({}, e, {xhr: null, withCredentials: !1, retryWithoutCredentials: !1});
                        return void w(i);
                    }

                    e.onerror(o, e.url, a);
                };
            }
            function n(r) {
                return function (o) {
                    var t = o.currentTarget || r.xhr;
                    if (4 === t.readyState) {
                        if (clearTimeout(r.timeoutId), t.status >= 400) {
                            var e;
                            return e = 404 === t.status ? 'File not found' : '' + t.status + '(' + t.statusText + ')', r.onerror(e, r.url, t);
                        }

                        if (200 === t.status) {
                            return a(r)(o);
                        }
                    }

                };
            }
            function a(r) {
                return function (t) {
                    var e = t.currentTarget || r.xhr;
                    if (clearTimeout(r.timeoutId), r.responseType) {
                        if ('json' === r.responseType) {
                            return i(e, r);
                        }
                    }
                    else {
                        var n;
                        var a = e.responseXML;
                        if (a) {
                            try {
                                n = a.firstChild;
                            }
                            catch (d) {}
                        }

                        if (a && n) {
                            return c(e, a, r);
                        }

                        if (f && e.responseText && !a && (a = o.parseXML(e.responseText), a && a.firstChild)) {
                            return c(e, a, r);
                        }

                        if (r.requireValidXML) {
                            return void r.onerror('Invalid XML', r.url, e);
                        }
                    }
                    r.oncomplete(e);
                };
            }
            function i(o, t) {
                if (!o.response || r.isString(o.response) && '"' !== o.responseText.substr(1)) {
                    try {
                        o = r.extend({}, o, {
                            response: JSON.parse(o.responseText)
                        });
                    }
                    catch (e) {
                        return void t.onerror('Invalid JSON', t.url, o);
                    }
                }

                return t.oncomplete(o);
            }
            function c(o, t, e) {
                var n = t.documentElement;
                return e.requireValidXML && ('parsererror' === n.nodeName || n.getElementsByTagName('parsererror').length) ? void e.onerror('Invalid XML', e.url, o) : (o.responseXML || (o = r.extend({}, o, {
                    responseXML: t
                })), e.oncomplete(o));
            }
            var d = function () {};
            var f = !1;
            var h = function (r) {
                var o = document.createElement('a');
                var t = document.createElement('a');
                o.href = location.href;
                try {
                    return t.href = r, t.href = t.href, o.protocol + '//' + o.host != t.protocol + '//' + t.host;
                }
                catch (e) {}
                return !0;
            };
            var w = function (o, i, c, w) {
                r.isObject(o) && (w = o, o = w.url);
                var p;
                var s = r.extend({
                    xhr: null,
                    url: o,
                    withCredentials: !1,
                    retryWithoutCredentials: !1,
                    timeout: 6e4,
                    timeoutId: -1,
                    oncomplete: i || d,
                    onerror: c || d,
                    mimeType: w && !w.responseType ? 'text/xml' : '',
                    requireValidXML: !1,
                    responseType: w && w.plainText ? 'text' : ''
                }, w);
                if ('XDomainRequest' in window && h(o)) {
                    p = s.xhr = new window.XDomainRequest, p.onload = a(s), p.ontimeout = p.onprogress = d, f = !0;
                }
                else {
                    if (!('XMLHttpRequest' in window)) {
                        return void s.onerror('', o);
                    }

                    p = s.xhr = new window.XMLHttpRequest, p.onreadystatechange = n(s);
                }
                var b = e('Error loading file', s);
                p.onerror = b, 'overrideMimeType' in p ? s.mimeType && p.overrideMimeType(s.mimeType) : f = !0;
                try {
                    o = o.replace(/#.*$/, ''), p.open('GET', o, !0);
                }
                catch (g) {
                    return b(g), p;
                }
                if (s.responseType) {
                    try {
                        p.responseType = s.responseType;
                    }
                    catch (g) {}
                }

                s.timeout && (s.timeoutId = setTimeout(function () {
                    t(p), s.onerror('Timeout', o, p);
                }, s.timeout), p.onabort = function () {
                    clearTimeout(s.timeoutId);
                });
                try {
                    s.withCredentials && 'withCredentials' in p && (p.withCredentials = !0), p.send();
                }
                catch (g) {
                    b(g);
                }
                return p;
            };
            return {ajax: w, crossdomain: h};
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1)], n = function (r) {
            function o(r) {
                return function () {
                    return e(r);
                };
            }
            var t = {};
            var e = r.memoize(function (r) {
                var o = navigator.userAgent.toLowerCase();
                return null !== o.match(r);
            });
            var n = t.isInt = function (r) {
                return parseFloat(r) % 1 === 0;
            };
            t.isFlashSupported = function () {
                var r = t.flashVersion();
                return r && r >= 11.2;
            }, t.isFF = o(/firefox/i), t.isIPod = o(/iP(hone|od)/i), t.isIPad = o(/iPad/i), t.isSafari602 = o(/Macintosh.*Mac OS X 10_8.*6\.0\.\d* Safari/i), t.isOSX = o(/Mac OS X/i), t.isEdge = o(/\sedge\/\d+/i);
            var a = t.isIETrident = function (r) {
                return !!t.isEdge() || (r ? (r = parseFloat(r).toFixed(1), e(new RegExp('trident/.+rv:\\s*' + r, 'i'))) : e(/trident/i));
            };
            var i = t.isMSIE = function (r) {
                return r ? (r = parseFloat(r).toFixed(1), e(new RegExp('msie\\s*' + r, 'i'))) : e(/msie/i);
            };
            var c = o(/chrome/i);
            t.isChrome = function () {
                return c() && !t.isEdge();
            }, t.isIE = function (r) {
                return r ? (r = parseFloat(r).toFixed(1), r >= 11 ? a(r) : i(r)) : i() || a();
            }, t.isSafari = function () {
                return e(/safari/i) && !e(/chrome/i) && !e(/chromium/i) && !e(/android/i);
            };
            var d = t.isIOS = function (r) {
                return e(r ? new RegExp('iP(hone|ad|od).+\\s(OS\\s' + r + '|.*\\sVersion/' + r + ')', 'i') : /iP(hone|ad|od)/i);
            };
            t.isAndroidNative = function (r) {
                return f(r, !0);
            };
            var f = t.isAndroid = function (r, o) {
                return !(o && e(/chrome\/[123456789]/i) && !e(/chrome\/18/)) && (r ? (n(r) && !/\./.test(r) && (r = '' + r + '.'), e(new RegExp('Android\\s*' + r, 'i'))) : e(/Android/i));
            };
            return t.isMobile = function () {
                    return d() || f();
                }, t.isIframe = function () {
                    return window.frameElement && 'IFRAME' === window.frameElement.nodeName;
                }, t.flashVersion = function () {
                    if (t.isAndroid()) {
                        return 0;
                    }

                    var r;
                    var o = navigator.plugins;
                    if (o && (r = o['Shockwave Flash'], r && r.description)) {
                        return parseFloat(r.description.replace(/\D+(\d+\.?\d*).*/, '$1'));
                    }

                    if ('undefined' != typeof window.ActiveXObject) {
                        try {
                            if (r = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash')) {
                                return parseFloat(r.GetVariable('$version').split(' ')[1].replace(/\s*,\s*/, '.'));
                            }

                        }
                        catch (e) {
                            return 0;
                        }
                        return r;
                    }

                    return 0;
                }, t.getBrowserInfo = function () {
                    var r = window.navigator.userAgent.toLowerCase();
                    var o = '';
                    if (this.isIE()) {
                        o = r.match(/msie ([\d.]+)/) ? 'IE-' + r.match(/msie ([\d.]+)/)[1] : 'IE-unknown';
                    }
                    else if (this.isChrome()) {
                        var t = r.match(/chrome\/([\d.]+)/);
                        o = t && t.length > 1 ? 'Chrome-' + t[1] : 'Chrome-unknown';
                    }
                    else {
                        o = this.isFF() ? 'Firefox-' + r.match(/firefox\/([\d.]+)/)[1] : this.isSafari() ? 'Safari-' + r.match(/version\/([\d.]+)/)[1] : d() ? 'ios' : f() ? 'android' : 'other';
                    }
                    return o;
                }, t.isPoorIE = function () {
                    return this.isIE() && (i(8) || i(7) || i(6) || document.documentMode && document.documentMode <= 8);
                }, t;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(3), t(1)], n = function (r, o, t) {
            function e(r, o, t) {
                var e = document.createElement('param');
                e.setAttribute('name', o), e.setAttribute('value', t), r.appendChild(e);
            }
            function n(n, a, d, f, h) {
                var w;
                if (f = f || 'opaque', r.isMSIE() || r.isPoorIE()) {
                    var p = document.createElement('div');
                    a.appendChild(p);
                    var s = h.file;
                    p.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%" id="' + d + '" name="' + d + '" tabindex="0"><param name="movie" value="' + n + '"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="wmode" value="' + f + '"><param name="bgcolor" value="' + c + '"><param name="menu" value="false">' + (r.isPoorIE() ? '<param name="flashVars" value="' + (s ? 'file=' + s + '&' : '') + 'enableControlbar=true">' : '') + '</object>';
                    for (var b = a.getElementsByTagName('object'), g = b.length; g--;) {
                        b[g].id === d && (w = b[g]);
                    }
                }
                else {
                    w = document.createElement('object'), w.setAttribute('type', 'application/x-shockwave-flash'), w.setAttribute('data', n), w.setAttribute('width', '100%'), w.setAttribute('height', '100%'), w.setAttribute('bgcolor', c), w.setAttribute('id', d), w.setAttribute('name', d), e(w, 'allowfullscreen', 'true'), e(w, 'allowscriptaccess', 'always'), e(w, 'wmode', f), e(w, 'menu', 'false'), a.appendChild(w, a);
                }
                return w.className = 'jw-swf jw-reset', w.style.display = 'block', w.style.position = 'absolute', w.style.left = 0, w.style.right = 0, w.style.top = 0, w.style.bottom = 0, t.extend(w, o), w.queueCommands = !0, w.triggerFlash = function (o) {
                        var e = this;
                        if ('setup' !== o && e.queueCommands || !e.__externalCall) {
                            for (var n = e.__commandQueue, a = n.length; a--;) {
                                n[a][0] === o && n.splice(a, 1);

                            }
                            return n.push(Array.prototype.slice.call(arguments)), e;
                        }

                        var c = Array.prototype.slice.call(arguments, 1);
                        var d = r.tryCatch(function () {
                            if (c.length) {
                                for (var r = c.length; r--;) {
                                    'object' == typeof c[r] && t.each(c[r], i);

                                }
                                var n = JSON.stringify(c);
                                e.__externalCall(o, n);
                            }
                            else {
                                e.__externalCall(o);
                            }
                        });
                        return d instanceof r.Error && (console.error(o, d), 'setup' === o) ? (d.name = 'Failed to setup flash', d) : e;
                    }, w.__commandQueue = [], w;
            }
            function a(r) {
                r && r.parentNode && (r.style.display = 'none', r.parentNode.removeChild(r));
            }
            function i(o, t, e) {
                (r.isPoorIE() && o && o.childNodes || window.HTMLElement && o instanceof window.HTMLElement) &&
                delete e[t];
            }
            var c = '#000000';
            return {embed: n, remove: a};
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [], n = function () {
            return {
                hasClass: function (r, o) {
                    var t = ' ' + o + ' ';
                    return 1 === r.nodeType && (' ' + r.className + ' ').replace(/[\t\r\n\f]/g, ' ').indexOf(t) >= 0;
                }
            };
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(15), t(1), t(30), t(28), t(19)], n = function (r, o, t, e, n) {
            var a = {};
            return a.repo = o.memoize(function () {
                    var o = n.split('+')[0];
                    var e = r.repo + o + '/';
                    return t.isHTTPS() ? e.replace(/^http:/, 'https:') : e;
                }), a.versionCheck = function (r) {
                    var o = ('0' + r).split(/\W/);
                    var t = n.split(/\W/);
                    var e = parseFloat(o[0]);
                    var a = parseFloat(t[0]);
                    return !(e > a || e === a && parseFloat('0' + o[1]) > parseFloat(t[1]));
                }, a.loadFrom = function () {
                    return a.repo();
                }, a;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [], n = function () {
            var r = {};
            return r.getElementsByClassName = function (r, o, t) {
                    if (o = o || document, t = t || '*', o.getElementsByClassName) {
                        return o.getElementsByClassName(r);
                    }

                    for (var e = [], n = o.getElementsByTagName(t), a = n.length, i = new RegExp('(^|\\s)' + r + '(\\s|$)'), c = 0; c < a; c++) {
                        i.test(n[c].className) && e.push(n[c]);

                    }
                    return e;
                }, r.addEventListener = function (r, o, t, e) {
                    r = r || document, e = e || !1, r.addEventListener ? r.addEventListener(o, t, e) : r.attachEvent('on' + o, t);
                }, r.removeEventListener = function (r, o, t, e) {
                    r = r || document, e = e || !1, r.removeEventListener ? r.removeEventListener(o, t, e) : r.detachEvent('on' + o, t);
                }, r.arrayFilter = function () {
                    Array.prototype.filter || (Array.prototype.filter = function (r) {
                        if (void 0 === this || null === this) {
                            throw TypeError();
                        }

                        var o = Object(this);
                        var t = o.length >>> 0;
                        if ('function' != typeof r) {
                            throw TypeError();
                        }

                        var e;
                        var n = [];
                        var a = arguments[1];
                        for (e = 0; e < t; e++) {
                            if (e in o) {
                                var i = o[e];
                                r.call(a, i, e, o) && n.push(i);
                            }

                        }

                        return n;
                    });
                }, r.funcBind = function () {
                    Function.prototype.bind || (Function.prototype.bind = function (r) {
                        if ('function' != typeof this) {
                            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
                        }

                        var o = Array.prototype.slice.call(arguments, 1);
                        var t = this;
                        var e = function () {};
                        var n = function () {
                            return t.apply(this instanceof e && r ? this : r || window, o.concat(Array.prototype.slice.call(arguments)));
                        };
                        return e.prototype = this.prototype, n.prototype = new e, n;
                    });
                }, r.arrayFilter(), r.funcBind(), r;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(3)], n = function (r, o) {
            var t = r.extend({
                get: function (r) {
                    return this.attributes = this.attributes || {}, this.attributes[r];
                },
                set: function (r, o) {
                    if (this.attributes = this.attributes || {}, this.attributes[r] !== o) {
                        var t = this.attributes[r];
                        this.attributes[r] = o, this.trigger('change:' + r, this, o, t);
                    }

                },
                clone: function () {
                    return r.clone(this.attributes);
                }
            }, o);
            return t;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [], n = function () {
            var r = function (r, t, e) {
                if (t = t || this, e = e || [], window.jwplayer && window.jwplayer.debug) {
                    return r.apply(t, e);
                }

                try {
                    return r.apply(t, e);
                }
                catch (n) {
                    return new o(r.name, n);
                }
            };
            var o = function (r, o) {
                this.name = r, this.message = o.message || o.toString(), this.error = o;
            };
            return {tryCatch: r, Error: o};
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [], n = function () {
            return document.createElement('video');
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(49), t(2), t(1), t(7), t(16)], n = function (r, o, t, e, n) {
            var a = function (r, o) {
                this.model = r, this.api = o, this.imageUrl = '', this.setup(), this.isHide = !0;
            };
            return t.extend(a.prototype, {
                    setup: function () {
                        var t = r();
                        this.el = o.createElement(t);
                        var e = this;
                        o.addEventListener(this.el, 'click', function () {
                            window.open(e.imageUrl);
                        }, !1);
                    },
                    loadAdv: function (r) {
                        var e = this.model.get('imageAdvs');
                        if (e && e[r] && e[r].image) {
                            var a = e[r].image;
                            var i = o.getElementsByClassName('jw-media', this.api.getContainer())[0];
                            var c = this;
                            var d = {
                                'display': 'block',
                                'z-index': 1e3,
                                'width': '100%',
                                'height': '100%',
                                'top': 0,
                                'left': 0
                            };
                            if (t.isString(a) ? (a = encodeURI(a), d.backgroundImage = 'url("' + a + '")') : d.backgroundImage = '', 'end' === r && (d['z-index'] = 0), 'pause' === r) {
                                var f = i ? i.clientHeight : this.model.get('height');
                                var h = i ? i.clientWidth : this.model.get('width');
                                d.width = '400px', d.height = '300px', d.top = (f - 300) / 2, d.left = (h - 400) / 2;
                            }

                            n.style(this.el, d);
                            var w = o.getElementsByClassName('adv-close', this.el)[0];
                            var p = o.getElementsByClassName('adv-countdown', this.el)[0];
                            if (w.style.display = 'none', p.style.display = 'none', 'start' === r) {
                                var s = e[r].time <= 60 ? e[r].time : 60;
                                p.style.display = 'block', p.innerHTML = '广告: ' + s + '秒';
                            }

                            'pause' === r && (w.addEventListener('click', function (r) {
                                c.el.style.display = 'none', r.stopPropagation();
                            }, !1), w.style.display = 'block'), this.imageUrl = e[r].url, this.element() && this.api.getContainer().replaceChild(this.el, this.element()), this.isHide = !1;
                        }

                    },
                    beginStartAdv: function () {
                        var r = this.model.get('imageAdvs').start;
                        this.loadAdv('start');
                        var t = r.time <= 60 ? r.time : 60;
                        var e = this.element();
                        var n = this;
                        var a = setInterval(function () {
                            if (t--, t > 0) {
                                var r = '广告: ' + t + '秒';
                                o.getElementsByClassName('adv-countdown', e)[0].innerHTML = r;
                            }
                            else {
                                e.style.display = 'none', clearInterval(a), n.model.loadVideo(), this.isHide = !0;
                            }
                        }, 1e3);
                    },
                    element: function () {
                        var r = this.api.getContainer();
                        return o.getElementsByClassName('jw-adv', r).length > 0 ? o.getElementsByClassName('jw-adv', r)[0] : this.el;
                    },
                    isHidden: function () {
                        return this.isHide;
                    },
                    hide: function () {
                        this.isHide = !0, this.element().style.display = 'none';
                    },
                    resizePauseAdv: function (r, o) {
                        n.style(this.element(), {top: (o - 300) / 2, left: (r - 400) / 2});
                    }
                }), a;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(16), t(6), t(1)], n = function (r, o, t, e) {
            var n = o.style;
            var a = {
                back: !0,
                fontSize: 15,
                fontFamily: 'Arial,sans-serif',
                fontOpacity: 100,
                color: '#FFF',
                backgroundColor: '#000',
                backgroundOpacity: 100,
                edgeStyle: null,
                windowColor: '#FFF',
                windowOpacity: 0,
                preprocessor: e.identity
            };
            var i = function (i) {
                function c(o) {
                    o = o || '';var t = 'jw-captions-window jw-reset';
                    o ? (y.innerHTML = o, v.className = t + ' jw-captions-window-active') : (v.className = t, r.empty(y));
                }
                function d(r) {
                    l = r, h(b, l);
                }
                function f(r, o) {
                    var t = r.source;
                    var n = o.metadata;
                    return t ? !(!n || !e.isNumber(n[t])) && n[t] : o.position;
                }
                function h(r, o) {
                    if (r && r.data && o) {
                        var t = f(r, o);
                        if (t !== !1) {
                            var e = r.data;
                            if (!(g >= 0 && w(e, g, t))) {
                                for (var n = -1, a = 0; a < e.length; a++) {
                                    if (w(e, a, t)) {
                                        n = a;break;
                                    }

                                }

                                n === -1 ? c('') : n !== g && (g = n, c(A.preprocessor(e[g].text)));
                            }
                        }
                    }
                }
                function w(r, o, t) {
                    return r[o].begin <= t && (!r[o].end || r[o].end >= t) && (o === r.length - 1 || r[o + 1].begin >= t);
                }
                function p(r, t, e) {
                    if (o.css('#' + r + ' .jw-video::-webkit-media-text-track-display', t, r), o.css('#' + r + ' .jw-video::cue', e, r), e.backgroundColor) {
                        var n = '{background-color: ' + e.backgroundColor + ' !important;}';
                        o.css('#' + r + ' .jw-video::-webkit-media-text-track-display-backdrop', n, r);
                    }
                }
                function s(r, t, e) {
                    var n = o.hexToRgba('#000000', e);
                    'dropshadow' === r ? t.textShadow = '0 2px 1px ' + n : 'raised' === r ? t.textShadow = '0 0 5px ' + n + ', 0 1px 5px ' + n + ', 0 2px 5px ' + n : 'depressed' === r ? t.textShadow = '0 -2px 1px ' + n : 'uniform' === r && (t.textShadow = '-2px 0 1px ' + n + ',2px 0 1px ' + n + ',0 -2px 1px ' + n + ',0 2px 1px ' + n + ',-1px 1px 1px ' + n + ',1px 1px 1px ' + n + ',1px -1px 1px ' + n + ',1px 1px 1px ' + n);
                }
                var b;
                var g;
                var l;
                var u;
                var v;
                var y;
                var A = {};
                u = document.createElement('div'), u.className = 'jw-captions jw-reset', this.show = function () {
                    u.className = 'jw-captions jw-captions-enabled jw-reset';
                }, this.hide = function () {
                    u.className = 'jw-captions jw-reset';
                }, this.populate = function (r) {
                    return g = -1, b = r, r ? void h(r, l) : void c('');
                }, this.resize = function () {
                    var r = u.clientWidth;
                    var o = Math.pow(r / 400, .6);
                    if (o) {
                        var t = A.fontSize * o;
                        n(u, {
                            fontSize: Math.round(t) + 'px'
                        });
                    }

                }, this.setup = function (r, t) {
                    if (v = document.createElement('div'), y = document.createElement('span'), v.className = 'jw-captions-window jw-reset', y.className = 'jw-captions-text jw-reset', A = e.extend({}, a, t), t) {
                        var c = A.fontOpacity;
                        var d = A.windowOpacity;
                        var f = A.edgeStyle;
                        var h = A.backgroundColor;
                        var w = {};
                        var b = {color: o.hexToRgba(A.color, c), fontFamily: A.fontFamily, fontStyle: A.fontStyle, fontWeight: A.fontWeight, textDecoration: A.textDecoration};
                        d && (w.backgroundColor = o.hexToRgba(A.windowColor, d)), s(f, b, c), A.back ? b.backgroundColor = o.hexToRgba(h, A.backgroundOpacity) : null === f && s('uniform', b), n(v, w), n(y, b), p(r, w, b);
                    }

                    v.appendChild(y), u.appendChild(v), this.populate(i.get('captionsTrack')), i.set('captions', A);
                }, this.clear = function () {
                    r.empty(u);
                }, this.element = function () {
                    return u;
                }, i.on('change:playlistItem', function () {
                    l = null, g = -1, c('');
                }, this), i.on('change:captionsTrack', function (r, o) {
                    this.populate(o);
                }, this), i.mediaController.on('seek', function () {
                    g = -1;
                }, this), i.mediaController.on('time seek', d, this), i.mediaController.on('subtitlesTrackData', function () {
                    h(b, l);
                }, this), i.on('change:state', function (r, o) {
                    switch (o) {
                        case t.IDLE:
                        case t.ERROR:
                        case t.COMPLETE:
                            this.hide();
                            break;default:
                            this.show();
                    }
                }, this);
            };
            return i;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(7), t(4), t(3), t(1)], n = function (r, o, t, e) {
            var n = function (n, a, i) {
                function c(r) {
                    if (!n.get('flashBlocked')) {
                        return h ? void h(r) : void b.trigger(r.type === o.touchEvents.CLICK ? 'click' : 'tap');
                    }
                }
                function d() {
                    return w ? void w() : void b.trigger('doubleClick');
                }
                var f;
                var h;
                var w;
                var p = {enableDoubleTap: !0, useMove: !0};
                e.extend(this, t), f = a, this.element = function () {
                    return f;
                };
                var s = new r(f, e.extend(p, i));
                s.on('click tap', c), s.on('doubleClick doubleTap', d), s.on('move', function () {
                    b.trigger('move');
                }), s.on('over', function () {
                    b.trigger('over');
                }), s.on('out', function () {
                    b.trigger('out');
                }), this.clickHandler = c;
                var b = this;
                this.setAlternateClickHandlers = function (r, o) {
                    h = r, w = o || null;
                }, this.revertAlternateClickHandlers = function () {
                    h = null, w = null;
                };
            };
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(2), t(22)], n = function (r, o, t) {
            function e(r, o) {
                this.time = r, this.text = o, this.el = document.createElement('div'), this.el.className = 'jw-cue jw-reset';
            }
            r.extend(e.prototype, {
                align: function (r) {
                    if ('%' === this.time.toString().slice(-1)) {
                        this.pct = this.time;
                    }
                    else {
                        var o = this.time / r * 100;
                        this.pct = o + '%';
                    }
                    this.el.style.left = this.pct;
                }
            });
            var n = {
                loadChapters: function (r) {
                    o.ajax(r, this.chaptersLoaded.bind(this), this.chaptersFailed, {
                        plainText: !0
                    });
                },
                chaptersLoaded: function (o) {
                    var e = t(o.responseText);
                    r.isArray(e) && (r.each(e, this.addCue, this), this.drawCues());
                },
                chaptersFailed: function () {},
                addCue: function (r) {
                    this.cues.push(new e(r.begin, r.text));
                },
                drawCues: function () {
                    var t = this._model.mediaModel.get('duration');
                    if (!t || t <= 0) {
                        return void this._model.mediaModel.once('change:duration', this.drawCues, this);
                    }

                    var e = this;
                    r.each(this.cues, function (r) {
                        r.align(t), o.addEventListener(r.el, 'mouseover', function () {
                            e.activeCue = r;
                        }), o.addEventListener(r.el, 'mouseout', function () {
                            e.activeCue = null;
                        }), e.elementRail.appendChild(r.el);
                    });
                },
                resetChapters: function () {
                    r.each(this.cues, function (r) {
                        r.el.parentNode && r.el.parentNode.removeChild(r.el);
                    }, this), this.cues = [];
                }
            };
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(17), t(2), t(1), t(7)], n = function (r, o, t, e) {
            var n = r.extend({
                constructor: function (o) {
                    r.call(this, o), this.container.className = 'jw-overlay-horizontal jw-reset', this.openClass = 'jw-open-drawer', this.componentType = 'drawer';
                },
                setup: function (r, n) {
                    this.iconUI || (this.iconUI = new e(this.el, {
                        useHover: !0,
                        directSelect: !0
                    }), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this)), this.reset(), r = t.isArray(r) ? r : [], this.activeContents = t.filter(r, function (r) {
                        return r.isActive;
                    }), o.toggleClass(this.el, 'jw-hidden', !n || this.activeContents.length < 2), n && this.activeContents.length > 1 && (o.removeClass(this.el, 'jw-off'), this.iconUI.on('tap', this.toggleOpenStateListener).on('over', this.openTooltipListener).on('out', this.closeTooltipListener), t.each(r, function (r) {
                        this.container.appendChild(r.el);
                    }, this));
                },
                reset: function () {
                    o.addClass(this.el, 'jw-off'), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent();
                }
            });
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(17), t(2), t(1), t(7), t(54)], n = function (r, o, t, e, n) {
            var a = r.extend({
                setup: function (r, a, i) {
                    this.iconUI || (this.iconUI = new e(this.el, {useHover: !0, directSelect: !0}), this.toggleValueListener = this.toggleValue.bind(this), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.select.bind(this)), this.reset(), r = t.isArray(r) ? r : [], o.toggleClass(this.el, 'jw-hidden', r.length < 2);
                    var c = r.length > 2 || 2 === r.length && i && i.toggle === !1;
                    var d = !c && 2 === r.length;
                    if (o.toggleClass(this.el, 'jw-toggle', d), o.toggleClass(this.el, 'jw-button-color', !d), this.isActive = c || d, c) {
                        o.removeClass(this.el, 'jw-off'), this.iconUI.on('tap', this.toggleOpenStateListener).on('over', this.openTooltipListener).on('out', this.closeTooltipListener);
                        var f = n(r);
                        var h = o.createElement(f);
                        this.addContent(h), this.contentUI = new e(this.content).on('click tap', this.selectListener);
                    }
                    else {
                        d && this.iconUI.on('click tap', this.toggleValueListener);
                    }
                    this.selectItem(a);
                },
                toggleValue: function () {
                    this.trigger('toggleValue');
                },
                select: function (r) {
                    if (r.target.parentElement === this.content) {
                        var e = o.classList(r.target);
                        var n = t.find(e, function (r) {
                            return 0 === r.indexOf('jw-item');
                        });
                        n && (this.trigger('select', parseInt(n.split('-')[2], 10)), this.closeTooltipListener());
                    }

                },
                selectItem: function (r) {
                    if (this.content) {
                        for (var t = 0; t < this.content.children.length; t++) {
                            o.toggleClass(this.content.children[t], 'jw-active-option', r === t);
                        }
                    }
                    else {
                        o.toggleClass(this.el, 'jw-off', 0 === r);
                    }
                },
                reset: function () {
                    o.addClass(this.el, 'jw-off'), this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent();
                }
            });
            return a;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(1), t(17), t(7), t(56)], n = function (r, o, t, e, n) {
            var a = t.extend({
                setup: function (t, n) {
                    if (this.iconUI || (this.iconUI = new e(this.el, {
                            useHover: !0
                        }), this.toggleOpenStateListener = this.toggleOpenState.bind(this), this.openTooltipListener = this.openTooltip.bind(this), this.closeTooltipListener = this.closeTooltip.bind(this), this.selectListener = this.onSelect.bind(this)), this.reset(), t = o.isArray(t) ? t : [], r.toggleClass(this.el, 'jw-hidden', t.length < 2), t.length >= 2) {
                        this.iconUI = new e(this.el, {
                            useHover: !0
                        }).on('tap', this.toggleOpenStateListener).on('over', this.openTooltipListener).on('out', this.closeTooltipListener);
                        var a = this.menuTemplate(t, n);
                        var i = r.createElement(a);
                        this.addContent(i), this.contentUI = new e(this.content), this.contentUI.on('click tap', this.selectListener);
                    }

                    this.originalList = t;
                },
                menuTemplate: function (t, e) {
                    var a = o.map(t, function (o, t) {
                        var n = o.title ? r.createElement(o.title).textContent : '';
                        return {active: t === e, label: t + 1 + '.', title: n};
                    });
                    return n(a);
                },
                onSelect: function (t) {
                    var e = t.target;
                    if ('UL' !== e.tagName) {
                        'LI' !== e.tagName && (e = e.parentElement);
                        var n = r.classList(e);
                        var a = o.find(n, function (r) {
                            return 0 === r.indexOf('jw-item');
                        });
                        a && (this.trigger('select', parseInt(a.split('-')[2], 10)), this.closeTooltip());
                    }

                },
                selectItem: function (r) {
                    this.setup(this.originalList, r);
                },
                reset: function () {
                    this.iconUI.off(), this.contentUI && this.contentUI.off().destroy(), this.removeContent();
                }
            });
            return a;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(2), t(22)], n = function (r, o, t) {
            function e(r) {
                this.begin = r.begin, this.end = r.end, this.img = r.text;
            }
            var n = {
                loadThumbnails: function (r) {
                    r && (this.vttPath = r.split('?')[0].split('/').slice(0, -1).join('/'), this.individualImage = null, o.ajax(r, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
                        plainText: !0
                    }));
                },
                thumbnailsLoaded: function (o) {
                    var n = t(o.responseText);
                    r.isArray(n) && (r.each(n, function (r) {
                        this.thumbnails.push(new e(r));
                    }, this), this.drawCues());
                },
                thumbnailsFailed: function () {},
                chooseThumbnail: function (o) {
                    var t = r.sortedIndex(this.thumbnails, {
                        end: o
                    }, r.property('end'));
                    t >= this.thumbnails.length && (t = this.thumbnails.length - 1);
                    var e = this.thumbnails[t].img;
                    return e.indexOf('://') < 0 && (e = this.vttPath ? this.vttPath + '/' + e : e), e;
                },
                loadThumbnail: function (o) {
                    var t = this.chooseThumbnail(o);
                    var e = {display: 'block', margin: '0 auto', backgroundPosition: '0 0'};
                    var n = t.indexOf('#xywh');
                    if (n > 0) {
                        try {
                            var a = /(.+)\#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(t);
                            t = a[1], e.backgroundPosition = a[2] * -1 + 'px ' + a[3] * -1 + 'px', e.width = a[4], e.height = a[5];
                        }
                        catch (i) {
                            return;
                        }
                    }
                    else {
                        this.individualImage || (this.individualImage = new Image, this.individualImage.onload = r.bind(function () {
                            this.individualImage.onload = null, this.timeTip.image({width: this.individualImage.width, height: this.individualImage.height});
                        }, this), this.individualImage.src = t);
                    }
                    return e.backgroundImage = 'url("' + t + '")', e;
                },
                showThumbnail: function (r) {
                    this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(r));
                },
                resetThumbnails: function () {
                    this.timeTip.image({backgroundImage: '', width: 0, height: 0}), this.thumbnails = [];
                }
            };
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(2), t(15), t(31), t(17), t(115), t(119)], n = function (r, o, t, e, n, a, i) {
            var c = n.extend({
                setup: function () {
                    this.text = document.createElement('span'), this.text.className = 'jw-text jw-reset', this.img = document.createElement('div'), this.img.className = 'jw-reset';
                    var r = document.createElement('div');
                    r.className = 'jw-time-tip jw-background-color jw-reset', r.appendChild(this.img), r.appendChild(this.text), o.removeClass(this.el, 'jw-hidden'), this.addContent(r);
                },
                image: function (r) {
                    o.style(this.img, r);
                },
                update: function (r) {
                    this.text.innerHTML = r;
                }
            });
            var d = e.extend({
                constructor: function (o, t) {
                    this._model = o, this._api = t, this.timeTip = new c('jw-tooltip-time'), this.timeTip.setup(), this.cues = [], this.seekThrottled = r.throttle(this.performSeek, 400), this._model.on('change:playlistItem', this.onPlaylistItem, this).on('change:position', this.onPosition, this).on('change:duration', this.onDuration, this).on('change:buffer', this.onBuffer, this), e.call(this, 'jw-slider-time', 'horizontal');
                },
                setup: function () {
                    e.prototype.setup.apply(this, arguments), this._model.get('playlistItem') && this.onPlaylistItem(this._model, this._model.get('playlistItem')), this.elementRail.appendChild(this.timeTip.element()), o.addEventListener(this.el, 'mousemove', this.showTimeTooltip.bind(this), !1), o.addEventListener(this.el, 'mouseout', this.hideTimeTooltip.bind(this), !1);
                },
                limit: function (e) {
                    if (this.activeCue && r.isNumber(this.activeCue.pct)) {
                        return this.activeCue.pct;
                    }

                    var n = this._model.get('duration');
                    var a = o.adaptiveType(n);
                    if ('DVR' === a) {
                        var i = (1 - e / 100) * n;
                        var c = this._model.get('position');
                        var d = Math.min(i, Math.max(t.dvrSeekLimit, c));
                        var f = 100 * d / n;
                        return 100 - f;
                    }

                    return e;
                },
                update: function (r) {
                    this.seekTo = r, this.seekThrottled(), e.prototype.update.apply(this, arguments);
                },
                dragStart: function () {
                    this._model.set('scrubbing', !0), e.prototype.dragStart.apply(this, arguments);
                },
                dragEnd: function () {
                    e.prototype.dragEnd.apply(this, arguments), this._model.set('scrubbing', !1);
                },
                onSeeked: function () {
                    this._model.get('scrubbing') && this.performSeek();
                },
                onBuffer: function (r, o) {
                    this.updateBuffer(o);
                },
                onPosition: function (r, o) {
                    this.updateTime(o, r.get('duration'));
                },
                onDuration: function (r, o) {
                    this.updateTime(r.get('position'), o);
                },
                updateTime: function (r, t) {
                    var e = 0;
                    if (t) {
                        var n = o.adaptiveType(t);
                        'DVR' === n ? e = (t - r) / t * 100 : 'VOD' === n && (e = r / t * 100);
                    }

                    this.render(e);
                },
                onPlaylistItem: function (o, t) {
                    this.reset(), o.mediaModel.on('seeked', this.onSeeked, this);
                    var e = t.tracks;
                    r.each(e, function (r) {
                        r && r.kind && 'thumbnails' === r.kind.toLowerCase() ? this.loadThumbnails(r.file) : r && r.kind && 'chapters' === r.kind.toLowerCase() && this.loadChapters(r.file);
                    }, this);
                },
                performSeek: function () {
                    var r;
                    var t = this.seekTo;
                    var e = this._model.get('duration');
                    var n = o.adaptiveType(e);
                    0 === e ? this._api.play() : 'DVR' === n ? (r = (100 - t) / 100 * e, this._api.seek(r)) : (r = t / 100 * e, this._api.seek(Math.min(r, e - .25)));
                },
                showTimeTooltip: function (r) {
                    var e = this._model.get('duration');
                    if (0 !== e) {
                        var n = o.bounds(this.elementRail);
                        var a = r.pageX ? r.pageX - n.left : r.x;
                        a = o.between(a, 0, n.width);
                        var i = a / n.width;
                        var c = e * i;
                        e < 0 && (c = e - c);
                        var d;
                        if (this.activeCue) {
                            d = this.activeCue.text;
                        }
                        else {
                            var f = !0;
                            d = o.timeFormat(c, f), e < 0 && c > t.dvrSeekLimit && (d = 'Live');
                        }
                        this.timeTip.update(d), this.showThumbnail(c), o.addClass(this.timeTip.el, 'jw-open'), this.timeTip.el.style.left = 100 * i + '%';
                    }

                },
                hideTimeTooltip: function () {
                    o.removeClass(this.timeTip.el, 'jw-open');
                },
                reset: function () {
                    this.resetChapters(), this.resetThumbnails();
                }
            });
            return r.extend(d.prototype, a, i), d;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(17), t(31), t(7), t(2)], n = function (r, o, t, e) {
            var n = r.extend({
                constructor: function (n, a) {
                    this._model = n, r.call(this, a), this.volumeSlider = new o('jw-slider-volume jw-volume-tip', 'vertical'), this.addContent(this.volumeSlider.element()), this.addVolumeValueTip(), this.volumeSlider.on('update', function (r) {
                        this.trigger('update', r);
                    }, this), e.removeClass(this.el, 'jw-hidden'), new t(this.el, {useHover: !0, directSelect: !0}).on('click', this.toggleValue, this).on('tap', this.toggleOpenState, this).on('over', this.openTooltip, this).on('out', this.closeTooltip, this);
                },
                toggleValue: function () {
                    this.trigger('toggleValue');
                },
                addVolumeValueTip: function () {
                    var r = document.createElement('div');
                    r.className = 'jw-volume-value-tip', e.getElementsByClassName('jw-overlay', this.el)[0].appendChild(r), this.valuetip = r;
                }
            });
            return n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(1), t(3), t(15), t(7), t(31), t(120), t(117), t(118), t(121), t(116)], n = function (r, o, t, e, n, a, i, c, d, f, h) {
            function w(r, o) {
                var t = document.createElement('div');
                return t.className = 'jw-icon jw-icon-inline jw-button-color jw-reset ' + r, t.style.display = 'none', o && new n(t).on('click tap', function () {
                        o();
                    }), {
                        element: function () {
                            return t;
                        },
                        toggle: function (r) {
                            r ? this.show() : this.hide();
                        },
                        show: function () {
                            t.style.display = '';
                        },
                        hide: function () {
                            t.style.display = 'none';
                        }
                    };
            }
            function p(r) {
                var o = document.createElement('span');
                return o.className = 'jw-text jw-reset ' + r, o;
            }
            function s(r) {
                var o = new c(r);
                return o;
            }
            function b(r, t) {
                var e = document.createElement('div');
                return e.className = 'jw-group jw-controlbar-' + r + '-group jw-reset', o.each(t, function (r) {
                        r.element && (r = r.element()), e.appendChild(r);
                    }), e;
            }
            function g(o, t) {
                this._api = o, this._model = t, this._isMobile = r.isMobile(), this._compactModeMaxSize = 400, this._maxCompactWidth = -1, this.setup();
            }
            return o.extend(g.prototype, t, {
                    setup: function () {
                        this.build(), this.initialize();
                    },
                    build: function () {
                        var r;
                        var t;
                        var e;
                        var n;
                        var c = new i(this._model, this._api);
                        var g = new h('jw-icon-more');
                        this._model.get('visualplaylist') !== !1 && (r = new d('jw-icon-playlist')), this._isMobile || (n = w('jw-icon-volume', this._api.setMute), t = new a('jw-slider-volume', 'horizontal'), e = new f(this._model, 'jw-icon-volume')), this.elements = {
                            alt: p('jw-text-alt'),
                            barLogo: w('jw-icon-barlogo', function () {
                                window.open('http://bce.baidu.com/solution/video.html');
                            }),
                            play: w('jw-icon-playback', this._api.play.bind(this, {
                                reason: 'interaction'
                            })),
                            prev: w('jw-icon-prev', this._api.playlistPrev.bind(this, {
                                reason: 'interaction'
                            })),
                            next: w('jw-icon-next', this._api.playlistNext.bind(this, {
                                reason: 'interaction'
                            })),
                            playlist: r,
                            elapsed: p('jw-text-elapsed'),
                            time: c,
                            duration: p('jw-text-duration'),
                            drawer: g,
                            hd: s('jw-icon-hd'),
                            cc: s('jw-icon-cc'),
                            audiotracks: s('jw-icon-audio-tracks'),
                            mute: n,
                            volume: t,
                            volumetooltip: e,
                            cast: w('jw-icon-cast jw-off', this._api.castToggle),
                            fullscreen: w('jw-icon-fullscreen', this._api.setFullscreen)
                        }, this.layout = {left: [this.elements.barLogo, this.elements.play, this.elements.prev, this.elements.playlist, this.elements.next, this.elements.elapsed], center: [this.elements.time, this.elements.alt], right: [this.elements.duration, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.drawer, this.elements.mute, this.elements.cast, this.elements.volume, this.elements.volumetooltip, this.elements.fullscreen], drawer: [this.elements.hd, this.elements.cc, this.elements.audiotracks]}, this.menus = o.compact([this.elements.playlist, this.elements.hd, this.elements.cc, this.elements.audiotracks, this.elements.volumetooltip]), this.layout.left = o.compact(this.layout.left), this.layout.center = o.compact(this.layout.center), this.layout.right = o.compact(this.layout.right), this.layout.drawer = o.compact(this.layout.drawer), this.el = document.createElement('div'), this.el.className = 'jw-controlbar jw-background-color jw-reset', this.elements.left = b('left', this.layout.left), this.elements.center = b('center', this.layout.center), this.elements.right = b('right', this.layout.right), this.el.appendChild(this.elements.left), this.el.appendChild(this.elements.center), this.el.appendChild(this.elements.right);
                    },
                    initialize: function () {
                        this._model.get('controlbar').barLogo && this.elements.barLogo.show(), this.elements.play.show(), this.elements.fullscreen.show(), this.elements.mute && this.elements.mute.show(), this.onVolume(this._model, this._model.get('volume')), this.onPlaylist(this._model, this._model.get('playlist')), this.onPlaylistItem(this._model, this._model.get('playlistItem')), this.onMediaModel(this._model, this._model.get('mediaModel')), this.onCastAvailable(this._model, this._model.get('castAvailable')), this.onCastActive(this._model, this._model.get('castActive')), this.onCaptionsList(this._model, this._model.get('captionsList')), this._model.on('change:volume', this.onVolume, this), this._model.on('change:mute', this.onMute, this), this._model.on('change:playlist', this.onPlaylist, this), this._model.on('change:playlistItem', this.onPlaylistItem, this), this._model.on('change:mediaModel', this.onMediaModel, this), this._model.on('change:castAvailable', this.onCastAvailable, this), this._model.on('change:castActive', this.onCastActive, this), this._model.on('change:duration', this.onDuration, this), this._model.on('change:position', this.onElapsed, this), this._model.on('change:fullscreen', this.onFullscreen, this), this._model.on('change:captionsList', this.onCaptionsList, this), this._model.on('change:captionsIndex', this.onCaptionsIndex, this), this._model.on('change:compactUI', this.onCompactUI, this), this.elements.volume && this.elements.volume.on('update', function (r) {
                            var o = r.percentage;
                            this._api.setVolume(o);
                        }, this), this.elements.volumetooltip && (this.elements.volumetooltip.on('update', function (r) {
                            var o = r.percentage;
                            this._api.setVolume(o);
                        }, this), this.elements.volumetooltip.on('toggleValue', function () {
                            this._api.setMute();
                        }, this)), this.elements.playlist && this.elements.playlist.on('select', function (r) {
                            this._model.once('itemReady', function () {
                                this._api.play({
                                    reason: 'interaction'
                                });
                            }, this), this._api.load(r);
                        }, this), this.elements.hd.on('select', function (r) {
                            this._model.setCurrentQuality(r);
                        }, this), this.elements.hd.on('toggleValue', function () {
                            this._model.getVideo().setCurrentQuality(0 === this._model.getVideo().getCurrentQuality() ? 1 : 0);
                        }, this), this.elements.cc.on('select', function (r) {
                            this._api.setCurrentCaptions(r);
                        }, this), this.elements.cc.on('toggleValue', function () {
                            var r = this._model.get('captionsIndex');
                            this._api.setCurrentCaptions(r ? 0 : 1);
                        }, this), this.elements.audiotracks.on('select', function (r) {
                            this._model.getVideo().setCurrentAudioTrack(r);
                        }, this), new n(this.elements.duration).on('click tap', function () {
                            if ('DVR' === r.adaptiveType(this._model.get('duration'))) {
                                var o = this._model.get('position');
                                this._api.seek(Math.max(e.dvrSeekLimit, o));
                            }

                        }, this), new n(this.el).on('click tap drag', function () {
                            this.trigger('userAction');
                        }, this), this.elements.drawer.on('open-drawer close-drawer', function (o, t) {
                            r.toggleClass(this.el, 'jw-drawer-expanded', t.isOpen), t.isOpen || this.closeMenus();
                        }, this), o.each(this.menus, function (r) {
                            r.on('open-tooltip', this.closeMenus, this);
                        }, this);
                    },
                    onCaptionsList: function (r, o) {
                        var t = r.get('captionsIndex');
                        this.elements.cc.setup(o, t), this.clearCompactMode();
                    },
                    onCaptionsIndex: function (r, o) {
                        this.elements.cc.selectItem(o);
                    },
                    onPlaylist: function (r, o) {
                        var t = o.length > 1;
                        this.elements.next.toggle(t), this.elements.prev.toggle(t), this.elements.playlist && this.elements.playlist.setup(o, r.get('item'));
                    },
                    onPlaylistItem: function (r) {
                        this.elements.time.updateBuffer(0), this.elements.time.render(0), this.elements.duration.innerHTML = '00:00', this.elements.elapsed.innerHTML = '00:00', this.clearCompactMode();
                        var o = r.get('item');
                        this.elements.playlist && this.elements.playlist.selectItem(o), this.elements.audiotracks.setup();
                    },
                    onMediaModel: function (t, e) {
                        e.on('change:levels', function (r, o) {
                            this.elements.hd.setup(o, r.get('currentLevel'), {
                                toggle: !1
                            }), this.clearCompactMode();
                        }, this), e.on('change:currentLevel', function (r, o) {
                            this.elements.hd.selectItem(o);
                        }, this), e.on('change:audioTracks', function (r, t) {
                            var e = o.map(t, function (r) {
                                return {
                                    label: r.name
                                };
                            });
                            this.elements.audiotracks.setup(e, r.get('currentAudioTrack'), {
                                toggle: !1
                            }), this.clearCompactMode();
                        }, this), e.on('change:currentAudioTrack', function (r, o) {
                            this.elements.audiotracks.selectItem(o);
                        }, this), e.on('change:state', function (o, t) {
                            'complete' === t && (this.elements.drawer.closeTooltip(), r.removeClass(this.el, 'jw-drawer-expanded'));
                        }, this);
                    },
                    onVolume: function (r, o, t) {
                        this.renderVolume(r.get('mute'), o, t);
                    },
                    onMute: function (r, o) {
                        this.renderVolume(o, r.get('volume'));
                    },
                    renderVolume: function (o, t, e) {
                        var n;
                        e || (e = t), this.elements.mute && r.toggleClass(this.elements.mute.element(), 'jw-off', o), this.elements.volume && this.elements.volume.render(o ? 0 : t), this.elements.volumetooltip && (this.elements.volumetooltip.volumeSlider.render(o ? 0 : t), r.toggleClass(this.elements.volumetooltip.element(), 'jw-off', o)), this.elements.volumetooltip && this.elements.volumetooltip.valuetip && (n = this.elements.volumetooltip.valuetip, o ? n.innerHTML = '0%' : 100 === t && t > e && this._model.get('provider') && /^flash/.test(this._model.get('provider').name) ? n.innerHTML = '100%(按↑可以继续增大音量)' : n.innerHTML = t + '%');
                    },
                    onCastAvailable: function (r, o) {
                        this.elements.cast.toggle(o), this.clearCompactMode();
                    },
                    onCastActive: function (o, t) {
                        r.toggleClass(this.elements.cast.element(), 'jw-off', !t);
                    },
                    onElapsed: function (o, t) {
                        var e;
                        var n = o.get('duration');
                        e = 'DVR' === r.adaptiveType(n) ? '-' + r.timeFormat(-n) : r.timeFormat(t), this.elements.elapsed.innerHTML = e;
                    },
                    onDuration: function (o, t) {
                        var e;
                        'DVR' === r.adaptiveType(t) ? (e = 'Live', this.clearCompactMode()) : e = r.timeFormat(t), this.elements.duration.innerHTML = e;
                    },
                    onFullscreen: function (o, t) {
                        r.toggleClass(this.elements.fullscreen.element(), 'jw-off', t);
                    },
                    element: function () {
                        return this.el;
                    },
                    getVisibleBounds: function () {
                        var o;
                        var t = this.el;
                        var e = getComputedStyle ? getComputedStyle(t) : t.currentStyle;
                        return 'table' === e.display ? r.bounds(t) : (t.style.visibility = 'hidden', t.style.display = 'table', o = r.bounds(t), t.style.visibility = t.style.display = '', o);
                    },
                    setAltText: function (r) {
                        this.elements.alt.innerHTML = r;
                    },
                    addCues: function (r) {
                        this.elements.time && (o.each(r, function (r) {
                            this.elements.time.addCue(r);
                        }, this), this.elements.time.drawCues());
                    },
                    closeMenus: function (r) {
                        o.each(this.menus, function (o) {
                            r && r.target === o.el || o.closeTooltip(r);
                        });
                    },
                    hideComponents: function () {
                        this.closeMenus(), this.elements.drawer.closeTooltip(), r.removeClass(this.el, 'jw-drawer-expanded');
                    },
                    clearCompactMode: function () {
                        this._maxCompactWidth = -1, this._model.set('compactUI', !1), this._containerWidth && this.checkCompactMode(this._containerWidth);
                    },
                    setCompactModeBounds: function () {
                        if (this.element().offsetWidth > 0) {
                            var o = this.elements.left.offsetWidth + this.elements.right.offsetWidth;
                            if ('LIVE' === r.adaptiveType(this._model.get('duration'))) {
                                this._maxCompactWidth = o + this.elements.alt.offsetWidth;
                            }
                            else {
                                var t = o + (this.elements.center.offsetWidth - this.elements.time.el.offsetWidth);
                                var e = .2;
                                this._maxCompactWidth = t / (1 - e);
                            }
                        }

                    },
                    checkCompactMode: function (r) {
                        this.setCompactModeBounds(), this._containerWidth = r, this._maxCompactWidth !== -1 && (r >= this._compactModeMaxSize && r > this._maxCompactWidth ? this._model.set('compactUI', !1) : (r < this._compactModeMaxSize || r <= this._maxCompactWidth) && this._model.set('compactUI', !0));
                    },
                    onCompactUI: function (t, e) {
                        r.removeClass(this.el, 'jw-drawer-expanded'), this.elements.drawer.setup(this.layout.drawer, e), (!e || this.elements.drawer.activeContents.length < 2) && o.each(this.layout.drawer, function (r) {
                            this.elements.right.insertBefore(r.el, this.elements.drawer.el);
                        }, this);
                    }
                }), g;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(3), t(7), t(50), t(1)], n = function (r, o, t, e, n) {
            var a = function (a) {
                n.extend(this, o), this.model = a, this.el = r.createElement(e({}));
                var i = this;
                this.iconUI = new t(this.el).on('click tap', function (r) {
                    i.trigger(r.type);
                });
            };
            return n.extend(a.prototype, {
                    element: function () {
                        return this.el;
                    }
                }), a;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(51), t(2), t(1), t(7)], n = function (r, o, t, e) {
            var n = function (r) {
                this.model = r, this.setup(), this.model.on('change:dock', this.render, this);
            };
            return t.extend(n.prototype, {
                    setup: function () {
                        var t = this.model.get('dock');
                        var n = this.click.bind(this);
                        var a = r(t);
                        this.el = o.createElement(a), new e(this.el).on('click tap', n);
                    },
                    getDockButton: function (r) {
                        return o.hasClass(r.target, 'jw-dock-button') ? r.target : o.hasClass(r.target, 'jw-dock-text') ? r.target.parentElement.parentElement : r.target.parentElement;
                    },
                    click: function (r) {
                        var o = this.getDockButton(r);
                        var e = o.getAttribute('button');
                        var n = this.model.get('dock');
                        var a = t.findWhere(n, {
                            id: e
                        });
                        a && a.callback && a.callback(r);
                    },
                    render: function () {
                        var t = this.model.get('dock');
                        var e = r(t);
                        var n = o.createElement(e);
                        this.el.innerHTML = n.innerHTML;
                    },
                    element: function () {
                        return this.el;
                    }
                }), n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(52)], n = function (r) {
            function o(o, t, e, n) {
                return r({id: o, skin: t, title: e, body: n});
            }
            return o;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(7), t(2), t(4), t(1), t(3), t(53)], n = function (r, o, t, e, n, a) {
            var i = o.style;
            var c = {linktarget: '_blank', margin: 8, hide: !1, position: 'top-right'};
            var d = function (d) {
                var f;
                var h;
                var w = new Image;
                var p = e.extend({}, d.get('logo'));
                return e.extend(this, n), this.setup = function (n) {
                        if (h = e.extend({}, c, p), h.hide = 'true' === h.hide.toString(), f = o.createElement(a()), h.file) {
                            h.hide && o.addClass(f, 'jw-hide'), o.addClass(f, 'jw-logo-' + (h.position || c.position)), 'top-right' === h.position && (d.on('change:dock', this.topRight, this), d.on('change:controls', this.topRight, this), this.topRight(d)), d.set('logo', h), w.onload = function () {
                                var r = {backgroundImage: 'url("' + this.src + '")', width: this.width, height: this.height};
                                if (h.margin !== c.margin) {
                                    var o = /(\w+)-(\w+)/.exec(h.position);
                                    3 === o.length && (r['margin-' + o[1]] = h.margin, r['margin-' + o[2]] = h.margin);
                                }

                                i(f, r), d.set('logoWidth', r.width);
                            }, w.src = h.file;
                            var s = new r(f);
                            s.on('click tap', function (r) {
                                o.exists(r) && r.stopPropagation && r.stopPropagation(), this.trigger(t.JWPLAYER_LOGO_CLICK, {link: h.link, linktarget: h.linktarget});
                            }, this), n.appendChild(f);
                        }

                    }, this.topRight = function (r) {
                        var o = r.get('controls');
                        var t = r.get('dock');
                        var e = o && (t && t.length || r.get('sharing') || r.get('related'));
                        i(f, {
                            top: e ? '3.5em' : 0
                        });
                    }, this.element = function () {
                        return f;
                    }, this.position = function () {
                        return h.position;
                    }, this.destroy = function () {
                        w.onload = null;
                    }, this;
            };
            return d;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(1), t(16)], n = function (r, o, t) {
            function e(r) {
                return r > 100 ? 30 + Math.random() * (r - 100) : r / 2;
            }
            function n(r, o) {
                t.style(r, {
                    top: e(o)
                });
            }
            var a = function (r, o) {
                this.model = r, this.element = o, this.times = 0, this.init();
            };
            return o.extend(a.prototype, {
                    init: function () {
                        if (r.isMSIE(9)) {
                            return t.style(this.element, {
                                    display: 'none'
                                }), !1;
                        }

                        var o = this.model.get('marquee').text;
                        var e = this.model.get('marquee').color;
                        var n = this.model.get('marquee').fontSize;
                        o && (this.element.innerHTML = o), e && t.style(this.element, {
                            color: e
                        }), n && t.style(this.element, {fontSize: n, lineHeight: n + 8}), this.reset();
                    },
                    start: function () {
                        return !r.isMSIE(9) && void t.style(this.element, {animationPlayState: 'running', opacity: 1, display: 'block'});
                    },
                    stop: function () {
                        this.reset(), t.style(this.element, {animationPlayState: 'paused', opacity: 0, display: 'none'});
                    },
                    pause: function () {
                        t.style(this.element, {animationPlayState: 'paused', opacity: 0});
                    },
                    reset: function (o, e) {
                        o = o || this.model.get('width'), e = e || this.model.get('height');
                        var a = 18;
                        var i = this.element;
                        var c = this.times % 2 === 0 ? 'marquee1' : 'marquee2';
                        t.animation(i, c + ' ' + a + 's infinite'), n(i, e), r.addEventListener(i, 'webkitAnimationIteration', function () {
                            n(i, e);
                        }, !1), r.addEventListener(i, 'animationiteration', function () {
                            n(i, e);
                        }, !1), this.times++;
                    }
                }), a;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(2)], n = function (r, o) {
            function t(r, o) {
                o.off('change:mediaType', null, this), o.on('change:mediaType', function (o, t) {
                    'audio' === t && this.setImage(r.get('playlistItem').image);
                }, this);
            }
            function e(r, t) {
                var e = r.get('autostart') && !o.isMobile() || r.get('item') > 0;
                return e ? (this.setImage(null), r.off('change:state', null, this), void r.on('change:state', function (r, o) {
                    'complete' !== o && 'idle' !== o && 'error' !== o || this.setImage(t.image);
                }, this)) : void this.setImage(t.image);
            }
            var n = function (r) {
                this.model = r, r.on('change:playlistItem', e, this), r.on('change:mediaModel', t, this);
            };
            return r.extend(n.prototype, {
                    setup: function (r) {
                        this.el = r;
                        var o = this.model.get('playlistItem');
                        o && this.setImage(o.image);
                    },
                    setImage: function (t) {
                        var e = this.image;
                        e && (e.onload = null, this.image = null), this.model.off('change:state', null, this);
                        var n = '';
                        r.isString(t) && (n = 'url("' + t + '")', e = this.image = new Image, e.src = t), o.style(this.el, {
                            backgroundImage: n
                        });
                    },
                    resize: function (r, t, e) {
                        if ('uniform' === e) {
                            var n = r / t;
                            var a = this.image;
                            var i = null;
                            if (a) {
                                if (0 === a.width) {
                                    var c = this;
                                    return void (a.onload = function () {
                                        c.resize(r, t, e);
                                    });
                                }

                                var d = a.width / a.height;
                                Math.abs(n - d) < .09 && (i = 'cover');
                            }

                            o.style(this.el, {
                                backgroundSize: i
                            });
                        }

                    },
                    element: function () {
                        return this.el;
                    }
                }), n;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(57), t(1), t(7), t(19)], n = function (r, o, t, e, n) {
            var a = function () {};
            return t.extend(a.prototype, {
                    buildArray: function () {
                        var o = n.split('+');
                        var t = o[0];
                        var e = {
                            items: [{title: 'About Cyber Player ' + t, featured: !0, showLogo: !1, link: 'https://bce.baidu.com/doc/MCT/Web-SDK.html#.E6.92.AD.E6.94.BE.E5.99.A8.20Web.20SDK.20.E7.AE.80.E4.BB.8B'}]
                        };
                        var a = this.model.get('provider');
                        if (a && a.name.indexOf('flash') >= 0) {
                            var i = 'Flash Version ' + r.flashVersion();
                            e.items.push({title: i, link: 'http://www.adobe.com/software/flash/about/'});
                        }

                        return e;
                    },
                    buildMenu: function () {
                        var t = this.buildArray();
                        return r.createElement(o(t));
                    },
                    updateHtml: function () {
                        this.el.innerHTML = this.buildMenu().innerHTML;
                    },
                    rightClick: function (r) {
                        return this.lazySetup(), !this.mouseOverContext && (this.hideMenu(), this.showMenu(r), !1);
                    },
                    getOffset: function (o) {
                        var t = o.target;
                        var e = o.layerX || o.offsetX;
                        var n = o.layerY || o.offsetY;
                        if (r.isIE() && (r.hasClass(t, 'jw-video') || r.hasClass(t, 'jw-warning'))) {
                            return {x: e, y: n + 40};
                        }

                        for (; t !== this.playerElement;) {
                            e += t.offsetLeft, n += t.offsetTop, t = t.parentNode;

                        }
                        return e = e <= this.playerElement.clientWidth ? e : this.playerElement.clientWidth, n = n <= this.playerElement.clientHeight ? n : this.playerElement.clientHeight, {x: e, y: n};
                    },
                    showMenu: function (o) {
                        var t = this.getOffset(o);
                        return this.el.style.left = t.x + 'px', this.el.style.top = t.y + 'px', r.addClass(this.playerElement, 'jw-flag-rightclick-open'), r.addClass(this.el, 'jw-open'), !1;
                    },
                    hideMenu: function () {
                        this.mouseOverContext || (r.removeClass(this.playerElement, 'jw-flag-rightclick-open'), r.removeClass(this.el, 'jw-open'));
                    },
                    lazySetup: function () {
                        this.el || (this.el = this.buildMenu(), this.layer.appendChild(this.el), this.hideMenuHandler = this.hideMenu.bind(this), this.addOffListener(this.playerElement), this.addOffListener(document), this.model.on('change:provider', this.updateHtml, this), this.elementUI = new e(this.el, {
                            useHover: !0
                        }).on('over', function () {
                            this.mouseOverContext = !0;
                        }, this).on('out', function () {
                            this.mouseOverContext = !1;
                        }, this));
                    },
                    setup: function (o, t, e) {
                        this.playerElement = t, this.model = o, this.mouseOverContext = !1, this.layer = e, r.isPoorIE() || (t.oncontextmenu = this.rightClick.bind(this));
                    },
                    addOffListener: function (o) {
                        r.addEventListener(o, 'mousedown', this.hideMenuHandler), r.addEventListener(o, 'touchstart', this.hideMenuHandler), r.addEventListener(o, 'pointerdown', this.hideMenuHandler);
                    },
                    removeOffListener: function (o) {
                        r.removeEventListener(o, 'mousedown', this.hideMenuHandler), r.removeEventListener(o, 'touchstart', this.hideMenuHandler), r.removeEventListener(o, 'pointerdown', this.hideMenuHandler);
                    },
                    destroy: function () {
                        this.el && (this.hideMenu(), this.elementUI.off(), this.removeOffListener(this.playerElement), this.removeOffListener(document), this.hideMenuHandler = null, this.el = null), this.playerElement && (this.playerElement.oncontextmenu = null, this.playerElement = null), this.model && (this.model.off('change:provider', this.updateHtml), this.model = null);
                    }
                }), a;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(1), t(2)], n = function (r, o) {
            var t = function (r) {
                this.model = r, this.model.on('change:playlistItem', this.playlistItem, this);
            };
            return r.extend(t.prototype, {
                    hide: function () {
                        this.el.style.display = 'none';
                    },
                    show: function () {
                        this.el.style.display = '';
                    },
                    setup: function (r) {
                        this.el = r;
                        var o = this.el.getElementsByTagName('div');
                        this.title = o[0], this.description = o[1], this.model.get('playlistItem') && this.playlistItem(this.model, this.model.get('playlistItem')), this.model.on('change:logoWidth', this.update, this), this.model.on('change:dock', this.update, this);
                    },
                    update: function (r) {
                        var t = {paddingLeft: 0, paddingRight: 0};
                        var e = r.get('controls');
                        var n = r.get('dock');
                        var a = r.get('logo');
                        if (a) {
                            var i = 1 * ('' + a.margin).replace('px', '');
                            var c = r.get('logoWidth') + (isNaN(i) ? 0 : i);
                            'top-left' === a.position ? t.paddingLeft = c : 'top-right' === a.position && (t.paddingRight = c);
                        }

                        if (e && n && n.length) {
                            var d = 56 * n.length;
                            t.paddingRight = Math.max(t.paddingRight, d);
                        }

                        o.style(this.el, t);
                    },
                    playlistItem: function (r, o) {
                        if (r.get('displaytitle') || r.get('displaydescription')) {
                            var t = '';
                            var e = '';
                            o.title && r.get('displaytitle') && (t = o.title), o.description && r.get('displaydescription') && (e = o.description), this.updateText(t, e);
                        }
                        else {
                            this.hide();
                        }
                    },
                    updateText: function (r, o) {
                        this.title.innerHTML = r, this.description.innerHTML = o, this.title.firstChild || this.description.firstChild ? this.show() : this.hide();
                    },
                    element: function () {
                        return this.el;
                    }
                }), t;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }, function (r, o, t) {
        var e;
        var n;
        e = [t(2), t(4), t(3), t(15), t(6), t(113), t(114), t(123), t(124), t(126), t(122), t(128), t(112), t(127), t(129), t(130), t(1), t(55)], n = function (r, o, t, e, n, a, i, c, d, f, h, w, p, s, b, g, l, u) {
            var v = r.style;
            var y = r.bounds;
            var A = r.isMobile();
            var C = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'];
            var m = function (m, S) {
                function x(o) {
                    var t = 0;
                    var n = S.get('duration');
                    var a = S.get('position');
                    'DVR' === r.adaptiveType(n) && (t = n, n = Math.max(a, e.dvrSeekLimit));var i = r.between(a + o, t, n);
                    m.seek(i);
                }
                function E(o) {
                    var t;
                    var e = S.get('volume');
                    '-' === o ? t = e > 100 ? -50 : -10 : (t = e >= 100 ? 50 : 10, e < 100 && e + t > 100 && (t = 100 - e));var n = r.between(S.get('volume') + t, 0, 500);
                    m.setVolume(n);
                }
                function T(r) {
                    return !r.ctrlKey && !r.metaKey && !!S.get('controls');
                }
                function k(r) {
                    if (!T(r)) {
                        return !0;
                    }

                    switch (Dr || tr(), r.keyCode) {
                        case 27:
                            m.setFullscreen(!1);
                            break;case 13:
                        case 32:
                            m.play({
                                reason: 'interaction'
                            });
                            break;case 37:
                            Dr || x(-5);
                            break;case 39:
                            Dr || x(5);
                            break;case 38:
                            E(10);
                            break;case 40:
                            E(-10);
                            break;case 67:
                            var o = m.getCaptionsList();
                            var t = o.length;
                            if (t) {
                                var e = (m.getCurrentCaptions() + 1) % t;
                                m.setCurrentCaptions(e);
                            }

                            break;case 77:
                            m.setMute();
                            break;case 70:
                            m.setFullscreen();
                            break;default:
                            if (r.keyCode >= 48 && r.keyCode <= 59) {
                                var n = r.keyCode - 48;
                                var a = n / 10 * S.get('duration');
                                m.seek(a);
                            }

                    }
                    return /13|32|37|38|39|40/.test(r.keyCode) ? (r.preventDefault(), !1) : void 0;
                }
                function I() {
                    Mr = !1, r.removeClass(wr, 'jw-no-focus');
                }
                function J() {
                    Mr = !0, r.addClass(wr, 'jw-no-focus');
                }
                function L() {
                    Mr || I(), Dr || tr();
                }
                function O() {
                    var t = y(wr);
                    var e = Math.round(t.width);
                    var n = Math.round(t.height);
                    return document.body.contains(wr) ? e && n && (e === br && n === gr || (br = e, gr = n, clearTimeout(Gr), Gr = setTimeout(Z, 50), S.set('containerWidth', e), S.set('containerHeight', n), Nr.trigger(o.JWPLAYER_RESIZE, {width: e, height: n}))) : (r.removeEventListener(window, 'resize', O), A && r.removeEventListener(window, 'orientationchange', O)), t;
                }
                function j(o, t) {
                    t = t || !1, r.toggleClass(wr, 'jw-flag-casting', t);
                }
                function q(o, t) {
                    r.toggleClass(wr, 'jw-flag-cast-available', t), r.toggleClass(pr, 'jw-flag-cast-available', t);
                }
                function z(o, t) {
                    r.replaceClass(wr, /jw-stretch-\S+/, 'jw-stretch-' + t);
                }
                function B(o, t) {
                    r.toggleClass(wr, 'jw-flag-compact-player', t);
                }
                function D(o) {
                    o && !A && (r.addEventListener(o.element(), 'mousemove', H, !1),
                    r.addEventListener(o.element(), 'mouseout', K, !1));
                }
                function F() {
                    S.get('state') !== n.IDLE && S.get('state') !== n.COMPLETE && S.get('state') !== n.PAUSED || !S.get('controls') || m.play({
                        reason: 'interaction'
                    }), Fr ? or() : tr();
                }
                function G(r) {
                    r.link ? (m.pause(!0), m.setFullscreen(!1), window.open(r.link, r.linktarget)) : S.get('controls') && m.play({
                        reason: 'interaction'
                    });
                }
                function H() {
                    clearTimeout(qr);
                }
                function K() {
                    tr();
                }
                function M(r) {
                    Nr.trigger(r.type, r);
                }
                function N(o, t) {
                    t ? (Ir && Ir.destroy(), r.addClass(wr, 'jw-flag-flash-blocked')) : (Ir && Ir.setup(S, wr, wr), r.removeClass(wr, 'jw-flag-flash-blocked'));
                }
                function P() {
                    S.get('controls') && m.setFullscreen();
                }
                function Q() {
                    var t = r.getElementsByClassName('jw-overlays', wr)[0];
                    r.addEventListener(t, 'mousemove', tr), Cr = new i(S, sr, {
                        useHover: !0
                    }), Cr.on('click', function () {
                        M({
                            type: o.JWPLAYER_DISPLAY_CLICK
                        }), S.get('controls') && m.play({
                            reason: 'interaction'
                        });
                    }), Cr.on('tap', function () {
                        M({
                            type: o.JWPLAYER_DISPLAY_CLICK
                        }), F();
                    }), Cr.on('doubleClick', P), Cr.on('move', tr), Cr.on('over', tr);var e = new c(S);
                    e.on('click', function () {
                        M({
                            type: o.JWPLAYER_DISPLAY_CLICK
                        }), m.play({
                            reason: 'interaction'
                        });
                    }), e.on('tap', function () {
                        M({
                            type: o.JWPLAYER_DISPLAY_CLICK
                        }), F();
                    }), r.isChrome() && e.el.addEventListener('mousedown', function () {
                        var r = S.getVideo();
                        var o = r && 0 === r.getName().name.indexOf('flash');
                        if (o) {
                            var t = function () {
                                document.removeEventListener('mouseup', t), e.el.style.pointerEvents = 'auto';
                            };
                            this.style.pointerEvents = 'none', document.addEventListener('mouseup', t);
                        }

                    }), pr.appendChild(e.element()), Sr = new d(S), xr = new f(S), xr.on(o.JWPLAYER_LOGO_CLICK, G);var n = document.createElement('div');
                    n.className = 'jw-controls-right jw-reset', xr.setup(n), n.appendChild(Sr.element()), pr.appendChild(n), Tr = new a(S), Tr.setup(wr.id, S.get('captions')), pr.parentNode.insertBefore(Tr.element(), Er.element());var w = S.get('height');
                    A && ('string' == typeof w || w >= 1.5 * Br) ? r.addClass(wr, 'jw-flag-touch') : (Ir = new b, Ir.setup(S, wr, wr)), ur = new h(m, S), ur.on(o.JWPLAYER_USER_ACTION, tr), S.on('change:scrubbing', U), S.on('change:compactUI', B), pr.appendChild(ur.element()), r.addEventListener(wr, 'focus', L), r.addEventListener(wr, 'blur', I), r.addEventListener(wr, 'keydown', k), wr.onmousedown = J;
                }
                function R(o) {
                    return o.get('state') === n.PAUSED ? void o.once('change:state', R) : void (o.get('scrubbing') === !1 && r.removeClass(wr, 'jw-flag-dragging'));
                }
                function U(o, t) {
                    o.off('change:state', R), t ? r.addClass(wr, 'jw-flag-dragging') : R(o);
                }
                function V(o, t, e) {
                    var n;
                    var a = wr.className;
                    e = !!e, e && (a = a.replace(/\s*aspectMode/, ''), wr.className !== a && (wr.className = a), r.style(wr, {
                        display: 'block'
                    }, e)), r.exists(o) && r.exists(t) && (S.set('width', o), S.set('height', t)), n = {
                        width: o
                    }, r.hasClass(wr, 'jw-flag-aspect-mode') || (n.height = t), v(wr, n, !0), W(t), Z(o, t);
                }
                function W(o) {
                    if (kr = X(o), ur && !kr) {
                        var t = Dr ? lr : S;
                        hr(t, t.get('state'));
                    }

                    r.toggleClass(wr, 'jw-flag-audio-player', kr);
                }
                function X(r) {
                    if (S.get('aspectratio')) {
                        return !1;
                    }

                    if (l.isString(r) && r.indexOf('%') > -1) {
                        return !1;
                    }

                    var o = l.isNumber(r) ? r : S.get('containerHeight');
                    return Y(o);
                }
                function Y(r) {
                    return r && r <= Br * (A ? 1.75 : 1);
                }
                function Z(o, t) {
                    if (!o || isNaN(Number(o))) {
                        if (!sr) {
                            return;
                        }

                        o = sr.clientWidth;
                    }

                    if (!t || isNaN(Number(t))) {
                        if (!sr) {
                            return;
                        }

                        t = sr.clientHeight;
                    }

                    vr && vr.resize(o, t, S.get('stretching')), r.isMSIE(9) && document.all && !window.atob && (o = t = '100%');var e = S.getVideo();
                    if (e) {
                        var a = e.resize(o, t, S.get('stretching'));
                        a && (clearTimeout(Gr), Gr = setTimeout(Z, 250)), Tr.resize(), ur.checkCompactMode(o), S.get('state') === n.PAUSED && S.get('imageAdvs') && S.get('imageAdvs').pause && yr && !yr.isHidden() && yr.resizePauseAdv(o, t);
                    }
                }
                function $() {
                    if (Kr) {
                        var r = document.fullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                        return !(!r || r.id !== S.get('id'));
                    }

                    return Dr ? lr.getVideo().getFullScreen() : S.getVideo().getFullScreen();
                }
                function _(r) {
                    var o = S.get('fullscreen');
                    var t = void 0 !== r.jwstate ? r.jwstate : $();
                    o !== t && S.set('fullscreen', t), clearTimeout(Gr), Gr = setTimeout(Z, 200);
                }
                function rr(o, t) {
                    t ? (r.addClass(o, 'jw-flag-fullscreen'), v(document.body, {
                        'overflow-y': 'hidden'
                    }), tr()) : (r.removeClass(o, 'jw-flag-fullscreen'), v(document.body, {
                        'overflow-y': ''
                    })), Z();
                }
                function or() {
                    Fr = !1, clearTimeout(qr), ur.hideComponents(), r.addClass(wr, 'jw-flag-user-inactive');
                }
                function tr() {
                    Fr || (r.removeClass(wr, 'jw-flag-user-inactive'), ur.checkCompactMode(sr.clientWidth)), Fr = !0, clearTimeout(qr), qr = setTimeout(or, zr);
                }
                function er() {
                    m.setFullscreen(!1), S.get('imageAdvs') && S.get('imageAdvs').end && yr && yr.loadAdv('end');
                }
                function nr() {
                    mr && mr.setState(S.get('state')), ar(S, S.mediaModel.get('mediaType')), S.mediaModel.on('change:mediaType', ar, this);
                }
                function ar(o, t) {
                    var e = 'audio' === t;
                    var n = S.getVideo();
                    var a = n && 0 === n.getName().name.indexOf('flash');
                    r.toggleClass(wr, 'jw-flag-media-audio', e), e && !a ? wr.insertBefore(vr.el, sr) : wr.insertBefore(vr.el, Tr.element());
                }
                function ir(o, t) {
                    var e = 'LIVE' === r.adaptiveType(t);
                    r.toggleClass(wr, 'jw-flag-live', e), e || Nr.setAltText('');
                }
                function cr(o, t) {
                    return t ? void (r.isPoorIE() || (t.name ? Er.updateText(t.name, t.message) : Er.updateText(t.message, ''))) : void Er.playlistItem(o, o.get('playlistItem'));
                }
                function dr() {
                    var r = S.getVideo();
                    return !!r && r.isCaster;
                }
                function fr() {
                    r.replaceClass(wr, /jw-state-\S+/, 'jw-state-' + Jr);
                }
                function hr(o, t) {
                    if (Jr = t, clearTimeout(Hr), t === n.COMPLETE || t === n.IDLE ? Hr = setTimeout(fr, 100) : fr(), dr()) {
                        return void r.addClass(sr, 'jw-media-show');
                    }

                    switch (t) {
                        case n.PLAYING:
                            yr && yr.hide(), Z(), Ar && S.get('marquee').show && Ar.start();
                            break;case n.PAUSED:
                            yr && S.get('imageAdvs') && S.get('imageAdvs').pause && yr.loadAdv('pause'), tr(), Ar && S.get('marquee').show && Ar.pause();
                            break;case n.IDLE:
                            Ar && S.get('marquee').show && Ar.pause();
                            break;case n.COMPLETE:
                            Ar && Ar.stop();
                    }
                }
                var wr;
                var pr;
                var sr;
                var br;
                var gr;
                var lr;
                var ur;
                var vr;
                var yr;
                var Ar;
                var Cr;
                var mr;
                var Sr;
                var xr;
                var Er;
                var Tr;
                var kr;
                var Ir;
                var Jr;
                var Lr;
                var Or;
                var jr;
                var qr = -1;
                var zr = A ? 4e3 : 2e3;
                var Br = 40;
                var Dr = !1;
                var Fr = !1;
                var Gr = -1;
                var Hr = -1;
                var Kr = !1;
                var Mr = !1;
                var Nr = l.extend(this, t);
                this.model = S, this.api = m, wr = r.createElement(u({
                    id: S.get('id')
                })), r.isIE() && r.addClass(wr, 'jw-ie');
                var Pr = S.get('width');
                var Qr = S.get('height');
                v(wr, {width: Pr.toString().indexOf('%') > 0 ? Pr : Pr + 'px', height: Qr.toString().indexOf('%') > 0 ? Qr : Qr + 'px'}), Or = wr.requestFullscreen || wr.webkitRequestFullscreen || wr.webkitRequestFullScreen || wr.mozRequestFullScreen || wr.msRequestFullscreen, jr = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen, Kr = Or && jr, this.onChangeSkin = function (o, t) {
                    r.replaceClass(wr, /jw-skin-\S+/, t ? 'jw-skin-' + t : '');
                }, this.handleColorOverrides = function () {
                    function o(o, e, n) {
                        if (n) {
                            o = r.prefix(o, '#' + t + ' ');
                            var a = {};
                            a[e] = n, r.css(o.join(', '), a, t);
                        }
                    }
                    var t = S.get('id');
                    var e = S.get('skinColorActive');
                    var n = S.get('skinColorInactive');
                    var a = S.get('skinColorBackground');
                    o(['.jw-toggle', '.jw-button-color:hover'], 'color', e), o(['.jw-active-option', '.jw-progress', '.jw-playlist-container .jw-option.jw-active-option', '.jw-playlist-container .jw-option:hover'], 'background', e), o(['.jw-text', '.jw-option', '.jw-button-color', '.jw-toggle.jw-off', '.jw-tooltip-title', '.jw-skip .jw-skip-icon', '.jw-playlist-container .jw-icon'], 'color', n), o(['.jw-cue', '.jw-knob'], 'background', n), o(['.jw-playlist-container .jw-option'], 'border-bottom-color', n), o(['.jw-background-color', '.jw-tooltip-title', '.jw-playlist', '.jw-playlist-container .jw-option'], 'background', a), o(['.jw-playlist-container ::-webkit-scrollbar'], 'border-color', a);
                }, this.setup = function () {
                    this.handleColorOverrides(), S.get('skin-loading') === !0 && (r.addClass(wr, 'jw-flag-skin-loading'), S.once('change:skin-loading', function () {
                        r.removeClass(wr, 'jw-flag-skin-loading');
                    })), this.onChangeSkin(S, S.get('skin'), ''), S.on('change:skin', this.onChangeSkin, this), sr = r.getElementsByClassName('jw-media', wr)[0], pr = r.getElementsByClassName('jw-controls', wr)[0];
                    var t = r.getElementsByClassName('jw-preview', wr)[0];
                    vr = new w(S), vr.setup(t);
                    var e = r.getElementsByClassName('jw-title', wr)[0];
                    if (Er = new g(S), Er.setup(e), r.isPoorIE()) {
                        r.style(r.getElementsByClassName('jw-marquee', wr)[0], {
                            display: 'none'
                        });
                    }
                    else {
                        yr = new p(S, m), S.get('imageAdvs') && wr.appendChild(yr.element());
                        var a = r.getElementsByClassName('jw-marquee', wr)[0];
                        Ar = new s(S, a);
                    }
                    Q(), tr(), S.set('mediaContainer', sr), S.mediaController.on('fullscreenchange', _);
                    for (var i = C.length; i--;) {
                        r.addEventListener(document, C[i], _, !1);

                    }
                    r.removeEventListener(window, 'resize', O), r.addEventListener(window, 'resize', O, !1), A && (r.removeEventListener(window, 'orientationchange', O), r.addEventListener(window, 'orientationchange', O, !1)), S.on('change:errorEvent', cr), S.on('change:controls', Rr), Rr(S, S.get('controls')), S.on('change:state', hr), S.on('change:duration', ir, this), S.on('change:flashBlocked', N), N(S, S.get('flashBlocked')), m.onPlaylistComplete(er), m.onPlaylistItem(nr), S.on('change:castAvailable', q), q(S, S.get('castAvailable')), S.on('change:castActive', j), j(S, S.get('castActive')), S.get('stretching') && z(S, S.get('stretching')), S.on('change:stretching', z), hr(S, n.IDLE), S.on('change:fullscreen', Ur), D(ur), D(xr);
                    var c = S.get('aspectratio');
                    if (c) {
                        r.addClass(wr, 'jw-flag-aspect-mode');
                        var d = r.getElementsByClassName('jw-aspect', wr)[0];
                        v(d, {
                            paddingTop: c
                        });
                    }

                    m.on(o.JWPLAYER_READY, function () {
                        O(), V(S.get('width'), S.get('height'));
                    }), S.on('connecting', function () {
                        Nr.setAltText('正在与服务器建立连接'), r.toggleClass(wr, 'jw-flag-live', !0);
                    }), S.on('connectFaild', function () {
                        m.stop(), Nr.setAltText('连接已断开，请稍后重试'), r.toggleClass(wr, 'jw-flag-live', !0), r.getElementsByClassName('jw-controlbar', wr)[0].style.display = 'block';
                    }), S.on('alive', function () {
                        'idle' !== Nr.model.get('state') && (Nr.setAltText('直播中'), r.toggleClass(wr, 'jw-flag-live', !0), t.style.display = 'none');
                    }), S.on('noLiveStream', function () {
                        'idle' !== Nr.model.get('state') && (Nr.setAltText('无直播流'), r.toggleClass(wr, 'jw-flag-live', !0), t.style.display = 'block', r.getElementsByClassName('jw-controlbar', wr)[0].style.display = 'block');
                    }), S.on('liveStop', function () {
                        m.stop(), Nr.setAltText('直播结束'), r.toggleClass(wr, 'jw-flag-live', !0), r.getElementsByClassName('jw-controlbar', wr)[0].style.display = 'block';
                    }), S.on('seekAfterLoadSuccess', function () {
                        Nr.setAltText('自动跳转到上次的播放时间...'), r.addClass(ur.element(), 'jw-controlbar-textshow'), setTimeout(function () {
                            r.removeClass(ur.element(), 'jw-controlbar-textshow');
                        }, 1e3);
                    });
                };
                var Rr = function (o, t) {
                    if (t) {
                        var e = Dr ? lr.get('state') : S.get('state');
                        hr(o, e);
                    }

                    r.toggleClass(wr, 'jw-flag-controls-disabled', !t);
                };
                var Ur = function (o, t) {
                    var e = S.getVideo();
                    Kr ? (t ? Or.apply(wr) : jr.apply(document), rr(wr, t)) : r.isIE() ? rr(wr, t) : (lr && lr.getVideo() && lr.getVideo().setFullscreen(t), e.setFullscreen(t)), e && 0 === e.getName().name.indexOf('flash') && e.setFullscreen(t), Ar && S.get('marquee').show && Ar.reset(wr.clientWidth, wr.clientHeight);
                };
                this.resize = function (r, o) {
                    var t = !0;
                    V(r, o, t), O();
                }, this.resizeMedia = Z, this.reset = function () {
                    document.contains(wr) && wr.parentNode.replaceChild(Lr, wr), r.emptyElement(wr);
                }, this.setupInstream = function (o) {
                    this.instreamModel = lr = o, lr.on('change:controls', Rr, this), lr.on('change:state', hr, this), Dr = !0, r.addClass(wr, 'jw-flag-ads'), tr();
                }, this.setAltText = function (r) {
                    ur.setAltText(r);
                }, this.useExternalControls = function () {
                    r.addClass(wr, 'jw-flag-ads-hide-controls');
                }, this.destroyInstream = function () {
                    if (Dr = !1, lr && (lr.off(null, null, this), lr = null), this.setAltText(''), r.removeClass(wr, 'jw-flag-ads'), r.removeClass(wr, 'jw-flag-ads-hide-controls'), S.getVideo) {
                        var o = S.getVideo();
                        o.setContainer(sr);
                    }

                    ir(S, S.get('duration')), Cr.revertAlternateClickHandlers();
                }, this.addCues = function (r) {
                    ur && ur.addCues(r);
                }, this.clickHandler = function () {
                    return Cr;
                }, this.controlsContainer = function () {
                    return pr;
                }, this.getContainer = this.element = function () {
                    return wr;
                }, this.getSafeRegion = function (o) {
                    var t = {x: 0, y: 0, width: S.get('containerWidth') || 0, height: S.get('containerHeight') || 0};
                    var e = S.get('dock');
                    return e && e.length && S.get('controls') && (t.y = Sr.element().clientHeight, t.height -= t.y), o = o || !r.exists(o), o && S.get('controls') && (t.height -= ur.element().clientHeight), t;
                }, this.setCaptions = function (r) {
                    Tr.clear(), Tr.setup(S.get('id'), r), Tr.resize();
                }, this.destroy = function () {
                    r.removeEventListener(window, 'resize', O), r.removeEventListener(window, 'orientationchange', O);
                    for (var o = C.length; o--;) {
                        r.removeEventListener(document, C[o], _, _, !1);

                    }
                    S.mediaController && S.mediaController.off('fullscreenchange', _), r.removeEventListener(wr, 'keydown', k), Ir && Ir.destroy(), mr && (S.off('change:state', mr.statusDelegate), mr.destroy(), mr = null), Dr && this.destroyInstream(), xr && xr.destroy(), r.clearCss(S.get('id'));
                }, this.showAdv = function (r) {
                    yr && yr.loadAdv(r);
                }, this.beginStartAdv = function () {
                    yr && yr.beginStartAdv();
                };
            };
            return m;
        }.apply(o, e), !(void 0 !== n && (r.exports = n));
    }]);
});
