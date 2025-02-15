var Ud = Object.defineProperty;
var Yd = (e, t, o) => t in e ? Ud(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var bs = (e, t, o) => (Yd(e, typeof t != "symbol" ? t + "" : t, o), o);
import * as b from "react";
import ft, { Children as Hd, isValidElement as ur, cloneElement as dr, useState as Bn, useCallback as Zo, useEffect as qd } from "react";
import { useTheme as no, Box as Ue, Typography as ut, Paper as Nr, TextField as Kd, TableContainer as Gd, Table as Xd, TableHead as Qd, TableRow as ri, TableCell as Jo, TableBody as Zd, Radio as Jd, LinearProgress as ef, Button as vr, Container as xr, CircularProgress as tf, ThemeProvider as ys } from "@mui/material";
import nf from "@emotion/styled";
import { CacheProvider as of, Global as rf, ThemeContext as _l, css as sf, keyframes as _r } from "@emotion/react";
import * as af from "react-dom";
import er from "react-dom";
var Bo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function en(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var o = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    o.prototype = t.prototype;
  } else
    o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(o, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), o;
}
var Fs = { exports: {} }, fo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var si;
function lf() {
  if (si)
    return fo;
  si = 1;
  var e = ft, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, c, u) {
    var d, p = {}, h = null, m = null;
    u !== void 0 && (h = "" + u), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (d in c)
      r.call(c, d) && !s.hasOwnProperty(d) && (p[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        p[d] === void 0 && (p[d] = c[d]);
    return { $$typeof: t, type: l, key: h, ref: m, props: p, _owner: a.current };
  }
  return fo.Fragment = o, fo.jsx = i, fo.jsxs = i, fo;
}
var po = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ai;
function cf() {
  return ai || (ai = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ft, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.iterator, f = "@@iterator";
    function C(k) {
      if (k === null || typeof k != "object")
        return null;
      var te = y && k[y] || k[f];
      return typeof te == "function" ? te : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(k) {
      {
        for (var te = arguments.length, le = new Array(te > 1 ? te - 1 : 0), Ce = 1; Ce < te; Ce++)
          le[Ce - 1] = arguments[Ce];
        x("error", k, le);
      }
    }
    function x(k, te, le) {
      {
        var Ce = w.ReactDebugCurrentFrame, ke = Ce.getStackAddendum();
        ke !== "" && (te += "%s", le = le.concat([ke]));
        var Le = le.map(function(Re) {
          return String(Re);
        });
        Le.unshift("Warning: " + te), Function.prototype.apply.call(console[k], console, Le);
      }
    }
    var E = !1, v = !1, D = !1, O = !1, F = !1, _;
    _ = Symbol.for("react.module.reference");
    function V(k) {
      return !!(typeof k == "string" || typeof k == "function" || k === r || k === s || F || k === a || k === u || k === d || O || k === m || E || v || D || typeof k == "object" && k !== null && (k.$$typeof === h || k.$$typeof === p || k.$$typeof === i || k.$$typeof === l || k.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      k.$$typeof === _ || k.getModuleId !== void 0));
    }
    function N(k, te, le) {
      var Ce = k.displayName;
      if (Ce)
        return Ce;
      var ke = te.displayName || te.name || "";
      return ke !== "" ? le + "(" + ke + ")" : le;
    }
    function L(k) {
      return k.displayName || "Context";
    }
    function A(k) {
      if (k == null)
        return null;
      if (typeof k.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof k == "function")
        return k.displayName || k.name || null;
      if (typeof k == "string")
        return k;
      switch (k) {
        case r:
          return "Fragment";
        case o:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case l:
            var te = k;
            return L(te) + ".Consumer";
          case i:
            var le = k;
            return L(le._context) + ".Provider";
          case c:
            return N(k, k.render, "ForwardRef");
          case p:
            var Ce = k.displayName || null;
            return Ce !== null ? Ce : A(k.type) || "Memo";
          case h: {
            var ke = k, Le = ke._payload, Re = ke._init;
            try {
              return A(Re(Le));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, P = 0, M, j, $, B, I, z, G;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function W() {
      {
        if (P === 0) {
          M = console.log, j = console.info, $ = console.warn, B = console.error, I = console.group, z = console.groupCollapsed, G = console.groupEnd;
          var k = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: k,
            log: k,
            warn: k,
            error: k,
            group: k,
            groupCollapsed: k,
            groupEnd: k
          });
        }
        P++;
      }
    }
    function q() {
      {
        if (P--, P === 0) {
          var k = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, k, {
              value: M
            }),
            info: R({}, k, {
              value: j
            }),
            warn: R({}, k, {
              value: $
            }),
            error: R({}, k, {
              value: B
            }),
            group: R({}, k, {
              value: I
            }),
            groupCollapsed: R({}, k, {
              value: z
            }),
            groupEnd: R({}, k, {
              value: G
            })
          });
        }
        P < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = w.ReactCurrentDispatcher, U;
    function Q(k, te, le) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (ke) {
            var Ce = ke.stack.trim().match(/\n( *(at )?)/);
            U = Ce && Ce[1] || "";
          }
        return `
` + U + k;
      }
    }
    var oe = !1, J;
    {
      var K = typeof WeakMap == "function" ? WeakMap : Map;
      J = new K();
    }
    function Y(k, te) {
      if (!k || oe)
        return "";
      {
        var le = J.get(k);
        if (le !== void 0)
          return le;
      }
      var Ce;
      oe = !0;
      var ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Le;
      Le = Z.current, Z.current = null, W();
      try {
        if (te) {
          var Re = function() {
            throw Error();
          };
          if (Object.defineProperty(Re.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Re, []);
            } catch (gt) {
              Ce = gt;
            }
            Reflect.construct(k, [], Re);
          } else {
            try {
              Re.call();
            } catch (gt) {
              Ce = gt;
            }
            k.call(Re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            Ce = gt;
          }
          k();
        }
      } catch (gt) {
        if (gt && Ce && typeof gt.stack == "string") {
          for (var Pe = gt.stack.split(`
`), pt = Ce.stack.split(`
`), Ze = Pe.length - 1, tt = pt.length - 1; Ze >= 1 && tt >= 0 && Pe[Ze] !== pt[tt]; )
            tt--;
          for (; Ze >= 1 && tt >= 0; Ze--, tt--)
            if (Pe[Ze] !== pt[tt]) {
              if (Ze !== 1 || tt !== 1)
                do
                  if (Ze--, tt--, tt < 0 || Pe[Ze] !== pt[tt]) {
                    var Pt = `
` + Pe[Ze].replace(" at new ", " at ");
                    return k.displayName && Pt.includes("<anonymous>") && (Pt = Pt.replace("<anonymous>", k.displayName)), typeof k == "function" && J.set(k, Pt), Pt;
                  }
                while (Ze >= 1 && tt >= 0);
              break;
            }
        }
      } finally {
        oe = !1, Z.current = Le, q(), Error.prepareStackTrace = ke;
      }
      var Mn = k ? k.displayName || k.name : "", hn = Mn ? Q(Mn) : "";
      return typeof k == "function" && J.set(k, hn), hn;
    }
    function H(k, te, le) {
      return Y(k, !1);
    }
    function se(k) {
      var te = k.prototype;
      return !!(te && te.isReactComponent);
    }
    function fe(k, te, le) {
      if (k == null)
        return "";
      if (typeof k == "function")
        return Y(k, se(k));
      if (typeof k == "string")
        return Q(k);
      switch (k) {
        case u:
          return Q("Suspense");
        case d:
          return Q("SuspenseList");
      }
      if (typeof k == "object")
        switch (k.$$typeof) {
          case c:
            return H(k.render);
          case p:
            return fe(k.type, te, le);
          case h: {
            var Ce = k, ke = Ce._payload, Le = Ce._init;
            try {
              return fe(Le(ke), te, le);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, $e = {}, ue = w.ReactDebugCurrentFrame;
    function de(k) {
      if (k) {
        var te = k._owner, le = fe(k.type, k._source, te ? te.type : null);
        ue.setExtraStackFrame(le);
      } else
        ue.setExtraStackFrame(null);
    }
    function ee(k, te, le, Ce, ke) {
      {
        var Le = Function.call.bind(be);
        for (var Re in k)
          if (Le(k, Re)) {
            var Pe = void 0;
            try {
              if (typeof k[Re] != "function") {
                var pt = Error((Ce || "React class") + ": " + le + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof k[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pt.name = "Invariant Violation", pt;
              }
              Pe = k[Re](te, Re, Ce, le, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ze) {
              Pe = Ze;
            }
            Pe && !(Pe instanceof Error) && (de(ke), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ce || "React class", le, Re, typeof Pe), de(null)), Pe instanceof Error && !(Pe.message in $e) && ($e[Pe.message] = !0, de(ke), T("Failed %s type: %s", le, Pe.message), de(null));
          }
      }
    }
    var re = Array.isArray;
    function he(k) {
      return re(k);
    }
    function Te(k) {
      {
        var te = typeof Symbol == "function" && Symbol.toStringTag, le = te && k[Symbol.toStringTag] || k.constructor.name || "Object";
        return le;
      }
    }
    function ve(k) {
      try {
        return Oe(k), !1;
      } catch {
        return !0;
      }
    }
    function Oe(k) {
      return "" + k;
    }
    function Ye(k) {
      if (ve(k))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Te(k)), Oe(k);
    }
    var De = w.ReactCurrentOwner, Ee = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, qe, xt;
    xt = {};
    function mt(k) {
      if (be.call(k, "ref")) {
        var te = Object.getOwnPropertyDescriptor(k, "ref").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return k.ref !== void 0;
    }
    function lt(k) {
      if (be.call(k, "key")) {
        var te = Object.getOwnPropertyDescriptor(k, "key").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return k.key !== void 0;
    }
    function ge(k, te) {
      if (typeof k.ref == "string" && De.current && te && De.current.stateNode !== te) {
        var le = A(De.current.type);
        xt[le] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(De.current.type), k.ref), xt[le] = !0);
      }
    }
    function Se(k, te) {
      {
        var le = function() {
          me || (me = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        le.isReactWarning = !0, Object.defineProperty(k, "key", {
          get: le,
          configurable: !0
        });
      }
    }
    function Qe(k, te) {
      {
        var le = function() {
          qe || (qe = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        le.isReactWarning = !0, Object.defineProperty(k, "ref", {
          get: le,
          configurable: !0
        });
      }
    }
    var Bt = function(k, te, le, Ce, ke, Le, Re) {
      var Pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: k,
        key: te,
        ref: le,
        props: Re,
        // Record the component responsible for creating this element.
        _owner: Le
      };
      return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.defineProperty(Pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
    };
    function nn(k, te, le, Ce, ke) {
      {
        var Le, Re = {}, Pe = null, pt = null;
        le !== void 0 && (Ye(le), Pe = "" + le), lt(te) && (Ye(te.key), Pe = "" + te.key), mt(te) && (pt = te.ref, ge(te, ke));
        for (Le in te)
          be.call(te, Le) && !Ee.hasOwnProperty(Le) && (Re[Le] = te[Le]);
        if (k && k.defaultProps) {
          var Ze = k.defaultProps;
          for (Le in Ze)
            Re[Le] === void 0 && (Re[Le] = Ze[Le]);
        }
        if (Pe || pt) {
          var tt = typeof k == "function" ? k.displayName || k.name || "Unknown" : k;
          Pe && Se(Re, tt), pt && Qe(Re, tt);
        }
        return Bt(k, Pe, pt, ke, Ce, De.current, Re);
      }
    }
    var Rn = w.ReactCurrentOwner, Dn = w.ReactDebugCurrentFrame;
    function Wt(k) {
      if (k) {
        var te = k._owner, le = fe(k.type, k._source, te ? te.type : null);
        Dn.setExtraStackFrame(le);
      } else
        Dn.setExtraStackFrame(null);
    }
    var pn;
    pn = !1;
    function uo(k) {
      return typeof k == "object" && k !== null && k.$$typeof === t;
    }
    function Be() {
      {
        if (Rn.current) {
          var k = A(Rn.current.type);
          if (k)
            return `

Check the render method of \`` + k + "`.";
        }
        return "";
      }
    }
    function St(k) {
      {
        if (k !== void 0) {
          var te = k.fileName.replace(/^.*[\\\/]/, ""), le = k.lineNumber;
          return `

Check your code at ` + te + ":" + le + ".";
        }
        return "";
      }
    }
    var on = {};
    function zt(k) {
      {
        var te = Be();
        if (!te) {
          var le = typeof k == "string" ? k : k.displayName || k.name;
          le && (te = `

Check the top-level render call using <` + le + ">.");
        }
        return te;
      }
    }
    function ei(k, te) {
      {
        if (!k._store || k._store.validated || k.key != null)
          return;
        k._store.validated = !0;
        var le = zt(te);
        if (on[le])
          return;
        on[le] = !0;
        var Ce = "";
        k && k._owner && k._owner !== Rn.current && (Ce = " It was passed a child from " + A(k._owner.type) + "."), Wt(k), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, Ce), Wt(null);
      }
    }
    function ti(k, te) {
      {
        if (typeof k != "object")
          return;
        if (he(k))
          for (var le = 0; le < k.length; le++) {
            var Ce = k[le];
            uo(Ce) && ei(Ce, te);
          }
        else if (uo(k))
          k._store && (k._store.validated = !0);
        else if (k) {
          var ke = C(k);
          if (typeof ke == "function" && ke !== k.entries)
            for (var Le = ke.call(k), Re; !(Re = Le.next()).done; )
              uo(Re.value) && ei(Re.value, te);
        }
      }
    }
    function jd(k) {
      {
        var te = k.type;
        if (te == null || typeof te == "string")
          return;
        var le;
        if (typeof te == "function")
          le = te.propTypes;
        else if (typeof te == "object" && (te.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        te.$$typeof === p))
          le = te.propTypes;
        else
          return;
        if (le) {
          var Ce = A(te);
          ee(le, k.props, "prop", Ce, k);
        } else if (te.PropTypes !== void 0 && !pn) {
          pn = !0;
          var ke = A(te);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ke || "Unknown");
        }
        typeof te.getDefaultProps == "function" && !te.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ad(k) {
      {
        for (var te = Object.keys(k.props), le = 0; le < te.length; le++) {
          var Ce = te[le];
          if (Ce !== "children" && Ce !== "key") {
            Wt(k), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ce), Wt(null);
            break;
          }
        }
        k.ref !== null && (Wt(k), T("Invalid attribute `ref` supplied to `React.Fragment`."), Wt(null));
      }
    }
    var ni = {};
    function oi(k, te, le, Ce, ke, Le) {
      {
        var Re = V(k);
        if (!Re) {
          var Pe = "";
          (k === void 0 || typeof k == "object" && k !== null && Object.keys(k).length === 0) && (Pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pt = St(ke);
          pt ? Pe += pt : Pe += Be();
          var Ze;
          k === null ? Ze = "null" : he(k) ? Ze = "array" : k !== void 0 && k.$$typeof === t ? (Ze = "<" + (A(k.type) || "Unknown") + " />", Pe = " Did you accidentally export a JSX literal instead of a component?") : Ze = typeof k, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ze, Pe);
        }
        var tt = nn(k, te, le, ke, Le);
        if (tt == null)
          return tt;
        if (Re) {
          var Pt = te.children;
          if (Pt !== void 0)
            if (Ce)
              if (he(Pt)) {
                for (var Mn = 0; Mn < Pt.length; Mn++)
                  ti(Pt[Mn], k);
                Object.freeze && Object.freeze(Pt);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ti(Pt, k);
        }
        if (be.call(te, "key")) {
          var hn = A(k), gt = Object.keys(te).filter(function(zd) {
            return zd !== "key";
          }), gs = gt.length > 0 ? "{key: someKey, " + gt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ni[hn + gs]) {
            var Wd = gt.length > 0 ? "{" + gt.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, gs, hn, Wd, hn), ni[hn + gs] = !0;
          }
        }
        return k === r ? Ad(tt) : jd(tt), tt;
      }
    }
    function Fd(k, te, le) {
      return oi(k, te, le, !0);
    }
    function Vd(k, te, le) {
      return oi(k, te, le, !1);
    }
    var Ld = Vd, Bd = Fd;
    po.Fragment = r, po.jsx = Ld, po.jsxs = Bd;
  }()), po;
}
process.env.NODE_ENV === "production" ? Fs.exports = lf() : Fs.exports = cf();
var S = Fs.exports, na = {}, jl = { exports: {} };
(function(e) {
  function t(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(jl);
var ln = jl.exports, vs = {};
function cn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function g() {
  return g = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, g.apply(null, arguments);
}
function sn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Al(e) {
  if (/* @__PURE__ */ b.isValidElement(e) || !sn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Al(e[o]);
  }), t;
}
function wt(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? g({}, e) : e;
  return sn(e) && sn(t) && Object.keys(t).forEach((a) => {
    /* @__PURE__ */ b.isValidElement(t[a]) ? r[a] = t[a] : sn(t[a]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, a) && sn(e[a]) ? r[a] = wt(e[a], t[a], o) : o.clone ? r[a] = sn(t[a]) ? Al(t[a]) : t[a] : r[a] = t[a];
  }), r;
}
const uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wt,
  isPlainObject: sn
}, Symbol.toStringTag, { value: "Module" }));
var Vs = { exports: {} }, tr = { exports: {} }, _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ii;
function df() {
  if (ii)
    return _e;
  ii = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function x(v) {
    if (typeof v == "object" && v !== null) {
      var D = v.$$typeof;
      switch (D) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case r:
            case s:
            case a:
            case p:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case d:
                case y:
                case m:
                case i:
                  return v;
                default:
                  return D;
              }
          }
        case o:
          return D;
      }
    }
  }
  function E(v) {
    return x(v) === u;
  }
  return _e.AsyncMode = c, _e.ConcurrentMode = u, _e.ContextConsumer = l, _e.ContextProvider = i, _e.Element = t, _e.ForwardRef = d, _e.Fragment = r, _e.Lazy = y, _e.Memo = m, _e.Portal = o, _e.Profiler = s, _e.StrictMode = a, _e.Suspense = p, _e.isAsyncMode = function(v) {
    return E(v) || x(v) === c;
  }, _e.isConcurrentMode = E, _e.isContextConsumer = function(v) {
    return x(v) === l;
  }, _e.isContextProvider = function(v) {
    return x(v) === i;
  }, _e.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, _e.isForwardRef = function(v) {
    return x(v) === d;
  }, _e.isFragment = function(v) {
    return x(v) === r;
  }, _e.isLazy = function(v) {
    return x(v) === y;
  }, _e.isMemo = function(v) {
    return x(v) === m;
  }, _e.isPortal = function(v) {
    return x(v) === o;
  }, _e.isProfiler = function(v) {
    return x(v) === s;
  }, _e.isStrictMode = function(v) {
    return x(v) === a;
  }, _e.isSuspense = function(v) {
    return x(v) === p;
  }, _e.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === s || v === a || v === p || v === h || typeof v == "object" && v !== null && (v.$$typeof === y || v.$$typeof === m || v.$$typeof === i || v.$$typeof === l || v.$$typeof === d || v.$$typeof === C || v.$$typeof === w || v.$$typeof === T || v.$$typeof === f);
  }, _e.typeOf = x, _e;
}
var je = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var li;
function ff() {
  return li || (li = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function x(Y) {
      return typeof Y == "string" || typeof Y == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Y === r || Y === u || Y === s || Y === a || Y === p || Y === h || typeof Y == "object" && Y !== null && (Y.$$typeof === y || Y.$$typeof === m || Y.$$typeof === i || Y.$$typeof === l || Y.$$typeof === d || Y.$$typeof === C || Y.$$typeof === w || Y.$$typeof === T || Y.$$typeof === f);
    }
    function E(Y) {
      if (typeof Y == "object" && Y !== null) {
        var H = Y.$$typeof;
        switch (H) {
          case t:
            var se = Y.type;
            switch (se) {
              case c:
              case u:
              case r:
              case s:
              case a:
              case p:
                return se;
              default:
                var fe = se && se.$$typeof;
                switch (fe) {
                  case l:
                  case d:
                  case y:
                  case m:
                  case i:
                    return fe;
                  default:
                    return H;
                }
            }
          case o:
            return H;
        }
      }
    }
    var v = c, D = u, O = l, F = i, _ = t, V = d, N = r, L = y, A = m, R = o, P = s, M = a, j = p, $ = !1;
    function B(Y) {
      return $ || ($ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(Y) || E(Y) === c;
    }
    function I(Y) {
      return E(Y) === u;
    }
    function z(Y) {
      return E(Y) === l;
    }
    function G(Y) {
      return E(Y) === i;
    }
    function X(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === t;
    }
    function W(Y) {
      return E(Y) === d;
    }
    function q(Y) {
      return E(Y) === r;
    }
    function Z(Y) {
      return E(Y) === y;
    }
    function U(Y) {
      return E(Y) === m;
    }
    function Q(Y) {
      return E(Y) === o;
    }
    function oe(Y) {
      return E(Y) === s;
    }
    function J(Y) {
      return E(Y) === a;
    }
    function K(Y) {
      return E(Y) === p;
    }
    je.AsyncMode = v, je.ConcurrentMode = D, je.ContextConsumer = O, je.ContextProvider = F, je.Element = _, je.ForwardRef = V, je.Fragment = N, je.Lazy = L, je.Memo = A, je.Portal = R, je.Profiler = P, je.StrictMode = M, je.Suspense = j, je.isAsyncMode = B, je.isConcurrentMode = I, je.isContextConsumer = z, je.isContextProvider = G, je.isElement = X, je.isForwardRef = W, je.isFragment = q, je.isLazy = Z, je.isMemo = U, je.isPortal = Q, je.isProfiler = oe, je.isStrictMode = J, je.isSuspense = K, je.isValidElementType = x, je.typeOf = E;
  }()), je;
}
var ci;
function Fl() {
  return ci || (ci = 1, process.env.NODE_ENV === "production" ? tr.exports = df() : tr.exports = ff()), tr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xs, ui;
function pf() {
  if (ui)
    return xs;
  ui = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var i = {}, l = 0; l < 10; l++)
        i["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(i).map(function(d) {
        return i[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xs = a() ? Object.assign : function(s, i) {
    for (var l, c = r(s), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var h = 0; h < u.length; h++)
          o.call(l, u[h]) && (c[u[h]] = l[u[h]]);
      }
    }
    return c;
  }, xs;
}
var Cs, di;
function oa() {
  if (di)
    return Cs;
  di = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Cs = e, Cs;
}
var ws, fi;
function Vl() {
  return fi || (fi = 1, ws = Function.call.bind(Object.prototype.hasOwnProperty)), ws;
}
var Ts, pi;
function hf() {
  if (pi)
    return Ts;
  pi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = oa(), o = {}, r = Vl();
    e = function(s) {
      var i = "Warning: " + s;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function a(s, i, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var p;
          try {
            if (typeof s[d] != "function") {
              var h = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = s[d](i, d, c, l, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in o)) {
            o[p.message] = !0;
            var m = u ? u() : "";
            e(
              "Failed " + l + " type: " + p.message + (m ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Ts = a, Ts;
}
var Es, hi;
function mf() {
  if (hi)
    return Es;
  hi = 1;
  var e = Fl(), t = pf(), o = oa(), r = Vl(), a = hf(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return Es = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(I) {
      var z = I && (u && I[u] || I[d]);
      if (typeof z == "function")
        return z;
    }
    var h = "<<anonymous>>", m = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: T(),
      arrayOf: x,
      element: E(),
      elementType: v(),
      instanceOf: D,
      node: V(),
      objectOf: F,
      oneOf: O,
      oneOfType: _,
      shape: L,
      exact: A
    };
    function y(I, z) {
      return I === z ? I !== 0 || 1 / I === 1 / z : I !== I && z !== z;
    }
    function f(I, z) {
      this.message = I, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function C(I) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, G = 0;
      function X(q, Z, U, Q, oe, J, K) {
        if (Q = Q || h, J = J || U, K !== o) {
          if (c) {
            var Y = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Y.name = "Invariant Violation", Y;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var H = Q + ":" + U;
            !z[H] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[H] = !0, G++);
          }
        }
        return Z[U] == null ? q ? Z[U] === null ? new f("The " + oe + " `" + J + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new f("The " + oe + " `" + J + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : I(Z, U, Q, oe, J);
      }
      var W = X.bind(null, !1);
      return W.isRequired = X.bind(null, !0), W;
    }
    function w(I) {
      function z(G, X, W, q, Z, U) {
        var Q = G[X], oe = M(Q);
        if (oe !== I) {
          var J = j(Q);
          return new f(
            "Invalid " + q + " `" + Z + "` of type " + ("`" + J + "` supplied to `" + W + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return C(z);
    }
    function T() {
      return C(i);
    }
    function x(I) {
      function z(G, X, W, q, Z) {
        if (typeof I != "function")
          return new f("Property `" + Z + "` of component `" + W + "` has invalid PropType notation inside arrayOf.");
        var U = G[X];
        if (!Array.isArray(U)) {
          var Q = M(U);
          return new f("Invalid " + q + " `" + Z + "` of type " + ("`" + Q + "` supplied to `" + W + "`, expected an array."));
        }
        for (var oe = 0; oe < U.length; oe++) {
          var J = I(U, oe, W, q, Z + "[" + oe + "]", o);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return C(z);
    }
    function E() {
      function I(z, G, X, W, q) {
        var Z = z[G];
        if (!l(Z)) {
          var U = M(Z);
          return new f("Invalid " + W + " `" + q + "` of type " + ("`" + U + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(I);
    }
    function v() {
      function I(z, G, X, W, q) {
        var Z = z[G];
        if (!e.isValidElementType(Z)) {
          var U = M(Z);
          return new f("Invalid " + W + " `" + q + "` of type " + ("`" + U + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(I);
    }
    function D(I) {
      function z(G, X, W, q, Z) {
        if (!(G[X] instanceof I)) {
          var U = I.name || h, Q = B(G[X]);
          return new f("Invalid " + q + " `" + Z + "` of type " + ("`" + Q + "` supplied to `" + W + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return C(z);
    }
    function O(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function z(G, X, W, q, Z) {
        for (var U = G[X], Q = 0; Q < I.length; Q++)
          if (y(U, I[Q]))
            return null;
        var oe = JSON.stringify(I, function(K, Y) {
          var H = j(Y);
          return H === "symbol" ? String(Y) : Y;
        });
        return new f("Invalid " + q + " `" + Z + "` of value `" + String(U) + "` " + ("supplied to `" + W + "`, expected one of " + oe + "."));
      }
      return C(z);
    }
    function F(I) {
      function z(G, X, W, q, Z) {
        if (typeof I != "function")
          return new f("Property `" + Z + "` of component `" + W + "` has invalid PropType notation inside objectOf.");
        var U = G[X], Q = M(U);
        if (Q !== "object")
          return new f("Invalid " + q + " `" + Z + "` of type " + ("`" + Q + "` supplied to `" + W + "`, expected an object."));
        for (var oe in U)
          if (r(U, oe)) {
            var J = I(U, oe, W, q, Z + "." + oe, o);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return C(z);
    }
    function _(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var z = 0; z < I.length; z++) {
        var G = I[z];
        if (typeof G != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + $(G) + " at index " + z + "."
          ), i;
      }
      function X(W, q, Z, U, Q) {
        for (var oe = [], J = 0; J < I.length; J++) {
          var K = I[J], Y = K(W, q, Z, U, Q, o);
          if (Y == null)
            return null;
          Y.data && r(Y.data, "expectedType") && oe.push(Y.data.expectedType);
        }
        var H = oe.length > 0 ? ", expected one of type [" + oe.join(", ") + "]" : "";
        return new f("Invalid " + U + " `" + Q + "` supplied to " + ("`" + Z + "`" + H + "."));
      }
      return C(X);
    }
    function V() {
      function I(z, G, X, W, q) {
        return R(z[G]) ? null : new f("Invalid " + W + " `" + q + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return C(I);
    }
    function N(I, z, G, X, W) {
      return new f(
        (I || "React class") + ": " + z + " type `" + G + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + W + "`."
      );
    }
    function L(I) {
      function z(G, X, W, q, Z) {
        var U = G[X], Q = M(U);
        if (Q !== "object")
          return new f("Invalid " + q + " `" + Z + "` of type `" + Q + "` " + ("supplied to `" + W + "`, expected `object`."));
        for (var oe in I) {
          var J = I[oe];
          if (typeof J != "function")
            return N(W, q, Z, oe, j(J));
          var K = J(U, oe, W, q, Z + "." + oe, o);
          if (K)
            return K;
        }
        return null;
      }
      return C(z);
    }
    function A(I) {
      function z(G, X, W, q, Z) {
        var U = G[X], Q = M(U);
        if (Q !== "object")
          return new f("Invalid " + q + " `" + Z + "` of type `" + Q + "` " + ("supplied to `" + W + "`, expected `object`."));
        var oe = t({}, G[X], I);
        for (var J in oe) {
          var K = I[J];
          if (r(I, J) && typeof K != "function")
            return N(W, q, Z, J, j(K));
          if (!K)
            return new f(
              "Invalid " + q + " `" + Z + "` key `" + J + "` supplied to `" + W + "`.\nBad object: " + JSON.stringify(G[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var Y = K(U, J, W, q, Z + "." + J, o);
          if (Y)
            return Y;
        }
        return null;
      }
      return C(z);
    }
    function R(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(R);
          if (I === null || l(I))
            return !0;
          var z = p(I);
          if (z) {
            var G = z.call(I), X;
            if (z !== I.entries) {
              for (; !(X = G.next()).done; )
                if (!R(X.value))
                  return !1;
            } else
              for (; !(X = G.next()).done; ) {
                var W = X.value;
                if (W && !R(W[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function P(I, z) {
      return I === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function M(I) {
      var z = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : P(z, I) ? "symbol" : z;
    }
    function j(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var z = M(I);
      if (z === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function $(I) {
      var z = j(I);
      switch (z) {
        case "array":
        case "object":
          return "an " + z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + z;
        default:
          return z;
      }
    }
    function B(I) {
      return !I.constructor || !I.constructor.name ? h : I.constructor.name;
    }
    return m.checkPropTypes = a, m.resetWarningCache = a.resetWarningCache, m.PropTypes = m, m;
  }, Es;
}
var Ss, mi;
function gf() {
  if (mi)
    return Ss;
  mi = 1;
  var e = oa();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ss = function() {
    function r(i, l, c, u, d, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: o,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Ss;
}
if (process.env.NODE_ENV !== "production") {
  var bf = Fl(), yf = !0;
  Vs.exports = mf()(bf.isElement, yf);
} else
  Vs.exports = gf()();
var vf = Vs.exports;
const n = /* @__PURE__ */ oo(vf);
function xf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ll(e, t, o, r, a) {
  const s = e[t], i = a || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !xf(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${i}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Bl = cn(n.element, Ll);
Bl.isRequired = cn(n.element.isRequired, Ll);
const jr = Bl;
function Cf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function wf(e, t, o, r, a) {
  const s = e[t], i = a || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !Cf(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${i}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ar = cn(n.elementType, wf), Tf = "exact-prop: ​";
function Wl(e) {
  return process.env.NODE_ENV === "production" ? e : g({}, e, {
    [Tf]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Gt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    t += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Ef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gt
}, Symbol.toStringTag, { value: "Module" }));
var Ls = { exports: {} }, Fe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gi;
function Sf() {
  if (gi)
    return Fe;
  gi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.for("react.client.reference");
  function y(f) {
    if (typeof f == "object" && f !== null) {
      var C = f.$$typeof;
      switch (C) {
        case e:
          switch (f = f.type, f) {
            case o:
            case a:
            case r:
            case c:
            case u:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case i:
                case l:
                case p:
                case d:
                  return f;
                case s:
                  return f;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return Fe.ContextConsumer = s, Fe.ContextProvider = i, Fe.Element = e, Fe.ForwardRef = l, Fe.Fragment = o, Fe.Lazy = p, Fe.Memo = d, Fe.Portal = t, Fe.Profiler = a, Fe.StrictMode = r, Fe.Suspense = c, Fe.SuspenseList = u, Fe.isContextConsumer = function(f) {
    return y(f) === s;
  }, Fe.isContextProvider = function(f) {
    return y(f) === i;
  }, Fe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Fe.isForwardRef = function(f) {
    return y(f) === l;
  }, Fe.isFragment = function(f) {
    return y(f) === o;
  }, Fe.isLazy = function(f) {
    return y(f) === p;
  }, Fe.isMemo = function(f) {
    return y(f) === d;
  }, Fe.isPortal = function(f) {
    return y(f) === t;
  }, Fe.isProfiler = function(f) {
    return y(f) === a;
  }, Fe.isStrictMode = function(f) {
    return y(f) === r;
  }, Fe.isSuspense = function(f) {
    return y(f) === c;
  }, Fe.isSuspenseList = function(f) {
    return y(f) === u;
  }, Fe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === a || f === r || f === c || f === u || f === h || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === d || f.$$typeof === i || f.$$typeof === s || f.$$typeof === l || f.$$typeof === m || f.getModuleId !== void 0);
  }, Fe.typeOf = y, Fe;
}
var Ve = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bi;
function Pf() {
  return bi || (bi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (typeof f == "object" && f !== null) {
        var C = f.$$typeof;
        switch (C) {
          case t:
            switch (f = f.type, f) {
              case r:
              case s:
              case a:
              case u:
              case d:
                return f;
              default:
                switch (f = f && f.$$typeof, f) {
                  case l:
                  case c:
                  case h:
                  case p:
                    return f;
                  case i:
                    return f;
                  default:
                    return C;
                }
            }
          case o:
            return C;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.for("react.client.reference");
    Ve.ContextConsumer = i, Ve.ContextProvider = l, Ve.Element = t, Ve.ForwardRef = c, Ve.Fragment = r, Ve.Lazy = h, Ve.Memo = p, Ve.Portal = o, Ve.Profiler = s, Ve.StrictMode = a, Ve.Suspense = u, Ve.SuspenseList = d, Ve.isContextConsumer = function(f) {
      return e(f) === i;
    }, Ve.isContextProvider = function(f) {
      return e(f) === l;
    }, Ve.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, Ve.isForwardRef = function(f) {
      return e(f) === c;
    }, Ve.isFragment = function(f) {
      return e(f) === r;
    }, Ve.isLazy = function(f) {
      return e(f) === h;
    }, Ve.isMemo = function(f) {
      return e(f) === p;
    }, Ve.isPortal = function(f) {
      return e(f) === o;
    }, Ve.isProfiler = function(f) {
      return e(f) === s;
    }, Ve.isStrictMode = function(f) {
      return e(f) === a;
    }, Ve.isSuspense = function(f) {
      return e(f) === u;
    }, Ve.isSuspenseList = function(f) {
      return e(f) === d;
    }, Ve.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === r || f === s || f === a || f === u || f === d || f === m || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === p || f.$$typeof === l || f.$$typeof === i || f.$$typeof === c || f.$$typeof === y || f.getModuleId !== void 0);
    }, Ve.typeOf = e;
  }()), Ve;
}
process.env.NODE_ENV === "production" ? Ls.exports = Sf() : Ls.exports = Pf();
var ko = Ls.exports;
const Of = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function zl(e) {
  const t = `${e}`.match(Of);
  return t && t[1] || "";
}
function Ul(e, t = "") {
  return e.displayName || e.name || zl(e) || t;
}
function yi(e, t, o) {
  const r = Ul(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function Rf(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ul(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ko.ForwardRef:
          return yi(e, e.render, "ForwardRef");
        case ko.Memo:
          return yi(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rf,
  getFunctionName: zl
}, Symbol.toStringTag, { value: "Module" }));
function Xt(e, t, o, r, a) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], i = a || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${i}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
const Mf = n.oneOfType([n.func, n.object]), ht = Mf;
function ie(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Gt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const $f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ie
}, Symbol.toStringTag, { value: "Module" }));
function Bs(...e) {
  return e.reduce((t, o) => o == null ? t : function(...a) {
    t.apply(this, a), o.apply(this, a);
  }, () => {
  });
}
function ra(e, t = 166) {
  let o;
  function r(...a) {
    const s = () => {
      e.apply(this, a);
    };
    clearTimeout(o), o = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function kf(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (o, r, a, s, i) => {
    const l = a || "<<anonymous>>", c = i || r;
    return typeof o[r] < "u" ? new Error(`The ${s} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Wn(e, t) {
  var o, r;
  return /* @__PURE__ */ b.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (o = e.type.muiName) != null ? o : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function st(e) {
  return e && e.ownerDocument || document;
}
function an(e) {
  return st(e).defaultView || window;
}
function If(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const o = t ? g({}, t.propTypes) : null;
  return (a) => (s, i, l, c, u, ...d) => {
    const p = u || i, h = o == null ? void 0 : o[p];
    if (h) {
      const m = h(s, i, l, c, u, ...d);
      if (m)
        return m;
    }
    return typeof s[i] < "u" && !s[a] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${a}\` prop.`) : null;
  };
}
function Cr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Nf = typeof window < "u" ? b.useLayoutEffect : b.useEffect, it = Nf;
let vi = 0;
function _f(e) {
  const [t, o] = b.useState(e), r = e || t;
  return b.useEffect(() => {
    t == null && (vi += 1, o(`mui-${vi}`));
  }, [t]), r;
}
const xi = b["useId".toString()];
function En(e) {
  if (xi !== void 0) {
    const t = xi();
    return e ?? t;
  }
  return _f(e);
}
function Yl(e, t, o, r, a) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = a || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function Ft({
  controlled: e,
  default: t,
  name: o,
  state: r = "value"
}) {
  const {
    current: a
  } = b.useRef(e !== void 0), [s, i] = b.useState(t), l = a ? e : s;
  if (process.env.NODE_ENV !== "production") {
    b.useEffect(() => {
      a !== (e !== void 0) && console.error([`MUI: A component is changing the ${a ? "" : "un"}controlled ${r} state of ${o} to be ${a ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, e]);
    const {
      current: u
    } = b.useRef(t);
    b.useEffect(() => {
      !a && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = b.useCallback((u) => {
    a || i(u);
  }, []);
  return [l, c];
}
function pe(e) {
  const t = b.useRef(e);
  return it(() => {
    t.current = e;
  }), b.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function We(...e) {
  return b.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      Cr(o, t);
    });
  }, e);
}
const Ci = {};
function jf(e, t) {
  const o = b.useRef(Ci);
  return o.current === Ci && (o.current = e(t)), o;
}
const Af = [];
function Ff(e) {
  b.useEffect(e, Af);
}
class Fr {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Fr();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
}
function Hl() {
  const e = jf(Fr.create).current;
  return Ff(e.disposeEffect), e;
}
let Vr = !0, Ws = !1;
const Vf = new Fr(), Lf = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Bf(e) {
  const {
    type: t,
    tagName: o
  } = e;
  return !!(o === "INPUT" && Lf[t] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Wf(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Vr = !0);
}
function Ps() {
  Vr = !1;
}
function zf() {
  this.visibilityState === "hidden" && Ws && (Vr = !0);
}
function Uf(e) {
  e.addEventListener("keydown", Wf, !0), e.addEventListener("mousedown", Ps, !0), e.addEventListener("pointerdown", Ps, !0), e.addEventListener("touchstart", Ps, !0), e.addEventListener("visibilitychange", zf, !0);
}
function Yf(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Vr || Bf(t);
}
function ql() {
  const e = b.useCallback((a) => {
    a != null && Uf(a.ownerDocument);
  }, []), t = b.useRef(!1);
  function o() {
    return t.current ? (Ws = !0, Vf.start(100, () => {
      Ws = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(a) {
    return Yf(a) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: o,
    ref: e
  };
}
function Kl(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Hf(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function qf(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Kf = Number.isInteger || qf;
function Gl(e, t, o, r) {
  const a = e[t];
  if (a == null || !Kf(a)) {
    const s = Hf(a);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function Xl(e, t, ...o) {
  return e[t] === void 0 ? null : Gl(e, t, ...o);
}
function zs() {
  return null;
}
Xl.isRequired = Gl;
zs.isRequired = zs;
const Ql = process.env.NODE_ENV === "production" ? zs : Xl;
function Io(e, t) {
  const o = g({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = g({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const a = e[r] || {}, s = t[r];
      o[r] = {}, !s || !Object.keys(s) ? o[r] = a : !a || !Object.keys(a) ? o[r] = s : (o[r] = g({}, s), Object.keys(a).forEach((i) => {
        o[r][i] = Io(a[i], s[i]);
      }));
    } else
      o[r] === void 0 && (o[r] = e[r]);
  }), o;
}
function we(e, t, o = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (a) => {
      r[a] = e[a].reduce((s, i) => {
        if (i) {
          const l = t(i);
          l !== "" && s.push(l), o && o[i] && s.push(o[i]);
        }
        return s;
      }, []).join(" ");
    }
  ), r;
}
const wi = (e) => e, Gf = () => {
  let e = wi;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = wi;
    }
  };
}, Xf = Gf(), Zl = Xf, Qf = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function xe(e, t, o = "Mui") {
  const r = Qf[t];
  return r ? `${o}-${r}` : `${Zl.generate(e)}-${t}`;
}
function ye(e, t, o = "Mui") {
  const r = {};
  return t.forEach((a) => {
    r[a] = xe(e, a, o);
  }), r;
}
function Jl(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
const Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jl
}, Symbol.toStringTag, { value: "Module" }));
function ae(e, t) {
  if (e == null)
    return {};
  var o = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r))
        continue;
      o[r] = e[r];
    }
  return o;
}
function qn(e) {
  return typeof e == "string";
}
function Jf(e, t, o) {
  return e === void 0 || qn(e) ? t : g({}, t, {
    ownerState: g({}, t.ownerState, o)
  });
}
function ec(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (o = ec(e[t])) && (r && (r += " "), r += o);
    } else
      for (o in e)
        e[o] && (r && (r += " "), r += o);
  return r;
}
function ce() {
  for (var e, t, o = 0, r = "", a = arguments.length; o < a; o++)
    (e = arguments[o]) && (t = ec(e)) && (r && (r += " "), r += t);
  return r;
}
function tc(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function Ti(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function ep(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: a,
    className: s
  } = e;
  if (!t) {
    const m = ce(o == null ? void 0 : o.className, s, a == null ? void 0 : a.className, r == null ? void 0 : r.className), y = g({}, o == null ? void 0 : o.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), f = g({}, o, a, r);
    return m.length > 0 && (f.className = m), Object.keys(y).length > 0 && (f.style = y), {
      props: f,
      internalRef: void 0
    };
  }
  const i = tc(g({}, a, r)), l = Ti(r), c = Ti(a), u = t(i), d = ce(u == null ? void 0 : u.className, o == null ? void 0 : o.className, s, a == null ? void 0 : a.className, r == null ? void 0 : r.className), p = g({}, u == null ? void 0 : u.style, o == null ? void 0 : o.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), h = g({}, u, o, c, l);
  return d.length > 0 && (h.className = d), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: u.ref
  };
}
function tp(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
const np = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Cn(e) {
  var t;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: a,
    skipResolvingSlotProps: s = !1
  } = e, i = ae(e, np), l = s ? {} : tp(r, a), {
    props: c,
    internalRef: u
  } = ep(g({}, i, {
    externalSlotProps: l
  })), d = We(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Jf(o, g({}, c, {
    ref: d
  }), a);
}
function Wo(e) {
  if (parseInt(b.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const op = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (n.node, n.object);
function rp(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const a = t.components[o];
  return a.defaultProps ? Io(a.defaultProps, r) : !a.styleOverrides && !a.variants ? Io(a, r) : r;
}
function sp({
  props: e,
  name: t
}) {
  const o = b.useContext(op);
  return rp({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function Ae(e) {
  return sp(e);
}
var zo = {}, Os = { exports: {} }, Ei;
function ap() {
  return Ei || (Ei = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(o) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r];
          for (var s in a)
            ({}).hasOwnProperty.call(a, s) && (o[s] = a[s]);
        }
        return o;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Os)), Os.exports;
}
var Rs = { exports: {} }, Si;
function ip() {
  return Si || (Si = 1, function(e) {
    function t(o, r) {
      if (o == null)
        return {};
      var a = {};
      for (var s in o)
        if ({}.hasOwnProperty.call(o, s)) {
          if (r.includes(s))
            continue;
          a[s] = o[s];
        }
      return a;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Rs)), Rs.exports;
}
var lp = !1;
function cp(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function up(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var dp = /* @__PURE__ */ function() {
  function e(o) {
    var r = this;
    this._insertTag = function(a) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(a, s), r.tags.push(a);
    }, this.isSpeedy = o.speedy === void 0 ? !lp : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(up(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = cp(a);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var a;
      return (a = r.parentNode) == null ? void 0 : a.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), dt = "-ms-", wr = "-moz-", Ie = "-webkit-", nc = "comm", sa = "rule", aa = "decl", fp = "@import", oc = "@keyframes", pp = "@layer", hp = Math.abs, Lr = String.fromCharCode, mp = Object.assign;
function gp(e, t) {
  return ct(e, 0) ^ 45 ? (((t << 2 ^ ct(e, 0)) << 2 ^ ct(e, 1)) << 2 ^ ct(e, 2)) << 2 ^ ct(e, 3) : 0;
}
function rc(e) {
  return e.trim();
}
function bp(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ne(e, t, o) {
  return e.replace(t, o);
}
function Us(e, t) {
  return e.indexOf(t);
}
function ct(e, t) {
  return e.charCodeAt(t) | 0;
}
function No(e, t, o) {
  return e.slice(t, o);
}
function Ut(e) {
  return e.length;
}
function ia(e) {
  return e.length;
}
function nr(e, t) {
  return t.push(e), e;
}
function yp(e, t) {
  return e.map(t).join("");
}
var Br = 1, Kn = 1, sc = 0, vt = 0, nt = 0, ro = "";
function Wr(e, t, o, r, a, s, i) {
  return { value: e, root: t, parent: o, type: r, props: a, children: s, line: Br, column: Kn, length: i, return: "" };
}
function ho(e, t) {
  return mp(Wr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function vp() {
  return nt;
}
function xp() {
  return nt = vt > 0 ? ct(ro, --vt) : 0, Kn--, nt === 10 && (Kn = 1, Br--), nt;
}
function Tt() {
  return nt = vt < sc ? ct(ro, vt++) : 0, Kn++, nt === 10 && (Kn = 1, Br++), nt;
}
function Ht() {
  return ct(ro, vt);
}
function fr() {
  return vt;
}
function Uo(e, t) {
  return No(ro, e, t);
}
function _o(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ac(e) {
  return Br = Kn = 1, sc = Ut(ro = e), vt = 0, [];
}
function ic(e) {
  return ro = "", e;
}
function pr(e) {
  return rc(Uo(vt - 1, Ys(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Cp(e) {
  for (; (nt = Ht()) && nt < 33; )
    Tt();
  return _o(e) > 2 || _o(nt) > 3 ? "" : " ";
}
function wp(e, t) {
  for (; --t && Tt() && !(nt < 48 || nt > 102 || nt > 57 && nt < 65 || nt > 70 && nt < 97); )
    ;
  return Uo(e, fr() + (t < 6 && Ht() == 32 && Tt() == 32));
}
function Ys(e) {
  for (; Tt(); )
    switch (nt) {
      case e:
        return vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ys(nt);
        break;
      case 40:
        e === 41 && Ys(e);
        break;
      case 92:
        Tt();
        break;
    }
  return vt;
}
function Tp(e, t) {
  for (; Tt() && e + nt !== 47 + 10; )
    if (e + nt === 42 + 42 && Ht() === 47)
      break;
  return "/*" + Uo(t, vt - 1) + "*" + Lr(e === 47 ? e : Tt());
}
function Ep(e) {
  for (; !_o(Ht()); )
    Tt();
  return Uo(e, vt);
}
function Sp(e) {
  return ic(hr("", null, null, null, [""], e = ac(e), 0, [0], e));
}
function hr(e, t, o, r, a, s, i, l, c) {
  for (var u = 0, d = 0, p = i, h = 0, m = 0, y = 0, f = 1, C = 1, w = 1, T = 0, x = "", E = a, v = s, D = r, O = x; C; )
    switch (y = T, T = Tt()) {
      case 40:
        if (y != 108 && ct(O, p - 1) == 58) {
          Us(O += Ne(pr(T), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += pr(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += Cp(y);
        break;
      case 92:
        O += wp(fr() - 1, 7);
        continue;
      case 47:
        switch (Ht()) {
          case 42:
          case 47:
            nr(Pp(Tp(Tt(), fr()), t, o), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * f:
        l[u++] = Ut(O) * w;
      case 125 * f:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            w == -1 && (O = Ne(O, /\f/g, "")), m > 0 && Ut(O) - p && nr(m > 32 ? Oi(O + ";", r, o, p - 1) : Oi(Ne(O, " ", "") + ";", r, o, p - 2), c);
            break;
          case 59:
            O += ";";
          default:
            if (nr(D = Pi(O, t, o, u, d, a, l, x, E = [], v = [], p), s), T === 123)
              if (d === 0)
                hr(O, t, D, D, E, s, p, l, v);
              else
                switch (h === 99 && ct(O, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    hr(e, D, D, r && nr(Pi(e, D, D, 0, 0, a, l, x, a, E = [], p), v), a, v, p, l, r ? E : v);
                    break;
                  default:
                    hr(O, D, D, D, [""], v, 0, l, v);
                }
        }
        u = d = m = 0, f = w = 1, x = O = "", p = i;
        break;
      case 58:
        p = 1 + Ut(O), m = y;
      default:
        if (f < 1) {
          if (T == 123)
            --f;
          else if (T == 125 && f++ == 0 && xp() == 125)
            continue;
        }
        switch (O += Lr(T), T * f) {
          case 38:
            w = d > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            l[u++] = (Ut(O) - 1) * w, w = 1;
            break;
          case 64:
            Ht() === 45 && (O += pr(Tt())), h = Ht(), d = p = Ut(x = O += Ep(fr())), T++;
            break;
          case 45:
            y === 45 && Ut(O) == 2 && (f = 0);
        }
    }
  return s;
}
function Pi(e, t, o, r, a, s, i, l, c, u, d) {
  for (var p = a - 1, h = a === 0 ? s : [""], m = ia(h), y = 0, f = 0, C = 0; y < r; ++y)
    for (var w = 0, T = No(e, p + 1, p = hp(f = i[y])), x = e; w < m; ++w)
      (x = rc(f > 0 ? h[w] + " " + T : Ne(T, /&\f/g, h[w]))) && (c[C++] = x);
  return Wr(e, t, o, a === 0 ? sa : l, c, u, d);
}
function Pp(e, t, o) {
  return Wr(e, t, o, nc, Lr(vp()), No(e, 2, -2), 0);
}
function Oi(e, t, o, r) {
  return Wr(e, t, o, aa, No(e, 0, r), No(e, r + 1, -1), r);
}
function zn(e, t) {
  for (var o = "", r = ia(e), a = 0; a < r; a++)
    o += t(e[a], a, e, t) || "";
  return o;
}
function Op(e, t, o, r) {
  switch (e.type) {
    case pp:
      if (e.children.length)
        break;
    case fp:
    case aa:
      return e.return = e.return || e.value;
    case nc:
      return "";
    case oc:
      return e.return = e.value + "{" + zn(e.children, r) + "}";
    case sa:
      e.value = e.props.join(",");
  }
  return Ut(o = zn(e.children, r)) ? e.return = e.value + "{" + o + "}" : "";
}
function Rp(e) {
  var t = ia(e);
  return function(o, r, a, s) {
    for (var i = "", l = 0; l < t; l++)
      i += e[l](o, r, a, s) || "";
    return i;
  };
}
function Dp(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Mp = function(t, o, r) {
  for (var a = 0, s = 0; a = s, s = Ht(), a === 38 && s === 12 && (o[r] = 1), !_o(s); )
    Tt();
  return Uo(t, vt);
}, $p = function(t, o) {
  var r = -1, a = 44;
  do
    switch (_o(a)) {
      case 0:
        a === 38 && Ht() === 12 && (o[r] = 1), t[r] += Mp(vt - 1, o, r);
        break;
      case 2:
        t[r] += pr(a);
        break;
      case 4:
        if (a === 44) {
          t[++r] = Ht() === 58 ? "&\f" : "", o[r] = t[r].length;
          break;
        }
      default:
        t[r] += Lr(a);
    }
  while (a = Tt());
  return t;
}, kp = function(t, o) {
  return ic($p(ac(t), o));
}, Ri = /* @__PURE__ */ new WeakMap(), Ip = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var o = t.value, r = t.parent, a = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && o.charCodeAt(0) !== 58 && !Ri.get(r)) && !a) {
      Ri.set(t, !0);
      for (var s = [], i = kp(o, s), l = r.props, c = 0, u = 0; c < i.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? i[c].replace(/&\f/g, l[d]) : l[d] + " " + i[c];
    }
  }
}, Np = function(t) {
  if (t.type === "decl") {
    var o = t.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function lc(e, t) {
  switch (gp(e, t)) {
    case 5103:
      return Ie + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ie + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ie + e + wr + e + dt + e + e;
    case 6828:
    case 4268:
      return Ie + e + dt + e + e;
    case 6165:
      return Ie + e + dt + "flex-" + e + e;
    case 5187:
      return Ie + e + Ne(e, /(\w+).+(:[^]+)/, Ie + "box-$1$2" + dt + "flex-$1$2") + e;
    case 5443:
      return Ie + e + dt + "flex-item-" + Ne(e, /flex-|-self/, "") + e;
    case 4675:
      return Ie + e + dt + "flex-line-pack" + Ne(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ie + e + dt + Ne(e, "shrink", "negative") + e;
    case 5292:
      return Ie + e + dt + Ne(e, "basis", "preferred-size") + e;
    case 6060:
      return Ie + "box-" + Ne(e, "-grow", "") + Ie + e + dt + Ne(e, "grow", "positive") + e;
    case 4554:
      return Ie + Ne(e, /([^-])(transform)/g, "$1" + Ie + "$2") + e;
    case 6187:
      return Ne(Ne(Ne(e, /(zoom-|grab)/, Ie + "$1"), /(image-set)/, Ie + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ne(e, /(image-set\([^]*)/, Ie + "$1$`$1");
    case 4968:
      return Ne(Ne(e, /(.+:)(flex-)?(.*)/, Ie + "box-pack:$3" + dt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ie + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ne(e, /(.+)-inline(.+)/, Ie + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ut(e) - 1 - t > 6)
        switch (ct(e, t + 1)) {
          case 109:
            if (ct(e, t + 4) !== 45)
              break;
          case 102:
            return Ne(e, /(.+:)(.+)-([^]+)/, "$1" + Ie + "$2-$3$1" + wr + (ct(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Us(e, "stretch") ? lc(Ne(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (ct(e, t + 1) !== 115)
        break;
    case 6444:
      switch (ct(e, Ut(e) - 3 - (~Us(e, "!important") && 10))) {
        case 107:
          return Ne(e, ":", ":" + Ie) + e;
        case 101:
          return Ne(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ie + (ct(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ie + "$2$3$1" + dt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ct(e, t + 11)) {
        case 114:
          return Ie + e + dt + Ne(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ie + e + dt + Ne(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ie + e + dt + Ne(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ie + e + dt + e + e;
  }
  return e;
}
var _p = function(t, o, r, a) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case aa:
        t.return = lc(t.value, t.length);
        break;
      case oc:
        return zn([ho(t, {
          value: Ne(t.value, "@", "@" + Ie)
        })], a);
      case sa:
        if (t.length)
          return yp(t.props, function(s) {
            switch (bp(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return zn([ho(t, {
                  props: [Ne(s, /:(read-\w+)/, ":" + wr + "$1")]
                })], a);
              case "::placeholder":
                return zn([ho(t, {
                  props: [Ne(s, /:(plac\w+)/, ":" + Ie + "input-$1")]
                }), ho(t, {
                  props: [Ne(s, /:(plac\w+)/, ":" + wr + "$1")]
                }), ho(t, {
                  props: [Ne(s, /:(plac\w+)/, dt + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, jp = [_p], Ap = function(t) {
  var o = t.key;
  if (o === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var C = f.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var a = t.stylisPlugins || jp, s = {}, i, l = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(f) {
      for (var C = f.getAttribute("data-emotion").split(" "), w = 1; w < C.length; w++)
        s[C[w]] = !0;
      l.push(f);
    }
  );
  var c, u = [Ip, Np];
  {
    var d, p = [Op, Dp(function(f) {
      d.insert(f);
    })], h = Rp(u.concat(a, p)), m = function(C) {
      return zn(Sp(C), h);
    };
    c = function(C, w, T, x) {
      d = T, m(C ? C + "{" + w.styles + "}" : w.styles), x && (y.inserted[w.name] = !0);
    };
  }
  var y = {
    key: o,
    sheet: new dp({
      key: o,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: c
  };
  return y.sheet.hydrate(l), y;
};
let Hs;
typeof document == "object" && (Hs = Ap({
  key: "css",
  prepend: !0
}));
function cc(e) {
  const {
    injectFirst: t,
    children: o
  } = e;
  return t && Hs ? /* @__PURE__ */ S.jsx(of, {
    value: Hs,
    children: o
  }) : o;
}
process.env.NODE_ENV !== "production" && (cc.propTypes = {
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: n.bool
});
function Fp(e) {
  return e == null || Object.keys(e).length === 0;
}
function la(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e, r = typeof t == "function" ? (a) => t(Fp(a) ? o : a) : t;
  return /* @__PURE__ */ S.jsx(rf, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (la.propTypes = {
  defaultTheme: n.object,
  styles: n.oneOfType([n.array, n.string, n.object, n.func])
});
/**
 * @mui/styled-engine v5.16.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Vp(e, t) {
  const o = nf(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const a = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${a})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${a})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
const Lp = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Bp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: la,
  StyledEngineProvider: cc,
  ThemeContext: _l,
  css: sf,
  default: Vp,
  internal_processStyles: Lp,
  keyframes: _r
}, Symbol.toStringTag, { value: "Module" })), uc = /* @__PURE__ */ en(Bp), Wp = /* @__PURE__ */ en(uf), zp = /* @__PURE__ */ en($f), Up = /* @__PURE__ */ en(Df), Yp = ["values", "unit", "step"], Hp = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => g({}, o, {
    [r.key]: r.val
  }), {});
};
function dc(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: r = 5
  } = e, a = ae(e, Yp), s = Hp(t), i = Object.keys(s);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${o})`;
  }
  function u(h, m) {
    const y = i.indexOf(m);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o}) and (max-width:${(y !== -1 && typeof t[i[y]] == "number" ? t[i[y]] : m) - r / 100}${o})`;
  }
  function d(h) {
    return i.indexOf(h) + 1 < i.length ? u(h, i[i.indexOf(h) + 1]) : l(h);
  }
  function p(h) {
    const m = i.indexOf(h);
    return m === 0 ? l(i[1]) : m === i.length - 1 ? c(i[m]) : u(h, i[i.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return g({
    keys: i,
    values: s,
    up: l,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: o
  }, a);
}
const qp = {
  borderRadius: 4
}, Kp = qp, Gp = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {}, un = Gp;
function Eo(e, t) {
  return t ? wt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ca = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Di = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ca[e]}px)`
};
function Qt(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Di;
    return t.reduce((i, l, c) => (i[s.up(s.keys[c])] = o(t[c]), i), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Di;
    return Object.keys(t).reduce((i, l) => {
      if (Object.keys(s.values || ca).indexOf(l) !== -1) {
        const c = s.up(l);
        i[c] = o(t[l], l);
      } else {
        const c = l;
        i[c] = t[c];
      }
      return i;
    }, {});
  }
  return o(t);
}
function Xp(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, a) => {
    const s = e.up(a);
    return r[s] = {}, r;
  }, {})) || {};
}
function Qp(e, t) {
  return e.reduce((o, r) => {
    const a = o[r];
    return (!a || Object.keys(a).length === 0) && delete o[r], o;
  }, t);
}
function zr(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((a, s) => a && a[s] ? a[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, a) => r && r[a] != null ? r[a] : null, e);
}
function Tr(e, t, o, r = o) {
  let a;
  return typeof e == "function" ? a = e(o) : Array.isArray(e) ? a = e[o] || r : a = zr(e, o) || r, t && (a = t(a, r, e)), a;
}
function Je(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: a
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const l = i[t], c = i.theme, u = zr(c, r) || {};
    return Qt(i, l, (p) => {
      let h = Tr(u, a, p);
      return p === h && typeof p == "string" && (h = Tr(u, a, `${t}${p === "default" ? "" : ie(p)}`, p)), o === !1 ? h : {
        [o]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: un
  } : {}, s.filterProps = [t], s;
}
function Zp(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Jp = {
  m: "margin",
  p: "padding"
}, eh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Mi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, th = Zp((e) => {
  if (e.length > 2)
    if (Mi[e])
      e = Mi[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Jp[t], a = eh[o] || "";
  return Array.isArray(a) ? a.map((s) => r + s) : [r + a];
}), Ur = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Yr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], nh = [...Ur, ...Yr];
function Yo(e, t, o, r) {
  var a;
  const s = (a = zr(e, t, !1)) != null ? a : o;
  return typeof s == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${i}.`), s * i) : Array.isArray(s) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > s.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${i} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[i]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function fc(e) {
  return Yo(e, "spacing", 8, "spacing");
}
function Ho(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const o = Math.abs(t), r = e(o);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function oh(e, t) {
  return (o) => e.reduce((r, a) => (r[a] = Ho(t, o), r), {});
}
function rh(e, t, o, r) {
  if (t.indexOf(o) === -1)
    return null;
  const a = th(o), s = oh(a, r), i = e[o];
  return Qt(e, i, s);
}
function pc(e, t) {
  const o = fc(e.theme);
  return Object.keys(e).map((r) => rh(e, t, r, o)).reduce(Eo, {});
}
function Ke(e) {
  return pc(e, Ur);
}
Ke.propTypes = process.env.NODE_ENV !== "production" ? Ur.reduce((e, t) => (e[t] = un, e), {}) : {};
Ke.filterProps = Ur;
function Ge(e) {
  return pc(e, Yr);
}
Ge.propTypes = process.env.NODE_ENV !== "production" ? Yr.reduce((e, t) => (e[t] = un, e), {}) : {};
Ge.filterProps = Yr;
process.env.NODE_ENV !== "production" && nh.reduce((e, t) => (e[t] = un, e), {});
function sh(e = 8) {
  if (e.mui)
    return e;
  const t = fc({
    spacing: e
  }), o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return o.mui = !0, o;
}
function Hr(...e) {
  const t = e.reduce((r, a) => (a.filterProps.forEach((s) => {
    r[s] = a;
  }), r), {}), o = (r) => Object.keys(r).reduce((a, s) => t[s] ? Eo(a, t[s](r)) : a, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, a) => Object.assign(r, a.propTypes), {}) : {}, o.filterProps = e.reduce((r, a) => r.concat(a.filterProps), []), o;
}
function Mt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function jt(e, t) {
  return Je({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ah = jt("border", Mt), ih = jt("borderTop", Mt), lh = jt("borderRight", Mt), ch = jt("borderBottom", Mt), uh = jt("borderLeft", Mt), dh = jt("borderColor"), fh = jt("borderTopColor"), ph = jt("borderRightColor"), hh = jt("borderBottomColor"), mh = jt("borderLeftColor"), gh = jt("outline", Mt), bh = jt("outlineColor"), qr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Yo(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: Ho(t, r)
    });
    return Qt(e, e.borderRadius, o);
  }
  return null;
};
qr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: un
} : {};
qr.filterProps = ["borderRadius"];
Hr(ah, ih, lh, ch, uh, dh, fh, ph, hh, mh, qr, gh, bh);
const Kr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Yo(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: Ho(t, r)
    });
    return Qt(e, e.gap, o);
  }
  return null;
};
Kr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: un
} : {};
Kr.filterProps = ["gap"];
const Gr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Yo(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: Ho(t, r)
    });
    return Qt(e, e.columnGap, o);
  }
  return null;
};
Gr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: un
} : {};
Gr.filterProps = ["columnGap"];
const Xr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Yo(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: Ho(t, r)
    });
    return Qt(e, e.rowGap, o);
  }
  return null;
};
Xr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: un
} : {};
Xr.filterProps = ["rowGap"];
const yh = Je({
  prop: "gridColumn"
}), vh = Je({
  prop: "gridRow"
}), xh = Je({
  prop: "gridAutoFlow"
}), Ch = Je({
  prop: "gridAutoColumns"
}), wh = Je({
  prop: "gridAutoRows"
}), Th = Je({
  prop: "gridTemplateColumns"
}), Eh = Je({
  prop: "gridTemplateRows"
}), Sh = Je({
  prop: "gridTemplateAreas"
}), Ph = Je({
  prop: "gridArea"
});
Hr(Kr, Gr, Xr, yh, vh, xh, Ch, wh, Th, Eh, Sh, Ph);
function Un(e, t) {
  return t === "grey" ? t : e;
}
const Oh = Je({
  prop: "color",
  themeKey: "palette",
  transform: Un
}), Rh = Je({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Un
}), Dh = Je({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Un
});
Hr(Oh, Rh, Dh);
function Ct(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Mh = Je({
  prop: "width",
  transform: Ct
}), ua = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var r, a;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[o]) || ca[o];
      return s ? ((a = e.theme) == null || (a = a.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: Ct(o)
      };
    };
    return Qt(e, e.maxWidth, t);
  }
  return null;
};
ua.filterProps = ["maxWidth"];
const $h = Je({
  prop: "minWidth",
  transform: Ct
}), kh = Je({
  prop: "height",
  transform: Ct
}), Ih = Je({
  prop: "maxHeight",
  transform: Ct
}), Nh = Je({
  prop: "minHeight",
  transform: Ct
});
Je({
  prop: "size",
  cssProperty: "width",
  transform: Ct
});
Je({
  prop: "size",
  cssProperty: "height",
  transform: Ct
});
const _h = Je({
  prop: "boxSizing"
});
Hr(Mh, ua, $h, kh, Ih, Nh, _h);
const jh = {
  // borders
  border: {
    themeKey: "borders",
    transform: Mt
  },
  borderTop: {
    themeKey: "borders",
    transform: Mt
  },
  borderRight: {
    themeKey: "borders",
    transform: Mt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Mt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Mt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Mt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: qr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Un
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Un
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Un
  },
  // spacing
  p: {
    style: Ge
  },
  pt: {
    style: Ge
  },
  pr: {
    style: Ge
  },
  pb: {
    style: Ge
  },
  pl: {
    style: Ge
  },
  px: {
    style: Ge
  },
  py: {
    style: Ge
  },
  padding: {
    style: Ge
  },
  paddingTop: {
    style: Ge
  },
  paddingRight: {
    style: Ge
  },
  paddingBottom: {
    style: Ge
  },
  paddingLeft: {
    style: Ge
  },
  paddingX: {
    style: Ge
  },
  paddingY: {
    style: Ge
  },
  paddingInline: {
    style: Ge
  },
  paddingInlineStart: {
    style: Ge
  },
  paddingInlineEnd: {
    style: Ge
  },
  paddingBlock: {
    style: Ge
  },
  paddingBlockStart: {
    style: Ge
  },
  paddingBlockEnd: {
    style: Ge
  },
  m: {
    style: Ke
  },
  mt: {
    style: Ke
  },
  mr: {
    style: Ke
  },
  mb: {
    style: Ke
  },
  ml: {
    style: Ke
  },
  mx: {
    style: Ke
  },
  my: {
    style: Ke
  },
  margin: {
    style: Ke
  },
  marginTop: {
    style: Ke
  },
  marginRight: {
    style: Ke
  },
  marginBottom: {
    style: Ke
  },
  marginLeft: {
    style: Ke
  },
  marginX: {
    style: Ke
  },
  marginY: {
    style: Ke
  },
  marginInline: {
    style: Ke
  },
  marginInlineStart: {
    style: Ke
  },
  marginInlineEnd: {
    style: Ke
  },
  marginBlock: {
    style: Ke
  },
  marginBlockStart: {
    style: Ke
  },
  marginBlockEnd: {
    style: Ke
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Kr
  },
  rowGap: {
    style: Xr
  },
  columnGap: {
    style: Gr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ct
  },
  maxWidth: {
    style: ua
  },
  minWidth: {
    transform: Ct
  },
  height: {
    transform: Ct
  },
  maxHeight: {
    transform: Ct
  },
  minHeight: {
    transform: Ct
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, qo = jh;
function Ah(...e) {
  const t = e.reduce((r, a) => r.concat(Object.keys(a)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function Fh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hc() {
  function e(o, r, a, s) {
    const i = {
      [o]: r,
      theme: a
    }, l = s[o];
    if (!l)
      return {
        [o]: r
      };
    const {
      cssProperty: c = o,
      themeKey: u,
      transform: d,
      style: p
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const h = zr(a, u) || {};
    return p ? p(i) : Qt(i, r, (y) => {
      let f = Tr(h, d, y);
      return y === f && typeof y == "string" && (f = Tr(h, d, `${o}${y === "default" ? "" : ie(y)}`, y)), c === !1 ? f : {
        [c]: f
      };
    });
  }
  function t(o) {
    var r;
    const {
      sx: a,
      theme: s = {}
    } = o || {};
    if (!a)
      return null;
    const i = (r = s.unstable_sxConfig) != null ? r : qo;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Xp(s.breakpoints), p = Object.keys(d);
      let h = d;
      return Object.keys(u).forEach((m) => {
        const y = Fh(u[m], s);
        if (y != null)
          if (typeof y == "object")
            if (i[m])
              h = Eo(h, e(m, y, s, i));
            else {
              const f = Qt({
                theme: s
              }, y, (C) => ({
                [m]: C
              }));
              Ah(f, y) ? h[m] = t({
                sx: y,
                theme: s
              }) : h = Eo(h, f);
            }
          else
            h = Eo(h, e(m, y, s, i));
      }), Qp(p, h);
    }
    return Array.isArray(a) ? a.map(l) : l(a);
  }
  return t;
}
const mc = hc();
mc.filterProps = ["sx"];
const da = mc;
function gc(e, t) {
  const o = this;
  return o.vars && typeof o.getColorSchemeSelector == "function" ? {
    [o.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : o.palette.mode === e ? t : {};
}
const Vh = ["breakpoints", "palette", "spacing", "shape"];
function fa(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: a,
    shape: s = {}
  } = e, i = ae(e, Vh), l = dc(o), c = sh(a);
  let u = wt({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: g({
      mode: "light"
    }, r),
    spacing: c,
    shape: g({}, Kp, s)
  }, i);
  return u.applyStyles = gc, u = t.reduce((d, p) => wt(d, p), u), u.unstable_sxConfig = g({}, qo, i == null ? void 0 : i.unstable_sxConfig), u.unstable_sx = function(p) {
    return da({
      sx: p,
      theme: this
    });
  }, u;
}
const Lh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fa,
  private_createBreakpoints: dc,
  unstable_applyStyles: gc
}, Symbol.toStringTag, { value: "Module" })), Bh = /* @__PURE__ */ en(Lh), Wh = ["sx"], zh = (e) => {
  var t, o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, a = (t = e == null || (o = e.theme) == null ? void 0 : o.unstable_sxConfig) != null ? t : qo;
  return Object.keys(e).forEach((s) => {
    a[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function bc(e) {
  const {
    sx: t
  } = e, o = ae(e, Wh), {
    systemProps: r,
    otherProps: a
  } = zh(o);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...i) => {
    const l = t(...i);
    return sn(l) ? g({}, r, l) : r;
  } : s = g({}, r, t), g({}, a, {
    sx: s
  });
}
const Uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: da,
  extendSxProp: bc,
  unstable_createStyleFunctionSx: hc,
  unstable_defaultSxConfig: qo
}, Symbol.toStringTag, { value: "Module" })), Yh = /* @__PURE__ */ en(Uh);
var so = ln;
Object.defineProperty(zo, "__esModule", {
  value: !0
});
var Hh = zo.default = am;
zo.shouldForwardProp = mr;
zo.systemDefaultTheme = void 0;
var Rt = so(ap()), qs = so(ip()), $i = tm(uc), qh = Wp, Kh = so(zp), Gh = so(Up), Xh = so(Bh), Qh = so(Yh);
const Zh = ["ownerState"], Jh = ["variants"], em = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function yc(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (yc = function(r) {
    return r ? o : t;
  })(e);
}
function tm(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var o = yc(t);
  if (o && o.has(e))
    return o.get(e);
  var r = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, s) : null;
      i && (i.get || i.set) ? Object.defineProperty(r, s, i) : r[s] = e[s];
    }
  return r.default = e, o && o.set(e, r), r;
}
function nm(e) {
  return Object.keys(e).length === 0;
}
function om(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function mr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const rm = zo.systemDefaultTheme = (0, Xh.default)(), ki = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function or({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return nm(t) ? e : t[o] || t;
}
function sm(e) {
  return e ? (t, o) => o[e] : null;
}
function gr(e, t) {
  let {
    ownerState: o
  } = t, r = (0, qs.default)(t, Zh);
  const a = typeof e == "function" ? e((0, Rt.default)({
    ownerState: o
  }, r)) : e;
  if (Array.isArray(a))
    return a.flatMap((s) => gr(s, (0, Rt.default)({
      ownerState: o
    }, r)));
  if (a && typeof a == "object" && Array.isArray(a.variants)) {
    const {
      variants: s = []
    } = a;
    let l = (0, qs.default)(a, Jh);
    return s.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props((0, Rt.default)({
        ownerState: o
      }, r, o)) : Object.keys(c.props).forEach((d) => {
        (o == null ? void 0 : o[d]) !== c.props[d] && r[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style((0, Rt.default)({
        ownerState: o
      }, r, o)) : c.style));
    }), l;
  }
  return a;
}
function am(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = rm,
    rootShouldForwardProp: r = mr,
    slotShouldForwardProp: a = mr
  } = e, s = (i) => (0, Qh.default)((0, Rt.default)({}, i, {
    theme: or((0, Rt.default)({}, i, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (i, l = {}) => {
    (0, $i.internal_processStyles)(i, (v) => v.filter((D) => !(D != null && D.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = sm(ki(u))
    } = l, m = (0, qs.default)(l, em), y = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), f = p || !1;
    let C;
    process.env.NODE_ENV !== "production" && c && (C = `${c}-${ki(u || "Root")}`);
    let w = mr;
    u === "Root" || u === "root" ? w = r : u ? w = a : om(i) && (w = void 0);
    const T = (0, $i.default)(i, (0, Rt.default)({
      shouldForwardProp: w,
      label: C
    }, m)), x = (v) => typeof v == "function" && v.__emotion_real !== v || (0, qh.isPlainObject)(v) ? (D) => gr(v, (0, Rt.default)({}, D, {
      theme: or({
        theme: D.theme,
        defaultTheme: o,
        themeId: t
      })
    })) : v, E = (v, ...D) => {
      let O = x(v);
      const F = D ? D.map(x) : [];
      c && h && F.push((N) => {
        const L = or((0, Rt.default)({}, N, {
          defaultTheme: o,
          themeId: t
        }));
        if (!L.components || !L.components[c] || !L.components[c].styleOverrides)
          return null;
        const A = L.components[c].styleOverrides, R = {};
        return Object.entries(A).forEach(([P, M]) => {
          R[P] = gr(M, (0, Rt.default)({}, N, {
            theme: L
          }));
        }), h(N, R);
      }), c && !y && F.push((N) => {
        var L;
        const A = or((0, Rt.default)({}, N, {
          defaultTheme: o,
          themeId: t
        })), R = A == null || (L = A.components) == null || (L = L[c]) == null ? void 0 : L.variants;
        return gr({
          variants: R
        }, (0, Rt.default)({}, N, {
          theme: A
        }));
      }), f || F.push(s);
      const _ = F.length - D.length;
      if (Array.isArray(v) && _ > 0) {
        const N = new Array(_).fill("");
        O = [...v, ...N], O.raw = [...v.raw, ...N];
      }
      const V = T(O, ...F);
      if (process.env.NODE_ENV !== "production") {
        let N;
        c && (N = `${c}${(0, Kh.default)(u || "")}`), N === void 0 && (N = `Styled(${(0, Gh.default)(i)})`), V.displayName = N;
      }
      return i.muiName && (V.muiName = i.muiName), V;
    };
    return T.withConfig && (E.withConfig = T.withConfig), E;
  };
}
function im(e, t) {
  return g({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var et = {};
const lm = /* @__PURE__ */ en(Ef), cm = /* @__PURE__ */ en(Zf);
var vc = ln;
Object.defineProperty(et, "__esModule", {
  value: !0
});
var Xe = et.alpha = Tc;
et.blend = Cm;
et.colorChannel = void 0;
var um = et.darken = ha;
et.decomposeColor = kt;
et.emphasize = Ec;
var Ii = et.getContrastRatio = gm;
et.getLuminance = Er;
et.hexToRgb = xc;
et.hslToRgb = wc;
var dm = et.lighten = ma;
et.private_safeAlpha = bm;
et.private_safeColorChannel = void 0;
et.private_safeDarken = ym;
et.private_safeEmphasize = xm;
et.private_safeLighten = vm;
et.recomposeColor = ao;
et.rgbToHex = mm;
var Ni = vc(lm), fm = vc(cm);
function pa(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), (0, fm.default)(e, t, o);
}
function xc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, a) => a < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function pm(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function kt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return kt(xc(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Ni.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), a;
  if (o === "color") {
    if (r = r.split(" "), a = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Ni.default)(10, a));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: o,
    values: r,
    colorSpace: a
  };
}
const Cc = (e) => {
  const t = kt(e);
  return t.values.slice(0, 3).map((o, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${o}%` : o).join(" ");
};
et.colorChannel = Cc;
const hm = (e, t) => {
  try {
    return Cc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
et.private_safeColorChannel = hm;
function ao(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((a, s) => s < 3 ? parseInt(a, 10) : a) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function mm(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = kt(e);
  return `#${t.map((o, r) => pm(r === 3 ? Math.round(255 * o) : o)).join("")}`;
}
function wc(e) {
  e = kt(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, a = t[2] / 100, s = r * Math.min(a, 1 - a), i = (u, d = (u + o / 30) % 12) => a - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), ao({
    type: l,
    values: c
  });
}
function Er(e) {
  e = kt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? kt(wc(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function gm(e, t) {
  const o = Er(e), r = Er(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function Tc(e, t) {
  return e = kt(e), t = pa(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ao(e);
}
function bm(e, t, o) {
  try {
    return Tc(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function ha(e, t) {
  if (e = kt(e), t = pa(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return ao(e);
}
function ym(e, t, o) {
  try {
    return ha(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function ma(e, t) {
  if (e = kt(e), t = pa(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return ao(e);
}
function vm(e, t, o) {
  try {
    return ma(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Ec(e, t = 0.15) {
  return Er(e) > 0.5 ? ha(e, t) : ma(e, t);
}
function xm(e, t, o) {
  try {
    return Ec(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Cm(e, t, o, r = 1) {
  const a = (c, u) => Math.round((c ** (1 / r) * (1 - o) + u ** (1 / r) * o) ** r), s = kt(e), i = kt(t), l = [a(s.values[0], i.values[0]), a(s.values[1], i.values[1]), a(s.values[2], i.values[2])];
  return ao({
    type: "rgb",
    values: l
  });
}
const wm = {
  black: "#000",
  white: "#fff"
}, jo = wm, Tm = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Em = Tm, Sm = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, $n = Sm, Pm = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, kn = Pm, Om = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, mo = Om, Rm = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, In = Rm, Dm = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Nn = Dm, Mm = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, _n = Mm, $m = ["mode", "contrastThreshold", "tonalOffset"], _i = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: jo.white,
    default: jo.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ds = {
  text: {
    primary: jo.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: jo.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function ji(e, t, o, r) {
  const a = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = dm(e.main, a) : t === "dark" && (e.dark = um(e.main, s)));
}
function km(e = "light") {
  return e === "dark" ? {
    main: In[200],
    light: In[50],
    dark: In[400]
  } : {
    main: In[700],
    light: In[400],
    dark: In[800]
  };
}
function Im(e = "light") {
  return e === "dark" ? {
    main: $n[200],
    light: $n[50],
    dark: $n[400]
  } : {
    main: $n[500],
    light: $n[300],
    dark: $n[700]
  };
}
function Nm(e = "light") {
  return e === "dark" ? {
    main: kn[500],
    light: kn[300],
    dark: kn[700]
  } : {
    main: kn[700],
    light: kn[400],
    dark: kn[800]
  };
}
function _m(e = "light") {
  return e === "dark" ? {
    main: Nn[400],
    light: Nn[300],
    dark: Nn[700]
  } : {
    main: Nn[700],
    light: Nn[500],
    dark: Nn[900]
  };
}
function jm(e = "light") {
  return e === "dark" ? {
    main: _n[400],
    light: _n[300],
    dark: _n[700]
  } : {
    main: _n[800],
    light: _n[500],
    dark: _n[900]
  };
}
function Am(e = "light") {
  return e === "dark" ? {
    main: mo[400],
    light: mo[300],
    dark: mo[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: mo[500],
    dark: mo[900]
  };
}
function Fm(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2
  } = e, a = ae(e, $m), s = e.primary || km(t), i = e.secondary || Im(t), l = e.error || Nm(t), c = e.info || _m(t), u = e.success || jm(t), d = e.warning || Am(t);
  function p(f) {
    const C = Ii(f, Ds.text.primary) >= o ? Ds.text.primary : _i.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = Ii(f, C);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${C} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const h = ({
    color: f,
    name: C,
    mainShade: w = 500,
    lightShade: T = 300,
    darkShade: x = 700
  }) => {
    if (f = g({}, f), !f.main && f[w] && (f.main = f[w]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : Gt(11, C ? ` (${C})` : "", w));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Gt(12, C ? ` (${C})` : "", JSON.stringify(f.main)));
    return ji(f, "light", T, r), ji(f, "dark", x, r), f.contrastText || (f.contrastText = p(f.main)), f;
  }, m = {
    dark: Ds,
    light: _i
  };
  return process.env.NODE_ENV !== "production" && (m[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), wt(g({
    // A collection of common colors.
    common: g({}, jo),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Em,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, m[t]), a);
}
const Vm = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Lm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ai = {
  textTransform: "uppercase"
}, Fi = '"Roboto", "Helvetica", "Arial", sans-serif';
function Bm(e, t) {
  const o = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Fi,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p
  } = o, h = ae(o, Vm);
  process.env.NODE_ENV !== "production" && (typeof a != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = a / 14, y = p || ((w) => `${w / u * m}rem`), f = (w, T, x, E, v) => g({
    fontFamily: r,
    fontWeight: w,
    fontSize: y(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: x
  }, r === Fi ? {
    letterSpacing: `${Lm(E / T)}em`
  } : {}, v, d), C = {
    h1: f(s, 96, 1.167, -1.5),
    h2: f(s, 60, 1.2, -0.5),
    h3: f(i, 48, 1.167, 0),
    h4: f(i, 34, 1.235, 0.25),
    h5: f(i, 24, 1.334, 0),
    h6: f(l, 20, 1.6, 0.15),
    subtitle1: f(i, 16, 1.75, 0.15),
    subtitle2: f(l, 14, 1.57, 0.1),
    body1: f(i, 16, 1.5, 0.15),
    body2: f(i, 14, 1.43, 0.15),
    button: f(l, 14, 1.75, 0.4, Ai),
    caption: f(i, 12, 1.66, 0.4),
    overline: f(i, 12, 2.66, 1, Ai),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return wt(g({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: r,
    fontSize: a,
    fontWeightLight: s,
    fontWeightRegular: i,
    fontWeightMedium: l,
    fontWeightBold: c
  }, C), h, {
    clone: !1
    // No need to clone deep
  });
}
const Wm = 0.2, zm = 0.14, Um = 0.12;
function He(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Wm})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${zm})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Um})`].join(",");
}
const Ym = ["none", He(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), He(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), He(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), He(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), He(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), He(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), He(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), He(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), He(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), He(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), He(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), He(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), He(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), He(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), He(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), He(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), He(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), He(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), He(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), He(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), He(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), He(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), He(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), He(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Hm = Ym, qm = ["duration", "easing", "delay"], Km = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Gm = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Vi(e) {
  return `${Math.round(e)}ms`;
}
function Xm(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Qm(e) {
  const t = g({}, Km, e.easing), o = g({}, Gm, e.duration);
  return g({
    getAutoHeightDuration: Xm,
    create: (a = ["all"], s = {}) => {
      const {
        duration: i = o.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = s, u = ae(s, qm);
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", p = (h) => !isNaN(parseFloat(h));
        !d(a) && !Array.isArray(a) && console.error('MUI: Argument "props" must be a string or Array.'), !p(i) && !d(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(a) ? a : [a]).map((d) => `${d} ${typeof i == "string" ? i : Vi(i)} ${l} ${typeof c == "string" ? c : Vi(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: o
  });
}
const Zm = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Jm = Zm, eg = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Sc(e = {}, ...t) {
  const {
    mixins: o = {},
    palette: r = {},
    transitions: a = {},
    typography: s = {}
  } = e, i = ae(e, eg);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Gt(18));
  const l = Fm(r), c = fa(e);
  let u = wt(c, {
    mixins: im(c.breakpoints, o),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Hm.slice(),
    typography: Bm(l, s),
    transitions: Qm(a),
    zIndex: g({}, Jm)
  });
  if (u = wt(u, i), u = t.reduce((d, p) => wt(d, p), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (h, m) => {
      let y;
      for (y in h) {
        const f = h[y];
        if (d.indexOf(y) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = xe("", y);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: f
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[y] = {};
        }
      }
    };
    Object.keys(u.components).forEach((h) => {
      const m = u.components[h].styleOverrides;
      m && h.indexOf("Mui") === 0 && p(m, h);
    });
  }
  return u.unstable_sxConfig = g({}, qo, i == null ? void 0 : i.unstable_sxConfig), u.unstable_sx = function(p) {
    return da({
      sx: p,
      theme: this
    });
  }, u;
}
const tg = Sc(), Qr = tg, Zr = "$$material";
function Pc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ng = (e) => Pc(e) && e !== "classes", Vt = ng, og = Hh({
  themeId: Zr,
  defaultTheme: Qr,
  rootShouldForwardProp: Vt
}), ne = og;
function rg(e) {
  return xe("MuiSvgIcon", e);
}
ye("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const sg = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], ag = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, a = {
    root: ["root", t !== "inherit" && `color${ie(t)}`, `fontSize${ie(o)}`]
  };
  return we(a, rg, r);
}, ig = ne("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${ie(o.color)}`], t[`fontSize${ie(o.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, a, s, i, l, c, u, d, p, h, m, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (o = e.transitions) == null || (r = o.create) == null ? void 0 : r.call(o, "fill", {
      duration: (a = e.transitions) == null || (a = a.duration) == null ? void 0 : a.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (i = s.pxToRem) == null ? void 0 : i.call(s, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (h = (e.vars || e).palette) == null || (h = h[t.color]) == null ? void 0 : h.main) != null ? p : {
      action: (m = (e.vars || e).palette) == null || (m = m.action) == null ? void 0 : m.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), ga = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: a,
    className: s,
    color: i = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: h = "0 0 24 24"
  } = r, m = ae(r, sg), y = /* @__PURE__ */ b.isValidElement(a) && a.type === "svg", f = g({}, r, {
    color: i,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: y
  }), C = {};
  d || (C.viewBox = h);
  const w = ag(f);
  return /* @__PURE__ */ S.jsxs(ig, g({
    as: l,
    className: ce(w.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: o
  }, C, m, y && a.props, {
    ownerState: f,
    children: [y ? a.props.children : a, p ? /* @__PURE__ */ S.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ga.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
ga.muiName = "SvgIcon";
const Li = ga;
function Lt(e, t) {
  function o(r, a) {
    return /* @__PURE__ */ S.jsx(Li, g({
      "data-testid": `${t}Icon`,
      ref: a
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = Li.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(o));
}
const lg = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Zl.configure(e);
  }
}, cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: ie,
  createChainedFunction: Bs,
  createSvgIcon: Lt,
  debounce: ra,
  deprecatedPropType: kf,
  isMuiElement: Wn,
  ownerDocument: st,
  ownerWindow: an,
  requirePropFactory: If,
  setRef: Cr,
  unstable_ClassNameGenerator: lg,
  unstable_useEnhancedEffect: it,
  unstable_useId: En,
  unsupportedProp: Yl,
  useControlled: Ft,
  useEventCallback: pe,
  useForkRef: We,
  useIsFocusVisible: ql
}, Symbol.toStringTag, { value: "Module" })), ug = /* @__PURE__ */ en(cg);
var Bi;
function io() {
  return Bi || (Bi = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = ug;
  }(vs)), vs;
}
var dg = ln;
Object.defineProperty(na, "__esModule", {
  value: !0
});
var Oc = na.default = void 0, fg = dg(io()), pg = S;
Oc = na.default = (0, fg.default)(/* @__PURE__ */ (0, pg.jsx)("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "ErrorOutline");
const wn = ({
  label: e,
  description: t,
  required: o,
  children: r,
  error: a,
  fullWidth: s = !1
}) => {
  const i = no();
  return /* @__PURE__ */ S.jsxs(
    Ue,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        p: 3,
        mb: 2
      },
      children: [
        /* @__PURE__ */ S.jsxs(
          Ue,
          {
            sx: {
              width: "100%",
              mb: t ? 3 : 2
            },
            children: [
              /* @__PURE__ */ S.jsxs(
                ut,
                {
                  variant: "h6",
                  component: "h2",
                  gutterBottom: !1,
                  sx: {
                    fontWeight: 500,
                    color: a ? "error.main" : "text.primary",
                    fontSize: "1.25rem",
                    lineHeight: 1.4,
                    letterSpacing: "-0.01em",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    transition: i.transitions.create("color")
                  },
                  children: [
                    e,
                    o && /* @__PURE__ */ S.jsx(
                      ut,
                      {
                        component: "span",
                        sx: {
                          color: a ? "error.main" : "error.light",
                          ml: 0.5,
                          fontSize: "1.1rem",
                          transition: i.transitions.create("color")
                        },
                        children: "*"
                      }
                    )
                  ]
                }
              ),
              t && /* @__PURE__ */ S.jsx(
                ut,
                {
                  variant: "body1",
                  color: a ? "error.main" : "text.secondary",
                  sx: {
                    mt: 1,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    opacity: 0.9,
                    transition: i.transitions.create(["color", "opacity"])
                  },
                  children: t
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ S.jsxs(
          Ue,
          {
            sx: {
              width: s ? "100%" : { xs: "100%", sm: "85%", md: "75%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            },
            children: [
              r,
              a && /* @__PURE__ */ S.jsxs(
                ut,
                {
                  variant: "body2",
                  color: "error",
                  sx: {
                    mt: 1.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontSize: "0.875rem",
                    fontWeight: 500
                  },
                  children: [
                    /* @__PURE__ */ S.jsx(Oc, { sx: { fontSize: "1.1rem" } }),
                    a
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}, hg = ({
  value: e,
  onChange: t,
  min: o,
  max: r,
  step: a = 1,
  labels: s = {},
  error: i,
  previewMode: l = !1,
  ...c
}) => {
  const u = no(), d = Array.from({ length: (r - o) / a + 1 }, (p, h) => o + h * a);
  return /* @__PURE__ */ S.jsx(wn, { ...c, error: i, fullWidth: !0, children: /* @__PURE__ */ S.jsx(
    Ue,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        mt: 2
      },
      children: /* @__PURE__ */ S.jsx(
        Ue,
        {
          sx: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            mb: 2
          },
          children: d.map((p) => /* @__PURE__ */ S.jsxs(
            Ue,
            {
              onClick: () => !l && t(p),
              sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: l ? "default" : "pointer",
                flex: 1,
                position: "relative",
                "&:hover": l ? {} : {
                  "& .scale-button": {
                    transform: "translateY(-2px)",
                    boxShadow: u.shadows[2]
                  }
                }
              },
              children: [
                /* @__PURE__ */ S.jsx(
                  Ue,
                  {
                    className: "scale-button",
                    sx: {
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: e === p ? "primary.main" : "background.paper",
                      color: e === p ? "primary.contrastText" : "text.primary",
                      border: "1px solid",
                      borderColor: e === p ? "primary.main" : "divider",
                      transition: u.transitions.create(
                        ["background-color", "border-color", "transform", "box-shadow"],
                        { duration: u.transitions.duration.shorter }
                      ),
                      mb: 1,
                      fontWeight: 500
                    },
                    children: p
                  }
                ),
                s[p] && /* @__PURE__ */ S.jsx(
                  ut,
                  {
                    variant: "body2",
                    align: "center",
                    sx: {
                      color: e === p ? "primary.main" : "text.secondary",
                      fontSize: "0.875rem",
                      maxWidth: 80,
                      transition: u.transitions.create("color")
                    },
                    children: s[p]
                  }
                )
              ]
            },
            p
          ))
        }
      )
    }
  ) });
};
var ba = {}, mg = ln;
Object.defineProperty(ba, "__esModule", {
  value: !0
});
var ya = ba.default = void 0, gg = mg(io()), bg = S;
ya = ba.default = (0, gg.default)(/* @__PURE__ */ (0, bg.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
}), "CheckCircle");
var va = {}, yg = ln;
Object.defineProperty(va, "__esModule", {
  value: !0
});
var Rc = va.default = void 0, vg = yg(io()), xg = S;
Rc = va.default = (0, vg.default)(/* @__PURE__ */ (0, xg.jsx)("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "RadioButtonChecked");
const Cg = ({
  label: e,
  selected: t,
  onClick: o,
  type: r,
  index: a
}) => {
  const s = no(), i = r === "radio" ? Rc : ya, l = a + 1, c = l <= 9;
  return ft.useEffect(() => {
    const u = (d) => {
      d.key === l.toString() && o();
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [l, o]), /* @__PURE__ */ S.jsxs(
    Nr,
    {
      onClick: o,
      elevation: 0,
      sx: {
        p: 2.5,
        mb: 1.5,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid",
        borderColor: t ? "primary.main" : s.palette.divider,
        backgroundColor: t ? `${s.palette.primary.main}08` : "background.paper",
        transition: s.transitions.create([
          "border-color",
          "background-color",
          "box-shadow",
          "transform"
        ], {
          duration: s.transitions.duration.shorter
        }),
        "&:hover": {
          borderColor: t ? "primary.main" : s.palette.primary.light,
          backgroundColor: t ? `${s.palette.primary.main}12` : s.palette.action.hover,
          boxShadow: s.shadows[1],
          transform: "translateY(-1px)"
        },
        "&:active": {
          transform: "translateY(0)"
        }
      },
      children: [
        c && /* @__PURE__ */ S.jsx(
          ut,
          {
            variant: "body2",
            sx: {
              color: "text.secondary",
              opacity: 0.5,
              minWidth: "24px",
              mr: 2,
              fontFamily: s.typography.fontFamily
            },
            children: l
          }
        ),
        /* @__PURE__ */ S.jsx(
          ut,
          {
            variant: "body1",
            sx: {
              color: t ? "primary.main" : "text.primary",
              fontWeight: t ? 500 : 400,
              flex: 1,
              transition: s.transitions.create(["color", "font-weight"])
            },
            children: e
          }
        ),
        /* @__PURE__ */ S.jsx(
          Ue,
          {
            sx: {
              opacity: t ? 1 : 0,
              color: "primary.main",
              display: "flex",
              alignItems: "center",
              transition: s.transitions.create("opacity"),
              ml: 2
            },
            children: /* @__PURE__ */ S.jsx(i, {})
          }
        )
      ]
    }
  );
}, wg = ({
  value: e,
  onChange: t,
  options: o = [],
  choices: r = [],
  multiple: a = !1,
  error: s,
  previewMode: i = !1,
  ...l
}) => {
  const c = o.length > 0 ? o : r, u = (d) => {
    if (a) {
      const p = Array.isArray(e) ? e : [], h = p.includes(d) ? p.filter((m) => m !== d) : [...p, d];
      t(h);
    } else
      t(d);
  };
  return /* @__PURE__ */ S.jsx(
    wn,
    {
      ...l,
      error: s,
      fullWidth: !1,
      children: /* @__PURE__ */ S.jsx(
        Ue,
        {
          sx: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1.5
          },
          children: c.map((d, p) => /* @__PURE__ */ S.jsx(
            Cg,
            {
              label: d.label,
              selected: a ? Array.isArray(e) && e.includes(d.value) : e === d.value,
              onClick: () => !i && u(d.value),
              type: a ? "checkbox" : "radio",
              index: p
            },
            d.value
          ))
        }
      )
    }
  );
}, Tg = ({
  value: e = "",
  onChange: t,
  placeholder: o,
  multiline: r = !1,
  rows: a = 3,
  error: s,
  previewMode: i = !1,
  ...l
}) => {
  const c = no();
  return /* @__PURE__ */ S.jsx(wn, { ...l, error: s, children: /* @__PURE__ */ S.jsx(
    Kd,
    {
      fullWidth: !0,
      value: e,
      onChange: (u) => !i && t(u.target.value),
      placeholder: o,
      multiline: r,
      minRows: r ? a : 1,
      disabled: i,
      variant: "outlined",
      inputProps: {
        style: {
          padding: c.spacing(1.75),
          fontSize: "1rem",
          lineHeight: 1.6
        }
      },
      error: !!s,
      sx: {
        "& .MuiOutlinedInput-root": {
          backgroundColor: "background.paper",
          transition: c.transitions.create(
            ["border-color", "box-shadow", "background-color"],
            { duration: c.transitions.duration.shorter }
          ),
          "&:hover": {
            backgroundColor: c.palette.action.hover,
            borderColor: "primary.light"
          },
          "&.Mui-focused": {
            backgroundColor: "background.paper",
            boxShadow: `0 0 0 2px ${c.palette.primary.main}14`
          },
          "&.Mui-error": {
            boxShadow: `0 0 0 2px ${c.palette.error.main}14`
          },
          "&.Mui-disabled": {
            backgroundColor: c.palette.action.disabledBackground,
            borderColor: c.palette.action.disabled
          }
        },
        "& .MuiOutlinedInput-input": {
          "&::placeholder": {
            color: c.palette.text.secondary,
            opacity: 0.7
          }
        }
      }
    }
  ) });
}, Eg = ({
  choices: e,
  value: t,
  onChange: o,
  allowMultiple: r,
  error: a
}) => {
  const s = no(), i = Array.isArray(t) ? t : t ? [t] : [], l = (c) => {
    if (r) {
      const u = i.includes(c) ? i.filter((d) => d !== c) : [...i, c];
      o(u);
    } else
      o(c === t ? null : c);
  };
  return /* @__PURE__ */ S.jsx(
    wn,
    {
      error: a,
      fullWidth: !0,
      children: /* @__PURE__ */ S.jsx(
        Ue,
        {
          sx: {
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)"
            },
            gap: 2,
            width: "100%",
            mt: 2
          },
          children: e.map((c) => {
            const u = i.includes(c.value);
            return /* @__PURE__ */ S.jsxs(
              Ue,
              {
                onClick: () => l(c.value),
                sx: {
                  position: "relative",
                  aspectRatio: "1",
                  cursor: "pointer",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: "2px solid",
                  borderColor: u ? "primary.main" : s.palette.divider,
                  transition: s.transitions.create([
                    "transform",
                    "border-color",
                    "box-shadow"
                  ], {
                    duration: s.transitions.duration.shorter
                  }),
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: u ? "primary.main" : s.palette.primary.light,
                    boxShadow: s.shadows[4]
                  },
                  "&:active": {
                    transform: "translateY(-2px)",
                    boxShadow: s.shadows[2]
                  }
                },
                children: [
                  /* @__PURE__ */ S.jsx(
                    Ue,
                    {
                      sx: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: u ? `${s.palette.primary.main}14` : "transparent",
                        transition: s.transitions.create("background-color"),
                        zIndex: 1
                      }
                    }
                  ),
                  /* @__PURE__ */ S.jsx(
                    Ue,
                    {
                      component: "img",
                      src: c.imageUrl,
                      alt: c.imageAlt || c.label,
                      sx: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }
                    }
                  ),
                  /* @__PURE__ */ S.jsx(
                    Ue,
                    {
                      sx: {
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 1.5,
                        bgcolor: "rgba(0, 0, 0, 0.7)",
                        color: "white",
                        transition: s.transitions.create("background-color"),
                        "&:hover": {
                          bgcolor: "rgba(0, 0, 0, 0.8)"
                        }
                      },
                      children: /* @__PURE__ */ S.jsx(
                        ut,
                        {
                          variant: "body2",
                          sx: {
                            textAlign: "center",
                            fontWeight: u ? 600 : 400
                          },
                          children: c.label
                        }
                      )
                    }
                  ),
                  u && /* @__PURE__ */ S.jsx(
                    Ue,
                    {
                      sx: {
                        position: "absolute",
                        top: 8,
                        right: 8,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        bgcolor: "primary.main",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: s.shadows[2],
                        zIndex: 2
                      },
                      children: /* @__PURE__ */ S.jsx(ya, { sx: { fontSize: 16 } })
                    }
                  )
                ]
              },
              c.value
            );
          })
        }
      )
    }
  );
};
function Sg(e) {
  return Object.keys(e).length === 0;
}
function Dc(e = null) {
  const t = b.useContext(_l);
  return !t || Sg(t) ? e : t;
}
const Pg = fa();
function Ko(e = Pg) {
  return Dc(e);
}
function Mc({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = Ko(o), a = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ S.jsx(la, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (Mc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: n.object,
  /**
   * @ignore
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool]),
  /**
   * @ignore
   */
  themeId: n.string
});
function $c(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : Io(t.components[o].defaultProps, r);
}
function Og({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let a = Ko(o);
  return r && (a = a[r] || a), $c({
    theme: a,
    name: t,
    props: e
  });
}
function Rg(e, t, o, r, a) {
  const [s, i] = b.useState(() => a && o ? o(e).matches : r ? r(e).matches : t);
  return it(() => {
    let l = !0;
    if (!o)
      return;
    const c = o(e), u = () => {
      l && i(c.matches);
    };
    return u(), c.addListener(u), () => {
      l = !1, c.removeListener(u);
    };
  }, [e, o]), s;
}
const kc = b["useSyncExternalStore"];
function Dg(e, t, o, r, a) {
  const s = b.useCallback(() => t, [t]), i = b.useMemo(() => {
    if (a && o)
      return () => o(e).matches;
    if (r !== null) {
      const {
        matches: d
      } = r(e);
      return () => d;
    }
    return s;
  }, [s, e, r, a, o]), [l, c] = b.useMemo(() => {
    if (o === null)
      return [s, () => () => {
      }];
    const d = o(e);
    return [() => d.matches, (p) => (d.addListener(p), () => {
      d.removeListener(p);
    })];
  }, [s, o, e]);
  return kc(c, l, i);
}
function Ic(e, t = {}) {
  const o = Dc(), r = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: a = !1,
    matchMedia: s = r ? window.matchMedia : null,
    ssrMatchMedia: i = null,
    noSsr: l = !1
  } = $c({
    name: "MuiUseMediaQuery",
    props: t,
    theme: o
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && o === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let c = typeof e == "function" ? e(o) : e;
  c = c.replace(/^@media( ?)/m, "");
  const d = (kc !== void 0 ? Dg : Rg)(c, a, s, i, l);
  return process.env.NODE_ENV !== "production" && b.useDebugValue({
    query: c,
    match: d
  }), d;
}
function Mg(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), Jl(e, t, o);
}
function $g(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, a) => a < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Nc(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Nc($g(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Gt(9, e));
  let r = e.substring(t + 1, e.length - 1), a;
  if (o === "color") {
    if (r = r.split(" "), a = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Gt(10, a));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: o,
    values: r,
    colorSpace: a
  };
}
function kg(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((a, s) => s < 3 ? parseInt(a, 10) : a) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Gn(e, t) {
  return e = Nc(e), t = Mg(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, kg(e);
}
const Ig = /* @__PURE__ */ b.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const Ng = () => {
  const e = b.useContext(Ig);
  return e ?? !1;
};
function At() {
  const e = Ko(Qr);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e[Zr] || e;
}
function at({
  props: e,
  name: t
}) {
  return Og({
    props: e,
    name: t,
    defaultTheme: Qr,
    themeId: Zr
  });
}
const _g = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Wi = _g, jg = ["localeText"], Sr = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Sr.displayName = "MuiPickersAdapterContext");
const Jr = function(t) {
  var o;
  const {
    localeText: r
  } = t, a = ae(t, jg), {
    utils: s,
    localeText: i
  } = (o = b.useContext(Sr)) != null ? o : {
    utils: void 0,
    localeText: void 0
  }, l = at({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: a,
    name: "MuiLocalizationProvider"
  }), {
    children: c,
    dateAdapter: u,
    dateFormats: d,
    dateLibInstance: p,
    adapterLocale: h,
    localeText: m
  } = l, y = b.useMemo(() => g({}, m, i, r), [m, i, r]), f = b.useMemo(() => {
    if (!u)
      return s || null;
    const T = new u({
      locale: h,
      formats: d,
      instance: p
    });
    if (!T.isMUIAdapter)
      throw new Error(["MUI: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    return T;
  }, [u, h, d, p, s]), C = b.useMemo(() => f ? {
    minDate: f.date("1900-01-01T00:00:00.000"),
    maxDate: f.date("2099-12-31T00:00:00.000")
  } : null, [f]), w = b.useMemo(() => ({
    utils: f,
    defaultDates: C,
    localeText: y
  }), [C, f, y]);
  return /* @__PURE__ */ S.jsx(Sr.Provider, {
    value: w,
    children: c
  });
};
process.env.NODE_ENV !== "production" && (Jr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: n.any,
  children: n.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/getting-started/#setup-your-date-library-adapter date adapter setup section} for more details.
   */
  dateAdapter: n.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: n.shape({
    dayOfMonth: n.string,
    fullDate: n.string,
    fullDateTime: n.string,
    fullDateTime12h: n.string,
    fullDateTime24h: n.string,
    fullDateWithWeekday: n.string,
    fullTime: n.string,
    fullTime12h: n.string,
    fullTime24h: n.string,
    hours12h: n.string,
    hours24h: n.string,
    keyboardDate: n.string,
    keyboardDateTime: n.string,
    keyboardDateTime12h: n.string,
    keyboardDateTime24h: n.string,
    meridiem: n.string,
    minutes: n.string,
    month: n.string,
    monthAndDate: n.string,
    monthAndYear: n.string,
    monthShort: n.string,
    normalDate: n.string,
    normalDateWithWeekday: n.string,
    seconds: n.string,
    shortDate: n.string,
    weekday: n.string,
    weekdayShort: n.string,
    year: n.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: n.any,
  /**
   * Locale for components texts
   */
  localeText: n.object
});
var _c = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(Bo, function() {
    var o = 1e3, r = 6e4, a = 36e5, s = "millisecond", i = "second", l = "minute", c = "hour", u = "day", d = "week", p = "month", h = "quarter", m = "year", y = "date", f = "Invalid Date", C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, T = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
      var P = ["th", "st", "nd", "rd"], M = R % 100;
      return "[" + R + (P[(M - 20) % 10] || P[M] || P[0]) + "]";
    } }, x = function(R, P, M) {
      var j = String(R);
      return !j || j.length >= P ? R : "" + Array(P + 1 - j.length).join(M) + R;
    }, E = { s: x, z: function(R) {
      var P = -R.utcOffset(), M = Math.abs(P), j = Math.floor(M / 60), $ = M % 60;
      return (P <= 0 ? "+" : "-") + x(j, 2, "0") + ":" + x($, 2, "0");
    }, m: function R(P, M) {
      if (P.date() < M.date())
        return -R(M, P);
      var j = 12 * (M.year() - P.year()) + (M.month() - P.month()), $ = P.clone().add(j, p), B = M - $ < 0, I = P.clone().add(j + (B ? -1 : 1), p);
      return +(-(j + (M - $) / (B ? $ - I : I - $)) || 0);
    }, a: function(R) {
      return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
    }, p: function(R) {
      return { M: p, y: m, w: d, d: u, D: y, h: c, m: l, s: i, ms: s, Q: h }[R] || String(R || "").toLowerCase().replace(/s$/, "");
    }, u: function(R) {
      return R === void 0;
    } }, v = "en", D = {};
    D[v] = T;
    var O = "$isDayjsObject", F = function(R) {
      return R instanceof L || !(!R || !R[O]);
    }, _ = function R(P, M, j) {
      var $;
      if (!P)
        return v;
      if (typeof P == "string") {
        var B = P.toLowerCase();
        D[B] && ($ = B), M && (D[B] = M, $ = B);
        var I = P.split("-");
        if (!$ && I.length > 1)
          return R(I[0]);
      } else {
        var z = P.name;
        D[z] = P, $ = z;
      }
      return !j && $ && (v = $), $ || !j && v;
    }, V = function(R, P) {
      if (F(R))
        return R.clone();
      var M = typeof P == "object" ? P : {};
      return M.date = R, M.args = arguments, new L(M);
    }, N = E;
    N.l = _, N.i = F, N.w = function(R, P) {
      return V(R, { locale: P.$L, utc: P.$u, x: P.$x, $offset: P.$offset });
    };
    var L = function() {
      function R(M) {
        this.$L = _(M.locale, null, !0), this.parse(M), this.$x = this.$x || M.x || {}, this[O] = !0;
      }
      var P = R.prototype;
      return P.parse = function(M) {
        this.$d = function(j) {
          var $ = j.date, B = j.utc;
          if ($ === null)
            return /* @__PURE__ */ new Date(NaN);
          if (N.u($))
            return /* @__PURE__ */ new Date();
          if ($ instanceof Date)
            return new Date($);
          if (typeof $ == "string" && !/Z$/i.test($)) {
            var I = $.match(C);
            if (I) {
              var z = I[2] - 1 || 0, G = (I[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(I[1], z, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, G)) : new Date(I[1], z, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, G);
            }
          }
          return new Date($);
        }(M), this.init();
      }, P.init = function() {
        var M = this.$d;
        this.$y = M.getFullYear(), this.$M = M.getMonth(), this.$D = M.getDate(), this.$W = M.getDay(), this.$H = M.getHours(), this.$m = M.getMinutes(), this.$s = M.getSeconds(), this.$ms = M.getMilliseconds();
      }, P.$utils = function() {
        return N;
      }, P.isValid = function() {
        return this.$d.toString() !== f;
      }, P.isSame = function(M, j) {
        var $ = V(M);
        return this.startOf(j) <= $ && $ <= this.endOf(j);
      }, P.isAfter = function(M, j) {
        return V(M) < this.startOf(j);
      }, P.isBefore = function(M, j) {
        return this.endOf(j) < V(M);
      }, P.$g = function(M, j, $) {
        return N.u(M) ? this[j] : this.set($, M);
      }, P.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, P.valueOf = function() {
        return this.$d.getTime();
      }, P.startOf = function(M, j) {
        var $ = this, B = !!N.u(j) || j, I = N.p(M), z = function(oe, J) {
          var K = N.w($.$u ? Date.UTC($.$y, J, oe) : new Date($.$y, J, oe), $);
          return B ? K : K.endOf(u);
        }, G = function(oe, J) {
          return N.w($.toDate()[oe].apply($.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), $);
        }, X = this.$W, W = this.$M, q = this.$D, Z = "set" + (this.$u ? "UTC" : "");
        switch (I) {
          case m:
            return B ? z(1, 0) : z(31, 11);
          case p:
            return B ? z(1, W) : z(0, W + 1);
          case d:
            var U = this.$locale().weekStart || 0, Q = (X < U ? X + 7 : X) - U;
            return z(B ? q - Q : q + (6 - Q), W);
          case u:
          case y:
            return G(Z + "Hours", 0);
          case c:
            return G(Z + "Minutes", 1);
          case l:
            return G(Z + "Seconds", 2);
          case i:
            return G(Z + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, P.endOf = function(M) {
        return this.startOf(M, !1);
      }, P.$set = function(M, j) {
        var $, B = N.p(M), I = "set" + (this.$u ? "UTC" : ""), z = ($ = {}, $[u] = I + "Date", $[y] = I + "Date", $[p] = I + "Month", $[m] = I + "FullYear", $[c] = I + "Hours", $[l] = I + "Minutes", $[i] = I + "Seconds", $[s] = I + "Milliseconds", $)[B], G = B === u ? this.$D + (j - this.$W) : j;
        if (B === p || B === m) {
          var X = this.clone().set(y, 1);
          X.$d[z](G), X.init(), this.$d = X.set(y, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          z && this.$d[z](G);
        return this.init(), this;
      }, P.set = function(M, j) {
        return this.clone().$set(M, j);
      }, P.get = function(M) {
        return this[N.p(M)]();
      }, P.add = function(M, j) {
        var $, B = this;
        M = Number(M);
        var I = N.p(j), z = function(W) {
          var q = V(B);
          return N.w(q.date(q.date() + Math.round(W * M)), B);
        };
        if (I === p)
          return this.set(p, this.$M + M);
        if (I === m)
          return this.set(m, this.$y + M);
        if (I === u)
          return z(1);
        if (I === d)
          return z(7);
        var G = ($ = {}, $[l] = r, $[c] = a, $[i] = o, $)[I] || 1, X = this.$d.getTime() + M * G;
        return N.w(X, this);
      }, P.subtract = function(M, j) {
        return this.add(-1 * M, j);
      }, P.format = function(M) {
        var j = this, $ = this.$locale();
        if (!this.isValid())
          return $.invalidDate || f;
        var B = M || "YYYY-MM-DDTHH:mm:ssZ", I = N.z(this), z = this.$H, G = this.$m, X = this.$M, W = $.weekdays, q = $.months, Z = $.meridiem, U = function(J, K, Y, H) {
          return J && (J[K] || J(j, B)) || Y[K].slice(0, H);
        }, Q = function(J) {
          return N.s(z % 12 || 12, J, "0");
        }, oe = Z || function(J, K, Y) {
          var H = J < 12 ? "AM" : "PM";
          return Y ? H.toLowerCase() : H;
        };
        return B.replace(w, function(J, K) {
          return K || function(Y) {
            switch (Y) {
              case "YY":
                return String(j.$y).slice(-2);
              case "YYYY":
                return N.s(j.$y, 4, "0");
              case "M":
                return X + 1;
              case "MM":
                return N.s(X + 1, 2, "0");
              case "MMM":
                return U($.monthsShort, X, q, 3);
              case "MMMM":
                return U(q, X);
              case "D":
                return j.$D;
              case "DD":
                return N.s(j.$D, 2, "0");
              case "d":
                return String(j.$W);
              case "dd":
                return U($.weekdaysMin, j.$W, W, 2);
              case "ddd":
                return U($.weekdaysShort, j.$W, W, 3);
              case "dddd":
                return W[j.$W];
              case "H":
                return String(z);
              case "HH":
                return N.s(z, 2, "0");
              case "h":
                return Q(1);
              case "hh":
                return Q(2);
              case "a":
                return oe(z, G, !0);
              case "A":
                return oe(z, G, !1);
              case "m":
                return String(G);
              case "mm":
                return N.s(G, 2, "0");
              case "s":
                return String(j.$s);
              case "ss":
                return N.s(j.$s, 2, "0");
              case "SSS":
                return N.s(j.$ms, 3, "0");
              case "Z":
                return I;
            }
            return null;
          }(J) || I.replace(":", "");
        });
      }, P.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, P.diff = function(M, j, $) {
        var B, I = this, z = N.p(j), G = V(M), X = (G.utcOffset() - this.utcOffset()) * r, W = this - G, q = function() {
          return N.m(I, G);
        };
        switch (z) {
          case m:
            B = q() / 12;
            break;
          case p:
            B = q();
            break;
          case h:
            B = q() / 3;
            break;
          case d:
            B = (W - X) / 6048e5;
            break;
          case u:
            B = (W - X) / 864e5;
            break;
          case c:
            B = W / a;
            break;
          case l:
            B = W / r;
            break;
          case i:
            B = W / o;
            break;
          default:
            B = W;
        }
        return $ ? B : N.a(B);
      }, P.daysInMonth = function() {
        return this.endOf(p).$D;
      }, P.$locale = function() {
        return D[this.$L];
      }, P.locale = function(M, j) {
        if (!M)
          return this.$L;
        var $ = this.clone(), B = _(M, j, !0);
        return B && ($.$L = B), $;
      }, P.clone = function() {
        return N.w(this.$d, this);
      }, P.toDate = function() {
        return new Date(this.valueOf());
      }, P.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, P.toISOString = function() {
        return this.$d.toISOString();
      }, P.toString = function() {
        return this.$d.toUTCString();
      }, R;
    }(), A = L.prototype;
    return V.prototype = A, [["$ms", s], ["$s", i], ["$m", l], ["$H", c], ["$W", u], ["$M", p], ["$y", m], ["$D", y]].forEach(function(R) {
      A[R[1]] = function(P) {
        return this.$g(P, R[0], R[1]);
      };
    }), V.extend = function(R, P) {
      return R.$i || (R(P, L, V), R.$i = !0), V;
    }, V.locale = _, V.isDayjs = F, V.unix = function(R) {
      return V(1e3 * R);
    }, V.en = D[v], V.Ls = D, V.p = {}, V;
  });
})(_c);
var Ag = _c.exports;
const rt = /* @__PURE__ */ oo(Ag);
var jc = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(Bo, function() {
    var o = "week", r = "year";
    return function(a, s, i) {
      var l = s.prototype;
      l.week = function(c) {
        if (c === void 0 && (c = null), c !== null)
          return this.add(7 * (c - this.week()), "day");
        var u = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(r).add(1, r).date(u), p = i(this).endOf(o);
          if (d.isBefore(p))
            return 1;
        }
        var h = i(this).startOf(r).date(u).startOf(o).subtract(1, "millisecond"), m = this.diff(h, o, !0);
        return m < 0 ? i(this).startOf("week").week() : Math.ceil(m);
      }, l.weeks = function(c) {
        return c === void 0 && (c = null), this.week(c);
      };
    };
  });
})(jc);
var Fg = jc.exports;
const Vg = /* @__PURE__ */ oo(Fg);
var Ac = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(Bo, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, s = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, c = {}, u = function(C) {
      return (C = +C) + (C > 68 ? 1900 : 2e3);
    }, d = function(C) {
      return function(w) {
        this[C] = +w;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(C) {
      (this.zone || (this.zone = {})).offset = function(w) {
        if (!w || w === "Z")
          return 0;
        var T = w.match(/([+-]|\d\d)/g), x = 60 * T[1] + (+T[2] || 0);
        return x === 0 ? 0 : T[0] === "+" ? -x : x;
      }(C);
    }], h = function(C) {
      var w = c[C];
      return w && (w.indexOf ? w : w.s.concat(w.f));
    }, m = function(C, w) {
      var T, x = c.meridiem;
      if (x) {
        for (var E = 1; E <= 24; E += 1)
          if (C.indexOf(x(E, 0, w)) > -1) {
            T = E > 12;
            break;
          }
      } else
        T = C === (w ? "pm" : "PM");
      return T;
    }, y = { A: [l, function(C) {
      this.afternoon = m(C, !1);
    }], a: [l, function(C) {
      this.afternoon = m(C, !0);
    }], Q: [a, function(C) {
      this.month = 3 * (C - 1) + 1;
    }], S: [a, function(C) {
      this.milliseconds = 100 * +C;
    }], SS: [s, function(C) {
      this.milliseconds = 10 * +C;
    }], SSS: [/\d{3}/, function(C) {
      this.milliseconds = +C;
    }], s: [i, d("seconds")], ss: [i, d("seconds")], m: [i, d("minutes")], mm: [i, d("minutes")], H: [i, d("hours")], h: [i, d("hours")], HH: [i, d("hours")], hh: [i, d("hours")], D: [i, d("day")], DD: [s, d("day")], Do: [l, function(C) {
      var w = c.ordinal, T = C.match(/\d+/);
      if (this.day = T[0], w)
        for (var x = 1; x <= 31; x += 1)
          w(x).replace(/\[|\]/g, "") === C && (this.day = x);
    }], w: [i, d("week")], ww: [s, d("week")], M: [i, d("month")], MM: [s, d("month")], MMM: [l, function(C) {
      var w = h("months"), T = (h("monthsShort") || w.map(function(x) {
        return x.slice(0, 3);
      })).indexOf(C) + 1;
      if (T < 1)
        throw new Error();
      this.month = T % 12 || T;
    }], MMMM: [l, function(C) {
      var w = h("months").indexOf(C) + 1;
      if (w < 1)
        throw new Error();
      this.month = w % 12 || w;
    }], Y: [/[+-]?\d+/, d("year")], YY: [s, function(C) {
      this.year = u(C);
    }], YYYY: [/\d{4}/, d("year")], Z: p, ZZ: p };
    function f(C) {
      var w, T;
      w = C, T = c && c.formats;
      for (var x = (C = w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(V, N, L) {
        var A = L && L.toUpperCase();
        return N || T[L] || o[L] || T[A].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(R, P, M) {
          return P || M.slice(1);
        });
      })).match(r), E = x.length, v = 0; v < E; v += 1) {
        var D = x[v], O = y[D], F = O && O[0], _ = O && O[1];
        x[v] = _ ? { regex: F, parser: _ } : D.replace(/^\[|\]$/g, "");
      }
      return function(V) {
        for (var N = {}, L = 0, A = 0; L < E; L += 1) {
          var R = x[L];
          if (typeof R == "string")
            A += R.length;
          else {
            var P = R.regex, M = R.parser, j = V.slice(A), $ = P.exec(j)[0];
            M.call(N, $), V = V.replace($, "");
          }
        }
        return function(B) {
          var I = B.afternoon;
          if (I !== void 0) {
            var z = B.hours;
            I ? z < 12 && (B.hours += 12) : z === 12 && (B.hours = 0), delete B.afternoon;
          }
        }(N), N;
      };
    }
    return function(C, w, T) {
      T.p.customParseFormat = !0, C && C.parseTwoDigitYear && (u = C.parseTwoDigitYear);
      var x = w.prototype, E = x.parse;
      x.parse = function(v) {
        var D = v.date, O = v.utc, F = v.args;
        this.$u = O;
        var _ = F[1];
        if (typeof _ == "string") {
          var V = F[2] === !0, N = F[3] === !0, L = V || N, A = F[2];
          N && (A = F[2]), c = this.$locale(), !V && A && (c = T.Ls[A]), this.$d = function(j, $, B, I) {
            try {
              if (["x", "X"].indexOf($) > -1)
                return new Date(($ === "X" ? 1e3 : 1) * j);
              var z = f($)(j), G = z.year, X = z.month, W = z.day, q = z.hours, Z = z.minutes, U = z.seconds, Q = z.milliseconds, oe = z.zone, J = z.week, K = /* @__PURE__ */ new Date(), Y = W || (G || X ? 1 : K.getDate()), H = G || K.getFullYear(), se = 0;
              G && !X || (se = X > 0 ? X - 1 : K.getMonth());
              var fe, be = q || 0, $e = Z || 0, ue = U || 0, de = Q || 0;
              return oe ? new Date(Date.UTC(H, se, Y, be, $e, ue, de + 60 * oe.offset * 1e3)) : B ? new Date(Date.UTC(H, se, Y, be, $e, ue, de)) : (fe = new Date(H, se, Y, be, $e, ue, de), J && (fe = I(fe).week(J).toDate()), fe);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(D, _, O, T), this.init(), A && A !== !0 && (this.$L = this.locale(A).$L), L && D != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
        } else if (_ instanceof Array)
          for (var R = _.length, P = 1; P <= R; P += 1) {
            F[1] = _[P - 1];
            var M = T.apply(this, F);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            P === R && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          E.call(this, v);
      };
    };
  });
})(Ac);
var Lg = Ac.exports;
const Bg = /* @__PURE__ */ oo(Lg);
var Fc = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(Bo, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(r, a, s) {
      var i = a.prototype, l = i.format;
      s.en.formats = o, i.format = function(c) {
        c === void 0 && (c = "YYYY-MM-DDTHH:mm:ssZ");
        var u = this.$locale().formats, d = function(p, h) {
          return p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(m, y, f) {
            var C = f && f.toUpperCase();
            return y || h[f] || o[f] || h[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(w, T, x) {
              return T || x.slice(1);
            });
          });
        }(c, u === void 0 ? {} : u);
        return l.call(this, d);
      };
    };
  });
})(Fc);
var Wg = Fc.exports;
const zg = /* @__PURE__ */ oo(Wg);
var Vc = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(Bo, function() {
    return function(o, r, a) {
      r.prototype.isBetween = function(s, i, l, c) {
        var u = a(s), d = a(i), p = (c = c || "()")[0] === "(", h = c[1] === ")";
        return (p ? this.isAfter(u, l) : !this.isBefore(u, l)) && (h ? this.isBefore(d, l) : !this.isAfter(d, l)) || (p ? this.isBefore(u, l) : !this.isAfter(u, l)) && (h ? this.isAfter(d, l) : !this.isBefore(d, l));
      };
    };
  });
})(Vc);
var Ug = Vc.exports;
const Yg = /* @__PURE__ */ oo(Ug), Lc = (e, t = "warning") => {
  let o = !1;
  const r = Array.isArray(e) ? e.join(`
`) : e;
  return () => {
    o || (o = !0, t === "error" ? console.error(r) : console.warn(r));
  };
};
rt.extend(Bg);
rt.extend(zg);
rt.extend(Yg);
const Hg = Lc(["Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale"]), qg = {
  // Year
  YY: "year",
  YYYY: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  DD: "day",
  Do: {
    sectionType: "day",
    contentType: "digit-with-letter"
  },
  // Day of the week
  d: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 2
  },
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
}, Kg = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  weekday: "dddd",
  weekdayShort: "dd",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "A",
  minutes: "mm",
  seconds: "ss",
  fullDate: "ll",
  fullDateWithWeekday: "dddd, LL",
  keyboardDate: "L",
  shortDate: "MMM D",
  normalDate: "D MMMM",
  normalDateWithWeekday: "ddd, MMM D",
  monthAndYear: "MMMM YYYY",
  monthAndDate: "MMMM D",
  fullTime: "LT",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  fullDateTime: "lll",
  fullDateTime12h: "ll hh:mm A",
  fullDateTime24h: "ll HH:mm",
  keyboardDateTime: "L LT",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
}, Ms = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), zi = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), Gg = (e, t) => t ? (...o) => e(...o).locale(t) : e;
class Xg {
  constructor({
    locale: t,
    formats: o,
    instance: r
  } = {}) {
    var a;
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.rawDayJsInstance = void 0, this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = qg, this.setLocaleToValue = (s) => {
      const i = this.getCurrentLocaleCode();
      return i === s.locale() ? s : s.locale(i);
    }, this.hasUTCPlugin = () => typeof rt.utc < "u", this.hasTimezonePlugin = () => typeof rt.tz < "u", this.isSame = (s, i, l) => {
      const c = this.setTimezone(i, this.getTimezone(s));
      return s.format(l) === c.format(l);
    }, this.cleanTimezone = (s) => {
      switch (s) {
        case "default":
          return;
        case "system":
          return rt.tz.guess();
        default:
          return s;
      }
    }, this.createSystemDate = (s) => {
      if (this.rawDayJsInstance)
        return this.rawDayJsInstance(s);
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const i = rt.tz.guess();
        return i !== "UTC" ? rt.tz(s, i) : rt(s);
      }
      return rt(s);
    }, this.createUTCDate = (s) => {
      if (!this.hasUTCPlugin())
        throw new Error(Ms);
      return rt.utc(s);
    }, this.createTZDate = (s, i) => {
      if (!this.hasUTCPlugin())
        throw new Error(Ms);
      if (!this.hasTimezonePlugin())
        throw new Error(zi);
      const l = s !== void 0 && !s.endsWith("Z");
      return rt(s).tz(this.cleanTimezone(i), l);
    }, this.getLocaleFormats = () => {
      const s = rt.Ls, i = this.locale || "en";
      let l = s[i];
      return l === void 0 && (Hg(), l = s.en), l.formats;
    }, this.adjustOffset = (s) => {
      if (!this.hasTimezonePlugin())
        return s;
      const i = this.getTimezone(s);
      if (i !== "UTC") {
        var l, c;
        const u = s.tz(this.cleanTimezone(i), !0);
        if (((l = u.$offset) != null ? l : 0) === ((c = s.$offset) != null ? c : 0))
          return s;
        s.$offset = u.$offset;
      }
      return s;
    }, this.date = (s) => s === null ? null : this.dayjs(s), this.dateWithTimezone = (s, i) => {
      if (s === null)
        return null;
      let l;
      return i === "UTC" ? l = this.createUTCDate(s) : i === "system" || i === "default" && !this.hasTimezonePlugin() ? l = this.createSystemDate(s) : l = this.createTZDate(s, i), this.locale === void 0 ? l : l.locale(this.locale);
    }, this.getTimezone = (s) => {
      if (this.hasTimezonePlugin()) {
        var i;
        const l = (i = s.$x) == null ? void 0 : i.$timezone;
        if (l)
          return l;
      }
      return this.hasUTCPlugin() && s.isUTC() ? "UTC" : "system";
    }, this.setTimezone = (s, i) => {
      if (this.getTimezone(s) === i)
        return s;
      if (i === "UTC") {
        if (!this.hasUTCPlugin())
          throw new Error(Ms);
        return s.utc();
      }
      if (i === "system")
        return s.local();
      if (!this.hasTimezonePlugin()) {
        if (i === "default")
          return s;
        throw new Error(zi);
      }
      return rt.tz(s, this.cleanTimezone(i));
    }, this.toJsDate = (s) => s.toDate(), this.parseISO = (s) => this.dayjs(s), this.toISO = (s) => s.toISOString(), this.parse = (s, i) => s === "" ? null : this.dayjs(s, i, this.locale, !0), this.getCurrentLocaleCode = () => this.locale || "en", this.is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || ""), this.expandFormat = (s) => {
      const i = this.getLocaleFormats(), l = (c) => c.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (u, d, p) => d || p.slice(1));
      return s.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (c, u, d) => {
        const p = d && d.toUpperCase();
        return u || i[d] || l(i[p]);
      });
    }, this.getFormatHelperText = (s) => this.expandFormat(s).replace(/a/gi, "(a|p)m").toLocaleLowerCase(), this.isNull = (s) => s === null, this.isValid = (s) => this.dayjs(s).isValid(), this.format = (s, i) => this.formatByString(s, this.formats[i]), this.formatByString = (s, i) => this.dayjs(s).format(i), this.formatNumber = (s) => s, this.getDiff = (s, i, l) => s.diff(i, l), this.isEqual = (s, i) => s === null && i === null ? !0 : this.dayjs(s).toDate().getTime() === this.dayjs(i).toDate().getTime(), this.isSameYear = (s, i) => this.isSame(s, i, "YYYY"), this.isSameMonth = (s, i) => this.isSame(s, i, "YYYY-MM"), this.isSameDay = (s, i) => this.isSame(s, i, "YYYY-MM-DD"), this.isSameHour = (s, i) => s.isSame(i, "hour"), this.isAfter = (s, i) => s > i, this.isAfterYear = (s, i) => this.hasUTCPlugin() ? !this.isSameYear(s, i) && s.utc() > i.utc() : s.isAfter(i, "year"), this.isAfterDay = (s, i) => this.hasUTCPlugin() ? !this.isSameDay(s, i) && s.utc() > i.utc() : s.isAfter(i, "day"), this.isBefore = (s, i) => s < i, this.isBeforeYear = (s, i) => this.hasUTCPlugin() ? !this.isSameYear(s, i) && s.utc() < i.utc() : s.isBefore(i, "year"), this.isBeforeDay = (s, i) => this.hasUTCPlugin() ? !this.isSameDay(s, i) && s.utc() < i.utc() : s.isBefore(i, "day"), this.isWithinRange = (s, [i, l]) => s >= i && s <= l, this.startOfYear = (s) => this.adjustOffset(s.startOf("year")), this.startOfMonth = (s) => this.adjustOffset(s.startOf("month")), this.startOfWeek = (s) => this.adjustOffset(s.startOf("week")), this.startOfDay = (s) => this.adjustOffset(s.startOf("day")), this.endOfYear = (s) => this.adjustOffset(s.endOf("year")), this.endOfMonth = (s) => this.adjustOffset(s.endOf("month")), this.endOfWeek = (s) => this.adjustOffset(s.endOf("week")), this.endOfDay = (s) => this.adjustOffset(s.endOf("day")), this.addYears = (s, i) => this.adjustOffset(i < 0 ? s.subtract(Math.abs(i), "year") : s.add(i, "year")), this.addMonths = (s, i) => this.adjustOffset(i < 0 ? s.subtract(Math.abs(i), "month") : s.add(i, "month")), this.addWeeks = (s, i) => this.adjustOffset(i < 0 ? s.subtract(Math.abs(i), "week") : s.add(i, "week")), this.addDays = (s, i) => this.adjustOffset(i < 0 ? s.subtract(Math.abs(i), "day") : s.add(i, "day")), this.addHours = (s, i) => this.adjustOffset(i < 0 ? s.subtract(Math.abs(i), "hour") : s.add(i, "hour")), this.addMinutes = (s, i) => this.adjustOffset(i < 0 ? s.subtract(Math.abs(i), "minute") : s.add(i, "minute")), this.addSeconds = (s, i) => this.adjustOffset(i < 0 ? s.subtract(Math.abs(i), "second") : s.add(i, "second")), this.getYear = (s) => s.year(), this.getMonth = (s) => s.month(), this.getDate = (s) => s.date(), this.getHours = (s) => s.hour(), this.getMinutes = (s) => s.minute(), this.getSeconds = (s) => s.second(), this.getMilliseconds = (s) => s.millisecond(), this.setYear = (s, i) => this.adjustOffset(s.set("year", i)), this.setMonth = (s, i) => this.adjustOffset(s.set("month", i)), this.setDate = (s, i) => this.adjustOffset(s.set("date", i)), this.setHours = (s, i) => this.adjustOffset(s.set("hour", i)), this.setMinutes = (s, i) => this.adjustOffset(s.set("minute", i)), this.setSeconds = (s, i) => this.adjustOffset(s.set("second", i)), this.setMilliseconds = (s, i) => this.adjustOffset(s.set("millisecond", i)), this.getDaysInMonth = (s) => s.daysInMonth(), this.getNextMonth = (s) => this.addMonths(s, 1), this.getPreviousMonth = (s) => this.addMonths(s, -1), this.getMonthArray = (s) => {
      const l = [s.startOf("year")];
      for (; l.length < 12; ) {
        const c = l[l.length - 1];
        l.push(this.addMonths(c, 1));
      }
      return l;
    }, this.mergeDateAndTime = (s, i) => s.hour(i.hour()).minute(i.minute()).second(i.second()), this.getWeekdays = () => {
      const s = this.dayjs().startOf("week");
      return [0, 1, 2, 3, 4, 5, 6].map((i) => this.formatByString(this.addDays(s, i), "dd"));
    }, this.getWeekArray = (s) => {
      const i = this.setLocaleToValue(s), l = i.startOf("month").startOf("week"), c = i.endOf("month").endOf("week");
      let u = 0, d = l;
      const p = [];
      for (; d < c; ) {
        const h = Math.floor(u / 7);
        p[h] = p[h] || [], p[h].push(d), d = this.addDays(d, 1), u += 1;
      }
      return p;
    }, this.getWeekNumber = (s) => s.week(), this.getYearRange = (s, i) => {
      const l = s.startOf("year"), c = i.endOf("year"), u = [];
      let d = l;
      for (; d < c; )
        u.push(d), d = this.addYears(d, 1);
      return u;
    }, this.getMeridiemText = (s) => s === "am" ? "AM" : "PM", this.rawDayJsInstance = r, this.dayjs = Gg((a = this.rawDayJsInstance) != null ? a : rt, t), this.locale = t, this.formats = g({}, Kg, o), rt.extend(Vg);
  }
}
function Qg(e) {
  return typeof e == "string";
}
function Zg(e, t, o) {
  return e === void 0 || Qg(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...o
    }
  };
}
function Jg(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function Bc(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function eb(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function tb(...e) {
  return b.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      eb(o, t);
    });
  }, e);
}
function Ui(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function nb(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: a,
    className: s
  } = e;
  if (!t) {
    const m = ce(o == null ? void 0 : o.className, s, a == null ? void 0 : a.className, r == null ? void 0 : r.className), y = {
      ...o == null ? void 0 : o.style,
      ...a == null ? void 0 : a.style,
      ...r == null ? void 0 : r.style
    }, f = {
      ...o,
      ...a,
      ...r
    };
    return m.length > 0 && (f.className = m), Object.keys(y).length > 0 && (f.style = y), {
      props: f,
      internalRef: void 0
    };
  }
  const i = Jg({
    ...a,
    ...r
  }), l = Ui(r), c = Ui(a), u = t(i), d = ce(u == null ? void 0 : u.className, o == null ? void 0 : o.className, s, a == null ? void 0 : a.className, r == null ? void 0 : r.className), p = {
    ...u == null ? void 0 : u.style,
    ...o == null ? void 0 : o.style,
    ...a == null ? void 0 : a.style,
    ...r == null ? void 0 : r.style
  }, h = {
    ...u,
    ...o,
    ...c,
    ...l
  };
  return d.length > 0 && (h.className = d), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: u.ref
  };
}
function ob(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function ot(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: a = !1,
    ...s
  } = e, i = a ? {} : ob(o, r), {
    props: l,
    internalRef: c
  } = nb({
    ...s,
    externalSlotProps: i
  }), u = tb(c, i == null ? void 0 : i.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return Zg(t, {
    ...l,
    ref: u
  }, r);
}
const go = (e, t) => e.length !== t.length ? !1 : t.every((o) => e.includes(o)), rb = ({
  openTo: e,
  defaultOpenTo: t,
  views: o,
  defaultViews: r
}) => {
  const a = o ?? r;
  let s;
  if (e != null)
    s = e;
  else if (a.includes(t))
    s = t;
  else if (a.length > 0)
    s = a[0];
  else
    throw new Error("MUI: The `views` prop must contain at least one view");
  return {
    views: a,
    openTo: s
  };
}, Pr = (e, t, o) => {
  let r = t;
  return r = e.setHours(r, e.getHours(o)), r = e.setMinutes(r, e.getMinutes(o)), r = e.setSeconds(r, e.getSeconds(o)), r;
}, So = ({
  date: e,
  disableFuture: t,
  disablePast: o,
  maxDate: r,
  minDate: a,
  isDateDisabled: s,
  utils: i,
  timezone: l
}) => {
  const c = Pr(i, i.dateWithTimezone(void 0, l), e);
  o && i.isBefore(a, c) && (a = c), t && i.isAfter(r, c) && (r = c);
  let u = e, d = e;
  for (i.isBefore(e, a) && (u = a, d = null), i.isAfter(e, r) && (d && (d = r), u = null); u || d; ) {
    if (u && i.isAfter(u, r) && (u = null), d && i.isBefore(d, a) && (d = null), u) {
      if (!s(u))
        return u;
      u = i.addDays(u, 1);
    }
    if (d) {
      if (!s(d))
        return d;
      d = i.addDays(d, -1);
    }
  }
  return null;
}, sb = (e, t) => t == null || !e.isValid(t) ? null : t, It = (e, t, o) => t == null || !e.isValid(t) ? o : t, ab = (e, t, o) => !e.isValid(t) && t != null && !e.isValid(o) && o != null ? !0 : e.isEqual(t, o), xa = (e, t) => {
  const r = [e.startOfYear(t)];
  for (; r.length < 12; ) {
    const a = r[r.length - 1];
    r.push(e.addMonths(a, 1));
  }
  return r;
}, Wc = (e, t, o) => o === "date" ? e.startOfDay(e.dateWithTimezone(void 0, t)) : e.dateWithTimezone(void 0, t), ib = ["year", "month", "day"], Yi = (e) => ib.includes(e), Ca = (e, {
  format: t,
  views: o
}, r) => {
  if (t != null)
    return t;
  const a = e.formats;
  return go(o, ["year"]) ? a.year : go(o, ["month"]) ? a.month : go(o, ["day"]) ? a.dayOfMonth : go(o, ["month", "year"]) ? `${a.month} ${a.year}` : go(o, ["day", "month"]) ? `${a.month} ${a.dayOfMonth}` : r ? /en/.test(e.getCurrentLocaleCode()) ? a.normalDateWithWeekday : a.normalDate : a.keyboardDate;
}, lb = (e, t) => {
  const o = e.startOfWeek(t);
  return [0, 1, 2, 3, 4, 5, 6].map((r) => e.addDays(o, r));
}, cb = ["hours", "minutes", "seconds"], ub = (e) => cb.includes(e), Hi = (e, t) => t.getHours(e) * 3600 + t.getMinutes(e) * 60 + t.getSeconds(e), db = (e, t) => (o, r) => e ? t.isAfter(o, r) : Hi(o, t) > Hi(r, t), Yt = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
}, fb = (e) => Math.max(...e.map((t) => {
  var o;
  return (o = Yt[t.type]) != null ? o : 1;
})), bo = (e, t, o) => {
  if (t === Yt.year)
    return e.startOfYear(o);
  if (t === Yt.month)
    return e.startOfMonth(o);
  if (t === Yt.day)
    return e.startOfDay(o);
  let r = o;
  return t < Yt.minutes && (r = e.setMinutes(r, 0)), t < Yt.seconds && (r = e.setSeconds(r, 0)), t < Yt.milliseconds && (r = e.setMilliseconds(r, 0)), r;
}, pb = ({
  props: e,
  utils: t,
  granularity: o,
  timezone: r,
  getTodayDate: a
}) => {
  var s;
  let i = a ? a() : bo(t, o, Wc(t, r));
  e.minDate != null && t.isAfterDay(e.minDate, i) && (i = bo(t, o, e.minDate)), e.maxDate != null && t.isBeforeDay(e.maxDate, i) && (i = bo(t, o, e.maxDate));
  const l = db((s = e.disableIgnoringDatePartForTimeValidation) != null ? s : !1, t);
  return e.minTime != null && l(e.minTime, i) && (i = bo(t, o, e.disableIgnoringDatePartForTimeValidation ? e.minTime : Pr(t, i, e.minTime))), e.maxTime != null && l(i, e.maxTime) && (i = bo(t, o, e.disableIgnoringDatePartForTimeValidation ? e.maxTime : Pr(t, i, e.maxTime))), i;
}, wa = (e, t) => {
  const o = e.formatTokenMap[t];
  if (o == null)
    throw new Error([`MUI: The token "${t}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join(`
`));
  return typeof o == "string" ? {
    type: o,
    contentType: o === "meridiem" ? "letter" : "digit",
    maxLength: void 0
  } : {
    type: o.sectionType,
    contentType: o.contentType,
    maxLength: o.maxLength
  };
}, hb = (e) => {
  switch (e) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
}, es = (e, t, o) => {
  const r = [], a = e.dateWithTimezone(void 0, t), s = e.startOfWeek(a), i = e.endOfWeek(a);
  let l = s;
  for (; e.isBefore(l, i); )
    r.push(l), l = e.addDays(l, 1);
  return r.map((c) => e.formatByString(c, o));
}, zc = (e, t, o, r) => {
  switch (o) {
    case "month":
      return xa(e, e.dateWithTimezone(void 0, t)).map((a) => e.formatByString(a, r));
    case "weekDay":
      return es(e, t, r);
    case "meridiem": {
      const a = e.dateWithTimezone(void 0, t);
      return [e.startOfDay(a), e.endOfDay(a)].map((s) => e.formatByString(s, r));
    }
    default:
      return [];
  }
}, Uc = (e, t, o) => {
  let r = t;
  for (r = Number(r).toString(); r.length < o; )
    r = `0${r}`;
  return r;
}, Yc = (e, t, o, r, a) => {
  if (process.env.NODE_ENV !== "production" && a.type !== "day" && a.contentType === "digit-with-letter")
    throw new Error([`MUI: The token "${a.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join(`
`));
  if (a.type === "day" && a.contentType === "digit-with-letter") {
    const i = e.setDate(r.longestMonth, o);
    return e.formatByString(i, a.format);
  }
  const s = o.toString();
  return a.hasLeadingZerosInInput ? Uc(e, s, a.maxLength) : s;
}, mb = (e, t, o, r, a, s, i) => {
  const l = hb(r), c = r === "Home", u = r === "End", d = o.value === "" || c || u, p = () => {
    const m = a[o.type]({
      currentDate: s,
      format: o.format,
      contentType: o.contentType
    }), y = (T) => Yc(e, t, T, m, o), f = o.type === "minutes" && i != null && i.minutesStep ? i.minutesStep : 1;
    let w = parseInt(o.value, 10) + l * f;
    if (d) {
      if (o.type === "year" && !u && !c)
        return e.formatByString(e.dateWithTimezone(void 0, t), o.format);
      l > 0 || c ? w = m.minimum : w = m.maximum;
    }
    return w % f !== 0 && ((l < 0 || c) && (w += f - (f + w) % f), (l > 0 || u) && (w -= w % f)), w > m.maximum ? y(m.minimum + (w - m.maximum - 1) % (m.maximum - m.minimum + 1)) : w < m.minimum ? y(m.maximum - (m.minimum - w - 1) % (m.maximum - m.minimum + 1)) : y(w);
  }, h = () => {
    const m = zc(e, t, o.type, o.format);
    if (m.length === 0)
      return o.value;
    if (d)
      return l > 0 || c ? m[0] : m[m.length - 1];
    const f = (m.indexOf(o.value) + m.length + l) % m.length;
    return m[f];
  };
  return o.contentType === "digit" || o.contentType === "digit-with-letter" ? p() : h();
}, Ta = (e, t) => {
  let o = e.value || e.placeholder;
  const r = t === "non-input" ? e.hasLeadingZerosInFormat : e.hasLeadingZerosInInput;
  return t === "non-input" && e.hasLeadingZerosInInput && !e.hasLeadingZerosInFormat && (o = Number(o).toString()), ["input-rtl", "input-ltr"].includes(t) && e.contentType === "digit" && !r && o.length === 1 && (o = `${o}‎`), t === "input-rtl" && (o = `⁨${o}⁩`), o;
}, Ln = (e) => e.replace(/[\u2066\u2067\u2068\u2069]/g, ""), Hc = (e, t) => {
  let o = 0, r = t ? 1 : 0;
  const a = [];
  for (let s = 0; s < e.length; s += 1) {
    const i = e[s], l = Ta(i, t ? "input-rtl" : "input-ltr"), c = `${i.startSeparator}${l}${i.endSeparator}`, u = Ln(c).length, d = c.length, p = Ln(l), h = r + l.indexOf(p[0]) + i.startSeparator.length, m = h + p.length;
    a.push(g({}, i, {
      start: o,
      end: o + u,
      startInInput: h,
      endInInput: m
    })), o += u, r += d;
  }
  return a;
}, gb = (e, t, o, r, a) => {
  switch (r.type) {
    case "year":
      return o.fieldYearPlaceholder({
        digitAmount: e.formatByString(e.dateWithTimezone(void 0, t), a).length,
        format: a
      });
    case "month":
      return o.fieldMonthPlaceholder({
        contentType: r.contentType,
        format: a
      });
    case "day":
      return o.fieldDayPlaceholder({
        format: a
      });
    case "weekDay":
      return o.fieldWeekDayPlaceholder({
        contentType: r.contentType,
        format: a
      });
    case "hours":
      return o.fieldHoursPlaceholder({
        format: a
      });
    case "minutes":
      return o.fieldMinutesPlaceholder({
        format: a
      });
    case "seconds":
      return o.fieldSecondsPlaceholder({
        format: a
      });
    case "meridiem":
      return o.fieldMeridiemPlaceholder({
        format: a
      });
    default:
      return a;
  }
}, qi = (e, t, o, r) => {
  if (process.env.NODE_ENV !== "production" && wa(e, o).type === "weekDay")
    throw new Error("changeSectionValueFormat doesn't support week day formats");
  return e.formatByString(e.parse(t, o), r);
}, qc = (e, t, o) => e.formatByString(e.dateWithTimezone(void 0, t), o).length === 4, Kc = (e, t, o, r, a) => {
  if (o !== "digit")
    return !1;
  const s = e.dateWithTimezone(void 0, t);
  switch (r) {
    case "year":
      return qc(e, t, a) ? e.formatByString(e.setYear(s, 1), a) === "0001" : e.formatByString(e.setYear(s, 2001), a) === "01";
    case "month":
      return e.formatByString(e.startOfYear(s), a).length > 1;
    case "day":
      return e.formatByString(e.startOfMonth(s), a).length > 1;
    case "weekDay":
      return e.formatByString(e.startOfWeek(s), a).length > 1;
    case "hours":
      return e.formatByString(e.setHours(s, 1), a).length > 1;
    case "minutes":
      return e.formatByString(e.setMinutes(s, 1), a).length > 1;
    case "seconds":
      return e.formatByString(e.setSeconds(s, 1), a).length > 1;
    default:
      throw new Error("Invalid section type");
  }
}, bb = (e, t) => {
  const o = [], {
    start: r,
    end: a
  } = e.escapedCharacters, s = new RegExp(`(\\${r}[^\\${a}]*\\${a})+`, "g");
  let i = null;
  for (; i = s.exec(t); )
    o.push({
      start: i.index,
      end: s.lastIndex - 1
    });
  return o;
}, Ki = (e, t, o, r, a, s, i, l) => {
  let c = "";
  const u = [], d = e.date(), p = (x) => {
    if (x === "")
      return null;
    const E = wa(e, x), v = Kc(e, t, E.contentType, E.type, x), D = i ? v : E.contentType === "digit", O = a != null && e.isValid(a);
    let F = O ? e.formatByString(a, x) : "", _ = null;
    if (D)
      if (v)
        _ = F === "" ? e.formatByString(d, x).length : F.length;
      else {
        if (E.maxLength == null)
          throw new Error(`MUI: The token ${x} should have a 'maxDigitNumber' property on it's adapter`);
        _ = E.maxLength, O && (F = Uc(e, F, _));
      }
    return u.push(g({}, E, {
      format: x,
      maxLength: _,
      value: F,
      placeholder: gb(e, t, o, E, x),
      hasLeadingZeros: v,
      hasLeadingZerosInFormat: v,
      hasLeadingZerosInInput: D,
      startSeparator: u.length === 0 ? c : "",
      endSeparator: "",
      modified: !1
    })), null;
  };
  let h = 10, m = r, y = e.expandFormat(r);
  for (; y !== m; )
    if (m = y, y = e.expandFormat(m), h -= 1, h < 0)
      throw new Error("MUI: The format expansion seems to be  enter in an infinite loop. Please open an issue with the format passed to the picker component");
  const f = y, C = bb(e, f), w = new RegExp(`^(${Object.keys(e.formatTokenMap).sort((x, E) => E.length - x.length).join("|")})`, "g");
  let T = "";
  for (let x = 0; x < f.length; x += 1) {
    const E = C.find((_) => _.start <= x && _.end >= x), v = f[x], D = E != null, O = `${T}${f.slice(x)}`, F = w.test(O);
    !D && v.match(/([A-Za-z]+)/) && F ? (T = O.slice(0, w.lastIndex), x += w.lastIndex - 1) : D && (E == null ? void 0 : E.start) === x || (E == null ? void 0 : E.end) === x || (p(T), T = "", u.length === 0 ? c += v : u[u.length - 1].endSeparator += v);
  }
  return p(T), u.map((x) => {
    const E = (v) => {
      let D = v;
      return l && D !== null && D.includes(" ") && (D = `⁩${D}⁦`), s === "spacious" && ["/", ".", "-"].includes(D) && (D = ` ${D} `), D;
    };
    return x.startSeparator = E(x.startSeparator), x.endSeparator = E(x.endSeparator), x;
  });
}, yb = (e, t) => {
  const o = t.some((l) => l.type === "day"), r = [], a = [];
  for (let l = 0; l < t.length; l += 1) {
    const c = t[l];
    o && c.type === "weekDay" || (r.push(c.format), a.push(Ta(c, "non-input")));
  }
  const s = r.join(" "), i = a.join(" ");
  return e.parse(i, s);
}, vb = (e, t) => {
  const r = e.map((a) => {
    const s = Ta(a, t ? "input-rtl" : "input-ltr");
    return `${a.startSeparator}${s}${a.endSeparator}`;
  }).join("");
  return t ? `⁦${r}⁩` : r;
}, xb = (e, t) => {
  const o = e.dateWithTimezone(void 0, t), r = e.endOfYear(o), a = e.endOfDay(o), {
    maxDaysInMonth: s,
    longestMonth: i
  } = xa(e, o).reduce((l, c) => {
    const u = e.getDaysInMonth(c);
    return u > l.maxDaysInMonth ? {
      maxDaysInMonth: u,
      longestMonth: c
    } : l;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format: l
    }) => ({
      minimum: 0,
      maximum: qc(e, t, l) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: e.getMonth(r) + 1
    }),
    day: ({
      currentDate: l
    }) => ({
      minimum: 1,
      maximum: l != null && e.isValid(l) ? e.getDaysInMonth(l) : s,
      longestMonth: i
    }),
    weekDay: ({
      format: l,
      contentType: c
    }) => {
      if (c === "digit") {
        const u = es(e, t, l).map(Number);
        return {
          minimum: Math.min(...u),
          maximum: Math.max(...u)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format: l
    }) => {
      const c = e.getHours(a);
      return e.formatByString(e.endOfDay(o), l) !== c.toString() ? {
        minimum: 1,
        maximum: Number(e.formatByString(e.startOfDay(o), l))
      } : {
        minimum: 0,
        maximum: c
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: e.getMinutes(a)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: e.getSeconds(a)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
let Gi = !1;
const Xi = (e, t) => {
  if (process.env.NODE_ENV !== "production" && !Gi) {
    const o = [];
    ["date", "date-time"].includes(t) && o.push("weekDay", "day", "month", "year"), ["time", "date-time"].includes(t) && o.push("hours", "minutes", "seconds", "meridiem");
    const r = e.find((a) => !o.includes(a.type));
    r && (console.warn(`MUI: The field component you are using is not compatible with the "${r.type} date section.`, `The supported date sections are ["${o.join('", "')}"]\`.`), Gi = !0);
  }
}, Cb = (e, t, o, r, a) => {
  switch (o.type) {
    case "year":
      return e.setYear(a, e.getYear(r));
    case "month":
      return e.setMonth(a, e.getMonth(r));
    case "weekDay": {
      const s = es(e, t, o.format), i = e.formatByString(r, o.format), l = s.indexOf(i), u = s.indexOf(o.value) - l;
      return e.addDays(r, u);
    }
    case "day":
      return e.setDate(a, e.getDate(r));
    case "meridiem": {
      const s = e.getHours(r) < 12, i = e.getHours(a);
      return s && i >= 12 ? e.addHours(a, -12) : !s && i < 12 ? e.addHours(a, 12) : a;
    }
    case "hours":
      return e.setHours(a, e.getHours(r));
    case "minutes":
      return e.setMinutes(a, e.getMinutes(r));
    case "seconds":
      return e.setSeconds(a, e.getSeconds(r));
    default:
      return a;
  }
}, Qi = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8
}, Zi = (e, t, o, r, a, s) => (
  // cloning sections before sort to avoid mutating it
  [...r].sort((i, l) => Qi[i.type] - Qi[l.type]).reduce((i, l) => !s || l.modified ? Cb(e, t, l, o, i) : i, a)
), wb = () => navigator.userAgent.toLowerCase().indexOf("android") > -1, Tb = (e, t) => {
  const o = {};
  if (!t)
    return e.forEach((c, u) => {
      const d = u === 0 ? null : u - 1, p = u === e.length - 1 ? null : u + 1;
      o[u] = {
        leftIndex: d,
        rightIndex: p
      };
    }), {
      neighbors: o,
      startIndex: 0,
      endIndex: e.length - 1
    };
  const r = {}, a = {};
  let s = 0, i = 0, l = e.length - 1;
  for (; l >= 0; ) {
    i = e.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (c, u) => {
        var d;
        return u >= s && ((d = c.endSeparator) == null ? void 0 : d.includes(" ")) && // Special case where the spaces were not there in the initial input
        c.endSeparator !== " / ";
      }
    ), i === -1 && (i = e.length - 1);
    for (let c = i; c >= s; c -= 1)
      a[c] = l, r[l] = c, l -= 1;
    s = i + 1;
  }
  return e.forEach((c, u) => {
    const d = a[u], p = d === 0 ? null : r[d - 1], h = d === e.length - 1 ? null : r[d + 1];
    o[u] = {
      leftIndex: p,
      rightIndex: h
    };
  }), {
    neighbors: o,
    startIndex: r[0],
    endIndex: r[e.length - 1]
  };
}, Eb = ["value", "referenceDate"], Zt = {
  emptyValue: null,
  getTodayValue: Wc,
  getInitialReferenceValue: (e) => {
    let {
      value: t,
      referenceDate: o
    } = e, r = ae(e, Eb);
    return t != null && r.utils.isValid(t) ? t : o ?? pb(r);
  },
  cleanValue: sb,
  areValuesEqual: ab,
  isSameError: (e, t) => e === t,
  hasError: (e) => e != null,
  defaultErrorState: null,
  getTimezone: (e, t) => t == null || !e.isValid(t) ? null : e.getTimezone(t),
  setTimezone: (e, t, o) => o == null ? null : e.setTimezone(o, t)
}, Sb = {
  updateReferenceValue: (e, t, o) => t == null || !e.isValid(t) ? o : t,
  getSectionsFromValue: (e, t, o, r, a) => !e.isValid(t) && !!o ? o : Hc(a(t), r),
  getValueStrFromSections: vb,
  getActiveDateManager: (e, t) => ({
    date: t.value,
    referenceDate: t.referenceValue,
    getSections: (o) => o,
    getNewValuesFromNewActiveDate: (o) => ({
      value: o,
      referenceValue: o == null || !e.isValid(o) ? t.referenceValue : o
    })
  }),
  parseValueStr: (e, t, o) => o(e.trim(), t)
}, Pb = (e) => ({
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: g({}, e)
      }
    }
  }
}), Gc = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "open previous view",
  openNextView: "open next view",
  calendarViewSwitchingButtonAriaLabel: (e) => e === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange placeholders
  start: "Start",
  end: "End",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  // Clock labels
  clockLabelText: (e, t, o) => `Select ${e}. ${t === null ? "No time selected" : `Selected time is ${o.format(t, "fullTime")}`}`,
  hoursClockNumberText: (e) => `${e} hours`,
  minutesClockNumberText: (e) => `${e} minutes`,
  secondsClockNumberText: (e) => `${e} seconds`,
  // Digital clock labels
  selectViewText: (e) => `Select ${e}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (e) => `Week ${e}`,
  calendarWeekNumberText: (e) => `${e}`,
  // Open picker labels
  openDatePickerDialogue: (e, t) => e !== null && t.isValid(e) ? `Choose date, selected date is ${t.format(e, "fullDate")}` : "Choose date",
  openTimePickerDialogue: (e, t) => e !== null && t.isValid(e) ? `Choose time, selected time is ${t.format(e, "fullTime")}` : "Choose time",
  fieldClearLabel: "Clear value",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (e) => "Y".repeat(e.digitAmount),
  fieldMonthPlaceholder: (e) => e.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (e) => e.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
}, Ob = Gc;
Pb(Gc);
const Sn = () => {
  const e = b.useContext(Sr);
  if (e === null)
    throw new Error(["MUI: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join(`
`));
  if (e.utils === null)
    throw new Error(["MUI: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join(`
`));
  const t = b.useMemo(() => g({}, Ob, e.localeText), [e.localeText]);
  return b.useMemo(() => g({}, e, {
    localeText: t
  }), [e, t]);
}, ze = () => Sn().utils, Go = () => Sn().defaultDates, dn = () => Sn().localeText, ts = (e) => {
  const t = ze(), o = b.useRef();
  return o.current === void 0 && (o.current = t.dateWithTimezone(void 0, e)), o.current;
};
function Rb(e) {
  return xe("MuiTypography", e);
}
ye("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Db = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Mb = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: a,
    variant: s,
    classes: i
  } = e, l = {
    root: ["root", s, e.align !== "inherit" && `align${ie(t)}`, o && "gutterBottom", r && "noWrap", a && "paragraph"]
  };
  return we(l, Rb, i);
}, $b = ne("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${ie(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Ji = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, kb = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Ib = (e) => kb[e] || e, Xc = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiTypography"
  }), a = Ib(r.color), s = bc(g({}, r, {
    color: a
  })), {
    align: i = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: p = !1,
    variant: h = "body1",
    variantMapping: m = Ji
  } = s, y = ae(s, Db), f = g({}, s, {
    align: i,
    color: a,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: p,
    variant: h,
    variantMapping: m
  }), C = c || (p ? "p" : m[h] || Ji[h]) || "span", w = Mb(f);
  return /* @__PURE__ */ S.jsx($b, g({
    as: C,
    ref: o,
    ownerState: f,
    className: ce(w.root, l)
  }, y));
});
process.env.NODE_ENV !== "production" && (Xc.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: n.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: n.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: n.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: n.oneOfType([n.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), n.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: n.object
});
const Pn = Xc;
function Nb(e) {
  return xe("MuiPickersToolbar", e);
}
ye("MuiPickersToolbar", ["root", "content"]);
const _b = (e) => {
  const {
    classes: t,
    isLandscape: o
  } = e;
  return we({
    root: ["root"],
    content: ["content"],
    penIconButton: ["penIconButton", o && "penIconButtonLandscape"]
  }, Nb, t);
}, jb = ne("div", {
  name: "MuiPickersToolbar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => g({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: e.spacing(2, 3)
}, t.isLandscape && {
  height: "auto",
  maxWidth: 160,
  padding: 16,
  justifyContent: "flex-start",
  flexWrap: "wrap"
})), Ab = ne("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  overridesResolver: (e, t) => t.content
})(({
  ownerState: e
}) => {
  var t;
  return {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: e.isLandscape ? "flex-start" : "space-between",
    flexDirection: e.isLandscape ? (t = e.landscapeDirection) != null ? t : "column" : "row",
    flex: 1,
    alignItems: e.isLandscape ? "flex-start" : "center"
  };
}), Fb = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiPickersToolbar"
  }), {
    children: a,
    className: s,
    toolbarTitle: i,
    hidden: l,
    titleId: c
  } = r, u = r, d = _b(u);
  return l ? null : /* @__PURE__ */ S.jsxs(jb, {
    ref: o,
    className: ce(d.root, s),
    ownerState: u,
    children: [/* @__PURE__ */ S.jsx(Pn, {
      color: "text.secondary",
      variant: "overline",
      id: c,
      children: i
    }), /* @__PURE__ */ S.jsx(Ab, {
      className: d.content,
      ownerState: u,
      children: a
    })]
  });
});
function Vb(e) {
  return xe("MuiDatePickerToolbar", e);
}
ye("MuiDatePickerToolbar", ["root", "title"]);
const Lb = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views", "className"], Bb = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    title: ["title"]
  }, Vb, t);
}, Wb = ne(Fb, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), zb = ne(Pn, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (e, t) => t.title
})(({
  ownerState: e
}) => g({}, e.isLandscape && {
  margin: "auto 16px auto auto"
})), Qc = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiDatePickerToolbar"
  }), {
    value: a,
    isLandscape: s,
    toolbarFormat: i,
    toolbarPlaceholder: l = "––",
    views: c,
    className: u
  } = r, d = ae(r, Lb), p = ze(), h = dn(), m = Bb(r), y = b.useMemo(() => {
    if (!a)
      return l;
    const C = Ca(p, {
      format: i,
      views: c
    }, !0);
    return p.formatByString(a, C);
  }, [a, i, l, p, c]), f = r;
  return /* @__PURE__ */ S.jsx(Wb, g({
    ref: o,
    toolbarTitle: h.datePickerToolbarTitle,
    isLandscape: s,
    className: ce(m.root, u)
  }, d, {
    children: /* @__PURE__ */ S.jsx(zb, {
      variant: "h4",
      align: s ? "left" : "center",
      ownerState: f,
      className: m.title,
      children: y
    })
  }));
});
process.env.NODE_ENV !== "production" && (Qc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * className applied to the root component.
   */
  className: n.string,
  disabled: n.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: n.bool,
  isLandscape: n.bool.isRequired,
  onChange: n.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: n.func.isRequired,
  readOnly: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  titleId: n.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: n.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: n.node,
  value: n.any,
  /**
   * Currently visible picker view.
   */
  view: n.oneOf(["day", "month", "year"]).isRequired,
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired).isRequired
});
const Zc = (e) => {
  if (e !== void 0)
    return Object.keys(e).reduce((t, o) => g({}, t, {
      [`${o.slice(0, 1).toLowerCase()}${o.slice(1)}`]: e[o]
    }), {});
};
function Jc(e, t) {
  var o, r, a, s;
  const i = ze(), l = Go(), c = at({
    props: e,
    name: t
  }), u = b.useMemo(() => {
    var p;
    return ((p = c.localeText) == null ? void 0 : p.toolbarTitle) == null ? c.localeText : g({}, c.localeText, {
      datePickerToolbarTitle: c.localeText.toolbarTitle
    });
  }, [c.localeText]), d = (o = c.slots) != null ? o : Zc(c.components);
  return g({}, c, {
    localeText: u
  }, rb({
    views: c.views,
    openTo: c.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    disableFuture: (r = c.disableFuture) != null ? r : !1,
    disablePast: (a = c.disablePast) != null ? a : !1,
    minDate: It(i, c.minDate, l.minDate),
    maxDate: It(i, c.maxDate, l.maxDate),
    slots: g({
      toolbar: Qc
    }, d),
    slotProps: (s = c.slotProps) != null ? s : c.componentsProps
  });
}
function Ks(e, t) {
  return Ks = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, Ks(e, t);
}
function Ea(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ks(e, t);
}
function Ub(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Yb(e, t) {
  e.classList ? e.classList.add(t) : Ub(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function el(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Hb(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = el(e.className, t) : e.setAttribute("class", el(e.className && e.className.baseVal || "", t));
}
const tl = {
  disabled: !1
};
var qb = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null, Kb = process.env.NODE_ENV !== "production" ? n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]) : null;
const Or = ft.createContext(null);
var eu = function(t) {
  return t.scrollTop;
}, To = "unmounted", bn = "exited", yn = "entering", Fn = "entered", Gs = "exiting", tn = /* @__PURE__ */ function(e) {
  Ea(t, e);
  function t(r, a) {
    var s;
    s = e.call(this, r, a) || this;
    var i = a, l = i && !i.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = bn, s.appearStatus = yn) : c = Fn : r.unmountOnExit || r.mountOnEnter ? c = To : c = bn, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(a, s) {
    var i = a.in;
    return i && s.status === To ? {
      status: bn
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(a) {
    var s = null;
    if (a !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== yn && i !== Fn && (s = yn) : (i === yn || i === Fn) && (s = Gs);
    }
    this.updateStatus(!1, s);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var a = this.props.timeout, s, i, l;
    return s = i = l = a, a != null && typeof a != "number" && (s = a.exit, i = a.enter, l = a.appear !== void 0 ? a.appear : i), {
      exit: s,
      enter: i,
      appear: l
    };
  }, o.updateStatus = function(a, s) {
    if (a === void 0 && (a = !1), s !== null)
      if (this.cancelNextCallback(), s === yn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : er.findDOMNode(this);
          i && eu(i);
        }
        this.performEnter(a);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === bn && this.setState({
        status: To
      });
  }, o.performEnter = function(a) {
    var s = this, i = this.props.enter, l = this.context ? this.context.isMounting : a, c = this.props.nodeRef ? [l] : [er.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), h = l ? p.appear : p.enter;
    if (!a && !i || tl.disabled) {
      this.safeSetState({
        status: Fn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: yn
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(h, function() {
        s.safeSetState({
          status: Fn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var a = this, s = this.props.exit, i = this.getTimeouts(), l = this.props.nodeRef ? void 0 : er.findDOMNode(this);
    if (!s || tl.disabled) {
      this.safeSetState({
        status: bn
      }, function() {
        a.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Gs
    }, function() {
      a.props.onExiting(l), a.onTransitionEnd(i.exit, function() {
        a.safeSetState({
          status: bn
        }, function() {
          a.props.onExited(l);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(a, s) {
    s = this.setNextCallback(s), this.setState(a, s);
  }, o.setNextCallback = function(a) {
    var s = this, i = !0;
    return this.nextCallback = function(l) {
      i && (i = !1, s.nextCallback = null, a(l));
    }, this.nextCallback.cancel = function() {
      i = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(a, s) {
    this.setNextCallback(s);
    var i = this.props.nodeRef ? this.props.nodeRef.current : er.findDOMNode(this), l = a == null && !this.props.addEndListener;
    if (!i || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [i, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    a != null && setTimeout(this.nextCallback, a);
  }, o.render = function() {
    var a = this.state.status;
    if (a === To)
      return null;
    var s = this.props, i = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = ae(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ft.createElement(Or.Provider, {
        value: null
      }, typeof i == "function" ? i(a, l) : ft.cloneElement(ft.Children.only(i), l))
    );
  }, t;
}(ft.Component);
tn.contextType = Or;
tn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, o, r, a, s) {
      var i = e[t];
      return n.instanceOf(i && "ownerDocument" in i ? i.ownerDocument.defaultView.Element : Element)(e, t, o, r, a, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var o = qb;
    t.addEndListener || (o = o.isRequired);
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      a[s - 1] = arguments[s];
    return o.apply(void 0, [t].concat(a));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function jn() {
}
tn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: jn,
  onEntering: jn,
  onEntered: jn,
  onExit: jn,
  onExiting: jn,
  onExited: jn
};
tn.UNMOUNTED = To;
tn.EXITED = bn;
tn.ENTERING = yn;
tn.ENTERED = Fn;
tn.EXITING = Gs;
const ns = tn;
var Gb = function(t, o) {
  return t && o && o.split(" ").forEach(function(r) {
    return Yb(t, r);
  });
}, $s = function(t, o) {
  return t && o && o.split(" ").forEach(function(r) {
    return Hb(t, r);
  });
}, Sa = /* @__PURE__ */ function(e) {
  Ea(t, e);
  function t() {
    for (var r, a = arguments.length, s = new Array(a), i = 0; i < a; i++)
      s[i] = arguments[i];
    return r = e.call.apply(e, [this].concat(s)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], p = u[1];
      r.removeClasses(d, "exit"), r.addClass(d, p ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(l, c);
    }, r.onEntering = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], p = u[1], h = p ? "appear" : "enter";
      r.addClass(d, h, "active"), r.props.onEntering && r.props.onEntering(l, c);
    }, r.onEntered = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], p = u[1], h = p ? "appear" : "enter";
      r.removeClasses(d, h), r.addClass(d, h, "done"), r.props.onEntered && r.props.onEntered(l, c);
    }, r.onExit = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.removeClasses(u, "appear"), r.removeClasses(u, "enter"), r.addClass(u, "exit", "base"), r.props.onExit && r.props.onExit(l);
    }, r.onExiting = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.addClass(u, "exit", "active"), r.props.onExiting && r.props.onExiting(l);
    }, r.onExited = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.removeClasses(u, "exit"), r.addClass(u, "exit", "done"), r.props.onExited && r.props.onExited(l);
    }, r.resolveArguments = function(l, c) {
      return r.props.nodeRef ? [r.props.nodeRef.current, l] : [l, c];
    }, r.getClassNames = function(l) {
      var c = r.props.classNames, u = typeof c == "string", d = u && c ? c + "-" : "", p = u ? "" + d + l : c[l], h = u ? p + "-active" : c[l + "Active"], m = u ? p + "-done" : c[l + "Done"];
      return {
        baseClassName: p,
        activeClassName: h,
        doneClassName: m
      };
    }, r;
  }
  var o = t.prototype;
  return o.addClass = function(a, s, i) {
    var l = this.getClassNames(s)[i + "ClassName"], c = this.getClassNames("enter"), u = c.doneClassName;
    s === "appear" && i === "done" && u && (l += " " + u), i === "active" && a && eu(a), l && (this.appliedClasses[s][i] = l, Gb(a, l));
  }, o.removeClasses = function(a, s) {
    var i = this.appliedClasses[s], l = i.base, c = i.active, u = i.done;
    this.appliedClasses[s] = {}, l && $s(a, l), c && $s(a, c), u && $s(a, u);
  }, o.render = function() {
    var a = this.props;
    a.classNames;
    var s = ae(a, ["classNames"]);
    return /* @__PURE__ */ ft.createElement(ns, g({}, s, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(ft.Component);
Sa.defaultProps = {
  classNames: ""
};
Sa.propTypes = process.env.NODE_ENV !== "production" ? g({}, ns.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: Kb,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: n.func
}) : {};
const Xb = Sa;
function Qb(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pa(e, t) {
  var o = function(s) {
    return t && ur(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Hd.map(e, function(a) {
    return a;
  }).forEach(function(a) {
    r[a.key] = o(a);
  }), r;
}
function Zb(e, t) {
  e = e || {}, t = t || {};
  function o(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), a = [];
  for (var s in e)
    s in t ? a.length && (r[s] = a, a = []) : a.push(s);
  var i, l = {};
  for (var c in t) {
    if (r[c])
      for (i = 0; i < r[c].length; i++) {
        var u = r[c][i];
        l[r[c][i]] = o(u);
      }
    l[c] = o(c);
  }
  for (i = 0; i < a.length; i++)
    l[a[i]] = o(a[i]);
  return l;
}
function vn(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Jb(e, t) {
  return Pa(e.children, function(o) {
    return dr(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: vn(o, "appear", e),
      enter: vn(o, "enter", e),
      exit: vn(o, "exit", e)
    });
  });
}
function ey(e, t, o) {
  var r = Pa(e.children), a = Zb(t, r);
  return Object.keys(a).forEach(function(s) {
    var i = a[s];
    if (ur(i)) {
      var l = s in t, c = s in r, u = t[s], d = ur(u) && !u.props.in;
      c && (!l || d) ? a[s] = dr(i, {
        onExited: o.bind(null, i),
        in: !0,
        exit: vn(i, "exit", e),
        enter: vn(i, "enter", e)
      }) : !c && l && !d ? a[s] = dr(i, {
        in: !1
      }) : c && l && ur(u) && (a[s] = dr(i, {
        onExited: o.bind(null, i),
        in: u.props.in,
        exit: vn(i, "exit", e),
        enter: vn(i, "enter", e)
      }));
    }
  }), a;
}
var ty = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, ny = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Oa = /* @__PURE__ */ function(e) {
  Ea(t, e);
  function t(r, a) {
    var s;
    s = e.call(this, r, a) || this;
    var i = s.handleExited.bind(Qb(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: i,
      firstRender: !0
    }, s;
  }
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(a, s) {
    var i = s.children, l = s.handleExited, c = s.firstRender;
    return {
      children: c ? Jb(a, l) : ey(a, i, l),
      firstRender: !1
    };
  }, o.handleExited = function(a, s) {
    var i = Pa(this.props.children);
    a.key in i || (a.props.onExited && a.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = g({}, l.children);
      return delete c[a.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var a = this.props, s = a.component, i = a.childFactory, l = ae(a, ["component", "childFactory"]), c = this.state.contextValue, u = ty(this.state.children).map(i);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ ft.createElement(Or.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ft.createElement(Or.Provider, {
      value: c
    }, /* @__PURE__ */ ft.createElement(s, l, u));
  }, t;
}(ft.Component);
Oa.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: n.func
} : {};
Oa.defaultProps = ny;
const Ra = Oa;
function tu(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: a,
    rippleY: s,
    rippleSize: i,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, p] = b.useState(!1), h = ce(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), m = {
    width: i,
    height: i,
    top: -(i / 2) + s,
    left: -(i / 2) + a
  }, y = ce(o.child, d && o.childLeaving, r && o.childPulsate);
  return !l && !d && p(!0), b.useEffect(() => {
    if (!l && c != null) {
      const f = setTimeout(c, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ S.jsx("span", {
    className: h,
    style: m,
    children: /* @__PURE__ */ S.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (tu.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const oy = ye("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Dt = oy, ry = ["center", "classes", "className"];
let os = (e) => e, nl, ol, rl, sl;
const Xs = 550, sy = 80, ay = _r(nl || (nl = os`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), iy = _r(ol || (ol = os`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), ly = _r(rl || (rl = os`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), cy = ne("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), uy = ne(tu, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(sl || (sl = os`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Dt.rippleVisible, ay, Xs, ({
  theme: e
}) => e.transitions.easing.easeInOut, Dt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Dt.child, Dt.childLeaving, iy, Xs, ({
  theme: e
}) => e.transitions.easing.easeInOut, Dt.childPulsate, ly, ({
  theme: e
}) => e.transitions.easing.easeInOut), nu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: a = !1,
    classes: s = {},
    className: i
  } = r, l = ae(r, ry), [c, u] = b.useState([]), d = b.useRef(0), p = b.useRef(null);
  b.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const h = b.useRef(!1), m = Hl(), y = b.useRef(null), f = b.useRef(null), C = b.useCallback((E) => {
    const {
      pulsate: v,
      rippleX: D,
      rippleY: O,
      rippleSize: F,
      cb: _
    } = E;
    u((V) => [...V, /* @__PURE__ */ S.jsx(uy, {
      classes: {
        ripple: ce(s.ripple, Dt.ripple),
        rippleVisible: ce(s.rippleVisible, Dt.rippleVisible),
        ripplePulsate: ce(s.ripplePulsate, Dt.ripplePulsate),
        child: ce(s.child, Dt.child),
        childLeaving: ce(s.childLeaving, Dt.childLeaving),
        childPulsate: ce(s.childPulsate, Dt.childPulsate)
      },
      timeout: Xs,
      pulsate: v,
      rippleX: D,
      rippleY: O,
      rippleSize: F
    }, d.current)]), d.current += 1, p.current = _;
  }, [s]), w = b.useCallback((E = {}, v = {}, D = () => {
  }) => {
    const {
      pulsate: O = !1,
      center: F = a || v.pulsate,
      fakeElement: _ = !1
      // For test purposes
    } = v;
    if ((E == null ? void 0 : E.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (h.current = !0);
    const V = _ ? null : f.current, N = V ? V.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let L, A, R;
    if (F || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      L = Math.round(N.width / 2), A = Math.round(N.height / 2);
    else {
      const {
        clientX: P,
        clientY: M
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      L = Math.round(P - N.left), A = Math.round(M - N.top);
    }
    if (F)
      R = Math.sqrt((2 * N.width ** 2 + N.height ** 2) / 3), R % 2 === 0 && (R += 1);
    else {
      const P = Math.max(Math.abs((V ? V.clientWidth : 0) - L), L) * 2 + 2, M = Math.max(Math.abs((V ? V.clientHeight : 0) - A), A) * 2 + 2;
      R = Math.sqrt(P ** 2 + M ** 2);
    }
    E != null && E.touches ? y.current === null && (y.current = () => {
      C({
        pulsate: O,
        rippleX: L,
        rippleY: A,
        rippleSize: R,
        cb: D
      });
    }, m.start(sy, () => {
      y.current && (y.current(), y.current = null);
    })) : C({
      pulsate: O,
      rippleX: L,
      rippleY: A,
      rippleSize: R,
      cb: D
    });
  }, [a, C, m]), T = b.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), x = b.useCallback((E, v) => {
    if (m.clear(), (E == null ? void 0 : E.type) === "touchend" && y.current) {
      y.current(), y.current = null, m.start(0, () => {
        x(E, v);
      });
      return;
    }
    y.current = null, u((D) => D.length > 0 ? D.slice(1) : D), p.current = v;
  }, [m]);
  return b.useImperativeHandle(o, () => ({
    pulsate: T,
    start: w,
    stop: x
  }), [T, w, x]), /* @__PURE__ */ S.jsx(cy, g({
    className: ce(Dt.root, s.root, i),
    ref: f
  }, l, {
    children: /* @__PURE__ */ S.jsx(Ra, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (nu.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
const dy = nu;
function fy(e) {
  return xe("MuiButtonBase", e);
}
const py = ye("MuiButtonBase", ["root", "disabled", "focusVisible"]), hy = py, my = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], gy = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: a
  } = e, i = we({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, fy, a);
  return o && r && (i.root += ` ${r}`), i;
}, by = ne("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${hy.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ou = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: a,
    centerRipple: s = !1,
    children: i,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: h = !1,
    LinkComponent: m = "a",
    onBlur: y,
    onClick: f,
    onContextMenu: C,
    onDragLeave: w,
    onFocus: T,
    onFocusVisible: x,
    onKeyDown: E,
    onKeyUp: v,
    onMouseDown: D,
    onMouseLeave: O,
    onMouseUp: F,
    onTouchEnd: _,
    onTouchMove: V,
    onTouchStart: N,
    tabIndex: L = 0,
    TouchRippleProps: A,
    touchRippleRef: R,
    type: P
  } = r, M = ae(r, my), j = b.useRef(null), $ = b.useRef(null), B = We($, R), {
    isFocusVisibleRef: I,
    onFocus: z,
    onBlur: G,
    ref: X
  } = ql(), [W, q] = b.useState(!1);
  u && W && q(!1), b.useImperativeHandle(a, () => ({
    focusVisible: () => {
      q(!0), j.current.focus();
    }
  }), []);
  const [Z, U] = b.useState(!1);
  b.useEffect(() => {
    U(!0);
  }, []);
  const Q = Z && !d && !u;
  b.useEffect(() => {
    W && h && !d && Z && $.current.pulsate();
  }, [d, h, W, Z]);
  function oe(me, qe, xt = p) {
    return pe((mt) => (qe && qe(mt), !xt && $.current && $.current[me](mt), !0));
  }
  const J = oe("start", D), K = oe("stop", C), Y = oe("stop", w), H = oe("stop", F), se = oe("stop", (me) => {
    W && me.preventDefault(), O && O(me);
  }), fe = oe("start", N), be = oe("stop", _), $e = oe("stop", V), ue = oe("stop", (me) => {
    G(me), I.current === !1 && q(!1), y && y(me);
  }, !1), de = pe((me) => {
    j.current || (j.current = me.currentTarget), z(me), I.current === !0 && (q(!0), x && x(me)), T && T(me);
  }), ee = () => {
    const me = j.current;
    return c && c !== "button" && !(me.tagName === "A" && me.href);
  }, re = b.useRef(!1), he = pe((me) => {
    h && !re.current && W && $.current && me.key === " " && (re.current = !0, $.current.stop(me, () => {
      $.current.start(me);
    })), me.target === me.currentTarget && ee() && me.key === " " && me.preventDefault(), E && E(me), me.target === me.currentTarget && ee() && me.key === "Enter" && !u && (me.preventDefault(), f && f(me));
  }), Te = pe((me) => {
    h && me.key === " " && $.current && W && !me.defaultPrevented && (re.current = !1, $.current.stop(me, () => {
      $.current.pulsate(me);
    })), v && v(me), f && me.target === me.currentTarget && ee() && me.key === " " && !me.defaultPrevented && f(me);
  });
  let ve = c;
  ve === "button" && (M.href || M.to) && (ve = m);
  const Oe = {};
  ve === "button" ? (Oe.type = P === void 0 ? "button" : P, Oe.disabled = u) : (!M.href && !M.to && (Oe.role = "button"), u && (Oe["aria-disabled"] = u));
  const Ye = We(o, X, j);
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    Q && !$.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [Q]);
  const De = g({}, r, {
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: h,
    tabIndex: L,
    focusVisible: W
  }), Ee = gy(De);
  return /* @__PURE__ */ S.jsxs(by, g({
    as: ve,
    className: ce(Ee.root, l),
    ownerState: De,
    onBlur: ue,
    onClick: f,
    onContextMenu: K,
    onFocus: de,
    onKeyDown: he,
    onKeyUp: Te,
    onMouseDown: J,
    onMouseLeave: se,
    onMouseUp: H,
    onDragLeave: Y,
    onTouchEnd: be,
    onTouchMove: $e,
    onTouchStart: fe,
    ref: Ye,
    tabIndex: u ? -1 : L,
    type: P
  }, Oe, M, {
    children: [i, Q ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ S.jsx(dy, g({
        ref: B,
        center: s
      }, A))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (ou.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ht,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ar,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
const Xn = ou;
function yy(e) {
  return xe("MuiIconButton", e);
}
const vy = ye("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), xy = vy, Cy = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], wy = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: a,
    size: s
  } = e, i = {
    root: ["root", o && "disabled", r !== "default" && `color${ie(r)}`, a && `edge${ie(a)}`, `size${ie(s)}`]
  };
  return we(i, yy, t);
}, Ty = ne(Xn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${ie(o.color)}`], o.edge && t[`edge${ie(o.edge)}`], t[`size${ie(o.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var o;
  const r = (o = (e.vars || e).palette) == null ? void 0 : o[t.color];
  return g({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && g({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": g({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${xy.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), ru = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: a = !1,
    children: s,
    className: i,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, p = ae(r, Cy), h = g({}, r, {
    edge: a,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), m = wy(h);
  return /* @__PURE__ */ S.jsx(Ty, g({
    className: ce(m.root, i),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: o
  }, p, {
    ownerState: h,
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (ru.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: cn(n.node, (e) => b.Children.toArray(e.children).some((o) => /* @__PURE__ */ b.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const rs = ru, Ey = Lt(/* @__PURE__ */ S.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Sy = Lt(/* @__PURE__ */ S.jsx("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft"), Py = Lt(/* @__PURE__ */ S.jsx("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight"), Oy = Lt(/* @__PURE__ */ S.jsx("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
Lt(/* @__PURE__ */ S.jsxs(b.Fragment, {
  children: [/* @__PURE__ */ S.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ S.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
Lt(/* @__PURE__ */ S.jsx("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
Lt(/* @__PURE__ */ S.jsxs(b.Fragment, {
  children: [/* @__PURE__ */ S.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ S.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
const Ry = Lt(/* @__PURE__ */ S.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");
function Dy(e) {
  return xe("MuiPickersArrowSwitcher", e);
}
ye("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);
const My = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"], $y = ["ownerState"], ky = ["ownerState"], Iy = ne("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex"
}), Ny = ne("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})(({
  theme: e
}) => ({
  width: e.spacing(3)
})), al = ne(rs, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (e, t) => t.button
})(({
  ownerState: e
}) => g({}, e.hidden && {
  visibility: "hidden"
})), _y = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"]
  }, Dy, t);
}, jy = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i;
  const c = At().direction === "rtl", u = at({
    props: t,
    name: "MuiPickersArrowSwitcher"
  }), {
    children: d,
    className: p,
    slots: h,
    slotProps: m,
    isNextDisabled: y,
    isNextHidden: f,
    onGoToNext: C,
    nextLabel: w,
    isPreviousDisabled: T,
    isPreviousHidden: x,
    onGoToPrevious: E,
    previousLabel: v
  } = u, D = ae(u, My), O = u, F = _y(O), _ = {
    isDisabled: y,
    isHidden: f,
    goTo: C,
    label: w
  }, V = {
    isDisabled: T,
    isHidden: x,
    goTo: E,
    label: v
  }, N = (r = h == null ? void 0 : h.previousIconButton) != null ? r : al, L = ot({
    elementType: N,
    externalSlotProps: m == null ? void 0 : m.previousIconButton,
    additionalProps: {
      size: "medium",
      title: V.label,
      "aria-label": V.label,
      disabled: V.isDisabled,
      edge: "end",
      onClick: V.goTo
    },
    ownerState: g({}, O, {
      hidden: V.isHidden
    }),
    className: F.button
  }), A = (a = h == null ? void 0 : h.nextIconButton) != null ? a : al, R = ot({
    elementType: A,
    externalSlotProps: m == null ? void 0 : m.nextIconButton,
    additionalProps: {
      size: "medium",
      title: _.label,
      "aria-label": _.label,
      disabled: _.isDisabled,
      edge: "start",
      onClick: _.goTo
    },
    ownerState: g({}, O, {
      hidden: _.isHidden
    }),
    className: F.button
  }), P = (s = h == null ? void 0 : h.leftArrowIcon) != null ? s : Sy, M = ot({
    elementType: P,
    externalSlotProps: m == null ? void 0 : m.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), j = ae(M, $y), $ = (i = h == null ? void 0 : h.rightArrowIcon) != null ? i : Py, B = ot({
    elementType: $,
    externalSlotProps: m == null ? void 0 : m.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), I = ae(B, ky);
  return /* @__PURE__ */ S.jsxs(Iy, g({
    ref: o,
    className: ce(F.root, p),
    ownerState: O
  }, D, {
    children: [/* @__PURE__ */ S.jsx(N, g({}, L, {
      children: c ? /* @__PURE__ */ S.jsx($, g({}, I)) : /* @__PURE__ */ S.jsx(P, g({}, j))
    })), d ? /* @__PURE__ */ S.jsx(Pn, {
      variant: "subtitle1",
      component: "span",
      children: d
    }) : /* @__PURE__ */ S.jsx(Ny, {
      className: F.spacer,
      ownerState: O
    }), /* @__PURE__ */ S.jsx(A, g({}, R, {
      children: c ? /* @__PURE__ */ S.jsx(P, g({}, j)) : /* @__PURE__ */ S.jsx($, g({}, I))
    }))]
  }));
});
function Ay(e) {
  return xe("MuiDialogContent", e);
}
ye("MuiDialogContent", ["root", "dividers"]);
const Fy = ye("MuiDialogTitle", ["root"]), Vy = Fy, Ly = ["className", "dividers"], By = (e) => {
  const {
    classes: t,
    dividers: o
  } = e;
  return we({
    root: ["root", o && "dividers"]
  }, Ay, t);
}, Wy = ne("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.dividers && t.dividers];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, t.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(e.vars || e).palette.divider}`,
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {
  [`.${Vy.root} + &`]: {
    paddingTop: 0
  }
})), su = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: a,
    dividers: s = !1
  } = r, i = ae(r, Ly), l = g({}, r, {
    dividers: s
  }), c = By(l);
  return /* @__PURE__ */ S.jsx(Wy, g({
    className: ce(c.root, a),
    ownerState: l,
    ref: o
  }, i));
});
process.env.NODE_ENV !== "production" && (su.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const zy = su, au = (e) => e.scrollTop;
function Rr(e, t) {
  var o, r;
  const {
    timeout: a,
    easing: s,
    style: i = {}
  } = e;
  return {
    duration: (o = i.transitionDuration) != null ? o : typeof a == "number" ? a : a[t.mode] || 0,
    easing: (r = i.transitionTimingFunction) != null ? r : typeof s == "object" ? s[t.mode] : s,
    delay: i.transitionDelay
  };
}
const Uy = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Yy = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, iu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = At(), a = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: i = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: h,
    onExit: m,
    onExited: y,
    onExiting: f,
    style: C,
    timeout: w = a,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: T = ns
  } = t, x = ae(t, Uy), E = b.useRef(null), v = We(E, Wo(l), o), D = (R) => (P) => {
    if (R) {
      const M = E.current;
      P === void 0 ? R(M) : R(M, P);
    }
  }, O = D(h), F = D((R, P) => {
    au(R);
    const M = Rr({
      style: C,
      timeout: w,
      easing: c
    }, {
      mode: "enter"
    });
    R.style.webkitTransition = r.transitions.create("opacity", M), R.style.transition = r.transitions.create("opacity", M), d && d(R, P);
  }), _ = D(p), V = D(f), N = D((R) => {
    const P = Rr({
      style: C,
      timeout: w,
      easing: c
    }, {
      mode: "exit"
    });
    R.style.webkitTransition = r.transitions.create("opacity", P), R.style.transition = r.transitions.create("opacity", P), m && m(R);
  }), L = D(y), A = (R) => {
    s && s(E.current, R);
  };
  return /* @__PURE__ */ S.jsx(T, g({
    appear: i,
    in: u,
    nodeRef: E,
    onEnter: F,
    onEntered: _,
    onEntering: O,
    onExit: N,
    onExited: L,
    onExiting: V,
    addEndListener: A,
    timeout: w
  }, x, {
    children: (R, P) => /* @__PURE__ */ b.cloneElement(l, g({
      style: g({
        opacity: 0,
        visibility: R === "exited" && !u ? "hidden" : void 0
      }, Yy[R], C, l.props.style),
      ref: v
    }, P))
  }));
});
process.env.NODE_ENV !== "production" && (iu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: jr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
const lo = iu;
function Hy(e) {
  const t = st(e);
  return t.body === e ? an(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Po(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function il(e) {
  return parseInt(an(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function qy(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function ll(e, t, o, r, a) {
  const s = [t, o, ...r];
  [].forEach.call(e.children, (i) => {
    const l = s.indexOf(i) === -1, c = !qy(i);
    l && c && Po(i, a);
  });
}
function ks(e, t) {
  let o = -1;
  return e.some((r, a) => t(r) ? (o = a, !0) : !1), o;
}
function Ky(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Hy(r)) {
      const i = Kl(st(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${il(r) + i}px`;
      const l = st(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${il(c) + i}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = st(r).body;
    else {
      const i = r.parentElement, l = an(r);
      s = (i == null ? void 0 : i.nodeName) === "HTML" && l.getComputedStyle(i).overflowY === "scroll" ? i : r;
    }
    o.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: s,
      el: i,
      property: l
    }) => {
      s ? i.style.setProperty(l, s) : i.style.removeProperty(l);
    });
  };
}
function Gy(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class Xy {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Po(t.modalRef, !1);
    const a = Gy(o);
    ll(o, t.mount, t.modalRef, a, !0);
    const s = ks(this.containers, (i) => i.container === o);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: a
    }), r);
  }
  mount(t, o) {
    const r = ks(this.containers, (s) => s.modals.indexOf(t) !== -1), a = this.containers[r];
    a.restore || (a.restore = Ky(a, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const a = ks(this.containers, (i) => i.modals.indexOf(t) !== -1), s = this.containers[a];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Po(t.modalRef, o), ll(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(a, 1);
    else {
      const i = s.modals[s.modals.length - 1];
      i.modalRef && Po(i.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Qy = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Zy(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Jy(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function ev(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Jy(e));
}
function tv(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(Qy)).forEach((r, a) => {
    const s = Zy(r);
    s === -1 || !ev(r) || (s === 0 ? t.push(r) : o.push({
      documentOrder: a,
      tabIndex: s,
      node: r
    }));
  }), o.sort((r, a) => r.tabIndex === a.tabIndex ? r.documentOrder - a.documentOrder : r.tabIndex - a.tabIndex).map((r) => r.node).concat(t);
}
function nv() {
  return !0;
}
function Ao(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: a = !1,
    getTabbable: s = tv,
    isEnabled: i = nv,
    open: l
  } = e, c = b.useRef(!1), u = b.useRef(null), d = b.useRef(null), p = b.useRef(null), h = b.useRef(null), m = b.useRef(!1), y = b.useRef(null), f = We(Wo(t), y), C = b.useRef(null);
  b.useEffect(() => {
    !l || !y.current || (m.current = !o);
  }, [o, l]), b.useEffect(() => {
    if (!l || !y.current)
      return;
    const x = st(y.current);
    return y.current.contains(x.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), m.current && y.current.focus()), () => {
      a || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), b.useEffect(() => {
    if (!l || !y.current)
      return;
    const x = st(y.current), E = (O) => {
      C.current = O, !(r || !i() || O.key !== "Tab") && x.activeElement === y.current && O.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, v = () => {
      const O = y.current;
      if (O === null)
        return;
      if (!x.hasFocus() || !i() || c.current) {
        c.current = !1;
        return;
      }
      if (O.contains(x.activeElement) || r && x.activeElement !== u.current && x.activeElement !== d.current)
        return;
      if (x.activeElement !== h.current)
        h.current = null;
      else if (h.current !== null)
        return;
      if (!m.current)
        return;
      let F = [];
      if ((x.activeElement === u.current || x.activeElement === d.current) && (F = s(y.current)), F.length > 0) {
        var _, V;
        const N = !!((_ = C.current) != null && _.shiftKey && ((V = C.current) == null ? void 0 : V.key) === "Tab"), L = F[0], A = F[F.length - 1];
        typeof L != "string" && typeof A != "string" && (N ? A.focus() : L.focus());
      } else
        O.focus();
    };
    x.addEventListener("focusin", v), x.addEventListener("keydown", E, !0);
    const D = setInterval(() => {
      x.activeElement && x.activeElement.tagName === "BODY" && v();
    }, 50);
    return () => {
      clearInterval(D), x.removeEventListener("focusin", v), x.removeEventListener("keydown", E, !0);
    };
  }, [o, r, a, i, l, s]);
  const w = (x) => {
    p.current === null && (p.current = x.relatedTarget), m.current = !0, h.current = x.target;
    const E = t.props.onFocus;
    E && E(x);
  }, T = (x) => {
    p.current === null && (p.current = x.relatedTarget), m.current = !0;
  };
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(t, {
      ref: f,
      onFocus: w
    }), /* @__PURE__ */ S.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: T,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Ao.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: jr,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Ao["propTypes"] = Wl(Ao.propTypes));
function ov(e) {
  return typeof e == "function" ? e() : e;
}
const Dr = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const {
    children: r,
    container: a,
    disablePortal: s = !1
  } = t, [i, l] = b.useState(null), c = We(/* @__PURE__ */ b.isValidElement(r) ? Wo(r) : null, o);
  if (it(() => {
    s || l(ov(a) || document.body);
  }, [a, s]), it(() => {
    if (i && !s)
      return Cr(o, i), () => {
        Cr(o, null);
      };
  }, [o, i, s]), s) {
    if (/* @__PURE__ */ b.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ b.cloneElement(r, u);
    }
    return /* @__PURE__ */ S.jsx(b.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ S.jsx(b.Fragment, {
    children: i && /* @__PURE__ */ af.createPortal(r, i)
  });
});
process.env.NODE_ENV !== "production" && (Dr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Xt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (Dr["propTypes"] = Wl(Dr.propTypes));
const lu = Dr;
function rv(e) {
  return xe("MuiBackdrop", e);
}
ye("MuiBackdrop", ["root", "invisible"]);
const sv = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], av = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return we({
    root: ["root", o && "invisible"]
  }, rv, t);
}, iv = ne("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => g({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), cu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s;
  const i = Ae({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: p = {},
    invisible: h = !1,
    open: m,
    slotProps: y = {},
    slots: f = {},
    TransitionComponent: C = lo,
    transitionDuration: w
  } = i, T = ae(i, sv), x = g({}, i, {
    component: u,
    invisible: h
  }), E = av(x), v = (r = y.root) != null ? r : p.root;
  return /* @__PURE__ */ S.jsx(C, g({
    in: m,
    timeout: w
  }, T, {
    children: /* @__PURE__ */ S.jsx(iv, g({
      "aria-hidden": !0
    }, v, {
      as: (a = (s = f.root) != null ? s : d.Root) != null ? a : u,
      className: ce(E.root, c, v == null ? void 0 : v.className),
      ownerState: g({}, x, v == null ? void 0 : v.ownerState),
      classes: E,
      ref: o,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (cu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
const uu = cu;
function lv(e) {
  return typeof e == "function" ? e() : e;
}
function cv(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const uv = new Xy();
function dv(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: a = uv,
    closeAfterTransition: s = !1,
    onTransitionEnter: i,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: p
  } = e, h = b.useRef({}), m = b.useRef(null), y = b.useRef(null), f = We(y, p), [C, w] = b.useState(!d), T = cv(c);
  let x = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (x = !1);
  const E = () => st(m.current), v = () => (h.current.modalRef = y.current, h.current.mount = m.current, h.current), D = () => {
    a.mount(v(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, O = pe(() => {
    const M = lv(t) || E().body;
    a.add(v(), M), y.current && D();
  }), F = b.useCallback(() => a.isTopModal(v()), [a]), _ = pe((M) => {
    m.current = M, M && (d && F() ? D() : y.current && Po(y.current, x));
  }), V = b.useCallback(() => {
    a.remove(v(), x);
  }, [x, a]);
  b.useEffect(() => () => {
    V();
  }, [V]), b.useEffect(() => {
    d ? O() : (!T || !s) && V();
  }, [d, V, T, s, O]);
  const N = (M) => (j) => {
    var $;
    ($ = M.onKeyDown) == null || $.call(M, j), !(j.key !== "Escape" || j.which === 229 || // Wait until IME is settled.
    !F()) && (o || (j.stopPropagation(), u && u(j, "escapeKeyDown")));
  }, L = (M) => (j) => {
    var $;
    ($ = M.onClick) == null || $.call(M, j), j.target === j.currentTarget && u && u(j, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const j = tc(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const $ = g({}, j, M);
      return g({
        role: "presentation"
      }, $, {
        onKeyDown: N($),
        ref: f
      });
    },
    getBackdropProps: (M = {}) => {
      const j = M;
      return g({
        "aria-hidden": !0
      }, j, {
        onClick: L(j),
        open: d
      });
    },
    getTransitionProps: () => {
      const M = () => {
        w(!1), i && i();
      }, j = () => {
        w(!0), l && l(), s && V();
      };
      return {
        onEnter: Bs(M, c == null ? void 0 : c.props.onEnter),
        onExited: Bs(j, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: f,
    portalRef: _,
    isTopModal: F,
    exited: C,
    hasTransition: T
  };
}
function fv(e) {
  return xe("MuiModal", e);
}
ye("MuiModal", ["root", "hidden", "backdrop"]);
const pv = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], hv = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return we({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, fv, r);
}, mv = ne("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), gv = ne(uu, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), du = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i, l, c;
  const u = Ae({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = gv,
    BackdropProps: p,
    className: h,
    closeAfterTransition: m = !1,
    children: y,
    container: f,
    component: C,
    components: w = {},
    componentsProps: T = {},
    disableAutoFocus: x = !1,
    disableEnforceFocus: E = !1,
    disableEscapeKeyDown: v = !1,
    disablePortal: D = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: F = !1,
    hideBackdrop: _ = !1,
    keepMounted: V = !1,
    onBackdropClick: N,
    open: L,
    slotProps: A,
    slots: R
    // eslint-disable-next-line react/prop-types
  } = u, P = ae(u, pv), M = g({}, u, {
    closeAfterTransition: m,
    disableAutoFocus: x,
    disableEnforceFocus: E,
    disableEscapeKeyDown: v,
    disablePortal: D,
    disableRestoreFocus: O,
    disableScrollLock: F,
    hideBackdrop: _,
    keepMounted: V
  }), {
    getRootProps: j,
    getBackdropProps: $,
    getTransitionProps: B,
    portalRef: I,
    isTopModal: z,
    exited: G,
    hasTransition: X
  } = dv(g({}, M, {
    rootRef: o
  })), W = g({}, M, {
    exited: G
  }), q = hv(W), Z = {};
  if (y.props.tabIndex === void 0 && (Z.tabIndex = "-1"), X) {
    const {
      onEnter: H,
      onExited: se
    } = B();
    Z.onEnter = H, Z.onExited = se;
  }
  const U = (r = (a = R == null ? void 0 : R.root) != null ? a : w.Root) != null ? r : mv, Q = (s = (i = R == null ? void 0 : R.backdrop) != null ? i : w.Backdrop) != null ? s : d, oe = (l = A == null ? void 0 : A.root) != null ? l : T.root, J = (c = A == null ? void 0 : A.backdrop) != null ? c : T.backdrop, K = Cn({
    elementType: U,
    externalSlotProps: oe,
    externalForwardedProps: P,
    getSlotProps: j,
    additionalProps: {
      ref: o,
      as: C
    },
    ownerState: W,
    className: ce(h, oe == null ? void 0 : oe.className, q == null ? void 0 : q.root, !W.open && W.exited && (q == null ? void 0 : q.hidden))
  }), Y = Cn({
    elementType: Q,
    externalSlotProps: J,
    additionalProps: p,
    getSlotProps: (H) => $(g({}, H, {
      onClick: (se) => {
        N && N(se), H != null && H.onClick && H.onClick(se);
      }
    })),
    className: ce(J == null ? void 0 : J.className, p == null ? void 0 : p.className, q == null ? void 0 : q.backdrop),
    ownerState: W
  });
  return !V && !L && (!X || G) ? null : /* @__PURE__ */ S.jsx(lu, {
    ref: I,
    container: f,
    disablePortal: D,
    children: /* @__PURE__ */ S.jsxs(U, g({}, K, {
      children: [!_ && d ? /* @__PURE__ */ S.jsx(Q, g({}, Y)) : null, /* @__PURE__ */ S.jsx(Ao, {
        disableEnforceFocus: E,
        disableAutoFocus: x,
        disableRestoreFocus: O,
        isEnabled: z,
        open: L,
        children: /* @__PURE__ */ b.cloneElement(y, Z)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (du.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: jr.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Xt, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const fu = du;
function bv(e) {
  return xe("MuiPaper", e);
}
ye("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const yv = ["className", "component", "elevation", "square", "variant"], vv = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: a
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return we(s, bv, a);
}, xv = ne("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  return g({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && g({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Xe("#fff", Wi(t.elevation))}, ${Xe("#fff", Wi(t.elevation))})`
  }, e.vars && {
    backgroundImage: (o = e.vars.overlays) == null ? void 0 : o[t.elevation]
  }));
}), pu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiPaper"
  }), {
    className: a,
    component: s = "div",
    elevation: i = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ae(r, yv), d = g({}, r, {
    component: s,
    elevation: i,
    square: l,
    variant: c
  }), p = vv(d);
  return process.env.NODE_ENV !== "production" && At().shadows[i] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${i}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${i}]\` is defined.`].join(`
`)), /* @__PURE__ */ S.jsx(xv, g({
    as: s,
    ownerState: d,
    className: ce(p.root, a),
    ref: o
  }, u));
});
process.env.NODE_ENV !== "production" && (pu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: cn(Ql, (e) => {
    const {
      elevation: t,
      variant: o
    } = e;
    return t > 0 && o === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${o}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
const ss = pu;
function Cv(e) {
  return xe("MuiDialog", e);
}
const wv = ye("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Oo = wv, hu = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (hu.displayName = "DialogContext");
const Tv = hu, Ev = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], Sv = ne(uu, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), Pv = (e) => {
  const {
    classes: t,
    scroll: o,
    maxWidth: r,
    fullWidth: a,
    fullScreen: s
  } = e, i = {
    root: ["root"],
    container: ["container", `scroll${ie(o)}`],
    paper: ["paper", `paperScroll${ie(o)}`, `paperWidth${ie(String(r))}`, a && "paperFullWidth", s && "paperFullScreen"]
  };
  return we(i, Cv, t);
}, Ov = ne(fu, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), Rv = ne("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.container, t[`scroll${ie(o.scroll)}`]];
  }
})(({
  ownerState: e
}) => g({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), Dv = ne(ss, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`scrollPaper${ie(o.scroll)}`], t[`paperWidth${ie(String(o.maxWidth))}`], o.fullWidth && t.paperFullWidth, o.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
  [`&.${Oo.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${Oo.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${Oo.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), mu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiDialog"
  }), a = At(), s = {
    enter: a.transitions.duration.enteringScreen,
    exit: a.transitions.duration.leavingScreen
  }, {
    "aria-describedby": i,
    "aria-labelledby": l,
    BackdropComponent: c,
    BackdropProps: u,
    children: d,
    className: p,
    disableEscapeKeyDown: h = !1,
    fullScreen: m = !1,
    fullWidth: y = !1,
    maxWidth: f = "sm",
    onBackdropClick: C,
    onClick: w,
    onClose: T,
    open: x,
    PaperComponent: E = ss,
    PaperProps: v = {},
    scroll: D = "paper",
    TransitionComponent: O = lo,
    transitionDuration: F = s,
    TransitionProps: _
  } = r, V = ae(r, Ev), N = g({}, r, {
    disableEscapeKeyDown: h,
    fullScreen: m,
    fullWidth: y,
    maxWidth: f,
    scroll: D
  }), L = Pv(N), A = b.useRef(), R = ($) => {
    A.current = $.target === $.currentTarget;
  }, P = ($) => {
    w && w($), A.current && (A.current = null, C && C($), T && T($, "backdropClick"));
  }, M = En(l), j = b.useMemo(() => ({
    titleId: M
  }), [M]);
  return /* @__PURE__ */ S.jsx(Ov, g({
    className: ce(L.root, p),
    closeAfterTransition: !0,
    components: {
      Backdrop: Sv
    },
    componentsProps: {
      backdrop: g({
        transitionDuration: F,
        as: c
      }, u)
    },
    disableEscapeKeyDown: h,
    onClose: T,
    open: x,
    ref: o,
    onClick: P,
    ownerState: N
  }, V, {
    children: /* @__PURE__ */ S.jsx(O, g({
      appear: !0,
      in: x,
      timeout: F,
      role: "presentation"
    }, _, {
      children: /* @__PURE__ */ S.jsx(Rv, {
        className: ce(L.container),
        onMouseDown: R,
        ownerState: N,
        children: /* @__PURE__ */ S.jsx(Dv, g({
          as: E,
          elevation: 24,
          role: "dialog",
          "aria-describedby": i,
          "aria-labelledby": M
        }, v, {
          className: ce(L.paper, v.className),
          ownerState: N,
          children: /* @__PURE__ */ S.jsx(Tv.Provider, {
            value: j,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (mu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": n.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": n.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * @ignore
   */
  BackdropProps: n.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: n.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: n.oneOfType([n.oneOf(["xs", "sm", "md", "lg", "xl", !1]), n.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: n.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: n.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: n.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: n.object
});
const Mv = mu, Fo = 36, as = 2, is = 320, $v = 280, Da = 334, kv = ne(Mv)({
  [`& .${Oo.container}`]: {
    outline: 0
  },
  [`& .${Oo.paper}`]: {
    outline: 0,
    minWidth: is
  }
}), Iv = ne(zy)({
  "&:first-of-type": {
    padding: 0
  }
});
function Nv(e) {
  var t, o;
  const {
    children: r,
    onDismiss: a,
    open: s,
    slots: i,
    slotProps: l
  } = e, c = (t = i == null ? void 0 : i.dialog) != null ? t : kv, u = (o = i == null ? void 0 : i.mobileTransition) != null ? o : lo;
  return /* @__PURE__ */ S.jsx(c, g({
    open: s,
    onClose: a
  }, l == null ? void 0 : l.dialog, {
    TransitionComponent: u,
    TransitionProps: l == null ? void 0 : l.mobileTransition,
    PaperComponent: i == null ? void 0 : i.mobilePaper,
    PaperProps: l == null ? void 0 : l.mobilePaper,
    children: /* @__PURE__ */ S.jsx(Iv, {
      children: r
    })
  }));
}
const _v = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Qs(e) {
  return `scale(${e}, ${e ** 2})`;
}
const jv = {
  entering: {
    opacity: 1,
    transform: Qs(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Is = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ma = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: a = !0,
    children: s,
    easing: i,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: p,
    onExited: h,
    onExiting: m,
    style: y,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = ns
  } = t, w = ae(t, _v), T = Hl(), x = b.useRef(), E = At(), v = b.useRef(null), D = We(v, Wo(s), o), O = (P) => (M) => {
    if (P) {
      const j = v.current;
      M === void 0 ? P(j) : P(j, M);
    }
  }, F = O(d), _ = O((P, M) => {
    au(P);
    const {
      duration: j,
      delay: $,
      easing: B
    } = Rr({
      style: y,
      timeout: f,
      easing: i
    }, {
      mode: "enter"
    });
    let I;
    f === "auto" ? (I = E.transitions.getAutoHeightDuration(P.clientHeight), x.current = I) : I = j, P.style.transition = [E.transitions.create("opacity", {
      duration: I,
      delay: $
    }), E.transitions.create("transform", {
      duration: Is ? I : I * 0.666,
      delay: $,
      easing: B
    })].join(","), c && c(P, M);
  }), V = O(u), N = O(m), L = O((P) => {
    const {
      duration: M,
      delay: j,
      easing: $
    } = Rr({
      style: y,
      timeout: f,
      easing: i
    }, {
      mode: "exit"
    });
    let B;
    f === "auto" ? (B = E.transitions.getAutoHeightDuration(P.clientHeight), x.current = B) : B = M, P.style.transition = [E.transitions.create("opacity", {
      duration: B,
      delay: j
    }), E.transitions.create("transform", {
      duration: Is ? B : B * 0.666,
      delay: Is ? j : j || B * 0.333,
      easing: $
    })].join(","), P.style.opacity = 0, P.style.transform = Qs(0.75), p && p(P);
  }), A = O(h), R = (P) => {
    f === "auto" && T.start(x.current || 0, P), r && r(v.current, P);
  };
  return /* @__PURE__ */ S.jsx(C, g({
    appear: a,
    in: l,
    nodeRef: v,
    onEnter: _,
    onEntered: V,
    onEntering: F,
    onExit: L,
    onExited: A,
    onExiting: N,
    addEndListener: R,
    timeout: f === "auto" ? null : f
  }, w, {
    children: (P, M) => /* @__PURE__ */ b.cloneElement(s, g({
      style: g({
        opacity: 0,
        transform: Qs(0.75),
        visibility: P === "exited" && !l ? "hidden" : void 0
      }, jv[P], y, s.props.style),
      ref: D
    }, M))
  }));
});
process.env.NODE_ENV !== "production" && (Ma.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: jr.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
Ma.muiSupportAuto = !0;
const gu = Ma;
var $a = {};
Object.defineProperty($a, "__esModule", {
  value: !0
});
var bu = $a.default = void 0, Av = Vv(ft), Fv = uc;
function yu(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (yu = function(r) {
    return r ? o : t;
  })(e);
}
function Vv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var o = yu(t);
  if (o && o.has(e))
    return o.get(e);
  var r = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var s in e)
    if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, s) : null;
      i && (i.get || i.set) ? Object.defineProperty(r, s, i) : r[s] = e[s];
    }
  return r.default = e, o && o.set(e, r), r;
}
function Lv(e) {
  return Object.keys(e).length === 0;
}
function Bv(e = null) {
  const t = Av.useContext(Fv.ThemeContext);
  return !t || Lv(t) ? e : t;
}
bu = $a.default = Bv;
var bt = "top", Nt = "bottom", _t = "right", yt = "left", ka = "auto", Xo = [bt, Nt, _t, yt], Qn = "start", Vo = "end", Wv = "clippingParents", vu = "viewport", yo = "popper", zv = "reference", cl = /* @__PURE__ */ Xo.reduce(function(e, t) {
  return e.concat([t + "-" + Qn, t + "-" + Vo]);
}, []), xu = /* @__PURE__ */ [].concat(Xo, [ka]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qn, t + "-" + Vo]);
}, []), Uv = "beforeRead", Yv = "read", Hv = "afterRead", qv = "beforeMain", Kv = "main", Gv = "afterMain", Xv = "beforeWrite", Qv = "write", Zv = "afterWrite", Jv = [Uv, Yv, Hv, qv, Kv, Gv, Xv, Qv, Zv];
function Kt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Et(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Tn(e) {
  var t = Et(e).Element;
  return e instanceof t || e instanceof Element;
}
function $t(e) {
  var t = Et(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ia(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ex(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, a = t.attributes[o] || {}, s = t.elements[o];
    !$t(s) || !Kt(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(i) {
      var l = a[i];
      l === !1 ? s.removeAttribute(i) : s.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function tx(e) {
  var t = e.state, o = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var a = t.elements[r], s = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), l = i.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !$t(a) || !Kt(a) || (Object.assign(a.style, l), Object.keys(s).forEach(function(c) {
        a.removeAttribute(c);
      }));
    });
  };
}
const nx = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ex,
  effect: tx,
  requires: ["computeStyles"]
};
function qt(e) {
  return e.split("-")[0];
}
var xn = Math.max, Mr = Math.min, Zn = Math.round;
function Zs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Cu() {
  return !/^((?!chrome|android).)*safari/i.test(Zs());
}
function Jn(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), a = 1, s = 1;
  t && $t(e) && (a = e.offsetWidth > 0 && Zn(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Zn(r.height) / e.offsetHeight || 1);
  var i = Tn(e) ? Et(e) : window, l = i.visualViewport, c = !Cu() && o, u = (r.left + (c && l ? l.offsetLeft : 0)) / a, d = (r.top + (c && l ? l.offsetTop : 0)) / s, p = r.width / a, h = r.height / s;
  return {
    width: p,
    height: h,
    top: d,
    right: u + p,
    bottom: d + h,
    left: u,
    x: u,
    y: d
  };
}
function Na(e) {
  var t = Jn(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function wu(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Ia(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Jt(e) {
  return Et(e).getComputedStyle(e);
}
function ox(e) {
  return ["table", "td", "th"].indexOf(Kt(e)) >= 0;
}
function fn(e) {
  return ((Tn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ls(e) {
  return Kt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ia(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    fn(e)
  );
}
function ul(e) {
  return !$t(e) || // https://github.com/popperjs/popper-core/issues/837
  Jt(e).position === "fixed" ? null : e.offsetParent;
}
function rx(e) {
  var t = /firefox/i.test(Zs()), o = /Trident/i.test(Zs());
  if (o && $t(e)) {
    var r = Jt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = ls(e);
  for (Ia(a) && (a = a.host); $t(a) && ["html", "body"].indexOf(Kt(a)) < 0; ) {
    var s = Jt(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function Qo(e) {
  for (var t = Et(e), o = ul(e); o && ox(o) && Jt(o).position === "static"; )
    o = ul(o);
  return o && (Kt(o) === "html" || Kt(o) === "body" && Jt(o).position === "static") ? t : o || rx(e) || t;
}
function _a(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ro(e, t, o) {
  return xn(e, Mr(t, o));
}
function sx(e, t, o) {
  var r = Ro(e, t, o);
  return r > o ? o : r;
}
function Tu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Eu(e) {
  return Object.assign({}, Tu(), e);
}
function Su(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var ax = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Eu(typeof t != "number" ? t : Su(t, Xo));
};
function ix(e) {
  var t, o = e.state, r = e.name, a = e.options, s = o.elements.arrow, i = o.modifiersData.popperOffsets, l = qt(o.placement), c = _a(l), u = [yt, _t].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!s || !i)) {
    var p = ax(a.padding, o), h = Na(s), m = c === "y" ? bt : yt, y = c === "y" ? Nt : _t, f = o.rects.reference[d] + o.rects.reference[c] - i[c] - o.rects.popper[d], C = i[c] - o.rects.reference[c], w = Qo(s), T = w ? c === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, x = f / 2 - C / 2, E = p[m], v = T - h[d] - p[y], D = T / 2 - h[d] / 2 + x, O = Ro(E, D, v), F = c;
    o.modifiersData[r] = (t = {}, t[F] = O, t.centerOffset = O - D, t);
  }
}
function lx(e) {
  var t = e.state, o = e.options, r = o.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || wu(t.elements.popper, a) && (t.elements.arrow = a));
}
const cx = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ix,
  effect: lx,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function eo(e) {
  return e.split("-")[1];
}
var ux = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function dx(e, t) {
  var o = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: Zn(o * a) / a || 0,
    y: Zn(r * a) / a || 0
  };
}
function dl(e) {
  var t, o = e.popper, r = e.popperRect, a = e.placement, s = e.variation, i = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, h = i.x, m = h === void 0 ? 0 : h, y = i.y, f = y === void 0 ? 0 : y, C = typeof d == "function" ? d({
    x: m,
    y: f
  }) : {
    x: m,
    y: f
  };
  m = C.x, f = C.y;
  var w = i.hasOwnProperty("x"), T = i.hasOwnProperty("y"), x = yt, E = bt, v = window;
  if (u) {
    var D = Qo(o), O = "clientHeight", F = "clientWidth";
    if (D === Et(o) && (D = fn(o), Jt(D).position !== "static" && l === "absolute" && (O = "scrollHeight", F = "scrollWidth")), D = D, a === bt || (a === yt || a === _t) && s === Vo) {
      E = Nt;
      var _ = p && D === v && v.visualViewport ? v.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        D[O]
      );
      f -= _ - r.height, f *= c ? 1 : -1;
    }
    if (a === yt || (a === bt || a === Nt) && s === Vo) {
      x = _t;
      var V = p && D === v && v.visualViewport ? v.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        D[F]
      );
      m -= V - r.width, m *= c ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: l
  }, u && ux), L = d === !0 ? dx({
    x: m,
    y: f
  }, Et(o)) : {
    x: m,
    y: f
  };
  if (m = L.x, f = L.y, c) {
    var A;
    return Object.assign({}, N, (A = {}, A[E] = T ? "0" : "", A[x] = w ? "0" : "", A.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + f + "px)" : "translate3d(" + m + "px, " + f + "px, 0)", A));
  }
  return Object.assign({}, N, (t = {}, t[E] = T ? f + "px" : "", t[x] = w ? m + "px" : "", t.transform = "", t));
}
function fx(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, a = r === void 0 ? !0 : r, s = o.adaptive, i = s === void 0 ? !0 : s, l = o.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: qt(t.placement),
    variation: eo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, dl(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, dl(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const px = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: fx,
  data: {}
};
var rr = {
  passive: !0
};
function hx(e) {
  var t = e.state, o = e.instance, r = e.options, a = r.scroll, s = a === void 0 ? !0 : a, i = r.resize, l = i === void 0 ? !0 : i, c = Et(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", o.update, rr);
  }), l && c.addEventListener("resize", o.update, rr), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", o.update, rr);
    }), l && c.removeEventListener("resize", o.update, rr);
  };
}
const mx = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: hx,
  data: {}
};
var gx = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function br(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return gx[t];
  });
}
var bx = {
  start: "end",
  end: "start"
};
function fl(e) {
  return e.replace(/start|end/g, function(t) {
    return bx[t];
  });
}
function ja(e) {
  var t = Et(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function Aa(e) {
  return Jn(fn(e)).left + ja(e).scrollLeft;
}
function yx(e, t) {
  var o = Et(e), r = fn(e), a = o.visualViewport, s = r.clientWidth, i = r.clientHeight, l = 0, c = 0;
  if (a) {
    s = a.width, i = a.height;
    var u = Cu();
    (u || !u && t === "fixed") && (l = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: l + Aa(e),
    y: c
  };
}
function vx(e) {
  var t, o = fn(e), r = ja(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = xn(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), i = xn(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -r.scrollLeft + Aa(e), c = -r.scrollTop;
  return Jt(a || o).direction === "rtl" && (l += xn(o.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: i,
    x: l,
    y: c
  };
}
function Fa(e) {
  var t = Jt(e), o = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + a + r);
}
function Pu(e) {
  return ["html", "body", "#document"].indexOf(Kt(e)) >= 0 ? e.ownerDocument.body : $t(e) && Fa(e) ? e : Pu(ls(e));
}
function Do(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = Pu(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = Et(r), i = a ? [s].concat(s.visualViewport || [], Fa(r) ? r : []) : r, l = t.concat(i);
  return a ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Do(ls(i)))
  );
}
function Js(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function xx(e, t) {
  var o = Jn(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function pl(e, t, o) {
  return t === vu ? Js(yx(e, o)) : Tn(t) ? xx(t, o) : Js(vx(fn(e)));
}
function Cx(e) {
  var t = Do(ls(e)), o = ["absolute", "fixed"].indexOf(Jt(e).position) >= 0, r = o && $t(e) ? Qo(e) : e;
  return Tn(r) ? t.filter(function(a) {
    return Tn(a) && wu(a, r) && Kt(a) !== "body";
  }) : [];
}
function wx(e, t, o, r) {
  var a = t === "clippingParents" ? Cx(e) : [].concat(t), s = [].concat(a, [o]), i = s[0], l = s.reduce(function(c, u) {
    var d = pl(e, u, r);
    return c.top = xn(d.top, c.top), c.right = Mr(d.right, c.right), c.bottom = Mr(d.bottom, c.bottom), c.left = xn(d.left, c.left), c;
  }, pl(e, i, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ou(e) {
  var t = e.reference, o = e.element, r = e.placement, a = r ? qt(r) : null, s = r ? eo(r) : null, i = t.x + t.width / 2 - o.width / 2, l = t.y + t.height / 2 - o.height / 2, c;
  switch (a) {
    case bt:
      c = {
        x: i,
        y: t.y - o.height
      };
      break;
    case Nt:
      c = {
        x: i,
        y: t.y + t.height
      };
      break;
    case _t:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case yt:
      c = {
        x: t.x - o.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = a ? _a(a) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case Qn:
        c[u] = c[u] - (t[d] / 2 - o[d] / 2);
        break;
      case Vo:
        c[u] = c[u] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return c;
}
function Lo(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, a = r === void 0 ? e.placement : r, s = o.strategy, i = s === void 0 ? e.strategy : s, l = o.boundary, c = l === void 0 ? Wv : l, u = o.rootBoundary, d = u === void 0 ? vu : u, p = o.elementContext, h = p === void 0 ? yo : p, m = o.altBoundary, y = m === void 0 ? !1 : m, f = o.padding, C = f === void 0 ? 0 : f, w = Eu(typeof C != "number" ? C : Su(C, Xo)), T = h === yo ? zv : yo, x = e.rects.popper, E = e.elements[y ? T : h], v = wx(Tn(E) ? E : E.contextElement || fn(e.elements.popper), c, d, i), D = Jn(e.elements.reference), O = Ou({
    reference: D,
    element: x,
    strategy: "absolute",
    placement: a
  }), F = Js(Object.assign({}, x, O)), _ = h === yo ? F : D, V = {
    top: v.top - _.top + w.top,
    bottom: _.bottom - v.bottom + w.bottom,
    left: v.left - _.left + w.left,
    right: _.right - v.right + w.right
  }, N = e.modifiersData.offset;
  if (h === yo && N) {
    var L = N[a];
    Object.keys(V).forEach(function(A) {
      var R = [_t, Nt].indexOf(A) >= 0 ? 1 : -1, P = [bt, Nt].indexOf(A) >= 0 ? "y" : "x";
      V[A] += L[P] * R;
    });
  }
  return V;
}
function Tx(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, a = o.boundary, s = o.rootBoundary, i = o.padding, l = o.flipVariations, c = o.allowedAutoPlacements, u = c === void 0 ? xu : c, d = eo(r), p = d ? l ? cl : cl.filter(function(y) {
    return eo(y) === d;
  }) : Xo, h = p.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  h.length === 0 && (h = p);
  var m = h.reduce(function(y, f) {
    return y[f] = Lo(e, {
      placement: f,
      boundary: a,
      rootBoundary: s,
      padding: i
    })[qt(f)], y;
  }, {});
  return Object.keys(m).sort(function(y, f) {
    return m[y] - m[f];
  });
}
function Ex(e) {
  if (qt(e) === ka)
    return [];
  var t = br(e);
  return [fl(e), t, fl(t)];
}
function Sx(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = o.mainAxis, s = a === void 0 ? !0 : a, i = o.altAxis, l = i === void 0 ? !0 : i, c = o.fallbackPlacements, u = o.padding, d = o.boundary, p = o.rootBoundary, h = o.altBoundary, m = o.flipVariations, y = m === void 0 ? !0 : m, f = o.allowedAutoPlacements, C = t.options.placement, w = qt(C), T = w === C, x = c || (T || !y ? [br(C)] : Ex(C)), E = [C].concat(x).reduce(function(W, q) {
      return W.concat(qt(q) === ka ? Tx(t, {
        placement: q,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: f
      }) : q);
    }, []), v = t.rects.reference, D = t.rects.popper, O = /* @__PURE__ */ new Map(), F = !0, _ = E[0], V = 0; V < E.length; V++) {
      var N = E[V], L = qt(N), A = eo(N) === Qn, R = [bt, Nt].indexOf(L) >= 0, P = R ? "width" : "height", M = Lo(t, {
        placement: N,
        boundary: d,
        rootBoundary: p,
        altBoundary: h,
        padding: u
      }), j = R ? A ? _t : yt : A ? Nt : bt;
      v[P] > D[P] && (j = br(j));
      var $ = br(j), B = [];
      if (s && B.push(M[L] <= 0), l && B.push(M[j] <= 0, M[$] <= 0), B.every(function(W) {
        return W;
      })) {
        _ = N, F = !1;
        break;
      }
      O.set(N, B);
    }
    if (F)
      for (var I = y ? 3 : 1, z = function(q) {
        var Z = E.find(function(U) {
          var Q = O.get(U);
          if (Q)
            return Q.slice(0, q).every(function(oe) {
              return oe;
            });
        });
        if (Z)
          return _ = Z, "break";
      }, G = I; G > 0; G--) {
        var X = z(G);
        if (X === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[r]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const Px = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Sx,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function hl(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function ml(e) {
  return [bt, _t, Nt, yt].some(function(t) {
    return e[t] >= 0;
  });
}
function Ox(e) {
  var t = e.state, o = e.name, r = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, i = Lo(t, {
    elementContext: "reference"
  }), l = Lo(t, {
    altBoundary: !0
  }), c = hl(i, r), u = hl(l, a, s), d = ml(c), p = ml(u);
  t.modifiersData[o] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": p
  });
}
const Rx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ox
};
function Dx(e, t, o) {
  var r = qt(e), a = [yt, bt].indexOf(r) >= 0 ? -1 : 1, s = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, i = s[0], l = s[1];
  return i = i || 0, l = (l || 0) * a, [yt, _t].indexOf(r) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function Mx(e) {
  var t = e.state, o = e.options, r = e.name, a = o.offset, s = a === void 0 ? [0, 0] : a, i = xu.reduce(function(d, p) {
    return d[p] = Dx(p, t.rects, s), d;
  }, {}), l = i[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
const $x = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Mx
};
function kx(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Ou({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Ix = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: kx,
  data: {}
};
function Nx(e) {
  return e === "x" ? "y" : "x";
}
function _x(e) {
  var t = e.state, o = e.options, r = e.name, a = o.mainAxis, s = a === void 0 ? !0 : a, i = o.altAxis, l = i === void 0 ? !1 : i, c = o.boundary, u = o.rootBoundary, d = o.altBoundary, p = o.padding, h = o.tether, m = h === void 0 ? !0 : h, y = o.tetherOffset, f = y === void 0 ? 0 : y, C = Lo(t, {
    boundary: c,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), w = qt(t.placement), T = eo(t.placement), x = !T, E = _a(w), v = Nx(E), D = t.modifiersData.popperOffsets, O = t.rects.reference, F = t.rects.popper, _ = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, V = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (D) {
    if (s) {
      var A, R = E === "y" ? bt : yt, P = E === "y" ? Nt : _t, M = E === "y" ? "height" : "width", j = D[E], $ = j + C[R], B = j - C[P], I = m ? -F[M] / 2 : 0, z = T === Qn ? O[M] : F[M], G = T === Qn ? -F[M] : -O[M], X = t.elements.arrow, W = m && X ? Na(X) : {
        width: 0,
        height: 0
      }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Tu(), Z = q[R], U = q[P], Q = Ro(0, O[M], W[M]), oe = x ? O[M] / 2 - I - Q - Z - V.mainAxis : z - Q - Z - V.mainAxis, J = x ? -O[M] / 2 + I + Q + U + V.mainAxis : G + Q + U + V.mainAxis, K = t.elements.arrow && Qo(t.elements.arrow), Y = K ? E === "y" ? K.clientTop || 0 : K.clientLeft || 0 : 0, H = (A = N == null ? void 0 : N[E]) != null ? A : 0, se = j + oe - H - Y, fe = j + J - H, be = Ro(m ? Mr($, se) : $, j, m ? xn(B, fe) : B);
      D[E] = be, L[E] = be - j;
    }
    if (l) {
      var $e, ue = E === "x" ? bt : yt, de = E === "x" ? Nt : _t, ee = D[v], re = v === "y" ? "height" : "width", he = ee + C[ue], Te = ee - C[de], ve = [bt, yt].indexOf(w) !== -1, Oe = ($e = N == null ? void 0 : N[v]) != null ? $e : 0, Ye = ve ? he : ee - O[re] - F[re] - Oe + V.altAxis, De = ve ? ee + O[re] + F[re] - Oe - V.altAxis : Te, Ee = m && ve ? sx(Ye, ee, De) : Ro(m ? Ye : he, ee, m ? De : Te);
      D[v] = Ee, L[v] = Ee - ee;
    }
    t.modifiersData[r] = L;
  }
}
const jx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: _x,
  requiresIfExists: ["offset"]
};
function Ax(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Fx(e) {
  return e === Et(e) || !$t(e) ? ja(e) : Ax(e);
}
function Vx(e) {
  var t = e.getBoundingClientRect(), o = Zn(t.width) / e.offsetWidth || 1, r = Zn(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function Lx(e, t, o) {
  o === void 0 && (o = !1);
  var r = $t(t), a = $t(t) && Vx(t), s = fn(t), i = Jn(e, a, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((Kt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fa(s)) && (l = Fx(t)), $t(t) ? (c = Jn(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = Aa(s))), {
    x: i.left + l.scrollLeft - c.x,
    y: i.top + l.scrollTop - c.y,
    width: i.width,
    height: i.height
  };
}
function Bx(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function a(s) {
    o.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function(l) {
      if (!o.has(l)) {
        var c = t.get(l);
        c && a(c);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    o.has(s.name) || a(s);
  }), r;
}
function Wx(e) {
  var t = Bx(e);
  return Jv.reduce(function(o, r) {
    return o.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function zx(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Ux(e) {
  var t = e.reduce(function(o, r) {
    var a = o[r.name];
    return o[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var gl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bl() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Yx(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, a = t.defaultOptions, s = a === void 0 ? gl : a;
  return function(l, c, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gl, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, p = [], h = !1, m = {
      state: d,
      setOptions: function(w) {
        var T = typeof w == "function" ? w(d.options) : w;
        f(), d.options = Object.assign({}, s, d.options, T), d.scrollParents = {
          reference: Tn(l) ? Do(l) : l.contextElement ? Do(l.contextElement) : [],
          popper: Do(c)
        };
        var x = Wx(Ux([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = x.filter(function(E) {
          return E.enabled;
        }), y(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var w = d.elements, T = w.reference, x = w.popper;
          if (bl(T, x)) {
            d.rects = {
              reference: Lx(T, Qo(x), d.options.strategy === "fixed"),
              popper: Na(x)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(V) {
              return d.modifiersData[V.name] = Object.assign({}, V.data);
            });
            for (var E = 0; E < d.orderedModifiers.length; E++) {
              if (d.reset === !0) {
                d.reset = !1, E = -1;
                continue;
              }
              var v = d.orderedModifiers[E], D = v.fn, O = v.options, F = O === void 0 ? {} : O, _ = v.name;
              typeof D == "function" && (d = D({
                state: d,
                options: F,
                name: _,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: zx(function() {
        return new Promise(function(C) {
          m.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        f(), h = !0;
      }
    };
    if (!bl(l, c))
      return m;
    m.setOptions(u).then(function(C) {
      !h && u.onFirstUpdate && u.onFirstUpdate(C);
    });
    function y() {
      d.orderedModifiers.forEach(function(C) {
        var w = C.name, T = C.options, x = T === void 0 ? {} : T, E = C.effect;
        if (typeof E == "function") {
          var v = E({
            state: d,
            name: w,
            instance: m,
            options: x
          }), D = function() {
          };
          p.push(v || D);
        }
      });
    }
    function f() {
      p.forEach(function(C) {
        return C();
      }), p = [];
    }
    return m;
  };
}
var Hx = [mx, Ix, px, nx, $x, Px, jx, cx, Rx], qx = /* @__PURE__ */ Yx({
  defaultModifiers: Hx
});
function Kx(e) {
  return xe("MuiPopper", e);
}
ye("MuiPopper", ["root"]);
const Gx = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], Xx = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Qx(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function $r(e) {
  return typeof e == "function" ? e() : e;
}
function cs(e) {
  return e.nodeType !== void 0;
}
function Zx(e) {
  return !cs(e);
}
const Jx = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"]
  }, Kx, t);
}, e0 = {}, t0 = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r;
  const {
    anchorEl: a,
    children: s,
    direction: i,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: p,
    popperRef: h,
    slotProps: m = {},
    slots: y = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, C = ae(t, Gx), w = b.useRef(null), T = We(w, o), x = b.useRef(null), E = We(x, h), v = b.useRef(E);
  it(() => {
    v.current = E;
  }, [E]), b.useImperativeHandle(h, () => x.current, []);
  const D = Qx(d, i), [O, F] = b.useState(D), [_, V] = b.useState($r(a));
  b.useEffect(() => {
    x.current && x.current.forceUpdate();
  }), b.useEffect(() => {
    a && V($r(a));
  }, [a]), it(() => {
    if (!_ || !u)
      return;
    const P = ($) => {
      F($.placement);
    };
    if (process.env.NODE_ENV !== "production" && _ && cs(_) && _.nodeType === 1) {
      const $ = _.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && $.top === 0 && $.left === 0 && $.right === 0 && $.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let M = [{
      name: "preventOverflow",
      options: {
        altBoundary: l
      }
    }, {
      name: "flip",
      options: {
        altBoundary: l
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: $
      }) => {
        P($);
      }
    }];
    c != null && (M = M.concat(c)), p && p.modifiers != null && (M = M.concat(p.modifiers));
    const j = qx(_, w.current, g({
      placement: D
    }, p, {
      modifiers: M
    }));
    return v.current(j), () => {
      j.destroy(), v.current(null);
    };
  }, [_, l, c, u, p, D]);
  const N = {
    placement: O
  };
  f !== null && (N.TransitionProps = f);
  const L = Jx(t), A = (r = y.root) != null ? r : "div", R = Cn({
    elementType: A,
    externalSlotProps: m.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: T
    },
    ownerState: t,
    className: L.root
  });
  return /* @__PURE__ */ S.jsx(A, g({}, R, {
    children: typeof s == "function" ? s(N) : s
  }));
}), Ru = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: a,
    container: s,
    direction: i = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: p = "bottom",
    popperOptions: h = e0,
    popperRef: m,
    style: y,
    transition: f = !1,
    slotProps: C = {},
    slots: w = {}
  } = t, T = ae(t, Xx), [x, E] = b.useState(!0), v = () => {
    E(!1);
  }, D = () => {
    E(!0);
  };
  if (!c && !d && (!f || x))
    return null;
  let O;
  if (s)
    O = s;
  else if (r) {
    const V = $r(r);
    O = V && cs(V) ? st(V).body : st(null).body;
  }
  const F = !d && c && (!f || x) ? "none" : void 0, _ = f ? {
    in: d,
    onEnter: v,
    onExited: D
  } : void 0;
  return /* @__PURE__ */ S.jsx(lu, {
    disablePortal: l,
    container: O,
    children: /* @__PURE__ */ S.jsx(t0, g({
      anchorEl: r,
      direction: i,
      disablePortal: l,
      modifiers: u,
      ref: o,
      open: f ? !x : d,
      placement: p,
      popperOptions: h,
      popperRef: m,
      slotProps: C,
      slots: w
    }, T, {
      style: g({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: F
      }, y),
      TransitionProps: _,
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ru.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: cn(n.oneOfType([Xt, n.object, n.func]), (e) => {
    if (e.open) {
      const t = $r(e.anchorEl);
      if (t && cs(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Zx(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Xt, n.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: n.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ht,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const n0 = Ru, o0 = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], r0 = ne(n0, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Du = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r;
  const a = bu(), s = Ae({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: l,
    components: c,
    componentsProps: u,
    container: d,
    disablePortal: p,
    keepMounted: h,
    modifiers: m,
    open: y,
    placement: f,
    popperOptions: C,
    popperRef: w,
    transition: T,
    slots: x,
    slotProps: E
  } = s, v = ae(s, o0), D = (r = x == null ? void 0 : x.root) != null ? r : c == null ? void 0 : c.Root, O = g({
    anchorEl: i,
    container: d,
    disablePortal: p,
    keepMounted: h,
    modifiers: m,
    open: y,
    placement: f,
    popperOptions: C,
    popperRef: w,
    transition: T
  }, v);
  return /* @__PURE__ */ S.jsx(r0, g({
    as: l,
    direction: a == null ? void 0 : a.direction,
    slots: {
      root: D
    },
    slotProps: E ?? u
  }, O, {
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (Du.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: n.oneOfType([Xt, n.object, n.func]),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Xt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: ht,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const s0 = Du;
function a0(e) {
  return xe("MuiPickersPopper", e);
}
ye("MuiPickersPopper", ["root", "paper"]);
function i0(e, t) {
  return Array.isArray(t) ? t.every((o) => e.indexOf(o) !== -1) : e.indexOf(t) !== -1;
}
const l0 = (e, t) => (o) => {
  (o.key === "Enter" || o.key === " ") && (e(o), o.preventDefault(), o.stopPropagation()), t && t(o);
}, kr = (e = document) => {
  const t = e.activeElement;
  return t ? t.shadowRoot ? kr(t.shadowRoot) : t : null;
}, c0 = "@media (pointer: fine)", u0 = "@media (prefers-reduced-motion: reduce)", Yn = typeof navigator < "u" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i), yl = Yn && Yn[1] ? parseInt(Yn[1], 10) : null, vl = Yn && Yn[2] ? parseInt(Yn[2], 10) : null, d0 = yl && yl < 10 || vl && vl < 13 || !1, Mu = () => Ic(u0, {
  defaultMatches: !1
}) || d0, f0 = ["PaperComponent", "popperPlacement", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"], p0 = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    paper: ["paper"]
  }, a0, t);
}, h0 = ne(s0, {
  name: "MuiPickersPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  zIndex: e.zIndex.modal
})), m0 = ne(ss, {
  name: "MuiPickersPopper",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  ownerState: e
}) => g({
  outline: 0,
  transformOrigin: "top center"
}, e.placement.includes("top") && {
  transformOrigin: "bottom center"
}));
function g0(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function b0(e, t) {
  const o = b.useRef(!1), r = b.useRef(!1), a = b.useRef(null), s = b.useRef(!1);
  b.useEffect(() => {
    if (!e)
      return;
    function c() {
      s.current = !0;
    }
    return document.addEventListener("mousedown", c, !0), document.addEventListener("touchstart", c, !0), () => {
      document.removeEventListener("mousedown", c, !0), document.removeEventListener("touchstart", c, !0), s.current = !1;
    };
  }, [e]);
  const i = pe((c) => {
    if (!s.current)
      return;
    const u = r.current;
    r.current = !1;
    const d = st(a.current);
    if (!a.current || // is a TouchEvent?
    "clientX" in c && g0(c, d))
      return;
    if (o.current) {
      o.current = !1;
      return;
    }
    let p;
    c.composedPath ? p = c.composedPath().indexOf(a.current) > -1 : p = !d.documentElement.contains(c.target) || a.current.contains(c.target), !p && !u && t(c);
  }), l = () => {
    r.current = !0;
  };
  return b.useEffect(() => {
    if (e) {
      const c = st(a.current), u = () => {
        o.current = !0;
      };
      return c.addEventListener("touchstart", i), c.addEventListener("touchmove", u), () => {
        c.removeEventListener("touchstart", i), c.removeEventListener("touchmove", u);
      };
    }
  }, [e, i]), b.useEffect(() => {
    if (e) {
      const c = st(a.current);
      return c.addEventListener("click", i), () => {
        c.removeEventListener("click", i), r.current = !1;
      };
    }
  }, [e, i]), [a, l, l];
}
const y0 = /* @__PURE__ */ b.forwardRef((e, t) => {
  const {
    PaperComponent: o,
    popperPlacement: r,
    ownerState: a,
    children: s,
    paperSlotProps: i,
    paperClasses: l,
    onPaperClick: c,
    onPaperTouchStart: u
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = e, d = ae(e, f0), p = g({}, a, {
    placement: r
  }), h = ot({
    elementType: o,
    externalSlotProps: i,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref: t
    },
    className: l,
    ownerState: p
  });
  return /* @__PURE__ */ S.jsx(o, g({}, d, h, {
    onClick: (m) => {
      var y;
      c(m), (y = h.onClick) == null || y.call(h, m);
    },
    onTouchStart: (m) => {
      var y;
      u(m), (y = h.onTouchStart) == null || y.call(h, m);
    },
    ownerState: p,
    children: s
  }));
});
function v0(e) {
  var t, o, r, a;
  const s = at({
    props: e,
    name: "MuiPickersPopper"
  }), {
    anchorEl: i,
    children: l,
    containerRef: c = null,
    shouldRestoreFocus: u,
    onBlur: d,
    onDismiss: p,
    open: h,
    role: m,
    placement: y,
    slots: f,
    slotProps: C,
    reduceAnimations: w
  } = s;
  b.useEffect(() => {
    function B(I) {
      h && (I.key === "Escape" || I.key === "Esc") && p();
    }
    return document.addEventListener("keydown", B), () => {
      document.removeEventListener("keydown", B);
    };
  }, [p, h]);
  const T = b.useRef(null);
  b.useEffect(() => {
    m === "tooltip" || u && !u() || (h ? T.current = kr(document) : T.current && T.current instanceof HTMLElement && setTimeout(() => {
      T.current instanceof HTMLElement && T.current.focus();
    }));
  }, [h, m, u]);
  const [x, E, v] = b0(h, d ?? p), D = b.useRef(null), O = We(D, c), F = We(O, x), _ = s, V = p0(_), N = Mu(), L = w ?? N, A = (B) => {
    B.key === "Escape" && (B.stopPropagation(), p());
  }, R = ((t = f == null ? void 0 : f.desktopTransition) != null ? t : L) ? lo : gu, P = (o = f == null ? void 0 : f.desktopTrapFocus) != null ? o : Ao, M = (r = f == null ? void 0 : f.desktopPaper) != null ? r : m0, j = (a = f == null ? void 0 : f.popper) != null ? a : h0, $ = ot({
    elementType: j,
    externalSlotProps: C == null ? void 0 : C.popper,
    additionalProps: {
      transition: !0,
      role: m,
      open: h,
      anchorEl: i,
      placement: y,
      onKeyDown: A
    },
    className: V.root,
    ownerState: s
  });
  return /* @__PURE__ */ S.jsx(j, g({}, $, {
    children: ({
      TransitionProps: B,
      placement: I
    }) => /* @__PURE__ */ S.jsx(P, g({
      open: h,
      disableAutoFocus: !0,
      disableRestoreFocus: !0,
      disableEnforceFocus: m === "tooltip",
      isEnabled: () => !0
    }, C == null ? void 0 : C.desktopTrapFocus, {
      children: /* @__PURE__ */ S.jsx(R, g({}, B, C == null ? void 0 : C.desktopTransition, {
        children: /* @__PURE__ */ S.jsx(y0, {
          PaperComponent: M,
          ownerState: _,
          popperPlacement: I,
          ref: F,
          onPaperClick: E,
          onPaperTouchStart: v,
          paperClasses: V.paper,
          paperSlotProps: C == null ? void 0 : C.desktopPaper,
          children: l
        })
      }))
    }))
  }));
}
function x0(e) {
  return xe("MuiButton", e);
}
const C0 = ye("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), sr = C0, $u = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && ($u.displayName = "ButtonGroupContext");
const w0 = $u, ku = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (ku.displayName = "ButtonGroupButtonContext");
const T0 = ku, E0 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], S0 = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: a,
    variant: s,
    classes: i
  } = e, l = {
    root: ["root", s, `${s}${ie(t)}`, `size${ie(a)}`, `${s}Size${ie(a)}`, `color${ie(t)}`, o && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${ie(a)}`],
    endIcon: ["icon", "endIcon", `iconSize${ie(a)}`]
  }, c = we(l, x0, i);
  return g({}, i, c);
}, Iu = (e) => g({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), P0 = ne(Xn, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${ie(o.color)}`], t[`size${ie(o.size)}`], t[`${o.variant}Size${ie(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r;
  const a = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], s = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return g({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": g({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : s,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": g({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${sr.focusVisible}`]: g({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${sr.disabled}`]: g({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Xe(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (o = (r = e.palette).getContrastText) == null ? void 0 : o.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : a,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${sr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${sr.disabled}`]: {
    boxShadow: "none"
  }
}), O0 = ne("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, t[`iconSize${ie(o.size)}`]];
  }
})(({
  ownerState: e
}) => g({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Iu(e))), R0 = ne("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, t[`iconSize${ie(o.size)}`]];
  }
})(({
  ownerState: e
}) => g({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Iu(e))), Nu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = b.useContext(w0), a = b.useContext(T0), s = Io(r, t), i = Ae({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: p = !1,
    disableElevation: h = !1,
    disableFocusRipple: m = !1,
    endIcon: y,
    focusVisibleClassName: f,
    fullWidth: C = !1,
    size: w = "medium",
    startIcon: T,
    type: x,
    variant: E = "text"
  } = i, v = ae(i, E0), D = g({}, i, {
    color: c,
    component: u,
    disabled: p,
    disableElevation: h,
    disableFocusRipple: m,
    fullWidth: C,
    size: w,
    type: x,
    variant: E
  }), O = S0(D), F = T && /* @__PURE__ */ S.jsx(O0, {
    className: O.startIcon,
    ownerState: D,
    children: T
  }), _ = y && /* @__PURE__ */ S.jsx(R0, {
    className: O.endIcon,
    ownerState: D,
    children: y
  }), V = a || "";
  return /* @__PURE__ */ S.jsxs(P0, g({
    ownerState: D,
    className: ce(r.className, O.root, d, V),
    component: u,
    disabled: p,
    focusRipple: !m,
    focusVisibleClassName: ce(O.focusVisible, f),
    ref: o,
    type: x
  }, v, {
    classes: O,
    children: [F, l, _]
  }));
});
process.env.NODE_ENV !== "production" && (Nu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
const ar = Nu, Va = ({
  timezone: e,
  value: t,
  defaultValue: o,
  onChange: r,
  valueManager: a
}) => {
  var s, i;
  const l = ze(), c = b.useRef(o), u = (s = t ?? c.current) != null ? s : a.emptyValue, d = b.useMemo(() => a.getTimezone(l, u), [l, a, u]), p = pe((f) => d == null ? f : a.setTimezone(l, d, f)), h = (i = e ?? d) != null ? i : "default", m = b.useMemo(() => a.setTimezone(l, h, u), [a, l, h, u]), y = pe((f, ...C) => {
    const w = p(f);
    r == null || r(w, ...C);
  });
  return {
    value: m,
    handleValueChange: y,
    timezone: h
  };
}, La = ({
  name: e,
  timezone: t,
  value: o,
  defaultValue: r,
  onChange: a,
  valueManager: s
}) => {
  const [i, l] = Ft({
    name: e,
    state: "value",
    controlled: o,
    default: r ?? s.emptyValue
  }), c = pe((u, ...d) => {
    l(u), a == null || a(u, ...d);
  });
  return Va({
    timezone: t,
    value: i,
    defaultValue: void 0,
    onChange: c,
    valueManager: s
  });
};
function _u(e, t, o, r) {
  const {
    value: a,
    onError: s
  } = e, i = Sn(), l = b.useRef(r), c = t({
    adapter: i,
    value: a,
    props: e
  });
  return b.useEffect(() => {
    s && !o(c, l.current) && s(c, a), l.current = c;
  }, [o, s, l, c, a]), c;
}
const D0 = (e) => {
  const t = ze(), o = dn(), r = Sn(), s = At().direction === "rtl", {
    valueManager: i,
    fieldValueManager: l,
    valueType: c,
    validator: u,
    internalProps: d,
    internalProps: {
      value: p,
      defaultValue: h,
      referenceDate: m,
      onChange: y,
      format: f,
      formatDensity: C = "dense",
      selectedSections: w,
      onSelectedSectionsChange: T,
      shouldRespectLeadingZeros: x = !1,
      timezone: E
    }
  } = e, {
    timezone: v,
    value: D,
    handleValueChange: O
  } = Va({
    timezone: E,
    value: p,
    defaultValue: h,
    onChange: y,
    valueManager: i
  }), F = b.useMemo(() => xb(t, v), [t, v]), _ = b.useCallback((W, q = null) => l.getSectionsFromValue(t, W, q, s, (Z) => Ki(t, v, o, f, Z, C, x, s)), [l, f, o, s, x, t, C, v]), V = b.useMemo(() => l.getValueStrFromSections(_(i.emptyValue), s), [l, _, i.emptyValue, s]), [N, L] = b.useState(() => {
    const W = _(D);
    Xi(W, c);
    const q = {
      sections: W,
      value: D,
      referenceValue: i.emptyValue,
      tempValueStrAndroid: null
    }, Z = fb(W), U = i.getInitialReferenceValue({
      referenceDate: m,
      value: D,
      utils: t,
      props: d,
      granularity: Z,
      timezone: v
    });
    return g({}, q, {
      referenceValue: U
    });
  }), [A, R] = Ft({
    controlled: w,
    default: null,
    name: "useField",
    state: "selectedSectionIndexes"
  }), P = (W) => {
    R(W), T == null || T(W), L((q) => g({}, q, {
      selectedSectionQuery: null
    }));
  }, M = b.useMemo(() => {
    if (A == null)
      return null;
    if (A === "all")
      return {
        startIndex: 0,
        endIndex: N.sections.length - 1,
        shouldSelectBoundarySelectors: !0
      };
    if (typeof A == "number")
      return {
        startIndex: A,
        endIndex: A
      };
    if (typeof A == "string") {
      const W = N.sections.findIndex((q) => q.type === A);
      return {
        startIndex: W,
        endIndex: W
      };
    }
    return A;
  }, [A, N.sections]), j = ({
    value: W,
    referenceValue: q,
    sections: Z
  }) => {
    if (L((Q) => g({}, Q, {
      sections: Z,
      value: W,
      referenceValue: q,
      tempValueStrAndroid: null
    })), i.areValuesEqual(t, N.value, W))
      return;
    const U = {
      validationError: u({
        adapter: r,
        value: W,
        props: g({}, d, {
          value: W,
          timezone: v
        })
      })
    };
    O(W, U);
  }, $ = (W, q) => {
    const Z = [...N.sections];
    return Z[W] = g({}, Z[W], {
      value: q,
      modified: !0
    }), Hc(Z, s);
  }, B = () => {
    j({
      value: i.emptyValue,
      referenceValue: N.referenceValue,
      sections: _(i.emptyValue)
    });
  }, I = () => {
    if (M == null)
      return;
    const W = N.sections[M.startIndex], q = l.getActiveDateManager(t, N, W), U = q.getSections(N.sections).filter((K) => K.value !== "").length === (W.value === "" ? 0 : 1), Q = $(M.startIndex, ""), oe = U ? null : t.date(/* @__PURE__ */ new Date("")), J = q.getNewValuesFromNewActiveDate(oe);
    (oe != null && !t.isValid(oe)) != (q.date != null && !t.isValid(q.date)) ? j(g({}, J, {
      sections: Q
    })) : L((K) => g({}, K, J, {
      sections: Q,
      tempValueStrAndroid: null
    }));
  }, z = (W) => {
    const q = (Q, oe) => {
      const J = t.parse(Q, f);
      if (J == null || !t.isValid(J))
        return null;
      const K = Ki(t, v, o, f, J, C, x, s);
      return Zi(t, v, J, K, oe, !1);
    }, Z = l.parseValueStr(W, N.referenceValue, q), U = l.updateReferenceValue(t, Z, N.referenceValue);
    j({
      value: Z,
      referenceValue: U,
      sections: _(Z, N.sections)
    });
  }, G = ({
    activeSection: W,
    newSectionValue: q,
    shouldGoToNextSection: Z
  }) => {
    Z && M && M.startIndex < N.sections.length - 1 ? P(M.startIndex + 1) : M && M.startIndex !== M.endIndex && P(M.startIndex);
    const U = l.getActiveDateManager(t, N, W), Q = $(M.startIndex, q), oe = U.getSections(Q), J = yb(t, oe);
    let K, Y;
    if (J != null && t.isValid(J)) {
      const H = Zi(t, v, J, oe, U.referenceDate, !0);
      K = U.getNewValuesFromNewActiveDate(H), Y = !0;
    } else
      K = U.getNewValuesFromNewActiveDate(J), Y = (J != null && !t.isValid(J)) != (U.date != null && !t.isValid(U.date));
    return Y ? j(g({}, K, {
      sections: Q
    })) : L((H) => g({}, H, K, {
      sections: Q,
      tempValueStrAndroid: null
    }));
  }, X = (W) => L((q) => g({}, q, {
    tempValueStrAndroid: W
  }));
  return b.useEffect(() => {
    const W = _(N.value);
    Xi(W, c), L((q) => g({}, q, {
      sections: W
    }));
  }, [f, t.locale]), b.useEffect(() => {
    let W = !1;
    i.areValuesEqual(t, N.value, D) ? W = i.getTimezone(t, N.value) !== i.getTimezone(t, D) : W = !0, W && L((q) => g({}, q, {
      value: D,
      referenceValue: l.updateReferenceValue(t, D, q.referenceValue),
      sections: _(D)
    }));
  }, [D]), {
    state: N,
    selectedSectionIndexes: M,
    setSelectedSections: P,
    clearValue: B,
    clearActiveSection: I,
    updateSectionValue: G,
    updateValueFromValueStr: z,
    setTempAndroidValueStr: X,
    sectionsValueBoundaries: F,
    placeholder: V,
    timezone: v
  };
}, M0 = 5e3, An = (e) => e.saveQuery != null, $0 = ({
  sections: e,
  updateSectionValue: t,
  sectionsValueBoundaries: o,
  setTempAndroidValueStr: r,
  timezone: a
}) => {
  const s = ze(), [i, l] = b.useState(null), c = pe(() => l(null));
  b.useEffect(() => {
    var m;
    i != null && ((m = e[i.sectionIndex]) == null ? void 0 : m.type) !== i.sectionType && c();
  }, [e, i, c]), b.useEffect(() => {
    if (i != null) {
      const m = setTimeout(() => c(), M0);
      return () => {
        window.clearTimeout(m);
      };
    }
    return () => {
    };
  }, [i, c]);
  const u = ({
    keyPressed: m,
    sectionIndex: y
  }, f, C) => {
    const w = m.toLowerCase(), T = e[y];
    if (i != null && (!C || C(i.value)) && i.sectionIndex === y) {
      const E = `${i.value}${w}`, v = f(E, T);
      if (!An(v))
        return l({
          sectionIndex: y,
          value: E,
          sectionType: T.type
        }), v;
    }
    const x = f(w, T);
    return An(x) && !x.saveQuery ? (c(), null) : (l({
      sectionIndex: y,
      value: w,
      sectionType: T.type
    }), An(x) ? null : x);
  }, d = (m) => {
    const y = (w, T, x) => {
      const E = T.filter((v) => v.toLowerCase().startsWith(x));
      return E.length === 0 ? {
        saveQuery: !1
      } : {
        sectionValue: E[0],
        shouldGoToNextSection: E.length === 1
      };
    }, f = (w, T, x, E) => {
      const v = (D) => zc(s, a, T.type, D);
      if (T.contentType === "letter")
        return y(T.format, v(T.format), w);
      if (x && E != null && wa(s, x).contentType === "letter") {
        const D = v(x), O = y(x, D, w);
        return An(O) ? {
          saveQuery: !1
        } : g({}, O, {
          sectionValue: E(O.sectionValue, D)
        });
      }
      return {
        saveQuery: !1
      };
    };
    return u(m, (w, T) => {
      switch (T.type) {
        case "month": {
          const x = (E) => qi(s, E, s.formats.month, T.format);
          return f(w, T, s.formats.month, x);
        }
        case "weekDay": {
          const x = (E, v) => v.indexOf(E).toString();
          return f(w, T, s.formats.weekday, x);
        }
        case "meridiem":
          return f(w, T);
        default:
          return {
            saveQuery: !1
          };
      }
    });
  }, p = (m) => {
    const y = (C, w) => {
      const T = +`${C}`, x = o[w.type]({
        currentDate: null,
        format: w.format,
        contentType: w.contentType
      });
      if (T > x.maximum)
        return {
          saveQuery: !1
        };
      if (T < x.minimum)
        return {
          saveQuery: !0
        };
      const E = +`${C}0` > x.maximum || C.length === x.maximum.toString().length;
      return {
        sectionValue: Yc(s, a, T, x, w),
        shouldGoToNextSection: E
      };
    };
    return u(m, (C, w) => {
      if (w.contentType === "digit" || w.contentType === "digit-with-letter")
        return y(C, w);
      if (w.type === "month") {
        const T = Kc(s, a, "digit", "month", "MM"), x = y(C, {
          type: w.type,
          format: "MM",
          hasLeadingZerosInFormat: T,
          hasLeadingZerosInInput: !0,
          contentType: "digit",
          maxLength: 2
        });
        if (An(x))
          return x;
        const E = qi(s, x.sectionValue, "MM", w.format);
        return g({}, x, {
          sectionValue: E
        });
      }
      if (w.type === "weekDay") {
        const T = y(C, w);
        if (An(T))
          return T;
        const x = es(s, a, w.format)[Number(T.sectionValue) - 1];
        return g({}, T, {
          sectionValue: x
        });
      }
      return {
        saveQuery: !1
      };
    }, (C) => !Number.isNaN(Number(C)));
  };
  return {
    applyCharacterEditing: pe((m) => {
      const y = e[m.sectionIndex], C = m.keyPressed !== " " && !Number.isNaN(Number(m.keyPressed)) ? p(m) : d(m);
      C == null ? r(null) : t({
        activeSection: y,
        newSectionValue: C.sectionValue,
        shouldGoToNextSection: C.shouldGoToNextSection
      });
    }),
    resetCharacterQuery: c
  };
}, k0 = ["onClick", "onKeyDown", "onFocus", "onBlur", "onMouseUp", "onPaste", "error", "clearable", "onClear", "disabled"], I0 = (e) => {
  const t = ze(), {
    state: o,
    selectedSectionIndexes: r,
    setSelectedSections: a,
    clearValue: s,
    clearActiveSection: i,
    updateSectionValue: l,
    updateValueFromValueStr: c,
    setTempAndroidValueStr: u,
    sectionsValueBoundaries: d,
    placeholder: p,
    timezone: h
  } = D0(e), {
    inputRef: m,
    internalProps: y,
    internalProps: {
      readOnly: f = !1,
      unstableFieldRef: C,
      minutesStep: w
    },
    forwardedProps: {
      onClick: T,
      onKeyDown: x,
      onFocus: E,
      onBlur: v,
      onMouseUp: D,
      onPaste: O,
      error: F,
      clearable: _,
      onClear: V,
      disabled: N
    },
    fieldValueManager: L,
    valueManager: A,
    validator: R
  } = e, P = ae(e.forwardedProps, k0), {
    applyCharacterEditing: M,
    resetCharacterQuery: j
  } = $0({
    sections: o.sections,
    updateSectionValue: l,
    sectionsValueBoundaries: d,
    setTempAndroidValueStr: u,
    timezone: h
  }), $ = b.useRef(null), B = We(m, $), I = b.useRef(void 0), G = At().direction === "rtl", X = b.useMemo(() => Tb(o.sections, G), [o.sections, G]), W = () => {
    var ee;
    if (f) {
      a(null);
      return;
    }
    const re = (ee = $.current.selectionStart) != null ? ee : 0;
    let he;
    re <= o.sections[0].startInInput || re >= o.sections[o.sections.length - 1].endInInput ? he = 1 : he = o.sections.findIndex((ve) => ve.startInInput - ve.startSeparator.length > re);
    const Te = he === -1 ? o.sections.length - 1 : he - 1;
    a(Te);
  }, q = pe((ee, ...re) => {
    ee.isDefaultPrevented() || (T == null || T(ee, ...re), W());
  }), Z = pe((ee) => {
    D == null || D(ee), ee.preventDefault();
  }), U = pe((...ee) => {
    E == null || E(...ee);
    const re = $.current;
    window.clearTimeout(I.current), I.current = setTimeout(() => {
      !re || re !== $.current || r != null || f || (// avoid selecting all sections when focusing empty field without value
      re.value.length && Number(re.selectionEnd) - Number(re.selectionStart) === re.value.length ? a("all") : W());
    });
  }), Q = pe((...ee) => {
    v == null || v(...ee), a(null);
  }), oe = pe((ee) => {
    if (O == null || O(ee), f) {
      ee.preventDefault();
      return;
    }
    const re = ee.clipboardData.getData("text");
    if (r && r.startIndex === r.endIndex) {
      const he = o.sections[r.startIndex], Te = /^[a-zA-Z]+$/.test(re), ve = /^[0-9]+$/.test(re), Oe = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(re);
      if (he.contentType === "letter" && Te || he.contentType === "digit" && ve || he.contentType === "digit-with-letter" && Oe) {
        j(), l({
          activeSection: he,
          newSectionValue: re,
          shouldGoToNextSection: !0
        }), ee.preventDefault();
        return;
      }
      if (Te || ve) {
        ee.preventDefault();
        return;
      }
    }
    ee.preventDefault(), j(), c(re);
  }), J = pe((ee) => {
    if (f)
      return;
    const re = ee.target.value;
    if (re === "") {
      j(), s();
      return;
    }
    const he = ee.nativeEvent.data, Te = he && he.length > 1, ve = Te ? he : re, Oe = Ln(ve);
    if (r == null || Te) {
      c(Te ? he : Oe);
      return;
    }
    let Ye;
    if (r.startIndex === 0 && r.endIndex === o.sections.length - 1 && Oe.length === 1)
      Ye = Oe;
    else {
      const De = Ln(L.getValueStrFromSections(o.sections, G));
      let Ee = -1, me = -1;
      for (let lt = 0; lt < De.length; lt += 1)
        Ee === -1 && De[lt] !== Oe[lt] && (Ee = lt), me === -1 && De[De.length - lt - 1] !== Oe[Oe.length - lt - 1] && (me = lt);
      const qe = o.sections[r.startIndex];
      if (Ee < qe.start || De.length - me - 1 > qe.end)
        return;
      const mt = Oe.length - De.length + qe.end - Ln(qe.endSeparator || "").length;
      Ye = Oe.slice(qe.start + Ln(qe.startSeparator || "").length, mt);
    }
    if (Ye.length === 0) {
      wb() ? u(ve) : (j(), i());
      return;
    }
    M({
      keyPressed: Ye,
      sectionIndex: r.startIndex
    });
  }), K = pe((ee) => {
    switch (x == null || x(ee), !0) {
      case (ee.key === "a" && (ee.ctrlKey || ee.metaKey)): {
        ee.preventDefault(), a("all");
        break;
      }
      case ee.key === "ArrowRight": {
        if (ee.preventDefault(), r == null)
          a(X.startIndex);
        else if (r.startIndex !== r.endIndex)
          a(r.endIndex);
        else {
          const re = X.neighbors[r.startIndex].rightIndex;
          re !== null && a(re);
        }
        break;
      }
      case ee.key === "ArrowLeft": {
        if (ee.preventDefault(), r == null)
          a(X.endIndex);
        else if (r.startIndex !== r.endIndex)
          a(r.startIndex);
        else {
          const re = X.neighbors[r.startIndex].leftIndex;
          re !== null && a(re);
        }
        break;
      }
      case ee.key === "Delete": {
        if (ee.preventDefault(), f)
          break;
        r == null || r.startIndex === 0 && r.endIndex === o.sections.length - 1 ? s() : i(), j();
        break;
      }
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(ee.key): {
        if (ee.preventDefault(), f || r == null)
          break;
        const re = o.sections[r.startIndex], he = L.getActiveDateManager(t, o, re), Te = mb(t, h, re, ee.key, d, he.date, {
          minutesStep: w
        });
        l({
          activeSection: re,
          newSectionValue: Te,
          shouldGoToNextSection: !1
        });
        break;
      }
    }
  });
  it(() => {
    if (!$.current)
      return;
    if (r == null) {
      $.current.scrollLeft && ($.current.scrollLeft = 0);
      return;
    }
    const ee = o.sections[r.startIndex], re = o.sections[r.endIndex];
    let he = ee.startInInput, Te = re.endInInput;
    if (r.shouldSelectBoundarySelectors && (he -= ee.startSeparator.length, Te += re.endSeparator.length), he !== $.current.selectionStart || Te !== $.current.selectionEnd) {
      const ve = $.current.scrollTop;
      $.current === kr(document) && $.current.setSelectionRange(he, Te), $.current.scrollTop = ve;
    }
  });
  const Y = _u(g({}, y, {
    value: o.value,
    timezone: h
  }), R, A.isSameError, A.defaultErrorState), H = b.useMemo(() => F !== void 0 ? F : A.hasError(Y), [A, Y, F]);
  b.useEffect(() => {
    !H && !r && j();
  }, [o.referenceValue, r, H]), b.useEffect(() => ($.current && $.current === document.activeElement && a("all"), () => window.clearTimeout(I.current)), []), b.useEffect(() => {
    o.tempValueStrAndroid != null && r != null && (j(), i());
  }, [o.tempValueStrAndroid]);
  const se = b.useMemo(() => {
    var ee;
    return (ee = o.tempValueStrAndroid) != null ? ee : L.getValueStrFromSections(o.sections, G);
  }, [o.sections, L, o.tempValueStrAndroid, G]), fe = b.useMemo(() => r == null || o.sections[r.startIndex].contentType === "letter" ? "text" : "numeric", [r, o.sections]), be = $.current && $.current === kr(document), $e = A.areValuesEqual(t, o.value, A.emptyValue), ue = !be && $e;
  b.useImperativeHandle(C, () => ({
    getSections: () => o.sections,
    getActiveSectionIndex: () => {
      var ee, re, he;
      const Te = (ee = $.current.selectionStart) != null ? ee : 0, ve = (re = $.current.selectionEnd) != null ? re : 0, Oe = !!((he = $.current) != null && he.readOnly);
      if (Te === 0 && ve === 0 || Oe)
        return null;
      const Ye = Te <= o.sections[0].startInInput ? 1 : o.sections.findIndex((De) => De.startInInput - De.startSeparator.length > Te);
      return Ye === -1 ? o.sections.length - 1 : Ye - 1;
    },
    setSelectedSections: (ee) => a(ee)
  }));
  const de = pe((ee, ...re) => {
    var he;
    ee.preventDefault(), V == null || V(ee, ...re), s(), $ == null || (he = $.current) == null || he.focus(), a(0);
  });
  return g({
    placeholder: p,
    autoComplete: "off",
    disabled: !!N
  }, P, {
    value: ue ? "" : se,
    inputMode: fe,
    readOnly: f,
    onClick: q,
    onFocus: U,
    onBlur: Q,
    onPaste: oe,
    onChange: J,
    onKeyDown: K,
    onMouseUp: Z,
    onClear: de,
    error: H,
    ref: B,
    clearable: !!(_ && !$e && !f && !N)
  });
}, N0 = ({
  open: e,
  onOpen: t,
  onClose: o
}) => {
  const r = b.useRef(typeof e == "boolean").current, [a, s] = b.useState(!1);
  b.useEffect(() => {
    if (r) {
      if (typeof e != "boolean")
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      s(e);
    }
  }, [r, e]);
  const i = b.useCallback((l) => {
    r || s(l), l && t && t(), !l && o && o();
  }, [r, t, o]);
  return {
    isOpen: a,
    setIsOpen: i
  };
}, _0 = (e) => {
  const {
    action: t,
    hasChanged: o,
    dateState: r,
    isControlled: a
  } = e, s = !a && !r.hasBeenModifiedSinceMount;
  return t.name === "setValueFromField" ? !0 : t.name === "setValueFromAction" ? s && ["accept", "today", "clear"].includes(t.pickerAction) ? !0 : o(r.lastPublishedValue) : t.name === "setValueFromView" && t.selectionState !== "shallow" || t.name === "setValueFromShortcut" ? s ? !0 : o(r.lastPublishedValue) : !1;
}, j0 = (e) => {
  const {
    action: t,
    hasChanged: o,
    dateState: r,
    isControlled: a,
    closeOnSelect: s
  } = e, i = !a && !r.hasBeenModifiedSinceMount;
  return t.name === "setValueFromAction" ? i && ["accept", "today", "clear"].includes(t.pickerAction) ? !0 : o(r.lastCommittedValue) : t.name === "setValueFromView" && t.selectionState === "finish" && s ? i ? !0 : o(r.lastCommittedValue) : t.name === "setValueFromShortcut" ? t.changeImportance === "accept" && o(r.lastCommittedValue) : !1;
}, A0 = (e) => {
  const {
    action: t,
    closeOnSelect: o
  } = e;
  return t.name === "setValueFromAction" ? !0 : t.name === "setValueFromView" ? t.selectionState === "finish" && o : t.name === "setValueFromShortcut" ? t.changeImportance === "accept" : !1;
}, F0 = ({
  props: e,
  valueManager: t,
  valueType: o,
  wrapperVariant: r,
  validator: a
}) => {
  const {
    onAccept: s,
    onChange: i,
    value: l,
    defaultValue: c,
    closeOnSelect: u = r === "desktop",
    selectedSections: d,
    onSelectedSectionsChange: p,
    timezone: h
  } = e, {
    current: m
  } = b.useRef(c), {
    current: y
  } = b.useRef(l !== void 0);
  process.env.NODE_ENV !== "production" && (b.useEffect(() => {
    y !== (l !== void 0) && console.error([`MUI: A component is changing the ${y ? "" : "un"}controlled value of a picker to be ${y ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled valuefor the lifetime of the component.", "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
  }, [l]), b.useEffect(() => {
    !y && m !== c && console.error(["MUI: A component is changing the defaultValue of an uncontrolled picker after being initialized. To suppress this warning opt to use a controlled value."].join(`
`));
  }, [JSON.stringify(m)]));
  const f = ze(), C = Sn(), [w, T] = Ft({
    controlled: d,
    default: null,
    name: "usePickerValue",
    state: "selectedSections"
  }), {
    isOpen: x,
    setIsOpen: E
  } = N0(e), [v, D] = b.useState(() => {
    let U;
    return l !== void 0 ? U = l : m !== void 0 ? U = m : U = t.emptyValue, {
      draft: U,
      lastPublishedValue: U,
      lastCommittedValue: U,
      lastControlledValue: l,
      hasBeenModifiedSinceMount: !1
    };
  }), {
    timezone: O,
    handleValueChange: F
  } = Va({
    timezone: h,
    value: l,
    defaultValue: m,
    onChange: i,
    valueManager: t
  });
  _u(g({}, e, {
    value: v.draft,
    timezone: O
  }), a, t.isSameError, t.defaultErrorState);
  const _ = pe((U) => {
    const Q = {
      action: U,
      dateState: v,
      hasChanged: (Y) => !t.areValuesEqual(f, U.value, Y),
      isControlled: y,
      closeOnSelect: u
    }, oe = _0(Q), J = j0(Q), K = A0(Q);
    if (D((Y) => g({}, Y, {
      draft: U.value,
      lastPublishedValue: oe ? U.value : Y.lastPublishedValue,
      lastCommittedValue: J ? U.value : Y.lastCommittedValue,
      hasBeenModifiedSinceMount: !0
    })), oe) {
      const H = {
        validationError: U.name === "setValueFromField" ? U.context.validationError : a({
          adapter: C,
          value: U.value,
          props: g({}, e, {
            value: U.value,
            timezone: O
          })
        })
      };
      U.name === "setValueFromShortcut" && U.shortcut != null && (H.shortcut = U.shortcut), F(U.value, H);
    }
    J && s && s(U.value), K && E(!1);
  });
  if (l !== void 0 && (v.lastControlledValue === void 0 || !t.areValuesEqual(f, v.lastControlledValue, l))) {
    const U = t.areValuesEqual(f, v.draft, l);
    D((Q) => g({}, Q, {
      lastControlledValue: l
    }, U ? {} : {
      lastCommittedValue: l,
      lastPublishedValue: l,
      draft: l,
      hasBeenModifiedSinceMount: !0
    }));
  }
  const V = pe(() => {
    _({
      value: t.emptyValue,
      name: "setValueFromAction",
      pickerAction: "clear"
    });
  }), N = pe(() => {
    _({
      value: v.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "accept"
    });
  }), L = pe(() => {
    _({
      value: v.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "dismiss"
    });
  }), A = pe(() => {
    _({
      value: v.lastCommittedValue,
      name: "setValueFromAction",
      pickerAction: "cancel"
    });
  }), R = pe(() => {
    _({
      value: t.getTodayValue(f, O, o),
      name: "setValueFromAction",
      pickerAction: "today"
    });
  }), P = pe(() => E(!0)), M = pe(() => E(!1)), j = pe((U, Q = "partial") => _({
    name: "setValueFromView",
    value: U,
    selectionState: Q
  })), $ = pe((U, Q, oe) => _({
    name: "setValueFromShortcut",
    value: U,
    changeImportance: Q ?? "accept",
    shortcut: oe
  })), B = pe((U, Q) => _({
    name: "setValueFromField",
    value: U,
    context: Q
  })), I = pe((U) => {
    T(U), p == null || p(U);
  }), z = {
    onClear: V,
    onAccept: N,
    onDismiss: L,
    onCancel: A,
    onSetToday: R,
    onOpen: P,
    onClose: M
  }, G = {
    value: v.draft,
    onChange: B,
    selectedSections: w,
    onSelectedSectionsChange: I
  }, X = b.useMemo(() => t.cleanValue(f, v.draft), [f, t, v.draft]), W = {
    value: X,
    onChange: j,
    onClose: M,
    open: x,
    onSelectedSectionsChange: I
  }, Z = g({}, z, {
    value: X,
    onChange: j,
    onSelectShortcut: $,
    isValid: (U) => {
      const Q = a({
        adapter: C,
        value: U,
        props: g({}, e, {
          value: U,
          timezone: O
        })
      });
      return !t.hasError(Q);
    }
  });
  return {
    open: x,
    fieldProps: G,
    viewProps: W,
    layoutProps: Z,
    actions: z
  };
};
let Ns = !1;
function ju({
  onChange: e,
  onViewChange: t,
  openTo: o,
  view: r,
  views: a,
  autoFocus: s,
  focusedView: i,
  onFocusedViewChange: l
}) {
  var c, u;
  process.env.NODE_ENV !== "production" && (Ns || (r != null && !a.includes(r) && (console.warn(`MUI: \`view="${r}"\` is not a valid prop.`, `It must be an element of \`views=["${a.join('", "')}"]\`.`), Ns = !0), r == null && o != null && !a.includes(o) && (console.warn(`MUI: \`openTo="${o}"\` is not a valid prop.`, `It must be an element of \`views=["${a.join('", "')}"]\`.`), Ns = !0)));
  const d = b.useRef(o), p = b.useRef(a), h = b.useRef(a.includes(o) ? o : a[0]), [m, y] = Ft({
    name: "useViews",
    state: "view",
    controlled: r,
    default: h.current
  }), f = b.useRef(s ? m : null), [C, w] = Ft({
    name: "useViews",
    state: "focusedView",
    controlled: i,
    default: f.current
  });
  b.useEffect(() => {
    (d.current && d.current !== o || p.current && p.current.some((_) => !a.includes(_))) && (y(a.includes(o) ? o : a[0]), p.current = a, d.current = o);
  }, [o, y, m, a]);
  const T = a.indexOf(m), x = (c = a[T - 1]) != null ? c : null, E = (u = a[T + 1]) != null ? u : null, v = pe((_, V) => {
    w(V ? _ : (N) => _ === N ? null : N), l == null || l(_, V);
  }), D = pe((_) => {
    v(_, !0), _ !== m && (y(_), t && t(_));
  }), O = pe(() => {
    E && D(E);
  }), F = pe((_, V, N) => {
    const L = V === "finish", A = N ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but we it's not the final view given all `views` -> overall selection state should be `partial`.
      a.indexOf(N) < a.length - 1
    ) : !!E;
    if (e(_, L && A ? "partial" : V, N), N && N !== m) {
      const P = a[a.indexOf(N) + 1];
      P && D(P);
    } else
      L && O();
  });
  return {
    view: m,
    setView: D,
    focusedView: C,
    setFocusedView: v,
    nextView: E,
    previousView: x,
    // Always return up to date default view instead of the initial one (i.e. defaultView.current)
    defaultView: a.includes(o) ? o : a[0],
    goToNextView: O,
    setValueAndGoToNextView: F
  };
}
const V0 = ["className", "sx"], L0 = ({
  props: e,
  propsFromPickerValue: t,
  additionalViewProps: o,
  inputRef: r,
  autoFocusView: a
}) => {
  const {
    onChange: s,
    open: i,
    onSelectedSectionsChange: l,
    onClose: c
  } = t, {
    view: u,
    views: d,
    openTo: p,
    onViewChange: h,
    viewRenderers: m,
    timezone: y
  } = e, f = ae(e, V0), {
    view: C,
    setView: w,
    defaultView: T,
    focusedView: x,
    setFocusedView: E,
    setValueAndGoToNextView: v
  } = ju({
    view: u,
    views: d,
    openTo: p,
    onChange: s,
    onViewChange: h,
    autoFocus: a
  }), {
    hasUIView: D,
    viewModeLookup: O
  } = b.useMemo(() => d.reduce((R, P) => {
    let M;
    return m[P] != null ? M = "UI" : M = "field", R.viewModeLookup[P] = M, M === "UI" && (R.hasUIView = !0), R;
  }, {
    hasUIView: !1,
    viewModeLookup: {}
  }), [m, d]), F = b.useMemo(() => d.reduce((R, P) => m[P] != null && ub(P) ? R + 1 : R, 0), [m, d]), _ = O[C], V = pe(() => _ === "UI"), [N, L] = b.useState(_ === "UI" ? C : null);
  return N !== C && O[C] === "UI" && L(C), it(() => {
    _ === "field" && i && (c(), setTimeout(() => {
      r == null || r.current.focus(), l(C);
    }));
  }, [C]), it(() => {
    if (!i)
      return;
    let R = C;
    _ === "field" && N != null && (R = N), R !== T && O[R] === "UI" && O[T] === "UI" && (R = T), R !== C && w(R), E(R, !0);
  }, [i]), {
    hasUIView: D,
    shouldRestoreFocus: V,
    layoutProps: {
      views: d,
      view: N,
      onViewChange: w
    },
    renderCurrentView: () => {
      if (N == null)
        return null;
      const R = m[N];
      return R == null ? null : R(g({}, f, o, t, {
        views: d,
        timezone: y,
        onChange: v,
        view: N,
        onViewChange: w,
        focusedView: x,
        onFocusedViewChange: E,
        showViewSwitcher: F > 1,
        timeViewsCount: F
      }));
    }
  };
};
function xl() {
  return typeof window > "u" ? "portrait" : window.screen && window.screen.orientation && window.screen.orientation.angle ? Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait" : window.orientation && Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
}
const B0 = (e, t) => {
  const [o, r] = b.useState(xl);
  return it(() => {
    const s = () => {
      r(xl());
    };
    return window.addEventListener("orientationchange", s), () => {
      window.removeEventListener("orientationchange", s);
    };
  }, []), i0(e, ["hours", "minutes", "seconds"]) ? !1 : (t || o) === "landscape";
}, W0 = ({
  props: e,
  propsFromPickerValue: t,
  propsFromPickerViews: o,
  wrapperVariant: r
}) => {
  const {
    orientation: a
  } = e, s = B0(o.views, a);
  return {
    layoutProps: g({}, o, t, {
      isLandscape: s,
      wrapperVariant: r,
      disabled: e.disabled,
      readOnly: e.readOnly
    })
  };
}, z0 = Lc(["The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]), Au = ({
  props: e,
  valueManager: t,
  valueType: o,
  wrapperVariant: r,
  inputRef: a,
  additionalViewProps: s,
  validator: i,
  autoFocusView: l
}) => {
  process.env.NODE_ENV !== "production" && e.renderInput != null && z0();
  const c = F0({
    props: e,
    valueManager: t,
    valueType: o,
    wrapperVariant: r,
    validator: i
  }), u = L0({
    props: e,
    inputRef: a,
    additionalViewProps: s,
    autoFocusView: l,
    propsFromPickerValue: c.viewProps
  }), d = W0({
    props: e,
    wrapperVariant: r,
    propsFromPickerValue: c.layoutProps,
    propsFromPickerViews: u.layoutProps
  });
  return {
    // Picker value
    open: c.open,
    actions: c.actions,
    fieldProps: c.fieldProps,
    // Picker views
    renderCurrentView: u.renderCurrentView,
    hasUIView: u.hasUIView,
    shouldRestoreFocus: u.shouldRestoreFocus,
    // Picker layout
    layoutProps: d.layoutProps
  };
};
function Fu(e) {
  return xe("MuiPickersLayout", e);
}
const _s = ye("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);
function U0(e) {
  return xe("MuiDialogActions", e);
}
ye("MuiDialogActions", ["root", "spacing"]);
const Y0 = ["className", "disableSpacing"], H0 = (e) => {
  const {
    classes: t,
    disableSpacing: o
  } = e;
  return we({
    root: ["root", !o && "spacing"]
  }, U0, t);
}, q0 = ne("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => g({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), Vu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: a,
    disableSpacing: s = !1
  } = r, i = ae(r, Y0), l = g({}, r, {
    disableSpacing: s
  }), c = H0(l);
  return /* @__PURE__ */ S.jsx(q0, g({
    className: ce(c.root, a),
    ownerState: l,
    ref: o
  }, i));
});
process.env.NODE_ENV !== "production" && (Vu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const K0 = Vu, G0 = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function Lu(e) {
  const {
    onAccept: t,
    onClear: o,
    onCancel: r,
    onSetToday: a,
    actions: s
  } = e, i = ae(e, G0), l = dn();
  if (s == null || s.length === 0)
    return null;
  const c = s == null ? void 0 : s.map((u) => {
    switch (u) {
      case "clear":
        return /* @__PURE__ */ S.jsx(ar, {
          onClick: o,
          children: l.clearButtonLabel
        }, u);
      case "cancel":
        return /* @__PURE__ */ S.jsx(ar, {
          onClick: r,
          children: l.cancelButtonLabel
        }, u);
      case "accept":
        return /* @__PURE__ */ S.jsx(ar, {
          onClick: t,
          children: l.okButtonLabel
        }, u);
      case "today":
        return /* @__PURE__ */ S.jsx(ar, {
          onClick: a,
          children: l.todayButtonLabel
        }, u);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ S.jsx(K0, g({}, i, {
    children: c
  }));
}
process.env.NODE_ENV !== "production" && (Lu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default `['cancel', 'accept']` for mobile and `[]` for desktop
   */
  actions: n.arrayOf(n.oneOf(["accept", "cancel", "clear", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: n.bool,
  onAccept: n.func.isRequired,
  onCancel: n.func.isRequired,
  onClear: n.func.isRequired,
  onSetToday: n.func.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const Bu = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Bu.displayName = "ListContext");
const Mo = Bu;
function X0(e) {
  return xe("MuiList", e);
}
ye("MuiList", ["root", "padding", "dense", "subheader"]);
const Q0 = ["children", "className", "component", "dense", "disablePadding", "subheader"], Z0 = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: a
  } = e;
  return we({
    root: ["root", !o && "padding", r && "dense", a && "subheader"]
  }, X0, t);
}, J0 = ne("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disablePadding && t.padding, o.dense && t.dense, o.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => g({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Wu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiList"
  }), {
    children: a,
    className: s,
    component: i = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ae(r, Q0), p = b.useMemo(() => ({
    dense: l
  }), [l]), h = g({}, r, {
    component: i,
    dense: l,
    disablePadding: c
  }), m = Z0(h);
  return /* @__PURE__ */ S.jsx(Mo.Provider, {
    value: p,
    children: /* @__PURE__ */ S.jsxs(J0, g({
      as: i,
      className: ce(m.root, s),
      ref: o,
      ownerState: h
    }, d, {
      children: [u, a]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Wu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const zu = Wu;
function eC(e) {
  return xe("MuiListItem", e);
}
const tC = ye("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), Vn = tC, nC = ye("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), oC = nC;
function rC(e) {
  return xe("MuiListItemSecondaryAction", e);
}
ye("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const sC = ["className"], aC = (e) => {
  const {
    disableGutters: t,
    classes: o
  } = e;
  return we({
    root: ["root", t && "disableGutters"]
  }, rC, o);
}, iC = ne("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => g({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), Ba = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: a
  } = r, s = ae(r, sC), i = b.useContext(Mo), l = g({}, r, {
    disableGutters: i.disableGutters
  }), c = aC(l);
  return /* @__PURE__ */ S.jsx(iC, g({
    className: ce(c.root, a),
    ownerState: l,
    ref: o
  }, s));
});
process.env.NODE_ENV !== "production" && (Ba.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
Ba.muiName = "ListItemSecondaryAction";
const lC = Ba, cC = ["className"], uC = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], dC = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters, !o.disablePadding && t.padding, o.button && t.button, o.hasSecondaryAction && t.secondaryAction];
}, fC = (e) => {
  const {
    alignItems: t,
    button: o,
    classes: r,
    dense: a,
    disabled: s,
    disableGutters: i,
    disablePadding: l,
    divider: c,
    hasSecondaryAction: u,
    selected: d
  } = e;
  return we({
    root: ["root", a && "dense", !i && "gutters", !l && "padding", c && "divider", s && "disabled", o && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", d && "selected"],
    container: ["container"]
  }, eC, r);
}, pC = ne("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: dC
})(({
  theme: e,
  ownerState: t
}) => g({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && g({
  paddingTop: 8,
  paddingBottom: 8
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!t.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!t.secondaryAction && {
  [`& > .${oC.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${Vn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Vn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Xe(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Vn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Xe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Vn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.button && {
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Vn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Xe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Xe(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), hC = ne("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), Uu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: a = "center",
    autoFocus: s = !1,
    button: i = !1,
    children: l,
    className: c,
    component: u,
    components: d = {},
    componentsProps: p = {},
    ContainerComponent: h = "li",
    ContainerProps: {
      className: m
    } = {},
    dense: y = !1,
    disabled: f = !1,
    disableGutters: C = !1,
    disablePadding: w = !1,
    divider: T = !1,
    focusVisibleClassName: x,
    secondaryAction: E,
    selected: v = !1,
    slotProps: D = {},
    slots: O = {}
  } = r, F = ae(r.ContainerProps, cC), _ = ae(r, uC), V = b.useContext(Mo), N = b.useMemo(() => ({
    dense: y || V.dense || !1,
    alignItems: a,
    disableGutters: C
  }), [a, V.dense, y, C]), L = b.useRef(null);
  it(() => {
    s && (L.current ? L.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [s]);
  const A = b.Children.toArray(l), R = A.length && Wn(A[A.length - 1], ["ListItemSecondaryAction"]), P = g({}, r, {
    alignItems: a,
    autoFocus: s,
    button: i,
    dense: N.dense,
    disabled: f,
    disableGutters: C,
    disablePadding: w,
    divider: T,
    hasSecondaryAction: R,
    selected: v
  }), M = fC(P), j = We(L, o), $ = O.root || d.Root || pC, B = D.root || p.root || {}, I = g({
    className: ce(M.root, B.className, c),
    disabled: f
  }, _);
  let z = u || "li";
  return i && (I.component = u || "div", I.focusVisibleClassName = ce(Vn.focusVisible, x), z = Xn), R ? (z = !I.component && !u ? "div" : z, h === "li" && (z === "li" ? z = "div" : I.component === "li" && (I.component = "div")), /* @__PURE__ */ S.jsx(Mo.Provider, {
    value: N,
    children: /* @__PURE__ */ S.jsxs(hC, g({
      as: h,
      className: ce(M.container, m),
      ref: j,
      ownerState: P
    }, F, {
      children: [/* @__PURE__ */ S.jsx($, g({}, B, !qn($) && {
        as: z,
        ownerState: g({}, P, B.ownerState)
      }, I, {
        children: A
      })), A.pop()]
    }))
  })) : /* @__PURE__ */ S.jsx(Mo.Provider, {
    value: N,
    children: /* @__PURE__ */ S.jsxs($, g({}, B, {
      as: z,
      ref: j
    }, !qn($) && {
      ownerState: g({}, P, B.ownerState)
    }, I, {
      children: [A, E && /* @__PURE__ */ S.jsx(lC, {
        children: E
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Uu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: n.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: n.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: n.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: cn(n.node, (e) => {
    const t = b.Children.toArray(e.children);
    let o = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const a = t[r];
      if (Wn(a, ["ListItemSecondaryAction"])) {
        o = r;
        break;
      }
    }
    return o !== -1 && o !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: Ar,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: n.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: n.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: n.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: n.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const mC = Uu, gC = Lt(/* @__PURE__ */ S.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function bC(e) {
  return xe("MuiChip", e);
}
const yC = ye("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Me = yC, vC = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], xC = (e) => {
  const {
    classes: t,
    disabled: o,
    size: r,
    color: a,
    iconColor: s,
    onDelete: i,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, o && "disabled", `size${ie(r)}`, `color${ie(a)}`, l && "clickable", l && `clickableColor${ie(a)}`, i && "deletable", i && `deletableColor${ie(a)}`, `${c}${ie(a)}`],
    label: ["label", `label${ie(r)}`],
    avatar: ["avatar", `avatar${ie(r)}`, `avatarColor${ie(a)}`],
    icon: ["icon", `icon${ie(r)}`, `iconColor${ie(s)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${ie(r)}`, `deleteIconColor${ie(a)}`, `deleteIcon${ie(c)}Color${ie(a)}`]
  };
  return we(u, bC, t);
}, CC = ne("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      color: r,
      iconColor: a,
      clickable: s,
      onDelete: i,
      size: l,
      variant: c
    } = o;
    return [{
      [`& .${Me.avatar}`]: t.avatar
    }, {
      [`& .${Me.avatar}`]: t[`avatar${ie(l)}`]
    }, {
      [`& .${Me.avatar}`]: t[`avatarColor${ie(r)}`]
    }, {
      [`& .${Me.icon}`]: t.icon
    }, {
      [`& .${Me.icon}`]: t[`icon${ie(l)}`]
    }, {
      [`& .${Me.icon}`]: t[`iconColor${ie(a)}`]
    }, {
      [`& .${Me.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Me.deleteIcon}`]: t[`deleteIcon${ie(l)}`]
    }, {
      [`& .${Me.deleteIcon}`]: t[`deleteIconColor${ie(r)}`]
    }, {
      [`& .${Me.deleteIcon}`]: t[`deleteIcon${ie(c)}Color${ie(r)}`]
    }, t.root, t[`size${ie(l)}`], t[`color${ie(r)}`], s && t.clickable, s && r !== "default" && t[`clickableColor${ie(r)})`], i && t.deletable, i && r !== "default" && t[`deletableColor${ie(r)}`], t[c], t[`${c}${ie(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return g({
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${Me.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Me.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : o,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Me.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Me.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Me.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Me.icon}`]: g({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && g({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : o
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${Me.deleteIcon}`]: g({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Xe(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Xe(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : Xe(e.palette[t.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (e.vars || e).palette[t.color].contrastText
      }
    })
  }, t.size === "small" && {
    height: 24
  }, t.color !== "default" && {
    backgroundColor: (e.vars || e).palette[t.color].main,
    color: (e.vars || e).palette[t.color].contrastText
  }, t.onDelete && {
    [`&.${Me.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Xe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${Me.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => g({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Xe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${Me.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Xe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${Me.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => g({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${Me.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Me.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${Me.avatar}`]: {
    marginLeft: 4
  },
  [`& .${Me.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${Me.icon}`]: {
    marginLeft: 4
  },
  [`& .${Me.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${Me.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${Me.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Xe(e.palette[t.color].main, 0.7)}`,
  [`&.${Me.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Xe(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${Me.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Xe(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${Me.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Xe(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), wC = ne("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
    return [t.label, t[`label${ie(r)}`]];
  }
})(({
  ownerState: e
}) => g({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, e.size === "small" && e.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function Cl(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Yu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiChip"
  }), {
    avatar: a,
    className: s,
    clickable: i,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: p,
    label: h,
    onClick: m,
    onDelete: y,
    onKeyDown: f,
    onKeyUp: C,
    size: w = "medium",
    variant: T = "filled",
    tabIndex: x,
    skipFocusWhenDisabled: E = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, v = ae(r, vC), D = b.useRef(null), O = We(D, o), F = (B) => {
    B.stopPropagation(), y && y(B);
  }, _ = (B) => {
    B.currentTarget === B.target && Cl(B) && B.preventDefault(), f && f(B);
  }, V = (B) => {
    B.currentTarget === B.target && (y && Cl(B) ? y(B) : B.key === "Escape" && D.current && D.current.blur()), C && C(B);
  }, N = i !== !1 && m ? !0 : i, L = N || y ? Xn : c || "div", A = g({}, r, {
    component: L,
    disabled: d,
    size: w,
    color: l,
    iconColor: /* @__PURE__ */ b.isValidElement(p) && p.props.color || l,
    onDelete: !!y,
    clickable: N,
    variant: T
  }), R = xC(A), P = L === Xn ? g({
    component: c || "div",
    focusVisibleClassName: R.focusVisible
  }, y && {
    disableRipple: !0
  }) : {};
  let M = null;
  y && (M = u && /* @__PURE__ */ b.isValidElement(u) ? /* @__PURE__ */ b.cloneElement(u, {
    className: ce(u.props.className, R.deleteIcon),
    onClick: F
  }) : /* @__PURE__ */ S.jsx(gC, {
    className: ce(R.deleteIcon),
    onClick: F
  }));
  let j = null;
  a && /* @__PURE__ */ b.isValidElement(a) && (j = /* @__PURE__ */ b.cloneElement(a, {
    className: ce(R.avatar, a.props.className)
  }));
  let $ = null;
  return p && /* @__PURE__ */ b.isValidElement(p) && ($ = /* @__PURE__ */ b.cloneElement(p, {
    className: ce(R.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && j && $ && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ S.jsxs(CC, g({
    as: L,
    className: ce(R.root, s),
    disabled: N && d ? !0 : void 0,
    onClick: m,
    onKeyDown: _,
    onKeyUp: V,
    ref: O,
    tabIndex: E && d ? -1 : x,
    ownerState: A
  }, P, v, {
    children: [j || $, /* @__PURE__ */ S.jsx(wC, {
      className: ce(R.label),
      ownerState: A,
      children: h
    }), M]
  }));
});
process.env.NODE_ENV !== "production" && (Yu.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: n.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Yl,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: n.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: n.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * Icon element.
   */
  icon: n.element,
  /**
   * The content of the component.
   */
  label: n.node,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  tabIndex: n.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined"]), n.string])
});
const TC = Yu, EC = ["items", "changeImportance", "isLandscape", "onChange", "isValid"], SC = ["getValue"];
function Hu(e) {
  const {
    items: t,
    changeImportance: o,
    onChange: r,
    isValid: a
  } = e, s = ae(e, EC);
  if (t == null || t.length === 0)
    return null;
  const i = t.map((l) => {
    let {
      getValue: c
    } = l, u = ae(l, SC);
    const d = c({
      isValid: a
    });
    return {
      label: u.label,
      onClick: () => {
        r(d, o, u);
      },
      disabled: !a(d)
    };
  });
  return /* @__PURE__ */ S.jsx(zu, g({
    dense: !0,
    sx: [{
      maxHeight: Da,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(s.sx) ? s.sx : [s.sx]]
  }, s, {
    children: i.map((l) => /* @__PURE__ */ S.jsx(mC, {
      children: /* @__PURE__ */ S.jsx(TC, g({}, l))
    }, l.label))
  }));
}
process.env.NODE_ENV !== "production" && (Hu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the picker.
   * @default "accept"
   */
  changeImportance: n.oneOf(["accept", "set"]),
  className: n.string,
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  isLandscape: n.bool.isRequired,
  isValid: n.func.isRequired,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default `[]`
   */
  items: n.arrayOf(n.shape({
    getValue: n.func.isRequired,
    label: n.string.isRequired
  })),
  onChange: n.func.isRequired,
  style: n.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function PC(e) {
  return e.view !== null;
}
const OC = (e) => {
  const {
    classes: t,
    isLandscape: o
  } = e;
  return we({
    root: ["root", o && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  }, Fu, t);
}, RC = (e) => {
  var t, o;
  const {
    wrapperVariant: r,
    onAccept: a,
    onClear: s,
    onCancel: i,
    onSetToday: l,
    view: c,
    views: u,
    onViewChange: d,
    value: p,
    onChange: h,
    onSelectShortcut: m,
    isValid: y,
    isLandscape: f,
    disabled: C,
    readOnly: w,
    children: T,
    components: x,
    componentsProps: E,
    slots: v,
    slotProps: D
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = e, O = v ?? Zc(x), F = D ?? E, _ = OC(e), V = (t = O == null ? void 0 : O.actionBar) != null ? t : Lu, N = ot({
    elementType: V,
    externalSlotProps: F == null ? void 0 : F.actionBar,
    additionalProps: {
      onAccept: a,
      onClear: s,
      onCancel: i,
      onSetToday: l,
      actions: r === "desktop" ? [] : ["cancel", "accept"],
      className: _.actionBar
    },
    ownerState: g({}, e, {
      wrapperVariant: r
    })
  }), L = /* @__PURE__ */ S.jsx(V, g({}, N)), A = O == null ? void 0 : O.toolbar, R = ot({
    elementType: A,
    externalSlotProps: F == null ? void 0 : F.toolbar,
    additionalProps: {
      isLandscape: f,
      onChange: h,
      value: p,
      view: c,
      onViewChange: d,
      views: u,
      disabled: C,
      readOnly: w,
      className: _.toolbar
    },
    ownerState: g({}, e, {
      wrapperVariant: r
    })
  }), P = PC(R) && A ? /* @__PURE__ */ S.jsx(A, g({}, R)) : null, M = T, j = O == null ? void 0 : O.tabs, $ = c && j ? /* @__PURE__ */ S.jsx(j, g({
    view: c,
    onViewChange: d,
    className: _.tabs
  }, F == null ? void 0 : F.tabs)) : null, B = (o = O == null ? void 0 : O.shortcuts) != null ? o : Hu, I = ot({
    elementType: B,
    externalSlotProps: F == null ? void 0 : F.shortcuts,
    additionalProps: {
      isValid: y,
      isLandscape: f,
      onChange: m,
      className: _.shortcuts
    },
    ownerState: {
      isValid: y,
      isLandscape: f,
      onChange: m,
      className: _.shortcuts,
      wrapperVariant: r
    }
  }), z = c && B ? /* @__PURE__ */ S.jsx(B, g({}, I)) : null;
  return {
    toolbar: P,
    content: M,
    tabs: $,
    actionBar: L,
    shortcuts: z
  };
}, DC = RC, MC = (e) => {
  const {
    isLandscape: t,
    classes: o
  } = e;
  return we({
    root: ["root", t && "landscape"],
    contentWrapper: ["contentWrapper"]
  }, Fu, o);
}, qu = ne("div", {
  name: "MuiPickersLayout",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => ({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${_s.toolbar}`]: t.isLandscape ? {
    gridColumn: e.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  } : {
    gridColumn: "2 / 4",
    gridRow: 1
  },
  [`.${_s.shortcuts}`]: t.isLandscape ? {
    gridColumn: "2 / 4",
    gridRow: 1
  } : {
    gridColumn: e.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  },
  [`& .${_s.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  }
}));
qu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: n.elementType,
  ownerState: n.shape({
    isLandscape: n.bool.isRequired
  }).isRequired,
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
};
const $C = ne("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper",
  overridesResolver: (e, t) => t.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
}), Wa = function(t) {
  const o = at({
    props: t,
    name: "MuiPickersLayout"
  }), {
    toolbar: r,
    content: a,
    tabs: s,
    actionBar: i,
    shortcuts: l
  } = DC(o), {
    sx: c,
    className: u,
    isLandscape: d,
    ref: p,
    wrapperVariant: h
  } = o, m = o, y = MC(m);
  return /* @__PURE__ */ S.jsxs(qu, {
    ref: p,
    sx: c,
    className: ce(u, y.root),
    ownerState: m,
    children: [d ? l : r, d ? r : l, /* @__PURE__ */ S.jsx($C, {
      className: y.contentWrapper,
      children: h === "desktop" ? /* @__PURE__ */ S.jsxs(b.Fragment, {
        children: [a, s]
      }) : /* @__PURE__ */ S.jsxs(b.Fragment, {
        children: [s, a]
      })
    }), i]
  });
};
process.env.NODE_ENV !== "production" && (Wa.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: n.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: n.object,
  disabled: n.bool,
  isLandscape: n.bool.isRequired,
  isValid: n.func.isRequired,
  onAccept: n.func.isRequired,
  onCancel: n.func.isRequired,
  onChange: n.func.isRequired,
  onClear: n.func.isRequired,
  onClose: n.func.isRequired,
  onDismiss: n.func.isRequired,
  onOpen: n.func.isRequired,
  onSelectShortcut: n.func.isRequired,
  onSetToday: n.func.isRequired,
  onViewChange: n.func.isRequired,
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  readOnly: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.any,
  view: n.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  views: n.arrayOf(n.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired,
  wrapperVariant: n.oneOf(["desktop", "mobile"])
});
function kC(e, {
  disableFuture: t,
  maxDate: o,
  timezone: r
}) {
  const a = ze();
  return b.useMemo(() => {
    const s = a.dateWithTimezone(void 0, r), i = a.startOfMonth(t && a.isBefore(s, o) ? s : o);
    return !a.isAfter(i, e);
  }, [t, o, e, a, r]);
}
function IC(e, {
  disablePast: t,
  minDate: o,
  timezone: r
}) {
  const a = ze();
  return b.useMemo(() => {
    const s = a.dateWithTimezone(void 0, r), i = a.startOfMonth(t && a.isAfter(s, o) ? s : o);
    return !a.isBefore(i, e);
  }, [t, o, e, a, r]);
}
const ea = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"], ta = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableClock", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"], Ku = ["minDateTime", "maxDateTime"], NC = [...ea, ...ta, ...Ku], Gu = (e) => NC.reduce((t, o) => (e.hasOwnProperty(o) && (t[o] = e[o]), t), {}), _C = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "readOnly", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef"], jC = (e, t) => {
  const o = g({}, e), r = {}, a = (s) => {
    o.hasOwnProperty(s) && (r[s] = o[s], delete o[s]);
  };
  return _C.forEach(a), t === "date" ? ea.forEach(a) : t === "time" ? ta.forEach(a) : t === "date-time" && (ea.forEach(a), ta.forEach(a), Ku.forEach(a)), {
    forwardedProps: o,
    internalProps: r
  };
}, us = ({
  props: e,
  value: t,
  adapter: o
}) => {
  if (t === null)
    return null;
  const {
    shouldDisableDate: r,
    shouldDisableMonth: a,
    shouldDisableYear: s,
    disablePast: i,
    disableFuture: l,
    timezone: c
  } = e, u = o.utils.dateWithTimezone(void 0, c), d = It(o.utils, e.minDate, o.defaultDates.minDate), p = It(o.utils, e.maxDate, o.defaultDates.maxDate);
  switch (!0) {
    case !o.utils.isValid(t):
      return "invalidDate";
    case !!(r && r(t)):
      return "shouldDisableDate";
    case !!(a && a(t)):
      return "shouldDisableMonth";
    case !!(s && s(t)):
      return "shouldDisableYear";
    case !!(l && o.utils.isAfterDay(t, u)):
      return "disableFuture";
    case !!(i && o.utils.isBeforeDay(t, u)):
      return "disablePast";
    case !!(d && o.utils.isBeforeDay(t, d)):
      return "minDate";
    case !!(p && o.utils.isAfterDay(t, p)):
      return "maxDate";
    default:
      return null;
  }
};
function AC(e) {
  return xe("MuiPickersDay", e);
}
const mn = ye("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]), FC = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"], VC = (e) => {
  const {
    selected: t,
    disableMargin: o,
    disableHighlightToday: r,
    today: a,
    disabled: s,
    outsideCurrentMonth: i,
    showDaysOutsideCurrentMonth: l,
    classes: c
  } = e, u = i && !l;
  return we({
    root: ["root", t && !u && "selected", s && "disabled", !o && "dayWithMargin", !r && a && "today", i && l && "dayOutsideMonth", u && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  }, AC, c);
}, Xu = ({
  theme: e,
  ownerState: t
}) => g({}, e.typography.caption, {
  width: Fo,
  height: Fo,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.short
  }),
  color: (e.vars || e).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Gn(e.palette.primary.main, e.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})` : Gn(e.palette.primary.main, e.palette.action.focusOpacity),
    [`&.${mn.selected}`]: {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${mn.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    fontWeight: e.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${mn.disabled}:not(.${mn.selected})`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${mn.disabled}&.${mn.selected}`]: {
    opacity: 0.6
  }
}, !t.disableMargin && {
  margin: `0 ${as}px`
}, t.outsideCurrentMonth && t.showDaysOutsideCurrentMonth && {
  color: (e.vars || e).palette.text.secondary
}, !t.disableHighlightToday && t.today && {
  [`&:not(.${mn.selected})`]: {
    border: `1px solid ${(e.vars || e).palette.text.secondary}`
  }
}), Qu = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, !o.disableMargin && t.dayWithMargin, !o.disableHighlightToday && o.today && t.today, !o.outsideCurrentMonth && o.showDaysOutsideCurrentMonth && t.dayOutsideMonth, o.outsideCurrentMonth && !o.showDaysOutsideCurrentMonth && t.hiddenDaySpacingFiller];
}, LC = ne(Xn, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: Qu
})(Xu), BC = ne("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: Qu
})(({
  theme: e,
  ownerState: t
}) => g({}, Xu({
  theme: e,
  ownerState: t
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
})), vo = () => {
}, Zu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiPickersDay"
  }), {
    autoFocus: a = !1,
    className: s,
    day: i,
    disabled: l = !1,
    disableHighlightToday: c = !1,
    disableMargin: u = !1,
    isAnimating: d,
    onClick: p,
    onDaySelect: h,
    onFocus: m = vo,
    onBlur: y = vo,
    onKeyDown: f = vo,
    onMouseDown: C = vo,
    onMouseEnter: w = vo,
    outsideCurrentMonth: T,
    selected: x = !1,
    showDaysOutsideCurrentMonth: E = !1,
    children: v,
    today: D = !1
  } = r, O = ae(r, FC), F = g({}, r, {
    autoFocus: a,
    disabled: l,
    disableHighlightToday: c,
    disableMargin: u,
    selected: x,
    showDaysOutsideCurrentMonth: E,
    today: D
  }), _ = VC(F), V = ze(), N = b.useRef(null), L = We(N, o);
  it(() => {
    a && !l && !d && !T && N.current.focus();
  }, [a, l, d, T]);
  const A = (P) => {
    C(P), T && P.preventDefault();
  }, R = (P) => {
    l || h(i), T && P.currentTarget.focus(), p && p(P);
  };
  return T && !E ? /* @__PURE__ */ S.jsx(BC, {
    className: ce(_.root, _.hiddenDaySpacingFiller, s),
    ownerState: F,
    role: O.role
  }) : /* @__PURE__ */ S.jsx(LC, g({
    className: ce(_.root, s),
    ref: L,
    centerRipple: !0,
    disabled: l,
    tabIndex: x ? 0 : -1,
    onKeyDown: (P) => f(P, i),
    onFocus: (P) => m(P, i),
    onBlur: (P) => y(P, i),
    onMouseEnter: (P) => w(P, i),
    onClick: R,
    onMouseDown: A
  }, O, {
    ownerState: F,
    children: v || V.format(i, "dayOfMonth")
  }));
});
process.env.NODE_ENV !== "production" && (Zu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: n.oneOfType([n.func, n.shape({
    current: n.shape({
      focusVisible: n.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  component: n.elementType,
  /**
   * The date to show.
   */
  day: n.any.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  isAnimating: n.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: n.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: n.bool.isRequired,
  onBlur: n.func,
  onDaySelect: n.func.isRequired,
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  onKeyDown: n.func,
  onMouseEnter: n.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: n.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: n.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: n.bool,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: n.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })])
});
const WC = /* @__PURE__ */ b.memo(Zu), zC = (e) => xe("MuiPickersSlideTransition", e), Ot = ye("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]), UC = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"], YC = (e) => {
  const {
    classes: t,
    slideDirection: o
  } = e, r = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${o}`],
    exitActive: [`slideExitActiveLeft-${o}`]
  };
  return we(r, zC, t);
}, HC = ne(Ra, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, {
    [`.${Ot["slideEnter-left"]}`]: t["slideEnter-left"]
  }, {
    [`.${Ot["slideEnter-right"]}`]: t["slideEnter-right"]
  }, {
    [`.${Ot.slideEnterActive}`]: t.slideEnterActive
  }, {
    [`.${Ot.slideExit}`]: t.slideExit
  }, {
    [`.${Ot["slideExitActiveLeft-left"]}`]: t["slideExitActiveLeft-left"]
  }, {
    [`.${Ot["slideExitActiveLeft-right"]}`]: t["slideExitActiveLeft-right"]
  }]
})(({
  theme: e
}) => {
  const t = e.transitions.create("transform", {
    duration: e.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${Ot["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${Ot["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${Ot.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: t
    },
    [`& .${Ot.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${Ot["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: t,
      zIndex: 0
    },
    [`& .${Ot["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: t,
      zIndex: 0
    }
  };
});
function qC(e) {
  const t = at({
    props: e,
    name: "MuiPickersSlideTransition"
  }), {
    children: o,
    className: r,
    reduceAnimations: a,
    transKey: s
    // extracting `classes` from `other`
  } = t, i = ae(t, UC), l = YC(t), c = At();
  if (a)
    return /* @__PURE__ */ S.jsx("div", {
      className: ce(l.root, r),
      children: o
    });
  const u = {
    exit: l.exit,
    enterActive: l.enterActive,
    enter: l.enter,
    exitActive: l.exitActive
  };
  return /* @__PURE__ */ S.jsx(HC, {
    className: ce(l.root, r),
    childFactory: (d) => /* @__PURE__ */ b.cloneElement(d, {
      classNames: u
    }),
    role: "presentation",
    children: /* @__PURE__ */ S.jsx(Xb, g({
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: c.transitions.duration.complex,
      classNames: u
    }, i, {
      children: o
    }), s)
  });
}
const Ju = ({
  shouldDisableDate: e,
  shouldDisableMonth: t,
  shouldDisableYear: o,
  minDate: r,
  maxDate: a,
  disableFuture: s,
  disablePast: i,
  timezone: l
}) => {
  const c = Sn();
  return b.useCallback((u) => us({
    adapter: c,
    value: u,
    props: {
      shouldDisableDate: e,
      shouldDisableMonth: t,
      shouldDisableYear: o,
      minDate: r,
      maxDate: a,
      disableFuture: s,
      disablePast: i,
      timezone: l
    }
  }) !== null, [c, e, t, o, r, a, s, i, l]);
}, KC = (e) => xe("MuiDayCalendar", e);
ye("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
const GC = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], XC = ["ownerState"], QC = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  }, KC, t);
}, ed = (Fo + as * 2) * 6, ZC = ne("div", {
  name: "MuiDayCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), JC = ne("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (e, t) => t.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), ew = ne(Pn, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel",
  overridesResolver: (e, t) => t.weekDayLabel
})(({
  theme: e
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (e.vars || e).palette.text.secondary
})), tw = ne(Pn, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel",
  overridesResolver: (e, t) => t.weekNumberLabel
})(({
  theme: e
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: e.palette.text.disabled
})), nw = ne(Pn, {
  name: "MuiDayCalendar",
  slot: "WeekNumber",
  overridesResolver: (e, t) => t.weekNumber
})(({
  theme: e
}) => g({}, e.typography.caption, {
  width: Fo,
  height: Fo,
  padding: 0,
  margin: `0 ${as}px`,
  color: e.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
})), ow = ne("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (e, t) => t.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: ed
}), rw = ne(qC, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (e, t) => t.slideTransition
})({
  minHeight: ed
}), sw = ne("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (e, t) => t.monthContainer
})({
  overflow: "hidden"
}), aw = ne("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (e, t) => t.weekContainer
})({
  margin: `${as}px 0`,
  display: "flex",
  justifyContent: "center"
});
function iw(e) {
  var t, o, r;
  let {
    parentProps: a,
    day: s,
    focusableDay: i,
    selectedDays: l,
    isDateDisabled: c,
    currentMonthNumber: u,
    isViewFocused: d
  } = e, p = ae(e, GC);
  const {
    disabled: h,
    disableHighlightToday: m,
    isMonthSwitchingAnimating: y,
    showDaysOutsideCurrentMonth: f,
    components: C,
    componentsProps: w,
    slots: T,
    slotProps: x,
    timezone: E
  } = a, v = ze(), D = ts(E), O = i !== null && v.isSameDay(s, i), F = l.some((j) => v.isSameDay(j, s)), _ = v.isSameDay(s, D), V = (t = (o = T == null ? void 0 : T.day) != null ? o : C == null ? void 0 : C.Day) != null ? t : WC, N = ot({
    elementType: V,
    externalSlotProps: (r = x == null ? void 0 : x.day) != null ? r : w == null ? void 0 : w.day,
    additionalProps: g({
      disableHighlightToday: m,
      showDaysOutsideCurrentMonth: f,
      role: "gridcell",
      isAnimating: y,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": v.toJsDate(s).valueOf()
    }, p),
    ownerState: g({}, a, {
      day: s,
      selected: F
    })
  }), L = ae(N, XC), A = b.useMemo(() => h || c(s), [h, c, s]), R = b.useMemo(() => v.getMonth(s) !== u, [v, s, u]), P = b.useMemo(() => {
    const j = v.startOfMonth(v.setMonth(s, u));
    return f ? v.isSameDay(s, v.startOfWeek(j)) : v.isSameDay(s, j);
  }, [u, s, f, v]), M = b.useMemo(() => {
    const j = v.endOfMonth(v.setMonth(s, u));
    return f ? v.isSameDay(s, v.endOfWeek(j)) : v.isSameDay(s, j);
  }, [u, s, f, v]);
  return /* @__PURE__ */ S.jsx(V, g({}, L, {
    day: s,
    disabled: A,
    autoFocus: d && O,
    today: _,
    outsideCurrentMonth: R,
    isFirstVisibleCell: P,
    isLastVisibleCell: M,
    selected: F,
    tabIndex: O ? 0 : -1,
    "aria-selected": F,
    "aria-current": _ ? "date" : void 0
  }));
}
function lw(e) {
  const t = at({
    props: e,
    name: "MuiDayCalendar"
  }), {
    onFocusedDayChange: o,
    className: r,
    currentMonth: a,
    selectedDays: s,
    focusedDay: i,
    loading: l,
    onSelectedDaysChange: c,
    onMonthSwitchingAnimationEnd: u,
    readOnly: d,
    reduceAnimations: p,
    renderLoading: h = () => /* @__PURE__ */ S.jsx("span", {
      children: "..."
    }),
    slideDirection: m,
    TransitionProps: y,
    disablePast: f,
    disableFuture: C,
    minDate: w,
    maxDate: T,
    shouldDisableDate: x,
    shouldDisableMonth: E,
    shouldDisableYear: v,
    dayOfWeekFormatter: D,
    hasFocus: O,
    onFocusedViewChange: F,
    gridLabelId: _,
    displayWeekNumber: V,
    fixedWeekNumber: N,
    autoFocus: L,
    timezone: A
  } = t, R = ts(A), P = ze(), M = QC(t), $ = At().direction === "rtl", B = D || ((ue, de) => P.format(de, "weekdayShort").charAt(0).toUpperCase()), I = Ju({
    shouldDisableDate: x,
    shouldDisableMonth: E,
    shouldDisableYear: v,
    minDate: w,
    maxDate: T,
    disablePast: f,
    disableFuture: C,
    timezone: A
  }), z = dn(), [G, X] = Ft({
    name: "DayCalendar",
    state: "hasFocus",
    controlled: O,
    default: L ?? !1
  }), [W, q] = b.useState(() => i || R), Z = pe((ue) => {
    d || c(ue);
  }), U = (ue) => {
    I(ue) || (o(ue), q(ue), F == null || F(!0), X(!0));
  }, Q = pe((ue, de) => {
    switch (ue.key) {
      case "ArrowUp":
        U(P.addDays(de, -7)), ue.preventDefault();
        break;
      case "ArrowDown":
        U(P.addDays(de, 7)), ue.preventDefault();
        break;
      case "ArrowLeft": {
        const ee = P.addDays(de, $ ? 1 : -1), re = P.addMonths(de, $ ? 1 : -1), he = So({
          utils: P,
          date: ee,
          minDate: $ ? ee : P.startOfMonth(re),
          maxDate: $ ? P.endOfMonth(re) : ee,
          isDateDisabled: I,
          timezone: A
        });
        U(he || ee), ue.preventDefault();
        break;
      }
      case "ArrowRight": {
        const ee = P.addDays(de, $ ? -1 : 1), re = P.addMonths(de, $ ? -1 : 1), he = So({
          utils: P,
          date: ee,
          minDate: $ ? P.startOfMonth(re) : ee,
          maxDate: $ ? ee : P.endOfMonth(re),
          isDateDisabled: I,
          timezone: A
        });
        U(he || ee), ue.preventDefault();
        break;
      }
      case "Home":
        U(P.startOfWeek(de)), ue.preventDefault();
        break;
      case "End":
        U(P.endOfWeek(de)), ue.preventDefault();
        break;
      case "PageUp":
        U(P.addMonths(de, 1)), ue.preventDefault();
        break;
      case "PageDown":
        U(P.addMonths(de, -1)), ue.preventDefault();
        break;
    }
  }), oe = pe((ue, de) => U(de)), J = pe((ue, de) => {
    G && P.isSameDay(W, de) && (F == null || F(!1));
  }), K = P.getMonth(a), Y = b.useMemo(() => s.filter((ue) => !!ue).map((ue) => P.startOfDay(ue)), [P, s]), H = K, se = b.useMemo(() => /* @__PURE__ */ b.createRef(), [H]), fe = P.startOfWeek(R), be = b.useMemo(() => {
    const ue = P.startOfMonth(a), de = P.endOfMonth(a);
    return I(W) || P.isAfterDay(W, de) || P.isBeforeDay(W, ue) ? So({
      utils: P,
      date: W,
      minDate: ue,
      maxDate: de,
      disablePast: f,
      disableFuture: C,
      isDateDisabled: I,
      timezone: A
    }) : W;
  }, [a, C, f, W, I, P, A]), $e = b.useMemo(() => {
    const ue = P.setTimezone(a, A), de = P.getWeekArray(ue);
    let ee = P.addMonths(ue, 1);
    for (; N && de.length < N; ) {
      const re = P.getWeekArray(ee), he = P.isSameDay(de[de.length - 1][0], re[0][0]);
      re.slice(he ? 1 : 0).forEach((Te) => {
        de.length < N && de.push(Te);
      }), ee = P.addMonths(ee, 1);
    }
    return de;
  }, [a, N, P, A]);
  return /* @__PURE__ */ S.jsxs(ZC, {
    role: "grid",
    "aria-labelledby": _,
    className: M.root,
    children: [/* @__PURE__ */ S.jsxs(JC, {
      role: "row",
      className: M.header,
      children: [V && /* @__PURE__ */ S.jsx(tw, {
        variant: "caption",
        role: "columnheader",
        "aria-label": z.calendarWeekNumberHeaderLabel,
        className: M.weekNumberLabel,
        children: z.calendarWeekNumberHeaderText
      }), lb(P, R).map((ue, de) => {
        var ee;
        const re = P.format(ue, "weekdayShort");
        return /* @__PURE__ */ S.jsx(ew, {
          variant: "caption",
          role: "columnheader",
          "aria-label": P.format(P.addDays(fe, de), "weekday"),
          className: M.weekDayLabel,
          children: (ee = B == null ? void 0 : B(re, ue)) != null ? ee : re
        }, re + de.toString());
      })]
    }), l ? /* @__PURE__ */ S.jsx(ow, {
      className: M.loadingContainer,
      children: h()
    }) : /* @__PURE__ */ S.jsx(rw, g({
      transKey: H,
      onExited: u,
      reduceAnimations: p,
      slideDirection: m,
      className: ce(r, M.slideTransition)
    }, y, {
      nodeRef: se,
      children: /* @__PURE__ */ S.jsx(sw, {
        ref: se,
        role: "rowgroup",
        className: M.monthContainer,
        children: $e.map((ue, de) => /* @__PURE__ */ S.jsxs(aw, {
          role: "row",
          className: M.weekContainer,
          "aria-rowindex": de + 1,
          children: [V && /* @__PURE__ */ S.jsx(nw, {
            className: M.weekNumber,
            role: "rowheader",
            "aria-label": z.calendarWeekNumberAriaLabelText(P.getWeekNumber(ue[0])),
            children: z.calendarWeekNumberText(P.getWeekNumber(ue[0]))
          }), ue.map((ee, re) => /* @__PURE__ */ S.jsx(iw, {
            parentProps: t,
            day: ee,
            selectedDays: Y,
            focusableDay: be,
            onKeyDown: Q,
            onFocus: oe,
            onBlur: J,
            onDaySelect: Z,
            isDateDisabled: I,
            currentMonthNumber: K,
            isViewFocused: G,
            "aria-colindex": re + 1
          }, ee.toString()))]
        }, `week-${ue[0]}`))
      })
    }))]
  });
}
const cw = (e, t, o) => (r, a) => {
  switch (a.type) {
    case "changeMonth":
      return g({}, r, {
        slideDirection: a.direction,
        currentMonth: a.newMonth,
        isMonthSwitchingAnimating: !e
      });
    case "finishMonthSwitchingAnimation":
      return g({}, r, {
        isMonthSwitchingAnimating: !1
      });
    case "changeFocusedDay": {
      if (r.focusedDay != null && a.focusedDay != null && o.isSameDay(a.focusedDay, r.focusedDay))
        return r;
      const s = a.focusedDay != null && !t && !o.isSameMonth(r.currentMonth, a.focusedDay);
      return g({}, r, {
        focusedDay: a.focusedDay,
        isMonthSwitchingAnimating: s && !e && !a.withoutMonthSwitchingAnimation,
        currentMonth: s ? o.startOfMonth(a.focusedDay) : r.currentMonth,
        slideDirection: a.focusedDay != null && o.isAfterDay(a.focusedDay, r.currentMonth) ? "left" : "right"
      });
    }
    default:
      throw new Error("missing support");
  }
}, uw = (e) => {
  const {
    value: t,
    referenceDate: o,
    defaultCalendarMonth: r,
    disableFuture: a,
    disablePast: s,
    disableSwitchToMonthOnDayFocus: i = !1,
    maxDate: l,
    minDate: c,
    onMonthChange: u,
    reduceAnimations: d,
    shouldDisableDate: p,
    timezone: h
  } = e, m = ze(), y = b.useRef(cw(!!d, i, m)).current, f = b.useMemo(
    () => {
      let O = null;
      return o ? O = o : r && (O = m.startOfMonth(r)), Zt.getInitialReferenceValue({
        value: t,
        utils: m,
        timezone: h,
        props: e,
        referenceDate: O,
        granularity: Yt.day
      });
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), [C, w] = b.useReducer(y, {
    isMonthSwitchingAnimating: !1,
    focusedDay: f,
    currentMonth: m.startOfMonth(f),
    slideDirection: "left"
  }), T = b.useCallback((O) => {
    w(g({
      type: "changeMonth"
    }, O)), u && u(O.newMonth);
  }, [u]), x = b.useCallback((O) => {
    const F = O;
    m.isSameMonth(F, C.currentMonth) || T({
      newMonth: m.startOfMonth(F),
      direction: m.isAfterDay(F, C.currentMonth) ? "left" : "right"
    });
  }, [C.currentMonth, T, m]), E = Ju({
    shouldDisableDate: p,
    minDate: c,
    maxDate: l,
    disableFuture: a,
    disablePast: s,
    timezone: h
  }), v = b.useCallback(() => {
    w({
      type: "finishMonthSwitchingAnimation"
    });
  }, []), D = pe((O, F) => {
    E(O) || w({
      type: "changeFocusedDay",
      focusedDay: O,
      withoutMonthSwitchingAnimation: F
    });
  });
  return {
    referenceDate: f,
    calendarState: C,
    changeMonth: x,
    changeFocusedDay: D,
    isDateDisabled: E,
    onMonthSwitchingAnimationEnd: v,
    handleChangeMonth: T
  };
}, td = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (td.displayName = "FormControlContext");
const ds = td;
function On() {
  return b.useContext(ds);
}
function dw(e) {
  return xe("MuiInputAdornment", e);
}
const fw = ye("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), wl = fw;
var Tl;
const pw = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], hw = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, t[`position${ie(o.position)}`], o.disablePointerEvents === !0 && t.disablePointerEvents, t[o.variant]];
}, mw = (e) => {
  const {
    classes: t,
    disablePointerEvents: o,
    hiddenLabel: r,
    position: a,
    size: s,
    variant: i
  } = e, l = {
    root: ["root", o && "disablePointerEvents", a && `position${ie(a)}`, i, r && "hiddenLabel", s && `size${ie(s)}`]
  };
  return we(l, dw, t);
}, gw = ne("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: hw
})(({
  theme: e,
  ownerState: t
}) => g({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${wl.positionStart}&:not(.${wl.hiddenLabel})`]: {
    marginTop: 16
  }
}, t.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, t.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, t.disablePointerEvents === !0 && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
})), nd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: a,
    className: s,
    component: i = "div",
    disablePointerEvents: l = !1,
    disableTypography: c = !1,
    position: u,
    variant: d
  } = r, p = ae(r, pw), h = On() || {};
  let m = d;
  d && h.variant && process.env.NODE_ENV !== "production" && d === h.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), h && !m && (m = h.variant);
  const y = g({}, r, {
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: l,
    position: u,
    variant: m
  }), f = mw(y);
  return /* @__PURE__ */ S.jsx(ds.Provider, {
    value: null,
    children: /* @__PURE__ */ S.jsx(gw, g({
      as: i,
      ownerState: y,
      className: ce(f.root, s),
      ref: o
    }, p, {
      children: typeof a == "string" && !c ? /* @__PURE__ */ S.jsx(Pn, {
        color: "text.secondary",
        children: a
      }) : /* @__PURE__ */ S.jsxs(b.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Tl || (Tl = /* @__PURE__ */ S.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, a]
      })
    }))
  });
});
process.env.NODE_ENV !== "production" && (nd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: n.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: n.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: n.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const od = nd, bw = ["props", "getOpenDialogAriaText"], yw = ["ownerState"], vw = ["ownerState"], xw = (e) => {
  var t, o, r, a, s;
  let {
    props: i,
    getOpenDialogAriaText: l
  } = e, c = ae(e, bw);
  const {
    slots: u,
    slotProps: d,
    className: p,
    sx: h,
    format: m,
    formatDensity: y,
    timezone: f,
    name: C,
    label: w,
    inputRef: T,
    readOnly: x,
    disabled: E,
    autoFocus: v,
    localeText: D,
    reduceAnimations: O
  } = i, F = ze(), _ = b.useRef(null), V = b.useRef(null), N = En(), L = (t = d == null || (o = d.toolbar) == null ? void 0 : o.hidden) != null ? t : !1, {
    open: A,
    actions: R,
    hasUIView: P,
    layoutProps: M,
    renderCurrentView: j,
    shouldRestoreFocus: $,
    fieldProps: B
  } = Au(g({}, c, {
    props: i,
    inputRef: _,
    autoFocusView: !0,
    additionalViewProps: {},
    wrapperVariant: "desktop"
  })), I = (r = u.inputAdornment) != null ? r : od, z = ot({
    elementType: I,
    externalSlotProps: d == null ? void 0 : d.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: i
  }), G = ae(z, yw), X = (a = u.openPickerButton) != null ? a : rs, W = ot({
    elementType: X,
    externalSlotProps: d == null ? void 0 : d.openPickerButton,
    additionalProps: {
      disabled: E || x,
      onClick: A ? R.onClose : R.onOpen,
      "aria-label": l(B.value, F),
      edge: G.position
    },
    ownerState: i
  }), q = ae(W, vw), Z = u.openPickerIcon, U = u.field, Q = ot({
    elementType: U,
    externalSlotProps: d == null ? void 0 : d.field,
    additionalProps: g({}, B, L && {
      id: N
    }, {
      readOnly: x,
      disabled: E,
      className: p,
      sx: h,
      format: m,
      formatDensity: y,
      timezone: f,
      label: w,
      name: C,
      autoFocus: v && !i.open,
      focused: A ? !0 : void 0
    }),
    ownerState: i
  });
  P && (Q.InputProps = g({}, Q.InputProps, {
    ref: V
  }, !i.disableOpenPicker && {
    [`${G.position}Adornment`]: /* @__PURE__ */ S.jsx(I, g({}, G, {
      children: /* @__PURE__ */ S.jsx(X, g({}, q, {
        children: /* @__PURE__ */ S.jsx(Z, g({}, d == null ? void 0 : d.openPickerIcon))
      }))
    }))
  }));
  const oe = g({
    textField: u.textField,
    clearIcon: u.clearIcon,
    clearButton: u.clearButton
  }, Q.slots), J = (s = u.layout) != null ? s : Wa, K = We(_, Q.inputRef, T);
  let Y = N;
  L && (w ? Y = `${N}-label` : Y = void 0);
  const H = g({}, d, {
    toolbar: g({}, d == null ? void 0 : d.toolbar, {
      titleId: N
    }),
    popper: g({
      "aria-labelledby": Y
    }, d == null ? void 0 : d.popper)
  });
  return {
    renderPicker: () => /* @__PURE__ */ S.jsxs(Jr, {
      localeText: D,
      children: [/* @__PURE__ */ S.jsx(U, g({}, Q, {
        slots: oe,
        slotProps: H,
        inputRef: K
      })), /* @__PURE__ */ S.jsx(v0, g({
        role: "dialog",
        placement: "bottom-start",
        anchorEl: V.current
      }, R, {
        open: A,
        slots: u,
        slotProps: H,
        shouldRestoreFocus: $,
        reduceAnimations: O,
        children: /* @__PURE__ */ S.jsx(J, g({}, M, H == null ? void 0 : H.layout, {
          slots: u,
          slotProps: H,
          children: j()
        }))
      }))]
    })
  };
}, Cw = ["onChange", "maxRows", "minRows", "style", "value"];
function ir(e) {
  return parseInt(e, 10) || 0;
}
const ww = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function Tw(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const rd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: a,
    minRows: s = 1,
    style: i,
    value: l
  } = t, c = ae(t, Cw), {
    current: u
  } = b.useRef(l != null), d = b.useRef(null), p = We(o, d), h = b.useRef(null), m = b.useRef(null), y = b.useCallback(() => {
    const w = d.current, x = an(w).getComputedStyle(w);
    if (x.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const E = m.current;
    E.style.width = x.width, E.value = w.value || t.placeholder || "x", E.value.slice(-1) === `
` && (E.value += " ");
    const v = x.boxSizing, D = ir(x.paddingBottom) + ir(x.paddingTop), O = ir(x.borderBottomWidth) + ir(x.borderTopWidth), F = E.scrollHeight;
    E.value = "x";
    const _ = E.scrollHeight;
    let V = F;
    s && (V = Math.max(Number(s) * _, V)), a && (V = Math.min(Number(a) * _, V)), V = Math.max(V, _);
    const N = V + (v === "border-box" ? D + O : 0), L = Math.abs(V - F) <= 1;
    return {
      outerHeightStyle: N,
      overflowing: L
    };
  }, [a, s, t.placeholder]), f = b.useCallback(() => {
    const w = y();
    if (Tw(w))
      return;
    const T = w.outerHeightStyle, x = d.current;
    h.current !== T && (h.current = T, x.style.height = `${T}px`), x.style.overflow = w.overflowing ? "hidden" : "";
  }, [y]);
  it(() => {
    const w = () => {
      f();
    };
    let T;
    const x = () => {
      cancelAnimationFrame(T), T = requestAnimationFrame(() => {
        w();
      });
    }, E = ra(w), v = d.current, D = an(v);
    D.addEventListener("resize", E);
    let O;
    return typeof ResizeObserver < "u" && (O = new ResizeObserver(process.env.NODE_ENV === "test" ? x : w), O.observe(v)), () => {
      E.clear(), cancelAnimationFrame(T), D.removeEventListener("resize", E), O && O.disconnect();
    };
  }, [y, f]), it(() => {
    f();
  });
  const C = (w) => {
    u || f(), r && r(w);
  };
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx("textarea", g({
      value: l,
      onChange: C,
      ref: p,
      rows: s,
      style: i
    }, c)), /* @__PURE__ */ S.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: m,
      tabIndex: -1,
      style: g({}, ww.shadow, i, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (rd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  onChange: n.func,
  /**
   * @ignore
   */
  placeholder: n.string,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * @ignore
   */
  value: n.oneOfType([n.arrayOf(n.string), n.number, n.string])
});
const Ew = rd;
function co({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, a) => (r[a] = e[a], o && typeof e[a] > "u" && (r[a] = o[a]), r), {});
}
function sd(e) {
  return /* @__PURE__ */ S.jsx(Mc, g({}, e, {
    defaultTheme: Qr,
    themeId: Zr
  }));
}
process.env.NODE_ENV !== "production" && (sd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function El(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ir(e, t = !1) {
  return e && (El(e.value) && e.value !== "" || t && El(e.defaultValue) && e.defaultValue !== "");
}
function Sw(e) {
  return e.startAdornment;
}
function Pw(e) {
  return xe("MuiInputBase", e);
}
const Ow = ye("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), to = Ow, Rw = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], fs = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${ie(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, ps = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, Dw = (e) => {
  const {
    classes: t,
    color: o,
    disabled: r,
    error: a,
    endAdornment: s,
    focused: i,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: p,
    size: h,
    startAdornment: m,
    type: y
  } = e, f = {
    root: ["root", `color${ie(o)}`, r && "disabled", a && "error", c && "fullWidth", i && "focused", l && "formControl", h && h !== "medium" && `size${ie(h)}`, d && "multiline", m && "adornedStart", s && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", y === "search" && "inputTypeSearch", d && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", m && "inputAdornedStart", s && "inputAdornedEnd", p && "readOnly"]
  };
  return we(f, Pw, t);
}, hs = ne("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: fs
})(({
  theme: e,
  ownerState: t
}) => g({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${to.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && g({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), ms = ne("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: ps
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light", r = g({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), a = {
    opacity: "0 !important"
  }, s = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  };
  return g({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${to.formControl} &`]: {
      "&::-webkit-input-placeholder": a,
      "&::-moz-placeholder": a,
      // Firefox 19+
      "&:-ms-input-placeholder": a,
      // IE11
      "&::-ms-input-placeholder": a,
      // Edge
      "&:focus::-webkit-input-placeholder": s,
      "&:focus::-moz-placeholder": s,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": s,
      // IE11
      "&:focus::-ms-input-placeholder": s
      // Edge
    },
    [`&.${to.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), Mw = /* @__PURE__ */ S.jsx(sd, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), ad = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r;
  const a = Ae({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": s,
    autoComplete: i,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: p,
    disabled: h,
    disableInjectingGlobalStyles: m,
    endAdornment: y,
    fullWidth: f = !1,
    id: C,
    inputComponent: w = "input",
    inputProps: T = {},
    inputRef: x,
    maxRows: E,
    minRows: v,
    multiline: D = !1,
    name: O,
    onBlur: F,
    onChange: _,
    onClick: V,
    onFocus: N,
    onKeyDown: L,
    onKeyUp: A,
    placeholder: R,
    readOnly: P,
    renderSuffix: M,
    rows: j,
    slotProps: $ = {},
    slots: B = {},
    startAdornment: I,
    type: z = "text",
    value: G
  } = a, X = ae(a, Rw), W = T.value != null ? T.value : G, {
    current: q
  } = b.useRef(W != null), Z = b.useRef(), U = b.useCallback((Ee) => {
    process.env.NODE_ENV !== "production" && Ee && Ee.nodeName !== "INPUT" && !Ee.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), Q = We(Z, x, T.ref, U), [oe, J] = b.useState(!1), K = On();
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (K)
      return K.registerEffect();
  }, [K]);
  const Y = co({
    props: a,
    muiFormControl: K,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  Y.focused = K ? K.focused : oe, b.useEffect(() => {
    !K && h && oe && (J(!1), F && F());
  }, [K, h, oe, F]);
  const H = K && K.onFilled, se = K && K.onEmpty, fe = b.useCallback((Ee) => {
    Ir(Ee) ? H && H() : se && se();
  }, [H, se]);
  it(() => {
    q && fe({
      value: W
    });
  }, [W, fe, q]);
  const be = (Ee) => {
    if (Y.disabled) {
      Ee.stopPropagation();
      return;
    }
    N && N(Ee), T.onFocus && T.onFocus(Ee), K && K.onFocus ? K.onFocus(Ee) : J(!0);
  }, $e = (Ee) => {
    F && F(Ee), T.onBlur && T.onBlur(Ee), K && K.onBlur ? K.onBlur(Ee) : J(!1);
  }, ue = (Ee, ...me) => {
    if (!q) {
      const qe = Ee.target || Z.current;
      if (qe == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Gt(1));
      fe({
        value: qe.value
      });
    }
    T.onChange && T.onChange(Ee, ...me), _ && _(Ee, ...me);
  };
  b.useEffect(() => {
    fe(Z.current);
  }, []);
  const de = (Ee) => {
    Z.current && Ee.currentTarget === Ee.target && Z.current.focus(), V && V(Ee);
  };
  let ee = w, re = T;
  D && ee === "input" && (j ? (process.env.NODE_ENV !== "production" && (v || E) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), re = g({
    type: void 0,
    minRows: j,
    maxRows: j
  }, re)) : re = g({
    type: void 0,
    maxRows: E,
    minRows: v
  }, re), ee = Ew);
  const he = (Ee) => {
    fe(Ee.animationName === "mui-auto-fill-cancel" ? Z.current : {
      value: "x"
    });
  };
  b.useEffect(() => {
    K && K.setAdornedStart(!!I);
  }, [K, I]);
  const Te = g({}, a, {
    color: Y.color || "primary",
    disabled: Y.disabled,
    endAdornment: y,
    error: Y.error,
    focused: Y.focused,
    formControl: K,
    fullWidth: f,
    hiddenLabel: Y.hiddenLabel,
    multiline: D,
    size: Y.size,
    startAdornment: I,
    type: z
  }), ve = Dw(Te), Oe = B.root || u.Root || hs, Ye = $.root || d.root || {}, De = B.input || u.Input || ms;
  return re = g({}, re, (r = $.input) != null ? r : d.input), /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [!m && Mw, /* @__PURE__ */ S.jsxs(Oe, g({}, Ye, !qn(Oe) && {
      ownerState: g({}, Te, Ye.ownerState)
    }, {
      ref: o,
      onClick: de
    }, X, {
      className: ce(ve.root, Ye.className, c, P && "MuiInputBase-readOnly"),
      children: [I, /* @__PURE__ */ S.jsx(ds.Provider, {
        value: null,
        children: /* @__PURE__ */ S.jsx(De, g({
          ownerState: Te,
          "aria-invalid": Y.error,
          "aria-describedby": s,
          autoComplete: i,
          autoFocus: l,
          defaultValue: p,
          disabled: Y.disabled,
          id: C,
          onAnimationStart: he,
          name: O,
          placeholder: R,
          readOnly: P,
          required: Y.required,
          rows: j,
          value: W,
          onKeyDown: L,
          onKeyUp: A,
          type: z
        }, re, !qn(De) && {
          as: ee,
          ownerState: g({}, Te, re.ownerState)
        }, {
          ref: Q,
          className: ce(ve.input, re.className, P && "MuiInputBase-readOnly"),
          onBlur: $e,
          onChange: ue,
          onFocus: be
        }))
      }), y, M ? M(g({}, Y, {
        startAdornment: I
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (ad.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: Ar,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ht,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * @ignore
   */
  renderSuffix: n.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
const za = ad;
function $w(e) {
  return xe("MuiInput", e);
}
const kw = g({}, to, ye("MuiInput", ["root", "underline", "input"])), xo = kw, Iw = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], Nw = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, a = we({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, $w, t);
  return g({}, t, a);
}, _w = ne(hs, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...fs(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), g({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${xo.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${xo.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${xo.disabled}, .${xo.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${xo.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), jw = ne(ms, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: ps
})({}), Ua = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i;
  const l = Ae({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: p = !1,
    inputComponent: h = "input",
    multiline: m = !1,
    slotProps: y,
    slots: f = {},
    type: C = "text"
  } = l, w = ae(l, Iw), T = Nw(l), E = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, v = y ?? d ? wt(y ?? d, E) : E, D = (r = (a = f.root) != null ? a : u.Root) != null ? r : _w, O = (s = (i = f.input) != null ? i : u.Input) != null ? s : jw;
  return /* @__PURE__ */ S.jsx(za, g({
    slots: {
      root: D,
      input: O
    },
    slotProps: v,
    fullWidth: p,
    inputComponent: h,
    multiline: m,
    ref: o,
    type: C
  }, w, {
    classes: T
  }));
});
process.env.NODE_ENV !== "production" && (Ua.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ht,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
Ua.muiName = "Input";
const id = Ua;
function Aw(e) {
  return xe("MuiFilledInput", e);
}
const Fw = g({}, to, ye("MuiFilledInput", ["root", "underline", "input"])), gn = Fw, Vw = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Lw = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, a = we({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, Aw, t);
  return g({}, t, a);
}, Bw = ne(hs, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...fs(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  const r = e.palette.mode === "light", a = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", s = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return g({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
      }
    },
    [`&.${gn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
    },
    [`&.${gn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(o = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : o.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${gn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${gn.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : a}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${gn.disabled}, .${gn.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${gn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && g({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), Ww = ne(ms, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: ps
})(({
  theme: e,
  ownerState: t
}) => g({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), Ya = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i;
  const l = Ae({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: p = "input",
    multiline: h = !1,
    slotProps: m,
    slots: y = {},
    type: f = "text"
  } = l, C = ae(l, Vw), w = g({}, l, {
    fullWidth: d,
    inputComponent: p,
    multiline: h,
    type: f
  }), T = Lw(l), x = {
    root: {
      ownerState: w
    },
    input: {
      ownerState: w
    }
  }, E = m ?? u ? wt(x, m ?? u) : x, v = (r = (a = y.root) != null ? a : c.Root) != null ? r : Bw, D = (s = (i = y.input) != null ? i : c.Input) != null ? s : Ww;
  return /* @__PURE__ */ S.jsx(za, g({
    slots: {
      root: v,
      input: D
    },
    componentsProps: E,
    fullWidth: d,
    inputComponent: p,
    multiline: h,
    ref: o,
    type: f
  }, C, {
    classes: T
  }));
});
process.env.NODE_ENV !== "production" && (Ya.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ht,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
Ya.muiName = "Input";
const ld = Ya;
var Sl;
const zw = ["children", "classes", "className", "label", "notched"], Uw = ne("fieldset", {
  shouldForwardProp: Vt
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), Yw = ne("legend", {
  shouldForwardProp: Vt
})(({
  ownerState: e,
  theme: t
}) => g({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && g({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function cd(e) {
  const {
    className: t,
    label: o,
    notched: r
  } = e, a = ae(e, zw), s = o != null && o !== "", i = g({}, e, {
    notched: r,
    withLabel: s
  });
  return /* @__PURE__ */ S.jsx(Uw, g({
    "aria-hidden": !0,
    className: t,
    ownerState: i
  }, a, {
    children: /* @__PURE__ */ S.jsx(Yw, {
      ownerState: i,
      children: s ? /* @__PURE__ */ S.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Sl || (Sl = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (cd.propTypes = {
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The label.
   */
  label: n.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool.isRequired,
  /**
   * @ignore
   */
  style: n.object
});
function Hw(e) {
  return xe("MuiOutlinedInput", e);
}
const qw = g({}, to, ye("MuiOutlinedInput", ["root", "notchedOutline", "input"])), rn = qw, Kw = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], Gw = (e) => {
  const {
    classes: t
  } = e, r = we({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Hw, t);
  return g({}, t, r);
}, Xw = ne(hs, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: fs
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return g({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${rn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${rn.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : o
      }
    },
    [`&.${rn.focused} .${rn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${rn.error} .${rn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${rn.disabled} .${rn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && g({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), Qw = ne(cd, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), Zw = ne(ms, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: ps
})(({
  theme: e,
  ownerState: t
}) => g({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), Ha = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i, l;
  const c = Ae({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: p = "input",
    label: h,
    multiline: m = !1,
    notched: y,
    slots: f = {},
    type: C = "text"
  } = c, w = ae(c, Kw), T = Gw(c), x = On(), E = co({
    props: c,
    muiFormControl: x,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), v = g({}, c, {
    color: E.color || "primary",
    disabled: E.disabled,
    error: E.error,
    focused: E.focused,
    formControl: x,
    fullWidth: d,
    hiddenLabel: E.hiddenLabel,
    multiline: m,
    size: E.size,
    type: C
  }), D = (r = (a = f.root) != null ? a : u.Root) != null ? r : Xw, O = (s = (i = f.input) != null ? i : u.Input) != null ? s : Zw;
  return /* @__PURE__ */ S.jsx(za, g({
    slots: {
      root: D,
      input: O
    },
    renderSuffix: (F) => /* @__PURE__ */ S.jsx(Qw, {
      ownerState: v,
      className: T.notchedOutline,
      label: h != null && h !== "" && E.required ? l || (l = /* @__PURE__ */ S.jsxs(b.Fragment, {
        children: [h, " ", "*"]
      })) : h,
      notched: typeof y < "u" ? y : !!(F.startAdornment || F.filled || F.focused)
    }),
    fullWidth: d,
    inputComponent: p,
    multiline: m,
    ref: o,
    type: C
  }, w, {
    classes: g({}, T, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ha.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ht,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: n.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
Ha.muiName = "Input";
const ud = Ha;
function Jw(e) {
  return xe("MuiFormLabel", e);
}
const eT = ye("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), $o = eT, tT = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], nT = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: a,
    error: s,
    filled: i,
    required: l
  } = e, c = {
    root: ["root", `color${ie(o)}`, a && "disabled", s && "error", i && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return we(c, Jw, t);
}, oT = ne("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => g({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => g({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${$o.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${$o.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${$o.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), rT = ne("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${$o.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), dd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: a,
    className: s,
    component: i = "label"
  } = r, l = ae(r, tT), c = On(), u = co({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = g({}, r, {
    color: u.color || "primary",
    component: i,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = nT(d);
  return /* @__PURE__ */ S.jsxs(oT, g({
    as: i,
    ownerState: d,
    className: ce(p.root, s),
    ref: o
  }, l, {
    children: [a, u.required && /* @__PURE__ */ S.jsxs(rT, {
      ownerState: d,
      "aria-hidden": !0,
      className: p.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (dd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const sT = dd;
function aT(e) {
  return xe("MuiInputLabel", e);
}
ye("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const iT = ["disableAnimation", "margin", "shrink", "variant", "className"], lT = (e) => {
  const {
    classes: t,
    formControl: o,
    size: r,
    shrink: a,
    disableAnimation: s,
    variant: i,
    required: l
  } = e, c = {
    root: ["root", o && "formControl", !s && "animated", a && "shrink", r && r !== "normal" && `size${ie(r)}`, i],
    asterisk: [l && "asterisk"]
  }, u = we(c, aT, t);
  return g({}, t, u);
}, cT = ne(sT, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${$o.asterisk}`]: t.asterisk
    }, t.root, o.formControl && t.formControl, o.size === "small" && t.sizeSmall, o.shrink && t.shrink, !o.disableAnimation && t.animated, o.focused && t.focused, t[o.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && g({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && g({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && g({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), fd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: a = !1,
    shrink: s,
    className: i
  } = r, l = ae(r, iT), c = On();
  let u = s;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = co({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), p = g({}, r, {
    disableAnimation: a,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }), h = lT(p);
  return /* @__PURE__ */ S.jsx(cT, g({
    "data-shrink": u,
    ownerState: p,
    ref: o,
    className: ce(h.root, i)
  }, l, {
    classes: h
  }));
});
process.env.NODE_ENV !== "production" && (fd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: n.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: n.oneOfType([n.oneOf(["normal", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const uT = fd;
function dT(e) {
  return xe("MuiFormControl", e);
}
ye("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const fT = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], pT = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, a = {
    root: ["root", o !== "none" && `margin${ie(o)}`, r && "fullWidth"]
  };
  return we(a, dT, t);
}, hT = ne("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => g({}, t.root, t[`margin${ie(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => g({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), pd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiFormControl"
  }), {
    children: a,
    className: s,
    color: i = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: p = !1,
    hiddenLabel: h = !1,
    margin: m = "none",
    required: y = !1,
    size: f = "medium",
    variant: C = "outlined"
  } = r, w = ae(r, fT), T = g({}, r, {
    color: i,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: h,
    margin: m,
    required: y,
    size: f,
    variant: C
  }), x = pT(T), [E, v] = b.useState(() => {
    let A = !1;
    return a && b.Children.forEach(a, (R) => {
      if (!Wn(R, ["Input", "Select"]))
        return;
      const P = Wn(R, ["Select"]) ? R.props.input : R;
      P && Sw(P.props) && (A = !0);
    }), A;
  }), [D, O] = b.useState(() => {
    let A = !1;
    return a && b.Children.forEach(a, (R) => {
      Wn(R, ["Input", "Select"]) && (Ir(R.props, !0) || Ir(R.props.inputProps, !0)) && (A = !0);
    }), A;
  }), [F, _] = b.useState(!1);
  c && F && _(!1);
  const V = d !== void 0 && !c ? d : F;
  let N;
  if (process.env.NODE_ENV !== "production") {
    const A = b.useRef(!1);
    N = () => (A.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), A.current = !0, () => {
      A.current = !1;
    });
  }
  const L = b.useMemo(() => ({
    adornedStart: E,
    setAdornedStart: v,
    color: i,
    disabled: c,
    error: u,
    filled: D,
    focused: V,
    fullWidth: p,
    hiddenLabel: h,
    size: f,
    onBlur: () => {
      _(!1);
    },
    onEmpty: () => {
      O(!1);
    },
    onFilled: () => {
      O(!0);
    },
    onFocus: () => {
      _(!0);
    },
    registerEffect: N,
    required: y,
    variant: C
  }), [E, i, c, u, D, V, p, h, N, y, f, C]);
  return /* @__PURE__ */ S.jsx(ds.Provider, {
    value: L,
    children: /* @__PURE__ */ S.jsx(hT, g({
      as: l,
      ownerState: T,
      className: ce(x.root, s),
      ref: o
    }, w, {
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (pd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const mT = pd;
function gT(e) {
  return xe("MuiFormHelperText", e);
}
const bT = ye("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), Pl = bT;
var Ol;
const yT = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], vT = (e) => {
  const {
    classes: t,
    contained: o,
    size: r,
    disabled: a,
    error: s,
    filled: i,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", a && "disabled", s && "error", r && `size${ie(r)}`, o && "contained", l && "focused", i && "filled", c && "required"]
  };
  return we(u, gT, t);
}, xT = ne("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size && t[`size${ie(o.size)}`], o.contained && t.contained, o.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => g({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Pl.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Pl.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), hd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: a,
    className: s,
    component: i = "p"
  } = r, l = ae(r, yT), c = On(), u = co({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = g({}, r, {
    component: i,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = vT(d);
  return /* @__PURE__ */ S.jsx(xT, g({
    as: i,
    ownerState: d,
    className: ce(p.root, s),
    ref: o
  }, l, {
    children: a === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ol || (Ol = /* @__PURE__ */ S.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : a
  }));
});
process.env.NODE_ENV !== "production" && (hd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
const CT = hd, wT = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function js(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function Rl(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function md(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.indexOf(t.keys.join("")) === 0;
}
function Co(e, t, o, r, a, s) {
  let i = !1, l = a(e, t, t ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (i)
        return !1;
      i = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !md(l, s) || c)
      l = a(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const gd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: a = !1,
    autoFocusItem: s = !1,
    children: i,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: p = "selectedMenu"
  } = t, h = ae(t, wT), m = b.useRef(null), y = b.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  it(() => {
    a && m.current.focus();
  }, [a]), b.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (x, {
      direction: E
    }) => {
      const v = !m.current.style.width;
      if (x.clientHeight < m.current.clientHeight && v) {
        const D = `${Kl(st(x))}px`;
        m.current.style[E === "rtl" ? "paddingLeft" : "paddingRight"] = D, m.current.style.width = `calc(100% + ${D})`;
      }
      return m.current;
    }
  }), []);
  const f = (x) => {
    const E = m.current, v = x.key, D = st(E).activeElement;
    if (v === "ArrowDown")
      x.preventDefault(), Co(E, D, u, c, js);
    else if (v === "ArrowUp")
      x.preventDefault(), Co(E, D, u, c, Rl);
    else if (v === "Home")
      x.preventDefault(), Co(E, null, u, c, js);
    else if (v === "End")
      x.preventDefault(), Co(E, null, u, c, Rl);
    else if (v.length === 1) {
      const O = y.current, F = v.toLowerCase(), _ = performance.now();
      O.keys.length > 0 && (_ - O.lastTime > 500 ? (O.keys = [], O.repeating = !0, O.previousKeyMatched = !0) : O.repeating && F !== O.keys[0] && (O.repeating = !1)), O.lastTime = _, O.keys.push(F);
      const V = D && !O.repeating && md(D, O);
      O.previousKeyMatched && (V || Co(E, D, !1, c, js, O)) ? x.preventDefault() : O.previousKeyMatched = !1;
    }
    d && d(x);
  }, C = We(m, o);
  let w = -1;
  b.Children.forEach(i, (x, E) => {
    if (!/* @__PURE__ */ b.isValidElement(x)) {
      w === E && (w += 1, w >= i.length && (w = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && ko.isFragment(x) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), x.props.disabled || (p === "selectedMenu" && x.props.selected || w === -1) && (w = E), w === E && (x.props.disabled || x.props.muiSkipListHighlight || x.type.muiSkipListHighlight) && (w += 1, w >= i.length && (w = -1));
  });
  const T = b.Children.map(i, (x, E) => {
    if (E === w) {
      const v = {};
      return s && (v.autoFocus = !0), x.props.tabIndex === void 0 && p === "selectedMenu" && (v.tabIndex = 0), /* @__PURE__ */ b.cloneElement(x, v);
    }
    return x;
  });
  return /* @__PURE__ */ S.jsx(zu, g({
    role: "menu",
    ref: C,
    className: l,
    onKeyDown: f,
    tabIndex: a ? 0 : -1
  }, h, {
    children: T
  }));
});
process.env.NODE_ENV !== "production" && (gd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: n.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
const TT = gd;
function ET(e) {
  return xe("MuiPopover", e);
}
ye("MuiPopover", ["root", "paper"]);
const ST = ["onEntering"], PT = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], OT = ["slotProps"];
function Dl(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function Ml(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function $l(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function yr(e) {
  return typeof e == "function" ? e() : e;
}
const RT = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    paper: ["paper"]
  }, ET, t);
}, DT = ne(fu, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), bd = ne(ss, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), yd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s;
  const i = Ae({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: c,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: p = "anchorEl",
    children: h,
    className: m,
    container: y,
    elevation: f = 8,
    marginThreshold: C = 16,
    open: w,
    PaperProps: T = {},
    slots: x,
    slotProps: E,
    transformOrigin: v = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: D = gu,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: F
    } = {},
    disableScrollLock: _ = !1
  } = i, V = ae(i.TransitionProps, ST), N = ae(i, PT), L = (r = E == null ? void 0 : E.paper) != null ? r : T, A = b.useRef(), R = We(A, L.ref), P = g({}, i, {
    anchorOrigin: u,
    anchorReference: p,
    elevation: f,
    marginThreshold: C,
    externalPaperSlotProps: L,
    transformOrigin: v,
    TransitionComponent: D,
    transitionDuration: O,
    TransitionProps: V
  }), M = RT(P), j = b.useCallback(() => {
    if (p === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const H = yr(c), se = H && H.nodeType === 1 ? H : st(A.current).body, fe = se.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const be = se.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && be.top === 0 && be.left === 0 && be.right === 0 && be.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: fe.top + Dl(fe, u.vertical),
      left: fe.left + Ml(fe, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, p]), $ = b.useCallback((H) => ({
    vertical: Dl(H, v.vertical),
    horizontal: Ml(H, v.horizontal)
  }), [v.horizontal, v.vertical]), B = b.useCallback((H) => {
    const se = {
      width: H.offsetWidth,
      height: H.offsetHeight
    }, fe = $(se);
    if (p === "none")
      return {
        top: null,
        left: null,
        transformOrigin: $l(fe)
      };
    const be = j();
    let $e = be.top - fe.vertical, ue = be.left - fe.horizontal;
    const de = $e + se.height, ee = ue + se.width, re = an(yr(c)), he = re.innerHeight - C, Te = re.innerWidth - C;
    if (C !== null && $e < C) {
      const ve = $e - C;
      $e -= ve, fe.vertical += ve;
    } else if (C !== null && de > he) {
      const ve = de - he;
      $e -= ve, fe.vertical += ve;
    }
    if (process.env.NODE_ENV !== "production" && se.height > he && se.height && he && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${se.height - he}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), C !== null && ue < C) {
      const ve = ue - C;
      ue -= ve, fe.horizontal += ve;
    } else if (ee > Te) {
      const ve = ee - Te;
      ue -= ve, fe.horizontal += ve;
    }
    return {
      top: `${Math.round($e)}px`,
      left: `${Math.round(ue)}px`,
      transformOrigin: $l(fe)
    };
  }, [c, p, j, $, C]), [I, z] = b.useState(w), G = b.useCallback(() => {
    const H = A.current;
    if (!H)
      return;
    const se = B(H);
    se.top !== null && (H.style.top = se.top), se.left !== null && (H.style.left = se.left), H.style.transformOrigin = se.transformOrigin, z(!0);
  }, [B]);
  b.useEffect(() => (_ && window.addEventListener("scroll", G), () => window.removeEventListener("scroll", G)), [c, _, G]);
  const X = (H, se) => {
    F && F(H, se), G();
  }, W = () => {
    z(!1);
  };
  b.useEffect(() => {
    w && G();
  }), b.useImperativeHandle(l, () => w ? {
    updatePosition: () => {
      G();
    }
  } : null, [w, G]), b.useEffect(() => {
    if (!w)
      return;
    const H = ra(() => {
      G();
    }), se = an(c);
    return se.addEventListener("resize", H), () => {
      H.clear(), se.removeEventListener("resize", H);
    };
  }, [c, w, G]);
  let q = O;
  O === "auto" && !D.muiSupportAuto && (q = void 0);
  const Z = y || (c ? st(yr(c)).body : void 0), U = (a = x == null ? void 0 : x.root) != null ? a : DT, Q = (s = x == null ? void 0 : x.paper) != null ? s : bd, oe = Cn({
    elementType: Q,
    externalSlotProps: g({}, L, {
      style: I ? L.style : g({}, L.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: f,
      ref: R
    },
    ownerState: P,
    className: ce(M.paper, L == null ? void 0 : L.className)
  }), J = Cn({
    elementType: U,
    externalSlotProps: (E == null ? void 0 : E.root) || {},
    externalForwardedProps: N,
    additionalProps: {
      ref: o,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: Z,
      open: w
    },
    ownerState: P,
    className: ce(M.root, m)
  }), {
    slotProps: K
  } = J, Y = ae(J, OT);
  return /* @__PURE__ */ S.jsx(U, g({}, Y, !qn(U) && {
    slotProps: K,
    disableScrollLock: _
  }, {
    children: /* @__PURE__ */ S.jsx(D, g({
      appear: !0,
      in: w,
      onEntering: X,
      onExited: W,
      timeout: q
    }, V, {
      children: /* @__PURE__ */ S.jsx(Q, g({}, oe, {
        children: h
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (yd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: ht,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: cn(n.oneOfType([Xt, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = yr(e.anchorEl);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: n.shape({
    left: n.number.isRequired,
    top: n.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: n.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Xt, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Ql,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: n.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: n.shape({
    component: Ar
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object
});
const MT = yd;
function $T(e) {
  return xe("MuiMenu", e);
}
ye("MuiMenu", ["root", "paper", "list"]);
const kT = ["onEntering"], IT = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], NT = {
  vertical: "top",
  horizontal: "right"
}, _T = {
  vertical: "top",
  horizontal: "left"
}, jT = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, $T, t);
}, AT = ne(MT, {
  shouldForwardProp: (e) => Vt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), FT = ne(bd, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), VT = ne(TT, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), vd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a;
  const s = Ae({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: i = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: p,
    open: h,
    PaperProps: m = {},
    PopoverClasses: y,
    transitionDuration: f = "auto",
    TransitionProps: {
      onEntering: C
    } = {},
    variant: w = "selectedMenu",
    slots: T = {},
    slotProps: x = {}
  } = s, E = ae(s.TransitionProps, kT), v = ae(s, IT), D = Ng(), O = g({}, s, {
    autoFocus: i,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: C,
    PaperProps: m,
    transitionDuration: f,
    TransitionProps: E,
    variant: w
  }), F = jT(O), _ = i && !u && h, V = b.useRef(null), N = ($, B) => {
    V.current && V.current.adjustStyleForScrollbar($, {
      direction: D ? "rtl" : "ltr"
    }), C && C($, B);
  }, L = ($) => {
    $.key === "Tab" && ($.preventDefault(), p && p($, "tabKeyDown"));
  };
  let A = -1;
  b.Children.map(l, ($, B) => {
    /* @__PURE__ */ b.isValidElement($) && (process.env.NODE_ENV !== "production" && ko.isFragment($) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), $.props.disabled || (w === "selectedMenu" && $.props.selected || A === -1) && (A = B));
  });
  const R = (r = T.paper) != null ? r : FT, P = (a = x.paper) != null ? a : m, M = Cn({
    elementType: T.root,
    externalSlotProps: x.root,
    ownerState: O,
    className: [F.root, c]
  }), j = Cn({
    elementType: R,
    externalSlotProps: P,
    ownerState: O,
    className: F.paper
  });
  return /* @__PURE__ */ S.jsx(AT, g({
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: D ? "right" : "left"
    },
    transformOrigin: D ? NT : _T,
    slots: {
      paper: R,
      root: T.root
    },
    slotProps: {
      root: M,
      paper: j
    },
    open: h,
    ref: o,
    transitionDuration: f,
    TransitionProps: g({
      onEntering: N
    }, E),
    ownerState: O
  }, v, {
    classes: y,
    children: /* @__PURE__ */ S.jsx(VT, g({
      onKeyDown: L,
      actions: V,
      autoFocus: i && (A === -1 || u),
      autoFocusItem: _,
      variant: w
    }, d, {
      className: ce(F.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (vd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([Xt, n.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: n.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: n.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: n.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: n.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
const LT = vd;
function BT(e) {
  return xe("MuiNativeSelect", e);
}
const WT = ye("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), qa = WT, zT = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], UT = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: a,
    open: s,
    error: i
  } = e, l = {
    select: ["select", o, r && "disabled", a && "multiple", i && "error"],
    icon: ["icon", `icon${ie(o)}`, s && "iconOpen", r && "disabled"]
  };
  return we(l, BT, t);
}, xd = ({
  ownerState: e,
  theme: t
}) => g({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": g({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${qa.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), YT = ne("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Vt,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${qa.multiple}`]: t.multiple
    }];
  }
})(xd), Cd = ({
  ownerState: e,
  theme: t
}) => g({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${qa.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), HT = ne("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${ie(o.variant)}`], o.open && t.iconOpen];
  }
})(Cd), wd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const {
    className: r,
    disabled: a,
    error: s,
    IconComponent: i,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ae(t, zT), d = g({}, t, {
    disabled: a,
    variant: c,
    error: s
  }), p = UT(d);
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx(YT, g({
      ownerState: d,
      className: ce(p.select, r),
      disabled: a,
      ref: l || o
    }, u)), t.multiple ? null : /* @__PURE__ */ S.jsx(HT, {
      as: i,
      ownerState: d,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (wd.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: ht,
  /**
   * @ignore
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
const qT = wd;
function KT(e) {
  return xe("MuiSelect", e);
}
const GT = ye("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), wo = GT;
var kl;
const XT = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], QT = ne("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${wo.select}`]: t.select
      },
      {
        [`&.${wo.select}`]: t[o.variant]
      },
      {
        [`&.${wo.error}`]: t.error
      },
      {
        [`&.${wo.multiple}`]: t.multiple
      }
    ];
  }
})(xd, {
  // Win specificity over the input base
  [`&.${wo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), ZT = ne("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${ie(o.variant)}`], o.open && t.iconOpen];
  }
})(Cd), JT = ne("input", {
  shouldForwardProp: (e) => Pc(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Il(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function e1(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const t1 = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: a,
    open: s,
    error: i
  } = e, l = {
    select: ["select", o, r && "disabled", a && "multiple", i && "error"],
    icon: ["icon", `icon${ie(o)}`, s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return we(l, KT, t);
}, Td = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r;
  const {
    "aria-describedby": a,
    "aria-label": s,
    autoFocus: i,
    autoWidth: l,
    children: c,
    className: u,
    defaultOpen: d,
    defaultValue: p,
    disabled: h,
    displayEmpty: m,
    error: y = !1,
    IconComponent: f,
    inputRef: C,
    labelId: w,
    MenuProps: T = {},
    multiple: x,
    name: E,
    onBlur: v,
    onChange: D,
    onClose: O,
    onFocus: F,
    onOpen: _,
    open: V,
    readOnly: N,
    renderValue: L,
    SelectDisplayProps: A = {},
    tabIndex: R,
    value: P,
    variant: M = "standard"
  } = t, j = ae(t, XT), [$, B] = Ft({
    controlled: P,
    default: p,
    name: "Select"
  }), [I, z] = Ft({
    controlled: V,
    default: d,
    name: "Select"
  }), G = b.useRef(null), X = b.useRef(null), [W, q] = b.useState(null), {
    current: Z
  } = b.useRef(V != null), [U, Q] = b.useState(), oe = We(o, C), J = b.useCallback((ge) => {
    X.current = ge, ge && q(ge);
  }, []), K = W == null ? void 0 : W.parentNode;
  b.useImperativeHandle(oe, () => ({
    focus: () => {
      X.current.focus();
    },
    node: G.current,
    value: $
  }), [$]), b.useEffect(() => {
    d && I && W && !Z && (Q(l ? null : K.clientWidth), X.current.focus());
  }, [W, l]), b.useEffect(() => {
    i && X.current.focus();
  }, [i]), b.useEffect(() => {
    if (!w)
      return;
    const ge = st(X.current).getElementById(w);
    if (ge) {
      const Se = () => {
        getSelection().isCollapsed && X.current.focus();
      };
      return ge.addEventListener("click", Se), () => {
        ge.removeEventListener("click", Se);
      };
    }
  }, [w]);
  const Y = (ge, Se) => {
    ge ? _ && _(Se) : O && O(Se), Z || (Q(l ? null : K.clientWidth), z(ge));
  }, H = (ge) => {
    ge.button === 0 && (ge.preventDefault(), X.current.focus(), Y(!0, ge));
  }, se = (ge) => {
    Y(!1, ge);
  }, fe = b.Children.toArray(c), be = (ge) => {
    const Se = fe.find((Qe) => Qe.props.value === ge.target.value);
    Se !== void 0 && (B(Se.props.value), D && D(ge, Se));
  }, $e = (ge) => (Se) => {
    let Qe;
    if (Se.currentTarget.hasAttribute("tabindex")) {
      if (x) {
        Qe = Array.isArray($) ? $.slice() : [];
        const Bt = $.indexOf(ge.props.value);
        Bt === -1 ? Qe.push(ge.props.value) : Qe.splice(Bt, 1);
      } else
        Qe = ge.props.value;
      if (ge.props.onClick && ge.props.onClick(Se), $ !== Qe && (B(Qe), D)) {
        const Bt = Se.nativeEvent || Se, nn = new Bt.constructor(Bt.type, Bt);
        Object.defineProperty(nn, "target", {
          writable: !0,
          value: {
            value: Qe,
            name: E
          }
        }), D(nn, ge);
      }
      x || Y(!1, Se);
    }
  }, ue = (ge) => {
    N || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ge.key) !== -1 && (ge.preventDefault(), Y(!0, ge));
  }, de = W !== null && I, ee = (ge) => {
    !de && v && (Object.defineProperty(ge, "target", {
      writable: !0,
      value: {
        value: $,
        name: E
      }
    }), v(ge));
  };
  delete j["aria-invalid"];
  let re, he;
  const Te = [];
  let ve = !1, Oe = !1;
  (Ir({
    value: $
  }) || m) && (L ? re = L($) : ve = !0);
  const Ye = fe.map((ge) => {
    if (!/* @__PURE__ */ b.isValidElement(ge))
      return null;
    process.env.NODE_ENV !== "production" && ko.isFragment(ge) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Se;
    if (x) {
      if (!Array.isArray($))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Gt(2));
      Se = $.some((Qe) => Il(Qe, ge.props.value)), Se && ve && Te.push(ge.props.children);
    } else
      Se = Il($, ge.props.value), Se && ve && (he = ge.props.children);
    return Se && (Oe = !0), /* @__PURE__ */ b.cloneElement(ge, {
      "aria-selected": Se ? "true" : "false",
      onClick: $e(ge),
      onKeyUp: (Qe) => {
        Qe.key === " " && Qe.preventDefault(), ge.props.onKeyUp && ge.props.onKeyUp(Qe);
      },
      role: "option",
      selected: Se,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ge.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (!Oe && !x && $ !== "") {
      const ge = fe.map((Se) => Se.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${$}\` for the select ${E ? `(name="${E}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ge.filter((Se) => Se != null).map((Se) => `\`${Se}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Oe, fe, x, E, $]), ve && (x ? Te.length === 0 ? re = null : re = Te.reduce((ge, Se, Qe) => (ge.push(Se), Qe < Te.length - 1 && ge.push(", "), ge), []) : re = he);
  let De = U;
  !l && Z && W && (De = K.clientWidth);
  let Ee;
  typeof R < "u" ? Ee = R : Ee = h ? null : 0;
  const me = A.id || (E ? `mui-component-select-${E}` : void 0), qe = g({}, t, {
    variant: M,
    value: $,
    open: de,
    error: y
  }), xt = t1(qe), mt = g({}, T.PaperProps, (r = T.slotProps) == null ? void 0 : r.paper), lt = En();
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx(QT, g({
      ref: J,
      tabIndex: Ee,
      role: "combobox",
      "aria-controls": lt,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": de ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": s,
      "aria-labelledby": [w, me].filter(Boolean).join(" ") || void 0,
      "aria-describedby": a,
      onKeyDown: ue,
      onMouseDown: h || N ? null : H,
      onBlur: ee,
      onFocus: F
    }, A, {
      ownerState: qe,
      className: ce(A.className, xt.select, u),
      id: me,
      children: e1(re) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        kl || (kl = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : re
    })), /* @__PURE__ */ S.jsx(JT, g({
      "aria-invalid": y,
      value: Array.isArray($) ? $.join(",") : $,
      name: E,
      ref: G,
      "aria-hidden": !0,
      onChange: be,
      tabIndex: -1,
      disabled: h,
      className: xt.nativeInput,
      autoFocus: i,
      ownerState: qe
    }, j)), /* @__PURE__ */ S.jsx(ZT, {
      as: f,
      className: xt.icon,
      ownerState: qe
    }), /* @__PURE__ */ S.jsx(LT, g({
      id: `menu-${E || ""}`,
      anchorEl: K,
      open: de,
      onClose: se,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, T, {
      MenuListProps: g({
        "aria-labelledby": w,
        role: "listbox",
        "aria-multiselectable": x ? "true" : void 0,
        disableListWrap: !0,
        id: lt
      }, T.MenuListProps),
      slotProps: g({}, T.slotProps, {
        paper: g({}, mt, {
          style: g({
            minWidth: De
          }, mt != null ? mt.style : null)
        })
      }),
      children: Ye
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Td.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * @ignore
   */
  "aria-label": n.string,
  /**
   * @ignore
   */
  autoFocus: n.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: ht,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * @ignore
   */
  readOnly: n.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  type: n.any,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
const n1 = Td, o1 = Lt(/* @__PURE__ */ S.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), r1 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], s1 = ["root"], a1 = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, Ka = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Vt(e) && e !== "variant",
  slot: "Root"
}, i1 = ne(id, Ka)(""), l1 = ne(ud, Ka)(""), c1 = ne(ld, Ka)(""), Ga = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: a = !1,
    children: s,
    classes: i = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = o1,
    id: p,
    input: h,
    inputProps: m,
    label: y,
    labelId: f,
    MenuProps: C,
    multiple: w = !1,
    native: T = !1,
    onClose: x,
    onOpen: E,
    open: v,
    renderValue: D,
    SelectDisplayProps: O,
    variant: F = "outlined"
  } = r, _ = ae(r, r1), V = T ? qT : n1, N = On(), L = co({
    props: r,
    muiFormControl: N,
    states: ["variant", "error"]
  }), A = L.variant || F, R = g({}, r, {
    variant: A,
    classes: i
  }), P = a1(R), M = ae(P, s1), j = h || {
    standard: /* @__PURE__ */ S.jsx(i1, {
      ownerState: R
    }),
    outlined: /* @__PURE__ */ S.jsx(l1, {
      label: y,
      ownerState: R
    }),
    filled: /* @__PURE__ */ S.jsx(c1, {
      ownerState: R
    })
  }[A], $ = We(o, Wo(j));
  return /* @__PURE__ */ S.jsx(b.Fragment, {
    children: /* @__PURE__ */ b.cloneElement(j, g({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: V,
      inputProps: g({
        children: s,
        error: L.error,
        IconComponent: d,
        variant: A,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: w
      }, T ? {
        id: p
      } : {
        autoWidth: a,
        defaultOpen: c,
        displayEmpty: u,
        labelId: f,
        MenuProps: C,
        onClose: x,
        onOpen: E,
        open: v,
        renderValue: D,
        SelectDisplayProps: g({
          id: p
        }, O)
      }, m, {
        classes: m ? wt(M, m.classes) : M
      }, h ? h.props.inputProps : {})
    }, (w && T || u) && A === "outlined" ? {
      notched: !0
    } : {}, {
      ref: $,
      className: ce(j.props.className, l, P.root)
    }, !h && {
      variant: A
    }, _))
  });
});
process.env.NODE_ENV !== "production" && (Ga.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: n.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: n.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: n.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: n.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: n.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: n.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: n.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: n.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: n.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: n.oneOfType([n.oneOf([""]), n.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
Ga.muiName = "Select";
const u1 = Ga;
function d1(e) {
  return xe("MuiTextField", e);
}
ye("MuiTextField", ["root"]);
const f1 = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], p1 = {
  standard: id,
  filled: ld,
  outlined: ud
}, h1 = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"]
  }, d1, t);
}, m1 = ne(mT, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ed = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ae({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: a,
    autoFocus: s = !1,
    children: i,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: p = !1,
    FormHelperTextProps: h,
    fullWidth: m = !1,
    helperText: y,
    id: f,
    InputLabelProps: C,
    inputProps: w,
    InputProps: T,
    inputRef: x,
    label: E,
    maxRows: v,
    minRows: D,
    multiline: O = !1,
    name: F,
    onBlur: _,
    onChange: V,
    onFocus: N,
    placeholder: L,
    required: A = !1,
    rows: R,
    select: P = !1,
    SelectProps: M,
    type: j,
    value: $,
    variant: B = "outlined"
  } = r, I = ae(r, f1), z = g({}, r, {
    autoFocus: s,
    color: c,
    disabled: d,
    error: p,
    fullWidth: m,
    multiline: O,
    required: A,
    select: P,
    variant: B
  }), G = h1(z);
  process.env.NODE_ENV !== "production" && P && !i && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const X = {};
  B === "outlined" && (C && typeof C.shrink < "u" && (X.notched = C.shrink), X.label = E), P && ((!M || !M.native) && (X.id = void 0), X["aria-describedby"] = void 0);
  const W = En(f), q = y && W ? `${W}-helper-text` : void 0, Z = E && W ? `${W}-label` : void 0, U = p1[B], Q = /* @__PURE__ */ S.jsx(U, g({
    "aria-describedby": q,
    autoComplete: a,
    autoFocus: s,
    defaultValue: u,
    fullWidth: m,
    multiline: O,
    name: F,
    rows: R,
    maxRows: v,
    minRows: D,
    type: j,
    value: $,
    id: W,
    inputRef: x,
    onBlur: _,
    onChange: V,
    onFocus: N,
    placeholder: L,
    inputProps: w
  }, X, T));
  return /* @__PURE__ */ S.jsxs(m1, g({
    className: ce(G.root, l),
    disabled: d,
    error: p,
    fullWidth: m,
    ref: o,
    required: A,
    color: c,
    variant: B,
    ownerState: z
  }, I, {
    children: [E != null && E !== "" && /* @__PURE__ */ S.jsx(uT, g({
      htmlFor: W,
      id: Z
    }, C, {
      children: E
    })), P ? /* @__PURE__ */ S.jsx(u1, g({
      "aria-describedby": q,
      id: W,
      labelId: Z,
      value: $,
      input: Q
    }, M, {
      children: i
    })) : Q, y && /* @__PURE__ */ S.jsx(CT, g({
      id: q
    }, h, {
      children: y
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Ed.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * @ignore
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ht,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: n.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: n.object,
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const g1 = Ed, b1 = (e) => {
  var t, o, r;
  const a = ze(), s = Go();
  return g({}, e, {
    disablePast: (t = e.disablePast) != null ? t : !1,
    disableFuture: (o = e.disableFuture) != null ? o : !1,
    format: (r = e.format) != null ? r : a.formats.keyboardDate,
    minDate: It(a, e.minDate, s.minDate),
    maxDate: It(a, e.maxDate, s.maxDate)
  });
}, y1 = ({
  props: e,
  inputRef: t
}) => {
  const o = b1(e), {
    forwardedProps: r,
    internalProps: a
  } = jC(o, "date");
  return I0({
    inputRef: t,
    forwardedProps: r,
    internalProps: a,
    valueManager: Zt,
    fieldValueManager: Sb,
    validator: us,
    valueType: "date"
  });
}, v1 = ["ownerState"], x1 = ({
  clearable: e,
  fieldProps: t,
  InputProps: o,
  onClear: r,
  slots: a,
  slotProps: s,
  components: i,
  componentsProps: l
}) => {
  var c, u, d, p, h, m;
  const y = dn(), f = (c = (u = a == null ? void 0 : a.clearButton) != null ? u : i == null ? void 0 : i.ClearButton) != null ? c : rs, C = ot({
    elementType: f,
    externalSlotProps: (d = s == null ? void 0 : s.clearButton) != null ? d : l == null ? void 0 : l.clearButton,
    ownerState: {},
    className: "clearButton",
    additionalProps: {
      title: y.fieldClearLabel
    }
  }), w = ae(C, v1), T = (p = (h = a == null ? void 0 : a.clearIcon) != null ? h : i == null ? void 0 : i.ClearIcon) != null ? p : Ry, x = ot({
    elementType: T,
    externalSlotProps: (m = s == null ? void 0 : s.clearIcon) != null ? m : l == null ? void 0 : l.clearIcon,
    ownerState: {}
  }), E = g({}, o, {
    endAdornment: /* @__PURE__ */ S.jsxs(b.Fragment, {
      children: [e && /* @__PURE__ */ S.jsx(od, {
        position: "end",
        sx: {
          marginRight: o != null && o.endAdornment ? -1 : -1.5
        },
        children: /* @__PURE__ */ S.jsx(f, g({}, w, {
          onClick: r,
          children: /* @__PURE__ */ S.jsx(T, g({
            fontSize: "small"
          }, x))
        }))
      }), o == null ? void 0 : o.endAdornment]
    })
  }), v = g({}, t, {
    sx: [{
      "& .clearButton": {
        opacity: 1
      },
      "@media (pointer: fine)": {
        "& .clearButton": {
          opacity: 0
        },
        "&:hover, &:focus-within": {
          ".clearButton": {
            opacity: 1
          }
        }
      }
    }, ...Array.isArray(t.sx) ? t.sx : [t.sx]]
  });
  return {
    InputProps: E,
    fieldProps: v
  };
}, C1 = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"], w1 = ["inputRef"], T1 = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly", "clearable", "onClear"], Xa = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s;
  const i = at({
    props: t,
    name: "MuiDateField"
  }), {
    components: l,
    componentsProps: c,
    slots: u,
    slotProps: d,
    InputProps: p,
    inputProps: h
  } = i, m = ae(i, C1), y = i, f = (r = (a = u == null ? void 0 : u.textField) != null ? a : l == null ? void 0 : l.TextField) != null ? r : g1, C = ot({
    elementType: f,
    externalSlotProps: (s = d == null ? void 0 : d.textField) != null ? s : c == null ? void 0 : c.textField,
    externalForwardedProps: m,
    ownerState: y
  }), {
    inputRef: w
  } = C, T = ae(C, w1);
  T.inputProps = g({}, h, T.inputProps), T.InputProps = g({}, p, T.InputProps);
  const x = y1({
    props: T,
    inputRef: w
  }), {
    ref: E,
    onPaste: v,
    onKeyDown: D,
    inputMode: O,
    readOnly: F,
    clearable: _,
    onClear: V
  } = x, N = ae(x, T1), {
    InputProps: L,
    fieldProps: A
  } = x1({
    onClear: V,
    clearable: _,
    fieldProps: N,
    InputProps: N.InputProps,
    slots: u,
    slotProps: d,
    components: l,
    componentsProps: c
  });
  return /* @__PURE__ */ S.jsx(f, g({
    ref: o
  }, A, {
    InputProps: g({}, L, {
      readOnly: F
    }),
    inputProps: g({}, N.inputProps, {
      inputMode: O,
      onPaste: v,
      onKeyDown: D,
      ref: E
    })
  }));
});
process.env.NODE_ENV !== "production" && (Xa.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  className: n.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: n.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: n.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: n.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: n.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ht,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: n.any,
  /**
   * Minimal selectable date.
   */
  minDate: n.any,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  onBlur: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: n.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: n.func,
  onFocus: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: n.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: n.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number, n.shape({
    endIndex: n.number.isRequired,
    startIndex: n.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default `false`
   */
  shouldRespectLeadingZeros: n.bool,
  /**
   * The size of the component.
   */
  size: n.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: n.oneOfType([n.func, n.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const E1 = (e) => xe("MuiPickersFadeTransitionGroup", e);
ye("MuiPickersFadeTransitionGroup", ["root"]);
const S1 = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"]
  }, E1, t);
}, P1 = ne(Ra, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "block",
  position: "relative"
});
function Sd(e) {
  const t = at({
    props: e,
    name: "MuiPickersFadeTransitionGroup"
  }), {
    children: o,
    className: r,
    reduceAnimations: a,
    transKey: s
  } = t, i = S1(t), l = At();
  return a ? o : /* @__PURE__ */ S.jsx(P1, {
    className: ce(i.root, r),
    children: /* @__PURE__ */ S.jsx(lo, {
      appear: !1,
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: {
        appear: l.transitions.duration.enteringScreen,
        enter: l.transitions.duration.enteringScreen,
        exit: 0
      },
      children: o
    }, s)
  });
}
function O1(e) {
  return xe("MuiPickersMonth", e);
}
const lr = ye("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]), R1 = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "aria-label", "monthsPerRow"], D1 = (e) => {
  const {
    disabled: t,
    selected: o,
    classes: r
  } = e;
  return we({
    root: ["root"],
    monthButton: ["monthButton", t && "disabled", o && "selected"]
  }, O1, r);
}, M1 = ne("div", {
  name: "MuiPickersMonth",
  slot: "Root",
  overridesResolver: (e, t) => [t.root]
})(({
  ownerState: e
}) => ({
  flexBasis: e.monthsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})), $1 = ne("button", {
  name: "MuiPickersMonth",
  slot: "MonthButton",
  overridesResolver: (e, t) => [t.monthButton, {
    [`&.${lr.disabled}`]: t.disabled
  }, {
    [`&.${lr.selected}`]: t.selected
  }]
})(({
  theme: e
}) => g({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, e.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Gn(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Gn(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${lr.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${lr.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), k1 = /* @__PURE__ */ b.memo(function(t) {
  const o = at({
    props: t,
    name: "MuiPickersMonth"
  }), {
    autoFocus: r,
    children: a,
    disabled: s,
    selected: i,
    value: l,
    tabIndex: c,
    onClick: u,
    onKeyDown: d,
    onFocus: p,
    onBlur: h,
    "aria-current": m,
    "aria-label": y
    // We don't want to forward this prop to the root element
  } = o, f = ae(o, R1), C = b.useRef(null), w = D1(o);
  return it(() => {
    if (r) {
      var T;
      (T = C.current) == null || T.focus();
    }
  }, [r]), /* @__PURE__ */ S.jsx(M1, g({
    className: w.root,
    ownerState: o
  }, f, {
    children: /* @__PURE__ */ S.jsx($1, {
      ref: C,
      disabled: s,
      type: "button",
      role: "radio",
      tabIndex: s ? -1 : c,
      "aria-current": m,
      "aria-checked": i,
      "aria-label": y,
      onClick: (T) => u(T, l),
      onKeyDown: (T) => d(T, l),
      onFocus: (T) => p(T, l),
      onBlur: (T) => h(T, l),
      className: w.monthButton,
      ownerState: o,
      children: a
    })
  }));
});
function I1(e) {
  return xe("MuiMonthCalendar", e);
}
ye("MuiMonthCalendar", ["root"]);
const N1 = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId"], _1 = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"]
  }, I1, t);
};
function j1(e, t) {
  const o = ze(), r = Go(), a = at({
    props: e,
    name: t
  });
  return g({
    disableFuture: !1,
    disablePast: !1
  }, a, {
    minDate: It(o, a.minDate, r.minDate),
    maxDate: It(o, a.maxDate, r.maxDate)
  });
}
const A1 = ne("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "stretch",
  padding: "0 4px",
  width: is,
  // avoid padding increasing width over defined
  boxSizing: "border-box"
}), Pd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = j1(t, "MuiMonthCalendar"), {
    className: a,
    value: s,
    defaultValue: i,
    referenceDate: l,
    disabled: c,
    disableFuture: u,
    disablePast: d,
    maxDate: p,
    minDate: h,
    onChange: m,
    shouldDisableMonth: y,
    readOnly: f,
    disableHighlightToday: C,
    autoFocus: w = !1,
    onMonthFocus: T,
    hasFocus: x,
    onFocusedViewChange: E,
    monthsPerRow: v = 3,
    timezone: D,
    gridLabelId: O
  } = r, F = ae(r, N1), {
    value: _,
    handleValueChange: V,
    timezone: N
  } = La({
    name: "MonthCalendar",
    timezone: D,
    value: s,
    defaultValue: i,
    onChange: m,
    valueManager: Zt
  }), L = ts(N), A = Ko(), R = ze(), P = b.useMemo(
    () => Zt.getInitialReferenceValue({
      value: _,
      utils: R,
      props: r,
      timezone: N,
      referenceDate: l,
      granularity: Yt.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), M = r, j = _1(M), $ = b.useMemo(() => R.getMonth(L), [R, L]), B = b.useMemo(() => _ != null ? R.getMonth(_) : C ? null : R.getMonth(P), [_, R, C, P]), [I, z] = b.useState(() => B || $), [G, X] = Ft({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: x,
    default: w ?? !1
  }), W = pe((K) => {
    X(K), E && E(K);
  }), q = b.useCallback((K) => {
    const Y = R.startOfMonth(d && R.isAfter(L, h) ? L : h), H = R.startOfMonth(u && R.isBefore(L, p) ? L : p), se = R.startOfMonth(K);
    return R.isBefore(se, Y) || R.isAfter(se, H) ? !0 : y ? y(se) : !1;
  }, [u, d, p, h, L, y, R]), Z = pe((K, Y) => {
    if (f)
      return;
    const H = R.setMonth(_ ?? P, Y);
    V(H);
  }), U = pe((K) => {
    q(R.setMonth(_ ?? P, K)) || (z(K), W(!0), T && T(K));
  });
  b.useEffect(() => {
    z((K) => B !== null && K !== B ? B : K);
  }, [B]);
  const Q = pe((K, Y) => {
    switch (K.key) {
      case "ArrowUp":
        U((12 + Y - 3) % 12), K.preventDefault();
        break;
      case "ArrowDown":
        U((12 + Y + 3) % 12), K.preventDefault();
        break;
      case "ArrowLeft":
        U((12 + Y + (A.direction === "ltr" ? -1 : 1)) % 12), K.preventDefault();
        break;
      case "ArrowRight":
        U((12 + Y + (A.direction === "ltr" ? 1 : -1)) % 12), K.preventDefault();
        break;
    }
  }), oe = pe((K, Y) => {
    U(Y);
  }), J = pe((K, Y) => {
    I === Y && W(!1);
  });
  return /* @__PURE__ */ S.jsx(A1, g({
    ref: o,
    className: ce(j.root, a),
    ownerState: M,
    role: "radiogroup",
    "aria-labelledby": O
  }, F, {
    children: xa(R, _ ?? P).map((K) => {
      const Y = R.getMonth(K), H = R.format(K, "monthShort"), se = R.format(K, "month"), fe = Y === B, be = c || q(K);
      return /* @__PURE__ */ S.jsx(k1, {
        selected: fe,
        value: Y,
        onClick: Z,
        onKeyDown: Q,
        autoFocus: G && Y === I,
        disabled: be,
        tabIndex: Y === I ? 0 : -1,
        onFocus: oe,
        onBlur: J,
        "aria-current": $ === Y ? "date" : void 0,
        "aria-label": se,
        monthsPerRow: v,
        children: H
      }, H);
    })
  }));
});
process.env.NODE_ENV !== "production" && (Pd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * className applied to the root element.
   */
  className: n.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true` picker is disabled
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  gridLabelId: n.string,
  hasFocus: n.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: n.any,
  /**
   * Minimal selectable date.
   */
  minDate: n.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: n.func,
  onFocusedViewChange: n.func,
  onMonthFocus: n.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: n.any,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.any
});
function F1(e) {
  return xe("MuiPickersYear", e);
}
const cr = ye("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]), V1 = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"], L1 = (e) => {
  const {
    disabled: t,
    selected: o,
    classes: r
  } = e;
  return we({
    root: ["root"],
    yearButton: ["yearButton", t && "disabled", o && "selected"]
  }, F1, r);
}, B1 = ne("div", {
  name: "MuiPickersYear",
  slot: "Root",
  overridesResolver: (e, t) => [t.root]
})(({
  ownerState: e
}) => ({
  flexBasis: e.yearsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})), W1 = ne("button", {
  name: "MuiPickersYear",
  slot: "YearButton",
  overridesResolver: (e, t) => [t.yearButton, {
    [`&.${cr.disabled}`]: t.disabled
  }, {
    [`&.${cr.selected}`]: t.selected
  }]
})(({
  theme: e
}) => g({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, e.typography.subtitle1, {
  margin: "6px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.focusOpacity})` : Gn(e.palette.action.active, e.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Gn(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${cr.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${cr.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), z1 = /* @__PURE__ */ b.memo(function(t) {
  const o = at({
    props: t,
    name: "MuiPickersYear"
  }), {
    autoFocus: r,
    className: a,
    children: s,
    disabled: i,
    selected: l,
    value: c,
    tabIndex: u,
    onClick: d,
    onKeyDown: p,
    onFocus: h,
    onBlur: m,
    "aria-current": y
    // We don't want to forward this prop to the root element
  } = o, f = ae(o, V1), C = b.useRef(null), w = L1(o);
  return b.useEffect(() => {
    r && C.current.focus();
  }, [r]), /* @__PURE__ */ S.jsx(B1, g({
    className: ce(w.root, a),
    ownerState: o
  }, f, {
    children: /* @__PURE__ */ S.jsx(W1, {
      ref: C,
      disabled: i,
      type: "button",
      role: "radio",
      tabIndex: i ? -1 : u,
      "aria-current": y,
      "aria-checked": l,
      onClick: (T) => d(T, c),
      onKeyDown: (T) => p(T, c),
      onFocus: (T) => h(T, c),
      onBlur: (T) => m(T, c),
      className: w.yearButton,
      ownerState: o,
      children: s
    })
  }));
});
function U1(e) {
  return xe("MuiYearCalendar", e);
}
ye("MuiYearCalendar", ["root"]);
const Y1 = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow", "timezone", "gridLabelId"], H1 = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"]
  }, U1, t);
};
function q1(e, t) {
  var o;
  const r = ze(), a = Go(), s = at({
    props: e,
    name: t
  });
  return g({
    disablePast: !1,
    disableFuture: !1
  }, s, {
    yearsPerRow: (o = s.yearsPerRow) != null ? o : 3,
    minDate: It(r, s.minDate, a.minDate),
    maxDate: It(r, s.maxDate, a.maxDate)
  });
}
const K1 = ne("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowY: "auto",
  height: "100%",
  padding: "0 4px",
  width: is,
  maxHeight: $v,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative"
}), Od = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = q1(t, "MuiYearCalendar"), {
    autoFocus: a,
    className: s,
    value: i,
    defaultValue: l,
    referenceDate: c,
    disabled: u,
    disableFuture: d,
    disablePast: p,
    maxDate: h,
    minDate: m,
    onChange: y,
    readOnly: f,
    shouldDisableYear: C,
    disableHighlightToday: w,
    onYearFocus: T,
    hasFocus: x,
    onFocusedViewChange: E,
    yearsPerRow: v,
    timezone: D,
    gridLabelId: O
  } = r, F = ae(r, Y1), {
    value: _,
    handleValueChange: V,
    timezone: N
  } = La({
    name: "YearCalendar",
    timezone: D,
    value: i,
    defaultValue: l,
    onChange: y,
    valueManager: Zt
  }), L = ts(N), A = Ko(), R = ze(), P = b.useMemo(
    () => Zt.getInitialReferenceValue({
      value: _,
      utils: R,
      props: r,
      timezone: N,
      referenceDate: c,
      granularity: Yt.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), M = r, j = H1(M), $ = b.useMemo(() => R.getYear(L), [R, L]), B = b.useMemo(() => _ != null ? R.getYear(_) : w ? null : R.getYear(P), [_, R, w, P]), [I, z] = b.useState(() => B || $), [G, X] = Ft({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: x,
    default: a ?? !1
  }), W = pe((H) => {
    X(H), E && E(H);
  }), q = b.useCallback((H) => {
    if (p && R.isBeforeYear(H, L) || d && R.isAfterYear(H, L) || m && R.isBeforeYear(H, m) || h && R.isAfterYear(H, h))
      return !0;
    if (!C)
      return !1;
    const se = R.startOfYear(H);
    return C(se);
  }, [d, p, h, m, L, C, R]), Z = pe((H, se) => {
    if (f)
      return;
    const fe = R.setYear(_ ?? P, se);
    V(fe);
  }), U = pe((H) => {
    q(R.setYear(_ ?? P, H)) || (z(H), W(!0), T == null || T(H));
  });
  b.useEffect(() => {
    z((H) => B !== null && H !== B ? B : H);
  }, [B]);
  const Q = pe((H, se) => {
    switch (H.key) {
      case "ArrowUp":
        U(se - v), H.preventDefault();
        break;
      case "ArrowDown":
        U(se + v), H.preventDefault();
        break;
      case "ArrowLeft":
        U(se + (A.direction === "ltr" ? -1 : 1)), H.preventDefault();
        break;
      case "ArrowRight":
        U(se + (A.direction === "ltr" ? 1 : -1)), H.preventDefault();
        break;
    }
  }), oe = pe((H, se) => {
    U(se);
  }), J = pe((H, se) => {
    I === se && W(!1);
  }), K = b.useRef(null), Y = We(o, K);
  return b.useEffect(() => {
    if (a || K.current === null)
      return;
    const H = K.current.querySelector('[tabindex="0"]');
    if (!H)
      return;
    const se = H.offsetHeight, fe = H.offsetTop, be = K.current.clientHeight, $e = K.current.scrollTop, ue = fe + se;
    se > be || fe < $e || (K.current.scrollTop = ue - be / 2 - se / 2);
  }, [a]), /* @__PURE__ */ S.jsx(K1, g({
    ref: Y,
    className: ce(j.root, s),
    ownerState: M,
    role: "radiogroup",
    "aria-labelledby": O
  }, F, {
    children: R.getYearRange(m, h).map((H) => {
      const se = R.getYear(H), fe = se === B, be = u || q(H);
      return /* @__PURE__ */ S.jsx(z1, {
        selected: fe,
        value: se,
        onClick: Z,
        onKeyDown: Q,
        autoFocus: G && se === I,
        disabled: be,
        tabIndex: se === I ? 0 : -1,
        onFocus: oe,
        onBlur: J,
        "aria-current": $ === se ? "date" : void 0,
        yearsPerRow: v,
        children: R.format(H, "year")
      }, R.format(H, "year"));
    })
  }));
});
process.env.NODE_ENV !== "production" && (Od.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * className applied to the root element.
   */
  className: n.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true` picker is disabled
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  gridLabelId: n.string,
  hasFocus: n.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: n.any,
  /**
   * Minimal selectable date.
   */
  minDate: n.any,
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: n.func,
  onFocusedViewChange: n.func,
  onYearFocus: n.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: n.any,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.any,
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: n.oneOf([3, 4])
});
const G1 = (e) => xe("MuiPickersCalendarHeader", e), X1 = ye("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]), Q1 = ["slots", "slotProps", "components", "componentsProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone"], Z1 = ["ownerState"], J1 = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  }, G1, t);
}, eE = ne("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  alignItems: "center",
  marginTop: 16,
  marginBottom: 8,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 30,
  minHeight: 30
}), tE = ne("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer",
  overridesResolver: (e, t) => t.labelContainer
})(({
  theme: e
}) => g({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, e.typography.body1, {
  fontWeight: e.typography.fontWeightMedium
})), nE = ne("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label",
  overridesResolver: (e, t) => t.label
})({
  marginRight: 6
}), oE = ne(rs, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton",
  overridesResolver: (e, t) => t.switchViewButton
})(({
  ownerState: e
}) => g({
  marginRight: "auto"
}, e.view === "year" && {
  [`.${X1.switchViewIcon}`]: {
    transform: "rotate(180deg)"
  }
})), rE = ne(Ey, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon",
  overridesResolver: (e, t) => t.switchViewIcon
})(({
  theme: e
}) => ({
  willChange: "transform",
  transition: e.transitions.create("transform"),
  transform: "rotate(0deg)"
})), Rd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i;
  const l = dn(), c = ze(), u = at({
    props: t,
    name: "MuiPickersCalendarHeader"
  }), {
    slots: d,
    slotProps: p,
    components: h,
    currentMonth: m,
    disabled: y,
    disableFuture: f,
    disablePast: C,
    maxDate: w,
    minDate: T,
    onMonthChange: x,
    onViewChange: E,
    view: v,
    reduceAnimations: D,
    views: O,
    labelId: F,
    className: _,
    timezone: V
  } = u, N = ae(u, Q1), L = u, A = J1(u), R = (r = (a = d == null ? void 0 : d.switchViewButton) != null ? a : h == null ? void 0 : h.SwitchViewButton) != null ? r : oE, P = ot({
    elementType: R,
    externalSlotProps: p == null ? void 0 : p.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": l.calendarViewSwitchingButtonAriaLabel(v)
    },
    ownerState: L,
    className: A.switchViewButton
  }), M = (s = (i = d == null ? void 0 : d.switchViewIcon) != null ? i : h == null ? void 0 : h.SwitchViewIcon) != null ? s : rE, j = ot({
    elementType: M,
    externalSlotProps: p == null ? void 0 : p.switchViewIcon,
    ownerState: void 0,
    className: A.switchViewIcon
  }), $ = ae(j, Z1), B = () => x(c.addMonths(m, 1), "left"), I = () => x(c.addMonths(m, -1), "right"), z = kC(m, {
    disableFuture: f,
    maxDate: w,
    timezone: V
  }), G = IC(m, {
    disablePast: C,
    minDate: T,
    timezone: V
  }), X = () => {
    if (!(O.length === 1 || !E || y))
      if (O.length === 2)
        E(O.find((W) => W !== v) || O[0]);
      else {
        const W = O.indexOf(v) !== 0 ? 0 : 1;
        E(O[W]);
      }
  };
  return O.length === 1 && O[0] === "year" ? null : /* @__PURE__ */ S.jsxs(eE, g({}, N, {
    ownerState: L,
    className: ce(_, A.root),
    ref: o,
    children: [/* @__PURE__ */ S.jsxs(tE, {
      role: "presentation",
      onClick: X,
      ownerState: L,
      "aria-live": "polite",
      className: A.labelContainer,
      children: [/* @__PURE__ */ S.jsx(Sd, {
        reduceAnimations: D,
        transKey: c.format(m, "monthAndYear"),
        children: /* @__PURE__ */ S.jsx(nE, {
          id: F,
          ownerState: L,
          className: A.label,
          children: c.format(m, "monthAndYear")
        })
      }), O.length > 1 && !y && /* @__PURE__ */ S.jsx(R, g({}, P, {
        children: /* @__PURE__ */ S.jsx(M, g({}, $))
      }))]
    }), /* @__PURE__ */ S.jsx(lo, {
      in: v === "day",
      children: /* @__PURE__ */ S.jsx(jy, {
        slots: d,
        slotProps: p,
        onGoToPrevious: I,
        isPreviousDisabled: G,
        previousLabel: l.previousMonth,
        onGoToNext: B,
        isNextDisabled: z,
        nextLabel: l.nextMonth
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Rd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * className applied to the root element.
   */
  className: n.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: n.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: n.object,
  currentMonth: n.any.isRequired,
  disabled: n.bool,
  disableFuture: n.bool,
  disablePast: n.bool,
  labelId: n.string,
  maxDate: n.any.isRequired,
  minDate: n.any.isRequired,
  onMonthChange: n.func.isRequired,
  onViewChange: n.func,
  reduceAnimations: n.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  timezone: n.string.isRequired,
  view: n.oneOf(["day", "month", "year"]).isRequired,
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired).isRequired
});
const sE = ne("div")({
  overflow: "hidden",
  width: is,
  maxHeight: Da,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
}), aE = (e) => xe("MuiDateCalendar", e);
ye("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const iE = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow", "timezone"], lE = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  }, aE, t);
};
function cE(e, t) {
  var o, r, a, s, i, l, c;
  const u = ze(), d = Go(), p = Mu(), h = at({
    props: e,
    name: t
  });
  return g({}, h, {
    loading: (o = h.loading) != null ? o : !1,
    disablePast: (r = h.disablePast) != null ? r : !1,
    disableFuture: (a = h.disableFuture) != null ? a : !1,
    openTo: (s = h.openTo) != null ? s : "day",
    views: (i = h.views) != null ? i : ["year", "day"],
    reduceAnimations: (l = h.reduceAnimations) != null ? l : p,
    renderLoading: (c = h.renderLoading) != null ? c : () => /* @__PURE__ */ S.jsx("span", {
      children: "..."
    }),
    minDate: It(u, h.minDate, d.minDate),
    maxDate: It(u, h.maxDate, d.maxDate)
  });
}
const uE = ne(sE, {
  name: "MuiDateCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexDirection: "column",
  height: Da
}), dE = ne(Sd, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer",
  overridesResolver: (e, t) => t.viewTransitionContainer
})({}), Dd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s;
  const i = ze(), l = En(), c = cE(t, "MuiDateCalendar"), {
    autoFocus: u,
    onViewChange: d,
    value: p,
    defaultValue: h,
    referenceDate: m,
    disableFuture: y,
    disablePast: f,
    defaultCalendarMonth: C,
    onChange: w,
    onYearChange: T,
    onMonthChange: x,
    reduceAnimations: E,
    shouldDisableDate: v,
    shouldDisableMonth: D,
    shouldDisableYear: O,
    view: F,
    views: _,
    openTo: V,
    className: N,
    disabled: L,
    readOnly: A,
    minDate: R,
    maxDate: P,
    disableHighlightToday: M,
    focusedView: j,
    onFocusedViewChange: $,
    showDaysOutsideCurrentMonth: B,
    fixedWeekNumber: I,
    dayOfWeekFormatter: z,
    components: G,
    componentsProps: X,
    slots: W,
    slotProps: q,
    loading: Z,
    renderLoading: U,
    displayWeekNumber: Q,
    yearsPerRow: oe,
    monthsPerRow: J,
    timezone: K
  } = c, Y = ae(c, iE), {
    value: H,
    handleValueChange: se,
    timezone: fe
  } = La({
    name: "DateCalendar",
    timezone: K,
    value: p,
    defaultValue: h,
    onChange: w,
    valueManager: Zt
  }), {
    view: be,
    setView: $e,
    focusedView: ue,
    setFocusedView: de,
    goToNextView: ee,
    setValueAndGoToNextView: re
  } = ju({
    view: F,
    views: _,
    openTo: V,
    onChange: se,
    onViewChange: d,
    autoFocus: u,
    focusedView: j,
    onFocusedViewChange: $
  }), {
    referenceDate: he,
    calendarState: Te,
    changeFocusedDay: ve,
    changeMonth: Oe,
    handleChangeMonth: Ye,
    isDateDisabled: De,
    onMonthSwitchingAnimationEnd: Ee
  } = uw({
    value: H,
    defaultCalendarMonth: C,
    referenceDate: m,
    reduceAnimations: E,
    onMonthChange: x,
    minDate: R,
    maxDate: P,
    shouldDisableDate: v,
    disablePast: f,
    disableFuture: y,
    timezone: fe
  }), me = L && H || R, qe = L && H || P, xt = `${l}-grid-label`, mt = ue !== null, lt = (r = (a = W == null ? void 0 : W.calendarHeader) != null ? a : G == null ? void 0 : G.CalendarHeader) != null ? r : Rd, ge = ot({
    elementType: lt,
    externalSlotProps: (s = q == null ? void 0 : q.calendarHeader) != null ? s : X == null ? void 0 : X.calendarHeader,
    additionalProps: {
      views: _,
      view: be,
      currentMonth: Te.currentMonth,
      onViewChange: $e,
      onMonthChange: (Be, St) => Ye({
        newMonth: Be,
        direction: St
      }),
      minDate: me,
      maxDate: qe,
      disabled: L,
      disablePast: f,
      disableFuture: y,
      reduceAnimations: E,
      timezone: fe,
      labelId: xt,
      slots: W,
      slotProps: q
    },
    ownerState: c
  }), Se = pe((Be) => {
    const St = i.startOfMonth(Be), on = i.endOfMonth(Be), zt = De(Be) ? So({
      utils: i,
      date: Be,
      minDate: i.isBefore(R, St) ? St : R,
      maxDate: i.isAfter(P, on) ? on : P,
      disablePast: f,
      disableFuture: y,
      isDateDisabled: De,
      timezone: fe
    }) : Be;
    zt ? (re(zt, "finish"), x == null || x(St)) : (ee(), Oe(St)), ve(zt, !0);
  }), Qe = pe((Be) => {
    const St = i.startOfYear(Be), on = i.endOfYear(Be), zt = De(Be) ? So({
      utils: i,
      date: Be,
      minDate: i.isBefore(R, St) ? St : R,
      maxDate: i.isAfter(P, on) ? on : P,
      disablePast: f,
      disableFuture: y,
      isDateDisabled: De,
      timezone: fe
    }) : Be;
    zt ? (re(zt, "finish"), T == null || T(zt)) : (ee(), Oe(St)), ve(zt, !0);
  }), Bt = pe((Be) => se(Be && Pr(i, Be, H ?? he), "finish", be));
  b.useEffect(() => {
    H != null && i.isValid(H) && Oe(H);
  }, [H]);
  const nn = c, Rn = lE(nn), Dn = {
    disablePast: f,
    disableFuture: y,
    maxDate: P,
    minDate: R
  }, Wt = {
    disableHighlightToday: M,
    readOnly: A,
    disabled: L,
    timezone: fe,
    gridLabelId: xt
  }, pn = b.useRef(be);
  b.useEffect(() => {
    pn.current !== be && (ue === pn.current && de(be, !0), pn.current = be);
  }, [ue, de, be]);
  const uo = b.useMemo(() => [H], [H]);
  return /* @__PURE__ */ S.jsxs(uE, g({
    ref: o,
    className: ce(Rn.root, N),
    ownerState: nn
  }, Y, {
    children: [/* @__PURE__ */ S.jsx(lt, g({}, ge)), /* @__PURE__ */ S.jsx(dE, {
      reduceAnimations: E,
      className: Rn.viewTransitionContainer,
      transKey: be,
      ownerState: nn,
      children: /* @__PURE__ */ S.jsxs("div", {
        children: [be === "year" && /* @__PURE__ */ S.jsx(Od, g({}, Dn, Wt, {
          value: H,
          onChange: Qe,
          shouldDisableYear: O,
          hasFocus: mt,
          onFocusedViewChange: (Be) => de("year", Be),
          yearsPerRow: oe,
          referenceDate: he
        })), be === "month" && /* @__PURE__ */ S.jsx(Pd, g({}, Dn, Wt, {
          hasFocus: mt,
          className: N,
          value: H,
          onChange: Se,
          shouldDisableMonth: D,
          onFocusedViewChange: (Be) => de("month", Be),
          monthsPerRow: J,
          referenceDate: he
        })), be === "day" && /* @__PURE__ */ S.jsx(lw, g({}, Te, Dn, Wt, {
          onMonthSwitchingAnimationEnd: Ee,
          onFocusedDayChange: ve,
          reduceAnimations: E,
          selectedDays: uo,
          onSelectedDaysChange: Bt,
          shouldDisableDate: v,
          shouldDisableMonth: D,
          shouldDisableYear: O,
          hasFocus: mt,
          onFocusedViewChange: (Be) => de("day", Be),
          showDaysOutsideCurrentMonth: B,
          fixedWeekNumber: I,
          dayOfWeekFormatter: z,
          displayWeekNumber: Q,
          components: G,
          componentsProps: X,
          slots: W,
          slotProps: q,
          loading: Z,
          renderLoading: U
        }))]
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Dd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: n.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: n.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: n.any,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: n.number,
  /**
   * Controlled focused view.
   */
  focusedView: n.oneOf(["day", "month", "year"]),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: n.any,
  /**
   * Minimal selectable date.
   */
  minDate: n.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: n.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: n.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: n.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: n.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: n.oneOf([3, 4])
});
const Hn = ({
  view: e,
  onViewChange: t,
  views: o,
  focusedView: r,
  onFocusedViewChange: a,
  value: s,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: d,
  disableFuture: p,
  disablePast: h,
  minDate: m,
  maxDate: y,
  shouldDisableDate: f,
  shouldDisableMonth: C,
  shouldDisableYear: w,
  reduceAnimations: T,
  onMonthChange: x,
  monthsPerRow: E,
  onYearChange: v,
  yearsPerRow: D,
  defaultCalendarMonth: O,
  components: F,
  componentsProps: _,
  slots: V,
  slotProps: N,
  loading: L,
  renderLoading: A,
  disableHighlightToday: R,
  readOnly: P,
  disabled: M,
  showDaysOutsideCurrentMonth: j,
  dayOfWeekFormatter: $,
  sx: B,
  autoFocus: I,
  fixedWeekNumber: z,
  displayWeekNumber: G,
  timezone: X
}) => /* @__PURE__ */ S.jsx(Dd, {
  view: e,
  onViewChange: t,
  views: o.filter(Yi),
  focusedView: r && Yi(r) ? r : null,
  onFocusedViewChange: a,
  value: s,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: d,
  disableFuture: p,
  disablePast: h,
  minDate: m,
  maxDate: y,
  shouldDisableDate: f,
  shouldDisableMonth: C,
  shouldDisableYear: w,
  reduceAnimations: T,
  onMonthChange: x,
  monthsPerRow: E,
  onYearChange: v,
  yearsPerRow: D,
  defaultCalendarMonth: O,
  components: F,
  componentsProps: _,
  slots: V,
  slotProps: N,
  loading: L,
  renderLoading: A,
  disableHighlightToday: R,
  readOnly: P,
  disabled: M,
  showDaysOutsideCurrentMonth: j,
  dayOfWeekFormatter: $,
  sx: B,
  autoFocus: I,
  fixedWeekNumber: z,
  displayWeekNumber: G,
  timezone: X
}), Md = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i;
  const l = dn(), c = ze(), u = Jc(t, "MuiDesktopDatePicker"), d = g({
    day: Hn,
    month: Hn,
    year: Hn
  }, u.viewRenderers), p = g({}, u, {
    viewRenderers: d,
    format: Ca(c, u, !1),
    yearsPerRow: (r = u.yearsPerRow) != null ? r : 4,
    slots: g({
      openPickerIcon: Oy,
      field: Xa
    }, u.slots),
    slotProps: g({}, u.slotProps, {
      field: (m) => {
        var y;
        return g({}, Bc((y = u.slotProps) == null ? void 0 : y.field, m), Gu(u), {
          ref: o
        });
      },
      toolbar: g({
        hidden: !0
      }, (a = u.slotProps) == null ? void 0 : a.toolbar)
    })
  }), {
    renderPicker: h
  } = xw({
    props: p,
    valueManager: Zt,
    valueType: "date",
    getOpenDialogAriaText: (s = (i = p.localeText) == null ? void 0 : i.openDatePickerDialogue) != null ? s : l.openDatePickerDialogue,
    validator: us
  });
  return h();
});
Md.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: n.bool,
  /**
   * Class name applied to the root element.
   */
  className: n.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: n.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: n.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: n.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: n.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: n.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ht,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: n.object,
  /**
   * Maximal selectable date.
   */
  maxDate: n.any,
  /**
   * Minimal selectable date.
   */
  minDate: n.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: n.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: n.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: n.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: n.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: n.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: n.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number, n.shape({
    endIndex: n.number.isRequired,
    startIndex: n.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: n.shape({
    day: n.func,
    month: n.func,
    year: n.func
  }),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: n.oneOf([3, 4])
};
const fE = ["props", "getOpenDialogAriaText"], pE = (e) => {
  var t, o, r;
  let {
    props: a,
    getOpenDialogAriaText: s
  } = e, i = ae(e, fE);
  const {
    slots: l,
    slotProps: c,
    className: u,
    sx: d,
    format: p,
    formatDensity: h,
    timezone: m,
    name: y,
    label: f,
    inputRef: C,
    readOnly: w,
    disabled: T,
    localeText: x
  } = a, E = ze(), v = b.useRef(null), D = En(), O = (t = c == null || (o = c.toolbar) == null ? void 0 : o.hidden) != null ? t : !1, {
    open: F,
    actions: _,
    layoutProps: V,
    renderCurrentView: N,
    fieldProps: L
  } = Au(g({}, i, {
    props: a,
    inputRef: v,
    autoFocusView: !0,
    additionalViewProps: {},
    wrapperVariant: "mobile"
  })), A = l.field, R = ot({
    elementType: A,
    externalSlotProps: c == null ? void 0 : c.field,
    additionalProps: g({}, L, O && {
      id: D
    }, !(T || w) && {
      onClick: _.onOpen,
      onKeyDown: l0(_.onOpen)
    }, {
      readOnly: w ?? !0,
      disabled: T,
      className: u,
      sx: d,
      format: p,
      formatDensity: h,
      timezone: m,
      label: f,
      name: y
    }),
    ownerState: a
  });
  R.inputProps = g({}, R.inputProps, {
    "aria-label": s(L.value, E)
  });
  const P = g({
    textField: l.textField
  }, R.slots), M = (r = l.layout) != null ? r : Wa, j = We(v, R.inputRef, C);
  let $ = D;
  O && (f ? $ = `${D}-label` : $ = void 0);
  const B = g({}, c, {
    toolbar: g({}, c == null ? void 0 : c.toolbar, {
      titleId: D
    }),
    mobilePaper: g({
      "aria-labelledby": $
    }, c == null ? void 0 : c.mobilePaper)
  });
  return {
    renderPicker: () => /* @__PURE__ */ S.jsxs(Jr, {
      localeText: x,
      children: [/* @__PURE__ */ S.jsx(A, g({}, R, {
        slots: P,
        slotProps: B,
        inputRef: j
      })), /* @__PURE__ */ S.jsx(Nv, g({}, _, {
        open: F,
        slots: l,
        slotProps: B,
        children: /* @__PURE__ */ S.jsx(M, g({}, V, B == null ? void 0 : B.layout, {
          slots: l,
          slotProps: B,
          children: N()
        }))
      }))]
    })
  };
}, $d = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s;
  const i = dn(), l = ze(), c = Jc(t, "MuiMobileDatePicker"), u = g({
    day: Hn,
    month: Hn,
    year: Hn
  }, c.viewRenderers), d = g({}, c, {
    viewRenderers: u,
    format: Ca(l, c, !1),
    slots: g({
      field: Xa
    }, c.slots),
    slotProps: g({}, c.slotProps, {
      field: (h) => {
        var m;
        return g({}, Bc((m = c.slotProps) == null ? void 0 : m.field, h), Gu(c), {
          ref: o
        });
      },
      toolbar: g({
        hidden: !1
      }, (r = c.slotProps) == null ? void 0 : r.toolbar)
    })
  }), {
    renderPicker: p
  } = pE({
    props: d,
    valueManager: Zt,
    valueType: "date",
    getOpenDialogAriaText: (a = (s = d.localeText) == null ? void 0 : s.openDatePickerDialogue) != null ? a : i.openDatePickerDialogue,
    validator: us
  });
  return p();
});
$d.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: n.bool,
  /**
   * Class name applied to the root element.
   */
  className: n.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: n.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: n.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: n.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: n.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: n.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ht,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: n.object,
  /**
   * Maximal selectable date.
   */
  maxDate: n.any,
  /**
   * Minimal selectable date.
   */
  minDate: n.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: n.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: n.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: n.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: n.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: n.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: n.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number, n.shape({
    endIndex: n.number.isRequired,
    startIndex: n.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: n.shape({
    day: n.func,
    month: n.func,
    year: n.func
  }),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: n.oneOf([3, 4])
};
const hE = ["desktopModeMediaQuery"], kd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = at({
    props: t,
    name: "MuiDatePicker"
  }), {
    desktopModeMediaQuery: a = c0
  } = r, s = ae(r, hE);
  return Ic(a, {
    defaultMatches: !0
  }) ? /* @__PURE__ */ S.jsx(Md, g({
    ref: o
  }, s)) : /* @__PURE__ */ S.jsx($d, g({
    ref: o
  }, s));
});
process.env.NODE_ENV !== "production" && (kd.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: n.bool,
  /**
   * Class name applied to the root element.
   */
  className: n.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: n.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: n.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: n.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: n.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: n.string,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: n.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: ht,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: n.object,
  /**
   * Maximal selectable date.
   */
  maxDate: n.any,
  /**
   * Minimal selectable date.
   */
  minDate: n.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: n.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: n.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: n.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: n.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: n.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: n.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number, n.shape({
    endIndex: n.number.isRequired,
    startIndex: n.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: n.shape({
    day: n.func,
    month: n.func,
    year: n.func
  }),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: n.oneOf([3, 4])
});
const mE = ({
  value: e,
  onChange: t,
  minDate: o,
  maxDate: r,
  disablePast: a,
  disableFuture: s,
  error: i,
  ...l
}) => /* @__PURE__ */ S.jsx(wn, { ...l, error: i, children: /* @__PURE__ */ S.jsx(Jr, { dateAdapter: Xg, children: /* @__PURE__ */ S.jsx(
  kd,
  {
    value: e ? rt(e) : null,
    onChange: (c) => {
      t(c ? c.toDate() : null);
    },
    minDate: o ? rt(o) : void 0,
    maxDate: r ? rt(r) : void 0,
    disablePast: a,
    disableFuture: s,
    slotProps: {
      textField: {
        fullWidth: !0,
        error: !!i,
        helperText: i
      }
    }
  }
) }) }), gE = ({
  value: e = {},
  onChange: t,
  statements: o = [],
  scale: r = 5,
  scaleLabels: a,
  error: s,
  ...i
}) => {
  const l = no(), c = (u, d) => {
    t({ ...e, [u]: d });
  };
  return ft.useEffect(() => {
    const u = (d) => {
      var h;
      if (((h = document.activeElement) == null ? void 0 : h.tagName) === "INPUT")
        return;
      const p = parseInt(d.key);
      if (p > 0 && p <= r) {
        const m = document.querySelector("tr:hover");
        if (m) {
          const y = m.getAttribute("data-statement");
          y && c(y, p);
        }
      }
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [r, c]), !o || o.length === 0 ? /* @__PURE__ */ S.jsx(wn, { ...i, error: s || "No statements provided", children: /* @__PURE__ */ S.jsx(ut, { color: "error", children: "No statements available for this matrix." }) }) : /* @__PURE__ */ S.jsx(wn, { ...i, error: s, children: /* @__PURE__ */ S.jsx(Gd, { children: /* @__PURE__ */ S.jsxs(Xd, { children: [
    /* @__PURE__ */ S.jsx(Qd, { children: /* @__PURE__ */ S.jsxs(ri, { children: [
      /* @__PURE__ */ S.jsx(
        Jo,
        {
          sx: {
            width: "40%",
            backgroundColor: l.palette.background.default,
            fontWeight: 500
          },
          children: "Statement"
        }
      ),
      Array.from({ length: r }, (u, d) => d + 1).map((u) => /* @__PURE__ */ S.jsxs(
        Jo,
        {
          align: "center",
          sx: {
            backgroundColor: l.palette.background.default,
            fontWeight: 500,
            minWidth: "80px"
          },
          children: [
            u === 1 && (a == null ? void 0 : a.start) && /* @__PURE__ */ S.jsx(
              ut,
              {
                variant: "caption",
                display: "block",
                sx: { mb: 0.5, color: "text.secondary" },
                children: a.start
              }
            ),
            u,
            u === r && (a == null ? void 0 : a.end) && /* @__PURE__ */ S.jsx(
              ut,
              {
                variant: "caption",
                display: "block",
                sx: { mt: 0.5, color: "text.secondary" },
                children: a.end
              }
            )
          ]
        },
        u
      ))
    ] }) }),
    /* @__PURE__ */ S.jsx(Zd, { children: o.map((u, d) => /* @__PURE__ */ S.jsxs(
      ri,
      {
        "data-statement": u,
        sx: {
          "&:nth-of-type(odd)": {
            backgroundColor: l.palette.action.hover
          },
          "&:hover": {
            backgroundColor: l.palette.action.selected
          }
        },
        children: [
          /* @__PURE__ */ S.jsx(
            Jo,
            {
              component: "th",
              scope: "row",
              sx: {
                verticalAlign: "middle",
                lineHeight: 1.5
              },
              children: u
            }
          ),
          Array.from({ length: r }, (p, h) => h + 1).map((p) => /* @__PURE__ */ S.jsx(
            Jo,
            {
              align: "center",
              padding: "none",
              sx: {
                transition: l.transitions.create("background-color")
              },
              children: /* @__PURE__ */ S.jsx(
                Jd,
                {
                  checked: e[u] === p,
                  onChange: () => c(u, p),
                  value: p,
                  name: `matrix-${d}`,
                  size: "small",
                  sx: {
                    "&:hover": {
                      backgroundColor: l.palette.action.hover
                    }
                  }
                }
              )
            },
            p
          ))
        ]
      },
      d
    )) })
  ] }) }) });
}, bE = ({
  question: e,
  value: t,
  onChange: o,
  error: r,
  previewMode: a = !1
}) => {
  switch (e.type) {
    case "scale":
      return /* @__PURE__ */ S.jsx(
        hg,
        {
          ...e,
          value: t,
          onChange: o,
          error: r,
          previewMode: a
        }
      );
    case "multipleChoice":
      return /* @__PURE__ */ S.jsx(
        wg,
        {
          ...e,
          value: t,
          onChange: o,
          error: r,
          previewMode: a
        }
      );
    case "text":
      return /* @__PURE__ */ S.jsx(
        Tg,
        {
          ...e,
          value: t,
          onChange: o,
          error: r,
          previewMode: a
        }
      );
    case "imageChoice":
      return /* @__PURE__ */ S.jsx(
        Eg,
        {
          ...e,
          value: t,
          onChange: o,
          error: r,
          previewMode: a
        }
      );
    case "date":
      return /* @__PURE__ */ S.jsx(
        mE,
        {
          ...e,
          value: t,
          onChange: o,
          error: r,
          previewMode: a
        }
      );
    case "matrix":
      return /* @__PURE__ */ S.jsx(
        gE,
        {
          ...e,
          value: t,
          onChange: o,
          error: r,
          previewMode: a
        }
      );
    default:
      return null;
  }
}, Nl = (e, t) => {
  if (!t)
    return null;
  for (const o of t)
    switch (o.type) {
      case "required":
        if (!e || typeof e == "string" && !e.trim())
          return o.message;
        break;
      case "min":
        if (typeof e == "number" && e < o.value || typeof e == "string" && e.length < o.value)
          return o.message;
        break;
      case "max":
        if (typeof e == "number" && e > o.value || typeof e == "string" && e.length > o.value)
          return o.message;
        break;
      case "pattern":
        if (typeof e == "string" && !new RegExp(o.value).test(e))
          return o.message;
        break;
      case "custom":
        if (typeof o.value == "function" && !o.value(e))
          return o.message;
        break;
    }
  return null;
}, yE = ({ survey: e, onSubmit: t }) => {
  var w;
  const o = e.sections.flatMap((T) => T.questions), [r, a] = Bn(0), [s, i] = Bn({}), [l, c] = Bn({}), u = Zo((T, x) => {
    var v;
    if (i((D) => ({ ...D, [T]: x })), o.find((D) => D.id === T) && ((v = e.config.validation) != null && v[T])) {
      const D = Nl(x, e.config.validation[T]) || [];
      c((O) => ({ ...O, [T]: Array.isArray(D) ? D : [D] }));
    }
  }, [o, e.config.validation]), d = Zo(async () => {
    const T = {};
    let x = !1;
    return o.forEach((E) => {
      var v;
      if ((v = e.config.validation) != null && v[E.id]) {
        const D = Nl(s[E.id], e.config.validation[E.id]) || [], O = Array.isArray(D) ? D : [D];
        O.length > 0 && (T[E.id] = O, x = !0);
      }
    }), c(T), x || await t(s), !x;
  }, [o, s, e.config.validation, t]), p = o[r], h = (r + 1) / o.length * 100, m = r > 0, y = r === o.length - 1, f = Zo(async () => {
    const T = s[p.id], x = l[p.id];
    if (!(p.required && (!T || x != null && x.length)))
      if (y) {
        if (await d())
          return;
      } else
        a((E) => E + 1);
  }, [p, s, l, y, d]), C = Zo(() => {
    m && a((T) => T - 1);
  }, [m]);
  return /* @__PURE__ */ S.jsxs(Ue, { children: [
    /* @__PURE__ */ S.jsx(ut, { variant: "h4", gutterBottom: !0, children: e.metadata.title }),
    /* @__PURE__ */ S.jsx(
      ef,
      {
        variant: "determinate",
        value: h,
        sx: { mb: 3, borderRadius: 1 }
      }
    ),
    /* @__PURE__ */ S.jsxs(ut, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: [
      "Question ",
      r + 1,
      " of ",
      o.length
    ] }),
    /* @__PURE__ */ S.jsx(Nr, { elevation: 2, sx: { p: 3, mb: 3 }, children: bE({
      question: p,
      value: s[p.id],
      onChange: (T) => u(p.id, T),
      error: (w = l[p.id]) == null ? void 0 : w[0]
    }) }),
    /* @__PURE__ */ S.jsxs(Ue, { sx: { display: "flex", justifyContent: "space-between", mt: 3 }, children: [
      /* @__PURE__ */ S.jsx(
        vr,
        {
          onClick: C,
          disabled: !m,
          variant: "outlined",
          children: "Back"
        }
      ),
      /* @__PURE__ */ S.jsx(
        vr,
        {
          onClick: f,
          variant: "contained",
          color: "primary",
          children: y ? "Submit" : "Next"
        }
      )
    ] })
  ] });
};
var Qa = {}, vE = ln;
Object.defineProperty(Qa, "__esModule", {
  value: !0
});
var Id = Qa.default = void 0, xE = vE(io()), CE = S;
Id = Qa.default = (0, xE.default)(/* @__PURE__ */ (0, CE.jsx)("path", {
  d: "M8 5v14l11-7z"
}), "PlayArrow");
const wE = ({
  title: e = "Welcome to the Survey",
  description: t = "Please click the button below to begin.",
  startButtonText: o = "Start Survey",
  onStart: r,
  logoUrl: a
}) => {
  const s = At();
  return /* @__PURE__ */ S.jsx(xr, { maxWidth: "sm", children: /* @__PURE__ */ S.jsx(
    Ue,
    {
      sx: {
        mt: 8,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4
      },
      children: /* @__PURE__ */ S.jsxs(
        Nr,
        {
          elevation: 0,
          sx: {
            p: 4,
            width: "100%",
            textAlign: "center",
            border: `1px solid ${s.palette.divider}`,
            borderRadius: 2,
            backgroundColor: s.palette.background.paper,
            position: "relative",
            overflow: "hidden"
          },
          children: [
            a && /* @__PURE__ */ S.jsx(
              Ue,
              {
                component: "img",
                src: a,
                alt: "Survey Logo",
                sx: {
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 40,
                  height: 40,
                  opacity: 0.9
                }
              }
            ),
            /* @__PURE__ */ S.jsx(
              ut,
              {
                component: "h1",
                variant: "h3",
                sx: {
                  color: s.palette.primary.main,
                  mb: 3,
                  fontWeight: s.typography.h3.fontWeight
                },
                children: e
              }
            ),
            /* @__PURE__ */ S.jsx(
              ut,
              {
                variant: "body1",
                sx: {
                  color: s.palette.text.secondary,
                  mb: 4,
                  maxWidth: "80%",
                  mx: "auto",
                  lineHeight: 1.6
                },
                children: t
              }
            ),
            /* @__PURE__ */ S.jsx(
              vr,
              {
                variant: "contained",
                color: "primary",
                size: "large",
                onClick: r,
                startIcon: /* @__PURE__ */ S.jsx(Id, {}),
                sx: {
                  minWidth: 200,
                  py: 1.5,
                  px: 4,
                  borderRadius: 2,
                  boxShadow: s.shadows[2],
                  "&:hover": {
                    boxShadow: s.shadows[4]
                  }
                },
                children: o
              }
            )
          ]
        }
      )
    }
  ) });
};
var Za = {}, TE = ln;
Object.defineProperty(Za, "__esModule", {
  value: !0
});
var Nd = Za.default = void 0, EE = TE(io()), SE = S;
Nd = Za.default = (0, EE.default)(/* @__PURE__ */ (0, SE.jsx)("path", {
  d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "CheckCircleOutline");
var Ja = {}, PE = ln;
Object.defineProperty(Ja, "__esModule", {
  value: !0
});
var _d = Ja.default = void 0, OE = PE(io()), RE = S;
_d = Ja.default = (0, OE.default)(/* @__PURE__ */ (0, RE.jsx)("path", {
  d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"
}), "KeyboardReturn");
const DE = ({
  title: e = "Thank You!",
  description: t = "Your survey responses have been submitted successfully.",
  returnButtonText: o = "Return",
  onReturn: r,
  logoUrl: a
}) => {
  const s = At();
  return /* @__PURE__ */ S.jsx(xr, { maxWidth: "sm", children: /* @__PURE__ */ S.jsx(
    Ue,
    {
      sx: {
        mt: 8,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4
      },
      children: /* @__PURE__ */ S.jsx(
        Nr,
        {
          elevation: 0,
          sx: {
            p: 4,
            width: "100%",
            textAlign: "center",
            border: `1px solid ${s.palette.divider}`,
            borderRadius: 2,
            backgroundColor: s.palette.background.paper
          },
          children: /* @__PURE__ */ S.jsxs(
            Ue,
            {
              sx: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                position: "relative",
                width: "100%"
              },
              children: [
                a && /* @__PURE__ */ S.jsx(
                  Ue,
                  {
                    component: "img",
                    src: a,
                    alt: "Survey Logo",
                    sx: {
                      position: "absolute",
                      top: -16,
                      right: -16,
                      width: 40,
                      height: 40,
                      opacity: 0.9
                    }
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  Nd,
                  {
                    sx: {
                      fontSize: 64,
                      color: s.palette.success.main,
                      filter: `drop-shadow(0 4px 8px ${s.palette.success.main}40)`
                    }
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  ut,
                  {
                    variant: "h3",
                    component: "h1",
                    sx: {
                      color: s.palette.primary.main,
                      fontWeight: s.typography.h3.fontWeight
                    },
                    children: e
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  ut,
                  {
                    variant: "body1",
                    sx: {
                      color: s.palette.text.secondary,
                      maxWidth: "80%",
                      mx: "auto",
                      lineHeight: 1.6
                    },
                    children: t
                  }
                ),
                o && r && /* @__PURE__ */ S.jsx(
                  vr,
                  {
                    variant: "contained",
                    color: "primary",
                    size: "large",
                    onClick: r,
                    startIcon: /* @__PURE__ */ S.jsx(_d, {}),
                    sx: {
                      minWidth: 200,
                      mt: 2,
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      boxShadow: s.shadows[2],
                      "&:hover": {
                        boxShadow: s.shadows[4]
                      }
                    },
                    children: o
                  }
                )
              ]
            }
          )
        }
      )
    }
  ) });
}, ME = {
  typography: {
    fontFamily: [
      "Roboto",
      "Expressway",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif"
    ].join(","),
    h1: {
      fontWeight: 700,
      fontFamily: "Roboto, Expressway, Arial"
    },
    h2: {
      fontWeight: 600,
      fontFamily: "Roboto, Expressway, Arial"
    },
    h3: {
      fontWeight: 600,
      fontFamily: "Roboto, Expressway, Arial"
    },
    h4: {
      fontWeight: 500,
      fontFamily: "Roboto, Expressway, Arial"
    },
    h5: {
      fontWeight: 500,
      fontFamily: "Roboto, Expressway, Arial"
    },
    h6: {
      fontWeight: 500,
      fontFamily: "Roboto, Expressway, Arial"
    },
    body1: {
      fontWeight: 400,
      fontFamily: "Roboto, Expressway, Arial"
    },
    body2: {
      fontWeight: 400,
      fontFamily: "Roboto, Expressway, Arial"
    },
    button: {
      fontWeight: 500,
      fontFamily: "Roboto, Expressway, Arial",
      textTransform: "none"
    }
  },
  palette: {
    primary: {
      main: "#3442DA",
      100: "#EBEEFF",
      200: "#D4D8FA",
      300: "#96A5EF",
      400: "#5966E8",
      500: "#3442DA",
      600: "#2D39B2",
      700: "#25308A",
      800: "#1C2663"
    },
    secondary: {
      main: "#757575",
      100: "#FFFFFF",
      200: "#F7F7F7",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#757575",
      600: "#212121",
      700: "#000000"
    },
    success: {
      main: "#B5E5B5"
    },
    info: {
      main: "#FFE5B4"
    },
    error: {
      main: "#FFB4B4"
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body {
          height: 100%;
          min-height: 100vh;
          background-color: #F9FAFF;
          margin: 0;
          padding: 0;
          font-family: 'Roboto', sans-serif;
        }
        #root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
          min-height: calc(100vh - 106px - 320px);
          display: flex;
          flex-direction: column;
        }
      `
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }
      }
    }
  }
}, As = Sc(ME);
class $E {
  constructor(t, o, r = {}) {
    bs(this, "currentResponse");
    bs(this, "autoSaveInterval");
    this.survey = t, this.userId = o, this.config = r, this.currentResponse = {
      surveyId: t.metadata.id,
      userId: o,
      answers: {},
      startedAt: (/* @__PURE__ */ new Date()).toISOString()
    }, r.autoSave && r.autoSaveInterval && this.startAutoSave();
  }
  startAutoSave() {
    this.config.autoSave && this.config.autoSaveInterval && (this.autoSaveInterval = setInterval(async () => {
      await this.saveProgress();
    }, this.config.autoSaveInterval));
  }
  stopAutoSave() {
    this.autoSaveInterval && clearInterval(this.autoSaveInterval);
  }
  async saveProgress() {
    this.config.onSaveProgress && await this.config.onSaveProgress(this.currentResponse);
  }
  async handleQuestionChange(t, o) {
    this.currentResponse.answers = {
      ...this.currentResponse.answers,
      [t]: o
    }, this.config.autoSave && !this.config.autoSaveInterval && await this.saveProgress();
  }
  async complete() {
    this.stopAutoSave();
    const t = {
      ...this.currentResponse,
      completedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.config.onComplete && await this.config.onComplete(t);
  }
  getProgress() {
    const t = this.survey.sections.reduce(
      (r, a) => r + a.questions.length,
      0
    );
    return Object.keys(this.currentResponse.answers || {}).length / t * 100;
  }
  getCurrentResponse() {
    return { ...this.currentResponse };
  }
}
const FE = (e) => {
  var a, s;
  const t = {
    metadata: {
      id: e.id,
      version: "1.0",
      title: e.title || "Survey",
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    },
    sections: [{
      id: "main",
      title: "Main Section",
      questions: e.questions
    }],
    config: e.config
  }, o = new $E(
    t,
    "default-user",
    {
      autoSave: (a = e.config.autoSave) == null ? void 0 : a.enabled,
      autoSaveInterval: (s = e.config.autoSave) == null ? void 0 : s.interval,
      onSaveProgress: async (i) => {
        var l, c;
        try {
          await ((c = (l = e.config.autoSave) == null ? void 0 : l.handler) == null ? void 0 : c.call(l, i));
        } catch (u) {
          console.error("Auto-save failed:", u);
        }
      }
    }
  ), r = () => {
    const [i, l] = Bn(
      e.startScreen ? "start" : "questions"
    ), [c, u] = Bn(!0), [d, p] = Bn(null);
    qd(() => ((async () => {
      var f;
      try {
        (f = e.config.progress) != null && f.enabled && o.getCurrentResponse().answers && o.getProgress() === 100 && l("end");
      } finally {
        u(!1);
      }
    })(), () => {
      o.stopAutoSave();
    }), []);
    const h = () => {
      var y;
      l("questions"), (y = e.onStart) == null || y.call(e);
    }, m = async (y) => {
      var f, C, w;
      try {
        if (await ((f = e.onSubmit) == null ? void 0 : f.call(e, y)), l("end"), (C = e.onComplete) == null || C.call(e), (w = e.config.progress) != null && w.enabled) {
          const T = e.config.progress.storage || "local";
          T !== "none" && window[`${T}Storage`].removeItem(`survey_${e.id}`);
        }
      } catch (T) {
        console.error("Survey submission failed:", T);
      }
    };
    return c ? /* @__PURE__ */ S.jsx(Ue, { sx: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }, children: /* @__PURE__ */ S.jsx(tf, {}) }) : i === "start" && e.startScreen ? /* @__PURE__ */ S.jsx(ys, { theme: e.theme || As, children: /* @__PURE__ */ S.jsx(
      wE,
      {
        title: e.startScreen.title,
        description: e.startScreen.description,
        startButtonText: e.startScreen.startButtonText,
        onStart: h
      }
    ) }) : i === "end" && e.endScreen ? /* @__PURE__ */ S.jsx(ys, { theme: e.theme || As, children: /* @__PURE__ */ S.jsx(xr, { maxWidth: "sm", children: /* @__PURE__ */ S.jsx(
      DE,
      {
        title: e.endScreen.title,
        description: e.endScreen.description,
        returnButtonText: e.endScreen.returnButtonText,
        onReturn: e.onReturn
      }
    ) }) }) : /* @__PURE__ */ S.jsx(xr, { maxWidth: "md", sx: { py: 4 }, children: /* @__PURE__ */ S.jsx(ys, { theme: e.theme || As, children: /* @__PURE__ */ S.jsxs(Ue, { sx: { position: "relative" }, children: [
      /* @__PURE__ */ S.jsx(
        yE,
        {
          survey: t,
          onSubmit: m
        }
      ),
      d && /* @__PURE__ */ S.jsx(Ue, { sx: {
        position: "fixed",
        bottom: 16,
        right: 16,
        bgcolor: "error.main",
        color: "error.contrastText",
        p: 2,
        borderRadius: 1
      }, children: d })
    ] }) }) });
  };
  return r.displayName = `Survey_${e.id}`, {
    Survey: r,
    definition: t,
    runner: o
  };
};
export {
  yE as Survey,
  FE as createSurvey
};
