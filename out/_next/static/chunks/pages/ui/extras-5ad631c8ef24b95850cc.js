(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [939],
  {
    35430: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          default: function () {
            return F;
          },
        });
      var t = r(85893),
        n = r(67294),
        i = r(56941),
        c = r(91121),
        l = r(6610),
        a = r(5991),
        o = r(63349),
        d = r(65255),
        h = r(46070),
        u = r(77608),
        x = r(96156),
        j = r(97975),
        p = r(97394);
      function m(e) {
        var s = (function () {
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
          var r,
            t = (0, u.Z)(e);
          if (s) {
            var n = (0, u.Z)(this).constructor;
            r = Reflect.construct(t, arguments, n);
          } else r = t.apply(this, arguments);
          return (0, h.Z)(this, r);
        };
      }
      var Z = (function (e) {
          (0, d.Z)(r, e);
          var s = m(r);
          function r(e) {
            var t;
            return (
              (0, l.Z)(this, r),
              (t = s.call(this, e)),
              (0, x.Z)((0, o.Z)(t), "toggle", function () {
                t.setState({ tooltipOpen: !t.state.tooltipOpen });
              }),
              (t.state = { tooltipOpen: !1 }),
              t
            );
          }
          return (
            (0, a.Z)(r, [
              {
                key: "render",
                value: function () {
                  return (0, t.jsxs)("span", {
                    children: [
                      (0, t.jsx)(j.Z, {
                        className: "mr-1",
                        color: "secondary",
                        id: "Tooltip-" + this.props.id,
                        children: this.props.item.text,
                      }),
                      (0, t.jsx)(p.Z, {
                        placement: this.props.item.placement,
                        isOpen: this.state.tooltipOpen,
                        target: "Tooltip-" + this.props.id,
                        toggle: this.toggle,
                        children: "Tooltip Content!",
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(n.Component),
        f = (function (e) {
          (0, d.Z)(r, e);
          var s = m(r);
          function r(e) {
            var t;
            return (
              (0, l.Z)(this, r),
              ((t = s.call(this, e)).state = {
                tooltips: [
                  { placement: "top", text: "Top" },
                  { placement: "bottom", text: "Bottom" },
                  { placement: "left", text: "Left" },
                  { placement: "right", text: "Right" },
                ],
              }),
              t
            );
          }
          return (
            (0, a.Z)(r, [
              {
                key: "render",
                value: function () {
                  return (0, t.jsx)("div", {
                    className: "mb-5",
                    children: this.state.tooltips.map(function (e, s) {
                      return (0, t.jsx)(Z, { item: e, id: s }, s);
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(n.Component),
        v = r(46073),
        b = r(94847),
        g = r(68103);
      function N(e) {
        var s = (function () {
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
          var r,
            t = (0, u.Z)(e);
          if (s) {
            var n = (0, u.Z)(this).constructor;
            r = Reflect.construct(t, arguments, n);
          } else r = t.apply(this, arguments);
          return (0, h.Z)(this, r);
        };
      }
      var y = (function (e) {
          (0, d.Z)(r, e);
          var s = N(r);
          function r(e) {
            var t;
            return (
              (0, l.Z)(this, r),
              (t = s.call(this, e)),
              (0, x.Z)((0, o.Z)(t), "toggle", function () {
                t.setState({ popoverOpen: !t.state.popoverOpen });
              }),
              (t.state = { popoverOpen: !1 }),
              t
            );
          }
          return (
            (0, a.Z)(r, [
              {
                key: "render",
                value: function () {
                  return (0, t.jsxs)("span", {
                    children: [
                      (0, t.jsx)(j.Z, {
                        className: "mr-1",
                        color: "secondary",
                        id: "Popover-" + this.props.id,
                        onClick: this.toggle,
                        children: this.props.item.text,
                      }),
                      (0, t.jsxs)(v.Z, {
                        placement: this.props.item.placement,
                        isOpen: this.state.popoverOpen,
                        target: "Popover-" + this.props.id,
                        toggle: this.toggle,
                        children: [
                          (0, t.jsx)(b.Z, { children: "Popover Title" }),
                          (0, t.jsx)(g.Z, {
                            children:
                              "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            r
          );
        })(n.Component),
        w = (function (e) {
          (0, d.Z)(r, e);
          var s = N(r);
          function r(e) {
            var t;
            return (
              (0, l.Z)(this, r),
              ((t = s.call(this, e)).state = {
                popovers: [
                  { placement: "top", text: "Top" },
                  { placement: "bottom", text: "Bottom" },
                  { placement: "left", text: "Left" },
                  { placement: "right", text: "Right" },
                ],
              }),
              t
            );
          }
          return (
            (0, a.Z)(r, [
              {
                key: "render",
                value: function () {
                  return (0, t.jsx)("div", {
                    className: "mb-5",
                    children: this.state.popovers.map(function (e, s) {
                      return (0, t.jsx)(y, { item: e, id: s }, s);
                    }),
                  });
                },
              },
            ]),
            r
          );
        })(n.Component),
        P = r(90436),
        C = function () {
          return (0, t.jsxs)("div", {
            className: "mb-5",
            children: [
              (0, t.jsx)("div", {
                className: "text-center small",
                children: "0%",
              }),
              (0, t.jsx)(P.Z, { className: "mb-2" }),
              (0, t.jsx)("div", {
                className: "text-center small",
                children: "75%",
              }),
              (0, t.jsx)(P.Z, { value: 75, className: "mb-2" }),
              (0, t.jsx)("div", {
                className: "text-center small",
                children: "Multiple bars",
              }),
              (0, t.jsxs)(P.Z, {
                multi: !0,
                className: "mb-4",
                children: [
                  (0, t.jsx)(P.Z, { bar: !0, value: "15" }),
                  (0, t.jsx)(P.Z, { bar: !0, color: "success", value: "30" }),
                  (0, t.jsx)(P.Z, { bar: !0, color: "info", value: "25" }),
                  (0, t.jsx)(P.Z, { bar: !0, color: "warning", value: "20" }),
                  (0, t.jsx)(P.Z, { bar: !0, color: "danger", value: "5" }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "mb-2 font-weight-bold",
                children: "With Labels",
              }),
              (0, t.jsx)(P.Z, {
                value: 50,
                className: "mb-3",
                children: "1/2",
              }),
              (0, t.jsxs)(P.Z, {
                multi: !0,
                className: "mb-4",
                children: [
                  (0, t.jsx)(P.Z, { bar: !0, value: "15", children: "Meh" }),
                  (0, t.jsx)(P.Z, {
                    bar: !0,
                    color: "success",
                    value: "30",
                    children: "Wow!",
                  }),
                  (0, t.jsx)(P.Z, {
                    bar: !0,
                    color: "info",
                    value: "25",
                    children: "Cool",
                  }),
                  (0, t.jsx)(P.Z, {
                    bar: !0,
                    color: "warning",
                    value: "20",
                    children: "20%",
                  }),
                  (0, t.jsx)(P.Z, {
                    bar: !0,
                    color: "danger",
                    value: "10",
                    children: "!!",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: "mb-2 font-weight-bold",
                children: "Different Height",
              }),
              (0, t.jsx)(P.Z, {
                color: "success",
                value: "100",
                style: { height: "2px" },
                className: "mb-2",
              }),
              (0, t.jsx)(P.Z, {
                color: "primary",
                value: "70",
                style: { height: "6px" },
                className: "mb-4",
              }),
              (0, t.jsx)("div", {
                className: "mb-2 font-weight-bold",
                children: "Striped/Animated Bars",
              }),
              (0, t.jsx)(P.Z, {
                striped: !0,
                color: "warning",
                value: 75,
                className: "mb-2",
              }),
              (0, t.jsx)(P.Z, {
                animated: !0,
                color: "success",
                value: "25",
                className: "mb-2",
              }),
              (0, t.jsxs)(P.Z, {
                multi: !0,
                children: [
                  (0, t.jsx)(P.Z, {
                    bar: !0,
                    striped: !0,
                    value: "15",
                    children: "Stripes",
                  }),
                  (0, t.jsx)(P.Z, {
                    bar: !0,
                    animated: !0,
                    color: "success",
                    value: "30",
                    children: "Animated Stripes",
                  }),
                  (0, t.jsx)(P.Z, {
                    bar: !0,
                    color: "info",
                    value: "25",
                    children: "Plain",
                  }),
                ],
              }),
            ],
          });
        },
        R = r(17354),
        D = function () {
          return (0, t.jsxs)("div", {
            className: "mb-5",
            children: [
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(R.Z, { children: "default" }),
                  " ",
                  (0, t.jsx)(R.Z, { color: "primary", children: "primary" }),
                  " ",
                  (0, t.jsx)(R.Z, { color: "success", children: "success" }),
                  " ",
                  (0, t.jsx)(R.Z, { color: "info", children: "info" }),
                  " ",
                  (0, t.jsx)(R.Z, { color: "warning", children: "warning" }),
                  " ",
                  (0, t.jsx)(R.Z, { color: "danger", children: "danger" }),
                ],
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)(R.Z, {
                    color: "default",
                    pill: !0,
                    children: "default",
                  }),
                  " ",
                  (0, t.jsx)(R.Z, {
                    color: "primary",
                    pill: !0,
                    children: "primary",
                  }),
                  " ",
                  (0, t.jsx)(R.Z, {
                    color: "success",
                    pill: !0,
                    children: "success",
                  }),
                  " ",
                  (0, t.jsx)(R.Z, {
                    color: "info",
                    pill: !0,
                    children: "info",
                  }),
                  " ",
                  (0, t.jsx)(R.Z, {
                    color: "warning",
                    pill: !0,
                    children: "warning",
                  }),
                  " ",
                  (0, t.jsx)(R.Z, {
                    color: "danger",
                    pill: !0,
                    children: "danger",
                  }),
                ],
              }),
            ],
          });
        },
        O = r(2667),
        _ = r(23812),
        k = r(16450),
        S = function () {
          return (0, t.jsxs)(O.Z, {
            children: [
              (0, t.jsx)(_.Z, {
                disabled: !0,
                children: (0, t.jsx)(k.Z, { previous: !0, href: "#" }),
              }),
              (0, t.jsx)(_.Z, {
                active: !0,
                children: (0, t.jsx)(k.Z, { href: "#", children: "1" }),
              }),
              (0, t.jsx)(_.Z, {
                children: (0, t.jsx)(k.Z, { href: "#", children: "2" }),
              }),
              (0, t.jsx)(_.Z, {
                children: (0, t.jsx)(k.Z, { href: "#", children: "3" }),
              }),
              (0, t.jsx)(_.Z, {
                children: (0, t.jsx)(k.Z, { href: "#", children: "4" }),
              }),
              (0, t.jsx)(_.Z, {
                children: (0, t.jsx)(k.Z, { href: "#", children: "5" }),
              }),
              (0, t.jsx)(_.Z, {
                children: (0, t.jsx)(k.Z, { next: !0, href: "#" }),
              }),
            ],
          });
        },
        T = function () {
          return (0, t.jsxs)(O.Z, {
            size: "lg",
            children: [
              (0, t.jsx)(_.Z, {
                children: (0, t.jsx)(k.Z, { previous: !0, href: "#" }),
              }),
              (0, t.jsx)(_.Z, {
                children: (0, t.jsx)(k.Z, { href: "#", children: "1" }),
              }),
              (0, t.jsx)(_.Z, {
                children: (0, t.jsx)(k.Z, { href: "#", children: "2" }),
              }),
              (0, t.jsx)(_.Z, {
                children: (0, t.jsx)(k.Z, { href: "#", children: "3" }),
              }),
              (0, t.jsx)(_.Z, {
                children: (0, t.jsx)(k.Z, { next: !0, href: "#" }),
              }),
            ],
          });
        },
        L = function () {
          return (0, t.jsxs)("div", {
            className: "mb-5",
            children: [(0, t.jsx)(S, {}), (0, t.jsx)(T, {})],
          });
        },
        M = r(54218),
        B = r(59465),
        E = r(11122),
        q = r(77222),
        A = function () {
          return (0, t.jsxs)("div", {
            className: "row",
            children: [
              (0, t.jsx)("div", {
                className: "col-md-6 mb-4",
                children: (0, t.jsxs)(M.Z, {
                  children: [
                    (0, t.jsx)(B.Z, {
                      active: !0,
                      children: "Cras justo odio",
                    }),
                    (0, t.jsx)(B.Z, { children: "Dapibus ac facilisis in" }),
                    (0, t.jsx)(B.Z, { children: "Morbi leo risus" }),
                    (0, t.jsx)(B.Z, { children: "Porta ac consectetur ac" }),
                    (0, t.jsx)(B.Z, { children: "Vestibulum at eros" }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: "col-md-6 mb-4",
                children: (0, t.jsxs)(M.Z, {
                  children: [
                    (0, t.jsx)(B.Z, {
                      color: "success",
                      children: "Cras justo odio",
                    }),
                    (0, t.jsx)(B.Z, {
                      color: "info",
                      children: "Dapibus ac facilisis in",
                    }),
                    (0, t.jsx)(B.Z, {
                      color: "warning",
                      children: "Morbi leo risus",
                    }),
                    (0, t.jsx)(B.Z, {
                      color: "danger",
                      children: "Porta ac consectetur ac",
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: "col-md-6 mb-4",
                children: (0, t.jsxs)(M.Z, {
                  children: [
                    (0, t.jsxs)(B.Z, {
                      active: !0,
                      children: [
                        (0, t.jsx)(E.Z, {
                          children: "List group item heading",
                        }),
                        (0, t.jsx)(q.Z, {
                          children:
                            "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(B.Z, {
                      children: [
                        (0, t.jsx)(E.Z, {
                          children: "List group item heading",
                        }),
                        (0, t.jsx)(q.Z, {
                          children:
                            "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(B.Z, {
                      children: [
                        (0, t.jsx)(E.Z, {
                          children: "List group item heading",
                        }),
                        (0, t.jsx)(q.Z, {
                          children:
                            "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: "col-md-6 col-12 mb-4",
                children: (0, t.jsxs)(M.Z, {
                  children: [
                    (0, t.jsxs)(B.Z, {
                      className: "justify-content-between",
                      children: [
                        "Cras justo odio ",
                        (0, t.jsx)(R.Z, { pill: !0, children: "14" }),
                      ],
                    }),
                    (0, t.jsxs)(B.Z, {
                      className: "justify-content-between",
                      children: [
                        "Dapibus ac facilisis in ",
                        (0, t.jsx)(R.Z, { pill: !0, children: "2" }),
                      ],
                    }),
                    (0, t.jsxs)(B.Z, {
                      className: "justify-content-between",
                      children: [
                        "Morbi leo risus ",
                        (0, t.jsx)(R.Z, { pill: !0, children: "1" }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        H = r(23923),
        W = r(65881),
        X = function (e) {
          return (0, t.jsx)("div", {
            className: "mb-5",
            children: (0, t.jsxs)(H.Z, {
              tag: "nav",
              children: [
                (0, t.jsx)(W.Z, { tag: "a", href: "#", children: "Home" }),
                (0, t.jsx)(W.Z, { tag: "a", href: "#", children: "Library" }),
                (0, t.jsx)(W.Z, { tag: "a", href: "#", children: "Data" }),
                (0, t.jsx)(W.Z, {
                  active: !0,
                  tag: "span",
                  children: "React Bootstrap",
                }),
              ],
            }),
          });
        },
        z = r(53522),
        G = function () {
          return (0, t.jsx)("div", {
            className: "view-header",
            children: (0, t.jsxs)("header", {
              className: "title text-white",
              children: [
                (0, t.jsx)("h1", {
                  className: "h4 text-uppercase",
                  children: "Extras",
                }),
                (0, t.jsx)("p", {
                  className: "mb-0",
                  children: "Some other ui components",
                }),
              ],
            }),
          });
        },
        V = function (e) {
          var s = e.children;
          return (0, t.jsx)("div", {
            className: "view-content view-components",
            children: s,
          });
        };
      function F(e) {
        return (0, t.jsxs)(z.Z, {
          children: [
            (0, t.jsx)(G, {}),
            (0, t.jsx)(V, {
              children: (0, t.jsx)(i.Z, {
                children: (0, t.jsxs)(c.Z, {
                  children: [
                    (0, t.jsx)("h6", {
                      className: "text-uppercase mb-4",
                      children: "Tooltips",
                    }),
                    (0, t.jsx)(f, {}),
                    (0, t.jsx)("h6", {
                      className: "text-uppercase",
                      children: "Popovers",
                    }),
                    (0, t.jsx)("div", {
                      className: "small mb-4",
                      children: "Click on the button to activate popover",
                    }),
                    (0, t.jsx)(w, {}),
                    (0, t.jsx)("h6", {
                      className: "text-uppercase mb-3",
                      children: "Progress Bars",
                    }),
                    (0, t.jsx)(C, {}),
                    (0, t.jsx)("h6", {
                      className: "text-uppercase mb-3",
                      children: "Badges",
                    }),
                    (0, t.jsx)(D, {}),
                    (0, t.jsx)("h6", {
                      className: "text-uppercase mb-3",
                      children: "Pagination",
                    }),
                    (0, t.jsx)(L, {}),
                    (0, t.jsx)("h6", {
                      className: "text-uppercase mb-3",
                      children: "Breadcrumbs",
                    }),
                    (0, t.jsx)(X, {}),
                    (0, t.jsx)("h6", {
                      className: "text-uppercase mb-3",
                      children: "List Groups",
                    }),
                    (0, t.jsx)(A, {}),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    41308: function (e, s, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/ui/extras",
        function () {
          return r(35430);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 351, 658, 572, 707, 579, 420, 110, 522], function () {
      return (s = 41308), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
