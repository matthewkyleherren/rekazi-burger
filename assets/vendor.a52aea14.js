var kn = Object.defineProperty,
  Tn = Object.defineProperties;
var Sn = Object.getOwnPropertyDescriptors;
var _a = Object.getOwnPropertySymbols;
var Mn = Object.prototype.hasOwnProperty,
  Pn = Object.prototype.propertyIsEnumerable;
var Ka = (r, e, a) => e in r ? kn(r, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: a
  }) : r[e] = a,
  Ee = (r, e) => {
    for (var a in e || (e = {})) Mn.call(e, a) && Ka(r, a, e[a]);
    if (_a)
      for (var a of _a(e)) Pn.call(e, a) && Ka(r, a, e[a]);
    return r
  },
  Ht = (r, e) => Tn(r, Sn(e));

function Qa(r) {
  return r !== null && typeof r == "object" && "constructor" in r && r.constructor === Object
}

function da(r = {}, e = {}) {
  Object.keys(e).forEach(a => {
    typeof r[a] == "undefined" ? r[a] = e[a] : Qa(e[a]) && Qa(r[a]) && Object.keys(e[a]).length > 0 && da(r[a], e[a])
  })
}
const Za = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ""
  },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return {
      initEvent() {}
    }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      }
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};

function ee() {
  const r = typeof document != "undefined" ? document : {};
  return da(r, Za), r
}
const An = {
  document: Za,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function () {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ""
      }
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(r) {
    return typeof setTimeout == "undefined" ? (r(), null) : setTimeout(r, 0)
  },
  cancelAnimationFrame(r) {
    typeof setTimeout != "undefined" && clearTimeout(r)
  }
};

function G() {
  const r = typeof window != "undefined" ? window : {};
  return da(r, An), r
}

function In(r) {
  const e = r.__proto__;
  Object.defineProperty(r, "__proto__", {
    get() {
      return e
    },
    set(a) {
      e.__proto__ = a
    }
  })
}
class tt extends Array {
  constructor(e) {
    if (typeof e == "number") super(e);
    else {
      super(...e || []);
      In(this)
    }
  }
}

function xt(r = []) {
  const e = [];
  return r.forEach(a => {
    Array.isArray(a) ? e.push(...xt(a)) : e.push(a)
  }), e
}

function Ja(r, e) {
  return Array.prototype.filter.call(r, e)
}

function On(r) {
  const e = [];
  for (let a = 0; a < r.length; a += 1) e.indexOf(r[a]) === -1 && e.push(r[a]);
  return e
}

function Bn(r) {
  return r.toLowerCase().replace(/-(.)/g, (e, a) => a.toUpperCase())
}

function Dn(r, e) {
  if (typeof r != "string") return [r];
  const a = [],
    t = e.querySelectorAll(r);
  for (let n = 0; n < t.length; n += 1) a.push(t[n]);
  return a
}

function ie(r, e) {
  const a = G(),
    t = ee();
  let n = [];
  if (!e && r instanceof tt) return r;
  if (!r) return new tt(n);
  if (typeof r == "string") {
    const s = r.trim();
    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
      let i = "div";
      s.indexOf("<li") === 0 && (i = "ul"), s.indexOf("<tr") === 0 && (i = "tbody"), (s.indexOf("<td") === 0 || s.indexOf("<th") === 0) && (i = "tr"), s.indexOf("<tbody") === 0 && (i = "table"), s.indexOf("<option") === 0 && (i = "select");
      const o = t.createElement(i);
      o.innerHTML = s;
      for (let l = 0; l < o.childNodes.length; l += 1) n.push(o.childNodes[l])
    } else n = Dn(r.trim(), e || t)
  } else if (r.nodeType || r === a || r === t) n.push(r);
  else if (Array.isArray(r)) {
    if (r instanceof tt) return r;
    n = r
  }
  return new tt(On(n))
}
ie.fn = tt.prototype;

function Ln(...r) {
  const e = xt(r.map(a => a.split(" ")));
  return this.forEach(a => {
    a.classList.add(...e)
  }), this
}

function Rn(...r) {
  const e = xt(r.map(a => a.split(" ")));
  return this.forEach(a => {
    a.classList.remove(...e)
  }), this
}

function Hn(...r) {
  const e = xt(r.map(a => a.split(" ")));
  this.forEach(a => {
    e.forEach(t => {
      a.classList.toggle(t)
    })
  })
}

function zn(...r) {
  const e = xt(r.map(a => a.split(" ")));
  return Ja(this, a => e.filter(t => a.classList.contains(t)).length > 0).length > 0
}

function Fn(r, e) {
  if (arguments.length === 1 && typeof r == "string") return this[0] ? this[0].getAttribute(r) : void 0;
  for (let a = 0; a < this.length; a += 1)
    if (arguments.length === 2) this[a].setAttribute(r, e);
    else
      for (const t in r) this[a][t] = r[t], this[a].setAttribute(t, r[t]);
  return this
}

function Vn(r) {
  for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(r);
  return this
}

function Nn(r, e) {
  if (arguments.length === 1 && typeof r == "string") {
    if (this[0]) return this[0][r]
  } else {
    for (let a = 0; a < this.length; a += 1)
      if (arguments.length === 2) this[a][r] = e;
      else
        for (const t in r) this[a][t] = r[t];
    return this
  }
  return this
}

function Yn(r, e) {
  let a;
  if (typeof e == "undefined") {
    if (a = this[0], !a) return;
    if (a.dom7ElementDataStorage && r in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[r];
    const t = a.getAttribute(`data-${r}`);
    return t || void 0
  }
  for (let t = 0; t < this.length; t += 1) a = this[t], a.dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[r] = e;
  return this
}

function qn(r) {
  for (let e = 0; e < this.length; e += 1) {
    const a = this[e];
    a.dom7ElementDataStorage && a.dom7ElementDataStorage[r] && (a.dom7ElementDataStorage[r] = null, delete a.dom7ElementDataStorage[r])
  }
}

function jn() {
  const r = this[0];
  if (!r) return;
  const e = {};
  if (r.dataset)
    for (const a in r.dataset) e[a] = r.dataset[a];
  else
    for (let a = 0; a < r.attributes.length; a += 1) {
      const t = r.attributes[a];
      t.name.indexOf("data-") >= 0 && (e[Bn(t.name.split("data-")[1])] = t.value)
    }
  for (const a in e) e[a] === "false" ? e[a] = !1 : e[a] === "true" ? e[a] = !0 : parseFloat(e[a]) === e[a] * 1 && (e[a] *= 1);
  return e
}

function Wn(r) {
  if (typeof r == "undefined") {
    const e = this[0];
    if (!e) return;
    if (e.multiple && e.nodeName.toLowerCase() === "select") {
      const a = [];
      for (let t = 0; t < e.selectedOptions.length; t += 1) a.push(e.selectedOptions[t].value);
      return a
    }
    return e.value
  }
  for (let e = 0; e < this.length; e += 1) {
    const a = this[e];
    if (Array.isArray(r) && a.multiple && a.nodeName.toLowerCase() === "select")
      for (let t = 0; t < a.options.length; t += 1) a.options[t].selected = r.indexOf(a.options[t].value) >= 0;
    else a.value = r
  }
  return this
}

function Xn(r) {
  return this.val(r)
}

function Gn(r) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transform = r;
  return this
}

function Un(r) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transitionDuration = typeof r != "string" ? `${r}ms` : r;
  return this
}

function _n(...r) {
  let [e, a, t, n] = r;
  typeof r[1] == "function" && ([e, t, n] = r, a = void 0), n || (n = !1);

  function s(c) {
    const d = c.target;
    if (!d) return;
    const p = c.target.dom7EventData || [];
    if (p.indexOf(c) < 0 && p.unshift(c), ie(d).is(a)) t.apply(d, p);
    else {
      const u = ie(d).parents();
      for (let g = 0; g < u.length; g += 1) ie(u[g]).is(a) && t.apply(u[g], p)
    }
  }

  function i(c) {
    const d = c && c.target ? c.target.dom7EventData || [] : [];
    d.indexOf(c) < 0 && d.unshift(c), t.apply(this, d)
  }
  const o = e.split(" ");
  let l;
  for (let c = 0; c < this.length; c += 1) {
    const d = this[c];
    if (a)
      for (l = 0; l < o.length; l += 1) {
        const p = o[l];
        d.dom7LiveListeners || (d.dom7LiveListeners = {}), d.dom7LiveListeners[p] || (d.dom7LiveListeners[p] = []), d.dom7LiveListeners[p].push({
          listener: t,
          proxyListener: s
        }), d.addEventListener(p, s, n)
      } else
        for (l = 0; l < o.length; l += 1) {
          const p = o[l];
          d.dom7Listeners || (d.dom7Listeners = {}), d.dom7Listeners[p] || (d.dom7Listeners[p] = []), d.dom7Listeners[p].push({
            listener: t,
            proxyListener: i
          }), d.addEventListener(p, i, n)
        }
  }
  return this
}

function Kn(...r) {
  let [e, a, t, n] = r;
  typeof r[1] == "function" && ([e, t, n] = r, a = void 0), n || (n = !1);
  const s = e.split(" ");
  for (let i = 0; i < s.length; i += 1) {
    const o = s[i];
    for (let l = 0; l < this.length; l += 1) {
      const c = this[l];
      let d;
      if (!a && c.dom7Listeners ? d = c.dom7Listeners[o] : a && c.dom7LiveListeners && (d = c.dom7LiveListeners[o]), d && d.length)
        for (let p = d.length - 1; p >= 0; p -= 1) {
          const u = d[p];
          t && u.listener === t || t && u.listener && u.listener.dom7proxy && u.listener.dom7proxy === t ? (c.removeEventListener(o, u.proxyListener, n), d.splice(p, 1)) : t || (c.removeEventListener(o, u.proxyListener, n), d.splice(p, 1))
        }
    }
  }
  return this
}

function Qn(...r) {
  const e = this;
  let [a, t, n, s] = r;
  typeof r[1] == "function" && ([a, n, s] = r, t = void 0);

  function i(...o) {
    n.apply(this, o), e.off(a, t, i, s), i.dom7proxy && delete i.dom7proxy
  }
  return i.dom7proxy = n, e.on(a, t, i, s)
}

function Zn(...r) {
  const e = G(),
    a = r[0].split(" "),
    t = r[1];
  for (let n = 0; n < a.length; n += 1) {
    const s = a[n];
    for (let i = 0; i < this.length; i += 1) {
      const o = this[i];
      if (e.CustomEvent) {
        const l = new e.CustomEvent(s, {
          detail: t,
          bubbles: !0,
          cancelable: !0
        });
        o.dom7EventData = r.filter((c, d) => d > 0), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
      }
    }
  }
  return this
}

function Jn(r) {
  const e = this;

  function a(t) {
    t.target === this && (r.call(this, t), e.off("transitionstart", a))
  }
  return r && e.on("transitionstart", a), this
}

function es(r) {
  const e = this;

  function a(t) {
    t.target === this && (r.call(this, t), e.off("transitionend", a))
  }
  return r && e.on("transitionend", a), this
}

function ts(r) {
  const e = this;

  function a(t) {
    t.target === this && (r.call(this, t), e.off("animationend", a))
  }
  return r && e.on("animationend", a), this
}

function as() {
  const r = G();
  return this[0] === r ? r.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
}

function rs(r) {
  if (this.length > 0) {
    if (r) {
      const e = this.styles();
      return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
    }
    return this[0].offsetWidth
  }
  return null
}

function ns() {
  const r = G();
  return this[0] === r ? r.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
}

function ss(r) {
  if (this.length > 0) {
    if (r) {
      const e = this.styles();
      return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
    }
    return this[0].offsetHeight
  }
  return null
}

function is() {
  if (this.length > 0) {
    const r = G(),
      e = ee(),
      a = this[0],
      t = a.getBoundingClientRect(),
      n = e.body,
      s = a.clientTop || n.clientTop || 0,
      i = a.clientLeft || n.clientLeft || 0,
      o = a === r ? r.scrollY : a.scrollTop,
      l = a === r ? r.scrollX : a.scrollLeft;
    return {
      top: t.top + o - s,
      left: t.left + l - i
    }
  }
  return null
}

function os() {
  for (let r = 0; r < this.length; r += 1) this[r].style.display = "none";
  return this
}

function ls() {
  const r = G();
  for (let e = 0; e < this.length; e += 1) {
    const a = this[e];
    a.style.display === "none" && (a.style.display = ""), r.getComputedStyle(a, null).getPropertyValue("display") === "none" && (a.style.display = "block")
  }
  return this
}

function cs() {
  const r = G();
  return this[0] ? r.getComputedStyle(this[0], null) : {}
}

function ds(r, e) {
  const a = G();
  let t;
  if (arguments.length === 1)
    if (typeof r == "string") {
      if (this[0]) return a.getComputedStyle(this[0], null).getPropertyValue(r)
    } else {
      for (t = 0; t < this.length; t += 1)
        for (const n in r) this[t].style[n] = r[n];
      return this
    } if (arguments.length === 2 && typeof r == "string") {
    for (t = 0; t < this.length; t += 1) this[t].style[r] = e;
    return this
  }
  return this
}

function ps(r) {
  return r ? (this.forEach((e, a) => {
    r.apply(e, [e, a])
  }), this) : this
}

function us(r) {
  const e = Ja(this, r);
  return ie(e)
}

function fs(r) {
  if (typeof r == "undefined") return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1) this[e].innerHTML = r;
  return this
}

function hs(r) {
  if (typeof r == "undefined") return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1) this[e].textContent = r;
  return this
}

function ms(r) {
  const e = G(),
    a = ee(),
    t = this[0];
  let n, s;
  if (!t || typeof r == "undefined") return !1;
  if (typeof r == "string") {
    if (t.matches) return t.matches(r);
    if (t.webkitMatchesSelector) return t.webkitMatchesSelector(r);
    if (t.msMatchesSelector) return t.msMatchesSelector(r);
    for (n = ie(r), s = 0; s < n.length; s += 1)
      if (n[s] === t) return !0;
    return !1
  }
  if (r === a) return t === a;
  if (r === e) return t === e;
  if (r.nodeType || r instanceof tt) {
    for (n = r.nodeType ? [r] : r, s = 0; s < n.length; s += 1)
      if (n[s] === t) return !0;
    return !1
  }
  return !1
}

function gs() {
  let r = this[0],
    e;
  if (r) {
    for (e = 0;
      (r = r.previousSibling) !== null;) r.nodeType === 1 && (e += 1);
    return e
  }
}

function vs(r) {
  if (typeof r == "undefined") return this;
  const e = this.length;
  if (r > e - 1) return ie([]);
  if (r < 0) {
    const a = e + r;
    return a < 0 ? ie([]) : ie([this[a]])
  }
  return ie([this[r]])
}

function bs(...r) {
  let e;
  const a = ee();
  for (let t = 0; t < r.length; t += 1) {
    e = r[t];
    for (let n = 0; n < this.length; n += 1)
      if (typeof e == "string") {
        const s = a.createElement("div");
        for (s.innerHTML = e; s.firstChild;) this[n].appendChild(s.firstChild)
      } else if (e instanceof tt)
      for (let s = 0; s < e.length; s += 1) this[n].appendChild(e[s]);
    else this[n].appendChild(e)
  }
  return this
}

function ys(r) {
  return ie(r).append(this), this
}

function Es(r) {
  const e = ee();
  let a, t;
  for (a = 0; a < this.length; a += 1)
    if (typeof r == "string") {
      const n = e.createElement("div");
      for (n.innerHTML = r, t = n.childNodes.length - 1; t >= 0; t -= 1) this[a].insertBefore(n.childNodes[t], this[a].childNodes[0])
    } else if (r instanceof tt)
    for (t = 0; t < r.length; t += 1) this[a].insertBefore(r[t], this[a].childNodes[0]);
  else this[a].insertBefore(r, this[a].childNodes[0]);
  return this
}

function ws(r) {
  return ie(r).prepend(this), this
}

function Cs(r) {
  const e = ie(r);
  for (let a = 0; a < this.length; a += 1)
    if (e.length === 1) e[0].parentNode.insertBefore(this[a], e[0]);
    else if (e.length > 1)
    for (let t = 0; t < e.length; t += 1) e[t].parentNode.insertBefore(this[a].cloneNode(!0), e[t])
}

function $s(r) {
  const e = ie(r);
  for (let a = 0; a < this.length; a += 1)
    if (e.length === 1) e[0].parentNode.insertBefore(this[a], e[0].nextSibling);
    else if (e.length > 1)
    for (let t = 0; t < e.length; t += 1) e[t].parentNode.insertBefore(this[a].cloneNode(!0), e[t].nextSibling)
}

function xs(r) {
  return this.length > 0 ? r ? this[0].nextElementSibling && ie(this[0].nextElementSibling).is(r) ? ie([this[0].nextElementSibling]) : ie([]) : this[0].nextElementSibling ? ie([this[0].nextElementSibling]) : ie([]) : ie([])
}

function ks(r) {
  const e = [];
  let a = this[0];
  if (!a) return ie([]);
  for (; a.nextElementSibling;) {
    const t = a.nextElementSibling;
    r ? ie(t).is(r) && e.push(t) : e.push(t), a = t
  }
  return ie(e)
}

function Ts(r) {
  if (this.length > 0) {
    const e = this[0];
    return r ? e.previousElementSibling && ie(e.previousElementSibling).is(r) ? ie([e.previousElementSibling]) : ie([]) : e.previousElementSibling ? ie([e.previousElementSibling]) : ie([])
  }
  return ie([])
}

function Ss(r) {
  const e = [];
  let a = this[0];
  if (!a) return ie([]);
  for (; a.previousElementSibling;) {
    const t = a.previousElementSibling;
    r ? ie(t).is(r) && e.push(t) : e.push(t), a = t
  }
  return ie(e)
}

function Ms(r) {
  return this.nextAll(r).add(this.prevAll(r))
}

function Ps(r) {
  const e = [];
  for (let a = 0; a < this.length; a += 1) this[a].parentNode !== null && (r ? ie(this[a].parentNode).is(r) && e.push(this[a].parentNode) : e.push(this[a].parentNode));
  return ie(e)
}

function As(r) {
  const e = [];
  for (let a = 0; a < this.length; a += 1) {
    let t = this[a].parentNode;
    for (; t;) r ? ie(t).is(r) && e.push(t) : e.push(t), t = t.parentNode
  }
  return ie(e)
}

function Is(r) {
  let e = this;
  return typeof r == "undefined" ? ie([]) : (e.is(r) || (e = e.parents(r).eq(0)), e)
}

function Os(r) {
  const e = [];
  for (let a = 0; a < this.length; a += 1) {
    const t = this[a].querySelectorAll(r);
    for (let n = 0; n < t.length; n += 1) e.push(t[n])
  }
  return ie(e)
}

function Bs(r) {
  const e = [];
  for (let a = 0; a < this.length; a += 1) {
    const t = this[a].children;
    for (let n = 0; n < t.length; n += 1)(!r || ie(t[n]).is(r)) && e.push(t[n])
  }
  return ie(e)
}

function Ds() {
  for (let r = 0; r < this.length; r += 1) this[r].parentNode && this[r].parentNode.removeChild(this[r]);
  return this
}

function Ls() {
  return this.remove()
}

function Rs(...r) {
  const e = this;
  let a, t;
  for (a = 0; a < r.length; a += 1) {
    const n = ie(r[a]);
    for (t = 0; t < n.length; t += 1) e.push(n[t])
  }
  return e
}

function Hs() {
  for (let r = 0; r < this.length; r += 1) {
    const e = this[r];
    if (e.nodeType === 1) {
      for (let a = 0; a < e.childNodes.length; a += 1) e.childNodes[a].parentNode && e.childNodes[a].parentNode.removeChild(e.childNodes[a]);
      e.textContent = ""
    }
  }
  return this
}

function zs(...r) {
  const e = G();
  let [a, t, n, s, i] = r;
  return r.length === 4 && typeof s == "function" && (i = s, [a, t, n, i, s] = r), typeof s == "undefined" && (s = "swing"), this.each(function () {
    const l = this;
    let c, d, p, u, g, h, f, b, m = t > 0 || t === 0,
      v = a > 0 || a === 0;
    if (typeof s == "undefined" && (s = "swing"), m && (c = l.scrollTop, n || (l.scrollTop = t)), v && (d = l.scrollLeft, n || (l.scrollLeft = a)), !n) return;
    m && (p = l.scrollHeight - l.offsetHeight, g = Math.max(Math.min(t, p), 0)), v && (u = l.scrollWidth - l.offsetWidth, h = Math.max(Math.min(a, u), 0));
    let E = null;
    m && g === c && (m = !1), v && h === d && (v = !1);

    function $(w = new Date().getTime()) {
      E === null && (E = w);
      const C = Math.max(Math.min((w - E) / n, 1), 0),
        x = s === "linear" ? C : .5 - Math.cos(C * Math.PI) / 2;
      let M;
      if (m && (f = c + x * (g - c)), v && (b = d + x * (h - d)), m && g > c && f >= g && (l.scrollTop = g, M = !0), m && g < c && f <= g && (l.scrollTop = g, M = !0), v && h > d && b >= h && (l.scrollLeft = h, M = !0), v && h < d && b <= h && (l.scrollLeft = h, M = !0), M) {
        i && i();
        return
      }
      m && (l.scrollTop = f), v && (l.scrollLeft = b), e.requestAnimationFrame($)
    }
    e.requestAnimationFrame($)
  })
}

function Fs(...r) {
  let [e, a, t, n] = r;
  r.length === 3 && typeof t == "function" && ([e, a, n, t] = r);
  const s = this;
  return typeof e == "undefined" ? s.length > 0 ? s[0].scrollTop : null : s.scrollTo(void 0, e, a, t, n)
}

function Vs(...r) {
  let [e, a, t, n] = r;
  r.length === 3 && typeof t == "function" && ([e, a, n, t] = r);
  const s = this;
  return typeof e == "undefined" ? s.length > 0 ? s[0].scrollLeft : null : s.scrollTo(e, void 0, a, t, n)
}

function Ns(r, e) {
  const a = G(),
    t = this,
    n = {
      props: Object.assign({}, r),
      params: Object.assign({
        duration: 300,
        easing: "swing"
      }, e),
      elements: t,
      animating: !1,
      que: [],
      easingProgress(i, o) {
        return i === "swing" ? .5 - Math.cos(o * Math.PI) / 2 : typeof i == "function" ? i(o) : o
      },
      stop() {
        n.frameId && a.cancelAnimationFrame(n.frameId), n.animating = !1, n.elements.each(i => {
          const o = i;
          delete o.dom7AnimateInstance
        }), n.que = []
      },
      done(i) {
        if (n.animating = !1, n.elements.each(o => {
            const l = o;
            delete l.dom7AnimateInstance
          }), i && i(t), n.que.length > 0) {
          const o = n.que.shift();
          n.animate(o[0], o[1])
        }
      },
      animate(i, o) {
        if (n.animating) return n.que.push([i, o]), n;
        const l = [];
        n.elements.each((b, m) => {
          let v, E, $, w, C;
          b.dom7AnimateInstance || (n.elements[m].dom7AnimateInstance = n), l[m] = {
            container: b
          }, Object.keys(i).forEach(x => {
            v = a.getComputedStyle(b, null).getPropertyValue(x).replace(",", "."), E = parseFloat(v), $ = v.replace(E, ""), w = parseFloat(i[x]), C = i[x] + $, l[m][x] = {
              initialFullValue: v,
              initialValue: E,
              unit: $,
              finalValue: w,
              finalFullValue: C,
              currentValue: E
            }
          })
        });
        let c = null,
          d, p = 0,
          u = 0,
          g, h = !1;
        n.animating = !0;

        function f() {
          d = new Date().getTime();
          let b, m;
          h || (h = !0, o.begin && o.begin(t)), c === null && (c = d), o.progress && o.progress(t, Math.max(Math.min((d - c) / o.duration, 1), 0), c + o.duration - d < 0 ? 0 : c + o.duration - d, c), l.forEach(v => {
            const E = v;
            g || E.done || Object.keys(i).forEach($ => {
              if (g || E.done) return;
              b = Math.max(Math.min((d - c) / o.duration, 1), 0), m = n.easingProgress(o.easing, b);
              const {
                initialValue: w,
                finalValue: C,
                unit: x
              } = E[$];
              E[$].currentValue = w + m * (C - w);
              const M = E[$].currentValue;
              if ((C > w && M >= C || C < w && M <= C) && (E.container.style[$] = C + x, u += 1, u === Object.keys(i).length && (E.done = !0, p += 1), p === l.length && (g = !0)), g) {
                n.done(o.complete);
                return
              }
              E.container.style[$] = M + x
            })
          }), !g && (n.frameId = a.requestAnimationFrame(f))
        }
        return n.frameId = a.requestAnimationFrame(f), n
      }
    };
  if (n.elements.length === 0) return t;
  let s;
  for (let i = 0; i < n.elements.length; i += 1) n.elements[i].dom7AnimateInstance ? s = n.elements[i].dom7AnimateInstance : n.elements[i].dom7AnimateInstance = n;
  return s || (s = n), r === "stop" ? s.stop() : s.animate(n.props, n.params), t
}

function Ys() {
  const r = this;
  for (let e = 0; e < r.length; e += 1) r[e].dom7AnimateInstance && r[e].dom7AnimateInstance.stop()
}
const qs = "resize scroll".split(" ");

function Ce(r) {
  function e(...a) {
    if (typeof a[0] == "undefined") {
      for (let t = 0; t < this.length; t += 1) qs.indexOf(r) < 0 && (r in this[t] ? this[t][r]() : ie(this[t]).trigger(r));
      return this
    }
    return this.on(r, ...a)
  }
  return e
}
const js = Ce("click"),
  Ws = Ce("blur"),
  Xs = Ce("focus"),
  Gs = Ce("focusin"),
  Us = Ce("focusout"),
  _s = Ce("keyup"),
  Ks = Ce("keydown"),
  Qs = Ce("keypress"),
  Zs = Ce("submit"),
  Js = Ce("change"),
  ei = Ce("mousedown"),
  ti = Ce("mousemove"),
  ai = Ce("mouseup"),
  ri = Ce("mouseenter"),
  ni = Ce("mouseleave"),
  si = Ce("mouseout"),
  ii = Ce("mouseover"),
  oi = Ce("touchstart"),
  li = Ce("touchend"),
  ci = Ce("touchmove"),
  di = Ce("resize"),
  pi = Ce("scroll");
var er = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: ie,
  $: ie,
  add: Rs,
  addClass: Ln,
  animate: Ns,
  animationEnd: ts,
  append: bs,
  appendTo: ys,
  attr: Fn,
  blur: Ws,
  change: Js,
  children: Bs,
  click: js,
  closest: Is,
  css: ds,
  data: Yn,
  dataset: jn,
  detach: Ls,
  each: ps,
  empty: Hs,
  eq: vs,
  filter: us,
  find: Os,
  focus: Xs,
  focusin: Gs,
  focusout: Us,
  hasClass: zn,
  height: ns,
  hide: os,
  html: fs,
  index: gs,
  insertAfter: $s,
  insertBefore: Cs,
  is: ms,
  keydown: Ks,
  keypress: Qs,
  keyup: _s,
  mousedown: ei,
  mouseenter: ri,
  mouseleave: ni,
  mousemove: ti,
  mouseout: si,
  mouseover: ii,
  mouseup: ai,
  next: xs,
  nextAll: ks,
  off: Kn,
  offset: is,
  on: _n,
  once: Qn,
  outerHeight: ss,
  outerWidth: rs,
  parent: Ps,
  parents: As,
  prepend: Es,
  prependTo: ws,
  prev: Ts,
  prevAll: Ss,
  prop: Nn,
  remove: Ds,
  removeAttr: Vn,
  removeClass: Rn,
  removeData: qn,
  resize: di,
  scroll: pi,
  scrollLeft: Vs,
  scrollTo: zs,
  scrollTop: Fs,
  show: ls,
  siblings: Ms,
  stop: Ys,
  styles: cs,
  submit: Zs,
  text: hs,
  toggleClass: Hn,
  touchend: li,
  touchmove: ci,
  touchstart: oi,
  transform: Gn,
  transition: Un,
  transitionEnd: es,
  transitionStart: Jn,
  trigger: Zn,
  val: Wn,
  value: Xn,
  width: as
});
Object.keys(er).forEach(r => {
  r !== "$" && (ie.fn[r] = er[r])
});
var y = ie;

function at(r) {
  return r < 0 ? -1 : r === 0 ? 0 : 1
}

function tr(r, e, a) {
  return (1 - a) * r + a * e
}

function ui(r, e, a) {
  return a < r ? r : a > e ? e : a
}

function pa(r) {
  return (r %= 360) < 0 && (r += 360), r
}

function fi(r, e) {
  return pa(e - r) <= 180 ? 1 : -1
}

function hi(r, e) {
  return 180 - Math.abs(Math.abs(r - e) - 180)
}

function ua(r, e) {
  return [r[0] * e[0][0] + r[1] * e[0][1] + r[2] * e[0][2], r[0] * e[1][0] + r[1] * e[1][1] + r[2] * e[1][2], r[0] * e[2][0] + r[1] * e[2][1] + r[2] * e[2][2]]
}
const mi = [
    [.41233895, .35762064, .18051042],
    [.2126, .7152, .0722],
    [.01932141, .11916382, .95034478]
  ],
  gi = [
    [3.2413774792388685, -1.5376652402851851, -.49885366846268053],
    [-.9691452513005321, 1.8758853451067872, .04156585616912061],
    [.05562093689691305, -.20395524564742123, 1.0571799111220335]
  ],
  vi = [95.047, 100, 108.883];

function fa(r, e, a) {
  return (255 << 24 | (255 & r) << 16 | (255 & e) << 8 | 255 & a) >>> 0
}

function ar(r) {
  return fa(it(r[0]), it(r[1]), it(r[2]))
}

function rr(r) {
  return r >> 16 & 255
}

function nr(r) {
  return r >> 8 & 255
}

function sr(r) {
  return 255 & r
}

function bi(r, e, a) {
  const t = gi,
    n = t[0][0] * r + t[0][1] * e + t[0][2] * a,
    s = t[1][0] * r + t[1][1] * e + t[1][2] * a,
    i = t[2][0] * r + t[2][1] * e + t[2][2] * a;
  return fa(it(n), it(s), it(i))
}

function yi(r) {
  return ua([mt(rr(r)), mt(nr(r)), mt(sr(r))], mi)
}

function Ei(r) {
  const e = it(zt(r));
  return fa(e, e, e)
}

function ha(r) {
  return 116 * Ci(yi(r)[1] / 100) - 16
}

function zt(r) {
  return 100 * $i((r + 16) / 116)
}

function mt(r) {
  const e = r / 255;
  return e <= .040449936 ? e / 12.92 * 100 : 100 * Math.pow((e + .055) / 1.055, 2.4)
}

function it(r) {
  const e = r / 100;
  let a = 0;
  return a = e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055, ui(0, 255, Math.round(255 * a))
}

function wi() {
  return vi
}

function Ci(r) {
  return r > 216 / 24389 ? Math.pow(r, 1 / 3) : (903.2962962962963 * r + 16) / 116
}

function $i(r) {
  const e = r * r * r;
  return e > 216 / 24389 ? e : (116 * r - 16) / 903.2962962962963
}
class We {
  constructor(e, a, t, n, s, i, o, l, c, d) {
    this.n = e, this.aw = a, this.nbb = t, this.ncb = n, this.c = s, this.nc = i, this.rgbD = o, this.fl = l, this.fLRoot = c, this.z = d
  }
  static make(e, a, t, n, s) {
    e === void 0 && (e = wi()), a === void 0 && (a = 200 / Math.PI * zt(50) / 100), t === void 0 && (t = 50), n === void 0 && (n = 2), s === void 0 && (s = !1);
    const i = e,
      o = .401288 * i[0] + .650173 * i[1] + -.051461 * i[2],
      l = -.250268 * i[0] + 1.204414 * i[1] + .045854 * i[2],
      c = -.002079 * i[0] + .048952 * i[1] + .953127 * i[2],
      d = .8 + n / 10,
      p = d >= .9 ? tr(.59, .69, 10 * (d - .9)) : tr(.525, .59, 10 * (d - .8));
    let u = s ? 1 : d * (1 - 1 / 3.6 * Math.exp((-a - 42) / 92));
    u = u > 1 ? 1 : u < 0 ? 0 : u;
    const g = d,
      h = [u * (100 / o) + 1 - u, u * (100 / l) + 1 - u, u * (100 / c) + 1 - u],
      f = 1 / (5 * a + 1),
      b = f * f * f * f,
      m = 1 - b,
      v = b * a + .1 * m * m * Math.cbrt(5 * a),
      E = zt(t) / e[1],
      $ = 1.48 + Math.sqrt(E),
      w = .725 / Math.pow(E, .2),
      C = w,
      x = [Math.pow(v * h[0] * o / 100, .42), Math.pow(v * h[1] * l / 100, .42), Math.pow(v * h[2] * c / 100, .42)],
      M = [400 * x[0] / (x[0] + 27.13), 400 * x[1] / (x[1] + 27.13), 400 * x[2] / (x[2] + 27.13)];
    return new We(E, (2 * M[0] + M[1] + .05 * M[2]) * w, w, C, p, g, h, v, Math.pow(v, .25), $)
  }
}
We.DEFAULT = We.make();
class Se {
  constructor(e, a, t, n, s, i, o, l, c) {
    this.hue = e, this.chroma = a, this.j = t, this.q = n, this.m = s, this.s = i, this.jstar = o, this.astar = l, this.bstar = c
  }
  distance(e) {
    const a = this.jstar - e.jstar,
      t = this.astar - e.astar,
      n = this.bstar - e.bstar,
      s = Math.sqrt(a * a + t * t + n * n);
    return 1.41 * Math.pow(s, .63)
  }
  static fromInt(e) {
    return Se.fromIntInViewingConditions(e, We.DEFAULT)
  }
  static fromIntInViewingConditions(e, a) {
    const t = (65280 & e) >> 8,
      n = 255 & e,
      s = mt((16711680 & e) >> 16),
      i = mt(t),
      o = mt(n),
      l = .41233895 * s + .35762064 * i + .18051042 * o,
      c = .2126 * s + .7152 * i + .0722 * o,
      d = .01932141 * s + .11916382 * i + .95034478 * o,
      p = .401288 * l + .650173 * c - .051461 * d,
      u = -.250268 * l + 1.204414 * c + .045854 * d,
      g = -.002079 * l + .048952 * c + .953127 * d,
      h = a.rgbD[0] * p,
      f = a.rgbD[1] * u,
      b = a.rgbD[2] * g,
      m = Math.pow(a.fl * Math.abs(h) / 100, .42),
      v = Math.pow(a.fl * Math.abs(f) / 100, .42),
      E = Math.pow(a.fl * Math.abs(b) / 100, .42),
      $ = 400 * at(h) * m / (m + 27.13),
      w = 400 * at(f) * v / (v + 27.13),
      C = 400 * at(b) * E / (E + 27.13),
      x = (11 * $ + -12 * w + C) / 11,
      M = ($ + w - 2 * C) / 9,
      A = (20 * $ + 20 * w + 21 * C) / 20,
      B = (40 * $ + 20 * w + C) / 20,
      S = 180 * Math.atan2(M, x) / Math.PI,
      P = S < 0 ? S + 360 : S >= 360 ? S - 360 : S,
      k = P * Math.PI / 180,
      I = B * a.nbb,
      R = 100 * Math.pow(I / a.aw, a.c * a.z),
      D = 4 / a.c * Math.sqrt(R / 100) * (a.aw + 4) * a.fLRoot,
      z = P < 20.14 ? P + 360 : P,
      O = 5e4 / 13 * (.25 * (Math.cos(z * Math.PI / 180 + 2) + 3.8)) * a.nc * a.ncb * Math.sqrt(x * x + M * M) / (A + .305),
      L = Math.pow(O, .9) * Math.pow(1.64 - Math.pow(.29, a.n), .73),
      N = L * Math.sqrt(R / 100),
      F = N * a.fLRoot,
      V = 50 * Math.sqrt(L * a.c / (a.aw + 4)),
      U = (1 + 100 * .007) * R / (1 + .007 * R),
      Z = 1 / .0228 * Math.log(1 + .0228 * F),
      J = Z * Math.cos(k),
      X = Z * Math.sin(k);
    return new Se(P, N, R, D, F, V, U, J, X)
  }
  static fromJch(e, a, t) {
    return Se.fromJchInViewingConditions(e, a, t, We.DEFAULT)
  }
  static fromJchInViewingConditions(e, a, t, n) {
    const s = 4 / n.c * Math.sqrt(e / 100) * (n.aw + 4) * n.fLRoot,
      i = a * n.fLRoot,
      o = a / Math.sqrt(e / 100),
      l = 50 * Math.sqrt(o * n.c / (n.aw + 4)),
      c = t * Math.PI / 180,
      d = (1 + 100 * .007) * e / (1 + .007 * e),
      p = 1 / .0228 * Math.log(1 + .0228 * i),
      u = p * Math.cos(c),
      g = p * Math.sin(c);
    return new Se(t, a, e, s, i, l, d, u, g)
  }
  static fromUcs(e, a, t) {
    return Se.fromUcsInViewingConditions(e, a, t, We.DEFAULT)
  }
  static fromUcsInViewingConditions(e, a, t, n) {
    const s = a,
      i = t,
      o = Math.sqrt(s * s + i * i),
      l = (Math.exp(.0228 * o) - 1) / .0228 / n.fLRoot;
    let c = Math.atan2(i, s) * (180 / Math.PI);
    c < 0 && (c += 360);
    const d = e / (1 - .007 * (e - 100));
    return Se.fromJchInViewingConditions(d, l, c, n)
  }
  toInt() {
    return this.viewed(We.DEFAULT)
  }
  viewed(e) {
    const a = this.chroma === 0 || this.j === 0 ? 0 : this.chroma / Math.sqrt(this.j / 100),
      t = Math.pow(a / Math.pow(1.64 - Math.pow(.29, e.n), .73), 1 / .9),
      n = this.hue * Math.PI / 180,
      s = .25 * (Math.cos(n + 2) + 3.8),
      i = e.aw * Math.pow(this.j / 100, 1 / e.c / e.z),
      o = s * (5e4 / 13) * e.nc * e.ncb,
      l = i / e.nbb,
      c = Math.sin(n),
      d = Math.cos(n),
      p = 23 * (l + .305) * t / (23 * o + 11 * t * d + 108 * t * c),
      u = p * d,
      g = p * c,
      h = (460 * l + 451 * u + 288 * g) / 1403,
      f = (460 * l - 891 * u - 261 * g) / 1403,
      b = (460 * l - 220 * u - 6300 * g) / 1403,
      m = Math.max(0, 27.13 * Math.abs(h) / (400 - Math.abs(h))),
      v = at(h) * (100 / e.fl) * Math.pow(m, 1 / .42),
      E = Math.max(0, 27.13 * Math.abs(f) / (400 - Math.abs(f))),
      $ = at(f) * (100 / e.fl) * Math.pow(E, 1 / .42),
      w = Math.max(0, 27.13 * Math.abs(b) / (400 - Math.abs(b))),
      C = at(b) * (100 / e.fl) * Math.pow(w, 1 / .42),
      x = v / e.rgbD[0],
      M = $ / e.rgbD[1],
      A = C / e.rgbD[2];
    return bi(1.86206786 * x - 1.01125463 * M + .14918677 * A, .38752654 * x + .62144744 * M - .00897398 * A, -.0158415 * x - .03412294 * M + 1.04996444 * A)
  }
}
class ne {
  static sanitizeRadians(e) {
    return (e + 8 * Math.PI) % (2 * Math.PI)
  }
  static trueDelinearized(e) {
    const a = e / 100;
    let t = 0;
    return t = a <= .0031308 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055, 255 * t
  }
  static chromaticAdaptation(e) {
    const a = Math.pow(Math.abs(e), .42);
    return 400 * at(e) * a / (a + 27.13)
  }
  static hueOf(e) {
    const a = ua(e, ne.SCALED_DISCOUNT_FROM_LINRGB),
      t = ne.chromaticAdaptation(a[0]),
      n = ne.chromaticAdaptation(a[1]),
      s = ne.chromaticAdaptation(a[2]),
      i = (11 * t + -12 * n + s) / 11,
      o = (t + n - 2 * s) / 9;
    return Math.atan2(o, i)
  }
  static areInCyclicOrder(e, a, t) {
    return ne.sanitizeRadians(a - e) < ne.sanitizeRadians(t - e)
  }
  static intercept(e, a, t) {
    return (a - e) / (t - e)
  }
  static lerpPoint(e, a, t) {
    return [e[0] + (t[0] - e[0]) * a, e[1] + (t[1] - e[1]) * a, e[2] + (t[2] - e[2]) * a]
  }
  static setCoordinate(e, a, t, n) {
    const s = ne.intercept(e[n], a, t[n]);
    return ne.lerpPoint(e, s, t)
  }
  static isBounded(e) {
    return 0 <= e && e <= 100
  }
  static nthVertex(e, a) {
    const t = ne.Y_FROM_LINRGB[0],
      n = ne.Y_FROM_LINRGB[1],
      s = ne.Y_FROM_LINRGB[2],
      i = a % 4 <= 1 ? 0 : 100,
      o = a % 2 == 0 ? 0 : 100;
    if (a < 4) {
      const l = i,
        c = o,
        d = (e - l * n - c * s) / t;
      return ne.isBounded(d) ? [d, l, c] : [-1, -1, -1]
    }
    if (a < 8) {
      const l = i,
        c = o,
        d = (e - c * t - l * s) / n;
      return ne.isBounded(d) ? [c, d, l] : [-1, -1, -1]
    } {
      const l = i,
        c = o,
        d = (e - l * t - c * n) / s;
      return ne.isBounded(d) ? [l, c, d] : [-1, -1, -1]
    }
  }
  static bisectToSegment(e, a) {
    let t = [-1, -1, -1],
      n = t,
      s = 0,
      i = 0,
      o = !1,
      l = !0;
    for (let c = 0; c < 12; c++) {
      const d = ne.nthVertex(e, c);
      if (d[0] < 0) continue;
      const p = ne.hueOf(d);
      o ? (l || ne.areInCyclicOrder(s, p, i)) && (l = !1, ne.areInCyclicOrder(s, a, p) ? (n = d, i = p) : (t = d, s = p)) : (t = d, n = d, s = p, i = p, o = !0)
    }
    return [t, n]
  }
  static midpoint(e, a) {
    return [(e[0] + a[0]) / 2, (e[1] + a[1]) / 2, (e[2] + a[2]) / 2]
  }
  static criticalPlaneBelow(e) {
    return Math.floor(e - .5)
  }
  static criticalPlaneAbove(e) {
    return Math.ceil(e - .5)
  }
  static bisectToLimit(e, a) {
    const t = ne.bisectToSegment(e, a);
    let n = t[0],
      s = ne.hueOf(n),
      i = t[1];
    for (let o = 0; o < 3; o++)
      if (n[o] !== i[o]) {
        let l = -1,
          c = 255;
        n[o] < i[o] ? (l = ne.criticalPlaneBelow(ne.trueDelinearized(n[o])), c = ne.criticalPlaneAbove(ne.trueDelinearized(i[o]))) : (l = ne.criticalPlaneAbove(ne.trueDelinearized(n[o])), c = ne.criticalPlaneBelow(ne.trueDelinearized(i[o])));
        for (let d = 0; d < 8 && !(Math.abs(c - l) <= 1); d++) {
          const p = Math.floor((l + c) / 2),
            u = ne.CRITICAL_PLANES[p],
            g = ne.setCoordinate(n, u, i, o),
            h = ne.hueOf(g);
          ne.areInCyclicOrder(s, a, h) ? (i = g, c = p) : (n = g, s = h, l = p)
        }
      } return ne.midpoint(n, i)
  }
  static inverseChromaticAdaptation(e) {
    const a = Math.abs(e),
      t = Math.max(0, 27.13 * a / (400 - a));
    return at(e) * Math.pow(t, 1 / .42)
  }
  static findResultByJ(e, a, t) {
    let n = 11 * Math.sqrt(t);
    const s = We.DEFAULT,
      i = 1 / Math.pow(1.64 - Math.pow(.29, s.n), .73),
      o = .25 * (Math.cos(e + 2) + 3.8) * (5e4 / 13) * s.nc * s.ncb,
      l = Math.sin(e),
      c = Math.cos(e);
    for (let d = 0; d < 5; d++) {
      const p = n / 100,
        u = a === 0 || n === 0 ? 0 : a / Math.sqrt(p),
        g = Math.pow(u * i, 1 / .9),
        h = s.aw * Math.pow(p, 1 / s.c / s.z) / s.nbb,
        f = 23 * (h + .305) * g / (23 * o + 11 * g * c + 108 * g * l),
        b = f * c,
        m = f * l,
        v = (460 * h + 451 * b + 288 * m) / 1403,
        E = (460 * h - 891 * b - 261 * m) / 1403,
        $ = (460 * h - 220 * b - 6300 * m) / 1403,
        w = ua([ne.inverseChromaticAdaptation(v), ne.inverseChromaticAdaptation(E), ne.inverseChromaticAdaptation($)], ne.LINRGB_FROM_SCALED_DISCOUNT);
      if (w[0] < 0 || w[1] < 0 || w[2] < 0) return 0;
      const C = ne.Y_FROM_LINRGB[0],
        x = ne.Y_FROM_LINRGB[1],
        M = ne.Y_FROM_LINRGB[2],
        A = C * w[0] + x * w[1] + M * w[2];
      if (A <= 0) return 0;
      if (d === 4 || Math.abs(A - t) < .002) return w[0] > 100.01 || w[1] > 100.01 || w[2] > 100.01 ? 0 : ar(w);
      n -= (A - t) * n / (2 * A)
    }
    return 0
  }
  static solveToInt(e, a, t) {
    if (a < 1e-4 || t < 1e-4 || t > 99.9999) return Ei(t);
    const n = (e = pa(e)) / 180 * Math.PI,
      s = zt(t),
      i = ne.findResultByJ(n, a, s);
    return i !== 0 ? i : ar(ne.bisectToLimit(s, n))
  }
  static solveToCam(e, a, t) {
    return Se.fromInt(ne.solveToInt(e, a, t))
  }
}
ne.SCALED_DISCOUNT_FROM_LINRGB = [
  [.001200833568784504, .002389694492170889, .0002795742885861124],
  [.0005891086651375999, .0029785502573438758, .0003270666104008398],
  [.00010146692491640572, .0005364214359186694, .0032979401770712076]
], ne.LINRGB_FROM_SCALED_DISCOUNT = [
  [1373.2198709594231, -1100.4251190754821, -7.278681089101213],
  [-271.815969077903, 559.6580465940733, -32.46047482791194],
  [1.9622899599665666, -57.173814538844006, 308.7233197812385]
], ne.Y_FROM_LINRGB = [.2126, .7152, .0722], ne.CRITICAL_PLANES = [.015176349177441876, .045529047532325624, .07588174588720938, .10623444424209313, .13658714259697685, .16693984095186062, .19729253930674434, .2276452376616281, .2579979360165119, .28835063437139563, .3188300904430532, .350925934958123, .3848314933096426, .42057480301049466, .458183274052838, .4976837250274023, .5391024159806381, .5824650784040898, .6277969426914107, .6751227633498623, .7244668422128921, .775853049866786, .829304845476233, .8848452951698498, .942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class Ne {
  constructor(e) {
    this.argb = e;
    const a = Se.fromInt(e);
    this.internalHue = a.hue, this.internalChroma = a.chroma, this.internalTone = ha(e), this.argb = e
  }
  static from(e, a, t) {
    return new Ne(ne.solveToInt(e, a, t))
  }
  static fromInt(e) {
    return new Ne(e)
  }
  toInt() {
    return this.argb
  }
  get hue() {
    return this.internalHue
  }
  set hue(e) {
    this.setInternalState(ne.solveToInt(e, this.internalChroma, this.internalTone))
  }
  get chroma() {
    return this.internalChroma
  }
  set chroma(e) {
    this.setInternalState(ne.solveToInt(this.internalHue, e, this.internalTone))
  }
  get tone() {
    return this.internalTone
  }
  set tone(e) {
    this.setInternalState(ne.solveToInt(this.internalHue, this.internalChroma, e))
  }
  setInternalState(e) {
    const a = Se.fromInt(e);
    this.internalHue = a.hue, this.internalChroma = a.chroma, this.internalTone = ha(e), this.argb = e
  }
}
class ma {
  static harmonize(e, a) {
    const t = Ne.fromInt(e),
      n = Ne.fromInt(a),
      s = hi(t.hue, n.hue),
      i = Math.min(.5 * s, 15),
      o = pa(t.hue + i * fi(t.hue, n.hue));
    return Ne.from(o, t.chroma, t.tone).toInt()
  }
  static hctHue(e, a, t) {
    const n = ma.cam16Ucs(e, a, t),
      s = Se.fromInt(n),
      i = Se.fromInt(e);
    return Ne.from(s.hue, i.chroma, ha(e)).toInt()
  }
  static cam16Ucs(e, a, t) {
    const n = Se.fromInt(e),
      s = Se.fromInt(a),
      i = n.jstar,
      o = n.astar,
      l = n.bstar,
      c = i + (s.jstar - i) * t,
      d = o + (s.astar - o) * t,
      p = l + (s.bstar - l) * t;
    return Se.fromUcs(c, d, p).toInt()
  }
}
class Me {
  constructor(e, a) {
    this.hue = e, this.chroma = a, this.cache = new Map
  }
  static fromInt(e) {
    const a = Ne.fromInt(e);
    return Me.fromHueAndChroma(a.hue, a.chroma)
  }
  static fromHueAndChroma(e, a) {
    return new Me(e, a)
  }
  tone(e) {
    let a = this.cache.get(e);
    return a === void 0 && (a = Ne.from(this.hue, this.chroma, e).toInt(), this.cache.set(e, a)), a
  }
}
class Xe {
  constructor(e, a) {
    const t = Ne.fromInt(e),
      n = t.hue,
      s = t.chroma;
    a ? (this.a1 = Me.fromHueAndChroma(n, s), this.a2 = Me.fromHueAndChroma(n, s / 3), this.a3 = Me.fromHueAndChroma(n + 60, s / 2), this.n1 = Me.fromHueAndChroma(n, Math.min(s / 12, 4)), this.n2 = Me.fromHueAndChroma(n, Math.min(s / 6, 8))) : (this.a1 = Me.fromHueAndChroma(n, Math.max(48, s)), this.a2 = Me.fromHueAndChroma(n, 16), this.a3 = Me.fromHueAndChroma(n + 60, 24), this.n1 = Me.fromHueAndChroma(n, 4), this.n2 = Me.fromHueAndChroma(n, 8)), this.error = Me.fromHueAndChroma(25, 84)
  }
  static of (e) {
    return new Xe(e, !1)
  }
  static contentOf(e) {
    return new Xe(e, !0)
  }
}
class Ge {
  constructor(e) {
    this.props = e
  }
  get primary() {
    return this.props.primary
  }
  get onPrimary() {
    return this.props.onPrimary
  }
  get primaryContainer() {
    return this.props.primaryContainer
  }
  get onPrimaryContainer() {
    return this.props.onPrimaryContainer
  }
  get secondary() {
    return this.props.secondary
  }
  get onSecondary() {
    return this.props.onSecondary
  }
  get secondaryContainer() {
    return this.props.secondaryContainer
  }
  get onSecondaryContainer() {
    return this.props.onSecondaryContainer
  }
  get tertiary() {
    return this.props.tertiary
  }
  get onTertiary() {
    return this.props.onTertiary
  }
  get tertiaryContainer() {
    return this.props.tertiaryContainer
  }
  get onTertiaryContainer() {
    return this.props.onTertiaryContainer
  }
  get error() {
    return this.props.error
  }
  get onError() {
    return this.props.onError
  }
  get errorContainer() {
    return this.props.errorContainer
  }
  get onErrorContainer() {
    return this.props.onErrorContainer
  }
  get background() {
    return this.props.background
  }
  get onBackground() {
    return this.props.onBackground
  }
  get surface() {
    return this.props.surface
  }
  get onSurface() {
    return this.props.onSurface
  }
  get surfaceVariant() {
    return this.props.surfaceVariant
  }
  get onSurfaceVariant() {
    return this.props.onSurfaceVariant
  }
  get outline() {
    return this.props.outline
  }
  get outlineVariant() {
    return this.props.outlineVariant
  }
  get shadow() {
    return this.props.shadow
  }
  get scrim() {
    return this.props.scrim
  }
  get inverseSurface() {
    return this.props.inverseSurface
  }
  get inverseOnSurface() {
    return this.props.inverseOnSurface
  }
  get inversePrimary() {
    return this.props.inversePrimary
  }
  static light(e) {
    return Ge.lightFromCorePalette(Xe.of(e))
  }
  static dark(e) {
    return Ge.darkFromCorePalette(Xe.of(e))
  }
  static lightContent(e) {
    return Ge.lightFromCorePalette(Xe.contentOf(e))
  }
  static darkContent(e) {
    return Ge.darkFromCorePalette(Xe.contentOf(e))
  }
  static lightFromCorePalette(e) {
    return new Ge({
      primary: e.a1.tone(40),
      onPrimary: e.a1.tone(100),
      primaryContainer: e.a1.tone(90),
      onPrimaryContainer: e.a1.tone(10),
      secondary: e.a2.tone(40),
      onSecondary: e.a2.tone(100),
      secondaryContainer: e.a2.tone(90),
      onSecondaryContainer: e.a2.tone(10),
      tertiary: e.a3.tone(40),
      onTertiary: e.a3.tone(100),
      tertiaryContainer: e.a3.tone(90),
      onTertiaryContainer: e.a3.tone(10),
      error: e.error.tone(40),
      onError: e.error.tone(100),
      errorContainer: e.error.tone(90),
      onErrorContainer: e.error.tone(10),
      background: e.n1.tone(99),
      onBackground: e.n1.tone(10),
      surface: e.n1.tone(99),
      onSurface: e.n1.tone(10),
      surfaceVariant: e.n2.tone(90),
      onSurfaceVariant: e.n2.tone(30),
      outline: e.n2.tone(50),
      outlineVariant: e.n2.tone(80),
      shadow: e.n1.tone(0),
      scrim: e.n1.tone(0),
      inverseSurface: e.n1.tone(20),
      inverseOnSurface: e.n1.tone(95),
      inversePrimary: e.a1.tone(80)
    })
  }
  static darkFromCorePalette(e) {
    return new Ge({
      primary: e.a1.tone(80),
      onPrimary: e.a1.tone(20),
      primaryContainer: e.a1.tone(30),
      onPrimaryContainer: e.a1.tone(90),
      secondary: e.a2.tone(80),
      onSecondary: e.a2.tone(20),
      secondaryContainer: e.a2.tone(30),
      onSecondaryContainer: e.a2.tone(90),
      tertiary: e.a3.tone(80),
      onTertiary: e.a3.tone(20),
      tertiaryContainer: e.a3.tone(30),
      onTertiaryContainer: e.a3.tone(90),
      error: e.error.tone(80),
      onError: e.error.tone(20),
      errorContainer: e.error.tone(30),
      onErrorContainer: e.error.tone(80),
      background: e.n1.tone(10),
      onBackground: e.n1.tone(90),
      surface: e.n1.tone(10),
      onSurface: e.n1.tone(90),
      surfaceVariant: e.n2.tone(30),
      onSurfaceVariant: e.n2.tone(80),
      outline: e.n2.tone(60),
      outlineVariant: e.n2.tone(30),
      shadow: e.n1.tone(0),
      scrim: e.n1.tone(0),
      inverseSurface: e.n1.tone(90),
      inverseOnSurface: e.n1.tone(20),
      inversePrimary: e.a1.tone(40)
    })
  }
  toJSON() {
    return Object.assign({}, this.props)
  }
}
const gt = r => {
    const e = rr(r),
      a = nr(r),
      t = sr(r),
      n = [e.toString(16), a.toString(16), t.toString(16)];
    for (const [s, i] of n.entries()) i.length === 1 && (n[s] = "0" + i);
    return "#" + n.join("")
  },
  ga = r => {
    const e = (r = r.replace("#", "")).length === 3,
      a = r.length === 6,
      t = r.length === 8;
    if (!e && !a && !t) throw new Error("unexpected hex " + r);
    let n = 0,
      s = 0,
      i = 0;
    return e ? (n = Ue(r.slice(0, 1).repeat(2)), s = Ue(r.slice(1, 2).repeat(2)), i = Ue(r.slice(2, 3).repeat(2))) : a ? (n = Ue(r.slice(0, 2)), s = Ue(r.slice(2, 4)), i = Ue(r.slice(4, 6))) : t && (n = Ue(r.slice(2, 4)), s = Ue(r.slice(4, 6)), i = Ue(r.slice(6, 8))), (255 << 24 | (255 & n) << 16 | (255 & s) << 8 | 255 & i) >>> 0
  };

function Ue(r) {
  return parseInt(r, 16)
}

function xi(r, e) {
  e === void 0 && (e = []);
  const a = Xe.of(r);
  return {
    source: r,
    schemes: {
      light: Ge.light(r),
      dark: Ge.dark(r)
    },
    palettes: {
      primary: a.a1,
      secondary: a.a2,
      tertiary: a.a3,
      neutral: a.n1,
      neutralVariant: a.n2,
      error: a.error
    },
    customColors: e.map(t => ki(r, t))
  }
}

function ki(r, e) {
  let a = e.value;
  const t = a,
    n = r;
  e.blend && (a = ma.harmonize(t, n));
  const s = Xe.of(a).a1;
  return {
    color: e,
    value: a,
    light: {
      color: s.tone(40),
      onColor: s.tone(100),
      colorContainer: s.tone(90),
      onColorContainer: s.tone(10)
    },
    dark: {
      color: s.tone(80),
      onColor: s.tone(20),
      colorContainer: s.tone(30),
      onColorContainer: s.tone(90)
    }
  }
}

function ir(r) {
  const e = Math.round,
    a = r.length,
    t = {};
  return r.slice(0, 3).toLowerCase() === "rgb" ? (r = r.replace(" ", "").split(","), t[0] = parseInt(r[0].slice(r[3].toLowerCase() === "a" ? 5 : 4), 10), t[1] = parseInt(r[1], 10), t[2] = parseInt(r[2], 10), t[3] = r[3] ? parseFloat(r[3]) : -1) : (a < 6 ? r = parseInt(String(r[1]) + r[1] + r[2] + r[2] + r[3] + r[3] + (a > 4 ? String(r[4]) + r[4] : ""), 16) : r = parseInt(r.slice(1), 16), t[0] = r >> 16 & 255, t[1] = r >> 8 & 255, t[2] = r & 255, t[3] = a === 9 || a === 5 ? e((r >> 24 & 255) / 255 * 1e4) / 1e4 : -1), t
}

function or(r, e, a) {
  a === void 0 && (a = .5);
  const t = Math.round;
  r = r.trim(), e = e.trim(), a = a < 0 ? a * -1 : a;
  const s = ir(r),
    i = ir(e);
  return e[0] === "r" ? "rgb" + (e[3] === "a" ? "a(" : "(") + t((i[0] - s[0]) * a + s[0]) + "," + t((i[1] - s[1]) * a + s[1]) + "," + t((i[2] - s[2]) * a + s[2]) + (s[3] < 0 && i[3] < 0 ? "" : "," + (s[3] > -1 && i[3] > -1 ? t(((i[3] - s[3]) * a + s[3]) * 1e4) / 1e4 : i[3] < 0 ? s[3] : i[3])) + ")" : "#" + (4294967296 + (s[3] > -1 && i[3] > -1 ? t(((i[3] - s[3]) * a + s[3]) * 255) : i[3] > -1 ? t(i[3] * 255) : s[3] > -1 ? t(s[3] * 255) : 255) * 16777216 + t((i[0] - s[0]) * a + s[0]) * 65536 + t((i[1] - s[1]) * a + s[1]) * 256 + t((i[2] - s[2]) * a + s[2])).toString(16).slice(s[3] > -1 || i[3] > -1 ? 1 : 3)
}
const Ti = function (r) {
  r === void 0 && (r = "");
  const e = xi(ga(`#${r.replace("#","")}`));
  [.05, .08, .11, .12, .14].forEach((i, o) => {
    e.schemes.light.props[`surface${o+1}`] = ga(or(gt(e.schemes.light.props.surface), gt(e.schemes.light.props.primary), i)), e.schemes.dark.props[`surface${o+1}`] = ga(or(gt(e.schemes.dark.props.surface), gt(e.schemes.dark.props.primary), i))
  });
  const a = i => i.split("").map(o => o.toUpperCase() === o && o !== "-" && o !== "7" ? `-${o.toLowerCase()}` : o).join(""),
    t = i => ["tertiary", "shadow", "scrim", "error", "background"].filter(l => i.toLowerCase().includes(l)).length > 0,
    n = {},
    s = {};
  return Object.keys(e.schemes.light.props).forEach(i => {
    t(i) || (n[a(`--f7-md-${i}`)] = gt(e.schemes.light.props[i]))
  }), Object.keys(e.schemes.dark.props).forEach(i => {
    t(i) || (s[a(`--f7-md-${i}`)] = gt(e.schemes.dark.props[i]))
  }), {
    light: n,
    dark: s
  }
};
let lr = 0;

function Si() {
  return lr += 1, lr
}

function vt(r, e) {
  r === void 0 && (r = "xxxxxxxxxx"), e === void 0 && (e = "0123456789abcdef");
  const a = e.length;
  return r.replace(/x/g, () => e[Math.floor(Math.random() * a)])
}
const ot = `
  <span class="preloader-inner">
    <svg viewBox="0 0 36 36">
      <circle cx="18" cy="18" r="16"></circle>
    </svg>
  </span>
`.trim(),
  lt = `
  <span class="preloader-inner">
    ${[0,1,2,3,4,5,6,7].map(()=>'<span class="preloader-inner-line"></span>').join("")}
  </span>
`.trim();

function Ye(r) {
  let e;
  return r.split("").map((a, t) => a.match(/[A-Z]/) && t !== 0 && !e ? (e = !0, `:${a.toLowerCase()}`) : a.toLowerCase()).join("")
}

function $e(r) {
  const e = r;
  Object.keys(e).forEach(a => {
    try {
      e[a] = null
    } catch {}
    try {
      delete e[a]
    } catch {}
  })
}

function va(r) {
  return G().requestAnimationFrame(r)
}

function Mi(r) {
  return G().cancelAnimationFrame(r)
}

function ke(r, e) {
  return e === void 0 && (e = 0), setTimeout(r, e)
}

function Pe(r) {
  return va(() => {
    va(r)
  })
}

function Ae() {
  return Date.now()
}

function kt(r) {
  const e = G(),
    a = {};
  let t = r || e.location.href,
    n, s, i, o;
  if (typeof t == "string" && t.length)
    for (t = t.indexOf("?") > -1 ? t.replace(/\S*\?/, "") : "", s = t.split("&").filter(l => l !== ""), o = s.length, n = 0; n < o; n += 1) i = s[n].replace(/#\S+/g, "").split("="), a[decodeURIComponent(i[0])] = typeof i[1] == "undefined" ? void 0 : decodeURIComponent(i.slice(1).join("=")) || "";
  return a
}

function Ft(r, e) {
  e === void 0 && (e = "x");
  const a = G();
  let t, n, s;
  const i = a.getComputedStyle(r, null);
  return a.WebKitCSSMatrix ? (n = i.transform || i.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(o => o.replace(",", ".")).join(", ")), s = new a.WebKitCSSMatrix(n === "none" ? "" : n)) : (s = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = s.toString().split(",")), e === "x" && (a.WebKitCSSMatrix ? n = s.m41 : t.length === 16 ? n = parseFloat(t[12]) : n = parseFloat(t[4])), e === "y" && (a.WebKitCSSMatrix ? n = s.m42 : t.length === 16 ? n = parseFloat(t[13]) : n = parseFloat(t[5])), n || 0
}

function ct(r, e) {
  if (e === void 0 && (e = []), typeof r == "string") return r;
  const a = [],
    t = "&";
  let n;

  function s(o) {
    if (e.length > 0) {
      let l = "";
      for (let c = 0; c < e.length; c += 1) c === 0 ? l += e[c] : l += `[${encodeURIComponent(e[c])}]`;
      return `${l}[${encodeURIComponent(o)}]`
    }
    return encodeURIComponent(o)
  }

  function i(o) {
    return encodeURIComponent(o)
  }
  return Object.keys(r).forEach(o => {
    let l;
    if (Array.isArray(r[o])) {
      l = [];
      for (let c = 0; c < r[o].length; c += 1) !Array.isArray(r[o][c]) && typeof r[o][c] == "object" ? (n = e.slice(), n.push(o), n.push(String(c)), l.push(ct(r[o][c], n))) : l.push(`${s(o)}[]=${i(r[o][c])}`);
      l.length > 0 && a.push(l.join(t))
    } else r[o] === null || r[o] === "" ? a.push(`${s(o)}=`) : typeof r[o] == "object" ? (n = e.slice(), n.push(o), l = ct(r[o], n), l !== "" && a.push(l)) : typeof r[o] != "undefined" && r[o] !== "" ? a.push(`${s(o)}=${i(r[o])}`) : r[o] === "" && a.push(s(o))
  }), a.join(t)
}

function dt(r) {
  return typeof r == "object" && r !== null && r.constructor && r.constructor === Object
}

function Vt() {
  for (var r = arguments.length, e = new Array(r), a = 0; a < r; a++) e[a] = arguments[a];
  const t = e[0];
  e.splice(0, 1);
  const n = e;
  for (let s = 0; s < n.length; s += 1) {
    const i = e[s];
    if (i != null) {
      const o = Object.keys(Object(i));
      for (let l = 0, c = o.length; l < c; l += 1) {
        const d = o[l],
          p = Object.getOwnPropertyDescriptor(i, d);
        p !== void 0 && p.enumerable && (t[d] = i[d])
      }
    }
  }
  return t
}

function H() {
  let r = !0,
    e, a;
  for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s];
  typeof n[0] == "boolean" ? (r = n[0], e = n[1], n.splice(0, 2), a = n) : (e = n[0], n.splice(0, 1), a = n);
  for (let i = 0; i < a.length; i += 1) {
    const o = n[i];
    if (o != null) {
      const l = Object.keys(Object(o));
      for (let c = 0, d = l.length; c < d; c += 1) {
        const p = l[c],
          u = Object.getOwnPropertyDescriptor(o, p);
        u !== void 0 && u.enumerable && (r ? dt(e[p]) && dt(o[p]) ? H(e[p], o[p]) : !dt(e[p]) && dt(o[p]) ? (e[p] = {}, H(e[p], o[p])) : e[p] = o[p] : e[p] = o[p])
      }
    }
  }
  return e
}

function _e(r) {
  const e = r.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (t, n, s, i) => n + n + s + s + i + i),
    a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return a ? a.slice(1).map(t => parseInt(t, 16)) : null
}

function Ke(r, e, a) {
  return `#${[r,e,a].map(n=>{const s=n.toString(16);return s.length===1?`0${s}`:s}).join("")}`
}

function Nt(r, e, a) {
  r /= 255, e /= 255, a /= 255;
  const t = Math.max(r, e, a),
    n = Math.min(r, e, a),
    s = t - n;
  let i;
  s === 0 ? i = 0 : t === r ? i = (e - a) / s % 6 : t === e ? i = (a - r) / s + 2 : t === a && (i = (r - e) / s + 4);
  const o = (n + t) / 2,
    l = s === 0 ? 0 : s / (1 - Math.abs(2 * o - 1));
  return i < 0 && (i = 360 / 60 + i), [i * 60, l, o]
}

function bt(r, e, a) {
  const t = (1 - Math.abs(2 * a - 1)) * e,
    n = r / 60,
    s = t * (1 - Math.abs(n % 2 - 1));
  let i;
  Number.isNaN(r) || typeof r == "undefined" ? i = [0, 0, 0] : n <= 1 ? i = [t, s, 0] : n <= 2 ? i = [s, t, 0] : n <= 3 ? i = [0, t, s] : n <= 4 ? i = [0, s, t] : n <= 5 ? i = [s, 0, t] : n <= 6 && (i = [t, 0, s]);
  const o = a - t / 2;
  return i.map(l => Math.max(0, Math.min(255, Math.round(255 * (l + o)))))
}

function Qe(r, e, a) {
  const t = {
      h: r,
      s: 0,
      l: 0
    },
    n = {
      h: r,
      s: e,
      b: a
    };
  return t.l = (2 - n.s) * n.b / 2, t.s = t.l && t.l < 1 ? n.s * n.b / (t.l < .5 ? t.l * 2 : 2 - t.l * 2) : t.s, [t.h, t.s, t.l]
}

function Tt(r, e, a) {
  const t = {
      h: r,
      s: 0,
      b: 0
    },
    n = {
      h: r,
      s: e,
      l: a
    },
    s = n.s * (n.l < .5 ? n.l : 1 - n.l);
  return t.b = n.l + s, t.s = n.l > 0 ? 2 * s / t.b : t.s, [t.h, t.s, t.b]
}
const ba = r => {
  const e = Nt(...r),
    a = [e[0], e[1], Math.max(0, e[2] - .08)],
    t = [e[0], e[1], Math.max(0, e[2] + .08)],
    n = Ke(...bt(...a)),
    s = Ke(...bt(...t));
  return {
    shade: n,
    tint: s
  }
};

function ya() {
  let r, e;
  for (var a = arguments.length, t = new Array(a), n = 0; n < a; n++) t[n] = arguments[n];
  if (t.length === 1 ? (r = t[0], e = _e(r)) : t.length === 3 && (e = t, r = Ke(...e)), !e) return {};
  const {
    light: s,
    dark: i
  } = Ti(r), o = ba(e), l = ba(_e(s["--f7-md-primary"])), c = ba(_e(i["--f7-md-primary"]));
  return Object.keys(s).forEach(d => {
    d.includes("surface-") && (s[`${d}-rgb`] = _e(s[d]))
  }), Object.keys(i).forEach(d => {
    d.includes("surface-") && (i[`${d}-rgb`] = _e(i[d]))
  }), {
    ios: {
      "--f7-theme-color": "var(--f7-ios-primary)",
      "--f7-theme-color-rgb": "var(--f7-ios-primary-rgb)",
      "--f7-theme-color-shade": "var(--f7-ios-primary-shade)",
      "--f7-theme-color-tint": "var(--f7-ios-primary-tint)"
    },
    md: {
      "--f7-theme-color": "var(--f7-md-primary)",
      "--f7-theme-color-rgb": "var(--f7-md-primary-rgb)",
      "--f7-theme-color-shade": "var(--f7-md-primary-shade)",
      "--f7-theme-color-tint": "var(--f7-md-primary-tint)"
    },
    light: Ee({
      "--f7-ios-primary": r,
      "--f7-ios-primary-shade": o.shade,
      "--f7-ios-primary-tint": o.tint,
      "--f7-ios-primary-rgb": e.join(", "),
      "--f7-md-primary-shade": l.shade,
      "--f7-md-primary-tint": l.tint,
      "--f7-md-primary-rgb": _e(s["--f7-md-primary"]).join(", ")
    }, s),
    dark: Ee({
      "--f7-md-primary-shade": c.shade,
      "--f7-md-primary-tint": c.tint,
      "--f7-md-primary-rgb": _e(i["--f7-md-primary"]).join(", ")
    }, i)
  }
}

function Ie(r, e) {
  Object.keys(e).forEach(a => {
    dt(e[a]) && Object.keys(e[a]).forEach(t => {
      typeof e[a][t] == "function" && (e[a][t] = e[a][t].bind(r))
    }), r[a] = e[a]
  })
}

function Yt() {
  const r = [];
  for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
  return a.forEach(n => {
    Array.isArray(n) ? r.push(...Yt(...n)) : r.push(n)
  }), r
}

function Pi(r) {
  r === void 0 && (r = {});
  const e = i => {
      let o = "";
      return Object.keys(i).forEach(l => {
        o += `${l}:${i[l]};`
      }), o
    },
    a = ya(r.primary),
    t = [":root{", e(a.light), "--swiper-theme-color:var(--f7-theme-color);", ...Object.keys(r).map(i => `--f7-color-${i}: ${r[i]};`), "}", ".dark{", e(a.dark), "}", ".ios{", e(a.ios), "}", ".md{", e(a.md), "}"].join(""),
    n = {};
  Object.keys(r).forEach(i => {
    const o = r[i];
    n[i] = ya(o)
  });
  let s = "";
  return Object.keys(r).forEach(i => {
    const {
      light: o,
      dark: l,
      ios: c,
      md: d
    } = n[i], p = `
    --f7-ios-primary: #ffffff;
    --f7-ios-primary-shade: #ebebeb;
    --f7-ios-primary-tint: #ffffff;
    --f7-ios-primary-rgb: 255, 255, 255;
    --f7-md-primary-shade: #eee;
    --f7-md-primary-tint: #fff;
    --f7-md-primary-rgb: 255, 255, 255;
    --f7-md-primary: #fff;
    --f7-md-on-primary: #000;
    --f7-md-primary-container: #fff;
    --f7-md-on-primary-container: #000;
    --f7-md-secondary: #fff;
    --f7-md-on-secondary: #000;
    --f7-md-secondary-container: #555;
    --f7-md-on-secondary-container: #fff;
    --f7-md-surface: #fff;
    --f7-md-on-surface: #000;
    --f7-md-surface-variant: #333;
    --f7-md-on-surface-variant: #fff;
    --f7-md-outline: #fff;
    --f7-md-outline-variant: #fff;
    --f7-md-inverse-surface: #000;
    --f7-md-inverse-on-surface: #fff;
    --f7-md-inverse-primary: #000;
    --f7-md-surface-1: #f8f8f8;
    --f7-md-surface-2: #f1f1f1;
    --f7-md-surface-3: #e7e7e7;
    --f7-md-surface-4: #e1e1e1;
    --f7-md-surface-5: #d7d7d7;
    --f7-md-surface-variant-rgb: 51, 51, 51;
    --f7-md-on-surface-variant-rgb: 255, 255, 255;
    --f7-md-surface-1-rgb: 248, 248, 248;
    --f7-md-surface-2-rgb: 241, 241, 241;
    --f7-md-surface-3-rgb: 231, 231, 231;
    --f7-md-surface-4-rgb: 225, 225, 225;
    --f7-md-surface-5-rgb: 215, 215, 215;
    `, u = `
    --f7-ios-primary: #000;
    --f7-ios-primary-shade: #000;
    --f7-ios-primary-tint: #232323;
    --f7-ios-primary-rgb: 0, 0, 0;
    --f7-md-primary-shade: #000;
    --f7-md-primary-tint: #232323;
    --f7-md-primary-rgb: 0, 0, 0;
    --f7-md-primary: #000;
    --f7-md-on-primary: #fff;
    --f7-md-primary-container: #000;
    --f7-md-on-primary-container: #fff;
    --f7-md-secondary: #000;
    --f7-md-on-secondary: #fff;
    --f7-md-secondary-container: #aaa;
    --f7-md-on-secondary-container: #000;
    --f7-md-surface: #000;
    --f7-md-on-surface: #fff;
    --f7-md-surface-variant: #ccc;
    --f7-md-on-surface-variant: #000;
    --f7-md-outline: #000;
    --f7-md-outline-variant: #000;
    --f7-md-inverse-surface: #fff;
    --f7-md-inverse-on-surface: #000;
    --f7-md-inverse-primary: #fff;
    --f7-md-surface-1: #070707;
    --f7-md-surface-2: #161616;
    --f7-md-surface-3: #232323;
    --f7-md-surface-4: #303030;
    --f7-md-surface-5: #373737;
    --f7-md-surface-variant-rgb: 204, 204, 204;
    --f7-md-on-surface-variant-rgb: 0, 0, 0;
    --f7-md-surface-1-rgb: 7, 7, 7;
    --f7-md-surface-2-rgb: 22, 22, 22;
    --f7-md-surface-3-rgb: 35, 35, 35;
    --f7-md-surface-4-rgb: 48, 48, 48;
    --f7-md-surface-5-rgb: 55, 55, 55;
    `, g = i === "white" ? p : i === "black" ? u : e(o), h = i === "white" ? p : i === "black" ? u : e(l);
    s += [`.color-${i} {`, g, "--swiper-theme-color: var(--f7-theme-color);", "}", `.color-${i}.dark, .color-${i} .dark, .dark .color-${i} {`, h, "--swiper-theme-color: var(--f7-theme-color);", "}", `.ios .color-${i}, .ios.color-${i} {`, e(c), "}", `.md .color-${i}, .md.color-${i} {`, e(d), "}", `.text-color-${i} {`, `--f7-theme-color-text-color: ${r[i]};`, "}", `.bg-color-${i} {`, `--f7-theme-color-bg-color: ${r[i]};`, "}", `.border-color-${i} {`, `--f7-theme-color-border-color: ${r[i]};`, "}", `.ripple-color-${i} {`, `--f7-theme-color-ripple-color: rgba(${o["--f7-ios-primary-rgb"]}, 0.3);`, "}"].join("")
  }), `${t}${s}`
}
var cr = Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  uniqueNumber: Si,
  id: vt,
  mdPreloaderContent: ot,
  iosPreloaderContent: lt,
  eventNameToColonCase: Ye,
  deleteProps: $e,
  requestAnimationFrame: va,
  cancelAnimationFrame: Mi,
  nextTick: ke,
  nextFrame: Pe,
  now: Ae,
  parseUrlQuery: kt,
  getTranslate: Ft,
  serializeObject: ct,
  isObject: dt,
  merge: Vt,
  extend: H,
  colorHexToRgb: _e,
  colorRgbToHex: Ke,
  colorRgbToHsl: Nt,
  colorHslToRgb: bt,
  colorHsbToHsl: Qe,
  colorHslToHsb: Tt,
  colorThemeCSSProperties: ya,
  bindMethods: Ie,
  flattenArray: Yt,
  colorThemeCSSStyles: Pi
});
let Ea;

function Ai() {
  const r = G(),
    e = ee();
  return {
    touch: !!("ontouchstart" in r || r.DocumentTouch && e instanceof r.DocumentTouch),
    pointerEvents: !!r.PointerEvent && "maxTouchPoints" in r.navigator && r.navigator.maxTouchPoints >= 0,
    passiveListener: function () {
      let t = !1;
      try {
        const n = Object.defineProperty({}, "passive", {
          get() {
            t = !0
          }
        });
        r.addEventListener("testPassiveListener", null, n)
      } catch {}
      return t
    }(),
    intersectionObserver: function () {
      return "IntersectionObserver" in r
    }()
  }
}

function ve() {
  return Ea || (Ea = Ai()), Ea
}
let wa;

function Ii(r) {
  let {
    userAgent: e
  } = r === void 0 ? {} : r;
  const a = ve(),
    t = G(),
    n = t.navigator.platform,
    s = e || t.navigator.userAgent,
    i = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      edge: !1,
      ie: !1,
      firefox: !1,
      macos: !1,
      windows: !1,
      cordova: !!t.cordova,
      electron: !1,
      capacitor: !!t.Capacitor,
      nwjs: !1
    },
    o = t.screen.width,
    l = t.screen.height,
    c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = s.match(/(iPad).*OS\s([\d_]+)/);
  const p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    u = !d && s.match(/(iPhone\sOS|iOS|iPhone;\sCPU\sOS)\s([\d_]+)/),
    g = s.indexOf("MSIE ") >= 0 || s.indexOf("Trident/") >= 0,
    h = s.indexOf("Edge/") >= 0,
    f = s.indexOf("Gecko/") >= 0 && s.indexOf("Firefox/") >= 0,
    b = n === "Win32",
    m = s.toLowerCase().indexOf("electron") >= 0,
    v = typeof nw != "undefined" && typeof process != "undefined" && typeof process.versions != "undefined" && typeof process.versions.nw != "undefined";
  let E = n === "MacIntel";
  const $ = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  !d && E && a.touch && $.indexOf(`${o}x${l}`) >= 0 && (d = s.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), E = !1), i.ie = g, i.edge = h, i.firefox = f, c && (i.os = "android", i.osVersion = c[2], i.android = !0, i.androidChrome = s.toLowerCase().indexOf("chrome") >= 0), (d || u || p) && (i.os = "ios", i.ios = !0), u && !p && (i.osVersion = u[2].replace(/_/g, "."), i.iphone = !0), d && (i.osVersion = d[2].replace(/_/g, "."), i.ipad = !0), p && (i.osVersion = p[3] ? p[3].replace(/_/g, ".") : null, i.ipod = !0), i.ios && i.osVersion && s.indexOf("Version/") >= 0 && i.osVersion.split(".")[0] === "10" && (i.osVersion = s.toLowerCase().split("version/")[1].split(" ")[0]), i.webView = !!((u || d || p) && (s.match(/.*AppleWebKit(?!.*Safari)/i) || t.navigator.standalone)) || t.matchMedia && t.matchMedia("(display-mode: standalone)").matches, i.webview = i.webView, i.standalone = i.webView, i.desktop = !(i.ios || i.android) || m || v, i.desktop && (i.electron = m, i.nwjs = v, i.macos = E, i.windows = b, i.macos && (i.os = "macos"), i.windows && (i.os = "windows")), i.pixelRatio = t.devicePixelRatio || 1;
  const w = "(prefers-color-scheme: dark)",
    C = "(prefers-color-scheme: light)";
  return i.prefersColorScheme = function () {
    let M;
    return t.matchMedia && t.matchMedia(C).matches && (M = "light"), t.matchMedia && t.matchMedia(w).matches && (M = "dark"), M
  }, i
}

function ue(r, e) {
  return r === void 0 && (r = {}), (!wa || e) && (wa = Ii(r)), wa
}
class Oi {
  constructor(e) {
    e === void 0 && (e = []);
    const a = this;
    a.eventsParents = e, a.eventsListeners = {}
  }
  on(e, a, t) {
    const n = this;
    if (typeof a != "function") return n;
    const s = t ? "unshift" : "push";
    return e.split(" ").forEach(i => {
      n.eventsListeners[i] || (n.eventsListeners[i] = []), n.eventsListeners[i][s](a)
    }), n
  }
  once(e, a, t) {
    const n = this;
    if (typeof a != "function") return n;

    function s() {
      n.off(e, s), s.f7proxy && delete s.f7proxy;
      for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
      a.apply(n, o)
    }
    return s.f7proxy = a, n.on(e, s, t)
  }
  off(e, a) {
    const t = this;
    return t.eventsListeners && e.split(" ").forEach(n => {
      typeof a == "undefined" ? t.eventsListeners[n] = [] : t.eventsListeners[n] && t.eventsListeners[n].forEach((s, i) => {
        (s === a || s.f7proxy && s.f7proxy === a) && t.eventsListeners[n].splice(i, 1)
      })
    }), t
  }
  emit() {
    const e = this;
    if (!e.eventsListeners) return e;
    let a, t, n, s;
    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
    typeof o[0] == "string" || Array.isArray(o[0]) ? (a = o[0], t = o.slice(1, o.length), n = e, s = e.eventsParents) : (a = o[0].events, t = o[0].data, n = o[0].context || e, s = o[0].local ? [] : o[0].parents || e.eventsParents);
    const c = Array.isArray(a) ? a : a.split(" "),
      d = c.map(u => u.replace("local::", "")),
      p = c.filter(u => u.indexOf("local::") < 0);
    return d.forEach(u => {
      if (e.eventsListeners && e.eventsListeners[u]) {
        const g = [];
        e.eventsListeners[u].forEach(h => {
          g.push(h)
        }), g.forEach(h => {
          h.apply(n, t)
        })
      }
    }), s && s.length > 0 && s.forEach(u => {
      u.emit(p, ...t)
    }), e
  }
}
var dr = Oi;
class Bi extends dr {
  constructor(e, a) {
    e === void 0 && (e = {}), a === void 0 && (a = []);
    super(a);
    const t = this;
    t.params = e, t.params && t.params.on && Object.keys(t.params.on).forEach(n => {
      t.on(n, t.params.on[n])
    })
  }
  useModuleParams(e, a) {
    if (e.params) {
      const t = {};
      Object.keys(e.params).forEach(n => {
        typeof a[n] != "undefined" && (t[n] = H({}, a[n]))
      }), H(a, e.params), Object.keys(t).forEach(n => {
        H(a[n], t[n])
      })
    }
  }
  useModulesParams(e) {
    const a = this;
    !a.modules || Object.keys(a.modules).forEach(t => {
      const n = a.modules[t];
      n.params && H(e, n.params)
    })
  }
  useModule(e, a) {
    e === void 0 && (e = ""), a === void 0 && (a = {});
    const t = this;
    if (!t.modules) return;
    const n = typeof e == "string" ? t.modules[e] : e;
    !n || (n.instance && Object.keys(n.instance).forEach(s => {
      const i = n.instance[s];
      typeof i == "function" ? t[s] = i.bind(t) : t[s] = i
    }), n.on && t.on && Object.keys(n.on).forEach(s => {
      t.on(s, n.on[s])
    }), n.vnode && (t.vnodeHooks || (t.vnodeHooks = {}), Object.keys(n.vnode).forEach(s => {
      Object.keys(n.vnode[s]).forEach(i => {
        const o = n.vnode[s][i];
        t.vnodeHooks[i] || (t.vnodeHooks[i] = {}), t.vnodeHooks[i][s] || (t.vnodeHooks[i][s] = []), t.vnodeHooks[i][s].push(o.bind(t))
      })
    })), n.create && n.create.bind(t)(a))
  }
  useModules(e) {
    e === void 0 && (e = {});
    const a = this;
    !a.modules || Object.keys(a.modules).forEach(t => {
      const n = e[t] || {};
      a.useModule(t, n)
    })
  }
  static set components(e) {
    const a = this;
    !a.use || a.use(e)
  }
  static installModule(e) {
    const a = this;
    a.prototype.modules || (a.prototype.modules = {});
    const t = e.name || `${Object.keys(a.prototype.modules).length}_${Ae()}`;
    if (a.prototype.modules[t] = e, e.proto && Object.keys(e.proto).forEach(o => {
        a.prototype[o] = e.proto[o]
      }), e.static && Object.keys(e.static).forEach(o => {
        a[o] = e.static[o]
      }), e.install) {
      for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) s[i - 1] = arguments[i];
      e.install.apply(a, s)
    }
    return a
  }
  static use(e) {
    const a = this;
    if (Array.isArray(e)) return e.forEach(i => a.installModule(i)), a;
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
    return a.installModule(e, ...n)
  }
}
var be = Bi;

function xe(r) {
  r === void 0 && (r = {});
  const {
    defaultSelector: e,
    constructor: a,
    domProp: t,
    app: n,
    addMethods: s
  } = r, i = {
    create() {
      for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
      return n ? new a(n, ...l) : new a(...l)
    },
    get(o) {
      if (o === void 0 && (o = e), o instanceof a) return o;
      const l = y(o);
      if (l.length !== 0) return l[0][t]
    },
    destroy(o) {
      const l = i.get(o);
      if (l && l.destroy) return l.destroy()
    }
  };
  return s && Array.isArray(s) && s.forEach(o => {
    i[o] = function (l) {
      l === void 0 && (l = e);
      const c = i.get(l);
      for (var d = arguments.length, p = new Array(d > 1 ? d - 1 : 0), u = 1; u < d; u++) p[u - 1] = arguments[u];
      if (c && c[o]) return c[o](...p)
    }
  }), i
}

function Ze(r) {
  r === void 0 && (r = {});
  const {
    defaultSelector: e,
    constructor: a,
    app: t
  } = r;
  return H(xe({
    defaultSelector: e,
    constructor: a,
    app: t,
    domProp: "f7Modal"
  }), {
    open(s, i, o) {
      let l = y(s);
      if (l.length > 1 && o) {
        const d = y(o).parents(".page");
        d.length && l.each(p => {
          const u = y(p);
          u.parents(d)[0] === d[0] && (l = u)
        })
      }
      if (l.length > 1 && (l = l.eq(l.length - 1)), !l.length) return;
      let c = l[0].f7Modal;
      if (!c) {
        const d = l.dataset();
        c = new a(t, Ee({
          el: l
        }, d))
      }
      return c.open(i)
    },
    close(s, i, o) {
      s === void 0 && (s = e);
      let l = y(s);
      if (!l.length) return;
      if (l.length > 1) {
        let d;
        if (o) {
          const p = y(o);
          p.length && (d = p.parents(l))
        }
        d && d.length > 0 ? l = d : l = l.eq(l.length - 1)
      }
      let c = l[0].f7Modal;
      if (!c) {
        const d = l.dataset();
        c = new a(t, Ee({
          el: l
        }, d))
      }
      return c.close(i)
    }
  })
}
const pr = [];

function Di(r) {
  const e = this,
    a = G(),
    t = ee();
  return new Promise((n, s) => {
    const i = e.instance;
    let o, l, c;
    if (!r) {
      s(new Error("Framework7: Lazy module must be specified"));
      return
    }

    function d(p) {
      e.use(p), i && (i.useModuleParams(p, i.params), i.useModule(p))
    }
    if (typeof r == "string") {
      const p = r.match(/([a-z0-9-]*)/i);
      if (r.indexOf(".") < 0 && p && p[0].length === r.length) {
        if (!i || i && !i.params.lazyModulesPath) {
          s(new Error('Framework7: "lazyModulesPath" app parameter must be specified to fetch module by name'));
          return
        }
        o = `${i.params.lazyModulesPath}/${r}/${r}.lazy.js`
      } else o = r
    } else typeof r == "function" ? c = r : l = r;
    if (c) {
      const p = c(e, !1);
      if (!p) {
        s(new Error("Framework7: Can't find Framework7 component in specified component function"));
        return
      }
      if (e.prototype.modules && e.prototype.modules[p.name]) {
        n();
        return
      }
      d(p), n()
    }
    if (l) {
      const p = l;
      if (!p) {
        s(new Error("Framework7: Can't find Framework7 component in specified component"));
        return
      }
      if (e.prototype.modules && e.prototype.modules[p.name]) {
        n();
        return
      }
      d(p), n()
    }
    if (o) {
      if (pr.indexOf(o) >= 0) {
        n();
        return
      }
      pr.push(o);
      const p = new Promise((g, h) => {
          fetch(o).then(f => f.text()).then(f => {
            const m = `f7_component_loader_callback_${vt()}`,
              v = t.createElement("script");
            v.innerHTML = `window.${m} = function (Framework7, Framework7AutoInstallComponent) {return ${f.trim()}}`, y("head").append(v);
            const E = a[m];
            delete a[m], y(v).remove();
            const $ = E(e, !1);
            if (!$) {
              h(new Error(`Framework7: Can't find Framework7 component in ${o} file`));
              return
            }
            if (e.prototype.modules && e.prototype.modules[$.name]) {
              g();
              return
            }
            d($), g()
          }).catch(f => {
            h(f)
          })
        }),
        u = new Promise(g => {
          fetch(o.replace(".lazy.js", i.rtl ? ".rtl.css" : ".css").replace(".js", i.rtl ? ".rtl.css" : ".css")).then(h => h.text()).then(h => {
            const f = t.createElement("style");
            f.innerHTML = h, y("head").append(f), g()
          }).catch(() => {
            g()
          })
        });
      Promise.all([p, u]).then(() => {
        n()
      }).catch(g => {
        s(g)
      })
    }
  })
}
const Li = function (r, e) {
  const a = e || {};
  for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), s = 2; s < t; s++) n[s - 2] = arguments[s];
  const i = n || [],
    o = Object.keys(a).map(c => c[0] === "_" ? a[c] ? c.replace("_", "") : "" : `${c}="${a[c]}"`).filter(c => !!c).join(" ");
  if (["path", "img", "circle", "polygon", "line", "input"].indexOf(r) >= 0) return `<${r} ${o} />`.trim();
  const l = i.filter(c => !!c).map(c => Array.isArray(c) ? c.join("") : c).join("");
  return `<${r} ${o}>${l}</${r}>`.trim()
};
var T = Li;
class Le extends be {
  constructor(e) {
    e === void 0 && (e = {});
    super(e);
    if (Le.instance && typeof window != "undefined") throw new Error("Framework7 is already initialized and can't be initialized more than once");
    const a = ue({
        userAgent: e.userAgent || void 0
      }),
      t = ve(),
      n = H({}, e),
      s = this;
    s.device = a, s.support = t;
    const i = G(),
      o = ee();
    Le.instance = s;
    const l = {
      el: "body",
      theme: "auto",
      routes: [],
      name: "Framework7",
      lazyModulesPath: null,
      initOnDeviceReady: !0,
      init: !0,
      darkMode: void 0,
      iosTranslucentBars: !0,
      iosTranslucentModals: !0,
      component: void 0,
      componentUrl: void 0,
      userAgent: null,
      url: null,
      colors: {
        primary: "#007aff",
        red: "#ff3b30",
        green: "#4cd964",
        blue: "#2196f3",
        pink: "#ff2d55",
        yellow: "#ffcc00",
        orange: "#ff9500",
        purple: "#9c27b0",
        deeppurple: "#673ab7",
        lightblue: "#5ac8fa",
        teal: "#009688",
        lime: "#cddc39",
        deeporange: "#ff6b22",
        white: "#ffffff",
        black: "#000000"
      }
    };
    return s.useModulesParams(l), s.params = H(l, e), H(s, {
      name: s.params.name,
      routes: s.params.routes,
      theme: function () {
        return s.params.theme === "auto" ? a.ios ? "ios" : "md" : s.params.theme
      }(),
      passedParams: n,
      online: i.navigator.onLine,
      colors: s.params.colors,
      darkMode: s.params.darkMode
    }), e.store && (s.params.store = e.store), s.$el && s.$el[0] && (s.$el[0].f7 = s), s.useModules(), s.initStore(), s.params.init && (a.cordova && s.params.initOnDeviceReady ? y(o).on("deviceready", () => {
      s.init()
    }) : s.init()), s
  }
  setColorTheme(e) {
    if (!e) return;
    const a = this;
    a.colors.primary = e, a.setColors()
  }
  setColors() {
    const e = this,
      a = ee();
    e.colorsStyleEl || (e.colorsStyleEl = a.createElement("style"), a.head.appendChild(e.colorsStyleEl)), e.colorsStyleEl.textContent = e.utils.colorThemeCSSStyles(e.colors)
  }
  mount(e) {
    const a = this,
      t = G(),
      n = ee(),
      s = y(e || a.params.el).eq(0);
    a.$el = s, a.$el && a.$el[0] && (a.el = a.$el[0], a.el.f7 = a, a.rtl = s.css("direction") === "rtl");
    const i = "(prefers-color-scheme: dark)",
      o = "(prefers-color-scheme: light)";
    a.mq = {}, t.matchMedia && (a.mq.dark = t.matchMedia(i), a.mq.light = t.matchMedia(o)), a.colorSchemeListener = function (c) {
      let {
        matches: d,
        media: p
      } = c;
      if (!d) return;
      const u = n.querySelector("html");
      p === i ? (u.classList.add("dark"), a.darkMode = !0, a.emit("darkModeChange", !0)) : p === o && (u.classList.remove("dark"), a.darkMode = !1, a.emit("darkModeChange", !1))
    }, a.emit("mount")
  }
  initStore() {
    const e = this;
    typeof e.params.store != "undefined" && e.params.store.__store ? e.store = e.params.store : e.store = e.createStore(e.params.store)
  }
  enableAutoDarkMode() {
    const e = G(),
      a = ee();
    if (!e.matchMedia) return;
    const t = this,
      n = a.querySelector("html");
    t.mq.dark && t.mq.light && (t.mq.dark.addListener(t.colorSchemeListener), t.mq.light.addListener(t.colorSchemeListener)), t.mq.dark && t.mq.dark.matches ? (n.classList.add("dark"), t.darkMode = !0, t.emit("darkModeChange", !0)) : t.mq.light && t.mq.light.matches && (n.classList.remove("dark"), t.darkMode = !1, t.emit("darkModeChange", !1))
  }
  disableAutoDarkMode() {
    if (!G().matchMedia) return;
    const a = this;
    a.mq.dark && a.mq.dark.removeListener(a.colorSchemeListener), a.mq.light && a.mq.light.removeListener(a.colorSchemeListener)
  }
  setDarkMode(e) {
    const a = this;
    e === "auto" ? a.enableAutoDarkMode() : (a.disableAutoDarkMode(), y("html")[e ? "addClass" : "removeClass"]("dark"), a.darkMode = e)
  }
  initAppComponent(e) {
    const a = this;
    a.router.componentLoader(a.params.component, a.params.componentUrl, {
      componentOptions: {
        el: a.$el[0]
      }
    }, t => {
      a.$el = y(t), a.$el[0].f7 = a, a.$elComponent = t.f7Component, a.el = a.$el[0], e && e()
    }, () => {})
  }
  init(e) {
    const a = this;
    a.setColors(), a.mount(e);
    const t = () => {
      if (a.initialized) return;
      a.$el.addClass("framework7-initializing"), a.rtl && y("html").attr("dir", "rtl"), typeof a.params.darkMode == "undefined" ? a.darkMode = y("html").hasClass("dark") : a.setDarkMode(a.params.darkMode);
      const n = G();
      n.addEventListener("offline", () => {
        a.online = !1, a.emit("offline"), a.emit("connection", !1)
      }), n.addEventListener("online", () => {
        a.online = !0, a.emit("online"), a.emit("connection", !0)
      }), a.$el.addClass("framework7-root"), y("html").removeClass("ios md").addClass(a.theme);
      const s = a.device;
      a.params.iosTranslucentBars && a.theme === "ios" && s.ios && y("html").addClass("ios-translucent-bars"), a.params.iosTranslucentModals && a.theme === "ios" && s.ios && y("html").addClass("ios-translucent-modals"), Pe(() => {
        a.$el.removeClass("framework7-initializing")
      }), a.initialized = !0, a.emit("init")
    };
    return a.params.component || a.params.componentUrl ? a.initAppComponent(() => {
      t()
    }) : t(), a
  }
  loadModule() {
    return Le.loadModule(...arguments)
  }
  loadModules() {
    return Le.loadModules(...arguments)
  }
  getVnodeHooks(e, a) {
    const t = this;
    return !t.vnodeHooks || !t.vnodeHooks[e] ? [] : t.vnodeHooks[e][a] || []
  }
  get $() {
    return y
  }
  static get Dom7() {
    return y
  }
  static get $() {
    return y
  }
  static get device() {
    return ue()
  }
  static get support() {
    return ve()
  }
  static get Class() {
    return be
  }
  static get Events() {
    return dr
  }
}
Le.$jsx = T;
Le.ModalMethods = Ze;
Le.ConstructorMethods = xe;
Le.loadModule = Di;
Le.loadModules = function (e) {
  return Promise.all(e.map(a => Le.loadModule(a)))
};
var Ri = Le,
  Hi = {
    name: "device",
    static: {
      getDevice: ue
    },
    on: {
      init() {
        const r = ee(),
          e = ue(),
          a = [],
          t = r.querySelector("html"),
          n = r.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
        !t || (e.standalone && e.ios && n && n.content === "black-translucent" && a.push("device-full-viewport"), a.push(`device-pixel-ratio-${Math.floor(e.pixelRatio)}`), e.os && !e.desktop ? a.push(`device-${e.os}`) : e.desktop && (a.push("device-desktop"), e.os && a.push(`device-${e.os}`)), e.cordova && a.push("device-cordova"), e.capacitor && a.push("device-capacitor"), a.forEach(s => {
          t.classList.add(s)
        }))
      }
    }
  },
  zi = {
    name: "support",
    static: {
      getSupport: ve
    }
  },
  Fi = {
    name: "utils",
    proto: {
      utils: cr
    },
    static: {
      utils: cr
    }
  },
  Vi = {
    name: "resize",
    create() {
      const r = this;
      r.getSize = () => {
        if (!r.el) return {
          width: 0,
          height: 0,
          left: 0,
          top: 0
        };
        const e = r.$el.offset(),
          [a, t, n, s] = [r.el.offsetWidth, r.el.offsetHeight, e.left, e.top];
        return r.width = a, r.height = t, r.left = n, r.top = s, {
          width: a,
          height: t,
          left: n,
          top: s
        }
      }
    },
    on: {
      init() {
        const r = this,
          e = G();
        r.getSize(), e.addEventListener("resize", () => {
          r.emit("resize")
        }, !1), e.addEventListener("orientationchange", () => {
          r.emit("orientationchange")
        })
      },
      orientationchange() {
        const r = ee();
        ue().ipad && (r.body.scrollLeft = 0, setTimeout(() => {
          r.body.scrollLeft = 0
        }, 0))
      },
      resize() {
        this.getSize()
      }
    }
  };

function Ni() {
  const r = this,
    e = ue(),
    a = ve(),
    t = G(),
    n = ee(),
    s = r.params.touch,
    i = s[`${r.theme}TouchRipple`];
  e.ios && e.webView && t.addEventListener("touchstart", () => {});
  let o, l, c, d, p, u, g, h, f, b, m, v;

  function E(q) {
    const pe = y(q),
      ge = pe.parents(s.activeStateElements);
    if (pe.closest(".no-active-state").length) return null;
    let he;
    if (pe.is(s.activeStateElements) && (he = pe), ge.length > 0 && (he = he ? he.add(ge) : ge), he && he.length > 1) {
      const re = [];
      let Ve;
      for (let ae = 0; ae < he.length; ae += 1) Ve || (re.push(he[ae]), (he.eq(ae).hasClass("prevent-active-state-propagation") || he.eq(ae).hasClass("no-active-state-propagation")) && (Ve = !0));
      he = y(re)
    }
    return he || pe
  }

  function $(q) {
    return q.parents(".page-content").length > 0
  }

  function w() {
    !h || h.addClass("active-state")
  }

  function C() {
    !h || (h.removeClass("active-state"), h = null)
  }

  function x(q) {
    const pe = s.touchRippleElements,
      ge = y(q);
    if (ge.is(pe)) return ge.hasClass("no-ripple") ? !1 : ge;
    if (ge.parents(pe).length > 0) {
      const he = ge.parents(pe).eq(0);
      return he.hasClass("no-ripple") ? !1 : he
    }
    return !1
  }

  function M(q, pe, ge) {
    !q || (b = r.touchRipple.create(r, q, pe, ge))
  }

  function A() {
    !b || (b.remove(), b = void 0, m = void 0)
  }

  function B(q) {
    if (m = x(q), !m || m.length === 0) {
      m = void 0;
      return
    }
    $(m) ? (clearTimeout(v), v = setTimeout(() => {
      A(), M(m, o, l)
    }, 80)) : (A(), M(m, o, l))
  }

  function S() {
    clearTimeout(v), A()
  }

  function P() {
    !b && m && !d ? (clearTimeout(v), M(m, o, l), setTimeout(A, 0)) : A()
  }

  function k(q) {
    const pe = E(q.target);
    pe && (pe.addClass("active-state"), "which" in q && q.which === 3 && setTimeout(() => {
      y(".active-state").removeClass("active-state")
    }, 0)), i && (o = q.pageX, l = q.pageY, B(q.target, q.pageX, q.pageY))
  }

  function I() {
    s.activeStateOnMouseMove || y(".active-state").removeClass("active-state"), i && S()
  }

  function R() {
    y(".active-state").removeClass("active-state"), i && P()
  }

  function D() {
    c = null, clearTimeout(f), clearTimeout(u), s.activeState && C(), i && P()
  }
  let z, O = !1,
    L = null;
  const N = ".dialog-button, .actions-button";
  let F = !1,
    V = null;

  function U(q) {
    return d = !1, p = !1, g = !1, z = void 0, q.targetTouches.length > 1 ? (h && C(), !0) : (q.touches.length > 1 && h && C(), s.tapHold && (u && clearTimeout(u), u = setTimeout(() => {
      q && q.touches && q.touches.length > 1 || (p = !0, q.preventDefault(), g = !0, y(q.target).trigger("taphold", q), r.emit("taphold", q))
    }, s.tapHoldDelay)), c = q.target, o = q.targetTouches[0].pageX, l = q.targetTouches[0].pageY, O = q.target.closest(".segmented-strong .button-active, .segmented-strong .tab-link-active"), F = r.theme === "ios" && q.target.closest(N), O && (L = O.closest(".segmented-strong")), s.activeState && (h = E(c), h && !$(h) ? w() : h && (f = setTimeout(w, 80))), i && B(c), !0)
  }

  function Z(q) {
    let pe, ge, he = !0;
    q.type === "touchmove" && (pe = q.targetTouches[0], ge = s.touchClicksDistanceThreshold);
    const re = q.targetTouches[0].pageX,
      Ve = q.targetTouches[0].pageY;
    if (typeof z == "undefined" && (z = !!(z || Math.abs(Ve - l) > Math.abs(re - o))), (F || !z && O && L) && q.cancelable && q.preventDefault(), !z && O && L) {
      const fe = n.elementFromPoint(q.targetTouches[0].clientX, q.targetTouches[0].clientY).closest(".segmented-strong .button:not(.button-active):not(.tab-link-active)");
      fe && L.contains(fe) && (y(fe).trigger("click", "f7Segmented"), c = fe)
    }
    if (ge && pe) {
      const ae = pe.pageX,
        fe = pe.pageY;
      (Math.abs(ae - o) > ge || Math.abs(fe - l) > ge) && (d = !0)
    } else d = !0;
    d && (g = !0, F && (V = n.elementFromPoint(q.targetTouches[0].clientX, q.targetTouches[0].clientY).closest(N), V && h && h[0] === V ? he = !1 : V && setTimeout(() => {
      h = E(V), w()
    })), s.tapHold && clearTimeout(u), s.activeState && he && (clearTimeout(f), C()), i && S())
  }

  function J(q) {
    return z = void 0, O = !1, L = null, F = !1, clearTimeout(f), clearTimeout(u), V && (y(V).trigger("click", "f7TouchMoveActivable"), V = null), n.activeElement === q.target ? (s.activeState && C(), i && P(), !0) : (s.activeState && (w(), setTimeout(C, 0)), i && P(), s.tapHoldPreventClicks && p || g ? (q.cancelable && q.preventDefault(), g = !0, !1) : !0)
  }

  function X(q) {
    const pe = q && q.detail && q.detail === "f7Overswipe",
      ge = q && q.detail && q.detail === "f7Segmented",
      he = q && q.detail && q.detail === "f7TouchMoveActivable";
    let re = g;
    return c && q.target !== c ? pe || ge || he ? re = !1 : re = !0 : he && (re = !1), s.tapHold && s.tapHoldPreventClicks && p && (re = !0), re && (q.stopImmediatePropagation(), q.stopPropagation(), q.preventDefault()), s.tapHold && (u = setTimeout(() => {
      p = !1
    }, e.ios || e.androidChrome ? 100 : 400)), g = !1, c = null, !re
  }

  function Y(q, pe) {
    r.emit({
      events: q,
      data: [pe]
    })
  }

  function W(q) {
    Y("click", q)
  }

  function K(q) {
    Y("touchstart touchstart:active", q)
  }

  function j(q) {
    Y("touchmove touchmove:active", q)
  }

  function _(q) {
    Y("touchend touchend:active", q)
  }

  function Q(q) {
    Y("touchstart:passive", q)
  }

  function se(q) {
    Y("touchmove:passive", q)
  }

  function me(q) {
    Y("touchend:passive", q)
  }
  const te = a.passiveListener ? {
      passive: !0
    } : !1,
    oe = a.passiveListener ? {
      passive: !0,
      capture: !0
    } : !0,
    de = a.passiveListener ? {
      passive: !1
    } : !1,
    le = a.passiveListener ? {
      passive: !1,
      capture: !0
    } : !0;
  n.addEventListener("click", W, !0), a.passiveListener ? (n.addEventListener(r.touchEvents.start, K, le), n.addEventListener(r.touchEvents.move, j, de), n.addEventListener(r.touchEvents.end, _, de), n.addEventListener(r.touchEvents.start, Q, oe), n.addEventListener(r.touchEvents.move, se, te), n.addEventListener(r.touchEvents.end, me, te)) : (n.addEventListener(r.touchEvents.start, q => {
    K(q), Q(q)
  }, !0), n.addEventListener(r.touchEvents.move, q => {
    j(q), se(q)
  }, !1), n.addEventListener(r.touchEvents.end, q => {
    _(q), me(q)
  }, !1)), a.touch ? (r.on("click", X), r.on("touchstart", U), r.on("touchmove", Z), r.on("touchend", J), n.addEventListener("touchcancel", D, {
    passive: !0
  })) : s.activeState && (r.on("touchstart", k), r.on("touchmove", I), r.on("touchend", R), n.addEventListener("pointercancel", R, {
    passive: !0
  })), n.addEventListener("contextmenu", q => {
    s.disableContextMenu && (e.ios || e.android || e.cordova || t.Capacitor && t.Capacitor.isNative) && q.preventDefault(), i && (h && C(), P())
  })
}
var Yi = {
  name: "touch",
  params: {
    touch: {
      touchClicksDistanceThreshold: 5,
      disableContextMenu: !1,
      tapHold: !1,
      tapHoldDelay: 750,
      tapHoldPreventClicks: !0,
      activeState: !0,
      activeStateElements: "a, button, label, span, .actions-button, .stepper-button, .stepper-button-plus, .stepper-button-minus, .card-expandable, .link, .item-link, .accordion-item-toggle",
      activeStateOnMouseMove: !1,
      mdTouchRipple: !0,
      iosTouchRipple: !1,
      touchRippleElements: ".ripple, .link, .item-link, .list label.item-content, .list-button, .links-list a, .button, button, .input-clear-button, .dialog-button, .tab-link, .item-radio, .item-checkbox, .actions-button, .searchbar-disable-button, .fab a, .checkbox, .radio, .data-table .sortable-cell:not(.input-cell), .notification-close-button, .stepper-button, .stepper-button-minus, .stepper-button-plus, .list.accordion-list .accordion-item-toggle",
      touchRippleInsetElements: ".ripple-inset, .icon-only, .searchbar-disable-button, .input-clear-button, .notification-close-button, .md .navbar .link.back"
    }
  },
  create() {
    const r = this,
      e = ve();
    H(r, {
      touchEvents: {
        start: e.touch ? "touchstart" : e.pointerEvents ? "pointerdown" : "mousedown",
        move: e.touch ? "touchmove" : e.pointerEvents ? "pointermove" : "mousemove",
        end: e.touch ? "touchend" : e.pointerEvents ? "pointerup" : "mouseup"
      }
    })
  },
  on: {
    init: Ni
  }
};

function qi(r) {
  for (var e = [], a = 0; a < r.length;) {
    var t = r[a];
    if (t === "*" || t === "+" || t === "?") {
      e.push({
        type: "MODIFIER",
        index: a,
        value: r[a++]
      });
      continue
    }
    if (t === "\\") {
      e.push({
        type: "ESCAPED_CHAR",
        index: a++,
        value: r[a++]
      });
      continue
    }
    if (t === "{") {
      e.push({
        type: "OPEN",
        index: a,
        value: r[a++]
      });
      continue
    }
    if (t === "}") {
      e.push({
        type: "CLOSE",
        index: a,
        value: r[a++]
      });
      continue
    }
    if (t === ":") {
      for (var n = "", s = a + 1; s < r.length;) {
        var i = r.charCodeAt(s);
        if (i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 || i === 95) {
          n += r[s++];
          continue
        }
        break
      }
      if (!n) throw new TypeError("Missing parameter name at " + a);
      e.push({
        type: "NAME",
        index: a,
        value: n
      }), a = s;
      continue
    }
    if (t === "(") {
      var o = 1,
        l = "",
        s = a + 1;
      if (r[s] === "?") throw new TypeError('Pattern cannot start with "?" at ' + s);
      for (; s < r.length;) {
        if (r[s] === "\\") {
          l += r[s++] + r[s++];
          continue
        }
        if (r[s] === ")") {
          if (o--, o === 0) {
            s++;
            break
          }
        } else if (r[s] === "(" && (o++, r[s + 1] !== "?")) throw new TypeError("Capturing groups are not allowed at " + s);
        l += r[s++]
      }
      if (o) throw new TypeError("Unbalanced pattern at " + a);
      if (!l) throw new TypeError("Missing pattern at " + a);
      e.push({
        type: "PATTERN",
        index: a,
        value: l
      }), a = s;
      continue
    }
    e.push({
      type: "CHAR",
      index: a,
      value: r[a++]
    })
  }
  return e.push({
    type: "END",
    index: a,
    value: ""
  }), e
}

function ur(r, e) {
  e === void 0 && (e = {});
  for (var a = qi(r), t = e.prefixes, n = t === void 0 ? "./" : t, s = "[^" + yt(e.delimiter || "/#?") + "]+?", i = [], o = 0, l = 0, c = "", d = function (C) {
      if (l < a.length && a[l].type === C) return a[l++].value
    }, p = function (C) {
      var x = d(C);
      if (x !== void 0) return x;
      var M = a[l],
        A = M.type,
        B = M.index;
      throw new TypeError("Unexpected " + A + " at " + B + ", expected " + C)
    }, u = function () {
      for (var C = "", x; x = d("CHAR") || d("ESCAPED_CHAR");) C += x;
      return C
    }; l < a.length;) {
    var g = d("CHAR"),
      h = d("NAME"),
      f = d("PATTERN");
    if (h || f) {
      var b = g || "";
      n.indexOf(b) === -1 && (c += b, b = ""), c && (i.push(c), c = ""), i.push({
        name: h || o++,
        prefix: b,
        suffix: "",
        pattern: f || s,
        modifier: d("MODIFIER") || ""
      });
      continue
    }
    var m = g || d("ESCAPED_CHAR");
    if (m) {
      c += m;
      continue
    }
    c && (i.push(c), c = "");
    var v = d("OPEN");
    if (v) {
      var b = u(),
        E = d("NAME") || "",
        $ = d("PATTERN") || "",
        w = u();
      p("CLOSE"), i.push({
        name: E || ($ ? o++ : ""),
        pattern: E && !$ ? s : $,
        prefix: b,
        suffix: w,
        modifier: d("MODIFIER") || ""
      });
      continue
    }
    p("END")
  }
  return i
}

function ji(r, e) {
  return Wi(ur(r, e), e)
}

function Wi(r, e) {
  e === void 0 && (e = {});
  var a = Ca(e),
    t = e.encode,
    n = t === void 0 ? function (l) {
      return l
    } : t,
    s = e.validate,
    i = s === void 0 ? !0 : s,
    o = r.map(function (l) {
      if (typeof l == "object") return new RegExp("^(?:" + l.pattern + ")$", a)
    });
  return function (l) {
    for (var c = "", d = 0; d < r.length; d++) {
      var p = r[d];
      if (typeof p == "string") {
        c += p;
        continue
      }
      var u = l ? l[p.name] : void 0,
        g = p.modifier === "?" || p.modifier === "*",
        h = p.modifier === "*" || p.modifier === "+";
      if (Array.isArray(u)) {
        if (!h) throw new TypeError('Expected "' + p.name + '" to not repeat, but got an array');
        if (u.length === 0) {
          if (g) continue;
          throw new TypeError('Expected "' + p.name + '" to not be empty')
        }
        for (var f = 0; f < u.length; f++) {
          var b = n(u[f], p);
          if (i && !o[d].test(b)) throw new TypeError('Expected all "' + p.name + '" to match "' + p.pattern + '", but got "' + b + '"');
          c += p.prefix + b + p.suffix
        }
        continue
      }
      if (typeof u == "string" || typeof u == "number") {
        var b = n(String(u), p);
        if (i && !o[d].test(b)) throw new TypeError('Expected "' + p.name + '" to match "' + p.pattern + '", but got "' + b + '"');
        c += p.prefix + b + p.suffix;
        continue
      }
      if (!g) {
        var m = h ? "an array" : "a string";
        throw new TypeError('Expected "' + p.name + '" to be ' + m)
      }
    }
    return c
  }
}

function yt(r) {
  return r.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
}

function Ca(r) {
  return r && r.sensitive ? "" : "i"
}

function Xi(r, e) {
  if (!e) return r;
  for (var a = /\((?:\?<(.*?)>)?(?!\?)/g, t = 0, n = a.exec(r.source); n;) e.push({
    name: n[1] || t++,
    prefix: "",
    suffix: "",
    modifier: "",
    pattern: ""
  }), n = a.exec(r.source);
  return r
}

function Gi(r, e, a) {
  var t = r.map(function (n) {
    return fr(n, e, a).source
  });
  return new RegExp("(?:" + t.join("|") + ")", Ca(a))
}

function Ui(r, e, a) {
  return _i(ur(r, a), e, a)
}

function _i(r, e, a) {
  a === void 0 && (a = {});
  for (var t = a.strict, n = t === void 0 ? !1 : t, s = a.start, i = s === void 0 ? !0 : s, o = a.end, l = o === void 0 ? !0 : o, c = a.encode, d = c === void 0 ? function (C) {
      return C
    } : c, p = "[" + yt(a.endsWith || "") + "]|$", u = "[" + yt(a.delimiter || "/#?") + "]", g = i ? "^" : "", h = 0, f = r; h < f.length; h++) {
    var b = f[h];
    if (typeof b == "string") g += yt(d(b));
    else {
      var m = yt(d(b.prefix)),
        v = yt(d(b.suffix));
      if (b.pattern)
        if (e && e.push(b), m || v)
          if (b.modifier === "+" || b.modifier === "*") {
            var E = b.modifier === "*" ? "?" : "";
            g += "(?:" + m + "((?:" + b.pattern + ")(?:" + v + m + "(?:" + b.pattern + "))*)" + v + ")" + E
          } else g += "(?:" + m + "(" + b.pattern + ")" + v + ")" + b.modifier;
      else g += "(" + b.pattern + ")" + b.modifier;
      else g += "(?:" + m + v + ")" + b.modifier
    }
  }
  if (l) n || (g += u + "?"), g += a.endsWith ? "(?=" + p + ")" : "$";
  else {
    var $ = r[r.length - 1],
      w = typeof $ == "string" ? u.indexOf($[$.length - 1]) > -1 : $ === void 0;
    n || (g += "(?:" + u + "(?=" + p + "))?"), w || (g += "(?=" + u + "|" + p + ")")
  }
  return new RegExp(g, Ca(a))
}

function fr(r, e, a) {
  return r instanceof RegExp ? Xi(r, e) : Array.isArray(r) ? Gi(r, e, a) : Ui(r, e, a)
}
const ce = {
  queue: [],
  clearQueue() {
    if (ce.queue.length === 0) return;
    ce.queue.shift()()
  },
  routerQueue: [],
  clearRouterQueue() {
    if (ce.routerQueue.length === 0) return;
    const r = ce.routerQueue.pop(),
      {
        router: e,
        stateUrl: a,
        action: t
      } = r;
    let n = e.params.animate;
    e.params.browserHistoryAnimate === !1 && (n = !1), t === "back" && e.back({
      animate: n,
      browserHistory: !1
    }), t === "load" && e.navigate(a, {
      animate: n,
      browserHistory: !1
    })
  },
  handle(r) {
    if (ce.blockPopstate) return;
    const e = this;
    let a = r.state;
    ce.previousState = ce.state, ce.state = a, ce.allowChange = !0, ce.clearQueue(), a = ce.state, a || (a = {}), e.views.forEach(t => {
      const n = t.router;
      let s = a[t.id];
      if (!s && t.params.browserHistory && (s = {
          url: t.router.history[0]
        }), !s) return;
      const i = s.url || void 0;
      let o = n.params.animate;
      n.params.browserHistoryAnimate === !1 && (o = !1), i !== n.url && (n.history.indexOf(i) >= 0 ? n.allowPageChange ? n.back({
        animate: o,
        browserHistory: !1
      }) : ce.routerQueue.push({
        action: "back",
        router: n
      }) : n.allowPageChange ? n.navigate(i, {
        animate: o,
        browserHistory: !1
      }) : ce.routerQueue.unshift({
        action: "load",
        stateUrl: i,
        router: n
      }))
    })
  },
  initViewState(r, e) {
    const a = G(),
      t = H({}, ce.state || {}, {
        [r]: e
      });
    ce.state = t, a.history.replaceState(t, "")
  },
  push(r, e, a) {
    const t = G(),
      n = ee();
    if (a.substr(-3) === "#!/" && (a = a.replace("#!/", ""), a === "" && (a = n.location.href, a.includes("#!/") && (a = n.location.href.split("#!/")[0]))), !ce.allowChange) {
      ce.queue.push(() => {
        ce.push(r, e, a)
      });
      return
    }
    ce.previousState = ce.state;
    const s = H({}, ce.previousState || {}, {
      [r]: e
    });
    ce.state = s, t.history.pushState(s, "", a)
  },
  replace(r, e, a) {
    const t = G();
    if (a.substr(-3) === "#!/" && (a = a.replace("#!/", "")), !ce.allowChange) {
      ce.queue.push(() => {
        ce.replace(r, e, a)
      });
      return
    }
    ce.previousState = ce.state;
    const n = H({}, ce.previousState || {}, {
      [r]: e
    });
    ce.state = n, t.history.replaceState(n, "", a)
  },
  go(r) {
    const e = G();
    ce.allowChange = !1, e.history.go(r)
  },
  back() {
    const r = G();
    ce.allowChange = !1, r.history.back()
  },
  allowChange: !0,
  previousState: {},
  state: {},
  blockPopstate: !0,
  init(r) {
    const e = G(),
      a = ee();
    ce.state = e.history.state, y(e).on("load", () => {
      setTimeout(() => {
        ce.blockPopstate = !1
      }, 0)
    }), a.readyState && a.readyState === "complete" && (ce.blockPopstate = !1), y(e).on("popstate", ce.handle.bind(r))
  }
};
var we = ce;

function Ki(r) {
  const e = r,
    {
      $el: a,
      $navbarsEl: t,
      app: n,
      params: s
    } = e,
    i = ve(),
    o = ue();
  let l = !1,
    c = !1;
  const d = {};
  let p, u = [],
    g = [],
    h, f, b = !0,
    m, v = [],
    E = [],
    $, w, C, x;
  const M = s[`${n.theme}SwipeBackAnimateShadow`],
    A = s[`${n.theme}SwipeBackAnimateOpacity`],
    B = s[`${n.theme}SwipeBackActiveArea`],
    S = s[`${n.theme}SwipeBackThreshold`],
    P = n.rtl ? "right center" : "left center",
    k = n.rtl ? "calc(100% - var(--f7-navbar-large-title-padding-left) - var(--f7-safe-area-left)) center" : "calc(var(--f7-navbar-large-title-padding-left) + var(--f7-safe-area-left)) center";

  function I() {
    const F = [],
      V = n.rtl ? -1 : 1,
      U = v.hasClass("navbar-transparent") && !v.hasClass("navbar-large") && !v.hasClass("navbar-transparent-visible"),
      Z = v.hasClass("navbar-large"),
      J = v.hasClass("navbar-large-collapsed"),
      X = v.hasClass("navbar-large-transparent") || v.hasClass("navbar-large") && v.hasClass("navbar-transparent"),
      Y = E.hasClass("navbar-transparent") && !E.hasClass("navbar-large") && !E.hasClass("navbar-transparent-visible"),
      W = E.hasClass("navbar-large"),
      K = E.hasClass("navbar-large-collapsed"),
      j = E.hasClass("navbar-large-transparent") || E.hasClass("navbar-large") && E.hasClass("navbar-transparent"),
      _ = Z && !J,
      Q = W && !K,
      se = v.find(".left, .title, .right, .subnavbar, .fading, .title-large, .navbar-bg"),
      me = E.find(".left, .title, .right, .subnavbar, .fading, .title-large, .navbar-bg");
    let te, oe;
    return s.iosAnimateNavbarBackIcon && (v.hasClass("sliding") || v.find(".navbar-inner.sliding").length ? te = v.find(".left").find(".back .icon + span").eq(0) : te = v.find(".left.sliding").find(".back .icon + span").eq(0), E.hasClass("sliding") || E.find(".navbar-inner.sliding").length ? oe = E.find(".left").find(".back .icon + span").eq(0) : oe = E.find(".left.sliding").find(".back .icon + span").eq(0), te.length && me.each(de => {
      !y(de).hasClass("title") || (de.f7NavbarLeftOffset += te.prev(".icon")[0].offsetWidth)
    })), se.each(de => {
      const le = y(de),
        q = le.hasClass("subnavbar"),
        pe = le.hasClass("left"),
        ge = le.hasClass("title"),
        he = le.hasClass("navbar-bg");
      if ((ge || he) && U || !_ && le.hasClass(".title-large")) return;
      const re = {
        el: de
      };
      if (_) {
        if (ge) return;
        if (le.hasClass("title-large")) {
          F.indexOf(re) < 0 && F.push(re), re.overflow = "visible", le.find(".title-large-text").each(ae => {
            F.push({
              el: ae,
              transform: fe => `translateX(${fe*100*V}%)`
            })
          });
          return
        }
      }
      if (Q && (_ || le.hasClass("title-large") && (F.indexOf(re) < 0 && F.push(re), re.opacity = 0), pe)) {
        F.indexOf(re) < 0 && F.push(re), re.opacity = ae => 1 - ae ** .33, le.find(".back span").each(ae => {
          F.push({
            el: ae,
            "transform-origin": P,
            transform: fe => `translateX(calc(${fe} * (var(--f7-navbarTitleLargeOffset) - var(--f7-navbarLeftTextOffset)))) translateY(calc(${fe} * (var(--f7-navbar-large-title-height) - var(--f7-navbar-large-title-padding-vertical) / 2))) scale(${1+1*fe})`
          })
        });
        return
      }
      if (he) {
        F.indexOf(re) < 0 && F.push(re), !_ && !Q && (J ? (X && (re.className = "ios-swipeback-navbar-bg-large"), re.transform = ae => `translateX(${100*ae*V}%) translateY(calc(-1 * var(--f7-navbar-large-title-height)))`) : re.transform = ae => `translateX(${100*ae*V}%)`), !_ && Q && (re.className = "ios-swipeback-navbar-bg-large", re.transform = ae => `translateX(${100*ae*V}%) translateY(calc(-1 * ${1-ae} * var(--f7-navbar-large-title-height)))`), _ && Q && (re.transform = ae => `translateX(${100*ae*V}%)`), _ && !Q && (re.transform = ae => `translateX(${100*ae*V}%) translateY(calc(-${ae} * var(--f7-navbar-large-title-height)))`);
        return
      }
      if (le.hasClass("title-large")) return;
      const Ve = le.hasClass("sliding") || le.parents(".navbar-inner.sliding").length;
      if (F.indexOf(re) < 0 && F.push(re), (!q || q && !Ve) && (re.opacity = ae => 1 - ae ** .33), Ve) {
        let ae = re;
        if (pe && te.length && s.iosAnimateNavbarBackIcon) {
          const fe = {
            el: te[0]
          };
          ae = fe, F.push(fe)
        }
        ae.transform = fe => {
          let je = fe * ae.el.f7NavbarRightOffset;
          return o.pixelRatio === 1 && (je = Math.round(je)), q && Z ? `translate3d(${je}px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)` : `translate3d(${je}px,0,0)`
        }
      }
    }), me.each(de => {
      const le = y(de),
        q = le.hasClass("subnavbar"),
        pe = le.hasClass("left"),
        ge = le.hasClass("title"),
        he = le.hasClass("navbar-bg");
      if ((ge || he) && Y) return;
      const re = {
        el: de
      };
      if (Q) {
        if (ge) return;
        if (F.indexOf(re) < 0 && F.push(re), le.hasClass("title-large")) {
          re.opacity = 1, re.overflow = "visible", le.find(".title-large-text").each(ae => {
            F.push({
              el: ae,
              "transform-origin": k,
              opacity: fe => fe ** 3,
              transform: fe => `translateX(calc(${1-fe} * (var(--f7-navbarLeftTextOffset) - var(--f7-navbarTitleLargeOffset)))) translateY(calc(${fe-1} * var(--f7-navbar-large-title-height) + ${1-fe} * var(--f7-navbar-large-title-padding-vertical))) scale(${.5+fe*.5})`
            })
          });
          return
        }
      }
      if (he) {
        F.indexOf(re) < 0 && F.push(re), !_ && !Q && (K ? (j && (re.className = "ios-swipeback-navbar-bg-large"), re.transform = ae => `translateX(${(-100+100*ae)*V}%) translateY(calc(-1 * var(--f7-navbar-large-title-height)))`) : re.transform = ae => `translateX(${(-100+100*ae)*V}%)`), !_ && Q && (re.transform = ae => `translateX(${(-100+100*ae)*V}%) translateY(calc(-1 * ${1-ae} * var(--f7-navbar-large-title-height)))`), _ && !Q && (re.className = "ios-swipeback-navbar-bg-large", re.transform = ae => `translateX(${(-100+100*ae)*V}%) translateY(calc(-${ae} * var(--f7-navbar-large-title-height)))`), _ && Q && (re.transform = ae => `translateX(${(-100+100*ae)*V}%)`);
        return
      }
      if (le.hasClass("title-large")) return;
      const Ve = le.hasClass("sliding") || E.children(".navbar-inner.sliding").length;
      if (F.indexOf(re) < 0 && F.push(re), (!q || q && !Ve) && (re.opacity = ae => ae ** 3), Ve) {
        let ae = re;
        if (pe && oe.length && s.iosAnimateNavbarBackIcon) {
          const fe = {
            el: oe[0]
          };
          ae = fe, F.push(fe)
        }
        ae.transform = fe => {
          let je = ae.el.f7NavbarLeftOffset * (1 - fe);
          return o.pixelRatio === 1 && (je = Math.round(je)), q && W ? `translate3d(${je}px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)` : `translate3d(${je}px,0,0)`
        }
      }
    }), F
  }

  function R(F) {
    let {
      progress: V,
      reset: U,
      transition: Z,
      reflow: J
    } = F === void 0 ? {} : F;
    const X = ["overflow", "transform", "transform-origin", "opacity"];
    if (Z === !0 || Z === !1)
      for (let Y = 0; Y < x.length; Y += 1) {
        const W = x[Y];
        W && W.el && (Z === !0 && W.el.classList.add("navbar-page-transitioning"), Z === !1 && W.el.classList.remove("navbar-page-transitioning"))
      }
    J && x.length && x[0] && x[0].el && (x[0].el._clientLeft = x[0].el.clientLeft);
    for (let Y = 0; Y < x.length; Y += 1) {
      const W = x[Y];
      if (W && W.el) {
        W.className && !W.classNameSet && !U && (W.el.classList.add(W.className), W.classNameSet = !0), W.className && U && W.el.classList.remove(W.className);
        for (let K = 0; K < X.length; K += 1) {
          const j = X[K];
          W[j] && (U ? W.el.style[j] = "" : typeof W[j] == "function" ? W.el.style[j] = W[j](V) : W.el.style[j] = W[j])
        }
      }
    }
  }

  function D(F) {
    const V = s[`${n.theme}SwipeBack`];
    !b || !V || l || n.swipeout && n.swipeout.el || !e.allowPageChange || y(F.target).closest(".range-slider, .calendar-months").length > 0 || y(F.target).closest(".page-master, .page-master-detail").length > 0 && s.masterDetailBreakpoint > 0 && n.width >= s.masterDetailBreakpoint || (c = !1, l = !0, p = void 0, d.x = F.type === "touchstart" ? F.targetTouches[0].pageX : F.pageX, d.y = F.type === "touchstart" ? F.targetTouches[0].pageY : F.pageY, m = Ae(), $ = e.dynamicNavbar)
  }

  function z(F) {
    if (!l) return;
    const V = F.type === "touchmove" ? F.targetTouches[0].pageX : F.pageX,
      U = F.type === "touchmove" ? F.targetTouches[0].pageY : F.pageY;
    if (typeof p == "undefined" && (p = !!(p || Math.abs(U - d.y) > Math.abs(V - d.x)) || V < d.x && !n.rtl || V > d.x && n.rtl), p || F.f7PreventSwipeBack || n.preventSwipeBack) {
      l = !1;
      return
    }
    if (!c) {
      let K = !1;
      const j = y(F.target),
        _ = j.closest(".swipeout");
      _.length > 0 && (!n.rtl && _.find(".swipeout-actions-left").length > 0 && (K = !0), n.rtl && _.find(".swipeout-actions-right").length > 0 && (K = !0)), u = j.closest(".page"), (u.hasClass("no-swipeback") || j.closest(".no-swipeback, .card-opened").length > 0) && (K = !0), g = a.find(".page-previous"), g.length > 1 && (g = g.eq(g.length - 1));
      let Q = d.x - a.offset().left > B;
      if (h = a.width(), n.rtl ? Q = d.x < a.offset().left - a[0].scrollLeft + (h - B) : Q = d.x - a.offset().left > B, Q && (K = !0), (g.length === 0 || u.length === 0) && (K = !0), K) {
        l = !1;
        return
      }
      M && (w = u.find(".page-shadow-effect"), w.length === 0 && (w = y('<div class="page-shadow-effect"></div>'), u.append(w))), A && (C = g.find(".page-opacity-effect"), C.length === 0 && (C = y('<div class="page-opacity-effect"></div>'), g.append(C))), $ && (v = t.find(".navbar-current"), E = t.find(".navbar-previous"), E.length > 1 && (E = E.eq(E.length - 1)), x = I()), y(".sheet.modal-in").length > 0 && n.sheet && n.sheet.close(y(".sheet.modal-in"))
    }
    F.f7PreventSwipePanel = !0, c = !0, n.preventSwipePanelBySwipeBack = !0, F.preventDefault();
    const Z = n.rtl ? -1 : 1;
    f = (V - d.x - S) * Z, f < 0 && (f = 0);
    const J = Math.min(Math.max(f / h, 0), 1),
      X = {
        percentage: J,
        progress: J,
        currentPageEl: u[0],
        previousPageEl: g[0],
        currentNavbarEl: v[0],
        previousNavbarEl: E[0]
      };
    a.trigger("swipeback:move", X), e.emit("swipebackMove", X);
    let Y = f * Z,
      W = (f / 5 - h / 5) * Z;
    n.rtl ? (Y = Math.max(Y, -h), W = Math.max(W, 0)) : (Y = Math.min(Y, h), W = Math.min(W, 0)), o.pixelRatio === 1 && (Y = Math.round(Y), W = Math.round(W)), e.swipeBackActive = !0, y([u[0], g[0]]).addClass("page-swipeback-active"), u.transform(`translate3d(${Y}px,0,0)`), M && (w[0].style.opacity = 1 - 1 * J), n.theme === "ios" && g.transform(`translate3d(${W}px,0,0)`), A && (C[0].style.opacity = 1 - 1 * J), !!$ && R({
      progress: J
    })
  }

  function O() {
    if (n.preventSwipePanelBySwipeBack = !1, !l || !c) {
      l = !1, c = !1;
      return
    }
    l = !1, c = !1, e.swipeBackActive = !1;
    const F = y([u[0], g[0]]);
    if (F.removeClass("page-swipeback-active"), f === 0) {
      F.transform(""), w && w.length > 0 && w.remove(), C && C.length > 0 && C.remove(), $ && R({
        reset: !0
      });
      return
    }
    const V = Ae() - m;
    let U = !1;
    (V < 300 && f > 10 || V >= 300 && f > h / 2) && (u.removeClass("page-current").addClass(`page-next${n.theme!=="ios"?" page-next-on-right":""}`), g.removeClass("page-previous").addClass("page-current").removeAttr("aria-hidden"), w && (w[0].style.opacity = ""), C && (C[0].style.opacity = ""), $ && (e.setNavbarPosition(v, "next"), e.setNavbarPosition(E, "current", !1)), U = !0), F.addClass("page-transitioning page-transitioning-swipeback"), o.ios && (u[0]._clientLeft = u[0].clientLeft), F.transform(""), $ && R({
      progress: U ? 1 : 0,
      transition: !0,
      reflow: !!o.ios
    }), b = !1, e.allowPageChange = !1;
    const Z = {
      currentPageEl: u[0],
      previousPageEl: g[0],
      currentNavbarEl: v[0],
      previousNavbarEl: E[0]
    };
    U ? (e.currentRoute = g[0].f7Page.route, e.currentPage = g[0], e.pageCallback("beforeOut", u, v, "current", "next", {
      route: u[0].f7Page.route,
      swipeBack: !0
    }), e.pageCallback("beforeIn", g, E, "previous", "current", {
      route: g[0].f7Page.route,
      swipeBack: !0
    }, u[0]), a.trigger("swipeback:beforechange", Z), e.emit("swipebackBeforeChange", Z)) : (a.trigger("swipeback:beforereset", Z), e.emit("swipebackBeforeReset", Z)), u.transitionEnd(() => {
      F.removeClass("page-transitioning page-transitioning-swipeback"), $ && R({
        reset: !0,
        transition: !1
      }), b = !0, e.allowPageChange = !0, U ? (e.history.length === 1 && e.history.unshift(e.url), e.history.pop(), e.saveHistory(), s.browserHistory && we.back(), e.pageCallback("afterOut", u, v, "current", "next", {
        route: u[0].f7Page.route,
        swipeBack: !0
      }), e.pageCallback("afterIn", g, E, "previous", "current", {
        route: g[0].f7Page.route,
        swipeBack: !0
      }), e.pageCallback("beforeRemove", u, v, "next", {
        swipeBack: !0
      }), e.removePage(u), $ && e.removeNavbar(v), a.trigger("swipeback:afterchange", Z), e.emit("swipebackAfterChange", Z), e.emit("routeChanged", e.currentRoute, e.previousRoute, e), s.preloadPreviousPage && e.back(e.history[e.history.length - 2], {
        preload: !0
      })) : (a.trigger("swipeback:afterreset", Z), e.emit("swipebackAfterReset", Z)), w && w.length > 0 && w.remove(), C && C.length > 0 && C.remove()
    })
  }

  function L() {
    const F = n.touchEvents.start === "touchstart" && i.passiveListener ? {
      passive: !0,
      capture: !1
    } : !1;
    a.on(n.touchEvents.start, D, F), n.on("touchmove:active", z), n.on("touchend:passive", O)
  }

  function N() {
    const F = n.touchEvents.start === "touchstart" && i.passiveListener ? {
      passive: !0,
      capture: !1
    } : !1;
    a.off(n.touchEvents.start, D, F), n.off("touchmove:active", z), n.off("touchend:passive", O)
  }
  L(), e.on("routerDestroy", N)
}

function hr(r, e, a) {
  const t = this,
    n = e.route.redirect,
    s = r === "forward" ? "navigate" : "back";
  a.initial && t.params.browserHistory && (a.replaceState = !0, a.history = !0);

  function i(l, c) {
    c === void 0 && (c = {}), t.allowPageChange = !0, t[s](l, H({}, a, c))
  }

  function o() {
    t.allowPageChange = !0
  }
  if (typeof n == "function") {
    t.allowPageChange = !1;
    const l = n.call(t, {
      router: t,
      to: e,
      resolve: i,
      reject: o,
      direction: r,
      app: t.app
    });
    return l && typeof l == "string" ? (t.allowPageChange = !0, t[s](l, a)) : t
  }
  return t[s](n, a)
}

function mr(r, e, a, t, n, s, i, o) {
  const l = [];
  Array.isArray(a) ? l.push(...a) : a && typeof a == "function" && l.push(a), e && (Array.isArray(e) ? l.push(...e) : l.push(e));

  function c() {
    if (l.length === 0) {
      s();
      return
    }
    l.shift().call(r, {
      router: r,
      to: t,
      from: n,
      resolve() {
        c()
      },
      reject() {
        i()
      },
      direction: o,
      app: r.app
    })
  }
  c()
}

function $a(r, e, a, t, n) {
  const s = this;

  function i() {
    r && r.route && (s.params.routesBeforeEnter || r.route.beforeEnter) ? (s.allowPageChange = !1, mr(s, s.params.routesBeforeEnter, r.route.beforeEnter, r, e, () => {
      s.allowPageChange = !0, a()
    }, () => {
      t()
    }, n)) : a()
  }

  function o() {
    e && e.route && (s.params.routesBeforeLeave || e.route.beforeLeave) ? (s.allowPageChange = !1, mr(s, s.params.routesBeforeLeave, e.route.beforeLeave, r, e, () => {
      s.allowPageChange = !0, i()
    }, () => {
      t()
    }, n)) : i()
  }
  o()
}

function Et(r, e) {
  if (!r.view) throw new Error(`Framework7: it is not allowed to use router methods on global app router. Use router methods only on related View, e.g. app.views.main.router.${e}(...)`)
}

function qt(r, e, a, t) {
  function n(i) {
    i.then(o => {
      a({
        component: o.default || o._default || o
      })
    }).catch(o => {
      throw t(), new Error(o)
    })
  }
  if (e instanceof Promise) {
    n(e);
    return
  }
  const s = e.call(r);
  s instanceof Promise ? n(s) : a({
    component: s
  })
}

function Qi(r) {
  r === void 0 && (r = {});
  const e = this;
  return Et(e, "refreshPage"), e.navigate(e.currentRoute.url, {
    ignoreCache: !0,
    reloadCurrent: !0,
    props: r
  })
}

function St(r, e, a) {
  a === void 0 && (a = {});
  const t = ee(),
    n = y(e),
    s = r.app,
    i = r.view,
    o = H(!1, {
      animate: r.params.animate,
      browserHistory: !0,
      replaceState: !1,
      history: !0,
      reloadCurrent: r.params.reloadPages,
      reloadPrevious: !1,
      reloadAll: !1,
      clearPreviousHistory: !1,
      reloadDetail: r.params.reloadDetail,
      on: {}
    }, a),
    l = r.params.masterDetailBreakpoint > 0,
    c = l && o.route && o.route.route && (o.route.route.master === !0 || typeof o.route.route.master == "function" && o.route.route.master(s, r));
  let d, p, u = 0,
    g = r.currentRoute.modal,
    h;
  if (g || "popup popover sheet loginScreen actions customModal panel".split(" ").forEach(O => {
      r.currentRoute && r.currentRoute.route && r.currentRoute.route[O] && (g = !0, h = O)
    }), g) {
    const O = r.currentRoute.modal || r.currentRoute.route.modalInstance || s[h].get(),
      L = r.history[r.history.length - 2];
    let N = r.findMatchingRoute(L);
    !N && L && (N = {
      url: L,
      path: L.split("?")[0],
      query: kt(L),
      route: {
        path: L.split("?")[0],
        url: L
      }
    }), r.modalRemove(O)
  }
  const f = r.dynamicNavbar,
    b = r.$el,
    m = n,
    v = o.reloadPrevious || o.reloadCurrent || o.reloadAll;
  let E, $, w, C;
  if (r.allowPageChange = !1, m.length === 0) return r.allowPageChange = !0, r;
  m.length && r.removeThemeElements(m), f && (w = m.children(".navbar"), $ = r.$navbarsEl, w.length === 0 && m[0] && m[0].f7Page && (w = m[0].f7Page.$navbarEl)), o.route && o.route.route && o.route.route.keepAlive && !o.route.route.keepAliveData && (o.route.route.keepAliveData = {
    pageEl: n[0]
  });
  const x = b.children(".page").filter(O => O !== m[0]);
  let M;
  if (f && (M = $.children(".navbar").filter(O => O !== w[0])), o.reloadPrevious && x.length < 2) return r.allowPageChange = !0, r;
  let A, B, S;
  if (l && !o.reloadAll) {
    for (let O = 0; O < x.length; O += 1)
      if (!d && x[O].classList.contains("page-master")) {
        d = x[O];
        continue
      } if (A = !c && d, A && d) {
      for (let O = 0; O < x.length; O += 1)
        if (x[O].classList.contains("page-master-detail")) {
          p = x[O];
          continue
        }
    }
    B = A && o.reloadDetail && s.width >= r.params.masterDetailBreakpoint && d
  }
  A && (S = !p || B || o.reloadAll || o.reloadCurrent);
  let P = "next";
  if (o.reloadCurrent || o.reloadAll || B ? P = "current" : o.reloadPrevious && (P = "previous"), m.removeClass("page-previous page-current page-next").addClass(`page-${P}${c?" page-master":""}${A?" page-master-detail":""}${S?" page-master-detail-root":""}`).trigger("page:unstack").trigger("page:position", {
      position: P
    }), r.emit("pageUnstack", m[0]), r.emit("pagePosition", m[0], P), (c || A) && (m.trigger("page:role", {
      role: c ? "master" : "detail",
      root: !!S
    }), r.emit("pageRole", m[0], {
      role: c ? "master" : "detail",
      detailRoot: !!S
    })), f && w.length && (w.removeClass("navbar-previous navbar-current navbar-next").addClass(`navbar-${P}${c?" navbar-master":""}${A?" navbar-master-detail":""}${S?" navbar-master-detail-root":""}`), w.trigger("navbar:position", {
      position: P
    }), r.emit("navbarPosition", w[0], P), (c || A) && r.emit("navbarRole", w[0], {
      role: c ? "master" : "detail",
      detailRoot: !!S
    })), o.reloadCurrent || B) B ? (E = x.filter(O => !O.classList.contains("page-master")), f && (C = y(E.map(O => s.navbar.getElByPage(O)))), E.length > 1 && d && (u = E.length - 1, y(d).removeClass("page-master-stacked").trigger("page:masterunstack"), r.emit("pageMasterUnstack", d), f && (y(s.navbar.getElByPage(d)).removeClass("navbar-master-stacked"), r.emit("navbarMasterUnstack", s.navbar.getElByPage(d))))) : (E = x.eq(x.length - 1), f && (C = y(s.navbar.getElByPage(E))));
  else if (o.reloadPrevious) E = x.eq(x.length - 2), f && (C = y(s.navbar.getElByPage(E)));
  else if (o.reloadAll) E = x.filter(O => O !== m[0]), f && (C = M.filter(O => O !== w[0]));
  else {
    let O = [],
      L = [];
    if (x.length > 1) {
      let N = 0;
      for (N = 0; N < x.length - 1; N += 1) {
        if (d && x[N] === d) {
          x.eq(N).addClass("page-master-stacked"), x.eq(N).trigger("page:masterstack"), r.emit("pageMasterStack", x[N]), f && (y(s.navbar.getElByPage(d)).addClass("navbar-master-stacked"), r.emit("navbarMasterStack", s.navbar.getElByPage(d)));
          continue
        }
        const F = s.navbar.getElByPage(x.eq(N));
        O.push(x[N]), r.pageCallback("beforeRemove", x[N], M && M[N], "previous", void 0, o), r.removePage(x[N]), f && F && (L.push(F), r.removeNavbar(F))
      }
    }
    E = b.children(".page").filter(N => N !== m[0] && O.indexOf(N) < 0), f && (C = $.children(".navbar").filter(N => N !== w[0] && L.indexOf(L) < 0)), O = [], L = []
  }
  if (A && !o.reloadAll && ((E.length > 1 || B) && (E = E.filter(O => !O.classList.contains("page-master"))), C && (C.length > 1 || B) && (C = C.filter(O => !O.classList.contains("navbar-master")))), r.params.browserHistory && (o.browserHistory || o.replaceState) && !o.reloadPrevious) {
    const O = r.params.browserHistoryRoot || "";
    we[o.reloadCurrent || B && p || o.reloadAll || o.replaceState ? "replace" : "push"](i.id, {
      url: o.route.url
    }, O + r.params.browserHistorySeparator + o.route.url)
  }
  o.reloadPrevious || (r.currentPageEl = m[0], f && w.length ? r.currentNavbarEl = w[0] : delete r.currentNavbarEl, r.currentRoute = o.route);
  const k = o.route.url;
  o.history && (((o.reloadCurrent || B && p) && r.history.length) > 0 || o.replaceState ? (B && u > 0 && (r.history = r.history.slice(0, r.history.length - u), r.propsHistory = r.propsHistory.slice(0, r.propsHistory.length - u)), r.history[r.history.length - (o.reloadPrevious ? 2 : 1)] = k, r.propsHistory[r.propsHistory.length - (o.reloadPrevious ? 2 : 1)] = o.props || {}) : o.reloadPrevious ? (r.history[r.history.length - 2] = k, r.propsHistory[r.propsHistory.length - 2] = o.props || {}) : o.reloadAll ? (r.history = [k], r.propsHistory = [o.props || {}]) : (r.history.push(k), r.propsHistory.push(o.props || {}))), r.saveHistory();
  const I = m.parents(t).length > 0,
    R = m[0].f7Component;
  if (o.reloadPrevious ? (R && !I ? R.mount(O => {
      y(O).insertBefore(E)
    }) : m.insertBefore(E), f && w.length && (w.find(".title-large").length && w.addClass("navbar-large"), C.length ? w.insertBefore(C) : (r.$navbarsEl.parents(t).length || r.$el.prepend(r.$navbarsEl), $.append(w)))) : (E.next(".page")[0] !== m[0] && (R && !I ? R.mount(O => {
      b.append(O)
    }) : b.append(m[0])), f && w.length && (w.find(".title-large").length && w.addClass("navbar-large"), r.$navbarsEl.parents(t).length || r.$el.prepend(r.$navbarsEl), $.append(w[0]))), I ? o.route && o.route.route && o.route.route.keepAlive && !m[0].f7PageMounted && (m[0].f7PageMounted = !0, r.pageCallback("mounted", m, w, P, v ? P : "current", o, E)) : r.pageCallback("mounted", m, w, P, v ? P : "current", o, E), (o.reloadCurrent || B) && E.length > 0 ? (r.pageCallback("beforeOut", E, C, "current", void 0, o), r.pageCallback("afterOut", E, C, "current", void 0, o), r.pageCallback("beforeRemove", E, C, "current", void 0, o), r.removePage(E), f && C && C.length && r.removeNavbar(C)) : o.reloadAll ? E.each((O, L) => {
      const N = y(O),
        F = y(s.navbar.getElByPage(N));
      N.hasClass("page-current") && (r.pageCallback("beforeOut", E, C, "current", void 0, o), r.pageCallback("afterOut", E, C, "current", void 0, o)), r.pageCallback("beforeRemove", N, C && C.eq(L), "previous", void 0, o), r.removePage(N), f && F.length && r.removeNavbar(F)
    }) : o.reloadPrevious && (r.pageCallback("beforeRemove", E, C, "previous", void 0, o), r.removePage(E), f && C && C.length && r.removeNavbar(C)), o.route.route.tab && r.tabLoad(o.route.route.tab, H({}, o, {
      history: !1,
      browserHistory: !1
    })), l && i.checkMasterDetailBreakpoint(), r.pageCallback("init", m, w, P, v ? P : "current", o, E), o.reloadCurrent || o.reloadAll || B) return r.allowPageChange = !0, r.pageCallback("beforeIn", m, w, P, "current", o), m.removeAttr("aria-hidden"), f && w && w.removeAttr("aria-hidden"), r.pageCallback("afterIn", m, w, P, "current", o), o.reloadCurrent && o.clearPreviousHistory && r.clearPreviousHistory(), B && (r.setPagePosition(y(d), "previous"), d.f7Page && d.f7Page.navbarEl && r.setNavbarPosition(y(d.f7Page.navbarEl), "previous")), r;
  if (o.reloadPrevious) return r.allowPageChange = !0, r;
  r.pageCallback("beforeOut", E, C, "current", "previous", o), r.pageCallback("beforeIn", m, w, "next", "current", o);

  function D() {
    r.setPagePosition(m, "current", !1), r.setPagePosition(E, "previous", !E.hasClass("page-master")), f && (r.setNavbarPosition(w, "current", !1), r.setNavbarPosition(C, "previous", !C.hasClass("navbar-master"))), r.allowPageChange = !0, r.pageCallback("afterOut", E, C, "current", "previous", o), r.pageCallback("afterIn", m, w, "next", "current", o);
    let O = (r.params.preloadPreviousPage || r.params[`${s.theme}SwipeBack`]) && !c;
    O || (m.hasClass("smart-select-page") || m.hasClass("photo-browser-page") || m.hasClass("autocomplete-page") || m.hasClass("color-picker-page")) && (O = !0), O || m.attr("data-name") && m.attr("data-name") === "smart-select-page" || (r.pageCallback("beforeRemove", E, C, "previous", void 0, o), r.removePage(E), f && C.length && r.removeNavbar(C)), o.clearPreviousHistory && r.clearPreviousHistory(), r.emit("routeChanged", r.currentRoute, r.previousRoute, r), r.params.browserHistory && we.clearRouterQueue()
  }

  function z() {
    r.setPagePosition(E, "current", !1), r.setPagePosition(m, "next", !1), f && (r.setNavbarPosition(C, "current", !1), r.setNavbarPosition(w, "next", !1))
  }
  if (o.animate && !(c && s.width >= r.params.masterDetailBreakpoint)) {
    const O = r.params[`${r.app.theme}PageLoadDelay`];
    let L = r.params.transition;
    o.transition && (L = o.transition), !L && r.currentRoute && r.currentRoute.route && (L = r.currentRoute.route.transition), !L && r.currentRoute && r.currentRoute.route.options && (L = r.currentRoute.route.options.transition), L && (m[0].f7PageTransition = L), O ? setTimeout(() => {
      z(), r.animate(E, m, C, w, "forward", L, () => {
        D()
      })
    }, O) : (z(), r.animate(E, m, C, w, "forward", L, () => {
      D()
    }))
  } else D();
  return r
}

function xa(r, e, a, t) {
  if (e === void 0 && (e = {}), a === void 0 && (a = {}), !r.allowPageChange && !t) return r;
  const n = e,
    s = a,
    {
      url: i,
      content: o,
      el: l,
      pageName: c,
      component: d,
      componentUrl: p
    } = n;
  if (!s.reloadCurrent && s.route && s.route.route && s.route.route.parentPath && r.currentRoute.route && r.currentRoute.route.parentPath === s.route.route.parentPath) {
    if (s.route.url === r.url) return r.allowPageChange = !0, !1;
    let h = Object.keys(s.route.params).length === Object.keys(r.currentRoute.params).length;
    if (h && Object.keys(s.route.params).forEach(f => {
        (!(f in r.currentRoute.params) || r.currentRoute.params[f] !== s.route.params[f]) && (h = !1)
      }), h) return s.route.route.tab ? r.tabLoad(s.route.route.tab, s) : !1;
    if (!h && s.route.route.tab && r.currentRoute.route.tab && r.currentRoute.parentPath === s.route.parentPath) return r.tabLoad(s.route.route.tab, s)
  }
  if (s.route && s.route.url && r.url === s.route.url && !(s.reloadCurrent || s.reloadPrevious) && !r.params.allowDuplicateUrls) return r.allowPageChange = !0, !1;
  !s.route && i && (s.route = r.parseRouteUrl(i), H(s.route, {
    route: {
      url: i,
      path: i
    }
  }));

  function u(h, f) {
    return St(r, h, H(s, f))
  }

  function g() {
    return r.allowPageChange = !0, r
  }
  if ((i || p || d) && (r.allowPageChange = !1), o) St(r, r.getPageEl(o), s);
  else if (l) St(r, r.getPageEl(l), s);
  else if (c) St(r, r.$el.children(`.page[data-name="${c}"]`).eq(0), s);
  else if (d || p) try {
    r.pageComponentLoader({
      routerEl: r.el,
      component: d,
      componentUrl: p,
      options: s,
      resolve: u,
      reject: g
    })
  } catch (h) {
    throw r.allowPageChange = !0, h
  } else i && (r.xhrAbortController && (r.xhrAbortController.abort(), r.xhrAbortController = !1), r.xhrRequest(i, s).then(h => {
    St(r, r.getPageEl(h), s)
  }).catch(() => {
    r.allowPageChange = !0
  }));
  return r
}

function Zi(r, e) {
  e === void 0 && (e = {});
  const a = this;
  if (a.swipeBackActive) return a;
  let t, n, s, i, o, l, c;
  if (typeof r == "string" ? t = r : (t = r.url, n = r.route, s = r.name, i = r.path, o = r.query, l = r.params), s || i) return t = a.generateUrl({
    path: i,
    name: s,
    params: l,
    query: o
  }), t ? a.navigate(t, e) : a;
  const d = a.app;
  if (Et(a, "navigate"), t === "#" || t === "") return a;
  let p = t.replace("./", "");
  if (p[0] !== "/" && p.indexOf("#") !== 0) {
    const f = a.currentRoute.parentPath || a.currentRoute.path;
    p = ((f ? `${f}/` : "/") + p).replace("///", "/").replace("//", "/")
  }
  if (n ? c = H(a.parseRouteUrl(p), {
      route: H({}, n)
    }) : c = a.findMatchingRoute(p), !c) return a;
  if (c.route && c.route.viewName) {
    const f = c.route.viewName,
      b = d.views[f];
    if (!b) throw new Error(`Framework7: There is no View with "${f}" name that was specified in this route`);
    if (b !== a.view) return b.router.navigate(r, e)
  }
  if (c.route.redirect) return hr.call(a, "forward", c, e);
  const u = {};
  if (c.route.options ? H(u, c.route.options, e) : H(u, e), u.openIn && (!a.params.ignoreOpenIn || a.params.ignoreOpenIn && a.history.length > 0)) return a.openIn(a, p, u);
  u.route = c;

  function g() {
    let f = !1;
    if ("popup popover sheet loginScreen actions customModal panel".split(" ").forEach(v => {
        c.route[v] && !f && (f = !0, a.modalLoad(v, c, u, "forward"))
      }), c.route.keepAlive && c.route.keepAliveData && (xa(a, {
        el: c.route.keepAliveData.pageEl
      }, u, !1), f = !0), "url content component pageName el componentUrl".split(" ").forEach(v => {
        c.route[v] && !f && (f = !0, xa(a, {
          [v]: c.route[v]
        }, u, !1))
      }), f) return;

    function b(v, E) {
      a.allowPageChange = !1;
      let $ = !1;
      "popup popover sheet loginScreen actions customModal panel".split(" ").forEach(w => {
        if (v[w]) {
          $ = !0;
          const C = H({}, c, {
            route: v
          });
          a.allowPageChange = !0, a.modalLoad(w, C, H(u, E), "forward")
        }
      }), !$ && xa(a, v, H(u, E), !0)
    }

    function m() {
      a.allowPageChange = !0
    }
    c.route.async && (a.allowPageChange = !1, c.route.async.call(a, {
      router: a,
      to: u.route,
      from: a.currentRoute,
      resolve: b,
      reject: m,
      direction: "forward",
      app: d
    })), c.route.asyncComponent && qt(a, c.route.asyncComponent, b, m)
  }

  function h() {
    a.allowPageChange = !0
  }
  if (a.params.masterDetailBreakpoint > 0 && c.route.masterRoute) {
    let f = !0,
      b = !1;
    if (a.currentRoute && a.currentRoute.route && ((a.currentRoute.route.master === !0 || typeof a.currentRoute.route.master == "function" && a.currentRoute.route.master(d, a)) && (a.currentRoute.route === c.route.masterRoute || a.currentRoute.route.path === c.route.masterRoute.path) && (f = !1), a.currentRoute.route.masterRoute && (a.currentRoute.route.masterRoute === c.route.masterRoute || a.currentRoute.route.masterRoute.path === c.route.masterRoute.path) && (f = !1, b = !0)), f || b && e.reloadAll) return a.navigate({
      path: c.route.masterRoute.path,
      params: c.params || {}
    }, {
      animate: !1,
      reloadAll: e.reloadAll,
      reloadCurrent: e.reloadCurrent,
      reloadPrevious: e.reloadPrevious,
      browserHistory: !e.initial,
      history: !e.initial,
      once: {
        pageAfterIn() {
          a.navigate(r, H({}, e, {
            animate: !1,
            reloadAll: !1,
            reloadCurrent: !1,
            reloadPrevious: !1,
            history: !e.initial,
            browserHistory: !e.initial
          }))
        }
      }
    }), a
  }
  return $a.call(a, c, a.currentRoute, () => {
    c.route.modules ? d.loadModules(Array.isArray(c.route.modules) ? c.route.modules : [c.route.modules]).then(() => {
      g()
    }).catch(() => {
      h()
    }) : g()
  }, () => {
    h()
  }, "forward"), a
}

function Ji(r, e) {
  e === void 0 && (e = {});
  const a = this,
    t = H({
      animate: a.params.animate,
      browserHistory: !0,
      history: !0,
      parentPageEl: null,
      preload: !1,
      on: {}
    }, e);
  let n, s;
  t.route && (!t.preload && t.route !== a.currentRoute && (s = a.previousRoute, a.currentRoute = t.route), t.preload ? (n = t.route, s = a.currentRoute) : (n = a.currentRoute, s || (s = a.previousRoute)), a.params.browserHistory && t.browserHistory && !t.reloadPrevious && we[a.params.browserHistoryTabs](a.view.id, {
    url: t.route.url
  }, (a.params.browserHistoryRoot || "") + a.params.browserHistorySeparator + t.route.url), t.history && (a.history[Math.max(a.history.length - 1, 0)] = t.route.url, a.saveHistory()));
  const i = y(t.parentPageEl || a.currentPageEl);
  let o;
  i.length && i.find(`#${r.id}`).length ? o = i.find(`#${r.id}`).eq(0) : a.view.selector ? o = `${a.view.selector} #${r.id}` : o = `#${r.id}`;
  const l = a.app.tab.show({
      tabEl: o,
      animate: t.animate,
      tabRoute: t.route
    }),
    {
      $newTabEl: c,
      $oldTabEl: d,
      animated: p,
      onTabsChanged: u
    } = l;
  if (c && c.parents(".page").length > 0 && t.route) {
    const v = c.parents(".page")[0].f7Page;
    v && t.route && (v.route = t.route)
  }

  function g(v) {
    a.removeThemeElements(c);
    let E = c;
    typeof v != "string" && (E = y(v)), E.trigger("tab:init tab:mounted", r), a.emit("tabInit tabMounted", c[0], r), d && d.length && (p ? u(() => {
      a.emit("routeChanged", a.currentRoute, a.previousRoute, a), a.params.unloadTabContent && a.tabRemove(d, c, r)
    }) : (a.emit("routeChanged", a.currentRoute, a.previousRoute, a), a.params.unloadTabContent && a.tabRemove(d, c, r)))
  }
  if (c[0].f7RouterTabLoaded) return !d || !d.length || (p ? u(() => {
    a.emit("routeChanged", a.currentRoute, a.previousRoute, a)
  }) : a.emit("routeChanged", a.currentRoute, a.previousRoute, a)), a;

  function h(v, E) {
    const {
      url: $,
      content: w,
      el: C,
      component: x,
      componentUrl: M
    } = v;

    function A(S) {
      a.allowPageChange = !0, !!S && (typeof S == "string" ? c.html(S) : (c.html(""), S.f7Component ? S.f7Component.mount(P => {
        c.append(P)
      }) : c.append(S)), c[0].f7RouterTabLoaded = !0, g(S))
    }

    function B() {
      return a.allowPageChange = !0, a
    }
    if (w) A(w);
    else if (C) A(C);
    else if (x || M) try {
      a.tabComponentLoader({
        tabEl: c[0],
        component: x,
        componentUrl: M,
        options: E,
        resolve: A,
        reject: B
      })
    } catch (S) {
      throw a.allowPageChange = !0, S
    } else $ && (a.xhrAbortController && (a.xhrAbortController.abort(), a.xhrAbortController = !1), a.xhrRequest($, E).then(S => {
      A(S)
    }).catch(() => {
      a.allowPageChange = !0
    }))
  }
  let f;
  "url content component el componentUrl".split(" ").forEach(v => {
    r[v] && (f = !0, h({
      [v]: r[v]
    }, t))
  });

  function b(v, E) {
    h(v, H(t, E))
  }

  function m() {
    a.allowPageChange = !0
  }
  return r.async ? r.async.call(a, {
    router: a,
    to: n,
    from: s,
    resolve: b,
    reject: m,
    app: a.app
  }) : r.asyncComponent ? qt(a, r.asyncComponent, b, m) : f || (a.allowPageChange = !0), a
}

function eo(r, e, a) {
  const t = this;
  let n;
  r[0] && (r[0].f7RouterTabLoaded = !1, delete r[0].f7RouterTabLoaded), r.children().each(s => {
    s.f7Component && (n = !0, y(s).trigger("tab:beforeremove", a), s.f7Component.destroy())
  }), n || r.trigger("tab:beforeremove", a), t.emit("tabBeforeRemove", r[0], e[0], a), t.removeTabContent(r[0], a)
}

function to(r, e, a, t) {
  a === void 0 && (a = {});
  const n = this,
    s = n.app,
    i = r === "panel",
    o = i ? "panel" : "modal",
    l = H({
      animate: n.params.animate,
      browserHistory: !0,
      history: !0,
      on: {},
      once: {}
    }, a),
    c = H({}, e.route[r]),
    d = e.route,
    p = (m, v) => {
      const {
        on: E,
        once: $
      } = l;
      let w;
      v === "open" && (w = E.modalOpen || $.modalOpen || E.panelOpen || $.panelOpen), v === "close" && (w = E.modalClose || $.modalClose || E.panelClose || $.panelClose), v === "closed" && (w = E.modalClosed || $.modalClosed || E.panelClosed || $.panelClosed), w && w(m)
    };

  function u() {
    const m = s[r].create(c);
    d.modalInstance = m;
    const v = m.el;

    function E() {
      m.close()
    }
    m.on(`${o}Open`, () => {
      v || (n.removeThemeElements(m.el), m.$el.trigger(`${r.toLowerCase()}:init ${r.toLowerCase()}:mounted`, e, m), n.emit(`${i?"":"modalInit"} ${r}Init ${r}Mounted`, m.el, e, m)), n.once("swipeBackMove", E), p(m, "open")
    }), m.on(`${o}Close`, () => {
      n.off("swipeBackMove", E), m.closeByRouter || n.back(), p(m, "close")
    }), m.on(`${o}Closed`, () => {
      m.$el.trigger(`${r.toLowerCase()}:beforeremove`, e, m), m.emit(`${i?"":"modalBeforeRemove "}${r}BeforeRemove`, m.el, e, m);
      const $ = m.el.f7Component;
      p(m, "closed"), $ && $.destroy(), ke(() => {
        ($ || c.component || c.asyncComponent) && n.removeModal(m.el), m.destroy(), delete m.route, delete d.modalInstance
      })
    }), l.route && (n.params.browserHistory && l.browserHistory && we.push(n.view.id, {
      url: l.route.url,
      modal: r
    }, (n.params.browserHistoryRoot || "") + n.params.browserHistorySeparator + l.route.url), l.route !== n.currentRoute && (m.route = H(l.route, {
      modal: m
    }), n.currentRoute = m.route), l.history && !l.reloadCurrent && (n.history.push(l.route.url), n.saveHistory())), v && (n.removeThemeElements(m.el), m.$el.trigger(`${r.toLowerCase()}:init ${r.toLowerCase()}:mounted`, e, m), n.emit(`${o}Init ${r}Init ${r}Mounted`, m.el, e, m)), m.open(l.animate === !1 || l.animate === !0 ? l.animate : void 0)
  }

  function g(m, v) {
    const {
      url: E,
      content: $,
      component: w,
      componentUrl: C
    } = m;

    function x(A) {
      A && (typeof A == "string" ? c.content = A : A.f7Component ? A.f7Component.mount(B => {
        c.el = B, s.$el.append(B)
      }) : c.el = A, u())
    }

    function M() {
      return n.allowPageChange = !0, n
    }
    if ($) x($);
    else if (w || C) try {
      n.modalComponentLoader({
        rootEl: s.el,
        component: w,
        componentUrl: C,
        options: v,
        resolve: x,
        reject: M
      })
    } catch (A) {
      throw n.allowPageChange = !0, A
    } else E ? (n.xhrAbortController && (n.xhrAbortController.abort(), n.xhrAbortController = !1), n.xhrRequest(E, v).then(A => {
      c.content = A, u()
    }).catch(() => {
      n.allowPageChange = !0
    })) : u()
  }
  let h;
  "url content component el componentUrl template".split(" ").forEach(m => {
    c[m] && !h && (h = !0, g({
      [m]: c[m]
    }, l))
  }), !h && r === "actions" && u();

  function f(m, v) {
    g(m, H(l, v))
  }

  function b() {
    n.allowPageChange = !0
  }
  return c.async && c.async.call(n, {
    router: n,
    to: l.route,
    from: n.currentRoute,
    resolve: f,
    reject: b,
    direction: t,
    app: s
  }), c.asyncComponent && qt(n, c.asyncComponent, f, b), n
}

function ao(r) {
  H(r, {
    closeByRouter: !0
  }), r.close()
}

function Mt(r, e, a) {
  const t = ue(),
    n = ee(),
    s = y(e),
    i = r.app,
    o = r.view,
    l = H(!1, {
      animate: r.params.animate,
      browserHistory: !0,
      replaceState: !1
    }, a),
    c = r.params.masterDetailBreakpoint > 0,
    d = c && l.route && l.route.route && (l.route.route.master === !0 || typeof l.route.route.master == "function" && l.route.route.master(i, r));
  let p, u;
  const g = r.dynamicNavbar,
    h = s,
    f = r.$el.children(".page-current"),
    b = f.length === 0 && l.preload,
    m = c && f.hasClass("page-master");
  h.length && r.removeThemeElements(h);
  let v, E, $;
  if (g && (E = h.children(".navbar"), v = r.$navbarsEl, E.length === 0 && h[0] && h[0].f7Page && (E = h[0].f7Page.$navbarEl), $ = v.find(".navbar-current")), r.allowPageChange = !1, h.length === 0 || f.length === 0 && !l.preload) return r.allowPageChange = !0, r;
  r.removeThemeElements(h), l.route && l.route.route && l.route.route.keepAlive && !l.route.route.keepAliveData && (l.route.route.keepAliveData = {
    pageEl: s[0]
  });
  let w, C;
  if (c) {
    const k = r.$el.children(".page").filter(I => I !== h[0]);
    for (let I = 0; I < k.length; I += 1)
      if (!p && k[I].classList.contains("page-master")) {
        p = k[I];
        continue
      } w = !d && p && r.history.indexOf(l.route.url) > r.history.indexOf(p.f7Page.route.url), !w && !d && p && p.f7Page && l.route.route.masterRoute && (w = l.route.route.masterRoute.path === p.f7Page.route.route.path)
  }
  w && p && p.f7Page && (C = r.history.indexOf(l.route.url) - r.history.indexOf(p.f7Page.route.url) == 1), h.addClass(`page-${b?"current":"previous"}${d?" page-master":""}${w?" page-master-detail":""}${C?" page-master-detail-root":""}`).removeAttr("aria-hidden").trigger("page:unstack").trigger("page:position", {
    position: b ? "current" : "previous"
  }), r.emit("pageUnstack", h[0]), r.emit("pagePosition", h[0], b ? "current" : "previous"), (d || w) && (h.trigger("page:role", {
    role: d ? "master" : "detail",
    root: !!C
  }), r.emit("pageRole", h[0], {
    role: d ? "master" : "detail",
    detailRoot: !!C
  })), g && E.length > 0 && (E.addClass(`navbar-${b?"current":"previous"}${d?" navbar-master":""}${w?" navbar-master-detail":""}${C?" navbar-master-detail-root":""}`).removeAttr("aria-hidden"), E.trigger("navbar:position", {
    position: b ? "current" : "previous"
  }), r.emit("navbarPosition", E[0], b ? "current" : "previous"), (d || C) && r.emit("navbarRole", E[0], {
    role: d ? "master" : "detail",
    detailRoot: !!C
  }));
  let x;
  if (l.force && f.prev(".page-previous").length >= 0) {
    r.history.indexOf(l.route.url) >= 0 ? (x = r.history.length - r.history.indexOf(l.route.url) - 1, r.history = r.history.slice(0, r.history.indexOf(l.route.url) + 2), r.propsHistory = r.propsHistory.slice(0, r.history.indexOf(l.route.url) + 2), o.history = r.history) : r.history[[r.history.length - 2]] ? r.propsHistory[r.propsHistory.length - 2] = l.props || {} : (r.history.unshift(r.url), r.propsHistory.unshift(l.props || {}));
    const k = f.prev(".page-previous");
    let I;
    g && (I = y(i.navbar.getElByPage(k))), k.length > 0 && (r.pageCallback("beforeRemove", k, I, "previous", void 0, l), k[0] === p && (u = !0), r.removePage(k), g && I.length && r.removeNavbar(I))
  }
  const M = h.parents(n).length > 0,
    A = h[0].f7Component;

  function B() {
    b && (!M && A ? A.mount(k => {
      r.$el.append(k)
    }) : r.$el.append(h)), h.next(f).length === 0 && (!M && A ? A.mount(k => {
      y(k).insertBefore(f)
    }) : h.insertBefore(f)), g && E.length && (E.find(".title-large").length && E.addClass("navbar-large"), E.insertBefore($), $.length > 0 ? E.insertBefore($) : (r.$navbarsEl.parents(n).length || r.$el.prepend(r.$navbarsEl), v.append(E))), M ? l.route && l.route.route && l.route.route.keepAlive && !h[0].f7PageMounted && (h[0].f7PageMounted = !0, r.pageCallback("mounted", h, E, "previous", "current", l, f)) : r.pageCallback("mounted", h, E, "previous", "current", l, f)
  }
  if (l.preload) {
    B(), l.route.route.tab && r.tabLoad(l.route.route.tab, H({}, l, {
      history: !1,
      browserHistory: !1,
      preload: !0
    })), d && (h.removeClass("page-master-stacked").trigger("page:masterunstack"), r.emit("pageMasterUnstack", h[0]), g && (y(i.navbar.getElByPage(h)).removeClass("navbar-master-stacked"), r.emit("navbarMasterUnstack", i.navbar.getElByPage(h)))), r.pageCallback("init", h, E, "previous", "current", l, f), b && (r.pageCallback("beforeIn", h, E, "current", void 0, l), r.pageCallback("afterIn", h, E, "current", void 0, l));
    const k = h.prevAll(".page-previous:not(.page-master)");
    return k.length > 0 && k.each(I => {
      const R = y(I);
      let D;
      g && (D = y(i.navbar.getElByPage(R))), r.pageCallback("beforeRemove", R, D, "previous", void 0), r.removePage(R), g && D.length && r.removeNavbar(D)
    }), r.allowPageChange = !0, r
  }
  if (!(t.ie || t.edge || t.firefox && !t.ios) && r.params.browserHistory && l.browserHistory)
    if (l.replaceState) {
      const k = r.params.browserHistoryRoot || "";
      we.replace(o.id, {
        url: l.route.url
      }, k + r.params.browserHistorySeparator + l.route.url)
    } else x ? we.go(-x) : we.back();
  if (l.replaceState ? (r.history[r.history.length - 1] = l.route.url, r.propsHistory[r.propsHistory.length - 1] = l.props || {}) : (r.history.length === 1 && (r.history.unshift(r.url), r.propsHistory.unshift(l.props || {})), r.history.pop(), r.propsHistory.pop()), r.saveHistory(), r.currentPageEl = h[0], g && E.length ? r.currentNavbarEl = E[0] : delete r.currentNavbarEl, r.currentRoute = l.route, (t.ie || t.edge || t.firefox && !t.ios) && r.params.browserHistory && l.browserHistory)
    if (l.replaceState) {
      const k = r.params.browserHistoryRoot || "";
      we.replace(o.id, {
        url: l.route.url
      }, k + r.params.browserHistorySeparator + l.route.url)
    } else x ? we.go(-x) : we.back();
  B(), l.route.route.tab && r.tabLoad(l.route.route.tab, H({}, l, {
    history: !1,
    browserHistory: !1
  })), c && (m || u) && o.checkMasterDetailBreakpoint(!1), r.pageCallback("init", h, E, "previous", "current", l, f), r.pageCallback("beforeOut", f, $, "current", "next", l), r.pageCallback("beforeIn", h, E, "previous", "current", l);

  function S() {
    r.setPagePosition(h, "current", !1), r.setPagePosition(f, "next", !0), g && (r.setNavbarPosition(E, "current", !1), r.setNavbarPosition($, "next", !0)), r.pageCallback("afterOut", f, $, "current", "next", l), r.pageCallback("afterIn", h, E, "previous", "current", l), r.pageCallback("beforeRemove", f, $, "next", void 0, l), r.removePage(f), g && $.length && r.removeNavbar($), r.allowPageChange = !0, r.emit("routeChanged", r.currentRoute, r.previousRoute, r), (r.params.preloadPreviousPage || r.params[`${i.theme}SwipeBack`]) && r.history[r.history.length - 2] && !d && r.back(r.history[r.history.length - 2], {
      preload: !0,
      props: r.propsHistory[r.propsHistory.length - 2] || {}
    }), r.params.browserHistory && we.clearRouterQueue()
  }

  function P() {
    r.setPagePosition(f, "current"), r.setPagePosition(h, "previous", !1), g && (r.setNavbarPosition($, "current"), r.setNavbarPosition(E, "previous", !1))
  }
  if (l.animate && !(m && i.width >= r.params.masterDetailBreakpoint)) {
    let k = r.params.transition;
    f[0] && f[0].f7PageTransition && (k = f[0].f7PageTransition, delete f[0].f7PageTransition), l.transition && (k = l.transition), !k && r.previousRoute && r.previousRoute.route && (k = r.previousRoute.route.transition), !k && r.previousRoute && r.previousRoute.route && r.previousRoute.route.options && (k = r.previousRoute.route.options.transition), P(), r.animate(f, h, $, E, "backward", k, () => {
      S()
    })
  } else S();
  return r
}

function jt(r, e, a, t) {
  if (!r.allowPageChange && !t) return r;
  const n = e,
    s = a,
    {
      url: i,
      content: o,
      el: l,
      pageName: c,
      component: d,
      componentUrl: p
    } = n;
  if (s.route.url && r.url === s.route.url && !(s.reloadCurrent || s.reloadPrevious) && !r.params.allowDuplicateUrls) return r.allowPageChange = !0, !1;
  !s.route && i && (s.route = r.parseRouteUrl(i));

  function u(h, f) {
    return Mt(r, h, H(s, f))
  }

  function g() {
    return r.allowPageChange = !0, r
  }
  if ((i || p || d) && (r.allowPageChange = !1), o) Mt(r, r.getPageEl(o), s);
  else if (l) Mt(r, r.getPageEl(l), s);
  else if (c) Mt(r, r.$el.children(`.page[data-name="${c}"]`).eq(0), s);
  else if (d || p) try {
    r.pageComponentLoader({
      routerEl: r.el,
      component: d,
      componentUrl: p,
      options: s,
      resolve: u,
      reject: g
    })
  } catch (h) {
    throw r.allowPageChange = !0, h
  } else i && (r.xhrAbortController && (r.xhrAbortController.abort(), r.xhrAbortController = !1), r.xhrRequest(i, s).then(h => {
    Mt(r, r.getPageEl(h), s)
  }).catch(() => {
    r.allowPageChange = !0
  }));
  return r
}

function ro() {
  const r = this,
    e = ue();
  if (r.swipeBackActive) return r;
  let a, t, n, s;
  typeof (arguments.length <= 0 ? void 0 : arguments[0]) == "object" ? t = (arguments.length <= 0 ? void 0 : arguments[0]) || {}: (a = arguments.length <= 0 ? void 0 : arguments[0], t = (arguments.length <= 1 ? void 0 : arguments[1]) || {});
  const {
    name: i,
    params: o,
    query: l
  } = t;
  if (i) return a = r.generateUrl({
    name: i,
    params: o,
    query: l
  }), a ? r.back(a, H({}, t, {
    name: null,
    params: null,
    query: null
  })) : r;
  const c = r.app;
  Et(r, "back");
  let d = r.currentRoute.modal,
    p;
  if (d || "popup popover sheet loginScreen actions customModal panel".split(" ").forEach(m => {
      r.currentRoute.route[m] && (d = !0, p = m)
    }), d && !t.preload) {
    const m = r.currentRoute.modal || r.currentRoute.route.modalInstance || c[p].get(),
      v = r.history[r.history.length - 2];
    let E;
    if (m && m.$el) {
      const w = m.$el.prevAll(".modal-in");
      if (w.length && w[0].f7Modal) {
        const C = w[0];
        r.$el.parents(C).length || (E = C.f7Modal.route)
      }
    }
    if (E || (E = r.findMatchingRoute(v)), !E && v && (E = {
        url: v,
        path: v.split("?")[0],
        query: kt(v),
        route: {
          path: v.split("?")[0],
          url: v
        }
      }), (!a || a.replace(/[# ]/g, "").trim().length === 0) && (!E || !m)) return r;
    const $ = t.force && E && a;
    if (E && m) {
      const w = e.ie || e.edge || e.firefox && !e.ios,
        C = r.params.browserHistory && t.browserHistory !== !1,
        x = r.currentRoute && r.currentRoute.route && r.currentRoute.route.options && r.currentRoute.route.options.browserHistory === !1;
      C && !w && !x && we.back(), r.currentRoute = E, r.history.pop(), r.propsHistory.pop(), r.saveHistory(), C && w && !x && we.back(), r.modalRemove(m), $ && r.navigate(a, {
        reloadCurrent: !0
      })
    } else m && (r.modalRemove(m), a && r.navigate(a, {
      reloadCurrent: !0
    }));
    return r
  }
  let u = r.$el.children(".page-current").prevAll(".page-previous:not(.page-master)").eq(0),
    g;
  if (r.params.masterDetailBreakpoint > 0) {
    const m = [];
    r.$el.children(".page").each(E => {
      m.push(E.className)
    });
    const v = r.$el.children(".page-current").prevAll(".page-master").eq(0);
    if (v.length) {
      const E = r.history[r.history.length - 2],
        $ = r.findMatchingRoute(E);
      $ && v[0].f7Page && $.route === v[0].f7Page.route.route && (u = v, t.preload || (g = c.width >= r.params.masterDetailBreakpoint))
    }
  }
  if (!t.force && u.length && !g) {
    if (r.params.browserHistory && u[0].f7Page && r.history[r.history.length - 2] !== u[0].f7Page.route.url) return r.back(r.history[r.history.length - 2], H(t, {
      force: !0,
      props: r.propsHistory[r.propsHistory.length - 2] || {}
    })), r;
    const m = u[0].f7Page.route;
    return $a.call(r, m, r.currentRoute, () => {
      jt(r, {
        el: u
      }, H(t, {
        route: m
      }))
    }, () => {}, "backward"), r
  }
  if (a === "#" && (a = void 0), a && a[0] !== "/" && a.indexOf("#") !== 0 && (a = ((r.path || "/") + a).replace("//", "/")), !a && r.history.length > 1 && (a = r.history[r.history.length - 2], n = r.propsHistory[r.propsHistory.length - 2] || {}), g && !t.force && r.history[r.history.length - 3]) return r.back(r.history[r.history.length - 3], H({}, t || {}, {
    force: !0,
    animate: !1,
    props: r.propsHistory[r.propsHistory.length - 3] || {}
  }));
  if (g && !t.force || (s = r.findMatchingRoute(a), s || a && (s = {
      url: a,
      path: a.split("?")[0],
      query: kt(a),
      route: {
        path: a.split("?")[0],
        url: a
      }
    }), !s)) return r;
  if (s.route.redirect) return hr.call(r, "backward", s, t);
  const h = {};
  s.route.options ? H(h, s.route.options, t, {
    props: n || {}
  }) : H(h, t, {
    props: n || {}
  }), h.route = s;

  function f() {
    let m = !1;
    if (s.route.keepAlive && s.route.keepAliveData && (jt(r, {
        el: s.route.keepAliveData.pageEl
      }, h), m = !0), "url content component pageName el componentUrl".split(" ").forEach($ => {
        s.route[$] && !m && (m = !0, jt(r, {
          [$]: s.route[$]
        }, h))
      }), m) return;

    function v($, w) {
      r.allowPageChange = !1, jt(r, $, H(h, w), !0)
    }

    function E() {
      r.allowPageChange = !0
    }
    s.route.async && (r.allowPageChange = !1, s.route.async.call(r, {
      router: r,
      to: s,
      from: r.currentRoute,
      resolve: v,
      reject: E,
      direction: "backward",
      app: c
    })), s.route.asyncComponent && qt(r, s.route.asyncComponent, v, E)
  }

  function b() {
    r.allowPageChange = !0
  }
  return h.preload ? f() : $a.call(r, s, r.currentRoute, () => {
    s.route.modules ? c.loadModules(Array.isArray(s.route.modules) ? s.route.modules : [s.route.modules]).then(() => {
      f()
    }).catch(() => {
      b()
    }) : f()
  }, () => {
    b()
  }, "backward"), r
}

function no(r) {
  Et(r, "clearPreviousPages");
  const e = r.app,
    a = r.dynamicNavbar;
  r.$el.children(".page").filter(n => r.currentRoute && (r.currentRoute.modal || r.currentRoute.panel) ? !0 : n !== r.currentPageEl).each(n => {
    const s = y(n),
      i = y(e.navbar.getElByPage(s));
    r.pageCallback("beforeRemove", s, i, "previous", void 0, {}), r.removePage(s), a && i.length && r.removeNavbar(i)
  })
}

function so() {
  const r = this;
  Et(r, "clearPreviousHistory");
  const e = r.history[r.history.length - 1];
  no(r), r.history = [e], r.view.history = [e], r.saveHistory()
}
class Je extends be {
  constructor(e, a) {
    super({}, [typeof a == "undefined" ? e : a]);
    const t = this;
    t.isAppRouter = typeof a == "undefined", t.isAppRouter ? H(!1, t, {
      app: e,
      params: e.params.view,
      routes: e.routes || [],
      cache: e.cache
    }) : H(!1, t, {
      app: e,
      view: a,
      viewId: a.id,
      id: a.params.routerId,
      params: a.params,
      routes: a.routes,
      history: a.history,
      propsHistory: [],
      scrollHistory: a.scrollHistory,
      cache: e.cache,
      dynamicNavbar: e.theme === "ios" && a.params.iosDynamicNavbar,
      initialPages: [],
      initialNavbars: []
    }), t.useModules(), t.allowPageChange = !0;
    let n = {},
      s = {};
    return Object.defineProperty(t, "currentRoute", {
      enumerable: !0,
      configurable: !0,
      set(i) {
        i === void 0 && (i = {}), s = H({}, n), n = i, !!n && (t.url = n.url, t.emit("routeChange", i, s, t))
      },
      get() {
        return n
      }
    }), Object.defineProperty(t, "previousRoute", {
      enumerable: !0,
      configurable: !0,
      get() {
        return s
      },
      set(i) {
        s = i
      }
    }), t
  }
  mount() {
    const e = this,
      a = e.view,
      t = ee();
    H(!1, e, {
      tempDom: t.createElement("div"),
      $el: a.$el,
      el: a.el,
      $navbarsEl: a.$navbarsEl,
      navbarsEl: a.navbarsEl
    }), e.emit("local::mount routerMount", e)
  }
  animatableNavElements(e, a, t, n, s) {
    const i = this,
      o = i.dynamicNavbar,
      l = i.params.iosAnimateNavbarBackIcon;
    let c, d;

    function p(u, g) {
      const h = u.hasClass("sliding") || g.hasClass("sliding"),
        f = u.hasClass("subnavbar"),
        b = h ? !f : !0,
        m = u.find(".back .icon");
      let v;
      return h && l && u.hasClass("left") && m.length > 0 && m.next("span").length && (u = m.next("span"), v = !0), {
        $el: u,
        isIconLabel: v,
        leftOffset: u[0].f7NavbarLeftOffset,
        rightOffset: u[0].f7NavbarRightOffset,
        isSliding: h,
        isSubnavbar: f,
        needsOpacityTransition: b
      }
    }
    return o && (c = [], d = [], e.children(".navbar-inner").children(".left, .right, .title, .subnavbar").each(u => {
      const g = y(u);
      g.hasClass("left") && n && s === "forward" || g.hasClass("title") && t || c.push(p(g, e.children(".navbar-inner")))
    }), a.hasClass("navbar-master") && i.params.masterDetailBreakpoint > 0 && i.app.width >= i.params.masterDetailBreakpoint || a.children(".navbar-inner").children(".left, .right, .title, .subnavbar").each(u => {
      const g = y(u);
      g.hasClass("left") && t && !n && s === "forward" || g.hasClass("left") && t && s === "backward" || g.hasClass("title") && n || d.push(p(g, a.children(".navbar-inner")))
    }), [d, c].forEach(u => {
      u.forEach(g => {
        const h = g,
          {
            isSliding: f,
            $el: b
          } = g,
          m = u === d ? c : d;
        !(f && b.hasClass("title") && m) || m.forEach(v => {
          if (v.isIconLabel) {
            const E = v.$el[0];
            h.leftOffset += E && E.offsetLeft || 0
          }
        })
      })
    })), {
      newNavEls: c,
      oldNavEls: d
    }
  }
  animate(e, a, t, n, s, i, o) {
    const l = this;
    if (l.params.animateCustom) {
      l.params.animateCustom.apply(l, [e, a, t, n, s, o]);
      return
    }
    const c = l.dynamicNavbar,
      d = l.app.theme === "ios";
    if (i) {
      const w = `router-transition-custom router-transition-${i}-${s}`,
        C = () => {
          l.$el.removeClass(w), c && l.$navbarsEl.length && (n && l.$navbarsEl.prepend(n), t && l.$navbarsEl.prepend(t)), o && o()
        };
      (s === "forward" ? a : e).animationEnd(C), c && (n && a && (l.setNavbarPosition(n, ""), n.removeClass("navbar-next navbar-previous navbar-current"), a.prepend(n)), t && e && (l.setNavbarPosition(t, ""), t.removeClass("navbar-next navbar-previous navbar-current"), e.prepend(t))), l.$el.addClass(w);
      return
    }
    const p = `router-transition-${s} router-transition`;
    let u, g, h, f, b, m, v;
    if (d && c) {
      l.params.masterDetailBreakpoint > 0 && l.app.width >= l.params.masterDetailBreakpoint && (t.hasClass("navbar-master") && n.hasClass("navbar-master-detail") || t.hasClass("navbar-master-detail") && n.hasClass("navbar-master")) || (m = t && t.hasClass("navbar-large"), v = n && n.hasClass("navbar-large"), h = m && !t.hasClass("navbar-large-collapsed"), f = v && !n.hasClass("navbar-large-collapsed"), b = h && !f || f && !h);
      const C = l.animatableNavElements(n, t, f, h, s);
      u = C.newNavEls, g = C.oldNavEls
    }

    function E(w) {
      !(d && c) || (w === 1 && (f && (n.addClass("router-navbar-transition-to-large"), t.addClass("router-navbar-transition-to-large")), h && (n.addClass("router-navbar-transition-from-large"), t.addClass("router-navbar-transition-from-large"))), u.forEach(C => {
        const x = C.$el,
          M = s === "forward" ? C.rightOffset : C.leftOffset;
        C.isSliding && (C.isSubnavbar && v ? x[0].style.setProperty("transform", `translate3d(${M*(1-w)}px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)`, "important") : x.transform(`translate3d(${M*(1-w)}px,0,0)`))
      }), g.forEach(C => {
        const x = C.$el,
          M = s === "forward" ? C.leftOffset : C.rightOffset;
        C.isSliding && (C.isSubnavbar && m ? x.transform(`translate3d(${M*w}px, calc(-1 * var(--f7-navbar-large-collapse-progress) * var(--f7-navbar-large-title-height)), 0)`) : x.transform(`translate3d(${M*w}px,0,0)`))
      }))
    }

    function $() {
      l.dynamicNavbar && (n && (n.removeClass("router-navbar-transition-to-large router-navbar-transition-from-large"), n.addClass("navbar-no-title-large-transition"), Pe(() => {
        n.removeClass("navbar-no-title-large-transition")
      })), t && t.removeClass("router-navbar-transition-to-large router-navbar-transition-from-large"), n.hasClass("sliding") || n.children(".navbar-inner.sliding").length ? n.find(".title, .left, .right, .left .icon, .subnavbar").transform("") : n.find(".sliding").transform(""), t.hasClass("sliding") || t.children(".navbar-inner.sliding").length ? t.find(".title, .left, .right, .left .icon, .subnavbar").transform("") : t.find(".sliding").transform("")), l.$el.removeClass(p), o && o()
    }(s === "forward" ? a : d ? e : a).animationEnd(() => {
      $()
    }), c ? (E(0), Pe(() => {
      l.$el.addClass(p), b && (l.el._clientLeft = l.el.clientLeft), E(1)
    })) : l.$el.addClass(p)
  }
  removeModal(e) {
    this.removeEl(e)
  }
  removeTabContent(e) {
    y(e).html("")
  }
  removeNavbar(e) {
    this.removeEl(e)
  }
  removePage(e) {
    const a = y(e),
      t = a && a[0] && a[0].f7Page,
      n = this;
    if (t && t.route && t.route.route && t.route.route.keepAlive) {
      a.remove();
      return
    }
    n.removeEl(e)
  }
  removeEl(e) {
    if (!e) return;
    const a = this,
      t = y(e);
    t.length !== 0 && (t.find(".tab").each(n => {
      y(n).children().each(s => {
        s.f7Component && (y(s).trigger("tab:beforeremove"), s.f7Component.destroy())
      })
    }), t[0].f7Component && t[0].f7Component.destroy && t[0].f7Component.destroy(), !!a.params.removeElements && (a.params.removeElementsWithTimeout ? setTimeout(() => {
      t.remove()
    }, a.params.removeElementsTimeout) : t.remove()))
  }
  getPageEl(e) {
    const a = this;
    if (typeof e == "string") a.tempDom.innerHTML = e;
    else {
      if (y(e).hasClass("page")) return e;
      a.tempDom.innerHTML = "", y(a.tempDom).append(e)
    }
    return a.findElement(".page", a.tempDom)
  }
  findElement(e, a) {
    const t = this,
      n = t.view,
      s = t.app,
      i = ".popup, .dialog, .popover, .actions-modal, .sheet-modal, .login-screen, .page",
      o = y(a),
      l = e;
    let c = o.find(l).filter(d => y(d).parents(i).length === 0);
    if (c.length > 1 && (typeof n.selector == "string" && (c = o.find(`${n.selector} ${l}`)), c.length > 1 && (c = o.find(`.${s.params.viewMainClass} ${l}`))), c.length === 1 || (c = t.findElement(l, o), c && c.length === 1)) return c;
    if (c && c.length > 1) return y(c[0])
  }
  flattenRoutes(e) {
    e === void 0 && (e = this.routes);
    const a = this;
    let t = [];
    return e.forEach(n => {
      let s = !1;
      if ("tabs" in n && n.tabs) {
        const i = n.tabs.map(o => {
          const l = H({}, n, {
            path: `${n.path}/${o.path}`.replace("///", "/").replace("//", "/"),
            parentPath: n.path,
            tab: o
          });
          return delete l.tabs, delete l.routes, l
        });
        s = !0, t = t.concat(a.flattenRoutes(i))
      }
      if ("detailRoutes" in n) {
        const i = n.detailRoutes.map(o => {
          const l = H({}, o);
          return l.masterRoute = n, l.masterRoutePath = n.path, l
        });
        t = t.concat(n, a.flattenRoutes(i))
      }
      if ("routes" in n) {
        const i = n.routes.map(o => {
          const l = H({}, o);
          return l.path = `${n.path}/${l.path}`.replace("///", "/").replace("//", "/"), l
        });
        s ? t = t.concat(a.flattenRoutes(i)) : t = t.concat(n, a.flattenRoutes(i))
      }!("routes" in n) && !("tabs" in n && n.tabs) && !("detailRoutes" in n) && t.push(n)
    }), t
  }
  parseRouteUrl(e) {
    if (!e) return {};
    const a = kt(e),
      t = e.split("#")[1],
      n = {},
      s = e.split("#")[0].split("?")[0];
    return {
      query: a,
      hash: t,
      params: n,
      url: e,
      path: s
    }
  }
  generateUrl(e) {
    if (e === void 0 && (e = {}), typeof e == "string") return e;
    const {
      name: a,
      path: t,
      params: n,
      query: s
    } = e;
    if (!a && !t) throw new Error('Framework7: "name" or "path" parameter is required');
    const i = this,
      o = a ? i.findRouteByKey("name", a) : i.findRouteByKey("path", t);
    if (!o) throw a ? new Error(`Framework7: route with name "${a}" not found`) : new Error(`Framework7: route with path "${t}" not found`);
    const l = i.constructRouteUrl(o, {
      params: n,
      query: s
    });
    if (!l) throw new Error(`Framework7: can't construct URL for route with name "${a}"`);
    return l
  }
  constructRouteUrl(e, a) {
    let {
      params: t,
      query: n
    } = a === void 0 ? {} : a;
    const {
      path: s
    } = e, i = ji(s);
    let o;
    try {
      o = i(t || {})
    } catch (l) {
      throw new Error(`Framework7: error constructing route URL from passed params:
Route: ${s}
${l.toString()}`)
    }
    return n && (typeof n == "string" ? o += `?${n}` : Object.keys(n).length && (o += `?${ct(n)}`)), o
  }
  findTabRouteUrl(e) {
    const a = this,
      t = y(e),
      n = a.currentRoute.route.parentPath,
      s = t.attr("id"),
      i = a.flattenRoutes(a.routes);
    let o;
    return i.forEach(l => {
      l.parentPath === n && l.tab && l.tab.id === s && (a.currentRoute.params && Object.keys(a.currentRoute.params).length > 0 ? o = a.constructRouteUrl(l, {
        params: a.currentRoute.params,
        query: a.currentRoute.query
      }) : o = l.path)
    }), o
  }
  findRouteByKey(e, a) {
    const t = this,
      n = t.routes,
      s = t.flattenRoutes(n);
    let i;
    return s.forEach(o => {
      i || o[e] === a && (i = o)
    }), i
  }
  findMatchingRoute(e) {
    if (!e) return;
    const a = this,
      t = a.routes,
      n = a.flattenRoutes(t),
      {
        path: s,
        query: i,
        hash: o,
        params: l
      } = a.parseRouteUrl(e);
    let c;
    return n.forEach(d => {
      if (c) return;
      const p = [],
        u = [d.path || "/"];
      d.alias && (typeof d.alias == "string" ? u.push(d.alias) : Array.isArray(d.alias) && d.alias.forEach(h => {
        u.push(h)
      }));
      let g;
      if (u.forEach(h => {
          g || (g = fr(h, p).exec(s || "/"))
        }), g) {
        p.forEach((f, b) => {
          if (typeof f.name == "number") return;
          const m = g[b + 1];
          typeof m == "undefined" || m === null ? l[f.name] = m : l[f.name] = decodeURIComponent(m)
        });
        let h;
        d.parentPath && (h = (s || "/").split("/").slice(0, d.parentPath.split("/").length - 1).join("/")), c = {
          query: i,
          hash: o,
          params: l,
          url: e,
          path: s || "/",
          parentPath: h,
          route: d,
          name: d.name
        }
      }
    }), c
  }
  replaceRequestUrlParams(e, a) {
    e === void 0 && (e = ""), a === void 0 && (a = {});
    let t = e;
    return typeof t == "string" && t.indexOf("{{") >= 0 && a && a.route && a.route.params && Object.keys(a.route.params).length && Object.keys(a.route.params).forEach(n => {
      const s = new RegExp(`{{${n}}}`, "g");
      t = t.replace(s, a.route.params[n] || "")
    }), t
  }
  removeFromXhrCache(e) {
    const t = this.cache.xhr;
    let n = !1;
    for (let s = 0; s < t.length; s += 1) t[s].url === e && (n = s);
    n !== !1 && t.splice(n, 1)
  }
  xhrRequest(e, a) {
    const t = this,
      n = t.params,
      {
        ignoreCache: s
      } = a;
    let i = e,
      o = i.indexOf("?") >= 0;
    return n.passRouteQueryToRequest && a && a.route && a.route.query && Object.keys(a.route.query).length && (i += `${o?"&":"?"}${ct(a.route.query)}`, o = !0), n.passRouteParamsToRequest && a && a.route && a.route.params && Object.keys(a.route.params).length && (i += `${o?"&":"?"}${ct(a.route.params)}`, o = !0), i.indexOf("{{") >= 0 && (i = t.replaceRequestUrlParams(i, a)), n.xhrCacheIgnoreGetParameters && i.indexOf("?") >= 0 && (i = i.split("?")[0]), new Promise((l, c) => {
      if (n.xhrCache && !s && i.indexOf("nocache") < 0 && n.xhrCacheIgnore.indexOf(i) < 0)
        for (let p = 0; p < t.cache.xhr.length; p += 1) {
          const u = t.cache.xhr[p];
          if (u.url === i && Ae() - u.time < n.xhrCacheDuration) {
            l(u.content);
            return
          }
        }
      t.xhrAbortController = new AbortController;
      let d;
      fetch(i, {
        signal: t.xhrAbortController.signal,
        method: "GET"
      }).then(p => (d = p, p.text())).then(p => {
        const {
          status: u
        } = d;
        t.emit("routerAjaxComplete", d), u !== "error" && u !== "timeout" && u >= 200 && u < 300 || u === 0 ? (n.xhrCache && p !== "" && (t.removeFromXhrCache(i), t.cache.xhr.push({
          url: i,
          time: Ae(),
          content: p
        })), t.emit("routerAjaxSuccess", d, a), l(p)) : (t.emit("routerAjaxError", d, a), c(d))
      }).catch(p => {
        c(p)
      })
    })
  }
  setNavbarPosition(e, a, t) {
    const n = this;
    e.removeClass("navbar-previous navbar-current navbar-next"), a && e.addClass(`navbar-${a}`), t === !1 ? e.removeAttr("aria-hidden") : t === !0 && e.attr("aria-hidden", "true"), e.trigger("navbar:position", {
      position: a
    }), n.emit("navbarPosition", e[0], a)
  }
  setPagePosition(e, a, t) {
    const n = this;
    e.removeClass("page-previous page-current page-next"), e.addClass(`page-${a}`), t === !1 ? e.removeAttr("aria-hidden") : t === !0 && e.attr("aria-hidden", "true"), e.trigger("page:position", {
      position: a
    }), n.emit("pagePosition", e[0], a)
  }
  removeThemeElements(e) {
    const t = this.app.theme;
    let n;
    t === "ios" ? n = ".md-only, .if-md, .if-not-ios, .not-ios" : t === "md" && (n = ".ios-only, .if-ios, .if-not-md, .not-md"), y(e).find(n).remove()
  }
  getPageData(e, a, t, n, s, i) {
    s === void 0 && (s = {});
    const o = this,
      l = y(e).eq(0),
      c = y(a).eq(0),
      d = l[0].f7Page || {};
    let p, u;
    if ((t === "next" && n === "current" || t === "current" && n === "previous") && (p = "forward"), (t === "current" && n === "next" || t === "previous" && n === "current") && (p = "backward"), d && !d.fromPage) {
      const h = y(i);
      h.length && (u = h[0].f7Page)
    }
    u = d.pageFrom || u, u && u.pageFrom && (u.pageFrom = null);
    const g = {
      app: o.app,
      view: o.view,
      router: o,
      $el: l,
      el: l[0],
      $pageEl: l,
      pageEl: l[0],
      $navbarEl: c,
      navbarEl: c[0],
      name: l.attr("data-name"),
      position: t,
      from: t,
      to: n,
      direction: p,
      route: d.route ? d.route : s,
      pageFrom: u
    };
    return l[0].f7Page = g, g
  }
  pageCallback(e, a, t, n, s, i, o) {
    if (i === void 0 && (i = {}), !a) return;
    const l = this,
      c = y(a);
    if (!c.length) return;
    const d = y(t),
      {
        route: p
      } = i,
      u = l.params.restoreScrollTopOnBack && !(l.params.masterDetailBreakpoint > 0 && c.hasClass("page-master") && l.app.width >= l.params.masterDetailBreakpoint),
      g = c[0].f7Page && c[0].f7Page.route && c[0].f7Page.route.route && c[0].f7Page.route.route.keepAlive;
    e === "beforeRemove" && g && (e = "beforeUnmount");
    const h = `page${e[0].toUpperCase()+e.slice(1,e.length)}`,
      f = `page:${e.toLowerCase()}`;
    let b = {};
    e === "beforeRemove" && c[0].f7Page ? b = H(c[0].f7Page, {
      from: n,
      to: s,
      position: n
    }) : b = l.getPageData(c[0], d[0], n, s, p, o), b.swipeBack = !!i.swipeBack;
    const {
      on: m = {},
      once: v = {}
    } = i.route ? i.route.route : {};
    i.on && H(m, i.on), i.once && H(v, i.once);

    function E() {
      c[0].f7RouteEventsAttached || (c[0].f7RouteEventsAttached = !0, m && Object.keys(m).length > 0 && (c[0].f7RouteEventsOn = m, Object.keys(m).forEach(w => {
        m[w] = m[w].bind(l), c.on(Ye(w), m[w])
      })), v && Object.keys(v).length > 0 && (c[0].f7RouteEventsOnce = v, Object.keys(v).forEach(w => {
        v[w] = v[w].bind(l), c.once(Ye(w), v[w])
      })))
    }

    function $() {
      !c[0].f7RouteEventsAttached || (c[0].f7RouteEventsOn && Object.keys(c[0].f7RouteEventsOn).forEach(w => {
        c.off(Ye(w), c[0].f7RouteEventsOn[w])
      }), c[0].f7RouteEventsOnce && Object.keys(c[0].f7RouteEventsOnce).forEach(w => {
        c.off(Ye(w), c[0].f7RouteEventsOnce[w])
      }), c[0].f7RouteEventsAttached = null, c[0].f7RouteEventsOn = null, c[0].f7RouteEventsOnce = null, delete c[0].f7RouteEventsAttached, delete c[0].f7RouteEventsOn, delete c[0].f7RouteEventsOnce)
    }
    if (e === "mounted" && E(), e === "init") {
      if (u && (n === "previous" || !n) && s === "current" && l.scrollHistory[b.route.url] && !c.hasClass("no-restore-scroll")) {
        let w = c.find(".page-content");
        w.length > 0 && (w = w.filter(C => y(C).parents(".tab:not(.tab-active)").length === 0 && !y(C).is(".tab:not(.tab-active)"))), w.scrollTop(l.scrollHistory[b.route.url])
      }
      if (E(), c[0].f7PageInitialized) {
        c.trigger("page:reinit", b), l.emit("pageReinit", b);
        return
      }
      c[0].f7PageInitialized = !0
    }
    if (u && e === "beforeOut" && n === "current" && s === "previous") {
      let w = c.find(".page-content");
      w.length > 0 && (w = w.filter(C => y(C).parents(".tab:not(.tab-active)").length === 0 && !y(C).is(".tab:not(.tab-active)"))), l.scrollHistory[b.route.url] = w.scrollTop()
    }
    u && e === "beforeOut" && n === "current" && s === "next" && delete l.scrollHistory[b.route.url], c.trigger(f, b), l.emit(h, b), (e === "beforeRemove" || e === "beforeUnmount") && ($(), g || (c[0].f7Page && c[0].f7Page.navbarEl && delete c[0].f7Page.navbarEl.f7Page, c[0].f7Page = null))
  }
  saveHistory() {
    const e = this,
      a = G();
    e.view.history = e.history, e.params.browserHistory && e.params.browserHistoryStoreHistory && a.localStorage && (a.localStorage[`f7router-${e.view.id}-history`] = JSON.stringify(e.history))
  }
  restoreHistory() {
    const e = this,
      a = G();
    e.params.browserHistory && e.params.browserHistoryStoreHistory && a.localStorage && a.localStorage[`f7router-${e.view.id}-history`] && (e.history = JSON.parse(a.localStorage[`f7router-${e.view.id}-history`]), e.view.history = e.history)
  }
  clearHistory() {
    const e = this;
    e.history = [], e.view && (e.view.history = []), e.saveHistory()
  }
  updateCurrentUrl(e) {
    const a = this;
    Et(a, "updateCurrentUrl"), a.history.length ? a.history[a.history.length - 1] = e : a.history.push(e);
    const {
      query: t,
      hash: n,
      params: s,
      url: i,
      path: o
    } = a.parseRouteUrl(e);
    if (a.currentRoute && H(a.currentRoute, {
        query: t,
        hash: n,
        params: s,
        url: i,
        path: o
      }), a.params.browserHistory) {
      const l = a.params.browserHistoryRoot || "";
      we.replace(a.view.id, {
        url: e
      }, l + a.params.browserHistorySeparator + e)
    }
    a.saveHistory(), a.emit("routeUrlUpdate", a.currentRoute, a)
  }
  getInitialUrl() {
    const e = this;
    if (e.initialUrl) return {
      initialUrl: e.initialUrl,
      historyRestored: e.historyRestored
    };
    const {
      app: a,
      view: t
    } = e, n = ee(), s = G(), i = a.params.url && typeof a.params.url == "string" && typeof URL != "undefined" ? new URL(a.params.url) : n.location;
    let o = e.params.url,
      l = i.href.split(i.origin)[1],
      c;
    const {
      browserHistory: d,
      browserHistoryOnLoad: p,
      browserHistorySeparator: u
    } = e.params;
    let {
      browserHistoryRoot: g
    } = e.params;
    return (s.cordova || s.Capacitor && s.Capacitor.isNative) && d && !u && !g && i.pathname.indexOf("index.html") && (console.warn("Framework7: wrong or not complete browserHistory configuration, trying to guess browserHistoryRoot"), g = i.pathname.split("index.html")[0]), !d || !p ? (o || (o = l), i.search && o.indexOf("?") < 0 && (o += i.search), i.hash && o.indexOf("#") < 0 && (o += i.hash)) : (g && l.indexOf(g) >= 0 && (l = l.substring(l.indexOf(g) + g.length), l === "" && (l = "/")), u.length > 0 && l.indexOf(u) >= 0 ? o = l.substring(l.indexOf(u) + u.length) : o = l, e.restoreHistory(), e.history.indexOf(o) >= 0 ? e.history = e.history.slice(0, e.history.indexOf(o) + 1) : e.params.url === o ? e.history = [o] : we.state && we.state[t.id] && we.state[t.id].url === e.history[e.history.length - 1] ? o = e.history[e.history.length - 1] : e.history = [l.split(u)[0] || "/", o], e.history.length > 1 ? c = !0 : e.history = [], e.saveHistory()), e.initialUrl = o, e.historyRestored = c, {
      initialUrl: o,
      historyRestored: c
    }
  }
  init() {
    const e = this,
      {
        app: a,
        view: t
      } = e,
      n = ee();
    e.mount();
    const {
      initialUrl: s,
      historyRestored: i
    } = e.getInitialUrl();
    (t && e.params.iosSwipeBack && a.theme === "ios" || t && e.params.mdSwipeBack && a.theme === "md") && Ki(e);
    const {
      browserHistory: o,
      browserHistoryOnLoad: l,
      browserHistoryAnimateOnLoad: c,
      browserHistoryInitialMatch: d
    } = e.params;
    let p;
    if (e.history.length > 1) {
      const u = d ? s : e.history[0];
      p = e.findMatchingRoute(u), p || (p = H(e.parseRouteUrl(u), {
        route: {
          url: u,
          path: u.split("?")[0]
        }
      }))
    } else p = e.findMatchingRoute(s), p || (p = H(e.parseRouteUrl(s), {
      route: {
        url: s,
        path: s.split("?")[0]
      }
    }));
    if (e.$el.children(".page").length === 0 && s && e.params.loadInitialPage) e.navigate(s, {
      initial: !0,
      reloadCurrent: !0,
      browserHistory: !1,
      animate: !1,
      once: {
        modalOpen() {
          if (!i) return;
          (e.params.preloadPreviousPage || e.params[`${a.theme}SwipeBack`]) && e.history.length > 1 && e.back({
            preload: !0
          })
        },
        pageAfterIn() {
          if (!i) return;
          (e.params.preloadPreviousPage || e.params[`${a.theme}SwipeBack`]) && e.history.length > 1 && e.back({
            preload: !0
          })
        }
      }
    });
    else if (e.$el.children(".page").length) {
      let u;
      e.currentRoute = p, e.$el.children(".page").each(g => {
        const h = y(g);
        let f;
        e.setPagePosition(h, "current"), e.dynamicNavbar && (f = h.children(".navbar"), f.length > 0 ? (e.$navbarsEl.parents(n).length || e.$el.prepend(e.$navbarsEl), e.setNavbarPosition(f, "current"), e.$navbarsEl.append(f), f.children(".title-large").length && f.addClass("navbar-large"), h.children(".navbar").remove()) : (e.$navbarsEl.addClass("navbar-hidden"), f.children(".title-large").length && e.$navbarsEl.addClass("navbar-hidden navbar-large-hidden"))), e.currentRoute && e.currentRoute.route && (e.currentRoute.route.master === !0 || typeof e.currentRoute.route.master == "function" && e.currentRoute.route.master(a, e)) && e.params.masterDetailBreakpoint > 0 && (h.addClass("page-master"), h.trigger("page:role", {
          role: "master"
        }), f && f.length && f.addClass("navbar-master"), t.checkMasterDetailBreakpoint());
        const b = {
          route: e.currentRoute
        };
        e.currentRoute && e.currentRoute.route && e.currentRoute.route.options && H(b, e.currentRoute.route.options), e.currentPageEl = h[0], e.dynamicNavbar && f.length && (e.currentNavbarEl = f[0]), e.removeThemeElements(h), e.dynamicNavbar && f.length && e.removeThemeElements(f), b.route.route.tab && (u = !0, e.tabLoad(b.route.route.tab, H({}, b))), e.pageCallback("init", h, f, "current", void 0, b), e.pageCallback("beforeIn", h, f, "current", void 0, b), e.pageCallback("afterIn", h, f, "current", void 0, b)
      }), i && (d ? (e.params.preloadPreviousPage || e.params[`${a.theme}SwipeBack`]) && e.history.length > 1 && e.back({
        preload: !0
      }) : e.navigate(s, {
        initial: !0,
        browserHistory: !1,
        history: !1,
        animate: c,
        once: {
          pageAfterIn() {
            (e.params.preloadPreviousPage || e.params[`${a.theme}SwipeBack`]) && e.history.length > 2 && e.back({
              preload: !0
            })
          }
        }
      })), !i && !u && (e.history.push(s), e.saveHistory())
    }
    s && o && l && (!we.state || !we.state[t.id]) && we.initViewState(t.id, {
      url: s
    }), e.emit("local::init routerInit", e)
  }
  destroy() {
    let e = this;
    e.emit("local::destroy routerDestroy", e), Object.keys(e).forEach(a => {
      e[a] = null, delete e[a]
    }), e = null
  }
}
Je.prototype.navigate = Zi;
Je.prototype.refreshPage = Qi;
Je.prototype.tabLoad = Ji;
Je.prototype.tabRemove = eo;
Je.prototype.modalLoad = to;
Je.prototype.modalRemove = ao;
Je.prototype.back = ro;
Je.prototype.clearPreviousHistory = so;
var Wt = Je,
  gr = {
    name: "router",
    static: {
      Router: Wt
    },
    instance: {
      cache: {
        xhr: [],
        templates: [],
        components: []
      }
    },
    create() {
      const r = this;
      r.app ? r.params.router && (r.router = new Wt(r.app, r)) : r.router = new Wt(r)
    }
  };

function io(r) {
  const e = r.app,
    a = ve();
  if (r.resizableInitialized) return;
  H(r, {
    resizable: !0,
    resizableWidth: null,
    resizableInitialized: !0
  });
  const t = y("html"),
    {
      $el: n
    } = r;
  if (!n) return;
  let s, i, o;
  const l = {};
  let c, d, p, u;

  function g($) {
    if (!$) return null;
    if ($.indexOf("%") >= 0 || $.indexOf("vw") >= 0) return parseInt($, 10) / 100 * e.width;
    const w = parseInt($, 10);
    return Number.isNaN(w) ? null : w
  }

  function h() {
    return r.resizable && n.hasClass("view-resizable") && n.hasClass("view-master-detail")
  }

  function f($) {
    if (!h()) return;
    l.x = $.type === "touchstart" ? $.targetTouches[0].pageX : $.pageX, l.y = $.type === "touchstart" ? $.targetTouches[0].pageY : $.pageY, o = !1, i = !0;
    const w = n.children(".page-master");
    p = g(w.css("min-width")), u = g(w.css("max-width"))
  }

  function b($) {
    if (!i) return;
    $.f7PreventSwipePanel = !0;
    const w = $.type === "touchmove" ? $.targetTouches[0].pageX : $.pageX;
    o || (d = s[0].offsetLeft + s[0].offsetWidth, n.addClass("view-resizing"), t.css("cursor", "col-resize")), o = !0, $.preventDefault(), c = w - l.x;
    let C = d + c;
    p && !Number.isNaN(p) && (C = Math.max(C, p)), u && !Number.isNaN(u) && (C = Math.min(C, u)), C = Math.min(Math.max(C, 0), e.width), r.resizableWidth = C, t[0].style.setProperty("--f7-page-master-width", `${C}px`), n.trigger("view:resize", C), r.emit("local::resize viewResize", r, C)
  }

  function m() {
    if (y("html").css("cursor", ""), !i || !o) {
      i = !1, o = !1;
      return
    }
    i = !1, o = !1, t[0].style.setProperty("--f7-page-master-width", `${r.resizableWidth}px`), n.removeClass("view-resizing")
  }

  function v() {
    !r.resizableWidth || (p = g(s.css("min-width")), u = g(s.css("max-width")), p && !Number.isNaN(p) && r.resizableWidth < p && (r.resizableWidth = Math.max(r.resizableWidth, p)), u && !Number.isNaN(u) && r.resizableWidth > u && (r.resizableWidth = Math.min(r.resizableWidth, u)), r.resizableWidth = Math.min(Math.max(r.resizableWidth, 0), e.width), t[0].style.setProperty("--f7-page-master-width", `${r.resizableWidth}px`))
  }
  s = r.$el.children(".view-resize-handler"), s.length || (r.$el.append('<div class="view-resize-handler"></div>'), s = r.$el.children(".view-resize-handler")), r.$resizeHandlerEl = s, n.addClass("view-resizable");
  const E = a.passiveListener ? {
    passive: !0
  } : !1;
  r.$el.on(e.touchEvents.start, ".view-resize-handler", f, E), e.on("touchmove:active", b), e.on("touchend:passive", m), e.on("resize", v), r.on("beforeOpen", v), r.once("viewDestroy", () => {
    n.removeClass("view-resizable"), r.$resizeHandlerEl.remove(), r.$el.off(e.touchEvents.start, ".view-resize-handler", f, E), e.off("touchmove:active", b), e.off("touchend:passive", m), e.off("resize", v), r.off("beforeOpen", v)
  })
}
class vr extends be {
  constructor(e, a, t) {
    t === void 0 && (t = {});
    super(t, [e]);
    const n = this,
      s = n.params.routerId,
      i = {
        routes: [],
        routesAdd: []
      };
    if (!s && !y(a).length) {
      let c = "Framework7: can't create a View instance because ";
      throw c += typeof a == "string" ? `the selector "${a}" didn't match any element` : "el must be an HTMLElement or Dom7 object", new Error(c)
    }
    n.params = H({
      el: a
    }, i, e.params.view, t), n.params.routes.length > 0 ? n.routes = n.params.routes : n.routes = [].concat(e.routes, n.params.routesAdd), H(!1, n, {
      app: e,
      name: n.params.name,
      main: n.params.main,
      history: [],
      scrollHistory: {}
    }), n.useModules(), e.views.push(n), n.main && (e.views.main = n), n.name && (e.views[n.name] = n), n.index = e.views.indexOf(n);
    let o;
    return n.name ? o = `view_${n.name}` : n.main ? o = "view_main" : o = `view_${n.index}`, n.id = o, n.params.init && (e.initialized ? n.init() : e.on("init", () => {
      n.init()
    })), n
  }
  destroy() {
    let e = this;
    const a = e.app;
    e.$el.trigger("view:beforedestroy"), e.emit("local::beforeDestroy viewBeforeDestroy", e), a.off("resize", e.checkMasterDetailBreakpoint), e.main ? (a.views.main = null, delete a.views.main) : e.name && (a.views[e.name] = null, delete a.views[e.name]), e.$el[0].f7View = null, delete e.$el[0].f7View, a.views.splice(a.views.indexOf(e), 1), e.params.router && e.router && e.router.destroy(), e.emit("local::destroy viewDestroy", e), Object.keys(e).forEach(t => {
      e[t] = null, delete e[t]
    }), e = null
  }
  checkMasterDetailBreakpoint(e) {
    const a = this,
      t = a.app,
      n = a.$el.hasClass("view-master-detail"),
      s = t.width >= a.params.masterDetailBreakpoint && a.$el.children(".page-master").length;
    typeof e == "undefined" && s || e === !0 ? (a.$el.addClass("view-master-detail"), n || (a.emit("local::masterDetailBreakpoint viewMasterDetailBreakpoint", a), a.$el.trigger("view:masterDetailBreakpoint"))) : (a.$el.removeClass("view-master-detail"), n && (a.emit("local::masterDetailBreakpoint viewMasterDetailBreakpoint", a), a.$el.trigger("view:masterDetailBreakpoint")))
  }
  initMasterDetail() {
    const e = this,
      a = e.app;
    e.checkMasterDetailBreakpoint = e.checkMasterDetailBreakpoint.bind(e), e.checkMasterDetailBreakpoint(), e.params.masterDetailResizable && io(e), a.on("resize", e.checkMasterDetailBreakpoint)
  }
  mount(e) {
    const a = this,
      t = a.app,
      n = a.params.el || e,
      s = y(n);
    let i;
    typeof n == "string" ? i = n : i = (s.attr("id") ? `#${s.attr("id")}` : "") + (s.attr("class") ? `.${s.attr("class").replace(/ /g,".").replace(".active","")}` : "");
    let o;
    t.theme === "ios" && a.params.iosDynamicNavbar && (o = s.children(".navbars").eq(0), o.length === 0 && (o = y('<div class="navbars"></div>'))), H(a, {
      $el: s,
      el: s[0],
      main: a.main || s.hasClass("view-main"),
      $navbarsEl: o,
      navbarsEl: o ? o[0] : void 0,
      selector: i
    }), a.main && (t.views.main = a), s && s[0] && (s[0].f7View = a), a.emit("local::mount viewMount", a)
  }
  init(e) {
    const a = this;
    a.mount(e), a.params.router && (a.params.masterDetailBreakpoint > 0 && a.initMasterDetail(), a.params.initRouterOnTabShow && a.$el.hasClass("tab") && !a.$el.hasClass("tab-active") ? a.$el.once("tab:show", () => {
      a.router.init()
    }) : a.router.init(), a.$el.trigger("view:init"), a.emit("local::init viewInit", a))
  }
}
vr.use(gr);
var ka = vr;

function oo(r) {
  function e(a) {
    const t = G(),
      n = y(a.target),
      s = n.closest("a"),
      i = s.length > 0,
      o = i && s.attr("href");
    if (i && (s.is(r.params.clicks.externalLinks) || o && o.indexOf("javascript:") >= 0)) {
      const d = s.attr("target");
      o && t.cordova && t.cordova.InAppBrowser && (d === "_system" || d === "_blank") ? (a.preventDefault(), t.cordova.InAppBrowser.open(o, d)) : o && t.Capacitor && t.Capacitor.Plugins && t.Capacitor.Plugins.Browser && (d === "_system" || d === "_blank") && (a.preventDefault(), t.Capacitor.Plugins.Browser.open({
        url: o
      }));
      return
    }
    Object.keys(r.modules).forEach(d => {
      const p = r.modules[d].clicks;
      !p || a.preventF7Router || Object.keys(p).forEach(u => {
        const g = n.closest(u).eq(0);
        g.length > 0 && p[u].call(r, g, g.dataset(), a)
      })
    });
    let l = {};
    if (i && (a.preventDefault(), l = s.dataset()), l.clickedEl = s[0], a.preventF7Router || s.hasClass("prevent-router") || s.hasClass("router-prevent")) return;
    if (o && o.length > 0 && o[0] !== "#" || s.hasClass("back")) {
      let d;
      if (l.view && l.view === "current" ? d = r.views.current : l.view ? d = y(l.view)[0].f7View : (d = n.parents(".view")[0] && n.parents(".view")[0].f7View, !s.hasClass("back") && d && d.params.linksView && (typeof d.params.linksView == "string" ? d = y(d.params.linksView)[0].f7View : d.params.linksView instanceof ka && (d = d.params.linksView))), d || r.views.main && (d = r.views.main), !d || !d.router) return;
      s[0].f7RouteProps && (l.props = s[0].f7RouteProps), s.hasClass("back") ? d.router.back(o, l) : d.router.navigate(o, l)
    }
  }
  r.on("click", e)
}
var lo = {
    name: "clicks",
    params: {
      clicks: {
        externalLinks: ".external"
      }
    },
    on: {
      init() {
        oo(this)
      }
    }
  },
  co = {
    name: "routerComponentLoader",
    proto: {
      openIn(r, e, a) {
        const t = {
            url: e,
            route: {
              path: e,
              options: Ht(Ee({}, a), {
                openIn: void 0
              })
            }
          },
          n = Ee({}, a);
        if (a.openIn === "popup" && (n.content = `<div class="popup popup-router-open-in" data-url="${e}"><div class="view view-init" data-links-view="${r.view.selector}" data-url="${e}" data-ignore-open-in="true"></div></div>`, t.route.popup = n), a.openIn === "loginScreen" && (n.content = `<div class="login-screen login-screen-router-open-in" data-url="${e}"><div class="view view-init" data-links-view="${r.view.selector}" data-url="${e}" data-ignore-open-in="true"></div></div>`, t.route.loginScreen = n), a.openIn === "sheet" && (n.content = `<div class="sheet-modal sheet-modal-router-open-in" data-url="${e}"><div class="sheet-modal-inner"><div class="view view-init" data-links-view="${r.view.selector}" data-url="${e}" data-ignore-open-in="true"></div></div></div>`, t.route.sheet = n), a.openIn === "popover" && (n.targetEl = a.clickedEl || a.targetEl, n.content = `<div class="popover popover-router-open-in" data-url="${e}"><div class="popover-inner"><div class="view view-init" data-links-view="${r.view.selector}" data-url="${e}" data-ignore-open-in="true"></div></div></div>`, t.route.popover = n), a.openIn.indexOf("panel") >= 0) {
          const s = a.openIn.split(":"),
            i = s[1] || "left",
            o = s[2] || "cover";
          n.targetEl = a.clickedEl || a.targetEl, n.content = `<div class="panel panel-router-open-in panel-${i} panel-${o}" data-url="${e}"><div class="view view-init" data-links-view="${r.view.selector}" data-url="${e}" data-ignore-open-in="true"></div></div>`, t.route.panel = n
        }
        return r.navigate(t)
      },
      componentLoader(r, e, a, t, n) {
        a === void 0 && (a = {});
        const s = this,
          {
            app: i
          } = s,
          o = typeof r == "string" ? r : e,
          l = s.replaceRequestUrlParams(o, a);

        function c(p) {
          let u = a.context || {};
          if (typeof u == "function") u = u.call(s);
          else if (typeof u == "string") try {
            u = JSON.parse(u)
          } catch (m) {
            throw n(m), m
          }
          const g = Vt({}, u, {
              f7route: a.route,
              f7router: s
            }),
            h = Vt(a.route ? a.route.params || {} : {}, a.props || {}, a.routeProps || {});
          let f, b;
          a.componentOptions && a.componentOptions.el && (f = a.componentOptions.el), a.componentOptions && a.componentOptions.root && (b = a.componentOptions.root), i.component.create(p, h, {
            context: g,
            el: f,
            root: b
          }).then(m => {
            t(m.el)
          }).catch(m => {
            throw n(m), new Error(m)
          })
        }
        let d;
        l && s.params.componentCache && s.cache.components.forEach(p => {
          p.url === l && (d = p.component)
        }), l && d ? c(d) : l && !d ? (s.xhrAbortController && (s.xhrAbortController.abort(), s.xhrAbortController = !1), s.xhrRequest(o, a).then(p => {
          const u = i.component.parse(p);
          s.params.componentCache && s.cache.components.push({
            url: l,
            component: u
          }), c(u)
        }).catch(p => {
          throw n(), p
        })) : c(r)
      },
      modalComponentLoader(r) {
        let {
          component: e,
          componentUrl: a,
          options: t,
          resolve: n,
          reject: s
        } = r === void 0 ? {} : r;
        this.componentLoader(e, a, t, o => {
          n(o)
        }, s)
      },
      tabComponentLoader(r) {
        let {
          component: e,
          componentUrl: a,
          options: t,
          resolve: n,
          reject: s
        } = r === void 0 ? {} : r;
        this.componentLoader(e, a, t, o => {
          n(o)
        }, s)
      },
      pageComponentLoader(r) {
        let {
          component: e,
          componentUrl: a,
          options: t,
          resolve: n,
          reject: s
        } = r === void 0 ? {} : r;
        this.componentLoader(e, a, t, function (o, l) {
          l === void 0 && (l = {}), n(o, l)
        }, s)
      }
    }
  },
  br = function (r, e, a, t) {
    var n;
    e[0] = 0;
    for (var s = 1; s < e.length; s++) {
      var i = e[s++],
        o = e[s] ? (e[0] |= i ? 1 : 2, a[e[s++]]) : e[++s];
      i === 3 ? t[0] = o : i === 4 ? t[1] = Object.assign(t[1] || {}, o) : i === 5 ? (t[1] = t[1] || {})[e[++s]] = o : i === 6 ? t[1][e[++s]] += o + "" : i ? (n = r.apply(o, br(r, o, a, ["", null])), t.push(n), o[0] ? e[0] |= 2 : (e[s - 2] = 0, e[s] = n)) : t.push(o)
    }
    return t
  },
  yr = new Map;

function po(r) {
  var e = yr.get(this);
  return e || (e = new Map, yr.set(this, e)), (e = br(this, e.get(r) || (e.set(r, e = function (a) {
    for (var t, n, s = 1, i = "", o = "", l = [0], c = function (u) {
        s === 1 && (u || (i = i.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, u, i) : s === 3 && (u || i) ? (l.push(3, u, i), s = 2) : s === 2 && i === "..." && u ? l.push(4, u, 0) : s === 2 && i && !u ? l.push(5, 0, !0, i) : s >= 5 && ((i || !u && s === 5) && (l.push(s, 0, i, n), s = 6), u && (l.push(s, u, 0, n), s = 6)), i = ""
      }, d = 0; d < a.length; d++) {
      d && (s === 1 && c(), c(d));
      for (var p = 0; p < a[d].length; p++) t = a[d][p], s === 1 ? t === "<" ? (c(), l = [l], s = 3) : i += t : s === 4 ? i === "--" && t === ">" ? (s = 1, i = "") : i = t + i[0] : o ? t === o ? o = "" : i += t : t === '"' || t === "'" ? o = t : t === ">" ? (c(), s = 1) : s && (t === "=" ? (s = 5, n = i, i = "") : t === "/" && (s < 5 || a[d][p + 1] === ">") ? (c(), s === 3 && (l = l[0]), s = l, (l = l[0]).push(2, 0, s), s = 0) : t === " " || t === "	" || t === `
` || t === "\r" ? (c(), s = 2) : i += t), s === 3 && i === "!--" && (s = 4, l = l[0])
    }
    return c(), l
  }(r)), e), arguments, [])).length > 1 ? e : e[0]
}
const uo = [!1, null, "", void 0],
  fo = function (r, e) {
    for (var a = arguments.length, t = new Array(a > 2 ? a - 2 : 0), n = 2; n < a; n++) t[n - 2] = arguments[n];
    return {
      type: r,
      props: e || {},
      children: Yt(t.filter(s => uo.indexOf(s) < 0))
    }
  },
  ho = po.bind(fo);
var mo = ho;

function Xt(r, e, a, t, n) {
  var s = e === void 0 ? void 0 : e.key;
  return {
    sel: r,
    data: e,
    children: a,
    text: t,
    elm: n,
    key: s
  }
}
var Gt = Array.isArray;

function Ut(r) {
  return typeof r == "string" || typeof r == "number"
}

function Er(r, e, a) {
  if (r.ns = "http://www.w3.org/2000/svg", a !== "foreignObject" && e !== void 0)
    for (var t = 0; t < e.length; ++t) {
      var n = e[t].data;
      n !== void 0 && Er(n, e[t].children, e[t].sel)
    }
}

function go(r, e, a) {
  var t = {},
    n, s, i;
  if (a !== void 0 ? (t = e, Gt(a) ? n = a : Ut(a) ? s = a : a && a.sel && (n = [a])) : e !== void 0 && (Gt(e) ? n = e : Ut(e) ? s = e : e && e.sel ? n = [e] : t = e), Gt(n))
    for (i = 0; i < n.length; ++i) Ut(n[i]) && (n[i] = Xt(void 0, void 0, void 0, n[i], void 0));
  return r[0] === "s" && r[1] === "v" && r[2] === "g" && (r.length === 3 || r[3] === "." || r[3] === "#") && Er(t, n, r), Xt(r, t, n, s, void 0)
}
var _t = {};
const vo = "area base br col command embed hr img input keygen link menuitem meta param source track wbr".split(" "),
  bo = "hidden checked disabled readonly selected autofocus autoplay required multiple value indeterminate routeProps innerHTML".split(" "),
  wr = "hidden checked disabled readonly selected autofocus autoplay required multiple readOnly indeterminate".split(" "),
  Ta = r => typeof r.type == "function" ? r.type.name || "CustomComponent" : r.type,
  yo = r => r.split("-").map((e, a) => a === 0 ? e.toLowerCase() : e[0].toUpperCase() + e.substr(1)).join(""),
  Cr = function () {
    const r = {};
    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
    return a.forEach(function (n) {
      n === void 0 && (n = {}), Object.keys(n).forEach(s => {
        r[yo(s)] = n[s]
      })
    }), r
  },
  Eo = r => {
    let {
      f7: e,
      treeNode: a,
      vnode: t,
      data: n
    } = r;
    const s = typeof a.type == "function" ? a.type : _t[a.type];
    e.component.create(s, Cr(n.attrs || {}, n.props || {}), {
      el: t.elm,
      children: a.children
    }).then(i => {
      t.data && t.data.on && i && i.$el && Object.keys(t.data.on).forEach(o => {
        i.$el.on(o, t.data.on[o])
      }), t.elm.__component__ = i
    })
  },
  wo = r => {
    const e = r && r.elm && r.elm.__component__;
    if (!e) return;
    const a = Cr(r.data.attrs || {}, r.data.props || {});
    e.children = r.data.treeNode.children, Object.assign(e.props, a), e.update()
  },
  Co = r => {
    const e = r && r.elm && r.elm.__component__;
    if (e) {
      const {
        el: a,
        $el: t
      } = e;
      r.data && r.data.on && t && Object.keys(r.data.on).forEach(n => {
        t.off(n, r.data.on[n])
      }), e.destroy && e.destroy(), a && a.parentNode && a.parentNode.removeChild(a), delete r.elm.__component__
    }
  },
  $r = r => typeof r == "function" || r && r.indexOf("-") > 0 && _t[r];

function $o(r, e, a, t, n) {
  const s = {},
    i = [],
    o = [],
    l = [],
    c = [];
  let d = !1,
    p = Ta(r);
  e && e.attrs && e.attrs.component && (p = e.attrs.component, delete e.attrs.component, d = !0);
  const u = $r(r.type);
  if (u && (i.push(g => {
      g.sel !== p && !d || Eo({
        f7: a,
        treeNode: r,
        vnode: g,
        data: e
      })
    }), o.push(g => {
      Co(g)
    }), l.push((g, h) => {
      wo(h)
    })), !u) {
    if (!e || !e.attrs || !e.attrs.class) return s;
    e.attrs.class.split(" ").forEach(h => {
      t || i.push(...a.getVnodeHooks("insert", h)), o.push(...a.getVnodeHooks("destroy", h)), l.push(...a.getVnodeHooks("update", h)), c.push(...a.getVnodeHooks("postpatch", h))
    })
  }
  return n && !t && c.push((g, h) => {
    const f = h || g;
    !f || f.data && f.data.component && f.data.component.hook("onUpdated")
  }), i.length === 0 && o.length === 0 && l.length === 0 && c.length === 0 || (i.length && (s.insert = g => {
    i.forEach(h => h(g))
  }), o.length && (s.destroy = g => {
    o.forEach(h => h(g))
  }), l.length && (s.update = (g, h) => {
    l.forEach(f => f(g, h))
  }), c.length && (s.postpatch = (g, h) => {
    c.forEach(f => f(g, h))
  })), s
}
const xo = function (r, e) {
    let {
      stop: a,
      prevent: t,
      once: n
    } = e === void 0 ? {} : e, s = !1;

    function i() {
      const o = arguments.length <= 0 ? void 0 : arguments[0];
      n && s || (a && o.stopPropagation(), t && o.preventDefault(), s = !0, r(...arguments))
    }
    return i
  },
  ko = (r, e, a, t, n) => {
    const s = {
        component: e,
        treeNode: r
      },
      i = Ta(r);
    Object.keys(r.props).forEach(l => {
      const c = r.props[l];
      if (typeof c != "undefined")
        if (bo.indexOf(l) >= 0) s.props || (s.props = {}), l === "readonly" && (l = "readOnly"), l === "routeProps" && (l = "f7RouteProps"), i === "option" && l === "value" && (s.attrs || (s.attrs = {}), s.attrs.value = c), wr.indexOf(l) >= 0 ? s.props[l] = c !== !1 : s.props[l] = c;
        else if (l === "key") s.key = c;
      else if (l.indexOf("@") === 0 || l.indexOf("on") === 0 && l.length > 2) {
        s.on || (s.on = {});
        let d = l.indexOf("@") === 0 ? l.substr(1) : Ye(l.substr(2)),
          p = !1,
          u = !1,
          g = !1;
        d.indexOf(".") >= 0 && d.split(".").forEach((h, f) => {
          f === 0 ? d = h : (h === "stop" && (p = !0), h === "prevent" && (u = !0), h === "once" && (g = !0))
        }), s.on[d] = xo(c, {
          stop: p,
          prevent: u,
          once: g
        })
      } else l === "style" ? typeof c != "string" ? s.style = c : (s.attrs || (s.attrs = {}), s.attrs.style = c) : (s.attrs || (s.attrs = {}), s.attrs[l] = c, l === "id" && !s.key && !n && (s.key = c))
    });
    const o = $o(r, s, a, t, n);
    return o.prepatch = (l, c) => {
      !l || !c || l && l.data && l.data.props && Object.keys(l.data.props).forEach(d => {
        wr.indexOf(d) < 0 || (c.data || (c.data = {}), c.data.props || (c.data.props = {}), l.data.props[d] === !0 && !(d in c.data.props) && (c.data.props[d] = !1))
      })
    }, s.hook = o, s
  },
  xr = (r, e, a, t) => {
    if (r && r.type && vo.indexOf(r.type) >= 0) return [];
    const n = [],
      s = r.children;
    for (let i = 0; i < s.length; i += 1) {
      const o = s[i],
        l = Sa(o, e, a, t, !1);
      Array.isArray(l) ? n.push(...l) : l && n.push(l)
    }
    return n
  },
  To = (r, e, a, t) => {
    const n = r.props.name || "default",
      s = (e.children || []).filter(i => {
        let o = "default";
        return i.props && (o = i.props.slot || "default"), o === n
      });
    return s.length === 0 ? xr(r, e, a, t) : s.map(i => Sa(i, e, a, t))
  },
  So = r => dt(r) && "props" in r && "type" in r && "children" in r,
  Sa = (r, e, a, t, n) => {
    if (!So(r)) return String(r);
    if (r.type === "slot") return To(r, e, a, t);
    const s = ko(r, e, a, t, n),
      i = $r(r.type) ? [] : xr(r, e, a, t);
    return go(Ta(r), s, i)
  };

function Ma(r, e, a) {
  return r === void 0 && (r = {}), Sa(r, e, e.f7, a, !0)
}

function Mo(r) {
  return document.createElement(r)
}

function Po(r, e) {
  return document.createElementNS(r, e)
}

function Ao(r) {
  return document.createTextNode(r)
}

function Io(r) {
  return document.createComment(r)
}

function Oo(r, e, a) {
  a && a.parentNode !== r && a.__component__ && (a = a.__component__.el), r.insertBefore(e, a)
}

function Bo(r, e) {
  !r || r.removeChild(e)
}

function Do(r, e) {
  r.appendChild(e)
}

function Lo(r) {
  return r.parentNode
}

function Ro(r) {
  return r.nextSibling
}

function Ho(r) {
  return r.tagName
}

function zo(r, e) {
  r.textContent = e
}

function Fo(r) {
  return r.textContent
}

function Vo(r) {
  return r.nodeType === 1
}

function No(r) {
  return r.nodeType === 3
}

function Yo(r) {
  return r.nodeType === 8
}
var qo = {
    createElement: Mo,
    createElementNS: Po,
    createTextNode: Ao,
    createComment: Io,
    insertBefore: Oo,
    removeChild: Bo,
    appendChild: Do,
    parentNode: Lo,
    nextSibling: Ro,
    tagName: Ho,
    setTextContent: zo,
    getTextContent: Fo,
    isElement: Vo,
    isText: No,
    isComment: Yo
  },
  jo = qo;

function Pa(r) {
  return r === void 0
}

function ye(r) {
  return r !== void 0
}
var kr = Xt("", {}, [], void 0, void 0);

function Pt(r, e) {
  return r.key === e.key && r.sel === e.sel
}

function Wo(r) {
  return r.sel !== void 0
}

function Xo(r, e, a) {
  var t, n = {},
    s, i;
  for (t = e; t <= a; ++t) i = r[t], i != null && (s = i.key, s !== void 0 && (n[s] = t));
  return n
}
var Kt = ["create", "update", "remove", "destroy", "pre", "post"];

function Go(r, e) {
  var a, t, n = {},
    s = e !== void 0 ? e : jo;
  for (a = 0; a < Kt.length; ++a)
    for (n[Kt[a]] = [], t = 0; t < r.length; ++t) {
      var i = r[t][Kt[a]];
      i !== void 0 && n[Kt[a]].push(i)
    }

  function o(f) {
    var b = f.id ? "#" + f.id : "",
      m = f.className ? "." + f.className.split(" ").join(".") : "";
    return Xt(s.tagName(f).toLowerCase() + b + m, {}, [], void 0, f)
  }

  function l(f, b) {
    return function () {
      if (--b == 0) {
        var v = s.parentNode(f);
        s.removeChild(v, f)
      }
    }
  }

  function c(f, b) {
    var m, v = f.data;
    v !== void 0 && ye(m = v.hook) && ye(m = m.init) && (m(f), v = f.data);
    var E = f.children,
      $ = f.sel;
    if ($ === "!") Pa(f.text) && (f.text = ""), f.elm = s.createComment(f.text);
    else if ($ !== void 0) {
      var w = $.indexOf("#"),
        C = $.indexOf(".", w),
        x = w > 0 ? w : $.length,
        M = C > 0 ? C : $.length,
        A = w !== -1 || C !== -1 ? $.slice(0, Math.min(x, M)) : $,
        B = f.elm = ye(v) && ye(m = v.ns) ? s.createElementNS(m, A) : s.createElement(A);
      for (x < M && B.setAttribute("id", $.slice(x + 1, M)), C > 0 && B.setAttribute("class", $.slice(M + 1).replace(/\./g, " ")), m = 0; m < n.create.length; ++m) n.create[m](kr, f);
      if (Gt(E))
        for (m = 0; m < E.length; ++m) {
          var S = E[m];
          S != null && s.appendChild(B, c(S, b))
        } else Ut(f.text) && s.appendChild(B, s.createTextNode(f.text));
      m = f.data.hook, ye(m) && (m.create && m.create(kr, f), m.insert && b.push(f))
    } else f.elm = s.createTextNode(f.text);
    return f.elm
  }

  function d(f, b, m, v, E, $) {
    for (; v <= E; ++v) {
      var w = m[v];
      w != null && s.insertBefore(f, c(w, $), b)
    }
  }

  function p(f) {
    var b, m, v = f.data;
    if (v !== void 0) {
      for (ye(b = v.hook) && ye(b = b.destroy) && b(f), b = 0; b < n.destroy.length; ++b) n.destroy[b](f);
      if (f.children !== void 0)
        for (m = 0; m < f.children.length; ++m) b = f.children[m], b != null && typeof b != "string" && p(b)
    }
  }

  function u(f, b, m, v) {
    for (; m <= v; ++m) {
      var E = void 0,
        $ = void 0,
        w = void 0,
        C = b[m];
      if (C != null)
        if (ye(C.sel)) {
          for (p(C), $ = n.remove.length + 1, w = l(C.elm, $), E = 0; E < n.remove.length; ++E) n.remove[E](C, w);
          ye(E = C.data) && ye(E = E.hook) && ye(E = E.remove) ? E(C, w) : w()
        } else s.removeChild(f, C.elm)
    }
  }

  function g(f, b, m, v) {
    for (var E = 0, $ = 0, w = b.length - 1, C = b[0], x = b[w], M = m.length - 1, A = m[0], B = m[M], S, P, k, I; E <= w && $ <= M;) C == null ? C = b[++E] : x == null ? x = b[--w] : A == null ? A = m[++$] : B == null ? B = m[--M] : Pt(C, A) ? (h(C, A, v), C = b[++E], A = m[++$]) : Pt(x, B) ? (h(x, B, v), x = b[--w], B = m[--M]) : Pt(C, B) ? (h(C, B, v), s.insertBefore(f, C.elm, s.nextSibling(x.elm)), C = b[++E], B = m[--M]) : Pt(x, A) ? (h(x, A, v), s.insertBefore(f, x.elm, C.elm), x = b[--w], A = m[++$]) : (S === void 0 && (S = Xo(b, E, w)), P = S[A.key], Pa(P) ? (s.insertBefore(f, c(A, v), C.elm), A = m[++$]) : (k = b[P], k.sel !== A.sel ? s.insertBefore(f, c(A, v), C.elm) : (h(k, A, v), b[P] = void 0, s.insertBefore(f, k.elm, C.elm)), A = m[++$]));
    (E <= w || $ <= M) && (E > w ? (I = m[M + 1] == null ? null : m[M + 1].elm, d(f, I, m, $, M, v)) : u(f, b, E, w))
  }

  function h(f, b, m) {
    var v, E;
    ye(v = b.data) && ye(E = v.hook) && ye(v = E.prepatch) && v(f, b);
    var $ = b.elm = f.elm,
      w = f.children,
      C = b.children;
    if (f !== b) {
      if (b.data !== void 0) {
        for (v = 0; v < n.update.length; ++v) n.update[v](f, b);
        v = b.data.hook, ye(v) && ye(v = v.update) && v(f, b)
      }
      Pa(b.text) ? ye(w) && ye(C) ? w !== C && g($, w, C, m) : ye(C) ? (ye(f.text) && s.setTextContent($, ""), d($, null, C, 0, C.length - 1, m)) : ye(w) ? u($, w, 0, w.length - 1) : ye(f.text) && s.setTextContent($, "") : f.text !== b.text && s.setTextContent($, b.text), ye(E) && ye(v = E.postpatch) && v(f, b)
    }
  }
  return function (b, m) {
    var v, E, $, w = [];
    for (v = 0; v < n.pre.length; ++v) n.pre[v]();
    for (Wo(b) || (b = o(b)), Pt(b, m) ? h(b, m, w) : (E = b.elm, $ = s.parentNode(E), c(m, w), $ !== null && (s.insertBefore($, m.elm, s.nextSibling(E)), u($, [b], 0, 0))), v = 0; v < w.length; ++v) w[v].data.hook.insert(w[v]);
    for (v = 0; v < n.post.length; ++v) n.post[v]();
    return m
  }
}
var Uo = "http://www.w3.org/1999/xlink",
  _o = "http://www.w3.org/XML/1998/namespace",
  Tr = 58,
  Ko = 120;

function Sr(r, e) {
  var a, t = e.elm,
    n = r.data.attrs,
    s = e.data.attrs;
  if (!(!n && !s) && n !== s) {
    n = n || {}, s = s || {};
    for (a in s) {
      var i = s[a],
        o = n[a];
      o !== i && (i === !0 ? t.setAttribute(a, "") : i === !1 ? t.removeAttribute(a) : a.charCodeAt(0) !== Ko ? t.setAttribute(a, i) : a.charCodeAt(3) === Tr ? t.setAttributeNS(_o, a, i) : a.charCodeAt(5) === Tr ? t.setAttributeNS(Uo, a, i) : t.setAttribute(a, i))
    }
    for (a in n) a in s || t.removeAttribute(a)
  }
}
var Qo = {
    create: Sr,
    update: Sr
  },
  Zo = Qo;

function Mr(r, e) {
  var a, t, n, s = e.elm,
    i = r.data.props,
    o = e.data.props;
  if (!(!i && !o) && i !== o) {
    i = i || {}, o = o || {};
    for (a in i) o[a] || delete s[a];
    for (a in o) t = o[a], n = i[a], n !== t && (a !== "value" || s[a] !== t) && (s[a] = t)
  }
}
var Jo = {
    create: Mr,
    update: Mr
  },
  el = Jo,
  Pr = typeof window != "undefined" && window.requestAnimationFrame || setTimeout,
  tl = function (r) {
    Pr(function () {
      Pr(r)
    })
  };

function al(r, e, a) {
  tl(function () {
    r[e] = a
  })
}

function Ar(r, e) {
  var a, t, n = e.elm,
    s = r.data.style,
    i = e.data.style;
  if (!(!s && !i) && s !== i) {
    s = s || {}, i = i || {};
    var o = "delayed" in s;
    for (t in s) i[t] || (t[0] === "-" && t[1] === "-" ? n.style.removeProperty(t) : n.style[t] = "");
    for (t in i)
      if (a = i[t], t === "delayed" && i.delayed)
        for (var l in i.delayed) a = i.delayed[l], (!o || a !== s.delayed[l]) && al(n.style, l, a);
      else t !== "remove" && a !== s[t] && (t[0] === "-" && t[1] === "-" ? n.style.setProperty(t, a) : n.style[t] = a)
  }
}

function rl(r) {
  var e, a, t = r.elm,
    n = r.data.style;
  if (!(!n || !(e = n.destroy)))
    for (a in e) t.style[a] = e[a]
}

function nl(r, e) {
  var a = r.data.style;
  if (!a || !a.remove) {
    e();
    return
  }
  var t, n = r.elm,
    s = 0,
    i, o = a.remove,
    l = 0,
    c = [];
  for (t in o) c.push(t), n.style[t] = o[t];
  i = getComputedStyle(n);
  for (var d = i["transition-property"].split(", "); s < d.length; ++s) c.indexOf(d[s]) !== -1 && l++;
  n.addEventListener("transitionend", function (p) {
    p.target === n && --l, l === 0 && e()
  })
}
var sl = {
    create: Ar,
    update: Ar,
    destroy: rl,
    remove: nl
  },
  il = sl;

function ol(r, e, a) {
  typeof r == "function" && r(e, ...a)
}

function ll(r, e, a) {
  const t = r.type,
    n = a.data.on;
  n && n[t] && ol(n[t], r, e)
}

function cl() {
  return function r(e) {
    for (var a = arguments.length, t = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) t[n - 1] = arguments[n];
    ll(e, t, r.vnode)
  }
}

function Aa(r, e) {
  const a = r.data.on,
    t = r.listener,
    n = r.elm,
    s = e && e.data.on,
    i = e && e.elm;
  if (a !== s && (a && t && (s ? Object.keys(a).forEach(o => {
      s[o] || y(n).off(o, t)
    }) : Object.keys(a).forEach(o => {
      y(n).off(o, t)
    })), s)) {
    const o = r.listener || cl();
    e.listener = o, o.vnode = e, a ? Object.keys(s).forEach(l => {
      a[l] || y(i).on(l, o)
    }) : Object.keys(s).forEach(l => {
      y(i).on(l, o)
    })
  }
}
var dl = {
  create: Aa,
  update: Aa,
  destroy: Aa
};
const pl = Go([Zo, el, il, dl]);
var Qt = pl;
const ul = [!1, null, "", void 0],
  fl = function (r, e) {
    for (var a = arguments.length, t = new Array(a > 2 ? a - 2 : 0), n = 2; n < a; n++) t[n - 2] = arguments[n];
    const s = Yt((t || []).filter(i => ul.indexOf(i) < 0));
    return r === "Fragment" ? s : {
      type: r,
      props: e || {},
      children: s
    }
  };
var hl = fl;
const ml = [{
  name: "array",
  init: r => r,
  type: r => [r].find(Array.isArray),
  update: (r, e) => [e].filter(Array.isArray).find(() => (r.length = 0, r.push(...e))),
  insert: function (r, e, a) {
    return a === void 0 && (a = []), r.splice(Math.max(e, 0), 0, ...[a].flat())
  },
  replace: function (r, e, a) {
    return a === void 0 && (a = []), r.splice(Math.max(e, 0), Math.min(++e, 1), ...[a].flat())
  },
  append: function (r, e) {
    return e === void 0 && (e = []), r.push(...[e].flat())
  },
  prepend: function (r, e) {
    return e === void 0 && (e = []), r.unshift(...[e].flat())
  },
  swap: (r, e, a) => {
    [r[e], r[a]] = [r[a], r[e]]
  },
  fromTo: function (r, e, a) {
    return a === void 0 && (a = e), r.splice(Math.max(a, 0), 0, ...r.splice(Math.max(e, 0), 1))
  },
  remove: function (r, e, a) {
    return a === void 0 && (a = r.map((t, n) => n)), [e].flat().filter(t => a.includes(t)).sort((t, n) => n - t).forEach(t => r.splice(t, 1))
  },
  clear: r => r.length = 0
}, {
  name: "object",
  init: r => r,
  type: r => [r].filter(e => [e !== null, e !== void 0].every(a => a)).find(e => Object.getPrototypeOf(e) === Object.prototype),
  update: (r, e) => Object.assign(r, e),
  insert: () => {},
  replace: () => {},
  append: () => {},
  prepend: () => {},
  swap: () => ({}),
  fromTo: () => ({}),
  remove: (r, e) => [e].flat().forEach(a => delete r[a]),
  clear: r => Object.keys(r).forEach(e => delete r[e])
}, {
  name: "atoms",
  type: () => !0,
  init: function (r, e) {
    return e === void 0 && (e = {}), Object.defineProperty(e, "value", {
      get: () => r,
      set: a => {
        r = a
      }
    }), e
  },
  update: function (r, e) {
    e === void 0 && (e = r.value), r.value = e
  },
  insert: () => ({}),
  replace: () => ({}),
  append: () => ({}),
  prepend: () => ({}),
  swap: () => ({}),
  fromTo: () => ({}),
  remove: () => ({}),
  clear: r => {
    r.value = void 0
  }
}];
class Ir {
  constructor(e, a, t, n) {
    t === void 0 && (t = {});
    let {
      el: s,
      context: i,
      children: o
    } = n === void 0 ? {} : n;
    const l = ee();
    Vt(this, {
      f7: e,
      props: t || {},
      context: i || {},
      id: a.id || vt(),
      children: o || [],
      theme: {
        ios: e.theme === "ios",
        md: e.theme === "md"
      },
      style: a.style,
      __updateQueue: [],
      __eventHandlers: [],
      __onceEventHandlers: [],
      __onBeforeMount: [],
      __onMounted: [],
      __onBeforeUpdate: [],
      __onUpdated: [],
      __onBeforeUnmount: [],
      __onUnmounted: []
    });
    const c = () => a(this.props, this.getComponentContext(!0)),
      d = p => new Promise((u, g) => {
        typeof p == "function" ? u(p) : p instanceof Promise ? p.then(h => {
          u(h)
        }).catch(h => {
          g(h)
        }) : g(new Error(`Framework7: Component render function is not a "function" type. Didn't you forget to "return $render"?`))
      });
    return new Promise((p, u) => {
      const g = c();
      d(g).then(h => {
        this.renderFunction = h;
        const f = this.render();
        if (s) {
          this.vnode = Ma(f, this, !0), this.style && (this.styleEl = l.createElement("style"), this.styleEl.innerHTML = this.style), this.el = s, Qt(this.el, this.vnode), this.el = this.vnode.elm, this.$el = y(this.el), this.attachEvents(), this.el.f7Component = this, this.mount(), p(this);
          return
        }
        f && (this.vnode = Ma(f, this, !0), this.el = l.createElement(this.vnode.sel || "div"), Qt(this.el, this.vnode), this.$el = y(this.el)), this.style && (this.styleEl = l.createElement("style"), this.styleEl.innerHTML = this.style), this.attachEvents(), this.el && (this.el.f7Component = this), p(this)
      }).catch(h => {
        u(h)
      })
    })
  }
  on(e, a) {
    !this.__eventHandlers || this.__eventHandlers.push({
      eventName: e,
      handler: a
    })
  }
  once(e, a) {
    !this.__eventHandlers || this.__onceEventHandlers.push({
      eventName: e,
      handler: a
    })
  }
  getComponentRef() {
    const e = this;
    return a => {
      let t = a;
      const n = {};
      return Object.defineProperty(n, "value", {
        get() {
          return t
        },
        set(s) {
          t = s, e.update()
        }
      }), n
    }
  }
  getComponentStore() {
    const {
      state: e,
      _gettersPlain: a,
      dispatch: t
    } = this.f7.store, n = {
      state: e,
      dispatch: t
    };
    return n.getters = new Proxy(a, {
      get: (s, i) => {
        const o = s[i],
          l = c => {
            o.value = c, this.update()
          };
        return o.onUpdated(l), o
      }
    }), n
  }
  getUseState() {
    var e = this;
    return a => {
      const t = [a].reduce(function (n, s, i, o, l) {
        return l === void 0 && (l = n.init(s)), {
          state: l,
          update: c => (n.update(l, c), e.update()),
          remove: c => (n.remove(l, c), e.update()),
          clear: () => (n.clear(l), e.update()),
          insert: (c, d) => (n.insert(l, c, d), e.update()),
          replace: (c, d) => (n.replace(l, c, d), e.update()),
          append: c => (n.append(l, c), e.update()),
          prepend: c => (n.prepend(l, c), e.update()),
          swap: (c, d) => (n.swap(l, c, d), e.update()),
          fromTo: (c, d) => (n.fromTo(l, c, d), e.update()),
          method: function (c) {
            return c === void 0 && (c = () => ({})), c(l), e.update()
          },
          async: function (c) {
            return c === void 0 && (c = () => Promise.reject(l)), c(l).then(() => e.update())
          }
        }
      }, ml.find(n => n.type(a)));
      return t.length = 12, t[Symbol.iterator] = function () {
        const s = Object.values(this);
        s.splice(s.indexOf(12), 1);
        let i = 0;
        return {
          next() {
            if (i < s.length) {
              const o = s[i];
              return i += 1, {
                value: o,
                done: !1
              }
            }
            return {
              done: !0
            }
          }
        }
      }, t
    }
  }
  getComponentContext(e) {
    const a = {
      $f7route: this.context.f7route,
      $f7router: this.context.f7router,
      $h: mo,
      $: y,
      $id: this.id,
      $f7: this.f7,
      $f7ready: this.f7ready.bind(this),
      $theme: this.theme,
      $tick: this.tick.bind(this),
      $update: this.update.bind(this),
      $emit: this.emit.bind(this),
      $store: this.getComponentStore(),
      $ref: this.getComponentRef(),
      $el: {},
      $useState: this.getUseState()
    };
    return Object.defineProperty(a.$el, "value", {
      get: () => this.$el
    }), e && Object.assign(a, {
      $on: this.on.bind(this),
      $once: this.once.bind(this),
      $onBeforeMount: t => this.__onBeforeMount.push(t),
      $onMounted: t => this.__onMounted.push(t),
      $onBeforeUpdate: t => this.__onBeforeUpdate.push(t),
      $onUpdated: t => this.__onUpdated.push(t),
      $onBeforeUnmount: t => this.__onBeforeUnmount.push(t),
      $onUnmounted: t => this.__onUnmounted.push(t)
    }), a
  }
  render() {
    return this.renderFunction(this.getComponentContext())
  }
  emit(e, a) {
    !this.el || this.$el.trigger(e, a)
  }
  attachEvents() {
    const {
      $el: e
    } = this;
    !this.__eventHandlers || (this.__eventHandlers.forEach(a => {
      let {
        eventName: t,
        handler: n
      } = a;
      e.on(Ye(t), n)
    }), this.__onceEventHandlers.forEach(a => {
      let {
        eventName: t,
        handler: n
      } = a;
      e.once(Ye(t), n)
    }))
  }
  detachEvents() {
    const {
      $el: e
    } = this;
    !this.__eventHandlers || (this.__eventHandlers.forEach(a => {
      let {
        eventName: t,
        handler: n
      } = a;
      e.on(Ye(t), n)
    }), this.__onceEventHandlers.forEach(a => {
      let {
        eventName: t,
        handler: n
      } = a;
      e.once(Ye(t), n)
    }))
  }
  startUpdateQueue() {
    const e = G();
    if (this.__requestAnimationFrameId) return;
    const a = () => {
      this.hook("onBeforeUpdate");
      const t = this.render();
      if (t) {
        const n = Ma(t, this, !1);
        this.vnode = Qt(this.vnode, n)
      }
    };
    this.__requestAnimationFrameId = e.requestAnimationFrame(() => {
      this.__updateIsPending && a();
      let t = [...this.__updateQueue];
      this.__updateQueue = [], this.__updateIsPending = !1, e.cancelAnimationFrame(this.__requestAnimationFrameId), delete this.__requestAnimationFrameId, delete this.__updateIsPending, t.forEach(n => n()), t = []
    })
  }
  tick(e) {
    return new Promise(a => {
      function t() {
        a(), e && e()
      }
      this.__updateQueue.push(t), this.startUpdateQueue()
    })
  }
  update(e) {
    return this.__destroyed ? new Promise(() => {}) : new Promise(a => {
      const t = () => {
        a(), e && e()
      };
      this.__updateIsPending = !0, this.__updateQueue.push(t), this.startUpdateQueue()
    })
  }
  setState(e) {
    return this.update(e)
  }
  f7ready(e) {
    if (this.f7.initialized) {
      e(this.f7);
      return
    }
    this.f7.once("init", () => {
      e(this.f7)
    })
  }
  mount(e) {
    this.hook("onBeforeMount", this.$el), this.styleEl && y("head").append(this.styleEl), e && e(this.el), this.hook("onMounted", this.$el)
  }
  destroy() {
    if (this.__destroyed) return;
    const e = G();
    this.hook("onBeforeUnmount"), this.styleEl && y(this.styleEl).remove(), this.detachEvents(), this.hook("onUnmounted"), this.el && this.el.f7Component && (this.el.f7Component = null, delete this.el.f7Component), this.vnode && (this.vnode = Qt(this.vnode, {
      sel: this.vnode.sel,
      data: {}
    })), e.cancelAnimationFrame(this.__requestAnimationFrameId), this.__updateQueue = [], this.__eventHandlers = [], this.__onceEventHandlers = [], this.__onBeforeMount = [], this.__onMounted = [], this.__onBeforeUpdate = [], this.__onUpdated = [], this.__onBeforeUnmount = [], this.__onUnmounted = [], $e(this), this.__destroyed = !0
  }
  hook(e) {
    for (var a = arguments.length, t = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) t[n - 1] = arguments[n];
    this.__destroyed || this[`__${e}`].forEach(s => {
      s(...t)
    })
  }
}
Ir.$jsx = hl;
var Or = Ir;

function Br(r) {
  const e = G(),
    a = ee(),
    t = vt(),
    n = `f7_component_create_callback_${t}`;
  let s;
  r.match(/<template([ ]?)([a-z0-9-]*)>/) && (s = r.split(/<template[ ]?[a-z0-9-]*>/).filter((p, u) => u > 0).join("<template>").split("</template>").filter((p, u, g) => u < g.length - 1).join("</template>").replace(/{{#raw}}([ \n]*)<template/g, "{{#raw}}<template").replace(/\/template>([ \n]*){{\/raw}}/g, "/template>{{/raw}}").replace(/([ \n])<template/g, "$1{{#raw}}<template").replace(/\/template>([ \n])/g, "/template>{{/raw}}$1"));
  let o = null;
  r.indexOf("<style>") >= 0 && (o = r.split("<style>")[1].split("</style>")[0]), r.indexOf("<style scoped>") >= 0 && (o = r.split("<style scoped>")[1].split("</style>")[0]);
  let l;
  if (r.indexOf("<script>") >= 0) {
    const p = r.split("<script>");
    l = p[p.length - 1].split("<\/script>")[0].trim()
  } else l = "return () => {return $render}";
  (!l || !l.trim()) && (l = "return () => {return $render}"), s && (l = l.replace("$render", `function ($$ctx) {
          var $ = $$ctx.$$;
          var $h = $$ctx.$h;
          var $root = $$ctx.$root;
          var $f7 = $$ctx.$f7;
          var $f7route = $$ctx.$f7route;
          var $f7router = $$ctx.$f7router;
          var $theme = $$ctx.$theme;
          var $update = $$ctx.$update;
          var $store = $$ctx.$store;
          var $ref = $$ctx.$ref;
          var $useState = $$ctx.$useState;

          return $h\`${s}\`
        }
        `).replace(/export default/g, "return")), l = `window.${n} = function () {${l}}`;
  const c = a.createElement("script");
  c.innerHTML = l, y("head").append(c);
  const d = e[n]();
  return y(c).remove(), e[n] = null, delete e[n], o && (d.style = o), d.id = t, d
}

function Dr(r, e) {
  _t[r] = e
}

function Lr(r) {
  delete _t[r]
}
var gl = {
    name: "component",
    static: {
      Component: Or,
      parseComponent: Br,
      registerComponent: Dr,
      unregisterComponent: Lr
    },
    create() {
      const r = this;
      r.component = {
        registerComponent: Dr,
        unregisterComponent: Lr,
        parse(e) {
          return Br(e)
        },
        create(e, a, t) {
          let {
            root: n,
            el: s,
            context: i,
            children: o
          } = t;
          return new Or(r, e, a, {
            root: n,
            el: s,
            context: i,
            children: o
          })
        }
      }
    }
  },
  vl = {
    name: "history",
    static: {
      history: we
    },
    on: {
      init() {
        we.init(this)
      }
    }
  };
const rt = {
  registrations: [],
  register(r, e) {
    const a = this,
      t = G();
    return !("serviceWorker" in t.navigator) || !a.serviceWorker.container ? new Promise((n, s) => {
      s(new Error("Service worker is not supported"))
    }) : new Promise((n, s) => {
      a.serviceWorker.container.register(r, e ? {
        scope: e
      } : {}).then(i => {
        rt.registrations.push(i), a.emit("serviceWorkerRegisterSuccess", i), n(i)
      }).catch(i => {
        a.emit("serviceWorkerRegisterError", i), s(i)
      })
    })
  },
  unregister(r) {
    const e = this,
      a = G();
    if (!("serviceWorker" in a.navigator) || !e.serviceWorker.container) return new Promise((n, s) => {
      s(new Error("Service worker is not supported"))
    });
    let t;
    return r ? Array.isArray(r) ? t = r : t = [r] : t = rt.registrations, Promise.all(t.map(n => new Promise((s, i) => {
      n.unregister().then(() => {
        rt.registrations.indexOf(n) >= 0 && rt.registrations.splice(rt.registrations.indexOf(n), 1), e.emit("serviceWorkerUnregisterSuccess", n), s()
      }).catch(o => {
        e.emit("serviceWorkerUnregisterError", n, o), i(o)
      })
    })))
  }
};
var bl = {
  name: "sw",
  params: {
    serviceWorker: {
      path: void 0,
      scope: void 0
    }
  },
  create() {
    const r = this,
      e = G();
    H(r, {
      serviceWorker: {
        container: "serviceWorker" in e.navigator ? e.navigator.serviceWorker : void 0,
        registrations: rt.registrations,
        register: rt.register.bind(r),
        unregister: rt.unregister.bind(r)
      }
    })
  },
  on: {
    init() {
      const r = G();
      if (!("serviceWorker" in r.navigator)) return;
      const e = this;
      if (e.device.cordova || r.Capacitor && r.Capacitor.isNative || !e.serviceWorker.container) return;
      const a = e.params.serviceWorker.path,
        t = e.params.serviceWorker.scope;
      if (!a || Array.isArray(a) && !a.length) return;
      (Array.isArray(a) ? a : [a]).forEach(s => {
        e.serviceWorker.register(s, t)
      })
    }
  }
};

function Rr(r) {
  r === void 0 && (r = {});
  const e = {
      __store: !0
    },
    a = Ee({}, r.state || {}),
    t = Ee({}, r.actions || {}),
    n = Ee({}, r.getters || {}),
    s = H({}, a);
  let i = [];
  const o = {},
    l = {};
  Object.keys(n).forEach(f => {
    o[f] = [], l[f] = []
  });
  const c = f => n[f]({
      state: e.state
    }),
    d = (f, b) => {
      o[f] || (o[f] = []), b.forEach(m => {
        o[f].indexOf(m) < 0 && o[f].push(m)
      })
    },
    p = (f, b) => {
      l[f] || (l[f] = []), l[f].push(b)
    },
    u = f => {
      Object.keys(o).filter(m => o[m].indexOf(f) >= 0).forEach(m => {
        !l[m] || !l[m].length || l[m].forEach(v => {
          v(c(m))
        })
      })
    },
    g = f => {
      Object.keys(l).forEach(b => {
        const m = l[b];
        m.indexOf(f) >= 0 && m.splice(m.indexOf(f), 1)
      })
    };
  e.__removeCallback = f => {
    g(f)
  };
  const h = function (f, b) {
    if (b === void 0 && (b = !0), f === "constructor") return;
    i = [];
    const m = c(f);
    d(f, i);
    const E = {
      value: m,
      onUpdated: w => {
        p(f, w)
      }
    };
    if (!b) return E;
    const $ = w => {
      E.value = w
    };
    return E.__callback = $, p(f, $), E
  };
  return e.state = new Proxy(s, {
    set: (f, b, m) => (f[b] = m, u(b), !0),
    get: (f, b) => (i.push(b), f[b])
  }), e.getters = new Proxy(n, {
    set: () => !1,
    get: (f, b) => {
      if (!!f[b]) return h(b, !0)
    }
  }), e._gettersPlain = new Proxy(n, {
    set: () => !1,
    get: (f, b) => {
      if (!!f[b]) return h(b, !1)
    }
  }), e.dispatch = (f, b) => new Promise((m, v) => {
    if (!t[f]) throw v(), new Error(`Framework7: Store action "${f}" is not found`);
    const E = t[f]({
      state: e.state,
      dispatch: e.dispatch
    }, b);
    m(E)
  }), e
}
var yl = {
  name: "store",
  static: {
    createStore: Rr
  },
  proto: {
    createStore: Rr
  }
};
const pt = () => {
    const r = G();
    return r.Capacitor && r.Capacitor.isNative && r.Capacitor.Plugins && r.Capacitor.Plugins.StatusBar
  },
  Oe = {
    hide() {
      const r = G();
      ue().cordova && r.StatusBar && r.StatusBar.hide(), pt() && r.Capacitor.Plugins.StatusBar.hide()
    },
    show() {
      const r = G();
      ue().cordova && r.StatusBar && r.StatusBar.show(), pt() && r.Capacitor.Plugins.StatusBar.show()
    },
    onClick() {
      const r = this;
      let e;
      y(".popup.modal-in").length > 0 ? e = y(".popup.modal-in").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : y(".panel.panel-in").length > 0 ? e = y(".panel.panel-in").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : y(".views > .view.tab-active").length > 0 ? e = y(".views > .view.tab-active").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : y(".views").length > 0 ? e = y(".views").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content") : e = r.$el.children(".view").find(".page:not(.page-previous):not(.page-next):not(.cached)").find(".page-content"), e && e.length > 0 && (e.hasClass("tab") && (e = e.parent(".tabs").children(".page-content.tab-active")), e.length > 0 && e.scrollTop(0, 300))
    },
    setTextColor(r) {
      const e = G();
      ue().cordova && e.StatusBar && (r === "white" ? e.StatusBar.styleLightContent() : e.StatusBar.styleDefault()), pt() && (r === "white" ? e.Capacitor.Plugins.StatusBar.setStyle({
        style: "DARK"
      }) : e.Capacitor.Plugins.StatusBar.setStyle({
        style: "LIGHT"
      }))
    },
    setBackgroundColor(r) {
      const e = G();
      ue().cordova && e.StatusBar && e.StatusBar.backgroundColorByHexString(r), pt() && e.Capacitor.Plugins.StatusBar.setBackgroundColor({
        color: r
      })
    },
    isVisible() {
      const r = G(),
        e = ue();
      return new Promise(a => {
        e.cordova && r.StatusBar && a(r.StatusBar.isVisible), pt() && r.Capacitor.Plugins.StatusBar.getInfo().then(t => {
          a(t.visible)
        }), a(!1)
      })
    },
    overlaysWebView(r) {
      r === void 0 && (r = !0);
      const e = G();
      ue().cordova && e.StatusBar && e.StatusBar.overlaysWebView(r), pt() && e.Capacitor.Plugins.StatusBar.setOverlaysWebView({
        overlay: r
      })
    },
    init() {
      const r = this,
        e = G(),
        a = ue(),
        t = r.params.statusbar;
      if (!t.enabled) return;
      const n = a.cordova && e.StatusBar,
        s = pt();
      (n || s) && (t.scrollTopOnClick && y(e).on("statusTap", Oe.onClick.bind(r)), a.ios && (t.iosOverlaysWebView ? Oe.overlaysWebView(!0) : Oe.overlaysWebView(!1), t.iosTextColor === "white" ? Oe.setTextColor("white") : Oe.setTextColor("black")), a.android && (t.androidOverlaysWebView ? Oe.overlaysWebView(!0) : Oe.overlaysWebView(!1), t.androidTextColor === "white" ? Oe.setTextColor("white") : Oe.setTextColor("black"))), t.iosBackgroundColor && a.ios && Oe.setBackgroundColor(t.iosBackgroundColor), t.androidBackgroundColor && a.android && Oe.setBackgroundColor(t.androidBackgroundColor)
    }
  };
var El = {
  name: "statusbar",
  params: {
    statusbar: {
      enabled: !0,
      scrollTopOnClick: !0,
      iosOverlaysWebView: !0,
      iosTextColor: "black",
      iosBackgroundColor: null,
      androidOverlaysWebView: !1,
      androidTextColor: "black",
      androidBackgroundColor: null
    }
  },
  create() {
    Ie(this, {
      statusbar: Oe
    })
  },
  on: {
    init() {
      const r = this;
      Oe.init.call(r)
    }
  }
};

function wl(r) {
  const e = y(".popover.modal-in .view"),
    a = y(".popup.modal-in .view"),
    t = y(".panel.panel-in .view");
  let n = y(".views");
  n.length === 0 && (n = r.$el);
  let s = n.children(".view");
  if (s.length === 0 && (s = n.children(".tabs").children(".view")), s.length > 1 && s.hasClass("tab") && (s = n.children(".view.tab-active"), s.length === 0 && (s = n.children(".tabs").children(".view.tab-active"))), e.length > 0 && e[0].f7View) return e[0].f7View;
  if (a.length > 0 && a[0].f7View) return a[0].f7View;
  if (t.length > 0 && t[0].f7View) return t[0].f7View;
  if (s.length > 0) {
    if (s.length === 1 && s[0].f7View) return s[0].f7View;
    if (s.length > 1) return r.views.main
  }
}
var Cl = {
  name: "view",
  params: {
    view: {
      init: !0,
      initRouterOnTabShow: !1,
      name: void 0,
      main: !1,
      router: !0,
      linksView: null,
      xhrCache: !0,
      xhrCacheIgnore: [],
      xhrCacheIgnoreGetParameters: !1,
      xhrCacheDuration: 1e3 * 60 * 10,
      componentCache: !0,
      preloadPreviousPage: !0,
      allowDuplicateUrls: !1,
      reloadPages: !1,
      reloadDetail: !1,
      masterDetailBreakpoint: 0,
      masterDetailResizable: !1,
      removeElements: !0,
      removeElementsWithTimeout: !1,
      removeElementsTimeout: 0,
      restoreScrollTopOnBack: !0,
      unloadTabContent: !0,
      passRouteQueryToRequest: !0,
      passRouteParamsToRequest: !1,
      loadInitialPage: !0,
      iosSwipeBack: !0,
      iosSwipeBackAnimateShadow: !0,
      iosSwipeBackAnimateOpacity: !0,
      iosSwipeBackActiveArea: 30,
      iosSwipeBackThreshold: 0,
      mdSwipeBack: !1,
      mdSwipeBackAnimateShadow: !0,
      mdSwipeBackAnimateOpacity: !1,
      mdSwipeBackActiveArea: 30,
      mdSwipeBackThreshold: 0,
      browserHistory: !1,
      browserHistoryRoot: void 0,
      browserHistoryAnimate: !0,
      browserHistoryAnimateOnLoad: !1,
      browserHistorySeparator: "#!",
      browserHistoryOnLoad: !0,
      browserHistoryInitialMatch: !1,
      browserHistoryStoreHistory: !0,
      browserHistoryTabs: "replace",
      animate: !0,
      iosDynamicNavbar: !0,
      iosAnimateNavbarBackIcon: !0,
      iosPageLoadDelay: 0,
      mdPageLoadDelay: 0,
      routesBeforeEnter: null,
      routesBeforeLeave: null
    }
  },
  static: {
    View: ka
  },
  create() {
    const r = this;
    H(r, {
      views: H([], {
        create(e, a) {
          return new ka(r, e, a)
        },
        get(e) {
          const a = y(e);
          if (a.length && a[0].f7View) return a[0].f7View
        }
      })
    }), Object.defineProperty(r.views, "current", {
      enumerable: !0,
      configurable: !0,
      get() {
        return wl(r)
      }
    }), r.view = r.views
  },
  on: {
    init() {
      const r = this;
      y(".view-init").each(e => {
        if (e.f7View) return;
        const a = y(e).dataset();
        r.views.create(e, a)
      })
    },
    "modalOpen panelOpen": function (e) {
      const a = this;
      e.$el.find(".view-init").each(t => {
        if (t.f7View) return;
        const n = y(t).dataset();
        a.views.create(t, n)
      })
    },
    "modalBeforeDestroy panelBeforeDestroy": function (e) {
      !e || !e.$el || e.$el.find(".view-init").each(a => {
        const t = a.f7View;
        !t || t.destroy()
      })
    }
  },
  vnode: {
    "view-init": {
      insert(r) {
        const e = this,
          a = r.elm;
        if (a.f7View) return;
        const t = y(a).dataset();
        e.views.create(a, t)
      },
      destroy(r) {
        const a = r.elm.f7View;
        !a || a.destroy()
      }
    }
  }
};
const $l = {
  size(r) {
    const e = this;
    let a = y(r);
    if (a.hasClass("navbars")) {
      a = a.children(".navbar").each(S => {
        e.navbar.size(S)
      });
      return
    }
    const t = a.children(".navbar-inner");
    if (!t.length) return;
    const n = t.hasClass("navbar-inner-centered-title") || e.params.navbar[`${e.theme}CenterTitle`],
      s = e.theme === "ios" && !e.params.navbar[`${e.theme}CenterTitle`];
    if (!n && !s || a.parents(".tab:not(.tab-active)").length > 0 || a.parents(".popup:not(.modal-in)").length > 0) return;
    e.theme !== "ios" && e.params.navbar[`${e.theme}CenterTitle`] && t.addClass("navbar-inner-centered-title"), e.theme === "ios" && !e.params.navbar.iosCenterTitle && t.addClass("navbar-inner-left-title");
    const i = a.parents(".view").eq(0),
      o = e.rtl ? t.children(".right") : t.children(".left"),
      l = e.rtl ? t.children(".left") : t.children(".right"),
      c = t.children(".title"),
      d = t.children(".subnavbar"),
      p = o.length === 0,
      u = l.length === 0,
      g = p ? 0 : o.outerWidth(!0),
      h = u ? 0 : l.outerWidth(!0),
      f = c.outerWidth(!0),
      b = t.styles(),
      v = t[0].offsetWidth - parseInt(b.paddingLeft, 10) - parseInt(b.paddingRight, 10),
      E = a.hasClass("navbar-previous"),
      $ = t.hasClass("sliding");
    let w, C;
    i.length > 0 && i[0].f7View && (w = i[0].f7View.router, C = w && w.dynamicNavbar);
    let x, M;
    u && (x = v - f), p && (x = 0), !p && !u && (x = (v - h - f + g) / 2);
    let A = (v - f) / 2;
    v - g - h > f ? (A < g && (A = g), A + f > v - h && (A = v - h - f), M = A - x) : M = 0;
    const B = e.rtl ? -1 : 1;
    if (C && e.theme === "ios") {
      if (c.hasClass("sliding") || c.length > 0 && $) {
        let S = -(x + M) * B;
        const P = (v - x - M - f) * B;
        if (E && w && w.params.iosAnimateNavbarBackIcon) {
          const k = a.parent().find(".navbar-current").children(".left.sliding").find(".back .icon ~ span");
          k.length > 0 && (S += k[0].offsetLeft)
        }
        c[0].f7NavbarLeftOffset = S, c[0].f7NavbarRightOffset = P
      }
      if (!p && (o.hasClass("sliding") || $)) {
        if (e.rtl) o[0].f7NavbarLeftOffset = -(v - o[0].offsetWidth) / 2 * B, o[0].f7NavbarRightOffset = g * B;
        else if (o[0].f7NavbarLeftOffset = -g, o[0].f7NavbarRightOffset = (v - o[0].offsetWidth) / 2, w && w.params.iosAnimateNavbarBackIcon && o.find(".back .icon").length > 0 && o.find(".back .icon ~ span").length) {
          const S = o[0].f7NavbarLeftOffset,
            P = o[0].f7NavbarRightOffset;
          o[0].f7NavbarLeftOffset = 0, o[0].f7NavbarRightOffset = 0, o.find(".back .icon ~ span")[0].f7NavbarLeftOffset = S, o.find(".back .icon ~ span")[0].f7NavbarRightOffset = P - o.find(".back .icon")[0].offsetWidth
        }
      }!u && (l.hasClass("sliding") || $) && (e.rtl ? (l[0].f7NavbarLeftOffset = -h * B, l[0].f7NavbarRightOffset = (v - l[0].offsetWidth) / 2 * B) : (l[0].f7NavbarLeftOffset = -(v - l[0].offsetWidth) / 2, l[0].f7NavbarRightOffset = h)), d.length && (d.hasClass("sliding") || $) && (d[0].f7NavbarLeftOffset = e.rtl ? d[0].offsetWidth : -d[0].offsetWidth, d[0].f7NavbarRightOffset = -d[0].f7NavbarLeftOffset)
    }
    if (n) {
      let S = M;
      e.rtl && p && u && c.length > 0 && (S = -S), c.css({
        left: `${S}px`
      })
    }
  },
  hide(r, e, a, t) {
    e === void 0 && (e = !0), a === void 0 && (a = !1), t === void 0 && (t = !1);
    const n = this;
    let s = y(r);
    const i = s.hasClass("navbar") && s.parent(".navbars").length && !t;
    if (i && (s = s.parents(".navbars")), !s.length || s.hasClass("navbar-hidden")) return;
    let o = `navbar-hidden${e?" navbar-transitioning":""}`;
    (i ? s.find(".navbar-current .title-large").length : s.find(".title-large").length) && (o += " navbar-large-hidden"), a && (o += " navbar-hidden-statusbar"), s.transitionEnd(() => {
      s.removeClass("navbar-transitioning")
    }), s.addClass(o), i ? s.children(".navbar").each(c => {
      y(c).trigger("navbar:hide"), n.emit("navbarHide", c)
    }) : (s.trigger("navbar:hide"), n.emit("navbarHide", s[0]))
  },
  show(r, e, a) {
    r === void 0 && (r = ".navbar-hidden"), e === void 0 && (e = !0), a === void 0 && (a = !1);
    const t = this;
    let n = y(r);
    const s = n.hasClass("navbar") && n.parent(".navbars").length && !a;
    s && (n = n.parents(".navbars")), !!n.length && (!n.hasClass("navbar-hidden") || (e && (n.addClass("navbar-transitioning"), n.transitionEnd(() => {
      n.removeClass("navbar-transitioning")
    })), n.removeClass("navbar-hidden navbar-large-hidden navbar-hidden-statusbar"), s ? n.children(".navbar").each(i => {
      y(i).trigger("navbar:show"), t.emit("navbarShow", i)
    }) : (n.trigger("navbar:show"), t.emit("navbarShow", n[0]))))
  },
  getElByPage(r) {
    let e, a, t;
    if (r.$navbarEl || r.$el ? (t = r, e = r.$el) : (e = y(r), e.length > 0 && (t = e[0].f7Page)), t && t.$navbarEl && t.$navbarEl.length > 0 ? a = t.$navbarEl : e && (a = e.children(".navbar")), !(!a || a && a.length === 0)) return a[0]
  },
  getPageByEl(r) {
    const e = y(r);
    if (e.parents(".page").length) return e.parents(".page")[0];
    let a;
    return e.parents(".view").find(".page").each(t => {
      t && t.f7Page && t.f7Page.navbarEl && e[0] === t.f7Page.navbarEl && (a = t)
    }), a
  },
  collapseLargeTitle(r) {
    const e = this;
    let a = y(r);
    if (a.hasClass("navbars") && (a = a.find(".navbar"), a.length > 1 && (a = y(r).find(".navbar-large.navbar-current")), a.length > 1 || !a.length)) return;
    const t = y(e.navbar.getPageByEl(a));
    a.addClass("navbar-large-collapsed"), t.eq(0).addClass("page-with-navbar-large-collapsed").trigger("page:navbarlargecollapsed"), e.emit("pageNavbarLargeCollapsed", t[0]), a.trigger("navbar:collapse"), e.emit("navbarCollapse", a[0])
  },
  expandLargeTitle(r) {
    const e = this;
    let a = y(r);
    if (a.hasClass("navbars") && (a = a.find(".navbar-large"), a.length > 1 && (a = y(r).find(".navbar-large.navbar-current")), a.length > 1 || !a.length)) return;
    const t = y(e.navbar.getPageByEl(a));
    a.removeClass("navbar-large-collapsed"), t.eq(0).removeClass("page-with-navbar-large-collapsed").trigger("page:navbarlargeexpanded"), e.emit("pageNavbarLargeExpanded", t[0]), a.trigger("navbar:expand"), e.emit("navbarExpand", a[0])
  },
  toggleLargeTitle(r) {
    const e = this;
    let a = y(r);
    a.hasClass("navbars") && (a = a.find(".navbar-large"), a.length > 1 && (a = y(r).find(".navbar-large.navbar-current")), a.length > 1 || !a.length) || (a.hasClass("navbar-large-collapsed") ? e.navbar.expandLargeTitle(a) : e.navbar.collapseLargeTitle(a))
  },
  initNavbarOnScroll(r, e, a, t, n) {
    const s = this,
      i = ve(),
      o = y(r),
      l = y(e),
      c = l.find(".title-large"),
      d = c.length || l.hasClass(".navbar-large");
    let p = 44;
    const u = s.params.navbar.snapPageScrollToLargeTitle,
      g = s.params.navbar.snapPageScrollToTransparentNavbar;
    let h, f, b, m, v, E, $, w, C, x;
    (t || a && d) && (C = l.css("--f7-navbar-large-title-height"), C && C.indexOf("px") >= 0 ? (C = parseInt(C, 10), Number.isNaN(C) && c.length ? C = c[0].offsetHeight : Number.isNaN(C) && (s.theme === "ios" ? C = 52 : s.theme === "md" && (C = 88))) : c.length ? C = c[0].offsetHeight : s.theme === "ios" ? C = 52 : s.theme === "md" && (C = 88)), a && d && (p += C);
    let M, A, B, S;
    const P = 70,
      k = 300;

    function I() {
      o.find(".page-content").each(J => {
        J.f7ScrollableDistance = J.scrollHeight - J.offsetHeight
      })
    }

    function R() {
      l.hasClass("with-searchbar-expandable-enabled") || !A || f < 0 || (f >= C / 2 && f < C ? y(A).scrollTop(C, 100) : f < C && y(A).scrollTop(0, 200))
    }

    function D() {
      l.hasClass("with-searchbar-expandable-enabled") || !A || f < 0 || (f >= x / 2 && f < x ? y(A).scrollTop(x, 100) : f < x && y(A).scrollTop(0, 200))
    }

    function z() {
      const J = l.hasClass("navbar-hidden") || l.parent(".navbars").hasClass("navbar-hidden");
      if (l.hasClass("with-searchbar-expandable-enabled") || J) return;
      x || (x = e.offsetHeight);
      let Y = f / x;
      const W = l.hasClass("navbar-transparent-visible");
      if (Y = Math.max(Math.min(Y, 1), 0), W && Y === 1 || !W && Y === 0) {
        l.find(".navbar-bg, .title").css("opacity", "");
        return
      }
      if (W && Y === 0) {
        l.trigger("navbar:transparenthide"), s.emit("navbarTransparentHide", l[0]), l.removeClass("navbar-transparent-visible"), l.find(".navbar-bg, .title").css("opacity", "");
        return
      }
      if (!W && Y === 1) {
        l.trigger("navbar:transparentshow"), s.emit("navbarTransparentShow", l[0]), l.addClass("navbar-transparent-visible"), l.find(".navbar-bg, .title").css("opacity", "");
        return
      }
      l.find(".navbar-bg, .title").css("opacity", Y), g && (i.touch ? S && (clearTimeout(S), S = null, S = setTimeout(() => {
        D(), clearTimeout(S), S = null
      }, P)) : (clearTimeout(B), B = setTimeout(() => {
        D()
      }, k)))
    }
    let O = null,
      L = null;

    function N(J) {
      if (l.hasClass("navbar-hidden") || l.parent(".navbars").hasClass("navbar-hidden")) return;
      const Y = l.hasClass("navbar-large-transparent") || l.hasClass("navbar-large") && l.hasClass("navbar-transparent");
      O = L;
      const W = Math.min(C, J.f7ScrollableDistance || C);
      L = Math.min(Math.max(f / W, 0), 1);
      const K = O > 0 && O < 1;
      if (l.hasClass("with-searchbar-expandable-enabled")) return;
      w = l.hasClass("navbar-large-collapsed");
      const _ = l.find(".navbar-bg");
      L === 0 && w ? s.navbar.expandLargeTitle(l[0]) : L === 1 && !w && s.navbar.collapseLargeTitle(l[0]), L === 0 && w || L === 0 && K || L === 1 && !w || L === 1 && K ? (s.theme === "md" && l.find(".navbar-inner").css("overflow", ""), l.find(".title").css("opacity", ""), l.find(".title-large-text, .subnavbar").css("transform", ""), l.find(".title-large-text").css("opacity", ""), Y && _.css("opacity", ""), _.css("transform", "")) : L > 0 && L < 1 && (s.theme === "md" && l.find(".navbar-inner").css("overflow", "visible"), l.find(".title").css("opacity", -.5 + L * 1.5), l.find(".title-large-text, .subnavbar").css("transform", `translate3d(0px, ${-1*L*C}px, 0)`), l.find(".title-large-text").css("opacity", 1 - L * 2), Y && _.css("opacity", L), _.css("transform", `translate3d(0px, ${-1*L*C}px, 0)`)), u && (i.touch ? S && (clearTimeout(S), S = null, S = setTimeout(() => {
        R(), clearTimeout(S), S = null
      }, P)) : (clearTimeout(B), B = setTimeout(() => {
        R()
      }, k)))
    }

    function F() {
      o.hasClass("page-with-card-opened") || (b = A.scrollHeight, m = A.offsetHeight, v = f + m >= b, $ = l.hasClass("navbar-hidden") || l.parent(".navbars").hasClass("navbar-hidden"), v ? s.params.navbar.showOnPageScrollEnd && (E = "show") : h > f ? s.params.navbar.showOnPageScrollTop || f <= p ? E = "show" : E = "hide" : f > p ? E = "hide" : E = "show", E === "show" && $ ? (s.navbar.show(l, !0, !0), $ = !1) : E === "hide" && !$ && (s.navbar.hide(l, !0, !1, !0), $ = !0), h = f)
    }

    function V(J) {
      A = this, !(J && J.target && J.target !== A) && (f = A.scrollTop, M = f, t ? N(A) : n && z(), !o.hasClass("page-previous") && a && F())
    }

    function U() {
      M = !1
    }

    function Z() {
      clearTimeout(S), S = null, S = setTimeout(() => {
        M !== !1 && (n && !t ? D() : R(), clearTimeout(S), S = null)
      }, P)
    }
    o.on("scroll", ".page-content", V, !0), i.touch && (t && u || n && g) && (s.on("touchstart:passive", U), s.on("touchend:passive", Z)), I(), (t || n) && o.find(".page-content").each(J => {
      J.scrollTop > 0 && V.call(J)
    }), s.on("resize", I), o[0].f7DetachNavbarScrollHandlers = function () {
      s.off("resize", I), delete o[0].f7DetachNavbarScrollHandlers, o.off("scroll", ".page-content", V, !0), i.touch && (t && u || n && g) && (s.off("touchstart:passive", U), s.off("touchend:passive", Z))
    }
  }
};
var xl = {
  name: "navbar",
  create() {
    Ie(this, {
      navbar: $l
    })
  },
  params: {
    navbar: {
      scrollTopOnTitleClick: !0,
      iosCenterTitle: !0,
      mdCenterTitle: !1,
      hideOnPageScroll: !1,
      showOnPageScrollEnd: !0,
      showOnPageScrollTop: !0,
      collapseLargeTitleOnScroll: !0,
      snapPageScrollToLargeTitle: !0,
      snapPageScrollToTransparentNavbar: !0
    }
  },
  on: {
    "panelBreakpoint panelCollapsedBreakpoint panelResize viewResize resize viewMasterDetailBreakpoint": function () {
      const e = this;
      y(".navbar").each(a => {
        e.navbar.size(a)
      })
    },
    pageBeforeRemove(r) {
      r.$el[0].f7DetachNavbarScrollHandlers && r.$el[0].f7DetachNavbarScrollHandlers()
    },
    pageBeforeIn(r) {
      const e = this;
      if (e.theme !== "ios") return;
      let a;
      const t = r.$el.parents(".view")[0].f7View,
        n = e.navbar.getElByPage(r);
      if (n ? a = y(n).parents(".navbars") : a = r.$el.parents(".view").children(".navbars"), r.$el.hasClass("no-navbar") || t.router.dynamicNavbar && !n) {
        const s = !!(r.pageFrom && r.router.history.length > 0);
        e.navbar.hide(a, s)
      } else e.navbar.show(a)
    },
    pageReinit(r) {
      const e = this,
        a = y(e.navbar.getElByPage(r));
      !a || a.length === 0 || e.navbar.size(a)
    },
    pageInit(r) {
      const e = this,
        a = y(e.navbar.getElByPage(r));
      if (!a || a.length === 0) return;
      e.navbar.size(a);
      let t;
      a.find(".title-large").length > 0 && a.addClass("navbar-large"), a.hasClass("navbar-large") && (e.params.navbar.collapseLargeTitleOnScroll && (t = !0), r.$el.addClass("page-with-navbar-large"));
      let n;
      !t && a.hasClass("navbar-transparent") && (n = !0);
      let s;
      (e.params.navbar.hideOnPageScroll || r.$el.find(".hide-navbar-on-scroll").length || r.$el.hasClass("hide-navbar-on-scroll") || r.$el.find(".hide-bars-on-scroll").length || r.$el.hasClass("hide-bars-on-scroll")) && (r.$el.find(".keep-navbar-on-scroll").length || r.$el.hasClass("keep-navbar-on-scroll") || r.$el.find(".keep-bars-on-scroll").length || r.$el.hasClass("keep-bars-on-scroll") ? s = !1 : s = !0), (t || s || n) && e.navbar.initNavbarOnScroll(r.el, a[0], s, t, n)
    },
    "panelOpen panelSwipeOpen modalOpen": function (e) {
      const a = this;
      e.$el.find(".navbar:not(.navbar-previous)").each(t => {
        a.navbar.size(t)
      })
    },
    tabShow(r) {
      const e = this;
      y(r).find(".navbar:not(.navbar-previous)").each(a => {
        e.navbar.size(a)
      })
    }
  },
  clicks: {
    ".navbar .title": function (e, a, t) {
      if (!this.params.navbar.scrollTopOnTitleClick || y(t.target).closest("a, button").length > 0) return;
      let s;
      const i = e.parents(".navbar"),
        o = i.parents(".navbars");
      s = i.parents(".page-content"), s.length === 0 && (i.parents(".page").length > 0 && (s = i.parents(".page").find(".page-content")), s.length === 0 && o.length && o.nextAll(".page-current").length > 0 && (s = o.nextAll(".page-current").find(".page-content")), s.length === 0 && i.nextAll(".page-current").length > 0 && (s = i.nextAll(".page-current").find(".page-content"))), s && s.length > 0 && (s.hasClass("tab") && (s = s.parent(".tabs").children(".page-content.tab-active")), s.length > 0 && s.scrollTop(0, 300))
    }
  },
  vnode: {
    navbar: {
      postpatch(r) {
        this.navbar.size(r.elm)
      }
    }
  }
};
const kl = {
  setHighlight(r) {
    const e = this,
      a = y(r);
    if (e.theme === "ios" && !a.hasClass("tabbar-highlight") || a.length === 0 || !(a.hasClass("tabbar") || a.hasClass("tabbar-icons"))) return;
    let t = a.find(".tab-link-highlight");
    const n = a.find(".tab-link").length;
    if (n === 0) {
      t.remove();
      return
    }
    t.length === 0 ? (a.children(".toolbar-inner").append('<span class="tab-link-highlight"></span>'), t = a.find(".tab-link-highlight")) : t.next().length && a.children(".toolbar-inner").append(t);
    const s = a.find(".tab-link-active");
    let i, o;
    if (a.hasClass("tabbar-scrollable") && s && s[0]) i = `${s[0].offsetWidth}px`, o = `${s[0].offsetLeft}px`;
    else {
      const l = s.index();
      i = `${100/n}%`, o = `${(e.rtl?-l:l)*100}%`
    }
    Pe(() => {
      t.css("width", i).transform(`translate3d(${o},0,0)`)
    })
  },
  init(r) {
    this.toolbar.setHighlight(r)
  },
  hide(r, e) {
    e === void 0 && (e = !0);
    const a = this,
      t = y(r);
    if (t.hasClass("toolbar-hidden")) return;
    const n = `toolbar-hidden${e?" toolbar-transitioning":""}`;
    t.transitionEnd(() => {
      t.removeClass("toolbar-transitioning")
    }), t.addClass(n), t.trigger("toolbar:hide"), a.emit("toolbarHide", t[0])
  },
  show(r, e) {
    e === void 0 && (e = !0);
    const a = this,
      t = y(r);
    !t.hasClass("toolbar-hidden") || (e && (t.addClass("toolbar-transitioning"), t.transitionEnd(() => {
      t.removeClass("toolbar-transitioning")
    })), t.removeClass("toolbar-hidden"), t.trigger("toolbar:show"), a.emit("toolbarShow", t[0]))
  },
  initToolbarOnScroll(r) {
    const e = this,
      a = y(r);
    let t = a.parents(".view").children(".toolbar");
    if (t.length === 0 && (t = a.find(".toolbar")), t.length === 0 && (t = a.parents(".views").children(".tabbar, .tabbar-icons")), t.length === 0) return;
    let n, s, i, o, l, c, d;

    function p(u) {
      if (a.hasClass("page-with-card-opened") || a.hasClass("page-previous")) return;
      const g = this;
      u && u.target && u.target !== g || (s = g.scrollTop, i = g.scrollHeight, o = g.offsetHeight, l = s + o >= i, d = t.hasClass("toolbar-hidden"), l ? e.params.toolbar.showOnPageScrollEnd && (c = "show") : n > s ? e.params.toolbar.showOnPageScrollTop || s <= 44 ? c = "show" : c = "hide" : s > 44 ? c = "hide" : c = "show", c === "show" && d ? (e.toolbar.show(t), d = !1) : c === "hide" && !d && (e.toolbar.hide(t), d = !0), n = s)
    }
    a.on("scroll", ".page-content", p, !0), a[0].f7ScrollToolbarHandler = p
  }
};
var Tl = {
    name: "toolbar",
    create() {
      Ie(this, {
        toolbar: kl
      })
    },
    params: {
      toolbar: {
        hideOnPageScroll: !1,
        showOnPageScrollEnd: !0,
        showOnPageScrollTop: !0
      }
    },
    on: {
      pageBeforeRemove(r) {
        r.$el[0].f7ScrollToolbarHandler && r.$el.off("scroll", ".page-content", r.$el[0].f7ScrollToolbarHandler, !0)
      },
      pageBeforeIn(r) {
        const e = this;
        let a = r.$el.parents(".view").children(".toolbar");
        a.length === 0 && (a = r.$el.parents(".views").children(".tabbar, .tabbar-icons")), a.length === 0 && (a = r.$el.find(".toolbar")), a.length !== 0 && (r.$el.hasClass("no-toolbar") ? e.toolbar.hide(a) : e.toolbar.show(a))
      },
      pageInit(r) {
        const e = this;
        if (r.$el.find(".tabbar, .tabbar-icons").each(a => {
            e.toolbar.init(a)
          }), e.params.toolbar.hideOnPageScroll || r.$el.find(".hide-toolbar-on-scroll").length || r.$el.hasClass("hide-toolbar-on-scroll") || r.$el.find(".hide-bars-on-scroll").length || r.$el.hasClass("hide-bars-on-scroll")) {
          if (r.$el.find(".keep-toolbar-on-scroll").length || r.$el.hasClass("keep-toolbar-on-scroll") || r.$el.find(".keep-bars-on-scroll").length || r.$el.hasClass("keep-bars-on-scroll")) return;
          e.toolbar.initToolbarOnScroll(r.el)
        }
      },
      init() {
        const r = this;
        r.$el.find(".tabbar, .tabbar-icons").each(e => {
          r.toolbar.init(e)
        })
      }
    },
    vnode: {
      tabbar: {
        insert(r) {
          this.toolbar.init(r.elm)
        }
      }
    }
  },
  Sl = {
    name: "subnavbar",
    on: {
      pageInit(r) {
        r.$navbarEl && r.$navbarEl.length && r.$navbarEl.find(".subnavbar").length && r.$el.addClass("page-with-subnavbar"), r.$el.find(".subnavbar").filter(a => y(a).parents(".page")[0] === r.$el[0]).length && r.$el.addClass("page-with-subnavbar")
      }
    }
  };
class Hr {
  constructor(e, a, t, n) {
    const s = this;
    if (!a) return;
    const {
      left: i,
      top: o,
      width: l,
      height: c
    } = a[0].getBoundingClientRect(), d = {
      x: t - i,
      y: n - o
    };
    let p = Math.max((c ** 2 + l ** 2) ** .5, 48),
      u = !1;
    const g = e.params.touch.touchRippleInsetElements || "";
    if (g && a.is(g) && (u = !0), u && (p = Math.max(Math.min(l, c), 48)), !u && a.css("overflow") === "hidden") {
      const h = ((d.x - l / 2) ** 2 + (d.y - c / 2) ** 2) ** .5,
        f = (p / 2 + h) / (p / 2);
      s.rippleTransform = `translate3d(0px, 0px, 0) scale(${f*2})`
    } else s.rippleTransform = `translate3d(${-d.x+l/2}px, ${-d.y+c/2}px, 0) scale(1)`;
    return u && a.addClass("ripple-inset"), s.$rippleWaveEl = y(`<div class="ripple-wave${u?" ripple-wave-inset":""}" style="width: ${p}px; height: ${p}px; margin-top:-${p/2}px; margin-left:-${p/2}px; left:${d.x}px; top:${d.y}px; --f7-ripple-transform: ${s.rippleTransform}"></div>`), a.prepend(s.$rippleWaveEl), s.$rippleWaveEl.animationEnd(() => {
      !s.$rippleWaveEl || s.$rippleWaveEl.hasClass("ripple-wave-out") || (s.$rippleWaveEl.addClass("ripple-wave-in"), s.shouldBeRemoved && s.out())
    }), s
  }
  destroy() {
    let e = this;
    e.$rippleWaveEl && e.$rippleWaveEl.remove(), Object.keys(e).forEach(a => {
      e[a] = null, delete e[a]
    }), e = null
  }
  out() {
    const e = this,
      {
        $rippleWaveEl: a
      } = this;
    clearTimeout(e.removeTimeout), a.addClass("ripple-wave-out"), e.removeTimeout = setTimeout(() => {
      e.destroy()
    }, 300), a.animationEnd(() => {
      clearTimeout(e.removeTimeout), e.destroy()
    })
  }
  remove() {
    const e = this;
    e.shouldBeRemoved || (e.removeTimeout = setTimeout(() => {
      e.destroy()
    }, 400), e.shouldBeRemoved = !0, e.$rippleWaveEl.hasClass("ripple-wave-in") && e.out())
  }
}
var Ml = {
  name: "touch-ripple",
  static: {
    TouchRipple: Hr
  },
  create() {
    const r = this;
    r.touchRipple = {
      create() {
        for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
        return new Hr(...a)
      }
    }
  }
};
const At = [],
  wt = [];

function Pl() {
  if (wt.length === 0) return;
  wt.shift().open()
}
class Al extends be {
  constructor(e, a) {
    super(a, [e]);
    const t = this,
      n = {};
    t.useModulesParams(n), t.params = H(n, a), t.opened = !1;
    let s = t.params.containerEl ? y(t.params.containerEl).eq(0) : e.$el;
    return s.length || (s = e.$el), t.$containerEl = s, t.containerEl = s[0], t.useModules(), this
  }
  onOpen() {
    const e = this;
    e.opened = !0, At.push(e), y("html").addClass(`with-modal-${e.type.toLowerCase()}`), e.$el.trigger(`modal:open ${e.type.toLowerCase()}:open`), e.emit(`local::open modalOpen ${e.type}Open`, e)
  }
  onOpened() {
    const e = this;
    e.$el.trigger(`modal:opened ${e.type.toLowerCase()}:opened`), e.emit(`local::opened modalOpened ${e.type}Opened`, e)
  }
  onClose() {
    const e = this;
    e.opened = !1, !(!e.type || !e.$el) && (At.splice(At.indexOf(e), 1), y("html").removeClass(`with-modal-${e.type.toLowerCase()}`), e.$el.trigger(`modal:close ${e.type.toLowerCase()}:close`), e.emit(`local::close modalClose ${e.type}Close`, e))
  }
  onClosed() {
    const e = this;
    !e.type || !e.$el || (e.$el.removeClass("modal-out"), e.$el.hide(), e.params.backdrop && (e.params.backdropUnique || e.forceBackdropUnique) && e.$backdropEl && e.$backdropEl.remove(), e.$el.trigger(`modal:closed ${e.type.toLowerCase()}:closed`), e.emit(`local::closed modalClosed ${e.type}Closed`, e))
  }
  open(e, a) {
    const t = this,
      n = ee(),
      s = t.app,
      i = t.$el,
      o = t.$backdropEl,
      l = t.type;
    let c = !0;
    if (typeof e != "undefined" ? c = e : typeof t.params.animate != "undefined" && (c = t.params.animate), (!i || i.hasClass("modal-in")) && (e === !1 && i[0] && l !== "dialog" && (i[0].style.display = "block"), !a)) return t;
    if (l === "dialog" && s.params.modal.queueDialogs) {
      let g;
      if (y(".dialog.modal-in").length > 0 ? g = !0 : At.length > 0 && At.forEach(h => {
          h.type === "dialog" && (g = !0)
        }), g) return wt.push(t), t
    }
    const d = i.parent(),
      p = i.parents(n).length > 0;
    d.is(t.$containerEl) || (t.$containerEl.append(i), t.once(`${l}Closed`, () => {
      p ? d.append(i) : i.remove()
    })), i.show(), t.params.backdrop && (t.params.backdropUnique || t.forceBackdropUnique) && t.$backdropEl && t.$backdropEl.insertBefore(i), t._clientLeft = i[0].clientLeft;

    function u() {
      i.hasClass("modal-out") ? t.onClosed() : i.hasClass("modal-in") && t.onOpened()
    }
    return c ? (o && (o.removeClass("not-animated"), o.addClass("backdrop-in")), i.animationEnd(() => {
      u()
    }), i.transitionEnd(() => {
      u()
    }), i.removeClass("modal-out not-animated").addClass("modal-in"), t.onOpen()) : (o && o.addClass("backdrop-in not-animated"), i.removeClass("modal-out").addClass("modal-in not-animated"), t.onOpen(), t.onOpened()), t
  }
  close(e) {
    const a = this,
      t = a.$el,
      n = a.$backdropEl;
    let s = !0;
    if (typeof e != "undefined" ? s = e : typeof a.params.animate != "undefined" && (s = a.params.animate), !t || !t.hasClass("modal-in")) return wt.indexOf(a) >= 0 && wt.splice(wt.indexOf(a), 1), a;
    if (n) {
      let o = !0;
      a.type === "popup" && a.$el.prevAll(".popup.modal-in").add(a.$el.nextAll(".popup.modal-in")).each(l => {
        const c = l.f7Modal;
        !c || c.params.closeByBackdropClick && c.params.backdrop && c.backdropEl === a.backdropEl && (o = !1)
      }), o && (n[s ? "removeClass" : "addClass"]("not-animated"), n.removeClass("backdrop-in"))
    }
    t[s ? "removeClass" : "addClass"]("not-animated");

    function i() {
      t.hasClass("modal-out") ? a.onClosed() : t.hasClass("modal-in") && a.onOpened()
    }
    return s ? (t.animationEnd(() => {
      i()
    }), t.transitionEnd(() => {
      i()
    }), t.removeClass("modal-in").addClass("modal-out"), a.onClose()) : (t.addClass("not-animated").removeClass("modal-in").addClass("modal-out"), a.onClose(), a.onClosed()), a.type === "dialog" && Pl(), a
  }
  destroy() {
    const e = this;
    e.destroyed || (e.emit(`local::beforeDestroy modalBeforeDestroy ${e.type}BeforeDestroy`, e), e.$el && (e.$el.trigger(`modal:beforedestroy ${e.type.toLowerCase()}:beforedestroy`), e.$el.length && e.$el[0].f7Modal && delete e.$el[0].f7Modal), $e(e), e.destroyed = !0)
  }
}
var qe = Al;
class Il extends qe {
  constructor(e, a) {
    const t = H({
      backdrop: !0,
      closeByBackdropClick: !0,
      on: {}
    }, a);
    super(e, t);
    const n = this;
    n.params = t;
    let s;
    if (n.params.el ? s = y(n.params.el) : s = y(n.params.content), s && s.length > 0 && s[0].f7Modal) return s[0].f7Modal;
    if (s.length === 0) return n.destroy();
    let i;
    n.params.backdrop && (i = e.$el.children(".custom-modal-backdrop"), i.length === 0 && (i = y('<div class="custom-modal-backdrop"></div>'), e.$el.append(i)));

    function o(l) {
      !n || n.destroyed || i && l.target === i[0] && n.close()
    }
    return n.on("customModalOpened", () => {
      n.params.closeByBackdropClick && n.params.backdrop && e.on("click", o)
    }), n.on("customModalClose", () => {
      n.params.closeByBackdropClick && n.params.backdrop && e.off("click", o)
    }), H(n, {
      app: e,
      $el: s,
      el: s[0],
      $backdropEl: i,
      backdropEl: i && i[0],
      type: "customModal"
    }), s[0].f7Modal = n, n
  }
}
var zr = Il,
  Ol = {
    name: "modal",
    static: {
      Modal: qe,
      CustomModal: zr
    },
    create() {
      const r = this;
      r.customModal = {
        create(e) {
          return new zr(r, e)
        }
      }
    },
    params: {
      modal: {
        queueDialogs: !0
      }
    }
  };
Wt.use([co]);
Ri.use([Hi, zi, Fi, Vi, Yi, lo, gr, vl, gl, bl, yl, El, Cl, xl, Tl, Sl, Ml, Ol]);
class Bl extends qe {
  constructor(e, a) {
    const t = H({
      title: e.params.dialog.title,
      text: void 0,
      content: "",
      buttons: [],
      verticalButtons: !1,
      onClick: void 0,
      cssClass: void 0,
      destroyOnClose: !1,
      on: {}
    }, a);
    typeof t.closeByBackdropClick == "undefined" && (t.closeByBackdropClick = e.params.dialog.closeByBackdropClick), typeof t.backdrop == "undefined" && (t.backdrop = e.params.dialog.backdrop);
    super(e, t);
    const n = this,
      s = ue(),
      i = ee(),
      {
        title: o,
        text: l,
        content: c,
        buttons: d,
        verticalButtons: p,
        cssClass: u,
        backdrop: g
      } = t;
    n.params = t;
    let h;
    if (n.params.el) h = y(n.params.el);
    else {
      const $ = ["dialog"];
      d.length === 0 && $.push("dialog-no-buttons"), d.length > 0 && $.push(`dialog-buttons-${d.length}`), p && $.push("dialog-buttons-vertical"), u && $.push(u);
      let w = "";
      d.length > 0 && (w = T("div", {
        class: "dialog-buttons"
      }, d.map(x => T("span", {
        class: `dialog-button${x.strong?" dialog-button-strong":""}${x.color?` color-${x.color}`:""}${x.cssClass?` ${x.cssClass}`:""}`
      }, x.text))));
      const C = T("div", {
        class: $.join(" ")
      }, T("div", {
        class: "dialog-inner"
      }, o && T("div", {
        class: "dialog-title"
      }, o), l && T("div", {
        class: "dialog-text"
      }, l), c), w);
      h = y(C)
    }
    if (h && h.length > 0 && h[0].f7Modal) return h[0].f7Modal;
    if (h.length === 0) return n.destroy();
    let f;
    g && (f = e.$el.children(".dialog-backdrop"), f.length === 0 && (f = y('<div class="dialog-backdrop"></div>'), e.$el.append(f)));

    function b($) {
      const C = y(this).index(),
        x = d[C];
      x.onClick && x.onClick(n, $), n.params.onClick && n.params.onClick(n, C), x.close !== !1 && n.close()
    }
    let m;

    function v($) {
      const w = $.keyCode;
      d.forEach((C, x) => {
        C.keyCodes && C.keyCodes.indexOf(w) >= 0 && (i.activeElement && i.activeElement.blur(), C.onClick && C.onClick(n, $), n.params.onClick && n.params.onClick(n, x), C.close !== !1 && n.close())
      })
    }
    d && d.length > 0 && (n.on("open", () => {
      h.find(".dialog-button").each(($, w) => {
        d[w].keyCodes && (m = !0), y($).on("click", b)
      }), m && !s.ios && !s.android && !s.cordova && !s.capacitor && y(i).on("keydown", v)
    }), n.on("close", () => {
      h.find(".dialog-button").each($ => {
        y($).off("click", b)
      }), m && !s.ios && !s.android && !s.cordova && !s.capacitor && y(i).off("keydown", v), m = !1
    })), H(n, {
      app: e,
      $el: h,
      el: h[0],
      $backdropEl: f,
      backdropEl: f && f[0],
      type: "dialog",
      setProgress($, w) {
        return e.progressbar.set(h.find(".progressbar"), $, w), n
      },
      setText($) {
        let w = h.find(".dialog-text");
        return w.length === 0 && (w = y('<div class="dialog-text"></div>'), typeof o != "undefined" ? w.insertAfter(h.find(".dialog-title")) : h.find(".dialog-inner").prepend(w)), w.html($), n.params.text = $, n
      },
      setTitle($) {
        let w = h.find(".dialog-title");
        return w.length === 0 && (w = y('<div class="dialog-title"></div>'), h.find(".dialog-inner").prepend(w)), w.html($), n.params.title = $, n
      }
    });

    function E($) {
      const w = $.target;
      y(w).closest(n.el).length === 0 && n.params.closeByBackdropClick && n.backdropEl && n.backdropEl === w && n.close()
    }
    return n.on("opened", () => {
      n.params.closeByBackdropClick && e.on("click", E)
    }), n.on("close", () => {
      n.params.closeByBackdropClick && e.off("click", E)
    }), h[0].f7Modal = n, n.params.destroyOnClose && n.once("closed", () => {
      setTimeout(() => {
        n.destroy()
      }, 0)
    }), n
  }
}
var et = Bl,
  Dp = {
    name: "dialog",
    params: {
      dialog: {
        title: void 0,
        buttonOk: "OK",
        buttonCancel: "Cancel",
        usernamePlaceholder: "Username",
        passwordPlaceholder: "Password",
        preloaderTitle: "Loading... ",
        progressTitle: "Loading... ",
        backdrop: !0,
        closeByBackdropClick: !1,
        destroyPredefinedDialogs: !0,
        keyboardActions: !0,
        autoFocus: !0
      }
    },
    static: {
      Dialog: et
    },
    create() {
      const r = this;

      function e() {
        return r.params.dialog.title || r.name
      }
      const a = r.params.dialog.destroyPredefinedDialogs,
        t = r.params.dialog.keyboardActions,
        s = r.params.dialog.autoFocus ? {
          on: {
            opened(o) {
              o.$el.find("input").eq(0).focus()
            }
          }
        } : {},
        i = r.theme === "ios";
      r.dialog = H(Ze({
        app: r,
        constructor: et,
        defaultSelector: ".dialog.modal-in"
      }), {
        alert() {
          for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
          let [d, p, u] = l;
          return l.length === 2 && typeof l[1] == "function" && ([d, u, p] = l), new et(r, {
            title: typeof p == "undefined" ? e() : p,
            text: d,
            buttons: [{
              text: r.params.dialog.buttonOk,
              strong: i,
              onClick: u,
              keyCodes: t ? [13, 27] : null
            }],
            destroyOnClose: a
          }).open()
        },
        prompt() {
          for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
          let [d, p, u, g, h] = l;
          return typeof l[1] == "function" && ([d, u, g, h, p] = l), h = typeof h == "undefined" || h === null ? "" : h, new et(r, Ee({
            title: typeof p == "undefined" ? e() : p,
            text: d,
            content: `<div class="dialog-input-field input"><input type="text" class="dialog-input" value="${h}"></div>`,
            buttons: [{
              text: r.params.dialog.buttonCancel,
              keyCodes: t ? [27] : null,
              color: null
            }, {
              text: r.params.dialog.buttonOk,
              strong: i,
              keyCodes: t ? [13] : null
            }],
            onClick(f, b) {
              const m = f.$el.find(".dialog-input").val();
              b === 0 && g && g(m), b === 1 && u && u(m)
            },
            destroyOnClose: a
          }, s)).open()
        },
        confirm() {
          for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
          let [d, p, u, g] = l;
          return typeof l[1] == "function" && ([d, u, g, p] = l), new et(r, {
            title: typeof p == "undefined" ? e() : p,
            text: d,
            buttons: [{
              text: r.params.dialog.buttonCancel,
              onClick: g,
              keyCodes: t ? [27] : null,
              color: null
            }, {
              text: r.params.dialog.buttonOk,
              strong: i,
              onClick: u,
              keyCodes: t ? [13] : null
            }],
            destroyOnClose: a
          }).open()
        },
        login() {
          for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
          let [d, p, u, g] = l;
          return typeof l[1] == "function" && ([d, u, g, p] = l), new et(r, Ee({
            title: typeof p == "undefined" ? e() : p,
            text: d,
            content: `
              <div class="dialog-input-field dialog-input-double input">
                <input type="text" name="dialog-username" placeholder="${r.params.dialog.usernamePlaceholder}" class="dialog-input">
              </div>
              <div class="dialog-input-field dialog-input-double input">
                <input type="password" name="dialog-password" placeholder="${r.params.dialog.passwordPlaceholder}" class="dialog-input">
              </div>`,
            buttons: [{
              text: r.params.dialog.buttonCancel,
              keyCodes: t ? [27] : null,
              color: null
            }, {
              text: r.params.dialog.buttonOk,
              strong: i,
              keyCodes: t ? [13] : null
            }],
            onClick(h, f) {
              const b = h.$el.find('[name="dialog-username"]').val(),
                m = h.$el.find('[name="dialog-password"]').val();
              f === 0 && g && g(b, m), f === 1 && u && u(b, m)
            },
            destroyOnClose: a
          }, s)).open()
        },
        password() {
          for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
          let [d, p, u, g] = l;
          return typeof l[1] == "function" && ([d, u, g, p] = l), new et(r, Ee({
            title: typeof p == "undefined" ? e() : p,
            text: d,
            content: `
              <div class="dialog-input-field input">
                <input type="password" name="dialog-password" placeholder="${r.params.dialog.passwordPlaceholder}" class="dialog-input">
              </div>`,
            buttons: [{
              text: r.params.dialog.buttonCancel,
              keyCodes: t ? [27] : null,
              color: null
            }, {
              text: r.params.dialog.buttonOk,
              strong: i,
              keyCodes: t ? [13] : null
            }],
            onClick(h, f) {
              const b = h.$el.find('[name="dialog-password"]').val();
              f === 0 && g && g(b), f === 1 && u && u(b)
            },
            destroyOnClose: a
          }, s)).open()
        },
        preloader(o, l) {
          const d = {
            iosPreloaderContent: lt,
            mdPreloaderContent: ot
          } [`${r.theme}PreloaderContent`] || "";
          return new et(r, {
            title: typeof o == "undefined" || o === null ? r.params.dialog.preloaderTitle : o,
            content: `<div class="preloader${l?` color-${l}`:""}">${d}</div>`,
            cssClass: "dialog-preloader",
            destroyOnClose: a
          }).open()
        },
        progress() {
          for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
          let [d, p, u] = l;
          l.length === 2 ? typeof l[0] == "number" ? [p, u, d] = l : typeof l[0] == "string" && typeof l[1] == "string" && ([d, u, p] = l) : l.length === 1 && typeof l[0] == "number" && ([p, d, u] = l);
          const g = typeof p == "undefined",
            h = new et(r, {
              title: typeof d == "undefined" ? r.params.dialog.progressTitle : d,
              cssClass: "dialog-progress",
              content: `
              <div class="progressbar${g?"-infinite":""}${u?` color-${u}`:""}">
                ${g?"":"<span></span>"}
              </div>
            `,
              destroyOnClose: a
            });
          return g || h.setProgress(p), h.open()
        }
      })
    }
  };
class Dl extends qe {
  constructor(e, a) {
    const t = H({
      on: {}
    }, e.params.popup, a);
    super(e, t);
    const n = this,
      s = G(),
      i = ee(),
      o = ve(),
      l = ue();
    n.params = t;
    let c;
    if (n.params.el ? c = y(n.params.el).eq(0) : c = y(n.params.content).filter(F => F.nodeType === 1).eq(0), c && c.length > 0 && c[0].f7Modal) return c[0].f7Modal;
    if (c.length === 0) return n.destroy();
    let d;
    n.params.backdrop && n.params.backdropEl ? d = y(n.params.backdropEl) : n.params.backdrop && (n.params.backdropUnique ? (d = y('<div class="popup-backdrop popup-backdrop-unique"></div>'), n.$containerEl.append(d)) : d = n.$containerEl.children(".popup-backdrop"), d.length === 0 && (d = y('<div class="popup-backdrop"></div>'), n.$containerEl.append(d))), H(n, {
      app: e,
      push: c.hasClass("popup-push") || n.params.push,
      $el: c,
      el: c[0],
      $backdropEl: d,
      backdropEl: d && d[0],
      type: "popup",
      $htmlEl: y("html")
    }), n.params.push && c.addClass("popup-push");

    function p(F) {
      const V = F.target,
        U = y(V);
      if (!(!l.desktop && l.cordova && (s.Keyboard && s.Keyboard.isVisible || s.cordova.plugins && s.cordova.plugins.Keyboard && s.cordova.plugins.Keyboard.isVisible)) && U.closest(n.el).length === 0 && n.params && n.params.closeByBackdropClick && n.params.backdrop && n.backdropEl && n.backdropEl === V) {
        let J = !0;
        n.$el.nextAll(".popup.modal-in").each(X => {
          const Y = X.f7Modal;
          !Y || Y.params.closeByBackdropClick && Y.params.backdrop && Y.backdropEl === n.backdropEl && (J = !1)
        }), J && n.close()
      }
    }

    function u(F) {
      F.keyCode === 27 && n.params.closeOnEscape && n.close()
    }
    let g, h;

    function f(F) {
      return (e.height - F * 2) / e.height
    }
    let b = !0,
      m = !1,
      v, E, $, w, C, x = !1,
      M, A, B, S, P, k;

    function I(F) {
      m || !b || !n.params.swipeToClose || n.params.swipeHandler && y(F.target).closest(n.params.swipeHandler).length === 0 || (m = !0, x = !1, v = {
        x: F.type === "touchstart" ? F.targetTouches[0].pageX : F.pageX,
        y: F.type === "touchstart" ? F.targetTouches[0].pageY : F.pageY
      }, w = Ae(), $ = void 0, !n.params.swipeHandler && F.type === "touchstart" && (M = y(F.target).closest(".page-content")[0]))
    }

    function R(F) {
      if (!m) return;
      if (E = {
          x: F.type === "touchmove" ? F.targetTouches[0].pageX : F.pageX,
          y: F.type === "touchmove" ? F.targetTouches[0].pageY : F.pageY
        }, typeof $ == "undefined" && ($ = !!($ || Math.abs(E.x - v.x) > Math.abs(E.y - v.y))), $) {
        m = !1, x = !1;
        return
      }
      C = v.y - E.y, h && g && C > 0 && (C = 0);
      const V = C < 0 ? "to-bottom" : "to-top";
      if (c.transition(0), typeof n.params.swipeToClose == "string" && V !== n.params.swipeToClose) {
        c.transform(""), c.transition("");
        return
      }
      if (x) n.emit("local::swipeMove popupSwipeMove", n), n.$el.trigger("popup:swipemove");
      else {
        if (h && g && (P = c[0].offsetHeight, k = c.prevAll(".popup.modal-in").eq(0), k.length === 0 && (k = e.$el.children(".view, .views"))), M && (A = M.scrollTop, S = M.scrollHeight, B = M.offsetHeight, S !== B && !(V === "to-bottom" && A === 0) && !(V === "to-top" && A === S - B))) {
          c.transform(""), c.transition(""), m = !1, x = !1;
          return
        }
        x = !0, n.emit("local::swipeStart popupSwipeStart", n), n.$el.trigger("popup:swipestart")
      }
      if (F.preventDefault(), h && g) {
        const U = 1 - Math.abs(C / P),
          Z = 1 - (1 - f(g)) * U;
        k.hasClass("popup") ? k.hasClass("popup-push") ? k.transition(0).forEach(J => {
          J.style.setProperty("transform", `translate3d(0, calc(-1 * ${U} * (var(--f7-popup-push-offset) + 10px)) , 0px) scale(${Z})`, "important")
        }) : k.transition(0).forEach(J => {
          J.style.setProperty("transform", `translate3d(0, 0px , 0px) scale(${Z})`, "important")
        }) : k.transition(0).forEach(J => {
          J.style.setProperty("transform", `translate3d(0,0,0) scale(${Z})`, "important")
        })
      }
      c.transition(0).transform(`translate3d(0,${-C}px,0)`)
    }

    function D() {
      if (m = !1, !x) return;
      n.emit("local::swipeEnd popupSwipeEnd", n), n.$el.trigger("popup:swipeend"), x = !1, b = !1, c.transition(""), h && g && k.transition("").transform("");
      const F = C <= 0 ? "to-bottom" : "to-top";
      if (typeof n.params.swipeToClose == "string" && F !== n.params.swipeToClose) {
        c.transform(""), b = !0;
        return
      }
      const V = Math.abs(C),
        U = new Date().getTime() - w;
      if (U < 300 && V > 20 || U >= 300 && V > 100) {
        ke(() => {
          F === "to-bottom" ? c.addClass("swipe-close-to-bottom") : c.addClass("swipe-close-to-top"), c.transform(""), n.emit("local::swipeclose popupSwipeClose", n), n.$el.trigger("popup:swipeclose"), n.close(), b = !0
        });
        return
      }
      b = !0, c.transform("")
    }
    const z = o.passiveListener ? {
      passive: !0
    } : !1;
    n.params.swipeToClose && (c.on(e.touchEvents.start, I, z), e.on("touchmove", R), e.on("touchend:passive", D), n.once("popupDestroy", () => {
      c.off(e.touchEvents.start, I, z), e.off("touchmove", R), e.off("touchend:passive", D)
    }));
    let O;
    const L = () => {
        const F = h;
        n.push && (h = n.push && (e.width < 630 || e.height < 630 || c.hasClass("popup-tablet-fullscreen"))), h && !F ? N() : h && F ? n.$htmlEl[0].style.setProperty("--f7-popup-push-scale", f(g)) : !h && F && (n.$htmlEl.removeClass("with-modal-popup-push"), n.$htmlEl[0].style.removeProperty("--f7-popup-push-scale"))
      },
      N = () => {
        e.off("resize", L), n.push && (h = n.push && (e.width < 630 || e.height < 630 || c.hasClass("popup-tablet-fullscreen"))), h && (g = parseInt(c.css("--f7-popup-push-offset"), 10), Number.isNaN(g) && (g = 0), g || (g = e.theme === "ios" ? 44 : 48), n.$htmlEl[0].style.setProperty("--f7-popup-push-offset", `${g}px`), c.addClass("popup-push"), n.$htmlEl.addClass("with-modal-popup-push"), n.$htmlEl[0].style.setProperty("--f7-popup-push-scale", f(g))), e.on("resize", L)
      };
    return n.on("open", () => {
      O = !1, n.params.closeOnEscape && y(i).on("keydown", u), c.prevAll(".popup.modal-in").addClass("popup-behind"), N()
    }), n.on("opened", () => {
      c.removeClass("swipe-close-to-bottom swipe-close-to-top"), n.params.closeByBackdropClick && e.on("click", p)
    }), n.on("close", () => {
      O = n.$el.prevAll(".popup-push.modal-in").length > 0, n.params.closeOnEscape && y(i).off("keydown", u), n.params.closeByBackdropClick && e.off("click", p), c.prevAll(".popup.modal-in").eq(0).removeClass("popup-behind"), h && g && !O && (n.$htmlEl.removeClass("with-modal-popup-push"), n.$htmlEl.addClass("with-modal-popup-push-closing")), e.off("resize", L)
    }), n.on("closed", () => {
      c.removeClass("popup-behind"), h && g && !O && (n.$htmlEl.removeClass("with-modal-popup-push-closing"), n.$htmlEl[0].style.removeProperty("--f7-popup-push-scale"), n.$htmlEl[0].style.removeProperty("--f7-popup-push-offset"))
    }), c[0].f7Modal = n, n
  }
}
var Fr = Dl,
  Lp = {
    name: "popup",
    params: {
      popup: {
        backdrop: !0,
        backdropEl: void 0,
        backdropUnique: !1,
        closeByBackdropClick: !0,
        closeOnEscape: !1,
        swipeToClose: !1,
        swipeHandler: null,
        push: !1,
        containerEl: null
      }
    },
    static: {
      Popup: Fr
    },
    create() {
      const r = this;
      r.popup = Ze({
        app: r,
        constructor: Fr,
        defaultSelector: ".popup.modal-in",
        parentSelector: ".popup"
      })
    },
    clicks: {
      ".popup-open": function (e, a) {
        a === void 0 && (a = {}), this.popup.open(a.popup, a.animate, e)
      },
      ".popup-close": function (e, a) {
        a === void 0 && (a = {}), this.popup.close(a.popup, a.animate, e)
      }
    }
  };
class Ll extends qe {
  constructor(e, a) {
    const t = H({
      on: {}
    }, a);
    super(e, t);
    const n = this;
    n.params = t;
    let s;
    return n.params.el ? s = y(n.params.el).eq(0) : s = y(n.params.content).filter(i => i.nodeType === 1).eq(0), s && s.length > 0 && s[0].f7Modal ? s[0].f7Modal : s.length === 0 ? n.destroy() : (H(n, {
      app: e,
      $el: s,
      el: s[0],
      type: "loginScreen"
    }), s[0].f7Modal = n, n)
  }
}
var Vr = Ll,
  Rp = {
    name: "loginScreen",
    static: {
      LoginScreen: Vr
    },
    create() {
      const r = this;
      r.loginScreen = Ze({
        app: r,
        constructor: Vr,
        defaultSelector: ".login-screen.modal-in"
      })
    },
    clicks: {
      ".login-screen-open": function (e, a) {
        a === void 0 && (a = {}), this.loginScreen.open(a.loginScreen, a.animate, e)
      },
      ".login-screen-close": function (e, a) {
        a === void 0 && (a = {}), this.loginScreen.close(a.loginScreen, a.animate, e)
      }
    }
  };
class Rl extends qe {
  constructor(e, a) {
    const t = H({
      on: {}
    }, e.params.popover, a);
    super(e, t);
    const n = this,
      s = ue(),
      i = G(),
      o = ee();
    n.params = t;
    let l;
    if (n.params.el ? l = y(n.params.el).eq(0) : l = y(n.params.content).filter(E => E.nodeType === 1).eq(0), l && l.length > 0 && l[0].f7Modal) return l[0].f7Modal;
    const c = y(n.params.targetEl).eq(0);
    if (l.length === 0) return n.destroy();
    let d;
    const p = n.params.backdrop && e.$el.find(".popover.modal-in").filter(E => E !== l[0]).length > 0;
    n.params.backdrop && n.params.backdropEl ? d = y(n.params.backdropEl) : n.params.backdrop && (n.params.backdropUnique || p ? (d = y('<div class="popover-backdrop popover-backdrop-unique"></div>'), d[0].f7PopoverRef = n, n.$containerEl.append(d)) : d = n.$containerEl.children(".popover-backdrop"), d.length === 0 && (d = y('<div class="popover-backdrop"></div>'), n.$containerEl.append(d)));
    let u;
    l.find(".popover-arrow").length === 0 && n.params.arrow ? (u = y('<div class="popover-arrow"></div>'), l.prepend(u)) : u = l.find(".popover-arrow");
    const g = n.open;
    H(n, {
      app: e,
      $el: l,
      el: l[0],
      $targetEl: c,
      targetEl: c[0],
      $arrowEl: u,
      arrowEl: u[0],
      $backdropEl: d,
      backdropEl: d && d[0],
      type: "popover",
      forceBackdropUnique: p,
      open() {
        for (var E = arguments.length, $ = new Array(E), w = 0; w < E; w++) $[w] = arguments[w];
        let [C, x] = $;
        return typeof $[0] == "boolean" && ([x, C] = $), C && (n.$targetEl = y(C), n.targetEl = n.$targetEl[0]), g.call(n, x)
      }
    });

    function h() {
      n.resize()
    }
    n.on("popoverOpen", () => {
      n.resize(), e.on("resize", h), y(i).on("keyboardDidShow keyboardDidHide", h), n.on("popoverClose popoverBeforeDestroy", () => {
        e.off("resize", h), y(i).off("keyboardDidShow keyboardDidHide", h)
      })
    });
    let f = null;

    function b(E) {
      f = E.target
    }

    function m(E) {
      const $ = E.target,
        w = y($);
      if (!(!s.desktop && s.cordova && (i.Keyboard && i.Keyboard.isVisible || i.cordova.plugins && i.cordova.plugins.Keyboard && i.cordova.plugins.Keyboard.isVisible)) && w.closest(n.el).length === 0) {
        if (n.params.closeByBackdropClick && n.params.backdrop && n.backdropEl && n.backdropEl === $ && f === $) n.close();
        else if (n.params.closeByOutsideClick && f === $) {
          const x = w.hasClass("popover-backdrop-unique") && $.f7PopoverRef !== n || w.hasClass("popover-backdrop") && $ !== n.backdropEl,
            M = $.closest(".popover") && $.closest(".popover") !== n.$el[0];
          !x && !M && n.close()
        }
      }
    }

    function v(E) {
      E.keyCode === 27 && n.params.closeOnEscape && n.close()
    }
    return n.params.closeOnEscape && (n.on("popoverOpen", () => {
      y(o).on("keydown", v)
    }), n.on("popoverClose", () => {
      y(o).off("keydown", v)
    })), n.on("popoverOpened", () => {
      (n.params.closeByOutsideClick || n.params.closeByBackdropClick) && (e.on("touchstart", b), e.on("click", m))
    }), n.on("popoverClose", () => {
      (n.params.closeByOutsideClick || n.params.closeByBackdropClick) && (e.off("touchstart", b), e.off("click", m))
    }), l[0].f7Modal = n, n
  }
  resize() {
    const e = this,
      {
        app: a,
        $el: t,
        $targetEl: n,
        $arrowEl: s
      } = e,
      {
        targetX: i,
        targetY: o,
        verticalPosition: l
      } = e.params;
    t.css({
      left: "",
      top: ""
    });
    const [c, d] = [t.width(), t.height()];
    let p = 0,
      u, g;
    const h = s.length > 0,
      f = a.theme === "ios" ? 13 : 24;
    h && (s.removeClass("on-left on-right on-top on-bottom").css({
      left: "",
      top: ""
    }), p = s.width() / 2), t.removeClass("popover-on-left popover-on-right popover-on-top popover-on-bottom popover-on-middle").css({
      left: "",
      top: ""
    });
    let b, m, v, E, $ = parseInt(y("html").css("--f7-safe-area-top"), 10),
      w = parseInt(y("html").css("--f7-safe-area-left"), 10),
      C = parseInt(y("html").css("--f7-safe-area-right"), 10);
    if (Number.isNaN($) && ($ = 0), Number.isNaN(w) && (w = 0), Number.isNaN(C) && (C = 0), n && n.length > 0) {
      b = n.outerWidth(), m = n.outerHeight();
      const k = n.offset();
      v = k.left - a.left, E = k.top - a.top;
      const I = n.parents(".page");
      I.length > 0 && (E -= I[0].scrollTop)
    } else typeof i != "undefined" && o !== "undefined" && (v = i, E = o, b = e.params.targetWidth || 0, m = e.params.targetHeight || 0);
    let [x, M, A] = [0, 0, 0];
    const B = l === "auto" ? !1 : l;
    let S = B || "top";
    B === "top" || !B && d + p < E - $ ? M = E - d - p : B === "bottom" || !B && d + p < a.height - E - m ? (S = "bottom", M = E + m + p) : (S = "middle", M = m / 2 + E - d / 2, A = M, M = Math.max(5, Math.min(M, a.height - d - 5)), A -= M), S === "top" || S === "bottom" ? (x = b / 2 + v - c / 2, A = x, x = Math.max(5, Math.min(x, a.width - c - 5)), w && (x = Math.max(x, w)), C && x + c > a.width - 5 - C && (x = a.width - 5 - C - c), A -= x, h && (S === "top" && s.addClass("on-bottom"), S === "bottom" && s.addClass("on-top"), u = c / 2 - p + A, u = Math.max(Math.min(u, c - p * 2 - f), f), s.css({
      left: `${u}px`
    }))) : S === "middle" && (x = v - c - p, h && s.addClass("on-right"), (x < 5 || x + c + C > a.width || x < w) && (x < 5 && (x = v + b + p), x + c + C > a.width && (x = a.width - c - 5 - C), x < w && (x = w), h && s.removeClass("on-right").addClass("on-left")), h && (g = d / 2 - p + A, g = Math.max(Math.min(g, d - p * 2 - f), f), s.css({
      top: `${g}px`
    })));
    let P;
    v < a.width / 2 ? P = "right" : P = "left", t.addClass(`popover-on-${S} popover-on-${P}`), t.css({
      top: `${M}px`,
      left: `${x}px`
    })
  }
}
var Ia = Rl,
  Hp = {
    name: "popover",
    params: {
      popover: {
        verticalPosition: "auto",
        arrow: !0,
        backdrop: !0,
        backdropEl: void 0,
        backdropUnique: !1,
        closeByBackdropClick: !0,
        closeByOutsideClick: !0,
        closeOnEscape: !1,
        containerEl: null
      }
    },
    static: {
      Popover: Ia
    },
    create() {
      const r = this;
      r.popover = H(Ze({
        app: r,
        constructor: Ia,
        defaultSelector: ".popover.modal-in"
      }), {
        open(e, a, t) {
          let n = y(e);
          if (n.length > 1) {
            const o = y(a).parents(".page");
            o.length && n.each(l => {
              const c = y(l);
              c.parents(o)[0] === o[0] && (n = c)
            })
          }
          n.length > 1 && (n = n.eq(n.length - 1));
          let s = n[0].f7Modal;
          const i = n.dataset();
          return s || (s = new Ia(r, Object.assign({
            el: n,
            targetEl: a
          }, i))), s.open(a, t)
        }
      })
    },
    clicks: {
      ".popover-open": function (e, a) {
        a === void 0 && (a = {}), this.popover.open(a.popover, e, a.animate)
      },
      ".popover-close": function (e, a) {
        a === void 0 && (a = {}), this.popover.close(a.popover, a.animate, e)
      }
    }
  };
class Hl extends qe {
  constructor(e, a) {
    const t = H({
      on: {}
    }, e.params.actions, a);
    super(e, t);
    const n = this,
      s = ue(),
      i = G(),
      o = ee();
    n.params = t;
    let l;
    n.params.buttons && (l = n.params.buttons, Array.isArray(l[0]) || (l = [l])), n.groups = l;
    let c;
    if (n.params.el ? c = y(n.params.el).eq(0) : n.params.content ? c = y(n.params.content).filter(m => m.nodeType === 1).eq(0) : n.params.buttons && (n.params.convertToPopover && (n.popoverHtml = n.renderPopover()), n.actionsHtml = n.render()), c && c.length > 0 && c[0].f7Modal) return c[0].f7Modal;
    if (c && c.length === 0 && !(n.actionsHtml || n.popoverHtml)) return n.destroy();
    let d;
    n.params.backdrop && n.params.backdropEl ? d = y(n.params.backdropEl) : n.params.backdrop && (n.params.backdropUnique ? (d = y('<div class="popup-backdrop popup-backdrop-unique"></div>'), n.$containerEl.append(d)) : d = n.$containerEl.children(".actions-backdrop"), d.length === 0 && (d = y('<div class="actions-backdrop"></div>'), n.$containerEl.append(d)));
    const p = n.open,
      u = n.close;
    let g;

    function h(m) {
      const v = y(this);
      let E, $;
      if (v.hasClass("list-button") || v.hasClass("item-link") ? (E = v.parents("li").index(), $ = v.parents(".list").index()) : (E = v.index(), $ = v.parents(".actions-group").index()), typeof l != "undefined") {
        const w = l[$][E];
        w.onClick && w.onClick(n, m), n.params.onClick && n.params.onClick(n, m), w.close !== !1 && n.close()
      }
    }
    n.open = function (v) {
      let E = !1;
      const {
        targetEl: $,
        targetX: w,
        targetY: C,
        targetWidth: x,
        targetHeight: M
      } = n.params;
      return n.params.convertToPopover && ($ || w !== void 0 && C !== void 0) && (n.params.forceToPopover || s.ios && s.ipad || e.width >= 768 || s.desktop) && (E = !0), E && n.popoverHtml ? (g = e.popover.create({
        containerEl: n.params.containerEl,
        content: n.popoverHtml,
        backdrop: n.params.backdrop,
        targetEl: $,
        targetX: w,
        targetY: C,
        targetWidth: x,
        targetHeight: M,
        on: {
          open() {
            n.$el || (n.$el = g.$el), n.$el.trigger(`modal:open ${n.type.toLowerCase()}:open`), n.emit(`local::open modalOpen ${n.type}Open`, n)
          },
          opened() {
            n.$el || (n.$el = g.$el), n.$el.trigger(`modal:opened ${n.type.toLowerCase()}:opened`), n.emit(`local::opened modalOpened ${n.type}Opened`, n)
          },
          close() {
            n.$el || (n.$el = g.$el), n.$el.trigger(`modal:close ${n.type.toLowerCase()}:close`), n.emit(`local::close modalClose ${n.type}Close`, n)
          },
          closed() {
            n.$el || (n.$el = g.$el), n.$el.trigger(`modal:closed ${n.type.toLowerCase()}:closed`), n.emit(`local::closed modalClosed ${n.type}Closed`, n)
          }
        }
      }), g.open(v), g.once("popoverOpened", () => {
        g.$el.find(".list-button, .item-link").each(A => {
          y(A).on("click", h)
        })
      }), g.once("popoverClosed", () => {
        g.$el.find(".list-button, .item-link").each(A => {
          y(A).off("click", h)
        }), ke(() => {
          g.destroy(), g = void 0
        })
      })) : (n.$el = n.actionsHtml ? y(n.actionsHtml) : n.$el, n.$el[0].f7Modal = n, n.groups && (n.$el.find(".actions-button").each(A => {
        y(A).on("click", h)
      }), n.once("actionsClosed", () => {
        n.$el.find(".actions-button").each(A => {
          y(A).off("click", h)
        })
      })), n.el = n.$el[0], p.call(n, v)), n
    }, n.close = function (v) {
      return g ? g.close(v) : u.call(n, v), n
    }, H(n, {
      app: e,
      $el: c,
      el: c ? c[0] : void 0,
      $backdropEl: d,
      backdropEl: d && d[0],
      type: "actions"
    });

    function f(m) {
      const v = m.target,
        E = y(v);
      !s.desktop && s.cordova && (i.Keyboard && i.Keyboard.isVisible || i.cordova.plugins && i.cordova.plugins.Keyboard && i.cordova.plugins.Keyboard.isVisible) || E.closest(n.el).length === 0 && (n.params.closeByBackdropClick && n.params.backdrop && n.backdropEl && n.backdropEl === v || n.params.closeByOutsideClick) && n.close()
    }

    function b(m) {
      m.keyCode === 27 && n.params.closeOnEscape && n.close()
    }
    return n.params.closeOnEscape && (n.on("open", () => {
      y(o).on("keydown", b)
    }), n.on("close", () => {
      y(o).off("keydown", b)
    })), n.on("opened", () => {
      (n.params.closeByBackdropClick || n.params.closeByOutsideClick) && e.on("click", f)
    }), n.on("close", () => {
      (n.params.closeByBackdropClick || n.params.closeByOutsideClick) && e.off("click", f)
    }), c && (c[0].f7Modal = n), n
  }
  render() {
    const e = this;
    if (e.params.render) return e.params.render.call(e, e);
    const {
      groups: a
    } = e, t = e.params.cssClass;
    return T("div", {
      class: `actions-modal${e.params.grid?" actions-grid":""} ${t||""}`
    }, a.map(n => T("div", {
      class: "actions-group"
    }, n.map(s => {
      const i = [`actions-${s.label?"label":"button"}`],
        {
          color: o,
          bg: l,
          strong: c,
          disabled: d,
          label: p,
          text: u,
          icon: g
        } = s;
      return o && i.push(`color-${o}`), l && i.push(`bg-color-${l}`), c && i.push("actions-button-strong"), d && i.push("disabled"), p ? T("div", {
        class: i.join(" ")
      }, u) : T("div", {
        class: i.join(" ")
      }, g && T("div", {
        class: "actions-button-media"
      }, g), T("div", {
        class: "actions-button-text"
      }, u))
    }))))
  }
  renderPopover() {
    const e = this;
    if (e.params.renderPopover) return e.params.renderPopover.call(e, e);
    const {
      groups: a
    } = e, t = e.params.cssClass;
    return T("div", {
      class: `popover popover-from-actions ${t||""}`
    }, T("div", {
      class: "popover-inner"
    }, a.map(n => T("div", {
      class: "list"
    }, T("ul", null, n.map(s => {
      const i = [],
        {
          color: o,
          bg: l,
          strong: c,
          disabled: d,
          label: p,
          text: u,
          icon: g
        } = s;
      return o && i.push(`color-${o}`), l && i.push(`bg-color-${l}`), c && i.push("popover-from-actions-strong"), d && i.push("disabled"), p ? (i.push("popover-from-actions-label"), `<li class="${i.join(" ")}">${u}</li>`) : g ? (i.push("item-link item-content"), T("li", null, T("a", {
        class: i.join(" ")
      }, T("div", {
        class: "item-media"
      }, g), T("div", {
        class: "item-inner"
      }, T("div", {
        class: "item-title"
      }, u))))) : (i.push("list-button"), T("li", null, T("a", {
        class: i.join(" ")
      }, u)))
    }))))))
  }
}
var Nr = Hl,
  zp = {
    name: "actions",
    params: {
      actions: {
        convertToPopover: !0,
        forceToPopover: !1,
        backdrop: !0,
        backdropEl: void 0,
        backdropUnique: !1,
        cssClass: null,
        closeByBackdropClick: !0,
        closeOnEscape: !1,
        render: null,
        renderPopover: null,
        containerEl: null
      }
    },
    static: {
      Actions: Nr
    },
    create() {
      const r = this;
      r.actions = Ze({
        app: r,
        constructor: Nr,
        defaultSelector: ".actions-modal.modal-in"
      })
    },
    clicks: {
      ".actions-open": function (e, a) {
        a === void 0 && (a = {}), this.actions.open(a.actions, a.animate, e)
      },
      ".actions-close": function (e, a) {
        a === void 0 && (a = {}), this.actions.close(a.actions, a.animate, e)
      }
    }
  };
class zl extends qe {
  constructor(e, a) {
    const t = H({
      on: {}
    }, e.params.sheet, a);
    super(e, t);
    const n = this,
      s = G(),
      i = ee(),
      o = ve(),
      l = ue();
    n.params = t, typeof n.params.backdrop == "undefined" && (n.params.backdrop = e.theme !== "ios");
    let c;
    if (n.params.el ? c = y(n.params.el).eq(0) : c = y(n.params.content).filter(Y => Y.nodeType === 1).eq(0), c && c.length > 0 && c[0].f7Modal) return c[0].f7Modal;
    if (c.length === 0) return n.destroy();
    let d;
    n.params.backdrop && n.params.backdropEl ? d = y(n.params.backdropEl) : n.params.backdrop && (n.params.backdropUnique ? (d = y('<div class="sheet-backdrop sheet-backdrop-unique"></div>'), n.$containerEl.append(d)) : d = n.$containerEl.children(".sheet-backdrop"), d.length === 0 && (d = y('<div class="sheet-backdrop"></div>'), n.$containerEl.append(d))), H(n, {
      app: e,
      push: c.hasClass("sheet-modal-push") || n.params.push,
      $el: c,
      el: c[0],
      $backdropEl: d,
      backdropEl: d && d[0],
      type: "sheet",
      $htmlEl: y("html")
    }), n.params.push && c.addClass("sheet-modal-push");
    let p;

    function u() {
      const Y = y(n.params.scrollToEl).eq(0);
      if (Y.length === 0 || (p = Y.parents(".page-content"), p.length === 0)) return;
      const W = parseInt(p.css("padding-top"), 10),
        K = parseInt(p.css("padding-bottom"), 10),
        j = p[0].offsetHeight - W - c.height(),
        _ = p[0].scrollHeight - W - c.height(),
        Q = p.scrollTop();
      let se;
      const me = Y.offset().top - W + Y[0].offsetHeight;
      if (me > j) {
        const te = Q + me - j;
        te + j > _ && (se = te + j - _ + K, j === _ && (se = c.height()), p.css({
          "padding-bottom": `${se}px`
        })), p.scrollTop(te, 300)
      }
    }

    function g() {
      p && p.length > 0 && p.css({
        "padding-bottom": ""
      })
    }

    function h(Y) {
      const W = Y.target,
        K = y(W);
      !l.desktop && l.cordova && (s.Keyboard && s.Keyboard.isVisible || s.cordova.plugins && s.cordova.plugins.Keyboard && s.cordova.plugins.Keyboard.isVisible) || K.closest(n.el).length === 0 && (n.params.closeByBackdropClick && n.params.backdrop && n.backdropEl && n.backdropEl === W || n.params.closeByOutsideClick) && n.close()
    }

    function f(Y) {
      Y.keyCode === 27 && n.params.closeOnEscape && n.close()
    }
    let b;

    function m(Y) {
      return (e.height - Y * 2) / e.height
    }
    let v = !1,
      E, $, w, C, x, M = !1,
      A, B, S, P, k, I, R, D, z, O, L, N, F;

    function V(Y) {
      v || !(n.params.swipeToClose || n.params.swipeToStep) || n.params.swipeHandler && y(Y.target).closest(n.params.swipeHandler).length === 0 || (v = !0, M = !1, E = {
        x: Y.type === "touchstart" ? Y.targetTouches[0].pageX : Y.pageX,
        y: Y.type === "touchstart" ? Y.targetTouches[0].pageY : Y.pageY
      }, C = Ae(), w = void 0, A = c.hasClass("sheet-modal-top"), !n.params.swipeHandler && Y.type === "touchstart" && (O = y(Y.target).closest(".page-content")[0]))
    }

    function U(Y) {
      if (!v) return;
      if ($ = {
          x: Y.type === "touchmove" ? Y.targetTouches[0].pageX : Y.pageX,
          y: Y.type === "touchmove" ? Y.targetTouches[0].pageY : Y.pageY
        }, typeof w == "undefined" && (w = !!(w || Math.abs($.x - E.x) > Math.abs($.y - E.y))), w) {
        v = !1, M = !1;
        return
      }
      x = E.y - $.y;
      const W = x < 0 ? "to-bottom" : "to-top";
      if (!M) {
        if (O && !c.hasClass("modal-in-swipe-step") && (L = O.scrollTop, N = O.scrollHeight, F = O.offsetHeight, N !== F && !(W === "to-bottom" && L === 0) && !(W === "to-top" && L === N - F))) {
          c.transform(""), v = !1, M = !1;
          return
        }
        n.push && b && (D = e.$el.children(".view, .views")), k = c[0].offsetHeight, S = Ft(c[0], "y"), A ? (I = n.params.swipeToClose ? -k : -B, R = 0) : (I = 0, R = n.params.swipeToClose ? k : B), M = !0
      }
      if (P = S - x, P = Math.min(Math.max(P, I), R), Y.preventDefault(), n.push && b) {
        let K = (P - S) / k;
        n.params.swipeToStep && (A ? K = P / B : K = 1 - (B - P) / B), K = Math.abs(K), K = Math.min(Math.max(K, 0), 1);
        const j = 1 - K,
          _ = 1 - (1 - m(b)) * j;
        D.transition(0).forEach(Q => {
          Q.style.setProperty("transform", `translate3d(0,0,0) scale(${_})`, "important")
        }), n.params.swipeToStep && D.css("border-radius", `${z*j}px`)
      }
      if (c.transition(0).transform(`translate3d(0,${P}px,0)`), n.params.swipeToStep) {
        let K;
        A ? K = 1 - P / B : K = (B - P) / B, K = Math.min(Math.max(K, 0), 1), c.trigger("sheet:stepprogress", K), n.emit("local::stepProgress sheetStepProgress", n, K)
      }
    }

    function Z() {
      if (v = !1, !M) return;
      M = !1, c.transform("").transition(""), n.push && b && (D.transition("").transform(""), D.css("border-radius", ""));
      const Y = x < 0 ? "to-bottom" : "to-top",
        W = Math.abs(x);
      if (W === 0 || P === S) return;
      const K = new Date().getTime() - C;
      if (!n.params.swipeToStep) {
        if (Y !== (A ? "to-top" : "to-bottom")) return;
        (K < 300 && W > 20 || K >= 300 && W > k / 2) && n.close();
        return
      }
      const j = A ? "to-bottom" : "to-top",
        _ = A ? "to-top" : "to-bottom",
        Q = Math.abs(P),
        se = Math.abs(B);
      if (K < 300 && W > 10) {
        Y === j && Q < se && (c.removeClass("modal-in-swipe-step"), c.trigger("sheet:stepprogress", 1), n.emit("local::stepProgress sheetStepProgress", n, 1), n.emit("local::_swipeStep", !1), c.trigger("sheet:stepopen"), n.emit("local::stepOpen sheetStepOpen", n), n.push && b && (n.$htmlEl[0].style.setProperty("--f7-sheet-push-scale", m(b)), D.css("border-radius", ""))), Y === _ && Q > se && (n.params.swipeToClose ? n.close() : (c.addClass("modal-in-swipe-step"), c.trigger("sheet:stepprogress", 0), n.emit("local::stepProgress sheetStepProgress", n, 0), n.emit("local::_swipeStep", !0), c.trigger("sheet:stepclose"), n.emit("local::stepClose sheetStepClose", n), n.push && b && (n.$htmlEl[0].style.removeProperty("--f7-sheet-push-scale"), D.css("border-radius", "0px")))), Y === _ && Q <= se && (c.addClass("modal-in-swipe-step"), c.trigger("sheet:stepprogress", 0), n.emit("local::stepProgress sheetStepProgress", n, 0), n.emit("local::_swipeStep", !0), c.trigger("sheet:stepclose"), n.emit("local::stepClose sheetStepClose", n), n.push && b && (n.$htmlEl[0].style.removeProperty("--f7-sheet-push-scale"), D.css("border-radius", "0px")));
        return
      }
      if (K >= 300) {
        const me = !c.hasClass("modal-in-swipe-step");
        me ? me && (Q > se + (k - se) / 2 ? n.params.swipeToClose && n.close() : Q > se / 2 && (c.addClass("modal-in-swipe-step"), c.trigger("sheet:stepprogress", 0), n.emit("local::stepProgress sheetStepProgress", n, 0), n.emit("local::_swipeStep", !0), c.trigger("sheet:stepclose"), n.emit("local::stepClose sheetStepClose", n), n.push && b && (n.$htmlEl[0].style.removeProperty("--f7-sheet-push-scale"), D.css("border-radius", "0px")))) : Q < se / 2 ? (c.removeClass("modal-in-swipe-step"), c.trigger("sheet:stepprogress", 1), n.emit("local::stepProgress sheetStepProgress", n, 1), n.emit("local::_swipeStep", !1), c.trigger("sheet:stepopen"), n.emit("local::stepOpen sheetStepOpen", n), n.push && b && (n.$htmlEl[0].style.setProperty("--f7-sheet-push-scale", m(b)), D.css("border-radius", ""))) : Q - se > (k - se) / 2 && n.params.swipeToClose && n.close()
      }
    }
    n.setSwipeStep = function (W) {
      W === void 0 && (W = !0);
      const K = c.find(".sheet-modal-swipe-step").eq(0);
      !K.length || (c.hasClass("sheet-modal-top") ? B = -(K.offset().top - c.offset().top + K[0].offsetHeight) : B = c[0].offsetHeight - (K.offset().top - c.offset().top + K[0].offsetHeight), c[0].style.setProperty("--f7-sheet-swipe-step", `${B}px`), W || (c.addClass("modal-in-swipe-step"), n.emit("local::_swipeStep", !0)))
    };

    function J() {
      n.setSwipeStep(!0)
    }
    const X = o.passiveListener ? {
      passive: !0
    } : !1;
    return (n.params.swipeToClose || n.params.swipeToStep) && (c.on(e.touchEvents.start, V, X), e.on("touchmove", U), e.on("touchend:passive", Z), n.once("sheetDestroy", () => {
      c.off(e.touchEvents.start, V, X), e.off("touchmove", U), e.off("touchend:passive", Z)
    })), n.on("open", () => {
      n.params.closeOnEscape && y(i).on("keydown", f), c.prevAll(".popup.modal-in").addClass("popup-behind"), n.params.swipeToStep && (n.setSwipeStep(!1), e.on("resize", J)), n.params.scrollToEl && u(), n.push && (b = parseInt(c.css("--f7-sheet-push-offset"), 10), Number.isNaN(b) && (b = 0), b || (b = e.theme === "ios" ? 44 : 48), n.$htmlEl[0].style.setProperty("--f7-sheet-push-offset", `${b}px`), c.addClass("sheet-modal-push"), n.$htmlEl.addClass("with-modal-sheet-push"), n.params.swipeToStep ? (D = e.$el.children(".view, .views"), z = parseFloat(c.css(`border-${A?"bottom":"top"}-left-radius`)), D.css("border-radius", "0px")) : n.$htmlEl[0].style.setProperty("--f7-sheet-push-scale", m(b)))
    }), n.on("opened", () => {
      (n.params.closeByOutsideClick || n.params.closeByBackdropClick) && e.on("click", h)
    }), n.on("close", () => {
      n.params.swipeToStep && (c.removeClass("modal-in-swipe-step"), n.emit("local::_swipeStep", !1), e.off("resize", J)), n.params.closeOnEscape && y(i).off("keydown", f), n.params.scrollToEl && g(), (n.params.closeByOutsideClick || n.params.closeByBackdropClick) && e.off("click", h), c.prevAll(".popup.modal-in").eq(0).removeClass("popup-behind"), n.push && b && (n.$htmlEl.removeClass("with-modal-sheet-push"), n.$htmlEl.addClass("with-modal-sheet-push-closing"))
    }), n.on("closed", () => {
      n.push && b && (n.$htmlEl.removeClass("with-modal-sheet-push-closing"), n.$htmlEl[0].style.removeProperty("--f7-sheet-push-scale"), n.$htmlEl[0].style.removeProperty("--f7-sheet-push-offset"))
    }), n.stepOpen = function () {
      c.removeClass("modal-in-swipe-step"), n.emit("local::_swipeStep", !1), n.push && (b || (b = parseInt(c.css("--f7-sheet-push-offset"), 10), Number.isNaN(b) && (b = 0)), b && n.$htmlEl[0].style.setProperty("--f7-sheet-push-scale", m(b)))
    }, n.stepClose = function () {
      c.addClass("modal-in-swipe-step"), n.emit("local::_swipeStep", !0), n.push && n.$htmlEl[0].style.removeProperty("--f7-sheet-push-scale")
    }, n.stepToggle = function () {
      c.toggleClass("modal-in-swipe-step"), n.emit("local::_swipeStep", c.hasClass("modal-in-swipe-step"))
    }, c[0].f7Modal = n, n
  }
}
var Yr = zl,
  Fp = {
    name: "sheet",
    params: {
      sheet: {
        push: !1,
        backdrop: void 0,
        backdropEl: void 0,
        backdropUnique: !1,
        closeByBackdropClick: !0,
        closeByOutsideClick: !1,
        closeOnEscape: !1,
        swipeToClose: !1,
        swipeToStep: !1,
        swipeHandler: null,
        containerEl: null
      }
    },
    static: {
      Sheet: Yr
    },
    create() {
      const r = this;
      r.sheet = H({}, Ze({
        app: r,
        constructor: Yr,
        defaultSelector: ".sheet-modal.modal-in"
      }), {
        stepOpen(e) {
          const a = r.sheet.get(e);
          if (a && a.stepOpen) return a.stepOpen()
        },
        stepClose(e) {
          const a = r.sheet.get(e);
          if (a && a.stepClose) return a.stepClose()
        },
        stepToggle(e) {
          const a = r.sheet.get(e);
          if (a && a.stepToggle) return a.stepToggle()
        }
      })
    },
    clicks: {
      ".sheet-open": function (e, a) {
        a === void 0 && (a = {});
        const t = this;
        y(".sheet-modal.modal-in").length > 0 && a.sheet && y(a.sheet)[0] !== y(".sheet-modal.modal-in")[0] && t.sheet.close(".sheet-modal.modal-in"), t.sheet.open(a.sheet, a.animate, e)
      },
      ".sheet-close": function (e, a) {
        a === void 0 && (a = {}), this.sheet.close(a.sheet, a.animate, e)
      }
    }
  };
class Fl extends qe {
  constructor(e, a) {
    const t = H({
      on: {}
    }, e.params.toast, a);
    super(e, t);
    const n = this,
      s = G();
    n.app = e, n.params = t;
    const {
      closeButton: i,
      closeTimeout: o
    } = n.params;
    let l;
    if (n.params.el) l = y(n.params.el);
    else {
      const d = n.render();
      l = y(d)
    }
    if (l && l.length > 0 && l[0].f7Modal) return l[0].f7Modal;
    if (l.length === 0) return n.destroy();
    H(n, {
      $el: l,
      el: l[0],
      type: "toast"
    }), l[0].f7Modal = n, i && (l.find(".toast-button").on("click", () => {
      n.emit("local::closeButtonClick toastCloseButtonClick", n), n.close()
    }), n.on("beforeDestroy", () => {
      l.find(".toast-button").off("click")
    }));
    let c;
    return n.on("open", () => {
      y(".toast.modal-in").each(d => {
        const p = e.toast.get(d);
        d !== n.el && p && p.close()
      }), o && (c = ke(() => {
        n.close()
      }, o))
    }), n.on("close", () => {
      s.clearTimeout(c)
    }), n.params.destroyOnClose && n.once("closed", () => {
      setTimeout(() => {
        n.destroy()
      }, 0)
    }), n
  }
  render() {
    const e = this;
    if (e.params.render) return e.params.render.call(e, e);
    const {
      position: a,
      horizontalPosition: t,
      cssClass: n,
      icon: s,
      text: i,
      closeButton: o,
      closeButtonColor: l,
      closeButtonText: c
    } = e.params, d = a === "top" || a === "bottom" ? `toast-horizontal-${t}` : "";
    return T("div", {
      class: `toast toast-${a} ${d} ${n||""} ${s?"toast-with-icon":""}`
    }, T("div", {
      class: "toast-content"
    }, s && T("div", {
      class: "toast-icon"
    }, s), T("div", {
      class: "toast-text"
    }, i), o && !s && T("a", {
      class: `toast-button button ${l?`color-${l}`:""}`
    }, c)))
  }
}
var Oa = Fl,
  Vp = {
    name: "toast",
    static: {
      Toast: Oa
    },
    create() {
      const r = this;
      r.toast = H({}, Ze({
        app: r,
        constructor: Oa,
        defaultSelector: ".toast.modal-in"
      }), {
        show(e) {
          return H(e, {
            destroyOnClose: !0
          }), new Oa(r, e).open()
        }
      })
    },
    params: {
      toast: {
        icon: null,
        text: null,
        position: "bottom",
        horizontalPosition: "left",
        closeButton: !1,
        closeButtonColor: null,
        closeButtonText: "Ok",
        closeTimeout: null,
        cssClass: null,
        render: null,
        containerEl: null
      }
    }
  };
const It = {
  init(r) {
    const e = this,
      a = {
        iosPreloaderContent: lt,
        mdPreloaderContent: ot
      },
      t = y(r);
    t.length === 0 || t.children(".preloader-inner").length > 0 || t.children(".preloader-inner-line").length > 0 || t.append(a[`${e.theme}PreloaderContent`])
  },
  visible: !1,
  show(r) {
    r === void 0 && (r = "white");
    const e = this;
    if (It.visible) return;
    const t = {
      iosPreloaderContent: lt,
      mdPreloaderContent: ot
    } [`${e.theme}PreloaderContent`] || "";
    y("html").addClass("with-modal-preloader"), e.$el.append(`
      <div class="preloader-backdrop"></div>
      <div class="preloader-modal">
        <div class="preloader color-${r}">${t}</div>
      </div>
    `), It.visible = !0
  },
  showIn(r, e) {
    e === void 0 && (e = "white");
    const a = this,
      n = {
        iosPreloaderContent: lt,
        mdPreloaderContent: ot
      } [`${a.theme}PreloaderContent`] || "";
    y(r || "html").addClass("with-modal-preloader"), y(r || a.$el).append(`
      <div class="preloader-backdrop"></div>
      <div class="preloader-modal">
        <div class="preloader color-${e}">${n}</div>
      </div>
    `)
  },
  hide() {
    const r = this;
    !It.visible || (y("html").removeClass("with-modal-preloader"), r.$el.find(".preloader-backdrop, .preloader-modal").remove(), It.visible = !1)
  },
  hideIn(r) {
    const e = this;
    y(r || "html").removeClass("with-modal-preloader"), y(r || e.$el).find(".preloader-backdrop, .preloader-modal").remove()
  }
};
var Np = {
  name: "preloader",
  create() {
    Ie(this, {
      preloader: It
    })
  },
  on: {
    photoBrowserOpen(r) {
      const e = this;
      r.$el.find(".preloader").each(a => {
        e.preloader.init(a)
      })
    },
    tabMounted(r) {
      const e = this;
      y(r).find(".preloader").each(a => {
        e.preloader.init(a)
      })
    },
    pageInit(r) {
      const e = this;
      r.$el.find(".preloader").each(a => {
        e.preloader.init(a)
      })
    }
  },
  vnode: {
    preloader: {
      insert(r) {
        const e = this,
          a = r.elm;
        e.preloader.init(a)
      }
    }
  }
};
const Vl = {
  set() {
    const r = this;
    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
    let [n, s, i] = a;
    if (typeof a[0] == "number" && ([s, i] = a, n = r.$el), typeof s == "undefined" || s === null) return n;
    s || (s = 0);
    const o = y(n || r.$el);
    if (o.length === 0) return n;
    const l = Math.min(Math.max(s, 0), 100);
    let c;
    if (o.hasClass("progressbar") ? c = o.eq(0) : c = o.children(".progressbar"), c.length === 0 || c.hasClass("progressbar-infinite")) return c;
    let d = c.children("span");
    return d.length === 0 && (d = y("<span></span>"), c.append(d)), d.transition(typeof i != "undefined" ? i : "").transform(`translate3d(${(-100+l)*(r.rtl?-1:1)}%,0,0)`), c[0]
  },
  show() {
    const r = this;
    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
    let [n, s, i] = a, o = "determined";
    a.length === 2 ? (typeof a[0] == "string" || typeof a[0] == "object") && typeof a[1] == "string" ? ([n, i, s] = a, o = "infinite") : typeof a[0] == "number" && typeof a[1] == "string" && ([s, i] = a, n = r.$el) : a.length === 1 ? typeof a[0] == "number" ? (n = r.$el, s = a[0]) : typeof a[0] == "string" && (o = "infinite", n = r.$el, i = a[0]) : a.length === 0 && (o = "infinite", n = r.$el);
    const l = y(n);
    if (l.length === 0) return;
    let c;
    return l.hasClass("progressbar") || l.hasClass("progressbar-infinite") ? c = l : (c = l.children(".progressbar:not(.progressbar-out), .progressbar-infinite:not(.progressbar-out)"), c.length === 0 && (c = y(`
          <span class="progressbar${o==="infinite"?"-infinite":""}${i?` color-${i}`:""} progressbar-in">
            ${o==="infinite"?"":"<span></span>"}
          </span>`), l.append(c))), typeof s != "undefined" && r.progressbar.set(c, s), c[0]
  },
  hide(r, e) {
    e === void 0 && (e = !0);
    const t = y(r || this.$el);
    if (t.length === 0) return;
    let n;
    return t.hasClass("progressbar") || t.hasClass("progressbar-infinite") ? n = t : n = t.children(".progressbar, .progressbar-infinite"), n.length === 0 || !n.hasClass("progressbar-in") || n.hasClass("progressbar-out") || n.removeClass("progressbar-in").addClass("progressbar-out").animationEnd(() => {
      e && n.remove()
    }), n
  }
};
var Yp = {
  name: "progressbar",
  create() {
    Ie(this, {
      progressbar: Vl
    })
  },
  on: {
    tabMounted(r) {
      const e = this;
      y(r).find(".progressbar").each(a => {
        const t = y(a);
        e.progressbar.set(t, t.attr("data-progress"))
      })
    },
    pageInit(r) {
      const e = this;
      r.$el.find(".progressbar").each(a => {
        const t = y(a);
        e.progressbar.set(t, t.attr("data-progress"))
      })
    }
  },
  vnode: {
    progressbar: {
      insert(r) {
        const e = this,
          a = r.elm;
        e.progressbar.set(a, a.getAttribute("data-progress"))
      },
      update(r) {
        const e = this,
          a = r.elm;
        e.progressbar.set(a, a.getAttribute("data-progress"))
      }
    }
  }
};
const Nl = {
  init() {
    const r = this,
      e = ee();
    let a, t, n, s, i, o, l, c, d, p, u, g, h, f, b, m, v, E, $, w, C;

    function x(S, P) {
      t = !1, a = !0, C = !1, n = S.type === "touchstart" ? S.targetTouches[0].pageY : S.pageY, i = y(S.target).closest("li").eq(0), h = i.index(), l = i.parents(".sortable");
      const k = i.parents(".list-group");
      k.length && k.parents(l).length && (l = k), o = l.children("ul").children("li:not(.disallow-sorting):not(.no-sorting)"), r.panel && (r.panel.allowOpen = !1), r.swipeout && (r.swipeout.allow = !1), P && (i.addClass("sorting"), l.addClass("sortable-sorting"), C = !0)
    }

    function M(S) {
      if (!a || !i) return;
      const P = S.type === "touchmove" ? S.targetTouches[0].pageY : S.pageY;
      if (!t) {
        f = i.parents(".page"), b = i.parents(".page-content");
        const O = parseInt(b.css("padding-top"), 10),
          L = parseInt(b.css("padding-bottom"), 10);
        w = b[0].scrollTop, v = f.offset().top + O, m = f.height() - O - L, i.addClass("sorting"), l.addClass("sortable-sorting"), E = i[0].offsetTop, d = i[0].offsetTop, p = i.parent().height() - E - i.height(), c = i[0].offsetHeight, $ = i.offset().top
      }
      t = !0, S.preventDefault(), S.f7PreventSwipePanel = !0, s = P - n;
      const k = b[0].scrollTop - w,
        I = Math.min(Math.max(s + k, -d), p);
      i.transform(`translate3d(0,${I}px,0)`);
      const R = 44;
      let D = !0;
      s + k + R < -d && (D = !1), s + k - R > p && (D = !1), g = void 0, u = void 0;
      let z;
      D && ($ + s + c + R > v + m && (z = $ + s + c + R - (v + m)), $ + s < v + R && (z = $ + s - v - R), z && (b[0].scrollTop += z)), o.each(O => {
        const L = y(O);
        if (L[0] === i[0]) return;
        const N = L[0].offsetTop,
          F = L.height(),
          V = E + I;
        let U;
        const Z = L[0].f7Translate;
        V >= N - F / 2 && i.index() < L.index() ? (U = -c, L.transform(`translate3d(0, ${U}px,0)`), u = L, g = void 0) : V <= N + F / 2 && i.index() > L.index() ? (U = c, L[0].f7Translate = U, L.transform(`translate3d(0, ${U}px,0)`), u = void 0, g || (g = L)) : (U = void 0, L.transform("translate3d(0, 0%,0)")), Z !== U && (L.trigger("sortable:move"), r.emit("sortableMove", L[0], l[0])), L[0].f7Translate = U
      })
    }

    function A() {
      if (!a || !t) {
        a && !t && (r.panel && (r.panel.allowOpen = !0), r.swipeout && (r.swipeout.allow = !0), C && (i.removeClass("sorting"), l.removeClass("sortable-sorting"))), a = !1, t = !1;
        return
      }
      r.panel && (r.panel.allowOpen = !0), r.swipeout && (r.swipeout.allow = !0), o.transform(""), i.removeClass("sorting"), l.removeClass("sortable-sorting");
      let S;
      u ? S = u.index() : g && (S = g.index());
      let P = l.dataset().sortableMoveElements;
      if (typeof P == "undefined" && (P = r.params.sortable.moveElements), P && (u && i.insertAfter(u), g && i.insertBefore(g)), (u || g) && l.hasClass("virtual-list")) {
        h = i[0].f7VirtualListIndex, typeof h == "undefined" && (h = i.attr("data-virtual-list-index")), g ? (S = g[0].f7VirtualListIndex, typeof S == "undefined" && (S = g.attr("data-virtual-list-index"))) : (S = u[0].f7VirtualListIndex, typeof S == "undefined" && (S = u.attr("data-virtual-list-index"))), S !== null ? S = parseInt(S, 10) : S = void 0;
        const k = l[0].f7VirtualList;
        h && (h = parseInt(h, 10)), S && (S = parseInt(S, 10)), k && k.moveItem(h, S)
      }
      typeof S != "undefined" && !Number.isNaN(S) && S !== h && (i.trigger("sortable:sort", {
        from: h,
        to: S
      }), r.emit("sortableSort", i[0], {
        from: h,
        to: S,
        el: i[0]
      }, l[0])), g = void 0, u = void 0, a = !1, t = !1
    }
    const B = ve().passiveListener ? {
      passive: !1,
      capture: !1
    } : !1;
    y(e).on(r.touchEvents.start, ".list.sortable .sortable-handler", x, B), r.on("touchmove:active", M), r.on("touchend:passive", A), y(e).on("taphold", ".sortable-tap-hold", (S, P) => {
      x(P, !0)
    })
  },
  enable(r) {
    r === void 0 && (r = ".list.sortable");
    const e = this,
      a = y(r);
    a.length !== 0 && (a.addClass("sortable-enabled"), a.trigger("sortable:enable"), e.emit("sortableEnable", a[0]))
  },
  disable(r) {
    r === void 0 && (r = ".list.sortable");
    const e = this,
      a = y(r);
    a.length !== 0 && (a.removeClass("sortable-enabled"), a.trigger("sortable:disable"), e.emit("sortableDisable", a[0]))
  },
  toggle(r) {
    r === void 0 && (r = ".list.sortable");
    const e = this,
      a = y(r);
    a.length !== 0 && (a.hasClass("sortable-enabled") ? e.sortable.disable(a) : e.sortable.enable(a))
  }
};
var qp = {
  name: "sortable",
  params: {
    sortable: {
      moveElements: !0
    }
  },
  create() {
    Ie(this, {
      sortable: Nl
    })
  },
  on: {
    init() {
      const r = this;
      !r.params.sortable || r.sortable.init()
    }
  },
  clicks: {
    ".sortable-enable": function (e, a) {
      a === void 0 && (a = {}), this.sortable.enable(a.sortable)
    },
    ".sortable-disable": function (e, a) {
      a === void 0 && (a = {}), this.sortable.disable(a.sortable)
    },
    ".sortable-toggle": function (e, a) {
      a === void 0 && (a = {}), this.sortable.toggle(a.sortable)
    }
  }
};
const Re = {
  init() {
    const r = this,
      e = ee(),
      a = {};
    let t, n, s, i, o, l, c, d, p, u, g, h, f, b, m, v, E, $, w, C, x;

    function M(P) {
      !r.swipeout.allow || (n = !1, t = !0, s = void 0, a.x = P.type === "touchstart" ? P.targetTouches[0].pageX : P.pageX, a.y = P.type === "touchstart" ? P.targetTouches[0].pageY : P.pageY, i = new Date().getTime(), l = y(this))
    }

    function A(P) {
      if (!t) return;
      const k = P.type === "touchmove" ? P.targetTouches[0].pageX : P.pageX,
        I = P.type === "touchmove" ? P.targetTouches[0].pageY : P.pageY;
      if (typeof s == "undefined" && (s = !!(s || Math.abs(I - a.y) > Math.abs(k - a.x))), s) {
        t = !1;
        return
      }
      if (!n) {
        if (y(".list.sortable-opened").length > 0) return;
        c = l.find(".swipeout-content"), d = l.find(".swipeout-actions-right"), p = l.find(".swipeout-actions-left"), u = null, g = null, m = null, v = null, w = null, $ = null, p.length > 0 && (u = p.outerWidth(), m = p.children("a"), $ = p.find(".swipeout-overswipe")), d.length > 0 && (g = d.outerWidth(), v = d.children("a"), w = d.find(".swipeout-overswipe")), f = l.hasClass("swipeout-opened"), f && (b = l.find(".swipeout-actions-left.swipeout-actions-opened").length > 0 ? "left" : "right"), l.removeClass("swipeout-transitioning"), r.params.swipeout.noFollow || (l.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"), l.removeClass("swipeout-opened"))
      }
      if (n = !0, P.cancelable && P.preventDefault(), o = k - a.x, h = o, f && (b === "right" ? h -= g : h += u), h > 0 && p.length === 0 || h < 0 && d.length === 0) {
        if (!f) {
          t = !1, n = !1, c.transform(""), v && v.length > 0 && v.transform(""), m && m.length > 0 && m.transform("");
          return
        }
        h = 0
      }
      h < 0 ? E = "to-left" : h > 0 ? E = "to-right" : E || (E = "to-left");
      let R, D;
      if (P.f7PreventSwipePanel = !0, r.params.swipeout.noFollow) {
        f ? (b === "right" && o > 0 && r.swipeout.close(l), b === "left" && o < 0 && r.swipeout.close(l)) : (o < 0 && d.length > 0 && r.swipeout.open(l, "right"), o > 0 && p.length > 0 && r.swipeout.open(l, "left")), t = !1, n = !1;
        return
      }
      if (C = !1, x = !1, d.length > 0) {
        let z = h;
        if (D = z / g, z < -g) {
          const O = z / -g;
          z = -g - (-z - g) ** .8, h = z, w.length > 0 && O > r.params.swipeout.overswipeRatio && (x = !0)
        }
        E !== "to-left" && (D = 0, z = 0), v.each(O => {
          const L = y(O);
          typeof O.f7SwipeoutButtonOffset == "undefined" && (L[0].f7SwipeoutButtonOffset = O.offsetLeft), R = O.f7SwipeoutButtonOffset, w.length > 0 && L.hasClass("swipeout-overswipe") && E === "to-left" && (L.css({
            left: `${x?-R:0}px`
          }), x ? (L.hasClass("swipeout-overswipe-active") || (l.trigger("swipeout:overswipeenter"), r.emit("swipeoutOverswipeEnter", l[0])), L.addClass("swipeout-overswipe-active")) : (L.hasClass("swipeout-overswipe-active") && (l.trigger("swipeout:overswipeexit"), r.emit("swipeoutOverswipeExit", l[0])), L.removeClass("swipeout-overswipe-active"))), L.transform(`translate3d(${z-R*(1+Math.max(D,-1))}px,0,0)`)
        })
      }
      if (p.length > 0) {
        let z = h;
        if (D = z / u, z > u) {
          const O = z / g;
          z = u + (z - u) ** .8, h = z, $.length > 0 && O > r.params.swipeout.overswipeRatio && (C = !0)
        }
        E !== "to-right" && (z = 0, D = 0), m.each((O, L) => {
          const N = y(O);
          typeof O.f7SwipeoutButtonOffset == "undefined" && (N[0].f7SwipeoutButtonOffset = u - O.offsetLeft - O.offsetWidth), R = O.f7SwipeoutButtonOffset, $.length > 0 && N.hasClass("swipeout-overswipe") && E === "to-right" && (N.css({
            left: `${C?R:0}px`
          }), C ? (N.hasClass("swipeout-overswipe-active") || (l.trigger("swipeout:overswipeenter"), r.emit("swipeoutOverswipeEnter", l[0])), N.addClass("swipeout-overswipe-active")) : (N.hasClass("swipeout-overswipe-active") && (l.trigger("swipeout:overswipeexit"), r.emit("swipeoutOverswipeExit", l[0])), N.removeClass("swipeout-overswipe-active"))), m.length > 1 && N.css("z-index", m.length - L), N.transform(`translate3d(${z+R*(1-Math.min(D,1))}px,0,0)`)
        })
      }
      l.trigger("swipeout", D), r.emit("swipeout", l[0], D), c.transform(`translate3d(${h}px,0,0)`)
    }

    function B() {
      if (!t || !n) {
        t = !1, n = !1;
        return
      }
      t = !1, n = !1;
      const P = new Date().getTime() - i,
        k = E === "to-left" ? d : p,
        I = E === "to-left" ? g : u;
      let R, D, z;
      if (P < 300 && (o < -10 && E === "to-left" || o > 10 && E === "to-right") || P >= 300 && Math.abs(h) > I / 2 ? R = "open" : R = "close", P < 300 && (Math.abs(h) === 0 && (R = "close"), Math.abs(h) === I && (R = "open")), R === "open") {
        Re.el = l[0], l.trigger("swipeout:open"), r.emit("swipeoutOpen", l[0]), l.addClass("swipeout-opened swipeout-transitioning");
        const L = E === "to-left" ? -I : I;
        if (c.transform(`translate3d(${L}px,0,0)`), k.addClass("swipeout-actions-opened"), D = E === "to-left" ? v : m, D)
          for (z = 0; z < D.length; z += 1) y(D[z]).transform(`translate3d(${L}px,0,0)`);
        x && d.find(".swipeout-overswipe").trigger("click", "f7Overswipe"), C && p.find(".swipeout-overswipe").trigger("click", "f7Overswipe")
      } else l.trigger("swipeout:close"), r.emit("swipeoutClose", l[0]), Re.el = void 0, l.addClass("swipeout-transitioning").removeClass("swipeout-opened"), c.transform(""), k.removeClass("swipeout-actions-opened");
      let O;
      m && m.length > 0 && m !== D && m.each(L => {
        const N = y(L);
        O = L.f7SwipeoutButtonOffset, typeof O == "undefined" && (N[0].f7SwipeoutButtonOffset = u - L.offsetLeft - L.offsetWidth), N.transform(`translate3d(${O}px,0,0)`)
      }), v && v.length > 0 && v !== D && v.each(L => {
        const N = y(L);
        O = L.f7SwipeoutButtonOffset, typeof O == "undefined" && (N[0].f7SwipeoutButtonOffset = L.offsetLeft), N.transform(`translate3d(${-O}px,0,0)`)
      }), c.transitionEnd(() => {
        f && R === "open" || !f && R === "close" || (l.trigger(R === "open" ? "swipeout:opened" : "swipeout:closed"), r.emit(R === "open" ? "swipeoutOpened" : "swipeoutClosed", l[0]), l.removeClass("swipeout-transitioning"), f && R === "close" && (d.length > 0 && v.transform(""), p.length > 0 && m.transform("")))
      })
    }
    const S = ve().passiveListener ? {
      passive: !0
    } : !1;
    r.on("touchstart", P => {
      if (Re.el) {
        const k = y(P.target);
        y(Re.el).is(k[0]) || k.parents(".swipeout").is(Re.el) || k.hasClass("modal-in") || (k.attr("class") || "").indexOf("-backdrop") > 0 || k.hasClass("actions-modal") || k.parents(".actions-modal.modal-in, .dialog.modal-in").length > 0 || r.swipeout.close(Re.el)
      }
    }), y(e).on(r.touchEvents.start, "li.swipeout", M, S), r.on("touchmove:active", A), r.on("touchend:passive", B)
  },
  allow: !0,
  el: void 0,
  open() {
    const r = this;
    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
    let [n, s, i] = a;
    typeof a[1] == "function" && ([n, i, s] = a);
    const o = y(n).eq(0);
    if (o.length === 0 || !o.hasClass("swipeout") || o.hasClass("swipeout-opened")) return;
    s || (o.find(".swipeout-actions-right").length > 0 ? s = "right" : s = "left");
    const l = o.find(`.swipeout-actions-${s}`),
      c = o.find(".swipeout-content");
    if (l.length === 0) return;
    o.trigger("swipeout:open").addClass("swipeout-opened").removeClass("swipeout-transitioning"), r.emit("swipeoutOpen", o[0]), l.addClass("swipeout-actions-opened");
    const d = l.children("a"),
      p = l.outerWidth(),
      u = s === "right" ? -p : p;
    d.length > 1 && d.each((g, h) => {
      const f = y(g);
      s === "right" ? f.transform(`translate3d(${-g.offsetLeft}px,0,0)`) : f.css("z-index", d.length - h).transform(`translate3d(${p-g.offsetWidth-g.offsetLeft}px,0,0)`)
    }), o.addClass("swipeout-transitioning"), c.transitionEnd(() => {
      o.trigger("swipeout:opened"), r.emit("swipeoutOpened", o[0]), i && i.call(o[0])
    }), Pe(() => {
      d.transform(`translate3d(${u}px,0,0)`), c.transform(`translate3d(${u}px,0,0)`)
    }), Re.el = o[0]
  },
  close(r, e) {
    const a = this,
      t = y(r).eq(0);
    if (t.length === 0 || !t.hasClass("swipeout-opened")) return;
    const n = t.find(".swipeout-actions-opened").hasClass("swipeout-actions-right") ? "right" : "left",
      s = t.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"),
      i = s.children("a"),
      o = s.outerWidth();
    a.swipeout.allow = !1, t.trigger("swipeout:close"), a.emit("swipeoutClose", t[0]), t.removeClass("swipeout-opened").addClass("swipeout-transitioning");
    let l;

    function c() {
      a.swipeout.allow = !0, !t.hasClass("swipeout-opened") && (t.removeClass("swipeout-transitioning"), i.transform(""), t.trigger("swipeout:closed"), a.emit("swipeoutClosed", t[0]), e && e.call(t[0]), l && clearTimeout(l))
    }
    t.find(".swipeout-content").transform("").transitionEnd(c), l = setTimeout(c, 500), i.each(d => {
      const p = y(d);
      n === "right" ? p.transform(`translate3d(${-d.offsetLeft}px,0,0)`) : p.transform(`translate3d(${o-d.offsetWidth-d.offsetLeft}px,0,0)`), p.css({
        left: "0px"
      }).removeClass("swipeout-overswipe-active")
    }), Re.el && Re.el === t[0] && (Re.el = void 0)
  },
  delete(r, e) {
    const a = this,
      t = y(r).eq(0);
    t.length !== 0 && (Re.el = void 0, t.trigger("swipeout:delete"), a.emit("swipeoutDelete", t[0]), t.css({
      height: `${t.outerHeight()}px`
    }), t.transitionEnd(() => {
      if (t.trigger("swipeout:deleted"), a.emit("swipeoutDeleted", t[0]), e && e.call(t[0]), t.parents(".virtual-list").length > 0) {
        const n = t.parents(".virtual-list")[0].f7VirtualList,
          s = t[0].f7VirtualListIndex;
        n && typeof s != "undefined" && n.deleteItem(s)
      } else a.params.swipeout.removeElements ? a.params.swipeout.removeElementsWithTimeout ? setTimeout(() => {
        t.remove()
      }, a.params.swipeout.removeElementsTimeout) : t.remove() : t.removeClass("swipeout-deleting swipeout-transitioning")
    }), Pe(() => {
      t.addClass("swipeout-deleting swipeout-transitioning").css({
        height: "0px"
      }).find(".swipeout-content").transform("translate3d(-100%,0,0)")
    }))
  }
};
var jp = {
  name: "swipeout",
  params: {
    swipeout: {
      actionsNoFold: !1,
      noFollow: !1,
      removeElements: !0,
      removeElementsWithTimeout: !1,
      removeElementsTimeout: 0,
      overswipeRatio: 1.2
    }
  },
  create() {
    Ie(this, {
      swipeout: Re
    })
  },
  clicks: {
    ".swipeout-open": function (e, a) {
      a === void 0 && (a = {}), this.swipeout.open(a.swipeout, a.side)
    },
    ".swipeout-close": function (e) {
      const a = this,
        t = e.closest(".swipeout");
      t.length !== 0 && a.swipeout.close(t)
    },
    ".swipeout-delete": function (e, a) {
      a === void 0 && (a = {});
      const t = this,
        n = e.closest(".swipeout");
      if (n.length === 0) return;
      const {
        confirm: s,
        confirmTitle: i
      } = a;
      a.confirm ? t.dialog.confirm(s, i, () => {
        t.swipeout.delete(n)
      }) : t.swipeout.delete(n)
    }
  },
  on: {
    init() {
      const r = this;
      !r.params.swipeout || r.swipeout.init()
    }
  }
};
const qr = {
  toggleClicked(r) {
    const e = this;
    let a = r.closest(".accordion-item").eq(0);
    a.length || (a = r.parents("li").eq(0));
    const t = r.parents(".accordion-item-content").eq(0);
    t.length && t.parents(a).length || r.parents("li").length > 1 && r.parents("li")[0] !== a[0] || e.accordion.toggle(a)
  },
  open(r) {
    const e = this,
      a = y(r);
    let t = !1;

    function n() {
      t = !0
    }
    if (a.trigger("accordion:beforeopen", {
        prevent: n
      }, n), e.emit("accordionBeforeOpen", a[0], n), t) return;
    const s = a.parents(".accordion-list").eq(0);
    let i = a.children(".accordion-item-content");
    if (i.removeAttr("aria-hidden"), i.length === 0 && (i = a.find(".accordion-item-content")), i.length === 0) return;
    const o = s.length > 0 && a.parent().children(".accordion-item-opened");
    o.length > 0 && e.accordion.close(o), i.transitionEnd(() => {
      a.hasClass("accordion-item-opened") ? (i.transition(0), i.css("height", "auto"), Pe(() => {
        i.transition(""), a.trigger("accordion:opened"), e.emit("accordionOpened", a[0])
      })) : (i.css("height", ""), a.trigger("accordion:closed"), e.emit("accordionClosed", a[0]))
    }), i.css("height", `${i[0].scrollHeight}px`), a.trigger("accordion:open"), a.addClass("accordion-item-opened"), e.emit("accordionOpen", a[0])
  },
  close(r) {
    const e = this,
      a = y(r);
    let t = !1;

    function n() {
      t = !0
    }
    if (a.trigger("accordion:beforeclose", {
        prevent: n
      }, n), e.emit("accordionBeforeClose", a[0], n), t) return;
    let s = a.children(".accordion-item-content");
    s.length === 0 && (s = a.find(".accordion-item-content")), a.removeClass("accordion-item-opened"), s.attr("aria-hidden", !0), s.transition(0), s.css("height", `${s[0].scrollHeight}px`), s.transitionEnd(() => {
      a.hasClass("accordion-item-opened") ? (s.transition(0), s.css("height", "auto"), Pe(() => {
        s.transition(""), a.trigger("accordion:opened"), e.emit("accordionOpened", a[0])
      })) : (s.css("height", ""), a.trigger("accordion:closed"), e.emit("accordionClosed", a[0]))
    }), Pe(() => {
      s.transition(""), s.css("height", ""), a.trigger("accordion:close"), e.emit("accordionClose", a[0])
    })
  },
  toggle(r) {
    const e = this,
      a = y(r);
    a.length !== 0 && (a.hasClass("accordion-item-opened") ? e.accordion.close(r) : e.accordion.open(r))
  }
};
var Wp = {
    name: "accordion",
    create() {
      Ie(this, {
        accordion: qr
      })
    },
    clicks: {
      ".accordion-item .item-link, .accordion-item-toggle, .links-list.accordion-list > ul > li > a": function (e) {
        const a = this;
        qr.toggleClicked.call(a, e)
      }
    }
  },
  Xp = {
    name: "contactsList"
  };
class Yl extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this,
      n = ue(),
      s = ee();
    let i;
    e.theme === "md" ? i = 48 : e.theme === "ios" && (i = 44);
    const o = {
      cols: 1,
      height: i,
      cache: !0,
      dynamicHeightBufferSize: 1,
      showFilteredItemsOnly: !1,
      renderExternal: void 0,
      setListHeight: !0,
      searchByItem: void 0,
      searchAll: void 0,
      ul: null,
      createUl: !0,
      scrollableParentEl: void 0,
      renderItem(b) {
        return `
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title">${b}</div>
              </div>
            </div>
          </li>
        `.trim()
      },
      on: {}
    };
    if (t.useModulesParams(o), t.params = H(o, a), (t.params.height === void 0 || !t.params.height) && (t.params.height = i), t.$el = y(a.el), t.el = t.$el[0], t.$el.length === 0) return;
    t.$el[0].f7VirtualList = t, t.items = t.params.items, t.params.showFilteredItemsOnly && (t.filteredItems = []), t.params.renderItem && (t.renderItem = t.params.renderItem), t.$pageContentEl = t.$el.parents(".page-content"), t.pageContentEl = t.$pageContentEl[0], t.$scrollableParentEl = t.params.scrollableParentEl ? y(t.params.scrollableParentEl).eq(0) : t.$pageContentEl, !t.$scrollableParentEl.length && t.$pageContentEl.length && (t.$scrollableParentEl = t.$pageContentEl), t.scrollableParentEl = t.$scrollableParentEl[0], typeof t.params.updatableScroll != "undefined" ? t.updatableScroll = t.params.updatableScroll : (t.updatableScroll = !0, n.ios && n.osVersion.split(".")[0] < 8 && (t.updatableScroll = !1));
    const l = t.params.ul;
    t.$ul = l ? y(t.params.ul) : t.$el.children("ul"), t.$ul.length === 0 && t.params.createUl && (t.$el.append("<ul></ul>"), t.$ul = t.$el.children("ul")), t.ul = t.$ul[0];
    let c;
    !t.ul && !t.params.createUl ? c = t.$el : c = t.$ul, H(t, {
      $itemsWrapEl: c,
      itemsWrapEl: c[0],
      domCache: {},
      tempDomElement: s.createElement("ul"),
      lastRepaintY: null,
      fragment: s.createDocumentFragment(),
      pageHeight: void 0,
      rowsPerScreen: void 0,
      rowsBefore: void 0,
      rowsAfter: void 0,
      rowsToRender: void 0,
      maxBufferHeight: 0,
      listHeight: void 0,
      dynamicHeight: typeof t.params.height == "function",
      autoHeight: t.params.height === "auto"
    }), t.useModules();
    const d = t.handleScroll.bind(t),
      p = t.handleResize.bind(t);
    let u, g, h, f;
    return t.attachEvents = function () {
      u = t.$el.parents(".page").eq(0), g = t.$el.parents(".tab").filter(m => y(m).parent(".tabs").parent(".tabs-animated-wrap, swiper-container.tabs").length === 0).eq(0), h = t.$el.parents(".panel").eq(0), f = t.$el.parents(".popup").eq(0), t.$scrollableParentEl.on("scroll", d), u.length && u.on("page:reinit", p), g.length && g.on("tab:show", p), h.length && h.on("panel:open", p), f.length && f.on("popup:open", p), e.on("resize", p)
    }, t.detachEvents = function () {
      t.$scrollableParentEl.off("scroll", d), u.length && u.off("page:reinit", p), g.length && g.off("tab:show", p), h.length && h.off("panel:open", p), f.length && f.off("popup:open", p), e.off("resize", p)
    }, t.init(), t
  }
  setListSize(e) {
    const a = this,
      t = a.filteredItems || a.items;
    if (e || (a.pageHeight = a.$scrollableParentEl[0].offsetHeight), a.dynamicHeight) {
      a.listHeight = 0, a.heights = [];
      for (let n = 0; n < t.length; n += 1) {
        const s = a.params.height(t[n]);
        a.listHeight += s, a.heights.push(s)
      }
    } else if (a.autoHeight) {
      a.listHeight = 0, a.heights || (a.heights = []), a.heightsCalculated || (a.heightsCalculated = []);
      const n = {};
      a.$itemsWrapEl.find("[data-virtual-list-index]").forEach(s => {
        n[parseInt(s.getAttribute("data-virtual-list-index"), 10)] = s
      });
      for (let s = 0; s < t.length; s += 1) {
        const i = n[s];
        i && (a.heightsCalculated.includes(s) || (a.heights[s] = i.offsetHeight, a.heightsCalculated.push(s))), typeof a.heights[s] == "undefined" && (a.heights[s] = 40), a.listHeight += a.heights[s]
      }
    } else a.listHeight = Math.ceil(t.length / a.params.cols) * a.params.height, a.rowsPerScreen = Math.ceil(a.pageHeight / a.params.height), a.rowsBefore = a.params.rowsBefore || a.rowsPerScreen * 2, a.rowsAfter = a.params.rowsAfter || a.rowsPerScreen, a.rowsToRender = a.rowsPerScreen + a.rowsBefore + a.rowsAfter, a.maxBufferHeight = a.rowsBefore / 2 * a.params.height;
    (a.updatableScroll || a.params.setListHeight) && a.$itemsWrapEl.css({
      height: `${a.listHeight}px`
    })
  }
  render(e, a) {
    const t = this;
    e && (t.lastRepaintY = null);
    let n = -(t.$el[0].getBoundingClientRect().top - t.$scrollableParentEl[0].getBoundingClientRect().top);
    if (typeof a != "undefined" && (n = a), t.lastRepaintY === null || Math.abs(n - t.lastRepaintY) > t.maxBufferHeight || !t.updatableScroll && t.$scrollableParentEl[0].scrollTop + t.pageHeight >= t.$scrollableParentEl[0].scrollHeight) t.lastRepaintY = n;
    else return;
    const s = t.filteredItems || t.items;
    let i, o, l = 0,
      c = 0;
    if (t.dynamicHeight || t.autoHeight) {
      let g = 0,
        h;
      t.maxBufferHeight = t.pageHeight;
      for (let f = 0; f < t.heights.length; f += 1) h = t.heights[f], typeof i == "undefined" && (g + h >= n - t.pageHeight * 2 * t.params.dynamicHeightBufferSize ? i = f : l += h), typeof o == "undefined" && ((g + h >= n + t.pageHeight * 2 * t.params.dynamicHeightBufferSize || f === t.heights.length - 1) && (o = f + 1), c += h), g += h;
      o = Math.min(o, s.length)
    } else i = (parseInt(n / t.params.height, 10) - t.rowsBefore) * t.params.cols, i < 0 && (i = 0), o = Math.min(i + t.rowsToRender * t.params.cols, s.length);
    let d;
    const p = [];
    t.reachEnd = !1;
    let u;
    for (u = i; u < o; u += 1) {
      let g;
      const h = t.items.indexOf(s[u]);
      u === i && (t.currentFromIndex = h), u === o - 1 && (t.currentToIndex = h), t.filteredItems ? t.items[h] === t.filteredItems[t.filteredItems.length - 1] && (t.reachEnd = !0) : h === t.items.length - 1 && (t.reachEnd = !0), t.params.renderExternal ? p.push(s[u]) : t.domCache[h] ? (g = t.domCache[h], g.f7VirtualListIndex = h) : (t.renderItem ? t.tempDomElement.innerHTML = t.renderItem(s[u], h).trim() : t.tempDomElement.innerHTML = s[u].toString().trim(), g = t.tempDomElement.childNodes[0], t.params.cache && (t.domCache[h] = g), g.f7VirtualListIndex = h), u === i && (t.dynamicHeight || t.autoHeight ? d = l : d = u * t.params.height / t.params.cols), t.params.renderExternal || (g.style.top = `${d}px`, t.emit("local::itemBeforeInsert vlItemBeforeInsert", t, g, s[u]), t.fragment.appendChild(g))
    }
    t.updatableScroll || (t.dynamicHeight || t.autoHeight ? t.itemsWrapEl.style.height = `${c}px` : t.itemsWrapEl.style.height = `${u*t.params.height/t.params.cols}px`), t.params.renderExternal ? s && s.length === 0 && (t.reachEnd = !0) : (t.emit("local::beforeClear vlBeforeClear", t, t.fragment), t.itemsWrapEl.innerHTML = "", t.emit("local::itemsBeforeInsert vlItemsBeforeInsert", t, t.fragment), s && s.length === 0 ? (t.reachEnd = !0, t.params.emptyTemplate && (t.itemsWrapEl.innerHTML = t.params.emptyTemplate)) : t.itemsWrapEl.appendChild(t.fragment), t.emit("local::itemsAfterInsert vlItemsAfterInsert", t, t.fragment)), typeof a != "undefined" && e && t.$scrollableParentEl.scrollTop(a, 0), t.params.renderExternal && t.params.renderExternal(t, {
      fromIndex: i,
      toIndex: o,
      listHeight: t.listHeight,
      topPosition: d,
      items: p
    }), t.autoHeight && requestAnimationFrame(() => {
      t.setListSize(!0)
    })
  }
  filterItems(e, a) {
    a === void 0 && (a = !0);
    const t = this;
    t.filteredItems = [];
    for (let n = 0; n < e.length; n += 1) t.filteredItems.push(t.items[e[n]]);
    a && (t.$scrollableParentEl[0].scrollTop = 0), t.update()
  }
  resetFilter() {
    const e = this;
    e.params.showFilteredItemsOnly ? e.filteredItems = [] : (e.filteredItems = null, delete e.filteredItems), e.update()
  }
  scrollToItem(e) {
    const a = this;
    if (e > a.items.length) return !1;
    let t = 0;
    if (a.dynamicHeight || a.autoHeight)
      for (let s = 0; s < e; s += 1) t += a.heights[s];
    else t = e * a.params.height;
    const n = a.$el[0].offsetTop;
    return a.render(!0, n + t - parseInt(a.$scrollableParentEl.css("padding-top"), 10)), !0
  }
  handleScroll() {
    this.render()
  }
  isVisible() {
    const e = this;
    return !!(e.el.offsetWidth || e.el.offsetHeight || e.el.getClientRects().length)
  }
  handleResize() {
    const e = this;
    e.isVisible() && (e.heightsCalculated = [], e.setListSize(), e.render(!0))
  }
  appendItems(e) {
    const a = this;
    for (let t = 0; t < e.length; t += 1) a.items.push(e[t]);
    a.update()
  }
  appendItem(e) {
    this.appendItems([e])
  }
  replaceAllItems(e) {
    const a = this;
    a.items = e, delete a.filteredItems, a.domCache = {}, a.update()
  }
  replaceItem(e, a) {
    const t = this;
    t.items[e] = a, t.params.cache && delete t.domCache[e], t.update()
  }
  prependItems(e) {
    const a = this;
    for (let t = e.length - 1; t >= 0; t -= 1) a.items.unshift(e[t]);
    if (a.params.cache) {
      const t = {};
      Object.keys(a.domCache).forEach(n => {
        t[parseInt(n, 10) + e.length] = a.domCache[n]
      }), a.domCache = t
    }
    a.update()
  }
  prependItem(e) {
    this.prependItems([e])
  }
  moveItem(e, a) {
    const t = this,
      n = e;
    let s = a;
    if (n === s) return;
    const i = t.items.splice(n, 1)[0];
    if (s >= t.items.length ? (t.items.push(i), s = t.items.length - 1) : t.items.splice(s, 0, i), t.params.cache) {
      const o = {};
      Object.keys(t.domCache).forEach(l => {
        const c = parseInt(l, 10),
          d = n < s ? n : s,
          p = n < s ? s : n,
          u = n < s ? -1 : 1;
        (c < d || c > p) && (o[c] = t.domCache[c]), c === d && (o[p] = t.domCache[c]), c > d && c <= p && (o[c + u] = t.domCache[c])
      }), t.domCache = o
    }
    t.update()
  }
  insertItemBefore(e, a) {
    const t = this;
    if (e === 0) {
      t.prependItem(a);
      return
    }
    if (e >= t.items.length) {
      t.appendItem(a);
      return
    }
    if (t.items.splice(e, 0, a), t.params.cache) {
      const n = {};
      Object.keys(t.domCache).forEach(s => {
        const i = parseInt(s, 10);
        i >= e && (n[i + 1] = t.domCache[i])
      }), t.domCache = n
    }
    t.update()
  }
  deleteItems(e) {
    const a = this;
    let t, n = 0;
    for (let s = 0; s < e.length; s += 1) {
      let i = e[s];
      typeof t != "undefined" && i > t && (n = -s), i += n, t = e[s];
      const o = a.items.splice(i, 1)[0];
      if (a.filteredItems && a.filteredItems.indexOf(o) >= 0 && a.filteredItems.splice(a.filteredItems.indexOf(o), 1), a.params.cache) {
        const l = {};
        Object.keys(a.domCache).forEach(c => {
          const d = parseInt(c, 10);
          d === i ? delete a.domCache[i] : parseInt(c, 10) > i ? l[d - 1] = a.domCache[c] : l[d] = a.domCache[c]
        }), a.domCache = l
      }
    }
    a.update()
  }
  deleteAllItems() {
    const e = this;
    e.items = [], delete e.filteredItems, e.params.cache && (e.domCache = {}), e.update()
  }
  deleteItem(e) {
    this.deleteItems([e])
  }
  clearCache() {
    const e = this;
    e.domCache = {}
  }
  update(e) {
    const a = this;
    e && a.params.cache && (a.domCache = {}), a.heightsCalculated = [], a.setListSize(), a.render(!0)
  }
  init() {
    const e = this;
    e.attachEvents(), e.setListSize(), e.render()
  }
  destroy() {
    let e = this;
    e.detachEvents(), e.$el[0].f7VirtualList = null, delete e.$el[0].f7VirtualList, $e(e), e = null
  }
}
var jr = Yl,
  Gp = {
    name: "virtualList",
    static: {
      VirtualList: jr
    },
    create() {
      const r = this;
      r.virtualList = xe({
        defaultSelector: ".virtual-list",
        constructor: jr,
        app: r,
        domProp: "f7VirtualList"
      })
    }
  };
class ql extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this,
      n = {
        el: null,
        listEl: null,
        indexes: "auto",
        iosItemHeight: 14,
        mdItemHeight: 14,
        scrollList: !0,
        label: !1,
        renderItem(w, C) {
          return `
          <li>${w}</li>
        `.trim()
        },
        renderSkipPlaceholder() {
          return '<li class="list-index-skip-placeholder"></li>'
        },
        on: {}
      };
    t.useModulesParams(n), t.params = H(n, a);
    let s, i, o, l;
    if (t.params.el) s = y(t.params.el);
    else return t;
    if (s[0].f7ListIndex) return s[0].f7ListIndex;
    if (l = s.find("ul"), l.length === 0 && (l = y("<ul></ul>"), s.append(l)), t.params.listEl && (i = y(t.params.listEl)), t.params.indexes === "auto" && !i) return t;
    i ? o = i.parents(".page-content").eq(0) : (o = s.siblings(".page-content").eq(0), o.length === 0 && (o = s.parents(".page").eq(0).find(".page-content").eq(0))), s[0].f7ListIndex = t, H(t, {
      app: e,
      $el: s,
      el: s && s[0],
      $ul: l,
      ul: l && l[0],
      $listEl: i,
      listEl: i && i[0],
      $pageContentEl: o,
      pageContentEl: o && o[0],
      indexes: a.indexes,
      height: 0,
      skipRate: 0
    }), t.useModules();

    function c() {
      const w = {
        index: t
      };
      t.calcSize(), w !== t.height && t.render()
    }

    function d(w) {
      const C = y(w.target).closest("li");
      if (!C.length) return;
      let x = C.index();
      if (t.skipRate > 0) {
        const A = x / (C.siblings("li").length - 1);
        x = Math.round((t.indexes.length - 1) * A)
      }
      const M = t.indexes[x];
      t.$el.trigger("listindex:click", {
        content: M,
        index: x
      }), t.emit("local::click listIndexClick", t, M, x), t.$el.trigger("listindex:select", {
        content: M,
        index: x
      }), t.emit("local::select listIndexSelect", t, M, x), t.$listEl && t.params.scrollList && t.scrollListToIndex(M, x)
    }
    let p, u, g, h, f, b = null;

    function m(w) {
      const C = l.children();
      !C.length || (g = C[0].getBoundingClientRect().top, h = C[C.length - 1].getBoundingClientRect().top + C[0].offsetHeight, w.type === "touchstart" ? w.targetTouches[0].pageX : w.pageX, w.type === "touchstart" ? w.targetTouches[0].pageY : w.pageY, p = !0, u = !1, b = null)
    }

    function v(w) {
      if (!p) return;
      !u && t.params.label && (f = y('<span class="list-index-label"></span>'), s.append(f)), u = !0;
      const C = w.type === "touchmove" ? w.targetTouches[0].pageY : w.pageY;
      w.preventDefault();
      let x = (C - g) / (h - g);
      x = Math.min(Math.max(x, 0), 1);
      const M = Math.round((t.indexes.length - 1) * x),
        A = t.indexes[M],
        B = h - g,
        S = (t.height - B) / 2 + (1 - x) * B;
      M !== b && (t.params.label && f.html(A).transform(`translateY(-${S}px)`), t.$listEl && t.params.scrollList && t.scrollListToIndex(A, M)), b = M, t.$el.trigger("listindex:select"), t.emit("local::select listIndexSelect", t, A, M)
    }

    function E() {
      !p || (p = !1, u = !1, t.params.label && (f && f.remove(), f = void 0))
    }
    const $ = ve().passiveListener ? {
      passive: !0
    } : !1;
    return t.attachEvents = function () {
      s.parents(".tab").on("tab:show", c), s.parents(".page").on("page:reinit", c), s.parents(".panel").on("panel:open", c), s.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast").on("modal:open", c), e.on("resize", c), s.on("click", d), s.on(e.touchEvents.start, m, $), e.on("touchmove:active", v), e.on("touchend:passive", E)
    }, t.detachEvents = function () {
      s.parents(".tab").off("tab:show", c), s.parents(".page").off("page:reinit", c), s.parents(".panel").off("panel:open", c), s.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast").off("modal:open", c), e.off("resize", c), s.off("click", d), s.off(e.touchEvents.start, m, $), e.off("touchmove:active", v), e.off("touchend:passive", E)
    }, t.init(), t
  }
  scrollListToIndex(e, a) {
    const t = this,
      {
        $listEl: n,
        $pageContentEl: s,
        app: i
      } = t;
    if (!n || !s || s.length === 0) return t;
    let o;
    if (n.find(".list-group-title").each(u => {
        if (o) return;
        const g = y(u);
        g.text() === e && (o = g)
      }), !o || o.length === 0) return t;
    const l = o.parent().offset().top;
    let c = parseInt(s.css("padding-top"), 10);
    const d = s[0].scrollTop,
      p = o.offset().top;
    if (s.parents(".page-with-navbar-large").length) {
      const u = i.navbar.getElByPage(s.parents(".page-with-navbar-large").eq(0)),
        g = y(u).find(".title-large");
      g.length && (c -= g[0].offsetHeight || 0)
    }
    return l <= c ? s.scrollTop(l + d - c) : s.scrollTop(p + d - c), t
  }
  renderSkipPlaceholder() {
    const e = this;
    return e.params.renderSkipPlaceholder.call(e)
  }
  renderItem(e, a) {
    const t = this;
    return t.params.renderItem.call(t, e, a)
  }
  render() {
    const e = this,
      {
        $ul: a,
        indexes: t,
        skipRate: n
      } = e;
    let s;
    const i = t.map((o, l) => {
      if (l % n != 0 && n > 0) return s = !0, "";
      let c = e.renderItem(o, l);
      return s && (c = e.renderSkipPlaceholder() + c), s = !1, c
    }).join("");
    return a.html(i), e
  }
  calcSize() {
    const e = this,
      {
        app: a,
        params: t,
        el: n,
        indexes: s
      } = e,
      i = n.offsetHeight,
      o = t[`${a.theme}ItemHeight`],
      l = Math.floor(i / o),
      c = s.length;
    let d = 0;
    return c > l && (d = Math.ceil((c * 2 - 1) / l)), e.height = i, e.skipRate = d, e
  }
  calcIndexes() {
    const e = this;
    return e.params.indexes === "auto" ? (e.indexes = [], e.$listEl.find(".list-group-title").each(a => {
      const t = y(a).text();
      e.indexes.indexOf(t) < 0 && e.indexes.push(t)
    })) : e.indexes = e.params.indexes, e
  }
  update() {
    const e = this;
    return e.calcIndexes(), e.calcSize(), e.render(), e
  }
  init() {
    const e = this;
    e.calcIndexes(), e.calcSize(), e.render(), e.attachEvents()
  }
  destroy() {
    let e = this;
    e.$el.trigger("listindex:beforedestroy", e), e.emit("local::beforeDestroy listIndexBeforeDestroy"), e.detachEvents(), e.$el[0] && (e.$el[0].f7ListIndex = null, delete e.$el[0].f7ListIndex), $e(e), e = null
  }
}
var Wr = ql,
  Up = {
    name: "listIndex",
    static: {
      ListIndex: Wr
    },
    create() {
      const r = this;
      r.listIndex = xe({
        defaultSelector: ".list-index",
        constructor: Wr,
        app: r,
        domProp: "f7ListIndex"
      })
    },
    on: {
      tabMounted(r) {
        const e = this;
        y(r).find(".list-index-init").each(a => {
          const t = H(y(a).dataset(), {
            el: a
          });
          e.listIndex.create(t)
        })
      },
      tabBeforeRemove(r) {
        y(r).find(".list-index-init").each(e => {
          e.f7ListIndex && e.f7ListIndex.destroy()
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".list-index-init").each(a => {
          const t = H(y(a).dataset(), {
            el: a
          });
          e.listIndex.create(t)
        })
      },
      pageBeforeRemove(r) {
        r.$el.find(".list-index-init").each(e => {
          e.f7ListIndex && e.f7ListIndex.destroy()
        })
      }
    },
    vnode: {
      "list-index-init": {
        insert(r) {
          const e = this,
            a = r.elm,
            t = H(y(a).dataset(), {
              el: a
            });
          e.listIndex.create(t)
        },
        destroy(r) {
          const e = r.elm;
          e.f7ListIndex && e.f7ListIndex.destroy()
        }
      }
    }
  },
  _p = {
    name: "timeline"
  };
const jl = {
  show() {
    const r = this;
    let e, a, t, n, s;
    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l];
    o.length === 1 && o[0] && o[0].constructor === Object ? (e = o[0].tabEl, a = o[0].tabLinkEl, t = o[0].animate, n = o[0].tabRoute, s = o[0].animatedInit) : ([e, a, t, n] = o, typeof o[1] == "boolean" && ([e, t, a, n] = o, o.length > 2 && a.constructor === Object && ([e, t, n, a] = o))), typeof t == "undefined" && (t = !0);
    const c = y(e);
    if (n && c[0] && (c[0].f7TabRoute = n), !s && (c.length === 0 || c.hasClass("tab-active"))) return {
      $newTabEl: c,
      newTabEl: c[0]
    };
    let d;
    a && (d = y(a));
    const p = c.parent(".tabs");
    if (p.length === 0) return {
      $newTabEl: c,
      newTabEl: c[0]
    };
    r.swipeout && (r.swipeout.allowOpen = !0);
    const u = [];

    function g(v) {
      u.push(v)
    }

    function h() {
      u.forEach(v => {
        v()
      })
    }
    let f = !1;
    if (p.parent().hasClass("tabs-animated-wrap")) {
      p.parent()[t ? "removeClass" : "addClass"]("not-animated");
      const v = parseFloat(p.css("transition-duration").replace(",", "."));
      t && v && (p.transitionEnd(h), f = !0);
      const E = (r.rtl ? c.index() : -c.index()) * 100;
      p.transform(`translate3d(${E}%,0,0)`)
    }
    let b;
    if (p[0].nodeName.toLowerCase() === "swiper-container" && r.swiper) {
      b = p[0].swiper;
      const v = b.slides.indexOf(c[0]);
      b && b.activeIndex !== v ? (f = !0, b.once("slideChangeTransitionEnd", () => {
        h()
      }).slideTo(v, t ? void 0 : 0)) : b && b.animating && (f = !0, b.once("slideChangeTransitionEnd", () => {
        h()
      }))
    }
    const m = p.children(".tab-active");
    if (m.removeClass("tab-active"), !s && (!b || b && !b.animating || b && n) && (m.hasClass("view") && m.children(".page").length && m.children(".page").each(v => {
        y(v).trigger("page:tabhide"), r.emit("pageTabHide", v)
      }), m.trigger("tab:hide"), r.emit("tabHide", m[0])), c.addClass("tab-active"), !s && (!b || b && !b.animating || b && n) && (c.hasClass("view") && c.children(".page").length && c.children(".page").each(v => {
        y(v).trigger("page:tabshow"), r.emit("pageTabShow", v)
      }), c.trigger("tab:show"), r.emit("tabShow", c[0])), !d && (typeof e == "string" ? d = y(`.tab-link[href="${e}"]`) : d = y(`.tab-link[href="#${c.attr("id")}"]`), (!d || d && d.length === 0) && y("[data-tab]").each(v => {
        c.is(y(v).attr("data-tab")) && (d = y(v))
      }), n && (!d || d && d.length === 0) && (d = y(`[data-route-tab-id="${n.route.tab.id}"]`), d.length === 0 && (d = y(`.tab-link[href="${n.url}"]`))), d.length > 1 && c.parents(".page").length && (d = d.filter(v => y(v).parents(".page")[0] === c.parents(".page")[0]), r.theme === "ios" && d.length === 0 && n))) {
      const v = c.parents(".page"),
        E = y(r.navbar.getElByPage(v));
      d = E.find(`[data-route-tab-id="${n.route.tab.id}"]`), d.length === 0 && (d = E.find(`.tab-link[href="${n.url}"]`))
    }
    if (d.length > 0) {
      let v;
      if (m && m.length > 0) {
        const E = m.attr("id");
        E && (v = y(`.tab-link[href="#${E}"]`), (!v || v && v.length === 0) && (v = y(`.tab-link[data-route-tab-id="${E}"]`))), (!v || v && v.length === 0) && y("[data-tab]").each($ => {
          m.is(y($).attr("data-tab")) && (v = y($))
        }), (!v || v && v.length === 0) && (v = d.siblings(".tab-link-active"))
      } else n && (v = d.siblings(".tab-link-active"));
      if (v && v.length > 1 && m && m.parents(".page").length && (v = v.filter(E => y(E).parents(".page")[0] === m.parents(".page")[0])), v && v.length > 0 && v.removeClass("tab-link-active"), d && d.length > 0) {
        d.addClass("tab-link-active");
        const E = d.parents(".tabbar, .tabbar-icons");
        r.toolbar && E.length > 0 && (E.hasClass("tabbar-highlight") || r.theme !== "ios") && r.toolbar.setHighlight(E)
      }
    }
    return {
      $newTabEl: c,
      newTabEl: c[0],
      $oldTabEl: m,
      oldTabEl: m[0],
      onTabsChanged: g,
      animated: f
    }
  }
};
var Kp = {
  name: "tabs",
  create() {
    const r = this;
    H(r, {
      tab: {
        show: jl.show.bind(r)
      }
    })
  },
  on: {
    "pageInit tabMounted": function (e) {
      const t = y(e.el || e).find(".tabs-animated-wrap > .tabs > .tab-active")[0];
      if (!t) return;
      this.tab.show({
        tabEl: t,
        animatedInit: !0,
        animate: !1
      })
    }
  },
  clicks: {
    ".tab-link": function (e, a) {
      a === void 0 && (a = {}), (e.attr("href") && e.attr("href").indexOf("#") === 0 || e.attr("data-tab")) && this.tab.show({
        tabEl: a.tab || e.attr("href"),
        tabLinkEl: e,
        animate: a.animate
      })
    }
  }
};

function Wl(r) {
  const e = r.app;
  if (r.swipeInitialized) return;
  H(r, {
    swipeable: !0,
    swipeInitialized: !0
  });
  const a = r.params,
    {
      $el: t,
      $backdropEl: n,
      side: s,
      effect: i
    } = r;
  let o, l, c, d, p, u;
  const g = {};
  let h, f, b, m, v, E, $, w = 0;

  function C(S) {
    if (!r.swipeable || c || !e.panel.allowOpen || !a.swipe && !a.swipeOnlyClose || l || y(".modal-in:not(.toast):not(.notification), .photo-browser-in").length > 0) return;
    o = e.panel.get(s === "left" ? "right" : "left") || {};
    const P = o.opened && o.$el && !o.$el.hasClass("panel-in-breakpoint");
    !r.opened && P || !a.swipeOnlyClose && P || S.target && S.target.nodeName.toLowerCase() === "input" && S.target.type === "range" || y(S.target).closest(".range-slider, swiper-container.tabs, .calendar-months, .no-swipe-panel, .card-opened").length > 0 || (g.x = S.type === "touchstart" ? S.targetTouches[0].pageX : S.pageX, g.y = S.type === "touchstart" ? S.targetTouches[0].pageY : S.pageY, !(a.swipeOnlyClose && !r.opened) && (a.swipeActiveArea && !r.opened && (s === "left" && g.x > a.swipeActiveArea || s === "right" && g.x < e.width - a.swipeActiveArea) || (w = 0, $ = y(r.getViewEl()), d = !1, l = !0, p = void 0, u = !1, h = Ae(), E = void 0)))
  }

  function x(S) {
    if (!l || c || u || (w += 1, w < 2)) return;
    if (S.f7PreventSwipePanel || e.preventSwipePanelBySwipeBack || e.preventSwipePanel) {
      l = !1;
      return
    }
    const P = S.type === "touchmove" ? S.targetTouches[0].pageX : S.pageX,
      k = S.type === "touchmove" ? S.targetTouches[0].pageY : S.pageY;
    if (typeof p == "undefined" && (p = !!(p || Math.abs(k - g.y) > Math.abs(P - g.x))), p) {
      l = !1;
      return
    }
    if (!E) {
      if (P > g.x ? E = "to-right" : E = "to-left", a.swipeActiveArea > 0 && !r.opened) {
        if (s === "left" && g.x > a.swipeActiveArea) {
          l = !1;
          return
        }
        if (s === "right" && g.x < e.width - a.swipeActiveArea) {
          l = !1;
          return
        }
      }
      if (t.hasClass("panel-in-breakpoint")) {
        l = !1;
        return
      }
      if (s === "left" && E === "to-left" && !t.hasClass("panel-in") || s === "right" && E === "to-right" && !t.hasClass("panel-in")) {
        l = !1;
        return
      }
    }
    let I = r.opened ? 0 : -a.swipeThreshold;
    s === "right" && (I = -I), d || (r.opened || (r.insertToRoot(), t.addClass("panel-in-swipe"), n && n.css("visibility", "visible"), t.trigger("panel:swipeopen"), r.emit("local::swipeOpen panelSwipeOpen", r)), v = t[0].offsetWidth, i === "reveal" && t.hasClass("panel-in-collapsed") && (v -= parseFloat($.css(`margin-${s}`))), t.transition(0)), d = !0, S.cancelable && S.preventDefault(), f = P - g.x + I;
    const R = i === "floating" ? 8 : 0;
    s === "right" ? i === "cover" || i === "push" || i === "floating" ? (b = f + (r.opened ? R : v), b < 0 - R && (b = -R), b > v && (b = v)) : (b = f - (r.opened ? v : 0), b > 0 && (b = 0), b < -v && (b = -v)) : (b = f + (r.opened ? v : R), b < 0 && (b = 0), b > v + R && (b = v + R));
    const D = Math.abs(b / v);
    if (i === "reveal") a.swipeNoFollow || ($.transform(`translate3d(${b}px,0,0)`).transition(0), n && n.transform(`translate3d(${b}px,0,0)`).transition(0)), t.trigger("panel:swipe", Math.abs(b / v)), r.emit("local::swipe panelSwipe", r, Math.abs(b / v));
    else {
      if (s === "left" && (b -= v), !a.swipeNoFollow && (m = 1 - Math.abs(b / v), n && (n.transition(0), n.css({
          opacity: m
        })), t.transform(`translate3d(${b}px,0,0)`).transition(0), i === "push")) {
        const z = s === "left" ? b + v : b - v;
        $.transform(`translate3d(${z}px,0,0)`).transition(0), n && n.transform(`translate3d(${z}px,0,0)`).transition(0)
      }
      t.trigger("panel:swipe", Math.abs(b / v)), r.emit("local::swipe panelSwipe", r, Math.abs(b / v))
    }
    a.swipeNoFollow && (r.opened && D === 0 || !r.opened && D === 1) && (u = !0, M(S))
  }

  function M(S) {
    if (!l || !d) {
      l = !1, d = !1;
      return
    }
    const P = S.type === "gesturestart" || c;
    l = !1, d = !1;
    const k = new Date().getTime() - h;
    let I;
    const R = i === "floating" ? s === "left" ? 8 : -8 : 0,
      D = (b === R || Math.abs(b) === v) && !a.swipeNoFollow,
      z = a.swipeThreshold || 0;
    P ? I = "reset" : r.opened ? i === "cover" || i === "push" || i === "floating" ? b === 0 ? I = "reset" : k < 300 && Math.abs(b) > 0 ? I = "swap" : k >= 300 && Math.abs(b) < v / 2 ? I = "reset" : I = "swap" : b === -v ? I = "reset" : k < 300 && Math.abs(b) >= 0 || k >= 300 && Math.abs(b) <= v / 2 ? s === "left" && b === v ? I = "reset" : I = "swap" : I = "reset" : Math.abs(f) < z ? I = "reset" : i === "cover" || i === "push" || i === "floating" ? b === 0 + R || k < 300 && Math.abs(b) > 0 || k >= 300 && Math.abs(b) < v / 2 ? I = "swap" : I = "reset" : b === 0 ? I = "reset" : k < 300 && Math.abs(b) > 0 || k >= 300 && Math.abs(b) >= v / 2 ? I = "swap" : I = "reset", I === "swap" && (r.opened ? r.close(!D) : r.open(!D));
    let O = !0;
    if (I === "reset" && !r.opened)
      if (D) t.removeClass("panel-in-swipe");
      else {
        O = !1;
        const L = i === "reveal" ? $ : t;
        r.setStateClasses("before-closing"), L.transitionEnd(() => {
          t.hasClass("panel-in") || (t.removeClass("panel-in-swipe"), r.setStateClasses("after-closing"))
        })
      }(i === "reveal" || i === "push") && Pe(() => {
      $.transition(""), $.transform("")
    }), O && t.removeClass("panel-in-swipe"), t.transition("").transform(""), n && n.transform("").transition("").css({
      opacity: "",
      visibility: ""
    })
  }

  function A(S) {
    c = !0, M(S)
  }

  function B() {
    c = !1
  }
  e.on("touchstart:passive", C), e.on("touchmove:active", x), e.on("touchend:passive", M), e.on("gesturestart", A), e.on("gestureend", B), r.on("panelDestroy", () => {
    e.off("touchstart:passive", C), e.off("touchmove:active", x), e.off("touchend:passive", M), e.off("gesturestart", A), e.off("gestureend", B)
  })
}

function Xl(r) {
  const e = r.app,
    a = ve();
  if (r.resizableInitialized) return;
  H(r, {
    resizable: !0,
    resizableWidth: null,
    resizableInitialized: !0
  });
  const t = y("html"),
    {
      $el: n,
      $backdropEl: s,
      side: i,
      effect: o
    } = r;
  if (!n) return;
  let l, c;
  const d = {};
  let p, u, g, h, f, b;

  function m(M) {
    if (!M) return null;
    if (M.indexOf("%") >= 0 || M.indexOf("vw") >= 0) return parseInt(M, 10) / 100 * e.width;
    const A = parseInt(M, 10);
    return Number.isNaN(A) ? null : A
  }

  function v() {
    return r.resizable && n.hasClass("panel-resizable")
  }

  function E(M) {
    !v() || (d.x = M.type === "touchstart" ? M.targetTouches[0].pageX : M.pageX, d.y = M.type === "touchstart" ? M.targetTouches[0].pageY : M.pageY, c = !1, l = !0, h = m(n.css("min-width")), f = m(n.css("max-width")), b = n.hasClass("panel-in-breakpoint"))
  }

  function $(M) {
    if (!l) return;
    const A = M.type === "touchmove" ? M.targetTouches[0].pageX : M.pageX;
    c || (u = n[0].offsetWidth, n.transition(0), n.addClass("panel-resizing"), t.css("cursor", "col-resize"), (o !== "cover" || b) && (g = y(r.getViewEl()), r.$containerEl && r.$containerEl.hasClass("page") && g.add(r.$containerEl.children(".page-content, .tabs, .fab"))), o !== "cover" && !b && (s.transition(0), g.transition(0))), c = !0, M.preventDefault(), p = A - d.x;
    let B = i === "left" ? u + p : u - p;
    h && !Number.isNaN(h) && (B = Math.max(B, h)), f && !Number.isNaN(f) && (B = Math.min(B, f)), B = Math.min(Math.max(B, 0), e.width), r.resizableWidth = B, n[0].style.width = `${B}px`, o !== "cover" && !b ? (g && g.transform(`translate3d(${i==="left"?B:-B}px, 0, 0)`), s && s.transform(`translate3d(${i==="left"?B:-B}px, 0, 0)`)) : b && g && g.css(`margin-${i}`, `${B}px`), n.trigger("panel:resize", B), r.emit("local::resize panelResize", r, B)
  }

  function w() {
    if (y("html").css("cursor", ""), !l || !c) {
      l = !1, c = !1;
      return
    }
    l = !1, c = !1, t[0].style.setProperty(`--f7-panel-${i}-width`, `${r.resizableWidth}px`), n[0].style.width = "", o !== "cover" && !b && (g.transform(""), s.transform("")), n.removeClass("panel-resizing"), Pe(() => {
      n.transition(""), o !== "cover" && (s.transition(""), g && g.transition(""))
    })
  }

  function C() {
    !r.opened || !r.resizableWidth || (h = m(n.css("min-width")), f = m(n.css("max-width")), h && !Number.isNaN(h) && r.resizableWidth < h && (r.resizableWidth = Math.max(r.resizableWidth, h)), f && !Number.isNaN(f) && r.resizableWidth > f && (r.resizableWidth = Math.min(r.resizableWidth, f)), r.resizableWidth = Math.min(Math.max(r.resizableWidth, 0), e.width), t[0].style.setProperty(`--f7-panel-${i}-width`, `${r.resizableWidth}px`))
  }
  r.$el.find(".panel-resize-handler").length === 0 && r.$el.append('<div class="panel-resize-handler"></div>'), r.$resizeHandlerEl = r.$el.children(".panel-resize-handler"), n.addClass("panel-resizable");
  const x = a.passiveListener ? {
    passive: !0
  } : !1;
  r.$el.on(e.touchEvents.start, ".panel-resize-handler", E, x), e.on("touchmove:active", $), e.on("touchend:passive", w), e.on("resize", C), r.on("beforeOpen", C), r.once("panelDestroy", () => {
    n.removeClass("panel-resizable"), r.$resizeHandlerEl.remove(), r.$el.off(e.touchEvents.start, ".panel-resize-handler", E, x), e.off("touchmove:active", $), e.off("touchend:passive", w), e.off("resize", C), r.off("beforeOpen", C)
  })
}
class Gl extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    const t = H({
      on: {}
    }, e.params.panel, a);
    super(t, [e]);
    const n = this;
    n.params = t, n.$containerEl = n.params.containerEl ? y(n.params.containerEl).eq(0) : e.$el, n.containerEl = n.$containerEl[0], n.containerEl || (n.$containerEl = e.$el, n.containerEl = e.$el[0]);
    let s;
    if (n.params.el ? s = y(n.params.el).eq(0) : n.params.content && (s = y(n.params.content).filter(d => d.nodeType === 1).eq(0)), s.length === 0) return n;
    if (s[0].f7Panel) return s[0].f7Panel;
    s[0].f7Panel = n;
    let {
      side: i,
      effect: o,
      resizable: l
    } = n.params;
    typeof i == "undefined" && (i = s.hasClass("panel-left") ? "left" : "right"), typeof o == "undefined" && (o = s.hasClass("panel-cover") ? "cover" : s.hasClass("panel-push") ? "push" : s.hasClass("panel-floating") ? "floating" : "reveal"), typeof l == "undefined" && (l = s.hasClass("panel-resizable"));
    let c;
    return n.params.backdrop && n.params.backdropEl ? c = y(n.params.backdropEl) : n.params.backdrop && (c = n.$containerEl.children(".panel-backdrop"), c.length === 0 && (c = y('<div class="panel-backdrop"></div>'), n.$containerEl.prepend(c))), H(n, {
      app: e,
      side: i,
      effect: o,
      resizable: l,
      $el: s,
      el: s[0],
      opened: !1,
      $backdropEl: c,
      backdropEl: c && c[0]
    }), n.useModules(), n.init(), n
  }
  getViewEl() {
    const e = this;
    let a;
    return e.$containerEl.children(".views").length > 0 ? a = e.$containerEl.children(".views")[0] : a = e.$containerEl.children(".view")[0], a
  }
  setStateClasses(e) {
    const a = this,
      {
        side: t,
        el: n,
        effect: s
      } = a,
      i = a.getViewEl(),
      o = i && i.contains(n),
      l = !i || o ? a.$containerEl : y("html");
    e === "open" && l.addClass(`with-panel with-panel-${a.side}-${a.effect}`), e === "before-closing" && l.addClass("with-panel-closing"), e === "closing" && (l.addClass("with-panel-closing"), l.removeClass(`with-panel with-panel-${a.side}-${a.effect}`)), e === "after-closing" && l.removeClass("with-panel-closing"), e === "closed" && l.removeClass(`with-panel-${t}-${s}`)
  }
  enableVisibleBreakpoint() {
    const e = this;
    return e.visibleBreakpointDisabled = !1, e.setVisibleBreakpoint(), e
  }
  disableVisibleBreakpoint() {
    const e = this;
    return e.visibleBreakpointDisabled = !0, e.setVisibleBreakpoint(), e
  }
  toggleVisibleBreakpoint() {
    const e = this;
    return e.visibleBreakpointDisabled = !e.visibleBreakpointDisabled, e.setVisibleBreakpoint(), e
  }
  setVisibleBreakpoint(e) {
    e === void 0 && (e = !0);
    const a = this,
      t = a.app;
    a.visibleBreakpointResizeHandler || (a.visibleBreakpointResizeHandler = function () {
      a.setVisibleBreakpoint()
    }, t.on("resize", a.visibleBreakpointResizeHandler));
    const {
      side: n,
      $el: s,
      $containerEl: i,
      params: o,
      visibleBreakpointDisabled: l
    } = a, c = o.visibleBreakpoint, d = y(a.getViewEl()), p = s.hasClass("panel-in-breakpoint");
    i && i.hasClass("page") && d.add(i.children(".page-content, .tabs, .fab")), t.width >= c && typeof c != "undefined" && c !== null && !l ? p ? d.css({
      [`margin-${n}`]: `${s.width()}px`
    }) : (a.setStateClasses("closed"), s.addClass("panel-in-breakpoint").removeClass("panel-in panel-in-collapsed"), a.onOpen(!1), a.onOpened(), d.css({
      [`margin-${n}`]: `${s.width()}px`
    }), t.allowPanelOpen = !0, e && (a.emit("local::breakpoint panelBreakpoint", a), a.$el.trigger("panel:breakpoint"))) : p && (s.removeClass("panel-in-breakpoint panel-in"), a.onClose(), a.onClosed(), d.css({
      [`margin-${n}`]: ""
    }), e && (a.emit("local::breakpoint panelBreakpoint", a), a.$el.trigger("panel:breakpoint")))
  }
  enableCollapsedBreakpoint() {
    const e = this;
    return e.collapsedBreakpointDisabled = !1, e.setCollapsedBreakpoint(), e
  }
  disableCollapsedBreakpoint() {
    const e = this;
    return e.collapsedBreakpointDisabled = !0, e.setCollapsedBreakpoint(), e
  }
  toggleCollapsedBreakpoint() {
    const e = this;
    return e.collapsedBreakpointDisabled = !e.collapsedBreakpointDisabled, e.setCollapsedBreakpoint(), e
  }
  setCollapsedBreakpoint(e) {
    e === void 0 && (e = !0);
    const a = this,
      t = a.app;
    a.collapsedBreakpointResizeHandler || (a.collapsedBreakpointResizeHandler = function () {
      a.setCollapsedBreakpoint()
    }, t.on("resize", a.collapsedBreakpointResizeHandler));
    const {
      $el: n,
      params: s,
      collapsedBreakpointDisabled: i
    } = a;
    if (n.hasClass("panel-in-breakpoint")) return;
    const o = s.collapsedBreakpoint,
      l = n.hasClass("panel-in-collapsed");
    t.width >= o && typeof o != "undefined" && o !== null && !i ? l || (a.setStateClasses("closed"), n.addClass("panel-in-collapsed").removeClass("panel-in"), a.collapsed = !0, t.allowPanelOpen = !0, e && (a.emit("local::collapsedBreakpoint panelCollapsedBreakpoint", a), a.$el.trigger("panel:collapsedbreakpoint"))) : l && (n.removeClass("panel-in-collapsed panel-in"), a.collapsed = !1, e && (a.emit("local::collapsedBreakpoint panelCollapsedBreakpoint", a), a.$el.trigger("panel:collapsedbreakpoint")))
  }
  enableResizable() {
    const e = this;
    return e.resizableInitialized ? (e.resizable = !0, e.$el.addClass("panel-resizable")) : Xl(e), e
  }
  disableResizable() {
    const e = this;
    return e.resizable = !1, e.$el.removeClass("panel-resizable"), e
  }
  enableSwipe() {
    const e = this;
    return e.swipeInitialized ? e.swipeable = !0 : Wl(e), e
  }
  disableSwipe() {
    const e = this;
    return e.swipeable = !1, e
  }
  onOpen(e) {
    e === void 0 && (e = !0);
    const a = this;
    a._openTransitionStarted = !1;
    const t = a.app;
    a.opened = !0, t.panel.allowOpen = !1, a.$el.trigger("panel:beforeopen"), a.emit("local::beforeOpen panelBeforeOpen", a), e && a.setStateClasses("open"), a.$el.trigger("panel:open"), a.emit("local::open panelOpen", a)
  }
  onOpened() {
    const e = this,
      a = e.app;
    a.panel.allowOpen = !0, e.$el.trigger("panel:opened"), e.emit("local::opened panelOpened", e)
  }
  onClose() {
    const e = this,
      a = e.app;
    e.opened = !1, a.panel.allowOpen = !1, e.$el.trigger("panel:beforeclose"), e.emit("local::beforeClose panelBeforeClose", e), e.setStateClasses("closing"), e.$el.trigger("panel:close"), e.emit("local::close panelClose", e)
  }
  onClosed() {
    const e = this,
      a = e.app;
    if (a.panel.allowOpen = !0, e.setStateClasses("after-closing"), e.$el.removeClass("panel-out"), e.$backdropEl) {
      const t = a.panel.get(".panel-in");
      (!t || t && !t.$backdropEl) && e.$backdropEl.removeClass("panel-backdrop-in")
    }
    e.$el.trigger("panel:closed"), e.emit("local::closed panelClosed", e)
  }
  toggle(e) {
    e === void 0 && (e = !0);
    const a = this,
      t = a.params.visibleBreakpoint;
    return a.app.width >= t && typeof t != "undefined" && t !== null ? a.toggleVisibleBreakpoint() : (a.opened ? a.close(e) : a.open(e), a)
  }
  insertToRoot() {
    const e = this,
      a = ee(),
      {
        $el: t,
        $backdropEl: n,
        $containerEl: s
      } = e,
      i = t.parent(),
      o = t.parents(a).length > 0;
    if (!i.is(s) || t.prevAll(".views, .view").length) {
      const l = s.children(".panel, .views, .view").eq(0),
        c = s.children(".panel-backdrop").eq(0);
      l.length ? t.insertBefore(l) : c ? t.insertBefore(c) : s.prepend(t), n && n.length && (!n.parent().is(s) && n.nextAll(".panel").length === 0 || n.parent().is(s) && n.nextAll(".panel").length === 0) && n.insertBefore(t), e.once("panelClosed", () => {
        o ? i.append(t) : t.remove()
      })
    }
  }
  open(e) {
    e === void 0 && (e = !0);
    const a = this,
      t = a.app;
    if (!t.panel.allowOpen) return !1;
    const {
      effect: n,
      $el: s,
      $backdropEl: i,
      opened: o,
      $containerEl: l
    } = a;
    if (!s || s.hasClass("panel-in")) return a;
    if (a.insertToRoot(), o || s.hasClass("panel-in-breakpoint") || s.hasClass("panel-in")) return !1;
    const c = t.panel.get(".panel-in");
    c && c !== a && c.close(e), s[e ? "removeClass" : "addClass"]("not-animated"), s.addClass("panel-in"), i && (i.addClass("panel-backdrop-in"), i[e ? "removeClass" : "addClass"]("not-animated")), ["cover", "push", "floating"].includes(a.effect) && (a._clientLeft = s[0].clientLeft);
    const d = y(a.getViewEl());
    l && l.hasClass("page") && d.add(l.children(".page-content, .tabs"));
    const p = n === "reveal" ? d : s;

    function u() {
      p.transitionStart(() => {
        a._openTransitionStarted = !0
      })
    }

    function g() {
      p.transitionEnd(h => {
        y(h.target).is(p) ? s.hasClass("panel-out") ? a.onClosed() : a.onOpened() : g()
      })
    }
    return e ? (i && i.removeClass("not-animated"), u(), g(), s.removeClass("panel-out not-animated").addClass("panel-in"), a.onOpen()) : (i && i.addClass("not-animated"), s.removeClass("panel-out").addClass("panel-in not-animated"), a.onOpen(), a.onOpened()), !0
  }
  close(e) {
    e === void 0 && (e = !0);
    const a = this,
      {
        effect: t,
        $el: n,
        $backdropEl: s,
        opened: i,
        $containerEl: o
      } = a;
    if (!i || n.hasClass("panel-in-breakpoint") || !n.hasClass("panel-in")) return a;
    n[e ? "removeClass" : "addClass"]("not-animated"), s && s[e ? "removeClass" : "addClass"]("not-animated");
    const l = y(a.getViewEl());
    o && o.hasClass("page") && l.add(o.children(".page-content, .tabs"));
    const c = t === "reveal" ? l : n;
    a._openTransitionStarted || (e = !1);

    function d() {
      n.hasClass("panel-out") ? a.onClosed() : n.hasClass("panel-in") && a.onOpened(), a.setStateClasses("after-closing")
    }
    return e ? (c.transitionEnd(() => {
      d()
    }), n.removeClass("panel-in").addClass("panel-out"), a.onClose()) : (n.addClass("not-animated").removeClass("panel-in").addClass("panel-out"), a.onClose(), a.onClosed()), a
  }
  init() {
    const e = this;
    typeof e.params.visibleBreakpoint != "undefined" && e.setVisibleBreakpoint(), typeof e.params.collapsedBreakpoint != "undefined" && e.setCollapsedBreakpoint(), e.params.swipe && e.enableSwipe(), e.resizable && e.enableResizable()
  }
  destroy() {
    let e = this;
    const a = e.app,
      {
        $containerEl: t
      } = e;
    if (!!e.$el) {
      if (e.emit("local::beforeDestroy panelBeforeDestroy", e), e.$el.trigger("panel:beforedestroy"), e.visibleBreakpointResizeHandler && a.off("resize", e.visibleBreakpointResizeHandler), e.collapsedBreakpointResizeHandler && a.off("resize", e.collapsedBreakpointResizeHandler), e.$el.hasClass("panel-in-breakpoint") || e.$el.hasClass("panel-in-collapsed")) {
        const n = y(e.getViewEl());
        t && t.hasClass("page") && n.add(t.children(".page-content, .tabs")), e.$el.removeClass("panel-in-breakpoint panel-in-collapsed panel-in"), n.css({
          [`margin-${e.side}`]: ""
        }), e.emit("local::breakpoint panelBreakpoint", e), e.$el.trigger("panel:breakpoint")
      }
      e.$el.trigger("panel:destroy"), e.emit("local::destroy panelDestroy", e), e.el && (e.el.f7Panel = null, delete e.el.f7Panel), $e(e), e = null
    }
  }
}
var Ba = Gl,
  Qp = {
    name: "panel",
    params: {
      panel: {
        opened: void 0,
        side: void 0,
        effect: void 0,
        resizable: void 0,
        backdrop: !0,
        backdropEl: void 0,
        visibleBreakpoint: void 0,
        collapsedBreakpoint: void 0,
        swipe: !1,
        swipeNoFollow: !1,
        swipeOnlyClose: !1,
        swipeActiveArea: 0,
        swipeThreshold: 0,
        closeByBackdropClick: !0,
        containerEl: void 0
      }
    },
    static: {
      Panel: Ba
    },
    create() {
      const r = this;
      H(r, {
        panel: {
          allowOpen: !0,
          create(e) {
            return new Ba(r, e)
          },
          get(e) {
            if (e === void 0 && (e = ".panel"), e instanceof Ba) return e;
            (e === "left" || e === "right") && (e = `.panel-${e}`);
            const a = y(e);
            if (!(a.length === 0 || a.length > 1)) return a[0].f7Panel
          },
          destroy(e) {
            e === void 0 && (e = ".panel");
            const a = r.panel.get(e);
            if (a && a.destroy) return a.destroy()
          },
          open(e, a) {
            e === void 0 && (e = ".panel"), (e === "left" || e === "right") && (e = `.panel-${e}`);
            let t = r.panel.get(e);
            if (t && t.open) return t.open(a);
            if (!t) return t = r.panel.create({
              el: e
            }), t.open(a)
          },
          close(e, a) {
            e === void 0 && (e = ".panel-in"), (e === "left" || e === "right") && (e = `.panel-${e}`);
            let t = r.panel.get(e);
            if (t && t.open) return t.close(a);
            if (!t) return t = r.panel.create({
              el: e
            }), t.close(a)
          },
          toggle(e, a) {
            e === void 0 && (e = ".panel"), (e === "left" || e === "right") && (e = `.panel-${e}`);
            let t = r.panel.get(e);
            if (t && t.toggle) return t.toggle(a);
            if (!t) return t = r.panel.create({
              el: e
            }), t.toggle(a)
          }
        }
      })
    },
    on: {
      init() {
        const r = this;
        y(".panel-init").each(e => {
          const a = Object.assign({
            el: e
          }, y(e).dataset() || {});
          r.panel.create(a)
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".panel-init").each(a => {
          const t = Object.assign({
            el: a
          }, y(a).dataset() || {});
          e.panel.create(t)
        })
      },
      pageBeforeRemove(r) {
        const e = this;
        r.$el.find(".panel-init").each(a => {
          const t = e.panel.get(a);
          t && t.destroy && t.destroy()
        })
      }
    },
    vnode: {
      "panel-init": {
        insert(r) {
          const e = this,
            a = r.elm,
            t = Object.assign({
              el: a
            }, y(a).dataset() || {});
          e.panel.create(t)
        },
        destroy(r) {
          const e = this,
            a = r.elm,
            t = e.panel.get(a);
          t && t.destroy && t.destroy()
        }
      }
    },
    clicks: {
      ".panel-open": function (e, a) {
        a === void 0 && (a = {}), this.panel.open(a.panel, a.animate)
      },
      ".panel-close": function (e, a) {
        a === void 0 && (a = {}), this.panel.close(a.panel, a.animate)
      },
      ".panel-toggle": function (e, a) {
        a === void 0 && (a = {}), this.panel.toggle(a.panel, a.animate)
      },
      ".panel-backdrop": function () {
        const e = this,
          a = y(".panel-in:not(.panel-out)");
        if (!a.length) return;
        const t = a[0] && a[0].f7Panel;
        a.trigger("panel:backdrop-click"), t && t.emit("backdropClick", t), e.emit("panelBackdropClick", t || a[0]), !(t && t.params.closeByBackdropClick === !1) && e.params.panel.closeByBackdropClick && e.panel.close()
      }
    }
  };
const Ul = {
  open(r, e) {
    r === void 0 && (r = ".card-expandable"), e === void 0 && (e = !0);
    const a = this,
      t = ue(),
      n = ee(),
      s = ve(),
      i = y(r).eq(0);
    if (!i || !i.length || i.hasClass("card-opened") || i.hasClass("card-opening") || i.hasClass("card-closing")) return;
    const o = i.parents(".page").eq(0);
    if (!o.length || o.find(".card-opened").length) return;
    let l;

    function c() {
      l = !0
    }
    if (i.trigger("card:beforeopen", {
        prevent: c
      }), a.emit("cardBeforeOpen", i[0], c), l) return;
    const d = Object.assign({
        animate: e
      }, a.params.card, i.dataset()),
      p = i.parents(".page-content");
    let u;
    i.attr("data-backdrop-el") && (u = y(i.attr("data-backdrop-el"))), !u && d.backdrop && (u = p.find(".card-backdrop"), u.length || (u = y('<div class="card-backdrop"></div>'), p.append(u)));
    let g, h;
    d.hideNavbarOnOpen && (g = o.children(".navbar"), g.length || o[0].f7Page && (g = o[0].f7Page.$navbarEl)), d.hideToolbarOnOpen && (h = o.children(".toolbar"), h.length || (h = o.parents(".view").children(".toolbar")), h.length || (h = o.parents(".views").children(".toolbar")));
    const f = i.css("transform");
    let b;
    f && f.match(/[2-9]/) && (b = !0);
    const m = i.children(".card-content"),
      v = y(n.createElement("div")).addClass("card-expandable-size");
    i.append(v);
    let E = i[0].offsetWidth,
      $ = i[0].offsetHeight,
      w = o[0].offsetWidth,
      C = o[0].offsetHeight,
      x = v[0].offsetWidth || w,
      M = v[0].offsetHeight || C,
      A;
    g && !d.hideStatusbarOnOpen && M === C && (A = parseInt(g.css("--f7-safe-area-top"), 10), Number.isNaN(A) && (A = 0)), A && (M -= A);
    let B = x / E,
      S = M / $,
      P = i.offset(),
      k = o.offset();
    A && (k.top += A / 2), P.left -= k.left;
    let I, R;
    if (b) {
      const de = f.replace(/matrix\(|\)/g, "").split(",").map(le => le.trim());
      if (de && de.length > 1) {
        const le = parseFloat(de[0]);
        I = P.left - E * (1 - le) / 2, R = P.top - k.top - $ * (1 - le) / 2, a.rtl && (I -= i[0].scrollLeft)
      } else I = i[0].offsetLeft, R = i[0].offsetTop - (p.length ? p[0].scrollTop : 0)
    } else I = P.left, R = P.top - k.top, a.rtl && (I -= i[0].scrollLeft);
    I -= (w - x) / 2, R -= (C - M) / 2;
    let D = x - E - I;
    a.rtl && ([I, D] = [D, I]);
    let z = M - $ - R,
      O = (D - I) / 2,
      L = (z - R) / 2;
    d.hideNavbarOnOpen && g && g.length && (g.closest(".navbar-hidden").length ? i[0].f7KeepNavbarOnClose = !0 : (delete i[0].f7KeepNavbarOnClose, a.navbar.hide(g, d.animate, d.hideStatusbarOnOpen, !0))), d.hideToolbarOnOpen && h && h.length && (h.closest(".toolbar-hidden").length ? i[0].f7KeepToolbarOnClose = !0 : (delete i[0].f7KeepToolbarOnClose, a.toolbar.hide(h, d.animate))), u && u.removeClass("card-backdrop-out").addClass("card-backdrop-in"), i.removeClass("card-transitioning"), d.animate && i.addClass("card-opening"), i.trigger("card:open"), a.emit("cardOpen", i[0]);

    function N() {
      o.addClass("page-with-card-opened"), t.ios && p.length && (p.css("height", `${p[0].offsetHeight+1}px`), setTimeout(() => {
        p.css("height", "")
      })), i.addClass("card-opened"), i.removeClass("card-opening"), i.trigger("card:opened"), a.emit("cardOpened", i[0], o[0])
    }
    m.css({
      width: `${x}px`,
      height: `${M}px`
    }).transform(`translate3d(${a.rtl?I+O:-I-O}px, 0px, 0) scale(${1/B}, ${1/S})`), i.transform(`translate3d(${a.rtl?-O:O}px, ${L}px, 0) scale(${B}, ${S})`), d.animate ? i.transitionEnd(() => {
      N()
    }) : N();

    function F() {
      i.removeClass("card-transitioning"), E = i[0].offsetWidth, $ = i[0].offsetHeight, w = o[0].offsetWidth, C = o[0].offsetHeight, x = v[0].offsetWidth || w, M = v[0].offsetHeight || C, A = 0, g && !d.hideStatusbarOnOpen && M === C && (A = parseInt(g.css("--f7-safe-area-top"), 10), Number.isNaN(A) && (A = 0)), A && (M -= A), B = x / E, S = M / $, i.transform("translate3d(0px, 0px, 0) scale(1)"), P = i.offset(), k = o.offset(), A && (k.top += A / 2), P.left -= k.left, P.top -= k.top, I = P.left - (w - x) / 2, a.rtl && (I -= i[0].scrollLeft), R = P.top - (C - M) / 2, D = x - E - I, z = M - $ - R, a.rtl && ([I, D] = [D, I]), O = (D - I) / 2, L = (z - R) / 2, i.transform(`translate3d(${a.rtl?-O:O}px, ${L}px, 0) scale(${B}, ${S})`), m.css({
        width: `${x}px`,
        height: `${M}px`
      }).transform(`translate3d(${a.rtl?I+O:-I-O}px, 0px, 0) scale(${1/B}, ${1/S})`)
    }
    let V, U, Z, J, X, Y, W, K, j, _, Q, se;

    function me(de) {
      !y(de.target).closest(i).length || !i.hasClass("card-opened") || (se = i.find(d.scrollableEl), se[0] && se[0] !== m[0] && !se[0].contains(de.target) ? V = 0 : V = se.scrollTop(), U = !0, J = de.targetTouches[0].pageX, X = de.targetTouches[0].pageY, K = void 0, _ = !1, Q = !1)
    }

    function te(de) {
      if (!!U) {
        if (Y = de.targetTouches[0].pageX, W = de.targetTouches[0].pageY, typeof K == "undefined" && (K = !!(K || Math.abs(W - X) > Math.abs(Y - J))), !Q && !_ && (!K && de.targetTouches[0].clientX <= 50 ? Q = !0 : _ = !0), !(Q || _) || _ && V !== 0) {
          U = !0, Z = !0;
          return
        }
        Z || i.removeClass("card-transitioning"), Z = !0, j = Math.max(_ ? (W - X) / 150 : (Y - J) / (E / 2), 0), (j > 0 && _ || Q) && (_ && t.ios && se[0] === m[0] && (se.css("-webkit-overflow-scrolling", "auto"), se.scrollTop(0)), de.preventDefault()), j > 1 && (j **= .3), j > (_ ? 1.3 : 1.1) ? (U = !1, Z = !1, a.card.close(i)) : i.transform(`translate3d(${a.rtl?-O:O}px, ${L}px, 0) scale(${B*(1-j*.2)}, ${S*(1-j*.2)})`)
      }
    }

    function oe() {
      !U || !Z || (U = !1, Z = !1, t.ios && se.css("-webkit-overflow-scrolling", ""), j >= .8 ? a.card.close(i) : i.addClass("card-transitioning").transform(`translate3d(${a.rtl?-O:O}px, ${L}px, 0) scale(${B}, ${S})`))
    }
    i[0].detachEventHandlers = function () {
      a.off("resize", F), s.touch && d.swipeToClose && (a.off("touchstart:passive", me), a.off("touchmove:active", te), a.off("touchend:passive", oe))
    }, a.on("resize", F), s.touch && d.swipeToClose && (a.on("touchstart:passive", me), a.on("touchmove:active", te), a.on("touchend:passive", oe))
  },
  close(r, e) {
    r === void 0 && (r = ".card-expandable.card-opened"), e === void 0 && (e = !0);
    const a = this,
      t = ue(),
      n = y(r).eq(0);
    if (!n || !n.length || !n.hasClass("card-opened") || n.hasClass("card-opening") || n.hasClass("card-closing")) return;
    const s = n.children(".card-content"),
      i = n.parents(".page-content"),
      o = n.parents(".page").eq(0);
    if (!o.length) return;
    const l = Object.assign({
        animate: e
      }, a.params.card, n.dataset()),
      c = n.find(l.scrollableEl);
    let d, p, u;
    n.attr("data-backdrop-el") && (u = y(n.attr("data-backdrop-el"))), l.backdrop && (u = n.parents(".page-content").find(".card-backdrop")), l.hideNavbarOnOpen && (d = o.children(".navbar"), d.length || o[0].f7Page && (d = o[0].f7Page.$navbarEl), d && d.length && !n[0].f7KeepNavbarOnClose && a.navbar.show(d, l.animate, !0)), l.hideToolbarOnOpen && (p = o.children(".toolbar"), p.length || (p = o.parents(".view").children(".toolbar")), p.length || (p = o.parents(".views").children(".toolbar")), p && p.length && !n[0].f7KeepToolbarOnClose && a.toolbar.show(p, l.animate)), o.removeClass("page-with-card-opened"), t.ios && i.length && (i.css("height", `${i[0].offsetHeight+1}px`), setTimeout(() => {
      i.css("height", "")
    })), u && u.length && u.removeClass("card-backdrop-in").addClass("card-backdrop-out"), n.removeClass("card-opened card-transitioning"), l.animate ? n.addClass("card-closing") : n.addClass("card-no-transition"), n.transform(""), n.trigger("card:close"), a.emit("cardClose", n[0], o[0]);
    const g = n.hasClass("card-expandable-animate-width");

    function h() {
      g || s.css({
        width: "",
        height: ""
      }), u && u.length && u.removeClass("card-backdrop-in card-backdrop-out"), n.removeClass("card-closing card-no-transition"), n.trigger("card:closed"), n.find(".card-expandable-size").remove(), a.emit("cardClosed", n[0], o[0])
    }
    g && s.css({
      width: "",
      height: ""
    }), s.transform("").scrollTop(0, e ? 300 : 0), c.length && c[0] !== s[0] && c.scrollTop(0, e ? 300 : 0), e ? s.transitionEnd(() => {
      h()
    }) : h(), n[0].detachEventHandlers && (n[0].detachEventHandlers(), delete n[0].detachEventHandlers)
  },
  toggle(r, e) {
    r === void 0 && (r = ".card-expandable");
    const a = this,
      t = y(r).eq(0);
    !t.length || (t.hasClass("card-opened") ? a.card.close(t, e) : a.card.open(t, e))
  }
};
var Zp = {
    name: "card",
    params: {
      card: {
        hideNavbarOnOpen: !0,
        hideStatusbarOnOpen: !0,
        hideToolbarOnOpen: !0,
        scrollableEl: ".card-content",
        swipeToClose: !0,
        closeByBackdropClick: !0,
        backdrop: !0
      }
    },
    create() {
      Ie(this, {
        card: Ul
      })
    },
    on: {
      pageBeforeIn(r) {
        const e = this;
        if (e.params.card.hideNavbarOnOpen && r.navbarEl && r.$el.find(".card-opened.card-expandable").length && e.navbar.hide(r.navbarEl, !0, e.params.card.hideStatusbarOnOpen, !0), e.params.card.hideToolbarOnOpen && r.$el.find(".card-opened.card-expandable").length) {
          let a = r.$el.children(".toolbar");
          a.length || (a = r.$el.parents(".view").children(".toolbar")), a.length || (a = r.$el.parents(".views").children(".toolbar")), a && a.length && e.toolbar.hide(a)
        }
      }
    },
    clicks: {
      ".card-close": function (e, a) {
        this.card.close(a.card, a.animate)
      },
      ".card-open": function (e, a) {
        this.card.open(a.card, a.animate)
      },
      ".card-expandable": function (e, a, t) {
        const n = this;
        e.hasClass("card-opened") || e.hasClass("card-opening") || e.hasClass("card-closing") || y(t.target).closest(".card-prevent-open, .card-close").length || n.card.open(e)
      },
      ".card-backdrop-in": function () {
        const e = this;
        let a = !1;
        e.params.card.closeByBackdropClick && (a = !0);
        const t = y(".card-opened");
        !t.length || (t.attr("data-close-by-backdrop-click") === "true" ? a = !0 : t.attr("data-close-by-backdrop-click") === "false" && (a = !1), a && e.card.close(t))
      }
    }
  },
  Jp = {
    name: "chip"
  };
const Da = {
    store(r, e) {
      const a = this,
        t = G();
      let n = r;
      const s = y(r);
      s.length && s.is("form") && s.attr("id") && (n = s.attr("id")), a.form.data[`form-${n}`] = e, t.localStorage[`f7form-${n}`] = JSON.stringify(e)
    },
    get(r) {
      const e = this,
        a = G();
      let t = r;
      const n = y(r);
      if (n.length && n.is("form") && n.attr("id") && (t = n.attr("id")), a.localStorage[`f7form-${t}`]) return JSON.parse(a.localStorage[`f7form-${t}`]);
      if (e.form.data[`form-${t}`]) return e.form.data[`form-${t}`]
    },
    remove(r) {
      const e = this,
        a = G();
      let t = r;
      const n = y(r);
      n.length && n.is("form") && n.attr("id") && (t = n.attr("id")), e.form.data[`form-${t}`] && (e.form.data[`form-${t}`] = "", delete e.form.data[`form-${t}`]), a.localStorage[`f7form-${t}`] && (a.localStorage[`f7form-${t}`] = "", a.localStorage.removeItem(`f7form-${t}`))
    }
  },
  Xr = {
    init(r) {
      const e = this,
        a = y(r),
        t = a.attr("id");
      if (!t) return;
      const n = e.form.getFormData(t);
      n && e.form.fillFromData(a, n);

      function s() {
        const i = e.form.convertToData(a);
        !i || (e.form.storeFormData(t, i), a.trigger("form:storedata", i), e.emit("formStoreData", a[0], i))
      }
      a.on("change submit", s)
    },
    destroy(r) {
      y(r).off("change submit")
    }
  };

function _l(r) {
  const e = this,
    a = y(r).eq(0);
  if (a.length === 0) return;
  const t = {},
    n = ["submit", "image", "button", "file"],
    s = [];
  return a.find("input, select, textarea").each(i => {
    const o = y(i);
    if (o.hasClass("ignore-store-data") || o.hasClass("no-store-data")) return;
    const l = o.attr("name"),
      c = o.attr("type"),
      d = i.nodeName.toLowerCase();
    if (!(n.indexOf(c) >= 0) && !(s.indexOf(l) >= 0 || !l))
      if (d === "select" && o.prop("multiple")) s.push(l), t[l] = [], a.find(`select[name="${l}"] option`).each(p => {
        p.selected && t[l].push(p.value)
      });
      else switch (c) {
        case "checkbox":
          s.push(l), t[l] = [], a.find(`input[name="${l}"]`).each(p => {
            p.checked && t[l].push(p.value)
          });
          break;
        case "radio":
          s.push(l), a.find(`input[name="${l}"]`).each(p => {
            p.checked && (t[l] = p.value)
          });
          break;
        default:
          t[l] = o.val();
          break
      }
  }), a.trigger("form:todata", t), e.emit("formToData", a[0], t), t
}

function Kl(r, e) {
  const a = this,
    t = y(r).eq(0);
  if (!t.length) return;
  let n = e;
  const s = t.attr("id");
  if (!n && s && (n = a.form.getFormData(s)), !n) return;
  const i = ["submit", "image", "button", "file"],
    o = [];
  t.find("input, select, textarea").each(l => {
    const c = y(l);
    if (c.hasClass("ignore-store-data") || c.hasClass("no-store-data")) return;
    const d = c.attr("name"),
      p = c.attr("type"),
      u = l.nodeName.toLowerCase();
    if (!(typeof n[d] == "undefined" || n[d] === null) && !(i.indexOf(p) >= 0) && !(o.indexOf(d) >= 0 || !d)) {
      if (u === "select" && c.prop("multiple")) o.push(d), t.find(`select[name="${d}"] option`).each(g => {
        const h = g;
        n[d].indexOf(g.value) >= 0 ? h.selected = !0 : h.selected = !1
      });
      else switch (p) {
        case "checkbox":
          o.push(d), t.find(`input[name="${d}"]`).each(g => {
            const h = g;
            n[d].indexOf(g.value) >= 0 ? h.checked = !0 : h.checked = !1
          });
          break;
        case "radio":
          o.push(d), t.find(`input[name="${d}"]`).each(g => {
            const h = g;
            n[d] === g.value ? h.checked = !0 : h.checked = !1
          });
          break;
        default:
          c.val(n[d]);
          break
      }(u === "select" || u === "input" || u === "textarea") && c.trigger("change", "fromdata")
    }
  }), t.trigger("form:fromdata", n), a.emit("formFromData", t[0], n)
}

function Ql() {
  const r = this,
    e = G(),
    a = ee();

  function t(n, s) {
    const i = y(this);
    if (n.type === "change" && !i.hasClass("form-ajax-submit-onchange") || (n.type === "submit" && n.preventDefault(), n.type === "change" && s === "fromdata")) return;
    const o = (i.attr("method") || "GET").toUpperCase(),
      l = i.attr("enctype") || i.prop("enctype");
    let c = i.attr("action");
    if (!c) return;
    let d;
    o === "POST" ? l === "application/x-www-form-urlencoded" || l === "application/json" ? (d = r.form.convertToData(i[0]), l === "application/json" && (d = JSON.stringify(d))) : d = new e.FormData(i[0]) : (d = ct(r.form.convertToData(i[0])), c.includes("?") ? c += `&${d}` : c += `?${d}`), i.trigger("formajax:beforesend", {
      data: d
    }), r.emit("formAjaxBeforeSend", i[0], d), fetch(c, Ee({
      method: o,
      headers: {
        "Content-Type": l || "application/x-www-form-urlencoded"
      }
    }, o === "POST" || o === "PUT" ? {
      body: d
    } : {})).then(p => {
      i.trigger("formajax:complete", {
        data: d,
        response: p
      }), r.emit("formAjaxComplete", i[0], d, p), i.trigger("formajax:success", {
        data: d,
        response: p
      }), r.emit("formAjaxSuccess", i[0], d, p)
    }).catch(p => {
      i.trigger("formajax:error", {
        data: d,
        error: p
      }), r.emit("formAjaxError", i[0], d, p)
    })
  }
  y(a).on("submit change", "form.form-ajax-submit, form.form-ajax-submit-onchange", t)
}
var eu = {
  name: "form",
  create() {
    const r = this;
    H(r, {
      form: {
        data: {},
        storeFormData: Da.store.bind(r),
        getFormData: Da.get.bind(r),
        removeFormData: Da.remove.bind(r),
        convertToData: _l.bind(r),
        fillFromData: Kl.bind(r),
        storage: {
          init: Xr.init.bind(r),
          destroy: Xr.destroy.bind(r)
        }
      }
    })
  },
  on: {
    init() {
      const r = this;
      Ql.call(r)
    },
    tabBeforeRemove(r) {
      const e = this;
      y(r).find(".form-store-data").each(a => {
        e.form.storage.destroy(a)
      })
    },
    tabMounted(r) {
      const e = this;
      y(r).find(".form-store-data").each(a => {
        e.form.storage.init(a)
      })
    },
    pageBeforeRemove(r) {
      const e = this;
      r.$el.find(".form-store-data").each(a => {
        e.form.storage.destroy(a)
      })
    },
    pageInit(r) {
      const e = this;
      r.$el.find(".form-store-data").each(a => {
        e.form.storage.init(a)
      })
    }
  }
};
const Be = {
  ignoreTypes: ["checkbox", "button", "submit", "range", "radio", "image"],
  createTextareaResizableShadow() {
    const r = ee(),
      e = y(r.createElement("textarea"));
    e.addClass("textarea-resizable-shadow"), e.prop({
      disabled: !0,
      readonly: !0
    }), Be.textareaResizableShadow = e
  },
  textareaResizableShadow: void 0,
  resizeTextarea(r) {
    const e = this,
      a = G(),
      t = y(r);
    Be.textareaResizableShadow || Be.createTextareaResizableShadow();
    const n = Be.textareaResizableShadow;
    if (!t.length || !t.hasClass("resizable")) return;
    Be.textareaResizableShadow.parents().length === 0 && e.$el.append(n);
    const s = a.getComputedStyle(t[0]);
    "padding-top padding-bottom padding-left padding-right margin-left margin-right margin-top margin-bottom width font-size font-family font-style font-weight line-height font-variant text-transform letter-spacing border box-sizing display".split(" ").forEach(c => {
      let d = s[c];
      "font-size line-height letter-spacing width".split(" ").indexOf(c) >= 0 && (d = d.replace(",", ".")), n.css(c, d)
    });
    const i = t[0].clientHeight;
    n.val("");
    const o = n[0].scrollHeight;
    n.val(t.val()), n.css("height", 0);
    const l = n[0].scrollHeight;
    i !== l && (l > o ? t.css("height", `${l}px`) : l < i && t.css("height", ""), (l > o || l < i) && (t.trigger("textarea:resize", {
      initialHeight: o,
      currentHeight: i,
      scrollHeight: l
    }), e.emit("textareaResize", {
      initialHeight: o,
      currentHeight: i,
      scrollHeight: l
    })))
  },
  validate(r) {
    const e = y(r);
    if (!e.length) return !0;
    const a = e.parents(".item-input"),
      t = e.parents(".input");

    function n() {
      e[0].f7ValidateReadonly && (e[0].readOnly = !1)
    }

    function s() {
      e[0].f7ValidateReadonly && (e[0].readOnly = !0)
    }
    n();
    const i = e[0].validity,
      o = e.dataset().errorMessage || e[0].validationMessage || "";
    if (!i) return s(), !0;
    if (!i.valid) {
      let l = e.nextAll(".item-input-error-message, .input-error-message");
      return o && (l.length === 0 && (l = y(`<div class="${t.length?"input-error-message":"item-input-error-message"}"></div>`), l.insertAfter(e)), l.text(o)), l.length > 0 && (a.addClass("item-input-with-error-message"), t.addClass("input-with-error-message")), a.addClass("item-input-invalid"), t.addClass("input-invalid"), e.addClass("input-invalid"), s(), !1
    }
    return a.removeClass("item-input-invalid item-input-with-error-message"), t.removeClass("input-invalid input-with-error-message"), e.removeClass("input-invalid"), s(), !0
  },
  validateInputs(r) {
    const e = this;
    return y(r).find("input, textarea, select").map(t => e.input.validate(t)).indexOf(!1) < 0
  },
  focus(r) {
    const e = y(r),
      a = e.attr("type");
    Be.ignoreTypes.indexOf(a) >= 0 || (e.parents(".item-input").addClass("item-input-focused"), e.parents(".input").addClass("input-focused"), e.addClass("input-focused"))
  },
  blur(r) {
    const e = y(r);
    e.parents(".item-input").removeClass("item-input-focused"), e.parents(".input").removeClass("input-focused"), e.removeClass("input-focused")
  },
  checkEmptyState(r) {
    const e = this;
    let a = y(r);
    if (a.is("input, select, textarea, .item-input [contenteditable]") || (a = a.find("input, select, textarea, .item-input [contenteditable]").eq(0)), !a.length) return;
    const t = a[0].hasAttribute("contenteditable");
    let n;
    t ? a.find(".text-editor-placeholder").length ? n = "" : n = a.html() : n = a.val();
    const s = a.parents(".item-input"),
      i = a.parents(".input");
    n && typeof n == "string" && n.trim() !== "" || Array.isArray(n) && n.length > 0 ? (s.addClass("item-input-with-value"), i.addClass("input-with-value"), a.addClass("input-with-value"), a.trigger("input:notempty"), e.emit("inputNotEmpty", a[0])) : (s.removeClass("item-input-with-value"), i.removeClass("input-with-value"), a.removeClass("input-with-value"), a.trigger("input:empty"), e.emit("inputEmpty", a[0]))
  },
  scrollIntoView(r, e, a, t) {
    e === void 0 && (e = 0);
    const n = y(r),
      s = n.parents(".page-content, .panel, .card-expandable .card-content").eq(0);
    if (!s.length) return !1;
    const i = s[0].offsetHeight,
      o = s[0].scrollTop,
      l = parseInt(s.css("padding-top"), 10),
      c = parseInt(s.css("padding-bottom"), 10),
      d = s.offset().top - o,
      p = n.offset().top - d,
      u = n[0].offsetHeight,
      g = p + o - l,
      h = p + o - i + c + u,
      f = g + (h - g) / 2;
    return o > g ? (s.scrollTop(a ? f : g, e), !0) : o < h ? (s.scrollTop(a ? f : h, e), !0) : (t && s.scrollTop(a ? f : h, e), !1)
  },
  init() {
    const r = this,
      e = ue(),
      a = G(),
      t = ee();
    Be.createTextareaResizableShadow();

    function n() {
      const d = this;
      r.params.input.scrollIntoViewOnFocus && (e.android ? y(a).once("resize", () => {
        t && t.activeElement === d && r.input.scrollIntoView(d, r.params.input.scrollIntoViewDuration, r.params.input.scrollIntoViewCentered, r.params.input.scrollIntoViewAlways)
      }) : r.input.scrollIntoView(d, r.params.input.scrollIntoViewDuration, r.params.input.scrollIntoViewCentered, r.params.input.scrollIntoViewAlways)), r.input.focus(d)
    }

    function s() {
      const d = y(this),
        p = d[0].nodeName.toLowerCase();
      r.input.blur(d), (d.dataset().validate || d.attr("validate") !== null || d.attr("data-validate-on-blur") !== null) && r.input.validate(d), p === "textarea" && d.hasClass("resizable") && Be.textareaResizableShadow && Be.textareaResizableShadow.remove()
    }

    function i() {
      const d = y(this),
        p = d.attr("type"),
        u = d[0].nodeName.toLowerCase(),
        g = d[0].hasAttribute("contenteditable");
      Be.ignoreTypes.indexOf(p) >= 0 || (r.input.checkEmptyState(d), !g && (d.attr("data-validate-on-blur") === null && (d.dataset().validate || d.attr("validate") !== null) && r.input.validate(d), u === "textarea" && d.hasClass("resizable") && r.input.resizeTextarea(d)))
    }

    function o(d) {
      const p = y(this);
      p.attr("data-validate-on-blur") === null && (p.dataset().validate || p.attr("validate") !== null) && (d.preventDefault(), r.input.validate(p))
    }

    function l() {
      const p = y(this).siblings("input, textarea").eq(0),
        u = p.val();
      p.val("").trigger("input change").focus().trigger("input:clear", u), r.emit("inputClear", u)
    }

    function c(d) {
      d.preventDefault()
    }
    y(t).on("click", ".input-clear-button", l), y(t).on("mousedown", ".input-clear-button", c), y(t).on("change input", "input, textarea, select, .item-input [contenteditable]", i, !0), y(t).on("focus", "input, textarea, select, .item-input [contenteditable]", n, !0), y(t).on("blur", "input, textarea, select, .item-input [contenteditable]", s, !0), y(t).on("invalid", "input, textarea, select", o, !0)
  }
};
var tu = {
    name: "input",
    params: {
      input: {
        scrollIntoViewOnFocus: void 0,
        scrollIntoViewCentered: !1,
        scrollIntoViewDuration: 0,
        scrollIntoViewAlways: !1
      }
    },
    create() {
      const r = this;
      typeof r.params.input.scrollIntoViewOnFocus == "undefined" && (r.params.input.scrollIntoViewOnFocus = ue().android), Ie(r, {
        input: Be
      })
    },
    on: {
      init() {
        this.input.init()
      },
      tabMounted(r) {
        const e = this,
          a = y(r);
        a.find(".item-input, .input").each(t => {
          y(t).find("input, select, textarea, [contenteditable]").each(s => {
            const i = y(s);
            Be.ignoreTypes.indexOf(i.attr("type")) >= 0 || e.input.checkEmptyState(i)
          })
        }), a.find("textarea.resizable").each(t => {
          e.input.resizeTextarea(t)
        })
      },
      pageInit(r) {
        const e = this,
          a = r.$el;
        a.find(".item-input, .input").each(t => {
          y(t).find("input, select, textarea, [contenteditable]").each(s => {
            const i = y(s);
            Be.ignoreTypes.indexOf(i.attr("type")) >= 0 || e.input.checkEmptyState(i)
          })
        }), a.find("textarea.resizable").each(t => {
          e.input.resizeTextarea(t)
        })
      },
      "panelBreakpoint panelCollapsedBreakpoint panelResize panelOpen panelSwipeOpen resize viewMasterDetailBreakpoint": function (e) {
        const a = this;
        e && e.$el ? e.$el.find("textarea.resizable").each(t => {
          a.input.resizeTextarea(t)
        }) : y("textarea.resizable").each(t => {
          a.input.resizeTextarea(t)
        })
      }
    }
  },
  au = {
    name: "checkbox"
  },
  ru = {
    name: "radio"
  };
class Zl extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this,
      n = ve(),
      s = {};
    t.useModulesParams(s), t.params = H(s, a);
    const i = t.params.el;
    if (!i) return t;
    const o = y(i);
    if (o.length === 0) return t;
    if (o[0].f7Toggle) return o[0].f7Toggle;
    const l = o.children('input[type="checkbox"]');
    H(t, {
      app: e,
      $el: o,
      el: o[0],
      $inputEl: l,
      inputEl: l[0],
      disabled: o.hasClass("disabled") || l.hasClass("disabled") || l.attr("disabled") || l[0].disabled
    }), Object.defineProperty(t, "checked", {
      enumerable: !0,
      configurable: !0,
      set($) {
        !t || typeof t.$inputEl == "undefined" || t.checked !== $ && (l[0].checked = $, t.$inputEl.trigger("change"))
      },
      get() {
        return l[0].checked
      }
    }), o[0].f7Toggle = t;
    let c;
    const d = {};
    let p, u, g, h, f;

    function b($) {
      c || t.disabled || (d.x = $.type === "touchstart" ? $.targetTouches[0].pageX : $.pageX, d.y = $.type === "touchstart" ? $.targetTouches[0].pageY : $.pageY, u = 0, c = !0, p = void 0, h = Ae(), f = t.checked, g = o[0].offsetWidth, ke(() => {
        c && o.addClass("toggle-active-state")
      }))
    }

    function m($) {
      if (!c || t.disabled) return;
      const w = $.type === "touchmove" ? $.targetTouches[0].pageX : $.pageX,
        C = $.type === "touchmove" ? $.targetTouches[0].pageY : $.pageY,
        x = e.rtl ? -1 : 1;
      if (typeof p == "undefined" && (p = !!(p || Math.abs(C - d.y) > Math.abs(w - d.x))), p) {
        c = !1;
        return
      }
      $.preventDefault(), u = w - d.x;
      let M;
      u * x < 0 && Math.abs(u) > g / 3 && f && (M = !0), u * x > 0 && Math.abs(u) > g / 3 && !f && (M = !0), M && (d.x = w, t.checked = !f, f = !f)
    }

    function v() {
      if (!c || t.disabled) {
        p && o.removeClass("toggle-active-state"), c = !1;
        return
      }
      const $ = e.rtl ? -1 : 1;
      c = !1, o.removeClass("toggle-active-state");
      let w;
      Ae() - h < 300 && (u * $ < 0 && f && (w = !0), u * $ > 0 && !f && (w = !0), w && (t.checked = !f))
    }

    function E() {
      t.$el.trigger("toggle:change"), t.emit("local::change toggleChange", t)
    }
    t.attachEvents = function () {
      const w = n.passiveListener ? {
        passive: !0
      } : !1;
      o.on(e.touchEvents.start, b, w), e.on("touchmove", m), e.on("touchend:passive", v), t.$inputEl.on("change", E)
    }, t.detachEvents = function () {
      const w = n.passiveListener ? {
        passive: !0
      } : !1;
      o.off(e.touchEvents.start, b, w), e.off("touchmove", m), e.off("touchend:passive", v), t.$inputEl.off("change", E)
    }, t.useModules(), t.init()
  }
  toggle() {
    const e = this;
    e.checked = !e.checked
  }
  init() {
    this.attachEvents()
  }
  destroy() {
    let e = this;
    e.$el.trigger("toggle:beforedestroy"), e.emit("local::beforeDestroy toggleBeforeDestroy", e), delete e.$el[0].f7Toggle, e.detachEvents(), $e(e), e = null
  }
}
var Gr = Zl,
  nu = {
    name: "toggle",
    create() {
      const r = this;
      r.toggle = xe({
        defaultSelector: ".toggle",
        constructor: Gr,
        app: r,
        domProp: "f7Toggle"
      })
    },
    static: {
      Toggle: Gr
    },
    on: {
      tabMounted(r) {
        const e = this;
        y(r).find(".toggle-init").each(a => e.toggle.create({
          el: a
        }))
      },
      tabBeforeRemove(r) {
        y(r).find(".toggle-init").each(e => {
          e.f7Toggle && e.f7Toggle.destroy()
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".toggle-init").each(a => e.toggle.create({
          el: a
        }))
      },
      pageBeforeRemove(r) {
        r.$el.find(".toggle-init").each(e => {
          e.f7Toggle && e.f7Toggle.destroy()
        })
      }
    },
    vnode: {
      "toggle-init": {
        insert(r) {
          const e = this,
            a = r.elm;
          e.toggle.create({
            el: a
          })
        },
        destroy(r) {
          const e = r.elm;
          e.f7Toggle && e.f7Toggle.destroy()
        }
      }
    }
  };
class Jl extends be {
  constructor(e, a) {
    super(a, [e]);
    const t = this,
      n = ve(),
      s = {
        el: null,
        inputEl: null,
        dual: !1,
        step: 1,
        label: !1,
        min: 0,
        max: 100,
        value: 0,
        draggableBar: !0,
        vertical: !1,
        verticalReversed: !1,
        formatLabel: null,
        scale: !1,
        scaleSteps: 5,
        scaleSubSteps: 0,
        formatScaleLabel: null,
        limitKnobPosition: e.theme === "ios"
      };
    t.useModulesParams(s), t.params = H(s, a);
    const i = t.params.el;
    if (!i) return t;
    const o = y(i);
    if (o.length === 0) return t;
    if (o[0].f7Range) return o[0].f7Range;
    const l = o.dataset();
    "step min max value scaleSteps scaleSubSteps".split(" ").forEach(j => {
      typeof a[j] == "undefined" && typeof l[j] != "undefined" && (t.params[j] = parseFloat(l[j]))
    }), "dual label vertical verticalReversed scale".split(" ").forEach(j => {
      typeof a[j] == "undefined" && typeof l[j] != "undefined" && (t.params[j] = l[j])
    }), t.params.value || (typeof l.value != "undefined" && (t.params.value = l.value), typeof l.valueLeft != "undefined" && typeof l.valueRight != "undefined" && (t.params.value = [parseFloat(l.valueLeft), parseFloat(l.valueRight)]));
    let c;
    t.params.dual || (t.params.inputEl ? c = y(t.params.inputEl) : o.find('input[type="range"]').length && (c = o.find('input[type="range"]').eq(0)));
    const {
      dual: d,
      step: p,
      label: u,
      min: g,
      max: h,
      value: f,
      vertical: b,
      verticalReversed: m,
      scale: v,
      scaleSteps: E,
      scaleSubSteps: $,
      limitKnobPosition: w
    } = t.params;
    H(t, {
      app: e,
      $el: o,
      el: o[0],
      $inputEl: c,
      inputEl: c ? c[0] : void 0,
      dual: d,
      step: p,
      label: u,
      min: g,
      max: h,
      value: f,
      previousValue: f,
      vertical: b,
      verticalReversed: m,
      scale: v,
      scaleSteps: E,
      scaleSubSteps: $,
      limitKnobPosition: w
    }), c && ("step min max".split(" ").forEach(j => {
      !a[j] && c.attr(j) && (t.params[j] = parseFloat(c.attr(j)), t[j] = parseFloat(c.attr(j)))
    }), typeof c.val() != "undefined" && (t.params.value = parseFloat(c.val()), t.value = parseFloat(c.val()))), t.dual && o.addClass("range-slider-dual"), t.label && o.addClass("range-slider-label"), t.vertical ? (o.addClass("range-slider-vertical"), t.verticalReversed && o.addClass("range-slider-vertical-reversed")) : o.addClass("range-slider-horizontal");
    const C = y('<div class="range-bar"></div>'),
      x = y('<div class="range-bar-active"></div>');
    C.append(x);
    const M = `
      <div class="range-knob-wrap">
        <div class="range-knob"></div>
        ${t.label?'<div class="range-knob-label"></div>':""}
      </div>
    `,
      A = [y(M)];
    t.dual && A.push(y(M)), o.append(C), A.forEach(j => {
      o.append(j)
    });
    const B = [];
    t.label && (B.push(A[0].find(".range-knob-label")), t.dual && B.push(A[1].find(".range-knob-label")));
    let S;
    t.scale && t.scaleSteps >= 1 && (S = y(`
        <div class="range-scale">
          ${t.renderScale()}
        </div>
      `), o.append(S)), H(t, {
      knobs: A,
      labels: B,
      $barEl: C,
      $barActiveEl: x,
      $scaleEl: S
    }), o[0].f7Range = t;
    let P;
    const k = {};
    let I, R, D, z, O, L, N, F;

    function V() {
      N = !0
    }

    function U(j) {
      if (P || !t.params.draggableBar && y(j.target).closest(".range-knob").length === 0) return;
      N = !1, k.x = j.type === "touchstart" ? j.targetTouches[0].pageX : j.pageX, k.y = j.type === "touchstart" ? j.targetTouches[0].pageY : j.pageY, j.type === "touchstart" && (F = j.targetTouches[0].identifier), P = !0, I = void 0, R = o.offset(), D = R.left, z = R.top;
      let _;
      t.vertical ? (_ = (k.y - z) / t.rangeHeight, t.verticalReversed || (_ = 1 - _)) : t.app.rtl ? _ = (D + t.rangeWidth - k.x) / t.rangeWidth : _ = (k.x - D) / t.rangeWidth;
      let Q = _ * (t.max - t.min) + t.min;
      t.dual ? Math.abs(t.value[0] - Q) < Math.abs(t.value[1] - Q) ? (L = 0, O = t.knobs[0], Q = [Q, t.value[1]]) : (L = 1, O = t.knobs[1], Q = [t.value[0], Q]) : (O = t.knobs[0], Q = _ * (t.max - t.min) + t.min), ke(() => {
        P && O.addClass("range-knob-active-state")
      }, 70), t.on("change", V), t.setValue(Q, !0)
    }

    function Z(j) {
      if (!P) return;
      let _, Q;
      if (j.type === "touchmove")
        for (let te = 0; te < j.targetTouches.length; te += 1) j.targetTouches[te].identifier === F && (_ = j.targetTouches[te].pageX, Q = j.targetTouches[te].pageY);
      else _ = j.pageX, Q = j.pageY;
      if (typeof _ == "undefined" && typeof Q == "undefined") return;
      if (typeof I == "undefined" && !t.vertical && (I = !!(I || Math.abs(Q - k.y) > Math.abs(_ - k.x))), I) {
        P = !1;
        return
      }
      j.preventDefault();
      let se;
      t.vertical ? (se = (Q - z) / t.rangeHeight, t.verticalReversed || (se = 1 - se)) : t.app.rtl ? se = (D + t.rangeWidth - _) / t.rangeWidth : se = (_ - D) / t.rangeWidth;
      let me = se * (t.max - t.min) + t.min;
      if (t.dual) {
        let te, oe;
        L === 0 ? (te = me, oe = t.value[1], te > oe && (oe = te)) : (te = t.value[0], oe = me, oe < te && (te = oe)), me = [te, oe]
      }
      t.setValue(me, !0)
    }

    function J(j) {
      if (j.type === "touchend") {
        let _;
        for (let Q = 0; Q < j.changedTouches.length; Q += 1) j.changedTouches[Q].identifier === F && (_ = !0);
        if (!_) return
      }
      if (!P) {
        I && O.removeClass("range-knob-active-state"), P = !1;
        return
      }
      t.off("change", V), P = !1, O.removeClass("range-knob-active-state"), N && t.$inputEl && !t.dual && t.$inputEl.trigger("change"), N = !1, typeof t.previousValue != "undefined" && (t.dual && (t.previousValue[0] !== t.value[0] || t.previousValue[1] !== t.value[1]) || !t.dual && t.previousValue !== t.value) && (t.$el.trigger("range:changed", t.value), t.emit("local::changed rangeChanged", t, t.value))
    }

    function X() {
      t.calcSize(), t.layout()
    }
    let Y, W, K;
    return t.attachEvents = function () {
      const _ = n.passiveListener ? {
        passive: !0
      } : !1;
      t.$el.on(e.touchEvents.start, U, _), e.on("touchmove", Z), e.on("touchend:passive", J), e.on("tabShow", X), e.on("resize", X), Y = t.$el.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast"), Y.on("modal:open", X), W = t.$el.parents(".panel"), W.on("panel:open panel:resize", X), K = t.$el.parents(".page").eq(0), K.on("page:reinit", X)
    }, t.detachEvents = function () {
      const _ = n.passiveListener ? {
        passive: !0
      } : !1;
      t.$el.off(e.touchEvents.start, U, _), e.off("touchmove", Z), e.off("touchend:passive", J), e.off("tabShow", X), e.off("resize", X), Y && Y.off("modal:open", X), W && W.off("panel:open panel:resize", X), K && K.off("page:reinit", X), Y = null, W = null, K = null
    }, t.useModules(), t.init(), t
  }
  calcSize() {
    const e = this;
    if (e.vertical) {
      const a = e.$el.outerHeight();
      if (a === 0) return;
      e.rangeHeight = a, e.knobHeight = e.knobs[0].outerHeight()
    } else {
      const a = e.$el.outerWidth();
      if (a === 0) return;
      e.rangeWidth = a, e.knobWidth = e.knobs[0].outerWidth()
    }
  }
  layout() {
    const e = this,
      {
        app: a,
        knobWidth: t,
        knobHeight: n,
        rangeWidth: s,
        rangeHeight: i,
        min: o,
        max: l,
        knobs: c,
        $barActiveEl: d,
        value: p,
        label: u,
        labels: g,
        vertical: h,
        verticalReversed: f,
        limitKnobPosition: b
      } = e,
      m = h ? n : t,
      v = h ? i : s,
      E = h ? f ? "top" : "bottom" : a.rtl ? "right" : "left";
    if (e.dual) {
      const $ = [(p[0] - o) / (l - o), (p[1] - o) / (l - o)];
      d.css({
        [E]: `${$[0]*100}%`,
        [h ? "height" : "width"]: `${($[1]-$[0])*100}%`
      }), c.forEach((w, C) => {
        let x = v * $[C];
        if (b) {
          const M = v * $[C] - m / 2;
          M < 0 && (x = m / 2), M + m > v && (x = v - m / 2)
        }
        w.css(E, `${x}px`), u && g[C].text(e.formatLabel(p[C], g[C][0]))
      })
    } else {
      const $ = (p - o) / (l - o);
      d.css(h ? "height" : "width", `${$*100}%`);
      let w = v * $;
      if (b) {
        const C = v * $ - m / 2;
        C < 0 && (w = m / 2), C + m > v && (w = v - m / 2)
      }
      c[0].css(E, `${w}px`), u && g[0].text(e.formatLabel(p, g[0][0]))
    }
    e.dual && p.indexOf(o) >= 0 || !e.dual && p === o ? e.$el.addClass("range-slider-min") : e.$el.removeClass("range-slider-min"), e.dual && p.indexOf(l) >= 0 || !e.dual && p === l ? e.$el.addClass("range-slider-max") : e.$el.removeClass("range-slider-max")
  }
  setValue(e, a) {
    const t = this,
      {
        step: n,
        min: s,
        max: i
      } = t;
    let o, l;
    if (t.dual) {
      l = [t.value[0], t.value[1]];
      let c = e;
      if (Array.isArray(c) || (c = [e, e]), e[0] > e[1] && (c = [c[0], c[0]]), c = c.map(d => Math.max(Math.min(Math.round(d / n) * n, i), s)), c[0] === t.value[0] && c[1] === t.value[1]) return t;
      c.forEach((d, p) => {
        t.value[p] = d
      }), o = l[0] !== c[0] || l[1] !== c[1], t.layout()
    } else {
      l = t.value;
      const c = Math.max(Math.min(Math.round(e / n) * n, i), s);
      t.value = c, t.layout(), o = l !== c
    }
    return o && (t.previousValue = l), o && (t.$el.trigger("range:change", t.value), t.$inputEl && !t.dual && (t.$inputEl.val(t.value), a ? t.$inputEl.trigger("input") : t.$inputEl.trigger("input change")), a || (t.$el.trigger("range:changed", t.value), t.emit("local::changed rangeChanged", t, t.value)), t.emit("local::change rangeChange", t, t.value)), t
  }
  getValue() {
    return this.value
  }
  formatLabel(e, a) {
    const t = this;
    return t.params.formatLabel ? t.params.formatLabel.call(t, e, a) : e
  }
  formatScaleLabel(e) {
    const a = this;
    return a.params.formatScaleLabel ? a.params.formatScaleLabel.call(a, e) : e
  }
  renderScale() {
    const e = this,
      {
        app: a,
        verticalReversed: t,
        vertical: n
      } = e,
      s = n ? t ? "top" : "bottom" : a.rtl ? "right" : "left";
    let i = "";
    return Array.from({
      length: e.scaleSteps + 1
    }).forEach((o, l) => {
      const c = (e.max - e.min) / e.scaleSteps,
        d = e.min + c * l,
        p = (d - e.min) / (e.max - e.min);
      i += `<div class="range-scale-step" style="${s}: ${p*100}%">${e.formatScaleLabel(d)}</div>`, e.scaleSubSteps && e.scaleSubSteps > 1 && l < e.scaleSteps && Array.from({
        length: e.scaleSubSteps - 1
      }).forEach((u, g) => {
        const h = c / e.scaleSubSteps,
          b = (d + h * (g + 1) - e.min) / (e.max - e.min);
        i += `<div class="range-scale-step range-scale-substep" style="${s}: ${b*100}%"></div>`
      })
    }), i
  }
  updateScale() {
    const e = this;
    if (!e.scale || e.scaleSteps < 1) {
      e.$scaleEl && e.$scaleEl.remove(), delete e.$scaleEl;
      return
    }
    e.$scaleEl || (e.$scaleEl = y('<div class="range-scale"></div>'), e.$el.append(e.$scaleEl)), e.$scaleEl.html(e.renderScale())
  }
  init() {
    const e = this;
    return e.calcSize(), e.layout(), e.attachEvents(), e
  }
  destroy() {
    let e = this;
    e.$el.trigger("range:beforedestroy"), e.emit("local::beforeDestroy rangeBeforeDestroy", e), delete e.$el[0].f7Range, e.detachEvents(), $e(e), e = null
  }
}
var Zt = Jl,
  su = {
    name: "range",
    create() {
      const r = this;
      r.range = H(xe({
        defaultSelector: ".range-slider",
        constructor: Zt,
        app: r,
        domProp: "f7Range"
      }), {
        getValue(e) {
          e === void 0 && (e = ".range-slider");
          const a = r.range.get(e);
          if (a) return a.getValue()
        },
        setValue(e, a) {
          e === void 0 && (e = ".range-slider");
          const t = r.range.get(e);
          if (t) return t.setValue(a)
        }
      })
    },
    static: {
      Range: Zt
    },
    on: {
      tabMounted(r) {
        const e = this;
        y(r).find(".range-slider-init").each(a => new Zt(e, {
          el: a
        }))
      },
      tabBeforeRemove(r) {
        y(r).find(".range-slider-init").each(e => {
          e.f7Range && e.f7Range.destroy()
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".range-slider-init").each(a => new Zt(e, {
          el: a
        }))
      },
      pageBeforeRemove(r) {
        r.$el.find(".range-slider-init").each(e => {
          e.f7Range && e.f7Range.destroy()
        })
      }
    },
    vnode: {
      "range-slider-init": {
        insert(r) {
          const e = r.elm;
          this.range.create({
            el: e
          })
        },
        destroy(r) {
          const e = r.elm;
          e.f7Range && e.f7Range.destroy()
        }
      }
    }
  };
class ec extends be {
  constructor(e, a) {
    super(a, [e]);
    const t = this,
      n = {
        el: null,
        inputEl: null,
        valueEl: null,
        value: 0,
        formatValue: null,
        step: 1,
        min: 0,
        max: 100,
        watchInput: !0,
        autorepeat: !1,
        autorepeatDynamic: !1,
        wraps: !1,
        manualInputMode: !1,
        decimalPoint: 4,
        buttonsEndInputMode: !0
      };
    t.useModulesParams(n), t.params = H(n, a), t.params.value < t.params.min && (t.params.value = t.params.min), t.params.value > t.params.max && (t.params.value = t.params.max);
    const s = t.params.el;
    if (!s) return t;
    const i = y(s);
    if (i.length === 0) return t;
    if (i[0].f7Stepper) return i[0].f7Stepper;
    let o;
    if (t.params.inputEl ? o = y(t.params.inputEl) : i.find(".stepper-input-wrap").find("input, textarea").length && (o = i.find(".stepper-input-wrap").find("input, textarea").eq(0)), o && o.length) {
      "step min max".split(" ").forEach(F => {
        !a[F] && o.attr(F) && (t.params[F] = parseFloat(o.attr(F)))
      });
      const L = parseInt(t.params.decimalPoint, 10);
      Number.isNaN(L) ? t.params.decimalPoint = 0 : t.params.decimalPoint = L;
      const N = parseFloat(o.val());
      typeof a.value == "undefined" && !Number.isNaN(N) && (N || N === 0) && (t.params.value = N)
    }
    let l;
    t.params.valueEl ? l = y(t.params.valueEl) : i.find(".stepper-value").length && (l = i.find(".stepper-value").eq(0));
    const c = i.find(".stepper-button-plus"),
      d = i.find(".stepper-button-minus"),
      {
        step: p,
        min: u,
        max: g,
        value: h,
        decimalPoint: f
      } = t.params;
    H(t, {
      app: e,
      $el: i,
      el: i[0],
      $buttonPlusEl: c,
      buttonPlusEl: c[0],
      $buttonMinusEl: d,
      buttonMinusEl: d[0],
      $inputEl: o,
      inputEl: o ? o[0] : void 0,
      $valueEl: l,
      valueEl: l ? l[0] : void 0,
      step: p,
      min: u,
      max: g,
      value: h,
      decimalPoint: f,
      typeModeChanged: !1
    }), i[0].f7Stepper = t;
    const b = {};
    let m, v, E, $, w, C = null,
      x = !1,
      M = !1;

    function A(L, N, F, V, U, Z) {
      clearTimeout(w), w = setTimeout(() => {
        L === 1 && (E = !0, x = !0), clearInterval($), Z(), $ = setInterval(() => {
          Z()
        }, U), L < N && A(L + 1, N, F, V, U / 2, Z)
      }, L === 1 ? F : V)
    }

    function B(L) {
      if (m || M || (y(L.target).closest(c).length ? C = "increment" : y(L.target).closest(d).length && (C = "decrement"), !C)) return;
      b.x = L.type === "touchstart" ? L.targetTouches[0].pageX : L.pageX, b.y = L.type === "touchstart" ? L.targetTouches[0].pageY : L.pageY, m = !0, v = void 0;
      const N = t.params.autorepeatDynamic ? 4 : 1;
      A(1, N, 500, 1e3, 300, () => {
        t[C]()
      })
    }

    function S(L) {
      if (!m || M) return;
      const N = L.type === "touchmove" ? L.targetTouches[0].pageX : L.pageX,
        F = L.type === "touchmove" ? L.targetTouches[0].pageY : L.pageY;
      typeof v == "undefined" && !x && (v = !!(v || Math.abs(F - b.y) > Math.abs(N - b.x)));
      const V = ((N - b.x) ** 2 + (F - b.y) ** 2) ** .5;
      (v || V > 20) && (m = !1, clearTimeout(w), clearInterval($))
    }

    function P() {
      clearTimeout(w), clearInterval($), C = null, x = !1, m = !1
    }

    function k() {
      if (M) {
        t.params.buttonsEndInputMode && (M = !1, t.endTypeMode(!0));
        return
      }
      if (E) {
        E = !1;
        return
      }
      t.decrement(!0)
    }

    function I() {
      if (M) {
        t.params.buttonsEndInputMode && (M = !1, t.endTypeMode(!0));
        return
      }
      if (E) {
        E = !1;
        return
      }
      t.increment(!0)
    }

    function R(L) {
      !L.target.readOnly && t.params.manualInputMode && (M = !0, typeof L.target.selectionStart == "number" && (L.target.selectionStart = L.target.value.length, L.target.selectionEnd = L.target.value.length))
    }

    function D(L) {
      (L.keyCode === 13 || L.which === 13) && (L.preventDefault(), M = !1, t.endTypeMode())
    }

    function z() {
      M = !1, t.endTypeMode(!0)
    }

    function O(L) {
      if (M) {
        t.typeValue(L.target.value);
        return
      }
      L.detail && L.detail.sentByF7Stepper || t.setValue(L.target.value, !0)
    }
    return t.attachEvents = function () {
      d.on("click", k), c.on("click", I), t.params.watchInput && o && o.length && (o.on("input", O), o.on("click", R), o.on("blur", z), o.on("keyup", D)), t.params.autorepeat && (e.on("touchstart:passive", B), e.on("touchmove:active", S), e.on("touchend:passive", P))
    }, t.detachEvents = function () {
      d.off("click", k), c.off("click", I), t.params.watchInput && o && o.length && (o.off("input", O), o.off("click", R), o.off("blur", z), o.off("keyup", D))
    }, t.useModules(), t.init(), t
  }
  minus() {
    return this.decrement()
  }
  plus() {
    return this.increment()
  }
  decrement() {
    const e = this;
    return e.setValue(e.value - e.step, !1, !0)
  }
  increment() {
    const e = this;
    return e.setValue(e.value + e.step, !1, !0)
  }
  setValue(e, a, t) {
    const n = this,
      {
        step: s,
        min: i,
        max: o
      } = n,
      l = n.value;
    let c = Math.round(e / s) * s;
    if (n.params.wraps && t ? (c > o && (c = i), c < i && (c = o)) : c = Math.max(Math.min(c, o), i), Number.isNaN(c) && (c = l), n.value = c, !(l !== c) && !a) return n;
    n.$el.trigger("stepper:change", n.value);
    const p = n.formatValue(n.value);
    return n.$inputEl && n.$inputEl.length && (n.$inputEl.val(p), n.$inputEl.trigger("input change", {
      sentByF7Stepper: !0
    })), n.$valueEl && n.$valueEl.length && n.$valueEl.html(p), n.emit("local::change stepperChange", n, n.value), n
  }
  endTypeMode(e) {
    const a = this,
      {
        min: t,
        max: n
      } = a;
    let s = parseFloat(a.value);
    if (Number.isNaN(s) && (s = 0), s = Math.max(Math.min(s, n), t), a.value = s, !a.typeModeChanged) return a.$inputEl && a.$inputEl.length && !e && a.$inputEl.blur(), a;
    a.typeModeChanged = !1, a.$el.trigger("stepper:change", a.value);
    const i = a.formatValue(a.value);
    return a.$inputEl && a.$inputEl.length && (a.$inputEl.val(i), a.$inputEl.trigger("input change", {
      sentByF7Stepper: !0
    }), e || a.$inputEl.blur()), a.$valueEl && a.$valueEl.length && a.$valueEl.html(i), a.emit("local::change stepperChange", a, a.value), a
  }
  typeValue(e) {
    const a = this;
    a.typeModeChanged = !0;
    let t = String(e);
    if (t.length === 1 && t === "-") return a;
    if (t.lastIndexOf(".") + 1 === t.length || t.lastIndexOf(",") + 1 === t.length) {
      if (t.lastIndexOf(".") !== t.indexOf(".") || t.lastIndexOf(",") !== t.indexOf(",")) return t = t.slice(0, -1), a.value = t, a.$inputEl.val(a.value), a
    } else {
      let n = parseFloat(t.replace(",", "."));
      if (n === 0) return a.value = t.replace(",", "."), a.$inputEl.val(a.value), a;
      if (Number.isNaN(n)) return a.value = 0, a.$inputEl.val(a.value), a;
      const s = 10 ** a.params.decimalPoint;
      return n = Math.round(n * s).toFixed(a.params.decimalPoint + 1) / s, a.value = parseFloat(String(n).replace(",", ".")), a.$inputEl.val(a.value), a
    }
    return a.value = t, a.$inputEl.val(t), a
  }
  getValue() {
    return this.value
  }
  formatValue(e) {
    const a = this;
    return a.params.formatValue ? a.params.formatValue.call(a, e) : e
  }
  init() {
    const e = this;
    if (e.attachEvents(), e.$valueEl && e.$valueEl.length) {
      const a = e.formatValue(e.value);
      e.$valueEl.html(a)
    }
    return e
  }
  destroy() {
    let e = this;
    e.$el.trigger("stepper:beforedestroy"), e.emit("local::beforeDestroy stepperBeforeDestroy", e), delete e.$el[0].f7Stepper, e.detachEvents(), $e(e), e = null
  }
}
var Ur = ec,
  iu = {
    name: "stepper",
    create() {
      const r = this;
      r.stepper = H(xe({
        defaultSelector: ".stepper",
        constructor: Ur,
        app: r,
        domProp: "f7Stepper"
      }), {
        getValue(e) {
          e === void 0 && (e = ".stepper");
          const a = r.stepper.get(e);
          if (a) return a.getValue()
        },
        setValue(e, a) {
          e === void 0 && (e = ".stepper");
          const t = r.stepper.get(e);
          if (t) return t.setValue(a)
        }
      })
    },
    static: {
      Stepper: Ur
    },
    on: {
      tabMounted(r) {
        const e = this;
        y(r).find(".stepper-init").each(a => {
          const t = y(a).dataset();
          e.stepper.create(H({
            el: a
          }, t || {}))
        })
      },
      tabBeforeRemove(r) {
        y(r).find(".stepper-init").each(e => {
          e.f7Stepper && e.f7Stepper.destroy()
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".stepper-init").each(a => {
          const t = y(a).dataset();
          e.stepper.create(H({
            el: a
          }, t || {}))
        })
      },
      pageBeforeRemove(r) {
        r.$el.find(".stepper-init").each(e => {
          e.f7Stepper && e.f7Stepper.destroy()
        })
      }
    },
    vnode: {
      "stepper-init": {
        insert(r) {
          const e = this,
            a = r.elm,
            t = y(a).dataset();
          e.stepper.create(H({
            el: a
          }, t || {}))
        },
        destroy(r) {
          const e = r.elm;
          e.f7Stepper && e.f7Stepper.destroy()
        }
      }
    }
  };
const La = [{
    base: "A",
    letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
  }, {
    base: "AA",
    letters: "\uA732"
  }, {
    base: "AE",
    letters: "\xC6\u01FC\u01E2"
  }, {
    base: "AO",
    letters: "\uA734"
  }, {
    base: "AU",
    letters: "\uA736"
  }, {
    base: "AV",
    letters: "\uA738\uA73A"
  }, {
    base: "AY",
    letters: "\uA73C"
  }, {
    base: "B",
    letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
  }, {
    base: "C",
    letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
  }, {
    base: "D",
    letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
  }, {
    base: "DZ",
    letters: "\u01F1\u01C4"
  }, {
    base: "Dz",
    letters: "\u01F2\u01C5"
  }, {
    base: "E",
    letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
  }, {
    base: "F",
    letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
  }, {
    base: "G",
    letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
  }, {
    base: "H",
    letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
  }, {
    base: "I",
    letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
  }, {
    base: "J",
    letters: "J\u24BF\uFF2A\u0134\u0248"
  }, {
    base: "K",
    letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
  }, {
    base: "L",
    letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
  }, {
    base: "LJ",
    letters: "\u01C7"
  }, {
    base: "Lj",
    letters: "\u01C8"
  }, {
    base: "M",
    letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
  }, {
    base: "N",
    letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
  }, {
    base: "NJ",
    letters: "\u01CA"
  }, {
    base: "Nj",
    letters: "\u01CB"
  }, {
    base: "O",
    letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
  }, {
    base: "OI",
    letters: "\u01A2"
  }, {
    base: "OO",
    letters: "\uA74E"
  }, {
    base: "OU",
    letters: "\u0222"
  }, {
    base: "OE",
    letters: "\x8C\u0152"
  }, {
    base: "oe",
    letters: "\x9C\u0153"
  }, {
    base: "P",
    letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
  }, {
    base: "Q",
    letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
  }, {
    base: "R",
    letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
  }, {
    base: "S",
    letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
  }, {
    base: "T",
    letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
  }, {
    base: "TZ",
    letters: "\uA728"
  }, {
    base: "U",
    letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
  }, {
    base: "V",
    letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
  }, {
    base: "VY",
    letters: "\uA760"
  }, {
    base: "W",
    letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
  }, {
    base: "X",
    letters: "X\u24CD\uFF38\u1E8A\u1E8C"
  }, {
    base: "Y",
    letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
  }, {
    base: "Z",
    letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
  }, {
    base: "a",
    letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
  }, {
    base: "aa",
    letters: "\uA733"
  }, {
    base: "ae",
    letters: "\xE6\u01FD\u01E3"
  }, {
    base: "ao",
    letters: "\uA735"
  }, {
    base: "au",
    letters: "\uA737"
  }, {
    base: "av",
    letters: "\uA739\uA73B"
  }, {
    base: "ay",
    letters: "\uA73D"
  }, {
    base: "b",
    letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
  }, {
    base: "c",
    letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
  }, {
    base: "d",
    letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
  }, {
    base: "dz",
    letters: "\u01F3\u01C6"
  }, {
    base: "e",
    letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
  }, {
    base: "f",
    letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
  }, {
    base: "g",
    letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
  }, {
    base: "h",
    letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
  }, {
    base: "hv",
    letters: "\u0195"
  }, {
    base: "i",
    letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
  }, {
    base: "j",
    letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
  }, {
    base: "k",
    letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
  }, {
    base: "l",
    letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
  }, {
    base: "lj",
    letters: "\u01C9"
  }, {
    base: "m",
    letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
  }, {
    base: "n",
    letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
  }, {
    base: "nj",
    letters: "\u01CC"
  }, {
    base: "o",
    letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
  }, {
    base: "oi",
    letters: "\u01A3"
  }, {
    base: "ou",
    letters: "\u0223"
  }, {
    base: "oo",
    letters: "\uA74F"
  }, {
    base: "p",
    letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
  }, {
    base: "q",
    letters: "q\u24E0\uFF51\u024B\uA757\uA759"
  }, {
    base: "r",
    letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
  }, {
    base: "s",
    letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
  }, {
    base: "t",
    letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
  }, {
    base: "tz",
    letters: "\uA729"
  }, {
    base: "u",
    letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
  }, {
    base: "v",
    letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
  }, {
    base: "vy",
    letters: "\uA761"
  }, {
    base: "w",
    letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
  }, {
    base: "x",
    letters: "x\u24E7\uFF58\u1E8B\u1E8D"
  }, {
    base: "y",
    letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
  }, {
    base: "z",
    letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
  }],
  _r = {};
for (let r = 0; r < La.length; r += 1) {
  const e = La[r].letters;
  for (let a = 0; a < e.length; a += 1) _r[e[a]] = La[r].base
}

function Jt(r) {
  return r.replace(/[^\u0000-\u007E]/g, e => _r[e] || e)
}
class tc extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this,
      n = H({
        on: {}
      }, e.params.smartSelect);
    t.useModulesParams(n), t.params = H({}, n, a), t.app = e;
    const s = y(t.params.el).eq(0);
    if (s.length === 0) return t;
    if (s[0].f7SmartSelect) return s[0].f7SmartSelect;
    const i = s.find("select").eq(0);
    if (i.length === 0) return t;
    let o;
    t.params.setValueText && (o = y(t.params.valueEl), o.length === 0 && (o = s.find(".item-after")), o.length === 0 && (o = y('<div class="item-after"></div>'), o.insertAfter(s.find(".item-title"))));
    let l = a.url;
    l || (s.attr("href") && s.attr("href") !== "#" ? l = s.attr("href") : i.attr("name") && (l = `${i.attr("name").toLowerCase()}-select/`)), l || (l = t.params.url);
    const c = i[0].multiple,
      d = c ? "checkbox" : "radio",
      p = vt();
    H(t, {
      $el: s,
      el: s[0],
      $selectEl: i,
      selectEl: i[0],
      $valueEl: o,
      valueEl: o && o[0],
      url: l,
      multiple: c,
      inputType: d,
      id: p,
      inputName: `${d}-${p}`,
      selectName: i.attr("name"),
      maxLength: i.attr("maxlength") || a.maxLength
    }), s[0].f7SmartSelect = t;

    function u() {
      t.open()
    }

    function g() {
      const f = t.$selectEl.val();
      t.$el.trigger("smartselect:change", f), t.emit("local::change smartSelectChange", t, f), t.vl && t.vl.clearCache(), t.setValueText()
    }
    t.attachEvents = function () {
      s.on("click", u), s.on("change", "select", g)
    }, t.detachEvents = function () {
      s.off("click", u), s.off("change", "select", g)
    };

    function h() {
      let f, b;
      const m = this,
        v = m.value;
      let E = [],
        $;
      if (m.type === "checkbox") {
        for (let w = 0; w < t.selectEl.options.length; w += 1) f = t.selectEl.options[w], f.value === v && (f.selected = m.checked), f.selected && ($ = f.dataset ? f.dataset.displayAs : y(f).data("display-value-as"), b = $ && typeof $ != "undefined" ? $ : f.textContent, E.push(b.trim()));
        t.maxLength && t.checkMaxLength()
      } else f = t.$selectEl.find(`option[value="${v}"]`)[0], f || (f = t.$selectEl.find("option").filter(w => w.value === v)[0]), $ = f.dataset ? f.dataset.displayAs : y(f).data("display-as"), b = $ && typeof $ != "undefined" ? $ : f.textContent, E = [b], t.selectEl.value = v;
      t.$selectEl.trigger("change"), t.params.setValueText && t.formatValueTextContent(E), t.params.closeOnSelect && t.inputType === "radio" && t.close()
    }
    return t.attachInputsEvents = function () {
      t.$containerEl.on("change", 'input[type="checkbox"], input[type="radio"]', h)
    }, t.detachInputsEvents = function () {
      t.$containerEl.off("change", 'input[type="checkbox"], input[type="radio"]', h)
    }, t.useModules(), t.init(), t
  }
  setValue(e) {
    const a = this;
    let t = e,
      n = [],
      s, i, o;
    if (a.multiple) {
      Array.isArray(t) || (t = [t]);
      for (let l = 0; l < a.selectEl.options.length; l += 1) s = a.selectEl.options[l], t.indexOf(s.value) >= 0 ? s.selected = !0 : s.selected = !1, s.selected && (i = s.dataset ? s.dataset.displayAs : y(s).data("display-value-as"), o = i && typeof i != "undefined" ? i : s.textContent, n.push(o.trim()))
    } else s = a.$selectEl.find(`option[value="${t}"]`)[0], s && (i = s.dataset ? s.dataset.displayAs : y(s).data("display-as"), o = i && typeof i != "undefined" ? i : s.textContent, n = [o]), a.selectEl.value = t;
    return a.params.setValueText && a.formatValueTextContent(n), a.$selectEl.trigger("change"), a
  }
  unsetValue() {
    const e = this;
    e.params.setValueText && e.formatValueTextContent([]), e.$selectEl.find("option").each(a => {
      a.selected = !1, a.checked = !1
    }), e.$selectEl[0].value = null, e.$containerEl && e.$containerEl.find(`input[name="${e.inputName}"][type="checkbox"], input[name="${e.inputName}"][type="radio"]`).prop("checked", !1), e.$selectEl.trigger("change")
  }
  getValue() {
    return this.$selectEl.val()
  }
  get view() {
    const {
      params: e,
      $el: a
    } = this;
    let t;
    if (e.view && (t = e.view), t || (t = a.parents(".view").length && a.parents(".view")[0].f7View), !t && e.openIn === "page") throw Error("Smart Select requires initialized View");
    return t
  }
  checkMaxLength() {
    const e = this,
      a = e.$containerEl;
    e.selectEl.selectedOptions.length >= e.maxLength ? a.find('input[type="checkbox"]').each(t => {
      t.checked ? y(t).parents("li").removeClass("disabled") : y(t).parents("li").addClass("disabled")
    }) : a.find(".disabled").removeClass("disabled")
  }
  formatValueTextContent(e) {
    const a = this,
      t = a.formatValueText(e);
    t.includes("<") && t.includes(">") ? a.$valueEl.html(t) : a.$valueEl.text(t)
  }
  formatValueText(e) {
    const a = this;
    let t;
    return a.params.formatValueText ? t = a.params.formatValueText.call(a, e, a) : t = e.join(", "), t
  }
  setValueText(e) {
    const a = this;
    let t = [];
    typeof e != "undefined" ? Array.isArray(e) ? t = e : t = [e] : a.$selectEl.find("option").each(n => {
      const s = y(n);
      if (n.selected) {
        const i = n.dataset ? n.dataset.displayAs : s.data("display-value-as");
        i && typeof i != "undefined" ? t.push(i) : t.push(n.textContent.trim())
      }
    }), a.params.setValueText && a.formatValueTextContent(t)
  }
  getItemsData() {
    const e = this,
      a = e.app.theme,
      t = [];
    let n;
    return e.$selectEl.find("option").each(s => {
      const i = y(s),
        o = i.dataset(),
        l = o.optionImage || e.params.optionImage,
        c = o.optionIcon || e.params.optionIcon,
        d = a === "ios" && (o.optionIconIos || e.params.optionIconIos),
        p = a === "md" && (o.optionIconMd || e.params.optionIconMd),
        u = o.inputIconPosition || e.params.inputIconPosition || "",
        g = l || c || d || p,
        h = o.optionColor;
      let f = o.optionClass || "";
      i[0].disabled && (f += " disabled");
      const b = i.parent("optgroup")[0],
        m = b && b.label;
      let v = !1;
      b && b !== n && (v = !0, n = b, t.push({
        groupLabel: m,
        isLabel: v
      })), t.push({
        value: i[0].value,
        text: i[0].textContent.trim(),
        selected: i[0].selected,
        groupEl: b,
        groupLabel: m,
        image: l,
        icon: c,
        iconIos: d,
        iconMd: p,
        inputIconPosition: u,
        color: h,
        className: f,
        disabled: i[0].disabled,
        id: e.id,
        hasMedia: g,
        checkbox: e.inputType === "checkbox",
        radio: e.inputType === "radio",
        inputName: e.inputName,
        inputType: e.inputType
      })
    }), e.items = t, t
  }
  renderSearchbar() {
    const e = this;
    return e.params.renderSearchbar ? e.params.renderSearchbar.call(e) : T("form", {
      class: "searchbar"
    }, T("div", {
      class: "searchbar-inner"
    }, T("div", {
      class: "searchbar-input-wrap"
    }, T("input", {
      type: "search",
      spellcheck: e.params.searchbarSpellcheck || "false",
      placeholder: e.params.searchbarPlaceholder
    }), T("i", {
      class: "searchbar-icon"
    }), T("span", {
      class: "input-clear-button"
    })), e.params.searchbarDisableButton && T("span", {
      class: "searchbar-disable-button"
    }, e.params.searchbarDisableText)))
  }
  renderItem(e, a) {
    const t = this;
    if (t.params.renderItem) return t.params.renderItem.call(t, e, a);

    function n(o) {
      return o === void 0 && (o = ""), o.indexOf(":") >= 0 ? o.split(":")[1] : ""
    }

    function s(o) {
      if (o === void 0 && (o = ""), o.indexOf(":") >= 0) {
        let l = o.split(":")[0];
        return l === "f7" && (l = "f7-icons"), l === "material" && (l = "material-icons"), l
      }
      return o
    }
    let i;
    if (e.isLabel) i = `<li class="list-group-title">${e.groupLabel}</li>`;
    else {
      let o = e.selected,
        l;
      if (t.params.virtualList) {
        const f = t.getValue();
        o = t.multiple ? f.indexOf(e.value) >= 0 : f === e.value, t.multiple && (l = t.multiple && !o && f.length === parseInt(t.maxLength, 10))
      }
      const {
        icon: c,
        iconIos: d,
        iconMd: p
      } = e, u = c || d || p, g = n(c || d || p || ""), h = s(c || d || p || "");
      i = T("li", {
        class: `${e.className||""}${l?" disabled":""}`
      }, T("label", {
        class: `item-${e.inputType} ${e.inputIconPosition?`item-${e.inputType}-icon-${e.inputIconPosition}`:""} item-content`
      }, T("input", {
        type: e.inputType,
        name: e.inputName,
        value: e.value,
        _checked: o
      }), T("i", {
        class: `icon icon-${e.inputType}`
      }), e.hasMedia && T("div", {
        class: "item-media"
      }, u && T("i", {
        class: `icon ${h}`
      }, g), e.image && T("img", {
        src: e.image
      })), T("div", {
        class: "item-inner"
      }, T("div", {
        class: `item-title${e.color?` text-color-${e.color}`:""}`
      }, e.text))))
    }
    return i
  }
  renderItems() {
    const e = this;
    return e.params.renderItems ? e.params.renderItems.call(e, e.items) : `
      ${e.items.map((t,n)=>`${e.renderItem(t,n)}`).join("")}
    `
  }
  renderPage() {
    const e = this;
    if (e.params.renderPage) return e.params.renderPage.call(e, e.items);
    let a = e.params.pageTitle;
    if (typeof a == "undefined") {
      const n = e.$el.find(".item-title");
      a = n.length ? n.text().trim() : ""
    }
    const t = e.params.cssClass;
    return T("div", {
      class: `page smart-select-page ${t}`,
      "data-name": "smart-select-page",
      "data-select-name": e.selectName
    }, T("div", {
      class: `navbar ${e.params.navbarColorTheme?`color-${e.params.navbarColorTheme}`:""}`
    }, T("div", {
      class: "navbar-bg"
    }), T("div", {
      class: `navbar-inner sliding ${e.params.navbarColorTheme?`color-${e.params.navbarColorTheme}`:""}`
    }, T("div", {
      class: "left"
    }, T("a", {
      class: "link back"
    }, T("i", {
      class: "icon icon-back"
    }), T("span", {
      class: "if-not-md"
    }, e.params.pageBackLinkText))), a && T("div", {
      class: "title"
    }, a), e.params.searchbar && T("div", {
      class: "subnavbar"
    }, e.renderSearchbar()))), e.params.searchbar && T("div", {
      class: "searchbar-backdrop"
    }), T("div", {
      class: "page-content"
    }, T("div", {
      class: `list list-outline-ios list-strong-ios list-dividers-ios smart-select-list-${e.id} ${e.params.virtualList?" virtual-list":""} ${e.params.formColorTheme?`color-${e.params.formColorTheme}`:""}`
    }, T("ul", null, !e.params.virtualList && e.renderItems(e.items)))))
  }
  renderPopup() {
    const e = this;
    if (e.params.renderPopup) return e.params.renderPopup.call(e, e.items);
    let a = e.params.pageTitle;
    if (typeof a == "undefined") {
      const n = e.$el.find(".item-title");
      a = n.length ? n.text().trim() : ""
    }
    const t = e.params.cssClass || "";
    return T("div", {
      class: `popup smart-select-popup ${t} ${e.params.popupTabletFullscreen?"popup-tablet-fullscreen":""}`,
      "data-select-name": e.selectName
    }, T("div", {
      class: "view"
    }, T("div", {
      class: `page smart-select-page ${e.params.searchbar?"page-with-subnavbar":""}`,
      "data-name": "smart-select-page"
    }, T("div", {
      class: `navbar ${e.params.navbarColorTheme?`color-${e.params.navbarColorTheme}`:""}`
    }, T("div", {
      class: "navbar-bg"
    }), T("div", {
      class: "navbar-inner sliding"
    }, a && T("div", {
      class: "title"
    }, a), T("div", {
      class: "right"
    }, T("a", {
      class: "link popup-close",
      "data-popup": `.smart-select-popup[data-select-name='${e.selectName}']`
    }, e.params.popupCloseLinkText)), e.params.searchbar && T("div", {
      class: "subnavbar"
    }, e.renderSearchbar()))), e.params.searchbar && T("div", {
      class: "searchbar-backdrop"
    }), T("div", {
      class: "page-content"
    }, T("div", {
      class: `list list-outline-ios list-strong-ios list-dividers-ios smart-select-list-${e.id} ${e.params.virtualList?" virtual-list":""} ${e.params.formColorTheme?`color-${e.params.formColorTheme}`:""}`
    }, T("ul", null, !e.params.virtualList && e.renderItems(e.items)))))))
  }
  renderSheet() {
    const e = this;
    if (e.params.renderSheet) return e.params.renderSheet.call(e, e.items);
    const a = e.params.cssClass;
    return T("div", {
      class: `sheet-modal smart-select-sheet ${a}`,
      "data-select-name": e.selectName
    }, T("div", {
      class: `toolbar toolbar-top ${e.params.toolbarColorTheme?`color-${e.params.toolbarColorTheme}`:""}`
    }, T("div", {
      class: "toolbar-inner"
    }, T("div", {
      class: "left"
    }), T("div", {
      class: "right"
    }, T("a", {
      class: "link sheet-close"
    }, e.params.sheetCloseLinkText)))), T("div", {
      class: "sheet-modal-inner"
    }, T("div", {
      class: "page-content"
    }, T("div", {
      class: `list list-strong-ios list-dividers-ios smart-select-list-${e.id} ${e.params.virtualList?" virtual-list":""} ${e.params.formColorTheme?`color-${e.params.formColorTheme}`:""}`
    }, T("ul", null, !e.params.virtualList && e.renderItems(e.items))))))
  }
  renderPopover() {
    const e = this;
    if (e.params.renderPopover) return e.params.renderPopover.call(e, e.items);
    const a = e.params.cssClass;
    return T("div", {
      class: `popover smart-select-popover ${a}`,
      "data-select-name": e.selectName
    }, T("div", {
      class: "popover-inner"
    }, T("div", {
      class: `list list-strong-ios list-dividers-ios smart-select-list-${e.id} ${e.params.virtualList?" virtual-list":""} ${e.params.formColorTheme?`color-${e.params.formColorTheme}`:""}`
    }, T("ul", null, !e.params.virtualList && e.renderItems(e.items)))))
  }
  scrollToSelectedItem() {
    const e = this,
      {
        params: a,
        $containerEl: t
      } = e;
    if (!e.opened) return e;
    if (a.virtualList) {
      let n;
      e.vl.items.forEach((s, i) => {
        typeof n == "undefined" && s.selected && (n = i)
      }), typeof n != "undefined" && e.vl.scrollToItem(n)
    } else {
      const n = t.find("input:checked").parents("li");
      if (!n.length) return e;
      const s = t.find(".page-content, .popover-inner");
      if (!s.length) return e;
      s.scrollTop(n.offset().top - s.offset().top - parseInt(s.css("padding-top"), 10))
    }
    return e
  }
  onOpen(e, a) {
    const t = this,
      n = t.app,
      s = y(a);
    if (t.$containerEl = s, t.openedIn = e, t.opened = !0, t.params.virtualList && (t.vl = n.virtualList.create({
        el: s.find(".virtual-list"),
        items: t.items,
        renderItem: t.renderItem.bind(t),
        height: t.params.virtualListHeight,
        searchByItem(i, o) {
          return !!(o.text && Jt(o.text).toLowerCase().indexOf(i.trim().toLowerCase()) >= 0)
        }
      })), t.params.scrollToSelectedItem && t.scrollToSelectedItem(), t.params.searchbar) {
      let i = s.find(".searchbar");
      if (e === "page" && n.theme === "ios" && (i = y(n.navbar.getElByPage(s)).find(".searchbar")), t.params.appendSearchbarNotFound && (e === "page" || e === "popup")) {
        let l = null;
        typeof t.params.appendSearchbarNotFound == "string" ? l = y(`<div class="block searchbar-not-found">${t.params.appendSearchbarNotFound}</div>`) : typeof t.params.appendSearchbarNotFound == "boolean" ? l = y('<div class="block searchbar-not-found">Nothing found</div>') : l = t.params.appendSearchbarNotFound, l && s.find(".page-content").append(l[0])
      }
      const o = H({
        el: i,
        backdropEl: s.find(".searchbar-backdrop"),
        searchContainer: `.smart-select-list-${t.id}`,
        searchIn: ".item-title"
      }, typeof t.params.searchbar == "object" ? t.params.searchbar : {});
      t.searchbar = n.searchbar.create(o)
    }
    t.maxLength && t.checkMaxLength(), t.params.closeOnSelect && t.$containerEl.find(`input[type="radio"][name="${t.inputName}"]:checked`).parents("label").once("click", () => {
      t.close()
    }), t.attachInputsEvents(), t.$el.trigger("smartselect:open"), t.emit("local::open smartSelectOpen", t)
  }
  onOpened() {
    const e = this;
    e.$el.trigger("smartselect:opened"), e.emit("local::opened smartSelectOpened", e)
  }
  onClose() {
    const e = this;
    e.destroyed || (e.vl && e.vl.destroy && (e.vl.destroy(), e.vl = null, delete e.vl), e.searchbar && e.searchbar.destroy && (e.searchbar.destroy(), e.searchbar = null, delete e.searchbar), e.detachInputsEvents(), e.$el.trigger("smartselect:close"), e.emit("local::close smartSelectClose", e))
  }
  onClosed() {
    const e = this;
    e.destroyed || (e.opened = !1, e.$containerEl = null, delete e.$containerEl, e.$el.trigger("smartselect:closed"), e.emit("local::closed smartSelectClosed", e))
  }
  openPage() {
    const e = this;
    if (e.opened) return e;
    e.getItemsData();
    const a = e.renderPage(e.items);
    return e.view.router.navigate({
      url: e.url,
      route: {
        content: a,
        path: e.url,
        on: {
          pageBeforeIn(t, n) {
            e.onOpen("page", n.el)
          },
          pageAfterIn(t, n) {
            e.onOpened("page", n.el)
          },
          pageBeforeOut(t, n) {
            e.onClose("page", n.el)
          },
          pageAfterOut(t, n) {
            e.onClosed("page", n.el)
          }
        }
      }
    }), e
  }
  openPopup() {
    const e = this;
    if (e.opened) return e;
    e.getItemsData();
    const t = {
      content: e.renderPopup(e.items),
      push: e.params.popupPush,
      swipeToClose: e.params.popupSwipeToClose,
      closeByBackdropClick: e.params.closeByBackdropClick,
      on: {
        popupOpen(n) {
          e.onOpen("popup", n.el)
        },
        popupOpened(n) {
          e.onOpened("popup", n.el)
        },
        popupClose(n) {
          e.onClose("popup", n.el)
        },
        popupClosed(n) {
          e.onClosed("popup", n.el)
        }
      }
    };
    return e.params.routableModals && e.view ? e.view.router.navigate({
      url: e.url,
      route: {
        path: e.url,
        popup: t
      }
    }) : e.modal = e.app.popup.create(t).open(), e
  }
  openSheet() {
    const e = this;
    if (e.opened) return e;
    e.getItemsData();
    const t = {
      content: e.renderSheet(e.items),
      backdrop: e.params.sheetBackdrop,
      scrollToEl: e.$el,
      closeByOutsideClick: !0,
      push: e.params.sheetPush,
      swipeToClose: e.params.sheetSwipeToClose,
      closeByBackdropClick: e.params.closeByBackdropClick,
      on: {
        sheetOpen(n) {
          e.onOpen("sheet", n.el)
        },
        sheetOpened(n) {
          e.onOpened("sheet", n.el)
        },
        sheetClose(n) {
          e.onClose("sheet", n.el)
        },
        sheetClosed(n) {
          e.onClosed("sheet", n.el)
        }
      }
    };
    return e.params.routableModals && e.view ? e.view.router.navigate({
      url: e.url,
      route: {
        path: e.url,
        sheet: t
      }
    }) : e.modal = e.app.sheet.create(t).open(), e
  }
  openPopover() {
    const e = this;
    if (e.opened) return e;
    e.getItemsData();
    const t = {
      content: e.renderPopover(e.items),
      targetEl: e.$el,
      closeByBackdropClick: e.params.closeByBackdropClick,
      on: {
        popoverOpen(n) {
          e.onOpen("popover", n.el)
        },
        popoverOpened(n) {
          e.onOpened("popover", n.el)
        },
        popoverClose(n) {
          e.onClose("popover", n.el)
        },
        popoverClosed(n) {
          e.onClosed("popover", n.el)
        }
      }
    };
    return e.params.routableModals && e.view ? e.view.router.navigate({
      url: e.url,
      route: {
        path: e.url,
        popover: t
      }
    }) : e.modal = e.app.popover.create(t).open(), e
  }
  open(e) {
    const a = this;
    if (a.opened) return a;
    let t = !1;

    function n() {
      t = !0
    }
    if (a.$el && a.$el.trigger("smartselect:beforeopen", {
        prevent: n
      }), a.emit("local::beforeOpen smartSelectBeforeOpen", a, n), t) return a;
    const s = e || a.params.openIn;
    return a[`open${s.split("").map((i,o)=>o===0?i.toUpperCase():i).join("")}`](), a
  }
  close() {
    const e = this;
    return e.opened && (e.params.routableModals && e.view || e.openedIn === "page" ? e.view.router.back() : (e.modal.once("modalClosed", () => {
      ke(() => {
        e.destroyed || (e.modal.destroy(), delete e.modal)
      })
    }), e.modal.close())), e
  }
  init() {
    const e = this;
    e.attachEvents(), e.setValueText()
  }
  destroy() {
    const e = this;
    e.emit("local::beforeDestroy smartSelectBeforeDestroy", e), e.$el.trigger("smartselect:beforedestroy"), e.detachEvents(), delete e.$el[0].f7SmartSelect, $e(e), e.destroyed = !0
  }
}
var Kr = tc,
  ou = {
    name: "smartSelect",
    params: {
      smartSelect: {
        el: void 0,
        valueEl: void 0,
        setValueText: !0,
        formatValueText: null,
        openIn: "page",
        popupPush: !1,
        popupSwipeToClose: void 0,
        sheetPush: !1,
        sheetSwipeToClose: void 0,
        sheetBackdrop: !1,
        pageTitle: void 0,
        pageBackLinkText: "Back",
        popupCloseLinkText: "Close",
        popupTabletFullscreen: !1,
        closeByBackdropClick: !0,
        sheetCloseLinkText: "Done",
        searchbar: !1,
        searchbarPlaceholder: "Search",
        searchbarDisableText: "Cancel",
        searchbarDisableButton: !0,
        searchbarSpellcheck: !1,
        closeOnSelect: !1,
        virtualList: !1,
        virtualListHeight: void 0,
        scrollToSelectedItem: !1,
        formColorTheme: void 0,
        navbarColorTheme: void 0,
        routableModals: !1,
        url: "select/",
        inputIconPosition: "start",
        cssClass: "",
        renderPage: void 0,
        renderPopup: void 0,
        renderSheet: void 0,
        renderPopover: void 0,
        renderItems: void 0,
        renderItem: void 0,
        renderSearchbar: void 0
      }
    },
    static: {
      SmartSelect: Kr
    },
    create() {
      const r = this;
      r.smartSelect = H(xe({
        defaultSelector: ".smart-select",
        constructor: Kr,
        app: r,
        domProp: "f7SmartSelect"
      }), {
        open(e) {
          const a = r.smartSelect.get(e);
          if (a && a.open) return a.open()
        },
        close(e) {
          const a = r.smartSelect.get(e);
          if (a && a.close) return a.close()
        }
      })
    },
    on: {
      tabMounted(r) {
        const e = this;
        y(r).find(".smart-select-init").each(a => {
          e.smartSelect.create(H({
            el: a
          }, y(a).dataset()))
        })
      },
      tabBeforeRemove(r) {
        y(r).find(".smart-select-init").each(e => {
          e.f7SmartSelect && e.f7SmartSelect.destroy && e.f7SmartSelect.destroy()
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".smart-select-init").each(a => {
          e.smartSelect.create(H({
            el: a
          }, y(a).dataset()))
        })
      },
      pageBeforeRemove(r) {
        r.$el.find(".smart-select-init").each(e => {
          e.f7SmartSelect && e.f7SmartSelect.destroy && e.f7SmartSelect.destroy()
        })
      }
    },
    clicks: {
      ".smart-select": function (e, a) {
        const t = this;
        e[0].f7SmartSelect || t.smartSelect.create(H({
          el: e
        }, a)).open()
      }
    },
    vnode: {
      "smart-select-init": {
        insert(r) {
          const e = this,
            a = r.elm;
          e.smartSelect.create(H({
            el: a
          }, y(a).dataset()))
        },
        destroy(r) {
          const e = r.elm;
          e.f7SmartSelect && e.f7SmartSelect.destroy && e.f7SmartSelect.destroy()
        }
      }
    }
  },
  lu = {
    name: "grid"
  };
class ac extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this;
    t.params = H({}, e.params.calendar, a);
    let n;
    if (t.params.containerEl && (n = y(t.params.containerEl), n.length === 0)) return t;
    let s;
    t.params.inputEl && (s = y(t.params.inputEl));
    const i = t.params.direction === "horizontal";
    let o = 1;
    i && (o = e.rtl ? -1 : 1), H(t, {
      app: e,
      $containerEl: n,
      containerEl: n && n[0],
      inline: n && n.length > 0,
      $inputEl: s,
      inputEl: s && s[0],
      initialized: !1,
      opened: !1,
      url: t.params.url,
      isHorizontal: i,
      inverter: o,
      animating: !1,
      allowTouchMove: !0,
      hasTimePicker: t.params.timePicker && !t.params.rangePicker && !t.params.multiple
    }), t.dayFormatter = w => new Intl.DateTimeFormat(t.params.locale, {
      day: "numeric"
    }).format(w).replace(/日/, ""), t.monthFormatter = w => new Intl.DateTimeFormat(t.params.locale, {
      month: "long"
    }).format(w), t.yearFormatter = w => new Intl.DateTimeFormat(t.params.locale, {
      year: "numeric"
    }).format(w), t.timeSelectorFormatter = w => new Intl.DateTimeFormat(t.params.locale, t.params.timePickerFormat).format(w);
    const l = t.timeSelectorFormatter(new Date).toLowerCase();
    t.is12HoursFormat = l.indexOf("pm") >= 0 || l.indexOf("am") >= 0;
    let {
      monthNames: c,
      monthNamesShort: d,
      dayNames: p,
      dayNamesShort: u
    } = t.params;
    const {
      monthNamesIntl: g,
      monthNamesShortIntl: h,
      dayNamesIntl: f,
      dayNamesShortIntl: b
    } = t.getIntlNames();
    c === "auto" && (c = g), d === "auto" && (d = h), p === "auto" && (p = f), u === "auto" && (u = b), H(t, {
      monthNames: c,
      monthNamesShort: d,
      dayNames: p,
      dayNamesShort: u
    });

    function m() {
      t.open()
    }

    function v(w) {
      w.preventDefault()
    }

    function E() {
      t.setValue([]), t.opened && t.update()
    }

    function $(w) {
      const C = y(w.target);
      t.destroyed || !t.params || t.isPopover() || !t.opened || t.closing || C.closest('[class*="backdrop"]').length || t.monthPickerPopover || t.yearPickerPopover || t.timePickerPopover || (s && s.length > 0 ? C[0] !== s[0] && C.closest(".sheet-modal, .calendar-modal").length === 0 && t.close() : y(w.target).closest(".sheet-modal, .calendar-modal").length === 0 && t.close())
    }
    return H(t, {
      attachInputEvents() {
        t.$inputEl.on("click", m), t.$inputEl.on("input:clear", E), t.params.inputReadOnly && (t.$inputEl.on("focus mousedown", v), t.$inputEl[0] && (t.$inputEl[0].f7ValidateReadonly = !0))
      },
      detachInputEvents() {
        t.$inputEl.off("click", m), t.$inputEl.off("input:clear", E), t.params.inputReadOnly && (t.$inputEl.off("focus mousedown", v), t.$inputEl[0] && delete t.$inputEl[0].f7ValidateReadonly)
      },
      attachHtmlEvents() {
        e.on("click", $)
      },
      detachHtmlEvents() {
        e.off("click", $)
      }
    }), t.attachCalendarEvents = function () {
      let C = !0,
        x, M, A, B, S, P, k, I, R, D, z, O, L, N;
      const {
        $el: F,
        $wrapperEl: V
      } = t;

      function U(te) {
        M || x || (x = !0, A = te.type === "touchstart" ? te.targetTouches[0].pageX : te.pageX, S = A, B = te.type === "touchstart" ? te.targetTouches[0].pageY : te.pageY, P = B, k = new Date().getTime(), O = 0, C = !0, N = void 0, R = t.monthsTranslate)
      }

      function Z(te) {
        if (!x) return;
        const {
          isHorizontal: oe
        } = t;
        if (S = te.type === "touchmove" ? te.targetTouches[0].pageX : te.pageX, P = te.type === "touchmove" ? te.targetTouches[0].pageY : te.pageY, typeof N == "undefined" && (N = !!(N || Math.abs(P - B) > Math.abs(S - A))), oe && N || !t.allowTouchMove) {
          x = !1;
          return
        }
        if (te.preventDefault(), t.animating) {
          x = !1;
          return
        }
        C = !1, M || (M = !0, D = V[0].offsetWidth, z = V[0].offsetHeight, V.transition(0)), L = oe ? S - A : P - B, O = L / (oe ? D : z), R = (t.monthsTranslate * t.inverter + O) * 100, V.transform(`translate3d(${oe?R:0}%, ${oe?0:R}%, 0)`)
      }

      function J() {
        if (!x || !M) {
          x = !1, M = !1;
          return
        }
        x = !1, M = !1, I = new Date().getTime(), I - k < 300 ? Math.abs(L) < 10 ? t.resetMonth() : L >= 10 ? e.rtl ? t.nextMonth() : t.prevMonth() : e.rtl ? t.prevMonth() : t.nextMonth() : O <= -.5 ? e.rtl ? t.prevMonth() : t.nextMonth() : O >= .5 ? e.rtl ? t.nextMonth() : t.prevMonth() : t.resetMonth(), setTimeout(() => {
          C = !0
        }, 100)
      }

      function X(te) {
        if (!C) return;
        let oe = y(te.target).parents(".calendar-day");
        if (oe.length === 0 && y(te.target).hasClass("calendar-day") && (oe = y(te.target)), oe.length === 0 || oe.hasClass("calendar-day-disabled")) return;
        t.params.rangePicker || (oe.hasClass("calendar-day-next") && t.nextMonth(), oe.hasClass("calendar-day-prev") && t.prevMonth());
        const de = parseInt(oe.attr("data-year"), 10),
          le = parseInt(oe.attr("data-month"), 10),
          q = parseInt(oe.attr("data-day"), 10);
        if (t.emit("local::dayClick calendarDayClick", t, oe[0], de, le, q), !oe.hasClass("calendar-day-selected") || t.params.multiple || t.params.rangePicker) {
          const pe = new Date(de, le, q, 0, 0, 0);
          t.hasTimePicker && (t.value && t.value[0] ? pe.setHours(t.value[0].getHours(), t.value[0].getMinutes()) : pe.setHours(new Date().getHours(), new Date().getMinutes())), t.addValue(pe)
        }
        t.params.closeOnSelect && (t.params.rangePicker && t.value.length === 2 || !t.params.rangePicker) && t.close()
      }

      function Y() {
        t.nextMonth()
      }

      function W() {
        t.prevMonth()
      }

      function K() {
        t.nextYear()
      }

      function j() {
        t.prevYear()
      }

      function _() {
        t.openMonthPicker()
      }

      function Q() {
        t.openYearPicker()
      }

      function se() {
        t.openTimePicker()
      }
      const me = e.touchEvents.start === "touchstart" && ve().passiveListener ? {
        passive: !0,
        capture: !1
      } : !1;
      F.find(".calendar-prev-month-button").on("click", W), F.find(".calendar-next-month-button").on("click", Y), F.find(".calendar-prev-year-button").on("click", j), F.find(".calendar-next-year-button").on("click", K), t.params.monthPicker && F.find(".current-month-value").on("click", _), t.params.yearPicker && F.find(".current-year-value").on("click", Q), t.hasTimePicker && F.find(".calendar-time-selector a").on("click", se), V.on("click", X), t.params.touchMove && (V.on(e.touchEvents.start, U, me), e.on("touchmove:active", Z), e.on("touchend:passive", J)), t.detachCalendarEvents = function () {
        F.find(".calendar-prev-month-button").off("click", W), F.find(".calendar-next-month-button").off("click", Y), F.find(".calendar-prev-year-button").off("click", j), F.find(".calendar-next-year-button").off("click", K), t.params.monthPicker && F.find(".current-month-value").off("click", _), t.params.yearPicker && F.find(".current-year-value").off("click", Q), t.hasTimePicker && F.find(".calendar-time-selector a").off("click", se), V.off("click", X), t.params.touchMove && (V.off(e.touchEvents.start, U, me), e.off("touchmove:active", Z), e.off("touchend:passive", J))
      }
    }, t.init(), t
  }
  get view() {
    const {
      $inputEl: e,
      app: a,
      params: t
    } = this;
    let n;
    return t.view ? n = t.view : e && (n = e.parents(".view").length && e.parents(".view")[0].f7View), n || (n = a.views.main), n
  }
  getIntlNames() {
    const e = this,
      a = e.params.locale,
      t = [],
      n = [],
      s = [],
      i = [],
      o = new Intl.DateTimeFormat(a, {
        month: "long"
      }),
      l = new Intl.DateTimeFormat(a, {
        month: "short"
      }),
      c = new Intl.DateTimeFormat(a, {
        weekday: "long"
      }),
      d = new Intl.DateTimeFormat(a, {
        weekday: "short"
      });
    let p, u, g;
    for (let f = 0; f < 24; f += 1) {
      const b = new Date().setMonth(f, 1),
        m = e.yearFormatter(b);
      p && m !== p && (u && (g = !0), u = !0, p = m), p || (p = m), u && p === m && !g && (t.push(o.format(b)), n.push(l.format(b)))
    }
    const h = new Date().getDay();
    for (let f = 0; f < 7; f += 1) {
      const b = new Date().getTime() + (f - h) * 24 * 60 * 60 * 1e3;
      s.push(c.format(b)), i.push(d.format(b))
    }
    return {
      monthNamesIntl: t,
      monthNamesShortIntl: n,
      dayNamesIntl: s,
      dayNamesShortIntl: i
    }
  }
  normalizeDate(e) {
    const a = this,
      t = new Date(e);
    return a.hasTimePicker ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes()) : new Date(t.getFullYear(), t.getMonth(), t.getDate())
  }
  normalizeValues(e) {
    const a = this;
    let t = [];
    return e && Array.isArray(e) && (t = e.map(n => a.normalizeDate(n))), t
  }
  initInput() {
    const e = this;
    !e.$inputEl || e.params.inputReadOnly && e.$inputEl.prop("readOnly", !0)
  }
  isPopover() {
    const e = this,
      {
        app: a,
        modal: t,
        params: n
      } = e,
      s = ue();
    if (n.openIn === "sheet" || t && t.type !== "popover") return !1;
    if (!e.inline && e.inputEl) {
      if (n.openIn === "popover") return !0;
      if (s.ios) return !!s.ipad;
      if (a.width >= 768) return !0
    }
    return !1
  }
  formatDate(e) {
    const a = this,
      t = new Date(e),
      n = t.getFullYear(),
      s = t.getMonth(),
      i = s + 1,
      o = t.getDate(),
      l = t.getDay(),
      {
        monthNames: c,
        monthNamesShort: d,
        dayNames: p,
        dayNamesShort: u
      } = a,
      {
        dateFormat: g,
        locale: h
      } = a.params;

    function f(m) {
      return m < 10 ? `0${m}` : m
    }
    if (typeof g == "string") {
      const m = {
        yyyy: n,
        yy: String(n).substring(2),
        mm: f(i),
        m: i,
        MM: c[s],
        M: d[s],
        dd: f(o),
        d: o,
        DD: p[l],
        D: u[l]
      };
      if (a.params.timePicker) {
        const E = t.getHours(),
          $ = t.getMinutes(),
          w = t.getSeconds();
        let C = E;
        E > 12 && (C = E - 12), E === 0 && (C = 12);
        const x = E >= 12 && E !== 0 ? "pm" : "am";
        Object.assign(m, {
          HH: f(E),
          H: E,
          hh: f(C),
          h: C,
          ss: f(w),
          s: w,
          ":mm": f($),
          ":m": $,
          a: x,
          A: x.toUpperCase()
        })
      }
      const v = new RegExp(Object.keys(m).map(E => `(${E})`).join("|"), "g");
      return g.replace(v, E => E in m ? m[E] : E)
    }
    return typeof g == "function" ? g(t) : new Intl.DateTimeFormat(h, g).format(t)
  }
  formatValue() {
    const e = this,
      {
        value: a
      } = e;
    return e.params.formatValue ? e.params.formatValue.call(e, a) : a.map(t => e.formatDate(t)).join(e.params.rangePicker ? " - " : ", ")
  }
  addValue(e) {
    const a = this,
      {
        multiple: t,
        rangePicker: n,
        rangePickerMinDays: s,
        rangePickerMaxDays: i
      } = a.params;
    if (t) {
      a.value || (a.value = []);
      let o;
      for (let l = 0; l < a.value.length; l += 1) new Date(e).getTime() === new Date(a.value[l]).getTime() && (o = l);
      typeof o == "undefined" ? a.value.push(e) : a.value.splice(o, 1), a.updateValue()
    } else n ? (a.value || (a.value = []), (a.value.length === 2 || a.value.length === 0) && (a.value = []), a.value.length === 0 || Math.abs(a.value[0].getTime() - e.getTime()) >= (s - 1) * 60 * 60 * 24 * 1e3 && (i === 0 || Math.abs(a.value[0].getTime() - e.getTime()) <= (i - 1) * 60 * 60 * 24 * 1e3) ? a.value.push(e) : a.value = [], a.value.sort((o, l) => o - l), a.updateValue()) : (a.value = [e], a.updateValue())
  }
  setValue(e) {
    const a = this,
      t = a.value;
    if (Array.isArray(t) && Array.isArray(e) && t.length === e.length) {
      let n = !0;
      if (t.forEach((s, i) => {
          s !== e[i] && (n = !1)
        }), n) return
    }
    a.value = e, a.updateValue()
  }
  getValue() {
    return this.value
  }
  updateValue(e) {
    const a = this,
      {
        $el: t,
        $wrapperEl: n,
        $inputEl: s,
        value: i,
        params: o
      } = a;
    let l;
    if (t && t.length > 0) {
      n.find(".calendar-day-selected").removeClass("calendar-day-selected calendar-day-selected-range calendar-day-selected-left calendar-day-selected-right");
      let c;
      if (o.rangePicker && i.length === 2) {
        const d = new Date(i[0]).getTime(),
          p = new Date(i[1]).getTime();
        for (l = d; l <= p; l += 24 * 60 * 60 * 1e3) {
          c = new Date(l);
          let u = "calendar-day-selected";
          d !== p && (l !== d && l !== p && (u += " calendar-day-selected-range"), l === d && (u += " calendar-day-selected-left"), l === p && (u += " calendar-day-selected-right")), n.find(`.calendar-day[data-date="${c.getFullYear()}-${c.getMonth()}-${c.getDate()}"]`).addClass(u)
        }
        c = new Date(d), n.find(`.calendar-day[data-date="${c.getFullYear()}-${c.getMonth()}-${c.getDate()}"]`).removeClass("calendar-day-selected-range").addClass("calendar-day-selected calendar-day-selected-left"), c = new Date(p), n.find(`.calendar-day[data-date="${c.getFullYear()}-${c.getMonth()}-${c.getDate()}"]`).removeClass("calendar-day-selected-range").addClass("calendar-day-selected calendar-day-selected-right")
      } else
        for (l = 0; l < a.value.length; l += 1) c = new Date(i[l]), n.find(`.calendar-day[data-date="${c.getFullYear()}-${c.getMonth()}-${c.getDate()}"]`).addClass("calendar-day-selected")
    }
    if (e || a.emit("local::change calendarChange", a, i), t && t.length > 0 && a.hasTimePicker && t.find(".calendar-time-selector a").text(i && i.length ? a.timeSelectorFormatter(i[0]) : a.params.timePickerPlaceholder), s && s.length || o.header) {
      const c = a.formatValue(i);
      o.header && t && t.length && t.find(".calendar-selected-date").text(c), s && s.length && !e && (s.val(c), s.trigger("change"))
    }
  }
  updateCurrentMonthYear(e) {
    const a = this,
      {
        $months: t,
        $el: n,
        monthNames: s
      } = a;
    let i, o;
    typeof e == "undefined" ? (a.currentMonth = parseInt(t.eq(1).attr("data-month"), 10), a.currentYear = parseInt(t.eq(1).attr("data-year"), 10), i = t.eq(1).attr("data-locale-month"), o = t.eq(1).attr("data-locale-year")) : (a.currentMonth = parseInt(t.eq(e === "next" ? t.length - 1 : 0).attr("data-month"), 10), a.currentYear = parseInt(t.eq(e === "next" ? t.length - 1 : 0).attr("data-year"), 10), i = t.eq(e === "next" ? t.length - 1 : 0).attr("data-locale-month"), o = t.eq(e === "next" ? t.length - 1 : 0).attr("data-locale-year")), n.find(".current-month-value").text(s[i]), n.find(".current-year-value").text(o)
  }
  update() {
    const e = this,
      {
        currentYear: a,
        currentMonth: t,
        $wrapperEl: n
      } = e,
      s = new Date(a, t),
      i = e.renderMonth(s, "prev"),
      o = e.renderMonth(s),
      l = e.renderMonth(s, "next");
    n.transition(0).html(`${i}${o}${l}`).transform("translate3d(0,0,0)"), e.$months = n.find(".calendar-month"), e.monthsTranslate = 0, e.setMonthsTranslate(), e.$months.each(c => {
      e.emit("local::monthAdd calendarMonthAdd", c)
    })
  }
  onMonthChangeStart(e) {
    const a = this,
      {
        $months: t,
        currentYear: n,
        currentMonth: s
      } = a;
    a.updateCurrentMonthYear(e), t.removeClass("calendar-month-current calendar-month-prev calendar-month-next");
    const i = e === "next" ? t.length - 1 : 0;
    t.eq(i).addClass("calendar-month-current"), t.eq(e === "next" ? i - 1 : i + 1).addClass(e === "next" ? "calendar-month-prev" : "calendar-month-next"), a.emit("local::monthYearChangeStart calendarMonthYearChangeStart", a, n, s)
  }
  onMonthChangeEnd(e, a) {
    const t = this,
      {
        currentYear: n,
        currentMonth: s,
        $wrapperEl: i,
        monthsTranslate: o
      } = t;
    t.animating = !1;
    let l, c, d;
    i.find(".calendar-month:not(.calendar-month-prev):not(.calendar-month-current):not(.calendar-month-next)").remove(), typeof e == "undefined" && (e = "next", a = !0), a ? (i.find(".calendar-month-next, .calendar-month-prev").remove(), c = t.renderMonth(new Date(n, s), "prev"), l = t.renderMonth(new Date(n, s), "next")) : d = t.renderMonth(new Date(n, s), e), (e === "next" || a) && i.append(d || l), (e === "prev" || a) && i.prepend(d || c);
    const p = i.find(".calendar-month");
    t.$months = p, t.setMonthsTranslate(o), t.emit("local::monthAdd calendarMonthAdd", t, e === "next" ? p.eq(p.length - 1)[0] : p.eq(0)[0]), t.emit("local::monthYearChangeEnd calendarMonthYearChangeEnd", t, n, s)
  }
  setMonthsTranslate(e) {
    const a = this,
      {
        $months: t,
        isHorizontal: n,
        inverter: s
      } = a;
    e = e || a.monthsTranslate || 0, typeof a.monthsTranslate == "undefined" && (a.monthsTranslate = e), t.removeClass("calendar-month-current calendar-month-prev calendar-month-next");
    const i = -(e + 1) * 100 * s,
      o = -e * 100 * s,
      l = -(e - 1) * 100 * s;
    t.eq(0).transform(`translate3d(${n?i:0}%, ${n?0:i}%, 0)`).addClass("calendar-month-prev"), t.eq(1).transform(`translate3d(${n?o:0}%, ${n?0:o}%, 0)`).addClass("calendar-month-current"), t.eq(2).transform(`translate3d(${n?l:0}%, ${n?0:l}%, 0)`).addClass("calendar-month-next")
  }
  nextMonth(e) {
    const a = this,
      {
        params: t,
        $wrapperEl: n,
        inverter: s,
        isHorizontal: i
      } = a;
    (typeof e == "undefined" || typeof e == "object") && (e = "", t.animate || (e = 0));
    const o = parseInt(a.$months.eq(a.$months.length - 1).attr("data-month"), 10),
      l = parseInt(a.$months.eq(a.$months.length - 1).attr("data-year"), 10),
      d = new Date(l, o).getTime(),
      p = !a.animating;
    if (t.maxDate && d > new Date(t.maxDate).getTime()) {
      a.resetMonth();
      return
    }
    if (a.monthsTranslate -= 1, o === a.currentMonth) {
      const g = -a.monthsTranslate * 100 * s,
        h = y(a.renderMonth(d, "next")).transform(`translate3d(${i?g:0}%, ${i?0:g}%, 0)`).addClass("calendar-month-next");
      n.append(h[0]), a.$months = n.find(".calendar-month"), a.emit("local::monthAdd calendarMonthAdd", a.$months.eq(a.$months.length - 1)[0])
    }
    a.animating = !0, a.onMonthChangeStart("next");
    const u = a.monthsTranslate * 100 * s;
    n.transition(e).transform(`translate3d(${i?u:0}%, ${i?0:u}%, 0)`), p && n.transitionEnd(() => {
      a.onMonthChangeEnd("next")
    }), t.animate || a.onMonthChangeEnd("next")
  }
  prevMonth(e) {
    const a = this,
      {
        params: t,
        $wrapperEl: n,
        inverter: s,
        isHorizontal: i
      } = a;
    (typeof e == "undefined" || typeof e == "object") && (e = "", t.animate || (e = 0));
    const o = parseInt(a.$months.eq(0).attr("data-month"), 10),
      l = parseInt(a.$months.eq(0).attr("data-year"), 10),
      d = new Date(l, o + 1, -1).getTime(),
      p = !a.animating;
    if (t.minDate) {
      let g = new Date(t.minDate);
      if (g = new Date(g.getFullYear(), g.getMonth(), 1), d < g.getTime()) {
        a.resetMonth();
        return
      }
    }
    if (a.monthsTranslate += 1, o === a.currentMonth) {
      const g = -a.monthsTranslate * 100 * s,
        h = y(a.renderMonth(d, "prev")).transform(`translate3d(${i?g:0}%, ${i?0:g}%, 0)`).addClass("calendar-month-prev");
      n.prepend(h[0]), a.$months = n.find(".calendar-month"), a.emit("local::monthAdd calendarMonthAdd", a.$months.eq(0)[0])
    }
    a.animating = !0, a.onMonthChangeStart("prev");
    const u = a.monthsTranslate * 100 * s;
    n.transition(e).transform(`translate3d(${i?u:0}%, ${i?0:u}%, 0)`), p && n.transitionEnd(() => {
      a.onMonthChangeEnd("prev")
    }), t.animate || a.onMonthChangeEnd("prev")
  }
  resetMonth(e) {
    e === void 0 && (e = "");
    const a = this,
      {
        $wrapperEl: t,
        inverter: n,
        isHorizontal: s,
        monthsTranslate: i
      } = a,
      o = i * 100 * n;
    t.transition(e).transform(`translate3d(${s?o:0}%, ${s?0:o}%, 0)`)
  }
  setYearMonth(e, a, t) {
    const n = this,
      {
        params: s,
        isHorizontal: i,
        $wrapperEl: o,
        inverter: l
      } = n;
    typeof e == "undefined" && (e = n.currentYear), typeof a == "undefined" && (a = n.currentMonth), (typeof t == "undefined" || typeof t == "object") && (t = "", s.animate || (t = 0));
    let c;
    if (e < n.currentYear ? c = new Date(e, a + 1, -1).getTime() : c = new Date(e, a).getTime(), s.maxDate && c > new Date(s.maxDate).getTime()) return !1;
    if (s.minDate) {
      let m = new Date(s.minDate);
      if (m = new Date(m.getFullYear(), m.getMonth(), 1), c < m.getTime()) return !1
    }
    const d = new Date(n.currentYear, n.currentMonth).getTime(),
      p = c > d ? "next" : "prev",
      u = n.renderMonth(new Date(e, a));
    n.monthsTranslate = n.monthsTranslate || 0;
    const g = n.monthsTranslate;
    let h;
    const f = !n.animating && t !== 0;
    c > d ? (n.monthsTranslate -= 1, n.animating || n.$months.eq(n.$months.length - 1).remove(), o.append(u), n.$months = o.find(".calendar-month"), h = -(g - 1) * 100 * l, n.$months.eq(n.$months.length - 1).transform(`translate3d(${i?h:0}%, ${i?0:h}%, 0)`).addClass("calendar-month-next")) : (n.monthsTranslate += 1, n.animating || n.$months.eq(0).remove(), o.prepend(u), n.$months = o.find(".calendar-month"), h = -(g + 1) * 100 * l, n.$months.eq(0).transform(`translate3d(${i?h:0}%, ${i?0:h}%, 0)`).addClass("calendar-month-prev")), n.emit("local::monthAdd calendarMonthAdd", p === "next" ? n.$months.eq(n.$months.length - 1)[0] : n.$months.eq(0)[0]), n.animating = !0, n.onMonthChangeStart(p);
    const b = n.monthsTranslate * 100 * l;
    o.transition(t).transform(`translate3d(${i?b:0}%, ${i?0:b}%, 0)`), f && o.transitionEnd(() => {
      n.onMonthChangeEnd(p, !0)
    }), (!s.animate || t === 0) && n.onMonthChangeEnd(p, !0)
  }
  nextYear() {
    const e = this;
    e.setYearMonth(e.currentYear + 1)
  }
  prevYear() {
    const e = this;
    e.setYearMonth(e.currentYear - 1)
  }
  dateInRange(e, a) {
    let t = !1,
      n;
    if (!a) return !1;
    if (Array.isArray(a))
      for (n = 0; n < a.length; n += 1) a[n].from || a[n].to ? a[n].from && a[n].to ? e <= new Date(a[n].to).getTime() && e >= new Date(a[n].from).getTime() && (t = !0) : a[n].from ? e >= new Date(a[n].from).getTime() && (t = !0) : a[n].to && e <= new Date(a[n].to).getTime() && (t = !0) : a[n].date ? e === new Date(a[n].date).getTime() && (t = !0) : e === new Date(a[n]).getTime() && (t = !0);
    else a.from || a.to ? a.from && a.to ? e <= new Date(a.to).getTime() && e >= new Date(a.from).getTime() && (t = !0) : a.from ? e >= new Date(a.from).getTime() && (t = !0) : a.to && e <= new Date(a.to).getTime() && (t = !0) : a.date ? t = e === new Date(a.date).getTime() : typeof a == "function" && (t = a(new Date(e)));
    return t
  }
  daysInMonth(e) {
    const a = new Date(e);
    return new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate()
  }
  renderMonths(e) {
    const a = this;
    return a.params.renderMonths ? a.params.renderMonths.call(a, e) : T("div", {
      class: "calendar-months-wrapper"
    }, a.renderMonth(e, "prev"), a.renderMonth(e), a.renderMonth(e, "next"))
  }
  renderMonth(e, a) {
    const t = this,
      {
        params: n,
        value: s
      } = t;
    if (n.renderMonth) return n.renderMonth.call(t, e, a);
    let i = new Date(e),
      o = i.getFullYear(),
      l = i.getMonth(),
      c = t.monthNames.indexOf(t.monthFormatter(i));
    c < 0 && (c = l);
    let d = t.yearFormatter(i);
    a === "next" && (l === 11 ? i = new Date(o + 1, 0) : i = new Date(o, l + 1, 1)), a === "prev" && (l === 0 ? i = new Date(o - 1, 11) : i = new Date(o, l - 1, 1)), (a === "next" || a === "prev") && (l = i.getMonth(), o = i.getFullYear(), c = t.monthNames.indexOf(t.monthFormatter(i)), c < 0 && (c = l), d = t.yearFormatter(i));
    const p = [],
      u = new Date().setHours(0, 0, 0, 0),
      g = n.minDate ? new Date(n.minDate).getTime() : null,
      h = n.maxDate ? new Date(n.maxDate).getTime() : null,
      f = 6,
      b = 7,
      m = t.daysInMonth(new Date(i.getFullYear(), i.getMonth()).getTime() - 10 * 24 * 60 * 60 * 1e3),
      v = t.daysInMonth(i),
      E = n.firstDay === 6 ? 0 : 1;
    let $ = "",
      w = 0 + (n.firstDay - 1),
      C, x, M = new Date(i.getFullYear(), i.getMonth()).getDay();
    if (M === 0 && (M = 7), s && s.length)
      for (let A = 0; A < s.length; A += 1) p.push(new Date(s[A]).setHours(0, 0, 0, 0));
    for (let A = 1; A <= f; A += 1) {
      let B = "";
      for (let S = 1; S <= b; S += 1) {
        w += 1;
        let P, k = w - M,
          I = "";
        A === 1 && S === 1 && k > E && n.firstDay !== 1 && (w -= 7, k = w - M);
        const R = S - 1 + n.firstDay > 6 ? S - 1 - 7 + n.firstDay : S - 1 + n.firstDay;
        k < 0 ? (k = m + k + 1, I += " calendar-day-prev", P = new Date(l - 1 < 0 ? o - 1 : o, l - 1 < 0 ? 11 : l - 1, k).getTime()) : (k += 1, k > v ? (k -= v, I += " calendar-day-next", P = new Date(l + 1 > 11 ? o + 1 : o, l + 1 > 11 ? 0 : l + 1, k).getTime()) : P = new Date(o, l, k).getTime()), P === u && (I += " calendar-day-today"), n.rangePicker && p.length === 2 ? (P >= p[0] && P <= p[1] && (I += " calendar-day-selected"), p[0] !== p[1] && (P > p[0] && P < p[1] && (I += " calendar-day-selected-range"), P === p[0] && (I += " calendar-day-selected-left"), P === p[1] && (I += " calendar-day-selected-right"))) : p.indexOf(P) >= 0 && (I += " calendar-day-selected"), n.weekendDays.indexOf(R) >= 0 && (I += " calendar-day-weekend");
        let D = "";
        if (x = !1, n.events && t.dateInRange(P, n.events) && (x = !0), x && (I += " calendar-day-has-events", D = `
            <span class="calendar-day-events">
              <span class="calendar-day-event"></span>
            </span>
          `, Array.isArray(n.events))) {
          const N = [];
          n.events.forEach(F => {
            const V = F.color || "";
            N.indexOf(V) < 0 && t.dateInRange(P, F) && N.push(V)
          }), D = `
              <span class="calendar-day-events">
                ${N.map(F=>`
                  <span class="calendar-day-event" style="${F?`background-color: ${F}`:""}"></span>
                `.trim()).join("")}
              </span>
            `
        }
        if (n.rangesClasses)
          for (let N = 0; N < n.rangesClasses.length; N += 1) t.dateInRange(P, n.rangesClasses[N].range) && (I += ` ${n.rangesClasses[N].cssClass}`);
        C = !1, (g && P < g || h && P > h) && (C = !0), n.disabled && t.dateInRange(P, n.disabled) && (C = !0), C && (I += " calendar-day-disabled"), P = new Date(P);
        const z = P.getFullYear(),
          O = P.getMonth(),
          L = t.dayFormatter(P);
        B += `
          <div data-year="${z}" data-month="${O}" data-day="${k}" class="calendar-day${I}" data-date="${z}-${O}-${k}">
            <span class="calendar-day-number">${L}${D}</span>
          </div>`.trim()
      }
      $ += `<div class="calendar-row">${B}</div>`
    }
    return $ = `<div class="calendar-month" data-year="${o}" data-month="${l}" data-locale-year="${d}" data-locale-month="${c}">${$}</div>`, $
  }
  renderWeekHeader() {
    const e = this;
    if (e.params.renderWeekHeader) return e.params.renderWeekHeader.call(e);
    const {
      params: a
    } = e;
    let t = "";
    for (let n = 0; n < 7; n += 1) {
      const s = n + a.firstDay > 6 ? n - 7 + a.firstDay : n + a.firstDay;
      t += `<div class="calendar-week-day">${e.dayNamesShort[s]}</div>`
    }
    return T("div", {
      class: "calendar-week-header"
    }, t)
  }
  renderMonthSelector() {
    const e = this;
    return e.params.renderMonthSelector ? e.params.renderMonthSelector.call(e) : T("div", {
      class: "calendar-month-selector"
    }, T("a", {
      class: "link icon-only calendar-prev-month-button"
    }, T("i", {
      class: "icon icon-prev"
    })), e.params.monthPicker ? T("a", {
      class: "current-month-value link"
    }) : T("span", {
      class: "current-month-value"
    }), T("a", {
      class: "link icon-only calendar-next-month-button"
    }, T("i", {
      class: "icon icon-next"
    })))
  }
  renderYearSelector() {
    const e = this;
    return e.params.renderYearSelector ? e.params.renderYearSelector.call(e) : T("div", {
      class: "calendar-year-selector"
    }, T("a", {
      class: "link icon-only calendar-prev-year-button"
    }, T("i", {
      class: "icon icon-prev"
    })), e.params.yearPicker ? T("a", {
      class: "current-year-value link"
    }) : T("span", {
      class: "current-year-value"
    }), T("a", {
      class: "link icon-only calendar-next-year-button"
    }, T("i", {
      class: "icon icon-next"
    })))
  }
  renderTimeSelector() {
    const e = this,
      a = e.value && e.value[0];
    let t;
    return a && (t = e.timeSelectorFormatter(a)), T("div", {
      class: "calendar-time-selector"
    }, T("span", null, e.params.timePickerLabel), T("a", {
      class: "link"
    }, t || e.params.timePickerPlaceholder))
  }
  renderHeader() {
    const e = this;
    return e.params.renderHeader ? e.params.renderHeader.call(e) : T("div", {
      class: "calendar-header"
    }, T("div", {
      class: "calendar-selected-date"
    }, e.params.headerPlaceholder))
  }
  renderFooter() {
    const e = this,
      a = e.app;
    return e.params.renderFooter ? e.params.renderFooter.call(e) : T("div", {
      class: "calendar-footer"
    }, T("a", {
      class: `${a.theme==="md"?"button button-round":"link"} calendar-close sheet-close popover-close`
    }, e.params.toolbarCloseText))
  }
  renderToolbar() {
    const e = this;
    return e.params.renderToolbar ? e.params.renderToolbar.call(e, e) : T("div", {
      class: "toolbar toolbar-top"
    }, T("div", {
      class: "toolbar-inner"
    }, e.params.monthSelector ? e.renderMonthSelector() : "", e.params.yearSelector ? e.renderYearSelector() : ""))
  }
  renderInline() {
    const e = this,
      {
        cssClass: a,
        toolbar: t,
        header: n,
        footer: s,
        rangePicker: i,
        weekHeader: o
      } = e.params,
      {
        value: l,
        hasTimePicker: c
      } = e,
      d = l && l.length ? l[0] : new Date().setHours(0, 0, 0);
    return T("div", {
      class: `calendar calendar-inline ${i?"calendar-range":""} ${a||""}`
    }, n && e.renderHeader(), t && e.renderToolbar(), o && e.renderWeekHeader(), T("div", {
      class: "calendar-months"
    }, e.renderMonths(d)), c && e.renderTimeSelector(), s && e.renderFooter())
  }
  renderCustomModal() {
    const e = this,
      {
        cssClass: a,
        toolbar: t,
        header: n,
        footer: s,
        rangePicker: i,
        weekHeader: o
      } = e.params,
      {
        value: l,
        hasTimePicker: c
      } = e,
      d = l && l.length ? l[0] : new Date().setHours(0, 0, 0);
    return T("div", {
      class: `calendar calendar-modal ${i?"calendar-range":""} ${a||""}`
    }, n && e.renderHeader(), t && e.renderToolbar(), o && e.renderWeekHeader(), T("div", {
      class: "calendar-months"
    }, e.renderMonths(d)), c && e.renderTimeSelector(), s && e.renderFooter())
  }
  renderSheet() {
    const e = this,
      {
        cssClass: a,
        toolbar: t,
        header: n,
        footer: s,
        rangePicker: i,
        weekHeader: o
      } = e.params,
      {
        value: l,
        hasTimePicker: c
      } = e,
      d = l && l.length ? l[0] : new Date().setHours(0, 0, 0);
    return T("div", {
      class: `sheet-modal calendar calendar-sheet ${i?"calendar-range":""} ${a||""}`
    }, n && e.renderHeader(), t && e.renderToolbar(), o && e.renderWeekHeader(), T("div", {
      class: "sheet-modal-inner calendar-months"
    }, e.renderMonths(d)), c && e.renderTimeSelector(), s && e.renderFooter())
  }
  renderPopover() {
    const e = this,
      {
        cssClass: a,
        toolbar: t,
        header: n,
        footer: s,
        rangePicker: i,
        weekHeader: o
      } = e.params,
      {
        value: l,
        hasTimePicker: c
      } = e,
      d = l && l.length ? l[0] : new Date().setHours(0, 0, 0);
    return T("div", {
      class: "popover calendar-popover"
    }, T("div", {
      class: "popover-inner"
    }, T("div", {
      class: `calendar ${i?"calendar-range":""} ${a||""}`
    }, n && e.renderHeader(), t && e.renderToolbar(), o && e.renderWeekHeader(), T("div", {
      class: "calendar-months"
    }, e.renderMonths(d)), c && e.renderTimeSelector(), s && e.renderFooter())))
  }
  render() {
    const e = this,
      {
        params: a
      } = e;
    if (a.render) return a.render.call(e);
    if (!e.inline) {
      let t = a.openIn;
      return t === "auto" && (t = e.isPopover() ? "popover" : "sheet"), t === "popover" ? e.renderPopover() : t === "sheet" ? e.renderSheet() : e.renderCustomModal()
    }
    return e.renderInline()
  }
  openMonthPicker() {
    const e = this,
      {
        $el: a,
        app: t
      } = e;
    if (!a || !a.length) return;
    a.append('<div class="popover calendar-popover calendar-month-picker-popover"><div class="popover-inner"><div class="calendar-month-picker"></div></div></div>'), e.monthPickerPopover = t.popover.create({
      el: a.find(".calendar-month-picker-popover"),
      targetEl: a.find(".calendar-month-selector"),
      backdrop: !0,
      backdropUnique: !0,
      on: {
        close() {
          e.closeMonthPicker()
        },
        closed() {
          e.monthPickerPopover.$el && e.monthPickerPopover.$el.remove(), e.monthPickerPopover.destroy(), e.monthPickerInstance && (e.monthPickerInstance.close(), e.monthPickerInstance.destroy()), delete e.monthPickerInstance, delete e.monthPickerPopover
        }
      }
    }), e.monthPickerPopover.open();
    const n = parseInt(e.$el.find(".calendar-month-current").attr("data-locale-month"), 10),
      s = [],
      i = [];
    e.monthNames.forEach((o, l) => {
      s.push(l), i.push(o)
    }), e.monthPickerInstance = t.picker.create({
      containerEl: e.monthPickerPopover.$el.find(".calendar-month-picker"),
      value: [n],
      toolbar: e.params.monthPickerToolbar,
      rotateEffect: !1,
      toolbarCloseText: e.params.monthPickerCloseText,
      cols: [{
        values: s,
        displayValues: i
      }]
    })
  }
  closeMonthPicker() {
    const e = this;
    e.monthPickerPopover && e.monthPickerPopover.opened && e.monthPickerPopover.close();
    const a = e.monthPickerInstance.value[0],
      t = parseInt(e.$el.find(".calendar-month-current").attr("data-locale-month"), 10),
      n = e.currentMonth,
      s = t - n,
      i = a - s;
    e.setYearMonth(e.currentYear, i, 0)
  }
  openYearPicker() {
    const e = this,
      {
        $el: a,
        app: t
      } = e;
    if (!a || !a.length) return;
    a.append('<div class="popover calendar-popover calendar-year-picker-popover"><div class="popover-inner"><div class="calendar-year-picker"></div></div></div>'), e.yearPickerPopover = t.popover.create({
      el: a.find(".calendar-year-picker-popover"),
      targetEl: a.find(".calendar-year-selector"),
      backdrop: !0,
      backdropUnique: !0,
      on: {
        close() {
          e.closeYearPicker()
        },
        closed() {
          e.yearPickerPopover.$el && e.yearPickerPopover.$el.remove(), e.yearPickerPopover.destroy(), e.yearPickerInstance && (e.yearPickerInstance.close(), e.yearPickerInstance.destroy()), delete e.yearPickerInstance, delete e.yearPickerPopover
        }
      }
    }), e.yearPickerPopover.open();
    const n = e.currentYear;
    let s = e.params.yearPickerMin || new Date().getFullYear() - 100;
    e.params.minDate && (s = Math.max(s, new Date(e.params.minDate).getFullYear()));
    let i = e.params.yearPickerMax || new Date().getFullYear() + 100;
    e.params.maxDate && (i = Math.min(i, new Date(e.params.maxDate).getFullYear()));
    const o = [];
    for (let l = s; l <= i; l += 1) o.push(l);
    e.yearPickerInstance = t.picker.create({
      containerEl: e.yearPickerPopover.$el.find(".calendar-year-picker"),
      value: [n],
      toolbar: e.params.yearPickerToolbar,
      rotateEffect: !1,
      toolbarCloseText: e.params.yearPickerCloseText,
      cols: [{
        values: o
      }]
    })
  }
  closeYearPicker() {
    const e = this;
    e.yearPickerPopover && e.yearPickerPopover.opened && e.yearPickerPopover.close(), e.setYearMonth(e.yearPickerInstance.value[0], void 0, 0)
  }
  openTimePicker() {
    const e = this,
      {
        $el: a,
        app: t,
        is12HoursFormat: n
      } = e;
    if (!a || !a.length) return;
    a.append('<div class="popover calendar-popover calendar-time-picker-popover"><div class="popover-inner"><div class="calendar-time-picker"></div></div></div>');
    const s = [],
      i = [],
      o = n ? 1 : 0,
      l = n ? 12 : 23;
    for (let d = o; d <= l; d += 1) s.push(d);
    for (let d = 0; d <= 59; d += 1) i.push(d);
    let c;
    e.value && e.value.length ? c = [e.value[0].getHours(), e.value[0].getMinutes()] : c = [new Date().getHours(), new Date().getMinutes()], n && (c.push(c[0] < 12 ? "AM" : "PM"), c[0] > 12 && (c[0] -= 12), c[0] === 0 && (c[0] = 12)), e.timePickerPopover = t.popover.create({
      el: a.find(".calendar-time-picker-popover"),
      targetEl: a.find(".calendar-time-selector .link"),
      backdrop: !0,
      backdropUnique: !0,
      on: {
        close() {
          e.closeTimePicker()
        },
        closed() {
          e.timePickerPopover.$el && e.timePickerPopover.$el.remove(), e.timePickerPopover.destroy(), e.timePickerInstance && (e.timePickerInstance.close(), e.timePickerInstance.destroy()), delete e.timePickerInstance, delete e.timePickerPopover
        }
      }
    }), e.timePickerPopover.open(), e.timePickerInstance = t.picker.create({
      containerEl: e.timePickerPopover.$el.find(".calendar-time-picker"),
      value: c,
      toolbar: e.params.timePickerToolbar,
      rotateEffect: !1,
      toolbarCloseText: e.params.timePickerCloseText,
      cols: [{
        values: s
      }, {
        divider: !0,
        content: ":"
      }, {
        values: i,
        displayValues: i.map(d => d < 10 ? `0${d}` : d)
      }, ...n ? [{
        values: ["AM", "PM"]
      }] : []]
    })
  }
  closeTimePicker() {
    const e = this,
      {
        is12HoursFormat: a
      } = e;
    if (e.timePickerInstance) {
      const t = e.timePickerInstance.value;
      let n = parseInt(t[0], 10);
      const s = parseInt(t[1], 10),
        i = e.timePickerInstance.value[2];
      a && (i === "AM" && n === 12 ? n = 0 : i === "PM" && n !== 12 && (n += 12));
      let o = e.value && e.value.length && e.value[0];
      o ? (o = new Date(o), o.setHours(n, s)) : (o = new Date, o.setHours(n, s, 0, 0)), e.setValue([o]), e.timePickerPopover && e.timePickerPopover.opened && e.timePickerPopover.close()
    }
  }
  onOpen() {
    const e = this,
      {
        initialized: a,
        $el: t,
        app: n,
        $inputEl: s,
        inline: i,
        value: o,
        params: l
      } = e;
    e.closing = !1, e.opened = !0, e.opening = !0, e.attachCalendarEvents();
    const c = !o && l.value;
    a ? o && e.setValue(o, 0) : o ? e.setValue(o, 0) : l.value && e.setValue(e.normalizeValues(l.value), 0), e.updateCurrentMonthYear(), e.monthsTranslate = 0, e.setMonthsTranslate(), c ? e.updateValue() : l.header && o && e.updateValue(!0), !i && s && s.length && n.theme === "md" && s.trigger("focus"), e.initialized = !0, e.$months.each(d => {
      e.emit("local::monthAdd calendarMonthAdd", d)
    }), t && t.trigger("calendar:open"), s && s.trigger("calendar:open"), e.emit("local::open calendarOpen", e)
  }
  onOpened() {
    const e = this;
    e.opening = !1, e.$el && e.$el.trigger("calendar:opened"), e.$inputEl && e.$inputEl.trigger("calendar:opened"), e.emit("local::opened calendarOpened", e)
  }
  onClose() {
    const e = this,
      a = e.app;
    if (e.opening = !1, e.closing = !0, e.$inputEl)
      if (a.theme === "md") e.$inputEl.trigger("blur");
      else {
        const t = e.$inputEl.attr("validate"),
          n = e.$inputEl.attr("required");
        t && n && a.input.validate(e.$inputEl)
      } e.detachCalendarEvents && e.detachCalendarEvents(), e.$el && e.$el.trigger("calendar:close"), e.$inputEl && e.$inputEl.trigger("calendar:close"), e.emit("local::close calendarClose", e)
  }
  onClosed() {
    const e = this;
    e.opened = !1, e.closing = !1, e.inline || ke(() => {
      e.modal && e.modal.el && e.modal.destroy && (e.params.routableModals || e.modal.destroy()), delete e.modal
    }), e.timePickerInstance && (e.timePickerInstance.destroy && e.timePickerInstance.destroy(), delete e.timePickerInstance), e.$el && e.$el.trigger("calendar:closed"), e.$inputEl && e.$inputEl.trigger("calendar:closed"), e.emit("local::closed calendarClosed", e)
  }
  open() {
    const e = this,
      {
        app: a,
        opened: t,
        inline: n,
        $inputEl: s,
        params: i
      } = e;
    if (t) return;
    if (n) {
      e.$el = y(e.render()), e.$el[0].f7Calendar = e, e.$wrapperEl = e.$el.find(".calendar-months-wrapper"), e.$months = e.$wrapperEl.find(".calendar-month"), e.$containerEl.append(e.$el), e.onOpen(), e.onOpened();
      return
    }
    let o = i.openIn;
    o === "auto" && (o = e.isPopover() ? "popover" : "sheet");
    const l = e.render(),
      c = {
        targetEl: s,
        scrollToEl: i.scrollToInput ? s : void 0,
        content: l,
        backdrop: i.backdrop === !0 || (o === "popover" || o === "customModal") && a.params.popover.backdrop !== !1 && i.backdrop !== !1,
        closeByBackdropClick: i.closeByBackdropClick,
        on: {
          open() {
            const d = this;
            e.modal = d, e.$el = o === "popover" ? d.$el.find(".calendar") : d.$el, e.$wrapperEl = e.$el.find(".calendar-months-wrapper"), e.$months = e.$wrapperEl.find(".calendar-month"), e.$el[0].f7Calendar = e, o === "customModal" && y(e.$el).find(".calendar-close").once("click", () => {
              e.close()
            }), e.onOpen()
          },
          opened() {
            e.onOpened()
          },
          close() {
            e.onClose()
          },
          closed() {
            e.onClosed()
          }
        }
      };
    o === "sheet" && (c.push = i.sheetPush, c.swipeToClose = i.sheetSwipeToClose), i.routableModals && e.view ? e.view.router.navigate({
      url: e.url,
      route: {
        path: e.url,
        [o]: c
      }
    }) : (e.modal = a[o].create(c), e.modal.open())
  }
  close() {
    const e = this,
      {
        opened: a,
        inline: t
      } = e;
    if (!!a) {
      if (t) {
        e.onClose(), e.onClosed();
        return
      }
      e.params.routableModals && e.view ? e.view.router.back() : e.modal.close()
    }
  }
  init() {
    const e = this;
    if (e.initInput(), e.inline) {
      e.open(), e.emit("local::init calendarInit", e);
      return
    }!e.initialized && e.params.value && e.setValue(e.normalizeValues(e.params.value)), e.$inputEl && e.attachInputEvents(), e.params.closeByOutsideClick && e.attachHtmlEvents(), e.emit("local::init calendarInit", e)
  }
  destroy() {
    const e = this;
    if (e.destroyed) return;
    const {
      $el: a
    } = e;
    e.emit("local::beforeDestroy calendarBeforeDestroy", e), a && a.trigger("calendar:beforedestroy"), e.close(), e.$inputEl && e.detachInputEvents(), e.params.closeByOutsideClick && e.detachHtmlEvents(), e.timePickerInstance && (e.timePickerInstance.destroy && e.timePickerInstance.destroy(), delete e.timePickerInstance), a && a.length && delete e.$el[0].f7Calendar, $e(e), e.destroyed = !0
  }
}
var Qr = ac,
  cu = {
    name: "calendar",
    static: {
      Calendar: Qr
    },
    create() {
      const r = this;
      r.calendar = xe({
        defaultSelector: ".calendar",
        constructor: Qr,
        app: r,
        domProp: "f7Calendar"
      }), r.calendar.close = function (a) {
        a === void 0 && (a = ".calendar");
        const t = y(a);
        if (t.length === 0) return;
        const n = t[0].f7Calendar;
        !n || n && !n.opened || n.close()
      }
    },
    params: {
      calendar: {
        dateFormat: void 0,
        monthNames: "auto",
        monthNamesShort: "auto",
        dayNames: "auto",
        dayNamesShort: "auto",
        locale: void 0,
        firstDay: 1,
        weekendDays: [0, 6],
        multiple: !1,
        rangePicker: !1,
        rangePickerMinDays: 1,
        rangePickerMaxDays: 0,
        direction: "horizontal",
        minDate: null,
        maxDate: null,
        disabled: null,
        events: null,
        rangesClasses: null,
        touchMove: !0,
        animate: !0,
        closeOnSelect: !1,
        monthSelector: !0,
        monthPicker: !0,
        monthPickerToolbar: !0,
        monthPickerCloseText: "Done",
        yearSelector: !0,
        yearPicker: !0,
        yearPickerToolbar: !0,
        yearPickerMin: void 0,
        yearPickerMax: void 0,
        yearPickerCloseText: "Done",
        timePicker: !1,
        timePickerToolbar: !0,
        timePickerLabel: "Time",
        timePickerFormat: {
          hour: "numeric",
          minute: "numeric"
        },
        timePickerPlaceholder: "Select time",
        timePickerCloseText: "Done",
        weekHeader: !0,
        value: null,
        containerEl: null,
        openIn: "auto",
        sheetPush: !1,
        sheetSwipeToClose: void 0,
        formatValue: null,
        inputEl: null,
        inputReadOnly: !0,
        closeByOutsideClick: !0,
        scrollToInput: !0,
        header: !1,
        headerPlaceholder: "Select date",
        toolbar: !0,
        toolbarCloseText: "Done",
        footer: !1,
        cssClass: null,
        routableModals: !1,
        view: null,
        url: "date/",
        backdrop: null,
        closeByBackdropClick: !0,
        renderWeekHeader: null,
        renderMonths: null,
        renderMonth: null,
        renderMonthSelector: null,
        renderYearSelector: null,
        renderHeader: null,
        renderFooter: null,
        renderToolbar: null,
        renderInline: null,
        renderPopover: null,
        renderSheet: null,
        render: null
      }
    }
  };

function rc(r, e) {
  const a = this,
    t = y(r),
    n = t.index(),
    s = a.cols[n];
  if (s.divider) return;
  s.$el = t, s.el = t[0], s.$itemsEl = s.$el.find(".picker-items"), s.items = s.$itemsEl.find(".picker-item");
  let i, o;
  s.replaceValues = function (p, u) {
    s.detachEvents(), s.values = p, s.displayValues = u, s.$itemsEl.html(a.renderColumn(s, !0)), s.items = s.$itemsEl.find(".picker-item"), s.calcSize(), s.setValue(s.values[0], !0), s.attachEvents()
  }, s.calcSize = function () {
    o = s.$el[0].offsetHeight, i = s.items[0].offsetHeight;
    const p = s.el.style.getPropertyValue("--f7-picker-scroll-padding");
    s.el.style.setProperty("--f7-picker-scroll-padding", `${(o-i)/2}px`), p || (s.$itemsEl[0].scrollTop = 0)
  }, s.setValue = function (p, u) {
    const g = s.$itemsEl.find(`.picker-item[data-picker-value="${p}"]`).index();
    if (typeof g == "undefined" || g === -1) return;
    const h = g * i;
    s.$itemsEl[0].scrollTop = h, s.updateItems(g, h, u)
  }, s.updateItems = function (p, u, g) {
    typeof u == "undefined" && (u = s.$itemsEl[0].scrollTop), typeof p == "undefined" && (p = Math.round(u / i)), p < 0 && (p = 0), p >= s.items.length && (p = s.items.length - 1);
    const h = s.activeIndex;
    s.activeIndex = p, s.$itemsEl.find(".picker-item-selected").removeClass("picker-item-selected");
    const f = s.items.eq(p);
    f.addClass("picker-item-selected").children().transform(""), a.params.rotateEffect && s.items.each(b => {
      const m = y(b),
        E = (b.offsetTop - (o - i) / 2 - u) / i,
        $ = Math.ceil(s.height / i / 2) + 1;
      let w = -24 * E;
      w > 180 && (w = 180), w < -180 && (w = -180), Math.abs(E) > $ ? m.addClass("picker-item-far") : m.removeClass("picker-item-far"), m.children("span").transform(`translate3d(0, ${-E*i}px, -100px) rotateX(${w}deg)`)
    }), (g || typeof g == "undefined") && (s.value = f.attr("data-picker-value"), s.displayValue = s.displayValues ? s.displayValues[p] : s.value, h !== p && (s.onChange && s.onChange(a, s.value, s.displayValue), a.updateValue()))
  };

  function l() {
    s.updateItems()
  }

  function c() {
    const d = y(this).attr("data-picker-value");
    s.setValue(d)
  }
  s.attachEvents = function () {
    s.$itemsEl.on("scroll", l), s.items.on("click", c)
  }, s.detachEvents = function () {
    s.items.off("click", c)
  }, s.init = function () {
    s.calcSize(), n === 0 && s.$el.addClass("picker-column-first"), n === a.cols.length - 1 && s.$el.addClass("picker-column-last"), a.params.freeMode && s.$el.addClass("picker-column-free-mode"), e && s.updateItems(0), s.attachEvents()
  }, s.destroy = function () {
    s.detachEvents()
  }, s.init()
}
class nc extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this,
      n = ue(),
      s = G();
    t.params = H({}, e.params.picker, a);
    let i;
    if (t.params.containerEl && (i = y(t.params.containerEl), i.length === 0)) return t;
    let o;
    t.params.inputEl && (o = y(t.params.inputEl));
    let l = t.params.scrollToInput ? o : void 0;
    if (t.params.scrollToEl) {
      const f = y(t.params.scrollToEl);
      f.length > 0 && (l = f)
    }
    H(t, {
      app: e,
      $containerEl: i,
      containerEl: i && i[0],
      inline: i && i.length > 0,
      needsOriginFix: n.ios || s.navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && s.navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && !n.android,
      cols: [],
      $inputEl: o,
      inputEl: o && o[0],
      $scrollToEl: l,
      initialized: !1,
      opened: !1,
      url: t.params.url
    });

    function c() {
      t.resizeCols()
    }

    function d() {
      t.open()
    }

    function p(f) {
      f.preventDefault()
    }
    let u = null;

    function g(f) {
      u = f.target
    }

    function h(f) {
      if (t.destroyed || !t.params) return;
      const b = y(f.target);
      t.isPopover() || !t.opened || t.closing || b.closest('[class*="backdrop"]').length || (o && o.length > 0 ? u === f.target && b[0] !== o[0] && b.closest(".sheet-modal").length === 0 && t.close() : y(f.target).closest(".sheet-modal").length === 0 && t.close())
    }
    return H(t, {
      attachResizeEvent() {
        e.on("resize", c)
      },
      detachResizeEvent() {
        e.off("resize", c)
      },
      attachInputEvents() {
        t.$inputEl.on("click", d), t.params.inputReadOnly && (t.$inputEl.on("focus mousedown", p), t.$inputEl[0] && (t.$inputEl[0].f7ValidateReadonly = !0))
      },
      detachInputEvents() {
        t.$inputEl.off("click", d), t.params.inputReadOnly && (t.$inputEl.off("focus mousedown", p), t.$inputEl[0] && delete t.$inputEl[0].f7ValidateReadonly)
      },
      attachHtmlEvents() {
        e.on("click", h), e.on("touchstart", g)
      },
      detachHtmlEvents() {
        e.off("click", h), e.off("touchstart", g)
      }
    }), t.init(), t
  }
  get view() {
    const {
      app: e,
      params: a,
      $inputEl: t
    } = this;
    let n;
    return a.view ? n = a.view : t && (n = t.parents(".view").length && t.parents(".view")[0].f7View), n || (n = e.views.main), n
  }
  initInput() {
    const e = this;
    !e.$inputEl || e.params.inputReadOnly && e.$inputEl.prop("readOnly", !0)
  }
  resizeCols() {
    const e = this;
    if (!!e.opened)
      for (let a = 0; a < e.cols.length; a += 1) e.cols[a].divider || (e.cols[a].calcSize(), e.cols[a].setValue(e.cols[a].value, !1))
  }
  isPopover() {
    const e = this,
      {
        app: a,
        modal: t,
        params: n
      } = e,
      s = ue();
    if (n.openIn === "sheet" || t && t.type !== "popover") return !1;
    if (!e.inline && e.inputEl) {
      if (n.openIn === "popover") return !0;
      if (s.ios) return !!s.ipad;
      if (a.width >= 768) return !0
    }
    return !1
  }
  formatValue() {
    const e = this,
      {
        value: a,
        displayValue: t
      } = e;
    return e.params.formatValue ? e.params.formatValue.call(e, a, t) : a.join(" ")
  }
  setValue(e) {
    const a = this;
    let t = 0;
    if (a.cols.length === 0) {
      a.value = e, a.updateValue(e);
      return
    }
    for (let n = 0; n < a.cols.length; n += 1) a.cols[n] && !a.cols[n].divider && (a.cols[n].setValue(e[t]), t += 1)
  }
  getValue() {
    return this.value
  }
  updateValue(e) {
    const a = this,
      t = e || [],
      n = [];
    let s;
    if (a.cols.length === 0) {
      const i = a.params.cols.filter(o => !o.divider);
      for (let o = 0; o < i.length; o += 1) s = i[o], s.displayValues !== void 0 && s.values !== void 0 && s.values.indexOf(t[o]) !== -1 ? n.push(s.displayValues[s.values.indexOf(t[o])]) : n.push(t[o])
    } else
      for (let i = 0; i < a.cols.length; i += 1) a.cols[i].divider || (t.push(a.cols[i].value), n.push(a.cols[i].displayValue));
    t.indexOf(void 0) >= 0 || (a.value = t, a.displayValue = n, a.emit("local::change pickerChange", a, a.value, a.displayValue), a.inputEl && (a.$inputEl.val(a.formatValue()), a.$inputEl.trigger("change")))
  }
  initColumn(e, a) {
    const t = this;
    rc.call(t, e, a)
  }
  destroyColumn(e) {
    const a = this,
      n = y(e).index();
    a.cols[n] && a.cols[n].destroy && a.cols[n].destroy()
  }
  renderToolbar() {
    const e = this;
    return e.params.renderToolbar ? e.params.renderToolbar.call(e, e) : T("div", {
      class: "toolbar toolbar-top"
    }, T("div", {
      class: "toolbar-inner"
    }, T("div", {
      class: "left"
    }), T("div", {
      class: "right"
    }, T("a", {
      class: "link sheet-close popover-close"
    }, e.params.toolbarCloseText))))
  }
  renderColumn(e, a) {
    const t = `picker-column ${e.textAlign?`picker-column-${e.textAlign}`:""} ${e.cssClass||""}`;
    let n, s;
    return e.divider ? n = `
        <div class="${t} picker-column-divider">${e.content}</div>
      ` : (s = e.values.map((i, o) => `
        <div class="picker-item" data-picker-value="${i}">
          <span>${e.displayValues?e.displayValues[o]:i}</span>
        </div>
      `).join(""), n = `
        <div class="${t}">
          <div class="picker-items">${s}</div>
        </div>
      `), a ? s.trim() : n.trim()
  }
  renderInline() {
    const e = this,
      {
        rotateEffect: a,
        cssClass: t,
        toolbar: n
      } = e.params;
    return T("div", {
      class: `picker picker-inline ${a?"picker-3d":""} ${t||""}`
    }, n && e.renderToolbar(), T("div", {
      class: "picker-columns"
    }, e.cols.map(i => e.renderColumn(i)), T("div", {
      class: "picker-center-highlight"
    })))
  }
  renderSheet() {
    const e = this,
      {
        rotateEffect: a,
        cssClass: t,
        toolbar: n
      } = e.params;
    return T("div", {
      class: `sheet-modal picker picker-sheet ${a?"picker-3d":""} ${t||""}`
    }, n && e.renderToolbar(), T("div", {
      class: "sheet-modal-inner picker-columns"
    }, e.cols.map(i => e.renderColumn(i)), T("div", {
      class: "picker-center-highlight"
    })))
  }
  renderPopover() {
    const e = this,
      {
        rotateEffect: a,
        cssClass: t,
        toolbar: n
      } = e.params;
    return T("div", {
      class: "popover picker-popover"
    }, T("div", {
      class: "popover-inner"
    }, T("div", {
      class: `picker ${a?"picker-3d":""} ${t||""}`
    }, n && e.renderToolbar(), T("div", {
      class: "picker-columns"
    }, e.cols.map(i => e.renderColumn(i)), T("div", {
      class: "picker-center-highlight"
    })))))
  }
  render() {
    const e = this;
    return e.params.render ? e.params.render.call(e) : e.inline ? e.renderInline() : e.isPopover() ? e.renderPopover() : e.renderSheet()
  }
  onOpen() {
    const e = this,
      {
        initialized: a,
        $el: t,
        app: n,
        $inputEl: s,
        inline: i,
        value: o,
        params: l
      } = e;
    e.opened = !0, e.closing = !1, e.opening = !0, e.attachResizeEvent(), t.find(".picker-column").each(c => {
      let d = !0;
      (!a && l.value || a && o) && (d = !1), e.initColumn(c, d)
    }), a ? o && e.setValue(o) : o ? e.setValue(o) : l.value && e.setValue(l.value), !i && s && s.length && n.theme === "md" && s.trigger("focus"), e.initialized = !0, t && t.trigger("picker:open"), s && s.trigger("picker:open"), e.emit("local::open pickerOpen", e)
  }
  onOpened() {
    const e = this;
    e.opening = !1, e.$el && e.$el.trigger("picker:opened"), e.$inputEl && e.$inputEl.trigger("picker:opened"), e.emit("local::opened pickerOpened", e)
  }
  onClose() {
    const e = this,
      a = e.app;
    if (e.opening = !1, e.closing = !0, e.detachResizeEvent(), e.cols.forEach(t => {
        t.destroy && t.destroy()
      }), e.$inputEl)
      if (a.theme === "md") e.$inputEl.trigger("blur");
      else {
        const t = e.$inputEl.attr("validate"),
          n = e.$inputEl.attr("required");
        t && n && a.input.validate(e.$inputEl)
      } e.$el && e.$el.trigger("picker:close"), e.$inputEl && e.$inputEl.trigger("picker:close"), e.emit("local::close pickerClose", e)
  }
  onClosed() {
    const e = this;
    e.opened = !1, e.closing = !1, e.inline || ke(() => {
      e.modal && e.modal.el && e.modal.destroy && (e.params.routableModals || e.modal.destroy()), delete e.modal
    }), e.$el && e.$el.trigger("picker:closed"), e.$inputEl && e.$inputEl.trigger("picker:closed"), e.emit("local::closed pickerClosed", e)
  }
  open() {
    const e = this,
      {
        app: a,
        opened: t,
        inline: n,
        $inputEl: s,
        $scrollToEl: i,
        params: o
      } = e;
    if (t) return;
    if (e.cols.length === 0 && o.cols.length && o.cols.forEach(p => {
        e.cols.push(p)
      }), n) {
      e.$el = y(e.render()), e.$el[0].f7Picker = e, e.$containerEl.append(e.$el), e.onOpen(), e.onOpened();
      return
    }
    const l = e.isPopover(),
      c = l ? "popover" : "sheet",
      d = {
        targetEl: s,
        scrollToEl: i,
        content: e.render(),
        backdrop: typeof o.backdrop != "undefined" ? o.backdrop : l,
        on: {
          open() {
            const p = this;
            e.modal = p, e.$el = l ? p.$el.find(".picker") : p.$el, e.$el[0].f7Picker = e, e.onOpen()
          },
          opened() {
            e.onOpened()
          },
          close() {
            e.onClose()
          },
          closed() {
            e.onClosed()
          }
        }
      };
    c === "sheet" && (d.push = o.sheetPush, d.swipeToClose = o.sheetSwipeToClose), o.routableModals && e.view ? e.view.router.navigate({
      url: e.url,
      route: {
        path: e.url,
        [c]: d
      }
    }) : (e.modal = a[c].create(d), e.modal.open())
  }
  close() {
    const e = this,
      {
        opened: a,
        inline: t
      } = e;
    if (!!a) {
      if (t) {
        e.onClose(), e.onClosed();
        return
      }
      e.params.routableModals && e.view ? e.view.router.back() : e.modal.close()
    }
  }
  init() {
    const e = this;
    if (e.initInput(), e.inline) {
      e.open(), e.emit("local::init pickerInit", e);
      return
    }!e.initialized && e.params.value && e.setValue(e.params.value), e.$inputEl && e.attachInputEvents(), e.params.closeByOutsideClick && e.attachHtmlEvents(), e.emit("local::init pickerInit", e)
  }
  destroy() {
    const e = this;
    if (e.destroyed) return;
    const {
      $el: a
    } = e;
    e.emit("local::beforeDestroy pickerBeforeDestroy", e), a && a.trigger("picker:beforedestroy"), e.close(), e.$inputEl && e.detachInputEvents(), e.params.closeByOutsideClick && e.detachHtmlEvents(), a && a.length && delete e.$el[0].f7Picker, $e(e), e.destroyed = !0
  }
}
var Zr = nc,
  du = {
    name: "picker",
    static: {
      Picker: Zr
    },
    create() {
      const r = this;
      r.picker = xe({
        defaultSelector: ".picker",
        constructor: Zr,
        app: r,
        domProp: "f7Picker"
      }), r.picker.close = function (a) {
        a === void 0 && (a = ".picker");
        const t = y(a);
        if (t.length === 0) return;
        const n = t[0].f7Picker;
        !n || n && !n.opened || n.close()
      }
    },
    params: {
      picker: {
        rotateEffect: !1,
        freeMode: !1,
        cols: [],
        containerEl: null,
        openIn: "auto",
        sheetPush: !1,
        sheetSwipeToClose: void 0,
        backdrop: void 0,
        formatValue: null,
        inputEl: null,
        inputReadOnly: !0,
        closeByOutsideClick: !0,
        scrollToInput: !0,
        scrollToEl: void 0,
        toolbar: !0,
        toolbarCloseText: "Done",
        cssClass: null,
        routableModals: !1,
        view: null,
        url: "select/",
        renderToolbar: null,
        render: null
      }
    }
  };
const sc = {
  handle(r, e) {
    const a = this,
      t = y(r),
      n = t[0].scrollTop,
      s = t[0].scrollHeight,
      i = t[0].offsetHeight;
    let o = t[0].getAttribute("data-infinite-distance");
    const l = t.find(".virtual-list");
    let c;
    const d = t.hasClass("infinite-scroll-top");
    if (o || (o = 50), typeof o == "string" && o.indexOf("%") >= 0 && (o = parseInt(o, 10) / 100 * i), o > i && (o = i), d) n < o && (t.trigger("infinite", e), a.emit("infinite", t[0], e));
    else if (n + i >= s - o) {
      if (l.length > 0 && (c = l.eq(-1)[0].f7VirtualList, c && !c.reachEnd && !c.params.updatableScroll)) return;
      t.trigger("infinite", e), a.emit("infinite", t[0], e)
    }
  },
  create(r) {
    const e = y(r),
      a = this;

    function t(n) {
      a.infiniteScroll.handle(this, n)
    }
    e.each(n => {
      n.f7InfiniteScrollHandler = t, n.addEventListener("scroll", n.f7InfiniteScrollHandler)
    })
  },
  destroy(r) {
    y(r).each(a => {
      a.removeEventListener("scroll", a.f7InfiniteScrollHandler), delete a.f7InfiniteScrollHandler
    })
  }
};
var pu = {
  name: "infiniteScroll",
  create() {
    Ie(this, {
      infiniteScroll: sc
    })
  },
  on: {
    tabMounted(r) {
      const e = this,
        a = y(r),
        t = a.find(".infinite-scroll-content");
      a.is(".infinite-scroll-content") && t.add(a), t.each(n => {
        e.infiniteScroll.create(n)
      })
    },
    tabBeforeRemove(r) {
      const e = y(r),
        a = this,
        t = e.find(".infinite-scroll-content");
      e.is(".infinite-scroll-content") && t.add(e), t.each(n => {
        a.infiniteScroll.destroy(n)
      })
    },
    pageInit(r) {
      const e = this;
      r.$el.find(".infinite-scroll-content").each(a => {
        e.infiniteScroll.create(a)
      })
    },
    pageBeforeRemove(r) {
      const e = this;
      r.$el.find(".infinite-scroll-content").each(a => {
        e.infiniteScroll.destroy(a)
      })
    }
  }
};
class ic extends be {
  constructor(e, a) {
    super({}, [e]);
    const t = this,
      n = ue(),
      s = ve(),
      i = y(a),
      o = i.find(".ptr-preloader");
    t.$el = i, t.el = i[0], t.app = e, t.bottom = t.$el.hasClass("ptr-bottom"), t.useModulesParams({});
    const l = e.theme === "md",
      c = e.theme === "ios";
    t.done = function () {
      const Y = l ? o : i,
        W = K => {
          y(K.target).closest(o).length || (i.removeClass("ptr-transitioning ptr-pull-up ptr-pull-down ptr-closing"), i.trigger("ptr:done"), t.emit("local::done ptrDone", i[0]), Y.off("transitionend", W))
        };
      return Y.on("transitionend", W), i.removeClass("ptr-refreshing").addClass("ptr-transitioning ptr-closing"), t
    }, t.refresh = function () {
      return i.hasClass("ptr-refreshing") || (i.addClass("ptr-transitioning ptr-refreshing"), i.trigger("ptr:refresh", t.done), t.emit("local::refresh ptrRefresh", i[0], t.done)), t
    }, t.mousewheel = i.attr("data-ptr-mousewheel") === "true";
    let d, p, u;
    const g = {};
    let h, f, b = !1,
      m = !1,
      v = !1,
      E = 0,
      $, w, C, x, M, A, B = !1,
      S, P, k;
    const I = i.parents(".page");
    if ((I.find(".navbar").length > 0 || I.parents(".view").children(".navbars").length > 0) && (B = !0), I.hasClass("no-navbar") && (B = !1), !t.bottom) {
      const X = e.navbar.getElByPage(I[0]);
      if (X) {
        const Y = y(X),
          W = Y.hasClass("navbar-large-transparent") || Y.hasClass("navbar-large") && Y.hasClass("navbar-transparent"),
          K = Y.hasClass("navbar-transparent") && !Y.hasClass("navbar-large");
        W ? i.addClass("ptr-with-navbar-large-transparent") : K && i.addClass("ptr-with-navbar-transparent")
      }
    }!B && !t.bottom && i.addClass("ptr-no-navbar"), i.attr("data-ptr-distance") ? M = !0 : l ? x = 66 : c && (x = 44);

    function R(X) {
      X === void 0 && (X = 0);
      const Y = o.find(".preloader-inner-line"),
        W = 1 / Y.length;
      Y.forEach((K, j) => {
        const _ = (X - j * W) / W;
        K.style.opacity = Math.max(Math.min(_, 1), 0) * .27
      })
    }

    function D() {
      o.find(".preloader-inner-line").css("opacity", "")
    }

    function z(X) {
      if (p)
        if (n.os === "android") {
          if ("targetTouches" in X && X.targetTouches.length > 1) return
        } else return;
      i.hasClass("ptr-refreshing") || y(X.target).closest(".sortable-handler, .ptr-ignore, .card-expandable.card-opened").length || (u = !1, A = !1, p = !0, h = void 0, C = void 0, X.type === "touchstart" && (d = X.targetTouches[0].identifier), g.x = X.type === "touchstart" ? X.targetTouches[0].pageX : X.pageX, g.y = X.type === "touchstart" ? X.targetTouches[0].pageY : X.pageY)
    }

    function O(X) {
      if (!p) return;
      let Y, W, K;
      if (X.type === "touchmove") {
        if (d && X.touches)
          for (let _ = 0; _ < X.touches.length; _ += 1) X.touches[_].identifier === d && (K = X.touches[_]);
        K || (K = X.targetTouches[0]), Y = K.pageX, W = K.pageY
      } else Y = X.pageX, W = X.pageY;
      if (!Y || !W) return;
      if (typeof h == "undefined" && (h = !!(h || Math.abs(W - g.y) > Math.abs(Y - g.x))), !h) {
        p = !1;
        return
      }
      if (w = i[0].scrollTop, !u) {
        i.removeClass("ptr-transitioning"), c && R(0);
        let _;
        if (S = i[0].scrollHeight, P = i[0].offsetHeight, t.bottom && (k = S - P), w > S) {
          p = !1;
          return
        }
        const Q = y(X.target).closest(".ptr-watch-scroll");
        if (Q.length && Q.each(se => {
            se !== a && se.scrollHeight > se.offsetHeight && y(se).css("overflow") === "auto" && (!t.bottom && se.scrollTop > 0 || t.bottom && se.scrollTop < se.scrollHeight - se.offsetHeight) && (_ = !0)
          }), _) {
          p = !1;
          return
        }
        M && (x = i.attr("data-ptr-distance"), x.indexOf("%") >= 0 && (x = S * parseInt(x, 10) / 100)), E = i.hasClass("ptr-refreshing") ? x : 0, S === P || n.os !== "ios" || l ? m = !0 : m = !1, v = !1
      }
      if (u = !0, f = W - g.y, typeof C == "undefined" && (t.bottom ? w !== k : w !== 0) && (C = !0), t.bottom ? f < 0 && w >= k || w > k : f > 0 && w <= 0 || w < 0) {
        n.os === "ios" && parseInt(n.osVersion.split(".")[0], 10) > 7 && (!t.bottom && w === 0 && !C && (m = !0), t.bottom && w === k && !C && (m = !0)), !m && t.bottom && !l && (i.css("-webkit-overflow-scrolling", "auto"), i.scrollTop(k), v = !0), m || v ? (X.cancelable && X.preventDefault(), $ = (t.bottom ? -1 * Math.abs(f) ** .85 : f ** .85) + E, l ? o.transform(`translate3d(0,${$}px,0)`).find(".ptr-arrow").transform(`rotate(${180*(Math.abs(f)/66)+100}deg)`) : (t.bottom || c ? i.children().transform(`translate3d(0,${$}px,0)`) : i.transform(`translate3d(0,${$}px,0)`), c && o.transform("translate3d(0,0px,0)"))) : c && !t.bottom && o.transform(`translate3d(0,${w}px,0)`);
        let _;
        c && !b && (_ = m || v ? Math.abs(f) ** .85 / x : Math.abs(f) / (x * 2), R(_)), (m || v) && Math.abs(f) ** .85 > x || !m && Math.abs(f) >= x * 2 ? (b = !0, i.addClass("ptr-pull-up").removeClass("ptr-pull-down"), D()) : (b = !1, i.removeClass("ptr-pull-up").addClass("ptr-pull-down")), A || (i.trigger("ptr:pullstart"), t.emit("local::pullStart ptrPullStart", i[0]), A = !0), i.trigger("ptr:pullmove", {
          event: X,
          scrollTop: w,
          translate: $,
          touchesDiff: f
        }), t.emit("local::pullMove ptrPullMove", i[0], {
          event: X,
          scrollTop: w,
          translate: $,
          touchesDiff: f
        })
      } else A = !1, i.removeClass("ptr-pull-up ptr-pull-down"), b = !1
    }

    function L(X) {
      if (X.type === "touchend" && X.changedTouches && X.changedTouches.length > 0 && d && X.changedTouches[0].identifier !== d) {
        p = !1, h = !1, u = !1, d = null;
        return
      }
      if (!p || !u) {
        p = !1, u = !1;
        return
      }
      $ && (i.addClass("ptr-transitioning"), $ = 0), l ? o.transform("").find(".ptr-arrow").transform("") : (o.transform(""), t.bottom || c ? i.children().transform("") : i.transform("")), !m && t.bottom && !l && i.css("-webkit-overflow-scrolling", ""), b ? (i.addClass("ptr-refreshing"), i.trigger("ptr:refresh", t.done), t.emit("local::refresh ptrRefresh", i[0], t.done)) : i.removeClass("ptr-pull-down"), p = !1, u = !1, A && (i.trigger("ptr:pullend"), t.emit("local::pullEnd ptrPullEnd", i[0]))
    }
    let N, F, V = !0,
      U = 0;

    function Z() {
      V = !0, F = !1, U = 0, $ && (i.addClass("ptr-transitioning"), $ = 0), l ? o.transform("").find(".ptr-arrow").transform("") : (o.transform(""), t.bottom ? i.children().transform("") : i.transform("")), b ? (i.addClass("ptr-refreshing"), i.trigger("ptr:refresh", t.done), t.emit("local::refresh ptrRefresh", i[0], t.done)) : i.removeClass("ptr-pull-down"), A && (i.trigger("ptr:pullend"), t.emit("local::pullEnd ptrPullEnd", i[0]))
    }

    function J(X) {
      if (!V) return;
      const {
        deltaX: Y,
        deltaY: W
      } = X;
      if (Math.abs(Y) > Math.abs(W) || i.hasClass("ptr-refreshing") || y(X.target).closest(".sortable-handler, .ptr-ignore, .card-expandable.card-opened").length) return;
      if (clearTimeout(N), w = i[0].scrollTop, !F) {
        i.removeClass("ptr-transitioning"), c && R(0);
        let j;
        if (S = i[0].scrollHeight, P = i[0].offsetHeight, t.bottom && (k = S - P), w > S) {
          V = !1;
          return
        }
        const _ = y(X.target).closest(".ptr-watch-scroll");
        if (_.length && _.each(Q => {
            Q !== a && Q.scrollHeight > Q.offsetHeight && y(Q).css("overflow") === "auto" && (!t.bottom && Q.scrollTop > 0 || t.bottom && Q.scrollTop < Q.scrollHeight - Q.offsetHeight) && (j = !0)
          }), j) {
          V = !1;
          return
        }
        M && (x = i.attr("data-ptr-distance"), x.indexOf("%") >= 0 && (x = S * parseInt(x, 10) / 100))
      }
      if (u = !0, U -= W, f = U, typeof C == "undefined" && (t.bottom ? w !== k : w !== 0) && (C = !0), t.bottom ? f < 0 && w >= k || w > k : f > 0 && w <= 0 || w < 0) {
        X.cancelable && X.preventDefault(), $ = f, Math.abs($) > x && ($ = x + (Math.abs($) - x) ** .7, t.bottom && ($ = -$)), l ? o.transform(`translate3d(0,${$}px,0)`).find(".ptr-arrow").transform(`rotate(${180*(Math.abs(f)/66)+100}deg)`) : t.bottom ? i.children().transform(`translate3d(0,${$}px,0)`) : (i.transform(`translate3d(0,${$}px,0)`), c && o.transform(`translate3d(0,${-$}px,0)`));
        let j;
        c && !b && (j = Math.abs($) / x, R(j)), Math.abs($) > x ? (b = !0, i.addClass("ptr-pull-up").removeClass("ptr-pull-down"), D()) : (b = !1, i.removeClass("ptr-pull-up").addClass("ptr-pull-down")), A || (i.trigger("ptr:pullstart"), t.emit("local::pullStart ptrPullStart", i[0]), A = !0), i.trigger("ptr:pullmove", {
          event: X,
          scrollTop: w,
          translate: $,
          touchesDiff: f
        }), t.emit("local::pullMove ptrPullMove", i[0], {
          event: X,
          scrollTop: w,
          translate: $,
          touchesDiff: f
        })
      } else A = !1, i.removeClass("ptr-pull-up ptr-pull-down"), b = !1;
      N = setTimeout(Z, 300)
    }
    return !I.length || !i.length || (i[0].f7PullToRefresh = t, t.attachEvents = function () {
      const Y = s.passiveListener ? {
        passive: !0
      } : !1;
      i.on(e.touchEvents.start, z, Y), e.on("touchmove:active", O), e.on("touchend:passive", L), t.mousewheel && !t.bottom && i.on("wheel", J)
    }, t.detachEvents = function () {
      const Y = s.passiveListener ? {
        passive: !0
      } : !1;
      i.off(e.touchEvents.start, z, Y), e.off("touchmove:active", O), e.off("touchend:passive", L), t.mousewheel && !t.bottom && i.off("wheel", J)
    }, t.useModules(), t.init()), t
  }
  init() {
    this.attachEvents()
  }
  destroy() {
    let e = this;
    e.emit("local::beforeDestroy ptrBeforeDestroy", e), e.$el.trigger("ptr:beforedestroy"), delete e.el.f7PullToRefresh, e.detachEvents(), $e(e), e = null
  }
}
var Jr = ic,
  uu = {
    name: "pullToRefresh",
    create() {
      const r = this;
      r.ptr = H(xe({
        defaultSelector: ".ptr-content",
        constructor: Jr,
        app: r,
        domProp: "f7PullToRefresh"
      }), {
        done(e) {
          const a = r.ptr.get(e);
          if (a) return a.done()
        },
        refresh(e) {
          const a = r.ptr.get(e);
          if (a) return a.refresh()
        }
      })
    },
    static: {
      PullToRefresh: Jr
    },
    on: {
      tabMounted(r) {
        const e = this,
          a = y(r),
          t = a.find(".ptr-content");
        a.is(".ptr-content") && t.add(a), t.each(n => {
          e.ptr.create(n)
        })
      },
      tabBeforeRemove(r) {
        const e = y(r),
          a = this,
          t = e.find(".ptr-content");
        e.is(".ptr-content") && t.add(e), t.each(n => {
          a.ptr.destroy(n)
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".ptr-content").each(a => {
          e.ptr.create(a)
        })
      },
      pageBeforeRemove(r) {
        const e = this;
        r.$el.find(".ptr-content").each(a => {
          e.ptr.destroy(a)
        })
      }
    }
  };
class oc extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this,
      n = {};
    t.useModulesParams(n), t.params = H(n, a);
    const s = y(t.params.el);
    if (s.length === 0) return;
    if (t.$el = s, t.el = s[0], t.$el[0].f7DataTable) {
      const l = t.$el[0].f7DataTable;
      return t.destroy(), l
    }
    t.$el[0].f7DataTable = t, H(t, {
      collapsible: s.hasClass("data-table-collapsible"),
      $headerEl: s.find(".data-table-header"),
      $headerSelectedEl: s.find(".data-table-header-selected")
    });

    function i(l) {
      if (l.detail && l.detail.sentByF7DataTable) return;
      const c = y(this),
        d = c[0].checked,
        p = c.parents("td,th").index();
      if (c.parents("thead").length > 0) p === 0 && s.find("tbody tr")[d ? "addClass" : "removeClass"]("data-table-row-selected"), s.find(`tbody tr td:nth-child(${p+1}) input`).prop("checked", d).trigger("change", {
        sentByF7DataTable: !0
      }), c.prop("indeterminate", !1);
      else {
        p === 0 && c.parents("tr")[d ? "addClass" : "removeClass"]("data-table-row-selected");
        const u = s.find(`tbody .checkbox-cell:nth-child(${p+1}) input[type="checkbox"]:checked`).length,
          g = s.find("tbody tr").length,
          h = s.find(`thead .checkbox-cell:nth-child(${p+1}) input[type="checkbox"]`);
        d ? u === g && h.prop("checked", !0).trigger("change", {
          sentByF7DataTable: !0
        }) : h.prop("checked", !1), h.prop("indeterminate", u > 0 && u < g)
      }
      t.checkSelectedHeader()
    }

    function o() {
      const l = y(this),
        c = l.hasClass("sortable-cell-active"),
        d = l.hasClass("sortable-desc") ? "desc" : "asc";
      let p;
      c ? (p = d === "desc" ? "asc" : "desc", l.removeClass("sortable-desc sortable-asc").addClass(`sortable-${p}`)) : (s.find("thead .sortable-cell-active").removeClass("sortable-cell-active"), l.addClass("sortable-cell-active"), p = d), l.trigger("datatable:sort", p), t.emit("local::sort dataTableSort", t, p)
    }
    return t.attachEvents = function () {
      t.$el.on("change", '.checkbox-cell input[type="checkbox"]', i), t.$el.find("thead .sortable-cell").on("click", o)
    }, t.detachEvents = function () {
      t.$el.off("change", '.checkbox-cell input[type="checkbox"]', i), t.$el.find("thead .sortable-cell").off("click", o)
    }, t.useModules(), t.init(), t
  }
  setCollapsibleLabels() {
    const e = this;
    !e.collapsible || e.$el.find("tbody td:not(.checkbox-cell)").each(a => {
      const t = y(a),
        n = t.index(),
        s = t.attr("data-collapsible-title");
      !s && s !== "" && t.attr("data-collapsible-title", e.$el.find("thead th").eq(n).text())
    })
  }
  checkSelectedHeader() {
    const e = this;
    if (e.$headerEl.length > 0 && e.$headerSelectedEl.length > 0) {
      const a = e.$el.find("tbody .checkbox-cell input:checked").length;
      e.$el[a > 0 ? "addClass" : "removeClass"]("data-table-has-checked"), e.$headerSelectedEl.find(".data-table-selected-count").text(a)
    }
  }
  init() {
    const e = this;
    e.attachEvents(), e.setCollapsibleLabels(), e.checkSelectedHeader()
  }
  destroy() {
    let e = this;
    e.$el.trigger("datatable:beforedestroy"), e.emit("local::beforeDestroy dataTableBeforeDestroy", e), e.attachEvents(), e.$el[0] && (e.$el[0].f7DataTable = null, delete e.$el[0].f7DataTable), $e(e), e = null
  }
}
var en = oc,
  fu = {
    name: "dataTable",
    static: {
      DataTable: en
    },
    create() {
      const r = this;
      r.dataTable = xe({
        defaultSelector: ".data-table",
        constructor: en,
        app: r,
        domProp: "f7DataTable"
      })
    },
    on: {
      tabBeforeRemove(r) {
        const e = this;
        y(r).find(".data-table-init").each(a => {
          e.dataTable.destroy(a)
        })
      },
      tabMounted(r) {
        const e = this;
        y(r).find(".data-table-init").each(a => {
          e.dataTable.create({
            el: a
          })
        })
      },
      pageBeforeRemove(r) {
        const e = this;
        r.$el.find(".data-table-init").each(a => {
          e.dataTable.destroy(a)
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".data-table-init").each(a => {
          e.dataTable.create({
            el: a
          })
        })
      }
    },
    vnode: {
      "data-table-init": {
        insert(r) {
          const e = this,
            a = r.elm;
          e.dataTable.create({
            el: a
          })
        },
        destroy(r) {
          const e = this,
            a = r.elm;
          e.dataTable.destroy(a)
        }
      }
    }
  };
const lc = {
  morphOpen(r, e) {
    const a = this,
      t = y(r),
      n = y(e);
    if (n.length === 0) return;
    n.transition(0).addClass("fab-morph-target-visible");
    const s = {
        width: n[0].offsetWidth,
        height: n[0].offsetHeight,
        offset: n.offset(),
        borderRadius: n.css("border-radius"),
        zIndex: n.css("z-index")
      },
      i = {
        width: t[0].offsetWidth,
        height: t[0].offsetHeight,
        offset: t.offset(),
        translateX: Ft(t[0], "x"),
        translateY: Ft(t[0], "y")
      };
    t[0].f7FabMorphData = {
      $targetEl: n,
      target: s,
      fab: i
    };
    const o = i.offset.left + i.width / 2 - (s.offset.left + s.width / 2) - i.translateX,
      l = i.offset.top + i.height / 2 - (s.offset.top + s.height / 2) - i.translateY,
      c = s.width / i.width,
      d = s.height / i.height;
    let p = Math.ceil(parseInt(s.borderRadius, 10) / Math.max(c, d));
    p > 0 && (p += 2), t[0].f7FabMorphResizeHandler = function () {
      t.transition(0).transform(""), n.transition(0), s.width = n[0].offsetWidth, s.height = n[0].offsetHeight, s.offset = n.offset(), i.offset = t.offset();
      const g = i.offset.left + i.width / 2 - (s.offset.left + s.width / 2) - i.translateX,
        h = i.offset.top + i.height / 2 - (s.offset.top + s.height / 2) - i.translateY,
        f = s.width / i.width,
        b = s.height / i.height;
      t.transform(`translate3d(${-g}px, ${-h}px, 0) scale(${f}, ${b})`)
    }, n.css("opacity", 0).transform(`scale(${1/c}, ${1/d})`), t.addClass("fab-opened").css("z-index", s.zIndex - 1).transform(`translate3d(${-o}px, ${-l}px, 0)`), t.transitionEnd(() => {
      n.transition(""), Pe(() => {
        n.css("opacity", 1).transform("scale(1,1)"), t.transform(`translate3d(${-o}px, ${-l}px, 0) scale(${c}, ${d})`).css("border-radius", `${p}px`).css("box-shadow", "none").css("opacity", "0")
      }), a.on("resize", t[0].f7FabMorphResizeHandler), n.parents(".page-content").length > 0 && n.parents(".page-content").on("scroll", t[0].f7FabMorphResizeHandler)
    })
  },
  morphClose(r) {
    const e = this,
      a = y(r),
      t = a[0].f7FabMorphData;
    if (!t) return;
    const {
      $targetEl: n,
      target: s,
      fab: i
    } = t;
    if (n.length === 0) return;
    const o = i.offset.left + i.width / 2 - (s.offset.left + s.width / 2) - i.translateX,
      l = i.offset.top + i.height / 2 - (s.offset.top + s.height / 2) - i.translateY,
      c = s.width / i.width,
      d = s.height / i.height;
    e.off("resize", a[0].f7FabMorphResizeHandler), n.parents(".page-content").length > 0 && n.parents(".page-content").off("scroll", a[0].f7FabMorphResizeHandler), n.css("opacity", 0).transform(`scale(${1/c}, ${1/d})`), a.transition("").css("box-shadow", "").css("border-radius", "").css("opacity", "1").transform(`translate3d(${-o}px, ${-l}px, 0)`), a.transitionEnd(() => {
      a.css("z-index", "").removeClass("fab-opened").transform(""), Pe(() => {
        a.transitionEnd(() => {
          n.removeClass("fab-morph-target-visible").css("opacity", "").transform("").transition("")
        })
      })
    })
  },
  open(r, e) {
    const a = this,
      t = y(r).eq(0),
      n = t.find(".fab-buttons");
    if (!!t.length && !t.hasClass("fab-opened") && !(!n.length && !t.hasClass("fab-morph"))) {
      if (a.fab.openedEl) {
        if (a.fab.openedEl === t[0]) return;
        a.fab.close(a.fab.openedEl)
      }
      a.fab.openedEl = t[0], t.hasClass("fab-morph") ? a.fab.morphOpen(t, e || t.attr("data-morph-to")) : t.addClass("fab-opened"), t.siblings(".fab-backdrop").addClass("backdrop-in"), t.trigger("fab:open")
    }
  },
  close(r) {
    r === void 0 && (r = ".fab-opened");
    const e = this,
      a = y(r).eq(0),
      t = a.find(".fab-buttons");
    !a.length || !a.hasClass("fab-opened") || !t.length && !a.hasClass("fab-morph") || (e.fab.openedEl = null, a.hasClass("fab-morph") ? e.fab.morphClose(a) : a.removeClass("fab-opened"), a.siblings(".fab-backdrop").removeClass("backdrop-in"), a.trigger("fab:close"))
  },
  toggle(r) {
    const e = this;
    y(r).hasClass("fab-opened") ? e.fab.close(r) : e.fab.open(r)
  }
};
var hu = {
  name: "fab",
  create() {
    Ie(this, {
      fab: Ee({
        openedEl: null
      }, lc)
    })
  },
  clicks: {
    ".fab > a": function (e) {
      this.fab.toggle(e.parents(".fab"))
    },
    ".fab-open": function (e, a) {
      a === void 0 && (a = {}), this.fab.open(a.fab)
    },
    ".fab-close": function (e, a) {
      a === void 0 && (a = {}), this.fab.close(a.fab)
    },
    ".fab-backdrop": function () {
      this.fab.close()
    }
  }
};
class cc extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this,
      n = {
        el: void 0,
        inputEl: void 0,
        inputEvents: "change input compositionend",
        disableButton: !0,
        disableButtonEl: void 0,
        backdropEl: void 0,
        searchContainer: void 0,
        searchItem: "li",
        searchIn: void 0,
        searchGroup: ".list-group",
        searchGroupTitle: ".list-group-title",
        ignore: ".searchbar-ignore",
        foundEl: ".searchbar-found",
        notFoundEl: ".searchbar-not-found",
        hideOnEnableEl: ".searchbar-hide-on-enable",
        hideOnSearchEl: ".searchbar-hide-on-search",
        backdrop: !0,
        removeDiacritics: !0,
        customSearch: !1,
        hideGroupTitles: !0,
        hideGroups: !0,
        disableOnBackdropClick: !0,
        expandable: !1,
        inline: !1
      };
    t.useModulesParams(n), t.params = H(n, a);
    const s = y(t.params.el);
    if (s.length === 0) return t;
    if (s[0].f7Searchbar) return s[0].f7Searchbar;
    s[0].f7Searchbar = t;
    let i;
    const o = s.parents(".navbar");
    if (s.parents(".page").length > 0) i = s.parents(".page");
    else if (o.length > 0 && (i = y(e.navbar.getPageByEl(o[0])), !i.length)) {
      const B = s.parents(".view").find(".page-current");
      B[0] && B[0].f7Page && B[0].f7Page.navbarEl === o[0] && (i = B)
    }
    let l;
    a.foundEl ? l = y(a.foundEl) : typeof t.params.foundEl == "string" && i && (l = i.find(t.params.foundEl));
    let c;
    a.notFoundEl ? c = y(a.notFoundEl) : typeof t.params.notFoundEl == "string" && i && (c = i.find(t.params.notFoundEl));
    let d;
    a.hideOnEnableEl ? d = y(a.hideOnEnableEl) : typeof t.params.hideOnEnableEl == "string" && i && (d = i.find(t.params.hideOnEnableEl));
    let p;
    a.hideOnSearchEl ? p = y(a.hideOnSearchEl) : typeof t.params.hideOnSearchEl == "string" && i && (p = i.find(t.params.hideOnSearchEl));
    const u = t.params.expandable || s.hasClass("searchbar-expandable"),
      g = t.params.inline || s.hasClass("searchbar-inline");
    typeof t.params.backdrop == "undefined" && (t.params.backdrop = !g);
    let h;
    t.params.backdrop && (t.params.backdropEl ? h = y(t.params.backdropEl) : i && i.length > 0 ? h = i.find(".searchbar-backdrop") : h = s.siblings(".searchbar-backdrop"), h.length === 0 && (h = y('<div class="searchbar-backdrop"></div>'), i && i.length ? s.parents(i).length > 0 && o && s.parents(o).length === 0 ? h.insertBefore(s) : h.insertBefore(i.find(".page-content").eq(0)) : h.insertBefore(s)));
    let f;
    t.params.searchContainer && (f = y(t.params.searchContainer));
    let b;
    t.params.inputEl ? b = y(t.params.inputEl) : b = s.find('input[type="search"]').eq(0);
    let m;
    t.params.disableButton && (t.params.disableButtonEl ? m = y(t.params.disableButtonEl) : m = s.find(".searchbar-disable-button")), H(t, {
      app: e,
      view: e.views.get(s.parents(".view")),
      $el: s,
      el: s[0],
      $backdropEl: h,
      backdropEl: h && h[0],
      $searchContainer: f,
      searchContainer: f && f[0],
      $inputEl: b,
      inputEl: b[0],
      $disableButtonEl: m,
      disableButtonEl: m && m[0],
      disableButtonHasMargin: !1,
      $pageEl: i,
      pageEl: i && i[0],
      $navbarEl: o,
      navbarEl: o && o[0],
      $foundEl: l,
      foundEl: l && l[0],
      $notFoundEl: c,
      notFoundEl: c && c[0],
      $hideOnEnableEl: d,
      hideOnEnableEl: d && d[0],
      $hideOnSearchEl: p,
      hideOnSearchEl: p && p[0],
      previousQuery: "",
      query: "",
      isVirtualList: f && f.hasClass("virtual-list"),
      virtualList: void 0,
      enabled: !1,
      expandable: u,
      inline: g
    });

    function v(B) {
      B.preventDefault()
    }

    function E(B) {
      t.enable(B), t.$el.addClass("searchbar-focused")
    }

    function $() {
      t.$el.removeClass("searchbar-focused")
    }

    function w() {
      const B = t.$inputEl.val().trim();
      (t.$searchContainer && t.$searchContainer.length > 0 && (t.params.searchIn || t.isVirtualList || t.params.searchIn === t.params.searchItem) || t.params.customSearch) && t.search(B, !0)
    }

    function C(B, S) {
      t.$el.trigger("searchbar:clear", S), t.emit("local::clear searchbarClear", t, S)
    }

    function x(B) {
      t.disable(B)
    }

    function M() {
      !t || t && !t.$el || t.enabled && (t.$el.removeClass("searchbar-enabled"), t.expandable && t.$el.parents(".navbar").removeClass("with-searchbar-expandable-enabled with-searchbar-expandable-enabled-no-transition"))
    }

    function A() {
      !t || t && !t.$el || t.enabled && (t.$el.addClass("searchbar-enabled"), t.expandable && t.$el.parents(".navbar").addClass("with-searchbar-expandable-enabled-no-transition"))
    }
    return t.attachEvents = function () {
      s.on("submit", v), t.params.disableButton && t.$disableButtonEl.on("click", x), t.params.disableOnBackdropClick && t.$backdropEl && t.$backdropEl.on("click", x), t.expandable && e.theme === "ios" && t.view && o.length && t.$pageEl && (t.$pageEl.on("page:beforeout", M), t.$pageEl.on("page:beforein", A)), t.$inputEl.on("focus", E), t.$inputEl.on("blur", $), t.$inputEl.on(t.params.inputEvents, w), t.$inputEl.on("input:clear", C)
    }, t.detachEvents = function () {
      s.off("submit", v), t.params.disableButton && t.$disableButtonEl.off("click", x), t.params.disableOnBackdropClick && t.$backdropEl && t.$backdropEl.off("click", x), t.expandable && e.theme === "ios" && t.view && o.length && t.$pageEl && (t.$pageEl.off("page:beforeout", M), t.$pageEl.off("page:beforein", A)), t.$inputEl.off("focus", E), t.$inputEl.off("blur", $), t.$inputEl.off(t.params.inputEvents, w), t.$inputEl.off("input:clear", C)
    }, t.useModules(), t.init(), t
  }
  clear(e) {
    const a = this;
    if (!a.query && e && y(e.target).hasClass("searchbar-clear")) return a.disable(), a;
    const t = a.value;
    return a.$inputEl.val("").trigger("change").focus(), a.$el.trigger("searchbar:clear", t), a.emit("local::clear searchbarClear", a, t), a
  }
  setDisableButtonMargin() {
    const e = this;
    if (e.expandable) return;
    const a = e.app;
    e.$disableButtonEl.transition(0).show(), e.$disableButtonEl.css(`margin-${a.rtl?"left":"right"}`, `${-e.disableButtonEl.offsetWidth}px`), e._clientLeft = e.$disableButtonEl[0].clientLeft, e.$disableButtonEl.transition(""), e.disableButtonHasMargin = !0
  }
  enable(e) {
    const a = this;
    if (a.enabled) return a;
    const t = a.app,
      n = ee(),
      s = ue();
    a.enabled = !0;

    function i() {
      if (a.$backdropEl && (a.$searchContainer && a.$searchContainer.length || a.params.customSearch) && !a.$el.hasClass("searchbar-enabled") && !a.query && a.backdropShow(), a.$el.addClass("searchbar-enabled"), (!a.$disableButtonEl || a.$disableButtonEl && a.$disableButtonEl.length === 0) && a.$el.addClass("searchbar-enabled-no-disable-button"), !a.expandable && a.$disableButtonEl && a.$disableButtonEl.length > 0 && t.theme !== "md" && (a.disableButtonHasMargin || a.setDisableButtonMargin(), a.$disableButtonEl.css(`margin-${t.rtl?"left":"right"}`, "0px")), a.expandable) {
        const c = a.$el.parents(".navbar");
        if (c.hasClass("navbar-large") && a.$pageEl) {
          const d = a.$pageEl.find(".page-content"),
            p = c.find(".title-large");
          d.addClass("with-searchbar-expandable-enabled"), c.hasClass("navbar-large") && c.hasClass("navbar-large-collapsed") && p.length && d.length && (d.transition(0), d[0].scrollTop -= p[0].offsetHeight, setTimeout(() => {
            d.transition("")
          }, 200))
        }
        t.theme === "md" && c.length ? c.addClass("with-searchbar-expandable-enabled") : (c.addClass("with-searchbar-expandable-enabled"), c.hasClass("navbar-large") && c.addClass("navbar-large-collapsed"))
      }
      a.$hideOnEnableEl && a.$hideOnEnableEl.addClass("hidden-by-searchbar"), a.$el.trigger("searchbar:enable"), a.emit("local::enable searchbarEnable", a)
    }
    let o = !1;
    return e === !0 && n.activeElement !== a.inputEl && (o = !0), s.ios && t.theme === "ios" ? a.expandable ? (o && a.$inputEl.focus(), i()) : (o && a.$inputEl.focus(), e && (e.type === "focus" || e === !0) ? ke(() => {
      i()
    }, 400) : i()) : (o && a.$inputEl.focus(), t.theme === "md" && a.expandable && a.$el.parents(".page, .view, .navbar-inner, .navbar").scrollLeft(t.rtl ? 100 : 0), i()), a
  }
  disable() {
    const e = this;
    if (!e.enabled) return e;
    const a = e.app;
    if (e.$inputEl.val("").trigger("change"), e.$el.removeClass("searchbar-enabled searchbar-focused searchbar-enabled-no-disable-button"), e.expandable) {
      const t = e.$el.parents(".navbar"),
        n = e.$pageEl && e.$pageEl.find(".page-content");
      if (t.hasClass("navbar-large") && n.length) {
        const s = t.find(".title-large");
        if (e.$el.transitionEnd(() => {
            n.removeClass("with-searchbar-expandable-closing")
          }), t.hasClass("navbar-large") && t.hasClass("navbar-large-collapsed") && s.length) {
          const i = n[0].scrollTop,
            o = s[0].offsetHeight;
          i > o && (n.transition(0), n[0].scrollTop = i + o, setTimeout(() => {
            n.transition("")
          }, 200))
        }
        n.removeClass("with-searchbar-expandable-enabled").addClass("with-searchbar-expandable-closing")
      }
      a.theme === "md" && t.length ? (t.removeClass("with-searchbar-expandable-enabled with-searchbar-expandable-enabled-no-transition").addClass("with-searchbar-expandable-closing"), e.$el.transitionEnd(() => {
        t.removeClass("with-searchbar-expandable-closing")
      })) : (t.removeClass("with-searchbar-expandable-enabled with-searchbar-expandable-enabled-no-transition").addClass("with-searchbar-expandable-closing"), e.$el.transitionEnd(() => {
        t.removeClass("with-searchbar-expandable-closing")
      }), e.$pageEl && e.$pageEl.find(".page-content").trigger("scroll"))
    }
    return !e.expandable && e.$disableButtonEl && e.$disableButtonEl.length > 0 && a.theme !== "md" && e.$disableButtonEl.css(`margin-${a.rtl?"left":"right"}`, `${-e.disableButtonEl.offsetWidth}px`), e.$backdropEl && (e.$searchContainer && e.$searchContainer.length || e.params.customSearch) && e.backdropHide(), e.enabled = !1, e.$inputEl.blur(), e.$hideOnEnableEl && e.$hideOnEnableEl.removeClass("hidden-by-searchbar"), e.$el.trigger("searchbar:disable"), e.emit("local::disable searchbarDisable", e), e
  }
  toggle() {
    const e = this;
    return e.enabled ? e.disable() : e.enable(!0), e
  }
  backdropShow() {
    const e = this;
    return e.$backdropEl && e.$backdropEl.addClass("searchbar-backdrop-in"), e
  }
  backdropHide() {
    const e = this;
    return e.$backdropEl && e.$backdropEl.removeClass("searchbar-backdrop-in"), e
  }
  search(e, a) {
    const t = this;
    if (t.previousQuery = t.query || "", e === t.previousQuery) return t;
    a || (t.enabled || t.enable(), t.$inputEl.val(e), t.$inputEl.trigger("input")), t.query = e, t.value = e;
    const {
      $searchContainer: n,
      $el: s,
      $foundEl: i,
      $notFoundEl: o,
      $hideOnSearchEl: l,
      isVirtualList: c
    } = t;
    if (e.length > 0 && l ? l.addClass("hidden-by-searchbar") : l && l.removeClass("hidden-by-searchbar"), (n && n.length && s.hasClass("searchbar-enabled") || t.params.customSearch && s.hasClass("searchbar-enabled")) && (e.length === 0 ? t.backdropShow() : t.backdropHide()), t.params.customSearch) return s.trigger("searchbar:search", {
      query: e,
      previousQuery: t.previousQuery
    }), t.emit("local::search searchbarSearch", t, e, t.previousQuery), t;
    let d = [],
      p;
    if (c) {
      if (t.virtualList = n[0].f7VirtualList, e.trim() === "") return t.virtualList.resetFilter(), o && o.hide(), i && i.show(), s.trigger("searchbar:search", {
        query: e,
        previousQuery: t.previousQuery
      }), t.emit("local::search searchbarSearch", t, e, t.previousQuery), t;
      if (p = t.params.removeDiacritics ? Jt(e) : e, t.virtualList.params.searchAll) d = t.virtualList.params.searchAll(p, t.virtualList.items) || [];
      else if (t.virtualList.params.searchByItem)
        for (let u = 0; u < t.virtualList.items.length; u += 1) t.virtualList.params.searchByItem(p, t.virtualList.items[u], u) && d.push(u)
    } else {
      let u;
      t.params.removeDiacritics ? u = Jt(e.trim().toLowerCase()).split(" ") : u = e.trim().toLowerCase().split(" "), n.find(t.params.searchItem).removeClass("hidden-by-searchbar").each(g => {
        const h = y(g);
        let f = [],
          b = t.params.searchIn ? h.find(t.params.searchIn) : h;
        t.params.searchIn === t.params.searchItem && (b = h), b.each(v => {
          let E = y(v).text().trim().toLowerCase();
          t.params.removeDiacritics && (E = Jt(E)), f.push(E)
        }), f = f.join(" ");
        let m = 0;
        for (let v = 0; v < u.length; v += 1) f.indexOf(u[v]) >= 0 && (m += 1);
        m !== u.length && !(t.params.ignore && h.is(t.params.ignore)) ? h.addClass("hidden-by-searchbar") : d.push(h[0])
      }), t.params.hideGroupTitles && n.find(t.params.searchGroupTitle).each(g => {
        const h = y(g),
          f = h.nextAll(t.params.searchItem);
        let b = !0;
        for (let v = 0; v < f.length; v += 1) {
          const E = f.eq(v);
          if (E.is(t.params.searchGroupTitle)) break;
          E.hasClass("hidden-by-searchbar") || (b = !1)
        }
        const m = t.params.ignore && h.is(t.params.ignore);
        b && !m ? h.addClass("hidden-by-searchbar") : h.removeClass("hidden-by-searchbar")
      }), t.params.hideGroups && n.find(t.params.searchGroup).each(g => {
        const h = y(g),
          f = t.params.ignore && h.is(t.params.ignore);
        h.find(t.params.searchItem).filter(m => !y(m).hasClass("hidden-by-searchbar")).length === 0 && !f ? h.addClass("hidden-by-searchbar") : h.removeClass("hidden-by-searchbar")
      })
    }
    return d.length === 0 ? (o && o.show(), i && i.hide()) : (o && o.hide(), i && i.show()), c && t.virtualList && t.virtualList.filterItems(d), s.trigger("searchbar:search", {
      query: e,
      previousQuery: t.previousQuery,
      foundItems: d
    }), t.emit("local::search searchbarSearch", t, e, t.previousQuery, d), t
  }
  init() {
    const e = this;
    e.expandable && e.$el && e.$el.addClass("searchbar-expandable"), e.inline && e.$el && e.$el.addClass("searchbar-inline"), e.attachEvents()
  }
  destroy() {
    const e = this;
    e.emit("local::beforeDestroy searchbarBeforeDestroy", e), e.$el.trigger("searchbar:beforedestroy"), e.detachEvents(), e.$el[0] && (e.$el[0].f7Searchbar = null, delete e.$el[0].f7Searchbar), $e(e)
  }
}
var tn = cc,
  mu = {
    name: "searchbar",
    static: {
      Searchbar: tn
    },
    create() {
      const r = this;
      r.searchbar = xe({
        defaultSelector: ".searchbar",
        constructor: tn,
        app: r,
        domProp: "f7Searchbar",
        addMethods: "clear enable disable toggle search".split(" ")
      })
    },
    on: {
      tabMounted(r) {
        const e = this;
        y(r).find(".searchbar-init").each(a => {
          const t = y(a);
          e.searchbar.create(H(t.dataset(), {
            el: a
          }))
        })
      },
      tabBeforeRemove(r) {
        y(r).find(".searchbar-init").each(e => {
          e.f7Searchbar && e.f7Searchbar.destroy && e.f7Searchbar.destroy()
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".searchbar-init").each(a => {
          const t = y(a);
          e.searchbar.create(H(t.dataset(), {
            el: a
          }))
        }), e.theme === "ios" && r.view && r.view.router.dynamicNavbar && r.$navbarEl && r.$navbarEl.length > 0 && r.$navbarEl.find(".searchbar-init").each(a => {
          const t = y(a);
          e.searchbar.create(H(t.dataset(), {
            el: a
          }))
        })
      },
      pageBeforeRemove(r) {
        const e = this;
        r.$el.find(".searchbar-init").each(a => {
          a.f7Searchbar && a.f7Searchbar.destroy && a.f7Searchbar.destroy()
        }), e.theme === "ios" && r.view && r.view.router.dynamicNavbar && r.$navbarEl && r.$navbarEl.length > 0 && r.$navbarEl.find(".searchbar-init").each(a => {
          a.f7Searchbar && a.f7Searchbar.destroy && a.f7Searchbar.destroy()
        })
      }
    },
    clicks: {
      ".searchbar-clear": function (e, a) {
        a === void 0 && (a = {});
        const n = this.searchbar.get(a.searchbar);
        n && n.clear()
      },
      ".searchbar-enable": function (e, a) {
        a === void 0 && (a = {});
        const n = this.searchbar.get(a.searchbar);
        n && n.enable(!0)
      },
      ".searchbar-disable": function (e, a) {
        a === void 0 && (a = {});
        const n = this.searchbar.get(a.searchbar);
        n && n.disable()
      },
      ".searchbar-toggle": function (e, a) {
        a === void 0 && (a = {});
        const n = this.searchbar.get(a.searchbar);
        n && n.toggle()
      }
    },
    vnode: {
      "searchbar-init": {
        insert(r) {
          const e = this,
            a = r.elm,
            t = y(a);
          e.searchbar.create(H(t.dataset(), {
            el: a
          }))
        },
        destroy(r) {
          const e = r.elm;
          e.f7Searchbar && e.f7Searchbar.destroy && e.f7Searchbar.destroy()
        }
      }
    }
  };

function Ra() {
  return Ra = Object.assign ? Object.assign.bind() : function (r) {
    for (var e = 1; e < arguments.length; e++) {
      var a = arguments[e];
      for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (r[t] = a[t])
    }
    return r
  }, Ra.apply(this, arguments)
}
class dc extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this,
      n = {
        autoLayout: !0,
        messages: [],
        newMessagesFirst: !1,
        scrollMessages: !0,
        scrollMessagesOnEdge: !0,
        firstMessageRule: void 0,
        lastMessageRule: void 0,
        tailMessageRule: void 0,
        sameNameMessageRule: void 0,
        sameHeaderMessageRule: void 0,
        sameFooterMessageRule: void 0,
        sameAvatarMessageRule: void 0,
        customClassMessageRule: void 0,
        renderMessage: void 0
      };
    t.useModulesParams(n), t.params = H(n, a);
    const s = y(a.el).eq(0);
    if (s.length === 0) return t;
    if (s[0].f7Messages) return s[0].f7Messages;
    s[0].f7Messages = t;
    const i = s.closest(".page-content").eq(0);
    return H(t, {
      messages: t.params.messages,
      $el: s,
      el: s[0],
      $pageContentEl: i,
      pageContentEl: i[0]
    }), t.useModules(), t.init(), t
  }
  getMessageData(e) {
    const a = y(e),
      t = {
        name: a.find(".message-name").html(),
        header: a.find(".message-header").html(),
        textHeader: a.find(".message-text-header").html(),
        textFooter: a.find(".message-text-footer").html(),
        footer: a.find(".message-footer").html(),
        isTitle: a.hasClass("messages-title"),
        type: a.hasClass("message-sent") ? "sent" : "received",
        text: a.find(".message-text").html(),
        image: a.find(".message-image").html(),
        imageSrc: a.find(".message-image img").attr("src"),
        typing: a.hasClass("message-typing")
      };
    t.isTitle && (t.text = a.html()), t.text && t.textHeader && (t.text = t.text.replace(`<div class="message-text-header">${t.textHeader}</div>`, "")), t.text && t.textFooter && (t.text = t.text.replace(`<div class="message-text-footer">${t.textFooter}</div>`, ""));
    let n = a.find(".message-avatar").css("background-image");
    return (n === "none" || n === "") && (n = void 0), n && typeof n == "string" ? n = n.replace("url(", "").replace(")", "").replace(/"/g, "").replace(/'/g, "") : n = void 0, t.avatar = n, t
  }
  getMessagesData() {
    const e = this,
      a = [];
    return e.$el.find(".message, .messages-title").each(t => {
      a.push(e.getMessageData(t))
    }), a
  }
  renderMessage(e) {
    const a = this,
      t = H({
        type: "sent",
        attrs: {}
      }, e);
    return a.params.renderMessage ? a.params.renderMessage.call(a, t) : t.isTitle ? `<div class="messages-title">${t.text}</div>` : T("div", Ra({
      class: `message message-${t.type} ${t.isTyping?"message-typing":""} ${t.cssClass||""}`
    }, t.attrs), t.avatar && T("div", {
      class: "message-avatar",
      style: `background-image:url(${t.avatar})`
    }), T("div", {
      class: "message-content"
    }, t.name && T("div", {
      class: "message-name"
    }, t.name), t.header && T("div", {
      class: "message-header"
    }, t.header), T("div", {
      class: "message-bubble"
    }, t.textHeader && T("div", {
      class: "message-text-header"
    }, t.textHeader), t.image && T("div", {
      class: "message-image"
    }, t.image), t.imageSrc && !t.image && T("div", {
      class: "message-image"
    }, T("img", {
      src: t.imageSrc
    })), (t.text || t.isTyping) && T("div", {
      class: "message-text"
    }, t.text || "", t.isTyping && T("div", {
      class: "message-typing-indicator"
    }, T("div", null), T("div", null), T("div", null))), t.textFooter && T("div", {
      class: "message-text-footer"
    }, t.textFooter)), t.footer && T("div", {
      class: "message-footer"
    }, t.footer)))
  }
  renderMessages(e, a) {
    e === void 0 && (e = this.messages), a === void 0 && (a = this.params.newMessagesFirst ? "prepend" : "append");
    const t = this,
      n = e.map(s => t.renderMessage(s)).join("");
    t.$el[a](n)
  }
  isFirstMessage() {
    const e = this;
    return e.params.firstMessageRule ? e.params.firstMessageRule(...arguments) : !1
  }
  isLastMessage() {
    const e = this;
    return e.params.lastMessageRule ? e.params.lastMessageRule(...arguments) : !1
  }
  isTailMessage() {
    const e = this;
    return e.params.tailMessageRule ? e.params.tailMessageRule(...arguments) : !1
  }
  isSameNameMessage() {
    const e = this;
    return e.params.sameNameMessageRule ? e.params.sameNameMessageRule(...arguments) : !1
  }
  isSameHeaderMessage() {
    const e = this;
    return e.params.sameHeaderMessageRule ? e.params.sameHeaderMessageRule(...arguments) : !1
  }
  isSameFooterMessage() {
    const e = this;
    return e.params.sameFooterMessageRule ? e.params.sameFooterMessageRule(...arguments) : !1
  }
  isSameAvatarMessage() {
    const e = this;
    return e.params.sameAvatarMessageRule ? e.params.sameAvatarMessageRule(...arguments) : !1
  }
  isCustomClassMessage() {
    const e = this;
    if (e.params.customClassMessageRule) return e.params.customClassMessageRule(...arguments)
  }
  layout() {
    const e = this;
    e.$el.find(".message, .messages-title").each((a, t) => {
      const n = y(a);
      e.messages || (e.messages = e.getMessagesData());
      const s = [],
        i = e.messages[t],
        o = e.messages[t - 1],
        l = e.messages[t + 1];
      e.isFirstMessage(i, o, l) && s.push("message-first"), e.isLastMessage(i, o, l) && s.push("message-last"), e.isTailMessage(i, o, l) && s.push("message-tail"), e.isSameNameMessage(i, o, l) && s.push("message-same-name"), e.isSameHeaderMessage(i, o, l) && s.push("message-same-header"), e.isSameFooterMessage(i, o, l) && s.push("message-same-footer"), e.isSameAvatarMessage(i, o, l) && s.push("message-same-avatar");
      let c = e.isCustomClassMessage(i, o, l);
      c && c.length && (typeof c == "string" && (c = c.split(" ")), c.forEach(d => {
        s.push(d)
      })), n.removeClass("message-first message-last message-tail message-same-name message-same-header message-same-footer message-same-avatar"), s.forEach(d => {
        n.addClass(d)
      })
    })
  }
  clear() {
    const e = this;
    e.messages = [], e.$el.html("")
  }
  removeMessage(e, a) {
    a === void 0 && (a = !0);
    const t = this;
    let n, s;
    return typeof e == "number" ? (n = e, s = t.$el.find(".message, .messages-title").eq(n)) : t.messages && t.messages.indexOf(e) >= 0 ? (n = t.messages.indexOf(e), s = t.$el.children().eq(n)) : (s = y(e), n = s.index()), s.length === 0 || (s.remove(), t.messages.splice(n, 1), t.params.autoLayout && a && t.layout()), t
  }
  removeMessages(e, a) {
    a === void 0 && (a = !0);
    const t = this;
    if (Array.isArray(e)) {
      const n = [];
      e.forEach(s => {
        n.push(t.$el.find(".message, .messages-title").eq(s))
      }), n.forEach(s => {
        t.removeMessage(s, !1)
      })
    } else y(e).each(n => {
      t.removeMessage(n, !1)
    });
    return t.params.autoLayout && a && t.layout(), t
  }
  addMessage() {
    const e = this;
    let a, t, n;
    for (var s = arguments.length, i = new Array(s), o = 0; o < s; o++) i[o] = arguments[o];
    return typeof i[1] == "boolean" ? [a, t, n] = i : [a, n, t] = i, typeof t == "undefined" && (t = !0), typeof n == "undefined" && (n = e.params.newMessagesFirst ? "prepend" : "append"), e.addMessages([a], t, n)
  }
  setScrollData() {
    const e = this,
      a = e.pageContentEl.scrollHeight,
      t = e.pageContentEl.offsetHeight,
      n = e.pageContentEl.scrollTop;
    return e.scrollData = {
      scrollHeightBefore: a,
      heightBefore: t,
      scrollBefore: n
    }, {
      scrollHeightBefore: a,
      heightBefore: t,
      scrollBefore: n
    }
  }
  addMessages() {
    const e = this;
    let a, t, n;
    for (var s = arguments.length, i = new Array(s), o = 0; o < s; o++) i[o] = arguments[o];
    typeof i[1] == "boolean" ? [a, t, n] = i : [a, n, t] = i, typeof t == "undefined" && (t = !0), typeof n == "undefined" && (n = e.params.newMessagesFirst ? "prepend" : "append");
    const {
      scrollHeightBefore: l,
      scrollBefore: c
    } = e.setScrollData();
    let d = "";
    const p = e.messages.filter(g => g.isTyping)[0];
    a.forEach(g => {
      p ? n === "append" ? e.messages.splice(e.messages.indexOf(p), 0, g) : e.messages.splice(e.messages.indexOf(p) + 1, 0, g) : e.messages[n === "append" ? "push" : "unshift"](g), d += e.renderMessage(g)
    });
    const u = y(d);
    return t && (n === "append" && !e.params.newMessagesFirst && u.addClass("message-appear-from-bottom"), n === "prepend" && e.params.newMessagesFirst && u.addClass("message-appear-from-top")), p ? n === "append" ? u.insertBefore(e.$el.find(".message-typing")) : u.insertAfter(e.$el.find(".message-typing")) : e.$el[n](u), e.params.autoLayout && e.layout(), n === "prepend" && !p && (e.pageContentEl.scrollTop = c + (e.pageContentEl.scrollHeight - l)), e.params.scrollMessages && (n === "append" && !e.params.newMessagesFirst || n === "prepend" && e.params.newMessagesFirst && !p) && e.scrollWithEdgeCheck(t), e
  }
  showTyping(e) {
    e === void 0 && (e = {});
    const a = this,
      t = a.messages.filter(n => n.isTyping)[0];
    return t && a.removeMessage(a.messages.indexOf(t)), a.addMessage(H({
      type: "received",
      isTyping: !0
    }, e)), a
  }
  hideTyping() {
    const e = this;
    let a, t;
    if (e.messages.forEach((n, s) => {
        n.isTyping && (a = s)
      }), typeof a != "undefined" && e.$el.find(".message").eq(a).hasClass("message-typing") && (t = !0, e.removeMessage(a)), !t) {
      const n = e.$el.find(".message-typing");
      n.length && e.removeMessage(n)
    }
    return e
  }
  scrollWithEdgeCheck(e) {
    const a = this,
      {
        scrollBefore: t,
        scrollHeightBefore: n,
        heightBefore: s
      } = a.scrollData;
    if (a.params.scrollMessagesOnEdge) {
      let i = !1;
      a.params.newMessagesFirst && t === 0 && (i = !0), !a.params.newMessagesFirst && t - (n - s) >= -10 && (i = !0), i && a.scroll(e ? void 0 : 0)
    } else a.scroll(e ? void 0 : 0)
  }
  scroll(e, a) {
    e === void 0 && (e = 300);
    const t = this,
      n = t.pageContentEl.scrollTop;
    let s;
    if (typeof a != "undefined") s = a;
    else if (s = t.params.newMessagesFirst ? 0 : t.pageContentEl.scrollHeight - t.pageContentEl.offsetHeight, s === n) return t;
    return t.$pageContentEl.scrollTop(s, e), t
  }
  init() {
    const e = this;
    (!e.messages || e.messages.length === 0) && (e.messages = e.getMessagesData()), e.params.messages && e.params.messages.length && e.renderMessages(), e.params.autoLayout && e.layout(), e.params.scrollMessages && e.scroll(0)
  }
  destroy() {
    const e = this;
    e.emit("local::beforeDestroy messagesBeforeDestroy", e), e.$el.trigger("messages:beforedestroy"), e.$el[0] && (e.$el[0].f7Messages = null, delete e.$el[0].f7Messages), $e(e)
  }
}
var an = dc,
  gu = {
    name: "messages",
    static: {
      Messages: an
    },
    create() {
      const r = this;
      r.messages = xe({
        defaultSelector: ".messages",
        constructor: an,
        app: r,
        domProp: "f7Messages",
        addMethods: "renderMessages layout scroll clear removeMessage removeMessages addMessage addMessages".split(" ")
      })
    },
    on: {
      tabBeforeRemove(r) {
        const e = this;
        y(r).find(".messages-init").each(a => {
          e.messages.destroy(a)
        })
      },
      tabMounted(r) {
        const e = this;
        y(r).find(".messages-init").each(a => {
          e.messages.create({
            el: a
          })
        })
      },
      pageBeforeRemove(r) {
        const e = this;
        r.$el.find(".messages-init").each(a => {
          e.messages.destroy(a)
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".messages-init").each(a => {
          e.messages.create({
            el: a
          })
        })
      }
    },
    vnode: {
      "messages-init": {
        insert(r) {
          const e = this,
            a = r.elm;
          e.messages.create({
            el: a
          })
        },
        destroy(r) {
          const e = this,
            a = r.elm;
          e.messages.destroy(a)
        }
      }
    }
  };
class pc extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this,
      n = {
        top: !1,
        topOffset: 0,
        bottomOffset: 0,
        attachments: [],
        renderAttachments: void 0,
        renderAttachment: void 0,
        maxHeight: null,
        resizePage: !0
      };
    t.useModulesParams(n), t.params = H(n, a);
    const s = y(t.params.el);
    if (s.length === 0) return t;
    if (s[0].f7Messagebar) return s[0].f7Messagebar;
    s[0].f7Messagebar = t;
    const i = s.parents(".page").eq(0),
      o = i.find(".page-content").eq(0),
      l = s.find(".messagebar-area");
    let c;
    t.params.textareaEl ? c = y(t.params.textareaEl) : c = s.find("textarea");
    const d = s.find(".messagebar-attachments"),
      p = s.find(".messagebar-sheet");
    t.params.top && s.addClass("messagebar-top"), H(t, {
      $el: s,
      el: s[0],
      $areaEl: l,
      areaEl: l[0],
      $textareaEl: c,
      textareaEl: c[0],
      $attachmentsEl: d,
      attachmentsEl: d[0],
      attachmentsVisible: d.hasClass("messagebar-attachments-visible"),
      $sheetEl: p,
      sheetEl: p[0],
      sheetVisible: p.hasClass("messagebar-sheet-visible"),
      $pageEl: i,
      pageEl: i[0],
      $pageContentEl: o,
      pageContentEl: o,
      top: s.hasClass("messagebar-top") || t.params.top,
      attachments: []
    });

    function u() {
      t.params.resizePage && t.resizePage()
    }

    function g(v) {
      v.preventDefault()
    }

    function h(v) {
      const E = y(this).index();
      y(v.target).closest(".messagebar-attachment-delete").length ? (y(this).trigger("messagebar:attachmentdelete", E), t.emit("local::attachmentDelete messagebarAttachmentDelete", t, this, E)) : (y(this).trigger("messagebar:attachmentclick", E), t.emit("local::attachmentClick messagebarAttachmentClick", t, this, E))
    }

    function f() {
      t.checkEmptyState(), t.$el.trigger("messagebar:change"), t.emit("local::change messagebarChange", t)
    }

    function b() {
      t.sheetHide(), t.$el.addClass("messagebar-focused"), t.$el.trigger("messagebar:focus"), t.emit("local::focus messagebarFocus", t)
    }

    function m() {
      t.$el.removeClass("messagebar-focused"), t.$el.trigger("messagebar:blur"), t.emit("local::blur messagebarBlur", t)
    }
    return t.attachEvents = function () {
      s.on("textarea:resize", u), s.on("submit", g), s.on("click", ".messagebar-attachment", h), c.on("change input", f), c.on("focus", b), c.on("blur", m), e.on("resize", u)
    }, t.detachEvents = function () {
      s.off("textarea:resize", u), s.off("submit", g), s.off("click", ".messagebar-attachment", h), c.off("change input", f), c.off("focus", b), c.off("blur", m), e.off("resize", u)
    }, t.useModules(), t.init(), t
  }
  focus() {
    const e = this;
    return e.$textareaEl.focus(), e
  }
  blur() {
    const e = this;
    return e.$textareaEl.blur(), e
  }
  clear() {
    const e = this;
    return e.$textareaEl.val("").trigger("change"), e
  }
  getValue() {
    return this.$textareaEl.val().trim()
  }
  setValue(e) {
    const a = this;
    return a.$textareaEl.val(e).trigger("change"), a
  }
  setPlaceholder(e) {
    const a = this;
    return a.$textareaEl.attr("placeholder", e), a
  }
  resizePage() {
    const e = this,
      {
        params: a,
        $el: t,
        top: n,
        $pageEl: s,
        $pageContentEl: i,
        $areaEl: o,
        $textareaEl: l,
        $sheetEl: c,
        $attachmentsEl: d
      } = e,
      p = t[0].offsetHeight;
    let u = a.maxHeight;
    if (!n) {
      const g = parseInt(i.css("padding-bottom"), 10),
        h = p + a.bottomOffset;
      if (h !== g && i.length) {
        const f = parseInt(i.css("padding-top"), 10),
          b = i[0].scrollHeight,
          m = i[0].offsetHeight,
          E = i[0].scrollTop === b - m;
        u || (u = s[0].offsetHeight - f - c.outerHeight() - d.outerHeight() - parseInt(o.css("margin-top"), 10) - parseInt(o.css("margin-bottom"), 10)), l.css("max-height", `${u}px`), i.css("padding-bottom", `${h}px`), E && i.scrollTop(i[0].scrollHeight - m), t.trigger("messagebar:resizepage"), e.emit("local::resizePage messagebarResizePage", e)
      }
    }
  }
  checkEmptyState() {
    const e = this,
      {
        $el: a,
        $textareaEl: t
      } = e,
      n = t.val().trim();
    n && n.length ? a.addClass("messagebar-with-value") : a.removeClass("messagebar-with-value")
  }
  attachmentsCreate(e) {
    e === void 0 && (e = "");
    const a = this,
      t = y(`<div class="messagebar-attachments">${e}</div>`);
    return t.insertBefore(a.$textareaEl), H(a, {
      $attachmentsEl: t,
      attachmentsEl: t[0]
    }), a
  }
  attachmentsShow(e) {
    e === void 0 && (e = "");
    const a = this;
    return a.$attachmentsEl = a.$el.find(".messagebar-attachments"), a.$attachmentsEl.length === 0 && a.attachmentsCreate(e), a.$el.addClass("messagebar-attachments-visible"), a.attachmentsVisible = !0, a.params.resizePage && a.resizePage(), a
  }
  attachmentsHide() {
    const e = this;
    return e.$el.removeClass("messagebar-attachments-visible"), e.attachmentsVisible = !1, e.params.resizePage && e.resizePage(), e
  }
  attachmentsToggle() {
    const e = this;
    return e.attachmentsVisible ? e.attachmentsHide() : e.attachmentsShow(), e
  }
  renderAttachment(e) {
    const a = this;
    return a.params.renderAttachment ? a.params.renderAttachment.call(a, e) : `
      <div class="messagebar-attachment">
        <img src="${e}">
        <span class="messagebar-attachment-delete"></span>
      </div>
    `
  }
  renderAttachments() {
    const e = this;
    let a;
    e.params.renderAttachments ? a = e.params.renderAttachments.call(e, e.attachments) : a = `${e.attachments.map(t=>e.renderAttachment(t)).join("")}`, e.$attachmentsEl.length === 0 ? e.attachmentsCreate(a) : e.$attachmentsEl.html(a)
  }
  sheetCreate(e) {
    e === void 0 && (e = "");
    const a = this,
      t = y(`<div class="messagebar-sheet">${e}</div>`);
    return a.$el.append(t), H(a, {
      $sheetEl: t,
      sheetEl: t[0]
    }), a
  }
  sheetShow(e) {
    e === void 0 && (e = "");
    const a = this;
    return a.$sheetEl = a.$el.find(".messagebar-sheet"), a.$sheetEl.length === 0 && a.sheetCreate(e), a.$el.addClass("messagebar-sheet-visible"), a.sheetVisible = !0, a.params.resizePage && a.resizePage(), a
  }
  sheetHide() {
    const e = this;
    return e.$el.removeClass("messagebar-sheet-visible"), e.sheetVisible = !1, e.params.resizePage && e.resizePage(), e
  }
  sheetToggle() {
    const e = this;
    return e.sheetVisible ? e.sheetHide() : e.sheetShow(), e
  }
  init() {
    const e = this;
    return e.attachEvents(), e.checkEmptyState(), e
  }
  destroy() {
    const e = this;
    e.emit("local::beforeDestroy messagebarBeforeDestroy", e), e.$el.trigger("messagebar:beforedestroy"), e.detachEvents(), e.$el[0] && (e.$el[0].f7Messagebar = null, delete e.$el[0].f7Messagebar), $e(e)
  }
}
var rn = pc,
  vu = {
    name: "messagebar",
    static: {
      Messagebar: rn
    },
    create() {
      const r = this;
      r.messagebar = xe({
        defaultSelector: ".messagebar",
        constructor: rn,
        app: r,
        domProp: "f7Messagebar",
        addMethods: "clear getValue setValue setPlaceholder resizePage focus blur attachmentsCreate attachmentsShow attachmentsHide attachmentsToggle renderAttachments sheetCreate sheetShow sheetHide sheetToggle".split(" ")
      })
    },
    on: {
      tabBeforeRemove(r) {
        const e = this;
        y(r).find(".messagebar-init").each(a => {
          e.messagebar.destroy(a)
        })
      },
      tabMounted(r) {
        const e = this;
        y(r).find(".messagebar-init").each(a => {
          e.messagebar.create(H({
            el: a
          }, y(a).dataset()))
        })
      },
      pageBeforeRemove(r) {
        const e = this;
        r.$el.find(".messagebar-init").each(a => {
          e.messagebar.destroy(a)
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".messagebar-init").each(a => {
          e.messagebar.create(H({
            el: a
          }, y(a).dataset()))
        })
      }
    },
    vnode: {
      "messagebar-init": {
        insert(r) {
          const e = this,
            a = r.elm;
          e.messagebar.create(H({
            el: a
          }, y(a).dataset()))
        },
        destroy(r) {
          const e = this,
            a = r.elm;
          e.messagebar.destroy(a)
        }
      }
    }
  };

function uc(r) {
  const e = r;
  Object.keys(e).forEach(a => {
    try {
      e[a] = null
    } catch {}
    try {
      delete e[a]
    } catch {}
  })
}

function ut(r, e = 0) {
  return setTimeout(r, e)
}

function He() {
  return Date.now()
}

function fc(r) {
  const e = G();
  let a;
  return e.getComputedStyle && (a = e.getComputedStyle(r, null)), !a && r.currentStyle && (a = r.currentStyle), a || (a = r.style), a
}

function Ha(r, e = "x") {
  const a = G();
  let t, n, s;
  const i = fc(r);
  return a.WebKitCSSMatrix ? (n = i.transform || i.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(o => o.replace(",", ".")).join(", ")), s = new a.WebKitCSSMatrix(n === "none" ? "" : n)) : (s = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = s.toString().split(",")), e === "x" && (a.WebKitCSSMatrix ? n = s.m41 : t.length === 16 ? n = parseFloat(t[12]) : n = parseFloat(t[4])), e === "y" && (a.WebKitCSSMatrix ? n = s.m42 : t.length === 16 ? n = parseFloat(t[13]) : n = parseFloat(t[5])), n || 0
}

function Ot(r) {
  return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object"
}

function hc(r) {
  return typeof window != "undefined" && typeof window.HTMLElement != "undefined" ? r instanceof HTMLElement : r && (r.nodeType === 1 || r.nodeType === 11)
}

function De(...r) {
  const e = Object(r[0]),
    a = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < r.length; t += 1) {
    const n = r[t];
    if (n != null && !hc(n)) {
      const s = Object.keys(Object(n)).filter(i => a.indexOf(i) < 0);
      for (let i = 0, o = s.length; i < o; i += 1) {
        const l = s[i],
          c = Object.getOwnPropertyDescriptor(n, l);
        c !== void 0 && c.enumerable && (Ot(e[l]) && Ot(n[l]) ? n[l].__swiper__ ? e[l] = n[l] : De(e[l], n[l]) : !Ot(e[l]) && Ot(n[l]) ? (e[l] = {}, n[l].__swiper__ ? e[l] = n[l] : De(e[l], n[l])) : e[l] = n[l])
      }
    }
  }
  return e
}

function Bt(r, e, a) {
  r.style.setProperty(e, a)
}

function nn({
  swiper: r,
  targetPosition: e,
  side: a
}) {
  const t = G(),
    n = -r.translate;
  let s = null,
    i;
  const o = r.params.speed;
  r.wrapperEl.style.scrollSnapType = "none", t.cancelAnimationFrame(r.cssModeFrameID);
  const l = e > n ? "next" : "prev",
    c = (p, u) => l === "next" && p >= u || l === "prev" && p <= u,
    d = () => {
      i = new Date().getTime(), s === null && (s = i);
      const p = Math.max(Math.min((i - s) / o, 1), 0),
        u = .5 - Math.cos(p * Math.PI) / 2;
      let g = n + u * (e - n);
      if (c(g, e) && (g = e), r.wrapperEl.scrollTo({
          [a]: g
        }), c(g, e)) {
        r.wrapperEl.style.overflow = "hidden", r.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          r.wrapperEl.style.overflow = "", r.wrapperEl.scrollTo({
            [a]: g
          })
        }), t.cancelAnimationFrame(r.cssModeFrameID);
        return
      }
      r.cssModeFrameID = t.requestAnimationFrame(d)
    };
  d()
}

function ft(r) {
  return r.querySelector(".swiper-slide-transform") || r.shadowEl && r.shadowEl.querySelector(".swiper-slide-transform") || r
}

function Te(r, e = "") {
  return [...r.children].filter(a => a.matches(e))
}

function Fe(r, e = []) {
  const a = document.createElement(r);
  return a.classList.add(...Array.isArray(e) ? e : [e]), a
}

function ea(r) {
  const e = G(),
    a = ee(),
    t = r.getBoundingClientRect(),
    n = a.body,
    s = r.clientTop || n.clientTop || 0,
    i = r.clientLeft || n.clientLeft || 0,
    o = r === e ? e.scrollY : r.scrollTop,
    l = r === e ? e.scrollX : r.scrollLeft;
  return {
    top: t.top + o - s,
    left: t.left + l - i
  }
}

function mc(r, e) {
  const a = [];
  for (; r.previousElementSibling;) {
    const t = r.previousElementSibling;
    e ? t.matches(e) && a.push(t) : a.push(t), r = t
  }
  return a
}

function gc(r, e) {
  const a = [];
  for (; r.nextElementSibling;) {
    const t = r.nextElementSibling;
    e ? t.matches(e) && a.push(t) : a.push(t), r = t
  }
  return a
}

function nt(r, e) {
  return G().getComputedStyle(r, null).getPropertyValue(e)
}

function Dt(r) {
  let e = r,
    a;
  if (e) {
    for (a = 0;
      (e = e.previousSibling) !== null;) e.nodeType === 1 && (a += 1);
    return a
  }
}

function ht(r, e) {
  const a = [];
  let t = r.parentElement;
  for (; t;) e ? t.matches(e) && a.push(t) : a.push(t), t = t.parentElement;
  return a
}

function Lt(r, e) {
  function a(t) {
    t.target === r && (e.call(r, t), r.removeEventListener("transitionend", a))
  }
  e && r.addEventListener("transitionend", a)
}

function za(r, e, a) {
  const t = G();
  return a ? r[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(t.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(t.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : r.offsetWidth
}
let Fa;

function vc() {
  const r = G(),
    e = ee();
  return {
    smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in r || r.DocumentTouch && e instanceof r.DocumentTouch)
  }
}

function sn() {
  return Fa || (Fa = vc()), Fa
}
let Va;

function bc({
  userAgent: r
} = {}) {
  const e = sn(),
    a = G(),
    t = a.navigator.platform,
    n = r || a.navigator.userAgent,
    s = {
      ios: !1,
      android: !1
    },
    i = a.screen.width,
    o = a.screen.height,
    l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = n.match(/(iPad).*OS\s([\d_]+)/);
  const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    u = t === "Win32";
  let g = t === "MacIntel";
  const h = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !c && g && e.touch && h.indexOf(`${i}x${o}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), g = !1), l && !u && (s.os = "android", s.android = !0), (c || p || d) && (s.os = "ios", s.ios = !0), s
}

function yc(r = {}) {
  return Va || (Va = bc(r)), Va
}
let Na;

function Ec() {
  const r = G();
  let e = !1;

  function a() {
    const t = r.navigator.userAgent.toLowerCase();
    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
  }
  if (a()) {
    const t = String(r.navigator.userAgent);
    if (t.includes("Version/")) {
      const [n, s] = t.split("Version/")[1].split(" ")[0].split(".").map(i => Number(i));
      e = n < 16 || n === 16 && s < 2
    }
  }
  return {
    isSafari: e || a(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent)
  }
}

function wc() {
  return Na || (Na = Ec()), Na
}

function Cc({
  swiper: r,
  on: e,
  emit: a
}) {
  const t = G();
  let n = null,
    s = null;
  const i = () => {
      !r || r.destroyed || !r.initialized || (a("beforeResize"), a("resize"))
    },
    o = () => {
      !r || r.destroyed || !r.initialized || (n = new ResizeObserver(d => {
        s = t.requestAnimationFrame(() => {
          const {
            width: p,
            height: u
          } = r;
          let g = p,
            h = u;
          d.forEach(({
            contentBoxSize: f,
            contentRect: b,
            target: m
          }) => {
            m && m !== r.el || (g = b ? b.width : (f[0] || f).inlineSize, h = b ? b.height : (f[0] || f).blockSize)
          }), (g !== p || h !== u) && i()
        })
      }), n.observe(r.el))
    },
    l = () => {
      s && t.cancelAnimationFrame(s), n && n.unobserve && r.el && (n.unobserve(r.el), n = null)
    },
    c = () => {
      !r || r.destroyed || !r.initialized || a("orientationchange")
    };
  e("init", () => {
    if (r.params.resizeObserver && typeof t.ResizeObserver != "undefined") {
      o();
      return
    }
    t.addEventListener("resize", i), t.addEventListener("orientationchange", c)
  }), e("destroy", () => {
    l(), t.removeEventListener("resize", i), t.removeEventListener("orientationchange", c)
  })
}

function $c({
  swiper: r,
  extendParams: e,
  on: a,
  emit: t
}) {
  const n = [],
    s = G(),
    i = (c, d = {}) => {
      const p = s.MutationObserver || s.WebkitMutationObserver,
        u = new p(g => {
          if (r.__preventObserver__) return;
          if (g.length === 1) {
            t("observerUpdate", g[0]);
            return
          }
          const h = function () {
            t("observerUpdate", g[0])
          };
          s.requestAnimationFrame ? s.requestAnimationFrame(h) : s.setTimeout(h, 0)
        });
      u.observe(c, {
        attributes: typeof d.attributes == "undefined" ? !0 : d.attributes,
        childList: typeof d.childList == "undefined" ? !0 : d.childList,
        characterData: typeof d.characterData == "undefined" ? !0 : d.characterData
      }), n.push(u)
    },
    o = () => {
      if (!!r.params.observer) {
        if (r.params.observeParents) {
          const c = ht(r.el);
          for (let d = 0; d < c.length; d += 1) i(c[d])
        }
        i(r.el, {
          childList: r.params.observeSlideChildren
        }), i(r.wrapperEl, {
          attributes: !1
        })
      }
    },
    l = () => {
      n.forEach(c => {
        c.disconnect()
      }), n.splice(0, n.length)
    };
  e({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), a("init", o), a("destroy", l)
}
var xc = {
  on(r, e, a) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof e != "function") return t;
    const n = a ? "unshift" : "push";
    return r.split(" ").forEach(s => {
      t.eventsListeners[s] || (t.eventsListeners[s] = []), t.eventsListeners[s][n](e)
    }), t
  },
  once(r, e, a) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof e != "function") return t;

    function n(...s) {
      t.off(r, n), n.__emitterProxy && delete n.__emitterProxy, e.apply(t, s)
    }
    return n.__emitterProxy = e, t.on(r, n, a)
  },
  onAny(r, e) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || typeof r != "function") return a;
    const t = e ? "unshift" : "push";
    return a.eventsAnyListeners.indexOf(r) < 0 && a.eventsAnyListeners[t](r), a
  },
  offAny(r) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const a = e.eventsAnyListeners.indexOf(r);
    return a >= 0 && e.eventsAnyListeners.splice(a, 1), e
  },
  off(r, e) {
    const a = this;
    return !a.eventsListeners || a.destroyed || !a.eventsListeners || r.split(" ").forEach(t => {
      typeof e == "undefined" ? a.eventsListeners[t] = [] : a.eventsListeners[t] && a.eventsListeners[t].forEach((n, s) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && a.eventsListeners[t].splice(s, 1)
      })
    }), a
  },
  emit(...r) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let a, t, n;
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (a = r[0], t = r.slice(1, r.length), n = e) : (a = r[0].events, t = r[0].data, n = r[0].context || e), t.unshift(n), (Array.isArray(a) ? a : a.split(" ")).forEach(i => {
      e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(o => {
        o.apply(n, [i, ...t])
      }), e.eventsListeners && e.eventsListeners[i] && e.eventsListeners[i].forEach(o => {
        o.apply(n, t)
      })
    }), e
  }
};

function kc() {
  const r = this;
  let e, a;
  const t = r.el;
  typeof r.params.width != "undefined" && r.params.width !== null ? e = r.params.width : e = t.clientWidth, typeof r.params.height != "undefined" && r.params.height !== null ? a = r.params.height : a = t.clientHeight, !(e === 0 && r.isHorizontal() || a === 0 && r.isVertical()) && (e = e - parseInt(nt(t, "padding-left") || 0, 10) - parseInt(nt(t, "padding-right") || 0, 10), a = a - parseInt(nt(t, "padding-top") || 0, 10) - parseInt(nt(t, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(a) && (a = 0), Object.assign(r, {
    width: e,
    height: a,
    size: r.isHorizontal() ? e : a
  }))
}

function Tc() {
  const r = this;

  function e(S) {
    return r.isHorizontal() ? S : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    } [S]
  }

  function a(S, P) {
    return parseFloat(S.getPropertyValue(e(P)) || 0)
  }
  const t = r.params,
    {
      wrapperEl: n,
      slidesEl: s,
      size: i,
      rtlTranslate: o,
      wrongRTL: l
    } = r,
    c = r.virtual && t.virtual.enabled,
    d = c ? r.virtual.slides.length : r.slides.length,
    p = Te(s, `.${r.params.slideClass}, swiper-slide`),
    u = c ? r.virtual.slides.length : p.length;
  let g = [];
  const h = [],
    f = [];
  let b = t.slidesOffsetBefore;
  typeof b == "function" && (b = t.slidesOffsetBefore.call(r));
  let m = t.slidesOffsetAfter;
  typeof m == "function" && (m = t.slidesOffsetAfter.call(r));
  const v = r.snapGrid.length,
    E = r.slidesGrid.length;
  let $ = t.spaceBetween,
    w = -b,
    C = 0,
    x = 0;
  if (typeof i == "undefined") return;
  typeof $ == "string" && $.indexOf("%") >= 0 && ($ = parseFloat($.replace("%", "")) / 100 * i), r.virtualSize = -$, p.forEach(S => {
    o ? S.style.marginLeft = "" : S.style.marginRight = "", S.style.marginBottom = "", S.style.marginTop = ""
  }), t.centeredSlides && t.cssMode && (Bt(n, "--swiper-centered-offset-before", ""), Bt(n, "--swiper-centered-offset-after", ""));
  const M = t.grid && t.grid.rows > 1 && r.grid;
  M && r.grid.initSlides(u);
  let A;
  const B = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter(S => typeof t.breakpoints[S].slidesPerView != "undefined").length > 0;
  for (let S = 0; S < u; S += 1) {
    A = 0;
    let P;
    if (p[S] && (P = p[S]), M && r.grid.updateSlide(S, P, u, e), !(p[S] && nt(P, "display") === "none")) {
      if (t.slidesPerView === "auto") {
        B && (p[S].style[e("width")] = "");
        const k = getComputedStyle(P),
          I = P.style.transform,
          R = P.style.webkitTransform;
        if (I && (P.style.transform = "none"), R && (P.style.webkitTransform = "none"), t.roundLengths) A = r.isHorizontal() ? za(P, "width", !0) : za(P, "height", !0);
        else {
          const D = a(k, "width"),
            z = a(k, "padding-left"),
            O = a(k, "padding-right"),
            L = a(k, "margin-left"),
            N = a(k, "margin-right"),
            F = k.getPropertyValue("box-sizing");
          if (F && F === "border-box") A = D + L + N;
          else {
            const {
              clientWidth: V,
              offsetWidth: U
            } = P;
            A = D + z + O + L + N + (U - V)
          }
        }
        I && (P.style.transform = I), R && (P.style.webkitTransform = R), t.roundLengths && (A = Math.floor(A))
      } else A = (i - (t.slidesPerView - 1) * $) / t.slidesPerView, t.roundLengths && (A = Math.floor(A)), p[S] && (p[S].style[e("width")] = `${A}px`);
      p[S] && (p[S].swiperSlideSize = A), f.push(A), t.centeredSlides ? (w = w + A / 2 + C / 2 + $, C === 0 && S !== 0 && (w = w - i / 2 - $), S === 0 && (w = w - i / 2 - $), Math.abs(w) < 1 / 1e3 && (w = 0), t.roundLengths && (w = Math.floor(w)), x % t.slidesPerGroup == 0 && g.push(w), h.push(w)) : (t.roundLengths && (w = Math.floor(w)), (x - Math.min(r.params.slidesPerGroupSkip, x)) % r.params.slidesPerGroup == 0 && g.push(w), h.push(w), w = w + A + $), r.virtualSize += A + $, C = A, x += 1
    }
  }
  if (r.virtualSize = Math.max(r.virtualSize, i) + m, o && l && (t.effect === "slide" || t.effect === "coverflow") && (n.style.width = `${r.virtualSize+t.spaceBetween}px`), t.setWrapperSize && (n.style[e("width")] = `${r.virtualSize+t.spaceBetween}px`), M && r.grid.updateWrapperSize(A, g, e), !t.centeredSlides) {
    const S = [];
    for (let P = 0; P < g.length; P += 1) {
      let k = g[P];
      t.roundLengths && (k = Math.floor(k)), g[P] <= r.virtualSize - i && S.push(k)
    }
    g = S, Math.floor(r.virtualSize - i) - Math.floor(g[g.length - 1]) > 1 && g.push(r.virtualSize - i)
  }
  if (c && t.loop) {
    const S = f[0] + $;
    if (t.slidesPerGroup > 1) {
      const P = Math.ceil((r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup),
        k = S * t.slidesPerGroup;
      for (let I = 0; I < P; I += 1) g.push(g[g.length - 1] + k)
    }
    for (let P = 0; P < r.virtual.slidesBefore + r.virtual.slidesAfter; P += 1) t.slidesPerGroup === 1 && g.push(g[g.length - 1] + S), h.push(h[h.length - 1] + S), r.virtualSize += S
  }
  if (g.length === 0 && (g = [0]), t.spaceBetween !== 0) {
    const S = r.isHorizontal() && o ? "marginLeft" : e("marginRight");
    p.filter((P, k) => !t.cssMode || t.loop ? !0 : k !== p.length - 1).forEach(P => {
      P.style[S] = `${$}px`
    })
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let S = 0;
    f.forEach(k => {
      S += k + (t.spaceBetween ? t.spaceBetween : 0)
    }), S -= t.spaceBetween;
    const P = S - i;
    g = g.map(k => k < 0 ? -b : k > P ? P + m : k)
  }
  if (t.centerInsufficientSlides) {
    let S = 0;
    if (f.forEach(P => {
        S += P + (t.spaceBetween ? t.spaceBetween : 0)
      }), S -= t.spaceBetween, S < i) {
      const P = (i - S) / 2;
      g.forEach((k, I) => {
        g[I] = k - P
      }), h.forEach((k, I) => {
        h[I] = k + P
      })
    }
  }
  if (Object.assign(r, {
      slides: p,
      snapGrid: g,
      slidesGrid: h,
      slidesSizesGrid: f
    }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    Bt(n, "--swiper-centered-offset-before", `${-g[0]}px`), Bt(n, "--swiper-centered-offset-after", `${r.size/2-f[f.length-1]/2}px`);
    const S = -r.snapGrid[0],
      P = -r.slidesGrid[0];
    r.snapGrid = r.snapGrid.map(k => k + S), r.slidesGrid = r.slidesGrid.map(k => k + P)
  }
  if (u !== d && r.emit("slidesLengthChange"), g.length !== v && (r.params.watchOverflow && r.checkOverflow(), r.emit("snapGridLengthChange")), h.length !== E && r.emit("slidesGridLengthChange"), t.watchSlidesProgress && r.updateSlidesOffset(), !c && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const S = `${t.containerModifierClass}backface-hidden`,
      P = r.el.classList.contains(S);
    u <= t.maxBackfaceHiddenSlides ? P || r.el.classList.add(S) : P && r.el.classList.remove(S)
  }
}

function Sc(r) {
  const e = this,
    a = [],
    t = e.virtual && e.params.virtual.enabled;
  let n = 0,
    s;
  typeof r == "number" ? e.setTransition(r) : r === !0 && e.setTransition(e.params.speed);
  const i = o => t ? e.getSlideIndexByData(o) : e.slides[o];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)(e.visibleSlides || []).forEach(o => {
      a.push(o)
    });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const o = e.activeIndex + s;
        if (o > e.slides.length && !t) break;
        a.push(i(o))
      } else a.push(i(e.activeIndex));
  for (s = 0; s < a.length; s += 1)
    if (typeof a[s] != "undefined") {
      const o = a[s].offsetHeight;
      n = o > n ? o : n
    }(n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}

function Mc() {
  const r = this,
    e = r.slides,
    a = r.isElement ? r.isHorizontal() ? r.wrapperEl.offsetLeft : r.wrapperEl.offsetTop : 0;
  for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = (r.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop) - a
}

function Pc(r = this && this.translate || 0) {
  const e = this,
    a = e.params,
    {
      slides: t,
      rtlTranslate: n,
      snapGrid: s
    } = e;
  if (t.length === 0) return;
  typeof t[0].swiperSlideOffset == "undefined" && e.updateSlidesOffset();
  let i = -r;
  n && (i = r), t.forEach(o => {
    o.classList.remove(a.slideVisibleClass)
  }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  for (let o = 0; o < t.length; o += 1) {
    const l = t[o];
    let c = l.swiperSlideOffset;
    a.cssMode && a.centeredSlides && (c -= t[0].swiperSlideOffset);
    const d = (i + (a.centeredSlides ? e.minTranslate() : 0) - c) / (l.swiperSlideSize + a.spaceBetween),
      p = (i - s[0] + (a.centeredSlides ? e.minTranslate() : 0) - c) / (l.swiperSlideSize + a.spaceBetween),
      u = -(i - c),
      g = u + e.slidesSizesGrid[o];
    (u >= 0 && u < e.size - 1 || g > 1 && g <= e.size || u <= 0 && g >= e.size) && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(o), t[o].classList.add(a.slideVisibleClass)), l.progress = n ? -d : d, l.originalProgress = n ? -p : p
  }
}

function Ac(r) {
  const e = this;
  if (typeof r == "undefined") {
    const d = e.rtlTranslate ? -1 : 1;
    r = e && e.translate && e.translate * d || 0
  }
  const a = e.params,
    t = e.maxTranslate() - e.minTranslate();
  let {
    progress: n,
    isBeginning: s,
    isEnd: i,
    progressLoop: o
  } = e;
  const l = s,
    c = i;
  if (t === 0) n = 0, s = !0, i = !0;
  else {
    n = (r - e.minTranslate()) / t;
    const d = Math.abs(r - e.minTranslate()) < 1,
      p = Math.abs(r - e.maxTranslate()) < 1;
    s = d || n <= 0, i = p || n >= 1, d && (n = 0), p && (n = 1)
  }
  if (a.loop) {
    const d = e.getSlideIndexByData(0),
      p = e.getSlideIndexByData(e.slides.length - 1),
      u = e.slidesGrid[d],
      g = e.slidesGrid[p],
      h = e.slidesGrid[e.slidesGrid.length - 1],
      f = Math.abs(r);
    f >= u ? o = (f - u) / h : o = (f + h - g) / h, o > 1 && (o -= 1)
  }
  Object.assign(e, {
    progress: n,
    progressLoop: o,
    isBeginning: s,
    isEnd: i
  }), (a.watchSlidesProgress || a.centeredSlides && a.autoHeight) && e.updateSlidesProgress(r), s && !l && e.emit("reachBeginning toEdge"), i && !c && e.emit("reachEnd toEdge"), (l && !s || c && !i) && e.emit("fromEdge"), e.emit("progress", n)
}

function Ic() {
  const r = this,
    {
      slides: e,
      params: a,
      slidesEl: t,
      activeIndex: n
    } = r,
    s = r.virtual && a.virtual.enabled,
    i = l => Te(t, `.${a.slideClass}${l}, swiper-slide${l}`)[0];
  e.forEach(l => {
    l.classList.remove(a.slideActiveClass, a.slideNextClass, a.slidePrevClass)
  });
  let o;
  if (s)
    if (a.loop) {
      let l = n - r.virtual.slidesBefore;
      l < 0 && (l = r.virtual.slides.length + l), l >= r.virtual.slides.length && (l -= r.virtual.slides.length), o = i(`[data-swiper-slide-index="${l}"]`)
    } else o = i(`[data-swiper-slide-index="${n}"]`);
  else o = e[n];
  if (o) {
    o.classList.add(a.slideActiveClass);
    let l = gc(o, `.${a.slideClass}, swiper-slide`)[0];
    a.loop && !l && (l = e[0]), l && l.classList.add(a.slideNextClass);
    let c = mc(o, `.${a.slideClass}, swiper-slide`)[0];
    a.loop && !c === 0 && (c = e[e.length - 1]), c && c.classList.add(a.slidePrevClass)
  }
  r.emitSlidesClasses()
}
const ta = (r, e) => {
    if (!r || r.destroyed || !r.params) return;
    const a = () => r.isElement ? "swiper-slide" : `.${r.params.slideClass}`,
      t = e.closest(a());
    if (t) {
      const n = t.querySelector(`.${r.params.lazyPreloaderClass}`);
      n && n.remove()
    }
  },
  on = (r, e) => {
    if (!r.slides[e]) return;
    const a = r.slides[e].querySelector('[loading="lazy"]');
    a && a.removeAttribute("loading")
  },
  Ya = r => {
    if (!r || r.destroyed || !r.params) return;
    let e = r.params.lazyPreloadPrevNext;
    const a = r.slides.length;
    if (!a || !e || e < 0) return;
    e = Math.min(e, a);
    const t = r.params.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(r.params.slidesPerView),
      n = r.activeIndex,
      s = n + t - 1;
    if (r.params.rewind)
      for (let i = n - e; i <= s + e; i += 1) {
        const o = (i % a + a) % a;
        o !== n && o > s && on(r, o)
      } else
        for (let i = Math.max(s - e, 0); i <= Math.min(s + e, a - 1); i += 1) i !== n && i > s && on(r, i)
  };

function Oc(r) {
  const {
    slidesGrid: e,
    params: a
  } = r, t = r.rtlTranslate ? r.translate : -r.translate;
  let n;
  for (let s = 0; s < e.length; s += 1) typeof e[s + 1] != "undefined" ? t >= e[s] && t < e[s + 1] - (e[s + 1] - e[s]) / 2 ? n = s : t >= e[s] && t < e[s + 1] && (n = s + 1) : t >= e[s] && (n = s);
  return a.normalizeSlideIndex && (n < 0 || typeof n == "undefined") && (n = 0), n
}

function Bc(r) {
  const e = this,
    a = e.rtlTranslate ? e.translate : -e.translate,
    {
      snapGrid: t,
      params: n,
      activeIndex: s,
      realIndex: i,
      snapIndex: o
    } = e;
  let l = r,
    c;
  const d = u => {
    let g = u - e.virtual.slidesBefore;
    return g < 0 && (g = e.virtual.slides.length + g), g >= e.virtual.slides.length && (g -= e.virtual.slides.length), g
  };
  if (typeof l == "undefined" && (l = Oc(e)), t.indexOf(a) >= 0) c = t.indexOf(a);
  else {
    const u = Math.min(n.slidesPerGroupSkip, l);
    c = u + Math.floor((l - u) / n.slidesPerGroup)
  }
  if (c >= t.length && (c = t.length - 1), l === s) {
    c !== o && (e.snapIndex = c, e.emit("snapIndexChange")), e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = d(l));
    return
  }
  let p;
  e.virtual && n.virtual.enabled && n.loop ? p = d(l) : e.slides[l] ? p = parseInt(e.slides[l].getAttribute("data-swiper-slide-index") || l, 10) : p = l, Object.assign(e, {
    snapIndex: c,
    realIndex: p,
    previousIndex: s,
    activeIndex: l
  }), e.initialized && Ya(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), i !== p && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
}

function Dc(r) {
  const e = this,
    a = e.params,
    t = r.closest(`.${a.slideClass}, swiper-slide`);
  let n = !1,
    s;
  if (t) {
    for (let i = 0; i < e.slides.length; i += 1)
      if (e.slides[i] === t) {
        n = !0, s = i;
        break
      }
  }
  if (t && n) e.clickedSlide = t, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(t.getAttribute("data-swiper-slide-index"), 10) : e.clickedIndex = s;
  else {
    e.clickedSlide = void 0, e.clickedIndex = void 0;
    return
  }
  a.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
}
var Lc = {
  updateSize: kc,
  updateSlides: Tc,
  updateAutoHeight: Sc,
  updateSlidesOffset: Mc,
  updateSlidesProgress: Pc,
  updateProgress: Ac,
  updateSlidesClasses: Ic,
  updateActiveIndex: Bc,
  updateClickedSlide: Dc
};

function Rc(r = this.isHorizontal() ? "x" : "y") {
  const e = this,
    {
      params: a,
      rtlTranslate: t,
      translate: n,
      wrapperEl: s
    } = e;
  if (a.virtualTranslate) return t ? -n : n;
  if (a.cssMode) return n;
  let i = Ha(s, r);
  return t && (i = -i), i || 0
}

function Hc(r, e) {
  const a = this,
    {
      rtlTranslate: t,
      params: n,
      wrapperEl: s,
      progress: i
    } = a;
  let o = 0,
    l = 0;
  const c = 0;
  a.isHorizontal() ? o = t ? -r : r : l = r, n.roundLengths && (o = Math.floor(o), l = Math.floor(l)), n.cssMode ? s[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -l : n.virtualTranslate || (s.style.transform = `translate3d(${o}px, ${l}px, ${c}px)`), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
  let d;
  const p = a.maxTranslate() - a.minTranslate();
  p === 0 ? d = 0 : d = (r - a.minTranslate()) / p, d !== i && a.updateProgress(r), a.emit("setTranslate", a.translate, e)
}

function zc() {
  return -this.snapGrid[0]
}

function Fc() {
  return -this.snapGrid[this.snapGrid.length - 1]
}

function Vc(r = 0, e = this.params.speed, a = !0, t = !0, n) {
  const s = this,
    {
      params: i,
      wrapperEl: o
    } = s;
  if (s.animating && i.preventInteractionOnTransition) return !1;
  const l = s.minTranslate(),
    c = s.maxTranslate();
  let d;
  if (t && r > l ? d = l : t && r < c ? d = c : d = r, s.updateProgress(d), i.cssMode) {
    const p = s.isHorizontal();
    if (e === 0) o[p ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!s.support.smoothScroll) return nn({
        swiper: s,
        targetPosition: -d,
        side: p ? "left" : "top"
      }), !0;
      o.scrollTo({
        [p ? "left" : "top"]: -d,
        behavior: "smooth"
      })
    }
    return !0
  }
  return e === 0 ? (s.setTransition(0), s.setTranslate(d), a && (s.emit("beforeTransitionStart", e, n), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(d), a && (s.emit("beforeTransitionStart", e, n), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function (u) {
    !s || s.destroyed || u.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, a && s.emit("transitionEnd"))
  }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
}
var Nc = {
  getTranslate: Rc,
  setTranslate: Hc,
  minTranslate: zc,
  maxTranslate: Fc,
  translateTo: Vc
};

function Yc(r, e) {
  const a = this;
  a.params.cssMode || (a.wrapperEl.style.transitionDuration = `${r}ms`), a.emit("setTransition", r, e)
}

function ln({
  swiper: r,
  runCallbacks: e,
  direction: a,
  step: t
}) {
  const {
    activeIndex: n,
    previousIndex: s
  } = r;
  let i = a;
  if (i || (n > s ? i = "next" : n < s ? i = "prev" : i = "reset"), r.emit(`transition${t}`), e && n !== s) {
    if (i === "reset") {
      r.emit(`slideResetTransition${t}`);
      return
    }
    r.emit(`slideChangeTransition${t}`), i === "next" ? r.emit(`slideNextTransition${t}`) : r.emit(`slidePrevTransition${t}`)
  }
}

function qc(r = !0, e) {
  const a = this,
    {
      params: t
    } = a;
  t.cssMode || (t.autoHeight && a.updateAutoHeight(), ln({
    swiper: a,
    runCallbacks: r,
    direction: e,
    step: "Start"
  }))
}

function jc(r = !0, e) {
  const a = this,
    {
      params: t
    } = a;
  a.animating = !1, !t.cssMode && (a.setTransition(0), ln({
    swiper: a,
    runCallbacks: r,
    direction: e,
    step: "End"
  }))
}
var Wc = {
  setTransition: Yc,
  transitionStart: qc,
  transitionEnd: jc
};

function Xc(r = 0, e = this.params.speed, a = !0, t, n) {
  typeof r == "string" && (r = parseInt(r, 10));
  const s = this;
  let i = r;
  i < 0 && (i = 0);
  const {
    params: o,
    snapGrid: l,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: p,
    rtlTranslate: u,
    wrapperEl: g,
    enabled: h
  } = s;
  if (s.animating && o.preventInteractionOnTransition || !h && !t && !n) return !1;
  const f = Math.min(s.params.slidesPerGroupSkip, i);
  let b = f + Math.floor((i - f) / s.params.slidesPerGroup);
  b >= l.length && (b = l.length - 1);
  const m = -l[b];
  if (o.normalizeSlideIndex)
    for (let E = 0; E < c.length; E += 1) {
      const $ = -Math.floor(m * 100),
        w = Math.floor(c[E] * 100),
        C = Math.floor(c[E + 1] * 100);
      typeof c[E + 1] != "undefined" ? $ >= w && $ < C - (C - w) / 2 ? i = E : $ >= w && $ < C && (i = E + 1) : $ >= w && (i = E)
    }
  if (s.initialized && i !== p && (!s.allowSlideNext && m < s.translate && m < s.minTranslate() || !s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (p || 0) !== i)) return !1;
  i !== (d || 0) && a && s.emit("beforeSlideChangeStart"), s.updateProgress(m);
  let v;
  if (i > p ? v = "next" : i < p ? v = "prev" : v = "reset", u && -m === s.translate || !u && m === s.translate) return s.updateActiveIndex(i), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), o.effect !== "slide" && s.setTranslate(m), v !== "reset" && (s.transitionStart(a, v), s.transitionEnd(a, v)), !1;
  if (o.cssMode) {
    const E = s.isHorizontal(),
      $ = u ? m : -m;
    if (e === 0) {
      const w = s.virtual && s.params.virtual.enabled;
      w && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), w && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        g[E ? "scrollLeft" : "scrollTop"] = $
      })) : g[E ? "scrollLeft" : "scrollTop"] = $, w && requestAnimationFrame(() => {
        s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
      })
    } else {
      if (!s.support.smoothScroll) return nn({
        swiper: s,
        targetPosition: $,
        side: E ? "left" : "top"
      }), !0;
      g.scrollTo({
        [E ? "left" : "top"]: $,
        behavior: "smooth"
      })
    }
    return !0
  }
  return s.setTransition(e), s.setTranslate(m), s.updateActiveIndex(i), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, t), s.transitionStart(a, v), e === 0 ? s.transitionEnd(a, v) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function ($) {
    !s || s.destroyed || $.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, v))
  }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
}

function Gc(r = 0, e = this.params.speed, a = !0, t) {
  typeof r == "string" && (r = parseInt(r, 10));
  const n = this;
  let s = r;
  return n.params.loop && (n.virtual && n.params.virtual.enabled ? s = s + n.virtual.slidesBefore : s = n.getSlideIndexByData(s)), n.slideTo(s, e, a, t)
}

function Uc(r = this.params.speed, e = !0, a) {
  const t = this,
    {
      enabled: n,
      params: s,
      animating: i
    } = t;
  if (!n) return t;
  let o = s.slidesPerGroup;
  s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (o = Math.max(t.slidesPerViewDynamic("current", !0), 1));
  const l = t.activeIndex < s.slidesPerGroupSkip ? 1 : o,
    c = t.virtual && s.virtual.enabled;
  if (s.loop) {
    if (i && !c && s.loopPreventsSliding) return !1;
    t.loopFix({
      direction: "next"
    }), t._clientLeft = t.wrapperEl.clientLeft
  }
  return s.rewind && t.isEnd ? t.slideTo(0, r, e, a) : t.slideTo(t.activeIndex + l, r, e, a)
}

function _c(r = this.params.speed, e = !0, a) {
  const t = this,
    {
      params: n,
      snapGrid: s,
      slidesGrid: i,
      rtlTranslate: o,
      enabled: l,
      animating: c
    } = t;
  if (!l) return t;
  const d = t.virtual && n.virtual.enabled;
  if (n.loop) {
    if (c && !d && n.loopPreventsSliding) return !1;
    t.loopFix({
      direction: "prev"
    }), t._clientLeft = t.wrapperEl.clientLeft
  }
  const p = o ? t.translate : -t.translate;

  function u(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m)
  }
  const g = u(p),
    h = s.map(m => u(m));
  let f = s[h.indexOf(g) - 1];
  if (typeof f == "undefined" && n.cssMode) {
    let m;
    s.forEach((v, E) => {
      g >= v && (m = E)
    }), typeof m != "undefined" && (f = s[m > 0 ? m - 1 : m])
  }
  let b = 0;
  if (typeof f != "undefined" && (b = i.indexOf(f), b < 0 && (b = t.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (b = b - t.slidesPerViewDynamic("previous", !0) + 1, b = Math.max(b, 0))), n.rewind && t.isBeginning) {
    const m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1;
    return t.slideTo(m, r, e, a)
  }
  return t.slideTo(b, r, e, a)
}

function Kc(r = this.params.speed, e = !0, a) {
  const t = this;
  return t.slideTo(t.activeIndex, r, e, a)
}

function Qc(r = this.params.speed, e = !0, a, t = .5) {
  const n = this;
  let s = n.activeIndex;
  const i = Math.min(n.params.slidesPerGroupSkip, s),
    o = i + Math.floor((s - i) / n.params.slidesPerGroup),
    l = n.rtlTranslate ? n.translate : -n.translate;
  if (l >= n.snapGrid[o]) {
    const c = n.snapGrid[o],
      d = n.snapGrid[o + 1];
    l - c > (d - c) * t && (s += n.params.slidesPerGroup)
  } else {
    const c = n.snapGrid[o - 1],
      d = n.snapGrid[o];
    l - c <= (d - c) * t && (s -= n.params.slidesPerGroup)
  }
  return s = Math.max(s, 0), s = Math.min(s, n.slidesGrid.length - 1), n.slideTo(s, r, e, a)
}

function Zc() {
  const r = this,
    {
      params: e,
      slidesEl: a
    } = r,
    t = e.slidesPerView === "auto" ? r.slidesPerViewDynamic() : e.slidesPerView;
  let n = r.clickedIndex,
    s;
  const i = r.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (r.animating) return;
    s = parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < r.loopedSlides - t / 2 || n > r.slides.length - r.loopedSlides + t / 2 ? (r.loopFix(), n = r.getSlideIndex(Te(a, `${i}[data-swiper-slide-index="${s}"]`)[0]), ut(() => {
      r.slideTo(n)
    })) : r.slideTo(n) : n > r.slides.length - t ? (r.loopFix(), n = r.getSlideIndex(Te(a, `${i}[data-swiper-slide-index="${s}"]`)[0]), ut(() => {
      r.slideTo(n)
    })) : r.slideTo(n)
  } else r.slideTo(n)
}
var Jc = {
  slideTo: Xc,
  slideToLoop: Gc,
  slideNext: Uc,
  slidePrev: _c,
  slideReset: Kc,
  slideToClosest: Qc,
  slideToClickedSlide: Zc
};

function ed(r) {
  const e = this,
    {
      params: a,
      slidesEl: t
    } = e;
  if (!a.loop || e.virtual && e.params.virtual.enabled) return;
  Te(t, `.${a.slideClass}, swiper-slide`).forEach((s, i) => {
    s.setAttribute("data-swiper-slide-index", i)
  }), e.loopFix({
    slideRealIndex: r,
    direction: a.centeredSlides ? void 0 : "next"
  })
}

function td({
  slideRealIndex: r,
  slideTo: e = !0,
  direction: a,
  setTranslate: t,
  activeSlideIndex: n,
  byController: s,
  byMousewheel: i
} = {}) {
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
    slides: l,
    allowSlidePrev: c,
    allowSlideNext: d,
    slidesEl: p,
    params: u
  } = o;
  if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && u.virtual.enabled) {
    e && (!u.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : u.centeredSlides && o.snapIndex < u.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = d, o.emit("loopFix");
    return
  }
  const g = u.slidesPerView === "auto" ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(u.slidesPerView, 10));
  let h = u.loopedSlides || g;
  h % u.slidesPerGroup != 0 && (h += u.slidesPerGroup - h % u.slidesPerGroup), o.loopedSlides = h;
  const f = [],
    b = [];
  let m = o.activeIndex;
  typeof n == "undefined" ? n = o.getSlideIndex(o.slides.filter(C => C.classList.contains(u.slideActiveClass))[0]) : m = n;
  const v = a === "next" || !a,
    E = a === "prev" || !a;
  let $ = 0,
    w = 0;
  if (n < h) {
    $ = Math.max(h - n, u.slidesPerGroup);
    for (let C = 0; C < h - n; C += 1) {
      const x = C - Math.floor(C / l.length) * l.length;
      f.push(l.length - x - 1)
    }
  } else if (n > o.slides.length - h * 2) {
    w = Math.max(n - (o.slides.length - h * 2), u.slidesPerGroup);
    for (let C = 0; C < w; C += 1) {
      const x = C - Math.floor(C / l.length) * l.length;
      b.push(x)
    }
  }
  if (E && f.forEach(C => {
      p.prepend(o.slides[C])
    }), v && b.forEach(C => {
      p.append(o.slides[C])
    }), o.recalcSlides(), u.watchSlidesProgress && o.updateSlidesOffset(), e) {
    if (f.length > 0 && E)
      if (typeof r == "undefined") {
        const C = o.slidesGrid[m],
          M = o.slidesGrid[m + $] - C;
        i ? o.setTranslate(o.translate - M) : (o.slideTo(m + $, 0, !1, !0), t && (o.touches[o.isHorizontal() ? "startX" : "startY"] += M))
      } else t && o.slideToLoop(r, 0, !1, !0);
    else if (b.length > 0 && v)
      if (typeof r == "undefined") {
        const C = o.slidesGrid[m],
          M = o.slidesGrid[m - w] - C;
        i ? o.setTranslate(o.translate - M) : (o.slideTo(m - w, 0, !1, !0), t && (o.touches[o.isHorizontal() ? "startX" : "startY"] += M))
      } else o.slideToLoop(r, 0, !1, !0)
  }
  if (o.allowSlidePrev = c, o.allowSlideNext = d, o.controller && o.controller.control && !s) {
    const C = {
      slideRealIndex: r,
      slideTo: !1,
      direction: a,
      setTranslate: t,
      activeSlideIndex: n,
      byController: !0
    };
    Array.isArray(o.controller.control) ? o.controller.control.forEach(x => {
      !x.destroyed && x.params.loop && x.loopFix(C)
    }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(C)
  }
  o.emit("loopFix")
}

function ad() {
  const r = this,
    {
      params: e,
      slidesEl: a
    } = r;
  if (!e.loop || r.virtual && r.params.virtual.enabled) return;
  r.recalcSlides();
  const t = [];
  r.slides.forEach(n => {
    const s = typeof n.swiperSlideIndex == "undefined" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    t[s] = n
  }), r.slides.forEach(n => {
    n.removeAttribute("data-swiper-slide-index")
  }), t.forEach(n => {
    a.append(n)
  }), r.recalcSlides(), r.slideTo(r.realIndex, 0)
}
var rd = {
  loopCreate: ed,
  loopFix: td,
  loopDestroy: ad
};

function nd(r) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const a = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), a.style.cursor = "move", a.style.cursor = r ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1
  })
}

function sd() {
  const r = this;
  r.params.watchOverflow && r.isLocked || r.params.cssMode || (r.isElement && (r.__preventObserver__ = !0), r[r.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", r.isElement && requestAnimationFrame(() => {
    r.__preventObserver__ = !1
  }))
}
var id = {
  setGrabCursor: nd,
  unsetGrabCursor: sd
};

function od(r, e = this) {
  function a(t) {
    if (!t || t === ee() || t === G()) return null;
    t.assignedSlot && (t = t.assignedSlot);
    const n = t.closest(r);
    return !n && !t.getRootNode ? null : n || a(t.getRootNode().host)
  }
  return a(e)
}

function ld(r) {
  const e = this,
    a = ee(),
    t = G(),
    n = e.touchEventsData;
  n.evCache.push(r);
  const {
    params: s,
    touches: i,
    enabled: o
  } = e;
  if (!o || !s.simulateTouch && r.pointerType === "mouse" || e.animating && s.preventInteractionOnTransition) return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let l = r;
  l.originalEvent && (l = l.originalEvent);
  let c = l.target;
  if (s.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(c) || "which" in l && l.which === 3 || "button" in l && l.button > 0 || n.isTouched && n.isMoved) return;
  const d = !!s.noSwipingClass && s.noSwipingClass !== "",
    p = r.composedPath ? r.composedPath() : r.path;
  d && l.target && l.target.shadowRoot && p && (c = p[0]);
  const u = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    g = !!(l.target && l.target.shadowRoot);
  if (s.noSwiping && (g ? od(u, c) : c.closest(u))) {
    e.allowClick = !0;
    return
  }
  if (s.swipeHandler && !c.closest(s.swipeHandler)) return;
  i.currentX = l.pageX, i.currentY = l.pageY;
  const h = i.currentX,
    f = i.currentY,
    b = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
    m = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
  if (b && (h <= m || h >= t.innerWidth - m))
    if (b === "prevent") r.preventDefault();
    else return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), i.startX = h, i.startY = f, n.touchStartTime = He(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (n.allowThresholdMove = !1);
  let v = !0;
  c.matches(n.focusableElements) && (v = !1, c.nodeName === "SELECT" && (n.isTouched = !1)), a.activeElement && a.activeElement.matches(n.focusableElements) && a.activeElement !== c && a.activeElement.blur();
  const E = v && e.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || E) && !c.isContentEditable && l.preventDefault(), e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", l)
}

function cd(r) {
  const e = ee(),
    a = this,
    t = a.touchEventsData,
    {
      params: n,
      touches: s,
      rtlTranslate: i,
      enabled: o
    } = a;
  if (!o || !n.simulateTouch && r.pointerType === "mouse") return;
  let l = r;
  if (l.originalEvent && (l = l.originalEvent), !t.isTouched) {
    t.startMoving && t.isScrolling && a.emit("touchMoveOpposite", l);
    return
  }
  const c = t.evCache.findIndex(C => C.pointerId === l.pointerId);
  c >= 0 && (t.evCache[c] = l);
  const d = t.evCache.length > 1 ? t.evCache[0] : l,
    p = d.pageX,
    u = d.pageY;
  if (l.preventedByNestedSwiper) {
    s.startX = p, s.startY = u;
    return
  }
  if (!a.allowTouchMove) {
    l.target.matches(t.focusableElements) || (a.allowClick = !1), t.isTouched && (Object.assign(s, {
      startX: p,
      startY: u,
      prevX: a.touches.currentX,
      prevY: a.touches.currentY,
      currentX: p,
      currentY: u
    }), t.touchStartTime = He());
    return
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (a.isVertical()) {
      if (u < s.startY && a.translate <= a.maxTranslate() || u > s.startY && a.translate >= a.minTranslate()) {
        t.isTouched = !1, t.isMoved = !1;
        return
      }
    } else if (p < s.startX && a.translate <= a.maxTranslate() || p > s.startX && a.translate >= a.minTranslate()) return
  }
  if (e.activeElement && l.target === e.activeElement && l.target.matches(t.focusableElements)) {
    t.isMoved = !0, a.allowClick = !1;
    return
  }
  if (t.allowTouchCallbacks && a.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
  s.currentX = p, s.currentY = u;
  const g = s.currentX - s.startX,
    h = s.currentY - s.startY;
  if (a.params.threshold && Math.sqrt(g ** 2 + h ** 2) < a.params.threshold) return;
  if (typeof t.isScrolling == "undefined") {
    let C;
    a.isHorizontal() && s.currentY === s.startY || a.isVertical() && s.currentX === s.startX ? t.isScrolling = !1 : g * g + h * h >= 25 && (C = Math.atan2(Math.abs(h), Math.abs(g)) * 180 / Math.PI, t.isScrolling = a.isHorizontal() ? C > n.touchAngle : 90 - C > n.touchAngle)
  }
  if (t.isScrolling && a.emit("touchMoveOpposite", l), typeof t.startMoving == "undefined" && (s.currentX !== s.startX || s.currentY !== s.startY) && (t.startMoving = !0), t.isScrolling || a.zoom && a.params.zoom && a.params.zoom.enabled && t.evCache.length > 1) {
    t.isTouched = !1;
    return
  }
  if (!t.startMoving) return;
  a.allowClick = !1, !n.cssMode && l.cancelable && l.preventDefault(), n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
  let f = a.isHorizontal() ? g : h,
    b = a.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  n.oneWayMovement && (f = Math.abs(f) * (i ? 1 : -1), b = Math.abs(b) * (i ? 1 : -1)), s.diff = f, f *= n.touchRatio, i && (f = -f, b = -b);
  const m = a.touchesDirection;
  a.swipeDirection = f > 0 ? "prev" : "next", a.touchesDirection = b > 0 ? "prev" : "next";
  const v = a.params.loop && !n.cssMode;
  if (!t.isMoved) {
    if (v && a.loopFix({
        direction: a.swipeDirection
      }), t.startTranslate = a.getTranslate(), a.setTransition(0), a.animating) {
      const C = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      a.wrapperEl.dispatchEvent(C)
    }
    t.allowMomentumBounce = !1, n.grabCursor && (a.allowSlideNext === !0 || a.allowSlidePrev === !0) && a.setGrabCursor(!0), a.emit("sliderFirstMove", l)
  }
  let E;
  t.isMoved && m !== a.touchesDirection && v && Math.abs(f) >= 1 && (a.loopFix({
    direction: a.swipeDirection,
    setTranslate: !0
  }), E = !0), a.emit("sliderMove", l), t.isMoved = !0, t.currentTranslate = f + t.startTranslate;
  let $ = !0,
    w = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (w = 0), f > 0 ? (v && !E && t.currentTranslate > (n.centeredSlides ? a.minTranslate() - a.size / 2 : a.minTranslate()) && a.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), t.currentTranslate > a.minTranslate() && ($ = !1, n.resistance && (t.currentTranslate = a.minTranslate() - 1 + (-a.minTranslate() + t.startTranslate + f) ** w))) : f < 0 && (v && !E && t.currentTranslate < (n.centeredSlides ? a.maxTranslate() + a.size / 2 : a.maxTranslate()) && a.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: a.slides.length - (n.slidesPerView === "auto" ? a.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }), t.currentTranslate < a.maxTranslate() && ($ = !1, n.resistance && (t.currentTranslate = a.maxTranslate() + 1 - (a.maxTranslate() - t.startTranslate - f) ** w))), $ && (l.preventedByNestedSwiper = !0), !a.allowSlideNext && a.swipeDirection === "next" && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !a.allowSlidePrev && a.swipeDirection === "prev" && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), !a.allowSlidePrev && !a.allowSlideNext && (t.currentTranslate = t.startTranslate), n.threshold > 0)
    if (Math.abs(f) > n.threshold || t.allowThresholdMove) {
      if (!t.allowThresholdMove) {
        t.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, t.currentTranslate = t.startTranslate, s.diff = a.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
        return
      }
    } else {
      t.currentTranslate = t.startTranslate;
      return
    }! n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && a.freeMode || n.watchSlidesProgress) && (a.updateActiveIndex(), a.updateSlidesClasses()), a.params.freeMode && n.freeMode.enabled && a.freeMode && a.freeMode.onTouchMove(), a.updateProgress(t.currentTranslate), a.setTranslate(t.currentTranslate))
}

function dd(r) {
  const e = this,
    a = e.touchEventsData,
    t = a.evCache.findIndex(E => E.pointerId === r.pointerId);
  if (t >= 0 && a.evCache.splice(t, 1), ["pointercancel", "pointerout", "pointerleave"].includes(r.type) && !(r.type === "pointercancel" && (e.browser.isSafari || e.browser.isWebView))) return;
  const {
    params: n,
    touches: s,
    rtlTranslate: i,
    slidesGrid: o,
    enabled: l
  } = e;
  if (!l || !n.simulateTouch && r.pointerType === "mouse") return;
  let c = r;
  if (c.originalEvent && (c = c.originalEvent), a.allowTouchCallbacks && e.emit("touchEnd", c), a.allowTouchCallbacks = !1, !a.isTouched) {
    a.isMoved && n.grabCursor && e.setGrabCursor(!1), a.isMoved = !1, a.startMoving = !1;
    return
  }
  n.grabCursor && a.isMoved && a.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const d = He(),
    p = d - a.touchStartTime;
  if (e.allowClick) {
    const E = c.path || c.composedPath && c.composedPath();
    e.updateClickedSlide(E && E[0] || c.target), e.emit("tap click", c), p < 300 && d - a.lastClickTime < 300 && e.emit("doubleTap doubleClick", c)
  }
  if (a.lastClickTime = He(), ut(() => {
      e.destroyed || (e.allowClick = !0)
    }), !a.isTouched || !a.isMoved || !e.swipeDirection || s.diff === 0 || a.currentTranslate === a.startTranslate) {
    a.isTouched = !1, a.isMoved = !1, a.startMoving = !1;
    return
  }
  a.isTouched = !1, a.isMoved = !1, a.startMoving = !1;
  let u;
  if (n.followFinger ? u = i ? e.translate : -e.translate : u = -a.currentTranslate, n.cssMode) return;
  if (e.params.freeMode && n.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: u
    });
    return
  }
  let g = 0,
    h = e.slidesSizesGrid[0];
  for (let E = 0; E < o.length; E += E < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
    const $ = E < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof o[E + $] != "undefined" ? u >= o[E] && u < o[E + $] && (g = E, h = o[E + $] - o[E]) : u >= o[E] && (g = E, h = o[o.length - 1] - o[o.length - 2])
  }
  let f = null,
    b = null;
  n.rewind && (e.isBeginning ? b = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (f = 0));
  const m = (u - o[g]) / h,
    v = g < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (p > n.longSwipesMs) {
    if (!n.longSwipes) {
      e.slideTo(e.activeIndex);
      return
    }
    e.swipeDirection === "next" && (m >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? f : g + v) : e.slideTo(g)), e.swipeDirection === "prev" && (m > 1 - n.longSwipesRatio ? e.slideTo(g + v) : b !== null && m < 0 && Math.abs(m) > n.longSwipesRatio ? e.slideTo(b) : e.slideTo(g))
  } else {
    if (!n.shortSwipes) {
      e.slideTo(e.activeIndex);
      return
    }
    e.navigation && (c.target === e.navigation.nextEl || c.target === e.navigation.prevEl) ? c.target === e.navigation.nextEl ? e.slideTo(g + v) : e.slideTo(g) : (e.swipeDirection === "next" && e.slideTo(f !== null ? f : g + v), e.swipeDirection === "prev" && e.slideTo(b !== null ? b : g))
  }
}
let cn;

function dn() {
  const r = this,
    {
      params: e,
      el: a
    } = r;
  if (a && a.offsetWidth === 0) return;
  e.breakpoints && r.setBreakpoint();
  const {
    allowSlideNext: t,
    allowSlidePrev: n,
    snapGrid: s
  } = r, i = r.virtual && r.params.virtual.enabled;
  r.allowSlideNext = !0, r.allowSlidePrev = !0, r.updateSize(), r.updateSlides(), r.updateSlidesClasses();
  const o = i && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && r.isEnd && !r.isBeginning && !r.params.centeredSlides && !o ? r.slideTo(r.slides.length - 1, 0, !1, !0) : r.params.loop && !i ? r.slideToLoop(r.realIndex, 0, !1, !0) : r.slideTo(r.activeIndex, 0, !1, !0), r.autoplay && r.autoplay.running && r.autoplay.paused && (clearTimeout(cn), cn = setTimeout(() => {
    r.autoplay && r.autoplay.running && r.autoplay.paused && r.autoplay.resume()
  }, 500)), r.allowSlidePrev = n, r.allowSlideNext = t, r.params.watchOverflow && s !== r.snapGrid && r.checkOverflow()
}

function pd(r) {
  const e = this;
  !e.enabled || e.allowClick || (e.params.preventClicks && r.preventDefault(), e.params.preventClicksPropagation && e.animating && (r.stopPropagation(), r.stopImmediatePropagation()))
}

function ud() {
  const r = this,
    {
      wrapperEl: e,
      rtlTranslate: a,
      enabled: t
    } = r;
  if (!t) return;
  r.previousTranslate = r.translate, r.isHorizontal() ? r.translate = -e.scrollLeft : r.translate = -e.scrollTop, r.translate === 0 && (r.translate = 0), r.updateActiveIndex(), r.updateSlidesClasses();
  let n;
  const s = r.maxTranslate() - r.minTranslate();
  s === 0 ? n = 0 : n = (r.translate - r.minTranslate()) / s, n !== r.progress && r.updateProgress(a ? -r.translate : r.translate), r.emit("setTranslate", r.translate, !1)
}

function fd(r) {
  const e = this;
  ta(e, r.target), e.update()
}
let pn = !1;

function hd() {}
const un = (r, e) => {
  const a = ee(),
    {
      params: t,
      el: n,
      wrapperEl: s,
      device: i
    } = r,
    o = !!t.nested,
    l = e === "on" ? "addEventListener" : "removeEventListener",
    c = e;
  n[l]("pointerdown", r.onTouchStart, {
    passive: !1
  }), a[l]("pointermove", r.onTouchMove, {
    passive: !1,
    capture: o
  }), a[l]("pointerup", r.onTouchEnd, {
    passive: !0
  }), a[l]("pointercancel", r.onTouchEnd, {
    passive: !0
  }), a[l]("pointerout", r.onTouchEnd, {
    passive: !0
  }), a[l]("pointerleave", r.onTouchEnd, {
    passive: !0
  }), (t.preventClicks || t.preventClicksPropagation) && n[l]("click", r.onClick, !0), t.cssMode && s[l]("scroll", r.onScroll), t.updateOnWindowResize ? r[c](i.ios || i.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", dn, !0) : r[c]("observerUpdate", dn, !0), n[l]("load", r.onLoad, {
    capture: !0
  })
};

function md() {
  const r = this,
    e = ee(),
    {
      params: a
    } = r;
  r.onTouchStart = ld.bind(r), r.onTouchMove = cd.bind(r), r.onTouchEnd = dd.bind(r), a.cssMode && (r.onScroll = ud.bind(r)), r.onClick = pd.bind(r), r.onLoad = fd.bind(r), pn || (e.addEventListener("touchstart", hd), pn = !0), un(r, "on")
}

function gd() {
  un(this, "off")
}
var vd = {
  attachEvents: md,
  detachEvents: gd
};
const fn = (r, e) => r.grid && e.grid && e.grid.rows > 1;

function bd() {
  const r = this,
    {
      realIndex: e,
      initialized: a,
      params: t,
      el: n
    } = r,
    s = t.breakpoints;
  if (!s || s && Object.keys(s).length === 0) return;
  const i = r.getBreakpoint(s, r.params.breakpointsBase, r.el);
  if (!i || r.currentBreakpoint === i) return;
  const l = (i in s ? s[i] : void 0) || r.originalParams,
    c = fn(r, t),
    d = fn(r, l),
    p = t.enabled;
  c && !d ? (n.classList.remove(`${t.containerModifierClass}grid`, `${t.containerModifierClass}grid-column`), r.emitContainerClasses()) : !c && d && (n.classList.add(`${t.containerModifierClass}grid`), (l.grid.fill && l.grid.fill === "column" || !l.grid.fill && t.grid.fill === "column") && n.classList.add(`${t.containerModifierClass}grid-column`), r.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(f => {
    const b = t[f] && t[f].enabled,
      m = l[f] && l[f].enabled;
    b && !m && r[f].disable(), !b && m && r[f].enable()
  });
  const u = l.direction && l.direction !== t.direction,
    g = t.loop && (l.slidesPerView !== t.slidesPerView || u);
  u && a && r.changeDirection(), De(r.params, l);
  const h = r.params.enabled;
  Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev
  }), p && !h ? r.disable() : !p && h && r.enable(), r.currentBreakpoint = i, r.emit("_beforeBreakpoint", l), g && a && (r.loopDestroy(), r.loopCreate(e), r.updateSlides()), r.emit("breakpoint", l)
}

function yd(r, e = "window", a) {
  if (!r || e === "container" && !a) return;
  let t = !1;
  const n = G(),
    s = e === "window" ? n.innerHeight : a.clientHeight,
    i = Object.keys(r).map(o => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const l = parseFloat(o.substr(1));
        return {
          value: s * l,
          point: o
        }
      }
      return {
        value: o,
        point: o
      }
    });
  i.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
  for (let o = 0; o < i.length; o += 1) {
    const {
      point: l,
      value: c
    } = i[o];
    e === "window" ? n.matchMedia(`(min-width: ${c}px)`).matches && (t = l) : c <= a.clientWidth && (t = l)
  }
  return t || "max"
}
var Ed = {
  setBreakpoint: bd,
  getBreakpoint: yd
};

function wd(r, e) {
  const a = [];
  return r.forEach(t => {
    typeof t == "object" ? Object.keys(t).forEach(n => {
      t[n] && a.push(e + n)
    }) : typeof t == "string" && a.push(e + t)
  }), a
}

function Cd() {
  const r = this,
    {
      classNames: e,
      params: a,
      rtl: t,
      el: n,
      device: s
    } = r,
    i = wd(["initialized", a.direction, {
      "free-mode": r.params.freeMode && a.freeMode.enabled
    }, {
      autoheight: a.autoHeight
    }, {
      rtl: t
    }, {
      grid: a.grid && a.grid.rows > 1
    }, {
      "grid-column": a.grid && a.grid.rows > 1 && a.grid.fill === "column"
    }, {
      android: s.android
    }, {
      ios: s.ios
    }, {
      "css-mode": a.cssMode
    }, {
      centered: a.cssMode && a.centeredSlides
    }, {
      "watch-progress": a.watchSlidesProgress
    }], a.containerModifierClass);
  e.push(...i), n.classList.add(...e), r.emitContainerClasses()
}

function $d() {
  const r = this,
    {
      el: e,
      classNames: a
    } = r;
  e.classList.remove(...a), r.emitContainerClasses()
}
var xd = {
  addClasses: Cd,
  removeClasses: $d
};

function kd() {
  const r = this,
    {
      isLocked: e,
      params: a
    } = r,
    {
      slidesOffsetBefore: t
    } = a;
  if (t) {
    const n = r.slides.length - 1,
      s = r.slidesGrid[n] + r.slidesSizesGrid[n] + t * 2;
    r.isLocked = r.size > s
  } else r.isLocked = r.snapGrid.length === 1;
  a.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked), a.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked), e && e !== r.isLocked && (r.isEnd = !1), e !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock")
}
var Td = {
    checkOverflow: kd
  },
  qa = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };

function Sd(r, e) {
  return function (t = {}) {
    const n = Object.keys(t)[0],
      s = t[n];
    if (typeof s != "object" || s === null) {
      De(e, t);
      return
    }
    if (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && r[n] === !0 && (r[n] = {
        auto: !0
      }), !(n in r && "enabled" in s)) {
      De(e, t);
      return
    }
    r[n] === !0 && (r[n] = {
      enabled: !0
    }), typeof r[n] == "object" && !("enabled" in r[n]) && (r[n].enabled = !0), r[n] || (r[n] = {
      enabled: !1
    }), De(e, t)
  }
}
const ja = {
    eventsEmitter: xc,
    update: Lc,
    translate: Nc,
    transition: Wc,
    slide: Jc,
    loop: rd,
    grabCursor: id,
    events: vd,
    breakpoints: Ed,
    checkOverflow: Td,
    classes: xd
  },
  Wa = {};
class ze {
  constructor(...e) {
    let a, t;
    e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? t = e[0] : [a, t] = e, t || (t = {}), t = De({}, t), a && !t.el && (t.el = a);
    const n = ee();
    if (t.el && typeof t.el == "string" && n.querySelectorAll(t.el).length > 1) {
      const l = [];
      return n.querySelectorAll(t.el).forEach(c => {
        const d = De({}, t, {
          el: c
        });
        l.push(new ze(d))
      }), l
    }
    const s = this;
    s.__swiper__ = !0, s.support = sn(), s.device = yc({
      userAgent: t.userAgent
    }), s.browser = wc(), s.eventsListeners = {}, s.eventsAnyListeners = [], s.modules = [...s.__modules__], t.modules && Array.isArray(t.modules) && s.modules.push(...t.modules);
    const i = {};
    s.modules.forEach(l => {
      l({
        params: t,
        swiper: s,
        extendParams: Sd(t, i),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s)
      })
    });
    const o = De({}, qa, i);
    return s.params = De({}, o, Wa, t), s.originalParams = De({}, s.params), s.passedParams = De({}, t), s.params && s.params.on && Object.keys(s.params.on).forEach(l => {
      s.on(l, s.params.on[l])
    }), s.params && s.params.onAny && s.onAny(s.params.onAny), Object.assign(s, {
      enabled: s.params.enabled,
      el: a,
      classNames: [],
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      isHorizontal() {
        return s.params.direction === "horizontal"
      },
      isVertical() {
        return s.params.direction === "vertical"
      },
      activeIndex: 0,
      realIndex: 0,
      isBeginning: !0,
      isEnd: !1,
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      allowSlideNext: s.params.allowSlideNext,
      allowSlidePrev: s.params.allowSlidePrev,
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        focusableElements: s.params.focusableElements,
        lastClickTime: 0,
        clickTimeout: void 0,
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      allowClick: !0,
      allowTouchMove: s.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      imagesToLoad: [],
      imagesLoaded: 0
    }), s.emit("_swiper"), s.params.init && s.init(), s
  }
  getSlideIndex(e) {
    const {
      slidesEl: a,
      params: t
    } = this, n = Te(a, `.${t.slideClass}, swiper-slide`), s = Dt(n[0]);
    return Dt(e) - s
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter(a => a.getAttribute("data-swiper-slide-index") * 1 === e)[0])
  }
  recalcSlides() {
    const e = this,
      {
        slidesEl: a,
        params: t
      } = e;
    e.slides = Te(a, `.${t.slideClass}, swiper-slide`)
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
  }
  disable() {
    const e = this;
    !e.enabled || (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
  }
  setProgress(e, a) {
    const t = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = t.minTranslate(),
      i = (t.maxTranslate() - n) * e + n;
    t.translateTo(i, typeof a == "undefined" ? 0 : a), t.updateActiveIndex(), t.updateSlidesClasses()
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const a = e.el.className.split(" ").filter(t => t.indexOf("swiper") === 0 || t.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", a.join(" "))
  }
  getSlideClasses(e) {
    const a = this;
    return a.destroyed ? "" : e.className.split(" ").filter(t => t.indexOf("swiper-slide") === 0 || t.indexOf(a.params.slideClass) === 0).join(" ")
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const a = [];
    e.slides.forEach(t => {
      const n = e.getSlideClasses(t);
      a.push({
        slideEl: t,
        classNames: n
      }), e.emit("_slideClass", t, n)
    }), e.emit("_slideClasses", a)
  }
  slidesPerViewDynamic(e = "current", a = !1) {
    const t = this,
      {
        params: n,
        slides: s,
        slidesGrid: i,
        slidesSizesGrid: o,
        size: l,
        activeIndex: c
      } = t;
    let d = 1;
    if (n.centeredSlides) {
      let p = s[c].swiperSlideSize,
        u;
      for (let g = c + 1; g < s.length; g += 1) s[g] && !u && (p += s[g].swiperSlideSize, d += 1, p > l && (u = !0));
      for (let g = c - 1; g >= 0; g -= 1) s[g] && !u && (p += s[g].swiperSlideSize, d += 1, p > l && (u = !0))
    } else if (e === "current")
      for (let p = c + 1; p < s.length; p += 1)(a ? i[p] + o[p] - i[c] < l : i[p] - i[c] < l) && (d += 1);
    else
      for (let p = c - 1; p >= 0; p -= 1) i[c] - i[p] < l && (d += 1);
    return d
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: a,
      params: t
    } = e;
    t.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(i => {
      i.complete && ta(e, i)
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

    function n() {
      const i = e.rtlTranslate ? e.translate * -1 : e.translate,
        o = Math.min(Math.max(i, e.maxTranslate()), e.minTranslate());
      e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses()
    }
    let s;
    e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? s = e.slideTo(e.slides.length - 1, 0, !1, !0) : s = e.slideTo(e.activeIndex, 0, !1, !0), s || n()), t.watchOverflow && a !== e.snapGrid && e.checkOverflow(), e.emit("update")
  }
  changeDirection(e, a = !0) {
    const t = this,
      n = t.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (t.el.classList.remove(`${t.params.containerModifierClass}${n}`), t.el.classList.add(`${t.params.containerModifierClass}${e}`), t.emitContainerClasses(), t.params.direction = e, t.slides.forEach(s => {
      e === "vertical" ? s.style.width = "" : s.style.height = ""
    }), t.emit("changeDirection"), a && t.update()), t
  }
  changeLanguageDirection(e) {
    const a = this;
    a.rtl && e === "rtl" || !a.rtl && e === "ltr" || (a.rtl = e === "rtl", a.rtlTranslate = a.params.direction === "horizontal" && a.rtl, a.rtl ? (a.el.classList.add(`${a.params.containerModifierClass}rtl`), a.el.dir = "rtl") : (a.el.classList.remove(`${a.params.containerModifierClass}rtl`), a.el.dir = "ltr"), a.update())
  }
  mount(e) {
    const a = this;
    if (a.mounted) return !0;
    let t = e || a.params.el;
    if (typeof t == "string" && (t = document.querySelector(t)), !t) return !1;
    t.swiper = a, t.shadowEl && (a.isElement = !0);
    const n = () => `.${(a.params.wrapperClass||"").trim().split(" ").join(".")}`;
    let i = (() => t && t.shadowRoot && t.shadowRoot.querySelector ? t.shadowRoot.querySelector(n()) : Te(t, n())[0])();
    return !i && a.params.createElements && (i = Fe("div", a.params.wrapperClass), t.append(i), Te(t, `.${a.params.slideClass}`).forEach(o => {
      i.append(o)
    })), Object.assign(a, {
      el: t,
      wrapperEl: i,
      slidesEl: a.isElement ? t : i,
      mounted: !0,
      rtl: t.dir.toLowerCase() === "rtl" || nt(t, "direction") === "rtl",
      rtlTranslate: a.params.direction === "horizontal" && (t.dir.toLowerCase() === "rtl" || nt(t, "direction") === "rtl"),
      wrongRTL: nt(i, "display") === "-webkit-box"
    }), !0
  }
  init(e) {
    const a = this;
    return a.initialized || a.mount(e) === !1 || (a.emit("beforeInit"), a.params.breakpoints && a.setBreakpoint(), a.addClasses(), a.updateSize(), a.updateSlides(), a.params.watchOverflow && a.checkOverflow(), a.params.grabCursor && a.enabled && a.setGrabCursor(), a.params.loop && a.virtual && a.params.virtual.enabled ? a.slideTo(a.params.initialSlide + a.virtual.slidesBefore, 0, a.params.runCallbacksOnInit, !1, !0) : a.slideTo(a.params.initialSlide, 0, a.params.runCallbacksOnInit, !1, !0), a.params.loop && a.loopCreate(), a.attachEvents(), [...a.el.querySelectorAll('[loading="lazy"]')].forEach(n => {
      n.complete ? ta(a, n) : n.addEventListener("load", s => {
        ta(a, s.target)
      })
    }), Ya(a), a.initialized = !0, Ya(a), a.emit("init"), a.emit("afterInit")), a
  }
  destroy(e = !0, a = !0) {
    const t = this,
      {
        params: n,
        el: s,
        wrapperEl: i,
        slides: o
      } = t;
    return typeof t.params == "undefined" || t.destroyed || (t.emit("beforeDestroy"), t.initialized = !1, t.detachEvents(), n.loop && t.loopDestroy(), a && (t.removeClasses(), s.removeAttribute("style"), i.removeAttribute("style"), o && o.length && o.forEach(l => {
      l.classList.remove(n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), l.removeAttribute("style"), l.removeAttribute("data-swiper-slide-index")
    })), t.emit("destroy"), Object.keys(t.eventsListeners).forEach(l => {
      t.off(l)
    }), e !== !1 && (t.el.swiper = null, uc(t)), t.destroyed = !0), null
  }
  static extendDefaults(e) {
    De(Wa, e)
  }
  static get extendedDefaults() {
    return Wa
  }
  static get defaults() {
    return qa
  }
  static installModule(e) {
    ze.prototype.__modules__ || (ze.prototype.__modules__ = []);
    const a = ze.prototype.__modules__;
    typeof e == "function" && a.indexOf(e) < 0 && a.push(e)
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach(a => ze.installModule(a)), ze) : (ze.installModule(e), ze)
  }
}
Object.keys(ja).forEach(r => {
  Object.keys(ja[r]).forEach(e => {
    ze.prototype[e] = ja[r][e]
  })
});
ze.use([Cc, $c]);
var aa = ze;

function Md({
  swiper: r,
  extendParams: e,
  on: a,
  emit: t
}) {
  e({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let n;
  const s = ee();
  r.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const i = s.createElement("div");

  function o(g, h) {
    const f = r.params.virtual;
    if (f.cache && r.virtual.cache[h]) return r.virtual.cache[h];
    let b;
    return f.renderSlide ? (b = f.renderSlide.call(r, g, h), typeof b == "string" && (i.innerHTML = b, b = i.children[0])) : r.isElement ? b = Fe("swiper-slide") : b = Fe("div", r.params.slideClass), b.setAttribute("data-swiper-slide-index", h), f.renderSlide || (b.innerHTML = g), f.cache && (r.virtual.cache[h] = b), b
  }

  function l(g) {
    const {
      slidesPerView: h,
      slidesPerGroup: f,
      centeredSlides: b,
      loop: m
    } = r.params, {
      addSlidesBefore: v,
      addSlidesAfter: E
    } = r.params.virtual, {
      from: $,
      to: w,
      slides: C,
      slidesGrid: x,
      offset: M
    } = r.virtual;
    r.params.cssMode || r.updateActiveIndex();
    const A = r.activeIndex || 0;
    let B;
    r.rtlTranslate ? B = "right" : B = r.isHorizontal() ? "left" : "top";
    let S, P;
    b ? (S = Math.floor(h / 2) + f + E, P = Math.floor(h / 2) + f + v) : (S = h + (f - 1) + E, P = (m ? h : f) + v);
    let k = A - P,
      I = A + S;
    m || (k = Math.max(k, 0), I = Math.min(I, C.length - 1));
    let R = (r.slidesGrid[k] || 0) - (r.slidesGrid[0] || 0);
    m && A >= P ? (k -= P, b || (R += r.slidesGrid[0])) : m && A < P && (k = -P, b && (R += r.slidesGrid[0])), Object.assign(r.virtual, {
      from: k,
      to: I,
      offset: R,
      slidesGrid: r.slidesGrid,
      slidesBefore: P,
      slidesAfter: S
    });

    function D() {
      r.updateSlides(), r.updateProgress(), r.updateSlidesClasses(), t("virtualUpdate")
    }
    if ($ === k && w === I && !g) {
      r.slidesGrid !== x && R !== M && r.slides.forEach(V => {
        V.style[B] = `${R}px`
      }), r.updateProgress(), t("virtualUpdate");
      return
    }
    if (r.params.virtual.renderExternal) {
      r.params.virtual.renderExternal.call(r, {
        offset: R,
        from: k,
        to: I,
        slides: function () {
          const U = [];
          for (let Z = k; Z <= I; Z += 1) U.push(C[Z]);
          return U
        }()
      }), r.params.virtual.renderExternalUpdate ? D() : t("virtualUpdate");
      return
    }
    const z = [],
      O = [],
      L = V => {
        let U = V;
        return V < 0 ? U = C.length + V : U >= C.length && (U = U - C.length), U
      };
    if (g) r.slidesEl.querySelectorAll(`.${r.params.slideClass}, swiper-slide`).forEach(V => {
      V.remove()
    });
    else
      for (let V = $; V <= w; V += 1)
        if (V < k || V > I) {
          const U = L(V);
          r.slidesEl.querySelectorAll(`.${r.params.slideClass}[data-swiper-slide-index="${U}"], swiper-slide[data-swiper-slide-index="${U}"]`).forEach(Z => {
            Z.remove()
          })
        } const N = m ? -C.length : 0,
      F = m ? C.length * 2 : C.length;
    for (let V = N; V < F; V += 1)
      if (V >= k && V <= I) {
        const U = L(V);
        typeof w == "undefined" || g ? O.push(U) : (V > w && O.push(U), V < $ && z.push(U))
      } if (O.forEach(V => {
        r.slidesEl.append(o(C[V], V))
      }), m)
      for (let V = z.length - 1; V >= 0; V -= 1) {
        const U = z[V];
        r.slidesEl.prepend(o(C[U], U))
      } else z.sort((V, U) => U - V), z.forEach(V => {
        r.slidesEl.prepend(o(C[V], V))
      });
    Te(r.slidesEl, ".swiper-slide, swiper-slide").forEach(V => {
      V.style[B] = `${R}px`
    }), D()
  }

  function c(g) {
    if (typeof g == "object" && "length" in g)
      for (let h = 0; h < g.length; h += 1) g[h] && r.virtual.slides.push(g[h]);
    else r.virtual.slides.push(g);
    l(!0)
  }

  function d(g) {
    const h = r.activeIndex;
    let f = h + 1,
      b = 1;
    if (Array.isArray(g)) {
      for (let m = 0; m < g.length; m += 1) g[m] && r.virtual.slides.unshift(g[m]);
      f = h + g.length, b = g.length
    } else r.virtual.slides.unshift(g);
    if (r.params.virtual.cache) {
      const m = r.virtual.cache,
        v = {};
      Object.keys(m).forEach(E => {
        const $ = m[E],
          w = $.getAttribute("data-swiper-slide-index");
        w && $.setAttribute("data-swiper-slide-index", parseInt(w, 10) + b), v[parseInt(E, 10) + b] = $
      }), r.virtual.cache = v
    }
    l(!0), r.slideTo(f, 0)
  }

  function p(g) {
    if (typeof g == "undefined" || g === null) return;
    let h = r.activeIndex;
    if (Array.isArray(g))
      for (let f = g.length - 1; f >= 0; f -= 1) r.virtual.slides.splice(g[f], 1), r.params.virtual.cache && delete r.virtual.cache[g[f]], g[f] < h && (h -= 1), h = Math.max(h, 0);
    else r.virtual.slides.splice(g, 1), r.params.virtual.cache && delete r.virtual.cache[g], g < h && (h -= 1), h = Math.max(h, 0);
    l(!0), r.slideTo(h, 0)
  }

  function u() {
    r.virtual.slides = [], r.params.virtual.cache && (r.virtual.cache = {}), l(!0), r.slideTo(0, 0)
  }
  a("beforeInit", () => {
    if (!r.params.virtual.enabled) return;
    let g;
    if (typeof r.passedParams.virtual.slides == "undefined") {
      const h = [...r.slidesEl.children].filter(f => f.matches(`.${r.params.slideClass}, swiper-slide`));
      h && h.length && (r.virtual.slides = [...h], g = !0, h.forEach((f, b) => {
        f.setAttribute("data-swiper-slide-index", b), r.virtual.cache[b] = f, f.remove()
      }))
    }
    g || (r.virtual.slides = r.params.virtual.slides), r.classNames.push(`${r.params.containerModifierClass}virtual`), r.params.watchSlidesProgress = !0, r.originalParams.watchSlidesProgress = !0, r.params.initialSlide || l()
  }), a("setTranslate", () => {
    !r.params.virtual.enabled || (r.params.cssMode && !r._immediateVirtual ? (clearTimeout(n), n = setTimeout(() => {
      l()
    }, 100)) : l())
  }), a("init update resize", () => {
    !r.params.virtual.enabled || r.params.cssMode && Bt(r.wrapperEl, "--swiper-virtual-size", `${r.virtualSize}px`)
  }), Object.assign(r.virtual, {
    appendSlide: c,
    prependSlide: d,
    removeSlide: p,
    removeAllSlides: u,
    update: l
  })
}

function Pd({
  swiper: r,
  extendParams: e,
  on: a,
  emit: t
}) {
  const n = ee(),
    s = G();
  r.keyboard = {
    enabled: !1
  }, e({
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0
    }
  });

  function i(c) {
    if (!r.enabled) return;
    const {
      rtlTranslate: d
    } = r;
    let p = c;
    p.originalEvent && (p = p.originalEvent);
    const u = p.keyCode || p.charCode,
      g = r.params.keyboard.pageUpDown,
      h = g && u === 33,
      f = g && u === 34,
      b = u === 37,
      m = u === 39,
      v = u === 38,
      E = u === 40;
    if (!r.allowSlideNext && (r.isHorizontal() && m || r.isVertical() && E || f) || !r.allowSlidePrev && (r.isHorizontal() && b || r.isVertical() && v || h)) return !1;
    if (!(p.shiftKey || p.altKey || p.ctrlKey || p.metaKey) && !(n.activeElement && n.activeElement.nodeName && (n.activeElement.nodeName.toLowerCase() === "input" || n.activeElement.nodeName.toLowerCase() === "textarea"))) {
      if (r.params.keyboard.onlyInViewport && (h || f || b || m || v || E)) {
        let $ = !1;
        if (ht(r.el, `.${r.params.slideClass}, swiper-slide`).length > 0 && ht(r.el, `.${r.params.slideActiveClass}`).length === 0) return;
        const w = r.el,
          C = w.clientWidth,
          x = w.clientHeight,
          M = s.innerWidth,
          A = s.innerHeight,
          B = ea(w);
        d && (B.left -= w.scrollLeft);
        const S = [
          [B.left, B.top],
          [B.left + C, B.top],
          [B.left, B.top + x],
          [B.left + C, B.top + x]
        ];
        for (let P = 0; P < S.length; P += 1) {
          const k = S[P];
          if (k[0] >= 0 && k[0] <= M && k[1] >= 0 && k[1] <= A) {
            if (k[0] === 0 && k[1] === 0) continue;
            $ = !0
          }
        }
        if (!$) return
      }
      r.isHorizontal() ? ((h || f || b || m) && (p.preventDefault ? p.preventDefault() : p.returnValue = !1), ((f || m) && !d || (h || b) && d) && r.slideNext(), ((h || b) && !d || (f || m) && d) && r.slidePrev()) : ((h || f || v || E) && (p.preventDefault ? p.preventDefault() : p.returnValue = !1), (f || E) && r.slideNext(), (h || v) && r.slidePrev()), t("keyPress", u)
    }
  }

  function o() {
    r.keyboard.enabled || (n.addEventListener("keydown", i), r.keyboard.enabled = !0)
  }

  function l() {
    !r.keyboard.enabled || (n.removeEventListener("keydown", i), r.keyboard.enabled = !1)
  }
  a("init", () => {
    r.params.keyboard.enabled && o()
  }), a("destroy", () => {
    r.keyboard.enabled && l()
  }), Object.assign(r.keyboard, {
    enable: o,
    disable: l
  })
}

function Ad({
  swiper: r,
  extendParams: e,
  on: a,
  emit: t
}) {
  const n = G();
  e({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null
    }
  }), r.mousewheel = {
    enabled: !1
  };
  let s, i = He(),
    o;
  const l = [];

  function c(v) {
    const E = 10,
      $ = 40,
      w = 800;
    let C = 0,
      x = 0,
      M = 0,
      A = 0;
    return "detail" in v && (x = v.detail), "wheelDelta" in v && (x = -v.wheelDelta / 120), "wheelDeltaY" in v && (x = -v.wheelDeltaY / 120), "wheelDeltaX" in v && (C = -v.wheelDeltaX / 120), "axis" in v && v.axis === v.HORIZONTAL_AXIS && (C = x, x = 0), M = C * E, A = x * E, "deltaY" in v && (A = v.deltaY), "deltaX" in v && (M = v.deltaX), v.shiftKey && !M && (M = A, A = 0), (M || A) && v.deltaMode && (v.deltaMode === 1 ? (M *= $, A *= $) : (M *= w, A *= w)), M && !C && (C = M < 1 ? -1 : 1), A && !x && (x = A < 1 ? -1 : 1), {
      spinX: C,
      spinY: x,
      pixelX: M,
      pixelY: A
    }
  }

  function d() {
    !r.enabled || (r.mouseEntered = !0)
  }

  function p() {
    !r.enabled || (r.mouseEntered = !1)
  }

  function u(v) {
    return r.params.mousewheel.thresholdDelta && v.delta < r.params.mousewheel.thresholdDelta || r.params.mousewheel.thresholdTime && He() - i < r.params.mousewheel.thresholdTime ? !1 : v.delta >= 6 && He() - i < 60 ? !0 : (v.direction < 0 ? (!r.isEnd || r.params.loop) && !r.animating && (r.slideNext(), t("scroll", v.raw)) : (!r.isBeginning || r.params.loop) && !r.animating && (r.slidePrev(), t("scroll", v.raw)), i = new n.Date().getTime(), !1)
  }

  function g(v) {
    const E = r.params.mousewheel;
    if (v.direction < 0) {
      if (r.isEnd && !r.params.loop && E.releaseOnEdges) return !0
    } else if (r.isBeginning && !r.params.loop && E.releaseOnEdges) return !0;
    return !1
  }

  function h(v) {
    let E = v,
      $ = !0;
    if (!r.enabled) return;
    const w = r.params.mousewheel;
    r.params.cssMode && E.preventDefault();
    let C = r.el;
    r.params.mousewheel.eventsTarget !== "container" && (C = document.querySelector(r.params.mousewheel.eventsTarget));
    const x = C && C.contains(E.target);
    if (!r.mouseEntered && !x && !w.releaseOnEdges) return !0;
    E.originalEvent && (E = E.originalEvent);
    let M = 0;
    const A = r.rtlTranslate ? -1 : 1,
      B = c(E);
    if (w.forceToAxis)
      if (r.isHorizontal())
        if (Math.abs(B.pixelX) > Math.abs(B.pixelY)) M = -B.pixelX * A;
        else return !0;
    else if (Math.abs(B.pixelY) > Math.abs(B.pixelX)) M = -B.pixelY;
    else return !0;
    else M = Math.abs(B.pixelX) > Math.abs(B.pixelY) ? -B.pixelX * A : -B.pixelY;
    if (M === 0) return !0;
    w.invert && (M = -M);
    let S = r.getTranslate() + M * w.sensitivity;
    if (S >= r.minTranslate() && (S = r.minTranslate()), S <= r.maxTranslate() && (S = r.maxTranslate()), $ = r.params.loop ? !0 : !(S === r.minTranslate() || S === r.maxTranslate()), $ && r.params.nested && E.stopPropagation(), !r.params.freeMode || !r.params.freeMode.enabled) {
      const P = {
        time: He(),
        delta: Math.abs(M),
        direction: Math.sign(M),
        raw: v
      };
      l.length >= 2 && l.shift();
      const k = l.length ? l[l.length - 1] : void 0;
      if (l.push(P), k ? (P.direction !== k.direction || P.delta > k.delta || P.time > k.time + 150) && u(P) : u(P), g(P)) return !0
    } else {
      const P = {
          time: He(),
          delta: Math.abs(M),
          direction: Math.sign(M)
        },
        k = o && P.time < o.time + 500 && P.delta <= o.delta && P.direction === o.direction;
      if (!k) {
        o = void 0;
        let I = r.getTranslate() + M * w.sensitivity;
        const R = r.isBeginning,
          D = r.isEnd;
        if (I >= r.minTranslate() && (I = r.minTranslate()), I <= r.maxTranslate() && (I = r.maxTranslate()), r.setTransition(0), r.setTranslate(I), r.updateProgress(), r.updateActiveIndex(), r.updateSlidesClasses(), (!R && r.isBeginning || !D && r.isEnd) && r.updateSlidesClasses(), r.params.loop && r.loopFix({
            direction: P.direction < 0 ? "next" : "prev",
            byMousewheel: !0
          }), r.params.freeMode.sticky) {
          clearTimeout(s), s = void 0, l.length >= 15 && l.shift();
          const z = l.length ? l[l.length - 1] : void 0,
            O = l[0];
          if (l.push(P), z && (P.delta > z.delta || P.direction !== z.direction)) l.splice(0);
          else if (l.length >= 15 && P.time - O.time < 500 && O.delta - P.delta >= 1 && P.delta <= 6) {
            const L = M > 0 ? .8 : .2;
            o = P, l.splice(0), s = ut(() => {
              r.slideToClosest(r.params.speed, !0, void 0, L)
            }, 0)
          }
          s || (s = ut(() => {
            const L = .5;
            o = P, l.splice(0), r.slideToClosest(r.params.speed, !0, void 0, L)
          }, 500))
        }
        if (k || t("scroll", E), r.params.autoplay && r.params.autoplayDisableOnInteraction && r.autoplay.stop(), I === r.minTranslate() || I === r.maxTranslate()) return !0
      }
    }
    return E.preventDefault ? E.preventDefault() : E.returnValue = !1, !1
  }

  function f(v) {
    let E = r.el;
    r.params.mousewheel.eventsTarget !== "container" && (E = document.querySelector(r.params.mousewheel.eventsTarget)), E[v]("mouseenter", d), E[v]("mouseleave", p), E[v]("wheel", h)
  }

  function b() {
    return r.params.cssMode ? (r.wrapperEl.removeEventListener("wheel", h), !0) : r.mousewheel.enabled ? !1 : (f("addEventListener"), r.mousewheel.enabled = !0, !0)
  }

  function m() {
    return r.params.cssMode ? (r.wrapperEl.addEventListener(event, h), !0) : r.mousewheel.enabled ? (f("removeEventListener"), r.mousewheel.enabled = !1, !0) : !1
  }
  a("init", () => {
    !r.params.mousewheel.enabled && r.params.cssMode && m(), r.params.mousewheel.enabled && b()
  }), a("destroy", () => {
    r.params.cssMode && b(), r.mousewheel.enabled && m()
  }), Object.assign(r.mousewheel, {
    enable: b,
    disable: m
  })
}

function Xa(r, e, a, t) {
  return r.params.createElements && Object.keys(t).forEach(n => {
    if (!a[n] && a.auto === !0) {
      let s = Te(r.el, `.${t[n]}`)[0];
      s || (s = Fe("div", t[n]), s.className = t[n], r.el.append(s)), a[n] = s, e[n] = s
    }
  }), a
}

function Id({
  swiper: r,
  extendParams: e,
  on: a,
  emit: t
}) {
  e({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), r.navigation = {
    nextEl: null,
    prevEl: null
  };
  const n = h => (Array.isArray(h) || (h = [h].filter(f => !!f)), h);

  function s(h) {
    let f;
    return h && typeof h == "string" && r.isElement && (f = r.el.shadowRoot.querySelector(h), f) ? f : (h && (typeof h == "string" && (f = [...document.querySelectorAll(h)]), r.params.uniqueNavElements && typeof h == "string" && f.length > 1 && r.el.querySelectorAll(h).length === 1 && (f = r.el.querySelector(h))), h && !f ? h : f)
  }

  function i(h, f) {
    const b = r.params.navigation;
    h = n(h), h.forEach(m => {
      m && (m.classList[f ? "add" : "remove"](...b.disabledClass.split(" ")), m.tagName === "BUTTON" && (m.disabled = f), r.params.watchOverflow && r.enabled && m.classList[r.isLocked ? "add" : "remove"](b.lockClass))
    })
  }

  function o() {
    const {
      nextEl: h,
      prevEl: f
    } = r.navigation;
    if (r.params.loop) {
      i(f, !1), i(h, !1);
      return
    }
    i(f, r.isBeginning && !r.params.rewind), i(h, r.isEnd && !r.params.rewind)
  }

  function l(h) {
    h.preventDefault(), !(r.isBeginning && !r.params.loop && !r.params.rewind) && (r.slidePrev(), t("navigationPrev"))
  }

  function c(h) {
    h.preventDefault(), !(r.isEnd && !r.params.loop && !r.params.rewind) && (r.slideNext(), t("navigationNext"))
  }

  function d() {
    const h = r.params.navigation;
    if (r.params.navigation = Xa(r, r.originalParams.navigation, r.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(h.nextEl || h.prevEl)) return;
    let f = s(h.nextEl),
      b = s(h.prevEl);
    Object.assign(r.navigation, {
      nextEl: f,
      prevEl: b
    }), f = n(f), b = n(b);
    const m = (v, E) => {
      v && v.addEventListener("click", E === "next" ? c : l), !r.enabled && v && v.classList.add(...h.lockClass.split(" "))
    };
    f.forEach(v => m(v, "next")), b.forEach(v => m(v, "prev"))
  }

  function p() {
    let {
      nextEl: h,
      prevEl: f
    } = r.navigation;
    h = n(h), f = n(f);
    const b = (m, v) => {
      m.removeEventListener("click", v === "next" ? c : l), m.classList.remove(...r.params.navigation.disabledClass.split(" "))
    };
    h.forEach(m => b(m, "next")), f.forEach(m => b(m, "prev"))
  }
  a("init", () => {
    r.params.navigation.enabled === !1 ? g() : (d(), o())
  }), a("toEdge fromEdge lock unlock", () => {
    o()
  }), a("destroy", () => {
    p()
  }), a("enable disable", () => {
    let {
      nextEl: h,
      prevEl: f
    } = r.navigation;
    h = n(h), f = n(f), [...h, ...f].filter(b => !!b).forEach(b => b.classList[r.enabled ? "remove" : "add"](r.params.navigation.lockClass))
  }), a("click", (h, f) => {
    let {
      nextEl: b,
      prevEl: m
    } = r.navigation;
    b = n(b), m = n(m);
    const v = f.target;
    if (r.params.navigation.hideOnClick && !m.includes(v) && !b.includes(v)) {
      if (r.pagination && r.params.pagination && r.params.pagination.clickable && (r.pagination.el === v || r.pagination.el.contains(v))) return;
      let E;
      b.length ? E = b[0].classList.contains(r.params.navigation.hiddenClass) : m.length && (E = m[0].classList.contains(r.params.navigation.hiddenClass)), t(E === !0 ? "navigationShow" : "navigationHide"), [...b, ...m].filter($ => !!$).forEach($ => $.classList.toggle(r.params.navigation.hiddenClass))
    }
  });
  const u = () => {
      r.el.classList.remove(...r.params.navigation.navigationDisabledClass.split(" ")), d(), o()
    },
    g = () => {
      r.el.classList.add(...r.params.navigation.navigationDisabledClass.split(" ")), p()
    };
  Object.assign(r.navigation, {
    enable: u,
    disable: g,
    update: o,
    init: d,
    destroy: p
  })
}

function st(r = "") {
  return `.${r.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
}

function Od({
  swiper: r,
  extendParams: e,
  on: a,
  emit: t
}) {
  const n = "swiper-pagination";
  e({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: m => m,
      formatFractionTotal: m => m,
      bulletClass: `${n}-bullet`,
      bulletActiveClass: `${n}-bullet-active`,
      modifierClass: `${n}-`,
      currentClass: `${n}-current`,
      totalClass: `${n}-total`,
      hiddenClass: `${n}-hidden`,
      progressbarFillClass: `${n}-progressbar-fill`,
      progressbarOppositeClass: `${n}-progressbar-opposite`,
      clickableClass: `${n}-clickable`,
      lockClass: `${n}-lock`,
      horizontalClass: `${n}-horizontal`,
      verticalClass: `${n}-vertical`,
      paginationDisabledClass: `${n}-disabled`
    }
  }), r.pagination = {
    el: null,
    bullets: []
  };
  let s, i = 0;
  const o = m => (Array.isArray(m) || (m = [m].filter(v => !!v)), m);

  function l() {
    return !r.params.pagination.el || !r.pagination.el || Array.isArray(r.pagination.el) && r.pagination.el.length === 0
  }

  function c(m, v) {
    const {
      bulletActiveClass: E
    } = r.params.pagination;
    !m || (m = m[`${v==="prev"?"previous":"next"}ElementSibling`], m && (m.classList.add(`${E}-${v}`), m = m[`${v==="prev"?"previous":"next"}ElementSibling`], m && m.classList.add(`${E}-${v}-${v}`)))
  }

  function d(m) {
    const v = m.target.closest(st(r.params.pagination.bulletClass));
    if (!v) return;
    m.preventDefault();
    const E = Dt(v) * r.params.slidesPerGroup;
    if (r.params.loop) {
      if (r.realIndex === E) return;
      (E < r.loopedSlides || E > r.slides.length - r.loopedSlides) && r.loopFix({
        direction: E < r.loopedSlides ? "prev" : "next",
        activeSlideIndex: E,
        slideTo: !1
      }), r.slideToLoop(E)
    } else r.slideTo(E)
  }

  function p() {
    const m = r.rtl,
      v = r.params.pagination;
    if (l()) return;
    let E = r.pagination.el;
    E = o(E);
    let $;
    const w = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : r.slides.length,
      C = r.params.loop ? Math.ceil(w / r.params.slidesPerGroup) : r.snapGrid.length;
    if (r.params.loop ? $ = r.params.slidesPerGroup > 1 ? Math.floor(r.realIndex / r.params.slidesPerGroup) : r.realIndex : typeof r.snapIndex != "undefined" ? $ = r.snapIndex : $ = r.activeIndex || 0, v.type === "bullets" && r.pagination.bullets && r.pagination.bullets.length > 0) {
      const x = r.pagination.bullets;
      let M, A, B;
      if (v.dynamicBullets && (s = za(x[0], r.isHorizontal() ? "width" : "height", !0), E.forEach(S => {
          S.style[r.isHorizontal() ? "width" : "height"] = `${s*(v.dynamicMainBullets+4)}px`
        }), v.dynamicMainBullets > 1 && r.previousIndex !== void 0 && (i += $ - (r.previousIndex || 0), i > v.dynamicMainBullets - 1 ? i = v.dynamicMainBullets - 1 : i < 0 && (i = 0)), M = Math.max($ - i, 0), A = M + (Math.min(x.length, v.dynamicMainBullets) - 1), B = (A + M) / 2), x.forEach(S => {
          const P = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(k => `${v.bulletActiveClass}${k}`)].map(k => typeof k == "string" && k.includes(" ") ? k.split(" ") : k).flat();
          S.classList.remove(...P)
        }), E.length > 1) x.forEach(S => {
        const P = Dt(S);
        P === $ && S.classList.add(...v.bulletActiveClass.split(" ")), v.dynamicBullets && (P >= M && P <= A && S.classList.add(...`${v.bulletActiveClass}-main`.split(" ")), P === M && c(S, "prev"), P === A && c(S, "next"))
      });
      else {
        const S = x[$];
        if (S && S.classList.add(...v.bulletActiveClass.split(" ")), v.dynamicBullets) {
          const P = x[M],
            k = x[A];
          for (let I = M; I <= A; I += 1) x[I] && x[I].classList.add(...`${v.bulletActiveClass}-main`.split(" "));
          c(P, "prev"), c(k, "next")
        }
      }
      if (v.dynamicBullets) {
        const S = Math.min(x.length, v.dynamicMainBullets + 4),
          P = (s * S - s) / 2 - B * s,
          k = m ? "right" : "left";
        x.forEach(I => {
          I.style[r.isHorizontal() ? k : "top"] = `${P}px`
        })
      }
    }
    E.forEach((x, M) => {
      if (v.type === "fraction" && (x.querySelectorAll(st(v.currentClass)).forEach(A => {
          A.textContent = v.formatFractionCurrent($ + 1)
        }), x.querySelectorAll(st(v.totalClass)).forEach(A => {
          A.textContent = v.formatFractionTotal(C)
        })), v.type === "progressbar") {
        let A;
        v.progressbarOpposite ? A = r.isHorizontal() ? "vertical" : "horizontal" : A = r.isHorizontal() ? "horizontal" : "vertical";
        const B = ($ + 1) / C;
        let S = 1,
          P = 1;
        A === "horizontal" ? S = B : P = B, x.querySelectorAll(st(v.progressbarFillClass)).forEach(k => {
          k.style.transform = `translate3d(0,0,0) scaleX(${S}) scaleY(${P})`, k.style.transitionDuration = `${r.params.speed}ms`
        })
      }
      v.type === "custom" && v.renderCustom ? (x.innerHTML = v.renderCustom(r, $ + 1, C), M === 0 && t("paginationRender", x)) : (M === 0 && t("paginationRender", x), t("paginationUpdate", x)), r.params.watchOverflow && r.enabled && x.classList[r.isLocked ? "add" : "remove"](v.lockClass)
    })
  }

  function u() {
    const m = r.params.pagination;
    if (l()) return;
    const v = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : r.slides.length;
    let E = r.pagination.el;
    E = o(E);
    let $ = "";
    if (m.type === "bullets") {
      let w = r.params.loop ? Math.ceil(v / r.params.slidesPerGroup) : r.snapGrid.length;
      r.params.freeMode && r.params.freeMode.enabled && w > v && (w = v);
      for (let C = 0; C < w; C += 1) m.renderBullet ? $ += m.renderBullet.call(r, C, m.bulletClass) : $ += `<${m.bulletElement} class="${m.bulletClass}"></${m.bulletElement}>`
    }
    m.type === "fraction" && (m.renderFraction ? $ = m.renderFraction.call(r, m.currentClass, m.totalClass) : $ = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`), m.type === "progressbar" && (m.renderProgressbar ? $ = m.renderProgressbar.call(r, m.progressbarFillClass) : $ = `<span class="${m.progressbarFillClass}"></span>`), r.pagination.bullets = [], E.forEach(w => {
      m.type !== "custom" && (w.innerHTML = $ || ""), m.type === "bullets" && r.pagination.bullets.push(...w.querySelectorAll(st(m.bulletClass)))
    }), m.type !== "custom" && t("paginationRender", E[0])
  }

  function g() {
    r.params.pagination = Xa(r, r.originalParams.pagination, r.params.pagination, {
      el: "swiper-pagination"
    });
    const m = r.params.pagination;
    if (!m.el) return;
    let v;
    typeof m.el == "string" && r.isElement && (v = r.el.shadowRoot.querySelector(m.el)), !v && typeof m.el == "string" && (v = [...document.querySelectorAll(m.el)]), v || (v = m.el), !(!v || v.length === 0) && (r.params.uniqueNavElements && typeof m.el == "string" && Array.isArray(v) && v.length > 1 && (v = [...r.el.querySelectorAll(m.el)], v.length > 1 && (v = v.filter(E => ht(E, ".swiper")[0] === r.el)[0])), Array.isArray(v) && v.length === 1 && (v = v[0]), Object.assign(r.pagination, {
      el: v
    }), v = o(v), v.forEach(E => {
      m.type === "bullets" && m.clickable && E.classList.add(m.clickableClass), E.classList.add(m.modifierClass + m.type), E.classList.add(r.isHorizontal() ? m.horizontalClass : m.verticalClass), m.type === "bullets" && m.dynamicBullets && (E.classList.add(`${m.modifierClass}${m.type}-dynamic`), i = 0, m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)), m.type === "progressbar" && m.progressbarOpposite && E.classList.add(m.progressbarOppositeClass), m.clickable && E.addEventListener("click", d), r.enabled || E.classList.add(m.lockClass)
    }))
  }

  function h() {
    const m = r.params.pagination;
    if (l()) return;
    let v = r.pagination.el;
    v && (v = o(v), v.forEach(E => {
      E.classList.remove(m.hiddenClass), E.classList.remove(m.modifierClass + m.type), E.classList.remove(r.isHorizontal() ? m.horizontalClass : m.verticalClass), m.clickable && E.removeEventListener("click", d)
    })), r.pagination.bullets && r.pagination.bullets.forEach(E => E.classList.remove(...m.bulletActiveClass.split(" ")))
  }
  a("init", () => {
    r.params.pagination.enabled === !1 ? b() : (g(), u(), p())
  }), a("activeIndexChange", () => {
    typeof r.snapIndex == "undefined" && p()
  }), a("snapIndexChange", () => {
    p()
  }), a("snapGridLengthChange", () => {
    u(), p()
  }), a("destroy", () => {
    h()
  }), a("enable disable", () => {
    let {
      el: m
    } = r.pagination;
    m && (m = o(m), m.forEach(v => v.classList[r.enabled ? "remove" : "add"](r.params.pagination.lockClass)))
  }), a("lock unlock", () => {
    p()
  }), a("click", (m, v) => {
    const E = v.target;
    let {
      el: $
    } = r.pagination;
    if (Array.isArray($) || ($ = [$].filter(w => !!w)), r.params.pagination.el && r.params.pagination.hideOnClick && $ && $.length > 0 && !E.classList.contains(r.params.pagination.bulletClass)) {
      if (r.navigation && (r.navigation.nextEl && E === r.navigation.nextEl || r.navigation.prevEl && E === r.navigation.prevEl)) return;
      const w = $[0].classList.contains(r.params.pagination.hiddenClass);
      t(w === !0 ? "paginationShow" : "paginationHide"), $.forEach(C => C.classList.toggle(r.params.pagination.hiddenClass))
    }
  });
  const f = () => {
      r.el.classList.remove(r.params.pagination.paginationDisabledClass);
      let {
        el: m
      } = r.pagination;
      m && (m = o(m), m.forEach(v => v.classList.remove(r.params.pagination.paginationDisabledClass))), g(), u(), p()
    },
    b = () => {
      r.el.classList.add(r.params.pagination.paginationDisabledClass);
      let {
        el: m
      } = r.pagination;
      m && (m = o(m), m.forEach(v => v.classList.add(r.params.pagination.paginationDisabledClass))), h()
    };
  Object.assign(r.pagination, {
    enable: f,
    disable: b,
    render: u,
    update: p,
    init: g,
    destroy: h
  })
}

function Bd({
  swiper: r,
  extendParams: e,
  on: a,
  emit: t
}) {
  const n = ee();
  let s = !1,
    i = null,
    o = null,
    l, c, d, p;
  e({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical"
    }
  }), r.scrollbar = {
    el: null,
    dragEl: null
  };

  function u() {
    if (!r.params.scrollbar.el || !r.scrollbar.el) return;
    const {
      scrollbar: S,
      rtlTranslate: P
    } = r, {
      dragEl: k,
      el: I
    } = S, R = r.params.scrollbar, D = r.params.loop ? r.progressLoop : r.progress;
    let z = c,
      O = (d - c) * D;
    P ? (O = -O, O > 0 ? (z = c - O, O = 0) : -O + c > d && (z = d + O)) : O < 0 ? (z = c + O, O = 0) : O + c > d && (z = d - O), r.isHorizontal() ? (k.style.transform = `translate3d(${O}px, 0, 0)`, k.style.width = `${z}px`) : (k.style.transform = `translate3d(0px, ${O}px, 0)`, k.style.height = `${z}px`), R.hide && (clearTimeout(i), I.style.opacity = 1, i = setTimeout(() => {
      I.style.opacity = 0, I.style.transitionDuration = "400ms"
    }, 1e3))
  }

  function g(S) {
    !r.params.scrollbar.el || !r.scrollbar.el || (r.scrollbar.dragEl.style.transitionDuration = `${S}ms`)
  }

  function h() {
    if (!r.params.scrollbar.el || !r.scrollbar.el) return;
    const {
      scrollbar: S
    } = r, {
      dragEl: P,
      el: k
    } = S;
    P.style.width = "", P.style.height = "", d = r.isHorizontal() ? k.offsetWidth : k.offsetHeight, p = r.size / (r.virtualSize + r.params.slidesOffsetBefore - (r.params.centeredSlides ? r.snapGrid[0] : 0)), r.params.scrollbar.dragSize === "auto" ? c = d * p : c = parseInt(r.params.scrollbar.dragSize, 10), r.isHorizontal() ? P.style.width = `${c}px` : P.style.height = `${c}px`, p >= 1 ? k.style.display = "none" : k.style.display = "", r.params.scrollbar.hide && (k.style.opacity = 0), r.params.watchOverflow && r.enabled && S.el.classList[r.isLocked ? "add" : "remove"](r.params.scrollbar.lockClass)
  }

  function f(S) {
    return r.isHorizontal() ? S.clientX : S.clientY
  }

  function b(S) {
    const {
      scrollbar: P,
      rtlTranslate: k
    } = r, {
      el: I
    } = P;
    let R;
    R = (f(S) - ea(I)[r.isHorizontal() ? "left" : "top"] - (l !== null ? l : c / 2)) / (d - c), R = Math.max(Math.min(R, 1), 0), k && (R = 1 - R);
    const D = r.minTranslate() + (r.maxTranslate() - r.minTranslate()) * R;
    r.updateProgress(D), r.setTranslate(D), r.updateActiveIndex(), r.updateSlidesClasses()
  }

  function m(S) {
    const P = r.params.scrollbar,
      {
        scrollbar: k,
        wrapperEl: I
      } = r,
      {
        el: R,
        dragEl: D
      } = k;
    s = !0, l = S.target === D ? f(S) - S.target.getBoundingClientRect()[r.isHorizontal() ? "left" : "top"] : null, S.preventDefault(), S.stopPropagation(), I.style.transitionDuration = "100ms", D.style.transitionDuration = "100ms", b(S), clearTimeout(o), R.style.transitionDuration = "0ms", P.hide && (R.style.opacity = 1), r.params.cssMode && (r.wrapperEl.style["scroll-snap-type"] = "none"), t("scrollbarDragStart", S)
  }

  function v(S) {
    const {
      scrollbar: P,
      wrapperEl: k
    } = r, {
      el: I,
      dragEl: R
    } = P;
    !s || (S.preventDefault ? S.preventDefault() : S.returnValue = !1, b(S), k.style.transitionDuration = "0ms", I.style.transitionDuration = "0ms", R.style.transitionDuration = "0ms", t("scrollbarDragMove", S))
  }

  function E(S) {
    const P = r.params.scrollbar,
      {
        scrollbar: k,
        wrapperEl: I
      } = r,
      {
        el: R
      } = k;
    !s || (s = !1, r.params.cssMode && (r.wrapperEl.style["scroll-snap-type"] = "", I.style.transitionDuration = ""), P.hide && (clearTimeout(o), o = ut(() => {
      R.style.opacity = 0, R.style.transitionDuration = "400ms"
    }, 1e3)), t("scrollbarDragEnd", S), P.snapOnRelease && r.slideToClosest())
  }

  function $(S) {
    const {
      scrollbar: P,
      params: k
    } = r, I = P.el;
    if (!I) return;
    const R = I,
      D = k.passiveListeners ? {
        passive: !1,
        capture: !1
      } : !1,
      z = k.passiveListeners ? {
        passive: !0,
        capture: !1
      } : !1;
    if (!R) return;
    const O = S === "on" ? "addEventListener" : "removeEventListener";
    R[O]("pointerdown", m, D), n[O]("pointermove", v, D), n[O]("pointerup", E, z)
  }

  function w() {
    !r.params.scrollbar.el || !r.scrollbar.el || $("on")
  }

  function C() {
    !r.params.scrollbar.el || !r.scrollbar.el || $("off")
  }

  function x() {
    const {
      scrollbar: S,
      el: P
    } = r;
    r.params.scrollbar = Xa(r, r.originalParams.scrollbar, r.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const k = r.params.scrollbar;
    if (!k.el) return;
    let I;
    typeof k.el == "string" && r.isElement && (I = r.el.shadowRoot.querySelector(k.el)), !I && typeof k.el == "string" ? I = n.querySelectorAll(k.el) : I || (I = k.el), r.params.uniqueNavElements && typeof k.el == "string" && I.length > 1 && P.querySelectorAll(k.el).length === 1 && (I = P.querySelector(k.el)), I.length > 0 && (I = I[0]), I.classList.add(r.isHorizontal() ? k.horizontalClass : k.verticalClass);
    let R;
    I && (R = I.querySelector(`.${r.params.scrollbar.dragClass}`), R || (R = Fe("div", r.params.scrollbar.dragClass), I.append(R))), Object.assign(S, {
      el: I,
      dragEl: R
    }), k.draggable && w(), I && I.classList[r.enabled ? "remove" : "add"](r.params.scrollbar.lockClass)
  }

  function M() {
    const S = r.params.scrollbar,
      P = r.scrollbar.el;
    P && P.classList.remove(r.isHorizontal() ? S.horizontalClass : S.verticalClass), C()
  }
  a("init", () => {
    r.params.scrollbar.enabled === !1 ? B() : (x(), h(), u())
  }), a("update resize observerUpdate lock unlock", () => {
    h()
  }), a("setTranslate", () => {
    u()
  }), a("setTransition", (S, P) => {
    g(P)
  }), a("enable disable", () => {
    const {
      el: S
    } = r.scrollbar;
    S && S.classList[r.enabled ? "remove" : "add"](r.params.scrollbar.lockClass)
  }), a("destroy", () => {
    M()
  });
  const A = () => {
      r.el.classList.remove(r.params.scrollbar.scrollbarDisabledClass), r.scrollbar.el && r.scrollbar.el.classList.remove(r.params.scrollbar.scrollbarDisabledClass), x(), h(), u()
    },
    B = () => {
      r.el.classList.add(r.params.scrollbar.scrollbarDisabledClass), r.scrollbar.el && r.scrollbar.el.classList.add(r.params.scrollbar.scrollbarDisabledClass), M()
    };
  Object.assign(r.scrollbar, {
    enable: A,
    disable: B,
    updateSize: h,
    setTranslate: u,
    init: x,
    destroy: M
  })
}

function Dd({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    parallax: {
      enabled: !1
    }
  });
  const t = (i, o) => {
      const {
        rtl: l
      } = r, c = l ? -1 : 1, d = i.getAttribute("data-swiper-parallax") || "0";
      let p = i.getAttribute("data-swiper-parallax-x"),
        u = i.getAttribute("data-swiper-parallax-y");
      const g = i.getAttribute("data-swiper-parallax-scale"),
        h = i.getAttribute("data-swiper-parallax-opacity"),
        f = i.getAttribute("data-swiper-parallax-rotate");
      if (p || u ? (p = p || "0", u = u || "0") : r.isHorizontal() ? (p = d, u = "0") : (u = d, p = "0"), p.indexOf("%") >= 0 ? p = `${parseInt(p,10)*o*c}%` : p = `${p*o*c}px`, u.indexOf("%") >= 0 ? u = `${parseInt(u,10)*o}%` : u = `${u*o}px`, typeof h != "undefined" && h !== null) {
        const m = h - (h - 1) * (1 - Math.abs(o));
        i.style.opacity = m
      }
      let b = `translate3d(${p}, ${u}, 0px)`;
      typeof g != "undefined" && g !== null && (b += ` scale(${g-(g-1)*(1-Math.abs(o))})`), f && typeof f != "undefined" && f !== null && (b += ` rotate(${f*o*-1}deg)`), i.style.transform = b
    },
    n = () => {
      const {
        el: i,
        slides: o,
        progress: l,
        snapGrid: c
      } = r;
      Te(i, "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(d => {
        t(d, l)
      }), o.forEach((d, p) => {
        let u = d.progress;
        r.params.slidesPerGroup > 1 && r.params.slidesPerView !== "auto" && (u += Math.ceil(p / 2) - l * (c.length - 1)), u = Math.min(Math.max(u, -1), 1), d.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale], [data-swiper-parallax-rotate]").forEach(g => {
          t(g, u)
        })
      })
    },
    s = (i = r.params.speed) => {
      const {
        el: o
      } = r;
      o.querySelectorAll("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").forEach(l => {
        let c = parseInt(l.getAttribute("data-swiper-parallax-duration"), 10) || i;
        i === 0 && (c = 0), l.style.transitionDuration = `${c}ms`
      })
    };
  a("beforeInit", () => {
    !r.params.parallax.enabled || (r.params.watchSlidesProgress = !0, r.originalParams.watchSlidesProgress = !0)
  }), a("init", () => {
    !r.params.parallax.enabled || n()
  }), a("setTranslate", () => {
    !r.params.parallax.enabled || n()
  }), a("setTransition", (i, o) => {
    !r.params.parallax.enabled || s(o)
  })
}

function Ld({
  swiper: r,
  extendParams: e,
  on: a,
  emit: t
}) {
  const n = G();
  e({
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  }), r.zoom = {
    enabled: !1
  };
  let s = 1,
    i = !1,
    o, l;
  const c = [],
    d = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3
    },
    p = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    },
    u = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
  let g = 1;
  Object.defineProperty(r.zoom, "scale", {
    get() {
      return g
    },
    set(D) {
      if (g !== D) {
        const z = d.imageEl,
          O = d.slideEl;
        t("zoomChange", D, z, O)
      }
      g = D
    }
  });

  function h() {
    if (c.length < 2) return 1;
    const D = c[0].pageX,
      z = c[0].pageY,
      O = c[1].pageX,
      L = c[1].pageY;
    return Math.sqrt((O - D) ** 2 + (L - z) ** 2)
  }

  function f() {
    if (c.length < 2) return {
      x: null,
      y: null
    };
    const D = d.imageEl.getBoundingClientRect();
    return [(c[0].pageX + (c[1].pageX - c[0].pageX) / 2 - D.x) / s, (c[0].pageY + (c[1].pageY - c[0].pageY) / 2 - D.y) / s]
  }

  function b() {
    return r.isElement ? "swiper-slide" : `.${r.params.slideClass}`
  }

  function m(D) {
    const z = b();
    return !!(D.target.matches(z) || r.slides.filter(O => O.contains(D.target)).length > 0)
  }

  function v(D) {
    const z = `.${r.params.zoom.containerClass}`;
    return !!(D.target.matches(z) || [...r.el.querySelectorAll(z)].filter(O => O.contains(D.target)).length > 0)
  }

  function E(D) {
    if (D.pointerType === "mouse" && c.splice(0, c.length), !m(D)) return;
    const z = r.params.zoom;
    if (o = !1, l = !1, c.push(D), !(c.length < 2)) {
      if (o = !0, d.scaleStart = h(), !d.slideEl) {
        d.slideEl = D.target.closest(`.${r.params.slideClass}, swiper-slide`), d.slideEl || (d.slideEl = r.slides[r.activeIndex]);
        let O = d.slideEl.querySelector(`.${z.containerClass}`);
        if (O && (O = O.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = O, O ? d.imageWrapEl = ht(d.imageEl, `.${z.containerClass}`)[0] : d.imageWrapEl = void 0, !d.imageWrapEl) {
          d.imageEl = void 0;
          return
        }
        d.maxRatio = d.imageWrapEl.getAttribute("data-swiper-zoom") || z.maxRatio
      }
      if (d.imageEl) {
        const [O, L] = f();
        d.originX = O, d.originY = L, d.imageEl.style.transitionDuration = "0ms"
      }
      i = !0
    }
  }

  function $(D) {
    if (!m(D)) return;
    const z = r.params.zoom,
      O = r.zoom,
      L = c.findIndex(N => N.pointerId === D.pointerId);
    L >= 0 && (c[L] = D), !(c.length < 2) && (l = !0, d.scaleMove = h(), !!d.imageEl && (O.scale = d.scaleMove / d.scaleStart * s, O.scale > d.maxRatio && (O.scale = d.maxRatio - 1 + (O.scale - d.maxRatio + 1) ** .5), O.scale < z.minRatio && (O.scale = z.minRatio + 1 - (z.minRatio - O.scale + 1) ** .5), d.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`))
  }

  function w(D) {
    if (!m(D) || D.pointerType === "mouse" && D.type === "pointerout") return;
    const z = r.params.zoom,
      O = r.zoom,
      L = c.findIndex(N => N.pointerId === D.pointerId);
    L >= 0 && c.splice(L, 1), !(!o || !l) && (o = !1, l = !1, !!d.imageEl && (O.scale = Math.max(Math.min(O.scale, d.maxRatio), z.minRatio), d.imageEl.style.transitionDuration = `${r.params.speed}ms`, d.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`, s = O.scale, i = !1, O.scale > 1 && d.slideEl ? d.slideEl.classList.add(`${z.zoomedSlideClass}`) : O.scale <= 1 && d.slideEl && d.slideEl.classList.remove(`${z.zoomedSlideClass}`), O.scale === 1 && (d.originX = 0, d.originY = 0, d.slideEl = void 0)))
  }

  function C(D) {
    const z = r.device;
    if (!d.imageEl || p.isTouched) return;
    z.android && D.cancelable && D.preventDefault(), p.isTouched = !0;
    const O = c.length > 0 ? c[0] : D;
    p.touchesStart.x = O.pageX, p.touchesStart.y = O.pageY
  }

  function x(D) {
    if (!m(D) || !v(D)) return;
    const z = r.zoom;
    if (!d.imageEl || !p.isTouched || !d.slideEl) return;
    p.isMoved || (p.width = d.imageEl.offsetWidth, p.height = d.imageEl.offsetHeight, p.startX = Ha(d.imageWrapEl, "x") || 0, p.startY = Ha(d.imageWrapEl, "y") || 0, d.slideWidth = d.slideEl.offsetWidth, d.slideHeight = d.slideEl.offsetHeight, d.imageWrapEl.style.transitionDuration = "0ms");
    const O = p.width * z.scale,
      L = p.height * z.scale;
    if (O < d.slideWidth && L < d.slideHeight) return;
    if (p.minX = Math.min(d.slideWidth / 2 - O / 2, 0), p.maxX = -p.minX, p.minY = Math.min(d.slideHeight / 2 - L / 2, 0), p.maxY = -p.minY, p.touchesCurrent.x = c.length > 0 ? c[0].pageX : D.pageX, p.touchesCurrent.y = c.length > 0 ? c[0].pageY : D.pageY, Math.max(Math.abs(p.touchesCurrent.x - p.touchesStart.x), Math.abs(p.touchesCurrent.y - p.touchesStart.y)) > 5 && (r.allowClick = !1), !p.isMoved && !i) {
      if (r.isHorizontal() && (Math.floor(p.minX) === Math.floor(p.startX) && p.touchesCurrent.x < p.touchesStart.x || Math.floor(p.maxX) === Math.floor(p.startX) && p.touchesCurrent.x > p.touchesStart.x)) {
        p.isTouched = !1;
        return
      }
      if (!r.isHorizontal() && (Math.floor(p.minY) === Math.floor(p.startY) && p.touchesCurrent.y < p.touchesStart.y || Math.floor(p.maxY) === Math.floor(p.startY) && p.touchesCurrent.y > p.touchesStart.y)) {
        p.isTouched = !1;
        return
      }
    }
    D.cancelable && D.preventDefault(), D.stopPropagation(), p.isMoved = !0;
    const F = (z.scale - s) / (d.maxRatio - r.params.zoom.minRatio),
      {
        originX: V,
        originY: U
      } = d;
    p.currentX = p.touchesCurrent.x - p.touchesStart.x + p.startX + F * (p.width - V * 2), p.currentY = p.touchesCurrent.y - p.touchesStart.y + p.startY + F * (p.height - U * 2), p.currentX < p.minX && (p.currentX = p.minX + 1 - (p.minX - p.currentX + 1) ** .8), p.currentX > p.maxX && (p.currentX = p.maxX - 1 + (p.currentX - p.maxX + 1) ** .8), p.currentY < p.minY && (p.currentY = p.minY + 1 - (p.minY - p.currentY + 1) ** .8), p.currentY > p.maxY && (p.currentY = p.maxY - 1 + (p.currentY - p.maxY + 1) ** .8), u.prevPositionX || (u.prevPositionX = p.touchesCurrent.x), u.prevPositionY || (u.prevPositionY = p.touchesCurrent.y), u.prevTime || (u.prevTime = Date.now()), u.x = (p.touchesCurrent.x - u.prevPositionX) / (Date.now() - u.prevTime) / 2, u.y = (p.touchesCurrent.y - u.prevPositionY) / (Date.now() - u.prevTime) / 2, Math.abs(p.touchesCurrent.x - u.prevPositionX) < 2 && (u.x = 0), Math.abs(p.touchesCurrent.y - u.prevPositionY) < 2 && (u.y = 0), u.prevPositionX = p.touchesCurrent.x, u.prevPositionY = p.touchesCurrent.y, u.prevTime = Date.now(), d.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`
  }

  function M() {
    const D = r.zoom;
    if (!d.imageEl) return;
    if (!p.isTouched || !p.isMoved) {
      p.isTouched = !1, p.isMoved = !1;
      return
    }
    p.isTouched = !1, p.isMoved = !1;
    let z = 300,
      O = 300;
    const L = u.x * z,
      N = p.currentX + L,
      F = u.y * O,
      V = p.currentY + F;
    u.x !== 0 && (z = Math.abs((N - p.currentX) / u.x)), u.y !== 0 && (O = Math.abs((V - p.currentY) / u.y));
    const U = Math.max(z, O);
    p.currentX = N, p.currentY = V;
    const Z = p.width * D.scale,
      J = p.height * D.scale;
    p.minX = Math.min(d.slideWidth / 2 - Z / 2, 0), p.maxX = -p.minX, p.minY = Math.min(d.slideHeight / 2 - J / 2, 0), p.maxY = -p.minY, p.currentX = Math.max(Math.min(p.currentX, p.maxX), p.minX), p.currentY = Math.max(Math.min(p.currentY, p.maxY), p.minY), d.imageWrapEl.style.transitionDuration = `${U}ms`, d.imageWrapEl.style.transform = `translate3d(${p.currentX}px, ${p.currentY}px,0)`
  }

  function A() {
    const D = r.zoom;
    d.slideEl && r.activeIndex !== r.slides.indexOf(d.slideEl) && (d.imageEl && (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), d.imageWrapEl && (d.imageWrapEl.style.transform = "translate3d(0,0,0)"), d.slideEl.classList.remove(`${r.params.zoom.zoomedSlideClass}`), D.scale = 1, s = 1, d.slideEl = void 0, d.imageEl = void 0, d.imageWrapEl = void 0, d.originX = 0, d.originY = 0)
  }

  function B(D) {
    const z = r.zoom,
      O = r.params.zoom;
    if (!d.slideEl) {
      D && D.target && (d.slideEl = D.target.closest(`.${r.params.slideClass}, swiper-slide`)), d.slideEl || (r.params.virtual && r.params.virtual.enabled && r.virtual ? d.slideEl = Te(r.slidesEl, `.${r.params.slideActiveClass}`)[0] : d.slideEl = r.slides[r.activeIndex]);
      let le = d.slideEl.querySelector(`.${O.containerClass}`);
      le && (le = le.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = le, le ? d.imageWrapEl = ht(d.imageEl, `.${O.containerClass}`)[0] : d.imageWrapEl = void 0
    }
    if (!d.imageEl || !d.imageWrapEl) return;
    r.params.cssMode && (r.wrapperEl.style.overflow = "hidden", r.wrapperEl.style.touchAction = "none"), d.slideEl.classList.add(`${O.zoomedSlideClass}`);
    let L, N, F, V, U, Z, J, X, Y, W, K, j, _, Q, se, me, te, oe;
    typeof p.touchesStart.x == "undefined" && D ? (L = D.pageX, N = D.pageY) : (L = p.touchesStart.x, N = p.touchesStart.y);
    const de = typeof D == "number" ? D : null;
    s === 1 && de && (L = void 0, N = void 0), z.scale = de || d.imageWrapEl.getAttribute("data-swiper-zoom") || O.maxRatio, s = de || d.imageWrapEl.getAttribute("data-swiper-zoom") || O.maxRatio, D && !(s === 1 && de) ? (te = d.slideEl.offsetWidth, oe = d.slideEl.offsetHeight, F = ea(d.slideEl).left + n.scrollX, V = ea(d.slideEl).top + n.scrollY, U = F + te / 2 - L, Z = V + oe / 2 - N, Y = d.imageEl.offsetWidth, W = d.imageEl.offsetHeight, K = Y * z.scale, j = W * z.scale, _ = Math.min(te / 2 - K / 2, 0), Q = Math.min(oe / 2 - j / 2, 0), se = -_, me = -Q, J = U * z.scale, X = Z * z.scale, J < _ && (J = _), J > se && (J = se), X < Q && (X = Q), X > me && (X = me)) : (J = 0, X = 0), de && z.scale === 1 && (d.originX = 0, d.originY = 0), d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = `translate3d(${J}px, ${X}px,0)`, d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = `translate3d(0,0,0) scale(${z.scale})`
  }

  function S() {
    const D = r.zoom,
      z = r.params.zoom;
    if (!d.slideEl) {
      r.params.virtual && r.params.virtual.enabled && r.virtual ? d.slideEl = Te(r.slidesEl, `.${r.params.slideActiveClass}`)[0] : d.slideEl = r.slides[r.activeIndex];
      let O = d.slideEl.querySelector(`.${z.containerClass}`);
      O && (O = O.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = O, O ? d.imageWrapEl = ht(d.imageEl, `.${z.containerClass}`)[0] : d.imageWrapEl = void 0
    }!d.imageEl || !d.imageWrapEl || (r.params.cssMode && (r.wrapperEl.style.overflow = "", r.wrapperEl.style.touchAction = ""), D.scale = 1, s = 1, d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = "translate3d(0,0,0)", d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = "translate3d(0,0,0) scale(1)", d.slideEl.classList.remove(`${z.zoomedSlideClass}`), d.slideEl = void 0, d.originX = 0, d.originY = 0)
  }

  function P(D) {
    const z = r.zoom;
    z.scale && z.scale !== 1 ? S() : B(D)
  }

  function k() {
    const D = r.params.passiveListeners ? {
        passive: !0,
        capture: !1
      } : !1,
      z = r.params.passiveListeners ? {
        passive: !1,
        capture: !0
      } : !0;
    return {
      passiveListener: D,
      activeListenerWithCapture: z
    }
  }

  function I() {
    const D = r.zoom;
    if (D.enabled) return;
    D.enabled = !0;
    const {
      passiveListener: z,
      activeListenerWithCapture: O
    } = k();
    r.wrapperEl.addEventListener("pointerdown", E, z), r.wrapperEl.addEventListener("pointermove", $, O), ["pointerup", "pointercancel", "pointerout"].forEach(L => {
      r.wrapperEl.addEventListener(L, w, z)
    }), r.wrapperEl.addEventListener("pointermove", x, O)
  }

  function R() {
    const D = r.zoom;
    if (!D.enabled) return;
    D.enabled = !1;
    const {
      passiveListener: z,
      activeListenerWithCapture: O
    } = k();
    r.wrapperEl.removeEventListener("pointerdown", E, z), r.wrapperEl.removeEventListener("pointermove", $, O), ["pointerup", "pointercancel", "pointerout"].forEach(L => {
      r.wrapperEl.removeEventListener(L, w, z)
    }), r.wrapperEl.removeEventListener("pointermove", x, O)
  }
  a("init", () => {
    r.params.zoom.enabled && I()
  }), a("destroy", () => {
    R()
  }), a("touchStart", (D, z) => {
    !r.zoom.enabled || C(z)
  }), a("touchEnd", (D, z) => {
    !r.zoom.enabled || M()
  }), a("doubleTap", (D, z) => {
    !r.animating && r.params.zoom.enabled && r.zoom.enabled && r.params.zoom.toggle && P(z)
  }), a("transitionEnd", () => {
    r.zoom.enabled && r.params.zoom.enabled && A()
  }), a("slideChange", () => {
    r.zoom.enabled && r.params.zoom.enabled && r.params.cssMode && A()
  }), Object.assign(r.zoom, {
    enable: I,
    disable: R,
    in: B,
    out: S,
    toggle: P
  })
}

function Rd({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    controller: {
      control: void 0,
      inverse: !1,
      by: "slide"
    }
  }), r.controller = {
    control: void 0
  };

  function t(l, c) {
    const d = function () {
      let h, f, b;
      return (m, v) => {
        for (f = -1, h = m.length; h - f > 1;) b = h + f >> 1, m[b] <= v ? f = b : h = b;
        return h
      }
    }();
    this.x = l, this.y = c, this.lastIndex = l.length - 1;
    let p, u;
    return this.interpolate = function (h) {
      return h ? (u = d(this.x, h), p = u - 1, (h - this.x[p]) * (this.y[u] - this.y[p]) / (this.x[u] - this.x[p]) + this.y[p]) : 0
    }, this
  }

  function n(l) {
    r.controller.spline || (r.controller.spline = r.params.loop ? new t(r.slidesGrid, l.slidesGrid) : new t(r.snapGrid, l.snapGrid))
  }

  function s(l, c) {
    const d = r.controller.control;
    let p, u;
    const g = r.constructor;

    function h(f) {
      if (f.destroyed) return;
      const b = r.rtlTranslate ? -r.translate : r.translate;
      r.params.controller.by === "slide" && (n(f), u = -r.controller.spline.interpolate(-b)), (!u || r.params.controller.by === "container") && (p = (f.maxTranslate() - f.minTranslate()) / (r.maxTranslate() - r.minTranslate()), u = (b - r.minTranslate()) * p + f.minTranslate()), r.params.controller.inverse && (u = f.maxTranslate() - u), f.updateProgress(u), f.setTranslate(u, r), f.updateActiveIndex(), f.updateSlidesClasses()
    }
    if (Array.isArray(d))
      for (let f = 0; f < d.length; f += 1) d[f] !== c && d[f] instanceof g && h(d[f]);
    else d instanceof g && c !== d && h(d)
  }

  function i(l, c) {
    const d = r.constructor,
      p = r.controller.control;
    let u;

    function g(h) {
      h.destroyed || (h.setTransition(l, r), l !== 0 && (h.transitionStart(), h.params.autoHeight && ut(() => {
        h.updateAutoHeight()
      }), Lt(h.wrapperEl, () => {
        !p || h.transitionEnd()
      })))
    }
    if (Array.isArray(p))
      for (u = 0; u < p.length; u += 1) p[u] !== c && p[u] instanceof d && g(p[u]);
    else p instanceof d && c !== p && g(p)
  }

  function o() {
    !r.controller.control || r.controller.spline && (r.controller.spline = void 0, delete r.controller.spline)
  }
  a("beforeInit", () => {
    if (typeof window != "undefined" && (typeof r.params.controller.control == "string" || r.params.controller.control instanceof HTMLElement)) {
      const l = document.querySelector(r.params.controller.control);
      if (l && l.swiper) r.controller.control = l.swiper;
      else if (l) {
        const c = d => {
          r.controller.control = d.detail[0], r.update(), l.removeEventListener("init", c)
        };
        l.addEventListener("init", c)
      }
      return
    }
    r.controller.control = r.params.controller.control
  }), a("update", () => {
    o()
  }), a("resize", () => {
    o()
  }), a("observerUpdate", () => {
    o()
  }), a("setTranslate", (l, c, d) => {
    !r.controller.control || r.controller.setTranslate(c, d)
  }), a("setTransition", (l, c, d) => {
    !r.controller.control || r.controller.setTransition(c, d)
  }), Object.assign(r.controller, {
    setTranslate: s,
    setTransition: i
  })
}

function Hd({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null
    }
  }), r.a11y = {
    clicked: !1
  };
  let t = null;

  function n(k) {
    const I = t;
    I.length !== 0 && (I.innerHTML = "", I.innerHTML = k)
  }
  const s = k => (Array.isArray(k) || (k = [k].filter(I => !!I)), k);

  function i(k = 16) {
    const I = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(k).replace(/x/g, I)
  }

  function o(k) {
    k = s(k), k.forEach(I => {
      I.setAttribute("tabIndex", "0")
    })
  }

  function l(k) {
    k = s(k), k.forEach(I => {
      I.setAttribute("tabIndex", "-1")
    })
  }

  function c(k, I) {
    k = s(k), k.forEach(R => {
      R.setAttribute("role", I)
    })
  }

  function d(k, I) {
    k = s(k), k.forEach(R => {
      R.setAttribute("aria-roledescription", I)
    })
  }

  function p(k, I) {
    k = s(k), k.forEach(R => {
      R.setAttribute("aria-controls", I)
    })
  }

  function u(k, I) {
    k = s(k), k.forEach(R => {
      R.setAttribute("aria-label", I)
    })
  }

  function g(k, I) {
    k = s(k), k.forEach(R => {
      R.setAttribute("id", I)
    })
  }

  function h(k, I) {
    k = s(k), k.forEach(R => {
      R.setAttribute("aria-live", I)
    })
  }

  function f(k) {
    k = s(k), k.forEach(I => {
      I.setAttribute("aria-disabled", !0)
    })
  }

  function b(k) {
    k = s(k), k.forEach(I => {
      I.setAttribute("aria-disabled", !1)
    })
  }

  function m(k) {
    if (k.keyCode !== 13 && k.keyCode !== 32) return;
    const I = r.params.a11y,
      R = k.target;
    r.pagination && r.pagination.el && (R === r.pagination.el || r.pagination.el.contains(k.target)) && !k.target.matches(st(r.params.pagination.bulletClass)) || (r.navigation && r.navigation.nextEl && R === r.navigation.nextEl && (r.isEnd && !r.params.loop || r.slideNext(), r.isEnd ? n(I.lastSlideMessage) : n(I.nextSlideMessage)), r.navigation && r.navigation.prevEl && R === r.navigation.prevEl && (r.isBeginning && !r.params.loop || r.slidePrev(), r.isBeginning ? n(I.firstSlideMessage) : n(I.prevSlideMessage)), r.pagination && R.matches(st(r.params.pagination.bulletClass)) && R.click())
  }

  function v() {
    if (r.params.loop || r.params.rewind || !r.navigation) return;
    const {
      nextEl: k,
      prevEl: I
    } = r.navigation;
    I && (r.isBeginning ? (f(I), l(I)) : (b(I), o(I))), k && (r.isEnd ? (f(k), l(k)) : (b(k), o(k)))
  }

  function E() {
    return r.pagination && r.pagination.bullets && r.pagination.bullets.length
  }

  function $() {
    return E() && r.params.pagination.clickable
  }

  function w() {
    const k = r.params.a11y;
    !E() || r.pagination.bullets.forEach(I => {
      r.params.pagination.clickable && (o(I), r.params.pagination.renderBullet || (c(I, "button"), u(I, k.paginationBulletMessage.replace(/\{\{index\}\}/, Dt(I) + 1)))), I.matches(st(r.params.pagination.bulletActiveClass)) ? I.setAttribute("aria-current", "true") : I.removeAttribute("aria-current")
    })
  }
  const C = (k, I, R) => {
      o(k), k.tagName !== "BUTTON" && (c(k, "button"), k.addEventListener("keydown", m)), u(k, R), p(k, I)
    },
    x = () => {
      r.a11y.clicked = !0
    },
    M = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          r.destroyed || (r.a11y.clicked = !1)
        })
      })
    },
    A = k => {
      if (r.a11y.clicked) return;
      const I = k.target.closest(`.${r.params.slideClass}, swiper-slide`);
      if (!I || !r.slides.includes(I)) return;
      const R = r.slides.indexOf(I) === r.activeIndex,
        D = r.params.watchSlidesProgress && r.visibleSlides && r.visibleSlides.includes(I);
      R || D || k.sourceCapabilities && k.sourceCapabilities.firesTouchEvents || (r.isHorizontal() ? r.el.scrollLeft = 0 : r.el.scrollTop = 0, r.slideTo(r.slides.indexOf(I), 0))
    },
    B = () => {
      const k = r.params.a11y;
      k.itemRoleDescriptionMessage && d(r.slides, k.itemRoleDescriptionMessage), k.slideRole && c(r.slides, k.slideRole);
      const I = r.slides.length;
      k.slideLabelMessage && r.slides.forEach((R, D) => {
        const z = r.params.loop ? parseInt(R.getAttribute("data-swiper-slide-index"), 10) : D,
          O = k.slideLabelMessage.replace(/\{\{index\}\}/, z + 1).replace(/\{\{slidesLength\}\}/, I);
        u(R, O)
      })
    },
    S = () => {
      const k = r.params.a11y;
      r.el.append(t);
      const I = r.el;
      k.containerRoleDescriptionMessage && d(I, k.containerRoleDescriptionMessage), k.containerMessage && u(I, k.containerMessage);
      const R = r.wrapperEl,
        D = k.id || R.getAttribute("id") || `swiper-wrapper-${i(16)}`,
        z = r.params.autoplay && r.params.autoplay.enabled ? "off" : "polite";
      g(R, D), h(R, z), B();
      let {
        nextEl: O,
        prevEl: L
      } = r.navigation ? r.navigation : {};
      O = s(O), L = s(L), O && O.forEach(N => C(N, D, k.nextSlideMessage)), L && L.forEach(N => C(N, D, k.prevSlideMessage)), $() && (Array.isArray(r.pagination.el) ? r.pagination.el : [r.pagination.el]).forEach(F => {
        F.addEventListener("keydown", m)
      }), r.el.addEventListener("focus", A, !0), r.el.addEventListener("pointerdown", x, !0), r.el.addEventListener("pointerup", M, !0)
    };

  function P() {
    t && t.length > 0 && t.remove();
    let {
      nextEl: k,
      prevEl: I
    } = r.navigation ? r.navigation : {};
    k = s(k), I = s(I), k && k.forEach(R => R.removeEventListener("keydown", m)), I && I.forEach(R => R.removeEventListener("keydown", m)), $() && (Array.isArray(r.pagination.el) ? r.pagination.el : [r.pagination.el]).forEach(D => {
      D.removeEventListener("keydown", m)
    }), r.el.removeEventListener("focus", A, !0), r.el.removeEventListener("pointerdown", x, !0), r.el.removeEventListener("pointerup", M, !0)
  }
  a("beforeInit", () => {
    t = Fe("span", r.params.a11y.notificationClass), t.setAttribute("aria-live", "assertive"), t.setAttribute("aria-atomic", "true"), r.isElement && t.setAttribute("slot", "container-end")
  }), a("afterInit", () => {
    !r.params.a11y.enabled || S()
  }), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    !r.params.a11y.enabled || B()
  }), a("fromEdge toEdge afterInit lock unlock", () => {
    !r.params.a11y.enabled || v()
  }), a("paginationUpdate", () => {
    !r.params.a11y.enabled || w()
  }), a("destroy", () => {
    !r.params.a11y.enabled || P()
  })
}

function zd({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1
    }
  });
  let t = !1,
    n = {};
  const s = u => u.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
    i = u => {
      const g = G();
      let h;
      u ? h = new URL(u) : h = g.location;
      const f = h.pathname.slice(1).split("/").filter(E => E !== ""),
        b = f.length,
        m = f[b - 2],
        v = f[b - 1];
      return {
        key: m,
        value: v
      }
    },
    o = (u, g) => {
      const h = G();
      if (!t || !r.params.history.enabled) return;
      let f;
      r.params.url ? f = new URL(r.params.url) : f = h.location;
      const b = r.slides[g];
      let m = s(b.getAttribute("data-history"));
      if (r.params.history.root.length > 0) {
        let E = r.params.history.root;
        E[E.length - 1] === "/" && (E = E.slice(0, E.length - 1)), m = `${E}/${u?`${u}/`:""}${m}`
      } else f.pathname.includes(u) || (m = `${u?`${u}/`:""}${m}`);
      r.params.history.keepQuery && (m += f.search);
      const v = h.history.state;
      v && v.value === m || (r.params.history.replaceState ? h.history.replaceState({
        value: m
      }, null, m) : h.history.pushState({
        value: m
      }, null, m))
    },
    l = (u, g, h) => {
      if (g)
        for (let f = 0, b = r.slides.length; f < b; f += 1) {
          const m = r.slides[f];
          if (s(m.getAttribute("data-history")) === g) {
            const E = r.getSlideIndex(m);
            r.slideTo(E, u, h)
          }
        } else r.slideTo(0, u, h)
    },
    c = () => {
      n = i(r.params.url), l(r.params.speed, n.value, !1)
    },
    d = () => {
      const u = G();
      if (!!r.params.history) {
        if (!u.history || !u.history.pushState) {
          r.params.history.enabled = !1, r.params.hashNavigation.enabled = !0;
          return
        }
        if (t = !0, n = i(r.params.url), !n.key && !n.value) {
          r.params.history.replaceState || u.addEventListener("popstate", c);
          return
        }
        l(0, n.value, r.params.runCallbacksOnInit), r.params.history.replaceState || u.addEventListener("popstate", c)
      }
    },
    p = () => {
      const u = G();
      r.params.history.replaceState || u.removeEventListener("popstate", c)
    };
  a("init", () => {
    r.params.history.enabled && d()
  }), a("destroy", () => {
    r.params.history.enabled && p()
  }), a("transitionEnd _freeModeNoMomentumRelease", () => {
    t && o(r.params.history.key, r.activeIndex)
  }), a("slideChange", () => {
    t && r.params.cssMode && o(r.params.history.key, r.activeIndex)
  })
}

function Fd({
  swiper: r,
  extendParams: e,
  emit: a,
  on: t
}) {
  let n = !1;
  const s = ee(),
    i = G();
  e({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1
    }
  });
  const o = () => {
      a("hashChange");
      const p = s.location.hash.replace("#", ""),
        u = r.slides[r.activeIndex].getAttribute("data-hash");
      if (p !== u) {
        const g = r.getSlideIndex(Te(r.slidesEl, `.${r.params.slideClass}[data-hash="${p}"], swiper-slide[data-hash="${p}"]`)[0]);
        if (typeof g == "undefined") return;
        r.slideTo(g)
      }
    },
    l = () => {
      if (!(!n || !r.params.hashNavigation.enabled))
        if (r.params.hashNavigation.replaceState && i.history && i.history.replaceState) i.history.replaceState(null, null, `#${r.slides[r.activeIndex].getAttribute("data-hash")}` || ""), a("hashSet");
        else {
          const p = r.slides[r.activeIndex],
            u = p.getAttribute("data-hash") || p.getAttribute("data-history");
          s.location.hash = u || "", a("hashSet")
        }
    },
    c = () => {
      if (!r.params.hashNavigation.enabled || r.params.history && r.params.history.enabled) return;
      n = !0;
      const p = s.location.hash.replace("#", "");
      if (p) {
        const u = 0;
        for (let g = 0, h = r.slides.length; g < h; g += 1) {
          const f = r.slides[g];
          if ((f.getAttribute("data-hash") || f.getAttribute("data-history")) === p) {
            const m = r.getSlideIndex(f);
            r.slideTo(m, u, r.params.runCallbacksOnInit, !0)
          }
        }
      }
      r.params.hashNavigation.watchState && i.addEventListener("hashchange", o)
    },
    d = () => {
      r.params.hashNavigation.watchState && i.removeEventListener("hashchange", o)
    };
  t("init", () => {
    r.params.hashNavigation.enabled && c()
  }), t("destroy", () => {
    r.params.hashNavigation.enabled && d()
  }), t("transitionEnd _freeModeNoMomentumRelease", () => {
    n && l()
  }), t("slideChange", () => {
    n && r.params.cssMode && l()
  })
}

function Vd({
  swiper: r,
  extendParams: e,
  on: a,
  emit: t,
  params: n
}) {
  r.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, e({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  let s, i, o = n && n.autoplay ? n.autoplay.delay : 3e3,
    l = n && n.autoplay ? n.autoplay.delay : 3e3,
    c, d = new Date().getTime,
    p, u, g, h, f, b;

  function m(D) {
    !r || r.destroyed || !r.wrapperEl || D.target === r.wrapperEl && (r.wrapperEl.removeEventListener("transitionend", m), M())
  }
  const v = () => {
      if (r.destroyed || !r.autoplay.running) return;
      r.autoplay.paused ? p = !0 : p && (l = c, p = !1);
      const D = r.autoplay.paused ? c : d + l - new Date().getTime();
      r.autoplay.timeLeft = D, t("autoplayTimeLeft", D, D / o), i = requestAnimationFrame(() => {
        v()
      })
    },
    E = () => {
      let D;
      return r.virtual && r.params.virtual.enabled ? D = r.slides.filter(O => O.classList.contains("swiper-slide-active"))[0] : D = r.slides[r.activeIndex], D ? parseInt(D.getAttribute("data-swiper-autoplay"), 10) : void 0
    },
    $ = D => {
      if (r.destroyed || !r.autoplay.running) return;
      cancelAnimationFrame(i), v();
      let z = typeof D == "undefined" ? r.params.autoplay.delay : D;
      o = r.params.autoplay.delay, l = r.params.autoplay.delay;
      const O = E();
      !Number.isNaN(O) && O > 0 && typeof D == "undefined" && (z = O, o = O, l = O), c = z;
      const L = r.params.speed,
        N = () => {
          !r || r.destroyed || (r.params.autoplay.reverseDirection ? !r.isBeginning || r.params.loop || r.params.rewind ? (r.slidePrev(L, !0, !0), t("autoplay")) : r.params.autoplay.stopOnLastSlide || (r.slideTo(r.slides.length - 1, L, !0, !0), t("autoplay")) : !r.isEnd || r.params.loop || r.params.rewind ? (r.slideNext(L, !0, !0), t("autoplay")) : r.params.autoplay.stopOnLastSlide || (r.slideTo(0, L, !0, !0), t("autoplay")), r.params.cssMode && (d = new Date().getTime(), requestAnimationFrame(() => {
            $()
          })))
        };
      return z > 0 ? (clearTimeout(s), s = setTimeout(() => {
        N()
      }, z)) : requestAnimationFrame(() => {
        N()
      }), z
    },
    w = () => {
      r.autoplay.running = !0, $(), t("autoplayStart")
    },
    C = () => {
      r.autoplay.running = !1, clearTimeout(s), cancelAnimationFrame(i), t("autoplayStop")
    },
    x = (D, z) => {
      if (r.destroyed || !r.autoplay.running) return;
      clearTimeout(s), D || (b = !0);
      const O = () => {
        t("autoplayPause"), r.params.autoplay.waitForTransition ? r.wrapperEl.addEventListener("transitionend", m) : M()
      };
      if (r.autoplay.paused = !0, z) {
        f && (c = r.params.autoplay.delay), f = !1, O();
        return
      }
      c = (c || r.params.autoplay.delay) - (new Date().getTime() - d), !(r.isEnd && c < 0 && !r.params.loop) && (c < 0 && (c = 0), O())
    },
    M = () => {
      r.isEnd && c < 0 && !r.params.loop || r.destroyed || !r.autoplay.running || (d = new Date().getTime(), b ? (b = !1, $(c)) : $(), r.autoplay.paused = !1, t("autoplayResume"))
    },
    A = () => {
      if (r.destroyed || !r.autoplay.running) return;
      const D = ee();
      D.visibilityState === "hidden" && (b = !0, x(!0)), D.visibilityState === "visible" && M()
    },
    B = D => {
      D.pointerType === "mouse" && (b = !0, x(!0))
    },
    S = D => {
      D.pointerType === "mouse" && r.autoplay.paused && M()
    },
    P = () => {
      r.params.autoplay.pauseOnMouseEnter && (r.el.addEventListener("pointerenter", B), r.el.addEventListener("pointerleave", S))
    },
    k = () => {
      r.el.removeEventListener("pointerenter", B), r.el.removeEventListener("pointerleave", S)
    },
    I = () => {
      ee().addEventListener("visibilitychange", A)
    },
    R = () => {
      ee().removeEventListener("visibilitychange", A)
    };
  a("init", () => {
    r.params.autoplay.enabled && (P(), I(), d = new Date().getTime(), w())
  }), a("destroy", () => {
    k(), R(), r.autoplay.running && C()
  }), a("beforeTransitionStart", (D, z, O) => {
    r.destroyed || !r.autoplay.running || (O || !r.params.autoplay.disableOnInteraction ? x(!0, !0) : C())
  }), a("sliderFirstMove", () => {
    if (!(r.destroyed || !r.autoplay.running)) {
      if (r.params.autoplay.disableOnInteraction) {
        C();
        return
      }
      u = !0, g = !1, b = !1, h = setTimeout(() => {
        b = !0, g = !0, x(!0)
      }, 200)
    }
  }), a("touchEnd", () => {
    if (!(r.destroyed || !r.autoplay.running || !u)) {
      if (clearTimeout(h), clearTimeout(s), r.params.autoplay.disableOnInteraction) {
        g = !1, u = !1;
        return
      }
      g && r.params.cssMode && M(), g = !1, u = !1
    }
  }), a("slideChange", () => {
    r.destroyed || !r.autoplay.running || (f = !0)
  }), Object.assign(r.autoplay, {
    start: w,
    stop: C,
    pause: x,
    resume: M
  })
}

function Nd({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let t = !1,
    n = !1;
  r.thumbs = {
    swiper: null
  };

  function s() {
    const l = r.thumbs.swiper;
    if (!l || l.destroyed) return;
    const c = l.clickedIndex,
      d = l.clickedSlide;
    if (d && d.classList.contains(r.params.thumbs.slideThumbActiveClass) || typeof c == "undefined" || c === null) return;
    let p;
    l.params.loop ? p = parseInt(l.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : p = c, r.params.loop ? r.slideToLoop(p) : r.slideTo(p)
  }

  function i() {
    const {
      thumbs: l
    } = r.params;
    if (t) return !1;
    t = !0;
    const c = r.constructor;
    if (l.swiper instanceof c) r.thumbs.swiper = l.swiper, Object.assign(r.thumbs.swiper.originalParams, {
      watchSlidesProgress: !0,
      slideToClickedSlide: !1
    }), Object.assign(r.thumbs.swiper.params, {
      watchSlidesProgress: !0,
      slideToClickedSlide: !1
    }), r.thumbs.swiper.update();
    else if (Ot(l.swiper)) {
      const d = Object.assign({}, l.swiper);
      Object.assign(d, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), r.thumbs.swiper = new c(d), n = !0
    }
    return r.thumbs.swiper.el.classList.add(r.params.thumbs.thumbsContainerClass), r.thumbs.swiper.on("tap", s), !0
  }

  function o(l) {
    const c = r.thumbs.swiper;
    if (!c || c.destroyed) return;
    const d = c.params.slidesPerView === "auto" ? c.slidesPerViewDynamic() : c.params.slidesPerView;
    let p = 1;
    const u = r.params.thumbs.slideThumbActiveClass;
    if (r.params.slidesPerView > 1 && !r.params.centeredSlides && (p = r.params.slidesPerView), r.params.thumbs.multipleActiveThumbs || (p = 1), p = Math.floor(p), c.slides.forEach(f => f.classList.remove(u)), c.params.loop || c.params.virtual && c.params.virtual.enabled)
      for (let f = 0; f < p; f += 1) Te(c.slidesEl, `[data-swiper-slide-index="${r.realIndex+f}"]`).forEach(b => {
        b.classList.add(u)
      });
    else
      for (let f = 0; f < p; f += 1) c.slides[r.realIndex + f] && c.slides[r.realIndex + f].classList.add(u);
    const g = r.params.thumbs.autoScrollOffset,
      h = g && !c.params.loop;
    if (r.realIndex !== c.realIndex || h) {
      const f = c.activeIndex;
      let b, m;
      if (c.params.loop) {
        const v = c.slides.filter(E => E.getAttribute("data-swiper-slide-index") === `${r.realIndex}`)[0];
        b = c.slides.indexOf(v), m = r.activeIndex > r.previousIndex ? "next" : "prev"
      } else b = r.realIndex, m = b > r.previousIndex ? "next" : "prev";
      h && (b += m === "next" ? g : -1 * g), c.visibleSlidesIndexes && c.visibleSlidesIndexes.indexOf(b) < 0 && (c.params.centeredSlides ? b > f ? b = b - Math.floor(d / 2) + 1 : b = b + Math.floor(d / 2) - 1 : b > f && c.params.slidesPerGroup === 1, c.slideTo(b, l ? 0 : void 0))
    }
  }
  a("beforeInit", () => {
    const {
      thumbs: l
    } = r.params;
    if (!(!l || !l.swiper))
      if (typeof l.swiper == "string" || l.swiper instanceof HTMLElement) {
        const c = ee(),
          d = () => {
            const u = typeof l.swiper == "string" ? c.querySelector(l.swiper) : l.swiper;
            if (u && u.swiper) l.swiper = u.swiper, i(), o(!0);
            else if (u) {
              const g = h => {
                l.swiper = h.detail[0], u.removeEventListener("init", g), i(), o(!0), l.swiper.update(), r.update()
              };
              u.addEventListener("init", g)
            }
            return u
          },
          p = () => {
            if (r.destroyed) return;
            d() || requestAnimationFrame(p)
          };
        requestAnimationFrame(p)
      } else i(), o(!0)
  }), a("slideChange update resize observerUpdate", () => {
    o()
  }), a("setTransition", (l, c) => {
    const d = r.thumbs.swiper;
    !d || d.destroyed || d.setTransition(c)
  }), a("beforeDestroy", () => {
    const l = r.thumbs.swiper;
    !l || l.destroyed || n && l.destroy()
  }), Object.assign(r.thumbs, {
    init: i,
    update: o
  })
}

function Yd({
  swiper: r,
  extendParams: e,
  emit: a,
  once: t
}) {
  e({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: .02
    }
  });

  function n() {
    const o = r.getTranslate();
    r.setTranslate(o), r.setTransition(0), r.touchEventsData.velocities.length = 0, r.freeMode.onTouchEnd({
      currentPos: r.rtl ? r.translate : -r.translate
    })
  }

  function s() {
    const {
      touchEventsData: o,
      touches: l
    } = r;
    o.velocities.length === 0 && o.velocities.push({
      position: l[r.isHorizontal() ? "startX" : "startY"],
      time: o.touchStartTime
    }), o.velocities.push({
      position: l[r.isHorizontal() ? "currentX" : "currentY"],
      time: He()
    })
  }

  function i({
    currentPos: o
  }) {
    const {
      params: l,
      wrapperEl: c,
      rtlTranslate: d,
      snapGrid: p,
      touchEventsData: u
    } = r, h = He() - u.touchStartTime;
    if (o < -r.minTranslate()) {
      r.slideTo(r.activeIndex);
      return
    }
    if (o > -r.maxTranslate()) {
      r.slides.length < p.length ? r.slideTo(p.length - 1) : r.slideTo(r.slides.length - 1);
      return
    }
    if (l.freeMode.momentum) {
      if (u.velocities.length > 1) {
        const C = u.velocities.pop(),
          x = u.velocities.pop(),
          M = C.position - x.position,
          A = C.time - x.time;
        r.velocity = M / A, r.velocity /= 2, Math.abs(r.velocity) < l.freeMode.minimumVelocity && (r.velocity = 0), (A > 150 || He() - C.time > 300) && (r.velocity = 0)
      } else r.velocity = 0;
      r.velocity *= l.freeMode.momentumVelocityRatio, u.velocities.length = 0;
      let f = 1e3 * l.freeMode.momentumRatio;
      const b = r.velocity * f;
      let m = r.translate + b;
      d && (m = -m);
      let v = !1,
        E;
      const $ = Math.abs(r.velocity) * 20 * l.freeMode.momentumBounceRatio;
      let w;
      if (m < r.maxTranslate()) l.freeMode.momentumBounce ? (m + r.maxTranslate() < -$ && (m = r.maxTranslate() - $), E = r.maxTranslate(), v = !0, u.allowMomentumBounce = !0) : m = r.maxTranslate(), l.loop && l.centeredSlides && (w = !0);
      else if (m > r.minTranslate()) l.freeMode.momentumBounce ? (m - r.minTranslate() > $ && (m = r.minTranslate() + $), E = r.minTranslate(), v = !0, u.allowMomentumBounce = !0) : m = r.minTranslate(), l.loop && l.centeredSlides && (w = !0);
      else if (l.freeMode.sticky) {
        let C;
        for (let x = 0; x < p.length; x += 1)
          if (p[x] > -m) {
            C = x;
            break
          } Math.abs(p[C] - m) < Math.abs(p[C - 1] - m) || r.swipeDirection === "next" ? m = p[C] : m = p[C - 1], m = -m
      }
      if (w && t("transitionEnd", () => {
          r.loopFix()
        }), r.velocity !== 0) {
        if (d ? f = Math.abs((-m - r.translate) / r.velocity) : f = Math.abs((m - r.translate) / r.velocity), l.freeMode.sticky) {
          const C = Math.abs((d ? -m : m) - r.translate),
            x = r.slidesSizesGrid[r.activeIndex];
          C < x ? f = l.speed : C < 2 * x ? f = l.speed * 1.5 : f = l.speed * 2.5
        }
      } else if (l.freeMode.sticky) {
        r.slideToClosest();
        return
      }
      l.freeMode.momentumBounce && v ? (r.updateProgress(E), r.setTransition(f), r.setTranslate(m), r.transitionStart(!0, r.swipeDirection), r.animating = !0, Lt(c, () => {
        !r || r.destroyed || !u.allowMomentumBounce || (a("momentumBounce"), r.setTransition(l.speed), setTimeout(() => {
          r.setTranslate(E), Lt(c, () => {
            !r || r.destroyed || r.transitionEnd()
          })
        }, 0))
      })) : r.velocity ? (a("_freeModeNoMomentumRelease"), r.updateProgress(m), r.setTransition(f), r.setTranslate(m), r.transitionStart(!0, r.swipeDirection), r.animating || (r.animating = !0, Lt(c, () => {
        !r || r.destroyed || r.transitionEnd()
      }))) : r.updateProgress(m), r.updateActiveIndex(), r.updateSlidesClasses()
    } else if (l.freeMode.sticky) {
      r.slideToClosest();
      return
    } else l.freeMode && a("_freeModeNoMomentumRelease");
    (!l.freeMode.momentum || h >= l.longSwipesMs) && (r.updateProgress(), r.updateActiveIndex(), r.updateSlidesClasses())
  }
  Object.assign(r, {
    freeMode: {
      onTouchStart: n,
      onTouchMove: s,
      onTouchEnd: i
    }
  })
}

function qd({
  swiper: r,
  extendParams: e
}) {
  e({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  let a, t, n;
  const s = l => {
      const {
        slidesPerView: c
      } = r.params, {
        rows: d,
        fill: p
      } = r.params.grid;
      t = a / d, n = Math.floor(l / d), Math.floor(l / d) === l / d ? a = l : a = Math.ceil(l / d) * d, c !== "auto" && p === "row" && (a = Math.max(a, c * d))
    },
    i = (l, c, d, p) => {
      const {
        slidesPerGroup: u,
        spaceBetween: g
      } = r.params, {
        rows: h,
        fill: f
      } = r.params.grid;
      let b, m, v;
      if (f === "row" && u > 1) {
        const E = Math.floor(l / (u * h)),
          $ = l - h * u * E,
          w = E === 0 ? u : Math.min(Math.ceil((d - E * h * u) / h), u);
        v = Math.floor($ / w), m = $ - v * w + E * u, b = m + v * a / h, c.style.order = b
      } else f === "column" ? (m = Math.floor(l / h), v = l - m * h, (m > n || m === n && v === h - 1) && (v += 1, v >= h && (v = 0, m += 1))) : (v = Math.floor(l / t), m = l - v * t);
      c.style[p("margin-top")] = v !== 0 ? g && `${g}px` : ""
    },
    o = (l, c, d) => {
      const {
        spaceBetween: p,
        centeredSlides: u,
        roundLengths: g
      } = r.params, {
        rows: h
      } = r.params.grid;
      if (r.virtualSize = (l + p) * a, r.virtualSize = Math.ceil(r.virtualSize / h) - p, r.wrapperEl.style[d("width")] = `${r.virtualSize+p}px`, u) {
        const f = [];
        for (let b = 0; b < c.length; b += 1) {
          let m = c[b];
          g && (m = Math.floor(m)), c[b] < r.virtualSize + c[0] && f.push(m)
        }
        c.splice(0, c.length), c.push(...f)
      }
    };
  r.grid = {
    initSlides: s,
    updateSlide: i,
    updateWrapperSize: o
  }
}

function jd(r) {
  const e = this,
    {
      params: a,
      slidesEl: t
    } = e;
  a.loop && e.loopDestroy();
  const n = s => {
    if (typeof s == "string") {
      const i = document.createElement("div");
      i.innerHTML = s, t.append(i.children[0]), i.innerHTML = ""
    } else t.append(s)
  };
  if (typeof r == "object" && "length" in r)
    for (let s = 0; s < r.length; s += 1) r[s] && n(r[s]);
  else n(r);
  e.recalcSlides(), a.loop && e.loopCreate(), (!a.observer || e.isElement) && e.update()
}

function Wd(r) {
  const e = this,
    {
      params: a,
      activeIndex: t,
      slidesEl: n
    } = e;
  a.loop && e.loopDestroy();
  let s = t + 1;
  const i = o => {
    if (typeof o == "string") {
      const l = document.createElement("div");
      l.innerHTML = o, n.prepend(l.children[0]), l.innerHTML = ""
    } else n.prepend(o)
  };
  if (typeof r == "object" && "length" in r) {
    for (let o = 0; o < r.length; o += 1) r[o] && i(r[o]);
    s = t + r.length
  } else i(r);
  e.recalcSlides(), a.loop && e.loopCreate(), (!a.observer || e.isElement) && e.update(), e.slideTo(s, 0, !1)
}

function Xd(r, e) {
  const a = this,
    {
      params: t,
      activeIndex: n,
      slidesEl: s
    } = a;
  let i = n;
  t.loop && (i -= a.loopedSlides, a.loopDestroy(), a.recalcSlides());
  const o = a.slides.length;
  if (r <= 0) {
    a.prependSlide(e);
    return
  }
  if (r >= o) {
    a.appendSlide(e);
    return
  }
  let l = i > r ? i + 1 : i;
  const c = [];
  for (let d = o - 1; d >= r; d -= 1) {
    const p = a.slides[d];
    p.remove(), c.unshift(p)
  }
  if (typeof e == "object" && "length" in e) {
    for (let d = 0; d < e.length; d += 1) e[d] && s.append(e[d]);
    l = i > r ? i + e.length : i
  } else s.append(e);
  for (let d = 0; d < c.length; d += 1) s.append(c[d]);
  a.recalcSlides(), t.loop && a.loopCreate(), (!t.observer || a.isElement) && a.update(), t.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1)
}

function Gd(r) {
  const e = this,
    {
      params: a,
      activeIndex: t
    } = e;
  let n = t;
  a.loop && (n -= e.loopedSlides, e.loopDestroy());
  let s = n,
    i;
  if (typeof r == "object" && "length" in r) {
    for (let o = 0; o < r.length; o += 1) i = r[o], e.slides[i] && e.slides[i].remove(), i < s && (s -= 1);
    s = Math.max(s, 0)
  } else i = r, e.slides[i] && e.slides[i].remove(), i < s && (s -= 1), s = Math.max(s, 0);
  e.recalcSlides(), a.loop && e.loopCreate(), (!a.observer || e.isElement) && e.update(), a.loop ? e.slideTo(s + e.loopedSlides, 0, !1) : e.slideTo(s, 0, !1)
}

function Ud() {
  const r = this,
    e = [];
  for (let a = 0; a < r.slides.length; a += 1) e.push(a);
  r.removeSlide(e)
}

function _d({
  swiper: r
}) {
  Object.assign(r, {
    appendSlide: jd.bind(r),
    prependSlide: Wd.bind(r),
    addSlide: Xd.bind(r),
    removeSlide: Gd.bind(r),
    removeAllSlides: Ud.bind(r)
  })
}

function Ct(r) {
  const {
    effect: e,
    swiper: a,
    on: t,
    setTranslate: n,
    setTransition: s,
    overwriteParams: i,
    perspective: o,
    recreateShadows: l,
    getEffectParams: c
  } = r;
  t("beforeInit", () => {
    if (a.params.effect !== e) return;
    a.classNames.push(`${a.params.containerModifierClass}${e}`), o && o() && a.classNames.push(`${a.params.containerModifierClass}3d`);
    const p = i ? i() : {};
    Object.assign(a.params, p), Object.assign(a.originalParams, p)
  }), t("setTranslate", () => {
    a.params.effect === e && n()
  }), t("setTransition", (p, u) => {
    a.params.effect === e && s(u)
  }), t("transitionEnd", () => {
    if (a.params.effect === e && l) {
      if (!c || !c().slideShadows) return;
      a.slides.forEach(p => {
        p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(u => u.remove())
      }), l()
    }
  });
  let d;
  t("virtualUpdate", () => {
    a.params.effect === e && (a.slides.length || (d = !0), requestAnimationFrame(() => {
      d && a.slides && a.slides.length && (n(), d = !1)
    }))
  })
}

function Rt(r, e) {
  const a = ft(e);
  return a !== e && (a.style.backfaceVisibility = "hidden", a.style["-webkit-backface-visibility"] = "hidden"), a
}

function ra({
  swiper: r,
  duration: e,
  transformElements: a,
  allSlides: t
}) {
  const {
    activeIndex: n
  } = r, s = i => i.parentElement ? i.parentElement : r.slides.filter(l => l.shadowEl && l.shadowEl === i.parentNode)[0];
  if (r.params.virtualTranslate && e !== 0) {
    let i = !1,
      o;
    t ? o = a : o = a.filter(l => {
      const c = l.classList.contains("swiper-slide-transform") ? s(l) : l;
      return r.getSlideIndex(c) === n
    }), o.forEach(l => {
      Lt(l, () => {
        if (i || !r || r.destroyed) return;
        i = !0, r.animating = !1;
        const c = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        r.wrapperEl.dispatchEvent(c)
      })
    })
  }
}

function Kd({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    fadeEffect: {
      crossFade: !1
    }
  }), Ct({
    effect: "fade",
    swiper: r,
    on: a,
    setTranslate: () => {
      const {
        slides: s
      } = r, i = r.params.fadeEffect;
      for (let o = 0; o < s.length; o += 1) {
        const l = r.slides[o];
        let d = -l.swiperSlideOffset;
        r.params.virtualTranslate || (d -= r.translate);
        let p = 0;
        r.isHorizontal() || (p = d, d = 0);
        const u = r.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(l.progress), 0) : 1 + Math.min(Math.max(l.progress, -1), 0),
          g = Rt(i, l);
        g.style.opacity = u, g.style.transform = `translate3d(${d}px, ${p}px, 0px)`
      }
    },
    setTransition: s => {
      const i = r.slides.map(o => ft(o));
      i.forEach(o => {
        o.style.transitionDuration = `${s}ms`
      }), ra({
        swiper: r,
        duration: s,
        transformElements: i,
        allSlides: !0
      })
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !r.params.cssMode
    })
  })
}

function Qd({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: .94
    }
  });
  const t = (o, l, c) => {
    let d = c ? o.querySelector(".swiper-slide-shadow-left") : o.querySelector(".swiper-slide-shadow-top"),
      p = c ? o.querySelector(".swiper-slide-shadow-right") : o.querySelector(".swiper-slide-shadow-bottom");
    d || (d = Fe("div", `swiper-slide-shadow-${c?"left":"top"}`), o.append(d)), p || (p = Fe("div", `swiper-slide-shadow-${c?"right":"bottom"}`), o.append(p)), d && (d.style.opacity = Math.max(-l, 0)), p && (p.style.opacity = Math.max(l, 0))
  };
  Ct({
    effect: "cube",
    swiper: r,
    on: a,
    setTranslate: () => {
      const {
        el: o,
        wrapperEl: l,
        slides: c,
        width: d,
        height: p,
        rtlTranslate: u,
        size: g,
        browser: h
      } = r, f = r.params.cubeEffect, b = r.isHorizontal(), m = r.virtual && r.params.virtual.enabled;
      let v = 0,
        E;
      f.shadow && (b ? (E = r.slidesEl.querySelector(".swiper-cube-shadow"), E || (E = Fe("div", "swiper-cube-shadow"), r.slidesEl.append(E)), E.style.height = `${d}px`) : (E = o.querySelector(".swiper-cube-shadow"), E || (E = Fe("div", "swiper-cube-shadow"), o.append(E))));
      for (let w = 0; w < c.length; w += 1) {
        const C = c[w];
        let x = w;
        m && (x = parseInt(C.getAttribute("data-swiper-slide-index"), 10));
        let M = x * 90,
          A = Math.floor(M / 360);
        u && (M = -M, A = Math.floor(-M / 360));
        const B = Math.max(Math.min(C.progress, 1), -1);
        let S = 0,
          P = 0,
          k = 0;
        x % 4 == 0 ? (S = -A * 4 * g, k = 0) : (x - 1) % 4 == 0 ? (S = 0, k = -A * 4 * g) : (x - 2) % 4 == 0 ? (S = g + A * 4 * g, k = g) : (x - 3) % 4 == 0 && (S = -g, k = 3 * g + g * 4 * A), u && (S = -S), b || (P = S, S = 0);
        const I = `rotateX(${b?0:-M}deg) rotateY(${b?M:0}deg) translate3d(${S}px, ${P}px, ${k}px)`;
        B <= 1 && B > -1 && (v = x * 90 + B * 90, u && (v = -x * 90 - B * 90)), C.style.transform = I, f.slideShadows && t(C, B, b)
      }
      if (l.style.transformOrigin = `50% 50% -${g/2}px`, l.style["-webkit-transform-origin"] = `50% 50% -${g/2}px`, f.shadow)
        if (b) E.style.transform = `translate3d(0px, ${d/2+f.shadowOffset}px, ${-d/2}px) rotateX(90deg) rotateZ(0deg) scale(${f.shadowScale})`;
        else {
          const w = Math.abs(v) - Math.floor(Math.abs(v) / 90) * 90,
            C = 1.5 - (Math.sin(w * 2 * Math.PI / 360) / 2 + Math.cos(w * 2 * Math.PI / 360) / 2),
            x = f.shadowScale,
            M = f.shadowScale / C,
            A = f.shadowOffset;
          E.style.transform = `scale3d(${x}, 1, ${M}) translate3d(0px, ${p/2+A}px, ${-p/2/M}px) rotateX(-90deg)`
        } const $ = (h.isSafari || h.isWebView) && h.needPerspectiveFix ? -g / 2 : 0;
      l.style.transform = `translate3d(0px,0,${$}px) rotateX(${r.isHorizontal()?0:v}deg) rotateY(${r.isHorizontal()?-v:0}deg)`, l.style.setProperty("--swiper-cube-translate-z", `${$}px`)
    },
    setTransition: o => {
      const {
        el: l,
        slides: c
      } = r;
      if (c.forEach(d => {
          d.style.transitionDuration = `${o}ms`, d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(p => {
            p.style.transitionDuration = `${o}ms`
          })
        }), r.params.cubeEffect.shadow && !r.isHorizontal()) {
        const d = l.querySelector(".swiper-cube-shadow");
        d && (d.style.transitionDuration = `${o}ms`)
      }
    },
    recreateShadows: () => {
      const o = r.isHorizontal();
      r.slides.forEach(l => {
        const c = Math.max(Math.min(l.progress, 1), -1);
        t(l, c, o)
      })
    },
    getEffectParams: () => r.params.cubeEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: !1,
      virtualTranslate: !0
    })
  })
}

function $t(r, e, a) {
  const t = `swiper-slide-shadow${a?`-${a}`:""}`,
    n = ft(e);
  let s = n.querySelector(`.${t}`);
  return s || (s = Fe("div", `swiper-slide-shadow${a?`-${a}`:""}`), n.append(s)), s
}

function Zd({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    flipEffect: {
      slideShadows: !0,
      limitRotation: !0
    }
  });
  const t = (o, l, c) => {
    let d = r.isHorizontal() ? o.querySelector(".swiper-slide-shadow-left") : o.querySelector(".swiper-slide-shadow-top"),
      p = r.isHorizontal() ? o.querySelector(".swiper-slide-shadow-right") : o.querySelector(".swiper-slide-shadow-bottom");
    d || (d = $t(c, o, r.isHorizontal() ? "left" : "top")), p || (p = $t(c, o, r.isHorizontal() ? "right" : "bottom")), d && (d.style.opacity = Math.max(-l, 0)), p && (p.style.opacity = Math.max(l, 0))
  };
  Ct({
    effect: "flip",
    swiper: r,
    on: a,
    setTranslate: () => {
      const {
        slides: o,
        rtlTranslate: l
      } = r, c = r.params.flipEffect;
      for (let d = 0; d < o.length; d += 1) {
        const p = o[d];
        let u = p.progress;
        r.params.flipEffect.limitRotation && (u = Math.max(Math.min(p.progress, 1), -1));
        const g = p.swiperSlideOffset;
        let f = -180 * u,
          b = 0,
          m = r.params.cssMode ? -g - r.translate : -g,
          v = 0;
        r.isHorizontal() ? l && (f = -f) : (v = m, m = 0, b = -f, f = 0), p.style.zIndex = -Math.abs(Math.round(u)) + o.length, c.slideShadows && t(p, u, c);
        const E = `translate3d(${m}px, ${v}px, 0px) rotateX(${b}deg) rotateY(${f}deg)`,
          $ = Rt(c, p);
        $.style.transform = E
      }
    },
    setTransition: o => {
      const l = r.slides.map(c => ft(c));
      l.forEach(c => {
        c.style.transitionDuration = `${o}ms`, c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(d => {
          d.style.transitionDuration = `${o}ms`
        })
      }), ra({
        swiper: r,
        duration: o,
        transformElements: l
      })
    },
    recreateShadows: () => {
      const o = r.params.flipEffect;
      r.slides.forEach(l => {
        let c = l.progress;
        r.params.flipEffect.limitRotation && (c = Math.max(Math.min(l.progress, 1), -1)), t(l, c, o)
      })
    },
    getEffectParams: () => r.params.flipEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !r.params.cssMode
    })
  })
}

function Jd({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0
    }
  }), Ct({
    effect: "coverflow",
    swiper: r,
    on: a,
    setTranslate: () => {
      const {
        width: s,
        height: i,
        slides: o,
        slidesSizesGrid: l
      } = r, c = r.params.coverflowEffect, d = r.isHorizontal(), p = r.translate, u = d ? -p + s / 2 : -p + i / 2, g = d ? c.rotate : -c.rotate, h = c.depth;
      for (let f = 0, b = o.length; f < b; f += 1) {
        const m = o[f],
          v = l[f],
          E = m.swiperSlideOffset,
          $ = (u - E - v / 2) / v,
          w = typeof c.modifier == "function" ? c.modifier($) : $ * c.modifier;
        let C = d ? g * w : 0,
          x = d ? 0 : g * w,
          M = -h * Math.abs(w),
          A = c.stretch;
        typeof A == "string" && A.indexOf("%") !== -1 && (A = parseFloat(c.stretch) / 100 * v);
        let B = d ? 0 : A * w,
          S = d ? A * w : 0,
          P = 1 - (1 - c.scale) * Math.abs(w);
        Math.abs(S) < .001 && (S = 0), Math.abs(B) < .001 && (B = 0), Math.abs(M) < .001 && (M = 0), Math.abs(C) < .001 && (C = 0), Math.abs(x) < .001 && (x = 0), Math.abs(P) < .001 && (P = 0);
        const k = `translate3d(${S}px,${B}px,${M}px)  rotateX(${x}deg) rotateY(${C}deg) scale(${P})`,
          I = Rt(c, m);
        if (I.style.transform = k, m.style.zIndex = -Math.abs(Math.round(w)) + 1, c.slideShadows) {
          let R = d ? m.querySelector(".swiper-slide-shadow-left") : m.querySelector(".swiper-slide-shadow-top"),
            D = d ? m.querySelector(".swiper-slide-shadow-right") : m.querySelector(".swiper-slide-shadow-bottom");
          R || (R = $t(c, m, d ? "left" : "top")), D || (D = $t(c, m, d ? "right" : "bottom")), R && (R.style.opacity = w > 0 ? w : 0), D && (D.style.opacity = -w > 0 ? -w : 0)
        }
      }
    },
    setTransition: s => {
      r.slides.map(o => ft(o)).forEach(o => {
        o.style.transitionDuration = `${s}ms`, o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(l => {
          l.style.transitionDuration = `${s}ms`
        })
      })
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0
    })
  })
}

function ep({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const t = i => typeof i == "string" ? i : `${i}px`;
  Ct({
    effect: "creative",
    swiper: r,
    on: a,
    setTranslate: () => {
      const {
        slides: i,
        wrapperEl: o,
        slidesSizesGrid: l
      } = r, c = r.params.creativeEffect, {
        progressMultiplier: d
      } = c, p = r.params.centeredSlides;
      if (p) {
        const u = l[0] / 2 - r.params.slidesOffsetBefore || 0;
        o.style.transform = `translateX(calc(50% - ${u}px))`
      }
      for (let u = 0; u < i.length; u += 1) {
        const g = i[u],
          h = g.progress,
          f = Math.min(Math.max(g.progress, -c.limitProgress), c.limitProgress);
        let b = f;
        p || (b = Math.min(Math.max(g.originalProgress, -c.limitProgress), c.limitProgress));
        const m = g.swiperSlideOffset,
          v = [r.params.cssMode ? -m - r.translate : -m, 0, 0],
          E = [0, 0, 0];
        let $ = !1;
        r.isHorizontal() || (v[1] = v[0], v[0] = 0);
        let w = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        f < 0 ? (w = c.next, $ = !0) : f > 0 && (w = c.prev, $ = !0), v.forEach((P, k) => {
          v[k] = `calc(${P}px + (${t(w.translate[k])} * ${Math.abs(f*d)}))`
        }), E.forEach((P, k) => {
          E[k] = w.rotate[k] * Math.abs(f * d)
        }), g.style.zIndex = -Math.abs(Math.round(h)) + i.length;
        const C = v.join(", "),
          x = `rotateX(${E[0]}deg) rotateY(${E[1]}deg) rotateZ(${E[2]}deg)`,
          M = b < 0 ? `scale(${1+(1-w.scale)*b*d})` : `scale(${1-(1-w.scale)*b*d})`,
          A = b < 0 ? 1 + (1 - w.opacity) * b * d : 1 - (1 - w.opacity) * b * d,
          B = `translate3d(${C}) ${x} ${M}`;
        if ($ && w.shadow || !$) {
          let P = g.querySelector(".swiper-slide-shadow");
          if (!P && w.shadow && (P = $t(c, g)), P) {
            const k = c.shadowPerProgress ? f * (1 / c.limitProgress) : f;
            P.style.opacity = Math.min(Math.max(Math.abs(k), 0), 1)
          }
        }
        const S = Rt(c, g);
        S.style.transform = B, S.style.opacity = A, w.origin && (S.style.transformOrigin = w.origin)
      }
    },
    setTransition: i => {
      const o = r.slides.map(l => ft(l));
      o.forEach(l => {
        l.style.transitionDuration = `${i}ms`, l.querySelectorAll(".swiper-slide-shadow").forEach(c => {
          c.style.transitionDuration = `${i}ms`
        })
      }), ra({
        swiper: r,
        duration: i,
        transformElements: o,
        allSlides: !0
      })
    },
    perspective: () => r.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !r.params.cssMode
    })
  })
}

function tp({
  swiper: r,
  extendParams: e,
  on: a
}) {
  e({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  }), Ct({
    effect: "cards",
    swiper: r,
    on: a,
    setTranslate: () => {
      const {
        slides: s,
        activeIndex: i
      } = r, o = r.params.cardsEffect, {
        startTranslate: l,
        isTouched: c
      } = r.touchEventsData, d = r.translate;
      for (let p = 0; p < s.length; p += 1) {
        const u = s[p],
          g = u.progress,
          h = Math.min(Math.max(g, -4), 4);
        let f = u.swiperSlideOffset;
        r.params.centeredSlides && !r.params.cssMode && (r.wrapperEl.style.transform = `translateX(${r.minTranslate()}px)`), r.params.centeredSlides && r.params.cssMode && (f -= s[0].swiperSlideOffset);
        let b = r.params.cssMode ? -f - r.translate : -f,
          m = 0;
        const v = -100 * Math.abs(h);
        let E = 1,
          $ = -o.perSlideRotate * h,
          w = o.perSlideOffset - Math.abs(h) * .75;
        const C = r.virtual && r.params.virtual.enabled ? r.virtual.from + p : p,
          x = (C === i || C === i - 1) && h > 0 && h < 1 && (c || r.params.cssMode) && d < l,
          M = (C === i || C === i + 1) && h < 0 && h > -1 && (c || r.params.cssMode) && d > l;
        if (x || M) {
          const P = (1 - Math.abs((Math.abs(h) - .5) / .5)) ** .5;
          $ += -28 * h * P, E += -.5 * P, w += 96 * P, m = `${-25*P*Math.abs(h)}%`
        }
        if (h < 0 ? b = `calc(${b}px + (${w*Math.abs(h)}%))` : h > 0 ? b = `calc(${b}px + (-${w*Math.abs(h)}%))` : b = `${b}px`, !r.isHorizontal()) {
          const P = m;
          m = b, b = P
        }
        const A = h < 0 ? `${1+(1-E)*h}` : `${1-(1-E)*h}`,
          B = `
        translate3d(${b}, ${m}, ${v}px)
        rotateZ(${o.rotate?$:0}deg)
        scale(${A})
      `;
        if (o.slideShadows) {
          let P = u.querySelector(".swiper-slide-shadow");
          P || (P = $t(o, u)), P && (P.style.opacity = Math.min(Math.max((Math.abs(h) - .5) / .5, 0), 1))
        }
        u.style.zIndex = -Math.abs(Math.round(g)) + s.length;
        const S = Rt(o, u);
        S.style.transform = B
      }
    },
    setTransition: s => {
      const i = r.slides.map(o => ft(o));
      i.forEach(o => {
        o.style.transitionDuration = `${s}ms`, o.querySelectorAll(".swiper-slide-shadow").forEach(l => {
          l.style.transitionDuration = `${s}ms`
        })
      }), ra({
        swiper: r,
        duration: s,
        transformElements: i
      })
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !r.params.cssMode
    })
  })
}
const ap = [Md, Pd, Ad, Id, Od, Bd, Dd, Ld, Rd, Hd, zd, Fd, Vd, Nd, Yd, qd, _d, Kd, Qd, Zd, Jd, ep, tp];
aa.use(ap);
const na = ["eventsPrefix", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control", "injectStyles", "injectStylesUrls"];

function sa(r) {
  return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object"
}

function ia(r, e) {
  const a = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter(t => a.indexOf(t) < 0).forEach(t => {
    typeof r[t] == "undefined" ? r[t] = e[t] : sa(e[t]) && sa(r[t]) && Object.keys(e[t]).length > 0 ? e[t].__swiper__ ? r[t] = e[t] : ia(r[t], e[t]) : r[t] = e[t]
  })
}

function rp(r = {}) {
  return r.navigation && typeof r.navigation.nextEl == "undefined" && typeof r.navigation.prevEl == "undefined"
}

function np(r = {}) {
  return r.pagination && typeof r.pagination.el == "undefined"
}

function sp(r = {}) {
  return r.scrollbar && typeof r.scrollbar.el == "undefined"
}

function oa(r = "") {
  return r.replace(/-[a-z]/g, e => e.toUpperCase().replace("-", ""))
}
const hn = r => {
    if (parseFloat(r) === Number(r)) return Number(r);
    if (r === "true" || r === "") return !0;
    if (r === "false") return !1;
    if (r === "null") return null;
    if (r !== "undefined") return r
  },
  mn = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];

function gn(r) {
  const e = {},
    a = {};
  ia(e, qa);
  const t = [...na, "on"],
    n = t.map(s => s.replace(/_/, ""));
  return t.forEach(s => {
    s = s.replace("_", ""), typeof r[s] != "undefined" && (a[s] = r[s])
  }), [...r.attributes].forEach(s => {
    const i = mn.filter(o => s.name.indexOf(`${o}-`) === 0)[0];
    if (i) {
      const o = oa(i),
        l = oa(s.name.split(`${i}-`)[1]);
      a[o] || (a[o] = {}), a[o] === !0 && (a[o] = {
        enabled: !0
      }), a[o][l] = hn(s.value)
    } else {
      const o = oa(s.name);
      if (!n.includes(o)) return;
      const l = hn(s.value);
      a[o] && mn.includes(s.name) ? (a[o].constructor !== Object && (a[o] = {}), a[o].enabled = l) : a[o] = l
    }
  }), ia(e, a), e.navigation ? e.navigation = Ee({
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next"
  }, e.navigation !== !0 ? e.navigation : {}) : e.navigation === !1 && delete e.navigation, e.scrollbar ? e.scrollbar = Ee({
    el: ".swiper-scrollbar"
  }, e.scrollbar !== !0 ? e.scrollbar : {}) : e.scrollbar === !1 && delete e.scrollbar, e.pagination ? e.pagination = Ee({
    el: ".swiper-pagination"
  }, e.pagination !== !0 ? e.pagination : {}) : e.pagination === !1 && delete e.pagination, {
    params: e,
    passedParams: a
  }
}

function ip({
  swiper: r,
  slides: e,
  passedParams: a,
  changedParams: t,
  nextEl: n,
  prevEl: s,
  scrollbarEl: i,
  paginationEl: o
}) {
  const l = t.filter(M => M !== "children" && M !== "direction" && M !== "wrapperClass"),
    {
      params: c,
      pagination: d,
      navigation: p,
      scrollbar: u,
      virtual: g,
      thumbs: h
    } = r;
  let f, b, m, v, E, $, w, C;
  t.includes("thumbs") && a.thumbs && a.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (f = !0), t.includes("controller") && a.controller && a.controller.control && c.controller && !c.controller.control && (b = !0), t.includes("pagination") && a.pagination && (a.pagination.el || o) && (c.pagination || c.pagination === !1) && d && !d.el && (m = !0), t.includes("scrollbar") && a.scrollbar && (a.scrollbar.el || i) && (c.scrollbar || c.scrollbar === !1) && u && !u.el && (v = !0), t.includes("navigation") && a.navigation && (a.navigation.prevEl || s) && (a.navigation.nextEl || n) && (c.navigation || c.navigation === !1) && p && !p.prevEl && !p.nextEl && (E = !0);
  const x = M => {
    !r[M] || (r[M].destroy(), M === "navigation" ? (r.isElement && (r[M].prevEl.remove(), r[M].nextEl.remove()), c[M].prevEl = void 0, c[M].nextEl = void 0, r[M].prevEl = void 0, r[M].nextEl = void 0) : (r.isElement && r[M].el.remove(), c[M].el = void 0, r[M].el = void 0))
  };
  t.includes("loop") && r.isElement && (c.loop && !a.loop ? $ = !0 : !c.loop && a.loop ? w = !0 : C = !0), l.forEach(M => {
    if (sa(c[M]) && sa(a[M])) ia(c[M], a[M]);
    else {
      const A = a[M];
      (A === !0 || A === !1) && (M === "navigation" || M === "pagination" || M === "scrollbar") ? A === !1 && x(M): c[M] = a[M]
    }
  }), l.includes("controller") && !b && r.controller && r.controller.control && c.controller && c.controller.control && (r.controller.control = c.controller.control), t.includes("children") && e && g && c.virtual.enabled && (g.slides = e, g.update(!0)), t.includes("children") && e && c.loop && (C = !0), f && h.init() && h.update(!0), b && (r.controller.control = c.controller.control), m && (r.isElement && (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-pagination"), r.el.shadowEl.appendChild(o)), o && (c.pagination.el = o), d.init(), d.render(), d.update()), v && (r.isElement && (!i || typeof i == "string") && (i = document.createElement("div"), i.classList.add("swiper-scrollbar"), r.el.shadowEl.appendChild(i)), i && (c.scrollbar.el = i), u.init(), u.updateSize(), u.setTranslate()), E && (r.isElement && ((!n || typeof n == "string") && (n = document.createElement("div"), n.classList.add("swiper-button-next"), r.el.shadowEl.appendChild(n)), (!s || typeof s == "string") && (s = document.createElement("div"), s.classList.add("swiper-button-prev"), r.el.shadowEl.appendChild(s))), n && (c.navigation.nextEl = n), s && (c.navigation.prevEl = s), p.init(), p.update()), t.includes("allowSlideNext") && (r.allowSlideNext = a.allowSlideNext), t.includes("allowSlidePrev") && (r.allowSlidePrev = a.allowSlidePrev), t.includes("direction") && r.changeDirection(a.direction, !1), ($ || C) && r.loopDestroy(), (w || C) && r.loopCreate(), r.update()
}
const op = "@font-face{font-family:swiper-icons;src:url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');font-weight:400;font-style:normal}",
  lp = ":root{--swiper-theme-color:#007aff}.swiper,swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}:host(.swiper-vertical)>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android swiper-slide,.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}.swiper-slide-invisible-blank{visibility:hidden}.swiper-autoheight,.swiper-autoheight swiper-slide{height:auto}:host(.swiper-autoheight) .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden swiper-slide{transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}:host(.swiper-3d.swiper-css-mode) .swiper-wrapper{perspective:1200px}:host(.swiper-3d) .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top,.swiper-3d swiper-slide{transform-style:preserve-3d}.swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper-slide-shadow-left,.swiper-3d .swiper-slide-shadow-right,.swiper-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-3d .swiper-slide-shadow{background:rgba(0,0,0,.15)}.swiper-3d .swiper-slide-shadow-left{background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-right{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-top{background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}:host(.swiper-css-mode)>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}:host(.swiper-css-mode)>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode>swiper-slide{scroll-snap-align:start start}:host(.swiper-horizontal.swiper-css-mode)>.swiper-wrapper{scroll-snap-type:x mandatory}:host(.swiper-vertical.swiper-css-mode)>.swiper-wrapper{scroll-snap-type:y mandatory}:host(.swiper-centered)>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-centered>swiper-slide{scroll-snap-align:center center;scroll-snap-stop:always}.swiper-centered.swiper-horizontal>swiper-slide:first-child{margin-inline-start:var(--swiper-centered-offset-before)}:host(.swiper-centered.swiper-horizontal)>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-centered.swiper-vertical>swiper-slide:first-child{margin-block-start:var(--swiper-centered-offset-before)}:host(.swiper-centered.swiper-vertical)>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader,.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,swiper-container:not(.swiper-watch-progress) .swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.swiper-virtual swiper-slide{-webkit-backface-visibility:hidden;transform:translateZ(0)}:host(.swiper-virtual.swiper-css-mode) .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}:host(.swiper-virtual.swiper-css-mode.swiper-horizontal) .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}:host(.swiper-virtual.swiper-css-mode.swiper-vertical) .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;font-variant:initial;line-height:1}.swiper-button-prev,:host(.swiper-rtl) .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-prev:after,:host(.swiper-rtl) .swiper-button-next:after{content:'prev'}.swiper-button-next,:host(.swiper-rtl) .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-next:after,:host(.swiper-rtl) .swiper-button-prev:after{content:'next'}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,:host(.swiper-horizontal.swiper-rtl) .swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}:host(.swiper-rtl) .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;-ms-touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move;touch-action:none}.swiper .swiper-notification,swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}:host(.swiper-free-mode)>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}:host(.swiper-grid)>.swiper-wrapper{flex-wrap:wrap}:host(.swiper-grid-column)>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode swiper-slide{transition-timing-function:ease-out}.swiper-fade swiper-slide{pointer-events:none;transition-property:opacity}.swiper-fade swiper-slide swiper-slide{pointer-events:none}.swiper-fade .swiper-slide-active,.swiper-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube swiper-slide swiper-slide{pointer-events:none}.swiper-cube.swiper-rtl swiper-slide{transform-origin:100% 0}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-cube .swiper-slide-active,.swiper-cube .swiper-slide-next,.swiper-cube .swiper-slide-prev,.swiper-cube swiper-slide-next+swiper-slide{pointer-events:auto;visibility:visible}.swiper-cube .swiper-slide-shadow-bottom,.swiper-cube .swiper-slide-shadow-left,.swiper-cube .swiper-slide-shadow-right,.swiper-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-flip{overflow:visible}.swiper-flip swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip swiper-slide swiper-slide{pointer-events:none}.swiper-flip .swiper-slide-active,.swiper-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-flip .swiper-slide-shadow-bottom,.swiper-flip .swiper-slide-shadow-left,.swiper-flip .swiper-slide-shadow-right,.swiper-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-creative swiper-slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards swiper-slide{transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}";
let la = !0;
const Ga = (r, e) => {
  let a = document.querySelector("style#swiper-element-styles");
  const t = a && a.preInit && !r;
  !r && e && e.cssLinks().forEach(n => {
    const s = document.createElement("link");
    s.rel = "stylesheet", s.href = n, document.head.prepend(s)
  }), (!a || t) && (a = a || document.createElement("style"), a.textContent = [op, e ? e.cssStyles() : ""].join(`
`), a.id = "swiper-element-styles", a.preInit = r, document.head.prepend(a))
};
class cp {}
const vn = typeof window == "undefined" || typeof HTMLElement == "undefined" ? cp : HTMLElement;
class bn extends vn {
  constructor() {
    super();
    this.tempDiv = document.createElement("div"), this.shadowEl = this.attachShadow({
      mode: "open"
    })
  }
  cssStyles() {
    return [la ? lp : "", ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []].join(`
`)
  }
  cssLinks() {
    return this.injectStylesUrls || []
  }
  render() {
    la && Ga(!1, this);
    const e = this.cssStyles();
    e.length && (this.stylesEl = document.createElement("style"), this.stylesEl.textContent = e, this.shadowEl.appendChild(this.stylesEl)), this.cssLinks().forEach(a => {
      if (document.querySelector(`link[href="${a}"]`)) return;
      const n = document.createElement("link");
      n.rel = "stylesheet", n.href = a, this.shadowEl.appendChild(n)
    }), this.tempDiv.innerHTML = `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <slot name="container-end"></slot>
      ${rp(this.passedParams)?`
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      `:""}
      ${np(this.passedParams)?`
        <div class="swiper-pagination"></div>
      `:""}
      ${sp(this.passedParams)?`
        <div class="swiper-scrollbar"></div>
      `:""}
    `, [...this.tempDiv.children].forEach(a => {
      this.shadowEl.appendChild(a)
    })
  }
  initialize() {
    if (this.initialized) return;
    this.initialized = !0;
    const {
      params: e,
      passedParams: a
    } = gn(this);
    this.swiperParams = e, this.passedParams = a, delete this.swiperParams.init, this.render(), this.swiper = new aa(this, Ht(Ee(Ht(Ee({}, e), {
      touchEventsTarget: "container"
    }), e.virtual ? {} : {
      observer: !0
    }), {
      onAny: (t, ...n) => {
        const s = e.eventsPrefix ? `${e.eventsPrefix}${t.toLowerCase()}` : t.toLowerCase(),
          i = new CustomEvent(s, {
            detail: n,
            bubbles: !0,
            cancelable: !0
          });
        this.dispatchEvent(i)
      }
    }))
  }
  connectedCallback() {
    if (this.init === !1 || this.getAttribute("init") === "false") {
      Ga(!0, this);
      return
    }
    this.initialize()
  }
  disconnectedCallback() {
    this.swiper && this.swiper.destroy && this.swiper.destroy(), this.initialized = !1
  }
  updateSwiperOnPropChange(e) {
    const {
      params: a,
      passedParams: t
    } = gn(this);
    this.passedParams = t, this.swiperParams = a, ip(Ee(Ee(Ee({
      swiper: this.swiper,
      passedParams: this.passedParams,
      changedParams: [oa(e)]
    }, e === "navigation" && t[e] ? {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    } : {}), e === "pagination" && t[e] ? {
      paginationEl: ".swiper-pagination"
    } : {}), e === "scrollbar" && t[e] ? {
      scrollbarEl: ".swiper-scrollbar"
    } : {}))
  }
  attributeChangedCallback(e, a, t) {
    !this.initialized || this.updateSwiperOnPropChange(e, t)
  }
  static get observedAttributes() {
    return na.filter(a => a.includes("_")).map(a => a.replace(/[A-Z]/g, t => `-${t}`).replace("_", "").toLowerCase())
  }
}
na.forEach(r => {
  r !== "init" && (r = r.replace("_", ""), Object.defineProperty(bn.prototype, r, {
    get() {
      return (this.passedParams || {})[r]
    },
    set(e) {
      this.passedParams || (this.passedParams = {}), this.passedParams[r] = e, !!this.initialized && this.updateSwiperOnPropChange(r, e)
    }
  }))
});
class dp extends vn {
  constructor() {
    super();
    this.tempDiv = document.createElement("div"), this.shadowEl = this.attachShadow({
      mode: "open"
    })
  }
  render() {
    const e = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
    if (this.tempDiv.innerHTML = "<slot />", [...this.tempDiv.children].forEach(a => {
        this.shadowEl.appendChild(a)
      }), e) {
      const a = document.createElement("div");
      a.classList.add("swiper-lazy-preloader"), this.appendChild(a)
    }
  }
  initialize() {
    this.render()
  }
  connectedCallback() {
    this.initialize()
  }
}
const pp = (r = !0) => {
  typeof window != "undefined" && (r || (la = !1), la && Ga(!0), window.customElements.get("swiper-container") || window.customElements.define("swiper-container", bn), window.customElements.get("swiper-slide") || window.customElements.define("swiper-slide", dp))
};
typeof window != "undefined" && (window.SwiperElementRegisterParams = r => {
  na.push(...r)
});
pp();

function Ua(r) {
  const e = this,
    a = y(r);
  if (a.length === 0) return;
  const t = a[0].swiper && a[0].swiper.isElement;
  if (a[0].swiper && !a[0].swiper.isElement) return;
  let n, s = {},
    i, o;
  a.hasClass("tabs") && (n = a.children("swiper-slide").indexOf(a.children(".tab-active")[0]), i = !0, o = a.find(".tabs-routable").length > 0), a.attr("data-swiper") ? s = JSON.parse(a.attr("data-swiper")) : a[0].f7SwiperParams ? s = a[0].f7SwiperParams : (s = a.dataset(), Object.keys(s).forEach(p => {
    const u = s[p];
    if (typeof u == "string" && u.indexOf("{") === 0 && u.indexOf("}") > 0) try {
      s[p] = JSON.parse(u)
    } catch {}
  })), typeof s.initialSlide == "undefined" && typeof n != "undefined" && (s.initialSlide = n);
  const l = t ? a[0].swiper : e.swiper.create(a[0], s);
  t && l.slideTo(n, 0);

  function c() {
    l.update()
  }
  const d = a.parents(".tab").filter(p => y(p).parent(".tabs").parent(".tabs-animated-wrap, swiper-container.tabs").length === 0).eq(0);
  a.parents(".popup, .login-screen, .sheet-modal, .popover").on("modal:open", c), a.parents(".panel").on("panel:open", c), d && d.length && d.on("tab:show", c), l.on("beforeDestroy", () => {
    a.parents(".popup, .login-screen, .sheet-modal, .popover").off("modal:open", c), a.parents(".panel").off("panel:open", c), d && d.length && d.off("tab:show", c)
  }), i && l.on("slideChange", () => {
    if (o) {
      let p = e.views.get(a.parents(".view"));
      p || (p = e.views.main);
      const u = p.router,
        g = u.findTabRouteUrl(y(l.slides).eq(l.activeIndex)[0]);
      g && setTimeout(() => {
        u.navigate(g)
      }, 0)
    } else e.tab.show({
      tabEl: y(l.slides).eq(l.activeIndex)
    })
  })
}
var bu = {
  name: "swiper",
  static: {
    Swiper: aa
  },
  create() {
    const r = this;
    r.swiper = xe({
      defaultSelector: ".swiper",
      constructor: aa,
      domProp: "swiper"
    })
  },
  on: {
    pageMounted(r) {
      const e = this;
      r.$el.find("swiper-container.tabs").each(a => {
        Ua.call(e, a)
      })
    },
    pageInit(r) {
      const e = this;
      r.$el.find("swiper-container.tabs").each(a => {
        Ua.call(e, a)
      })
    },
    pageReinit(r) {
      const e = this;
      r.$el.find("swiper-container.tabs").each(a => {
        const t = e.swiper.get(a);
        t && t.update && t.update()
      })
    },
    tabMounted(r) {
      const e = this;
      y(r).find("swiper-container.tabs").each(a => {
        Ua.call(e, a)
      })
    },
    tabShow(r) {
      const e = this;
      y(r).find("swiper-container.tabs").each(a => {
        const t = e.swiper.get(a);
        t && t.update && t.update()
      })
    },
    tabBeforeRemove(r) {
      const e = this;
      y(r).find("swiper-container.tabs").each(a => {
        e.swiper.destroy(a)
      })
    }
  }
};
class up extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this;
    t.app = e;
    const n = H({
      on: {}
    }, e.params.photoBrowser);
    t.useModulesParams(n), t.params = H(n, a), H(t, {
      exposed: !1,
      opened: !1,
      activeIndex: t.params.swiper.initialSlide,
      url: t.params.url,
      swipeToClose: {
        allow: !0,
        isTouched: !1,
        diff: void 0,
        start: void 0,
        current: void 0,
        started: !1,
        activeSlide: void 0,
        timeStart: void 0
      }
    }), t.useModules(), t.init()
  }
  get view() {
    const {
      params: e,
      app: a
    } = this;
    return e.view || a.views.main
  }
  onSlideChange(e) {
    const a = this;
    a.activeIndex = e.activeIndex;
    let t = e.activeIndex + 1,
      n = a.params.virtualSlides ? a.params.photos.length : e.slides.length;
    e.params.loop && (n -= 2, t -= e.loopedSlides, t < 1 && (t = n + t), t > n && (t -= n));
    const s = a.params.virtualSlides ? y(e.wrapperEl).find(`.swiper-slide[data-swiper-slide-index="${e.activeIndex}"]`) : y(e.slides).eq(e.activeIndex),
      i = a.params.virtualSlides ? y(e.wrapperEl).find(`.swiper-slide[data-swiper-slide-index="${e.previousIndex}"]`) : y(e.slides).eq(e.previousIndex);
    let o = a.$el.find(".photo-browser-current"),
      l = a.$el.find(".photo-browser-total"),
      c;
    if (a.params.type === "page" && a.params.navbar && o.length === 0 && a.app.theme === "ios" && (c = a.app.navbar.getElByPage(a.$el), c && (o = y(c).find(".photo-browser-current"), l = y(c).find(".photo-browser-total"))), o.length && l.length && (o.text(t), l.text(n), c || (c = o.parents(".navbar")[0]), c && a.app.navbar.size(c)), a.captions.length > 0) {
      const p = e.params.loop ? s.attr("data-swiper-slide-index") : a.activeIndex;
      a.$captionsContainerEl.find(".photo-browser-caption-active").removeClass("photo-browser-caption-active"), a.$captionsContainerEl.find(`[data-caption-index="${p}"]`).addClass("photo-browser-caption-active")
    }
    const d = i.find("video");
    d.length > 0 && "pause" in d[0] && d[0].pause()
  }
  onTouchStart() {
    const a = this.swipeToClose;
    !a.allow || (a.isTouched = !0)
  }
  onTouchMove(e) {
    const a = this,
      t = a.swipeToClose;
    !t.isTouched || (t.started || (t.started = !0, t.start = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY, a.params.virtualSlides ? t.activeSlide = y(a.swiper.wrapperEl).children(".swiper-slide-active") : t.activeSlide = y(a.swiper.slides).eq(a.swiper.activeIndex), t.timeStart = Ae()), e.preventDefault(), t.current = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY, t.diff = t.start - t.current, a.$el.transition(0).transform(`translate3d(0,${-t.diff}px,0)`))
  }
  onTouchEnd() {
    const e = this,
      a = e.swipeToClose;
    if (a.isTouched = !1, !a.started) {
      a.started = !1;
      return
    }
    a.started = !1, a.allow = !1;
    const t = Math.abs(a.diff),
      n = new Date().getTime() - a.timeStart;
    if (n < 300 && t > 20 || n >= 300 && t > 100) {
      ke(() => {
        e.$el && (a.diff < 0 ? e.$el.addClass("swipe-close-to-bottom") : e.$el.addClass("swipe-close-to-top")), e.emit("local::swipeToClose", e), e.$el.transform("").transition(""), e.close(), a.allow = !0
      });
      return
    }
    t !== 0 ? e.$el.addClass("photo-browser-transitioning").transitionEnd(() => {
      a.allow = !0, e.$el.removeClass("photo-browser-transitioning")
    }) : a.allow = !0, ke(() => {
      e.$el.transform("").transition("")
    })
  }
  renderNavbar() {
    const e = this;
    if (e.params.renderNavbar) return e.params.renderNavbar.call(e);
    const a = e.params.iconsColor,
      t = e.app.theme === "ios" && e.params.pageBackLinkText ? e.params.pageBackLinkText : "",
      n = typeof e.params.navbarShowCount == "undefined" ? e.params.photos.length > 1 : e.params.navbarShowCount,
      s = e.params.type !== "page";
    return T("div", {
      class: `navbar navbar-photo-browser ${e.params.theme==="dark"?"navbar-photo-browser-dark":""}`
    }, T("div", {
      class: "navbar-bg"
    }), T("div", {
      class: "navbar-inner navbar-inner-centered-title sliding"
    }, !s && T("div", {
      class: "left"
    }, T("a", {
      class: `link ${t?"":"icon-only"} back`
    }, T("i", {
      class: `icon icon-back ${a?`color-${a}`:""}`
    }), t && T("span", null, t))), n && T("div", {
      class: "title"
    }, T("span", {
      class: "photo-browser-current"
    }), T("span", {
      class: "photo-browser-of"
    }, e.params.navbarOfText), T("span", {
      class: "photo-browser-total"
    })), s && (e.params.popupCloseLinkText || e.params.popupCloseLinkIcon) && T("div", {
      class: "right"
    }, T("a", {
      class: "link popup-close",
      "data-popup": ".photo-browser-popup"
    }, e.params.popupCloseLinkIcon && e.app.theme === "ios" && T("i", null, T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "56",
      height: "56",
      viewBox: "0 0 56 56"
    }, T("path", {
      fill: "currentColor",
      d: "M 10.0234 43.0234 C 9.2266 43.8203 9.2031 45.1797 10.0234 45.9766 C 10.8438 46.7734 12.1797 46.7734 13.0000 45.9766 L 28.0000 30.9766 L 43.0000 45.9766 C 43.7969 46.7734 45.1563 46.7969 45.9766 45.9766 C 46.7734 45.1562 46.7734 43.8203 45.9766 43.0234 L 30.9531 28.0000 L 45.9766 13.0000 C 46.7734 12.2031 46.7969 10.8437 45.9766 10.0469 C 45.1328 9.2266 43.7969 9.2266 43.0000 10.0469 L 28.0000 25.0469 L 13.0000 10.0469 C 12.1797 9.2266 10.8203 9.2031 10.0234 10.0469 C 9.2266 10.8672 9.2266 12.2031 10.0234 13.0000 L 25.0234 28.0000 Z"
    }))), e.params.popupCloseLinkIcon && e.app.theme === "md" && T("i", null, T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      fill: "currentColor"
    }, T("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), T("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    }))), e.params.popupCloseLinkText && T("span", null, e.params.popupCloseLinkText)))))
  }
  renderToolbar() {
    const e = this;
    if (e.params.renderToolbar) return e.params.renderToolbar.call(e);
    const a = e.params.iconsColor;
    return T("div", {
      class: "toolbar toolbar-bottom tabbar"
    }, T("div", {
      class: "toolbar-inner"
    }, T("a", {
      class: "link photo-browser-prev"
    }, T("i", {
      class: `icon icon-back ${a?`color-${a}`:""}`
    })), T("a", {
      class: "link photo-browser-next"
    }, T("i", {
      class: `icon icon-forward ${a?`color-${a}`:""}`
    }))))
  }
  renderThumbs() {
    const e = this;
    return T("div", {
      class: "toolbar toolbar-bottom photo-browser-thumbs"
    }, T("div", {
      class: "swiper"
    }, T("div", {
      class: "swiper-wrapper"
    }, e.params.thumbs.map((a, t) => e.renderThumb(a, t)))))
  }
  renderCaption(e, a) {
    const t = this;
    return t.params.renderCaption ? t.params.renderCaption.call(t, e, a) : T("div", {
      class: "photo-browser-caption",
      "data-caption-index": a
    }, e)
  }
  renderObject(e, a) {
    const t = this;
    return t.params.renderObject ? t.params.renderObject.call(t, e, a) : T("div", {
      class: "photo-browser-slide photo-browser-object-slide swiper-slide",
      "data-swiper-slide-index": a
    }, e.html ? e.html : e)
  }
  renderLazyPhoto(e, a) {
    const t = this;
    return t.params.renderLazyPhoto ? t.params.renderLazyPhoto.call(t, e, a) : T("div", {
      class: "photo-browser-slide photo-browser-slide-lazy swiper-slide",
      "data-swiper-slide-index": a
    }, T("div", {
      class: "swiper-lazy-preloader"
    }), T("span", {
      class: "swiper-zoom-container"
    }, T("img", {
      loading: "lazy",
      src: e.url ? e.url : e
    })))
  }
  renderPhoto(e, a) {
    const t = this;
    return t.params.renderPhoto ? t.params.renderPhoto.call(t, e, a) : T("div", {
      class: "photo-browser-slide swiper-slide",
      "data-swiper-slide-index": a
    }, T("span", {
      class: "swiper-zoom-container"
    }, T("img", {
      src: e.url ? e.url : e
    })))
  }
  renderThumb(e, a) {
    const t = this,
      n = typeof e == "string" ? e : e.url;
    return t.params.renderThumb ? t.params.renderThumb.call(t, e, a) : T("div", {
      class: "photo-browser-thumbs-slide swiper-slide",
      "data-swiper-slide-index": a
    }, n && T("img", {
      src: n,
      loading: "lazy"
    }))
  }
  render() {
    const e = this;
    return e.params.render ? e.params.render.call(e, e.params) : T("div", {
      class: `photo-browser photo-browser-${e.params.theme}`
    }, T("div", {
      class: "view"
    }, T("div", {
      class: `page photo-browser-page photo-browser-page-${e.params.theme} no-toolbar ${e.params.navbar?"":"no-navbar"}`,
      "data-name": "photo-browser-page"
    }, e.params.navbar && e.renderNavbar(), e.params.toolbar && e.renderToolbar(), e.params.thumbs && e.params.thumbs.length && e.renderThumbs(), T("div", {
      class: `photo-browser-captions photo-browser-captions-${e.params.captionsTheme||e.params.theme}`
    }, e.params.photos.map((a, t) => a.caption ? e.renderCaption(a.caption, t) : "")), T("div", {
      class: "photo-browser-swiper-container swiper"
    }, T("div", {
      class: "photo-browser-swiper-wrapper swiper-wrapper"
    }, !e.params.virtualSlides && e.params.photos.map((a, t) => a.html || (typeof a == "string" || a instanceof String) && a.indexOf("<") >= 0 && a.indexOf(">") >= 0 ? e.renderObject(a, t) : e.params.lazy === !0 ? e.renderLazyPhoto(a, t) : e.renderPhoto(a, t)))))))
  }
  renderStandalone() {
    const e = this;
    return e.params.renderStandalone ? e.params.renderStandalone.call(e) : `<div class="popup photo-browser-popup photo-browser-standalone popup-tablet-fullscreen">${e.render()}</div>`
  }
  renderPage() {
    const e = this;
    return e.params.renderPage ? e.params.renderPage.call(e) : e.render()
  }
  renderPopup() {
    const e = this;
    return e.params.renderPopup ? e.params.renderPopup.call(e) : `<div class="popup photo-browser-popup">${e.render()}</div>`
  }
  onOpen(e, a) {
    const t = this,
      n = t.app,
      s = y(a);
    s[0].f7PhotoBrowser = t, t.$el = s, t.el = s[0], t.openedIn = e, t.opened = !0, t.$swiperContainerEl = t.$el.find(".photo-browser-swiper-container"), t.$swiperWrapperEl = t.$el.find(".photo-browser-swiper-wrapper"), t.slides = t.$el.find(".photo-browser-slide"), t.$captionsContainerEl = t.$el.find(".photo-browser-captions"), t.captions = t.$el.find(".photo-browser-caption");
    const i = t.params.thumbs && t.params.thumbs.length > 0;
    let o, l, c;
    const d = t.activeIndex,
      p = H({}, t.params.swiper, {
        initialSlide: d,
        on: {
          click(g) {
            clearTimeout(o), t.params.exposition && (o = setTimeout(() => {
              t.expositionToggle()
            }, 350)), t.emit("local::tap", g), t.emit("local::click", g)
          },
          doubleClick(g) {
            clearTimeout(o), t.emit("local::doubleTap", g), t.emit("local::doubleClick", g)
          },
          slideChange() {
            const g = this;
            i && t.thumbsSwiper && !c && (l = !0, t.thumbsSwiper.slideTo(t.swiper.activeIndex), setTimeout(() => {
              l = !1
            })), t.onSlideChange(g);
            for (var h = arguments.length, f = new Array(h), b = 0; b < h; b++) f[b] = arguments[b];
            t.emit("local::slideChange", ...f)
          },
          transitionStart() {
            for (var g = arguments.length, h = new Array(g), f = 0; f < g; f++) h[f] = arguments[f];
            t.emit("local::transitionStart", ...h)
          },
          transitionEnd() {
            for (var g = arguments.length, h = new Array(g), f = 0; f < g; f++) h[f] = arguments[f];
            t.emit("local::transitionEnd", ...h)
          },
          slideChangeTransitionStart() {
            const g = this;
            t.onSlideChange(g);
            for (var h = arguments.length, f = new Array(h), b = 0; b < h; b++) f[b] = arguments[b];
            t.emit("local::slideChangeTransitionStart", ...f)
          },
          slideChangeTransitionEnd() {
            for (var g = arguments.length, h = new Array(g), f = 0; f < g; f++) h[f] = arguments[f];
            t.emit("local::slideChangeTransitionEnd", ...h)
          }
        }
      });
    t.params.swipeToClose && t.params.type !== "page" && H(p.on, {
      touchStart(g, h) {
        t.onTouchStart(h), t.emit("local::touchStart", h)
      },
      touchMoveOpposite(g, h) {
        t.onTouchMove(h), t.emit("local::touchMoveOpposite", h)
      },
      touchEnd(g, h) {
        t.onTouchEnd(h), t.emit("local::touchEnd", h)
      }
    }), t.params.virtualSlides && H(p, {
      virtual: {
        slides: t.params.photos,
        renderSlide(g, h) {
          return g.html || (typeof g == "string" || g instanceof String) && g.indexOf("<") >= 0 && g.indexOf(">") >= 0 ? t.renderObject(g, h) : t.params.lazy === !0 ? t.renderLazyPhoto(g, h) : t.renderPhoto(g, h)
        }
      }
    });
    const u = G();
    if (t.swiper = n.swiper ? n.swiper.create(t.$swiperContainerEl[0], p) : new u.Swiper(t.$swiperContainerEl[0], p), (t.activeIndex === 0 || t.params.virtualSlides) && t.onSlideChange(t.swiper), i) {
      const g = {
        el: t.$el.find(".photo-browser-thumbs .swiper")[0],
        slidesPerView: "auto",
        centeredSlides: !0,
        spaceBetween: 4,
        watchSlidesProgress: !0,
        initialSlide: d,
        on: {
          touchMove() {
            c = !0
          },
          touchEnd() {
            c = !1
          },
          slideChange(h) {
            l || t.swiper.slideTo(h.activeIndex, 0)
          },
          click(h) {
            if (!h.clickedSlide) return;
            const f = parseInt(y(h.clickedSlide).attr("data-swiper-slide-index"), 10);
            h.slideTo(f, 0)
          }
        }
      };
      t.thumbsSwiper = n.swiper ? n.swiper.create(g) : new u.Swiper(g)
    }
    t.$el && t.$el.trigger("photobrowser:open"), t.emit("local::open photoBrowserOpen", t)
  }
  onOpened() {
    const e = this;
    e.$el && e.params.type === "standalone" && e.$el.css("animation", "none"), e.$el && e.$el.trigger("photobrowser:opened"), e.emit("local::opened photoBrowserOpened", e)
  }
  onClose() {
    const e = this;
    e.destroyed || (e.swiper && e.swiper.destroy && (e.swiper.destroy(!0, !1), e.swiper = null, delete e.swiper), e.thumbsSwiper && e.thumbsSwiper.destroy && (e.thumbsSwiper.destroy(!0, !1), e.thumbsSwiper = null, delete e.thumbsSwiper), e.$el && e.$el.trigger("photobrowser:close"), e.emit("local::close photoBrowserClose", e))
  }
  onClosed() {
    const e = this;
    e.destroyed || (e.opened = !1, e.$el = null, e.el = null, delete e.$el, delete e.el, e.$el && e.$el.trigger("photobrowser:closed"), e.emit("local::closed photoBrowserClosed", e))
  }
  openPage() {
    const e = this;
    if (e.opened) return e;
    const a = e.renderPage();
    return e.view.router.navigate({
      url: e.url,
      route: {
        content: a,
        path: e.url,
        on: {
          pageBeforeIn(t, n) {
            e.view.$el.addClass(`with-photo-browser-page with-photo-browser-page-${e.params.theme}`), e.onOpen("page", n.el)
          },
          pageAfterIn(t, n) {
            e.onOpened("page", n.el)
          },
          pageBeforeOut(t, n) {
            e.view.$el.removeClass(`with-photo-browser-page with-photo-browser-page-exposed with-photo-browser-page-${e.params.theme}`), e.onClose("page", n.el)
          },
          pageAfterOut(t, n) {
            e.onClosed("page", n.el)
          }
        }
      }
    }), e
  }
  openStandalone() {
    const e = this;
    if (e.opened) return e;
    const a = e.renderStandalone(),
      t = {
        backdrop: !1,
        content: a,
        on: {
          popupOpen(n) {
            e.onOpen("popup", n.el)
          },
          popupOpened(n) {
            e.onOpened("popup", n.el)
          },
          popupClose(n) {
            e.onClose("popup", n.el)
          },
          popupClosed(n) {
            e.onClosed("popup", n.el)
          }
        }
      };
    return e.params.routableModals && e.view ? e.view.router.navigate({
      url: e.url,
      route: {
        path: e.url,
        popup: t
      }
    }) : e.modal = e.app.popup.create(t).open(), e
  }
  openPopup() {
    const e = this;
    if (e.opened) return e;
    const t = {
      content: e.renderPopup(),
      push: e.params.popupPush,
      closeByBackdropClick: e.params.closeByBackdropClick,
      on: {
        popupOpen(n) {
          e.onOpen("popup", n.el)
        },
        popupOpened(n) {
          e.onOpened("popup", n.el)
        },
        popupClose(n) {
          e.onClose("popup", n.el)
        },
        popupClosed(n) {
          e.onClosed("popup", n.el)
        }
      }
    };
    return e.params.routableModals && e.view ? e.view.router.navigate({
      url: e.url,
      route: {
        path: e.url,
        popup: t
      }
    }) : e.modal = e.app.popup.create(t).open(), e
  }
  expositionEnable() {
    const e = this;
    return e.params.type === "page" && e.view.$el.addClass("with-photo-browser-page-exposed"), e.$el && e.$el.addClass("photo-browser-exposed"), e.params.expositionHideCaptions && e.$captionsContainerEl.addClass("photo-browser-captions-exposed"), e.exposed = !0, e
  }
  expositionDisable() {
    const e = this;
    return e.params.type === "page" && e.view.$el.removeClass("with-photo-browser-page-exposed"), e.$el && e.$el.removeClass("photo-browser-exposed"), e.params.expositionHideCaptions && e.$captionsContainerEl.removeClass("photo-browser-captions-exposed"), e.exposed = !1, e
  }
  expositionToggle() {
    const e = this;
    return e.params.type === "page" && e.view.$el.toggleClass("with-photo-browser-page-exposed"), e.$el && e.$el.toggleClass("photo-browser-exposed"), e.params.expositionHideCaptions && e.$captionsContainerEl.toggleClass("photo-browser-captions-exposed"), e.exposed = !e.exposed, e
  }
  open(e) {
    const a = this,
      t = a.params.type;
    return a.opened ? (a.swiper && typeof e != "undefined" && a.swiper.slideTo(parseInt(e, 10)), a) : (typeof e != "undefined" && (a.activeIndex = e), t === "standalone" && a.openStandalone(), t === "page" && a.openPage(), t === "popup" && a.openPopup(), a)
  }
  close() {
    const e = this;
    return e.opened && (e.params.routableModals && e.view || e.openedIn === "page" ? e.view.router.back() : (e.modal.once("modalClosed", () => {
      ke(() => {
        e.destroyed || (e.modal.destroy(), delete e.modal)
      })
    }), e.modal.close())), e
  }
  init() {}
  destroy() {
    let e = this;
    e.emit("local::beforeDestroy photoBrowserBeforeDestroy", e), e.$el && (e.$el.trigger("photobrowser:beforedestroy"), e.$el[0].f7PhotoBrowser = null, delete e.$el[0].f7PhotoBrowser), $e(e), e.destroyed = !0, e = null
  }
}
var yn = up,
  yu = {
    name: "photoBrowser",
    params: {
      photoBrowser: {
        photos: [],
        thumbs: [],
        exposition: !0,
        expositionHideCaptions: !1,
        type: "standalone",
        navbar: !0,
        toolbar: !0,
        theme: "light",
        captionsTheme: void 0,
        iconsColor: void 0,
        popupPush: !1,
        swipeToClose: !0,
        pageBackLinkText: "Back",
        popupCloseLinkText: void 0,
        popupCloseLinkIcon: !0,
        navbarOfText: "of",
        navbarShowCount: void 0,
        view: void 0,
        url: "photos/",
        routableModals: !1,
        virtualSlides: !0,
        lazy: !0,
        closeByBackdropClick: !0,
        renderNavbar: void 0,
        renderToolbar: void 0,
        renderCaption: void 0,
        renderObject: void 0,
        renderLazyPhoto: void 0,
        renderPhoto: void 0,
        renderThumb: void 0,
        renderPage: void 0,
        renderPopup: void 0,
        renderStandalone: void 0,
        swiper: {
          cssMode: !1,
          initialSlide: 0,
          spaceBetween: 20,
          speed: 300,
          loop: !1,
          keyboard: {
            enabled: !0
          },
          navigation: {
            nextEl: ".photo-browser-next",
            prevEl: ".photo-browser-prev"
          },
          zoom: {
            enabled: !0,
            maxRatio: 3,
            minRatio: 1
          }
        }
      }
    },
    create() {
      const r = this;
      r.photoBrowser = xe({
        defaultSelector: ".photo-browser-popup, .photo-browser-page",
        constructor: yn,
        app: r,
        domProp: "f7PhotoBrowser"
      })
    },
    static: {
      PhotoBrowser: yn
    }
  };
class fp extends qe {
  constructor(e, a) {
    const t = H({
      on: {}
    }, e.params.notification, a);
    super(e, t);
    const n = this;
    n.app = e, n.params = t;
    const {
      icon: s,
      title: i,
      titleRightText: o,
      subtitle: l,
      text: c,
      closeButton: d,
      closeTimeout: p,
      cssClass: u,
      closeOnClick: g
    } = n.params;
    let h;
    if (n.params.el) h = y(n.params.el);
    else {
      const k = n.render({
        icon: s,
        title: i,
        titleRightText: o,
        subtitle: l,
        text: c,
        closeButton: d,
        cssClass: u
      });
      h = y(k)
    }
    if (h && h.length > 0 && h[0].f7Modal) return h[0].f7Modal;
    if (h.length === 0) return n.destroy();
    H(n, {
      $el: h,
      el: h[0],
      type: "notification"
    }), h[0].f7Modal = n, d && h.find(".notification-close-button").on("click", () => {
      n.close()
    }), h.on("click", k => {
      d && y(k.target).closest(".notification-close-button").length || (n.emit("local::click notificationClick", n), g && n.close())
    }), n.on("beforeDestroy", () => {
      h.off("click")
    });
    let f, b, m, v, E, $;
    const w = {};

    function C(k) {
      f || (f = !0, b = !1, m = void 0, E = Ae(), w.x = k.type === "touchstart" ? k.targetTouches[0].pageX : k.pageX, w.y = k.type === "touchstart" ? k.targetTouches[0].pageY : k.pageY)
    }

    function x(k) {
      if (!f) return;
      const I = k.type === "touchmove" ? k.targetTouches[0].pageX : k.pageX,
        R = k.type === "touchmove" ? k.targetTouches[0].pageY : k.pageY;
      if (typeof m == "undefined" && (m = !!(m || Math.abs(R - w.y) < Math.abs(I - w.x))), m) {
        f = !1;
        return
      }
      k.preventDefault(), b || (n.$el.removeClass("notification-transitioning"), n.$el.transition(0), $ = n.$el[0].offsetHeight / 2), b = !0, v = R - w.y;
      let D = v;
      v > 0 && (D = v ** .8), n.$el.transform(`translate3d(0, ${D}px, 0)`)
    }

    function M() {
      if (!f || !b) {
        f = !1, b = !1;
        return
      }
      if (f = !1, b = !1, v === 0) return;
      const k = Ae() - E;
      n.$el.transition(""), n.$el.addClass("notification-transitioning"), n.$el.transform(""), (v < -10 && k < 300 || -v >= $ / 1) && n.close()
    }

    function A() {
      n.$el.on(e.touchEvents.start, C, {
        passive: !0
      }), e.on("touchmove:active", x), e.on("touchend:passive", M)
    }

    function B() {
      n.$el.off(e.touchEvents.start, C, {
        passive: !0
      }), e.off("touchmove:active", x), e.off("touchend:passive", M)
    }
    let S;

    function P() {
      S = ke(() => {
        if (f && b) {
          P();
          return
        }
        n.close()
      }, p)
    }
    return n.on("open", () => {
      n.params.swipeToClose && A(), y(".notification.modal-in").each(k => {
        const I = e.notification.get(k);
        k !== n.el && I && I.close()
      }), p && P()
    }), n.on("close beforeDestroy", () => {
      n.params.swipeToClose && B(), clearTimeout(S)
    }), n
  }
  render() {
    const e = this;
    if (e.params.render) return e.params.render.call(e, e);
    const {
      icon: a,
      title: t,
      titleRightText: n,
      subtitle: s,
      text: i,
      closeButton: o,
      cssClass: l
    } = e.params;
    return T("div", {
      class: `notification ${a?"notification-with-icon":""} ${l||""}`
    }, T("div", {
      class: "notification-header"
    }, a && T("div", {
      class: "notification-icon"
    }, a), t && T("div", {
      class: "notification-title"
    }, t), n && T("div", {
      class: "notification-title-right-text"
    }, n), o && T("span", {
      class: "notification-close-button"
    })), T("div", {
      class: "notification-content"
    }, s && T("div", {
      class: "notification-subtitle"
    }, s), i && T("div", {
      class: "notification-text"
    }, i)))
  }
}
var En = fp,
  Eu = {
    name: "notification",
    static: {
      Notification: En
    },
    create() {
      const r = this;
      r.notification = H({}, Ze({
        app: r,
        constructor: En,
        defaultSelector: ".notification.modal-in"
      }))
    },
    params: {
      notification: {
        icon: null,
        title: null,
        titleRightText: null,
        subtitle: null,
        text: null,
        closeButton: !1,
        closeTimeout: null,
        closeOnClick: !1,
        swipeToClose: !0,
        cssClass: null,
        render: null,
        containerEl: null
      }
    }
  };
class hp extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this;
    t.app = e;
    const n = ue(),
      s = H({
        on: {}
      }, e.params.autocomplete);
    t.useModulesParams(s), t.params = H(s, a);
    let i;
    t.params.openerEl && (i = y(t.params.openerEl), i.length && (i[0].f7Autocomplete = t));
    let o;
    t.params.inputEl && (o = y(t.params.inputEl), o.length && (o[0].f7Autocomplete = t));
    const l = vt();
    let c = a.url;
    !c && i && i.length && (i.attr("href") ? c = i.attr("href") : i.find("a").length > 0 && (c = i.find("a").attr("href"))), (!c || c === "#" || c === "") && (c = t.params.url);
    const d = t.params.multiple ? "checkbox" : "radio";
    H(t, {
      $openerEl: i,
      openerEl: i && i[0],
      $inputEl: o,
      inputEl: o && o[0],
      id: l,
      url: c,
      value: t.params.value || [],
      inputType: d,
      inputName: `${d}-${l}`,
      $modalEl: void 0,
      $dropdownEl: void 0
    });
    let p = "";

    function u() {
      let w = t.$inputEl.val().trim();
      !t.params.source || t.params.source.call(t, w, C => {
        let x = "";
        const M = t.params.limit ? Math.min(t.params.limit, C.length) : C.length;
        t.items = C;
        let A;
        t.params.highlightMatches && (w = w.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), A = new RegExp(`(${w})`, "i"));
        let B, S;
        for (let P = 0; P < M; P += 1) {
          const k = typeof C[P] == "object" ? C[P][t.params.valueProperty] : C[P],
            I = typeof C[P] == "object" ? C[P][t.params.textProperty] : C[P];
          P === 0 && (B = k, S = t.items[P]), x += t.renderItem({
            value: k,
            text: t.params.highlightMatches ? I.replace(A, "<b>$1</b>") : I
          }, P)
        }
        if (x === "" && w === "" && t.params.dropdownPlaceholderText && (x += t.renderItem({
            placeholder: !0,
            text: t.params.dropdownPlaceholderText
          })), t.$dropdownEl.find("ul").html(x), t.params.typeahead) {
          if (!B || !S || B.toLowerCase().indexOf(w.toLowerCase()) !== 0) return;
          if (p.toLowerCase() === w.toLowerCase()) {
            t.value = [];
            return
          }
          if (p.toLowerCase().indexOf(w.toLowerCase()) === 0) {
            p = w, t.value = [];
            return
          }
          o.val(B), o[0].setSelectionRange(w.length, B.length);
          const P = typeof t.value[0] == "object" ? t.value[0][t.params.valueProperty] : t.value[0];
          (!P || B.toLowerCase() !== P.toLowerCase()) && (t.value = [S], t.emit("local::change autocompleteChange", [S]))
        }
        p = w
      })
    }

    function g() {
      const w = this,
        C = w.value,
        x = y(w).parents(".autocomplete-values").length > 0;
      let M, A, B;
      if (x) {
        if (t.inputType === "checkbox" && !w.checked) {
          for (let S = 0; S < t.value.length; S += 1) B = typeof t.value[S] == "string" ? t.value[S] : t.value[S][t.params.valueProperty], (B === C || B * 1 == C * 1) && t.value.splice(S, 1);
          t.updateValues(), t.emit("local::change autocompleteChange", t.value)
        }
        return
      }
      for (let S = 0; S < t.items.length; S += 1) A = typeof t.items[S] == "object" ? t.items[S][t.params.valueProperty] : t.items[S], (A === C || A * 1 == C * 1) && (M = t.items[S]);
      if (t.inputType === "radio") t.value = [M];
      else if (w.checked) t.value.push(M);
      else
        for (let S = 0; S < t.value.length; S += 1) B = typeof t.value[S] == "object" ? t.value[S][t.params.valueProperty] : t.value[S], (B === C || B * 1 == C * 1) && t.value.splice(S, 1);
      t.updateValues(), (t.inputType === "radio" && w.checked || t.inputType === "checkbox") && t.emit("local::change autocompleteChange", t.value)
    }

    function h(w) {
      const C = y(w.target);
      C.is(t.$inputEl[0]) || t.$dropdownEl && C.closest(t.$dropdownEl[0]).length || t.close()
    }

    function f() {
      t.open()
    }

    function b() {
      t.open()
    }

    function m() {
      t.$dropdownEl.find("label.active-state").length > 0 || setTimeout(() => {
        t.close()
      }, 0)
    }

    function v() {
      t.positionDropdown()
    }

    function E(w) {
      if (!t.opened) return;
      if (w.keyCode === 27) {
        w.preventDefault(), t.$inputEl.blur();
        return
      }
      if (w.keyCode === 13) {
        const M = t.$dropdownEl.find(".autocomplete-dropdown-selected label");
        if (M.length) {
          w.preventDefault(), M.trigger("click"), t.$inputEl.blur();
          return
        }
        t.params.typeahead && (w.preventDefault(), t.$inputEl.blur());
        return
      }
      if (w.keyCode !== 40 && w.keyCode !== 38) return;
      w.preventDefault();
      const C = t.$dropdownEl.find(".autocomplete-dropdown-selected");
      let x;
      C.length ? (x = C[w.keyCode === 40 ? "next" : "prev"]("li"), x.length || (x = t.$dropdownEl.find("li").eq(w.keyCode === 40 ? 0 : t.$dropdownEl.find("li").length - 1))) : x = t.$dropdownEl.find("li").eq(w.keyCode === 40 ? 0 : t.$dropdownEl.find("li").length - 1), !x.hasClass("autocomplete-dropdown-placeholder") && (C.removeClass("autocomplete-dropdown-selected"), x.addClass("autocomplete-dropdown-selected"))
    }

    function $() {
      const w = y(this);
      let C;
      for (let x = 0; x < t.items.length; x += 1) {
        const M = typeof t.items[x] == "object" ? t.items[x][t.params.valueProperty] : t.items[x],
          A = w.attr("data-value");
        (M === A || M * 1 == A * 1) && (C = t.items[x])
      }
      t.params.updateInputValueOnSelect && (t.$inputEl.val(typeof C == "object" ? C[t.params.valueProperty] : C), t.$inputEl.trigger("input change")), t.value = [C], t.emit("local::change autocompleteChange", [C]), t.close()
    }
    return t.attachEvents = function () {
      t.params.openIn !== "dropdown" && t.$openerEl && t.$openerEl.on("click", f), t.params.openIn === "dropdown" && t.$inputEl && (t.$inputEl.on("focus", b), t.$inputEl.on(t.params.inputEvents, u), n.android ? y("html").on("click", h) : t.$inputEl.on("blur", m), t.$inputEl.on("keydown", E))
    }, t.detachEvents = function () {
      t.params.openIn !== "dropdown" && t.$openerEl && t.$openerEl.off("click", f), t.params.openIn === "dropdown" && t.$inputEl && (t.$inputEl.off("focus", b), t.$inputEl.off(t.params.inputEvents, u), n.android ? y("html").off("click", h) : t.$inputEl.off("blur", m), t.$inputEl.off("keydown", E))
    }, t.attachDropdownEvents = function () {
      t.$dropdownEl.on("click", "label", $), e.on("resize", v)
    }, t.detachDropdownEvents = function () {
      t.$dropdownEl.off("click", "label", $), e.off("resize", v)
    }, t.attachPageEvents = function () {
      t.$el.on("change", 'input[type="radio"], input[type="checkbox"]', g), t.params.closeOnSelect && !t.params.multiple && t.$el.once("click", ".list label", () => {
        ke(() => {
          t.close()
        })
      })
    }, t.detachPageEvents = function () {
      t.$el.off("change", 'input[type="radio"], input[type="checkbox"]', g)
    }, t.useModules(), t.init(), t
  }
  get view() {
    const e = this,
      {
        $openerEl: a,
        $inputEl: t,
        app: n
      } = e;
    let s;
    if (e.params.view) s = e.params.view;
    else if (a || t) {
      const i = a || t;
      s = i.closest(".view").length && i.closest(".view")[0].f7View
    }
    return s || (s = n.views.main), s
  }
  positionDropdown() {
    const e = this,
      {
        $inputEl: a,
        app: t,
        $dropdownEl: n
      } = e,
      s = a.parents(".page-content");
    if (s.length === 0) return;
    const i = a.offset(),
      o = a[0].offsetWidth,
      l = a[0].offsetHeight,
      c = a.parents(".list");
    let d;
    c.parents().each(E => {
      if (d) return;
      const $ = y(E);
      $.parent(s).length && (d = $)
    });
    const p = c.offset(),
      u = parseInt(s.css("padding-bottom"), 10),
      g = c.length > 0 ? p.left - s.offset().left : 0,
      h = i.left - (c.length > 0 ? p.left : 0) - (t.rtl, 0),
      f = i.top - (s.offset().top - s[0].scrollTop),
      b = s[0].scrollHeight - u - (f + s[0].scrollTop) - a[0].offsetHeight,
      m = t.rtl ? "padding-right" : "padding-left";
    let v;
    c.length && (v = (t.rtl ? c[0].offsetWidth - h - o : h) - (t.theme === "md" ? 16 : 15)), n.css({
      left: `${c.length>0?g:h}px`,
      top: `${f+s[0].scrollTop+l}px`,
      width: `${c.length>0?c[0].offsetWidth:o}px`
    }), n.children(".autocomplete-dropdown-inner").css({
      maxHeight: `${b}px`,
      [m]: c.length > 0 ? `${v}px` : ""
    })
  }
  focus() {
    this.$el.find("input[type=search]").focus()
  }
  source(e) {
    const a = this;
    if (!a.params.source) return;
    const {
      $el: t
    } = a;
    a.params.source.call(a, e, n => {
      let s = "";
      const i = a.params.limit ? Math.min(a.params.limit, n.length) : n.length;
      a.items = n;
      for (let o = 0; o < i; o += 1) {
        let l = !1;
        const c = typeof n[o] == "object" ? n[o][a.params.valueProperty] : n[o];
        for (let d = 0; d < a.value.length; d += 1) {
          const p = typeof a.value[d] == "object" ? a.value[d][a.params.valueProperty] : a.value[d];
          (p === c || p * 1 == c * 1) && (l = !0)
        }
        s += a.renderItem({
          value: c,
          text: typeof n[o] == "object" ? n[o][a.params.textProperty] : n[o],
          inputType: a.inputType,
          id: a.id,
          inputName: a.inputName,
          selected: l
        }, o)
      }
      t.find(".autocomplete-found ul").html(s), n.length === 0 ? e.length !== 0 ? (t.find(".autocomplete-not-found").show(), t.find(".autocomplete-found, .autocomplete-values").hide()) : (t.find(".autocomplete-values").show(), t.find(".autocomplete-found, .autocomplete-not-found").hide()) : (t.find(".autocomplete-found").show(), t.find(".autocomplete-not-found, .autocomplete-values").hide())
    })
  }
  updateValues() {
    const e = this;
    let a = "";
    for (let t = 0; t < e.value.length; t += 1) a += e.renderItem({
      value: typeof e.value[t] == "object" ? e.value[t][e.params.valueProperty] : e.value[t],
      text: typeof e.value[t] == "object" ? e.value[t][e.params.textProperty] : e.value[t],
      inputType: e.inputType,
      id: e.id,
      inputName: `${e.inputName}-checked}`,
      selected: !0
    }, t);
    e.$el.find(".autocomplete-values ul").html(a)
  }
  preloaderHide() {
    const e = this;
    e.params.openIn === "dropdown" && e.$dropdownEl ? e.$dropdownEl.find(".autocomplete-preloader").removeClass("autocomplete-preloader-visible") : y(".autocomplete-preloader").removeClass("autocomplete-preloader-visible")
  }
  preloaderShow() {
    const e = this;
    e.params.openIn === "dropdown" && e.$dropdownEl ? e.$dropdownEl.find(".autocomplete-preloader").addClass("autocomplete-preloader-visible") : y(".autocomplete-preloader").addClass("autocomplete-preloader-visible")
  }
  renderPreloader() {
    const e = this,
      a = {
        iosPreloaderContent: lt,
        mdPreloaderContent: ot
      };
    return T("div", {
      class: `autocomplete-preloader preloader ${e.params.preloaderColor?`color-${e.params.preloaderColor}`:""}`
    }, a[`${e.app.theme}PreloaderContent`] || "")
  }
  renderSearchbar() {
    const e = this;
    return e.params.renderSearchbar ? e.params.renderSearchbar.call(e) : T("form", {
      class: "searchbar"
    }, T("div", {
      class: "searchbar-inner"
    }, T("div", {
      class: "searchbar-input-wrap"
    }, T("input", {
      type: "search",
      spellcheck: e.params.searchbarSpellcheck || "false",
      placeholder: e.params.searchbarPlaceholder
    }), T("i", {
      class: "searchbar-icon"
    }), T("span", {
      class: "input-clear-button"
    })), e.params.searchbarDisableButton && T("span", {
      class: "searchbar-disable-button"
    }, e.params.searchbarDisableText)))
  }
  renderItem(e, a) {
    const t = this;
    if (t.params.renderItem) return t.params.renderItem.call(t, e, a);
    const n = e.value && typeof e.value == "string" ? e.value.replace(/"/g, "&quot;") : e.value;
    return t.params.openIn !== "dropdown" ? T("li", null, T("label", {
      class: `item-${e.inputType} item-content`
    }, T("input", {
      type: e.inputType,
      name: e.inputName,
      value: n,
      _checked: e.selected
    }), T("i", {
      class: `icon icon-${e.inputType}`
    }), T("div", {
      class: "item-inner"
    }, T("div", {
      class: "item-title"
    }, e.text)))) : e.placeholder ? T("li", {
      class: "autocomplete-dropdown-placeholder"
    }, T("label", {
      class: "item-content"
    }, T("div", {
      class: "item-inner"
    }, T("div", {
      class: "item-title"
    }, e.text)))) : T("li", null, T("label", {
      class: "item-radio item-content",
      "data-value": n
    }, T("div", {
      class: "item-inner"
    }, T("div", {
      class: "item-title"
    }, e.text))))
  }
  renderNavbar() {
    const e = this;
    if (e.params.renderNavbar) return e.params.renderNavbar.call(e);
    let a = e.params.pageTitle;
    typeof a == "undefined" && e.$openerEl && e.$openerEl.length && (a = e.$openerEl.find(".item-title").text().trim());
    const t = e.params.openIn === "popup",
      n = t ? e.params.preloader && T("div", {
        class: "left"
      }, e.renderPreloader()) : T("div", {
        class: "left sliding"
      }, T("a", {
        class: "link back"
      }, T("i", {
        class: "icon icon-back"
      }), T("span", {
        class: "if-not-md"
      }, e.params.pageBackLinkText))),
      s = t ? T("div", {
        class: "right"
      }, T("a", {
        class: "link popup-close",
        "data-popup": ".autocomplete-popup"
      }, e.params.popupCloseLinkText)) : e.params.preloader && T("div", {
        class: "right"
      }, e.renderPreloader());
    return T("div", {
      class: `navbar ${e.params.navbarColorTheme?`color-${e.params.navbarColorTheme}`:""}`
    }, T("div", {
      class: "navbar-bg"
    }), T("div", {
      class: `navbar-inner ${e.params.navbarColorTheme?`color-${e.params.navbarColorTheme}`:""}`
    }, n, a && T("div", {
      class: "title sliding"
    }, a), s, T("div", {
      class: "subnavbar sliding"
    }, e.renderSearchbar())))
  }
  renderDropdown() {
    const e = this;
    return e.params.renderDropdown ? e.params.renderDropdown.call(e, e.items) : T("div", {
      class: "autocomplete-dropdown"
    }, T("div", {
      class: "autocomplete-dropdown-inner"
    }, T("div", {
      class: "list no-safe-areas"
    }, T("ul", null))), e.params.preloader && e.renderPreloader())
  }
  renderPage(e) {
    const a = this;
    return a.params.renderPage ? a.params.renderPage.call(a, a.items) : T("div", {
      class: "page page-with-subnavbar autocomplete-page",
      "data-name": "autocomplete-page"
    }, a.renderNavbar(e), T("div", {
      class: "searchbar-backdrop"
    }), T("div", {
      class: "page-content"
    }, T("div", {
      class: `list autocomplete-list autocomplete-found autocomplete-list-${a.id} ${a.params.formColorTheme?`color-${a.params.formColorTheme}`:""}`
    }, T("ul", null)), T("div", {
      class: "list autocomplete-not-found"
    }, T("ul", null, T("li", {
      class: "item-content"
    }, T("div", {
      class: "item-inner"
    }, T("div", {
      class: "item-title"
    }, a.params.notFoundText))))), T("div", {
      class: "list autocomplete-values"
    }, T("ul", null))))
  }
  renderPopup() {
    const e = this;
    return e.params.renderPopup ? e.params.renderPopup.call(e, e.items) : T("div", {
      class: "popup autocomplete-popup"
    }, T("div", {
      class: "view"
    }, e.renderPage(!0), ";"))
  }
  onOpen(e, a) {
    const t = this,
      n = t.app,
      s = y(a);
    if (t.$el = s, t.el = s[0], t.openedIn = e, t.opened = !0, t.params.openIn === "dropdown") t.attachDropdownEvents(), t.$dropdownEl.addClass("autocomplete-dropdown-in"), t.$inputEl.trigger("input");
    else {
      let i = s.find(".searchbar");
      t.params.openIn === "page" && n.theme === "ios" && i.length === 0 && (i = y(n.navbar.getElByPage(s)).find(".searchbar")), t.searchbar = n.searchbar.create({
        el: i,
        backdropEl: s.find(".searchbar-backdrop"),
        customSearch: !0,
        on: {
          search(o, l) {
            l.length === 0 && t.searchbar.enabled ? t.searchbar.backdropShow() : t.searchbar.backdropHide(), t.source(l)
          }
        }
      }), t.attachPageEvents(), t.updateValues(), t.params.requestSourceOnOpen && t.source("")
    }
    t.emit("local::open autocompleteOpen", t)
  }
  autoFocus() {
    const e = this;
    return e.searchbar && e.searchbar.$inputEl && e.searchbar.$inputEl.focus(), e
  }
  onOpened() {
    const e = this;
    e.params.openIn !== "dropdown" && e.params.autoFocus && e.autoFocus(), e.emit("local::opened autocompleteOpened", e)
  }
  onClose() {
    const e = this;
    e.destroyed || (e.searchbar && e.searchbar.destroy && (e.searchbar.destroy(), e.searchbar = null, delete e.searchbar), e.params.openIn === "dropdown" ? (e.detachDropdownEvents(), e.$dropdownEl.removeClass("autocomplete-dropdown-in").remove()) : e.detachPageEvents(), e.emit("local::close autocompleteClose", e))
  }
  onClosed() {
    const e = this;
    e.destroyed || (e.opened = !1, e.$el = null, e.el = null, delete e.$el, delete e.el, e.emit("local::closed autocompleteClosed", e))
  }
  openPage() {
    const e = this;
    if (e.opened) return e;
    const a = e.renderPage();
    return e.view.router.navigate({
      url: e.url,
      route: {
        content: a,
        path: e.url,
        on: {
          pageBeforeIn(t, n) {
            e.onOpen("page", n.el)
          },
          pageAfterIn(t, n) {
            e.onOpened("page", n.el)
          },
          pageBeforeOut(t, n) {
            e.onClose("page", n.el)
          },
          pageAfterOut(t, n) {
            e.onClosed("page", n.el)
          }
        },
        options: {
          animate: e.params.animate
        }
      }
    }), e
  }
  openPopup() {
    const e = this;
    if (e.opened) return e;
    const t = {
      content: e.renderPopup(),
      animate: e.params.animate,
      push: e.params.popupPush,
      swipeToClose: e.params.popupSwipeToClose,
      on: {
        popupOpen(n) {
          e.onOpen("popup", n.el)
        },
        popupOpened(n) {
          e.onOpened("popup", n.el)
        },
        popupClose(n) {
          e.onClose("popup", n.el)
        },
        popupClosed(n) {
          e.onClosed("popup", n.el)
        }
      }
    };
    return e.params.routableModals && e.view ? e.view.router.navigate({
      url: e.url,
      route: {
        path: e.url,
        popup: t
      }
    }) : e.modal = e.app.popup.create(t).open(e.params.animate), e
  }
  openDropdown() {
    const e = this;
    e.$dropdownEl || (e.$dropdownEl = y(e.renderDropdown()));
    const a = e.$inputEl.parents(".page-content");
    e.params.dropdownContainerEl ? y(e.params.dropdownContainerEl).append(e.$dropdownEl) : a.length === 0 ? e.$dropdownEl.insertAfter(e.$inputEl) : (e.positionDropdown(), a.append(e.$dropdownEl)), e.onOpen("dropdown", e.$dropdownEl), e.onOpened("dropdown", e.$dropdownEl)
  }
  open() {
    const e = this;
    if (e.opened) return e;
    const a = e.params.openIn;
    return e[`open${a.split("").map((t,n)=>n===0?t.toUpperCase():t).join("")}`](), e
  }
  close() {
    const e = this;
    return e.opened && (e.params.openIn === "dropdown" ? (e.onClose(), e.onClosed()) : e.params.routableModals && e.view || e.openedIn === "page" ? e.view.router.back({
      animate: e.params.animate
    }) : (e.modal.once("modalClosed", () => {
      ke(() => {
        e.destroyed || (e.modal.destroy(), delete e.modal)
      })
    }), e.modal.close())), e
  }
  init() {
    this.attachEvents()
  }
  destroy() {
    const e = this;
    e.emit("local::beforeDestroy autocompleteBeforeDestroy", e), e.detachEvents(), e.$inputEl && e.$inputEl[0] && delete e.$inputEl[0].f7Autocomplete, e.$openerEl && e.$openerEl[0] && delete e.$openerEl[0].f7Autocomplete, $e(e), e.destroyed = !0
  }
}
var wn = hp,
  wu = {
    name: "autocomplete",
    params: {
      autocomplete: {
        openerEl: void 0,
        inputEl: void 0,
        view: void 0,
        dropdownContainerEl: void 0,
        dropdownPlaceholderText: void 0,
        typeahead: !1,
        highlightMatches: !0,
        updateInputValueOnSelect: !0,
        inputEvents: "input",
        value: void 0,
        multiple: !1,
        source: void 0,
        limit: void 0,
        valueProperty: "id",
        textProperty: "text",
        openIn: "page",
        pageBackLinkText: "Back",
        popupCloseLinkText: "Close",
        pageTitle: void 0,
        searchbarPlaceholder: "Search...",
        searchbarDisableText: "Cancel",
        searchbarDisableButton: !0,
        searchbarSpellcheck: !1,
        popupPush: !1,
        popupSwipeToClose: void 0,
        animate: !0,
        autoFocus: !1,
        closeOnSelect: !1,
        notFoundText: "Nothing found",
        requestSourceOnOpen: !1,
        preloaderColor: void 0,
        preloader: !1,
        formColorTheme: void 0,
        navbarColorTheme: void 0,
        routableModals: !1,
        url: "select/",
        renderDropdown: void 0,
        renderPage: void 0,
        renderPopup: void 0,
        renderItem: void 0,
        renderSearchbar: void 0,
        renderNavbar: void 0
      }
    },
    static: {
      Autocomplete: wn
    },
    create() {
      const r = this;
      r.autocomplete = H(xe({
        defaultSelector: void 0,
        constructor: wn,
        app: r,
        domProp: "f7Autocomplete"
      }), {
        open(e) {
          const a = r.autocomplete.get(e);
          if (a && a.open) return a.open()
        },
        close(e) {
          const a = r.autocomplete.get(e);
          if (a && a.close) return a.close()
        }
      })
    }
  };
class mp extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this,
      n = ve(),
      s = H({}, e.params.tooltip),
      i = ee();
    t.useModulesParams(s), t.params = H(s, a), typeof a.offset == "undefined" && n.touch && t.params.trigger === "hover" && (t.params.offset = 10);
    const {
      targetEl: o,
      containerEl: l
    } = t.params;
    if (!o && !t.params.delegated) return t;
    const c = y(o);
    if (c.length === 0 && !t.params.delegated) return t;
    if (c[0] && c[0].f7Tooltip && !t.params.delegated) return c[0].f7Tooltip;
    let d = y(l || e.$el).eq(0);
    d.length === 0 && (d = e.$el);
    const p = y(t.render()).eq(0);
    H(t, {
      app: e,
      $targetEl: c,
      targetEl: c && c[0],
      $containerEl: d,
      containerEl: d && d[0],
      $el: p,
      el: p && p[0],
      text: t.params.text || "",
      visible: !1,
      opened: !1
    }), c[0] && (c[0].f7Tooltip = t);
    const u = {};
    let g;

    function h() {
      t.opened ? t.hide() : t.show(this)
    }

    function f(C) {
      t.opened && (y(C.target).closest(c).length || y(C.target).closest(t.$el).length) || t.hide()
    }

    function b(C) {
      g || (g = !0, u.x = C.type === "touchstart" ? C.targetTouches[0].pageX : C.pageX, u.y = C.type === "touchstart" ? C.targetTouches[0].pageY : C.pageY, t.show(this))
    }

    function m(C) {
      if (!g) return;
      const x = C.type === "touchmove" ? C.targetTouches[0].pageX : C.pageX,
        M = C.type === "touchmove" ? C.targetTouches[0].pageY : C.pageY;
      ((x - u.x) ** 2 + (M - u.y) ** 2) ** .5 > 50 && (g = !1, t.hide())
    }

    function v() {
      !g || (g = !1, t.hide())
    }

    function E() {
      t.show(this)
    }

    function $() {
      t.hide()
    }

    function w() {
      p.hasClass("tooltip-in") || p.removeClass("tooltip-out").remove()
    }
    return t.attachEvents = function () {
      if (p.on("transitionend", w), t.params.trigger === "click") {
        t.params.delegated ? y(i).on("click", t.params.targetEl, h) : t.$targetEl.on("click", h), y("html").on("click", f);
        return
      }
      if (t.params.trigger !== "manual")
        if (n.touch) {
          const x = n.passiveListener ? {
            passive: !0
          } : !1;
          t.params.delegated ? y(i).on(e.touchEvents.start, t.params.targetEl, b, x) : t.$targetEl.on(e.touchEvents.start, b, x), e.on("touchmove", m), e.on("touchend:passive", v)
        } else t.params.delegated ? (y(i).on(n.pointerEvents ? "pointerenter" : "mouseenter", t.params.targetEl, E, !0), y(i).on(n.pointerEvents ? "pointerleave" : "mouseleave", t.params.targetEl, $, !0)) : (t.$targetEl.on(n.pointerEvents ? "pointerenter" : "mouseenter", E), t.$targetEl.on(n.pointerEvents ? "pointerleave" : "mouseleave", $))
    }, t.detachEvents = function () {
      if (p.off("transitionend", w), t.params.trigger === "click") {
        t.params.delegated ? y(i).on("click", t.params.targetEl, h) : t.$targetEl.off("click", h), y("html").off("click", f);
        return
      }
      if (t.params.trigger !== "manual")
        if (n.touch) {
          const x = n.passiveListener ? {
            passive: !0
          } : !1;
          t.params.delegated ? y(i).off(e.touchEvents.start, t.params.targetEl, b, x) : t.$targetEl.off(e.touchEvents.start, b, x), e.off("touchmove", m), e.off("touchend:passive", v)
        } else t.params.delegated ? (y(i).off(n.pointerEvents ? "pointerenter" : "mouseenter", t.params.targetEl, E, !0), y(i).off(n.pointerEvents ? "pointerleave" : "mouseleave", t.params.targetEl, $, !0)) : (t.$targetEl.off(n.pointerEvents ? "pointerenter" : "mouseenter", E), t.$targetEl.off(n.pointerEvents ? "pointerleave" : "mouseleave", $))
    }, t.useModules(), t.init(), t
  }
  setTargetEl(e) {
    const a = this;
    return a.detachEvents(), a.$targetEl = y(e), a.targetEl = a.$targetEl[0], a.attachEvents(), a
  }
  position(e) {
    const a = this,
      {
        $el: t,
        app: n,
        $containerEl: s
      } = a,
      i = !!a.params.containerEl,
      o = a.params.offset || 0;
    t.css({
      left: "",
      top: ""
    });
    const l = y(e || a.targetEl),
      [c, d] = [t.width(), t.height()];
    t.css({
      left: "",
      top: ""
    });
    let p, u, g, h;
    const f = i && s.length ? s[0].getBoundingClientRect() : n;
    if (l && l.length > 0) {
      if (p = l.outerWidth(), u = l.outerHeight(), typeof p == "undefined" && typeof u == "undefined") {
        const w = l[0].getBoundingClientRect();
        p = w.width, u = w.height
      }
      const E = l.offset();
      g = E.left - f.left, h = E.top - f.top;
      const $ = l.parents(".page");
      $.length > 0 && (h -= $[0].scrollTop)
    }
    let [b, m] = [0, 0, 0], v = "top";
    d + o < h ? m = h - d - o : d < f.height - h - u ? (v = "bottom", m = h + u + o) : (v = "middle", m = u / 2 + h - d / 2, m <= 0 ? m = 8 : m + d >= f.height && (m = f.height - d - 8)), v === "top" || v === "bottom" ? (b = p / 2 + g - c / 2, b < 8 && (b = 8), b + c > f.width && (b = f.width - c - 8), b < 0 && (b = 0)) : v === "middle" && (b = g - c, (b < 8 || b + c > f.width) && (b < 8 && (b = g + p), b + c > f.width && (b = f.width - c - 8))), t.css({
      top: `${m}px`,
      left: `${b}px`
    })
  }
  show(e) {
    const a = this,
      {
        $el: t,
        $targetEl: n,
        $containerEl: s
      } = a;
    s[0] && t[0] && !s[0].contains(t[0]) && s.append(t), a.position(e);
    const i = y(e);
    return a.visible = !0, a.opened = !0, n.trigger("tooltip:show"), t.trigger("tooltip:show"), i.length && i[0] !== n[0] && i.trigger("tooltip:show"), a.emit("local::show tooltipShow", a), t.removeClass("tooltip-out").addClass("tooltip-in"), a
  }
  hide() {
    const e = this,
      {
        $el: a,
        $targetEl: t
      } = e;
    return e.visible = !1, e.opened = !1, t.trigger("tooltip:hide"), a.trigger("tooltip:hide"), e.emit("local::hide tooltipHide", e), a.addClass("tooltip-out").removeClass("tooltip-in"), e
  }
  render() {
    const e = this;
    if (e.params.render) return e.params.render.call(e, e);
    const {
      cssClass: a,
      text: t
    } = e.params;
    return `
      <div class="tooltip ${a||""}">
        <div class="tooltip-content">${t||""}</div>
      </div>
    `.trim()
  }
  setText(e) {
    const a = this;
    return typeof e == "undefined" || (a.params.text = e, a.text = e, a.$el && a.$el.children(".tooltip-content").html(e), a.opened && a.position()), a
  }
  init() {
    this.attachEvents()
  }
  destroy() {
    const e = this;
    !e.$targetEl || e.destroyed || (e.$targetEl.trigger("tooltip:beforedestroy"), e.emit("local::beforeDestroy tooltipBeforeDestroy", e), e.$el.remove(), e.$targetEl[0] && delete e.$targetEl[0].f7Tooltip, e.detachEvents(), $e(e), e.destroyed = !0)
  }
}
var Cn = mp,
  Cu = {
    name: "tooltip",
    static: {
      Tooltip: Cn
    },
    create() {
      const r = this;
      r.tooltip = xe({
        defaultSelector: ".tooltip",
        constructor: Cn,
        app: r,
        domProp: "f7Tooltip"
      }), r.tooltip.show = function (a) {
        const t = y(a);
        if (t.length === 0) return;
        const n = t[0].f7Tooltip;
        if (!!n) return n.show(t[0]), n
      }, r.tooltip.hide = function (a) {
        const t = y(a);
        if (t.length === 0) return;
        const n = t[0].f7Tooltip;
        if (!!n) return n.hide(), n
      }, r.tooltip.setText = function (a, t) {
        const n = y(a);
        if (n.length === 0) return;
        const s = n[0].f7Tooltip;
        if (!!s) return s.setText(t), s
      }
    },
    params: {
      tooltip: {
        targetEl: null,
        delegated: !1,
        text: null,
        cssClass: null,
        render: null,
        offset: 0,
        trigger: "hover",
        containerEl: void 0
      }
    },
    on: {
      tabMounted(r) {
        const e = this;
        y(r).find(".tooltip-init").each(a => {
          const t = y(a).attr("data-tooltip");
          !t || e.tooltip.create({
            targetEl: a,
            text: t
          })
        })
      },
      tabBeforeRemove(r) {
        y(r).find(".tooltip-init").each(e => {
          e.f7Tooltip && e.f7Tooltip.destroy()
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".tooltip-init").each(a => {
          const t = y(a).attr("data-tooltip");
          !t || e.tooltip.create({
            targetEl: a,
            text: t
          })
        }), e.theme === "ios" && r.view && r.view.router.dynamicNavbar && r.$navbarEl && r.$navbarEl.length > 0 && r.$navbarEl.find(".tooltip-init").each(a => {
          const t = y(a).attr("data-tooltip");
          !t || e.tooltip.create({
            targetEl: a,
            text: t
          })
        })
      },
      pageBeforeRemove(r) {
        const e = this;
        r.$el.find(".tooltip-init").each(a => {
          a.f7Tooltip && a.f7Tooltip.destroy()
        }), e.theme === "ios" && r.view && r.view.router.dynamicNavbar && r.$navbarEl && r.$navbarEl.length > 0 && r.$navbarEl.find(".tooltip-init").each(a => {
          a.f7Tooltip && a.f7Tooltip.destroy()
        })
      }
    },
    vnode: {
      "tooltip-init": {
        insert(r) {
          const e = this,
            a = r.elm,
            t = y(a).attr("data-tooltip");
          !t || e.tooltip.create({
            targetEl: a,
            text: t
          })
        },
        update(r) {
          const e = r.elm;
          !e.f7Tooltip || r && r.data && r.data.attrs && r.data.attrs["data-tooltip"] && e.f7Tooltip.setText(r.data.attrs["data-tooltip"])
        },
        destroy(r) {
          const e = r.elm;
          e.f7Tooltip && e.f7Tooltip.destroy()
        }
      }
    }
  },
  $u = {
    name: "skeleton"
  },
  gp = {
    render(r) {
      const {
        sliderLabel: e,
        sliderValue: a,
        sliderValueEditable: t,
        alphaLabelText: n
      } = r.params;
      return T("div", {
        class: "color-picker-module color-picker-module-alpha-slider"
      }, T("div", {
        class: "color-picker-slider-wrap"
      }, e && T("div", {
        class: "color-picker-slider-label"
      }, n), T("div", {
        class: "range-slider color-picker-slider color-picker-slider-alpha"
      }), a && T("div", {
        class: "color-picker-slider-value"
      }, t ? T("input", {
        type: "number",
        step: "0.01",
        min: "0",
        max: "1",
        class: "color-picker-value-alpha"
      }) : T("span", {
        class: "color-picker-value-alpha"
      }))))
    },
    init(r) {
      r.alphaRangeSlider = r.app.range.create({
        el: r.$el.find(".color-picker-slider-alpha"),
        min: 0,
        max: 1,
        step: .01,
        value: 1,
        on: {
          change(a, t) {
            const n = Math.floor(t * 100) / 100;
            r.setValue({
              alpha: n
            })
          }
        }
      });

      function e(a) {
        const t = r.value.alpha;
        let n = parseFloat(a.target.value);
        if (Number.isNaN(n)) {
          a.target.value = t;
          return
        }
        n = Math.max(0, Math.min(1, n)), r.setValue({
          alpha: n
        })
      }
      r.$el.on("change", ".color-picker-module-alpha-slider input", e), r.destroyAlphaSliderEvents = function () {
        r.$el.off("change", ".color-picker-module-alpha-slider input", e)
      }
    },
    update(r) {
      const {
        value: e
      } = r, {
        sliderValue: a,
        sliderValueEditable: t
      } = r.params, {
        alpha: n
      } = e;
      r.alphaRangeSlider.value = n, r.alphaRangeSlider.layout(), a && t ? r.$el.find("input.color-picker-value-alpha").val(n) : r.$el.find("span.color-picker-value-alpha").text(n)
    },
    destroy(r) {
      r.alphaRangeSlider && r.alphaRangeSlider.destroy && r.alphaRangeSlider.destroy(), delete r.alphaRangeSlider, r.destroyAlphaSliderEvents && r.destroyAlphaSliderEvents(), delete r.destroyAlphaSliderEvents
    }
  },
  vp = {
    render() {
      return T("div", {
        class: "color-picker-module color-picker-module-current-color"
      }, T("div", {
        class: "color-picker-current-color"
      }))
    },
    update(r) {
      r.$el.find(".color-picker-module-current-color .color-picker-current-color").css("background-color", r.value.hex)
    }
  },
  bp = {
    render(r) {
      const {
        hexLabel: e,
        hexLabelText: a,
        hexValueEditable: t
      } = r.params;
      return T("div", {
        class: "color-picker-module color-picker-module-hex"
      }, T("div", {
        class: "color-picker-hex-wrap"
      }, e && T("div", {
        class: "color-picker-hex-label"
      }, a), T("div", {
        class: "color-picker-hex-value"
      }, t ? T("input", {
        type: "text",
        class: "color-picker-value-hex"
      }) : T("span", {
        class: "color-picker-value-hex"
      }))))
    },
    init(r) {
      function e(a) {
        const t = r.value.hex;
        let n = a.target.value.replace(/#/g, "");
        if (Number.isNaN(n) || !n || n.length !== 3 && n.length !== 6) {
          a.target.value = t;
          return
        }
        const s = 0,
          i = parseInt(n, 16),
          o = parseInt("ffffff", 16);
        i > o && (n = "fff"), i < s && (n = "000"), r.setValue({
          hex: n
        })
      }
      r.$el.on("change", ".color-picker-module-hex input", e), r.destroyHexEvents = function () {
        r.$el.off("change", ".color-picker-module-hex input", e)
      }
    },
    update(r) {
      const {
        value: e
      } = r, {
        hexValueEditable: a
      } = r.params, {
        hex: t
      } = e;
      a ? r.$el.find("input.color-picker-value-hex").val(t) : r.$el.find("span.color-picker-value-hex").text(t)
    },
    destroy(r) {
      r.destroyHexEvents && r.destroyHexEvents(), delete r.destroyHexEvents
    }
  },
  yp = {
    render(r) {
      const {
        sliderLabel: e,
        sliderValue: a,
        sliderValueEditable: t,
        hueLabelText: n,
        saturationLabelText: s,
        brightnessLabelText: i
      } = r.params;
      return T("div", {
        class: "color-picker-module color-picker-module-hsb-sliders"
      }, T("div", {
        class: "color-picker-slider-wrap"
      }, e && T("div", {
        class: "color-picker-slider-label"
      }, n), T("div", {
        class: "range-slider color-picker-slider color-picker-slider-hue"
      }), a && T("div", {
        class: "color-picker-slider-value"
      }, t ? T("input", {
        type: "number",
        step: "0.1",
        min: "0",
        max: "360",
        class: "color-picker-value-hue",
        "data-color-index": "0"
      }) : T("span", {
        class: "color-picker-value-hue"
      }))), T("div", {
        class: "color-picker-slider-wrap"
      }, e && T("div", {
        class: "color-picker-slider-label"
      }, s), T("div", {
        class: "range-slider color-picker-slider color-picker-slider-saturation"
      }), a && T("div", {
        class: "color-picker-slider-value"
      }, t ? T("input", {
        type: "number",
        step: "0.1",
        min: "0",
        max: "100",
        class: "color-picker-value-saturation",
        "data-color-index": "1"
      }) : T("span", {
        class: "color-picker-value-saturation"
      }))), T("div", {
        class: "color-picker-slider-wrap"
      }, e && T("div", {
        class: "color-picker-slider-label"
      }, i), T("div", {
        class: "range-slider color-picker-slider color-picker-slider-brightness"
      }), a && T("div", {
        class: "color-picker-slider-value"
      }, t ? T("input", {
        type: "number",
        step: "0.1",
        min: "0",
        max: "100",
        class: "color-picker-value-brightness",
        "data-color-index": "2"
      }) : T("span", {
        class: "color-picker-value-brightness"
      }))))
    },
    init(r) {
      r.hueRangeSlider = r.app.range.create({
        el: r.$el.find(".color-picker-slider-hue"),
        min: 0,
        max: 360,
        step: .1,
        value: 0,
        on: {
          change(a, t) {
            r.setValue({
              hue: t
            })
          }
        }
      }), r.saturationRangeSlider = r.app.range.create({
        el: r.$el.find(".color-picker-slider-saturation"),
        min: 0,
        max: 1,
        step: .001,
        value: 0,
        on: {
          change(a, t) {
            const n = Math.floor(t * 1e3) / 1e3;
            r.setValue({
              hsb: [r.value.hsb[0], n, r.value.hsb[2]]
            })
          }
        }
      }), r.brightnessRangeSlider = r.app.range.create({
        el: r.$el.find(".color-picker-slider-brightness"),
        min: 0,
        max: 1,
        step: .001,
        value: 0,
        on: {
          change(a, t) {
            const n = Math.floor(t * 1e3) / 1e3;
            r.setValue({
              hsb: [r.value.hsb[0], r.value.hsb[1], n]
            })
          }
        }
      });

      function e(a) {
        const t = [...r.value.hsb],
          n = parseInt(y(a.target).attr("data-color-index"), 10);
        let s = parseFloat(a.target.value);
        if (Number.isNaN(s)) {
          a.target.value = t[n];
          return
        }
        n === 0 ? s = Math.max(0, Math.min(360, s)) : s = Math.max(0, Math.min(100, s)) / 100, t[n] = s, r.setValue({
          hsb: t
        })
      }
      r.$el.on("change", ".color-picker-module-hsb-sliders input", e), r.destroyHsbSlidersEvents = function () {
        r.$el.off("change", ".color-picker-module-hsb-sliders input", e)
      }
    },
    update(r) {
      const {
        app: e,
        value: a
      } = r, {
        sliderValue: t,
        sliderValueEditable: n
      } = r.params, {
        hsb: s,
        hue: i
      } = a;
      r.hueRangeSlider.value = i, r.saturationRangeSlider.value = s[1], r.brightnessRangeSlider.value = s[2], r.hueRangeSlider.layout(), r.saturationRangeSlider.layout(), r.brightnessRangeSlider.layout();
      const o = Qe(s[0], s[1], 1),
        l = Qe(s[0], 0, 1),
        c = Qe(s[0], 1, 1),
        d = s[2];
      r.hueRangeSlider.$el[0].style.setProperty("--f7-range-knob-color", `hsl(${i}, 100%, 50%)`), r.saturationRangeSlider.$el[0].style.setProperty("--f7-range-knob-color", `hsl(${o[0]}, ${o[1]*100}%, ${o[2]*100}%)`), r.brightnessRangeSlider.$el[0].style.setProperty("--f7-range-knob-color", `rgb(${d*255}, ${d*255}, ${d*255})`), r.saturationRangeSlider.$el.find(".range-bar").css("background-image", `linear-gradient(${e.rtl?"to left":"to right"}, hsl(${l[0]}, ${l[1]*100}%, ${l[2]*100}%), hsl(${c[0]}, ${c[1]*100}%, ${c[2]*100}%))`), t && n ? (r.$el.find("input.color-picker-value-hue").val(`${i}`), r.$el.find("input.color-picker-value-saturation").val(`${s[1]*1e3/10}`), r.$el.find("input.color-picker-value-brightness").val(`${s[2]*1e3/10}`)) : t && (r.$el.find("span.color-picker-value-hue").text(`${i}`), r.$el.find("span.color-picker-value-saturation").text(`${s[1]*1e3/10}`), r.$el.find("span.color-picker-value-brightness").text(`${s[2]*1e3/10}`))
    },
    destroy(r) {
      r.hueRangeSlider && r.hueRangeSlider.destroy && r.hueRangeSlider.destroy(), r.saturationRangeSlider && r.saturationRangeSlider.destroy && r.saturationRangeSlider.destroy(), r.brightnessRangeSlider && r.brightnessRangeSlider.destroy && r.brightnessRangeSlider.destroy(), delete r.hueRangeSlider, delete r.saturationRangeSlider, delete r.brightnessRangeSlider, r.destroyHsbSlidersEvents && r.destroyHsbSlidersEvents(), delete r.destroyHsbSlidersEvents
    }
  },
  Ep = {
    render(r) {
      const {
        sliderLabel: e,
        sliderValue: a,
        sliderValueEditable: t,
        hueLabelText: n
      } = r.params;
      return T("div", {
        class: "color-picker-module color-picker-module-hue-slider"
      }, T("div", {
        class: "color-picker-slider-wrap"
      }, e && T("div", {
        class: "color-picker-slider-label"
      }, n), T("div", {
        class: "range-slider color-picker-slider color-picker-slider-hue"
      }), a && T("div", {
        class: "color-picker-slider-value"
      }, t ? T("input", {
        type: "number",
        step: "0.1",
        min: "0",
        max: "360",
        class: "color-picker-value-hue"
      }) : T("span", {
        class: "color-picker-value-hue"
      }))))
    },
    init(r) {
      r.hueRangeSlider = r.app.range.create({
        el: r.$el.find(".color-picker-slider-hue"),
        min: 0,
        max: 360,
        step: .1,
        value: 0,
        on: {
          change(e, a) {
            r.setValue({
              hue: a
            })
          }
        }
      })
    },
    update(r) {
      const {
        value: e
      } = r, {
        sliderValue: a,
        sliderValueEditable: t
      } = r.params, {
        hue: n
      } = e;
      r.hueRangeSlider.value = n, r.hueRangeSlider.layout(), r.hueRangeSlider.$el[0].style.setProperty("--f7-range-knob-color", `hsl(${n}, 100%, 50%)`), a && t ? r.$el.find("input.color-picker-value-hue").val(`${n}`) : a && r.$el.find("span.color-picker-value-hue").text(`${n}`)
    },
    destroy(r) {
      r.hueRangeSlider && r.hueRangeSlider.destroy && r.hueRangeSlider.destroy(), delete r.hueRangeSlider
    }
  },
  wp = {
    render(r) {
      const {
        sliderLabel: e,
        sliderValue: a,
        sliderValueEditable: t,
        brightnessLabelText: n
      } = r.params;
      return T("div", {
        class: "color-picker-module color-picker-module-brightness-slider"
      }, T("div", {
        class: "color-picker-slider-wrap"
      }, e && T("div", {
        class: "color-picker-slider-label"
      }, n), T("div", {
        class: "range-slider color-picker-slider color-picker-slider-brightness"
      }), a && T("div", {
        class: "color-picker-slider-value"
      }, t ? T("input", {
        type: "number",
        step: "0.1",
        min: "0",
        max: "100",
        class: "color-picker-value-brightness"
      }) : T("span", {
        class: "color-picker-value-brightness"
      }))))
    },
    init(r) {
      r.brightnessRangeSlider = r.app.range.create({
        el: r.$el.find(".color-picker-slider-brightness"),
        min: 0,
        max: 1,
        step: .001,
        value: 0,
        on: {
          change(e, a) {
            const t = Math.floor(a * 1e3) / 1e3;
            r.setValue({
              hsb: [r.value.hsb[0], r.value.hsb[1], t]
            })
          }
        }
      })
    },
    update(r) {
      const {
        value: e,
        app: a
      } = r, {
        sliderValue: t,
        sliderValueEditable: n
      } = r.params, {
        hsb: s
      } = e;
      r.brightnessRangeSlider.value = s[2], r.brightnessRangeSlider.layout();
      const i = Qe(s[0], s[1], s[2]),
        o = Qe(s[0], s[1], 0),
        l = Qe(s[0], s[1], 1);
      r.brightnessRangeSlider.$el[0].style.setProperty("--f7-range-knob-color", `hsl(${i[0]}, ${i[1]*100}%, ${i[2]*100}%)`), r.brightnessRangeSlider.$el.find(".range-bar").css("background-image", `linear-gradient(${a.rtl?"to left":"to right"}, hsl(${o[0]}, ${o[1]*100}%, ${o[2]*100}%), hsl(${l[0]}, ${l[1]*100}%, ${l[2]*100}%))`), t && n ? r.$el.find("input.color-picker-value-brightness").val(`${s[2]*1e3/10}`) : t && r.$el.find("span.color-picker-value-brightness").text(`${s[2]*1e3/10}`)
    },
    destroy(r) {
      r.brightnessRangeSlider && r.brightnessRangeSlider.destroy && r.brightnessRangeSlider.destroy(), delete r.brightnessRangeSlider
    }
  },
  Cp = {
    render(r) {
      return T("div", {
        class: "color-picker-module color-picker-module-palette"
      }, T("div", {
        class: "color-picker-palette"
      }, r.params.palette.map(e => {
        if (Array.isArray(e)) {
          let a = '<div class="color-picker-palette-row">';
          return a += e.map(t => `
                <div class="color-picker-palette-value" data-palette-color="${t}" style="background-color: ${t}"></div>
              `).join(""), a += "</div>", a
        }
        return T("div", {
          class: "color-picker-palette-value",
          "data-palette-color": e,
          style: `background-color: ${e}`
        })
      })))
    },
    init(r) {
      function e(a) {
        const t = y(a.target).attr("data-palette-color");
        r.setValue({
          hex: t
        })
      }
      r.$el.on("click", ".color-picker-module-palette .color-picker-palette-value", e), r.destroyPaletteEvents = function () {
        r.$el.off("click", ".color-picker-module-hex input", e)
      }
    },
    destroy(r) {
      r.destroyPaletteEvents && r.destroyPaletteEvents(), delete r.destroyPaletteEvents
    }
  },
  $p = {
    render() {
      return T("div", {
        class: "color-picker-module color-picker-module-initial-current-colors"
      }, T("div", {
        class: "color-picker-initial-current-colors"
      }, T("div", {
        class: "color-picker-initial-color"
      }), T("div", {
        class: "color-picker-current-color"
      })))
    },
    init(r) {
      function e() {
        if (r.initialValue) {
          const {
            hex: a,
            alpha: t
          } = r.initialValue;
          r.setValue({
            hex: a,
            alpha: t
          })
        }
      }
      r.$el.on("click", ".color-picker-initial-color", e), r.destroyInitialCurrentEvents = function () {
        r.$el.off("click", ".color-picker-initial-color", e)
      }
    },
    update(r) {
      r.$el.find(".color-picker-module-initial-current-colors .color-picker-initial-color").css("background-color", r.initialValue.hex), r.$el.find(".color-picker-module-initial-current-colors .color-picker-current-color").css("background-color", r.value.hex)
    },
    destroy(r) {
      r.destroyInitialCurrentEvents && r.destroyInitialCurrentEvents(), delete r.destroyInitialCurrentEvents
    }
  },
  xp = {
    render(r) {
      const {
        barLabel: e,
        barValue: a,
        barValueEditable: t,
        redLabelText: n,
        greenLabelText: s,
        blueLabelText: i
      } = r.params;
      return T("div", {
        class: "color-picker-module color-picker-module-rgb-bars"
      }, T("div", {
        class: "color-picker-bar-wrap"
      }, e && T("div", {
        class: "color-picker-bar-label"
      }, n), T("div", {
        class: "range-slider color-picker-bar color-picker-bar-red"
      }), a && T("div", {
        class: "color-picker-bar-value"
      }, t ? T("input", {
        type: "number",
        step: "1",
        min: "0",
        max: "255",
        class: "color-picker-value-bar-red",
        "data-color-index": "0"
      }) : T("span", {
        class: "color-picker-value-bar-red"
      }))), T("div", {
        class: "color-picker-bar-wrap"
      }, e && T("div", {
        class: "color-picker-bar-label"
      }, s), T("div", {
        class: "range-slider color-picker-bar color-picker-bar-green"
      }), a && T("div", {
        class: "color-picker-bar-value"
      }, t ? T("input", {
        type: "number",
        step: "1",
        min: "0",
        max: "255",
        class: "color-picker-value-bar-green",
        "data-color-index": "1"
      }) : T("span", {
        class: "color-picker-value-bar-green"
      }))), T("div", {
        class: "color-picker-bar-wrap"
      }, e && T("div", {
        class: "color-picker-bar-label"
      }, i), T("div", {
        class: "range-slider color-picker-bar color-picker-bar-blue"
      }), a && T("div", {
        class: "color-picker-bar-value"
      }, t ? T("input", {
        type: "number",
        step: "1",
        min: "0",
        max: "255",
        class: "color-picker-value-bar-blue",
        "data-color-index": "2"
      }) : T("span", {
        class: "color-picker-value-bar-blue"
      }))))
    },
    init(r) {
      r.redBar = r.app.range.create({
        el: r.$el.find(".color-picker-bar-red"),
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        vertical: !0,
        on: {
          change(a, t) {
            r.setValue({
              rgb: [t, r.value.rgb[1], r.value.rgb[2]]
            })
          }
        }
      }), r.greenBar = r.app.range.create({
        el: r.$el.find(".color-picker-bar-green"),
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        vertical: !0,
        on: {
          change(a, t) {
            r.setValue({
              rgb: [r.value.rgb[0], t, r.value.rgb[2]]
            })
          }
        }
      }), r.blueBar = r.app.range.create({
        el: r.$el.find(".color-picker-bar-blue"),
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        vertical: !0,
        on: {
          change(a, t) {
            r.setValue({
              rgb: [r.value.rgb[0], r.value.rgb[1], t]
            })
          }
        }
      });

      function e(a) {
        const t = [...r.value.rgb],
          n = parseInt(y(a.target).attr("data-color-index"), 10);
        let s = parseInt(a.target.value, 10);
        if (Number.isNaN(s)) {
          a.target.value = t[n];
          return
        }
        s = Math.max(0, Math.min(255, s)), t[n] = s, r.setValue({
          rgb: t
        })
      }
      r.$el.on("change", ".color-picker-module-rgb-bars input", e), r.destroyRgbBarsEvents = function () {
        r.$el.off("change", ".color-picker-module-rgb-bars input", e)
      }
    },
    update(r) {
      const {
        value: e,
        redBar: a,
        greenBar: t,
        blueBar: n
      } = r, {
        barValue: s,
        barValueEditable: i
      } = r.params, {
        rgb: o
      } = e;
      a.value = o[0], t.value = o[1], n.value = o[2], a.layout(), t.layout(), n.layout(), a.$el.find(".range-bar").css("background-image", `linear-gradient(to top, rgb(0, ${o[1]}, ${o[2]}), rgb(255, ${o[1]}, ${o[2]}))`), t.$el.find(".range-bar").css("background-image", `linear-gradient(to top, rgb(${o[0]}, 0, ${o[2]}), rgb(${o[0]}, 255, ${o[2]}))`), n.$el.find(".range-bar").css("background-image", `linear-gradient(to top, rgb(${o[0]}, ${o[1]}, 0), rgb(${o[0]}, ${o[1]}, 255))`), s && i ? (r.$el.find("input.color-picker-value-bar-red").val(o[0]), r.$el.find("input.color-picker-value-bar-green").val(o[1]), r.$el.find("input.color-picker-value-bar-blue").val(o[2])) : s && (r.$el.find("span.color-picker-value-bar-red").text(o[0]), r.$el.find("span.color-picker-value-bar-green").text(o[1]), r.$el.find("span.color-picker-value-bar-blue").text(o[2]))
    },
    destroy(r) {
      r.redBar && r.redBar.destroy && r.redBar.destroy(), r.greenBar && r.greenBar.destroy && r.greenBar.destroy(), r.blueBar && r.blueBar.destroy && r.blueBar.destroy(), delete r.redBar, delete r.greenBar, delete r.blueBar, r.destroyRgbBarsEvents && r.destroyRgbBarsEvents(), delete r.destroyRgbBarsEvents
    }
  },
  kp = {
    render(r) {
      const {
        sliderLabel: e,
        sliderValue: a,
        sliderValueEditable: t,
        redLabelText: n,
        greenLabelText: s,
        blueLabelText: i
      } = r.params;
      return T("div", {
        class: "color-picker-module color-picker-module-rgb-sliders"
      }, T("div", {
        class: "color-picker-slider-wrap"
      }, e && T("div", {
        class: "color-picker-slider-label"
      }, n), T("div", {
        class: "range-slider color-picker-slider color-picker-slider-red"
      }), a && T("div", {
        class: "color-picker-slider-value"
      }, t ? T("input", {
        type: "number",
        step: "1",
        min: "0",
        max: "255",
        class: "color-picker-value-red",
        "data-color-index": "0"
      }) : T("span", {
        class: "color-picker-value-red"
      }))), T("div", {
        class: "color-picker-slider-wrap"
      }, e && T("div", {
        class: "color-picker-slider-label"
      }, s), T("div", {
        class: "range-slider color-picker-slider color-picker-slider-green"
      }), a && T("div", {
        class: "color-picker-slider-value"
      }, t ? T("input", {
        type: "number",
        step: "1",
        min: "0",
        max: "255",
        class: "color-picker-value-green",
        "data-color-index": "1"
      }) : T("span", {
        class: "color-picker-value-green"
      }))), T("div", {
        class: "color-picker-slider-wrap"
      }, e && T("div", {
        class: "color-picker-slider-label"
      }, i), T("div", {
        class: "range-slider color-picker-slider color-picker-slider-blue"
      }), a && T("div", {
        class: "color-picker-slider-value"
      }, t ? T("input", {
        type: "number",
        step: "1",
        min: "0",
        max: "255",
        class: "color-picker-value-blue",
        "data-color-index": "2"
      }) : T("span", {
        class: "color-picker-value-blue"
      }))))
    },
    init(r) {
      r.redRangeSlider = r.app.range.create({
        el: r.$el.find(".color-picker-slider-red"),
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        on: {
          change(a, t) {
            r.setValue({
              rgb: [t, r.value.rgb[1], r.value.rgb[2]]
            })
          }
        }
      }), r.greenRangeSlider = r.app.range.create({
        el: r.$el.find(".color-picker-slider-green"),
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        on: {
          change(a, t) {
            r.setValue({
              rgb: [r.value.rgb[0], t, r.value.rgb[2]]
            })
          }
        }
      }), r.blueRangeSlider = r.app.range.create({
        el: r.$el.find(".color-picker-slider-blue"),
        min: 0,
        max: 255,
        step: 1,
        value: 0,
        on: {
          change(a, t) {
            r.setValue({
              rgb: [r.value.rgb[0], r.value.rgb[1], t]
            })
          }
        }
      });

      function e(a) {
        const t = [...r.value.rgb],
          n = parseInt(y(a.target).attr("data-color-index"), 10);
        let s = parseInt(a.target.value, 10);
        if (Number.isNaN(s)) {
          a.target.value = t[n];
          return
        }
        s = Math.max(0, Math.min(255, s)), t[n] = s, r.setValue({
          rgb: t
        })
      }
      r.$el.on("change", ".color-picker-module-rgb-sliders input", e), r.destroyRgbSlidersEvents = function () {
        r.$el.off("change", ".color-picker-module-rgb-sliders input", e)
      }
    },
    update(r) {
      const {
        app: e,
        value: a,
        redRangeSlider: t,
        greenRangeSlider: n,
        blueRangeSlider: s
      } = r, {
        sliderValue: i,
        sliderValueEditable: o
      } = r.params, {
        rgb: l
      } = a;
      t.value = l[0], n.value = l[1], s.value = l[2], t.layout(), n.layout(), s.layout(), t.$el[0].style.setProperty("--f7-range-knob-color", `rgb(${l[0]}, ${l[1]}, ${l[2]})`), n.$el[0].style.setProperty("--f7-range-knob-color", `rgb(${l[0]}, ${l[1]}, ${l[2]})`), s.$el[0].style.setProperty("--f7-range-knob-color", `rgb(${l[0]}, ${l[1]}, ${l[2]})`);
      const c = e.rtl ? "to left" : "to right";
      t.$el.find(".range-bar").css("background-image", `linear-gradient(${c}, rgb(0, ${l[1]}, ${l[2]}), rgb(255, ${l[1]}, ${l[2]}))`), n.$el.find(".range-bar").css("background-image", `linear-gradient(${c}, rgb(${l[0]}, 0, ${l[2]}), rgb(${l[0]}, 255, ${l[2]}))`), s.$el.find(".range-bar").css("background-image", `linear-gradient(${c}, rgb(${l[0]}, ${l[1]}, 0), rgb(${l[0]}, ${l[1]}, 255))`), i && o ? (r.$el.find("input.color-picker-value-red").val(l[0]), r.$el.find("input.color-picker-value-green").val(l[1]), r.$el.find("input.color-picker-value-blue").val(l[2])) : i && (r.$el.find("span.color-picker-value-red").text(l[0]), r.$el.find("span.color-picker-value-green").text(l[1]), r.$el.find("span.color-picker-value-blue").text(l[2]))
    },
    destroy(r) {
      r.redRangeSlider && r.redRangeSlider.destroy && r.redRangeSlider.destroy(), r.greenRangeSlider && r.greenRangeSlider.destroy && r.greenRangeSlider.destroy(), r.blueRangeSlider && r.blueRangeSlider.destroy && r.blueRangeSlider.destroy(), delete r.redRangeSlider, delete r.greenRangeSlider, delete r.blueRangeSlider, r.destroyRgbSlidersEvents && r.destroyRgbSlidersEvents(), delete r.destroyRgbSlidersEvents
    }
  },
  Tp = {
    render() {
      return T("div", {
        class: "color-picker-module color-picker-module-sb-spectrum"
      }, T("div", {
        class: "color-picker-sb-spectrum",
        style: "background-color: hsl(0, 100%, 50%)"
      }, T("div", {
        class: "color-picker-sb-spectrum-handle"
      })))
    },
    init(r) {
      const {
        app: e
      } = r;
      let a, t, n, s, i, o, l, c, d;
      const {
        $el: p
      } = r;

      function u(v, E) {
        let $ = (v - l.left) / l.width,
          w = (E - l.top) / l.height;
        $ = Math.max(0, Math.min(1, $)), w = 1 - Math.max(0, Math.min(1, w)), r.setValue({
          hsb: [r.value.hue, $, w]
        })
      }

      function g(v) {
        if (t || a) return;
        n = v.type === "touchstart" ? v.targetTouches[0].pageX : v.pageX, i = n, s = v.type === "touchstart" ? v.targetTouches[0].pageY : v.pageY, o = s;
        const E = y(v.target);
        d = E.closest(".color-picker-sb-spectrum-handle").length > 0, d || (c = E.closest(".color-picker-sb-spectrum").length > 0), c && (l = p.find(".color-picker-sb-spectrum")[0].getBoundingClientRect(), u(n, s)), (d || c) && p.find(".color-picker-sb-spectrum-handle").addClass("color-picker-sb-spectrum-handle-pressed")
      }

      function h(v) {
        !(c || d) || (i = v.type === "touchmove" ? v.targetTouches[0].pageX : v.pageX, o = v.type === "touchmove" ? v.targetTouches[0].pageY : v.pageY, v.preventDefault(), t || (t = !0, d && (l = p.find(".color-picker-sb-spectrum")[0].getBoundingClientRect())), (c || d) && u(i, o))
      }

      function f() {
        t = !1, (c || d) && p.find(".color-picker-sb-spectrum-handle").removeClass("color-picker-sb-spectrum-handle-pressed"), c = !1, d = !1
      }

      function b() {
        r.modules["sb-spectrum"].update(r)
      }
      const m = e.touchEvents.start === "touchstart" && ve().passiveListener ? {
        passive: !0,
        capture: !1
      } : !1;
      r.$el.on(e.touchEvents.start, g, m), e.on("touchmove:active", h), e.on("touchend:passive", f), e.on("resize", b), r.destroySpectrumEvents = function () {
        r.$el.off(e.touchEvents.start, g, m), e.off("touchmove:active", h), e.off("touchend:passive", f), e.off("resize", b)
      }
    },
    update(r) {
      const {
        value: e
      } = r, {
        hsl: a,
        hsb: t
      } = e, n = r.$el.find(".color-picker-sb-spectrum")[0].offsetWidth, s = r.$el.find(".color-picker-sb-spectrum")[0].offsetHeight;
      r.$el.find(".color-picker-sb-spectrum").css("background-color", `hsl(${a[0]}, 100%, 50%)`), r.$el.find(".color-picker-sb-spectrum-handle").css("background-color", `hsl(${a[0]}, ${a[1]*100}%, ${a[2]*100}%)`).transform(`translate(${n*t[1]}px, ${s*(1-t[2])}px)`)
    },
    destroy(r) {
      r.destroySpectrumEvents && r.destroySpectrumEvents(), delete r.destroySpectrumEvents
    }
  },
  Sp = {
    render() {
      return T("div", {
        class: "color-picker-module color-picker-module-hs-spectrum"
      }, T("div", {
        class: "color-picker-hs-spectrum"
      }, T("div", {
        class: "color-picker-hs-spectrum-handle"
      })))
    },
    init(r) {
      const {
        app: e
      } = r;
      let a, t, n, s, i, o, l, c, d;
      const {
        $el: p
      } = r;

      function u(v, E) {
        let $ = (v - l.left) / l.width * 360,
          w = (E - l.top) / l.height;
        $ = Math.max(0, Math.min(360, $)), w = 1 - Math.max(0, Math.min(1, w)), r.setValue({
          hsb: [$, w, r.value.hsb[2]]
        })
      }

      function g(v) {
        if (t || a) return;
        n = v.type === "touchstart" ? v.targetTouches[0].pageX : v.pageX, i = n, s = v.type === "touchstart" ? v.targetTouches[0].pageY : v.pageY, o = s;
        const E = y(v.target);
        d = E.closest(".color-picker-hs-spectrum-handle").length > 0, d || (c = E.closest(".color-picker-hs-spectrum").length > 0), c && (l = p.find(".color-picker-hs-spectrum")[0].getBoundingClientRect(), u(n, s)), (d || c) && p.find(".color-picker-hs-spectrum-handle").addClass("color-picker-hs-spectrum-handle-pressed")
      }

      function h(v) {
        !(c || d) || (i = v.type === "touchmove" ? v.targetTouches[0].pageX : v.pageX, o = v.type === "touchmove" ? v.targetTouches[0].pageY : v.pageY, v.preventDefault(), t || (t = !0, d && (l = p.find(".color-picker-hs-spectrum")[0].getBoundingClientRect())), (c || d) && u(i, o))
      }

      function f() {
        t = !1, (c || d) && p.find(".color-picker-hs-spectrum-handle").removeClass("color-picker-hs-spectrum-handle-pressed"), c = !1, d = !1
      }

      function b() {
        r.modules["hs-spectrum"].update(r)
      }
      const m = e.touchEvents.start === "touchstart" && ve().passiveListener ? {
        passive: !0,
        capture: !1
      } : !1;
      r.$el.on(e.touchEvents.start, g, m), e.on("touchmove:active", h), e.on("touchend:passive", f), e.on("resize", b), r.destroySpectrumEvents = function () {
        r.$el.off(e.touchEvents.start, g, m), e.off("touchmove:active", h), e.off("touchend:passive", f), e.off("resize", b)
      }
    },
    update(r) {
      const {
        value: e
      } = r, {
        hsb: a
      } = e, t = r.$el.find(".color-picker-hs-spectrum")[0].offsetWidth, n = r.$el.find(".color-picker-hs-spectrum")[0].offsetHeight, s = Qe(a[0], a[1], 1);
      r.$el.find(".color-picker-hs-spectrum-handle").css("background-color", `hsl(${s[0]}, ${s[1]*100}%, ${s[2]*100}%)`).transform(`translate(${t*(a[0]/360)}px, ${n*(1-a[1])}px)`)
    },
    destroy(r) {
      r.destroySpectrumEvents && r.destroySpectrumEvents(), delete r.destroySpectrumEvents
    }
  };

function Mp() {
  const r = 256;
  let e = "";
  for (let a = r; a > 0; a -= 1) {
    const t = a * Math.PI / (r / 2),
      n = 360 / r * a;
    e += `<circle cx="${150-Math.sin(t)*125}" cy="${150-Math.cos(t)*125}" r="25" fill="hsl(${n}, 100%, 50%)"></circle>`
  }
  return e
}
var Pp = {
  render() {
    return T("div", {
      class: "color-picker-module color-picker-module-wheel"
    }, T("div", {
      class: "color-picker-wheel"
    }, T("svg", {
      viewBox: "0 0 300 300",
      width: "300",
      height: "300"
    }, Mp()), T("div", {
      class: "color-picker-wheel-handle"
    }), T("div", {
      class: "color-picker-sb-spectrum",
      style: "background-color: hsl(0, 100%, 50%)"
    }, T("div", {
      class: "color-picker-sb-spectrum-handle"
    }))))
  },
  init(r) {
    const {
      app: e
    } = r;
    let a, t, n, s, i, o, l, c, d, p, u, g;
    const {
      $el: h
    } = r;

    function f(C, x) {
      const M = l.left + l.width / 2,
        A = l.top + l.height / 2;
      let S = Math.atan2(x - A, C - M) * 180 / Math.PI + 90;
      S < 0 && (S += 360), S = 360 - S, r.setValue({
        hue: S
      })
    }

    function b(C, x) {
      let M = (C - p.left) / p.width,
        A = (x - p.top) / p.height;
      M = Math.max(0, Math.min(1, M)), A = 1 - Math.max(0, Math.min(1, A)), r.setValue({
        hsb: [r.value.hue, M, A]
      })
    }

    function m(C) {
      if (t || a) return;
      n = C.type === "touchstart" ? C.targetTouches[0].pageX : C.pageX, i = n, s = C.type === "touchstart" ? C.targetTouches[0].pageY : C.pageY, o = s;
      const x = y(C.target);
      d = x.closest(".color-picker-wheel-handle").length > 0, c = x.closest("circle").length > 0, g = x.closest(".color-picker-sb-spectrum-handle").length > 0, g || (u = x.closest(".color-picker-sb-spectrum").length > 0), c && (l = h.find(".color-picker-wheel")[0].getBoundingClientRect(), f(n, s)), u && (p = h.find(".color-picker-sb-spectrum")[0].getBoundingClientRect(), b(n, s)), (g || u) && h.find(".color-picker-sb-spectrum-handle").addClass("color-picker-sb-spectrum-handle-pressed")
    }

    function v(C) {
      !(c || d) && !(u || g) || (i = C.type === "touchmove" ? C.targetTouches[0].pageX : C.pageX, o = C.type === "touchmove" ? C.targetTouches[0].pageY : C.pageY, C.preventDefault(), t || (t = !0, d && (l = h.find(".color-picker-wheel")[0].getBoundingClientRect()), g && (p = h.find(".color-picker-sb-spectrum")[0].getBoundingClientRect())), (c || d) && f(i, o), (u || g) && b(i, o))
    }

    function E() {
      t = !1, (u || g) && h.find(".color-picker-sb-spectrum-handle").removeClass("color-picker-sb-spectrum-handle-pressed"), c = !1, d = !1, u = !1, g = !1
    }

    function $() {
      r.modules.wheel.update(r)
    }
    const w = e.touchEvents.start === "touchstart" && ve().passiveListener ? {
      passive: !0,
      capture: !1
    } : !1;
    r.$el.on(e.touchEvents.start, m, w), e.on("touchmove:active", v), e.on("touchend:passive", E), e.on("resize", $), r.destroyWheelEvents = function () {
      r.$el.off(e.touchEvents.start, m, w), e.off("touchmove:active", v), e.off("touchend:passive", E), e.off("resize", $)
    }
  },
  update(r) {
    const {
      value: e
    } = r, {
      hsl: a,
      hsb: t
    } = e, n = r.$el.find(".color-picker-sb-spectrum")[0].offsetWidth, s = r.$el.find(".color-picker-sb-spectrum")[0].offsetHeight, i = r.$el.find(".color-picker-wheel")[0].offsetWidth, o = i / 2, l = e.hue * Math.PI / 180, d = i / 6 / 2, p = o - Math.sin(l) * (o - d) - d, u = o - Math.cos(l) * (o - d) - d;
    r.$el.find(".color-picker-wheel-handle").css("background-color", `hsl(${a[0]}, 100%, 50%)`).transform(`translate(${p}px, ${u}px)`), r.$el.find(".color-picker-sb-spectrum").css("background-color", `hsl(${a[0]}, 100%, 50%)`), r.$el.find(".color-picker-sb-spectrum-handle").css("background-color", `hsl(${a[0]}, ${a[1]*100}%, ${a[2]*100}%)`).transform(`translate(${n*t[1]}px, ${s*(1-t[2])}px)`)
  },
  destroy(r) {
    r.destroyWheelEvents && r.destroyWheelEvents(), delete r.destroyWheelEvents
  }
};
class Ap extends be {
  constructor(e, a) {
    a === void 0 && (a = {});
    super(a, [e]);
    const t = this;
    t.params = H({}, e.params.colorPicker, a);
    let n;
    if (t.params.containerEl && (n = y(t.params.containerEl), n.length === 0)) return t;
    let s;
    t.params.inputEl && (s = y(t.params.inputEl));
    let i;
    t.params.targetEl && (i = y(t.params.targetEl)), H(t, {
      app: e,
      $containerEl: n,
      containerEl: n && n[0],
      inline: n && n.length > 0,
      $inputEl: s,
      inputEl: s && s[0],
      $targetEl: i,
      targetEl: i && i[0],
      initialized: !1,
      opened: !1,
      url: t.params.url,
      modules: {
        "alpha-slider": gp,
        "current-color": vp,
        hex: bp,
        "hsb-sliders": yp,
        "hue-slider": Ep,
        "brightness-slider": wp,
        palette: Cp,
        "initial-current-colors": $p,
        "rgb-bars": xp,
        "rgb-sliders": kp,
        "sb-spectrum": Tp,
        "hs-spectrum": Sp,
        wheel: Pp
      }
    });

    function o() {
      t.open()
    }

    function l(p) {
      p.preventDefault()
    }

    function c() {
      t.open()
    }

    function d(p) {
      if (t.destroyed || !t.params || t.params.openIn === "page") return;
      const u = y(p.target);
      !t.opened || t.closing || u.closest('[class*="backdrop"]').length || u.closest(".color-picker-popup, .color-picker-popover").length || (s && s.length > 0 ? u[0] !== s[0] && u.closest(".sheet-modal").length === 0 && t.close() : y(p.target).closest(".sheet-modal").length === 0 && t.close())
    }
    return H(t, {
      attachInputEvents() {
        t.$inputEl.on("click", o), t.params.inputReadOnly && (t.$inputEl.on("focus mousedown", l), t.$inputEl[0] && (t.$inputEl[0].f7ValidateReadonly = !0))
      },
      detachInputEvents() {
        t.$inputEl.off("click", o), t.params.inputReadOnly && (t.$inputEl.off("focus mousedown", l), t.$inputEl[0] && delete t.$inputEl[0].f7ValidateReadonly)
      },
      attachTargetEvents() {
        t.$targetEl.on("click", c)
      },
      detachTargetEvents() {
        t.$targetEl.off("click", c)
      },
      attachHtmlEvents() {
        e.on("click", d)
      },
      detachHtmlEvents() {
        e.off("click", d)
      }
    }), t.init(), t
  }
  get view() {
    const {
      $inputEl: e,
      $targetEl: a,
      app: t,
      params: n
    } = this;
    let s;
    return n.view ? s = n.view : (e && (s = e.parents(".view").length && e.parents(".view")[0].f7View), !s && a && (s = a.parents(".view").length && a.parents(".view")[0].f7View)), s || (s = t.views.main), s
  }
  attachEvents() {
    const e = this;
    e.centerModules = e.centerModules.bind(e), e.params.centerModules && e.app.on("resize", e.centerModules)
  }
  detachEvents() {
    const e = this;
    e.params.centerModules && e.app.off("resize", e.centerModules)
  }
  centerModules() {
    const e = this;
    if (!e.opened || !e.$el || e.inline) return;
    const a = e.$el.find(".page-content");
    if (!a.length) return;
    const {
      scrollHeight: t,
      offsetHeight: n
    } = a[0];
    t <= n ? a.addClass("justify-content-center") : a.removeClass("justify-content-center")
  }
  initInput() {
    const e = this;
    !e.$inputEl || e.params.inputReadOnly && e.$inputEl.prop("readOnly", !0)
  }
  getModalType() {
    const e = this,
      {
        app: a,
        modal: t,
        params: n
      } = e,
      {
        openIn: s,
        openInPhone: i
      } = n,
      o = ue();
    return t && t.type ? t.type : s !== "auto" ? s : e.inline ? null : o.ios ? o.ipad ? "popover" : i : a.width >= 768 ? "popover" : i
  }
  formatValue() {
    const e = this,
      {
        value: a
      } = e;
    return e.params.formatValue ? e.params.formatValue.call(e, a) : a.hex
  }
  normalizeHsValues(e) {
    return [Math.floor(e[0] * 10) / 10, Math.floor(e[1] * 1e3) / 1e3, Math.floor(e[2] * 1e3) / 1e3]
  }
  setValue(e, a) {
    e === void 0 && (e = {}), a === void 0 && (a = !0);
    const t = this;
    if (typeof e == "undefined") return;
    let {
      hex: n,
      rgb: s,
      hsl: i,
      hsb: o,
      alpha: l = 1,
      hue: c,
      rgba: d,
      hsla: p
    } = t.value || {};
    const u = t.value || !t.value && !t.params.value;
    let g;
    if (Object.keys(e).forEach(h => {
        if (!t.value || typeof t.value[h] == "undefined") {
          g = !0;
          return
        }
        const f = e[h];
        Array.isArray(f) ? f.forEach((b, m) => {
          b !== t.value[h][m] && (g = !0)
        }) : f !== t.value[h] && (g = !0)
      }), !!g) {
      if (e.rgb || e.rgba) {
        const [h, f, b, m = l] = e.rgb || e.rgba;
        s = [h, f, b], n = Ke(...s), i = Nt(...s), o = Tt(...i), i = t.normalizeHsValues(i), o = t.normalizeHsValues(o), c = o[0], l = m, d = [s[0], s[1], s[2], m], p = [i[0], i[1], i[2], m]
      }
      if (e.hsl || e.hsla) {
        const [h, f, b, m = l] = e.hsl || e.hsla;
        i = [h, f, b], s = bt(...i), n = Ke(...s), o = Tt(...i), i = t.normalizeHsValues(i), o = t.normalizeHsValues(o), c = o[0], l = m, d = [s[0], s[1], s[2], m], p = [i[0], i[1], i[2], m]
      }
      if (e.hsb) {
        const [h, f, b, m = l] = e.hsb;
        o = [h, f, b], i = Qe(...o), s = bt(...i), n = Ke(...s), i = t.normalizeHsValues(i), o = t.normalizeHsValues(o), c = o[0], l = m, d = [s[0], s[1], s[2], m], p = [i[0], i[1], i[2], m]
      }
      if (e.hex && (s = _e(e.hex), n = Ke(...s), i = Nt(...s), o = Tt(...i), i = t.normalizeHsValues(i), o = t.normalizeHsValues(o), c = o[0], d = [s[0], s[1], s[2], l], p = [i[0], i[1], i[2], l]), typeof e.alpha != "undefined" && (l = e.alpha, typeof s != "undefined" && (d = [s[0], s[1], s[2], l]), typeof i != "undefined" && (p = [i[0], i[1], i[2], l])), typeof e.hue != "undefined") {
        const [h, f, b] = i;
        i = [e.hue, f, b], o = Tt(...i), s = bt(...i), n = Ke(...s), i = t.normalizeHsValues(i), o = t.normalizeHsValues(o), c = o[0], d = [s[0], s[1], s[2], l], p = [i[0], i[1], i[2], l]
      }
      t.value = {
        hex: n,
        alpha: l,
        hue: c,
        rgb: s,
        hsl: i,
        hsb: o,
        rgba: d,
        hsla: p
      }, t.initialValue || (t.initialValue = H({}, t.value)), t.updateValue(u), t.opened && a && t.updateModules()
    }
  }
  getValue() {
    return this.value
  }
  updateValue(e) {
    e === void 0 && (e = !0);
    const a = this,
      {
        $inputEl: t,
        value: n,
        $targetEl: s
      } = a;
    if (s && a.params.targetElSetBackgroundColor) {
      const {
        rgba: i
      } = n;
      s.css("background-color", `rgba(${i.join(", ")})`)
    }
    if (e && a.emit("local::change colorPickerChange", a, n), t && t.length) {
      const i = a.formatValue(n);
      t && t.length && (t.val(i), e && t.trigger("change"))
    }
  }
  updateModules() {
    const e = this,
      {
        modules: a
      } = e;
    e.params.modules.forEach(t => {
      typeof t == "string" && a[t] && a[t].update ? a[t].update(e) : t && t.update && t.update(e)
    })
  }
  update() {
    this.updateModules()
  }
  renderPicker() {
    const e = this,
      {
        params: a,
        modules: t
      } = e;
    let n = "";
    return a.modules.forEach(s => {
      typeof s == "string" && t[s] && t[s].render ? n += t[s].render(e) : s && s.render && (n += s.render(e))
    }), n
  }
  renderNavbar() {
    const e = this;
    if (e.params.renderNavbar) return e.params.renderNavbar.call(e, e);
    const {
      openIn: a,
      navbarTitleText: t,
      navbarBackLinkText: n,
      navbarCloseText: s
    } = e.params;
    return T("div", {
      class: "navbar"
    }, T("div", {
      class: "navbar-bg"
    }), T("div", {
      class: "navbar-inner sliding"
    }, a === "page" && T("div", {
      class: "left"
    }, T("a", {
      class: "link back"
    }, T("i", {
      class: "icon icon-back"
    }), T("span", {
      class: "if-not-md"
    }, n))), T("div", {
      class: "title"
    }, t), a !== "page" && T("div", {
      class: "right"
    }, T("a", {
      class: "link popup-close",
      "data-popup": ".color-picker-popup"
    }, s))))
  }
  renderToolbar() {
    const e = this;
    return e.params.renderToolbar ? e.params.renderToolbar.call(e, e) : T("div", {
      class: "toolbar toolbar-top"
    }, T("div", {
      class: "toolbar-inner"
    }, T("div", {
      class: "left"
    }), T("div", {
      class: "right"
    }, T("a", {
      class: "link sheet-close popover-close",
      "data-sheet": ".color-picker-sheet-modal",
      "data-popover": ".color-picker-popover"
    }, e.params.toolbarCloseText))))
  }
  renderInline() {
    const e = this,
      {
        cssClass: a,
        groupedModules: t
      } = e.params;
    return T("div", {
      class: `color-picker color-picker-inline ${t?"color-picker-grouped-modules":""} ${a||""}`
    }, e.renderPicker())
  }
  renderSheet() {
    const e = this,
      {
        cssClass: a,
        toolbarSheet: t,
        groupedModules: n
      } = e.params;
    return T("div", {
      class: `sheet-modal color-picker color-picker-sheet-modal ${n?"color-picker-grouped-modules":""} ${a||""}`
    }, t && e.renderToolbar(), T("div", {
      class: "sheet-modal-inner"
    }, T("div", {
      class: "page-content"
    }, e.renderPicker())))
  }
  renderPopover() {
    const e = this,
      {
        cssClass: a,
        toolbarPopover: t,
        groupedModules: n
      } = e.params;
    return T("div", {
      class: `popover color-picker-popover ${a||""}`
    }, T("div", {
      class: "popover-inner"
    }, T("div", {
      class: `color-picker ${n?"color-picker-grouped-modules":""}`
    }, t && e.renderToolbar(), T("div", {
      class: "page-content"
    }, e.renderPicker()))))
  }
  renderPopup() {
    const e = this,
      {
        cssClass: a,
        navbarPopup: t,
        groupedModules: n
      } = e.params;
    return T("div", {
      class: `popup color-picker-popup ${a||""}`
    }, T("div", {
      class: "page"
    }, t && e.renderNavbar(), T("div", {
      class: `color-picker ${n?"color-picker-grouped-modules":""}`
    }, T("div", {
      class: "page-content"
    }, e.renderPicker()))))
  }
  renderPage() {
    const e = this,
      {
        cssClass: a,
        groupedModules: t
      } = e.params;
    return T("div", {
      class: `page color-picker-page ${a||""}`,
      "data-name": "color-picker-page"
    }, e.renderNavbar(), T("div", {
      class: `color-picker ${t?"color-picker-grouped-modules":""}`
    }, T("div", {
      class: "page-content"
    }, e.renderPicker())))
  }
  render() {
    const e = this,
      {
        params: a
      } = e;
    if (a.render) return a.render.call(e);
    if (e.inline) return e.renderInline();
    if (a.openIn === "page") return e.renderPage();
    const t = e.getModalType();
    if (t === "popover") return e.renderPopover();
    if (t === "sheet") return e.renderSheet();
    if (t === "popup") return e.renderPopup()
  }
  onOpen() {
    const e = this,
      {
        initialized: a,
        $el: t,
        app: n,
        $inputEl: s,
        inline: i,
        value: o,
        params: l,
        modules: c
      } = e;
    e.closing = !1, e.opened = !0, e.opening = !0, e.attachEvents(), l.modules.forEach(p => {
      typeof p == "string" && c[p] && c[p].init ? c[p].init(e) : p && p.init && p.init(e)
    });
    const d = !o && l.value;
    a ? o && (e.initialValue = H({}, o), e.setValue(o, !1)) : o ? e.setValue(o) : l.value ? e.setValue(l.value, !1) : l.value || e.setValue({
      hex: "#ff0000"
    }, !1), d && e.updateValue(), e.updateModules(), l.centerModules && e.centerModules(), !i && s && s.length && n.theme === "md" && s.trigger("focus"), e.initialized = !0, t && t.trigger("colorpicker:open"), s && s.trigger("colorpicker:open"), e.emit("local::open colorPickerOpen", e)
  }
  onOpened() {
    const e = this;
    e.opening = !1, e.$el && e.$el.trigger("colorpicker:opened"), e.$inputEl && e.$inputEl.trigger("colorpicker:opened"), e.emit("local::opened colorPickerOpened", e)
  }
  onClose() {
    const e = this,
      {
        app: a,
        params: t,
        modules: n
      } = e;
    if (e.opening = !1, e.closing = !0, e.detachEvents(), e.$inputEl)
      if (a.theme === "md") e.$inputEl.trigger("blur");
      else {
        const s = e.$inputEl.attr("validate"),
          i = e.$inputEl.attr("required");
        s && i && a.input.validate(e.$inputEl)
      } t.modules.forEach(s => {
      typeof s == "string" && n[s] && n[s].destroy ? n[s].destroy(e) : s && s.destroy && s.destroy(e)
    }), e.$el && e.$el.trigger("colorpicker:close"), e.$inputEl && e.$inputEl.trigger("colorpicker:close"), e.emit("local::close colorPickerClose", e)
  }
  onClosed() {
    const e = this;
    e.opened = !1, e.closing = !1, e.inline || ke(() => {
      e.modal && e.modal.el && e.modal.destroy && (e.params.routableModals || e.modal.destroy()), delete e.modal
    }), e.$el && e.$el.trigger("colorpicker:closed"), e.$inputEl && e.$inputEl.trigger("colorpicker:closed"), e.emit("local::closed colorPickerClosed", e)
  }
  open() {
    const e = this,
      {
        app: a,
        opened: t,
        inline: n,
        $inputEl: s,
        $targetEl: i,
        params: o
      } = e;
    if (t) return;
    if (n) {
      e.$el = y(e.render()), e.$el[0].f7ColorPicker = e, e.$containerEl.append(e.$el), e.onOpen(), e.onOpened();
      return
    }
    const l = e.render();
    if (o.openIn === "page") e.view.router.navigate({
      url: e.url,
      route: {
        content: l,
        path: e.url,
        on: {
          pageBeforeIn(c, d) {
            e.$el = d.$el.find(".color-picker"), e.$el[0].f7ColorPicker = e, e.onOpen()
          },
          pageAfterIn() {
            e.onOpened()
          },
          pageBeforeOut() {
            e.onClose()
          },
          pageAfterOut() {
            e.onClosed(), e.$el && e.$el[0] && (e.$el[0].f7ColorPicker = null, delete e.$el[0].f7ColorPicker)
          }
        }
      }
    });
    else {
      const c = e.getModalType();
      let d = o.backdrop;
      (d === null || typeof d == "undefined") && (c === "popover" && a.params.popover.backdrop !== !1 && (d = !0), c === "popup" && (d = !0));
      const p = {
        targetEl: i || s,
        scrollToEl: o.scrollToInput ? i || s : void 0,
        content: l,
        backdrop: d,
        closeByBackdropClick: o.closeByBackdropClick,
        on: {
          open() {
            const u = this;
            e.modal = u, e.$el = c === "popover" || c === "popup" ? u.$el.find(".color-picker") : u.$el, e.$el[0].f7ColorPicker = e, e.onOpen()
          },
          opened() {
            e.onOpened()
          },
          close() {
            e.onClose()
          },
          closed() {
            e.onClosed(), e.$el && e.$el[0] && (e.$el[0].f7ColorPicker = null, delete e.$el[0].f7ColorPicker)
          }
        }
      };
      c === "popup" && (p.push = o.popupPush, p.swipeToClose = o.popupSwipeToClose), c === "sheet" && (p.push = o.sheetPush, p.swipeToClose = o.sheetSwipeToClose), o.routableModals && e.view ? e.view.router.navigate({
        url: e.url,
        route: {
          path: e.url,
          [c]: p
        }
      }) : (e.modal = a[c].create(p), e.modal.open())
    }
  }
  close() {
    const e = this,
      {
        opened: a,
        inline: t
      } = e;
    if (!!a) {
      if (t) {
        e.onClose(), e.onClosed();
        return
      }
      e.params.routableModals && e.view || e.params.openIn === "page" ? e.view.router.back() : e.modal.close()
    }
  }
  init() {
    const e = this;
    if (e.initInput(), e.inline) {
      e.open(), e.emit("local::init colorPickerInit", e);
      return
    }!e.initialized && e.params.value && e.setValue(e.params.value), e.$inputEl && e.attachInputEvents(), e.$targetEl && e.attachTargetEvents(), e.params.closeByOutsideClick && e.attachHtmlEvents(), e.emit("local::init colorPickerInit", e)
  }
  destroy() {
    const e = this;
    if (e.destroyed) return;
    const {
      $el: a
    } = e;
    e.emit("local::beforeDestroy colorPickerBeforeDestroy", e), a && a.trigger("colorpicker:beforedestroy"), e.close(), e.detachEvents(), e.$inputEl && e.detachInputEvents(), e.$targetEl && e.detachTargetEvents(), e.params.closeByOutsideClick && e.detachHtmlEvents(), a && a.length && delete e.$el[0].f7ColorPicker, $e(e), e.destroyed = !0
  }
}
var $n = Ap,
  xu = {
    name: "colorPicker",
    static: {
      ColorPicker: $n
    },
    create() {
      const r = this;
      r.colorPicker = xe({
        defaultSelector: ".color-picker",
        constructor: $n,
        app: r,
        domProp: "f7ColorPicker"
      }), r.colorPicker.close = function (a) {
        a === void 0 && (a = ".color-picker");
        const t = y(a);
        if (t.length === 0) return;
        const n = t[0].f7ColorPicker;
        !n || n && !n.opened || n.close()
      }
    },
    params: {
      colorPicker: {
        value: null,
        modules: ["wheel"],
        palette: [
          ["#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828", "#B71C1C"],
          ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A", "#4A148C"],
          ["#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593", "#1A237E"],
          ["#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1", "#0277BD", "#01579B"],
          ["#E0F2F1", "#B2DFDB", "#80CBC4", "#4DB6AC", "#26A69A", "#009688", "#00897B", "#00796B", "#00695C", "#004D40"],
          ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#689F38", "#558B2F", "#33691E"],
          ["#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825", "#F57F17"],
          ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00", "#E65100"]
        ],
        groupedModules: !1,
        centerModules: !0,
        sliderLabel: !1,
        sliderValue: !1,
        sliderValueEdiable: !1,
        barLabel: !1,
        barValue: !1,
        barValueEdiable: !1,
        hexLabel: !1,
        hexValueEditable: !1,
        redLabelText: "R",
        greenLabelText: "G",
        blueLabelText: "B",
        hueLabelText: "H",
        saturationLabelText: "S",
        brightnessLabelText: "B",
        hexLabelText: "HEX",
        alphaLabelText: "A",
        containerEl: null,
        openIn: "popover",
        openInPhone: "popup",
        popupPush: !1,
        popupSwipeToClose: void 0,
        sheetPush: !1,
        sheetSwipeToClose: void 0,
        formatValue: null,
        targetEl: null,
        targetElSetBackgroundColor: !1,
        inputEl: null,
        inputReadOnly: !0,
        closeByOutsideClick: !0,
        scrollToInput: !0,
        toolbarSheet: !0,
        toolbarPopover: !1,
        toolbarCloseText: "Done",
        navbarPopup: !0,
        navbarCloseText: "Done",
        navbarTitleText: "Color",
        navbarBackLinkText: "Back",
        cssClass: null,
        routableModals: !1,
        view: null,
        url: "color/",
        backdrop: null,
        closeByBackdropClick: !0,
        renderToolbar: null,
        renderNavbar: null,
        renderInline: null,
        renderPopover: null,
        renderSheet: null,
        renderPopup: null,
        render: null
      }
    }
  };
const Ip = {
  open(r) {
    const e = this,
      a = y(r).eq(0);
    if (!a.length) return;
    a.addClass("treeview-item-opened"), a.trigger("treeview:open"), e.emit("treeviewOpen", a[0]);

    function t(n) {
      n ? (a.removeClass("treeview-item-opened"), a.trigger("treeview:close"), e.emit("treeviewClose", a[0])) : a[0].f7TreeviewChildrenLoaded = !0, a.find(".treeview-toggle").removeClass("treeview-toggle-hidden"), a.find(".treeview-preloader").remove()
    }
    if (a.hasClass("treeview-load-children") && !a[0].f7TreeviewChildrenLoaded) {
      const n = {
        iosPreloaderContent: lt,
        mdPreloaderContent: ot
      };
      a.trigger("treeview:loadchildren", t), e.emit("treeviewLoadChildren", a[0], t), a.find(".treeview-toggle").addClass("treeview-toggle-hidden"), a.find(".treeview-item-root").prepend(`<div class="preloader treeview-preloader">${n[`${e.theme}PreloaderContent`]}</div>`)
    }
  },
  close(r) {
    const e = this,
      a = y(r).eq(0);
    !a.length || (a.removeClass("treeview-item-opened"), a.trigger("treeview:close"), e.emit("treeviewClose", a[0]))
  },
  toggle(r) {
    const e = this,
      a = y(r).eq(0);
    if (!a.length) return;
    const t = a.hasClass("treeview-item-opened");
    e.treeview[t ? "close" : "open"](a)
  }
};
var ku = {
  name: "treeview",
  create() {
    Ie(this, {
      treeview: Ip
    })
  },
  clicks: {
    ".treeview-toggle": function (e, a, t) {
      const n = this;
      if (e.parents(".treeview-item-toggle").length) return;
      const s = e.parents(".treeview-item").eq(0);
      !s.length || (t.preventF7Router = !0, n.treeview.toggle(s[0]))
    },
    ".treeview-item-toggle": function (e, a, t) {
      const n = this,
        s = e.closest(".treeview-item").eq(0);
      !s.length || (t.preventF7Router = !0, n.treeview.toggle(s[0]))
    }
  }
};
const ca = {
  bold: ["bold", "format_bold", "bold"],
  italic: ["italic", "format_italic", "italic"],
  underline: ["underline", "format_underlined", "underline"],
  strikeThrough: ["strikethrough", "strikethrough_s", "strikeThrough"],
  orderedList: ["list_number", "format_list_numbered", "insertOrderedList"],
  unorderedList: ["list_bullet", "format_list_bulleted", "insertUnorderedList"],
  link: ["link", "link", "createLink"],
  image: ["photo", "image", "insertImage"],
  paragraph: ["paragraph", '<i class="icon">\xB6</i>', "formatBlock.P"],
  h1: ['<i class="icon">H<sub>1</sub></i>', '<i class="icon">H<sub>1</sub></i>', "formatBlock.H1"],
  h2: ['<i class="icon">H<sub>2</sub></i>', '<i class="icon">H<sub>2</sub></i>', "formatBlock.H2"],
  h3: ['<i class="icon">H<sub>3</sub></i>', '<i class="icon">H<sub>3</sub></i>', "formatBlock.H3"],
  alignLeft: ["text_alignleft", "format_align_left", "justifyLeft"],
  alignCenter: ["text_aligncenter", "format_align_center", "justifyCenter"],
  alignRight: ["text_alignright", "format_align_right", "justifyRight"],
  alignJustify: ["text_justify", "format_align_justify", "justifyFull"],
  subscript: ["textformat_subscript", '<i class="icon">A<sub>1</sub></i>', "subscript"],
  superscript: ["textformat_superscript", '<i class="icon">A<sup>1</sup></i>', "superscript"],
  indent: ["increase_indent", "format_indent_increase", "indent"],
  outdent: ["decrease_indent", "format_indent_decrease", "outdent"]
};
class Op extends be {
  constructor(e, a) {
    super(a, [e]);
    const t = this,
      n = ee(),
      s = ue(),
      i = H({}, e.params.textEditor);
    t.useModulesParams(i), t.params = H(i, a);
    const o = t.params.el;
    if (!o) return t;
    const l = y(o);
    if (l.length === 0) return t;
    if (l[0].f7TextEditor) return l[0].f7TextEditor;
    let c = l.children(".text-editor-content");
    if (c.length || (l.append('<div class="text-editor-content" contenteditable></div>'), c = l.children(".text-editor-content")), H(t, {
        app: e,
        $el: l,
        el: l[0],
        $contentEl: c,
        contentEl: c[0]
      }), "value" in a && (t.value = t.params.value), t.params.mode === "keyboard-toolbar" && !(s.cordova || s.capacitor) && !s.android && (t.params.mode = "popover"), typeof t.params.buttons == "string") try {
      t.params.buttons = JSON.parse(t.params.buttons)
    } catch {
      throw new Error('Framework7: TextEditor: wrong "buttons" parameter format')
    }
    return l[0].f7TextEditor = t, t.onButtonClick = t.onButtonClick.bind(t), t.onFocus = t.onFocus.bind(t), t.onBlur = t.onBlur.bind(t), t.onInput = t.onInput.bind(t), t.onPaste = t.onPaste.bind(t), t.onSelectionChange = t.onSelectionChange.bind(t), t.closeKeyboardToolbar = t.closeKeyboardToolbar.bind(t), t.attachEvents = function () {
      t.params.mode === "toolbar" && t.$el.find(".text-editor-toolbar").on("click", "button", t.onButtonClick), t.params.mode === "keyboard-toolbar" && (t.$keyboardToolbarEl.on("click", "button", t.onButtonClick), t.$el.parents(".page").on("page:beforeout", t.closeKeyboardToolbar)), t.params.mode === "popover" && t.popover && t.popover.$el.on("click", "button", t.onButtonClick), t.$contentEl.on("paste", t.onPaste), t.$contentEl.on("focus", t.onFocus), t.$contentEl.on("blur", t.onBlur), t.$contentEl.on("input", t.onInput, !0), y(n).on("selectionchange", t.onSelectionChange)
    }, t.detachEvents = function () {
      t.params.mode === "toolbar" && t.$el.find(".text-editor-toolbar").off("click", "button", t.onButtonClick), t.params.mode === "keyboard-toolbar" && (t.$keyboardToolbarEl.off("click", "button", t.onButtonClick), t.$el.parents(".page").off("page:beforeout", t.closeKeyboardToolbar)), t.params.mode === "popover" && t.popover && t.popover.$el.off("click", "button", t.onButtonClick), t.$contentEl.off("paste", t.onPaste), t.$contentEl.off("focus", t.onFocus), t.$contentEl.off("blur", t.onBlur), t.$contentEl.off("input", t.onInput, !0), y(n).off("selectionchange", t.onSelectionChange)
    }, t.useModules(), t.init(), t
  }
  setValue(e) {
    const a = this;
    return a.value === e || (a.value = e, a.$contentEl.html(e), a.$el.trigger("texteditor:change", a.value), a.emit("local::change textEditorChange", a, a.value)), a
  }
  getValue() {
    return this.value
  }
  clearValue() {
    const e = this;
    return e.setValue(""), e.params.placeholder && !e.$contentEl.html() && e.insertPlaceholder(), e
  }
  createLink() {
    const e = this,
      a = G(),
      t = ee(),
      n = a.getSelection(),
      s = [];
    let i;
    if (n && n.anchorNode && y(n.anchorNode).parents(e.$el).length) {
      let c = n.anchorNode;
      for (; c;) s.push(c), (!c.nextSibling || c === n.focusNode) && (c = null), c && (c = c.nextSibling);
      const d = [],
        p = y(s);
      for (let u = 0; u < p.length; u += 1) {
        const g = p[u].children;
        if (g)
          for (let h = 0; h < g.length; h += 1) y(g[h]).is("a") && d.push(g[h])
      }
      i = p.closest("a").add(y(d))
    }
    if (i && i.length) return i.each(c => {
      const d = a.getSelection(),
        p = t.createRange();
      p.selectNodeContents(c), d.removeAllRanges(), d.addRange(p), t.execCommand("unlink", !1), d.removeAllRanges()
    }), e;
    const o = e.getSelectionRange();
    return o && e.app.dialog.prompt("", e.params.linkUrlText, c => {
      c && c.trim().length && (e.setSelectionRange(o), t.execCommand("createLink", !1, c.trim()), e.$el.trigger("texteditor:insertlink", {
        url: c.trim()
      }), e.emit("local:insertLink textEditorInsertLink", e, c.trim()))
    }).$el.find("input").focus(), e
  }
  insertImage() {
    const e = this,
      a = ee(),
      t = e.getSelectionRange();
    return t && e.app.dialog.prompt("", e.params.imageUrlText, s => {
      s && s.trim().length && (e.setSelectionRange(t), a.execCommand("insertImage", !1, s.trim()), e.$el.trigger("texteditor:insertimage", {
        url: s.trim()
      }), e.emit("local:insertImage textEditorInsertImage", e, s.trim()))
    }).$el.find("input").focus(), e
  }
  removePlaceholder() {
    this.$contentEl.find(".text-editor-placeholder").remove()
  }
  insertPlaceholder() {
    const e = this;
    e.$contentEl.append(`<div class="text-editor-placeholder">${e.params.placeholder}</div>`)
  }
  onSelectionChange() {
    const e = this,
      a = G(),
      t = ee();
    if (e.params.mode === "toolbar") return;
    const n = a.getSelection(),
      s = y(n.anchorNode).parents(e.contentEl).length || n.anchorNode === e.contentEl;
    if (e.params.mode === "keyboard-toolbar") {
      s ? e.openKeyboardToolbar() : e.closeKeyboardToolbar();
      return
    }
    if (e.params.mode === "popover") {
      const i = y(n.anchorNode).parents(e.popover.el).length || n.anchorNode === e.popover.el;
      if (!s && !i) {
        e.closePopover();
        return
      }
      if (!n.isCollapsed && n.rangeCount) {
        const l = n.getRangeAt(0).getBoundingClientRect(),
          c = e.app.$el[0] || t.body;
        e.openPopover(l.x + (a.scrollX || 0) - c.offsetLeft, l.y + (a.scrollY || 0) - c.offsetTop, l.width, l.height)
      } else n.isCollapsed && e.closePopover()
    }
  }
  onPaste(e) {
    const a = this,
      t = ee();
    if (a.params.clearFormattingOnPaste && e.clipboardData && e.clipboardData.getData) {
      const n = e.clipboardData.getData("text/plain");
      e.preventDefault(), t.execCommand("insertText", !1, n)
    }
  }
  onInput() {
    const e = this,
      a = e.$contentEl.html();
    e.value = a, e.$el.trigger("texteditor:input"), e.emit("local:input textEditorInput", e, e.value), e.$el.trigger("texteditor:change", e.value), e.emit("local::change textEditorChange", e, e.value)
  }
  onFocus() {
    const e = this;
    e.removePlaceholder(), e.$contentEl.focus(), e.$el.trigger("texteditor:focus"), e.emit("local::focus textEditorFocus", e)
  }
  onBlur() {
    const e = this,
      a = G(),
      t = ee();
    if (e.params.placeholder && e.$contentEl.html() === "" && e.insertPlaceholder(), e.params.mode === "popover") {
      const n = a.getSelection(),
        s = y(n.anchorNode).parents(e.contentEl).length || n.anchorNode === e.contentEl;
      !(t.activeElement && e.popover && y(t.activeElement).closest(e.popover.$el).length) && !s && e.closePopover()
    }
    if (e.params.mode === "keyboard-toolbar") {
      const n = a.getSelection();
      y(n.anchorNode).parents(e.contentEl).length || n.anchorNode === e.contentEl || e.closeKeyboardToolbar()
    }
    e.$el.trigger("texteditor:blur"), e.emit("local::blur textEditorBlur", e)
  }
  onButtonClick(e) {
    const a = this,
      t = G(),
      n = ee(),
      s = t.getSelection();
    if (!(y(s.anchorNode).parents(a.contentEl).length || s.anchorNode === a.contentEl)) return;
    const o = y(e.target).closest("button");
    o.parents("form").length && e.preventDefault();
    const l = o.attr("data-button"),
      c = a.params.customButtons && a.params.customButtons[l];
    if (!l || !(ca[l] || c)) return;
    if (o.trigger("texteditor:buttonclick", l), a.emit("local::buttonClick textEditorButtonClick", a, l), c) {
      c.onClick && c.onClick(a, o[0]);
      return
    }
    const d = ca[l][2];
    if (d === "createLink") {
      a.createLink();
      return
    }
    if (d === "insertImage") {
      a.insertImage();
      return
    }
    if (d.indexOf("formatBlock") === 0) {
      const p = d.split(".")[1],
        u = y(s.anchorNode);
      u.parents(p.toLowerCase()).length || u.is(p) ? n.execCommand("formatBlock", !1, "div") : n.execCommand("formatBlock", !1, p);
      return
    }
    n.execCommand(d, !1)
  }
  getSelectionRange() {
    const e = G(),
      a = ee();
    if (e.getSelection) {
      const t = e.getSelection();
      if (t.getRangeAt && t.rangeCount) return t.getRangeAt(0)
    } else if (a.selection && a.selection.createRange) return a.selection.createRange();
    return null
  }
  setSelectionRange(e) {
    const a = G(),
      t = ee();
    if (e)
      if (a.getSelection) {
        const n = a.getSelection();
        n.removeAllRanges(), n.addRange(e)
      } else t.selection && e.select && e.select()
  }
  renderButtons() {
    const e = this;
    let a = "";

    function t(n) {
      const s = e.app.theme === "md" ? "material-icons" : "f7-icons";
      if (e.params.customButtons && e.params.customButtons[n]) {
        const o = e.params.customButtons[n];
        return `<button type="button" class="text-editor-button" data-button="${n}">${o.content||""}</button>`
      }
      if (!ca[n]) return "";
      const i = ca[n][e.app.theme === "md" ? 1 : 0];
      return `<button type="button" class="text-editor-button" data-button="${n}">${i.indexOf("<")>=0?i:`<i class="${s}">${i}</i>`}</button>`.trim()
    }
    return e.params.buttons.forEach((n, s) => {
      Array.isArray(n) ? (n.forEach(i => {
        a += t(i)
      }), s < e.params.buttons.length - 1 && e.params.dividers && (a += '<div class="text-editor-button-divider"></div>')) : a += t(n)
    }), a
  }
  createToolbar() {
    const e = this;
    e.$el.prepend(`<div class="text-editor-toolbar">${e.renderButtons()}</div>`)
  }
  createKeyboardToolbar() {
    const e = this;
    e.$keyboardToolbarEl = y(`<div class="toolbar toolbar-bottom text-editor-keyboard-toolbar"><div class="toolbar-inner">${e.renderButtons()}</div></div>`)
  }
  createPopover() {
    const e = this;
    e.popover = e.app.popover.create({
      content: `
        <div class="popover dark text-editor-popover">
          <div class="popover-inner">${e.renderButtons()}</div>
        </div>
      `,
      closeByOutsideClick: !1,
      backdrop: !1
    })
  }
  openKeyboardToolbar() {
    const e = this;
    e.$keyboardToolbarEl.parent(e.app.$el).length || (e.$el.trigger("texteditor:keyboardopen"), e.emit("local::keyboardOpen textEditorKeyboardOpen", e), e.app.$el.append(e.$keyboardToolbarEl))
  }
  closeKeyboardToolbar() {
    const e = this;
    e.$keyboardToolbarEl.remove(), e.$el.trigger("texteditor:keyboardclose"), e.emit("local::keyboardClose textEditorKeyboardClose", e)
  }
  openPopover(e, a, t, n) {
    const s = this;
    !s.popover || (Object.assign(s.popover.params, {
      targetX: e,
      targetY: a,
      targetWidth: t,
      targetHeight: n
    }), clearTimeout(s.popoverTimeout), s.popoverTimeout = setTimeout(() => {
      !s.popover || (s.popover.opened ? s.popover.resize() : (s.$el.trigger("texteditor:popoveropen"), s.emit("local::popoverOpen textEditorPopoverOpen", s), s.popover.open()))
    }, 400))
  }
  closePopover() {
    const e = this;
    clearTimeout(e.popoverTimeout), !(!e.popover || !e.popover.opened) && (e.popoverTimeout = setTimeout(() => {
      !e.popover || (e.$el.trigger("texteditor:popoverclose"), e.emit("local::popoverClose textEditorPopoverClose", e), e.popover.close())
    }, 400))
  }
  init() {
    const e = this;
    return e.value ? e.$contentEl.html(e.value) : e.value = e.$contentEl.html(), e.params.placeholder && e.value === "" && e.insertPlaceholder(), e.params.mode === "toolbar" ? e.createToolbar() : e.params.mode === "popover" ? e.createPopover() : e.params.mode === "keyboard-toolbar" && e.createKeyboardToolbar(), e.attachEvents(), e.$el.trigger("texteditor:init"), e.emit("local::init textEditorInit", e), e
  }
  destroy() {
    let e = this;
    e.$el.trigger("texteditor:beforedestroy"), e.emit("local::beforeDestroy textEditorBeforeDestroy", e), e.detachEvents(), e.params.mode === "keyboard-toolbar" && e.$keyboardToolbarEl && e.$keyboardToolbarEl.remove(), e.popover && (e.popover.close(!1), e.popover.destroy()), delete e.$el[0].f7TextEditor, $e(e), e = null
  }
}
var xn = Op,
  Tu = {
    name: "textEditor",
    params: {
      textEditor: {
        el: null,
        mode: "toolbar",
        value: void 0,
        customButtons: null,
        buttons: [
          ["bold", "italic", "underline", "strikeThrough"],
          ["orderedList", "unorderedList"],
          ["link", "image"],
          ["paragraph", "h1", "h2", "h3"],
          ["alignLeft", "alignCenter", "alignRight", "alignJustify"],
          ["subscript", "superscript"],
          ["indent", "outdent"]
        ],
        dividers: !0,
        imageUrlText: "Insert image URL",
        linkUrlText: "Insert link URL",
        placeholder: null,
        clearFormattingOnPaste: !0
      }
    },
    create() {
      const r = this;
      r.textEditor = H(xe({
        defaultSelector: ".text-editor",
        constructor: xn,
        app: r,
        domProp: "f7TextEditor"
      }))
    },
    static: {
      TextEditor: xn
    },
    on: {
      tabMounted(r) {
        const e = this;
        y(r).find(".text-editor-init").each(a => {
          const t = y(a).dataset();
          e.textEditor.create(H({
            el: a
          }, t || {}))
        })
      },
      tabBeforeRemove(r) {
        y(r).find(".text-editor-init").each(e => {
          e.f7TextEditor && e.f7TextEditor.destroy()
        })
      },
      pageInit(r) {
        const e = this;
        r.$el.find(".text-editor-init").each(a => {
          const t = y(a).dataset();
          e.textEditor.create(H({
            el: a
          }, t || {}))
        })
      },
      pageBeforeRemove(r) {
        r.$el.find(".text-editor-init").each(e => {
          e.f7TextEditor && e.f7TextEditor.destroy()
        })
      }
    },
    vnode: {
      "text-editor-init": {
        insert(r) {
          const e = this,
            a = r.elm,
            t = y(a).dataset();
          e.textEditor.create(H({
            el: a
          }, t || {}))
        },
        destroy(r) {
          const e = r.elm;
          e.f7TextEditor && e.f7TextEditor.destroy()
        }
      }
    }
  },
  Su = {
    name: "typography"
  };
export {
  hl as $, zp as A, bu as B, Xp as C, Dp as D, yu as E, Ri as F, lu as G, wu as H, tu as I, Cu as J, $u as K, Rp as L, gu as M, Eu as N, xu as O, Lp as P, ku as Q, ru as R, Fp as S, Vp as T, Tu as U, Gp as V, Su as W, Rr as X, Hp as a, Np as b, Yp as c, qp as d, jp as e, Wp as f, Up as g, _p as h, Kp as i, Qp as j, Zp as k, Jp as l, eu as m, au as n, nu as o, su as p, iu as q, ou as r, cu as s, du as t, pu as u, uu as v, fu as w, hu as x, mu as y, vu as z
};