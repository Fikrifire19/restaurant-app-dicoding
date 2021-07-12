const serviceWorkerOption = {
  assets: [
    '/main.bundle.js',
    '/1.bundle.js',
    '/favicon.png',
    '/manifest.json',
    '/index.html',
  ],
};

!(function (t) { const e = {}; function r(n) { if (e[n]) return e[n].exports; const o = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports; }r.m = t, r.c = e, r.d = function (t, e, n) { r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }); }, r.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, r.t = function (t, e) { if (1 & e && (t = r(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const n = Object.create(null); if (r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (const o in t)r.d(n, o, ((e) => t[e]).bind(null, o)); return n; }, r.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return r.d(e, 'a', e), e; }, r.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, r.p = '', r(r.s = 1); }([function (t, e, r) {
  const n = {
    KEY: '12345', BASE_URL: 'https://restaurant-api.dicoding.dev/', CACHE_NAME: (new Date()).toISOString, DATABASE_NAME: 'restaurant-list-database', DATABASE_VERSION: 1, OBJECT_STORE_NAME: 'restaurants', WEB_SOCKET_SERVER: 'wss://stormy-badlands-06326.herokuapp.com',
  }; function o(t, e, r, n, o, i, a) { try { var c = t[i](a); var u = c.value; } catch (t) { return void r(t); }c.done ? e(u) : Promise.resolve(u).then(n, o); } function i(t) { return function () { const e = this; const r = arguments; return new Promise(((n, i) => { const a = t.apply(e, r); function c(t) { o(a, n, i, c, u, 'next', t); } function u(t) { o(a, n, i, c, u, 'throw', t); }c(void 0); })); }; } const a = {
    cachingAppShell(t) { const e = this; return i(regeneratorRuntime.mark((function r() { return regeneratorRuntime.wrap(((r) => { for (;;) switch (r.prev = r.next) { case 0: return r.next = 2, e._openCache(); case 2: r.sent.addAll(t); case 4: case 'end': return r.stop(); } }), r); })))(); }, deleteOldCache() { return i(regeneratorRuntime.mark((function t() { return regeneratorRuntime.wrap(((t) => { for (;;) switch (t.prev = t.next) { case 0: return t.next = 2, caches.keys(); case 2: t.sent.filter(((t) => t !== n.CACHE_NAME)).map(((t) => caches.delete(t))); case 4: case 'end': return t.stop(); } }), t); })))(); }, revalidateCache(t) { const e = this; return i(regeneratorRuntime.mark((function r() { let n; return regeneratorRuntime.wrap(((r) => { for (;;) switch (r.prev = r.next) { case 0: return r.next = 2, caches.match(t); case 2: if (!(n = r.sent)) { r.next = 5; break; } return r.abrupt('return', n); case 5: return r.abrupt('return', e._fetchRequest(t)); case 6: case 'end': return r.stop(); } }), r); })))(); }, _openCache() { return i(regeneratorRuntime.mark((function t() { return regeneratorRuntime.wrap(((t) => { for (;;) switch (t.prev = t.next) { case 0: return t.abrupt('return', caches.open(n.CACHE_NAME)); case 1: case 'end': return t.stop(); } }), t); })))(); }, _fetchRequest(t) { const e = this; return i(regeneratorRuntime.mark((function r() { let n; return regeneratorRuntime.wrap(((r) => { for (;;) switch (r.prev = r.next) { case 0: return r.next = 2, fetch(t); case 2: if ((n = r.sent) && n.status === 200) { r.next = 5; break; } return r.abrupt('return', n); case 5: return r.next = 7, e._addCache(t); case 7: return r.abrupt('return', n); case 8: case 'end': return r.stop(); } }), r); })))(); }, _addCache(t) { const e = this; return i(regeneratorRuntime.mark((function r() { return regeneratorRuntime.wrap(((r) => { for (;;) switch (r.prev = r.next) { case 0: return r.next = 2, e._openCache(); case 2: r.sent.add(t); case 4: case 'end': return r.stop(); } }), r); })))(); },
  }; e.a = a;
}, function (t, e, r) {
  r.r(e), function (t) { r(3); const e = r(0); function n(t) { return (function (t) { if (Array.isArray(t)) return o(t); }(t)) || (function (t) { if (typeof Symbol !== 'undefined' && t[Symbol.iterator] != null || t['@@iterator'] != null) return Array.from(t); }(t)) || (function (t, e) { if (!t) return; if (typeof t === 'string') return o(t, e); let r = Object.prototype.toString.call(t).slice(8, -1); r === 'Object' && t.constructor && (r = t.constructor.name); if (r === 'Map' || r === 'Set') return Array.from(t); if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(t, e); }(t)) || (function () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }()); } function o(t, e) { (e == null || e > t.length) && (e = t.length); for (var r = 0, n = new Array(e); r < e; r++)n[r] = t[r]; return n; } const i = t.serviceWorkerOption.assets; self.addEventListener('install', ((t) => { console.log('Installing Service Worker ...'), t.waitUntil(e.a.cachingAppShell([].concat(n(i), ['./']))); })), self.addEventListener('activate', ((t) => { console.log('Activating Service Worker ...'), t.waitUntil(e.a.deleteOldCache()); })), self.addEventListener('fetch', ((t) => { console.log(t.request), t.respondWith(e.a.revalidateCache(t.request)); })); }.call(this, r(2));
}, function (t, e) { function r(t) { return (r = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; })(t); } let n; n = (function () { return this; }()); try { n = n || new Function('return this')(); } catch (t) { (typeof window === 'undefined' ? 'undefined' : r(window)) === 'object' && (n = window); }t.exports = n; }, function (t, e, r) {
  (function (t) {
    function e(t) { return (e = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (t) { return typeof t; } : function (t) { return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t; })(t); } const r = (function (t) {
      const r = Object.prototype; const n = r.hasOwnProperty; const o = typeof Symbol === 'function' ? Symbol : {}; const i = o.iterator || '@@iterator'; const a = o.asyncIterator || '@@asyncIterator'; const c = o.toStringTag || '@@toStringTag'; function u(t, e, r) {
        return Object.defineProperty(t, e, {
          value: r, enumerable: !0, configurable: !0, writable: !0,
        }), t[e];
      } try { u({}, ''); } catch (t) { u = function (t, e, r) { return t[e] = r; }; } function f(t, e, r, n) { const o = e && e.prototype instanceof h ? e : h; const i = Object.create(o.prototype); const a = new _(n || []); return i._invoke = (function (t, e, r) { let n = 'suspendedStart'; return function (o, i) { if (n === 'executing') throw new Error('Generator is already running'); if (n === 'completed') { if (o === 'throw') throw i; return O(); } for (r.method = o, r.arg = i; ;) { const a = r.delegate; if (a) { const c = x(a, r); if (c) { if (c === l) continue; return c; } } if (r.method === 'next')r.sent = r._sent = r.arg; else if (r.method === 'throw') { if (n === 'suspendedStart') throw n = 'completed', r.arg; r.dispatchException(r.arg); } else r.method === 'return' && r.abrupt('return', r.arg); n = 'executing'; const u = s(t, e, r); if (u.type === 'normal') { if (n = r.done ? 'completed' : 'suspendedYield', u.arg === l) continue; return { value: u.arg, done: r.done }; }u.type === 'throw' && (n = 'completed', r.method = 'throw', r.arg = u.arg); } }; }(t, r, a)), i; } function s(t, e, r) { try { return { type: 'normal', arg: t.call(e, r) }; } catch (t) { return { type: 'throw', arg: t }; } }t.wrap = f; var l = {}; function h() {} function p() {} function d() {} let y = {}; y[i] = function () { return this; }; const v = Object.getPrototypeOf; const m = v && v(v(L([]))); m && m !== r && n.call(m, i) && (y = m); const g = d.prototype = h.prototype = Object.create(y); function w(t) { ['next', 'throw', 'return'].forEach(((e) => { u(t, e, (function (t) { return this._invoke(e, t); })); })); } function b(t, r) { let o; this._invoke = function (i, a) { function c() { return new r(((o, c) => { !(function o(i, a, c, u) { const f = s(t[i], t, a); if (f.type !== 'throw') { const l = f.arg; const h = l.value; return h && e(h) === 'object' && n.call(h, '__await') ? r.resolve(h.__await).then(((t) => { o('next', t, c, u); }), ((t) => { o('throw', t, c, u); })) : r.resolve(h).then(((t) => { l.value = t, c(l); }), ((t) => o('throw', t, c, u))); }u(f.arg); }(i, a, o, c)); })); } return o = o ? o.then(c, c) : c(); }; } function x(t, e) { const r = t.iterator[e.method]; if (void 0 === r) { if (e.delegate = null, e.method === 'throw') { if (t.iterator.return && (e.method = 'return', e.arg = void 0, x(t, e), e.method === 'throw')) return l; e.method = 'throw', e.arg = new TypeError("The iterator does not provide a 'throw' method"); } return l; } const n = s(r, t.iterator, e.arg); if (n.type === 'throw') return e.method = 'throw', e.arg = n.arg, e.delegate = null, l; const o = n.arg; return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, e.method !== 'return' && (e.method = 'next', e.arg = void 0), e.delegate = null, l) : o : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, l); } function E(t) { const e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function S(t) { const e = t.completion || {}; e.type = 'normal', delete e.arg, t.completion = e; } function _(t) { this.tryEntries = [{ tryLoc: 'root' }], t.forEach(E, this), this.reset(!0); } function L(t) { if (t) { const e = t[i]; if (e) return e.call(t); if (typeof t.next === 'function') return t; if (!isNaN(t.length)) { let r = -1; const o = function e() { for (;++r < t.length;) if (n.call(t, r)) return e.value = t[r], e.done = !1, e; return e.value = void 0, e.done = !0, e; }; return o.next = o; } } return { next: O }; } function O() { return { value: void 0, done: !0 }; } return p.prototype = g.constructor = d, d.constructor = p, p.displayName = u(d, c, 'GeneratorFunction'), t.isGeneratorFunction = function (t) { const e = typeof t === 'function' && t.constructor; return !!e && (e === p || (e.displayName || e.name) === 'GeneratorFunction'); }, t.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, c, 'GeneratorFunction')), t.prototype = Object.create(g), t; }, t.awrap = function (t) { return { __await: t }; }, w(b.prototype), b.prototype[a] = function () { return this; }, t.AsyncIterator = b, t.async = function (e, r, n, o, i) { void 0 === i && (i = Promise); const a = new b(f(e, r, n, o), i); return t.isGeneratorFunction(r) ? a : a.next().then(((t) => (t.done ? t.value : a.next()))); }, w(g), u(g, c, 'Generator'), g[i] = function () { return this; }, g.toString = function () { return '[object Generator]'; }, t.keys = function (t) { const e = []; for (const r in t)e.push(r); return e.reverse(), function r() { for (;e.length;) { const n = e.pop(); if (n in t) return r.value = n, r.done = !1, r; } return r.done = !0, r; }; }, t.values = L, _.prototype = {
        constructor: _, reset(t) { if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = 'next', this.arg = void 0, this.tryEntries.forEach(S), !t) for (const e in this)e.charAt(0) === 't' && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0); }, stop() { this.done = !0; const t = this.tryEntries[0].completion; if (t.type === 'throw') throw t.arg; return this.rval; }, dispatchException(t) { if (this.done) throw t; const e = this; function r(r, n) { return a.type = 'throw', a.arg = t, e.next = r, n && (e.method = 'next', e.arg = void 0), !!n; } for (let o = this.tryEntries.length - 1; o >= 0; --o) { const i = this.tryEntries[o]; var a = i.completion; if (i.tryLoc === 'root') return r('end'); if (i.tryLoc <= this.prev) { const c = n.call(i, 'catchLoc'); const u = n.call(i, 'finallyLoc'); if (c && u) { if (this.prev < i.catchLoc) return r(i.catchLoc, !0); if (this.prev < i.finallyLoc) return r(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return r(i.catchLoc, !0); } else { if (!u) throw new Error('try statement without catch or finally'); if (this.prev < i.finallyLoc) return r(i.finallyLoc); } } } }, abrupt(t, e) { for (let r = this.tryEntries.length - 1; r >= 0; --r) { const o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) { var i = o; break; } }i && (t === 'break' || t === 'continue') && i.tryLoc <= e && e <= i.finallyLoc && (i = null); const a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = 'next', this.next = i.finallyLoc, l) : this.complete(a); }, complete(t, e) { if (t.type === 'throw') throw t.arg; return t.type === 'break' || t.type === 'continue' ? this.next = t.arg : t.type === 'return' ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : t.type === 'normal' && e && (this.next = e), l; }, finish(t) { for (let e = this.tryEntries.length - 1; e >= 0; --e) { const r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), S(r), l; } }, catch(t) { for (let e = this.tryEntries.length - 1; e >= 0; --e) { const r = this.tryEntries[e]; if (r.tryLoc === t) { const n = r.completion; if (n.type === 'throw') { var o = n.arg; S(r); } return o; } } throw new Error('illegal catch attempt'); }, delegateYield(t, e, r) { return this.delegate = { iterator: L(t), resultName: e, nextLoc: r }, this.method === 'next' && (this.arg = void 0), l; },
      }, t;
    }(e(t) === 'object' ? t.exports : {})); try { regeneratorRuntime = r; } catch (t) { Function('r', 'regeneratorRuntime = r')(r); }
  }).call(this, r(4)(t));
}, function (t, e) { t.exports = function (t) { return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, 'loaded', { enumerable: !0, get() { return t.l; } }), Object.defineProperty(t, 'id', { enumerable: !0, get() { return t.i; } }), t.webpackPolyfill = 1), t; }; }]));
