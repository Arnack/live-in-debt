(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [516],
  {
    39958: function (s, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          default: function () {
            return x;
          },
        });
      var i = a(85893),
        n = (a(67294), a(56941)),
        r = a(91121),
        l = a(24353),
        c = a(53522),
        t = function () {
          return (0, i.jsx)("div", {
            className: "view-header",
            children: (0, i.jsxs)("header", {
              className: "title text-white",
              children: [
                (0, i.jsx)("h1", {
                  className: "h4 text-uppercase",
                  children: "Tables",
                }),
                (0, i.jsx)("p", {
                  className: "mb-0",
                  children: "Bootstrap 4 table and Reactable",
                }),
              ],
            }),
          });
        },
        d = function (s) {
          var e = s.children;
          return (0, i.jsx)("div", {
            className: "view-content view-components",
            children: e,
          });
        },
        h = [
          { first: "John", last: "Doe", earnings: "$304", sales: "102" },
          { first: "Maria", last: "Lopez", earnings: "$834", sales: "402" },
          { first: "Sofia", last: "Flores", earnings: "$943", sales: "542" },
          { first: "Jean", last: "Cooper", earnings: "$1234", sales: "891" },
        ],
        o = function (s) {
          var e = s.data;
          return (0, i.jsxs)("table", {
            className: "table",
            children: [
              (0, i.jsx)("thead", {
                children: (0, i.jsxs)("tr", {
                  children: [
                    (0, i.jsx)("th", { children: "#" }),
                    (0, i.jsx)("th", { children: "First Name" }),
                    (0, i.jsx)("th", { children: "Last Name" }),
                    (0, i.jsx)("th", { children: "Earnings" }),
                    (0, i.jsx)("th", { children: "Sales" }),
                  ],
                }),
              }),
              (0, i.jsx)("tbody", {
                children: e.map(function (s, e) {
                  return (0,
                  i.jsxs)("tr", { children: [(0, i.jsx)("th", { scope: "row", children: e + 1 }), (0, i.jsx)("td", { children: s.first }), (0, i.jsx)("td", { children: s.last }), (0, i.jsx)("td", { children: s.earnings }), (0, i.jsx)("td", { children: s.sales })] }, e);
                }),
              }),
            ],
          });
        },
        p = [
          {
            date: "15-Jan-2016",
            impressions: 8403,
            clicks: 820,
            sales: 334,
            profit: 1203,
          },
          {
            date: "16-Jan-2016",
            impressions: 6454,
            clicks: 550,
            sales: 234,
            profit: 1003,
          },
          {
            date: "17-Jan-2016",
            impressions: 8473,
            clicks: 749,
            sales: 245,
            profit: 903,
          },
          {
            date: "18-Jan-2016",
            impressions: 9203,
            clicks: 230,
            sales: 454,
            profit: 1440,
          },
          {
            date: "19-Jan-2016",
            impressions: 1420,
            clicks: 30,
            sales: 57,
            profit: 143,
          },
          {
            date: "20-Jan-2016",
            impressions: 4859,
            clicks: 90,
            sales: 30,
            profit: 403,
          },
          {
            date: "21-Jan-2016",
            impressions: 4453,
            clicks: 720,
            sales: 334,
            profit: 1102,
          },
          {
            date: "22-Jan-2016",
            impressions: 6454,
            clicks: 550,
            sales: 234,
            profit: 1003,
          },
          {
            date: "23-Jan-2016",
            impressions: 8473,
            clicks: 749,
            sales: 245,
            profit: 903,
          },
          {
            date: "24-Jan-2016",
            impressions: 7645,
            clicks: 230,
            sales: 454,
            profit: 1440,
          },
          {
            date: "25-Jan-2016",
            impressions: 1420,
            clicks: 30,
            sales: 57,
            profit: 143,
          },
          {
            date: "26-Jan-2016",
            impressions: 859,
            clicks: 25,
            sales: 15,
            profit: 99,
          },
        ];
      function x() {
        return (0, i.jsxs)(c.Z, {
          children: [
            (0, i.jsx)(t, {}),
            (0, i.jsxs)(d, {
              children: [
                (0, i.jsx)(n.Z, {
                  className: "mb-4",
                  children: (0, i.jsxs)(r.Z, {
                    className: "table-responsive",
                    children: [
                      (0, i.jsx)("h6", {
                        className: "mb-4 text-uppercase",
                        children: "Basic Table",
                      }),
                      (0, i.jsx)(o, { data: h }),
                    ],
                  }),
                }),
                (0, i.jsx)(n.Z, {
                  className: "mb-4",
                  children: (0, i.jsxs)(r.Z, {
                    className: "table-responsive",
                    children: [
                      (0, i.jsx)("h6", {
                        className: "mb-4 text-uppercase",
                        children: "Data Table",
                      }),
                      (0, i.jsx)(l.Table, {
                        className: "table",
                        data: p,
                        sortable: !0,
                        itemsPerPage: 5,
                        pageButtonLimit: 5,
                        children: (0, i.jsxs)(l.Thead, {
                          children: [
                            (0, i.jsx)(l.Th, {
                              column: "date",
                              children: (0, i.jsx)("span", {
                                children: "date",
                              }),
                            }),
                            (0, i.jsx)(l.Th, {
                              column: "impressions",
                              children: (0, i.jsx)("span", {
                                children: "impressions",
                              }),
                            }),
                            (0, i.jsx)(l.Th, {
                              column: "clicks",
                              children: (0, i.jsx)("span", {
                                children: "clicks",
                              }),
                            }),
                            (0, i.jsx)(l.Th, {
                              column: "sales",
                              children: (0, i.jsx)("span", {
                                children: "sales",
                              }),
                            }),
                            (0, i.jsx)(l.Th, {
                              column: "profit",
                              children: (0, i.jsx)("span", {
                                children: "profit ($)",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    44115: function (s, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/tables",
        function () {
          return a(39958);
        },
      ]);
    },
  },
  function (s) {
    s.O(0, [774, 351, 658, 572, 707, 353, 522], function () {
      return (e = 44115), s((s.s = e));
      var e;
    });
    var e = s.O();
    _N_E = e;
  },
]);
