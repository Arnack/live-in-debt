(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [359],
  {
    90837: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return k;
          },
        });
      var s = a(85893),
        r = a(67294),
        n = a(56941),
        c = a(91121),
        l = (a(85837), a(6610)),
        i = a(5991),
        o = a(63349),
        u = a(65255),
        h = a(46070),
        d = a(77608),
        f = a(96156),
        m = a(5818);
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
          var a,
            s = (0, d.Z)(e);
          if (t) {
            var r = (0, d.Z)(this).constructor;
            a = Reflect.construct(s, arguments, r);
          } else a = s.apply(this, arguments);
          return (0, h.Z)(this, a);
        };
      }
      var p = [
          {
            value: "australian-capital-territory",
            label: "Australian Capital Territory",
            className: "State-ACT",
          },
          {
            value: "new-south-wales",
            label: "New South Wales",
            className: "State-NSW",
          },
          { value: "victoria", label: "Victoria", className: "State-Vic" },
          { value: "queensland", label: "Queensland", className: "State-Qld" },
          {
            value: "western-australia",
            label: "Western Australia",
            className: "State-WA",
          },
          {
            value: "south-australia",
            label: "South Australia",
            className: "State-SA",
          },
          { value: "tasmania", label: "Tasmania", className: "State-Tas" },
          {
            value: "northern-territory",
            label: "Northern Territory",
            className: "State-NT",
          },
        ],
        x = (function (e) {
          (0, u.Z)(a, e);
          var t = b(a);
          function a(e) {
            var s;
            return (
              (0, l.Z)(this, a),
              (s = t.call(this, e)),
              (0, f.Z)((0, o.Z)(s), "updateValue", function (e) {
                s.setState({ selectValue: e });
              }),
              (0, f.Z)((0, o.Z)(s), "toggleCheckbox", function (e) {
                var t = {};
                (t[e.target.name] = e.target.checked), s.setState(t);
              }),
              (s.state = {
                options: p,
                disabled: !1,
                clearable: !0,
                selectValue: "new-south-wales",
              }),
              s
            );
          }
          return (
            (0, i.Z)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.options,
                    a = e.disabled,
                    r = e.clearable,
                    n = e.selectValue;
                  return (0, s.jsxs)("div", {
                    className: "col-12 col-md-6",
                    children: [
                      (0, s.jsx)("div", {
                        className: "mb-2",
                        children: "Simple Custom Select",
                      }),
                      (0, s.jsx)(m.ZP, {
                        options: t,
                        autfocus: !0,
                        clearable: r,
                        disabled: a,
                        value: n,
                        onChange: this.updateValue,
                      }),
                      (0, s.jsxs)("div", {
                        className: "form-group mt-2",
                        children: [
                          (0, s.jsxs)("label", {
                            className: "checkbox mr-5",
                            children: [
                              (0, s.jsx)("input", {
                                type: "checkbox",
                                className: "checkbox-control",
                                name: "disabled",
                                checked: this.state.disabled,
                                onChange: this.toggleCheckbox,
                              }),
                              (0, s.jsx)("span", {
                                className: "checkbox-label",
                                children: "\xa0Disabled",
                              }),
                            ],
                          }),
                          (0, s.jsxs)("label", {
                            className: "checkbox",
                            children: [
                              (0, s.jsx)("input", {
                                type: "checkbox",
                                className: "checkbox-control",
                                name: "clearable",
                                checked: this.state.clearable,
                                onChange: this.toggleCheckbox,
                              }),
                              (0, s.jsx)("span", {
                                className: "checkbox-label",
                                children: "\xa0Clearable",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(r.Component);
      function v(e) {
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
          var a,
            s = (0, d.Z)(e);
          if (t) {
            var r = (0, d.Z)(this).constructor;
            a = Reflect.construct(s, arguments, r);
          } else a = s.apply(this, arguments);
          return (0, h.Z)(this, a);
        };
      }
      r.Component;
      var N = a(53522),
        j = (0, a(5152).default)(
          function () {
            return Promise.all([a.e(925), a.e(41)])
              .then(a.t.bind(a, 35108, 23))
              .then(function (e) {
                return e.Editor;
              });
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [35108];
              },
              modules: ["react-draft-wysiwyg"],
            },
          }
        ),
        y = function () {
          return (0, s.jsx)("div", {
            className: "view-header",
            children: (0, s.jsxs)("header", {
              className: "title text-white",
              children: [
                (0, s.jsx)("h1", {
                  className: "h4 text-uppercase",
                  children: "Advanced Forms",
                }),
                (0, s.jsx)("p", {
                  className: "mb-0",
                  children:
                    "Advanced form like custom select, text editor etc.",
                }),
              ],
            }),
          });
        },
        S = function (e) {
          var t = e.children;
          return (0, s.jsx)("div", {
            className: "view-content view-components",
            children: t,
          });
        };
      function k() {
        return (0, s.jsxs)(N.Z, {
          children: [
            (0, s.jsx)(y, {}),
            (0, s.jsxs)(S, {
              children: [
                (0, s.jsx)(n.Z, {
                  className: "mb-4",
                  children: (0, s.jsxs)(c.Z, {
                    children: [
                      (0, s.jsx)("h6", {
                        className: "mb-4 text-uppercase",
                        children: "Text Editor",
                      }),
                      (0, s.jsx)(j, {
                        wrapperStyle: {
                          border: "1px solid #efefef",
                          padding: "1rem",
                        },
                        editorStyle: { minHeight: "20em" },
                        toolbarStyle: { fontSize: "12px" },
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)(n.Z, {
                  className: "mb-4",
                  style: { minHeight: 400 },
                  children: (0, s.jsxs)(c.Z, {
                    children: [
                      (0, s.jsx)("h6", {
                        className: "mb-4 text-uppercase",
                        children: "React Select",
                      }),
                      (0, s.jsx)(x, {}),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    46154: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/forms/advanced",
        function () {
          return a(90837);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 351, 658, 572, 707, 766, 245, 522], function () {
      return (t = 46154), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
