(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [53],
  {
    63349: function (e, n, s) {
      "use strict";
      function t(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      s.d(n, {
        Z: function () {
          return t;
        },
      });
    },
    41788: function (e, n, s) {
      "use strict";
      function t(e, n) {
        (e.prototype = Object.create(n.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = n);
      }
      s.d(n, {
        Z: function () {
          return t;
        },
      });
    },
    33192: function (e, n, s) {
      "use strict";
      s.r(n),
        s.d(n, {
          default: function () {
            return f;
          },
        });
      var t = s(85893),
        r = (s(67294), s(41664)),
        i = s(56941),
        o = s(91121),
        a = s(15538),
        c = s(82669),
        l = s(67954),
        d = s(609);
      function f() {
        return (0, t.jsx)("div", {
          className: "view",
          children: (0, t.jsx)("div", {
            className:
              "view-content view-pages view-session d-flex justify-content-center align-items-center flex-column",
            children: (0, t.jsx)(i.Z, {
              className: "mb-3 form-card",
              children: (0, t.jsxs)(o.Z, {
                children: [
                  (0, t.jsxs)("header", {
                    className: "mb-4 text-center",
                    children: [
                      (0, t.jsx)(r.default, {
                        href: "/",
                        children: (0, t.jsxs)("a", {
                          children: [
                            (0, t.jsx)("svg", {
                              width: "32px",
                              height: "44px",
                              viewBox: "11 6 50 42",
                              style: { marginLeft: "-4px" },
                              version: "1.1",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, t.jsx)("path", {
                                id: "Path",
                                stroke: "#2962FF",
                                strokeWidth: "12",
                                fill: "none",
                                d:
                                  "M26.5282909,38.9526768 C26.5282909,38.9526768 49.3408202,31.7856836 49.3408202,28.3647852 C49.3408202,24.9438868 49.5702829,11.7001695 37.0898141,17.411107 C24.6093454,23.1220444 24.821289,23.6064453 24.821289,23.6064453 C24.821289,23.6064453 22.8105177,47.2876359 26.528291,53.5093155 C30.2460643,59.7309951 52.7998045,53.5093155 54.7998045,53.5093155",
                              }),
                            }),
                            (0, t.jsx)("strong", {
                              className: "h3 text-uppercase",
                              style: { color: "#212121" },
                              children: "ract",
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("p", {
                        className: "mt-4 small",
                        children:
                          "Enter your email address and we'll send you the instructions for resetting the password.",
                      }),
                    ],
                  }),
                  (0, t.jsxs)(a.Z, {
                    action: "/",
                    children: [
                      (0, t.jsxs)(c.Z, {
                        className: "mb-4",
                        children: [
                          (0, t.jsx)(l.Z, { children: "Email Address" }),
                          (0, t.jsx)(d.Z, {
                            type: "email",
                            placeholder: "yourmail@xyz.com",
                          }),
                        ],
                      }),
                      (0, t.jsxs)(c.Z, {
                        className: "text-right",
                        children: [
                          (0, t.jsx)(r.default, {
                            href: "/",
                            children: (0, t.jsx)("a", {
                              className: "btn btn-primary",
                              children: "Reset Password",
                            }),
                          }),
                          " ",
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("p", {
                    children: [
                      "Already have an account?",
                      " ",
                      (0, t.jsx)(r.default, {
                        href: "/pages/signin",
                        children: (0, t.jsx)("a", { children: "Sign In" }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    61590: function (e, n, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pages/forget",
        function () {
          return s(33192);
        },
      ]);
    },
    56941: function (e, n, s) {
      "use strict";
      var t = s(22122),
        r = s(19756),
        i = s(67294),
        o = s(45697),
        a = s.n(o),
        c = s(94184),
        l = s.n(c),
        d = s(23663),
        f = {
          tag: d.iC,
          inverse: a().bool,
          color: a().string,
          body: a().bool,
          outline: a().bool,
          className: a().string,
          cssModule: a().object,
          innerRef: a().oneOfType([a().object, a().string, a().func]),
        },
        u = function (e) {
          var n = e.className,
            s = e.cssModule,
            o = e.color,
            a = e.body,
            c = e.inverse,
            f = e.outline,
            u = e.tag,
            p = e.innerRef,
            h = (0, r.Z)(e, [
              "className",
              "cssModule",
              "color",
              "body",
              "inverse",
              "outline",
              "tag",
              "innerRef",
            ]),
            m = (0, d.mx)(
              l()(
                n,
                "card",
                !!c && "text-white",
                !!a && "card-body",
                !!o && (f ? "border" : "bg") + "-" + o
              ),
              s
            );
          return i.createElement(u, (0, t.Z)({}, h, { className: m, ref: p }));
        };
      (u.propTypes = f), (u.defaultProps = { tag: "div" }), (n.Z = u);
    },
    91121: function (e, n, s) {
      "use strict";
      var t = s(22122),
        r = s(19756),
        i = s(67294),
        o = s(45697),
        a = s.n(o),
        c = s(94184),
        l = s.n(c),
        d = s(23663),
        f = {
          tag: d.iC,
          className: a().string,
          cssModule: a().object,
          innerRef: a().oneOfType([a().object, a().string, a().func]),
        },
        u = function (e) {
          var n = e.className,
            s = e.cssModule,
            o = e.innerRef,
            a = e.tag,
            c = (0, r.Z)(e, ["className", "cssModule", "innerRef", "tag"]),
            f = (0, d.mx)(l()(n, "card-body"), s);
          return i.createElement(a, (0, t.Z)({}, c, { className: f, ref: o }));
        };
      (u.propTypes = f), (u.defaultProps = { tag: "div" }), (n.Z = u);
    },
    15538: function (e, n, s) {
      "use strict";
      var t = s(22122),
        r = s(19756),
        i = s(63349),
        o = s(41788),
        a = s(67294),
        c = s(45697),
        l = s.n(c),
        d = s(94184),
        f = s.n(d),
        u = s(23663),
        p = {
          children: l().node,
          inline: l().bool,
          tag: u.iC,
          innerRef: l().oneOfType([l().object, l().func, l().string]),
          className: l().string,
          cssModule: l().object,
        },
        h = (function (e) {
          function n(n) {
            var s;
            return (
              ((s = e.call(this, n) || this).getRef = s.getRef.bind(
                (0, i.Z)(s)
              )),
              (s.submit = s.submit.bind((0, i.Z)(s))),
              s
            );
          }
          (0, o.Z)(n, e);
          var s = n.prototype;
          return (
            (s.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (s.submit = function () {
              this.ref && this.ref.submit();
            }),
            (s.render = function () {
              var e = this.props,
                n = e.className,
                s = e.cssModule,
                i = e.inline,
                o = e.tag,
                c = e.innerRef,
                l = (0, r.Z)(e, [
                  "className",
                  "cssModule",
                  "inline",
                  "tag",
                  "innerRef",
                ]),
                d = (0, u.mx)(f()(n, !!i && "form-inline"), s);
              return a.createElement(
                o,
                (0, t.Z)({}, l, { ref: c, className: d })
              );
            }),
            n
          );
        })(a.Component);
      (h.propTypes = p), (h.defaultProps = { tag: "form" }), (n.Z = h);
    },
    82669: function (e, n, s) {
      "use strict";
      var t = s(22122),
        r = s(19756),
        i = s(67294),
        o = s(45697),
        a = s.n(o),
        c = s(94184),
        l = s.n(c),
        d = s(23663),
        f = {
          children: a().node,
          row: a().bool,
          check: a().bool,
          inline: a().bool,
          disabled: a().bool,
          tag: d.iC,
          className: a().string,
          cssModule: a().object,
        },
        u = function (e) {
          var n = e.className,
            s = e.cssModule,
            o = e.row,
            a = e.disabled,
            c = e.check,
            f = e.inline,
            u = e.tag,
            p = (0, r.Z)(e, [
              "className",
              "cssModule",
              "row",
              "disabled",
              "check",
              "inline",
              "tag",
            ]),
            h = (0, d.mx)(
              l()(
                n,
                !!o && "row",
                c ? "form-check" : "form-group",
                !(!c || !f) && "form-check-inline",
                !(!c || !a) && "disabled"
              ),
              s
            );
          return (
            "fieldset" === u && (p.disabled = a),
            i.createElement(u, (0, t.Z)({}, p, { className: h }))
          );
        };
      (u.propTypes = f), (u.defaultProps = { tag: "div" }), (n.Z = u);
    },
    609: function (e, n, s) {
      "use strict";
      var t = s(22122),
        r = s(19756),
        i = s(63349),
        o = s(41788),
        a = s(67294),
        c = s(45697),
        l = s.n(c),
        d = s(94184),
        f = s.n(d),
        u = s(23663),
        p = {
          children: l().node,
          type: l().string,
          size: l().oneOfType([l().number, l().string]),
          bsSize: l().string,
          valid: l().bool,
          invalid: l().bool,
          tag: u.iC,
          innerRef: l().oneOfType([l().object, l().func, l().string]),
          plaintext: l().bool,
          addon: l().bool,
          className: l().string,
          cssModule: l().object,
        },
        h = (function (e) {
          function n(n) {
            var s;
            return (
              ((s = e.call(this, n) || this).getRef = s.getRef.bind(
                (0, i.Z)(s)
              )),
              (s.focus = s.focus.bind((0, i.Z)(s))),
              s
            );
          }
          (0, o.Z)(n, e);
          var s = n.prototype;
          return (
            (s.getRef = function (e) {
              this.props.innerRef && this.props.innerRef(e), (this.ref = e);
            }),
            (s.focus = function () {
              this.ref && this.ref.focus();
            }),
            (s.render = function () {
              var e = this.props,
                n = e.className,
                s = e.cssModule,
                i = e.type,
                o = e.bsSize,
                c = e.valid,
                l = e.invalid,
                d = e.tag,
                p = e.addon,
                h = e.plaintext,
                m = e.innerRef,
                g = (0, r.Z)(e, [
                  "className",
                  "cssModule",
                  "type",
                  "bsSize",
                  "valid",
                  "invalid",
                  "tag",
                  "addon",
                  "plaintext",
                  "innerRef",
                ]),
                b = ["radio", "checkbox"].indexOf(i) > -1,
                v = new RegExp("\\D", "g"),
                x = d || ("select" === i || "textarea" === i ? i : "input"),
                y = "form-control";
              h
                ? ((y += "-plaintext"), (x = d || "input"))
                : "file" === i
                ? (y += "-file")
                : "range" === i
                ? (y += "-range")
                : b && (y = p ? null : "form-check-input"),
                g.size &&
                  v.test(g.size) &&
                  ((0, u.O4)(
                    'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
                  ),
                  (o = g.size),
                  delete g.size);
              var N = (0, u.mx)(
                f()(
                  n,
                  l && "is-invalid",
                  c && "is-valid",
                  !!o && "form-control-" + o,
                  y
                ),
                s
              );
              return (
                ("input" === x || (d && "function" === typeof d)) &&
                  (g.type = i),
                g.children &&
                  !h &&
                  "select" !== i &&
                  "string" === typeof x &&
                  "select" !== x &&
                  ((0, u.O4)(
                    'Input with a type of "' +
                      i +
                      '" cannot have children. Please use "value"/"defaultValue" instead.'
                  ),
                  delete g.children),
                a.createElement(
                  x,
                  (0, t.Z)({}, g, { ref: m, className: N, "aria-invalid": l })
                )
              );
            }),
            n
          );
        })(a.Component);
      (h.propTypes = p), (h.defaultProps = { type: "text" }), (n.Z = h);
    },
    67954: function (e, n, s) {
      "use strict";
      var t = s(22122),
        r = s(19756),
        i = s(67294),
        o = s(45697),
        a = s.n(o),
        c = s(94184),
        l = s.n(c),
        d = s(23663),
        f = a().oneOfType([a().number, a().string]),
        u = a().oneOfType([
          a().bool,
          a().string,
          a().number,
          a().shape({ size: f, order: f, offset: f }),
        ]),
        p = {
          children: a().node,
          hidden: a().bool,
          check: a().bool,
          size: a().string,
          for: a().string,
          tag: d.iC,
          className: a().string,
          cssModule: a().object,
          xs: u,
          sm: u,
          md: u,
          lg: u,
          xl: u,
          widths: a().array,
        },
        h = { tag: "label", widths: ["xs", "sm", "md", "lg", "xl"] },
        m = function (e, n, s) {
          return !0 === s || "" === s
            ? e
              ? "col"
              : "col-" + n
            : "auto" === s
            ? e
              ? "col-auto"
              : "col-" + n + "-auto"
            : e
            ? "col-" + s
            : "col-" + n + "-" + s;
        },
        g = function (e) {
          var n = e.className,
            s = e.cssModule,
            o = e.hidden,
            a = e.widths,
            c = e.tag,
            f = e.check,
            u = e.size,
            p = e.for,
            h = (0, r.Z)(e, [
              "className",
              "cssModule",
              "hidden",
              "widths",
              "tag",
              "check",
              "size",
              "for",
            ]),
            g = [];
          a.forEach(function (n, t) {
            var r = e[n];
            if ((delete h[n], r || "" === r)) {
              var i,
                o = !t;
              if ((0, d.Kn)(r)) {
                var a,
                  c = o ? "-" : "-" + n + "-";
                (i = m(o, n, r.size)),
                  g.push(
                    (0, d.mx)(
                      l()(
                        (((a = {})[i] = r.size || "" === r.size),
                        (a["order" + c + r.order] = r.order || 0 === r.order),
                        (a["offset" + c + r.offset] =
                          r.offset || 0 === r.offset),
                        a)
                      )
                    ),
                    s
                  );
              } else (i = m(o, n, r)), g.push(i);
            }
          });
          var b = (0, d.mx)(
            l()(
              n,
              !!o && "sr-only",
              !!f && "form-check-label",
              !!u && "col-form-label-" + u,
              g,
              !!g.length && "col-form-label"
            ),
            s
          );
          return i.createElement(
            c,
            (0, t.Z)({ htmlFor: p }, h, { className: b })
          );
        };
      (g.propTypes = p), (g.defaultProps = h), (n.Z = g);
    },
  },
  function (e) {
    e.O(0, [774, 351, 658], function () {
      return (n = 61590), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
