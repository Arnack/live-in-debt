(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [330],
  {
    42465: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return D;
          },
        });
      var i = n(6610),
        s = n(5991),
        o = n(63349),
        r = n(65255),
        c = n(46070),
        l = n(77608),
        a = n(96156),
        u = n(85893),
        d = n(67294),
        h = n(17834),
        f = n(56941),
        x = n(91121),
        m = n(82669),
        j = n(67954),
        v = n(51252),
        p = n(609),
        Z = n(97975),
        g = n(26656),
        y = n.n(g),
        N = n(53522);
      function b(e) {
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
            i = (0, l.Z)(e);
          if (t) {
            var s = (0, l.Z)(this).constructor;
            n = Reflect.construct(i, arguments, s);
          } else n = i.apply(this, arguments);
          return (0, c.Z)(this, n);
        };
      }
      var _ = function () {
          return (0, u.jsx)("div", {
            className: "view-header",
            children: (0, u.jsxs)("header", {
              className: "title text-white",
              children: [
                (0, u.jsx)("h1", {
                  className: "h4 text-uppercase",
                  children: "Notification",
                }),
                (0, u.jsx)("p", {
                  className: "mb-0",
                  children: "Alerts and notifications system",
                }),
              ],
            }),
          });
        },
        w = function (e) {
          var t = e.children;
          return (0, u.jsx)("div", {
            className: "view-content view-components",
            children: t,
          });
        },
        S = function () {
          return (0, u.jsxs)("div", {
            className: "mb-4",
            children: [
              (0, u.jsxs)(h.Z, {
                color: "success",
                children: [
                  (0, u.jsx)("strong", { children: "Well done!" }),
                  " You successfully read this important alert message.",
                ],
              }),
              (0, u.jsxs)(h.Z, {
                color: "info",
                children: [
                  (0, u.jsx)("strong", { children: "Heads up!" }),
                  " This alert needs your attention, but it's not super important.",
                ],
              }),
              (0, u.jsxs)(h.Z, {
                color: "warning",
                children: [
                  (0, u.jsx)("strong", { children: "Warning!" }),
                  " Better check yourself, you're not looking too good.",
                ],
              }),
              (0, u.jsxs)(h.Z, {
                color: "danger",
                children: [
                  (0, u.jsx)("strong", { children: "Oh snap!" }),
                  " Change a few things up and try submitting again.",
                ],
              }),
            ],
          });
        },
        k = (function (e) {
          (0, r.Z)(n, e);
          var t = b(n);
          function n(e) {
            var s;
            return (
              (0, i.Z)(this, n),
              (s = t.call(this, e)),
              (0, a.Z)((0, o.Z)(s), "onDismiss", function () {
                s.setState({ visible: !1 });
              }),
              (s.state = { visible: !0 }),
              s
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "render",
                value: function () {
                  return (0, u.jsx)(h.Z, {
                    color: "info",
                    isOpen: this.state.visible,
                    toggle: this.onDismiss,
                    className: "mb-4",
                    children: "I am an alert and I can be dismissed!",
                  });
                },
              },
            ]),
            n
          );
        })(d.Component),
        C = (function (e) {
          (0, r.Z)(n, e);
          var t = b(n);
          function n(e) {
            var s;
            return (
              (0, i.Z)(this, n),
              (s = t.call(this, e)),
              (0, a.Z)((0, o.Z)(s), "notify", function (e) {
                e.preventDefault();
                var t = s.state.notification;
                (t.onRemove = s.onRemove),
                  (s._lastNotificationAdded = s._notificationSystem.addNotification(
                    t
                  )),
                  s.setState({});
              }),
              (0, a.Z)((0, o.Z)(s), "changed", function (e) {
                var t = s.state.notification,
                  n = e.target.name,
                  i = e.target.value;
                (t[n] = i), s.setState({ notification: t });
              }),
              (0, a.Z)((0, o.Z)(s), "onRemove", function (e) {
                s._lastNotificationAdded &&
                  e.uid === s._lastNotificationAdded.uid &&
                  (s._lastNotificationAdded = null),
                  s.setState({});
              }),
              (s._notificationSystem = null),
              (s._lastNotificationAdded = null),
              (s.state = {
                notification: {
                  title: "Default Title",
                  message: "Default Message",
                  level: "success",
                  position: "bc",
                  dismissible: !0,
                },
              }),
              s
            );
          }
          return (
            (0, s.Z)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._notificationSystem = this.refs.notificationSystem;
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.notification;
                  return (0, u.jsxs)(f.Z, {
                    color: "info",
                    outline: !0,
                    children: [
                      (0, u.jsxs)(x.Z, {
                        children: [
                          (0, u.jsxs)(m.Z, {
                            row: !0,
                            children: [
                              (0, u.jsx)(j.Z, { sm: 2, children: "Title:" }),
                              (0, u.jsxs)(v.Z, {
                                sm: 10,
                                children: [
                                  (0, u.jsx)(p.Z, {
                                    name: "title",
                                    type: "text",
                                    value: e.title,
                                    onChange: this.changed,
                                  }),
                                  (0, u.jsx)("small", {
                                    children: "Leave empty to hide.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, u.jsxs)(m.Z, {
                            row: !0,
                            children: [
                              (0, u.jsx)(j.Z, { sm: 2, children: "Message:" }),
                              (0, u.jsx)(v.Z, {
                                sm: 10,
                                children: (0, u.jsx)(p.Z, {
                                  name: "message",
                                  type: "text",
                                  value: e.message,
                                  onChange: this.changed,
                                }),
                              }),
                            ],
                          }),
                          (0, u.jsxs)(m.Z, {
                            row: !0,
                            children: [
                              (0, u.jsx)(j.Z, { sm: 2, children: "Position:" }),
                              (0, u.jsx)(v.Z, {
                                sm: 10,
                                children: (0, u.jsxs)("select", {
                                  className: "form-control",
                                  name: "position",
                                  value: e.position,
                                  onChange: this.changed,
                                  children: [
                                    (0, u.jsx)("option", {
                                      value: "tl",
                                      children: "Top left (tl)",
                                    }),
                                    (0, u.jsx)("option", {
                                      value: "tr",
                                      children: "Top right (tr)",
                                    }),
                                    (0, u.jsx)("option", {
                                      value: "tc",
                                      children: "Top center (tc)",
                                    }),
                                    (0, u.jsx)("option", {
                                      value: "bl",
                                      children: "Bottom left (bl)",
                                    }),
                                    (0, u.jsx)("option", {
                                      value: "br",
                                      children: "Bottom right (br)",
                                    }),
                                    (0, u.jsx)("option", {
                                      value: "bc",
                                      children: "Bottom center (bc)",
                                    }),
                                    (0, u.jsx)("option", {
                                      value: "in",
                                      children: "Invalid position",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, u.jsxs)(m.Z, {
                            row: !0,
                            children: [
                              (0, u.jsx)(j.Z, { sm: 2, children: "State:" }),
                              (0, u.jsx)(v.Z, {
                                sm: 10,
                                children: (0, u.jsxs)("select", {
                                  className: "form-control",
                                  name: "level",
                                  value: e.level,
                                  onChange: this.changed,
                                  children: [
                                    (0, u.jsx)("option", {
                                      value: "success",
                                      children: "Success (success)",
                                    }),
                                    (0, u.jsx)("option", {
                                      value: "error",
                                      children: "Error (error)",
                                    }),
                                    (0, u.jsx)("option", {
                                      value: "warning",
                                      children: "Warning (warning)",
                                    }),
                                    (0, u.jsx)("option", {
                                      value: "info",
                                      children: "Info (info)",
                                    }),
                                    (0, u.jsx)("option", {
                                      value: "in",
                                      children: "Invalid level",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, u.jsx)(m.Z, {
                            children: (0, u.jsx)(Z.Z, {
                              color: "success",
                              size: "lg",
                              onClick: this.notify,
                              children: "Notify",
                            }),
                          }),
                        ],
                      }),
                      (0, u.jsx)(y(), { ref: "notificationSystem" }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(d.Component);
      function D(e) {
        return (0, u.jsxs)(N.Z, {
          children: [
            (0, u.jsx)(_, {}),
            (0, u.jsx)(w, {
              children: (0, u.jsx)(f.Z, {
                children: (0, u.jsxs)(x.Z, {
                  children: [
                    (0, u.jsx)("h6", {
                      className: "text-uppercase mb-4",
                      children: "Static Alerts",
                    }),
                    (0, u.jsx)(S, {}),
                    (0, u.jsx)("h6", {
                      className: "text-uppercase mb-4",
                      children: "Dismissal Alert",
                    }),
                    (0, u.jsx)(k, {}),
                    (0, u.jsx)("hr", {}),
                    (0, u.jsx)("h6", {
                      className: "text-uppercase mb-4",
                      children: "React Notification",
                    }),
                    (0, u.jsx)(C, {}),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    37786: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/ui/notification",
        function () {
          return n(42465);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 351, 658, 572, 707, 579, 57, 522], function () {
      return (t = 37786), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
