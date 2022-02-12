(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [866],
  {
    16071: function (e, n, t) {
      "use strict";
      var r = t(63038),
        o = t(20862);
      n.default = void 0;
      var a = o(t(67294)),
        c = t(11689),
        i = t(72441),
        s = t(75749),
        u = {};
      function l(e, n, t, r) {
        if (e && (0, c.isLocalURL)(n)) {
          e.prefetch(n, t, r).catch(function (e) {
            0;
          });
          var o =
            r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          u[n + "%" + t + (o ? "%" + o : "")] = !0;
        }
      }
      var f = function (e) {
        var n = !1 !== e.prefetch,
          t = (0, i.useRouter)(),
          o = (t && t.pathname) || "/",
          f = a.default.useMemo(
            function () {
              var n = (0, c.resolveHref)(o, e.href, !0),
                t = r(n, 2),
                a = t[0],
                i = t[1];
              return {
                href: a,
                as: e.as ? (0, c.resolveHref)(o, e.as) : i || a,
              };
            },
            [o, e.href, e.as]
          ),
          d = f.href,
          p = f.as,
          v = e.children,
          h = e.replace,
          g = e.shallow,
          m = e.scroll,
          y = e.locale;
        "string" === typeof v && (v = a.default.createElement("a", null, v));
        var w = a.Children.only(v),
          b = w && "object" === typeof w && w.ref,
          x = (0, s.useIntersection)({ rootMargin: "200px" }),
          E = r(x, 2),
          _ = E[0],
          L = E[1],
          k = a.default.useCallback(
            function (e) {
              _(e),
                b &&
                  ("function" === typeof b
                    ? b(e)
                    : "object" === typeof b && (b.current = e));
            },
            [b, _]
          );
        (0, a.useEffect)(
          function () {
            var e = L && n && (0, c.isLocalURL)(d),
              r = "undefined" !== typeof y ? y : t && t.locale,
              o = u[d + "%" + p + (r ? "%" + r : "")];
            e && !o && l(t, d, p, { locale: r });
          },
          [p, d, L, y, n, t]
        );
        var N = {
          ref: k,
          onClick: function (e) {
            w.props &&
              "function" === typeof w.props.onClick &&
              w.props.onClick(e),
              e.defaultPrevented ||
                (function (e, n, t, r, o, a, i, s) {
                  ("A" !== e.currentTarget.nodeName ||
                    (!(function (e) {
                      var n = e.currentTarget.target;
                      return (
                        (n && "_self" !== n) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      (0, c.isLocalURL)(t))) &&
                    (e.preventDefault(),
                    null == i && (i = r.indexOf("#") < 0),
                    n[o ? "replace" : "push"](t, r, {
                      shallow: a,
                      locale: s,
                      scroll: i,
                    }));
                })(e, t, d, p, h, g, m, y);
          },
          onMouseEnter: function (e) {
            (0, c.isLocalURL)(d) &&
              (w.props &&
                "function" === typeof w.props.onMouseEnter &&
                w.props.onMouseEnter(e),
              l(t, d, p, { priority: !0 }));
          },
        };
        if (e.passHref || ("a" === w.type && !("href" in w.props))) {
          var j = "undefined" !== typeof y ? y : t && t.locale,
            M =
              t &&
              t.isLocaleDomain &&
              (0, c.getDomainLocale)(
                p,
                j,
                t && t.locales,
                t && t.domainLocales
              );
          N.href =
            M ||
            (0, c.addBasePath)((0, c.addLocale)(p, j, t && t.defaultLocale));
        }
        return a.default.cloneElement(w, N);
      };
      n.default = f;
    },
    75749: function (e, n, t) {
      "use strict";
      var r = t(63038);
      (n.__esModule = !0),
        (n.useIntersection = function (e) {
          var n = e.rootMargin,
            t = e.disabled || !c,
            s = (0, o.useRef)(),
            u = (0, o.useState)(!1),
            l = r(u, 2),
            f = l[0],
            d = l[1],
            p = (0, o.useCallback)(
              function (e) {
                s.current && (s.current(), (s.current = void 0)),
                  t ||
                    f ||
                    (e &&
                      e.tagName &&
                      (s.current = (function (e, n, t) {
                        var r = (function (e) {
                            var n = e.rootMargin || "",
                              t = i.get(n);
                            if (t) return t;
                            var r = new Map(),
                              o = new IntersectionObserver(function (e) {
                                e.forEach(function (e) {
                                  var n = r.get(e.target),
                                    t =
                                      e.isIntersecting ||
                                      e.intersectionRatio > 0;
                                  n && t && n(t);
                                });
                              }, e);
                            return (
                              i.set(
                                n,
                                (t = { id: n, observer: o, elements: r })
                              ),
                              t
                            );
                          })(t),
                          o = r.id,
                          a = r.observer,
                          c = r.elements;
                        return (
                          c.set(e, n),
                          a.observe(e),
                          function () {
                            c.delete(e),
                              a.unobserve(e),
                              0 === c.size && (a.disconnect(), i.delete(o));
                          }
                        );
                      })(
                        e,
                        function (e) {
                          return e && d(e);
                        },
                        { rootMargin: n }
                      )));
              },
              [t, n, f]
            );
          return (
            (0, o.useEffect)(
              function () {
                if (!c && !f) {
                  var e = (0, a.requestIdleCallback)(function () {
                    return d(!0);
                  });
                  return function () {
                    return (0, a.cancelIdleCallback)(e);
                  };
                }
              },
              [f]
            ),
            [p, f]
          );
        });
      var o = t(67294),
        a = t(98391),
        c = "undefined" !== typeof IntersectionObserver;
      var i = new Map();
    },
    57692: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return a;
          },
        });
      var r = t(85893),
        o = (t(67294), t(41664));
      function a() {
        return (0, r.jsx)("div", {
          className: "view",
          children: (0, r.jsxs)("div", {
            className:
              "view-content view-pages view-error d-flex justify-content-center align-items-center flex-column",
            children: [
              (0, r.jsxs)("h1", {
                className: "display-404",
                children: ["4", (0, r.jsx)("span", {}), "4"],
              }),
              (0, r.jsx)("h4", { children: "Page Not Found!!" }),
              (0, r.jsxs)("p", {
                className: "text-muted",
                children: [
                  "The page you're looking doesn't exist. Go to",
                  " ",
                  (0, r.jsx)(o.default, {
                    href: "/",
                    children: (0, r.jsx)("a", { children: "homepage." }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    80281: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pages/404",
        function () {
          return t(57692);
        },
      ]);
    },
    41664: function (e, n, t) {
      e.exports = t(16071);
    },
  },
  function (e) {
    e.O(0, [774, 351], function () {
      return (n = 80281), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
