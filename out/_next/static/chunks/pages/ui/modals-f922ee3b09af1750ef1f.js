(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [134],
  {
    19945: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      var l = n(6610),
        i = n(5991),
        a = n(63349),
        r = n(65255),
        s = n(46070),
        o = n(77608),
        c = n(96156),
        d = n(85893),
        u = n(67294),
        m = n(22122),
        h = n(19756),
        f = n(45697),
        p = n.n(f),
        g = n(94184),
        x = n.n(g),
        j = n(23663),
        v = { tag: j.iC, className: p().string, cssModule: p().object },
        Z = function (e) {
          var t = e.className,
            n = e.cssModule,
            l = e.tag,
            i = (0, h.Z)(e, ["className", "cssModule", "tag"]),
            a = (0, j.mx)(x()(t, "modal-footer"), n);
          return u.createElement(l, (0, m.Z)({}, i, { className: a }));
        };
      (Z.propTypes = v), (Z.defaultProps = { tag: "div" });
      var N = Z,
        C = n(85677),
        k = n(32701),
        w = n(10684),
        F = n(97975),
        _ = n(56941),
        y = n(91121),
        D = n(75351),
        b = n(53522);
      function E(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            l = (0, o.Z)(e);
          if (t) {
            var i = (0, o.Z)(this).constructor;
            n = Reflect.construct(l, arguments, i);
          } else n = l.apply(this, arguments);
          return (0, s.Z)(this, n);
        };
      }
      var M = function () {
          return (0, d.jsx)("div", {
            className: "view-header",
            children: (0, d.jsxs)("header", {
              className: "title text-white",
              children: [
                (0, d.jsx)("h1", {
                  className: "h4 text-uppercase",
                  children: "Modals",
                }),
                (0, d.jsx)("p", {
                  className: "mb-0",
                  children: "Bootstrap modals with different pop transitions",
                }),
              ],
            }),
          });
        },
        S = function (e) {
          var t = e.children;
          return (0, d.jsx)("div", {
            className: "view-content view-components",
            children: t,
          });
        },
        R = (function (e) {
          (0, r.Z)(n, e);
          var t = E(n);
          function n(e) {
            var i;
            return (
              (0, l.Z)(this, n),
              (i = t.call(this, e)),
              (0, c.Z)((0, a.Z)(i), "toggle", function (e, t) {
                i.setState({ modal: !i.state.modal, modalClass: t });
              }),
              (i.state = { modal: !1, modalClass: "" }),
              i
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (0, d.jsxs)("div", {
                    children: [
                      (0, d.jsxs)(C.Z, {
                        isOpen: this.state.modal,
                        toggle: this.toggle,
                        className: this.state.modalClass,
                        children: [
                          (0, d.jsx)(k.Z, {
                            toggle: this.toggle,
                            children: "Modal title",
                          }),
                          (0, d.jsx)(w.Z, {
                            children:
                              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                          }),
                          (0, d.jsxs)(N, {
                            children: [
                              (0, d.jsx)(F.Z, {
                                color: "primary",
                                onClick: this.toggle,
                                children: "Do Something",
                              }),
                              " ",
                              (0, d.jsx)(F.Z, {
                                color: "secondary",
                                onClick: this.toggle,
                                children: "Cancel",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, d.jsxs)("div", {
                        className: "mt-4",
                        children: [
                          (0, d.jsx)(F.Z, {
                            onClick: this.toggle,
                            children: "Default",
                          }),
                          " ",
                          (0, d.jsx)(F.Z, {
                            onClick: function (t) {
                              return e.toggle(t, "modalFadeInScale");
                            },
                            children: "Fade In & Scale",
                          }),
                          " ",
                          (0, d.jsx)(F.Z, {
                            onClick: function (t) {
                              return e.toggle(t, "modalFall");
                            },
                            children: "Fall",
                          }),
                          " ",
                          (0, d.jsx)(F.Z, {
                            onClick: function (t) {
                              return e.toggle(t, "modalSlideIn");
                            },
                            children: "Slide In",
                          }),
                          " ",
                          (0, d.jsx)(F.Z, {
                            onClick: function (t) {
                              return e.toggle(t, "modalRapid");
                            },
                            children: "Rapid",
                          }),
                          " ",
                          (0, d.jsx)(F.Z, {
                            onClick: function (t) {
                              return e.toggle(t, "modal3DFlipHorizontal");
                            },
                            children: "3D Flip (Vertical)",
                          }),
                          " ",
                          (0, d.jsx)(F.Z, {
                            onClick: function (t) {
                              return e.toggle(t, "modal3DFlipVertical");
                            },
                            children: "3D Flip (Horizontal)",
                          }),
                          " ",
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(u.Component);
      function I(e) {
        return (0, d.jsxs)(b.Z, {
          children: [
            (0, d.jsx)(M, {}),
            (0, d.jsx)(S, {
              children: (0, d.jsx)(_.Z, {
                children: (0, d.jsxs)(y.Z, {
                  children: [
                    (0, d.jsx)(D.Z, {
                      className: "h6 text-uppercase",
                      children: "Modal Effects",
                    }),
                    (0, d.jsx)("p", {
                      children:
                        "Here are the some modern transition to create modal effects. Works great with bootstrap default modal.",
                    }),
                    (0, d.jsxs)("p", {
                      children: [
                        "Available classes are: ",
                        (0, d.jsx)("code", { children: "modalFadeInScale" }),
                        ", ",
                        (0, d.jsx)("code", { children: "modalFall" }),
                        ",",
                        " ",
                        (0, d.jsx)("code", { children: "modalSlideIn" }),
                        ",",
                        (0, d.jsx)("code", { children: "\xa0modalRapid" }),
                        ",",
                        " ",
                        (0, d.jsx)("code", {
                          children: "modal3DFlipHorizontal",
                        }),
                        " and ",
                        (0, d.jsx)("code", { children: "modal3DFlipVertical" }),
                      ],
                    }),
                    (0, d.jsx)(R, {}),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    588: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/ui/modals",
        function () {
          return n(19945);
        },
      ]);
    },
    75351: function (e, t, n) {
      "use strict";
      var l = n(22122),
        i = n(19756),
        a = n(67294),
        r = n(45697),
        s = n.n(r),
        o = n(94184),
        c = n.n(o),
        d = n(23663),
        u = { tag: d.iC, className: s().string, cssModule: s().object },
        m = function (e) {
          var t = e.className,
            n = e.cssModule,
            r = e.tag,
            s = (0, i.Z)(e, ["className", "cssModule", "tag"]),
            o = (0, d.mx)(c()(t, "card-title"), n);
          return a.createElement(r, (0, l.Z)({}, s, { className: o }));
        };
      (m.propTypes = u), (m.defaultProps = { tag: "div" }), (t.Z = m);
    },
  },
  function (e) {
    e.O(0, [774, 351, 658, 572, 707, 579, 413, 522], function () {
      return (t = 588), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
