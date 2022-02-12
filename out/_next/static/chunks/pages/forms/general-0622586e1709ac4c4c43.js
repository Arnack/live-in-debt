(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [606],
  {
    24939: function (e, s, l) {
      "use strict";
      l.r(s),
        l.d(s, {
          default: function () {
            return g;
          },
        });
      var r = l(85893),
        n = (l(67294), l(15538)),
        i = l(82669),
        c = l(67954),
        a = l(51252),
        d = l(609),
        x = l(70474),
        h = l(16792),
        t = l(69618),
        o = l(76277),
        m = l(97975),
        j = l(56941),
        p = l(91121),
        Z = l(53522),
        u = function () {
          return (0, r.jsx)("div", {
            className: "view-header",
            children: (0, r.jsxs)("header", {
              className: "title text-white",
              children: [
                (0, r.jsx)("h1", {
                  className: "h4 text-uppercase",
                  children: "General Forms",
                }),
                (0, r.jsx)("p", {
                  className: "mb-0",
                  children: "General bootstrap form elements",
                }),
              ],
            }),
          });
        },
        w = function (e) {
          var s = e.children;
          return (0, r.jsx)("div", {
            className: "view-content view-components",
            children: s,
          });
        },
        f = function () {
          return (0, r.jsxs)(n.Z, {
            onSubmit: function (e) {
              return e.preventDefault();
            },
            children: [
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleEmail",
                    sm: 3,
                    children: "Email",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsx)(d.Z, {
                      type: "email",
                      name: "email",
                      id: "exampleEmail",
                      placeholder: "with a placeholder",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleSearch",
                    sm: 3,
                    children: "Search",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsx)(d.Z, {
                      type: "search",
                      name: "search",
                      id: "exampleSearch",
                      placeholder: "type your search here.",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleNumber",
                    sm: 3,
                    children: "Number",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsx)(d.Z, {
                      type: "number",
                      name: "number",
                      id: "exampleNumber",
                      placeholder: "234",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleDate",
                    sm: 3,
                    children: "Date",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsx)(d.Z, {
                      type: "date",
                      name: "date",
                      id: "exampleDate",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleColor",
                    sm: 3,
                    children: "Color",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsx)(d.Z, {
                      type: "color",
                      name: "color",
                      id: "exampleColor",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleTel",
                    sm: 3,
                    children: "Telephone",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsx)(d.Z, {
                      type: "tel",
                      name: "tel",
                      readOnly: !0,
                      value: "1-(999)-(23)-(555)",
                      id: "exampleTel",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleTime",
                    sm: 3,
                    children: "Time",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsx)(d.Z, {
                      type: "time",
                      name: "time",
                      id: "exampleTime",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleSelect",
                    sm: 3,
                    children: "Select",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsxs)(d.Z, {
                      type: "select",
                      name: "select",
                      id: "exampleSelect",
                      children: [
                        (0, r.jsx)("option", { children: "1" }),
                        (0, r.jsx)("option", { children: "2" }),
                        (0, r.jsx)("option", { children: "3" }),
                        (0, r.jsx)("option", { children: "4" }),
                        (0, r.jsx)("option", { children: "5" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleSelectMulti",
                    sm: 3,
                    children: "Select Multiple",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsxs)(d.Z, {
                      type: "select",
                      name: "selectMulti",
                      id: "exampleSelectMulti",
                      multiple: !0,
                      children: [
                        (0, r.jsx)("option", { children: "1" }),
                        (0, r.jsx)("option", { children: "2" }),
                        (0, r.jsx)("option", { children: "3" }),
                        (0, r.jsx)("option", { children: "4" }),
                        (0, r.jsx)("option", { children: "5" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                color: "success",
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleEmail",
                    sm: 3,
                    children: "Input with success",
                  }),
                  (0, r.jsxs)(a.Z, {
                    sm: 9,
                    children: [
                      (0, r.jsx)(d.Z, { state: "success" }),
                      (0, r.jsx)(x.Z, { children: "Success! You did it!" }),
                      (0, r.jsx)(h.Z, {
                        color: "muted",
                        children: "Example help text that remains unchanged.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                color: "warning",
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "examplePassword",
                    sm: 3,
                    children: "Input with warning",
                  }),
                  (0, r.jsxs)(a.Z, {
                    sm: 9,
                    children: [
                      (0, r.jsx)(d.Z, { state: "warning" }),
                      (0, r.jsx)(x.Z, {
                        children:
                          "Whoops, check your formatting and try again.",
                      }),
                      (0, r.jsx)(h.Z, {
                        color: "muted",
                        children: "Example help text that remains unchanged.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                color: "danger",
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "examplePassword",
                    sm: 3,
                    children: "Input with danger",
                  }),
                  (0, r.jsxs)(a.Z, {
                    sm: 9,
                    children: [
                      (0, r.jsx)(d.Z, { state: "danger" }),
                      (0, r.jsx)(x.Z, {
                        children: "Oh noes! that name is already taken",
                      }),
                      (0, r.jsx)(h.Z, {
                        color: "muted",
                        children: "Example help text that remains unchanged.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleUrl",
                    sm: 3,
                    size: "lg",
                    children: "Url (Size Large)",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsx)(d.Z, {
                      type: "email",
                      name: "url",
                      id: "exampleUrl",
                      placeholder: "https://example.com",
                      size: "lg",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "examplePassword",
                    sm: 3,
                    size: "sm",
                    children: "Password (Size Small)",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsx)(d.Z, {
                      type: "email",
                      name: "url",
                      id: "examplePassword",
                      size: "sm",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "examplePassword",
                    sm: 3,
                    children: "Custom File Input",
                  }),
                  (0, r.jsxs)(a.Z, {
                    sm: 9,
                    children: [
                      (0, r.jsx)(d.Z, {
                        type: "file",
                        name: "url",
                        className: "custom-file-input",
                        id: "examplePassword",
                      }),
                      (0, r.jsx)("span", { className: "custom-file-control" }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)(i.Z, {
                row: !0,
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "exampleInputGroup",
                    sm: 3,
                    children: "Input Group",
                  }),
                  (0, r.jsx)(a.Z, {
                    sm: 9,
                    children: (0, r.jsxs)(t.Z, {
                      children: [
                        (0, r.jsx)(d.Z, { placeholder: "username" }),
                        (0, r.jsx)(o.Z, {
                          addonType: "prepend",
                          children: "@example.com",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(i.Z, {
                row: !0,
                children: (0, r.jsxs)(a.Z, {
                  sm: 12,
                  className: "text-right",
                  children: [
                    (0, r.jsx)(m.Z, { color: "primary", children: "Submit" }),
                    " ",
                    (0, r.jsx)(m.Z, { children: "Cancel" }),
                  ],
                }),
              }),
            ],
          });
        },
        b = function () {
          return (0, r.jsxs)(n.Z, {
            inline: !0,
            children: [
              (0, r.jsxs)(i.Z, {
                children: [
                  (0, r.jsx)(c.Z, { for: "exampleEmail", children: "Email" }),
                  "\xa0\xa0",
                  (0, r.jsx)(d.Z, {
                    type: "email",
                    name: "email",
                    id: "exampleEmail",
                    placeholder: "something@idk.cool",
                  }),
                ],
              }),
              "\xa0\xa0",
              (0, r.jsxs)(i.Z, {
                children: [
                  (0, r.jsx)(c.Z, {
                    for: "examplePassword",
                    children: "Password",
                  }),
                  "\xa0\xa0",
                  (0, r.jsx)(d.Z, {
                    type: "password",
                    name: "password",
                    id: "examplePassword",
                    placeholder: "it's secret",
                  }),
                ],
              }),
              "\xa0\xa0\xa0",
              (0, r.jsx)(m.Z, { children: "Submit" }),
            ],
          });
        },
        y = function () {
          return (0, r.jsxs)(n.Z, {
            className: "row",
            children: [
              (0, r.jsx)(a.Z, {
                children: (0, r.jsxs)(i.Z, {
                  tag: "fieldset",
                  children: [
                    (0, r.jsx)("legend", {
                      className: "col-form-legend font-weight-bold",
                      children: "Radio Buttons",
                    }),
                    (0, r.jsx)(i.Z, {
                      check: !0,
                      children: (0, r.jsxs)(c.Z, {
                        check: !0,
                        children: [
                          (0, r.jsx)(d.Z, { type: "radio", name: "radio2" }),
                          " Option one is this and that\u2014be sure to include why it's great",
                        ],
                      }),
                    }),
                    (0, r.jsx)(i.Z, {
                      check: !0,
                      children: (0, r.jsxs)(c.Z, {
                        check: !0,
                        children: [
                          (0, r.jsx)(d.Z, { type: "radio", name: "radio2" }),
                          " Selecting this option will deselect option one.",
                        ],
                      }),
                    }),
                    (0, r.jsx)(i.Z, {
                      check: !0,
                      disabled: !0,
                      children: (0, r.jsxs)(c.Z, {
                        check: !0,
                        children: [
                          (0, r.jsx)(d.Z, {
                            type: "radio",
                            name: "radio2",
                            disabled: !0,
                          }),
                          " Option three is disabled",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)(a.Z, {
                sm: 6,
                children: (0, r.jsxs)(i.Z, {
                  children: [
                    (0, r.jsx)("legend", {
                      className: "col-form-legend font-weight-bold",
                      children: "Checkboxes",
                    }),
                    (0, r.jsx)("div", {
                      children: (0, r.jsxs)(c.Z, {
                        check: !0,
                        children: [
                          (0, r.jsx)(d.Z, { type: "checkbox" }),
                          "\xa0\xa0 Check me out",
                        ],
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "has-danger",
                      children: (0, r.jsxs)(c.Z, {
                        check: !0,
                        children: [
                          (0, r.jsx)(d.Z, { type: "checkbox" }),
                          "\xa0\xa0 Checkbox with Danger",
                        ],
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "has-success",
                      children: (0, r.jsxs)(c.Z, {
                        check: !0,
                        children: [
                          (0, r.jsx)(d.Z, { type: "checkbox" }),
                          "\xa0\xa0 Checkbox with Success",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      function g() {
        return (0, r.jsxs)(Z.Z, {
          children: [
            (0, r.jsx)(u, {}),
            (0, r.jsxs)(w, {
              children: [
                (0, r.jsx)(j.Z, {
                  className: "mb-4",
                  children: (0, r.jsxs)(p.Z, {
                    children: [
                      (0, r.jsx)("h6", {
                        className: "mb-4 text-uppercase",
                        children: "Form Inputs",
                      }),
                      (0, r.jsx)(f, {}),
                    ],
                  }),
                }),
                (0, r.jsx)(j.Z, {
                  className: "mb-4",
                  children: (0, r.jsxs)(p.Z, {
                    children: [
                      (0, r.jsx)("h6", {
                        className: "mb-4 text-uppercase",
                        children: "Inline Form",
                      }),
                      (0, r.jsx)(b, {}),
                    ],
                  }),
                }),
                (0, r.jsx)(j.Z, {
                  children: (0, r.jsxs)(p.Z, {
                    children: [
                      (0, r.jsx)("h6", {
                        className: "mb-4 text-uppercase",
                        children: "Checkboxes and Radios",
                      }),
                      (0, r.jsx)(y, {}),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    64632: function (e, s, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/forms/general",
        function () {
          return l(24939);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 351, 658, 572, 707, 370, 522], function () {
      return (s = 64632), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
