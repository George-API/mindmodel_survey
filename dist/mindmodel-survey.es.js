var vf = Object.defineProperty;
var xf = (e, t, o) => t in e ? vf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var ws = (e, t, o) => (xf(e, typeof t != "symbol" ? t + "" : t, o), o);
import * as b from "react";
import ht, { forwardRef as Cf, useContext as wf, Children as Tf, isValidElement as hr, cloneElement as mr, useState as Un, useCallback as nr, useEffect as Ef } from "react";
import { useTheme as so, Box as He, Typography as ft, Paper as Fr, TextField as Sf, TableContainer as Pf, Table as Of, TableHead as Rf, TableRow as pi, TableCell as or, TableBody as Df, Radio as Mf, LinearProgress as $f, Button as Tr, Container as Er, CircularProgress as kf, ThemeProvider as Ts } from "@mui/material";
import * as If from "react-dom";
import rr from "react-dom";
var Yo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ao(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function on(e) {
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
var Us = { exports: {} }, mo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hi;
function _f() {
  if (hi)
    return mo;
  hi = 1;
  var e = ht, t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return mo.Fragment = o, mo.jsx = i, mo.jsxs = i, mo;
}
var yo = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mi;
function Nf() {
  return mi || (mi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ht, t = Symbol.for("react.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.iterator, f = "@@iterator";
    function C(I) {
      if (I === null || typeof I != "object")
        return null;
      var ne = g && I[g] || I[f];
      return typeof ne == "function" ? ne : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(I) {
      {
        for (var ne = arguments.length, le = new Array(ne > 1 ? ne - 1 : 0), Ce = 1; Ce < ne; Ce++)
          le[Ce - 1] = arguments[Ce];
        x("error", I, le);
      }
    }
    function x(I, ne, le) {
      {
        var Ce = T.ReactDebugCurrentFrame, ke = Ce.getStackAddendum();
        ke !== "" && (ne += "%s", le = le.concat([ke]));
        var We = le.map(function(Re) {
          return String(Re);
        });
        We.unshift("Warning: " + ne), Function.prototype.apply.call(console[I], console, We);
      }
    }
    var w = !1, y = !1, R = !1, O = !1, L = !1, _;
    _ = Symbol.for("react.module.reference");
    function V(I) {
      return !!(typeof I == "string" || typeof I == "function" || I === r || I === s || L || I === a || I === u || I === d || O || I === m || w || y || R || typeof I == "object" && I !== null && (I.$$typeof === h || I.$$typeof === p || I.$$typeof === i || I.$$typeof === l || I.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      I.$$typeof === _ || I.getModuleId !== void 0));
    }
    function N(I, ne, le) {
      var Ce = I.displayName;
      if (Ce)
        return Ce;
      var ke = ne.displayName || ne.name || "";
      return ke !== "" ? le + "(" + ke + ")" : le;
    }
    function B(I) {
      return I.displayName || "Context";
    }
    function F(I) {
      if (I == null)
        return null;
      if (typeof I.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof I == "function")
        return I.displayName || I.name || null;
      if (typeof I == "string")
        return I;
      switch (I) {
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
      if (typeof I == "object")
        switch (I.$$typeof) {
          case l:
            var ne = I;
            return B(ne) + ".Consumer";
          case i:
            var le = I;
            return B(le._context) + ".Provider";
          case c:
            return N(I, I.render, "ForwardRef");
          case p:
            var Ce = I.displayName || null;
            return Ce !== null ? Ce : F(I.type) || "Memo";
          case h: {
            var ke = I, We = ke._payload, Re = ke._init;
            try {
              return F(Re(We));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, P = 0, $, j, M, W, k, U, G;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function z() {
      {
        if (P === 0) {
          $ = console.log, j = console.info, M = console.warn, W = console.error, k = console.group, U = console.groupCollapsed, G = console.groupEnd;
          var I = {
            configurable: !0,
            enumerable: !0,
            value: X,
            writable: !0
          };
          Object.defineProperties(console, {
            info: I,
            log: I,
            warn: I,
            error: I,
            group: I,
            groupCollapsed: I,
            groupEnd: I
          });
        }
        P++;
      }
    }
    function q() {
      {
        if (P--, P === 0) {
          var I = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, I, {
              value: $
            }),
            info: D({}, I, {
              value: j
            }),
            warn: D({}, I, {
              value: M
            }),
            error: D({}, I, {
              value: W
            }),
            group: D({}, I, {
              value: k
            }),
            groupCollapsed: D({}, I, {
              value: U
            }),
            groupEnd: D({}, I, {
              value: G
            })
          });
        }
        P < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = T.ReactCurrentDispatcher, Y;
    function Z(I, ne, le) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (ke) {
            var Ce = ke.stack.trim().match(/\n( *(at )?)/);
            Y = Ce && Ce[1] || "";
          }
        return `
` + Y + I;
      }
    }
    var ee = !1, J;
    {
      var K = typeof WeakMap == "function" ? WeakMap : Map;
      J = new K();
    }
    function A(I, ne) {
      if (!I || ee)
        return "";
      {
        var le = J.get(I);
        if (le !== void 0)
          return le;
      }
      var Ce;
      ee = !0;
      var ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var We;
      We = Q.current, Q.current = null, z();
      try {
        if (ne) {
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
            } catch (bt) {
              Ce = bt;
            }
            Reflect.construct(I, [], Re);
          } else {
            try {
              Re.call();
            } catch (bt) {
              Ce = bt;
            }
            I.call(Re.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (bt) {
            Ce = bt;
          }
          I();
        }
      } catch (bt) {
        if (bt && Ce && typeof bt.stack == "string") {
          for (var Pe = bt.stack.split(`
`), mt = Ce.stack.split(`
`), et = Pe.length - 1, ot = mt.length - 1; et >= 1 && ot >= 0 && Pe[et] !== mt[ot]; )
            ot--;
          for (; et >= 1 && ot >= 0; et--, ot--)
            if (Pe[et] !== mt[ot]) {
              if (et !== 1 || ot !== 1)
                do
                  if (et--, ot--, ot < 0 || Pe[et] !== mt[ot]) {
                    var Rt = `
` + Pe[et].replace(" at new ", " at ");
                    return I.displayName && Rt.includes("<anonymous>") && (Rt = Rt.replace("<anonymous>", I.displayName)), typeof I == "function" && J.set(I, Rt), Rt;
                  }
                while (et >= 1 && ot >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Q.current = We, q(), Error.prepareStackTrace = ke;
      }
      var In = I ? I.displayName || I.name : "", gn = In ? Z(In) : "";
      return typeof I == "function" && J.set(I, gn), gn;
    }
    function H(I, ne, le) {
      return A(I, !1);
    }
    function re(I) {
      var ne = I.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function de(I, ne, le) {
      if (I == null)
        return "";
      if (typeof I == "function")
        return A(I, re(I));
      if (typeof I == "string")
        return Z(I);
      switch (I) {
        case u:
          return Z("Suspense");
        case d:
          return Z("SuspenseList");
      }
      if (typeof I == "object")
        switch (I.$$typeof) {
          case c:
            return H(I.render);
          case p:
            return de(I.type, ne, le);
          case h: {
            var Ce = I, ke = Ce._payload, We = Ce._init;
            try {
              return de(We(ke), ne, le);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, $e = {}, ue = T.ReactDebugCurrentFrame;
    function fe(I) {
      if (I) {
        var ne = I._owner, le = de(I.type, I._source, ne ? ne.type : null);
        ue.setExtraStackFrame(le);
      } else
        ue.setExtraStackFrame(null);
    }
    function te(I, ne, le, Ce, ke) {
      {
        var We = Function.call.bind(ge);
        for (var Re in I)
          if (We(I, Re)) {
            var Pe = void 0;
            try {
              if (typeof I[Re] != "function") {
                var mt = Error((Ce || "React class") + ": " + le + " type `" + Re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof I[Re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw mt.name = "Invariant Violation", mt;
              }
              Pe = I[Re](ne, Re, Ce, le, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (et) {
              Pe = et;
            }
            Pe && !(Pe instanceof Error) && (fe(ke), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ce || "React class", le, Re, typeof Pe), fe(null)), Pe instanceof Error && !(Pe.message in $e) && ($e[Pe.message] = !0, fe(ke), E("Failed %s type: %s", le, Pe.message), fe(null));
          }
      }
    }
    var se = Array.isArray;
    function he(I) {
      return se(I);
    }
    function Te(I) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, le = ne && I[Symbol.toStringTag] || I.constructor.name || "Object";
        return le;
      }
    }
    function ve(I) {
      try {
        return Oe(I), !1;
      } catch {
        return !0;
      }
    }
    function Oe(I) {
      return "" + I;
    }
    function qe(I) {
      if (ve(I))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Te(I)), Oe(I);
    }
    var De = T.ReactCurrentOwner, Ee = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, Ge, wt;
    wt = {};
    function gt(I) {
      if (ge.call(I, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(I, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return I.ref !== void 0;
    }
    function ut(I) {
      if (ge.call(I, "key")) {
        var ne = Object.getOwnPropertyDescriptor(I, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return I.key !== void 0;
    }
    function ye(I, ne) {
      if (typeof I.ref == "string" && De.current && ne && De.current.stateNode !== ne) {
        var le = F(De.current.type);
        wt[le] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(De.current.type), I.ref), wt[le] = !0);
      }
    }
    function Se(I, ne) {
      {
        var le = function() {
          me || (me = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        le.isReactWarning = !0, Object.defineProperty(I, "key", {
          get: le,
          configurable: !0
        });
      }
    }
    function Je(I, ne) {
      {
        var le = function() {
          Ge || (Ge = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        le.isReactWarning = !0, Object.defineProperty(I, "ref", {
          get: le,
          configurable: !0
        });
      }
    }
    var zt = function(I, ne, le, Ce, ke, We, Re) {
      var Pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: I,
        key: ne,
        ref: le,
        props: Re,
        // Record the component responsible for creating this element.
        _owner: We
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
    function sn(I, ne, le, Ce, ke) {
      {
        var We, Re = {}, Pe = null, mt = null;
        le !== void 0 && (qe(le), Pe = "" + le), ut(ne) && (qe(ne.key), Pe = "" + ne.key), gt(ne) && (mt = ne.ref, ye(ne, ke));
        for (We in ne)
          ge.call(ne, We) && !Ee.hasOwnProperty(We) && (Re[We] = ne[We]);
        if (I && I.defaultProps) {
          var et = I.defaultProps;
          for (We in et)
            Re[We] === void 0 && (Re[We] = et[We]);
        }
        if (Pe || mt) {
          var ot = typeof I == "function" ? I.displayName || I.name || "Unknown" : I;
          Pe && Se(Re, ot), mt && Je(Re, ot);
        }
        return zt(I, Pe, mt, ke, Ce, De.current, Re);
      }
    }
    var $n = T.ReactCurrentOwner, kn = T.ReactDebugCurrentFrame;
    function Ut(I) {
      if (I) {
        var ne = I._owner, le = de(I.type, I._source, ne ? ne.type : null);
        kn.setExtraStackFrame(le);
      } else
        kn.setExtraStackFrame(null);
    }
    var yn;
    yn = !1;
    function ho(I) {
      return typeof I == "object" && I !== null && I.$$typeof === t;
    }
    function ze() {
      {
        if ($n.current) {
          var I = F($n.current.type);
          if (I)
            return `

Check the render method of \`` + I + "`.";
        }
        return "";
      }
    }
    function Ot(I) {
      {
        if (I !== void 0) {
          var ne = I.fileName.replace(/^.*[\\\/]/, ""), le = I.lineNumber;
          return `

Check your code at ` + ne + ":" + le + ".";
        }
        return "";
      }
    }
    var an = {};
    function Yt(I) {
      {
        var ne = ze();
        if (!ne) {
          var le = typeof I == "string" ? I : I.displayName || I.name;
          le && (ne = `

Check the top-level render call using <` + le + ">.");
        }
        return ne;
      }
    }
    function ci(I, ne) {
      {
        if (!I._store || I._store.validated || I.key != null)
          return;
        I._store.validated = !0;
        var le = Yt(ne);
        if (an[le])
          return;
        an[le] = !0;
        var Ce = "";
        I && I._owner && I._owner !== $n.current && (Ce = " It was passed a child from " + F(I._owner.type) + "."), Ut(I), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', le, Ce), Ut(null);
      }
    }
    function ui(I, ne) {
      {
        if (typeof I != "object")
          return;
        if (he(I))
          for (var le = 0; le < I.length; le++) {
            var Ce = I[le];
            ho(Ce) && ci(Ce, ne);
          }
        else if (ho(I))
          I._store && (I._store.validated = !0);
        else if (I) {
          var ke = C(I);
          if (typeof ke == "function" && ke !== I.entries)
            for (var We = ke.call(I), Re; !(Re = We.next()).done; )
              ho(Re.value) && ci(Re.value, ne);
        }
      }
    }
    function df(I) {
      {
        var ne = I.type;
        if (ne == null || typeof ne == "string")
          return;
        var le;
        if (typeof ne == "function")
          le = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === p))
          le = ne.propTypes;
        else
          return;
        if (le) {
          var Ce = F(ne);
          te(le, I.props, "prop", Ce, I);
        } else if (ne.PropTypes !== void 0 && !yn) {
          yn = !0;
          var ke = F(ne);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ke || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ff(I) {
      {
        for (var ne = Object.keys(I.props), le = 0; le < ne.length; le++) {
          var Ce = ne[le];
          if (Ce !== "children" && Ce !== "key") {
            Ut(I), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ce), Ut(null);
            break;
          }
        }
        I.ref !== null && (Ut(I), E("Invalid attribute `ref` supplied to `React.Fragment`."), Ut(null));
      }
    }
    var di = {};
    function fi(I, ne, le, Ce, ke, We) {
      {
        var Re = V(I);
        if (!Re) {
          var Pe = "";
          (I === void 0 || typeof I == "object" && I !== null && Object.keys(I).length === 0) && (Pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var mt = Ot(ke);
          mt ? Pe += mt : Pe += ze();
          var et;
          I === null ? et = "null" : he(I) ? et = "array" : I !== void 0 && I.$$typeof === t ? (et = "<" + (F(I.type) || "Unknown") + " />", Pe = " Did you accidentally export a JSX literal instead of a component?") : et = typeof I, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", et, Pe);
        }
        var ot = sn(I, ne, le, ke, We);
        if (ot == null)
          return ot;
        if (Re) {
          var Rt = ne.children;
          if (Rt !== void 0)
            if (Ce)
              if (he(Rt)) {
                for (var In = 0; In < Rt.length; In++)
                  ui(Rt[In], I);
                Object.freeze && Object.freeze(Rt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ui(Rt, I);
        }
        if (ge.call(ne, "key")) {
          var gn = F(I), bt = Object.keys(ne).filter(function(bf) {
            return bf !== "key";
          }), Cs = bt.length > 0 ? "{key: someKey, " + bt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!di[gn + Cs]) {
            var gf = bt.length > 0 ? "{" + bt.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Cs, gn, gf, gn), di[gn + Cs] = !0;
          }
        }
        return I === r ? ff(ot) : df(ot), ot;
      }
    }
    function pf(I, ne, le) {
      return fi(I, ne, le, !0);
    }
    function hf(I, ne, le) {
      return fi(I, ne, le, !1);
    }
    var mf = hf, yf = pf;
    yo.Fragment = r, yo.jsx = mf, yo.jsxs = yf;
  }()), yo;
}
process.env.NODE_ENV === "production" ? Us.exports = _f() : Us.exports = Nf();
var S = Us.exports, ua = {}, Ql = { exports: {} };
(function(e) {
  function t(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ql);
var dn = Ql.exports, Es = {};
function fn(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function v() {
  return v = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, v.apply(null, arguments);
}
function cn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Jl(e) {
  if (/* @__PURE__ */ b.isValidElement(e) || !cn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = Jl(e[o]);
  }), t;
}
function Et(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? v({}, e) : e;
  return cn(e) && cn(t) && Object.keys(t).forEach((a) => {
    /* @__PURE__ */ b.isValidElement(t[a]) ? r[a] = t[a] : cn(t[a]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, a) && cn(e[a]) ? r[a] = Et(e[a], t[a], o) : o.clone ? r[a] = cn(t[a]) ? Jl(t[a]) : t[a] : r[a] = t[a];
  }), r;
}
const Af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Et,
  isPlainObject: cn
}, Symbol.toStringTag, { value: "Module" }));
var Ys = { exports: {} }, sr = { exports: {} }, Ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yi;
function jf() {
  if (yi)
    return Ne;
  yi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function x(y) {
    if (typeof y == "object" && y !== null) {
      var R = y.$$typeof;
      switch (R) {
        case t:
          switch (y = y.type, y) {
            case c:
            case u:
            case r:
            case s:
            case a:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case d:
                case g:
                case m:
                case i:
                  return y;
                default:
                  return R;
              }
          }
        case o:
          return R;
      }
    }
  }
  function w(y) {
    return x(y) === u;
  }
  return Ne.AsyncMode = c, Ne.ConcurrentMode = u, Ne.ContextConsumer = l, Ne.ContextProvider = i, Ne.Element = t, Ne.ForwardRef = d, Ne.Fragment = r, Ne.Lazy = g, Ne.Memo = m, Ne.Portal = o, Ne.Profiler = s, Ne.StrictMode = a, Ne.Suspense = p, Ne.isAsyncMode = function(y) {
    return w(y) || x(y) === c;
  }, Ne.isConcurrentMode = w, Ne.isContextConsumer = function(y) {
    return x(y) === l;
  }, Ne.isContextProvider = function(y) {
    return x(y) === i;
  }, Ne.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, Ne.isForwardRef = function(y) {
    return x(y) === d;
  }, Ne.isFragment = function(y) {
    return x(y) === r;
  }, Ne.isLazy = function(y) {
    return x(y) === g;
  }, Ne.isMemo = function(y) {
    return x(y) === m;
  }, Ne.isPortal = function(y) {
    return x(y) === o;
  }, Ne.isProfiler = function(y) {
    return x(y) === s;
  }, Ne.isStrictMode = function(y) {
    return x(y) === a;
  }, Ne.isSuspense = function(y) {
    return x(y) === p;
  }, Ne.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === u || y === s || y === a || y === p || y === h || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === m || y.$$typeof === i || y.$$typeof === l || y.$$typeof === d || y.$$typeof === C || y.$$typeof === T || y.$$typeof === E || y.$$typeof === f);
  }, Ne.typeOf = x, Ne;
}
var Ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gi;
function Ff() {
  return gi || (gi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function x(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === u || A === s || A === a || A === p || A === h || typeof A == "object" && A !== null && (A.$$typeof === g || A.$$typeof === m || A.$$typeof === i || A.$$typeof === l || A.$$typeof === d || A.$$typeof === C || A.$$typeof === T || A.$$typeof === E || A.$$typeof === f);
    }
    function w(A) {
      if (typeof A == "object" && A !== null) {
        var H = A.$$typeof;
        switch (H) {
          case t:
            var re = A.type;
            switch (re) {
              case c:
              case u:
              case r:
              case s:
              case a:
              case p:
                return re;
              default:
                var de = re && re.$$typeof;
                switch (de) {
                  case l:
                  case d:
                  case g:
                  case m:
                  case i:
                    return de;
                  default:
                    return H;
                }
            }
          case o:
            return H;
        }
      }
    }
    var y = c, R = u, O = l, L = i, _ = t, V = d, N = r, B = g, F = m, D = o, P = s, $ = a, j = p, M = !1;
    function W(A) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(A) || w(A) === c;
    }
    function k(A) {
      return w(A) === u;
    }
    function U(A) {
      return w(A) === l;
    }
    function G(A) {
      return w(A) === i;
    }
    function X(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function z(A) {
      return w(A) === d;
    }
    function q(A) {
      return w(A) === r;
    }
    function Q(A) {
      return w(A) === g;
    }
    function Y(A) {
      return w(A) === m;
    }
    function Z(A) {
      return w(A) === o;
    }
    function ee(A) {
      return w(A) === s;
    }
    function J(A) {
      return w(A) === a;
    }
    function K(A) {
      return w(A) === p;
    }
    Ae.AsyncMode = y, Ae.ConcurrentMode = R, Ae.ContextConsumer = O, Ae.ContextProvider = L, Ae.Element = _, Ae.ForwardRef = V, Ae.Fragment = N, Ae.Lazy = B, Ae.Memo = F, Ae.Portal = D, Ae.Profiler = P, Ae.StrictMode = $, Ae.Suspense = j, Ae.isAsyncMode = W, Ae.isConcurrentMode = k, Ae.isContextConsumer = U, Ae.isContextProvider = G, Ae.isElement = X, Ae.isForwardRef = z, Ae.isFragment = q, Ae.isLazy = Q, Ae.isMemo = Y, Ae.isPortal = Z, Ae.isProfiler = ee, Ae.isStrictMode = J, Ae.isSuspense = K, Ae.isValidElementType = x, Ae.typeOf = w;
  }()), Ae;
}
var bi;
function ec() {
  return bi || (bi = 1, process.env.NODE_ENV === "production" ? sr.exports = jf() : sr.exports = Ff()), sr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ss, vi;
function Vf() {
  if (vi)
    return Ss;
  vi = 1;
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
  return Ss = a() ? Object.assign : function(s, i) {
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
  }, Ss;
}
var Ps, xi;
function da() {
  if (xi)
    return Ps;
  xi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ps = e, Ps;
}
var Os, Ci;
function tc() {
  return Ci || (Ci = 1, Os = Function.call.bind(Object.prototype.hasOwnProperty)), Os;
}
var Rs, wi;
function Lf() {
  if (wi)
    return Rs;
  wi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = da(), o = {}, r = tc();
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
          } catch (g) {
            p = g;
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
  }, Rs = a, Rs;
}
var Ds, Ti;
function Bf() {
  if (Ti)
    return Ds;
  Ti = 1;
  var e = ec(), t = Vf(), o = da(), r = tc(), a = Lf(), s = function() {
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
  return Ds = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(k) {
      var U = k && (u && k[u] || k[d]);
      if (typeof U == "function")
        return U;
    }
    var h = "<<anonymous>>", m = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: E(),
      arrayOf: x,
      element: w(),
      elementType: y(),
      instanceOf: R,
      node: V(),
      objectOf: L,
      oneOf: O,
      oneOfType: _,
      shape: B,
      exact: F
    };
    function g(k, U) {
      return k === U ? k !== 0 || 1 / k === 1 / U : k !== k && U !== U;
    }
    function f(k, U) {
      this.message = k, this.data = U && typeof U == "object" ? U : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function C(k) {
      if (process.env.NODE_ENV !== "production")
        var U = {}, G = 0;
      function X(q, Q, Y, Z, ee, J, K) {
        if (Z = Z || h, J = J || Y, K !== o) {
          if (c) {
            var A = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw A.name = "Invariant Violation", A;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var H = Z + ":" + Y;
            !U[H] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + J + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), U[H] = !0, G++);
          }
        }
        return Q[Y] == null ? q ? Q[Y] === null ? new f("The " + ee + " `" + J + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new f("The " + ee + " `" + J + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : k(Q, Y, Z, ee, J);
      }
      var z = X.bind(null, !1);
      return z.isRequired = X.bind(null, !0), z;
    }
    function T(k) {
      function U(G, X, z, q, Q, Y) {
        var Z = G[X], ee = $(Z);
        if (ee !== k) {
          var J = j(Z);
          return new f(
            "Invalid " + q + " `" + Q + "` of type " + ("`" + J + "` supplied to `" + z + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return C(U);
    }
    function E() {
      return C(i);
    }
    function x(k) {
      function U(G, X, z, q, Q) {
        if (typeof k != "function")
          return new f("Property `" + Q + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var Y = G[X];
        if (!Array.isArray(Y)) {
          var Z = $(Y);
          return new f("Invalid " + q + " `" + Q + "` of type " + ("`" + Z + "` supplied to `" + z + "`, expected an array."));
        }
        for (var ee = 0; ee < Y.length; ee++) {
          var J = k(Y, ee, z, q, Q + "[" + ee + "]", o);
          if (J instanceof Error)
            return J;
        }
        return null;
      }
      return C(U);
    }
    function w() {
      function k(U, G, X, z, q) {
        var Q = U[G];
        if (!l(Q)) {
          var Y = $(Q);
          return new f("Invalid " + z + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(k);
    }
    function y() {
      function k(U, G, X, z, q) {
        var Q = U[G];
        if (!e.isValidElementType(Q)) {
          var Y = $(Q);
          return new f("Invalid " + z + " `" + q + "` of type " + ("`" + Y + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(k);
    }
    function R(k) {
      function U(G, X, z, q, Q) {
        if (!(G[X] instanceof k)) {
          var Y = k.name || h, Z = W(G[X]);
          return new f("Invalid " + q + " `" + Q + "` of type " + ("`" + Z + "` supplied to `" + z + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return C(U);
    }
    function O(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), i;
      function U(G, X, z, q, Q) {
        for (var Y = G[X], Z = 0; Z < k.length; Z++)
          if (g(Y, k[Z]))
            return null;
        var ee = JSON.stringify(k, function(K, A) {
          var H = j(A);
          return H === "symbol" ? String(A) : A;
        });
        return new f("Invalid " + q + " `" + Q + "` of value `" + String(Y) + "` " + ("supplied to `" + z + "`, expected one of " + ee + "."));
      }
      return C(U);
    }
    function L(k) {
      function U(G, X, z, q, Q) {
        if (typeof k != "function")
          return new f("Property `" + Q + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var Y = G[X], Z = $(Y);
        if (Z !== "object")
          return new f("Invalid " + q + " `" + Q + "` of type " + ("`" + Z + "` supplied to `" + z + "`, expected an object."));
        for (var ee in Y)
          if (r(Y, ee)) {
            var J = k(Y, ee, z, q, Q + "." + ee, o);
            if (J instanceof Error)
              return J;
          }
        return null;
      }
      return C(U);
    }
    function _(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var U = 0; U < k.length; U++) {
        var G = k[U];
        if (typeof G != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + M(G) + " at index " + U + "."
          ), i;
      }
      function X(z, q, Q, Y, Z) {
        for (var ee = [], J = 0; J < k.length; J++) {
          var K = k[J], A = K(z, q, Q, Y, Z, o);
          if (A == null)
            return null;
          A.data && r(A.data, "expectedType") && ee.push(A.data.expectedType);
        }
        var H = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new f("Invalid " + Y + " `" + Z + "` supplied to " + ("`" + Q + "`" + H + "."));
      }
      return C(X);
    }
    function V() {
      function k(U, G, X, z, q) {
        return D(U[G]) ? null : new f("Invalid " + z + " `" + q + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return C(k);
    }
    function N(k, U, G, X, z) {
      return new f(
        (k || "React class") + ": " + U + " type `" + G + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function B(k) {
      function U(G, X, z, q, Q) {
        var Y = G[X], Z = $(Y);
        if (Z !== "object")
          return new f("Invalid " + q + " `" + Q + "` of type `" + Z + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var ee in k) {
          var J = k[ee];
          if (typeof J != "function")
            return N(z, q, Q, ee, j(J));
          var K = J(Y, ee, z, q, Q + "." + ee, o);
          if (K)
            return K;
        }
        return null;
      }
      return C(U);
    }
    function F(k) {
      function U(G, X, z, q, Q) {
        var Y = G[X], Z = $(Y);
        if (Z !== "object")
          return new f("Invalid " + q + " `" + Q + "` of type `" + Z + "` " + ("supplied to `" + z + "`, expected `object`."));
        var ee = t({}, G[X], k);
        for (var J in ee) {
          var K = k[J];
          if (r(k, J) && typeof K != "function")
            return N(z, q, Q, J, j(K));
          if (!K)
            return new f(
              "Invalid " + q + " `" + Q + "` key `" + J + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(G[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var A = K(Y, J, z, q, Q + "." + J, o);
          if (A)
            return A;
        }
        return null;
      }
      return C(U);
    }
    function D(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(D);
          if (k === null || l(k))
            return !0;
          var U = p(k);
          if (U) {
            var G = U.call(k), X;
            if (U !== k.entries) {
              for (; !(X = G.next()).done; )
                if (!D(X.value))
                  return !1;
            } else
              for (; !(X = G.next()).done; ) {
                var z = X.value;
                if (z && !D(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function P(k, U) {
      return k === "symbol" ? !0 : U ? U["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && U instanceof Symbol : !1;
    }
    function $(k) {
      var U = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : P(U, k) ? "symbol" : U;
    }
    function j(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var U = $(k);
      if (U === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return U;
    }
    function M(k) {
      var U = j(k);
      switch (U) {
        case "array":
        case "object":
          return "an " + U;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + U;
        default:
          return U;
      }
    }
    function W(k) {
      return !k.constructor || !k.constructor.name ? h : k.constructor.name;
    }
    return m.checkPropTypes = a, m.resetWarningCache = a.resetWarningCache, m.PropTypes = m, m;
  }, Ds;
}
var Ms, Ei;
function Wf() {
  if (Ei)
    return Ms;
  Ei = 1;
  var e = da();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ms = function() {
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
  }, Ms;
}
if (process.env.NODE_ENV !== "production") {
  var zf = ec(), Uf = !0;
  Ys.exports = Bf()(zf.isElement, Uf);
} else
  Ys.exports = Wf()();
var Yf = Ys.exports;
const n = /* @__PURE__ */ ao(Yf);
function Hf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function nc(e, t, o, r, a) {
  const s = e[t], i = a || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = s.type;
  return typeof c == "function" && !Hf(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${i}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const oc = fn(n.element, nc);
oc.isRequired = fn(n.element.isRequired, nc);
const Vr = oc;
function qf(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Kf(e, t, o, r, a) {
  const s = e[t], i = a || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof s == "function" && !qf(s) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${i}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Lr = fn(n.elementType, Kf), Gf = "exact-prop: ​";
function rc(e) {
  return process.env.NODE_ENV === "production" ? e : v({}, e, {
    [Gf]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Qt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    t += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qt
}, Symbol.toStringTag, { value: "Module" }));
var Hs = { exports: {} }, Le = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Si;
function Zf() {
  if (Si)
    return Le;
  Si = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.for("react.client.reference");
  function g(f) {
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
  return Le.ContextConsumer = s, Le.ContextProvider = i, Le.Element = e, Le.ForwardRef = l, Le.Fragment = o, Le.Lazy = p, Le.Memo = d, Le.Portal = t, Le.Profiler = a, Le.StrictMode = r, Le.Suspense = c, Le.SuspenseList = u, Le.isContextConsumer = function(f) {
    return g(f) === s;
  }, Le.isContextProvider = function(f) {
    return g(f) === i;
  }, Le.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Le.isForwardRef = function(f) {
    return g(f) === l;
  }, Le.isFragment = function(f) {
    return g(f) === o;
  }, Le.isLazy = function(f) {
    return g(f) === p;
  }, Le.isMemo = function(f) {
    return g(f) === d;
  }, Le.isPortal = function(f) {
    return g(f) === t;
  }, Le.isProfiler = function(f) {
    return g(f) === a;
  }, Le.isStrictMode = function(f) {
    return g(f) === r;
  }, Le.isSuspense = function(f) {
    return g(f) === c;
  }, Le.isSuspenseList = function(f) {
    return g(f) === u;
  }, Le.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === o || f === a || f === r || f === c || f === u || f === h || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === d || f.$$typeof === i || f.$$typeof === s || f.$$typeof === l || f.$$typeof === m || f.getModuleId !== void 0);
  }, Le.typeOf = g, Le;
}
var Be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi;
function Qf() {
  return Pi || (Pi = 1, process.env.NODE_ENV !== "production" && function() {
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
    var t = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = Symbol.for("react.client.reference");
    Be.ContextConsumer = i, Be.ContextProvider = l, Be.Element = t, Be.ForwardRef = c, Be.Fragment = r, Be.Lazy = h, Be.Memo = p, Be.Portal = o, Be.Profiler = s, Be.StrictMode = a, Be.Suspense = u, Be.SuspenseList = d, Be.isContextConsumer = function(f) {
      return e(f) === i;
    }, Be.isContextProvider = function(f) {
      return e(f) === l;
    }, Be.isElement = function(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }, Be.isForwardRef = function(f) {
      return e(f) === c;
    }, Be.isFragment = function(f) {
      return e(f) === r;
    }, Be.isLazy = function(f) {
      return e(f) === h;
    }, Be.isMemo = function(f) {
      return e(f) === p;
    }, Be.isPortal = function(f) {
      return e(f) === o;
    }, Be.isProfiler = function(f) {
      return e(f) === s;
    }, Be.isStrictMode = function(f) {
      return e(f) === a;
    }, Be.isSuspense = function(f) {
      return e(f) === u;
    }, Be.isSuspenseList = function(f) {
      return e(f) === d;
    }, Be.isValidElementType = function(f) {
      return typeof f == "string" || typeof f == "function" || f === r || f === s || f === a || f === u || f === d || f === m || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === p || f.$$typeof === l || f.$$typeof === i || f.$$typeof === c || f.$$typeof === g || f.getModuleId !== void 0);
    }, Be.typeOf = e;
  }()), Be;
}
process.env.NODE_ENV === "production" ? Hs.exports = Zf() : Hs.exports = Qf();
var No = Hs.exports;
const Jf = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function sc(e) {
  const t = `${e}`.match(Jf);
  return t && t[1] || "";
}
function ac(e, t = "") {
  return e.displayName || e.name || sc(e) || t;
}
function Oi(e, t, o) {
  const r = ac(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function ep(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ac(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case No.ForwardRef:
          return Oi(e, e.render, "ForwardRef");
        case No.Memo:
          return Oi(e, e.type, "memo");
        default:
          return;
      }
  }
}
const tp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ep,
  getFunctionName: sc
}, Symbol.toStringTag, { value: "Module" }));
function Jt(e, t, o, r, a) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], i = a || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${i}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
const np = n.oneOfType([n.func, n.object]), yt = np;
function ie(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Qt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const op = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ie
}, Symbol.toStringTag, { value: "Module" }));
function qs(...e) {
  return e.reduce((t, o) => o == null ? t : function(...a) {
    t.apply(this, a), o.apply(this, a);
  }, () => {
  });
}
function fa(e, t = 166) {
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
function rp(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (o, r, a, s, i) => {
    const l = a || "<<anonymous>>", c = i || r;
    return typeof o[r] < "u" ? new Error(`The ${s} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Yn(e, t) {
  var o, r;
  return /* @__PURE__ */ b.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (o = e.type.muiName) != null ? o : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function it(e) {
  return e && e.ownerDocument || document;
}
function un(e) {
  return it(e).defaultView || window;
}
function sp(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const o = t ? v({}, t.propTypes) : null;
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
function Sr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const ap = typeof window < "u" ? b.useLayoutEffect : b.useEffect, ct = ap;
let Ri = 0;
function ip(e) {
  const [t, o] = b.useState(e), r = e || t;
  return b.useEffect(() => {
    t == null && (Ri += 1, o(`mui-${Ri}`));
  }, [t]), r;
}
const Di = b["useId".toString()];
function On(e) {
  if (Di !== void 0) {
    const t = Di();
    return e ?? t;
  }
  return ip(e);
}
function ic(e, t, o, r, a) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = a || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function Lt({
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
  return ct(() => {
    t.current = e;
  }), b.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Ue(...e) {
  return b.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      Sr(o, t);
    });
  }, e);
}
const Mi = {};
function lp(e, t) {
  const o = b.useRef(Mi);
  return o.current === Mi && (o.current = e(t)), o;
}
const cp = [];
function up(e) {
  b.useEffect(e, cp);
}
class Br {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Br();
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
function lc() {
  const e = lp(Br.create).current;
  return up(e.disposeEffect), e;
}
let Wr = !0, Ks = !1;
const dp = new Br(), fp = {
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
function pp(e) {
  const {
    type: t,
    tagName: o
  } = e;
  return !!(o === "INPUT" && fp[t] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function hp(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Wr = !0);
}
function $s() {
  Wr = !1;
}
function mp() {
  this.visibilityState === "hidden" && Ks && (Wr = !0);
}
function yp(e) {
  e.addEventListener("keydown", hp, !0), e.addEventListener("mousedown", $s, !0), e.addEventListener("pointerdown", $s, !0), e.addEventListener("touchstart", $s, !0), e.addEventListener("visibilitychange", mp, !0);
}
function gp(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Wr || pp(t);
}
function cc() {
  const e = b.useCallback((a) => {
    a != null && yp(a.ownerDocument);
  }, []), t = b.useRef(!1);
  function o() {
    return t.current ? (Ks = !0, dp.start(100, () => {
      Ks = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(a) {
    return gp(a) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: o,
    ref: e
  };
}
function uc(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function bp(e) {
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
function vp(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const xp = Number.isInteger || vp;
function dc(e, t, o, r) {
  const a = e[t];
  if (a == null || !xp(a)) {
    const s = bp(a);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function fc(e, t, ...o) {
  return e[t] === void 0 ? null : dc(e, t, ...o);
}
function Gs() {
  return null;
}
fc.isRequired = dc;
Gs.isRequired = Gs;
const pc = process.env.NODE_ENV === "production" ? Gs : fc;
function Ao(e, t) {
  const o = v({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = v({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const a = e[r] || {}, s = t[r];
      o[r] = {}, !s || !Object.keys(s) ? o[r] = a : !a || !Object.keys(a) ? o[r] = s : (o[r] = v({}, s), Object.keys(a).forEach((i) => {
        o[r][i] = Ao(a[i], s[i]);
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
const $i = (e) => e, Cp = () => {
  let e = $i;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = $i;
    }
  };
}, wp = Cp(), hc = wp, Tp = {
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
  const r = Tp[t];
  return r ? `${o}-${r}` : `${hc.generate(e)}-${t}`;
}
function be(e, t, o = "Mui") {
  const r = {};
  return t.forEach((a) => {
    r[a] = xe(e, a, o);
  }), r;
}
function mc(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
const Ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mc
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
function Xn(e) {
  return typeof e == "string";
}
function Sp(e, t, o) {
  return e === void 0 || Xn(e) ? t : v({}, t, {
    ownerState: v({}, t.ownerState, o)
  });
}
function yc(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (o = yc(e[t])) && (r && (r += " "), r += o);
    } else
      for (o in e)
        e[o] && (r && (r += " "), r += o);
  return r;
}
function ce() {
  for (var e, t, o = 0, r = "", a = arguments.length; o < a; o++)
    (e = arguments[o]) && (t = yc(e)) && (r && (r += " "), r += t);
  return r;
}
function gc(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function ki(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function Pp(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: a,
    className: s
  } = e;
  if (!t) {
    const m = ce(o == null ? void 0 : o.className, s, a == null ? void 0 : a.className, r == null ? void 0 : r.className), g = v({}, o == null ? void 0 : o.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), f = v({}, o, a, r);
    return m.length > 0 && (f.className = m), Object.keys(g).length > 0 && (f.style = g), {
      props: f,
      internalRef: void 0
    };
  }
  const i = gc(v({}, a, r)), l = ki(r), c = ki(a), u = t(i), d = ce(u == null ? void 0 : u.className, o == null ? void 0 : o.className, s, a == null ? void 0 : a.className, r == null ? void 0 : r.className), p = v({}, u == null ? void 0 : u.style, o == null ? void 0 : o.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), h = v({}, u, o, c, l);
  return d.length > 0 && (h.className = d), Object.keys(p).length > 0 && (h.style = p), {
    props: h,
    internalRef: u.ref
  };
}
function Op(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
const Rp = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function En(e) {
  var t;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: a,
    skipResolvingSlotProps: s = !1
  } = e, i = ae(e, Rp), l = s ? {} : Op(r, a), {
    props: c,
    internalRef: u
  } = Pp(v({}, i, {
    externalSlotProps: l
  })), d = Ue(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Sp(o, v({}, c, {
    ref: d
  }), a);
}
function Ho(e) {
  if (parseInt(b.version, 10) >= 19) {
    var t;
    return (e == null || (t = e.props) == null ? void 0 : t.ref) || null;
  }
  return (e == null ? void 0 : e.ref) || null;
}
const Dp = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (n.node, n.object);
function Mp(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const a = t.components[o];
  return a.defaultProps ? Ao(a.defaultProps, r) : !a.styleOverrides && !a.variants ? Ao(a, r) : r;
}
function $p({
  props: e,
  name: t
}) {
  const o = b.useContext(Dp);
  return Mp({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function Ve(e) {
  return $p(e);
}
var qo = {}, ks = { exports: {} }, Ii;
function bc() {
  return Ii || (Ii = 1, function(e) {
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
  }(ks)), ks.exports;
}
var Is = { exports: {} }, _i;
function kp() {
  return _i || (_i = 1, function(e) {
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
  }(Is)), Is.exports;
}
function vc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var Ip = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _p = /* @__PURE__ */ vc(
  function(e) {
    return Ip.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Np = !1;
function Ap(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function jp(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Fp = /* @__PURE__ */ function() {
  function e(o) {
    var r = this;
    this._insertTag = function(a) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(a, s), r.tags.push(a);
    }, this.isSpeedy = o.speedy === void 0 ? !Np : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jp(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Ap(a);
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
}(), pt = "-ms-", Pr = "-moz-", Ie = "-webkit-", xc = "comm", pa = "rule", ha = "decl", Vp = "@import", Cc = "@keyframes", Lp = "@layer", Bp = Math.abs, zr = String.fromCharCode, Wp = Object.assign;
function zp(e, t) {
  return dt(e, 0) ^ 45 ? (((t << 2 ^ dt(e, 0)) << 2 ^ dt(e, 1)) << 2 ^ dt(e, 2)) << 2 ^ dt(e, 3) : 0;
}
function wc(e) {
  return e.trim();
}
function Up(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _e(e, t, o) {
  return e.replace(t, o);
}
function Xs(e, t) {
  return e.indexOf(t);
}
function dt(e, t) {
  return e.charCodeAt(t) | 0;
}
function jo(e, t, o) {
  return e.slice(t, o);
}
function Ht(e) {
  return e.length;
}
function ma(e) {
  return e.length;
}
function ar(e, t) {
  return t.push(e), e;
}
function Yp(e, t) {
  return e.map(t).join("");
}
var Ur = 1, Zn = 1, Tc = 0, Ct = 0, rt = 0, io = "";
function Yr(e, t, o, r, a, s, i) {
  return { value: e, root: t, parent: o, type: r, props: a, children: s, line: Ur, column: Zn, length: i, return: "" };
}
function go(e, t) {
  return Wp(Yr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Hp() {
  return rt;
}
function qp() {
  return rt = Ct > 0 ? dt(io, --Ct) : 0, Zn--, rt === 10 && (Zn = 1, Ur--), rt;
}
function St() {
  return rt = Ct < Tc ? dt(io, Ct++) : 0, Zn++, rt === 10 && (Zn = 1, Ur++), rt;
}
function Gt() {
  return dt(io, Ct);
}
function yr() {
  return Ct;
}
function Ko(e, t) {
  return jo(io, e, t);
}
function Fo(e) {
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
function Ec(e) {
  return Ur = Zn = 1, Tc = Ht(io = e), Ct = 0, [];
}
function Sc(e) {
  return io = "", e;
}
function gr(e) {
  return wc(Ko(Ct - 1, Zs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Kp(e) {
  for (; (rt = Gt()) && rt < 33; )
    St();
  return Fo(e) > 2 || Fo(rt) > 3 ? "" : " ";
}
function Gp(e, t) {
  for (; --t && St() && !(rt < 48 || rt > 102 || rt > 57 && rt < 65 || rt > 70 && rt < 97); )
    ;
  return Ko(e, yr() + (t < 6 && Gt() == 32 && St() == 32));
}
function Zs(e) {
  for (; St(); )
    switch (rt) {
      case e:
        return Ct;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Zs(rt);
        break;
      case 40:
        e === 41 && Zs(e);
        break;
      case 92:
        St();
        break;
    }
  return Ct;
}
function Xp(e, t) {
  for (; St() && e + rt !== 47 + 10; )
    if (e + rt === 42 + 42 && Gt() === 47)
      break;
  return "/*" + Ko(t, Ct - 1) + "*" + zr(e === 47 ? e : St());
}
function Zp(e) {
  for (; !Fo(Gt()); )
    St();
  return Ko(e, Ct);
}
function Qp(e) {
  return Sc(br("", null, null, null, [""], e = Ec(e), 0, [0], e));
}
function br(e, t, o, r, a, s, i, l, c) {
  for (var u = 0, d = 0, p = i, h = 0, m = 0, g = 0, f = 1, C = 1, T = 1, E = 0, x = "", w = a, y = s, R = r, O = x; C; )
    switch (g = E, E = St()) {
      case 40:
        if (g != 108 && dt(O, p - 1) == 58) {
          Xs(O += _e(gr(E), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += gr(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += Kp(g);
        break;
      case 92:
        O += Gp(yr() - 1, 7);
        continue;
      case 47:
        switch (Gt()) {
          case 42:
          case 47:
            ar(Jp(Xp(St(), yr()), t, o), c);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * f:
        l[u++] = Ht(O) * T;
      case 125 * f:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            T == -1 && (O = _e(O, /\f/g, "")), m > 0 && Ht(O) - p && ar(m > 32 ? Ai(O + ";", r, o, p - 1) : Ai(_e(O, " ", "") + ";", r, o, p - 2), c);
            break;
          case 59:
            O += ";";
          default:
            if (ar(R = Ni(O, t, o, u, d, a, l, x, w = [], y = [], p), s), E === 123)
              if (d === 0)
                br(O, t, R, R, w, s, p, l, y);
              else
                switch (h === 99 && dt(O, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    br(e, R, R, r && ar(Ni(e, R, R, 0, 0, a, l, x, a, w = [], p), y), a, y, p, l, r ? w : y);
                    break;
                  default:
                    br(O, R, R, R, [""], y, 0, l, y);
                }
        }
        u = d = m = 0, f = T = 1, x = O = "", p = i;
        break;
      case 58:
        p = 1 + Ht(O), m = g;
      default:
        if (f < 1) {
          if (E == 123)
            --f;
          else if (E == 125 && f++ == 0 && qp() == 125)
            continue;
        }
        switch (O += zr(E), E * f) {
          case 38:
            T = d > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            l[u++] = (Ht(O) - 1) * T, T = 1;
            break;
          case 64:
            Gt() === 45 && (O += gr(St())), h = Gt(), d = p = Ht(x = O += Zp(yr())), E++;
            break;
          case 45:
            g === 45 && Ht(O) == 2 && (f = 0);
        }
    }
  return s;
}
function Ni(e, t, o, r, a, s, i, l, c, u, d) {
  for (var p = a - 1, h = a === 0 ? s : [""], m = ma(h), g = 0, f = 0, C = 0; g < r; ++g)
    for (var T = 0, E = jo(e, p + 1, p = Bp(f = i[g])), x = e; T < m; ++T)
      (x = wc(f > 0 ? h[T] + " " + E : _e(E, /&\f/g, h[T]))) && (c[C++] = x);
  return Yr(e, t, o, a === 0 ? pa : l, c, u, d);
}
function Jp(e, t, o) {
  return Yr(e, t, o, xc, zr(Hp()), jo(e, 2, -2), 0);
}
function Ai(e, t, o, r) {
  return Yr(e, t, o, ha, jo(e, 0, r), jo(e, r + 1, -1), r);
}
function Hn(e, t) {
  for (var o = "", r = ma(e), a = 0; a < r; a++)
    o += t(e[a], a, e, t) || "";
  return o;
}
function eh(e, t, o, r) {
  switch (e.type) {
    case Lp:
      if (e.children.length)
        break;
    case Vp:
    case ha:
      return e.return = e.return || e.value;
    case xc:
      return "";
    case Cc:
      return e.return = e.value + "{" + Hn(e.children, r) + "}";
    case pa:
      e.value = e.props.join(",");
  }
  return Ht(o = Hn(e.children, r)) ? e.return = e.value + "{" + o + "}" : "";
}
function th(e) {
  var t = ma(e);
  return function(o, r, a, s) {
    for (var i = "", l = 0; l < t; l++)
      i += e[l](o, r, a, s) || "";
    return i;
  };
}
function nh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var oh = function(t, o, r) {
  for (var a = 0, s = 0; a = s, s = Gt(), a === 38 && s === 12 && (o[r] = 1), !Fo(s); )
    St();
  return Ko(t, Ct);
}, rh = function(t, o) {
  var r = -1, a = 44;
  do
    switch (Fo(a)) {
      case 0:
        a === 38 && Gt() === 12 && (o[r] = 1), t[r] += oh(Ct - 1, o, r);
        break;
      case 2:
        t[r] += gr(a);
        break;
      case 4:
        if (a === 44) {
          t[++r] = Gt() === 58 ? "&\f" : "", o[r] = t[r].length;
          break;
        }
      default:
        t[r] += zr(a);
    }
  while (a = St());
  return t;
}, sh = function(t, o) {
  return Sc(rh(Ec(t), o));
}, ji = /* @__PURE__ */ new WeakMap(), ah = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var o = t.value, r = t.parent, a = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && o.charCodeAt(0) !== 58 && !ji.get(r)) && !a) {
      ji.set(t, !0);
      for (var s = [], i = sh(o, s), l = r.props, c = 0, u = 0; c < i.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = s[c] ? i[c].replace(/&\f/g, l[d]) : l[d] + " " + i[c];
    }
  }
}, ih = function(t) {
  if (t.type === "decl") {
    var o = t.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Pc(e, t) {
  switch (zp(e, t)) {
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
      return Ie + e + Pr + e + pt + e + e;
    case 6828:
    case 4268:
      return Ie + e + pt + e + e;
    case 6165:
      return Ie + e + pt + "flex-" + e + e;
    case 5187:
      return Ie + e + _e(e, /(\w+).+(:[^]+)/, Ie + "box-$1$2" + pt + "flex-$1$2") + e;
    case 5443:
      return Ie + e + pt + "flex-item-" + _e(e, /flex-|-self/, "") + e;
    case 4675:
      return Ie + e + pt + "flex-line-pack" + _e(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Ie + e + pt + _e(e, "shrink", "negative") + e;
    case 5292:
      return Ie + e + pt + _e(e, "basis", "preferred-size") + e;
    case 6060:
      return Ie + "box-" + _e(e, "-grow", "") + Ie + e + pt + _e(e, "grow", "positive") + e;
    case 4554:
      return Ie + _e(e, /([^-])(transform)/g, "$1" + Ie + "$2") + e;
    case 6187:
      return _e(_e(_e(e, /(zoom-|grab)/, Ie + "$1"), /(image-set)/, Ie + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _e(e, /(image-set\([^]*)/, Ie + "$1$`$1");
    case 4968:
      return _e(_e(e, /(.+:)(flex-)?(.*)/, Ie + "box-pack:$3" + pt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ie + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _e(e, /(.+)-inline(.+)/, Ie + "$1$2") + e;
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
      if (Ht(e) - 1 - t > 6)
        switch (dt(e, t + 1)) {
          case 109:
            if (dt(e, t + 4) !== 45)
              break;
          case 102:
            return _e(e, /(.+:)(.+)-([^]+)/, "$1" + Ie + "$2-$3$1" + Pr + (dt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Xs(e, "stretch") ? Pc(_e(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (dt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (dt(e, Ht(e) - 3 - (~Xs(e, "!important") && 10))) {
        case 107:
          return _e(e, ":", ":" + Ie) + e;
        case 101:
          return _e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ie + (dt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ie + "$2$3$1" + pt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (dt(e, t + 11)) {
        case 114:
          return Ie + e + pt + _e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Ie + e + pt + _e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Ie + e + pt + _e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ie + e + pt + e + e;
  }
  return e;
}
var lh = function(t, o, r, a) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ha:
        t.return = Pc(t.value, t.length);
        break;
      case Cc:
        return Hn([go(t, {
          value: _e(t.value, "@", "@" + Ie)
        })], a);
      case pa:
        if (t.length)
          return Yp(t.props, function(s) {
            switch (Up(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Hn([go(t, {
                  props: [_e(s, /:(read-\w+)/, ":" + Pr + "$1")]
                })], a);
              case "::placeholder":
                return Hn([go(t, {
                  props: [_e(s, /:(plac\w+)/, ":" + Ie + "input-$1")]
                }), go(t, {
                  props: [_e(s, /:(plac\w+)/, ":" + Pr + "$1")]
                }), go(t, {
                  props: [_e(s, /:(plac\w+)/, pt + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, ch = [lh], Oc = function(t) {
  var o = t.key;
  if (o === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var C = f.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var a = t.stylisPlugins || ch, s = {}, i, l = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(f) {
      for (var C = f.getAttribute("data-emotion").split(" "), T = 1; T < C.length; T++)
        s[C[T]] = !0;
      l.push(f);
    }
  );
  var c, u = [ah, ih];
  {
    var d, p = [eh, nh(function(f) {
      d.insert(f);
    })], h = th(u.concat(a, p)), m = function(C) {
      return Hn(Qp(C), h);
    };
    c = function(C, T, E, x) {
      d = E, m(C ? C + "{" + T.styles + "}" : T.styles), x && (g.inserted[T.name] = !0);
    };
  }
  var g = {
    key: o,
    sheet: new Fp({
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
  return g.sheet.hydrate(l), g;
}, Qs = { exports: {} }, je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function uh() {
  if (Fi)
    return je;
  Fi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function x(y) {
    if (typeof y == "object" && y !== null) {
      var R = y.$$typeof;
      switch (R) {
        case t:
          switch (y = y.type, y) {
            case c:
            case u:
            case r:
            case s:
            case a:
            case p:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case d:
                case g:
                case m:
                case i:
                  return y;
                default:
                  return R;
              }
          }
        case o:
          return R;
      }
    }
  }
  function w(y) {
    return x(y) === u;
  }
  return je.AsyncMode = c, je.ConcurrentMode = u, je.ContextConsumer = l, je.ContextProvider = i, je.Element = t, je.ForwardRef = d, je.Fragment = r, je.Lazy = g, je.Memo = m, je.Portal = o, je.Profiler = s, je.StrictMode = a, je.Suspense = p, je.isAsyncMode = function(y) {
    return w(y) || x(y) === c;
  }, je.isConcurrentMode = w, je.isContextConsumer = function(y) {
    return x(y) === l;
  }, je.isContextProvider = function(y) {
    return x(y) === i;
  }, je.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, je.isForwardRef = function(y) {
    return x(y) === d;
  }, je.isFragment = function(y) {
    return x(y) === r;
  }, je.isLazy = function(y) {
    return x(y) === g;
  }, je.isMemo = function(y) {
    return x(y) === m;
  }, je.isPortal = function(y) {
    return x(y) === o;
  }, je.isProfiler = function(y) {
    return x(y) === s;
  }, je.isStrictMode = function(y) {
    return x(y) === a;
  }, je.isSuspense = function(y) {
    return x(y) === p;
  }, je.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === u || y === s || y === a || y === p || y === h || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === m || y.$$typeof === i || y.$$typeof === l || y.$$typeof === d || y.$$typeof === C || y.$$typeof === T || y.$$typeof === E || y.$$typeof === f);
  }, je.typeOf = x, je;
}
var Fe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function dh() {
  return Vi || (Vi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function x(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === r || A === u || A === s || A === a || A === p || A === h || typeof A == "object" && A !== null && (A.$$typeof === g || A.$$typeof === m || A.$$typeof === i || A.$$typeof === l || A.$$typeof === d || A.$$typeof === C || A.$$typeof === T || A.$$typeof === E || A.$$typeof === f);
    }
    function w(A) {
      if (typeof A == "object" && A !== null) {
        var H = A.$$typeof;
        switch (H) {
          case t:
            var re = A.type;
            switch (re) {
              case c:
              case u:
              case r:
              case s:
              case a:
              case p:
                return re;
              default:
                var de = re && re.$$typeof;
                switch (de) {
                  case l:
                  case d:
                  case g:
                  case m:
                  case i:
                    return de;
                  default:
                    return H;
                }
            }
          case o:
            return H;
        }
      }
    }
    var y = c, R = u, O = l, L = i, _ = t, V = d, N = r, B = g, F = m, D = o, P = s, $ = a, j = p, M = !1;
    function W(A) {
      return M || (M = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(A) || w(A) === c;
    }
    function k(A) {
      return w(A) === u;
    }
    function U(A) {
      return w(A) === l;
    }
    function G(A) {
      return w(A) === i;
    }
    function X(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function z(A) {
      return w(A) === d;
    }
    function q(A) {
      return w(A) === r;
    }
    function Q(A) {
      return w(A) === g;
    }
    function Y(A) {
      return w(A) === m;
    }
    function Z(A) {
      return w(A) === o;
    }
    function ee(A) {
      return w(A) === s;
    }
    function J(A) {
      return w(A) === a;
    }
    function K(A) {
      return w(A) === p;
    }
    Fe.AsyncMode = y, Fe.ConcurrentMode = R, Fe.ContextConsumer = O, Fe.ContextProvider = L, Fe.Element = _, Fe.ForwardRef = V, Fe.Fragment = N, Fe.Lazy = B, Fe.Memo = F, Fe.Portal = D, Fe.Profiler = P, Fe.StrictMode = $, Fe.Suspense = j, Fe.isAsyncMode = W, Fe.isConcurrentMode = k, Fe.isContextConsumer = U, Fe.isContextProvider = G, Fe.isElement = X, Fe.isForwardRef = z, Fe.isFragment = q, Fe.isLazy = Q, Fe.isMemo = Y, Fe.isPortal = Z, Fe.isProfiler = ee, Fe.isStrictMode = J, Fe.isSuspense = K, Fe.isValidElementType = x, Fe.typeOf = w;
  }()), Fe;
}
process.env.NODE_ENV === "production" ? Qs.exports = uh() : Qs.exports = dh();
var fh = Qs.exports, Rc = fh, ph = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, hh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Dc = {};
Dc[Rc.ForwardRef] = ph;
Dc[Rc.Memo] = hh;
var mh = !0;
function yh(e, t, o) {
  var r = "";
  return o.split(" ").forEach(function(a) {
    e[a] !== void 0 ? t.push(e[a] + ";") : a && (r += a + " ");
  }), r;
}
var Mc = function(t, o, r) {
  var a = t.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  mh === !1) && t.registered[a] === void 0 && (t.registered[a] = o.styles);
}, $c = function(t, o, r) {
  Mc(t, o, r);
  var a = t.key + "-" + o.name;
  if (t.inserted[o.name] === void 0) {
    var s = o;
    do
      t.insert(o === s ? "." + a : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function gh(e) {
  for (var t = 0, o, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    o = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, t = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var bh = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, vh = !1, xh = /[A-Z]|^ms/g, Ch = /_EMO_([^_]+?)_([^]*?)_EMO_/g, kc = function(t) {
  return t.charCodeAt(1) === 45;
}, Li = function(t) {
  return t != null && typeof t != "boolean";
}, _s = /* @__PURE__ */ vc(function(e) {
  return kc(e) ? e : e.replace(xh, "-$&").toLowerCase();
}), Bi = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(Ch, function(r, a, s) {
          return qt = {
            name: a,
            styles: s,
            next: qt
          }, a;
        });
  }
  return bh[t] !== 1 && !kc(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
}, wh = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Vo(e, t, o) {
  if (o == null)
    return "";
  var r = o;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var a = o;
      if (a.anim === 1)
        return qt = {
          name: a.name,
          styles: a.styles,
          next: qt
        }, a.name;
      var s = o;
      if (s.styles !== void 0) {
        var i = s.next;
        if (i !== void 0)
          for (; i !== void 0; )
            qt = {
              name: i.name,
              styles: i.styles,
              next: qt
            }, i = i.next;
        var l = s.styles + ";";
        return l;
      }
      return Th(e, t, o);
    }
    case "function": {
      if (e !== void 0) {
        var c = qt, u = o(e);
        return qt = c, Vo(e, t, u);
      }
      break;
    }
  }
  var d = o;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function Th(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var a = 0; a < o.length; a++)
      r += Vo(e, t, o[a]) + ";";
  else
    for (var s in o) {
      var i = o[s];
      if (typeof i != "object") {
        var l = i;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : Li(l) && (r += _s(s) + ":" + Bi(s, l) + ";");
      } else {
        if (s === "NO_COMPONENT_SELECTOR" && vh)
          throw new Error(wh);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var c = 0; c < i.length; c++)
            Li(i[c]) && (r += _s(s) + ":" + Bi(s, i[c]) + ";");
        else {
          var u = Vo(e, t, i);
          switch (s) {
            case "animation":
            case "animationName": {
              r += _s(s) + ":" + u + ";";
              break;
            }
            default:
              r += s + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var Wi = /label:\s*([^\s;{]+)\s*(;|$)/g, qt;
function ya(e, t, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, a = "";
  qt = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, a += Vo(o, t, s);
  else {
    var i = s;
    a += i[0];
  }
  for (var l = 1; l < e.length; l++)
    if (a += Vo(o, t, e[l]), r) {
      var c = s;
      a += c[l];
    }
  Wi.lastIndex = 0;
  for (var u = "", d; (d = Wi.exec(a)) !== null; )
    u += "-" + d[1];
  var p = gh(a) + u;
  return {
    name: p,
    styles: a,
    next: qt
  };
}
var Eh = function(t) {
  return t();
}, Ic = b["useInsertionEffect"] ? b["useInsertionEffect"] : !1, Sh = Ic || Eh, zi = Ic || b.useLayoutEffect, _c = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Oc({
    key: "css"
  }) : null
), Ph = _c.Provider, Nc = function(t) {
  return /* @__PURE__ */ Cf(function(o, r) {
    var a = wf(_c);
    return t(o, a, r);
  });
}, Hr = /* @__PURE__ */ b.createContext({});
bc();
var Oh = /* @__PURE__ */ Nc(function(e, t) {
  var o = e.styles, r = ya([o], void 0, b.useContext(Hr)), a = b.useRef();
  return zi(function() {
    var s = t.key + "-global", i = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", s), i.hydrate([c])), a.current = [i, l], function() {
      i.flush();
    };
  }, [t]), zi(function() {
    var s = a.current, i = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && $c(t, r.next, !0), i.tags.length) {
      var c = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = c, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
});
function Ac() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return ya(t);
}
var qr = function() {
  var t = Ac.apply(void 0, arguments), o = "animation-" + t.name;
  return {
    name: o,
    styles: "@keyframes " + o + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Rh = _p, Dh = function(t) {
  return t !== "theme";
}, Ui = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Rh : Dh;
}, Yi = function(t, o, r) {
  var a;
  if (o) {
    var s = o.shouldForwardProp;
    a = t.__emotion_forwardProp && s ? function(i) {
      return t.__emotion_forwardProp(i) && s(i);
    } : s;
  }
  return typeof a != "function" && r && (a = t.__emotion_forwardProp), a;
}, Mh = !1, $h = function(t) {
  var o = t.cache, r = t.serialized, a = t.isStringTag;
  return Mc(o, r, a), Sh(function() {
    return $c(o, r, a);
  }), null;
}, kh = function e(t, o) {
  var r = t.__emotion_real === t, a = r && t.__emotion_base || t, s, i;
  o !== void 0 && (s = o.label, i = o.target);
  var l = Yi(t, o, r), c = l || Ui(a), u = !c("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      p.push(d[0][0]);
      for (var h = d.length, m = 1; m < h; m++)
        p.push(d[m], d[0][m]);
    }
    var g = Nc(function(f, C, T) {
      var E = u && f.as || a, x = "", w = [], y = f;
      if (f.theme == null) {
        y = {};
        for (var R in f)
          y[R] = f[R];
        y.theme = b.useContext(Hr);
      }
      typeof f.className == "string" ? x = yh(C.registered, w, f.className) : f.className != null && (x = f.className + " ");
      var O = ya(p.concat(w), C.registered, y);
      x += C.key + "-" + O.name, i !== void 0 && (x += " " + i);
      var L = u && l === void 0 ? Ui(E) : c, _ = {};
      for (var V in f)
        u && V === "as" || L(V) && (_[V] = f[V]);
      return _.className = x, T && (_.ref = T), /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement($h, {
        cache: C,
        serialized: O,
        isStringTag: typeof E == "string"
      }), /* @__PURE__ */ b.createElement(E, _));
    });
    return g.displayName = s !== void 0 ? s : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = a, g.__emotion_styles = p, g.__emotion_forwardProp = l, Object.defineProperty(g, "toString", {
      value: function() {
        return i === void 0 && Mh ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), g.withComponent = function(f, C) {
      return e(f, v({}, o, C, {
        shouldForwardProp: Yi(g, C, !0)
      })).apply(void 0, p);
    }, g;
  };
}, Ih = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Js = kh.bind();
Ih.forEach(function(e) {
  Js[e] = Js(e);
});
let ea;
typeof document == "object" && (ea = Oc({
  key: "css",
  prepend: !0
}));
function jc(e) {
  const {
    injectFirst: t,
    children: o
  } = e;
  return t && ea ? /* @__PURE__ */ S.jsx(Ph, {
    value: ea,
    children: o
  }) : o;
}
process.env.NODE_ENV !== "production" && (jc.propTypes = {
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
function _h(e) {
  return e == null || Object.keys(e).length === 0;
}
function ga(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e, r = typeof t == "function" ? (a) => t(_h(a) ? o : a) : t;
  return /* @__PURE__ */ S.jsx(Oh, {
    styles: r
  });
}
process.env.NODE_ENV !== "production" && (ga.propTypes = {
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
function Nh(e, t) {
  const o = Js(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const a = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${a})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${a})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
const Ah = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: ga,
  StyledEngineProvider: jc,
  ThemeContext: Hr,
  css: Ac,
  default: Nh,
  internal_processStyles: Ah,
  keyframes: qr
}, Symbol.toStringTag, { value: "Module" })), Fc = /* @__PURE__ */ on(jh), Fh = /* @__PURE__ */ on(Af), Vh = /* @__PURE__ */ on(op), Lh = /* @__PURE__ */ on(tp), Bh = ["values", "unit", "step"], Wh = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => v({}, o, {
    [r.key]: r.val
  }), {});
};
function Vc(e) {
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
  } = e, a = ae(e, Bh), s = Wh(t), i = Object.keys(s);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${o})`;
  }
  function u(h, m) {
    const g = i.indexOf(m);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${o}) and (max-width:${(g !== -1 && typeof t[i[g]] == "number" ? t[i[g]] : m) - r / 100}${o})`;
  }
  function d(h) {
    return i.indexOf(h) + 1 < i.length ? u(h, i[i.indexOf(h) + 1]) : l(h);
  }
  function p(h) {
    const m = i.indexOf(h);
    return m === 0 ? l(i[1]) : m === i.length - 1 ? c(i[m]) : u(h, i[i.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return v({
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
const zh = {
  borderRadius: 4
}, Uh = zh, Yh = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {}, pn = Yh;
function Oo(e, t) {
  return t ? Et(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ba = {
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
}, Hi = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${ba[e]}px)`
};
function en(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Hi;
    return t.reduce((i, l, c) => (i[s.up(s.keys[c])] = o(t[c]), i), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Hi;
    return Object.keys(t).reduce((i, l) => {
      if (Object.keys(s.values || ba).indexOf(l) !== -1) {
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
function Hh(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, a) => {
    const s = e.up(a);
    return r[s] = {}, r;
  }, {})) || {};
}
function qh(e, t) {
  return e.reduce((o, r) => {
    const a = o[r];
    return (!a || Object.keys(a).length === 0) && delete o[r], o;
  }, t);
}
function Kr(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((a, s) => a && a[s] ? a[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, a) => r && r[a] != null ? r[a] : null, e);
}
function Or(e, t, o, r = o) {
  let a;
  return typeof e == "function" ? a = e(o) : Array.isArray(e) ? a = e[o] || r : a = Kr(e, o) || r, t && (a = t(a, r, e)), a;
}
function tt(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: a
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const l = i[t], c = i.theme, u = Kr(c, r) || {};
    return en(i, l, (p) => {
      let h = Or(u, a, p);
      return p === h && typeof p == "string" && (h = Or(u, a, `${t}${p === "default" ? "" : ie(p)}`, p)), o === !1 ? h : {
        [o]: h
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: pn
  } : {}, s.filterProps = [t], s;
}
function Kh(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Gh = {
  m: "margin",
  p: "padding"
}, Xh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, qi = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Zh = Kh((e) => {
  if (e.length > 2)
    if (qi[e])
      e = qi[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Gh[t], a = Xh[o] || "";
  return Array.isArray(a) ? a.map((s) => r + s) : [r + a];
}), Gr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Xr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Qh = [...Gr, ...Xr];
function Go(e, t, o, r) {
  var a;
  const s = (a = Kr(e, t, !1)) != null ? a : o;
  return typeof s == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${i}.`), s * i) : Array.isArray(s) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > s.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${i} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[i]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Lc(e) {
  return Go(e, "spacing", 8, "spacing");
}
function Xo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const o = Math.abs(t), r = e(o);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Jh(e, t) {
  return (o) => e.reduce((r, a) => (r[a] = Xo(t, o), r), {});
}
function em(e, t, o, r) {
  if (t.indexOf(o) === -1)
    return null;
  const a = Zh(o), s = Jh(a, r), i = e[o];
  return en(e, i, s);
}
function Bc(e, t) {
  const o = Lc(e.theme);
  return Object.keys(e).map((r) => em(e, t, r, o)).reduce(Oo, {});
}
function Xe(e) {
  return Bc(e, Gr);
}
Xe.propTypes = process.env.NODE_ENV !== "production" ? Gr.reduce((e, t) => (e[t] = pn, e), {}) : {};
Xe.filterProps = Gr;
function Ze(e) {
  return Bc(e, Xr);
}
Ze.propTypes = process.env.NODE_ENV !== "production" ? Xr.reduce((e, t) => (e[t] = pn, e), {}) : {};
Ze.filterProps = Xr;
process.env.NODE_ENV !== "production" && Qh.reduce((e, t) => (e[t] = pn, e), {});
function tm(e = 8) {
  if (e.mui)
    return e;
  const t = Lc({
    spacing: e
  }), o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return o.mui = !0, o;
}
function Zr(...e) {
  const t = e.reduce((r, a) => (a.filterProps.forEach((s) => {
    r[s] = a;
  }), r), {}), o = (r) => Object.keys(r).reduce((a, s) => t[s] ? Oo(a, t[s](r)) : a, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, a) => Object.assign(r, a.propTypes), {}) : {}, o.filterProps = e.reduce((r, a) => r.concat(a.filterProps), []), o;
}
function kt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ft(e, t) {
  return tt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const nm = Ft("border", kt), om = Ft("borderTop", kt), rm = Ft("borderRight", kt), sm = Ft("borderBottom", kt), am = Ft("borderLeft", kt), im = Ft("borderColor"), lm = Ft("borderTopColor"), cm = Ft("borderRightColor"), um = Ft("borderBottomColor"), dm = Ft("borderLeftColor"), fm = Ft("outline", kt), pm = Ft("outlineColor"), Qr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Go(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: Xo(t, r)
    });
    return en(e, e.borderRadius, o);
  }
  return null;
};
Qr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: pn
} : {};
Qr.filterProps = ["borderRadius"];
Zr(nm, om, rm, sm, am, im, lm, cm, um, dm, Qr, fm, pm);
const Jr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Go(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: Xo(t, r)
    });
    return en(e, e.gap, o);
  }
  return null;
};
Jr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: pn
} : {};
Jr.filterProps = ["gap"];
const es = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Go(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: Xo(t, r)
    });
    return en(e, e.columnGap, o);
  }
  return null;
};
es.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: pn
} : {};
es.filterProps = ["columnGap"];
const ts = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Go(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: Xo(t, r)
    });
    return en(e, e.rowGap, o);
  }
  return null;
};
ts.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: pn
} : {};
ts.filterProps = ["rowGap"];
const hm = tt({
  prop: "gridColumn"
}), mm = tt({
  prop: "gridRow"
}), ym = tt({
  prop: "gridAutoFlow"
}), gm = tt({
  prop: "gridAutoColumns"
}), bm = tt({
  prop: "gridAutoRows"
}), vm = tt({
  prop: "gridTemplateColumns"
}), xm = tt({
  prop: "gridTemplateRows"
}), Cm = tt({
  prop: "gridTemplateAreas"
}), wm = tt({
  prop: "gridArea"
});
Zr(Jr, es, ts, hm, mm, ym, gm, bm, vm, xm, Cm, wm);
function qn(e, t) {
  return t === "grey" ? t : e;
}
const Tm = tt({
  prop: "color",
  themeKey: "palette",
  transform: qn
}), Em = tt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qn
}), Sm = tt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qn
});
Zr(Tm, Em, Sm);
function Tt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Pm = tt({
  prop: "width",
  transform: Tt
}), va = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var r, a;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[o]) || ba[o];
      return s ? ((a = e.theme) == null || (a = a.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: Tt(o)
      };
    };
    return en(e, e.maxWidth, t);
  }
  return null;
};
va.filterProps = ["maxWidth"];
const Om = tt({
  prop: "minWidth",
  transform: Tt
}), Rm = tt({
  prop: "height",
  transform: Tt
}), Dm = tt({
  prop: "maxHeight",
  transform: Tt
}), Mm = tt({
  prop: "minHeight",
  transform: Tt
});
tt({
  prop: "size",
  cssProperty: "width",
  transform: Tt
});
tt({
  prop: "size",
  cssProperty: "height",
  transform: Tt
});
const $m = tt({
  prop: "boxSizing"
});
Zr(Pm, va, Om, Rm, Dm, Mm, $m);
const km = {
  // borders
  border: {
    themeKey: "borders",
    transform: kt
  },
  borderTop: {
    themeKey: "borders",
    transform: kt
  },
  borderRight: {
    themeKey: "borders",
    transform: kt
  },
  borderBottom: {
    themeKey: "borders",
    transform: kt
  },
  borderLeft: {
    themeKey: "borders",
    transform: kt
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
    transform: kt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Qr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: qn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qn
  },
  // spacing
  p: {
    style: Ze
  },
  pt: {
    style: Ze
  },
  pr: {
    style: Ze
  },
  pb: {
    style: Ze
  },
  pl: {
    style: Ze
  },
  px: {
    style: Ze
  },
  py: {
    style: Ze
  },
  padding: {
    style: Ze
  },
  paddingTop: {
    style: Ze
  },
  paddingRight: {
    style: Ze
  },
  paddingBottom: {
    style: Ze
  },
  paddingLeft: {
    style: Ze
  },
  paddingX: {
    style: Ze
  },
  paddingY: {
    style: Ze
  },
  paddingInline: {
    style: Ze
  },
  paddingInlineStart: {
    style: Ze
  },
  paddingInlineEnd: {
    style: Ze
  },
  paddingBlock: {
    style: Ze
  },
  paddingBlockStart: {
    style: Ze
  },
  paddingBlockEnd: {
    style: Ze
  },
  m: {
    style: Xe
  },
  mt: {
    style: Xe
  },
  mr: {
    style: Xe
  },
  mb: {
    style: Xe
  },
  ml: {
    style: Xe
  },
  mx: {
    style: Xe
  },
  my: {
    style: Xe
  },
  margin: {
    style: Xe
  },
  marginTop: {
    style: Xe
  },
  marginRight: {
    style: Xe
  },
  marginBottom: {
    style: Xe
  },
  marginLeft: {
    style: Xe
  },
  marginX: {
    style: Xe
  },
  marginY: {
    style: Xe
  },
  marginInline: {
    style: Xe
  },
  marginInlineStart: {
    style: Xe
  },
  marginInlineEnd: {
    style: Xe
  },
  marginBlock: {
    style: Xe
  },
  marginBlockStart: {
    style: Xe
  },
  marginBlockEnd: {
    style: Xe
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
    style: Jr
  },
  rowGap: {
    style: ts
  },
  columnGap: {
    style: es
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
    transform: Tt
  },
  maxWidth: {
    style: va
  },
  minWidth: {
    transform: Tt
  },
  height: {
    transform: Tt
  },
  maxHeight: {
    transform: Tt
  },
  minHeight: {
    transform: Tt
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
}, Zo = km;
function Im(...e) {
  const t = e.reduce((r, a) => r.concat(Object.keys(a)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function _m(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wc() {
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
    const h = Kr(a, u) || {};
    return p ? p(i) : en(i, r, (g) => {
      let f = Or(h, d, g);
      return g === f && typeof g == "string" && (f = Or(h, d, `${o}${g === "default" ? "" : ie(g)}`, g)), c === !1 ? f : {
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
    const i = (r = s.unstable_sxConfig) != null ? r : Zo;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(s);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Hh(s.breakpoints), p = Object.keys(d);
      let h = d;
      return Object.keys(u).forEach((m) => {
        const g = _m(u[m], s);
        if (g != null)
          if (typeof g == "object")
            if (i[m])
              h = Oo(h, e(m, g, s, i));
            else {
              const f = en({
                theme: s
              }, g, (C) => ({
                [m]: C
              }));
              Im(f, g) ? h[m] = t({
                sx: g,
                theme: s
              }) : h = Oo(h, f);
            }
          else
            h = Oo(h, e(m, g, s, i));
      }), qh(p, h);
    }
    return Array.isArray(a) ? a.map(l) : l(a);
  }
  return t;
}
const zc = Wc();
zc.filterProps = ["sx"];
const xa = zc;
function Uc(e, t) {
  const o = this;
  return o.vars && typeof o.getColorSchemeSelector == "function" ? {
    [o.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : o.palette.mode === e ? t : {};
}
const Nm = ["breakpoints", "palette", "spacing", "shape"];
function Ca(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: a,
    shape: s = {}
  } = e, i = ae(e, Nm), l = Vc(o), c = tm(a);
  let u = Et({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: v({
      mode: "light"
    }, r),
    spacing: c,
    shape: v({}, Uh, s)
  }, i);
  return u.applyStyles = Uc, u = t.reduce((d, p) => Et(d, p), u), u.unstable_sxConfig = v({}, Zo, i == null ? void 0 : i.unstable_sxConfig), u.unstable_sx = function(p) {
    return xa({
      sx: p,
      theme: this
    });
  }, u;
}
const Am = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ca,
  private_createBreakpoints: Vc,
  unstable_applyStyles: Uc
}, Symbol.toStringTag, { value: "Module" })), jm = /* @__PURE__ */ on(Am), Fm = ["sx"], Vm = (e) => {
  var t, o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, a = (t = e == null || (o = e.theme) == null ? void 0 : o.unstable_sxConfig) != null ? t : Zo;
  return Object.keys(e).forEach((s) => {
    a[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function Yc(e) {
  const {
    sx: t
  } = e, o = ae(e, Fm), {
    systemProps: r,
    otherProps: a
  } = Vm(o);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...i) => {
    const l = t(...i);
    return cn(l) ? v({}, r, l) : r;
  } : s = v({}, r, t), v({}, a, {
    sx: s
  });
}
const Lm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xa,
  extendSxProp: Yc,
  unstable_createStyleFunctionSx: Wc,
  unstable_defaultSxConfig: Zo
}, Symbol.toStringTag, { value: "Module" })), Bm = /* @__PURE__ */ on(Lm);
var lo = dn;
Object.defineProperty(qo, "__esModule", {
  value: !0
});
var Wm = qo.default = ny;
qo.shouldForwardProp = vr;
qo.systemDefaultTheme = void 0;
var Mt = lo(bc()), ta = lo(kp()), Ki = Zm(Fc), zm = Fh, Um = lo(Vh), Ym = lo(Lh), Hm = lo(jm), qm = lo(Bm);
const Km = ["ownerState"], Gm = ["variants"], Xm = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Hc(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (Hc = function(r) {
    return r ? o : t;
  })(e);
}
function Zm(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var o = Hc(t);
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
function Qm(e) {
  return Object.keys(e).length === 0;
}
function Jm(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function vr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ey = qo.systemDefaultTheme = (0, Hm.default)(), Gi = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function ir({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return Qm(t) ? e : t[o] || t;
}
function ty(e) {
  return e ? (t, o) => o[e] : null;
}
function xr(e, t) {
  let {
    ownerState: o
  } = t, r = (0, ta.default)(t, Km);
  const a = typeof e == "function" ? e((0, Mt.default)({
    ownerState: o
  }, r)) : e;
  if (Array.isArray(a))
    return a.flatMap((s) => xr(s, (0, Mt.default)({
      ownerState: o
    }, r)));
  if (a && typeof a == "object" && Array.isArray(a.variants)) {
    const {
      variants: s = []
    } = a;
    let l = (0, ta.default)(a, Gm);
    return s.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props((0, Mt.default)({
        ownerState: o
      }, r, o)) : Object.keys(c.props).forEach((d) => {
        (o == null ? void 0 : o[d]) !== c.props[d] && r[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style((0, Mt.default)({
        ownerState: o
      }, r, o)) : c.style));
    }), l;
  }
  return a;
}
function ny(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = ey,
    rootShouldForwardProp: r = vr,
    slotShouldForwardProp: a = vr
  } = e, s = (i) => (0, qm.default)((0, Mt.default)({}, i, {
    theme: ir((0, Mt.default)({}, i, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (i, l = {}) => {
    (0, Ki.internal_processStyles)(i, (y) => y.filter((R) => !(R != null && R.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = ty(Gi(u))
    } = l, m = (0, ta.default)(l, Xm), g = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), f = p || !1;
    let C;
    process.env.NODE_ENV !== "production" && c && (C = `${c}-${Gi(u || "Root")}`);
    let T = vr;
    u === "Root" || u === "root" ? T = r : u ? T = a : Jm(i) && (T = void 0);
    const E = (0, Ki.default)(i, (0, Mt.default)({
      shouldForwardProp: T,
      label: C
    }, m)), x = (y) => typeof y == "function" && y.__emotion_real !== y || (0, zm.isPlainObject)(y) ? (R) => xr(y, (0, Mt.default)({}, R, {
      theme: ir({
        theme: R.theme,
        defaultTheme: o,
        themeId: t
      })
    })) : y, w = (y, ...R) => {
      let O = x(y);
      const L = R ? R.map(x) : [];
      c && h && L.push((N) => {
        const B = ir((0, Mt.default)({}, N, {
          defaultTheme: o,
          themeId: t
        }));
        if (!B.components || !B.components[c] || !B.components[c].styleOverrides)
          return null;
        const F = B.components[c].styleOverrides, D = {};
        return Object.entries(F).forEach(([P, $]) => {
          D[P] = xr($, (0, Mt.default)({}, N, {
            theme: B
          }));
        }), h(N, D);
      }), c && !g && L.push((N) => {
        var B;
        const F = ir((0, Mt.default)({}, N, {
          defaultTheme: o,
          themeId: t
        })), D = F == null || (B = F.components) == null || (B = B[c]) == null ? void 0 : B.variants;
        return xr({
          variants: D
        }, (0, Mt.default)({}, N, {
          theme: F
        }));
      }), f || L.push(s);
      const _ = L.length - R.length;
      if (Array.isArray(y) && _ > 0) {
        const N = new Array(_).fill("");
        O = [...y, ...N], O.raw = [...y.raw, ...N];
      }
      const V = E(O, ...L);
      if (process.env.NODE_ENV !== "production") {
        let N;
        c && (N = `${c}${(0, Um.default)(u || "")}`), N === void 0 && (N = `Styled(${(0, Ym.default)(i)})`), V.displayName = N;
      }
      return i.muiName && (V.muiName = i.muiName), V;
    };
    return E.withConfig && (w.withConfig = E.withConfig), w;
  };
}
function oy(e, t) {
  return v({
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
var nt = {};
const ry = /* @__PURE__ */ on(Xf), sy = /* @__PURE__ */ on(Ep);
var qc = dn;
Object.defineProperty(nt, "__esModule", {
  value: !0
});
var Qe = nt.alpha = Zc;
nt.blend = gy;
nt.colorChannel = void 0;
var ay = nt.darken = Ta;
nt.decomposeColor = _t;
nt.emphasize = Qc;
var Xi = nt.getContrastRatio = fy;
nt.getLuminance = Rr;
nt.hexToRgb = Kc;
nt.hslToRgb = Xc;
var iy = nt.lighten = Ea;
nt.private_safeAlpha = py;
nt.private_safeColorChannel = void 0;
nt.private_safeDarken = hy;
nt.private_safeEmphasize = yy;
nt.private_safeLighten = my;
nt.recomposeColor = co;
nt.rgbToHex = dy;
var Zi = qc(ry), ly = qc(sy);
function wa(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), (0, ly.default)(e, t, o);
}
function Kc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, a) => a < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function cy(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function _t(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return _t(Kc(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Zi.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), a;
  if (o === "color") {
    if (r = r.split(" "), a = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Zi.default)(10, a));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: o,
    values: r,
    colorSpace: a
  };
}
const Gc = (e) => {
  const t = _t(e);
  return t.values.slice(0, 3).map((o, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${o}%` : o).join(" ");
};
nt.colorChannel = Gc;
const uy = (e, t) => {
  try {
    return Gc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
nt.private_safeColorChannel = uy;
function co(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((a, s) => s < 3 ? parseInt(a, 10) : a) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function dy(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = _t(e);
  return `#${t.map((o, r) => cy(r === 3 ? Math.round(255 * o) : o)).join("")}`;
}
function Xc(e) {
  e = _t(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, a = t[2] / 100, s = r * Math.min(a, 1 - a), i = (u, d = (u + o / 30) % 12) => a - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), co({
    type: l,
    values: c
  });
}
function Rr(e) {
  e = _t(e);
  let t = e.type === "hsl" || e.type === "hsla" ? _t(Xc(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function fy(e, t) {
  const o = Rr(e), r = Rr(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function Zc(e, t) {
  return e = _t(e), t = wa(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, co(e);
}
function py(e, t, o) {
  try {
    return Zc(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Ta(e, t) {
  if (e = _t(e), t = wa(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return co(e);
}
function hy(e, t, o) {
  try {
    return Ta(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Ea(e, t) {
  if (e = _t(e), t = wa(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return co(e);
}
function my(e, t, o) {
  try {
    return Ea(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Qc(e, t = 0.15) {
  return Rr(e) > 0.5 ? Ta(e, t) : Ea(e, t);
}
function yy(e, t, o) {
  try {
    return Qc(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function gy(e, t, o, r = 1) {
  const a = (c, u) => Math.round((c ** (1 / r) * (1 - o) + u ** (1 / r) * o) ** r), s = _t(e), i = _t(t), l = [a(s.values[0], i.values[0]), a(s.values[1], i.values[1]), a(s.values[2], i.values[2])];
  return co({
    type: "rgb",
    values: l
  });
}
const by = {
  black: "#000",
  white: "#fff"
}, Lo = by, vy = {
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
}, xy = vy, Cy = {
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
}, _n = Cy, wy = {
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
}, Nn = wy, Ty = {
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
}, bo = Ty, Ey = {
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
}, An = Ey, Sy = {
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
}, jn = Sy, Py = {
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
}, Fn = Py, Oy = ["mode", "contrastThreshold", "tonalOffset"], Qi = {
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
    paper: Lo.white,
    default: Lo.white
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
}, Ns = {
  text: {
    primary: Lo.white,
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
    active: Lo.white,
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
function Ji(e, t, o, r) {
  const a = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = iy(e.main, a) : t === "dark" && (e.dark = ay(e.main, s)));
}
function Ry(e = "light") {
  return e === "dark" ? {
    main: An[200],
    light: An[50],
    dark: An[400]
  } : {
    main: An[700],
    light: An[400],
    dark: An[800]
  };
}
function Dy(e = "light") {
  return e === "dark" ? {
    main: _n[200],
    light: _n[50],
    dark: _n[400]
  } : {
    main: _n[500],
    light: _n[300],
    dark: _n[700]
  };
}
function My(e = "light") {
  return e === "dark" ? {
    main: Nn[500],
    light: Nn[300],
    dark: Nn[700]
  } : {
    main: Nn[700],
    light: Nn[400],
    dark: Nn[800]
  };
}
function $y(e = "light") {
  return e === "dark" ? {
    main: jn[400],
    light: jn[300],
    dark: jn[700]
  } : {
    main: jn[700],
    light: jn[500],
    dark: jn[900]
  };
}
function ky(e = "light") {
  return e === "dark" ? {
    main: Fn[400],
    light: Fn[300],
    dark: Fn[700]
  } : {
    main: Fn[800],
    light: Fn[500],
    dark: Fn[900]
  };
}
function Iy(e = "light") {
  return e === "dark" ? {
    main: bo[400],
    light: bo[300],
    dark: bo[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: bo[500],
    dark: bo[900]
  };
}
function _y(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2
  } = e, a = ae(e, Oy), s = e.primary || Ry(t), i = e.secondary || Dy(t), l = e.error || My(t), c = e.info || $y(t), u = e.success || ky(t), d = e.warning || Iy(t);
  function p(f) {
    const C = Xi(f, Ns.text.primary) >= o ? Ns.text.primary : Qi.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Xi(f, C);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${C} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const h = ({
    color: f,
    name: C,
    mainShade: T = 500,
    lightShade: E = 300,
    darkShade: x = 700
  }) => {
    if (f = v({}, f), !f.main && f[T] && (f.main = f[T]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : Qt(11, C ? ` (${C})` : "", T));
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
} });` : Qt(12, C ? ` (${C})` : "", JSON.stringify(f.main)));
    return Ji(f, "light", E, r), Ji(f, "dark", x, r), f.contrastText || (f.contrastText = p(f.main)), f;
  }, m = {
    dark: Ns,
    light: Qi
  };
  return process.env.NODE_ENV !== "production" && (m[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Et(v({
    // A collection of common colors.
    common: v({}, Lo),
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
    grey: xy,
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
const Ny = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Ay(e) {
  return Math.round(e * 1e5) / 1e5;
}
const el = {
  textTransform: "uppercase"
}, tl = '"Roboto", "Helvetica", "Arial", sans-serif';
function jy(e, t) {
  const o = typeof t == "function" ? t(e) : t, {
    fontFamily: r = tl,
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
  } = o, h = ae(o, Ny);
  process.env.NODE_ENV !== "production" && (typeof a != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const m = a / 14, g = p || ((T) => `${T / u * m}rem`), f = (T, E, x, w, y) => v({
    fontFamily: r,
    fontWeight: T,
    fontSize: g(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: x
  }, r === tl ? {
    letterSpacing: `${Ay(w / E)}em`
  } : {}, y, d), C = {
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
    button: f(l, 14, 1.75, 0.4, el),
    caption: f(i, 12, 1.66, 0.4),
    overline: f(i, 12, 2.66, 1, el),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Et(v({
    htmlFontSize: u,
    pxToRem: g,
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
const Fy = 0.2, Vy = 0.14, Ly = 0.12;
function Ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Fy})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Vy})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ly})`].join(",");
}
const By = ["none", Ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Wy = By, zy = ["duration", "easing", "delay"], Uy = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Yy = {
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
function nl(e) {
  return `${Math.round(e)}ms`;
}
function Hy(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function qy(e) {
  const t = v({}, Uy, e.easing), o = v({}, Yy, e.duration);
  return v({
    getAutoHeightDuration: Hy,
    create: (a = ["all"], s = {}) => {
      const {
        duration: i = o.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = s, u = ae(s, zy);
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", p = (h) => !isNaN(parseFloat(h));
        !d(a) && !Array.isArray(a) && console.error('MUI: Argument "props" must be a string or Array.'), !p(i) && !d(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(a) ? a : [a]).map((d) => `${d} ${typeof i == "string" ? i : nl(i)} ${l} ${typeof c == "string" ? c : nl(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: o
  });
}
const Ky = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Gy = Ky, Xy = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Jc(e = {}, ...t) {
  const {
    mixins: o = {},
    palette: r = {},
    transitions: a = {},
    typography: s = {}
  } = e, i = ae(e, Xy);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Qt(18));
  const l = _y(r), c = Ca(e);
  let u = Et(c, {
    mixins: oy(c.breakpoints, o),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Wy.slice(),
    typography: jy(l, s),
    transitions: qy(a),
    zIndex: v({}, Gy)
  });
  if (u = Et(u, i), u = t.reduce((d, p) => Et(d, p), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (h, m) => {
      let g;
      for (g in h) {
        const f = h[g];
        if (d.indexOf(g) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const C = xe("", g);
            console.error([`MUI: The \`${m}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${C}' syntax:`, JSON.stringify({
              root: {
                [`&.${C}`]: f
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[g] = {};
        }
      }
    };
    Object.keys(u.components).forEach((h) => {
      const m = u.components[h].styleOverrides;
      m && h.indexOf("Mui") === 0 && p(m, h);
    });
  }
  return u.unstable_sxConfig = v({}, Zo, i == null ? void 0 : i.unstable_sxConfig), u.unstable_sx = function(p) {
    return xa({
      sx: p,
      theme: this
    });
  }, u;
}
const Zy = Jc(), ns = Zy, os = "$$material";
function eu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Qy = (e) => eu(e) && e !== "classes", Bt = Qy, Jy = Wm({
  themeId: os,
  defaultTheme: ns,
  rootShouldForwardProp: Bt
}), oe = Jy;
function eg(e) {
  return xe("MuiSvgIcon", e);
}
be("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const tg = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], ng = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, a = {
    root: ["root", t !== "inherit" && `color${ie(t)}`, `fontSize${ie(o)}`]
  };
  return we(a, eg, r);
}, og = oe("svg", {
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
  var o, r, a, s, i, l, c, u, d, p, h, m, g;
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
      disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
      inherit: void 0
    }[t.color]
  };
}), Sa = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
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
  } = r, m = ae(r, tg), g = /* @__PURE__ */ b.isValidElement(a) && a.type === "svg", f = v({}, r, {
    color: i,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: h,
    hasSvgAsChild: g
  }), C = {};
  d || (C.viewBox = h);
  const T = ng(f);
  return /* @__PURE__ */ S.jsxs(og, v({
    as: l,
    className: ce(T.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: o
  }, C, m, g && a.props, {
    ownerState: f,
    children: [g ? a.props.children : a, p ? /* @__PURE__ */ S.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Sa.propTypes = {
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
Sa.muiName = "SvgIcon";
const ol = Sa;
function Wt(e, t) {
  function o(r, a) {
    return /* @__PURE__ */ S.jsx(ol, v({
      "data-testid": `${t}Icon`,
      ref: a
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = ol.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(o));
}
const rg = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), hc.configure(e);
  }
}, sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: ie,
  createChainedFunction: qs,
  createSvgIcon: Wt,
  debounce: fa,
  deprecatedPropType: rp,
  isMuiElement: Yn,
  ownerDocument: it,
  ownerWindow: un,
  requirePropFactory: sp,
  setRef: Sr,
  unstable_ClassNameGenerator: rg,
  unstable_useEnhancedEffect: ct,
  unstable_useId: On,
  unsupportedProp: ic,
  useControlled: Lt,
  useEventCallback: pe,
  useForkRef: Ue,
  useIsFocusVisible: cc
}, Symbol.toStringTag, { value: "Module" })), ag = /* @__PURE__ */ on(sg);
var rl;
function uo() {
  return rl || (rl = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = ag;
  }(Es)), Es;
}
var ig = dn;
Object.defineProperty(ua, "__esModule", {
  value: !0
});
var tu = ua.default = void 0, lg = ig(uo()), cg = S;
tu = ua.default = (0, lg.default)(/* @__PURE__ */ (0, cg.jsx)("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "ErrorOutline");
const Sn = ({
  label: e,
  description: t,
  required: o,
  children: r,
  error: a,
  fullWidth: s = !1
}) => {
  const i = so();
  return /* @__PURE__ */ S.jsxs(
    He,
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
          He,
          {
            sx: {
              width: "100%",
              mb: t ? 3 : 2
            },
            children: [
              /* @__PURE__ */ S.jsxs(
                ft,
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
                      ft,
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
                ft,
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
          He,
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
                ft,
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
                    /* @__PURE__ */ S.jsx(tu, { sx: { fontSize: "1.1rem" } }),
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
}, ug = ({
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
  const u = so(), d = Array.from({ length: (r - o) / a + 1 }, (p, h) => o + h * a);
  return /* @__PURE__ */ S.jsx(Sn, { ...c, error: i, fullWidth: !0, children: /* @__PURE__ */ S.jsx(
    He,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        mt: 2
      },
      children: /* @__PURE__ */ S.jsx(
        He,
        {
          sx: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            mb: 2
          },
          children: d.map((p) => /* @__PURE__ */ S.jsxs(
            He,
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
                  He,
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
                  ft,
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
var Pa = {}, dg = dn;
Object.defineProperty(Pa, "__esModule", {
  value: !0
});
var Oa = Pa.default = void 0, fg = dg(uo()), pg = S;
Oa = Pa.default = (0, fg.default)(/* @__PURE__ */ (0, pg.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
}), "CheckCircle");
var Ra = {}, hg = dn;
Object.defineProperty(Ra, "__esModule", {
  value: !0
});
var nu = Ra.default = void 0, mg = hg(uo()), yg = S;
nu = Ra.default = (0, mg.default)(/* @__PURE__ */ (0, yg.jsx)("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "RadioButtonChecked");
const gg = ({
  label: e,
  selected: t,
  onClick: o,
  type: r,
  index: a
}) => {
  const s = so(), i = r === "radio" ? nu : Oa, l = a + 1, c = l <= 9;
  return ht.useEffect(() => {
    const u = (d) => {
      d.key === l.toString() && o();
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [l, o]), /* @__PURE__ */ S.jsxs(
    Fr,
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
          ft,
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
          ft,
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
          He,
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
}, bg = ({
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
    Sn,
    {
      ...l,
      error: s,
      fullWidth: !1,
      children: /* @__PURE__ */ S.jsx(
        He,
        {
          sx: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1.5
          },
          children: c.map((d, p) => /* @__PURE__ */ S.jsx(
            gg,
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
}, vg = ({
  value: e = "",
  onChange: t,
  placeholder: o,
  multiline: r = !1,
  rows: a = 3,
  error: s,
  previewMode: i = !1,
  ...l
}) => {
  const c = so();
  return /* @__PURE__ */ S.jsx(Sn, { ...l, error: s, children: /* @__PURE__ */ S.jsx(
    Sf,
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
}, xg = ({
  choices: e,
  value: t,
  onChange: o,
  allowMultiple: r,
  error: a
}) => {
  const s = so(), i = Array.isArray(t) ? t : t ? [t] : [], l = (c) => {
    if (r) {
      const u = i.includes(c) ? i.filter((d) => d !== c) : [...i, c];
      o(u);
    } else
      o(c === t ? null : c);
  };
  return /* @__PURE__ */ S.jsx(
    Sn,
    {
      error: a,
      fullWidth: !0,
      children: /* @__PURE__ */ S.jsx(
        He,
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
              He,
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
                    He,
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
                    He,
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
                    He,
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
                        ft,
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
                    He,
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
                      children: /* @__PURE__ */ S.jsx(Oa, { sx: { fontSize: 16 } })
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
function Cg(e) {
  return Object.keys(e).length === 0;
}
function ou(e = null) {
  const t = b.useContext(Hr);
  return !t || Cg(t) ? e : t;
}
const wg = Ca();
function Qo(e = wg) {
  return ou(e);
}
function ru({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = Qo(o), a = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ S.jsx(ga, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (ru.propTypes = {
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
function su(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : Ao(t.components[o].defaultProps, r);
}
function Tg({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let a = Qo(o);
  return r && (a = a[r] || a), su({
    theme: a,
    name: t,
    props: e
  });
}
function Eg(e, t, o, r, a) {
  const [s, i] = b.useState(() => a && o ? o(e).matches : r ? r(e).matches : t);
  return ct(() => {
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
const au = b["useSyncExternalStore"];
function Sg(e, t, o, r, a) {
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
  return au(c, l, i);
}
function iu(e, t = {}) {
  const o = ou(), r = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: a = !1,
    matchMedia: s = r ? window.matchMedia : null,
    ssrMatchMedia: i = null,
    noSsr: l = !1
  } = su({
    name: "MuiUseMediaQuery",
    props: t,
    theme: o
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && o === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let c = typeof e == "function" ? e(o) : e;
  c = c.replace(/^@media( ?)/m, "");
  const d = (au !== void 0 ? Sg : Eg)(c, a, s, i, l);
  return process.env.NODE_ENV !== "production" && b.useDebugValue({
    query: c,
    match: d
  }), d;
}
function Pg(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), mc(e, t, o);
}
function Og(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, a) => a < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function lu(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return lu(Og(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Qt(9, e));
  let r = e.substring(t + 1, e.length - 1), a;
  if (o === "color") {
    if (r = r.split(" "), a = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Qt(10, a));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: o,
    values: r,
    colorSpace: a
  };
}
function Rg(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((a, s) => s < 3 ? parseInt(a, 10) : a) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Qn(e, t) {
  return e = lu(e), t = Pg(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Rg(e);
}
const Dg = /* @__PURE__ */ b.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const Mg = () => {
  const e = b.useContext(Dg);
  return e ?? !1;
};
function Vt() {
  const e = Qo(ns);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e[os] || e;
}
function lt({
  props: e,
  name: t
}) {
  return Tg({
    props: e,
    name: t,
    defaultTheme: ns,
    themeId: os
  });
}
const $g = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, sl = $g, kg = ["localeText"], Dr = /* @__PURE__ */ b.createContext(null);
process.env.NODE_ENV !== "production" && (Dr.displayName = "MuiPickersAdapterContext");
const rs = function(t) {
  var o;
  const {
    localeText: r
  } = t, a = ae(t, kg), {
    utils: s,
    localeText: i
  } = (o = b.useContext(Dr)) != null ? o : {
    utils: void 0,
    localeText: void 0
  }, l = lt({
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
  } = l, g = b.useMemo(() => v({}, m, i, r), [m, i, r]), f = b.useMemo(() => {
    if (!u)
      return s || null;
    const E = new u({
      locale: h,
      formats: d,
      instance: p
    });
    if (!E.isMUIAdapter)
      throw new Error(["MUI: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    return E;
  }, [u, h, d, p, s]), C = b.useMemo(() => f ? {
    minDate: f.date("1900-01-01T00:00:00.000"),
    maxDate: f.date("2099-12-31T00:00:00.000")
  } : null, [f]), T = b.useMemo(() => ({
    utils: f,
    defaultDates: C,
    localeText: g
  }), [C, f, g]);
  return /* @__PURE__ */ S.jsx(Dr.Provider, {
    value: T,
    children: c
  });
};
process.env.NODE_ENV !== "production" && (rs.propTypes = {
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
var cu = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(Yo, function() {
    var o = 1e3, r = 6e4, a = 36e5, s = "millisecond", i = "second", l = "minute", c = "hour", u = "day", d = "week", p = "month", h = "quarter", m = "year", g = "date", f = "Invalid Date", C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, T = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, E = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(D) {
      var P = ["th", "st", "nd", "rd"], $ = D % 100;
      return "[" + D + (P[($ - 20) % 10] || P[$] || P[0]) + "]";
    } }, x = function(D, P, $) {
      var j = String(D);
      return !j || j.length >= P ? D : "" + Array(P + 1 - j.length).join($) + D;
    }, w = { s: x, z: function(D) {
      var P = -D.utcOffset(), $ = Math.abs(P), j = Math.floor($ / 60), M = $ % 60;
      return (P <= 0 ? "+" : "-") + x(j, 2, "0") + ":" + x(M, 2, "0");
    }, m: function D(P, $) {
      if (P.date() < $.date())
        return -D($, P);
      var j = 12 * ($.year() - P.year()) + ($.month() - P.month()), M = P.clone().add(j, p), W = $ - M < 0, k = P.clone().add(j + (W ? -1 : 1), p);
      return +(-(j + ($ - M) / (W ? M - k : k - M)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: p, y: m, w: d, d: u, D: g, h: c, m: l, s: i, ms: s, Q: h }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, y = "en", R = {};
    R[y] = E;
    var O = "$isDayjsObject", L = function(D) {
      return D instanceof B || !(!D || !D[O]);
    }, _ = function D(P, $, j) {
      var M;
      if (!P)
        return y;
      if (typeof P == "string") {
        var W = P.toLowerCase();
        R[W] && (M = W), $ && (R[W] = $, M = W);
        var k = P.split("-");
        if (!M && k.length > 1)
          return D(k[0]);
      } else {
        var U = P.name;
        R[U] = P, M = U;
      }
      return !j && M && (y = M), M || !j && y;
    }, V = function(D, P) {
      if (L(D))
        return D.clone();
      var $ = typeof P == "object" ? P : {};
      return $.date = D, $.args = arguments, new B($);
    }, N = w;
    N.l = _, N.i = L, N.w = function(D, P) {
      return V(D, { locale: P.$L, utc: P.$u, x: P.$x, $offset: P.$offset });
    };
    var B = function() {
      function D($) {
        this.$L = _($.locale, null, !0), this.parse($), this.$x = this.$x || $.x || {}, this[O] = !0;
      }
      var P = D.prototype;
      return P.parse = function($) {
        this.$d = function(j) {
          var M = j.date, W = j.utc;
          if (M === null)
            return /* @__PURE__ */ new Date(NaN);
          if (N.u(M))
            return /* @__PURE__ */ new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var k = M.match(C);
            if (k) {
              var U = k[2] - 1 || 0, G = (k[7] || "0").substring(0, 3);
              return W ? new Date(Date.UTC(k[1], U, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, G)) : new Date(k[1], U, k[3] || 1, k[4] || 0, k[5] || 0, k[6] || 0, G);
            }
          }
          return new Date(M);
        }($), this.init();
      }, P.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, P.$utils = function() {
        return N;
      }, P.isValid = function() {
        return this.$d.toString() !== f;
      }, P.isSame = function($, j) {
        var M = V($);
        return this.startOf(j) <= M && M <= this.endOf(j);
      }, P.isAfter = function($, j) {
        return V($) < this.startOf(j);
      }, P.isBefore = function($, j) {
        return this.endOf(j) < V($);
      }, P.$g = function($, j, M) {
        return N.u($) ? this[j] : this.set(M, $);
      }, P.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, P.valueOf = function() {
        return this.$d.getTime();
      }, P.startOf = function($, j) {
        var M = this, W = !!N.u(j) || j, k = N.p($), U = function(ee, J) {
          var K = N.w(M.$u ? Date.UTC(M.$y, J, ee) : new Date(M.$y, J, ee), M);
          return W ? K : K.endOf(u);
        }, G = function(ee, J) {
          return N.w(M.toDate()[ee].apply(M.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)), M);
        }, X = this.$W, z = this.$M, q = this.$D, Q = "set" + (this.$u ? "UTC" : "");
        switch (k) {
          case m:
            return W ? U(1, 0) : U(31, 11);
          case p:
            return W ? U(1, z) : U(0, z + 1);
          case d:
            var Y = this.$locale().weekStart || 0, Z = (X < Y ? X + 7 : X) - Y;
            return U(W ? q - Z : q + (6 - Z), z);
          case u:
          case g:
            return G(Q + "Hours", 0);
          case c:
            return G(Q + "Minutes", 1);
          case l:
            return G(Q + "Seconds", 2);
          case i:
            return G(Q + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, P.endOf = function($) {
        return this.startOf($, !1);
      }, P.$set = function($, j) {
        var M, W = N.p($), k = "set" + (this.$u ? "UTC" : ""), U = (M = {}, M[u] = k + "Date", M[g] = k + "Date", M[p] = k + "Month", M[m] = k + "FullYear", M[c] = k + "Hours", M[l] = k + "Minutes", M[i] = k + "Seconds", M[s] = k + "Milliseconds", M)[W], G = W === u ? this.$D + (j - this.$W) : j;
        if (W === p || W === m) {
          var X = this.clone().set(g, 1);
          X.$d[U](G), X.init(), this.$d = X.set(g, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          U && this.$d[U](G);
        return this.init(), this;
      }, P.set = function($, j) {
        return this.clone().$set($, j);
      }, P.get = function($) {
        return this[N.p($)]();
      }, P.add = function($, j) {
        var M, W = this;
        $ = Number($);
        var k = N.p(j), U = function(z) {
          var q = V(W);
          return N.w(q.date(q.date() + Math.round(z * $)), W);
        };
        if (k === p)
          return this.set(p, this.$M + $);
        if (k === m)
          return this.set(m, this.$y + $);
        if (k === u)
          return U(1);
        if (k === d)
          return U(7);
        var G = (M = {}, M[l] = r, M[c] = a, M[i] = o, M)[k] || 1, X = this.$d.getTime() + $ * G;
        return N.w(X, this);
      }, P.subtract = function($, j) {
        return this.add(-1 * $, j);
      }, P.format = function($) {
        var j = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || f;
        var W = $ || "YYYY-MM-DDTHH:mm:ssZ", k = N.z(this), U = this.$H, G = this.$m, X = this.$M, z = M.weekdays, q = M.months, Q = M.meridiem, Y = function(J, K, A, H) {
          return J && (J[K] || J(j, W)) || A[K].slice(0, H);
        }, Z = function(J) {
          return N.s(U % 12 || 12, J, "0");
        }, ee = Q || function(J, K, A) {
          var H = J < 12 ? "AM" : "PM";
          return A ? H.toLowerCase() : H;
        };
        return W.replace(T, function(J, K) {
          return K || function(A) {
            switch (A) {
              case "YY":
                return String(j.$y).slice(-2);
              case "YYYY":
                return N.s(j.$y, 4, "0");
              case "M":
                return X + 1;
              case "MM":
                return N.s(X + 1, 2, "0");
              case "MMM":
                return Y(M.monthsShort, X, q, 3);
              case "MMMM":
                return Y(q, X);
              case "D":
                return j.$D;
              case "DD":
                return N.s(j.$D, 2, "0");
              case "d":
                return String(j.$W);
              case "dd":
                return Y(M.weekdaysMin, j.$W, z, 2);
              case "ddd":
                return Y(M.weekdaysShort, j.$W, z, 3);
              case "dddd":
                return z[j.$W];
              case "H":
                return String(U);
              case "HH":
                return N.s(U, 2, "0");
              case "h":
                return Z(1);
              case "hh":
                return Z(2);
              case "a":
                return ee(U, G, !0);
              case "A":
                return ee(U, G, !1);
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
                return k;
            }
            return null;
          }(J) || k.replace(":", "");
        });
      }, P.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, P.diff = function($, j, M) {
        var W, k = this, U = N.p(j), G = V($), X = (G.utcOffset() - this.utcOffset()) * r, z = this - G, q = function() {
          return N.m(k, G);
        };
        switch (U) {
          case m:
            W = q() / 12;
            break;
          case p:
            W = q();
            break;
          case h:
            W = q() / 3;
            break;
          case d:
            W = (z - X) / 6048e5;
            break;
          case u:
            W = (z - X) / 864e5;
            break;
          case c:
            W = z / a;
            break;
          case l:
            W = z / r;
            break;
          case i:
            W = z / o;
            break;
          default:
            W = z;
        }
        return M ? W : N.a(W);
      }, P.daysInMonth = function() {
        return this.endOf(p).$D;
      }, P.$locale = function() {
        return R[this.$L];
      }, P.locale = function($, j) {
        if (!$)
          return this.$L;
        var M = this.clone(), W = _($, j, !0);
        return W && (M.$L = W), M;
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
      }, D;
    }(), F = B.prototype;
    return V.prototype = F, [["$ms", s], ["$s", i], ["$m", l], ["$H", c], ["$W", u], ["$M", p], ["$y", m], ["$D", g]].forEach(function(D) {
      F[D[1]] = function(P) {
        return this.$g(P, D[0], D[1]);
      };
    }), V.extend = function(D, P) {
      return D.$i || (D(P, B, V), D.$i = !0), V;
    }, V.locale = _, V.isDayjs = L, V.unix = function(D) {
      return V(1e3 * D);
    }, V.en = R[y], V.Ls = R, V.p = {}, V;
  });
})(cu);
var Ig = cu.exports;
const at = /* @__PURE__ */ ao(Ig);
var uu = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(Yo, function() {
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
})(uu);
var _g = uu.exports;
const Ng = /* @__PURE__ */ ao(_g);
var du = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(Yo, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, s = /\d\d/, i = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, c = {}, u = function(C) {
      return (C = +C) + (C > 68 ? 1900 : 2e3);
    }, d = function(C) {
      return function(T) {
        this[C] = +T;
      };
    }, p = [/[+-]\d\d:?(\d\d)?|Z/, function(C) {
      (this.zone || (this.zone = {})).offset = function(T) {
        if (!T || T === "Z")
          return 0;
        var E = T.match(/([+-]|\d\d)/g), x = 60 * E[1] + (+E[2] || 0);
        return x === 0 ? 0 : E[0] === "+" ? -x : x;
      }(C);
    }], h = function(C) {
      var T = c[C];
      return T && (T.indexOf ? T : T.s.concat(T.f));
    }, m = function(C, T) {
      var E, x = c.meridiem;
      if (x) {
        for (var w = 1; w <= 24; w += 1)
          if (C.indexOf(x(w, 0, T)) > -1) {
            E = w > 12;
            break;
          }
      } else
        E = C === (T ? "pm" : "PM");
      return E;
    }, g = { A: [l, function(C) {
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
      var T = c.ordinal, E = C.match(/\d+/);
      if (this.day = E[0], T)
        for (var x = 1; x <= 31; x += 1)
          T(x).replace(/\[|\]/g, "") === C && (this.day = x);
    }], w: [i, d("week")], ww: [s, d("week")], M: [i, d("month")], MM: [s, d("month")], MMM: [l, function(C) {
      var T = h("months"), E = (h("monthsShort") || T.map(function(x) {
        return x.slice(0, 3);
      })).indexOf(C) + 1;
      if (E < 1)
        throw new Error();
      this.month = E % 12 || E;
    }], MMMM: [l, function(C) {
      var T = h("months").indexOf(C) + 1;
      if (T < 1)
        throw new Error();
      this.month = T % 12 || T;
    }], Y: [/[+-]?\d+/, d("year")], YY: [s, function(C) {
      this.year = u(C);
    }], YYYY: [/\d{4}/, d("year")], Z: p, ZZ: p };
    function f(C) {
      var T, E;
      T = C, E = c && c.formats;
      for (var x = (C = T.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(V, N, B) {
        var F = B && B.toUpperCase();
        return N || E[B] || o[B] || E[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(D, P, $) {
          return P || $.slice(1);
        });
      })).match(r), w = x.length, y = 0; y < w; y += 1) {
        var R = x[y], O = g[R], L = O && O[0], _ = O && O[1];
        x[y] = _ ? { regex: L, parser: _ } : R.replace(/^\[|\]$/g, "");
      }
      return function(V) {
        for (var N = {}, B = 0, F = 0; B < w; B += 1) {
          var D = x[B];
          if (typeof D == "string")
            F += D.length;
          else {
            var P = D.regex, $ = D.parser, j = V.slice(F), M = P.exec(j)[0];
            $.call(N, M), V = V.replace(M, "");
          }
        }
        return function(W) {
          var k = W.afternoon;
          if (k !== void 0) {
            var U = W.hours;
            k ? U < 12 && (W.hours += 12) : U === 12 && (W.hours = 0), delete W.afternoon;
          }
        }(N), N;
      };
    }
    return function(C, T, E) {
      E.p.customParseFormat = !0, C && C.parseTwoDigitYear && (u = C.parseTwoDigitYear);
      var x = T.prototype, w = x.parse;
      x.parse = function(y) {
        var R = y.date, O = y.utc, L = y.args;
        this.$u = O;
        var _ = L[1];
        if (typeof _ == "string") {
          var V = L[2] === !0, N = L[3] === !0, B = V || N, F = L[2];
          N && (F = L[2]), c = this.$locale(), !V && F && (c = E.Ls[F]), this.$d = function(j, M, W, k) {
            try {
              if (["x", "X"].indexOf(M) > -1)
                return new Date((M === "X" ? 1e3 : 1) * j);
              var U = f(M)(j), G = U.year, X = U.month, z = U.day, q = U.hours, Q = U.minutes, Y = U.seconds, Z = U.milliseconds, ee = U.zone, J = U.week, K = /* @__PURE__ */ new Date(), A = z || (G || X ? 1 : K.getDate()), H = G || K.getFullYear(), re = 0;
              G && !X || (re = X > 0 ? X - 1 : K.getMonth());
              var de, ge = q || 0, $e = Q || 0, ue = Y || 0, fe = Z || 0;
              return ee ? new Date(Date.UTC(H, re, A, ge, $e, ue, fe + 60 * ee.offset * 1e3)) : W ? new Date(Date.UTC(H, re, A, ge, $e, ue, fe)) : (de = new Date(H, re, A, ge, $e, ue, fe), J && (de = k(de).week(J).toDate()), de);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(R, _, O, E), this.init(), F && F !== !0 && (this.$L = this.locale(F).$L), B && R != this.format(_) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
        } else if (_ instanceof Array)
          for (var D = _.length, P = 1; P <= D; P += 1) {
            L[1] = _[P - 1];
            var $ = E.apply(this, L);
            if ($.isValid()) {
              this.$d = $.$d, this.$L = $.$L, this.init();
              break;
            }
            P === D && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          w.call(this, y);
      };
    };
  });
})(du);
var Ag = du.exports;
const jg = /* @__PURE__ */ ao(Ag);
var fu = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(Yo, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(r, a, s) {
      var i = a.prototype, l = i.format;
      s.en.formats = o, i.format = function(c) {
        c === void 0 && (c = "YYYY-MM-DDTHH:mm:ssZ");
        var u = this.$locale().formats, d = function(p, h) {
          return p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(m, g, f) {
            var C = f && f.toUpperCase();
            return g || h[f] || o[f] || h[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(T, E, x) {
              return E || x.slice(1);
            });
          });
        }(c, u === void 0 ? {} : u);
        return l.call(this, d);
      };
    };
  });
})(fu);
var Fg = fu.exports;
const Vg = /* @__PURE__ */ ao(Fg);
var pu = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(Yo, function() {
    return function(o, r, a) {
      r.prototype.isBetween = function(s, i, l, c) {
        var u = a(s), d = a(i), p = (c = c || "()")[0] === "(", h = c[1] === ")";
        return (p ? this.isAfter(u, l) : !this.isBefore(u, l)) && (h ? this.isBefore(d, l) : !this.isAfter(d, l)) || (p ? this.isBefore(u, l) : !this.isAfter(u, l)) && (h ? this.isAfter(d, l) : !this.isBefore(d, l));
      };
    };
  });
})(pu);
var Lg = pu.exports;
const Bg = /* @__PURE__ */ ao(Lg), hu = (e, t = "warning") => {
  let o = !1;
  const r = Array.isArray(e) ? e.join(`
`) : e;
  return () => {
    o || (o = !0, t === "error" ? console.error(r) : console.warn(r));
  };
};
at.extend(jg);
at.extend(Vg);
at.extend(Bg);
const Wg = hu(["Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale"]), zg = {
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
}, Ug = {
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
}, As = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), al = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), Yg = (e, t) => t ? (...o) => e(...o).locale(t) : e;
class Hg {
  constructor({
    locale: t,
    formats: o,
    instance: r
  } = {}) {
    var a;
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.rawDayJsInstance = void 0, this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = zg, this.setLocaleToValue = (s) => {
      const i = this.getCurrentLocaleCode();
      return i === s.locale() ? s : s.locale(i);
    }, this.hasUTCPlugin = () => typeof at.utc < "u", this.hasTimezonePlugin = () => typeof at.tz < "u", this.isSame = (s, i, l) => {
      const c = this.setTimezone(i, this.getTimezone(s));
      return s.format(l) === c.format(l);
    }, this.cleanTimezone = (s) => {
      switch (s) {
        case "default":
          return;
        case "system":
          return at.tz.guess();
        default:
          return s;
      }
    }, this.createSystemDate = (s) => {
      if (this.rawDayJsInstance)
        return this.rawDayJsInstance(s);
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const i = at.tz.guess();
        return i !== "UTC" ? at.tz(s, i) : at(s);
      }
      return at(s);
    }, this.createUTCDate = (s) => {
      if (!this.hasUTCPlugin())
        throw new Error(As);
      return at.utc(s);
    }, this.createTZDate = (s, i) => {
      if (!this.hasUTCPlugin())
        throw new Error(As);
      if (!this.hasTimezonePlugin())
        throw new Error(al);
      const l = s !== void 0 && !s.endsWith("Z");
      return at(s).tz(this.cleanTimezone(i), l);
    }, this.getLocaleFormats = () => {
      const s = at.Ls, i = this.locale || "en";
      let l = s[i];
      return l === void 0 && (Wg(), l = s.en), l.formats;
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
          throw new Error(As);
        return s.utc();
      }
      if (i === "system")
        return s.local();
      if (!this.hasTimezonePlugin()) {
        if (i === "default")
          return s;
        throw new Error(al);
      }
      return at.tz(s, this.cleanTimezone(i));
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
    }, this.getMeridiemText = (s) => s === "am" ? "AM" : "PM", this.rawDayJsInstance = r, this.dayjs = Yg((a = this.rawDayJsInstance) != null ? a : at, t), this.locale = t, this.formats = v({}, Ug, o), at.extend(Ng);
  }
}
function qg(e) {
  return typeof e == "string";
}
function Kg(e, t, o) {
  return e === void 0 || qg(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...o
    }
  };
}
function Gg(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function mu(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function Xg(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Zg(...e) {
  return b.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      Xg(o, t);
    });
  }, e);
}
function il(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function Qg(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: a,
    className: s
  } = e;
  if (!t) {
    const m = ce(o == null ? void 0 : o.className, s, a == null ? void 0 : a.className, r == null ? void 0 : r.className), g = {
      ...o == null ? void 0 : o.style,
      ...a == null ? void 0 : a.style,
      ...r == null ? void 0 : r.style
    }, f = {
      ...o,
      ...a,
      ...r
    };
    return m.length > 0 && (f.className = m), Object.keys(g).length > 0 && (f.style = g), {
      props: f,
      internalRef: void 0
    };
  }
  const i = Gg({
    ...a,
    ...r
  }), l = il(r), c = il(a), u = t(i), d = ce(u == null ? void 0 : u.className, o == null ? void 0 : o.className, s, a == null ? void 0 : a.className, r == null ? void 0 : r.className), p = {
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
function Jg(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function st(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: o,
    ownerState: r,
    skipResolvingSlotProps: a = !1,
    ...s
  } = e, i = a ? {} : Jg(o, r), {
    props: l,
    internalRef: c
  } = Qg({
    ...s,
    externalSlotProps: i
  }), u = Zg(c, i == null ? void 0 : i.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return Kg(t, {
    ...l,
    ref: u
  }, r);
}
const vo = (e, t) => e.length !== t.length ? !1 : t.every((o) => e.includes(o)), eb = ({
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
}, Mr = (e, t, o) => {
  let r = t;
  return r = e.setHours(r, e.getHours(o)), r = e.setMinutes(r, e.getMinutes(o)), r = e.setSeconds(r, e.getSeconds(o)), r;
}, Ro = ({
  date: e,
  disableFuture: t,
  disablePast: o,
  maxDate: r,
  minDate: a,
  isDateDisabled: s,
  utils: i,
  timezone: l
}) => {
  const c = Mr(i, i.dateWithTimezone(void 0, l), e);
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
}, tb = (e, t) => t == null || !e.isValid(t) ? null : t, Nt = (e, t, o) => t == null || !e.isValid(t) ? o : t, nb = (e, t, o) => !e.isValid(t) && t != null && !e.isValid(o) && o != null ? !0 : e.isEqual(t, o), Da = (e, t) => {
  const r = [e.startOfYear(t)];
  for (; r.length < 12; ) {
    const a = r[r.length - 1];
    r.push(e.addMonths(a, 1));
  }
  return r;
}, yu = (e, t, o) => o === "date" ? e.startOfDay(e.dateWithTimezone(void 0, t)) : e.dateWithTimezone(void 0, t), ob = ["year", "month", "day"], ll = (e) => ob.includes(e), Ma = (e, {
  format: t,
  views: o
}, r) => {
  if (t != null)
    return t;
  const a = e.formats;
  return vo(o, ["year"]) ? a.year : vo(o, ["month"]) ? a.month : vo(o, ["day"]) ? a.dayOfMonth : vo(o, ["month", "year"]) ? `${a.month} ${a.year}` : vo(o, ["day", "month"]) ? `${a.month} ${a.dayOfMonth}` : r ? /en/.test(e.getCurrentLocaleCode()) ? a.normalDateWithWeekday : a.normalDate : a.keyboardDate;
}, rb = (e, t) => {
  const o = e.startOfWeek(t);
  return [0, 1, 2, 3, 4, 5, 6].map((r) => e.addDays(o, r));
}, sb = ["hours", "minutes", "seconds"], ab = (e) => sb.includes(e), cl = (e, t) => t.getHours(e) * 3600 + t.getMinutes(e) * 60 + t.getSeconds(e), ib = (e, t) => (o, r) => e ? t.isAfter(o, r) : cl(o, t) > cl(r, t), Kt = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
}, lb = (e) => Math.max(...e.map((t) => {
  var o;
  return (o = Kt[t.type]) != null ? o : 1;
})), xo = (e, t, o) => {
  if (t === Kt.year)
    return e.startOfYear(o);
  if (t === Kt.month)
    return e.startOfMonth(o);
  if (t === Kt.day)
    return e.startOfDay(o);
  let r = o;
  return t < Kt.minutes && (r = e.setMinutes(r, 0)), t < Kt.seconds && (r = e.setSeconds(r, 0)), t < Kt.milliseconds && (r = e.setMilliseconds(r, 0)), r;
}, cb = ({
  props: e,
  utils: t,
  granularity: o,
  timezone: r,
  getTodayDate: a
}) => {
  var s;
  let i = a ? a() : xo(t, o, yu(t, r));
  e.minDate != null && t.isAfterDay(e.minDate, i) && (i = xo(t, o, e.minDate)), e.maxDate != null && t.isBeforeDay(e.maxDate, i) && (i = xo(t, o, e.maxDate));
  const l = ib((s = e.disableIgnoringDatePartForTimeValidation) != null ? s : !1, t);
  return e.minTime != null && l(e.minTime, i) && (i = xo(t, o, e.disableIgnoringDatePartForTimeValidation ? e.minTime : Mr(t, i, e.minTime))), e.maxTime != null && l(i, e.maxTime) && (i = xo(t, o, e.disableIgnoringDatePartForTimeValidation ? e.maxTime : Mr(t, i, e.maxTime))), i;
}, $a = (e, t) => {
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
}, ub = (e) => {
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
}, ss = (e, t, o) => {
  const r = [], a = e.dateWithTimezone(void 0, t), s = e.startOfWeek(a), i = e.endOfWeek(a);
  let l = s;
  for (; e.isBefore(l, i); )
    r.push(l), l = e.addDays(l, 1);
  return r.map((c) => e.formatByString(c, o));
}, gu = (e, t, o, r) => {
  switch (o) {
    case "month":
      return Da(e, e.dateWithTimezone(void 0, t)).map((a) => e.formatByString(a, r));
    case "weekDay":
      return ss(e, t, r);
    case "meridiem": {
      const a = e.dateWithTimezone(void 0, t);
      return [e.startOfDay(a), e.endOfDay(a)].map((s) => e.formatByString(s, r));
    }
    default:
      return [];
  }
}, bu = (e, t, o) => {
  let r = t;
  for (r = Number(r).toString(); r.length < o; )
    r = `0${r}`;
  return r;
}, vu = (e, t, o, r, a) => {
  if (process.env.NODE_ENV !== "production" && a.type !== "day" && a.contentType === "digit-with-letter")
    throw new Error([`MUI: The token "${a.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join(`
`));
  if (a.type === "day" && a.contentType === "digit-with-letter") {
    const i = e.setDate(r.longestMonth, o);
    return e.formatByString(i, a.format);
  }
  const s = o.toString();
  return a.hasLeadingZerosInInput ? bu(e, s, a.maxLength) : s;
}, db = (e, t, o, r, a, s, i) => {
  const l = ub(r), c = r === "Home", u = r === "End", d = o.value === "" || c || u, p = () => {
    const m = a[o.type]({
      currentDate: s,
      format: o.format,
      contentType: o.contentType
    }), g = (E) => vu(e, t, E, m, o), f = o.type === "minutes" && i != null && i.minutesStep ? i.minutesStep : 1;
    let T = parseInt(o.value, 10) + l * f;
    if (d) {
      if (o.type === "year" && !u && !c)
        return e.formatByString(e.dateWithTimezone(void 0, t), o.format);
      l > 0 || c ? T = m.minimum : T = m.maximum;
    }
    return T % f !== 0 && ((l < 0 || c) && (T += f - (f + T) % f), (l > 0 || u) && (T -= T % f)), T > m.maximum ? g(m.minimum + (T - m.maximum - 1) % (m.maximum - m.minimum + 1)) : T < m.minimum ? g(m.maximum - (m.minimum - T - 1) % (m.maximum - m.minimum + 1)) : g(T);
  }, h = () => {
    const m = gu(e, t, o.type, o.format);
    if (m.length === 0)
      return o.value;
    if (d)
      return l > 0 || c ? m[0] : m[m.length - 1];
    const f = (m.indexOf(o.value) + m.length + l) % m.length;
    return m[f];
  };
  return o.contentType === "digit" || o.contentType === "digit-with-letter" ? p() : h();
}, ka = (e, t) => {
  let o = e.value || e.placeholder;
  const r = t === "non-input" ? e.hasLeadingZerosInFormat : e.hasLeadingZerosInInput;
  return t === "non-input" && e.hasLeadingZerosInInput && !e.hasLeadingZerosInFormat && (o = Number(o).toString()), ["input-rtl", "input-ltr"].includes(t) && e.contentType === "digit" && !r && o.length === 1 && (o = `${o}‎`), t === "input-rtl" && (o = `⁨${o}⁩`), o;
}, zn = (e) => e.replace(/[\u2066\u2067\u2068\u2069]/g, ""), xu = (e, t) => {
  let o = 0, r = t ? 1 : 0;
  const a = [];
  for (let s = 0; s < e.length; s += 1) {
    const i = e[s], l = ka(i, t ? "input-rtl" : "input-ltr"), c = `${i.startSeparator}${l}${i.endSeparator}`, u = zn(c).length, d = c.length, p = zn(l), h = r + l.indexOf(p[0]) + i.startSeparator.length, m = h + p.length;
    a.push(v({}, i, {
      start: o,
      end: o + u,
      startInInput: h,
      endInInput: m
    })), o += u, r += d;
  }
  return a;
}, fb = (e, t, o, r, a) => {
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
}, ul = (e, t, o, r) => {
  if (process.env.NODE_ENV !== "production" && $a(e, o).type === "weekDay")
    throw new Error("changeSectionValueFormat doesn't support week day formats");
  return e.formatByString(e.parse(t, o), r);
}, Cu = (e, t, o) => e.formatByString(e.dateWithTimezone(void 0, t), o).length === 4, wu = (e, t, o, r, a) => {
  if (o !== "digit")
    return !1;
  const s = e.dateWithTimezone(void 0, t);
  switch (r) {
    case "year":
      return Cu(e, t, a) ? e.formatByString(e.setYear(s, 1), a) === "0001" : e.formatByString(e.setYear(s, 2001), a) === "01";
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
}, pb = (e, t) => {
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
}, dl = (e, t, o, r, a, s, i, l) => {
  let c = "";
  const u = [], d = e.date(), p = (x) => {
    if (x === "")
      return null;
    const w = $a(e, x), y = wu(e, t, w.contentType, w.type, x), R = i ? y : w.contentType === "digit", O = a != null && e.isValid(a);
    let L = O ? e.formatByString(a, x) : "", _ = null;
    if (R)
      if (y)
        _ = L === "" ? e.formatByString(d, x).length : L.length;
      else {
        if (w.maxLength == null)
          throw new Error(`MUI: The token ${x} should have a 'maxDigitNumber' property on it's adapter`);
        _ = w.maxLength, O && (L = bu(e, L, _));
      }
    return u.push(v({}, w, {
      format: x,
      maxLength: _,
      value: L,
      placeholder: fb(e, t, o, w, x),
      hasLeadingZeros: y,
      hasLeadingZerosInFormat: y,
      hasLeadingZerosInInput: R,
      startSeparator: u.length === 0 ? c : "",
      endSeparator: "",
      modified: !1
    })), null;
  };
  let h = 10, m = r, g = e.expandFormat(r);
  for (; g !== m; )
    if (m = g, g = e.expandFormat(m), h -= 1, h < 0)
      throw new Error("MUI: The format expansion seems to be  enter in an infinite loop. Please open an issue with the format passed to the picker component");
  const f = g, C = pb(e, f), T = new RegExp(`^(${Object.keys(e.formatTokenMap).sort((x, w) => w.length - x.length).join("|")})`, "g");
  let E = "";
  for (let x = 0; x < f.length; x += 1) {
    const w = C.find((_) => _.start <= x && _.end >= x), y = f[x], R = w != null, O = `${E}${f.slice(x)}`, L = T.test(O);
    !R && y.match(/([A-Za-z]+)/) && L ? (E = O.slice(0, T.lastIndex), x += T.lastIndex - 1) : R && (w == null ? void 0 : w.start) === x || (w == null ? void 0 : w.end) === x || (p(E), E = "", u.length === 0 ? c += y : u[u.length - 1].endSeparator += y);
  }
  return p(E), u.map((x) => {
    const w = (y) => {
      let R = y;
      return l && R !== null && R.includes(" ") && (R = `⁩${R}⁦`), s === "spacious" && ["/", ".", "-"].includes(R) && (R = ` ${R} `), R;
    };
    return x.startSeparator = w(x.startSeparator), x.endSeparator = w(x.endSeparator), x;
  });
}, hb = (e, t) => {
  const o = t.some((l) => l.type === "day"), r = [], a = [];
  for (let l = 0; l < t.length; l += 1) {
    const c = t[l];
    o && c.type === "weekDay" || (r.push(c.format), a.push(ka(c, "non-input")));
  }
  const s = r.join(" "), i = a.join(" ");
  return e.parse(i, s);
}, mb = (e, t) => {
  const r = e.map((a) => {
    const s = ka(a, t ? "input-rtl" : "input-ltr");
    return `${a.startSeparator}${s}${a.endSeparator}`;
  }).join("");
  return t ? `⁦${r}⁩` : r;
}, yb = (e, t) => {
  const o = e.dateWithTimezone(void 0, t), r = e.endOfYear(o), a = e.endOfDay(o), {
    maxDaysInMonth: s,
    longestMonth: i
  } = Da(e, o).reduce((l, c) => {
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
      maximum: Cu(e, t, l) ? 9999 : 99
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
        const u = ss(e, t, l).map(Number);
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
let fl = !1;
const pl = (e, t) => {
  if (process.env.NODE_ENV !== "production" && !fl) {
    const o = [];
    ["date", "date-time"].includes(t) && o.push("weekDay", "day", "month", "year"), ["time", "date-time"].includes(t) && o.push("hours", "minutes", "seconds", "meridiem");
    const r = e.find((a) => !o.includes(a.type));
    r && (console.warn(`MUI: The field component you are using is not compatible with the "${r.type} date section.`, `The supported date sections are ["${o.join('", "')}"]\`.`), fl = !0);
  }
}, gb = (e, t, o, r, a) => {
  switch (o.type) {
    case "year":
      return e.setYear(a, e.getYear(r));
    case "month":
      return e.setMonth(a, e.getMonth(r));
    case "weekDay": {
      const s = ss(e, t, o.format), i = e.formatByString(r, o.format), l = s.indexOf(i), u = s.indexOf(o.value) - l;
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
}, hl = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8
}, ml = (e, t, o, r, a, s) => (
  // cloning sections before sort to avoid mutating it
  [...r].sort((i, l) => hl[i.type] - hl[l.type]).reduce((i, l) => !s || l.modified ? gb(e, t, l, o, i) : i, a)
), bb = () => navigator.userAgent.toLowerCase().indexOf("android") > -1, vb = (e, t) => {
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
}, xb = ["value", "referenceDate"], tn = {
  emptyValue: null,
  getTodayValue: yu,
  getInitialReferenceValue: (e) => {
    let {
      value: t,
      referenceDate: o
    } = e, r = ae(e, xb);
    return t != null && r.utils.isValid(t) ? t : o ?? cb(r);
  },
  cleanValue: tb,
  areValuesEqual: nb,
  isSameError: (e, t) => e === t,
  hasError: (e) => e != null,
  defaultErrorState: null,
  getTimezone: (e, t) => t == null || !e.isValid(t) ? null : e.getTimezone(t),
  setTimezone: (e, t, o) => o == null ? null : e.setTimezone(o, t)
}, Cb = {
  updateReferenceValue: (e, t, o) => t == null || !e.isValid(t) ? o : t,
  getSectionsFromValue: (e, t, o, r, a) => !e.isValid(t) && !!o ? o : xu(a(t), r),
  getValueStrFromSections: mb,
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
}, wb = (e) => ({
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: v({}, e)
      }
    }
  }
}), Tu = {
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
}, Tb = Tu;
wb(Tu);
const Rn = () => {
  const e = b.useContext(Dr);
  if (e === null)
    throw new Error(["MUI: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join(`
`));
  if (e.utils === null)
    throw new Error(["MUI: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join(`
`));
  const t = b.useMemo(() => v({}, Tb, e.localeText), [e.localeText]);
  return b.useMemo(() => v({}, e, {
    localeText: t
  }), [e, t]);
}, Ye = () => Rn().utils, Jo = () => Rn().defaultDates, hn = () => Rn().localeText, as = (e) => {
  const t = Ye(), o = b.useRef();
  return o.current === void 0 && (o.current = t.dateWithTimezone(void 0, e)), o.current;
};
function Eb(e) {
  return xe("MuiTypography", e);
}
be("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Sb = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Pb = (e) => {
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
  return we(l, Eb, i);
}, Ob = oe("span", {
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
}) => v({
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
})), yl = {
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
}, Rb = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Db = (e) => Rb[e] || e, Eu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiTypography"
  }), a = Db(r.color), s = Yc(v({}, r, {
    color: a
  })), {
    align: i = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: p = !1,
    variant: h = "body1",
    variantMapping: m = yl
  } = s, g = ae(s, Sb), f = v({}, s, {
    align: i,
    color: a,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: p,
    variant: h,
    variantMapping: m
  }), C = c || (p ? "p" : m[h] || yl[h]) || "span", T = Pb(f);
  return /* @__PURE__ */ S.jsx(Ob, v({
    as: C,
    ref: o,
    ownerState: f,
    className: ce(T.root, l)
  }, g));
});
process.env.NODE_ENV !== "production" && (Eu.propTypes = {
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
const Dn = Eu;
function Mb(e) {
  return xe("MuiPickersToolbar", e);
}
be("MuiPickersToolbar", ["root", "content"]);
const $b = (e) => {
  const {
    classes: t,
    isLandscape: o
  } = e;
  return we({
    root: ["root"],
    content: ["content"],
    penIconButton: ["penIconButton", o && "penIconButtonLandscape"]
  }, Mb, t);
}, kb = oe("div", {
  name: "MuiPickersToolbar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e,
  ownerState: t
}) => v({
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
})), Ib = oe("div", {
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
}), _b = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = lt({
    props: t,
    name: "MuiPickersToolbar"
  }), {
    children: a,
    className: s,
    toolbarTitle: i,
    hidden: l,
    titleId: c
  } = r, u = r, d = $b(u);
  return l ? null : /* @__PURE__ */ S.jsxs(kb, {
    ref: o,
    className: ce(d.root, s),
    ownerState: u,
    children: [/* @__PURE__ */ S.jsx(Dn, {
      color: "text.secondary",
      variant: "overline",
      id: c,
      children: i
    }), /* @__PURE__ */ S.jsx(Ib, {
      className: d.content,
      ownerState: u,
      children: a
    })]
  });
});
function Nb(e) {
  return xe("MuiDatePickerToolbar", e);
}
be("MuiDatePickerToolbar", ["root", "title"]);
const Ab = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views", "className"], jb = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    title: ["title"]
  }, Nb, t);
}, Fb = oe(_b, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Vb = oe(Dn, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (e, t) => t.title
})(({
  ownerState: e
}) => v({}, e.isLandscape && {
  margin: "auto 16px auto auto"
})), Su = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = lt({
    props: t,
    name: "MuiDatePickerToolbar"
  }), {
    value: a,
    isLandscape: s,
    toolbarFormat: i,
    toolbarPlaceholder: l = "––",
    views: c,
    className: u
  } = r, d = ae(r, Ab), p = Ye(), h = hn(), m = jb(r), g = b.useMemo(() => {
    if (!a)
      return l;
    const C = Ma(p, {
      format: i,
      views: c
    }, !0);
    return p.formatByString(a, C);
  }, [a, i, l, p, c]), f = r;
  return /* @__PURE__ */ S.jsx(Fb, v({
    ref: o,
    toolbarTitle: h.datePickerToolbarTitle,
    isLandscape: s,
    className: ce(m.root, u)
  }, d, {
    children: /* @__PURE__ */ S.jsx(Vb, {
      variant: "h4",
      align: s ? "left" : "center",
      ownerState: f,
      className: m.title,
      children: g
    })
  }));
});
process.env.NODE_ENV !== "production" && (Su.propTypes = {
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
const Pu = (e) => {
  if (e !== void 0)
    return Object.keys(e).reduce((t, o) => v({}, t, {
      [`${o.slice(0, 1).toLowerCase()}${o.slice(1)}`]: e[o]
    }), {});
};
function Ou(e, t) {
  var o, r, a, s;
  const i = Ye(), l = Jo(), c = lt({
    props: e,
    name: t
  }), u = b.useMemo(() => {
    var p;
    return ((p = c.localeText) == null ? void 0 : p.toolbarTitle) == null ? c.localeText : v({}, c.localeText, {
      datePickerToolbarTitle: c.localeText.toolbarTitle
    });
  }, [c.localeText]), d = (o = c.slots) != null ? o : Pu(c.components);
  return v({}, c, {
    localeText: u
  }, eb({
    views: c.views,
    openTo: c.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    disableFuture: (r = c.disableFuture) != null ? r : !1,
    disablePast: (a = c.disablePast) != null ? a : !1,
    minDate: Nt(i, c.minDate, l.minDate),
    maxDate: Nt(i, c.maxDate, l.maxDate),
    slots: v({
      toolbar: Su
    }, d),
    slotProps: (s = c.slotProps) != null ? s : c.componentsProps
  });
}
function na(e, t) {
  return na = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, na(e, t);
}
function Ia(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, na(e, t);
}
function Lb(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Bb(e, t) {
  e.classList ? e.classList.add(t) : Lb(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function gl(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function Wb(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = gl(e.className, t) : e.setAttribute("class", gl(e.className && e.className.baseVal || "", t));
}
const bl = {
  disabled: !1
};
var zb = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null, Ub = process.env.NODE_ENV !== "production" ? n.oneOfType([n.string, n.shape({
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
const $r = ht.createContext(null);
var Ru = function(t) {
  return t.scrollTop;
}, Po = "unmounted", xn = "exited", Cn = "entering", Bn = "entered", oa = "exiting", rn = /* @__PURE__ */ function(e) {
  Ia(t, e);
  function t(r, a) {
    var s;
    s = e.call(this, r, a) || this;
    var i = a, l = i && !i.isMounting ? r.enter : r.appear, c;
    return s.appearStatus = null, r.in ? l ? (c = xn, s.appearStatus = Cn) : c = Bn : r.unmountOnExit || r.mountOnEnter ? c = Po : c = xn, s.state = {
      status: c
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(a, s) {
    var i = a.in;
    return i && s.status === Po ? {
      status: xn
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(a) {
    var s = null;
    if (a !== this.props) {
      var i = this.state.status;
      this.props.in ? i !== Cn && i !== Bn && (s = Cn) : (i === Cn || i === Bn) && (s = oa);
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
      if (this.cancelNextCallback(), s === Cn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : rr.findDOMNode(this);
          i && Ru(i);
        }
        this.performEnter(a);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === xn && this.setState({
        status: Po
      });
  }, o.performEnter = function(a) {
    var s = this, i = this.props.enter, l = this.context ? this.context.isMounting : a, c = this.props.nodeRef ? [l] : [rr.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), h = l ? p.appear : p.enter;
    if (!a && !i || bl.disabled) {
      this.safeSetState({
        status: Bn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Cn
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(h, function() {
        s.safeSetState({
          status: Bn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var a = this, s = this.props.exit, i = this.getTimeouts(), l = this.props.nodeRef ? void 0 : rr.findDOMNode(this);
    if (!s || bl.disabled) {
      this.safeSetState({
        status: xn
      }, function() {
        a.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: oa
    }, function() {
      a.props.onExiting(l), a.onTransitionEnd(i.exit, function() {
        a.safeSetState({
          status: xn
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
    var i = this.props.nodeRef ? this.props.nodeRef.current : rr.findDOMNode(this), l = a == null && !this.props.addEndListener;
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
    if (a === Po)
      return null;
    var s = this.props, i = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var l = ae(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ht.createElement($r.Provider, {
        value: null
      }, typeof i == "function" ? i(a, l) : ht.cloneElement(ht.Children.only(i), l))
    );
  }, t;
}(ht.Component);
rn.contextType = $r;
rn.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var o = zb;
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
function Vn() {
}
rn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Vn,
  onEntering: Vn,
  onEntered: Vn,
  onExit: Vn,
  onExiting: Vn,
  onExited: Vn
};
rn.UNMOUNTED = Po;
rn.EXITED = xn;
rn.ENTERING = Cn;
rn.ENTERED = Bn;
rn.EXITING = oa;
const is = rn;
var Yb = function(t, o) {
  return t && o && o.split(" ").forEach(function(r) {
    return Bb(t, r);
  });
}, js = function(t, o) {
  return t && o && o.split(" ").forEach(function(r) {
    return Wb(t, r);
  });
}, _a = /* @__PURE__ */ function(e) {
  Ia(t, e);
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
    s === "appear" && i === "done" && u && (l += " " + u), i === "active" && a && Ru(a), l && (this.appliedClasses[s][i] = l, Yb(a, l));
  }, o.removeClasses = function(a, s) {
    var i = this.appliedClasses[s], l = i.base, c = i.active, u = i.done;
    this.appliedClasses[s] = {}, l && js(a, l), c && js(a, c), u && js(a, u);
  }, o.render = function() {
    var a = this.props;
    a.classNames;
    var s = ae(a, ["classNames"]);
    return /* @__PURE__ */ ht.createElement(is, v({}, s, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(ht.Component);
_a.defaultProps = {
  classNames: ""
};
_a.propTypes = process.env.NODE_ENV !== "production" ? v({}, is.propTypes, {
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
  classNames: Ub,
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
const Hb = _a;
function qb(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Na(e, t) {
  var o = function(s) {
    return t && hr(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && Tf.map(e, function(a) {
    return a;
  }).forEach(function(a) {
    r[a.key] = o(a);
  }), r;
}
function Kb(e, t) {
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
function wn(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function Gb(e, t) {
  return Na(e.children, function(o) {
    return mr(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: wn(o, "appear", e),
      enter: wn(o, "enter", e),
      exit: wn(o, "exit", e)
    });
  });
}
function Xb(e, t, o) {
  var r = Na(e.children), a = Kb(t, r);
  return Object.keys(a).forEach(function(s) {
    var i = a[s];
    if (hr(i)) {
      var l = s in t, c = s in r, u = t[s], d = hr(u) && !u.props.in;
      c && (!l || d) ? a[s] = mr(i, {
        onExited: o.bind(null, i),
        in: !0,
        exit: wn(i, "exit", e),
        enter: wn(i, "enter", e)
      }) : !c && l && !d ? a[s] = mr(i, {
        in: !1
      }) : c && l && hr(u) && (a[s] = mr(i, {
        onExited: o.bind(null, i),
        in: u.props.in,
        exit: wn(i, "exit", e),
        enter: wn(i, "enter", e)
      }));
    }
  }), a;
}
var Zb = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Qb = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Aa = /* @__PURE__ */ function(e) {
  Ia(t, e);
  function t(r, a) {
    var s;
    s = e.call(this, r, a) || this;
    var i = s.handleExited.bind(qb(s));
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
      children: c ? Gb(a, l) : Xb(a, i, l),
      firstRender: !1
    };
  }, o.handleExited = function(a, s) {
    var i = Na(this.props.children);
    a.key in i || (a.props.onExited && a.props.onExited(s), this.mounted && this.setState(function(l) {
      var c = v({}, l.children);
      return delete c[a.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var a = this.props, s = a.component, i = a.childFactory, l = ae(a, ["component", "childFactory"]), c = this.state.contextValue, u = Zb(this.state.children).map(i);
    return delete l.appear, delete l.enter, delete l.exit, s === null ? /* @__PURE__ */ ht.createElement($r.Provider, {
      value: c
    }, u) : /* @__PURE__ */ ht.createElement($r.Provider, {
      value: c
    }, /* @__PURE__ */ ht.createElement(s, l, u));
  }, t;
}(ht.Component);
Aa.propTypes = process.env.NODE_ENV !== "production" ? {
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
Aa.defaultProps = Qb;
const ja = Aa;
function Du(e) {
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
  }, g = ce(o.child, d && o.childLeaving, r && o.childPulsate);
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
      className: g
    })
  });
}
process.env.NODE_ENV !== "production" && (Du.propTypes = {
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
const Jb = be("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), $t = Jb, ev = ["center", "classes", "className"];
let ls = (e) => e, vl, xl, Cl, wl;
const ra = 550, tv = 80, nv = qr(vl || (vl = ls`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), ov = qr(xl || (xl = ls`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), rv = qr(Cl || (Cl = ls`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), sv = oe("span", {
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
}), av = oe(Du, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(wl || (wl = ls`
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
`), $t.rippleVisible, nv, ra, ({
  theme: e
}) => e.transitions.easing.easeInOut, $t.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, $t.child, $t.childLeaving, ov, ra, ({
  theme: e
}) => e.transitions.easing.easeInOut, $t.childPulsate, rv, ({
  theme: e
}) => e.transitions.easing.easeInOut), Mu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: a = !1,
    classes: s = {},
    className: i
  } = r, l = ae(r, ev), [c, u] = b.useState([]), d = b.useRef(0), p = b.useRef(null);
  b.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const h = b.useRef(!1), m = lc(), g = b.useRef(null), f = b.useRef(null), C = b.useCallback((w) => {
    const {
      pulsate: y,
      rippleX: R,
      rippleY: O,
      rippleSize: L,
      cb: _
    } = w;
    u((V) => [...V, /* @__PURE__ */ S.jsx(av, {
      classes: {
        ripple: ce(s.ripple, $t.ripple),
        rippleVisible: ce(s.rippleVisible, $t.rippleVisible),
        ripplePulsate: ce(s.ripplePulsate, $t.ripplePulsate),
        child: ce(s.child, $t.child),
        childLeaving: ce(s.childLeaving, $t.childLeaving),
        childPulsate: ce(s.childPulsate, $t.childPulsate)
      },
      timeout: ra,
      pulsate: y,
      rippleX: R,
      rippleY: O,
      rippleSize: L
    }, d.current)]), d.current += 1, p.current = _;
  }, [s]), T = b.useCallback((w = {}, y = {}, R = () => {
  }) => {
    const {
      pulsate: O = !1,
      center: L = a || y.pulsate,
      fakeElement: _ = !1
      // For test purposes
    } = y;
    if ((w == null ? void 0 : w.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (w == null ? void 0 : w.type) === "touchstart" && (h.current = !0);
    const V = _ ? null : f.current, N = V ? V.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let B, F, D;
    if (L || w === void 0 || w.clientX === 0 && w.clientY === 0 || !w.clientX && !w.touches)
      B = Math.round(N.width / 2), F = Math.round(N.height / 2);
    else {
      const {
        clientX: P,
        clientY: $
      } = w.touches && w.touches.length > 0 ? w.touches[0] : w;
      B = Math.round(P - N.left), F = Math.round($ - N.top);
    }
    if (L)
      D = Math.sqrt((2 * N.width ** 2 + N.height ** 2) / 3), D % 2 === 0 && (D += 1);
    else {
      const P = Math.max(Math.abs((V ? V.clientWidth : 0) - B), B) * 2 + 2, $ = Math.max(Math.abs((V ? V.clientHeight : 0) - F), F) * 2 + 2;
      D = Math.sqrt(P ** 2 + $ ** 2);
    }
    w != null && w.touches ? g.current === null && (g.current = () => {
      C({
        pulsate: O,
        rippleX: B,
        rippleY: F,
        rippleSize: D,
        cb: R
      });
    }, m.start(tv, () => {
      g.current && (g.current(), g.current = null);
    })) : C({
      pulsate: O,
      rippleX: B,
      rippleY: F,
      rippleSize: D,
      cb: R
    });
  }, [a, C, m]), E = b.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), x = b.useCallback((w, y) => {
    if (m.clear(), (w == null ? void 0 : w.type) === "touchend" && g.current) {
      g.current(), g.current = null, m.start(0, () => {
        x(w, y);
      });
      return;
    }
    g.current = null, u((R) => R.length > 0 ? R.slice(1) : R), p.current = y;
  }, [m]);
  return b.useImperativeHandle(o, () => ({
    pulsate: E,
    start: T,
    stop: x
  }), [E, T, x]), /* @__PURE__ */ S.jsx(sv, v({
    className: ce($t.root, s.root, i),
    ref: f
  }, l, {
    children: /* @__PURE__ */ S.jsx(ja, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Mu.propTypes = {
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
const iv = Mu;
function lv(e) {
  return xe("MuiButtonBase", e);
}
const cv = be("MuiButtonBase", ["root", "disabled", "focusVisible"]), uv = cv, dv = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], fv = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: a
  } = e, i = we({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, lv, a);
  return o && r && (i.root += ` ${r}`), i;
}, pv = oe("button", {
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
  [`&.${uv.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), $u = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
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
    onBlur: g,
    onClick: f,
    onContextMenu: C,
    onDragLeave: T,
    onFocus: E,
    onFocusVisible: x,
    onKeyDown: w,
    onKeyUp: y,
    onMouseDown: R,
    onMouseLeave: O,
    onMouseUp: L,
    onTouchEnd: _,
    onTouchMove: V,
    onTouchStart: N,
    tabIndex: B = 0,
    TouchRippleProps: F,
    touchRippleRef: D,
    type: P
  } = r, $ = ae(r, dv), j = b.useRef(null), M = b.useRef(null), W = Ue(M, D), {
    isFocusVisibleRef: k,
    onFocus: U,
    onBlur: G,
    ref: X
  } = cc(), [z, q] = b.useState(!1);
  u && z && q(!1), b.useImperativeHandle(a, () => ({
    focusVisible: () => {
      q(!0), j.current.focus();
    }
  }), []);
  const [Q, Y] = b.useState(!1);
  b.useEffect(() => {
    Y(!0);
  }, []);
  const Z = Q && !d && !u;
  b.useEffect(() => {
    z && h && !d && Q && M.current.pulsate();
  }, [d, h, z, Q]);
  function ee(me, Ge, wt = p) {
    return pe((gt) => (Ge && Ge(gt), !wt && M.current && M.current[me](gt), !0));
  }
  const J = ee("start", R), K = ee("stop", C), A = ee("stop", T), H = ee("stop", L), re = ee("stop", (me) => {
    z && me.preventDefault(), O && O(me);
  }), de = ee("start", N), ge = ee("stop", _), $e = ee("stop", V), ue = ee("stop", (me) => {
    G(me), k.current === !1 && q(!1), g && g(me);
  }, !1), fe = pe((me) => {
    j.current || (j.current = me.currentTarget), U(me), k.current === !0 && (q(!0), x && x(me)), E && E(me);
  }), te = () => {
    const me = j.current;
    return c && c !== "button" && !(me.tagName === "A" && me.href);
  }, se = b.useRef(!1), he = pe((me) => {
    h && !se.current && z && M.current && me.key === " " && (se.current = !0, M.current.stop(me, () => {
      M.current.start(me);
    })), me.target === me.currentTarget && te() && me.key === " " && me.preventDefault(), w && w(me), me.target === me.currentTarget && te() && me.key === "Enter" && !u && (me.preventDefault(), f && f(me));
  }), Te = pe((me) => {
    h && me.key === " " && M.current && z && !me.defaultPrevented && (se.current = !1, M.current.stop(me, () => {
      M.current.pulsate(me);
    })), y && y(me), f && me.target === me.currentTarget && te() && me.key === " " && !me.defaultPrevented && f(me);
  });
  let ve = c;
  ve === "button" && ($.href || $.to) && (ve = m);
  const Oe = {};
  ve === "button" ? (Oe.type = P === void 0 ? "button" : P, Oe.disabled = u) : (!$.href && !$.to && (Oe.role = "button"), u && (Oe["aria-disabled"] = u));
  const qe = Ue(o, X, j);
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    Z && !M.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [Z]);
  const De = v({}, r, {
    centerRipple: s,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: h,
    tabIndex: B,
    focusVisible: z
  }), Ee = fv(De);
  return /* @__PURE__ */ S.jsxs(pv, v({
    as: ve,
    className: ce(Ee.root, l),
    ownerState: De,
    onBlur: ue,
    onClick: f,
    onContextMenu: K,
    onFocus: fe,
    onKeyDown: he,
    onKeyUp: Te,
    onMouseDown: J,
    onMouseLeave: re,
    onMouseUp: H,
    onDragLeave: A,
    onTouchEnd: ge,
    onTouchMove: $e,
    onTouchStart: de,
    ref: qe,
    tabIndex: u ? -1 : B,
    type: P
  }, Oe, $, {
    children: [i, Z ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ S.jsx(iv, v({
        ref: W,
        center: s
      }, F))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && ($u.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: yt,
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
  component: Lr,
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
const Jn = $u;
function hv(e) {
  return xe("MuiIconButton", e);
}
const mv = be("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), yv = mv, gv = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], bv = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: a,
    size: s
  } = e, i = {
    root: ["root", o && "disabled", r !== "default" && `color${ie(r)}`, a && `edge${ie(a)}`, `size${ie(s)}`]
  };
  return we(i, hv, t);
}, vv = oe(Jn, {
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
}) => v({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.action.active, e.palette.action.hoverOpacity),
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
  return v({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && v({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": v({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(r.main, e.palette.action.hoverOpacity)
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
    [`&.${yv.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), ku = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
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
  } = r, p = ae(r, gv), h = v({}, r, {
    edge: a,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), m = bv(h);
  return /* @__PURE__ */ S.jsx(vv, v({
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
process.env.NODE_ENV !== "production" && (ku.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: fn(n.node, (e) => b.Children.toArray(e.children).some((o) => /* @__PURE__ */ b.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
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
const cs = ku, xv = Wt(/* @__PURE__ */ S.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Cv = Wt(/* @__PURE__ */ S.jsx("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft"), wv = Wt(/* @__PURE__ */ S.jsx("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight"), Tv = Wt(/* @__PURE__ */ S.jsx("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
Wt(/* @__PURE__ */ S.jsxs(b.Fragment, {
  children: [/* @__PURE__ */ S.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ S.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
Wt(/* @__PURE__ */ S.jsx("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
Wt(/* @__PURE__ */ S.jsxs(b.Fragment, {
  children: [/* @__PURE__ */ S.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ S.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
const Ev = Wt(/* @__PURE__ */ S.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");
function Sv(e) {
  return xe("MuiPickersArrowSwitcher", e);
}
be("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);
const Pv = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"], Ov = ["ownerState"], Rv = ["ownerState"], Dv = oe("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex"
}), Mv = oe("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})(({
  theme: e
}) => ({
  width: e.spacing(3)
})), Tl = oe(cs, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (e, t) => t.button
})(({
  ownerState: e
}) => v({}, e.hidden && {
  visibility: "hidden"
})), $v = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"]
  }, Sv, t);
}, kv = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i;
  const c = Vt().direction === "rtl", u = lt({
    props: t,
    name: "MuiPickersArrowSwitcher"
  }), {
    children: d,
    className: p,
    slots: h,
    slotProps: m,
    isNextDisabled: g,
    isNextHidden: f,
    onGoToNext: C,
    nextLabel: T,
    isPreviousDisabled: E,
    isPreviousHidden: x,
    onGoToPrevious: w,
    previousLabel: y
  } = u, R = ae(u, Pv), O = u, L = $v(O), _ = {
    isDisabled: g,
    isHidden: f,
    goTo: C,
    label: T
  }, V = {
    isDisabled: E,
    isHidden: x,
    goTo: w,
    label: y
  }, N = (r = h == null ? void 0 : h.previousIconButton) != null ? r : Tl, B = st({
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
    ownerState: v({}, O, {
      hidden: V.isHidden
    }),
    className: L.button
  }), F = (a = h == null ? void 0 : h.nextIconButton) != null ? a : Tl, D = st({
    elementType: F,
    externalSlotProps: m == null ? void 0 : m.nextIconButton,
    additionalProps: {
      size: "medium",
      title: _.label,
      "aria-label": _.label,
      disabled: _.isDisabled,
      edge: "start",
      onClick: _.goTo
    },
    ownerState: v({}, O, {
      hidden: _.isHidden
    }),
    className: L.button
  }), P = (s = h == null ? void 0 : h.leftArrowIcon) != null ? s : Cv, $ = st({
    elementType: P,
    externalSlotProps: m == null ? void 0 : m.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), j = ae($, Ov), M = (i = h == null ? void 0 : h.rightArrowIcon) != null ? i : wv, W = st({
    elementType: M,
    externalSlotProps: m == null ? void 0 : m.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), k = ae(W, Rv);
  return /* @__PURE__ */ S.jsxs(Dv, v({
    ref: o,
    className: ce(L.root, p),
    ownerState: O
  }, R, {
    children: [/* @__PURE__ */ S.jsx(N, v({}, B, {
      children: c ? /* @__PURE__ */ S.jsx(M, v({}, k)) : /* @__PURE__ */ S.jsx(P, v({}, j))
    })), d ? /* @__PURE__ */ S.jsx(Dn, {
      variant: "subtitle1",
      component: "span",
      children: d
    }) : /* @__PURE__ */ S.jsx(Mv, {
      className: L.spacer,
      ownerState: O
    }), /* @__PURE__ */ S.jsx(F, v({}, D, {
      children: c ? /* @__PURE__ */ S.jsx(P, v({}, j)) : /* @__PURE__ */ S.jsx(M, v({}, k))
    }))]
  }));
});
function Iv(e) {
  return xe("MuiDialogContent", e);
}
be("MuiDialogContent", ["root", "dividers"]);
const _v = be("MuiDialogTitle", ["root"]), Nv = _v, Av = ["className", "dividers"], jv = (e) => {
  const {
    classes: t,
    dividers: o
  } = e;
  return we({
    root: ["root", o && "dividers"]
  }, Iv, t);
}, Fv = oe("div", {
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
}) => v({
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
  [`.${Nv.root} + &`]: {
    paddingTop: 0
  }
})), Iu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: a,
    dividers: s = !1
  } = r, i = ae(r, Av), l = v({}, r, {
    dividers: s
  }), c = jv(l);
  return /* @__PURE__ */ S.jsx(Fv, v({
    className: ce(c.root, a),
    ownerState: l,
    ref: o
  }, i));
});
process.env.NODE_ENV !== "production" && (Iu.propTypes = {
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
const Vv = Iu, _u = (e) => e.scrollTop;
function kr(e, t) {
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
const Lv = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Bv = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Nu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Vt(), a = {
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
    onExited: g,
    onExiting: f,
    style: C,
    timeout: T = a,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: E = is
  } = t, x = ae(t, Lv), w = b.useRef(null), y = Ue(w, Ho(l), o), R = (D) => (P) => {
    if (D) {
      const $ = w.current;
      P === void 0 ? D($) : D($, P);
    }
  }, O = R(h), L = R((D, P) => {
    _u(D);
    const $ = kr({
      style: C,
      timeout: T,
      easing: c
    }, {
      mode: "enter"
    });
    D.style.webkitTransition = r.transitions.create("opacity", $), D.style.transition = r.transitions.create("opacity", $), d && d(D, P);
  }), _ = R(p), V = R(f), N = R((D) => {
    const P = kr({
      style: C,
      timeout: T,
      easing: c
    }, {
      mode: "exit"
    });
    D.style.webkitTransition = r.transitions.create("opacity", P), D.style.transition = r.transitions.create("opacity", P), m && m(D);
  }), B = R(g), F = (D) => {
    s && s(w.current, D);
  };
  return /* @__PURE__ */ S.jsx(E, v({
    appear: i,
    in: u,
    nodeRef: w,
    onEnter: L,
    onEntered: _,
    onEntering: O,
    onExit: N,
    onExited: B,
    onExiting: V,
    addEndListener: F,
    timeout: T
  }, x, {
    children: (D, P) => /* @__PURE__ */ b.cloneElement(l, v({
      style: v({
        opacity: 0,
        visibility: D === "exited" && !u ? "hidden" : void 0
      }, Bv[D], C, l.props.style),
      ref: y
    }, P))
  }));
});
process.env.NODE_ENV !== "production" && (Nu.propTypes = {
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
  children: Vr.isRequired,
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
const fo = Nu;
function Wv(e) {
  const t = it(e);
  return t.body === e ? un(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Do(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function El(e) {
  return parseInt(un(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function zv(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function Sl(e, t, o, r, a) {
  const s = [t, o, ...r];
  [].forEach.call(e.children, (i) => {
    const l = s.indexOf(i) === -1, c = !zv(i);
    l && c && Do(i, a);
  });
}
function Fs(e, t) {
  let o = -1;
  return e.some((r, a) => t(r) ? (o = a, !0) : !1), o;
}
function Uv(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Wv(r)) {
      const i = uc(it(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${El(r) + i}px`;
      const l = it(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${El(c) + i}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = it(r).body;
    else {
      const i = r.parentElement, l = un(r);
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
function Yv(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class Hv {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Do(t.modalRef, !1);
    const a = Yv(o);
    Sl(o, t.mount, t.modalRef, a, !0);
    const s = Fs(this.containers, (i) => i.container === o);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: a
    }), r);
  }
  mount(t, o) {
    const r = Fs(this.containers, (s) => s.modals.indexOf(t) !== -1), a = this.containers[r];
    a.restore || (a.restore = Uv(a, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const a = Fs(this.containers, (i) => i.modals.indexOf(t) !== -1), s = this.containers[a];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Do(t.modalRef, o), Sl(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(a, 1);
    else {
      const i = s.modals[s.modals.length - 1];
      i.modalRef && Do(i.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const qv = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Kv(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function Gv(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function Xv(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || Gv(e));
}
function Zv(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(qv)).forEach((r, a) => {
    const s = Kv(r);
    s === -1 || !Xv(r) || (s === 0 ? t.push(r) : o.push({
      documentOrder: a,
      tabIndex: s,
      node: r
    }));
  }), o.sort((r, a) => r.tabIndex === a.tabIndex ? r.documentOrder - a.documentOrder : r.tabIndex - a.tabIndex).map((r) => r.node).concat(t);
}
function Qv() {
  return !0;
}
function Bo(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: a = !1,
    getTabbable: s = Zv,
    isEnabled: i = Qv,
    open: l
  } = e, c = b.useRef(!1), u = b.useRef(null), d = b.useRef(null), p = b.useRef(null), h = b.useRef(null), m = b.useRef(!1), g = b.useRef(null), f = Ue(Ho(t), g), C = b.useRef(null);
  b.useEffect(() => {
    !l || !g.current || (m.current = !o);
  }, [o, l]), b.useEffect(() => {
    if (!l || !g.current)
      return;
    const x = it(g.current);
    return g.current.contains(x.activeElement) || (g.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), g.current.setAttribute("tabIndex", "-1")), m.current && g.current.focus()), () => {
      a || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), b.useEffect(() => {
    if (!l || !g.current)
      return;
    const x = it(g.current), w = (O) => {
      C.current = O, !(r || !i() || O.key !== "Tab") && x.activeElement === g.current && O.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, y = () => {
      const O = g.current;
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
      let L = [];
      if ((x.activeElement === u.current || x.activeElement === d.current) && (L = s(g.current)), L.length > 0) {
        var _, V;
        const N = !!((_ = C.current) != null && _.shiftKey && ((V = C.current) == null ? void 0 : V.key) === "Tab"), B = L[0], F = L[L.length - 1];
        typeof B != "string" && typeof F != "string" && (N ? F.focus() : B.focus());
      } else
        O.focus();
    };
    x.addEventListener("focusin", y), x.addEventListener("keydown", w, !0);
    const R = setInterval(() => {
      x.activeElement && x.activeElement.tagName === "BODY" && y();
    }, 50);
    return () => {
      clearInterval(R), x.removeEventListener("focusin", y), x.removeEventListener("keydown", w, !0);
    };
  }, [o, r, a, i, l, s]);
  const T = (x) => {
    p.current === null && (p.current = x.relatedTarget), m.current = !0, h.current = x.target;
    const w = t.props.onFocus;
    w && w(x);
  }, E = (x) => {
    p.current === null && (p.current = x.relatedTarget), m.current = !0;
  };
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: E,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(t, {
      ref: f,
      onFocus: T
    }), /* @__PURE__ */ S.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: E,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Bo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Vr,
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
process.env.NODE_ENV !== "production" && (Bo["propTypes"] = rc(Bo.propTypes));
function Jv(e) {
  return typeof e == "function" ? e() : e;
}
const Ir = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const {
    children: r,
    container: a,
    disablePortal: s = !1
  } = t, [i, l] = b.useState(null), c = Ue(/* @__PURE__ */ b.isValidElement(r) ? Ho(r) : null, o);
  if (ct(() => {
    s || l(Jv(a) || document.body);
  }, [a, s]), ct(() => {
    if (i && !s)
      return Sr(o, i), () => {
        Sr(o, null);
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
    children: i && /* @__PURE__ */ If.createPortal(r, i)
  });
});
process.env.NODE_ENV !== "production" && (Ir.propTypes = {
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
  container: n.oneOfType([Jt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (Ir["propTypes"] = rc(Ir.propTypes));
const Au = Ir;
function ex(e) {
  return xe("MuiBackdrop", e);
}
be("MuiBackdrop", ["root", "invisible"]);
const tx = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], nx = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return we({
    root: ["root", o && "invisible"]
  }, ex, t);
}, ox = oe("div", {
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
}) => v({
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
})), ju = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s;
  const i = Ve({
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
    slotProps: g = {},
    slots: f = {},
    TransitionComponent: C = fo,
    transitionDuration: T
  } = i, E = ae(i, tx), x = v({}, i, {
    component: u,
    invisible: h
  }), w = nx(x), y = (r = g.root) != null ? r : p.root;
  return /* @__PURE__ */ S.jsx(C, v({
    in: m,
    timeout: T
  }, E, {
    children: /* @__PURE__ */ S.jsx(ox, v({
      "aria-hidden": !0
    }, y, {
      as: (a = (s = f.root) != null ? s : d.Root) != null ? a : u,
      className: ce(w.root, c, y == null ? void 0 : y.className),
      ownerState: v({}, x, y == null ? void 0 : y.ownerState),
      classes: w,
      ref: o,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ju.propTypes = {
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
const Fu = ju;
function rx(e) {
  return typeof e == "function" ? e() : e;
}
function sx(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ax = new Hv();
function ix(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: a = ax,
    closeAfterTransition: s = !1,
    onTransitionEnter: i,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: p
  } = e, h = b.useRef({}), m = b.useRef(null), g = b.useRef(null), f = Ue(g, p), [C, T] = b.useState(!d), E = sx(c);
  let x = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (x = !1);
  const w = () => it(m.current), y = () => (h.current.modalRef = g.current, h.current.mount = m.current, h.current), R = () => {
    a.mount(y(), {
      disableScrollLock: r
    }), g.current && (g.current.scrollTop = 0);
  }, O = pe(() => {
    const $ = rx(t) || w().body;
    a.add(y(), $), g.current && R();
  }), L = b.useCallback(() => a.isTopModal(y()), [a]), _ = pe(($) => {
    m.current = $, $ && (d && L() ? R() : g.current && Do(g.current, x));
  }), V = b.useCallback(() => {
    a.remove(y(), x);
  }, [x, a]);
  b.useEffect(() => () => {
    V();
  }, [V]), b.useEffect(() => {
    d ? O() : (!E || !s) && V();
  }, [d, V, E, s, O]);
  const N = ($) => (j) => {
    var M;
    (M = $.onKeyDown) == null || M.call($, j), !(j.key !== "Escape" || j.which === 229 || // Wait until IME is settled.
    !L()) && (o || (j.stopPropagation(), u && u(j, "escapeKeyDown")));
  }, B = ($) => (j) => {
    var M;
    (M = $.onClick) == null || M.call($, j), j.target === j.currentTarget && u && u(j, "backdropClick");
  };
  return {
    getRootProps: ($ = {}) => {
      const j = gc(e);
      delete j.onTransitionEnter, delete j.onTransitionExited;
      const M = v({}, j, $);
      return v({
        role: "presentation"
      }, M, {
        onKeyDown: N(M),
        ref: f
      });
    },
    getBackdropProps: ($ = {}) => {
      const j = $;
      return v({
        "aria-hidden": !0
      }, j, {
        onClick: B(j),
        open: d
      });
    },
    getTransitionProps: () => {
      const $ = () => {
        T(!1), i && i();
      }, j = () => {
        T(!0), l && l(), s && V();
      };
      return {
        onEnter: qs($, c == null ? void 0 : c.props.onEnter),
        onExited: qs(j, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: f,
    portalRef: _,
    isTopModal: L,
    exited: C,
    hasTransition: E
  };
}
function lx(e) {
  return xe("MuiModal", e);
}
be("MuiModal", ["root", "hidden", "backdrop"]);
const cx = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], ux = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return we({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, lx, r);
}, dx = oe("div", {
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
}) => v({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), fx = oe(Fu, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Vu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i, l, c;
  const u = Ve({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = fx,
    BackdropProps: p,
    className: h,
    closeAfterTransition: m = !1,
    children: g,
    container: f,
    component: C,
    components: T = {},
    componentsProps: E = {},
    disableAutoFocus: x = !1,
    disableEnforceFocus: w = !1,
    disableEscapeKeyDown: y = !1,
    disablePortal: R = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: L = !1,
    hideBackdrop: _ = !1,
    keepMounted: V = !1,
    onBackdropClick: N,
    open: B,
    slotProps: F,
    slots: D
    // eslint-disable-next-line react/prop-types
  } = u, P = ae(u, cx), $ = v({}, u, {
    closeAfterTransition: m,
    disableAutoFocus: x,
    disableEnforceFocus: w,
    disableEscapeKeyDown: y,
    disablePortal: R,
    disableRestoreFocus: O,
    disableScrollLock: L,
    hideBackdrop: _,
    keepMounted: V
  }), {
    getRootProps: j,
    getBackdropProps: M,
    getTransitionProps: W,
    portalRef: k,
    isTopModal: U,
    exited: G,
    hasTransition: X
  } = ix(v({}, $, {
    rootRef: o
  })), z = v({}, $, {
    exited: G
  }), q = ux(z), Q = {};
  if (g.props.tabIndex === void 0 && (Q.tabIndex = "-1"), X) {
    const {
      onEnter: H,
      onExited: re
    } = W();
    Q.onEnter = H, Q.onExited = re;
  }
  const Y = (r = (a = D == null ? void 0 : D.root) != null ? a : T.Root) != null ? r : dx, Z = (s = (i = D == null ? void 0 : D.backdrop) != null ? i : T.Backdrop) != null ? s : d, ee = (l = F == null ? void 0 : F.root) != null ? l : E.root, J = (c = F == null ? void 0 : F.backdrop) != null ? c : E.backdrop, K = En({
    elementType: Y,
    externalSlotProps: ee,
    externalForwardedProps: P,
    getSlotProps: j,
    additionalProps: {
      ref: o,
      as: C
    },
    ownerState: z,
    className: ce(h, ee == null ? void 0 : ee.className, q == null ? void 0 : q.root, !z.open && z.exited && (q == null ? void 0 : q.hidden))
  }), A = En({
    elementType: Z,
    externalSlotProps: J,
    additionalProps: p,
    getSlotProps: (H) => M(v({}, H, {
      onClick: (re) => {
        N && N(re), H != null && H.onClick && H.onClick(re);
      }
    })),
    className: ce(J == null ? void 0 : J.className, p == null ? void 0 : p.className, q == null ? void 0 : q.backdrop),
    ownerState: z
  });
  return !V && !B && (!X || G) ? null : /* @__PURE__ */ S.jsx(Au, {
    ref: k,
    container: f,
    disablePortal: R,
    children: /* @__PURE__ */ S.jsxs(Y, v({}, K, {
      children: [!_ && d ? /* @__PURE__ */ S.jsx(Z, v({}, A)) : null, /* @__PURE__ */ S.jsx(Bo, {
        disableEnforceFocus: w,
        disableAutoFocus: x,
        disableRestoreFocus: O,
        isEnabled: U,
        open: B,
        children: /* @__PURE__ */ b.cloneElement(g, Q)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Vu.propTypes = {
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
  children: Vr.isRequired,
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
  container: n.oneOfType([Jt, n.func]),
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
const Lu = Vu;
function px(e) {
  return xe("MuiPaper", e);
}
be("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const hx = ["className", "component", "elevation", "square", "variant"], mx = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: a
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return we(s, px, a);
}, yx = oe("div", {
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
  return v({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && v({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Qe("#fff", sl(t.elevation))}, ${Qe("#fff", sl(t.elevation))})`
  }, e.vars && {
    backgroundImage: (o = e.vars.overlays) == null ? void 0 : o[t.elevation]
  }));
}), Bu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiPaper"
  }), {
    className: a,
    component: s = "div",
    elevation: i = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ae(r, hx), d = v({}, r, {
    component: s,
    elevation: i,
    square: l,
    variant: c
  }), p = mx(d);
  return process.env.NODE_ENV !== "production" && Vt().shadows[i] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${i}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${i}]\` is defined.`].join(`
`)), /* @__PURE__ */ S.jsx(yx, v({
    as: s,
    ownerState: d,
    className: ce(p.root, a),
    ref: o
  }, u));
});
process.env.NODE_ENV !== "production" && (Bu.propTypes = {
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
  elevation: fn(pc, (e) => {
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
const us = Bu;
function gx(e) {
  return xe("MuiDialog", e);
}
const bx = be("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), Mo = bx, Wu = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Wu.displayName = "DialogContext");
const vx = Wu, xx = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], Cx = oe(Fu, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), wx = (e) => {
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
  return we(i, gx, t);
}, Tx = oe(Lu, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), Ex = oe("div", {
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
}) => v({
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
})), Sx = oe(us, {
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
}) => v({
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
  [`&.${Mo.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${Mo.paperScrollBody}`]: {
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
  [`&.${Mo.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), zu = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiDialog"
  }), a = Vt(), s = {
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
    fullWidth: g = !1,
    maxWidth: f = "sm",
    onBackdropClick: C,
    onClick: T,
    onClose: E,
    open: x,
    PaperComponent: w = us,
    PaperProps: y = {},
    scroll: R = "paper",
    TransitionComponent: O = fo,
    transitionDuration: L = s,
    TransitionProps: _
  } = r, V = ae(r, xx), N = v({}, r, {
    disableEscapeKeyDown: h,
    fullScreen: m,
    fullWidth: g,
    maxWidth: f,
    scroll: R
  }), B = wx(N), F = b.useRef(), D = (M) => {
    F.current = M.target === M.currentTarget;
  }, P = (M) => {
    T && T(M), F.current && (F.current = null, C && C(M), E && E(M, "backdropClick"));
  }, $ = On(l), j = b.useMemo(() => ({
    titleId: $
  }), [$]);
  return /* @__PURE__ */ S.jsx(Tx, v({
    className: ce(B.root, p),
    closeAfterTransition: !0,
    components: {
      Backdrop: Cx
    },
    componentsProps: {
      backdrop: v({
        transitionDuration: L,
        as: c
      }, u)
    },
    disableEscapeKeyDown: h,
    onClose: E,
    open: x,
    ref: o,
    onClick: P,
    ownerState: N
  }, V, {
    children: /* @__PURE__ */ S.jsx(O, v({
      appear: !0,
      in: x,
      timeout: L,
      role: "presentation"
    }, _, {
      children: /* @__PURE__ */ S.jsx(Ex, {
        className: ce(B.container),
        onMouseDown: D,
        ownerState: N,
        children: /* @__PURE__ */ S.jsx(Sx, v({
          as: w,
          elevation: 24,
          role: "dialog",
          "aria-describedby": i,
          "aria-labelledby": $
        }, y, {
          className: ce(B.paper, y.className),
          ownerState: N,
          children: /* @__PURE__ */ S.jsx(vx.Provider, {
            value: j,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (zu.propTypes = {
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
const Px = zu, Wo = 36, ds = 2, fs = 320, Ox = 280, Fa = 334, Rx = oe(Px)({
  [`& .${Mo.container}`]: {
    outline: 0
  },
  [`& .${Mo.paper}`]: {
    outline: 0,
    minWidth: fs
  }
}), Dx = oe(Vv)({
  "&:first-of-type": {
    padding: 0
  }
});
function Mx(e) {
  var t, o;
  const {
    children: r,
    onDismiss: a,
    open: s,
    slots: i,
    slotProps: l
  } = e, c = (t = i == null ? void 0 : i.dialog) != null ? t : Rx, u = (o = i == null ? void 0 : i.mobileTransition) != null ? o : fo;
  return /* @__PURE__ */ S.jsx(c, v({
    open: s,
    onClose: a
  }, l == null ? void 0 : l.dialog, {
    TransitionComponent: u,
    TransitionProps: l == null ? void 0 : l.mobileTransition,
    PaperComponent: i == null ? void 0 : i.mobilePaper,
    PaperProps: l == null ? void 0 : l.mobilePaper,
    children: /* @__PURE__ */ S.jsx(Dx, {
      children: r
    })
  }));
}
const $x = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function sa(e) {
  return `scale(${e}, ${e ** 2})`;
}
const kx = {
  entering: {
    opacity: 1,
    transform: sa(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Vs = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Va = /* @__PURE__ */ b.forwardRef(function(t, o) {
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
    style: g,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = is
  } = t, T = ae(t, $x), E = lc(), x = b.useRef(), w = Vt(), y = b.useRef(null), R = Ue(y, Ho(s), o), O = (P) => ($) => {
    if (P) {
      const j = y.current;
      $ === void 0 ? P(j) : P(j, $);
    }
  }, L = O(d), _ = O((P, $) => {
    _u(P);
    const {
      duration: j,
      delay: M,
      easing: W
    } = kr({
      style: g,
      timeout: f,
      easing: i
    }, {
      mode: "enter"
    });
    let k;
    f === "auto" ? (k = w.transitions.getAutoHeightDuration(P.clientHeight), x.current = k) : k = j, P.style.transition = [w.transitions.create("opacity", {
      duration: k,
      delay: M
    }), w.transitions.create("transform", {
      duration: Vs ? k : k * 0.666,
      delay: M,
      easing: W
    })].join(","), c && c(P, $);
  }), V = O(u), N = O(m), B = O((P) => {
    const {
      duration: $,
      delay: j,
      easing: M
    } = kr({
      style: g,
      timeout: f,
      easing: i
    }, {
      mode: "exit"
    });
    let W;
    f === "auto" ? (W = w.transitions.getAutoHeightDuration(P.clientHeight), x.current = W) : W = $, P.style.transition = [w.transitions.create("opacity", {
      duration: W,
      delay: j
    }), w.transitions.create("transform", {
      duration: Vs ? W : W * 0.666,
      delay: Vs ? j : j || W * 0.333,
      easing: M
    })].join(","), P.style.opacity = 0, P.style.transform = sa(0.75), p && p(P);
  }), F = O(h), D = (P) => {
    f === "auto" && E.start(x.current || 0, P), r && r(y.current, P);
  };
  return /* @__PURE__ */ S.jsx(C, v({
    appear: a,
    in: l,
    nodeRef: y,
    onEnter: _,
    onEntered: V,
    onEntering: L,
    onExit: B,
    onExited: F,
    onExiting: N,
    addEndListener: D,
    timeout: f === "auto" ? null : f
  }, T, {
    children: (P, $) => /* @__PURE__ */ b.cloneElement(s, v({
      style: v({
        opacity: 0,
        transform: sa(0.75),
        visibility: P === "exited" && !l ? "hidden" : void 0
      }, kx[P], g, s.props.style),
      ref: R
    }, $))
  }));
});
process.env.NODE_ENV !== "production" && (Va.propTypes = {
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
  children: Vr.isRequired,
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
Va.muiSupportAuto = !0;
const Uu = Va;
var La = {};
Object.defineProperty(La, "__esModule", {
  value: !0
});
var Yu = La.default = void 0, Ix = Nx(ht), _x = Fc;
function Hu(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (Hu = function(r) {
    return r ? o : t;
  })(e);
}
function Nx(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var o = Hu(t);
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
function Ax(e) {
  return Object.keys(e).length === 0;
}
function jx(e = null) {
  const t = Ix.useContext(_x.ThemeContext);
  return !t || Ax(t) ? e : t;
}
Yu = La.default = jx;
var vt = "top", At = "bottom", jt = "right", xt = "left", Ba = "auto", er = [vt, At, jt, xt], eo = "start", zo = "end", Fx = "clippingParents", qu = "viewport", Co = "popper", Vx = "reference", Pl = /* @__PURE__ */ er.reduce(function(e, t) {
  return e.concat([t + "-" + eo, t + "-" + zo]);
}, []), Ku = /* @__PURE__ */ [].concat(er, [Ba]).reduce(function(e, t) {
  return e.concat([t, t + "-" + eo, t + "-" + zo]);
}, []), Lx = "beforeRead", Bx = "read", Wx = "afterRead", zx = "beforeMain", Ux = "main", Yx = "afterMain", Hx = "beforeWrite", qx = "write", Kx = "afterWrite", Gx = [Lx, Bx, Wx, zx, Ux, Yx, Hx, qx, Kx];
function Zt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Pt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Pn(e) {
  var t = Pt(e).Element;
  return e instanceof t || e instanceof Element;
}
function It(e) {
  var t = Pt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Wa(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Pt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Xx(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, a = t.attributes[o] || {}, s = t.elements[o];
    !It(s) || !Zt(s) || (Object.assign(s.style, r), Object.keys(a).forEach(function(i) {
      var l = a[i];
      l === !1 ? s.removeAttribute(i) : s.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Zx(e) {
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
      !It(a) || !Zt(a) || (Object.assign(a.style, l), Object.keys(s).forEach(function(c) {
        a.removeAttribute(c);
      }));
    });
  };
}
const Qx = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Xx,
  effect: Zx,
  requires: ["computeStyles"]
};
function Xt(e) {
  return e.split("-")[0];
}
var Tn = Math.max, _r = Math.min, to = Math.round;
function aa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Gu() {
  return !/^((?!chrome|android).)*safari/i.test(aa());
}
function no(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), a = 1, s = 1;
  t && It(e) && (a = e.offsetWidth > 0 && to(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && to(r.height) / e.offsetHeight || 1);
  var i = Pn(e) ? Pt(e) : window, l = i.visualViewport, c = !Gu() && o, u = (r.left + (c && l ? l.offsetLeft : 0)) / a, d = (r.top + (c && l ? l.offsetTop : 0)) / s, p = r.width / a, h = r.height / s;
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
function za(e) {
  var t = no(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function Xu(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Wa(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function nn(e) {
  return Pt(e).getComputedStyle(e);
}
function Jx(e) {
  return ["table", "td", "th"].indexOf(Zt(e)) >= 0;
}
function mn(e) {
  return ((Pn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ps(e) {
  return Zt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Wa(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    mn(e)
  );
}
function Ol(e) {
  return !It(e) || // https://github.com/popperjs/popper-core/issues/837
  nn(e).position === "fixed" ? null : e.offsetParent;
}
function e0(e) {
  var t = /firefox/i.test(aa()), o = /Trident/i.test(aa());
  if (o && It(e)) {
    var r = nn(e);
    if (r.position === "fixed")
      return null;
  }
  var a = ps(e);
  for (Wa(a) && (a = a.host); It(a) && ["html", "body"].indexOf(Zt(a)) < 0; ) {
    var s = nn(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function tr(e) {
  for (var t = Pt(e), o = Ol(e); o && Jx(o) && nn(o).position === "static"; )
    o = Ol(o);
  return o && (Zt(o) === "html" || Zt(o) === "body" && nn(o).position === "static") ? t : o || e0(e) || t;
}
function Ua(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function $o(e, t, o) {
  return Tn(e, _r(t, o));
}
function t0(e, t, o) {
  var r = $o(e, t, o);
  return r > o ? o : r;
}
function Zu() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Qu(e) {
  return Object.assign({}, Zu(), e);
}
function Ju(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var n0 = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Qu(typeof t != "number" ? t : Ju(t, er));
};
function o0(e) {
  var t, o = e.state, r = e.name, a = e.options, s = o.elements.arrow, i = o.modifiersData.popperOffsets, l = Xt(o.placement), c = Ua(l), u = [xt, jt].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!s || !i)) {
    var p = n0(a.padding, o), h = za(s), m = c === "y" ? vt : xt, g = c === "y" ? At : jt, f = o.rects.reference[d] + o.rects.reference[c] - i[c] - o.rects.popper[d], C = i[c] - o.rects.reference[c], T = tr(s), E = T ? c === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, x = f / 2 - C / 2, w = p[m], y = E - h[d] - p[g], R = E / 2 - h[d] / 2 + x, O = $o(w, R, y), L = c;
    o.modifiersData[r] = (t = {}, t[L] = O, t.centerOffset = O - R, t);
  }
}
function r0(e) {
  var t = e.state, o = e.options, r = o.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Xu(t.elements.popper, a) && (t.elements.arrow = a));
}
const s0 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: o0,
  effect: r0,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function oo(e) {
  return e.split("-")[1];
}
var a0 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function i0(e, t) {
  var o = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: to(o * a) / a || 0,
    y: to(r * a) / a || 0
  };
}
function Rl(e) {
  var t, o = e.popper, r = e.popperRect, a = e.placement, s = e.variation, i = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, h = i.x, m = h === void 0 ? 0 : h, g = i.y, f = g === void 0 ? 0 : g, C = typeof d == "function" ? d({
    x: m,
    y: f
  }) : {
    x: m,
    y: f
  };
  m = C.x, f = C.y;
  var T = i.hasOwnProperty("x"), E = i.hasOwnProperty("y"), x = xt, w = vt, y = window;
  if (u) {
    var R = tr(o), O = "clientHeight", L = "clientWidth";
    if (R === Pt(o) && (R = mn(o), nn(R).position !== "static" && l === "absolute" && (O = "scrollHeight", L = "scrollWidth")), R = R, a === vt || (a === xt || a === jt) && s === zo) {
      w = At;
      var _ = p && R === y && y.visualViewport ? y.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R[O]
      );
      f -= _ - r.height, f *= c ? 1 : -1;
    }
    if (a === xt || (a === vt || a === At) && s === zo) {
      x = jt;
      var V = p && R === y && y.visualViewport ? y.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R[L]
      );
      m -= V - r.width, m *= c ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: l
  }, u && a0), B = d === !0 ? i0({
    x: m,
    y: f
  }, Pt(o)) : {
    x: m,
    y: f
  };
  if (m = B.x, f = B.y, c) {
    var F;
    return Object.assign({}, N, (F = {}, F[w] = E ? "0" : "", F[x] = T ? "0" : "", F.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + f + "px)" : "translate3d(" + m + "px, " + f + "px, 0)", F));
  }
  return Object.assign({}, N, (t = {}, t[w] = E ? f + "px" : "", t[x] = T ? m + "px" : "", t.transform = "", t));
}
function l0(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, a = r === void 0 ? !0 : r, s = o.adaptive, i = s === void 0 ? !0 : s, l = o.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: Xt(t.placement),
    variation: oo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Rl(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Rl(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const c0 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: l0,
  data: {}
};
var lr = {
  passive: !0
};
function u0(e) {
  var t = e.state, o = e.instance, r = e.options, a = r.scroll, s = a === void 0 ? !0 : a, i = r.resize, l = i === void 0 ? !0 : i, c = Pt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", o.update, lr);
  }), l && c.addEventListener("resize", o.update, lr), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", o.update, lr);
    }), l && c.removeEventListener("resize", o.update, lr);
  };
}
const d0 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: u0,
  data: {}
};
var f0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Cr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return f0[t];
  });
}
var p0 = {
  start: "end",
  end: "start"
};
function Dl(e) {
  return e.replace(/start|end/g, function(t) {
    return p0[t];
  });
}
function Ya(e) {
  var t = Pt(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function Ha(e) {
  return no(mn(e)).left + Ya(e).scrollLeft;
}
function h0(e, t) {
  var o = Pt(e), r = mn(e), a = o.visualViewport, s = r.clientWidth, i = r.clientHeight, l = 0, c = 0;
  if (a) {
    s = a.width, i = a.height;
    var u = Gu();
    (u || !u && t === "fixed") && (l = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: l + Ha(e),
    y: c
  };
}
function m0(e) {
  var t, o = mn(e), r = Ya(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = Tn(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), i = Tn(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -r.scrollLeft + Ha(e), c = -r.scrollTop;
  return nn(a || o).direction === "rtl" && (l += Tn(o.clientWidth, a ? a.clientWidth : 0) - s), {
    width: s,
    height: i,
    x: l,
    y: c
  };
}
function qa(e) {
  var t = nn(e), o = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + a + r);
}
function ed(e) {
  return ["html", "body", "#document"].indexOf(Zt(e)) >= 0 ? e.ownerDocument.body : It(e) && qa(e) ? e : ed(ps(e));
}
function ko(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = ed(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = Pt(r), i = a ? [s].concat(s.visualViewport || [], qa(r) ? r : []) : r, l = t.concat(i);
  return a ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(ko(ps(i)))
  );
}
function ia(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function y0(e, t) {
  var o = no(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Ml(e, t, o) {
  return t === qu ? ia(h0(e, o)) : Pn(t) ? y0(t, o) : ia(m0(mn(e)));
}
function g0(e) {
  var t = ko(ps(e)), o = ["absolute", "fixed"].indexOf(nn(e).position) >= 0, r = o && It(e) ? tr(e) : e;
  return Pn(r) ? t.filter(function(a) {
    return Pn(a) && Xu(a, r) && Zt(a) !== "body";
  }) : [];
}
function b0(e, t, o, r) {
  var a = t === "clippingParents" ? g0(e) : [].concat(t), s = [].concat(a, [o]), i = s[0], l = s.reduce(function(c, u) {
    var d = Ml(e, u, r);
    return c.top = Tn(d.top, c.top), c.right = _r(d.right, c.right), c.bottom = _r(d.bottom, c.bottom), c.left = Tn(d.left, c.left), c;
  }, Ml(e, i, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function td(e) {
  var t = e.reference, o = e.element, r = e.placement, a = r ? Xt(r) : null, s = r ? oo(r) : null, i = t.x + t.width / 2 - o.width / 2, l = t.y + t.height / 2 - o.height / 2, c;
  switch (a) {
    case vt:
      c = {
        x: i,
        y: t.y - o.height
      };
      break;
    case At:
      c = {
        x: i,
        y: t.y + t.height
      };
      break;
    case jt:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case xt:
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
  var u = a ? Ua(a) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case eo:
        c[u] = c[u] - (t[d] / 2 - o[d] / 2);
        break;
      case zo:
        c[u] = c[u] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return c;
}
function Uo(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, a = r === void 0 ? e.placement : r, s = o.strategy, i = s === void 0 ? e.strategy : s, l = o.boundary, c = l === void 0 ? Fx : l, u = o.rootBoundary, d = u === void 0 ? qu : u, p = o.elementContext, h = p === void 0 ? Co : p, m = o.altBoundary, g = m === void 0 ? !1 : m, f = o.padding, C = f === void 0 ? 0 : f, T = Qu(typeof C != "number" ? C : Ju(C, er)), E = h === Co ? Vx : Co, x = e.rects.popper, w = e.elements[g ? E : h], y = b0(Pn(w) ? w : w.contextElement || mn(e.elements.popper), c, d, i), R = no(e.elements.reference), O = td({
    reference: R,
    element: x,
    strategy: "absolute",
    placement: a
  }), L = ia(Object.assign({}, x, O)), _ = h === Co ? L : R, V = {
    top: y.top - _.top + T.top,
    bottom: _.bottom - y.bottom + T.bottom,
    left: y.left - _.left + T.left,
    right: _.right - y.right + T.right
  }, N = e.modifiersData.offset;
  if (h === Co && N) {
    var B = N[a];
    Object.keys(V).forEach(function(F) {
      var D = [jt, At].indexOf(F) >= 0 ? 1 : -1, P = [vt, At].indexOf(F) >= 0 ? "y" : "x";
      V[F] += B[P] * D;
    });
  }
  return V;
}
function v0(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, a = o.boundary, s = o.rootBoundary, i = o.padding, l = o.flipVariations, c = o.allowedAutoPlacements, u = c === void 0 ? Ku : c, d = oo(r), p = d ? l ? Pl : Pl.filter(function(g) {
    return oo(g) === d;
  }) : er, h = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  h.length === 0 && (h = p);
  var m = h.reduce(function(g, f) {
    return g[f] = Uo(e, {
      placement: f,
      boundary: a,
      rootBoundary: s,
      padding: i
    })[Xt(f)], g;
  }, {});
  return Object.keys(m).sort(function(g, f) {
    return m[g] - m[f];
  });
}
function x0(e) {
  if (Xt(e) === Ba)
    return [];
  var t = Cr(e);
  return [Dl(e), t, Dl(t)];
}
function C0(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = o.mainAxis, s = a === void 0 ? !0 : a, i = o.altAxis, l = i === void 0 ? !0 : i, c = o.fallbackPlacements, u = o.padding, d = o.boundary, p = o.rootBoundary, h = o.altBoundary, m = o.flipVariations, g = m === void 0 ? !0 : m, f = o.allowedAutoPlacements, C = t.options.placement, T = Xt(C), E = T === C, x = c || (E || !g ? [Cr(C)] : x0(C)), w = [C].concat(x).reduce(function(z, q) {
      return z.concat(Xt(q) === Ba ? v0(t, {
        placement: q,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: f
      }) : q);
    }, []), y = t.rects.reference, R = t.rects.popper, O = /* @__PURE__ */ new Map(), L = !0, _ = w[0], V = 0; V < w.length; V++) {
      var N = w[V], B = Xt(N), F = oo(N) === eo, D = [vt, At].indexOf(B) >= 0, P = D ? "width" : "height", $ = Uo(t, {
        placement: N,
        boundary: d,
        rootBoundary: p,
        altBoundary: h,
        padding: u
      }), j = D ? F ? jt : xt : F ? At : vt;
      y[P] > R[P] && (j = Cr(j));
      var M = Cr(j), W = [];
      if (s && W.push($[B] <= 0), l && W.push($[j] <= 0, $[M] <= 0), W.every(function(z) {
        return z;
      })) {
        _ = N, L = !1;
        break;
      }
      O.set(N, W);
    }
    if (L)
      for (var k = g ? 3 : 1, U = function(q) {
        var Q = w.find(function(Y) {
          var Z = O.get(Y);
          if (Z)
            return Z.slice(0, q).every(function(ee) {
              return ee;
            });
        });
        if (Q)
          return _ = Q, "break";
      }, G = k; G > 0; G--) {
        var X = U(G);
        if (X === "break")
          break;
      }
    t.placement !== _ && (t.modifiersData[r]._skip = !0, t.placement = _, t.reset = !0);
  }
}
const w0 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: C0,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function $l(e, t, o) {
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
function kl(e) {
  return [vt, jt, At, xt].some(function(t) {
    return e[t] >= 0;
  });
}
function T0(e) {
  var t = e.state, o = e.name, r = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, i = Uo(t, {
    elementContext: "reference"
  }), l = Uo(t, {
    altBoundary: !0
  }), c = $l(i, r), u = $l(l, a, s), d = kl(c), p = kl(u);
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
const E0 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: T0
};
function S0(e, t, o) {
  var r = Xt(e), a = [xt, vt].indexOf(r) >= 0 ? -1 : 1, s = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, i = s[0], l = s[1];
  return i = i || 0, l = (l || 0) * a, [xt, jt].indexOf(r) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function P0(e) {
  var t = e.state, o = e.options, r = e.name, a = o.offset, s = a === void 0 ? [0, 0] : a, i = Ku.reduce(function(d, p) {
    return d[p] = S0(p, t.rects, s), d;
  }, {}), l = i[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
const O0 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: P0
};
function R0(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = td({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const D0 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: R0,
  data: {}
};
function M0(e) {
  return e === "x" ? "y" : "x";
}
function $0(e) {
  var t = e.state, o = e.options, r = e.name, a = o.mainAxis, s = a === void 0 ? !0 : a, i = o.altAxis, l = i === void 0 ? !1 : i, c = o.boundary, u = o.rootBoundary, d = o.altBoundary, p = o.padding, h = o.tether, m = h === void 0 ? !0 : h, g = o.tetherOffset, f = g === void 0 ? 0 : g, C = Uo(t, {
    boundary: c,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), T = Xt(t.placement), E = oo(t.placement), x = !E, w = Ua(T), y = M0(w), R = t.modifiersData.popperOffsets, O = t.rects.reference, L = t.rects.popper, _ = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, V = typeof _ == "number" ? {
    mainAxis: _,
    altAxis: _
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, _), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
    x: 0,
    y: 0
  };
  if (R) {
    if (s) {
      var F, D = w === "y" ? vt : xt, P = w === "y" ? At : jt, $ = w === "y" ? "height" : "width", j = R[w], M = j + C[D], W = j - C[P], k = m ? -L[$] / 2 : 0, U = E === eo ? O[$] : L[$], G = E === eo ? -L[$] : -O[$], X = t.elements.arrow, z = m && X ? za(X) : {
        width: 0,
        height: 0
      }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Zu(), Q = q[D], Y = q[P], Z = $o(0, O[$], z[$]), ee = x ? O[$] / 2 - k - Z - Q - V.mainAxis : U - Z - Q - V.mainAxis, J = x ? -O[$] / 2 + k + Z + Y + V.mainAxis : G + Z + Y + V.mainAxis, K = t.elements.arrow && tr(t.elements.arrow), A = K ? w === "y" ? K.clientTop || 0 : K.clientLeft || 0 : 0, H = (F = N == null ? void 0 : N[w]) != null ? F : 0, re = j + ee - H - A, de = j + J - H, ge = $o(m ? _r(M, re) : M, j, m ? Tn(W, de) : W);
      R[w] = ge, B[w] = ge - j;
    }
    if (l) {
      var $e, ue = w === "x" ? vt : xt, fe = w === "x" ? At : jt, te = R[y], se = y === "y" ? "height" : "width", he = te + C[ue], Te = te - C[fe], ve = [vt, xt].indexOf(T) !== -1, Oe = ($e = N == null ? void 0 : N[y]) != null ? $e : 0, qe = ve ? he : te - O[se] - L[se] - Oe + V.altAxis, De = ve ? te + O[se] + L[se] - Oe - V.altAxis : Te, Ee = m && ve ? t0(qe, te, De) : $o(m ? qe : he, te, m ? De : Te);
      R[y] = Ee, B[y] = Ee - te;
    }
    t.modifiersData[r] = B;
  }
}
const k0 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: $0,
  requiresIfExists: ["offset"]
};
function I0(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function _0(e) {
  return e === Pt(e) || !It(e) ? Ya(e) : I0(e);
}
function N0(e) {
  var t = e.getBoundingClientRect(), o = to(t.width) / e.offsetWidth || 1, r = to(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function A0(e, t, o) {
  o === void 0 && (o = !1);
  var r = It(t), a = It(t) && N0(t), s = mn(t), i = no(e, a, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((Zt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  qa(s)) && (l = _0(t)), It(t) ? (c = no(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = Ha(s))), {
    x: i.left + l.scrollLeft - c.x,
    y: i.top + l.scrollTop - c.y,
    width: i.width,
    height: i.height
  };
}
function j0(e) {
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
function F0(e) {
  var t = j0(e);
  return Gx.reduce(function(o, r) {
    return o.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function V0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function L0(e) {
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
var Il = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function _l() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function B0(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, a = t.defaultOptions, s = a === void 0 ? Il : a;
  return function(l, c, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Il, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, p = [], h = !1, m = {
      state: d,
      setOptions: function(T) {
        var E = typeof T == "function" ? T(d.options) : T;
        f(), d.options = Object.assign({}, s, d.options, E), d.scrollParents = {
          reference: Pn(l) ? ko(l) : l.contextElement ? ko(l.contextElement) : [],
          popper: ko(c)
        };
        var x = F0(L0([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = x.filter(function(w) {
          return w.enabled;
        }), g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var T = d.elements, E = T.reference, x = T.popper;
          if (_l(E, x)) {
            d.rects = {
              reference: A0(E, tr(x), d.options.strategy === "fixed"),
              popper: za(x)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(V) {
              return d.modifiersData[V.name] = Object.assign({}, V.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var y = d.orderedModifiers[w], R = y.fn, O = y.options, L = O === void 0 ? {} : O, _ = y.name;
              typeof R == "function" && (d = R({
                state: d,
                options: L,
                name: _,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: V0(function() {
        return new Promise(function(C) {
          m.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        f(), h = !0;
      }
    };
    if (!_l(l, c))
      return m;
    m.setOptions(u).then(function(C) {
      !h && u.onFirstUpdate && u.onFirstUpdate(C);
    });
    function g() {
      d.orderedModifiers.forEach(function(C) {
        var T = C.name, E = C.options, x = E === void 0 ? {} : E, w = C.effect;
        if (typeof w == "function") {
          var y = w({
            state: d,
            name: T,
            instance: m,
            options: x
          }), R = function() {
          };
          p.push(y || R);
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
var W0 = [d0, D0, c0, Qx, O0, w0, k0, s0, E0], z0 = /* @__PURE__ */ B0({
  defaultModifiers: W0
});
function U0(e) {
  return xe("MuiPopper", e);
}
be("MuiPopper", ["root"]);
const Y0 = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], H0 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function q0(e, t) {
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
function Nr(e) {
  return typeof e == "function" ? e() : e;
}
function hs(e) {
  return e.nodeType !== void 0;
}
function K0(e) {
  return !hs(e);
}
const G0 = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"]
  }, U0, t);
}, X0 = {}, Z0 = /* @__PURE__ */ b.forwardRef(function(t, o) {
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
    slots: g = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, C = ae(t, Y0), T = b.useRef(null), E = Ue(T, o), x = b.useRef(null), w = Ue(x, h), y = b.useRef(w);
  ct(() => {
    y.current = w;
  }, [w]), b.useImperativeHandle(h, () => x.current, []);
  const R = q0(d, i), [O, L] = b.useState(R), [_, V] = b.useState(Nr(a));
  b.useEffect(() => {
    x.current && x.current.forceUpdate();
  }), b.useEffect(() => {
    a && V(Nr(a));
  }, [a]), ct(() => {
    if (!_ || !u)
      return;
    const P = (M) => {
      L(M.placement);
    };
    if (process.env.NODE_ENV !== "production" && _ && hs(_) && _.nodeType === 1) {
      const M = _.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && M.top === 0 && M.left === 0 && M.right === 0 && M.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let $ = [{
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
        state: M
      }) => {
        P(M);
      }
    }];
    c != null && ($ = $.concat(c)), p && p.modifiers != null && ($ = $.concat(p.modifiers));
    const j = z0(_, T.current, v({
      placement: R
    }, p, {
      modifiers: $
    }));
    return y.current(j), () => {
      j.destroy(), y.current(null);
    };
  }, [_, l, c, u, p, R]);
  const N = {
    placement: O
  };
  f !== null && (N.TransitionProps = f);
  const B = G0(t), F = (r = g.root) != null ? r : "div", D = En({
    elementType: F,
    externalSlotProps: m.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: E
    },
    ownerState: t,
    className: B.root
  });
  return /* @__PURE__ */ S.jsx(F, v({}, D, {
    children: typeof s == "function" ? s(N) : s
  }));
}), nd = /* @__PURE__ */ b.forwardRef(function(t, o) {
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
    popperOptions: h = X0,
    popperRef: m,
    style: g,
    transition: f = !1,
    slotProps: C = {},
    slots: T = {}
  } = t, E = ae(t, H0), [x, w] = b.useState(!0), y = () => {
    w(!1);
  }, R = () => {
    w(!0);
  };
  if (!c && !d && (!f || x))
    return null;
  let O;
  if (s)
    O = s;
  else if (r) {
    const V = Nr(r);
    O = V && hs(V) ? it(V).body : it(null).body;
  }
  const L = !d && c && (!f || x) ? "none" : void 0, _ = f ? {
    in: d,
    onEnter: y,
    onExited: R
  } : void 0;
  return /* @__PURE__ */ S.jsx(Au, {
    disablePortal: l,
    container: O,
    children: /* @__PURE__ */ S.jsx(Z0, v({
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
      slots: T
    }, E, {
      style: v({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: L
      }, g),
      TransitionProps: _,
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (nd.propTypes = {
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
  anchorEl: fn(n.oneOfType([Jt, n.object, n.func]), (e) => {
    if (e.open) {
      const t = Nr(e.anchorEl);
      if (t && hs(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || K0(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: n.oneOfType([Jt, n.func]),
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
  popperRef: yt,
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
const Q0 = nd, J0 = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], eC = oe(Q0, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), od = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r;
  const a = Yu(), s = Ve({
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
    open: g,
    placement: f,
    popperOptions: C,
    popperRef: T,
    transition: E,
    slots: x,
    slotProps: w
  } = s, y = ae(s, J0), R = (r = x == null ? void 0 : x.root) != null ? r : c == null ? void 0 : c.Root, O = v({
    anchorEl: i,
    container: d,
    disablePortal: p,
    keepMounted: h,
    modifiers: m,
    open: g,
    placement: f,
    popperOptions: C,
    popperRef: T,
    transition: E
  }, y);
  return /* @__PURE__ */ S.jsx(eC, v({
    as: l,
    direction: a == null ? void 0 : a.direction,
    slots: {
      root: R
    },
    slotProps: w ?? u
  }, O, {
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (od.propTypes = {
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
  anchorEl: n.oneOfType([Jt, n.object, n.func]),
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
  container: n.oneOfType([Jt, n.func]),
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
  popperRef: yt,
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
const tC = od;
function nC(e) {
  return xe("MuiPickersPopper", e);
}
be("MuiPickersPopper", ["root", "paper"]);
function oC(e, t) {
  return Array.isArray(t) ? t.every((o) => e.indexOf(o) !== -1) : e.indexOf(t) !== -1;
}
const rC = (e, t) => (o) => {
  (o.key === "Enter" || o.key === " ") && (e(o), o.preventDefault(), o.stopPropagation()), t && t(o);
}, Ar = (e = document) => {
  const t = e.activeElement;
  return t ? t.shadowRoot ? Ar(t.shadowRoot) : t : null;
}, sC = "@media (pointer: fine)", aC = "@media (prefers-reduced-motion: reduce)", Kn = typeof navigator < "u" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i), Nl = Kn && Kn[1] ? parseInt(Kn[1], 10) : null, Al = Kn && Kn[2] ? parseInt(Kn[2], 10) : null, iC = Nl && Nl < 10 || Al && Al < 13 || !1, rd = () => iu(aC, {
  defaultMatches: !1
}) || iC, lC = ["PaperComponent", "popperPlacement", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"], cC = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    paper: ["paper"]
  }, nC, t);
}, uC = oe(tC, {
  name: "MuiPickersPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  zIndex: e.zIndex.modal
})), dC = oe(us, {
  name: "MuiPickersPopper",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  ownerState: e
}) => v({
  outline: 0,
  transformOrigin: "top center"
}, e.placement.includes("top") && {
  transformOrigin: "bottom center"
}));
function fC(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function pC(e, t) {
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
    const d = it(a.current);
    if (!a.current || // is a TouchEvent?
    "clientX" in c && fC(c, d))
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
      const c = it(a.current), u = () => {
        o.current = !0;
      };
      return c.addEventListener("touchstart", i), c.addEventListener("touchmove", u), () => {
        c.removeEventListener("touchstart", i), c.removeEventListener("touchmove", u);
      };
    }
  }, [e, i]), b.useEffect(() => {
    if (e) {
      const c = it(a.current);
      return c.addEventListener("click", i), () => {
        c.removeEventListener("click", i), r.current = !1;
      };
    }
  }, [e, i]), [a, l, l];
}
const hC = /* @__PURE__ */ b.forwardRef((e, t) => {
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
  } = e, d = ae(e, lC), p = v({}, a, {
    placement: r
  }), h = st({
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
  return /* @__PURE__ */ S.jsx(o, v({}, d, h, {
    onClick: (m) => {
      var g;
      c(m), (g = h.onClick) == null || g.call(h, m);
    },
    onTouchStart: (m) => {
      var g;
      u(m), (g = h.onTouchStart) == null || g.call(h, m);
    },
    ownerState: p,
    children: s
  }));
});
function mC(e) {
  var t, o, r, a;
  const s = lt({
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
    placement: g,
    slots: f,
    slotProps: C,
    reduceAnimations: T
  } = s;
  b.useEffect(() => {
    function W(k) {
      h && (k.key === "Escape" || k.key === "Esc") && p();
    }
    return document.addEventListener("keydown", W), () => {
      document.removeEventListener("keydown", W);
    };
  }, [p, h]);
  const E = b.useRef(null);
  b.useEffect(() => {
    m === "tooltip" || u && !u() || (h ? E.current = Ar(document) : E.current && E.current instanceof HTMLElement && setTimeout(() => {
      E.current instanceof HTMLElement && E.current.focus();
    }));
  }, [h, m, u]);
  const [x, w, y] = pC(h, d ?? p), R = b.useRef(null), O = Ue(R, c), L = Ue(O, x), _ = s, V = cC(_), N = rd(), B = T ?? N, F = (W) => {
    W.key === "Escape" && (W.stopPropagation(), p());
  }, D = ((t = f == null ? void 0 : f.desktopTransition) != null ? t : B) ? fo : Uu, P = (o = f == null ? void 0 : f.desktopTrapFocus) != null ? o : Bo, $ = (r = f == null ? void 0 : f.desktopPaper) != null ? r : dC, j = (a = f == null ? void 0 : f.popper) != null ? a : uC, M = st({
    elementType: j,
    externalSlotProps: C == null ? void 0 : C.popper,
    additionalProps: {
      transition: !0,
      role: m,
      open: h,
      anchorEl: i,
      placement: g,
      onKeyDown: F
    },
    className: V.root,
    ownerState: s
  });
  return /* @__PURE__ */ S.jsx(j, v({}, M, {
    children: ({
      TransitionProps: W,
      placement: k
    }) => /* @__PURE__ */ S.jsx(P, v({
      open: h,
      disableAutoFocus: !0,
      disableRestoreFocus: !0,
      disableEnforceFocus: m === "tooltip",
      isEnabled: () => !0
    }, C == null ? void 0 : C.desktopTrapFocus, {
      children: /* @__PURE__ */ S.jsx(D, v({}, W, C == null ? void 0 : C.desktopTransition, {
        children: /* @__PURE__ */ S.jsx(hC, {
          PaperComponent: $,
          ownerState: _,
          popperPlacement: k,
          ref: L,
          onPaperClick: w,
          onPaperTouchStart: y,
          paperClasses: V.paper,
          paperSlotProps: C == null ? void 0 : C.desktopPaper,
          children: l
        })
      }))
    }))
  }));
}
function yC(e) {
  return xe("MuiButton", e);
}
const gC = be("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), cr = gC, sd = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (sd.displayName = "ButtonGroupContext");
const bC = sd, ad = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (ad.displayName = "ButtonGroupButtonContext");
const vC = ad, xC = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], CC = (e) => {
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
  }, c = we(l, yC, i);
  return v({}, i, c);
}, id = (e) => v({}, e.size === "small" && {
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
}), wC = oe(Jn, {
  shouldForwardProp: (e) => Bt(e) || e === "classes",
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
  return v({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": v({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    "&:active": v({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${cr.focusVisible}`]: v({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${cr.disabled}`]: v({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Qe(e.palette[t.color].main, 0.5)}`
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
  [`&.${cr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${cr.disabled}`]: {
    boxShadow: "none"
  }
}), TC = oe("span", {
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
}) => v({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, id(e))), EC = oe("span", {
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
}) => v({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, id(e))), ld = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = b.useContext(bC), a = b.useContext(vC), s = Ao(r, t), i = Ve({
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
    endIcon: g,
    focusVisibleClassName: f,
    fullWidth: C = !1,
    size: T = "medium",
    startIcon: E,
    type: x,
    variant: w = "text"
  } = i, y = ae(i, xC), R = v({}, i, {
    color: c,
    component: u,
    disabled: p,
    disableElevation: h,
    disableFocusRipple: m,
    fullWidth: C,
    size: T,
    type: x,
    variant: w
  }), O = CC(R), L = E && /* @__PURE__ */ S.jsx(TC, {
    className: O.startIcon,
    ownerState: R,
    children: E
  }), _ = g && /* @__PURE__ */ S.jsx(EC, {
    className: O.endIcon,
    ownerState: R,
    children: g
  }), V = a || "";
  return /* @__PURE__ */ S.jsxs(wC, v({
    ownerState: R,
    className: ce(r.className, O.root, d, V),
    component: u,
    disabled: p,
    focusRipple: !m,
    focusVisibleClassName: ce(O.focusVisible, f),
    ref: o,
    type: x
  }, y, {
    classes: O,
    children: [L, l, _]
  }));
});
process.env.NODE_ENV !== "production" && (ld.propTypes = {
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
const ur = ld, Ka = ({
  timezone: e,
  value: t,
  defaultValue: o,
  onChange: r,
  valueManager: a
}) => {
  var s, i;
  const l = Ye(), c = b.useRef(o), u = (s = t ?? c.current) != null ? s : a.emptyValue, d = b.useMemo(() => a.getTimezone(l, u), [l, a, u]), p = pe((f) => d == null ? f : a.setTimezone(l, d, f)), h = (i = e ?? d) != null ? i : "default", m = b.useMemo(() => a.setTimezone(l, h, u), [a, l, h, u]), g = pe((f, ...C) => {
    const T = p(f);
    r == null || r(T, ...C);
  });
  return {
    value: m,
    handleValueChange: g,
    timezone: h
  };
}, Ga = ({
  name: e,
  timezone: t,
  value: o,
  defaultValue: r,
  onChange: a,
  valueManager: s
}) => {
  const [i, l] = Lt({
    name: e,
    state: "value",
    controlled: o,
    default: r ?? s.emptyValue
  }), c = pe((u, ...d) => {
    l(u), a == null || a(u, ...d);
  });
  return Ka({
    timezone: t,
    value: i,
    defaultValue: void 0,
    onChange: c,
    valueManager: s
  });
};
function cd(e, t, o, r) {
  const {
    value: a,
    onError: s
  } = e, i = Rn(), l = b.useRef(r), c = t({
    adapter: i,
    value: a,
    props: e
  });
  return b.useEffect(() => {
    s && !o(c, l.current) && s(c, a), l.current = c;
  }, [o, s, l, c, a]), c;
}
const SC = (e) => {
  const t = Ye(), o = hn(), r = Rn(), s = Vt().direction === "rtl", {
    valueManager: i,
    fieldValueManager: l,
    valueType: c,
    validator: u,
    internalProps: d,
    internalProps: {
      value: p,
      defaultValue: h,
      referenceDate: m,
      onChange: g,
      format: f,
      formatDensity: C = "dense",
      selectedSections: T,
      onSelectedSectionsChange: E,
      shouldRespectLeadingZeros: x = !1,
      timezone: w
    }
  } = e, {
    timezone: y,
    value: R,
    handleValueChange: O
  } = Ka({
    timezone: w,
    value: p,
    defaultValue: h,
    onChange: g,
    valueManager: i
  }), L = b.useMemo(() => yb(t, y), [t, y]), _ = b.useCallback((z, q = null) => l.getSectionsFromValue(t, z, q, s, (Q) => dl(t, y, o, f, Q, C, x, s)), [l, f, o, s, x, t, C, y]), V = b.useMemo(() => l.getValueStrFromSections(_(i.emptyValue), s), [l, _, i.emptyValue, s]), [N, B] = b.useState(() => {
    const z = _(R);
    pl(z, c);
    const q = {
      sections: z,
      value: R,
      referenceValue: i.emptyValue,
      tempValueStrAndroid: null
    }, Q = lb(z), Y = i.getInitialReferenceValue({
      referenceDate: m,
      value: R,
      utils: t,
      props: d,
      granularity: Q,
      timezone: y
    });
    return v({}, q, {
      referenceValue: Y
    });
  }), [F, D] = Lt({
    controlled: T,
    default: null,
    name: "useField",
    state: "selectedSectionIndexes"
  }), P = (z) => {
    D(z), E == null || E(z), B((q) => v({}, q, {
      selectedSectionQuery: null
    }));
  }, $ = b.useMemo(() => {
    if (F == null)
      return null;
    if (F === "all")
      return {
        startIndex: 0,
        endIndex: N.sections.length - 1,
        shouldSelectBoundarySelectors: !0
      };
    if (typeof F == "number")
      return {
        startIndex: F,
        endIndex: F
      };
    if (typeof F == "string") {
      const z = N.sections.findIndex((q) => q.type === F);
      return {
        startIndex: z,
        endIndex: z
      };
    }
    return F;
  }, [F, N.sections]), j = ({
    value: z,
    referenceValue: q,
    sections: Q
  }) => {
    if (B((Z) => v({}, Z, {
      sections: Q,
      value: z,
      referenceValue: q,
      tempValueStrAndroid: null
    })), i.areValuesEqual(t, N.value, z))
      return;
    const Y = {
      validationError: u({
        adapter: r,
        value: z,
        props: v({}, d, {
          value: z,
          timezone: y
        })
      })
    };
    O(z, Y);
  }, M = (z, q) => {
    const Q = [...N.sections];
    return Q[z] = v({}, Q[z], {
      value: q,
      modified: !0
    }), xu(Q, s);
  }, W = () => {
    j({
      value: i.emptyValue,
      referenceValue: N.referenceValue,
      sections: _(i.emptyValue)
    });
  }, k = () => {
    if ($ == null)
      return;
    const z = N.sections[$.startIndex], q = l.getActiveDateManager(t, N, z), Y = q.getSections(N.sections).filter((K) => K.value !== "").length === (z.value === "" ? 0 : 1), Z = M($.startIndex, ""), ee = Y ? null : t.date(/* @__PURE__ */ new Date("")), J = q.getNewValuesFromNewActiveDate(ee);
    (ee != null && !t.isValid(ee)) != (q.date != null && !t.isValid(q.date)) ? j(v({}, J, {
      sections: Z
    })) : B((K) => v({}, K, J, {
      sections: Z,
      tempValueStrAndroid: null
    }));
  }, U = (z) => {
    const q = (Z, ee) => {
      const J = t.parse(Z, f);
      if (J == null || !t.isValid(J))
        return null;
      const K = dl(t, y, o, f, J, C, x, s);
      return ml(t, y, J, K, ee, !1);
    }, Q = l.parseValueStr(z, N.referenceValue, q), Y = l.updateReferenceValue(t, Q, N.referenceValue);
    j({
      value: Q,
      referenceValue: Y,
      sections: _(Q, N.sections)
    });
  }, G = ({
    activeSection: z,
    newSectionValue: q,
    shouldGoToNextSection: Q
  }) => {
    Q && $ && $.startIndex < N.sections.length - 1 ? P($.startIndex + 1) : $ && $.startIndex !== $.endIndex && P($.startIndex);
    const Y = l.getActiveDateManager(t, N, z), Z = M($.startIndex, q), ee = Y.getSections(Z), J = hb(t, ee);
    let K, A;
    if (J != null && t.isValid(J)) {
      const H = ml(t, y, J, ee, Y.referenceDate, !0);
      K = Y.getNewValuesFromNewActiveDate(H), A = !0;
    } else
      K = Y.getNewValuesFromNewActiveDate(J), A = (J != null && !t.isValid(J)) != (Y.date != null && !t.isValid(Y.date));
    return A ? j(v({}, K, {
      sections: Z
    })) : B((H) => v({}, H, K, {
      sections: Z,
      tempValueStrAndroid: null
    }));
  }, X = (z) => B((q) => v({}, q, {
    tempValueStrAndroid: z
  }));
  return b.useEffect(() => {
    const z = _(N.value);
    pl(z, c), B((q) => v({}, q, {
      sections: z
    }));
  }, [f, t.locale]), b.useEffect(() => {
    let z = !1;
    i.areValuesEqual(t, N.value, R) ? z = i.getTimezone(t, N.value) !== i.getTimezone(t, R) : z = !0, z && B((q) => v({}, q, {
      value: R,
      referenceValue: l.updateReferenceValue(t, R, q.referenceValue),
      sections: _(R)
    }));
  }, [R]), {
    state: N,
    selectedSectionIndexes: $,
    setSelectedSections: P,
    clearValue: W,
    clearActiveSection: k,
    updateSectionValue: G,
    updateValueFromValueStr: U,
    setTempAndroidValueStr: X,
    sectionsValueBoundaries: L,
    placeholder: V,
    timezone: y
  };
}, PC = 5e3, Ln = (e) => e.saveQuery != null, OC = ({
  sections: e,
  updateSectionValue: t,
  sectionsValueBoundaries: o,
  setTempAndroidValueStr: r,
  timezone: a
}) => {
  const s = Ye(), [i, l] = b.useState(null), c = pe(() => l(null));
  b.useEffect(() => {
    var m;
    i != null && ((m = e[i.sectionIndex]) == null ? void 0 : m.type) !== i.sectionType && c();
  }, [e, i, c]), b.useEffect(() => {
    if (i != null) {
      const m = setTimeout(() => c(), PC);
      return () => {
        window.clearTimeout(m);
      };
    }
    return () => {
    };
  }, [i, c]);
  const u = ({
    keyPressed: m,
    sectionIndex: g
  }, f, C) => {
    const T = m.toLowerCase(), E = e[g];
    if (i != null && (!C || C(i.value)) && i.sectionIndex === g) {
      const w = `${i.value}${T}`, y = f(w, E);
      if (!Ln(y))
        return l({
          sectionIndex: g,
          value: w,
          sectionType: E.type
        }), y;
    }
    const x = f(T, E);
    return Ln(x) && !x.saveQuery ? (c(), null) : (l({
      sectionIndex: g,
      value: T,
      sectionType: E.type
    }), Ln(x) ? null : x);
  }, d = (m) => {
    const g = (T, E, x) => {
      const w = E.filter((y) => y.toLowerCase().startsWith(x));
      return w.length === 0 ? {
        saveQuery: !1
      } : {
        sectionValue: w[0],
        shouldGoToNextSection: w.length === 1
      };
    }, f = (T, E, x, w) => {
      const y = (R) => gu(s, a, E.type, R);
      if (E.contentType === "letter")
        return g(E.format, y(E.format), T);
      if (x && w != null && $a(s, x).contentType === "letter") {
        const R = y(x), O = g(x, R, T);
        return Ln(O) ? {
          saveQuery: !1
        } : v({}, O, {
          sectionValue: w(O.sectionValue, R)
        });
      }
      return {
        saveQuery: !1
      };
    };
    return u(m, (T, E) => {
      switch (E.type) {
        case "month": {
          const x = (w) => ul(s, w, s.formats.month, E.format);
          return f(T, E, s.formats.month, x);
        }
        case "weekDay": {
          const x = (w, y) => y.indexOf(w).toString();
          return f(T, E, s.formats.weekday, x);
        }
        case "meridiem":
          return f(T, E);
        default:
          return {
            saveQuery: !1
          };
      }
    });
  }, p = (m) => {
    const g = (C, T) => {
      const E = +`${C}`, x = o[T.type]({
        currentDate: null,
        format: T.format,
        contentType: T.contentType
      });
      if (E > x.maximum)
        return {
          saveQuery: !1
        };
      if (E < x.minimum)
        return {
          saveQuery: !0
        };
      const w = +`${C}0` > x.maximum || C.length === x.maximum.toString().length;
      return {
        sectionValue: vu(s, a, E, x, T),
        shouldGoToNextSection: w
      };
    };
    return u(m, (C, T) => {
      if (T.contentType === "digit" || T.contentType === "digit-with-letter")
        return g(C, T);
      if (T.type === "month") {
        const E = wu(s, a, "digit", "month", "MM"), x = g(C, {
          type: T.type,
          format: "MM",
          hasLeadingZerosInFormat: E,
          hasLeadingZerosInInput: !0,
          contentType: "digit",
          maxLength: 2
        });
        if (Ln(x))
          return x;
        const w = ul(s, x.sectionValue, "MM", T.format);
        return v({}, x, {
          sectionValue: w
        });
      }
      if (T.type === "weekDay") {
        const E = g(C, T);
        if (Ln(E))
          return E;
        const x = ss(s, a, T.format)[Number(E.sectionValue) - 1];
        return v({}, E, {
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
      const g = e[m.sectionIndex], C = m.keyPressed !== " " && !Number.isNaN(Number(m.keyPressed)) ? p(m) : d(m);
      C == null ? r(null) : t({
        activeSection: g,
        newSectionValue: C.sectionValue,
        shouldGoToNextSection: C.shouldGoToNextSection
      });
    }),
    resetCharacterQuery: c
  };
}, RC = ["onClick", "onKeyDown", "onFocus", "onBlur", "onMouseUp", "onPaste", "error", "clearable", "onClear", "disabled"], DC = (e) => {
  const t = Ye(), {
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
  } = SC(e), {
    inputRef: m,
    internalProps: g,
    internalProps: {
      readOnly: f = !1,
      unstableFieldRef: C,
      minutesStep: T
    },
    forwardedProps: {
      onClick: E,
      onKeyDown: x,
      onFocus: w,
      onBlur: y,
      onMouseUp: R,
      onPaste: O,
      error: L,
      clearable: _,
      onClear: V,
      disabled: N
    },
    fieldValueManager: B,
    valueManager: F,
    validator: D
  } = e, P = ae(e.forwardedProps, RC), {
    applyCharacterEditing: $,
    resetCharacterQuery: j
  } = OC({
    sections: o.sections,
    updateSectionValue: l,
    sectionsValueBoundaries: d,
    setTempAndroidValueStr: u,
    timezone: h
  }), M = b.useRef(null), W = Ue(m, M), k = b.useRef(void 0), G = Vt().direction === "rtl", X = b.useMemo(() => vb(o.sections, G), [o.sections, G]), z = () => {
    var te;
    if (f) {
      a(null);
      return;
    }
    const se = (te = M.current.selectionStart) != null ? te : 0;
    let he;
    se <= o.sections[0].startInInput || se >= o.sections[o.sections.length - 1].endInInput ? he = 1 : he = o.sections.findIndex((ve) => ve.startInInput - ve.startSeparator.length > se);
    const Te = he === -1 ? o.sections.length - 1 : he - 1;
    a(Te);
  }, q = pe((te, ...se) => {
    te.isDefaultPrevented() || (E == null || E(te, ...se), z());
  }), Q = pe((te) => {
    R == null || R(te), te.preventDefault();
  }), Y = pe((...te) => {
    w == null || w(...te);
    const se = M.current;
    window.clearTimeout(k.current), k.current = setTimeout(() => {
      !se || se !== M.current || r != null || f || (// avoid selecting all sections when focusing empty field without value
      se.value.length && Number(se.selectionEnd) - Number(se.selectionStart) === se.value.length ? a("all") : z());
    });
  }), Z = pe((...te) => {
    y == null || y(...te), a(null);
  }), ee = pe((te) => {
    if (O == null || O(te), f) {
      te.preventDefault();
      return;
    }
    const se = te.clipboardData.getData("text");
    if (r && r.startIndex === r.endIndex) {
      const he = o.sections[r.startIndex], Te = /^[a-zA-Z]+$/.test(se), ve = /^[0-9]+$/.test(se), Oe = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(se);
      if (he.contentType === "letter" && Te || he.contentType === "digit" && ve || he.contentType === "digit-with-letter" && Oe) {
        j(), l({
          activeSection: he,
          newSectionValue: se,
          shouldGoToNextSection: !0
        }), te.preventDefault();
        return;
      }
      if (Te || ve) {
        te.preventDefault();
        return;
      }
    }
    te.preventDefault(), j(), c(se);
  }), J = pe((te) => {
    if (f)
      return;
    const se = te.target.value;
    if (se === "") {
      j(), s();
      return;
    }
    const he = te.nativeEvent.data, Te = he && he.length > 1, ve = Te ? he : se, Oe = zn(ve);
    if (r == null || Te) {
      c(Te ? he : Oe);
      return;
    }
    let qe;
    if (r.startIndex === 0 && r.endIndex === o.sections.length - 1 && Oe.length === 1)
      qe = Oe;
    else {
      const De = zn(B.getValueStrFromSections(o.sections, G));
      let Ee = -1, me = -1;
      for (let ut = 0; ut < De.length; ut += 1)
        Ee === -1 && De[ut] !== Oe[ut] && (Ee = ut), me === -1 && De[De.length - ut - 1] !== Oe[Oe.length - ut - 1] && (me = ut);
      const Ge = o.sections[r.startIndex];
      if (Ee < Ge.start || De.length - me - 1 > Ge.end)
        return;
      const gt = Oe.length - De.length + Ge.end - zn(Ge.endSeparator || "").length;
      qe = Oe.slice(Ge.start + zn(Ge.startSeparator || "").length, gt);
    }
    if (qe.length === 0) {
      bb() ? u(ve) : (j(), i());
      return;
    }
    $({
      keyPressed: qe,
      sectionIndex: r.startIndex
    });
  }), K = pe((te) => {
    switch (x == null || x(te), !0) {
      case (te.key === "a" && (te.ctrlKey || te.metaKey)): {
        te.preventDefault(), a("all");
        break;
      }
      case te.key === "ArrowRight": {
        if (te.preventDefault(), r == null)
          a(X.startIndex);
        else if (r.startIndex !== r.endIndex)
          a(r.endIndex);
        else {
          const se = X.neighbors[r.startIndex].rightIndex;
          se !== null && a(se);
        }
        break;
      }
      case te.key === "ArrowLeft": {
        if (te.preventDefault(), r == null)
          a(X.endIndex);
        else if (r.startIndex !== r.endIndex)
          a(r.startIndex);
        else {
          const se = X.neighbors[r.startIndex].leftIndex;
          se !== null && a(se);
        }
        break;
      }
      case te.key === "Delete": {
        if (te.preventDefault(), f)
          break;
        r == null || r.startIndex === 0 && r.endIndex === o.sections.length - 1 ? s() : i(), j();
        break;
      }
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(te.key): {
        if (te.preventDefault(), f || r == null)
          break;
        const se = o.sections[r.startIndex], he = B.getActiveDateManager(t, o, se), Te = db(t, h, se, te.key, d, he.date, {
          minutesStep: T
        });
        l({
          activeSection: se,
          newSectionValue: Te,
          shouldGoToNextSection: !1
        });
        break;
      }
    }
  });
  ct(() => {
    if (!M.current)
      return;
    if (r == null) {
      M.current.scrollLeft && (M.current.scrollLeft = 0);
      return;
    }
    const te = o.sections[r.startIndex], se = o.sections[r.endIndex];
    let he = te.startInInput, Te = se.endInInput;
    if (r.shouldSelectBoundarySelectors && (he -= te.startSeparator.length, Te += se.endSeparator.length), he !== M.current.selectionStart || Te !== M.current.selectionEnd) {
      const ve = M.current.scrollTop;
      M.current === Ar(document) && M.current.setSelectionRange(he, Te), M.current.scrollTop = ve;
    }
  });
  const A = cd(v({}, g, {
    value: o.value,
    timezone: h
  }), D, F.isSameError, F.defaultErrorState), H = b.useMemo(() => L !== void 0 ? L : F.hasError(A), [F, A, L]);
  b.useEffect(() => {
    !H && !r && j();
  }, [o.referenceValue, r, H]), b.useEffect(() => (M.current && M.current === document.activeElement && a("all"), () => window.clearTimeout(k.current)), []), b.useEffect(() => {
    o.tempValueStrAndroid != null && r != null && (j(), i());
  }, [o.tempValueStrAndroid]);
  const re = b.useMemo(() => {
    var te;
    return (te = o.tempValueStrAndroid) != null ? te : B.getValueStrFromSections(o.sections, G);
  }, [o.sections, B, o.tempValueStrAndroid, G]), de = b.useMemo(() => r == null || o.sections[r.startIndex].contentType === "letter" ? "text" : "numeric", [r, o.sections]), ge = M.current && M.current === Ar(document), $e = F.areValuesEqual(t, o.value, F.emptyValue), ue = !ge && $e;
  b.useImperativeHandle(C, () => ({
    getSections: () => o.sections,
    getActiveSectionIndex: () => {
      var te, se, he;
      const Te = (te = M.current.selectionStart) != null ? te : 0, ve = (se = M.current.selectionEnd) != null ? se : 0, Oe = !!((he = M.current) != null && he.readOnly);
      if (Te === 0 && ve === 0 || Oe)
        return null;
      const qe = Te <= o.sections[0].startInInput ? 1 : o.sections.findIndex((De) => De.startInInput - De.startSeparator.length > Te);
      return qe === -1 ? o.sections.length - 1 : qe - 1;
    },
    setSelectedSections: (te) => a(te)
  }));
  const fe = pe((te, ...se) => {
    var he;
    te.preventDefault(), V == null || V(te, ...se), s(), M == null || (he = M.current) == null || he.focus(), a(0);
  });
  return v({
    placeholder: p,
    autoComplete: "off",
    disabled: !!N
  }, P, {
    value: ue ? "" : re,
    inputMode: de,
    readOnly: f,
    onClick: q,
    onFocus: Y,
    onBlur: Z,
    onPaste: ee,
    onChange: J,
    onKeyDown: K,
    onMouseUp: Q,
    onClear: fe,
    error: H,
    ref: W,
    clearable: !!(_ && !$e && !f && !N)
  });
}, MC = ({
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
}, $C = (e) => {
  const {
    action: t,
    hasChanged: o,
    dateState: r,
    isControlled: a
  } = e, s = !a && !r.hasBeenModifiedSinceMount;
  return t.name === "setValueFromField" ? !0 : t.name === "setValueFromAction" ? s && ["accept", "today", "clear"].includes(t.pickerAction) ? !0 : o(r.lastPublishedValue) : t.name === "setValueFromView" && t.selectionState !== "shallow" || t.name === "setValueFromShortcut" ? s ? !0 : o(r.lastPublishedValue) : !1;
}, kC = (e) => {
  const {
    action: t,
    hasChanged: o,
    dateState: r,
    isControlled: a,
    closeOnSelect: s
  } = e, i = !a && !r.hasBeenModifiedSinceMount;
  return t.name === "setValueFromAction" ? i && ["accept", "today", "clear"].includes(t.pickerAction) ? !0 : o(r.lastCommittedValue) : t.name === "setValueFromView" && t.selectionState === "finish" && s ? i ? !0 : o(r.lastCommittedValue) : t.name === "setValueFromShortcut" ? t.changeImportance === "accept" && o(r.lastCommittedValue) : !1;
}, IC = (e) => {
  const {
    action: t,
    closeOnSelect: o
  } = e;
  return t.name === "setValueFromAction" ? !0 : t.name === "setValueFromView" ? t.selectionState === "finish" && o : t.name === "setValueFromShortcut" ? t.changeImportance === "accept" : !1;
}, _C = ({
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
    current: g
  } = b.useRef(l !== void 0);
  process.env.NODE_ENV !== "production" && (b.useEffect(() => {
    g !== (l !== void 0) && console.error([`MUI: A component is changing the ${g ? "" : "un"}controlled value of a picker to be ${g ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled valuefor the lifetime of the component.", "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
  }, [l]), b.useEffect(() => {
    !g && m !== c && console.error(["MUI: A component is changing the defaultValue of an uncontrolled picker after being initialized. To suppress this warning opt to use a controlled value."].join(`
`));
  }, [JSON.stringify(m)]));
  const f = Ye(), C = Rn(), [T, E] = Lt({
    controlled: d,
    default: null,
    name: "usePickerValue",
    state: "selectedSections"
  }), {
    isOpen: x,
    setIsOpen: w
  } = MC(e), [y, R] = b.useState(() => {
    let Y;
    return l !== void 0 ? Y = l : m !== void 0 ? Y = m : Y = t.emptyValue, {
      draft: Y,
      lastPublishedValue: Y,
      lastCommittedValue: Y,
      lastControlledValue: l,
      hasBeenModifiedSinceMount: !1
    };
  }), {
    timezone: O,
    handleValueChange: L
  } = Ka({
    timezone: h,
    value: l,
    defaultValue: m,
    onChange: i,
    valueManager: t
  });
  cd(v({}, e, {
    value: y.draft,
    timezone: O
  }), a, t.isSameError, t.defaultErrorState);
  const _ = pe((Y) => {
    const Z = {
      action: Y,
      dateState: y,
      hasChanged: (A) => !t.areValuesEqual(f, Y.value, A),
      isControlled: g,
      closeOnSelect: u
    }, ee = $C(Z), J = kC(Z), K = IC(Z);
    if (R((A) => v({}, A, {
      draft: Y.value,
      lastPublishedValue: ee ? Y.value : A.lastPublishedValue,
      lastCommittedValue: J ? Y.value : A.lastCommittedValue,
      hasBeenModifiedSinceMount: !0
    })), ee) {
      const H = {
        validationError: Y.name === "setValueFromField" ? Y.context.validationError : a({
          adapter: C,
          value: Y.value,
          props: v({}, e, {
            value: Y.value,
            timezone: O
          })
        })
      };
      Y.name === "setValueFromShortcut" && Y.shortcut != null && (H.shortcut = Y.shortcut), L(Y.value, H);
    }
    J && s && s(Y.value), K && w(!1);
  });
  if (l !== void 0 && (y.lastControlledValue === void 0 || !t.areValuesEqual(f, y.lastControlledValue, l))) {
    const Y = t.areValuesEqual(f, y.draft, l);
    R((Z) => v({}, Z, {
      lastControlledValue: l
    }, Y ? {} : {
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
      value: y.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "accept"
    });
  }), B = pe(() => {
    _({
      value: y.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "dismiss"
    });
  }), F = pe(() => {
    _({
      value: y.lastCommittedValue,
      name: "setValueFromAction",
      pickerAction: "cancel"
    });
  }), D = pe(() => {
    _({
      value: t.getTodayValue(f, O, o),
      name: "setValueFromAction",
      pickerAction: "today"
    });
  }), P = pe(() => w(!0)), $ = pe(() => w(!1)), j = pe((Y, Z = "partial") => _({
    name: "setValueFromView",
    value: Y,
    selectionState: Z
  })), M = pe((Y, Z, ee) => _({
    name: "setValueFromShortcut",
    value: Y,
    changeImportance: Z ?? "accept",
    shortcut: ee
  })), W = pe((Y, Z) => _({
    name: "setValueFromField",
    value: Y,
    context: Z
  })), k = pe((Y) => {
    E(Y), p == null || p(Y);
  }), U = {
    onClear: V,
    onAccept: N,
    onDismiss: B,
    onCancel: F,
    onSetToday: D,
    onOpen: P,
    onClose: $
  }, G = {
    value: y.draft,
    onChange: W,
    selectedSections: T,
    onSelectedSectionsChange: k
  }, X = b.useMemo(() => t.cleanValue(f, y.draft), [f, t, y.draft]), z = {
    value: X,
    onChange: j,
    onClose: $,
    open: x,
    onSelectedSectionsChange: k
  }, Q = v({}, U, {
    value: X,
    onChange: j,
    onSelectShortcut: M,
    isValid: (Y) => {
      const Z = a({
        adapter: C,
        value: Y,
        props: v({}, e, {
          value: Y,
          timezone: O
        })
      });
      return !t.hasError(Z);
    }
  });
  return {
    open: x,
    fieldProps: G,
    viewProps: z,
    layoutProps: Q,
    actions: U
  };
};
let Ls = !1;
function ud({
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
  process.env.NODE_ENV !== "production" && (Ls || (r != null && !a.includes(r) && (console.warn(`MUI: \`view="${r}"\` is not a valid prop.`, `It must be an element of \`views=["${a.join('", "')}"]\`.`), Ls = !0), r == null && o != null && !a.includes(o) && (console.warn(`MUI: \`openTo="${o}"\` is not a valid prop.`, `It must be an element of \`views=["${a.join('", "')}"]\`.`), Ls = !0)));
  const d = b.useRef(o), p = b.useRef(a), h = b.useRef(a.includes(o) ? o : a[0]), [m, g] = Lt({
    name: "useViews",
    state: "view",
    controlled: r,
    default: h.current
  }), f = b.useRef(s ? m : null), [C, T] = Lt({
    name: "useViews",
    state: "focusedView",
    controlled: i,
    default: f.current
  });
  b.useEffect(() => {
    (d.current && d.current !== o || p.current && p.current.some((_) => !a.includes(_))) && (g(a.includes(o) ? o : a[0]), p.current = a, d.current = o);
  }, [o, g, m, a]);
  const E = a.indexOf(m), x = (c = a[E - 1]) != null ? c : null, w = (u = a[E + 1]) != null ? u : null, y = pe((_, V) => {
    T(V ? _ : (N) => _ === N ? null : N), l == null || l(_, V);
  }), R = pe((_) => {
    y(_, !0), _ !== m && (g(_), t && t(_));
  }), O = pe(() => {
    w && R(w);
  }), L = pe((_, V, N) => {
    const B = V === "finish", F = N ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but we it's not the final view given all `views` -> overall selection state should be `partial`.
      a.indexOf(N) < a.length - 1
    ) : !!w;
    if (e(_, B && F ? "partial" : V, N), N && N !== m) {
      const P = a[a.indexOf(N) + 1];
      P && R(P);
    } else
      B && O();
  });
  return {
    view: m,
    setView: R,
    focusedView: C,
    setFocusedView: y,
    nextView: w,
    previousView: x,
    // Always return up to date default view instead of the initial one (i.e. defaultView.current)
    defaultView: a.includes(o) ? o : a[0],
    goToNextView: O,
    setValueAndGoToNextView: L
  };
}
const NC = ["className", "sx"], AC = ({
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
    timezone: g
  } = e, f = ae(e, NC), {
    view: C,
    setView: T,
    defaultView: E,
    focusedView: x,
    setFocusedView: w,
    setValueAndGoToNextView: y
  } = ud({
    view: u,
    views: d,
    openTo: p,
    onChange: s,
    onViewChange: h,
    autoFocus: a
  }), {
    hasUIView: R,
    viewModeLookup: O
  } = b.useMemo(() => d.reduce((D, P) => {
    let $;
    return m[P] != null ? $ = "UI" : $ = "field", D.viewModeLookup[P] = $, $ === "UI" && (D.hasUIView = !0), D;
  }, {
    hasUIView: !1,
    viewModeLookup: {}
  }), [m, d]), L = b.useMemo(() => d.reduce((D, P) => m[P] != null && ab(P) ? D + 1 : D, 0), [m, d]), _ = O[C], V = pe(() => _ === "UI"), [N, B] = b.useState(_ === "UI" ? C : null);
  return N !== C && O[C] === "UI" && B(C), ct(() => {
    _ === "field" && i && (c(), setTimeout(() => {
      r == null || r.current.focus(), l(C);
    }));
  }, [C]), ct(() => {
    if (!i)
      return;
    let D = C;
    _ === "field" && N != null && (D = N), D !== E && O[D] === "UI" && O[E] === "UI" && (D = E), D !== C && T(D), w(D, !0);
  }, [i]), {
    hasUIView: R,
    shouldRestoreFocus: V,
    layoutProps: {
      views: d,
      view: N,
      onViewChange: T
    },
    renderCurrentView: () => {
      if (N == null)
        return null;
      const D = m[N];
      return D == null ? null : D(v({}, f, o, t, {
        views: d,
        timezone: g,
        onChange: y,
        view: N,
        onViewChange: T,
        focusedView: x,
        onFocusedViewChange: w,
        showViewSwitcher: L > 1,
        timeViewsCount: L
      }));
    }
  };
};
function jl() {
  return typeof window > "u" ? "portrait" : window.screen && window.screen.orientation && window.screen.orientation.angle ? Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait" : window.orientation && Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
}
const jC = (e, t) => {
  const [o, r] = b.useState(jl);
  return ct(() => {
    const s = () => {
      r(jl());
    };
    return window.addEventListener("orientationchange", s), () => {
      window.removeEventListener("orientationchange", s);
    };
  }, []), oC(e, ["hours", "minutes", "seconds"]) ? !1 : (t || o) === "landscape";
}, FC = ({
  props: e,
  propsFromPickerValue: t,
  propsFromPickerViews: o,
  wrapperVariant: r
}) => {
  const {
    orientation: a
  } = e, s = jC(o.views, a);
  return {
    layoutProps: v({}, o, t, {
      isLandscape: s,
      wrapperVariant: r,
      disabled: e.disabled,
      readOnly: e.readOnly
    })
  };
}, VC = hu(["The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]), dd = ({
  props: e,
  valueManager: t,
  valueType: o,
  wrapperVariant: r,
  inputRef: a,
  additionalViewProps: s,
  validator: i,
  autoFocusView: l
}) => {
  process.env.NODE_ENV !== "production" && e.renderInput != null && VC();
  const c = _C({
    props: e,
    valueManager: t,
    valueType: o,
    wrapperVariant: r,
    validator: i
  }), u = AC({
    props: e,
    inputRef: a,
    additionalViewProps: s,
    autoFocusView: l,
    propsFromPickerValue: c.viewProps
  }), d = FC({
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
function fd(e) {
  return xe("MuiPickersLayout", e);
}
const Bs = be("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);
function LC(e) {
  return xe("MuiDialogActions", e);
}
be("MuiDialogActions", ["root", "spacing"]);
const BC = ["className", "disableSpacing"], WC = (e) => {
  const {
    classes: t,
    disableSpacing: o
  } = e;
  return we({
    root: ["root", !o && "spacing"]
  }, LC, t);
}, zC = oe("div", {
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
}) => v({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), pd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: a,
    disableSpacing: s = !1
  } = r, i = ae(r, BC), l = v({}, r, {
    disableSpacing: s
  }), c = WC(l);
  return /* @__PURE__ */ S.jsx(zC, v({
    className: ce(c.root, a),
    ownerState: l,
    ref: o
  }, i));
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
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const UC = pd, YC = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function hd(e) {
  const {
    onAccept: t,
    onClear: o,
    onCancel: r,
    onSetToday: a,
    actions: s
  } = e, i = ae(e, YC), l = hn();
  if (s == null || s.length === 0)
    return null;
  const c = s == null ? void 0 : s.map((u) => {
    switch (u) {
      case "clear":
        return /* @__PURE__ */ S.jsx(ur, {
          onClick: o,
          children: l.clearButtonLabel
        }, u);
      case "cancel":
        return /* @__PURE__ */ S.jsx(ur, {
          onClick: r,
          children: l.cancelButtonLabel
        }, u);
      case "accept":
        return /* @__PURE__ */ S.jsx(ur, {
          onClick: t,
          children: l.okButtonLabel
        }, u);
      case "today":
        return /* @__PURE__ */ S.jsx(ur, {
          onClick: a,
          children: l.todayButtonLabel
        }, u);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ S.jsx(UC, v({}, i, {
    children: c
  }));
}
process.env.NODE_ENV !== "production" && (hd.propTypes = {
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
const md = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (md.displayName = "ListContext");
const Io = md;
function HC(e) {
  return xe("MuiList", e);
}
be("MuiList", ["root", "padding", "dense", "subheader"]);
const qC = ["children", "className", "component", "dense", "disablePadding", "subheader"], KC = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: a
  } = e;
  return we({
    root: ["root", !o && "padding", r && "dense", a && "subheader"]
  }, HC, t);
}, GC = oe("ul", {
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
}) => v({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), yd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiList"
  }), {
    children: a,
    className: s,
    component: i = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ae(r, qC), p = b.useMemo(() => ({
    dense: l
  }), [l]), h = v({}, r, {
    component: i,
    dense: l,
    disablePadding: c
  }), m = KC(h);
  return /* @__PURE__ */ S.jsx(Io.Provider, {
    value: p,
    children: /* @__PURE__ */ S.jsxs(GC, v({
      as: i,
      className: ce(m.root, s),
      ref: o,
      ownerState: h
    }, d, {
      children: [u, a]
    }))
  });
});
process.env.NODE_ENV !== "production" && (yd.propTypes = {
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
const gd = yd;
function XC(e) {
  return xe("MuiListItem", e);
}
const ZC = be("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), Wn = ZC, QC = be("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), JC = QC;
function ew(e) {
  return xe("MuiListItemSecondaryAction", e);
}
be("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const tw = ["className"], nw = (e) => {
  const {
    disableGutters: t,
    classes: o
  } = e;
  return we({
    root: ["root", t && "disableGutters"]
  }, ew, o);
}, ow = oe("div", {
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
}) => v({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), Xa = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: a
  } = r, s = ae(r, tw), i = b.useContext(Io), l = v({}, r, {
    disableGutters: i.disableGutters
  }), c = nw(l);
  return /* @__PURE__ */ S.jsx(ow, v({
    className: ce(c.root, a),
    ownerState: l,
    ref: o
  }, s));
});
process.env.NODE_ENV !== "production" && (Xa.propTypes = {
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
Xa.muiName = "ListItemSecondaryAction";
const rw = Xa, sw = ["className"], aw = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], iw = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters, !o.disablePadding && t.padding, o.button && t.button, o.hasSecondaryAction && t.secondaryAction];
}, lw = (e) => {
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
  }, XC, r);
}, cw = oe("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: iw
})(({
  theme: e,
  ownerState: t
}) => v({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && v({
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
  [`& > .${JC.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${Wn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Wn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Wn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Wn.disabled}`]: {
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
  [`&.${Wn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Qe(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), uw = oe("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), bd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
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
    dense: g = !1,
    disabled: f = !1,
    disableGutters: C = !1,
    disablePadding: T = !1,
    divider: E = !1,
    focusVisibleClassName: x,
    secondaryAction: w,
    selected: y = !1,
    slotProps: R = {},
    slots: O = {}
  } = r, L = ae(r.ContainerProps, sw), _ = ae(r, aw), V = b.useContext(Io), N = b.useMemo(() => ({
    dense: g || V.dense || !1,
    alignItems: a,
    disableGutters: C
  }), [a, V.dense, g, C]), B = b.useRef(null);
  ct(() => {
    s && (B.current ? B.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [s]);
  const F = b.Children.toArray(l), D = F.length && Yn(F[F.length - 1], ["ListItemSecondaryAction"]), P = v({}, r, {
    alignItems: a,
    autoFocus: s,
    button: i,
    dense: N.dense,
    disabled: f,
    disableGutters: C,
    disablePadding: T,
    divider: E,
    hasSecondaryAction: D,
    selected: y
  }), $ = lw(P), j = Ue(B, o), M = O.root || d.Root || cw, W = R.root || p.root || {}, k = v({
    className: ce($.root, W.className, c),
    disabled: f
  }, _);
  let U = u || "li";
  return i && (k.component = u || "div", k.focusVisibleClassName = ce(Wn.focusVisible, x), U = Jn), D ? (U = !k.component && !u ? "div" : U, h === "li" && (U === "li" ? U = "div" : k.component === "li" && (k.component = "div")), /* @__PURE__ */ S.jsx(Io.Provider, {
    value: N,
    children: /* @__PURE__ */ S.jsxs(uw, v({
      as: h,
      className: ce($.container, m),
      ref: j,
      ownerState: P
    }, L, {
      children: [/* @__PURE__ */ S.jsx(M, v({}, W, !Xn(M) && {
        as: U,
        ownerState: v({}, P, W.ownerState)
      }, k, {
        children: F
      })), F.pop()]
    }))
  })) : /* @__PURE__ */ S.jsx(Io.Provider, {
    value: N,
    children: /* @__PURE__ */ S.jsxs(M, v({}, W, {
      as: U,
      ref: j
    }, !Xn(M) && {
      ownerState: v({}, P, W.ownerState)
    }, k, {
      children: [F, w && /* @__PURE__ */ S.jsx(rw, {
        children: w
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (bd.propTypes = {
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
  children: fn(n.node, (e) => {
    const t = b.Children.toArray(e.children);
    let o = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const a = t[r];
      if (Yn(a, ["ListItemSecondaryAction"])) {
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
  ContainerComponent: Lr,
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
const dw = bd, fw = Wt(/* @__PURE__ */ S.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function pw(e) {
  return xe("MuiChip", e);
}
const hw = be("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), Me = hw, mw = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], yw = (e) => {
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
  return we(u, pw, t);
}, gw = oe("div", {
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
  return v({
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
    [`& .${Me.icon}`]: v({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && v({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : o
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${Me.deleteIcon}`]: v({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Qe(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Qe(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : Qe(e.palette[t.color].contrastText, 0.7),
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Qe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${Me.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => v({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Qe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${Me.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Qe(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
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
}) => v({}, t.variant === "outlined" && {
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
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Qe(e.palette[t.color].main, 0.7)}`,
  [`&.${Me.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qe(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${Me.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Qe(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${Me.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Qe(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), bw = oe("span", {
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
}) => v({
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
function Fl(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const vd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
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
    onDelete: g,
    onKeyDown: f,
    onKeyUp: C,
    size: T = "medium",
    variant: E = "filled",
    tabIndex: x,
    skipFocusWhenDisabled: w = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, y = ae(r, mw), R = b.useRef(null), O = Ue(R, o), L = (W) => {
    W.stopPropagation(), g && g(W);
  }, _ = (W) => {
    W.currentTarget === W.target && Fl(W) && W.preventDefault(), f && f(W);
  }, V = (W) => {
    W.currentTarget === W.target && (g && Fl(W) ? g(W) : W.key === "Escape" && R.current && R.current.blur()), C && C(W);
  }, N = i !== !1 && m ? !0 : i, B = N || g ? Jn : c || "div", F = v({}, r, {
    component: B,
    disabled: d,
    size: T,
    color: l,
    iconColor: /* @__PURE__ */ b.isValidElement(p) && p.props.color || l,
    onDelete: !!g,
    clickable: N,
    variant: E
  }), D = yw(F), P = B === Jn ? v({
    component: c || "div",
    focusVisibleClassName: D.focusVisible
  }, g && {
    disableRipple: !0
  }) : {};
  let $ = null;
  g && ($ = u && /* @__PURE__ */ b.isValidElement(u) ? /* @__PURE__ */ b.cloneElement(u, {
    className: ce(u.props.className, D.deleteIcon),
    onClick: L
  }) : /* @__PURE__ */ S.jsx(fw, {
    className: ce(D.deleteIcon),
    onClick: L
  }));
  let j = null;
  a && /* @__PURE__ */ b.isValidElement(a) && (j = /* @__PURE__ */ b.cloneElement(a, {
    className: ce(D.avatar, a.props.className)
  }));
  let M = null;
  return p && /* @__PURE__ */ b.isValidElement(p) && (M = /* @__PURE__ */ b.cloneElement(p, {
    className: ce(D.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && j && M && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ S.jsxs(gw, v({
    as: B,
    className: ce(D.root, s),
    disabled: N && d ? !0 : void 0,
    onClick: m,
    onKeyDown: _,
    onKeyUp: V,
    ref: O,
    tabIndex: w && d ? -1 : x,
    ownerState: F
  }, P, y, {
    children: [j || M, /* @__PURE__ */ S.jsx(bw, {
      className: ce(D.label),
      ownerState: F,
      children: h
    }), $]
  }));
});
process.env.NODE_ENV !== "production" && (vd.propTypes = {
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
  children: ic,
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
const vw = vd, xw = ["items", "changeImportance", "isLandscape", "onChange", "isValid"], Cw = ["getValue"];
function xd(e) {
  const {
    items: t,
    changeImportance: o,
    onChange: r,
    isValid: a
  } = e, s = ae(e, xw);
  if (t == null || t.length === 0)
    return null;
  const i = t.map((l) => {
    let {
      getValue: c
    } = l, u = ae(l, Cw);
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
  return /* @__PURE__ */ S.jsx(gd, v({
    dense: !0,
    sx: [{
      maxHeight: Fa,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(s.sx) ? s.sx : [s.sx]]
  }, s, {
    children: i.map((l) => /* @__PURE__ */ S.jsx(dw, {
      children: /* @__PURE__ */ S.jsx(vw, v({}, l))
    }, l.label))
  }));
}
process.env.NODE_ENV !== "production" && (xd.propTypes = {
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
function ww(e) {
  return e.view !== null;
}
const Tw = (e) => {
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
  }, fd, t);
}, Ew = (e) => {
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
    isValid: g,
    isLandscape: f,
    disabled: C,
    readOnly: T,
    children: E,
    components: x,
    componentsProps: w,
    slots: y,
    slotProps: R
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = e, O = y ?? Pu(x), L = R ?? w, _ = Tw(e), V = (t = O == null ? void 0 : O.actionBar) != null ? t : hd, N = st({
    elementType: V,
    externalSlotProps: L == null ? void 0 : L.actionBar,
    additionalProps: {
      onAccept: a,
      onClear: s,
      onCancel: i,
      onSetToday: l,
      actions: r === "desktop" ? [] : ["cancel", "accept"],
      className: _.actionBar
    },
    ownerState: v({}, e, {
      wrapperVariant: r
    })
  }), B = /* @__PURE__ */ S.jsx(V, v({}, N)), F = O == null ? void 0 : O.toolbar, D = st({
    elementType: F,
    externalSlotProps: L == null ? void 0 : L.toolbar,
    additionalProps: {
      isLandscape: f,
      onChange: h,
      value: p,
      view: c,
      onViewChange: d,
      views: u,
      disabled: C,
      readOnly: T,
      className: _.toolbar
    },
    ownerState: v({}, e, {
      wrapperVariant: r
    })
  }), P = ww(D) && F ? /* @__PURE__ */ S.jsx(F, v({}, D)) : null, $ = E, j = O == null ? void 0 : O.tabs, M = c && j ? /* @__PURE__ */ S.jsx(j, v({
    view: c,
    onViewChange: d,
    className: _.tabs
  }, L == null ? void 0 : L.tabs)) : null, W = (o = O == null ? void 0 : O.shortcuts) != null ? o : xd, k = st({
    elementType: W,
    externalSlotProps: L == null ? void 0 : L.shortcuts,
    additionalProps: {
      isValid: g,
      isLandscape: f,
      onChange: m,
      className: _.shortcuts
    },
    ownerState: {
      isValid: g,
      isLandscape: f,
      onChange: m,
      className: _.shortcuts,
      wrapperVariant: r
    }
  }), U = c && W ? /* @__PURE__ */ S.jsx(W, v({}, k)) : null;
  return {
    toolbar: P,
    content: $,
    tabs: M,
    actionBar: B,
    shortcuts: U
  };
}, Sw = Ew, Pw = (e) => {
  const {
    isLandscape: t,
    classes: o
  } = e;
  return we({
    root: ["root", t && "landscape"],
    contentWrapper: ["contentWrapper"]
  }, fd, o);
}, Cd = oe("div", {
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
  [`& .${Bs.toolbar}`]: t.isLandscape ? {
    gridColumn: e.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  } : {
    gridColumn: "2 / 4",
    gridRow: 1
  },
  [`.${Bs.shortcuts}`]: t.isLandscape ? {
    gridColumn: "2 / 4",
    gridRow: 1
  } : {
    gridColumn: e.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  },
  [`& .${Bs.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  }
}));
Cd.propTypes = {
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
const Ow = oe("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper",
  overridesResolver: (e, t) => t.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
}), Za = function(t) {
  const o = lt({
    props: t,
    name: "MuiPickersLayout"
  }), {
    toolbar: r,
    content: a,
    tabs: s,
    actionBar: i,
    shortcuts: l
  } = Sw(o), {
    sx: c,
    className: u,
    isLandscape: d,
    ref: p,
    wrapperVariant: h
  } = o, m = o, g = Pw(m);
  return /* @__PURE__ */ S.jsxs(Cd, {
    ref: p,
    sx: c,
    className: ce(u, g.root),
    ownerState: m,
    children: [d ? l : r, d ? r : l, /* @__PURE__ */ S.jsx(Ow, {
      className: g.contentWrapper,
      children: h === "desktop" ? /* @__PURE__ */ S.jsxs(b.Fragment, {
        children: [a, s]
      }) : /* @__PURE__ */ S.jsxs(b.Fragment, {
        children: [s, a]
      })
    }), i]
  });
};
process.env.NODE_ENV !== "production" && (Za.propTypes = {
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
function Rw(e, {
  disableFuture: t,
  maxDate: o,
  timezone: r
}) {
  const a = Ye();
  return b.useMemo(() => {
    const s = a.dateWithTimezone(void 0, r), i = a.startOfMonth(t && a.isBefore(s, o) ? s : o);
    return !a.isAfter(i, e);
  }, [t, o, e, a, r]);
}
function Dw(e, {
  disablePast: t,
  minDate: o,
  timezone: r
}) {
  const a = Ye();
  return b.useMemo(() => {
    const s = a.dateWithTimezone(void 0, r), i = a.startOfMonth(t && a.isAfter(s, o) ? s : o);
    return !a.isBefore(i, e);
  }, [t, o, e, a, r]);
}
const la = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"], ca = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableClock", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"], wd = ["minDateTime", "maxDateTime"], Mw = [...la, ...ca, ...wd], Td = (e) => Mw.reduce((t, o) => (e.hasOwnProperty(o) && (t[o] = e[o]), t), {}), $w = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "readOnly", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef"], kw = (e, t) => {
  const o = v({}, e), r = {}, a = (s) => {
    o.hasOwnProperty(s) && (r[s] = o[s], delete o[s]);
  };
  return $w.forEach(a), t === "date" ? la.forEach(a) : t === "time" ? ca.forEach(a) : t === "date-time" && (la.forEach(a), ca.forEach(a), wd.forEach(a)), {
    forwardedProps: o,
    internalProps: r
  };
}, ms = ({
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
  } = e, u = o.utils.dateWithTimezone(void 0, c), d = Nt(o.utils, e.minDate, o.defaultDates.minDate), p = Nt(o.utils, e.maxDate, o.defaultDates.maxDate);
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
function Iw(e) {
  return xe("MuiPickersDay", e);
}
const bn = be("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]), _w = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"], Nw = (e) => {
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
  }, Iw, c);
}, Ed = ({
  theme: e,
  ownerState: t
}) => v({}, e.typography.caption, {
  width: Wo,
  height: Wo,
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Qn(e.palette.primary.main, e.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})` : Qn(e.palette.primary.main, e.palette.action.focusOpacity),
    [`&.${bn.selected}`]: {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${bn.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    fontWeight: e.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${bn.disabled}:not(.${bn.selected})`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${bn.disabled}&.${bn.selected}`]: {
    opacity: 0.6
  }
}, !t.disableMargin && {
  margin: `0 ${ds}px`
}, t.outsideCurrentMonth && t.showDaysOutsideCurrentMonth && {
  color: (e.vars || e).palette.text.secondary
}, !t.disableHighlightToday && t.today && {
  [`&:not(.${bn.selected})`]: {
    border: `1px solid ${(e.vars || e).palette.text.secondary}`
  }
}), Sd = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, !o.disableMargin && t.dayWithMargin, !o.disableHighlightToday && o.today && t.today, !o.outsideCurrentMonth && o.showDaysOutsideCurrentMonth && t.dayOutsideMonth, o.outsideCurrentMonth && !o.showDaysOutsideCurrentMonth && t.hiddenDaySpacingFiller];
}, Aw = oe(Jn, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: Sd
})(Ed), jw = oe("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: Sd
})(({
  theme: e,
  ownerState: t
}) => v({}, Ed({
  theme: e,
  ownerState: t
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
})), wo = () => {
}, Pd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = lt({
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
    onFocus: m = wo,
    onBlur: g = wo,
    onKeyDown: f = wo,
    onMouseDown: C = wo,
    onMouseEnter: T = wo,
    outsideCurrentMonth: E,
    selected: x = !1,
    showDaysOutsideCurrentMonth: w = !1,
    children: y,
    today: R = !1
  } = r, O = ae(r, _w), L = v({}, r, {
    autoFocus: a,
    disabled: l,
    disableHighlightToday: c,
    disableMargin: u,
    selected: x,
    showDaysOutsideCurrentMonth: w,
    today: R
  }), _ = Nw(L), V = Ye(), N = b.useRef(null), B = Ue(N, o);
  ct(() => {
    a && !l && !d && !E && N.current.focus();
  }, [a, l, d, E]);
  const F = (P) => {
    C(P), E && P.preventDefault();
  }, D = (P) => {
    l || h(i), E && P.currentTarget.focus(), p && p(P);
  };
  return E && !w ? /* @__PURE__ */ S.jsx(jw, {
    className: ce(_.root, _.hiddenDaySpacingFiller, s),
    ownerState: L,
    role: O.role
  }) : /* @__PURE__ */ S.jsx(Aw, v({
    className: ce(_.root, s),
    ref: B,
    centerRipple: !0,
    disabled: l,
    tabIndex: x ? 0 : -1,
    onKeyDown: (P) => f(P, i),
    onFocus: (P) => m(P, i),
    onBlur: (P) => g(P, i),
    onMouseEnter: (P) => T(P, i),
    onClick: D,
    onMouseDown: F
  }, O, {
    ownerState: L,
    children: y || V.format(i, "dayOfMonth")
  }));
});
process.env.NODE_ENV !== "production" && (Pd.propTypes = {
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
const Fw = /* @__PURE__ */ b.memo(Pd), Vw = (e) => xe("MuiPickersSlideTransition", e), Dt = be("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]), Lw = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"], Bw = (e) => {
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
  return we(r, Vw, t);
}, Ww = oe(ja, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, {
    [`.${Dt["slideEnter-left"]}`]: t["slideEnter-left"]
  }, {
    [`.${Dt["slideEnter-right"]}`]: t["slideEnter-right"]
  }, {
    [`.${Dt.slideEnterActive}`]: t.slideEnterActive
  }, {
    [`.${Dt.slideExit}`]: t.slideExit
  }, {
    [`.${Dt["slideExitActiveLeft-left"]}`]: t["slideExitActiveLeft-left"]
  }, {
    [`.${Dt["slideExitActiveLeft-right"]}`]: t["slideExitActiveLeft-right"]
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
    [`& .${Dt["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${Dt["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${Dt.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: t
    },
    [`& .${Dt.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${Dt["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: t,
      zIndex: 0
    },
    [`& .${Dt["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: t,
      zIndex: 0
    }
  };
});
function zw(e) {
  const t = lt({
    props: e,
    name: "MuiPickersSlideTransition"
  }), {
    children: o,
    className: r,
    reduceAnimations: a,
    transKey: s
    // extracting `classes` from `other`
  } = t, i = ae(t, Lw), l = Bw(t), c = Vt();
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
  return /* @__PURE__ */ S.jsx(Ww, {
    className: ce(l.root, r),
    childFactory: (d) => /* @__PURE__ */ b.cloneElement(d, {
      classNames: u
    }),
    role: "presentation",
    children: /* @__PURE__ */ S.jsx(Hb, v({
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: c.transitions.duration.complex,
      classNames: u
    }, i, {
      children: o
    }), s)
  });
}
const Od = ({
  shouldDisableDate: e,
  shouldDisableMonth: t,
  shouldDisableYear: o,
  minDate: r,
  maxDate: a,
  disableFuture: s,
  disablePast: i,
  timezone: l
}) => {
  const c = Rn();
  return b.useCallback((u) => ms({
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
}, Uw = (e) => xe("MuiDayCalendar", e);
be("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
const Yw = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], Hw = ["ownerState"], qw = (e) => {
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
  }, Uw, t);
}, Rd = (Wo + ds * 2) * 6, Kw = oe("div", {
  name: "MuiDayCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Gw = oe("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (e, t) => t.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), Xw = oe(Dn, {
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
})), Zw = oe(Dn, {
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
})), Qw = oe(Dn, {
  name: "MuiDayCalendar",
  slot: "WeekNumber",
  overridesResolver: (e, t) => t.weekNumber
})(({
  theme: e
}) => v({}, e.typography.caption, {
  width: Wo,
  height: Wo,
  padding: 0,
  margin: `0 ${ds}px`,
  color: e.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
})), Jw = oe("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (e, t) => t.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: Rd
}), e1 = oe(zw, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (e, t) => t.slideTransition
})({
  minHeight: Rd
}), t1 = oe("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (e, t) => t.monthContainer
})({
  overflow: "hidden"
}), n1 = oe("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (e, t) => t.weekContainer
})({
  margin: `${ds}px 0`,
  display: "flex",
  justifyContent: "center"
});
function o1(e) {
  var t, o, r;
  let {
    parentProps: a,
    day: s,
    focusableDay: i,
    selectedDays: l,
    isDateDisabled: c,
    currentMonthNumber: u,
    isViewFocused: d
  } = e, p = ae(e, Yw);
  const {
    disabled: h,
    disableHighlightToday: m,
    isMonthSwitchingAnimating: g,
    showDaysOutsideCurrentMonth: f,
    components: C,
    componentsProps: T,
    slots: E,
    slotProps: x,
    timezone: w
  } = a, y = Ye(), R = as(w), O = i !== null && y.isSameDay(s, i), L = l.some((j) => y.isSameDay(j, s)), _ = y.isSameDay(s, R), V = (t = (o = E == null ? void 0 : E.day) != null ? o : C == null ? void 0 : C.Day) != null ? t : Fw, N = st({
    elementType: V,
    externalSlotProps: (r = x == null ? void 0 : x.day) != null ? r : T == null ? void 0 : T.day,
    additionalProps: v({
      disableHighlightToday: m,
      showDaysOutsideCurrentMonth: f,
      role: "gridcell",
      isAnimating: g,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": y.toJsDate(s).valueOf()
    }, p),
    ownerState: v({}, a, {
      day: s,
      selected: L
    })
  }), B = ae(N, Hw), F = b.useMemo(() => h || c(s), [h, c, s]), D = b.useMemo(() => y.getMonth(s) !== u, [y, s, u]), P = b.useMemo(() => {
    const j = y.startOfMonth(y.setMonth(s, u));
    return f ? y.isSameDay(s, y.startOfWeek(j)) : y.isSameDay(s, j);
  }, [u, s, f, y]), $ = b.useMemo(() => {
    const j = y.endOfMonth(y.setMonth(s, u));
    return f ? y.isSameDay(s, y.endOfWeek(j)) : y.isSameDay(s, j);
  }, [u, s, f, y]);
  return /* @__PURE__ */ S.jsx(V, v({}, B, {
    day: s,
    disabled: F,
    autoFocus: d && O,
    today: _,
    outsideCurrentMonth: D,
    isFirstVisibleCell: P,
    isLastVisibleCell: $,
    selected: L,
    tabIndex: O ? 0 : -1,
    "aria-selected": L,
    "aria-current": _ ? "date" : void 0
  }));
}
function r1(e) {
  const t = lt({
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
    TransitionProps: g,
    disablePast: f,
    disableFuture: C,
    minDate: T,
    maxDate: E,
    shouldDisableDate: x,
    shouldDisableMonth: w,
    shouldDisableYear: y,
    dayOfWeekFormatter: R,
    hasFocus: O,
    onFocusedViewChange: L,
    gridLabelId: _,
    displayWeekNumber: V,
    fixedWeekNumber: N,
    autoFocus: B,
    timezone: F
  } = t, D = as(F), P = Ye(), $ = qw(t), M = Vt().direction === "rtl", W = R || ((ue, fe) => P.format(fe, "weekdayShort").charAt(0).toUpperCase()), k = Od({
    shouldDisableDate: x,
    shouldDisableMonth: w,
    shouldDisableYear: y,
    minDate: T,
    maxDate: E,
    disablePast: f,
    disableFuture: C,
    timezone: F
  }), U = hn(), [G, X] = Lt({
    name: "DayCalendar",
    state: "hasFocus",
    controlled: O,
    default: B ?? !1
  }), [z, q] = b.useState(() => i || D), Q = pe((ue) => {
    d || c(ue);
  }), Y = (ue) => {
    k(ue) || (o(ue), q(ue), L == null || L(!0), X(!0));
  }, Z = pe((ue, fe) => {
    switch (ue.key) {
      case "ArrowUp":
        Y(P.addDays(fe, -7)), ue.preventDefault();
        break;
      case "ArrowDown":
        Y(P.addDays(fe, 7)), ue.preventDefault();
        break;
      case "ArrowLeft": {
        const te = P.addDays(fe, M ? 1 : -1), se = P.addMonths(fe, M ? 1 : -1), he = Ro({
          utils: P,
          date: te,
          minDate: M ? te : P.startOfMonth(se),
          maxDate: M ? P.endOfMonth(se) : te,
          isDateDisabled: k,
          timezone: F
        });
        Y(he || te), ue.preventDefault();
        break;
      }
      case "ArrowRight": {
        const te = P.addDays(fe, M ? -1 : 1), se = P.addMonths(fe, M ? -1 : 1), he = Ro({
          utils: P,
          date: te,
          minDate: M ? P.startOfMonth(se) : te,
          maxDate: M ? te : P.endOfMonth(se),
          isDateDisabled: k,
          timezone: F
        });
        Y(he || te), ue.preventDefault();
        break;
      }
      case "Home":
        Y(P.startOfWeek(fe)), ue.preventDefault();
        break;
      case "End":
        Y(P.endOfWeek(fe)), ue.preventDefault();
        break;
      case "PageUp":
        Y(P.addMonths(fe, 1)), ue.preventDefault();
        break;
      case "PageDown":
        Y(P.addMonths(fe, -1)), ue.preventDefault();
        break;
    }
  }), ee = pe((ue, fe) => Y(fe)), J = pe((ue, fe) => {
    G && P.isSameDay(z, fe) && (L == null || L(!1));
  }), K = P.getMonth(a), A = b.useMemo(() => s.filter((ue) => !!ue).map((ue) => P.startOfDay(ue)), [P, s]), H = K, re = b.useMemo(() => /* @__PURE__ */ b.createRef(), [H]), de = P.startOfWeek(D), ge = b.useMemo(() => {
    const ue = P.startOfMonth(a), fe = P.endOfMonth(a);
    return k(z) || P.isAfterDay(z, fe) || P.isBeforeDay(z, ue) ? Ro({
      utils: P,
      date: z,
      minDate: ue,
      maxDate: fe,
      disablePast: f,
      disableFuture: C,
      isDateDisabled: k,
      timezone: F
    }) : z;
  }, [a, C, f, z, k, P, F]), $e = b.useMemo(() => {
    const ue = P.setTimezone(a, F), fe = P.getWeekArray(ue);
    let te = P.addMonths(ue, 1);
    for (; N && fe.length < N; ) {
      const se = P.getWeekArray(te), he = P.isSameDay(fe[fe.length - 1][0], se[0][0]);
      se.slice(he ? 1 : 0).forEach((Te) => {
        fe.length < N && fe.push(Te);
      }), te = P.addMonths(te, 1);
    }
    return fe;
  }, [a, N, P, F]);
  return /* @__PURE__ */ S.jsxs(Kw, {
    role: "grid",
    "aria-labelledby": _,
    className: $.root,
    children: [/* @__PURE__ */ S.jsxs(Gw, {
      role: "row",
      className: $.header,
      children: [V && /* @__PURE__ */ S.jsx(Zw, {
        variant: "caption",
        role: "columnheader",
        "aria-label": U.calendarWeekNumberHeaderLabel,
        className: $.weekNumberLabel,
        children: U.calendarWeekNumberHeaderText
      }), rb(P, D).map((ue, fe) => {
        var te;
        const se = P.format(ue, "weekdayShort");
        return /* @__PURE__ */ S.jsx(Xw, {
          variant: "caption",
          role: "columnheader",
          "aria-label": P.format(P.addDays(de, fe), "weekday"),
          className: $.weekDayLabel,
          children: (te = W == null ? void 0 : W(se, ue)) != null ? te : se
        }, se + fe.toString());
      })]
    }), l ? /* @__PURE__ */ S.jsx(Jw, {
      className: $.loadingContainer,
      children: h()
    }) : /* @__PURE__ */ S.jsx(e1, v({
      transKey: H,
      onExited: u,
      reduceAnimations: p,
      slideDirection: m,
      className: ce(r, $.slideTransition)
    }, g, {
      nodeRef: re,
      children: /* @__PURE__ */ S.jsx(t1, {
        ref: re,
        role: "rowgroup",
        className: $.monthContainer,
        children: $e.map((ue, fe) => /* @__PURE__ */ S.jsxs(n1, {
          role: "row",
          className: $.weekContainer,
          "aria-rowindex": fe + 1,
          children: [V && /* @__PURE__ */ S.jsx(Qw, {
            className: $.weekNumber,
            role: "rowheader",
            "aria-label": U.calendarWeekNumberAriaLabelText(P.getWeekNumber(ue[0])),
            children: U.calendarWeekNumberText(P.getWeekNumber(ue[0]))
          }), ue.map((te, se) => /* @__PURE__ */ S.jsx(o1, {
            parentProps: t,
            day: te,
            selectedDays: A,
            focusableDay: ge,
            onKeyDown: Z,
            onFocus: ee,
            onBlur: J,
            onDaySelect: Q,
            isDateDisabled: k,
            currentMonthNumber: K,
            isViewFocused: G,
            "aria-colindex": se + 1
          }, te.toString()))]
        }, `week-${ue[0]}`))
      })
    }))]
  });
}
const s1 = (e, t, o) => (r, a) => {
  switch (a.type) {
    case "changeMonth":
      return v({}, r, {
        slideDirection: a.direction,
        currentMonth: a.newMonth,
        isMonthSwitchingAnimating: !e
      });
    case "finishMonthSwitchingAnimation":
      return v({}, r, {
        isMonthSwitchingAnimating: !1
      });
    case "changeFocusedDay": {
      if (r.focusedDay != null && a.focusedDay != null && o.isSameDay(a.focusedDay, r.focusedDay))
        return r;
      const s = a.focusedDay != null && !t && !o.isSameMonth(r.currentMonth, a.focusedDay);
      return v({}, r, {
        focusedDay: a.focusedDay,
        isMonthSwitchingAnimating: s && !e && !a.withoutMonthSwitchingAnimation,
        currentMonth: s ? o.startOfMonth(a.focusedDay) : r.currentMonth,
        slideDirection: a.focusedDay != null && o.isAfterDay(a.focusedDay, r.currentMonth) ? "left" : "right"
      });
    }
    default:
      throw new Error("missing support");
  }
}, a1 = (e) => {
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
  } = e, m = Ye(), g = b.useRef(s1(!!d, i, m)).current, f = b.useMemo(
    () => {
      let O = null;
      return o ? O = o : r && (O = m.startOfMonth(r)), tn.getInitialReferenceValue({
        value: t,
        utils: m,
        timezone: h,
        props: e,
        referenceDate: O,
        granularity: Kt.day
      });
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), [C, T] = b.useReducer(g, {
    isMonthSwitchingAnimating: !1,
    focusedDay: f,
    currentMonth: m.startOfMonth(f),
    slideDirection: "left"
  }), E = b.useCallback((O) => {
    T(v({
      type: "changeMonth"
    }, O)), u && u(O.newMonth);
  }, [u]), x = b.useCallback((O) => {
    const L = O;
    m.isSameMonth(L, C.currentMonth) || E({
      newMonth: m.startOfMonth(L),
      direction: m.isAfterDay(L, C.currentMonth) ? "left" : "right"
    });
  }, [C.currentMonth, E, m]), w = Od({
    shouldDisableDate: p,
    minDate: c,
    maxDate: l,
    disableFuture: a,
    disablePast: s,
    timezone: h
  }), y = b.useCallback(() => {
    T({
      type: "finishMonthSwitchingAnimation"
    });
  }, []), R = pe((O, L) => {
    w(O) || T({
      type: "changeFocusedDay",
      focusedDay: O,
      withoutMonthSwitchingAnimation: L
    });
  });
  return {
    referenceDate: f,
    calendarState: C,
    changeMonth: x,
    changeFocusedDay: R,
    isDateDisabled: w,
    onMonthSwitchingAnimationEnd: y,
    handleChangeMonth: E
  };
}, Dd = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (Dd.displayName = "FormControlContext");
const ys = Dd;
function Mn() {
  return b.useContext(ys);
}
function i1(e) {
  return xe("MuiInputAdornment", e);
}
const l1 = be("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), Vl = l1;
var Ll;
const c1 = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], u1 = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, t[`position${ie(o.position)}`], o.disablePointerEvents === !0 && t.disablePointerEvents, t[o.variant]];
}, d1 = (e) => {
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
  return we(l, i1, t);
}, f1 = oe("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: u1
})(({
  theme: e,
  ownerState: t
}) => v({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${Vl.positionStart}&:not(.${Vl.hiddenLabel})`]: {
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
})), Md = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
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
  } = r, p = ae(r, c1), h = Mn() || {};
  let m = d;
  d && h.variant && process.env.NODE_ENV !== "production" && d === h.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), h && !m && (m = h.variant);
  const g = v({}, r, {
    hiddenLabel: h.hiddenLabel,
    size: h.size,
    disablePointerEvents: l,
    position: u,
    variant: m
  }), f = d1(g);
  return /* @__PURE__ */ S.jsx(ys.Provider, {
    value: null,
    children: /* @__PURE__ */ S.jsx(f1, v({
      as: i,
      ownerState: g,
      className: ce(f.root, s),
      ref: o
    }, p, {
      children: typeof a == "string" && !c ? /* @__PURE__ */ S.jsx(Dn, {
        color: "text.secondary",
        children: a
      }) : /* @__PURE__ */ S.jsxs(b.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Ll || (Ll = /* @__PURE__ */ S.jsx("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, a]
      })
    }))
  });
});
process.env.NODE_ENV !== "production" && (Md.propTypes = {
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
const $d = Md, p1 = ["props", "getOpenDialogAriaText"], h1 = ["ownerState"], m1 = ["ownerState"], y1 = (e) => {
  var t, o, r, a, s;
  let {
    props: i,
    getOpenDialogAriaText: l
  } = e, c = ae(e, p1);
  const {
    slots: u,
    slotProps: d,
    className: p,
    sx: h,
    format: m,
    formatDensity: g,
    timezone: f,
    name: C,
    label: T,
    inputRef: E,
    readOnly: x,
    disabled: w,
    autoFocus: y,
    localeText: R,
    reduceAnimations: O
  } = i, L = Ye(), _ = b.useRef(null), V = b.useRef(null), N = On(), B = (t = d == null || (o = d.toolbar) == null ? void 0 : o.hidden) != null ? t : !1, {
    open: F,
    actions: D,
    hasUIView: P,
    layoutProps: $,
    renderCurrentView: j,
    shouldRestoreFocus: M,
    fieldProps: W
  } = dd(v({}, c, {
    props: i,
    inputRef: _,
    autoFocusView: !0,
    additionalViewProps: {},
    wrapperVariant: "desktop"
  })), k = (r = u.inputAdornment) != null ? r : $d, U = st({
    elementType: k,
    externalSlotProps: d == null ? void 0 : d.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: i
  }), G = ae(U, h1), X = (a = u.openPickerButton) != null ? a : cs, z = st({
    elementType: X,
    externalSlotProps: d == null ? void 0 : d.openPickerButton,
    additionalProps: {
      disabled: w || x,
      onClick: F ? D.onClose : D.onOpen,
      "aria-label": l(W.value, L),
      edge: G.position
    },
    ownerState: i
  }), q = ae(z, m1), Q = u.openPickerIcon, Y = u.field, Z = st({
    elementType: Y,
    externalSlotProps: d == null ? void 0 : d.field,
    additionalProps: v({}, W, B && {
      id: N
    }, {
      readOnly: x,
      disabled: w,
      className: p,
      sx: h,
      format: m,
      formatDensity: g,
      timezone: f,
      label: T,
      name: C,
      autoFocus: y && !i.open,
      focused: F ? !0 : void 0
    }),
    ownerState: i
  });
  P && (Z.InputProps = v({}, Z.InputProps, {
    ref: V
  }, !i.disableOpenPicker && {
    [`${G.position}Adornment`]: /* @__PURE__ */ S.jsx(k, v({}, G, {
      children: /* @__PURE__ */ S.jsx(X, v({}, q, {
        children: /* @__PURE__ */ S.jsx(Q, v({}, d == null ? void 0 : d.openPickerIcon))
      }))
    }))
  }));
  const ee = v({
    textField: u.textField,
    clearIcon: u.clearIcon,
    clearButton: u.clearButton
  }, Z.slots), J = (s = u.layout) != null ? s : Za, K = Ue(_, Z.inputRef, E);
  let A = N;
  B && (T ? A = `${N}-label` : A = void 0);
  const H = v({}, d, {
    toolbar: v({}, d == null ? void 0 : d.toolbar, {
      titleId: N
    }),
    popper: v({
      "aria-labelledby": A
    }, d == null ? void 0 : d.popper)
  });
  return {
    renderPicker: () => /* @__PURE__ */ S.jsxs(rs, {
      localeText: R,
      children: [/* @__PURE__ */ S.jsx(Y, v({}, Z, {
        slots: ee,
        slotProps: H,
        inputRef: K
      })), /* @__PURE__ */ S.jsx(mC, v({
        role: "dialog",
        placement: "bottom-start",
        anchorEl: V.current
      }, D, {
        open: F,
        slots: u,
        slotProps: H,
        shouldRestoreFocus: M,
        reduceAnimations: O,
        children: /* @__PURE__ */ S.jsx(J, v({}, $, H == null ? void 0 : H.layout, {
          slots: u,
          slotProps: H,
          children: j()
        }))
      }))]
    })
  };
}, g1 = ["onChange", "maxRows", "minRows", "style", "value"];
function dr(e) {
  return parseInt(e, 10) || 0;
}
const b1 = {
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
function v1(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const kd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: a,
    minRows: s = 1,
    style: i,
    value: l
  } = t, c = ae(t, g1), {
    current: u
  } = b.useRef(l != null), d = b.useRef(null), p = Ue(o, d), h = b.useRef(null), m = b.useRef(null), g = b.useCallback(() => {
    const T = d.current, x = un(T).getComputedStyle(T);
    if (x.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const w = m.current;
    w.style.width = x.width, w.value = T.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const y = x.boxSizing, R = dr(x.paddingBottom) + dr(x.paddingTop), O = dr(x.borderBottomWidth) + dr(x.borderTopWidth), L = w.scrollHeight;
    w.value = "x";
    const _ = w.scrollHeight;
    let V = L;
    s && (V = Math.max(Number(s) * _, V)), a && (V = Math.min(Number(a) * _, V)), V = Math.max(V, _);
    const N = V + (y === "border-box" ? R + O : 0), B = Math.abs(V - L) <= 1;
    return {
      outerHeightStyle: N,
      overflowing: B
    };
  }, [a, s, t.placeholder]), f = b.useCallback(() => {
    const T = g();
    if (v1(T))
      return;
    const E = T.outerHeightStyle, x = d.current;
    h.current !== E && (h.current = E, x.style.height = `${E}px`), x.style.overflow = T.overflowing ? "hidden" : "";
  }, [g]);
  ct(() => {
    const T = () => {
      f();
    };
    let E;
    const x = () => {
      cancelAnimationFrame(E), E = requestAnimationFrame(() => {
        T();
      });
    }, w = fa(T), y = d.current, R = un(y);
    R.addEventListener("resize", w);
    let O;
    return typeof ResizeObserver < "u" && (O = new ResizeObserver(process.env.NODE_ENV === "test" ? x : T), O.observe(y)), () => {
      w.clear(), cancelAnimationFrame(E), R.removeEventListener("resize", w), O && O.disconnect();
    };
  }, [g, f]), ct(() => {
    f();
  });
  const C = (T) => {
    u || f(), r && r(T);
  };
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx("textarea", v({
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
      style: v({}, b1.shadow, i, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (kd.propTypes = {
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
const x1 = kd;
function po({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, a) => (r[a] = e[a], o && typeof e[a] > "u" && (r[a] = o[a]), r), {});
}
function Id(e) {
  return /* @__PURE__ */ S.jsx(ru, v({}, e, {
    defaultTheme: ns,
    themeId: os
  }));
}
process.env.NODE_ENV !== "production" && (Id.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function Bl(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function jr(e, t = !1) {
  return e && (Bl(e.value) && e.value !== "" || t && Bl(e.defaultValue) && e.defaultValue !== "");
}
function C1(e) {
  return e.startAdornment;
}
function w1(e) {
  return xe("MuiInputBase", e);
}
const T1 = be("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), ro = T1, E1 = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], gs = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${ie(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, bs = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, S1 = (e) => {
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
    type: g
  } = e, f = {
    root: ["root", `color${ie(o)}`, r && "disabled", a && "error", c && "fullWidth", i && "focused", l && "formControl", h && h !== "medium" && `size${ie(h)}`, d && "multiline", m && "adornedStart", s && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", g === "search" && "inputTypeSearch", d && "inputMultiline", h === "small" && "inputSizeSmall", u && "inputHiddenLabel", m && "inputAdornedStart", s && "inputAdornedEnd", p && "readOnly"]
  };
  return we(f, w1, t);
}, vs = oe("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: gs
})(({
  theme: e,
  ownerState: t
}) => v({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${ro.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && v({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), xs = oe("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: bs
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light", r = v({
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
  return v({
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
    [`label[data-shrink=false] + .${ro.formControl} &`]: {
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
    [`&.${ro.disabled}`]: {
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
}), P1 = /* @__PURE__ */ S.jsx(Id, {
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
}), _d = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r;
  const a = Ve({
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
    endAdornment: g,
    fullWidth: f = !1,
    id: C,
    inputComponent: T = "input",
    inputProps: E = {},
    inputRef: x,
    maxRows: w,
    minRows: y,
    multiline: R = !1,
    name: O,
    onBlur: L,
    onChange: _,
    onClick: V,
    onFocus: N,
    onKeyDown: B,
    onKeyUp: F,
    placeholder: D,
    readOnly: P,
    renderSuffix: $,
    rows: j,
    slotProps: M = {},
    slots: W = {},
    startAdornment: k,
    type: U = "text",
    value: G
  } = a, X = ae(a, E1), z = E.value != null ? E.value : G, {
    current: q
  } = b.useRef(z != null), Q = b.useRef(), Y = b.useCallback((Ee) => {
    process.env.NODE_ENV !== "production" && Ee && Ee.nodeName !== "INPUT" && !Ee.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), Z = Ue(Q, x, E.ref, Y), [ee, J] = b.useState(!1), K = Mn();
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (K)
      return K.registerEffect();
  }, [K]);
  const A = po({
    props: a,
    muiFormControl: K,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  A.focused = K ? K.focused : ee, b.useEffect(() => {
    !K && h && ee && (J(!1), L && L());
  }, [K, h, ee, L]);
  const H = K && K.onFilled, re = K && K.onEmpty, de = b.useCallback((Ee) => {
    jr(Ee) ? H && H() : re && re();
  }, [H, re]);
  ct(() => {
    q && de({
      value: z
    });
  }, [z, de, q]);
  const ge = (Ee) => {
    if (A.disabled) {
      Ee.stopPropagation();
      return;
    }
    N && N(Ee), E.onFocus && E.onFocus(Ee), K && K.onFocus ? K.onFocus(Ee) : J(!0);
  }, $e = (Ee) => {
    L && L(Ee), E.onBlur && E.onBlur(Ee), K && K.onBlur ? K.onBlur(Ee) : J(!1);
  }, ue = (Ee, ...me) => {
    if (!q) {
      const Ge = Ee.target || Q.current;
      if (Ge == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Qt(1));
      de({
        value: Ge.value
      });
    }
    E.onChange && E.onChange(Ee, ...me), _ && _(Ee, ...me);
  };
  b.useEffect(() => {
    de(Q.current);
  }, []);
  const fe = (Ee) => {
    Q.current && Ee.currentTarget === Ee.target && Q.current.focus(), V && V(Ee);
  };
  let te = T, se = E;
  R && te === "input" && (j ? (process.env.NODE_ENV !== "production" && (y || w) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), se = v({
    type: void 0,
    minRows: j,
    maxRows: j
  }, se)) : se = v({
    type: void 0,
    maxRows: w,
    minRows: y
  }, se), te = x1);
  const he = (Ee) => {
    de(Ee.animationName === "mui-auto-fill-cancel" ? Q.current : {
      value: "x"
    });
  };
  b.useEffect(() => {
    K && K.setAdornedStart(!!k);
  }, [K, k]);
  const Te = v({}, a, {
    color: A.color || "primary",
    disabled: A.disabled,
    endAdornment: g,
    error: A.error,
    focused: A.focused,
    formControl: K,
    fullWidth: f,
    hiddenLabel: A.hiddenLabel,
    multiline: R,
    size: A.size,
    startAdornment: k,
    type: U
  }), ve = S1(Te), Oe = W.root || u.Root || vs, qe = M.root || d.root || {}, De = W.input || u.Input || xs;
  return se = v({}, se, (r = M.input) != null ? r : d.input), /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [!m && P1, /* @__PURE__ */ S.jsxs(Oe, v({}, qe, !Xn(Oe) && {
      ownerState: v({}, Te, qe.ownerState)
    }, {
      ref: o,
      onClick: fe
    }, X, {
      className: ce(ve.root, qe.className, c, P && "MuiInputBase-readOnly"),
      children: [k, /* @__PURE__ */ S.jsx(ys.Provider, {
        value: null,
        children: /* @__PURE__ */ S.jsx(De, v({
          ownerState: Te,
          "aria-invalid": A.error,
          "aria-describedby": s,
          autoComplete: i,
          autoFocus: l,
          defaultValue: p,
          disabled: A.disabled,
          id: C,
          onAnimationStart: he,
          name: O,
          placeholder: D,
          readOnly: P,
          required: A.required,
          rows: j,
          value: z,
          onKeyDown: B,
          onKeyUp: F,
          type: U
        }, se, !Xn(De) && {
          as: te,
          ownerState: v({}, Te, se.ownerState)
        }, {
          ref: Z,
          className: ce(ve.input, se.className, P && "MuiInputBase-readOnly"),
          onBlur: $e,
          onChange: ue,
          onFocus: ge
        }))
      }), g, $ ? $(v({}, A, {
        startAdornment: k
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (_d.propTypes = {
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
  inputComponent: Lr,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: yt,
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
const Qa = _d;
function O1(e) {
  return xe("MuiInput", e);
}
const R1 = v({}, ro, be("MuiInput", ["root", "underline", "input"])), To = R1, D1 = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], M1 = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, a = we({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, O1, t);
  return v({}, t, a);
}, $1 = oe(vs, {
  shouldForwardProp: (e) => Bt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...gs(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), v({
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
    [`&.${To.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${To.error}`]: {
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
    [`&:hover:not(.${To.disabled}, .${To.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${To.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), k1 = oe(xs, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: bs
})({}), Ja = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i;
  const l = Ve({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: p = !1,
    inputComponent: h = "input",
    multiline: m = !1,
    slotProps: g,
    slots: f = {},
    type: C = "text"
  } = l, T = ae(l, D1), E = M1(l), w = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, y = g ?? d ? Et(g ?? d, w) : w, R = (r = (a = f.root) != null ? a : u.Root) != null ? r : $1, O = (s = (i = f.input) != null ? i : u.Input) != null ? s : k1;
  return /* @__PURE__ */ S.jsx(Qa, v({
    slots: {
      root: R,
      input: O
    },
    slotProps: y,
    fullWidth: p,
    inputComponent: h,
    multiline: m,
    ref: o,
    type: C
  }, T, {
    classes: E
  }));
});
process.env.NODE_ENV !== "production" && (Ja.propTypes = {
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
  inputRef: yt,
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
Ja.muiName = "Input";
const Nd = Ja;
function I1(e) {
  return xe("MuiFilledInput", e);
}
const _1 = v({}, ro, be("MuiFilledInput", ["root", "underline", "input"])), vn = _1, N1 = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], A1 = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, a = we({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, I1, t);
  return v({}, t, a);
}, j1 = oe(vs, {
  shouldForwardProp: (e) => Bt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...gs(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  const r = e.palette.mode === "light", a = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", s = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return v({
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
    [`&.${vn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : s
    },
    [`&.${vn.disabled}`]: {
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
    [`&.${vn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${vn.error}`]: {
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
    [`&:hover:not(.${vn.disabled}, .${vn.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${vn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && v({
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
}), F1 = oe(xs, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: bs
})(({
  theme: e,
  ownerState: t
}) => v({
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
})), ei = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i;
  const l = Ve({
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
    slots: g = {},
    type: f = "text"
  } = l, C = ae(l, N1), T = v({}, l, {
    fullWidth: d,
    inputComponent: p,
    multiline: h,
    type: f
  }), E = A1(l), x = {
    root: {
      ownerState: T
    },
    input: {
      ownerState: T
    }
  }, w = m ?? u ? Et(x, m ?? u) : x, y = (r = (a = g.root) != null ? a : c.Root) != null ? r : j1, R = (s = (i = g.input) != null ? i : c.Input) != null ? s : F1;
  return /* @__PURE__ */ S.jsx(Qa, v({
    slots: {
      root: y,
      input: R
    },
    componentsProps: w,
    fullWidth: d,
    inputComponent: p,
    multiline: h,
    ref: o,
    type: f
  }, C, {
    classes: E
  }));
});
process.env.NODE_ENV !== "production" && (ei.propTypes = {
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
  inputRef: yt,
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
ei.muiName = "Input";
const Ad = ei;
var Wl;
const V1 = ["children", "classes", "className", "label", "notched"], L1 = oe("fieldset", {
  shouldForwardProp: Bt
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
}), B1 = oe("legend", {
  shouldForwardProp: Bt
})(({
  ownerState: e,
  theme: t
}) => v({
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
}, e.withLabel && v({
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
function jd(e) {
  const {
    className: t,
    label: o,
    notched: r
  } = e, a = ae(e, V1), s = o != null && o !== "", i = v({}, e, {
    notched: r,
    withLabel: s
  });
  return /* @__PURE__ */ S.jsx(L1, v({
    "aria-hidden": !0,
    className: t,
    ownerState: i
  }, a, {
    children: /* @__PURE__ */ S.jsx(B1, {
      ownerState: i,
      children: s ? /* @__PURE__ */ S.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Wl || (Wl = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (jd.propTypes = {
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
function W1(e) {
  return xe("MuiOutlinedInput", e);
}
const z1 = v({}, ro, be("MuiOutlinedInput", ["root", "notchedOutline", "input"])), ln = z1, U1 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], Y1 = (e) => {
  const {
    classes: t
  } = e, r = we({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, W1, t);
  return v({}, t, r);
}, H1 = oe(vs, {
  shouldForwardProp: (e) => Bt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: gs
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return v({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${ln.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${ln.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : o
      }
    },
    [`&.${ln.focused} .${ln.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${ln.error} .${ln.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${ln.disabled} .${ln.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && v({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), q1 = oe(jd, {
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
}), K1 = oe(xs, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: bs
})(({
  theme: e,
  ownerState: t
}) => v({
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
})), ti = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i, l;
  const c = Ve({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: p = "input",
    label: h,
    multiline: m = !1,
    notched: g,
    slots: f = {},
    type: C = "text"
  } = c, T = ae(c, U1), E = Y1(c), x = Mn(), w = po({
    props: c,
    muiFormControl: x,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), y = v({}, c, {
    color: w.color || "primary",
    disabled: w.disabled,
    error: w.error,
    focused: w.focused,
    formControl: x,
    fullWidth: d,
    hiddenLabel: w.hiddenLabel,
    multiline: m,
    size: w.size,
    type: C
  }), R = (r = (a = f.root) != null ? a : u.Root) != null ? r : H1, O = (s = (i = f.input) != null ? i : u.Input) != null ? s : K1;
  return /* @__PURE__ */ S.jsx(Qa, v({
    slots: {
      root: R,
      input: O
    },
    renderSuffix: (L) => /* @__PURE__ */ S.jsx(q1, {
      ownerState: y,
      className: E.notchedOutline,
      label: h != null && h !== "" && w.required ? l || (l = /* @__PURE__ */ S.jsxs(b.Fragment, {
        children: [h, " ", "*"]
      })) : h,
      notched: typeof g < "u" ? g : !!(L.startAdornment || L.filled || L.focused)
    }),
    fullWidth: d,
    inputComponent: p,
    multiline: m,
    ref: o,
    type: C
  }, T, {
    classes: v({}, E, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (ti.propTypes = {
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
  inputRef: yt,
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
ti.muiName = "Input";
const Fd = ti;
function G1(e) {
  return xe("MuiFormLabel", e);
}
const X1 = be("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), _o = X1, Z1 = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Q1 = (e) => {
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
  return we(c, G1, t);
}, J1 = oe("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => v({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => v({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${_o.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${_o.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${_o.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), eT = oe("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${_o.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Vd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: a,
    className: s,
    component: i = "label"
  } = r, l = ae(r, Z1), c = Mn(), u = po({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = v({}, r, {
    color: u.color || "primary",
    component: i,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = Q1(d);
  return /* @__PURE__ */ S.jsxs(J1, v({
    as: i,
    ownerState: d,
    className: ce(p.root, s),
    ref: o
  }, l, {
    children: [a, u.required && /* @__PURE__ */ S.jsxs(eT, {
      ownerState: d,
      "aria-hidden": !0,
      className: p.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Vd.propTypes = {
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
const tT = Vd;
function nT(e) {
  return xe("MuiInputLabel", e);
}
be("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const oT = ["disableAnimation", "margin", "shrink", "variant", "className"], rT = (e) => {
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
  }, u = we(c, nT, t);
  return v({}, t, u);
}, sT = oe(tT, {
  shouldForwardProp: (e) => Bt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${_o.asterisk}`]: t.asterisk
    }, t.root, o.formControl && t.formControl, o.size === "small" && t.sizeSmall, o.shrink && t.shrink, !o.disableAnimation && t.animated, o.focused && t.focused, t[o.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => v({
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
}, t.variant === "filled" && v({
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
}, t.shrink && v({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && v({
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
}))), Ld = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: a = !1,
    shrink: s,
    className: i
  } = r, l = ae(r, oT), c = Mn();
  let u = s;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = po({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), p = v({}, r, {
    disableAnimation: a,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }), h = rT(p);
  return /* @__PURE__ */ S.jsx(sT, v({
    "data-shrink": u,
    ownerState: p,
    ref: o,
    className: ce(h.root, i)
  }, l, {
    classes: h
  }));
});
process.env.NODE_ENV !== "production" && (Ld.propTypes = {
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
const aT = Ld;
function iT(e) {
  return xe("MuiFormControl", e);
}
be("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const lT = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], cT = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, a = {
    root: ["root", o !== "none" && `margin${ie(o)}`, r && "fullWidth"]
  };
  return we(a, iT, t);
}, uT = oe("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => v({}, t.root, t[`margin${ie(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => v({
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
})), Bd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
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
    required: g = !1,
    size: f = "medium",
    variant: C = "outlined"
  } = r, T = ae(r, lT), E = v({}, r, {
    color: i,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: h,
    margin: m,
    required: g,
    size: f,
    variant: C
  }), x = cT(E), [w, y] = b.useState(() => {
    let F = !1;
    return a && b.Children.forEach(a, (D) => {
      if (!Yn(D, ["Input", "Select"]))
        return;
      const P = Yn(D, ["Select"]) ? D.props.input : D;
      P && C1(P.props) && (F = !0);
    }), F;
  }), [R, O] = b.useState(() => {
    let F = !1;
    return a && b.Children.forEach(a, (D) => {
      Yn(D, ["Input", "Select"]) && (jr(D.props, !0) || jr(D.props.inputProps, !0)) && (F = !0);
    }), F;
  }), [L, _] = b.useState(!1);
  c && L && _(!1);
  const V = d !== void 0 && !c ? d : L;
  let N;
  if (process.env.NODE_ENV !== "production") {
    const F = b.useRef(!1);
    N = () => (F.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), F.current = !0, () => {
      F.current = !1;
    });
  }
  const B = b.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: y,
    color: i,
    disabled: c,
    error: u,
    filled: R,
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
    required: g,
    variant: C
  }), [w, i, c, u, R, V, p, h, N, g, f, C]);
  return /* @__PURE__ */ S.jsx(ys.Provider, {
    value: B,
    children: /* @__PURE__ */ S.jsx(uT, v({
      as: l,
      ownerState: E,
      className: ce(x.root, s),
      ref: o
    }, T, {
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (Bd.propTypes = {
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
const dT = Bd;
function fT(e) {
  return xe("MuiFormHelperText", e);
}
const pT = be("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), zl = pT;
var Ul;
const hT = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], mT = (e) => {
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
  return we(u, fT, t);
}, yT = oe("p", {
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
}) => v({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${zl.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${zl.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), Wd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: a,
    className: s,
    component: i = "p"
  } = r, l = ae(r, hT), c = Mn(), u = po({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = v({}, r, {
    component: i,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = mT(d);
  return /* @__PURE__ */ S.jsx(yT, v({
    as: i,
    ownerState: d,
    className: ce(p.root, s),
    ref: o
  }, l, {
    children: a === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ul || (Ul = /* @__PURE__ */ S.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : a
  }));
});
process.env.NODE_ENV !== "production" && (Wd.propTypes = {
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
const gT = Wd, bT = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Ws(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function Yl(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function zd(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.indexOf(t.keys.join("")) === 0;
}
function Eo(e, t, o, r, a, s) {
  let i = !1, l = a(e, t, t ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (i)
        return !1;
      i = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !zd(l, s) || c)
      l = a(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Ud = /* @__PURE__ */ b.forwardRef(function(t, o) {
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
  } = t, h = ae(t, bT), m = b.useRef(null), g = b.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  ct(() => {
    a && m.current.focus();
  }, [a]), b.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (x, {
      direction: w
    }) => {
      const y = !m.current.style.width;
      if (x.clientHeight < m.current.clientHeight && y) {
        const R = `${uc(it(x))}px`;
        m.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = R, m.current.style.width = `calc(100% + ${R})`;
      }
      return m.current;
    }
  }), []);
  const f = (x) => {
    const w = m.current, y = x.key, R = it(w).activeElement;
    if (y === "ArrowDown")
      x.preventDefault(), Eo(w, R, u, c, Ws);
    else if (y === "ArrowUp")
      x.preventDefault(), Eo(w, R, u, c, Yl);
    else if (y === "Home")
      x.preventDefault(), Eo(w, null, u, c, Ws);
    else if (y === "End")
      x.preventDefault(), Eo(w, null, u, c, Yl);
    else if (y.length === 1) {
      const O = g.current, L = y.toLowerCase(), _ = performance.now();
      O.keys.length > 0 && (_ - O.lastTime > 500 ? (O.keys = [], O.repeating = !0, O.previousKeyMatched = !0) : O.repeating && L !== O.keys[0] && (O.repeating = !1)), O.lastTime = _, O.keys.push(L);
      const V = R && !O.repeating && zd(R, O);
      O.previousKeyMatched && (V || Eo(w, R, !1, c, Ws, O)) ? x.preventDefault() : O.previousKeyMatched = !1;
    }
    d && d(x);
  }, C = Ue(m, o);
  let T = -1;
  b.Children.forEach(i, (x, w) => {
    if (!/* @__PURE__ */ b.isValidElement(x)) {
      T === w && (T += 1, T >= i.length && (T = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && No.isFragment(x) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), x.props.disabled || (p === "selectedMenu" && x.props.selected || T === -1) && (T = w), T === w && (x.props.disabled || x.props.muiSkipListHighlight || x.type.muiSkipListHighlight) && (T += 1, T >= i.length && (T = -1));
  });
  const E = b.Children.map(i, (x, w) => {
    if (w === T) {
      const y = {};
      return s && (y.autoFocus = !0), x.props.tabIndex === void 0 && p === "selectedMenu" && (y.tabIndex = 0), /* @__PURE__ */ b.cloneElement(x, y);
    }
    return x;
  });
  return /* @__PURE__ */ S.jsx(gd, v({
    role: "menu",
    ref: C,
    className: l,
    onKeyDown: f,
    tabIndex: a ? 0 : -1
  }, h, {
    children: E
  }));
});
process.env.NODE_ENV !== "production" && (Ud.propTypes = {
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
const vT = Ud;
function xT(e) {
  return xe("MuiPopover", e);
}
be("MuiPopover", ["root", "paper"]);
const CT = ["onEntering"], wT = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], TT = ["slotProps"];
function Hl(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function ql(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function Kl(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function wr(e) {
  return typeof e == "function" ? e() : e;
}
const ET = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    paper: ["paper"]
  }, xT, t);
}, ST = oe(Lu, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Yd = oe(us, {
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
}), Hd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s;
  const i = Ve({
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
    container: g,
    elevation: f = 8,
    marginThreshold: C = 16,
    open: T,
    PaperProps: E = {},
    slots: x,
    slotProps: w,
    transformOrigin: y = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: R = Uu,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: L
    } = {},
    disableScrollLock: _ = !1
  } = i, V = ae(i.TransitionProps, CT), N = ae(i, wT), B = (r = w == null ? void 0 : w.paper) != null ? r : E, F = b.useRef(), D = Ue(F, B.ref), P = v({}, i, {
    anchorOrigin: u,
    anchorReference: p,
    elevation: f,
    marginThreshold: C,
    externalPaperSlotProps: B,
    transformOrigin: y,
    TransitionComponent: R,
    transitionDuration: O,
    TransitionProps: V
  }), $ = ET(P), j = b.useCallback(() => {
    if (p === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const H = wr(c), re = H && H.nodeType === 1 ? H : it(F.current).body, de = re.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const ge = re.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && ge.top === 0 && ge.left === 0 && ge.right === 0 && ge.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: de.top + Hl(de, u.vertical),
      left: de.left + ql(de, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, p]), M = b.useCallback((H) => ({
    vertical: Hl(H, y.vertical),
    horizontal: ql(H, y.horizontal)
  }), [y.horizontal, y.vertical]), W = b.useCallback((H) => {
    const re = {
      width: H.offsetWidth,
      height: H.offsetHeight
    }, de = M(re);
    if (p === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Kl(de)
      };
    const ge = j();
    let $e = ge.top - de.vertical, ue = ge.left - de.horizontal;
    const fe = $e + re.height, te = ue + re.width, se = un(wr(c)), he = se.innerHeight - C, Te = se.innerWidth - C;
    if (C !== null && $e < C) {
      const ve = $e - C;
      $e -= ve, de.vertical += ve;
    } else if (C !== null && fe > he) {
      const ve = fe - he;
      $e -= ve, de.vertical += ve;
    }
    if (process.env.NODE_ENV !== "production" && re.height > he && re.height && he && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${re.height - he}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), C !== null && ue < C) {
      const ve = ue - C;
      ue -= ve, de.horizontal += ve;
    } else if (te > Te) {
      const ve = te - Te;
      ue -= ve, de.horizontal += ve;
    }
    return {
      top: `${Math.round($e)}px`,
      left: `${Math.round(ue)}px`,
      transformOrigin: Kl(de)
    };
  }, [c, p, j, M, C]), [k, U] = b.useState(T), G = b.useCallback(() => {
    const H = F.current;
    if (!H)
      return;
    const re = W(H);
    re.top !== null && (H.style.top = re.top), re.left !== null && (H.style.left = re.left), H.style.transformOrigin = re.transformOrigin, U(!0);
  }, [W]);
  b.useEffect(() => (_ && window.addEventListener("scroll", G), () => window.removeEventListener("scroll", G)), [c, _, G]);
  const X = (H, re) => {
    L && L(H, re), G();
  }, z = () => {
    U(!1);
  };
  b.useEffect(() => {
    T && G();
  }), b.useImperativeHandle(l, () => T ? {
    updatePosition: () => {
      G();
    }
  } : null, [T, G]), b.useEffect(() => {
    if (!T)
      return;
    const H = fa(() => {
      G();
    }), re = un(c);
    return re.addEventListener("resize", H), () => {
      H.clear(), re.removeEventListener("resize", H);
    };
  }, [c, T, G]);
  let q = O;
  O === "auto" && !R.muiSupportAuto && (q = void 0);
  const Q = g || (c ? it(wr(c)).body : void 0), Y = (a = x == null ? void 0 : x.root) != null ? a : ST, Z = (s = x == null ? void 0 : x.paper) != null ? s : Yd, ee = En({
    elementType: Z,
    externalSlotProps: v({}, B, {
      style: k ? B.style : v({}, B.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: f,
      ref: D
    },
    ownerState: P,
    className: ce($.paper, B == null ? void 0 : B.className)
  }), J = En({
    elementType: Y,
    externalSlotProps: (w == null ? void 0 : w.root) || {},
    externalForwardedProps: N,
    additionalProps: {
      ref: o,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: Q,
      open: T
    },
    ownerState: P,
    className: ce($.root, m)
  }), {
    slotProps: K
  } = J, A = ae(J, TT);
  return /* @__PURE__ */ S.jsx(Y, v({}, A, !Xn(Y) && {
    slotProps: K,
    disableScrollLock: _
  }, {
    children: /* @__PURE__ */ S.jsx(R, v({
      appear: !0,
      in: T,
      onEntering: X,
      onExited: z,
      timeout: q
    }, V, {
      children: /* @__PURE__ */ S.jsx(Z, v({}, ee, {
        children: h
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Hd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: yt,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: fn(n.oneOfType([Jt, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = wr(e.anchorEl);
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
  container: n.oneOfType([Jt, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: pc,
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
    component: Lr
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
const PT = Hd;
function OT(e) {
  return xe("MuiMenu", e);
}
be("MuiMenu", ["root", "paper", "list"]);
const RT = ["onEntering"], DT = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], MT = {
  vertical: "top",
  horizontal: "right"
}, $T = {
  vertical: "top",
  horizontal: "left"
}, kT = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, OT, t);
}, IT = oe(PT, {
  shouldForwardProp: (e) => Bt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), _T = oe(Yd, {
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
}), NT = oe(vT, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), qd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a;
  const s = Ve({
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
    PopoverClasses: g,
    transitionDuration: f = "auto",
    TransitionProps: {
      onEntering: C
    } = {},
    variant: T = "selectedMenu",
    slots: E = {},
    slotProps: x = {}
  } = s, w = ae(s.TransitionProps, RT), y = ae(s, DT), R = Mg(), O = v({}, s, {
    autoFocus: i,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: C,
    PaperProps: m,
    transitionDuration: f,
    TransitionProps: w,
    variant: T
  }), L = kT(O), _ = i && !u && h, V = b.useRef(null), N = (M, W) => {
    V.current && V.current.adjustStyleForScrollbar(M, {
      direction: R ? "rtl" : "ltr"
    }), C && C(M, W);
  }, B = (M) => {
    M.key === "Tab" && (M.preventDefault(), p && p(M, "tabKeyDown"));
  };
  let F = -1;
  b.Children.map(l, (M, W) => {
    /* @__PURE__ */ b.isValidElement(M) && (process.env.NODE_ENV !== "production" && No.isFragment(M) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), M.props.disabled || (T === "selectedMenu" && M.props.selected || F === -1) && (F = W));
  });
  const D = (r = E.paper) != null ? r : _T, P = (a = x.paper) != null ? a : m, $ = En({
    elementType: E.root,
    externalSlotProps: x.root,
    ownerState: O,
    className: [L.root, c]
  }), j = En({
    elementType: D,
    externalSlotProps: P,
    ownerState: O,
    className: L.paper
  });
  return /* @__PURE__ */ S.jsx(IT, v({
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: R ? "right" : "left"
    },
    transformOrigin: R ? MT : $T,
    slots: {
      paper: D,
      root: E.root
    },
    slotProps: {
      root: $,
      paper: j
    },
    open: h,
    ref: o,
    transitionDuration: f,
    TransitionProps: v({
      onEntering: N
    }, w),
    ownerState: O
  }, y, {
    classes: g,
    children: /* @__PURE__ */ S.jsx(NT, v({
      onKeyDown: B,
      actions: V,
      autoFocus: i && (F === -1 || u),
      autoFocusItem: _,
      variant: T
    }, d, {
      className: ce(L.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (qd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([Jt, n.func]),
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
const AT = qd;
function jT(e) {
  return xe("MuiNativeSelect", e);
}
const FT = be("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), ni = FT, VT = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], LT = (e) => {
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
  return we(l, jT, t);
}, Kd = ({
  ownerState: e,
  theme: t
}) => v({
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
  "&:focus": v({}, t.vars ? {
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
  [`&.${ni.disabled}`]: {
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
}), BT = oe("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Bt,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${ni.multiple}`]: t.multiple
    }];
  }
})(Kd), Gd = ({
  ownerState: e,
  theme: t
}) => v({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${ni.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), WT = oe("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${ie(o.variant)}`], o.open && t.iconOpen];
  }
})(Gd), Xd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const {
    className: r,
    disabled: a,
    error: s,
    IconComponent: i,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ae(t, VT), d = v({}, t, {
    disabled: a,
    variant: c,
    error: s
  }), p = LT(d);
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx(BT, v({
      ownerState: d,
      className: ce(p.select, r),
      disabled: a,
      ref: l || o
    }, u)), t.multiple ? null : /* @__PURE__ */ S.jsx(WT, {
      as: i,
      ownerState: d,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (Xd.propTypes = {
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
  inputRef: yt,
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
const zT = Xd;
function UT(e) {
  return xe("MuiSelect", e);
}
const YT = be("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), So = YT;
var Gl;
const HT = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], qT = oe("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${So.select}`]: t.select
      },
      {
        [`&.${So.select}`]: t[o.variant]
      },
      {
        [`&.${So.error}`]: t.error
      },
      {
        [`&.${So.multiple}`]: t.multiple
      }
    ];
  }
})(Kd, {
  // Win specificity over the input base
  [`&.${So.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), KT = oe("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${ie(o.variant)}`], o.open && t.iconOpen];
  }
})(Gd), GT = oe("input", {
  shouldForwardProp: (e) => eu(e) && e !== "classes",
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
function Xl(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function XT(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const ZT = (e) => {
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
  return we(l, UT, t);
}, Zd = /* @__PURE__ */ b.forwardRef(function(t, o) {
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
    error: g = !1,
    IconComponent: f,
    inputRef: C,
    labelId: T,
    MenuProps: E = {},
    multiple: x,
    name: w,
    onBlur: y,
    onChange: R,
    onClose: O,
    onFocus: L,
    onOpen: _,
    open: V,
    readOnly: N,
    renderValue: B,
    SelectDisplayProps: F = {},
    tabIndex: D,
    value: P,
    variant: $ = "standard"
  } = t, j = ae(t, HT), [M, W] = Lt({
    controlled: P,
    default: p,
    name: "Select"
  }), [k, U] = Lt({
    controlled: V,
    default: d,
    name: "Select"
  }), G = b.useRef(null), X = b.useRef(null), [z, q] = b.useState(null), {
    current: Q
  } = b.useRef(V != null), [Y, Z] = b.useState(), ee = Ue(o, C), J = b.useCallback((ye) => {
    X.current = ye, ye && q(ye);
  }, []), K = z == null ? void 0 : z.parentNode;
  b.useImperativeHandle(ee, () => ({
    focus: () => {
      X.current.focus();
    },
    node: G.current,
    value: M
  }), [M]), b.useEffect(() => {
    d && k && z && !Q && (Z(l ? null : K.clientWidth), X.current.focus());
  }, [z, l]), b.useEffect(() => {
    i && X.current.focus();
  }, [i]), b.useEffect(() => {
    if (!T)
      return;
    const ye = it(X.current).getElementById(T);
    if (ye) {
      const Se = () => {
        getSelection().isCollapsed && X.current.focus();
      };
      return ye.addEventListener("click", Se), () => {
        ye.removeEventListener("click", Se);
      };
    }
  }, [T]);
  const A = (ye, Se) => {
    ye ? _ && _(Se) : O && O(Se), Q || (Z(l ? null : K.clientWidth), U(ye));
  }, H = (ye) => {
    ye.button === 0 && (ye.preventDefault(), X.current.focus(), A(!0, ye));
  }, re = (ye) => {
    A(!1, ye);
  }, de = b.Children.toArray(c), ge = (ye) => {
    const Se = de.find((Je) => Je.props.value === ye.target.value);
    Se !== void 0 && (W(Se.props.value), R && R(ye, Se));
  }, $e = (ye) => (Se) => {
    let Je;
    if (Se.currentTarget.hasAttribute("tabindex")) {
      if (x) {
        Je = Array.isArray(M) ? M.slice() : [];
        const zt = M.indexOf(ye.props.value);
        zt === -1 ? Je.push(ye.props.value) : Je.splice(zt, 1);
      } else
        Je = ye.props.value;
      if (ye.props.onClick && ye.props.onClick(Se), M !== Je && (W(Je), R)) {
        const zt = Se.nativeEvent || Se, sn = new zt.constructor(zt.type, zt);
        Object.defineProperty(sn, "target", {
          writable: !0,
          value: {
            value: Je,
            name: w
          }
        }), R(sn, ye);
      }
      x || A(!1, Se);
    }
  }, ue = (ye) => {
    N || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(ye.key) !== -1 && (ye.preventDefault(), A(!0, ye));
  }, fe = z !== null && k, te = (ye) => {
    !fe && y && (Object.defineProperty(ye, "target", {
      writable: !0,
      value: {
        value: M,
        name: w
      }
    }), y(ye));
  };
  delete j["aria-invalid"];
  let se, he;
  const Te = [];
  let ve = !1, Oe = !1;
  (jr({
    value: M
  }) || m) && (B ? se = B(M) : ve = !0);
  const qe = de.map((ye) => {
    if (!/* @__PURE__ */ b.isValidElement(ye))
      return null;
    process.env.NODE_ENV !== "production" && No.isFragment(ye) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let Se;
    if (x) {
      if (!Array.isArray(M))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Qt(2));
      Se = M.some((Je) => Xl(Je, ye.props.value)), Se && ve && Te.push(ye.props.children);
    } else
      Se = Xl(M, ye.props.value), Se && ve && (he = ye.props.children);
    return Se && (Oe = !0), /* @__PURE__ */ b.cloneElement(ye, {
      "aria-selected": Se ? "true" : "false",
      onClick: $e(ye),
      onKeyUp: (Je) => {
        Je.key === " " && Je.preventDefault(), ye.props.onKeyUp && ye.props.onKeyUp(Je);
      },
      role: "option",
      selected: Se,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": ye.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    if (!Oe && !x && M !== "") {
      const ye = de.map((Se) => Se.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${M}\` for the select ${w ? `(name="${w}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${ye.filter((Se) => Se != null).map((Se) => `\`${Se}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Oe, de, x, w, M]), ve && (x ? Te.length === 0 ? se = null : se = Te.reduce((ye, Se, Je) => (ye.push(Se), Je < Te.length - 1 && ye.push(", "), ye), []) : se = he);
  let De = Y;
  !l && Q && z && (De = K.clientWidth);
  let Ee;
  typeof D < "u" ? Ee = D : Ee = h ? null : 0;
  const me = F.id || (w ? `mui-component-select-${w}` : void 0), Ge = v({}, t, {
    variant: $,
    value: M,
    open: fe,
    error: g
  }), wt = ZT(Ge), gt = v({}, E.PaperProps, (r = E.slotProps) == null ? void 0 : r.paper), ut = On();
  return /* @__PURE__ */ S.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ S.jsx(qT, v({
      ref: J,
      tabIndex: Ee,
      role: "combobox",
      "aria-controls": ut,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": fe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": s,
      "aria-labelledby": [T, me].filter(Boolean).join(" ") || void 0,
      "aria-describedby": a,
      onKeyDown: ue,
      onMouseDown: h || N ? null : H,
      onBlur: te,
      onFocus: L
    }, F, {
      ownerState: Ge,
      className: ce(F.className, wt.select, u),
      id: me,
      children: XT(se) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Gl || (Gl = /* @__PURE__ */ S.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : se
    })), /* @__PURE__ */ S.jsx(GT, v({
      "aria-invalid": g,
      value: Array.isArray(M) ? M.join(",") : M,
      name: w,
      ref: G,
      "aria-hidden": !0,
      onChange: ge,
      tabIndex: -1,
      disabled: h,
      className: wt.nativeInput,
      autoFocus: i,
      ownerState: Ge
    }, j)), /* @__PURE__ */ S.jsx(KT, {
      as: f,
      className: wt.icon,
      ownerState: Ge
    }), /* @__PURE__ */ S.jsx(AT, v({
      id: `menu-${w || ""}`,
      anchorEl: K,
      open: fe,
      onClose: re,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, E, {
      MenuListProps: v({
        "aria-labelledby": T,
        role: "listbox",
        "aria-multiselectable": x ? "true" : void 0,
        disableListWrap: !0,
        id: ut
      }, E.MenuListProps),
      slotProps: v({}, E.slotProps, {
        paper: v({}, gt, {
          style: v({
            minWidth: De
          }, gt != null ? gt.style : null)
        })
      }),
      children: qe
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Zd.propTypes = {
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
  inputRef: yt,
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
const QT = Zd, JT = Wt(/* @__PURE__ */ S.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), eE = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], tE = ["root"], nE = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, oi = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Bt(e) && e !== "variant",
  slot: "Root"
}, oE = oe(Nd, oi)(""), rE = oe(Fd, oi)(""), sE = oe(Ad, oi)(""), ri = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: a = !1,
    children: s,
    classes: i = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = JT,
    id: p,
    input: h,
    inputProps: m,
    label: g,
    labelId: f,
    MenuProps: C,
    multiple: T = !1,
    native: E = !1,
    onClose: x,
    onOpen: w,
    open: y,
    renderValue: R,
    SelectDisplayProps: O,
    variant: L = "outlined"
  } = r, _ = ae(r, eE), V = E ? zT : QT, N = Mn(), B = po({
    props: r,
    muiFormControl: N,
    states: ["variant", "error"]
  }), F = B.variant || L, D = v({}, r, {
    variant: F,
    classes: i
  }), P = nE(D), $ = ae(P, tE), j = h || {
    standard: /* @__PURE__ */ S.jsx(oE, {
      ownerState: D
    }),
    outlined: /* @__PURE__ */ S.jsx(rE, {
      label: g,
      ownerState: D
    }),
    filled: /* @__PURE__ */ S.jsx(sE, {
      ownerState: D
    })
  }[F], M = Ue(o, Ho(j));
  return /* @__PURE__ */ S.jsx(b.Fragment, {
    children: /* @__PURE__ */ b.cloneElement(j, v({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: V,
      inputProps: v({
        children: s,
        error: B.error,
        IconComponent: d,
        variant: F,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: T
      }, E ? {
        id: p
      } : {
        autoWidth: a,
        defaultOpen: c,
        displayEmpty: u,
        labelId: f,
        MenuProps: C,
        onClose: x,
        onOpen: w,
        open: y,
        renderValue: R,
        SelectDisplayProps: v({
          id: p
        }, O)
      }, m, {
        classes: m ? Et($, m.classes) : $
      }, h ? h.props.inputProps : {})
    }, (T && E || u) && F === "outlined" ? {
      notched: !0
    } : {}, {
      ref: M,
      className: ce(j.props.className, l, P.root)
    }, !h && {
      variant: F
    }, _))
  });
});
process.env.NODE_ENV !== "production" && (ri.propTypes = {
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
ri.muiName = "Select";
const aE = ri;
function iE(e) {
  return xe("MuiTextField", e);
}
be("MuiTextField", ["root"]);
const lE = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], cE = {
  standard: Nd,
  filled: Ad,
  outlined: Fd
}, uE = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"]
  }, iE, t);
}, dE = oe(dT, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Qd = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = Ve({
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
    helperText: g,
    id: f,
    InputLabelProps: C,
    inputProps: T,
    InputProps: E,
    inputRef: x,
    label: w,
    maxRows: y,
    minRows: R,
    multiline: O = !1,
    name: L,
    onBlur: _,
    onChange: V,
    onFocus: N,
    placeholder: B,
    required: F = !1,
    rows: D,
    select: P = !1,
    SelectProps: $,
    type: j,
    value: M,
    variant: W = "outlined"
  } = r, k = ae(r, lE), U = v({}, r, {
    autoFocus: s,
    color: c,
    disabled: d,
    error: p,
    fullWidth: m,
    multiline: O,
    required: F,
    select: P,
    variant: W
  }), G = uE(U);
  process.env.NODE_ENV !== "production" && P && !i && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const X = {};
  W === "outlined" && (C && typeof C.shrink < "u" && (X.notched = C.shrink), X.label = w), P && ((!$ || !$.native) && (X.id = void 0), X["aria-describedby"] = void 0);
  const z = On(f), q = g && z ? `${z}-helper-text` : void 0, Q = w && z ? `${z}-label` : void 0, Y = cE[W], Z = /* @__PURE__ */ S.jsx(Y, v({
    "aria-describedby": q,
    autoComplete: a,
    autoFocus: s,
    defaultValue: u,
    fullWidth: m,
    multiline: O,
    name: L,
    rows: D,
    maxRows: y,
    minRows: R,
    type: j,
    value: M,
    id: z,
    inputRef: x,
    onBlur: _,
    onChange: V,
    onFocus: N,
    placeholder: B,
    inputProps: T
  }, X, E));
  return /* @__PURE__ */ S.jsxs(dE, v({
    className: ce(G.root, l),
    disabled: d,
    error: p,
    fullWidth: m,
    ref: o,
    required: F,
    color: c,
    variant: W,
    ownerState: U
  }, k, {
    children: [w != null && w !== "" && /* @__PURE__ */ S.jsx(aT, v({
      htmlFor: z,
      id: Q
    }, C, {
      children: w
    })), P ? /* @__PURE__ */ S.jsx(aE, v({
      "aria-describedby": q,
      id: z,
      labelId: Q,
      value: M,
      input: Z
    }, $, {
      children: i
    })) : Z, g && /* @__PURE__ */ S.jsx(gT, v({
      id: q
    }, h, {
      children: g
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Qd.propTypes = {
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
  inputRef: yt,
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
const fE = Qd, pE = (e) => {
  var t, o, r;
  const a = Ye(), s = Jo();
  return v({}, e, {
    disablePast: (t = e.disablePast) != null ? t : !1,
    disableFuture: (o = e.disableFuture) != null ? o : !1,
    format: (r = e.format) != null ? r : a.formats.keyboardDate,
    minDate: Nt(a, e.minDate, s.minDate),
    maxDate: Nt(a, e.maxDate, s.maxDate)
  });
}, hE = ({
  props: e,
  inputRef: t
}) => {
  const o = pE(e), {
    forwardedProps: r,
    internalProps: a
  } = kw(o, "date");
  return DC({
    inputRef: t,
    forwardedProps: r,
    internalProps: a,
    valueManager: tn,
    fieldValueManager: Cb,
    validator: ms,
    valueType: "date"
  });
}, mE = ["ownerState"], yE = ({
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
  const g = hn(), f = (c = (u = a == null ? void 0 : a.clearButton) != null ? u : i == null ? void 0 : i.ClearButton) != null ? c : cs, C = st({
    elementType: f,
    externalSlotProps: (d = s == null ? void 0 : s.clearButton) != null ? d : l == null ? void 0 : l.clearButton,
    ownerState: {},
    className: "clearButton",
    additionalProps: {
      title: g.fieldClearLabel
    }
  }), T = ae(C, mE), E = (p = (h = a == null ? void 0 : a.clearIcon) != null ? h : i == null ? void 0 : i.ClearIcon) != null ? p : Ev, x = st({
    elementType: E,
    externalSlotProps: (m = s == null ? void 0 : s.clearIcon) != null ? m : l == null ? void 0 : l.clearIcon,
    ownerState: {}
  }), w = v({}, o, {
    endAdornment: /* @__PURE__ */ S.jsxs(b.Fragment, {
      children: [e && /* @__PURE__ */ S.jsx($d, {
        position: "end",
        sx: {
          marginRight: o != null && o.endAdornment ? -1 : -1.5
        },
        children: /* @__PURE__ */ S.jsx(f, v({}, T, {
          onClick: r,
          children: /* @__PURE__ */ S.jsx(E, v({
            fontSize: "small"
          }, x))
        }))
      }), o == null ? void 0 : o.endAdornment]
    })
  }), y = v({}, t, {
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
    InputProps: w,
    fieldProps: y
  };
}, gE = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"], bE = ["inputRef"], vE = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly", "clearable", "onClear"], si = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s;
  const i = lt({
    props: t,
    name: "MuiDateField"
  }), {
    components: l,
    componentsProps: c,
    slots: u,
    slotProps: d,
    InputProps: p,
    inputProps: h
  } = i, m = ae(i, gE), g = i, f = (r = (a = u == null ? void 0 : u.textField) != null ? a : l == null ? void 0 : l.TextField) != null ? r : fE, C = st({
    elementType: f,
    externalSlotProps: (s = d == null ? void 0 : d.textField) != null ? s : c == null ? void 0 : c.textField,
    externalForwardedProps: m,
    ownerState: g
  }), {
    inputRef: T
  } = C, E = ae(C, bE);
  E.inputProps = v({}, h, E.inputProps), E.InputProps = v({}, p, E.InputProps);
  const x = hE({
    props: E,
    inputRef: T
  }), {
    ref: w,
    onPaste: y,
    onKeyDown: R,
    inputMode: O,
    readOnly: L,
    clearable: _,
    onClear: V
  } = x, N = ae(x, vE), {
    InputProps: B,
    fieldProps: F
  } = yE({
    onClear: V,
    clearable: _,
    fieldProps: N,
    InputProps: N.InputProps,
    slots: u,
    slotProps: d,
    components: l,
    componentsProps: c
  });
  return /* @__PURE__ */ S.jsx(f, v({
    ref: o
  }, F, {
    InputProps: v({}, B, {
      readOnly: L
    }),
    inputProps: v({}, N.inputProps, {
      inputMode: O,
      onPaste: y,
      onKeyDown: R,
      ref: w
    })
  }));
});
process.env.NODE_ENV !== "production" && (si.propTypes = {
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
  inputRef: yt,
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
const xE = (e) => xe("MuiPickersFadeTransitionGroup", e);
be("MuiPickersFadeTransitionGroup", ["root"]);
const CE = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"]
  }, xE, t);
}, wE = oe(ja, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "block",
  position: "relative"
});
function Jd(e) {
  const t = lt({
    props: e,
    name: "MuiPickersFadeTransitionGroup"
  }), {
    children: o,
    className: r,
    reduceAnimations: a,
    transKey: s
  } = t, i = CE(t), l = Vt();
  return a ? o : /* @__PURE__ */ S.jsx(wE, {
    className: ce(i.root, r),
    children: /* @__PURE__ */ S.jsx(fo, {
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
function TE(e) {
  return xe("MuiPickersMonth", e);
}
const fr = be("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]), EE = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "aria-label", "monthsPerRow"], SE = (e) => {
  const {
    disabled: t,
    selected: o,
    classes: r
  } = e;
  return we({
    root: ["root"],
    monthButton: ["monthButton", t && "disabled", o && "selected"]
  }, TE, r);
}, PE = oe("div", {
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
})), OE = oe("button", {
  name: "MuiPickersMonth",
  slot: "MonthButton",
  overridesResolver: (e, t) => [t.monthButton, {
    [`&.${fr.disabled}`]: t.disabled
  }, {
    [`&.${fr.selected}`]: t.selected
  }]
})(({
  theme: e
}) => v({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Qn(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Qn(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${fr.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${fr.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), RE = /* @__PURE__ */ b.memo(function(t) {
  const o = lt({
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
    "aria-label": g
    // We don't want to forward this prop to the root element
  } = o, f = ae(o, EE), C = b.useRef(null), T = SE(o);
  return ct(() => {
    if (r) {
      var E;
      (E = C.current) == null || E.focus();
    }
  }, [r]), /* @__PURE__ */ S.jsx(PE, v({
    className: T.root,
    ownerState: o
  }, f, {
    children: /* @__PURE__ */ S.jsx(OE, {
      ref: C,
      disabled: s,
      type: "button",
      role: "radio",
      tabIndex: s ? -1 : c,
      "aria-current": m,
      "aria-checked": i,
      "aria-label": g,
      onClick: (E) => u(E, l),
      onKeyDown: (E) => d(E, l),
      onFocus: (E) => p(E, l),
      onBlur: (E) => h(E, l),
      className: T.monthButton,
      ownerState: o,
      children: a
    })
  }));
});
function DE(e) {
  return xe("MuiMonthCalendar", e);
}
be("MuiMonthCalendar", ["root"]);
const ME = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId"], $E = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"]
  }, DE, t);
};
function kE(e, t) {
  const o = Ye(), r = Jo(), a = lt({
    props: e,
    name: t
  });
  return v({
    disableFuture: !1,
    disablePast: !1
  }, a, {
    minDate: Nt(o, a.minDate, r.minDate),
    maxDate: Nt(o, a.maxDate, r.maxDate)
  });
}
const IE = oe("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "stretch",
  padding: "0 4px",
  width: fs,
  // avoid padding increasing width over defined
  boxSizing: "border-box"
}), ef = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = kE(t, "MuiMonthCalendar"), {
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
    shouldDisableMonth: g,
    readOnly: f,
    disableHighlightToday: C,
    autoFocus: T = !1,
    onMonthFocus: E,
    hasFocus: x,
    onFocusedViewChange: w,
    monthsPerRow: y = 3,
    timezone: R,
    gridLabelId: O
  } = r, L = ae(r, ME), {
    value: _,
    handleValueChange: V,
    timezone: N
  } = Ga({
    name: "MonthCalendar",
    timezone: R,
    value: s,
    defaultValue: i,
    onChange: m,
    valueManager: tn
  }), B = as(N), F = Qo(), D = Ye(), P = b.useMemo(
    () => tn.getInitialReferenceValue({
      value: _,
      utils: D,
      props: r,
      timezone: N,
      referenceDate: l,
      granularity: Kt.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), $ = r, j = $E($), M = b.useMemo(() => D.getMonth(B), [D, B]), W = b.useMemo(() => _ != null ? D.getMonth(_) : C ? null : D.getMonth(P), [_, D, C, P]), [k, U] = b.useState(() => W || M), [G, X] = Lt({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: x,
    default: T ?? !1
  }), z = pe((K) => {
    X(K), w && w(K);
  }), q = b.useCallback((K) => {
    const A = D.startOfMonth(d && D.isAfter(B, h) ? B : h), H = D.startOfMonth(u && D.isBefore(B, p) ? B : p), re = D.startOfMonth(K);
    return D.isBefore(re, A) || D.isAfter(re, H) ? !0 : g ? g(re) : !1;
  }, [u, d, p, h, B, g, D]), Q = pe((K, A) => {
    if (f)
      return;
    const H = D.setMonth(_ ?? P, A);
    V(H);
  }), Y = pe((K) => {
    q(D.setMonth(_ ?? P, K)) || (U(K), z(!0), E && E(K));
  });
  b.useEffect(() => {
    U((K) => W !== null && K !== W ? W : K);
  }, [W]);
  const Z = pe((K, A) => {
    switch (K.key) {
      case "ArrowUp":
        Y((12 + A - 3) % 12), K.preventDefault();
        break;
      case "ArrowDown":
        Y((12 + A + 3) % 12), K.preventDefault();
        break;
      case "ArrowLeft":
        Y((12 + A + (F.direction === "ltr" ? -1 : 1)) % 12), K.preventDefault();
        break;
      case "ArrowRight":
        Y((12 + A + (F.direction === "ltr" ? 1 : -1)) % 12), K.preventDefault();
        break;
    }
  }), ee = pe((K, A) => {
    Y(A);
  }), J = pe((K, A) => {
    k === A && z(!1);
  });
  return /* @__PURE__ */ S.jsx(IE, v({
    ref: o,
    className: ce(j.root, a),
    ownerState: $,
    role: "radiogroup",
    "aria-labelledby": O
  }, L, {
    children: Da(D, _ ?? P).map((K) => {
      const A = D.getMonth(K), H = D.format(K, "monthShort"), re = D.format(K, "month"), de = A === W, ge = c || q(K);
      return /* @__PURE__ */ S.jsx(RE, {
        selected: de,
        value: A,
        onClick: Q,
        onKeyDown: Z,
        autoFocus: G && A === k,
        disabled: ge,
        tabIndex: A === k ? 0 : -1,
        onFocus: ee,
        onBlur: J,
        "aria-current": M === A ? "date" : void 0,
        "aria-label": re,
        monthsPerRow: y,
        children: H
      }, H);
    })
  }));
});
process.env.NODE_ENV !== "production" && (ef.propTypes = {
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
function _E(e) {
  return xe("MuiPickersYear", e);
}
const pr = be("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]), NE = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"], AE = (e) => {
  const {
    disabled: t,
    selected: o,
    classes: r
  } = e;
  return we({
    root: ["root"],
    yearButton: ["yearButton", t && "disabled", o && "selected"]
  }, _E, r);
}, jE = oe("div", {
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
})), FE = oe("button", {
  name: "MuiPickersYear",
  slot: "YearButton",
  overridesResolver: (e, t) => [t.yearButton, {
    [`&.${pr.disabled}`]: t.disabled
  }, {
    [`&.${pr.selected}`]: t.selected
  }]
})(({
  theme: e
}) => v({
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
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.focusOpacity})` : Qn(e.palette.action.active, e.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Qn(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${pr.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${pr.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), VE = /* @__PURE__ */ b.memo(function(t) {
  const o = lt({
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
    "aria-current": g
    // We don't want to forward this prop to the root element
  } = o, f = ae(o, NE), C = b.useRef(null), T = AE(o);
  return b.useEffect(() => {
    r && C.current.focus();
  }, [r]), /* @__PURE__ */ S.jsx(jE, v({
    className: ce(T.root, a),
    ownerState: o
  }, f, {
    children: /* @__PURE__ */ S.jsx(FE, {
      ref: C,
      disabled: i,
      type: "button",
      role: "radio",
      tabIndex: i ? -1 : u,
      "aria-current": g,
      "aria-checked": l,
      onClick: (E) => d(E, c),
      onKeyDown: (E) => p(E, c),
      onFocus: (E) => h(E, c),
      onBlur: (E) => m(E, c),
      className: T.yearButton,
      ownerState: o,
      children: s
    })
  }));
});
function LE(e) {
  return xe("MuiYearCalendar", e);
}
be("MuiYearCalendar", ["root"]);
const BE = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow", "timezone", "gridLabelId"], WE = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"]
  }, LE, t);
};
function zE(e, t) {
  var o;
  const r = Ye(), a = Jo(), s = lt({
    props: e,
    name: t
  });
  return v({
    disablePast: !1,
    disableFuture: !1
  }, s, {
    yearsPerRow: (o = s.yearsPerRow) != null ? o : 3,
    minDate: Nt(r, s.minDate, a.minDate),
    maxDate: Nt(r, s.maxDate, a.maxDate)
  });
}
const UE = oe("div", {
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
  width: fs,
  maxHeight: Ox,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative"
}), tf = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = zE(t, "MuiYearCalendar"), {
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
    onChange: g,
    readOnly: f,
    shouldDisableYear: C,
    disableHighlightToday: T,
    onYearFocus: E,
    hasFocus: x,
    onFocusedViewChange: w,
    yearsPerRow: y,
    timezone: R,
    gridLabelId: O
  } = r, L = ae(r, BE), {
    value: _,
    handleValueChange: V,
    timezone: N
  } = Ga({
    name: "YearCalendar",
    timezone: R,
    value: i,
    defaultValue: l,
    onChange: g,
    valueManager: tn
  }), B = as(N), F = Qo(), D = Ye(), P = b.useMemo(
    () => tn.getInitialReferenceValue({
      value: _,
      utils: D,
      props: r,
      timezone: N,
      referenceDate: c,
      granularity: Kt.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), $ = r, j = WE($), M = b.useMemo(() => D.getYear(B), [D, B]), W = b.useMemo(() => _ != null ? D.getYear(_) : T ? null : D.getYear(P), [_, D, T, P]), [k, U] = b.useState(() => W || M), [G, X] = Lt({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: x,
    default: a ?? !1
  }), z = pe((H) => {
    X(H), w && w(H);
  }), q = b.useCallback((H) => {
    if (p && D.isBeforeYear(H, B) || d && D.isAfterYear(H, B) || m && D.isBeforeYear(H, m) || h && D.isAfterYear(H, h))
      return !0;
    if (!C)
      return !1;
    const re = D.startOfYear(H);
    return C(re);
  }, [d, p, h, m, B, C, D]), Q = pe((H, re) => {
    if (f)
      return;
    const de = D.setYear(_ ?? P, re);
    V(de);
  }), Y = pe((H) => {
    q(D.setYear(_ ?? P, H)) || (U(H), z(!0), E == null || E(H));
  });
  b.useEffect(() => {
    U((H) => W !== null && H !== W ? W : H);
  }, [W]);
  const Z = pe((H, re) => {
    switch (H.key) {
      case "ArrowUp":
        Y(re - y), H.preventDefault();
        break;
      case "ArrowDown":
        Y(re + y), H.preventDefault();
        break;
      case "ArrowLeft":
        Y(re + (F.direction === "ltr" ? -1 : 1)), H.preventDefault();
        break;
      case "ArrowRight":
        Y(re + (F.direction === "ltr" ? 1 : -1)), H.preventDefault();
        break;
    }
  }), ee = pe((H, re) => {
    Y(re);
  }), J = pe((H, re) => {
    k === re && z(!1);
  }), K = b.useRef(null), A = Ue(o, K);
  return b.useEffect(() => {
    if (a || K.current === null)
      return;
    const H = K.current.querySelector('[tabindex="0"]');
    if (!H)
      return;
    const re = H.offsetHeight, de = H.offsetTop, ge = K.current.clientHeight, $e = K.current.scrollTop, ue = de + re;
    re > ge || de < $e || (K.current.scrollTop = ue - ge / 2 - re / 2);
  }, [a]), /* @__PURE__ */ S.jsx(UE, v({
    ref: A,
    className: ce(j.root, s),
    ownerState: $,
    role: "radiogroup",
    "aria-labelledby": O
  }, L, {
    children: D.getYearRange(m, h).map((H) => {
      const re = D.getYear(H), de = re === W, ge = u || q(H);
      return /* @__PURE__ */ S.jsx(VE, {
        selected: de,
        value: re,
        onClick: Q,
        onKeyDown: Z,
        autoFocus: G && re === k,
        disabled: ge,
        tabIndex: re === k ? 0 : -1,
        onFocus: ee,
        onBlur: J,
        "aria-current": M === re ? "date" : void 0,
        yearsPerRow: y,
        children: D.format(H, "year")
      }, D.format(H, "year"));
    })
  }));
});
process.env.NODE_ENV !== "production" && (tf.propTypes = {
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
const YE = (e) => xe("MuiPickersCalendarHeader", e), HE = be("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]), qE = ["slots", "slotProps", "components", "componentsProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone"], KE = ["ownerState"], GE = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  }, YE, t);
}, XE = oe("div", {
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
}), ZE = oe("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer",
  overridesResolver: (e, t) => t.labelContainer
})(({
  theme: e
}) => v({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, e.typography.body1, {
  fontWeight: e.typography.fontWeightMedium
})), QE = oe("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label",
  overridesResolver: (e, t) => t.label
})({
  marginRight: 6
}), JE = oe(cs, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton",
  overridesResolver: (e, t) => t.switchViewButton
})(({
  ownerState: e
}) => v({
  marginRight: "auto"
}, e.view === "year" && {
  [`.${HE.switchViewIcon}`]: {
    transform: "rotate(180deg)"
  }
})), eS = oe(xv, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon",
  overridesResolver: (e, t) => t.switchViewIcon
})(({
  theme: e
}) => ({
  willChange: "transform",
  transition: e.transitions.create("transform"),
  transform: "rotate(0deg)"
})), nf = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i;
  const l = hn(), c = Ye(), u = lt({
    props: t,
    name: "MuiPickersCalendarHeader"
  }), {
    slots: d,
    slotProps: p,
    components: h,
    currentMonth: m,
    disabled: g,
    disableFuture: f,
    disablePast: C,
    maxDate: T,
    minDate: E,
    onMonthChange: x,
    onViewChange: w,
    view: y,
    reduceAnimations: R,
    views: O,
    labelId: L,
    className: _,
    timezone: V
  } = u, N = ae(u, qE), B = u, F = GE(u), D = (r = (a = d == null ? void 0 : d.switchViewButton) != null ? a : h == null ? void 0 : h.SwitchViewButton) != null ? r : JE, P = st({
    elementType: D,
    externalSlotProps: p == null ? void 0 : p.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": l.calendarViewSwitchingButtonAriaLabel(y)
    },
    ownerState: B,
    className: F.switchViewButton
  }), $ = (s = (i = d == null ? void 0 : d.switchViewIcon) != null ? i : h == null ? void 0 : h.SwitchViewIcon) != null ? s : eS, j = st({
    elementType: $,
    externalSlotProps: p == null ? void 0 : p.switchViewIcon,
    ownerState: void 0,
    className: F.switchViewIcon
  }), M = ae(j, KE), W = () => x(c.addMonths(m, 1), "left"), k = () => x(c.addMonths(m, -1), "right"), U = Rw(m, {
    disableFuture: f,
    maxDate: T,
    timezone: V
  }), G = Dw(m, {
    disablePast: C,
    minDate: E,
    timezone: V
  }), X = () => {
    if (!(O.length === 1 || !w || g))
      if (O.length === 2)
        w(O.find((z) => z !== y) || O[0]);
      else {
        const z = O.indexOf(y) !== 0 ? 0 : 1;
        w(O[z]);
      }
  };
  return O.length === 1 && O[0] === "year" ? null : /* @__PURE__ */ S.jsxs(XE, v({}, N, {
    ownerState: B,
    className: ce(_, F.root),
    ref: o,
    children: [/* @__PURE__ */ S.jsxs(ZE, {
      role: "presentation",
      onClick: X,
      ownerState: B,
      "aria-live": "polite",
      className: F.labelContainer,
      children: [/* @__PURE__ */ S.jsx(Jd, {
        reduceAnimations: R,
        transKey: c.format(m, "monthAndYear"),
        children: /* @__PURE__ */ S.jsx(QE, {
          id: L,
          ownerState: B,
          className: F.label,
          children: c.format(m, "monthAndYear")
        })
      }), O.length > 1 && !g && /* @__PURE__ */ S.jsx(D, v({}, P, {
        children: /* @__PURE__ */ S.jsx($, v({}, M))
      }))]
    }), /* @__PURE__ */ S.jsx(fo, {
      in: y === "day",
      children: /* @__PURE__ */ S.jsx(kv, {
        slots: d,
        slotProps: p,
        onGoToPrevious: k,
        isPreviousDisabled: G,
        previousLabel: l.previousMonth,
        onGoToNext: W,
        isNextDisabled: U,
        nextLabel: l.nextMonth
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (nf.propTypes = {
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
const tS = oe("div")({
  overflow: "hidden",
  width: fs,
  maxHeight: Fa,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
}), nS = (e) => xe("MuiDateCalendar", e);
be("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const oS = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow", "timezone"], rS = (e) => {
  const {
    classes: t
  } = e;
  return we({
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  }, nS, t);
};
function sS(e, t) {
  var o, r, a, s, i, l, c;
  const u = Ye(), d = Jo(), p = rd(), h = lt({
    props: e,
    name: t
  });
  return v({}, h, {
    loading: (o = h.loading) != null ? o : !1,
    disablePast: (r = h.disablePast) != null ? r : !1,
    disableFuture: (a = h.disableFuture) != null ? a : !1,
    openTo: (s = h.openTo) != null ? s : "day",
    views: (i = h.views) != null ? i : ["year", "day"],
    reduceAnimations: (l = h.reduceAnimations) != null ? l : p,
    renderLoading: (c = h.renderLoading) != null ? c : () => /* @__PURE__ */ S.jsx("span", {
      children: "..."
    }),
    minDate: Nt(u, h.minDate, d.minDate),
    maxDate: Nt(u, h.maxDate, d.maxDate)
  });
}
const aS = oe(tS, {
  name: "MuiDateCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexDirection: "column",
  height: Fa
}), iS = oe(Jd, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer",
  overridesResolver: (e, t) => t.viewTransitionContainer
})({}), of = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s;
  const i = Ye(), l = On(), c = sS(t, "MuiDateCalendar"), {
    autoFocus: u,
    onViewChange: d,
    value: p,
    defaultValue: h,
    referenceDate: m,
    disableFuture: g,
    disablePast: f,
    defaultCalendarMonth: C,
    onChange: T,
    onYearChange: E,
    onMonthChange: x,
    reduceAnimations: w,
    shouldDisableDate: y,
    shouldDisableMonth: R,
    shouldDisableYear: O,
    view: L,
    views: _,
    openTo: V,
    className: N,
    disabled: B,
    readOnly: F,
    minDate: D,
    maxDate: P,
    disableHighlightToday: $,
    focusedView: j,
    onFocusedViewChange: M,
    showDaysOutsideCurrentMonth: W,
    fixedWeekNumber: k,
    dayOfWeekFormatter: U,
    components: G,
    componentsProps: X,
    slots: z,
    slotProps: q,
    loading: Q,
    renderLoading: Y,
    displayWeekNumber: Z,
    yearsPerRow: ee,
    monthsPerRow: J,
    timezone: K
  } = c, A = ae(c, oS), {
    value: H,
    handleValueChange: re,
    timezone: de
  } = Ga({
    name: "DateCalendar",
    timezone: K,
    value: p,
    defaultValue: h,
    onChange: T,
    valueManager: tn
  }), {
    view: ge,
    setView: $e,
    focusedView: ue,
    setFocusedView: fe,
    goToNextView: te,
    setValueAndGoToNextView: se
  } = ud({
    view: L,
    views: _,
    openTo: V,
    onChange: re,
    onViewChange: d,
    autoFocus: u,
    focusedView: j,
    onFocusedViewChange: M
  }), {
    referenceDate: he,
    calendarState: Te,
    changeFocusedDay: ve,
    changeMonth: Oe,
    handleChangeMonth: qe,
    isDateDisabled: De,
    onMonthSwitchingAnimationEnd: Ee
  } = a1({
    value: H,
    defaultCalendarMonth: C,
    referenceDate: m,
    reduceAnimations: w,
    onMonthChange: x,
    minDate: D,
    maxDate: P,
    shouldDisableDate: y,
    disablePast: f,
    disableFuture: g,
    timezone: de
  }), me = B && H || D, Ge = B && H || P, wt = `${l}-grid-label`, gt = ue !== null, ut = (r = (a = z == null ? void 0 : z.calendarHeader) != null ? a : G == null ? void 0 : G.CalendarHeader) != null ? r : nf, ye = st({
    elementType: ut,
    externalSlotProps: (s = q == null ? void 0 : q.calendarHeader) != null ? s : X == null ? void 0 : X.calendarHeader,
    additionalProps: {
      views: _,
      view: ge,
      currentMonth: Te.currentMonth,
      onViewChange: $e,
      onMonthChange: (ze, Ot) => qe({
        newMonth: ze,
        direction: Ot
      }),
      minDate: me,
      maxDate: Ge,
      disabled: B,
      disablePast: f,
      disableFuture: g,
      reduceAnimations: w,
      timezone: de,
      labelId: wt,
      slots: z,
      slotProps: q
    },
    ownerState: c
  }), Se = pe((ze) => {
    const Ot = i.startOfMonth(ze), an = i.endOfMonth(ze), Yt = De(ze) ? Ro({
      utils: i,
      date: ze,
      minDate: i.isBefore(D, Ot) ? Ot : D,
      maxDate: i.isAfter(P, an) ? an : P,
      disablePast: f,
      disableFuture: g,
      isDateDisabled: De,
      timezone: de
    }) : ze;
    Yt ? (se(Yt, "finish"), x == null || x(Ot)) : (te(), Oe(Ot)), ve(Yt, !0);
  }), Je = pe((ze) => {
    const Ot = i.startOfYear(ze), an = i.endOfYear(ze), Yt = De(ze) ? Ro({
      utils: i,
      date: ze,
      minDate: i.isBefore(D, Ot) ? Ot : D,
      maxDate: i.isAfter(P, an) ? an : P,
      disablePast: f,
      disableFuture: g,
      isDateDisabled: De,
      timezone: de
    }) : ze;
    Yt ? (se(Yt, "finish"), E == null || E(Yt)) : (te(), Oe(Ot)), ve(Yt, !0);
  }), zt = pe((ze) => re(ze && Mr(i, ze, H ?? he), "finish", ge));
  b.useEffect(() => {
    H != null && i.isValid(H) && Oe(H);
  }, [H]);
  const sn = c, $n = rS(sn), kn = {
    disablePast: f,
    disableFuture: g,
    maxDate: P,
    minDate: D
  }, Ut = {
    disableHighlightToday: $,
    readOnly: F,
    disabled: B,
    timezone: de,
    gridLabelId: wt
  }, yn = b.useRef(ge);
  b.useEffect(() => {
    yn.current !== ge && (ue === yn.current && fe(ge, !0), yn.current = ge);
  }, [ue, fe, ge]);
  const ho = b.useMemo(() => [H], [H]);
  return /* @__PURE__ */ S.jsxs(aS, v({
    ref: o,
    className: ce($n.root, N),
    ownerState: sn
  }, A, {
    children: [/* @__PURE__ */ S.jsx(ut, v({}, ye)), /* @__PURE__ */ S.jsx(iS, {
      reduceAnimations: w,
      className: $n.viewTransitionContainer,
      transKey: ge,
      ownerState: sn,
      children: /* @__PURE__ */ S.jsxs("div", {
        children: [ge === "year" && /* @__PURE__ */ S.jsx(tf, v({}, kn, Ut, {
          value: H,
          onChange: Je,
          shouldDisableYear: O,
          hasFocus: gt,
          onFocusedViewChange: (ze) => fe("year", ze),
          yearsPerRow: ee,
          referenceDate: he
        })), ge === "month" && /* @__PURE__ */ S.jsx(ef, v({}, kn, Ut, {
          hasFocus: gt,
          className: N,
          value: H,
          onChange: Se,
          shouldDisableMonth: R,
          onFocusedViewChange: (ze) => fe("month", ze),
          monthsPerRow: J,
          referenceDate: he
        })), ge === "day" && /* @__PURE__ */ S.jsx(r1, v({}, Te, kn, Ut, {
          onMonthSwitchingAnimationEnd: Ee,
          onFocusedDayChange: ve,
          reduceAnimations: w,
          selectedDays: ho,
          onSelectedDaysChange: zt,
          shouldDisableDate: y,
          shouldDisableMonth: R,
          shouldDisableYear: O,
          hasFocus: gt,
          onFocusedViewChange: (ze) => fe("day", ze),
          showDaysOutsideCurrentMonth: W,
          fixedWeekNumber: k,
          dayOfWeekFormatter: U,
          displayWeekNumber: Z,
          components: G,
          componentsProps: X,
          slots: z,
          slotProps: q,
          loading: Q,
          renderLoading: Y
        }))]
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (of.propTypes = {
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
const Gn = ({
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
  maxDate: g,
  shouldDisableDate: f,
  shouldDisableMonth: C,
  shouldDisableYear: T,
  reduceAnimations: E,
  onMonthChange: x,
  monthsPerRow: w,
  onYearChange: y,
  yearsPerRow: R,
  defaultCalendarMonth: O,
  components: L,
  componentsProps: _,
  slots: V,
  slotProps: N,
  loading: B,
  renderLoading: F,
  disableHighlightToday: D,
  readOnly: P,
  disabled: $,
  showDaysOutsideCurrentMonth: j,
  dayOfWeekFormatter: M,
  sx: W,
  autoFocus: k,
  fixedWeekNumber: U,
  displayWeekNumber: G,
  timezone: X
}) => /* @__PURE__ */ S.jsx(of, {
  view: e,
  onViewChange: t,
  views: o.filter(ll),
  focusedView: r && ll(r) ? r : null,
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
  maxDate: g,
  shouldDisableDate: f,
  shouldDisableMonth: C,
  shouldDisableYear: T,
  reduceAnimations: E,
  onMonthChange: x,
  monthsPerRow: w,
  onYearChange: y,
  yearsPerRow: R,
  defaultCalendarMonth: O,
  components: L,
  componentsProps: _,
  slots: V,
  slotProps: N,
  loading: B,
  renderLoading: F,
  disableHighlightToday: D,
  readOnly: P,
  disabled: $,
  showDaysOutsideCurrentMonth: j,
  dayOfWeekFormatter: M,
  sx: W,
  autoFocus: k,
  fixedWeekNumber: U,
  displayWeekNumber: G,
  timezone: X
}), rf = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s, i;
  const l = hn(), c = Ye(), u = Ou(t, "MuiDesktopDatePicker"), d = v({
    day: Gn,
    month: Gn,
    year: Gn
  }, u.viewRenderers), p = v({}, u, {
    viewRenderers: d,
    format: Ma(c, u, !1),
    yearsPerRow: (r = u.yearsPerRow) != null ? r : 4,
    slots: v({
      openPickerIcon: Tv,
      field: si
    }, u.slots),
    slotProps: v({}, u.slotProps, {
      field: (m) => {
        var g;
        return v({}, mu((g = u.slotProps) == null ? void 0 : g.field, m), Td(u), {
          ref: o
        });
      },
      toolbar: v({
        hidden: !0
      }, (a = u.slotProps) == null ? void 0 : a.toolbar)
    })
  }), {
    renderPicker: h
  } = y1({
    props: p,
    valueManager: tn,
    valueType: "date",
    getOpenDialogAriaText: (s = (i = p.localeText) == null ? void 0 : i.openDatePickerDialogue) != null ? s : l.openDatePickerDialogue,
    validator: ms
  });
  return h();
});
rf.propTypes = {
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
  inputRef: yt,
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
const lS = ["props", "getOpenDialogAriaText"], cS = (e) => {
  var t, o, r;
  let {
    props: a,
    getOpenDialogAriaText: s
  } = e, i = ae(e, lS);
  const {
    slots: l,
    slotProps: c,
    className: u,
    sx: d,
    format: p,
    formatDensity: h,
    timezone: m,
    name: g,
    label: f,
    inputRef: C,
    readOnly: T,
    disabled: E,
    localeText: x
  } = a, w = Ye(), y = b.useRef(null), R = On(), O = (t = c == null || (o = c.toolbar) == null ? void 0 : o.hidden) != null ? t : !1, {
    open: L,
    actions: _,
    layoutProps: V,
    renderCurrentView: N,
    fieldProps: B
  } = dd(v({}, i, {
    props: a,
    inputRef: y,
    autoFocusView: !0,
    additionalViewProps: {},
    wrapperVariant: "mobile"
  })), F = l.field, D = st({
    elementType: F,
    externalSlotProps: c == null ? void 0 : c.field,
    additionalProps: v({}, B, O && {
      id: R
    }, !(E || T) && {
      onClick: _.onOpen,
      onKeyDown: rC(_.onOpen)
    }, {
      readOnly: T ?? !0,
      disabled: E,
      className: u,
      sx: d,
      format: p,
      formatDensity: h,
      timezone: m,
      label: f,
      name: g
    }),
    ownerState: a
  });
  D.inputProps = v({}, D.inputProps, {
    "aria-label": s(B.value, w)
  });
  const P = v({
    textField: l.textField
  }, D.slots), $ = (r = l.layout) != null ? r : Za, j = Ue(y, D.inputRef, C);
  let M = R;
  O && (f ? M = `${R}-label` : M = void 0);
  const W = v({}, c, {
    toolbar: v({}, c == null ? void 0 : c.toolbar, {
      titleId: R
    }),
    mobilePaper: v({
      "aria-labelledby": M
    }, c == null ? void 0 : c.mobilePaper)
  });
  return {
    renderPicker: () => /* @__PURE__ */ S.jsxs(rs, {
      localeText: x,
      children: [/* @__PURE__ */ S.jsx(F, v({}, D, {
        slots: P,
        slotProps: W,
        inputRef: j
      })), /* @__PURE__ */ S.jsx(Mx, v({}, _, {
        open: L,
        slots: l,
        slotProps: W,
        children: /* @__PURE__ */ S.jsx($, v({}, V, W == null ? void 0 : W.layout, {
          slots: l,
          slotProps: W,
          children: N()
        }))
      }))]
    })
  };
}, sf = /* @__PURE__ */ b.forwardRef(function(t, o) {
  var r, a, s;
  const i = hn(), l = Ye(), c = Ou(t, "MuiMobileDatePicker"), u = v({
    day: Gn,
    month: Gn,
    year: Gn
  }, c.viewRenderers), d = v({}, c, {
    viewRenderers: u,
    format: Ma(l, c, !1),
    slots: v({
      field: si
    }, c.slots),
    slotProps: v({}, c.slotProps, {
      field: (h) => {
        var m;
        return v({}, mu((m = c.slotProps) == null ? void 0 : m.field, h), Td(c), {
          ref: o
        });
      },
      toolbar: v({
        hidden: !1
      }, (r = c.slotProps) == null ? void 0 : r.toolbar)
    })
  }), {
    renderPicker: p
  } = cS({
    props: d,
    valueManager: tn,
    valueType: "date",
    getOpenDialogAriaText: (a = (s = d.localeText) == null ? void 0 : s.openDatePickerDialogue) != null ? a : i.openDatePickerDialogue,
    validator: ms
  });
  return p();
});
sf.propTypes = {
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
  inputRef: yt,
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
const uS = ["desktopModeMediaQuery"], af = /* @__PURE__ */ b.forwardRef(function(t, o) {
  const r = lt({
    props: t,
    name: "MuiDatePicker"
  }), {
    desktopModeMediaQuery: a = sC
  } = r, s = ae(r, uS);
  return iu(a, {
    defaultMatches: !0
  }) ? /* @__PURE__ */ S.jsx(rf, v({
    ref: o
  }, s)) : /* @__PURE__ */ S.jsx(sf, v({
    ref: o
  }, s));
});
process.env.NODE_ENV !== "production" && (af.propTypes = {
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
  inputRef: yt,
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
const dS = ({
  value: e,
  onChange: t,
  minDate: o,
  maxDate: r,
  disablePast: a,
  disableFuture: s,
  error: i,
  ...l
}) => /* @__PURE__ */ S.jsx(Sn, { ...l, error: i, children: /* @__PURE__ */ S.jsx(rs, { dateAdapter: Hg, children: /* @__PURE__ */ S.jsx(
  af,
  {
    value: e ? at(e) : null,
    onChange: (c) => {
      t(c ? c.toDate() : null);
    },
    minDate: o ? at(o) : void 0,
    maxDate: r ? at(r) : void 0,
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
) }) }), fS = ({
  value: e = {},
  onChange: t,
  statements: o = [],
  scale: r = 5,
  scaleLabels: a,
  error: s,
  ...i
}) => {
  const l = so(), c = (u, d) => {
    t({ ...e, [u]: d });
  };
  return ht.useEffect(() => {
    const u = (d) => {
      var h;
      if (((h = document.activeElement) == null ? void 0 : h.tagName) === "INPUT")
        return;
      const p = parseInt(d.key);
      if (p > 0 && p <= r) {
        const m = document.querySelector("tr:hover");
        if (m) {
          const g = m.getAttribute("data-statement");
          g && c(g, p);
        }
      }
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [r, c]), !o || o.length === 0 ? /* @__PURE__ */ S.jsx(Sn, { ...i, error: s || "No statements provided", children: /* @__PURE__ */ S.jsx(ft, { color: "error", children: "No statements available for this matrix." }) }) : /* @__PURE__ */ S.jsx(Sn, { ...i, error: s, children: /* @__PURE__ */ S.jsx(Pf, { children: /* @__PURE__ */ S.jsxs(Of, { children: [
    /* @__PURE__ */ S.jsx(Rf, { children: /* @__PURE__ */ S.jsxs(pi, { children: [
      /* @__PURE__ */ S.jsx(
        or,
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
        or,
        {
          align: "center",
          sx: {
            backgroundColor: l.palette.background.default,
            fontWeight: 500,
            minWidth: "80px"
          },
          children: [
            u === 1 && (a == null ? void 0 : a.start) && /* @__PURE__ */ S.jsx(
              ft,
              {
                variant: "caption",
                display: "block",
                sx: { mb: 0.5, color: "text.secondary" },
                children: a.start
              }
            ),
            u,
            u === r && (a == null ? void 0 : a.end) && /* @__PURE__ */ S.jsx(
              ft,
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
    /* @__PURE__ */ S.jsx(Df, { children: o.map((u, d) => /* @__PURE__ */ S.jsxs(
      pi,
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
            or,
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
            or,
            {
              align: "center",
              padding: "none",
              sx: {
                transition: l.transitions.create("background-color")
              },
              children: /* @__PURE__ */ S.jsx(
                Mf,
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
}, pS = ({
  question: e,
  value: t,
  onChange: o,
  error: r,
  previewMode: a = !1
}) => {
  switch (e.type) {
    case "scale":
      return /* @__PURE__ */ S.jsx(
        ug,
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
        bg,
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
        vg,
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
        xg,
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
        dS,
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
        fS,
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
}, Zl = (e, t) => {
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
}, hS = ({ survey: e, onSubmit: t }) => {
  var T;
  const o = e.sections.flatMap((E) => E.questions), [r, a] = Un(0), [s, i] = Un({}), [l, c] = Un({}), u = nr((E, x) => {
    var y;
    if (i((R) => ({ ...R, [E]: x })), o.find((R) => R.id === E) && ((y = e.config.validation) != null && y[E])) {
      const R = Zl(x, e.config.validation[E]) || [];
      c((O) => ({ ...O, [E]: Array.isArray(R) ? R : [R] }));
    }
  }, [o, e.config.validation]), d = nr(async () => {
    const E = {};
    let x = !1;
    return o.forEach((w) => {
      var y;
      if ((y = e.config.validation) != null && y[w.id]) {
        const R = Zl(s[w.id], e.config.validation[w.id]) || [], O = Array.isArray(R) ? R : [R];
        O.length > 0 && (E[w.id] = O, x = !0);
      }
    }), c(E), x || await t(s), !x;
  }, [o, s, e.config.validation, t]), p = o[r], h = (r + 1) / o.length * 100, m = r > 0, g = r === o.length - 1, f = nr(async () => {
    const E = s[p.id], x = l[p.id];
    if (!(p.required && (!E || x != null && x.length)))
      if (g) {
        if (await d())
          return;
      } else
        a((w) => w + 1);
  }, [p, s, l, g, d]), C = nr(() => {
    m && a((E) => E - 1);
  }, [m]);
  return /* @__PURE__ */ S.jsxs(He, { children: [
    /* @__PURE__ */ S.jsx(ft, { variant: "h4", gutterBottom: !0, children: e.metadata.title }),
    /* @__PURE__ */ S.jsx(
      $f,
      {
        variant: "determinate",
        value: h,
        sx: { mb: 3, borderRadius: 1 }
      }
    ),
    /* @__PURE__ */ S.jsxs(ft, { variant: "body2", color: "text.secondary", sx: { mb: 2 }, children: [
      "Question ",
      r + 1,
      " of ",
      o.length
    ] }),
    /* @__PURE__ */ S.jsx(Fr, { elevation: 2, sx: { p: 3, mb: 3 }, children: pS({
      question: p,
      value: s[p.id],
      onChange: (E) => u(p.id, E),
      error: (T = l[p.id]) == null ? void 0 : T[0]
    }) }),
    /* @__PURE__ */ S.jsxs(He, { sx: { display: "flex", justifyContent: "space-between", mt: 3 }, children: [
      /* @__PURE__ */ S.jsx(
        Tr,
        {
          onClick: C,
          disabled: !m,
          variant: "outlined",
          children: "Back"
        }
      ),
      /* @__PURE__ */ S.jsx(
        Tr,
        {
          onClick: f,
          variant: "contained",
          color: "primary",
          children: g ? "Submit" : "Next"
        }
      )
    ] })
  ] });
};
var ai = {}, mS = dn;
Object.defineProperty(ai, "__esModule", {
  value: !0
});
var lf = ai.default = void 0, yS = mS(uo()), gS = S;
lf = ai.default = (0, yS.default)(/* @__PURE__ */ (0, gS.jsx)("path", {
  d: "M8 5v14l11-7z"
}), "PlayArrow");
const bS = ({
  title: e = "Welcome to the Survey",
  description: t = "Please click the button below to begin.",
  startButtonText: o = "Start Survey",
  onStart: r,
  logoUrl: a
}) => {
  const s = Vt();
  return /* @__PURE__ */ S.jsx(Er, { maxWidth: "sm", children: /* @__PURE__ */ S.jsx(
    He,
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
        Fr,
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
              He,
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
              ft,
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
              ft,
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
              Tr,
              {
                variant: "contained",
                color: "primary",
                size: "large",
                onClick: r,
                startIcon: /* @__PURE__ */ S.jsx(lf, {}),
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
var ii = {}, vS = dn;
Object.defineProperty(ii, "__esModule", {
  value: !0
});
var cf = ii.default = void 0, xS = vS(uo()), CS = S;
cf = ii.default = (0, xS.default)(/* @__PURE__ */ (0, CS.jsx)("path", {
  d: "M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}), "CheckCircleOutline");
var li = {}, wS = dn;
Object.defineProperty(li, "__esModule", {
  value: !0
});
var uf = li.default = void 0, TS = wS(uo()), ES = S;
uf = li.default = (0, TS.default)(/* @__PURE__ */ (0, ES.jsx)("path", {
  d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"
}), "KeyboardReturn");
const SS = ({
  title: e = "Thank You!",
  description: t = "Your survey responses have been submitted successfully.",
  returnButtonText: o = "Return",
  onReturn: r,
  logoUrl: a
}) => {
  const s = Vt();
  return /* @__PURE__ */ S.jsx(Er, { maxWidth: "sm", children: /* @__PURE__ */ S.jsx(
    He,
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
        Fr,
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
            He,
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
                  He,
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
                  cf,
                  {
                    sx: {
                      fontSize: 64,
                      color: s.palette.success.main,
                      filter: `drop-shadow(0 4px 8px ${s.palette.success.main}40)`
                    }
                  }
                ),
                /* @__PURE__ */ S.jsx(
                  ft,
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
                  ft,
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
                  Tr,
                  {
                    variant: "contained",
                    color: "primary",
                    size: "large",
                    onClick: r,
                    startIcon: /* @__PURE__ */ S.jsx(uf, {}),
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
}, PS = {
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
}, zs = Jc(PS);
class OS {
  constructor(t, o, r = {}) {
    ws(this, "currentResponse");
    ws(this, "autoSaveInterval");
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
const kS = (e) => {
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
  }, o = new OS(
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
    const [i, l] = Un(
      e.startScreen ? "start" : "questions"
    ), [c, u] = Un(!0), [d, p] = Un(null);
    Ef(() => ((async () => {
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
      var g;
      l("questions"), (g = e.onStart) == null || g.call(e);
    }, m = async (g) => {
      var f, C, T;
      try {
        if (await ((f = e.onSubmit) == null ? void 0 : f.call(e, g)), l("end"), (C = e.onComplete) == null || C.call(e), (T = e.config.progress) != null && T.enabled) {
          const E = e.config.progress.storage || "local";
          E !== "none" && window[`${E}Storage`].removeItem(`survey_${e.id}`);
        }
      } catch (E) {
        console.error("Survey submission failed:", E);
      }
    };
    return c ? /* @__PURE__ */ S.jsx(He, { sx: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }, children: /* @__PURE__ */ S.jsx(kf, {}) }) : i === "start" && e.startScreen ? /* @__PURE__ */ S.jsx(Ts, { theme: e.theme || zs, children: /* @__PURE__ */ S.jsx(
      bS,
      {
        title: e.startScreen.title,
        description: e.startScreen.description,
        startButtonText: e.startScreen.startButtonText,
        onStart: h
      }
    ) }) : i === "end" && e.endScreen ? /* @__PURE__ */ S.jsx(Ts, { theme: e.theme || zs, children: /* @__PURE__ */ S.jsx(Er, { maxWidth: "sm", children: /* @__PURE__ */ S.jsx(
      SS,
      {
        title: e.endScreen.title,
        description: e.endScreen.description,
        returnButtonText: e.endScreen.returnButtonText,
        onReturn: e.onReturn
      }
    ) }) }) : /* @__PURE__ */ S.jsx(Er, { maxWidth: "md", sx: { py: 4 }, children: /* @__PURE__ */ S.jsx(Ts, { theme: e.theme || zs, children: /* @__PURE__ */ S.jsxs(He, { sx: { position: "relative" }, children: [
      /* @__PURE__ */ S.jsx(
        hS,
        {
          survey: t,
          onSubmit: m
        }
      ),
      d && /* @__PURE__ */ S.jsx(He, { sx: {
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
  hS as Survey,
  kS as createSurvey
};
