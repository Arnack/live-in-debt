(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [600],
  {
    7607: function (s, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return L;
          },
        });
      var a = r(85893),
        t = r(67294),
        i = r(22122),
        n = r(19756),
        c = r(45697),
        l = r.n(c),
        o = r(94184),
        d = r.n(o),
        m = r(23663),
        u = { tag: m.iC, className: l().string, cssModule: l().object },
        h = function (s) {
          var e = s.className,
            r = s.cssModule,
            a = s.tag,
            c = (0, n.Z)(s, ["className", "cssModule", "tag"]),
            l = (0, m.mx)(d()(e, "card-footer"), r);
          return t.createElement(a, (0, i.Z)({}, c, { className: l }));
        };
      (h.propTypes = u), (h.defaultProps = { tag: "div" });
      var x = h,
        p = {
          tag: m.iC,
          top: l().bool,
          bottom: l().bool,
          className: l().string,
          cssModule: l().object,
        },
        g = function (s) {
          var e = s.className,
            r = s.cssModule,
            a = s.top,
            c = s.bottom,
            l = s.tag,
            o = (0, n.Z)(s, ["className", "cssModule", "top", "bottom", "tag"]),
            u = "card-img";
          a && (u = "card-img-top"), c && (u = "card-img-bottom");
          var h = (0, m.mx)(d()(e, u), r);
          return t.createElement(l, (0, i.Z)({}, o, { className: h }));
        };
      (g.propTypes = p), (g.defaultProps = { tag: "img" });
      var j = g,
        f = r(10267),
        Z = r(51252),
        N = r(56941),
        b = r(91121),
        v = r(75351),
        w = r(7285),
        T = r(60602),
        M = r(53522),
        C = function () {
          return (0, a.jsx)("div", {
            className: "view-header",
            children: (0, a.jsxs)("header", {
              className: "title text-white",
              children: [
                (0, a.jsx)("h1", {
                  className: "h4 text-uppercase",
                  children: "Cards",
                }),
                (0, a.jsx)("p", {
                  className: "mb-0",
                  children: "Material cards in different colors and formats",
                }),
              ],
            }),
          });
        },
        y = function () {
          return (0, a.jsxs)(f.Z, {
            className: "mb-4",
            children: [
              (0, a.jsx)(Z.Z, {
                md: "3",
                xs: "12",
                className: "mb-4",
                children: (0, a.jsx)(N.Z, {
                  color: "primary",
                  inverse: !0,
                  children: (0, a.jsx)(b.Z, {
                    children:
                      "This is primary card. Lorem ipsum dolar sit amet consector adipising net.",
                  }),
                }),
              }),
              (0, a.jsx)(Z.Z, {
                md: "3",
                xs: "12",
                className: "mb-4",
                children: (0, a.jsx)(N.Z, {
                  color: "success",
                  inverse: !0,
                  children: (0, a.jsx)(b.Z, {
                    children:
                      "This is brand success card. Lorem ipsum dolar sit amet consector adipising net.",
                  }),
                }),
              }),
              (0, a.jsx)(Z.Z, {
                md: "3",
                xs: "12",
                className: "mb-4",
                children: (0, a.jsx)(N.Z, {
                  color: "info",
                  inverse: !0,
                  children: (0, a.jsx)(b.Z, {
                    children:
                      "This is brand info card. Lorem ipsum dolar sit amet consector adipising net.",
                  }),
                }),
              }),
              (0, a.jsx)(Z.Z, {
                md: "3",
                xs: "12",
                className: "mb-4",
                children: (0, a.jsx)(N.Z, {
                  color: "warning",
                  inverse: !0,
                  children: (0, a.jsx)(b.Z, {
                    children:
                      "This is brand warning card. Lorem ipsum dolar sit amet consector adipising net.",
                  }),
                }),
              }),
              (0, a.jsx)(Z.Z, {
                md: "3",
                xs: "12",
                className: "mb-4",
                children: (0, a.jsx)(N.Z, {
                  color: "danger",
                  inverse: !0,
                  children: (0, a.jsx)(b.Z, {
                    children:
                      "This is brand danger card. Lorem ipsum dolar sit amet consector adipising net.",
                  }),
                }),
              }),
              (0, a.jsx)(Z.Z, {
                md: "3",
                xs: "12",
                className: "mb-4",
                children: (0, a.jsx)(N.Z, {
                  color: "success",
                  outline: !0,
                  children: (0, a.jsx)(b.Z, {
                    children:
                      "This is success brand oultined card. Lorem ipsum dolar sit amet consector adipising net.",
                  }),
                }),
              }),
              (0, a.jsx)(Z.Z, {
                md: "3",
                xs: "12",
                className: "mb-4",
                children: (0, a.jsx)(N.Z, {
                  color: "primary",
                  outline: !0,
                  children: (0, a.jsx)(b.Z, {
                    children:
                      "This is primary oultined card. Lorem ipsum dolar sit amet consector adipising net.",
                  }),
                }),
              }),
              (0, a.jsx)(Z.Z, {
                md: "3",
                xs: "12",
                className: "mb-4",
                children: (0, a.jsx)(N.Z, {
                  color: "warning",
                  outline: !0,
                  children: (0, a.jsx)(b.Z, {
                    children:
                      "This is warning outlined card. Lorem ipsum dolar sit amet consector adipising net.",
                  }),
                }),
              }),
            ],
          });
        },
        E = function () {
          return (0, a.jsxs)(N.Z, {
            className: "mb-5",
            children: [
              (0, a.jsxs)(b.Z, {
                children: [
                  (0, a.jsx)(v.Z, { children: "Card Title" }),
                  (0, a.jsx)(w.Z, {
                    className: "mb-2",
                    children: "Card Subtitle",
                  }),
                  (0, a.jsx)("p", {
                    children:
                      "Some quick example text to build on the card title and make up the bulk of the card's content.",
                  }),
                  (0, a.jsx)("a", {
                    href: "#na",
                    className: "card-link",
                    children: "Card link",
                  }),
                  (0, a.jsx)("a", {
                    href: "#na",
                    className: "card-link",
                    children: "Another link",
                  }),
                ],
              }),
              (0, a.jsx)(x, { children: "This is a card footer." }),
            ],
          });
        },
        _ = function () {
          return (0, a.jsxs)(T.Z, {
            children: [
              (0, a.jsxs)(N.Z, {
                className: "mb-4",
                children: [
                  (0, a.jsx)(j, {
                    top: !0,
                    src: "https://unsplash.it/200/130?image=18",
                  }),
                  (0, a.jsxs)(b.Z, {
                    children: [
                      (0, a.jsx)(v.Z, { children: "Card Title" }),
                      (0, a.jsx)("p", {
                        children:
                          "This is some card text. Lorem ipsum norem dolar adipising set et.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(N.Z, {
                className: "text-center mb-4",
                children: [
                  (0, a.jsx)(j, {
                    top: !0,
                    src: "https://unsplash.it/200/130/?image=16",
                  }),
                  (0, a.jsxs)(b.Z, {
                    children: [
                      (0, a.jsx)(v.Z, { children: "Card Title" }),
                      (0, a.jsx)("p", {
                        children:
                          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(N.Z, {
                className: "text-right mb-4",
                children: [
                  (0, a.jsx)(j, {
                    top: !0,
                    src: "https://unsplash.it/200/130?image=13",
                  }),
                  (0, a.jsxs)(b.Z, {
                    children: [
                      (0, a.jsx)(v.Z, { children: "Card Title" }),
                      (0, a.jsx)("p", {
                        children:
                          "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        k = function (s) {
          var e = s.children;
          return (0, a.jsx)("div", {
            className: "view-content view-components",
            children: (0, a.jsx)(N.Z, {
              children: (0, a.jsx)(b.Z, { children: e }),
            }),
          });
        };
      function L(s) {
        return (0, a.jsxs)(M.Z, {
          children: [
            (0, a.jsx)(C, {}),
            (0, a.jsxs)(k, {
              children: [
                (0, a.jsx)("h6", {
                  className: "text-uppercase mb-4",
                  children: "Card Invariants",
                }),
                (0, a.jsx)(y, {}),
                (0, a.jsx)("h6", {
                  className: "text-uppercase mb-4",
                  children: "A Simple Full Width Card",
                }),
                (0, a.jsx)(E, {}),
                (0, a.jsx)("h6", {
                  className: "text-uppercase mb-4",
                  children: "Card Groups with Alignment",
                }),
                (0, a.jsx)(_, {}),
              ],
            }),
          ],
        });
      }
    },
    55536: function (s, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/ui/cards",
        function () {
          return r(7607);
        },
      ]);
    },
    60602: function (s, e, r) {
      "use strict";
      var a = r(22122),
        t = r(19756),
        i = r(67294),
        n = r(45697),
        c = r.n(n),
        l = r(94184),
        o = r.n(l),
        d = r(23663),
        m = { tag: d.iC, className: c().string, cssModule: c().object },
        u = function (s) {
          var e = s.className,
            r = s.cssModule,
            n = s.tag,
            c = (0, t.Z)(s, ["className", "cssModule", "tag"]),
            l = (0, d.mx)(o()(e, "card-group"), r);
          return i.createElement(n, (0, a.Z)({}, c, { className: l }));
        };
      (u.propTypes = m), (u.defaultProps = { tag: "div" }), (e.Z = u);
    },
    7285: function (s, e, r) {
      "use strict";
      var a = r(22122),
        t = r(19756),
        i = r(67294),
        n = r(45697),
        c = r.n(n),
        l = r(94184),
        o = r.n(l),
        d = r(23663),
        m = { tag: d.iC, className: c().string, cssModule: c().object },
        u = function (s) {
          var e = s.className,
            r = s.cssModule,
            n = s.tag,
            c = (0, t.Z)(s, ["className", "cssModule", "tag"]),
            l = (0, d.mx)(o()(e, "card-subtitle"), r);
          return i.createElement(n, (0, a.Z)({}, c, { className: l }));
        };
      (u.propTypes = m), (u.defaultProps = { tag: "div" }), (e.Z = u);
    },
    75351: function (s, e, r) {
      "use strict";
      var a = r(22122),
        t = r(19756),
        i = r(67294),
        n = r(45697),
        c = r.n(n),
        l = r(94184),
        o = r.n(l),
        d = r(23663),
        m = { tag: d.iC, className: c().string, cssModule: c().object },
        u = function (s) {
          var e = s.className,
            r = s.cssModule,
            n = s.tag,
            c = (0, t.Z)(s, ["className", "cssModule", "tag"]),
            l = (0, d.mx)(o()(e, "card-title"), r);
          return i.createElement(n, (0, a.Z)({}, c, { className: l }));
        };
      (u.propTypes = m), (u.defaultProps = { tag: "div" }), (e.Z = u);
    },
    51252: function (s, e, r) {
      "use strict";
      var a = r(22122),
        t = r(19756),
        i = r(67294),
        n = r(45697),
        c = r.n(n),
        l = r(94184),
        o = r.n(l),
        d = r(23663),
        m = c().oneOfType([c().number, c().string]),
        u = c().oneOfType([
          c().bool,
          c().number,
          c().string,
          c().shape({
            size: c().oneOfType([c().bool, c().number, c().string]),
            order: m,
            offset: m,
          }),
        ]),
        h = {
          tag: d.iC,
          xs: u,
          sm: u,
          md: u,
          lg: u,
          xl: u,
          className: c().string,
          cssModule: c().object,
          widths: c().array,
        },
        x = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        p = function (s, e, r) {
          return !0 === r || "" === r
            ? s
              ? "col"
              : "col-" + e
            : "auto" === r
            ? s
              ? "col-auto"
              : "col-" + e + "-auto"
            : s
            ? "col-" + r
            : "col-" + e + "-" + r;
        },
        g = function (s) {
          var e = s.className,
            r = s.cssModule,
            n = s.widths,
            c = s.tag,
            l = (0, t.Z)(s, ["className", "cssModule", "widths", "tag"]),
            m = [];
          n.forEach(function (e, a) {
            var t = s[e];
            if ((delete l[e], t || "" === t)) {
              var i = !a;
              if ((0, d.Kn)(t)) {
                var n,
                  c = i ? "-" : "-" + e + "-",
                  u = p(i, e, t.size);
                m.push(
                  (0, d.mx)(
                    o()(
                      (((n = {})[u] = t.size || "" === t.size),
                      (n["order" + c + t.order] = t.order || 0 === t.order),
                      (n["offset" + c + t.offset] = t.offset || 0 === t.offset),
                      n)
                    ),
                    r
                  )
                );
              } else {
                var h = p(i, e, t);
                m.push(h);
              }
            }
          }),
            m.length || m.push("col");
          var u = (0, d.mx)(o()(e, m), r);
          return i.createElement(c, (0, a.Z)({}, l, { className: u }));
        };
      (g.propTypes = h), (g.defaultProps = x), (e.Z = g);
    },
    10267: function (s, e, r) {
      "use strict";
      var a = r(22122),
        t = r(19756),
        i = r(67294),
        n = r(45697),
        c = r.n(n),
        l = r(94184),
        o = r.n(l),
        d = r(23663),
        m = c().oneOfType([c().number, c().string]),
        u = {
          tag: d.iC,
          noGutters: c().bool,
          className: c().string,
          cssModule: c().object,
          form: c().bool,
          xs: m,
          sm: m,
          md: m,
          lg: m,
          xl: m,
        },
        h = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        x = function (s) {
          var e = s.className,
            r = s.cssModule,
            n = s.noGutters,
            c = s.tag,
            l = s.form,
            m = s.widths,
            u = (0, t.Z)(s, [
              "className",
              "cssModule",
              "noGutters",
              "tag",
              "form",
              "widths",
            ]),
            h = [];
          m.forEach(function (e, r) {
            var a = s[e];
            if ((delete u[e], a)) {
              var t = !r;
              h.push(t ? "row-cols-" + a : "row-cols-" + e + "-" + a);
            }
          });
          var x = (0, d.mx)(
            o()(e, n ? "no-gutters" : null, l ? "form-row" : "row", h),
            r
          );
          return i.createElement(c, (0, a.Z)({}, u, { className: x }));
        };
      (x.propTypes = u), (x.defaultProps = h), (e.Z = x);
    },
  },
  function (s) {
    s.O(0, [774, 351, 658, 572, 707, 522], function () {
      return (e = 55536), s((s.s = e));
      var e;
    });
    var e = s.O();
    _N_E = e;
  },
]);
